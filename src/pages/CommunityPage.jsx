import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo, { CONTACT_EMAIL } from '../seo';
import { track } from '../components/analytics';

/**
 * Kept for people who already hold the link, and to preserve the working
 * endpoint behind it. It is not part of the primary navigation and is marked
 * noindex, so it is excluded from the sitemap: the page has no independent
 * search intent and would otherwise compete with /contact.
 *
 * The field names below are unchanged because /api/send-email expects exactly
 * name, email, number and message.
 */

const inputClasses =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-primary transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 placeholder:text-gray-400';

export default function CommunityPage() {
  const [form, setForm] = useState({ name: '', email: '', number: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Unexpected response from the server: ${text.slice(0, 120)}`);
      }

      if (!response.ok) {
        throw new Error(data.error || data.details || 'The message could not be sent.');
      }

      track('community_form_submit');
      setStatus('sent');
      setForm({ name: '', email: '', number: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(`${error.message} You can also write to us at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <div className="bg-white text-primary">
      <Seo
        title="Keep in touch | Talavishiraaj Groups"
        description="Register your interest and tell us what you are working on. We will get in touch when we publish something relevant to it."
        path="/community"
        noindex
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Keep in touch</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
          Tell us what you would find useful
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
          If you would like to hear from us as we publish research and technical writing, leave your
          details and a short note on what you are working on. We will only be in touch when there is
          something genuinely relevant to it.
        </p>
        <p className="text-gray-600 mt-4">
          If you have a specific project or question, the{' '}
          <Link
            to="/contact"
            className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
          >
            contact page
          </Link>{' '}
          will reach us faster.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 md:px-8 pb-20">
        <div className="border border-border rounded-3xl p-8 bg-white">
          {status === 'sent' ? (
            <div className="py-6" role="status">
              <h2 className="text-xl font-semibold mb-4">Thank you. We have your details.</h2>
              <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
                <p>We will be in touch when there is something worth sending.</p>
                <p>
                  If our email does not appear, please check your spam folder and add{' '}
                  <span className="font-medium text-primary">{CONTACT_EMAIL}</span> to your contacts.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                  Name <span aria-hidden="true" className="text-gray-500">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                  Email <span aria-hidden="true" className="text-gray-500">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="number" className="block text-sm font-medium text-gray-800">
                  Phone <span aria-hidden="true" className="text-gray-500">*</span>
                  <span className="sr-only">(required)</span>
                </label>
                <input
                  id="number"
                  type="tel"
                  name="number"
                  value={form.number}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                  What are you working on
                  <span aria-hidden="true" className="text-gray-500"> *</span>
                  <span className="sr-only">(required)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="A sentence or two on your work and what you would find useful to read."
                  className={`${inputClasses} resize-y`}
                />
              </div>

              {status === 'error' && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-primary text-accent py-3.5 text-sm font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-graphite disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {status === 'submitting' ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                    Sending
                  </>
                ) : (
                  'Register interest'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
