import { copyFile, lstat, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromMarkdown } from 'mdast-util-from-markdown';

const articleExtension = /\.(md|mdx|mdoc|markdoc)$/;
const rasterExtension = /\.(png|jpe?g|webp|avif)$/i;

function encodeSegment(segment) {
  // encodeURIComponent leaves parentheses and quotes, which can terminate a
  // Markdown destination even though they are legal in a filesystem name.
  return encodeURIComponent(segment).replace(/[!'()*]/g, (character) =>
    `%${character.charCodeAt(0).toString(16).toUpperCase()}`);
}

// Capture destination tokens rather than serializing Markdown: serialization
// would also change prose, whitespace, code examples, alt text and titles.
function parseImages(body) {
  const destinations = new Map();
  const labels = new Map();
  const titles = new Map();
  function destination(token) {
    const url = this.resume();
    const node = this.stack.at(-1);
    node.url = url;
    destinations.set(node, token);
  }
  const tree = fromMarkdown(body, {
    mdastExtensions: [{
      enter: {
        label(token) {
          labels.set(this.stack.at(-1), token);
          this.buffer();
        },
        definitionTitle(token) {
          titles.set(this.stack.at(-1), token);
        },
      },
      exit: {
        resourceDestinationString: destination,
        definitionDestinationString: destination,
      },
    }],
  });
  const images = [];
  const definitions = new Map();
  function visit(node) {
    if (node.type === 'image' || node.type === 'imageReference') images.push(node);
    if (node.type === 'definition' && !definitions.has(node.identifier)) {
      definitions.set(node.identifier, node);
    }
    for (const child of node.children ?? []) visit(child);
  }
  visit(tree);
  return { images, definitions, destinations, labels, titles };
}

function isWithin(root, target) {
  const relative = path.relative(root, target);
  return relative !== '..' && !relative.startsWith(`..${path.sep}`) && !path.isAbsolute(relative);
}

// Check each component, not just the final file: a directory symlink can also
// escape the source/output tree. Missing components are allowed only for output.
async function checkPath(root, target, allowMissing = false) {
  if (!isWithin(root, target)) throw new Error('Asset path escapes the project');
  const parts = path.relative(root, target).split(path.sep).filter(Boolean);
  let current = root;
  for (const part of ['', ...parts]) {
    current = path.join(current, part);
    try {
      if ((await lstat(current)).isSymbolicLink()) {
        throw new Error(`Symlink is not allowed in asset path: ${current}`);
      }
    } catch (error) {
      if (allowMissing && error.code === 'ENOENT') continue;
      throw error;
    }
  }
}

async function articleSources(root, base) {
  const sources = new Map();
  const content = path.join(root, 'src/content/docs');
  async function walk(directory) {
    await checkPath(root, directory);
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Symlink is not allowed in article sources: ${filename}`);
      if (entry.isDirectory()) await walk(filename);
      else if (articleExtension.test(entry.name)) {
        const segments = path.relative(content, filename).replaceAll(path.sep, '/').replace(articleExtension, '').split('/');
        if (segments.at(-1) === 'index') segments.pop();
        const route = `${base}/${segments.join('/')}`.replace(/\/+$/, '') || '/';
        if (sources.has(route)) throw new Error(`Ambiguous article source for ${route}`);
        sources.set(route, filename);
      }
    }
  }
  await walk(content);
  return sources;
}

function screenshotPath(url, source, root) {
  // Remote images, data URLs, and other non-file references stay untouched.
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(url)) return null;
  const boundary = url.search(/[?#]/);
  const rawPath = boundary < 0 ? url : url.slice(0, boundary);
  let decoded;
  try {
    decoded = decodeURIComponent(rawPath);
  } catch {
    if (rawPath.includes('screenshots')) throw new Error(`Invalid screenshot URL: ${url}`);
    return null;
  }
  const rootPath = path.join(root, 'src/assets/screenshots');
  const filename = decoded.startsWith('/')
    ? path.resolve(root, `.${decoded}`)
    : path.resolve(path.dirname(source), decoded);
  const marker = decoded.replaceAll('\\', '/').match(/(?:^|\/)assets\/screenshots(?:\/|$)/);
  if (!marker && !isWithin(rootPath, filename)) return null;
  if (boundary >= 0) throw new Error(`Screenshot URLs must not include a query or fragment: ${url}`);
  const afterMarker = marker ? decoded.slice(marker.index + marker[0].length) : '';
  if (decoded.includes('\\') || decoded.includes('\0') ||
      afterMarker.split('/').some((part) => part === '..' || part === '.') ||
      !isWithin(rootPath, filename) || filename === rootPath) {
    throw new Error(`Unsafe screenshot path: ${url}`);
  }
  if (!rasterExtension.test(filename)) throw new Error(`Screenshot must be a supported raster image: ${url}`);
  return { filename, relative: path.relative(rootPath, filename) };
}

export async function publishHelpAssets({ root = path.resolve(fileURLToPath(new URL('..', import.meta.url))) } = {}) {
  root = path.resolve(root);
  const dist = path.join(root, 'dist');
  const catalogFile = path.join(dist, 'mcp-catalog.json');
  await checkPath(root, catalogFile);
  const catalog = JSON.parse(await readFile(catalogFile, 'utf8'));
  const site = new URL(catalog.site);
  if (site.protocol !== 'https:' || site.username || site.password || site.search || site.hash || !Array.isArray(catalog.pages)) {
    throw new Error('Expected a catalog with a canonical HTTPS site and pages');
  }
  const sources = await articleSources(root, catalog.base ?? '');
  const assets = new Map();
  let replacements = 0;
  for (const page of catalog.pages) {
    const source = sources.get(page.route);
    if (!source || typeof page.body !== 'string') throw new Error(`Missing article source/body for ${page.route}`);
    const { images, definitions, destinations, labels, titles } = parseImages(page.body);
    const edits = [];
    for (const image of images) {
      const definition = image.type === 'imageReference' ? definitions.get(image.identifier) : image;
      if (!definition) continue;
      const asset = screenshotPath(definition.url, source, root);
      if (!asset) continue;
      await checkPath(root, asset.filename);
      if (!(await lstat(asset.filename)).isFile()) throw new Error(`Screenshot is not a file: ${asset.filename}`);
      const destination = path.join(dist, 'help-assets/screenshots', asset.relative);
      await checkPath(root, destination, true);
      assets.set(destination, asset.filename);
      const encodedPath = asset.relative.split(path.sep).map(encodeSegment).join('/');
      const url = `${catalog.site.replace(/\/+$/, '')}/help-assets/screenshots/${encodedPath}`;
      if (image.type === 'imageReference') {
        // Inline only the image, leaving a shared definition and ordinary links
        // untouched. Keep the original alt markup and title delimiters verbatim.
        const label = labels.get(image);
        const title = titles.get(definition);
        const rawLabel = page.body.slice(label.start.offset, label.end.offset);
        const rawTitle = title ? ` ${page.body.slice(title.start.offset, title.end.offset)}` : '';
        edits.push({ start: image.position.start.offset, end: image.position.end.offset, text: `${rawLabel}(${url}${rawTitle})` });
      } else {
        const token = destinations.get(image);
        edits.push({ start: token.start.offset, end: token.end.offset, text: url });
      }
    }
    for (const edit of edits.sort((a, b) => b.start - a.start)) {
      page.body = page.body.slice(0, edit.start) + edit.text + page.body.slice(edit.end);
      replacements++;
    }
  }
  // Validate every reference before writing any generated output.
  for (const [destination, source] of assets) {
    await mkdir(path.dirname(destination), { recursive: true });
    await copyFile(source, destination);
  }
  if (replacements) await writeFile(catalogFile, JSON.stringify(catalog));
  return { assets: assets.size, replacements };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await publishHelpAssets();
  console.log(`Published ${result.assets} Help screenshots (${result.replacements} image references).`);
}
