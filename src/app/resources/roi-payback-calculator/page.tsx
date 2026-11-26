import type { Metadata } from 'next';
import { CalculatorPage } from '@/components/CalculatorPage';
import { RoiCalculator } from '@/components/RoiCalculator';
import { withLegacySeo } from '@/lib/seo';

const PATH = '/resources/roi-payback-calculator';
const DESCRIPTION =
  'Free ROI and payback period calculator for software, automation and AI projects: enter the cost, hours saved and running costs to see payback months and 1 and 3 year ROI.';

export const metadata: Metadata = withLegacySeo(PATH, { title: 'ROI and payback period calculator', description: DESCRIPTION });

const faq = [
  {
    q: 'How do you calculate the payback period?',
    a: 'Divide the one-off cost by the net benefit each month, where net benefit is the money saved or earned each month minus running costs. A $60,000 project that nets $4,400 a month pays back in about 13.6 months.',
  },
  {
    q: 'How do you calculate ROI on a software or AI project?',
    a: 'ROI is the total net benefit over a period minus the cost, divided by the cost, shown as a percentage. Over one year that is (net monthly benefit times 12, minus the cost) divided by the cost.',
  },
  {
    q: 'What is a good payback period?',
    a: 'Many finance teams accept 12 to 24 months for a technology investment, but use the threshold your business applies to any other spend, and set a review date to stop the project if the benefit does not appear.',
  },
];

export default function Page() {
  return (
    <CalculatorPage
      path={PATH}
      name="ROI and payback period calculator"
      description={DESCRIPTION}
      lead="Put in what a software, automation or AI project costs and what it saves, and see how many months it takes to pay back and the return after one and three years. Your numbers stay in your browser."
      faq={faq}
      related={[
        { href: '/blog/how-to-measure-ai-roi', label: 'how to measure AI ROI' },
        { href: '/resources/software-development-cost-calculator', label: 'the software development cost calculator' },
        { href: '/resources/ai-integration-cost-calculator', label: 'the AI integration cost calculator' },
      ]}
    >
      <RoiCalculator />
    </CalculatorPage>
  );
}
