import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheck } from 'react-icons/fa';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via Netlify function
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      // Read response as text first, then parse as JSON
      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError);
        console.error('Response text:', text);
        throw new Error(`Invalid response from server: ${text.substring(0, 100)}`);
      }

      if (!response.ok) {
        console.error('Response not OK:', response.status, data);
        throw new Error(data.error || data.details || 'Failed to send email');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3500);
    } catch (error) {
      console.error('Form submission failed:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      setIsSubmitting(false);
      alert(`Failed to submit: ${error.message}. Please check the console for details.`);
    }
  };

  return (
    <div className="bg-white text-primary">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Contact</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Let us plan your next system</h1>
        <p className="text-base md:text-lg text-gray-600">
          Tell us about the problem you are solving. We respond within 2 business days with the right experts and a
          clear next step with no generic pitch decks.
        </p>
        <div className="text-sm text-gray-500">
          Prefer email? Reach us at <span className="font-medium text-primary">info@talavishiraajgroups.com</span>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="border border-border rounded-3xl p-8 bg-muted">
            <h2 className="text-xl font-semibold mb-4">What to expect</h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>A short call to understand context, urgency, and stakeholders.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>Rapid assessment outlining approach, timelines, and the team we recommend.</span>
              </li>
              <li className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>Clear proposal focused on outcomes, instrumentation, and ownership.</span>
              </li>
            </ul>
          </div>

          <motion.div className="border border-border rounded-3xl p-8 bg-white shadow-sm">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Thank you. We have received your request.</h3>
                <div className="text-sm text-gray-600 space-y-2 text-left max-w-md mx-auto">
                  <p>We will respond via email with next steps.</p>
                  <p>
                    If you do not see our message, please check your spam or junk folder. If our message landed in spam, mark it as Not Spam and add{' '}
                    <span className="font-medium text-primary">info@talavishiraajgroups.com</span> to your contacts and mark it as important to ensure future communication.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Name *">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className={inputClasses}
                    />
                  </Field>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Company">
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Organisation name"
                      className={inputClasses}
                    />
                  </Field>
                  <Field label="Phone">
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 000 000 0000"
                      className={inputClasses}
                    />
                  </Field>
                </div>
                <Field label="Focus area">
                  <input
                    type="text"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    placeholder="AI, Automation, Product build, Growth, etc."
                    className={inputClasses}
                  />
                </Field>
                <Field label="Project context *">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What outcome are you targeting? Who is involved? Any timelines we should know?"
                    className={`${inputClasses} resize-none`}
                  />
                </Field>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-primary text-accent py-3 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Submit enquiry
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="text-left block text-sm font-medium text-gray-700 space-y-2">
      <span>{label}</span>
      {children}
    </label>
  );
}

const inputClasses =
  'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400';

