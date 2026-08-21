// Slug: glm-5-2-open-weights-frontier-2026
// Cluster: local-llms
// Freshness: semi_annual — refresh when GLM-5.3 or Opus 4.9 ships; next_refresh_due 2026-12-16

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-en.webp',
    title: "GLM-5.2: The #1 Open-Weights Model of 2026 (and Why It Still Won't Run at Home)",
    seoTitle: 'GLM-5.2: Top Open-Weights LLM of 2026 — Honest Take',
    intro: 'GLM-5.2, released June 13, 2026 by Z.ai (formerly Zhipu AI), is the highest-scoring open-weights large language model on the independent Artificial Analysis Intelligence Index v4.1 — 51 points, ranking #1 among open models and 4th overall. It beats GPT-5.5 on coding benchmarks but still trails Claude Opus 4.8 in most head-to-head comparisons. This article separates the independent results from Z.ai\'s own claims, and explains why a ~744B-parameter open model is not something you can run at home.',
    metaDescription: 'GLM-5.2 is the #1 open-weights LLM on the Artificial Analysis Index (June 2026) — 4th overall. It beats GPT-5.5 on coding but trails Opus 4.8, and its ~744B size won\'t run at home.',
    twitterDescription: 'GLM-5.2 is the top open-weights LLM of June 2026 (4th overall on the Artificial Analysis Index). Beats GPT-5.5 on coding, trails Opus 4.8 — and ~744B params means it won\'t run at home.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2, released June 13, 2026 by Z.ai (formerly Zhipu AI), is the highest-scoring open-weights LLM on the Artificial Analysis Intelligence Index v4.1 — 51 points, #1 among open models and 4th overall. It leads open weights; it does not beat the closed frontier. And at ~744B parameters, "open and self-hostable" does not mean "runs on your laptop."**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2 is the leading open-weights LLM of mid-2026 by independent benchmarks, but its ~744B-parameter size requires multi-GPU or rented infrastructure, not consumer hardware.' },
      { type: 'plain-terms', text: 'GLM-5.2 is a free-to-download AI model that scores higher than any other open model right now. It is very large, so most people cannot run the full version at home — you either rent a powerful GPU or use a heavily shrunk-down version.' },
    ],
    quickAnswerTop: {
      question: 'Is GLM-5.2 the best open-weights model right now, and can I self-host it?',
      answer: 'As of June 2026, GLM-5.2 is the top-ranked open-weights model on the Artificial Analysis Intelligence Index (51 points, #1 open and 4th overall). The MIT license lets you self-host it with no regional limits, but the full ~744B model needs serious hardware. Most individuals run a heavily quantized build or rent a GPU.',
      bullets: [
        '#1 open-weights / 4th overall (Artificial Analysis Intelligence Index v4.1)',
        'MIT license, no regional limits, free to self-host',
        '~744B total parameters / ~40B active (Mixture-of-Experts)',
        '1M-token context window',
        'Beats GPT-5.5 on coding; trails Claude Opus 4.8 in most head-to-heads',
        '~1/6th the cost of closed-frontier models via the hosted API',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Is GLM-5.2?', anchor: '#what-is-glm-5-2' },
      { label: 'Independent Benchmarks', anchor: '#independent-benchmarks' },
      { label: "Z.ai's Own Numbers", anchor: '#claimed-numbers' },
      { label: 'Can You Run It at Home?', anchor: '#run-at-home' },
      { label: 'Self-Hosted vs the Z.ai API', anchor: '#data-path' },
      { label: 'Pricing and Cost', anchor: '#pricing' },
      { label: 'Should You Use GLM-5.2?', anchor: '#decision' },
      { label: 'Regional Context', anchor: '#regional-context' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**#1 open-weights, 4th overall.** GLM-5.2 scores **51** on the Artificial Analysis Intelligence Index v4.1 — the top open-weights model, 4th overall, **+11 over GLM-5.1 (40)**, and ~7 points clear of the next open models, MiniMax-M3 (44) and DeepSeek V4 Pro (44).',
          '**It leads open weights, not the whole field.** It sits roughly 5 points below Claude Fable 5 and ranks behind the closed frontier overall. "Closes the gap" — not "beats the frontier."',
          '**Strong on coding, second to Opus 4.8.** Independent coding results put GLM-5.2 ahead of GPT-5.5 yet behind Claude Opus 4.8 in most head-to-head comparisons.',
          '**~744B parameters is not home-runnable.** It is Mixture-of-Experts (~40B active per token), but the full model needs multi-GPU or a rented GPU; only heavily quantized 1-bit GGUF builds fit consumer hardware.',
          '**Self-hosted weights keep your data; the Z.ai API does not necessarily.** MIT-licensed weights run inside your boundary; the first-party Z.ai API carries China data-residency considerations.',
          '**Treat Z.ai\'s own benchmarks as company-reported.** Reproducibility is contested — lead with the independent Artificial Analysis numbers.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'What Is GLM-5.2?',
        content: [
          '**GLM-5.2 is an open-weights large language model released June 13, 2026 by Z.ai (formerly Zhipu AI), under the MIT license with no regional usage limits.** It was publicly benchmarked from June 16, 2026.',
        ],
        items: [
          '**~744B total parameters** (sources cite 743B–753B), using a **Mixture-of-Experts** architecture with **~40B active parameters per token**.',
          '**1M-token context window** with a **131,072-token maximum output**.',
          '**~43,000 output tokens per task** on average — up from GLM-5.1\'s ~26,000 — which raises local inference time and cost.',
          '**MIT license:** free to download, self-host, and modify, with no regional restrictions.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'How Good Is GLM-5.2? Independent Benchmarks First',
        content: [
          '**On the one independent, cross-vendor ranking — the Artificial Analysis Intelligence Index v4.1 — GLM-5.2 is the highest open-weights model at 51 points, 4th overall (Artificial Analysis, June 2026).**',
        ],
        rows: [
          { 'Model': 'Claude Fable 5', 'Index v4.1': '~56', 'Tier': 'Closed frontier' },
          { 'Model': 'GLM-5.2', 'Index v4.1': '51', 'Tier': '#1 open weights / 4th overall' },
          { 'Model': 'MiniMax-M3', 'Index v4.1': '44', 'Tier': 'Open weights' },
          { 'Model': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'Tier': 'Open weights' },
          { 'Model': 'GLM-5.1 (previous)', 'Index v4.1': '40', 'Tier': 'Open weights' },
        ],
        columns: ['Model', 'Index v4.1', 'Tier'],
        note: 'Independent coding results: Terminal-Bench 2.1 — GLM-5.2 scores 81.0 vs Claude Opus 4.8 at 85.0. SWE-bench Pro — GLM-5.2 at 62.1 (Z.ai-reported point value) lands ahead of GPT-5.5\'s 58.6; independent coverage corroborates that ordering. FrontierSWE — GLM-5.2 at 74.4 (Z.ai-reported point value) beats GPT-5.5 (72.6) and trails Opus 4.8 (75.1) by about one point, an ordering independent reporting confirms. Net independent verdict: GLM-5.2 is the strongest open-source coding model available as of June 2026, but it still trails Claude Opus 4.8 in most head-to-head comparisons (VentureBeat; letsdatascience, June 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1 (June 2026): Claude Fable 5 scores 56, GLM-5.2 scores 51 (#1 open weights, 4th overall), MiniMax-M3 and DeepSeek V4 Pro both score 44, GLM-5.1 scores 40.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: "Z.ai's Own Numbers vs Independent Results: Read With Care",
        content: [
          '**Several headline figures come from Z.ai\'s own evaluations and should be read as company-reported, not independently verified.**',
        ],
        items: [
          '**Company-reported coding figures** — for example MCP-Atlas 77.0 (Z.ai-reported), against GPT-5.5 at 75.3 and Opus 4.8 at 77.8 — are run by Z.ai itself and should be treated as claims pending independent replication.',
          '**The Artificial Analysis writeup notes Z.ai\'s internal evaluations were reported weaker than its published benchmarks**, and reproducibility is contested.',
          '**Reproducibility is an open question.** At least one prominent commentator characterizes the model as "bench-maxxed," and GLM-5.1 reportedly scored 0% on at least one benchmark that GLM-5.2 now does well on. The independent Artificial Analysis Index — not Z.ai\'s own suite — is what currently supports the #1-open-weights claim.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'Can You Run GLM-5.2 at Home? The ~744B Reality Check',
        content: [
          '**No — not the full model. "Open weights" and "self-hostable" do not mean "runs on a typical home PC."**',
        ],
        items: [
          '**Full GLM-5.2 needs serious infrastructure:** multi-GPU servers or a rented cloud GPU.',
          '**On consumer hardware, only heavily quantized 1-bit GGUF builds are feasible**, with quality and speed trade-offs.',
          '**The high ~43,000-tokens-per-task output further raises local time and cost.**',
          'For the hardware reality of large local models, see [Running 70B Models on Consumer Hardware](/local-llms/70b-models-consumer-hardware), [Used GPUs for Local LLMs](/local-llms/used-gpus-for-local-llms), the [Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026), and [Apple Silicon M5 for Local LLMs](/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'Full GLM-5.2 (~744B parameters, ~40B active) needs a multi-GPU server or rented cloud GPU; only 1-bit GGUF quantized builds run on a single consumer GPU or CPU at home, with reduced quality.',
      },
      dataPath: {
        id: 'data-path',
        title: 'Self-Hosted Weights vs the Z.ai API: Where Your Data Goes',
        content: [
          '**The license and the API are two different data-governance stories. Self-hosted MIT weights keep your data inside your boundary; the first-party Z.ai API does not.**',
        ],
        items: [
          '**Self-hosted (MIT weights):** data stays local and yours — no third-party transmission.',
          '**Z.ai first-party API:** independent coverage explicitly flags China data-residency considerations ("China data risk") on the API path (TechTimes, June 17, 2026).',
          '**Decision framing:** if data sensitivity matters, self-host the weights; if you use the hosted API, treat it as you would any third-party cloud endpoint subject to its jurisdiction.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'GLM-5.2 Pricing and Cost',
        content: [
          '**Via the hosted API, GLM-5.2 runs at roughly one-sixth the cost of closed-frontier models (VentureBeat, June 2026).** Reported pricing is approximately $1.4 per 1M input tokens and $4.4 per 1M output tokens (as of June 2026). Factor in the high per-task output (~43,000 tokens) when estimating real workload cost.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Should You Use GLM-5.2?',
        decisionBlock: {
          title: 'GLM-5.2 decision guide',
          localIf: [
            'You want the strongest open-weights model available right now',
            'You need self-hosting and data control inside your own boundary',
            'You run long-horizon coding tasks',
            'You want frontier-adjacent quality at roughly one-sixth the cost',
          ],
          cloudIf: [
            'You need the top score in head-to-head coding or reasoning',
            'You do not require open weights and prefer a closed frontier model such as Claude Opus 4.8',
            'You cannot provision multi-GPU or rented GPU infrastructure',
          ],
          quick: [
            'Best open-weights option today — but verify the contested benchmarks against your own tasks before committing.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: Regional Context',
        content: [
          '**EU / GDPR:** Self-hosting GLM-5.2 under the MIT license keeps all inference data inside your own infrastructure, which satisfies data-residency expectations under the GDPR. The compliance difference between models is in supplier documentation, not data handling, when inference runs locally.',
          '**Japan (METI):** For production deployments, document the model version (GLM-5.2), license (MIT), and whether inference runs on self-hosted weights or the Z.ai API, in line with METI AI governance guidance.',
          '**China / data path:** GLM-5.2 is built by a Chinese lab. The key compliance lever is the deployment path, not the model: self-hosted MIT weights keep data in your boundary, while the first-party Z.ai API is subject to its home jurisdiction. Choose the path that matches your data-residency requirements.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes When Evaluating GLM-5.2',
        items: [
          '**Assuming "open weights" means "runs at home."** The ~744B size requires multi-GPU or rented infrastructure; only 1-bit GGUF builds fit consumer hardware.',
          '**Treating Z.ai\'s first-party benchmarks as verified.** Lead with the independent Artificial Analysis Index; treat company-run coding numbers as claims.',
          '**Conflating the MIT weights with the hosted API for data governance.** Self-hosting keeps data local; the API is subject to its home jurisdiction.',
          '**Reading "#1 open weights" as "beats the frontier."** GLM-5.2 is 4th overall and trails Claude Opus 4.8 in most head-to-heads.',
          '**Ignoring the ~43,000-token-per-task output** when budgeting inference time and cost.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running 70B Models on Consumer Hardware](/local-llms/70b-models-consumer-hardware) — what large local models actually demand from your hardware.',
          '[Used GPUs for Local LLMs](/local-llms/used-gpus-for-local-llms) — cost-effective GPU paths when you need real inference capacity.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — match your hardware to the model class you want to run.',
          '[Apple Silicon M5 for Local LLMs](/local-llms/apple-silicon-m5-local-llm) — unified-memory options for running larger models locally.',
          '[Local LLM Model Updates 2026](/local-llms/local-llm-model-updates-2026) — every major open-weight release tracked this year.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is GLM-5.2 the best open-weights model right now?',
            a: 'By the independent Artificial Analysis Intelligence Index v4.1 (June 2026), yes — GLM-5.2 scores 51, the top open-weights result and 4th overall. It leads the next open models, MiniMax-M3 and DeepSeek V4 Pro (both 44), by about 7 points. It does not, however, beat the closed frontier overall.',
          },
          {
            q: 'Can I run GLM-5.2 on a normal PC or Mac?',
            a: 'Not the full model. At ~744B parameters it needs multi-GPU servers or a rented cloud GPU. On consumer hardware you are limited to heavily quantized 1-bit GGUF builds, which trade quality and speed. See our hardware guides for what large local models actually require.',
          },
          {
            q: 'Does GLM-5.2 beat GPT-5.5 and Claude Opus 4.8?',
            a: 'On coding, independent results put GLM-5.2 ahead of GPT-5.5 (for example SWE-bench Pro and FrontierSWE orderings). Against Claude Opus 4.8 it trails in most head-to-head comparisons — for example Terminal-Bench 2.1 (81.0 vs 85.0) and FrontierSWE (about one point behind). The accurate summary is "leads open weights, closes the gap to the frontier," not "beats the frontier."',
          },
          {
            q: 'Is GLM-5.2 really free? What is the license?',
            a: 'GLM-5.2 is released under the MIT license with no regional usage limits, so you can download, self-host, and modify it for free. Running the full model still costs real infrastructure (multi-GPU or rented GPU), and the hosted Z.ai API is a paid service.',
          },
          {
            q: 'Is my data safe with GLM-5.2?',
            a: 'It depends on the deployment path. Self-hosted MIT weights keep all data inside your own boundary. The first-party Z.ai API carries China data-residency considerations flagged by independent coverage, so treat it as you would any third-party cloud endpoint subject to its jurisdiction.',
          },
          {
            q: 'Are GLM-5.2\'s benchmark numbers trustworthy?',
            a: 'The independent Artificial Analysis Index corroborates the #1-open-weights ranking. Z.ai\'s own coding numbers are company-reported, and reproducibility is contested — the Artificial Analysis writeup notes internal evaluations were reported weaker than published benchmarks. Lead with the independent numbers and treat first-party figures as claims.',
          },
          {
            q: 'How much does GLM-5.2 cost to run via API?',
            a: 'Roughly one-sixth the cost of closed-frontier models. Reported pricing is approximately $1.4 per 1M input tokens and $4.4 per 1M output tokens (June 2026). Because GLM-5.2 averages ~43,000 output tokens per task, estimate real cost on your own workload rather than per-token rates alone.',
          },
          {
            q: 'What hardware do I need to self-host GLM-5.2 properly?',
            a: 'For the full model, multi-GPU servers or a rented cloud GPU. Consumer hardware can only run heavily quantized 1-bit GGUF builds. See the Local LLM Hardware Guide 2026, Used GPUs for Local LLMs, and Running 70B Models on Consumer Hardware to size your setup.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — Independent Intelligence Index v4.1 ranking (51, #1 open / 4th overall).',
          'TechTimes. (2026, June 17). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Data-residency considerations on the Z.ai API path.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — Independent coding comparison and cost framing.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — Independent coverage of coding results.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': "GLM-5.2: The #1 Open-Weights Model of 2026 (and Why It Still Won't Run at Home)",
      'description': 'GLM-5.2 is the #1 open-weights LLM on the Artificial Analysis Intelligence Index (June 2026), 4th overall. It beats GPT-5.5 on coding but trails Opus 4.8, and its ~744B size is not home-runnable.',
      'url': 'https://www.promptquorum.com/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'en',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — Top Models (June 2026)',
      'inLanguage': 'en',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'Closed frontier. Artificial Analysis Intelligence Index v4.1 score ~56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': '#1 open weights, 4th overall. Artificial Analysis Intelligence Index v4.1 score 51. Released June 13, 2026 by Z.ai under MIT license.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'Open weights. Artificial Analysis Intelligence Index v4.1 score 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'Open weights. Artificial Analysis Intelligence Index v4.1 score 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Previous Z.ai release. Artificial Analysis Intelligence Index v4.1 score 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'en',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Is GLM-5.2 the best open-weights model right now?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'By the independent Artificial Analysis Intelligence Index v4.1 (June 2026), yes — GLM-5.2 scores 51, the top open-weights result and 4th overall, leading MiniMax-M3 and DeepSeek V4 Pro (both 44) by about 7 points. It does not beat the closed frontier overall.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Can I run GLM-5.2 on a normal PC or Mac?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Not the full model. At ~744B parameters it needs multi-GPU servers or a rented cloud GPU. On consumer hardware you are limited to heavily quantized 1-bit GGUF builds, which trade quality and speed.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Does GLM-5.2 beat GPT-5.5 and Claude Opus 4.8?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'On coding, independent results put GLM-5.2 ahead of GPT-5.5. Against Claude Opus 4.8 it trails in most head-to-heads — for example Terminal-Bench 2.1 (81.0 vs 85.0) and FrontierSWE (about one point behind). It leads open weights and closes the gap, but does not beat the frontier.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is GLM-5.2 really free? What is the license?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2 is released under the MIT license with no regional usage limits, so you can download, self-host, and modify it for free. Running the full model still costs real infrastructure, and the hosted Z.ai API is a paid service.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Is my data safe with GLM-5.2?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'It depends on the deployment path. Self-hosted MIT weights keep all data inside your own boundary. The first-party Z.ai API carries China data-residency considerations flagged by independent coverage, so treat it as any third-party cloud endpoint subject to its jurisdiction.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Are GLM-5.2 benchmark numbers trustworthy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The independent Artificial Analysis Index corroborates the #1-open-weights ranking. Z.ai\'s own coding numbers are company-reported and reproducibility is contested, so lead with the independent numbers and treat first-party figures as claims.',
          },
        },
        {
          '@type': 'Question',
          'name': 'How much does GLM-5.2 cost to run via API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Roughly one-sixth the cost of closed-frontier models. Reported pricing is about $1.4 per 1M input tokens and $4.4 per 1M output tokens (June 2026). Because GLM-5.2 averages ~43,000 output tokens per task, estimate cost on your own workload.',
          },
        },
        {
          '@type': 'Question',
          'name': 'What hardware do I need to self-host GLM-5.2 properly?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'For the full model, multi-GPU servers or a rented cloud GPU. Consumer hardware can only run heavily quantized 1-bit GGUF builds. See the Local LLM Hardware Guide 2026 and related hardware guides to size your setup.',
          },
        },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-ar.webp',
    title: 'GLM-5.2: نموذج الأوزان المفتوحة رقم 1 لعام 2026 (ولماذا لا يعمل في المنزل بعد)',
    seoTitle: 'GLM-5.2: أقوى نموذج أوزان مفتوحة 2026 — تقييم صادق',
    intro: 'GLM-5.2، الذي أطلقته شركة Z.ai (المعروفة سابقًا باسم Zhipu AI) في 13 يونيو 2026، هو نموذج اللغة الكبير ذو الأوزان المفتوحة الأعلى تسجيلًا على مؤشر Artificial Analysis Intelligence Index v4.1 المستقل — بـ 51 نقطة، محتلًا المركز الأول بين النماذج المفتوحة والمركز الرابع إجمالًا. يتفوق على GPT-5.5 في اختبارات البرمجة لكنه لا يزال متأخرًا عن Claude Opus 4.8 في معظم المقارنات المباشرة. يفصل هذا المقال النتائج المستقلة عن ادعاءات Z.ai الخاصة، ويوضح لماذا لا يمكنك تشغيل نموذج مفتوح بحجم ~744B معاملًا في المنزل.',
    metaDescription: 'GLM-5.2 هو نموذج الأوزان المفتوحة رقم 1 على مؤشر Artificial Analysis (يونيو 2026) والرابع إجمالًا. يتفوق على GPT-5.5 في البرمجة لكنه أقل من Opus 4.8، وحجمه ~744B لا يعمل في المنزل.',
    twitterDescription: 'GLM-5.2 هو أقوى نموذج أوزان مفتوحة في يونيو 2026 (الرابع إجمالًا على مؤشر Artificial Analysis). يتفوق على GPT-5.5 في البرمجة، ويتأخر عن Opus 4.8 — وحجمه ~744B معاملًا يعني أنه لن يعمل في المنزل.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2، الذي أطلقته Z.ai (المعروفة سابقًا باسم Zhipu AI) في 13 يونيو 2026، هو نموذج اللغة الكبير ذو الأوزان المفتوحة الأعلى تسجيلًا على مؤشر Artificial Analysis Intelligence Index v4.1 — بـ 51 نقطة، الأول بين النماذج المفتوحة والرابع إجمالًا. يتصدر الأوزان المفتوحة؛ لكنه لا يتغلب على الحدود المغلقة. وبحجم ~744B معاملًا، فإن «مفتوح وقابل للاستضافة الذاتية» لا يعني «يعمل على حاسوبك المحمول».**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2 هو نموذج الأوزان المفتوحة الرائد في منتصف 2026 وفق الاختبارات المستقلة، لكن حجمه البالغ ~744B معاملًا يتطلب بنية تحتية متعددة وحدات GPU أو مستأجرة، وليس عتادًا استهلاكيًا.' },
      { type: 'plain-terms', text: 'GLM-5.2 هو نموذج ذكاء اصطناعي مجاني التنزيل يسجل أعلى من أي نموذج مفتوح آخر حاليًا. إنه كبير جدًا، لذا لا يستطيع معظم الناس تشغيل النسخة الكاملة في المنزل — إما أن تستأجر GPU قويًا أو تستخدم نسخة مصغّرة بشدة.' },
    ],
    quickAnswerTop: {
      question: 'هل GLM-5.2 هو أفضل نموذج أوزان مفتوحة حاليًا، وهل يمكنني استضافته ذاتيًا؟',
      answer: 'اعتبارًا من يونيو 2026، GLM-5.2 هو نموذج الأوزان المفتوحة الأعلى ترتيبًا على مؤشر Artificial Analysis Intelligence Index (51 نقطة، الأول بين المفتوحة والرابع إجمالًا). يتيح لك ترخيص MIT استضافته ذاتيًا دون قيود إقليمية، لكن النموذج الكامل بحجم ~744B يحتاج إلى عتاد قوي. يشغّل معظم الأفراد نسخة مكمّمة بشدة أو يستأجرون GPU.',
      bullets: [
        'الأول بين الأوزان المفتوحة / الرابع إجمالًا (Artificial Analysis Intelligence Index v4.1)',
        'ترخيص MIT، دون قيود إقليمية، مجاني للاستضافة الذاتية',
        '~744B معاملًا إجماليًا / ~40B نشطًا (Mixture-of-Experts)',
        'نافذة سياق بحجم 1M رمز',
        'يتفوق على GPT-5.5 في البرمجة؛ ويتأخر عن Claude Opus 4.8 في معظم المقارنات المباشرة',
        'بتكلفة ~1/6 من النماذج المغلقة المتقدمة عبر واجهة API المستضافة',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'ما هو GLM-5.2؟', anchor: '#what-is-glm-5-2' },
      { label: 'الاختبارات المستقلة', anchor: '#independent-benchmarks' },
      { label: 'أرقام Z.ai الخاصة', anchor: '#claimed-numbers' },
      { label: 'هل يمكنك تشغيله في المنزل؟', anchor: '#run-at-home' },
      { label: 'الاستضافة الذاتية مقابل واجهة Z.ai API', anchor: '#data-path' },
      { label: 'التسعير والتكلفة', anchor: '#pricing' },
      { label: 'هل يجب أن تستخدم GLM-5.2؟', anchor: '#decision' },
      { label: 'السياق الإقليمي', anchor: '#regional-context' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**الأول بين الأوزان المفتوحة، الرابع إجمالًا.** يسجل GLM-5.2 **51** نقطة على مؤشر Artificial Analysis Intelligence Index v4.1 — نموذج الأوزان المفتوحة الأعلى، الرابع إجمالًا، **+11 فوق GLM-5.1 (40)**، وبفارق ~7 نقاط عن أقرب النماذج المفتوحة، MiniMax-M3 (44) وDeepSeek V4 Pro (44).',
          '**يتصدر الأوزان المفتوحة، لا المجال بأكمله.** يقع نحو 5 نقاط تحت Claude Fable 5 ويأتي خلف الحدود المغلقة إجمالًا. «يقلّص الفجوة» — وليس «يتغلب على الحدود».',
          '**قوي في البرمجة، ثانٍ بعد Opus 4.8.** تضع نتائج البرمجة المستقلة GLM-5.2 متقدمًا على GPT-5.5 لكنه خلف Claude Opus 4.8 في معظم المقارنات المباشرة.',
          '**حجم ~744B معاملًا غير قابل للتشغيل في المنزل.** إنه Mixture-of-Experts (~40B نشطًا لكل رمز)، لكن النموذج الكامل يحتاج إلى عدة وحدات GPU أو GPU مستأجر؛ ولا تتسع للعتاد الاستهلاكي سوى نسخ GGUF المكمّمة بشدة بمعدل 1-bit.',
          '**الأوزان المستضافة ذاتيًا تحافظ على بياناتك؛ واجهة Z.ai API ليست كذلك بالضرورة.** تعمل الأوزان المرخّصة بـ MIT داخل حدودك؛ أما واجهة Z.ai API من الطرف الأول فتحمل اعتبارات إقامة البيانات في الصين.',
          '**تعامل مع اختبارات Z.ai الخاصة على أنها مُبلَّغ عنها من الشركة.** قابلية إعادة الإنتاج محل خلاف — اعتمد أولًا على أرقام Artificial Analysis المستقلة.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'ما هو GLM-5.2؟',
        content: [
          '**GLM-5.2 هو نموذج لغة كبير ذو أوزان مفتوحة أطلقته Z.ai (المعروفة سابقًا باسم Zhipu AI) في 13 يونيو 2026، بموجب ترخيص MIT دون قيود استخدام إقليمية.** خضع للاختبار العلني اعتبارًا من 16 يونيو 2026.',
        ],
        items: [
          '**~744B معاملًا إجماليًا** (تشير المصادر إلى 743B–753B)، باستخدام بنية **Mixture-of-Experts** مع **~40B معاملًا نشطًا لكل رمز**.',
          '**نافذة سياق بحجم 1M رمز** مع **حد أقصى للإخراج يبلغ 131,072 رمزًا**.',
          '**~43,000 رمز إخراج لكل مهمة** في المتوسط — ارتفاعًا من ~26,000 في GLM-5.1 — ما يرفع زمن الاستدلال المحلي والتكلفة.',
          '**ترخيص MIT:** مجاني للتنزيل والاستضافة الذاتية والتعديل، دون قيود إقليمية.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'ما مدى جودة GLM-5.2؟ الاختبارات المستقلة أولًا',
        content: [
          '**على الترتيب المستقل الوحيد عبر الموردين — مؤشر Artificial Analysis Intelligence Index v4.1 — يُعد GLM-5.2 أعلى نموذج أوزان مفتوحة بـ 51 نقطة، والرابع إجمالًا (Artificial Analysis، يونيو 2026).**',
        ],
        rows: [
          { 'النموذج': 'Claude Fable 5', 'Index v4.1': '~56', 'الفئة': 'حدود مغلقة' },
          { 'النموذج': 'GLM-5.2', 'Index v4.1': '51', 'الفئة': 'الأول بين الأوزان المفتوحة / الرابع إجمالًا' },
          { 'النموذج': 'MiniMax-M3', 'Index v4.1': '44', 'الفئة': 'أوزان مفتوحة' },
          { 'النموذج': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'الفئة': 'أوزان مفتوحة' },
          { 'النموذج': 'GLM-5.1 (السابق)', 'Index v4.1': '40', 'الفئة': 'أوزان مفتوحة' },
        ],
        columns: ['النموذج', 'Index v4.1', 'الفئة'],
        note: 'نتائج البرمجة المستقلة: Terminal-Bench 2.1 — يسجل GLM-5.2 81.0 مقابل 85.0 لـ Claude Opus 4.8. SWE-bench Pro — يأتي GLM-5.2 بـ 62.1 (قيمة مُبلَّغ عنها من Z.ai) متقدمًا على 58.6 لـ GPT-5.5؛ وتؤكد التغطية المستقلة هذا الترتيب. FrontierSWE — يتفوق GLM-5.2 بـ 74.4 (قيمة مُبلَّغ عنها من Z.ai) على GPT-5.5 (72.6) ويتأخر عن Opus 4.8 (75.1) بنحو نقطة واحدة، وهو ترتيب تؤكده التقارير المستقلة. الحكم المستقل الإجمالي: GLM-5.2 هو أقوى نموذج برمجة مفتوح المصدر متاح اعتبارًا من يونيو 2026، لكنه لا يزال متأخرًا عن Claude Opus 4.8 في معظم المقارنات المباشرة (VentureBeat؛ letsdatascience، يونيو 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'مؤشر Artificial Analysis Intelligence Index v4.1 (يونيو 2026): يسجل Claude Fable 5 56 نقطة، ويسجل GLM-5.2 51 نقطة (الأول بين الأوزان المفتوحة، الرابع إجمالًا)، بينما يسجل كل من MiniMax-M3 وDeepSeek V4 Pro 44 نقطة، ويسجل GLM-5.1 40 نقطة.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'أرقام Z.ai الخاصة مقابل النتائج المستقلة: اقرأها بحذر',
        content: [
          '**تأتي عدة أرقام رئيسية من تقييمات Z.ai الخاصة وينبغي قراءتها على أنها مُبلَّغ عنها من الشركة، وليست متحقَّقًا منها بشكل مستقل.**',
        ],
        items: [
          '**أرقام البرمجة المُبلَّغ عنها من الشركة** — على سبيل المثال MCP-Atlas 77.0 (مُبلَّغ عنه من Z.ai)، مقابل 75.3 لـ GPT-5.5 و77.8 لـ Opus 4.8 — تُجريها Z.ai نفسها وينبغي التعامل معها كادعاءات بانتظار التكرار المستقل.',
          '**يشير تقرير Artificial Analysis إلى أن التقييمات الداخلية لـ Z.ai أُبلغ عنها أضعف من اختباراتها المنشورة**، وقابلية إعادة الإنتاج محل خلاف.',
          '**قابلية إعادة الإنتاج سؤال مفتوح.** يصف معلق بارز واحد على الأقل النموذج بأنه «مُحسَّن للاختبارات» (bench-maxxed)، ويُقال إن GLM-5.1 سجّل 0% في اختبار واحد على الأقل يحقق فيه GLM-5.2 أداءً جيدًا الآن. مؤشر Artificial Analysis المستقل — وليس مجموعة Z.ai الخاصة — هو ما يدعم حاليًا ادعاء المركز الأول بين الأوزان المفتوحة.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'هل يمكنك تشغيل GLM-5.2 في المنزل؟ مراجعة واقعية لحجم ~744B',
        content: [
          '**لا — ليس النموذج الكامل. «الأوزان المفتوحة» و«القابل للاستضافة الذاتية» لا يعنيان «يعمل على حاسوب منزلي عادي».**',
        ],
        items: [
          '**يحتاج GLM-5.2 الكامل إلى بنية تحتية قوية:** خوادم متعددة وحدات GPU أو GPU سحابي مستأجر.',
          '**على العتاد الاستهلاكي، تكون نسخ GGUF المكمّمة بشدة بمعدل 1-bit فقط هي الممكنة عمليًا**، مع مقايضات في الجودة والسرعة.',
          '**يرفع الإخراج المرتفع البالغ ~43,000 رمز لكل مهمة الزمن والتكلفة المحليين أكثر.**',
          'للاطلاع على واقع العتاد للنماذج المحلية الكبيرة، راجع [تشغيل نماذج 70B على العتاد الاستهلاكي](/ar/local-llms/70b-models-consumer-hardware)، و[وحدات GPU المستعملة للنماذج المحلية](/ar/local-llms/used-gpus-for-local-llms)، و[دليل عتاد النماذج المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026)، و[Apple Silicon M5 للنماذج المحلية](/ar/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'النموذج الكامل GLM-5.2 (~744B معامل، ~40B نشط) يحتاج إلى خادم متعدد GPU أو GPU مستأجر؛ فقط نسخ GGUF المكمّمة بمعدل 1-bit تعمل على GPU أو CPU استهلاكي واحد في المنزل، مع جودة أقل.',
      },
      dataPath: {
        id: 'data-path',
        title: 'الأوزان المستضافة ذاتيًا مقابل واجهة Z.ai API: إلى أين تذهب بياناتك',
        content: [
          '**الترخيص وواجهة API قصتان مختلفتان لحوكمة البيانات. تحافظ أوزان MIT المستضافة ذاتيًا على بياناتك داخل حدودك؛ أما واجهة Z.ai API من الطرف الأول فلا تفعل.**',
        ],
        items: [
          '**الاستضافة الذاتية (أوزان MIT):** تبقى البيانات محلية وملكًا لك — دون نقل إلى طرف ثالث.',
          '**واجهة Z.ai API من الطرف الأول:** تشير التغطية المستقلة صراحةً إلى اعتبارات إقامة البيانات في الصين («مخاطر بيانات الصين») على مسار واجهة API (TechTimes، 17 يونيو 2026).',
          '**إطار القرار:** إذا كانت حساسية البيانات مهمة، فاستضِف الأوزان ذاتيًا؛ وإذا استخدمت واجهة API المستضافة، فعامِلها كما تعامل أي نقطة نهاية سحابية من طرف ثالث خاضعة لولايتها القضائية.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'تسعير GLM-5.2 وتكلفته',
        content: [
          '**عبر واجهة API المستضافة، يعمل GLM-5.2 بتكلفة تقارب سُدس تكلفة النماذج المغلقة المتقدمة (VentureBeat، يونيو 2026).** التسعير المُبلَّغ عنه يقارب $1.4 لكل 1M رمز إدخال و$4.4 لكل 1M رمز إخراج (اعتبارًا من يونيو 2026). ضع في الحسبان الإخراج المرتفع لكل مهمة (~43,000 رمز) عند تقدير التكلفة الفعلية لعبء العمل.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'هل يجب أن تستخدم GLM-5.2؟',
        decisionBlock: {
          title: 'دليل قرار GLM-5.2',
          localIf: [
            'تريد أقوى نموذج أوزان مفتوحة متاح حاليًا',
            'تحتاج إلى استضافة ذاتية وتحكم في البيانات داخل حدودك الخاصة',
            'تشغّل مهام برمجة طويلة الأمد',
            'تريد جودة قريبة من الحدود المتقدمة بتكلفة تقارب السُدس',
          ],
          cloudIf: [
            'تحتاج إلى أعلى نتيجة في البرمجة أو الاستدلال في المقارنات المباشرة',
            'لا تحتاج إلى أوزان مفتوحة وتفضّل نموذجًا مغلقًا متقدمًا مثل Claude Opus 4.8',
            'لا تستطيع توفير بنية تحتية متعددة وحدات GPU أو GPU مستأجر',
          ],
          quick: [
            'أفضل خيار أوزان مفتوحة اليوم — لكن تحقق من الاختبارات المتنازع عليها مقابل مهامك الخاصة قبل الالتزام.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: السياق الإقليمي',
        content: [
          '**الخليج / سيادة البيانات:** تحافظ الاستضافة الذاتية لـ GLM-5.2 بموجب ترخيص MIT على جميع بيانات الاستدلال داخل بنيتك التحتية الخاصة، ما يبقي البيانات داخل الحدود الوطنية ويتوافق مع متطلبات حماية البيانات الإقليمية مثل نظام حماية البيانات الشخصية (PDPL) في السعودية وقانون حماية البيانات في الإمارات. الفرق في الامتثال بين النماذج يكمن في وثائق المورّد، لا في معالجة البيانات، عندما يجري الاستدلال محليًا.',
          '**التوجه نحو الذكاء الاصطناعي السيادي:** يدفع الدفع الإقليمي نحو الذكاء الاصطناعي السيادي والعربي أولًا (مثل Jais وALLaM وFalcon) المؤسسات إلى تفضيل الاستضافة الذاتية. يدعم تشغيل الأوزان المرخّصة بـ MIT محليًا هذا الهدف عبر إبقاء البيانات داخل الحدود الوطنية أو الإقليمية.',
          '**الصين / مسار البيانات:** GLM-5.2 من بناء مختبر صيني. الرافعة الرئيسية للامتثال هي مسار النشر، وليس النموذج: تبقي أوزان MIT المستضافة ذاتيًا البيانات داخل حدودك، بينما تخضع واجهة Z.ai API من الطرف الأول لولايتها القضائية الأم. اختر المسار الذي يطابق متطلبات إقامة البيانات لديك.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'أخطاء شائعة عند تقييم GLM-5.2',
        items: [
          '**افتراض أن «الأوزان المفتوحة» تعني «يعمل في المنزل».** يتطلب حجم ~744B بنية تحتية متعددة وحدات GPU أو مستأجرة؛ ولا تتسع للعتاد الاستهلاكي سوى نسخ GGUF بمعدل 1-bit.',
          '**التعامل مع اختبارات Z.ai من الطرف الأول على أنها متحقَّق منها.** اعتمد أولًا على مؤشر Artificial Analysis المستقل؛ وعامِل أرقام البرمجة التي تجريها الشركة كادعاءات.',
          '**الخلط بين أوزان MIT وواجهة API المستضافة في حوكمة البيانات.** تبقي الاستضافة الذاتية البيانات محلية؛ بينما تخضع واجهة API لولايتها القضائية الأم.',
          '**قراءة «الأول بين الأوزان المفتوحة» على أنها «يتغلب على الحدود».** GLM-5.2 هو الرابع إجمالًا ويتأخر عن Claude Opus 4.8 في معظم المقارنات المباشرة.',
          '**تجاهل الإخراج البالغ ~43,000 رمز لكل مهمة** عند وضع ميزانية زمن الاستدلال والتكلفة.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[تشغيل نماذج 70B على العتاد الاستهلاكي](/ar/local-llms/70b-models-consumer-hardware) — ما الذي تتطلبه النماذج المحلية الكبيرة فعليًا من عتادك.',
          '[وحدات GPU المستعملة للنماذج المحلية](/ar/local-llms/used-gpus-for-local-llms) — مسارات GPU فعّالة من حيث التكلفة عندما تحتاج إلى قدرة استدلال حقيقية.',
          '[دليل عتاد النماذج المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — طابق عتادك مع فئة النموذج التي تريد تشغيلها.',
          '[Apple Silicon M5 للنماذج المحلية](/ar/local-llms/apple-silicon-m5-local-llm) — خيارات الذاكرة الموحدة لتشغيل نماذج أكبر محليًا.',
          '[تحديثات النماذج المحلية 2026](/ar/local-llms/local-llm-model-updates-2026) — تتبّع لكل إصدار أوزان مفتوحة رئيسي هذا العام.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل GLM-5.2 هو أفضل نموذج أوزان مفتوحة حاليًا؟',
            a: 'وفق مؤشر Artificial Analysis Intelligence Index v4.1 المستقل (يونيو 2026)، نعم — يسجل GLM-5.2 51 نقطة، وهي أعلى نتيجة أوزان مفتوحة والرابعة إجمالًا. يتصدر أقرب النماذج المفتوحة، MiniMax-M3 وDeepSeek V4 Pro (كلاهما 44)، بنحو 7 نقاط. لكنه لا يتغلب على الحدود المغلقة إجمالًا.',
          },
          {
            q: 'هل يمكنني تشغيل GLM-5.2 على حاسوب عادي أو Mac؟',
            a: 'ليس النموذج الكامل. بحجم ~744B معاملًا يحتاج إلى خوادم متعددة وحدات GPU أو GPU سحابي مستأجر. على العتاد الاستهلاكي تقتصر على نسخ GGUF المكمّمة بشدة بمعدل 1-bit، التي تضحّي بالجودة والسرعة. راجع أدلة العتاد لدينا لمعرفة ما تتطلبه النماذج المحلية الكبيرة فعليًا.',
          },
          {
            q: 'هل يتغلب GLM-5.2 على GPT-5.5 وClaude Opus 4.8؟',
            a: 'في البرمجة، تضع النتائج المستقلة GLM-5.2 متقدمًا على GPT-5.5 (على سبيل المثال ترتيبا SWE-bench Pro وFrontierSWE). أما مقابل Claude Opus 4.8 فيتأخر في معظم المقارنات المباشرة — مثل Terminal-Bench 2.1 (81.0 مقابل 85.0) وFrontierSWE (بنحو نقطة واحدة خلفه). الخلاصة الدقيقة هي «يتصدر الأوزان المفتوحة، ويقلّص الفجوة مع الحدود»، وليس «يتغلب على الحدود».',
          },
          {
            q: 'هل GLM-5.2 مجاني حقًا؟ وما هو الترخيص؟',
            a: 'يصدر GLM-5.2 بموجب ترخيص MIT دون قيود استخدام إقليمية، لذا يمكنك تنزيله واستضافته ذاتيًا وتعديله مجانًا. لا يزال تشغيل النموذج الكامل يكلّف بنية تحتية حقيقية (وحدات GPU متعددة أو GPU مستأجر)، وواجهة Z.ai API المستضافة خدمة مدفوعة.',
          },
          {
            q: 'هل بياناتي آمنة مع GLM-5.2؟',
            a: 'يعتمد ذلك على مسار النشر. تحافظ أوزان MIT المستضافة ذاتيًا على جميع البيانات داخل حدودك الخاصة. أما واجهة Z.ai API من الطرف الأول فتحمل اعتبارات إقامة البيانات في الصين التي أشارت إليها التغطية المستقلة، لذا عامِلها كما تعامل أي نقطة نهاية سحابية من طرف ثالث خاضعة لولايتها القضائية.',
          },
          {
            q: 'هل أرقام اختبارات GLM-5.2 جديرة بالثقة؟',
            a: 'يؤكد مؤشر Artificial Analysis المستقل ترتيب المركز الأول بين الأوزان المفتوحة. أما أرقام البرمجة الخاصة بـ Z.ai فهي مُبلَّغ عنها من الشركة، وقابلية إعادة الإنتاج محل خلاف — يشير تقرير Artificial Analysis إلى أن التقييمات الداخلية أُبلغ عنها أضعف من الاختبارات المنشورة. اعتمد أولًا على الأرقام المستقلة وعامِل أرقام الطرف الأول كادعاءات.',
          },
          {
            q: 'كم تبلغ تكلفة تشغيل GLM-5.2 عبر واجهة API؟',
            a: 'نحو سُدس تكلفة النماذج المغلقة المتقدمة. التسعير المُبلَّغ عنه يقارب $1.4 لكل 1M رمز إدخال و$4.4 لكل 1M رمز إخراج (يونيو 2026). وبما أن GLM-5.2 يخرج في المتوسط ~43,000 رمز لكل مهمة، قدّر التكلفة الفعلية على عبء عملك الخاص بدلًا من الاعتماد على أسعار الرمز وحدها.',
          },
          {
            q: 'ما العتاد الذي أحتاجه لاستضافة GLM-5.2 ذاتيًا بشكل صحيح؟',
            a: 'للنموذج الكامل، خوادم متعددة وحدات GPU أو GPU سحابي مستأجر. يستطيع العتاد الاستهلاكي تشغيل نسخ GGUF المكمّمة بشدة بمعدل 1-bit فقط. راجع دليل عتاد النماذج المحلية 2026، ووحدات GPU المستعملة للنماذج المحلية، وتشغيل نماذج 70B على العتاد الاستهلاكي لتحديد حجم إعدادك.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — ترتيب Intelligence Index v4.1 المستقل (51، الأول بين المفتوحة / الرابع إجمالًا).',
          'TechTimes. (2026, June 17). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — اعتبارات إقامة البيانات على مسار Z.ai API.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — مقارنة برمجة مستقلة وإطار للتكلفة.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — تغطية مستقلة لنتائج البرمجة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2: نموذج الأوزان المفتوحة رقم 1 لعام 2026 (ولماذا لا يعمل في المنزل بعد)',
      'description': 'GLM-5.2 هو نموذج الأوزان المفتوحة رقم 1 على مؤشر Artificial Analysis Intelligence Index (يونيو 2026) والرابع إجمالًا. يتفوق على GPT-5.5 في البرمجة لكنه يتأخر عن Opus 4.8، وحجمه ~744B غير قابل للتشغيل في المنزل.',
      'url': 'https://www.promptquorum.com/ar/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'ar',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'مؤشر Artificial Analysis Intelligence Index v4.1 — أبرز النماذج (يونيو 2026)',
      'inLanguage': 'ar',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'حدود مغلقة. نتيجة Artificial Analysis Intelligence Index v4.1 ~56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': 'الأول بين الأوزان المفتوحة، الرابع إجمالًا. نتيجة Artificial Analysis Intelligence Index v4.1 تبلغ 51. أطلقته Z.ai في 13 يونيو 2026 بموجب ترخيص MIT.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'أوزان مفتوحة. نتيجة Artificial Analysis Intelligence Index v4.1 تبلغ 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'أوزان مفتوحة. نتيجة Artificial Analysis Intelligence Index v4.1 تبلغ 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'إصدار Z.ai السابق. نتيجة Artificial Analysis Intelligence Index v4.1 تبلغ 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ar',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'هل GLM-5.2 هو أفضل نموذج أوزان مفتوحة حاليًا؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'وفق مؤشر Artificial Analysis Intelligence Index v4.1 المستقل (يونيو 2026)، نعم — يسجل GLM-5.2 51 نقطة، وهي أعلى نتيجة أوزان مفتوحة والرابعة إجمالًا، متصدرًا MiniMax-M3 وDeepSeek V4 Pro (كلاهما 44) بنحو 7 نقاط. لكنه لا يتغلب على الحدود المغلقة إجمالًا.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يمكنني تشغيل GLM-5.2 على حاسوب عادي أو Mac؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ليس النموذج الكامل. بحجم ~744B معاملًا يحتاج إلى خوادم متعددة وحدات GPU أو GPU سحابي مستأجر. على العتاد الاستهلاكي تقتصر على نسخ GGUF المكمّمة بشدة بمعدل 1-bit، التي تضحّي بالجودة والسرعة.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل يتغلب GLM-5.2 على GPT-5.5 وClaude Opus 4.8؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'في البرمجة، تضع النتائج المستقلة GLM-5.2 متقدمًا على GPT-5.5. أما مقابل Claude Opus 4.8 فيتأخر في معظم المقارنات المباشرة — مثل Terminal-Bench 2.1 (81.0 مقابل 85.0) وFrontierSWE (بنحو نقطة واحدة خلفه). يتصدر الأوزان المفتوحة ويقلّص الفجوة، لكنه لا يتغلب على الحدود.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل GLM-5.2 مجاني حقًا؟ وما هو الترخيص؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'يصدر GLM-5.2 بموجب ترخيص MIT دون قيود استخدام إقليمية، لذا يمكنك تنزيله واستضافته ذاتيًا وتعديله مجانًا. لا يزال تشغيل النموذج الكامل يكلّف بنية تحتية حقيقية، وواجهة Z.ai API المستضافة خدمة مدفوعة.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل بياناتي آمنة مع GLM-5.2؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'يعتمد ذلك على مسار النشر. تحافظ أوزان MIT المستضافة ذاتيًا على جميع البيانات داخل حدودك الخاصة. أما واجهة Z.ai API من الطرف الأول فتحمل اعتبارات إقامة البيانات في الصين التي أشارت إليها التغطية المستقلة، لذا عامِلها كأي نقطة نهاية سحابية من طرف ثالث خاضعة لولايتها القضائية.',
          },
        },
        {
          '@type': 'Question',
          'name': 'هل أرقام اختبارات GLM-5.2 جديرة بالثقة؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'يؤكد مؤشر Artificial Analysis المستقل ترتيب المركز الأول بين الأوزان المفتوحة. أما أرقام البرمجة الخاصة بـ Z.ai فهي مُبلَّغ عنها من الشركة وقابلية إعادة الإنتاج محل خلاف، لذا اعتمد أولًا على الأرقام المستقلة وعامِل أرقام الطرف الأول كادعاءات.',
          },
        },
        {
          '@type': 'Question',
          'name': 'كم تبلغ تكلفة تشغيل GLM-5.2 عبر واجهة API؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'نحو سُدس تكلفة النماذج المغلقة المتقدمة. التسعير المُبلَّغ عنه يقارب $1.4 لكل 1M رمز إدخال و$4.4 لكل 1M رمز إخراج (يونيو 2026). وبما أن GLM-5.2 يخرج في المتوسط ~43,000 رمز لكل مهمة، قدّر التكلفة على عبء عملك الخاص.',
          },
        },
        {
          '@type': 'Question',
          'name': 'ما العتاد الذي أحتاجه لاستضافة GLM-5.2 ذاتيًا بشكل صحيح؟',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'للنموذج الكامل، خوادم متعددة وحدات GPU أو GPU سحابي مستأجر. يستطيع العتاد الاستهلاكي تشغيل نسخ GGUF المكمّمة بشدة بمعدل 1-bit فقط. راجع دليل عتاد النماذج المحلية 2026 وأدلة العتاد ذات الصلة لتحديد حجم إعدادك.',
          },
        },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-de.webp',
    title: 'GLM-5.2: Das beste Open-Weights-Modell 2026 (und warum es trotzdem nicht zu Hause läuft)',
    seoTitle: 'GLM-5.2: Top-Open-Weights-LLM 2026 — Ehrliche Einschätzung',
    intro: 'GLM-5.2, am 13. Juni 2026 von Z.ai (ehemals Zhipu AI) veröffentlicht, ist das am höchsten bewertete Open-Weights-Sprachmodell im unabhängigen Artificial Analysis Intelligence Index v4.1 — 51 Punkte, Platz 1 unter den offenen Modellen und Platz 4 insgesamt. Es schlägt GPT-5.5 in Coding-Benchmarks, liegt aber in den meisten direkten Vergleichen noch hinter Claude Opus 4.8. Dieser Artikel trennt die unabhängigen Ergebnisse von den eigenen Angaben von Z.ai und erklärt, warum ein offenes Modell mit ~744B Parametern nichts ist, das Sie zu Hause ausführen können.',
    metaDescription: 'GLM-5.2 ist das Open-Weights-LLM Nr. 1 im Artificial Analysis Index (Juni 2026) — Platz 4 insgesamt. Es schlägt GPT-5.5 beim Coding, liegt aber hinter Opus 4.8, und seine ~744B Größe läuft nicht zu Hause.',
    twitterDescription: 'GLM-5.2 ist das beste Open-Weights-LLM vom Juni 2026 (Platz 4 insgesamt im Artificial Analysis Index). Schlägt GPT-5.5 beim Coding, liegt hinter Opus 4.8 — und ~744B Parameter bedeuten: läuft nicht zu Hause.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2, am 13. Juni 2026 von Z.ai (ehemals Zhipu AI) veröffentlicht, ist das am höchsten bewertete Open-Weights-LLM im Artificial Analysis Intelligence Index v4.1 — 51 Punkte, Platz 1 unter den offenen Modellen und Platz 4 insgesamt. Es führt bei den Open Weights; es schlägt nicht die geschlossene Spitzenklasse. Und bei ~744B Parametern bedeutet "offen und selbst hostbar" nicht "läuft auf Ihrem Laptop".**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2 ist laut unabhängigen Benchmarks das führende Open-Weights-LLM der Jahresmitte 2026, doch seine Größe von ~744B Parametern erfordert Multi-GPU- oder gemietete Infrastruktur, keine Consumer-Hardware.' },
      { type: 'plain-terms', text: 'GLM-5.2 ist ein kostenlos herunterladbares KI-Modell, das derzeit höher abschneidet als jedes andere offene Modell. Es ist sehr groß, sodass die meisten Menschen die vollständige Version nicht zu Hause ausführen können — Sie mieten entweder eine leistungsstarke GPU oder nutzen eine stark verkleinerte Version.' },
    ],
    quickAnswerTop: {
      question: 'Ist GLM-5.2 derzeit das beste Open-Weights-Modell, und kann ich es selbst hosten?',
      answer: 'Stand Juni 2026 ist GLM-5.2 das am höchsten bewertete Open-Weights-Modell im Artificial Analysis Intelligence Index (51 Punkte, Platz 1 unter den offenen Modellen und Platz 4 insgesamt). Die MIT-Lizenz erlaubt das Selbst-Hosten ohne regionale Beschränkungen, doch das vollständige ~744B-Modell benötigt ernsthafte Hardware. Die meisten Einzelpersonen führen einen stark quantisierten Build aus oder mieten eine GPU.',
      bullets: [
        'Platz 1 Open Weights / Platz 4 insgesamt (Artificial Analysis Intelligence Index v4.1)',
        'MIT-Lizenz, keine regionalen Beschränkungen, kostenlos selbst hostbar',
        '~744B Gesamtparameter / ~40B aktiv (Mixture-of-Experts)',
        '1M-Token-Kontextfenster',
        'Schlägt GPT-5.5 beim Coding; liegt in den meisten Direktvergleichen hinter Claude Opus 4.8',
        '~1/6 der Kosten geschlossener Spitzenmodelle über die gehostete API',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Was ist GLM-5.2?', anchor: '#what-is-glm-5-2' },
      { label: 'Unabhängige Benchmarks', anchor: '#independent-benchmarks' },
      { label: 'Die eigenen Zahlen von Z.ai', anchor: '#claimed-numbers' },
      { label: 'Können Sie es zu Hause ausführen?', anchor: '#run-at-home' },
      { label: 'Selbst gehostet vs. die Z.ai-API', anchor: '#data-path' },
      { label: 'Preise und Kosten', anchor: '#pricing' },
      { label: 'Sollten Sie GLM-5.2 verwenden?', anchor: '#decision' },
      { label: 'Regionaler Kontext', anchor: '#regional-context' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Platz 1 Open Weights, Platz 4 insgesamt.** GLM-5.2 erreicht **51** Punkte im Artificial Analysis Intelligence Index v4.1 — das beste Open-Weights-Modell, Platz 4 insgesamt, **+11 gegenüber GLM-5.1 (40)** und rund 7 Punkte Vorsprung vor den nächsten offenen Modellen MiniMax-M3 (44) und DeepSeek V4 Pro (44).',
          '**Es führt bei den Open Weights, nicht im gesamten Feld.** Es liegt etwa 5 Punkte unter Claude Fable 5 und insgesamt hinter der geschlossenen Spitzenklasse. "Schließt die Lücke" — nicht "schlägt die Spitzenklasse".',
          '**Stark beim Coding, Zweiter hinter Opus 4.8.** Unabhängige Coding-Ergebnisse sehen GLM-5.2 vor GPT-5.5, jedoch in den meisten Direktvergleichen hinter Claude Opus 4.8.',
          '**~744B Parameter sind nicht zu Hause ausführbar.** Es ist ein Mixture-of-Experts-Modell (~40B aktiv pro Token), doch das vollständige Modell benötigt Multi-GPU oder eine gemietete GPU; nur stark quantisierte 1-Bit-GGUF-Builds passen auf Consumer-Hardware.',
          '**Selbst gehostete Weights behalten Ihre Daten; die Z.ai-API nicht zwangsläufig.** MIT-lizenzierte Weights laufen innerhalb Ihrer Grenze; die erstparteiliche Z.ai-API bringt Erwägungen zur China-Datenresidenz mit sich.',
          '**Behandeln Sie die eigenen Benchmarks von Z.ai als vom Unternehmen gemeldet.** Die Reproduzierbarkeit ist umstritten — orientieren Sie sich an den unabhängigen Artificial-Analysis-Zahlen.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'Was ist GLM-5.2?',
        content: [
          '**GLM-5.2 ist ein Open-Weights-Sprachmodell, das am 13. Juni 2026 von Z.ai (ehemals Zhipu AI) unter der MIT-Lizenz ohne regionale Nutzungsbeschränkungen veröffentlicht wurde.** Öffentlich gebenchmarkt wurde es ab dem 16. Juni 2026.',
        ],
        items: [
          '**~744B Gesamtparameter** (Quellen nennen 743B–753B), mit einer **Mixture-of-Experts**-Architektur und **~40B aktiven Parametern pro Token**.',
          '**1M-Token-Kontextfenster** mit einer **maximalen Ausgabe von 131.072 Token**.',
          '**~43.000 Ausgabe-Token pro Aufgabe** im Durchschnitt — gegenüber ~26.000 bei GLM-5.1 — was die lokale Inferenzzeit und -kosten erhöht.',
          '**MIT-Lizenz:** kostenlos herunterladbar, selbst hostbar und modifizierbar, ohne regionale Beschränkungen.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'Wie gut ist GLM-5.2? Zuerst die unabhängigen Benchmarks',
        content: [
          '**In der einen unabhängigen, herstellerübergreifenden Rangliste — dem Artificial Analysis Intelligence Index v4.1 — ist GLM-5.2 mit 51 Punkten das beste Open-Weights-Modell, Platz 4 insgesamt (Artificial Analysis, Juni 2026).**',
        ],
        rows: [
          { 'Modell': 'Claude Fable 5', 'Index v4.1': '~56', 'Kategorie': 'Geschlossene Spitzenklasse' },
          { 'Modell': 'GLM-5.2', 'Index v4.1': '51', 'Kategorie': 'Platz 1 Open Weights / Platz 4 insgesamt' },
          { 'Modell': 'MiniMax-M3', 'Index v4.1': '44', 'Kategorie': 'Open Weights' },
          { 'Modell': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'Kategorie': 'Open Weights' },
          { 'Modell': 'GLM-5.1 (vorherige Version)', 'Index v4.1': '40', 'Kategorie': 'Open Weights' },
        ],
        columns: ['Modell', 'Index v4.1', 'Kategorie'],
        note: 'Unabhängige Coding-Ergebnisse: Terminal-Bench 2.1 — GLM-5.2 erreicht 81,0 gegenüber Claude Opus 4.8 mit 85,0. SWE-bench Pro — GLM-5.2 mit 62,1 (von Z.ai gemeldeter Punktwert) liegt vor GPT-5.5 mit 58,6; unabhängige Berichterstattung bestätigt diese Reihenfolge. FrontierSWE — GLM-5.2 mit 74,4 (von Z.ai gemeldeter Punktwert) schlägt GPT-5.5 (72,6) und liegt etwa einen Punkt hinter Opus 4.8 (75,1), eine Reihenfolge, die unabhängige Berichterstattung bestätigt. Unabhängiges Fazit: GLM-5.2 ist das stärkste verfügbare Open-Source-Coding-Modell zum Stand Juni 2026, liegt aber in den meisten Direktvergleichen weiterhin hinter Claude Opus 4.8 (VentureBeat; letsdatascience, Juni 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1 (Juni 2026): Claude Fable 5 erreicht 56 Punkte, GLM-5.2 erreicht 51 Punkte (Platz 1 bei offenen Gewichten, Platz 4 insgesamt), MiniMax-M3 und DeepSeek V4 Pro erreichen je 44 Punkte, GLM-5.1 erreicht 40 Punkte.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Die eigenen Zahlen von Z.ai vs. unabhängige Ergebnisse: Mit Vorsicht zu lesen',
        content: [
          '**Mehrere zentrale Kennzahlen stammen aus den eigenen Evaluierungen von Z.ai und sollten als vom Unternehmen gemeldet, nicht als unabhängig verifiziert gelesen werden.**',
        ],
        items: [
          '**Vom Unternehmen gemeldete Coding-Zahlen** — zum Beispiel MCP-Atlas 77,0 (von Z.ai gemeldet) gegenüber GPT-5.5 mit 75,3 und Opus 4.8 mit 77,8 — werden von Z.ai selbst durchgeführt und sollten als Behauptungen behandelt werden, bis eine unabhängige Replikation vorliegt.',
          '**Der Artificial-Analysis-Bericht weist darauf hin, dass die internen Evaluierungen von Z.ai schwächer ausfielen als die veröffentlichten Benchmarks**, und die Reproduzierbarkeit ist umstritten.',
          '**Die Reproduzierbarkeit ist eine offene Frage.** Mindestens ein prominenter Kommentator beschreibt das Modell als "bench-maxxed", und GLM-5.1 erzielte Berichten zufolge 0 % bei mindestens einem Benchmark, bei dem GLM-5.2 nun gut abschneidet. Der unabhängige Artificial Analysis Index — nicht die eigene Suite von Z.ai — ist das, was derzeit den Anspruch auf Platz 1 bei den Open Weights stützt.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'Können Sie GLM-5.2 zu Hause ausführen? Der ~744B-Realitätscheck',
        content: [
          '**Nein — nicht das vollständige Modell. "Open Weights" und "selbst hostbar" bedeuten nicht "läuft auf einem typischen Heim-PC".**',
        ],
        items: [
          '**Das vollständige GLM-5.2 benötigt ernsthafte Infrastruktur:** Multi-GPU-Server oder eine gemietete Cloud-GPU.',
          '**Auf Consumer-Hardware sind nur stark quantisierte 1-Bit-GGUF-Builds machbar**, mit Abstrichen bei Qualität und Geschwindigkeit.',
          '**Die hohe Ausgabe von ~43.000 Token pro Aufgabe erhöht zusätzlich die lokale Zeit und Kosten.**',
          'Zur Hardware-Realität großer lokaler Modelle siehe [70B-Modelle auf Consumer-Hardware ausführen](/de/local-llms/70b-models-consumer-hardware), [Gebrauchte GPUs für lokale LLMs](/de/local-llms/used-gpus-for-local-llms), den [Hardware-Leitfaden für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) und [Apple Silicon M5 für lokale LLMs](/de/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'Das vollständige GLM-5.2 (~744B Parameter, ~40B aktiv) benötigt einen Multi-GPU-Server oder eine gemietete Cloud-GPU; nur 1-Bit-GGUF-quantisierte Builds laufen zu Hause auf einer einzelnen Consumer-GPU oder CPU, mit geringerer Qualität.',
      },
      dataPath: {
        id: 'data-path',
        title: 'Selbst gehostete Weights vs. die Z.ai-API: Wohin Ihre Daten gehen',
        content: [
          '**Die Lizenz und die API sind zwei verschiedene Geschichten der Daten-Governance. Selbst gehostete MIT-Weights behalten Ihre Daten innerhalb Ihrer Grenze; die erstparteiliche Z.ai-API tut das nicht.**',
        ],
        items: [
          '**Selbst gehostet (MIT-Weights):** Daten bleiben lokal und gehören Ihnen — keine Übertragung an Dritte.',
          '**Erstparteiliche Z.ai-API:** Unabhängige Berichterstattung weist ausdrücklich auf Erwägungen zur China-Datenresidenz ("China data risk") auf dem API-Pfad hin (TechTimes, 17. Juni 2026).',
          '**Entscheidungsrahmen:** Wenn die Datensensibilität wichtig ist, hosten Sie die Weights selbst; wenn Sie die gehostete API nutzen, behandeln Sie sie wie jeden anderen Drittanbieter-Cloud-Endpunkt, der seiner Gerichtsbarkeit unterliegt.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'GLM-5.2 Preise und Kosten',
        content: [
          '**Über die gehostete API läuft GLM-5.2 zu rund einem Sechstel der Kosten geschlossener Spitzenmodelle (VentureBeat, Juni 2026).** Die gemeldeten Preise liegen bei etwa 1,4 $ pro 1 Mio. Eingabe-Token und 4,4 $ pro 1 Mio. Ausgabe-Token (Stand Juni 2026), also 1,4 $ / 4,4 $ pro 1 Mio. Token. Berücksichtigen Sie die hohe Ausgabe pro Aufgabe (~43.000 Token), wenn Sie die realen Workload-Kosten schätzen.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Sollten Sie GLM-5.2 verwenden?',
        decisionBlock: {
          title: 'GLM-5.2 Entscheidungsleitfaden',
          localIf: [
            'Sie möchten das derzeit stärkste verfügbare Open-Weights-Modell',
            'Sie benötigen Selbst-Hosting und Datenkontrolle innerhalb Ihrer eigenen Grenze',
            'Sie führen Coding-Aufgaben mit langem Horizont aus',
            'Sie möchten spitzenklassennahe Qualität zu rund einem Sechstel der Kosten',
          ],
          cloudIf: [
            'Sie benötigen den Spitzenwert im direkten Coding- oder Reasoning-Vergleich',
            'Sie benötigen keine Open Weights und bevorzugen ein geschlossenes Spitzenmodell wie Claude Opus 4.8',
            'Sie können keine Multi-GPU- oder gemietete GPU-Infrastruktur bereitstellen',
          ],
          quick: [
            'Heute die beste Open-Weights-Option — aber prüfen Sie die umstrittenen Benchmarks an Ihren eigenen Aufgaben, bevor Sie sich festlegen.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: Regionaler Kontext',
        content: [
          '**EU / DSGVO:** Das Selbst-Hosten von GLM-5.2 unter der MIT-Lizenz hält alle Inferenzdaten innerhalb Ihrer eigenen Infrastruktur, was die Erwartungen an die Datenresidenz gemäß der DSGVO erfüllt. Für Unternehmen im DACH-Raum (Deutschland, Österreich, Schweiz) lässt sich der lokale Betrieb in bestehende IT-Sicherheitsstandards einordnen: Die BSI-Grundschutz-Kataloge behandeln den Modellbetrieb innerhalb der eigenen Systemgrenze als kontrollierbaren Verarbeitungsschritt. Der Compliance-Unterschied zwischen Modellen liegt in der Lieferantendokumentation, nicht in der Datenverarbeitung, wenn die Inferenz lokal läuft.',
          '**Japan (METI):** Dokumentieren Sie bei produktiven Bereitstellungen die Modellversion (GLM-5.2), die Lizenz (MIT) und ob die Inferenz auf selbst gehosteten Weights oder über die Z.ai-API läuft, im Einklang mit den METI-Leitlinien zur KI-Governance.',
          '**China / Datenpfad:** GLM-5.2 wird von einem chinesischen Labor entwickelt. Der entscheidende Compliance-Hebel ist der Bereitstellungspfad, nicht das Modell: Selbst gehostete MIT-Weights halten die Daten innerhalb Ihrer Grenze, während die erstparteiliche Z.ai-API ihrer Heimatgerichtsbarkeit unterliegt. Wählen Sie den Pfad, der Ihren Datenresidenz-Anforderungen entspricht.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Bewertung von GLM-5.2',
        items: [
          '**Anzunehmen, "Open Weights" bedeute "läuft zu Hause".** Die Größe von ~744B erfordert Multi-GPU- oder gemietete Infrastruktur; nur 1-Bit-GGUF-Builds passen auf Consumer-Hardware.',
          '**Die erstparteilichen Benchmarks von Z.ai als verifiziert zu behandeln.** Orientieren Sie sich am unabhängigen Artificial Analysis Index; behandeln Sie vom Unternehmen durchgeführte Coding-Zahlen als Behauptungen.',
          '**Die MIT-Weights mit der gehosteten API bei der Daten-Governance zu vermengen.** Selbst-Hosting hält Daten lokal; die API unterliegt ihrer Heimatgerichtsbarkeit.',
          '**"Platz 1 Open Weights" als "schlägt die Spitzenklasse" zu lesen.** GLM-5.2 ist Platz 4 insgesamt und liegt in den meisten Direktvergleichen hinter Claude Opus 4.8.',
          '**Die Ausgabe von ~43.000 Token pro Aufgabe zu ignorieren**, wenn Sie Inferenzzeit und -kosten budgetieren.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[70B-Modelle auf Consumer-Hardware ausführen](/de/local-llms/70b-models-consumer-hardware) — was große lokale Modelle tatsächlich von Ihrer Hardware verlangen.',
          '[Gebrauchte GPUs für lokale LLMs](/de/local-llms/used-gpus-for-local-llms) — kosteneffiziente GPU-Wege, wenn Sie echte Inferenzkapazität benötigen.',
          '[Hardware-Leitfaden für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) — stimmen Sie Ihre Hardware auf die Modellklasse ab, die Sie betreiben möchten.',
          '[Apple Silicon M5 für lokale LLMs](/de/local-llms/apple-silicon-m5-local-llm) — Optionen mit Unified Memory, um größere Modelle lokal auszuführen.',
          '[Lokale LLM-Modell-Updates 2026](/de/local-llms/local-llm-model-updates-2026) — jede wichtige Open-Weight-Veröffentlichung dieses Jahres im Überblick.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Ist GLM-5.2 derzeit das beste Open-Weights-Modell?',
            a: 'Laut dem unabhängigen Artificial Analysis Intelligence Index v4.1 (Juni 2026) ja — GLM-5.2 erreicht 51 Punkte, das beste Open-Weights-Ergebnis und Platz 4 insgesamt. Es führt vor den nächsten offenen Modellen MiniMax-M3 und DeepSeek V4 Pro (beide 44) um rund 7 Punkte. Insgesamt schlägt es jedoch nicht die geschlossene Spitzenklasse.',
          },
          {
            q: 'Kann ich GLM-5.2 auf einem normalen PC oder Mac ausführen?',
            a: 'Nicht das vollständige Modell. Mit ~744B Parametern benötigt es Multi-GPU-Server oder eine gemietete Cloud-GPU. Auf Consumer-Hardware sind Sie auf stark quantisierte 1-Bit-GGUF-Builds beschränkt, die Qualität und Geschwindigkeit kosten. Sehen Sie sich unsere Hardware-Leitfäden an, um zu verstehen, was große lokale Modelle tatsächlich erfordern.',
          },
          {
            q: 'Schlägt GLM-5.2 GPT-5.5 und Claude Opus 4.8?',
            a: 'Beim Coding sehen unabhängige Ergebnisse GLM-5.2 vor GPT-5.5 (zum Beispiel die Reihenfolgen bei SWE-bench Pro und FrontierSWE). Gegenüber Claude Opus 4.8 liegt es in den meisten Direktvergleichen zurück — zum Beispiel bei Terminal-Bench 2.1 (81,0 vs. 85,0) und FrontierSWE (etwa einen Punkt dahinter). Die korrekte Zusammenfassung lautet "führt bei den Open Weights, schließt die Lücke zur Spitzenklasse", nicht "schlägt die Spitzenklasse".',
          },
          {
            q: 'Ist GLM-5.2 wirklich kostenlos? Was ist die Lizenz?',
            a: 'GLM-5.2 wird unter der MIT-Lizenz ohne regionale Nutzungsbeschränkungen veröffentlicht, sodass Sie es kostenlos herunterladen, selbst hosten und modifizieren können. Der Betrieb des vollständigen Modells kostet dennoch echte Infrastruktur (Multi-GPU oder gemietete GPU), und die gehostete Z.ai-API ist ein kostenpflichtiger Dienst.',
          },
          {
            q: 'Sind meine Daten bei GLM-5.2 sicher?',
            a: 'Das hängt vom Bereitstellungspfad ab. Selbst gehostete MIT-Weights halten alle Daten innerhalb Ihrer eigenen Grenze. Die erstparteiliche Z.ai-API bringt Erwägungen zur China-Datenresidenz mit sich, auf die unabhängige Berichterstattung hinweist, also behandeln Sie sie wie jeden anderen Drittanbieter-Cloud-Endpunkt, der seiner Gerichtsbarkeit unterliegt.',
          },
          {
            q: 'Sind die Benchmark-Zahlen von GLM-5.2 vertrauenswürdig?',
            a: 'Der unabhängige Artificial Analysis Index bestätigt das Ranking auf Platz 1 bei den Open Weights. Die eigenen Coding-Zahlen von Z.ai sind vom Unternehmen gemeldet, und die Reproduzierbarkeit ist umstritten — der Artificial-Analysis-Bericht weist darauf hin, dass interne Evaluierungen schwächer ausfielen als die veröffentlichten Benchmarks. Orientieren Sie sich an den unabhängigen Zahlen und behandeln Sie erstparteiliche Werte als Behauptungen.',
          },
          {
            q: 'Wie viel kostet der Betrieb von GLM-5.2 über die API?',
            a: 'Rund ein Sechstel der Kosten geschlossener Spitzenmodelle. Die gemeldeten Preise liegen bei etwa 1,4 $ pro 1 Mio. Eingabe-Token und 4,4 $ pro 1 Mio. Ausgabe-Token (Juni 2026). Da GLM-5.2 durchschnittlich ~43.000 Ausgabe-Token pro Aufgabe benötigt, schätzen Sie die realen Kosten anhand Ihres eigenen Workloads statt allein anhand der Token-Preise.',
          },
          {
            q: 'Welche Hardware benötige ich, um GLM-5.2 ordentlich selbst zu hosten?',
            a: 'Für das vollständige Modell Multi-GPU-Server oder eine gemietete Cloud-GPU. Consumer-Hardware kann nur stark quantisierte 1-Bit-GGUF-Builds ausführen. Sehen Sie sich den Hardware-Leitfaden für lokale LLMs 2026, Gebrauchte GPUs für lokale LLMs und 70B-Modelle auf Consumer-Hardware ausführen an, um Ihr Setup zu dimensionieren.',
          },
          {
            q: 'Erfüllt das Selbst-Hosten von GLM-5.2 die DSGVO und die BSI-Anforderungen?',
            a: 'Beim Selbst-Hosten ja. Wenn Sie die MIT-lizenzierten GLM-5.2-Weights in Ihrer eigenen Infrastruktur betreiben, verlassen die Inferenzdaten Ihre Systemgrenze nicht, was die Datenresidenz-Anforderungen der DSGVO erfüllt und sich in die Auftragsverarbeitungspflichten nach Art. 28 DSGVO einordnen lässt. Der lokale Betrieb passt zudem in die Kontrolllogik der BSI-Grundschutz-Kataloge, da die Verarbeitung innerhalb Ihrer kontrollierten Umgebung bleibt. Die erstparteiliche Z.ai-API unterliegt dagegen ihrer Heimatgerichtsbarkeit und ist wie jeder Drittanbieter-Cloud-Endpunkt zu bewerten.',
          },
          {
            q: 'Ist GLM-5.2 für den deutschen Mittelstand geeignet?',
            a: 'Ja, wenn das Unternehmen Multi-GPU- oder gemietete GPU-Kapazität bereitstellen kann. GLM-5.2 bietet dem Mittelstand spitzenklassennahe Open-Weights-Qualität bei voller Datenkontrolle und ohne Lizenzkosten, was für regulierte Branchen (Finanzwesen, Fertigung, Recht) im DACH-Raum attraktiv ist. Fehlt die nötige Hardware oder das GPU-Budget, sind kleinere lokale Modelle, die auf einer einzelnen GPU laufen, für den Mittelstand die praktischere Wahl; GLM-5.2 lässt sich dann gezielt über die gehostete API für einzelne Aufgaben nutzen, sofern der Datenpfad zur Compliance passt.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — Unabhängiges Intelligence-Index-v4.1-Ranking (51, Platz 1 Open / Platz 4 insgesamt).',
          'TechTimes. (2026, 17. Juni). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Erwägungen zur Datenresidenz auf dem Z.ai-API-Pfad.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — Unabhängiger Coding-Vergleich und Kosteneinordnung.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — Unabhängige Berichterstattung über die Coding-Ergebnisse.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2: Das beste Open-Weights-Modell 2026 (und warum es trotzdem nicht zu Hause läuft)',
      'description': 'GLM-5.2 ist das Open-Weights-LLM Nr. 1 im Artificial Analysis Intelligence Index (Juni 2026), Platz 4 insgesamt. Es schlägt GPT-5.5 beim Coding, liegt aber hinter Opus 4.8, und seine ~744B Größe ist nicht zu Hause ausführbar.',
      'url': 'https://www.promptquorum.com/de/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'de',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — Top-Modelle (Juni 2026)',
      'inLanguage': 'de',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'Geschlossene Spitzenklasse. Artificial Analysis Intelligence Index v4.1 Wert ~56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': 'Platz 1 Open Weights, Platz 4 insgesamt. Artificial Analysis Intelligence Index v4.1 Wert 51. Am 13. Juni 2026 von Z.ai unter MIT-Lizenz veröffentlicht.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'Open Weights. Artificial Analysis Intelligence Index v4.1 Wert 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'Open Weights. Artificial Analysis Intelligence Index v4.1 Wert 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Vorherige Z.ai-Veröffentlichung. Artificial Analysis Intelligence Index v4.1 Wert 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'de',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Ist GLM-5.2 derzeit das beste Open-Weights-Modell?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Laut dem unabhängigen Artificial Analysis Intelligence Index v4.1 (Juni 2026) ja — GLM-5.2 erreicht 51 Punkte, das beste Open-Weights-Ergebnis und Platz 4 insgesamt, und führt vor MiniMax-M3 und DeepSeek V4 Pro (beide 44) um rund 7 Punkte. Insgesamt schlägt es die geschlossene Spitzenklasse nicht.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Kann ich GLM-5.2 auf einem normalen PC oder Mac ausführen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Nicht das vollständige Modell. Mit ~744B Parametern benötigt es Multi-GPU-Server oder eine gemietete Cloud-GPU. Auf Consumer-Hardware sind Sie auf stark quantisierte 1-Bit-GGUF-Builds beschränkt, die Qualität und Geschwindigkeit kosten.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Schlägt GLM-5.2 GPT-5.5 und Claude Opus 4.8?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Beim Coding sehen unabhängige Ergebnisse GLM-5.2 vor GPT-5.5. Gegenüber Claude Opus 4.8 liegt es in den meisten Direktvergleichen zurück — zum Beispiel bei Terminal-Bench 2.1 (81,0 vs. 85,0) und FrontierSWE (etwa einen Punkt dahinter). Es führt bei den Open Weights und schließt die Lücke, schlägt aber nicht die Spitzenklasse.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ist GLM-5.2 wirklich kostenlos? Was ist die Lizenz?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2 wird unter der MIT-Lizenz ohne regionale Nutzungsbeschränkungen veröffentlicht, sodass Sie es kostenlos herunterladen, selbst hosten und modifizieren können. Der Betrieb des vollständigen Modells kostet dennoch echte Infrastruktur, und die gehostete Z.ai-API ist ein kostenpflichtiger Dienst.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sind meine Daten bei GLM-5.2 sicher?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Das hängt vom Bereitstellungspfad ab. Selbst gehostete MIT-Weights halten alle Daten innerhalb Ihrer eigenen Grenze. Die erstparteiliche Z.ai-API bringt Erwägungen zur China-Datenresidenz mit sich, auf die unabhängige Berichterstattung hinweist, also behandeln Sie sie wie jeden anderen Drittanbieter-Cloud-Endpunkt, der seiner Gerichtsbarkeit unterliegt.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Sind die Benchmark-Zahlen von GLM-5.2 vertrauenswürdig?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Der unabhängige Artificial Analysis Index bestätigt das Ranking auf Platz 1 bei den Open Weights. Die eigenen Coding-Zahlen von Z.ai sind vom Unternehmen gemeldet und die Reproduzierbarkeit ist umstritten, also orientieren Sie sich an den unabhängigen Zahlen und behandeln Sie erstparteiliche Werte als Behauptungen.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Wie viel kostet der Betrieb von GLM-5.2 über die API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Rund ein Sechstel der Kosten geschlossener Spitzenmodelle. Die gemeldeten Preise liegen bei etwa 1,4 $ pro 1 Mio. Eingabe-Token und 4,4 $ pro 1 Mio. Ausgabe-Token (Juni 2026). Da GLM-5.2 durchschnittlich ~43.000 Ausgabe-Token pro Aufgabe benötigt, schätzen Sie die Kosten anhand Ihres eigenen Workloads.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Welche Hardware benötige ich, um GLM-5.2 ordentlich selbst zu hosten?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Für das vollständige Modell Multi-GPU-Server oder eine gemietete Cloud-GPU. Consumer-Hardware kann nur stark quantisierte 1-Bit-GGUF-Builds ausführen. Sehen Sie sich den Hardware-Leitfaden für lokale LLMs 2026 und verwandte Hardware-Leitfäden an, um Ihr Setup zu dimensionieren.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Erfüllt das Selbst-Hosten von GLM-5.2 die DSGVO und die BSI-Anforderungen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Beim Selbst-Hosten ja. Wenn Sie die MIT-lizenzierten GLM-5.2-Weights in Ihrer eigenen Infrastruktur betreiben, verlassen die Inferenzdaten Ihre Systemgrenze nicht, was die Datenresidenz-Anforderungen der DSGVO erfüllt und sich in die Auftragsverarbeitungspflichten nach Art. 28 DSGVO einordnen lässt. Der lokale Betrieb passt zudem in die Kontrolllogik der BSI-Grundschutz-Kataloge. Die erstparteiliche Z.ai-API unterliegt dagegen ihrer Heimatgerichtsbarkeit und ist wie jeder Drittanbieter-Cloud-Endpunkt zu bewerten.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Ist GLM-5.2 für den deutschen Mittelstand geeignet?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ja, wenn das Unternehmen Multi-GPU- oder gemietete GPU-Kapazität bereitstellen kann. GLM-5.2 bietet dem Mittelstand spitzenklassennahe Open-Weights-Qualität bei voller Datenkontrolle und ohne Lizenzkosten. Fehlt die nötige Hardware oder das GPU-Budget, sind kleinere lokale Modelle, die auf einer einzelnen GPU laufen, die praktischere Wahl; GLM-5.2 lässt sich dann gezielt über die gehostete API nutzen, sofern der Datenpfad zur Compliance passt.',
          },
        },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-es.webp',
    title: 'GLM-5.2: el modelo open-weights nº1 de 2026 (y por qué sigue sin poder ejecutarse en casa)',
    seoTitle: 'GLM-5.2: el mejor LLM open-weights de 2026 — análisis honesto',
    intro: 'GLM-5.2, lanzado el 13 de junio de 2026 por Z.ai (antes Zhipu AI), es el modelo de lenguaje open-weights con la puntuación más alta en el Artificial Analysis Intelligence Index v4.1 independiente: 51 puntos, el nº1 entre los modelos abiertos y el 4º general. Supera a GPT-5.5 en benchmarks de programación, pero sigue por detrás de Claude Opus 4.8 en la mayoría de comparativas directas. Este artículo separa los resultados independientes de las afirmaciones de la propia Z.ai, y explica por qué un modelo abierto de ~744B parámetros no es algo que puedas ejecutar en casa.',
    metaDescription: 'GLM-5.2 es el LLM open-weights nº1 en el Artificial Analysis Index (junio de 2026), 4º general. Supera a GPT-5.5 en programación pero queda por detrás de Opus 4.8, y sus ~744B no se ejecutan en casa.',
    twitterDescription: 'GLM-5.2 es el mejor LLM open-weights de junio de 2026 (4º general en el Artificial Analysis Index). Supera a GPT-5.5 en programación, queda por detrás de Opus 4.8, y sus ~744B parámetros significan que no se ejecuta en casa.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2, lanzado el 13 de junio de 2026 por Z.ai (antes Zhipu AI), es el LLM open-weights con la puntuación más alta en el Artificial Analysis Intelligence Index v4.1: 51 puntos, nº1 entre los modelos abiertos y 4º general. Lidera los open-weights; no supera a la frontera cerrada. Y con ~744B parámetros, "abierto y self-hostable" no significa "se ejecuta en tu portátil."**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2 es el LLM open-weights líder de mediados de 2026 según benchmarks independientes, pero su tamaño de ~744B parámetros requiere infraestructura multi-GPU o alquilada, no hardware de consumo.' },
      { type: 'plain-terms', text: 'GLM-5.2 es un modelo de IA de descarga gratuita que ahora mismo puntúa más alto que cualquier otro modelo abierto. Es muy grande, así que la mayoría de la gente no puede ejecutar la versión completa en casa: o alquilas una GPU potente o usas una versión muy reducida.' },
    ],
    quickAnswerTop: {
      question: '¿Es GLM-5.2 el mejor modelo open-weights ahora mismo, y puedo hacerle self-hosting?',
      answer: 'A junio de 2026, GLM-5.2 es el modelo open-weights mejor clasificado en el Artificial Analysis Intelligence Index (51 puntos, nº1 abierto y 4º general). La licencia MIT te permite hacerle self-hosting sin límites regionales, pero el modelo completo de ~744B necesita hardware serio. La mayoría de las personas ejecutan una build muy cuantizada o alquilan una GPU.',
      bullets: [
        '#1 open-weights / 4º general (Artificial Analysis Intelligence Index v4.1)',
        'Licencia MIT, sin límites regionales, gratis para self-hosting',
        '~744B parámetros totales / ~40B activos (Mixture-of-Experts)',
        'Ventana de contexto de 1M tokens',
        'Supera a GPT-5.5 en programación; queda por detrás de Claude Opus 4.8 en la mayoría de comparativas directas',
        '~1/6 del coste de los modelos de frontera cerrada vía la API alojada',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: '¿Qué es GLM-5.2?', anchor: '#what-is-glm-5-2' },
      { label: 'Benchmarks independientes', anchor: '#independent-benchmarks' },
      { label: 'Las cifras de la propia Z.ai', anchor: '#claimed-numbers' },
      { label: '¿Puedes ejecutarlo en casa?', anchor: '#run-at-home' },
      { label: 'Self-hosting frente a la API de Z.ai', anchor: '#data-path' },
      { label: 'Precio y coste', anchor: '#pricing' },
      { label: '¿Deberías usar GLM-5.2?', anchor: '#decision' },
      { label: 'Contexto regional', anchor: '#regional-context' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**#1 open-weights, 4º general.** GLM-5.2 puntúa **51** en el Artificial Analysis Intelligence Index v4.1: el mejor modelo open-weights, 4º general, **+11 sobre GLM-5.1 (40)**, y ~7 puntos por encima de los siguientes modelos abiertos, MiniMax-M3 (44) y DeepSeek V4 Pro (44).',
          '**Lidera los open-weights, no todo el campo.** Se sitúa unos 5 puntos por debajo de Claude Fable 5 y queda por detrás de la frontera cerrada en general. "Acorta la distancia", no "supera la frontera".',
          '**Fuerte en programación, segundo tras Opus 4.8.** Los resultados de programación independientes ponen a GLM-5.2 por delante de GPT-5.5 pero por detrás de Claude Opus 4.8 en la mayoría de comparativas directas.',
          '**~744B parámetros no es ejecutable en casa.** Es Mixture-of-Experts (~40B activos por token), pero el modelo completo necesita multi-GPU o una GPU alquilada; solo las builds GGUF de 1-bit muy cuantizadas caben en hardware de consumo.',
          '**Los pesos self-hosted protegen tus datos; la API de Z.ai no necesariamente.** Los pesos con licencia MIT se ejecutan dentro de tu perímetro; la API de Z.ai de primera parte conlleva consideraciones de residencia de datos en China.',
          '**Trata los propios benchmarks de Z.ai como reportados por la empresa.** La reproducibilidad está en disputa: guíate por las cifras independientes de Artificial Analysis.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: '¿Qué es GLM-5.2?',
        content: [
          '**GLM-5.2 es un modelo de lenguaje open-weights lanzado el 13 de junio de 2026 por Z.ai (antes Zhipu AI), bajo la licencia MIT sin límites regionales de uso.** Se sometió a benchmarks públicos desde el 16 de junio de 2026.',
        ],
        items: [
          '**~744B parámetros totales** (las fuentes citan entre 743B y 753B), usando una arquitectura **Mixture-of-Experts** con **~40B parámetros activos por token**.',
          '**Ventana de contexto de 1M tokens** con una **salida máxima de 131,072 tokens**.',
          '**~43,000 tokens de salida por tarea** de media, frente a los ~26,000 de GLM-5.1, lo que aumenta el tiempo y el coste de la inferencia local.',
          '**Licencia MIT:** gratis para descargar, hacer self-hosting y modificar, sin restricciones regionales.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: '¿Qué tan bueno es GLM-5.2? Primero los benchmarks independientes',
        content: [
          '**En la única clasificación independiente y multivendedor —el Artificial Analysis Intelligence Index v4.1— GLM-5.2 es el modelo open-weights más alto con 51 puntos, 4º general (Artificial Analysis, junio de 2026).**',
        ],
        rows: [
          { 'Modelo': 'Claude Fable 5', 'Index v4.1': '~56', 'Categoría': 'Frontera cerrada' },
          { 'Modelo': 'GLM-5.2', 'Index v4.1': '51', 'Categoría': '#1 open-weights / 4º general' },
          { 'Modelo': 'MiniMax-M3', 'Index v4.1': '44', 'Categoría': 'Open-weights' },
          { 'Modelo': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'Categoría': 'Open-weights' },
          { 'Modelo': 'GLM-5.1 (anterior)', 'Index v4.1': '40', 'Categoría': 'Open-weights' },
        ],
        columns: ['Modelo', 'Index v4.1', 'Categoría'],
        note: 'Resultados de programación independientes: Terminal-Bench 2.1 — GLM-5.2 puntúa 81.0 frente a Claude Opus 4.8 con 85.0. SWE-bench Pro — GLM-5.2 con 62.1 (valor reportado por Z.ai) se sitúa por delante del 58.6 de GPT-5.5; la cobertura independiente corrobora ese orden. FrontierSWE — GLM-5.2 con 74.4 (valor reportado por Z.ai) supera a GPT-5.5 (72.6) y queda por detrás de Opus 4.8 (75.1) por cerca de un punto, un orden que la cobertura independiente confirma. Veredicto independiente neto: GLM-5.2 es el modelo de programación de código abierto más fuerte disponible a junio de 2026, pero aún queda por detrás de Claude Opus 4.8 en la mayoría de comparativas directas (VentureBeat; letsdatascience, junio de 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1 (junio de 2026): Claude Fable 5 obtiene 56 puntos, GLM-5.2 obtiene 51 puntos (#1 en pesos abiertos, 4.º en general), MiniMax-M3 y DeepSeek V4 Pro obtienen 44 puntos cada uno, GLM-5.1 obtiene 40 puntos.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Las cifras de la propia Z.ai frente a los resultados independientes: léelas con cuidado',
        content: [
          '**Varias cifras destacadas provienen de las propias evaluaciones de Z.ai y deben leerse como reportadas por la empresa, no verificadas de forma independiente.**',
        ],
        items: [
          '**Las cifras de programación reportadas por la empresa** —por ejemplo MCP-Atlas 77.0 (reportado por Z.ai), frente a GPT-5.5 con 75.3 y Opus 4.8 con 77.8— las ejecuta la propia Z.ai y deben tratarse como afirmaciones a la espera de una réplica independiente.',
          '**El análisis de Artificial Analysis señala que las evaluaciones internas de Z.ai se reportaron más débiles que sus benchmarks publicados**, y la reproducibilidad está en disputa.',
          '**La reproducibilidad es una incógnita.** Al menos un comentarista destacado describe el modelo como "bench-maxxed", y GLM-5.1 supuestamente puntuó un 0% en al menos un benchmark en el que GLM-5.2 ahora rinde bien. El Artificial Analysis Index independiente —no la propia suite de Z.ai— es lo que actualmente respalda la afirmación de ser el nº1 open-weights.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: '¿Puedes ejecutar GLM-5.2 en casa? La realidad de los ~744B',
        content: [
          '**No, no el modelo completo. "Open weights" y "self-hostable" no significan "se ejecuta en un PC doméstico típico".**',
        ],
        items: [
          '**El GLM-5.2 completo necesita infraestructura seria:** servidores multi-GPU o una GPU en la nube alquilada.',
          '**En hardware de consumo, solo son viables las builds GGUF de 1-bit muy cuantizadas**, con concesiones en calidad y velocidad.',
          '**La alta salida de ~43,000 tokens por tarea aumenta aún más el tiempo y el coste locales.**',
          'Para la realidad de hardware de los modelos locales grandes, consulta [Ejecutar modelos de 70B en hardware de consumo](/es/local-llms/70b-models-consumer-hardware), [GPUs usadas para LLMs locales](/es/local-llms/used-gpus-for-local-llms), la [Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026) y [Apple Silicon M5 para LLMs locales](/es/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'El modelo completo GLM-5.2 (~744B parámetros, ~40B activos) requiere un servidor multi-GPU o una GPU en la nube alquilada; solo las compilaciones GGUF cuantizadas a 1 bit funcionan en una sola GPU o CPU de consumo en casa, con menor calidad.',
      },
      dataPath: {
        id: 'data-path',
        title: 'Pesos self-hosted frente a la API de Z.ai: a dónde van tus datos',
        content: [
          '**La licencia y la API son dos historias distintas de gobernanza de datos. Los pesos MIT self-hosted mantienen tus datos dentro de tu perímetro; la API de Z.ai de primera parte no.**',
        ],
        items: [
          '**Self-hosted (pesos MIT):** los datos permanecen locales y tuyos, sin transmisión a terceros.',
          '**API de primera parte de Z.ai:** la cobertura independiente señala explícitamente consideraciones de residencia de datos en China ("China data risk") en la ruta de la API (TechTimes, 17 de junio de 2026).',
          '**Marco de decisión:** si la sensibilidad de los datos importa, haz self-hosting de los pesos; si usas la API alojada, trátala como tratarías cualquier endpoint en la nube de terceros sujeto a su jurisdicción.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Precio y coste de GLM-5.2',
        content: [
          '**Vía la API alojada, GLM-5.2 cuesta aproximadamente un sexto del coste de los modelos de frontera cerrada (VentureBeat, junio de 2026).** El precio reportado es de aproximadamente $1.4 por 1M de tokens de entrada y $4.4 por 1M de tokens de salida (a junio de 2026). Ten en cuenta la alta salida por tarea (~43,000 tokens) al estimar el coste real de la carga de trabajo.',
        ],
      },
      decision: {
        id: 'decision',
        title: '¿Deberías usar GLM-5.2?',
        decisionBlock: {
          title: 'Guía de decisión de GLM-5.2',
          localIf: [
            'Quieres el modelo open-weights más fuerte disponible ahora mismo',
            'Necesitas self-hosting y control de datos dentro de tu propio perímetro',
            'Ejecutas tareas de programación de horizonte largo',
            'Quieres calidad cercana a la frontera a aproximadamente un sexto del coste',
          ],
          cloudIf: [
            'Necesitas la puntuación máxima en comparativas directas de programación o razonamiento',
            'No requieres open weights y prefieres un modelo de frontera cerrada como Claude Opus 4.8',
            'No puedes aprovisionar infraestructura multi-GPU o de GPU alquilada',
          ],
          quick: [
            'La mejor opción open-weights hoy, pero verifica los benchmarks en disputa con tus propias tareas antes de comprometerte.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: contexto regional',
        content: [
          '**UE / GDPR:** Hacer self-hosting de GLM-5.2 bajo la licencia MIT mantiene todos los datos de inferencia dentro de tu propia infraestructura, lo que satisface las expectativas de residencia de datos bajo el GDPR. La diferencia de cumplimiento entre modelos está en la documentación del proveedor, no en el tratamiento de datos, cuando la inferencia se ejecuta localmente.',
          '**Japón (METI):** Para despliegues de producción, documenta la versión del modelo (GLM-5.2), la licencia (MIT), y si la inferencia se ejecuta sobre pesos self-hosted o la API de Z.ai, en línea con las directrices de gobernanza de IA del METI.',
          '**China / ruta de datos:** GLM-5.2 está construido por un laboratorio chino. La palanca de cumplimiento clave es la ruta de despliegue, no el modelo: los pesos MIT self-hosted mantienen los datos en tu perímetro, mientras que la API de primera parte de Z.ai está sujeta a su jurisdicción de origen. Elige la ruta que se ajuste a tus requisitos de residencia de datos.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al evaluar GLM-5.2',
        items: [
          '**Asumir que "open weights" significa "se ejecuta en casa".** El tamaño de ~744B requiere infraestructura multi-GPU o alquilada; solo las builds GGUF de 1-bit caben en hardware de consumo.',
          '**Tratar los benchmarks de primera parte de Z.ai como verificados.** Guíate por el Artificial Analysis Index independiente; trata las cifras de programación de la empresa como afirmaciones.',
          '**Confundir los pesos MIT con la API alojada para la gobernanza de datos.** El self-hosting mantiene los datos locales; la API está sujeta a su jurisdicción de origen.',
          '**Leer "#1 open weights" como "supera la frontera".** GLM-5.2 es 4º general y queda por detrás de Claude Opus 4.8 en la mayoría de comparativas directas.',
          '**Ignorar la salida de ~43,000 tokens por tarea** al presupuestar el tiempo y el coste de la inferencia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecutar modelos de 70B en hardware de consumo](/es/local-llms/70b-models-consumer-hardware) — qué exigen realmente los modelos locales grandes a tu hardware.',
          '[GPUs usadas para LLMs locales](/es/local-llms/used-gpus-for-local-llms) — rutas de GPU rentables cuando necesitas capacidad de inferencia real.',
          '[Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026) — adapta tu hardware a la clase de modelo que quieres ejecutar.',
          '[Apple Silicon M5 para LLMs locales](/es/local-llms/apple-silicon-m5-local-llm) — opciones de memoria unificada para ejecutar modelos más grandes localmente.',
          '[Actualizaciones de modelos LLM locales 2026](/es/local-llms/local-llm-model-updates-2026) — todos los lanzamientos open-weight importantes seguidos este año.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Es GLM-5.2 el mejor modelo open-weights ahora mismo?',
            a: 'Según el Artificial Analysis Intelligence Index v4.1 independiente (junio de 2026), sí: GLM-5.2 puntúa 51, el mejor resultado open-weights y 4º general. Lidera a los siguientes modelos abiertos, MiniMax-M3 y DeepSeek V4 Pro (ambos 44), por cerca de 7 puntos. Sin embargo, no supera a la frontera cerrada en general.',
          },
          {
            q: '¿Puedo ejecutar GLM-5.2 en un PC o Mac normal?',
            a: 'No el modelo completo. Con ~744B parámetros necesita servidores multi-GPU o una GPU en la nube alquilada. En hardware de consumo estás limitado a builds GGUF de 1-bit muy cuantizadas, que sacrifican calidad y velocidad. Consulta nuestras guías de hardware para saber qué requieren realmente los modelos locales grandes.',
          },
          {
            q: '¿GLM-5.2 supera a GPT-5.5 y a Claude Opus 4.8?',
            a: 'En programación, los resultados independientes ponen a GLM-5.2 por delante de GPT-5.5 (por ejemplo, los órdenes de SWE-bench Pro y FrontierSWE). Frente a Claude Opus 4.8 queda por detrás en la mayoría de comparativas directas: por ejemplo Terminal-Bench 2.1 (81.0 frente a 85.0) y FrontierSWE (cerca de un punto por detrás). El resumen preciso es "lidera los open weights, acorta la distancia con la frontera", no "supera la frontera".',
          },
          {
            q: '¿GLM-5.2 es realmente gratis? ¿Cuál es la licencia?',
            a: 'GLM-5.2 se lanza bajo la licencia MIT sin límites regionales de uso, así que puedes descargarlo, hacerle self-hosting y modificarlo gratis. Ejecutar el modelo completo aún cuesta infraestructura real (multi-GPU o GPU alquilada), y la API alojada de Z.ai es un servicio de pago.',
          },
          {
            q: '¿Están seguros mis datos con GLM-5.2?',
            a: 'Depende de la ruta de despliegue. Los pesos MIT self-hosted mantienen todos los datos dentro de tu propio perímetro. La API de primera parte de Z.ai conlleva consideraciones de residencia de datos en China señaladas por la cobertura independiente, así que trátala como tratarías cualquier endpoint en la nube de terceros sujeto a su jurisdicción.',
          },
          {
            q: '¿Son fiables las cifras de benchmark de GLM-5.2?',
            a: 'El Artificial Analysis Index independiente corrobora la clasificación de nº1 open-weights. Las propias cifras de programación de Z.ai son reportadas por la empresa, y la reproducibilidad está en disputa: el análisis de Artificial Analysis señala que las evaluaciones internas se reportaron más débiles que los benchmarks publicados. Guíate por las cifras independientes y trata las cifras de primera parte como afirmaciones.',
          },
          {
            q: '¿Cuánto cuesta ejecutar GLM-5.2 vía API?',
            a: 'Aproximadamente un sexto del coste de los modelos de frontera cerrada. El precio reportado es de aproximadamente $1.4 por 1M de tokens de entrada y $4.4 por 1M de tokens de salida (junio de 2026). Como GLM-5.2 promedia ~43,000 tokens de salida por tarea, estima el coste real sobre tu propia carga de trabajo en lugar de basarte solo en las tarifas por token.',
          },
          {
            q: '¿Qué hardware necesito para hacer self-hosting de GLM-5.2 correctamente?',
            a: 'Para el modelo completo, servidores multi-GPU o una GPU en la nube alquilada. El hardware de consumo solo puede ejecutar builds GGUF de 1-bit muy cuantizadas. Consulta la Guía de hardware para LLMs locales 2026, GPUs usadas para LLMs locales y Ejecutar modelos de 70B en hardware de consumo para dimensionar tu configuración.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — Clasificación independiente del Intelligence Index v4.1 (51, #1 abierto / 4º general).',
          'TechTimes. (2026, 17 de junio). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Consideraciones de residencia de datos en la ruta de la API de Z.ai.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — Comparativa de programación independiente y marco de costes.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — Cobertura independiente de los resultados de programación.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2: el modelo open-weights nº1 de 2026 (y por qué sigue sin poder ejecutarse en casa)',
      'description': 'GLM-5.2 es el LLM open-weights nº1 en el Artificial Analysis Intelligence Index (junio de 2026), 4º general. Supera a GPT-5.5 en programación pero queda por detrás de Opus 4.8, y su tamaño de ~744B no es ejecutable en casa.',
      'url': 'https://www.promptquorum.com/es/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'es',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — Modelos principales (junio de 2026)',
      'inLanguage': 'es',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'Frontera cerrada. Puntuación del Artificial Analysis Intelligence Index v4.1 ~56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': '#1 open-weights, 4º general. Puntuación del Artificial Analysis Intelligence Index v4.1 de 51. Lanzado el 13 de junio de 2026 por Z.ai bajo licencia MIT.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'Open-weights. Puntuación del Artificial Analysis Intelligence Index v4.1 de 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'Open-weights. Puntuación del Artificial Analysis Intelligence Index v4.1 de 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Lanzamiento anterior de Z.ai. Puntuación del Artificial Analysis Intelligence Index v4.1 de 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'es',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Es GLM-5.2 el mejor modelo open-weights ahora mismo?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Según el Artificial Analysis Intelligence Index v4.1 independiente (junio de 2026), sí: GLM-5.2 puntúa 51, el mejor resultado open-weights y 4º general, liderando a MiniMax-M3 y DeepSeek V4 Pro (ambos 44) por cerca de 7 puntos. No supera a la frontera cerrada en general.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo ejecutar GLM-5.2 en un PC o Mac normal?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No el modelo completo. Con ~744B parámetros necesita servidores multi-GPU o una GPU en la nube alquilada. En hardware de consumo estás limitado a builds GGUF de 1-bit muy cuantizadas, que sacrifican calidad y velocidad.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿GLM-5.2 supera a GPT-5.5 y a Claude Opus 4.8?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'En programación, los resultados independientes ponen a GLM-5.2 por delante de GPT-5.5. Frente a Claude Opus 4.8 queda por detrás en la mayoría de comparativas directas: por ejemplo Terminal-Bench 2.1 (81.0 frente a 85.0) y FrontierSWE (cerca de un punto por detrás). Lidera los open weights y acorta la distancia, pero no supera la frontera.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿GLM-5.2 es realmente gratis? ¿Cuál es la licencia?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2 se lanza bajo la licencia MIT sin límites regionales de uso, así que puedes descargarlo, hacerle self-hosting y modificarlo gratis. Ejecutar el modelo completo aún cuesta infraestructura real, y la API alojada de Z.ai es un servicio de pago.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Están seguros mis datos con GLM-5.2?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Depende de la ruta de despliegue. Los pesos MIT self-hosted mantienen todos los datos dentro de tu propio perímetro. La API de primera parte de Z.ai conlleva consideraciones de residencia de datos en China señaladas por la cobertura independiente, así que trátala como cualquier endpoint en la nube de terceros sujeto a su jurisdicción.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Son fiables las cifras de benchmark de GLM-5.2?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'El Artificial Analysis Index independiente corrobora la clasificación de nº1 open-weights. Las propias cifras de programación de Z.ai son reportadas por la empresa y la reproducibilidad está en disputa, así que guíate por las cifras independientes y trata las cifras de primera parte como afirmaciones.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Cuánto cuesta ejecutar GLM-5.2 vía API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Aproximadamente un sexto del coste de los modelos de frontera cerrada. El precio reportado es de aproximadamente $1.4 por 1M de tokens de entrada y $4.4 por 1M de tokens de salida (junio de 2026). Como GLM-5.2 promedia ~43,000 tokens de salida por tarea, estima el coste sobre tu propia carga de trabajo.',
          },
        },
        {
          '@type': 'Question',
          'name': '¿Qué hardware necesito para hacer self-hosting de GLM-5.2 correctamente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Para el modelo completo, servidores multi-GPU o una GPU en la nube alquilada. El hardware de consumo solo puede ejecutar builds GGUF de 1-bit muy cuantizadas. Consulta la Guía de hardware para LLMs locales 2026 y las guías de hardware relacionadas para dimensionar tu configuración.',
          },
        },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-fr.webp',
    title: 'GLM-5.2 : le modèle open-weights n°1 de 2026 (et pourquoi il ne tournera pas chez vous)',
    seoTitle: 'GLM-5.2 : meilleur LLM open-weights de 2026 — avis honnête',
    intro: 'GLM-5.2, publié le 13 juin 2026 par Z.ai (anciennement Zhipu AI), est le modèle de langage open-weights le mieux classé sur l\'Artificial Analysis Intelligence Index v4.1 indépendant — 51 points, n°1 des modèles ouverts et 4e au classement général. Il dépasse GPT-5.5 sur les benchmarks de code mais reste derrière Claude Opus 4.8 dans la plupart des comparaisons directes. Cet article distingue les résultats indépendants des affirmations de Z.ai, et explique pourquoi un modèle ouvert d\'environ 744B de paramètres ne s\'exécute pas chez vous.',
    metaDescription: 'GLM-5.2 est le LLM open-weights n°1 de l\'Artificial Analysis Index (juin 2026), 4e au général. Il bat GPT-5.5 sur le code mais reste derrière Opus 4.8, et ses ~744B ne tournent pas chez vous.',
    twitterDescription: 'GLM-5.2 est le meilleur LLM open-weights de juin 2026 (4e au général sur l\'Artificial Analysis Index). Il bat GPT-5.5 sur le code, reste derrière Opus 4.8 — et ses ~744B ne tournent pas chez vous.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2, publié le 13 juin 2026 par Z.ai (anciennement Zhipu AI), est le LLM open-weights le mieux classé sur l\'Artificial Analysis Intelligence Index v4.1 — 51 points, n°1 des modèles ouverts et 4e au général. Il domine l\'open-weights ; il ne dépasse pas la frontière fermée. Et à ~744B de paramètres, « ouvert et auto-hébergeable » ne veut pas dire « tourne sur votre ordinateur portable ».**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2 est le meilleur LLM open-weights de mi-2026 selon les benchmarks indépendants, mais sa taille de ~744B de paramètres exige une infrastructure multi-GPU ou louée, pas du matériel grand public.' },
      { type: 'plain-terms', text: 'GLM-5.2 est un modèle d\'IA téléchargeable gratuitement qui obtient un meilleur score que tout autre modèle ouvert actuellement. Il est très volumineux : la plupart des gens ne peuvent pas exécuter la version complète chez eux — soit vous louez un GPU puissant, soit vous utilisez une version fortement réduite.' },
    ],
    quickAnswerTop: {
      question: 'GLM-5.2 est-il le meilleur modèle open-weights actuel, et puis-je l\'auto-héberger ?',
      answer: 'En juin 2026, GLM-5.2 est le modèle open-weights le mieux classé sur l\'Artificial Analysis Intelligence Index (51 points, n°1 ouvert et 4e au général). La licence MIT permet de l\'auto-héberger sans limite régionale, mais le modèle complet de ~744B exige du matériel sérieux. La plupart des particuliers utilisent une version fortement quantifiée ou louent un GPU.',
      bullets: [
        'N°1 open-weights / 4e au général (Artificial Analysis Intelligence Index v4.1)',
        'Licence MIT, aucune limite régionale, auto-hébergement gratuit',
        '~744B de paramètres au total / ~40B actifs (Mixture-of-Experts)',
        'Fenêtre de contexte de 1M de tokens',
        'Bat GPT-5.5 sur le code ; reste derrière Claude Opus 4.8 dans la plupart des comparaisons directes',
        'Environ 1/6 du coût des modèles de frontière fermée via l\'API hébergée',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Qu\'est-ce que GLM-5.2 ?', anchor: '#what-is-glm-5-2' },
      { label: 'Benchmarks indépendants', anchor: '#independent-benchmarks' },
      { label: 'Les chiffres de Z.ai', anchor: '#claimed-numbers' },
      { label: 'Pouvez-vous l\'exécuter chez vous ?', anchor: '#run-at-home' },
      { label: 'Auto-hébergé vs l\'API Z.ai', anchor: '#data-path' },
      { label: 'Tarification et coût', anchor: '#pricing' },
      { label: 'Faut-il utiliser GLM-5.2 ?', anchor: '#decision' },
      { label: 'Contexte régional', anchor: '#regional-context' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**N°1 open-weights, 4e au général.** GLM-5.2 obtient **51** sur l\'Artificial Analysis Intelligence Index v4.1 — le meilleur modèle open-weights, 4e au général, **+11 par rapport à GLM-5.1 (40)**, et ~7 points devant les modèles ouverts suivants, MiniMax-M3 (44) et DeepSeek V4 Pro (44).',
          '**Il domine l\'open-weights, pas tout le champ.** Il se situe environ 5 points sous Claude Fable 5 et se classe derrière la frontière fermée au général. « Réduit l\'écart » — pas « dépasse la frontière ».',
          '**Solide sur le code, second derrière Opus 4.8.** Les résultats de code indépendants placent GLM-5.2 devant GPT-5.5 mais derrière Claude Opus 4.8 dans la plupart des comparaisons directes.',
          '**~744B de paramètres ne s\'exécute pas chez soi.** C\'est une architecture Mixture-of-Experts (~40B actifs par token), mais le modèle complet exige du multi-GPU ou un GPU loué ; seules les versions GGUF 1-bit fortement quantifiées tiennent sur du matériel grand public.',
          '**Les poids auto-hébergés gardent vos données ; pas nécessairement l\'API Z.ai.** Les poids sous licence MIT s\'exécutent dans votre périmètre ; l\'API Z.ai officielle soulève des considérations de résidence des données en Chine.',
          '**Traitez les propres benchmarks de Z.ai comme déclarés par l\'éditeur.** La reproductibilité est contestée — privilégiez les chiffres indépendants d\'Artificial Analysis.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'Qu\'est-ce que GLM-5.2 ?',
        content: [
          '**GLM-5.2 est un grand modèle de langage open-weights publié le 13 juin 2026 par Z.ai (anciennement Zhipu AI), sous licence MIT sans limite d\'usage régionale.** Il est benchmarké publiquement depuis le 16 juin 2026.',
        ],
        items: [
          '**~744B de paramètres au total** (les sources citent 743B–753B), avec une architecture **Mixture-of-Experts** comptant **~40B de paramètres actifs par token**.',
          '**Fenêtre de contexte de 1M de tokens** avec une **sortie maximale de 131 072 tokens**.',
          '**~43 000 tokens de sortie par tâche** en moyenne — contre ~26 000 pour GLM-5.1 — ce qui augmente le temps et le coût d\'inférence locale.',
          '**Licence MIT :** téléchargement, auto-hébergement et modification gratuits, sans restriction régionale.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'GLM-5.2 est-il bon ? D\'abord les benchmarks indépendants',
        content: [
          '**Sur le seul classement indépendant et inter-fournisseurs — l\'Artificial Analysis Intelligence Index v4.1 — GLM-5.2 est le meilleur modèle open-weights à 51 points, 4e au général (Artificial Analysis, juin 2026).**',
        ],
        rows: [
          { 'Modèle': 'Claude Fable 5', 'Index v4.1': '~56', 'Niveau': 'Frontière fermée' },
          { 'Modèle': 'GLM-5.2', 'Index v4.1': '51', 'Niveau': 'N°1 open-weights / 4e au général' },
          { 'Modèle': 'MiniMax-M3', 'Index v4.1': '44', 'Niveau': 'Open-weights' },
          { 'Modèle': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'Niveau': 'Open-weights' },
          { 'Modèle': 'GLM-5.1 (précédent)', 'Index v4.1': '40', 'Niveau': 'Open-weights' },
        ],
        columns: ['Modèle', 'Index v4.1', 'Niveau'],
        note: 'Résultats de code indépendants : Terminal-Bench 2.1 — GLM-5.2 obtient 81.0 contre 85.0 pour Claude Opus 4.8. SWE-bench Pro — GLM-5.2 à 62.1 (valeur déclarée par Z.ai) devance GPT-5.5 à 58.6 ; la couverture indépendante confirme cet ordre. FrontierSWE — GLM-5.2 à 74.4 (valeur déclarée par Z.ai) bat GPT-5.5 (72.6) et reste derrière Opus 4.8 (75.1) d\'environ un point, un ordre confirmé par la couverture indépendante. Verdict indépendant net : GLM-5.2 est le modèle de code open-source le plus solide disponible en juin 2026, mais il reste derrière Claude Opus 4.8 dans la plupart des comparaisons directes (VentureBeat ; letsdatascience, juin 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1 (juin 2026) : Claude Fable 5 obtient 56 points, GLM-5.2 obtient 51 points (n°1 en poids ouverts, 4e au global), MiniMax-M3 et DeepSeek V4 Pro obtiennent chacun 44 points, GLM-5.1 obtient 40 points.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Les chiffres de Z.ai vs les résultats indépendants : à lire avec prudence',
        content: [
          '**Plusieurs chiffres phares proviennent des propres évaluations de Z.ai et doivent être lus comme déclarés par l\'éditeur, non vérifiés de manière indépendante.**',
        ],
        items: [
          '**Les chiffres de code déclarés par l\'éditeur** — par exemple MCP-Atlas 77.0 (déclaré par Z.ai), contre 75.3 pour GPT-5.5 et 77.8 pour Opus 4.8 — sont mesurés par Z.ai elle-même et doivent être traités comme des affirmations en attente de réplication indépendante.',
          '**Le compte-rendu d\'Artificial Analysis note que les évaluations internes de Z.ai étaient rapportées plus faibles que ses benchmarks publiés**, et la reproductibilité est contestée.',
          '**La reproductibilité reste une question ouverte.** Au moins un commentateur reconnu qualifie le modèle de « bench-maxxed », et GLM-5.1 aurait obtenu 0 % sur au moins un benchmark où GLM-5.2 réussit désormais bien. C\'est l\'Artificial Analysis Index indépendant — pas la suite de Z.ai — qui soutient actuellement la revendication du n°1 open-weights.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'Pouvez-vous exécuter GLM-5.2 chez vous ? La réalité des ~744B',
        content: [
          '**Non — pas le modèle complet. « Open-weights » et « auto-hébergeable » ne veulent pas dire « tourne sur un PC domestique classique ».**',
        ],
        items: [
          '**GLM-5.2 complet exige une infrastructure sérieuse :** serveurs multi-GPU ou GPU cloud loué.',
          '**Sur du matériel grand public, seules les versions GGUF 1-bit fortement quantifiées sont envisageables**, avec des compromis de qualité et de vitesse.',
          '**La sortie élevée de ~43 000 tokens par tâche augmente encore le temps et le coût en local.**',
          'Pour la réalité matérielle des grands modèles locaux, voir [Exécuter des modèles 70B sur du matériel grand public](/fr/local-llms/70b-models-consumer-hardware), [GPU d\'occasion pour LLM locaux](/fr/local-llms/used-gpus-for-local-llms), le [Guide du matériel pour LLM locaux 2026](/fr/local-llms/local-llm-hardware-guide-2026) et [Apple Silicon M5 pour LLM locaux](/fr/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'Le modèle complet GLM-5.2 (~744B de paramètres, ~40B actifs) nécessite un serveur multi-GPU ou un GPU cloud loué ; seules les versions GGUF quantifiées en 1 bit tournent sur un seul GPU ou CPU grand public à la maison, avec une qualité réduite.',
      },
      dataPath: {
        id: 'data-path',
        title: 'Poids auto-hébergés vs API Z.ai : où vont vos données',
        content: [
          '**La licence et l\'API racontent deux histoires de gouvernance des données différentes. Les poids MIT auto-hébergés gardent vos données dans votre périmètre ; l\'API Z.ai officielle, non.**',
        ],
        items: [
          '**Auto-hébergé (poids MIT) :** les données restent locales et vous appartiennent — aucune transmission à des tiers.',
          '**API Z.ai officielle :** la couverture indépendante signale explicitement des considérations de résidence des données en Chine (« risque de données en Chine ») sur le chemin de l\'API (TechTimes, 17 juin 2026).',
          '**Cadre de décision :** si la sensibilité des données compte, auto-hébergez les poids ; si vous utilisez l\'API hébergée, traitez-la comme tout point de terminaison cloud tiers soumis à sa juridiction.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Tarification et coût de GLM-5.2',
        content: [
          '**Via l\'API hébergée, GLM-5.2 revient à environ un sixième du coût des modèles de frontière fermée (VentureBeat, juin 2026).** Le tarif annoncé est d\'environ $1.4 par 1M de tokens d\'entrée et $4.4 par 1M de tokens de sortie (en juin 2026). Tenez compte de la sortie élevée par tâche (~43 000 tokens) pour estimer le coût réel de votre charge de travail.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Faut-il utiliser GLM-5.2 ?',
        decisionBlock: {
          title: 'Guide de décision GLM-5.2',
          localIf: [
            'Vous voulez le modèle open-weights le plus solide disponible actuellement',
            'Vous avez besoin d\'auto-hébergement et de contrôle des données dans votre propre périmètre',
            'Vous exécutez des tâches de code à horizon long',
            'Vous voulez une qualité proche de la frontière pour environ un sixième du coût',
          ],
          cloudIf: [
            'Vous avez besoin du meilleur score en code ou en raisonnement en comparaison directe',
            'Vous n\'avez pas besoin de poids ouverts et préférez un modèle de frontière fermée comme Claude Opus 4.8',
            'Vous ne pouvez pas provisionner d\'infrastructure multi-GPU ou GPU loué',
          ],
          quick: [
            'La meilleure option open-weights aujourd\'hui — mais vérifiez les benchmarks contestés sur vos propres tâches avant de vous engager.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2 : contexte régional',
        content: [
          '**UE / RGPD :** Auto-héberger GLM-5.2 sous licence MIT maintient toutes les données d\'inférence dans votre propre infrastructure, ce qui satisfait les attentes de résidence des données au titre du RGPD. La CNIL recommande l\'inférence locale pour le traitement des données professionnelles sensibles (financières, médicales, juridiques). La différence de conformité entre modèles tient à la documentation fournisseur, pas au traitement des données, lorsque l\'inférence s\'exécute localement.',
          '**Japon (METI) :** Pour les déploiements en production, documentez la version du modèle (GLM-5.2), la licence (MIT) et si l\'inférence s\'exécute sur des poids auto-hébergés ou via l\'API Z.ai, conformément aux orientations de gouvernance de l\'IA du METI.',
          '**Chine / chemin des données :** GLM-5.2 est conçu par un laboratoire chinois. Le levier de conformité clé est le chemin de déploiement, pas le modèle : les poids MIT auto-hébergés gardent les données dans votre périmètre, tandis que l\'API Z.ai officielle relève de sa juridiction d\'origine. Choisissez le chemin qui correspond à vos exigences de résidence des données.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes lors de l\'évaluation de GLM-5.2',
        items: [
          '**Croire qu\'« open-weights » signifie « tourne chez soi ».** La taille de ~744B exige du multi-GPU ou une infrastructure louée ; seules les versions GGUF 1-bit tiennent sur du matériel grand public.',
          '**Considérer les benchmarks officiels de Z.ai comme vérifiés.** Privilégiez l\'Artificial Analysis Index indépendant ; traitez les chiffres de code mesurés par l\'éditeur comme des affirmations.',
          '**Confondre les poids MIT et l\'API hébergée pour la gouvernance des données.** L\'auto-hébergement garde les données en local ; l\'API relève de sa juridiction d\'origine.',
          '**Lire « n°1 open-weights » comme « dépasse la frontière ».** GLM-5.2 est 4e au général et reste derrière Claude Opus 4.8 dans la plupart des comparaisons directes.',
          '**Ignorer la sortie de ~43 000 tokens par tâche** lors de l\'estimation du temps et du coût d\'inférence.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Exécuter des modèles 70B sur du matériel grand public](/fr/local-llms/70b-models-consumer-hardware) — ce que les grands modèles locaux exigent réellement de votre matériel.',
          '[GPU d\'occasion pour LLM locaux](/fr/local-llms/used-gpus-for-local-llms) — des solutions GPU économiques quand il faut une vraie capacité d\'inférence.',
          '[Guide du matériel pour LLM locaux 2026](/fr/local-llms/local-llm-hardware-guide-2026) — adaptez votre matériel à la classe de modèle visée.',
          '[Apple Silicon M5 pour LLM locaux](/fr/local-llms/apple-silicon-m5-local-llm) — les options à mémoire unifiée pour exécuter de plus grands modèles en local.',
          '[Mises à jour des modèles LLM locaux 2026](/fr/local-llms/local-llm-model-updates-2026) — chaque grande sortie open-weights suivie cette année.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'GLM-5.2 est-il le meilleur modèle open-weights actuel ?',
            a: 'Selon l\'Artificial Analysis Intelligence Index v4.1 indépendant (juin 2026), oui — GLM-5.2 obtient 51, le meilleur résultat open-weights et 4e au général. Il devance d\'environ 7 points les modèles ouverts suivants, MiniMax-M3 et DeepSeek V4 Pro (44 chacun). Il ne dépasse toutefois pas la frontière fermée au général.',
          },
          {
            q: 'Puis-je exécuter GLM-5.2 sur un PC ou un Mac classique ?',
            a: 'Pas le modèle complet. À ~744B de paramètres, il exige des serveurs multi-GPU ou un GPU cloud loué. Sur du matériel grand public, vous êtes limité aux versions GGUF 1-bit fortement quantifiées, au détriment de la qualité et de la vitesse. Consultez nos guides matériels pour ce que les grands modèles locaux exigent réellement.',
          },
          {
            q: 'GLM-5.2 dépasse-t-il GPT-5.5 et Claude Opus 4.8 ?',
            a: 'Sur le code, les résultats indépendants placent GLM-5.2 devant GPT-5.5 (par exemple les ordres SWE-bench Pro et FrontierSWE). Face à Claude Opus 4.8, il reste derrière dans la plupart des comparaisons directes — par exemple Terminal-Bench 2.1 (81.0 contre 85.0) et FrontierSWE (environ un point de retard). Le résumé exact est « domine l\'open-weights, réduit l\'écart avec la frontière », pas « dépasse la frontière ».',
          },
          {
            q: 'GLM-5.2 est-il vraiment gratuit ? Quelle est la licence ?',
            a: 'GLM-5.2 est publié sous licence MIT sans limite d\'usage régionale : vous pouvez le télécharger, l\'auto-héberger et le modifier gratuitement. Exécuter le modèle complet coûte tout de même une vraie infrastructure (multi-GPU ou GPU loué), et l\'API Z.ai hébergée est un service payant.',
          },
          {
            q: 'Mes données sont-elles en sécurité avec GLM-5.2 ?',
            a: 'Cela dépend du chemin de déploiement. Les poids MIT auto-hébergés gardent toutes les données dans votre propre périmètre. L\'API Z.ai officielle soulève des considérations de résidence des données en Chine, signalées par la couverture indépendante ; traitez-la donc comme tout point de terminaison cloud tiers soumis à sa juridiction.',
          },
          {
            q: 'Les chiffres de benchmark de GLM-5.2 sont-ils fiables ?',
            a: 'L\'Artificial Analysis Index indépendant confirme le classement n°1 open-weights. Les chiffres de code de Z.ai sont déclarés par l\'éditeur et la reproductibilité est contestée — le compte-rendu d\'Artificial Analysis note que les évaluations internes étaient rapportées plus faibles que les benchmarks publiés. Privilégiez les chiffres indépendants et traitez les chiffres officiels comme des affirmations.',
          },
          {
            q: 'Combien coûte l\'exécution de GLM-5.2 via l\'API ?',
            a: 'Environ un sixième du coût des modèles de frontière fermée. Le tarif annoncé est d\'environ $1.4 par 1M de tokens d\'entrée et $4.4 par 1M de tokens de sortie (juin 2026). Comme GLM-5.2 produit en moyenne ~43 000 tokens de sortie par tâche, estimez le coût réel sur votre propre charge de travail plutôt que sur les seuls tarifs au token.',
          },
          {
            q: 'Quel matériel faut-il pour auto-héberger correctement GLM-5.2 ?',
            a: 'Pour le modèle complet, des serveurs multi-GPU ou un GPU cloud loué. Le matériel grand public ne peut exécuter que des versions GGUF 1-bit fortement quantifiées. Consultez le Guide du matériel pour LLM locaux 2026, GPU d\'occasion pour LLM locaux et Exécuter des modèles 70B sur du matériel grand public pour dimensionner votre configuration.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          'Artificial Analysis. (2026). « GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index. » https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — Classement indépendant Intelligence Index v4.1 (51, n°1 ouvert / 4e au général).',
          'TechTimes. (2026, 17 juin). « GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk. » https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Considérations de résidence des données sur le chemin de l\'API Z.ai.',
          'VentureBeat. (2026). « Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost. » https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — Comparaison de code indépendante et cadrage des coûts.',
          'LetsDataScience. (2026). « GLM-5.2 open weights beats GPT-5.5 coding. » https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — Couverture indépendante des résultats de code.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2 : le modèle open-weights n°1 de 2026 (et pourquoi il ne tournera pas chez vous)',
      'description': 'GLM-5.2 est le LLM open-weights n°1 de l\'Artificial Analysis Intelligence Index (juin 2026), 4e au général. Il bat GPT-5.5 sur le code mais reste derrière Opus 4.8, et ses ~744B ne tournent pas chez vous.',
      'url': 'https://www.promptquorum.com/fr/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'fr',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — Meilleurs modèles (juin 2026)',
      'inLanguage': 'fr',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'Frontière fermée. Score Artificial Analysis Intelligence Index v4.1 ~56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': 'N°1 open-weights, 4e au général. Score Artificial Analysis Intelligence Index v4.1 de 51. Publié le 13 juin 2026 par Z.ai sous licence MIT.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'Open-weights. Score Artificial Analysis Intelligence Index v4.1 de 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'Open-weights. Score Artificial Analysis Intelligence Index v4.1 de 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Précédente sortie Z.ai. Score Artificial Analysis Intelligence Index v4.1 de 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'fr',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'GLM-5.2 est-il le meilleur modèle open-weights actuel ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Selon l\'Artificial Analysis Intelligence Index v4.1 indépendant (juin 2026), oui — GLM-5.2 obtient 51, le meilleur résultat open-weights et 4e au général, devançant MiniMax-M3 et DeepSeek V4 Pro (44 chacun) d\'environ 7 points. Il ne dépasse pas la frontière fermée au général.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Puis-je exécuter GLM-5.2 sur un PC ou un Mac classique ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pas le modèle complet. À ~744B de paramètres, il exige des serveurs multi-GPU ou un GPU cloud loué. Sur du matériel grand public, vous êtes limité aux versions GGUF 1-bit fortement quantifiées, au détriment de la qualité et de la vitesse.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2 dépasse-t-il GPT-5.5 et Claude Opus 4.8 ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sur le code, les résultats indépendants placent GLM-5.2 devant GPT-5.5. Face à Claude Opus 4.8, il reste derrière dans la plupart des comparaisons directes — par exemple Terminal-Bench 2.1 (81.0 contre 85.0) et FrontierSWE (environ un point de retard). Il domine l\'open-weights et réduit l\'écart, mais ne dépasse pas la frontière.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2 est-il vraiment gratuit ? Quelle est la licence ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2 est publié sous licence MIT sans limite d\'usage régionale : vous pouvez le télécharger, l\'auto-héberger et le modifier gratuitement. Exécuter le modèle complet coûte tout de même une vraie infrastructure, et l\'API Z.ai hébergée est un service payant.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Mes données sont-elles en sécurité avec GLM-5.2 ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cela dépend du chemin de déploiement. Les poids MIT auto-hébergés gardent toutes les données dans votre propre périmètre. L\'API Z.ai officielle soulève des considérations de résidence des données en Chine, signalées par la couverture indépendante ; traitez-la donc comme tout point de terminaison cloud tiers soumis à sa juridiction.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Les chiffres de benchmark de GLM-5.2 sont-ils fiables ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'L\'Artificial Analysis Index indépendant confirme le classement n°1 open-weights. Les chiffres de code de Z.ai sont déclarés par l\'éditeur et la reproductibilité est contestée ; privilégiez donc les chiffres indépendants et traitez les chiffres officiels comme des affirmations.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Combien coûte l\'exécution de GLM-5.2 via l\'API ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Environ un sixième du coût des modèles de frontière fermée. Le tarif annoncé est d\'environ $1.4 par 1M de tokens d\'entrée et $4.4 par 1M de tokens de sortie (juin 2026). Comme GLM-5.2 produit en moyenne ~43 000 tokens de sortie par tâche, estimez le coût sur votre propre charge de travail.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quel matériel faut-il pour auto-héberger correctement GLM-5.2 ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pour le modèle complet, des serveurs multi-GPU ou un GPU cloud loué. Le matériel grand public ne peut exécuter que des versions GGUF 1-bit fortement quantifiées. Consultez le Guide du matériel pour LLM locaux 2026 et les guides matériels associés pour dimensionner votre configuration.',
          },
        },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-ja.webp',
    title: 'GLM-5.2：2026年No.1のオープンウェイトモデル（それでも自宅では動かせない理由）',
    seoTitle: 'GLM-5.2：2026年トップのオープンウェイトLLM — 率直な評価',
    intro: 'GLM-5.2は、2026年6月13日にZ.ai（旧Zhipu AI）がリリースしたモデルで、独立系のArtificial Analysis Intelligence Index v4.1で最高スコアのオープンウェイト大規模言語モデルです。スコアは51ポイントで、オープンモデル中1位、全体では4位にランクされています。コーディングベンチマークではGPT-5.5を上回りますが、ほとんどの直接対決ではClaude Opus 4.8に及びません。本記事では、独立した検証結果とZ.ai自身の主張を切り分け、約744Bパラメータのオープンモデルがなぜ自宅で動かせないのかを説明します。',
    metaDescription: 'GLM-5.2はArtificial Analysis Index（2026年6月）でNo.1のオープンウェイトLLMで、全体4位です。コーディングではGPT-5.5を上回りますがOpus 4.8には及ばず、約744Bのサイズは自宅では動きません。',
    twitterDescription: 'GLM-5.2は2026年6月時点でトップのオープンウェイトLLM（Artificial Analysis Indexで全体4位）。コーディングではGPT-5.5を上回りOpus 4.8には届かず、約744Bパラメータのため自宅では動きません。',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2は、2026年6月13日にZ.ai（旧Zhipu AI）がリリースしたモデルで、Artificial Analysis Intelligence Index v4.1で最高スコアのオープンウェイトLLMです。スコアは51ポイント、オープンモデル中1位、全体4位。オープンウェイト勢ではトップですが、クローズドなフロンティアモデルを超えてはいません。そして約744Bパラメータという規模のため、「オープンで自己ホスト可能」は「ノートPCで動く」という意味ではありません。**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2は独立系ベンチマークで2026年半ば時点トップのオープンウェイトLLMですが、約744Bパラメータという規模のため、コンシューマー向けハードウェアではなく、マルチGPUまたはレンタルしたインフラが必要です。' },
      { type: 'plain-terms', text: 'GLM-5.2は無料でダウンロードできるAIモデルで、現時点で他のどのオープンモデルよりも高いスコアを出します。非常に大規模なため、ほとんどの人はフルバージョンを自宅で動かせません。強力なGPUをレンタルするか、大幅に縮小したバージョンを使うことになります。' },
    ],
    quickAnswerTop: {
      question: 'GLM-5.2は現時点で最良のオープンウェイトモデルですか。自己ホストできますか。',
      answer: '2026年6月時点で、GLM-5.2はArtificial Analysis Intelligence Indexでトップにランクされたオープンウェイトモデルです（51ポイント、オープン1位・全体4位）。MITライセンスにより地域制限なく自己ホストできますが、フルの約744Bモデルには本格的なハードウェアが必要です。個人の多くは大幅に量子化されたビルドを動かすか、GPUをレンタルしています。',
      bullets: [
        'オープンウェイト1位／全体4位（Artificial Analysis Intelligence Index v4.1）',
        'MITライセンス、地域制限なし、無料で自己ホスト可能',
        '総パラメータ約744B／アクティブ約40B（Mixture-of-Experts）',
        '1Mトークンのコンテキストウィンドウ',
        'コーディングではGPT-5.5を上回り、ほとんどの直接対決ではClaude Opus 4.8に及ばない',
        'ホスト型API経由で、クローズドフロンティアモデルの約1/6のコスト',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'GLM-5.2とは？', anchor: '#what-is-glm-5-2' },
      { label: '独立系ベンチマーク', anchor: '#independent-benchmarks' },
      { label: 'Z.ai自身の数値', anchor: '#claimed-numbers' },
      { label: '自宅で動かせるか？', anchor: '#run-at-home' },
      { label: '自己ホスト vs Z.ai API', anchor: '#data-path' },
      { label: '価格とコスト', anchor: '#pricing' },
      { label: 'GLM-5.2を使うべきか？', anchor: '#decision' },
      { label: '地域別の文脈', anchor: '#regional-context' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '関連記事', anchor: '#related-reading' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '出典', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**オープンウェイト1位、全体4位。** GLM-5.2はArtificial Analysis Intelligence Index v4.1で**51**ポイントを獲得し、トップのオープンウェイトモデルで全体4位です。**GLM-5.1（40）から+11**、次点のオープンモデルMiniMax-M3（44）とDeepSeek V4 Pro（44）を約7ポイント引き離しています。',
          '**オープンウェイトでは首位だが、全体での首位ではない。** Claude Fable 5より約5ポイント下で、全体ではクローズドフロンティアの後塵を拝します。「差を縮める」のであって「フロンティアを超える」のではありません。',
          '**コーディングは強力だが、Opus 4.8に次ぐ2番手。** 独立系のコーディング結果では、GLM-5.2はGPT-5.5を上回るものの、ほとんどの直接対決ではClaude Opus 4.8に及びません。',
          '**約744Bパラメータは自宅では動かせない。** Mixture-of-Experts（トークンあたりアクティブ約40B）ですが、フルモデルにはマルチGPUまたはレンタルGPUが必要です。コンシューマー向けハードウェアに収まるのは大幅に量子化された1-bit GGUFビルドのみです。',
          '**自己ホストのウェイトはデータを保持するが、Z.ai APIは必ずしもそうではない。** MITライセンスのウェイトは自社の境界内で動作しますが、ファーストパーティのZ.ai APIには中国のデータ所在に関する考慮事項が伴います。',
          '**Z.ai自身のベンチマークは企業申告値として扱う。** 再現性には議論があり、独立系のArtificial Analysisの数値を優先してください。',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'GLM-5.2とは？',
        content: [
          '**GLM-5.2は、2026年6月13日にZ.ai（旧Zhipu AI）がMITライセンスで地域別の利用制限なしにリリースした、オープンウェイトの大規模言語モデルです。** 2026年6月16日から公開ベンチマークが行われました。',
        ],
        items: [
          '**総パラメータ約744B**（出典により743B〜753Bと記載）。**Mixture-of-Experts**アーキテクチャを採用し、**トークンあたりアクティブパラメータは約40B**です。',
          '**1Mトークンのコンテキストウィンドウ**、**最大出力は131,072トークン**。',
          '**タスクあたり平均約43,000の出力トークン**（GLM-5.1の約26,000から増加）。これによりローカル推論の時間とコストが上昇します。',
          '**MITライセンス：** 地域制限なしで無料ダウンロード、自己ホスト、改変が可能です。',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'GLM-5.2はどれほど優秀か？まずは独立系ベンチマークから',
        content: [
          '**唯一の独立した複数ベンダー横断ランキングであるArtificial Analysis Intelligence Index v4.1では、GLM-5.2は51ポイントで最上位のオープンウェイトモデルであり、全体4位です（Artificial Analysis、2026年6月）。**',
        ],
        rows: [
          { 'モデル': 'Claude Fable 5', 'Index v4.1': '~56', 'ティア': 'クローズドフロンティア' },
          { 'モデル': 'GLM-5.2', 'Index v4.1': '51', 'ティア': 'オープンウェイト1位／全体4位' },
          { 'モデル': 'MiniMax-M3', 'Index v4.1': '44', 'ティア': 'オープンウェイト' },
          { 'モデル': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'ティア': 'オープンウェイト' },
          { 'モデル': 'GLM-5.1（旧バージョン）', 'Index v4.1': '40', 'ティア': 'オープンウェイト' },
        ],
        columns: ['モデル', 'Index v4.1', 'ティア'],
        note: '独立系のコーディング結果：Terminal-Bench 2.1ではGLM-5.2が81.0、Claude Opus 4.8が85.0。SWE-bench ProではGLM-5.2が62.1（Z.ai申告値）でGPT-5.5の58.6を上回り、独立系の報道もその順序を裏付けています。FrontierSWEではGLM-5.2が74.4（Z.ai申告値）でGPT-5.5（72.6）を上回り、Opus 4.8（75.1）に約1ポイント及びません。この順序も独立系の報道で確認されています。独立系の総合的な評価：GLM-5.2は2026年6月時点で利用可能な最も強力なオープンソースのコーディングモデルですが、ほとんどの直接対決ではなおClaude Opus 4.8に及びません（VentureBeat、letsdatascience、2026年6月）。',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1（2026年6月）：Claude Fable 5は56点、GLM-5.2は51点（オープンウェイト1位、総合4位）、MiniMax-M3とDeepSeek V4 Proはともに44点、GLM-5.1は40点。',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Z.ai自身の数値 vs 独立系の結果：慎重に読むこと',
        content: [
          '**いくつかの目玉となる数値はZ.ai自身の評価によるもので、独立検証されたものではなく企業申告値として読むべきです。**',
        ],
        items: [
          '**企業申告のコーディング数値** — 例えばMCP-Atlas 77.0（Z.ai申告値）はGPT-5.5の75.3、Opus 4.8の77.8と対比されますが、これらはZ.ai自身が実行したものであり、独立した再現が行われるまでは主張として扱うべきです。',
          '**Artificial Analysisの解説では、Z.aiの内部評価が公表ベンチマークより弱く報告されたと指摘されており**、再現性には議論があります。',
          '**再現性は未解決の問題です。** 少なくとも一人の著名な論者はこのモデルを「ベンチマーク最適化（bench-maxxed）」と評しており、GLM-5.1はGLM-5.2が今では好成績を出す少なくとも1つのベンチマークで0%だったと報じられています。現時点で「オープンウェイト1位」の主張を裏付けているのは、Z.ai自身のスイートではなく、独立系のArtificial Analysis Indexです。',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'GLM-5.2を自宅で動かせるか？約744Bという現実',
        content: [
          '**いいえ — フルモデルは動きません。「オープンウェイト」や「自己ホスト可能」は「一般的な家庭用PCで動く」という意味ではありません。**',
        ],
        items: [
          '**フルのGLM-5.2には本格的なインフラが必要です：** マルチGPUサーバー、またはレンタルしたクラウドGPU。',
          '**コンシューマー向けハードウェアでは、大幅に量子化された1-bit GGUFビルドのみが現実的**で、品質と速度のトレードオフを伴います。',
          '**タスクあたり約43,000トークンという高い出力**が、ローカルでの時間とコストをさらに押し上げます。',
          '大規模ローカルモデルのハードウェアの現実については、[コンシューマー向けハードウェアで70Bモデルを動かす](/ja/local-llms/70b-models-consumer-hardware)、[ローカルLLM向け中古GPU](/ja/local-llms/used-gpus-for-local-llms)、[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026)、[ローカルLLM向けApple Silicon M5](/ja/local-llms/apple-silicon-m5-local-llm)を参照してください。',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'GLM-5.2のフル版（総パラメータ約744B、アクティブ約40B）はマルチGPUサーバーかレンタルクラウドGPUが必要。1ビット量子化GGUFビルドのみが家庭用の単一コンシューマーGPUまたはCPUで動作するが、品質は低下する。',
      },
      dataPath: {
        id: 'data-path',
        title: '自己ホストのウェイト vs Z.ai API：データの行き先',
        content: [
          '**ライセンスとAPIはデータガバナンス上、別々の話です。自己ホストのMITウェイトはデータを自社の境界内に保持しますが、ファーストパーティのZ.ai APIはそうではありません。**',
        ],
        items: [
          '**自己ホスト（MITウェイト）：** データはローカルかつ自社のもので、第三者への送信はありません。',
          '**Z.aiファーストパーティAPI：** 独立系の報道は、APIの経路において中国のデータ所在に関する考慮事項（「中国のデータリスク」）を明示的に指摘しています（TechTimes、2026年6月17日）。',
          '**判断の枠組み：** データの機密性が重要なら、ウェイトを自己ホストしてください。ホスト型APIを使う場合は、その管轄に従う他の第三者クラウドエンドポイントと同様に扱ってください。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'GLM-5.2の価格とコスト',
        content: [
          '**ホスト型API経由では、GLM-5.2はクローズドフロンティアモデルの約1/6のコストで動作します（VentureBeat、2026年6月）。** 報告されている価格は、入力100万トークンあたり約$1.4、出力100万トークンあたり約$4.4です（2026年6月時点）。実際のワークロードのコストを見積もる際は、タスクあたりの高い出力（約43,000トークン）を考慮してください。',
        ],
      },
      decision: {
        id: 'decision',
        title: 'GLM-5.2を使うべきか？',
        decisionBlock: {
          title: 'GLM-5.2 判断ガイド',
          localIf: [
            '現時点で利用可能な最も強力なオープンウェイトモデルが欲しい',
            '自社の境界内での自己ホストとデータ管理が必要',
            '長時間にわたるコーディングタスクを実行する',
            'フロンティアに近い品質を約1/6のコストで求める',
          ],
          cloudIf: [
            '直接対決のコーディングや推論で最高スコアが必要',
            'オープンウェイトを必須とせず、Claude Opus 4.8のようなクローズドフロンティアモデルを好む',
            'マルチGPUまたはレンタルGPUのインフラを用意できない',
          ],
          quick: [
            '現時点で最良のオープンウェイトの選択肢ですが、採用を決める前に、議論のあるベンチマークを自分のタスクで検証してください。',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2：地域別の文脈',
        content: [
          '**日本（METI）：** 本番デプロイでは、モデルのバージョン（GLM-5.2）、ライセンス（MIT）、そして推論を自己ホストのウェイトで実行するかZ.ai APIで実行するかを、経済産業省（METI）のAIガバナンス指針（AI事業者ガイドライン）に沿って文書化してください。MITライセンスでGLM-5.2を自己ホストすれば、すべての推論データが自社インフラ内に留まり、国内のデータ所在に関する期待に応えられます。',
          '**東アジア／アジア太平洋：** この地域全体で、重要な順守上のレバーはモデルそのものではなくデプロイ経路です。自己ホストのMITウェイトはデータを自社の境界内に保持し、各国のデータ所在要件に整合します。ファーストパーティAPIを利用する場合は、その提供元の管轄に従う他のクラウドエンドポイントと同様に扱ってください。',
          '**グローバル／データ経路：** GLM-5.2は中国のラボが開発したモデルです。重要な順守上のレバーはモデルではなくデプロイ経路です。自己ホストのMITウェイトはデータを自社の境界内に保持しますが、ファーストパーティのZ.ai APIはその本国の管轄に服します。自社のデータ所在要件に合致する経路を選んでください。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'GLM-5.2を評価する際のよくある間違い',
        items: [
          '**「オープンウェイト」を「自宅で動く」と思い込む。** 約744Bという規模にはマルチGPUまたはレンタルインフラが必要で、コンシューマー向けハードウェアに収まるのは1-bit GGUFビルドのみです。',
          '**Z.aiのファーストパーティのベンチマークを検証済みとして扱う。** 独立系のArtificial Analysis Indexを優先し、企業が実行したコーディング数値は主張として扱ってください。',
          '**データガバナンスにおいてMITウェイトとホスト型APIを混同する。** 自己ホストはデータをローカルに保持しますが、APIはその本国の管轄に服します。',
          '**「オープンウェイト1位」を「フロンティアを超える」と読む。** GLM-5.2は全体4位で、ほとんどの直接対決ではClaude Opus 4.8に及びません。',
          '**タスクあたり約43,000トークンの出力を無視する** — 推論の時間とコストを見積もる際に考慮してください。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[コンシューマー向けハードウェアで70Bモデルを動かす](/ja/local-llms/70b-models-consumer-hardware) — 大規模なローカルモデルが実際にハードウェアに要求するもの。',
          '[ローカルLLM向け中古GPU](/ja/local-llms/used-gpus-for-local-llms) — 本格的な推論能力が必要なときの費用対効果の高いGPUの選び方。',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — 動かしたいモデルクラスにハードウェアを合わせる。',
          '[ローカルLLM向けApple Silicon M5](/ja/local-llms/apple-silicon-m5-local-llm) — より大きなモデルをローカルで動かすためのユニファイドメモリの選択肢。',
          '[ローカルLLMモデルアップデート2026](/ja/local-llms/local-llm-model-updates-2026) — 今年追跡したすべての主要なオープンウェイトリリース。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'GLM-5.2は現時点で最良のオープンウェイトモデルですか？',
            a: '独立系のArtificial Analysis Intelligence Index v4.1（2026年6月）によれば、はい — GLM-5.2は51ポイントで、トップのオープンウェイト結果かつ全体4位です。次点のオープンモデルであるMiniMax-M3とDeepSeek V4 Pro（ともに44）を約7ポイント引き離しています。ただし、全体ではクローズドフロンティアを超えてはいません。',
          },
          {
            q: 'GLM-5.2を普通のPCやMacで動かせますか？',
            a: 'フルモデルは動きません。約744Bパラメータのため、マルチGPUサーバーまたはレンタルしたクラウドGPUが必要です。コンシューマー向けハードウェアでは、品質と速度を犠牲にする大幅に量子化された1-bit GGUFビルドに限られます。大規模なローカルモデルが実際に何を必要とするかは、当サイトのハードウェアガイドを参照してください。',
          },
          {
            q: 'GLM-5.2はGPT-5.5やClaude Opus 4.8を上回りますか？',
            a: 'コーディングでは、独立系の結果がGLM-5.2をGPT-5.5より上に位置づけています（例：SWE-bench ProやFrontierSWEの順序）。Claude Opus 4.8に対しては、ほとんどの直接対決で及びません — 例えばTerminal-Bench 2.1（81.0 対 85.0）やFrontierSWE（約1ポイント差）です。正確な要約は「フロンティアを超える」ではなく「オープンウェイトで首位、フロンティアとの差を縮める」です。',
          },
          {
            q: 'GLM-5.2は本当に無料ですか？ライセンスは何ですか？',
            a: 'GLM-5.2は地域別の利用制限なしのMITライセンスでリリースされているため、無料でダウンロード、自己ホスト、改変ができます。フルモデルの実行には依然として実際のインフラ（マルチGPUまたはレンタルGPU）のコストがかかり、ホスト型のZ.ai APIは有料サービスです。',
          },
          {
            q: 'GLM-5.2で私のデータは安全ですか？',
            a: 'デプロイ経路によります。自己ホストのMITウェイトは、すべてのデータを自社の境界内に保持します。ファーストパーティのZ.ai APIには、独立系の報道が指摘する中国のデータ所在に関する考慮事項が伴うため、その管轄に従う他の第三者クラウドエンドポイントと同様に扱ってください。',
          },
          {
            q: 'GLM-5.2のベンチマーク数値は信頼できますか？',
            a: '独立系のArtificial Analysis Indexは「オープンウェイト1位」のランキングを裏付けています。Z.ai自身のコーディング数値は企業申告値であり、再現性には議論があります — Artificial Analysisの解説は、内部評価が公表ベンチマークより弱く報告されたと指摘しています。独立系の数値を優先し、ファーストパーティの数値は主張として扱ってください。',
          },
          {
            q: 'GLM-5.2をAPI経由で動かすコストはどのくらいですか？',
            a: 'クローズドフロンティアモデルの約1/6のコストです。報告されている価格は、入力100万トークンあたり約$1.4、出力100万トークンあたり約$4.4です（2026年6月）。GLM-5.2はタスクあたり平均約43,000の出力トークンを使うため、トークン単価だけでなく、自分のワークロードで実際のコストを見積もってください。',
          },
          {
            q: 'GLM-5.2を適切に自己ホストするにはどんなハードウェアが必要ですか？',
            a: 'フルモデルには、マルチGPUサーバーまたはレンタルしたクラウドGPUが必要です。コンシューマー向けハードウェアでは、大幅に量子化された1-bit GGUFビルドしか動かせません。構成のサイジングには、ローカルLLMハードウェアガイド2026、ローカルLLM向け中古GPU、コンシューマー向けハードウェアで70Bモデルを動かす、を参照してください。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — 独立系Intelligence Index v4.1のランキング（51、オープン1位／全体4位）。',
          'TechTimes. (2026, June 17). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Z.ai APIの経路におけるデータ所在の考慮事項。',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — 独立系のコーディング比較とコストの枠組み。',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — コーディング結果に関する独立系の報道。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2：2026年No.1のオープンウェイトモデル（それでも自宅では動かせない理由）',
      'description': 'GLM-5.2はArtificial Analysis Intelligence Index（2026年6月）でNo.1のオープンウェイトLLMで、全体4位です。コーディングではGPT-5.5を上回りますがOpus 4.8には及ばず、約744Bのサイズは自宅では動きません。',
      'url': 'https://www.promptquorum.com/ja/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'ja',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'オープンウェイトLLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — トップモデル（2026年6月）',
      'inLanguage': 'ja',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'クローズドフロンティア。Artificial Analysis Intelligence Index v4.1スコア約56。' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': 'オープンウェイト1位、全体4位。Artificial Analysis Intelligence Index v4.1スコア51。2026年6月13日にZ.aiがMITライセンスでリリース。' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'オープンウェイト。Artificial Analysis Intelligence Index v4.1スコア44。' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'オープンウェイト。Artificial Analysis Intelligence Index v4.1スコア44。' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Z.aiの旧リリース。Artificial Analysis Intelligence Index v4.1スコア40。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ja',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'GLM-5.2は現時点で最良のオープンウェイトモデルですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '独立系のArtificial Analysis Intelligence Index v4.1（2026年6月）によれば、はい — GLM-5.2は51ポイントで、トップのオープンウェイト結果かつ全体4位です。次点のMiniMax-M3とDeepSeek V4 Pro（ともに44）を約7ポイント引き離しています。ただし、全体ではクローズドフロンティアを超えてはいません。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2を普通のPCやMacで動かせますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'フルモデルは動きません。約744Bパラメータのため、マルチGPUサーバーまたはレンタルしたクラウドGPUが必要です。コンシューマー向けハードウェアでは、品質と速度を犠牲にする大幅に量子化された1-bit GGUFビルドに限られます。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2はGPT-5.5やClaude Opus 4.8を上回りますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'コーディングでは、独立系の結果がGLM-5.2をGPT-5.5より上に位置づけています。Claude Opus 4.8に対しては、ほとんどの直接対決で及びません — 例えばTerminal-Bench 2.1（81.0 対 85.0）やFrontierSWE（約1ポイント差）です。オープンウェイトで首位であり差を縮めていますが、フロンティアを超えてはいません。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2は本当に無料ですか？ライセンスは何ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2は地域別の利用制限なしのMITライセンスでリリースされているため、無料でダウンロード、自己ホスト、改変ができます。フルモデルの実行には依然として実際のインフラのコストがかかり、ホスト型のZ.ai APIは有料サービスです。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2で私のデータは安全ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'デプロイ経路によります。自己ホストのMITウェイトは、すべてのデータを自社の境界内に保持します。ファーストパーティのZ.ai APIには、独立系の報道が指摘する中国のデータ所在に関する考慮事項が伴うため、その管轄に従う他の第三者クラウドエンドポイントと同様に扱ってください。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2のベンチマーク数値は信頼できますか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '独立系のArtificial Analysis Indexは「オープンウェイト1位」のランキングを裏付けています。Z.ai自身のコーディング数値は企業申告値で再現性には議論があるため、独立系の数値を優先し、ファーストパーティの数値は主張として扱ってください。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2をAPI経由で動かすコストはどのくらいですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'クローズドフロンティアモデルの約1/6のコストです。報告されている価格は、入力100万トークンあたり約$1.4、出力100万トークンあたり約$4.4です（2026年6月）。GLM-5.2はタスクあたり平均約43,000の出力トークンを使うため、自分のワークロードでコストを見積もってください。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2を適切に自己ホストするにはどんなハードウェアが必要ですか？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'フルモデルには、マルチGPUサーバーまたはレンタルしたクラウドGPUが必要です。コンシューマー向けハードウェアでは、大幅に量子化された1-bit GGUFビルドしか動かせません。構成のサイジングには、ローカルLLMハードウェアガイド2026と関連するハードウェアガイドを参照してください。',
          },
        },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-ko.webp',
    title: 'GLM-5.2: 2026년 1위 오픈 웨이트 모델 (그리고 여전히 집에서 돌릴 수 없는 이유)',
    seoTitle: 'GLM-5.2: 2026 최강 오픈 웨이트 LLM — 솔직한 평가',
    intro: 'GLM-5.2는 2026년 6월 13일 Z.ai(구 Zhipu AI)가 공개한 모델로, 독립 평가 기관인 Artificial Analysis Intelligence Index v4.1에서 가장 높은 점수를 받은 오픈 웨이트 대규모 언어 모델입니다. 51점을 기록해 오픈 모델 중 1위, 전체 4위에 올랐습니다. 코딩 벤치마크에서는 GPT-5.5를 앞서지만, 대부분의 1대1 비교에서는 여전히 Claude Opus 4.8에 미치지 못합니다. 이 글은 독립 평가 결과와 Z.ai 자체 주장을 구분하고, 약 744B 파라미터 규모의 오픈 모델을 집에서 돌릴 수 없는 이유를 설명합니다.',
    metaDescription: 'GLM-5.2는 Artificial Analysis Index(2026년 6월)에서 1위 오픈 웨이트 LLM(전체 4위)입니다. 코딩에서 GPT-5.5를 앞서지만 Opus 4.8에는 못 미치며, 약 744B 규모라 집에서 돌릴 수 없습니다.',
    twitterDescription: 'GLM-5.2는 2026년 6월 기준 최강 오픈 웨이트 LLM(Artificial Analysis Index 전체 4위)입니다. 코딩에서 GPT-5.5를 앞서고 Opus 4.8에는 못 미치며, 약 744B 파라미터라 집에서 돌릴 수 없습니다.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9분 읽기',
    educationalLevel: 'Intermediate',
    audience: '자체 호스팅용 오픈 웨이트 LLM을 검토하는 개발자 및 팀',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2는 2026년 6월 13일 Z.ai(구 Zhipu AI)가 공개한 모델로, Artificial Analysis Intelligence Index v4.1에서 가장 높은 점수를 받은 오픈 웨이트 LLM입니다. 51점으로 오픈 모델 중 1위, 전체 4위입니다. 오픈 웨이트 분야를 선도하지만, 폐쇄형 프런티어 모델을 이긴 것은 아닙니다. 그리고 약 744B 파라미터 규모이므로 "오픈이며 자체 호스팅 가능"이라는 말이 "노트북에서 돌아간다"는 뜻은 아닙니다.**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'GLM-5.2는 독립 벤치마크 기준 2026년 중반 최강의 오픈 웨이트 LLM이지만, 약 744B 파라미터 규모 때문에 소비자용 하드웨어가 아니라 멀티 GPU 또는 임대 인프라가 필요합니다.' },
      { type: 'plain-terms', text: 'GLM-5.2는 무료로 다운로드할 수 있는 AI 모델로, 현재 다른 어떤 오픈 모델보다 높은 점수를 받습니다. 모델 크기가 매우 커서 대부분의 사람은 전체 버전을 집에서 돌릴 수 없습니다. 강력한 GPU를 임대하거나 대폭 축소한 버전을 사용해야 합니다.' },
    ],
    quickAnswerTop: {
      question: 'GLM-5.2가 현재 최고의 오픈 웨이트 모델인가요? 자체 호스팅할 수 있나요?',
      answer: '2026년 6월 기준 GLM-5.2는 Artificial Analysis Intelligence Index에서 가장 높은 순위의 오픈 웨이트 모델입니다(51점, 오픈 1위, 전체 4위). MIT 라이선스 덕분에 지역 제한 없이 자체 호스팅할 수 있지만, 전체 약 744B 모델은 상당한 하드웨어가 필요합니다. 대부분의 개인은 대폭 양자화된 빌드를 돌리거나 GPU를 임대합니다.',
      bullets: [
        '오픈 웨이트 1위 / 전체 4위 (Artificial Analysis Intelligence Index v4.1)',
        'MIT 라이선스, 지역 제한 없음, 무료 자체 호스팅 가능',
        '총 약 744B 파라미터 / 활성 약 40B (Mixture-of-Experts)',
        '1M 토큰 컨텍스트 윈도우',
        '코딩에서 GPT-5.5를 앞서고, 대부분의 1대1 비교에서 Claude Opus 4.8에는 못 미침',
        '호스티드 API를 통하면 폐쇄형 프런티어 모델의 약 1/6 비용',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: 'GLM-5.2란?', anchor: '#what-is-glm-5-2' },
      { label: '독립 벤치마크', anchor: '#independent-benchmarks' },
      { label: 'Z.ai 자체 수치', anchor: '#claimed-numbers' },
      { label: '집에서 돌릴 수 있나요?', anchor: '#run-at-home' },
      { label: '자체 호스팅 vs Z.ai API', anchor: '#data-path' },
      { label: '가격과 비용', anchor: '#pricing' },
      { label: 'GLM-5.2를 써야 할까요?', anchor: '#decision' },
      { label: '지역별 고려사항', anchor: '#regional-context' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**오픈 웨이트 1위, 전체 4위.** GLM-5.2는 Artificial Analysis Intelligence Index v4.1에서 **51점**을 기록했습니다. 오픈 웨이트 모델 중 1위, 전체 4위이며, **GLM-5.1(40점)보다 +11점**, 다음 오픈 모델인 MiniMax-M3(44점)와 DeepSeek V4 Pro(44점)보다 약 7점 앞섭니다.',
          '**오픈 웨이트를 선도하지만, 전체 분야를 선도하는 것은 아닙니다.** Claude Fable 5보다 약 5점 낮으며 전체적으로는 폐쇄형 프런티어 모델에 뒤집니다. "격차를 좁혔다"이지 "프런티어를 이겼다"가 아닙니다.',
          '**코딩에 강하지만 Opus 4.8 다음입니다.** 독립 코딩 결과에서 GLM-5.2는 GPT-5.5를 앞서지만, 대부분의 1대1 비교에서는 Claude Opus 4.8에 뒤집니다.',
          '**약 744B 파라미터는 집에서 돌릴 수 없습니다.** Mixture-of-Experts(토큰당 활성 약 40B)이지만 전체 모델은 멀티 GPU 또는 임대 GPU가 필요하며, 대폭 양자화된 1비트 GGUF 빌드만 소비자용 하드웨어에 맞습니다.',
          '**자체 호스팅 웨이트는 데이터를 지키지만, Z.ai API는 반드시 그렇지 않습니다.** MIT 라이선스 웨이트는 사용자 경계 내에서 실행되지만, 퍼스트파티 Z.ai API는 중국 데이터 거주성 고려사항이 따릅니다.',
          '**Z.ai 자체 벤치마크는 회사 보고치로 다루세요.** 재현성에 이견이 있으므로 독립 평가인 Artificial Analysis 수치를 우선하세요.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'GLM-5.2란?',
        content: [
          '**GLM-5.2는 2026년 6월 13일 Z.ai(구 Zhipu AI)가 MIT 라이선스로 지역 사용 제한 없이 공개한 오픈 웨이트 대규모 언어 모델입니다.** 2026년 6월 16일부터 공개적으로 벤치마크되었습니다.',
        ],
        items: [
          '**총 약 744B 파라미터**(출처에 따라 743B~753B)로, 토큰당 **활성 파라미터 약 40B**의 **Mixture-of-Experts** 아키텍처를 사용합니다.',
          '**1M 토큰 컨텍스트 윈도우**와 **최대 131,072 토큰 출력**.',
          '작업당 평균 **약 43,000 출력 토큰** — GLM-5.1의 약 26,000보다 늘어났으며, 이는 로컬 추론 시간과 비용을 높입니다.',
          '**MIT 라이선스:** 지역 제한 없이 무료로 다운로드, 자체 호스팅, 수정이 가능합니다.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'GLM-5.2는 얼마나 좋은가? 독립 벤치마크부터',
        content: [
          '**유일한 독립적·교차 벤더 순위인 Artificial Analysis Intelligence Index v4.1에서 GLM-5.2는 51점으로 가장 높은 오픈 웨이트 모델이자 전체 4위입니다(Artificial Analysis, 2026년 6월).**',
        ],
        rows: [
          { '모델': 'Claude Fable 5', 'Index v4.1': '~56', '등급': '폐쇄형 프런티어' },
          { '모델': 'GLM-5.2', 'Index v4.1': '51', '등급': '오픈 웨이트 1위 / 전체 4위' },
          { '모델': 'MiniMax-M3', 'Index v4.1': '44', '등급': '오픈 웨이트' },
          { '모델': 'DeepSeek V4 Pro', 'Index v4.1': '44', '등급': '오픈 웨이트' },
          { '모델': 'GLM-5.1 (이전)', 'Index v4.1': '40', '등급': '오픈 웨이트' },
        ],
        columns: ['모델', 'Index v4.1', '등급'],
        note: '독립 코딩 결과: Terminal-Bench 2.1 — GLM-5.2는 81.0점, Claude Opus 4.8은 85.0점입니다. SWE-bench Pro — GLM-5.2는 62.1점(Z.ai 보고치)으로 GPT-5.5의 58.6점을 앞서며, 독립 보도도 그 순서를 뒷받침합니다. FrontierSWE — GLM-5.2는 74.4점(Z.ai 보고치)으로 GPT-5.5(72.6점)를 이기고 Opus 4.8(75.1점)에 약 1점 차로 뒤지며, 이 순서는 독립 보도가 확인합니다. 종합 독립 평가: GLM-5.2는 2026년 6월 기준 가장 강력한 오픈 소스 코딩 모델이지만, 대부분의 1대1 비교에서 여전히 Claude Opus 4.8에 뒤집니다(VentureBeat; letsdatascience, 2026년 6월).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1(2026년 6월): Claude Fable 5는 56점, GLM-5.2는 51점(오픈 웨이트 1위, 종합 4위), MiniMax-M3와 DeepSeek V4 Pro는 각각 44점, GLM-5.1은 40점을 기록했다.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Z.ai 자체 수치 vs 독립 결과: 신중하게 읽기',
        content: [
          '**여러 대표 수치는 Z.ai 자체 평가에서 나온 것이므로 독립 검증된 값이 아닌 회사 보고치로 읽어야 합니다.**',
        ],
        items: [
          '**회사 보고 코딩 수치** — 예를 들어 MCP-Atlas 77.0(Z.ai 보고치), GPT-5.5 75.3, Opus 4.8 77.8 — 는 Z.ai 자체가 측정한 것이므로 독립 재현 전까지 주장으로 다루어야 합니다.',
          '**Artificial Analysis 분석은 Z.ai의 내부 평가가 공개 벤치마크보다 낮게 보고되었다고 지적하며**, 재현성에 이견이 있습니다.',
          '**재현성은 미해결 문제입니다.** 적어도 한 저명한 논평가는 이 모델을 "bench-maxxed"라고 평했으며, GLM-5.1은 GLM-5.2가 지금 잘 해내는 어떤 벤치마크에서 0%를 기록했다고 보고됩니다. 현재 "오픈 웨이트 1위" 주장을 뒷받침하는 것은 Z.ai 자체 평가가 아니라 독립 평가인 Artificial Analysis Index입니다.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'GLM-5.2를 집에서 돌릴 수 있나요? 약 744B 현실 점검',
        content: [
          '**아니요 — 전체 모델은 안 됩니다. "오픈 웨이트"와 "자체 호스팅 가능"이 "일반 가정용 PC에서 돌아간다"는 뜻은 아닙니다.**',
        ],
        items: [
          '**전체 GLM-5.2는 상당한 인프라가 필요합니다.** 멀티 GPU 서버 또는 임대 클라우드 GPU.',
          '**소비자용 하드웨어에서는 대폭 양자화된 1비트 GGUF 빌드만 실행 가능하며**, 품질과 속도의 트레이드오프가 따릅니다.',
          '**작업당 약 43,000 토큰의 높은 출력량은 로컬 시간과 비용을 더욱 높입니다.**',
          '대형 로컬 모델의 하드웨어 현실은 [소비자용 하드웨어에서 70B 모델 돌리기](/ko/local-llms/70b-models-consumer-hardware), [로컬 LLM용 중고 GPU](/ko/local-llms/used-gpus-for-local-llms), [로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026), [로컬 LLM용 Apple Silicon M5](/ko/local-llms/apple-silicon-m5-local-llm)를 참고하세요.',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'GLM-5.2 전체 모델(~744B 파라미터, ~40B 활성)은 멀티 GPU 서버 또는 임대 클라우드 GPU가 필요하다. 1비트 GGUF 양자화 빌드만 가정용 단일 소비자 GPU 또는 CPU에서 실행되며, 품질은 낮아진다.',
      },
      dataPath: {
        id: 'data-path',
        title: '자체 호스팅 웨이트 vs Z.ai API: 데이터는 어디로 가는가',
        content: [
          '**라이선스와 API는 서로 다른 데이터 거버넌스 이야기입니다. 자체 호스팅 MIT 웨이트는 데이터를 사용자 경계 안에 두지만, 퍼스트파티 Z.ai API는 그렇지 않습니다.**',
        ],
        items: [
          '**자체 호스팅(MIT 웨이트):** 데이터가 로컬에 남고 사용자 소유입니다 — 제3자 전송 없음.',
          '**Z.ai 퍼스트파티 API:** 독립 보도는 API 경로에 대해 중국 데이터 거주성 고려사항("중국 데이터 리스크")을 명시적으로 지적합니다(TechTimes, 2026년 6월 17일).',
          '**의사결정 기준:** 데이터 민감도가 중요하다면 웨이트를 자체 호스팅하세요. 호스티드 API를 사용한다면 해당 관할권의 적용을 받는 제3자 클라우드 엔드포인트처럼 다루세요.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'GLM-5.2 가격과 비용',
        content: [
          '**호스티드 API를 통하면 GLM-5.2는 폐쇄형 프런티어 모델의 약 1/6 비용으로 실행됩니다(VentureBeat, 2026년 6월).** 보고된 가격은 입력 100만 토큰당 약 $1.4, 출력 100만 토큰당 약 $4.4입니다(2026년 6월 기준). 실제 워크로드 비용을 추산할 때는 작업당 높은 출력량(약 43,000 토큰)을 고려하세요.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'GLM-5.2를 써야 할까요?',
        decisionBlock: {
          title: 'GLM-5.2 의사결정 가이드',
          localIf: [
            '현재 사용 가능한 가장 강력한 오픈 웨이트 모델을 원함',
            '자체 경계 안에서 자체 호스팅과 데이터 통제가 필요함',
            '장기 호흡의 코딩 작업을 수행함',
            '약 1/6 비용으로 프런티어에 근접한 품질을 원함',
          ],
          cloudIf: [
            '1대1 코딩이나 추론에서 최고 점수가 필요함',
            '오픈 웨이트가 필요하지 않고 Claude Opus 4.8 같은 폐쇄형 프런티어 모델을 선호함',
            '멀티 GPU 또는 임대 GPU 인프라를 마련할 수 없음',
          ],
          quick: [
            '오늘날 최고의 오픈 웨이트 선택지입니다 — 다만 도입을 확정하기 전에 이견이 있는 벤치마크를 자신의 작업으로 검증하세요.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: 지역별 고려사항',
        content: [
          '**한국 / PIPA:** MIT 라이선스로 GLM-5.2를 자체 호스팅하면 모든 추론 데이터가 자체 인프라 안에 남아, 개인정보 보호법(PIPA)에서 기대하는 데이터 거주성을 충족하는 데 도움이 됩니다. 추론이 로컬에서 실행될 때 모델 간 컴플라이언스 차이는 데이터 처리 방식이 아니라 공급업체 문서에 있습니다. 운영 배포 시에는 모델 버전(GLM-5.2), 라이선스(MIT), 자체 호스팅 웨이트인지 Z.ai API인지를 문서화하고, 필요 시 개인정보보호위원회(PIPC) 지침을 참고하세요.',
          '**EU / GDPR:** MIT 라이선스로 GLM-5.2를 자체 호스팅하면 모든 추론 데이터가 자체 인프라 안에 남아 GDPR의 데이터 거주성 기대를 충족합니다. 추론이 로컬에서 실행될 때 모델 간 컴플라이언스 차이는 데이터 처리 방식이 아니라 공급업체 문서에 있습니다.',
          '**중국 / 데이터 경로:** GLM-5.2는 중국 연구소가 만든 모델입니다. 핵심 컴플라이언스 지렛대는 모델이 아니라 배포 경로입니다. 자체 호스팅 MIT 웨이트는 데이터를 사용자 경계 안에 두지만, 퍼스트파티 Z.ai API는 본국 관할권의 적용을 받습니다. 데이터 거주성 요건에 맞는 경로를 선택하세요.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'GLM-5.2 평가 시 흔한 실수',
        items: [
          '**"오픈 웨이트"가 "집에서 돌아간다"는 뜻이라고 가정하기.** 약 744B 규모는 멀티 GPU 또는 임대 인프라가 필요하며, 1비트 GGUF 빌드만 소비자용 하드웨어에 맞습니다.',
          '**Z.ai 퍼스트파티 벤치마크를 검증된 것으로 취급하기.** 독립 평가인 Artificial Analysis Index를 우선하고, 회사가 측정한 코딩 수치는 주장으로 다루세요.',
          '**데이터 거버넌스에서 MIT 웨이트와 호스티드 API를 혼동하기.** 자체 호스팅은 데이터를 로컬에 두지만, API는 본국 관할권의 적용을 받습니다.',
          '**"오픈 웨이트 1위"를 "프런티어를 이겼다"로 읽기.** GLM-5.2는 전체 4위이며 대부분의 1대1 비교에서 Claude Opus 4.8에 뒤집니다.',
          '**추론 시간과 비용을 잡을 때 작업당 약 43,000 토큰 출력량을 무시하기.**',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[소비자용 하드웨어에서 70B 모델 돌리기](/ko/local-llms/70b-models-consumer-hardware) — 대형 로컬 모델이 하드웨어에 실제로 요구하는 것.',
          '[로컬 LLM용 중고 GPU](/ko/local-llms/used-gpus-for-local-llms) — 실제 추론 용량이 필요할 때의 비용 효율적인 GPU 경로.',
          '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 돌리고 싶은 모델 등급에 하드웨어를 맞추기.',
          '[로컬 LLM용 Apple Silicon M5](/ko/local-llms/apple-silicon-m5-local-llm) — 더 큰 모델을 로컬에서 돌리기 위한 통합 메모리 옵션.',
          '[로컬 LLM 모델 업데이트 2026](/ko/local-llms/local-llm-model-updates-2026) — 올해 추적한 모든 주요 오픈 웨이트 출시.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'GLM-5.2가 현재 최고의 오픈 웨이트 모델인가요?',
            a: '독립 평가인 Artificial Analysis Intelligence Index v4.1(2026년 6월) 기준으로는 그렇습니다 — GLM-5.2는 51점으로 최고의 오픈 웨이트 결과이자 전체 4위입니다. 다음 오픈 모델인 MiniMax-M3와 DeepSeek V4 Pro(둘 다 44점)를 약 7점 앞섭니다. 다만 전체적으로 폐쇄형 프런티어 모델을 이기지는 못합니다.',
          },
          {
            q: '일반 PC나 Mac에서 GLM-5.2를 돌릴 수 있나요?',
            a: '전체 모델은 안 됩니다. 약 744B 파라미터라 멀티 GPU 서버나 임대 클라우드 GPU가 필요합니다. 소비자용 하드웨어에서는 품질과 속도를 희생하는 대폭 양자화된 1비트 GGUF 빌드로 제한됩니다. 대형 로컬 모델이 실제로 무엇을 요구하는지는 하드웨어 가이드를 참고하세요.',
          },
          {
            q: 'GLM-5.2가 GPT-5.5와 Claude Opus 4.8을 이기나요?',
            a: '코딩에서는 독립 결과가 GLM-5.2를 GPT-5.5보다 앞에 둡니다(예: SWE-bench Pro와 FrontierSWE 순서). Claude Opus 4.8과 비교하면 대부분의 1대1 비교에서 뒤집니다 — 예를 들어 Terminal-Bench 2.1(81.0 vs 85.0)과 FrontierSWE(약 1점 차). 정확한 요약은 "오픈 웨이트를 선도하고 프런티어와의 격차를 좁혔다"이지 "프런티어를 이겼다"가 아닙니다.',
          },
          {
            q: 'GLM-5.2는 정말 무료인가요? 라이선스는 무엇인가요?',
            a: 'GLM-5.2는 지역 사용 제한이 없는 MIT 라이선스로 공개되어 무료로 다운로드, 자체 호스팅, 수정할 수 있습니다. 전체 모델을 돌리려면 여전히 실제 인프라 비용(멀티 GPU 또는 임대 GPU)이 들고, 호스티드 Z.ai API는 유료 서비스입니다.',
          },
          {
            q: 'GLM-5.2에서 제 데이터는 안전한가요?',
            a: '배포 경로에 따라 다릅니다. 자체 호스팅 MIT 웨이트는 모든 데이터를 자체 경계 안에 둡니다. 퍼스트파티 Z.ai API는 독립 보도가 지적한 중국 데이터 거주성 고려사항이 따르므로, 해당 관할권의 적용을 받는 제3자 클라우드 엔드포인트처럼 다루세요.',
          },
          {
            q: 'GLM-5.2의 벤치마크 수치를 신뢰할 수 있나요?',
            a: '독립 평가인 Artificial Analysis Index는 "오픈 웨이트 1위" 순위를 뒷받침합니다. Z.ai 자체 코딩 수치는 회사 보고치이며 재현성에 이견이 있습니다 — Artificial Analysis 분석은 내부 평가가 공개 벤치마크보다 낮게 보고되었다고 지적합니다. 독립 수치를 우선하고 퍼스트파티 수치는 주장으로 다루세요.',
          },
          {
            q: 'GLM-5.2를 API로 돌리는 비용은 얼마인가요?',
            a: '폐쇄형 프런티어 모델의 약 1/6 비용입니다. 보고된 가격은 입력 100만 토큰당 약 $1.4, 출력 100만 토큰당 약 $4.4입니다(2026년 6월). GLM-5.2는 작업당 평균 약 43,000 출력 토큰을 사용하므로, 토큰당 요율만이 아니라 자신의 워크로드로 실제 비용을 추산하세요.',
          },
          {
            q: 'GLM-5.2를 제대로 자체 호스팅하려면 어떤 하드웨어가 필요한가요?',
            a: '전체 모델에는 멀티 GPU 서버 또는 임대 클라우드 GPU가 필요합니다. 소비자용 하드웨어는 대폭 양자화된 1비트 GGUF 빌드만 돌릴 수 있습니다. 환경 규모를 가늠하려면 로컬 LLM 하드웨어 가이드 2026, 로컬 LLM용 중고 GPU, 소비자용 하드웨어에서 70B 모델 돌리기를 참고하세요.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — 독립 Intelligence Index v4.1 순위(51점, 오픈 1위 / 전체 4위).',
          'TechTimes. (2026, June 17). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Z.ai API 경로의 데이터 거주성 고려사항.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — 독립 코딩 비교 및 비용 분석.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — 코딩 결과에 대한 독립 보도.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2: 2026년 1위 오픈 웨이트 모델 (그리고 여전히 집에서 돌릴 수 없는 이유)',
      'description': 'GLM-5.2는 Artificial Analysis Intelligence Index(2026년 6월)에서 1위 오픈 웨이트 LLM이자 전체 4위입니다. 코딩에서 GPT-5.5를 앞서지만 Opus 4.8에는 못 미치며, 약 744B 규모라 집에서 돌릴 수 없습니다.',
      'url': 'https://www.promptquorum.com/ko/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'ko',
      'audience': { '@type': 'Audience', 'audienceType': '자체 호스팅용 오픈 웨이트 LLM을 검토하는 개발자 및 팀' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — 상위 모델 (2026년 6월)',
      'inLanguage': 'ko',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': '폐쇄형 프런티어. Artificial Analysis Intelligence Index v4.1 점수 약 56.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': '오픈 웨이트 1위, 전체 4위. Artificial Analysis Intelligence Index v4.1 점수 51. 2026년 6월 13일 Z.ai가 MIT 라이선스로 공개.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': '오픈 웨이트. Artificial Analysis Intelligence Index v4.1 점수 44.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': '오픈 웨이트. Artificial Analysis Intelligence Index v4.1 점수 44.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Z.ai 이전 출시작. Artificial Analysis Intelligence Index v4.1 점수 40.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'ko',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'GLM-5.2가 현재 최고의 오픈 웨이트 모델인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '독립 평가인 Artificial Analysis Intelligence Index v4.1(2026년 6월) 기준으로는 그렇습니다 — GLM-5.2는 51점으로 최고의 오픈 웨이트 결과이자 전체 4위이며, MiniMax-M3와 DeepSeek V4 Pro(둘 다 44점)를 약 7점 앞섭니다. 전체적으로 폐쇄형 프런티어 모델을 이기지는 못합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': '일반 PC나 Mac에서 GLM-5.2를 돌릴 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '전체 모델은 안 됩니다. 약 744B 파라미터라 멀티 GPU 서버나 임대 클라우드 GPU가 필요합니다. 소비자용 하드웨어에서는 품질과 속도를 희생하는 대폭 양자화된 1비트 GGUF 빌드로 제한됩니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2가 GPT-5.5와 Claude Opus 4.8을 이기나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '코딩에서는 독립 결과가 GLM-5.2를 GPT-5.5보다 앞에 둡니다. Claude Opus 4.8과 비교하면 대부분의 1대1 비교에서 뒤집니다 — 예를 들어 Terminal-Bench 2.1(81.0 vs 85.0)과 FrontierSWE(약 1점 차). 오픈 웨이트를 선도하고 격차를 좁혔지만, 프런티어를 이기지는 못합니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2는 정말 무료인가요? 라이선스는 무엇인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2는 지역 사용 제한이 없는 MIT 라이선스로 공개되어 무료로 다운로드, 자체 호스팅, 수정할 수 있습니다. 전체 모델을 돌리려면 여전히 실제 인프라 비용이 들고, 호스티드 Z.ai API는 유료 서비스입니다.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2에서 제 데이터는 안전한가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '배포 경로에 따라 다릅니다. 자체 호스팅 MIT 웨이트는 모든 데이터를 자체 경계 안에 둡니다. 퍼스트파티 Z.ai API는 독립 보도가 지적한 중국 데이터 거주성 고려사항이 따르므로, 해당 관할권의 적용을 받는 제3자 클라우드 엔드포인트처럼 다루세요.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2의 벤치마크 수치를 신뢰할 수 있나요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '독립 평가인 Artificial Analysis Index는 "오픈 웨이트 1위" 순위를 뒷받침합니다. Z.ai 자체 코딩 수치는 회사 보고치이며 재현성에 이견이 있으므로, 독립 수치를 우선하고 퍼스트파티 수치는 주장으로 다루세요.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2를 API로 돌리는 비용은 얼마인가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '폐쇄형 프런티어 모델의 약 1/6 비용입니다. 보고된 가격은 입력 100만 토큰당 약 $1.4, 출력 100만 토큰당 약 $4.4입니다(2026년 6월). GLM-5.2는 작업당 평균 약 43,000 출력 토큰을 사용하므로, 자신의 워크로드로 비용을 추산하세요.',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2를 제대로 자체 호스팅하려면 어떤 하드웨어가 필요한가요?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '전체 모델에는 멀티 GPU 서버 또는 임대 클라우드 GPU가 필요합니다. 소비자용 하드웨어는 대폭 양자화된 1비트 GGUF 빌드만 돌릴 수 있습니다. 환경 규모를 가늠하려면 로컬 LLM 하드웨어 가이드 2026과 관련 하드웨어 가이드를 참고하세요.',
          },
        },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-pt.webp',
    title: 'GLM-5.2: o modelo de pesos abertos nº 1 de 2026 (e por que ele ainda não roda em casa)',
    seoTitle: 'GLM-5.2: melhor LLM de pesos abertos de 2026 — análise honesta',
    intro: 'O GLM-5.2, lançado em 13 de junho de 2026 pela Z.ai (antiga Zhipu AI), é o grande modelo de linguagem de pesos abertos com a maior pontuação no índice independente Artificial Analysis Intelligence Index v4.1 — 51 pontos, ocupando o 1º lugar entre os modelos abertos e o 4º no geral. Ele supera o GPT-5.5 em benchmarks de programação, mas ainda fica atrás do Claude Opus 4.8 na maioria das comparações diretas. Este artigo separa os resultados independentes das próprias alegações da Z.ai e explica por que um modelo aberto de ~744B de parâmetros não é algo que você consiga rodar em casa.',
    metaDescription: 'O GLM-5.2 é a LLM de pesos abertos nº 1 no Artificial Analysis Index (junho de 2026) — 4º no geral. Supera o GPT-5.5 em programação, mas fica atrás do Opus 4.8, e seu tamanho de ~744B não roda em casa.',
    twitterDescription: 'O GLM-5.2 é a melhor LLM de pesos abertos de junho de 2026 (4º no geral no Artificial Analysis Index). Supera o GPT-5.5 em programação, fica atrás do Opus 4.8 — e ~744B de parâmetros significam que ele não roda em casa.',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Developers and teams evaluating open-weights LLMs for self-hosting',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**O GLM-5.2, lançado em 13 de junho de 2026 pela Z.ai (antiga Zhipu AI), é a LLM de pesos abertos com a maior pontuação no Artificial Analysis Intelligence Index v4.1 — 51 pontos, 1º entre os modelos abertos e 4º no geral. Ele lidera os pesos abertos; não supera a fronteira fechada. E com ~744B de parâmetros, "aberto e auto-hospedável" não significa "roda no seu notebook".**',
    snippetBlocks: [
      { type: 'one-sentence', text: 'O GLM-5.2 é a LLM de pesos abertos líder em meados de 2026 segundo benchmarks independentes, mas seu tamanho de ~744B de parâmetros exige infraestrutura multi-GPU ou alugada, não hardware de consumo.' },
      { type: 'plain-terms', text: 'O GLM-5.2 é um modelo de IA gratuito para baixar que pontua mais alto do que qualquer outro modelo aberto neste momento. Ele é muito grande, então a maioria das pessoas não consegue rodar a versão completa em casa — você aluga uma GPU potente ou usa uma versão fortemente reduzida.' },
    ],
    quickAnswerTop: {
      question: 'O GLM-5.2 é o melhor modelo de pesos abertos no momento e dá para auto-hospedá-lo?',
      answer: 'Em junho de 2026, o GLM-5.2 é o modelo de pesos abertos mais bem classificado no Artificial Analysis Intelligence Index (51 pontos, 1º aberto e 4º no geral). A licença MIT permite que você o auto-hospede sem limites regionais, mas o modelo completo de ~744B exige hardware robusto. A maioria das pessoas roda uma build fortemente quantizada ou aluga uma GPU.',
      bullets: [
        '1º em pesos abertos / 4º no geral (Artificial Analysis Intelligence Index v4.1)',
        'Licença MIT, sem limites regionais, gratuito para auto-hospedar',
        '~744B de parâmetros totais / ~40B ativos (Mixture-of-Experts)',
        'Janela de contexto de 1M de tokens',
        'Supera o GPT-5.5 em programação; fica atrás do Claude Opus 4.8 na maioria dos confrontos diretos',
        '~1/6 do custo dos modelos de fronteira fechada via API hospedada',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'O que é o GLM-5.2?', anchor: '#what-is-glm-5-2' },
      { label: 'Benchmarks independentes', anchor: '#independent-benchmarks' },
      { label: 'Os próprios números da Z.ai', anchor: '#claimed-numbers' },
      { label: 'Dá para rodar em casa?', anchor: '#run-at-home' },
      { label: 'Auto-hospedado vs a API da Z.ai', anchor: '#data-path' },
      { label: 'Preços e custo', anchor: '#pricing' },
      { label: 'Você deveria usar o GLM-5.2?', anchor: '#decision' },
      { label: 'Contexto regional', anchor: '#regional-context' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**1º em pesos abertos, 4º no geral.** O GLM-5.2 pontua **51** no Artificial Analysis Intelligence Index v4.1 — o melhor modelo de pesos abertos, 4º no geral, **+11 sobre o GLM-5.1 (40)**, e cerca de 7 pontos à frente dos próximos modelos abertos, MiniMax-M3 (44) e DeepSeek V4 Pro (44).',
          '**Ele lidera os pesos abertos, não o campo inteiro.** Fica cerca de 5 pontos abaixo do Claude Fable 5 e atrás da fronteira fechada no geral. "Diminui a distância" — não "supera a fronteira".',
          '**Forte em programação, segundo atrás do Opus 4.8.** Resultados independentes de programação colocam o GLM-5.2 à frente do GPT-5.5, mas atrás do Claude Opus 4.8 na maioria das comparações diretas.',
          '**~744B de parâmetros não roda em casa.** É Mixture-of-Experts (~40B ativos por token), mas o modelo completo precisa de multi-GPU ou de uma GPU alugada; apenas builds GGUF fortemente quantizadas de 1 bit cabem em hardware de consumo.',
          '**Os pesos auto-hospedados mantêm seus dados; a API da Z.ai não necessariamente.** Os pesos licenciados sob MIT rodam dentro do seu perímetro; a API própria da Z.ai envolve considerações de residência de dados na China.',
          '**Trate os próprios benchmarks da Z.ai como reportados pela empresa.** A reprodutibilidade é contestada — priorize os números independentes da Artificial Analysis.',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'O que é o GLM-5.2?',
        content: [
          '**O GLM-5.2 é um grande modelo de linguagem de pesos abertos lançado em 13 de junho de 2026 pela Z.ai (antiga Zhipu AI), sob a licença MIT e sem limites regionais de uso.** Ele passou por benchmarks públicos a partir de 16 de junho de 2026.',
        ],
        items: [
          '**~744B de parâmetros totais** (as fontes citam de 743B a 753B), usando uma arquitetura **Mixture-of-Experts** com **~40B de parâmetros ativos por token**.',
          '**Janela de contexto de 1M de tokens** com uma **saída máxima de 131.072 tokens**.',
          '**~43.000 tokens de saída por tarefa** em média — acima dos ~26.000 do GLM-5.1 — o que aumenta o tempo e o custo da inferência local.',
          '**Licença MIT:** gratuito para baixar, auto-hospedar e modificar, sem restrições regionais.',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'Quão bom é o GLM-5.2? Os benchmarks independentes primeiro',
        content: [
          '**No único ranking independente e entre fornecedores — o Artificial Analysis Intelligence Index v4.1 — o GLM-5.2 é o modelo de pesos abertos com a maior pontuação, 51 pontos, 4º no geral (Artificial Analysis, junho de 2026).**',
        ],
        rows: [
          { 'Modelo': 'Claude Fable 5', 'Index v4.1': '~56', 'Categoria': 'Fronteira fechada' },
          { 'Modelo': 'GLM-5.2', 'Index v4.1': '51', 'Categoria': '1º em pesos abertos / 4º no geral' },
          { 'Modelo': 'MiniMax-M3', 'Index v4.1': '44', 'Categoria': 'Pesos abertos' },
          { 'Modelo': 'DeepSeek V4 Pro', 'Index v4.1': '44', 'Categoria': 'Pesos abertos' },
          { 'Modelo': 'GLM-5.1 (anterior)', 'Index v4.1': '40', 'Categoria': 'Pesos abertos' },
        ],
        columns: ['Modelo', 'Index v4.1', 'Categoria'],
        note: 'Resultados independentes de programação: Terminal-Bench 2.1 — o GLM-5.2 pontua 81.0 contra 85.0 do Claude Opus 4.8. SWE-bench Pro — o GLM-5.2 com 62.1 (valor reportado pela Z.ai) fica à frente dos 58.6 do GPT-5.5; a cobertura independente corrobora essa ordenação. FrontierSWE — o GLM-5.2 com 74.4 (valor reportado pela Z.ai) supera o GPT-5.5 (72.6) e fica atrás do Opus 4.8 (75.1) por cerca de um ponto, uma ordenação que a cobertura independente confirma. Veredito independente líquido: o GLM-5.2 é o modelo de programação de código aberto mais forte disponível em junho de 2026, mas ainda fica atrás do Claude Opus 4.8 na maioria das comparações diretas (VentureBeat; letsdatascience, junho de 2026).',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1 (junho de 2026): Claude Fable 5 obtém 56 pontos, GLM-5.2 obtém 51 pontos (#1 em pesos abertos, 4º no geral), MiniMax-M3 e DeepSeek V4 Pro obtêm 44 pontos cada, GLM-5.1 obtém 40 pontos.',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Os próprios números da Z.ai vs os resultados independentes: leia com cuidado',
        content: [
          '**Várias cifras de destaque vêm das próprias avaliações da Z.ai e devem ser lidas como reportadas pela empresa, não verificadas de forma independente.**',
        ],
        items: [
          '**Cifras de programação reportadas pela empresa** — por exemplo, MCP-Atlas 77.0 (reportado pela Z.ai), contra 75.3 do GPT-5.5 e 77.8 do Opus 4.8 — são executadas pela própria Z.ai e devem ser tratadas como alegações pendentes de replicação independente.',
          '**O artigo da Artificial Analysis observa que as avaliações internas da Z.ai foram reportadas como mais fracas do que seus benchmarks publicados**, e a reprodutibilidade é contestada.',
          '**A reprodutibilidade é uma questão em aberto.** Pelo menos um comentarista de destaque caracteriza o modelo como "bench-maxxed", e o GLM-5.1 teria pontuado 0% em pelo menos um benchmark no qual o GLM-5.2 agora vai bem. O Artificial Analysis Index independente — e não a própria suíte da Z.ai — é o que atualmente sustenta a alegação de nº 1 em pesos abertos.',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: 'Dá para rodar o GLM-5.2 em casa? O teste de realidade dos ~744B',
        content: [
          '**Não — não o modelo completo. "Pesos abertos" e "auto-hospedável" não significam "roda num PC doméstico comum".**',
        ],
        items: [
          '**O GLM-5.2 completo precisa de infraestrutura robusta:** servidores multi-GPU ou uma GPU em nuvem alugada.',
          '**Em hardware de consumo, apenas builds GGUF fortemente quantizadas de 1 bit são viáveis**, com perdas de qualidade e velocidade.',
          '**A alta saída de ~43.000 tokens por tarefa eleva ainda mais o tempo e o custo local.**',
          'Para a realidade de hardware dos grandes modelos locais, veja [Rodando modelos 70B em hardware de consumo](/pt/local-llms/70b-models-consumer-hardware), [GPUs usadas para LLMs locais](/pt/local-llms/used-gpus-for-local-llms), o [Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) e [Apple Silicon M5 para LLMs locais](/pt/local-llms/apple-silicon-m5-local-llm).',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: 'O modelo completo GLM-5.2 (~744B parâmetros, ~40B ativos) exige um servidor multi-GPU ou uma GPU de nuvem alugada; apenas builds GGUF quantizados em 1 bit rodam em uma única GPU ou CPU de consumo em casa, com qualidade reduzida.',
      },
      dataPath: {
        id: 'data-path',
        title: 'Pesos auto-hospedados vs a API da Z.ai: para onde vão seus dados',
        content: [
          '**A licença e a API são duas histórias diferentes de governança de dados. Os pesos MIT auto-hospedados mantêm seus dados dentro do seu perímetro; a API própria da Z.ai não.**',
        ],
        items: [
          '**Auto-hospedado (pesos MIT):** os dados ficam locais e são seus — sem transmissão a terceiros.',
          '**API própria da Z.ai:** a cobertura independente sinaliza explicitamente considerações de residência de dados na China ("risco de dados na China") no caminho da API (TechTimes, 17 de junho de 2026).',
          '**Enquadramento da decisão:** se a sensibilidade dos dados importa, auto-hospede os pesos; se você usar a API hospedada, trate-a como qualquer endpoint de nuvem de terceiros sujeito à sua jurisdição.',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'Preços e custo do GLM-5.2',
        content: [
          '**Via a API hospedada, o GLM-5.2 custa cerca de um sexto do preço dos modelos de fronteira fechada (VentureBeat, junho de 2026).** O preço reportado é de aproximadamente $1.4 por 1M de tokens de entrada e $4.4 por 1M de tokens de saída (em junho de 2026). Considere a alta saída por tarefa (~43.000 tokens) ao estimar o custo real de uma carga de trabalho.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Você deveria usar o GLM-5.2?',
        decisionBlock: {
          title: 'Guia de decisão do GLM-5.2',
          localIf: [
            'Você quer o modelo de pesos abertos mais forte disponível neste momento',
            'Você precisa de auto-hospedagem e controle de dados dentro do seu próprio perímetro',
            'Você executa tarefas de programação de longo horizonte',
            'Você quer qualidade próxima da fronteira por cerca de um sexto do custo',
          ],
          cloudIf: [
            'Você precisa da maior pontuação em confrontos diretos de programação ou raciocínio',
            'Você não exige pesos abertos e prefere um modelo de fronteira fechada como o Claude Opus 4.8',
            'Você não consegue provisionar infraestrutura multi-GPU ou de GPU alugada',
          ],
          quick: [
            'A melhor opção de pesos abertos hoje — mas verifique os benchmarks contestados nas suas próprias tarefas antes de se comprometer.',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2: contexto regional',
        content: [
          '**Brasil / LGPD:** Auto-hospedar o GLM-5.2 sob a licença MIT mantém todos os dados de inferência dentro da sua própria infraestrutura, o que atende às expectativas de residência de dados sob a LGPD (Lei Geral de Proteção de Dados). Quando a inferência roda localmente, a diferença de conformidade entre modelos está na documentação do fornecedor, não no tratamento de dados. A ANPD (Autoridade Nacional de Proteção de Dados) é o órgão regulador a considerar ao documentar o tratamento de dados.',
          '**Japão (METI):** Para implantações em produção, documente a versão do modelo (GLM-5.2), a licença (MIT) e se a inferência roda em pesos auto-hospedados ou na API da Z.ai, em linha com as diretrizes de governança de IA do METI.',
          '**China / caminho dos dados:** O GLM-5.2 é desenvolvido por um laboratório chinês. A principal alavanca de conformidade é o caminho de implantação, não o modelo: os pesos MIT auto-hospedados mantêm os dados no seu perímetro, enquanto a API própria da Z.ai está sujeita à sua jurisdição de origem. Escolha o caminho que corresponde aos seus requisitos de residência de dados.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao avaliar o GLM-5.2',
        items: [
          '**Supor que "pesos abertos" significa "roda em casa".** O tamanho de ~744B exige infraestrutura multi-GPU ou alugada; apenas builds GGUF de 1 bit cabem em hardware de consumo.',
          '**Tratar os benchmarks próprios da Z.ai como verificados.** Priorize o Artificial Analysis Index independente; trate os números de programação executados pela empresa como alegações.',
          '**Confundir os pesos MIT com a API hospedada na governança de dados.** A auto-hospedagem mantém os dados locais; a API está sujeita à sua jurisdição de origem.',
          '**Ler "1º em pesos abertos" como "supera a fronteira".** O GLM-5.2 é 4º no geral e fica atrás do Claude Opus 4.8 na maioria dos confrontos diretos.',
          '**Ignorar a saída de ~43.000 tokens por tarefa** ao orçar tempo e custo de inferência.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Rodando modelos 70B em hardware de consumo](/pt/local-llms/70b-models-consumer-hardware) — o que os grandes modelos locais realmente exigem do seu hardware.',
          '[GPUs usadas para LLMs locais](/pt/local-llms/used-gpus-for-local-llms) — caminhos de GPU com bom custo-benefício quando você precisa de capacidade real de inferência.',
          '[Guia de hardware para LLM local 2026](/pt/local-llms/local-llm-hardware-guide-2026) — combine o seu hardware com a classe de modelo que você quer rodar.',
          '[Apple Silicon M5 para LLMs locais](/pt/local-llms/apple-silicon-m5-local-llm) — opções de memória unificada para rodar modelos maiores localmente.',
          '[Atualizações de modelos de LLM local 2026](/pt/local-llms/local-llm-model-updates-2026) — todo lançamento importante de pesos abertos acompanhado neste ano.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O GLM-5.2 é o melhor modelo de pesos abertos no momento?',
            a: 'Pelo Artificial Analysis Intelligence Index v4.1 independente (junho de 2026), sim — o GLM-5.2 pontua 51, o melhor resultado em pesos abertos e o 4º no geral. Ele lidera os próximos modelos abertos, MiniMax-M3 e DeepSeek V4 Pro (ambos com 44), por cerca de 7 pontos. No entanto, ele não supera a fronteira fechada no geral.',
          },
          {
            q: 'Dá para rodar o GLM-5.2 em um PC ou Mac comum?',
            a: 'Não o modelo completo. Com ~744B de parâmetros, ele precisa de servidores multi-GPU ou de uma GPU em nuvem alugada. Em hardware de consumo, você fica limitado a builds GGUF fortemente quantizadas de 1 bit, que comprometem qualidade e velocidade. Veja nossos guias de hardware para saber o que os grandes modelos locais realmente exigem.',
          },
          {
            q: 'O GLM-5.2 supera o GPT-5.5 e o Claude Opus 4.8?',
            a: 'Em programação, resultados independentes colocam o GLM-5.2 à frente do GPT-5.5 (por exemplo, nas ordenações de SWE-bench Pro e FrontierSWE). Contra o Claude Opus 4.8, ele fica atrás na maioria dos confrontos diretos — por exemplo, no Terminal-Bench 2.1 (81.0 contra 85.0) e no FrontierSWE (cerca de um ponto atrás). O resumo correto é "lidera os pesos abertos, diminui a distância para a fronteira", não "supera a fronteira".',
          },
          {
            q: 'O GLM-5.2 é realmente gratuito? Qual é a licença?',
            a: 'O GLM-5.2 é lançado sob a licença MIT, sem limites regionais de uso, então você pode baixar, auto-hospedar e modificá-lo gratuitamente. Rodar o modelo completo ainda custa infraestrutura real (multi-GPU ou GPU alugada), e a API hospedada da Z.ai é um serviço pago.',
          },
          {
            q: 'Meus dados estão seguros com o GLM-5.2?',
            a: 'Depende do caminho de implantação. Os pesos MIT auto-hospedados mantêm todos os dados dentro do seu próprio perímetro. A API própria da Z.ai envolve considerações de residência de dados na China sinalizadas pela cobertura independente, então trate-a como qualquer endpoint de nuvem de terceiros sujeito à sua jurisdição.',
          },
          {
            q: 'Os números de benchmark do GLM-5.2 são confiáveis?',
            a: 'O Artificial Analysis Index independente corrobora a classificação de nº 1 em pesos abertos. Os próprios números de programação da Z.ai são reportados pela empresa, e a reprodutibilidade é contestada — o artigo da Artificial Analysis observa que as avaliações internas foram reportadas como mais fracas do que os benchmarks publicados. Priorize os números independentes e trate as cifras próprias como alegações.',
          },
          {
            q: 'Quanto custa rodar o GLM-5.2 via API?',
            a: 'Cerca de um sexto do custo dos modelos de fronteira fechada. O preço reportado é de aproximadamente $1.4 por 1M de tokens de entrada e $4.4 por 1M de tokens de saída (junho de 2026). Como o GLM-5.2 gera em média ~43.000 tokens de saída por tarefa, estime o custo real na sua própria carga de trabalho, em vez de apenas nas taxas por token.',
          },
          {
            q: 'De que hardware preciso para auto-hospedar o GLM-5.2 corretamente?',
            a: 'Para o modelo completo, servidores multi-GPU ou uma GPU em nuvem alugada. O hardware de consumo só consegue rodar builds GGUF fortemente quantizadas de 1 bit. Veja o Guia de hardware para LLM local 2026, GPUs usadas para LLMs locais e Rodando modelos 70B em hardware de consumo para dimensionar sua configuração.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index — Classificação independente do Intelligence Index v4.1 (51, 1º aberto / 4º no geral).',
          'TechTimes. (2026, 17 de junho). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm — Considerações de residência de dados no caminho da API da Z.ai.',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost — Comparação independente de programação e enquadramento de custo.',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding — Cobertura independente dos resultados de programação.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2: o modelo de pesos abertos nº 1 de 2026 (e por que ele ainda não roda em casa)',
      'description': 'O GLM-5.2 é a LLM de pesos abertos nº 1 no Artificial Analysis Intelligence Index (junho de 2026), 4º no geral. Ele supera o GPT-5.5 em programação, mas fica atrás do Opus 4.8, e seu tamanho de ~744B não roda em casa.',
      'url': 'https://www.promptquorum.com/pt/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Person', 'name': 'Hans Kuepper', 'sameAs': 'https://www.linkedin.com/in/hanskuepper/' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'pt-BR',
      'audience': { '@type': 'Audience', 'audienceType': 'Developers and teams evaluating open-weights LLMs for self-hosting' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': 'Open-weights LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 — modelos de destaque (junho de 2026)',
      'inLanguage': 'pt-BR',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': 'Fronteira fechada. Pontuação 56 no Artificial Analysis Intelligence Index v4.1.' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': '1º em pesos abertos, 4º no geral. Pontuação 51 no Artificial Analysis Intelligence Index v4.1. Lançado em 13 de junho de 2026 pela Z.ai sob a licença MIT.' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': 'Pesos abertos. Pontuação 44 no Artificial Analysis Intelligence Index v4.1.' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': 'Pesos abertos. Pontuação 44 no Artificial Analysis Intelligence Index v4.1.' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Lançamento anterior da Z.ai. Pontuação 40 no Artificial Analysis Intelligence Index v4.1.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'pt-BR',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'O GLM-5.2 é o melhor modelo de pesos abertos no momento?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Pelo Artificial Analysis Intelligence Index v4.1 independente (junho de 2026), sim — o GLM-5.2 pontua 51, o melhor resultado em pesos abertos e o 4º no geral, liderando o MiniMax-M3 e o DeepSeek V4 Pro (ambos com 44) por cerca de 7 pontos. Ele não supera a fronteira fechada no geral.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Dá para rodar o GLM-5.2 em um PC ou Mac comum?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Não o modelo completo. Com ~744B de parâmetros, ele precisa de servidores multi-GPU ou de uma GPU em nuvem alugada. Em hardware de consumo, você fica limitado a builds GGUF fortemente quantizadas de 1 bit, que comprometem qualidade e velocidade.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O GLM-5.2 supera o GPT-5.5 e o Claude Opus 4.8?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Em programação, resultados independentes colocam o GLM-5.2 à frente do GPT-5.5. Contra o Claude Opus 4.8, ele fica atrás na maioria dos confrontos diretos — por exemplo, no Terminal-Bench 2.1 (81.0 contra 85.0) e no FrontierSWE (cerca de um ponto atrás). Ele lidera os pesos abertos e diminui a distância, mas não supera a fronteira.',
          },
        },
        {
          '@type': 'Question',
          'name': 'O GLM-5.2 é realmente gratuito? Qual é a licença?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O GLM-5.2 é lançado sob a licença MIT, sem limites regionais de uso, então você pode baixar, auto-hospedar e modificá-lo gratuitamente. Rodar o modelo completo ainda custa infraestrutura real, e a API hospedada da Z.ai é um serviço pago.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Meus dados estão seguros com o GLM-5.2?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Depende do caminho de implantação. Os pesos MIT auto-hospedados mantêm todos os dados dentro do seu próprio perímetro. A API própria da Z.ai envolve considerações de residência de dados na China sinalizadas pela cobertura independente, então trate-a como qualquer endpoint de nuvem de terceiros sujeito à sua jurisdição.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Os números de benchmark do GLM-5.2 são confiáveis?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'O Artificial Analysis Index independente corrobora a classificação de nº 1 em pesos abertos. Os próprios números de programação da Z.ai são reportados pela empresa e a reprodutibilidade é contestada, então priorize os números independentes e trate as cifras próprias como alegações.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Quanto custa rodar o GLM-5.2 via API?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Cerca de um sexto do custo dos modelos de fronteira fechada. O preço reportado é de aproximadamente $1.4 por 1M de tokens de entrada e $4.4 por 1M de tokens de saída (junho de 2026). Como o GLM-5.2 gera em média ~43.000 tokens de saída por tarefa, estime o custo na sua própria carga de trabalho.',
          },
        },
        {
          '@type': 'Question',
          'name': 'De que hardware preciso para auto-hospedar o GLM-5.2 corretamente?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Para o modelo completo, servidores multi-GPU ou uma GPU em nuvem alugada. O hardware de consumo só consegue rodar builds GGUF fortemente quantizadas de 1 bit. Veja o Guia de hardware para LLM local 2026 e os guias de hardware relacionados para dimensionar sua configuração.',
          },
        },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-12-16',
    last_full_refresh: '2026-06-28',
    theme: 'Best Models',
    heroImage: '/images/glm-5-2-open-weights-frontier-2026-overview-hero-zh.webp',
    title: 'GLM-5.2：2026 年排名第一的开源权重模型（以及为什么它仍无法在家本地运行）',
    seoTitle: 'GLM-5.2：2026 年顶级开源权重 LLM — 客观评测',
    intro: 'GLM-5.2 由 Z.ai（前身为 Zhipu AI）于 2026 年 6 月 13 日发布，是独立的 Artificial Analysis Intelligence Index v4.1 上得分最高的开源权重大语言模型——51 分，在开源模型中排名第一，整体排名第四。它在编程基准测试上击败了 GPT-5.5，但在大多数正面对比中仍落后于 Claude Opus 4.8。本文将独立测评结果与 Z.ai 自报数据区分开来，并解释为何一个约 744B 参数的开源模型无法在家本地运行。',
    metaDescription: 'GLM-5.2 是 Artificial Analysis Index 上排名第一的开源权重 LLM（2026 年 6 月），整体第四。它在编程上胜过 GPT-5.5，但落后于 Opus 4.8，约 744B 的规模无法在家运行。',
    twitterDescription: 'GLM-5.2 是 2026 年 6 月顶级开源权重 LLM（Artificial Analysis Index 整体第四）。编程胜过 GPT-5.5、落后 Opus 4.8——约 744B 参数意味着无法在家本地运行。',
    publishDate: '2026-06-28',
    dateModified: '2026-06-28',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '评估开源权重 LLM 以自托管的开发者与团队',
    primaryTerm: 'GLM-5.2',
    targetKeywords: [
      'GLM-5.2',
      'GLM-5.2 benchmarks',
      'open weights frontier model',
      'GLM-5.2 self-host',
      'best open-weights LLM 2026',
    ],
    leadAnswerBlock: '**GLM-5.2 由 Z.ai（前身为 Zhipu AI）于 2026 年 6 月 13 日发布，是 Artificial Analysis Intelligence Index v4.1 上得分最高的开源权重 LLM——51 分，开源模型第一、整体第四。它领跑开源权重，但并未击败闭源前沿模型。而且在约 744B 参数下，"开源且可自托管"并不等于"能在你的笔记本上运行"。**',
    snippetBlocks: [
      { type: 'one-sentence', text: '按独立基准测试，GLM-5.2 是 2026 年年中领先的开源权重 LLM，但其约 744B 参数的规模需要多 GPU 或租用基础设施，而非消费级硬件。' },
      { type: 'plain-terms', text: 'GLM-5.2 是一款可免费下载的 AI 模型，目前得分高于任何其他开源模型。它体积非常大，因此大多数人无法在家运行完整版本——你要么租用一块强力 GPU，要么使用大幅压缩的精简版本。' },
    ],
    quickAnswerTop: {
      question: 'GLM-5.2 是目前最好的开源权重模型吗？我能自托管它吗？',
      answer: '截至 2026 年 6 月，GLM-5.2 是 Artificial Analysis Intelligence Index 上排名第一的开源权重模型（51 分，开源第一、整体第四）。MIT 许可证让你可以无地区限制地自托管它，但完整的约 744B 模型需要强大的硬件。大多数个人会运行大幅量化的版本或租用 GPU。',
      bullets: [
        '开源权重第一 / 整体第四（Artificial Analysis Intelligence Index v4.1）',
        'MIT 许可证，无地区限制，可免费自托管',
        '约 744B 总参数 / 约 40B 激活参数（Mixture-of-Experts）',
        '1M token 上下文窗口',
        '编程上击败 GPT-5.5；在大多数正面对比中落后于 Claude Opus 4.8',
        '通过托管 API，成本约为闭源前沿模型的 1/6',
      ],
      updatedDate: '2026-06-28',
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'GLM-5.2 是什么？', anchor: '#what-is-glm-5-2' },
      { label: '独立基准测试', anchor: '#independent-benchmarks' },
      { label: 'Z.ai 自报数据', anchor: '#claimed-numbers' },
      { label: '能在家本地运行吗？', anchor: '#run-at-home' },
      { label: '自托管 vs Z.ai API', anchor: '#data-path' },
      { label: '定价与成本', anchor: '#pricing' },
      { label: '你应该用 GLM-5.2 吗？', anchor: '#decision' },
      { label: '区域合规背景', anchor: '#regional-context' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '延伸阅读', anchor: '#related-reading' },
      { label: '常见问题', anchor: '#faq' },
      { label: '来源', anchor: '#sources' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**开源权重第一，整体第四。** GLM-5.2 在 Artificial Analysis Intelligence Index v4.1 上得 **51** 分——顶级开源权重模型，整体第四，**比 GLM-5.1（40）高出 11 分**，并领先于下一梯队开源模型 MiniMax-M3（44）和 DeepSeek V4 Pro（44）约 7 分。',
          '**它领跑开源权重，而非整个领域。** 它大约比 Claude Fable 5 低 5 分，整体排在闭源前沿模型之后。这是"缩小差距"，而非"击败前沿"。',
          '**编程能力强，仅次于 Opus 4.8。** 独立编程测评显示 GLM-5.2 领先 GPT-5.5，但在大多数正面对比中落后于 Claude Opus 4.8。',
          '**约 744B 参数无法在家本地运行。** 它采用 Mixture-of-Experts（每 token 约 40B 激活参数），但完整模型需要多 GPU 或租用 GPU；只有大幅量化的 1-bit GGUF 版本才能装进消费级硬件。',
          '**自托管权重让数据留在本地；Z.ai API 则不一定。** MIT 许可的权重在你的边界内运行；而第一方 Z.ai API 涉及中国数据驻留方面的考量。',
          '**应将 Z.ai 自报基准视为公司自测数据。** 可复现性存在争议——应以独立的 Artificial Analysis 数据为准。',
        ],
      },
      whatIsGlm52: {
        id: 'what-is-glm-5-2',
        title: 'GLM-5.2 是什么？',
        content: [
          '**GLM-5.2 是一款开源权重大语言模型，由 Z.ai（前身为 Zhipu AI）于 2026 年 6 月 13 日以 MIT 许可证发布，无地区使用限制。** 它自 2026 年 6 月 16 日起被公开测评。',
        ],
        items: [
          '**约 744B 总参数**（各方来源引用 743B–753B），采用 **Mixture-of-Experts** 架构，**每 token 约 40B 激活参数**。',
          '**1M token 上下文窗口**，**最大输出 131,072 token**。',
          '**平均每项任务约 43,000 输出 token**——高于 GLM-5.1 的约 26,000——这会增加本地推理的时间与成本。',
          '**MIT 许可证：** 可免费下载、自托管和修改，无地区限制。',
        ],
      },
      independentBenchmarks: {
        id: 'independent-benchmarks',
        title: 'GLM-5.2 有多强？先看独立基准测试',
        content: [
          '**在唯一一个独立的跨厂商排名——Artificial Analysis Intelligence Index v4.1——上，GLM-5.2 是得分最高的开源权重模型，51 分，整体第四（Artificial Analysis，2026 年 6 月）。**',
        ],
        rows: [
          { '模型': 'Claude Fable 5', 'Index v4.1': '~56', '梯队': '闭源前沿' },
          { '模型': 'GLM-5.2', 'Index v4.1': '51', '梯队': '开源权重第一 / 整体第四' },
          { '模型': 'MiniMax-M3', 'Index v4.1': '44', '梯队': '开源权重' },
          { '模型': 'DeepSeek V4 Pro', 'Index v4.1': '44', '梯队': '开源权重' },
          { '模型': 'GLM-5.1（上一代）', 'Index v4.1': '40', '梯队': '开源权重' },
        ],
        columns: ['模型', 'Index v4.1', '梯队'],
        note: '独立编程测评结果：Terminal-Bench 2.1——GLM-5.2 得 81.0，Claude Opus 4.8 为 85.0。SWE-bench Pro——GLM-5.2 为 62.1（Z.ai 自报分值）领先于 GPT-5.5 的 58.6；独立报道印证了这一排序。FrontierSWE——GLM-5.2 为 74.4（Z.ai 自报分值），击败 GPT-5.5（72.6），并以约一分之差落后于 Opus 4.8（75.1），这一排序也得到了独立报道的确认。综合独立结论：GLM-5.2 是截至 2026 年 6 月可获得的最强开源编程模型，但在大多数正面对比中仍落后于 Claude Opus 4.8（VentureBeat；letsdatascience，2026 年 6 月）。',
        image: '/images/glm-5-2-intelligence-index-en.svg',
        imageCaption: 'Artificial Analysis Intelligence Index v4.1（2026年6月）：Claude Fable 5得分56，GLM-5.2得分51（开源权重第一，综合第四），MiniMax-M3和DeepSeek V4 Pro均为44分，GLM-5.1为40分。',
      },
      claimedNumbers: {
        id: 'claimed-numbers',
        title: 'Z.ai 自报数据 vs 独立结果：请谨慎解读',
        content: [
          '**若干头条数字来自 Z.ai 自己的评测，应被视为公司自报、而非经过独立验证。**',
        ],
        items: [
          '**公司自报的编程数字**——例如 MCP-Atlas 77.0（Z.ai 自报），对比 GPT-5.5 的 75.3 和 Opus 4.8 的 77.8——由 Z.ai 自行运行，应在独立复现之前作为厂商声明对待。',
          '**Artificial Analysis 的评述指出，Z.ai 的内部评测所报告的结果弱于其公布的基准成绩**，且可复现性存在争议。',
          '**可复现性仍是一个悬而未决的问题。** 至少有一位知名评论者将该模型形容为"刷榜（bench-maxxed）"，据称 GLM-5.1 在至少一项 GLM-5.2 如今表现良好的基准上曾得 0%。当前支撑"开源权重第一"这一说法的，是独立的 Artificial Analysis Index，而非 Z.ai 自家的测评套件。',
        ],
      },
      runAtHome: {
        id: 'run-at-home',
        title: '你能在家本地运行 GLM-5.2 吗？约 744B 的现实考量',
        content: [
          '**不能——至少完整模型不行。"开源权重"和"可自托管"并不意味着"能在普通家用 PC 上运行"。**',
        ],
        items: [
          '**完整的 GLM-5.2 需要强大的基础设施：** 多 GPU 服务器或租用的云 GPU。',
          '**在消费级硬件上，只有大幅量化的 1-bit GGUF 版本可行**，并伴随质量和速度上的取舍。',
          '**每项任务约 43,000 token 的高输出量进一步推高了本地的时间与成本。**',
          '关于大型本地模型的硬件现实，参见 [在消费级硬件上运行 70B 模型](/zh/local-llms/70b-models-consumer-hardware)、[本地 LLM 二手 GPU](/zh/local-llms/used-gpus-for-local-llms)、[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026)，以及 [Apple Silicon M5 本地 LLM](/zh/local-llms/apple-silicon-m5-local-llm)。',
        ],
        image: '/images/glm-5-2-home-vs-quantized-en.svg',
        imageCaption: '完整版GLM-5.2（约744B参数，约40B激活参数）需要多GPU服务器或租用云GPU；只有1比特量化的GGUF版本才能在家用单张消费级GPU或CPU上运行，但质量会降低。',
      },
      dataPath: {
        id: 'data-path',
        title: '自托管权重 vs Z.ai API：你的数据去了哪里',
        content: [
          '**许可证与 API 是两种不同的数据治理路径。自托管的 MIT 权重让数据留在你的边界之内；第一方 Z.ai API 则不然。**',
        ],
        items: [
          '**自托管（MIT 权重）：** 数据保留在本地、归你所有——不向第三方传输。',
          '**Z.ai 第一方 API：** 独立报道明确指出该 API 路径存在中国数据驻留方面的考量（"中国数据风险"）（TechTimes，2026 年 6 月 17 日）。',
          '**决策框架：** 若数据敏感性重要，请自托管权重；若使用托管 API，则应将其视为受其管辖法域约束的任何第三方云端点来对待。',
        ],
      },
      pricing: {
        id: 'pricing',
        title: 'GLM-5.2 定价与成本',
        content: [
          '**通过托管 API，GLM-5.2 的成本约为闭源前沿模型的六分之一（VentureBeat，2026 年 6 月）。** 据报道，定价约为每 1M 输入 token $1.4、每 1M 输出 token $4.4（截至 2026 年 6 月）。在估算真实工作负载成本时，请将每项任务的高输出量（约 43,000 token）纳入考量。',
        ],
      },
      decision: {
        id: 'decision',
        title: '你应该用 GLM-5.2 吗？',
        decisionBlock: {
          title: 'GLM-5.2 决策指南',
          localIf: [
            '你想要目前可获得的最强开源权重模型',
            '你需要在自己的边界内自托管并掌控数据',
            '你运行长时程的编程任务',
            '你想以约六分之一的成本获得接近前沿的质量',
          ],
          cloudIf: [
            '你在正面编程或推理对比中需要最高分',
            '你不要求开源权重，且更倾向于像 Claude Opus 4.8 这样的闭源前沿模型',
            '你无法配置多 GPU 或租用 GPU 基础设施',
          ],
          quick: [
            '当下最佳的开源权重选项——但在投入之前，请用你自己的任务验证那些存在争议的基准结果。',
          ],
        },
      },
      regionalContext: {
        id: 'regional-context',
        title: 'GLM-5.2：区域合规背景',
        content: [
          '**中国（《数据安全法》）：** GLM-5.2 由中国实验室构建，核心合规杠杆在于部署路径、而非模型本身。在 MIT 许可下自托管 GLM-5.2，可使全部推理数据保留在你自有的基础设施之内，从而将数据保持在你的边界以内，契合《数据安全法》（2021）下的数据驻留要求；而第一方 Z.ai API 则受其所在法域管辖。请根据你的数据驻留要求选择相应路径。',
          '**亚太地区（数据跨境）：** 对于跨境数据流动，关键在于明确推理在何处运行。自托管权重让数据留在你选定的司法辖区内，便于符合各地的数据驻留与跨境传输框架；而托管 API 则会将数据带入供应商的本国法域。在多辖区部署时，应将部署路径与各市场的合规要求逐一对应。',
          '**企业部署：** 对于金融、医疗、法律等受监管行业的大型企业（银行、医院、律师事务所），应记录模型版本（GLM-5.2）、许可证（MIT），以及推理是运行在自托管权重还是 Z.ai API 上。自托管的 MIT 权重将敏感数据保留在企业内部，是满足行业监管与审计要求最直接的路径。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '评估 GLM-5.2 时的常见错误',
        items: [
          '**误以为"开源权重"就意味着"能在家运行"。** 约 744B 的规模需要多 GPU 或租用基础设施；只有 1-bit GGUF 版本才能装进消费级硬件。',
          '**把 Z.ai 第一方基准当作已验证数据。** 应以独立的 Artificial Analysis Index 为准；将公司自行运行的编程数字视为厂商声明。',
          '**在数据治理上将 MIT 权重与托管 API 混为一谈。** 自托管让数据保留在本地；API 则受其本国法域约束。',
          '**把"开源权重第一"误读为"击败前沿"。** GLM-5.2 整体排名第四，在大多数正面对比中落后于 Claude Opus 4.8。',
          '**在估算推理时间与成本时忽视每项任务约 43,000 token 的输出量。**',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[在消费级硬件上运行 70B 模型](/zh/local-llms/70b-models-consumer-hardware) —— 大型本地模型对硬件的真实需求。',
          '[本地 LLM 二手 GPU](/zh/local-llms/used-gpus-for-local-llms) —— 当你需要真正的推理算力时，高性价比的 GPU 路径。',
          '[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026) —— 将你的硬件与想运行的模型类别相匹配。',
          '[Apple Silicon M5 本地 LLM](/zh/local-llms/apple-silicon-m5-local-llm) —— 在本地运行更大模型的统一内存方案。',
          '[本地 LLM 模型更新 2026](/zh/local-llms/local-llm-model-updates-2026) —— 追踪今年每一次重要的开源权重发布。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'GLM-5.2 是目前最好的开源权重模型吗？',
            a: '按独立的 Artificial Analysis Intelligence Index v4.1（2026 年 6 月），是的——GLM-5.2 得 51 分，是顶级开源权重成绩，整体第四。它领先于下一梯队开源模型 MiniMax-M3 和 DeepSeek V4 Pro（均为 44）约 7 分。不过，它在整体上并未击败闭源前沿模型。',
          },
          {
            q: '我能在普通 PC 或 Mac 上运行 GLM-5.2 吗？',
            a: '完整模型不行。约 744B 参数需要多 GPU 服务器或租用的云 GPU。在消费级硬件上，你只能使用大幅量化的 1-bit GGUF 版本，并以质量和速度为代价。关于大型本地模型的真实需求，请参阅我们的硬件指南。',
          },
          {
            q: 'GLM-5.2 击败了 GPT-5.5 和 Claude Opus 4.8 吗？',
            a: '在编程方面，独立结果显示 GLM-5.2 领先 GPT-5.5（例如 SWE-bench Pro 和 FrontierSWE 的排序）。但对比 Claude Opus 4.8，它在大多数正面对比中落后——例如 Terminal-Bench 2.1（81.0 对 85.0）和 FrontierSWE（落后约一分）。准确的概括是"领跑开源权重、缩小与前沿的差距"，而非"击败前沿"。',
          },
          {
            q: 'GLM-5.2 真的免费吗？它的许可证是什么？',
            a: 'GLM-5.2 以 MIT 许可证发布，无地区使用限制，因此你可以免费下载、自托管和修改它。运行完整模型仍需真实的基础设施成本（多 GPU 或租用 GPU），而托管的 Z.ai API 是付费服务。',
          },
          {
            q: '使用 GLM-5.2 我的数据安全吗？',
            a: '这取决于部署路径。自托管的 MIT 权重将所有数据保留在你自有的边界之内。第一方 Z.ai API 涉及独立报道所指出的中国数据驻留考量，因此应将其视为受其管辖法域约束的任何第三方云端点来对待。',
          },
          {
            q: 'GLM-5.2 的基准测试数字可信吗？',
            a: '独立的 Artificial Analysis Index 印证了"开源权重第一"的排名。Z.ai 自家的编程数字属于公司自报，且可复现性存在争议——Artificial Analysis 的评述指出其内部评测所报告的结果弱于公布的基准。应以独立数字为准，并将第一方数据视为厂商声明。',
          },
          {
            q: '通过 API 运行 GLM-5.2 的成本是多少？',
            a: '约为闭源前沿模型成本的六分之一。据报道，定价约为每 1M 输入 token $1.4、每 1M 输出 token $4.4（2026 年 6 月）。由于 GLM-5.2 平均每项任务约 43,000 输出 token，请基于你自己的工作负载估算真实成本，而不要仅看每 token 单价。',
          },
          {
            q: '正确自托管 GLM-5.2 需要什么硬件？',
            a: '运行完整模型需要多 GPU 服务器或租用的云 GPU。消费级硬件只能运行大幅量化的 1-bit GGUF 版本。请参阅《本地 LLM 硬件指南 2026》《本地 LLM 二手 GPU》以及《在消费级硬件上运行 70B 模型》来确定你的配置规格。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          'Artificial Analysis. (2026). "GLM-5.2 is the new leading open-weights model on the Artificial Analysis Intelligence Index." https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index —— 独立 Intelligence Index v4.1 排名（51，开源第一 / 整体第四）。',
          'TechTimes. (2026, June 17). "GLM-5.2 open weights live, tops coding benchmark; API use carries China data risk." https://www.techtimes.com/articles/318543/20260617/glm-52-open-weights-live-top-coding-benchmark-api-use-carries-china-data-risk.htm —— Z.ai API 路径上的数据驻留考量。',
          'VentureBeat. (2026). "Z.ai\'s open-weights GLM-5.2 beats GPT-5.5 on multiple long-horizon coding benchmarks for 1/6th the cost." https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost —— 独立编程对比与成本测算。',
          'LetsDataScience. (2026). "GLM-5.2 open weights beats GPT-5.5 coding." https://letsdatascience.com/blog/glm-5-2-open-weights-beats-gpt-5-5-coding —— 编程结果的独立报道。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'GLM-5.2：2026 年排名第一的开源权重模型（以及为什么它仍无法在家本地运行）',
      'description': 'GLM-5.2 是 Artificial Analysis Intelligence Index 上排名第一的开源权重 LLM（2026 年 6 月），整体第四。它在编程上击败 GPT-5.5，但落后于 Opus 4.8，约 744B 的规模无法在家运行。',
      'url': 'https://www.promptquorum.com/zh/local-llms/glm-5-2-open-weights-frontier-2026',
      'datePublished': '2026-06-28',
      'dateModified': '2026-06-28',
      'author': { '@type': 'Organization', 'name': 'PromptQuorum' },
      'publisher': { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      'educationalLevel': 'Intermediate',
      'proficiencyLevel': 'Intermediate',
      'inLanguage': 'zh',
      'audience': { '@type': 'Audience', 'audienceType': '评估开源权重 LLM 以自托管的开发者与团队' },
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-intro', '.key-takeaways'],
      },
      'about': [
        { '@type': 'Thing', 'name': 'GLM-5.2' },
        { '@type': 'Thing', 'name': 'Z.ai' },
        { '@type': 'Thing', 'name': '开源权重 LLM' },
        { '@type': 'Thing', 'name': 'Artificial Analysis Intelligence Index' },
        { '@type': 'Thing', 'name': 'Mixture-of-Experts' },
      ],
      'mentions': [
        { '@type': 'SoftwareApplication', 'name': 'GLM-5.2' },
        { '@type': 'SoftwareApplication', 'name': 'Claude Opus 4.8' },
        { '@type': 'SoftwareApplication', 'name': 'GPT-5.5' },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Artificial Analysis Intelligence Index v4.1 —— 顶级模型（2026 年 6 月）',
      'inLanguage': 'zh',
      'numberOfItems': 5,
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Claude Fable 5', 'description': '闭源前沿。Artificial Analysis Intelligence Index v4.1 得分约 56。' },
        { '@type': 'ListItem', 'position': 2, 'name': 'GLM-5.2', 'description': '开源权重第一，整体第四。Artificial Analysis Intelligence Index v4.1 得分 51。由 Z.ai 于 2026 年 6 月 13 日以 MIT 许可证发布。' },
        { '@type': 'ListItem', 'position': 3, 'name': 'MiniMax-M3', 'description': '开源权重。Artificial Analysis Intelligence Index v4.1 得分 44。' },
        { '@type': 'ListItem', 'position': 4, 'name': 'DeepSeek V4 Pro', 'description': '开源权重。Artificial Analysis Intelligence Index v4.1 得分 44。' },
        { '@type': 'ListItem', 'position': 5, 'name': 'GLM-5.1', 'description': 'Z.ai 上一代发布。Artificial Analysis Intelligence Index v4.1 得分 40。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': 'zh',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'GLM-5.2 是目前最好的开源权重模型吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '按独立的 Artificial Analysis Intelligence Index v4.1（2026 年 6 月），是的——GLM-5.2 得 51 分，是顶级开源权重成绩，整体第四，领先 MiniMax-M3 和 DeepSeek V4 Pro（均为 44）约 7 分。它在整体上并未击败闭源前沿模型。',
          },
        },
        {
          '@type': 'Question',
          'name': '我能在普通 PC 或 Mac 上运行 GLM-5.2 吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '完整模型不行。约 744B 参数需要多 GPU 服务器或租用的云 GPU。在消费级硬件上，你只能使用大幅量化的 1-bit GGUF 版本，并以质量和速度为代价。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2 击败了 GPT-5.5 和 Claude Opus 4.8 吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '在编程方面，独立结果显示 GLM-5.2 领先 GPT-5.5。对比 Claude Opus 4.8，它在大多数正面对比中落后——例如 Terminal-Bench 2.1（81.0 对 85.0）和 FrontierSWE（落后约一分）。它领跑开源权重并缩小差距，但并未击败前沿。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2 真的免费吗？它的许可证是什么？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'GLM-5.2 以 MIT 许可证发布，无地区使用限制，因此你可以免费下载、自托管和修改它。运行完整模型仍需真实的基础设施成本，而托管的 Z.ai API 是付费服务。',
          },
        },
        {
          '@type': 'Question',
          'name': '使用 GLM-5.2 我的数据安全吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '这取决于部署路径。自托管的 MIT 权重将所有数据保留在你自有的边界之内。第一方 Z.ai API 涉及独立报道所指出的中国数据驻留考量，因此应将其视为受其管辖法域约束的任何第三方云端点来对待。',
          },
        },
        {
          '@type': 'Question',
          'name': 'GLM-5.2 的基准测试数字可信吗？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '独立的 Artificial Analysis Index 印证了"开源权重第一"的排名。Z.ai 自家的编程数字属于公司自报，且可复现性存在争议，因此应以独立数字为准，并将第一方数据视为厂商声明。',
          },
        },
        {
          '@type': 'Question',
          'name': '通过 API 运行 GLM-5.2 的成本是多少？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '约为闭源前沿模型成本的六分之一。据报道，定价约为每 1M 输入 token $1.4、每 1M 输出 token $4.4（2026 年 6 月）。由于 GLM-5.2 平均每项任务约 43,000 输出 token，请基于你自己的工作负载估算成本。',
          },
        },
        {
          '@type': 'Question',
          'name': '正确自托管 GLM-5.2 需要什么硬件？',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': '运行完整模型需要多 GPU 服务器或租用的云 GPU。消费级硬件只能运行大幅量化的 1-bit GGUF 版本。请参阅《本地 LLM 硬件指南 2026》及相关硬件指南来确定你的配置规格。',
          },
        },
      ],
    },
  },
}
