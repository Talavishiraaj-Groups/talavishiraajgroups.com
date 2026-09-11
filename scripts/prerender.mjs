/**
 * Build time prerenderer.
 *
 * Runs after the client and server bundles are built. For every route it
 * renders the real React tree to HTML, injects that page's own head, and writes
 * a complete static file. Search engines, social crawlers and AI crawlers then
 * receive full markup and correct metadata without executing any JavaScript,
 * while the browser still hydrates into the same single page application.
 *
 * The sitemap is generated from the same render pass, so a page marked noindex
 * can never leak into it, and the origin is read back from the canonical tag
 * the render just produced, so the sitemap and the canonical URLs cannot
 * disagree.
 */
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const HEAD_START = '<!--app-head-start-->';
const HEAD_END = '<!--app-head-end-->';
const ROOT_MARKER = '<div id="root"></div>';

// Everything between the head markers is the fallback head for non-prerendered
// URLs. Each prerendered route replaces the whole block with its own.
const HEAD_BLOCK = new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`);

const { render, routes } = await import(pathToFileURL(join(ssrDir, 'entry-server.mjs')).href);

const template = await readFile(join(distDir, 'index.html'), 'utf8');

for (const marker of [HEAD_START, HEAD_END, ROOT_MARKER]) {
  if (!template.includes(marker)) {
    throw new Error(`dist/index.html is missing the required "${marker}" placeholder.`);
  }
}

/**
 * The 404 page is written to dist/404.html rather than dist/404/index.html.
 * Static hosts serve that file automatically, with a real 404 status, for any
 * path that does not match a file. That matters: if unmatched paths fell back
 * to dist/index.html instead, every mistyped or stale URL would return the
 * homepage as an indexable 200, which reads as duplicate content to a crawler.
 */
const outputPathFor = (route) => {
  if (route === '/') return join(distDir, 'index.html');
  if (route === '/404') return join(distDir, '404.html');
  return join(distDir, route.slice(1), 'index.html');
};

const indexable = [];
const failures = [];

console.log('\nPrerendering routes:');

for (const route of routes) {
  try {
    const { html, head, noindex, title } = render(route);

    const page = template
      .replace(HEAD_BLOCK, head)
      .replace(ROOT_MARKER, `<div id="root">${html}</div>`);

    const outPath = outputPathFor(route);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, page, 'utf8');

    if (!noindex) indexable.push(route);
    console.log(`  ${noindex ? 'noindex' : 'index  '}  ${route.padEnd(40)} ${title}`);
  } catch (error) {
    failures.push(route);
    console.error(`  FAILED   ${route}: ${error.message}`);
  }
}

if (failures.length) {
  throw new Error(`${failures.length} route(s) failed to prerender: ${failures.join(', ')}`);
}

/* ------------------------------------------------------------------ *
 * sitemap.xml
 * ------------------------------------------------------------------ */

const homeHtml = await readFile(join(distDir, 'index.html'), 'utf8');
const originMatch = homeHtml.match(/<link rel="canonical" href="(https?:\/\/[^/"]+)/);
if (!originMatch) {
  throw new Error('Could not read the canonical origin back from the rendered home page.');
}
const origin = originMatch[1];
const lastmod = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (route) =>
      `  <url>\n    <loc>${route === '/' ? `${origin}/` : `${origin}${route}`}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(join(distDir, 'sitemap.xml'), sitemap, 'utf8');

// The server bundle is a build artefact and is not deployed.
await rm(ssrDir, { recursive: true, force: true });

console.log(
  `\nPrerendered ${routes.length} routes. ` +
    `${indexable.length} listed in sitemap.xml, ${routes.length - indexable.length} marked noindex.\n`,
);
