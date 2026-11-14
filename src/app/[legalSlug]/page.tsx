import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import clsx from 'clsx';
import { legal, legalNav } from '@/content';
import { Blocks } from '@/components/Blocks';
import { Eyebrow } from '@/components/ui';

export const dynamicParams = false;

export function generateStaticParams() {
  return legalNav.map((l) => ({ legalSlug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ legalSlug: string }> }): Promise<Metadata> {
  const d = legal[(await params).legalSlug];
  return d ? { title: d.title } : {};
}

export default async function LegalPage({ params }: { params: Promise<{ legalSlug: string }> }) {
  const { legalSlug: slug } = await params;
  const d = legal[slug];
  if (!d) notFound();
  const updated = d.blocks.find((b) => b.t === 'p' && b.x.startsWith('Last Updated'));
  const blocks = d.blocks.filter((b) => b !== updated);
  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <Eyebrow className="mb-5">Legal & governance</Eyebrow>
            <nav className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {legalNav.map((l) => (
                <Link key={l.slug} href={`/${l.slug}`} className={clsx('rounded-lg px-3 py-2 text-[14px] transition-colors', l.slug === slug ? 'bg-white text-ink ring-1 ring-line' : 'text-muted hover:text-ink')}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <article className="lg:col-span-8">
          <h1 className="text-h1 font-medium">{d.title}</h1>
          {updated && 'x' in updated && <div className="mt-4 text-xs text-muted">{updated.x}</div>}
          <div className="prose-tj mt-10 rounded-3xl border border-line bg-white p-6 md:p-12 [&>h2:first-child]:mt-0">
            <Blocks blocks={blocks} />
          </div>
        </article>
      </div>
    </section>
  );
}
