'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { ease } from './motion';

const situations = [
  'You are weighing whether to build something yourself or buy a platform that nearly fits.',
  'Everyone is telling you to invest in AI and you cannot tell which part is real.',
  'Your engineers say they can build it. You are not sure that answers the question.',
  'You are about to replace a system that mostly works, and the cost keeps growing.',
  'The commitment is large and hard to walk back once it starts.',
];

export function SelfCheck() {
  const [sel, setSel] = useState<boolean[]>(situations.map(() => false));
  const n = sel.filter(Boolean).length;
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <ul className="space-y-3 lg:col-span-8">
        {situations.map((s, i) => (
          <li key={s}>
            <button
              onClick={() => setSel((p) => p.map((v, k) => (k === i ? !v : v)))}
              aria-pressed={sel[i]}
              className={clsx(
                'flex w-full items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-300 md:p-6',
                sel[i] ? 'border-signal bg-signal/[0.06]' : 'border-line bg-white hover:border-ink/30',
              )}
            >
              <span className={clsx('grid h-7 w-7 shrink-0 place-items-center rounded-lg border transition-colors', sel[i] ? 'border-signal bg-signal text-white' : 'border-ink/20')}>
                {sel[i] && <Check className="h-4 w-4" />}
              </span>
              <span className="text-[17px] leading-snug">{s}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="lg:col-span-4">
        <div className="sticky top-28 rounded-3xl border border-line bg-white p-8">
          <div className="eyebrow text-muted">Your read</div>
          <div className="mt-6 flex items-baseline gap-2">
            <motion.span key={n} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-7xl font-medium tracking-tighter">
              {n}
            </motion.span>
            <span className="text-muted">of 5 true</span>
          </div>
          <div className="mt-6 flex gap-1.5">
            {situations.map((_, i) => (
              <div key={i} className={clsx('h-1.5 flex-1 rounded-full transition-colors duration-500', i < n ? (n >= 2 ? 'bg-signal' : 'bg-ink/40') : 'bg-ink/10')} />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.p key={n >= 2 ? 'y' : 'n'} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease }} className="mt-6 text-[16px] leading-relaxed text-ink/75">
              {n >= 2
                ? 'Two or more are true. The decision is worth two weeks before you commit.'
                : 'Select the statements that describe your position. If two or more are true, the decision is worth two weeks before you commit.'}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function TwoWeekPlan() {
  const rows = [
    { l: 'Kickoff with the people who hold the relevant parts', s: 0, w: 1 },
    { l: 'Homework across product, numbers and setup', s: 1, w: 7 },
    { l: 'Focused conversations', s: 2, w: 6 },
    { l: 'The case, the moves, the numbers', s: 6, w: 4 },
    { l: 'Live session with your leadership', s: 10, w: 1 },
    { l: 'Everything packaged, within 24 to 48 hours', s: 11, w: 2 },
  ];
  const days = 13;
  return (
    <div className="overflow-x-auto rounded-3xl border border-line bg-white p-6 md:p-8">
      <div className="min-w-[640px]">
        <div className="mb-4 grid grid-cols-[220px_1fr] gap-4">
          <div />
          <div className="grid text-[10px] text-muted" style={{ gridTemplateColumns: `repeat(${days}, 1fr)` }}>
            {Array.from({ length: days }).map((_, i) => (
              <span key={i}>D{i + 1}</span>
            ))}
          </div>
        </div>
        {rows.map((r, i) => (
          <div key={r.l} className="grid grid-cols-[220px_1fr] items-center gap-4 border-t border-line py-3">
            <div className="text-[14px] leading-snug">{r.l}</div>
            <div className="relative h-7">
              <motion.div
                className={clsx('absolute inset-y-0 rounded-full', i === 4 ? 'bg-signal' : 'bg-gradient-to-r from-signal/70 to-signal2')}
                style={{ left: `${(r.s / days) * 100}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(r.w / days) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.12, ease }}
              />
            </div>
          </div>
        ))}
        <div className="mt-4 text-right text-[11px] text-muted">Typically 10 to 13 business days</div>
      </div>
    </div>
  );
}
