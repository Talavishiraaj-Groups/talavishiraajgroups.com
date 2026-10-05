/**
 * External representation audit.
 *
 * Checks every built page against how people actually read a web page, rather
 * than against taste. Each rule below cites the finding it comes from, so a
 * failure can be argued with on evidence instead of opinion.
 *
 * Sources, all read directly:
 *
 *   NN/g, "Scrolling and Attention" (2018, 130,000 fixations, 120 participants)
 *     57% of viewing time is spent above the fold, 74% within the first two
 *     screenfuls, 81% within three. More than 65% of above-fold viewing time
 *     falls in the top half of the viewport. Their guidance: reserve the top of
 *     the page for high priority content and keep major CTAs above the fold.
 *
 *   NN/g, "Website Reading" (1.5M fixations)
 *     Share of users who look at a paragraph by its position: 1st 81%, 2nd 71%,
 *     3rd 63%, 4th 32%. The drop after the third paragraph is the sharp one.
 *     Users read at most 28% of the words on a page.
 *
 *   NN/g, "Scrolling and Attention" (2010)
 *     Information foraging: people scroll past the fold only if what is above
 *     it gives them a reason to believe the rest is worth the effort.
 *
 *   Speero/CXL value proposition eye tracking study
 *     A more descriptive value proposition was noticed faster and read longer,
 *     and produced significantly better understanding of the site's purpose
 *     (p = 0.002). Their caveat: that only holds if other elements on the page
 *     are kept out of its way.
 *
 *   Buscher, Cutrell & Morris, CHI 2009 (20 users, 361 pages)
 *     The top left regions draw attention first. The entire right side above
 *     the fold is largely neglected.
 *
 * Run with: node scripts/audit-pages.mjs
 */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');

if (!existsSync(distDir)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

/**
 * Pages whose job is not persuasion. Legal and utility pages are held to the
 * structural rules only, because a refund policy is not supposed to have a
 * value proposition or a call to action.
 */
const UTILITY = new Set([
  '/privacy-policy',
  '/terms',
  '/refund-policy',
  '/delivery-policy',
  '/risk-mitigation',
  '/data-handling',
  '/ip-policy',
  '/book',
  '/community',
  '/404',
]);

/**
 * Language that describes how we work rather than what the reader gets.
 * Accurate internally, and the wrong thing to meet a stranger with. Checked
 * only against the first screenful.
 */
const INWARD_PHRASES = [
  'go or no go',
  'fixed scope',
  'productized',
  'engagement structure',
  'our methodology',
  'our approach is',
  'we are a ',
  'we combine',
  'our capabilities',
  'structured assessment',
];

/** Actions ordered by what they cost the reader. Lower is cheaper. */
const COMMITMENT = [
  { level: 0, test: /calculator|worksheet|guide|resource|is this your situation|see |read |explore|view |browse|in detail|full (piece|engagement|story)/i },
  { level: 1, test: /learn more|how it works|what you get/i },
  { level: 2, test: /contact|get in touch|send a message|describe|tell us|discuss|talk/i },
  { level: 3, test: /book a call|schedule|start a conversation|initiate|begin/i },
];

const commitmentOf = (label) => {
  for (const { level, test } of COMMITMENT) if (test.test(label)) return level;
  // An unrecognised label is usually a card or section title rather than an
  // ask, so it defaults low. Real asks match the level 2 and 3 patterns
  // explicitly, which is what the ordering rule is there to catch.
  return 1;
};

const strip = (html) => {
  let b = html.split('<body', 1).length > 1 ? html.split('<body')[1] : html;
  b = b.replace(/<script[\s\S]*?<\/script>/g, '');
  b = b.replace(/<style[\s\S]*?<\/style>/g, '');
  b = b.replace(/<footer[\s\S]*?<\/footer>/g, '');
  b = b.replace(/<header[\s\S]*?<\/header>/g, '');
  return b;
};

const textOf = (html) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z#0-9]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const walk = async (dir, out = []) => {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (entry.name === 'index.html') out.push(full);
  }
  return out;
};

const files = await walk(distDir);
const results = [];

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const route = ('/' + file.slice(distDir.length + 1).split(sep).slice(0, -1).join('/')).replace(/\/$/, '') || '/';
  const body = strip(html);
  const issues = [];
  const notes = [];

  /* Structure: one H1, and it must say something. */
  const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => textOf(m[1]));
  if (h1s.length === 0) issues.push('no H1');
  else if (h1s.length > 1) issues.push(`${h1s.length} H1s, should be 1`);

  const h1 = h1s[0] || '';
  // A bare product or section name answers nothing to someone who has not
  // heard of it. NN/g: the top of the page carries the most attention, so it
  // has to carry meaning.
  if (h1 && h1.split(/\s+/).length <= 2 && !UTILITY.has(route)) {
    issues.push(`H1 is a label, not a message: "${h1}"`);
  }

  /* Title and description. */
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  if (!title) issues.push('no title');
  if (!desc) issues.push('no meta description');
  else if (desc.length < 70) notes.push(`description is short (${desc.length} chars)`);
  else if (desc.length > 165) notes.push(`description may truncate (${desc.length} chars)`);

  if (UTILITY.has(route)) {
    results.push({ route, issues, notes, utility: true });
    continue;
  }

  /* The first screenful. Approximated as everything up to the second H2,
     which is where the hero reliably ends on this site. */
  const h2Index = body.indexOf('<h2');
  const secondH2 = body.indexOf('<h2', h2Index + 1);
  // Cut at the second H2 where there is one. Otherwise fall back to the end of
  // the opening section, and only then to a character count. Cutting on a raw
  // character count alone truncates mid element, which silently drops a hero
  // link whose closing tag lands past the boundary.
  const firstSectionEnd = body.indexOf('</section>');
  const fallback =
    firstSectionEnd > 0 ? firstSectionEnd + '</section>'.length : Math.min(body.length, 6000);
  const firstScreen = body.slice(0, secondH2 > 0 ? secondH2 : fallback);
  const firstScreenText = textOf(firstScreen);
  const paras = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => textOf(m[1])).filter(Boolean);


  /* Value proposition must be in the opening paragraphs. NN/g: 81/71/63% of
     users look at paragraphs 1-3, then it falls off a cliff to 32%. */
  const opening = paras.slice(0, 3).join(' ');
  if (opening.split(/\s+/).length < 20) {
    issues.push('opening three paragraphs carry almost no message');
  }

  /* Inward facing language in the hero. */
  // Only the headline and the opening paragraph are checked. Those are what
  // meet a stranger cold. Fine print under the buttons ("fixed scope", "we
  // will tell you not to proceed") is reassurance for someone already reading,
  // and holding it to the same rule produced false failures.
  const heroOpening = [h1, paras[0] || ''].join(' ').toLowerCase();
  const inward = INWARD_PHRASES.filter((p) => heroOpening.includes(p));
  if (inward.length) {
    issues.push(`hero leads with inward language: ${inward.map((i) => `"${i}"`).join(', ')}`);
  }

  /* Calls to action: at least one above the fold, and the first one offered
     should be the cheapest. Weinschenk's order effect plus the commitment
     ladder: the first position carries disproportionate weight, so spending
     it on the largest ask is the wrong way round. */
  // Only count things that look like a call to action. A card in a listing is
  // a link, but it is not an ask: on an index page the first link is usually
  // the first article title, and treating that as the primary CTA produced a
  // false failure on every hub page.
  const heroCtas = [...firstScreen.matchAll(/<a[^>]*?class="([^"]*)"[^>]*?href="([^"]*)"[^>]*>([\s\S]*?)<\/a>|<a[^>]*?href="([^"]*)"[^>]*?class="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => ({
      cls: m[1] || m[5] || '',
      href: m[2] || m[4] || '',
      label: textOf(m[3] || m[6] || ''),
    }))
    .filter(
      (c) =>
        c.label &&
        c.label.length < 50 &&
        !/^#?$/.test(c.href) &&
        c.label !== 'Skip to main content' &&
        // Buttons and explicit link affordances only.
        /rounded-full|underline|font-semibold|font-medium/.test(c.cls) &&
        // Card wrappers in a listing carry layout classes, not button ones.
        !/\bgroup\b|rounded-2xl|rounded-3xl|border border-border/.test(c.cls),
    );

  if (heroCtas.length === 0) issues.push('no call to action above the fold');
  if (heroCtas.length > 3) notes.push(`${heroCtas.length} actions above the fold, consider fewer`);

  if (heroCtas.length > 1) {
    const levels = heroCtas.map((c) => commitmentOf(c.label));
    // Only flag a real gap. A one level difference is usually a card title
    // sitting above a link, which is not a call to action competing with
    // anything. Two levels means an actual ask placed before a cheaper one.
    if (levels[0] - Math.min(...levels) >= 2) {
      issues.push(
        `highest commitment action is first: "${heroCtas[0].label}" before "${heroCtas[levels.indexOf(Math.min(...levels))].label}"`,
      );
    }
  }

  /* Choice load. Hick's and Miller's laws: decision time rises with the number
     of options, and working memory tops out around seven. */
  const h3s = (body.match(/<h3/g) || []).length;
  if (h3s > 12) notes.push(`${h3s} sub items, high choice load`);

  /* Connecting the dots. A page with no in-body route to the product or the
     free tool is a dead end for anyone who arrived on it from search. */
  const toProduct = (body.match(/href="\/products"/g) || []).length;
  const toCalc = (body.match(/href="\/build-vs-buy"/g) || []).length;
  if (route !== '/products' && route !== '/build-vs-buy' && toProduct + toCalc === 0) {
    issues.push('no in-body link to the product or the framework');
  }

  /* One closing action, and it should exist. */
  const allContactCtas = [...body.matchAll(/<a[^>]*href="(\/contact[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => textOf(m[2]))
    .filter((t) => t && t.length < 50);
  if (allContactCtas.length === 0) notes.push('no contact action on the page');
  if (allContactCtas.length > 2) notes.push(`${allContactCtas.length} contact actions: ${allContactCtas.join(' / ')}`);

  const words = textOf(body).split(/\s+/).length;

  results.push({ route, issues, notes, words, h3s, heroCtas: heroCtas.map((c) => c.label) });
}

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

results.sort((a, b) => a.route.localeCompare(b.route));

console.log('\nExternal representation audit');
console.log('='.repeat(78));
console.log('Rules cite NN/g eyetracking, the Speero value proposition study and CHI 2009.');
console.log('See the header of this file for the findings each rule rests on.\n');

let failing = 0;
for (const r of results) {
  if (!r.issues.length && !r.notes.length) continue;
  if (r.issues.length) failing += 1;
  const tag = r.utility ? ' (utility page, structure only)' : '';
  console.log(`${r.route}${tag}`);
  for (const i of r.issues) console.log(`   FAIL  ${i}`);
  for (const n of r.notes) console.log(`   note  ${n}`);
  if (r.heroCtas && r.heroCtas.length) console.log(`         above the fold: ${r.heroCtas.join(' | ')}`);
  console.log('');
}

const clean = results.filter((r) => !r.issues.length).length;
console.log('-'.repeat(78));
console.log(`${results.length} pages audited. ${clean} with no failures, ${failing} with failures.`);
