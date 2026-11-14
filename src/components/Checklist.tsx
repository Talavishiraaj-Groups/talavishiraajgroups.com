'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Check, RotateCcw } from 'lucide-react';
import { checklist } from '@/content';
import { ease } from './motion';

const KEY = 'tj-ai-readiness-v1';

export function Checklist() {
  const all = checklist.flatMap((g) => g.items.map((i) => i.id));
  const [done, setDone] = useState<Record<string, boolean>>({});
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (v) setDone(JSON.parse(v));
    } catch {}
  }, []);
  const toggle = (id: string) =>
    setDone((p) => {
      const n = { ...p, [id]: !p[id] };
      try {
        localStorage.setItem(KEY, JSON.stringify(n));
      } catch {}
      return n;
    });
  const count = all.filter((id) => done[id]).length;
  const pct = count / all.length;
  const r = 52;
  const c = 2 * Math.PI * r;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <aside className="lg:col-span-4">
        <div className="sticky top-28 rounded-3xl border border-line bg-white p-8">
          <div className="relative mx-auto h-40 w-40">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
              <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(10,11,13,0.08)" strokeWidth="10" />
              <motion.circle cx="60" cy="60" r={r} fill="none" stroke="#2B55FF" strokeWidth="10" strokeLinecap="round" strokeDasharray={c} animate={{ strokeDashoffset: c * (1 - pct) }} transition={{ duration: 0.6, ease }} />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="text-4xl font-medium tracking-tighter">{count}</div>
                <div className="text-[10px] text-muted">of {all.length} checks</div>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-3">
            {checklist.map((g) => {
              const n = g.items.filter((i) => done[i.id]).length;
              return (
                <a key={g.title} href={`#${g.title.toLowerCase().replace(/\W+/g, '-')}`} className="block">
                  <div className="mb-1 flex justify-between text-[13px]">
                    <span>{g.title}</span>
                    <span className="text-muted">
                      {n}/{g.items.length}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-ink/[0.06]">
                    <motion.div className="h-full rounded-full bg-signal" animate={{ width: `${(n / g.items.length) * 100}%` }} />
                  </div>
                </a>
              );
            })}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">Progress is saved in this browser only.</p>
          <button onClick={() => { setDone({}); try { localStorage.removeItem(KEY); } catch {} }} className="mt-3 inline-flex items-center gap-2 text-xs text-muted hover:text-ink">
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        </div>
      </aside>
      <div className="space-y-12 lg:col-span-8">
        {checklist.map((g, gi) => (
          <section key={g.title} id={g.title.toLowerCase().replace(/\W+/g, '-')} className="scroll-mt-28">
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-signal">{String(gi + 1).padStart(2, '0')}</span>
              <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{g.title}</h2>
            </div>
            <p className="mt-2 text-[15px] text-muted">{g.lead}</p>
            <ul className="mt-6 space-y-2">
              {g.items.map((it) => (
                <li key={it.id}>
                  <button onClick={() => toggle(it.id)} aria-pressed={!!done[it.id]} className={clsx('flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-colors', done[it.id] ? 'border-signal/40 bg-signal/[0.05]' : 'border-line bg-white hover:border-ink/30')}>
                    <span className={clsx('mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border transition-colors', done[it.id] ? 'border-signal bg-signal text-white' : 'border-ink/20')}>{done[it.id] && <Check className="h-4 w-4" />}</span>
                    <span className="text-xs text-muted">{it.id}</span>
                    <span className={clsx('text-[15px] leading-relaxed', done[it.id] && 'text-ink/60')}>{it.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
