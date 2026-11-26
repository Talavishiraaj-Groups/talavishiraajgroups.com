---
title: "Data migration risks: lessons from Capita's pension failure"
description: "The data migration risks that sink a switch to a new vendor or system, what the Capita pensions failure shows, and the go-live checks to run before cutover."
date: 2026-11-24
author: Dhiraj T H
keyword: data migration risks
tags: [Migration, Operations, Vendor risk]
cover: { motif: layers, palette: night }
answer: "The biggest data migration risks are moving a backlog you have not measured, going live before the new system's automation works, having no way to spot failure early, ignoring readiness warnings, and signing a contract with no workable exit. Capita's takeover of the UK civil service pension scheme hit several of these. Set go-live criteria you can test, run both systems in parallel, and plan the exit before you sign."
faq:
  - q: "What are the most common challenges during a data migration?"
    a: "Messy or incomplete source data, work in progress that has to move mid-flight, new automation that is not ready on day one, and no early warning when cases start to pile up. Staff and customers also hit new screens and new processes at the same time, which slows everything down in the first weeks."
  - q: "How long should a data migration take?"
    a: "There is no standard number, because it depends on data volume, data quality and how much live work has to move. The Capita case shows that calendar time alone proves nothing: it had a two-year transition period and still struggled after go-live. Judge readiness by tested criteria, not by how long the project has run."
  - q: "Who administered the civil service pensions before Capita?"
    a: "MyCSP ran the Civil Service Pension Scheme until the end of November 2025. Capita took over on 1 December 2025 under a seven-year, £239 million contract awarded by the Cabinet Office in 2023."
  - q: "Is the UK government taking civil service pensions back from Capita?"
    a: "Computer Weekly reported on 23 November 2026 that the government has decided to bring the service in-house, with no timeline given. In October 2026 a Cabinet Office minister told the House of Commons that officials were evaluating options, including insourcing all core operations."
sources:
  - title: "The Guardian: Capita boss exits and shares crash after civil service pensions failures (23 November 2026)"
    url: "https://www.theguardian.com/business/2026/nov/23/capita-boss-exits-shares-crash-civil-service-pensions-failures"
  - title: "Computer Weekly: Capita CEO Adolfo Hernandez resigns over botched contract (23 November 2026)"
    url: "https://www.computerweekly.com/news/366655117/Capita-CEO-Adolfo-Hernandez-resigns-over-botched-contract"
  - title: "House of Commons Library: Administration of the Civil Service Pension Scheme (28 October 2026)"
    url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10479/"
  - title: "National Audit Office: Transfer of the Civil Service Pension Scheme to Capita"
    url: "https://www.nao.org.uk/work-in-progress/transfer-of-the-civil-service-pension-scheme-to-capita/"
  - title: "Federal Reserve, FDIC and OCC: Interagency Guidance on Third-Party Relationships: Risk Management (2023)"
    url: "https://www.govinfo.gov/content/pkg/FR-2023-06-09/html/2023-12340.htm"
  - title: "BBC News: Capita shares plunge 70% as boss quits after civil service pensions failure (23 November 2026)"
    url: "https://www.bbc.co.uk/news/articles/c65y1qqw3kjxo"
---

Data migration risks just cost a chief executive the job. On 23 November, Adolfo Hernandez left Capita after admitting the company had "not delivered" for members of the UK civil service pension scheme it took over in December 2025. Its shares fell as much as 70% that day. If you are moving to a new vendor or system, the same failures can happen to you.

```stats
[ { "value": "1.7 million", "label": "Members of the Civil Service Pension Scheme that Capita took over on 1 December 2025" }, { "value": "2 years", "label": "Length of the transition period Capita had before go-live (National Audit Office)" }, { "value": "£22.1m", "label": "Support loans the government paid to more than 3,900 members by August 2026, about $29 million" }, { "value": "£85m to £95m", "label": "Expected hit to Capita's 2027 adjusted operating profit, announced 23 November 2026" } ]
```

## What went wrong when Capita took over the pension scheme?

A large, live service moved from one provider to another, and the new provider could not run it at the promised level. The full cause is not public yet: the National Audit Office (NAO) plans to report on the transfer this winter.

Here is what the public record shows. The Cabinet Office awarded Capita a seven-year contract worth £239 million (about $310 million) in 2023. Capita replaced MyCSP as administrator on 1 December 2025, after a two-year transition period, according to the [NAO](https://www.nao.org.uk/work-in-progress/transfer-of-the-civil-service-pension-scheme-to-capita/). In October 2025, Parliament's Public Accounts Committee had warned of a clear risk that Capita would not be ready.

By January 2026 a troubleshooter from HM Revenue and Customs (HMRC), the UK tax authority, was leading a recovery plan, with 150 HMRC staff moved across, Computer Weekly reported. Some retired civil servants waited close to a year for their pensions. On 30 September 2026, 1,311 bereavement cases were still more than 100 days old, according to the [Cabinet Office's own update](https://www.gov.uk/government/publications/civil-service-pension-recovery-plan-updates/civil-service-pension-recovery-plan-update-5-october-2026).

In October, a Cabinet Office minister told members of Parliament what an independent adviser, Grant Thornton, had found. In a service that relied on automation, Capita "did not deliver the promised technology". It had not used the right methods to understand demand and capacity. And it "had not put in place effective mechanisms to detect and escalate failure", as quoted in the [House of Commons Library briefing](https://commonslibrary.parliament.uk/research-briefings/cbp-10479/).

## What are the biggest data migration risks?

The biggest risks are rarely about copying records from one database to another. They are about the live work, the new system's readiness, and whether anyone can see trouble early. Most of them showed up in the Capita case.

| Risk | How it showed up at Capita | What to do about it |
| --- | --- | --- |
| Moving a backlog nobody has measured | AJ Bell's Russ Mould told the BBC Capita "inherited an enormous backlog of cases" | Count open cases by type and age before cutover, and agree who clears them |
| Going live before automation works | The adviser found the promised technology was not delivered | Make working automation a go-live test, with a manual fallback that is staffed and costed |
| No early warning when work piles up | No effective way "to detect and escalate failure" | Agree daily numbers (cases in, cases out, oldest case) and who sees them from day one |
| Readiness warnings ignored | Parliament's committee flagged the risk in October 2025, before go-live | Give a named person the authority to delay go-live, and write down why you went ahead |
| Records that are incomplete | 1,049 old bereavement cases were waiting on information from a third party | Find gaps in the source data before migration, not after |
| No credible exit | Ministers are now weighing insourcing, with no timeline | Write the transition and exit plan into the contract before you sign |

Compare it to moving a busy restaurant to a new kitchen on a Friday night. Carrying the pans across is the easy part. What hurts is the orders already in progress, the new ovens nobody has tested, and nobody watching the ticket rail.

## How long should a data migration take?

Long enough to pass tested go-live criteria, and no longer. There is no standard figure. Capita had two years and still struggled, so the length of a project tells you little about whether it is ready.

The more useful question is what has to be true before you switch. For a system that serves customers or employees, we would want three things proven. A full trial migration of real data, reconciled record by record. A period where old and new systems run side by side on the same cases. And a rollback plan someone has actually rehearsed.

If a vendor cannot show you those, the date is a guess. Our earlier post on [ERP implementation mistakes](/blog/erp-implementation-mistakes) covers the same pattern for back office systems, where dirty data and rushed timelines are among the most common causes of overruns.

## How do you know a vendor is ready to go live?

Ask for evidence, not status reports. A green dashboard means little unless it rests on tests you can repeat.

```steps
["Run a full dress rehearsal migration on a copy of production data and reconcile counts and values by record type", "Process a sample of real cases end to end in the new system, including the awkward ones such as deaths, disputes and refunds", "Agree the go or no go criteria in writing a month before cutover, with one named person who can say no", "Publish daily numbers from day one: cases received, cases closed, cases over 30 days old", "Keep the old provider or system available for a fixed period so you can fall back", "Hold back part of the vendor's fee until service levels are met for an agreed run of weeks"]
```

The last point has teeth. Russ Mould told the BBC that milestone payments to Capita were withheld, and the minister said the government is holding back nearly £10 million, according to the Commons Library briefing. Levers like that only exist if the contract includes them.

If you are replacing an old system at the same time as changing vendors, you are stacking two risks. Our guide to [legacy system modernization](/insights/legacy-system-modernization) explains how to stage that so you are not doing both on the same weekend.

## What should a contract say about exit and transition?

It should say how you would leave before you arrive. The time you most need an exit plan is when the vendor is failing, and that is the worst time to write one.

US bank regulators set out the questions in their 2023 [interagency guidance on third-party relationships](https://www.govinfo.gov/content/pkg/FR-2023-06-09/html/2023-12340.htm). When ending a relationship, they say a bank typically considers alternate providers, the capabilities and time needed to move the work or bring it in-house, termination costs and fees, data retention and destruction, system connections and access, and the impact on customers. That list was written for banks, but it fits any company handing a critical process to an outside firm.

In the UK, Parliament's committee had already asked the Cabinet Office in 2025 to set out the costs and benefits of running the scheme in-house. In the EU, financial firms covered by the Digital Operational Resilience Act must have exit strategies for technology services that support critical or important functions, under [Article 28](https://www.digital-operational-resilience-act.com/Article_28.html). If you sell into regulated sectors such as [financial services](/sectors/financial-services), expect customers to ask how they would leave you.

Two clauses matter most. Data in a format you can use without the vendor's software, delivered on request and at exit. And a duty to help with transition, at agreed rates, for a fixed period. Our explainer on [vendor lock-in](/insights/what-is-vendor-lock-in) covers the rest.

## What should you do if you are switching vendors now?

Check three things this week. Do you know exactly how much open work will move, by type and age? Has anyone tested the new system on your hardest cases? Can someone stop the go-live, and do they know it?

If any answer is no, move the date before the date moves you. A delayed cutover is an awkward conversation with your board. A failed one, as Capita found, can be far more expensive. Planning the cutover and checking a vendor's readiness are part of [implementation and delivery](/services/implementation-and-delivery), and they deserve as much attention as choosing the vendor did.
