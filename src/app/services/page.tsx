import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ServicesScroller } from '@/components/services';
import { CtaBand, SectionHead } from '@/components/ui';
import { Reveal } from '@/components/motion';
import { sectors } from '@/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering and AI services',
  description: 'Six core capabilities across research, engineering, AI, product development and commercial systems, kept under one roof.',
};

const diffs = [
  { t: 'We will tell you not to build it', d: 'The usual problem with asking a build firm whether to build something is that they are paid either way to say yes. We assess volume, repeatability and error cost first, and where the work does not justify itself we say so before a proposal exists.' },
  { t: 'We build what we recommend', d: 'The consulting and the engineering are one engagement rather than two suppliers. If an operating change needs a reporting layer or an integration built to work, that is part of what you are buying rather than the next supplier’s problem.' },
  { t: 'The engagement is designed to end', d: 'Documentation, runbooks and training are scoped at the start, not offered at the end. The measure of the work is that your team can change what was built after we leave.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Engineering and AI services: what we build and run"
        italic={['build', 'run']}
        lead="Six core capabilities across research, engineering, AI, product development and commercial systems. Real problems usually require a mix of these. We keep them under one roof because projects often stall when strategy is handed off to a separate delivery team."
      />
      <ServicesScroller />

      <section className="border-y border-line bg-paper2/60 py-24 md:py-32">
        <div className="wrap">
          <SectionHead eyebrow="What is different here" title="Six firms will quote you this list. Three things separate how we take it on" />
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
            {diffs.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.1} className="bg-white p-8 md:p-10">
                <div className="text-xs text-signal">0{i + 1}</div>
                <h3 className="mt-12 text-2xl font-medium tracking-tight">{d.t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{d.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead
          eyebrow="Across sectors"
          title="The problem shapes the approach, not the industry"
          lead="Whether you operate in manufacturing, software, finance or research, the fundamental questions remain the same. What changes are your constraints: regulation, downtime tolerance, available data, and how you make decisions."
        />
        <div className="mt-12 flex flex-wrap gap-2">
          {sectors.map((s) => (
            <Link key={s.slug} href={`/sectors/${s.slug}`} className="rounded-full border border-ink/15 px-4 py-2 text-sm transition-colors hover:border-signal hover:bg-signal hover:text-white">
              {s.name}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Most engagements draw on two or three of these"
        body="The right mix depends on your specific needs. Tell us about your situation, and we will outline a practical approach."
        note={<>All of this assumes you already know which of it you need. If that is still open, <Link href="/products" className="underline underline-offset-4">Prism settles that first</Link>.</>}
      />
    </>
  );
}
