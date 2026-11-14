'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight, Check } from 'lucide-react';
import { capabilities, Capability } from '@/content/capabilities';
import { cases } from '@/content/cases';
import { CapVisual } from './visuals';
import { ease } from './motion';

export function ServicesScroller() {
  const [active, setActive] = useState(0);
  return (
    <section className="wrap pb-24">
      <div className="grid gap-10 lg:grid-cols-12">
        <aside className="hidden lg:col-span-4 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-line bg-white">
                            <AnimatePresence mode="wait">
                <motion.div key={active} className="absolute inset-0" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.5, ease }}>
                  <div className="absolute inset-0" style={{ background: `radial-gradient(60% 60% at 50% 55%, ${capabilities[active].tint}24, transparent)` }} />
                  <CapVisual kind={capabilities[active].visual} tint={capabilities[active].tint} />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-5 text-[11px] text-muted">
                {capabilities[active].n} / 06
              </div>
            </div>
            <ol className="mt-6 space-y-1">
              {capabilities.map((c, i) => (
                <li key={c.slug}>
                  <a href={`#${c.slug}`} className={clsx('flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] transition-colors', active === i ? 'bg-white text-ink shadow-sm ring-1 ring-line' : 'text-ink/55 hover:text-ink')}>
                    <span className="text-xs opacity-60">{c.n}</span> {c.name}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>
        <div className="lg:col-span-8">
          {capabilities.map((c, i) => (
            <CapBlock key={c.slug} c={c} onActive={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapBlock({ c, onActive }: { c: Capability; onActive: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);
  const related = c.related.slice(0, 2).map((s) => cases.find((k) => k.slug === s)!).filter(Boolean);
  return (
    <motion.article
      ref={ref}
      id={c.slug}
      className="scroll-mt-28 border-t border-ink py-14 md:py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="font-serif text-7xl italic leading-none" style={{ color: c.tint }}>
          {c.n}
        </div>
        <Link href={`/services/${c.slug}`} className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm hover:border-signal hover:text-signal">
          In detail <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <h2 className="mt-8 text-h1 font-medium">{c.name}</h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">{c.summary}</p>
      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="eyebrow mb-4 text-muted">What we do</div>
          <ul className="space-y-3">
            {c.whatWeDo.map((w) => (
              <li key={w} className="flex gap-3 text-[15px] leading-relaxed">
                <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: c.tint }} /> {w}
              </li>
            ))}
          </ul>
        </div>
        {related.length > 0 && (
          <div className="md:col-span-2">
            <div className="eyebrow mb-4 text-muted">Related work</div>
            <div className="space-y-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group block rounded-2xl bg-white p-5 transition-shadow hover:shadow-lg">
                  <div className="eyebrow text-muted">{r.category}</div>
                  <div className="mt-2 font-medium leading-snug tracking-tight group-hover:text-signal">{r.title}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
