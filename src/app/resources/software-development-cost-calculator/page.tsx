import type { Metadata } from 'next';
import { CalculatorPage } from '@/components/CalculatorPage';
import { SoftwareCostCalculator } from '@/components/SoftwareCostCalculator';
import { withLegacySeo } from '@/lib/seo';

const PATH = '/resources/software-development-cost-calculator';
const DESCRIPTION =
  'Free custom software development cost calculator: 2026 published build ranges by complexity, timelines, compliance uplift, yearly maintenance and the three year total.';

export const metadata: Metadata = withLegacySeo(PATH, { title: 'Software development cost calculator', description: DESCRIPTION });

const faq = [
  {
    q: 'How much does custom software development cost in 2026?',
    a: 'Published 2026 benchmarks from Keyhole Software put a simple build or MVP at $40,000 to $120,000 over 2 to 4 months, a medium project at $120,000 to $300,000 over 4 to 8 months, and a complex system at $300,000 to $1,000,000 or more over 8 to 18 months or longer.',
  },
  {
    q: 'What costs are usually missing from a software quote?',
    a: 'Maintenance, which commonly runs 15 to 25 percent of the build cost every year, plus integration, testing, monitoring and post launch support. Ask for the three year total, not the build price alone.',
  },
  {
    q: 'Does regulated data change the price?',
    a: 'Yes. Compliance work for standards such as HIPAA, PCI DSS or SOC 2 can add 20 to 60 percent to a build budget, according to Tekrevol’s 2026 guide.',
  },
  {
    q: 'Is this your price?',
    a: 'No. These are published market ranges. Send your result through the form and we reply within one business day with a fixed-scope estimate, or tell you if buying an existing product would serve you better.',
  },
];

export default function Page() {
  return (
    <CalculatorPage
      path={PATH}
      name="Software development cost calculator"
      description={DESCRIPTION}
      lead="Three questions give you what published 2026 benchmarks say custom software costs to build, how long it takes, and what it costs over three years once maintenance is counted. No email needed to see the result."
      faq={faq}
      related={[
        { href: '/what-it-costs', label: 'what software costs' },
        { href: '/build-vs-buy', label: 'build or buy' },
        { href: '/resources/roi-payback-calculator', label: 'the ROI and payback calculator' },
      ]}
    >
      <SoftwareCostCalculator />
    </CalculatorPage>
  );
}
