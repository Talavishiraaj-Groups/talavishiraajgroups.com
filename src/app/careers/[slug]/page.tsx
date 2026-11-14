import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { ApplyForm } from '@/components/Careers';
import { Crumbs } from '@/components/PageHero';
import { SplitWords } from '@/components/motion';
import { DATE_POSTED, findRole, hiringSteps, payDetail, roles } from '@/content/careers';

const BASE = 'https://www.talavishiraajgroups.com';

export const dynamicParams = false;
export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = findRole((await params).slug);
  if (!r) return {};
  return {
    title: `${r.title} (Remote, Commission)`,
    description: `${r.summary} Commission only, fully remote, open in India and internationally.`,
    alternates: { canonical: `/careers/${r.slug}` },
  };
}

function List({ title, items, tick }: { title: string; items: string[]; tick?: boolean }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex gap-4 text-[16px] leading-relaxed">
            {tick ? <Check className="mt-1 h-4 w-4 shrink-0 text-signal" /> : <span className="mt-[11px] h-px w-4 shrink-0 bg-ink/40" />}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const role = findRole((await params).slug);
  if (!role) notFound();

  const facts: [string, string][] = [
    ['Pay', 'Commission only, uncapped'],
    ['Location', 'Remote, India and international'],
    ['Basis', 'Independent contractor'],
    ['Hours', role.hours],
  ];

  // Google for Jobs structured data. No salary is published because commission is agreed per person.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: [...role.about, 'What you will do: ' + role.do.join(' '), 'What we are looking for: ' + role.need.join(' '), ...payDetail].map((p) => `<p>${p}</p>`).join(''),
    datePosted: DATE_POSTED,
    employmentType: 'CONTRACTOR',
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: [{ '@type': 'Country', name: 'India' }, { '@type': 'Country', name: 'Worldwide' }],
    hiringOrganization: { '@type': 'Organization', name: 'Talavishiraaj Groups', sameAs: BASE, logo: `${BASE}/logo.png` },
    directApply: true,
    url: `${BASE}/careers/${role.slug}`,
  };

  const others = roles.filter((r) => r.slug !== role.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="pb-12 pt-32 md:pt-40">
        <div className="wrap">
          <Crumbs items={[{ href: '/careers', label: 'Careers' }, { label: role.title }]} />
          <h1 className="mt-8 max-w-4xl text-display font-medium">
            <SplitWords text={role.title} />
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-xl leading-relaxed text-ink/70" style={{ animationDelay: '0.3s' }}>
            {role.summary}
          </p>
          <dl className="fade-up mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" style={{ animationDelay: '0.45s' }}>
            {facts.map(([k, v]) => (
              <div key={k} className="bg-paper p-5">
                <dt className="text-[13px] text-muted">{k}</dt>
                <dd className="mt-1 text-[15px] font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="wrap grid gap-12 pb-20 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <section className="py-10">
            <h2 className="text-2xl font-medium tracking-tight">About the role</h2>
            {role.about.map((p) => (
              <p key={p} className="mt-5 text-lg leading-relaxed text-ink/80">{p}</p>
            ))}
          </section>
          <List title="What you will do" items={role.do} />
          <List title="What we are looking for" items={role.need} tick />
          <List title="Good to have" items={role.plus} />
          <List title="What good looks like after 90 days" items={role.measure} />
          <section className="border-t border-line py-10">
            <h2 className="text-2xl font-medium tracking-tight">How you are paid</h2>
            {payDetail.map((p) => (
              <p key={p} className="mt-5 text-[16px] leading-relaxed text-ink/80">{p}</p>
            ))}
          </section>
          <section className="border-t border-line py-10">
            <h2 className="text-2xl font-medium tracking-tight">How hiring works</h2>
            <ol className="mt-6 grid gap-6 sm:grid-cols-2">
              {hiringSteps.map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="text-xs text-signal">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <span className="font-medium">{t}.</span> <span className="text-muted">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </article>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 rounded-3xl bg-ink p-8 text-paper">
            <p className="text-[13px] text-paper/60">Suits</p>
            <p className="mt-2 text-lg leading-snug tracking-tight">{role.suits}</p>
            <a href="#apply" className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-ink">
              Apply for this role <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-6 text-[13px] leading-relaxed text-paper/60">Learn what we sell before you apply: our <Link href="/services" className="underline">capabilities</Link> and <Link href="/case-studies" className="underline">case studies</Link>.</p>
          </div>
        </aside>
      </div>

      <section id="apply" className="scroll-mt-24 border-t border-line bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h2 font-medium">Apply</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">Two minutes. A CV or a LinkedIn link is enough.</p>
          </div>
          <div className="lg:col-span-8">
            <ApplyForm initialRole={role.title} />
          </div>
        </div>
      </section>

      <section className="wrap py-20">
        <h2 className="text-2xl font-medium tracking-tight">Other roles</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((r) => (
            <li key={r.slug}>
              <Link href={`/careers/${r.slug}`} className="group block h-full rounded-2xl border border-line p-5 transition-colors hover:border-ink/40">
                <span className="font-medium tracking-tight group-hover:text-signal">{r.title}</span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{r.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
