'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import { cases } from '@/content/cases';
import { capabilityByName } from '@/content/capabilities';
import { ease } from './motion';

export function CaseIndex() {
  const cats = ['All', ...Array.from(new Set(cases.map((c) => c.category)))];
  const [cat, setCat] = useState('All');
  const list = cases.filter((c) => cat === 'All' || c.category === cat);
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {cats.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => setCat(c)}
            className={clsx('relative rounded-full px-4 py-2 text-sm transition-colors', cat === c ? 'text-white' : 'border border-ink/15 hover:border-ink/40')}
          >
            {cat === c && <motion.span layoutId="case-tab" className="absolute inset-0 rounded-full bg-ink" transition={{ duration: 0.4, ease }} />}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>
      <motion.ul layout className="mt-10 border-t border-ink">
        <AnimatePresence mode="popLayout">
          {list.map((c, i) => {
            const tint = capabilityByName(c.capabilities[0])?.tint ?? '#2B55FF';
            return (
              <motion.li key={c.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease, delay: i * 0.04 }} className="border-b border-line">
                <Link href={`/case-studies/${c.slug}`} className="group grid items-center gap-6 py-8 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <div className="text-5xl font-medium tracking-tighter transition-colors duration-500 group-hover:text-signal" style={{}}>
                      {c.metric.value}
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="eyebrow text-muted">
                      {c.category} · {c.context}
                    </div>
                    <h2 className="mt-3 text-2xl font-medium leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{c.title}</h2>
                    <p className="mt-2 text-[15px] text-muted">{c.dek}</p>
                  </div>
                  <div className="md:col-span-3">
                    <div className="rounded-2xl bg-white p-5 text-[15px] leading-snug ring-1 ring-line">
                      <span className="eyebrow block text-signal">Result</span>
                      <span className="mt-2 block">{c.result}</span>
                    </div>
                  </div>
                  <div className="hidden justify-end md:col-span-1 md:flex">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:border-signal group-hover:bg-signal group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
