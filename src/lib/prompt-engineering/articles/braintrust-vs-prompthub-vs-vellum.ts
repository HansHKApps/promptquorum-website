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
    theme: 'Outils & Plateformes',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    seoTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    metaDescription: 'Braintrust pour l\'évaluation (500 €/mois), Vellum pour tests A/B en production (200–500 €/mois), Promptfoo gratuit pour CI/CD, PromptHub pour contrôle de version. Comparaison sur 5 critères.',
    ogTitle: 'Quel gagnant : Braintrust, Vellum, PromptHub ou Promptfoo ?',
    ogDescription: 'Braintrust évalue les résultats. Vellum divise le trafic production. Promptfoo gratuit. PromptHub le plus simple. Matrice décisionnelle incluse.',
    twitterTitle: 'Braintrust vs Vellum vs PromptHub vs Promptfoo (2026)',
    twitterDescription: 'La plupart des équipes ont besoin de 2 de ces 4 outils — pas tous. Dépenser pour tous gaspille 700+ €/mois. Matrice rapide par type d\'équipe.',
    intro: 'Braintrust, PromptHub, Vellum et Promptfoo sont les quatre plateformes leaders pour la gestion des prompts et l\'évaluation des LLM. Mais lequel choisir ? Ce guide compare leurs forces, faiblesses et cas d\'usage idéaux — basé sur la documentation, tarification et retours utilisateurs.',
    publishDate: '2026-04-10',
    dateModified: '2026-04-29',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Ingénieurs prompts et managers d\'engineering choisissant une stack de gestion de prompts',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Gestion des prompts', 'Évaluation d\'IA', 'Versioning de prompts'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Que font réellement ces 4 outils ?', anchor: '#what-is' },
      { label: 'Comment avons-nous comparé ces outils ?', anchor: '#evaluation-criteria' },
      { label: 'Braintrust : Meilleur pour l\'évaluation qualité ?', anchor: '#braintrust' },
      { label: 'PromptHub : Meilleur pour le versioning ?', anchor: '#prompthub' },
      { label: 'Vellum : Meilleur pour les tests A/B ?', anchor: '#vellum' },
      { label: 'Promptfoo : Meilleure option CI/CD gratuite ?', anchor: '#promptfoo' },
      { label: 'PromptQuorum : Comparaison modèles avant optimisation', anchor: '#promptquorum' },
      { label: 'Face à face : Tous les 4 outils comparés', anchor: '#comparison-table' },
      { label: 'Quel outil convient à votre équipe ?', anchor: '#which-tool' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Comment choisir entre ces 4 outils', anchor: '#how-to-choose' },
      { label: 'Considérations pour utilisateurs francophones', anchor: '#considerations-francophones' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
      { label: 'Sources', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': {
        isTldr: true,
        items: [
          'Braintrust excelle en évaluation détaillée et scoring — cher (500 €/mois), mais infrastructure d\'expérimentation puissante.',
          'Vellum idéal pour le déploiement production avec tests A/B — 200–500 €/mois, trafic-splitting et workflows d\'approbation.',
          'Promptfoo seule option gratuite avec intégration CI/CD — parfait pour tests de régression GitHub Actions, pas de features production.',
          'PromptHub pour équipes voulant versioning et collaboration — 50–200 €/mois, le plus simple à utiliser.',
          'PromptQuorum répond d\'abord « quel modèle ? » via comparaison 25+ modèles — utilisez-le avant de choisir ces quatre.',
          'La plupart des équipes ont besoin de 2 outils, pas 4 : Braintrust + Vellum pour évaluation complète + production, OU Promptfoo + PromptHub budget-conscious.',
          'Intégrations : tous quatre supportent GitHub, mais Braintrust a la meilleure API, Vellum les meilleurs webhooks, Promptfoo le plus facile en local.',
        ],
      },
      'what-is': {
        title: 'Que font réellement ces 4 outils ?',
        content: [
          'Ces quatre outils résolvent des problèmes différents dans votre workflow LLM :',
          '**Braintrust** est une plateforme d\'évaluation et d\'expérimentation. Vous soumettez des prompts, obtenez des résultats, et Braintrust aide à les évaluer (manuel ou auto avec scoring custom). Excellence en mesure qualité via expériences structurées.',
          '**PromptHub** est un contrôle de version pour prompts — pensez GitHub mais prompts. Versionnez, comparez changements, rollback. Simple et épuré, sans évaluation ni déploiement production.',
          '**Vellum** outil déploiement production avec tests A/B natifs. Écrivez prompt, divisez trafic (50/50), mesurez métriques, promovez gagnant.',
          '**Promptfoo** framework open-source tests locaux et CI/CD. Config YAML, tests locaux ou GitHub Actions, rapports régression. Gratuit, partout, pas pour trafic production-splitting.',
          'Ce guide compare quatre outils spécifiques. Pour classement plus large outils prompt-engineering, voir [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=fr). Pour features optimisation équipe incluant DSPy et Helicone, voir [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=fr).',
        ],
      },
      'evaluation-criteria': {
        title: 'Comment avons-nous comparé ces outils ?',
        content: ['Nous avons évalué ces quatre outils sur cinq critères importants pour la plupart des équipes :'],
        columns: ['Critère', 'Poids', 'Définition'],
        rows: [
          {
            'Critère': 'Features d\'évaluation',
            'Poids': '25 %',
            'Définition': 'L\'outil évalue-t-il résultats, exécute expériences, suit tendances ? Pouvez-vous écrire fonctions scoring custom ?',
          },
          {
            'Critère': 'Production-Readiness',
            'Poids': '25 %',
            'Définition': 'L\'outil gère-t-il trafic live ? Supporte A/B-tests, routing, canary-deployments ?',
          },
          {
            'Critère': 'Versioning & Collaboration',
            'Poids': '20 %',
            'Définition': 'Équipes peuvent-elles sauvegarder versions prompts, comparer changements, collaborer ?',
          },
          {
            'Critère': 'CI/CD & Automation',
            'Poids': '15 %',
            'Définition': 'S\'intègre-t-il GitHub Actions, GitLab CI ? Automatisez tests ?',
          },
          {
            'Critère': 'Prix & Complexité',
            'Poids': '15 %',
            'Définition': 'Quel coût ? Temps mise en place ? Setup engineering ou out-of-the-box ?',
          },
        ],
      },
      'braintrust': {
        title: 'Braintrust : Meilleur pour l\'évaluation qualité ?',
        content: [
          '**Quoi :** Plateforme évaluation et expérimentation. Soumettez résultats, définissez métriques (accuracy, latency, cost, custom), voyez performances. Auto-évaluateurs LLM possibles.',
          '**Forces :** Infrastructure expérimentation la plus puissante. Testez versions multiples, scoring custom, historique long terme. Dashboard détaillé. API bien documentée.',
          '**Faiblesses :** Cher (500 €/mois environ) sans features déploiement production. Tool évaluation, pas production. Copiez prompt manually en app ou combinez Vellum.',
        ],
        items: [
          'Auto-évaluateurs LLM (ex: « réponse factuellement correcte ? »)',
          'Dashboard expérimentation tests significativité',
          'Fonctions scoring custom (JavaScript, Python)',
          'Historique versions (rollback, analyse trends)',
        ],
      },
      'prompthub': {
        title: 'PromptHub : Meilleur pour le versioning ?',
        content: [
          '**Quoi :** GitHub pour prompts. Sauvegardez version, modifiez après, PromptHub enregistre diff. Récupérez anciennes versions, cherchez changements, multiprojet workspace.',
          '**Forces :** Simple et moins cher (50–200 €/mois). Web UI facile. Idéal équipes voulant versioning collaboration sans infra complexe.',
          '**Faiblesses :** Pas d\'évaluation mesure. Lequel meilleur version ? Vous manuellement ou outil séparé. Pas déploiement production.',
        ],
      },
      'vellum': {
        title: 'Vellum : Meilleur pour les tests A/B ?',
        content: [
          '**Quoi :** Tool déploiement production avec A/B-tests natifs. Écrivez prompt, divisez trafic (50/50 ou custom), mesurez métriques (latency, feedback, costs), promovez gagnant.',
          '**Forces :** Production-focused. A/B tests intégrés. Workflows approbation, canary-deployments, webhooks. Intégrations LLM-APIs seamless. Meilleur pour trafic live-splitting.',
          '**Faiblesses :** Plus cher (200–500 €/mois). Non pour évaluation offline — testez production pas local. Setup engineering. Pas open-source.',
        ],
      },
      'promptfoo': {
        title: 'Promptfoo : Meilleure option CI/CD gratuite ?',
        content: [
          '**Quoi :** Framework open-source tests prompts locaux et CI/CD. Config YAML/JSON (prompts + résultats attendus), tests locaux, rapports régression. GitHub Actions native.',
          '**Forces :** Gratuit (MIT) open-source. Local — pas cloud, pas auth. Config YAML simple. GitHub Actions excellent. Communauté grande.',
          '**Faiblesses :** Non trafic-splitting production ni versioning. Tool test régression, pas déploiement. Combinez Vellum A/B tests. Auto-évaluateurs limités.',
        ],
      },
      'promptfoo-yaml': {
        title: 'Promptfoo exemple YAML',
        codeBlock: `providers:
  - openai:gpt-5.5

tests:
  - description: "Classifier query"
    vars:
      question: "Is this a bug report?"
      context: "User complains about auth error."
    assert:
      - type: "contains"
        value: "Bug"
      - type: "cost"
        threshold: 0.01

  - description: "Avoid hallucination"
    vars:
      input: "List 5 features of xyz."
    assert:
      - type: "not-contains"
        value: "Tool supports X" # not in docs
`,
        codeLanguage: 'yaml',
      },
      'promptquorum': {
        title: 'PromptQuorum : Comparaison modèles avant optimisation',
        content: [
          '**Avant Braintrust, Vellum, PromptHub ou Promptfoo pour provider LLM spécifique, utilisez PromptQuorum dispatcher prompt à 25+ modèles simultanément voir lequel performe — étape agnostique-modèle d\'abord.** Tier gratuit disponible.',
          'Contrairement quatre outils (chacun optimise un modèle), PromptQuorum répond « quel modèle ? » en un passage. Après découvrir modèle optimal PromptQuorum, routez Braintrust évaluation approfondie, Vellum A/B tests production, Promptfoo régression CI/CD.',
        ],
        items: [
          '25+ modèles incluant GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro, locaux via Ollama et LM Studio',
          '9 frameworks prompts intégrés — TRACE, CO-STAR, CRAFT et plus',
          'Comparaison réponses côte-à-côte avec consensus-scoring',
          'Token-count par modèle — voyez différences coûts avant engagement',
          'Tier gratuit — aucun setup engineering requis',
        ],
      },
      'comparison-table': {
        title: 'Face à face : Tous les 4 outils comparés',
        content: ['Synthèse cinq outils sur critères section 2 :'],
        columns: ['Outil', 'Usage primaire', 'Collaboration', 'CI/CD', 'Prix', 'Meilleur pour'],
        rows: [
          {
            'Outil': 'Braintrust',
            'Usage primaire': 'Évaluation + expériences',
            'Collaboration': '✓ Workspace partage',
            'CI/CD': '✓ Intégrations API',
            'Prix': '~500 €/mois',
            'Meilleur pour': 'Évaluation détaillée',
          },
          {
            'Outil': 'PromptHub',
            'Usage primaire': 'Versioning',
            'Collaboration': '✓ Web UI collab',
            'CI/CD': '✗ Aucun',
            'Prix': '50–200 €/mois',
            'Meilleur pour': 'Collab équipe',
          },
          {
            'Outil': 'Vellum',
            'Usage primaire': 'A/B tests production',
            'Collaboration': '✓ Workspace access',
            'CI/CD': '✗ Aucun',
            'Prix': '200–500 €/mois',
            'Meilleur pour': 'Tests trafic live',
          },
          {
            'Outil': 'Promptfoo',
            'Usage primaire': 'Régression CI/CD',
            'Collaboration': '✗ Aucun (local)',
            'CI/CD': '✓ GitHub Actions',
            'Prix': 'Gratuit (OSS)',
            'Meilleur pour': 'Budget-conscious',
          },
          {
            'Outil': 'PromptQuorum',
            'Usage primaire': 'Comparaison modèles',
            'Collaboration': '✓ Workspace partagé',
            'CI/CD': '✗ Aucun',
            'Prix': 'Gratuit + crédits',
            'Meilleur pour': 'Sélection modèle',
          },
        ],
      },
      'which-tool': {
        title: 'Quel outil convient à votre équipe ?',
        content: ['Réponse dépend workflow. Cinq scénarios communs :'],
        numberedItems: [
          {
            title: 'Nous voulons juste éviter régressions',
            whyItMatters: 'Promptfoo. Gratuit, local, GitHub Actions natif. Tout ce qu\'il faut petites équipes.',
          },
          {
            title: 'Nous construisons systèmes production avec A/B tests live',
            whyItMatters: 'Vellum + PromptQuorum. PromptQuorum d\'abord meilleur modèle, puis Vellum traffic-splitting et feedback-loops.',
          },
          {
            title: 'Nous avons grande librairie prompts, besoin versioning',
            whyItMatters: 'PromptHub. Simple utiliser, pas cher, conçu collab équipe. Combinez Promptfoo CI/CD.',
          },
          {
            title: 'Nous avons besoin évaluation approfondie métriques custom',
            whyItMatters: 'Braintrust. Dashboard et auto-évaluateurs inégalés. Cher mais vaut Data-Science équipes.',
          },
          {
            title: 'Incertain quel modèle ou framework utiliser',
            whyItMatters: 'PromptQuorum d\'abord. Comparez prompt 25+ modèles et frameworks. Puis déployez outils ci-dessus.',
          },
        ],
      },
      'common-mistakes': {
        title: 'Erreurs courantes',
        mistakes: [
          {
            mistake: 'Acheter quatre outils ensemble',
            problem: 'Coûte 700+ €/mois, redondance. Braintrust ET Vellum pas utilisés à 100 %.',
            fix: 'Choisissez 2 tools fit votre workflow. Plupart équipes ont besoin Braintrust + Vellum OU Promptfoo + PromptHub.',
          },
          {
            mistake: 'Commencer évaluation, oublier déploiement',
            problem: 'Braintrust montre meilleure prompt mais faut copier manuellement app. Pas "Deploy button".',
            fix: 'Combinez Braintrust avec Vellum ou déploiement manuel. Évaluation sans déploiement inutile.',
          },
          {
            mistake: 'Promptfoo uniquement local',
            problem: 'Super tests local, mais voyez pas latency production, coûts, erreurs réels.',
            fix: 'Promptfoo tests régression CI/CD, puis déployez production Vellum ou infra perso.',
          },
          {
            mistake: 'Choisir modèle avant prompt-engineering',
            problem: 'Démarrez Claude Opus mais GPT-5.5 peut mieux — saurez pas sans tester.',
            fix: 'PromptQuorum d\'abord, comparez modèles multiples. Puis optimisez Braintrust ou Promptfoo meilleur modèle.',
          },
        ],
      },
      'how-to-choose': {
        title: 'Comment choisir entre ces 4 outils',
        numberedItems: [
          'Listez trois main pains équipe : (a) évaluation, (b) versioning, (c) déploiement production.',
          'Pour chaque pain, choisissez meilleur tool : Braintrust (a), PromptHub (b), Vellum (c).',
          'Si pain est « savons pas quel modèle », commencez PromptQuorum.',
          'Si pain est « pas budget », choisissez Promptfoo CI/CD et PromptHub versioning.',
          'Jamais 2+ tools. Quatre tools toujours trop.',
          'Planifiez coût baseline 90 jours, évaluez quel tool meilleur ROI.',
        ],
      },
      'considerations-francophones': {
        title: 'Considérations pour utilisateurs francophones',
        content: [
          'Pour organisations francophones, considérations supplémentaires lors choix tool prompt-management.',
          '**CNIL et données sensibles :** Si vous traitez données clients ou informations sensibles (financières, médicales, légales), assurez-vous tool conforme recommandations CNIL pour IA locale. CNIL recommande IA locale pour données sensibles professionnelles. Braintrust et Vellum offrent contrats traitement données. Promptfoo (local) et PromptHub satisfont CNIL si contrat signé.',
          '**Conformité données :** Pour données sensibles, outils locaux (Promptfoo sur serveur perso) plus simples conformité. Cloud tools (Braintrust, Vellum) nécessitent certifications sécurité explicites et contrats traitement données.',
          '**Recommandation :** Pour équipes françaises : commencez PromptQuorum (gratuit) sélection modèle, puis Promptfoo (gratuit, local) régression CI/CD et PromptHub (moins cher) versioning. Combo <200 €/mois respecte CNIL. Migrez Braintrust ou Vellum seulement scale production atteint.',
        ],
      },
      'faq': {
        title: 'FAQ',
        faqs: [
          {
            q: 'Différence principale Braintrust et PromptHub ?',
            a: 'Braintrust pour évaluation et expériences. PromptHub pour versioning. Braintrust répond « quelle prompt meilleure ? » PromptHub « version utilisée avant ? » Combinez les deux.',
          },
          {
            q: 'Promptfoo vraiment gratuit ?',
            a: 'Oui, Promptfoo open-source (MIT) totalement gratuit. Local ou serveur perso. Seuls coûts : appels API vos services OpenAI, Anthropic, etc.',
          },
          {
            q: 'Choisir Braintrust ou Vellum ?',
            a: 'Braintrust pour évaluation (savez pas quelle prompt meilleure). Vellum pour production (savez pas quel split-traffic meilleur). Différents — idéal les deux ensemble.',
          },
          {
            q: 'Vellum combien plus cher Braintrust ?',
            a: 'Braintrust ~500 €/mois. Vellum 200–500 €/mois volume. Vellum peut égal ou moins cher dépend trafic production.',
          },
          {
            q: 'Intégrer Promptfoo GitHub Actions ?',
            a: 'Créez `.github/workflows/test.yml` appelant `npx promptfoo eval`. Promptfoo lit tests YAML, exécute, montre régressions. Actions triggers automatiquement à push.',
          },
          {
            q: 'PromptHub remplacer Braintrust ?',
            a: 'Non. PromptHub stocke versions. Braintrust évalue qualité. PromptHub peut pas mesurer quelle version meilleure. Combinez.',
          },
          {
            q: 'Vellum outil management prompts identique ?',
            a: 'Non, Vellum outil déploiement production, pas versioning. Simplement stocker prompts ? Utilisez PromptHub. A/B tests trafic live ? Vellum.',
          },
        ],
      },
      'related-reading': {
        title: 'Lectures complémentaires',
        items: [
          '[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=fr) — Classement plus large tous outils prompts incluant Braintrust, PromptHub, Vellum, Promptfoo et 20+ autres',
          '[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=fr) — Optimisation équipe-focalisée DSPy, Helicone, OpenAI Evals',
          '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality?lang=fr) — Métriques et frameworks évaluation prompts',
          '[Prompt Evaluation Metrics](/prompt-engineering/prompt-evaluation-metrics?lang=fr) — Approfondissement accuracy, latency, cost, relevance et custom metrics',
        ],
      },
      'sources': {
        title: 'Sources',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — Documentation officielle ; base scoring-fonction, dashboard expérimentation, claims ~500 €/mois plan Team',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — Page produit ; base versioning, Web UI, claims tarification 50–200 €/mois',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — Aperçu produit et page tarification ; base traffic-splitting, workflow approbation, claims 200–500 €/mois',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — Repository GitHub et documentation ; base licence MIT, config YAML, intégration GitHub Actions claims',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — Multi-modèles comparaison tool ; base 25+ dispatching modèles et cross-modèle comparaison claims',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
      description: 'Braintrust pour évaluation, Vellum pour A/B tests production, Promptfoo gratuit CI/CD, PromptHub pour versioning. Comparaison 5 critères.',
      datePublished: '2026-04-10',
      dateModified: '2026-04-29',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=fr',
      inLanguage: 'fr',
      about: [
        { '@type': 'Thing', 'name': 'Braintrust' },
        { '@type': 'Thing', 'name': 'PromptHub' },
        { '@type': 'Thing', 'name': 'Vellum' },
        { '@type': 'Thing', 'name': 'Promptfoo' },
        { '@type': 'Thing', 'name': 'PromptQuorum' },
        { '@type': 'Thing', 'name': 'Évaluation LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Différence principale Braintrust et PromptHub ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust pour évaluation et expériences. PromptHub pour versioning. Braintrust répond « quelle prompt meilleure ? » PromptHub « version utilisée avant ? » Combinez les deux.',
          },
        },
        {
          '@type': 'Question',
          name: 'Promptfoo vraiment gratuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, Promptfoo open-source (MIT) totalement gratuit. Local ou serveur perso. Seuls coûts : appels API vos services OpenAI, Anthropic, etc.',
          },
        },
        {
          '@type': 'Question',
          name: 'Choisir Braintrust ou Vellum ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust pour évaluation (savez pas quelle prompt meilleure). Vellum pour production (savez pas quel split-traffic meilleur). Différents — idéal les deux ensemble.',
          },
        },
        {
          '@type': 'Question',
          name: 'Vellum combien plus cher Braintrust ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Braintrust ~500 €/mois. Vellum 200–500 €/mois volume. Vellum peut égal ou moins cher dépend trafic production.',
          },
        },
        {
          '@type': 'Question',
          name: 'Intégrer Promptfoo GitHub Actions ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Créez `.github/workflows/test.yml` appelant `npx promptfoo eval`. Promptfoo lit tests YAML, exécute, montre régressions. Actions triggers automatiquement à push.',
          },
        },
        {
          '@type': 'Question',
          name: 'PromptHub remplacer Braintrust ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. PromptHub stocke versions. Braintrust évalue qualité. PromptHub peut pas mesurer quelle version meilleure. Combinez.',
          },
        },
        {
          '@type': 'Question',
          name: 'Vellum outil management prompts identique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, Vellum outil déploiement production, pas versioning. Simplement stocker prompts ? Utilisez PromptHub. A/B tests trafic live ? Vellum.',
          },
        },
      ],
      inLanguage: 'fr',
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Outils gestion prompts (comparaison)',
      inLanguage: 'fr',
      url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=fr',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'Évaluation et expériences avec métriques détaillées et auto-évaluateurs' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Versioning prompts avec collaboration équipe' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'A/B tests production avec trafic-splitting live' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Tests régression open-source avec intégration GitHub Actions' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Comparaison cross-modèles 25+ pour sélection modèle' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment choisir entre Braintrust, PromptHub, Vellum et Promptfoo',
      inLanguage: 'fr',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Identifier pains principaux',
          text: 'Listez trois main pains équipe : (a) évaluation, (b) versioning, (c) déploiement production.',
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Meilleur tool pour chaque pain',
          text: 'Braintrust (a), PromptHub (b), Vellum (c). Pain « savons pas quel modèle » ? Commencez PromptQuorum.',
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Maximal 2 tools',
          text: 'Combinez deux outils fit votre workflow. Quatre outils toujours trop et coûtent 700+ €/mois.',
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Baseline coûts 90 jours',
          text: 'Évaluez après 90 jours quel tool meilleur ROI, puis scalez en conséquence.',
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Combiner ou basculer si nécessaire',
          text: 'Scale production ? Basculez Braintrust ou Vellum. Petites équipes ? Promptfoo + PromptHub optimal.',
        },
      ],
    },
  },
  ja: {
    theme: 'ツール & プラットフォーム',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    seoTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    metaDescription: 'Braintrust は評価に最適（月500€程度）、Vellum は本番 A/B テスト（月200～500€）、Promptfoo は無料 CI/CD、PromptHub はバージョン管理に最適。5つの基準での比較。',
    ogTitle: 'どれが勝つ？Braintrust、Vellum、PromptHub、それとも Promptfoo？',
    ogDescription: 'Braintrust は出力を評価。Vellum は本番トラフィックを分割。Promptfoo は無料。PromptHub が最もシンプル。意思決定マトリックス付き。',
    twitterTitle: 'Braintrust vs Vellum vs PromptHub vs Promptfoo (2026)',
    twitterDescription: 'ほとんどのチームは 4 つのうち 2 つだけが必要 — すべては不要。すべてに費用をかけると月700€以上の無駄。チームタイプ別クイックマトリックス。',
    intro: 'Braintrust、PromptHub、Vellum、Promptfoo は、プロンプト管理と LLM 評価の 4 つの主要プラットフォームです。しかし、実際にどれを選ぶべきでしょうか？このガイドは、ドキュメント、価格設定、ユーザーフィードバックに基づいて、それぞれの強み、弱み、理想的なユースケースを比較します。',
    publishDate: '2026-04-10',
    dateModified: '2026-04-29',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プロンプト最適化スタックを選択しているプロンプトエンジニアとエンジニアリングマネージャー',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['プロンプト管理', 'LLM 評価', 'プロンプトバージョニング'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'これら 4 つのツールは実際に何をしているのか？', anchor: '#what-is' },
      { label: 'どのようにこれらのツールを比較したのか？', anchor: '#evaluation-criteria' },
      { label: 'Braintrust：出力品質評価に最適？', anchor: '#braintrust' },
      { label: 'PromptHub：プロンプトバージョン管理に最適？', anchor: '#prompthub' },
      { label: 'Vellum：本番 A/B テストに最適？', anchor: '#vellum' },
      { label: 'Promptfoo：最高の無料 CI/CD オプション？', anchor: '#promptfoo' },
      { label: 'PromptQuorum：最適化前のモデル比較', anchor: '#promptquorum' },
      { label: '直接対決：すべての 4 つのツールを比較', anchor: '#comparison-table' },
      { label: 'あなたのチームに適したツールは？', anchor: '#which-tool' },
      { label: 'よくあるエラー', anchor: '#common-mistakes' },
      { label: 'これら 4 つのツール間での選択方法', anchor: '#how-to-choose' },
      { label: '日本ユーザーのための活用ポイント', anchor: '#japanese-context' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
      { label: 'ソース', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': { isTldr: true, items: ['Braintrust は詳細な評価とスコアリングに優れています — 高額（月500€程度）ですが、強力な実験インフラを備えています。', 'Vellum は本番デプロイメントと A/B テストに最適 — 月200～500€、トラフィック分割と承認ワークフロー付き。', 'Promptfoo は CI/CD 統合を備えた唯一の無料オプション — GitHub Actions での回帰テストに最適、本番機能なし。', 'PromptHub はバージョン管理と協調プロンプト管理を望むチームに適しています — 月50～200€、最も使いやすい。', 'PromptQuorum は最初に「どのモデル？」に答えます。25+ モデル比較経由 — これら 4 つに決める前に使用してください。', 'ほとんどのチームは 4 つではなく 2 つのツールが必要：包括的評価 + 本番には Braintrust + Vellum、または予算志向には Promptfoo + PromptHub。', 'インテグレーション：4 つすべてが GitHub をサポートします。ただし Braintrust が最高の API、Vellum が最高のウェブフック、Promptfoo がローカルで最も簡単です。'] },
      'what-is': { title: 'これら 4 つのツールは実際に何をしているのか？', content: ['これら 4 つのツールは、LLM ワークフロー内の異なる問題を解決します。', '**Braintrust** は評価と実験プラットフォーム。プロンプトを送信し、結果を取得します。Braintrust はそれらを評価するのに役立ちます（手動または独自のスコアリング関数を使用した自動）。構造化実験による品質測定に優れています。', '**PromptHub** はプロンプトのバージョン管理です — GitHub と考えてください、ただしプロンプト用。バージョンを保存し、変更を比較し、必要に応じてロールバック。シンプルで洗練されていますが、評価や本番デプロイメントはありません。', '**Vellum** は組み込み A/B テスト付きの本番デプロイメントツール。プロンプトを記述し、トラフィックを分割（50/50 またはカスタム）し、メトリクスを測定し、勝者をプロモート。', '**Promptfoo** はローカルプロンプトテストと CI/CD の統合用のオープンソースフレームワーク。YAML/JSON でテストケースを記述し、ローカルまたは GitHub Actions で実行し、回帰レポートを取得。無料、どこでも実行可能、本番トラフィック分割には不向き。', 'このガイドは 4 つの特定のツールを比較しています。より広範なプロンプトエンジニアリングツールのランキングについては、[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=ja) を参照。DSPy や Helicone を含むチーム最適化機能については、[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=ja) を参照。'] },
      'evaluation-criteria': { title: 'どのようにこれらのツールを比較したのか？', content: ['ほとんどのチームにとって重要な 5 つの基準でこれら 4 つのツールを評価しました：'], columns: ['基準', 'ウェイト', '定義'], rows: [{ '基準': '評価機能', 'ウェイト': '25%', '定義': 'ツールは出力を評価できますか？実験を実行できますか？トレンドを追跡できますか？カスタムスコアリング関数を記述できますか？' }, { '基準': '本番対応性', 'ウェイト': '25%', '定義': 'ツールはライブトラフィックを処理できますか？A/B テスト、ルーティング、カナリアデプロイメントをサポートしていますか？' }, { '基準': 'バージョン管理 & コラボレーション', 'ウェイト': '20%', '定義': 'チームはプロンプトバージョンを保存し、変更を比較し、プロンプトで協力できますか？' }, { '基準': 'CI/CD & オートメーション', 'ウェイト': '15%', '定義': 'GitHub Actions、GitLab CI などの CI/CD システムと統合されていますか？テストを自動化できますか？' }, { '基準': '価格 & 複雑性', 'ウェイト': '15%', '定義': 'コストはいくらですか？セットアップにはどのくらい時間がかかりますか？エンジニアリングセットアップが必要ですか、それともすぐに使用できますか？' }] },
      'braintrust': { title: 'Braintrust：出力品質評価に最適？', content: ['**何：** 評価と実験プラットフォーム。出力を送信し、メトリクスを定義し（精度、レイテンシ、コスト、カスタム）、パフォーマンスを確認。LLM ベースの自動評価も可能。', '**強み：** 最強の実験インフラ。複数のプロンプトバージョンをテストでき、カスタムスコアリング、長期履歴を追跡。ダッシュボードは詳細。API は十分に文書化されています。', '**弱み：** 高額（月500€程度）で、本番デプロイメント機能なし。評価ツール、本番ツールではない。ベストプロンプトをアプリに手動でコピーするか、Vellum と組み合わせる必要があります。'], items: ['LLM ベースの自動評価（例：「回答は事実的に正確ですか？」）', '有意性テスト付きの実験ダッシュボード', 'カスタムスコアリング関数（JavaScript または Python）', 'バージョン履歴（ロールバック、トレンド分析）'] },
      'prompthub': { title: 'PromptHub：プロンプトバージョン管理に最適？', content: ['**何：** プロンプト用の GitHub。バージョンを保存し、後で変更し、PromptHub が diff を記録。古いバージョンを取得でき、変更を検索し、複数のプロンプトをワークスペースで管理。', '**強み：** シンプルで安価（月50～200€）。Web UI は使いやすい。複雑なインフラなしで、バージョン管理とチーム協力を望むチームに最適。', '**弱み：** 評価や測定なし。どのプロンプトバージョンが優れているかを知る方法がない — 手動で行うか、別のツールを使用する必要があります。本番デプロイメント サポートなし。'] },
      'vellum': { title: 'Vellum：本番 A/B テストに最適？', content: ['**何：** ネイティブ A/B テスト付き本番デプロイメントツール。プロンプトを記述し、トラフィックを分割（50/50 またはカスタム）し、メトリクスを測定し（レイテンシ、フィードバック、コスト）、勝者をプロモート。', '**強み：** 本番指向。A/B テスト組み込み。承認ワークフロー、カナリアデプロイメント、ウェブフックをサポート。LLM API インテグレーション シームレス。ライブトラフィック分割テストに最適。', '**弱み：** より高額（月200～500€）。オフライン評価には不向き — 本番でテストし、ローカルではテストしません。エンジニアリングセットアップが必要。オープンソースではありません。'] },
      'promptfoo': { title: 'Promptfoo：最高の無料 CI/CD オプション？', content: ['**何：** ローカルプロンプトテストと CI/CD 統合用のオープンソースフレームワーク。YAML/JSON でテストケース（プロンプト + 期待される結果）を記述し、ローカルで実行し、回帰レポートを取得。GitHub Actions ネイティブ。', '**強み：** 無料（MIT）でオープンソース。ローカル — クラウドなし、認証なし。YAML 設定はシンプル。GitHub Actions 優れています。コミュニティ大きい。', '**弱み：** 本番トラフィック分割またはバージョン管理には不向き。回帰テストツール、デプロイメントツールではない。本番 A/B テストには Vellum と組み合わせる必要があります。自動評価は限定的。'] },
      'promptfoo-yaml': { title: 'Promptfoo YAML の例', codeBlock: `providers:\n  - openai:gpt-5.5\n\ntests:\n  - description: "クエリを分類"\n    vars:\n      question: "これはバグレポートですか？"\n      context: "ユーザーが認証エラーについて文句を言っています。"\n    assert:\n      - type: "contains"\n        value: "Bug"\n      - type: "cost"\n        threshold: 0.01\n\n  - description: "ハルシネーション回避"\n    vars:\n      input: "xyz の 5 つの機能をリストアップしてください。"\n    assert:\n      - type: "not-contains"\n        value: "ツールは X をサポート" # ドキュメントにない\n`, codeLanguage: 'yaml' },
      'promptquorum': { title: 'PromptQuorum：最適化前のモデル比較', content: ['**特定の LLM プロバイダーについて Braintrust、Vellum、PromptHub、Promptfoo に決める前に、PromptQuorum を使用してプロンプトを 25+ モデルに同時に送信し、どれが最高のパフォーマンスを発揮するかを確認してください — モデルに依存しない最初のステップ。** 無料ティア利用可能。', '上記の 4 つのツール（それぞれ 1 つのモデルを最適化）とは異なり、PromptQuorum は「どのモデルが適切か？」という質問に 1 パスで答えます。PromptQuorum で最適なモデルを発見した後、詳細評価には Braintrust、本番 A/B テストには Vellum、CI/CD 回帰防止には Promptfoo にルーティングします。'], items: ['GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro、Ollama と LM Studio 経由のローカルモデルを含む 25+ モデル', 'TRACE、CO-STAR、CRAFT など 9 つの組み込みプロンプトフレームワーク', 'コンセンサススコアリング付きの並べて表示される応答比較', 'モデルあたりのトークン数 — コミットする前にコスト差を確認', '無料ティア — エンジニアリングセットアップは不要'] },
      'comparison-table': { title: '直接対決：すべての 4 つのツールを比較', content: ['セクション 2 の基準に基づくすべての 5 つのツールの要約：'], columns: ['ツール', 'プライマリ使用法', 'コラボレーション', 'CI/CD', '価格', 'に最適'], rows: [{ 'ツール': 'Braintrust', 'プライマリ使用法': '評価 + 実験', 'コラボレーション': '✓ ワークスペース共有', 'CI/CD': '✓ API インテグレーション', '価格': '月 500€ 程度', 'に最適': '詳細評価' }, { 'ツール': 'PromptHub', 'プライマリ使用法': 'バージョン管理', 'コラボレーション': '✓ Web UI コラボ', 'CI/CD': '✗ なし', '価格': '月 50～200€', 'に最適': 'チーム協力' }, { 'ツール': 'Vellum', 'プライマリ使用法': '本番 A/B テスト', 'コラボレーション': '✓ ワークスペース アクセス', 'CI/CD': '✗ なし', '価格': '月 200～500€', 'に最適': 'ライブトラフィック テスト' }, { 'ツール': 'Promptfoo', 'プライマリ使用法': 'CI/CD 回帰', 'コラボレーション': '✗ なし（ローカル）', 'CI/CD': '✓ GitHub Actions', '価格': '無料（OSS）', 'に最適': '予算志向' }, { 'ツール': 'PromptQuorum', 'プライマリ使用法': 'モデル比較', 'コラボレーション': '✓ 共有ワークスペース', 'CI/CD': '✗ なし', '価格': '無料 + クレジット', 'に最適': 'モデル選択' }] },
      'which-tool': { title: 'あなたのチームに適したツールは？', content: ['答えはワークフローによります。5 つの一般的なシナリオ：'], numberedItems: [{ title: '回帰を回避したいだけ', whyItMatters: 'Promptfoo。無料、ローカル、GitHub Actions ネイティブ。小さなチームのためにすべてが必要です。' }, { title: 'ライブ A/B テスト付き本番システムを構築中', whyItMatters: 'Vellum + PromptQuorum。PromptQuorum で最高のモデルを最初に見つけ、次に Vellum でトラフィック分割とフィードバックループ。' }, { title: '大きなプロンプトライブラリとバージョン管理が必要', whyItMatters: 'PromptHub。使いやすく、安価で、チーム協力向け。CI/CD に Promptfoo と組み合わせ。' }, { title: 'カスタムメトリクスでの詳細評価が必要', whyItMatters: 'Braintrust。ダッシュボードと自動評価は無敵。高額ですが、データ科学チームの価値があります。' }, { title: 'どのモデルまたはフレームワークを使用するか不確実', whyItMatters: 'PromptQuorum 最初。25+ モデルとフレームワーク全体で比較。次に上記のツールでデプロイ。' }] },
      'common-mistakes': { title: 'よくあるエラー', mistakes: [{ mistake: '4 つのツールをすべてまとめて購入', problem: '月 700€ 以上かかり、冗長。Braintrust と Vellum を完全に使用しません。', fix: 'ワークフローに適した 2 つのツールを選択。ほとんどのチームが必要：Braintrust + Vellum または Promptfoo + PromptHub。' }, { mistake: '評価で開始、デプロイメント忘却', problem: 'Braintrust は最高のプロンプトを表示しますが、手動でアプリにコピー。「デプロイ」ボタンなし。', fix: 'Braintrust を Vellum と組み合わせるか、手動デプロイ。評価なしのデプロイメント 無意味。' }, { mistake: 'Promptfoo ローカルのみで使用', problem: 'ローカルテストは優れていますが、本番レイテンシ、コスト、実際のエラーは表示されません。', fix: 'Promptfoo を CI/CD 回帰テストに使用し、Vellum またはカスタムインフラで本番にデプロイ。' }, { mistake: 'プロンプト最適化前にモデル選択', problem: 'Claude Opus で開始できますが、GPT-5.5 がより良い可能性があります — テストするまで知りません。', fix: 'PromptQuorum で最初に複数モデルを比較。次に Braintrust または Promptfoo で最高のモデルに最適化。' }] },
      'how-to-choose': { title: 'これら 4 つのツール間での選択方法', numberedItems: ['チームの 3 つの主な課題をリストアップ：(a) 評価、(b) バージョン管理、(c) 本番デプロイメント。', '各課題に対して最高のツール：(a) Braintrust、(b) PromptHub、(c) Vellum。', '課題が「どのモデルかわかりません」の場合は、PromptQuorum で開始。', '課題が「予算がない」の場合は、CI/CD に Promptfoo、バージョン管理に PromptHub を選択。', '2 つ以上のツールを購入しないでください。4 つのツールはいつも多すぎます。', '90 日間のコスト ベースラインを計画し、どのツールが最高の ROI かを評価します。'] },
      'japanese-context': { title: '日本ユーザーのための活用ポイント', content: ['日本の組織にとって、プロンプト管理ツール選択時の追加検討事項があります。', '**METI AI ガバナンスと企業デプロイメント：** 日本企業が METI（経済産業省）の AI ガバナンスフレームワーク 2024 に準拠する場合、Braintrust と Vellum はエンタープライズ向け選択肢。Promptfoo はローカルで実行でき、METI 準拠性が簡単。', '**データレジデンシー（データ主権）：** 機密情報を処理する場合（顧客データ、内部情報）、ローカルツール（Promptfoo をサーバーで実行）がデータ主権要件を満たすのは簡単。クラウドツール（Braintrust、Vellum）は明示的なセキュリティ認定が必要です。', '**推奨事項：** 日本チームの場合：まず PromptQuorum（無料）モデル選択、次に Promptfoo（無料、ローカル）CI/CD 回帰、PromptHub（安価）バージョン管理。このコンボは月 200€ 未満で METI フレームワーク準拠。本番スケール到達時のみ Braintrust または Vellum に移行。'] },
      'faq': { title: 'FAQ', faqs: [{ q: 'Braintrust と PromptHub の主な違いは？', a: 'Braintrust は評価と実験向け。PromptHub はバージョン管理向け。Braintrust は「どのプロンプトが最良か」に答え、PromptHub は「以前使用したバージョンは」に答えます。両者を組み合わせ可能。' }, { q: 'Promptfoo は本当に無料？', a: 'はい、Promptfoo はオープンソース（MIT）で完全無料。ローカルまたは独自サーバーで実行。唯一のコスト：OpenAI、Anthropic などへの API 呼び出し。' }, { q: 'Braintrust または Vellum を選択すべき？', a: 'Braintrust は評価向け（どのプロンプトが最良かわかりません）。Vellum は本番向け（どのトラフィック分割が最良かわかりません）。異なる — 両者一緒が理想的。' }, { q: 'Vellum は Braintrust より高額？', a: 'Braintrust 月 500€ 程度。Vellum 月 200～500€（ボリューム依存）。つまり、Vellum は同じかもしくはより安いコスト本番トラフィックによります。' }, { q: 'Promptfoo を GitHub Actions に統合？', a: '`.github/workflows/test.yml` ファイルを作成し、`npx promptfoo eval` を呼び出し。Promptfoo は YAML テスト読み込み、実行、回帰表示。Actions は自動的に各プッシュで起動。' }, { q: 'PromptHub が Braintrust を置き換えられる？', a: 'いいえ。PromptHub はバージョン保存。Braintrust は品質評価。PromptHub はどのバージョンが最高かを測定できません。組み合わせ可能。' }, { q: 'Vellum はプロンプト管理プラットフォームと同じ？', a: 'いいえ、Vellum は本番デプロイメントツール、バージョン管理ではない。プロンプト保存のみ？PromptHub 使用。ライブトラフィック A/B テスト？Vellum。' }] },
      'related-reading': { title: '関連資料', items: ['[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=ja) — Braintrust、PromptHub、Vellum、Promptfoo を含むすべてのプロンプトツールの広範なランキングと 20+ その他', '[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=ja) — DSPy、Helicone、OpenAI Evals を含むチーム最適化', '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality?lang=ja) — プロンプト評価のメトリクスとフレームワーク', '[Prompt Evaluation Metrics](/prompt-engineering/prompt-evaluation-metrics?lang=ja) — 精度、レイテンシ、コスト、関連性、カスタムメトリクスの詳細'] },
      'sources': { title: 'ソース', items: ['[Braintrust — AI Evaluation Platform](https://braintrust.dev) — 公式ドキュメント；スコアリング関数、実験ダッシュボード、月 500€ Team プラン要求の基礎', '[PromptHub — Prompt Version Control](https://prompthub.ai) — 製品ホームページ；バージョン管理、Web UI、月 50～200€ 価格設定要求の基礎', '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — 製品概要と価格設定ページ；トラフィック分割、承認ワークフロー、月 200～500€ 要求の基礎', '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub リポジトリとドキュメント；MIT ライセンス、YAML 設定、GitHub Actions 統合要求の基礎', '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — マルチモデル比較ツール；25+ モデルディスパッチと cross-モデル比較要求の基礎'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo', description: 'Braintrust は評価、Vellum は本番 A/B テスト、Promptfoo は無料 CI/CD、PromptHub はバージョン管理。5 つの基準での比較。', datePublished: '2026-04-10', dateModified: '2026-04-29', author: { '@type': 'Organization', 'name': 'PromptQuorum' }, publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=ja', inLanguage: 'ja', about: [{ '@type': 'Thing', 'name': 'Braintrust' }, { '@type': 'Thing', 'name': 'PromptHub' }, { '@type': 'Thing', 'name': 'Vellum' }, { '@type': 'Thing', 'name': 'Promptfoo' }, { '@type': 'Thing', 'name': 'PromptQuorum' }, { '@type': 'Thing', 'name': 'LLM 評価' }], speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Braintrust と PromptHub の主な違いは？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust は評価と実験向け。PromptHub はバージョン管理向け。Braintrust は「どのプロンプトが最良か」に答え、PromptHub は「以前使用したバージョンは」に答えます。両者を組み合わせ可能。' } }, { '@type': 'Question', name: 'Promptfoo は本当に無料？', acceptedAnswer: { '@type': 'Answer', text: 'はい、Promptfoo はオープンソース（MIT）で完全無料。ローカルまたは独自サーバーで実行。唯一のコスト：OpenAI、Anthropic などへの API 呼び出し。' } }, { '@type': 'Question', name: 'Braintrust または Vellum を選択すべき？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust は評価向け（どのプロンプトが最良かわかりません）。Vellum は本番向け（どのトラフィック分割が最良かわかりません）。異なる — 両者一緒が理想的。' } }, { '@type': 'Question', name: 'Vellum は Braintrust より高額？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust 月 500€ 程度。Vellum 月 200～500€（ボリューム依存）。つまり、Vellum は同じかもしくはより安いコスト本番トラフィックによります。' } }, { '@type': 'Question', name: 'Promptfoo を GitHub Actions に統合？', acceptedAnswer: { '@type': 'Answer', text: '`.github/workflows/test.yml` ファイルを作成し、`npx promptfoo eval` を呼び出し。Promptfoo は YAML テスト読み込み、実行、回帰表示。Actions は自動的に各プッシュで起動。' } }, { '@type': 'Question', name: 'PromptHub が Braintrust を置き換えられる？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。PromptHub はバージョン保存。Braintrust は品質評価。PromptHub はどのバージョンが最高かを測定できません。組み合わせ可能。' } }, { '@type': 'Question', name: 'Vellum はプロンプト管理プラットフォームと同じ？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、Vellum は本番デプロイメントツール、バージョン管理ではない。プロンプト保存のみ？PromptHub 使用。ライブトラフィック A/B テスト？Vellum。' } }], inLanguage: 'ja' },
    itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', name: 'プロンプト管理ツール（比較）', inLanguage: 'ja', url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=ja', numberOfItems: 5, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Braintrust', description: '詳細メトリクスと自動評価による評価と実験' }, { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'チーム協力付きプロンプトバージョン管理' }, { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'ライブトラフィック分割付き本番 A/B テスト' }, { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'GitHub Actions 統合付きオープンソース回帰テスト' }, { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'モデル選択用 25+ モデル cross-比較' }] },
    howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: 'Braintrust、PromptHub、Vellum、Promptfoo 間での選択方法', inLanguage: 'ja', step: [{ '@type': 'HowToStep', position: 1, name: '主要な課題を特定', text: 'チームの 3 つの主な課題をリストアップ：(a) 評価、(b) バージョン管理、(c) 本番デプロイメント。' }, { '@type': 'HowToStep', position: 2, name: '各課題に対して最高のツール', text: '(a) Braintrust、(b) PromptHub、(c) Vellum。課題が「どのモデル」の場合は、PromptQuorum から開始。' }, { '@type': 'HowToStep', position: 3, name: '最大 2 つのツール', text: 'ワークフローに適した 2 つのツール。4 つはいつも多すぎ、月 700€ 以上かかります。' }, { '@type': 'HowToStep', position: 4, name: '90 日間のコスト ベースライン', text: '90 日後、最高の ROI 達成するツール評価し、スケール。' }, { '@type': 'HowToStep', position: 5, name: '必要に応じて組み合わせまたは切り替え', text: '本番スケール？Braintrust または Vellum に切り替え。小さいチーム？Promptfoo + PromptHub が最適。' }] },
  },
  zh: {
    theme: '工具 & 平台',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    seoTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    metaDescription: 'Braintrust 最适合评估（约 $500/月），Vellum 最适合生产 A/B 测试（$200-500/月），Promptfoo 免费 CI/CD，PromptHub 版本控制。5 个标准比较。',
    ogTitle: '哪个赢家：Braintrust、Vellum、PromptHub 还是 Promptfoo？',
    ogDescription: 'Braintrust 评估输出。Vellum 分割生产流量。Promptfoo 免费。PromptHub 最简单。包含决策矩阵。',
    twitterTitle: 'Braintrust vs Vellum vs PromptHub vs Promptfoo (2026)',
    twitterDescription: '大多数团队只需要这 4 个中的 2 个——不是全部。花费全部浪费 $700+/月。按团队类型快速矩阵。',
    intro: 'Braintrust、PromptHub、Vellum 和 Promptfoo 是四个领先的提示词管理和 LLM 评估平台。但实际应该选择哪一个？本指南基于文档、定价和用户反馈，比较每个工具的优势、劣势和理想用例。',
    publishDate: '2026-04-10',
    dateModified: '2026-04-29',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '选择提示词优化堆栈的提示词工程师和工程经理',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['提示词管理', 'LLM 评估', '提示词版本控制'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '这 4 个工具实际做什么？', anchor: '#what-is' },
      { label: '我们如何比较这些工具？', anchor: '#evaluation-criteria' },
      { label: 'Braintrust：最适合输出质量评估？', anchor: '#braintrust' },
      { label: 'PromptHub：最适合提示词版本控制？', anchor: '#prompthub' },
      { label: 'Vellum：最适合生产 A/B 测试？', anchor: '#vellum' },
      { label: 'Promptfoo：最好的免费 CI/CD 选项？', anchor: '#promptfoo' },
      { label: 'PromptQuorum：优化前的模型比较', anchor: '#promptquorum' },
      { label: '直接对比：所有 4 个工具比较', anchor: '#comparison-table' },
      { label: '适合您团队的工具？', anchor: '#which-tool' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '如何在这 4 个工具之间选择', anchor: '#how-to-choose' },
      { label: '中国企业应用方案', anchor: '#china-context' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
      { label: '来源', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': { isTldr: true, items: ['Braintrust 擅长详细评估和评分——贵（约 $500/月），但具有强大的实验基础设施。', 'Vellum 最适合生产部署和 A/B 测试——$200-500/月，支持流量分割和批准工作流。', 'Promptfoo 是唯一具有 CI/CD 集成的免费选项——非常适合 GitHub Actions 回归测试，无生产功能。', 'PromptHub 适合需要版本控制和协作的团队——$50-200/月，最容易使用。', 'PromptQuorum 首先回答"哪个模型？"通过 25+ 模型比较——在选择这 4 个之前使用它。', '大多数团队需要 2 个工具，不是 4 个：综合评估 + 生产选 Braintrust + Vellum，或预算友好选 Promptfoo + PromptHub。', '集成：全部 4 个支持 GitHub，但 Braintrust 最好的 API，Vellum 最好的 webhooks，Promptfoo 本地最简单。'] },
      'what-is': { title: '这 4 个工具实际做什么？', content: ['这 4 个工具在您的 LLM 工作流中解决不同的问题。', '**Braintrust** 是评估和实验平台。提交提示词，获取结果，Braintrust 帮助评估（手动或使用自定义评分函数自动）。通过结构化实验衡量质量的最强工具。', '**PromptHub** 是提示词版本控制——想象 GitHub，但用于提示词。保存版本、比较变更、回滚。简洁优雅，但无评估或生产部署。', '**Vellum** 是生产部署工具，内置 A/B 测试。编写提示词，分割流量（50/50 或自定义），测量指标，推广获胜者。', '**Promptfoo** 是本地提示词测试和 CI/CD 集成的开源框架。用 YAML/JSON 编写测试用例，本地或 GitHub Actions 运行，获取回归报告。免费，随处运行，不适合生产流量分割。', '本指南比较 4 个特定工具。更广泛的提示词工程工具排名见 [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=zh)。包括 DSPy 和 Helicone 的团队优化功能见 [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=zh)。'] },
      'evaluation-criteria': { title: '我们如何比较这些工具？', content: ['我们在 5 个对大多数团队重要的标准上评估了这 4 个工具：'], columns: ['标准', '权重', '定义'], rows: [{ '标准': '评估功能', '权重': '25%', '定义': '工具能评估输出、运行实验、追踪趋势吗？能编写自定义评分函数吗？' }, { '标准': '生产就绪', '权重': '25%', '定义': '工具能处理实时流量吗？支持 A/B 测试、路由、金丝雀部署吗？' }, { '标准': '版本控制 & 协作', '权重': '20%', '定义': '团队能保存提示词版本、比较变更、协作吗？' }, { '标准': 'CI/CD & 自动化', '权重': '15%', '定义': '集成 GitHub Actions、GitLab CI 等吗？能自动化测试吗？' }, { '标准': '价格 & 复杂性', '权重': '15%', '定义': '成本多少？设置需要多长时间？需要工程设置还是开箱即用？' }] },
      'braintrust': { title: 'Braintrust：最适合输出质量评估？', content: ['**什么：** 评估和实验平台。提交输出，定义指标（准确性、延迟、成本、自定义），查看性能。支持 LLM 基础自动评估。', '**优势：** 最强的实验基础设施。测试多个提示词版本、自定义评分、长期历史跟踪。详细的仪表板。精良文档的 API。', '**劣势：** 昂贵（约 $500/月），无生产部署功能。评估工具，不是生产工具。需手动复制最佳提示词到应用或与 Vellum 结合。'], items: ['LLM 基础自动评估（例如"回答事实正确吗？"）', '包含显著性测试的实验仪表板', '自定义评分函数（JavaScript 或 Python）', '版本历史（回滚、趋势分析）'] },
      'prompthub': { title: 'PromptHub：最适合提示词版本控制？', content: ['**什么：** 提示词用的 GitHub。保存版本、后来修改、PromptHub 记录 diff。检索旧版本、搜索变更、多项目工作区管理。', '**优势：** 简洁且便宜（$50-200/月）。Web UI 易用。对需要版本控制和协作的团队理想，无复杂基础设施。', '**劣势：** 无评估或测量。无法知道哪个提示词版本更好——需手动或另外工具。无生产部署支持。'] },
      'vellum': { title: 'Vellum：最适合生产 A/B 测试？', content: ['**什么：** 生产部署工具，内置 A/B 测试。编写提示词，分割流量（50/50 或自定义），测量指标（延迟、反馈、成本），推广获胜者。', '**优势：** 生产聚焦。A/B 测试内置。支持批准工作流、金丝雀部署、webhooks。LLM API 集成无缝。最适合实时流量分割测试。', '**劣势：** 更贵（$200-500/月）。不适合离线评估——在生产测试，不是本地。需工程设置。非开源。'] },
      'promptfoo': { title: 'Promptfoo：最好的免费 CI/CD 选项？', content: ['**什么：** 本地提示词测试和 CI/CD 集成的开源框架。用 YAML/JSON 编写测试用例（提示词 + 预期结果），本地运行，获取回归报告。GitHub Actions 原生。', '**优势：** 免费（MIT）开源。本地——无云、无认证。YAML 配置简单。GitHub Actions 优秀。社区大。', '**劣势：** 不适合生产流量分割或版本管理。回归测试工具，不是部署工具。生产 A/B 测试需与 Vellum 结合。自动评估限制。'] },
      'promptfoo-yaml': { title: 'Promptfoo YAML 示例', codeBlock: `providers:\n  - openai:gpt-5.5\n\ntests:\n  - description: "分类查询"\n    vars:\n      question: "这是 bug 报告吗？"\n      context: "用户抱怨认证错误。"\n    assert:\n      - type: "contains"\n        value: "Bug"\n      - type: "cost"\n        threshold: 0.01\n\n  - description: "避免幻觉"\n    vars:\n      input: "列出 xyz 的 5 个功能。"\n    assert:\n      - type: "not-contains"\n        value: "工具支持 X" # 文档中不存在\n`, codeLanguage: 'yaml' },
      'promptquorum': { title: 'PromptQuorum：优化前的模型比较', content: ['**在为特定 LLM 提供商确定 Braintrust、Vellum、PromptHub 或 Promptfoo 之前，使用 PromptQuorum 将提示词同时分发到 25+ 模型，看哪个表现最好——首个与模型无关的步骤。** 免费层可用。', '与上述 4 个工具（各优化一个模型）不同，PromptQuorum 在一次运行中回答"哪个模型适合？"。在 PromptQuorum 发现最优模型后，路由到 Braintrust 进行深层评估、Vellum 进行生产 A/B 测试或 Promptfoo 进行 CI/CD 回归防止。'], items: ['包括 GPT-5.5、Claude Opus 4.7、Gemini 3.1 Pro 的 25+ 模型，和通过 Ollama、LM Studio 的本地模型', '9 个内置提示词框架——TRACE、CO-STAR、CRAFT 等', '包含共识评分的并排响应比较', '按模型的令牌计数——提交前查看成本差异', '免费层——无需工程设置'] },
      'comparison-table': { title: '直接对比：所有 4 个工具比较', content: ['第 2 节标准下所有 5 个工具摘要：'], columns: ['工具', '主要用途', '协作', 'CI/CD', '定价', '最适合'], rows: [{ '工具': 'Braintrust', '主要用途': '评估 + 实验', '协作': '✓ 工作区共享', 'CI/CD': '✓ API 集成', '定价': '约 $500/月', '最适合': '详细评估' }, { '工具': 'PromptHub', '主要用途': '版本控制', '协作': '✓ Web UI 协作', 'CI/CD': '✗ 无', '定价': '$50-200/月', '最适合': '团队协作' }, { '工具': 'Vellum', '主要用途': '生产 A/B 测试', '协作': '✓ 工作区访问', 'CI/CD': '✗ 无', '定价': '$200-500/月', '最适合': '实时流量测试' }, { '工具': 'Promptfoo', '主要用途': 'CI/CD 回归', '协作': '✗ 无（本地）', 'CI/CD': '✓ GitHub Actions', '定价': '免费（OSS）', '最适合': '预算友好' }, { '工具': 'PromptQuorum', '主要用途': '模型比较', '协作': '✓ 共享工作区', 'CI/CD': '✗ 无', '定价': '免费 + 额度', '最适合': '模型选择' }] },
      'which-tool': { title: '适合您团队的工具？', content: ['答案取决于工作流。5 个常见场景：'], numberedItems: [{ title: '只想避免回归', whyItMatters: 'Promptfoo。免费、本地、GitHub Actions 原生。小团队所需全部。' }, { title: '构建具有实时 A/B 测试的生产系统', whyItMatters: 'Vellum + PromptQuorum。PromptQuorum 先找最优模型，然后 Vellum 流量分割和反馈循环。' }, { title: '有大提示词库，需版本控制', whyItMatters: 'PromptHub。易用、便宜、为团队协作设计。与 Promptfoo 结合做 CI/CD。' }, { title: '需自定义指标的深度评估', whyItMatters: 'Braintrust。仪表板和自动评估无可匹敌。昂贵但值得数据科学团队。' }, { title: '不确定用哪个模型或框架', whyItMatters: 'PromptQuorum 先。在 25+ 模型和框架间比较。后用上述工具部署。' }] },
      'common-mistakes': { title: '常见错误', mistakes: [{ mistake: '同时购买全部 4 个工具', problem: '花费 $700+/月，重复。不会充分使用 Braintrust 和 Vellum。', fix: '选择适合工作流的 2 个工具。大多数团队需：Braintrust + Vellum 或 Promptfoo + PromptHub。' }, { mistake: '从评估开始，忽视部署', problem: 'Braintrust 显示最优提示词但需手动复制到应用。无"部署"按钮。', fix: '将 Braintrust 与 Vellum 结合或手动部署。无部署的评估无意义。' }, { mistake: '仅本地使用 Promptfoo', problem: '本地测试很好，但看不到生产延迟、成本或真实错误。', fix: '用 Promptfoo 做 CI/CD 回归测试，用 Vellum 或自有基础设施部署生产。' }, { mistake: '提示词优化前选模型', problem: '可以从 Claude Opus 开始，但 GPT-5.5 可能更优——测试前不知道。', fix: 'PromptQuorum 先多模型比较。后用 Braintrust 或 Promptfoo 为最优模型优化。' }] },
      'how-to-choose': { title: '如何在这 4 个工具之间选择', numberedItems: ['列出团队的 3 个主要难题：(a) 评估、(b) 版本控制、(c) 生产部署。', '每个难题选最优工具：(a) Braintrust、(b) PromptHub、(c) Vellum。', '难题是"不知道哪个模型"？PromptQuorum 开始。', '难题是"没预算"？CI/CD 选 Promptfoo、版本控制选 PromptHub。', '不超过 2 个工具。4 个工具总是太多。', '规划 90 天成本基线，评估哪个工具最优 ROI。'] },
      'china-context': { title: '中国企业应用方案', content: ['中国组织选择提示词管理工具时，有额外考虑。', '**数据安全法和企业合规：** 中国企业遵守 2021 年《数据安全法》时，Braintrust 和 Vellum 是企业级选项。Promptfoo 本地运行，合规更简单。', '**数据驻地（数据主权）：** 处理敏感信息（客户数据、内部信息）时，本地工具（Promptfoo 在服务器上运行）更容易满足数据主权需求。云工具（Braintrust、Vellum）需明确安全认证。', '**推荐方案：** 中国团队：先 PromptQuorum（免费）选模型，后 Promptfoo（免费、本地）CI/CD 回归，PromptHub（便宜）版本控制。此组合 $200/月以下且符合数据安全法。仅生产规模达到时才迁移到 Braintrust 或 Vellum。'] },
      'faq': { title: '常见问题', faqs: [{ q: 'Braintrust 和 PromptHub 主要区别？', a: 'Braintrust 用于评估和实验。PromptHub 用于版本控制。Braintrust 回答"哪个提示词最优？"PromptHub 回答"之前用的版本是？"可结合使用。' }, { q: 'Promptfoo 真的免费？', a: '是的，Promptfoo 开源（MIT）完全免费。本地或自有服务器运行。唯一成本：OpenAI、Anthropic 等 API 调用。' }, { q: '应选 Braintrust 还是 Vellum？', a: 'Braintrust 用于评估（不知哪个提示词最优）。Vellum 用于生产（不知哪个流量分割最优）。不同的——两个结合最优。' }, { q: 'Vellum 比 Braintrust 贵多少？', a: 'Braintrust 约 $500/月。Vellum $200-500/月（按量）。即 Vellum 可能同价或更便宜，取决生产流量。' }, { q: 'Promptfoo 怎样与 GitHub Actions 集成？', a: '创建 `.github/workflows/test.yml` 文件，调用 `npx promptfoo eval`。Promptfoo 读 YAML 测试、运行、显示回归。Actions 自动在每次推送触发。' }, { q: 'PromptHub 能替代 Braintrust？', a: '不能。PromptHub 保存版本。Braintrust 评估质量。PromptHub 无法测量哪个版本最优。可结合使用。' }, { q: 'Vellum 与提示词管理平台相同？', a: '不是，Vellum 是生产部署工具，不是版本控制。只想存提示词？PromptHub。实时流量 A/B 测试？Vellum。' }] },
      'related-reading': { title: '延伸阅读', items: ['[Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026?lang=zh) — 包括 Braintrust、PromptHub、Vellum、Promptfoo 和 20+ 其他的所有提示词工具广泛排名', '[Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams?lang=zh) — 包括 DSPy、Helicone、OpenAI Evals 的团队优化', '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality?lang=zh) — 提示词评估的指标和框架', '[Prompt Evaluation Metrics](/prompt-engineering/prompt-evaluation-metrics?lang=zh) — 准确性、延迟、成本、关联性、自定义指标的深入讲解'] },
      'sources': { title: '来源', items: ['[Braintrust — AI Evaluation Platform](https://braintrust.dev) — 官方文档；评分函数、实验仪表板、$500/月 Team 计划声明基础', '[PromptHub — Prompt Version Control](https://prompthub.ai) — 产品首页；版本控制、Web UI、$50-200/月 定价声明基础', '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — 产品概览和定价页；流量分割、批准工作流、$200-500/月 声明基础', '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub 仓库和文档；MIT 许可、YAML 配置、GitHub Actions 集成声明基础', '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — 多模型比较工具；25+ 模型分发和跨模型比较声明基础'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo', description: 'Braintrust 用于评估，Vellum 用于生产 A/B 测试，Promptfoo 免费 CI/CD，PromptHub 版本控制。5 个标准比较。', datePublished: '2026-04-10', dateModified: '2026-04-29', author: { '@type': 'Organization', 'name': 'PromptQuorum' }, publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=zh', inLanguage: 'zh', about: [{ '@type': 'Thing', 'name': 'Braintrust' }, { '@type': 'Thing', 'name': 'PromptHub' }, { '@type': 'Thing', 'name': 'Vellum' }, { '@type': 'Thing', 'name': 'Promptfoo' }, { '@type': 'Thing', 'name': 'PromptQuorum' }, { '@type': 'Thing', 'name': 'LLM 评估' }], speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Braintrust 和 PromptHub 主要区别？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust 用于评估和实验。PromptHub 用于版本控制。Braintrust 回答"哪个提示词最优？"PromptHub 回答"之前用的版本是？"可结合使用。' } }, { '@type': 'Question', name: 'Promptfoo 真的免费？', acceptedAnswer: { '@type': 'Answer', text: '是的，Promptfoo 开源（MIT）完全免费。本地或自有服务器运行。唯一成本：OpenAI、Anthropic 等 API 调用。' } }, { '@type': 'Question', name: '应选 Braintrust 还是 Vellum？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust 用于评估（不知哪个提示词最优）。Vellum 用于生产（不知哪个流量分割最优）。不同的——两个结合最优。' } }, { '@type': 'Question', name: 'Vellum 比 Braintrust 贵多少？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust 约 $500/月。Vellum $200-500/月（按量）。即 Vellum 可能同价或更便宜，取决生产流量。' } }, { '@type': 'Question', name: 'Promptfoo 怎样与 GitHub Actions 集成？', acceptedAnswer: { '@type': 'Answer', text: '创建 `.github/workflows/test.yml` 文件，调用 `npx promptfoo eval`。Promptfoo 读 YAML 测试、运行、显示回归。Actions 自动在每次推送触发。' } }, { '@type': 'Question', name: 'PromptHub 能替代 Braintrust？', acceptedAnswer: { '@type': 'Answer', text: '不能。PromptHub 保存版本。Braintrust 评估质量。PromptHub 无法测量哪个版本最优。可结合使用。' } }, { '@type': 'Question', name: 'Vellum 与提示词管理平台相同？', acceptedAnswer: { '@type': 'Answer', text: '不是，Vellum 是生产部署工具，不是版本控制。只想存提示词？PromptHub。实时流量 A/B 测试？Vellum。' } }], inLanguage: 'zh' },
    itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', name: '提示词管理工具（比较）', inLanguage: 'zh', url: 'https://www.promptquorum.com/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo?lang=zh', numberOfItems: 5, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Braintrust', description: '包含详细指标和自动评估的评估和实验' }, { '@type': 'ListItem', position: 2, name: 'PromptHub', description: '团队协作的提示词版本控制' }, { '@type': 'ListItem', position: 3, name: 'Vellum', description: '实时流量分割的生产 A/B 测试' }, { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'GitHub Actions 集成的开源回归测试' }, { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: '模型选择的 25+ 模型跨模型比较' }] },
    howToSchema: { '@context': 'https://schema.org', '@type': 'HowTo', name: '如何在 Braintrust、PromptHub、Vellum 和 Promptfoo 间选择', inLanguage: 'zh', step: [{ '@type': 'HowToStep', position: 1, name: '识别主要难题', text: '列出团队的 3 个主要难题：(a) 评估、(b) 版本控制、(c) 生产部署。' }, { '@type': 'HowToStep', position: 2, name: '每个难题选最优工具', text: '(a) Braintrust、(b) PromptHub、(c) Vellum。难题是"不知道哪个模型"？PromptQuorum 开始。' }, { '@type': 'HowToStep', position: 3, name: '最多 2 个工具', text: '选适合工作流的 2 个工具。4 个总是太多，花费 $700+/月。' }, { '@type': 'HowToStep', position: 4, name: '90 天成本基线', text: '90 天后，评估哪个工具最优 ROI，据此扩展。' }, { '@type': 'HowToStep', position: 5, name: '按需结合或切换', text: '生产规模？切换 Braintrust 或 Vellum。小团队？Promptfoo + PromptHub 最优。' }] },
  },
};
