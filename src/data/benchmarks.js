/**
 * Market benchmark figures used in public copy.
 *
 * Why this file exists separately from everything else: the content check bans
 * currency amounts in public copy so our own fees cannot leak onto the site.
 * That ban is correct and stays. But the Prism page argues about what a build
 * actually costs, and that argument is worthless without numbers. The way to
 * have both is to keep every figure here, require each one to name where it
 * came from, and let the checker enforce that rather than trusting prose.
 *
 * Rules enforced by scripts/check-content.mjs:
 *   - every entry must have a non-empty `claim`, `source` and `url`
 *   - our own price points are still banned here, as everywhere else
 *
 * Rule for whoever edits this next: if you cannot name the source, the figure
 * does not go on the site. Delete it instead.
 *
 * `figures` holds the same numbers in machine readable form, so a chart can be
 * drawn from the identical values the prose quotes and the two can never drift.
 * The numbers there are bare, with no currency symbol, which is why they would
 * pass the checker anywhere. They live here anyway: a figure and its source
 * belong in the same place, and splitting them is how a chart ends up making a
 * claim nobody can trace.
 *
 * A caveat that belongs in the file rather than only in someone's head: most
 * published cost data in this category is produced by firms that sell the
 * build, so it is not disinterested. Where a source rests on primary research
 * rather than its own sales pages, `basis` says so. Figures are quoted as
 * ranges because that is how they were published.
 */

export const benchmarks = {
  buildRanges: {
    claim: 'Published build ranges run from roughly $25,000 for a narrow MVP to $400,000 or more for an enterprise platform',
    source: 'Monterail, Trawlii and ivector published 2026 ranges',
    url: 'https://www.monterail.com/blog/software-development-cost-breakdown-by-project-type',
    basis: 'Vendor published price guides. Directional only, and they disagree with each other, which is itself the point.',
  },
  quoteSpread: {
    claim: 'The same brief is routinely quoted at $40,000 by one firm and $400,000 by another',
    source: 'ivector, Custom software costs in 2026',
    url: 'https://www.ivector.co/blog/software-development-cost-2026',
    basis: 'Vendor account of its own market.',
    figures: { low: 40000, high: 400000, unit: 'USD' },
  },
  clutchAverage: {
    claim: 'The average custom software project ran about $132,000 and took 13 months',
    source: 'Clutch 2026 project cost data, reported by Mobisoft Infotech',
    url: 'https://mobisoftinfotech.com/resources/blog/product-engineering/custom-software-development-cost',
    basis: 'Clutch aggregates buyer reported project data. Reported second hand here.',
    figures: { average: 132000, months: 13, unit: 'USD' },
  },
  maintenance: {
    claim: 'Annual maintenance commonly runs 15 to 25 percent of the original build cost, every year',
    source: 'Converges across VendorBenchmark, Pharos Production, Monterail, Trawlii and Mobisoft',
    url: 'https://pharosproduction.com/insights/engineering/state-of-custom-software-tco-2026/',
    basis: 'The strongest figure here. Five independent publishers land in the same band, and Pharos attributes it to the Google SRE Book economics chapter and ThoughtWorks field reports rather than to its own data.',
    figures: { lowPct: 15, highPct: 25 },
  },
  tcoShare: {
    claim: 'Initial build cost rarely exceeds 35 percent of five year total cost of ownership',
    source: 'Pharos Production, State of Custom Software TCO 2026',
    url: 'https://pharosproduction.com/insights/engineering/state-of-custom-software-tco-2026/',
    basis: 'Single publisher. Consistent in direction with the maintenance figure above.',
    figures: { buildSharePct: 35 },
  },
  integrationCost: {
    claim: 'Integration work commonly runs 35 to 50 percent of initial development cost and is the most frequent source of overrun',
    source: 'VendorBenchmark build project post mortems',
    url: 'https://vendorbenchmark.com/blog/build-vs-buy-decision-benchmark-enterprise',
    basis: 'Vendor that sells benchmarking. Mobisoft separately attributes 42 percent of overruns to integration.',
    figures: { lowPct: 35, highPct: 50 },
  },
  overrun: {
    claim: 'Build projects run about 38 percent over on cost and 42 percent over on timeline',
    source: 'VendorBenchmark post mortem analysis',
    url: 'https://vendorbenchmark.com/blog/build-vs-buy-decision-benchmark-enterprise',
    basis: 'Directionally supported by the Flyvbjerg and Budzier study of 1,471 projects, which Pharos cites for the same effect.',
  },
  discovery: {
    claim: 'Projects that did real discovery before committing land within about 10 to 15 percent of budget, while projects that skipped it run 30 to 60 percent over',
    source: 'Mobisoft Infotech, from its own project data',
    url: 'https://mobisoftinfotech.com/resources/blog/product-engineering/custom-software-development-cost',
    basis: 'Single vendor, and one with an obvious interest in selling discovery. Quoted because it is the clearest published statement of the effect, not because it is neutral.',
    figures: { withLowPct: 10, withHighPct: 15, withoutLowPct: 30, withoutHighPct: 60 },
  },
  timelines: {
    claim: 'A focused MVP takes roughly 8 to 14 weeks, a full web application 3 to 6 months, and enterprise work 6 to 18 months',
    source: 'Trawlii 2026 cost and timeline guide',
    url: 'https://trawlii.com/blog/custom-software-development-cost-2026',
    basis: 'Vendor published guide.',
  },
  aiTco: {
    claim: 'AI deployments routinely reach 1.6 to 2.2 times the build cost over 24 months once inference and retraining are counted',
    source: 'Monterail, Real World Software Development Cost Breakdown',
    url: 'https://www.monterail.com/blog/software-development-cost-breakdown-by-project-type',
    basis: 'Single publisher. Included because the ongoing cost of AI specifically is almost never in a build quote.',
  },
};

/** Every benchmark actually cited on a public page, for the sources list. */
export const citedBenchmarks = Object.values(benchmarks);

export default benchmarks;
