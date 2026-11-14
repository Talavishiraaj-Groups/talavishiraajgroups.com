'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { Eyebrow } from './ui';
import { Reveal } from './motion';

export function ApproachSteps({ steps, tint, outcomes }: { steps: { title: string; body: string }[]; tint: string; outcomes: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const h = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <section className="relative overflow-hidden border-y border-line bg-paper2/60 py-24 md:py-32">
            <div className="wrap relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-h2 font-medium">Three rules we do not bend</h2>
            <div className="mt-12 rounded-3xl border border-line bg-white p-7">
              <div className="eyebrow mb-5 text-muted">What you end up with</div>
              <ul className="space-y-4">
                {outcomes.map((o) => (
                  <li key={o} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: tint }}>
                      <Check className="h-3 w-3 text-white" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div ref={ref} className="relative lg:col-span-7">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-ink/10" />
          <motion.div className="absolute left-[19px] top-0 w-px" style={{ height: h, background: tint }} />
          <div className="space-y-20">
            {steps.map((s, i) => (
              <Reveal key={s.title} className="relative pl-16">
                <div className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-xs">0{i + 1}</div>
                <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
