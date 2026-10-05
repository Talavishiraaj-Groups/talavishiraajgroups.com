# Focused Microsite Strategy: Build vs Buy

**Status:** one useful decision tool is implemented at `/build-vs-buy` on the main Talavishiraaj Groups domain. This is a test of whether a decision-specific resource attracts and converts qualified buyers. It is not evidence that several satellite sites will rank or generate revenue.

## Strategic thesis

A small, focused experience can make the build/buy decision easier to understand and give founders something useful to use and share. The asset is the worksheet and its distribution. The URL alone does not create demand.

The first audience is a founder or owner weighing a consequential build, buy, or technology investment decision. The worksheet compares only user-entered costs over the same period. It does not choose a direction, claim a market benchmark, or collect the visitor's numbers.

This fits the Prism research's limit of one decision guide, one enquiry path, and one qualifying conversation. It stays on the main domain to keep the product, resource, and enquiry journey together. A separate domain or subdomain can be considered if a genuinely separate product or audience is proven and has its own operating owner.

## What exists

- `/build-vs-buy` compares build and buy totals over 1, 3, or 5 years.
- The visitor supplies one-time and yearly costs, and chooses a currency.
- Inputs stay in the browser. The tool sends no cost values to the server or analytics.
- The result says which entered total is lower and clearly states that cost alone is not a recommendation.
- The guide surfaces fit, control, operating ownership, exit, and uncertainty questions.
- The next step leads to `/contact?intent=prism`, where visitors can book or send a message.

## Distribution plan

### 1. Make the asset trustworthy

- Add the named operator and verifiable experience to the product page when the owner supplies it.
- Review every quantitative FAQ claim and cite its source visibly, or remove unsupported figures.
- Configure a privacy-appropriate analytics provider and Search Console before judging performance. Event calls currently do nothing when no provider is configured.
- Set and redeploy the public Cal booking link; configure the server-only webhook secret and SMTP values in production.

### 2. Distribute the one resource directly

- Share the worksheet from the founder's LinkedIn profile with a short worked example using fictional numbers clearly labelled as an example, or with a real example that has permission.
- Offer it to relevant founder groups, advisors, and technology partners as a useful decision resource, not as a generic company listing.
- Submit it only to directories or launch platforms whose audience and rules fit an actual free tool. Do not buy links or mass-submit near-duplicate listings.
- Use tagged links for each distribution source. Do not call a click or visit a lead.

### 3. Learn before expanding

Review the first 30 days for usability and distribution, then make a 90-day decision from qualified outcomes. Keep a single worksheet until evidence shows that another distinct decision has a reachable audience and a different useful tool or guide.

Replicate only when the first resource produces qualified conversations or paid Prism work and the next topic can offer genuinely different evidence, calculations, or workflow. Each microsite must answer a different real buyer job, carry its own proof and author responsibility, and have a maintained route into the same contact hub.

## Measurement

Track:

1. Visits by source and search query.
2. Worksheet starts and completed comparisons.
3. Clicks from the result to the Prism enquiry path.
4. Qualified conversations, booked calls, proposals, and paid engagements attributable to each source.
5. Referrals and relevant editorial links earned by the resource.

Primary success measure: paid Prism engagements attributable to a source, with qualified conversations as the leading indicator. Raw sessions, directory counts, and tool completions are diagnostic measures, not revenue.

The current analytics adapter is dormant until a real provider is configured. The code records tool-start and tool-complete events without sending the entered values. Do not report an increase in traffic, conversion, or revenue until production data supports it.

## Guardrails and open inputs

- Do not create city pages, industry clones, or multiple domains that send substantially similar searchers to the same Prism form. Google's spam policy describes these patterns as doorway abuse.
- Make the worksheet useful to a visitor arriving directly. Google recommends original, people-first content that demonstrates expertise and satisfies the visitor's goal.
- Keep cost inputs explicitly user-supplied. Do not add generic build or subscription averages without a source, date, geography, and scope.
- Keep the public Prism price hidden until the owner resolves the conflict between the older no-public-pricing rule and the later recommendation to show $2,499.
- Owner input still needed: named operator and proof; decision on public price; production analytics/Search Console access; confirmation that Cal and SMTP production configuration is complete; permission for any named case study.
- A new domain requires domain ownership, DNS, deployment, privacy, and measurement setup. The current implementation is a focused microsite experience under the existing domain and needs no new domain claim.

## Search guidance checked

- Google recommends people-first content with clear expertise and a satisfying visitor experience: <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>
- Google's doorway abuse examples include multiple similar websites or pages that funnel users to one destination: <https://developers.google.com/search/docs/essentials/spam-policies>

The search guidance does not promise faster rankings or more traffic from adding a microsite. Faster visits, if they occur, need to come from active distribution while the search resource earns visibility over time.
