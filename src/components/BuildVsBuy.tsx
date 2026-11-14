'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { ease } from './motion';

type Score = { build?: number; buy?: number; partner?: number; risk?: number };
const Q: { q: string; help: string; opts: { l: string; s: Score }[] }[] = [
  { q: 'Is this thing how you win, or is it plumbing?', help: 'The single most decisive question in any build vs buy call. Build what customers choose you for. Buy the commodity parts that simply have to work.', opts: [
    { l: 'Customers would notice if we did it better than anyone', s: { build: 2 } },
    { l: 'Part of it is ours, the rest is standard', s: { partner: 2 } },
    { l: 'Nobody buys from us because of this', s: { buy: 2 } },
  ] },
  { q: 'How close does the best thing you can buy already get?', help: 'If an off the shelf product covers most of it, building the whole thing to gain the rest is rarely worth it. Weigh the gaps against lock in, and against what it would take to leave later.', opts: [
    { l: 'Nothing on the market really does this', s: { build: 2 } },
    { l: 'Something covers most of it, with gaps', s: { partner: 2 } },
    { l: 'Something covers nearly all of it', s: { buy: 2 } },
  ] },
  { q: 'How many parts of the business does this decision depend on?', help: 'This separates a question for one specialist from a question that needs someone looking across the seams. It is also where integration work hides, the most common source of overrun.', opts: [
    { l: 'Really just one team', s: {} },
    { l: 'Two, and they do not fully agree', s: { risk: 1 } },
    { l: 'Product, money, operations and tech all have a stake', s: { risk: 2 } },
  ] },
  { q: 'When do you need this working?', help: 'Time to market is where build and buy diverge most sharply. Published timelines put a focused in house build at months, and an off the shelf rollout at weeks.', opts: [
    { l: 'There is a deadline and missing it costs us', s: { buy: 1, partner: 1 } },
    { l: 'This quarter would be good, next is survivable', s: {} },
    { l: 'No external clock on it', s: { build: 1 } },
  ] },
  { q: 'If this turns out wrong in a year, how hard is it to undo?', help: 'Reversible decisions should be made quickly. Hard to reverse decisions deserve the homework.', opts: [
    { l: 'Awkward, but we could change course', s: {} },
    { l: 'Expensive and slow to unwind', s: { risk: 1 } },
    { l: 'We would be living with it for years', s: { risk: 2 } },
  ] },
  { q: 'Who maintains it in year two, and do they know that yet?', help: 'Ongoing maintenance runs roughly 15 to 25 percent of the original build cost every year, the largest missing piece in most total cost estimates.', opts: [
    { l: 'A named team, with the time already allowed for', s: { build: 1 } },
    { l: 'The people who build it, on top of everything else', s: { risk: 1, buy: 1 } },
    { l: 'We have not worked that out', s: { risk: 2, buy: 1 } },
  ] },
  { q: 'Who has told you it is a good idea?', help: 'Not a trick question. It matters whether the people encouraging it earn money from the answer.', opts: [
    { l: 'Someone with nothing to gain either way', s: {} },
    { l: 'Our own engineers, who would build it', s: { risk: 1 } },
    { l: 'An agency or vendor who would be paid to do it', s: { risk: 2 } },
  ] },
];

const leanText = {
  build: { t: 'Build', d: 'Your answers describe something close to how you win, with nothing on the market that does it well and a team that can own it. That is the profile where building earns its cost.' },
  buy: { t: 'Buy', d: 'Your answers describe a utility: something that has to work rather than something customers choose you for. Paying to own a problem somebody else has already solved is the most common error in this category.' },
  partner: { t: 'Partner', d: 'Your answers sit in the middle: part of this is genuinely yours and part is standard. Buy a platform with a real interface and build only the part that differentiates you.' },
};

export function BuildVsBuy() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<(number | null)[]>(Q.map(() => null));
  const answered = ans.filter((a) => a !== null).length;
  const done = step >= Q.length;

  const total = ans.reduce<Required<Score>>(
    (acc, a, i) => {
      if (a === null) return acc;
      const s = Q[i].opts[a].s;
      return { build: acc.build + (s.build ?? 0), buy: acc.buy + (s.buy ?? 0), partner: acc.partner + (s.partner ?? 0), risk: acc.risk + (s.risk ?? 0) };
    },
    { build: 0, buy: 0, partner: 0, risk: 0 },
  );
  const lean = (['build', 'partner', 'buy'] as const).reduce((a, b) => (total[b] > total[a] ? b : a));
  const maxL = Math.max(1, total.build, total.buy, total.partner);

  const busy = useRef(false);
  const pick = (q: number, i: number) => {
    if (busy.current) return; // ignore clicks while the next question slides in
    busy.current = true;
    setAns((p) => p.map((v, k) => (k === q ? i : v)));
    setTimeout(() => {
      setStep(q + 1);
      busy.current = false;
    }, 280);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-6 py-4 md:px-10">
        <span className="text-xs text-muted">{done ? 'Where this points' : `Question ${step + 1} of ${Q.length}`}</span>
        <span className="text-xs text-muted">{answered} of 7 answered</span>
      </div>
      <div className="h-1 bg-ink/[0.06]">
        <motion.div className="h-full bg-signal" animate={{ width: `${(answered / Q.length) * 100}%` }} transition={{ duration: 0.5, ease }} />
      </div>
      <div className="min-h-[460px] p-6 md:p-12">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={step} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.45, ease }} className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-serif text-6xl italic text-signal">{step + 1}</div>
                <h3 className="mt-4 text-3xl font-medium leading-tight tracking-tight">{Q[step].q}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{Q[step].help}</p>
              </div>
              <div className="space-y-3 lg:col-span-7">
                {Q[step].opts.map((o, i) => (
                  <button
                    key={o.l}
                    onClick={() => pick(step, i)}
                    className={clsx(
                      'group flex w-full items-center justify-between gap-4 rounded-2xl border p-5 text-left text-[17px] transition-all duration-300',
                      ans[step] === i ? 'border-signal bg-signal/[0.06]' : 'border-line hover:border-ink/40 hover:bg-paper',
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/15 text-xs">{String.fromCharCode(65 + i)}</span>
                      {o.l}
                    </span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
                {step > 0 && (
                  <button onClick={() => setStep((s) => s - 1)} className="mt-4 inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
                    <ArrowLeft className="h-4 w-4" /> Previous question
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }} className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="eyebrow text-muted">Your answers lean towards</div>
                <div className="mt-4 text-[clamp(3.5rem,8vw,6rem)] font-medium leading-none tracking-tighter text-signal">{leanText[lean].t}</div>
                <p className="mt-6 text-[17px] leading-relaxed text-ink/80">{leanText[lean].d}</p>
                <div className={clsx('mt-8 rounded-2xl p-6', total.risk >= 5 ? 'bg-ember/10' : total.risk >= 3 ? 'bg-amber-100/70' : 'bg-mint/10')}>
                  <div className="font-medium">
                    {total.risk >= 5 ? 'High stakes: get an independent read before committing' : total.risk >= 3 ? 'Worth checking the seams before you commit' : 'This looks like a decision you can make quickly'}
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                    {total.risk >= 5
                      ? 'The decision spans several parts of the business, is hard to reverse, and the advice you have may not be neutral. That is the profile where two weeks of homework is cheapest relative to the cost of being wrong.'
                      : total.risk >= 3
                        ? 'Some of your answers point at integration, ownership or incentive questions that are easy to skip. Name them explicitly before a number is agreed.'
                        : 'It is reasonably contained and reversible. Make the call, and revisit it if the answers change.'}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-line p-7">
                  <div className="eyebrow mb-6 text-muted">How the answers split</div>
                  {(['build', 'partner', 'buy'] as const).map((k) => (
                    <div key={k} className="mb-5">
                      <div className="mb-2 flex justify-between text-[15px] capitalize">
                        <span>{k}</span>
                        <span className="text-sm">{total[k]}</span>
                      </div>
                      <div className="h-3 rounded-full bg-ink/[0.06]">
                        <motion.div className={clsx('h-full rounded-full', k === lean ? 'bg-signal' : 'bg-ink/30')} initial={{ width: 0 }} animate={{ width: `${(total[k] / maxL) * 100}%` }} transition={{ duration: 1, ease }} />
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 border-t border-line pt-6">
                    <div className="mb-2 flex justify-between text-[15px]">
                      <span>Stakes and blind spots</span>
                      <span className="text-sm">{total.risk} / 10</span>
                    </div>
                    <div className="h-3 rounded-full bg-ink/[0.06]">
                      <motion.div className="h-full rounded-full bg-ember" initial={{ width: 0 }} animate={{ width: `${(total.risk / 10) * 100}%` }} transition={{ duration: 1, ease }} />
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  What this does not cover: the cost. That is the number you do not have yet, and it is the output of the decision rather than the input. See <Link href="/what-it-costs" className="text-signal">what this work costs</Link>.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => { setAns(Q.map(() => null)); setStep(0); }} className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm hover:border-ink">
                    <RotateCcw className="h-4 w-4" /> Start again
                  </button>
                  <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-sm hover:border-ink">
                    How Prism settles it <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
