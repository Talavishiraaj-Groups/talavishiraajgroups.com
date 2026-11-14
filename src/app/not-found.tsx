import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap grid min-h-[80vh] place-items-center pt-24 text-center">
      <div>
        <div className="font-serif text-[clamp(6rem,20vw,14rem)] italic leading-none text-signal">404</div>
        <h1 className="mt-6 text-h2 font-medium">This page does not exist, or has moved.</h1>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="rounded-full border border-ink/20 px-6 py-3 hover:border-ink">Home</Link>
          <Link href="/contact" className="rounded-full bg-ink px-6 py-3 text-white hover:bg-signal">Describe your situation</Link>
        </div>
      </div>
    </section>
  );
}
