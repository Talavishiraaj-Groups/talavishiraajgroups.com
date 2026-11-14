import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { BookFlow } from '@/components/BookFlow';
import { SplitWords } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Book a call',
  description: 'Pick a time for a call. Tell us roughly what you are working on first, and we will come to the call having thought about it.',
  robots: { index: false, follow: true },
};

export default function BookPage() {
  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-display font-medium">
            <SplitWords text="Book a call" italic={['call']} />
          </h1>
          <p className="fade-up mt-8 text-lg leading-relaxed text-ink/70" style={{ animationDelay: '0.3s' }}>
            Pick a time that suits you. Tell us roughly what you are working on when you book, and we will come to the call having thought about it rather than asking you to start from the beginning.
          </p>
          <ul className="mt-10 space-y-4">
            {['No preparation needed, and no deck.', 'If we are not the right people for it, we will say so and point you elsewhere.', 'Nothing is expected of you afterwards.'].map((t) => (
              <li key={t} className="flex gap-3 text-[16px]">
                <Check className="mt-1 h-4 w-4 shrink-0 text-signal" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <BookFlow />
        </div>
      </div>
    </section>
  );
}
