import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { insightBySlug, sectors, sectorBySlug } from '@/content';
import { capabilityByName } from '@/content/capabilities';
import { cases } from '@/content/cases';
import { Crumbs } from '@/components/PageHero';
import { Reveal, SplitWords } from '@/components/motion';
import { Accordion, CtaBand, Eyebrow } from '@/components/ui';
import { CapVisual } from '@/components/visuals';

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = sectorBySlug((await params).slug);
  return s ? { title: s.title, description: s.problem } : {};
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = sectorBySlug((await params).slug);
  if (!s) notFound();
  const caps = s.capabilities.map((n) => capabilityByName(n)!).filter(Boolean);
  const reading = s.reading.map((r) => insightBySlug(r)!).filter(Boolean);
  const related = cases.filter((c) => c.recurs.includes(s.name));
  const lead = caps[0];

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="wrap">
          <Crumbs items={[{ href: '/sectors', label: 'Sectors' }, { label: s.name }]} />
          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-h1 font-medium">
                <SplitWords text={s.title} />
              </h1>
              <Reveal delay={0.3}>
                <p className="mt-8 text-[17px] leading-relaxed text-ink/70">{s.intro}</p>
              </Reveal>
            </div>
            <Reveal delay={0.2} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-8">
                <div className="absolute inset-x-0 top-0 h-1" style={{ background: lead?.tint }} />
                <div className="eyebrow text-muted">The recurring problem</div>
                <p className="mt-6 font-serif text-[clamp(1.5rem,2.4vw,2rem)] italic leading-snug">“{s.problem}”</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap py-20">
        <Eyebrow className="mb-8">Signals you would recognise</Eyebrow>
        <div className="grid gap-4 md:grid-cols-3">
          {s.signals.map((sig, i) => (
            <Reveal key={sig} delay={i * 0.08} className="rounded-3xl border border-line bg-white p-7">
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted">Signal {i + 1}</span>
              </div>
              <p className="mt-8 text-lg leading-snug tracking-tight">{sig}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper2/60 py-20 md:py-24">
        <div className="wrap">
          <h2 className="text-h2 max-w-2xl font-medium">Disciplines, combined around this problem</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {caps.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link href={`/services/${c.slug}`} className="group block overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-xl">
                  <div className="relative aspect-[16/10] border-b border-line" style={{ background: `radial-gradient(60% 60% at 50% 55%, ${c.tint}1f, transparent)` }}>
                    <CapVisual kind={c.visual} tint={c.tint} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium tracking-tight group-hover:text-signal">{c.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-ink/30 group-hover:text-signal" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {(reading.length > 0 || related.length > 0) && (
        <section className="wrap py-20">
          <div className="grid gap-10 md:grid-cols-2">
            {related.length > 0 && (
              <div>
                <Eyebrow className="mb-6">Where the pattern showed up</Eyebrow>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group block rounded-2xl border border-line bg-white p-5 hover:border-signal/40">
                      <div className="eyebrow text-muted">{r.category}</div>
                      <div className="mt-2 font-medium tracking-tight group-hover:text-signal">{r.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {reading.length > 0 && (
              <div>
                <Eyebrow className="mb-6">Worth reading first</Eyebrow>
                <div className="space-y-3">
                  {reading.map((r) => (
                    <Link key={r.slug} href={`/insights/${r.slug}`} className="group block rounded-2xl border border-line bg-white p-5 hover:border-signal/40">
                      <div className="eyebrow text-muted">{r.readTime}</div>
                      <div className="mt-2 font-medium tracking-tight group-hover:text-signal">{r.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="wrap py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">About {s.name.toLowerCase()}</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={s.faqs} />
          </div>
        </div>
      </section>

      <section className="wrap py-12">
        <Eyebrow className="mb-6">Other sectors</Eyebrow>
        <div className="flex flex-wrap gap-2">
          {sectors
            .filter((o) => o.slug !== s.slug)
            .map((o) => (
              <Link key={o.slug} href={`/sectors/${o.slug}`} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm hover:border-signal hover:text-signal">
                {o.name}
              </Link>
            ))}
        </div>
      </section>

      <CtaBand
        title={`Working on something in ${s.name.toLowerCase()}?`}
        body="Describe the situation and we will tell you what the work would involve, what it would cost, and whether it is worth doing at all."
        note={<>For what work of this kind costs before anyone quotes you, see <Link href="/what-it-costs" className="underline underline-offset-4">the published market figures</Link>.</>}
      />
    </>
  );
}
