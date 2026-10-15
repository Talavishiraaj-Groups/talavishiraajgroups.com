/**
 * Insights articles.
 *
 * Each piece answers a question buyers search before they are looking for a
 * vendor, and each is grounded in a documented engagement rather than general
 * practice. Every article routes to the capability that does the work and the
 * case study that evidences it, so an article is never a dead end.
 *
 * Adding an article is an editorial decision, not a volume exercise. See
 * marketing-research/experiments.md before adding more.
 */

export const insights = [
  {
    slug: 'why-ai-prototypes-stall-before-production',
    title: 'Why AI prototypes stall before production',
    h1: 'Why AI prototypes stall before production, and what production actually requires',
    metaTitle: 'Why AI Prototypes Stall | Talavishiraaj Groups',
    metaDescription:
      'A working AI prototype and a production system are different artifacts. What actually has to be built between them: interface contracts, failure behavior, observability, evaluation you can rerun, and staged rollout.',
    published: '2026-09-27',
    readingTime: '9 min read',
    capability: 'ai',
    caseStudy: 'ai-workflow-notebook-to-production',
    summary:
      'The model is rarely the problem. What separates a prototype from a production system is the work nobody demonstrates: explicit interface contracts, defined behavior when a dependency misbehaves, observability, an evaluation set you can rerun, and a rollout that can be reversed. That work is unglamorous, it is usually scoped last, and it is the entire difference.',
    takeaways: [
      'Define the interface contract before tuning the model. Input schema, output schema, latency budget and failure modes.',
      'Design what happens when it is wrong before building the path where it is right.',
      'A prototype that cannot be evaluated repeatably cannot be improved safely.',
      'Observability is not a later phase. Without it you are guessing about a system you cannot see.',
      'Roll out in stages you can reverse. A model you cannot roll back is a model you cannot change.',
    ],
    sections: [
      {
        heading: 'Why does a prototype that works still fail in production?',
        body: [
          'Because the two artifacts are optimized for opposite things. A notebook is optimized for exploration: mutable state, implicit data paths, cells run out of order, and one person holding the context in their head. Production is optimized for repeatability and shared ownership. Almost none of what makes a notebook productive survives that transition.',
          'The specific failure is usually not the model degrading. It is that the prototype never had to declare its interface, so everything downstream of it was built on assumptions that were never written down. The frontend assumed one response shape. The data pipeline assumed a field would always be populated. Nobody assumed the third party API would return a 503 for eleven minutes.',
          'In one engagement we took on, an AI workflow genuinely worked, but only in the hands of the person who wrote it. The integrations were fragile, there was no observability, and there was no path to expose it as a service anyone else could depend on. The model was fine. Everything around it was missing.',
        ],
      },
      {
        heading: 'What is an interface contract, and why does it come first?',
        body: [
          'An interface contract is the explicit agreement about what goes in, what comes out, how long it is allowed to take, and what happens when it cannot answer. Input schema, output schema, latency budget, error taxonomy.',
          'It comes first because every other team is blocked on it. Once the contract is fixed, frontend, backend and data work can proceed in parallel against a known shape. Left undeclared, each team invents its own assumption and the integration phase becomes an archaeology exercise.',
          'It also constrains the modeling work usefully. A latency budget of 300 milliseconds rules out approaches that a budget of 30 seconds would allow. Deciding that after the model is built means rebuilding the model.',
        ],
      },
      {
        heading: 'Why design the failure behavior first?',
        body: [
          'Production AI is judged on what it does when it is wrong, not on what it does when it is right. A system that is correct 95 percent of the time and catastrophic the other 5 percent is worse than one that is correct 85 percent of the time and degrades predictably.',
          'So the design starts from the failure modes. What happens when the model is not confident. What happens when an upstream dependency times out. What happens when input arrives in a shape nobody anticipated. Each needs a defined answer: fall back to a simpler method, route to a person, return a typed error the caller can handle, or refuse and say so.',
          'On the engagement mentioned above, fallback behavior was built before the primary path was hardened. The result was that a single model or integration misbehaving degraded the workflow rather than stopping it. Failure incidents and debugging time both dropped, and the workflow could start supporting real operations without becoming a single point of failure.',
        ],
      },
      {
        heading: 'What does observability mean for an AI system specifically?',
        body: [
          'Conventional application monitoring tells you the service responded. It does not tell you the response was sensible. An AI system needs both.',
          'At minimum that means logging the input distribution, the output distribution, confidence where the method produces one, latency, and the rate at which fallbacks and human escalations fire. The escalation rate is often the most useful single signal: when it moves, something upstream has changed, usually before anyone has complained.',
          'The reason to build this from day one rather than later is that drift is only visible against a baseline. If observability arrives in month four, the first three months of behavior are unrecoverable and you cannot tell whether what you are now seeing is normal.',
        ],
      },
      {
        heading: 'What makes an evaluation set worth having?',
        body: [
          'That you can rerun it. A one time accuracy figure from the prototype phase tells you almost nothing six months later, when the data has shifted, the prompt has been edited four times and a dependency has been upgraded.',
          'A useful evaluation set is version controlled, covers the cases that actually matter including the awkward ones, and runs automatically when the model, prompt or pipeline changes. It should contain the cases that have already caused incidents, because those are the regressions most likely to recur.',
          'Without it, every change is a judgement call made on intuition, and the honest position is that nobody knows whether the system got better or worse.',
        ],
      },
      {
        heading: 'How should the rollout be staged?',
        body: [
          'In steps that can be reversed. Internal use first, against real inputs but with no external consequence. Then a limited cohort with human review on every output. Then a wider cohort with review on the cases the system flags. Then general availability with monitoring and an unambiguous rollback path.',
          'Each stage exists to surface a different class of problem. Internal use surfaces interface mistakes. Reviewed rollout surfaces quality problems the evaluation set missed. Wider rollout surfaces load and edge case behavior. Skipping stages does not save time, it relocates the discovery to a worse moment.',
        ],
      },
      {
        heading: 'What does this mean for scoping the work?',
        body: [
          'That the gap between a working prototype and a dependable system is mostly engineering, and it should be scoped as engineering rather than treated as a finishing step. When a plan allocates most of the effort to modeling and a short tail to productionization, the tail is where the project will overrun.',
          'It also means the honest question at the start of an AI initiative is not "can we build this". A prototype usually proves that quickly. The question is whether the work is worth the engineering and maintenance that a production system carries, which is a different judgement and is better made before the prototype creates momentum.',
        ],
      },
    ],
  },
  {
    slug: 'when-workflow-automation-is-worth-engineering',
    title: 'When workflow automation is worth engineering',
    h1: 'When workflow automation is worth engineering, and when it is not',
    metaTitle: 'When Workflow Automation Pays Off | Talavishiraaj Groups',
    metaDescription:
      'Not every manual process should be automated. A practical test based on volume, repeatability and error cost, plus how to separate decisions that are genuine judgement from decisions that were simply never written down.',
    published: '2026-09-27',
    readingTime: '8 min read',
    capability: 'ai',
    caseStudy: 'decision-heavy-workflow-automation',
    summary:
      'Automation has a permanent maintenance cost, so it has to earn its place. The test is volume, repeatability and what an error costs. The harder question underneath it is which decisions in a process are genuine judgement and which have simply never been written down, because only the second kind can be automated safely.',
    takeaways: [
      'Automation is not free after it ships. It carries permanent maintenance against changing dependencies.',
      'Three inputs decide it: how often the work happens, how repeatable it is, and what an error costs.',
      'Low volume work rarely justifies the engineering, however irritating it is.',
      'Most processes contain fewer genuine judgement calls than the people running them believe.',
      'An automation nobody is monitoring will fail silently, and silent failure is worse than manual work.',
    ],
    sections: [
      {
        heading: 'Why is "we do this manually" not a sufficient reason to automate?',
        body: [
          'Because manual effort is the visible cost and maintenance is the invisible one. An automation is not finished when it ships. It has a permanent relationship with every system it touches, and those systems change without consulting it. APIs are versioned, fields are renamed, authentication is rotated, a vendor is replaced.',
          'So the comparison is not manual effort against zero. It is manual effort against build cost plus ongoing maintenance plus the cost of the failures the automation will eventually produce. A process that consumes twenty minutes a month loses that comparison almost every time, no matter how tedious those twenty minutes are.',
          'This is the assessment worth doing honestly before anything is built, including when the honest answer is that the work should stay manual.',
        ],
      },
      {
        heading: 'What actually decides it?',
        body: [
          'Three inputs, considered together rather than separately.',
          'Volume. How often does this genuinely happen? Not the worst week, the normal month. People consistently overestimate frequency for work they find unpleasant.',
          'Repeatability. Does it follow the same path each time, or is each instance meaningfully different? A process with forty exceptions per hundred runs is not one process, it is a category of problems that has not been separated yet.',
          'Error cost. What happens when it goes wrong, and how quickly would anyone notice? Work that is high volume and highly repeatable but carries severe error cost needs a human checkpoint, which changes the economics and sometimes removes the case entirely.',
          'High volume, high repeatability and a tolerable error profile is a strong case. Miss any one of the three and the case usually fails.',
        ],
      },
      {
        heading: 'Which decisions can actually be automated?',
        body: [
          'This is the question that determines whether the project succeeds, and it is usually answered too optimistically.',
          'Processes concentrate in experienced people who describe what they do as judgement. Some of it is. Much of it is pattern matching that has never been written down, which looks like judgement from the outside and from the inside, because nobody has been asked to articulate it.',
          'The way to separate them is to work from the exception data rather than from the description. Map the decision tree, then examine the cases that departed from it. If the departures follow a rule the person can state once prompted, that rule can be encoded. If the departures are genuinely different each time and depend on context that is not in any system, that is real judgement and it stays with a person.',
          'In one engagement we worked on, routine decisions sat with a small group of experienced people, which created delays, inconsistent outcomes and real dependency risk. We mapped the decision tree, codified the rules and their exceptions, and automated selectively, with human checkpoints wherever judgement genuinely remained. The split was decided from the exception data rather than from ambition. Turnaround time and error rates fell for the routine cases while oversight was preserved for the rest.',
        ],
      },
      {
        heading: 'What does "written down but never automated" look like in practice?',
        body: [
          'It looks like a rule with a threshold nobody has stated. Orders above a certain value go to a second approver. Customers in a certain segment get a different response time. Anything from a particular supplier is checked twice because of something that happened two years ago.',
          'These are rules. They are not written anywhere, they live in the memory of whoever has been there longest, and they are applied inconsistently by everyone else. Encoding them produces two benefits at once: the process becomes automatable, and it becomes consistent, which is often worth more than the time saved.',
          'The discovery work here is mostly interviewing and reading exception logs. It is not technically difficult and it is where most of the value is decided.',
        ],
      },
      {
        heading: 'What has to exist before an automation is safe to run?',
        body: [
          'Monitoring, an owner and a defined failure behavior.',
          'An automation nobody is watching will fail silently, and silent failure is worse than the manual process it replaced, because the manual process had a person who would notice. The common pattern is an automation that breaks after a dependency changes, continues reporting success, and is discovered weeks later by a customer.',
          'So before it runs: something alerts when throughput or error rate moves, a named person owns it, and its behavior on failure is defined rather than incidental. Those three are the minimum, and they are what distinguishes an automation from a script somebody wrote once.',
        ],
      },
      {
        heading: 'When is the answer simply no?',
        body: [
          'When volume is low, however annoying the work is. When the process is about to change anyway, because automating a process that is being redesigned wastes both efforts. When the exceptions outnumber the rule, which means the process needs to be separated before it can be automated. And when nobody will own the result, because an unowned automation becomes an unmonitored one.',
          'Saying so early is cheaper for everyone than discovering it in month three. It is also the assessment a vendor with a build to sell has the least incentive to make, which is worth keeping in mind when the assessment comes from whoever would do the building.',
        ],
      },
    ],
  },
  {
    slug: 'do-you-need-data-engineering',
    title: 'Do you need data engineering, or a better report?',
    h1: 'Do you need data engineering, or do you need one spreadsheet to stop being retyped?',
    metaTitle: 'Do You Need Data Engineering? | Talavishiraaj Groups',
    metaDescription:
      'Reporting assembled by hand is a real cost, but not automatically a data engineering problem. A test for whether you need pipelines, a tool, or neither.',
    published: '2026-10-12',
    readingTime: '8 min read',
    capability: 'tech',
    caseStudy: 'founder-operations-cockpit',
    summary:
      'Written for the person who has to sign it off rather than the person who would build it. Most teams who ask about data engineering are describing a symptom: the monthly report takes three days and the numbers disagree. Sometimes that is a pipeline problem. More often it is two systems that were never connected, or one report nobody has questioned in two years. The three are not the same purchase, and buying the wrong one is expensive in a way that is hard to unwind.',
    takeaways: [
      'The question is almost never whether you need data engineering. It is why one number takes three days and still gets argued about.',
      'Count the hands a number passes through before anyone trusts it. That, not the row count, tells you whether pipelines are the answer.',
      'If two systems simply do not talk to each other, that is an integration, not a data platform. The cheaper fix is usually the right one.',
      'A warehouse you cannot staff in year two is worse than the spreadsheet it replaced, because the spreadsheet degraded visibly.',
      'Before building anything, delete a report. A surprising amount of reporting load exists because nobody asked whether anyone still reads it.',
    ],
    sections: [
      {
        heading: 'What problem does data engineering actually solve?',
        body: [
          'Data engineering is the work of moving data from where it is created to where it is used, reliably and without a person in the middle. Pipelines that extract and load, somewhere to put the result, and the definitions that decide what a phrase like active customer means. That is the discipline in a sentence.',
          'What it does not solve is disagreement about what the numbers mean. If sales and finance produce different revenue figures because they count differently, a pipeline will deliver both numbers faster and the argument will continue unchanged. The definition is the problem, and no amount of infrastructure fixes a definition.',
          'This matters because the two get confused constantly. A team buys a platform to settle a disagreement that was never technical, then concludes the platform failed.',
        ],
      },
      {
        heading: 'How do I know whether this is a pipeline problem or something smaller?',
        body: [
          'Count the hands. Take one number that matters, the one quoted in a board pack or a weekly review, and trace it backwards. How many systems did it come from, how many times was it copied or retyped, and how many people touched it before anyone was willing to say it out loud.',
          'One system and one export is a reporting problem. Two systems and a person reconciling them is an integration problem. Four or more sources, a recurring manual merge, and definitions that live in one person’s head is where data engineering starts to earn its cost.',
          'The volume of data is close to irrelevant at this scale. Teams assume they need a warehouse because they have a lot of rows. What justifies infrastructure is the number of joins a human performs by hand every month, not the row count.',
        ],
      },
      {
        heading: 'What does it cost after it is built?',
        body: [
          'Published figures put ongoing maintenance of custom software at roughly 15 to 25 percent of the original build cost per year, and data infrastructure sits at the harder end of that range because it has a permanent relationship with every system feeding it. Source systems change their fields without telling you. APIs are versioned. A vendor is replaced and a pipeline stops quietly.',
          'The cost that surprises people is not the build. It is the second year, once the people who built it have moved on and nobody remaining can say why a particular transformation exists.',
          'So the honest question before commissioning any of this is not what it costs to build. It is who maintains it in year two, and whether that person knows yet.',
        ],
      },
      {
        heading: 'When is buying a tool the better answer?',
        body: [
          'When your sources are common ones and your questions are common ones. If the data sits in a handful of mainstream systems and you want standard reporting on top of it, products exist that do this and they will be cheaper and faster than anything built for you. Paying to own a problem somebody else has already solved is the most common error in this category.',
          'Building becomes defensible when the shape of your data is genuinely unusual, when the logic that turns raw records into a meaningful number is specific to how you operate, or when the thing being measured is itself part of what makes the business work.',
          'The third option gets left out of most comparisons and is often the right one: buy the platform, and build only the transformation layer that is actually yours.',
        ],
      },
      {
        heading: 'What should I do before committing to anything?',
        body: [
          'Delete a report. Take the recurring reports your team produces and ask who read the last one, and what they did differently because of it. A meaningful share of reporting load exists through inertia, and removing it costs nothing.',
          'Then write down the definition of the three numbers that matter most and ask two people in different functions to check them. If they disagree, you have found work that no infrastructure will do for you.',
          'Only then is it worth asking anyone for a number, because a decision made at that point is about a real gap rather than a general sense that the data situation is bad.',
        ],
      },
      {
        heading: 'Who should read this as a reason not to build?',
        body: [
          'Teams under about ten people with one source system. The honest answer there is usually a better spreadsheet and a convention about who owns it.',
          'Teams whose real problem is that one person leaves and the knowledge goes with them. That is a documentation and ownership problem wearing a technical costume.',
          'And anyone whose motivation is that building it sounds more satisfying than buying it. That is a real force in these decisions, and worth naming, because it is often the one doing the deciding.',
        ],
      },
    ],
  },
  {
    slug: 'what-ai-integration-costs',
    title: 'What AI integration costs, and where it goes wrong',
    h1: 'What AI integration actually costs, and the part that is missing from every quote',
    metaTitle: 'What AI Integration Costs | Talavishiraaj Groups',
    metaDescription:
      'AI integration quotes price the build. The cost that decides whether it was worth it arrives in year two. What drives it, what breaks, and when not to.',
    published: '2026-10-12',
    readingTime: '9 min read',
    capability: 'ai',
    caseStudy: 'live-operations-visibility-layer',
    summary:
      'Almost every AI integration quote prices the build and stops there. The costs that decide whether the thing was worth doing arrive later: inference that scales with use rather than with headcount, integration work against systems that change without warning, and retraining nobody scheduled. Published figures put the 24 month total at 1.6 to 2.2 times the build cost. The gap is not padding, it is the part of the work that was never quoted.',
    takeaways: [
      'AI integration costs scale with usage, not with team size. That is the structural difference from ordinary software and it is why build quotes mislead.',
      'Published figures put AI deployments at 1.6 to 2.2 times the build cost over 24 months once inference and retraining are counted.',
      'Integration work commonly runs 35 to 50 percent of initial development cost and is the most frequent source of overrun. The model is rarely the hard part.',
      'Ask any vendor for the three year number. A quote that covers only the build is not a price, it is a deposit.',
      'The strongest reason not to integrate is that nobody can name the decision the output will change.',
    ],
    sections: [
      {
        heading: 'What does AI integration actually mean here?',
        body: [
          'Connecting a model to the systems your business already runs on, so that something happens as a result. Not a demo, not a chat window bolted to a website, but a model that reads from real data, produces an output, and that output reaches a person or a process that acts on it.',
          'That definition matters because the phrase covers two very different purchases. Calling a hosted model from an existing tool is configuration, and it is cheap. Putting a model inside a workflow where its output is trusted is engineering, and the cost sits almost entirely in the parts that are not the model.',
          'Most disappointment in this category comes from paying for the first and expecting the second.',
        ],
      },
      {
        heading: 'Why do AI integration quotes come in so low?',
        body: [
          'Because the quote prices the build, and the build is the smaller half. Published analysis puts integration work alone at 35 to 50 percent of initial development cost, and names it as the most frequent source of overrun. That is before the model does anything.',
          'Then the running costs begin, and they behave differently from ordinary software. Inference is charged by use, so the bill grows when the thing succeeds. Retraining and re-evaluation are recurring, not one off. Monitoring has to exist or failures stay invisible. Published figures put the 24 month total at 1.6 to 2.2 times the original build cost once those are included.',
          'None of that is a vendor being dishonest. It is a scope question that nobody asked. The fix is simple and almost nobody does it: ask for the three year number rather than the build number.',
        ],
      },
      {
        heading: 'What actually drives the cost up?',
        body: [
          'The state of the data it reads from. A model pointed at clean, consistently structured records is a different project from one pointed at four systems that disagree. The second is a data problem wearing an AI label, and it is usually the larger piece of work.',
          'How wrong the output is allowed to be. A suggestion a human reviews is cheap. An output that acts without review needs evaluation, fallback behaviour and monitoring, and those are engineering line items rather than model tuning.',
          'How often the surrounding systems change. Every integration has a permanent relationship with the systems feeding it, and those systems are versioned, renamed and replaced without consulting it.',
          'Volume, because inference scales with use. A pilot with twenty users and a rollout to two thousand are not the same cost shape, and the second is rarely modelled during the first.',
        ],
      },
      {
        heading: 'What usually breaks after it ships?',
        body: [
          'It fails quietly. An automation or a model that stops working does not announce itself the way a crashed server does. It keeps returning answers and the answers get worse. Without monitoring in place from the start, the first person to notice is a customer.',
          'The evaluation set never existed, so nobody can say whether a change made things better. A system you cannot measure cannot be improved safely, only altered hopefully.',
          'And the knowledge leaves. The people who understood why a particular prompt, threshold or transformation exists move on, and what remains is a system nobody is willing to touch.',
        ],
      },
      {
        heading: 'When should a smaller business not integrate AI at all?',
        body: [
          'When nobody can name the decision the output will change. If the honest answer to "and then what happens" is that someone looks at it, the value is not there yet. That is the single most useful question to ask before committing anything.',
          'When the underlying process is not written down. Automating an undocumented process encodes whatever it currently does, including the parts that are wrong, and makes them harder to see.',
          'When the volume is low. The engineering, the monitoring and the maintenance do not get cheaper because the task is rare, and a rare task rarely earns them back however irritating it is.',
          'And when the real driver is that competitors have announced something. That is a genuine force in these decisions and it is worth naming out loud, because it is often the one actually deciding.',
        ],
      },
      {
        heading: 'How do I get a quote I can trust?',
        body: [
          'Ask what is excluded. Testing, monitoring, evaluation, the integration work itself and post launch support are where a low number hides its real cost. Get the exclusions in writing.',
          'Ask for the three year total, broken into build, running and change. If a vendor cannot produce that, they have not scoped the project, they have scoped a demo.',
          'Ask who maintains it in year two and whether that person has been told. The answer is revealing more often than it should be.',
          'And notice who is answering. The party explaining whether you should integrate AI is frequently the party paid to build it. That does not make them wrong, but it does mean the question is worth asking somewhere with nothing riding on the answer.',
        ],
      },
    ],
  },
];

export const insightBySlug = (slug) => insights.find((a) => a.slug === slug);
export const insightPath = (article) => `/insights/${article.slug}`;
export const insightsForCapability = (capabilityId) =>
  insights.filter((a) => a.capability === capabilityId);

export const INSIGHTS_TITLE = 'Insights: Engineering, AI and Systems | Talavishiraaj Groups';
export const INSIGHTS_DESCRIPTION =
  'Practical answers to the questions that come up before a project starts: what production readiness actually requires, when automation is worth engineering, and how to judge technical work before committing to it.';
