import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Donut, QuoteSpread, RangeBars } from '@/components/visuals';
import { Reveal } from '@/components/motion';
import { Accordion, CtaBand, Eyebrow, SectionHead } from '@/components/ui';

export const metadata: Metadata = {
  title: 'What custom software and AI work actually costs',
  description: 'Published market figures on build cost, total cost of ownership, integration, maintenance and overruns, with every source named.',
};

const questions = [
  { t: 'What is the three year total, split into build, running and change?', d: 'A quote that covers only the build is not a cost, it is a deposit. A firm that cannot produce the three year figure has scoped a demonstration rather than a project.' },
  { t: 'What is excluded, in writing?', d: 'Testing, monitoring, integration and post launch support are where a low number hides its real cost. Get the exclusions listed rather than described.' },
  { t: 'Who maintains this in year two, and have they been told?', d: 'The answer is revealing more often than it should be. A system nobody has been assigned to is a system that degrades quietly.' },
  { t: 'What happens to the number if the requirement changes?', d: 'Requirements always change. What matters is whether the contract treats that as a costed change with an agreed rate, or as an argument.' },
  { t: 'What would make you tell me not to build this?', d: 'If a firm has no answer, they have no criteria, and you are the one carrying the risk of a project that should not have started.' },
];

const faqs = [
  { q: 'Why do quotes for the same project vary so much?', a: 'Because the brief is usually underspecified, so each firm is quoting a different project. A low quote often assumes a narrower scope, excludes integration, testing, monitoring and post launch support, or prices a demonstration rather than a production system.' },
  { q: 'How long does custom software take to build?', a: 'A focused MVP takes roughly 8 to 14 weeks, a full web application 3 to 6 months, and enterprise work 6 to 18 months. Build projects run about 38 percent over on cost and 42 percent over on timeline on average, so treat any quoted date as a best case unless the scope is genuinely fixed.' },
  { q: 'How do I avoid overpaying for custom software?', a: 'Define the requirement before you ask for a number. Ask every firm for the three year total broken into build, running and change rather than the build figure alone, and ask what is excluded in writing.' },
  { q: 'Does Talavishiraaj Groups publish its rates?', a: 'No. Any firm that can quote your project before understanding the requirement is quoting a different project. We scope the work first and then give you a fixed number for it, and we will tell you when the work does not justify itself before a proposal exists.' },
];

const timelines = [
  { l: 'Focused MVP', a: 8, b: 14, u: 'weeks', max: 78 },
  { l: 'Full web application', a: 13, b: 26, u: 'weeks', max: 78 },
  { l: 'Enterprise work', a: 26, b: 78, u: 'weeks', max: 78 },
];

export default function CostsPage() {
  return (
    <>
      <PageHero
        eyebrow="What it costs"
        title="What custom software and AI work actually costs"
        italic={['actually']}
        lead="Published build ranges run from roughly $25,000 for a narrow MVP to $400,000 or more for an enterprise platform, and the average project ran about $132,000 and took 13 months. Those are published market figures, not ours. There is no rate card here, and you should be wary of one anywhere else."
      />

      <section className="wrap pb-12">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ['$25K', 'narrow MVP, low end'],
            ['$132K', 'average project'],
            ['13 mo', 'average duration'],
            ['$400K+', 'enterprise platform'],
          ].map(([a, b], i) => (
            <Reveal key={a} delay={i * 0.08} className="rounded-3xl border border-line bg-white p-7">
              <div className="text-4xl font-medium tracking-tighter md:text-5xl">{a}</div>
              <div className="eyebrow mt-3 text-muted">{b}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-medium">The same brief, quoted ten times apart</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              A ten times spread is not evidence that somebody is lying. It is evidence that each firm is quoting a different project, because the brief did not say enough to pin one down. The cheap quote is usually narrower, excludes integration, or prices a demonstration.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 lg:col-span-7">
            <div className="text-lg font-medium tracking-tight">What one brief gets quoted at</div>
            <p className="text-sm text-muted">Cheapest to most expensive quote for the same requirement, market average marked. Log scale.</p>
            <QuoteSpread />
            <p className="text-[11px] text-muted">Source: ivector, Custom software costs in 2026</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-medium">The number you are quoted is not the number you pay</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              A build quote covers building it. Most of what the software costs you arrives after it works, and it arrives every year. Annual maintenance commonly runs 15 to 25 percent of the original build cost: five independent publishers land in the same band.
            </p>
            <div className="mt-8 flex gap-6 text-sm">
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-ink" /> The build, what you are quoted</span>
              <span className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-ember" /> Running, changing, maintaining</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] lg:col-span-3">
            <Donut value={35} label="35%" sub="OF 5-YEAR TCO" />
          </div>
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-line bg-paper p-7">
              <div className="font-medium tracking-tight">The two costs most often left out</div>
              <p className="mb-6 text-sm text-muted">As a percentage of initial development cost.</p>
              <RangeBars
                rows={[
                  { label: 'Integration, one off', lo: 35, hi: 50, tone: 'signal' },
                  { label: 'Maintenance, every year', lo: 15, hi: 25, tone: 'ember' },
                ]}
              />
              <p className="mt-4 text-[10px] text-muted">Source: VendorBenchmark, Pharos Production, Monterail, Trawlii, Mobisoft</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl bg-signal p-8 text-white md:p-12">
            <Eyebrow className="mb-6 text-white/70" dot={false}>03 · AI work</Eyebrow>
            <div className="text-[clamp(3.5rem,8vw,6.5rem)] font-medium leading-none tracking-tighter">1.6 to 2.2×</div>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/85">
              Published figures put the 24 month total for AI deployments at 1.6 to 2.2 times the build cost once inference and retraining are counted. Inference is charged by use, so the bill grows when the thing succeeds.
            </p>
            <Link href="/insights/what-ai-integration-costs" className="mt-8 inline-block underline underline-offset-4">What AI integration costs →</Link>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-line bg-white p-8 md:p-12">
            <Eyebrow className="mb-6">04 · Time</Eyebrow>
            <div className="text-xl font-medium tracking-tight">How long it takes</div>
            <div className="mt-8 space-y-6">
              {timelines.map((t) => (
                <div key={t.l}>
                  <div className="mb-2 flex justify-between text-[15px]">
                    <span>{t.l}</span>
                    <span className="text-sm">{t.l === 'Focused MVP' ? '8 to 14 weeks' : t.l === 'Enterprise work' ? '6 to 18 months' : '3 to 6 months'}</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-ink/[0.06]">
                    <div className="absolute inset-y-0 rounded-full bg-ink" style={{ left: `${(t.a / t.max) * 100}%`, width: `${((t.b - t.a) / t.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">Build projects run about 38% over on cost and 42% over on timeline.</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-paper2/60 py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-medium">One thing reliably predicts whether it lands on budget</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              Not the firm you pick, and not the technology. Whether the requirement was worked out before anyone committed to building it. Worth saying plainly: this figure is published by a firm that sells discovery, and we would do the same work. Treat the direction as sound and the exact numbers as indicative.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white p-8 lg:col-span-7">
            <div className="mb-8 text-lg font-medium tracking-tight">How far over budget projects land</div>
            <RangeBars
              rows={[
                { label: 'Skipped discovery', lo: 30, hi: 60, tone: 'ember' },
                { label: 'Did discovery first', lo: 10, hi: 15, tone: 'signal' },
              ]}
            />
            <p className="mt-6 text-[11px] text-muted">Source: Mobisoft Infotech, from its own project data</p>
          </div>
        </div>
      </section>

      <section className="wrap py-20 md:py-28">
        <SectionHead eyebrow="Before you sign" title="Five questions to ask before you sign anything" lead="These work on us as well as on anyone else, and they are the fastest way to tell a scoped project from a hopeful one." />
        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {questions.map((q, i) => (
            <Reveal as="li" key={q.t} delay={i * 0.06} className="flex flex-col rounded-3xl border border-line bg-white p-6">
              <span className="font-serif text-5xl italic text-signal">{i + 1}</span>
              <h3 className="mt-6 font-medium leading-snug tracking-tight">{q.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{q.d}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="wrap pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Questions people ask about cost</Eyebrow>
            <p className="text-[15px] leading-relaxed text-muted">
              Most published cost data in this category is produced by firms that sell the work, so it is not disinterested. Where several independent publishers agree, that is noted. Ranges are quoted as ranges because that is how they were published.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand title="Want the number for your case?" body="Describe what you are trying to build and we will tell you what it would take, what it would cost, and whether it is worth doing at all." />
    </>
  );
}
