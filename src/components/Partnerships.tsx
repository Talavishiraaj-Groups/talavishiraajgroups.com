'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import { ease } from './motion';

const shapes = [
  { t: 'Technology partnerships', d: 'We work alongside platform, infrastructure and software organizations where their product and our engineering capability solve more together than either does alone.', i: ['Integration and reference implementation engineering', 'Technical enablement for partner led deployments', 'Joint architecture and feasibility assessment'] },
  { t: 'Delivery and implementation collaboration', d: 'Firms with strong client relationships often need engineering, AI or product capability they do not hold internally. We work behind or beside those firms with clear scope and a single point of technical accountability.', i: ['Engineering, AI and automation capacity attached to a partner engagement', 'Defined scope, milestones and technical ownership agreed at the outset', 'Confidentiality, data handling and IP terms set before work begins'] },
  { t: 'Joint product development', d: 'Where an organization has domain depth and we have the engineering and research capability to build against it, we take on co-development with shared governance rather than a vendor relationship.', i: ['Product engineering, hardware and software integration, and prototyping', 'Milestone governance with shared accountability', 'Commercial and IP structure agreed before development starts'] },
  { t: 'Research collaboration', d: 'We work selectively with institutions, enterprises and research groups on applied technical research: validating a concept, running a structured programme, or taking research output towards something that can be built.', i: ['Programme design and technical governance', 'Technical assessment, prototyping and validation', 'Structured routes from research output to working implementation'] },
  { t: 'Market expansion and ecosystem work', d: 'For organizations entering a new market or building out a partner ecosystem, we contribute the operating, technical and commercial groundwork that expansion depends on.', i: ['Operating and delivery structure for a new market', 'Partner and channel model design', 'Technical and compliance readiness assessment'] },
];

export function PartnerShapes() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-3 lg:h-[520px] lg:flex-row">
      {shapes.map((s, i) => {
        const isOpen = open === i;
        return (
          <motion.button
            key={s.t}
            layout
            onClick={() => setOpen(i)}
            onMouseEnter={() => setOpen(i)}
            transition={{ duration: 0.6, ease }}
            className={clsx('relative overflow-hidden rounded-3xl border text-left transition-colors', isOpen ? 'border-signal/30 bg-white lg:flex-[4]' : 'border-line bg-paper2/70 hover:bg-white lg:flex-1')}
          >
            <div className="flex h-full flex-col p-6 md:p-8">
              <div className="flex items-center justify-between">
                <span className={clsx('font-serif text-5xl italic', isOpen ? 'text-signal' : 'text-ink/30')}>0{i + 1}</span>
              </div>
              <h3 className={clsx('mt-auto font-medium tracking-tight', isOpen ? 'text-2xl md:text-3xl' : 'text-lg lg:[writing-mode:vertical-rl] lg:rotate-180')}>{s.t}</h3>
              {isOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5, ease }}>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">{s.d}</p>
                  <ul className="mt-6 space-y-2">
                    {s.i.map((x) => (
                      <li key={x} className="flex gap-3 text-[14px]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" /> {x}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
