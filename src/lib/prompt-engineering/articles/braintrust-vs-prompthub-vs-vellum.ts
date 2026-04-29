// Braintrust vs PromptHub vs Vellum vs Promptfoo comparison
// Slug: braintrust-vs-prompthub-vs-vellum-vs-promptfoo
// Generated: 2026-04-29

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    theme: 'Tools & Platforms',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    seoTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    intro: '**Four tools dominate prompt management for teams: Braintrust for output evaluation, PromptHub for version control, Vellum for production A/B testing, and Promptfoo for CI/CD regression prevention. This comparison ranks them on collaboration features, testing capability, pricing, and team fit.**',
    metaDescription: 'Braintrust excels at eval ($500/mo), Vellum at production A/B testing ($200/mo), Promptfoo at free CI/CD, PromptHub at version control. Head-to-head on 5 criteria.',
    ogTitle: 'Which Wins: Braintrust, Vellum, PromptHub, or Promptfoo?',
    ogDescription: 'Braintrust scores outputs. Vellum splits production traffic. Promptfoo is free. PromptHub is simplest. Decision matrix inside.',
    twitterTitle: 'Braintrust vs Vellum vs PromptHub vs Promptfoo (2026)',
    twitterDescription: 'Most teams need 2 of these 4 tools — not all 4. Spending on all wastes $700+/mo. Quick decision matrix by team type.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-29',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Prompt engineers and engineering managers choosing a prompt management stack',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Prompt Management', 'LLM Evaluation', 'Prompt Versioning'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'What Do These 4 Tools Actually Do?', anchor: '#what-is' },
      { label: 'How We Compared These Tools', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: Best for Output Quality Scoring?', anchor: '#braintrust' },
      { label: 'PromptHub: Best for Prompt Version Control?', anchor: '#prompthub' },
      { label: 'Vellum: Best for Production A/B Testing?', anchor: '#vellum' },
      { label: 'Promptfoo: Best Free CI/CD Option?', anchor: '#promptfoo' },
      { label: 'PromptQuorum: Cross-Model Comparison Before Optimization', anchor: '#promptquorum' },
      { label: 'Head-to-Head: All 4 Tools Compared', anchor: '#comparison-table' },
      { label: 'Which Tool Fits Your Team?', anchor: '#which-tool' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'How to Choose Between These 4 Tools', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust leads on evaluation depth: custom scoring functions, shared experiment dashboards, ~$500/month. Best for teams measuring output quality systematically.',
          'Vellum leads on production A/B testing: splits real user traffic between variants, approval workflows, $200–500/month. Best for live LLM features.',
          'Promptfoo is the free alternative: open-source CLI, YAML-based test suites, GitHub Actions integration. Best for DevOps/platform teams.',
          'PromptHub focuses on version control and team sharing. Simplest to onboard; least expensive ($50–200/month). Best for content and marketing teams.',
          'Most teams need exactly 2 tools: one for evaluation (Braintrust or Promptfoo) and one for deployment (Vellum or PromptHub). Buying all 4 wastes $700+/month.',
          'No single tool excels at all five criteria: collaboration, A/B testing, evaluation scoring, CI/CD integration, and transparent pricing.',
          'PromptQuorum: Before optimizing for any one tool, use PromptQuorum to compare how your prompt performs across 25+ models simultaneously.',
        ],
      },
      whatIs: {
        id: 'what-is',
        title: 'What Do These 4 Tools Actually Do?',
        content: [
          '**Braintrust, PromptHub, Vellum, and Promptfoo solve different prompt team problems.** Braintrust is an evaluation platform (score outputs). PromptHub is a version control system (organize and share prompts). Vellum is a deployment platform with A/B testing (run experiments on real traffic). Promptfoo is a test automation tool (catch regressions in CI/CD). They overlap but do not replace each other.',
          'The reason teams struggle to pick one: all four claim to "optimize prompts," but they optimize at different stages. Braintrust optimizes by measuring; Vellum optimizes by splitting traffic; Promptfoo optimizes by catching regressions; PromptHub optimizes by organizing. A team might use Braintrust to discover a better prompt, Promptfoo to test it in CI/CD, and Vellum to deploy it.',
          'This guide is a head-to-head comparison of four specific tools. For a broader ranking of all prompt engineering tools, see [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026). For team optimization features including DSPy and Helicone, see [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
      },
      evaluationCriteria: {
        id: 'evaluation-criteria',
        title: 'How We Compared These Tools',
        content: [
          '**We evaluated the four tools against five criteria that matter in real team workflows: how well they support team collaboration, whether they include A/B testing or experimentation, scoring or evaluation capabilities, CI/CD integration, and pricing transparency.**',
        ],
        columns: ['Criterion', 'What It Measures', 'Why It Matters'],
        rows: [
          {
            Criterion: 'Team collaboration',
            'What It Measures': 'Role-based access, branching, shared dashboards',
            'Why It Matters': 'Multiple engineers must edit prompts without overwriting each other',
          },
          {
            Criterion: 'A/B testing',
            'What It Measures': 'Side-by-side variant comparison, traffic splitting',
            'Why It Matters': 'Compare variants on the same input set or production traffic',
          },
          {
            Criterion: 'Evaluation/scoring',
            'What It Measures': 'Custom metrics, LLM-based scorers, quality gates',
            'Why It Matters': 'Measure output quality, not just look at outputs visually',
          },
          {
            Criterion: 'CI/CD integration',
            'What It Measures': 'CLI, API, GitHub Actions, automated testing',
            'Why It Matters': 'Catch regressions before deployment; automate quality checks',
          },
          {
            Criterion: 'Pricing transparency',
            'What It Measures': 'Public pricing page, clear per-unit costs',
            'Why It Matters': 'Budget predictability for 3–10 person teams',
          },
        ],
      },
      braintrust: {
        id: 'braintrust',
        title: 'Braintrust: Best for Output Quality Scoring?',
        content: [
          '**Braintrust is an AI evaluation platform that logs every API call, scores outputs with custom metrics, and runs A/B experiments in a shared lab — best for teams that measure output quality systematically.** Braintrust is not a prompt builder or version control system; it is a shared evaluation laboratory.',
          'Team plan ~$500/month. The logging proxy integrates with OpenAI, Anthropic, and Google APIs without code changes. You define custom scoring functions in TypeScript or Python. GitHub integration lets you version prompts alongside code. Tradeoff: requires engineering expertise to design and maintain scoring functions; overkill if your team is not yet evaluating quality.',
          'Best team features: shared experiment dashboards (all members see eval results in real time), role-based access (admin/member/viewer), git-like commit history for prompts, and production logging (every API call logged with inputs, outputs, and scores).',
        ],
        items: [
          'Shared experiment dashboards: all team members see eval results live',
          'Role-based access: admin/member/viewer roles',
          'Prompt versioning via git-like commit history',
          'Production logging: every API call logged with inputs/outputs/scores',
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: Best for Prompt Version Control?',
        content: [
          '**PromptHub is a prompt version control and sharing platform — teams store prompts in a central library, tag versions, and share across the organization without juggling spreadsheets or Slack messages.** Simplest to onboard of the four.',
          'Starter ~$50/month; Pro ~$200/month. Web UI for non-technical users. Version history for each prompt, tags for organization, deployment workflows. Supports OpenAI, Anthropic, and custom APIs. Tradeoff: no custom evaluation scoring; limited to built-in quality checks; not suitable for teams running live A/B experiments.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: Best for Production A/B Testing?',
        content: [
          '**Vellum is a prompt deployment platform with built-in A/B testing that splits real production traffic between prompt variants and measures real-world output quality — best for teams running live LLM features.** Vellum is a control plane, not a testing tool.',
          'Starter $200/month; Growth $500/month; Enterprise custom. Routes production traffic by percentage between variants. Evaluation compares variants on test datasets. Team features: shared workspace, PR-style prompt reviews, deployment approval workflows. Tradeoff: most expensive option; overkill for pre-production teams or teams not yet handling real user traffic.',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: Best Free CI/CD Option?',
        content: [
          '**Promptfoo is an open-source CLI tool that runs automated prompt test suites against multiple LLMs — teams integrate it into CI/CD pipelines to catch prompt regressions before deployment.** Free (MIT license). Define test cases in YAML, commit to Git, and Promptfoo runs them on every PR.',
          'Supports 40+ LLM providers. GitHub Actions integration available. You provide inputs, expected output patterns, and custom LLM-based assertions. Team-friendly: test configs committed to Git, run in CI, no account or monthly bills. Tradeoff: no UI; engineers only; no built-in collaboration features beyond Git.',
        ],
        codeBlock: `prompts:
  - "Summarize in 3 bullets: {{text}}"
providers:
  - openai:gpt-5.5
  - anthropic:claude-opus-4-7
tests:
  - vars:
      text: "Long document..."
    assert:
      - type: contains
        value: "•"
      - type: llm-rubric
        value: "Exactly 3 bullets"`,
        codeLanguage: 'yaml',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: Cross-Model Comparison Before Optimization',
        content: [
          '**Before committing to Braintrust, Vellum, PromptHub, or Promptfoo for a specific LLM provider, use PromptQuorum to dispatch one prompt to 25+ models simultaneously and see which performs best — a model-agnostic first step.** Free tier available.',
          'Unlike the four tools above (which optimize for a single model at a time), PromptQuorum answers "which model handles this prompt best?" in one run. After you discover the optimal model with PromptQuorum, then route to Braintrust for deeper evaluation, Vellum for production A/B testing, or Promptfoo for CI/CD regression prevention.',
        ],
        items: [
          '25+ models including GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, and local models via Ollama and LM Studio',
          '9 built-in prompt frameworks — TRACE, CO-STAR, CRAFT, and more',
          'Side-by-side response comparison with consensus scoring',
          'Token count per model — see cost differences before committing',
          'Free tier — no engineering setup required',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Head-to-Head: All 4 Tools Compared',
        content: [
          '**No single tool excels on all five criteria. Braintrust leads on evaluation depth; Vellum leads on production traffic splitting; Promptfoo leads on free CI/CD; PromptHub leads on simplicity.**',
        ],
        columns: ['Tool', 'Primary Use', 'Collaboration', 'CI/CD', 'Pricing', 'Best For'],
        rows: [
          {
            Tool: 'Braintrust',
            'Primary Use': 'Output evaluation',
            Collaboration: '✅ Roles + dashboards',
            'CI/CD': '✓ API',
            Pricing: '~$500/mo',
            'Best For': 'Quality-focused teams',
          },
          {
            Tool: 'PromptHub',
            'Primary Use': 'Version control',
            Collaboration: '✅ Team workspace',
            'CI/CD': '✗ None',
            Pricing: '$50–200/mo',
            'Best For': 'Content teams',
          },
          {
            Tool: 'Vellum',
            'Primary Use': 'Production A/B',
            Collaboration: '✅ PR reviews',
            'CI/CD': '✓ Webhooks',
            Pricing: '$200–500/mo',
            'Best For': 'Live features',
          },
          {
            Tool: 'Promptfoo',
            'Primary Use': 'CI/CD testing',
            Collaboration: 'Git-based',
            'CI/CD': '✅ GitHub Actions',
            Pricing: 'Free',
            'Best For': 'DevOps teams',
          },
          {
            Tool: 'PromptQuorum',
            'Primary Use': 'Cross-model comparison',
            Collaboration: '✓ Shared workspace',
            'CI/CD': '✗ None',
            Pricing: 'Free + credits',
            'Best For': 'Model selection',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Which Tool Fits Your Team?',
        content: [
          '**Match the tool to your team\'s primary bottleneck and technical depth.**',
        ],
        numberedItems: [
          {
            title: 'Engineering teams with quality concerns → Braintrust',
            whyItMatters: 'Design custom scoring functions; run repeatable evaluations; measure impact of prompt changes.',
          },
          {
            title: 'Content/marketing teams needing version control → PromptHub',
            whyItMatters: 'Simple web UI; no code required; centralized prompt library.',
          },
          {
            title: 'Product teams with live LLM features → Vellum',
            whyItMatters: 'A/B test on real traffic; approval workflows; measure real-world impact.',
          },
          {
            title: 'DevOps/platform teams preventing regressions → Promptfoo',
            whyItMatters: 'Free; YAML-based; integrates with GitHub; catches regressions in CI.',
          },
          {
            title: 'All teams (first step) → PromptQuorum',
            whyItMatters: 'Benchmark your prompt across 25+ models before committing to optimize for one provider.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes',
        mistakes: [
          {
            mistake: 'Buying all four tools to cover all bases',
            problem: 'Total spend reaches $1,000+/month; you maintain four systems; team confusion about which tool to use for what.',
            fix: 'Pick two: one for evaluation (Braintrust or Promptfoo) and one for deployment (Vellum or PromptHub). Add PromptQuorum as a free first step.',
          },
          {
            mistake: 'Choosing a tool by brand reputation instead of workflow fit',
            problem: 'You buy Braintrust but your team is non-technical and cannot write scoring functions; or you buy PromptHub when your actual bottleneck is measuring quality.',
            fix: 'Identify your primary bottleneck first (evaluation, versioning, A/B testing, regression prevention) before evaluating tools.',
          },
          {
            mistake: 'Adopting a tool without building an evaluation dataset',
            problem: 'You sign up for Braintrust or Vellum but have no labeled input/output pairs to score against. Tools sit unused; you see no ROI.',
            fix: 'Build a test set of 20–50 labeled examples before paying for any platform.',
          },
          {
            mistake: 'Using Vellum without a quality metric',
            problem: 'You A/B test two prompts on production traffic but have not defined "good output." Sales variant gets routed to users; no one can explain why.',
            fix: 'Define 3–5 quality criteria and implement them as assertions (in Promptfoo) or custom scorers (in Braintrust) before running A/B tests.',
          },
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'How to Choose Between These 4 Tools',
        numberedItems: [
          'Identify your primary bottleneck: is it output quality, cost, latency, or team velocity?',
          'Assess technical depth: non-technical team → PromptHub; mixed → Braintrust + Vellum; engineering-heavy → Promptfoo.',
          'Build a labeled evaluation dataset (20–50 input/output pairs) before evaluating any paid tool.',
          'Start with one free tool (Promptfoo or PromptQuorum) to establish baseline metrics.',
          'Run a 2-week trial with the team\'s actual prompts before committing to a SaaS platform.',
          'Plan for two tools: one for evaluation and one for deployment/versioning.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is the main difference between Braintrust and PromptHub?',
            a: 'Braintrust is an evaluation platform: you log API calls, define custom scoring functions, and run A/B experiments to measure output quality. PromptHub is a version control system: you store prompts in a library, tag versions, and share across the team. Use Braintrust when your bottleneck is measuring quality; use PromptHub when your bottleneck is organizing prompts.',
          },
          {
            q: 'Is Promptfoo really free?',
            a: 'Yes. Promptfoo is open-source (MIT license) and has no paid tier. You run it as a CLI tool on your own infrastructure or in GitHub Actions. There are no monthly fees, API call limits, or freemium restrictions.',
          },
          {
            q: 'Should I choose Braintrust or Vellum?',
            a: 'Choose Braintrust if your primary goal is measuring and improving output quality with custom metrics. Choose Vellum if your primary goal is A/B testing on real production traffic. Braintrust works best pre-production; Vellum works best with live users.',
          },
          {
            q: 'How much more expensive is Vellum than Braintrust?',
            a: 'Braintrust Team plan is ~$500/month. Vellum Starter is $200/month; Growth is $500/month. Vellum can become more expensive as your API call volume increases. Promptfoo is free; PromptHub is $50–200/month.',
          },
          {
            q: 'How do I integrate Promptfoo with GitHub Actions?',
            a: 'Promptfoo provides a GitHub Actions template. Define your test cases in YAML, commit the config to Git, and use the official promptfoo-github-action in your workflow file. On every PR, Promptfoo runs your tests against all configured models and reports pass/fail status.',
          },
          {
            q: 'Can PromptHub replace Braintrust?',
            a: 'No. PromptHub stores and versions prompts. Braintrust evaluates and scores prompts. You can use PromptHub alone if your only need is organizing prompts; you cannot use it alone if you need to measure output quality or run experiments.',
          },
          {
            q: 'Is Vellum the same as a prompt management platform?',
            a: 'No. Vellum is a deployment and A/B testing platform. It does include basic version control, but its primary strength is splitting production traffic between prompt variants and measuring real-world impact. True prompt management tools (PromptHub) focus on organizing and sharing prompts, not testing.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Prompt Optimization Tools for Teams: 2026 Rankings](/prompt-engineering/best-prompt-optimization-tools-for-teams) — compares seven tools including Helicone and DSPy',
          '[How to Evaluate Prompt Quality Systematically](/prompt-engineering/how-to-evaluate-prompt-quality) — frameworks for measuring outputs',
          '[Manual vs Automated Prompt Optimization](/prompt-engineering/manual-vs-automated-prompt-optimization) — when to hand-tune vs automate',
          '[Prompt Evaluation Metrics: Accuracy, Relevance, Latency](/prompt-engineering/prompt-evaluation-metrics) — specific quality metrics for LLMs',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — official documentation; basis for scoring function, experiment dashboard, and ~$500/month Team plan claims',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — product homepage; basis for version control, web UI, and $50–200/month pricing claims',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — product overview and pricing page; basis for traffic splitting, approval workflow, and $200–500/month claims',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub repository and documentation; basis for MIT license, YAML config, and GitHub Actions integration claims',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — multi-model comparison tool; basis for 25+ model dispatch and cross-model comparison claims',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
      description: 'Braintrust excels at eval ($500/mo), Vellum at production A/B testing ($200/mo), Promptfoo at free CI/CD, PromptHub at version control. Head-to-head on 5 criteria.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-29',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      inLanguage: 'en',
      about: [
        { '@type': 'Thing', name: 'Prompt Management' },
        { '@type': 'Thing', name: 'LLM Evaluation' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptHub' },
        { '@type': 'SoftwareApplication', name: 'Vellum' },
        { '@type': 'SoftwareApplication', name: 'Promptfoo' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the main difference between Braintrust and PromptHub?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust is an evaluation platform: you log API calls, define custom scoring functions, and run A/B experiments to measure output quality. PromptHub is a version control system: you store prompts in a library, tag versions, and share across the team. Use Braintrust when your bottleneck is measuring quality; use PromptHub when your bottleneck is organizing prompts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Promptfoo really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Promptfoo is open-source (MIT license) and has no paid tier. You run it as a CLI tool on your own infrastructure or in GitHub Actions. There are no monthly fees, API call limits, or freemium restrictions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I choose Braintrust or Vellum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choose Braintrust if your primary goal is measuring and improving output quality with custom metrics. Choose Vellum if your primary goal is A/B testing on real production traffic. Braintrust works best pre-production; Vellum works best with live users.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much more expensive is Vellum than Braintrust?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust Team plan is ~$500/month. Vellum Starter is $200/month; Growth is $500/month. Vellum can become more expensive as your API call volume increases. Promptfoo is free; PromptHub is $50–200/month.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I integrate Promptfoo with GitHub Actions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Promptfoo provides a GitHub Actions template. Define your test cases in YAML, commit the config to Git, and use the official promptfoo-github-action in your workflow file. On every PR, Promptfoo runs your tests against all configured models and reports pass/fail status.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can PromptHub replace Braintrust?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. PromptHub stores and versions prompts. Braintrust evaluates and scores prompts. You can use PromptHub alone if your only need is organizing prompts; you cannot use it alone if you need to measure output quality or run experiments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Vellum the same as a prompt management platform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Vellum is a deployment and A/B testing platform. It does include basic version control, but its primary strength is splitting production traffic between prompt variants and measuring real-world impact. True prompt management tools (PromptHub) focus on organizing and sharing prompts, not testing.',
          },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Braintrust vs PromptHub vs Vellum vs Promptfoo Comparison',
      numberOfItems: 5,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Braintrust',
          description: 'AI evaluation platform with collaborative scoring and experiment logging. Team plan ~$500/month. Best for teams measuring output quality.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'PromptHub',
          description: 'Prompt version control and team sharing platform. Simplest onboarding; $50–200/month. Best for content and marketing teams.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Vellum',
          description: 'Production A/B testing platform with traffic splitting and approval workflows. Starter $200/month. Best for live LLM features.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Promptfoo',
          description: 'Free open-source CLI for automated prompt regression testing in CI/CD pipelines. Best for DevOps and platform teams.',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'PromptQuorum',
          description: 'Cross-model comparison platform that dispatches one prompt to 25+ models simultaneously. Free tier available. Best for selecting optimal model before optimization.',
        },
      ],
      inLanguage: 'en',
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Choose Between Braintrust, PromptHub, Vellum, and Promptfoo',
      inLanguage: 'en',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identify your primary bottleneck',
          text: 'Is it output quality, cost, latency, or team velocity?',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Assess technical depth',
          text: 'Non-technical team → PromptHub; mixed → Braintrust + Vellum; engineering-heavy → Promptfoo.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Build evaluation dataset',
          text: 'Create 20–50 labeled input/output pairs before evaluating any paid tool.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Start with a free tool',
          text: 'Run Promptfoo or PromptQuorum first to establish baseline metrics.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Plan a two-tool stack',
          text: 'One for evaluation (Braintrust or Promptfoo) and one for deployment (Vellum or PromptHub).',
        },
      ],
    },
  },
  de: {
    theme: 'Tools & Plattformen',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    seoTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    metaDescription: 'Braintrust für Evaluierung (500 €/Mo), Vellum für Production A/B-Tests (200–500 €/Mo), Promptfoo kostenlos für CI/CD, PromptHub für Versionskontrolle. Vergleich auf 5 Kriterien.',
    ogTitle: 'Welcher gewinnt: Braintrust, Vellum, PromptHub oder Promptfoo?',
    ogDescription: 'Braintrust bewertet Ausgaben. Vellum teilt Production-Traffic. Promptfoo ist kostenlos. PromptHub ist am einfachsten. Entscheidungsmatrix inbegriffen.',
    twitterTitle: 'Braintrust vs Vellum vs PromptHub vs Promptfoo (2026)',
    twitterDescription: 'Die meisten Teams brauchen 2 dieser 4 Tools — nicht alle 4. Die Ausgabe für alle 4 verschwendet 700+ €/Mo. Schnelle Entscheidungsmatrix nach Team-Typ.',
    intro: 'Braintrust, PromptHub, Vellum und Promptfoo sind die vier führenden Plattformen für Prompt-Management und LLM-Evaluierung. Aber welche sollten Sie tatsächlich verwenden? Dieser Vergleich untersucht ihre Stärken, Schwächen und idealen Use-Cases — basierend auf Dokumentation, Preisgestaltung und Benutzer-Feedback.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-29',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Prompt-Engineers und Engineering Manager, die einen Prompt-Management-Stack auswählen',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Prompt-Management', 'LLM-Evaluierung', 'Prompt-Versionskontrolle'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Was machen diese 4 Tools tatsächlich?', anchor: '#what-is' },
      { label: 'Wie haben wir diese Tools verglichen?', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: Am besten für Qualitätsbewertung von Ausgaben?', anchor: '#braintrust' },
      { label: 'PromptHub: Am besten für Prompt-Versionskontrolle?', anchor: '#prompthub' },
      { label: 'Vellum: Am besten für Production A/B-Tests?', anchor: '#vellum' },
      { label: 'Promptfoo: Die beste kostenlose CI/CD-Option?', anchor: '#promptfoo' },
      { label: 'PromptQuorum: Modellvergleich vor Optimierung', anchor: '#promptquorum' },
      { label: 'Head-to-Head: Alle 4 Tools im Vergleich', anchor: '#comparison-table' },
      { label: 'Welches Tool passt zu Ihrem Team?', anchor: '#which-tool' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Wie man zwischen diesen 4 Tools wählt', anchor: '#how-to-choose' },
      { label: 'Im DACH-Kontext', anchor: '#im-dach-kontext' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
      { label: 'Quellen', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': {
        isTldr: true,
        items: [
          'Braintrust eignet sich am besten für detaillierte Evaluierung und Scoring — teuer (500 €/Mo), aber mit umfangreicher Experimentieren-Infrastruktur.',
          'Vellum ist beste Wahl für Production Deployment mit A/B-Tests — 200–500 €/Mo, mit Traffic-Splitting und Approval-Workflows.',
          'Promptfoo ist die einzige kostenlose Option mit CI/CD-Integration — ideal für Regressions-Tests in GitHub Actions, aber ohne Production-Features.',
          'PromptHub passt Teams, die Versionskontrolle und kollaboratives Prompt-Management wollen — 50–200 €/Mo, am einfachsten zu verwenden.',
          'PromptQuorum antwortet zuerst auf die Frage „welches Modell?" mit Vergleich über 25+ Modelle — nutzen Sie es, bevor Sie sich auf eines dieser vier festlegen.',
          'Die meisten Teams brauchen 2 Tools, nicht alle 4: Braintrust + Vellum für umfassende Bewertung + Production, ODER Promptfoo + PromptHub für Budget-bewusste Teams.',
          'Integrationen: Alle vier unterstützen GitHub, aber Braintrust hat die beste API, Vellum hat die besten Webhooks, Promptfoo ist am einfachsten lokal zu deployen.',
        ],
      },
      'what-is': {
        title: 'Was machen diese 4 Tools tatsächlich?',
        content: [
          'Diese vier Tools sind nicht austauschbar — sie lösen unterschiedliche Probleme in Ihrem LLM-Workflow:',
          '**Braintrust** ist ein Evaluierungs- und Experiment-Framework. Sie geben Prompts ein, erhalten Ausgaben, und Braintrust hilft Ihnen, sie zu bewerten (manuell oder automatisiert mit eigenen Scoring-Funktionen). Es ist am stärksten in der Messung von Qualität durch strukturierte Experimente.',
          '**PromptHub** ist eine Versionskontrolle für Prompts — denken Sie an GitHub, aber für Prompts. Sie speichern Prompt-Versionen, vergleichen Änderungen, rollback bei Bedarf. Es ist einfach und sauber, aber bietet keine Evaluierung oder Production-Deployment.',
          '**Vellum** ist ein Production-Deployment-Tool mit eingebautem A/B-Testing. Sie bauen einen Prompt, splitten den Traffic (50/50 zwischen zwei Versionen), beobachten Metriken (Latenz, Feedback, Cost), und promovieren die Gewinner-Version.',
          '**Promptfoo** ist ein Open-Source-Framework für lokales Prompt-Testing und CI/CD-Integration. Sie schreiben ein YAML-Config, führen Tests lokal oder in GitHub Actions aus, und erhalten Reports über Regressions. Es ist kostenlos, läuft überall, aber ist nicht für Production-Traffic-Splitting ausgelegt.',
          'Diese Anleitung ist ein Head-to-Head-Vergleich von vier spezifischen Tools. Für eine umfassendere Rangliste aller Prompt-Engineering-Tools siehe [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=de). Für Team-Optimierungs-Features einschließlich DSPy und Helicone siehe [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=de).',
        ],
      },
      'evaluation-criteria': {
        title: 'Wie haben wir diese Tools verglichen?',
        content: ['Wir haben diese vier Tools auf fünf Kriterien bewertet, die für die meisten Teams wichtig sind:'],
        columns: ['Kriterium', 'Gewicht', 'Definition'],
        rows: [
          {
            'Kriterium': 'Evaluierungs-Features',
            'Gewicht': '25 %',
            'Definition': 'Kann das Tool Ausgaben bewerten, Experimente ausführen, und Trends verfolgen? Können Sie benutzerdefinierte Scoring-Funktionen schreiben?',
          },
          {
            'Kriterium': 'Production-Readiness',
            'Gewicht': '25 %',
            'Definition': 'Kann das Tool live Traffic handhaben? Unterstützt es A/B-Tests, Routing, und Canary-Deployments?',
          },
          {
            'Kriterium': 'Versionskontrolle & Zusammenarbeit',
            'Gewicht': '20 %',
            'Definition': 'Können Teams Prompt-Versionen speichern, Änderungen vergleichen, und zusammen an Prompts arbeiten?',
          },
          {
            'Kriterium': 'CI/CD & Automatisierung',
            'Gewicht': '15 %',
            'Definition': 'Integriert sich das Tool mit GitHub Actions, GitLab CI oder anderen CI/CD-Systemen? Können Sie Tests automatisieren?',
          },
          {
            'Kriterium': 'Preis & Komplexität',
            'Gewicht': '15 %',
            'Definition': 'Was kostet es? Wie lange dauert es, bis es läuft? Benötigt es Engineering-Setup oder ist es out-of-the-box nutzbar?',
          },
        ],
      },
      'braintrust': {
        title: 'Braintrust: Am besten für Qualitätsbewertung von Ausgaben?',
        content: [
          '**Was:** Braintrust ist eine Evaluierungs- und Experiment-Plattform. Sie senden Ausgaben an Braintrust, definieren Metriken (Genauigkeit, Latenz, Cost, benutzerdefiniert), und Braintrust zeigt Ihnen, wie verschiedene Prompt-Versionen abschneiden. Sie können auch automatische Bewerter (LLM-basiert) definieren.',
          '**Stärken:** Braintrust hat die stärkste Experiment-Infrastruktur. Sie können mehrere Prompt-Versionen testen, konfigurierbare Scoring-Funktionen schreiben, und Ergebnisse über Zeit hinweg verfolgen. Das Dashboard ist detailliert. Die API ist gut dokumentiert.',
          '**Schwächen:** Braintrust ist teuer (ca. 500 €/Mo für Teams) und bietet keine Production-Deployment-Features. Es ist ein Evaluierungs-Tool, nicht ein Production-Tool. Sie müssen die beste Prompt manuell in Ihre App übernehmen oder mit Vellum kombinieren.',
        ],
        items: [
          'Automatische Bewerter mit LLM (z.B. „Ist die Antwort sachlich korrekt?")',
          'Experiment-Dashboard mit Signifikanz-Tests',
          'Custom Scoring-Funktionen (JavaScript oder Python)',
          'Historische Versionsanpassung (rollback, trend-Analyse)',
        ],
      },
      'prompthub': {
        title: 'PromptHub: Am besten für Prompt-Versionskontrolle?',
        content: [
          '**Was:** PromptHub ist GitHub für Prompts. Sie speichern eine Prompt-Version, ändern sie später, und PromptHub speichert die Diff. Sie können frühere Versionen abrufen, Änderungen durchsuchen, und mehrere Prompts in einem Workspace verwalten.',
          '**Stärken:** PromptHub ist einfach und günstiger (50–200 €/Mo). Die Web-UI ist leicht zu bedienen. Es ist ideal für Teams, die Versionskontrolle und Zusammenarbeit wollen, ohne komplexe Infrastruktur.',
          '**Schwächen:** PromptHub bietet keine Evaluierung oder Messung an. Sie können nicht testen, welche Prompt-Version besser ist — Sie müssen das manuell tun oder ein separates Evaluierungs-Tool verwenden. Es gibt auch keine Production-Deployment-Unterstützung.',
        ],
      },
      'vellum': {
        title: 'Vellum: Am besten für Production A/B-Tests?',
        content: [
          '**Was:** Vellum ist ein Production-Deployment-Tool mit A/B-Testing. Sie schreiben einen Prompt in Vellums Web-Editor oder API, deployen ihn, und können den Traffic zwischen zwei Versionen (50/50 oder benutzerdefiniert) aufteilen. Vellum verfolgt Metriken (Latenz, Fehler, Kosten) und zeigt Ihnen, welche Version besser ist.',
          '**Stärken:** Vellum ist Production-focused. A/B-Tests sind eingebaut. Es unterstützt Approval-Workflows, Canary-Deployments, und Webhooks. Die Integrationen mit LLM-APIs sind nahtlos. Für Teams, die live Traffic-Splitting testen wollen, ist Vellum das beste Tool.',
          '**Schwächen:** Vellum ist teurer (200–500 €/Mo). Es ist nicht für Offline-Evaluierung ausgelegt — Sie testen in Production, nicht lokal. Es braucht etwas Engineering-Setup. Vellum ist auch nicht open-source.',
        ],
      },
      'promptfoo': {
        title: 'Promptfoo: Die beste kostenlose CI/CD-Option?',
        content: [
          '**Was:** Promptfoo ist ein Open-Source-Prompt-Testing-Framework. Sie schreiben Test-Cases in YAML oder JSON (Prompts + erwartete Ausgaben), führen Tests lokal aus, und Promptfoo zeigt Ihnen Regressions. Es integriert sich mit GitHub Actions für CI/CD.',
          '**Stärken:** Promptfoo ist kostenlos (MIT-Lizenz) und Open-Source. Es läuft lokal — keine Cloud, keine Authentifizierung erforderlich. Die YAML-Config ist einfach zu schreiben. GitHub Actions-Integration ist gut. Große Community.',
          '**Schwächen:** Promptfoo ist nicht für Production-Traffic-Splitting oder Versionskontrolle gedacht. Es ist ein Regressions-Test-Tool, nicht ein Deployment-Tool. Für Production A/B-Tests müssen Sie es mit Vellum kombinieren. Auto-Bewerter sind begrenzt (LLM-Rubrics sind neu).',
        ],
      },
      'promptfoo-yaml': {
        title: 'Promptfoo YAML-Beispiel',
        codeBlock: `providers:
  - openai:gpt-5.5

tests:
  - description: "Anfrage klassifizieren"
    vars:
      question: "Ist dies ein Bug-Report?"
      context: "Der Nutzer beschwert sich über einen Fehler in der Auth."
    assert:
      - type: "contains"
        value: "Bug"
      - type: "cost"
        threshold: 0.01

  - description: "Halluzination vermeiden"
    vars:
      input: "Nennen Sie 5 Features von xyz."
    assert:
      - type: "not-contains"
        value: "Das Tool unterstützt X" # nicht in der Dokumentation
`,
        codeLanguage: 'yaml',
      },
      'promptquorum': {
        title: 'PromptQuorum: Modellvergleich vor Optimierung',
        content: [
          '**Bevor Sie sich auf Braintrust, Vellum, PromptHub oder Promptfoo für einen bestimmten LLM-Anbieter festlegen, verwenden Sie PromptQuorum, um einen Prompt an 25+ Modelle gleichzeitig zu verteilen und zu sehen, welches am besten abschneidet — ein modellunabhängiger erster Schritt.** Kostenlose Stufe verfügbar.',
          'Im Gegensatz zu den vier Tools oben (die jeweils ein Modell optimieren) antwortet PromptQuorum auf die Frage „welches Modell behandelt diesen Prompt am besten?" in einem Durchgang. Nachdem Sie das optimale Modell mit PromptQuorum entdeckt haben, dann leiten Sie an Braintrust für tiefere Evaluierung, Vellum für Production A/B-Tests, oder Promptfoo für CI/CD-Regressions-Vermeidung weiter.',
        ],
        items: [
          '25+ Modelle einschließlich GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, und lokale Modelle über Ollama und LM Studio',
          '9 integrierte Prompt-Frameworks — TRACE, CO-STAR, CRAFT und mehr',
          'Nebeneinander-Vergleich von Antworten mit Consensus-Scoring',
          'Token-Anzahl pro Modell — sehen Sie Kostenunterschiede, bevor Sie sich festlegen',
          'Kostenlose Stufe — kein Engineering-Setup erforderlich',
        ],
      },
      'comparison-table': {
        title: 'Head-to-Head: Alle 4 Tools im Vergleich',
        content: ['Zusammenfassung aller 5 Tools auf den Kriterien aus Abschnitt 2:'],
        columns: ['Tool', 'Primäre Nutzung', 'Zusammenarbeit', 'CI/CD', 'Preisgestaltung', 'Am besten für'],
        rows: [
          {
            'Tool': 'Braintrust',
            'Primäre Nutzung': 'Evaluierung + Experimente',
            'Zusammenarbeit': '✓ Workspace freigeben',
            'CI/CD': '✓ API-Integrationen',
            'Preisgestaltung': '~500 €/Mo',
            'Am besten für': 'Detaillierte Bewertung',
          },
          {
            'Tool': 'PromptHub',
            'Primäre Nutzung': 'Versionskontrolle',
            'Zusammenarbeit': '✓ Web-UI Kollab',
            'CI/CD': '✗ Keine',
            'Preisgestaltung': '50–200 €/Mo',
            'Am besten für': 'Team-Zusammenarbeit',
          },
          {
            'Tool': 'Vellum',
            'Primäre Nutzung': 'Production A/B-Tests',
            'Zusammenarbeit': '✓ Workspace-Zugriff',
            'CI/CD': '✗ Keine',
            'Preisgestaltung': '200–500 €/Mo',
            'Am besten für': 'Live-Traffic-Tests',
          },
          {
            'Tool': 'Promptfoo',
            'Primäre Nutzung': 'CI/CD Regressions',
            'Zusammenarbeit': '✗ Keine (lokal)',
            'CI/CD': '✓ GitHub Actions',
            'Preisgestaltung': 'Kostenlos (OSS)',
            'Am besten für': 'Budget-bewusst',
          },
          {
            'Tool': 'PromptQuorum',
            'Primäre Nutzung': 'Modellvergleich',
            'Zusammenarbeit': '✓ Gemeinsamer Workspace',
            'CI/CD': '✗ Keine',
            'Preisgestaltung': 'Kostenlos + Credits',
            'Am besten für': 'Modellauswahl',
          },
        ],
      },
      'which-tool': {
        title: 'Welches Tool passt zu Ihrem Team?',
        content: ['Die Antwort hängt von Ihrem Workflow ab. Hier sind fünf häufige Szenarien:'],
        numberedItems: [
          {
            title: 'Wir wollen nur Regressions vermeiden',
            whyItMatters: 'Promptfoo. Es ist kostenlos, läuft lokal, und GitHub Actions-Integration ist eingebaut. Für kleine Teams ist das alles, was Sie brauchen.',
          },
          {
            title: 'Wir bauen Production-Systeme mit Live A/B-Tests',
            whyItMatters: 'Vellum + PromptQuorum. Verwenden Sie PromptQuorum zunächst, um das beste Modell zu finden, dann deployen Sie in Vellum für Traffic-Splitting und Feedback-Loops.',
          },
          {
            title: 'Wir haben eine große Prompt-Bibliothek und brauchen Versionskontrolle',
            whyItMatters: 'PromptHub. Es ist einfach zu verwenden, günstig, und designed für Team-Zusammenarbeit. Kombinieren Sie es mit Promptfoo für CI/CD.',
          },
          {
            title: 'Wir brauchen tiefe Evaluierung mit benutzerdefinierten Metriken',
            whyItMatters: 'Braintrust. Das Dashboard und die automatischen Bewerter sind unübertroffen. Es ist teuer, aber für Data-Science-Teams wert die Investition.',
          },
          {
            title: 'Wir sind uns nicht sicher, welches Modell oder Framework wir verwenden sollen',
            whyItMatters: 'PromptQuorum zuerst. Vergleichen Sie Ihre Prompt über 25+ Modelle und Frameworks. Nachdem Sie entschieden haben, deployen Sie dann mit den obigen Tools.',
          },
        ],
      },
      'common-mistakes': {
        title: 'Häufige Fehler',
        mistakes: [
          {
            mistake: 'Alle vier Tools zusammen kaufen',
            problem: 'Das kostet über 700 €/Mo und schafft Redundanz. Sie werden Braintrust UND Vellum nicht vollständig nutzen.',
            fix: 'Wählen Sie 2 Tools, die zu Ihrem Workflow passen. Die meisten Teams brauchen Braintrust + Vellum ODER Promptfoo + PromptHub.',
          },
          {
            mistake: 'Mit Evaluierung starten, Production vergessen',
            problem: 'Braintrust zeigt Ihnen, welche Prompt die beste ist, aber Sie müssen sie manuell deployen. Es gibt keinen "Deploy-Button".',
            fix: 'Kombinieren Sie Braintrust mit Vellum oder manueller Bereitstellung. Evaluierung ohne Deployment ist sinnlos.',
          },
          {
            mistake: 'Promptfoo nur lokal verwenden',
            problem: 'Promptfoo ist großartig für lokales Testing, aber wenn Sie nur lokal testen, sehen Sie nicht die Production-Latenz, Kosten, oder echte Fehler.',
            fix: 'Verwenden Sie Promptfoo für Regressions-Tests in CI/CD, dann deployen Sie in Production mit Vellum oder Ihrer eigenen Infrastruktur.',
          },
          {
            mistake: 'Das Modell wählen, bevor Sie Prompt-Engineering machen',
            problem: 'Sie können mit Claude Opus anfangen, aber GPT-5.5 könnte besser sein — Sie wissen es nicht, bis Sie testen.',
            fix: 'Verwenden Sie PromptQuorum zunächst, um über mehrere Modelle zu vergleichen. Dann optimieren Sie mit Braintrust oder Promptfoo für das beste Modell.',
          },
        ],
      },
      'how-to-choose': {
        title: 'Wie man zwischen diesen 4 Tools wählt',
        numberedItems: [
          'Listen Sie die drei Main Pains Ihres Teams auf: (a) Evaluierung, (b) Versionskontrolle, (c) Production-Deployment.',
          'Für jede Pain, wählen Sie das beste Tool: Braintrust für (a), PromptHub für (b), Vellum für (c).',
          'Wenn Ihre Pain ist "Wir wissen nicht, welches Modell", beginnen Sie mit PromptQuorum.',
          'Wenn Ihre Pain ist "Wir haben kein Budget", wählen Sie Promptfoo für CI/CD und PromptHub für Versionskontrolle.',
          'Kaufen Sie nie mehr als 2 Tools. Vier Tools ist immer zu viel.',
          'Planen Sie eine Kosten-Baseline für 90 Tage, dann evaluieren Sie, welches Tool den besten ROI hat.',
        ],
      },
      'im-dach-kontext': {
        title: 'Im DACH-Kontext',
        content: [
          'Für Organisationen in Deutschland, Österreich und der Schweiz gibt es zusätzliche Überlegungen bei der Auswahl eines Prompt-Management-Tools.',
          '**DSGVO und Datenverarbeitung:** Wenn Sie Kundendaten oder sensible Informationen verarbeiten, müssen Sie sicherstellen, dass Ihr Tool DSGVO-konform ist (Artikel 28 — Datenverarbeitungsverträge). Braintrust und Vellum bieten DataProcessing Agreements (DPA). PromptHub und Promptfoo haben geringere Anforderungen, wenn Sie lokal arbeiten. Stellen Sie sicher, dass Sie einen DPA unterzeichnet haben, bevor Sie Kundendaten hochladen.',
          '**BSI-Grundschutz-Kataloge:** Wenn Sie in einem stark regulierten Sektor arbeiten (Finanzen, Gesundheit, öffentliche Verwaltung), sollte Ihr Tool den BSI-Grundschutz-Katalogen entsprechen. Lokale Tools wie Promptfoo (lokal auf Ihrem Server) erfüllen diese Anforderung einfacher. Cloud-Tools wie Braintrust benötigen explizite Sicherheitszertifikate.',
          '**Mittelstand und KMU:** Für deutsche Mittelständler empfehlen wir: Beginnen Sie mit PromptQuorum (kostenlos) für Modellauswahl, dann Promptfoo für CI/CD (kostenlos, lokal) und PromptHub für Versionskontrolle (günstiger als Braintrust). Diese Kombination kostet unter 200 €/Mo und erfüllt die meisten Anforderungen. Wechseln Sie zu Braintrust oder Vellum nur, wenn Sie Production-Scale erreichen.',
        ],
      },
      'faq': {
        title: 'FAQ',
        faqs: [
          {
            q: 'Was ist der Hauptunterschied zwischen Braintrust und PromptHub?',
            a: 'Braintrust ist für Evaluierung und Experimente. PromptHub ist für Versionskontrolle. Braintrust antwortet auf „Welche Prompt ist am besten?" PromptHub antwortet auf „Welche Version habe ich vorher verwendet?" Sie können beide zusammen verwenden.',
          },
          {
            q: 'Ist Promptfoo wirklich kostenlos?',
            a: 'Ja, Promptfoo ist Open-Source (MIT-Lizenz) und vollständig kostenlos. Sie können es lokal oder auf Ihrem Server ausführen. Die einzigen Kosten sind Ihre eigenen API-Aufrufe zu OpenAI, Anthropic, etc.',
          },
          {
            q: 'Sollte ich Braintrust oder Vellum wählen?',
            a: 'Braintrust ist für Evaluierung (Sie wissen nicht, welche Prompt besser ist). Vellum ist für Production (Sie wissen nicht, welcher Split-Traffic am besten ist). Sie sind unterschiedlich — ideal ist beides zusammen.',
          },
          {
            q: 'Wie viel teurer ist Vellum als Braintrust?',
            a: 'Braintrust kostet ~500 €/Mo. Vellum kostet 200–500 €/Mo je nach Volumen. Also: Vellum kann gleich teuer oder günstiger sein, je nachdem, wie viel Production-Traffic Sie haben.',
          },
          {
            q: 'Wie integriere ich Promptfoo mit GitHub Actions?',
            a: 'Erstellen Sie eine `.github/workflows/test.yml` Datei, die `npx promptfoo eval` aufruft. Promptfoo liest Ihre YAML-Tests, führt sie aus, und zeigt Regressions. GitHub Actions wird automatisch bei jedem Push ausgelöst.',
          },
          {
            q: 'Kann PromptHub Braintrust ersetzen?',
            a: 'Nein. PromptHub speichert Versionen. Braintrust bewertet Qualität. PromptHub kann nicht messen, welche Version besser ist. Aber Sie können beide zusammen verwenden.',
          },
          {
            q: 'Ist Vellum dasselbe wie eine Prompt-Management-Plattform?',
            a: 'Nein, Vellum ist ein Production-Deployment-Tool, nicht Versionskontrolle. Wenn Sie nur Prompts speichern möchten, verwenden Sie PromptHub. Vellum ist für Live A/B-Tests mit echtem Traffic.',
          },
          {
            q: 'Muss ich bei der Verwendung von Braintrust, Vellum, PromptHub oder Promptfoo die DSGVO beachten?',
            a: 'Ja, wenn Sie Kundendaten verarbeiten. Braintrust und Vellum bieten Datenverarbeitungsverträge (DPA). Promptfoo (lokal) und PromptHub (mit DPA) erfüllen DSGVO-Anforderungen, wenn Sie einen Vertrag unterzeichnen. Stellen Sie sicher, dass Sie ein DPA haben, bevor Sie Kundendaten hochladen.',
          },
          {
            q: 'Sind diese Tools für den deutschen Mittelstand geeignet?',
            a: 'Ja, besonders Promptfoo (kostenlos, lokal) und PromptHub (günstig, einfach). Für größere Mittelstände ist Vellum eine gute Production-Wahl. Braintrust ist eher für große Unternehmen. Beginnen Sie mit Promptfoo und skalieren Sie je nachdem.',
          },
        ],
      },
      'related-reading': {
        title: 'Weiterführende Literatur',
        items: [
          '[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=de) — Größere Rangliste aller Prompt-Tools einschließlich Braintrust, PromptHub, Vellum, Promptfoo und 20+ weiteren',
          '[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=de) — Team-fokussierte Optimierung mit DSPy, Helicone, OpenAI Evals',
          '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality?lang=de) — Metriken und Frameworks für Prompt-Bewertung',
          '[Prompt Evaluation Metrics](/prompt-engineering/prompt-evaluation-metrics?lang=de) — Tiefe in Accuracy, Latenz, Cost, Relevance und Custom Metrics',
        ],
      },
      'sources': {
        title: 'Quellen',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — Offizielle Dokumentation; Basis für Scoring-Funktion, Experiment-Dashboard und ~500 €/Mo Team-Plan-Ansprüche',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — Produkt-Homepage; Basis für Versionskontrolle, Web-UI und 50–200 €/Mo Preisgestaltung-Ansprüche',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — Produkt-Übersicht und Preisgestaltungs-Seite; Basis für Traffic-Splitting, Approval-Workflow und 200–500 €/Mo Ansprüche',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub-Repository und Dokumentation; Basis für MIT-Lizenz, YAML-Config und GitHub-Actions-Integration Ansprüche',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — Multi-Modell-Vergleich-Tool; Basis für 25+ Modell-Verteilung und Cross-Modell-Vergleich Ansprüche',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
      description: 'Braintrust für Evaluierung, Vellum für Production A/B-Tests, Promptfoo kostenlos für CI/CD, PromptHub für Versionskontrolle. Vergleich auf 5 Kriterien.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-29',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=de',
      inLanguage: 'de',
      about: [
        { '@type': 'Thing', 'name': 'Braintrust' },
        { '@type': 'Thing', 'name': 'PromptHub' },
        { '@type': 'Thing', 'name': 'Vellum' },
        { '@type': 'Thing', 'name': 'Promptfoo' },
        { '@type': 'Thing', 'name': 'PromptQuorum' },
        { '@type': 'Thing', 'name': 'LLM-Evaluierung' },
      ],
      speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist der Hauptunterschied zwischen Braintrust und PromptHub?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust ist für Evaluierung und Experimente. PromptHub ist für Versionskontrolle. Braintrust antwortet auf „Welche Prompt ist am besten?" PromptHub antwortet auf „Welche Version habe ich vorher verwendet?" Sie können beide zusammen verwenden.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist Promptfoo wirklich kostenlos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, Promptfoo ist Open-Source (MIT-Lizenz) und vollständig kostenlos. Sie können es lokal oder auf Ihrem Server ausführen. Die einzigen Kosten sind Ihre eigenen API-Aufrufe zu OpenAI, Anthropic, etc.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sollte ich Braintrust oder Vellum wählen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust ist für Evaluierung (Sie wissen nicht, welche Prompt besser ist). Vellum ist für Production (Sie wissen nicht, welcher Split-Traffic am besten ist). Sie sind unterschiedlich — ideal ist beides zusammen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie viel teurer ist Vellum als Braintrust?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust kostet ~500 €/Mo. Vellum kostet 200–500 €/Mo je nach Volumen. Also: Vellum kann gleich teuer oder günstiger sein, je nachdem, wie viel Production-Traffic Sie haben.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wie integriere ich Promptfoo mit GitHub Actions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Erstellen Sie eine `.github/workflows/test.yml` Datei, die `npx promptfoo eval` aufruft. Promptfoo liest Ihre YAML-Tests, führt sie aus, und zeigt Regressions. GitHub Actions wird automatisch bei jedem Push ausgelöst.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kann PromptHub Braintrust ersetzen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein. PromptHub speichert Versionen. Braintrust bewertet Qualität. PromptHub kann nicht messen, welche Version besser ist. Aber Sie können beide zusammen verwenden.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ist Vellum dasselbe wie eine Prompt-Management-Plattform?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nein, Vellum ist ein Production-Deployment-Tool, nicht Versionskontrolle. Wenn Sie nur Prompts speichern möchten, verwenden Sie PromptHub. Vellum ist für Live A/B-Tests mit echtem Traffic.',
          },
        },
        {
          '@type': 'Question',
          name: 'Muss ich bei der Verwendung von Braintrust, Vellum, PromptHub oder Promptfoo die DSGVO beachten?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, wenn Sie Kundendaten verarbeiten. Braintrust und Vellum bieten Datenverarbeitungsverträge (DPA). Promptfoo (lokal) und PromptHub (mit DPA) erfüllen DSGVO-Anforderungen, wenn Sie einen Vertrag unterzeichnen. Stellen Sie sicher, dass Sie ein DPA haben, bevor Sie Kundendaten hochladen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Sind diese Tools für den deutschen Mittelstand geeignet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, besonders Promptfoo (kostenlos, lokal) und PromptHub (günstig, einfach). Für größere Mittelstände ist Vellum eine gute Production-Wahl. Braintrust ist eher für große Unternehmen. Beginnen Sie mit Promptfoo und skalieren Sie je nachdem.',
          },
        },
      ],
      inLanguage: 'de',
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt-Management Tools (Vergleich)',
      inLanguage: 'de',
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=de',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'Evaluierung und Experimente mit detaillierten Metriken und automatischen Bewertern' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Versionskontrolle für Prompts mit Team-Zusammenarbeit' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'Production A/B-Testing mit Live-Traffic-Splitting' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Open-Source Regressions-Testing mit GitHub Actions Integration' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Cross-Modell-Vergleich über 25+ Modelle für Modellauswahl' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Wie man zwischen Braintrust, PromptHub, Vellum und Promptfoo wählt',
      inLanguage: 'de',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Ihre Hauptprobleme identifizieren',
          text: 'Listen Sie die drei Main Pains Ihres Teams auf: (a) Evaluierung, (b) Versionskontrolle, (c) Production-Deployment.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Das beste Tool für jede Pain wählen',
          text: 'Braintrust für (a), PromptHub für (b), Vellum für (c). Wenn Ihre Pain ist „Wir wissen nicht, welches Modell", beginnen Sie mit PromptQuorum.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Maximal 2 Tools wählen',
          text: 'Kombinieren Sie zwei Tools, die zu Ihrem Workflow passen. Vier Tools ist immer zu viel und kostet über 700 €/Mo.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Eine Baseline-Kosten für 90 Tage planen',
          text: 'Evaluieren Sie nach 90 Tagen, welches Tool den besten ROI hat, und skalieren Sie entsprechend.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Bei Bedarf kombinieren oder wechseln',
          text: 'Wenn Sie Production-Scale erreichen, können Sie zu Braintrust oder Vellum wechseln. Für kleine Teams bleibt Promptfoo + PromptHub optimal.',
        },
      ],
    },
  },
  fr: {
    theme: 'Tools & Platforms',
    title: 'Comparaison',
    seoTitle: 'Comparaison',
    metaDescription: 'Comparaison',
    intro: '[Translation coming soon](/prompt-engineering/best-prompt-optimization-tools-teams?lang=en).',
    publishDate: '2026-04-10',
    readTime: '9 min',
    educationalLevel: 'Intermediate',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    sections: {},
  },
  ja: {
    theme: 'Tools & Platforms',
    title: '比較',
    seoTitle: '比較',
    metaDescription: '比較',
    intro: '[Translation coming soon](/prompt-engineering/best-prompt-optimization-tools-teams?lang=en).',
    publishDate: '2026-04-10',
    readTime: '9 min',
    educationalLevel: 'Intermediate',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    sections: {},
  },
  zh: {
    theme: 'Tools & Platforms',
    title: '对比',
    seoTitle: '对比',
    metaDescription: '对比',
    intro: '[Translation coming soon](/prompt-engineering/best-prompt-optimization-tools-teams?lang=en).',
    publishDate: '2026-04-10',
    readTime: '9 min',
    educationalLevel: 'Intermediate',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    sections: {},
  },
};
