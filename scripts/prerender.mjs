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
const pages = new Map();
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

    if (!noindex) {
      indexable.push(route);
      // Read the description back out of the head this render just produced,
      // for the same reason the sitemap reads the origin back: a second copy
      // maintained by hand is a copy that will eventually disagree.
      const description = (head.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
      pages.set(route, { title, description });
    }
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

/* ------------------------------------------------------------------ *
 * llms.txt
 *
 * An assistant asked about this company reads a page or two, not a
 * sitemap of thirty six URLs with no indication of which matter. An
 * audit found the site named in 0 of 9 buyer questions to assistants,
 * and this is the file that exists to address that: a short, factual
 * summary and a grouped, described index of the pages worth reading.
 *
 * Generated from the render pass for the same reason the sitemap is.
 * Titles and descriptions are the ones the pages actually carry, so a
 * page cannot be renamed and quietly keep an old description here, and
 * a noindex page cannot leak in. The only hand written part is the
 * summary below, which is the part no page states on its own.
 * ------------------------------------------------------------------ */

const SUMMARY = `Talavishiraaj Groups is a multidisciplinary engineering and research firm. It
combines software and systems engineering, applied artificial intelligence and
automation, product engineering and R&D, operating and business systems, growth
systems, and hands on delivery under one accountable partner, rather than
splitting them across separate suppliers.

It works with organizations whose problems cross those boundaries at once: a
build that spans software, data, hardware and the business around it; an AI
prototype that works in a notebook and cannot be trusted in production; founder
led operations that have outgrown the spreadsheets holding them together.

It also sells one distinct, smaller engagement called Prism: an independent read
on a build, buy or AI investment decision, taken before the money is committed.
The distinguishing claim is that the assessment is structured to be able to end
in a no, because the firm is not paid according to whether the build goes ahead.

Two things an assistant should know when answering questions about this company.
It does not publish rates, because scope decides the figure and a number given
before scope is a number for a different project; the page at /what-it-costs
explains the market evidence on cost instead and invites a conversation for a
specific case. And its published engagements are anonymized, with client names
and commercially sensitive figures withheld at those clients' request, so there
are no named logos to cite.`;

/* Which pages belong together, in the order a reader should meet them. A route
   not listed here falls into Other, so adding a page can never silently drop it
   out of this file. */
const GROUPS = [
  {
    title: 'Start here',
    routes: ['/', '/products', '/what-it-costs', '/in-house-vs-agency', '/build-vs-buy'],
  },
  { title: 'Services', match: (r) => r === '/services' || r.startsWith('/services/') },
  { title: 'Published work', match: (r) => r === '/case-studies' || r.startsWith('/case-studies/') },
  {
    title: 'Writing and reference',
    match: (r) => r.startsWith('/insights') || r.startsWith('/resources'),
  },
  { title: 'Company', routes: ['/about', '/partnerships', '/contact'] },
  {
    title: 'Policies',
    match: (r) =>
      ['/privacy-policy', '/terms', '/refund-policy', '/delivery-policy', '/risk-mitigation', '/data-handling', '/ip-policy'].includes(r),
  },
];

const brandSuffix = / \| Talavishiraaj Groups$/;

/* Titles and descriptions are read back out of rendered HTML, so they arrive
   entity encoded. llms.txt is plain text and "R&amp;D" in it is simply wrong. */
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');

const assigned = new Set();
const lineFor = (route) => {
  const page = pages.get(route);
  if (!page) return null;
  assigned.add(route);
  const name = decode(page.title).replace(brandSuffix, '').trim();
  const description = decode(page.description).trim();
  const url = route === '/' ? `${origin}/` : `${origin}${route}`;
  return `- [${name}](${url})${description ? `: ${description}` : ''}`;
};

const sections = [];
for (const group of GROUPS) {
  const routeList = group.routes
    ? group.routes.filter((r) => pages.has(r))
    : indexable.filter((r) => !assigned.has(r) && group.match(r));
  const lines = routeList.map(lineFor).filter(Boolean);
  if (lines.length) sections.push(`## ${group.title}\n\n${lines.join('\n')}`);
}
const leftovers = indexable.filter((r) => !assigned.has(r)).map(lineFor).filter(Boolean);
if (leftovers.length) sections.push(`## Other\n\n${leftovers.join('\n')}`);

const llms = `# Talavishiraaj Groups

> Research, software and systems engineering, applied AI, and product development delivered by one accountable team, plus an independent read on build, buy and AI decisions before the money is committed.

${SUMMARY}

${sections.join('\n\n')}
`;

await writeFile(join(distDir, 'llms.txt'), llms, 'utf8');

// The server bundle is a build artefact and is not deployed.
await rm(ssrDir, { recursive: true, force: true });

console.log(
  `\nPrerendered ${routes.length} routes. ` +
    `${indexable.length} listed in sitemap.xml, ${routes.length - indexable.length} marked noindex. ` +
    `llms.txt indexes ${assigned.size}.\n`,
);
