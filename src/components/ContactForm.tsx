'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { EMAIL } from '@/content';
import { ease } from './motion';

const topics = [
  'Technology & Engineering',
  'Artificial Intelligence & Automation',
  'Product Engineering & R&D',
  'Business & Operating Systems',
  'Growth & Market Enablement',
  'Implementation & Delivery',
  'Prism',
  'Partnership or collaboration',
  'Something else',
];

type Mode = 'contact' | 'book' | 'community';
type Status = 'idle' | 'sending' | 'sent' | 'error';

const field = 'w-full rounded-xl border border-line bg-white px-4 pb-3 pt-6 text-[15px] outline-none transition-colors focus:border-signal';
const label = 'pointer-events-none absolute left-4 top-2 text-[11px] text-muted';

/**
 * One form, three uses, matching the previous site's endpoints and payloads:
 * contact and book post to /api/send-contact-email, community posts to /api/send-email.
 */
export function ContactForm({ mode = 'contact', onSent }: { mode?: Mode; onSent?: () => void }) {
  const [topic, setTopic] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    setStatus('sending');
    setError('');
    const endpoint = mode === 'community' ? '/api/send-email' : '/api/send-contact-email';
    const payload =
      mode === 'community'
        ? { name: get('name'), email: get('email'), number: get('phone'), message: get('message'), website: get('website') }
        : {
            name: get('name'),
            email: get('email'),
            company: get('org'),
            phone: get('phone'),
            service: mode === 'book' ? 'Call booking' : topic,
            message: mode === 'book' ? `Booking a call. What they would like to talk about: ${get('message')}` : get('message'),
            website: get('website'),
          };
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `The server returned ${res.status}`);
      setStatus('sent');
      onSent?.();
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong');
      // A booking should never be blocked by the email step.
      if (mode === 'book') onSent?.();
    }
  }

  if (status === 'sent' && mode !== 'book') {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ease, duration: 0.6 }} className="rounded-3xl border border-line bg-white p-8 md:p-12">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-mint/20 text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="mt-6 text-2xl font-medium tracking-tight">{mode === 'community' ? 'Thank you. You are on the list.' : 'Thank you. Your message has reached us.'}</h2>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
          {mode === 'community'
            ? 'We will only be in touch when there is something genuinely relevant to what you are working on.'
            : 'We read every message and reply by email, usually within one business day, with a considered view rather than an automated calendar link.'}
        </p>
      </motion.div>
    );
  }

  const messageLabel = mode === 'community' ? 'What are you working on *' : mode === 'book' ? 'What would you like to talk about? *' : 'Your message *';
  const placeholder =
    mode === 'book'
      ? 'A sentence is plenty. It means we come to the call having thought about it.'
      : mode === 'community'
        ? 'A short note, so we only send what is relevant.'
        : 'What are you trying to achieve, what is in the way, and is there a timeline we should know about?';

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 md:p-10" noValidate={false}>
      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="relative">
          <input name="name" required maxLength={120} className={field} autoComplete="name" />
          <span className={label}>Name *</span>
        </label>
        <label className="relative">
          <input name="email" type="email" required maxLength={254} className={field} autoComplete="email" />
          <span className={label}>Email *</span>
        </label>
        {mode !== 'community' && (
          <label className="relative">
            <input name="org" maxLength={120} className={field} autoComplete="organization" />
            <span className={label}>Organization</span>
          </label>
        )}
        <label className={mode === 'community' ? 'relative sm:col-span-2' : 'relative'}>
          <input name="phone" type="tel" required={mode === 'community'} maxLength={40} className={field} autoComplete="tel" />
          <span className={label}>{mode === 'community' ? 'Phone *' : 'Phone'}</span>
        </label>
      </div>
      {mode === 'contact' && (
        <fieldset className="mt-6">
          <legend className="mb-3 text-[13px] text-muted">What is this about? It helps us route your message.</legend>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <button
                type="button"
                key={t}
                aria-pressed={t === topic}
                onClick={() => setTopic(t === topic ? '' : t)}
                className={`min-h-[36px] rounded-full border px-3.5 py-2 text-[13px] transition-colors ${t === topic ? 'border-signal bg-signal text-white' : 'border-ink/15 hover:border-ink/40'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
      )}
      <label className="relative mt-6 block">
        <textarea name="message" required maxLength={5000} rows={mode === 'contact' ? 6 : 4} className={field + ' resize-none'} placeholder={placeholder} />
        <span className={label}>{messageLabel}</span>
      </label>
      <AnimatePresence>
        {status === 'error' && mode !== 'book' && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="mt-6 flex gap-3 rounded-2xl bg-ember/10 p-4 text-sm">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
            <span>
              Your message did not send ({error}). Please try again, or write to us directly at{' '}
              <a href={`mailto:${EMAIL}`} className="font-medium underline">{EMAIL}</a>.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          We use what you send only to respond to you. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-signal py-3.5 pl-6 pr-4 text-[15px] font-medium text-white transition-colors hover:bg-ink disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending' : mode === 'book' ? 'Send it over' : mode === 'community' ? 'Register interest' : 'Send message'}
          {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
        </button>
      </div>
    </form>
  );
}
