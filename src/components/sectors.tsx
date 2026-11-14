'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import type { Sector } from '@/content';
import { capabilities } from '@/content/capabilities';
import { ease } from './motion';

/** Sector × capability matrix: hover a sector to see which disciplines its work draws on. */
export function SectorMatrix({ sectors }: { sectors: Sector[] }) {
  const [hover, setHover] = useState(0);
  const s = sectors[hover];
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="overflow-x-auto rounded-3xl border border-line bg-white lg:col-span-8">
        <table className="w-full min-w-[640px] text-left">
          <thead>
            <tr className="border-b border-line">
              <th className="p-4 text-[10px] font-normal text-muted">Sector</th>
              {capabilities.map((c) => (
                <th key={c.slug} className="p-2 text-center" title={c.name}>
                  <span className="text-[10px] text-muted">{c.n}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sectors.map((sec, i) => (
              <tr key={sec.slug} onMouseEnter={() => setHover(i)} className={clsx('cursor-pointer border-b border-line/60 transition-colors last:border-0', hover === i && 'bg-signal/[0.05]')}>
                <td className="p-0">
                  <Link href={`/sectors/${sec.slug}`} className="block px-4 py-3 text-[14px] font-medium">
                    {sec.name}
                  </Link>
                </td>
                {capabilities.map((c) => {
                  const on = sec.capabilities.includes(c.name);
                  return (
                    <td key={c.slug} className="p-2 text-center">
                      <motion.span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ background: on ? c.tint : 'rgba(10,11,13,0.08)' }}
                        animate={{ scale: hover === i && on ? 1.4 : 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:col-span-4">
        <div className="sticky top-28 rounded-3xl border border-line bg-white p-8">
          <AnimatePresence mode="wait">
            <motion.div key={s.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }}>
              <div className="eyebrow text-muted">Recurring problem</div>
              <h3 className="mt-4 text-2xl font-medium tracking-tight">{s.name}</h3>
              <p className="mt-4 font-serif text-xl italic leading-snug text-ink/80">“{s.problem}”</p>
              <div className="mt-6 space-y-2">
                {capabilities
                  .filter((c) => s.capabilities.includes(c.name))
                  .map((c) => (
                    <div key={c.slug} className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-full" style={{ background: c.tint }} /> {c.name}
                    </div>
                  ))}
              </div>
              <Link href={`/sectors/${s.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-signal">
                Open sector <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
