import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/motion';
import { CtaBand } from '@/components/ui';
import { formatDate, getPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Plain reading on what is changing in AI and what it means for teams deciding what to build, buy or automate.',
  alternates: { canonical: '/blog', types: { 'application/rss+xml': '/blog/rss.xml' } },
};

export default function BlogPage() {
  const posts = getPosts();
  const [feat, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="What is changing in AI, and what to do about it"
        italic={['do', 'about', 'it']}
        lead="Short, sourced reading on the AI developments that matter to people running a business: what happened, whether it changes anything for you, and what we would do next."
      />
      <section className="wrap pb-24">
        {!feat && <p className="text-lg text-muted">The first posts are on their way.</p>}
        {feat && (
          <Link href={`/blog/${feat.slug}`} className="group grid gap-8 rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-xl md:grid-cols-12 md:p-12">
            <div className="md:col-span-8">
              <div className="flex flex-wrap gap-x-4 text-[13px] text-muted">
                <span className="text-signal">Latest</span>
                <span>{formatDate(feat.date)}</span>
                <span>{feat.readTime}</span>
              </div>
              <h2 className="mt-5 text-h2 font-medium transition-colors group-hover:text-signal">{feat.title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">{feat.description}</p>
            </div>
            <div className="flex items-end md:col-span-4 md:justify-end">
              <span className="inline-flex items-center gap-2 text-[15px] font-medium">
                Read it <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        )}
        {rest.length > 0 && (
          <ul className="mt-16 border-t border-line">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i, 6) * 0.03} className="border-b border-line">
                <Link href={`/blog/${p.slug}`} className="group grid gap-2 py-7 md:grid-cols-12 md:gap-6">
                  <span className="text-[13px] text-muted md:col-span-2">{formatDate(p.date)}</span>
                  <span className="md:col-span-8">
                    <span className="block text-xl font-medium tracking-tight transition-colors group-hover:text-signal md:text-2xl">{p.title}</span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-muted">{p.description}</span>
                  </span>
                  <span className="text-[13px] text-muted md:col-span-2 md:text-right">{p.readTime}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        )}
      </section>
      <CtaBand title="Working out what AI should do in your business?" body="Describe the situation. We will tell you what we would build, what we would buy and what we would leave alone." />
    </>
  );
}
