import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Seo, { CONTACT_EMAIL, breadcrumbSchema, webPageSchema } from '../seo';
import { serviceCategories } from '../data/servicesData';
import { track } from '../components/analytics';

const TITLE = 'Contact Talavishiraaj Groups';
const DESCRIPTION =
  'Talk to us about your technology, engineering, AI, or business challenges. Tell us what you are working on, and our team will provide a thoughtful response.';

/**
 * Enquiry types.
 *
 * The capability options are derived from the capability data, so the ids used
 * by /contact?intent=... on every capability page can never drift out of sync
 * with this list. The selected label is submitted in the existing `service`
 * field, so the contact API and its email template are unchanged.
 */
const INTENTS = [
  ...serviceCategories.map((category) => ({ id: category.id, label: category.label })),
  { id: 'prism', label: 'Prism' },
  { id: 'partnership', label: 'Partnership or collaboration' },
  { id: 'other', label: 'Something else' },
];

const inputClasses =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-primary transition-colors focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10 placeholder:text-gray-400';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialIntent = INTENTS.find((i) => i.id === searchParams.get('intent'))?.id || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    intent: initialIntent,
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [hasStarted, setHasStarted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (!hasStarted) {
      setHasStarted(true);
      track('contact_form_start');
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const intentLabel = INTENTS.find((i) => i.id === form.intent)?.label || '';

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: intentLabel,
          message: form.message,
        }),
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

      track('contact_form_submit', { intent: form.intent || 'unspecified' });
      if (form.intent) track(`${form.intent}_interest`, { location: 'contact_form' });
      setStatus('sent');
      setForm({ name: '', email: '', company: '', phone: '', intent: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        `${error.message} You can also write to us directly at ${CONTACT_EMAIL}.`,
      );
    }
  };

  return (
    <>
      <Seo
        title={`${TITLE} | Talk to Our Team`}
        description={DESCRIPTION}
        path="/contact"
        jsonLd={[
          webPageSchema({ path: '/contact', title: TITLE, description: DESCRIPTION, type: 'ContactPage' }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-5">Contact</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
            Tell us what you are working on
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Describe your technical or commercial challenges in your own words. We review every message and reply with our perspective on how to solve it, and whether we are the right team for the job.
          </p>
          <p className="text-gray-600">
            You can also write to us directly at{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => track('email_click', { location: 'contact_intro' })}
              className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <aside className="border border-border rounded-3xl p-8 bg-muted">
            <h2 className="text-lg font-semibold mb-5">What happens next</h2>
            <ol className="space-y-6 list-none">
              {[
                {
                  title: 'Review',
                  body: 'Our team reads your message and reviews the surrounding context.',
                },
                {
                  title: 'Response',
                  body: 'We reply with a thoughtful approach to your problem, rather than an automated calendar link.',
                },
                {
                  title: 'Next steps',
                  body: 'A direct conversation, a proposed plan of work, or an honest recommendation to speak to someone else.',
                },
              ].map((step, index) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-semibold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 pt-6 border-t border-border">
              <h2 className="text-sm font-semibold mb-3">Exploring something specific?</h2>
              <ul className="space-y-2 text-sm list-none">
                <li>
                  <Link
                    to="/services"
                    className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Review our capabilities first
                  </Link>
                </li>
                <li>
                  <Link
                    to="/systems"
                    className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Read about Prism
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partnerships"
                    className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Explore partnership models
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <div className="border border-border rounded-3xl p-8 bg-white">
            {status === 'sent' ? (
              <div className="py-8" role="status">
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-5">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold mb-4">Thank you. We have your message.</h2>
                <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
                  <p>We will reply by email with next steps.</p>
                  <p>
                    If you do not see our reply, please check your spam or junk folder. If it landed
                    there, mark it as not spam and add{' '}
                    <span className="font-medium text-primary">{CONTACT_EMAIL}</span> to your contacts
                    so future messages reach you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required>
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
                  </Field>
                  <Field label="Email" name="email" required>
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
                  </Field>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Organization" name="company">
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Company or organization"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Phone" name="phone">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="Optional"
                      className={inputClasses}
                    />
                  </Field>
                </div>

                <Field label="What is this about" name="intent" hint="This helps us route your message to the right people.">
                  <select
                    id="intent"
                    name="intent"
                    value={form.intent}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a topic</option>
                    {INTENTS.map((intent) => (
                      <option key={intent.id} value={intent.id}>
                        {intent.label}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Your message"
                  name="message"
                  required
                  hint="What are you trying to achieve, what is in the way, and is there a timeline we should know about?"
                >
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Describe the situation in your own words."
                    className={`${inputClasses} resize-y`}
                  />
                </Field>

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
                    'Send message'
                  )}
                </button>

                <p className="text-xs text-gray-500 leading-relaxed">
                  We use what you send only to respond to your enquiry. See our{' '}
                  <Link
                    to="/privacy-policy"
                    className="underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, required = false, hint, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-800">
        {label}
        {required && (
          <>
            <span aria-hidden="true" className="text-gray-500">
              {' '}
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        )}
      </label>
      {hint && <p className="text-xs text-gray-500 leading-relaxed">{hint}</p>}
      {children}
    </div>
  );
}
