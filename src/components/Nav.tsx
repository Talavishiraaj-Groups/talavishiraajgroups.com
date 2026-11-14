'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { capabilities } from '@/content/capabilities';
import { sectors, insights } from '@/content';
import { ease } from './motion';

type MenuKey = 'capabilities' | 'sectors' | 'insights' | null;

const links: { label: string; href: string; menu?: MenuKey }[] = [
  { label: 'Capabilities', href: '/services', menu: 'capabilities' },
  { label: 'Prism', href: '/products' },
  { label: 'Work', href: '/case-studies' },
  { label: 'Sectors', href: '/sectors', menu: 'sectors' },
  { label: 'Insights', href: '/insights', menu: 'insights' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4" onMouseLeave={() => setOpen(null)}>
        <div
          className={clsx(
            'mx-auto max-w-site rounded-2xl border transition-all duration-500',
            scrolled || open ? 'border-ink/10 bg-paper/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl' : 'border-transparent bg-paper/60 backdrop-blur-md',
          )}
        >
          <nav aria-label="Primary" className="flex h-14 items-center justify-between pl-4 pr-2 md:h-16 md:pl-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Talavishiraaj Groups home">
              <Image src="/logo.png" alt="" width={26} height={27} priority />
              <span className="text-[15px] font-semibold tracking-tight">
                Talavishiraaj<span className="font-normal text-muted"> Groups</span>
              </span>
            </Link>
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => {
                const active = pathname === l.href || pathname.startsWith(l.href + '/');
                return (
                  <li key={l.href} onMouseEnter={() => setOpen(l.menu ?? null)}>
                    <Link
                      href={l.href}
                      className={clsx(
                        'relative rounded-full px-4 py-2 text-[14px] transition-colors',
                        active ? 'text-ink' : 'text-ink/65 hover:text-ink',
                      )}
                    >
                      {active && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-ink/[0.06]" transition={{ duration: 0.5, ease }} />}
                      <span className="relative">{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-[14px] font-medium text-paper transition-colors hover:bg-signal sm:inline-flex"
              >
                Describe your situation <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button className="grid h-10 w-10 place-items-center rounded-xl lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                key={open}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease }}
                className="hidden overflow-hidden lg:block"
              >
                <div className="border-t border-ink/10 px-5 pb-6 pt-5">
                  {open === 'capabilities' && <CapMenu />}
                  {open === 'sectors' && <SectorMenu />}
                  {open === 'insights' && <InsightMenu />}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-[60] flex flex-col bg-paper text-ink"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <span className="font-semibold">Talavishiraaj Groups</span>
              <button onClick={() => setMobile(false)} aria-label="Close menu" className="grid h-10 w-10 place-items-center">
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex-1 space-y-1 overflow-auto px-6 pt-6">
              {[...links, { label: 'What it costs', href: '/what-it-costs' }, { label: 'Partnerships', href: '/partnerships' }, { label: 'Contact', href: '/contact' }].map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.04, ease }}>
                  <Link href={l.href} className="flex items-baseline justify-between border-b border-line py-4 text-3xl font-medium tracking-tight">
                    {l.label}
                    <span className="text-xs text-muted">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="p-6 text-sm text-muted">info@talavishiraajgroups.com</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CapMenu() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3 rounded-xl bg-signal p-6 text-white">
        <div className="eyebrow text-white/70">Capabilities</div>
        <p className="mt-4 text-xl font-medium leading-snug tracking-tight">Six disciplines. One accountable team.</p>
        <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
          Overview <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-2">
        {capabilities.map((c) => (
          <Link key={c.slug} href={`/services/${c.slug}`} className="group rounded-xl p-4 transition-colors hover:bg-ink/[0.04]">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-muted">{c.n}</span>
            </div>
            <div className="mt-2 font-medium tracking-tight group-hover:text-signal">{c.name}</div>
            <div className="mt-1 text-sm text-muted">{c.short}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectorMenu() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <div className="eyebrow text-muted">Sectors</div>
        <p className="mt-4 text-xl font-medium leading-snug tracking-tight">The problem shapes the approach, not the industry.</p>
        <Link href="/sectors" className="mt-6 inline-flex items-center gap-2 text-sm text-signal">
          All 19 sectors <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <ul className="col-span-9 grid grid-cols-3 gap-x-6 gap-y-1">
        {sectors.map((s) => (
          <li key={s.slug}>
            <Link href={`/sectors/${s.slug}`} className="block rounded-lg px-3 py-2 text-[14px] text-ink/75 transition-colors hover:bg-ink/[0.04] hover:text-ink">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InsightMenu() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <div className="eyebrow text-muted">Insights & tools</div>
        <ul className="mt-4 space-y-2 text-[15px]">
          <li><Link className="hover:text-signal" href="/insights">All insights</Link></li>
          <li><Link className="hover:text-signal" href="/build-vs-buy">Build vs buy framework</Link></li>
          <li><Link className="hover:text-signal" href="/what-it-costs">What it costs</Link></li>
          <li><Link className="hover:text-signal" href="/in-house-vs-agency">In house vs agency</Link></li>
          <li><Link className="hover:text-signal" href="/resources">Resources</Link></li>
        </ul>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-3">
        {insights.slice(0, 3).map((i) => (
          <Link key={i.slug} href={`/insights/${i.slug}`} className="group rounded-xl border border-ink/10 p-5 transition-colors hover:border-ink/30">
            <div className="eyebrow text-muted">{i.readTime}</div>
            <div className="mt-3 font-medium leading-snug tracking-tight group-hover:text-signal">{i.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
