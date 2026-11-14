'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { Insight } from '@/content';
import { capabilityByName } from '@/content/capabilities';
import { ease } from './motion';

export function InsightGrid({ items }: { items: Insight[] }) {
  const cats = ['All', ...Array.from(new Set(items.map((i) => i.category)))];
  const [cat, setCat] = useState('All');
  const list = items.filter((i) => cat === 'All' || i.category === cat);
  const [feat, ...rest] = list;
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} className={clsx('rounded-full px-4 py-2 text-sm transition-colors', cat === c ? 'bg-ink text-white' : 'border border-ink/15 hover:border-ink/40')}>
            {c}
          </button>
        ))}
      </div>
      {feat && (
        <motion.div key={feat.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          <Link href={`/insights/${feat.slug}`} className="group mt-10 grid overflow-hidden rounded-3xl border border-line bg-white md:grid-cols-2">
            <Cover insight={feat} large />
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div className="eyebrow text-muted">
                Featured · {feat.category} · {feat.readTime}
              </div>
              <div>
                <h2 className="mt-8 text-h2 font-medium transition-colors group-hover:text-signal">{feat.title}</h2>
                <p className="mt-5 line-clamp-4 text-[16px] leading-relaxed text-muted">{feat.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-signal">
                  Read the full piece <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((i, k) => (
          <motion.div key={i.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: (k % 3) * 0.06, ease }}>
            <Link href={`/insights/${i.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-shadow duration-500 hover:shadow-xl">
              <Cover insight={i} />
              <div className="flex flex-1 flex-col p-7">
                <div className="eyebrow text-muted">{i.readTime}</div>
                <h3 className="mt-4 text-xl font-medium leading-snug tracking-tight group-hover:text-signal">{i.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{i.summary}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Generative cover so every article gets its own image without stock photography. */
export function Cover({ insight, large }: { insight: Insight; large?: boolean }) {
  const tint = capabilityByName(insight.category)?.tint ?? '#2B55FF';
  let h = 0;
  for (const ch of insight.slug) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const rand = (n: number) => {
    h = (h * 1103515245 + 12345) >>> 0;
    return (h % 1000) / 1000 * n;
  };
  const variant = h % 3;
  const bars = Array.from({ length: 14 }).map(() => Math.round(20 + rand(70)));
  return (
    <div className={clsx('relative overflow-hidden border-line bg-paper', large ? 'aspect-[4/3] md:aspect-auto md:min-h-[380px] md:border-r' : 'aspect-[16/9] border-b')}>
            <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-105">
        <defs>
          <radialGradient id={`g-${insight.slug}`} cx="70%" cy="40%" r="60%">
            <stop offset="0" stopColor={tint} stopOpacity="0.35" />
            <stop offset="1" stopColor={tint} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill={`url(#g-${insight.slug})`} />
        {variant === 0 &&
          bars.map((b, i) => <rect key={i} x={30 + i * 25} y={200 - b * 1.8} width={14} height={b * 1.8} rx={3} fill={i === 9 ? tint : 'rgba(10,11,13,0.12)'} />)}
        {variant === 1 && (
          <g fill="none">
            {Array.from({ length: 9 }).map((_, i) => {
              const amp = 18 + (bars[i] % 30);
              const y = 40 + i * 20;
              return (
                <path
                  key={i}
                  d={`M0 ${y} C 100 ${y - amp}, 160 ${y + amp}, 260 ${y} S 360 ${y - amp / 2}, 400 ${y}`}
                  stroke={i === 4 ? tint : 'rgba(10,11,13,0.16)'}
                  strokeWidth={i === 4 ? 2.5 : 1.2}
                />
              );
            })}
          </g>
        )}
        {variant === 2 && (
          <g>
            {[0, 1, 2, 3, 4].map((i) => (
              <circle key={i} cx={260} cy={120} r={30 + i * 26} fill="none" stroke={i === 2 ? tint : 'rgba(10,11,13,0.14)'} strokeWidth={i === 2 ? 2 : 1} />
            ))}
            <path d={`M20 ${200 - bars[0]} ${bars.map((b, i) => `L${20 + i * 28} ${200 - b * 1.5}`).join(' ')}`} fill="none" stroke="#0A0B0D" strokeOpacity={0.6} strokeWidth={1.5} />
          </g>
        )}
      </svg>
      <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] text-ink/70 ring-1 ring-line">{insight.category}</span>
    </div>
  );
}

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-signal" style={{ scaleX: x }} />;
}

export function Toc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);
  return (
    <ol className="space-y-1 border-l border-line">
      {items.map((i) => (
        <li key={i.id}>
          <a href={`#${i.id}`} className={clsx('-ml-px block border-l-2 py-1.5 pl-4 text-[14px] leading-snug transition-colors', active === i.id ? 'border-signal text-ink' : 'border-transparent text-muted hover:text-ink')}>
            {i.label}
          </a>
        </li>
      ))}
    </ol>
  );
}
