import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cases, caseBySlug } from '@/content/cases';
import { capabilityByName } from '@/content/capabilities';
import { sectorByName } from '@/content';
import { Crumbs } from '@/components/PageHero';
import { Reveal, SplitWords } from '@/components/motion';
import { CtaBand, Eyebrow } from '@/components/ui';

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = caseBySlug((await params).slug);
  return c ? { title: c.title, description: c.dek } : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = caseBySlug((await params).slug);
  if (!c) notFound();
  const idx = cases.findIndex((k) => k.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];
  const chapters = [
    { k: 'Context', v: c.sections.context },
    { k: 'The problem', v: c.sections.problem },
    { k: 'What we designed', v: c.sections.designed },
    { k: 'How it was implemented', v: c.sections.implemented },
    { k: 'Result', v: c.sections.outcome },
  ];
  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="wrap">
          <Crumbs items={[{ href: '/case-studies', label: 'Case studies' }, { label: c.category }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <h1 className="text-display font-medium lg:col-span-9">
              <SplitWords text={c.title} />
            </h1>
          </div>
          <Reveal delay={0.3} className="mt-12 grid gap-4 md:grid-cols-12">
            <div className="rounded-3xl bg-signal p-8 text-white md:col-span-4">
              <div className="text-7xl font-medium tracking-tighter">{c.metric.value}</div>
              <div className="eyebrow mt-3 text-white/75">{c.metric.label}</div>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-line bg-white p-8 md:col-span-8">
              <p className="text-xl leading-snug tracking-tight md:text-2xl">{c.dek}</p>
              <p className="mt-6 text-[15px] text-muted">
                <span className="font-medium text-ink">Result:</span> {c.result}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <Reveal className="rounded-3xl border border-line bg-paper2/60 p-8">
            <Eyebrow className="mb-5">Before</Eyebrow>
            <ul className="space-y-3">
              {c.before.map((b) => (
                <li key={b} className="text-lg tracking-tight text-ink/60 line-through decoration-ember/60 decoration-2">
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink text-white">
            <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
          </div>
          <Reveal delay={0.15} className="rounded-3xl border border-signal/30 bg-white p-8 shadow-[0_30px_60px_-40px_rgba(43,85,255,0.5)]">
            <Eyebrow className="mb-5">After</Eyebrow>
            <ul className="space-y-3">
              {c.after.map((b) => (
                <li key={b} className="flex items-center gap-3 text-lg tracking-tight">
                  <span className="text-signal">→</span> {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-32">
              <div>
                <Eyebrow className="mb-4">Engagement</Eyebrow>
                <dl className="divide-y divide-line border-y border-line text-[15px]">
                  <div className="flex justify-between py-3"><dt className="text-muted">Category</dt><dd>{c.category}</dd></div>
                  <div className="flex justify-between py-3"><dt className="text-muted">Context</dt><dd>{c.context}</dd></div>
                  <div className="flex justify-between py-3"><dt className="text-muted">Published</dt><dd>Anonymized</dd></div>
                </dl>
              </div>
              <div>
                <Eyebrow className="mb-4">Capabilities involved</Eyebrow>
                <div className="space-y-2">
                  {c.capabilities.map((n) => {
                    const cap = capabilityByName(n);
                    return (
                      <Link key={n} href={`/services/${cap?.slug}`} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-[15px] hover:border-signal hover:text-signal">
                        <span>{n}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8">
            {chapters.map((ch, i) => (
              <Reveal key={ch.k} className="grid gap-4 border-t border-line py-10 md:grid-cols-[180px_1fr]">
                <div>
                  <div className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</div>
                  <h2 className="mt-2 text-lg font-medium tracking-tight">{ch.k}</h2>
                </div>
                <p className="text-[19px] leading-relaxed text-ink/80">{ch.v}</p>
              </Reveal>
            ))}
            <Reveal className="mt-6 rounded-3xl border-l-4 border-signal bg-white p-8 md:p-10">
              <Eyebrow className="mb-4">Why the approach mattered</Eyebrow>
              <p className="font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] italic leading-snug">{c.sections.why}</p>
            </Reveal>
            <div className="mt-12">
              <Eyebrow className="mb-4">Where this pattern recurs</Eyebrow>
              <p className="mb-4 text-sm text-muted">The same problem turns up in these sectors, in different vocabulary. This is where we see it, not a list of who the client was.</p>
              <div className="flex flex-wrap gap-2">
                {c.recurs.map((r) => {
                  const s = sectorByName(r);
                  return (
                    <Link key={r} href={s ? `/sectors/${s.slug}` : '/sectors'} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm hover:border-signal hover:text-signal">
                      {r}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap pb-8">
        <Link href={`/case-studies/${next.slug}`} className="group flex flex-col justify-between gap-6 rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-xl md:flex-row md:items-center md:p-12">
          <div>
            <div className="text-h2 font-medium transition-colors group-hover:text-signal">{next.title}</div>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors group-hover:bg-signal">
            <ArrowUpRight className="h-6 w-6" />
          </span>
        </Link>
      </section>

      <CtaBand
        title="Does this resemble your situation?"
        body="We can set out how we would approach it and what the work would involve. Book a call or send a few lines, whichever you prefer."
        note={<>Every engagement here began with someone deciding it was worth doing. If you are at that point, see what <Link href="/products" className="underline underline-offset-4">Prism</Link> does before work like this starts.</>}
      />
    </>
  );
}
