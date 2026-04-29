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
          'This guide helps you skip the single-tool trap and build a practical two-tool stack that matches your team\'s workflow. For a broader comparison of all prompt tools, see [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-teams).',
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
  - openai:gpt-4-turbo
  - anthropic:claude-opus-4.1
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
          '[Best Prompt Optimization Tools for Teams: 2026 Rankings](/prompt-engineering/best-prompt-optimization-tools-teams) — compares seven tools including Helicone and DSPy',
          '[How to Evaluate Prompt Quality Systematically](/prompt-engineering/how-to-evaluate-prompt-quality) — frameworks for measuring outputs',
          '[Best Prompt Testing Tools: Free and Paid](/prompt-engineering/best-prompt-testing-tools) — automated testing alternatives',
          '[Manual vs Automated Prompt Optimization](/prompt-engineering/manual-vs-automated-prompt-optimization) — when to hand-tune vs automate',
          '[Prompt Evaluation Metrics: Accuracy, Relevance, Latency](/prompt-engineering/prompt-evaluation-metrics) — specific quality metrics for LLMs',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — official documentation and pricing',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — product homepage and team plan pricing',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — pricing and product overview',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub repository and documentation',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — model comparison and benchmarking',
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
      numberOfItems: 4,
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
    theme: 'Tools & Platforms',
    title: 'Vergleich',
    seoTitle: 'Vergleich',
    metaDescription: 'Vergleich',
    intro: '[Translation coming soon](/prompt-engineering/best-prompt-optimization-tools-teams?lang=en).',
    publishDate: '2026-04-10',
    readTime: '9 min',
    educationalLevel: 'Intermediate',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    sections: {},
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
