'use client';

import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useScroll, useTransform, animate } from 'framer-motion';
import { ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'span';
}) {
  const M = motion[as] as typeof motion.div;
  const reduced = useReducedMotion();
  return (
    <M
      data-reveal
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </M>
  );
}

export function Stagger({ children, className, gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      data-reveal
      className={className}
      initial={reduced ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}

export const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div data-reveal className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/** Headline that rises word by word, masked. */
export function SplitWords({
  text,
  className,
  delay = 0,
  italic = [],
}: {
  text: string;
  className?: string;
  delay?: number;
  italic?: string[];
}) {
  const words = text.split(' ');
  return (
    <span className={clsx('inline', className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom" aria-hidden>
          <span
            className={clsx('rise', italic.includes(w.replace(/[.,]/g, '')) && 'font-serif italic font-normal tracking-normal')}
            style={{ animationDelay: `${delay + i * 0.045}s` }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}

/** Paragraph where each word brightens as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <p className={className}>{text}</p>;
  return <ScrollTextAnimated text={text} className={className} />;
}

function ScrollTextAnimated({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.4'] });
  const words = text.split(' ');
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]} word={w} />;
      })}
    </p>
  );
}

function Word({ progress, range, word }: { progress: any; range: [number, number]; word: string }) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{' '}
    </motion.span>
  );
}

export function Counter({ to, suffix = '', prefix = '', duration = 1.6, className }: { to: number; suffix?: string; prefix?: string; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease, onUpdate: (x) => setV(x) });
    return () => c.stop();
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {Number.isInteger(to) ? Math.round(v) : v.toFixed(1)}
      {suffix}
    </span>
  );
}

export function Magnetic({ children, className, strength = 0.25 }: { children: ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  return (
    <motion.div
      ref={ref}
      className={clsx('inline-block', className)}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Marquee({ children, className, reverse }: { children: ReactNode; className?: string; reverse?: boolean }) {
  return (
    <div className={clsx('relative flex overflow-hidden', className)}>
      <div className={clsx('flex shrink-0 animate-marquee items-center', reverse && '[animation-direction:reverse]')}>
        {children}
        {children}
      </div>
    </div>
  );
}

export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={clsx('h-px origin-left bg-current', className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease }}
    />
  );
}

export { ease };
