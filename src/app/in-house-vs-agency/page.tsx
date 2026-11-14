import type { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { PageHero } from '@/components/PageHero';
import { CompareArt } from '@/components/illustrations';
import { Reveal } from '@/components/motion';
import { Accordion, CtaBand, Eyebrow } from '@/components/ui';

export const metadata: Metadata = {
  title: 'In house, agency, or an independent read first',
  description: 'How building in house, hiring a development agency, hiring a management consultancy and taking an independent read first compare across seven criteria.',
};

const cols = ['Your own team', 'Development agency', 'Management consultancy', 'Independent read first'];
// best: index of the column that is genuinely strongest on that row (-1 = none)
const rows: { k: string; v: string[]; best: number }[] = [
  { k: 'How fast you can start', best: 0, v: ['Immediately, if the people are free. They rarely are, and pulling them off the roadmap has its own cost.', 'Weeks. Scoping, proposal and contracting before anyone writes code.', 'Weeks to months, and the engagement is usually larger than the question.', 'Days, because the scope is the decision rather than the build.'] },
  { k: 'What it costs', best: 3, v: ['Salaries you are already paying, plus the opportunity cost of what those people are not doing.', 'The largest number of the four, and the one most likely to grow. Integration and maintenance are commonly outside the quote.', 'High, and you are buying a recommendation rather than a working system.', 'The smallest of the four by a wide margin, and the only one that can end with you spending nothing else.'] },
  { k: 'Who owns the outcome', best: 0, v: ['You do, completely. There is nobody to escalate to when it slips.', 'Shared, and the boundary is whatever the contract says. Where several vendors are involved, often nobody.', 'Nobody. The deliverable is the advice, and execution is somebody else’s problem.', 'You do, which is the point. The output is a decision you can act on with or without us.'] },
  { k: 'Depth of knowledge about your business', best: 0, v: ['Total. Your team knows the history, the politics and which processes are fiction.', 'Shallow at the start and better by the end, though most of it leaves when the engagement does.', 'Built quickly and deliberately, then documented and handed over.', 'Enough for the decision in hand, and no more. That is a limitation, not a feature.'] },
  { k: 'Incentive to tell you not to build it', best: 3, v: ['Mixed. An internal team that wants the work is not neutral about whether the work exists.', 'None. They are paid to build, so the honest answer and the commercial answer align only by coincidence.', 'Partial. They are not paid to build it, but they are paid for the next phase.', 'This is the whole job. The engagement ends either way, so a no costs us nothing and saves you the build.'] },
  { k: 'When the answer turns out to be wrong', best: 3, v: ['You absorb it, and the people who made the call are the people who have to fix it.', 'A change request, usually chargeable.', 'A follow on engagement.', 'Nothing to absorb yet, because the commitment has not been made.'] },
  { k: 'Best when', best: -1, v: ['The problem is well understood, the capability is core to your business, and you have the people.', 'The requirement is settled, the work is clearly scoped, and you need capacity you do not have.', 'The question is organizational rather than technical and spans several functions.', 'You are about to commit serious money and cannot yet say, with evidence, that it is the right commitment.'] },
];

const faqs = [
  { q: 'Should I build software in-house or hire an agency?', a: 'Build in-house when the capability is core, the requirement is well understood, and you genuinely have the people free. Hire an agency when the requirement is settled and what you lack is capacity. In-house cost is hidden rather than absent; an agency quote typically covers the build and not the integration or the years of maintenance after it.' },
  { q: 'What is the difference between a development agency and a consultancy?', a: 'An agency builds what you ask for and is paid to build it. A consultancy analyses the problem and hands over a recommendation, usually without building anything. An agency has no commercial reason to tell you the project should not happen, and a consultancy has no obligation to make its recommendation work.' },
  { q: 'Why would I pay for an assessment instead of just starting the build?', a: 'Because it is the cheapest of the four routes and the only one that can end with you spending nothing further. Projects that defined the requirement first land within roughly 10 to 15 percent of budget; projects that skipped it run 30 to 60 percent over.' },
  { q: 'Is an independent assessment just a sales process for the build?', a: 'A fair question to ask of anyone who offers both. Ask what the deliverable is if the answer is no, whether the fee changes depending on the recommendation, and whether you can take the output to a different firm. If the answers are vague, treat the assessment as a proposal.' },
];

export default function InHousePage() {
  return (
    <>
      <PageHero
        aside={<div className="fade-up" style={{ animationDelay: '0.5s' }}><CompareArt /></div>}
        eyebrow="Choosing a route"
        title="In house, agency, or an independent read first"
        italic={['independent', 'read']}
        lead="Build in house when the capability is core and you genuinely have the people free. Hire an agency when the requirement is settled and what you lack is capacity. Bring in a consultancy when the question is organizational. Get an independent read first when you cannot yet say, with evidence, that the commitment is the right one."
      />
      <section className="wrap pb-10">
        <p className="max-w-3xl text-[15px] leading-relaxed text-muted">
          We do one of these four. The table says where the other three are better, because a comparison where one column wins every row is marketing. <span className="rounded bg-mint/20 px-1.5 text-ink">Highlighted cells</span> mark where a route is genuinely strongest. Three of the seven go to routes other than ours.
        </p>
      </section>
      <section className="wrap pb-24">
        <div className="overflow-x-auto rounded-3xl border border-line bg-white">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[16%] border-b border-line p-5" />
                {cols.map((c, i) => (
                  <th key={c} className={clsx('border-b border-l border-line p-5 align-bottom', i === 3 && 'bg-signal/[0.06]')}>
                    <div className="text-[10px] text-muted">Route {i + 1}</div>
                    <div className="mt-2 text-lg font-medium tracking-tight">{c}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={r.k} className="align-top">
                  <th className={clsx('border-line p-5 text-[15px] font-medium', ri < rows.length - 1 && 'border-b')}>{r.k}</th>
                  {r.v.map((v, i) => (
                    <td key={i} className={clsx('border-l border-line p-5 text-[14px] leading-relaxed', ri < rows.length - 1 && 'border-b', i === 3 && 'bg-signal/[0.03]', r.best === i && '!bg-mint/15 text-ink', r.best !== i && 'text-ink/70')}>
                      {r.best === i && <span className="mb-2 inline-block rounded-full bg-mint px-2 py-0.5 text-[10px] text-ink">Strongest</span>}
                      <div>{v}</div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-line bg-white py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 font-medium">Every route except one is paid according to whether the work happens</h2>
          </div>
          <Reveal className="space-y-5 text-[17px] leading-relaxed text-ink/75 lg:col-span-7">
            <p>Your own team wants the project, an agency is paid to build it, and a consultancy is paid for the phase after the recommendation. None of that makes any of them dishonest. It does mean that if you ask them whether to proceed, you are asking someone whose answer costs them something.</p>
            <p>That is the entire argument for doing a small, separate piece of work first. If your decision is already settled, it is not worth doing, and the other three columns are where you should be looking. If it is not settled, <Link href="/products" className="text-signal underline-offset-4 hover:underline">this is what that looks like as a piece of work</Link>.</p>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-6">Questions people ask when choosing</Eyebrow>
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
      <CtaBand title="Not sure which of these you are in?" body="Describe the decision you are facing and we will tell you which route fits, including when it is not us." />
    </>
  );
}
