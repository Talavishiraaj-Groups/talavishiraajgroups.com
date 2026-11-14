'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { CalEmbed } from './consent';
import { ease } from './motion';

/** Step one: a sentence about the problem. Step two: pick a time. Same flow as the previous /book page. */
export function BookFlow() {
  const [step, setStep] = useState<1 | 2>(1);
  return (
    <div>
      <ol className="mb-6 flex gap-2 text-[13px]">
        {['What it is about', 'Pick a time'].map((s, i) => (
          <li key={s} className={`flex items-center gap-2 rounded-full px-3 py-1.5 ${step === i + 1 ? 'bg-ink text-white' : 'bg-white text-muted ring-1 ring-line'}`}>
            <span>{i + 1}</span> {s}
          </li>
        ))}
      </ol>
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div key="form" exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }}>
            <ContactForm mode="book" onSent={() => setStep(2)} />
            <p className="mt-4 text-sm text-muted">You can pick a time on the next screen. No obligation either way.</p>
          </motion.div>
        ) : (
          <motion.div key="cal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
            <div className="rounded-3xl border border-line bg-white p-4 md:p-6">
              <p className="mb-4 px-2 text-[15px] text-ink/75">Thank you. Now choose a time that suits you.</p>
              <CalEmbed />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
