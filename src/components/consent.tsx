'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Consent, ported from the previous site so a visitor's existing choice carries
 * over: same storage key and values ("tg-consent": granted | declined) and the
 * same change event. Absence of a choice is not consent.
 */
const KEY = 'tg-consent';
type Choice = 'granted' | 'declined' | null;

export function readConsent(): Choice {
  if (typeof window === 'undefined') return null;
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'granted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(v: 'granted' | 'declined') {
  try {
    window.localStorage.setItem(KEY, v);
  } catch {}
  window.dispatchEvent(new CustomEvent('tg-consent-change', { detail: v }));
}

export function useConsent() {
  const [c, setC] = useState<Choice | 'pending'>('pending');
  useEffect(() => {
    setC(readConsent());
    const on = () => setC(readConsent());
    window.addEventListener('tg-consent-change', on);
    return () => window.removeEventListener('tg-consent-change', on);
  }, []);
  return c;
}

/** Bottom banner. Both answers carry equal weight and declining breaks nothing. */
export function CookieConsent() {
  const c = useConsent();
  return (
    <AnimatePresence>
      {c === null && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Cookie choices"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-2xl border border-line bg-white p-4 shadow-[0_20px_60px_-20px_rgba(10,11,13,0.35)] md:p-5"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <p className="flex-1 text-[13px] leading-relaxed text-ink/75">
              May we measure how this site is used, which pages hold attention and where people give up? That uses Microsoft Clarity and sets cookies. Decline and it never loads; booking a call and the contact form work either way.{' '}
              <Link href="/cookies" className="font-medium text-ink underline underline-offset-4">What this site stores</Link>
            </p>
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => writeConsent('declined')} className="min-h-[40px] rounded-full border border-ink/20 px-5 text-sm font-medium hover:border-ink">
                Decline
              </button>
              <button type="button" onClick={() => writeConsent('granted')} className="min-h-[40px] rounded-full border border-ink/20 px-5 text-sm font-medium hover:border-ink">
                Allow
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Microsoft Clarity, inserted only after an explicit yes and only when an id is configured. */
export function BehaviourAnalytics() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID;
  useEffect(() => {
    if (!id) return;
    let done = false;
    const load = () => {
      const w = window as any;
      if (readConsent() !== 'granted' || done || w.clarity) return;
      w.clarity = w.clarity || function (...a: unknown[]) { (w.clarity.q = w.clarity.q || []).push(a); };
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.clarity.ms/tag/${id}`;
      document.head.appendChild(s);
      done = true;
    };
    load();
    window.addEventListener('tg-consent-change', load);
    return () => window.removeEventListener('tg-consent-change', load);
  }, [id]);
  return null;
}

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK || '';

/**
 * Cal.com calendar inside the page. It loads by itself: it only appears on the booking step,
 * after the visitor has asked to pick a time, so it is the service they came for and is not
 * gated behind the analytics banner (the cookie notice says so). A plain link stays underneath
 * in case Cal.com is blocked or slow.
 */
export function CalEmbed({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!CAL_LINK || !ref.current) return;
    const el = ref.current;
    const f = document.createElement('iframe');
    f.src = `https://cal.com/${CAL_LINK}?theme=light`;
    f.title = 'Choose a time';
    f.className = 'h-[760px] w-full rounded-2xl md:h-[600px]';
    el.appendChild(f);
    return () => {
      el.innerHTML = '';
    };
  }, []);

  if (!CAL_LINK) {
    return (
      <div className={className}>
        <p className="text-[15px] text-muted">Online booking is not configured yet. Send a message instead and we will propose times.</p>
      </div>
    );
  }
  return (
    <div className={className}>
      <div ref={ref} className="min-h-[600px] rounded-2xl bg-paper" />
      <p className="mt-3 px-2 text-[13px] text-muted">
        Calendar not showing?{' '}
        <a href={`https://cal.com/${CAL_LINK}`} target="_blank" rel="noreferrer" className="font-medium text-ink underline underline-offset-4">
          Open it on Cal.com
        </a>
      </p>
    </div>
  );
}
