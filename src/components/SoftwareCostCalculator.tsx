'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ContactForm } from './ContactForm';

/**
 * Custom software development cost calculator. Build ranges and timelines by complexity come from
 * Keyhole Software's 2026 benchmarks; the compliance uplift (20 to 60 percent) from Tekrevol's 2026
 * guide; yearly maintenance (15 to 25 percent of the build) from the sources named on /what-it-costs.
 * Market figures, not our price. The result prefills an enquiry.
 */
const TIERS = {
  simple: { label: 'Simple or MVP', lo: 40_000, hi: 120_000, time: '2 to 4 months', d: 'Basic features, one platform, few integrations' },
  medium: { label: 'Medium', lo: 120_000, hi: 300_000, time: '4 to 8 months', d: 'Web and mobile, custom workflows, third-party integrations' },
  complex: { label: 'Complex', lo: 300_000, hi: 1_000_000, time: '8 to 18 months or more', d: 'Enterprise scale, real-time data, advanced security' },
} as const;
type Tier = keyof typeof TIERS;

const KINDS = ['Internal tool or platform', 'Customer-facing web app', 'Mobile app', 'Integration between systems', 'Something else'];

const usd = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(n % 1_000_000 ? 1 : 0)} million` : `$${(Math.round(n / 1000) * 1000).toLocaleString('en-US')}`;

export function SoftwareCostCalculator() {
  const [tier, setTier] = useState<Tier>('medium');
  const [kind, setKind] = useState(KINDS[0]);
  const [regulated, setRegulated] = useState(false);
  const t = TIERS[tier];

  const r = useMemo(() => {
    const lo = regulated ? t.lo * 1.2 : t.lo;
    const hi = regulated ? t.hi * 1.6 : t.hi;
    return { lo, hi, yearLo: lo * 0.15, yearHi: hi * 0.25, threeLo: lo + 3 * lo * 0.15, threeHi: hi + 3 * hi * 0.25 };
  }, [t, regulated]);

  const summary =
    `From the software development cost calculator:\n` +
    `- What we want to build: ${kind}\n- Complexity: ${t.label} (${t.d.toLowerCase()})\n- Regulated data (health, payments, finance): ${regulated ? 'yes' : 'no'}\n` +
    `- Published market range for the build: ${usd(r.lo)} to ${usd(r.hi)}, ${t.time}\n` +
    `- Three year total with maintenance: ${usd(r.threeLo)} to ${usd(r.threeHi)}\n\n` +
    `What it needs to do, and the systems it must work with:\n`;

  const chip = (on: boolean) =>
    `min-h-[40px] rounded-full border px-4 text-[14px] transition-colors ${on ? 'border-signal bg-signal text-white' : 'border-ink/15 bg-white hover:border-ink/40'}`;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <fieldset>
          <legend className="text-[15px] font-medium">1. What are you building?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {KINDS.map((k) => (
              <button key={k} type="button" aria-pressed={kind === k} onClick={() => setKind(k)} className={chip(kind === k)}>
                {k}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-8">
          <legend className="text-[15px] font-medium">2. How complex is it?</legend>
          <div className="mt-3 grid gap-2">
            {(Object.keys(TIERS) as Tier[]).map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={tier === k}
                onClick={() => setTier(k)}
                className={`rounded-2xl border p-4 text-left transition-colors ${tier === k ? 'border-signal bg-signal/5' : 'border-ink/15 bg-white hover:border-ink/40'}`}
              >
                <span className="block text-[15px] font-medium">{TIERS[k].label}</span>
                <span className="mt-0.5 block text-[13px] text-muted">{TIERS[k].d}</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-8">
          <legend className="text-[15px] font-medium">3. Does it handle regulated data?</legend>
          <p className="mt-1 text-[13px] text-muted">Health records, card payments or financial data (HIPAA, PCI DSS, SOC 2).</p>
          <div className="mt-3 flex gap-2">
            <button type="button" aria-pressed={!regulated} onClick={() => setRegulated(false)} className={chip(!regulated)}>
              No
            </button>
            <button type="button" aria-pressed={regulated} onClick={() => setRegulated(true)} className={chip(regulated)}>
              Yes
            </button>
          </div>
        </fieldset>
      </div>

      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-line bg-white p-6 md:p-8" aria-live="polite">
          <p className="text-[13px] text-signal">Published market range to build</p>
          <p className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-tight tracking-tight">
            {usd(r.lo)} to {usd(r.hi)}
            {tier === 'complex' ? '+' : ''}
          </p>
          <p className="mt-1 text-[15px] text-muted">
            over {t.time}
            {regulated ? ', including 20 to 60% for compliance work' : ''}
          </p>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">Maintenance every year (15 to 25%)</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">
                {usd(r.yearLo)} to {usd(r.yearHi)}
              </dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">Three year total</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">
                {usd(r.threeLo)} to {usd(r.threeHi)}
              </dd>
            </div>
          </dl>
          <p className="mt-5 text-[13px] leading-relaxed text-muted">
            Published market figures, not our price: build ranges from{' '}
            <a href="https://keyholesoftware.com/cost-custom-software-development/" target="_blank" rel="noopener nofollow" className="text-ink underline underline-offset-4">
              Keyhole Software (2026)
            </a>
            , the compliance range from{' '}
            <a href="https://www.tekrevol.com/blogs/custom-software-development-cost/" target="_blank" rel="noopener nofollow" className="text-ink underline underline-offset-4">
              Tekrevol (2026)
            </a>
            , maintenance from the sources on{' '}
            <Link href="/what-it-costs" className="text-ink underline underline-offset-4">
              what it costs
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-ink p-6 text-paper md:p-8">
          <p className="text-2xl font-medium tracking-tight">Want a number for your project, not the market?</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-paper/70">
            Send your result with a few lines on what it must do. We reply within one business day with a fixed-scope estimate, or tell you if buying an existing product would serve you better.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#estimate" className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">
              Get my estimate <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link href="/build-vs-buy" className="inline-flex min-h-[48px] items-center rounded-full border border-paper/25 px-6 text-[15px] transition-colors hover:border-paper">
              Build or buy? Check first
            </Link>
          </div>
        </div>
      </div>

      <div id="estimate" className="scroll-mt-28 lg:col-span-12">
        <h2 className="text-2xl font-medium tracking-tight">Get a fixed-scope estimate</h2>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">Your answers are already in the message. Add what the software must do and who will use it.</p>
        <div className="mt-6">
          <ContactForm service="Software development cost calculator" defaultMessage={summary} />
        </div>
      </div>
    </div>
  );
}
