import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { PartnerShapes } from '@/components/Partnerships';
import { Reveal } from '@/components/motion';
import { CtaBand, Eyebrow, SectionHead } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Technology, delivery, product, research and market expansion collaborations, structured properly and governed from the start.',
};

const expect = [
  'We engage selectively. Depth and accountability do not survive taking on everything that is offered.',
  'One senior point of contact, with direct access to the people doing the work.',
  'Scope, ownership and success measures are written down before anything starts.',
  'Confidentiality, data handling and IP terms are agreed at the outset, not retrofitted.',
  'Commercial structure follows the shape of the collaboration rather than a fixed template.',
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="We work well with organizations that build things"
        italic={['build', 'things']}
        lead="Some of our strongest work happens alongside other organizations rather than directly for a client. We do not run a partner programme with tiers and badges. Each collaboration is assessed on genuine technical fit, whether both sides bring something the other needs, and whether it can be governed properly."
      />
      <section className="wrap pb-24">
        <SectionHead eyebrow="How we collaborate" title="Five shapes a collaboration usually takes" />
        <div className="mt-12">
          <PartnerShapes />
        </div>
      </section>
      <section className="border-y border-line bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">What you can expect from us</h2>
          </div>
          <ol className="lg:col-span-8">
            {expect.map((e, i) => (
              <Reveal as="li" key={e} delay={i * 0.05} className="flex gap-6 border-t border-line py-6 last:border-b">
                <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-lg tracking-tight">{e}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap py-20">
        <div className="max-w-3xl">
          <Eyebrow className="mb-6">Before you get in touch</Eyebrow>
          <p className="text-xl leading-relaxed tracking-tight">
            It helps to know what your organization does, where you see the overlap with our work, and what a first piece of collaboration might look like in practice. A specific proposal is easier to respond to than a general introduction. Our <Link href="/services" className="text-signal">capabilities</Link> set out what we can bring, and our <Link href="/case-studies" className="text-signal">case studies</Link> show the kind of work we take on.
          </p>
        </div>
      </section>
      <CtaBand
        title="Propose a collaboration"
        body="Introduce your organization and the collaboration you have in mind. We review every proposal for technical and commercial fit before responding."
        note={<>Partners most often bring us clients facing a decision they cannot settle internally. That work is <Link href="/products" className="underline underline-offset-4">Prism</Link>.</>}
      />
    </>
  );
}
