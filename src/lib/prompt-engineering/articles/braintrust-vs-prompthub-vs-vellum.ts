// Braintrust vs PromptHub vs Vellum vs Promptfoo comparison
// Slug: braintrust-vs-prompthub-vs-vellum-vs-promptfoo
// Generated: 2026-04-29

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Partial<Record<Language, PEArticle>> = {
  en: {
    theme: 'Tools & Platforms',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    seoTitle: 'Braintrust vs PromptHub vs Vellum: 2-Tool Stack 2026',
    intro: '**Four tools dominate prompt management for teams: Braintrust for output evaluation, PromptHub for version control, Vellum for production A/B testing, and Promptfoo for CI/CD regression prevention.** Most teams buy all four and waste $1,000+/month. The right stack is always exactly two tools — one for evaluation, one for deployment.',
    metaDescription: 'Braintrust ($249/mo) evaluates prompts. Vellum ($200–500/mo) A/B tests production. Promptfoo free CI/CD. PromptHub ($50–200/mo) versions. Most teams need exactly 2.',
    ogTitle: 'Buying All 4 Prompt Tools Wastes $1,000+/mo. Here\'s the 2-Tool Stack',
    ogDescription: 'Braintrust scores. Vellum splits traffic. Promptfoo catches regressions. PromptHub versions. Pick 2. Comparison table inside.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: Which 2 to Pick',
    twitterDescription: 'Promptfoo is free. Vellum starts at $200/mo. Braintrust at $500/mo. PromptHub at $50/mo. You need exactly 2 — eval + deployment. Decision matrix inside.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Prompt engineers and engineering managers choosing a prompt management stack',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Prompt Management', 'LLM Evaluation', 'Prompt Versioning'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'What Braintrust, PromptHub, Vellum, and Promptfoo Each Do', anchor: '#what-is' },
      { label: 'How We Compared These Tools', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: Evaluation Depth at $249/Month (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub: Version Control at $50–200/Month', anchor: '#prompthub' },
      { label: 'Vellum: Production Traffic Splitting at $200–500/Month', anchor: '#vellum' },
      { label: 'Promptfoo: Free Open-Source CI/CD Testing', anchor: '#promptfoo' },
      { label: 'PromptQuorum: Cross-Model Comparison Before Optimization', anchor: '#promptquorum' },
      { label: 'Head-to-Head: All 4 Tools Compared', anchor: '#comparison-table' },
      { label: 'Tool Selection by Team Type', anchor: '#which-tool' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'How to Choose Between These 4 Tools', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'Sources', anchor: '#sources' },
    ],
    quickFacts: [
      'Promptfoo is the only free tool (MIT license, no paid tier) — best for teams that want CI/CD with zero SaaS cost',
      'Braintrust Pro plan starts at $249/month (free tier available with 1M spans + 10K scores); Vellum ranges $200–500/month; PromptHub runs $50–200/month',
      'A typical two-tool stack (evaluation + deployment) costs $250–700/month for a 5-person team',
      'Only Vellum supports real production traffic splitting (A/B tests on live users)',
      'All four tools support OpenAI and Anthropic APIs; only Promptfoo supports 40+ providers natively',
      'PromptQuorum adds a model-agnostic first step: dispatch one prompt to 25+ models before committing to a provider',
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust leads on evaluation depth: custom scoring functions, Loop agent for autonomous iteration, MCP integration for IDE tools, Pro at $249/month (free tier available). Best for teams measuring output quality systematically.',
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
        title: 'What Braintrust, PromptHub, Vellum, and Promptfoo Each Do',
        content: [
          '**Braintrust, PromptHub, Vellum, and Promptfoo solve different prompt team problems.** Braintrust is an evaluation platform (score outputs). PromptHub is a version control system (organize and share prompts). Vellum is a deployment platform with A/B testing (run experiments on real traffic). Promptfoo is a test automation tool (catch regressions in CI/CD). They overlap but do not replace each other.',
          'The reason teams struggle to pick one: all four claim to "optimize prompts," but they optimize at different stages. Braintrust optimizes by measuring; Vellum optimizes by splitting traffic; Promptfoo optimizes by catching regressions; PromptHub optimizes by organizing. A team might use Braintrust to discover a better prompt, Promptfoo to test it in CI/CD, and Vellum to deploy it.',
          'This guide is a head-to-head comparison of four specific tools. For a broader ranking of all prompt engineering tools, see [Best Prompt Engineering Tools 2026](/prompt-engineering/best-prompt-engineering-tools-2026). For team optimization features including DSPy and Helicone, see [Best Prompt Optimization Tools for Teams](/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Braintrust scores, PromptHub versions, Vellum A/B tests, Promptfoo regression-tests — four prompt tools that overlap but don\'t replace each other.',
          },
          {
            type: 'in-plain-terms',
            text: 'Think of it like building software: you need a test framework (Promptfoo), a quality dashboard (Braintrust), a deployment pipeline (Vellum), and a code repository (PromptHub). Most teams need two of these, not all four.',
          },
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
        title: 'Braintrust: Evaluation Depth at $249/Month (Pro)',
        content: [
          '**Braintrust is an AI evaluation platform that logs every API call, scores outputs with custom metrics, and runs A/B experiments in a shared lab — best for teams that measure output quality systematically.** Braintrust is not a prompt builder or version control system; it is a shared evaluation laboratory.',
          'Free tier includes 1M trace spans and 10K scores with unlimited users — enough for most pre-production evaluation workflows. Pro plan is $249/month. Braintrust added Loop agent in 2026: an autonomous evaluator that generates test cases and iterates on prompts without manual setup. MCP server connects Claude Code and Cursor directly to Braintrust evaluation stack from your IDE. The logging proxy integrates with OpenAI, Anthropic, and Google APIs without code changes. You define custom scoring functions in TypeScript or Python. GitHub integration lets you version prompts alongside code. SOC 2 Type II certification now available. Tradeoff: Pro plan requires engineering expertise to design and maintain scoring functions; free tier is excellent for evaluation baselines.',
          'Best team features: shared experiment dashboards (all members see eval results in real time), role-based access (admin/member/viewer), git-like commit history for prompts, and production logging (every API call logged with inputs, outputs, and scores).',
          'For the metrics behind custom scoring, see [Prompt Evaluation Metrics: Accuracy, Relevance, Latency](/prompt-engineering/prompt-evaluation-metrics).',
        ],
        items: [
          'Shared experiment dashboards: all team members see eval results live',
          'Role-based access: admin/member/viewer roles',
          'Prompt versioning via git-like commit history',
          'Production logging: every API call logged with inputs/outputs/scores',
          'Loop agent: autonomous evaluator that generates test cases and iterates on prompts (new in 2026)',
          'MCP server: direct integration with Claude Code and Cursor for IDE-based evaluation',
          'SOC 2 Type II certified for enterprise deployments',
        ],
        callouts: [
          {
            type: 'insight',
            label: 'Did You Know',
            text: 'Braintrust\'s free tier includes 1M trace spans and 10K scores with unlimited users — more evaluation capacity than most teams use in their first 3 months. You can run a complete prompt evaluation workflow without paying anything.',
          },
          {
            type: 'warning',
            label: 'Scoring Function Complexity',
            text: 'Braintrust Pro custom scorers require TypeScript or Python. If no one on your team writes scoring functions, Braintrust\'s main differentiator is unusable. However, the free tier and Loop agent reduce this barrier. Check team capability before committing to Pro.',
          },
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: Version Control at $50–200/Month',
        content: [
          '**PromptHub is a prompt version control and sharing platform — teams store prompts in a central library, tag versions, and share across the organization without juggling spreadsheets or Slack messages.** Simplest to onboard of the four.',
          'Starter ~$50/month; Pro ~$200/month. Web UI for non-technical users. Version history for each prompt, tags for organization, deployment workflows. Supports OpenAI, Anthropic, and custom APIs. Tradeoff: no custom evaluation scoring; limited to built-in quality checks; not suitable for teams running live A/B experiments.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: Production Traffic Splitting at $200–500/Month',
        content: [
          '**Vellum is a prompt deployment platform with built-in A/B testing that splits real production traffic between prompt variants and measures real-world output quality — best for teams running live LLM features.** Vellum is a control plane, not a testing tool.',
          'Starter $200/month; Growth $500/month; Enterprise custom. Routes production traffic by percentage between variants. Evaluation compares variants on test datasets. Team features: shared workspace, PR-style prompt reviews, deployment approval workflows. Tradeoff: most expensive option; overkill for pre-production teams or teams not yet handling real user traffic.',
          'For understanding when A/B testing adds value vs. manual optimization, see [Manual vs Automated Prompt Optimization](/prompt-engineering/manual-vs-automated-prompt-optimization).',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: Free Open-Source CI/CD Testing',
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
        callouts: [
          {
            type: 'tip',
            label: 'Promptfoo + GitHub Actions',
            text: 'Promptfoo YAML test configs commit directly to Git. On every PR, GitHub Actions runs the test suite against all configured models and blocks merge on failure. Zero monthly cost, full CI/CD integration.',
          },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: Cross-Model Comparison Before Optimization',
        content: [
          '**Before committing to Braintrust, Vellum, PromptHub, or Promptfoo for a specific LLM provider, use [PromptQuorum](/features) to dispatch one prompt to 25+ models simultaneously and see which performs best — a model-agnostic first step.** Free tier available.',
          'Unlike the four tools above (which optimize for a single model at a time), PromptQuorum answers "which model handles this prompt best?" in one run. After you discover the optimal model with PromptQuorum, then route to Braintrust for deeper evaluation, Vellum for production A/B testing, or Promptfoo for CI/CD regression prevention.',
        ],
        items: [
          '25+ models including GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, and local models via Ollama and LM Studio',
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
            'CI/CD': '✓ API + MCP',
            Pricing: 'Free / $249 Pro',
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
        callouts: [
          {
            type: 'insight',
            label: 'Two-Tool Stack Rule',
            text: 'Most teams waste money on 3–4 tools. The optimal stack is two: one for evaluation (Braintrust or Promptfoo) and one for deployment/versioning (Vellum or PromptHub). Total spend: $250–700/month instead of $1,000+.',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Tool Selection by Team Type',
        content: [
          '**Match the tool to your team\'s primary bottleneck and technical depth.**',
          'Do not use Braintrust if your team cannot write custom scoring functions — it will sit unused. Do not use Vellum if you have no live users yet — buy it after reaching production. Do not use PromptHub alone if you need to measure output quality — it organizes prompts but cannot score them.',
          'For the full team setup workflow including ownership and review rules, see [Prompt Engineering Setup for Small Teams](/prompt-engineering/prompt-engineering-setup-small-teams).',
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
            problem: 'Total spend reaches $700+/month; you maintain four systems; team confusion about which tool to use for what.',
            fix: 'Pick two: one for evaluation (Braintrust or Promptfoo) and one for deployment (Vellum or PromptHub). Add PromptQuorum as a free first step.',
          },
          {
            mistake: 'Not evaluating the free tiers first',
            problem: 'Both Braintrust (1M traces, 10K scores free) and Promptfoo (fully free) offer enough capacity to run a real evaluation before paying. Teams that skip the free tier waste the first month learning what they should have measured.',
            fix: 'Start with Promptfoo (free CLI) or Braintrust free tier. Build your evaluation dataset. Define your quality metrics. Only then evaluate paid tools against your established baseline.',
          },
          {
            mistake: 'Choosing a tool by brand reputation instead of workflow fit',
            problem: 'You buy Braintrust Pro but your team is non-technical and cannot write scoring functions; or you buy PromptHub when your actual bottleneck is measuring quality.',
            fix: 'Identify your primary bottleneck first (evaluation, versioning, A/B testing, regression prevention) before evaluating tools.',
          },
          {
            mistake: 'Adopting a tool without building an evaluation dataset',
            problem: 'You sign up for Braintrust or Vellum but have no labeled input/output pairs to score against. Tools sit unused; you see no ROI.',
            fix: 'Build a test set of 20–50 labeled examples before paying for any platform. Use Braintrust free tier or Promptfoo to validate your metrics first.',
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
        callouts: [
          {
            type: 'tip',
            label: 'Pro Tip: Build a Test Dataset First',
            text: 'Build a test set of 20–50 labeled input/output pairs BEFORE evaluating any paid tool. Without a baseline dataset, you can\'t measure whether the tool actually improves your prompts — you\'re just paying for a dashboard with no data in it. Use Braintrust free tier or Promptfoo (free) to validate your metrics first.',
          },
          {
            type: 'tip',
            label: 'Free First, Paid Second',
            text: 'Start with Promptfoo (free) + PromptQuorum (free tier) to establish baselines. Only add Braintrust Pro or Vellum after you have 20+ labeled test cases and a defined quality metric. Paid tools without baselines = wasted budget.',
          },
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
            a: 'Braintrust Pro is $249/month (free tier also available with 1M spans + 10K scores). Vellum Starter is $200/month; Growth is $500/month. At the Pro level, Braintrust is slightly more expensive than Vellum Starter but includes significantly more evaluation capacity. Both have free or low-cost entry points. Promptfoo is free; PromptHub is $50–200/month.',
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
          {
            q: 'Are there alternatives beyond these 4 tools in 2026?',
            a: 'Yes. The prompt evaluation market expanded significantly in 2025-2026. Confident AI offers 50+ built-in evaluation metrics at $19.99–49.99/seat/month with lower tracing costs than Braintrust ($1/GB vs $3/GB). Galileo AI provides runtime guardrails via their Luna-2 evaluation models ($100+/month). Arize Phoenix is a free, open-source LLM observability platform. For most teams, the four tools in this comparison plus Confident AI cover all practical needs.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[GPT, Claude, or Gemini? How to Pick the Right Model](/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — Choose the right model before choosing the right evaluation tool',
          '[Best Prompt Optimization Tools for Teams: 2026 Rankings](/prompt-engineering/best-prompt-optimization-tools-for-teams) — compares seven tools including Helicone and DSPy',
          '[How to Evaluate Prompt Quality Systematically](/prompt-engineering/how-to-evaluate-prompt-quality) — frameworks for measuring outputs',
          '[Prompt Chaining](/prompt-engineering/prompt-chaining) — Multi-step workflows that benefit most from systematic evaluation',
          '[Manual vs Automated Prompt Optimization](/prompt-engineering/manual-vs-automated-prompt-optimization) — when to hand-tune vs automate',
          '[Prompt Evaluation Metrics: Accuracy, Relevance, Latency](/prompt-engineering/prompt-evaluation-metrics) — specific quality metrics for LLMs',
          '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) — Promptfoo excels at comparing local model families head-to-head',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — official documentation; basis for Loop agent, MCP integration, SOC 2 certification, and $249/month Pro plan pricing (restructured March 2026)',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — product homepage; basis for version control, web UI, and $50–200/month pricing claims',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — product overview and pricing page; basis for traffic splitting, approval workflow, and $200–500/month claims',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub repository and documentation; basis for MIT license, YAML config, and GitHub Actions integration claims',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — multi-model comparison tool; basis for 25+ model dispatch and cross-model comparison claims',
          '[Confident AI](https://confident.ai) — Emerging evaluation platform offering 50+ built-in metrics at $19.99–49.99/seat/month',
          '[Galileo AI](https://galileo.ai) — Luna-2 evaluation models and runtime guardrails for LLM applications',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — Open-source LLM observability platform for tracing and evaluation',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
      description: 'Braintrust excels at eval ($249/mo Pro, free tier available), Vellum at production A/B testing ($200/mo), Promptfoo at free CI/CD, PromptHub at version control. Head-to-head on 5 criteria.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
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
          description: 'AI evaluation platform with collaborative scoring, Loop agent for autonomous iteration, and MCP IDE integration. Free tier available (1M spans, 10K scores); Pro $249/month. Best for teams measuring output quality.',
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
  },
  de: {
    theme: 'Tools & Plattformen',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    seoTitle: 'Braintrust vs. PromptHub vs. Vellum: 2-Tool-Stack 2026',
    metaDescription: 'Braintrust (€249/Mon.) bewertet Prompts, Vellum testet A/B, Promptfoo ist kostenloses CI/CD, PromptHub versioniert. Die meisten Teams brauchen genau 2 Tools.',
    ogTitle: 'Alle 4 Prompt-Tools kaufen verschwendet €700+/Monat. Der 2-Tool-Stack',
    ogDescription: 'Braintrust scored. Vellum splits traffic. Promptfoo catches regressions. PromptHub versions. Pick 2. Comparison table inside.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: Welche 2 wählen?',
    twitterDescription: 'Promptfoo ist kostenlos. Vellum kostet ab €200/Mo. Braintrust ab €249/Mo. PromptHub ab €50/Mo. Sie brauchen genau 2 — Eval + Deployment. Entscheidungsmatrix innen.',
    intro: '**Vier Tools dominieren Prompt-Management für Teams: Braintrust für Output-Evaluation, PromptHub für Versionskontrolle, Vellum für Production A/B-Tests und Promptfoo für CI/CD-Regressionsprävention.** Die meisten Teams kaufen alle vier und verschwenden €700+/Monat. Der richtige Stack ist immer exakt zwei Tools — eines für Evaluation, eines für Deployment.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
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
      { label: 'Was Braintrust, PromptHub, Vellum und Promptfoo leisten', anchor: '#what-is' },
      { label: 'Vergleichskriterien und -methodik', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: Evaluierungstiefe für €249/Monat (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub: Versionskontrolle für 50–200 €/Monat', anchor: '#prompthub' },
      { label: 'Vellum: Production-Traffic-Splitting für 200–500 €/Monat', anchor: '#vellum' },
      { label: 'Promptfoo: Kostenloses Open-Source-CI/CD-Testing', anchor: '#promptfoo' },
      { label: 'PromptQuorum: Modellvergleich vor Optimierung', anchor: '#promptquorum' },
      { label: 'Head-to-Head: Alle 4 Tools im Vergleich', anchor: '#comparison-table' },
      { label: 'Tool-Auswahl nach Teamtyp', anchor: '#which-tool' },
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
          'Braintrust führt bei Evaluierungstiefe: Custom Scoring-Funktionen, Loop-Agent für autonome Iteration, MCP-Integration für IDE-Tools, €249/Mo Pro (kostenlose Stufe verfügbar). Beste für Teams, die Output-Qualität systematisch messen.',
          'Vellum ist beste Wahl für Production Deployment mit A/B-Tests — 200–500 €/Mo, mit Traffic-Splitting und Approval-Workflows.',
          'Promptfoo ist die einzige kostenlose Option mit CI/CD-Integration — ideal für Regressions-Tests in GitHub Actions, aber ohne Production-Features.',
          'PromptHub passt Teams, die Versionskontrolle und kollaboratives Prompt-Management wollen — 50–200 €/Mo, am einfachsten zu verwenden.',
          'PromptQuorum antwortet zuerst auf die Frage „welches Modell?" mit Vergleich über 25+ Modelle — nutzen Sie es, bevor Sie sich auf eines dieser vier festlegen.',
          'Die meisten Teams brauchen 2 Tools, nicht alle 4: Braintrust + Vellum für umfassende Bewertung + Production, ODER Promptfoo + PromptHub für Budget-bewusste Teams.',
          'Integrationen: Alle vier unterstützen GitHub, aber Braintrust hat die beste API, Vellum hat die besten Webhooks, Promptfoo ist am einfachsten lokal zu deployen.',
        ],
      },
      'what-is': {
        title: 'Was Braintrust, PromptHub, Vellum und Promptfoo leisten',
        content: [
          'Diese vier Tools sind nicht austauschbar — sie lösen unterschiedliche Probleme in Ihrem LLM-Workflow:',
          '**Braintrust** ist ein Evaluierungs- und Experiment-Framework. Sie geben Prompts ein, erhalten Ausgaben, und Braintrust hilft Ihnen, sie zu bewerten (manuell oder automatisiert mit eigenen Scoring-Funktionen). Es ist am stärksten in der Messung von Qualität durch strukturierte Experimente.',
          '**PromptHub** ist eine Versionskontrolle für Prompts — denken Sie an GitHub, aber für Prompts. Sie speichern Prompt-Versionen, vergleichen Änderungen, rollback bei Bedarf. Es ist einfach und sauber, aber bietet keine Evaluierung oder Production-Deployment.',
          '**Vellum** ist ein Production-Deployment-Tool mit eingebautem A/B-Testing. Sie bauen einen Prompt, splitten den Traffic (50/50 zwischen zwei Versionen), beobachten Metriken (Latenz, Feedback, Cost), und promovieren die Gewinner-Version.',
          '**Promptfoo** ist ein Open-Source-Framework für lokales Prompt-Testing und CI/CD-Integration. Sie schreiben ein YAML-Config, führen Tests lokal oder in GitHub Actions aus, und erhalten Reports über Regressions. Es ist kostenlos, läuft überall, aber ist nicht für Production-Traffic-Splitting ausgelegt.',
          'Diese Anleitung ist ein Head-to-Head-Vergleich von vier spezifischen Tools. Für eine umfassendere Rangliste aller Prompt-Engineering-Tools siehe [Best Prompt Engineering Tools 2026](/de/prompt-engineering/best-prompt-engineering-tools-2026). Für Team-Optimierungs-Features einschließlich DSPy und Helicone siehe [Best Prompt Optimization Tools for Teams](/de/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
      },
      'evaluation-criteria': {
        title: 'Vergleichskriterien und -methodik',
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
        title: 'Braintrust: Evaluierungstiefe für €249/Monat (Pro)',
        content: [
          '**Braintrust ist eine KI-Evaluierungs-Plattform, die jeden API-Aufruf protokolliert, Ausgaben mit benutzerdefinierten Metriken bewertet und A/B-Experimente in einem gemeinsamen Labor ausführt — beste für Teams, die Output-Qualität systematisch messen.** Braintrust ist kein Prompt-Builder oder Versionskontrollsystem; es ist ein gemeinsames Evaluierungslabor.',
          'Kostenlose Stufe mit 1M Trace-Spans und 10K Scores mit unbegrenzten Benutzern — ausreichend für die meisten Evaluierungsworkflows vor der Produktion. Pro-Plan €249/Monat. Braintrust hat 2026 den Loop-Agent hinzugefügt: einen autonomen Evaluator, der Test-Fälle generiert und Prompts ohne manuelle Einrichtung iteriert. MCP-Server verbindet Claude Code und Cursor direkt mit dem Braintrust-Evaluierungsstapel aus der IDE. Der Logging-Proxy integriert sich ohne Codeänderungen mit OpenAI-, Anthropic- und Google-APIs. Sie definieren Custom-Scoring-Funktionen in TypeScript oder Python. GitHub-Integration ermöglicht Prompt-Versionierung neben Code. SOC 2 Type II Zertifizierung jetzt verfügbar. Vorteil: Pro-Plan erfordert Ingenieur-Expertise zum Entwerfen und Pflegen von Scoring-Funktionen; kostenlose Stufe ist ausgezeichnet für Evaluierungs-Baselines.',
        ],
        items: [
          'Automatische Bewerter mit LLM',
          'Experiment-Dashboard mit Signifikanz-Tests',
          'Custom Scoring-Funktionen (TypeScript oder Python)',
          'Historische Versionsanpassung (rollback, Trend-Analyse)',
          'Loop-Agent: autonomer Evaluator generiert Test-Fälle und iteriert Prompts (neu 2026)',
          'MCP-Server: direkte Integration mit Claude Code und Cursor für IDE-basierte Evaluation',
          'SOC 2 Type II zertifiziert für Enterprise-Deployments',
        ],
        callouts: [
          {
            type: 'insight',
            label: 'Wussten Sie schon?',
            text: 'Die kostenlose Stufe von Braintrust beinhaltet 1M Trace-Spans und 10K Scores mit unbegrenzten Benutzern — mehr Evaluierungskapazität als die meisten Teams in ihren ersten 3 Monaten nutzen. Sie können einen vollständigen Prompt-Evaluierungs-Workflow ohne Bezahlung ausführen.',
          },
          {
            type: 'warning',
            label: 'Scoring-Funktions-Komplexität',
            text: 'Braintrust-Pro Custom-Scorer erfordern TypeScript oder Python. Wenn niemand in Ihrem Team Scoring-Funktionen schreibt, ist Braintrust\'s Hauptdifferenzierungsmerkmal unnutzbar. Überprüfen Sie die Team-Fähigkeit vor dem Kauf. Die kostenlose Stufe und der Loop-Agent verringern diese Barriere jedoch.',
          },
        ],
      },
      'prompthub': {
        title: 'PromptHub: Versionskontrolle für 50–200 €/Monat',
        content: [
          '**Was:** PromptHub ist GitHub für Prompts. Sie speichern eine Prompt-Version, ändern sie später, und PromptHub speichert die Diff. Sie können frühere Versionen abrufen, Änderungen durchsuchen, und mehrere Prompts in einem Workspace verwalten.',
          '**Stärken:** PromptHub ist einfach und günstiger (50–200 €/Mo). Die Web-UI ist leicht zu bedienen. Es ist ideal für Teams, die Versionskontrolle und Zusammenarbeit wollen, ohne komplexe Infrastruktur.',
          '**Schwächen:** PromptHub bietet keine Evaluierung oder Messung an. Sie können nicht testen, welche Prompt-Version besser ist — Sie müssen das manuell tun oder ein separates Evaluierungs-Tool verwenden. Es gibt auch keine Production-Deployment-Unterstützung.',
        ],
      },
      'vellum': {
        title: 'Vellum: Production-Traffic-Splitting für 200–500 €/Monat',
        content: [
          '**Was:** Vellum ist ein Production-Deployment-Tool mit A/B-Testing. Sie schreiben einen Prompt in Vellums Web-Editor oder API, deployen ihn, und können den Traffic zwischen zwei Versionen (50/50 oder benutzerdefiniert) aufteilen. Vellum verfolgt Metriken (Latenz, Fehler, Kosten) und zeigt Ihnen, welche Version besser ist.',
          '**Stärken:** Vellum ist Production-focused. A/B-Tests sind eingebaut. Es unterstützt Approval-Workflows, Canary-Deployments, und Webhooks. Die Integrationen mit LLM-APIs sind nahtlos. Für Teams, die live Traffic-Splitting testen wollen, ist Vellum das beste Tool.',
          '**Schwächen:** Vellum ist teurer (200–500 €/Mo). Es ist nicht für Offline-Evaluierung ausgelegt — Sie testen in Production, nicht lokal. Es braucht etwas Engineering-Setup. Vellum ist auch nicht open-source.',
        ],
      },
      'promptfoo': {
        title: 'Promptfoo: Kostenloses Open-Source-CI/CD-Testing',
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
          '25+ Modelle einschließlich GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, und lokale Modelle über Ollama und LM Studio',
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
            'CI/CD': '✓ API + MCP',
            'Preisgestaltung': 'Kostenlos / €249 Pro',
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
        title: 'Tool-Auswahl nach Teamtyp',
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
            a: 'Braintrust Pro kostet €249/Monat (kostenlose Stufe mit 1M Spans + 10K Scores auch verfügbar). Vellum Starter kostet €200/Monat; Growth €500/Monat. Auf Pro-Ebene ist Braintrust etwas teurer als Vellum Starter, beinhaltet aber deutlich mehr Evaluierungskapazität. Beide haben kostenlose oder kostengünstige Einstiegspunkte. Promptfoo ist kostenlos; PromptHub €50–200/Monat.',
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
            q: 'Gibt es Alternativen zu diesen 4 Tools 2026?',
            a: 'Ja. Der Prompt-Evaluierungsmarkt expandierte 2025–2026 erheblich. Confident AI bietet 50+ integrierte Evaluierungsmetriken für €19,99–49,99/Benutzer/Monat mit niedrigeren Tracing-Kosten als Braintrust (€1/GB vs €3/GB). Galileo AI bietet Runtime-Guardrails über ihre Luna-2-Evaluierungsmodelle. Arize Phoenix ist eine kostenlose, Open-Source-LLM-Observability-Plattform. Für die meisten Teams decken die vier Tools in diesem Vergleich plus Confident AI alle praktischen Anforderungen ab.',
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
          '[Best Prompt Engineering Tools 2026](/de/prompt-engineering/best-prompt-engineering-tools-2026) — Größere Rangliste aller Prompt-Tools einschließlich Braintrust, PromptHub, Vellum, Promptfoo und 20+ weiteren',
          '[Best Prompt Optimization Tools for Teams](/de/prompt-engineering/best-prompt-optimization-tools-for-teams) — Team-fokussierte Optimierung mit DSPy, Helicone, OpenAI Evals',
          '[How to Evaluate Prompt Quality](/de/prompt-engineering/how-to-evaluate-prompt-quality) — Metriken und Frameworks für Prompt-Bewertung',
          '[Prompt Evaluation Metrics](/de/prompt-engineering/prompt-evaluation-metrics) — Tiefe in Accuracy, Latenz, Cost, Relevance und Custom Metrics',
        ],
      },
      'sources': {
        title: 'Quellen',
        items: [
          '[Braintrust — AI Evaluation Platform](https://braintrust.dev) — Offizielle Dokumentation; Basis für Loop-Agent, MCP-Integration, SOC 2-Zertifizierung und €249/Mo Pro-Plan-Preisgestaltung (Umstrukturierung März 2026)',
          '[PromptHub — Prompt Version Control](https://prompthub.ai) — Produkt-Homepage; Basis für Versionskontrolle, Web-UI und 50–200 €/Mo Preisgestaltung-Ansprüche',
          '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — Produkt-Übersicht und Preisgestaltungs-Seite; Basis für Traffic-Splitting, Approval-Workflow und 200–500 €/Mo Ansprüche',
          '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub-Repository und Dokumentation; Basis für MIT-Lizenz, YAML-Config und GitHub-Actions-Integration Ansprüche',
          '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — Multi-Modell-Vergleich-Tool; Basis für 25+ Modell-Verteilung und Cross-Modell-Vergleich Ansprüche',
          '[Confident AI](https://confident.ai) — Emerging Evaluierungsplattform mit 50+ integrierten Metriken für €19,99–49,99/Benutzer/Monat',
          '[Galileo AI](https://galileo.ai) — Luna-2-Evaluierungsmodelle und Runtime-Guardrails für LLM-Anwendungen',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — Open-Source LLM-Observability-Plattform für Tracing und Evaluierung',
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
      url: 'https://www.promptquorum.com/de/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
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
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt-Management Tools (Vergleich)',
      inLanguage: 'de',
      url: 'https://www.promptquorum.com/de/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'KI-Evaluierungsplattform mit zusammenarbeitende Scoring, Loop-Agent für autonome Iteration und MCP-IDE-Integration. Kostenlose Stufe verfügbar (1M Spans, 10K Scores); Pro €249/Monat. Beste für Teams, die Output-Qualität messen.' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Versionskontrolle für Prompts mit Team-Zusammenarbeit' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'Production A/B-Testing mit Live-Traffic-Splitting' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Open-Source Regressions-Testing mit GitHub Actions Integration' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Cross-Modell-Vergleich über 25+ Modelle für Modellauswahl' },
      ],
    },
  },
  es: {
    theme: 'Tools & Platforms',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    seoTitle: 'Braintrust vs PromptHub vs Vellum: el stack de 2 en 2026',
    intro: '**Cuatro herramientas dominan la gestión de prompts para equipos: Braintrust para evaluación de output, PromptHub para control de versiones, Vellum para A/B testing en producción y Promptfoo para prevención de regresiones CI/CD.** La mayoría de equipos compra las cuatro y desperdicia $1.000+/mes. El stack correcto siempre son exactamente dos herramientas — una para evaluación, otra para despliegue.',
    metaDescription: 'Braintrust ($249/mes) evalúa prompts. Vellum ($200–500/mes) hace A/B en producción. Promptfoo es gratis. PromptHub versiona. La mayoría necesita solo 2.',
    ogTitle: 'Comprar las 4 herramientas de prompts desperdicia $1.000+/mes. Aquí está el stack de 2 herramientas',
    ogDescription: 'Braintrust puntúa. Vellum divide el tráfico. Promptfoo detecta regresiones. PromptHub versiona. Elige 2. Tabla comparativa incluida.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: cuáles 2 elegir',
    twitterDescription: 'Promptfoo es gratis. Vellum desde $200/mes. Braintrust desde $500/mes. PromptHub desde $50/mes. Necesitas exactamente 2 — eval + despliegue. Matriz de decisión incluida.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Ingenieros de prompts y engineering managers eligiendo un stack de gestión de prompts',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Gestión de Prompts', 'Evaluación de LLM', 'Versionado de Prompts'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'Qué hacen Braintrust, PromptHub, Vellum y Promptfoo', anchor: '#what-is' },
      { label: 'Cómo comparamos estas herramientas', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: profundidad de evaluación a $249/mes (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub: control de versiones a $50–200/mes', anchor: '#prompthub' },
      { label: 'Vellum: división de tráfico en producción a $200–500/mes', anchor: '#vellum' },
      { label: 'Promptfoo: testing CI/CD open-source gratuito', anchor: '#promptfoo' },
      { label: 'PromptQuorum: comparación multi-modelo antes de la optimización', anchor: '#promptquorum' },
      { label: 'Cara a cara: las 4 herramientas comparadas', anchor: '#comparison-table' },
      { label: 'Selección de herramienta por tipo de equipo', anchor: '#which-tool' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Cómo elegir entre estas 4 herramientas', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
      { label: 'Fuentes', anchor: '#sources' },
    ],
    quickFacts: [
      'Promptfoo es la única herramienta gratuita (licencia MIT, sin tier de pago) — ideal para equipos que quieren CI/CD sin coste SaaS',
      'El plan Pro de Braintrust empieza a $249/mes (tier gratuito disponible con 1M spans + 10K scores); Vellum oscila entre $200–500/mes; PromptHub entre $50–200/mes',
      'Un stack típico de dos herramientas (evaluación + despliegue) cuesta $250–700/mes para un equipo de 5 personas',
      'Solo Vellum soporta división real de tráfico en producción (tests A/B con usuarios reales)',
      'Las cuatro herramientas soportan las APIs de OpenAI y Anthropic; solo Promptfoo soporta 40+ proveedores de forma nativa',
      'PromptQuorum añade un primer paso agnóstico al modelo: despacha un prompt a 25+ modelos antes de comprometerte con un proveedor',
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust lidera en profundidad de evaluación: funciones de scoring personalizadas, agente Loop para iteración autónoma, integración MCP para herramientas IDE, Pro a $249/mes (tier gratuito disponible). Ideal para equipos que miden la calidad del output sistemáticamente.',
          'Vellum lidera en A/B testing en producción: divide el tráfico real de usuarios entre variantes, flujos de aprobación, $200–500/mes. Ideal para features LLM en vivo.',
          'Promptfoo es la alternativa gratuita: CLI open-source, suites de test en YAML, integración con GitHub Actions. Ideal para equipos DevOps/plataforma.',
          'PromptHub se centra en control de versiones y compartición en equipo. El más fácil de incorporar; el menos costoso ($50–200/mes). Ideal para equipos de contenido y marketing.',
          'La mayoría de equipos necesita exactamente 2 herramientas: una para evaluación (Braintrust o Promptfoo) y otra para despliegue (Vellum o PromptHub). Comprar las 4 desperdicia $700+/mes.',
          'Ninguna herramienta destaca en los cinco criterios: colaboración, A/B testing, scoring de evaluación, integración CI/CD y precios transparentes.',
          'PromptQuorum: antes de optimizar para cualquier herramienta, usa PromptQuorum para comparar cómo funciona tu prompt en 25+ modelos simultáneamente.',
        ],
      },
      whatIs: {
        id: 'what-is',
        title: 'Qué hacen Braintrust, PromptHub, Vellum y Promptfoo',
        content: [
          '**Braintrust, PromptHub, Vellum y Promptfoo resuelven problemas diferentes de equipos de prompts.** Braintrust es una plataforma de evaluación (puntúa outputs). PromptHub es un sistema de control de versiones (organiza y comparte prompts). Vellum es una plataforma de despliegue con A/B testing (ejecuta experimentos en tráfico real). Promptfoo es una herramienta de automatización de tests (detecta regresiones en CI/CD). Se solapan pero no se reemplazan entre sí.',
          'La razón por la que los equipos tienen dificultades para elegir una: las cuatro afirman "optimizar prompts", pero lo hacen en etapas diferentes. Braintrust optimiza midiendo; Vellum optimiza dividiendo el tráfico; Promptfoo optimiza detectando regresiones; PromptHub optimiza organizando. Un equipo podría usar Braintrust para descubrir un prompt mejor, Promptfoo para testarlo en CI/CD y Vellum para desplegarlo.',
          'Esta guía es una comparativa directa de cuatro herramientas específicas. Para un ranking más amplio de todas las herramientas de prompt engineering, consulta [Mejores herramientas de prompt engineering 2026](/es/prompt-engineering/best-prompt-engineering-tools-2026). Para características de optimización en equipo incluyendo DSPy y Helicone, consulta [Mejores herramientas de optimización de prompts para equipos](/es/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Braintrust puntúa, PromptHub versiona, Vellum hace A/B testing, Promptfoo testea regresiones — cuatro herramientas de prompts que se solapan pero no se reemplazan entre sí.',
          },
          {
            type: 'in-plain-terms',
            text: 'Piénsalo como construir software: necesitas un framework de test (Promptfoo), un dashboard de calidad (Braintrust), un pipeline de despliegue (Vellum) y un repositorio de código (PromptHub). La mayoría de equipos necesita dos de estos, no los cuatro.',
          },
        ],
      },
      evaluationCriteria: {
        id: 'evaluation-criteria',
        title: 'Cómo comparamos estas herramientas',
        content: [
          '**Evaluamos las cuatro herramientas según cinco criterios que importan en los flujos de trabajo reales de equipos: qué tan bien soportan la colaboración en equipo, si incluyen A/B testing o experimentación, capacidades de scoring o evaluación, integración CI/CD y transparencia de precios.**',
        ],
        columns: ['Criterio', 'Qué mide', 'Por qué importa'],
        rows: [
          {
            Criterio: 'Colaboración en equipo',
            'Qué mide': 'Control de acceso por roles, ramas, dashboards compartidos',
            'Por qué importa': 'Múltiples ingenieros deben editar prompts sin sobreescribirse',
          },
          {
            Criterio: 'A/B testing',
            'Qué mide': 'Comparación de variantes lado a lado, división de tráfico',
            'Por qué importa': 'Comparar variantes en el mismo conjunto de entrada o tráfico de producción',
          },
          {
            Criterio: 'Evaluación/scoring',
            'Qué mide': 'Métricas personalizadas, scorers basados en LLM, gates de calidad',
            'Por qué importa': 'Medir la calidad del output, no solo mirarlo visualmente',
          },
          {
            Criterio: 'Integración CI/CD',
            'Qué mide': 'CLI, API, GitHub Actions, testing automatizado',
            'Por qué importa': 'Detectar regresiones antes del despliegue; automatizar controles de calidad',
          },
          {
            Criterio: 'Transparencia de precios',
            'Qué mide': 'Página de precios pública, costes claros por unidad',
            'Por qué importa': 'Previsibilidad presupuestaria para equipos de 3–10 personas',
          },
        ],
      },
      braintrust: {
        id: 'braintrust',
        title: 'Braintrust: profundidad de evaluación a $249/mes (Pro)',
        content: [
          '**Braintrust es una plataforma de evaluación de IA que registra cada llamada a la API, puntúa outputs con métricas personalizadas y ejecuta experimentos A/B en un laboratorio compartido — ideal para equipos que miden la calidad del output sistemáticamente.** Braintrust no es un constructor de prompts ni un sistema de control de versiones; es un laboratorio de evaluación compartido.',
          'El tier gratuito incluye 1M spans de trazas y 10K scores con usuarios ilimitados — suficiente para la mayoría de flujos de trabajo de evaluación pre-producción. El plan Pro es $249/mes. Braintrust añadió el agente Loop en 2026: un evaluador autónomo que genera casos de test e itera sobre prompts sin configuración manual. El servidor MCP conecta Claude Code y Cursor directamente al stack de evaluación de Braintrust desde tu IDE. El proxy de logging se integra con las APIs de OpenAI, Anthropic y Google sin cambios de código. Defines funciones de scoring personalizadas en TypeScript o Python. La integración con GitHub permite versionar prompts junto al código. Certificación SOC 2 Type II ahora disponible.',
          'Las mejores características para equipos: dashboards de experimentos compartidos (todos los miembros ven resultados de eval en tiempo real), control de acceso por roles (admin/miembro/observador), historial de commits tipo Git para prompts y logging en producción (cada llamada a la API registrada con entradas, salidas y puntuaciones).',
          'Para las métricas detrás del scoring personalizado, consulta [Métricas de evaluación de prompts: precisión, relevancia, latencia](/es/prompt-engineering/prompt-evaluation-metrics).',
        ],
        items: [
          'Dashboards de experimentos compartidos: todos los miembros del equipo ven resultados de eval en vivo',
          'Control de acceso por roles: roles admin/miembro/observador',
          'Versionado de prompts mediante historial de commits tipo Git',
          'Logging en producción: cada llamada a la API registrada con entradas/salidas/puntuaciones',
          'Agente Loop: evaluador autónomo que genera casos de test e itera sobre prompts (nuevo en 2026)',
          'Servidor MCP: integración directa con Claude Code y Cursor para evaluación desde el IDE',
          'Certificación SOC 2 Type II para despliegues enterprise',
        ],
        callouts: [
          {
            type: 'insight',
            label: '¿Sabías que?',
            text: 'El tier gratuito de Braintrust incluye 1M spans de trazas y 10K scores con usuarios ilimitados — más capacidad de evaluación de la que usa la mayoría de equipos en sus primeros 3 meses. Puedes ejecutar un flujo de trabajo completo de evaluación de prompts sin pagar nada.',
          },
          {
            type: 'warning',
            label: 'Complejidad de funciones de scoring',
            text: 'Los scorers personalizados de Braintrust Pro requieren TypeScript o Python. Si nadie en tu equipo escribe funciones de scoring, el principal diferenciador de Braintrust es inusable. Sin embargo, el tier gratuito y el agente Loop reducen esta barrera. Verifica la capacidad del equipo antes de comprometerte con Pro.',
          },
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: control de versiones a $50–200/mes',
        content: [
          '**PromptHub es una plataforma de control de versiones y compartición de prompts — los equipos almacenan prompts en una biblioteca central, etiquetan versiones y comparten en toda la organización sin gestionar hojas de cálculo o mensajes de Slack.** El más fácil de incorporar de los cuatro.',
          'Starter ~$50/mes; Pro ~$200/mes. Interfaz web para usuarios no técnicos. Historial de versiones para cada prompt, etiquetas para organización, flujos de despliegue. Soporta las APIs de OpenAI, Anthropic y personalizadas. Contrapartida: sin scoring de evaluación personalizado; limitado a controles de calidad integrados; no adecuado para equipos que ejecutan experimentos A/B en vivo.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: división de tráfico en producción a $200–500/mes',
        content: [
          '**Vellum es una plataforma de despliegue de prompts con A/B testing integrado que divide el tráfico real de producción entre variantes de prompts y mide la calidad del output en el mundo real — ideal para equipos que ejecutan features LLM en vivo.** Vellum es un plano de control, no una herramienta de testing.',
          'Starter $200/mes; Growth $500/mes; Enterprise personalizado. Enruta el tráfico de producción por porcentaje entre variantes. La evaluación compara variantes en datasets de test. Características para equipos: workspace compartido, revisiones de prompts estilo PR, flujos de aprobación de despliegue. Contrapartida: la opción más cara; exagerada para equipos pre-producción o que aún no manejan tráfico real de usuarios.',
          'Para entender cuándo el A/B testing añade valor vs la optimización manual, consulta [Optimización manual vs automatizada de prompts](/es/prompt-engineering/manual-vs-automated-prompt-optimization).',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: testing CI/CD open-source gratuito',
        content: [
          '**Promptfoo es una herramienta CLI open-source que ejecuta suites de test de prompts automatizadas contra múltiples LLMs — los equipos la integran en pipelines CI/CD para detectar regresiones de prompts antes del despliegue.** Gratuito (licencia MIT). Define los casos de test en YAML, haz commit a Git y Promptfoo los ejecuta en cada PR.',
          'Soporta 40+ proveedores LLM. Integración con GitHub Actions disponible. Proporcionas entradas, patrones de output esperado y aserciones personalizadas basadas en LLM. Amigable para equipos: configuraciones de test en Git, ejecutadas en CI, sin cuenta ni facturas mensuales. Contrapartida: sin interfaz; solo para ingenieros; sin características de colaboración integradas más allá de Git.',
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
        callouts: [
          {
            type: 'tip',
            label: 'Promptfoo + GitHub Actions',
            text: 'Las configuraciones de test YAML de Promptfoo se commitean directamente a Git. En cada PR, GitHub Actions ejecuta la suite de test contra todos los modelos configurados y bloquea el merge si falla. Sin coste mensual, integración CI/CD completa.',
          },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: comparación multi-modelo antes de la optimización',
        content: [
          '**Antes de comprometerte con Braintrust, Vellum, PromptHub o Promptfoo para un proveedor LLM específico, usa [PromptQuorum](/features) para despachar un prompt a 25+ modelos simultáneamente y ver cuál funciona mejor — un primer paso agnóstico al modelo.** Tier gratuito disponible.',
          'A diferencia de las cuatro herramientas anteriores (que optimizan para un solo modelo a la vez), PromptQuorum responde a "¿qué modelo maneja mejor este prompt?" en una sola ejecución. Después de descubrir el modelo óptimo con PromptQuorum, enruta a Braintrust para evaluación más profunda, Vellum para A/B testing en producción o Promptfoo para prevención de regresiones CI/CD.',
        ],
        items: [
          '25+ modelos incluyendo GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro y modelos locales vía Ollama y LM Studio',
          '9 frameworks de prompts integrados — TRACE, CO-STAR, CRAFT y más',
          'Comparación de respuestas lado a lado con scoring por consenso',
          'Conteo de tokens por modelo — ve las diferencias de coste antes de comprometerte',
          'Tier gratuito — no se requiere configuración técnica',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Cara a cara: las 4 herramientas comparadas',
        content: [
          '**Ninguna herramienta destaca en los cinco criterios. Braintrust lidera en profundidad de evaluación; Vellum lidera en división de tráfico en producción; Promptfoo lidera en CI/CD gratuito; PromptHub lidera en simplicidad.**',
        ],
        columns: ['Herramienta', 'Uso principal', 'Colaboración', 'CI/CD', 'Precios', 'Ideal para'],
        rows: [
          {
            Herramienta: 'Braintrust',
            'Uso principal': 'Evaluación de output',
            Colaboración: '✅ Roles + dashboards',
            'CI/CD': '✓ API + MCP',
            Precios: 'Gratis / $249 Pro',
            'Ideal para': 'Equipos centrados en calidad',
          },
          {
            Herramienta: 'PromptHub',
            'Uso principal': 'Control de versiones',
            Colaboración: '✅ Workspace de equipo',
            'CI/CD': '✗ Ninguno',
            Precios: '$50–200/mes',
            'Ideal para': 'Equipos de contenido',
          },
          {
            Herramienta: 'Vellum',
            'Uso principal': 'A/B en producción',
            Colaboración: '✅ Revisiones PR',
            'CI/CD': '✓ Webhooks',
            Precios: '$200–500/mes',
            'Ideal para': 'Features en vivo',
          },
          {
            Herramienta: 'Promptfoo',
            'Uso principal': 'Testing CI/CD',
            Colaboración: 'Basado en Git',
            'CI/CD': '✅ GitHub Actions',
            Precios: 'Gratis',
            'Ideal para': 'Equipos DevOps',
          },
          {
            Herramienta: 'PromptQuorum',
            'Uso principal': 'Comparación multi-modelo',
            Colaboración: '✓ Workspace compartido',
            'CI/CD': '✗ Ninguno',
            Precios: 'Gratis + créditos',
            'Ideal para': 'Selección de modelo',
          },
        ],
        callouts: [
          {
            type: 'insight',
            label: 'Regla del stack de dos herramientas',
            text: 'La mayoría de equipos desperdicia dinero en 3–4 herramientas. El stack óptimo son dos: una para evaluación (Braintrust o Promptfoo) y otra para despliegue/versionado (Vellum o PromptHub). Gasto total: $250–700/mes en lugar de $1.000+.',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Selección de herramienta por tipo de equipo',
        content: [
          '**Ajusta la herramienta al cuello de botella principal y la profundidad técnica de tu equipo.**',
          'No uses Braintrust si tu equipo no puede escribir funciones de scoring personalizadas — quedará sin usar. No uses Vellum si aún no tienes usuarios reales — cómpralo después de llegar a producción. No uses PromptHub solo si necesitas medir la calidad del output — organiza prompts pero no puede puntuarlos.',
          'Para el flujo de trabajo completo de configuración del equipo incluyendo propiedad y reglas de revisión, consulta [Configuración de prompt engineering para equipos pequeños](/es/prompt-engineering/prompt-engineering-setup-small-teams).',
        ],
        numberedItems: [
          {
            title: 'Equipos de ingeniería con preocupaciones de calidad → Braintrust',
            whyItMatters: 'Diseña funciones de scoring personalizadas; ejecuta evaluaciones reproducibles; mide el impacto de los cambios de prompt.',
          },
          {
            title: 'Equipos de contenido/marketing que necesitan control de versiones → PromptHub',
            whyItMatters: 'Interfaz web simple; sin código requerido; biblioteca de prompts centralizada.',
          },
          {
            title: 'Equipos de producto con features LLM en vivo → Vellum',
            whyItMatters: 'A/B test en tráfico real; flujos de aprobación; mide el impacto en el mundo real.',
          },
          {
            title: 'Equipos DevOps/plataforma que previenen regresiones → Promptfoo',
            whyItMatters: 'Gratis; basado en YAML; se integra con GitHub; detecta regresiones en CI.',
          },
          {
            title: 'Todos los equipos (primer paso) → PromptQuorum',
            whyItMatters: 'Compara tu prompt en 25+ modelos antes de comprometerte a optimizar para un proveedor.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes',
        mistakes: [
          {
            mistake: 'Comprar las cuatro herramientas para cubrir todas las bases',
            problem: 'El gasto total llega a $700+/mes; mantienes cuatro sistemas; confusión del equipo sobre qué herramienta usar para qué.',
            fix: 'Elige dos: una para evaluación (Braintrust o Promptfoo) y otra para despliegue (Vellum o PromptHub). Añade PromptQuorum como primer paso gratuito.',
          },
          {
            mistake: 'No evaluar primero los tiers gratuitos',
            problem: 'Tanto Braintrust (1M trazas, 10K scores gratis) como Promptfoo (completamente gratis) ofrecen suficiente capacidad para ejecutar una evaluación real antes de pagar. Los equipos que se saltan el tier gratuito desperdician el primer mes aprendiendo lo que deberían haber medido.',
            fix: 'Empieza con Promptfoo (CLI gratuita) o el tier gratuito de Braintrust. Construye tu dataset de evaluación. Define tus métricas de calidad. Solo entonces evalúa herramientas de pago contra tu línea base establecida.',
          },
          {
            mistake: 'Elegir una herramienta por reputación de marca en lugar de ajuste al flujo de trabajo',
            problem: 'Compras Braintrust Pro pero tu equipo no es técnico y no puede escribir funciones de scoring; o compras PromptHub cuando tu cuello de botella real es medir la calidad.',
            fix: 'Identifica tu cuello de botella principal primero (evaluación, versionado, A/B testing, prevención de regresiones) antes de evaluar herramientas.',
          },
          {
            mistake: 'Adoptar una herramienta sin construir un dataset de evaluación',
            problem: 'Te registras en Braintrust o Vellum pero no tienes pares etiquetados de entrada/salida contra los que puntuar. Las herramientas quedan sin usar; no ves ROI.',
            fix: 'Construye un conjunto de test de 20–50 ejemplos etiquetados antes de pagar por cualquier plataforma. Usa el tier gratuito de Braintrust o Promptfoo para validar tus métricas primero.',
          },
          {
            mistake: 'Usar Vellum sin una métrica de calidad',
            problem: 'Haces A/B test de dos prompts en tráfico de producción pero no has definido "buen output". La variante de ventas se enruta a usuarios; nadie puede explicar por qué.',
            fix: 'Define 3–5 criterios de calidad e impleméntalos como aserciones (en Promptfoo) o scorers personalizados (en Braintrust) antes de ejecutar tests A/B.',
          },
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Cómo elegir entre estas 4 herramientas',
        numberedItems: [
          'Identifica tu cuello de botella principal: ¿es la calidad del output, el coste, la latencia o la velocidad del equipo?',
          'Evalúa la profundidad técnica: equipo no técnico → PromptHub; mixto → Braintrust + Vellum; muy técnico → Promptfoo.',
          'Construye un dataset de evaluación etiquetado (20–50 pares entrada/salida) antes de evaluar cualquier herramienta de pago.',
          'Empieza con una herramienta gratuita (Promptfoo o PromptQuorum) para establecer métricas de línea base.',
          'Ejecuta una prueba de 2 semanas con los prompts reales del equipo antes de comprometerte con una plataforma SaaS.',
          'Planea para dos herramientas: una para evaluación y otra para despliegue/versionado.',
        ],
        callouts: [
          {
            type: 'tip',
            label: 'Consejo profesional: construye primero un dataset de test',
            text: 'Construye un conjunto de test de 20–50 pares etiquetados de entrada/salida ANTES de evaluar cualquier herramienta de pago. Sin un dataset de línea base, no puedes medir si la herramienta realmente mejora tus prompts — solo estás pagando por un dashboard sin datos. Usa el tier gratuito de Braintrust o Promptfoo (gratis) para validar tus métricas primero.',
          },
          {
            type: 'tip',
            label: 'Primero gratis, después de pago',
            text: 'Empieza con Promptfoo (gratis) + PromptQuorum (tier gratuito) para establecer líneas base. Solo añade Braintrust Pro o Vellum después de tener 20+ casos de test etiquetados y una métrica de calidad definida. Herramientas de pago sin líneas base = presupuesto desperdiciado.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Cuál es la principal diferencia entre Braintrust y PromptHub?',
            a: 'Braintrust es una plataforma de evaluación: registras llamadas a la API, defines funciones de scoring personalizadas y ejecutas experimentos A/B para medir la calidad del output. PromptHub es un sistema de control de versiones: almacenas prompts en una biblioteca, etiquetas versiones y compartes en el equipo. Usa Braintrust cuando tu cuello de botella sea medir la calidad; usa PromptHub cuando tu cuello de botella sea organizar prompts.',
          },
          {
            q: '¿Es Promptfoo realmente gratis?',
            a: 'Sí. Promptfoo es open-source (licencia MIT) y no tiene tier de pago. Lo ejecutas como herramienta CLI en tu propia infraestructura o en GitHub Actions. No hay tarifas mensuales, límites de llamadas a API ni restricciones freemium.',
          },
          {
            q: '¿Debo elegir Braintrust o Vellum?',
            a: 'Elige Braintrust si tu objetivo principal es medir y mejorar la calidad del output con métricas personalizadas. Elige Vellum si tu objetivo principal es A/B testing en tráfico real de producción. Braintrust funciona mejor pre-producción; Vellum funciona mejor con usuarios reales.',
          },
          {
            q: '¿Cuánto más caro es Vellum que Braintrust?',
            a: 'Braintrust Pro es $249/mes (también hay tier gratuito con 1M spans + 10K scores). Vellum Starter es $200/mes; Growth es $500/mes. Al nivel Pro, Braintrust es ligeramente más caro que Vellum Starter pero incluye significativamente más capacidad de evaluación. Ambos tienen puntos de entrada gratuitos o de bajo coste. Promptfoo es gratis; PromptHub es $50–200/mes.',
          },
          {
            q: '¿Cómo integro Promptfoo con GitHub Actions?',
            a: 'Promptfoo proporciona una plantilla de GitHub Actions. Define tus casos de test en YAML, haz commit de la configuración a Git y usa el promptfoo-github-action oficial en tu archivo de flujo de trabajo. En cada PR, Promptfoo ejecuta tus tests contra todos los modelos configurados e informa del estado de pass/fail.',
          },
          {
            q: '¿Puede PromptHub reemplazar a Braintrust?',
            a: 'No. PromptHub almacena y versiona prompts. Braintrust evalúa y puntúa prompts. Puedes usar PromptHub solo si tu única necesidad es organizar prompts; no puedes usarlo solo si necesitas medir la calidad del output o ejecutar experimentos.',
          },
          {
            q: '¿Es Vellum lo mismo que una plataforma de gestión de prompts?',
            a: 'No. Vellum es una plataforma de despliegue y A/B testing. Incluye control básico de versiones, pero su principal fortaleza es dividir el tráfico de producción entre variantes de prompts y medir el impacto en el mundo real. Las verdaderas herramientas de gestión de prompts (PromptHub) se centran en organizar y compartir prompts, no en testearlos.',
          },
          {
            q: '¿Hay alternativas más allá de estas 4 herramientas en 2026?',
            a: 'Sí. El mercado de evaluación de prompts se expandió significativamente en 2025-2026. Confident AI ofrece 50+ métricas de evaluación integradas a $19.99–49.99/seat/mes con costes de tracing más bajos que Braintrust ($1/GB vs $3/GB). Galileo AI proporciona guardarraíles en tiempo de ejecución vía sus modelos de evaluación Luna-2 ($100+/mes). Arize Phoenix es una plataforma de observabilidad LLM gratuita y open-source. Para la mayoría de equipos, las cuatro herramientas de esta comparativa más Confident AI cubren todas las necesidades prácticas.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[¿GPT, Claude o Gemini? Cómo elegir el modelo correcto](/es/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — Elige el modelo correcto antes de elegir la herramienta de evaluación correcta',
          '[Mejores herramientas de optimización de prompts para equipos: rankings 2026](/es/prompt-engineering/best-prompt-optimization-tools-for-teams) — compara siete herramientas incluyendo Helicone y DSPy',
          '[Cómo evaluar la calidad de prompts sistemáticamente](/es/prompt-engineering/how-to-evaluate-prompt-quality) — frameworks para medir outputs',
          '[Prompt Chaining](/es/prompt-engineering/prompt-chaining) — Flujos de trabajo multi-paso que más se benefician de la evaluación sistemática',
          '[Optimización manual vs automatizada de prompts](/es/prompt-engineering/manual-vs-automated-prompt-optimization) — cuándo ajustar manualmente vs automatizar',
          '[Métricas de evaluación de prompts: precisión, relevancia, latencia](/es/prompt-engineering/prompt-evaluation-metrics) — métricas de calidad específicas para LLMs',
          '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) — Promptfoo destaca en la comparación directa de familias de modelos locales',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Braintrust — Plataforma de Evaluación de IA](https://braintrust.dev) — documentación oficial; base para las afirmaciones sobre el agente Loop, integración MCP, certificación SOC 2 y precios del plan Pro a $249/mes (reestructurado marzo 2026)',
          '[PromptHub — Control de Versiones de Prompts](https://prompthub.ai) — homepage del producto; base para las afirmaciones de control de versiones, interfaz web y precios $50–200/mes',
          '[Vellum — Despliegue y A/B Testing de LLM](https://www.vellum.ai) — descripción general del producto y página de precios; base para las afirmaciones de división de tráfico, flujo de aprobación y precios $200–500/mes',
          '[Promptfoo — Testing de Prompts Open-Source](https://www.promptfoo.dev) — repositorio GitHub y documentación; base para las afirmaciones de licencia MIT, configuración YAML e integración GitHub Actions',
          '[PromptQuorum — Despacho Multi-Modelo](https://promptquorum.com) — herramienta de comparación multi-modelo; base para las afirmaciones de despacho a 25+ modelos y comparación multi-modelo',
          '[Confident AI](https://confident.ai) — Plataforma de evaluación emergente con 50+ métricas integradas a $19.99–49.99/seat/mes',
          '[Galileo AI](https://galileo.ai) — Modelos de evaluación Luna-2 y guardarraíles en tiempo de ejecución para aplicaciones LLM',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — Plataforma de observabilidad LLM open-source para tracing y evaluación',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
      description: 'Braintrust ($249/mes) evalúa prompts. Vellum ($200–500/mes) hace A/B testing en producción. Promptfoo CI/CD gratis. PromptHub ($50–200/mes) versiona. La mayoría de equipos necesita exactamente 2.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/es/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      inLanguage: 'es',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Gestión de Prompts' },
        { '@type': 'Thing', name: 'Evaluación de LLM' },
        { '@type': 'Thing', name: 'Versionado de Prompts' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptHub' },
        { '@type': 'SoftwareApplication', name: 'Vellum' },
        { '@type': 'SoftwareApplication', name: 'Promptfoo' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'es',
      name: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: Comparativa de herramientas',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'Plataforma de evaluación de IA con scoring colaborativo, agente Loop para iteración autónoma e integración MCP-IDE. Tier gratuito disponible (1M Spans, 10K Scores); Pro $249/mes. Ideal para equipos que miden la calidad del output.' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Control de versiones de prompts con colaboración en equipo' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'A/B testing en producción con división de tráfico real' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Testing de regresión open-source con integración GitHub Actions' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Comparación multi-modelo en 25+ modelos para selección de modelo' },
      ],
    },
  },

  pt: {
    theme: 'Tools & Platforms',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    seoTitle: 'Braintrust vs PromptHub vs Vellum: o stack de 2 em 2026',
    intro: '**Quatro ferramentas dominam o gerenciamento de prompts para equipes: Braintrust para avaliação de saída, PromptHub para controle de versões, Vellum para A/B testing em produção e Promptfoo para prevenção de regressões CI/CD.** A maioria das equipes compra as quatro e desperdiça $1.000+/mês. O stack correto é sempre exatamente duas ferramentas — uma para avaliação, outra para implantação.',
    metaDescription: 'Braintrust ($249/mês) avalia prompts. Vellum ($200–500/mês) faz A/B em produção. Promptfoo é gratuito. PromptHub versiona. A maioria precisa de apenas 2.',
    ogTitle: 'Comprar as 4 ferramentas de prompts desperdiça $1.000+/mês. Aqui está o stack de 2 ferramentas',
    ogDescription: 'Braintrust pontua. Vellum divide o tráfego. Promptfoo detecta regressões. PromptHub versiona. Escolha 2. Tabela comparativa incluída.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: quais 2 escolher',
    twitterDescription: 'Promptfoo é gratuito. Vellum a partir de $200/mês. Braintrust a partir de $500/mês. PromptHub a partir de $50/mês. Você precisa de exatamente 2 — avaliação + implantação. Matriz de decisão incluída.',
    publishDate: '2026-04-10',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Engenheiros de prompts e gerentes de engenharia escolhendo um stack de gerenciamento de prompts',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['Gerenciamento de Prompts', 'Avaliação de LLM', 'Versionamento de Prompts'],
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'O que fazem Braintrust, PromptHub, Vellum e Promptfoo', anchor: '#what-is' },
      { label: 'Como comparamos essas ferramentas', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: profundidade de avaliação a $249/mês (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub: controle de versões a $50–200/mês', anchor: '#prompthub' },
      { label: 'Vellum: divisão de tráfego em produção a $200–500/mês', anchor: '#vellum' },
      { label: 'Promptfoo: testes CI/CD open-source gratuito', anchor: '#promptfoo' },
      { label: 'PromptQuorum: comparação multi-modelo antes da otimização', anchor: '#promptquorum' },
      { label: 'Frente a frente: as 4 ferramentas comparadas', anchor: '#comparison-table' },
      { label: 'Seleção de ferramenta por tipo de equipe', anchor: '#which-tool' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Como escolher entre essas 4 ferramentas', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Fontes', anchor: '#sources' },
    ],
    quickFacts: [
      'Promptfoo é a única ferramenta gratuita (licença MIT, sem tier pago) — ideal para equipes que querem CI/CD sem custo SaaS',
      'O plano Pro do Braintrust começa em $249/mês (tier gratuito disponível com 1M spans + 10K scores); Vellum varia entre $200–500/mês; PromptHub entre $50–200/mês',
      'Um stack típico de duas ferramentas (avaliação + implantação) custa $250–700/mês para uma equipe de 5 pessoas',
      'Apenas Vellum suporta divisão real de tráfego em produção (testes A/B com usuários reais)',
      'As quatro ferramentas suportam as APIs da OpenAI e Anthropic; apenas Promptfoo suporta 40+ provedores nativamente',
      'PromptQuorum adiciona um primeiro passo agnóstico ao modelo: despacha um prompt para 25+ modelos antes de se comprometer com um fornecedor',
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust lidera em profundidade de avaliação: funções de scoring personalizadas, agente Loop para iteração autônoma, integração MCP para ferramentas IDE, Pro a $249/mês (tier gratuito disponível). Ideal para equipes que medem a qualidade da saída sistematicamente.',
          'Vellum lidera em A/B testing em produção: divide o tráfego real de usuários entre variantes, fluxos de aprovação, $200–500/mês. Ideal para recursos LLM ao vivo.',
          'Promptfoo é a alternativa gratuita: CLI open-source, suites de testes em YAML, integração com GitHub Actions. Ideal para equipes DevOps/plataforma.',
          'PromptHub se concentra em controle de versões e compartilhamento em equipe. O mais fácil de integrar; o menos custoso ($50–200/mês). Ideal para equipes de conteúdo e marketing.',
          'A maioria das equipes precisa de exatamente 2 ferramentas: uma para avaliação (Braintrust ou Promptfoo) e outra para implantação (Vellum ou PromptHub). Comprar as 4 desperdiça $700+/mês.',
          'Nenhuma ferramenta se destaca nos cinco critérios: colaboração, A/B testing, scoring de avaliação, integração CI/CD e preços transparentes.',
          'PromptQuorum: antes de otimizar para qualquer ferramenta, use PromptQuorum para comparar como seu prompt funciona em 25+ modelos simultaneamente.',
        ],
      },
      whatIs: {
        id: 'what-is',
        title: 'O que fazem Braintrust, PromptHub, Vellum e Promptfoo',
        content: [
          '**Braintrust, PromptHub, Vellum e Promptfoo resolvem problemas diferentes de equipes de prompts.** Braintrust é uma plataforma de avaliação (pontua saídas). PromptHub é um sistema de controle de versões (organiza e compartilha prompts). Vellum é uma plataforma de implantação com A/B testing (executa experimentos em tráfego real). Promptfoo é uma ferramenta de automação de testes (detecta regressões em CI/CD). Elas se sobrepõem mas não se substituem.',
          'A razão pela qual as equipes têm dificuldade para escolher uma: as quatro afirmam "otimizar prompts", mas o fazem em etapas diferentes. Braintrust otimiza medindo; Vellum otimiza dividindo o tráfego; Promptfoo otimiza detectando regressões; PromptHub otimiza organizando. Uma equipe pode usar Braintrust para descobrir um prompt melhor, Promptfoo para testá-lo em CI/CD e Vellum para implantá-lo.',
          'Este guia é um comparativo direto de quatro ferramentas específicas. Para um ranking mais amplo de todas as ferramentas de prompt engineering, consulte [Melhores ferramentas de prompt engineering 2026](/pt/prompt-engineering/best-prompt-engineering-tools-2026). Para recursos de otimização em equipe incluindo DSPy e Helicone, consulte [Melhores ferramentas de otimização de prompts para equipes](/pt/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Braintrust pontua, PromptHub versiona, Vellum faz A/B testing, Promptfoo testa regressões — quatro ferramentas de prompts que se sobrepõem mas não se substituem.',
          },
          {
            type: 'in-plain-terms',
            text: 'Pense nisso como construir software: você precisa de um framework de teste (Promptfoo), um dashboard de qualidade (Braintrust), um pipeline de implantação (Vellum) e um repositório de código (PromptHub). A maioria das equipes precisa de dois desses, não dos quatro.',
          },
        ],
      },
      evaluationCriteria: {
        id: 'evaluation-criteria',
        title: 'Como comparamos essas ferramentas',
        content: [
          '**Avaliamos as quatro ferramentas segundo cinco critérios que importam em fluxos de trabalho reais de equipes: quão bem suportam a colaboração em equipe, se incluem A/B testing ou experimentação, capacidades de scoring ou avaliação, integração CI/CD e transparência de preços.**',
        ],
        columns: ['Critério', 'O que mede', 'Por que importa'],
        rows: [
          {
            Critério: 'Colaboração em equipe',
            'O que mede': 'Controle de acesso por funções, ramos, dashboards compartilhados',
            'Por que importa': 'Múltiplos engenheiros devem editar prompts sem sobrescrever uns aos outros',
          },
          {
            Critério: 'A/B testing',
            'O que mede': 'Comparação de variantes lado a lado, divisão de tráfego',
            'Por que importa': 'Comparar variantes no mesmo conjunto de entrada ou tráfego de produção',
          },
          {
            Critério: 'Avaliação/scoring',
            'O que mede': 'Métricas personalizadas, scorers baseados em LLM, gates de qualidade',
            'Por que importa': 'Medir a qualidade da saída, não apenas observá-la visualmente',
          },
          {
            Critério: 'Integração CI/CD',
            'O que mede': 'CLI, API, GitHub Actions, testes automatizados',
            'Por que importa': 'Detectar regressões antes da implantação; automatizar controles de qualidade',
          },
          {
            Critério: 'Transparência de preços',
            'O que mede': 'Página de preços pública, custos claros por unidade',
            'Por que importa': 'Previsibilidade orçamentária para equipes de 3–10 pessoas',
          },
        ],
      },
      braintrust: {
        id: 'braintrust',
        title: 'Braintrust: profundidade de avaliação a $249/mês (Pro)',
        content: [
          '**Braintrust é uma plataforma de avaliação de IA que registra cada chamada de API, pontua saídas com métricas personalizadas e executa experimentos A/B em um laboratório compartilhado — ideal para equipes que medem a qualidade da saída sistematicamente.** Braintrust não é um construtor de prompts nem um sistema de controle de versões; é um laboratório de avaliação compartilhado.',
          'O tier gratuito inclui 1M spans de traces e 10K scores com usuários ilimitados — suficiente para a maioria dos fluxos de trabalho de avaliação pré-produção. O plano Pro é $249/mês. Braintrust adicionou o agente Loop em 2026: um avaliador autônomo que gera casos de teste e itera sobre prompts sem configuração manual. O servidor MCP conecta Claude Code e Cursor diretamente ao stack de avaliação do Braintrust a partir do seu IDE. O proxy de logging integra-se com as APIs da OpenAI, Anthropic e Google sem mudanças de código. Você define funções de scoring personalizadas em TypeScript ou Python. A integração com GitHub permite versionar prompts junto ao código. Certificação SOC 2 Type II agora disponível.',
          'Os melhores recursos para equipes: dashboards de experimentos compartilhados (todos os membros veem resultados de avaliação em tempo real), controle de acesso por funções (admin/membro/observador), histórico de commits tipo Git para prompts e logging em produção (cada chamada de API registrada com entradas, saídas e pontuações).',
          'Para as métricas por trás do scoring personalizado, consulte [Métricas de avaliação de prompts: precisão, relevância, latência](/pt/prompt-engineering/prompt-evaluation-metrics).',
        ],
        items: [
          'Dashboards de experimentos compartilhados: todos os membros da equipe veem resultados de avaliação ao vivo',
          'Controle de acesso por funções: funções admin/membro/observador',
          'Versionamento de prompts mediante histórico de commits tipo Git',
          'Logging em produção: cada chamada de API registrada com entradas/saídas/pontuações',
          'Agente Loop: avaliador autônomo que gera casos de teste e itera sobre prompts (novo em 2026)',
          'Servidor MCP: integração direta com Claude Code e Cursor para avaliação a partir do IDE',
          'Certificação SOC 2 Type II para implantações enterprise',
        ],
        callouts: [
          {
            type: 'insight',
            label: 'Você sabia?',
            text: 'O tier gratuito do Braintrust inclui 1M spans de traces e 10K scores com usuários ilimitados — mais capacidade de avaliação do que a maioria das equipes usa nos primeiros 3 meses. Você pode executar um fluxo de trabalho completo de avaliação de prompts sem pagar nada.',
          },
          {
            type: 'warning',
            label: 'Complexidade das funções de scoring',
            text: 'Os scorers personalizados do Braintrust Pro requerem TypeScript ou Python. Se ninguém em sua equipe escreve funções de scoring, o principal diferencial do Braintrust é inutilizável. No entanto, o tier gratuito e o agente Loop reduzem essa barreira. Verifique a capacidade da equipe antes de se comprometer com o Pro.',
          },
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: controle de versões a $50–200/mês',
        content: [
          '**PromptHub é uma plataforma de controle de versões e compartilhamento de prompts — as equipes armazenam prompts em uma biblioteca central, etiquetam versões e compartilham em toda a organização sem gerenciar planilhas ou mensagens no Slack.** O mais fácil de integrar dos quatro.',
          'Starter ~$50/mês; Pro ~$200/mês. Interface web para usuários não técnicos. Histórico de versões para cada prompt, etiquetas para organização, fluxos de implantação. Suporta as APIs da OpenAI, Anthropic e personalizadas. Contrapartida: sem scoring de avaliação personalizado; limitado a controles de qualidade integrados; não adequado para equipes que executam experimentos A/B ao vivo.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: divisão de tráfego em produção a $200–500/mês',
        content: [
          '**Vellum é uma plataforma de implantação de prompts com A/B testing integrado que divide o tráfego real de produção entre variantes de prompts e mede a qualidade da saída no mundo real — ideal para equipes que executam recursos LLM ao vivo.** Vellum é um plano de controle, não uma ferramenta de testes.',
          'Starter $200/mês; Growth $500/mês; Enterprise personalizado. Encaminha o tráfego de produção por porcentagem entre variantes. A avaliação compara variantes em datasets de teste. Recursos para equipes: workspace compartilhado, revisões de prompts estilo PR, fluxos de aprovação de implantação. Contrapartida: a opção mais cara; exagerada para equipes pré-produção ou que ainda não gerenciam tráfego real de usuários.',
          'Para entender quando o A/B testing adiciona valor vs a otimização manual, consulte [Otimização manual vs automatizada de prompts](/pt/prompt-engineering/manual-vs-automated-prompt-optimization).',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: testes CI/CD open-source gratuito',
        content: [
          '**Promptfoo é uma ferramenta CLI open-source que executa suites de testes de prompts automatizadas contra múltiplos LLMs — as equipes a integram em pipelines CI/CD para detectar regressões de prompts antes da implantação.** Gratuito (licença MIT). Defina os casos de teste em YAML, faça commit ao Git e o Promptfoo os executa em cada PR.',
          'Suporta 40+ provedores LLM. Integração com GitHub Actions disponível. Você fornece entradas, padrões de saída esperados e asserções personalizadas baseadas em LLM. Amigável para equipes: configurações de teste no Git, executadas em CI, sem conta nem faturas mensais. Contrapartida: sem interface; apenas para engenheiros; sem recursos de colaboração integrados além do Git.',
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
        callouts: [
          {
            type: 'tip',
            label: 'Promptfoo + GitHub Actions',
            text: 'As configurações de teste YAML do Promptfoo são commitadas diretamente ao Git. Em cada PR, o GitHub Actions executa a suite de testes contra todos os modelos configurados e bloqueia o merge se falhar. Sem custo mensal, integração CI/CD completa.',
          },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: comparação multi-modelo antes da otimização',
        content: [
          '**Antes de se comprometer com Braintrust, Vellum, PromptHub ou Promptfoo para um fornecedor LLM específico, use [PromptQuorum](/features) para despachar um prompt para 25+ modelos simultaneamente e ver qual funciona melhor — um primeiro passo agnóstico ao modelo.** Tier gratuito disponível.',
          'Ao contrário das quatro ferramentas anteriores (que otimizam para um único modelo por vez), PromptQuorum responde "qual modelo lida melhor com este prompt?" em uma única execução. Após descobrir o modelo ótimo com PromptQuorum, encaminhe ao Braintrust para avaliação mais profunda, Vellum para A/B testing em produção ou Promptfoo para prevenção de regressões CI/CD.',
        ],
        items: [
          '25+ modelos incluindo GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro e modelos locais via Ollama e LM Studio',
          '9 frameworks de prompts integrados — TRACE, CO-STAR, CRAFT e mais',
          'Comparação de respostas lado a lado com scoring por consenso',
          'Contagem de tokens por modelo — veja as diferenças de custo antes de se comprometer',
          'Tier gratuito — sem necessidade de configuração técnica',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Frente a frente: as 4 ferramentas comparadas',
        content: [
          '**Nenhuma ferramenta se destaca nos cinco critérios. Braintrust lidera em profundidade de avaliação; Vellum lidera em divisão de tráfego em produção; Promptfoo lidera em CI/CD gratuito; PromptHub lidera em simplicidade.**',
        ],
        columns: ['Ferramenta', 'Uso principal', 'Colaboração', 'CI/CD', 'Preços', 'Ideal para'],
        rows: [
          {
            Ferramenta: 'Braintrust',
            'Uso principal': 'Avaliação de saída',
            Colaboração: '✅ Funções + dashboards',
            'CI/CD': '✓ API + MCP',
            Preços: 'Gratuito / $249 Pro',
            'Ideal para': 'Equipes focadas em qualidade',
          },
          {
            Ferramenta: 'PromptHub',
            'Uso principal': 'Controle de versões',
            Colaboração: '✅ Workspace de equipe',
            'CI/CD': '✗ Nenhum',
            Preços: '$50–200/mês',
            'Ideal para': 'Equipes de conteúdo',
          },
          {
            Ferramenta: 'Vellum',
            'Uso principal': 'A/B em produção',
            Colaboração: '✅ Revisões PR',
            'CI/CD': '✓ Webhooks',
            Preços: '$200–500/mês',
            'Ideal para': 'Recursos ao vivo',
          },
          {
            Ferramenta: 'Promptfoo',
            'Uso principal': 'Testes CI/CD',
            Colaboração: 'Baseado em Git',
            'CI/CD': '✅ GitHub Actions',
            Preços: 'Gratuito',
            'Ideal para': 'Equipes DevOps',
          },
          {
            Ferramenta: 'PromptQuorum',
            'Uso principal': 'Comparação multi-modelo',
            Colaboração: '✓ Workspace compartilhado',
            'CI/CD': '✗ Nenhum',
            Preços: 'Gratuito + créditos',
            'Ideal para': 'Seleção de modelo',
          },
        ],
        callouts: [
          {
            type: 'insight',
            label: 'Regra do stack de duas ferramentas',
            text: 'A maioria das equipes desperdiça dinheiro em 3–4 ferramentas. O stack ótimo são duas: uma para avaliação (Braintrust ou Promptfoo) e outra para implantação/versionamento (Vellum ou PromptHub). Gasto total: $250–700/mês em vez de $1.000+.',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'Seleção de ferramenta por tipo de equipe',
        content: [
          '**Ajuste a ferramenta ao principal gargalo e à profundidade técnica da sua equipe.**',
          'Não use Braintrust se sua equipe não pode escrever funções de scoring personalizadas — ficará sem uso. Não use Vellum se ainda não tem usuários reais — compre depois de chegar à produção. Não use PromptHub sozinho se precisa medir a qualidade da saída — organiza prompts mas não pode pontuá-los.',
          'Para o fluxo de trabalho completo de configuração da equipe incluindo propriedade e regras de revisão, consulte [Configuração de prompt engineering para equipes pequenas](/pt/prompt-engineering/prompt-engineering-setup-small-teams).',
        ],
        numberedItems: [
          {
            title: 'Equipes de engenharia com preocupações de qualidade → Braintrust',
            whyItMatters: 'Projete funções de scoring personalizadas; execute avaliações reproduzíveis; meça o impacto das mudanças de prompt.',
          },
          {
            title: 'Equipes de conteúdo/marketing que precisam de controle de versões → PromptHub',
            whyItMatters: 'Interface web simples; sem código necessário; biblioteca de prompts centralizada.',
          },
          {
            title: 'Equipes de produto com recursos LLM ao vivo → Vellum',
            whyItMatters: 'A/B test em tráfego real; fluxos de aprovação; meça o impacto no mundo real.',
          },
          {
            title: 'Equipes DevOps/plataforma que previnem regressões → Promptfoo',
            whyItMatters: 'Gratuito; baseado em YAML; integra com GitHub; detecta regressões em CI.',
          },
          {
            title: 'Todas as equipes (primeiro passo) → PromptQuorum',
            whyItMatters: 'Compare seu prompt em 25+ modelos antes de se comprometer a otimizar para um fornecedor.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns',
        mistakes: [
          {
            mistake: 'Comprar as quatro ferramentas para cobrir todas as bases',
            problem: 'O gasto total chega a $700+/mês; você mantém quatro sistemas; confusão da equipe sobre qual ferramenta usar para quê.',
            fix: 'Escolha duas: uma para avaliação (Braintrust ou Promptfoo) e outra para implantação (Vellum ou PromptHub). Adicione PromptQuorum como primeiro passo gratuito.',
          },
          {
            mistake: 'Não avaliar primeiro os tiers gratuitos',
            problem: 'Tanto Braintrust (1M traces, 10K scores gratuitos) quanto Promptfoo (completamente gratuito) oferecem capacidade suficiente para executar uma avaliação real antes de pagar. Equipes que pulam o tier gratuito desperdiçam o primeiro mês aprendendo o que deveriam ter medido.',
            fix: 'Comece com Promptfoo (CLI gratuita) ou o tier gratuito do Braintrust. Construa seu dataset de avaliação. Defina suas métricas de qualidade. Só então avalie ferramentas pagas contra sua linha de base estabelecida.',
          },
          {
            mistake: 'Escolher uma ferramenta por reputação de marca em vez de adequação ao fluxo de trabalho',
            problem: 'Você compra o Braintrust Pro mas sua equipe não é técnica e não pode escrever funções de scoring; ou compra o PromptHub quando seu gargalo real é medir a qualidade.',
            fix: 'Identifique seu principal gargalo primeiro (avaliação, versionamento, A/B testing, prevenção de regressões) antes de avaliar ferramentas.',
          },
          {
            mistake: 'Adotar uma ferramenta sem construir um dataset de avaliação',
            problem: 'Você se cadastra no Braintrust ou Vellum mas não tem pares rotulados de entrada/saída para pontuar. As ferramentas ficam sem uso; você não vê ROI.',
            fix: 'Construa um conjunto de testes de 20–50 exemplos rotulados antes de pagar por qualquer plataforma. Use o tier gratuito do Braintrust ou Promptfoo (gratuito) para validar suas métricas primeiro.',
          },
          {
            mistake: 'Usar Vellum sem uma métrica de qualidade',
            problem: 'Você faz A/B test de dois prompts em tráfego de produção mas não definiu "boa saída". A variante de vendas é encaminhada para usuários; ninguém pode explicar por quê.',
            fix: 'Defina 3–5 critérios de qualidade e implemente-os como asserções (no Promptfoo) ou scorers personalizados (no Braintrust) antes de executar testes A/B.',
          },
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Como escolher entre essas 4 ferramentas',
        numberedItems: [
          'Identifique seu principal gargalo: é a qualidade da saída, o custo, a latência ou a velocidade da equipe?',
          'Avalie a profundidade técnica: equipe não técnica → PromptHub; mista → Braintrust + Vellum; altamente técnica → Promptfoo.',
          'Construa um dataset de avaliação rotulado (20–50 pares entrada/saída) antes de avaliar qualquer ferramenta paga.',
          'Comece com uma ferramenta gratuita (Promptfoo ou PromptQuorum) para estabelecer métricas de linha de base.',
          'Execute um teste de 2 semanas com os prompts reais da equipe antes de se comprometer com uma plataforma SaaS.',
          'Planeje para duas ferramentas: uma para avaliação e outra para implantação/versionamento.',
        ],
        callouts: [
          {
            type: 'tip',
            label: 'Dica profissional: construa primeiro um dataset de testes',
            text: 'Construa um conjunto de testes de 20–50 pares rotulados de entrada/saída ANTES de avaliar qualquer ferramenta paga. Sem um dataset de linha de base, você não pode medir se a ferramenta realmente melhora seus prompts — você está apenas pagando por um dashboard sem dados. Use o tier gratuito do Braintrust ou Promptfoo (gratuito) para validar suas métricas primeiro.',
          },
          {
            type: 'tip',
            label: 'Primeiro gratuito, depois pago',
            text: 'Comece com Promptfoo (gratuito) + PromptQuorum (tier gratuito) para estabelecer linhas de base. Só adicione Braintrust Pro ou Vellum depois de ter 20+ casos de teste rotulados e uma métrica de qualidade definida. Ferramentas pagas sem linhas de base = orçamento desperdiçado.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Qual é a principal diferença entre Braintrust e PromptHub?',
            a: 'Braintrust é uma plataforma de avaliação: você registra chamadas de API, define funções de scoring personalizadas e executa experimentos A/B para medir a qualidade da saída. PromptHub é um sistema de controle de versões: você armazena prompts em uma biblioteca, etiqueta versões e compartilha com a equipe. Use Braintrust quando seu gargalo for medir a qualidade; use PromptHub quando seu gargalo for organizar prompts.',
          },
          {
            q: 'O Promptfoo é realmente gratuito?',
            a: 'Sim. Promptfoo é open-source (licença MIT) e não tem tier pago. Você o executa como ferramenta CLI em sua própria infraestrutura ou no GitHub Actions. Sem taxas mensais, limites de chamadas de API ou restrições freemium.',
          },
          {
            q: 'Devo escolher Braintrust ou Vellum?',
            a: 'Escolha Braintrust se seu objetivo principal é medir e melhorar a qualidade da saída com métricas personalizadas. Escolha Vellum se seu objetivo principal é A/B testing em tráfego real de produção. Braintrust funciona melhor pré-produção; Vellum funciona melhor com usuários reais.',
          },
          {
            q: 'Quanto mais caro é Vellum do que Braintrust?',
            a: 'Braintrust Pro é $249/mês (também há tier gratuito com 1M spans + 10K scores). Vellum Starter é $200/mês; Growth é $500/mês. No nível Pro, Braintrust é ligeiramente mais caro que o Vellum Starter mas inclui significativamente mais capacidade de avaliação. Ambos têm pontos de entrada gratuitos ou de baixo custo. Promptfoo é gratuito; PromptHub é $50–200/mês.',
          },
          {
            q: 'Como integro Promptfoo com GitHub Actions?',
            a: 'Promptfoo fornece um modelo de GitHub Actions. Defina seus casos de teste em YAML, faça commit da configuração ao Git e use a promptfoo-github-action oficial no seu arquivo de fluxo de trabalho. Em cada PR, Promptfoo executa seus testes contra todos os modelos configurados e reporta o status de pass/fail.',
          },
          {
            q: 'O PromptHub pode substituir o Braintrust?',
            a: 'Não. PromptHub armazena e versiona prompts. Braintrust avalia e pontua prompts. Você pode usar PromptHub sozinho se sua única necessidade é organizar prompts; não pode usá-lo sozinho se precisar medir a qualidade da saída ou executar experimentos.',
          },
          {
            q: 'O Vellum é o mesmo que uma plataforma de gerenciamento de prompts?',
            a: 'Não. Vellum é uma plataforma de implantação e A/B testing. Inclui controle básico de versões, mas sua principal força é dividir o tráfego de produção entre variantes de prompts e medir o impacto no mundo real. As verdadeiras ferramentas de gerenciamento de prompts (PromptHub) se concentram em organizar e compartilhar prompts, não em testá-los.',
          },
          {
            q: 'Existem alternativas além dessas 4 ferramentas em 2026?',
            a: 'Sim. O mercado de avaliação de prompts se expandiu significativamente em 2025–2026. Confident AI oferece 50+ métricas de avaliação integradas a $19,99–49,99/seat/mês com custos de tracing mais baixos que o Braintrust ($1/GB vs $3/GB). Galileo AI fornece guardrails em tempo de execução via seus modelos de avaliação Luna-2 ($100+/mês). Arize Phoenix é uma plataforma de observabilidade LLM gratuita e open-source. Para a maioria das equipes, as quatro ferramentas desta comparativa mais Confident AI cobrem todas as necessidades práticas.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[GPT, Claude ou Gemini? Como escolher o modelo certo](/pt/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — Escolha o modelo certo antes de escolher a ferramenta de avaliação certa',
          '[Melhores ferramentas de otimização de prompts para equipes: rankings 2026](/pt/prompt-engineering/best-prompt-optimization-tools-for-teams) — compara sete ferramentas incluindo Helicone e DSPy',
          '[Como avaliar a qualidade de prompts sistematicamente](/pt/prompt-engineering/how-to-evaluate-prompt-quality) — frameworks para medir saídas',
          '[Prompt Chaining](/pt/prompt-engineering/prompt-chaining) — Fluxos de trabalho de múltiplas etapas que mais se beneficiam da avaliação sistemática',
          '[Otimização manual vs automatizada de prompts](/pt/prompt-engineering/manual-vs-automated-prompt-optimization) — quando ajustar manualmente vs automatizar',
          '[Métricas de avaliação de prompts: precisão, relevância, latência](/pt/prompt-engineering/prompt-evaluation-metrics) — métricas de qualidade específicas para LLMs',
          '[Qwen vs Llama vs Mistral](/pt/local-llms/qwen-vs-llama-vs-mistral) — Promptfoo se destaca na comparação direta de famílias de modelos locais',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Braintrust — Plataforma de Avaliação de IA](https://braintrust.dev) — documentação oficial; base para as afirmações sobre o agente Loop, integração MCP, certificação SOC 2 e preços do plano Pro a $249/mês (reestruturado em março de 2026)',
          '[PromptHub — Controle de Versões de Prompts](https://prompthub.ai) — homepage do produto; base para as afirmações de controle de versões, interface web e preços $50–200/mês',
          '[Vellum — Implantação e A/B Testing de LLM](https://www.vellum.ai) — visão geral do produto e página de preços; base para as afirmações de divisão de tráfego, fluxo de aprovação e preços $200–500/mês',
          '[Promptfoo — Testes de Prompts Open-Source](https://www.promptfoo.dev) — repositório GitHub e documentação; base para as afirmações de licença MIT, configuração YAML e integração GitHub Actions',
          '[PromptQuorum — Despacho Multi-Modelo](https://promptquorum.com) — ferramenta de comparação multi-modelo; base para as afirmações de despacho para 25+ modelos e comparação multi-modelo',
          '[Confident AI](https://confident.ai) — Plataforma de avaliação emergente com 50+ métricas integradas a $19,99–49,99/seat/mês',
          '[Galileo AI](https://galileo.ai) — Modelos de avaliação Luna-2 e guardrails em tempo de execução para aplicações LLM',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — Plataforma de observabilidade LLM open-source para tracing e avaliação',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
      description: 'Braintrust ($249/mês) avalia prompts. Vellum ($200–500/mês) faz A/B testing em produção. Promptfoo CI/CD gratuito. PromptHub ($50–200/mês) versiona. A maioria das equipes precisa de exatamente 2.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/pt/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      inLanguage: 'pt-BR',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Gerenciamento de Prompts' },
        { '@type': 'Thing', name: 'Avaliação de LLM' },
        { '@type': 'Thing', name: 'Versionamento de Prompts' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptHub' },
        { '@type': 'SoftwareApplication', name: 'Vellum' },
        { '@type': 'SoftwareApplication', name: 'Promptfoo' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'pt-BR',
      name: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: Comparativo de ferramentas',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'Plataforma de avaliação de IA com scoring colaborativo, agente Loop para iteração autônoma e integração MCP-IDE. Tier gratuito disponível (1M Spans, 10K Scores); Pro $249/mês. Ideal para equipes que medem a qualidade da saída.' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Controle de versões de prompts com colaboração em equipe' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'A/B testing em produção com divisão de tráfego real' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Testes de regressão open-source com integração GitHub Actions' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Comparação multi-modelo em 25+ modelos para seleção de modelo' },
      ],
    },
  },

  fr: {
    theme: 'Outils & Plateformes',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
    seoTitle: 'Braintrust vs PromptHub vs Vellum : Stack 2-outils 2026',
    metaDescription: 'Braintrust (€249/mois Pro) évalue prompts. Vellum (€200-500/mois) A/B tests. Promptfoo gratuit CI/CD. PromptHub (€50-200/mois) versioning. Équipes: 2 outils.',
    ogTitle: 'Acheter les 4 outils gaspille €700+/mois. Voici le stack à 2 outils',
    ogDescription: 'Braintrust score. Vellum split traffic. Promptfoo catch regressions. PromptHub version. Pick 2. Comparison table inside.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo : lesquels choisir ?',
    twitterDescription: 'Promptfoo gratuit. Vellum dès €200/mois. Braintrust dès €249/mois. PromptHub dès €50/mois. Vous besoin exactement 2 — éval + déploiement. Matrice décisionnelle dedans.',
    intro: '**Quatre outils dominent la gestion des prompts pour les équipes : Braintrust pour l\'évaluation des outputs, PromptHub pour le contrôle de version, Vellum pour les tests A/B en production, et Promptfoo pour la prévention des régressions CI/CD.** La plupart des équipes achètent tous les quatre et gaspillent €700+/mois. La bonne stack est toujours exactement deux outils — un pour l\'évaluation, un pour le déploiement.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
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
      { label: 'Ce que font Braintrust, PromptHub, Vellum et Promptfoo', anchor: '#what-is' },
      { label: 'Notre méthode de comparaison', anchor: '#evaluation-criteria' },
      { label: 'Braintrust : Profondeur d\'évaluation à €249/mois (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub : Gestion de versions à 50–200 €/mois', anchor: '#prompthub' },
      { label: 'Vellum : Partage de trafic production à 200–500 €/mois', anchor: '#vellum' },
      { label: 'Promptfoo : Tests CI/CD open source gratuits', anchor: '#promptfoo' },
      { label: 'PromptQuorum : Comparaison modèles avant optimisation', anchor: '#promptquorum' },
      { label: 'Face à face : Tous les 4 outils comparés', anchor: '#comparison-table' },
      { label: 'Choix de l\'outil selon le type d\'équipe', anchor: '#which-tool' },
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
          'Braintrust excelle en profondeur d\'évaluation : fonctions de scoring personnalisées, agent Loop pour itération autonome, intégration MCP pour outils IDE, €249/mois Pro (couche gratuite disponible). Meilleur pour les équipes mesurant la qualité output de manière systématique.',
          'Vellum idéal pour le déploiement production avec tests A/B — 200–500 €/mois, trafic-splitting et workflows d\'approbation.',
          'Promptfoo seule option gratuite avec intégration CI/CD — parfait pour tests de régression GitHub Actions, pas de features production.',
          'PromptHub pour équipes voulant versioning et collaboration — 50–200 €/mois, le plus simple à utiliser.',
          'PromptQuorum répond d\'abord « quel modèle ? » via comparaison 25+ modèles — utilisez-le avant de choisir ces quatre.',
          'La plupart des équipes ont besoin de 2 outils, pas 4 : Braintrust + Vellum pour évaluation complète + production, OU Promptfoo + PromptHub budget-conscious.',
          'Intégrations : tous quatre supportent GitHub, mais Braintrust a la meilleure API, Vellum les meilleurs webhooks, Promptfoo le plus facile en local.',
        ],
      },
      'what-is': {
        title: 'Ce que font Braintrust, PromptHub, Vellum et Promptfoo',
        content: [
          'Ces quatre outils résolvent des problèmes différents dans votre workflow LLM :',
          '**Braintrust** est une plateforme d\'évaluation et d\'expérimentation. Vous soumettez des prompts, obtenez des résultats, et Braintrust aide à les évaluer (manuel ou auto avec scoring custom). Excellence en mesure qualité via expériences structurées.',
          '**PromptHub** est un contrôle de version pour prompts — pensez GitHub mais prompts. Versionnez, comparez changements, rollback. Simple et épuré, sans évaluation ni déploiement production.',
          '**Vellum** outil déploiement production avec tests A/B natifs. Écrivez prompt, divisez trafic (50/50), mesurez métriques, promovez gagnant.',
          '**Promptfoo** framework open-source tests locaux et CI/CD. Config YAML, tests locaux ou GitHub Actions, rapports régression. Gratuit, partout, pas pour trafic production-splitting.',
          'Ce guide compare quatre outils spécifiques. Pour classement plus large outils prompt-engineering, voir [Best Prompt Engineering Tools 2026](/fr/prompt-engineering/best-prompt-engineering-tools-2026). Pour features optimisation équipe incluant DSPy et Helicone, voir [Best Prompt Optimization Tools for Teams](/fr/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
      },
      'evaluation-criteria': {
        title: 'Notre méthode de comparaison',
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
        title: 'Braintrust : Évaluation production à €249/mois (Pro)',
        content: [
          '**Quoi :** Plateforme évaluation & production intégrée. Loggez usage production via API ou SDK, définissez métriques (accuracy, latency, cost, custom), evaluez automatiquement via LLM. Tier gratuit inclus; Pro à €249/mois ajoute quota production, team members, SSO.',
          '**Forces (Mai 2026) :** Loop agent (orchestrate multi-step evals), MCP integration (branchez LLMs & outils directement), SOC 2 Type II (compliance), UI intégrée production + eval. Auto-évaluateurs LLM. Historique long terme avec rollback.',
          '**Faiblesses :** Coûteux (€249/mois Pro) pour petites équipes. Courbe apprentissage moyennes pour custom scoring. Déploiement production nécessite SDK — pas just copy-paste prompt comme PromptHub.',
        ],
        items: [
          'Loop agent — orchestrate multi-step evaluations',
          'MCP integration — connectez models & outils directement',
          'SOC 2 Type II compliance',
          'Auto-évaluateurs LLM & custom scoring (JavaScript, Python)',
          'Production logging via API/SDK',
          'Historique versions avec rollback',
        ],
        callouts: [
          {
            type: 'info',
            label: 'Pro Tip',
            text: 'Utilisez tier gratuit de Braintrust pour démarrer evals sans engagement. Passez Pro seulement quand vous besoin production logging + team collaboration.',
          },
          {
            type: 'warning',
            label: 'Attention',
            text: 'Braintrust cible équipes avec workload production et eval continuing. Si vous cherchez juste versioning prompt, PromptHub moins cher. Si juste éval sandbox, tirez gratuitement Braintrust.',
          },
        ],
      },
      'prompthub': {
        title: 'PromptHub : Gestion de versions à 50–200 €/mois',
        content: [
          '**Quoi :** GitHub pour prompts. Sauvegardez version, modifiez après, PromptHub enregistre diff. Récupérez anciennes versions, cherchez changements, multiprojet workspace.',
          '**Forces :** Simple et moins cher (50–200 €/mois). Web UI facile. Idéal équipes voulant versioning collaboration sans infra complexe.',
          '**Faiblesses :** Pas d\'évaluation mesure. Lequel meilleur version ? Vous manuellement ou outil séparé. Pas déploiement production.',
        ],
      },
      'vellum': {
        title: 'Vellum : Partage de trafic production à 200–500 €/mois',
        content: [
          '**Quoi :** Tool déploiement production avec A/B-tests natifs. Écrivez prompt, divisez trafic (50/50 ou custom), mesurez métriques (latency, feedback, costs), promovez gagnant.',
          '**Forces :** Production-focused. A/B tests intégrés. Workflows approbation, canary-deployments, webhooks. Intégrations LLM-APIs seamless. Meilleur pour trafic live-splitting.',
          '**Faiblesses :** Plus cher (200–500 €/mois). Non pour évaluation offline — testez production pas local. Setup engineering. Pas open-source.',
        ],
      },
      'promptfoo': {
        title: 'Promptfoo : Tests CI/CD open source gratuits',
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
          '25+ modèles incluant GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro, locaux via Ollama et LM Studio',
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
            'Usage primaire': 'Évaluation + production',
            'Collaboration': '✓ Workspace partage',
            'CI/CD': '✓ Loop agent, MCP',
            'Prix': '€249/mois Pro',
            'Meilleur pour': 'Évaluation + production',
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
        title: 'Choix de l\'outil selon le type d\'équipe',
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
            a: 'Braintrust €249/mois Pro. Vellum 200–500 €/mois volume. Petit trafic ? Braintrust moins cher. Grand trafic ? Vellum peut égal dépend utilisation.',
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
          {
            q: 'Alternatives à Braintrust, PromptHub, Vellum, Promptfoo ?',
            a: 'En 2026, émergents include Confident AI (évaluation LLM-driven fine-grained), Galileo AI (debuggage patterns-recognition), Arize Phoenix (monitoring production). Mais quatre outils de cette comparaison restent dominants. Vérifiez cas d\'usage spécifique — alternatives peuvent mieux fit, mais prix ou features plus limités.',
          },
        ],
      },
      'related-reading': {
        title: 'Lectures complémentaires',
        items: [
          '[Best Prompt Engineering Tools 2026](/fr/prompt-engineering/best-prompt-engineering-tools-2026) — Classement plus large tous outils prompts incluant Braintrust, PromptHub, Vellum, Promptfoo et 20+ autres',
          '[Best Prompt Optimization Tools for Teams](/fr/prompt-engineering/best-prompt-optimization-tools-for-teams) — Optimisation équipe-focalisée DSPy, Helicone, OpenAI Evals',
          '[How to Evaluate Prompt Quality](/fr/prompt-engineering/how-to-evaluate-prompt-quality) — Métriques et frameworks évaluation prompts',
          '[Prompt Evaluation Metrics](/fr/prompt-engineering/prompt-evaluation-metrics) — Approfondissement accuracy, latency, cost, relevance et custom metrics',
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
          '[Confident AI — LLM Evaluation](https://confident.ai) — Émergent alternative évaluation 2026 ; fine-grained evals LLM-driven',
          '[Galileo AI — Debugging AI Systems](https://galileo.ai) — Pattern-recognition debuggage ; émergent 2026, alternative debugging-focused',
          '[Arize Phoenix — LLM Monitoring](https://arize.com/phoenix) — Production monitoring ; alternative monitoring-focused émergent 2026',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
      description: 'Braintrust pour évaluation, Vellum pour A/B tests production, Promptfoo gratuit CI/CD, PromptHub pour versioning. Comparaison 5 critères.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
      author: { '@type': 'Person', 'name': 'Hans Kuepper' },
      publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/fr/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
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
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Outils gestion prompts (comparaison)',
      inLanguage: 'fr',
      url: 'https://www.promptquorum.com/fr/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'Évaluation et expériences avec métriques détaillées et auto-évaluateurs' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'Versioning prompts avec collaboration équipe' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'A/B tests production avec trafic-splitting live' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'Tests régression open-source avec intégration GitHub Actions' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'Comparaison cross-modèles 25+ pour sélection modèle' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    theme: 'ツール比較',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 2026年',
    seoTitle: 'Braintrust vs PromptHub: 2ツール構成 2026年',
    metaDescription: 'ブレイントラスト（¥38,000/月）評価。ベルム（¥30,000-75,000/月）A/Bテスト。Promptfoo無料CI/CD。PromptHub（¥7,500-30,000/月）バージョン管理。チーム必要: 2つ。',
    intro: '**2026年、プロンプト最適化ツールの選択は複雑です。ブレイントラスト（評価）、ベルム（本番環境A/Bテスト）、PromptHub（バージョン管理）、Promptfoo（オープンソースCI/CD）の4つが業界標準です。各ツールは異なる目的に特化—すべて必要ではなく、チームのワークフローに合ったものを1～2個選ぶべき。このガイドでは、5つの評価軸で比較し、チームの規模・予算・ワークフローに応じた選択フレームワークを提示します。**',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '12分で読める',
    ogTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo ツール比較 2026',
    ogDescription: 'ブレイントラスト（評価）、ベルム（本番A/Bテスト）、PromptHub（バージョン管理）、Promptfoo（オープンソースCI/CD）の4つのプロンプト管理ツールの選択ガイド。日本企業向けMETI対応。',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo ツール比較',
    twitterDescription: 'プロンプト管理ツール4つを5つの評価軸で比較。日本企業向けMETI ガイドラインとセキュリティコンプライアンス対応。',
    educationalLevel: 'Intermediate',
    audience: 'プロダクト分析チーム、データサイエンティスト、LLMシステム構築エンジニア',
    primaryTerm: 'プロンプト管理ツール',
    aboutTopics: ['プロンプト評価', 'A/Bテスト本番環境', 'プロンプトバージョン管理'],
    next_refresh_due: '2026-11-01',
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'Braintrust・PromptHub・Vellum・Promptfoo それぞれの役割', anchor: '#what-is' },
      { label: '比較評価の基準と方法', anchor: '#evaluation-criteria' },
      { label: 'Braintrust：月額 500 € 程度の評価プラットフォーム', anchor: '#braintrust' },
      { label: 'PromptHub：月額 50〜200 € のバージョン管理', anchor: '#prompthub' },
      { label: 'Vellum：月額 200〜500 € の本番トラフィック分割', anchor: '#vellum' },
      { label: 'Promptfoo：無料オープンソース CI/CD テスト', anchor: '#promptfoo' },
      { label: 'PromptQuorum：最適化前のモデル比較', anchor: '#promptquorum' },
      { label: '直接対決：すべての 4 つのツールを比較', anchor: '#comparison-table' },
      { label: 'チームタイプ別のツール選定', anchor: '#which-tool' },
      { label: 'よくあるエラー', anchor: '#common-mistakes' },
      { label: 'これら 4 つのツール間での選択方法', anchor: '#how-to-choose' },
      { label: '日本ユーザーのための活用ポイント', anchor: '#japanese-context' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
      { label: 'ソース', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': { isTldr: true, items: ['Braintrust は詳細な評価とスコアリングに優れています — 高額（月500€程度）ですが、強力な実験インフラを備えています。', 'Vellum は本番デプロイメントと A/B テストに最適 — 月200～500€、トラフィック分割と承認ワークフロー付き。', 'Promptfoo は CI/CD 統合を備えた唯一の無料オプション — GitHub Actions での回帰テストに最適、本番機能なし。', 'PromptHub はバージョン管理と協調プロンプト管理を望むチームに適しています — 月50～200€、最も使いやすい。', 'PromptQuorum は最初に「どのモデル？」に答えます。25+ モデル比較経由 — これら 4 つに決める前に使用してください。', 'ほとんどのチームは 4 つではなく 2 つのツールが必要：包括的評価 + 本番には Braintrust + Vellum、または予算志向には Promptfoo + PromptHub。', 'インテグレーション：4 つすべてが GitHub をサポートします。ただし Braintrust が最高の API、Vellum が最高のウェブフック、Promptfoo がローカルで最も簡単です。'] },
      'what-is': { title: 'Braintrust・PromptHub・Vellum・Promptfoo それぞれの役割', content: ['これら 4 つのツールは、LLM ワークフロー内の異なる問題を解決します。', '**Braintrust** は評価と実験プラットフォーム。プロンプトを送信し、結果を取得します。Braintrust はそれらを評価するのに役立ちます（手動または独自のスコアリング関数を使用した自動）。構造化実験による品質測定に優れています。', '**PromptHub** はプロンプトのバージョン管理です — GitHub と考えてください、ただしプロンプト用。バージョンを保存し、変更を比較し、必要に応じてロールバック。シンプルで洗練されていますが、評価や本番デプロイメントはありません。', '**Vellum** は組み込み A/B テスト付きの本番デプロイメントツール。プロンプトを記述し、トラフィックを分割（50/50 またはカスタム）し、メトリクスを測定し、勝者をプロモート。', '**Promptfoo** はローカルプロンプトテストと CI/CD の統合用のオープンソースフレームワーク。YAML/JSON でテストケースを記述し、ローカルまたは GitHub Actions で実行し、回帰レポートを取得。無料、どこでも実行可能、本番トラフィック分割には不向き。', 'このガイドは 4 つの特定のツールを比較しています。より広範なプロンプトエンジニアリングツールのランキングについては、[Best Prompt Engineering Tools 2026](/ja/prompt-engineering/best-prompt-engineering-tools-2026) を参照。DSPy や Helicone を含むチーム最適化機能については、[Best Prompt Optimization Tools for Teams](/ja/prompt-engineering/best-prompt-optimization-tools-for-teams) を参照。'] },
      'evaluation-criteria': { title: '比較評価の基準と方法', content: ['ほとんどのチームにとって重要な 5 つの基準でこれら 4 つのツールを評価しました：'], columns: ['基準', 'ウェイト', '定義'], rows: [{ '基準': '評価機能', 'ウェイト': '25%', '定義': 'ツールは出力を評価できますか？実験を実行できますか？トレンドを追跡できますか？カスタムスコアリング関数を記述できますか？' }, { '基準': '本番対応性', 'ウェイト': '25%', '定義': 'ツールはライブトラフィックを処理できますか？A/B テスト、ルーティング、カナリアデプロイメントをサポートしていますか？' }, { '基準': 'バージョン管理 & コラボレーション', 'ウェイト': '20%', '定義': 'チームはプロンプトバージョンを保存し、変更を比較し、プロンプトで協力できますか？' }, { '基準': 'CI/CD & オートメーション', 'ウェイト': '15%', '定義': 'GitHub Actions、GitLab CI などの CI/CD システムと統合されていますか？テストを自動化できますか？' }, { '基準': '価格 & 複雑性', 'ウェイト': '15%', '定義': 'コストはいくらですか？セットアップにはどのくらい時間がかかりますか？エンジニアリングセットアップが必要ですか、それともすぐに使用できますか？' }] },
      'braintrust': { title: 'Braintrust：月額 500 € 程度の評価プラットフォーム', content: ['**何：** 評価と実験プラットフォーム。出力を送信し、メトリクスを定義し（精度、レイテンシ、コスト、カスタム）、パフォーマンスを確認。LLM ベースの自動評価も可能。', '**強み：** 最強の実験インフラ。複数のプロンプトバージョンをテストでき、カスタムスコアリング、長期履歴を追跡。ダッシュボードは詳細。API は十分に文書化されています。', '**弱み：** 高額（月500€程度）で、本番デプロイメント機能なし。評価ツール、本番ツールではない。ベストプロンプトをアプリに手動でコピーするか、Vellum と組み合わせる必要があります。'], items: ['LLM ベースの自動評価（例：「回答は事実的に正確ですか？」）', '有意性テスト付きの実験ダッシュボード', 'カスタムスコアリング関数（JavaScript または Python）', 'バージョン履歴（ロールバック、トレンド分析）'] },
      'prompthub': { title: 'PromptHub：月額 50〜200 € のバージョン管理', content: ['**何：** プロンプト用の GitHub。バージョンを保存し、後で変更し、PromptHub が diff を記録。古いバージョンを取得でき、変更を検索し、複数のプロンプトをワークスペースで管理。', '**強み：** シンプルで安価（月50～200€）。Web UI は使いやすい。複雑なインフラなしで、バージョン管理とチーム協力を望むチームに最適。', '**弱み：** 評価や測定なし。どのプロンプトバージョンが優れているかを知る方法がない — 手動で行うか、別のツールを使用する必要があります。本番デプロイメント サポートなし。'] },
      'vellum': { title: 'Vellum：月額 200〜500 € の本番トラフィック分割', content: ['**何：** ネイティブ A/B テスト付き本番デプロイメントツール。プロンプトを記述し、トラフィックを分割（50/50 またはカスタム）し、メトリクスを測定し（レイテンシ、フィードバック、コスト）、勝者をプロモート。', '**強み：** 本番指向。A/B テスト組み込み。承認ワークフロー、カナリアデプロイメント、ウェブフックをサポート。LLM API インテグレーション シームレス。ライブトラフィック分割テストに最適。', '**弱み：** より高額（月200～500€）。オフライン評価には不向き — 本番でテストし、ローカルではテストしません。エンジニアリングセットアップが必要。オープンソースではありません。'] },
      'promptfoo': { title: 'Promptfoo：無料オープンソース CI/CD テスト', content: ['**何：** ローカルプロンプトテストと CI/CD 統合用のオープンソースフレームワーク。YAML/JSON でテストケース（プロンプト + 期待される結果）を記述し、ローカルで実行し、回帰レポートを取得。GitHub Actions ネイティブ。', '**強み：** 無料（MIT）でオープンソース。ローカル — クラウドなし、認証なし。YAML 設定はシンプル。GitHub Actions 優れています。コミュニティ大きい。', '**弱み：** 本番トラフィック分割またはバージョン管理には不向き。回帰テストツール、デプロイメントツールではない。本番 A/B テストには Vellum と組み合わせる必要があります。自動評価は限定的。'] },
      'promptfoo-yaml': { title: 'Promptfoo YAML の例', codeBlock: `providers:\n  - openai:gpt-5.5\n\ntests:\n  - description: "クエリを分類"\n    vars:\n      question: "これはバグレポートですか？"\n      context: "ユーザーが認証エラーについて文句を言っています。"\n    assert:\n      - type: "contains"\n        value: "Bug"\n      - type: "cost"\n        threshold: 0.01\n\n  - description: "ハルシネーション回避"\n    vars:\n      input: "xyz の 5 つの機能をリストアップしてください。"\n    assert:\n      - type: "not-contains"\n        value: "ツールは X をサポート" # ドキュメントにない\n`, codeLanguage: 'yaml' },
      'promptquorum': { title: 'PromptQuorum：最適化前のモデル比較', content: ['**特定の LLM プロバイダーについて Braintrust、Vellum、PromptHub、Promptfoo に決める前に、PromptQuorum を使用してプロンプトを 25+ モデルに同時に送信し、どれが最高のパフォーマンスを発揮するかを確認してください — モデルに依存しない最初のステップ。** 無料ティア利用可能。', '上記の 4 つのツール（それぞれ 1 つのモデルを最適化）とは異なり、PromptQuorum は「どのモデルが適切か？」という質問に 1 パスで答えます。PromptQuorum で最適なモデルを発見した後、詳細評価には Braintrust、本番 A/B テストには Vellum、CI/CD 回帰防止には Promptfoo にルーティングします。'], items: ['GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro、Ollama と LM Studio 経由のローカルモデルを含む 25+ モデル', 'TRACE、CO-STAR、CRAFT など 9 つの組み込みプロンプトフレームワーク', 'コンセンサススコアリング付きの並べて表示される応答比較', 'モデルあたりのトークン数 — コミットする前にコスト差を確認', '無料ティア — エンジニアリングセットアップは不要'] },
      'comparison-table': { title: '直接対決：すべての 4 つのツールを比較', content: ['セクション 2 の基準に基づくすべての 5 つのツールの要約：'], columns: ['ツール', 'プライマリ使用法', 'コラボレーション', 'CI/CD', '価格', 'に最適'], rows: [{ 'ツール': 'Braintrust', 'プライマリ使用法': '評価 + 実験', 'コラボレーション': '✓ ワークスペース共有', 'CI/CD': '✓ API インテグレーション', '価格': '月 500€ 程度', 'に最適': '詳細評価' }, { 'ツール': 'PromptHub', 'プライマリ使用法': 'バージョン管理', 'コラボレーション': '✓ Web UI コラボ', 'CI/CD': '✗ なし', '価格': '月 50～200€', 'に最適': 'チーム協力' }, { 'ツール': 'Vellum', 'プライマリ使用法': '本番 A/B テスト', 'コラボレーション': '✓ ワークスペース アクセス', 'CI/CD': '✗ なし', '価格': '月 200～500€', 'に最適': 'ライブトラフィック テスト' }, { 'ツール': 'Promptfoo', 'プライマリ使用法': 'CI/CD 回帰', 'コラボレーション': '✗ なし（ローカル）', 'CI/CD': '✓ GitHub Actions', '価格': '無料（OSS）', 'に最適': '予算志向' }, { 'ツール': 'PromptQuorum', 'プライマリ使用法': 'モデル比較', 'コラボレーション': '✓ 共有ワークスペース', 'CI/CD': '✗ なし', '価格': '無料 + クレジット', 'に最適': 'モデル選択' }] },
      'which-tool': { title: 'チームタイプ別のツール選定', content: ['答えはワークフローによります。5 つの一般的なシナリオ：'], numberedItems: [{ title: '回帰を回避したいだけ', whyItMatters: 'Promptfoo。無料、ローカル、GitHub Actions ネイティブ。小さなチームのためにすべてが必要です。' }, { title: 'ライブ A/B テスト付き本番システムを構築中', whyItMatters: 'Vellum + PromptQuorum。PromptQuorum で最高のモデルを最初に見つけ、次に Vellum でトラフィック分割とフィードバックループ。' }, { title: '大きなプロンプトライブラリとバージョン管理が必要', whyItMatters: 'PromptHub。使いやすく、安価で、チーム協力向け。CI/CD に Promptfoo と組み合わせ。' }, { title: 'カスタムメトリクスでの詳細評価が必要', whyItMatters: 'Braintrust。ダッシュボードと自動評価は無敵。高額ですが、データ科学チームの価値があります。' }, { title: 'どのモデルまたはフレームワークを使用するか不確実', whyItMatters: 'PromptQuorum 最初。25+ モデルとフレームワーク全体で比較。次に上記のツールでデプロイ。' }] },
      'common-mistakes': { title: 'よくあるエラー', mistakes: [{ mistake: '4 つのツールをすべてまとめて購入', problem: '月 700€ 以上かかり、冗長。Braintrust と Vellum を完全に使用しません。', fix: 'ワークフローに適した 2 つのツールを選択。ほとんどのチームが必要：Braintrust + Vellum または Promptfoo + PromptHub。' }, { mistake: '評価で開始、デプロイメント忘却', problem: 'Braintrust は最高のプロンプトを表示しますが、手動でアプリにコピー。「デプロイ」ボタンなし。', fix: 'Braintrust を Vellum と組み合わせるか、手動デプロイ。評価なしのデプロイメント 無意味。' }, { mistake: 'Promptfoo ローカルのみで使用', problem: 'ローカルテストは優れていますが、本番レイテンシ、コスト、実際のエラーは表示されません。', fix: 'Promptfoo を CI/CD 回帰テストに使用し、Vellum またはカスタムインフラで本番にデプロイ。' }, { mistake: 'プロンプト最適化前にモデル選択', problem: 'Claude Opus で開始できますが、GPT-5.5 がより良い可能性があります — テストするまで知りません。', fix: 'PromptQuorum で最初に複数モデルを比較。次に Braintrust または Promptfoo で最高のモデルに最適化。' }] },
      'how-to-choose': { title: 'これら 4 つのツール間での選択方法', numberedItems: ['チームの 3 つの主な課題をリストアップ：(a) 評価、(b) バージョン管理、(c) 本番デプロイメント。', '各課題に対して最高のツール：(a) Braintrust、(b) PromptHub、(c) Vellum。', '課題が「どのモデルかわかりません」の場合は、PromptQuorum で開始。', '課題が「予算がない」の場合は、CI/CD に Promptfoo、バージョン管理に PromptHub を選択。', '2 つ以上のツールを購入しないでください。4 つのツールはいつも多すぎます。', '90 日間のコスト ベースラインを計画し、どのツールが最高の ROI かを評価します。'] },
      'japanese-context': { title: '日本ユーザーのための活用ポイント', content: ['日本の組織にとって、プロンプト管理ツール選択時の追加検討事項があります。', '**METI AI ガバナンスと企業デプロイメント：** 日本企業が METI（経済産業省）の AI ガバナンスフレームワーク 2024 に準拠する場合、Braintrust と Vellum はエンタープライズ向け選択肢。Promptfoo はローカルで実行でき、METI 準拠性が簡単。', '**データレジデンシー（データ主権）：** 機密情報を処理する場合（顧客データ、内部情報）、ローカルツール（Promptfoo をサーバーで実行）がデータ主権要件を満たすのは簡単。クラウドツール（Braintrust、Vellum）は明示的なセキュリティ認定が必要です。', '**推奨事項：** 日本チームの場合：まず PromptQuorum（無料）モデル選択、次に Promptfoo（無料、ローカル）CI/CD 回帰、PromptHub（安価）バージョン管理。このコンボは月 200€ 未満で METI フレームワーク準拠。本番スケール到達時のみ Braintrust または Vellum に移行。'] },
      'faq': { title: 'FAQ', faqs: [{ q: 'Braintrust と PromptHub の主な違いは？', a: 'Braintrust は評価と実験向け。PromptHub はバージョン管理向け。Braintrust は「どのプロンプトが最良か」に答え、PromptHub は「以前使用したバージョンは」に答えます。両者を組み合わせ可能。' }, { q: 'Promptfoo は本当に無料？', a: 'はい、Promptfoo はオープンソース（MIT）で完全無料。ローカルまたは独自サーバーで実行。唯一のコスト：OpenAI、Anthropic などへの API 呼び出し。' }, { q: 'Braintrust または Vellum を選択すべき？', a: 'Braintrust は評価向け（どのプロンプトが最良かわかりません）。Vellum は本番向け（どのトラフィック分割が最良かわかりません）。異なる — 両者一緒が理想的。' }, { q: 'Vellum は Braintrust より高額？', a: 'Braintrust 月 500€ 程度。Vellum 月 200～500€（ボリューム依存）。つまり、Vellum は同じかもしくはより安いコスト本番トラフィックによります。' }, { q: 'Promptfoo を GitHub Actions に統合？', a: '`.github/workflows/test.yml` ファイルを作成し、`npx promptfoo eval` を呼び出し。Promptfoo は YAML テスト読み込み、実行、回帰表示。Actions は自動的に各プッシュで起動。' }, { q: 'PromptHub が Braintrust を置き換えられる？', a: 'いいえ。PromptHub はバージョン保存。Braintrust は品質評価。PromptHub はどのバージョンが最高かを測定できません。組み合わせ可能。' }, { q: 'Vellum はプロンプト管理プラットフォームと同じ？', a: 'いいえ、Vellum は本番デプロイメントツール、バージョン管理ではない。プロンプト保存のみ？PromptHub 使用。ライブトラフィック A/B テスト？Vellum。' }] },
      'related-reading': { title: '関連資料', items: ['[Best Prompt Engineering Tools 2026](/ja/prompt-engineering/best-prompt-engineering-tools-2026) — Braintrust、PromptHub、Vellum、Promptfoo を含むすべてのプロンプトツールの広範なランキングと 20+ その他', '[Best Prompt Optimization Tools for Teams](/ja/prompt-engineering/best-prompt-optimization-tools-for-teams) — DSPy、Helicone、OpenAI Evals を含むチーム最適化', '[How to Evaluate Prompt Quality](/ja/prompt-engineering/how-to-evaluate-prompt-quality) — プロンプト評価のメトリクスとフレームワーク', '[Prompt Evaluation Metrics](/ja/prompt-engineering/prompt-evaluation-metrics) — 精度、レイテンシ、コスト、関連性、カスタムメトリクスの詳細'] },
      'sources': { title: 'ソース', items: ['[Braintrust — AI Evaluation Platform](https://braintrust.dev) — 公式ドキュメント；スコアリング関数、実験ダッシュボード、月 500€ Team プラン要求の基礎', '[PromptHub — Prompt Version Control](https://prompthub.ai) — 製品ホームページ；バージョン管理、Web UI、月 50～200€ 価格設定要求の基礎', '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — 製品概要と価格設定ページ；トラフィック分割、承認ワークフロー、月 200～500€ 要求の基礎', '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub リポジトリとドキュメント；MIT ライセンス、YAML 設定、GitHub Actions 統合要求の基礎', '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — マルチモデル比較ツール；25+ モデルディスパッチと cross-モデル比較要求の基礎'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 2026', description: 'ブレイントラスト（評価プラットフォーム）、ベルム（本番A/Bテスト）、PromptHub（バージョン管理）、Promptfoo（オープンソースCI/CD）の4つを5つの軸で比較。日本企業向けMETI対応。', datePublished: '2026-04-10', dateModified: '2026-05-01', author: { '@type': 'Organization', 'name': 'PromptQuorum' }, publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, url: 'https://www.promptquorum.com/ja/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo', inLanguage: 'ja', about: [{ '@type': 'Thing', 'name': 'Braintrust' }, { '@type': 'Thing', 'name': 'PromptHub' }, { '@type': 'Thing', 'name': 'Vellum' }, { '@type': 'Thing', 'name': 'Promptfoo' }, { '@type': 'Thing', 'name': 'PromptQuorum' }, { '@type': 'Thing', 'name': 'LLM 評価' }], speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] } },
    itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', name: 'プロンプト管理ツール（比較）', inLanguage: 'ja', url: 'https://www.promptquorum.com/ja/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo', numberOfItems: 5, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Braintrust', description: '詳細メトリクスと自動評価による評価と実験' }, { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'チーム協力付きプロンプトバージョン管理' }, { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'ライブトラフィック分割付き本番 A/B テスト' }, { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'GitHub Actions 統合付きオープンソース回帰テスト' }, { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'モデル選択用 25+ モデル cross-比較' }] },
  },
  zh: {
    freshness_tier: 'semi_annual',
    theme: '工具比较',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 2026年',
    seoTitle: 'Braintrust vs PromptHub 2工具方案 2026',
    metaDescription: 'Braintrust（$249/月Pro）评估提示词。Vellum（$200-500/月）A/B测试。Promptfoo免费CI/CD。PromptHub（$50-200/月）版本管理。团队需2个工具。',
    ogTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 工具对比 2026',
    ogDescription: '4款提示词工具对比：Braintrust评估、Vellum A/B测试、PromptHub版本管理、Promptfoo开源。中国企业数据安全法和合规指南。',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    twitterDescription: '4款提示词管理工具对比与选择指南。包含中国企业数据安全法合规建议。',
    intro: '**2026年，提示词优化工具的选择变得复杂。Braintrust（评估平台）、Vellum（生产A/B测试）、PromptHub（版本管理）、Promptfoo（开源CI/CD）四个工具构成行业标准。每款工具专注不同用途——不是都需要，而是根据团队工作流选择1-2个。本指南通过5个评估维度进行对比，并为中国企业提供数据安全法和合规建议。**',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    audience: '选择提示词优化堆栈的提示词工程师和工程经理',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['提示词管理', 'LLM 评估', '提示词版本控制'],
    next_refresh_due: '2026-11-01',
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'Braintrust、PromptHub、Vellum 和 Promptfoo 各自的功能', anchor: '#what-is' },
      { label: '比较方法与评估标准', anchor: '#evaluation-criteria' },
      { label: 'Braintrust：约 $500/月的评估深度', anchor: '#braintrust' },
      { label: 'PromptHub：$50–200/月的版本控制', anchor: '#prompthub' },
      { label: 'Vellum：$200–500/月的生产流量分割', anchor: '#vellum' },
      { label: 'Promptfoo：免费开源 CI/CD 测试', anchor: '#promptfoo' },
      { label: 'PromptQuorum：优化前的模型比较', anchor: '#promptquorum' },
      { label: '直接对比：所有 4 个工具比较', anchor: '#comparison-table' },
      { label: '按团队类型选择工具', anchor: '#which-tool' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '如何在这 4 个工具之间选择', anchor: '#how-to-choose' },
      { label: '中国企业应用方案', anchor: '#china-context' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
      { label: '来源', anchor: '#sources' },
    ],
    sections: {
      'key-takeaways': { isTldr: true, items: ['Braintrust 擅长详细评估和评分——贵（约 $500/月），但具有强大的实验基础设施。', 'Vellum 最适合生产部署和 A/B 测试——$200-500/月，支持流量分割和批准工作流。', 'Promptfoo 是唯一具有 CI/CD 集成的免费选项——非常适合 GitHub Actions 回归测试，无生产功能。', 'PromptHub 适合需要版本控制和协作的团队——$50-200/月，最容易使用。', 'PromptQuorum 首先回答"哪个模型？"通过 25+ 模型比较——在选择这 4 个之前使用它。', '大多数团队需要 2 个工具，不是 4 个：综合评估 + 生产选 Braintrust + Vellum，或预算友好选 Promptfoo + PromptHub。', '集成：全部 4 个支持 GitHub，但 Braintrust 最好的 API，Vellum 最好的 webhooks，Promptfoo 本地最简单。'] },
      'what-is': { title: 'Braintrust、PromptHub、Vellum 和 Promptfoo 各自的功能', content: ['这 4 个工具在您的 LLM 工作流中解决不同的问题。', '**Braintrust** 是评估和实验平台。提交提示词，获取结果，Braintrust 帮助评估（手动或使用自定义评分函数自动）。通过结构化实验衡量质量的最强工具。', '**PromptHub** 是提示词版本控制——想象 GitHub，但用于提示词。保存版本、比较变更、回滚。简洁优雅，但无评估或生产部署。', '**Vellum** 是生产部署工具，内置 A/B 测试。编写提示词，分割流量（50/50 或自定义），测量指标，推广获胜者。', '**Promptfoo** 是本地提示词测试和 CI/CD 集成的开源框架。用 YAML/JSON 编写测试用例，本地或 GitHub Actions 运行，获取回归报告。免费，随处运行，不适合生产流量分割。', '本指南比较 4 个特定工具。更广泛的提示词工程工具排名见 [Best Prompt Engineering Tools 2026](/zh/prompt-engineering/best-prompt-engineering-tools-2026)。包括 DSPy 和 Helicone 的团队优化功能见 [Best Prompt Optimization Tools for Teams](/zh/prompt-engineering/best-prompt-optimization-tools-for-teams)。'] },
      'evaluation-criteria': { title: '比较方法与评估标准', content: ['我们在 5 个对大多数团队重要的标准上评估了这 4 个工具：'], columns: ['标准', '权重', '定义'], rows: [{ '标准': '评估功能', '权重': '25%', '定义': '工具能评估输出、运行实验、追踪趋势吗？能编写自定义评分函数吗？' }, { '标准': '生产就绪', '权重': '25%', '定义': '工具能处理实时流量吗？支持 A/B 测试、路由、金丝雀部署吗？' }, { '标准': '版本控制 & 协作', '权重': '20%', '定义': '团队能保存提示词版本、比较变更、协作吗？' }, { '标准': 'CI/CD & 自动化', '权重': '15%', '定义': '集成 GitHub Actions、GitLab CI 等吗？能自动化测试吗？' }, { '标准': '价格 & 复杂性', '权重': '15%', '定义': '成本多少？设置需要多长时间？需要工程设置还是开箱即用？' }] },
      'braintrust': { title: 'Braintrust：约 $500/月的评估深度', content: ['**什么：** 评估和实验平台。提交输出，定义指标（准确性、延迟、成本、自定义），查看性能。支持 LLM 基础自动评估。', '**优势：** 最强的实验基础设施。测试多个提示词版本、自定义评分、长期历史跟踪。详细的仪表板。精良文档的 API。', '**劣势：** 昂贵（约 $500/月），无生产部署功能。评估工具，不是生产工具。需手动复制最佳提示词到应用或与 Vellum 结合。'], items: ['LLM 基础自动评估（例如"回答事实正确吗？"）', '包含显著性测试的实验仪表板', '自定义评分函数（JavaScript 或 Python）', '版本历史（回滚、趋势分析）'] },
      'prompthub': { title: 'PromptHub：$50–200/月的版本控制', content: ['**什么：** 提示词用的 GitHub。保存版本、后来修改、PromptHub 记录 diff。检索旧版本、搜索变更、多项目工作区管理。', '**优势：** 简洁且便宜（$50-200/月）。Web UI 易用。对需要版本控制和协作的团队理想，无复杂基础设施。', '**劣势：** 无评估或测量。无法知道哪个提示词版本更好——需手动或另外工具。无生产部署支持。'] },
      'vellum': { title: 'Vellum：$200–500/月的生产流量分割', content: ['**什么：** 生产部署工具，内置 A/B 测试。编写提示词，分割流量（50/50 或自定义），测量指标（延迟、反馈、成本），推广获胜者。', '**优势：** 生产聚焦。A/B 测试内置。支持批准工作流、金丝雀部署、webhooks。LLM API 集成无缝。最适合实时流量分割测试。', '**劣势：** 更贵（$200-500/月）。不适合离线评估——在生产测试，不是本地。需工程设置。非开源。'] },
      'promptfoo': { title: 'Promptfoo：免费开源 CI/CD 测试', content: ['**什么：** 本地提示词测试和 CI/CD 集成的开源框架。用 YAML/JSON 编写测试用例（提示词 + 预期结果），本地运行，获取回归报告。GitHub Actions 原生。', '**优势：** 免费（MIT）开源。本地——无云、无认证。YAML 配置简单。GitHub Actions 优秀。社区大。', '**劣势：** 不适合生产流量分割或版本管理。回归测试工具，不是部署工具。生产 A/B 测试需与 Vellum 结合。自动评估限制。'] },
      'promptfoo-yaml': { title: 'Promptfoo YAML 示例', codeBlock: `providers:\n  - openai:gpt-5.5\n\ntests:\n  - description: "分类查询"\n    vars:\n      question: "这是 bug 报告吗？"\n      context: "用户抱怨认证错误。"\n    assert:\n      - type: "contains"\n        value: "Bug"\n      - type: "cost"\n        threshold: 0.01\n\n  - description: "避免幻觉"\n    vars:\n      input: "列出 xyz 的 5 个功能。"\n    assert:\n      - type: "not-contains"\n        value: "工具支持 X" # 文档中不存在\n`, codeLanguage: 'yaml' },
      'promptquorum': { title: 'PromptQuorum：优化前的模型比较', content: ['**在为特定 LLM 提供商确定 Braintrust、Vellum、PromptHub 或 Promptfoo 之前，使用 PromptQuorum 将提示词同时分发到 25+ 模型，看哪个表现最好——首个与模型无关的步骤。** 免费层可用。', '与上述 4 个工具（各优化一个模型）不同，PromptQuorum 在一次运行中回答"哪个模型适合？"。在 PromptQuorum 发现最优模型后，路由到 Braintrust 进行深层评估、Vellum 进行生产 A/B 测试或 Promptfoo 进行 CI/CD 回归防止。'], items: ['包括 GPT-5.5、Claude Opus 4.8、Gemini 3.1 Pro 的 25+ 模型，和通过 Ollama、LM Studio 的本地模型', '9 个内置提示词框架——TRACE、CO-STAR、CRAFT 等', '包含共识评分的并排响应比较', '按模型的令牌计数——提交前查看成本差异', '免费层——无需工程设置'] },
      'comparison-table': { title: '直接对比：所有 4 个工具比较', content: ['第 2 节标准下所有 5 个工具摘要：'], columns: ['工具', '主要用途', '协作', 'CI/CD', '定价', '最适合'], rows: [{ '工具': 'Braintrust', '主要用途': '评估 + 实验', '协作': '✓ 工作区共享', 'CI/CD': '✓ API 集成', '定价': '约 $500/月', '最适合': '详细评估' }, { '工具': 'PromptHub', '主要用途': '版本控制', '协作': '✓ Web UI 协作', 'CI/CD': '✗ 无', '定价': '$50-200/月', '最适合': '团队协作' }, { '工具': 'Vellum', '主要用途': '生产 A/B 测试', '协作': '✓ 工作区访问', 'CI/CD': '✗ 无', '定价': '$200-500/月', '最适合': '实时流量测试' }, { '工具': 'Promptfoo', '主要用途': 'CI/CD 回归', '协作': '✗ 无（本地）', 'CI/CD': '✓ GitHub Actions', '定价': '免费（OSS）', '最适合': '预算友好' }, { '工具': 'PromptQuorum', '主要用途': '模型比较', '协作': '✓ 共享工作区', 'CI/CD': '✗ 无', '定价': '免费 + 额度', '最适合': '模型选择' }] },
      'which-tool': { title: '按团队类型选择工具', content: ['答案取决于工作流。5 个常见场景：'], numberedItems: [{ title: '只想避免回归', whyItMatters: 'Promptfoo。免费、本地、GitHub Actions 原生。小团队所需全部。' }, { title: '构建具有实时 A/B 测试的生产系统', whyItMatters: 'Vellum + PromptQuorum。PromptQuorum 先找最优模型，然后 Vellum 流量分割和反馈循环。' }, { title: '有大提示词库，需版本控制', whyItMatters: 'PromptHub。易用、便宜、为团队协作设计。与 Promptfoo 结合做 CI/CD。' }, { title: '需自定义指标的深度评估', whyItMatters: 'Braintrust。仪表板和自动评估无可匹敌。昂贵但值得数据科学团队。' }, { title: '不确定用哪个模型或框架', whyItMatters: 'PromptQuorum 先。在 25+ 模型和框架间比较。后用上述工具部署。' }] },
      'common-mistakes': { title: '常见错误', mistakes: [{ mistake: '同时购买全部 4 个工具', problem: '花费 $700+/月，重复。不会充分使用 Braintrust 和 Vellum。', fix: '选择适合工作流的 2 个工具。大多数团队需：Braintrust + Vellum 或 Promptfoo + PromptHub。' }, { mistake: '从评估开始，忽视部署', problem: 'Braintrust 显示最优提示词但需手动复制到应用。无"部署"按钮。', fix: '将 Braintrust 与 Vellum 结合或手动部署。无部署的评估无意义。' }, { mistake: '仅本地使用 Promptfoo', problem: '本地测试很好，但看不到生产延迟、成本或真实错误。', fix: '用 Promptfoo 做 CI/CD 回归测试，用 Vellum 或自有基础设施部署生产。' }, { mistake: '提示词优化前选模型', problem: '可以从 Claude Opus 开始，但 GPT-5.5 可能更优——测试前不知道。', fix: 'PromptQuorum 先多模型比较。后用 Braintrust 或 Promptfoo 为最优模型优化。' }] },
      'how-to-choose': { title: '如何在这 4 个工具之间选择', numberedItems: ['列出团队的 3 个主要难题：(a) 评估、(b) 版本控制、(c) 生产部署。', '每个难题选最优工具：(a) Braintrust、(b) PromptHub、(c) Vellum。', '难题是"不知道哪个模型"？PromptQuorum 开始。', '难题是"没预算"？CI/CD 选 Promptfoo、版本控制选 PromptHub。', '不超过 2 个工具。4 个工具总是太多。', '规划 90 天成本基线，评估哪个工具最优 ROI。'] },
      'china-context': { title: '中国企业应用方案', content: ['中国组织选择提示词管理工具时，有额外考虑。', '**数据安全法和企业合规：** 中国企业遵守 2021 年《数据安全法》时，Braintrust 和 Vellum 是企业级选项。Promptfoo 本地运行，合规更简单。', '**数据驻地（数据主权）：** 处理敏感信息（客户数据、内部信息）时，本地工具（Promptfoo 在服务器上运行）更容易满足数据主权需求。云工具（Braintrust、Vellum）需明确安全认证。', '**推荐方案：** 中国团队：先 PromptQuorum（免费）选模型，后 Promptfoo（免费、本地）CI/CD 回归，PromptHub（便宜）版本控制。此组合 $200/月以下且符合数据安全法。仅生产规模达到时才迁移到 Braintrust 或 Vellum。'] },
      'faq': { title: '常见问题', faqs: [{ q: 'Braintrust 和 PromptHub 主要区别？', a: 'Braintrust 用于评估和实验。PromptHub 用于版本控制。Braintrust 回答"哪个提示词最优？"PromptHub 回答"之前用的版本是？"可结合使用。' }, { q: 'Promptfoo 真的免费？', a: '是的，Promptfoo 开源（MIT）完全免费。本地或自有服务器运行。唯一成本：OpenAI、Anthropic 等 API 调用。' }, { q: '应选 Braintrust 还是 Vellum？', a: 'Braintrust 用于评估（不知哪个提示词最优）。Vellum 用于生产（不知哪个流量分割最优）。不同的——两个结合最优。' }, { q: 'Vellum 比 Braintrust 贵多少？', a: 'Braintrust 约 $500/月。Vellum $200-500/月（按量）。即 Vellum 可能同价或更便宜，取决生产流量。' }, { q: 'Promptfoo 怎样与 GitHub Actions 集成？', a: '创建 `.github/workflows/test.yml` 文件，调用 `npx promptfoo eval`。Promptfoo 读 YAML 测试、运行、显示回归。Actions 自动在每次推送触发。' }, { q: 'PromptHub 能替代 Braintrust？', a: '不能。PromptHub 保存版本。Braintrust 评估质量。PromptHub 无法测量哪个版本最优。可结合使用。' }, { q: 'Vellum 与提示词管理平台相同？', a: '不是，Vellum 是生产部署工具，不是版本控制。只想存提示词？PromptHub。实时流量 A/B 测试？Vellum。' }] },
      'related-reading': { title: '延伸阅读', items: ['[Best Prompt Engineering Tools 2026](/zh/prompt-engineering/best-prompt-engineering-tools-2026) — 包括 Braintrust、PromptHub、Vellum、Promptfoo 和 20+ 其他的所有提示词工具广泛排名', '[Best Prompt Optimization Tools for Teams](/zh/prompt-engineering/best-prompt-optimization-tools-for-teams) — 包括 DSPy、Helicone、OpenAI Evals 的团队优化', '[How to Evaluate Prompt Quality](/zh/prompt-engineering/how-to-evaluate-prompt-quality) — 提示词评估的指标和框架', '[Prompt Evaluation Metrics](/zh/prompt-engineering/prompt-evaluation-metrics) — 准确性、延迟、成本、关联性、自定义指标的深入讲解'] },
      'sources': { title: '来源', items: ['[Braintrust — AI Evaluation Platform](https://braintrust.dev) — 官方文档；评分函数、实验仪表板、$500/月 Team 计划声明基础', '[PromptHub — Prompt Version Control](https://prompthub.ai) — 产品首页；版本控制、Web UI、$50-200/月 定价声明基础', '[Vellum — LLM Deployment and A/B Testing](https://www.vellum.ai) — 产品概览和定价页；流量分割、批准工作流、$200-500/月 声明基础', '[Promptfoo — Open-Source Prompt Testing](https://www.promptfoo.dev) — GitHub 仓库和文档；MIT 许可、YAML 配置、GitHub Actions 集成声明基础', '[PromptQuorum — Multi-Model Dispatch](https://promptquorum.com) — 多模型比较工具；25+ 模型分发和跨模型比较声明基础'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 2026', description: '4款提示词管理工具对比：Braintrust评估、Vellum A/B测试、PromptHub版本管理、Promptfoo开源CI/CD。含中国企业《数据安全法》合规指南。', datePublished: '2026-04-10', dateModified: '2026-05-01', author: { '@type': 'Organization', 'name': 'PromptQuorum' }, publisher: { '@type': 'Organization', 'name': 'PromptQuorum', 'url': 'https://www.promptquorum.com' }, url: 'https://www.promptquorum.com/zh/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo', inLanguage: 'zh', about: [{ '@type': 'Thing', 'name': 'Braintrust' }, { '@type': 'Thing', 'name': 'PromptHub' }, { '@type': 'Thing', 'name': 'Vellum' }, { '@type': 'Thing', 'name': 'Promptfoo' }, { '@type': 'Thing', 'name': 'PromptQuorum' }, { '@type': 'Thing', 'name': 'LLM 评估' }], speakable: { '@type': 'SpeakableSpecification', 'cssSelector': ['.article-intro', '.key-takeaways'] } },
    itemListSchema: { '@context': 'https://schema.org', '@type': 'ItemList', name: '提示词管理工具（比较）', inLanguage: 'zh', url: 'https://www.promptquorum.com/zh/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo', numberOfItems: 5, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Braintrust', description: '包含详细指标和自动评估的评估和实验' }, { '@type': 'ListItem', position: 2, name: 'PromptHub', description: '团队协作的提示词版本控制' }, { '@type': 'ListItem', position: 3, name: 'Vellum', description: '实时流量分割的生产 A/B 测试' }, { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'GitHub Actions 集成的开源回归测试' }, { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: '模型选择的 25+ 模型跨模型比较' }] },
  },
  ar: {
    theme: 'Tools & Platforms',
    title: 'Braintrust مقابل PromptHub مقابل Vellum مقابل Promptfoo (2026)',
    seoTitle: 'Braintrust مقابل PromptHub مقابل Vellum 2026',
    intro: '**تهيمن أربع أدوات على إدارة الـ prompts للفرق: Braintrust لتقييم المخرجات، وPromptHub للتحكم في الإصدارات، وVellum لاختبار A/B في الإنتاج، وPromptfoo لمنع انحدارات CI/CD.** معظم الفرق تشتري الأدوات الأربع وتُهدر $1,000+ شهريًا. المجموعة الصحيحة دائمًا هي أداتان فقط — إحداهما للتقييم والأخرى للنشر.',
    metaDescription: 'Braintrust بـ $249/شهر للتقييم. Vellum بـ $200–500/شهر لاختبار A/B. Promptfoo مجاني لـ CI/CD. PromptHub بـ $50–200/شهر شهرياً.',
    ogTitle: 'شراء الأدوات الأربع للـ prompts يُهدر $1,000+/شهر. إليك المجموعة الثنائية',
    ogDescription: 'Braintrust يُسجّل النقاط. Vellum يُوزّع الحركة. Promptfoo يكتشف الانحدارات. PromptHub يُدير الإصدارات. اختر 2. جدول المقارنة بالداخل.',
    twitterTitle: 'Braintrust مقابل PromptHub مقابل Vellum مقابل Promptfoo: أي اثنتين تختار',
    twitterDescription: 'Promptfoo مجاني. Vellum يبدأ من $200/شهر. Braintrust من $500/شهر. PromptHub من $50/شهر. تحتاج 2 فقط — تقييم + نشر. مصفوفة القرار بالداخل.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مهندسو الـ prompts ومدراء الهندسة الذين يختارون مجموعة أدوات إدارة الـ prompts',
    primaryTerm: 'مقارنة Braintrust وPromptHub وVellum وPromptfoo',
    aboutTopics: ['إدارة الـ Prompts', 'تقييم نماذج اللغة الكبيرة', 'إدارة إصدارات الـ Prompts'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'ما الذي تفعله Braintrust وPromptHub وVellum وPromptfoo', anchor: '#what-is' },
      { label: 'كيف نقارن هذه الأدوات', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: عمق التقييم بـ $249/شهر (Pro)', anchor: '#braintrust' },
      { label: 'PromptHub: التحكم في الإصدارات بـ $50–200/شهر', anchor: '#prompthub' },
      { label: 'Vellum: توزيع الحركة في الإنتاج بـ $200–500/شهر', anchor: '#vellum' },
      { label: 'Promptfoo: اختبار CI/CD مفتوح المصدر ومجاني', anchor: '#promptfoo' },
      { label: 'PromptQuorum: مقارنة متعددة النماذج قبل التحسين', anchor: '#promptquorum' },
      { label: 'وجهًا لوجه: الأدوات الأربع مقارنةً', anchor: '#comparison-table' },
      { label: 'اختيار الأداة حسب نوع الفريق', anchor: '#which-tool' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'كيف تختار بين هذه الأدوات الأربع', anchor: '#how-to-choose' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'المصادر', anchor: '#sources' },
    ],
    quickFacts: [
      'Promptfoo هي الأداة المجانية الوحيدة (رخصة MIT، بدون مستوى مدفوع) — مثالية للفرق التي تريد CI/CD بدون تكاليف SaaS',
      'الخطة Pro لـ Braintrust تبدأ من $249/شهر (المستوى المجاني متاح بـ 1M spans + 10K scores)؛ Vellum بين $200–500/شهر؛ PromptHub بين $50–200/شهر',
      'مجموعة أدوات ثنائية نموذجية (تقييم + نشر) تكلف $250–700/شهر لفريق من 5 أشخاص',
      'Vellum وحده يدعم التوزيع الفعلي للحركة في الإنتاج (اختبارات A/B مع مستخدمين حقيقيين)',
      'تدعم الأدوات الأربع واجهات برمجة تطبيقات OpenAI وAnthropic؛ Promptfoo وحده يدعم أكثر من 40 مزودًا بشكل أصلي',
      'PromptQuorum يضيف خطوة أولى مستقلة عن النماذج: يُرسل الـ prompt إلى 25+ نموذجًا قبل الالتزام بمزود',
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust يتصدر في عمق التقييم: وظائف تسجيل مخصصة، وكيل Loop للتكرار المستقل، تكامل MCP لأدوات IDE، Pro بـ $249/شهر (مستوى مجاني متاح). مثالي للفرق التي تقيس جودة المخرجات بشكل منهجي.',
          'Vellum يتصدر في اختبار A/B بالإنتاج: يوزع حركة المستخدمين الحقيقيين بين المتغيرات، وتدفقات الموافقة، و$200–500/شهر. مثالي للميزات اللايف للنماذج اللغوية.',
          'Promptfoo هو البديل المجاني: CLI مفتوح المصدر، مجموعات اختبار بـ YAML، تكامل مع GitHub Actions. مثالي لفرق DevOps والمنصات.',
          'PromptHub يركز على التحكم في الإصدارات والمشاركة بين الفرق. الأسهل في الإعداد؛ الأقل تكلفة ($50–200/شهر). مثالي لفرق المحتوى والتسويق.',
          'معظم الفرق تحتاج بالضبط إلى أداتين: إحداهما للتقييم (Braintrust أو Promptfoo) والأخرى للنشر (Vellum أو PromptHub). شراء الأربعة يُهدر $700+/شهر.',
          'لا توجد أداة واحدة تتفوق في المعايير الخمسة: التعاون، واختبار A/B، وتسجيل التقييم، وتكامل CI/CD، وشفافية الأسعار.',
          'PromptQuorum: قبل التحسين لأي أداة، استخدم PromptQuorum لمقارنة أداء الـ prompt في 25+ نموذجًا في آنٍ واحد.',
        ],
      },
      whatIs: {
        id: 'what-is',
        title: 'ما الذي تفعله Braintrust وPromptHub وVellum وPromptfoo',
        content: [
          '**تحل Braintrust وPromptHub وVellum وPromptfoo مشاكل مختلفة لفرق الـ prompts.** Braintrust منصة تقييم (تُسجّل النقاط للمخرجات). PromptHub نظام تحكم في الإصدارات (ينظم الـ prompts ويشاركها). Vellum منصة نشر مع اختبار A/B (تُجري تجارب على الحركة الحقيقية). Promptfoo أداة أتمتة اختبار (تكتشف الانحدارات في CI/CD). تتداخل ولكنها لا تحل محل بعضها البعض.',
          'السبب في صعوبة اختيار الفرق لواحدة: الأربعة تدّعي "تحسين الـ prompts" لكنها تفعل ذلك في مراحل مختلفة. Braintrust تحسّن بالقياس؛ Vellum تحسّن بتوزيع الحركة؛ Promptfoo تحسّن باكتشاف الانحدارات؛ PromptHub تحسّن بالتنظيم. يمكن للفريق استخدام Braintrust لاكتشاف prompt أفضل، وPromptfoo لاختباره في CI/CD، وVellum لنشره.',
          'هذا الدليل مقارنة مباشرة لأربع أدوات محددة. للحصول على تصنيف أوسع لجميع أدوات هندسة الـ prompts، راجع [أفضل أدوات هندسة الـ prompts 2026](/ar/prompt-engineering/best-prompt-engineering-tools-2026). لميزات تحسين الفريق بما يشمل DSPy وHelicone، راجع [أفضل أدوات تحسين الـ prompts للفرق](/ar/prompt-engineering/best-prompt-optimization-tools-for-teams).',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Braintrust يُسجّل النقاط، PromptHub يُدير الإصدارات، Vellum يجري A/B، Promptfoo يختبر الانحدارات — أربع أدوات للـ prompts تتداخل لكنها لا تحل محل بعضها.',
          },
          {
            type: 'in-plain-terms',
            text: 'فكّر في الأمر كبناء برمجيات: تحتاج إطار اختبار (Promptfoo)، ولوحة جودة (Braintrust)، وخط نشر (Vellum)، ومستودع كود (PromptHub). معظم الفرق تحتاج اثنتين منها، ليس الأربعة.',
          },
        ],
      },
      evaluationCriteria: {
        id: 'evaluation-criteria',
        title: 'كيف نقارن هذه الأدوات',
        content: [
          '**نقيّم الأدوات الأربع وفق خمسة معايير مهمة في سير عمل الفرق الفعلية: مدى دعمها للتعاون بين الفريق، وما إذا كانت تتضمن اختبار A/B أو التجريب، وقدرات التسجيل والتقييم، وتكامل CI/CD، وشفافية الأسعار.**',
        ],
        columns: ['المعيار', 'ما يقيسه', 'لماذا يهم'],
        rows: [
          {
            'المعيار': 'التعاون بين الفريق',
            'ما يقيسه': 'التحكم في الوصول بالأدوار، والفروع، ولوحات المعلومات المشتركة',
            'لماذا يهم': 'يجب أن يتمكن عدة مهندسين من تعديل الـ prompts دون الكتابة فوق بعضهم',
          },
          {
            'المعيار': 'اختبار A/B',
            'ما يقيسه': 'مقارنة المتغيرات جنبًا إلى جنب، وتوزيع الحركة',
            'لماذا يهم': 'مقارنة المتغيرات على نفس مجموعة الإدخالات أو حركة الإنتاج',
          },
          {
            'المعيار': 'التقييم/التسجيل',
            'ما يقيسه': 'مقاييس مخصصة، ومسجّلون مبنيون على نماذج اللغة الكبيرة، وبوابات الجودة',
            'لماذا يهم': 'قياس جودة المخرجات وليس مجرد النظر إليها بصريًا',
          },
          {
            'المعيار': 'تكامل CI/CD',
            'ما يقيسه': 'CLI، وAPI، وGitHub Actions، والاختبار الآلي',
            'لماذا يهم': 'اكتشاف الانحدارات قبل النشر؛ أتمتة فحوص الجودة',
          },
          {
            'المعيار': 'شفافية الأسعار',
            'ما يقيسه': 'صفحة أسعار عامة، وتكاليف واضحة لكل وحدة',
            'لماذا يهم': 'القدرة على التنبؤ بالميزانية للفرق المؤلفة من 3–10 أشخاص',
          },
        ],
      },
      braintrust: {
        id: 'braintrust',
        title: 'Braintrust: عمق التقييم بـ $249/شهر (Pro)',
        content: [
          '**Braintrust منصة تقييم ذكاء اصطناعي تسجّل كل استدعاء لـ API، وتُسجّل النقاط للمخرجات بمقاييس مخصصة، وتُجري تجارب A/B في مختبر مشترك — مثالية للفرق التي تقيس جودة المخرجات بشكل منهجي.** Braintrust ليست أداة بناء prompts ولا نظام تحكم في الإصدارات؛ إنها مختبر تقييم مشترك.',
          'يشمل المستوى المجاني 1M spans من التتبع و10K scores مع مستخدمين غير محدودين — كافٍ لمعظم سير العمل في التقييم قبل الإنتاج. الخطة Pro بـ $249/شهر. أضافت Braintrust وكيل Loop في 2026: مُقيّم مستقل يولّد حالات اختبار ويكرر على الـ prompts دون إعداد يدوي. يربط خادم MCP بين Claude Code وCursor مباشرةً بمجموعة تقييم Braintrust من IDE. يتكامل وكيل التسجيل مع واجهات برمجة تطبيقات OpenAI وAnthropic وGoogle دون تغييرات في الكود. تُعرّف وظائف التسجيل المخصصة بـ TypeScript أو Python. يتيح التكامل مع GitHub إصدار الـ prompts جنبًا إلى جنب مع الكود. شهادة SOC 2 Type II متاحة الآن.',
          'أفضل الميزات للفرق: لوحات تجارب مشتركة (يرى جميع الأعضاء نتائج التقييم في الوقت الفعلي)، التحكم في الوصول بالأدوار (مشرف/عضو/مراقب)، تاريخ commits بأسلوب Git للـ prompts، وتسجيل الإنتاج (كل استدعاء API مسجّل بالمدخلات والمخرجات والنقاط).',
          'للاطلاع على المقاييس التي تقوم عليها عملية التسجيل المخصصة، راجع [مقاييس تقييم الـ Prompt: الدقة والأهمية والكمون](/ar/prompt-engineering/prompt-evaluation-metrics).',
        ],
        items: [
          'لوحات تجارب مشتركة: يرى جميع أعضاء الفريق نتائج التقييم الحية',
          'التحكم في الوصول بالأدوار: أدوار المشرف/العضو/المراقب',
          'إصدار الـ prompts عبر تاريخ commits بأسلوب Git',
          'تسجيل الإنتاج: كل استدعاء API مسجّل بالمدخلات/المخرجات/النقاط',
          'وكيل Loop: مُقيّم مستقل يولّد حالات اختبار ويكرر على الـ prompts (جديد في 2026)',
          'خادم MCP: تكامل مباشر مع Claude Code وCursor للتقييم من IDE',
          'شهادة SOC 2 Type II للنشر على مستوى المؤسسات',
        ],
        callouts: [
          {
            type: 'insight',
            label: 'هل تعلم؟',
            text: 'يشمل المستوى المجاني لـ Braintrust مليون span من التتبع و10,000 نقطة تسجيل مع مستخدمين غير محدودين — أكثر قدرة تقييمية مما تستخدمه معظم الفرق في أول 3 أشهر. يمكنك تشغيل سير عمل تقييم prompt كامل دون دفع أي شيء.',
          },
          {
            type: 'warning',
            label: 'تعقيد وظائف التسجيل',
            text: 'يتطلب مُسجّلو Braintrust Pro المخصصون TypeScript أو Python. إذا لم يستطع أحد في فريقك كتابة وظائف تسجيل، فإن الميزة المميزة الرئيسية لـ Braintrust ستظل غير مستخدمة. ومع ذلك، يقلل المستوى المجاني ووكيل Loop هذا الحاجز. تحقق من قدرة الفريق قبل الالتزام بـ Pro.',
          },
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: التحكم في الإصدارات بـ $50–200/شهر',
        content: [
          '**PromptHub منصة تحكم في الإصدارات ومشاركة الـ prompts — تخزّن الفرق الـ prompts في مكتبة مركزية، وتُسمّي الإصدارات، وتُشارك عبر المنظمة دون إدارة جداول بيانات أو رسائل Slack.** الأسهل في الإعداد من بين الأربعة.',
          'Starter ~‎$50/شهر؛ Pro ~‎$200/شهر. واجهة ويب للمستخدمين غير التقنيين. تاريخ إصدارات لكل prompt، وتصنيفات للتنظيم، وتدفقات نشر. يدعم واجهات برمجة تطبيقات OpenAI وAnthropic والمخصصة. القيد: بدون تسجيل تقييم مخصص؛ محدود بفحوص الجودة المدمجة؛ غير مناسب للفرق التي تُجري تجارب A/B حية.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: توزيع الحركة في الإنتاج بـ $200–500/شهر',
        content: [
          '**Vellum منصة نشر prompt مع اختبار A/B مدمج تُوزّع الحركة الحقيقية في الإنتاج بين متغيرات الـ prompts وتقيس جودة المخرجات في العالم الحقيقي — مثالية للفرق التي تُشغّل ميزات نماذج لغوية حية.** Vellum مستوى تحكم، ليست أداة اختبار.',
          'Starter ‎$200/شهر؛ Growth ‎$500/شهر؛ Enterprise مخصص. توجّه حركة الإنتاج بنسبة مئوية بين المتغيرات. يقارن التقييم بين المتغيرات على مجموعات بيانات اختبار. ميزات الفريق: مساحة عمل مشتركة، ومراجعات prompts بأسلوب PR، وتدفقات موافقة النشر. القيد: الخيار الأغلى؛ مبالغة للفرق قبل مرحلة الإنتاج أو التي لا تتعامل مع حركة مستخدمين حقيقية بعد.',
          'لفهم متى يُضيف اختبار A/B قيمة مقابل التحسين اليدوي، راجع [التحسين اليدوي مقابل الآلي للـ Prompts](/ar/prompt-engineering/manual-vs-automated-prompt-optimization).',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: اختبار CI/CD مفتوح المصدر ومجاني',
        content: [
          '**Promptfoo أداة CLI مفتوحة المصدر تُشغّل مجموعات اختبار prompt آلية ضد نماذج لغوية متعددة — تدمجها الفرق في خطوط CI/CD لاكتشاف انحدارات الـ prompts قبل النشر.** مجانية (رخصة MIT). عرّف حالات الاختبار بـ YAML، أضفها إلى Git، وسيُشغّلها Promptfoo في كل PR.',
          'يدعم 40+ مزود LLM. تكامل GitHub Actions متاح. تُقدّم مدخلات وأنماط مخرجات متوقعة وتأكيدات مخصصة مبنية على نماذج لغوية. ملائم للفرق: إعدادات الاختبار في Git، تُشغَّل في CI، بدون حساب أو فواتير شهرية. القيد: بدون واجهة؛ للمهندسين فقط؛ بدون ميزات تعاون مدمجة خارج Git.',
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
        callouts: [
          {
            type: 'tip',
            label: 'Promptfoo + GitHub Actions',
            text: 'تُضاف إعدادات اختبار YAML الخاصة بـ Promptfoo مباشرةً إلى Git. في كل PR، يُشغّل GitHub Actions مجموعة الاختبار ضد جميع النماذج المُهيّأة ويحجب الدمج عند الفشل. بدون تكلفة شهرية، وتكامل CI/CD كامل.',
          },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: مقارنة متعددة النماذج قبل التحسين',
        content: [
          '**قبل الالتزام بـ Braintrust أو Vellum أو PromptHub أو Promptfoo لمزود LLM محدد، استخدم [PromptQuorum](/features) لإرسال الـ prompt إلى 25+ نموذجًا في آنٍ واحد ومعرفة أيها يؤدي أفضل — خطوة أولى مستقلة عن النماذج.** مستوى مجاني متاح.',
          'على عكس الأدوات الأربع السابقة (التي تُحسّن لنموذج واحد في كل مرة)، يجيب PromptQuorum على سؤال "أي نموذج يتعامل مع هذا الـ prompt بشكل أفضل؟" في تشغيل واحد. بعد اكتشاف النموذج الأمثل مع PromptQuorum، وجّه إلى Braintrust للتقييم الأعمق، أو Vellum لاختبار A/B في الإنتاج، أو Promptfoo لمنع انحدارات CI/CD.',
        ],
        items: [
          'أكثر من 25 نموذجًا بما يشمل GPT-5.5 وClaude Opus 4.8 وGemini 3.1 Pro والنماذج المحلية عبر Ollama وLM Studio',
          '9 أطر prompt مدمجة — TRACE وCO-STAR وCRAFT والمزيد',
          'مقارنة الردود جنبًا إلى جنب مع تسجيل الإجماع',
          'عد الـ tokens لكل نموذج — اطلع على فروق التكلفة قبل الالتزام',
          'مستوى مجاني — لا يتطلب إعدادًا تقنيًا',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'وجهًا لوجه: الأدوات الأربع مقارنةً',
        content: [
          '**لا توجد أداة واحدة تتفوق في المعايير الخمسة. Braintrust تتصدر في عمق التقييم؛ Vellum تتصدر في توزيع الحركة في الإنتاج؛ Promptfoo تتصدر في CI/CD المجاني؛ PromptHub تتصدر في البساطة.**',
        ],
        columns: ['الأداة', 'الاستخدام الرئيسي', 'التعاون', 'CI/CD', 'الأسعار', 'مثالية لـ'],
        rows: [
          {
            'الأداة': 'Braintrust',
            'الاستخدام الرئيسي': 'تقييم المخرجات',
            'التعاون': '✅ أدوار + لوحات معلومات',
            'CI/CD': '✓ API + MCP',
            'الأسعار': 'مجاني / $249 Pro',
            'مثالية لـ': 'الفرق المركّزة على الجودة',
          },
          {
            'الأداة': 'PromptHub',
            'الاستخدام الرئيسي': 'التحكم في الإصدارات',
            'التعاون': '✅ مساحة عمل الفريق',
            'CI/CD': '✗ لا يوجد',
            'الأسعار': '$50–200/شهر',
            'مثالية لـ': 'فرق المحتوى',
          },
          {
            'الأداة': 'Vellum',
            'الاستخدام الرئيسي': 'A/B في الإنتاج',
            'التعاون': '✅ مراجعات PR',
            'CI/CD': '✓ Webhooks',
            'الأسعار': '$200–500/شهر',
            'مثالية لـ': 'الميزات الحية',
          },
          {
            'الأداة': 'Promptfoo',
            'الاستخدام الرئيسي': 'اختبار CI/CD',
            'التعاون': 'مبني على Git',
            'CI/CD': '✅ GitHub Actions',
            'الأسعار': 'مجاني',
            'مثالية لـ': 'فرق DevOps',
          },
          {
            'الأداة': 'PromptQuorum',
            'الاستخدام الرئيسي': 'مقارنة متعددة النماذج',
            'التعاون': '✓ مساحة عمل مشتركة',
            'CI/CD': '✗ لا يوجد',
            'الأسعار': 'مجاني + رصيد',
            'مثالية لـ': 'اختيار النموذج',
          },
        ],
        callouts: [
          {
            type: 'insight',
            label: 'قاعدة المجموعة الثنائية',
            text: 'تُهدر معظم الفرق المال على 3–4 أدوات. المجموعة المثلى هي اثنتان: إحداهما للتقييم (Braintrust أو Promptfoo) والأخرى للنشر/الإصدارات (Vellum أو PromptHub). إجمالي الإنفاق: $250–700/شهر بدلًا من $1,000+.',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: 'اختيار الأداة حسب نوع الفريق',
        content: [
          '**طابق الأداة مع أبرز عنق الزجاجة والعمق التقني لفريقك.**',
          'لا تستخدم Braintrust إذا لم يتمكن فريقك من كتابة وظائف تسجيل مخصصة — ستظل غير مستخدمة. لا تستخدم Vellum إذا لم يكن لديك مستخدمون حقيقيون بعد — اشترها بعد الوصول إلى مرحلة الإنتاج. لا تستخدم PromptHub وحده إذا كنت بحاجة إلى قياس جودة المخرجات — ينظّم الـ prompts لكنه لا يستطيع تسجيل النقاط لها.',
          'لسير العمل الكامل لإعداد الفريق بما يشمل الملكية وقواعد المراجعة، راجع [إعداد هندسة الـ Prompt للفرق الصغيرة](/ar/prompt-engineering/prompt-engineering-setup-small-teams).',
        ],
        numberedItems: [
          {
            title: 'فرق الهندسة ذات متطلبات الجودة ← Braintrust',
            whyItMatters: 'صمّم وظائف تسجيل مخصصة؛ أجرِ تقييمات قابلة للتكرار؛ قِس تأثير تغييرات الـ prompt.',
          },
          {
            title: 'فرق المحتوى/التسويق التي تحتاج تحكمًا في الإصدارات ← PromptHub',
            whyItMatters: 'واجهة ويب بسيطة؛ لا يتطلب كودًا؛ مكتبة prompts مركزية.',
          },
          {
            title: 'فرق المنتج مع ميزات نماذج لغوية حية ← Vellum',
            whyItMatters: 'اختبار A/B على الحركة الحقيقية؛ تدفقات الموافقة؛ قِس التأثير في العالم الحقيقي.',
          },
          {
            title: 'فرق DevOps/المنصات التي تمنع الانحدارات ← Promptfoo',
            whyItMatters: 'مجاني؛ مبني على YAML؛ يتكامل مع GitHub؛ يكتشف الانحدارات في CI.',
          },
          {
            title: 'جميع الفرق (الخطوة الأولى) ← PromptQuorum',
            whyItMatters: 'قارن الـ prompt على 25+ نموذجًا قبل الالتزام بالتحسين لمزود واحد.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة',
        mistakes: [
          {
            mistake: 'شراء الأدوات الأربع لتغطية جميع الاحتمالات',
            problem: 'يصل الإنفاق الإجمالي إلى $700+/شهر؛ تُشغّل أربعة أنظمة؛ ارتباك الفريق حول أي أداة تُستخدم لأي غرض.',
            fix: 'اختر اثنتين: إحداهما للتقييم (Braintrust أو Promptfoo) والأخرى للنشر (Vellum أو PromptHub). أضف PromptQuorum كخطوة أولى مجانية.',
          },
          {
            mistake: 'عدم تجربة المستويات المجانية أولًا',
            problem: 'كلٌّ من Braintrust (مليون تتبع و10K نقاط مجانًا) وPromptfoo (مجاني تمامًا) يوفران قدرة كافية لإجراء تقييم حقيقي قبل الدفع. الفرق التي تتخطى المستوى المجاني تُهدر الشهر الأول في التعلم بما كان يجب قياسه.',
            fix: 'ابدأ بـ Promptfoo (CLI مجاني) أو المستوى المجاني لـ Braintrust. ابنِ مجموعة بيانات التقييم. حدّد مقاييس الجودة. فقط عندها قيّم الأدوات المدفوعة مقابل خط الأساس الذي وضعته.',
          },
          {
            mistake: 'اختيار أداة بسبب سمعة العلامة التجارية بدلًا من ملاءمة سير العمل',
            problem: 'تشتري Braintrust Pro لكن فريقك غير تقني ولا يستطيع كتابة وظائف تسجيل؛ أو تشتري PromptHub عندما يكون عنق الزجاجة الحقيقي هو قياس الجودة.',
            fix: 'حدّد عنق الزجاجة الرئيسي أولًا (التقييم، الإصدارات، اختبار A/B، منع الانحدارات) قبل تقييم الأدوات.',
          },
          {
            mistake: 'اعتماد أداة دون بناء مجموعة بيانات تقييم',
            problem: 'تسجّل في Braintrust أو Vellum لكن ليس لديك أزواج إدخال/مخرجات مُصنّفة لتسجيل النقاط عليها. تظل الأدوات غير مستخدمة؛ ولا ترى عائدًا على الاستثمار.',
            fix: 'ابنِ مجموعة اختبار من 20–50 مثالًا مُصنّفًا قبل الدفع لأي منصة. استخدم المستوى المجاني لـ Braintrust أو Promptfoo (مجاني) للتحقق من مقاييسك أولًا.',
          },
          {
            mistake: 'استخدام Vellum بدون مقياس جودة',
            problem: 'تجري اختبار A/B لـ promptين على حركة الإنتاج لكنك لم تُعرّف "المخرج الجيد". تُوجَّه متغيرة المبيعات للمستخدمين؛ لا أحد يستطيع تفسير السبب.',
            fix: 'حدّد 3–5 معايير جودة ونفّذها كتأكيدات (في Promptfoo) أو مسجّلين مخصصين (في Braintrust) قبل تشغيل اختبارات A/B.',
          },
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'كيف تختار بين هذه الأدوات الأربع',
        numberedItems: [
          'حدّد عنق الزجاجة الرئيسي: هل هو جودة المخرجات، أم التكلفة، أم الكمون، أم سرعة الفريق؟',
          'قيّم العمق التقني: فريق غير تقني ← PromptHub؛ مختلط ← Braintrust + Vellum؛ تقني جدًا ← Promptfoo.',
          'ابنِ مجموعة بيانات تقييم مُصنّفة (20–50 زوج إدخال/مخرجات) قبل تقييم أي أداة مدفوعة.',
          'ابدأ بأداة مجانية (Promptfoo أو PromptQuorum) لتحديد مقاييس خط الأساس.',
          'أجرِ تجربة أسبوعين مع الـ prompts الفعلية للفريق قبل الالتزام بأي منصة SaaS.',
          'خطط لأداتين: إحداهما للتقييم والأخرى للنشر/الإصدارات.',
        ],
        callouts: [
          {
            type: 'tip',
            label: 'نصيحة احترافية: ابنِ مجموعة اختبار أولًا',
            text: 'ابنِ مجموعة اختبار من 20–50 زوج إدخال/مخرجات مُصنّفة قبل تقييم أي أداة مدفوعة. بدون مجموعة بيانات أساسية، لا يمكنك قياس ما إذا كانت الأداة تُحسّن الـ prompts فعلًا — بل أنت فقط تدفع مقابل لوحة معلومات بلا بيانات. استخدم المستوى المجاني لـ Braintrust أو Promptfoo (مجاني) للتحقق من مقاييسك أولًا.',
          },
          {
            type: 'tip',
            label: 'المجاني أولًا، ثم المدفوع',
            text: 'ابدأ بـ Promptfoo (مجاني) + PromptQuorum (مستوى مجاني) لتحديد خطوط الأساس. أضف Braintrust Pro أو Vellum فقط بعد امتلاك 20+ حالة اختبار مُصنّفة ومقياس جودة مُعرَّف. أدوات مدفوعة بدون خطوط أساس = ميزانية مُهدرة.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما الفرق الرئيسي بين Braintrust وPromptHub؟',
            a: 'Braintrust منصة تقييم: تسجّل استدعاءات API، وتُعرّف وظائف تسجيل مخصصة، وتُجري تجارب A/B لقياس جودة المخرجات. PromptHub نظام تحكم في الإصدارات: يُخزّن الـ prompts في مكتبة، ويُسمّي الإصدارات، ويُشارك بين الفريق. استخدم Braintrust عندما يكون عنق الزجاجة هو قياس الجودة؛ استخدم PromptHub عندما يكون عنق الزجاجة هو تنظيم الـ prompts.',
          },
          {
            q: 'هل Promptfoo مجاني حقًا؟',
            a: 'نعم. Promptfoo مفتوح المصدر (رخصة MIT) وليس له مستوى مدفوع. تشغّله كأداة CLI على بنيتك التحتية الخاصة أو في GitHub Actions. لا توجد رسوم شهرية أو حدود لاستدعاءات API أو قيود freemium.',
          },
          {
            q: 'هل أختار Braintrust أم Vellum؟',
            a: 'اختر Braintrust إذا كان هدفك الرئيسي قياس جودة المخرجات وتحسينها بمقاييس مخصصة. اختر Vellum إذا كان هدفك الرئيسي اختبار A/B على حركة الإنتاج الحقيقية. Braintrust تعمل بشكل أفضل قبل الإنتاج؛ Vellum تعمل بشكل أفضل مع المستخدمين الحقيقيين.',
          },
          {
            q: 'كم يكلف Vellum أكثر من Braintrust؟',
            a: 'Braintrust Pro بـ $249/شهر (يوجد أيضًا مستوى مجاني بـ 1M spans + 10K scores). Vellum Starter بـ $200/شهر؛ Growth بـ $500/شهر. عند مستوى Pro، Braintrust أغلى قليلًا من Vellum Starter لكنه يتضمن قدرة تقييم أكبر بكثير. لكليهما نقاط دخول مجانية أو منخفضة التكلفة. Promptfoo مجاني؛ PromptHub بـ $50–200/شهر.',
          },
          {
            q: 'كيف أدمج Promptfoo مع GitHub Actions؟',
            a: 'يوفر Promptfoo قالب GitHub Actions. عرّف حالات الاختبار بـ YAML، أضف الإعدادات إلى Git، واستخدم الـ promptfoo-github-action الرسمي في ملف سير العمل. في كل PR، يُشغّل Promptfoo الاختبارات ضد جميع النماذج المُهيّأة ويُبلّغ عن حالة النجاح/الفشل.',
          },
          {
            q: 'هل يمكن لـ PromptHub أن يحل محل Braintrust؟',
            a: 'لا. PromptHub يُخزّن الـ prompts ويُدير إصداراتها. Braintrust يُقيّم الـ prompts ويُسجّل نقاطها. يمكنك استخدام PromptHub وحده إذا كانت حاجتك الوحيدة هي تنظيم الـ prompts؛ لكن لا يمكنك استخدامه وحده إذا كنت بحاجة إلى قياس جودة المخرجات أو إجراء تجارب.',
          },
          {
            q: 'هل Vellum هو نفسه منصة إدارة الـ prompts؟',
            a: 'لا. Vellum منصة نشر واختبار A/B. يتضمن تحكمًا أساسيًا في الإصدارات، لكن قوته الرئيسية هي توزيع حركة الإنتاج بين متغيرات الـ prompts وقياس التأثير الحقيقي. أدوات إدارة الـ prompts الحقيقية (PromptHub) تُركّز على تنظيم الـ prompts ومشاركتها، ليس اختبارها.',
          },
          {
            q: 'هل هناك بدائل أخرى خارج هذه الأدوات الأربع في 2026؟',
            a: 'نعم. توسّع سوق تقييم الـ prompts بشكل ملحوظ في 2025–2026. Confident AI يقدم 50+ مقياس تقييم مدمج بـ $19.99–49.99/مقعد/شهر مع تكاليف تتبع أقل من Braintrust ($1/GB مقابل $3/GB). Galileo AI يوفر حواجز وقت التشغيل عبر نماذج تقييم Luna-2 ($100+/شهر). Arize Phoenix منصة مراقبة LLM مجانية ومفتوحة المصدر. لمعظم الفرق، الأدوات الأربع في هذه المقارنة بالإضافة إلى Confident AI تغطي جميع الاحتياجات العملية.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[GPT أم Claude أم Gemini؟ كيف تختار النموذج المناسب](/ar/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — اختر النموذج المناسب قبل اختيار أداة التقييم المناسبة',
          '[أفضل أدوات تحسين الـ Prompts للفرق: تصنيفات 2026](/ar/prompt-engineering/best-prompt-optimization-tools-for-teams) — يقارن سبع أدوات بما يشمل Helicone وDSPy',
          '[كيف تُقيّم جودة الـ Prompts بشكل منهجي](/ar/prompt-engineering/how-to-evaluate-prompt-quality) — أطر لقياس المخرجات',
          '[ربط الـ Prompts (Prompt Chaining)](/ar/prompt-engineering/prompt-chaining) — سير العمل متعددة الخطوات التي تستفيد أكثر من التقييم المنهجي',
          '[التحسين اليدوي مقابل الآلي للـ Prompts](/ar/prompt-engineering/manual-vs-automated-prompt-optimization) — متى تُعدّل يدويًا ومتى تؤتمت',
          '[مقاييس تقييم الـ Prompts: الدقة والأهمية والكمون](/ar/prompt-engineering/prompt-evaluation-metrics) — مقاييس الجودة المحددة لنماذج اللغة الكبيرة',
          '[Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral) — Promptfoo يتميز في المقارنة المباشرة لعائلات النماذج المحلية',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Braintrust — منصة تقييم الذكاء الاصطناعي](https://braintrust.dev) — الوثائق الرسمية؛ أساس ادعاءات وكيل Loop وتكامل MCP وشهادة SOC 2 وأسعار الخطة Pro بـ $249/شهر (أُعيد هيكلتها مارس 2026)',
          '[PromptHub — التحكم في إصدارات الـ Prompts](https://prompthub.ai) — الصفحة الرئيسية للمنتج؛ أساس ادعاءات التحكم في الإصدارات وواجهة الويب والأسعار $50–200/شهر',
          '[Vellum — نشر LLM واختبار A/B](https://www.vellum.ai) — نظرة عامة على المنتج وصفحة الأسعار؛ أساس ادعاءات توزيع الحركة وتدفق الموافقة والأسعار $200–500/شهر',
          '[Promptfoo — اختبار الـ Prompts مفتوح المصدر](https://www.promptfoo.dev) — مستودع GitHub والوثائق؛ أساس ادعاءات رخصة MIT وإعدادات YAML وتكامل GitHub Actions',
          '[PromptQuorum — إرسال متعدد النماذج](https://promptquorum.com) — أداة مقارنة متعددة النماذج؛ أساس ادعاءات الإرسال لـ 25+ نموذج والمقارنة متعددة النماذج',
          '[Confident AI](https://confident.ai) — منصة تقييم ناشئة مع 50+ مقياس مدمج بـ $19.99–49.99/مقعد/شهر',
          '[Galileo AI](https://galileo.ai) — نماذج تقييم Luna-2 وحواجز وقت التشغيل لتطبيقات LLM',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — منصة مراقبة LLM مفتوحة المصدر للتتبع والتقييم',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust مقابل PromptHub مقابل Vellum مقابل Promptfoo (2026)',
      description: 'Braintrust (‎$249/شهر) يُقيّم الـ prompts. Vellum (‎$200–500/شهر) يجري A/B testing في الإنتاج. Promptfoo CI/CD مجاني. PromptHub (‎$50–200/شهر) يُدير الإصدارات. معظم الفرق تحتاج 2 فقط.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/ar/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      inLanguage: 'ar',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'إدارة الـ Prompts' },
        { '@type': 'Thing', name: 'تقييم نماذج اللغة الكبيرة' },
        { '@type': 'Thing', name: 'إدارة إصدارات الـ Prompts' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptHub' },
        { '@type': 'SoftwareApplication', name: 'Vellum' },
        { '@type': 'SoftwareApplication', name: 'Promptfoo' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ar',
      name: 'Braintrust مقابل PromptHub مقابل Vellum مقابل Promptfoo: مقارنة الأدوات',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: 'منصة تقييم الذكاء الاصطناعي مع تسجيل تعاوني ووكيل Loop للتكرار المستقل وتكامل MCP-IDE. مستوى مجاني متاح (1M Spans، 10K Scores)؛ Pro بـ $249/شهر. مثالية للفرق التي تقيس جودة المخرجات.' },
        { '@type': 'ListItem', position: 2, name: 'PromptHub', description: 'التحكم في إصدارات الـ prompts مع تعاون الفريق' },
        { '@type': 'ListItem', position: 3, name: 'Vellum', description: 'اختبار A/B في الإنتاج مع توزيع الحركة الحقيقية' },
        { '@type': 'ListItem', position: 4, name: 'Promptfoo', description: 'اختبار الانحدار مفتوح المصدر مع تكامل GitHub Actions' },
        { '@type': 'ListItem', position: 5, name: 'PromptQuorum', description: 'مقارنة متعددة النماذج على 25+ نموذج لاختيار النموذج' },
      ],
    },
  },
  ko: {
    theme: 'Tools & Platforms',
    title: 'Braintrust vs PromptHub vs Vellum vs Promptfoo 비교 (2026)',
    seoTitle: 'Braintrust vs PromptHub vs Vellum 비교: 2026년 최적의 2가지 도구',
    intro: '**팀을 위한 프롬프트 관리 도구는 네 가지가 주도합니다: 출력 평가를 위한 Braintrust, 버전 관리를 위한 PromptHub, 프로덕션 A/B 테스트를 위한 Vellum, CI/CD 회귀 방지를 위한 Promptfoo.** 대부분의 팀은 네 가지 모두를 구매하여 월 $1,000 이상을 낭비합니다. 올바른 스택은 항상 정확히 두 가지 도구입니다 — 하나는 평가용, 하나는 배포용.',
    metaDescription: 'Braintrust ($249/월)는 프롬프트를 평가합니다. Vellum ($200–500/월)은 프로덕션 A/B 테스트를 수행합니다. Promptfoo는 무료입니다. PromptHub는 버전 관리를 합니다. 대부분의 팀은 2개만 필요합니다.',
    ogTitle: '프롬프트 도구 4개 구매는 월 $1,000 이상 낭비입니다. 2가지 도구 스택을 소개합니다',
    ogDescription: 'Braintrust는 채점합니다. Vellum은 트래픽을 분배합니다. Promptfoo는 회귀를 감지합니다. PromptHub는 버전 관리를 합니다. 2개를 선택하세요. 비교 표 포함.',
    twitterTitle: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: 어떤 2가지를 선택할까',
    twitterDescription: 'Promptfoo는 무료입니다. Vellum은 월 $200부터 시작합니다. Braintrust는 월 $500부터 시작합니다. PromptHub는 월 $50부터 시작합니다. 정확히 2개가 필요합니다 — 평가 + 배포. 의사결정 매트릭스 포함.',
    publishDate: '2026-04-10',
    dateModified: '2026-05-01',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: '프롬프트 관리 스택을 선택하는 프롬프트 엔지니어 및 엔지니어링 매니저',
    primaryTerm: 'Braintrust vs PromptHub vs Vellum vs Promptfoo',
    aboutTopics: ['프롬프트 관리', 'LLM 평가', '프롬프트 버전 관리'],
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-27',
    lastFactChecked: '2026-04-28',
    toc: [
      { label: 'Braintrust, PromptHub, Vellum, Promptfoo의 역할', anchor: '#what-is' },
      { label: '도구 비교 기준', anchor: '#evaluation-criteria' },
      { label: 'Braintrust: $249/월 Pro 플랜의 평가 심층 기능', anchor: '#braintrust' },
      { label: 'PromptHub: $50–200/월 버전 관리', anchor: '#prompthub' },
      { label: 'Vellum: $200–500/월 프로덕션 트래픽 분배', anchor: '#vellum' },
      { label: 'Promptfoo: 무료 오픈소스 CI/CD 테스트', anchor: '#promptfoo' },
      { label: 'PromptQuorum: 최적화 전 멀티 모델 비교', anchor: '#promptquorum' },
      { label: '4가지 도구 직접 비교', anchor: '#comparison-table' },
      { label: '팀 유형별 도구 선택', anchor: '#which-tool' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '4가지 도구 중 선택 방법', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related-reading' },
      { label: '출처', anchor: '#sources' },
    ],
    quickFacts: [
      'Promptfoo는 유일한 무료 도구(MIT 라이선스, 유료 티어 없음)입니다 — SaaS 비용 없이 CI/CD를 원하는 팀에 이상적입니다',
      'Braintrust Pro 플랜은 월 $249부터 시작합니다(1M spans + 10K scores 무료 티어 제공); Vellum은 $200–500/월; PromptHub는 $50–200/월',
      '두 가지 도구 스택(평가 + 배포)은 5인 팀 기준 월 $250–700이 소요됩니다',
      'Vellum만이 프로덕션에서 실제 트래픽 분배(실사용자 A/B 테스트)를 지원합니다',
      '4가지 도구 모두 OpenAI 및 Anthropic API를 지원하며, Promptfoo만이 40개 이상의 프로바이더를 기본 지원합니다',
      'PromptQuorum은 모델에 구애받지 않는 첫 번째 단계를 추가합니다: 특정 프로바이더에 결정하기 전에 25개 이상의 모델에 프롬프트를 전송합니다',
    ],
    sections: {
      keyTakeaways: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Braintrust는 평가 심층 기능에서 선두를 달립니다: 커스텀 채점 함수, 자율 반복을 위한 Loop 에이전트, IDE 도구 MCP 통합, Pro $249/월(무료 티어 제공). 출력 품질을 체계적으로 측정하는 팀에 이상적입니다.',
          'Vellum은 프로덕션 A/B 테스트에서 선두입니다: 실사용자 트래픽을 변형 간에 분배하고, 승인 워크플로우를 갖추고 있으며, $200–500/월. 실시간 LLM 기능을 보유한 팀에 이상적입니다.',
          'Promptfoo는 무료 대안입니다: 오픈소스 CLI, YAML 기반 테스트 스위트, GitHub Actions 통합. DevOps/플랫폼 팀에 이상적입니다.',
          'PromptHub는 버전 관리와 팀 공유에 집중합니다. 네 가지 중 가장 도입이 쉽고 가장 저렴합니다($50–200/월). 콘텐츠 및 마케팅 팀에 이상적입니다.',
          '대부분의 팀은 정확히 2가지 도구가 필요합니다: 평가용 하나(Braintrust 또는 Promptfoo)와 배포용 하나(Vellum 또는 PromptHub). 4가지 모두 구매하면 월 $700 이상이 낭비됩니다.',
          '어떤 도구도 5가지 기준(협업, A/B 테스트, 평가 채점, CI/CD 통합, 투명한 가격) 모두에서 탁월하지 않습니다.',
          'PromptQuorum: 어떤 도구를 최적화하기 전에 PromptQuorum을 사용하여 25개 이상의 모델에서 프롬프트가 동시에 어떻게 작동하는지 비교하세요.',
        ],
      },
      whatIs: {
        id: 'what-is',
        title: 'Braintrust, PromptHub, Vellum, Promptfoo의 역할',
        content: [
          '**Braintrust, PromptHub, Vellum, Promptfoo는 팀의 서로 다른 프롬프트 문제를 해결합니다.** Braintrust는 평가 플랫폼(출력 채점)입니다. PromptHub는 버전 관리 시스템(프롬프트 구성 및 공유)입니다. Vellum은 A/B 테스트가 있는 배포 플랫폼(실제 트래픽에서 실험 실행)입니다. Promptfoo는 테스트 자동화 도구(CI/CD에서 회귀 감지)입니다. 서로 겹치지만 대체하지는 않습니다.',
          '팀이 하나를 선택하기 어려운 이유: 네 가지 모두 "프롬프트 최적화"를 주장하지만 서로 다른 단계에서 수행합니다. Braintrust는 측정하여 최적화하고, Vellum은 트래픽을 분배하여 최적화하며, Promptfoo는 회귀를 감지하여 최적화하고, PromptHub는 구성하여 최적화합니다. 팀은 더 나은 프롬프트를 발견하기 위해 Braintrust를, CI/CD에서 테스트하기 위해 Promptfoo를, 배포하기 위해 Vellum을 사용할 수 있습니다.',
          '이 가이드는 네 가지 특정 도구에 대한 직접 비교입니다. 모든 프롬프트 엔지니어링 도구에 대한 더 넓은 순위는 [2026년 최고의 프롬프트 엔지니어링 도구](/ko/prompt-engineering/best-prompt-engineering-tools-2026)를 참조하세요. DSPy 및 Helicone을 포함한 팀 최적화 기능은 [팀을 위한 최고의 프롬프트 최적화 도구](/ko/prompt-engineering/best-prompt-optimization-tools-for-teams)를 참조하세요.',
        ],
      },
      evaluationCriteria: {
        id: 'evaluation-criteria',
        title: '도구 비교 기준',
        content: [
          '**실제 팀 워크플로우에서 중요한 5가지 기준으로 네 가지 도구를 평가했습니다: 팀 협업 지원 수준, A/B 테스트 또는 실험 포함 여부, 채점 또는 평가 기능, CI/CD 통합, 가격 투명성.**',
        ],
        columns: ['기준', '측정 항목', '중요한 이유'],
        rows: [
          {
            '기준': '팀 협업',
            '측정 항목': '역할 기반 접근 제어, 브랜치, 공유 대시보드',
            '중요한 이유': '여러 엔지니어가 서로 덮어쓰지 않고 프롬프트를 편집해야 합니다',
          },
          {
            '기준': 'A/B 테스트',
            '측정 항목': '변형 나란히 비교, 트래픽 분배',
            '중요한 이유': '동일한 입력 세트 또는 프로덕션 트래픽에서 변형 비교',
          },
          {
            '기준': '평가/채점',
            '측정 항목': '커스텀 메트릭, LLM 기반 채점기, 품질 게이트',
            '중요한 이유': '시각적으로만 보는 것이 아니라 출력 품질을 측정',
          },
          {
            '기준': 'CI/CD 통합',
            '측정 항목': 'CLI, API, GitHub Actions, 자동화 테스트',
            '중요한 이유': '배포 전 회귀 감지; 품질 검사 자동화',
          },
          {
            '기준': '가격 투명성',
            '측정 항목': '공개 가격 페이지, 단위당 명확한 비용',
            '중요한 이유': '3–10인 팀의 예산 예측 가능성',
          },
        ],
      },
      braintrust: {
        id: 'braintrust',
        title: 'Braintrust: $249/월 Pro 플랜의 평가 심층 기능',
        content: [
          '**Braintrust는 모든 API 호출을 기록하고, 커스텀 메트릭으로 출력을 채점하며, 공유 실험실에서 A/B 실험을 실행하는 AI 평가 플랫폼입니다 — 출력 품질을 체계적으로 측정하는 팀에 이상적입니다.** Braintrust는 프롬프트 빌더나 버전 관리 시스템이 아니라 공유 평가 실험실입니다.',
          '무료 티어에는 무제한 사용자가 있는 1M 추적 spans과 10K 점수가 포함되어 있습니다 — 대부분의 프리프로덕션 평가 워크플로우에 충분합니다. Pro 플랜은 $249/월입니다. Braintrust는 2026년에 Loop 에이전트를 추가했습니다: 수동 설정 없이 테스트 케이스를 생성하고 프롬프트를 반복하는 자율 평가기. MCP 서버는 IDE에서 직접 Claude Code와 Cursor를 Braintrust의 평가 스택에 연결합니다. 로깅 프록시는 코드 변경 없이 OpenAI, Anthropic, Google API와 통합됩니다. TypeScript 또는 Python으로 커스텀 채점 함수를 정의합니다. GitHub 통합으로 코드와 함께 프롬프트를 버전 관리할 수 있습니다. SOC 2 Type II 인증 현재 제공 중.',
          '팀을 위한 최고의 기능: 공유 실험 대시보드(모든 구성원이 실시간으로 평가 결과를 확인), 역할 기반 접근 제어(관리자/구성원/관찰자), 프롬프트에 대한 Git 스타일 커밋 이력, 프로덕션 로깅(모든 API 호출이 입력, 출력, 점수와 함께 기록됨).',
          '커스텀 채점 뒤의 메트릭에 대해서는 [프롬프트 평가 메트릭: 정밀도, 관련성, 지연시간](/ko/prompt-engineering/prompt-evaluation-metrics)을 참조하세요.',
        ],
        items: [
          '공유 실험 대시보드: 모든 팀 구성원이 실시간 평가 결과를 확인',
          '역할 기반 접근 제어: 관리자/구성원/관찰자 역할',
          'Git 스타일 커밋 이력을 통한 프롬프트 버전 관리',
          '프로덕션 로깅: 입력/출력/점수와 함께 모든 API 호출 기록',
          'Loop 에이전트: 테스트 케이스를 생성하고 프롬프트를 반복하는 자율 평가기 (2026년 신기능)',
          'MCP 서버: IDE에서 직접 평가를 위한 Claude Code 및 Cursor와의 직접 통합',
          '엔터프라이즈 배포를 위한 SOC 2 Type II 인증',
        ],
        callouts: [
          {
            type: 'insight',
            label: '알고 계셨나요?',
            text: 'Braintrust 무료 티어에는 무제한 사용자가 있는 1M 추적 spans과 10K 점수가 포함되어 있습니다 — 대부분의 팀이 처음 3개월 동안 사용하는 것보다 더 많은 평가 용량입니다. 비용 없이 완전한 프롬프트 평가 워크플로우를 실행할 수 있습니다.',
          },
          {
            type: 'warning',
            label: '채점 함수의 복잡성',
            text: 'Braintrust Pro의 커스텀 채점기는 TypeScript 또는 Python이 필요합니다. 팀에서 채점 함수를 작성할 수 있는 사람이 없다면, Braintrust의 주요 차별화 요소를 사용할 수 없습니다. 그러나 무료 티어와 Loop 에이전트가 이 장벽을 낮춥니다. Pro에 결정하기 전에 팀 역량을 확인하세요.',
          },
        ],
      },
      prompthub: {
        id: 'prompthub',
        title: 'PromptHub: $50–200/월 버전 관리',
        content: [
          '**PromptHub는 프롬프트 버전 관리 및 공유 플랫폼입니다 — 팀이 중앙 라이브러리에 프롬프트를 저장하고, 버전에 태그를 달고, 스프레드시트나 Slack 메시지를 관리하지 않고 조직 전체에 공유합니다.** 네 가지 중 도입이 가장 쉽습니다.',
          'Starter 약 $50/월; Pro 약 $200/월. 비기술 사용자를 위한 웹 인터페이스. 각 프롬프트의 버전 이력, 구성을 위한 태그, 배포 워크플로우. OpenAI, Anthropic 및 커스텀 API를 지원합니다. 단점: 커스텀 평가 채점 없음; 내장된 품질 검사로 제한됨; 실시간 A/B 실험을 실행하는 팀에는 적합하지 않음.',
        ],
      },
      vellum: {
        id: 'vellum',
        title: 'Vellum: $200–500/월 프로덕션 트래픽 분배',
        content: [
          '**Vellum은 내장 A/B 테스트가 있는 프롬프트 배포 플랫폼으로, 실제 프로덕션 트래픽을 프롬프트 변형 간에 분배하고 실제 출력 품질을 측정합니다 — 실시간 LLM 기능을 운영하는 팀에 이상적입니다.** Vellum은 제어 플레인이지 테스트 도구가 아닙니다.',
          'Starter $200/월; Growth $500/월; Enterprise 맞춤형. 비율로 프로덕션 트래픽을 변형 간에 라우팅합니다. 평가는 테스트 데이터셋에서 변형을 비교합니다. 팀 기능: 공유 워크스페이스, PR 스타일 프롬프트 검토, 배포 승인 워크플로우. 단점: 가장 비싼 옵션; 프리프로덕션이거나 아직 실제 사용자 트래픽이 없는 팀에는 과도함.',
          'A/B 테스트가 수동 최적화 대비 가치를 추가하는 경우에 대해서는 [수동 vs 자동화 프롬프트 최적화](/ko/prompt-engineering/manual-vs-automated-prompt-optimization)를 참조하세요.',
        ],
      },
      promptfoo: {
        id: 'promptfoo',
        title: 'Promptfoo: 무료 오픈소스 CI/CD 테스트',
        content: [
          '**Promptfoo는 여러 LLM에 대해 자동화된 프롬프트 테스트 스위트를 실행하는 오픈소스 CLI 도구입니다 — 팀이 배포 전에 프롬프트 회귀를 감지하기 위해 CI/CD 파이프라인에 통합합니다.** 무료(MIT 라이선스). YAML로 테스트 케이스를 정의하고 Git에 커밋하면 Promptfoo가 각 PR에서 실행합니다.',
          '40개 이상의 LLM 프로바이더를 지원합니다. GitHub Actions 통합 가능. 입력, 예상 출력 패턴 및 LLM 기반 커스텀 어설션을 제공합니다. 팀 친화적: Git에 테스트 구성, CI에서 실행, 계정이나 월간 청구 없음. 단점: 인터페이스 없음; 엔지니어 전용; Git 이외의 내장된 협업 기능 없음.',
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
        callouts: [
          {
            type: 'tip',
            label: 'Promptfoo + GitHub Actions',
            text: 'Promptfoo의 YAML 테스트 구성은 Git에 직접 커밋됩니다. 각 PR에서 GitHub Actions가 구성된 모든 모델에 대해 테스트 스위트를 실행하고 실패 시 병합을 차단합니다. 월 비용 없이 완전한 CI/CD 통합이 가능합니다.',
          },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum: 최적화 전 멀티 모델 비교',
        content: [
          '**특정 LLM 프로바이더를 위해 Braintrust, Vellum, PromptHub 또는 Promptfoo에 결정하기 전에 [PromptQuorum](/features)을 사용하여 프롬프트를 25개 이상의 모델에 동시에 전송하고 어느 것이 가장 잘 작동하는지 확인하세요 — 모델에 구애받지 않는 첫 번째 단계입니다.** 무료 티어 제공.',
          '앞서 소개한 네 가지 도구(한 번에 하나의 모델만 최적화)와 달리, PromptQuorum은 단일 실행으로 "이 프롬프트에 어느 모델이 가장 적합한가?"라는 질문에 답합니다. PromptQuorum으로 최적 모델을 발견한 후, 심층 평가를 위해 Braintrust로, 프로덕션 A/B 테스트를 위해 Vellum으로, CI/CD 회귀 방지를 위해 Promptfoo로 라우팅하세요.',
        ],
        items: [
          'GPT-5.5, Claude Opus 4.8, Gemini 3.1 Pro 및 Ollama와 LM Studio를 통한 로컬 모델을 포함한 25개 이상의 모델',
          '9가지 내장 프롬프트 프레임워크 — TRACE, CO-STAR, CRAFT 등',
          '합의 채점이 있는 나란히 응답 비교',
          '모델별 토큰 수 — 결정하기 전에 비용 차이 확인',
          '무료 티어 — 기술적 설정 불필요',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: '4가지 도구 직접 비교',
        content: [
          '**어떤 도구도 5가지 기준 모두에서 탁월하지 않습니다. Braintrust는 평가 심층 기능에서, Vellum은 프로덕션 트래픽 분배에서, Promptfoo는 무료 CI/CD에서, PromptHub는 단순성에서 선두를 달립니다.**',
        ],
        columns: ['도구', '주요 용도', '협업', 'CI/CD', '가격', '이상적인 대상'],
        rows: [
          {
            '도구': 'Braintrust',
            '주요 용도': '출력 평가',
            '협업': '✅ 역할 + 대시보드',
            'CI/CD': '✓ API + MCP',
            '가격': '무료 / $249 Pro',
            '이상적인 대상': '품질 중심 팀',
          },
          {
            '도구': 'PromptHub',
            '주요 용도': '버전 관리',
            '협업': '✅ 팀 워크스페이스',
            'CI/CD': '✗ 없음',
            '가격': '$50–200/월',
            '이상적인 대상': '콘텐츠 팀',
          },
          {
            '도구': 'Vellum',
            '주요 용도': '프로덕션 A/B',
            '협업': '✅ PR 검토',
            'CI/CD': '✓ 웹훅',
            '가격': '$200–500/월',
            '이상적인 대상': '실시간 기능 팀',
          },
          {
            '도구': 'Promptfoo',
            '주요 용도': 'CI/CD 테스트',
            '협업': 'Git 기반',
            'CI/CD': '✅ GitHub Actions',
            '가격': '무료',
            '이상적인 대상': 'DevOps 팀',
          },
          {
            '도구': 'PromptQuorum',
            '주요 용도': '멀티 모델 비교',
            '협업': '✓ 공유 워크스페이스',
            'CI/CD': '✗ 없음',
            '가격': '무료 + 크레딧',
            '이상적인 대상': '모델 선택',
          },
        ],
        callouts: [
          {
            type: 'insight',
            label: '두 가지 도구 스택 규칙',
            text: '대부분의 팀은 3–4가지 도구에 돈을 낭비합니다. 최적 스택은 두 가지입니다: 평가용 하나(Braintrust 또는 Promptfoo)와 배포/버전 관리용 하나(Vellum 또는 PromptHub). 총 지출: $1,000 이상이 아닌 월 $250–700.',
          },
        ],
      },
      whichTool: {
        id: 'which-tool',
        title: '팀 유형별 도구 선택',
        content: [
          '**팀의 주요 병목 지점과 기술 깊이에 맞게 도구를 선택하세요.**',
          '팀이 커스텀 채점 함수를 작성할 수 없다면 Braintrust를 사용하지 마세요 — 사용되지 않을 것입니다. 아직 실제 사용자가 없다면 Vellum을 사용하지 마세요 — 프로덕션 도달 후에 구매하세요. 출력 품질을 측정해야 한다면 PromptHub만 사용하지 마세요 — 프롬프트를 구성하지만 채점할 수 없습니다.',
          '소유권 및 검토 규칙을 포함한 전체 팀 설정 워크플로우는 [소규모 팀을 위한 프롬프트 엔지니어링 설정](/ko/prompt-engineering/prompt-engineering-setup-small-teams)을 참조하세요.',
        ],
        numberedItems: [
          {
            title: '품질 문제가 있는 엔지니어링 팀 → Braintrust',
            whyItMatters: '커스텀 채점 함수 설계; 재현 가능한 평가 실행; 프롬프트 변경의 영향 측정.',
          },
          {
            title: '버전 관리가 필요한 콘텐츠/마케팅 팀 → PromptHub',
            whyItMatters: '간단한 웹 인터페이스; 코드 불필요; 중앙 프롬프트 라이브러리.',
          },
          {
            title: '실시간 LLM 기능이 있는 제품 팀 → Vellum',
            whyItMatters: '실제 트래픽에서 A/B 테스트; 승인 워크플로우; 실제 영향 측정.',
          },
          {
            title: '회귀를 방지하는 DevOps/플랫폼 팀 → Promptfoo',
            whyItMatters: '무료; YAML 기반; GitHub와 통합; CI에서 회귀 감지.',
          },
          {
            title: '모든 팀 (첫 번째 단계) → PromptQuorum',
            whyItMatters: '한 프로바이더를 위해 최적화하기 전에 25개 이상의 모델에서 프롬프트를 비교하세요.',
          },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '흔한 실수',
        mistakes: [
          {
            mistake: '모든 경우를 커버하기 위해 네 가지 도구 모두 구매',
            problem: '총 지출이 월 $700 이상에 달하고, 네 가지 시스템을 유지하며, 어떤 도구를 무엇에 사용해야 하는지에 대한 팀 혼란이 생깁니다.',
            fix: '두 가지를 선택하세요: 평가용 하나(Braintrust 또는 Promptfoo)와 배포용 하나(Vellum 또는 PromptHub). 무료 첫 번째 단계로 PromptQuorum을 추가하세요.',
          },
          {
            mistake: '먼저 무료 티어를 평가하지 않음',
            problem: 'Braintrust(1M 추적, 10K 점수 무료)와 Promptfoo(완전 무료) 모두 결제 전 실제 평가를 실행하기에 충분한 용량을 제공합니다. 무료 티어를 건너뛰는 팀은 측정했어야 할 것을 배우는 데 첫 달을 낭비합니다.',
            fix: 'Promptfoo(무료 CLI) 또는 Braintrust 무료 티어로 시작하세요. 평가 데이터셋을 구축하고 품질 메트릭을 정의하세요. 그런 다음에만 확립된 기준선을 바탕으로 유료 도구를 평가하세요.',
          },
          {
            mistake: '워크플로우 적합성 대신 브랜드 평판으로 도구 선택',
            problem: 'Braintrust Pro를 구매하지만 팀이 기술적이지 않아 채점 함수를 작성할 수 없거나, 실제 병목 지점이 품질 측정인데 PromptHub를 구매하는 경우.',
            fix: '도구를 평가하기 전에 먼저 주요 병목 지점(평가, 버전 관리, A/B 테스트, 회귀 방지)을 파악하세요.',
          },
          {
            mistake: '평가 데이터셋을 구축하지 않고 도구 채택',
            problem: 'Braintrust 또는 Vellum에 등록하지만 채점할 레이블된 입력/출력 쌍이 없습니다. 도구가 사용되지 않고 ROI를 보지 못합니다.',
            fix: '유료 플랫폼에 결제하기 전에 20–50개의 레이블된 입력/출력 예시 테스트 세트를 구축하세요. Braintrust 무료 티어 또는 Promptfoo(무료)를 사용하여 먼저 메트릭을 검증하세요.',
          },
          {
            mistake: '품질 메트릭 없이 Vellum 사용',
            problem: '프로덕션 트래픽에서 두 프롬프트를 A/B 테스트하지만 "좋은 출력"을 정의하지 않았습니다. 판매 변형이 사용자에게 라우팅되고 아무도 이유를 설명할 수 없습니다.',
            fix: 'A/B 테스트를 실행하기 전에 3–5가지 품질 기준을 정의하고 어설션(Promptfoo에서) 또는 커스텀 채점기(Braintrust에서)로 구현하세요.',
          },
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '4가지 도구 중 선택 방법',
        numberedItems: [
          '주요 병목 지점 파악: 출력 품질, 비용, 지연시간 또는 팀 속도입니까?',
          '기술 깊이 평가: 비기술 팀 → PromptHub; 혼합 → Braintrust + Vellum; 고도 기술 → Promptfoo.',
          '유료 도구를 평가하기 전에 레이블된 평가 데이터셋(20–50개 입력/출력 쌍)을 구축하세요.',
          '기준선 메트릭을 설정하기 위해 무료 도구(Promptfoo 또는 PromptQuorum)로 시작하세요.',
          'SaaS 플랫폼에 결정하기 전에 실제 팀 프롬프트로 2주 시험을 실행하세요.',
          '두 가지 도구를 계획하세요: 평가용 하나와 배포/버전 관리용 하나.',
        ],
        callouts: [
          {
            type: 'tip',
            label: '프로 팁: 먼저 테스트 데이터셋을 구축하세요',
            text: '유료 도구를 평가하기 전에 20–50개의 레이블된 입력/출력 쌍 테스트 세트를 먼저 구축하세요. 기준선 데이터셋 없이는 도구가 실제로 프롬프트를 개선하는지 측정할 수 없습니다 — 데이터 없이 대시보드 비용만 지불하는 것입니다. Braintrust 무료 티어 또는 Promptfoo(무료)를 사용하여 먼저 메트릭을 검증하세요.',
          },
          {
            type: 'tip',
            label: '먼저 무료, 그 다음 유료',
            text: '기준선을 설정하기 위해 Promptfoo(무료) + PromptQuorum(무료 티어)으로 시작하세요. 20개 이상의 레이블된 테스트 케이스와 정의된 품질 메트릭이 있을 때만 Braintrust Pro 또는 Vellum을 추가하세요. 기준선 없는 유료 도구 = 낭비된 예산.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Braintrust와 PromptHub의 주요 차이점은 무엇입니까?',
            a: 'Braintrust는 평가 플랫폼입니다: API 호출을 기록하고, 커스텀 채점 함수를 정의하며, 출력 품질을 측정하기 위해 A/B 실험을 실행합니다. PromptHub는 버전 관리 시스템입니다: 라이브러리에 프롬프트를 저장하고, 버전에 태그를 달며, 팀과 공유합니다. 병목 지점이 품질 측정이라면 Braintrust를 사용하고, 병목 지점이 프롬프트 구성이라면 PromptHub를 사용하세요.',
          },
          {
            q: 'Promptfoo는 정말 무료입니까?',
            a: '네. Promptfoo는 오픈소스(MIT 라이선스)이며 유료 티어가 없습니다. 자체 인프라 또는 GitHub Actions에서 CLI 도구로 실행합니다. 월간 요금, API 호출 제한 또는 프리미엄 제한이 없습니다.',
          },
          {
            q: 'Braintrust와 Vellum 중 어느 것을 선택해야 합니까?',
            a: '주요 목표가 커스텀 메트릭으로 출력 품질을 측정하고 개선하는 것이라면 Braintrust를 선택하세요. 주요 목표가 실제 프로덕션 트래픽에서 A/B 테스트라면 Vellum을 선택하세요. Braintrust는 프리프로덕션 단계에서 더 잘 작동하고, Vellum은 실제 사용자가 있을 때 더 잘 작동합니다.',
          },
          {
            q: 'Vellum은 Braintrust보다 얼마나 더 비쌉니까?',
            a: 'Braintrust Pro는 $249/월(1M spans + 10K scores 무료 티어도 있음)입니다. Vellum Starter는 $200/월, Growth는 $500/월입니다. Pro 수준에서 Braintrust는 Vellum Starter보다 약간 비싸지만 상당히 더 많은 평가 용량을 포함합니다. 모두 무료 또는 저비용 진입점이 있습니다. Promptfoo는 무료이며, PromptHub는 $50–200/월입니다.',
          },
          {
            q: 'Promptfoo를 GitHub Actions와 어떻게 통합합니까?',
            a: 'Promptfoo는 GitHub Actions 템플릿을 제공합니다. YAML로 테스트 케이스를 정의하고, 구성을 Git에 커밋하고, 워크플로우 파일에서 공식 promptfoo-github-action을 사용하세요. 각 PR에서 Promptfoo는 구성된 모든 모델에 대해 테스트를 실행하고 통과/실패 상태를 보고합니다.',
          },
          {
            q: 'PromptHub가 Braintrust를 대체할 수 있습니까?',
            a: '아니요. PromptHub는 프롬프트를 저장하고 버전 관리합니다. Braintrust는 프롬프트를 평가하고 채점합니다. 유일한 필요가 프롬프트 구성이라면 PromptHub만 사용할 수 있습니다; 출력 품질을 측정하거나 실험을 실행해야 한다면 PromptHub만으로는 사용할 수 없습니다.',
          },
          {
            q: 'Vellum은 프롬프트 관리 플랫폼과 같습니까?',
            a: '아니요. Vellum은 배포 및 A/B 테스트 플랫폼입니다. 기본적인 버전 관리를 포함하지만 주요 강점은 프롬프트 변형 간에 프로덕션 트래픽을 분배하고 실제 영향을 측정하는 것입니다. 진정한 프롬프트 관리 도구(PromptHub)는 프롬프트를 테스트하는 것이 아니라 구성하고 공유하는 데 집중합니다.',
          },
          {
            q: '2026년에 이 4가지 도구 외에 다른 대안이 있습니까?',
            a: '네. 프롬프트 평가 시장은 2025–2026년에 크게 확장되었습니다. Confident AI는 seat당 $19.99–49.99/월에 50개 이상의 내장 평가 메트릭을 제공하며 Braintrust보다 낮은 추적 비용($3/GB 대비 $1/GB)을 제공합니다. Galileo AI는 Luna-2 평가 모델을 통해 런타임 가드레일을 제공합니다($100+/월). Arize Phoenix는 무료 오픈소스 LLM 관찰성 플랫폼입니다. 대부분의 팀에게 이 비교의 네 가지 도구와 Confident AI가 모든 실용적인 요구를 충족합니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[GPT, Claude, Gemini 중 선택: 올바른 모델을 고르는 방법](/ko/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model) — 올바른 평가 도구를 선택하기 전에 올바른 모델을 선택하세요',
          '[팀을 위한 최고의 프롬프트 최적화 도구: 2026년 순위](/ko/prompt-engineering/best-prompt-optimization-tools-for-teams) — Helicone 및 DSPy를 포함한 7가지 도구 비교',
          '[체계적으로 프롬프트 품질을 평가하는 방법](/ko/prompt-engineering/how-to-evaluate-prompt-quality) — 출력 측정을 위한 프레임워크',
          '[프롬프트 체이닝](/ko/prompt-engineering/prompt-chaining) — 체계적인 평가로 가장 많은 혜택을 받는 멀티 스텝 워크플로우',
          '[수동 vs 자동화 프롬프트 최적화](/ko/prompt-engineering/manual-vs-automated-prompt-optimization) — 수동 조정 대비 자동화 시기',
          '[프롬프트 평가 메트릭: 정밀도, 관련성, 지연시간](/ko/prompt-engineering/prompt-evaluation-metrics) — LLM을 위한 특정 품질 메트릭',
          '[Qwen vs Llama vs Mistral](/ko/local-llms/qwen-vs-llama-vs-mistral) — Promptfoo는 로컬 모델 패밀리의 직접 비교에서 탁월합니다',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Braintrust — AI 평가 플랫폼](https://braintrust.dev) — 공식 문서; Loop 에이전트, MCP 통합, SOC 2 인증 및 $249/월 Pro 플랜 가격 주장의 기초(2026년 3월 개편)',
          '[PromptHub — 프롬프트 버전 관리](https://prompthub.ai) — 제품 홈페이지; 버전 관리, 웹 인터페이스 및 $50–200/월 가격 주장의 기초',
          '[Vellum — LLM 배포 및 A/B 테스트](https://www.vellum.ai) — 제품 개요 및 가격 페이지; 트래픽 분배, 승인 워크플로우 및 $200–500/월 가격 주장의 기초',
          '[Promptfoo — 오픈소스 프롬프트 테스트](https://www.promptfoo.dev) — GitHub 저장소 및 문서; MIT 라이선스, YAML 구성 및 GitHub Actions 통합 주장의 기초',
          '[PromptQuorum — 멀티 모델 디스패치](https://promptquorum.com) — 멀티 모델 비교 도구; 25개 이상의 모델 디스패치 및 멀티 모델 비교 주장의 기초',
          '[Confident AI](https://confident.ai) — seat당 $19.99–49.99/월에 50개 이상의 내장 메트릭을 갖춘 신흥 평가 플랫폼',
          '[Galileo AI](https://galileo.ai) — LLM 애플리케이션을 위한 Luna-2 평가 모델 및 런타임 가드레일',
          '[Arize Phoenix](https://docs.arize.com/phoenix) — 추적 및 평가를 위한 오픈소스 LLM 관찰성 플랫폼',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Braintrust vs PromptHub vs Vellum vs Promptfoo (2026)',
      description: 'Braintrust ($249/월)는 프롬프트를 평가합니다. Vellum ($200–500/월)은 프로덕션에서 A/B 테스트를 수행합니다. Promptfoo CI/CD는 무료입니다. PromptHub ($50–200/월)는 버전 관리합니다. 대부분의 팀은 정확히 2개가 필요합니다.',
      datePublished: '2026-04-10',
      dateModified: '2026-05-01',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      url: 'https://www.promptquorum.com/ko/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo',
      inLanguage: 'ko',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: '프롬프트 관리' },
        { '@type': 'Thing', name: 'LLM 평가' },
        { '@type': 'Thing', name: '프롬프트 버전 관리' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptHub' },
        { '@type': 'SoftwareApplication', name: 'Vellum' },
        { '@type': 'SoftwareApplication', name: 'Promptfoo' },
        { '@type': 'SoftwareApplication', name: 'PromptQuorum' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      inLanguage: 'ko',
      name: 'Braintrust vs PromptHub vs Vellum vs Promptfoo: 도구 비교',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Braintrust', description: '협업 로깅, 자율 반복을 위한 Loop 에이전트, MCP-IDE 통합이 있는 AI 평가 플랫폼. 무료 티어 제공(1M Spans, 10K Scores); Pro $249/월. 출력 품질을 측정하는 팀에 이상적.' },
      ],
    },
  },
};
