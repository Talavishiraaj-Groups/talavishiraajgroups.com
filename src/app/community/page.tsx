import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { SplitWords } from '@/components/motion';

export const metadata: Metadata = {
  title: 'Keep in touch',
  description: 'Hear from us as we publish research and technical writing relevant to what you are working on.',
  robots: { index: false, follow: true },
};

export default function CommunityPage() {
  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-display font-medium">
            <SplitWords text="Tell us what you would find useful" italic={['useful']} />
          </h1>
          <p className="fade-up mt-8 text-lg leading-relaxed text-ink/70" style={{ animationDelay: '0.3s' }}>
            If you would like to hear from us as we publish research and technical writing, leave your details and a short note on what you are working on. We will only be in touch when there is something genuinely relevant to it.
          </p>
          <p className="mt-6 text-[15px] text-muted">
            If you have a specific project or question, the <Link href="/contact" className="text-signal underline-offset-4 hover:underline">contact page</Link> will reach us faster.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm mode="community" />
        </div>
      </div>
    </section>
  );
}
