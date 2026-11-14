/**
 * Page illustrations. Pure SVG, animated with the cv-* CSS classes in globals.css,
 * so they render on the server, cost no JavaScript and stop for reduced motion.
 */
import type { ReactNode } from 'react';

const S = '#2B55FF';
const S2 = '#8FA6FF';
const E = '#FF5B24';
const M = '#2FD6A3';
const I = '#0A0B0D';
const L = 'rgba(10,11,13,0.14)';
const d = (s: number) => ({ animationDelay: `${s}s` });
const font = 'var(--font-sans), Inter, Arial, sans-serif';

function Frame({ children, label, tone = 'white' }: { children: ReactNode; label: string; tone?: 'white' | 'ink' | 'signal' | 'paper' }) {
  const bg = { white: 'bg-white', ink: 'bg-ink', signal: 'bg-signal', paper: 'bg-paper2' }[tone];
  return (
    <div className={`overflow-hidden rounded-[28px] border border-line ${bg}`}>
      <svg viewBox="0 0 400 320" className="block h-auto w-full" role="img" aria-label={label}>
        {children}
      </svg>
    </div>
  );
}

/* Careers: one team reaching from India to the rest of the world */
export function GlobalReach() {
  const hub = { x: 200, y: 222 };
  const cities = [
    { x: 52, y: 156, n: 'New York' },
    { x: 112, y: 96, n: 'London' },
    { x: 200, y: 70, n: 'Dubai' },
    { x: 288, y: 96, n: 'Singapore' },
    { x: 348, y: 156, n: 'Sydney' },
  ];
  const dots: ReactNode[] = [];
  for (let y = 40; y <= 290; y += 14)
    for (let x = 30; x <= 380; x += 14) {
      const dx = (x - 205) / 180;
      const dy = (y - 165) / 125;
      if (dx * dx + dy * dy <= 1) dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r={1.6} fill={L} />);
    }
  return (
    <Frame label="A remote team reaching from India to cities around the world">
      {dots}
      {cities.map((c, i) => (
        <path key={c.n} d={`M${hub.x},${hub.y} Q${(hub.x + c.x) / 2 + (c.x - hub.x) * 0.2},${(hub.y + c.y) / 2 + 10} ${c.x},${c.y}`} fill="none" stroke={S} strokeWidth={1.6} strokeDasharray="5 7" className="cv-dash" style={d(i * 0.3)} />
      ))}
      {cities.map((c, i) => (
        <g key={c.n}>
          <circle cx={c.x} cy={c.y} r={6} fill="#fff" stroke={I} strokeWidth={1.5} />
          <circle cx={c.x} cy={c.y} r={12} fill="none" stroke={S} className="cv-ping" style={d(i * 0.5)} />
          <text x={c.x} y={c.y - 18} textAnchor="middle" fontSize={13} fontFamily={font} fill={I} opacity={0.7}>{c.n}</text>
        </g>
      ))}
      <circle cx={hub.x} cy={hub.y} r={26} fill={E} opacity={0.18} className="cv-pulse" />
      <circle cx={hub.x} cy={hub.y} r={12} fill={E} />
      <text x={hub.x} y={hub.y + 44} textAnchor="middle" fontSize={15} fontWeight={600} fontFamily={font} fill={I}>India</text>
      <text x={hub.x} y={hub.y + 62} textAnchor="middle" fontSize={11} fontFamily={font} fill={I} opacity={0.55}>Remote, worldwide</text>
    </Frame>
  );
}

/* Career role illustrations */
export function RoleArt({ slug }: { slug: string }) {
  if (slug === 'lead-generation-associate') {
    const rows = [
      { w: 300, n: 'Researched', c: L },
      { w: 220, n: 'Contacted', c: S2 },
      { w: 140, n: 'Replied', c: S },
      { w: 70, n: 'Qualified', c: E },
    ];
    return (
      <Frame label="A funnel narrowing from researched accounts to qualified leads">
        {rows.map((r, i) => (
          <g key={r.n} className="cv-grow" style={{ ...d(0.2 + i * 0.15), transformOrigin: 'center' }}>
            <rect x={200 - r.w / 2} y={50 + i * 58} width={r.w} height={42} rx={21} fill={r.c} />
            <text x={200} y={76 + i * 58} textAnchor="middle" fontSize={13} fontFamily={font} fontWeight={500} fill={i > 1 ? '#fff' : I}>{r.n}</text>
          </g>
        ))}
        {[0, 1, 2].map((k) => <circle key={k} cx={200} cy={300} r={4} fill={E} className="cv-blink" style={d(k * 0.4)} transform={`translate(${(k - 1) * 14},0)`} />)}
      </Frame>
    );
  }
  if (slug === 'business-development-executive') {
    return (
      <Frame label="A discovery conversation turning into written notes">
        <g className="cv-float"><rect x={40} y={50} width={200} height={70} rx={22} fill={L} /><rect x={62} y={74} width={120} height={8} rx={4} fill={I} opacity={0.5} /><rect x={62} y={92} width={80} height={8} rx={4} fill={I} opacity={0.3} /></g>
        <g className="cv-float" style={d(1)}><rect x={150} y={140} width={210} height={70} rx={22} fill={S} /><rect x={172} y={164} width={140} height={8} rx={4} fill="#fff" /><rect x={172} y={182} width={96} height={8} rx={4} fill="#fff" opacity={0.6} /></g>
        <g className="cv-float" style={d(2)}><rect x={40} y={226} width={170} height={56} rx={20} fill={L} /><rect x={62} y={250} width={100} height={8} rx={4} fill={I} opacity={0.5} /></g>
        <circle cx={330} cy={262} r={22} fill={M} /><path d="M320 262 l7 7 l14 -15" fill="none" stroke={I} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
      </Frame>
    );
  }
  if (slug === 'sales-closer') {
    return (
      <Frame label="An opportunity moving through stages to a signed deal">
        {['Proposal', 'Terms', 'Signed'].map((t, i) => (
          <g key={t}>
            <line x1={60 + i * 140} y1={240} x2={60 + i * 140} y2={70} stroke={L} strokeDasharray="3 6" />
            <text x={60 + i * 140} y={268} textAnchor="middle" fontSize={12} fontFamily={font} fill={I} opacity={0.6}>{t}</text>
          </g>
        ))}
        <path d="M40 230 C120 220 150 180 200 150 S300 90 340 80" fill="none" stroke={S} strokeWidth={4} strokeLinecap="round" pathLength={1} className="cv-draw" />
        <circle cx={340} cy={80} r={26} fill={E} className="cv-pulse" style={d(1.5)} />
        <path d="M328 80 l8 8 l16 -18" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      </Frame>
    );
  }
  if (slug === 'appointment-setter') {
    const booked = new Set([3, 8, 10, 15, 17, 22, 26]);
    return (
      <Frame label="A calendar filling with booked meetings">
        <rect x={60} y={40} width={280} height={44} rx={14} fill={I} />
        <text x={80} y={68} fontSize={14} fontWeight={600} fontFamily={font} fill="#fff">This week</text>
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 60 + (i % 7) * 41;
          const y = 100 + Math.floor(i / 7) * 46;
          const on = booked.has(i);
          return <rect key={i} x={x} y={y} width={33} height={36} rx={8} fill={on ? (i % 3 ? S : E) : 'none'} stroke={on ? 'none' : L} className={on ? 'cv-pulse' : undefined} style={on ? d((i % 5) * 0.4) : undefined} />;
        })}
      </Frame>
    );
  }
  // referral-partner
  const kids = [80, 160, 240, 320];
  return (
    <Frame label="One introduction branching into several conversations">
      <circle cx={200} cy={70} r={30} fill={E} />
      <text x={200} y={75} textAnchor="middle" fontSize={12} fontWeight={600} fontFamily={font} fill="#fff">You</text>
      {kids.map((x, i) => (
        <g key={x}>
          <path d={`M200 100 C200 150 ${x} 150 ${x} 200`} fill="none" stroke={S} strokeWidth={2} strokeDasharray="5 7" className="cv-dash" style={d(i * 0.3)} />
          <circle cx={x} cy={214} r={18} fill="#fff" stroke={I} strokeWidth={1.5} />
          {i % 2 === 0 && <><circle cx={x} cy={214} r={8} fill={M} /><text x={x} y={262} textAnchor="middle" fontSize={11} fontFamily={font} fill={I} opacity={0.6}>Signed</text></>}
        </g>
      ))}
    </Frame>
  );
}

/* Resources: a readiness score building up */
export function ReadinessArt() {
  const items = ['Data', 'Evaluation', 'Monitoring', 'Ownership', 'Rollback'];
  return (
    <Frame label="A readiness score filling as checklist items are completed">
      <circle cx={110} cy={160} r={70} fill="none" stroke={L} strokeWidth={14} />
      <circle cx={110} cy={160} r={70} fill="none" stroke={S} strokeWidth={14} strokeLinecap="round" pathLength={1} strokeDasharray="0.72 1" transform="rotate(-90 110 160)" className="cv-ring" />
      <text x={110} y={168} textAnchor="middle" fontSize={30} fontWeight={600} fontFamily={font} fill={I}>72%</text>
      {items.map((t, i) => (
        <g key={t} className="cv-float" style={d(i * 0.25)}>
          <rect x={210} y={70 + i * 40} width={22} height={22} rx={6} fill={i < 3 ? S : 'none'} stroke={i < 3 ? 'none' : L} strokeWidth={2} />
          {i < 3 && <path d={`M215 ${81 + i * 40} l4 4 l8 -9`} fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />}
          <text x={244} y={86 + i * 40} fontSize={14} fontFamily={font} fill={I} opacity={i < 3 ? 0.85 : 0.45}>{t}</text>
        </g>
      ))}
    </Frame>
  );
}

/* In house vs agency: three models weighed on the same axes */
export function CompareArt() {
  const axes = ['Speed', 'Control', 'Cost', 'Depth'];
  const series = [
    { n: 'In house', c: I, v: [2, 5, 2, 3] },
    { n: 'Agency', c: S2, v: [4, 2, 3, 2] },
    { n: 'Integrated', c: E, v: [4, 4, 4, 5] },
  ];
  return (
    <Frame label="In house, agency and integrated team compared on speed, control, cost and depth">
      {axes.map((a, i) => (
        <g key={a}>
          <text x={34} y={78 + i * 56} fontSize={13} fontFamily={font} fill={I} opacity={0.7}>{a}</text>
          <line x1={110} x2={370} y1={74 + i * 56} y2={74 + i * 56} stroke={L} />
          {series.map((s, k) => (
            <rect key={s.n} x={110} y={60 + i * 56 + k * 10} height={7} rx={3.5} width={s.v[i] * 50} fill={s.c} className="cv-grow" style={{ ...d(0.1 * i + 0.15 * k), transformOrigin: 'left', transformBox: 'fill-box' }} />
          ))}
        </g>
      ))}
      {series.map((s, k) => (
        <g key={s.n}>
          <rect x={110 + k * 92} y={284} width={10} height={10} rx={3} fill={s.c} />
          <text x={126 + k * 92} y={293} fontSize={11} fontFamily={font} fill={I} opacity={0.7}>{s.n}</text>
        </g>
      ))}
    </Frame>
  );
}

/* Case studies: before and after, the gap that the work closed */
export function OutcomeArt() {
  return (
    <Frame label="A before and after chart showing effort falling and output rising" tone="ink">
      {[0, 1, 2, 3].map((k) => <line key={k} x1={40} x2={370} y1={70 + k * 60} y2={70 + k * 60} stroke="rgba(255,255,255,0.1)" />)}
      <line x1={200} x2={200} y1={50} y2={260} stroke="rgba(255,255,255,0.3)" strokeDasharray="3 6" />
      <text x={120} y={290} textAnchor="middle" fontSize={12} fontFamily={font} fill="#fff" opacity={0.55}>Before</text>
      <text x={285} y={290} textAnchor="middle" fontSize={12} fontFamily={font} fill="#fff" opacity={0.55}>After</text>
      <path d="M40 200 C110 196 170 190 200 186 S300 110 370 80" fill="none" stroke={M} strokeWidth={4} strokeLinecap="round" pathLength={1} className="cv-draw" />
      <path d="M40 100 C110 104 170 110 200 112 S300 200 370 228" fill="none" stroke={E} strokeWidth={4} strokeLinecap="round" pathLength={1} className="cv-draw" style={d(0.4)} />
      <circle cx={370} cy={80} r={7} fill={M} className="cv-pulse" />
      <circle cx={370} cy={228} r={7} fill={E} className="cv-pulse" style={d(0.6)} />
      <text x={358} y={64} textAnchor="end" fontSize={12} fontFamily={font} fill={M}>Output</text>
      <text x={358} y={254} textAnchor="end" fontSize={12} fontFamily={font} fill={E}>Manual effort</text>
    </Frame>
  );
}

/* Insights: a fan of long-form articles */
export function ArticlesArt() {
  const cards = [
    { r: -12, x: 110, c: S2 },
    { r: -4, x: 150, c: M },
    { r: 6, x: 190, c: E },
    { r: 14, x: 230, c: S },
  ];
  return (
    <Frame label="A fanned stack of long-form articles" tone="paper">
      {cards.map((k, i) => (
        <g key={i} transform={`rotate(${k.r} ${k.x + 60} 280)`}>
          <g className="cv-float" style={d(i * 0.5)}>
            <rect x={k.x} y={60} width={130} height={180} rx={16} fill="#fff" stroke={L} />
            <rect x={k.x} y={60} width={130} height={64} rx={16} fill={k.c} />
            <rect x={k.x} y={108} width={130} height={16} fill={k.c} />
            <rect x={k.x + 16} y={142} width={92} height={8} rx={4} fill={I} opacity={0.75} />
            <rect x={k.x + 16} y={160} width={70} height={8} rx={4} fill={I} opacity={0.35} />
            <rect x={k.x + 16} y={178} width={84} height={8} rx={4} fill={I} opacity={0.2} />
          </g>
        </g>
      ))}
    </Frame>
  );
}

/* Keep in touch: a signal going out, only when there is something worth sending */
export function SignalArt() {
  return (
    <Frame label="A signal radiating outward from a single point" tone="signal">
      {[40, 80, 120, 160].map((r, i) => (
        <circle key={r} cx={200} cy={170} r={r} fill="none" stroke="#fff" strokeOpacity={0.5} strokeWidth={2} className="cv-ping" style={d(i * 0.6)} />
      ))}
      <rect x={160} y={140} width={80} height={60} rx={10} fill="#fff" />
      <path d="M160 146 L200 176 L240 146" fill="none" stroke={S} strokeWidth={3} strokeLinejoin="round" />
    </Frame>
  );
}

/* Book a call: thirty minutes, one slot picked */
export function CalendarArt() {
  return (
    <Frame label="A calendar with one thirty minute slot selected">
      <rect x={50} y={40} width={300} height={240} rx={22} fill="none" stroke={L} />
      <rect x={50} y={40} width={300} height={50} rx={22} fill={I} />
      <rect x={50} y={68} width={300} height={22} fill={I} />
      <text x={74} y={72} fontSize={14} fontWeight={600} fontFamily={font} fill="#fff">Intro call, 30 min</text>
      {['10:00', '10:30', '11:00', '11:30', '12:00'].map((t, i) => (
        <g key={t}>
          <rect x={74} y={106 + i * 34} width={252} height={26} rx={8} fill={i === 2 ? S : 'none'} stroke={i === 2 ? 'none' : L} className={i === 2 ? 'cv-pulse' : undefined} />
          <text x={92} y={124 + i * 34} fontSize={13} fontFamily={font} fill={i === 2 ? '#fff' : I} opacity={i === 2 ? 1 : 0.6}>{t}</text>
        </g>
      ))}
    </Frame>
  );
}

/* Legal pages: a document with an emblem for the policy */
export function PolicyArt({ slug }: { slug: string }) {
  const emblem: Record<string, ReactNode> = {
    'privacy-policy': <><circle cx={286} cy={196} r={30} fill={S} /><path d="M268 196 q18 -18 36 0 q-18 18 -36 0" fill="none" stroke="#fff" strokeWidth={3} /><circle cx={286} cy={196} r={6} fill="#fff" /></>,
    terms: <><circle cx={286} cy={196} r={30} fill={I} /><path d="M270 204 q8 -18 14 -4 t16 -8" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" /></>,
    cookies: <><circle cx={286} cy={196} r={30} fill={E} />{[[276, 186], [294, 190], [282, 206], [298, 206]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r={4} fill="#fff" />)}</>,
    'refund-policy': <><circle cx={286} cy={196} r={30} fill={M} /><path d="M298 186 a14 14 0 1 0 2 14" fill="none" stroke={I} strokeWidth={3} strokeLinecap="round" /><path d="M300 178 v10 h-10" fill="none" stroke={I} strokeWidth={3} strokeLinecap="round" /></>,
    'delivery-policy': <><circle cx={286} cy={196} r={30} fill={S} /><path d="M268 206 h12 l8 -16 h14" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" /><circle cx={304} cy={190} r={4} fill="#fff" /></>,
    'risk-mitigation': <><path d="M286 164 l26 10 v20 c0 18 -12 28 -26 34 c-14 -6 -26 -16 -26 -34 v-20 z" fill={I} /><path d="M276 198 l7 7 l14 -15" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" /></>,
    'data-handling': <>{[0, 1, 2].map((k) => <ellipse key={k} cx={286} cy={214 - k * 16} rx={28} ry={9} fill={k === 2 ? S : S2} stroke="#fff" strokeWidth={2} />)}</>,
    'ip-policy': <><circle cx={286} cy={196} r={30} fill={E} /><text x={286} y={204} textAnchor="middle" fontSize={22} fontWeight={700} fontFamily={font} fill="#fff">IP</text></>,
  };
  return (
    <Frame label="A policy document" tone="paper">
      <g className="cv-float">
        <rect x={110} y={50} width={180} height={230} rx={16} fill="#fff" stroke={L} />
        {[0, 1, 2, 3, 4, 5, 6].map((k) => <rect key={k} x={134} y={82 + k * 22} width={k % 3 === 0 ? 100 : 132} height={8} rx={4} fill={I} opacity={k === 0 ? 0.8 : 0.18} />)}
      </g>
      <g className="cv-pulse" style={d(0.8)}>{emblem[slug] ?? emblem.terms}</g>
    </Frame>
  );
}
