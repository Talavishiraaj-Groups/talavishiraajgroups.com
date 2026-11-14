'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Magnetic, Reveal, ease } from './motion';

export function Button({
  href,
  children,
  variant = 'dark',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'dark' | 'light' | 'signal' | 'ghost' | 'ghostLight';
  className?: string;
}) {
  const styles = {
    dark: 'bg-ink text-paper hover:bg-signal',
    light: 'bg-paper text-ink hover:bg-white',
    signal: 'bg-signal text-white hover:bg-ink',
    ghost: 'border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    ghostLight: 'border border-white/25 text-white hover:border-white hover:bg-white hover:text-ink',
  }[variant];
  return (
    <Magnetic strength={0.18}>
      <Link
        href={href}
        className={clsx(
          'group inline-flex items-center gap-3 rounded-full py-3.5 pl-6 pr-4 text-[15px] font-medium transition-colors duration-300',
          styles,
          className,
        )}
      >
        {children}
        <span className="relative grid h-7 w-7 place-items-center overflow-hidden rounded-full">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:-translate-y-6 group-hover:translate-x-6" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      </Link>
    </Magnetic>
  );
}

export function ArrowLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={clsx('group inline-flex items-center gap-2 text-[15px] font-medium', className)}>
      <span className="link-u">{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Eyebrow({ children, className, dot = true }: { children: ReactNode; className?: string; dot?: boolean }) {
  return (
    <div className={clsx('text-[15px] font-medium tracking-tight text-ink/60', className)} data-dot={dot ? undefined : 'off'}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
  dark,
  align = 'split',
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  dark?: boolean;
  align?: 'split' | 'stack';
}) {
  return (
    <div className={clsx(align === 'split' ? 'grid gap-8 md:grid-cols-12' : 'max-w-3xl', className)}>
      <div className={align === 'split' ? 'md:col-span-7' : ''}>
        <Reveal delay={0.05}>
          <h2 className={clsx('text-h2 font-medium', dark && 'text-white')}>{title}</h2>
        </Reveal>
      </div>
      {lead && (
        <Reveal delay={0.12} className={align === 'split' ? 'md:col-span-5 md:pt-12' : 'mt-6'}>
          <p className={clsx('text-[17px] leading-relaxed', dark ? 'text-white/60' : 'text-muted')}>{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

export function Accordion({ items, dark }: { items: { q: string; a: string }[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className={clsx('border-t', dark ? 'border-white/15' : 'border-line')}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={clsx('border-b', dark ? 'border-white/15' : 'border-line')}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className={clsx('text-lg font-medium tracking-tight md:text-xl', dark && 'text-white')}>{it.q}</span>
              <span
                className={clsx(
                  'mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500',
                  isOpen ? 'rotate-45 border-signal bg-signal text-white' : dark ? 'border-white/25 text-white' : 'border-ink/20',
                )}
              >
                <Plus className="h-4 w-4" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="overflow-hidden"
                >
                  <p className={clsx('max-w-3xl pb-7 text-[16px] leading-relaxed', dark ? 'text-white/60' : 'text-muted')}>{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function CtaBand({
  title = 'Discuss a problem with us',
  body = 'Describe the technical or commercial context you are working in. We respond with a considered view on the approach and clear next steps.',
  note,
}: {
  title?: string;
  body?: string;
  note?: ReactNode;
}) {
  return (
    <section className="wrap py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white px-6 py-16 md:px-16 md:py-24">
                <div
          className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, #2B55FF 0%, transparent 65%)' }}
        />
        <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className="text-display font-medium">{title}</h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Button href="/contact" variant="signal">
              Describe your situation
            </Button>
          </div>
        </div>
        {note && <div className="relative mt-12 border-t border-line pt-6 text-sm text-muted [&_a]:text-ink">{note}</div>}
      </div>
    </section>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx('inline-flex items-center rounded-full border border-ink/15 px-3 py-1 text-[11px]', className)}>
      {children}
    </span>
  );
}
