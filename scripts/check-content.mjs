/**
 * Public content validation.
 *
 * Scans the application source (and, when present, the built output) for
 * content rules that are easy to break by accident and expensive to notice
 * late: dash punctuation in marketing prose, banned positioning phrases,
 * exposed pricing, internal framework vocabulary, and internal links that do
 * not resolve to a real route.
 *
 * Internal source documentation under new_update_docs/ and upgrade-web/ is
 * never scanned and never modified: it is allowed to contain pricing and
 * whatever punctuation it likes.
 */
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Directories that are scanned. Everything else is out of scope. */
const SCAN_DIRS = ['src'];
const SCAN_FILES = ['index.html', 'public/robots.txt'];

/**
 * Files holding protected legal text or read-only product data. Their wording,
 * including punctuation, must not be changed, so the prose rules do not apply.
 * Pricing exposure is still checked everywhere.
 */
const PROSE_EXEMPT = new Set(
  [
    'src/pages/PrivacyPolicyPage.jsx',
    'src/pages/TermsPage.jsx',
    'src/pages/RefundPolicyPage.jsx',
    'src/pages/DeliveryPolicyPage.jsx',
    'src/pages/RiskMitigationPage.jsx',
    'src/pages/DataHandlingPage.jsx',
    'src/pages/IpPolicyPage.jsx',
    'src/data/productsData.js',
    'src/components/Products.jsx',
  ].map((p) => p.replace(/\//g, '\\')),
);

const PROSE_RULES = [
  {
    id: 'em-dash',
    // U+2014 em dash, U+2013 en dash, U+2015 horizontal bar, U+2212 minus sign.
    pattern: /[—–―−]/g,
    message: 'Dash punctuation is not allowed in public prose. Rewrite as a full sentence.',
  },
  {
    id: 'remote-first',
    pattern: /remote[\s-]?first/gi,
    message: 'Do not describe the company as remote first. Use distributed teams across regions.',
  },
  {
    id: 'india-positioning',
    pattern: /based in india|from india|india[- ]based/gi,
    message: 'Do not make location the identity of the company.',
  },
  {
    id: 'buzzwords',
    pattern:
      /\b(unlock (your|the) potential|transform your business|revolutioni[sz]e|next[- ]generation|cutting[- ]edge|world[- ]class|best[- ]in[- ]class|seamless solutions?|innovative solutions?|digital transformation journey|leverage technology|drive synergies|holistic solutions?|game[- ]changing|industry[- ]leading)\b/gi,
    message: 'Marketing buzzword. Replace with a concrete statement.',
  },
  {
    id: 'internal-vocabulary',
    // Named systems from the internal GTM and operating handbooks. These are
    // internal delivery and training language and must never reach the public
    // site. "Prism" on its own is the public product name and is allowed; the
    // internal variants below are not.
    pattern: new RegExp(
      [
        'ascendancy(?: crucible)?',
        'crucible engine',
        'prism (?:scan|scale|mandate)',
        'forge (?:blueprint|correction|sprint|fusion|prototype|nullif\\w*)',
        'dominion',
        'crystallizer',
        'amplification lattice',
        'hyper[- ]?ramp',
        'constraint[- ]first protocol',
        'decision clarity framework',
        'vertical expansion (?:protocol|framework)',
        'research[- ]first (?:framework|elimination|core)',
        'diagnosis engine',
        'gtm engine',
        'revenue engine',
        'intelligence layers?',
        'attach[- ]rate',
        'tripwire',
        'staged trust tier',
        'trust tiers?',
        'scale protocol engine',
        'priority ledger',
        'unit economics',
        'qualification scor\\w*',
      ].join('|'),
      'gi',
    ),
    message: 'Internal framework vocabulary must not appear in public content.',
  },
];

/** Pricing exposure. Applies to every scanned file, with no exemptions. */
const PRICING_RULES = [
  {
    id: 'currency-amount',
    // Requires at least two digits so a regex backreference such as $1 in
    // application code is not mistaken for a currency amount.
    pattern: /(?:[$£€₹]\s?\d[\d,.]*\d|(?<!\w)\d[\d,]*\s?(?:USD|GBP|EUR|INR)\b)/g,
    message: 'Currency amount found in public content.',
  },
  {
    id: 'known-price',
    pattern: /\b2[,.]?499\b|\b3[,.]?499\b/g,
    message: 'Known internal price point found in public content.',
  },
  {
    id: 'price-word',
    // "priced", "pricing", "our price". Words like "priority" must not match.
    pattern: /\b(pricing|priced|price (?:point|list|range|starts)|starting (?:at|from) \d)/gi,
    message: 'Pricing language found in public content.',
  },
];

/** Capability slugs, read from the data file so the two cannot drift. */
const capabilitySource = await readFile(join(root, 'src/data/servicesData.js'), 'utf8');
const capabilitySlugs = new Set(
  [...capabilitySource.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]),
);

/** Every route the application serves. Used to validate internal links. */
const KNOWN_ROUTES = new Set([
  '/',
  '/about',
  '/services',
  ...[...capabilitySlugs].map((slug) => `/services/${slug}`),
  '/systems',
  '/case-studies',
  '/partnerships',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/refund-policy',
  '/delivery-policy',
  '/risk-mitigation',
  '/data-handling',
  '/ip-policy',
  '/technology',
  '/community',
  '/404',
]);

async function collectFiles() {
  const files = [];

  async function walk(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else if (['.js', '.jsx', '.html', '.txt', '.css'].includes(extname(entry.name))) files.push(full);
    }
  }

  for (const dir of SCAN_DIRS) await walk(join(root, dir));
  for (const file of SCAN_FILES) {
    const full = join(root, file);
    if (existsSync(full)) files.push(full);
  }
  return files;
}

const lineOf = (source, index) => source.slice(0, index).split('\n').length;

/**
 * Blanks out code comments while preserving character offsets, so reported line
 * numbers stay accurate. Comments never reach a reader, so developer notes are
 * allowed to mention internal vocabulary and pricing that public copy may not.
 */
function stripComments(source) {
  return source
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(
      /(^|[^:"'`\\])\/\/[^\n]*/gm,
      (m, prefix) => prefix + ' '.repeat(m.length - prefix.length),
    );
}

/**
 * Blanks out regions a file has explicitly marked as reproduced legal text.
 * Those passages quote published policies word for word, so their wording and
 * punctuation are fixed and the prose rules cannot apply to them. Offsets are
 * preserved so line numbers elsewhere in the file stay correct.
 */
function stripProtectedLegalText(source) {
  return source.replace(
    /begin-protected-legal-text[\s\S]*?end-protected-legal-text/g,
    (m) => m.replace(/[^\n]/g, ' '),
  );
}

const findings = [];
const record = (file, line, rule, excerpt) =>
  findings.push({ file, line, rule: rule.id, message: rule.message, excerpt });

const files = await collectFiles();

for (const file of files) {
  const rel = relative(root, file);
  const raw = await readFile(file, 'utf8');
  const isCode = ['.js', '.jsx'].includes(extname(file));

  // Pricing is checked against everything a reader could see, including quoted
  // legal text. Prose rules additionally skip reproduced legal passages.
  const pricingSource = isCode ? stripComments(raw) : raw;
  const proseSource = isCode ? stripComments(stripProtectedLegalText(raw)) : raw;

  const passes = PROSE_EXEMPT.has(rel)
    ? [[PRICING_RULES, pricingSource]]
    : [
        [PROSE_RULES, proseSource],
        [PRICING_RULES, pricingSource],
      ];

  for (const [rules, source] of passes) {
    for (const rule of rules) {
      rule.pattern.lastIndex = 0;
      let match;
      while ((match = rule.pattern.exec(source)) !== null) {
        const line = lineOf(source, match.index);
        const excerpt = source
          .slice(Math.max(0, match.index - 40), match.index + 50)
          .replace(/\s+/g, ' ');
        record(rel, line, rule, excerpt);
        if (match.index === rule.pattern.lastIndex) rule.pattern.lastIndex += 1;
      }
    }
  }
}

/* ------------------------------------------------------------------ *
 * Internal links
 * ------------------------------------------------------------------ */

const linkFindings = [];
const caseStudySlugs = new Set();

const caseStudySource = await readFile(join(root, 'src/pages/CaseStudiesPage.jsx'), 'utf8');
for (const m of caseStudySource.matchAll(/slug:\s*'([^']+)'/g)) caseStudySlugs.add(m[1]);

for (const file of files) {
  const rel = relative(root, file);
  if (extname(file) !== '.jsx') continue;
  const source = await readFile(file, 'utf8');

  for (const m of source.matchAll(/\b(?:to|href)=["'](\/[^"'#?]*)(?:[#?][^"']*)?["']/g)) {
    const path = m[1].replace(/\/$/, '') || '/';
    if (path.startsWith('/api/') || path.startsWith('/assets/')) continue;
    if (/\.(png|jpe?g|svg|webp|ico|txt|xml)$/i.test(path)) continue;

    if (path.startsWith('/case-studies/')) {
      const slug = path.slice('/case-studies/'.length);
      if (!caseStudySlugs.has(slug)) {
        linkFindings.push({ file: rel, line: lineOf(source, m.index), path });
      }
      continue;
    }
    if (!KNOWN_ROUTES.has(path)) {
      linkFindings.push({ file: rel, line: lineOf(source, m.index), path });
    }
  }
}

/* ------------------------------------------------------------------ *
 * Vocabulary weighting
 * ------------------------------------------------------------------ */

const OVERUSED = ['diagnos', 'constraint', 'operational intelligence', 'structured execution'];
const vocabulary = [];

for (const file of files) {
  const rel = relative(root, file);
  if (!rel.startsWith(`src${'\\'}pages`) && !rel.startsWith('src\\data')) continue;
  if (PROSE_EXEMPT.has(rel)) continue;
  const source = (await readFile(file, 'utf8')).toLowerCase();

  for (const term of OVERUSED) {
    const count = (source.match(new RegExp(term, 'g')) || []).length;
    // The Prism page owns this vocabulary; every other page should be sparing.
    const limit = rel.includes('SystemsPage') ? 40 : 3;
    if (count > limit) vocabulary.push({ file: rel, term, count, limit });
  }
}

/* ------------------------------------------------------------------ *
 * Built output
 *
 * Source can look correct and the build still ship something wrong, so the
 * generated HTML is validated separately. Skipped when dist/ is absent.
 * ------------------------------------------------------------------ */

const buildFindings = [];
const distDir = join(root, 'dist');

if (existsSync(distDir)) {
  const htmlFiles = [];
  const walkDist = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) await walkDist(full);
      else if (entry.name.endsWith('.html')) htmlFiles.push(full);
    }
  };
  await walkDist(distDir);

  const titles = new Map();
  const descriptions = new Map();
  const sitemapUrls = new Set();

  const sitemapPath = join(distDir, 'sitemap.xml');
  if (existsSync(sitemapPath)) {
    const xml = await readFile(sitemapPath, 'utf8');
    if (!xml.startsWith('<?xml')) buildFindings.push('sitemap.xml does not begin with an XML declaration.');
    if (!xml.includes('<urlset')) buildFindings.push('sitemap.xml has no <urlset> element.');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.add(m[1]);
    if (!sitemapUrls.size) buildFindings.push('sitemap.xml contains no URLs.');
  } else {
    buildFindings.push('sitemap.xml is missing from the build.');
  }

  if (!existsSync(join(distDir, 'robots.txt'))) buildFindings.push('robots.txt is missing from the build.');
  if (!existsSync(join(distDir, '404.html'))) buildFindings.push('404.html is missing from the build.');

  for (const file of htmlFiles) {
    const rel = relative(distDir, file).replace(/\\/g, '/');
    const html = await readFile(file, 'utf8');
    const head = html.slice(0, html.indexOf('</head>'));
    const body = html.slice(html.indexOf('</head>'));

    const title = head.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
    const description = head.match(/<meta name="description" content="([^"]*)"/)?.[1];
    const canonical = head.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
    const robots = head.match(/<meta name="robots" content="([^"]*)"/)?.[1] || '';
    const h1Count = (body.match(/<h1\b/g) || []).length;
    const isNoindex = robots.includes('noindex');

    if (!title) buildFindings.push(`${rel}: missing <title>.`);
    if (!description) buildFindings.push(`${rel}: missing meta description.`);
    if (!canonical) buildFindings.push(`${rel}: missing canonical link.`);
    if (h1Count !== 1) buildFindings.push(`${rel}: expected exactly one <h1>, found ${h1Count}.`);

    // A page that is prerendered, not deliberately noindexed, and absent from
    // the sitemap is unreachable through the declared site structure.
    if (canonical && !isNoindex && sitemapUrls.size && !sitemapUrls.has(canonical)) {
      buildFindings.push(`${rel}: indexable but not listed in sitemap.xml (${canonical}).`);
    }
    if (canonical && isNoindex && sitemapUrls.has(canonical)) {
      buildFindings.push(`${rel}: marked noindex but present in sitemap.xml.`);
    }

    if (title && !isNoindex) {
      if (titles.has(title)) buildFindings.push(`Duplicate <title> on ${rel} and ${titles.get(title)}.`);
      else titles.set(title, rel);
    }
    if (description && !isNoindex) {
      if (descriptions.has(description)) {
        buildFindings.push(`Duplicate meta description on ${rel} and ${descriptions.get(description)}.`);
      } else descriptions.set(description, rel);
    }
  }

  // Credentials must never reach a public artefact.
  const secretPattern =
    /(SMTP_PASSWORD|SMTP_USER|api[_-]?key|secret[_-]?key|password)\s*[:=]\s*['"][^'"\s]{6,}['"]/gi;
  for (const file of [...htmlFiles, ...(await readdir(join(distDir, 'assets')).catch(() => []))
    .filter((f) => f.endsWith('.js'))
    .map((f) => join(distDir, 'assets', f))]) {
    const content = await readFile(file, 'utf8');
    for (const m of content.matchAll(secretPattern)) {
      buildFindings.push(`${relative(distDir, file)}: possible credential in build output (${m[1]}).`);
    }
  }
}

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

const byRule = findings.reduce((acc, f) => {
  (acc[f.rule] ||= []).push(f);
  return acc;
}, {});

let failed = false;

console.log('\nContent validation\n' + '='.repeat(70));

for (const [ruleId, items] of Object.entries(byRule)) {
  failed = true;
  console.log(`\n${ruleId.toUpperCase()} (${items.length})`);
  console.log(`  ${items[0].message}`);
  for (const item of items.slice(0, 12)) {
    console.log(`    ${item.file}:${item.line}  ...${item.excerpt}...`);
  }
  if (items.length > 12) console.log(`    ... and ${items.length - 12} more`);
}

if (linkFindings.length) {
  failed = true;
  console.log(`\nBROKEN-INTERNAL-LINK (${linkFindings.length})`);
  for (const item of linkFindings) console.log(`    ${item.file}:${item.line}  ${item.path}`);
}

if (vocabulary.length) {
  failed = true;
  console.log(`\nOVERUSED-VOCABULARY (${vocabulary.length})`);
  console.log('  Reduce this wording outside the page that legitimately owns it.');
  for (const item of vocabulary) {
    console.log(`    ${item.file}  "${item.term}" x${item.count} (limit ${item.limit})`);
  }
}

if (buildFindings.length) {
  failed = true;
  console.log(`\nBUILD-OUTPUT (${buildFindings.length})`);
  console.log('  Source can be correct and the build still ship something wrong.');
  for (const item of buildFindings) console.log(`    ${item}`);
} else if (existsSync(distDir)) {
  console.log(
    '\nBuild output validated: titles, descriptions, canonicals, H1 count, sitemap coverage, secrets.',
  );
}

if (!failed) {
  console.log(`\nPassed. ${files.length} files scanned, no violations.\n`);
} else {
  console.log(`\n${files.length} files scanned. Violations found above.\n`);
}

process.exit(failed ? 1 : 0);
