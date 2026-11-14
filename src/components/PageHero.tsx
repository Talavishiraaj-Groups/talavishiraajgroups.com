'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { SplitWords, ease } from './motion';
import { Eyebrow } from './ui';
import Link from 'next/link';

export function Crumbs({ items, dark }: { items: { href?: string; label: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={clsx('eyebrow flex flex-wrap items-center gap-2', dark ? 'text-white/45' : 'text-muted')}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.href ? (
            <Link href={it.href} className={dark ? 'hover:text-white' : 'hover:text-ink'}>
              {it.label}
            </Link>
          ) : (
            <span className={dark ? 'text-white/80' : 'text-ink'}>{it.label}</span>
          )}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </nav>
  );
}

/** Editorial hero: huge type, eyebrow, lead in a right column. */
export function PageHero({
  eyebrow,
  title,
  italic = [],
  lead,
  children,
  dark,
  aside,
}: {
  eyebrow: string;
  title: string;
  italic?: string[];
  lead?: ReactNode;
  children?: ReactNode;
  dark?: boolean;
  aside?: ReactNode;
}) {
  return (
    <section className={clsx('relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44', dark ? 'noise bg-ink text-white' : '')}>
      {dark && <div className="absolute inset-0" />}
      <div className="wrap relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <h1 className={clsx('text-display font-medium', aside ? 'lg:col-span-8' : 'lg:col-span-11')}>
            <SplitWords text={title} italic={italic} />
          </h1>
          {aside && <div className="lg:col-span-4">{aside}</div>}
        </div>
        {lead && (
          <div style={{ animationDelay: '0.45s' }} className="fade-up mt-10 grid gap-8 md:grid-cols-12">
            <div className={clsx('text-lg leading-relaxed md:col-span-7 md:col-start-6', dark ? 'text-white/65' : 'text-ink/70')}>{lead}</div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
