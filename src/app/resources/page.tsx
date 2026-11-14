import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CtaBand } from '@/components/ui';
import { checklist } from '@/content';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Reference material our teams actually work from. Published in full, free to copy and adapt. No email required.',
};

export default function ResourcesPage() {
  const total = checklist.reduce((n, g) => n + g.items.length, 0);
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Reference material our teams actually work from"
        italic={['actually']}
        lead="Published in full, free to copy and adapt, and written to be useful whether or not you ever work with us. No email required."
      />
      <section className="wrap pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <Link href="/resources/ai-production-readiness-checklist" className="group grid overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-xl md:grid-cols-2 lg:col-span-2">
            <div className="relative min-h-[260px] border-b border-line bg-paper p-8 md:border-b-0 md:border-r">
                            <div className="relative grid grid-cols-8 gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <span key={i} className="aspect-square rounded-md border border-line bg-white transition-colors duration-500 group-hover:bg-signal group-hover:border-signal" style={{ transitionDelay: `${i * 15}ms` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between p-8">
              <div className="eyebrow text-muted">Artificial Intelligence & Automation · {total} checks</div>
              <div>
                <h2 className="mt-8 text-3xl font-medium tracking-tight group-hover:text-signal">AI production readiness checklist</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  Use this before an AI system goes in front of users. It covers the work that separates a prototype from something a team can depend on. Nothing is specific to a vendor, a model or a framework.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal">
                  Open the checklist <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
          <div className="grid gap-6">
            {[
              { h: '/build-vs-buy', t: 'Build vs buy framework', d: 'Seven questions, about two minutes.' },
              { h: '/what-it-costs', t: 'What it costs', d: 'Published market figures, every source named.' },
              { h: '/in-house-vs-agency', t: 'In house vs agency', d: 'Four routes across seven criteria.' },
            ].map((r) => (
              <Link key={r.h} href={r.h} className="group flex items-center justify-between rounded-3xl border border-line bg-white p-6 hover:border-signal/40">
                <div>
                  <div className="font-medium tracking-tight group-hover:text-signal">{r.t}</div>
                  <div className="mt-1 text-sm text-muted">{r.d}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink/30 group-hover:text-signal" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Talk to us about it" body="Book a call if you would rather talk it through, or send a few lines and we will reply. Either is fine, and neither commits you to anything." />
    </>
  );
}
