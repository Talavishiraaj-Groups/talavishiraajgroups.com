---
title: "Fireworks AI breach: what to ask your AI vendors now"
description: "The Fireworks AI breach reached Notion, Uber and Cursor customers through one AI vendor. What happened, and the questions to ask your own AI vendors this week."
date: 2026-11-15
author: Dhiraj T H
keyword: fireworks ai breach
tags: [Security, AI vendors, Risk]
cover: { motif: shield, palette: ember }
answer: "The Fireworks AI breach showed that your AI risk includes the vendors behind your software as well as the tools you signed up for. Hackers reached Fireworks through stolen credentials and a hacked cloud provider, and data from Notion, Uber and Cursor customers was exposed. Ask every AI vendor which features store your data, which providers they pass it to, and how keys are rotated."
faq:
  - q: "What happened in the Fireworks AI breach?"
    a: "Fireworks AI, a platform companies use to run open AI models, disclosed two incidents in October 2026. Attackers used stolen internal credentials, then reached its development machines through a hacked cloud provider. Fireworks says billing information, some datasets, incomplete model weights and stored secrets were taken for a limited set of accounts."
  - q: "What are security concerns with AI vendors?"
    a: "The main ones this incident exposed are data that a vendor stores when you assumed it did not, API keys and passwords that end up inside prompts or logs, and subprocessors you never chose. Stolen AI keys can also be resold, leaving you with the bill."
  - q: "What questions should I ask an AI vendor about security?"
    a: "Ask which features keep your prompts, files or outputs, and for how long. Ask which other AI providers process your data, how you will be told about a breach at one of them, and whether zero data retention is switched on for your account. Then ask how their API keys can be scoped, capped and rotated."
  - q: "What is LLMjacking?"
    a: "LLMjacking is when criminals steal access to a company's AI model accounts and use or resell it, so the victim pays for the usage. Google's threat intelligence team says it saw fraudulent charges above $100,000 in a single day, and up to $1 million in total at some organizations."
sources:
  - title: "Fireworks AI: Update on October 2026 security incident"
    url: "https://fireworks.ai/security/bulletins/october-2026-security-incident-update"
  - title: "Notion: Fireworks AI incident"
    url: "https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor"
  - title: "The Hacker News: Cursor says stolen Fireworks AI key led to trojanized Claude Code extension incident"
    url: "https://thehackernews.com/2026/11/stolen-fireworks-ai-key-led-to-cursor.html"
  - title: "TechCrunch: Uber confirms hackers stole thousands of drivers' license information in data breach"
    url: "https://techcrunch.com/2026/11/13/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/"
  - title: "Google Cloud Blog: The rise of LLMJacking"
    url: "https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models"
  - title: "VentureBeat: Attackers breached the Fireworks AI storage where Notion AI chats sat outside zero data retention"
    url: "https://venturebeat.com/security/attackers-breached-the-fireworks-ai-storage-where-notion-ai-chats-sat-outside-zero-data-retention"
---

The Fireworks AI breach is now the clearest example of AI vendor risk this year. Fireworks runs open AI models for more than 10,000 companies, and attackers who got in during October reached data belonging to customers of Notion, Uber and Cursor. Most of those people never signed up for Fireworks. If your team uses AI features inside other software, this is about you too.

```stats
[
  { "value": "10,000+", "label": "Fireworks AI customers, according to The Record" },
  { "value": "<1%", "label": "of Notion workspaces Notion says may have been affected" },
  { "value": "5,000", "label": "Cursor users, at most, who may have received a malicious extension" },
  { "value": "$100,000+", "label": "fraudulent AI charges in a single day in some LLMjacking cases, per Google" }
]
```

## What happened in the Fireworks AI breach?

Attackers got into Fireworks twice in October 2026, and the damage spread to its customers over the following weeks. The short version, from the companies' own disclosures:

| Date (2026) | What happened |
| --- | --- |
| 6 October | Fireworks detects unauthorized use of internal credentials. API keys and tokens stored as secrets in evaluation jobs are captured for some accounts. |
| 23 to 24 October | A cloud provider hosting Fireworks research machines is hacked. Attackers use it to reach Fireworks development machines. |
| 29 October | Using credentials from the earlier theft, an attacker plants a trojanized Claude Code extension on Cursor's extension marketplace for about 11 hours. |
| 9 November | Fireworks says billing information, some datasets and incomplete model weights were accessed for certain customers. |
| 12 November | Notion's published advisory confirms Notion AI chat transcripts used for its Insights feature were in the stolen data. |
| 13 November | Uber's breach notices show driver's license data stolen; TechCrunch identifies the vendor as Fireworks. |

[Fireworks' own update](https://fireworks.ai/security/bulletins/october-2026-security-incident-update) links the attackers to a financially motivated group that sells stolen access to AI models. The investigation is ongoing, so these numbers may still change.

## How did one AI vendor expose so many companies?

Because AI features are usually built from other people's AI services, and each link in that chain holds some of your data. Notion used Fireworks to run classification jobs and serve open models inside its product. Uber shared driver data with it. Cursor shared a storage bucket of coding session traces with it.

Think of it like a building where the cleaning contractor's master key gets copied. The tenants did nothing wrong, but the key opened their offices anyway. Cursor says an access key it had issued to Fireworks was exposed, and the attacker used it to copy data, then reached some of the online software tools Cursor uses internally.

Fireworks itself was reached partly through a third company, the cloud provider hosting its research machines. That is several companies between the attacker and a Notion user's chat history.

## Is "zero data retention" enough?

No, not on its own. Zero data retention (ZDR) means a vendor does not keep your prompts and outputs after answering them. Fireworks describes its platform as ZDR by default, and says it saw no impact on its main inference service.

But as [VentureBeat reported](https://venturebeat.com/security/attackers-breached-the-fireworks-ai-storage-where-notion-ai-chats-sat-outside-zero-data-retention), Fireworks' own documentation says a few features do store customer content: stored responses, batch jobs and training. Its stricter policy that blocks all storage is available on Enterprise accounts and is off by default. The breach reached the stored side.

So when a vendor says "we don't keep your data", the useful follow up is "for which features, and is that setting switched on for our account?"

### The hidden risk: keys and passwords inside AI chats

The most damaging data in this incident was not the chats themselves but the secrets inside them. Cursor says some coding session traces contained credentials that had not been removed, exposing API credentials for fewer than 0.01% of its customers. Those traces gave the attacker a way in.

[Notion's advisory](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor) says it revoked exposed Notion API keys found in affected user messages on 11 November. On 12 November it reported other companies' API keys found in those messages to the vendors that issued them.

People paste passwords and keys into AI tools to get help debugging. Once that text is stored anywhere, it is only as safe as the weakest company in the chain.

## What does a stolen AI key cost you?

Possibly a lot, and quickly. Google's threat intelligence team and Mandiant published research on 2 November on [LLMjacking](https://cloud.google.com/blog/topics/threat-intelligence/llmjacking-monetizing-compromised-cloud-models), where criminals steal access to a company's AI accounts and resell it. Fireworks says its attackers fit that pattern.

```chart
{ "title": "Fraudulent AI usage charges seen by Google and Mandiant", "unit": "$", "data": [ { "label": "In a single day", "value": 100000 }, { "label": "Cumulative, at some organizations", "value": 1000000 } ], "highlight": 1, "note": "Google Threat Intelligence Group, 2 November 2026. The single day figure is a lower bound." }
```

Google says one reseller made more than 500,000 API calls in under eight hours and passed nearly $1 million in usage costs to the victim. Its advice includes setting API usage and spending limits, removing permissions people do not need, and treating any unexpected switch-on of an AI service as a critical security event.

## Questions to ask your AI vendors this week

Ask these of every product your team uses that has AI features, not only the AI companies you pay directly. Most good vendors can answer them in an email.

```steps
[
  "Which other AI providers process our data, and how will you tell us if one of them has an incident?",
  "Which of your features store our prompts, files or outputs, and for how long?",
  "Is zero data retention switched on for our account, and does it cover batch jobs, evaluations and training?",
  "Do you remove passwords and API keys from logs and stored chats?",
  "Can we scope, cap and rotate the API keys we give you, and see when they were used?"
]
```

Then do two things internally. Rotate any API key you have given an AI vendor that you cannot show was rotated since October. Fireworks itself warns that deleting a stored secret does not cancel the underlying credential; you have to revoke it with whoever issued it. And set a hard spending cap on every AI account you own.

If you are about to buy an AI tool rather than build one, add these questions to the comparison. We cover the wider trade off in our post on [prebuilt AI agents vs a custom build](/blog/prebuilt-ai-agents-vs-custom).

## What changes for UK, UAE and EU companies?

The vendor questions are the same everywhere, but the paperwork differs. Under the EU General Data Protection Regulation (GDPR), a company that controls personal data must report a breach to its regulator within 72 hours of becoming aware of it, where feasible, and a processor must tell that company without undue delay. That only works if your AI vendor tells you quickly.

Article 28 of the GDPR also says a processor cannot bring in another processor without your written authorization. If a vendor passes your customers' data to an AI provider like Fireworks, that provider should be on the subprocessor list in your contract. UK companies should check the guidance from the Information Commissioner's Office (ICO), and UAE companies their obligations under the federal data protection law, before relying on a vendor's notice period.

## What we would do on Monday

Start with a list. Write down every tool your team uses that has an AI feature, who the AI provider behind it is (ask if it is not published), and what data goes into it.

Then send the five questions above to the vendors that touch customer data first. Our [AI production readiness checklist](/resources/ai-production-readiness-checklist) covers the controls we check before an AI system goes near live data. If you want a second pair of eyes on your AI vendors or on a system you are building, our [AI and automation team](/services/artificial-intelligence-and-automation) can help.
