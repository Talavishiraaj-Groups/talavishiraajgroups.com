import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarClock, MessageSquareText } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { SplitWords, Reveal } from '@/components/motion';
import { Eyebrow } from '@/components/ui';
import { EMAIL } from '@/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Describe your technical or commercial challenge in your own words. We review every message and reply with a considered view.',
};

const steps = [
  { t: 'Review', d: 'Our team reads your message and reviews the surrounding context.' },
  { t: 'Response', d: 'We reply with a thoughtful approach to your problem, rather than an automated calendar link.' },
  { t: 'Next steps', d: 'A direct conversation, a proposed plan of work, or an honest recommendation to speak to someone else.' },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pt-40">
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-[0.12] blur-3xl" style={{ background: 'radial-gradient(circle, #2B55FF, transparent 65%)' }} />
      <div className="wrap relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-display font-medium">
            <SplitWords text="Tell us what you are working on" italic={['working', 'on']} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-8 text-lg leading-relaxed text-ink/70">
              Describe your technical or commercial challenges in your own words. We review every message and reply with our perspective on how to solve it, and whether we are the right team for the job.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <Link href="/book" className="group rounded-2xl border border-line bg-white p-5 hover:border-signal/40">
              <CalendarClock className="h-5 w-5 text-signal" />
              <div className="mt-4 font-medium">Book a call</div>
              <div className="mt-1 text-sm text-muted">Around 30 minutes, no preparation needed.</div>
            </Link>
            <a href="#form" className="group rounded-2xl border border-line bg-white p-5 hover:border-signal/40">
              <MessageSquareText className="h-5 w-5 text-signal" />
              <div className="mt-4 font-medium">Send a message</div>
              <div className="mt-1 text-sm text-muted">We reply by email, usually within one business day.</div>
            </a>
          </div>
          <div className="mt-12">
            <Eyebrow className="mb-6">What happens next</Eyebrow>
            <ol className="relative space-y-6 border-l border-line pl-8">
              {steps.map((s, i) => (
                <li key={s.t} className="relative">
                  <span className="absolute -left-[45px] grid h-7 w-7 place-items-center rounded-full border border-line bg-white text-[11px]">{i + 1}</span>
                  <div className="font-medium">{s.t}</div>
                  <div className="mt-1 text-[15px] text-muted">{s.d}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-12 text-[15px] text-muted">
            Exploring something specific? <Link href="/services" className="text-signal">Review our capabilities</Link>, <Link href="/products" className="text-signal">read about Prism</Link> or <Link href="/partnerships" className="text-signal">explore partnership models</Link>.
          </div>
        </div>
        <div id="form" className="scroll-mt-28 lg:col-span-7">
          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
          <p className="mt-6 text-sm text-muted">
            You can also write to us directly at <a href={`mailto:${EMAIL}`} className="text-ink underline underline-offset-4">{EMAIL}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
