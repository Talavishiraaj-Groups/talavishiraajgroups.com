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

import benchmarks from './benchmarks';

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
        figure: {
          title: 'What the running cost looks like after launch',
          standfirst:
            'Both expressed as a percentage of what the build itself cost. The first is one off, the second repeats every year.',
          rows: [
            {
              label: 'Integrating it with the systems you already run, one off',
              low: benchmarks.integrationCost.figures.lowPct,
              high: benchmarks.integrationCost.figures.highPct,
              emphasis: true,
            },
            {
              label: 'Keeping it running, every year',
              low: benchmarks.maintenance.figures.lowPct,
              high: benchmarks.maintenance.figures.highPct,
            },
          ],
          source: benchmarks.maintenance.source,
          url: benchmarks.maintenance.url,
        },
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
  {
    slug: 'what-is-ai-readiness',
    title: 'What is AI readiness?',
    h1: 'What is AI readiness, and what a readiness score does not tell you',
    metaTitle: 'What Is AI Readiness? | Talavishiraaj Groups',
    metaDescription:
      'AI readiness measures whether an organisation could deploy AI. It does not measure whether it should. The pillars, how readiness is scored, and the question every readiness framework leaves out.',
    published: '2026-11-07',
    readingTime: '9 min read',
    capability: 'ai',
    caseStudy: 'ai-workflow-notebook-to-production',
    summary:
      'Every published definition of AI readiness describes the same thing: how prepared an organisation is to adopt and scale AI. Data, governance, skills, infrastructure, strategy. All of it is useful and none of it answers the question that decides whether the money is well spent, which is whether this organisation should be deploying AI at all, and against which specific decision.',
    takeaways: [
      'AI readiness is a measure of capability to deploy, not of whether deploying is worthwhile.',
      'The common pillars are data, infrastructure, governance, skills and strategy. They are reasonable and they are incomplete.',
      'Almost every readiness framework is published by a party that sells AI adoption, so readiness is framed as a gap to be closed by buying something.',
      'A readiness score of zero on data quality is usually the real finding. The data problem is the project, and the AI is a label on it.',
      'The question a readiness assessment should answer first is which decision the output will change. If nobody can name one, readiness is irrelevant.',
    ],
    sections: [
      {
        heading: 'What is AI readiness?',
        body: [
          'AI readiness is a measure of how prepared an organisation is to deploy artificial intelligence and keep it running. It is usually expressed as a score or a maturity level across several dimensions, and it is meant to tell leadership where the gaps are before a project starts rather than after it stalls.',
          'That is a genuinely useful thing to know. A model pointed at inconsistent data, in a business with nobody accountable for the output, will fail for reasons that have nothing to do with the model. Readiness assessments exist because that failure is common and expensive, and because it is visible in advance to anyone who looks.',
          'The limitation is in the question being asked. Readiness measures whether you could. It does not measure whether you should, and those are different findings with different consequences.',
        ],
      },
      {
        heading: 'What are the pillars of AI readiness?',
        body: [
          'Published frameworks differ in count but converge on the same ground. Data, meaning whether the information a model would read is accessible, consistent and trustworthy. Infrastructure, meaning whether anything can be deployed, monitored and rolled back. Governance, meaning whether someone owns the decision when the output is wrong. Skills, meaning whether the people who will maintain it exist. Strategy, meaning whether the work connects to something the business is actually trying to achieve.',
          'Some frameworks split these into five pillars, some into three, some into seven. The number is a presentation choice rather than a finding. If you are comparing frameworks and the pillar counts differ, you are comparing packaging.',
          'What matters more is the weighting nobody states out loud. In practice the data pillar decides most outcomes. An organisation strong on strategy and weak on data is not sixty percent ready. It is not ready, and the honest output of the assessment is a data project.',
        ],
      },
      {
        heading: 'How is AI readiness measured?',
        body: [
          'Typically by structured interview and document review against a scoring rubric, producing a level per pillar and an overall figure. The rubric is the important part and it is rarely published, which makes most scores difficult to compare across providers.',
          'Treat a single number with suspicion. Averaging across pillars hides exactly the thing you need to see, because readiness is not additive. A blocking weakness in one dimension is not offset by strength in another, and an average is designed to produce the impression that it is.',
          'The more useful output is the list of what would have to be true, in order, before the first deployment is sensible. That is a sequence rather than a score, and it can be acted on.',
        ],
      },
      {
        heading: 'What does a readiness score not tell you?',
        body: [
          'Whether the thing is worth building. A high score says the organisation can deploy AI competently. It says nothing about whether this particular application earns the engineering and the permanent maintenance behind it.',
          'That gap matters because the costs arrive after the score. Integration with existing systems commonly runs a third to a half of initial development and is the most frequent source of overrun. Running costs for AI specifically scale with use rather than with headcount, so the bill grows when the thing succeeds. A readiness assessment that stops at capability leaves all of that unexamined.',
          'It also will not tell you which decision changes as a result. That is the question worth asking first, and it is the one most likely to end a project early and cheaply. If the honest answer to "and then what happens" is that somebody looks at the output, there is no value yet, whatever the score says.',
        ],
      },
      {
        heading: 'Who publishes these frameworks, and does it matter?',
        body: [
          'Almost all of them are published by organisations that sell AI adoption: platform vendors, cloud providers, implementation firms. That is not dishonesty, it is incentive, and it shapes the frame rather than the facts.',
          'The effect is consistent. Readiness is presented as a gap, gaps are presented as closable, and closing them involves a purchase. A framework produced by a party with no stake in the answer would be free to conclude that the correct next step is to do nothing, and you will notice how rarely that conclusion appears.',
          'We build AI systems, so this applies to us as well. The reason we can write it down is that the assessment work is structured to be able to end in a no, and a no costs us the build.',
        ],
      },
      {
        heading: 'When is the honest answer not yet?',
        body: [
          'When the data the model would read is contested. If two systems disagree about the same fact and nobody owns the reconciliation, that is the project. Putting a model on top produces confident output derived from an argument.',
          'When the process is not written down. Automating an undocumented process encodes whatever it currently does, including the parts that are wrong, and makes them harder to see afterwards.',
          'When nobody will own it in year two. Models drift, dependencies change, and an AI system with no owner degrades quietly rather than failing loudly. The first person to notice is usually a customer.',
        ],
      },
      {
        heading: 'When is the answer no, and how would you know?',
        body: [
          'When the volume is low. Engineering, monitoring and maintenance do not get cheaper because the task is rare, and a rare task rarely repays them however irritating it is.',
          'When the real driver is that a competitor announced something. That is a genuine force in these decisions and it is worth naming in the room, because it is frequently the one actually deciding. It is also the one that produces projects nobody can defend eighteen months later.',
          'And when a simpler thing would work. A rule, a form, a fixed report or a cleaned up spreadsheet will solve a surprising share of what arrives described as an AI problem, at a fraction of the cost and with none of the maintenance. Checking that first is not a lack of ambition. It is the cheapest test available, and a readiness assessment that never considers it is not assessing much.',
        ],
      },
    ],
  },
  {
    slug: 'what-is-vendor-lock-in',
    title: 'What is vendor lock-in?',
    h1: 'What is vendor lock-in, and when is it the right trade?',
    metaTitle: 'What Is Vendor Lock-In? | Talavishiraaj Groups',
    metaDescription:
      'Vendor lock-in is the cost of leaving a platform, not the fact of using one. What actually creates it, what exit really costs, and why accepting lock-in is often the correct commercial decision.',
    published: '2026-11-07',
    readingTime: '8 min read',
    capability: 'tech',
    caseStudy: 'founder-operations-cockpit',
    summary:
      'Vendor lock-in is usually described as a danger to escape, almost always by a vendor who would like you to escape towards them. It is more useful as a number: the cost of leaving, estimated before you sign rather than discovered later. Costed that way, lock-in is frequently the right trade, and the mistake is not accepting it but accepting it without knowing what it costs.',
    takeaways: [
      'Lock-in is not using a platform. It is the cost and time of leaving one, which is a number you can estimate in advance.',
      'Four things create it: your data model, proprietary extensions, integrations built around it, and the operational knowledge your team accumulates.',
      'Operational knowledge is the component nobody budgets for and it is often the largest.',
      'Accepting lock-in is frequently correct. Avoiding it entirely means building more yourself, which carries its own permanent cost.',
      'Ask for an export of your real data during evaluation, not a promise of one in the contract.',
    ],
    sections: [
      {
        heading: 'What is vendor lock-in?',
        body: [
          'Vendor lock-in is the situation where moving off a product costs enough that you stay on it regardless of whether it is still the right product. The lock is the switching cost, not the dependency itself.',
          'That distinction gets lost in most discussions of the term, and losing it leads to bad decisions. Every platform you adopt creates some dependency. That is what adopting a platform means and it is not a failure. The question is how much leaving would cost, and whether that figure is acceptable given what you get in return.',
          'Framed as a number rather than a risk, it becomes something you can weigh against the alternative instead of something to be feared.',
        ],
      },
      {
        heading: 'What actually creates it?',
        body: [
          'Your data model is the first and most underestimated. Once your records live in a vendor’s structure, with its field names, its relationships and its particular way of representing an exception, moving means a translation project rather than a copy.',
          'Proprietary extensions are the second. Workflow rules, custom objects, scripts and automations written in a vendor specific language do not travel. The more of your business logic lives there, the more of it you rewrite to leave.',
          'Integrations are the third. Every other system wired to this one has to be rewired, and those connections are usually built once, by someone who has since moved on, with no record of why a particular field was mapped the way it was.',
          'The fourth is the one nobody budgets for. Your team knows this platform. They know the workarounds, the reporting quirks, the thing that breaks at month end. That knowledge took years to accumulate and leaving resets it to zero, which shows up as months of reduced output rather than as a line in a migration plan.',
        ],
      },
      {
        heading: 'What does leaving really cost?',
        body: [
          'More than the migration quote, because the quote covers moving the data and the data is the easy part. The expensive items are rebuilding the integrations, re-encoding the business logic, running both systems in parallel while you prove the new one, and the productivity dip while people relearn their jobs.',
          'Published figures put integration work at a third to a half of initial development cost in ordinary projects, and a platform migration is largely integration work. That is a reasonable starting point for an estimate when nothing better exists.',
          'There is also a cost to not leaving, and it is the one that compounds. A platform you have outgrown shapes every subsequent decision: features get designed around what it can do, and the gap between what the business needs and what the system permits widens quietly for years.',
        ],
      },
      {
        heading: 'Is vendor lock-in always bad?',
        body: [
          'No, and treating it as always bad produces worse outcomes than accepting it deliberately. The alternative to depending on a vendor is building and maintaining the capability yourself, which is not freedom from cost, it is a different and usually larger cost that never ends.',
          'Lock-in is a reasonable trade when the platform does something genuinely hard that is not your differentiator, when the alternative is eighteen months of your own engineers building a worse version, and when the switching cost is proportionate to the value you get while you stay.',
          'It is a bad trade when the thing being locked in is the part of your business that makes you different from your competitors. Outsourcing your differentiator to a platform every competitor can also buy is the version of this decision that is genuinely hard to recover from.',
          'Worth noting who tends to write about this. Most of what is published on vendor lock-in comes from platform vendors, and the advice reliably concludes that you should avoid being locked into someone else. We sell no platform, which is why this piece can say that lock-in is often correct.',
        ],
      },
      {
        heading: 'How do you price lock-in before you sign?',
        body: [
          'Ask for an export of your own data during evaluation, in a format you have to work with, and have someone technical actually open it. A contractual right to export is not the same as a usable export, and the difference only appears when you try.',
          'Write down which parts of your business logic would live inside the platform, and get an estimate for rebuilding them elsewhere. You will not get a precise number. You will find out whether it is weeks or quarters, which is the decision relevant distinction.',
          'Count the integrations the platform will sit behind, and treat each one as work to be redone. Then ask who would do that work and whether they still work here.',
          'Put the resulting figure in the evaluation alongside the licence cost. A platform that is cheaper to run and far more expensive to leave is not cheaper, and that comparison is almost never made because the two numbers arrive at different times.',
        ],
      },
      {
        heading: 'When should you walk away from a platform?',
        body: [
          'When the switching cost is rising faster than the value you get. That is the signal that matters, and it is measurable: if each year adds more integrations and more embedded logic without adding capability, the trade is deteriorating even though nothing has broken.',
          'When you are designing around its limits rather than your customers’ needs. The moment a roadmap conversation turns on what the system will allow, the system has started making commercial decisions.',
          'And when the vendor’s direction has diverged from yours. A platform being acquired, repositioned upmarket or quietly deprioritised is a change to your switching cost whether or not anyone tells you, and it is worth re-estimating rather than assuming the figure you calculated at signing still holds.',
        ],
      },
    ],
  },
  {
    slug: 'why-ai-projects-fail',
    title: 'Why do AI projects fail?',
    h1: 'Why do AI projects fail, and which of those reasons is yours?',
    metaTitle: 'Why Do AI Projects Fail? | Talavishiraaj Groups',
    metaDescription:
      'Most reported AI failure rates measure projects that were never going to work. The five ways they actually fail, how to tell which one you are heading for, and the check that costs nothing.',
    published: '2026-11-08',
    readingTime: '10 min read',
    capability: 'ai',
    caseStudy: 'ai-workflow-notebook-to-production',
    summary:
      'The widely quoted failure rates are real and almost useless, because they lump together five quite different failures with different causes and different fixes. A model that was never accurate enough is not the same problem as a model that works and nobody uses, and neither is the same as an initiative that was approved without anyone naming the decision it would change.',
    takeaways: [
      'The headline failure rates are not one phenomenon. At least five distinct failures are being counted together.',
      'The most common is not technical: nobody could name the decision the output would change.',
      'The second most common is a prototype that works being mistaken for a system that can be relied on.',
      'Data quality is usually the real project, wearing an AI label.',
      'Almost every one of these is visible before the build starts, which is why the cheapest intervention is a question rather than an engineer.',
    ],
    sections: [
      {
        heading: 'Why do AI projects fail?',
        body: [
          'Because five different things are being counted as one. The reported rates are high and they are not wrong, but a single number covering all of them tells you nothing about which one is about to happen to you, and the remedies have almost nothing in common.',
          'In rough order of how often we see them: nobody named the decision the output would change; a working prototype was mistaken for a production system; the data the model reads was never trustworthy; the thing shipped and nobody used it; and the model was genuinely not accurate enough for the job. Only the last of those is a modelling problem, and it is the rarest.',
          'That ordering matters because it inverts the usual response. Teams facing a failure rate tend to hire for the technical end, and the technical end is where the smallest share of the failures actually sits.',
        ],
      },
      {
        heading: 'What does "nobody named the decision" look like in practice?',
        body: [
          'It looks like a project with an output and no consequence. The dashboard gets built, the model scores well, the demo is impressive, and when you ask what happens differently on a Tuesday as a result, the honest answer is that someone looks at it.',
          'The test is one question, asked before anything is built: when this produces an answer, who acts on it, and what do they do that they were not doing before? If that cannot be answered in a sentence by the person sponsoring the work, the project has not failed yet but it is going to.',
          'This is the cheapest failure to avoid and the most frequently skipped, because the question feels obvious enough that everyone assumes it has already been asked.',
        ],
      },
      {
        heading: 'Why does a working prototype so often fail in production?',
        body: [
          'Because the two are optimised for opposite things. A notebook is optimised for the author to learn something quickly. A production system is optimised to behave predictably for people who were not there when it was written, on inputs nobody anticipated, at a time when the author has moved on.',
          'What separates them is unglamorous and almost always scoped last: explicit interface contracts, defined behaviour when a dependency misbehaves, observability, an evaluation set you can rerun, and a rollout that can be reversed.',
          'The commercial consequence is that the demo creates momentum the engineering estimate then has to survive. By the time anyone prices the remaining work, a decision has effectively been made.',
        ],
      },
      {
        heading: 'How much of this is really a data problem?',
        body: [
          'More than most post mortems admit. A model pointed at records that two systems disagree about will produce confident output derived from an argument, and no amount of model work fixes that.',
          'The tell is simple. Ask which system is authoritative for the field the model depends on most. If the answer takes a meeting, the data work is the project and the AI is a label on it.',
          'That is not a reason to abandon the work. It is a reason to sequence it honestly, because a data project described as an AI project will be judged against the wrong expectations and declared a failure when it was actually a necessary first phase.',
        ],
      },
      {
        heading: 'What about projects that work and nobody uses?',
        body: [
          'This is the quietest failure and the one least likely to be reported as one. The system does what was asked, the team moves on, and usage decays until the thing is quietly switched off at the next renewal.',
          'It usually traces back to where the output lands. An answer that arrives in a tool somebody already has open on a Tuesday gets used. An answer that requires logging into something else, at a moment nobody chose, does not.',
          'It also traces back to trust. A system that was wrong early, visibly, and without explanation will not be believed later even after it improves, which is an argument for designing the failure behaviour before the happy path rather than after the first incident.',
        ],
      },
      {
        heading: 'How do you tell which failure you are heading for?',
        body: [
          'Four questions, none of which need an engineer to answer. What decision changes when this works. Which system is authoritative for the data it reads. Who owns it in year two, and have they been told. And what would make us stop, stated before we start.',
          'A project that can answer all four is not guaranteed to succeed, but it has ruled out the four most common ways of failing, which is most of the available risk reduction and costs an afternoon.',
          'A project that cannot answer them is not ready to be scoped, let alone built, and that is a far cheaper thing to discover now than after the prototype has created momentum.',
        ],
      },
      {
        heading: 'Is the honest answer sometimes not to build it?',
        body: [
          'Often. When the volume is low, the engineering, monitoring and maintenance do not get cheaper because the task is rare, and a rare task rarely repays them however irritating it is.',
          'When the underlying process is undocumented, automating it encodes whatever it currently does, including the parts that are wrong, and makes them harder to see afterwards.',
          'And when the real driver is that a competitor announced something. That is a genuine force in these decisions and worth naming out loud in the room, because it is frequently the one actually deciding, and it produces the projects nobody can defend eighteen months later.',
          'We build AI systems, so this is worth stating plainly: the party telling you whether to proceed is usually the party paid to build it. That does not make them wrong. It does mean the question is worth asking somewhere with nothing riding on the answer.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-choose-a-software-development-partner',
    title: 'How to choose a software development partner',
    h1: 'How to choose a software development partner, and what the sales process hides',
    metaTitle: 'How to Choose a Software Partner | Talavishiraaj Groups',
    metaDescription:
      'Portfolios and day rates tell you very little. What to ask instead, which answers actually predict how an engagement goes, and the questions that make a weak firm uncomfortable.',
    published: '2026-11-08',
    readingTime: '10 min read',
    capability: 'delivery',
    caseStudy: 'founder-operations-cockpit',
    summary:
      'Most selection processes compare the things that are easy to compare: portfolio, day rate, team size, logos. None of those predict how the engagement goes. What predicts it is how a firm behaves when the brief is wrong, who owns the outcome when several parties are involved, and whether anyone is willing to tell you the work is not worth doing.',
    takeaways: [
      'Day rate is the least useful comparison available. The same brief is routinely quoted ten times apart because each firm is quoting a different project.',
      'Ask what is excluded, in writing. Integration, testing, monitoring and post launch support are where a low number hides.',
      'Ask what would make them tell you not to build it. A firm with no answer has no criteria.',
      'Ask who maintains it in year two and whether that person has been told.',
      'A portfolio shows what a firm has shipped. It says nothing about what it is like when something goes wrong, which is the thing you are actually buying.',
    ],
    sections: [
      {
        heading: 'How do you choose a software development partner?',
        body: [
          'By testing the things that determine how an engagement goes, rather than the things that are easy to put side by side. Portfolio, day rate, headcount and client logos are all simple to compare and none of them predicts the outcome, which is why selection processes built on them so often end in surprise.',
          'What does predict it: how the firm behaves when the brief turns out to be wrong, whether anyone owns the result when several parties are involved, and whether the firm is structurally able to tell you the work is not worth doing.',
          'Those are observable during selection if you ask for them directly, and almost invisible if you do not.',
        ],
      },
      {
        heading: 'Why is comparing quotes so unreliable?',
        body: [
          'Because the brief is usually underspecified, so each firm is quoting a different project. Published accounts of this market describe the same requirement being quoted at forty thousand by one firm and four hundred thousand by another, and the spread is not dishonesty. It is each party filling the gaps in the brief with different assumptions.',
          'A low quote often assumes a narrower scope, excludes integration, or prices a demonstration rather than something your business can run on. Comparing it to a higher quote that includes those things is not comparing like with like, and the decision that follows is wrong.',
          'The fix is not to collect more quotes. It is to define the requirement well enough that the quotes become comparable, which is work that happens before anyone is approached.',
        ],
      },
      {
        heading: 'What should you ask that most buyers do not?',
        body: [
          'What is excluded, in writing. Testing, monitoring, integration and post launch support are where a low number hides its real cost, and a firm that will not list exclusions is telling you something.',
          'What the three year total looks like, split into build, running and change. A quote that covers only the build is not a cost, it is a deposit. A firm that cannot produce the three year figure has scoped a demonstration rather than a project.',
          'Who maintains this in year two, and has that person been told. The answer is revealing more often than it should be.',
          'And what would make you tell me not to build this. A firm with no answer has no criteria, which means the judgement about whether your project should proceed is being made by someone who gets paid either way.',
        ],
      },
      {
        heading: 'What does a portfolio actually tell you?',
        body: [
          'That the firm has shipped things, which is worth confirming and is a low bar. What it does not show is the part you are buying: what happened when a dependency changed mid build, how a scope disagreement was handled, whether the team that pitched is the team that delivered.',
          'Case studies are selected by the firm and describe successes. That is not deceptive, it is what a case study is for, but it means the useful question is not "show me your work" but "tell me about an engagement that went badly and what you changed afterwards".',
          'A firm that cannot answer that has either not been doing this long or is not being straight with you. Both are useful to know.',
        ],
      },
      {
        heading: 'How do you judge whether they understood the problem?',
        body: [
          'By whether they changed your mind about anything. A firm that reflects your brief back to you in tidier language has told you nothing and has not done any thinking you could not have done yourself.',
          'The signal worth watching for is a reframe: being told that the thing you described as a reporting problem is an integration problem, or that the automation you asked for would encode a process nobody has written down. You do not have to agree. You do have to notice whether anyone is capable of it.',
          'Firms that only ever agree during selection do not become more challenging after the contract is signed.',
        ],
      },
      {
        heading: 'In-house, agency, or something smaller first?',
        body: [
          'Build in house when the capability is core to your business, the requirement is well understood, and you genuinely have the people free. The cost there is hidden rather than absent: it is the roadmap those people stop working on.',
          'Hire an agency when the requirement is settled and what you lack is capacity. The honest warning is that a build quote typically covers the build and not the integration or the years of maintenance after it.',
          'And where the decision itself is not settled, neither of those is the right first purchase. Committing to a build in order to find out whether you should have built it is the most expensive way to answer that question.',
        ],
      },
      {
        heading: 'What should the contract actually pin down?',
        body: [
          'Who owns the outcome when several vendors are involved. Where more than one party is in play, someone has to own the result across them, and if the contract does not name who, the answer in practice is nobody.',
          'What happens when the requirement changes, because it will. What matters is whether that is treated as a costed change with an agreed rate or as an argument.',
          'And how it ends. Documentation, runbooks and training should be scoped at the start, not offered at the end. A partner who becomes structurally necessary has failed at the job, and the measure of the work is that your team can change what was built after they leave.',
        ],
      },
    ],
  },
  {
    slug: 'legacy-system-modernization',
    title: 'Legacy system modernization',
    h1: 'Legacy system modernization, and how to avoid replacing something that works',
    metaTitle: 'Legacy System Modernization | Talavishiraaj Groups',
    metaDescription:
      'Most modernization projects are larger than they needed to be. The four routes, how to tell which one your system needs, and why a full rebuild is usually the wrong first answer.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'tech',
    caseStudy: 'founder-operations-cockpit',
    summary:
      'A legacy system is not an old system, it is one that costs more to work around than to change. That distinction decides the whole project, because the four available routes range from leaving it alone to replacing it entirely, and the expensive mistake is reaching for the last one when the problem only ever justified the second.',
    takeaways: [
      'Age is not the criterion. A twenty year old system nobody needs to change is not a problem.',
      'There are four routes, not one: leave it, wrap it, refactor it in place, or replace it. Most projects jump to the fourth.',
      'Rebuilds fail more often from unrecorded dependencies than from technical difficulty.',
      'The knowledge of why the system behaves as it does is usually the asset at risk, not the code.',
      'If the business cannot run during the migration, the plan is wrong regardless of the architecture.',
    ],
    sections: [
      {
        heading: 'What makes a system legacy?',
        body: [
          'Not its age. A system is legacy when the cost of working around it exceeds the cost of changing it, and that can be true of something built three years ago and false of something built in the nineties.',
          'The practical symptoms are consistent: changes take longer than they should and nobody can say exactly why, people have built private workarounds that the business now depends on, and the group who understand why it behaves as it does is smaller every year.',
          'Defining it this way matters commercially, because "old" invites replacement and "expensive to change" invites a question about which part is expensive. Those lead to very different budgets.',
        ],
      },
      {
        heading: 'What are the options besides replacing it?',
        body: [
          'Four, and replacement is the last. Leave it alone, which is correct more often than it is proposed: a stable system nobody needs to change is not costing you anything by existing. Wrap it, putting an interface in front so other systems can integrate without touching the inside. Refactor in place, improving the parts that actually hurt while it keeps running. Or replace it.',
          'Most proposals arrive as the fourth option because it is the easiest to scope and the most satisfying to present. It is also the one that carries migration risk, retraining cost and a period of reduced capability, so it has to be justified rather than assumed.',
          'The useful discipline is to make the case for each of the first three and record why it was rejected. A rebuild that survives that is a rebuild worth doing.',
        ],
      },
      {
        heading: 'Why do rebuilds go wrong?',
        body: [
          'Rarely for technical reasons. They go wrong because of behaviour nobody wrote down: the edge case the old system handles quietly, the report finance depends on that was never in the specification, the field three other systems read even though it was deprecated years ago.',
          'The second cause is duration. A rebuild long enough to outlast the attention of its sponsors becomes a project nobody can cancel and nobody can finish, running alongside the thing it was meant to replace.',
          'The third is that the new system is specified against what the business says it does rather than what the old system actually does, and those differ more than anyone expects. What people describe and what the systems record is usually where the real requirement is hiding.',
        ],
      },
      {
        heading: 'How do you find out what the system really does?',
        body: [
          'By reading the system rather than the documentation, and by watching who uses what. Logs, query patterns and integration traffic tell you which parts are live and which are decorative, which is information no interview produces reliably.',
          'Then by talking to the people who built the workarounds. They know where the behaviour is that nobody specified, and they are usually not the people invited to the planning meeting.',
          'This phase feels like a delay and is the cheapest insurance available. Published data puts projects that defined the requirement before committing within about 10 to 15 percent of budget, against 30 to 60 percent over for those that skipped it.',
        ],
      },
      {
        heading: 'How do you keep the business running through it?',
        body: [
          'By staging it so there is never a single switch. Strangle the old system gradually: route one capability at a time to the new one, keep both answering until the new one has been right for long enough to trust, and keep the ability to route back.',
          'That is slower and more expensive on paper than a cutover, and it is the difference between a bad week and a bad quarter when something is wrong. The cost of the parallel period is the price of being able to reverse.',
          'If a plan cannot describe how to reverse each step, it is not a migration plan, it is a hope.',
        ],
      },
      {
        heading: 'What does it cost after the project ends?',
        body: [
          'More than the build, which is the part most business cases omit. Annual maintenance commonly runs 15 to 25 percent of the original build cost, every year, and integration with surrounding systems commonly runs 35 to 50 percent of initial development on its own.',
          'A modernization case built on the build figure alone will therefore compare a known cost against an unknown one and reach a confident wrong answer. The comparison that matters is five years of the current system against five years of the proposed one, including both.',
          'Done that way, some modernization projects stop being obviously worth it, which is a useful thing to discover before committing rather than during year two.',
        ],
      },
      {
        heading: 'When is the answer to leave it alone?',
        body: [
          'When it is stable, the change rate is near zero, and the cost of running it is predictable. Systems like that are not debt, they are infrastructure, and replacing them buys modernity rather than value.',
          'When the thing actually causing pain is one integration or one report, which can be solved for a fraction of the cost without touching the core.',
          'And when nobody can state what would be true after the project that is not true now. A modernization with no answer to that is being driven by discomfort with the technology rather than by a business constraint, and discomfort is a poor justification for a multi year commitment.',
        ],
      },
    ],
  },
  {
    slug: 'supply-chain-visibility',
    title: 'What supply chain visibility actually requires',
    h1: 'What supply chain visibility actually requires, beyond a dashboard',
    metaTitle: 'Supply Chain Visibility | Talavishiraaj Groups',
    metaDescription:
      'Most visibility projects buy a dashboard and inherit the same disagreeing data. What has to be true underneath, how to tell a reporting problem from an integration one, and when not to build.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'tech',
    caseStudy: 'live-operations-visibility-layer',
    sectors: ['logistics', 'manufacturing', 'ecommerce'],
    summary:
      'Visibility is usually bought as a screen and fails as a data problem. If three systems disagree about where something is, a dashboard renders the disagreement faster. What makes visibility real is deciding which system is authoritative for each fact, capturing events rather than snapshots, and putting the result where somebody already works.',
    takeaways: [
      'A dashboard built on disagreeing sources renders the disagreement faster. It does not resolve it.',
      'Decide which system is authoritative for each fact before building anything. That argument is the project.',
      'Capture events rather than nightly snapshots, or you can report what happened and never what is happening.',
      'Validate detection against incidents you already know about before trusting it on ones you do not.',
      'Visibility that arrives somewhere nobody already works will be checked for a fortnight and then ignored.',
    ],
    sections: [
      {
        heading: 'What is supply chain visibility?',
        body: [
          'Knowing where things are and what is about to go wrong, early enough to act. That second half is what separates it from reporting: a system that tells you accurately on Thursday what went wrong on Tuesday is a record, not visibility.',
          'The distinction matters commercially because the two cost very different amounts. A record can be assembled from nightly extracts. Acting in time needs events as they happen, which means integration work against systems that were not built to emit them.',
          'Most disappointment in this category comes from buying the first and expecting the second.',
        ],
      },
      {
        heading: 'Why do visibility projects fail so often?',
        body: [
          'Because the hard part is not the screen. A transport system, a warehouse system and a spreadsheet will each hold a different version of where a consignment is, and a dashboard laid over the top renders all three faster without deciding between them.',
          'Once that happens, trust goes quickly. People notice the number is wrong, check the underlying system instead, and the visibility layer becomes a thing nobody looks at that still costs money to run.',
          'The failure is almost always upstream of the tool, which is why changing the tool rarely fixes it.',
        ],
      },
      {
        heading: 'How do you tell a reporting problem from an integration problem?',
        body: [
          'Ask which system is authoritative for the fact you care about most. If somebody can answer immediately, you have a reporting problem and it is tractable: the data exists and is trustworthy, it just is not in front of the right person.',
          'If the answer takes a meeting, you have an integration problem wearing a reporting label, and it is a larger piece of work. That is not bad news if it is discovered now. It is expensive news if it is discovered after a platform has been bought.',
          'The same test applies per field rather than per system. It is common for a business to be authoritative about location and hopeless about expected arrival, and only the second one matters for acting early.',
        ],
      },
      {
        heading: 'What does the work actually involve?',
        body: [
          'Deciding ownership of each fact, which is an organisational conversation rather than a technical one and is usually the longest part.',
          'Capturing events rather than states. A nightly snapshot tells you what was true at midnight; an event stream tells you something moved at eleven. Only the second supports acting before a customer notices.',
          'Establishing a baseline before adding detection. Anomaly logic validated against incidents nobody has confirmed produces alerts nobody believes, and the fastest way to kill an alerting system is to be wrong in its first fortnight.',
          'And putting the output where people already are. An answer in a tool somebody has open anyway gets used. An answer requiring a separate login at a moment nobody chose does not.',
        ],
      },
      {
        heading: 'When is buying a platform the right answer?',
        body: [
          'When your flows are standard, your carriers are already integrated with the platform, and the gap is genuinely a user interface rather than a data model. That is a real situation and the build case against it is weak.',
          'When it is not the right answer: where the useful signal lives in systems the platform does not speak to, where your definition of an exception is specific to how you operate, or where the integration work is the project and the platform is the easy part at the end of it.',
          'Worth costing the exit before signing either way. Switching cost on operational platforms accumulates quietly through integrations and workarounds, and it is far easier to estimate before the contract than after.',
        ],
      },
      {
        heading: 'When should you not build this at all?',
        body: [
          'When nobody can name the decision that changes. If the honest answer to "and then what happens" is that someone looks at a screen, the value is not there yet.',
          'When the volume of exceptions is low enough that a person checking twice a day is genuinely sufficient. Engineering and monitoring do not get cheaper because the problem is rare.',
          'And when the underlying process is not written down. Visibility over an undocumented process shows you the symptoms of decisions nobody has recorded, which generates argument rather than action.',
        ],
      },
    ],
  },
  {
    slug: 'healthcare-interoperability',
    title: 'Healthcare interoperability in practice',
    h1: 'Healthcare interoperability in practice, and why the standard is the easy part',
    metaTitle: 'Healthcare Interoperability | Talavishiraaj Groups',
    metaDescription:
      'FHIR and HL7 describe how systems talk, not what the data means. Where integration projects actually stall, what to settle before writing an interface, and how to scope it honestly.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'tech',
    caseStudy: 'decision-heavy-workflow-automation',
    sectors: ['healthcare', 'agetech', 'insurance'],
    summary:
      'Interoperability is usually scoped as a standards problem and delivered as a semantics problem. Two systems can both speak FHIR and still disagree about what a patient episode is, when it started, and which identifier is the real one. The interface is days of work. Reconciling the meaning is the project.',
    takeaways: [
      'A shared standard means systems can exchange messages. It does not mean they agree what the messages mean.',
      'Identity reconciliation is the most underestimated part of almost every healthcare integration.',
      'Decide the authoritative source per field before building, not during testing.',
      'Workflow matters more than throughput: data arriving outside the moment of care is not used.',
      'Governance is not paperwork here. Who may see what, and who answers when the system is wrong, has to be settled before go live.',
    ],
    sections: [
      {
        heading: 'What is healthcare interoperability?',
        body: [
          'The ability of clinical and administrative systems to exchange information and use it. Both halves are load bearing, and projects consistently scope the first and discover the second.',
          'Exchange is largely solved. Standards exist, most modern systems speak them, and moving a message from one place to another is well understood engineering.',
          'Use is where the work is. A receiving system has to interpret what arrived in the same way the sending system meant it, and that agreement does not come with the standard.',
        ],
      },
      {
        heading: 'If there are standards, why is this still hard?',
        body: [
          'Because a standard governs structure, not meaning. Two systems can both emit a conformant message and still disagree about when an episode of care began, whether a cancelled appointment counts, or which of three identifiers refers to the same person.',
          'Those disagreements are invisible in testing with clean sample data and appear immediately with real records, which is why integration projects so often look finished and then stall at the point of trusting the output.',
          'The implication for scoping is uncomfortable but useful: the interface work is predictable and the semantic work is not, so a plan that budgets mostly for the interface has budgeted for the easy half.',
        ],
      },
      {
        heading: 'What is the most underestimated part?',
        body: [
          'Identity. Deciding that this record and that record describe the same person, when the sources disagree on spelling, date of birth, address history and which number is authoritative.',
          'Every organisation has an answer to this that works well enough for its own purposes and breaks on contact with another organisation’s answer. Reconciling them is slow, needs clinical input rather than only technical input, and cannot be deferred, because everything downstream depends on it being right.',
          'A project that has not named who owns identity reconciliation has not started.',
        ],
      },
      {
        heading: 'What has to be settled before writing an interface?',
        body: [
          'Which system is authoritative for each field, field by field rather than system by system. It is normal for one system to be definitive about demographics and another about clinical events, and the integration has to encode that rather than assume a winner.',
          'What happens when they conflict. Silent precedence rules are the most common source of quiet, long lived data problems, because nothing visibly fails.',
          'What the data is for. An integration built to populate a report has different accuracy and latency requirements from one informing a decision at the bedside, and conflating them produces a system that is over engineered for one use and unsafe for the other.',
        ],
      },
      {
        heading: 'How does workflow decide whether it works?',
        body: [
          'More than throughput does. Information that arrives correctly but outside the moment someone is making a decision is not used, and an integration judged on messages per second can be a complete success by its own metrics and change nothing clinically.',
          'The test is where the output lands. If using it means leaving the system someone already has open, adoption will be poor regardless of data quality.',
          'This is also why pilots mislead. A pilot with motivated participants will use a worse integration than a full rollout will tolerate.',
        ],
      },
      {
        heading: 'How should this be scoped and governed?',
        body: [
          'In stages that each end with something usable, rather than one programme that delivers at the end. Integration work has a long tail of exceptions, and a plan with no intermediate value has no way to stop sensibly.',
          'With governance settled first: who may see what, under what lawful basis, with what audit trail, and who answers when the system produces something wrong. In this sector that is not administrative overhead, it is a precondition.',
          'And with the running cost stated. Integrations have a permanent relationship with systems that are versioned, renamed and replaced without consulting them, so maintenance is not optional and should appear in the business case rather than arriving in year two as a surprise.',
        ],
      },
    ],
  },
  {
    slug: 'iot-device-management',
    title: 'What IoT device management has to handle',
    h1: 'What IoT device management has to handle once the fleet is real',
    metaTitle: 'IoT Device Management | Talavishiraaj Groups',
    metaDescription:
      'A hundred devices forgive almost any design. Ten thousand do not. Provisioning, updates, observability and the failure modes that only appear at scale, plus when to buy rather than build.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'rd',
    caseStudy: 'live-operations-visibility-layer',
    sectors: ['iot', 'ev', 'water', 'agetech'],
    summary:
      'Device management looks straightforward at pilot scale because a hundred devices forgive almost any design decision. The problems that decide whether a product is viable appear later: provisioning without manual steps, updating safely over bad connections, knowing a device is unhealthy before a customer does, and retiring hardware that will outlive the software team.',
    takeaways: [
      'A pilot fleet forgives everything. Design for the fleet size that makes the business work, not the one in the lab.',
      'Over the air update is the single capability that decides whether a product can be supported, and it has to fail safely.',
      'If you cannot tell a broken device from an idle one, support costs scale with the fleet.',
      'Provisioning that needs a human step does not survive volume.',
      'Devices outlive software teams. Whoever maintains this in year five is a design input, not an afterthought.',
    ],
    sections: [
      {
        heading: 'What does IoT device management cover?',
        body: [
          'Getting a device securely onto the network, knowing it is there and working, changing its software safely, and retiring it at end of life. Four things, all unremarkable at small scale and all decisive at large scale.',
          'The reason it is underestimated is that a pilot works without any of it done properly. Devices can be configured by hand, watched informally and updated by someone visiting them.',
          'None of that survives a fleet that earns money, and the gap between the two is where most connected product plans lose their margin.',
        ],
      },
      {
        heading: 'Why does what worked at a hundred units break at ten thousand?',
        body: [
          'Because manual steps that cost minutes become the dominant cost, and because rare failures stop being rare. A fault affecting one device in five hundred is invisible in a pilot and is twenty support cases a week at scale.',
          'Connectivity assumptions break too. In the lab devices are on good networks; in the field they are intermittent, behind unpredictable firewalls, or asleep when you need them.',
          'And the distribution of device states widens. At scale you always have some devices on old firmware, some half provisioned, some that have been offline for months and will reappear expecting the world to be as they left it.',
        ],
      },
      {
        heading: 'What makes over the air updates safe?',
        body: [
          'The ability to fail without bricking. An update interrupted by power loss or a dropped connection has to leave the device bootable, which usually means dual partitions and a verified rollback rather than writing over the running image.',
          'Staged rollout, so a bad build reaches a handful of devices rather than the fleet. The value of that is proportional to how expensive a site visit is, and for devices in the field it is usually the single highest return design decision.',
          'And signing, so a device will only accept software you actually produced. Retrofitting that later is considerably harder than including it.',
        ],
      },
      {
        heading: 'How do you know a device is unhealthy?',
        body: [
          'By deciding in advance what healthy means and having devices report it, rather than inferring from silence. Silence is ambiguous: it means broken, asleep, out of coverage or decommissioned, and the four need different responses.',
          'A heartbeat with a small amount of state is usually enough, and far cheaper in bandwidth than streaming telemetry nobody reads.',
          'The commercial consequence of getting this wrong is that support cost scales with fleet size instead of flattening, because every question requires a human to investigate a specific device.',
        ],
      },
      {
        heading: 'Should you buy a platform or build one?',
        body: [
          'Buy, for most teams, most of the time. Provisioning, update and monitoring are solved problems with mature offerings, and building them is months of work that does not differentiate your product.',
          'Build or extend where your device does something the platform has no concept of, where regulation requires control a vendor will not give you, or where the per device economics of a platform break your unit cost at target volume. That last one is worth modelling at the fleet size that makes the business work rather than at current volume.',
          'Either way, price the exit. Device fleets are long lived, platform relationships are sticky, and the cost of moving is much easier to estimate before signing than after.',
        ],
      },
      {
        heading: 'What gets forgotten until it is expensive?',
        body: [
          'End of life. Devices outlive the teams that built them, and a fleet with no decommissioning path accumulates hardware that still connects, still consumes certificates, and still appears in support queues years after anyone intended to support it.',
          'Certificate and credential rotation, which arrives suddenly as an expiry date and is painful to do for the first time under pressure.',
          'And documentation of why things are the way they are. The engineer who knew why a timeout is set to that particular value is the most important dependency in most device fleets, and that dependency is rarely written down.',
        ],
      },
    ],
  },
  {
    slug: 'erp-integration',
    title: 'ERP integration, and what makes it expensive',
    h1: 'ERP integration, and the part that makes it expensive',
    metaTitle: 'ERP Integration | Talavishiraaj Groups',
    metaDescription:
      'The connector is rarely the hard part. Process mismatch, master data ownership and customisation are where ERP integration projects overrun, and all three are visible before you start.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'tech',
    caseStudy: 'founder-operations-cockpit',
    sectors: ['manufacturing', 'chemical', 'logistics', 'ecommerce'],
    summary:
      'ERP integration is usually budgeted as connector work and overruns on everything else: whose definition of a customer wins, which system owns a price, and how much of your business logic lives in customisations nobody documented. Published figures put integration at a third to a half of initial development cost, and ERP is the clearest example of why.',
    takeaways: [
      'The connector is days. Reconciling what the two systems mean is the project.',
      'Master data ownership has to be decided per entity before any interface is written.',
      'Customisations are where business logic hides, and they do not travel.',
      'Batch versus real time is a business decision disguised as a technical one.',
      'If the integration cannot be reversed step by step, the plan is a hope rather than a migration.',
    ],
    sections: [
      {
        heading: 'What makes ERP integration harder than it looks?',
        body: [
          'Not the connection. Most ERPs expose reasonable interfaces and moving records between systems is understood work that can be estimated with confidence.',
          'What cannot be estimated from the outside is the mismatch underneath: two systems holding different definitions of a customer, an order, a unit of measure or a completed job, each correct within its own context and incompatible across the boundary.',
          'Published analysis puts integration work at roughly a third to a half of initial development cost and names it the most frequent source of overrun. ERP is where that shows up most clearly, because the ERP is usually the system with the strongest opinions.',
        ],
      },
      {
        heading: 'What is master data ownership and why decide it first?',
        body: [
          'It is the answer to "when these two systems disagree about this field, which one is right". It has to be decided per entity, sometimes per field, and it is an organisational decision rather than a technical one.',
          'Deciding it first is cheap. Discovering it during testing means rework, and discovering it after go live means two systems quietly diverging while everyone assumes they are in sync.',
          'The common failure is deciding it implicitly, through whichever interface was written first. That produces a rule nobody chose and nobody can find.',
        ],
      },
      {
        heading: 'Why are customisations such a problem?',
        body: [
          'Because that is where the business logic lives. The workflow rule, the discount exception, the approval step someone added years ago and the report finance depends on are usually not in the standard system, and they are not in the documentation either.',
          'They also do not travel. Logic written in a vendor specific language has to be rebuilt rather than moved, and the first step is working out what it currently does, which is slower than rewriting it.',
          'This is the strongest argument for reading the system rather than interviewing about it. What people describe and what the customisations actually do differ more than anyone expects, and the gap is where the overrun comes from.',
        ],
      },
      {
        heading: 'Real time or batch?',
        body: [
          'A business question before a technical one. Real time costs more to build and considerably more to operate, because every failure becomes urgent and every dependency becomes a availability requirement.',
          'Batch is cheaper, more forgiving and sufficient for most reporting and reconciliation. It is insufficient wherever someone acts on the data inside the batch window, and that is the only test that matters.',
          'Mixing them deliberately is usually the right answer, and mixing them accidentally, by making everything real time because it sounded better, is a common way to buy operational burden nobody needed.',
        ],
      },
      {
        heading: 'How should the rollout be staged?',
        body: [
          'One entity at a time, each stage reversible, with both systems answering until the new path has been right for long enough to trust.',
          'That is slower on paper than a cutover and it is the difference between a bad afternoon and a bad quarter. If a plan cannot describe how to reverse each step, it is not a migration plan.',
          'Run a reconciliation during the parallel period and look at it. A parallel run nobody checks provides the comfort of a safety net without the safety.',
        ],
      },
      {
        heading: 'What should be in the business case that usually is not?',
        body: [
          'The running cost. An integration has a permanent relationship with systems that are upgraded, renamed and replaced without consulting it, and annual maintenance commonly runs 15 to 25 percent of the original build cost.',
          'The cost of the parallel period, which is real and is the price of being able to reverse.',
          'And who owns it in year two. Integrations fail quietly rather than loudly, and an integration with no owner degrades until someone downstream notices a number is wrong, by which point the cause is months old.',
        ],
      },
    ],
  },
  {
    slug: 'document-processing-automation',
    title: 'When document processing automation is worth it',
    h1: 'When document processing automation is worth it, and when a form is better',
    metaTitle: 'Document Processing Automation | Talavishiraaj Groups',
    metaDescription:
      'Extraction accuracy is the wrong first question. What the error actually costs, why exception handling decides the economics, and the cheaper fix most businesses skip.',
    published: '2026-11-08',
    readingTime: '9 min read',
    capability: 'ai',
    caseStudy: 'decision-heavy-workflow-automation',
    sectors: ['finance', 'insurance', 'healthcare', 'logistics'],
    summary:
      'Document automation is usually evaluated on extraction accuracy and lives or dies on exception handling. A system that reads ninety five percent of documents correctly still routes one in twenty to a person, and whether that is a success depends entirely on how expensive the remaining five percent are to find and fix.',
    takeaways: [
      'Accuracy is not the metric. The cost of an undetected error is.',
      'Exceptions decide the economics, so design the exception path before the happy path.',
      'A confidence score you cannot act on is decoration.',
      'Automating a document you could stop producing is the most expensive way to solve that problem.',
      'Low volume rarely repays the engineering and the permanent maintenance, however irritating the task.',
    ],
    sections: [
      {
        heading: 'What is document processing automation?',
        body: [
          'Reading information out of documents that were not designed to be read by software, and putting it somewhere a process can use. Invoices, forms, certificates, statements, claims, delivery notes.',
          'It is often described as a solved problem, and the extraction part largely is. Modern systems read structured and semi structured documents well.',
          'What is not solved is what happens when they are unsure, which is where the value and the cost both sit.',
        ],
      },
      {
        heading: 'Why is accuracy the wrong first question?',
        body: [
          'Because accuracy without a cost of error is a number with no meaning. Ninety five percent is excellent for routing documents to a team and unacceptable for posting payments without review.',
          'The question that decides the design is what an undetected mistake costs, and how long it takes to surface. A wrong figure caught in the same hour is an annoyance. The same error found at period end, after it has propagated, is a different category of problem.',
          'Work that out first and the required accuracy, the review design and the budget all follow from it. Start with accuracy and you have specified a system without knowing what it is for.',
        ],
      },
      {
        heading: 'Why do exceptions decide the economics?',
        body: [
          'Because the automated path is cheap and the exception path is not. If one document in twenty needs a person, the cost of the system is largely the cost of that one, including the time to work out what the machine found confusing.',
          'That makes exception design the main design task, not an edge case to handle later. A person picking up an exception needs the document, the extracted values, what the system was unsure about and a fast way to correct it. Without that they re key the whole thing and the saving disappears.',
          'It also means the honest success metric is total handling time across all documents, not accuracy on the easy ones.',
        ],
      },
      {
        heading: 'What makes a confidence score useful?',
        body: [
          'Being calibrated and being actionable. A score is useful when a chosen threshold reliably separates documents that can pass unreviewed from those that cannot, and when someone has decided where that threshold sits and who owns moving it.',
          'A score nobody acts on is decoration, and a threshold set once at launch and never revisited drifts as document mixes change.',
          'The practical test: can you state what percentage of documents pass without review today, and what happened the last time that number moved. If not, the score is not doing work.',
        ],
      },
      {
        heading: 'When is a simpler fix better?',
        body: [
          'When you control the document. A form, a template or a structured upload removes the extraction problem rather than solving it, and is cheaper to build and to run. Businesses routinely automate the reading of documents they could have stopped producing in that shape.',
          'When the volume is low. Engineering, monitoring and maintenance do not get cheaper because the task is rare, and a rare task rarely repays them however irritating it is.',
          'And when the process behind the document is not written down. Automating extraction into an undocumented process encodes whatever it currently does, including the parts that are wrong.',
        ],
      },
      {
        heading: 'What does it cost after it works?',
        body: [
          'More than the build, and it arrives as drift. Suppliers change their layouts, regulations change the fields, and a system that was accurate at launch degrades without anyone changing anything.',
          'That makes monitoring a requirement rather than an enhancement. Without it the first person to notice a drop in accuracy is whoever receives the wrong output, and by then it has been happening for a while.',
          'Budget for an evaluation set you can rerun and someone whose job includes rerunning it. An automation nobody is watching will fail silently, and silent failure is worse than the manual process it replaced.',
        ],
      },
    ],
  },
];

export const insightBySlug = (slug) => insights.find((a) => a.slug === slug);
export const insightPath = (article) => `/insights/${article.slug}`;
/**
 * Articles that speak to a sector.
 *
 * The sector pages and the articles were built in separate passes and had no
 * link between them, which left each sector page ending in a call to action
 * with nothing to read first, and left articles about a sector's exact
 * problem invisible from that sector's page. An article declares its sectors
 * rather than a sector listing its articles, so adding a piece wires it up
 * without editing anything else.
 */
export const insightsForSector = (sectorId) =>
  insights.filter((a) => (a.sectors || []).includes(sectorId));

export const insightsForCapability = (capabilityId) =>
  insights.filter((a) => a.capability === capabilityId);

export const INSIGHTS_TITLE = 'Insights: Engineering, AI and Systems | Talavishiraaj Groups';
export const INSIGHTS_DESCRIPTION =
  'Practical answers to the questions that come up before a project starts: what production readiness actually requires, when automation is worth engineering, and how to judge technical work before committing to it.';
