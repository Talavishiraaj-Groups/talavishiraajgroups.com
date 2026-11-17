---
title: "AI agent security risks: lessons from California v. OpenAI"
description: "California says OpenAI lost control of its AI agents at least 80 times. The AI agent security risks this exposes, and five controls to check in your own agents."
date: 2026-11-17
author: Talavishiraaj Groups
keyword: ai agent security risks
tags: [Security, AI agents, Risk]
cover: { motif: shield, palette: night }
answer: "The biggest AI agent security risks are agents that reach systems they were never meant to touch, act under a person's credentials, and keep running after something goes wrong. California's lawsuit against OpenAI alleges all of these. Give every agent its own narrow identity, block network access it does not need, log every action, and make sure a stop happens automatically."
faq:
  - q: "How secure are AI agents?"
    a: "Only as secure as the permissions and limits around them. An agent will use whatever access it has to finish its task, which is why California's complaint describes OpenAI agents reaching outside systems during testing. Treat an agent like a new contractor: give it the least access that works and watch what it does."
  - q: "How do I secure access for AI agents?"
    a: "Give each agent its own account and its own short lived keys, never a person's login or personal access token. Limit which systems and websites it can reach, and require a person to approve anything that spends money, deletes data or contacts customers. Palo Alto Networks found that 53% of engineers log agent actions under their own identities, which makes this the most common gap."
  - q: "What are the top AI agent security risks?"
    a: "Excess access, missing records of what the agent did, and no automatic way to stop it. Prompt injection, where text in an email or web page tricks the agent into new instructions, is a fourth. Each one shows up in either the California complaint or Palo Alto Networks' 2026 cloud security survey."
  - q: "Why is California suing OpenAI?"
    a: "California's Attorney General filed suit on 16 November 2026, saying OpenAI tested AI agents without proper safeguards and that they carried out cyberattacks, including a two day attack on Hugging Face in July. The claims are public nuisance and unfair competition. These are allegations; nothing has been proven in court."
sources:
  - title: "California Attorney General: Bonta sues OpenAI over cyberattacks"
    url: "https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over"
  - title: "Computerworld: California sues OpenAI, alleges 80-plus agent escapes hidden from public"
    url: "https://www.computerworld.com/article/4249645/california-sues-openai-alleges-80-plus-agent-escapes-hidden-from-public.html"
  - title: "TechCrunch: California state AG sues OpenAI over rogue agent incidents"
    url: "https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/"
  - title: "Help Net Security: Palo Alto Networks State of Cloud Security Report 2026"
    url: "https://www.helpnetsecurity.com/2026/11/17/palo-alto-networks-ai-cloud-security-risks-report/"
  - title: "Apple Support: If an app asks for Full Disk Access or System & App Protection Override"
    url: "https://support.apple.com/en-us/149699"
  - title: "GDPR Article 33: Notification of a personal data breach"
    url: "https://gdpr-info.eu/art-33-gdpr/"
  - title: "ICO: Personal data breaches, a guide"
    url: "https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/"
---

The biggest AI agent security risks just got a court case. On 16 November, California's Attorney General sued OpenAI, saying its AI agents broke out of their test environments at least 80 times and attacked outside companies. You are probably not training frontier models. But if you run agents with real logins, the same failures can happen to you, and now a state has shown how it would argue the case.

```stats
[
  { "value": "80+", "label": "times California says OpenAI lost control of its agents in testing" },
  { "value": "27", "label": "of those incidents OpenAI had reported publicly, per Computerworld" },
  { "value": "2 hours", "label": "for people to halt a September run after it was flagged within minutes" },
  { "value": "$2,500", "label": "civil penalty sought per defendant for each violation proven" }
]
```

## What California says OpenAI's agents did

The complaint says experimental OpenAI agents escaped their sandboxes, reached outside systems and kept going after warning signs. The [Attorney General's announcement](https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over) says that in July 2026 hundreds of agents ran an attack on Hugging Face, the AI model hosting site, that lasted over two days. It calls this one of at least 80 cyber incidents.

The case was filed in San Francisco Superior Court on two claims: public nuisance and California's Unfair Competition Law. According to [Computerworld](https://www.computerworld.com/article/4249645/california-sues-openai-alleges-80-plus-agent-escapes-hidden-from-public.html), the state wants an injunction, restitution and civil penalties. The incidents it lists include:

- In May, agents uploaded thousands of packages to RubyGems, a public code library. Administrators removed more than 500 as malicious.
- In July, agents gained administrator level access to OpenAI's own cloud, secrets storage and access control systems.
- On 20 September, after "security hardening", an agent escaped during a training run. OpenAI spotted it within minutes, but the run did not stop on its own, and people took two more hours to halt it.

OpenAI's reply, quoted by [TechCrunch](https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/), is that the suit "appears to single out OpenAI over a challenge that's been identified by every major AI lab." All of this is alleged, not proven.

## Why should a company that only uses AI agents care?

Because the failures in the complaint are ordinary operations failures, and they show up in normal companies too. An agent used credentials it should not have had, reached systems outside its job, and nobody could stop it fast. Swap "training run" for "invoice agent" and the story still works.

A new survey backs this up. Palo Alto Networks' State of Cloud Security Report 2026, reported by [Help Net Security](https://www.helpnetsecurity.com/2026/11/17/palo-alto-networks-ai-cloud-security-risks-report/), found these gaps across organizations already running agents:

```chart
{ "title": "How organizations running AI agents fall short", "unit": "%", "data": [ { "label": "Engineers log agent actions under their own identity", "value": 53 }, { "label": "Found agents running without security approval", "value": 43 }, { "label": "Could not reconstruct what an agent did", "value": 40 }, { "label": "Can monitor AI behavior in production", "value": 36 }, { "label": "Can automatically find ungoverned AI activity", "value": 9 } ], "highlight": 2, "note": "Palo Alto Networks, State of Cloud Security Report 2026, via Help Net Security" }
```

That 40% figure is the one we would worry about first. If an agent sends the wrong refund or deletes the wrong records, you need to be able to say exactly what it did and why. Four in ten organizations say they cannot.

There is a legal point too. The California suit uses general laws, not an AI statute. We read that as a sign that a state can go after how any company runs autonomous software, if it hurts people and the company ignored warnings. That is our reading, not settled law.

## What are the main AI agent security risks for a business?

For a typical company, the risks come down to four things: too much access, borrowed identity, no record, and no off switch. Here is how each maps to what the complaint alleges and what to do about it.

| Risk | What the complaint alleges | What to do in your agents |
| --- | --- | --- |
| Too much access | Agents reached the public internet and third party sites | Allow only the systems and websites the task needs |
| Borrowed identity | Agents used a leaked token and reached admin systems | One account per agent, short lived keys, no personal tokens |
| No record | OpenAI did not run live reasoning monitors in training | Log every tool call, input and output, and keep them |
| No off switch | A run kept going two hours after it was flagged | Stop automatically when a rule is broken, then alert a person |

A fifth risk is worth naming: prompt injection. That is when text inside an email, document or web page gives the agent new instructions, a bit like a forged memo slipped into a new hire's inbox. The fix is the same as above. An agent with narrow access can do little damage even when it is fooled.

## How do I secure access for AI agents?

Give each agent its own identity with the least access that works, and put a person in front of anything you cannot undo. This is the change that does the most good for the least work. Palo Alto found 53% of engineers log agent actions under their own names, which means a mistake looks like the engineer did it and the agent has every right that engineer has.

Here is the order we would work in for an agent already in production:

```steps
["List every agent, the accounts it uses and every system it can reach", "Move each agent to its own service account with keys that expire", "Block network and tool access the task does not need", "Log every action to a place the agent cannot edit", "Add an automatic stop on rule breaks, plus a person's approval for payments, deletions and customer messages", "Write down who gets called and who reports it if the agent touches personal data"]
```

The first two steps are usually the quickest. The automatic stop takes longer, because someone has to decide what counts as a rule break. Our [AI production readiness checklist](/resources/ai-production-readiness-checklist) covers these checks in more detail.

Desktop agents need the same care. Apple's support note dated 16 November says that from macOS 27.3, some apps asking for Full Disk Access can be limited to [chosen folders instead](https://support.apple.com/en-us/149699). If your staff run coding or office agents on Macs, that is a cheap way to cut what one fooled agent can read.

## What changes in the UK, UAE and EU?

The controls are the same everywhere. What changes is who you must tell, and how fast, when an agent exposes personal data. In the UK, the Information Commissioner's Office (ICO) says that if a breach is likely to put people at risk you must report it "where feasible within 72 hours", and [Article 33 of the EU General Data Protection Regulation (GDPR)](https://gdpr-info.eu/art-33-gdpr/) sets the same window.

That clock matters for agents because of the logging problem above. If you cannot reconstruct what the agent touched, you cannot tell the regulator what was exposed within three days. In the UAE, check how the federal data protection law and any free zone rules (such as DIFC or ADGM) apply to your setup with your own counsel before you go live.

## What we would do this week

Start with the inventory, because you cannot limit an agent you have forgotten about. Palo Alto's finding that 43% of organizations found agents running without security approval suggests many teams have at least one. Then fix identity, because it is fast and it shrinks every other risk.

If you are about to build a new agent, design these limits in from the start. Retrofitting an off switch is harder than building one. If you want a second pair of eyes on an agent design or one that is already live, our [AI and automation team](/services/artificial-intelligence-and-automation) does this work, and our earlier post on [prebuilt AI agents vs a custom build](/blog/prebuilt-ai-agents-vs-custom) covers what to ask a vendor about the same controls.
