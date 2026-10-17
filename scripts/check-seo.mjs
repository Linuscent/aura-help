// Validate the generated site, not just the source configuration. No network needed.
import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const origin = 'https://docs.aura.linuscent.com';
const seenTitles = new Set();
const seenDescriptions = new Set();
const indexable = new Set();
const pages = new Map();

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name.endsWith('.html')) pages.set(file, await readFile(file, 'utf8'));
  }
}

function attributes(value) {
  return Object.fromEntries([...value.matchAll(/([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g)]
    .map(([, name, double, single, unquoted]) => [name.toLowerCase(), double ?? single ?? unquoted ?? '']));
}

function elements(html, tag) {
  return [...html.matchAll(new RegExp(`<${tag}\\b([^>]*)>`, 'gi'))].map(([, attrs]) => attributes(attrs));
}

function one(items, test, context) {
  const matches = items.filter(test);
  assert.equal(matches.length, 1, `${context}: expected exactly one, got ${matches.length}`);
  return matches[0];
}

async function localFile(url) {
  if (url.pathname === '/404/') return path.join(root, '404.html');
  const file = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
  assert(file === root || file.startsWith(`${root}${path.sep}`), `URL escapes output directory: ${url}`);
  try {
    return (await stat(file)).isDirectory() ? path.join(file, 'index.html') : file;
  } catch {
    assert.fail(`Missing local URL: ${url}`);
  }
}

await walk(root);
assert(pages.size > 0, 'No HTML pages found; run the build first');
for (const [file, html] of pages) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  // Starlight formats the noindex error page's canonical as /404/ even though
  // GitHub Pages serves the generated file as /404.html for missing routes.
  const route = relative === '404.html' ? '/404/' : `/${relative.replace(/index\.html$/, '')}`;
  const url = `${origin}${route}`;
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
  assert(head, `${relative}: missing head`);
  const meta = elements(head, 'meta');
  const links = elements(head, 'link');
  const canonical = one(links, (tag) => tag.rel === 'canonical', `${relative}: canonical`).href;
  assert.equal(canonical, url, `${relative}: wrong canonical`);
  assert.equal(one(meta, (tag) => tag.property === 'og:url', `${relative}: og:url`).content, url);
  const robots = one(meta, (tag) => tag.name === 'robots', `${relative}: robots`).content;
  const noIndex = robots.includes('noindex');
  if (relative === '404.html') assert(noIndex, '404 must not be indexed');
  assert(elements(html, 'html')[0]?.lang, `${relative}: missing document language`);

  if (!noIndex) {
    indexable.add(url);
    const titleTags = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
    assert.equal(titleTags.length, 1, `${relative}: expected exactly one title`);
    const title = titleTags[0][1].trim();
    const description = one(meta, (tag) => tag.name === 'description', `${relative}: description`).content;
    assert(title && description, `${relative}: missing title or description`);
    assert(!seenTitles.has(title), `${relative}: duplicate title`);
    assert(!seenDescriptions.has(description), `${relative}: duplicate description`);
    seenTitles.add(title);
    seenDescriptions.add(description);
    assert.equal(elements(html, 'h1').length, 1, `${relative}: expected one page heading`);
    for (const key of ['og:title', 'og:description', 'og:site_name', 'og:type', 'og:image', 'og:image:alt', 'og:image:width', 'og:image:height']) {
      assert(one(meta, (tag) => tag.property === key, `${relative}: ${key}`).content, `${relative}: empty ${key}`);
    }
    assert.equal(one(meta, (tag) => tag.property === 'og:type', `${relative}: og:type`).content, route === '/' ? 'website' : 'article');
    for (const key of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'twitter:image:alt']) {
      assert(one(meta, (tag) => tag.name === key, `${relative}: ${key}`).content, `${relative}: empty ${key}`);
    }
    assert.equal(one(meta, (tag) => tag.name === 'twitter:card', `${relative}: twitter:card`).content, 'summary_large_image');
    const image = one(meta, (tag) => tag.property === 'og:image', `${relative}: image`).content;
    assert.equal(one(meta, (tag) => tag.name === 'twitter:image', `${relative}: twitter:image`).content, image);
    const imageUrl = new URL(image);
    assert.equal(imageUrl.origin, origin);
    const png = await readFile(await localFile(imageUrl));
    assert.equal(png.subarray(1, 4).toString(), 'PNG', 'Social card must be a PNG');
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 630);

    const scripts = [...head.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
      .filter(([, attrs]) => attributes(attrs).type === 'application/ld+json');
    assert.equal(scripts.length, 1, `${relative}: expected one JSON-LD graph`);
    const schema = JSON.parse(scripts[0][2]);
    assert.equal(schema['@context'], 'https://schema.org');
    const graph = schema['@graph'];
    for (const type of ['Organization', 'WebSite', 'BreadcrumbList', route === '/' ? 'WebPage' : 'TechArticle']) {
      one(graph, (item) => item['@type'] === type, `${relative}: schema ${type}`);
    }
    const page = one(graph, (item) => item['@id'] === `${url}#page`, `${relative}: schema page`);
    assert.equal(page.url, canonical);
    assert.equal(page.description, description.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'"));
    const trail = one(graph, (item) => item['@type'] === 'BreadcrumbList', `${relative}: breadcrumbs`).itemListElement;
    assert.equal(trail.at(-1).item, url);
  }

  for (const tag of [...elements(html, 'a'), ...links]) {
    if (!tag.href || /^(mailto:|tel:|javascript:|data:)/i.test(tag.href)) continue;
    const target = new URL(tag.href.replace(/&amp;/g, '&'), url);
    if (target.origin !== origin) continue;
    assert(!target.pathname.startsWith('/aura-help'), `${relative}: obsolete base path`);
    const targetFile = await localFile(target);
    if (target.hash && pages.has(targetFile)) {
      const id = decodeURIComponent(target.hash.slice(1));
      assert(elements(pages.get(targetFile), '[a-z][a-z0-9-]*').some((element) => element.id === id), `${relative}: missing anchor ${target}`);
    }
  }
  for (const img of elements(html, 'img')) assert('alt' in img, `${relative}: image is missing an alt attribute`);
}

const sitemapIndex = await readFile(path.join(root, 'sitemap-index.xml'), 'utf8');
const sitemapUrls = new Set();
for (const [, location] of sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)) {
  const url = new URL(location);
  assert.equal(url.origin, origin);
  const sitemap = await readFile(await localFile(url), 'utf8');
  for (const [, page] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) sitemapUrls.add(page);
}
assert.deepEqual(sitemapUrls, indexable, 'Sitemap must contain exactly the indexable canonical pages');
const robots = await readFile(path.join(root, 'robots.txt'), 'utf8');
assert(robots.includes(`Sitemap: ${origin}/sitemap-index.xml`), 'robots.txt must advertise the sitemap');
assert(!/Disallow:\s*\/\s*(?:\n|$)/i.test(robots), 'robots.txt blocks the site');
console.log(`SEO checks passed: ${indexable.size} indexable pages, metadata, structured data, social image, sitemap, and internal links.`);
