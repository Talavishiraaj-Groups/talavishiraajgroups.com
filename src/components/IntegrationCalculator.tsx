'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ContactForm } from './ContactForm';

/**
 * AI integration cost calculator. Every number comes from the published figures summarised on
 * /insights/what-ai-integration-costs (DesignRush budgets by company size, updated March 2026;
 * integration work at 35 to 50 percent of the build; a three year total of two to three times the
 * build). It is a market range, not our price, and the result leads to a short enquiry form.
 */
const SIZES = {
  small: { label: 'Small business', lo: 5_000, hi: 20_000, time: '1 to 3 months' },
  mid: { label: 'Mid-market company', lo: 100_000, hi: 250_000, time: '4 to 11 months' },
  enterprise: { label: 'Enterprise', lo: 500_000, hi: 1_000_000, time: '12 to 24 months' },
} as const;
type Size = keyof typeof SIZES;

const GOALS = [
  'Automate document handling',
  'Answer customer or staff questions',
  'Route or triage work',
  'Support decisions with predictions',
  'Something else',
];

const usd = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(n % 1_000_000 ? 1 : 0)} million`
    : `$${(n < 10_000 ? Math.round(n / 50) * 50 : Math.round(n / 1000) * 1000).toLocaleString('en-US')}`;

export function IntegrationCalculator() {
  const [size, setSize] = useState<Size>('mid');
  const [goal, setGoal] = useState(GOALS[0]);
  const [systems, setSystems] = useState(2);
  const s = SIZES[size];

  const r = useMemo(
    () => ({
      build: [s.lo, s.hi],
      integration: [s.lo * 0.35, s.hi * 0.5],
      threeYear: [s.lo * 2, s.hi * 3],
    }),
    [s],
  );

  const summary =
    `From the AI integration cost calculator:\n` +
    `- Company size: ${s.label}\n- Goal: ${goal}\n- Systems to connect: ${systems}${systems >= 5 ? '+' : ''}\n` +
    `- Published market range for the build: ${usd(r.build[0])} to ${usd(r.build[1])}, ${s.time}\n` +
    `- Three year total at two to three times the build: ${usd(r.threeYear[0])} to ${usd(r.threeYear[1])}\n\n` +
    `What we want AI to do, and which systems it must work with:\n`;

  const chip = (on: boolean) =>
    `min-h-[40px] rounded-full border px-4 text-[14px] transition-colors ${on ? 'border-signal bg-signal text-white' : 'border-ink/15 bg-white hover:border-ink/40'}`;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <fieldset>
          <legend className="text-[15px] font-medium">1. How big is your company?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {(Object.keys(SIZES) as Size[]).map((k) => (
              <button key={k} type="button" aria-pressed={size === k} onClick={() => setSize(k)} className={chip(size === k)}>
                {SIZES[k].label}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-8">
          <legend className="text-[15px] font-medium">2. What should the AI do first?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {GOALS.map((g) => (
              <button key={g} type="button" aria-pressed={goal === g} onClick={() => setGoal(g)} className={chip(goal === g)}>
                {g}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-8">
          <legend className="text-[15px] font-medium">3. How many existing systems must it connect to?</legend>
          <p className="mt-1 text-[13px] text-muted">For example a CRM, an ERP, a document store, a ticketing tool.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} type="button" aria-pressed={systems === n} onClick={() => setSystems(n)} className={chip(systems === n)}>
                {n === 5 ? '5 or more' : n}
              </button>
            ))}
          </div>
          {systems >= 3 && (
            <p className="mt-3 text-[13px] leading-relaxed text-ink/70">
              With {systems === 5 ? 'five or more' : systems} systems, expect to sit toward the top of the range: integration is the most common reason AI projects run over budget.
            </p>
          )}
        </fieldset>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-line bg-white p-6 md:p-8" aria-live="polite">
          <p className="text-[13px] text-signal">Published market range for {size === 'enterprise' ? 'an enterprise' : `a ${s.label.toLowerCase()}`}</p>
          <p className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-tight tracking-tight">
            {usd(r.build[0])} to {usd(r.build[1])}
          </p>
          <p className="mt-1 text-[15px] text-muted">to build, over {s.time}</p>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">Of which integration work (35 to 50%)</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">
                {usd(r.integration[0])} to {usd(r.integration[1])}
              </dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">Three year total (2 to 3 times the build)</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">
                {usd(r.threeYear[0])} to {usd(r.threeYear[1])}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-[13px] leading-relaxed text-muted">
            These are published market figures, not our price. How they are sourced:{' '}
            <Link href="/insights/what-ai-integration-costs" className="text-ink underline underline-offset-4">
              what AI integration really costs
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-ink p-6 text-paper md:p-8">
          <p className="text-2xl font-medium tracking-tight">Want a number for your project, not the market?</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-paper/70">
            Send us your result and a line about what the AI should do. We reply within one business day with a fixed-scope estimate, or tell you plainly if a cheaper tool would do the job.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#estimate" className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">
              Get my estimate <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/products" className="inline-flex min-h-[48px] items-center rounded-full border border-paper/25 px-6 text-[15px] transition-colors hover:border-paper">
              Or a two week Prism review
            </Link>
          </div>
        </div>
      </div>

      <div id="estimate" className="scroll-mt-28 lg:col-span-12">
        <h2 className="text-2xl font-medium tracking-tight">Get a fixed-scope estimate</h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">Your answers are already in the message. Add what the AI should do and which systems it touches.</p>
        <div className="mt-6">
          <ContactForm service="AI integration cost calculator" defaultMessage={summary} />
        </div>
      </div>
    </div>
  );
}
