// Article: prompt-engineering-setup-small-teams
// Created: 2026-04-29

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-29',
    theme: 'Workflows',
    title: 'Prompt Engineering Setup for Small Teams: Tools, Workflow & Governance',
    seoTitle: 'Prompt Engineering for Small Teams: Setup Guide (2026)',
    metaDescription: 'Set up prompt engineering for a team of 2–15: shared library, versioning, multi-model testing, and ownership rules. Step-by-step guide. April 2026.',
    ogDescription: 'Most small teams manage prompts in Slack threads and scattered docs. A shared library, Git versioning, and a 20-case test harness takes one week to set up. Here is how.',
    twitterDescription: 'Small team prompt setup in 5 days: shared library, versioning, multi-model tests, clear ownership. No enterprise budget needed.',
    intro: '**Small teams that manage prompts in Slack threads, personal notebooks, and copy-paste chains face the same three problems: duplicated work, undocumented regressions, and no way to compare which model performs best on their tasks.** A structured prompt engineering setup solves all three with a shared library, versioning, and a test harness. This guide shows you how to build it in one week.',
    leadAnswerBlock: '**A prompt engineering setup for small teams needs four things: a shared prompt library, version control, a test harness, and clear ownership rules.** Teams of 2–15 can be fully operational in one week using free tools and a multi-model testing platform.',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Small development teams (2–15 people) building products with LLM APIs',
    primaryTerm: 'prompt engineering setup for small teams',
    aboutTopics: ['Prompt Library Management', 'Team Prompt Workflow', 'Multi-Model Prompt Testing'],
    quickFacts: [
      'A 50-case test run across GPT-4o and Claude 4.6 Sonnet costs under $2 at April 2026 API rates ($5/1M input tokens for GPT-4o; $3/1M for Claude 4.6 Sonnet)',
      'Git handles prompt version history with zero additional tooling — a flat YAML or JSON file in a shared repo is sufficient for teams under 15 people',
      'GPT-4o and Claude 4.6 Sonnet produce meaningfully different outputs on creative, summarisation, and ambiguous instruction tasks — multi-model testing is required to detect divergence before it reaches users',
      'Teams of 2–5 can implement the full setup in this guide using only free tools: Git, VS Code, and a shared API key',
    ],
    toc: [
      { label: 'Key Takeaways',                                       anchor: '#key-takeaways' },
      { label: 'What Does a Prompt Engineering Setup Include?',       anchor: '#what-is-prompt-setup' },
      { label: 'Which Setup Level Matches Your Team Size?',           anchor: '#team-size' },
      { label: 'Which Tools Does a Small Team Need?',                 anchor: '#tool-stack' },
      { label: 'How Do You Build a Shared Prompt Library?',          anchor: '#shared-library' },
      { label: 'How Should Small Teams Version and Test Prompts?',   anchor: '#versioning-testing' },
      { label: 'How Do Small Teams Choose AI Models?',               anchor: '#model-selection' },
      { label: 'What Ownership Rules Does a Small Team Need?',       anchor: '#governance' },
      { label: 'How To Set Up Prompt Engineering in One Week',       anchor: '#how-to-start' },
      { label: 'What Are the Most Common Mistakes?',                 anchor: '#common-mistakes' },
      { label: 'Frequently Asked Questions',                         anchor: '#faq' },
      { label: 'Related Reading',                                    anchor: '#related-reading' },
      { label: 'Sources',                                            anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Engineering Setup for Small Teams: Tools, Workflow & Governance',
      description: 'Set up prompt engineering for a team of 2–15: shared library, versioning, multi-model testing, and ownership rules. Step-by-step guide. April 2026.',
      author:    { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-29',
      dateModified:  '2026-04-29',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-engineering-setup-small-teams',
      inLanguage:       'en',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt Library Management' },
        { '@type': 'Thing', name: 'Team Prompt Workflow' },
        { '@type': 'Thing', name: 'Multi-Model Prompt Testing' },
      ],
      audience:  { '@type': 'Audience', audienceType: 'Small development teams building products with LLM APIs' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How To Set Up Prompt Engineering for a Small Team in One Week',
      inLanguage: 'en',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Audit and assign prompt ownership',
          text: 'List every prompt your team uses. For each, record where it lives, who wrote it, and which model it runs on. Assign one named owner per prompt. This takes 1–2 hours and exposes prompt sprawl immediately.',
        },
        {
          '@type': 'HowToStep',
          name: 'Create a shared prompt repository',
          text: 'Create a /prompts folder in your existing code repository or a new dedicated Git repo. Add a README.md with the required metadata template: name, version, owner, model.',
        },
        {
          '@type': 'HowToStep',
          name: 'Move your 3 most critical prompts into YAML files',
          text: 'Write your three most-used production prompts as YAML files with the full metadata template. Commit to the shared repo with a descriptive message. These three files are your library foundation.',
        },
        {
          '@type': 'HowToStep',
          name: 'Build a 20-case test set for your most important prompt',
          text: 'Create 20 test inputs for your most critical prompt: 10 happy-path inputs, 5 edge cases (unusual formatting, long inputs, missing required fields), and 5 adversarial inputs. Define a binary pass/fail criterion for each case.',
        },
        {
          '@type': 'HowToStep',
          name: 'Run your test set across at least 2 models',
          text: 'Run the 20-case test set against both GPT-4o and Claude 4.6 Sonnet. Record the pass rate for each model. This baseline is the key metric — every future prompt change must match or beat it.',
        },
        {
          '@type': 'HowToStep',
          name: 'Extend the library and add a review process',
          text: 'Move your next 5 critical prompts to YAML files. If your team is 5 or more people, add a pull request review step before merging changes to production prompts. Run the full test set in CI on every merge to main.',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do small teams need a dedicated prompt engineer?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. Most small teams assign prompt ownership to whoever builds the feature that uses the prompt — usually a developer or product manager. A dedicated prompt engineer is typically only worth hiring when a team has more than 20 production prompts and prompt quality is a direct revenue driver.' },
        },
        {
          '@type': 'Question',
          name: 'What is the minimum viable prompt engineering setup for a small team?',
          acceptedAnswer: { '@type': 'Answer', text: 'A /prompts folder in a shared Git repository with YAML files that include four fields: name, version, owner, and model. Everything else — test sets, observability, review processes — is added progressively as the prompt surface area grows.' },
        },
        {
          '@type': 'Question',
          name: 'Should a small team use a prompt management platform or just Git?',
          acceptedAnswer: { '@type': 'Answer', text: 'For teams under 15 people with fewer than 50 production prompts, Git is sufficient. Prompt management platforms such as Braintrust, PromptHub, and Vellum add value when you need UI-based editing for non-technical stakeholders, automated evaluation runs in CI, or multi-environment promotion from dev to staging to production.' },
        },
        {
          '@type': 'Question',
          name: 'How do we prevent prompts from breaking when models update?',
          acceptedAnswer: { '@type': 'Answer', text: 'Run your test set when you receive a model update notification from OpenAI or Anthropic. A 20-case test set takes under 60 seconds to run against both GPT-4o and Claude 4.6 Sonnet with PromptQuorum or a simple API script. Set a pass rate threshold — if the score drops below your baseline, investigate before deploying.' },
        },
        {
          '@type': 'Question',
          name: 'Which AI model should a small team standardize on?',
          acceptedAnswer: { '@type': 'Answer', text: 'Do not standardize on one model. Run your most critical prompts on both GPT-4o and Claude 4.6 Sonnet and choose per task type. GPT-4o is more reliable for structured output such as JSON and classification. Claude 4.6 Sonnet handles nuanced multi-constraint instructions with fewer literal errors. Use Claude 4.5 Haiku or GPT-4o mini for cost-sensitive high-volume tasks.' },
        },
        {
          '@type': 'Question',
          name: 'How many prompts do we need before a shared library is worth building?',
          acceptedAnswer: { '@type': 'Answer', text: 'Five or more. If your team has fewer than five production prompts, a shared document is sufficient. At five or more, the coordination cost of scattered storage exceeds the one-hour setup cost of a YAML library in Git.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good test set size for a production prompt?',
          acceptedAnswer: { '@type': 'Answer', text: '20 cases is the minimum: 10 happy-path inputs, 5 edge cases (unusual formatting, long inputs, missing required fields), and 5 adversarial inputs. Beyond 50 cases, marginal coverage gains diminish for most production prompts unless you are dealing with high-stakes outputs in medical, legal, or financial applications.' },
        },
        {
          '@type': 'Question',
          name: 'How do we handle prompt engineering for non-technical team members?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use a shared Notion or Google Doc for non-technical stakeholders to draft prompt content, with a developer responsible for structuring it as a YAML file and running tests. PromptQuorum provides a no-code interface for running and comparing prompts without direct API access, making it usable by product managers and designers.' },
        },
      ],
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Key Takeaways',
        items: [
          'Small teams need 4 components: a shared prompt library, Git version control, a 20-case test set, and one designated owner per prompt',
          'Teams of 2–4 people: a flat YAML file in Git is sufficient — no formal review step needed',
          'Teams of 5–15 people: add a pull request review step before merging changes to prompts used in production',
          'Run every new or changed prompt against at least GPT-4o and Claude 4.6 Sonnet before deploying — models produce meaningfully different outputs on ambiguous and creative tasks',
          'The minimum viable test set is 20 cases: 10 happy path, 5 edge cases, 5 adversarial inputs',
          'Designate one named owner per prompt — without clear ownership, regressions go unfixed because everyone assumes someone else will handle it',
          'PromptQuorum dispatches one prompt to multiple models simultaneously and shows pass rates side-by-side, eliminating the need to write per-model API comparison code',
        ],
      },
      whatIs: {
        id: 'what-is-prompt-setup',
        title: 'What Does a Prompt Engineering Setup for Small Teams Include?',
        content: [
          '**A prompt engineering setup for small teams is the combination of four systems: a shared prompt library, a version control workflow, a test harness, and ownership rules.** Together, these four prevent the most common failure mode — multiple people editing the same prompts without coordination, leading to silent regressions.',
          'Most small teams skip the setup entirely until something breaks in production. By then, the damage is done: prompts that worked last week fail silently, nobody knows who changed what, and debugging requires reconstructing history from memory.',
        ],
        columns: ['Component', 'What it prevents', 'Minimum viable form'],
        rows: [
          { 'Component': 'Shared prompt library', 'What it prevents': 'Duplicate prompts, "whose version is correct?"', 'Minimum viable form': 'YAML files in a Git repo' },
          { 'Component': 'Version control', 'What it prevents': 'Silent regressions when prompts change', 'Minimum viable form': 'Git commits with a one-line change note' },
          { 'Component': 'Test harness', 'What it prevents': 'Deploying broken prompts undetected', 'Minimum viable form': '20-case test set with binary pass/fail scoring' },
          { 'Component': 'Ownership rules', 'What it prevents': 'Prompts updated without review', 'Minimum viable form': 'One named owner field per prompt YAML file' },
        ],
        tableFormat: true,
        snippets: [
          { type: 'in-one-sentence', text: 'A prompt engineering setup for small teams is the shared storage, version history, test coverage, and ownership model that lets multiple people work on prompts without breaking each other\'s work.' },
        ],
        callouts: [
          { type: 'key-point', label: 'Solo developers', text: 'If you work alone, you only need a prompt library — skip the versioning and governance sections. This guide is for teams of 2+ where coordination becomes the constraint.' },
        ],
      },
      teamSize: {
        id: 'team-size',
        title: 'Which Setup Level Matches Your Team Size?',
        content: '**The right level of process depends directly on team size — too little and prompts break silently, too much and your team spends more time on process than building.** Match your setup to your headcount and adjust as the team grows.',
        columns: ['Team size', 'Recommended setup', 'Skip for now'],
        rows: [
          { 'Team size': '1–2 people', 'Recommended setup': 'Shared YAML in Git, one owner per prompt, no review step', 'Skip for now': 'Test harness (add when you deploy to users)' },
          { 'Team size': '3–5 people', 'Recommended setup': 'Library + Git + 20-case test set for top prompts', 'Skip for now': 'Formal PR reviews (Slack approval is enough)' },
          { 'Team size': '6–10 people', 'Recommended setup': 'Full setup: library + versioning + CI test run on merge', 'Skip for now': 'External prompt management tool (Git is enough at this size)' },
          { 'Team size': '11–15 people', 'Recommended setup': 'Full setup + PR review policy + one prompt owner per product area', 'Skip for now': 'Custom tooling (use PromptQuorum instead)' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'warning', label: 'Over-engineering risk', text: 'A 2-person team that adds formal PR reviews, change logs, and CI test runs will spend more time maintaining the system than building. Start with Git + YAML. Add process only when team size or prompt failures demand it.' },
        ],
      },
      toolStack: {
        id: 'tool-stack',
        title: 'Which Tools Does a Small Team Need for Prompt Engineering?',
        content: [
          '**Most small teams need only three tools: a code editor for writing prompts, Git for version control, and a multi-model testing platform for comparing outputs.** Everything else is optional until a specific constraint makes it necessary.',
          'The table below lists the tools most commonly used by teams of 2–15 people. Start with the first three and add others only when you hit their specific limitations.',
        ],
        columns: ['Tool', 'Purpose', 'Cost', 'Best for'],
        rows: [
          { 'Tool': 'Git + GitHub/GitLab', 'Purpose': 'Version control for prompts and change history', 'Cost': 'Free', 'Best for': 'All team sizes' },
          { 'Tool': 'VS Code or Cursor', 'Purpose': 'Writing, editing, and previewing prompt YAML files', 'Cost': 'Free', 'Best for': 'All team sizes' },
          { 'Tool': 'PromptQuorum', 'Purpose': 'Dispatch one prompt to GPT-4o, Claude, and Gemini simultaneously; compare pass rates side-by-side', 'Cost': 'Free tier available', 'Best for': 'Teams testing prompts across models' },
          { 'Tool': 'Langfuse or Phoenix', 'Purpose': 'Production prompt monitoring and observability', 'Cost': 'Free tier available', 'Best for': 'Teams with deployed prompts serving real users' },
          { 'Tool': 'Notion or Linear', 'Purpose': 'Lightweight prompt change tracking for non-technical stakeholders', 'Cost': 'Free tier available', 'Best for': 'Teams where non-developers also manage prompts' },
        ],
        tableFormat: true,
        items: [
          'Use Git if your team can use a terminal or the GitHub/GitLab web UI — no additional tooling is needed',
          'Use PromptQuorum if you compare prompts across models — it removes the need to write per-model API comparison code',
          'Add Langfuse or Phoenix only after you have prompts in production serving real users, not before',
          'Use Notion as a secondary interface only for non-technical team members who cannot use YAML files — keep the canonical version in Git',
        ],
        callouts: [
          { type: 'pro-tip', label: 'Fastest start', text: 'The fastest path to a functional setup: Git repo + VS Code + PromptQuorum. All three are free and can be installed in under 30 minutes. Evaluate more complex tooling once you have 20+ production prompts and understand your actual bottlenecks.' },
        ],
      },
      sharedLibrary: {
        id: 'shared-library',
        title: 'How Do You Build a Shared Prompt Library for a Small Team?',
        content: [
          '**A shared prompt library is a folder of YAML files in a Git repository, where each file represents one prompt with its metadata, template string, and test set path.** This format is readable by both developers and non-technical teammates, requires no additional tooling, and provides full version history for free.',
          'The minimum viable prompt record needs six fields: `name` (unique identifier), `version` (semantic, e.g. `1.2.0`), `owner` (GitHub username or email), `model` (target model), `template` (the prompt string with `{{variable}}` placeholders), and `last_tested` (ISO date). Add a `test_set_path` field once you have a test set for the prompt.',
        ],
        promptExamples: [
          {
            bad: 'Stored in Slack: "Hey, use this: \'Summarise the following text for a product manager: {{text}}\' — it works well with GPT-4o"',
            good: 'name: summarise-for-pm\nversion: 1.2.0\nowner: hans.kuepper@company.com\nmodel: gpt-4o\ntemplate: |\n  Summarise the following text for a product manager in 3–5 bullet points.\n  Focus on decisions required, not background context.\n  Text: {{text}}\nlast_tested: 2026-04-29\ntest_set_path: tests/summarise-for-pm.json',
            badLabel: 'Scattered (Slack message)',
            goodLabel: 'Library entry (prompts/summarise-for-pm.yaml)',
          },
        ],
        callouts: [
          { type: 'pro-tip', label: 'Start with 3 prompts', text: 'Move your 3 most-used prompts to YAML files today. Completeness comes later — covering your critical prompts first is what matters. See the full library setup guide for scaling beyond 20 prompts.' },
        ],
      },
      versioningTesting: {
        id: 'versioning-testing',
        title: 'How Should a Small Team Version and Test Prompts?',
        content: [
          '**Version prompts with semantic version numbers in the YAML file and Git commits for history; test with a 20-case test set scored binary pass/fail before every deploy.** These two practices together catch the majority of prompt regressions before they reach users.',
          'Semantic versioning (`1.0.0 → 1.1.0 → 2.0.0`) makes the impact of changes immediately readable: a minor bump means a wording tweak; a major bump means the output format or task intent changed. Record the reason in the Git commit message alongside the file change.',
          'The minimum viable test set is 20 cases. For each case, define the input and a single binary criterion — "pass" means the output satisfies the criterion, "fail" means it does not. Track pass rate as your prompt quality metric over time.',
        ],
        callouts: [
          { type: 'key-point', label: 'Minimum test set size', text: '20 cases is the floor — fewer misses too many edge cases. Beyond 50 cases, marginal coverage gains diminish for most small-team production prompts. Start at 20 and expand only when you identify specific failure categories you need to cover.' },
          { type: 'pro-tip', label: 'Multi-model baseline', text: 'Run your test set against both GPT-4o and Claude 4.6 Sonnet before every deploy. Models update without warning — a version bump can silently change pass rates on your specific tasks. See How To Test Prompts Across Models for the full comparison workflow.' },
        ],
      },
      modelSelection: {
        id: 'model-selection',
        title: 'How Do Small Teams Choose Which AI Models to Use for Their Prompts?',
        content: [
          '**Start with GPT-4o and Claude 4.6 Sonnet for most tasks — run both and compare pass rates on your specific use case before committing to one model.** The right model depends on task type, not general leaderboard rankings.',
          'GPT-4o (OpenAI) and Claude 4.6 Sonnet (Anthropic) are the two most widely used frontier models for production prompt engineering as of April 2026. For documents exceeding 100k tokens, add Gemini 2.5 Pro. For cost-sensitive high-volume tasks, use Claude 4.5 Haiku or GPT-4o mini.',
        ],
        columns: ['Task type', 'Recommended model', 'Why'],
        rows: [
          { 'Task type': 'Structured output (JSON, classification)', 'Recommended model': 'GPT-4o', 'Why': 'Reliable JSON mode, consistent instruction-following on constrained output formats' },
          { 'Task type': 'Long-form writing, nuanced instructions', 'Recommended model': 'Claude 4.6 Sonnet', 'Why': 'Handles multi-constraint instructions with fewer literal interpretation errors' },
          { 'Task type': 'Code generation and review', 'Recommended model': 'GPT-4o or Claude 4.6 Sonnet', 'Why': 'Both perform well — run both and compare on your specific codebase and language' },
          { 'Task type': 'Documents over 100k tokens', 'Recommended model': 'Gemini 2.5 Pro', 'Why': '1M-token context window; GPT-4o and Claude 4.6 Sonnet both cap at 200k tokens' },
          { 'Task type': 'High-volume cost-sensitive tasks', 'Recommended model': 'Claude 4.5 Haiku or GPT-4o mini', 'Why': 'Both are 10–20× cheaper than flagship models with acceptable quality for many production tasks' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'PromptQuorum for model comparison', text: 'PromptQuorum dispatches one prompt to all configured models simultaneously and returns all responses in one view with pass rate tracking — the fastest way for a small team to determine which model performs best on a specific task without writing per-model API comparison code.' },
        ],
      },
      governance: {
        id: 'governance',
        title: 'What Ownership and Review Rules Does a Small Team Need for Prompts?',
        content: [
          '**For teams under 5 people: one named owner per prompt file, changes noted in Git commit messages, no formal review step required. For teams of 5–15: add a pull request review before merging any change to a prompt used in production.** These two tiers cover the governance needs of most small teams without adding unnecessary overhead.',
          'The most common governance failure in small teams is not too little process — it is "everyone owns everything." When nobody is individually accountable for a prompt, regressions stay unfixed because everyone assumes someone else will handle it.',
        ],
        items: [
          'Every prompt YAML file includes a named `owner:` field (GitHub username or email address)',
          'The owner receives a notification (GitHub/GitLab) when anyone else modifies their prompt',
          'Any change to the `template:` string must increment the version number, even minor wording changes',
          'Production prompts must pass their test set before the change is merged to main',
          'The owner is responsible for keeping the test set current when the prompt scope or success criteria change',
        ],
        callouts: [
          { type: 'warning', label: 'When NOT to add formal review', text: 'Teams of 2–3 people with direct daily communication do not need pull request reviews for prompt changes. A Slack message — "Updated summarise-for-pm to v1.3.0, reason: GPT-4o changed how it handles bulleted list formatting" — is sufficient governance at that scale.' },
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'How To Set Up Prompt Engineering for Your Team in One Week',
        content: '**The fastest path from prompt chaos to a functional team setup is six steps over five working days.** Each step has one concrete deliverable — no partial progress, no "we will finish it next sprint."',
        numberedItems: [
          '**Day 1 — Audit and assign ownership.** List every prompt your team uses. For each, record: where it lives, who wrote it, which model it runs on. Assign one named owner to each prompt. This takes 1–2 hours and immediately exposes prompt sprawl — most teams discover they have 30–50% more prompts than they thought.',
          '**Day 2 — Create a shared prompt repository.** Create a `/prompts` folder in your existing code repository, or a dedicated new Git repo. Add a `README.md` with the required metadata fields: name, version, owner, model, template, last_tested.',
          '**Day 3 — Move your 3 most critical prompts into YAML files.** Write them with the full metadata template. Commit to the shared repo with a message like `feat(prompts): migrate summarise-for-pm to library v1.0.0`. These 3 files are your library foundation.',
          '**Day 4 — Build a 20-case test set for your most important prompt.** Ten happy-path inputs, five edge cases (unusual formatting, long inputs, missing required fields), five adversarial inputs (inputs that attempt to override prompt instructions). Define a binary pass/fail criterion for each. See [How To Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality) for the scoring framework.',
          '**Day 5 — Run your test set across at least 2 models.** Use PromptQuorum or your own API calls to run the 20 cases against GPT-4o and Claude 4.6 Sonnet. Record the pass rate for each model. This baseline is the most important number your team will track — every future prompt change must match or beat it.',
          '**Week 2+ — Extend the library and add review.** Move your next 5 critical prompts to YAML files. If your team is 5 or more people, add PR reviews on the `/prompts` folder. Run the full test set in CI on every merge to main. See [Build a Prompt Library](/prompt-engineering/build-a-prompt-library) for scaling guidance beyond 20 prompts.',
        ],
        callouts: [
          { type: 'key-point', label: 'The single most important step', text: 'If you only do one thing from this guide, do Day 5: establish a multi-model baseline pass rate for your most critical prompt. That one number tells you immediately when a model update, a wording change, or a new edge case has broken something.' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'What Are the Most Common Team Prompt Engineering Mistakes?',
        content: '**Most small team prompt failures trace back to five repeatable mistakes, each preventable with the components described in this guide.**',
        mistakes: [
          {
            mistake: 'Storing prompts in Slack, email, or personal notes',
            problem: 'No version history, no shared access, no way to audit what changed when something breaks in production',
            fix: 'Move to YAML files in a shared Git repo on Day 2 of your setup. Even a single flat file with all prompts is better than a Slack thread.',
          },
          {
            mistake: 'One person owns all prompts',
            problem: 'Creates a single point of failure — that person becomes a bottleneck, and prompts go stale when they are unavailable',
            fix: 'Assign ownership per use case or product area, not by person. Distributing 2–3 owners across functional areas is the right model for most small teams.',
          },
          {
            mistake: 'Testing only against the model that produced the original prompt',
            problem: 'Misses model-specific failures and breaks silently when you switch models or when the original model updates its weights',
            fix: 'Run every production prompt against at least GPT-4o and Claude 4.6 Sonnet before deploying. Use PromptQuorum to run both simultaneously in one step.',
          },
          {
            mistake: 'Treating versioning as optional until something breaks',
            problem: 'When a regression appears, reconstructing what changed requires memory instead of a Git log — debugging takes hours instead of minutes',
            fix: 'Commit every prompt change with a semantic version bump and a one-line change note. The habit takes 30 seconds; the payoff when debugging is hours.',
          },
          {
            mistake: 'Adding enterprise-grade tooling to a team of 3',
            problem: 'Overhead exceeds benefit — teams spend more time maintaining the tool stack than building features that use prompts',
            fix: 'Start with Git + YAML. Add prompt management platforms (Braintrust, PromptHub, Vellum) only when Git\'s limitations become a real constraint — typically at 10+ people or 50+ production prompts.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do small teams need a dedicated prompt engineer?',
            a: 'No. Most small teams assign prompt ownership to whoever builds the feature that uses the prompt — usually a developer or product manager. A dedicated prompt engineer is typically only worth hiring when a team has more than 20 production prompts and prompt quality is a direct revenue driver.',
          },
          {
            q: 'What is the minimum viable prompt engineering setup for a small team?',
            a: 'A /prompts folder in a shared Git repository with YAML files that include four fields: name, version, owner, and model. Everything else — test sets, observability, review processes — is added progressively as the prompt surface area grows.',
          },
          {
            q: 'Should a small team use a prompt management platform or just Git?',
            a: 'For teams under 15 people with fewer than 50 production prompts, Git is sufficient. Prompt management platforms such as Braintrust, PromptHub, and Vellum add value when you need UI-based editing for non-technical stakeholders, automated evaluation runs in CI, or multi-environment promotion from dev to staging to production.',
          },
          {
            q: 'How do we prevent prompts from breaking when models update?',
            a: 'Run your test set when you receive a model update notification from OpenAI or Anthropic. A 20-case test set takes under 60 seconds to run against both GPT-4o and Claude 4.6 Sonnet with PromptQuorum or a simple API script. Set a pass rate threshold — if the score drops below your baseline, investigate before deploying.',
          },
          {
            q: 'Which AI model should a small team standardize on?',
            a: 'Do not standardize on one model. Run your most critical prompts on both GPT-4o and Claude 4.6 Sonnet and choose per task type. GPT-4o is more reliable for structured output such as JSON and classification. Claude 4.6 Sonnet handles nuanced multi-constraint instructions with fewer literal errors. Use Claude 4.5 Haiku or GPT-4o mini for cost-sensitive high-volume tasks.',
          },
          {
            q: 'How many prompts do we need before a shared library is worth building?',
            a: 'Five or more. If your team has fewer than five production prompts, a shared document is sufficient. At five or more, the coordination cost of scattered storage exceeds the one-hour setup cost of a YAML library in Git.',
          },
          {
            q: 'What is a good test set size for a production prompt?',
            a: '20 cases is the minimum: 10 happy-path inputs, 5 edge cases (unusual formatting, long inputs, missing required fields), and 5 adversarial inputs. Beyond 50 cases, marginal coverage gains diminish for most production prompts unless you are dealing with high-stakes outputs in medical, legal, or financial applications.',
          },
          {
            q: 'How do we handle prompt engineering for non-technical team members?',
            a: 'Use a shared Notion or Google Doc for non-technical stakeholders to draft prompt content, with a developer responsible for structuring it as a YAML file and running tests. PromptQuorum provides a no-code interface for running and comparing prompts without direct API access, making it usable by product managers and designers.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Prompt Library for Your Team](/prompt-engineering/build-a-prompt-library) — metadata structure, folder organisation, and scaling governance beyond 50 prompts',
          '[How To Evaluate Prompt Quality: Metrics, Tests & Checklist](/prompt-engineering/how-to-evaluate-prompt-quality) — 20-case test set construction, binary pass/fail scoring, and LLM-as-judge rubrics',
          '[How To Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — running the same prompt against GPT-4o, Claude 4.6 Sonnet, and Gemini 2.5 Pro to find the best performer per task',
          '[Best Prompt Management Platforms (2026)](/prompt-engineering/best-prompt-management-platforms) — when you outgrow Git: Braintrust, PromptHub, and Vellum compared for growing teams',
          '[GPT-4o vs Claude vs Gemini: Which Model?](/prompt-engineering/gpt-claude-gemini-which-model) — model selection by task type, latency, cost, and context window',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenAI API Pricing (April 2026)](https://openai.com/api/pricing) — GPT-4o and GPT-4o mini input/output token rates used for cost estimates in this article',
          '[Anthropic API Pricing (April 2026)](https://www.anthropic.com/pricing) — Claude 4.6 Sonnet and Claude 4.5 Haiku token rates',
          '[Google Gemini API Pricing (April 2026)](https://ai.google.dev/pricing) — Gemini 2.5 Pro context window and token rates',
        ],
      },
    },
  },
  de: { theme: 'Workflows', sections: {} },
  fr: { theme: 'Workflows', sections: {} },
  ja: { theme: 'Workflows', sections: {} },
  zh: { theme: 'Workflows', sections: {} },
};
