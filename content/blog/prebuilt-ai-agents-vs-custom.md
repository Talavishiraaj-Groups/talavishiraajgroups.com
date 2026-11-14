---
title: "Prebuilt AI agents or a custom build: how to choose in 2026"
description: "IBM and Microsoft now offer over 6,000 ready made agents and Zendesk charges per resolution. When buying beats building, and how to tell for your team."
date: 2026-11-14
author: Talavishiraaj Groups
tags: [AI agents, Build vs buy, Cost]
cover: { motif: network, palette: signal }
answer: "Buy a prebuilt agent when the work is common across companies, lives inside one tool you already pay for, and is priced per outcome you can predict. Build when the work depends on your own data, crosses several systems, or is the thing customers choose you for. Most mid-size teams end up doing both, and the useful decision is where to draw the line."
faq:
  - q: "Are prebuilt AI agents cheaper than building one?"
    a: "Usually at the start, and not always later. A prebuilt agent has no build cost, but per resolution or per seat pricing grows with volume. Work out the monthly cost at the volume you expect in a year, then compare it with a one off build plus running costs."
  - q: "How many prebuilt agents does IBM and Microsoft's Imagine Enterprise include?"
    a: "IBM says its consulting arm brings more than 6,000 AI agents and assets to the platform, announced on 10 November 2026. The first industry frameworks cover financial services, insurance and retail, and clients reach it through an IBM Consulting engagement or self managed options."
  - q: "What does Zendesk charge for its employee service AI agents?"
    a: "Growth and Professional plans include 10 automated resolutions per agent per month, and Enterprise plans include 15. Resolutions beyond that cost $0.99 each, according to Zendesk's announcement. The rollout runs from 3 November to 1 December 2026."
  - q: "Can a small company run AI agents safely on its business systems?"
    a: "Yes, if the agent gets the narrowest access that does the job. Start read only on systems of record such as your ERP, log every action, and give the agent the same identity and permissions a person in that role would have, not an admin account."
sources:
  - title: "IBM Newsroom: IBM and Microsoft announce a new AI agent platform designed for industry specific transformation"
    url: "https://newsroom.ibm.com/2026-11-10-ibm-and-microsoft-announce-a-new-ai-agent-platform-designed-for-industry-specific-transformation"
  - title: "Zendesk: The general availability of employee service AI agents"
    url: "https://support.zendesk.com/hc/en-us/articles/11302848656922-Announcing-the-general-availability-of-employee-service-AI-agents"
  - title: "SecurityBrief Asia: Island launches enterprise browser to control AI agents"
    url: "https://securitybrief.asia/story/island-launches-enterprise-browser-to-control-ai-agents"
---

Three announcements in the space of a week tell you where AI agents are heading. On 10 November, [IBM and Microsoft launched Imagine Enterprise](https://newsroom.ibm.com/2026-11-10-ibm-and-microsoft-announce-a-new-ai-agent-platform-designed-for-industry-specific-transformation), a platform for building, running and governing agents, with more than 6,000 prebuilt agents and assets from IBM Consulting. Zendesk is rolling out agents for internal IT and HR teams priced per resolution. And on 13 November, Island released a browser that lets companies control what agents can do on the web apps their staff already use.

The menu of ready made agents is getting long. For a founder or operations lead, the practical question is which jobs to hand to an agent you rent, and which ones are worth building yourself.

## What actually launched this week?

Imagine Enterprise is aimed at large companies, especially regulated ones. The first industry frameworks cover financial services, insurance and retail. Most clients will get it by hiring IBM Consulting to deploy and run it, though IBM says self managed options exist too. It sits on Microsoft's stack: Foundry, Copilot Studio, Fabric, Entra, Purview and Azure among others. No price was published.

Zendesk's employee service agents are the opposite end of the market. They answer internal questions from staff in the help center, Slack and Microsoft Teams, pull answers from more than 20 knowledge sources such as Google Drive, SharePoint and Confluence, and hand over to a person by opening a ticket when they cannot help. The pricing is public, which makes it useful for the arithmetic later in this post.

Island's product is about control. Agents running in its browser inherit the user's identity and permissions, and a policy decides whether an agent may write to a system or only read from it. Island suggests read only access for systems of record like an ERP.

## Should you buy a prebuilt agent or build your own?

Buy when three things are true. The job looks much the same at every company (password resets, leave policy questions, invoice status lookups). It lives mostly inside one product you already pay for. And the vendor prices it in a unit you can forecast.

Build when the job depends on knowledge only you have, when it has to move across several of your systems in one go, or when doing it well is part of why customers pick you. A quoting assistant that understands your pricing exceptions, or an agent that reconciles orders between your storefront, warehouse system and accounts, is unlikely to exist on anyone's shelf. If it did, your competitors would have it as well.

There is a middle path that suits a lot of mid-size teams: buy the platform, build the part that is yours. Copilot Studio, Zendesk and similar tools let you add your own data, actions and rules on top of their agent. You get the vendor's hosting, security reviews and updates, and you keep the logic that differentiates you in something you control and can move. We go through this trade off in more depth in our [build vs buy framework](/build-vs-buy).

## What does per resolution pricing cost a 200 person company?

Here is a rough worked example using Zendesk's published numbers. It is an illustration, not a quote.

Say your internal help desk gets 600 requests a month and you have five agents on a Growth plan. That plan includes 10 automated resolutions per agent per month, so 50 in total. If the AI agent resolves 40 percent of requests, that is 240 resolutions, of which 190 are over the allowance. At $0.99 each, the extra comes to about $188 a month, or roughly $2,260 a year.

| Monthly requests | Resolved by AI (40%) | Included | Extra cost per month |
| --- | --- | --- | --- |
| 600 | 240 | 50 | about $188 |
| 1,500 | 600 | 50 | about $545 |
| 3,000 | 1,200 | 50 | about $1,139 |

At the low end, buying is clearly cheaper than any custom build. As volume grows the line climbs steadily, and that is when it is worth asking what a build would cost to own. Our [guide to what AI work costs](/what-it-costs) sets out the ranges we see. Remember to add the cost of keeping the knowledge base current, which is the same whichever route you take and is usually what decides whether answers are any good.

## Where do prebuilt agents fall short?

Three places, in our experience.

The first is data that sits outside the vendor's connectors. An agent that can read Confluence but not the spreadsheet your finance team actually maintains will give confident answers from stale information.

The second is anything that needs a judgement your company makes differently from others. Refund exceptions, credit terms and priority rules tend to live in people's heads. A generic agent will apply a generic rule.

The third is moving between systems. Prebuilt agents are strongest inside their own product. Once a task means reading from one system, deciding, and writing to two others, you are into integration work whichever logo is on the agent.

## How do you keep an agent from doing damage?

Treat it like a new hire on probation. Island's approach is a sensible model whether or not you use their product: the agent acts with a named person's identity and permissions, and access to systems of record starts as read only.

In practice, for a mid-size company, that means:

- Give each agent the narrowest access that does the job, never a shared admin login.
- Start read only. Allow writes one action at a time once you have watched it work.
- Log every action the agent takes somewhere a person reviews weekly.
- Decide in advance which requests always go to a human: anything involving money, contracts, personal data or an unhappy customer.

Our [AI production readiness checklist](/resources/ai-production-readiness-checklist) covers the rest of what we check before an agent goes near live data.

## What we would do this quarter

Pick the two or three internal request types that eat the most time and are the same everywhere, and trial a prebuilt agent on them using the tools you already pay for. Measure resolutions and wrong answers for a month.

In parallel, write down the one process where your own rules and data matter most. That is the candidate for a custom build, and it is worth scoping properly before anyone writes code. If you would like a second opinion on where your line between buying and building should sit, that is the kind of question our [AI and automation team](/services/artificial-intelligence-and-automation) answers every week.
