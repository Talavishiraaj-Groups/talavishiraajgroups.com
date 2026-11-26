'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

/**
 * ROI and payback calculator for a technology or automation project. Pure arithmetic on the
 * visitor's own numbers: nothing here is a market figure. A business tool for founders and
 * operators; once AdSense is approved, ad slots may be added on this page only (see the plan).
 */
const money = (n: number) => `${n < 0 ? '-' : ''}$${Math.round(Math.abs(n)).toLocaleString('en-US')}`;

function Field({ label, hint, value, onChange, prefix }: { label: string; hint?: string; value: number; onChange: (n: number) => void; prefix?: string }) {
  return (
    <label className="block">
      <span className="text-[15px] font-medium">{label}</span>
      {hint && <span className="mt-0.5 block text-[13px] text-muted">{hint}</span>}
      <span className="mt-2 flex items-center rounded-xl border border-line bg-white px-4 focus-within:border-signal">
        {prefix && <span className="mr-1 text-muted">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className="min-h-[48px] w-full bg-transparent text-[16px] outline-none"
        />
      </span>
    </label>
  );
}

export function RoiCalculator() {
  const [cost, setCost] = useState(60000);
  const [hours, setHours] = useState(120);
  const [rate, setRate] = useState(45);
  const [extra, setExtra] = useState(0);
  const [running, setRunning] = useState(1000);

  const r = useMemo(() => {
    const benefit = hours * rate + extra;
    const net = benefit - running;
    const payback = net > 0 ? cost / net : Infinity;
    const roi = (years: number) => (cost > 0 ? ((net * 12 * years - cost) / cost) * 100 : 0);
    return { benefit, net, payback, roi1: roi(1), roi3: roi(3), gain3: net * 36 - cost };
  }, [cost, hours, rate, extra, running]);

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="grid gap-6 lg:col-span-5">
        <Field label="What the project costs to build" hint="The one-off quote or budget." prefix="$" value={cost} onChange={setCost} />
        <Field label="Hours of work it saves each month" hint="Across everyone affected." value={hours} onChange={setHours} />
        <Field label="Fully loaded cost of one hour" hint="Pay plus benefits and overheads." prefix="$" value={rate} onChange={setRate} />
        <Field label="Extra revenue or savings each month" hint="Optional: fewer errors, faster sales, lower fees." prefix="$" value={extra} onChange={setExtra} />
        <Field label="Running cost each month" hint="Hosting, licences, AI usage, support." prefix="$" value={running} onChange={setRunning} />
      </div>
      <div className="lg:col-span-7">
        <div className="rounded-3xl border border-line bg-white p-6 md:p-8" aria-live="polite">
          <p className="text-[13px] text-signal">Payback period</p>
          <p className="mt-2 text-[clamp(1.8rem,3.4vw,2.6rem)] font-medium leading-tight tracking-tight">
            {Number.isFinite(r.payback) ? `${r.payback < 1 ? 'Under 1' : r.payback.toFixed(1)} months` : 'Never, at these numbers'}
          </p>
          <p className="mt-1 text-[15px] text-muted">Net benefit {money(r.net)} a month after running costs</p>
          <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">ROI after 1 year</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">{Math.round(r.roi1)}%</dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">ROI after 3 years</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">{Math.round(r.roi3)}%</dd>
            </div>
            <div className="bg-paper p-5">
              <dt className="text-[13px] text-muted">Net gain over 3 years</dt>
              <dd className="mt-1 text-xl font-medium tracking-tight">{money(r.gain3)}</dd>
            </div>
          </dl>
          <p className="mt-5 text-[13px] leading-relaxed text-muted">
            Simple payback: build cost divided by monthly benefit after running costs. It ignores financing and assumes the benefit starts at launch, so treat it as a first check. Hours saved only become money if the time goes to work that earns or saves something.
          </p>
        </div>
        <div className="mt-8 rounded-3xl bg-ink p-6 text-paper md:p-8">
          <p className="text-2xl font-medium tracking-tight">Not sure the numbers hold up?</p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-paper/70">
            Most business cases fail on the benefit, not the cost. Read{' '}
            <Link href="/blog/how-to-measure-ai-roi" className="underline underline-offset-4">
              how to measure ROI before and after you build
            </Link>
            , or send us the case and we will tell you where it is weakest.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-[48px] items-center rounded-full bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">
              Check my business case
            </Link>
            <Link href="/resources/software-development-cost-calculator" className="inline-flex min-h-[48px] items-center rounded-full border border-paper/25 px-6 text-[15px] transition-colors hover:border-paper">
              Estimate the build cost
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
