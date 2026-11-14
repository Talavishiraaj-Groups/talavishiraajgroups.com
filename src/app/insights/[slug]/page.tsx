import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { insights, insightBySlug } from '@/content';
import { capabilityByName } from '@/content/capabilities';
import { Blocks } from '@/components/Blocks';
import { Crumbs } from '@/components/PageHero';
import { Cover, ReadingProgress, Toc } from '@/components/insights';
import { Reveal, SplitWords } from '@/components/motion';
import { CtaBand, Eyebrow } from '@/components/ui';

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const i = insightBySlug((await params).slug);
  return i ? { title: i.title, description: i.summary.slice(0, 160) } : {};
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const a = insightBySlug((await params).slug);
  if (!a) notFound();
  const cap = capabilityByName(a.category);
  const toc = a.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }));
  const more = insights.filter((x) => x.slug !== a.slug && x.category === a.category).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <article>
        <header className="pt-32 md:pt-40">
          <div className="wrap">
            <Crumbs items={[{ href: '/insights', label: 'Insights' }, { label: a.category }]} />
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
              <h1 className="text-h1 font-medium lg:col-span-9">
                <SplitWords text={a.title} />
              </h1>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted">
              <span>{a.readTime}</span>
              {a.published && <span>Published {a.published}</span>}
              <span>Talavishiraaj Groups</span>
            </div>
          </div>
        </header>

        <div className="wrap mt-12">
          <div className="overflow-hidden rounded-3xl border border-line">
            <div className="h-[220px] md:h-[320px] [&>div]:h-full [&>div]:aspect-auto">
              <Cover insight={a} />
            </div>
          </div>
        </div>

        <div className="wrap py-16 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <Eyebrow className="mb-5">On this page</Eyebrow>
                <Toc items={toc} />
              </div>
            </aside>
            <div className="lg:col-span-7">
              <p className="text-[clamp(1.25rem,1.8vw,1.5rem)] leading-relaxed tracking-tight text-ink">{a.summary}</p>
              {a.inShort.length > 0 && (
                <Reveal className="my-12 rounded-3xl border border-line bg-white p-8">
                  <Eyebrow className="mb-5">In short</Eyebrow>
                  <ol className="space-y-4">
                    {a.inShort.map((s, i) => (
                      <li key={i} className="flex gap-4 text-[16px] leading-relaxed">
                        <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                </Reveal>
              )}
              <div className="prose-tj">
                {a.sections.map((s) => (
                  <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-28">
                    <h2>{s.heading}</h2>
                    <Blocks blocks={s.blocks} />
                  </section>
                ))}
              </div>
              {cap && (
                <div className="mt-16 rounded-3xl border border-line bg-paper2/60 p-8">
                  <Eyebrow className="mb-3">Where this work sits</Eyebrow>
                  <Link href={`/services/${cap.slug}`} className="text-xl font-medium tracking-tight hover:text-signal">
                    {cap.name} →
                  </Link>
                  <p className="mt-2 text-[15px] text-muted">{cap.summary}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-line py-20">
          <div className="wrap">
            <Eyebrow className="mb-8">More on {a.category}</Eyebrow>
            <div className="grid gap-6 md:grid-cols-3">
              {more.map((m) => (
                <Link key={m.slug} href={`/insights/${m.slug}`} className="group rounded-3xl border border-line bg-white p-7 transition-shadow hover:shadow-xl">
                  <div className="eyebrow text-muted">{m.readTime}</div>
                  <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight group-hover:text-signal">{m.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Weighing a decision like this one?" body="Describe the situation and we will tell you how we would approach it." />
    </>
  );
}
