'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ease } from './motion';

const r2 = (n: number) => Math.round(n * 100) / 100;

/* ------------------------------------------------------------------ */
/* Hero: five disciplines converging into one accountable core          */
/* ------------------------------------------------------------------ */
export function Convergence({ labels = ['Software', 'Data', 'AI', 'Hardware', 'Operations'] }: { labels?: string[] }) {
  const cx = 300;
  const cy = 300;
  const R = 215;
  const nodes = labels.map((l, i) => {
    const a = (-90 + (360 / labels.length) * i) * (Math.PI / 180);
    return { l, x: r2(cx + R * Math.cos(a)), y: r2(cy + R * Math.sin(a)) };
  });
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" role="img" aria-label="Software, data, AI, hardware and operations converging into one team">
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8FA6FF" />
          <stop offset="55%" stopColor="#2B55FF" />
          <stop offset="100%" stopColor="#2B55FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="beam" x1="0" x2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="100%" stopColor="#8FA6FF" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {[260, 200, 140, 80].map((r, i) => (
        <motion.circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="rgba(10,11,13,0.10)"
          strokeDasharray={i % 2 ? '2 6' : '0'}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2 + i * 0.12, ease }}
          style={{ transformOrigin: '300px 300px' }}
        />
      ))}
      {nodes.map((n, i) => {
        const id = `p${i}`;
        return (
          <g key={n.l}>
            <path id={id} d={`M${n.x},${n.y} Q${(n.x + cx) / 2 + (i % 2 ? 40 : -40)},${(n.y + cy) / 2} ${cx},${cy}`} fill="none" />
            <motion.path
              d={`M${n.x},${n.y} Q${(n.x + cx) / 2 + (i % 2 ? 40 : -40)},${(n.y + cy) / 2} ${cx},${cy}`}
              fill="none"
              stroke="rgba(43,85,255,0.45)"
              strokeWidth={1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.8 + i * 0.12, ease }}
            />
            {[0, 1, 2].map((k) => (
              <circle key={k} r={2.6} fill="#2B55FF">
                <animateMotion dur={`${2.6 + i * 0.3}s`} begin={`${1.6 + k * 0.9 + i * 0.2}s`} repeatCount="indefinite">
                  <mpath href={`#${id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur={`${2.6 + i * 0.3}s`} begin={`${1.6 + k * 0.9 + i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            ))}
            <motion.g initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease }} style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
              <circle cx={n.x} cy={n.y} r={30} fill="#FFFFFF" stroke="rgba(10,11,13,0.14)" />
              <circle cx={n.x} cy={n.y} r={4} fill="#2B55FF" />
              <text x={n.x} y={n.y + (n.y > cy ? 52 : -42)} textAnchor="middle" fill="rgba(10,11,13,0.8)" fontSize="17" fontWeight={500} fontFamily="var(--font-sans)">
                {n.l}
              </text>
            </motion.g>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r={90} fill="url(#core)" opacity={0.25}>
        <animate attributeName="r" values="80;96;80" dur="4s" repeatCount="indefinite" />
      </circle>
      <motion.circle cx={cx} cy={cy} r={34} fill="#2B55FF" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 1.4, ease }} style={{ transformOrigin: '300px 300px' }} />
      <motion.text x={cx} y={cy + 4} textAnchor="middle" fontSize="13" fontWeight={600} fontFamily="var(--font-sans)" fill="#FFFFFF" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        One team
      </motion.text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Capability visuals                                                  */
/* ------------------------------------------------------------------ */
export function CapVisual({ kind, tint = '#2B55FF', dark = false }: { kind: string; tint?: string; dark?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const stroke = dark ? 'rgba(255,255,255,0.22)' : 'rgba(10,11,13,0.18)';
  const fill = dark ? 'rgba(255,255,255,0.06)' : 'rgba(10,11,13,0.04)';
  const go = inView ? 'show' : 'hidden';
  const v = (d = 0) => ({ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease } } });

  if (kind === 'stack') {
    return (
      <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
        {[0, 1, 2, 3].map((i) => (
          <motion.g key={i} variants={v(i * 0.12)} initial="hidden" animate={go}>
            <path d={`M200 ${70 + i * 42} L320 ${120 + i * 42} L200 ${170 + i * 42} L80 ${120 + i * 42} Z`} fill={i === 0 ? tint : fill} fillOpacity={i === 0 ? 0.9 : 1} stroke={i === 0 ? tint : stroke} />
          </motion.g>
        ))}
        {[0, 1, 2].map((i) => (
          <motion.circle key={i} r={3} fill={tint} initial={{ cy: 250 }} animate={inView ? { cy: [250, 120], opacity: [0, 1, 0] } : {}} transition={{ duration: 2.2, delay: i * 0.7, repeat: Infinity, ease: 'easeInOut' }} cx={150 + i * 50} />
        ))}
        <text x="330" y="124" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.6}>App</text>
        <text x="330" y="166" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.6}>API</text>
        <text x="330" y="208" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.6}>Data</text>
        <text x="330" y="250" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.6}>Infra</text>
      </svg>
    );
  }
  if (kind === 'neural') {
    const layers = [3, 5, 5, 2];
    const pts = layers.map((n, li) => Array.from({ length: n }).map((_, k) => ({ x: 60 + li * 93, y: 150 + (k - (n - 1) / 2) * 46 })));
    return (
      <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
        {pts.slice(0, -1).map((layer, li) =>
          layer.map((a, ai) =>
            pts[li + 1].map((b, bi) => (
              <motion.line key={`${li}${ai}${bi}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={stroke} initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: li * 0.3 + ai * 0.05 }} />
            )),
          ),
        )}
        {pts.flat().map((p, i) => (
          <motion.circle key={i} cx={p.x} cy={p.y} r={9} fill={dark ? '#14161A' : '#fff'} stroke={tint} strokeWidth={1.5} initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 0.2 + i * 0.04, ease }} style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
        ))}
        {pts.flat().map((p, i) => (
          <motion.circle key={'g' + i} cx={p.x} cy={p.y} r={4} fill={tint} animate={inView ? { opacity: [0.2, 1, 0.2] } : {}} transition={{ duration: 1.8, delay: (i % 5) * 0.3 + Math.floor(i / 5) * 0.2, repeat: Infinity }} />
        ))}
        <text x="340" y="105" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.55}>Automated</text>
        <text x="340" y="200" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.55}>Human</text>
      </svg>
    );
  }
  if (kind === 'blueprint') {
    return (
      <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
        <motion.circle cx={200} cy={150} r={80} fill="none" stroke={tint} strokeWidth={1.5} initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.6, ease }} />
        <motion.circle cx={200} cy={150} r={44} fill="none" stroke={tint} strokeWidth={1.5} strokeDasharray="4 4" initial={{ rotate: 0 }} animate={inView ? { rotate: 360 } : {}} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '200px 150px' }} />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return <motion.rect key={i} x={r2(200 + 80 * Math.cos(a) - 6)} y={r2(150 + 80 * Math.sin(a) - 6)} width={12} height={12} fill={dark ? '#0A0B0D' : '#F4F3EE'} stroke={tint} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 + i * 0.08 }} />;
        })}
        <motion.line x1={60} y1={260} x2={340} y2={260} stroke={dark ? '#fff' : '#0A0B0D'} strokeWidth={1} initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ duration: 1.2, delay: 0.6 }} />
        <text x="200" y="280" textAnchor="middle" fontSize="12" fontFamily="var(--font-sans)" fill={dark ? '#fff' : '#0A0B0D'} opacity={0.6}>Ø 160.00 ± 0.05</text>
        <text x="200" y="154" textAnchor="middle" fontSize="12" fontFamily="var(--font-sans)" fill={tint}>Rev C</text>
      </svg>
    );
  }
  if (kind === 'flow') {
    const nodes = [
      { x: 50, y: 150, l: 'In' },
      { x: 150, y: 80, l: 'A' },
      { x: 150, y: 220, l: 'B' },
      { x: 255, y: 150, l: 'Decide' },
      { x: 350, y: 150, l: 'Out' },
    ];
    const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]];
    return (
      <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
        {edges.map(([a, b], i) => (
          <g key={i}>
            <path id={`fe${i}${tint.slice(1)}`} d={`M${nodes[a].x} ${nodes[a].y} C ${(nodes[a].x + nodes[b].x) / 2} ${nodes[a].y}, ${(nodes[a].x + nodes[b].x) / 2} ${nodes[b].y}, ${nodes[b].x} ${nodes[b].y}`} fill="none" stroke={stroke} strokeWidth={1.5} />
            {inView && (
              <circle r={3.5} fill={tint}>
                <animateMotion dur="2.4s" begin={`${i * 0.35}s`} repeatCount="indefinite">
                  <mpath href={`#fe${i}${tint.slice(1)}`} />
                </animateMotion>
              </circle>
            )}
          </g>
        ))}
        {nodes.map((n, i) => (
          <motion.g key={i} variants={v(i * 0.1)} initial="hidden" animate={go}>
            <rect x={n.x - 30} y={n.y - 16} width={60} height={32} rx={i === 3 ? 16 : 6} fill={i === 3 ? tint : dark ? '#14161A' : '#fff'} stroke={i === 3 ? tint : stroke} />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="11" fontFamily="var(--font-sans)" fill={i === 3 ? '#0A0B0D' : dark ? '#fff' : '#0A0B0D'}>
              {n.l}
            </text>
          </motion.g>
        ))}
      </svg>
    );
  }
  if (kind === 'funnel') {
    const rows = [1, 0.78, 0.56, 0.36, 0.2];
    return (
      <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
        {rows.map((w, i) => (
          <motion.rect key={i} x={200 - 150 * w} y={40 + i * 46} height={34} rx={4} fill={i === rows.length - 1 ? tint : fill} stroke={i === rows.length - 1 ? tint : stroke} initial={{ width: 0 }} animate={inView ? { width: 300 * w } : {}} transition={{ duration: 1, delay: i * 0.12, ease }} />
        ))}
        {['Reach', 'Engage', 'Qualify', 'Propose', 'Win'].map((l, i) => (
          <motion.text key={l} x={200} y={62 + i * 46} textAnchor="middle" fontSize="12" fontFamily="var(--font-sans)" fill={i === 4 ? '#0A0B0D' : dark ? '#fff' : '#0A0B0D'} opacity={0.75} variants={v(0.4 + i * 0.1)} initial="hidden" animate={go}>
            {l}
          </motion.text>
        ))}
      </svg>
    );
  }
  // gantt
  const bars = [
    [0.05, 0.3],
    [0.2, 0.35],
    [0.35, 0.3],
    [0.5, 0.35],
    [0.7, 0.25],
  ];
  return (
    <svg ref={ref} viewBox="0 0 400 300" className="h-full w-full">
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1={40 + i * 40} y1={30} x2={40 + i * 40} y2={270} stroke={stroke} strokeWidth={0.5} strokeDasharray="2 4" />
      ))}
      {bars.map(([s, w], i) => (
        <motion.rect key={i} x={40 + s * 320} y={48 + i * 44} height={22} rx={11} fill={i === 2 ? tint : fill} stroke={i === 2 ? tint : stroke} initial={{ width: 0 }} animate={inView ? { width: w * 320 } : {}} transition={{ duration: 1, delay: 0.2 + i * 0.15, ease }} />
      ))}
      {[[0, 1], [1, 2], [2, 3], [3, 4]].map(([a, b], i) => (
        <motion.path key={i} d={`M${40 + (bars[a][0] + bars[a][1]) * 320} ${59 + a * 44} h8 v44 h-4`} fill="none" stroke={dark ? '#fff' : '#0A0B0D'} strokeOpacity={0.4} initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}} transition={{ delay: 1 + i * 0.15 }} />
      ))}
      <motion.line x1={40} x2={40} y1={30} y2={270} stroke={tint} strokeWidth={1.5} animate={inView ? { x1: [40, 360], x2: [40, 360] } : {}} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Prism refraction                                                     */
/* ------------------------------------------------------------------ */
export function PrismVisual() {
  const outs = [
    { y: 120, c: '#8FA6FF', l: 'Build' },
    { y: 200, c: '#2FD6A3', l: 'Buy' },
    { y: 280, c: '#FFB020', l: 'Partner' },
    { y: 360, c: '#FF5B24', l: 'Not yet' },
  ];
  return (
    <svg viewBox="0 0 800 480" className="h-full w-full" role="img" aria-label="A single decision refracted into build, buy, partner or not yet">
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2B55FF" stopOpacity="0.10" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.6" />
        </linearGradient>
        {outs.map((o, i) => (
          <linearGradient key={i} id={`ray${i}`} x1="0" x2="1">
            <stop offset="0" stopColor={o.c} stopOpacity="0.9" />
            <stop offset="1" stopColor={o.c} stopOpacity="0.05" />
          </linearGradient>
        ))}
      </defs>
      <motion.line x1={0} y1={250} x2={330} y2={250} stroke="#0A0B0D" strokeWidth={3} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, ease }} />
      <text x={20} y={228} fontSize="20" fontWeight={500} fontFamily="var(--font-sans)" fill="rgba(10,11,13,0.55)">
        Your decision
      </text>
      {outs.map((o, i) => (
        <motion.path
          key={i}
          d={`M400 ${236 + i * 9} L800 ${o.y - 10} L800 ${o.y + 10} Z`}
          fill={`url(#ray${i})`}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 + i * 0.12, ease }}
          style={{ transformOrigin: '400px 250px' }}
        />
      ))}
      {outs.map((o, i) => (
        <motion.text key={o.l} x={780} y={o.y + 4} textAnchor="end" fontSize="20" fontFamily="var(--font-sans)" fill="#0A0B0D" fontWeight={600} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 + i * 0.1 }}>
          {o.l}
        </motion.text>
      ))}
      <motion.path d="M380 110 L470 390 L290 390 Z" fill="url(#glass)" stroke="rgba(10,11,13,0.35)" strokeWidth={1.2} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease }} />
      <motion.path d="M380 110 L420 390" stroke="rgba(10,11,13,0.12)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Charts                                                               */
/* ------------------------------------------------------------------ */
export function RangeBars({ rows, max = 60, unit = '%' }: { rows: { label: string; lo: number; hi: number; tone?: 'signal' | 'ember' | 'mint' | 'ink' }[]; max?: number; unit?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const tones = { signal: '#2B55FF', ember: '#FF5B24', mint: '#2FD6A3', ink: '#0A0B0D' };
  return (
    <div ref={ref} className="space-y-6">
      {rows.map((r, i) => (
        <div key={r.label}>
          <div className="mb-2 flex items-baseline justify-between gap-4 text-[15px]">
            <span>{r.label}</span>
            <span className="text-sm font-medium">
              {r.lo} to {r.hi}
              {unit}
            </span>
          </div>
          <div className="relative h-10 overflow-hidden rounded-md bg-ink/[0.05]">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-md opacity-30"
              style={{ background: tones[r.tone ?? 'signal'] }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${(r.hi / max) * 100}%` } : {}}
              transition={{ duration: 1.3, delay: i * 0.15, ease }}
            />
            <motion.div
              className="absolute inset-y-0 left-0 rounded-md"
              style={{ background: tones[r.tone ?? 'signal'] }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${(r.lo / max) * 100}%` } : {}}
              transition={{ duration: 1.3, delay: 0.1 + i * 0.15, ease }}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between text-[11px] text-muted">
        {[0, max / 2, max].map((t) => (
          <span key={t}>
            {t}
            {unit}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Donut({ value, label, sub }: { value: number; label: string; sub: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const r = 80;
  const c = r2(2 * Math.PI * r);
  return (
    <svg ref={ref} viewBox="0 0 200 200" className="h-full w-full -rotate-90">
      <circle cx={100} cy={100} r={r} fill="none" stroke="#FF5B24" strokeWidth={26} />
      <motion.circle cx={100} cy={100} r={r} fill="none" stroke="#0A0B0D" strokeWidth={26} strokeDasharray={c} initial={{ strokeDashoffset: c }} animate={inView ? { strokeDashoffset: c * (1 - value / 100) } : {}} transition={{ duration: 1.6, ease }} />
      <g className="rotate-90" style={{ transformOrigin: '100px 100px' }}>
        <text x={100} y={100} textAnchor="middle" fontSize="34" fontWeight={600} fill="#0A0B0D" letterSpacing="-1">
          {label}
        </text>
        <text x={100} y={124} textAnchor="middle" fontSize="12" fontFamily="var(--font-sans)" fill="#5C6068">
          {sub}
        </text>
      </g>
    </svg>
  );
}

export function QuoteSpread() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const pos = (v: number) => r2((Math.log10(v / 25) / Math.log10(500 / 25)) * 100); // log scale 25K → 500K
  const quotes = [40, 58, 75, 96, 120, 145, 180, 230, 310, 400];
  return (
    <div ref={ref} className="relative pb-14 pt-16">
      <div className="relative h-[2px] bg-ink/15">
        <motion.div className="absolute inset-y-0 bg-ink" style={{ left: `${pos(40)}%` }} initial={{ width: 0 }} animate={inView ? { width: `${pos(400) - pos(40)}%` } : {}} transition={{ duration: 1.4, ease }} />
      </div>
      {quotes.map((q, i) => (
        <motion.div key={q} className="absolute top-16 -mt-[7px] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-ink bg-paper" style={{ left: `${pos(q)}%` }} initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ delay: 0.4 + i * 0.08, ease }} />
      ))}
      <motion.div className="absolute top-0 -translate-x-1/2 text-center" style={{ left: `${pos(132)}%` }} initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.4 }}>
        <div className="rounded-full bg-signal px-3 py-1 text-xs text-white">avg $132K</div>
        <div className="mx-auto h-8 w-px bg-signal" />
      </motion.div>
      <div className="absolute bottom-0 text-sm" style={{ left: `${pos(40)}%`, transform: 'translateX(-50%)' }}>
        $40K
      </div>
      <div className="absolute bottom-0 text-sm" style={{ left: `${pos(400)}%`, transform: 'translateX(-50%)' }}>
        $400K
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Global presence as a 24h ribbon                                      */
/* ------------------------------------------------------------------ */
export function TimezoneRibbon() {
  const markets = [
    { l: 'United States', off: -5 },
    { l: 'United Kingdom', off: 0 },
    { l: 'Europe', off: 1 },
    { l: 'UAE', off: 4 },
    { l: 'India', off: 5.5 },
  ];
  const pos = (o: number) => ((o + 8) / 24) * 100;
  return (
    <div className="relative">
      <div className="flex h-28 overflow-hidden rounded-2xl border border-line bg-white">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-ink/[0.06]" style={{ background: `rgba(43,85,255,${0.04 + 0.22 * Math.max(0, Math.sin(((i - 2) / 24) * Math.PI * 2))})` }} />
        ))}
      </div>
      {markets.map((m, i) => (
        <motion.div key={m.l} className="absolute top-0 h-28" style={{ left: `${pos(m.off)}%` }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, ease }}>
          <div className="relative top-1/2 -ml-1.5 h-3 w-3 -translate-y-1/2">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-signal" />
            <span className="absolute inset-0 rounded-full bg-signal" />
          </div>
          <div className={`absolute -ml-px w-px bg-ink/25 ${i % 2 ? 'top-[70%] h-14' : 'bottom-[70%] h-14'}`} />
          <div className={`absolute whitespace-nowrap text-[11px] text-ink/75 ${i % 2 ? 'top-[calc(70%+3.75rem)]' : 'bottom-[calc(70%+3.75rem)]'} -translate-x-1/2`}>
            {m.l}
            <div className="text-muted">UTC{m.off >= 0 ? '+' : ''}{m.off}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
