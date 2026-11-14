'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from './ui';
import { ease } from './motion';

export function LayersDiagram() {
  const layers = [
    { l: 'Coordination issue', s: 'what people see', c: '#2B55FF' },
    { l: 'Data problem', s: 'underneath it', c: '#7C5CFF' },
    { l: 'Integration problem', s: 'underneath that', c: '#FF5B24' },
  ];
  return (
    <div className="relative flex h-full min-h-[380px] flex-col justify-center gap-3 rounded-3xl border border-line bg-paper p-6 md:p-10">
            {layers.map((l, i) => (
        <motion.div
          key={l.l}
          initial={{ opacity: 0, y: 30, rotateX: 40 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.2, ease }}
          className="relative flex items-center justify-between rounded-2xl border border-line bg-white p-6 shadow-[0_20px_40px_-30px_rgba(10,11,13,0.4)]"
          style={{ marginLeft: i * 28, marginRight: (2 - i) * 28 }}
        >
          <div>
            <div className="eyebrow" style={{ color: l.c }}>
              {l.s}
            </div>
            <div className="mt-2 text-xl font-medium tracking-tight">{l.l}</div>
          </div>
        </motion.div>
      ))}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }} className="relative mt-4 text-center text-[11px] text-muted">
        Solve one layer and the friction moves to the next
      </motion.div>
    </div>
  );
}

const steps = [
  { t: 'Research', d: 'Understand the market, the technology and the operating reality before forming a view.' },
  { t: 'Analysis', d: 'Work out what is really happening and what would make the largest difference.' },
  { t: 'Design', d: 'Design the system, product or architecture that answers it.' },
  { t: 'Engineering', d: 'Build it properly: software, data, AI, automation, hardware.' },
  { t: 'Implementation', d: 'Put it into the business, with rollout, training and handover.' },
  { t: 'Improvement', d: 'Instrument it, watch it under real load, and correct what the load reveals.' },
];

export function ProcessTrack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);
  const w = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section ref={ref} className="relative h-[240vh] border-y border-line bg-paper2/60">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="wrap">
          <h2 className="text-h2 max-w-2xl font-medium">Research through to a working result</h2>
          <p className="mt-4 max-w-xl text-[16px] text-muted">Not a methodology we sell. It is the shape most of our engagements take, and most of them join partway along it.</p>
          <div className="relative mt-10 h-[2px] bg-ink/10">
            <motion.div className="absolute inset-y-0 left-0 bg-signal" style={{ width: w }} />
          </div>
        </div>
        <motion.ol style={{ x }} className="mt-10 flex gap-5 pl-5 md:pl-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]">
          {steps.map((s, i) => (
            <li key={s.t} className="relative flex h-[300px] w-[78vw] shrink-0 flex-col justify-between rounded-3xl border border-line bg-white p-8 sm:w-[380px]">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted">Stage {String(i + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <h3 className="font-serif text-5xl italic">{s.t}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
