import Link from 'next/link';
import { capabilities } from '@/content/capabilities';
import { EMAIL, legalNav } from '@/content';
import { LocalTime } from './LocalTime';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-paper2/70">
      <div className="wrap pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-md text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Research, engineering and implementation in one accountable team.
            </p>
            <a href={`mailto:${EMAIL}`} className="link-u mt-8 inline-block text-lg text-signal">
              {EMAIL}
            </a>
            <div className="mt-10 grid max-w-sm grid-cols-2 gap-4 text-[11px] text-muted">
              <LocalTime label="New York" tz="America/New_York" />
              <LocalTime label="London" tz="Europe/London" />
              <LocalTime label="Dubai" tz="Asia/Dubai" />
              <LocalTime label="Bengaluru" tz="Asia/Kolkata" />
            </div>
          </div>
          <FooterCol title="Capabilities" className="md:col-span-3" links={capabilities.map((c) => ({ href: `/services/${c.slug}`, label: c.name }))} />
          <FooterCol
            title="Company"
            className="md:col-span-2"
            links={[
              { href: '/about', label: 'About' },
              { href: '/products', label: 'Prism' },
              { href: '/case-studies', label: 'Case studies' },
              { href: '/sectors', label: 'Sectors' },
              { href: '/partnerships', label: 'Partnerships' },
              { href: '/careers', label: 'Careers' },
              { href: '/contact', label: 'Contact' },
              { href: '/community', label: 'Keep in touch' },
            ]}
          />
          <FooterCol
            title="Decide"
            className="md:col-span-2"
            links={[
              { href: '/insights', label: 'Insights' },
              { href: '/build-vs-buy', label: 'Build vs buy' },
              { href: '/what-it-costs', label: 'What it costs' },
              { href: '/in-house-vs-agency', label: 'In house vs agency' },
              { href: '/resources', label: 'Resources' },
            ]}
          />
        </div>

        <div className="mt-20 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-6 text-[13px] text-muted">
          {legalNav.map((l) => (
            <Link key={l.slug} href={`/${l.slug}`} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
          <span className="ml-auto flex gap-6">
            <a href="https://www.linkedin.com/company/talavishiraaj-groups/" className="hover:text-ink" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/talavishiraaj" className="hover:text-ink" target="_blank" rel="noreferrer">X / Twitter</a>
          </span>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none mt-10 select-none whitespace-nowrap px-4 text-center font-semibold leading-[0.8] tracking-[-0.06em] text-ink/[0.05]" style={{ fontSize: 'clamp(4rem, 17vw, 17rem)' }}>
        Talavishiraaj
      </div>
      <div className="wrap flex justify-between pb-6 text-[12px] text-muted">
        <span>© {new Date().getFullYear()} Talavishiraaj Groups</span>
        <span>Engineering · AI · Research</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className }: { title: string; links: { href: string; label: string }[]; className?: string }) {
  return (
    <div className={className}>
      <div className="eyebrow mb-5 text-muted">{title}</div>
      <ul className="space-y-3 text-[15px] text-ink/75">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition-colors hover:text-signal">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
