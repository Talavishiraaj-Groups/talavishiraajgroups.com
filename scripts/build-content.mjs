// Converts the scraped talavishiraajgroups.com pages into structured JSON
// used by the Next.js site. Run: npm run content
import fs from 'node:fs';
import path from 'node:path';

const SRC = path.resolve('scripts/source-pages');
const OUT = path.resolve('src/content/generated');
fs.mkdirSync(OUT, { recursive: true });

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#x2F;/g, '/')
    // house rule: no en or em dashes
    .replace(/(\d)\s*[–—]\s*(\d)/g, '$1 to $2').replace(/\s*[–—]\s*/g, ': ');

function blocks(file) {
  const html = fs.readFileSync(path.join(SRC, file), 'utf8');
  const start = html.indexOf('<main');
  const end = html.lastIndexOf('</main>');
  let body = start >= 0 ? html.slice(start, end) : html;
  body = body.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  const t = body
    .replace(/<(h[1-6])[^>]*>/g, (_, h) => '\n@@' + h + '@@')
    .replace(/<li[^>]*>/g, '\n@@li@@')
    .replace(/<(p|div|section|article|dt|dd|tr|blockquote|figcaption|summary|br|a|button)[^>]*>/g, '\n')
    .replace(/<\/(td|th)>/g, ' | ')
    .replace(/<[^>]+>/g, '');
  const lines = decode(t).split('\n').map((s) => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
  const out = [];
  for (const l of lines) {
    const m = l.match(/^@@(h[1-6]|li)@@\s*(.*)$/);
    const b = m ? { t: m[1], x: m[2] } : { t: 'p', x: l };
    if (!b.x) continue;
    const prev = out[out.length - 1];
    if (prev && prev.x === b.x) continue;
    out.push(b);
  }
  return out;
}

const NOISE = /^(\d{1,3}\s?)+(%|% over)?|^0\d0\d0|^\$\d+K\$\d+K$/;
const isNoise = (x) => /^0306/.test(x) || /^\d{2}$/.test(x) || x === 'Read the full piece' || x === 'Describe your situation';

// ---------- Insights ----------
const insights = [];
for (const f of fs.readdirSync(SRC).filter((f) => f.startsWith('insights__'))) {
  const slug = f.replace('insights__', '').replace('.html', '');
  const b = blocks(f);
  const h1i = b.findIndex((x) => x.t === 'h1');
  const meta = b[h1i - 1]?.x || '';
  const [category, readTime] = meta.split(' · ');
  const title = b[h1i].x;
  const summary = b[h1i + 1].x;
  const pubIdx = b.findIndex((x) => /^Published .* by Talavishiraaj Groups\.?$/.test(x.x));
  const published = pubIdx >= 0 ? b[pubIdx].x.replace(/^Published (.*) by.*/, '$1') : '';
  const bodyBlocks = b.slice(h1i + 2, pubIdx >= 0 ? pubIdx : undefined);
  const sections = [];
  let inShort = [];
  let cur = null;
  for (const blk of bodyBlocks) {
    if (blk.t === 'h2') {
      cur = { heading: blk.x, blocks: [] };
      sections.push(cur);
      continue;
    }
    if (!cur) continue;
    if (isNoise(blk.x) || /^\d0\d0\d0/.test(blk.x) || /^0\d/.test(blk.x)) continue;
    cur.blocks.push(blk);
  }
  const shortIdx = sections.findIndex((s) => s.heading === 'In short');
  if (shortIdx >= 0) {
    inShort = sections[shortIdx].blocks.filter((x) => x.t === 'li').map((x) => x.x);
    sections.splice(shortIdx, 1);
  }
  // Turn inline chart remnants into a figure block
  for (const s of sections) {
    const nb = [];
    for (let i = 0; i < s.blocks.length; i++) {
      const blk = s.blocks[i];
      if (blk.t === 'h3' && s.blocks[i + 1] && s.blocks.slice(i + 1, i + 8).some((z) => z.x.startsWith('Source:'))) {
        const end = s.blocks.findIndex((z, j) => j > i && z.x.startsWith('Source:'));
        const inner = s.blocks.slice(i + 1, end);
        const caption = inner[0]?.x || '';
        const rows = [];
        for (let k = 1; k < inner.length - 1; k += 2) {
          if (/%|x|\$/.test(inner[k + 1]?.x || '')) rows.push({ label: inner[k].x, value: inner[k + 1].x });
        }
        nb.push({ t: 'figure', title: blk.x, caption, rows, source: (s.blocks[end].x.replace(/^Source:\s*/, '') || s.blocks[end + 1]?.x || '') });
        if (!s.blocks[end].x.replace(/^Source:\s*/, '')) i = end + 1; else
        i = end;
        continue;
      }
      nb.push(blk);
    }
    s.blocks = nb;
  }
  insights.push({ slug, category: category?.trim(), readTime: readTime?.trim(), title, summary, published, inShort, sections });
}
// keep the order of the insights index page
const ib = blocks('insights.html');
const idx = ib.map((x, i) => (/ · \d+ min read$/.test(x.x) ? ib[i + 1].x : null)).filter(Boolean);
insights.sort((a, b) => idx.indexOf(a.title) - idx.indexOf(b.title));
fs.writeFileSync(path.join(OUT, 'insights.json'), JSON.stringify(insights, null, 1));

// ---------- Sectors ----------
const sectorNames = (() => {
  const b = blocks('sectors__agetech-care.html');
  const i = b.findIndex((x) => x.x === 'Other sectors');
  return b.slice(i + 1).filter((x) => x.t === 'li').map((x) => x.x);
})();
const sectors = [];
for (const f of fs.readdirSync(SRC).filter((f) => f.startsWith('sectors__'))) {
  const slug = f.replace('sectors__', '').replace('.html', '');
  const b = blocks(f);
  const h1i = b.findIndex((x) => x.t === 'h1');
  const sec = (name) => {
    const i = b.findIndex((x) => x.t === 'h2' && x.x.startsWith(name));
    if (i < 0) return [];
    const j = b.findIndex((x, k) => k > i && x.t === 'h2');
    return b.slice(i + 1, j < 0 ? undefined : j);
  };
  const faqs = [];
  const q = sec('Questions we are asked');
  for (let i = 0; i < q.length; i++) {
    if (q[i].x.endsWith('?') && q[i + 1]) {
      faqs.push({ q: q[i].x, a: q[i + 1].x });
      i++;
    }
  }
  const CAPS = ['Technology & Engineering', 'Artificial Intelligence & Automation', 'Product Engineering & R&D', 'Business & Operating Systems', 'Growth & Market Enablement', 'Implementation & Delivery'];
  const caps = sec('What the work usually draws on').map((x) => CAPS.find((c) => x.x.startsWith(c))).filter(Boolean);
  const reading = sec('Worth reading first').map((x) => insights.find((i) => x.x.replace(/^\d+ min read/, '').startsWith(i.title))?.slug).filter(Boolean);
  sectors.push({
    slug,
    title: b[h1i].x,
    problem: b[h1i + 1].x,
    intro: b[h1i + 2].x.replace(/Is this your situation\?$/, ''),
    signals: sec('Signals you would recognise').filter((x) => x.t === 'li').map((x) => x.x),
    capabilities: caps,
    reading,
    faqs,
  });
}
// attach the plain sector name using the case-studies sector list order
const caseB = blocks('case-studies.html');
const order = [];
const si = caseB.findIndex((x) => x.x.startsWith('Six published engagements'));
for (let i = si + 2; i < caseB.length - 1; i++) {
  if (caseB[i].x.startsWith('The list is not a boundary')) break;
  order.push({ name: caseB[i].x, line: caseB[i + 1].x });
  i++;
}
for (const s of sectors) {
  const o = order.find((o) => o.line === s.problem);
  s.name = o ? o.name : s.slug;
}
sectors.sort((a, b) => order.findIndex((o) => o.name === a.name) - order.findIndex((o) => o.name === b.name));
fs.writeFileSync(path.join(OUT, 'sectors.json'), JSON.stringify(sectors, null, 1));

// ---------- Legal / governance ----------
const legal = {};
for (const slug of ['privacy-policy', 'terms', 'refund-policy', 'delivery-policy', 'risk-mitigation', 'data-handling', 'ip-policy', 'cookies']) {
  const b = blocks(slug + '.html');
  const h1i = b.findIndex((x) => x.t === 'h1');
  legal[slug] = { title: b[h1i].x, blocks: b.slice(h1i + 1) };
}
fs.writeFileSync(path.join(OUT, 'legal.json'), JSON.stringify(legal, null, 1));

// ---------- Checklist ----------
{
  const b = blocks('resources__ai-production-readiness-checklist.html');
  const groups = [];
  let cur = null;
  for (const blk of b) {
    if (blk.t === 'h2') {
      if (['How to use it', 'Related'].includes(blk.x)) { cur = null; continue; }
      cur = { title: blk.x, lead: '', items: [] };
      groups.push(cur);
    } else if (cur && blk.t === 'p' && !cur.lead) cur.lead = blk.x;
    else if (cur && blk.t === 'li') {
      const m = blk.x.match(/^(\d\.\d)(.*)$/);
      if (m) cur.items.push({ id: m[1], text: m[2].trim() });
    }
  }
  fs.writeFileSync(path.join(OUT, 'checklist.json'), JSON.stringify(groups.filter((g) => g.items.length), null, 1));
}
console.log('insights', insights.length, 'sectors', sectors.length, 'legal', Object.keys(legal).length);
