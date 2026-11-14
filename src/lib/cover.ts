/**
 * Generative blog covers. Every post gets a unique cover, drawn from its own
 * slug, title and tags, in the brand palette. No images to make or upload:
 * the daily writer only writes Markdown and the cover follows.
 *
 * Optional frontmatter override:  cover: { motif: flow, palette: ink }
 *
 * The output is a plain SVG string so the same artwork is used inline on the
 * site (with CSS animation classes defined in globals.css) and rasterised for
 * the social share image.
 */

export const MOTIFS = ['network', 'bars', 'shield', 'layers', 'wave', 'flow', 'grid', 'chip', 'orbit'] as const;
export type Motif = (typeof MOTIFS)[number];

type Palette = { name: string; bg: string; fg: string; accent: string; soft: string; line: string; pillBg: string; pillFg: string };
export const PALETTES: Palette[] = [
  { name: 'signal', bg: '#2B55FF', fg: '#FFFFFF', accent: '#FF5B24', soft: '#8FA6FF', line: 'rgba(255,255,255,0.28)', pillBg: '#FFFFFF', pillFg: '#0A0B0D' },
  { name: 'ink', bg: '#0A0B0D', fg: '#2B55FF', accent: '#2FD6A3', soft: '#8FA6FF', line: 'rgba(255,255,255,0.16)', pillBg: '#2FD6A3', pillFg: '#0A0B0D' },
  { name: 'paper', bg: '#EAE8E1', fg: '#0A0B0D', accent: '#FF5B24', soft: '#2B55FF', line: 'rgba(10,11,13,0.16)', pillBg: '#0A0B0D', pillFg: '#F4F3EE' },
  { name: 'ember', bg: '#FF5B24', fg: '#0A0B0D', accent: '#F4F3EE', soft: '#FFB399', line: 'rgba(10,11,13,0.22)', pillBg: '#0A0B0D', pillFg: '#F4F3EE' },
  { name: 'mint', bg: '#2FD6A3', fg: '#0A0B0D', accent: '#2B55FF', soft: '#E6FFF6', line: 'rgba(10,11,13,0.2)', pillBg: '#0A0B0D', pillFg: '#2FD6A3' },
  { name: 'night', bg: '#14161A', fg: '#FF5B24', accent: '#8FA6FF', soft: '#3A3F48', line: 'rgba(255,255,255,0.14)', pillBg: '#FF5B24', pillFg: '#0A0B0D' },
  { name: 'sky', bg: '#DCE3FF', fg: '#2B55FF', accent: '#0A0B0D', soft: '#FFFFFF', line: 'rgba(43,85,255,0.25)', pillBg: '#2B55FF', pillFg: '#FFFFFF' },
  { name: 'sand', bg: '#F4F3EE', fg: '#2FD6A3', accent: '#0A0B0D', soft: '#2B55FF', line: 'rgba(10,11,13,0.14)', pillBg: '#0A0B0D', pillFg: '#F4F3EE' },
];

/** Topic keywords decide the motif, so a cover says something about the post. */
const KEYWORDS: [Motif, RegExp][] = [
  ['shield', /secur|risk|govern|safety|privacy|trust|attack|breach|guardrail|compliance/i],
  ['grid', /regulat|law|policy|act\b|eu\b|rule|standard|audit|legal/i],
  ['bars', /cost|price|pricing|spend|budget|roi|revenue|market|earning|valuation|funding|invest/i],
  ['network', /agent|multi.?agent|assistant|copilot|orchestrat/i],
  ['flow', /automat|workflow|integrat|pipeline|process|operations|erp|crm/i],
  ['layers', /data|rag|retriev|knowledge|vector|database|warehouse|infrastructure|cloud/i],
  ['chip', /chip|gpu|hardware|compute|edge|device|inference|semiconductor|nvidia/i],
  ['wave', /model|llm|gpt|claude|gemini|language|voice|speech|multimodal|open.?source|fine.?tun/i],
];

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
};
const rng = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export type CoverInput = { slug: string; title: string; tags: string[]; cover?: { motif?: string; palette?: string } };

export function coverSpec(p: CoverInput) {
  const h = hash(p.slug);
  const text = `${p.tags.join(' ')} ${p.title}`;
  const motif = (MOTIFS as readonly string[]).includes(p.cover?.motif || '')
    ? (p.cover!.motif as Motif)
    : KEYWORDS.find(([, re]) => re.test(text))?.[0] ?? MOTIFS[h % MOTIFS.length];
  const palette = PALETTES.find((x) => x.name === p.cover?.palette) ?? PALETTES[(h >>> 3) % PALETTES.length];
  return { motif, palette, seed: h };
}

/**
 * Returns a complete <svg> string, 1200 x 630.
 * animated: adds CSS animation classes (inline use on the site only).
 * label: draws the first tag as a small pill.
 */
export function coverSvg(p: CoverInput, opts: { animated?: boolean; label?: boolean } = {}) {
  const { motif, palette: c, seed } = coverSpec(p);
  const r = rng(seed);
  const A = (cls: string, delay = 0, extra = '') => (opts.animated ? ` class="${cls}" style="animation-delay:${delay.toFixed(2)}s;${extra}"` : '');
  const R = (a: number, b: number) => Math.round(a + r() * (b - a));
  const W = 1200;
  const H = 630;
  let art = '';

  switch (motif) {
    case 'network': {
      const hub = { x: R(720, 860), y: R(280, 350) };
      const nodes = Array.from({ length: 9 }, (_, i) => {
        const a = (i / 9) * Math.PI * 2 + r() * 0.5;
        const d = R(150, 270);
        return { x: Math.round(hub.x + Math.cos(a) * d * 1.25), y: Math.round(hub.y + Math.sin(a) * d * 0.85) };
      });
      art += [300, 220, 140].map((rad, i) => `<ellipse cx="${hub.x}" cy="${hub.y}" rx="${Math.round(rad * 1.3)}" ry="${Math.round(rad * 0.9)}" fill="none" stroke="${c.line}" stroke-width="2"${i === 1 ? ' stroke-dasharray="4 12"' : ''}${A('cv-spin-slow', i)}/>`).join('');
      art += nodes.map((n, i) => `<line x1="${hub.x}" y1="${hub.y}" x2="${n.x}" y2="${n.y}" stroke="${i % 3 ? c.line : c.soft}" stroke-width="2"${i % 3 ? '' : A('cv-dash', i * 0.2)}/>`).join('');
      art += nodes.map((n, i) => `<line x1="${n.x}" y1="${n.y}" x2="${nodes[(i + 2) % 9].x}" y2="${nodes[(i + 2) % 9].y}" stroke="${c.line}" stroke-width="1"/>`).join('');
      art += nodes.map((n, i) => `<g${A('cv-pulse', i * 0.35)}><circle cx="${n.x}" cy="${n.y}" r="${i % 4 === 0 ? 22 : 13}" fill="${i % 4 === 0 ? c.accent : c.bg}" stroke="${c.fg}" stroke-width="3"/></g>`).join('');
      art += `<circle cx="${hub.x}" cy="${hub.y}" r="58" fill="${c.fg}"/><circle cx="${hub.x}" cy="${hub.y}" r="84" fill="none" stroke="${c.fg}" stroke-width="2"${A('cv-ping')}/><circle cx="${hub.x}" cy="${hub.y}" r="18" fill="${c.bg}"/>`;
      break;
    }
    case 'bars': {
      const n = 9;
      const base = 520;
      let pts = '';
      let v = R(60, 110);
      for (let i = 0; i < n; i++) {
        v = Math.max(50, Math.min(330, v + R(-25, 55)));
        const x = 520 + i * 70;
        art += `<rect x="${x}" y="${base - v}" width="44" height="${v}" rx="6" fill="${i === n - 1 ? c.accent : i % 2 ? c.fg : c.soft}" fill-opacity="${i === n - 1 ? 1 : 0.85}"${A('cv-grow', 0.1 + i * 0.07)}/>`;
        pts += `${x + 22},${base - v - 30} `;
      }
      art += [0, 1, 2, 3].map((k) => `<line x1="480" x2="1160" y1="${base - k * 100}" y2="${base - k * 100}" stroke="${c.line}" stroke-width="${k ? 1 : 2}"/>`).join('');
      art += `<polyline points="${pts.trim()}" fill="none" stroke="${c.fg}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"${A('cv-draw', 0.6)} pathLength="1"/>`;
      const last = pts.trim().split(' ').pop()!.split(',');
      art += `<circle cx="${last[0]}" cy="${last[1]}" r="14" fill="${c.accent}" stroke="${c.bg}" stroke-width="5"${A('cv-pulse', 1.4)}/>`;
      break;
    }
    case 'shield': {
      const cx = R(800, 880);
      const cy = 315;
      const shield = (s: number) => `M${cx},${cy - 190 * s} L${cx + 160 * s},${cy - 125 * s} L${cx + 160 * s},${cy + 10 * s} C${cx + 160 * s},${cy + 120 * s} ${cx + 70 * s},${cy + 185 * s} ${cx},${cy + 215 * s} C${cx - 70 * s},${cy + 185 * s} ${cx - 160 * s},${cy + 120 * s} ${cx - 160 * s},${cy + 10 * s} L${cx - 160 * s},${cy - 125 * s} Z`;
      art += [1.55, 1.3, 1.05].map((s, i) => `<path d="${shield(s)}" fill="none" stroke="${c.line}" stroke-width="2"${i === 1 ? ' stroke-dasharray="3 10"' : ''}${A('cv-pulse', i * 0.5)}/>`).join('');
      art += `<path d="${shield(0.8)}" fill="${c.fg}"/>`;
      art += `<rect x="${cx - 46}" y="${cy - 10}" width="92" height="76" rx="12" fill="${c.bg}"/><path d="M${cx - 28},${cy - 10} v-26 a28,28 0 0 1 56,0 v26" fill="none" stroke="${c.bg}" stroke-width="12"/><circle cx="${cx}" cy="${cy + 26}" r="10" fill="${c.accent}"/>`;
      for (let i = 0; i < 14; i++) {
        const x = R(470, 1150);
        const y = R(60, 580);
        if (Math.abs(x - cx) < 260) continue;
        art += `<rect x="${x}" y="${y}" width="16" height="16" rx="3" fill="${i % 4 ? c.line : c.accent}"${A('cv-blink', i * 0.3)}/>`;
      }
      break;
    }
    case 'layers': {
      const cx = R(790, 860);
      for (let i = 4; i >= 0; i--) {
        const y = 170 + i * 72;
        const fill = i === 0 ? c.fg : i === 4 ? c.accent : c.soft;
        art += `<g${A('cv-float', i * 0.4)}><path d="M${cx},${y - 70} L${cx + 260},${y} L${cx},${y + 70} L${cx - 260},${y} Z" fill="${fill}" fill-opacity="${i === 0 || i === 4 ? 1 : 0.5}" stroke="${c.bg}" stroke-width="3"/></g>`;
      }
      for (let k = 0; k < 6; k++) {
        const x = cx - 180 + k * 72;
        art += `<line x1="${x}" y1="80" x2="${x}" y2="${R(440, 560)}" stroke="${c.line}" stroke-width="2" stroke-dasharray="2 10"${A('cv-dash', k * 0.25)}/>`;
      }
      break;
    }
    case 'wave': {
      for (let k = 0; k < 6; k++) {
        const amp = R(30, 90);
        const y0 = 180 + k * 55;
        const ph = r() * 6;
        let d = `M440,${y0}`;
        for (let x = 440; x <= 1200; x += 20) d += ` L${x},${Math.round(y0 + Math.sin(x / 70 + ph) * amp * Math.sin((x - 440) / 240))}`;
        art += `<path d="${d}" fill="none" stroke="${k === 2 ? c.accent : k % 2 ? c.fg : c.soft}" stroke-width="${k === 2 ? 5 : 3}" stroke-linecap="round"${A('cv-draw', k * 0.15)} pathLength="1"/>`;
      }
      for (let i = 0; i < 10; i++) {
        art += `<rect x="${500 + i * 64}" y="${R(500, 540)}" width="${R(30, 54)}" height="18" rx="9" fill="${i % 3 ? c.line : c.fg}"${A('cv-blink', i * 0.2)}/>`;
      }
      break;
    }
    case 'flow': {
      const ys = [150, 315, 480];
      const cols = [520, 760, 1000];
      const boxes: { x: number; y: number }[] = [];
      cols.forEach((x, ci) => ys.forEach((y, yi) => { if (ci !== 1 || yi === 1 || r() > 0.4) boxes.push({ x, y }); }));
      const mid = { x: 760, y: 315 };
      for (const b of boxes) {
        if (b.x === mid.x && b.y === mid.y) continue;
        const d = b.x < mid.x ? `M${b.x + 70},${b.y} C${b.x + 140},${b.y} ${mid.x - 140},${mid.y} ${mid.x - 70},${mid.y}` : b.x > mid.x ? `M${mid.x + 70},${mid.y} C${mid.x + 140},${mid.y} ${b.x - 140},${b.y} ${b.x - 70},${b.y}` : `M${b.x},${b.y + (b.y < mid.y ? 50 : -50)} L${mid.x},${mid.y + (b.y < mid.y ? -50 : 50)}`;
        art += `<path d="${d}" fill="none" stroke="${c.fg}" stroke-width="3" stroke-dasharray="8 12"${A('cv-dash', r())}/>`;
      }
      boxes.forEach((b, i) => {
        const main = b.x === mid.x && b.y === mid.y;
        art += `<g${A('cv-float', i * 0.3)}><rect x="${b.x - 70}" y="${b.y - 48}" width="140" height="96" rx="18" fill="${main ? c.accent : c.bg}" stroke="${c.fg}" stroke-width="3"/><rect x="${b.x - 44}" y="${b.y - 14}" width="${R(50, 88)}" height="10" rx="5" fill="${main ? c.bg : c.fg}"/><rect x="${b.x - 44}" y="${b.y + 8}" width="${R(30, 70)}" height="10" rx="5" fill="${main ? c.bg : c.line}"/></g>`;
      });
      break;
    }
    case 'grid': {
      const cols = 9;
      const rows = 6;
      const lit = new Set(Array.from({ length: 9 }, () => R(0, cols * rows - 1)));
      for (let y = 0; y < rows; y++)
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const on = lit.has(i);
          const px = 470 + x * 76;
          const py = 70 + y * 82;
          art += `<rect x="${px}" y="${py}" width="58" height="58" rx="10" fill="${on ? (i % 2 ? c.fg : c.accent) : 'none'}" stroke="${on ? 'none' : c.line}" stroke-width="2"${on ? A('cv-pulse', (i % 7) * 0.3) : ''}/>`;
          if (on && i % 2) art += `<path d="M${px + 16},${py + 30} l9,9 l18,-20" fill="none" stroke="${c.bg}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
        }
      const sx = R(900, 1040);
      art += `<circle cx="${sx}" cy="420" r="92" fill="${c.bg}" stroke="${c.fg}" stroke-width="4"/><circle cx="${sx}" cy="420" r="70" fill="none" stroke="${c.fg}" stroke-width="2" stroke-dasharray="4 8"${A('cv-spin-slow')}/><path d="M${sx - 26},422 l18,18 l36,-40" fill="none" stroke="${c.accent}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>`;
      break;
    }
    case 'chip': {
      const cx = R(800, 870);
      const cy = 315;
      for (let i = 0; i < 7; i++) {
        const o = -150 + i * 50;
        art += `<line x1="${cx + o}" y1="${cy - 260}" x2="${cx + o}" y2="${cy - 140}" stroke="${c.line}" stroke-width="4"/><line x1="${cx + o}" y1="${cy + 140}" x2="${cx + o}" y2="${cy + 260}" stroke="${c.line}" stroke-width="4"/>`;
        art += `<line x1="${cx - 330}" y1="${cy + o}" x2="${cx - 140}" y2="${cy + o}" stroke="${i % 3 ? c.line : c.fg}" stroke-width="4"${i % 3 ? '' : A('cv-dash', i * 0.2)} ${i % 3 ? '' : 'stroke-dasharray="10 14"'}/><line x1="${cx + 140}" y1="${cy + o}" x2="${cx + 330}" y2="${cy + o}" stroke="${c.line}" stroke-width="4"/>`;
      }
      art += `<rect x="${cx - 140}" y="${cy - 140}" width="280" height="280" rx="28" fill="${c.fg}"/><rect x="${cx - 86}" y="${cy - 86}" width="172" height="172" rx="16" fill="${c.bg}"/>`;
      for (let i = 0; i < 9; i++) art += `<rect x="${cx - 66 + (i % 3) * 46}" y="${cy - 66 + Math.floor(i / 3) * 46}" width="36" height="36" rx="6" fill="${i === 4 ? c.accent : c.soft}" fill-opacity="${i === 4 ? 1 : 0.55}"${A('cv-blink', i * 0.25)}/>`;
      break;
    }
    default: {
      const cx = R(780, 880);
      const cy = R(290, 340);
      art += [280, 210, 140].map((rad, i) => `<circle cx="${cx}" cy="${cy}" r="${rad}" fill="none" stroke="${c.line}" stroke-width="2"${i === 0 ? ' stroke-dasharray="2 10"' : ''}/>`).join('');
      art += `<circle cx="${cx}" cy="${cy}" r="86" fill="${c.fg}"/>`;
      [280, 210, 140].forEach((rad, i) => {
        const a = r() * Math.PI * 2;
        art += `<g${A(i % 2 ? 'cv-spin-rev' : 'cv-spin', 0, `transform-box:view-box;transform-origin:${cx}px ${cy}px`)}><circle cx="${Math.round(cx + Math.cos(a) * rad)}" cy="${Math.round(cy + Math.sin(a) * rad)}" r="${[18, 12, 9][i]}" fill="${i === 0 ? c.accent : c.soft}"/></g>`;
      });
    }
  }

  // Background texture: a few faint rules seeded per post, so even two covers with the same motif differ.
  let bgRules = '';
  for (let i = 0; i < 4; i++) {
    const y = R(40, 600);
    bgRules += `<line x1="0" x2="${R(200, 460)}" y1="${y}" y2="${y}" stroke="${c.line}" stroke-width="1"/>`;
  }
  const corner = `<circle cx="${R(60, 360)}" cy="${R(420, 620)}" r="${R(120, 220)}" fill="${c.soft}" fill-opacity="0.18"/>`;
  // Large topic word in the open space on the left, like an editorial cover.
  let label = '';
  if (opts.label && p.tags[0]) {
    const lines: string[] = [];
    for (const w of p.tags[0].split(/\s+/)) {
      const last = lines[lines.length - 1];
      if (last && (last + ' ' + w).length <= 12) lines[lines.length - 1] = last + ' ' + w;
      else lines.push(w);
    }
    const size = lines.some((l) => l.length > 9) ? 64 : 76;
    label =
      `<rect x="64" y="64" width="44" height="6" rx="3" fill="${c.pillBg}"/>` +
      lines
        .slice(0, 3)
        .map((l, i) => `<text x="60" y="${150 + i * (size + 4)}" font-family="Inter Tight, Inter, Arial, sans-serif" font-size="${size}" font-weight="600" letter-spacing="-2" fill="${c.pillBg}">${esc(l)}</text>`)
        .join('');
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(p.title)}"><rect width="${W}" height="${H}" fill="${c.bg}"/>${corner}${bgRules}${art}${label}</svg>`;
}

export const coverDataUri = (p: CoverInput) => `data:image/svg+xml;base64,${Buffer.from(coverSvg(p, { label: false })).toString('base64')}`;
