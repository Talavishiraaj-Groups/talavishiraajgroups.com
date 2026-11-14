import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { PrismVisual, RangeBars } from '@/components/visuals';
import { Reveal, SplitWords } from '@/components/motion';
import { Accordion, Button, CtaBand, Eyebrow, SectionHead } from '@/components/ui';
import { SelfCheck, TwoWeekPlan } from '@/components/prism';

export const metadata: Metadata = {
  title: 'Prism: decide before you build, buy or bet on AI',
  description: 'An independent two week go or no go on the technology call you are about to make. Build it, buy it, or not yet, and what to do first.',
};

const notThis = [
  { t: 'Not your dev shop', d: 'They tell you whether they can build it. They are paid to build it. They will not tell you whether you should.' },
  { t: 'Not a gut check call', d: 'An hour on a call reframes the question. It does no homework inside your actual business.' },
  { t: 'Not a consultancy deck', d: 'A large firm takes weeks and hands you a presentation. You need a decision, not a document.' },
];

const deliverables = [
  { t: 'The answer, first', d: 'Build, buy, or not yet, stated plainly on the first page, with how confident we are and what would change it.' },
  { t: 'The case behind it', d: 'What you believed going in, what the evidence showed, where those differed, and the trade offs made explicit rather than hidden.' },
  { t: 'What to do first', d: 'The first moves that matter and what they unlock, what is valid but should wait, and what looks attractive and should not take resources now.' },
  { t: 'The numbers per move', d: 'Cost, dependencies, downside and cost of delay, where the evidence supports an estimate and marked clearly where it does not.' },
  { t: 'A live session with your leadership', d: 'Sixty to ninety minutes walking your team through the decision and defending it, recorded so you can share it.' },
  { t: 'Everything packaged', d: 'The full record, the working files and an editable tracker, in your hands within 24 to 48 hours of the session.' },
];

const faqs = [
  { q: 'How much does it cost to build custom software?', a: 'Published build ranges run from roughly $25,000 for a narrow MVP to $400,000 or more for an enterprise platform, and the average custom software project ran about $132,000 and took 13 months. The same brief is routinely quoted at $40,000 by one firm and $400,000 by another. The useful question is not the headline number, it is what the quote excludes.' },
  { q: 'What does it really cost once it is running?', a: 'Annual maintenance commonly runs 15 to 25 percent of the original build cost, every year, and one analysis puts the initial build at under 35 percent of five year total cost. Integration work commonly runs 35 to 50 percent of initial development cost. Ask any vendor for the three year number, not the build number.' },
  { q: 'Should we build, buy, or partner?', a: 'Partnering is the option most comparisons leave out, and it is often the right one: buy a platform with a real API and build only the part that is genuinely yours. Build what differentiates you. Buy what does not. Partner where the answer is some of each.' },
  { q: 'Can I trust the cost comparisons I find online?', a: 'Read who wrote them. Almost every page ranking for build versus buy is published by a software agency, which means the party explaining your decision is also the party paid for one of the answers. We are not selling you the build either way.' },
  { q: 'What if the answer is not to proceed?', a: 'That is a common and entirely legitimate outcome, and it is usually where the money is saved. We would rather tell you to stop than be comfortable.' },
  { q: 'How much of my time does this take?', a: 'A few hours in total: one kickoff session, a handful of focused conversations with the people who hold the relevant parts, and the live session at the end. The work is ours to carry.' },
  { q: 'Is this right for every decision?', a: 'No. If one specialist can answer your question, a specialist is cheaper and better, and we will say so. This is for the call that depends on several parts of the business at once.' },
];

export default function PrismPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(40% 50% at 80% 30%, rgba(143,166,255,0.35), transparent), radial-gradient(30% 40% at 95% 70%, rgba(255,176,32,0.18), transparent), radial-gradient(30% 40% at 75% 85%, rgba(47,214,163,0.16), transparent)' }} />
        <div className="wrap relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <h1 className="text-display font-medium">
                <SplitWords text="Before you build it, buy it, or bet on AI. Know what matters most." italic={['Know', 'what', 'matters', 'most.']} />
              </h1>
              <Reveal delay={0.4}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
                  You are about to spend serious money building something, buying a platform that nearly fits, or betting on AI. Prism tells you which of those is right for your business, and what to do first, before you commit to any of it.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button href="/contact" variant="signal">Describe your situation</Button>
                  <span className="text-xs text-muted">Two weeks · Fixed scope</span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[5/3]">
                <PrismVisual />
              </div>
            </div>
          </div>
          <div className="mt-16 grid border-y border-line sm:grid-cols-3">
            {[
              ['2 weeks', 'from the point we start'],
              ['Fixed', 'scope and fee'],
              ['“No”', 'is a valid answer'],
            ].map(([a, b], i) => (
              <Reveal key={a} delay={i * 0.1} className="border-line py-8 sm:border-r sm:px-8 first:sm:pl-0 last:border-r-0">
                <div className="text-4xl font-medium tracking-tight">{a}</div>
                <div className="eyebrow mt-2 text-muted">{b}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead
          eyebrow="What Prism is"
          title={<>An independent go or no go on the technology call you are about to make</>}
          lead="Prism does the homework across your product, your numbers and your setup, then gives you a straight answer in two weeks: build it, buy it, or not yet, and what to do first."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {notThis.map((n, i) => (
            <Reveal key={n.t} delay={i * 0.1} className="rounded-3xl border border-line bg-white p-8">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-ember/10 text-ember">
                <X className="h-5 w-5" />
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-tight">{n.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{n.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper2/60 py-24 md:py-32">
        <div className="wrap">
          <SectionHead eyebrow="Is this your situation?" title="Does this sound like you?" lead="Tick what is true. Nothing leaves your browser." />
          <div className="mt-14">
            <SelfCheck />
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-medium">The expensive mistake is building the wrong thing competently</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              That figure comes from a firm that sells the same kind of work we do, so treat the direction as sound and the exact numbers as indicative. The overrun data supports it independently: build projects run about 38 percent over on cost and 42 percent over on timeline.
            </p>
            <Link href="/what-it-costs" className="mt-6 inline-block text-signal underline-offset-4 hover:underline">
              See the published figures on budget →
            </Link>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 md:p-10 lg:col-span-7">
            <div className="text-lg font-medium tracking-tight">How far over budget projects land</div>
            <p className="mb-10 mt-1 text-sm text-muted">Projects that defined the requirement before committing, against projects that went straight to building.</p>
            <RangeBars
              rows={[
                { label: 'Went straight to building', lo: 30, hi: 60, tone: 'ember' },
                { label: 'Worked out the requirement first', lo: 10, hi: 15, tone: 'signal' },
              ]}
            />
            <p className="mt-6 text-[11px] text-muted">Source: Mobisoft Infotech, from its own project data</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-24 md:py-32">
        <div className="wrap">
          <SectionHead eyebrow="What you get" title="The answer comes first. Everything else is there to support it." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((d, i) => (
              <Reveal key={d.t} delay={(i % 3) * 0.08} className="bg-white p-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{d.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{d.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead eyebrow="What we need from you" title="A few hours of your time in total. The work is ours to carry." />
        <div className="mt-12">
          <TwoWeekPlan />
        </div>
      </section>

      <section className="wrap pb-24 md:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-3xl bg-signal p-8 text-white md:p-10">
            <Eyebrow className="mb-6 text-white/70" dot={false}>What we will tell you</Eyebrow>
            <ul className="space-y-4 text-[16px] leading-relaxed">
              {[
                'We will tell you not to build it, if that is what the evidence says.',
                'We will tell you the evidence is not enough to decide, rather than inventing certainty.',
                'We will tell you when a cheaper specialist is the right answer.',
                'We do not sell you the build afterwards. Nothing we recommend pays us more.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-line bg-white p-8 md:p-10">
            <Eyebrow className="mb-6">When Prism is the right call</Eyebrow>
            <ul className="space-y-4 text-[16px] leading-relaxed">
              {[
                'The decision commits meaningfully more than the engagement does.',
                'It depends on more than one part of the business, so no single specialist can settle it.',
                'It is genuinely still open, and expensive to reverse once it starts.',
                'You will act on what the evidence says, including being told to wait.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-mint" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2} className="rounded-3xl border border-line bg-white p-8 md:p-10">
            <Eyebrow className="mb-6">When it is not</Eyebrow>
            <ul className="space-y-4 text-[16px] leading-relaxed">
              {[
                'A decision you have already made and want confirmed.',
                'A narrow question one expert could answer on their own.',
                'A general review of the whole business with no specific move at stake.',
                'The building itself. Prism ends at the decision.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <X className="mt-1 h-4 w-4 shrink-0 text-ember" /> {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">If one of those describes you, tell us anyway and we will point you somewhere better.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">What people ask before they commit</h2>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Talk through the decision you are facing" body="Book a call if you would rather talk it through, or send a few lines and we will reply. Either is fine, and neither commits you to anything." />
    </>
  );
}
