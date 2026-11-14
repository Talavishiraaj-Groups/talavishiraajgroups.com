/**
 * Visual blocks a post can include with fenced code blocks, so the daily writer
 * can add charts and diagrams without making images:
 *
 * ```chart
 * { "title": "Monthly cost at 40% automation", "unit": "$", "data": [ { "label": "600 requests", "value": 188 }, ... ], "highlight": 2, "note": "Source: Zendesk pricing" }
 * ```
 * ```stats
 * [ { "value": "6,000+", "label": "prebuilt agents from IBM Consulting" }, ... ]
 * ```
 * ```steps
 * [ "Pick two repetitive request types", "Trial a prebuilt agent for a month", "Scope the one process that is yours" ]
 * ```
 * Everything is escaped; invalid JSON falls back to a normal code block.
 */
const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const COLORS = ['#2B55FF', '#8FA6FF', '#0A0B0D', '#2FD6A3'];

function chart(cfg: { title?: string; unit?: string; suffix?: string; data: { label: string; value: number }[]; highlight?: number; note?: string }) {
  const rows = (cfg.data || []).slice(0, 10).filter((d) => Number.isFinite(Number(d.value)));
  if (!rows.length) return null;
  const max = Math.max(...rows.map((d) => Number(d.value)));
  const W = 640;
  const labelW = 190;
  const barMax = W - labelW - 90;
  const rowH = 44;
  const H = rows.length * rowH + 12;
  const fmt = (v: number) => `${cfg.unit ?? ''}${v.toLocaleString('en-US')}${cfg.suffix ?? ''}`;
  const bars = rows
    .map((d, i) => {
      const v = Number(d.value);
      const w = Math.max(4, Math.round((v / (max || 1)) * barMax));
      const y = 6 + i * rowH;
      const hi = cfg.highlight === i;
      return `<text x="0" y="${y + 24}" font-size="14" fill="#0A0B0D" fill-opacity="0.75">${esc(d.label).slice(0, 28)}</text>
<rect x="${labelW}" y="${y + 8}" width="${w}" height="24" rx="6" fill="${hi ? '#FF5B24' : COLORS[i % 2]}" class="cv-grow-x" style="animation-delay:${(0.08 * i).toFixed(2)}s"/>
<text x="${labelW + w + 10}" y="${y + 25}" font-size="14" font-weight="600" fill="#0A0B0D">${esc(fmt(v))}</text>`;
    })
    .join('');
  return `<figure class="viz not-prose">${cfg.title ? `<figcaption class="viz-title">${esc(cfg.title)}</figcaption>` : ''}<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(cfg.title || 'Chart')}" font-family="var(--font-sans), Arial, sans-serif">${bars}</svg>${cfg.note ? `<p class="viz-note">${esc(cfg.note)}</p>` : ''}</figure>`;
}

function stats(items: { value: string; label: string }[]) {
  const list = (items || []).slice(0, 4).filter((s) => s && s.value);
  if (!list.length) return null;
  return `<div class="viz-stats not-prose">${list.map((s, i) => `<div class="viz-stat"><span class="viz-stat-v" style="color:${['#2B55FF', '#FF5B24', '#0A0B0D', '#2FD6A3'][i]}">${esc(s.value)}</span><span class="viz-stat-l">${esc(s.label)}</span></div>`).join('')}</div>`;
}

function steps(items: string[]) {
  const list = (items || []).slice(0, 6).map(String).filter(Boolean);
  if (!list.length) return null;
  return `<ol class="viz-steps not-prose">${list.map((s, i) => `<li><span class="viz-step-n">${String(i + 1).padStart(2, '0')}</span><span>${esc(s)}</span></li>`).join('')}</ol>`;
}

export function renderVisual(lang: string, text: string): string | null {
  if (!['chart', 'stats', 'steps'].includes(lang)) return null;
  try {
    const data = JSON.parse(text);
    if (lang === 'chart') return chart(data);
    if (lang === 'stats') return stats(data);
    return steps(data);
  } catch {
    return null;
  }
}
