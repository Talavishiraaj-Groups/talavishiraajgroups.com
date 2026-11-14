import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ApplyForm } from '@/components/Careers';
import { PageHero } from '@/components/PageHero';
import { GlobalReach } from '@/components/illustrations';
import { Reveal } from '@/components/motion';
import { hiringSteps, roles, terms } from '@/content/careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Commission only lead generation and sales roles. Fully remote, open across India and internationally.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        aside={<div className="fade-up" style={{ animationDelay: '0.5s' }}><GlobalReach /></div>}
        eyebrow="Careers"
        title="Sell work you can stand behind"
        italic={['stand', 'behind']}
        lead="We are building a remote team of lead generation and sales people across India and around the world. Every role is commission only: you earn on what you bring in, with no ceiling, and you choose your own hours."
      />

      <section className="wrap pb-20">
        <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {terms.map(([k, v]) => (
            <div key={k} className="bg-paper p-6 md:p-8">
              <dt className="text-[13px] text-signal">{k}</dt>
              <dd className="mt-3 text-[15px] leading-relaxed">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="wrap pb-24">
        <h2 className="text-h2 font-medium">Open roles</h2>
        <ul className="mt-10 border-t border-line">
          {roles.map((r, i) => (
            <Reveal as="li" key={r.slug} delay={i * 0.04} className="border-b border-line">
              <Link href={`/careers/${r.slug}`} className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6">
                <span className="text-xs text-signal md:col-span-1">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-signal md:col-span-4 md:text-3xl">{r.title}</span>
                <span className="text-[15px] leading-relaxed text-muted md:col-span-5">{r.summary}</span>
                <span className="flex items-center gap-2 text-[14px] md:col-span-2 md:justify-end">
                  Read the role <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-white py-24">
        <div className="wrap">
          <h2 className="text-h2 font-medium">How hiring works</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hiringSteps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 0.06} className="border-t-2 border-ink pt-5">
                <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="apply" className="scroll-mt-24 border-t border-line py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">Apply</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">Not sure which role fits? Pick the closest one and tell us about yourself. We will suggest the right one.</p>
          </div>
          <div className="lg:col-span-8">
            <ApplyForm />
          </div>
        </div>
      </section>
    </>
  );
}
