import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { capabilities, capabilityBySlug } from '@/content/capabilities';
import { cases } from '@/content/cases';
import { insightBySlug } from '@/content';
import { Crumbs } from '@/components/PageHero';
import { CapVisual } from '@/components/visuals';
import { Reveal, SplitWords } from '@/components/motion';
import { Accordion, CtaBand, Eyebrow } from '@/components/ui';
import { ApproachSteps } from '@/components/service-detail';

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = capabilityBySlug((await params).slug);
  return c ? { title: c.title, description: c.summary } : {};
}

export default async function CapabilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = capabilityBySlug((await params).slug);
  if (!c) notFound();
  const related = c.related.map((s) => cases.find((k) => k.slug === s)!).filter(Boolean);
  const reading = c.reading.map((s) => insightBySlug(s)!).filter(Boolean);
  const others = capabilities.filter((x) => x.slug !== c.slug);

  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-36">
        <div className="wrap">
          <Crumbs items={[{ href: '/services', label: 'Capabilities' }, { label: c.name }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3 text-sm">
                {c.n} · {c.name}
              </div>
              <h1 className="text-display font-medium">
                <SplitWords text={c.title} />
              </h1>
              <Reveal delay={0.3}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">{c.summary}</p>
              </Reveal>
            </div>
            <Reveal className="lg:col-span-5" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line bg-white">
                                <div className="absolute inset-0" style={{ background: `radial-gradient(70% 70% at 50% 60%, ${c.tint}26, transparent)` }} />
                <CapVisual kind={c.visual} tint={c.tint} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4" />
          <Reveal className="md:col-span-8" delay={0.1}>
            <p className="text-[clamp(1.4rem,2.4vw,2.1rem)] font-medium leading-[1.25] tracking-tight">{c.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper2/70 py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-h2 font-medium">If this sounds familiar, you are in the right place.</h2>
              <p className="mt-6 border-l-2 pl-5 text-[16px] leading-relaxed text-muted" style={{ borderColor: c.tint }}>
                {c.when}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {c.signals.map((s, i) => (
                <Reveal key={s} delay={i * 0.08} className="group relative overflow-hidden rounded-3xl border border-line bg-white p-8">
                  <div className="absolute right-6 top-6 font-serif text-6xl italic leading-none text-ink/[0.07]">“</div>
                  <div className="text-xs text-muted">Signal 0{i + 1}</div>
                  <p className="mt-10 text-xl leading-snug tracking-tight">{s}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" style={{ background: c.tint }} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">The scope, in plain terms</h2>
          </div>
          <ol className="lg:col-span-8">
            {c.whatWeDo.map((w, i) => (
              <Reveal as="li" key={w} delay={i * 0.04} className="group flex items-baseline gap-6 border-t border-line py-5 last:border-b">
                <span className="w-8 text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-xl">{w}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ApproachSteps steps={c.approach} tint={c.tint} outcomes={c.outcomes} />

      {related.length > 0 && (
        <section className="wrap py-20 md:py-28">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-h2 font-medium">Where this capability did the work</h2>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link href={`/case-studies/${r.slug}`} className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="eyebrow text-muted">
                    {r.category} · {r.context}
                  </div>
                  <div className="mt-10">
                    <h3 className="text-2xl font-medium leading-tight tracking-tight group-hover:text-signal">{r.title}</h3>
                    <p className="mt-3 text-[15px] text-muted">Result: {r.result}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="wrap py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">Straight answers</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={c.faqs} />
          </div>
        </div>
      </section>

      {reading.length > 0 && (
        <section className="border-t border-line py-20">
          <div className="wrap">
            <Eyebrow className="mb-8">Further reading</Eyebrow>
            <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10">
              {reading.map((r) => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="group w-[300px] shrink-0 snap-start rounded-3xl bg-white p-7 transition-shadow hover:shadow-xl md:w-[360px]">
                  <div className="eyebrow text-muted">{r.readTime}</div>
                  <h3 className="mt-6 text-lg font-medium leading-snug tracking-tight group-hover:text-signal">{r.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-muted">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line py-16">
        <div className="wrap">
          <Eyebrow className="mb-8">Other capabilities</Eyebrow>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group bg-white p-6 transition-colors hover:bg-paper">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{o.n}</span>
                  <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover:text-signal" />
                </div>
                <div className="mt-8 font-medium tracking-tight">{o.name}</div>
                <div className="mt-1 text-sm text-muted">{o.short}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Discuss a ${c.name.toLowerCase()} requirement`}
        body="Describe what you are working on. We reply with a view on how we would approach it and whether we are the right people for the work."
        note={<>If you are not yet sure this is the work you need, that is a different question and worth answering first: <Link href="/products" className="underline underline-offset-4">Prism</Link> is the engagement for that.</>}
      />
    </>
  );
}
