import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { BuildVsBuy } from '@/components/BuildVsBuy';
import { Accordion, CtaBand, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Build, buy, or partner? Seven questions that decide it',
  description: 'A build vs buy decision framework, not a cost calculator. Seven questions, about two minutes, and nothing leaves your browser.',
};

const faqs = [
  { q: 'Does this tell me what to do?', a: 'No, and anything that claims to from seven questions is selling you something. It gives you a leaning based on your own answers and names what the answers did not cover. The decision stays yours.' },
  { q: 'Why does it not ask what it costs?', a: 'Because the build cost is the number you do not have, and not having it is usually why the decision is open. A comparison built on a guessed figure is a guess with a total at the bottom.' },
  { q: 'What is the partner option?', a: 'Buying a platform with a real interface and building only the part that is genuinely yours. It is left out of most build or buy comparisons and it is frequently the right answer.' },
  { q: 'Do you keep my answers?', a: 'No. Nothing you select leaves your browser. We do not receive the answers.' },
];

export default function BuildVsBuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Free framework"
        title="Build it, buy it, or partner? Seven questions that decide it"
        italic={['partner?']}
        lead="A build vs buy decision framework, not a cost calculator. These are the questions that actually settle the direction, including the hybrid option most comparisons leave out. About two minutes. Nothing to fill in first and nothing leaves your browser."
      />
      <section className="wrap pb-24">
        <BuildVsBuy />
      </section>
      <section className="wrap pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Questions</Eyebrow>
            <p className="text-[15px] leading-relaxed text-muted">
              Once the route is clear, the next question is budget: see <Link href="/what-it-costs" className="text-signal">what this work actually costs</Link>. If the open question is who should do the work, compare <Link href="/in-house-vs-agency" className="text-signal">in house, agency or independent</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
