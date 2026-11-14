import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Reveal, ScrollText } from '@/components/motion';
import { Accordion, CtaBand, Eyebrow, SectionHead } from '@/components/ui';
import { TimezoneRibbon } from '@/components/visuals';
import { LayersDiagram, ProcessTrack } from '@/components/about';

export const metadata: Metadata = {
  title: 'About',
  description: 'A multidisciplinary organization built around difficult problems: research, technology, AI and engineering under one accountable team.',
};

const commitments = [
  { t: 'Research comes first', d: 'We understand the reality of the problem before deciding what to build. This ensures our solutions actually work in the real world.' },
  { t: 'Evidence drives decisions', d: 'We present findings based on evidence, not assumptions. If the data is unclear, we will tell you, rather than making guesses.' },
  { t: 'We build what we recommend', d: 'We don’t separate strategy from execution. If we suggest a solution, we take full responsibility for building it.' },
];

const disciplines = [
  { t: 'Software and systems engineering', d: 'Applications, internal platforms, integrations, data infrastructure and the security around them.' },
  { t: 'Artificial intelligence', d: 'Machine learning, language and vision systems, decision support, and taking prototypes into dependable production.' },
  { t: 'Automation', d: 'Process automation across existing tools, with human judgement kept where it genuinely belongs.' },
  { t: 'Product engineering', d: 'Mechanical design, embedded firmware, hardware and software integration, prototyping and validation.' },
  { t: 'Research and development', d: 'Applied technical research, feasibility work and structured experimentation ahead of investment.' },
  { t: 'Commercial and growth systems', d: 'Demand generation, pipeline instrumentation, market entry and the operating structure underneath them.' },
];

const engagement = [
  { q: 'How it starts', a: 'A conversation, then a written scope. We will not quote before we understand the requirement, because a number produced earlier than that is a number for a different project. Where the decision itself is still open, we will say so and point at the shorter piece of work that settles it rather than selling the larger one.' },
  { q: 'What we need from you', a: 'Less time than you expect, and it is specific: access to the systems and the people who know why they work the way they do, and someone empowered to decide when a question needs answering. Engagements slow down for want of a decision far more often than for want of engineering.' },
  { q: 'How often you hear from us', a: 'A working session at an agreed cadence, and progress demonstrated rather than described. Where something has slipped it gets raised while there is still room to respond, which is the only point at which that information is useful to you.' },
  { q: 'How it ends', a: 'With documentation, runbooks and training that were scoped at the start rather than offered at the end. The measure of the work is that your team can change what was built after we leave. A partner who has become structurally necessary has failed at the job.' },
];

const leaders = [
  { n: 'Dhiraj T H', r: 'Founder and Strategy', d: 'Sets the organization’s research direction and technical positioning, and holds responsibility for the standard every engagement is delivered against.', i: 'DT', img: '/dhiraj-th-founder.jpg' },
  { n: 'Yatharth Chauhan', r: 'Chief Technology Officer', d: 'Leads technology architecture and engineering standards, and owns technical delivery across the software, AI and automation work.', i: 'YC', img: '/yatharth-chauhan-cto.jpg' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A multidisciplinary organization built around difficult problems"
        italic={['difficult', 'problems']}
        lead="Talavishiraaj Groups brings research, technology, AI and engineering together to solve complex problems and build practical systems. We operate across software, automation, product development and business strategy, and our distributed teams mean we bring the exact expertise your problem needs, regardless of geography."
      />

      <section className="border-y border-line bg-white py-24 md:py-32">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-h2 font-medium">Problems do not respect professional boundaries</h2>
            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/75">
              <p>A coordination issue often hides a data problem. A data problem often hides an integration problem. Solving just one part usually just moves the friction somewhere else.</p>
              <p>Most of the industry separates these pieces. Advisory work ends at a recommendation and stops before the build starts. Development work delivers exactly what was asked for, even when that is not what solves the problem. Neither side is accountable for whether the thing finally works.</p>
              <p className="font-medium text-ink">We do both halves, which is the whole point. We only recommend what we know we can build, because we are the ones who will have to build it.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <LayersDiagram />
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead eyebrow="How we think" title="Three commitments" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {commitments.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-white p-8">
                <div className="absolute -right-4 -top-8 font-serif text-[160px] italic leading-none text-signal/10">{i + 1}</div>
                <h3 className="relative mt-20 text-2xl font-medium tracking-tight">{c.t}</h3>
                <p className="relative mt-4 text-[15px] leading-relaxed text-muted">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-24 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h2 className="text-h2 font-medium">The disciplines we can put on a problem</h2>
              <p className="mt-6 text-[16px] leading-relaxed text-muted">
                Different problems need different combinations. Very few need all of them; the point is being able to bring the right ones together.{' '}
                <Link href="/services" className="text-signal underline-offset-4 hover:underline">See how they are organised</Link>.
              </p>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {disciplines.map((d, i) => (
              <Reveal key={d.t} delay={(i % 2) * 0.08} className="group bg-paper p-8 transition-colors duration-500 hover:bg-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-signal/10 text-xs text-signal transition-colors group-hover:bg-signal group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{d.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{d.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessTrack />

      <section className="wrap py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">How an engagement actually runs</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">The part people usually want to know before committing: what we need from you, how often you hear from us, and how it ends.</p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={engagement} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-24 md:py-32">
        <div className="wrap">
          <SectionHead
            eyebrow="How we are organised"
            title="Distributed teams, assembled around the problem"
            lead="We staff each project with the exact disciplines it requires rather than whoever happens to be in the local office. That lets us bring the most relevant expertise to your problem and support organizations across international markets."
          />
          <div className="mt-24 mb-16">
            <TimezoneRibbon />
          </div>
          <p className="eyebrow text-muted">Priority markets · United States · United Kingdom · United Arab Emirates · Europe · India</p>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead eyebrow="Leadership" title="Core leadership" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {leaders.map((l, i) => (
            <Reveal key={l.n} delay={i * 0.1}>
              <div className="group flex h-full flex-col gap-8 rounded-3xl border border-line bg-white p-8 sm:flex-row">
                <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-paper2">
                                    <Image src={l.img} alt={`Portrait of ${l.n}`} fill sizes="144px" className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
                <div>
                  <div className="eyebrow text-signal">{l.r}</div>
                  <h3 className="mt-3 text-3xl font-medium tracking-tight">{l.n}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{l.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap pb-8">
        <div className="grid gap-10 rounded-3xl border border-line bg-paper2/60 p-8 md:grid-cols-12 md:p-12">
          <div className="md:col-span-5">
            <h2 className="text-h2 font-medium">How engagements are governed</h2>
          </div>
          <div className="md:col-span-7">
            <ScrollText
              className="text-xl leading-relaxed tracking-tight"
              text="Work runs under written contracts, confidentiality obligations and, where the engagement requires it, a data processing agreement. Delivery quality, escalation and recovery are handled through a published governance framework rather than case by case."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                ['risk-mitigation', 'Risk & mitigation framework'],
                ['data-handling', 'Confidentiality & data handling'],
                ['delivery-policy', 'Delivery policy'],
              ].map(([s, l]) => (
                <Link key={s} href={`/${s}`} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm hover:border-signal hover:text-signal">
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to know whether we are the right fit?"
        body="The fastest way to find out is to describe the problem. We will tell you how we would approach it, and whether it is work we should be doing."
        note={<>The clearest example of how we work is the engagement built entirely around deciding before building: <Link href="/products" className="underline underline-offset-4">Prism</Link>.</>}
      />
    </>
  );
}
