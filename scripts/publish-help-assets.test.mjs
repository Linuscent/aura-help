import assert from 'node:assert/strict';
import { access, mkdir, mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { buildCatalog, collectPages } from '@stellayazilim/mcp-starlight/catalog';
import { publishHelpAssets } from './publish-help-assets.mjs';

const prefix = '../../../assets/screenshots/';
const raster = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

async function fixture(t, body) {
  const root = await mkdtemp('/tmp/opencode/help-assets-test-');
  t.after(() => rm(root, { recursive: true, force: true }));
  async function put(filename, content) {
    const target = path.join(root, filename);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
  }
  const catalog = {
    version: 1,
    site: 'https://docs.example.com',
    siteLabel: 'Help',
    base: '',
    locales: [],
    versions: [],
    revision: 'fixed-revision',
    collections: { custom: { entries: [{ title: 'Unchanged' }] } },
    pages: [{ route: '/guide/start', title: 'Start', description: 'Description', locale: null, version: null, body }],
  };
  await put('src/content/docs/guide/start.md', `---\ntitle: Start\n---\n${body}`);
  await put('dist/mcp-catalog.json', JSON.stringify(catalog));
  await put('dist/mcp-catalog.version.json', '{"revision":"fixed-revision","generatedAt":"unchanged"}');
  await put('src/assets/screenshots/nested/screen (one).png', raster);
  return {
    root, put, catalog,
    async readCatalog() { return JSON.parse(await readFile(path.join(root, 'dist/mcp-catalog.json'), 'utf8')); },
  };
}

test('rewrites only genuine screenshot destinations and preserves catalog metadata and Markdown bytes', async (t) => {
  const local = `${prefix}nested/screen%20(one).png`;
  const body = [
    '# Heading',
    `![Alt \\] & *format*](<${local}> 'Keep title')`,
    `![Again](${local} "Other title")`,
    '![Remote](https://other.example/image.gif?view=full#image)',
    '![Unrelated](../../../assets/other.png?view=full#image)',
    `[Normal link](${local})`,
    `\`![Code](${prefix}missing.png)\``,
    '~~~md',
    `![Fence](${prefix}missing.png)`,
    '~~~',
    `    ![Indented code](${prefix}missing.png)`,
    `<img src="${prefix}missing.png" alt="HTML is not Markdown">`,
    '',
  ].join('\n\n');
  const f = await fixture(t, body);
  assert.deepEqual(await publishHelpAssets({ root: f.root }), { assets: 1, replacements: 2 });
  const url = 'https://docs.example.com/help-assets/screenshots/nested/screen%20%28one%29.png';
  const expected = structuredClone(f.catalog);
  expected.pages[0].body = body.replace(`<${local}>`, `<${url}>`).replace(`![Again](${local}`, `![Again](${url}`);
  assert.deepEqual(await f.readCatalog(), expected);
  assert.deepEqual(await readFile(path.join(f.root, 'dist/help-assets/screenshots/nested/screen (one).png')), raster);
  assert.equal(await readFile(path.join(f.root, 'dist/mcp-catalog.version.json'), 'utf8'), '{"revision":"fixed-revision","generatedAt":"unchanged"}');
  assert.deepEqual(await publishHelpAssets({ root: f.root }), { assets: 0, replacements: 0 });
  assert.deepEqual(await f.readCatalog(), expected);
});

test('handles full, collapsed, and shortcut image references without changing shared links or unused definitions', async (t) => {
  const local = `${prefix}nested/screen%20(one).png`;
  const body = `![Alt \\] *text*][Shot]\n\n[Shared link][Shot]\n\n![Shot][]\n\n![Shot]\n\n[Shot]: <${local}> 'Exact title'\n\n[unused]: ${prefix}missing.png`;
  const f = await fixture(t, body);
  assert.deepEqual(await publishHelpAssets({ root: f.root }), { assets: 1, replacements: 3 });
  const url = 'https://docs.example.com/help-assets/screenshots/nested/screen%20%28one%29.png';
  assert.equal((await f.readCatalog()).pages[0].body, body
    .replace('![Alt \\] *text*][Shot]', `![Alt \\] *text*](${url} 'Exact title')`)
    .replace('![Shot][]', `![Shot](${url} 'Exact title')`)
    .replace('![Shot]\n', `![Shot](${url} 'Exact title')\n`));
});

test('resolves nested index routes and preserves canonical site base', async (t) => {
  const f = await fixture(t, `![Screen](${prefix}nested/screen%20(one).png)`);
  await rm(path.join(f.root, 'src/content/docs/guide/start.md'));
  await f.put('src/content/docs/guide/index.mdx', '# Guide');
  f.catalog.base = '/manual';
  f.catalog.site = 'https://docs.example.com/manual';
  f.catalog.pages[0].route = '/manual/guide';
  await f.put('dist/mcp-catalog.json', JSON.stringify(f.catalog));
  await publishHelpAssets({ root: f.root });
  assert.match((await f.readCatalog()).pages[0].body, /https:\/\/docs.example.com\/manual\/help-assets\/screenshots\/nested\/screen%20%28one%29.png/);
});

test('accepts the installed catalog generator output without changing its revision or source', async (t) => {
  const f = await fixture(t, `![Screenshot](${prefix}nested/screen%20(one).png)`);
  const source = await readFile(path.join(f.root, 'src/content/docs/guide/start.md'), 'utf8');
  const generated = buildCatalog({
    site: 'https://docs.example.com',
    siteLabel: 'Generated Help',
    revision: 'build-revision',
    pages: collectPages({ contentDir: path.join(f.root, 'src/content/docs') }),
  });
  await f.put('dist/mcp-catalog.json', JSON.stringify(generated));
  assert.deepEqual(await publishHelpAssets({ root: f.root }), { assets: 1, replacements: 1 });
  const published = await f.readCatalog();
  assert.deepEqual({ ...published, pages: generated.pages }, generated);
  assert.deepEqual({ ...published.pages[0], body: generated.pages[0].body }, generated.pages[0]);
  assert.equal(await readFile(path.join(f.root, 'src/content/docs/guide/start.md'), 'utf8'), source);
});

for (const url of [
  `${prefix}missing.png`,
  `${prefix}../private.png`,
  `${prefix}nested/../screen.png`,
  `${prefix}%2e%2e/private.png`,
  `${prefix}nested%2f..%2fprivate.png`,
  `${prefix}nested\\private.png`,
  `${prefix}bad%ZZ.png`,
  `${prefix}vector.svg`,
  `${prefix}animation.gif`,
  '../../../../outside/assets/screenshots/screen.png',
]) {
  test(`rejects missing or unsafe screenshot: ${url}`, async (t) => {
    const f = await fixture(t, `![Valid](${prefix}nested/screen%20(one).png)\n\n![Bad](<${url}>)`);
    const original = await readFile(path.join(f.root, 'dist/mcp-catalog.json'), 'utf8');
    await assert.rejects(publishHelpAssets({ root: f.root }));
    assert.equal(await readFile(path.join(f.root, 'dist/mcp-catalog.json'), 'utf8'), original);
    await assert.rejects(access(path.join(f.root, 'dist/help-assets')));
  });
}

for (const suffix of ['?view=full', '#image', '?view=full#image']) {
  test(`rejects screenshot query or fragment: ${suffix}`, async (t) => {
    const f = await fixture(t, `![Screen](<${prefix}nested/screen%20(one).png${suffix}>)`);
    const original = await readFile(path.join(f.root, 'dist/mcp-catalog.json'), 'utf8');
    await assert.rejects(publishHelpAssets({ root: f.root }), /Screenshot URLs must not include a query or fragment/);
    assert.equal(await readFile(path.join(f.root, 'dist/mcp-catalog.json'), 'utf8'), original);
    await assert.rejects(access(path.join(f.root, 'dist/help-assets')));
  });
}

for (const kind of ['file', 'directory', 'output']) {
  test(`rejects ${kind} symlinks`, async (t) => {
    const f = await fixture(t, `![Screen](${prefix}linked/screen.png)`);
    if (kind === 'file') {
      await mkdir(path.join(f.root, 'src/assets/screenshots/linked'));
      await symlink(path.join(f.root, 'src/assets/screenshots/nested/screen (one).png'), path.join(f.root, 'src/assets/screenshots/linked/screen.png'));
    } else if (kind === 'directory') {
      await f.put('private/screen.png', raster);
      await symlink(path.join(f.root, 'private'), path.join(f.root, 'src/assets/screenshots/linked'));
    } else {
      await f.put('src/assets/screenshots/linked/screen.png', raster);
      await mkdir(path.join(f.root, 'private'));
      await symlink(path.join(f.root, 'private'), path.join(f.root, 'dist/help-assets'));
    }
    await assert.rejects(publishHelpAssets({ root: f.root }), /Symlink/);
  });
}
