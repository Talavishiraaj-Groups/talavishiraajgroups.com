import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { Crumbs } from '@/components/PageHero';
import { ReadingProgress, Toc } from '@/components/insights';
import { SplitWords } from '@/components/motion';
import { CtaBand } from '@/components/ui';
import { formatDate, getPost, getPosts } from '@/lib/blog';

const BASE = 'https://www.talavishiraajgroups.com';

export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    authors: [{ name: p.author }],
    keywords: p.tags,
    openGraph: { type: 'article', title: p.title, description: p.description, publishedTime: p.date, modifiedTime: p.updated || p.date, tags: p.tags, url: `${BASE}/blog/${p.slug}` },
    twitter: { card: 'summary_large_image', title: p.title, description: p.description },
  };
}

const ld = (o: object) => ({ __html: JSON.stringify(o).replace(/</g, '\\u003c') });

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const url = `${BASE}/blog/${p.slug}`;
  const all = getPosts();
  const related = all
    .filter((x) => x.slug !== p.slug)
    .map((x) => ({ x, score: x.tags.filter((t) => p.tags.includes(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ x }) => x);

  const article = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.updated || p.date,
    author: { '@type': 'Organization', name: p.author, url: BASE },
    publisher: { '@type': 'Organization', name: 'Talavishiraaj Groups', logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` } },
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    keywords: p.tags.join(', '),
    wordCount: p.words,
    citation: p.sources.map((s) => s.url),
  };
  const faq = p.faq.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    : null;
  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE}/blog` },
      { '@type': 'ListItem', position: 3, name: p.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(article)} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={ld(faq)} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(crumbs)} />
      <ReadingProgress />
      <article>
        <header className="pt-32 md:pt-40">
          <div className="wrap">
            <Crumbs items={[{ href: '/blog', label: 'Blog' }, { label: p.tags[0] || 'Post' }]} />
            <h1 className="mt-10 max-w-5xl text-h1 font-medium">
              <SplitWords text={p.title} />
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted">
              <span>{p.author}</span>
              <time dateTime={p.date}>{formatDate(p.date)}</time>
              {p.updated && <span>Updated {formatDate(p.updated)}</span>}
              <span>{p.readTime}</span>
            </div>
          </div>
        </header>

        <div className="wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-32">
                <p className="mb-5 text-[13px] text-muted">On this page</p>
                <Toc items={p.toc} />
              </div>
            </aside>
            <div className="min-w-0 lg:col-span-7">
              {p.answer && (
                <div className="mb-12 rounded-3xl border border-line bg-white p-7 md:p-8">
                  <p className="text-[13px] text-signal">The short answer</p>
                  <p className="mt-3 text-[clamp(1.15rem,1.6vw,1.35rem)] leading-relaxed tracking-tight">{p.answer}</p>
                </div>
              )}
              <div className="prose-tj" dangerouslySetInnerHTML={{ __html: p.html }} />

              <div className="my-14 rounded-3xl bg-ink p-8 text-paper md:p-10">
                <p className="text-2xl font-medium tracking-tight">Thinking about this for your own team?</p>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-paper/65">Tell us what you are trying to do. We reply within one business day with how we would approach it, including when the answer is not to build anything.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">
                    Describe your situation <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href="/book" className="inline-flex min-h-[48px] items-center rounded-full border border-paper/25 px-6 text-[15px] transition-colors hover:border-paper">
                    Book a call
                  </Link>
                </div>
              </div>

              {p.faq.length > 0 && (
                <section className="prose-tj" id="questions">
                  <h2>Questions people ask</h2>
                  {p.faq.map((f) => (
                    <div key={f.q} className="border-t border-line py-5">
                      <h3 className="!mt-0">{f.q}</h3>
                      <p className="!mb-0">{f.a}</p>
                    </div>
                  ))}
                </section>
              )}

              {p.sources.length > 0 && (
                <section className="mt-12 border-t border-line pt-8">
                  <p className="text-[13px] text-muted">Sources</p>
                  <ol className="mt-4 space-y-2 text-[14px] leading-relaxed">
                    {p.sources.map((s, i) => (
                      <li key={s.url} className="flex gap-3">
                        <span className="text-muted">{i + 1}.</span>
                        <a href={s.url} target="_blank" rel="noopener nofollow" className="underline decoration-ink/20 underline-offset-4 hover:text-signal">
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {p.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 text-[13px] text-muted">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line py-20">
          <div className="wrap">
            <h2 className="text-2xl font-medium tracking-tight">Keep reading</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((m) => (
                <Link key={m.slug} href={`/blog/${m.slug}`} className="group rounded-3xl border border-line bg-white p-7 transition-shadow hover:shadow-xl">
                  <p className="text-[13px] text-muted">{formatDate(m.date)}</p>
                  <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight group-hover:text-signal">{m.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title="Have an AI decision on the table?" body="Describe the situation and we will tell you how we would approach it." />
    </>
  );
}
