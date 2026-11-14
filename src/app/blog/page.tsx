import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogCover } from '@/components/BlogCover';
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
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).slice(0, 10);
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
          <Link href={`/blog/${feat.slug}`} className="group grid overflow-hidden rounded-[28px] border border-line bg-white transition-shadow duration-500 hover:shadow-2xl lg:grid-cols-12">
            <div className="overflow-hidden lg:col-span-7">
              <BlogCover post={feat} className="transition-transform duration-700 group-hover:scale-[1.02]" />
            </div>
            <div className="flex flex-col justify-between gap-8 p-8 md:p-10 lg:col-span-5">
              <div>
                <div className="flex flex-wrap gap-x-4 text-[13px] text-muted">
                  <span className="text-signal">Latest</span>
                  <span>{formatDate(feat.date)}</span>
                  <span>{feat.readTime}</span>
                </div>
                <h2 className="mt-5 text-[clamp(1.6rem,2.6vw,2.4rem)] font-medium leading-[1.1] tracking-tight transition-colors group-hover:text-signal">{feat.title}</h2>
                <p className="mt-5 text-[16px] leading-relaxed text-ink/70">{feat.description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-[15px] font-medium">
                Read it <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        )}

        {tags.length > 1 && (
          <div className="mt-12 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-[13px] text-muted">{t}</span>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i % 3, 2) * 0.06}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl border border-line">
                    <BlogCover post={p} className="transition-transform duration-700 group-hover:scale-[1.03]" />
                  </div>
                  <div className="mt-5 flex gap-4 text-[13px] text-muted">
                    <span>{formatDate(p.date)}</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-signal">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
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
