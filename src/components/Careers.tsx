'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowUpRight, Check, FileText, Loader2 } from 'lucide-react';
import { EMAIL } from '@/content';
import { roles } from '@/content/careers';
import { ease } from './motion';

const field = 'w-full rounded-xl border border-line bg-white px-4 pb-3 pt-6 text-[15px] outline-none transition-colors focus:border-signal';
const label = 'pointer-events-none absolute left-4 top-2 text-[11px] text-muted';
const MAX = 4 * 1024 * 1024;

/** Application form. Posts multipart data to /api/careers, which emails it with the CV attached. */
export function ApplyForm({ initialRole = '' }: { initialRole?: string }) {
  const [role, setRole] = useState(initialRole);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  function fail(msg: string) {
    setStatus('error');
    setError(msg);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!role) return fail('Please choose a role');
    if (file && file.size > MAX) return fail('The CV must be under 4 MB');
    if (!file && !String(f.get('link') || '').trim()) return fail('Attach a CV or add a LinkedIn or profile link');
    f.set('role', role);
    if (file) f.set('cv', file);
    else f.delete('cv');
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/careers', { method: 'POST', body: f });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || `The server returned ${res.status}`);
      setStatus('sent');
    } catch (err) {
      fail(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  if (status === 'sent') {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ ease, duration: 0.6 }} className="rounded-3xl border border-line bg-white p-8 md:p-12">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-mint/20">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-2xl font-medium tracking-tight">Thank you. Your application has reached us.</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">We read every one and reply by email within a week. If there is a fit, we will suggest a short call.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-line bg-white p-6 md:p-10">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden />
      <fieldset>
        <legend className="mb-3 text-[13px] text-muted">Role *</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((r) => (
            <button
              type="button"
              key={r.slug}
              aria-pressed={r.title === role}
              onClick={() => setRole(r.title)}
              className={`min-h-[36px] rounded-full border px-3.5 py-2 text-[13px] transition-colors ${r.title === role ? 'border-signal bg-signal text-white' : 'border-ink/15 hover:border-ink/40'}`}
            >
              {r.title}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="relative">
          <input name="name" required maxLength={120} className={field} autoComplete="name" />
          <span className={label}>Full name *</span>
        </label>
        <label className="relative">
          <input name="email" type="email" required maxLength={254} className={field} autoComplete="email" />
          <span className={label}>Email *</span>
        </label>
        <label className="relative">
          <input name="phone" type="tel" required maxLength={40} className={field} autoComplete="tel" />
          <span className={label}>Phone or WhatsApp *</span>
        </label>
        <label className="relative">
          <input name="location" required maxLength={120} className={field} autoComplete="address-level2" />
          <span className={label}>City and country *</span>
        </label>
        <label className="relative sm:col-span-2">
          <input name="link" type="url" maxLength={300} className={field} placeholder="https://linkedin.com/in/..." />
          <span className={label}>LinkedIn or profile link</span>
        </label>
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-ink/20 px-4 py-4 transition-colors hover:border-signal">
        <FileText className="h-5 w-5 shrink-0 text-muted" />
        <span className="flex-1 truncate text-[15px]">{file ? file.name : 'Attach CV (PDF or Word, up to 4 MB)'}</span>
        <span className="text-[13px] text-signal">{file ? 'Change' : 'Browse'}</span>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
      </label>
      <label className="relative mt-4 block">
        <textarea name="note" maxLength={3000} rows={4} className={field + ' resize-none'} placeholder="Your sales or lead generation experience, and the markets or people you know." />
        <span className={label}>Why this role</span>
      </label>
      <AnimatePresence>
        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="mt-6 flex gap-3 rounded-2xl bg-ember/10 p-4 text-sm">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
            <span>
              {error}. If it keeps failing, email your CV to <a href={`mailto:${EMAIL}?subject=Application`} className="font-medium underline">{EMAIL}</a>.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-muted">
          We use your details only to assess your application. See our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </p>
        <button type="submit" disabled={status === 'sending'} className="group inline-flex min-h-[48px] items-center gap-3 rounded-full bg-signal py-3.5 pl-6 pr-4 text-[15px] font-medium text-white transition-colors hover:bg-ink disabled:opacity-60">
          {status === 'sending' ? 'Sending' : 'Send application'}
          {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUpRight className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
