// Quality gate for blog posts. Usage: node scripts/blog-check.mjs [file ...]
// With no arguments it checks every post in content/blog. Exits 1 on any error.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const DIR = 'content/blog';
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(DIR).filter((f) => f.endsWith('.md') && !f.startsWith('_')).map((f) => path.join(DIR, f));

// Words and phrases that read as machine written (from blader/humanizer and Wikipedia's "Signs of AI writing").
const BANNED = [
  'delve', 'delves', 'delving', 'tapestry', 'testament to', 'in today\'s', 'fast-paced', 'ever-evolving', 'ever-changing', 'game-changer', 'game changer',
  'unlock the', 'unlocking', 'unleash', 'harness the power', 'leverage the power', 'seamless', 'seamlessly', 'cutting-edge', 'revolutionize', 'revolutionise',
  'paradigm shift', 'navigate the', 'navigating the', 'in the realm of', 'realm', 'embark', 'pivotal', 'crucial', 'vibrant', 'bustling', 'nestled', 'showcase',
  'showcasing', 'underscore', 'underscores', 'intricate', 'meticulous', 'boasts', 'serves as a', 'stands as', 'it is important to note', 'it\'s important to note',
  'it is worth noting', 'it\'s worth noting', 'let\'s dive', 'dive in', 'deep dive', 'in conclusion', 'to sum up', 'in summary', 'at its core', 'at the end of the day',
  'the future looks bright', 'only time will tell', 'let that sink in', 'here\'s the thing', 'the truth is', 'make no mistake', 'buckle up', 'great question',
  'i hope this helps', 'whether you\'re', 'whether you are a', 'look no further', 'elevate', 'empower', 'synergy', 'holistic', 'robust solution', 'transformative',
  'landscape of', 'evolving landscape', 'digital landscape', 'ai landscape', 'plays a crucial role', 'plays a vital role', 'a myriad of', 'myriad', 'furthermore',
  'moreover', 'additionally,', 'in essence', 'ultimately,', 'stay ahead of the curve', 'as an ai', 'knowledge cutoff',
  // Business jargon that makes readers work harder for no reason.
  'leverage', 'leveraging', 'synergies', 'paradigm', 'operationalize', 'operationalise', 'utilize', 'utilise', 'facilitate', 'best-in-class',
  'value proposition', 'mission-critical', 'frictionless', 'next-gen', 'low-hanging fruit', 'move the needle', 'actionable insights',
  'stakeholder alignment', 'thought leadership', 'circle back', 'deep learning journey', 'digital transformation journey', 'ecosystem play',
];
// Acronyms most readers know. Anything else must be spelled out the first time it is used.
const KNOWN = new Set(['AI', 'IT', 'HR', 'US', 'UK', 'EU', 'UAE', 'CEO', 'CTO', 'COO', 'CFO', 'CRM', 'ERP', 'API', 'APIs', 'SaaS', 'FAQ', 'PDF', 'IBM', 'GPU', 'GPUs', 'CPU', 'USD', 'INR', 'SEO', 'ROI', 'KPI', 'OK', 'Q1', 'Q2', 'Q3', 'Q4', 'B2B', 'SMB', 'SMBs', 'AWS', 'GPT', 'LLM', 'LLMs', 'TV', 'PC', 'URL', 'ID', 'MVP', 'NASA', 'SAP']);
const syllables = (w) => {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  return Math.max(1, (w.match(/[aeiouy]{1,2}/g) || []).length);
};
const INTERNAL = /\]\(\/(services|insights|what-it-costs|build-vs-buy|in-house-vs-agency|products|case-studies|sectors|resources|blog|contact|book)[^)]*\)/g;

let failed = 0;
const slugs = new Set();
for (const file of files) {
  const errors = [];
  const warn = [];
  const raw = fs.readFileSync(file, 'utf8');
  let parsed;
  try {
    parsed = matter(raw);
  } catch (e) {
    console.log(`\n${file}\n  ERROR frontmatter does not parse: ${e.message}`);
    failed++;
    continue;
  }
  const { data, content } = parsed;
  const slug = path.basename(file, '.md');
  const all = raw.replace(/^---[\s\S]*?---/, '') + '\n' + [data.title, data.description, data.answer, ...(data.faq || []).flatMap((f) => [f.q, f.a])].join('\n');
  const lower = all.toLowerCase();
  const words = content.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || slug.length > 70) errors.push('file name must be a short lowercase-hyphen slug (max 70 chars)');
  if (slugs.has(slug)) errors.push('duplicate slug');
  slugs.add(slug);
  for (const k of ['title', 'description', 'date', 'tags', 'answer', 'faq', 'sources']) if (!data[k]) errors.push(`missing frontmatter: ${k}`);
  if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : String(data.updated))) errors.push('updated must be YYYY-MM-DD');
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date || '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) errors.push('date must be YYYY-MM-DD');
  if (data.title && String(data.title).length > 60) errors.push(`title is ${String(data.title).length} chars; keep it to 60 so search results show it in full`);
  if (data.description && (String(data.description).length < 110 || String(data.description).length > 160)) errors.push(`description is ${String(data.description).length} chars, needs 110 to 160`);
  const aw = String(data.answer || '').split(/\s+/).filter(Boolean).length;
  if (aw < 35 || aw > 75) errors.push(`answer is ${aw} words, needs 35 to 75`);
  if (!Array.isArray(data.tags) || data.tags.length < 2 || data.tags.length > 5) errors.push('tags: 2 to 5');
  else if (String(data.tags[0]).length > 22) errors.push('first tag is printed on the cover; keep it to 22 characters');
  // Target search phrase: must appear where search engines weigh it most.
  const STOP = new Set(['the', 'and', 'for', 'with', 'how', 'what', 'why', 'when', 'are', 'you', 'your', 'from', 'into', 'does', 'that', 'this', 'than', 'vs', 'or', 'a', 'an', 'to', 'of', 'in', 'is', 'on']);
  const kw = String(data.keyword || '').toLowerCase().trim();
  if (!kw) errors.push('missing frontmatter: keyword (the one search phrase this post targets)');
  else {
    const n = kw.split(/\s+/).length;
    if (n < 2 || n > 8) errors.push(`keyword should be 2 to 8 words, got ${n}`);
    const words = kw.split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !STOP.has(w));
    const has = (s) => words.every((w) => String(s || '').toLowerCase().includes(w.replace(/s$/, '')));
    if (!has(data.title)) errors.push(`title must contain the keyword words: ${words.join(', ')}`);
    if (!has(data.description)) errors.push(`description must contain the keyword words: ${words.join(', ')}`);
    if (!has(content.split(/\s+/).slice(0, 120).join(' '))) errors.push('the keyword words must appear in the first 120 words of the body');
    if (!(content.match(/^##+ .+$/gm) || []).some((h) => words.filter((w) => h.toLowerCase().includes(w.replace(/s$/, ''))).length >= Math.min(2, words.length))) warn.push('no heading mentions the keyword; consider phrasing one H2 around it');
    if (!words.some((w) => slug.includes(w.replace(/s$/, '')))) warn.push('the slug does not contain the keyword');
  }
  if (data.cover) {
    const motifs = ['network', 'bars', 'shield', 'layers', 'wave', 'flow', 'grid', 'chip', 'orbit'];
    const palettes = ['signal', 'ink', 'paper', 'ember', 'mint', 'night', 'sky', 'sand'];
    if (data.cover.motif && !motifs.includes(data.cover.motif)) errors.push(`cover.motif must be one of ${motifs.join(', ')}`);
    if (data.cover.palette && !palettes.includes(data.cover.palette)) errors.push(`cover.palette must be one of ${palettes.join(', ')}`);
  }
  if (!Array.isArray(data.faq) || data.faq.length < 3 || data.faq.length > 6 || data.faq.some((f) => !f.q || !f.a)) errors.push('faq: 3 to 6 items, each with q and a');
  if (!Array.isArray(data.sources) || data.sources.length < 3 || data.sources.some((s) => !s.title || !/^https:\/\//.test(s.url || ''))) errors.push('sources: at least 3, each with title and https url');
  if (words < 900 || words > 1900) errors.push(`body is ${words} words, needs 900 to 1900`);
  const h2 = content.match(/^## .+$/gm) || [];
  if (h2.length < 4) errors.push(`only ${h2.length} H2 sections, needs at least 4`);
  if (!h2.some((h) => h.trim().endsWith('?'))) errors.push('at least one H2 should be a question a reader would search for');
  if (/^# /m.test(content)) errors.push('do not use an H1 in the body; the title is the H1');
  if (/[–—]/.test(all) || / -- /.test(all)) errors.push('em or en dash found; rewrite the sentence');
  const links = content.match(INTERNAL) || [];
  if (links.length < 2) errors.push(`only ${links.length} internal links, needs at least 2 to site pages`);
  if (!/\]\(https:\/\//.test(content)) errors.push('cite at least one source inline with a link');
  if (/^\s*[-*] \*\*[^*]+:\*\*/m.test(content) || /^\s*[-*] \*\*[^*]+\*\*:/m.test(content)) errors.push('bold labels on list items read as machine written');
  if ((content.match(/\*\*/g) || []).length > 8) errors.push('too much bold; use it for at most four phrases');
  if ((all.match(/!/g) || []).length > 1) errors.push('exclamation marks; keep at most one');
  if (/[\u{1F300}-\u{1FAFF}]/u.test(all)) errors.push('emoji found');
  for (const b of BANNED) {
    const re = new RegExp(`(^|[^a-z])${b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`, 'i');
    if (re.test(lower)) errors.push(`banned phrase: "${b}"`);
  }
  const notBut = (all.match(/\b(isn't|is not|not just|not only)\b[^.]{0,80}\b(but|it's|it is)\b/gi) || []).length;
  if (notBut > 1) errors.push(`${notBut} "not X but Y" contrasts; keep at most one`);
  // Visuals: every post needs at least one table, chart, stats or steps block, and visual blocks must be valid JSON.
  const blocks = [...content.matchAll(/```(chart|stats|steps)\n([\s\S]*?)```/g)];
  for (const [, kind, json] of blocks) {
    try {
      JSON.parse(json);
    } catch {
      errors.push(`the ${kind} block is not valid JSON`);
    }
  }
  if (!blocks.length && !/^\|.*\|\s*\n\|\s*-/m.test(content)) errors.push('add at least one visual: a table, or a chart, stats or steps block (see the guide)');

  // Plain language: short sentences and paragraphs, readable words, no unexplained acronyms.
  const prose = content.replace(/```[\s\S]*?```/g, '').replace(/^\|.*$/gm, '').replace(/^#.*$/gm, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  const paras = prose.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && !/^[-*\d]/.test(p));
  const longParas = paras.filter((p) => p.split(/\s+/).length > 95).length;
  if (longParas) errors.push(`${longParas} paragraph(s) over 95 words; split them`);
  const proseSentences = prose.split(/(?<=[.?!])\s+/).map((s) => s.trim()).filter((s) => s.split(/\s+/).length > 2);
  const sw = proseSentences.map((s) => s.split(/\s+/).length);
  const avg = sw.reduce((a, b) => a + b, 0) / (sw.length || 1);
  const veryLong = sw.filter((n) => n > 38).length;
  if (avg > 22) errors.push(`average sentence is ${avg.toFixed(1)} words; keep it under 22`);
  if (veryLong > 2) errors.push(`${veryLong} sentences over 38 words; break them up`);
  const allWords = prose.split(/\s+/).filter((w) => /[a-z]/i.test(w));
  const syl = allWords.reduce((a, w) => a + syllables(w), 0);
  const ease = 206.835 - 1.015 * (allWords.length / (proseSentences.length || 1)) - 84.6 * (syl / (allWords.length || 1));
  if (ease < 35) errors.push(`reading ease ${ease.toFixed(0)} is too hard (aim for 50+); use shorter words and sentences`);
  else if (ease < 50) warn.push(`reading ease ${ease.toFixed(0)}; aim for 50 or more`);
  const seen = new Set();
  for (const m of prose.matchAll(/\b([A-Z][A-Z0-9]{1,5}s?)\b/g)) {
    const a = m[1];
    if (KNOWN.has(a) || seen.has(a)) continue;
    seen.add(a);
    const around = prose.slice(Math.max(0, m.index - 80), m.index + a.length + 80);
    if (!/\(/.test(around)) warn.push(`acronym "${a}" is not explained near its first use`);
  }

  const sentences = content.replace(/^#.*$/gm, '').split(/(?<=[.?!])\s+/).filter((s) => s.split(/\s+/).length > 2);
  const lens = sentences.map((s) => s.split(/\s+/).length);
  const mean = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  const sd = Math.sqrt(lens.reduce((a, b) => a + (b - mean) ** 2, 0) / (lens.length || 1));
  if (sd < 5) warn.push(`sentence lengths are very even (sd ${sd.toFixed(1)}); vary the rhythm`);
  const openers = {};
  for (const s of sentences) {
    const w = s.trim().split(/\s+/)[0]?.toLowerCase();
    if (w) openers[w] = (openers[w] || 0) + 1;
  }
  for (const [w, n] of Object.entries(openers)) if (n / sentences.length > 0.12 && n > 4 && !['the', 'a', 'we'].includes(w)) warn.push(`${n} sentences start with "${w}"`);

  console.log(`\n${file}: ${words} words, ${h2.length} sections, ${links.length} internal links, ${(data.sources || []).length} sources`);
  for (const e of errors) console.log('  ERROR ' + e);
  for (const w of warn) console.log('  warn  ' + w);
  if (errors.length) failed++;
}
console.log(failed ? `\n${failed} post(s) failed` : '\nAll posts pass');
process.exit(failed ? 1 : 0);
