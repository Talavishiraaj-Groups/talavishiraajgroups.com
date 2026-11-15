import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { BlogCover } from './BlogCover';
import { formatDate, getPosts } from '@/lib/blog';

/** Newest blog posts with their covers. Server rendered; updates with every new post. */
export function LatestPosts({ title = 'From the blog', count = 3 }: { title?: string; count?: number }) {
  const posts = getPosts().slice(0, count);
  if (!posts.length) return null;
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-h2 font-medium">{title}</h2>
          <Link href="/blog" className="inline-flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-signal">
            All posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className={`mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 ${posts.length > 2 ? 'lg:grid-cols-3' : ''}`}>
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-line">
                  <BlogCover post={p} className="transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="mt-4 text-[13px] text-muted">{formatDate(p.date)}</p>
                <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight transition-colors group-hover:text-signal">{p.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
