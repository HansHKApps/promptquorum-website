// Article: prompt-engineering-setup-small-teams
// Created: 2026-04-29

import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-29',
    theme: 'Workflows',
    title: 'Prompt Engineering Setup for Small Teams (2026)',
    seoTitle: 'Prompt Engineering for Small Teams: Tools & Workflow (2026)',
    metaDescription: 'Learn how to set up prompt engineering for small teams: shared YAML library, Git versioning, 20-case test set, and ownership rules. Full setup in one week.',
    ogDescription: 'Small team prompt engineering setup: shared prompt library, Git versioning, multi-model testing with PromptQuorum, and ownership rules. Operational in one week.',
    twitterDescription: 'Prompt chaos → structured setup in one week. YAML library, Git versioning, 20-case test set, and named owners. For teams of 2–15.',
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
      { label: 'What a Prompt Engineering Setup Includes',            anchor: '#what-is-prompt-setup' },
      { label: 'Setup Levels by Team Size',                           anchor: '#team-size' },
      { label: 'Tool Stack for Small Team Prompt Engineering',        anchor: '#tool-stack' },
      { label: 'Building a Shared Prompt Library',                   anchor: '#shared-library' },
      { label: 'Versioning and Testing Prompts',                     anchor: '#versioning-testing' },
      { label: 'Choosing AI Models for Your Prompts',                anchor: '#model-selection' },
      { label: 'Ownership and Review Rules',                         anchor: '#governance' },
      { label: 'One-Week Setup Plan',                                anchor: '#how-to-start' },
      { label: 'Common Prompt Engineering Mistakes',                 anchor: '#common-mistakes' },
      { label: 'Frequently Asked Questions',                         anchor: '#faq' },
      { label: 'Related Reading',                                    anchor: '#related-reading' },
      { label: 'Sources',                                            anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Engineering Setup for Small Teams (2026)',
      description: 'Learn how to set up prompt engineering for small teams: shared YAML library, Git versioning, 20-case test set, and ownership rules. Full setup in one week.',
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
      tldrCallout: {
        callouts: [
          { type: 'tldr', label: 'TL;DR', text: 'A small team prompt engineering setup needs four things: a shared YAML prompt library in Git, version control with semantic versioning, a 20-case test set with binary pass/fail scoring, and one named owner per prompt. Teams of 2–4 can skip formal review; teams of 5–15 add PR reviews. Run every production prompt against GPT-4o and Claude before deploying. Full setup takes one week.' },
        ],
      },
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
        title: 'What a Prompt Engineering Setup Includes',
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
          { type: 'in-plain-terms', text: 'Think of it like a shared Google Doc for code: instead of everyone keeping their own version of a prompt in a personal notes app, the team keeps one authoritative copy in a shared location, tracks who changed what, and tests it before using it in production.' },
        ],
        callouts: [
          { type: 'key-point', label: 'Solo developers', text: 'If you work alone, you only need a prompt library — skip the versioning and governance sections. This guide is for teams of 2+ where coordination becomes the constraint.' },
        ],
      },
      teamSize: {
        id: 'team-size',
        title: 'Setup Levels by Team Size',
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
        title: 'Tool Stack for Small Team Prompt Engineering',
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
        title: 'Building a Shared Prompt Library',
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
        title: 'Versioning and Testing Prompts',
        content: [
          '**Version prompts with semantic version numbers in the YAML file and Git commits for history; test with a 20-case test set scored binary pass/fail before every deploy.** These two practices together catch the majority of prompt regressions before they reach users.',
          'Semantic versioning (`1.0.0 → 1.1.0 → 2.0.0`) makes the impact of changes immediately readable: a minor bump means a wording tweak; a major bump means the output format or task intent changed. Record the reason in the Git commit message alongside the file change.',
          'The minimum viable test set is 20 cases. For each case, define the input and a single binary criterion — "pass" means the output satisfies the criterion, "fail" means it does not. Track pass rate as your prompt quality metric over time.',
        ],
        callouts: [
          { type: 'key-point', label: 'Minimum test set size', text: '20 cases is the floor — fewer misses too many edge cases. Beyond 50 cases, marginal coverage gains diminish for most small-team production prompts. Start at 20 and expand only when you identify specific failure categories you need to cover.' },
          { type: 'pro-tip', label: 'Multi-model baseline', text: 'Run your test set against both GPT-4o and Claude 4.6 Sonnet before every deploy. Models update without warning — a version bump can silently change pass rates on your specific tasks. See [How To Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) for the full comparison workflow.' },
        ],
      },
      modelSelection: {
        id: 'model-selection',
        title: 'Choosing AI Models for Your Prompts',
        content: [
          '**Start with GPT-4o and Claude 4.6 Sonnet for most tasks — run both and compare pass rates on your specific use case before committing to one model.** The right model depends on task type, not general leaderboard rankings.',
          'GPT-4o (OpenAI) and Claude 4.6 Sonnet (Anthropic) are the two most widely used frontier models for production prompt engineering [as of April 2026](/prompt-engineering/gpt-claude-gemini-which-model). For documents exceeding 100k tokens, add Gemini 2.5 Pro. For cost-sensitive high-volume tasks, use Claude 4.5 Haiku or GPT-4o mini.',
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
        title: 'Ownership and Review Rules',
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
        title: 'One-Week Setup Plan',
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
        title: 'Common Prompt Engineering Mistakes',
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
            fix: 'Start with Git + YAML. Add [prompt management platforms](/prompt-engineering/best-prompt-management-platforms) (Braintrust, PromptHub, Vellum) only when Git\'s limitations become a real constraint — typically at 10+ people or 50+ production prompts.',
          },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        content: '**The most common questions from small teams cover the minimum viable setup, Git vs dedicated tooling, model choice, and how to prevent silent regressions when models update.** Each answer includes a concrete threshold or action.',
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
          '[Best Prompt Engineering IDEs (2026)](/prompt-engineering/best-prompt-engineering-ides) — configuring VS Code and Cursor for YAML prompt file editing with syntax highlighting and team-shared snippets',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[OpenAI API Pricing (April 2026)](https://openai.com/api/pricing) — GPT-4o and GPT-4o mini input/output token rates used for cost estimates in this article',
          '[Anthropic API Pricing (April 2026)](https://www.anthropic.com/pricing) — Claude 4.6 Sonnet and Claude 4.5 Haiku token rates',
          '[Google Gemini API Pricing (April 2026)](https://ai.google.dev/pricing) — Gemini 2.5 Pro context window and token rates',
          '[GitHub: InnerSource Fundamentals](https://resources.github.com/innersource/fundamentals/) — Principles of shared code ownership and governance applicable to shared prompt libraries',
          '[NIST AI Risk Management Framework (AI RMF)](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Governance principles for AI systems in organisations of all sizes',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-10-29',
    theme: 'Workflows',
    title: 'Prompt-Engineering-Setup für kleine Teams (2026)',
    seoTitle: 'Prompt-Engineering-Setup für kleine Teams: Tools & Workflow (2026)',
    metaDescription: 'Prompt-Engineering für kleine Teams einrichten: YAML-Bibliothek, Git-Versionierung, 20-Testfälle und Ownership-Regeln. Komplett in einer Woche.',
    ogDescription: 'Prompt-Engineering-Setup für Teams von 2–15: Shared Library, Git-Versionierung, Multi-Modell-Tests mit PromptQuorum und klare Ownership. In einer Woche einsatzbereit.',
    twitterDescription: 'Vom Prompt-Chaos zum strukturierten Setup in einer Woche. YAML-Library, Git, 20-Testfälle, Named Owners. Für Teams von 2–15.',
    intro: '**Kleine Teams, die Prompts in Slack-Threads, persönlichen Notizen und Copy-Paste-Ketten verwalten, stehen vor denselben drei Problemen: Duplikate, undokumentierte Regressionen und keine Möglichkeit zu vergleichen, welches Modell für ihre Aufgaben die beste Leistung erbringt.** Ein strukturiertes Prompt-Engineering-Setup löst alle drei Probleme mit einer gemeinsamen Bibliothek, Versionierung und einer Test-Umgebung. Diese Anleitung zeigt Ihnen, wie Sie das Setup in einer Woche aufbauen.',
    leadAnswerBlock: '**Ein Prompt-Engineering-Setup für kleine Teams benötigt vier Komponenten: eine gemeinsame Prompt-Bibliothek, Versionskontrolle, eine Test-Umgebung und klare Ownership-Regeln.** Teams von 2–15 Personen können innerhalb einer Woche vollständig einsatzbereit sein – mit kostenlosen Tools und einer Multi-Modell-Testing-Plattform.',
    publishDate: '2026-04-29',
    dateModified: '2026-04-29',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Kleine Entwicklungsteams (2–15 Personen), die Produkte mit LLM-APIs entwickeln',
    primaryTerm: 'Prompt-Engineering-Setup für kleine Teams',
    aboutTopics: ['Prompt-Bibliotheksverwaltung', 'Team-Prompt-Workflow', 'Multi-Modell-Prompt-Testing'],
    quickFacts: [
      'Ein 50-Testfälle-Lauf über GPT-4o und Claude 4.6 Sonnet kostet bei den API-Preisen vom April 2026 unter 2 $ ($5/1M Input-Token für GPT-4o; $3/1M für Claude 4.6 Sonnet)',
      'Git verwaltet den Prompt-Versionsverlauf ohne zusätzliche Werkzeuge – eine flache YAML- oder JSON-Datei in einem gemeinsamen Repo ist für Teams unter 15 Personen ausreichend',
      'GPT-4o und Claude 4.6 Sonnet liefern bei kreativen, zusammenfassenden und mehrdeutigen Aufgaben deutlich unterschiedliche Ergebnisse – Multi-Modell-Testing ist erforderlich, um Abweichungen zu erkennen, bevor sie die Nutzer erreichen',
      'Teams von 2–5 Personen können das vollständige Setup dieser Anleitung mit nur kostenlosen Tools umsetzen: Git, VS Code und einem gemeinsamen API-Key',
    ],
    toc: [
      { label: 'Was ein Prompt-Engineering-Setup umfasst',            anchor: '#what-is-prompt-setup' },
      { label: 'Setup-Stufen nach Teamgröße',                         anchor: '#team-size' },
      { label: 'Tool-Stack für kleines Team Prompt-Engineering',      anchor: '#tool-stack' },
      { label: 'Aufbau einer gemeinsamen Prompt-Bibliothek',         anchor: '#shared-library' },
      { label: 'Versionierung und Testing von Prompts',              anchor: '#versioning-testing' },
      { label: 'Auswahl von KI-Modellen für Ihre Prompts',           anchor: '#model-selection' },
      { label: 'Ownership- und Review-Regeln',                       anchor: '#governance' },
      { label: 'Einwöchiger Setup-Plan',                             anchor: '#how-to-start' },
      { label: 'Häufige Fehler beim Prompt-Engineering',             anchor: '#common-mistakes' },
      { label: 'Im DACH-Kontext: DSGVO und BSI-Anforderungen',       anchor: '#dach-kontext' },
      { label: 'Häufig gestellte Fragen',                            anchor: '#faq' },
      { label: 'Weiterführende Literatur',                           anchor: '#related-reading' },
      { label: 'Quellen',                                            anchor: '#sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt-Engineering-Setup für kleine Teams (2026)',
      description: 'Prompt-Engineering für kleine Teams einrichten: YAML-Bibliothek, Git-Versionierung, 20-Testfälle und Ownership-Regeln. Komplett in einer Woche.',
      author:    { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-04-29',
      dateModified:  '2026-04-29',
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-engineering-setup-small-teams?lang=de',
      inLanguage:       'de',
      proficiencyLevel: 'Intermediate',
      about: [
        { '@type': 'Thing', name: 'Prompt-Bibliotheksverwaltung' },
        { '@type': 'Thing', name: 'Team-Prompt-Workflow' },
        { '@type': 'Thing', name: 'Multi-Modell-Prompt-Testing' },
      ],
      audience:  { '@type': 'Audience', audienceType: 'Kleine Entwicklungsteams, die Produkte mit LLM-APIs entwickeln' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Prompt-Engineering-Setup für ein kleines Team in einer Woche aufbauen',
      inLanguage: 'de',
      step: [
        {
          '@type': 'HowToStep',
          name: 'Prompt-Ownership auditieren und zuweisen',
          text: 'Listen Sie alle Prompts auf, die Ihr Team verwendet. Erfassen Sie für jeden Prompt: wo er gespeichert ist, wer ihn geschrieben hat und auf welchem Modell er läuft. Weisen Sie jedem Prompt einen benannten Owner zu. Das dauert 1–2 Stunden und deckt sofort Prompt-Wildwuchs auf.',
        },
        {
          '@type': 'HowToStep',
          name: 'Gemeinsames Prompt-Repository erstellen',
          text: 'Erstellen Sie einen /prompts-Ordner in Ihrem bestehenden Code-Repository oder einem neuen dedizierten Git-Repo. Fügen Sie eine README.md mit dem erforderlichen Metadaten-Template hinzu: Name, Version, Owner, Modell.',
        },
        {
          '@type': 'HowToStep',
          name: 'Ihre 3 wichtigsten Prompts in YAML-Dateien migrieren',
          text: 'Schreiben Sie Ihre drei meistgenutzten Produktions-Prompts als YAML-Dateien mit dem vollständigen Metadaten-Template. Committen Sie ins gemeinsame Repo mit einer beschreibenden Nachricht. Diese drei Dateien bilden das Fundament Ihrer Bibliothek.',
        },
        {
          '@type': 'HowToStep',
          name: 'Ein 20-Testfälle-Set für Ihren wichtigsten Prompt erstellen',
          text: 'Erstellen Sie 20 Testinputs für Ihren wichtigsten Prompt: 10 Happy-Path-Inputs, 5 Edge Cases (ungewöhnliche Formatierung, lange Inputs, fehlende Pflichtfelder) und 5 adversarielle Inputs. Definieren Sie für jeden Fall ein binäres Pass/Fail-Kriterium.',
        },
        {
          '@type': 'HowToStep',
          name: 'Testset über mindestens 2 Modelle ausführen',
          text: 'Führen Sie das 20-Testfälle-Set gegen GPT-4o und Claude 4.6 Sonnet aus. Erfassen Sie die Pass-Rate für jedes Modell. Diese Baseline ist die wichtigste Kennzahl – jede zukünftige Prompt-Änderung muss sie erreichen oder übertreffen.',
        },
        {
          '@type': 'HowToStep',
          name: 'Bibliothek erweitern und Review-Prozess einführen',
          text: 'Migrieren Sie Ihre nächsten 5 kritischen Prompts in YAML-Dateien. Wenn Ihr Team 5 oder mehr Personen hat, fügen Sie vor dem Mergen von Änderungen an Produktions-Prompts einen Pull-Request-Review-Schritt hinzu. Führen Sie das vollständige Testset im CI bei jedem Merge in main aus.',
        },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Brauchen kleine Teams einen dedizierten Prompt Engineer?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. Die meisten kleinen Teams weisen die Prompt-Ownership demjenigen zu, der das Feature entwickelt, das den Prompt verwendet – in der Regel einem Entwickler oder Product Manager. Ein dedizierter Prompt Engineer lohnt sich typischerweise erst ab mehr als 20 Produktions-Prompts und wenn die Prompt-Qualität ein direkter Umsatztreiber ist.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist das Minimum Viable Setup für Prompt-Engineering in einem kleinen Team?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ein /prompts-Ordner in einem gemeinsamen Git-Repository mit YAML-Dateien, die vier Felder enthalten: Name, Version, Owner und Modell. Alles andere – Testsets, Observability, Review-Prozesse – wird schrittweise hinzugefügt, wenn die Prompt-Fläche wächst.' },
        },
        {
          '@type': 'Question',
          name: 'Sollte ein kleines Team eine Prompt-Management-Plattform oder nur Git verwenden?',
          acceptedAnswer: { '@type': 'Answer', text: 'Für Teams unter 15 Personen mit weniger als 50 Produktions-Prompts ist Git ausreichend. Prompt-Management-Plattformen wie Braintrust, PromptHub und Vellum bieten Mehrwert, wenn Sie UI-basiertes Editieren für nicht-technische Stakeholder, automatisierte Evaluation-Läufe im CI oder Multi-Environment-Promotion von Dev über Staging bis Produktion benötigen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie verhindern wir, dass Prompts bei Modell-Updates brechen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Führen Sie Ihr Testset aus, wenn Sie eine Modell-Update-Benachrichtigung von OpenAI oder Anthropic erhalten. Ein 20-Testfälle-Set läuft in unter 60 Sekunden gegen GPT-4o und Claude 4.6 Sonnet mit PromptQuorum oder einem einfachen API-Skript. Legen Sie einen Pass-Rate-Schwellenwert fest – fällt das Ergebnis unter Ihre Baseline, untersuchen Sie dies vor dem Deployment.' },
        },
        {
          '@type': 'Question',
          name: 'Auf welches KI-Modell sollte sich ein kleines Team standardisieren?',
          acceptedAnswer: { '@type': 'Answer', text: 'Standardisieren Sie sich nicht auf ein Modell. Führen Sie Ihre wichtigsten Prompts auf GPT-4o und Claude 4.6 Sonnet aus und wählen Sie nach Aufgabentyp. GPT-4o ist zuverlässiger für strukturierte Ausgaben wie JSON und Klassifikation. Claude 4.6 Sonnet verarbeitet nuancierte Mehrfachbedingungen mit weniger wörtlichen Auslegungsfehlern. Verwenden Sie Claude 4.5 Haiku oder GPT-4o mini für kostenempfindliche Hochvolumen-Aufgaben.' },
        },
        {
          '@type': 'Question',
          name: 'Wie viele Prompts brauchen wir, bevor sich eine gemeinsame Bibliothek lohnt?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ab fünf Prompts. Bei weniger als fünf Produktions-Prompts reicht ein gemeinsames Dokument. Ab fünf übersteigt der Koordinationsaufwand bei verteilter Speicherung den einmaligen Setup-Aufwand einer YAML-Bibliothek in Git.' },
        },
        {
          '@type': 'Question',
          name: 'Wie groß sollte das Testset für einen Produktions-Prompt sein?',
          acceptedAnswer: { '@type': 'Answer', text: '20 Fälle sind das Minimum: 10 Happy-Path-Inputs, 5 Edge Cases (ungewöhnliche Formatierung, lange Inputs, fehlende Pflichtfelder) und 5 adversarielle Inputs. Über 50 Fälle hinaus nehmen die marginalen Abdeckungsgewinne für die meisten kleinen Team-Produktions-Prompts ab – es sei denn, Sie haben Hochrisiko-Ausgaben in medizinischen, rechtlichen oder finanziellen Anwendungen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie handhaben wir Prompt-Engineering für nicht-technische Teammitglieder?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nutzen Sie ein gemeinsames Notion- oder Google-Dokument für nicht-technische Stakeholder, um Prompt-Inhalte zu entwerfen. Ein Entwickler ist dann verantwortlich für die Strukturierung als YAML-Datei und das Ausführen der Tests. PromptQuorum bietet eine No-Code-Oberfläche zum Ausführen und Vergleichen von Prompts ohne direkten API-Zugang.' },
        },
        {
          '@type': 'Question',
          name: 'Müssen wir bei der Verwendung von KI-Sprachmodellen die DSGVO beachten?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Wenn Sie personenbezogene Daten an externe API-Anbieter (OpenAI, Anthropic) übermitteln, sind Sie nach DSGVO Art. 28 verpflichtet, einen Auftragsverarbeitungsvertrag (AVV) abzuschließen. OpenAI und Anthropic bieten beide standardmäßige AVV-Vereinbarungen an. Für Daten, die nicht das Unternehmen verlassen dürfen – etwa Mandantendaten bei Rechtsanwälten oder Patientendaten im Gesundheitswesen – empfehlen BSI-Grundschutz-Kataloge den Einsatz lokal betriebener Modelle (z. B. Llama 3.3 über Ollama).' },
        },
        {
          '@type': 'Question',
          name: 'Ist dieses Prompt-Engineering-Setup für den deutschen Mittelstand geeignet?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das in dieser Anleitung beschriebene Setup basiert auf Git und YAML – beide sind in DACH-Unternehmen etablierte Werkzeuge. Mittelständische Unternehmen mit bestehenden BSI-Grundschutz-Zertifizierungen können das Setup direkt integrieren: Prompt-YAML-Dateien werden wie Code behandelt und fallen unter dieselben Zugriffs- und Versionierungsrichtlinien. Für Unternehmen mit strengen Datenschutzanforderungen empfiehlt sich die Kombination mit einem lokalen Modell (Llama 3.3, Mistral) für sensible Verarbeitungsaufgaben.' },
        },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          { type: 'tldr', label: 'Kurzfassung', text: 'Ein Prompt-Engineering-Setup für kleine Teams benötigt vier Dinge: eine gemeinsame YAML-Prompt-Bibliothek in Git, Versionskontrolle mit semantischer Versionierung, ein 20-Testfälle-Set mit binärer Pass/Fail-Bewertung und einen benannten Owner pro Prompt. Teams von 2–4 können auf formale Reviews verzichten; Teams von 5–15 fügen PR-Reviews hinzu. Führen Sie jeden Produktions-Prompt vor dem Deployment gegen GPT-4o und Claude aus. Das vollständige Setup dauert eine Woche.' },
        ],
      },
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Zusammenfassung',
        items: [
          'Kleine Teams benötigen 4 Komponenten: eine gemeinsame Prompt-Bibliothek, Git-Versionskontrolle, ein 20-Testfälle-Set und einen designierten Owner pro Prompt',
          'Teams von 2–4 Personen: eine flache YAML-Datei in Git ist ausreichend – kein formaler Review-Schritt erforderlich',
          'Teams von 5–15 Personen: Pull-Request-Review vor dem Mergen von Änderungen an Prompts, die in der Produktion verwendet werden',
          'Führen Sie jeden neuen oder geänderten Prompt mindestens gegen GPT-4o und Claude 4.6 Sonnet aus, bevor Sie ihn deployen – die Modelle liefern bei mehrdeutigen und kreativen Aufgaben deutlich unterschiedliche Ergebnisse',
          'Das Minimum Viable Testset umfasst 20 Fälle: 10 Happy-Path, 5 Edge Cases, 5 adversarielle Inputs',
          'Weisen Sie jedem Prompt einen benannten Owner zu – ohne klare Verantwortlichkeit bleiben Regressionen unbehoben, weil jeder davon ausgeht, dass sich jemand anderes darum kümmert',
          'PromptQuorum sendet einen Prompt gleichzeitig an mehrere Modelle und zeigt Pass-Raten nebeneinander an – ohne eigenen API-Vergleichscode',
        ],
      },
      whatIs: {
        id: 'what-is-prompt-setup',
        title: 'Was ein Prompt-Engineering-Setup umfasst',
        content: [
          '**Ein Prompt-Engineering-Setup für kleine Teams ist die Kombination aus vier Systemen: einer gemeinsamen Prompt-Bibliothek, einem Versionskontroll-Workflow, einer Test-Umgebung und Ownership-Regeln.** Zusammen verhindern diese vier Komponenten das häufigste Versagensmuster – mehrere Personen bearbeiten dieselben Prompts ohne Koordination, was zu stillen Regressionen führt.',
          'Die meisten kleinen Teams verzichten auf das Setup, bis in der Produktion etwas schiefgeht. Zu diesem Zeitpunkt ist der Schaden bereits entstanden: Prompts, die letzte Woche noch funktionierten, schlagen still fehl, niemand weiß, wer was geändert hat, und die Fehlersuche erfordert das Rekonstruieren der Historie aus dem Gedächtnis.',
        ],
        columns: ['Komponente', 'Was sie verhindert', 'Minimale Umsetzung'],
        rows: [
          { 'Komponente': 'Gemeinsame Prompt-Bibliothek', 'Was sie verhindert': 'Doppelte Prompts, „Welche Version ist korrekt?"', 'Minimale Umsetzung': 'YAML-Dateien in einem Git-Repo' },
          { 'Komponente': 'Versionskontrolle', 'Was sie verhindert': 'Stille Regressionen bei Prompt-Änderungen', 'Minimale Umsetzung': 'Git-Commits mit einer einzeiligen Änderungsnotiz' },
          { 'Komponente': 'Test-Umgebung', 'Was sie verhindert': 'Deployment fehlerhafter Prompts unbemerkt', 'Minimale Umsetzung': '20-Testfälle-Set mit binärer Pass/Fail-Bewertung' },
          { 'Komponente': 'Ownership-Regeln', 'Was sie verhindert': 'Prompts werden ohne Review aktualisiert', 'Minimale Umsetzung': 'Ein benanntes Owner-Feld pro Prompt-YAML-Datei' },
        ],
        tableFormat: true,
        snippets: [
          { type: 'in-one-sentence', text: 'Ein Prompt-Engineering-Setup für kleine Teams ist die gemeinsame Ablage, Versionshistorie, Testabdeckung und das Ownership-Modell, das es mehreren Personen ermöglicht, an Prompts zu arbeiten, ohne die Arbeit der anderen zu beeinträchtigen.' },
          { type: 'in-plain-terms', text: 'Stellen Sie es sich wie ein gemeinsames Google Doc für Code vor: Statt dass jeder seine eigene Prompt-Version in einer persönlichen Notiz-App aufbewahrt, pflegt das Team eine maßgebliche Kopie an einem gemeinsamen Ort, verfolgt, wer was geändert hat, und testet vor dem Einsatz in der Produktion.' },
        ],
        callouts: [
          { type: 'key-point', label: 'Solo-Entwickler', text: 'Wenn Sie alleine arbeiten, benötigen Sie nur eine Prompt-Bibliothek – überspringen Sie die Abschnitte zu Versionierung und Governance. Diese Anleitung richtet sich an Teams ab 2 Personen, wo Koordination zur entscheidenden Einschränkung wird.' },
        ],
      },
      teamSize: {
        id: 'team-size',
        title: 'Setup-Stufen nach Teamgröße',
        content: '**Der richtige Prozessumfang hängt direkt von der Teamgröße ab – zu wenig und Prompts brechen unbemerkt, zu viel und Ihr Team verbringt mehr Zeit mit Prozessen als mit Entwicklung.** Passen Sie Ihr Setup an Ihre Mitarbeiterzahl an und skalieren Sie es mit dem Wachstum des Teams.',
        columns: ['Teamgröße', 'Empfohlenes Setup', 'Vorerst überspringen'],
        rows: [
          { 'Teamgröße': '1–2 Personen', 'Empfohlenes Setup': 'Gemeinsames YAML in Git, ein Owner pro Prompt, kein Review-Schritt', 'Vorerst überspringen': 'Test-Umgebung (hinzufügen, wenn Sie für Nutzer deployen)' },
          { 'Teamgröße': '3–5 Personen', 'Empfohlenes Setup': 'Bibliothek + Git + 20-Testfälle-Set für Top-Prompts', 'Vorerst überspringen': 'Formale PR-Reviews (Slack-Genehmigung reicht aus)' },
          { 'Teamgröße': '6–10 Personen', 'Empfohlenes Setup': 'Vollständiges Setup: Bibliothek + Versionierung + CI-Testlauf beim Merge', 'Vorerst überspringen': 'Externes Prompt-Management-Tool (Git reicht in dieser Größe)' },
          { 'Teamgröße': '11–15 Personen', 'Empfohlenes Setup': 'Vollständiges Setup + PR-Review-Richtlinie + ein Prompt-Owner pro Produktbereich', 'Vorerst überspringen': 'Custom-Tooling (PromptQuorum verwenden)' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'warning', label: 'Over-Engineering-Risiko', text: 'Ein 2-Personen-Team, das formale PR-Reviews, Change-Logs und CI-Testläufe einführt, wird mehr Zeit damit verbringen, das System zu warten als Funktionen zu entwickeln. Beginnen Sie mit Git + YAML. Fügen Sie Prozesse erst dann hinzu, wenn Teamgröße oder Prompt-Fehler es erfordern.' },
        ],
      },
      toolStack: {
        id: 'tool-stack',
        title: 'Tool-Stack für kleines Team Prompt-Engineering',
        content: [
          '**Die meisten kleinen Teams benötigen nur drei Tools: einen Code-Editor zum Schreiben von Prompts, Git für die Versionskontrolle und eine Multi-Modell-Testing-Plattform zum Vergleichen von Ausgaben.** Alles andere ist optional, bis eine spezifische Einschränkung es notwendig macht.',
          'Die nachstehende Tabelle listet die am häufigsten von Teams mit 2–15 Personen verwendeten Tools auf. Beginnen Sie mit den ersten drei und fügen Sie weitere nur hinzu, wenn Sie auf deren spezifische Grenzen stoßen.',
        ],
        columns: ['Tool', 'Zweck', 'Kosten', 'Geeignet für'],
        rows: [
          { 'Tool': 'Git + GitHub/GitLab', 'Zweck': 'Versionskontrolle für Prompts und Änderungshistorie', 'Kosten': 'Kostenlos', 'Geeignet für': 'Alle Teamgrößen' },
          { 'Tool': 'VS Code oder Cursor', 'Zweck': 'Schreiben, Bearbeiten und Vorschau von Prompt-YAML-Dateien', 'Kosten': 'Kostenlos', 'Geeignet für': 'Alle Teamgrößen' },
          { 'Tool': 'PromptQuorum', 'Zweck': 'Einen Prompt gleichzeitig an GPT-4o, Claude und Gemini senden; Pass-Raten nebeneinander vergleichen', 'Kosten': 'Kostenloser Tarif verfügbar', 'Geeignet für': 'Teams, die Prompts modellübergreifend testen' },
          { 'Tool': 'Langfuse oder Phoenix', 'Zweck': 'Produktions-Prompt-Monitoring und Observability', 'Kosten': 'Kostenloser Tarif verfügbar', 'Geeignet für': 'Teams mit deployten Prompts für echte Nutzer' },
          { 'Tool': 'Notion oder Linear', 'Zweck': 'Leichtgewichtiges Prompt-Change-Tracking für nicht-technische Stakeholder', 'Kosten': 'Kostenloser Tarif verfügbar', 'Geeignet für': 'Teams, in denen auch Nicht-Entwickler Prompts verwalten' },
        ],
        tableFormat: true,
        items: [
          'Verwenden Sie Git, wenn Ihr Team ein Terminal oder die GitHub/GitLab-Web-UI bedienen kann – kein zusätzliches Tooling erforderlich',
          'Verwenden Sie PromptQuorum, wenn Sie Prompts modellübergreifend vergleichen – es entfällt die Notwendigkeit, eigenen API-Vergleichscode pro Modell zu schreiben',
          'Fügen Sie Langfuse oder Phoenix erst hinzu, nachdem Sie Prompts in der Produktion für echte Nutzer haben – nicht vorher',
          'Verwenden Sie Notion nur als Sekundärschnittstelle für nicht-technische Teammitglieder, die keine YAML-Dateien verwenden können – die kanonische Version bleibt in Git',
        ],
        callouts: [
          { type: 'pro-tip', label: 'Schnellster Start', text: 'Der schnellste Weg zu einem funktionalen Setup: Git-Repo + VS Code + PromptQuorum. Alle drei sind kostenlos und in unter 30 Minuten einsatzbereit. Evaluieren Sie komplexere Tooling-Lösungen erst, wenn Sie 20+ Produktions-Prompts haben und Ihre tatsächlichen Engpässe kennen.' },
        ],
      },
      sharedLibrary: {
        id: 'shared-library',
        title: 'Aufbau einer gemeinsamen Prompt-Bibliothek',
        content: [
          '**Eine gemeinsame Prompt-Bibliothek ist ein Ordner mit YAML-Dateien in einem Git-Repository, wobei jede Datei einen Prompt mit seinen Metadaten, dem Template-String und dem Testset-Pfad repräsentiert.** Dieses Format ist sowohl für Entwickler als auch für nicht-technische Teammitglieder lesbar, erfordert keine zusätzlichen Tools und bietet kostenlose vollständige Versionshistorie.',
          'Der minimale Prompt-Eintrag benötigt sechs Felder: `name` (eindeutige ID), `version` (semantisch, z. B. `1.2.0`), `owner` (GitHub-Username oder E-Mail), `model` (Zielmodell), `template` (der Prompt-String mit `{{Variable}}`-Platzhaltern) und `last_tested` (ISO-Datum). Fügen Sie ein `test_set_path`-Feld hinzu, sobald Sie ein Testset für den Prompt haben.',
        ],
        promptExamples: [
          {
            bad: 'In Slack gespeichert: „Nutzt das hier: \'Fasse den folgenden Text für einen Product Manager zusammen: {{text}}\' – funktioniert gut mit GPT-4o"',
            good: 'name: zusammenfassung-fuer-pm\nversion: 1.2.0\nowner: hans.kuepper@unternehmen.de\nmodel: gpt-4o\ntemplate: |\n  Fasse den folgenden Text für einen Product Manager in 3–5 Stichpunkten zusammen.\n  Konzentriere dich auf erforderliche Entscheidungen, nicht auf Hintergrundinformationen.\n  Text: {{text}}\nlast_tested: 2026-04-29\ntest_set_path: tests/zusammenfassung-fuer-pm.json',
            badLabel: 'Unstrukturiert (Slack-Nachricht)',
            goodLabel: 'Bibliothekseintrag (prompts/zusammenfassung-fuer-pm.yaml)',
          },
        ],
        callouts: [
          { type: 'pro-tip', label: 'Mit 3 Prompts beginnen', text: 'Migrieren Sie noch heute Ihre 3 meistgenutzten Prompts in YAML-Dateien. Vollständigkeit kommt später – die Coverage Ihrer kritischen Prompts hat Priorität. Lesen Sie den vollständigen Bibliotheks-Setup-Guide für die Skalierung über 20 Prompts hinaus.' },
        ],
      },
      versioningTesting: {
        id: 'versioning-testing',
        title: 'Versionierung und Testing von Prompts',
        content: [
          '**Versionieren Sie Prompts mit semantischen Versionsnummern in der YAML-Datei und Git-Commits für die Historie; testen Sie mit einem 20-Testfälle-Set mit binärer Pass/Fail-Bewertung vor jedem Deployment.** Diese beiden Praktiken zusammen fangen die Mehrheit der Prompt-Regressionen ab, bevor sie die Nutzer erreichen.',
          'Semantische Versionierung (`1.0.0 → 1.1.0 → 2.0.0`) macht die Auswirkung von Änderungen sofort lesbar: ein Minor-Bump bedeutet eine Formulierungsanpassung; ein Major-Bump bedeutet, dass das Ausgabeformat oder die Aufgabenintention sich geändert hat. Erfassen Sie den Grund im Git-Commit-Message neben der Dateiänderung.',
          'Das minimale Testset umfasst 20 Fälle. Definieren Sie für jeden Fall den Input und ein einzelnes binäres Kriterium – „Pass" bedeutet, dass die Ausgabe das Kriterium erfüllt, „Fail" bedeutet, dass sie es nicht tut. Verfolgen Sie die Pass-Rate als Ihre Prompt-Qualitätskennzahl über die Zeit.',
        ],
        callouts: [
          { type: 'key-point', label: 'Minimale Testset-Größe', text: '20 Fälle sind die Untergrenze – weniger verfehlt zu viele Edge Cases. Über 50 Fälle hinaus nehmen die marginalen Abdeckungsgewinne für die meisten kleinen Team-Produktions-Prompts ab. Starten Sie mit 20 und erweitern Sie nur, wenn Sie spezifische Fehlerkategorien identifizieren, die Sie abdecken müssen.' },
          { type: 'pro-tip', label: 'Multi-Modell-Baseline', text: 'Führen Sie Ihr Testset vor jedem Deployment gegen GPT-4o und Claude 4.6 Sonnet aus. Modelle werden ohne Vorwarnung aktualisiert – ein Version-Bump kann Pass-Raten bei Ihren spezifischen Aufgaben still verändern. Lesen Sie [Prompts modellübergreifend testen](/prompt-engineering/how-to-test-prompts-across-models?lang=de) für den vollständigen Vergleichs-Workflow.' },
        ],
      },
      modelSelection: {
        id: 'model-selection',
        title: 'Auswahl von KI-Modellen für Ihre Prompts',
        content: [
          '**Beginnen Sie für die meisten Aufgaben mit GPT-4o und Claude 4.6 Sonnet – führen Sie beide aus und vergleichen Sie Pass-Raten für Ihren spezifischen Anwendungsfall, bevor Sie sich auf ein Modell festlegen.** Das richtige Modell hängt vom Aufgabentyp ab, nicht von allgemeinen Leaderboard-Rankings.',
          'GPT-4o (OpenAI) und Claude 4.6 Sonnet (Anthropic) sind die zwei am weitesten verbreiteten Frontier-Modelle für Produktions-Prompt-Engineering [Stand April 2026](/prompt-engineering/gpt-claude-gemini-which-model?lang=de). Für Dokumente über 100k Token: Gemini 2.5 Pro hinzufügen. Für kostenempfindliche Hochvolumen-Aufgaben: Claude 4.5 Haiku oder GPT-4o mini verwenden.',
        ],
        columns: ['Aufgabentyp', 'Empfohlenes Modell', 'Begründung'],
        rows: [
          { 'Aufgabentyp': 'Strukturierte Ausgabe (JSON, Klassifikation)', 'Empfohlenes Modell': 'GPT-4o', 'Begründung': 'Zuverlässiger JSON-Modus, konsistente Befolgung von Anweisungen für eingeschränkte Ausgabeformate' },
          { 'Aufgabentyp': 'Langtextgenerierung, nuancierte Anweisungen', 'Empfohlenes Modell': 'Claude 4.6 Sonnet', 'Begründung': 'Verarbeitet Mehrfachbedingungen mit weniger wörtlichen Auslegungsfehlern' },
          { 'Aufgabentyp': 'Code-Generierung und Review', 'Empfohlenes Modell': 'GPT-4o oder Claude 4.6 Sonnet', 'Begründung': 'Beide leistungsstark – führen Sie beide aus und vergleichen Sie für Ihre spezifische Codebasis und Sprache' },
          { 'Aufgabentyp': 'Dokumente über 100k Token', 'Empfohlenes Modell': 'Gemini 2.5 Pro', 'Begründung': '1M-Token-Kontextfenster; GPT-4o und Claude 4.6 Sonnet sind beide auf 200k Token begrenzt' },
          { 'Aufgabentyp': 'Hochvolumen kostenempfindliche Aufgaben', 'Empfohlenes Modell': 'Claude 4.5 Haiku oder GPT-4o mini', 'Begründung': 'Beide sind 10–20× günstiger als Flagship-Modelle bei akzeptabler Qualität für viele Produktionsaufgaben' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'key-point', label: 'PromptQuorum für Modellvergleich', text: 'PromptQuorum sendet einen Prompt gleichzeitig an alle konfigurierten Modelle und gibt alle Antworten in einer Ansicht mit Pass-Rate-Tracking zurück – der schnellste Weg für ein kleines Team, herauszufinden, welches Modell bei einer bestimmten Aufgabe am besten abschneidet, ohne eigenen API-Vergleichscode pro Modell zu schreiben.' },
        ],
      },
      governance: {
        id: 'governance',
        title: 'Ownership- und Review-Regeln',
        content: [
          '**Für Teams unter 5 Personen: ein benannter Owner pro Prompt-Datei, Änderungen in Git-Commit-Messages festgehalten, kein formaler Review-Schritt erforderlich. Für Teams von 5–15 Personen: Pull-Request-Review vor dem Mergen von Änderungen an Prompts, die in der Produktion verwendet werden.** Diese zwei Stufen decken den Governance-Bedarf der meisten kleinen Teams ohne unnötigen Overhead ab.',
          'Das häufigste Governance-Versagen in kleinen Teams ist nicht zu wenig Prozess – sondern „alle besitzen alles". Wenn niemand individuell für einen Prompt verantwortlich ist, bleiben Regressionen unbehoben, weil jeder davon ausgeht, dass sich jemand anderes darum kümmert.',
        ],
        items: [
          'Jede Prompt-YAML-Datei enthält ein benanntes `owner:`-Feld (GitHub-Username oder E-Mail-Adresse)',
          'Der Owner erhält eine Benachrichtigung (GitHub/GitLab), wenn jemand anderes seinen Prompt ändert',
          'Jede Änderung am `template:`-String muss die Versionsnummer erhöhen, auch bei kleinen Formulierungsänderungen',
          'Produktions-Prompts müssen ihr Testset bestehen, bevor die Änderung in main gemergt wird',
          'Der Owner ist dafür verantwortlich, das Testset aktuell zu halten, wenn sich Scope oder Erfolgskriterien des Prompts ändern',
        ],
        callouts: [
          { type: 'warning', label: 'Wann Sie KEINEN formalen Review brauchen', text: 'Teams von 2–3 Personen mit direkter täglicher Kommunikation benötigen keine Pull-Request-Reviews für Prompt-Änderungen. Eine Slack-Nachricht – „summarise-for-pm auf v1.3.0 aktualisiert, Grund: GPT-4o hat die Behandlung von Aufzählungslisten geändert" – ist bei dieser Größe ausreichende Governance.' },
        ],
      },
      howToStart: {
        id: 'how-to-start',
        title: 'Einwöchiger Setup-Plan',
        content: '**Der schnellste Weg vom Prompt-Chaos zu einem funktionalen Team-Setup sind sechs Schritte über fünf Arbeitstage.** Jeder Schritt hat ein konkretes Ergebnis – kein Teilerfolg, kein „wir beenden das im nächsten Sprint".',
        numberedItems: [
          '**Tag 1 — Audit und Ownership-Zuweisung.** Listen Sie alle Prompts auf, die Ihr Team verwendet. Erfassen Sie für jeden: wo er gespeichert ist, wer ihn geschrieben hat, auf welchem Modell er läuft. Weisen Sie jedem Prompt einen benannten Owner zu. Das dauert 1–2 Stunden und deckt sofort Prompt-Wildwuchs auf – die meisten Teams entdecken 30–50 % mehr Prompts als gedacht.',
          '**Tag 2 — Gemeinsames Prompt-Repository erstellen.** Erstellen Sie einen `/prompts`-Ordner in Ihrem bestehenden Code-Repository oder einem neuen dedizierten Git-Repo. Fügen Sie eine `README.md` mit den erforderlichen Metadatenfeldern hinzu: Name, Version, Owner, Modell, Template, last_tested.',
          '**Tag 3 — Die 3 wichtigsten Prompts in YAML-Dateien migrieren.** Schreiben Sie sie mit dem vollständigen Metadaten-Template. Committen Sie ins gemeinsame Repo mit einer Nachricht wie `feat(prompts): migrate zusammenfassung-fuer-pm zur Bibliothek v1.0.0`. Diese 3 Dateien sind das Fundament Ihrer Bibliothek.',
          '**Tag 4 — Ein 20-Testfälle-Set für Ihren wichtigsten Prompt erstellen.** Zehn Happy-Path-Inputs, fünf Edge Cases (ungewöhnliche Formatierung, lange Inputs, fehlende Pflichtfelder), fünf adversarielle Inputs (Inputs, die Prompt-Anweisungen zu überschreiben versuchen). Definieren Sie ein binäres Pass/Fail-Kriterium für jeden Fall. Lesen Sie [Prompt-Qualität evaluieren](/prompt-engineering/how-to-evaluate-prompt-quality?lang=de) für das Bewertungs-Framework.',
          '**Tag 5 — Testset über mindestens 2 Modelle ausführen.** Verwenden Sie PromptQuorum oder eigene API-Aufrufe, um die 20 Fälle gegen GPT-4o und Claude 4.6 Sonnet auszuführen. Erfassen Sie die Pass-Rate für jedes Modell. Diese Baseline ist die wichtigste Zahl, die Ihr Team verfolgen wird – jede zukünftige Prompt-Änderung muss sie erreichen oder übertreffen.',
          '**Woche 2+ — Bibliothek erweitern und Review hinzufügen.** Migrieren Sie Ihre nächsten 5 kritischen Prompts in YAML-Dateien. Wenn Ihr Team 5 oder mehr Personen hat, fügen Sie PR-Reviews für den `/prompts`-Ordner hinzu. Führen Sie das vollständige Testset im CI bei jedem Merge in main aus. Lesen Sie [Prompt-Bibliothek aufbauen](/prompt-engineering/build-a-prompt-library?lang=de) für Skalierungs-Guidance über 20 Prompts hinaus.',
        ],
        callouts: [
          { type: 'key-point', label: 'Der wichtigste einzelne Schritt', text: 'Wenn Sie nur eine Sache aus dieser Anleitung umsetzen, dann Tag 5: Etablieren Sie eine Multi-Modell-Baseline-Pass-Rate für Ihren wichtigsten Prompt. Diese eine Zahl zeigt Ihnen sofort, wenn ein Modell-Update, eine Formulierungsänderung oder ein neuer Edge Case etwas gebrochen hat.' },
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Prompt-Engineering',
        content: '**Die meisten Prompt-Fehler in kleinen Teams lassen sich auf fünf wiederkehrende Muster zurückführen – jedes durch die in dieser Anleitung beschriebenen Komponenten vermeidbar.**',
        mistakes: [
          {
            mistake: 'Prompts in Slack, E-Mail oder persönlichen Notizen speichern',
            problem: 'Keine Versionshistorie, kein gemeinsamer Zugang, keine Möglichkeit zu überprüfen, was sich geändert hat, wenn in der Produktion etwas schiefgeht',
            fix: 'An Tag 2 des Setups in YAML-Dateien in einem gemeinsamen Git-Repo migrieren. Selbst eine einzelne flache Datei mit allen Prompts ist besser als ein Slack-Thread.',
          },
          {
            mistake: 'Eine Person besitzt alle Prompts',
            problem: 'Schafft einen Single Point of Failure – diese Person wird zum Engpass, und Prompts veralten, wenn sie nicht verfügbar ist',
            fix: 'Ownership nach Anwendungsfall oder Produktbereich zuweisen, nicht nach Person. 2–3 Owner auf funktionale Bereiche zu verteilen ist das richtige Modell für die meisten kleinen Teams.',
          },
          {
            mistake: 'Nur gegen das Modell testen, das den ursprünglichen Prompt produziert hat',
            problem: 'Verpasst modellspezifische Fehler und bricht still, wenn das Modell gewechselt wird oder das ursprüngliche Modell seine Gewichte aktualisiert',
            fix: 'Jeden Produktions-Prompt vor dem Deployment mindestens gegen GPT-4o und Claude 4.6 Sonnet ausführen. PromptQuorum nutzen, um beide gleichzeitig in einem Schritt auszuführen.',
          },
          {
            mistake: 'Versionierung als optional behandeln, bis etwas bricht',
            problem: 'Wenn eine Regression auftritt, erfordert das Rekonstruieren der Änderungen Erinnerung statt eines Git-Logs – Debugging dauert Stunden statt Minuten',
            fix: 'Jede Prompt-Änderung mit einem semantischen Version-Bump und einer einzeiligen Änderungsnotiz committen. Die Gewohnheit dauert 30 Sekunden; der Gewinn beim Debugging sind Stunden.',
          },
          {
            mistake: 'Enterprise-Grade-Tooling für ein 3-Personen-Team einführen',
            problem: 'Overhead übersteigt den Nutzen – Teams verbringen mehr Zeit damit, den Tool-Stack zu warten, als Features zu entwickeln, die Prompts verwenden',
            fix: 'Mit Git + YAML beginnen. [Prompt-Management-Plattformen](/prompt-engineering/best-prompt-management-platforms?lang=de) (Braintrust, PromptHub, Vellum) erst hinzufügen, wenn die Grenzen von Git zu einer echten Einschränkung werden – typischerweise ab 10+ Personen oder 50+ Produktions-Prompts.',
          },
        ],
      },
      dachKontext: {
        id: 'dach-kontext',
        title: 'Im DACH-Kontext: DSGVO und BSI-Anforderungen',
        content: [
          '**Unternehmen in Deutschland, Österreich und der Schweiz (DACH) müssen beim Einsatz externer LLM-APIs Datenschutz- und Sicherheitsanforderungen berücksichtigen, die über allgemeine Softwareentwicklungspraktiken hinausgehen.** Das in dieser Anleitung beschriebene YAML-Bibliothek- und Git-Setup ist kompatibel mit diesen Anforderungen – erfordert jedoch einige spezifische Ergänzungen.',
          'Nach **DSGVO Art. 28** gilt jeder externe API-Anbieter (OpenAI, Anthropic, Google), dem personenbezogene Daten übermittelt werden, als Auftragsverarbeiter. Sie sind verpflichtet, vor der Übermittlung einen **Auftragsverarbeitungsvertrag (AVV)** abzuschließen. OpenAI und Anthropic bieten standardisierte AVV-Formulare an, die über ihre Entwicklerportale zugänglich sind. Verarbeiten Sie keine personenbezogenen Daten über API-Prompts, ohne den AVV abgeschlossen zu haben.',
          'Das **BSI-Grundschutz-Kompendium** (insbesondere Baustein CON.11 – Datenschutz und SYS.1.1 – Allgemeiner Server) empfiehlt für Daten mit hohem Schutzbedarf – etwa Mandantendaten bei Rechtsanwälten, Patientendaten im Gesundheitswesen oder Finanzdaten – lokal betriebene Modelle als bevorzugte Option. In der Praxis bedeutet das: Für sensible Aufgaben lokale Modelle wie Llama 3.3 oder Mistral über Ollama einsetzen und nur für Aufgaben ohne Personenbezug externe API-Modelle verwenden. Die Prompt-YAML-Dateien können ein optionales `data_classification:`-Feld enthalten (`public`, `internal`, `confidential`), um klar zu kennzeichnen, welche Prompts mit externen Modellen kompatibel sind.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        content: '**Die häufigsten Fragen von kleinen Teams betreffen das Minimum Viable Setup, Git vs. dedizierte Tooling-Lösungen, Modellauswahl und die Verhinderung stiller Regressionen bei Modell-Updates.** Jede Antwort enthält einen konkreten Schwellenwert oder eine Aktion.',
        faqs: [
          {
            q: 'Brauchen kleine Teams einen dedizierten Prompt Engineer?',
            a: 'Nein. Die meisten kleinen Teams weisen die Prompt-Ownership demjenigen zu, der das Feature entwickelt, das den Prompt verwendet – in der Regel einem Entwickler oder Product Manager. Ein dedizierter Prompt Engineer lohnt sich typischerweise erst ab mehr als 20 Produktions-Prompts und wenn die Prompt-Qualität ein direkter Umsatztreiber ist.',
          },
          {
            q: 'Was ist das Minimum Viable Setup für Prompt-Engineering in einem kleinen Team?',
            a: 'Ein /prompts-Ordner in einem gemeinsamen Git-Repository mit YAML-Dateien, die vier Felder enthalten: Name, Version, Owner und Modell. Alles andere – Testsets, Observability, Review-Prozesse – wird schrittweise hinzugefügt, wenn die Prompt-Fläche wächst.',
          },
          {
            q: 'Sollte ein kleines Team eine Prompt-Management-Plattform oder nur Git verwenden?',
            a: 'Für Teams unter 15 Personen mit weniger als 50 Produktions-Prompts ist Git ausreichend. Prompt-Management-Plattformen wie Braintrust, PromptHub und Vellum bieten Mehrwert, wenn Sie UI-basiertes Editieren für nicht-technische Stakeholder, automatisierte Evaluation-Läufe im CI oder Multi-Environment-Promotion von Dev über Staging bis Produktion benötigen.',
          },
          {
            q: 'Wie verhindern wir, dass Prompts bei Modell-Updates brechen?',
            a: 'Führen Sie Ihr Testset aus, wenn Sie eine Modell-Update-Benachrichtigung von OpenAI oder Anthropic erhalten. Ein 20-Testfälle-Set läuft in unter 60 Sekunden gegen GPT-4o und Claude 4.6 Sonnet mit PromptQuorum oder einem einfachen API-Skript. Legen Sie einen Pass-Rate-Schwellenwert fest – fällt das Ergebnis unter Ihre Baseline, untersuchen Sie dies vor dem Deployment.',
          },
          {
            q: 'Auf welches KI-Modell sollte sich ein kleines Team standardisieren?',
            a: 'Standardisieren Sie sich nicht auf ein Modell. Führen Sie Ihre wichtigsten Prompts auf GPT-4o und Claude 4.6 Sonnet aus und wählen Sie nach Aufgabentyp. GPT-4o ist zuverlässiger für strukturierte Ausgaben wie JSON und Klassifikation. Claude 4.6 Sonnet verarbeitet nuancierte Mehrfachbedingungen mit weniger wörtlichen Auslegungsfehlern. Verwenden Sie Claude 4.5 Haiku oder GPT-4o mini für kostenempfindliche Hochvolumen-Aufgaben.',
          },
          {
            q: 'Wie viele Prompts brauchen wir, bevor sich eine gemeinsame Bibliothek lohnt?',
            a: 'Ab fünf Prompts. Bei weniger als fünf Produktions-Prompts reicht ein gemeinsames Dokument. Ab fünf übersteigt der Koordinationsaufwand bei verteilter Speicherung den einmaligen Setup-Aufwand einer YAML-Bibliothek in Git.',
          },
          {
            q: 'Wie groß sollte das Testset für einen Produktions-Prompt sein?',
            a: '20 Fälle sind das Minimum: 10 Happy-Path-Inputs, 5 Edge Cases (ungewöhnliche Formatierung, lange Inputs, fehlende Pflichtfelder) und 5 adversarielle Inputs. Über 50 Fälle hinaus nehmen die marginalen Abdeckungsgewinne für die meisten Produktions-Prompts ab – es sei denn, Sie haben Hochrisiko-Ausgaben in medizinischen, rechtlichen oder finanziellen Anwendungen.',
          },
          {
            q: 'Wie handhaben wir Prompt-Engineering für nicht-technische Teammitglieder?',
            a: 'Nutzen Sie ein gemeinsames Notion- oder Google-Dokument für nicht-technische Stakeholder, um Prompt-Inhalte zu entwerfen. Ein Entwickler ist dann verantwortlich für die Strukturierung als YAML-Datei und das Ausführen der Tests. PromptQuorum bietet eine No-Code-Oberfläche zum Ausführen und Vergleichen von Prompts ohne direkten API-Zugang – nutzbar für Product Manager und Designer.',
          },
          {
            q: 'Müssen wir bei der Verwendung von KI-Sprachmodellen die DSGVO beachten?',
            a: 'Ja. Wenn Sie personenbezogene Daten an externe API-Anbieter (OpenAI, Anthropic) übermitteln, sind Sie nach DSGVO Art. 28 verpflichtet, einen Auftragsverarbeitungsvertrag (AVV) abzuschließen. OpenAI und Anthropic bieten beide standardmäßige AVV-Vereinbarungen an. Für Daten, die nicht das Unternehmen verlassen dürfen, empfehlen BSI-Grundschutz-Kataloge den Einsatz lokal betriebener Modelle.',
          },
          {
            q: 'Ist dieses Prompt-Engineering-Setup für den deutschen Mittelstand geeignet?',
            a: 'Ja. Das Setup basiert auf Git und YAML – beide sind in DACH-Unternehmen etablierte Werkzeuge. Mittelständische Unternehmen mit bestehenden BSI-Grundschutz-Zertifizierungen können das Setup direkt integrieren: Prompt-YAML-Dateien werden wie Code behandelt und fallen unter dieselben Zugriffs- und Versionierungsrichtlinien. Für Unternehmen mit strengen Datenschutzanforderungen empfiehlt sich die Kombination mit lokalen Modellen (Llama 3.3, Mistral) für sensible Verarbeitungsaufgaben.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Prompt-Bibliothek für Ihr Team aufbauen](/prompt-engineering/build-a-prompt-library?lang=de) — Metadatenstruktur, Ordnerorganisation und Skalierungs-Governance über 50 Prompts hinaus',
          '[Prompt-Qualität evaluieren: Metriken, Tests & Checkliste](/prompt-engineering/how-to-evaluate-prompt-quality?lang=de) — Aufbau eines 20-Testfälle-Sets, binäre Pass/Fail-Bewertung und LLM-as-Judge-Rubrics',
          '[Prompts modellübergreifend testen](/prompt-engineering/how-to-test-prompts-across-models?lang=de) — denselben Prompt gegen GPT-4o, Claude 4.6 Sonnet und Gemini 2.5 Pro ausführen, um den besten Performer pro Aufgabe zu finden',
          '[Beste Prompt-Management-Plattformen (2026)](/prompt-engineering/best-prompt-management-platforms?lang=de) — wenn Sie über Git hinauswachsen: Braintrust, PromptHub und Vellum für wachsende Teams verglichen',
          '[GPT-4o vs. Claude vs. Gemini: Welches Modell?](/prompt-engineering/gpt-claude-gemini-which-model?lang=de) — Modellauswahl nach Aufgabentyp, Latenz, Kosten und Kontextfenster',
          '[Beste Prompt-Engineering-IDEs (2026)](/prompt-engineering/best-prompt-engineering-ides?lang=de) — VS Code und Cursor für die YAML-Prompt-Dateibearbeitung mit Syntax-Highlighting und team-geteilten Snippets konfigurieren',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[OpenAI API-Preise (April 2026)](https://openai.com/api/pricing) — GPT-4o und GPT-4o mini Input/Output-Token-Raten für Kostenschätzungen in diesem Artikel',
          '[Anthropic API-Preise (April 2026)](https://www.anthropic.com/pricing) — Claude 4.6 Sonnet und Claude 4.5 Haiku Token-Raten',
          '[Google Gemini API-Preise (April 2026)](https://ai.google.dev/pricing) — Gemini 2.5 Pro Kontextfenster und Token-Raten',
          '[GitHub: InnerSource Fundamentals](https://resources.github.com/innersource/fundamentals/) — Prinzipien gemeinsamer Code-Ownership und Governance, anwendbar auf gemeinsame Prompt-Bibliotheken',
          '[NIST AI Risk Management Framework (AI RMF)](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Governance-Prinzipien für KI-Systeme in Organisationen aller Größen',
        ],
      },
    },
  },
  fr: {
    theme: 'Workflows',
    title: 'Setup Prompt Engineering pour Petites Équipes (2026)',
    seoTitle: 'Setup Prompt Engineering pour Petites Équipes : Outils & Workflow (2026)',
    metaDescription: 'Mettre en place le prompt engineering pour petites équipes : bibliothèque YAML, versioning Git, 20 cas de test et règles d\'ownership. Setup complet en une semaine.',
    ogDescription: 'Setup prompt engineering pour équipes de 2–15 : bibliothèque partagée, versioning Git, tests multi-modèles avec PromptQuorum et ownership. Opérationnel en une semaine.',
    twitterDescription: 'Du chaos de prompts à un setup structuré en une semaine. Bibliothèque YAML, Git, 20 cas de test, owners désignés. Équipes de 2–15.',
    sections: {},
  },
  ja: {
    theme: 'Workflows',
    title: '小規模チーム向けプロンプトエンジニアリングセットアップ（2026年）',
    seoTitle: '小規模チーム向けプロンプトエンジニアリング：ツールとワークフロー（2026年）',
    metaDescription: '小規模チームのプロンプトエンジニアリング構築：YAML共有ライブラリ、Gitバージョン管理、20件テストセット、オーナーシップルール。1週間で完了。',
    ogDescription: '2〜15人チーム向けプロンプトエンジニアリング：共有ライブラリ、Gitバージョン管理、PromptQuorumでマルチモデルテスト。1週間で運用開始。',
    twitterDescription: 'プロンプトの混乱から1週間で構造化セットアップへ。YAMLライブラリ、Git、20テストケース、オーナー指定。2〜15人チーム向け。',
    sections: {},
  },
  zh: {
    theme: 'Workflows',
    title: '小团队Prompt工程设置（2026）',
    seoTitle: '小团队Prompt工程设置：工具与工作流（2026）',
    metaDescription: '小团队Prompt工程搭建：YAML共享库、Git版本控制、20条测试集和Ownership规则。一周内完成全部设置。',
    ogDescription: '2–15人团队Prompt工程：共享库、Git版本控制、PromptQuorum多模型测试和Ownership规则。一周内投入运营。',
    twitterDescription: '从Prompt混乱到结构化设置，仅需一周。YAML库、Git、20条测试集、指定Owner。适合2–15人团队。',
    sections: {},
  },
};
