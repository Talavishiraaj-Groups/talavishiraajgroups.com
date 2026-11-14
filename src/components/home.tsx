'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { capabilities } from '@/content/capabilities';
import { cases } from '@/content/cases';
import { Convergence, CapVisual, PrismVisual } from './visuals';
import { Marquee, Reveal, ScrollText, SplitWords, Stagger, StaggerItem, ease } from './motion';
import { Button, Eyebrow, SectionHead } from './ui';

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-paper">
            <div className="absolute right-[-10%] top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full opacity-[0.14] blur-3xl" style={{ background: 'radial-gradient(circle, #2B55FF 0%, transparent 60%)' }} />
      <div className="wrap relative grid min-h-[100svh] items-center gap-10 pb-28 pt-32 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="text-mega font-medium">
            <SplitWords text="Some problems need more than one kind of engineer." italic={['more', 'than', 'one']} delay={0.15} />
          </h1>
          <p style={{ animationDelay: '0.6s' }} className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
            When the answer spans software, data, AI, hardware and the business around them, work usually stalls in the gaps between suppliers. We combine research, engineering and implementation in one team, and stay accountable from the first analysis through to the system running in production.
          </p>
          <div style={{ animationDelay: '0.8s' }} className="fade-up mt-10 flex flex-wrap gap-3">
            <Button href="/contact" variant="dark">Describe your situation</Button>
            <Button href="/services" variant="ghost">See what we build</Button>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[560px] lg:col-span-5">
          <Convergence />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 border-t border-line bg-paper/80 py-5 backdrop-blur">
        <Marquee>
          {['Software engineering', 'Data infrastructure', 'Applied AI', 'Embedded & hardware', 'Operating design', 'Growth systems', 'Delivery & handover', 'Applied research'].map((t) => (
            <span key={t} className="flex items-center gap-8 px-8 text-[12px] text-ink/50">
              {t} <span className="text-ink/20">/</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export function HowWeWork() {
  const items = [
    { k: 'Before', t: 'You get a view of the technical and commercial reality before anyone commits to a build.' },
    { k: 'During', t: 'You get engineering depth across software, data, AI and hardware from the same team.' },
    { k: 'Through', t: 'You get one accountable partner from the first analysis through to the system running.' },
  ];
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <h2 className="text-2xl font-medium tracking-tight">How we work</h2>
        </Reveal>
        <div className="grid gap-10 md:col-span-9 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.k} delay={i * 0.1} className="border-t border-ink pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl italic">{it.k}</span>
                <span className="text-xs text-muted">0{i + 1}</span>
              </div>
              <p className="mt-6 text-xl leading-snug tracking-tight">{it.t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const problems = [
  { t: 'Software that needs to be designed and built', d: 'Internal platforms, customer facing applications, integrations between systems that do not currently talk to each other, and the data layer underneath all of it.', cap: 0 },
  { t: 'AI that has to work in production', d: 'Moving from an interesting prototype to something a team can depend on, or working out where machine learning, language models and automation genuinely pay.', cap: 1 },
  { t: 'A product or technical concept that needs proving', d: 'Engineering, prototyping and validation for hardware, embedded systems and software products, before anyone commits to building at scale.', cap: 2 },
  { t: 'An organization that has outgrown how it runs', d: 'Work routing through too few people, systems that fragment information, and no shared view of where effort is actually going.', cap: 3 },
  { t: 'Revenue that works but does not repeat', d: 'Building the systems behind demand generation, qualification, pipeline reporting and entry into a new market.', cap: 4 },
  { t: 'A plan that is right and is not moving', d: 'Execution capacity, coordination across workstreams and vendors, and one point of accountability through to the result.', cap: 5 },
];

export function ProblemPicker() {
  const [active, setActive] = useState(0);
  const p = problems[active];
  const c = capabilities[p.cap];
  return (
    <section className="border-y border-line bg-paper2/60 py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          eyebrow="What we work on"
          title={<>Does one of these <span className="font-serif italic font-normal">sound like you?</span></>}
          lead="Some are squarely technical. Others are commercial with a technical answer underneath. Each one leads somewhere specific."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <ul className="lg:col-span-6">
            {problems.map((pr, i) => (
              <li key={pr.t}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={clsx('group flex w-full items-center gap-6 border-t border-line py-6 text-left transition-colors', i === problems.length - 1 && 'border-b')}
                >
                  <span className={clsx('text-xs transition-colors', active === i ? 'text-signal' : 'text-muted')}>0{i + 1}</span>
                  <span className={clsx('flex-1 text-xl tracking-tight transition-all duration-500 md:text-2xl', active === i ? 'translate-x-2 text-ink' : 'text-ink/45')}>{pr.t}</span>
                  <ArrowUpRight className={clsx('h-5 w-5 transition-all duration-500', active === i ? 'text-signal opacity-100' : 'opacity-0')} />
                </button>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-6">
            <div className="sticky top-28 overflow-hidden rounded-3xl border border-line bg-white">
              <AnimatePresence mode="wait">
                <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                  <div className="relative aspect-[4/3] border-b border-line" style={{ background: `radial-gradient(60% 60% at 50% 55%, ${c.tint}1f, transparent)` }}>
                    <CapVisual kind={c.visual} tint={c.tint} />
                  </div>
                  <div className="p-8">
                    <div className="eyebrow text-muted">{c.name}</div>
                    <p className="mt-4 text-lg leading-relaxed text-ink/80">{p.d}</p>
                    <Link href={`/services/${c.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-ink">
                      Explore {c.name} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <Reveal className="mt-14 max-w-3xl">
          <p className="border-l-2 border-signal pl-6 text-lg leading-relaxed text-ink/75">
            If more than one of those is true at the same time, that is usually the reason the work has stalled. Problems that cross disciplines do not get solved by adding another supplier to the chain.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function PrismTeaser() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[32px] border border-line bg-white">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(50% 70% at 85% 30%, rgba(143,166,255,0.30), transparent), radial-gradient(40% 60% at 95% 85%, rgba(255,176,32,0.16), transparent), radial-gradient(40% 50% at 70% 95%, rgba(47,214,163,0.14), transparent)' }} />
        <div className="relative grid gap-8 p-8 md:p-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-h1 font-medium">
              Before you build it, buy it, or bet on AI. <span className="font-serif italic font-normal text-signal">Know what matters most.</span>
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-muted">
              You are about to spend serious money building something, buying a platform that nearly fits, or betting on AI. Prism tells you which of those is right for your business, and what to do first, before you commit to any of it.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href="/products" variant="ghost">What Prism tells you</Button>
              <span className="text-xs text-muted">Two weeks · Fixed scope</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[5/3]">
              <PrismVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section className="wrap py-20 md:py-28">
      <ScrollText
        className="max-w-6xl text-[clamp(1.6rem,3.4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.03em]"
        text="A research driven organization with deep engineering and implementation capability. We bring software engineering, artificial intelligence, product development, applied research and commercial systems together under one accountable partner."
      />
      <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-12">
        <p className="text-[17px] leading-relaxed text-muted md:col-span-5 md:col-start-8">
          Our teams are distributed across regions and time zones, so the expertise brought to a problem is chosen for its relevance rather than its proximity.
        </p>
      </Reveal>
    </section>
  );
}

export function CapabilityBento() {
  const span = ['md:col-span-7', 'md:col-span-5', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-12'];
  return (
    <section className="border-y border-line bg-paper2/60 py-24 md:py-32">
      <div className="wrap">
        <SectionHead
          eyebrow="Capabilities"
          title={<>Capabilities that operate <span className="font-serif italic font-normal">together,</span> not in sequence</>}
          lead="Engineering, artificial intelligence, product development and commercial systems are applied to the same problem by one team, rather than passed between suppliers who each see one part of it."
        />
        <Stagger className="mt-16 grid gap-4 md:grid-cols-12">
          {capabilities.map((c, i) => (
            <StaggerItem key={c.slug} className={span[i]}>
              <Link href={`/services/${c.slug}`} className={clsx('group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(10,11,13,0.3)]', i === 5 ? 'md:flex-row' : '')}>
                <div className={clsx('relative border-line', i === 5 ? 'md:w-1/2 md:border-r' : 'border-b', i < 2 ? 'aspect-[16/9]' : 'aspect-[4/3]', i === 5 && 'md:aspect-auto md:min-h-[300px]')}>
                  <div className="absolute inset-0 opacity-50 transition-opacity duration-700 group-hover:opacity-100" style={{ background: `radial-gradient(60% 60% at 50% 60%, ${c.tint}22, transparent)` }} />
                  <CapVisual kind={c.visual} tint={c.tint} />
                </div>
                <div className={clsx('flex flex-1 flex-col p-7', i === 5 && 'md:justify-center md:p-12')}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{c.n}</span>
                    <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal" />
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{c.summary}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Audiences() {
  const items = [
    { t: 'Founders and business leaders', d: 'Organizations that have grown past informal working and now need systems, technology and structure they can rely on.' },
    { t: 'Technology and engineering teams', d: 'Teams that need additional engineering capability, an AI capability taken into production, or a second workstream run alongside their own.' },
    { t: 'Product teams', d: 'Groups building software or hardware products that need design, engineering and validation support through to a working result.' },
    { t: 'Research and innovation programmes', d: 'Initiatives that need applied technical research, prototyping and the engineering to turn findings into something testable.' },
    { t: 'Established enterprises', d: 'Organizations modernizing systems and infrastructure where continuity matters as much as change.' },
    { t: 'Strategic partners', d: 'Firms and institutions that want technical capability alongside their own, under a properly governed collaboration.' },
  ];
  return (
    <section className="wrap py-24 md:py-32">
      <SectionHead
        eyebrow="Who we work with"
        title="Built for organizations with serious technical and execution requirements"
        lead="Our approach is shaped by the problem, not by a rigid industry template. What changes are your specific constraints: regulation, downtime tolerance, available data, and how you make decisions."
      />
      <div className="mt-16 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={(i % 3) * 0.08} className="group relative border-b border-r border-line p-8 transition-colors duration-500 hover:bg-white">
            <div className="text-xs text-muted group-hover:text-signal">/{String(i + 1).padStart(2, '0')}</div>
            <h3 className="mt-10 text-xl font-medium tracking-tight">{it.t}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{it.d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WorkRail() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-62%']);
  return (
    <section ref={ref} className="relative h-[260vh] bg-paper2/60">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="wrap mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-h2 max-w-2xl font-medium">Engagements, described in full</h2>
          </div>
          <Link href="/case-studies" className="hidden items-center gap-2 text-[15px] font-medium md:inline-flex">
            <span className="link-u">All case studies</span> <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <motion.div style={{ x }} className="flex gap-5 pl-5 md:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]">
          {cases.map((c, i) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className="group relative flex h-[58vh] min-h-[420px] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-line bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(10,11,13,0.35)] sm:w-[460px]">
                            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-20 blur-2xl transition-opacity duration-700 group-hover:opacity-80" style={{ background: capabilities.find((k) => k.name === c.capabilities[0])?.tint }} />
              <div className="relative flex items-center justify-between">
                <span className="eyebrow text-muted">
                  {c.category} · {c.context}
                </span>
                <span className="text-xs text-muted">0{i + 1}</span>
              </div>
              <div className="relative">
                <div className="text-[64px] font-medium leading-none tracking-tighter">{c.metric.value}</div>
                <div className="eyebrow mt-2 text-muted">{c.metric.label}</div>
                <h3 className="mt-8 text-2xl font-medium leading-tight tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[15px] text-muted">{c.dek}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal">
                  Read the engagement <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
        <div className="wrap mt-8 text-sm text-muted">Published in anonymized form at our clients’ request. Each record sets out the problem, the work carried out, and the result.</div>
      </div>
    </section>
  );
}

const diffs = [
  { t: 'Research sits in front of engineering', d: 'We establish what is true before we decide what to build. It means the work we propose is sometimes not the work we were asked for, and it is why what we build tends to hold.' },
  { t: 'We build what we recommend', d: 'Analysis and delivery are the same relationship. That removes the handoff where most initiatives lose momentum, and it stops us recommending anything we could not deliver ourselves.' },
  { t: 'Several disciplines, one team', d: 'Engineering, artificial intelligence, product, research and commercial capability work together on the same problem instead of being sequenced through separate suppliers.' },
  { t: 'We are vendor neutral', d: 'No reseller relationships shape what we recommend. If the right answer is to keep the systems you already have, that is what we will tell you.' },
  { t: 'The capability ends up yours', d: 'Documentation, training and transition planning are part of the work. The measure of a good engagement is that you can run the result without us.' },
];

export function Differentiators() {
  return (
    <section className="wrap py-24 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-h2 font-medium">
              How we are different <span className="font-serif italic font-normal">in practice</span>
            </h2>
          </div>
        </div>
        <div className="space-y-5 lg:col-span-8">
          {diffs.map((d, i) => (
            <div key={d.t} className="sticky" style={{ top: `${110 + i * 22}px` }}>
              <Reveal>
                <div className={clsx('grid gap-6 rounded-3xl border p-8 shadow-[0_-20px_40px_-30px_rgba(0,0,0,0.25)] md:grid-cols-[120px_1fr] md:p-10', i % 2 ? 'border-line bg-paper2' : 'border-line bg-white')}>
                  <div className="font-serif text-6xl italic leading-none text-signal">0{i + 1}</div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{d.t}</h3>
                    <p className={clsx('mt-4 text-[17px] leading-relaxed', 'text-muted')}>{d.d}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
