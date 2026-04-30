import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt Version Control: Tracking, Rollback & Team Workflows (2026)',
    intro: '**Prompt version control tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH) and git workflows.** It enables instant rollback, team collaboration, and regression detection — the same discipline applied to code, applied to prompts. This guide covers semantic versioning schemes, git branch workflows, changelog format, rollback strategies, and automated testing patterns for production prompt systems.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    lastFactChecked: '2026-04-30 — Git documentation, semantic versioning spec, Braintrust and Promptlayer docs verified',
    educationalLevel: 'Advanced',
    audience: 'Developers managing LLM prompts in production, prompt engineers, engineering team leads',
    primaryTerm: 'Prompt Version Control',
    toc: [
      { label: 'Silent Regressions and Why Version Control Prevents Them', anchor: 'why-version-control' },
      { label: 'Semantic Versioning for AI Prompts', anchor: 'semantic-versioning' },
      { label: 'Git Workflow for Prompt Changes', anchor: 'git-workflow' },
      { label: 'Required Changelog Fields', anchor: 'changelog' },
      { label: 'Rollback Strategies', anchor: 'rollback' },
      { label: 'Team Collaboration and Ownership', anchor: 'team-collaboration' },
      { label: 'Automated Testing Before Merge', anchor: 'automated-testing' },
      { label: 'Common Mistakes in Prompt Version Control', anchor: 'mistakes' },
      { label: 'Compliance and Audit Requirements for Prompt Changes', anchor: 'regional-considerations' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    seoTitle: 'Prompt Version Control: Semantic Versioning, Git & Rollback (2026)',
    metaDescription: 'Learn prompt version control with MAJOR.MINOR.PATCH, git workflows, changelogs, rollback strategies, and automated regression testing. Full production workflow.',
    ogDescription: 'Version control prompts like code: semantic versioning, git branching, 5-field changelogs, instant rollback, and CI/CD test gates. Compare versions with PromptQuorum.',
    twitterDescription: 'Prompts are code — version them like code. MAJOR.MINOR.PATCH, git workflows, changelogs, rollback in seconds, and automated regression tests.',
    readTime: '10 min read',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Version Control: Tracking, Rollback & Team Workflows (2026)',
      description: 'Unversioned prompts fail silently — no history means no rollback. Apply MAJOR.MINOR.PATCH versioning, git branch workflows, and automated regression tests to every prompt change.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'en',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows', width: 1200, height: 630 },
      keywords: ['prompt version control', 'prompt versioning', 'git workflow for prompts', 'semantic versioning', 'prompt rollback', 'changelog', 'regression testing'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Git' },
        { '@type': 'SoftwareApplication', name: 'GitHub' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
      ],
      about: [
        { '@type': 'Thing', name: 'Prompt Version Control', description: 'A system that tracks every change to an AI prompt using MAJOR.MINOR.PATCH semantic versioning, enables rollback to any previous version, and records author and modification rationale.' },
        { '@type': 'Thing', name: 'Git Workflow for Prompts', description: 'A branching and review strategy that mirrors code development practices — feature branches, pull requests, automated tests, and multi-reviewer approval gates.' },
        { '@type': 'Thing', name: 'Prompt Rollback Strategy', description: 'A deployment mechanism that instantly reverts a prompt to a previous version via git revert, feature flags, or environment variables.' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways']
      }
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Set Up a Git Workflow for Prompt Changes',
      inLanguage: 'en',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Create a feature branch for your prompt change using git checkout -b feature/description' },
        { '@type': 'HowToStep', position: 2, name: 'Edit the prompt file and bump the version number in the header comment (MAJOR.MINOR.PATCH)' },
        { '@type': 'HowToStep', position: 3, name: 'Run automated regression tests against a golden test set of at least 10 representative inputs' },
        { '@type': 'HowToStep', position: 4, name: 'Open a pull request for review; reviewers check clarity, hallucination risk, output format, and security' },
        { '@type': 'HowToStep', position: 5, name: 'Merge to main after approval and tag the release using git tag v2.0.0 -m description' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is prompt version control?',
          acceptedAnswer: { '@type': 'Answer', text: 'Prompt version control is a system that tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH), enables instant rollback to any previous version, and records who changed what and why. It applies software engineering discipline to prompt management — treating prompts as production code that must be reviewed, tested, and versioned.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need a separate git repo for prompts or can I use my existing app repo?',
          acceptedAnswer: { '@type': 'Answer', text: 'Both work. Use a monorepo (single repo) if you have fewer than 50 prompts and tight coupling between code and prompts. Use a separate repo if you have 50+ prompts, want independent release cycles, or multiple teams managing different prompt sets. The key is that prompts live in a dedicated /prompts/ directory with a version file, changelog, and test fixtures alongside them — structure matters more than repository choice.' },
        },
        {
          '@type': 'Question',
          name: 'How is prompt versioning different from model versioning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Model versioning (GPT-4o vs Claude 4.6 Sonnet) is about which underlying AI system you use. Prompt versioning is about tracking changes within a single prompt text — wording, structure, examples, constraints. You can version both independently: a prompt v2.1 may be deployed against model GPT-4o, and later upgraded to GPT-4o + Claude 4.6 Sonnet without changing the prompt version number.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good minimum test suite size for a production prompt?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minimum 10 golden test cases per prompt — a mix of expected happy paths (4-5 cases), edge cases (3-4 cases), and failure modes (2-3 cases). Larger prompts handling complex tasks should have 20+ cases. Each case includes: input, expected output format, and expected behavior (e.g., "should flag hallucination risk if model makes factual claims").' },
        },
        {
          '@type': 'Question',
          name: 'How do I handle versioning when the same prompt is used across different models?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use a single prompt version number, but test against all target models during the PR review stage. The version reflects prompt changes, not model changes. If a prompt works identically across GPT-4o and Claude 4.6 Sonnet, it\'s v1.0. If you later add Claude-specific syntax (thinking blocks), bump to v2.0. Track model compatibility separately from prompt versions.' },
        },
        {
          '@type': 'Question',
          name: 'Should every wording change bump the version?',
          acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Use the rule: PATCH version bumps for clarifications and typo fixes that do not change output behavior. MINOR bumps for quality improvements (better reasoning, fewer hallucinations, faster response) that are backwards-compatible. MAJOR bumps only when output format, structure, or semantics break downstream parsing. A synonym change is a PATCH; a tone shift affecting behavior is MINOR.' },
        },
        {
          '@type': 'Question',
          name: 'What tools support prompt version control natively?',
          acceptedAnswer: { '@type': 'Answer', text: 'Git natively supports prompt versioning if you store prompts as text files. Specialized tools like Braintrust, Promptlayer, and Vellum add built-in versioning, comparison, and A/B testing. PromptQuorum supports multi-model comparison which helps identify breaking changes early. Choose based on your workflow: pure git if you have strong development practices, a tool if you want built-in rollback UI and version branching.' },
        },
        {
          '@type': 'Question',
          name: 'How do I roll back a prompt if I don\'t use git?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use feature flags (easiest): deploy new prompt behind a flag, test in production, flip flag to rollback instantly. Use environment variables: store prompt in an env var, swap values to revert. Use a database: store prompt versions in a database table, query by version number. The slowest method is re-deploying old code, which takes minutes. Feature flags or env vars are recommended — rollback should take seconds.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt Rollback Methods',
      inLanguage: 'en',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Git Revert', description: 'Instant (seconds), zero downtime, requires git-based deployment. Best for most teams.' },
        { '@type': 'ListItem', position: 2, name: 'Feature Flag', description: 'Instant (seconds), zero downtime, but requires flag infrastructure. Best if flags already deployed.' },
        { '@type': 'ListItem', position: 3, name: 'Environment Variable', description: 'Instant (seconds), medium risk, simple to implement. Best for hotfixes.' },
      ],
    },
    quickFacts: [
      'Semantic versioning for prompts: MAJOR bumps on breaking output format changes, MINOR on quality improvements, PATCH on typo/clarification fixes',
      'A git revert on a prompt takes seconds; re-testing without version history takes hours',
      'Prompt changelogs require 5 fields: version, date, author, change type (MAJOR/MINOR/PATCH), and expected output delta',
      'Run automated regression tests against ≥10 golden test cases on every prompt PR before manual review',
      'Three branching patterns for prompts: feature/ (new capability), fix/ (regression), experiment/ (A/B test)',
    ],
    sections: {
      tldr: {
        title: 'Key Takeaways',
        isTldr: true,
        content: [
          '**TL;DR:** Unversioned prompts fail silently — when output quality degrades, there\'s no history to show what changed or when. Version control prompts using MAJOR.MINOR.PATCH semantic versioning. Deploy via git: feature branch → PR → automated regression tests → manual review → merge. Require 2+ reviewers. Tag releases: `git tag v2.0.0`. Enable instant rollback via git revert (seconds) instead of re-testing (hours).',
        ],
        items: [
          'Unversioned prompts cause silent regressions — prompt output quality drops but no error log records the change; version history solves this.',
          'Semantic versioning scheme: MAJOR for breaking output format changes (JSON → markdown), MINOR for quality improvements (better reasoning), PATCH for typo fixes.',
          'Store prompts in a dedicated /prompts/ directory with version files, test fixtures, and changelogs alongside code.',
          'Git workflow: feature branch → edit prompt + bump version → run automated tests (≥10 golden cases) → open PR → 2+ reviewer approval → merge + tag release.',
          'Automated regression tests must validate: output format (JSON compliance), quality (hallucination flags), and latency (response time under threshold).',
          'Three rollback methods: git revert (instant, preferred), feature flags (zero downtime if deployed), environment variables (simple but medium risk).',
          'Team patterns: assign one prompt owner per feature area; all changes require that owner\'s approval; use monorepo for tight coupling, separate repo for 50+ prompts.',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Silent Regressions and Why Version Control Prevents Them',
        content: [
          '**Unversioned prompts fail silently — when output quality degrades, there\'s no history to show what changed or when.** In software, a runtime error throws an exception. In prompts, output quality degrades gradually: reasoning becomes less coherent, hallucinations increase, format compliance breaks. Without version history, the regression is undetectable until it reaches production and damages user experience. See [how to detect and prevent AI hallucinations](/prompt-engineering/ai-hallucinations-how-to-stop) for detection strategies.',
          'Three failure modes occur without version control: (1) **Silent quality drop** — a synonym change that seemed harmless actually harms reasoning. No error log. No alert. Quality metrics slowly degrade and no one realizes a prompt change caused it. (2) **Format break** — output changes from JSON to markdown and downstream parsers fail silently. (3) **Collaboration conflicts** — two engineers edit the same prompt simultaneously, one overwrites the other\'s changes without noticing.',
          'Version control solves all three by recording every change, enabling instant rollback, and enforcing review gates. When regression occurs, you can diff the prompt against the previous version in seconds and identify the exact change that broke it.'
        ],
        callouts: [
          { type: 'Warning', label: 'Silent Failures', text: 'Prompts fail silently. No error log, no exception. Output quality degradation is invisible until it damages user experience in production. Git log is your only audit trail.' },
          { type: 'Did You Know', label: 'Synonym Risk', text: 'Changing "most important reason" to "primary factor" can alter reasoning quality for 5-10% of inputs. A synonym swap that seemed safe broke production — version history exposed it in minutes.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt version control is a system that tracks every change to an AI prompt, enables rollback to any previous version, and records the author and reason for each modification.' },
          { type: 'in-plain-terms', text: 'Treat prompts like code: every change goes through a PR, gets tested, requires approval, and is tagged with a version number. When something breaks, git revert in seconds instead of re-testing for hours.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'Semantic Versioning for AI Prompts',
        content: [
          '**Prompt semantic versioning uses MAJOR.MINOR.PATCH — a breaking output format change bumps MAJOR, a quality improvement bumps MINOR, and a typo fix bumps PATCH.** The scheme is identical to semantic versioning for code, but applied to prompt text instead of software versions.',
          'The versioning rule is simple: if a downstream system (a parser, an API, or a user expecting a specific format) would break, bump MAJOR. If output improves but remains compatible, bump MINOR. If the change is transparent to users (fixing a typo, clarifying intent), bump PATCH.',
        ],
        columns: ['Change Type', 'When to Bump', 'Example', 'Backwards-Compatible?'],
        rows: [
          { 'Change Type': 'MAJOR', 'When to Bump': 'Breaking output format change', 'Example': 'Change output from "Q: ... A: ..." to JSON {"question": "...", "answer": "..."}', 'Backwards-Compatible?': 'No' },
          { 'Change Type': 'MINOR', 'When to Bump': 'Quality improvement (better reasoning, fewer hallucinations, faster latency)', 'Example': 'Add few-shot examples to reduce hallucinations without changing format', 'Backwards-Compatible?': 'Yes' },
          { 'Change Type': 'PATCH', 'When to Bump': 'Typo fixes, clarifications, wording changes that don\'t affect behavior', 'Example': 'Change "summarize briefly" to "summarize in 2-3 sentences"', 'Backwards-Compatible?': 'Yes' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Key Point', label: 'MAJOR Triggers', text: 'Bump MAJOR if downstream systems parsing output would break: format change (markdown → JSON), structure change (single string → array), or semantic change (instruction meaning changes). For enforcing schema compliance, see [structured output and JSON mode](/prompt-engineering/structured-output-json-mode).' },
          { type: 'Pro Tip', label: 'Tag Releases in Git', text: 'After merging a prompt change, tag the version: git tag v2.1.0 -m "Improved date reasoning via few-shot examples". Reference the tag in changelogs and deployment docs.' },
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'MAJOR = customers notice and their systems break. MINOR = customers notice but stay compatible. PATCH = customers don\'t notice.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'Git Workflow for Prompt Changes',
        content: [
          '**A complete git workflow for prompts follows the same 5 steps as code: feature branch → edit & test → PR → review → merge → tag release.** The workflow prevents silent regressions, enables collaboration, and documents every change.',
        ],
        numberedItems: [
          'Create a feature branch: `git checkout -b feature/add-json-output` or `fix/date-hallucination`. Use descriptive names.',
          'Edit the prompt file. Update the version number in a header comment: v1.0.0 → v2.0.0 (if MAJOR change). Add test cases to /prompts/tests/.',
          'Run automated regression tests: `npm run test:prompts`. Must pass format validation, golden set comparison, and hallucination checks. ≥10 test cases required.',
          'Open a pull request. Reviewers verify: clarity (is intent unambiguous?), hallucination risk (any factual claims without sources?), format compliance (does output match schema?), security (injection vectors?). Use the [7-point prompt review checklist](/prompt-engineering/prompt-review-workflow-for-teams) for standardized criteria.',
          'After approval from 2+ reviewers, merge to main. Tag the release: `git tag v2.0.0 -m "Improved date handling via few-shot examples"`. Deploy automatically via CI/CD.',
        ],
        codeBlock: `name: Prompt Regression Tests
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt tests
        run: npm run test:prompts -- --coverage
      - name: Validate format
        run: npm run test:format -- prompts/
      - name: Check hallucination flags
        run: npm run test:hallucination -- prompts/`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Directory Structure', text: 'Store prompts in /prompts/ with test fixtures alongside: /prompts/my-prompt.txt, /prompts/tests/my-prompt.golden.json, /prompts/CHANGELOG.md. Keep version in comment at top of prompt file.' },
          { type: 'Best Practice', label: 'Approval Gates', text: 'Require 2+ approvals for production prompts: one from domain expert (understands intent) and one from test engineer (validates test coverage). Use branch protection rules in GitHub.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'Required Changelog Fields',
        content: [
          '**A prompt changelog records every version change, when it happened, who made it, and why.** A changelog entry requires 5 fields: version number, release date, author, change type (MAJOR/MINOR/PATCH), and a summary of the expected output delta.',
        ],
        columns: ['Field', 'Required', 'Example'],
        rows: [
          { 'Field': 'version', 'Required': 'Yes', 'Example': 'v2.1.0' },
          { 'Field': 'date', 'Required': 'Yes', 'Example': '2026-04-30' },
          { 'Field': 'author', 'Required': 'Yes', 'Example': 'alice@company.com' },
          { 'Field': 'change_type', 'Required': 'Yes', 'Example': 'MINOR (quality improvement)' },
          { 'Field': 'summary', 'Required': 'Yes', 'Example': 'Added 3 few-shot examples to reduce hallucinations on date-based questions. Output format unchanged.' },
        ],
        tableFormat: true,
        codeBlock: `# Changelog

## v2.1.0 — 2026-04-30 (alice@company.com) — MINOR

**Change:** Added 3 few-shot examples to reduce hallucinations on date-based questions.
**Output Delta:** Format unchanged (still JSON). Quality improvement: hallucination rate dropped from 8% to 2% on date-parsing test set.
**Backwards-Compatible:** Yes. Existing systems unaffected.
**PR:** #1427

## v2.0.0 — 2026-04-28 (bob@company.com) — MAJOR

**Change:** Switched output format from markdown ("Q: ... A: ...") to JSON ({"question": "...", "answer": "..."}).
**Output Delta:** Format CHANGED. All downstream parsers must be updated.
**Backwards-Compatible:** No. Requires deployment coordination.
**PR:** #1425`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: 'Write Changelog BEFORE Prompt Change', text: 'Write the CHANGELOG.md entry first—it forces clarity. If you can\'t explain in 2 sentences why this change matters, the change itself is probably unnecessary. Changelog clarity = code clarity.' },
          { type: 'Key Point', label: '5-Field Minimum', text: 'Every changelog entry must include all 5 fields. If you can\'t document it, don\'t deploy it.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'Rollback Strategies',
        content: [
          '**Git revert is the default rollback method — it takes seconds and has zero risk.** Know the 3 triggers for rollback: production quality drop (hallucination rate spikes), security issue discovered, or model compatibility break (new model doesn\'t work with this prompt).',
        ],
        items: [
          'Trigger: production hallucination rate jumps from 2% to 8% after v2.1 deployed',
          'Trigger: v2.0 output format breaks downstream parser (5% of requests fail)',
          'Trigger: security bug found — prompt is vulnerable to injection attack',
          'Trigger: new model (Claude 5.0) incompatible with prompt structure; revert and refactor',
        ],
        columns: ['Rollback Method', 'Speed', 'Risk', 'When to Use'],
        rows: [
          { 'Rollback Method': 'git revert v2.1.0', 'Speed': 'Seconds (instant)', 'Risk': 'Low (commits a revert commit)', 'When to Use': 'Default for all rollbacks. Requires git-based deployment.' },
          { 'Rollback Method': 'Feature flag OFF', 'Speed': 'Seconds (toggle flag)', 'Risk': 'Zero (no deployment required)', 'When to Use': 'If feature flags already deployed. Best for zero-downtime rollback.' },
          { 'Rollback Method': 'Environment variable swap', 'Speed': 'Seconds (redeploy env)', 'Risk': 'Medium (config error risk)', 'When to Use': 'Hotfix when flag infrastructure unavailable. Not recommended for production.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Warning', label: 'Test Before Rollback', text: 'Before reverting, always run regression tests against the golden set. Rollback might reintroduce a previously fixed bug if you\'re not careful. A rollback is just as risky as a deploy if untested.' },
          { type: 'Pro Tip', label: 'Automate Rollback Decision', text: 'Set up automated rollback triggers: if hallucination rate spikes >50% above baseline, automatically trigger git revert and alert the team. Don\'t wait for manual decision.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Rollback is git revert: a new commit that undoes a previous commit. Zero downtime, instant, always safe if the previous version was tested.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'Team Collaboration and Ownership',
        content: [
          '**A prompt ownership model prevents merge conflicts and enforces clear responsibility.** Assign one prompt owner per feature area; all changes go through that owner\'s review. For large teams, separate repos prevent concurrent editing of the same prompt.',
        ],
        items: [
          'Monorepo (recommended for <50 prompts): Single git repo, one /prompts/ directory. Each prompt owner has veto power over changes to their prompts. Enables tight coupling with code.',
          'Separate prompt repo (recommended for 50+ prompts): Dedicated repo for all prompts. Multiple teams manage different prompt sets independently. Release cycles decouple from application code. For the full ownership model, see [prompt engineering setup for small teams](/prompt-engineering/prompt-engineering-setup-small-teams).',
          'Ownership rules: One engineer per prompt (primary owner). Secondary reviewer role (cross-check). No merge to main without primary owner approval. Changes to another engineer\'s prompt require explicit permission.',
          'Conflict prevention: different engineers own different prompts. If two engineers need to change the same prompt, coordinate offline first or assign single owner.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Assign Ownership', text: 'Declare prompt ownership in code comments: "# Owner: alice@company.com" at the top of each prompt. Auto-tag the owner on PRs. Ownership = accountability.' },
          { type: 'Key Point', label: 'Avoid Shared Ownership', text: 'Two engineers owning one prompt = merge conflicts and finger-pointing. Assign one owner per prompt, even if it means someone learns a new domain.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'Automated Testing Before Merge',
        content: [
          '**Automated tests validate format, quality, and latency before a prompt PR is reviewed by humans.** Four test types catch different failure classes: format validation (JSON compliance), golden set comparison (output match), hallucination flags (factual claims), and latency checks (speed regression).',
        ],
        items: [
          'Format validation: parse output as JSON, validate schema, ensure all required fields present. Catches breaking format changes (MAJOR version bumps). Runs in <1 second.',
          'Golden set comparison: run prompt against 10-20 representative test inputs. Compare output against known-good answers. Catches quality regressions (reasoning degradation, accuracy drop). See [prompt evaluation metrics](/prompt-engineering/prompt-evaluation-metrics) for scoring methods beyond binary pass/fail. Runs in 5-10 seconds.',
          'Hallucination detection: flag any factual claims (dates, numbers, product names) without providing source material. Catches unintended hallucination risks. Runs in <1 second.',
          'Latency check: measure prompt response time. Alert if latency spikes >10% above baseline. Catches performance regressions from added reasoning steps. Runs in real-time.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Minimum Test Coverage', text: 'A golden test set of 10–20 representative inputs is the bare minimum. Larger prompts handling complex tasks should have 20-50+ cases. Each case includes input, expected format, and expected behavior.' },
          { type: 'Pro Tip', label: 'Use LLM-as-Judge', text: 'For quality assessment, use another LLM to judge if output meets expectations (e.g., "does this answer the question accurately?"). More robust than keyword matching.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Common Mistakes in Prompt Version Control',
        content: [],
        mistakes: [
          {
            mistake: 'No versioning scheme — prompts change but versions stay the same',
            problem: 'Silent breaking changes. When output format breaks downstream parsers, you don\'t know which version introduced the bug. Rollback is impossible without manual testing of each past version.',
            fix: 'Adopt MAJOR.MINOR.PATCH from day one. Tag every release: git tag v1.0.0. Update version in prompt file header on each change. Changelog entry is required before merge.',
          },
          {
            mistake: 'Storing prompts in application code (inline strings)',
            problem: 'Cannot review prompts separately. Changes buried in code PRs. No version history. Cannot rollback a prompt without redeploying code. Team collaboration impossible.',
            fix: 'Move prompts to dedicated /prompts/ directory. Store as text files. Import into code. Separate git history for prompts and code. Enables independent review and versioning.',
          },
          {
            mistake: 'No changelog — version number bumps but no record of what changed',
            problem: 'You released v2.0 a week ago. Output is now broken. Was it the format change or the few-shot examples? No way to know without diffing every version against the next.',
            fix: 'Require CHANGELOG.md entry for every PR. 5 fields minimum: version, date, author, change type, summary. Write it before making the prompt change — forces clarity of intent.',
          },
          {
            mistake: 'Testing only the happy path — no edge cases',
            problem: 'Golden test set has 3 cases: happy path (works fine). Deployed v2.0. In production, 5% of inputs hit edge cases and output format breaks. Now rolled back. Wasted a day.',
            fix: 'Minimum 10 golden test cases: 4-5 happy paths, 3-4 edge cases, 2-3 failure modes (e.g., "what if the answer is unknown?"). Cover 80% of real-world input distribution.',
          },
          {
            mistake: 'Rollback without testing — reverting old version without regression validation',
            problem: 'v2.0 is broken. Revert to v1.5. But v1.5 had a hallucination bug that was fixed in v1.6, then introduced again in v2.0. Now users see the old hallucination bug. Bad rollback.',
            fix: 'Always run golden test suite before merging a rollback. A rollback is a deploy like any other — treat it that way. Do not skip testing because it feels "safe.".',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Compliance and Audit Requirements for Prompt Changes',
        content: [
          'Version control and changelogs satisfy regulatory audit requirements. The EU AI Act requires traceability for high-risk AI outputs — version history + changelog provides a complete audit trail. GDPR Article 22 applies to prompts that make automated decisions (credit decisions, content moderation); full version history is required for 12+ months.',
          'Healthcare and finance: all prompt versions and changelogs must be retained for 7+ years (healthcare) or indefinitely (regulated finance). Use git + CHANGELOG.md to document every change. When auditors ask "when did you change this prompt and why?" you can show the exact commit, date, author, and reasoning in seconds.',
          'Sensitive domains: consider code-signing prompts (GPG sign each git commit). Enables cryptographic proof of authorship. Satisfies non-repudiation requirements for regulated industries.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is prompt version control?',
            a: 'Prompt version control is a system that tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH), enables instant rollback to any previous version, and records who changed what and why. It applies software engineering discipline to prompt management — treating prompts as production code that must be reviewed, tested, and versioned.',
          },
          {
            q: 'Do I need a separate git repo for prompts or can I use my existing app repo?',
            a: 'Both work. Use a monorepo (single repo) if you have fewer than 50 prompts and tight coupling between code and prompts. Use a separate repo if you have 50+ prompts, want independent release cycles, or multiple teams managing different prompt sets. The key is that prompts live in a dedicated /prompts/ directory with a version file, changelog, and test fixtures alongside them — structure matters more than repository choice.',
          },
          {
            q: 'How is prompt versioning different from model versioning?',
            a: 'Model versioning (GPT-4o vs Claude 4.6 Sonnet) is about which underlying AI system you use. Prompt versioning is about tracking changes within a single prompt text — wording, structure, examples, constraints. You can version both independently: a prompt v2.1 may be deployed against model GPT-4o, and later upgraded to GPT-4o + Claude 4.6 Sonnet without changing the prompt version number.',
          },
          {
            q: 'What is a good minimum test suite size for a production prompt?',
            a: 'Minimum 10 golden test cases per prompt — a mix of expected happy paths (4-5 cases), edge cases (3-4 cases), and failure modes (2-3 cases). Larger prompts handling complex tasks should have 20+ cases. Each case includes: input, expected output format, and expected behavior (e.g., "should flag hallucination risk if model makes factual claims").',
          },
          {
            q: 'How do I handle versioning when the same prompt is used across different models?',
            a: 'Use a single prompt version number, but test against all target models during the PR review stage. The version reflects prompt changes, not model changes. If a prompt works identically across GPT-4o and Claude 4.6 Sonnet, it\'s v1.0. If you later add Claude-specific syntax (thinking blocks), bump to v2.0. Track model compatibility separately from prompt versions.',
          },
          {
            q: 'Should every wording change bump the version?',
            a: 'Not necessarily. Use the rule: PATCH version bumps for clarifications and typo fixes that do not change output behavior. MINOR bumps for quality improvements (better reasoning, fewer hallucinations, faster response) that are backwards-compatible. MAJOR bumps only when output format, structure, or semantics break downstream parsing. A synonym change is a PATCH; a tone shift affecting behavior is MINOR.',
          },
          {
            q: 'What tools support prompt version control natively?',
            a: 'Git natively supports prompt versioning if you store prompts as text files. Specialized tools like Braintrust, Promptlayer, and Vellum add built-in versioning, comparison, and A/B testing. PromptQuorum supports multi-model comparison which helps identify breaking changes early. Choose based on your workflow: pure git if you have strong development practices, a tool if you want built-in rollback UI and version branching.',
          },
          {
            q: 'How do I roll back a prompt if I don\'t use git?',
            a: 'Use feature flags (easiest): deploy new prompt behind a flag, test in production, flip flag to rollback instantly. Use environment variables: store prompt in an env var, swap values to revert. Use a database: store prompt versions in a database table, query by version number. The slowest method is re-deploying old code, which takes minutes. Feature flags or env vars are recommended — rollback should take seconds.',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[How Teams Review Prompts: 7-Point Checklist & CI/CD Gates](/prompt-engineering/prompt-review-workflow-for-teams) — prompt review workflow with automated quality gates',
          '[Prompt Injection Vulnerabilities and How to Stop Them](/prompt-engineering/prompt-injection-and-security) — security checks during prompt PR review',
          '[Build Quality Checks for Prompt Output](/prompt-engineering/build-quality-checks) — automated regression tests for prompts',
          '[How to Detect and Prevent AI Hallucinations](/prompt-engineering/ai-hallucinations-how-to-stop) — detecting hallucinations during regression testing',
          '[RTF Framework: Structured Prompt Format](/prompt-engineering/rtf-framework) — structured format that simplifies versioning and parsing',
        ],
      },

      sources: {
        title: 'Sources',
        items: [
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Federal governance framework covering AI system traceability and change management',
          '[Git Documentation: git revert](https://git-scm.com/docs/git-revert) — official Git documentation for reverting commits',
          '[Semantic Versioning Specification](https://semver.org/) — official MAJOR.MINOR.PATCH specification',
          '[Braintrust: Prompt Versioning and A/B Testing](https://www.braintrust.dev/) — specialized tool for prompt management and testing',
          '[Promptlayer: Version Control for Prompts](https://www.promptlayer.com/) — platform with built-in prompt versioning and comparison',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt-Versionskontrolle: Semantische Versionierung, Git & Rollback (2026)',
    intro: '**Prompt-Versionskontrolle verfolgt jede Änderung an einem KI-Prompt unter Verwendung von semantischer Versionierung (MAJOR.MINOR.PATCH) und Git-Workflows.** Sie ermöglicht sofortiges Rollback, Team-Zusammenarbeit und Regressionserkennung — die gleiche Disziplin, die auf Code angewendet wird, auf Prompts angewendet. Dieser Leitfaden behandelt semantische Versionierungsschemas, Git-Branch-Workflows, Changelog-Format, Rollback-Strategien und automatisierte Testmuster für produktive Prompt-Systeme.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die KI-Prompts in der Produktion verwalten, Prompt Engineers, Engineering Team Leads',
    primaryTerm: 'Prompt-Versionskontrolle',
    toc: [
      { label: 'Stille Regressionen und warum Versionskontrolle sie verhindert', anchor: 'why-version-control' },
      { label: 'Semantische Versionierung für KI-Prompts', anchor: 'semantic-versioning' },
      { label: 'Git-Workflow für Prompt-Änderungen', anchor: 'git-workflow' },
      { label: 'Erforderliche Changelog-Felder', anchor: 'changelog' },
      { label: 'Rollback-Strategien', anchor: 'rollback' },
      { label: 'Team-Zusammenarbeit und Ownership', anchor: 'team-collaboration' },
      { label: 'Automatisiertes Testen vor dem Merge', anchor: 'automated-testing' },
      { label: 'Häufige Fehler bei der Prompt-Versionskontrolle', anchor: 'mistakes' },
      { label: 'Compliance- und Audit-Anforderungen für Prompt-Änderungen', anchor: 'regional-considerations' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Weiterführende Literatur', anchor: 'related-reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    seoTitle: 'Prompt-Versionskontrolle: Semantische Versionierung, Git & Rollback',
    metaDescription: 'Prompt-Versionskontrolle mit MAJOR.MINOR.PATCH, Git-Workflows, Changelogs, Rollback-Strategien und automatisierten Regressionstests. Vollständiger Produktions-Workflow.',
    readTime: '10 Min. Lesezeit',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt-Versionskontrolle: Semantische Versionierung, Git & Rollback (2026)',
      description: 'Versionskontrollierte Prompts verhindern stille Regressionen — kein Verlauf bedeutet kein Rollback. Wenden Sie MAJOR.MINOR.PATCH-Versionierung, Git-Branch-Workflows und automatisierte Regressionstests auf jede Prompt-Änderung an.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'de',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=de',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows', width: 1200, height: 630 },
      keywords: ['Prompt-Versionskontrolle', 'Prompt-Versionierung', 'Git-Workflow', 'semantische Versionierung', 'Prompt-Rollback', 'Changelog', 'Regressionstests'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Git' },
        { '@type': 'SoftwareApplication', name: 'GitHub' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
      ],
      about: [
        { '@type': 'Thing', name: 'Prompt-Versionskontrolle', description: 'Ein System, das jede Änderung an einem KI-Prompt mit MAJOR.MINOR.PATCH-Versionierung verfolgt, Rollback zu jeder vorherigen Version ermöglicht und Autor sowie Änderungsgrund dokumentiert.' },
        { '@type': 'Thing', name: 'Git-Workflow für Prompts', description: 'Eine Branching- und Review-Strategie, die Entwicklungspraktiken nachahmt — Feature Branches, Pull Requests, automatisierte Tests und Multi-Reviewer-Genehmigungstore.' },
        { '@type': 'Thing', name: 'Prompt-Rollback-Strategie', description: 'Ein Deployment-Mechanismus, der einen Prompt sofort über git revert, Feature Flags oder Umgebungsvariablen auf eine vorherige Version zurückführt.' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways']
      }
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'So richten Sie einen Git-Workflow für Prompt-Änderungen ein',
      inLanguage: 'de',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Erstellen Sie einen Feature Branch für Ihre Prompt-Änderung mit git checkout -b feature/description' },
        { '@type': 'HowToStep', position: 2, name: 'Bearbeiten Sie die Prompt-Datei und erhöhen Sie die Versionsnummer in der Header-Notiz (MAJOR.MINOR.PATCH)' },
        { '@type': 'HowToStep', position: 3, name: 'Führen Sie automatisierte Regressionstests gegen einen Golden Test Set mit mindestens 10 repräsentativen Eingaben durch' },
        { '@type': 'HowToStep', position: 4, name: 'Öffnen Sie einen Pull Request zur Überprüfung; Reviewer prüfen Klarheit, Halluzinationsrisiko, Ausgabeformat und Sicherheit' },
        { '@type': 'HowToStep', position: 5, name: 'Nach Genehmigung in main mergen und das Release mit git tag v2.0.0 -m description taggen' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Was ist Prompt-Versionskontrolle?',
          acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt mit semantischer Versionierung (MAJOR.MINOR.PATCH) verfolgt, sofortiges Rollback zu jeder vorherigen Version ermöglicht und dokumentiert, wer was geändert hat und warum. Es wendet Disziplin der Softwareentwicklung auf Prompt-Verwaltung an — behandelt Prompts als produktiven Code, der überprüft, getestet und versioniert werden muss.' },
        },
        {
          '@type': 'Question',
          name: 'Benötige ich ein separates Git-Repository für Prompts oder kann ich mein bestehendes App-Repository verwenden?',
          acceptedAnswer: { '@type': 'Answer', text: 'Beides funktioniert. Verwenden Sie ein Monorepo (einzelnes Repository), wenn Sie weniger als 50 Prompts haben und enge Kopplung zwischen Code und Prompts. Verwenden Sie ein separates Repository, wenn Sie 50+ Prompts haben, unabhängige Release-Zyklen wünschen oder mehrere Teams verschiedene Prompt-Mengen verwalten. Das Wichtigste ist, dass Prompts in einem dedizierten /prompts/ Verzeichnis mit einer Versionsdatei, Changelog und Test-Fixtures daneben leben — die Struktur ist wichtiger als die Repository-Wahl.' },
        },
        {
          '@type': 'Question',
          name: 'Wie unterscheidet sich Prompt-Versionierung von Modell-Versionierung?',
          acceptedAnswer: { '@type': 'Answer', text: 'Modell-Versionierung (GPT-4o vs Claude 4.6 Sonnet) handelt davon, welches zugrunde liegende KI-System Sie verwenden. Prompt-Versionierung handelt davon, Änderungen innerhalb eines einzelnen Prompt-Textes zu verfolgen — Formulierung, Struktur, Beispiele, Einschränkungen. Sie können beide unabhängig versionieren: Ein Prompt v2.1 kann gegen Modell GPT-4o bereitgestellt werden und später auf GPT-4o + Claude 4.6 Sonnet aktualisiert werden, ohne die Prompt-Versionsnummer zu ändern.' },
        },
        {
          '@type': 'Question',
          name: 'Welche minimale Größe eines Test-Sets ist gut für einen produktiven Prompt?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minimum 10 Golden Test Cases pro Prompt — eine Mischung aus erwarteten Happy Paths (4-5 Fälle), Edge Cases (3-4 Fälle) und Fehlermodi (2-3 Fälle). Größere Prompts, die komplexe Aufgaben verarbeiten, sollten 20+ Fälle haben. Jeder Fall umfasst: Eingabe, erwartetes Ausgabeformat und erwartetes Verhalten (z. B. „sollte Halluzinationsrisiko kennzeichnen, wenn das Modell sachliche Ansprüche macht").' },
        },
        {
          '@type': 'Question',
          name: 'Wie handhabe ich Versionierung, wenn derselbe Prompt über verschiedene Modelle verwendet wird?',
          acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie eine einzelne Prompt-Versionsnummer, aber testen Sie gegen alle Zielmodelle während der PR-Review-Phase. Die Version spiegelt Prompt-Änderungen wider, nicht Modell-Änderungen. Wenn ein Prompt identisch über GPT-4o und Claude 4.6 Sonnet funktioniert, ist es v1.0. Wenn Sie später Claude-spezifische Syntax hinzufügen (Thinking Blocks), erhöhen Sie auf v2.0. Verfolgen Sie Modell-Kompatibilität separat von Prompt-Versionen.' },
        },
        {
          '@type': 'Question',
          name: 'Sollte jede Formulierungsänderung die Version erhöhen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nicht unbedingt. Verwenden Sie die Regel: PATCH-Versionserhöhungen für Klarstellungen und Tippfehler, die Ausgabeverhalten nicht ändern. MINOR-Erhöhungen für Qualitätsverbesserungen (besseres Reasoning, weniger Halluzinationen, schnellere Antwort), die rückwärtskompatibel sind. MAJOR-Erhöhungen nur wenn Ausgabeformat, Struktur oder Semantik das Downstream-Parsing brechen. Ein Synonym-Austausch ist ein PATCH; ein Ton-Shift, der Verhalten beeinflusst, ist MINOR.' },
        },
        {
          '@type': 'Question',
          name: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Git unterstützt nativ Prompt-Versionierung, wenn Sie Prompts als Textdateien speichern. Spezialisierte Tools wie Braintrust, Promptlayer und Vellum fügen integrierte Versionierung, Vergleich und A/B-Testing hinzu. PromptQuorum unterstützt Multi-Modell-Vergleich, der beim Identifizieren von Breaking Changes hilft. Wählen Sie basierend auf Ihrem Workflow: reines Git, wenn Sie starke Entwicklungspraktiken haben; ein Tool, wenn Sie integrierte Rollback-UI und Version-Branching wünschen.' },
        },
        {
          '@type': 'Question',
          name: 'Wie führe ich ein Prompt-Rollback durch, wenn ich kein Git verwende?',
          acceptedAnswer: { '@type': 'Answer', text: 'Verwenden Sie Feature Flags (einfachste Methode): neuen Prompt hinter einem Flag bereitstellen, in Produktion testen, Flag umschalten zum Rollback in Sekunden. Verwenden Sie Umgebungsvariablen: Prompt in einer Env-Variable speichern, Werte zum Zurücksetzen austauschen. Verwenden Sie eine Datenbank: Prompt-Versionen in einer Datenbanktabelle speichern, nach Versionsnummer abfragen. Die langsamste Methode ist erneutes Bereitstellen von altem Code, was Minuten dauert. Feature Flags oder Umgebungsvariablen werden empfohlen — Rollback sollte Sekunden dauern.' },
        },
        {
          '@type': 'Question',
          name: 'Muss ich bei der Verwendung von Prompt-Versionskontrolle die DSGVO beachten?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ja. Die DSGVO Artikel 28 erfordert Rechenschaftspflicht bei der Verarbeitung personenbezogener Daten. Prompt-Versionskontrolle erfüllt diese Anforderung durch: (1) vollständige Audit-Trail aller Änderungen (wer, wann, was); (2) lokale Datenspeicherung durch Verwendung dedizierter Repositories; (3) Einhaltung von BSI-Grundschutz-Katalogen für IT-Sicherheit. Die Versionskontrolle selbst ist ein Compliance-Control — zeigen Sie Auditorén die Git-Historie und Sie erfüllen DSGVO-Anforderungen an Traceability und Dokumentation.' },
        },
        {
          '@type': 'Question',
          name: 'Ist Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?',
          acceptedAnswer: { '@type': 'Answer', text: 'Absolut. Mittelstand-Unternehmen profitieren besonders: (1) IT-Sicherheit ohne zusätzliche Kosten durch Git-basierte Kontrollen und Audit-Trails; (2) BSI-Grundschutz-Konformität durch dedizierte Prompt-Repositories und Versionshistorie; (3) schnelles Rollback bei Problemen — kritisch für kleine IT-Teams ohne 24/7-Support. Empfehlung: beginnen Sie mit einem Monorepo (einfacher Setup), implementieren Sie 2+ Reviewer-Approval Gates, automatisieren Sie Tests. Für größere Mittelstand-Betriebe (50+ Prompts) wechseln Sie zu einem separaten Prompt-Repository.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt-Rollback-Methoden',
      inLanguage: 'de',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Git Revert', description: 'Sofort (Sekunden), keine Ausfallzeit, erfordert git-basierte Bereitstellung. Am besten für die meisten Teams.' },
        { '@type': 'ListItem', position: 2, name: 'Feature Flag', description: 'Sofort (Sekunden), keine Ausfallzeit, erfordert aber Flag-Infrastruktur. Am besten, wenn Flags bereits bereitgestellt sind.' },
        { '@type': 'ListItem', position: 3, name: 'Umgebungsvariable', description: 'Sofort (Sekunden), mittleres Risiko, einfach zu implementieren. Am besten für Hotfixes.' },
      ],
    },
    quickFacts: [
      'Semantische Versionierung für Prompts: MAJOR bei Breaking Output Format Änderungen, MINOR bei Qualitätsverbesserungen, PATCH bei Tippfehler/Klarstellungen',
      'Ein Git Revert auf einen Prompt dauert Sekunden; erneutes Testen ohne Versionshistorie dauert Stunden',
      'Prompt Changelogs erfordern 5 Felder: Version, Datum, Autor, Änderungstyp (MAJOR/MINOR/PATCH) und erwartetes Output Delta',
      'Führen Sie automatisierte Regressionstests gegen ≥10 Golden Test Cases vor dem manuellen Review durch',
      'Drei Branching-Muster für Prompts: feature/ (neue Fähigkeit), fix/ (Regression), experiment/ (A/B Test)',
    ],
    sections: {
      tldr: {
        title: 'Zusammenfassung',
        isTldr: true,
        content: [
          '**TL;DR:** Versionskontrollierte Prompts verhindern stille Regressionen — wenn Ausgabequalität sinkt, gibt es keine Historie, um zu zeigen, was sich geändert hat. Versionieren Sie Prompts mit MAJOR.MINOR.PATCH-Semantik. Bereitstellen über Git: Feature Branch → PR → automatisierte Regressionstests → manuelle Überprüfung → Merge. Erfordern Sie 2+ Reviewer. Taggen Sie Releases: `git tag v2.0.0`. Ermöglichen Sie sofortiges Rollback über Git Revert (Sekunden) statt erneutes Testen (Stunden).',
        ],
        items: [
          'Versionskontrollierte Prompts verursachen stille Regressionen — Ausgabequalität sinkt, aber kein Error Log zeichnet die Änderung auf; Versionshistorie löst dies.',
          'Semantisches Versionierungsschema: MAJOR für Breaking Output Format Änderungen (JSON → Markdown), MINOR für Qualitätsverbesserungen (besseres Reasoning), PATCH für Tippfehler.',
          'Speichern Sie Prompts in einem dedizierten /prompts/ Verzeichnis mit Versionsdateien, Test-Fixtures und Changelogs daneben.',
          'Git-Workflow: Feature Branch → Prompt bearbeiten + Version erhöhen → automatisierte Tests (≥10 Golden Cases) → PR öffnen → 2+ Reviewer-Genehmigung → Merge + Tag Release.',
          'Automatisierte Regressionstests müssen validieren: Ausgabeformat (JSON-Konformität), Qualität (Halluzinations-Flags) und Latenz (Response Time unter Schwellwert).',
          'Drei Rollback-Methoden: Git Revert (sofort, bevorzugt), Feature Flags (keine Ausfallzeit, wenn bereitgestellt), Umgebungsvariablen (einfach, aber mittleres Risiko).',
          'Team-Muster: einen Prompt-Owner pro Feature-Bereich zuordnen; alle Änderungen erfordern die Genehmigung des Owners; Monorepo für enge Kopplung, separates Repository für 50+ Prompts.',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Stille Regressionen und warum Versionskontrolle sie verhindert',
        content: [
          '**Versionskontrollierte Prompts verhindern stille Regressionen — wenn Ausgabequalität sinkt, gibt es keine Historie, um zu zeigen, was sich geändert hat.** In Software wirft ein Laufzeitfehler eine Exception aus. Bei Prompts sinkt die Ausgabequalität allmählich: Reasoning wird weniger kohärent, Halluzinationen nehmen zu, Format-Konformität bricht. Ohne Versionshistorie ist die Regression nicht erkennbar, bis sie Produktion erreicht und Nutzererlebnis beschädigt. Siehe [Halluzinationen erkennen und verhindern](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) für Erkennungsstrategien.',
          'Drei Fehlermodi treten ohne Versionskontrolle auf: (1) **Stille Qualitätsabnahme** — eine Synonym-Änderung, die harmlos wirkte, schadet tatsächlich dem Reasoning. Kein Error Log. Keine Benachrichtigung. Qualitätsmetriken sinken allmählich und niemand bemerkt, dass eine Prompt-Änderung dies verursachte. (2) **Format-Bruch** — Ausgabe ändert sich von JSON zu Markdown und Downstream-Parser scheitern stillschweigend. (3) **Kollaborationskonflikte** — zwei Ingenieure bearbeiten gleichzeitig denselben Prompt, einer überschreibt die Änderungen des anderen, ohne es zu bemerken.',
          'Versionskontrolle löst alle drei, indem sie jede Änderung dokumentiert, sofortiges Rollback ermöglicht und Review-Gates durchsetzt. Wenn eine Regression auftritt, können Sie den Prompt gegen die vorherige Version in Sekunden vergleichen und die genaue Änderung identifizieren, die es brach.'
        ],
        callouts: [
          { type: 'Warning', label: 'Stille Fehler', text: 'Prompts scheitern still. Kein Error Log, keine Exception. Ausgabequalitäts-Degradation ist unsichtbar, bis sie das Nutzererlebnis in Produktion beschädigt. Git-Log ist Ihre einzige Audit-Trail.' },
          { type: 'Did You Know', label: 'Synonym-Risiko', text: 'Die Änderung von „wichtigster Grund" zu „Primärfaktor" kann Reasoning-Qualität für 5-10% der Eingaben verändern. Ein Synonym-Austausch, der sicher wirkte, brach Produktion — Versionshistorie enthüllte es in Minuten.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt verfolgt, Rollback zu jeder vorherigen Version ermöglicht und den Autor sowie den Grund für jede Änderung dokumentiert.' },
          { type: 'in-plain-terms', text: 'Behandeln Sie Prompts wie Code: jede Änderung durchläuft einen PR, wird getestet, erfordert Genehmigung und wird mit einer Versionsnummer getaggt. Wenn etwas kaputtgeht, Git Revert in Sekunden statt erneutes Testen für Stunden.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'Semantische Versionierung für KI-Prompts',
        content: [
          '**Prompt-Semantische Versionierung verwendet MAJOR.MINOR.PATCH — eine Breaking Output Format Änderung erhöht MAJOR, eine Qualitätsverbesserung erhöht MINOR und ein Tippfehler-Fix erhöht PATCH.** Das Schema ist identisch mit semantischer Versionierung für Code, aber angewendet auf Prompt-Text statt Software-Versionen.',
          'Die Versionierungsregel ist einfach: Wenn ein Downstream-System (ein Parser, eine API oder ein Nutzer, der ein bestimmtes Format erwartet) brechen würde, erhöhen Sie MAJOR. Wenn Ausgabe verbessert sich, bleibt aber kompatibel, erhöhen Sie MINOR. Wenn die Änderung für Nutzer transparent ist (Tippfehler-Fix, Absicht klarstellen), erhöhen Sie PATCH.',
        ],
        columns: ['Änderungstyp', 'Wann erhöhen', 'Beispiel', 'Rückwärtskompatibel?'],
        rows: [
          { 'Änderungstyp': 'MAJOR', 'Wann erhöhen': 'Breaking Output Format Änderung', 'Beispiel': 'Ausgabe von „F: ... A: ..." zu JSON {„frage": „...", „antwort": „..."} ändern', 'Rückwärtskompatibel?': 'Nein' },
          { 'Änderungstyp': 'MINOR', 'Wann erhöhen': 'Qualitätsverbesserung (besseres Reasoning, weniger Halluzinationen, schnellere Latenz)', 'Beispiel': 'Few-Shot-Beispiele hinzufügen, um Halluzinationen zu reduzieren, ohne Format zu ändern', 'Rückwärtskompatibel?': 'Ja' },
          { 'Änderungstyp': 'PATCH', 'Wann erhöhen': 'Tippfehler-Fixes, Klarstellungen, Formulierungsänderungen, die Verhalten nicht beeinflussen', 'Beispiel': 'Ändern von „kurz zusammenfassen" zu „in 2-3 Sätzen zusammenfassen"', 'Rückwärtskompatibel?': 'Ja' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Key Point', label: 'MAJOR-Trigger', text: 'Erhöhen Sie MAJOR, wenn Downstream-Systeme, die Ausgabe analysieren, brechen würden: Format-Änderung (Markdown → JSON), Struktur-Änderung (einzelne Zeichenkette → Array) oder semantische Änderung (Anweisung ändert Bedeutung). Zur Durchsetzung von Schema-Konformität siehe [strukturierte Ausgabe und JSON Mode](/prompt-engineering/structured-output-json-mode?lang=de).' },
          { type: 'Pro Tip', label: 'Releases in Git taggen', text: 'Nach dem Merge einer Prompt-Änderung, taggen Sie die Version: git tag v2.1.0 -m „Verbessertes Datum Reasoning via Few-Shot-Beispiele". Referenzieren Sie das Tag in Changelogs und Deployment-Docs.' },
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'MAJOR = Kunden bemerken es und ihre Systeme brechen. MINOR = Kunden bemerken es, bleiben aber kompatibel. PATCH = Kunden bemerken es nicht.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'Git-Workflow für Prompt-Änderungen',
        content: [
          '**Ein kompletter Git-Workflow für Prompts folgt den gleichen 5 Schritten wie Code: Feature Branch → bearbeiten & testen → PR → Überprüfung → Merge → Tag Release.** Der Workflow verhindert stille Regressionen, ermöglicht Zusammenarbeit und dokumentiert jede Änderung.',
        ],
        numberedItems: [
          'Erstellen Sie einen Feature Branch: `git checkout -b feature/add-json-output` oder `fix/date-hallucination`. Verwenden Sie beschreibende Namen.',
          'Bearbeiten Sie die Prompt-Datei. Aktualisieren Sie die Versionsnummer in einer Header-Notiz: v1.0.0 → v2.0.0 (wenn MAJOR-Änderung). Fügen Sie Test Cases zu /prompts/tests/ hinzu.',
          'Führen Sie automatisierte Regressionstests aus: `npm run test:prompts`. Muss Format-Validierung, Golden-Set-Vergleich und Halluzinations-Checks bestehen. ≥10 Test Cases erforderlich.',
          'Öffnen Sie einen Pull Request. Reviewer prüfen: Klarheit (ist die Absicht eindeutig?), Halluzinations-Risiko (sachliche Ansprüche ohne Quellen?), Format-Konformität (passt Ausgabe zu Schema?), Sicherheit (Injection-Vektoren?). Verwenden Sie die [7-Punkt Prompt-Review-Checkliste](/prompt-engineering/prompt-review-workflow-for-teams?lang=de) für standardisierte Kriterien.',
          'Nach Genehmigung von 2+ Reviewern, mergen Sie zu main. Taggen Sie das Release: `git tag v2.0.0 -m „Verbessertes Date Handling via Few-Shot-Beispiele"`. Bereitstellen automatisch via CI/CD.',
        ],
        codeBlock: `name: Prompt Regression Tests
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt tests
        run: npm run test:prompts -- --coverage
      - name: Validate format
        run: npm run test:format -- prompts/
      - name: Check hallucination flags
        run: npm run test:hallucination -- prompts/`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Verzeichnisstruktur', text: 'Speichern Sie Prompts in /prompts/ mit Test-Fixtures daneben: /prompts/my-prompt.txt, /prompts/tests/my-prompt.golden.json, /prompts/CHANGELOG.md. Halten Sie Version in Notiz oben in der Prompt-Datei.' },
          { type: 'Best Practice', label: 'Approval Gates', text: 'Erfordern Sie 2+ Genehmigungen für produktive Prompts: eine vom Domain Expert (versteht Absicht) und eine vom Test Engineer (validiert Test-Abdeckung). Verwenden Sie Branch Protection Rules in GitHub.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'Erforderliche Changelog-Felder',
        content: [
          '**Ein Prompt Changelog dokumentiert jede Versionsänderung, wann sie passierte, wer sie machte und warum.** Ein Changelog-Eintrag erfordert 5 Felder: Versionsnummer, Release-Datum, Autor, Änderungstyp (MAJOR/MINOR/PATCH) und eine Zusammenfassung des erwarteten Output Delta.',
        ],
        columns: ['Feld', 'Erforderlich', 'Beispiel'],
        rows: [
          { 'Feld': 'version', 'Erforderlich': 'Ja', 'Beispiel': 'v2.1.0' },
          { 'Feld': 'date', 'Erforderlich': 'Ja', 'Beispiel': '2026-04-30' },
          { 'Feld': 'author', 'Erforderlich': 'Ja', 'Beispiel': 'alice@company.com' },
          { 'Feld': 'change_type', 'Erforderlich': 'Ja', 'Beispiel': 'MINOR (Qualitätsverbesserung)' },
          { 'Feld': 'summary', 'Erforderlich': 'Ja', 'Beispiel': '3 Few-Shot-Beispiele hinzugefügt, um Halluzinationen bei datumbasierten Fragen zu reduzieren. Ausgabeformat unverändert.' },
        ],
        tableFormat: true,
        codeBlock: `# Changelog

## v2.1.0 — 2026-04-30 (alice@company.com) — MINOR

**Änderung:** 3 Few-Shot-Beispiele hinzugefügt, um Halluzinationen bei datumbasierten Fragen zu reduzieren.
**Output Delta:** Format unverändert (immer noch JSON). Qualitätsverbesserung: Halluzinations-Rate sank von 8% auf 2% bei Date-Parsing Test Set.
**Rückwärtskompatibel:** Ja. Bestehende Systeme nicht betroffen.
**PR:** #1427

## v2.0.0 — 2026-04-28 (bob@company.com) — MAJOR

**Änderung:** Output-Format von Markdown („F: ... A: ...") zu JSON ({„frage": „...", „antwort": „..."}) gewechselt.
**Output Delta:** Format GEÄNDERT. Alle Downstream Parser müssen aktualisiert werden.
**Rückwärtskompatibel:** Nein. Erfordert Deployment-Koordination.
**PR:** #1425`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: 'Changelog VOR Prompt-Änderung schreiben', text: 'Schreiben Sie den CHANGELOG.md-Eintrag zuerst — dies erzwingt Klarheit. Wenn Sie in 2 Sätzen nicht erklären können, warum diese Änderung wichtig ist, ist die Änderung selbst wahrscheinlich unnötig. Changelog-Klarheit = Code-Klarheit.' },
          { type: 'Key Point', label: '5-Feld Minimum', text: 'Jeder Changelog-Eintrag muss alle 5 Felder enthalten. Wenn Sie es nicht dokumentieren können, stellen Sie es nicht bereit.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'Rollback-Strategien',
        content: [
          '**Git Revert ist die Standard-Rollback-Methode — es dauert Sekunden und hat null Risiko.** Kennen Sie die 3 Trigger für Rollback: Produktions-Qualitätsabfall (Halluzinations-Rate spikt), Sicherheitsproblem entdeckt oder Modell-Inkompatibilität (neues Modell funktioniert nicht mit diesem Prompt).',
        ],
        items: [
          'Trigger: Produktions-Halluzinations-Rate springt von 2% auf 8% nach v2.1 Bereitstellung',
          'Trigger: v2.0 Output-Format bricht Downstream Parser (5% der Requests scheitern)',
          'Trigger: Sicherheits-Bug gefunden — Prompt ist anfällig für Injection-Angriff',
          'Trigger: neues Modell (Claude 5.0) inkompatibel mit Prompt-Struktur; Revert und Überarbeiten',
        ],
        columns: ['Rollback-Methode', 'Geschwindigkeit', 'Risiko', 'Wann verwenden'],
        rows: [
          { 'Rollback-Methode': 'git revert v2.1.0', 'Geschwindigkeit': 'Sekunden (sofort)', 'Risiko': 'Niedrig (committed ein Revert Commit)', 'Wann verwenden': 'Standard für alle Rollbacks. Erfordert git-basierte Bereitstellung.' },
          { 'Rollback-Methode': 'Feature Flag OFF', 'Geschwindigkeit': 'Sekunden (Flag umschalten)', 'Risiko': 'Null (keine Bereitstellung erforderlich)', 'Wann verwenden': 'Wenn Feature Flags bereits bereitgestellt. Am besten für null Ausfallzeit Rollback.' },
          { 'Rollback-Methode': 'Umgebungsvariable austauschen', 'Geschwindigkeit': 'Sekunden (Env neu bereitstellen)', 'Risiko': 'Mittel (Konfigurationsfehlrisiko)', 'Wann verwenden': 'Hotfix, wenn Flag-Infrastruktur nicht verfügbar. Nicht für Produktion empfohlen.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Warning', label: 'Vor Rollback testen', text: 'Vor dem Revert, immer Regressionstests gegen das Golden Set durchführen. Rollback könnte einen vorher behobenen Bug reintroduzieren, wenn Sie nicht vorsichtig sind. Ein Rollback ist genauso riskant wie ein Deploy, wenn ungetestet.' },
          { type: 'Pro Tip', label: 'Rollback-Entscheidung automatisieren', text: 'Richten Sie automatisierte Rollback-Trigger ein: wenn Halluzinations-Rate >50% über Baseline spikt, automatisch Git Revert triggern und das Team benachrichtigen. Nicht auf manuelle Entscheidung warten.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Rollback ist Git Revert: ein neuer Commit, der einen vorherigen Commit rückgängig macht. Null Ausfallzeit, sofort, immer sicher, wenn die vorherige Version getestet war.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'Team-Zusammenarbeit und Ownership',
        content: [
          '**Ein Prompt-Ownership-Modell verhindert Merge Konflikte und setzt klare Verantwortung durch.** Ordnen Sie einen Prompt-Owner pro Feature-Bereich zu; alle Änderungen gehen durch die Überprüfung dieses Owners. Für große Teams verhindern separate Repos gleichzeitiges Bearbeiten desselben Prompts.',
        ],
        items: [
          'Monorepo (empfohlen für <50 Prompts): einzelnes Git Repo, ein /prompts/ Verzeichnis. Jeder Prompt-Owner hat Vetorecht über Änderungen an seinen Prompts. Ermöglicht enge Kopplung mit Code.',
          'Separates Prompt-Repository (empfohlen für 50+ Prompts): dediziertes Repo für alle Prompts. Mehrere Teams verwalten verschiedene Prompt-Mengen unabhängig. Release-Zyklen entkoppeln sich vom Anwendungscode. Für das vollständige Ownership-Modell siehe [Prompt Engineering Setup für kleine Teams](/prompt-engineering/prompt-engineering-setup-small-teams?lang=de).',
          'Ownership-Regeln: ein Ingenieur pro Prompt (Primary Owner). Secondary Reviewer Rolle (Querkontrolle). Kein Merge zu main ohne Primary Owner Genehmigung. Änderungen am Prompt eines anderen Ingenieurs erfordern explizite Erlaubnis.',
          'Konflikt-Prävention: verschiedene Ingenieure besitzen verschiedene Prompts. Wenn zwei Ingenieure denselben Prompt ändern müssen, koordinieren Sie offline zuerst oder ordnen Sie einen Single Owner zu.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Ownership zuordnen', text: 'Deklarieren Sie Prompt-Ownership in Code-Kommentaren: „# Owner: alice@company.com" oben in jedem Prompt. Auto-Tag den Owner auf PRs. Ownership = Verantwortung.' },
          { type: 'Key Point', label: 'Vermeiden Sie gemeinsames Ownership', text: 'Zwei Ingenieure besitzen einen Prompt = Merge Konflikte und Fingerpointing. Ordnen Sie einen Owner pro Prompt zu, auch wenn dies bedeutet, dass jemand ein neues Gebiet lernen muss.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'Automatisiertes Testen vor dem Merge',
        content: [
          '**Automatisierte Tests validieren Format, Qualität und Latenz, bevor ein Prompt PR von Menschen überprüft wird.** Vier Test-Typen fangen verschiedene Fehlerklassen: Format-Validierung (JSON-Konformität), Golden Set Vergleich (Output Übereinstimmung), Halluzinations-Flags (sachliche Ansprüche) und Latenz-Checks (Geschwindigkeits-Regression).',
        ],
        items: [
          'Format-Validierung: Output als JSON analysieren, Schema validieren, alle erforderlichen Felder vorhanden. Fängt Breaking Format Änderungen (MAJOR Versionsbumps). Läuft in <1 Sekunde.',
          'Golden Set Vergleich: Prompt gegen 10-20 repräsentative Test-Eingaben laufen. Output gegen bekannt-gute Antworten vergleichen. Fängt Qualitäts-Regressionen (Reasoning Degradation, Accuracy Drop). Siehe [Prompt Evaluation Metrics](/prompt-engineering/prompt-evaluation-metrics?lang=de) für Bewertungsmethoden über binären Pass/Fail hinaus. Läuft in 5-10 Sekunden.',
          'Halluzinations-Erkennung: alle sachlichen Ansprüche (Daten, Zahlen, Produktnamen) ohne Bereitstellung von Quellmaterial kennzeichnen. Fängt unbeabsichtigte Halluzinations-Risiken. Läuft in <1 Sekunde.',
          'Latenz-Check: Prompt-Response-Time messen. Benachrichtigung wenn Latenz >10% über Baseline spikt. Fängt Performance-Regressionen von hinzugefügten Reasoning-Schritten. Läuft in Echtzeit.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Minimum Test-Abdeckung', text: 'Ein Golden Test Set von 10–20 repräsentativen Eingaben ist das absolute Minimum. Größere Prompts, die komplexe Aufgaben verarbeiten, sollten 20-50+ Fälle haben. Jeder Fall umfasst Eingabe, erwartetes Format und erwartetes Verhalten.' },
          { type: 'Pro Tip', label: 'Use LLM-as-Judge', text: 'Für Qualitäts-Bewertung, verwenden Sie ein anderes LLM, um zu beurteilen, ob Output Erwartungen erfüllt (z. B. „beantwortet dies die Frage genau?"). Robuster als Keyword-Matching.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Häufige Fehler bei der Prompt-Versionskontrolle',
        content: [],
        mistakes: [
          {
            mistake: 'Kein Versionierungsschema — Prompts ändern sich, aber Versionen bleiben gleich',
            problem: 'Stille Breaking Changes. Wenn Output-Format Downstream Parser bricht, wissen Sie nicht, welche Version den Bug einführte. Rollback ist unmöglich ohne manuelle Tests jeder früheren Version.',
            fix: 'Adoptieren Sie MAJOR.MINOR.PATCH von Tag eins. Taggen Sie jedes Release: git tag v1.0.0. Aktualisieren Sie Version in Prompt-Datei Header bei jeder Änderung. Changelog-Eintrag ist vor dem Merge erforderlich.',
          },
          {
            mistake: 'Speichern von Prompts in Anwendungscode (Inline-Strings)',
            problem: 'Können Prompts nicht separat überprüfen. Änderungen in Code PRs begraben. Keine Versionshistorie. Kann Prompt nicht zurückrollen ohne Neubereitstellung von Code. Team-Zusammenarbeit unmöglich.',
            fix: 'Verschieben Sie Prompts zu dedizierten /prompts/ Verzeichnis. Speichern Sie als Textdateien. Importieren Sie in Code. Separate Git-Historien für Prompts und Code. Ermöglicht unabhängige Überprüfung und Versionierung.',
          },
          {
            mistake: 'Kein Changelog — Versionsnummer bumpt aber kein Datensatz was sich geändert hat',
            problem: 'Sie haben v2.0 vor einer Woche freigegeben. Output ist jetzt kaputt. War es die Format-Änderung oder die Few-Shot-Beispiele? Keine Möglichkeit zu wissen ohne jede Version gegen die nächste zu vergleichen.',
            fix: 'Erfordern Sie CHANGELOG.md Eintrag für jeden PR. 5 Felder Minimum: Version, Datum, Autor, Änderungstyp, Zusammenfassung. Schreiben Sie es vor der Prompt-Änderung — erzwingt Klarheit der Absicht.',
          },
          {
            mistake: 'Testen nur des Happy Path — keine Edge Cases',
            problem: 'Golden Test Set hat 3 Fälle: Happy Path (funktioniert fein). Freigabe v2.0. In Produktion, 5% der Eingaben treffen Edge Cases und Output-Format bricht. Jetzt zurückgerollt. Wasted a day.',
            fix: 'Minimum 10 Golden Test Cases: 4-5 Happy Paths, 3-4 Edge Cases, 2-3 Failure Modes (z. B. „was wenn die Antwort unbekannt ist?"). Decken Sie 80% der realen Input-Verteilung ab.',
          },
          {
            mistake: 'Rollback ohne Testen — alte Version zurückrollen ohne Regressions-Validierung',
            problem: 'v2.0 ist kaputt. Revert zu v1.5. Aber v1.5 hatte einen Halluzinations-Bug, der in v1.6 behoben wurde, dann wieder in v2.0 eingeführt wurde. Jetzt sehen Nutzer den alten Halluzinations-Bug. Bad Rollback.',
            fix: 'Führen Sie immer das Golden Test Suite vor dem Merge eines Rollbacks aus. Ein Rollback ist ein Deploy wie jedes andere — behandeln Sie es so. Nicht Testen überspringen, weil es sich „sicher" anfühlt.',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Compliance- und Audit-Anforderungen für Prompt-Änderungen',
        content: [
          'Versionskontrolle und Changelogs erfüllen regulatorische Audit-Anforderungen. Die DSGVO erfordert Rechenschaftspflicht bei der Verarbeitung personenbezogener Daten — Versionshistorie und Changelog bieten einen vollständigen Audit-Trail. Artikel 22 DSGVO gilt für Prompts, die automatisierte Entscheidungen treffen (Kreditentscheidungen, Content Moderation); vollständige Versionshistorie ist für 12+ Monate erforderlich.',
          'Gesundheitswesen und Finanzen: alle Prompt-Versionen und Changelogs müssen für 7+ Jahre (Gesundheitswesen) oder unbegrenzt (regulierte Finanzen) aufbewahrt werden. Verwenden Sie Git + CHANGELOG.md, um jede Änderung zu dokumentieren. Wenn Auditors fragen „wann haben Sie diesen Prompt geändert und warum?" können Sie den genauen Commit, Datum, Autor und Begründung in Sekunden zeigen.',
          'Sensitive Bereiche: erwägen Sie Code-Signing von Prompts (GPG signieren Sie jeden Git Commit). Ermöglicht kryptographischen Beweis der Urheberschaft. Erfüllt Non-Repudiation-Anforderungen für regulierte Industrien. BSI-Grundschutz-Kataloge und Mittelstand-Konformität: Die Aufrechterhaltung einer kompletten Audit-Trail mit Git-Versionskontrolle und Changelogs ist ein wesentliches Sicherheits-Control, das BSI-Grundschutz erfüllt. Besonders für deutsche Mittelstand-Unternehmen ist dies eine kostengünstige Weise, IT-Compliance ohne teure externe Tools zu demonstrieren.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist Prompt-Versionskontrolle?',
            a: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt mit semantischer Versionierung (MAJOR.MINOR.PATCH) verfolgt, sofortiges Rollback zu jeder vorherigen Version ermöglicht und dokumentiert, wer was geändert hat und warum. Es wendet Disziplin der Softwareentwicklung auf Prompt-Verwaltung an — behandelt Prompts als produktiven Code, der überprüft, getestet und versioniert werden muss.',
          },
          {
            q: 'Benötige ich ein separates Git-Repository für Prompts oder kann ich mein bestehendes App-Repository verwenden?',
            a: 'Beides funktioniert. Verwenden Sie ein Monorepo (einzelnes Repository), wenn Sie weniger als 50 Prompts haben und enge Kopplung zwischen Code und Prompts. Verwenden Sie ein separates Repository, wenn Sie 50+ Prompts haben, unabhängige Release-Zyklen wünschen oder mehrere Teams verschiedene Prompt-Mengen verwalten. Das Wichtigste ist, dass Prompts in einem dedizierten /prompts/ Verzeichnis mit Versionsdatei, Changelog und Test-Fixtures daneben leben — die Struktur ist wichtiger als die Repository-Wahl.',
          },
          {
            q: 'Wie unterscheidet sich Prompt-Versionierung von Modell-Versionierung?',
            a: 'Modell-Versionierung (GPT-4o vs Claude 4.6 Sonnet) handelt davon, welches zugrunde liegende KI-System Sie verwenden. Prompt-Versionierung handelt davon, Änderungen innerhalb eines einzelnen Prompt-Textes zu verfolgen — Formulierung, Struktur, Beispiele, Einschränkungen. Sie können beide unabhängig versionieren: ein Prompt v2.1 kann gegen Modell GPT-4o bereitgestellt werden und später auf GPT-4o + Claude 4.6 Sonnet aktualisiert werden, ohne die Prompt-Versionsnummer zu ändern.',
          },
          {
            q: 'Welche minimale Größe eines Test-Sets ist gut für einen produktiven Prompt?',
            a: 'Minimum 10 Golden Test Cases pro Prompt — eine Mischung aus erwarteten Happy Paths (4-5 Fälle), Edge Cases (3-4 Fälle) und Failure Modes (2-3 Fälle). Größere Prompts, die komplexe Aufgaben verarbeiten, sollten 20+ Fälle haben. Jeder Fall umfasst: Eingabe, erwartetes Ausgabeformat und erwartetes Verhalten (z. B. „sollte Halluzinationsrisiko kennzeichnen, wenn das Modell sachliche Ansprüche macht").',
          },
          {
            q: 'Wie handhabe ich Versionierung, wenn derselbe Prompt über verschiedene Modelle verwendet wird?',
            a: 'Verwenden Sie eine einzelne Prompt-Versionsnummer, aber testen Sie gegen alle Zielmodelle während der PR-Review-Phase. Die Version spiegelt Prompt-Änderungen wider, nicht Modell-Änderungen. Wenn ein Prompt identisch über GPT-4o und Claude 4.6 Sonnet funktioniert, ist es v1.0. Wenn Sie später Claude-spezifische Syntax hinzufügen (Thinking Blocks), erhöhen Sie auf v2.0. Verfolgen Sie Modell-Kompatibilität separat von Prompt-Versionen.',
          },
          {
            q: 'Sollte jede Formulierungsänderung die Version erhöhen?',
            a: 'Nicht unbedingt. Verwenden Sie die Regel: PATCH-Versionsbumps für Klarstellungen und Tippfehler, die Ausgabeverhalten nicht ändern. MINOR-Bumps für Qualitätsverbesserungen (besseres Reasoning, weniger Halluzinationen, schnellere Response), die rückwärtskompatibel sind. MAJOR-Bumps nur wenn Ausgabeformat, Struktur oder Semantik das Downstream-Parsing brechen. Ein Synonym-Austausch ist ein PATCH; ein Ton-Shift, der Verhalten beeinflusst, ist MINOR.',
          },
          {
            q: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?',
            a: 'Git unterstützt nativ Prompt-Versionierung, wenn Sie Prompts als Textdateien speichern. Spezialisierte Tools wie Braintrust, Promptlayer und Vellum fügen integrierte Versionierung, Vergleich und A/B-Testing hinzu. PromptQuorum unterstützt Multi-Modell-Vergleich, der bei der Identifizierung von Breaking Changes hilft. Wählen Sie basierend auf Ihrem Workflow: reines Git, wenn Sie starke Entwicklungspraktiken haben; ein Tool, wenn Sie integrierte Rollback-UI und Version-Branching wünschen.',
          },
          {
            q: 'Wie führe ich ein Prompt-Rollback durch, wenn ich kein Git verwende?',
            a: 'Verwenden Sie Feature Flags (einfachste Methode): neuen Prompt hinter einem Flag bereitstellen, in Produktion testen, Flag umschalten zum Rollback in Sekunden. Verwenden Sie Umgebungsvariablen: Prompt in einer Env-Variable speichern, Werte zum Zurücksetzen austauschen. Verwenden Sie eine Datenbank: Prompt-Versionen in einer Datenbanktabelle speichern, nach Versionsnummer abfragen. Die langsamste Methode ist Neubereitstellung von altem Code, was Minuten dauert. Feature Flags oder Env-Variablen werden empfohlen — Rollback sollte Sekunden dauern.',
          },
          {
            q: 'Muss ich bei der Verwendung von Prompt-Versionskontrolle die DSGVO beachten?',
            a: 'Ja. Die DSGVO Artikel 28 erfordert Rechenschaftspflicht bei der Verarbeitung personenbezogener Daten. Prompt-Versionskontrolle erfüllt diese Anforderung durch: (1) vollständige Audit-Trail aller Änderungen (wer, wann, was); (2) lokale Datenspeicherung durch Verwendung dedizierter Repositories; (3) Einhaltung von BSI-Grundschutz-Katalogen für IT-Sicherheit. Die Versionskontrolle selbst ist ein Compliance-Control — zeigen Sie Auditors die Git-Historie und Sie erfüllen DSGVO-Anforderungen an Traceability und Dokumentation.',
          },
          {
            q: 'Ist Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?',
            a: 'Absolut. Mittelstand-Unternehmen profitieren besonders: (1) IT-Sicherheit ohne zusätzliche Kosten durch Git-basierte Kontrollen und Audit-Trails; (2) BSI-Grundschutz-Konformität durch dedizierte Prompt-Repositories und Versionshistorie; (3) schnelles Rollback bei Problemen — kritisch für kleine IT-Teams ohne 24/7-Support. Empfehlung: beginnen Sie mit einem Monorepo (einfacherer Setup), implementieren Sie 2+ Reviewer-Approval Gates, automatisieren Sie Tests. Für größere Mittelstand-Betriebe (50+ Prompts) wechseln Sie zu einem separaten Prompt-Repository.',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[So überprüfen Teams Prompts: 7-Punkt-Checkliste & CI/CD Gates](/prompt-engineering/prompt-review-workflow-for-teams?lang=de) — Prompt-Review-Workflow mit automatisierten Qualitäts-Gates',
          '[Prompt Injection Schwachstellen und wie man sie stoppt](/prompt-engineering/prompt-injection-and-security?lang=de) — Sicherheitschecks während Prompt-PR-Überprüfung',
          '[Qualitäts-Checks für Prompt-Ausgabe erstellen](/prompt-engineering/build-quality-checks?lang=de) — automatisierte Regressionstests für Prompts',
          '[Halluzinationen erkennen und verhindern](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) — Halluzinationen während Regressions-Testen erkennen',
          '[RTF Framework: Strukturiertes Prompt-Format](/prompt-engineering/rtf-framework?lang=de) — strukturiertes Format, das Versionierung und Parsing vereinfacht',
        ],
      },

      sources: {
        title: 'Quellen',
        items: [
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — Bundesrichtlinienrahmen für AI-Systemverfolgbarkeit und Änderungsverwaltung',
          '[Git Dokumentation: git revert](https://git-scm.com/docs/git-revert) — offizielle Git-Dokumentation zum Zurücksetzen von Commits',
          '[Semantic Versioning Specification](https://semver.org/) — offizielle MAJOR.MINOR.PATCH Spezifikation',
          '[Braintrust: Prompt Versioning and A/B Testing](https://www.braintrust.dev/) — spezialisiertes Tool für Prompt-Verwaltung und Tests',
          '[Promptlayer: Version Control for Prompts](https://www.promptlayer.com/) — Plattform mit integrierter Prompt-Versionierung und Vergleich',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Versionner ses Prompts : Versioning Sémantique, Git & Rollback (2026)',
    intro: '**Le contrôle de version des prompts suit chaque modification d\'un prompt IA en utilisant le versioning sémantique (MAJOR.MINOR.PATCH) et les workflows Git.** Il permet une restauration instantanée, la collaboration d\'équipe et la détection de régressions — la même discipline appliquée au code, appliquée aux prompts. Ce guide couvre les schémas de versioning sémantique, les workflows de branche Git, le format changelog, les stratégies de rollback et les modèles de test automatisé pour les systèmes de prompts en production.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Développeurs gérant les prompts LLM en production, ingénieurs en prompt engineering, chefs d\'équipe technique',
    primaryTerm: 'Contrôle de version des prompts',
    toc: [
      { label: 'Les régressions silencieuses et pourquoi le contrôle de version les prévient', anchor: 'why-version-control' },
      { label: 'Versioning sémantique pour les prompts IA', anchor: 'semantic-versioning' },
      { label: 'Workflow Git pour les modifications de prompts', anchor: 'git-workflow' },
      { label: 'Champs de changelog requis', anchor: 'changelog' },
      { label: 'Stratégies de rollback', anchor: 'rollback' },
      { label: 'Collaboration en équipe et propriété', anchor: 'team-collaboration' },
      { label: 'Tests automatisés avant fusion', anchor: 'automated-testing' },
      { label: 'Erreurs courantes du contrôle de version des prompts', anchor: 'mistakes' },
      { label: 'Conformité et exigences d\'audit pour les modifications de prompts', anchor: 'regional-considerations' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Lectures connexes', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    seoTitle: 'Versionner Prompts : Versioning Sémantique, Git & Rollback',
    metaDescription: 'Versionning de prompts avec MAJOR.MINOR.PATCH, workflows Git, changelogs, stratégies de rollback et tests de régression automatisés. Workflow complet.',
    readTime: '10 min de lecture',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Versionner ses Prompts : Versioning Sémantique, Git & Rollback (2026)',
      description: 'Les prompts sans version échouent silencieusement — pas d\'historique signifie pas de rollback. Appliquez le versioning MAJOR.MINOR.PATCH, les workflows de branche Git et les tests de régression automatisés à chaque modification de prompt.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'fr',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=fr',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows', width: 1200, height: 630 },
      keywords: ['contrôle de version des prompts', 'versioning des prompts', 'workflow Git', 'versioning sémantique', 'rollback de prompt', 'changelog', 'tests de régression'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Git' },
        { '@type': 'SoftwareApplication', name: 'GitHub' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
      ],
      about: [
        { '@type': 'Thing', name: 'Contrôle de version des prompts', description: 'Un système qui suit chaque modification d\'un prompt IA avec le versioning MAJOR.MINOR.PATCH, permet le rollback vers n\'importe quelle version précédente et documente l\'auteur et la raison de chaque modification.' },
        { '@type': 'Thing', name: 'Workflow Git pour les prompts', description: 'Une stratégie de branchement et de révision qui imite les pratiques de développement — branches de fonctionnalités, pull requests, tests automatisés et portes d\'approbation multi-relecteurs.' },
        { '@type': 'Thing', name: 'Stratégie de rollback de prompt', description: 'Un mécanisme de déploiement qui restaure instantanément un prompt vers une version précédente via git revert, feature flags ou variables d\'environnement.' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways']
      }
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment configurer un workflow Git pour les modifications de prompts',
      inLanguage: 'fr',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Créez une branche de fonctionnalité pour votre modification de prompt avec git checkout -b feature/description' },
        { '@type': 'HowToStep', position: 2, name: 'Modifiez le fichier prompt et augmentez le numéro de version dans le commentaire d\'en-tête (MAJOR.MINOR.PATCH)' },
        { '@type': 'HowToStep', position: 3, name: 'Exécutez des tests de régression automatisés contre un ensemble de test golden d\'au moins 10 entrées représentatives' },
        { '@type': 'HowToStep', position: 4, name: 'Ouvrez une pull request pour examen ; les relecteurs vérifient la clarté, le risque d\'hallucination, le format de sortie et la sécurité' },
        { '@type': 'HowToStep', position: 5, name: 'Après approbation, fusionnez dans main et taguez la version : git tag v2.0.0 -m description' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que le contrôle de version des prompts ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Le contrôle de version des prompts est un système qui suit chaque modification d\'un prompt IA avec le versioning sémantique (MAJOR.MINOR.PATCH), permet le rollback instantané vers n\'importe quelle version précédente et documente qui a changé quoi et pourquoi. Il applique la discipline du développement logiciel à la gestion des prompts — traite les prompts comme du code en production qui doit être révisé, testé et versionné.' },
        },
        {
          '@type': 'Question',
          name: 'Dois-je créer un dépôt Git séparé pour les prompts ou puis-je utiliser mon dépôt d\'application existant ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Les deux fonctionnent. Utilisez un monorepo (dépôt unique) si vous avez moins de 50 prompts et un couplage étroit entre le code et les prompts. Utilisez un dépôt séparé si vous avez 50+ prompts, souhaitez des cycles de libération indépendants ou si plusieurs équipes gèrent différents ensembles de prompts. L\'essentiel est que les prompts vivent dans un répertoire /prompts/ dédié avec un fichier de version, un changelog et des fixtures de test à côté — la structure importe plus que le choix du dépôt.' },
        },
        {
          '@type': 'Question',
          name: 'Comment le versioning des prompts diffère-t-il du versioning des modèles ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Le versioning des modèles (GPT-4o vs Claude 4.6 Sonnet) concerne le système IA sous-jacent que vous utilisez. Le versioning des prompts concerne le suivi des modifications dans un texte de prompt unique — formulation, structure, exemples, contraintes. Vous pouvez versionner les deux indépendamment : un prompt v2.1 peut être déployé contre le modèle GPT-4o et plus tard mis à jour vers GPT-4o + Claude 4.6 Sonnet sans changer le numéro de version du prompt.' },
        },
        {
          '@type': 'Question',
          name: 'Quelle est une bonne taille minimale d\'ensemble de tests pour un prompt en production ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minimum 10 cas de test golden par prompt — un mélange de chemins heureux attendus (4-5 cas), cas limites (3-4 cas) et modes d\'échec (2-3 cas). Les prompts plus volumineux traitant des tâches complexes devraient avoir 20+ cas. Chaque cas inclut : entrée, format de sortie attendu et comportement attendu (par exemple, « devrait signaler le risque d\'hallucination si le modèle fait des affirmations factuelles »).' },
        },
        {
          '@type': 'Question',
          name: 'Comment gérer le versioning quand le même prompt est utilisé sur différents modèles ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Utilisez un numéro de version de prompt unique, mais testez contre tous les modèles cibles pendant la phase d\'examen du PR. La version reflète les modifications du prompt, pas les modifications du modèle. Si un prompt fonctionne de manière identique sur GPT-4o et Claude 4.6 Sonnet, c\'est v1.0. Si vous ajoutez plus tard une syntaxe spécifique à Claude (thinking blocks), augmentez à v2.0. Suivez la compatibilité du modèle séparément des versions du prompt.' },
        },
        {
          '@type': 'Question',
          name: 'Chaque modification de formulation doit-elle augmenter la version ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Pas nécessairement. Utilisez la règle : augmentations de version PATCH pour les clarifications et corrections de typos qui ne changent pas le comportement de sortie. Augmentations MINOR pour les améliorations de qualité (meilleur raisonnement, moins d\'hallucinations, réponse plus rapide) qui sont rétro-compatibles. Augmentations MAJOR uniquement quand le format de sortie, la structure ou la sémantique cassent l\'analyse en aval. Un changement de synonyme est un PATCH ; un décalage de ton affectant le comportement est MINOR.' },
        },
        {
          '@type': 'Question',
          name: 'Quels outils supportent nativement le contrôle de version des prompts ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Git supporte nativement le versioning des prompts si vous stockez les prompts comme des fichiers texte. Les outils spécialisés comme Braintrust, Promptlayer et Vellum ajoutent le versioning intégré, la comparaison et les tests A/B. PromptQuorum supporte la comparaison multi-modèles qui aide à identifier les changements cassants. Choisissez selon votre workflow : pur Git si vous avez de fortes pratiques de développement ; un outil si vous souhaitez une interface de rollback intégrée et le versioning de branche.' },
        },
        {
          '@type': 'Question',
          name: 'Comment faire un rollback de prompt si je n\'utilise pas Git ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Utilisez des feature flags (méthode la plus simple) : déployez un nouveau prompt derrière un flag, testez en production, basculez le flag pour rollback en secondes. Utilisez des variables d\'environnement : stockez le prompt dans une variable env, échangez les valeurs pour revenir en arrière. Utilisez une base de données : stockez les versions du prompt dans une table de base de données, interrogez par numéro de version. La méthode la plus lente est de redéployer du vieux code, ce qui prend des minutes. Les feature flags ou variables d\'environnement sont recommandés — le rollback devrait prendre secondes.' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Stratégies de rollback de prompt',
      inLanguage: 'fr',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Git Revert', description: 'Instantané (secondes), zéro temps d\'arrêt, nécessite un déploiement basé sur git. Meilleur pour la plupart des équipes.' },
        { '@type': 'ListItem', position: 2, name: 'Feature Flag', description: 'Instantané (secondes), zéro temps d\'arrêt, mais nécessite une infrastructure de flag. Meilleur si les flags sont déjà déployés.' },
        { '@type': 'ListItem', position: 3, name: 'Variable d\'environnement', description: 'Instantané (secondes), risque moyen, simple à implémenter. Meilleur pour les hotfixes.' },
      ],
    },
    quickFacts: [
      'Versioning sémantique pour prompts : MAJOR sur changements de format de sortie cassants, MINOR sur améliorations de qualité, PATCH sur corrections de typos',
      'Un Git revert sur un prompt prend secondes ; retester sans historique de version prend heures',
      'Les changelogs de prompts nécessitent 5 champs : version, date, auteur, type de changement (MAJOR/MINOR/PATCH) et delta de sortie attendu',
      'Exécutez des tests de régression automatisés contre ≥10 cas de test golden avant révision manuelle',
      'Trois modèles de branchement pour prompts : feature/ (nouvelle capacité), fix/ (régression), experiment/ (test A/B)',
    ],
    sections: {
      tldr: {
        title: 'Points clés',
        isTldr: true,
        content: [
          '**TL;DR:** Les prompts sans version échouent silencieusement — quand la qualité de sortie se dégrade, il n\'y a pas d\'historique pour montrer ce qui a changé. Versionnez les prompts avec la sémantique MAJOR.MINOR.PATCH. Déployez via Git : feature branch → PR → tests de régression automatisés → révision manuelle → fusion. Exigez 2+ approbations. Taguez les versions : `git tag v2.0.0`. Activez le rollback instantané via Git Revert (secondes) au lieu de retester (heures).',
        ],
        items: [
          'Les prompts sans version causent des régressions silencieuses — la qualité de sortie chute mais aucun error log n\'enregistre le changement ; l\'historique de version résout cela.',
          'Schéma de versioning sémantique : MAJOR pour changements de format de sortie cassants (JSON → markdown), MINOR pour améliorations de qualité (meilleur raisonnement), PATCH pour corrections de typos.',
          'Stockez les prompts dans un répertoire /prompts/ dédié avec des fichiers de version, des fixtures de test et des changelogs à côté.',
          'Workflow Git : feature branch → modifier prompt + augmenter version → tests automatisés (≥10 cas golden) → ouvrir PR → approbation 2+ reviewers → fusionner + tagger version.',
          'Les tests de régression automatisés doivent valider : format de sortie (conformité JSON), qualité (flags d\'hallucination) et latence (temps de réponse sous seuil).',
          'Trois méthodes de rollback : Git Revert (instantané, préféré), feature flags (zéro temps d\'arrêt si déployés), variables d\'environnement (simple mais risque moyen).',
          'Modèles d\'équipe : assigner un propriétaire de prompt par zone de fonctionnalité ; tous les changements nécessitent l\'approbation du propriétaire ; monorepo pour couplage étroit, dépôt séparé pour 50+ prompts.',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Les régressions silencieuses et pourquoi le contrôle de version les prévient',
        content: [
          '**Les prompts sans version échouent silencieusement — quand la qualité de sortie se dégrade, il n\'y a pas d\'historique pour montrer ce qui a changé.** En logiciel, une erreur d\'exécution lève une exception. Avec les prompts, la qualité de sortie se dégrade graduellement : le raisonnement devient moins cohérent, les hallucinations augmentent, la conformité du format casse. Sans historique de version, la régression est indétectable jusqu\'à ce qu\'elle atteigne la production et endommage l\'expérience utilisateur. Voir [comment détecter et prévenir les hallucinations IA](/prompt-engineering/ai-hallucinations-how-to-stop?lang=fr) pour les stratégies de détection.',
          'Trois modes d\'échec se produisent sans contrôle de version : (1) **chute de qualité silencieuse** — un changement de synonyme qui semblait anodin nuit réellement au raisonnement. Pas de error log. Pas d\'alerte. Les métriques de qualité se dégradent lentement et personne ne réalise qu\'un changement de prompt l\'a causé. (2) **cassure de format** — la sortie change de JSON à markdown et les parseurs aval échouent silencieusement. (3) **conflits de collaboration** — deux ingénieurs modifient le même prompt simultanément, l\'un écrase les changements de l\'autre sans le remarquer.',
          'Le contrôle de version résout tous les trois en enregistrant chaque changement, en permettant le rollback instantané et en appliquant les portes de révision. Quand une régression se produit, vous pouvez comparer le prompt à la version précédente en secondes et identifier le changement exact qui l\'a cassé.'
        ],
        callouts: [
          { type: 'Warning', label: 'Défaillances silencieuses', text: 'Les prompts échouent silencieusement. Pas de error log, pas d\'exception. La dégradation de la qualité de sortie est invisible jusqu\'à ce qu\'elle endommage l\'expérience utilisateur en production. Le log Git est votre seule piste d\'audit.' },
          { type: 'Did You Know', label: 'Risque de synonyme', text: 'Changer « raison la plus importante » en « facteur principal » peut altérer la qualité du raisonnement pour 5-10% des entrées. Un échange de synonyme qui semblait sûr a cassé la production — l\'historique de version l\'a exposé en minutes.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Le contrôle de version des prompts est un système qui suit chaque changement dans un prompt IA, permet le rollback vers n\'importe quelle version précédente et enregistre l\'auteur et la raison de chaque modification.' },
          { type: 'in-plain-terms', text: 'Traitez les prompts comme du code : chaque changement passe par une PR, est testé, nécessite approbation et est taguée avec un numéro de version. Quand quelque chose casse, Git Revert en secondes au lieu de retester pendant heures.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'Versioning sémantique pour les prompts IA',
        content: [
          '**Le versioning sémantique des prompts utilise MAJOR.MINOR.PATCH — un changement de format de sortie cassant augmente MAJOR, une amélioration de qualité augmente MINOR et une correction de typo augmente PATCH.** Le schéma est identique au versioning sémantique pour le code, mais appliqué au texte du prompt au lieu des versions logicielles.',
          'La règle de versioning est simple : si un système en aval (un parser, une API ou un utilisateur s\'attendant à un format spécifique) casse, augmentez MAJOR. Si la sortie s\'améliore mais reste compatible, augmentez MINOR. Si le changement est transparent pour les utilisateurs (correction de typo, clarification d\'intention), augmentez PATCH.',
        ],
        columns: ['Type de changement', 'Quand augmenter', 'Exemple', 'Rétro-compatible ?'],
        rows: [
          { 'Type de changement': 'MAJOR', 'Quand augmenter': 'Changement de format de sortie cassant', 'Exemple': 'Changer la sortie de « Q: ... A: ... » à JSON {\"question\": \"...\", \"answer\": \"...\"}', 'Rétro-compatible ?': 'Non' },
          { 'Type de changement': 'MINOR', 'Quand augmenter': 'Amélioration de qualité (meilleur raisonnement, moins d\'hallucinations, latence plus rapide)', 'Exemple': 'Ajouter des exemples few-shot pour réduire les hallucinations sans changer le format', 'Rétro-compatible ?': 'Oui' },
          { 'Type de changement': 'PATCH', 'Quand augmenter': 'Corrections de typos, clarifications, changements de formulation qui n\'affectent pas le comportement', 'Exemple': 'Changer « résumé brièvement » à « résumé en 2-3 phrases »', 'Rétro-compatible ?': 'Oui' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Key Point', label: 'Déclencheurs MAJOR', text: 'Augmentez MAJOR si les systèmes en aval qui parsent la sortie cassent : changement de format (markdown → JSON), changement de structure (chaîne unique → array) ou changement sémantique (signification de l\'instruction change). Pour l\'application de la conformité aux schémas, voir [sortie structurée et mode JSON](/prompt-engineering/structured-output-json-mode?lang=fr).' },
          { type: 'Pro Tip', label: 'Taguez les versions dans Git', text: 'Après fusion d\'un changement de prompt, taguez la version : git tag v2.1.0 -m « Raisonnement amélioré sur dates via exemples few-shot ». Référencez le tag dans les changelogs et docs de déploiement.' },
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'MAJOR = les clients remarquent et leurs systèmes cassent. MINOR = les clients remarquent mais restent compatibles. PATCH = les clients ne remarquent pas.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'Workflow Git pour les modifications de prompts',
        content: [
          '**Un workflow Git complet pour les prompts suit les mêmes 5 étapes que le code : feature branch → modifier & tester → PR → révision → fusion → tagger version.** Le workflow prévient les régressions silencieuses, active la collaboration et documente chaque changement.',
        ],
        numberedItems: [
          'Créez une branche de fonctionnalité : `git checkout -b feature/add-json-output` ou `fix/date-hallucination`. Utilisez des noms descriptifs.',
          'Modifiez le fichier prompt. Mettez à jour le numéro de version dans un commentaire d\'en-tête : v1.0.0 → v2.0.0 (si changement MAJOR). Ajoutez les cas de test à /prompts/tests/.',
          'Exécutez les tests de régression automatisés : `npm run test:prompts`. Doit passer la validation du format, la comparaison avec l\'ensemble golden et les vérifications d\'hallucination. ≥10 cas de test requis.',
          'Ouvrez une pull request. Les relecteurs vérifient : clarté (est-ce que l\'intention est sans ambiguïté ?), risque d\'hallucination (des affirmations factuelles sans sources ?), conformité du format (est-ce que la sortie correspond au schéma ?), sécurité (vecteurs d\'injection ?). Utilisez la [liste de contrôle de révision de prompt en 7 points](/prompt-engineering/prompt-review-workflow-for-teams?lang=fr) pour les critères standardisés.',
          'Après approbation de 2+ relecteurs, fusionnez dans main. Taguez la version : `git tag v2.0.0 -m « Gestion améliorée des dates via exemples few-shot »`. Déploiement automatique via CI/CD.',
        ],
        codeBlock: `name: Prompt Regression Tests
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt tests
        run: npm run test:prompts -- --coverage
      - name: Validate format
        run: npm run test:format -- prompts/
      - name: Check hallucination flags
        run: npm run test:hallucination -- prompts/`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Structure des répertoires', text: 'Stockez les prompts dans /prompts/ avec les fixtures de test à côté : /prompts/my-prompt.txt, /prompts/tests/my-prompt.golden.json, /prompts/CHANGELOG.md. Gardez la version dans un commentaire en haut du fichier prompt.' },
          { type: 'Best Practice', label: 'Portes d\'approbation', text: 'Exigez 2+ approbations pour les prompts en production : une du domain expert (comprend l\'intention) et une de l\'engineer de test (valide la couverture de test). Utilisez les branch protection rules dans GitHub.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'Champs de changelog requis',
        content: [
          '**Un changelog de prompt enregistre chaque changement de version, quand il s\'est produit, qui l\'a fait et pourquoi.** Une entrée changelog nécessite 5 champs : numéro de version, date de sortie, auteur, type de changement (MAJOR/MINOR/PATCH) et un résumé du delta de sortie attendu.',
        ],
        columns: ['Champ', 'Requis', 'Exemple'],
        rows: [
          { 'Champ': 'version', 'Requis': 'Oui', 'Exemple': 'v2.1.0' },
          { 'Champ': 'date', 'Requis': 'Oui', 'Exemple': '2026-04-30' },
          { 'Champ': 'author', 'Requis': 'Oui', 'Exemple': 'alice@company.com' },
          { 'Champ': 'change_type', 'Requis': 'Oui', 'Exemple': 'MINOR (amélioration de qualité)' },
          { 'Champ': 'summary', 'Requis': 'Oui', 'Exemple': 'Ajouté 3 exemples few-shot pour réduire les hallucinations sur les questions basées sur les dates. Format de sortie inchangé.' },
        ],
        tableFormat: true,
        codeBlock: `# Changelog

## v2.1.0 — 2026-04-30 (alice@company.com) — MINOR

**Changement :** Ajouté 3 exemples few-shot pour réduire les hallucinations sur les questions basées sur les dates.
**Delta de sortie :** Format inchangé (toujours JSON). Amélioration de qualité : taux d\'hallucination baissé de 8% à 2% sur l\'ensemble de test de date parsing.
**Rétro-compatible :** Oui. Systèmes existants non affectés.
**PR :** #1427

## v2.0.0 — 2026-04-28 (bob@company.com) — MAJOR

**Changement :** Format de sortie changé de markdown (« Q: ... A: ... ») à JSON ({\"question\": \"...\", \"answer\": \"...\"}).
**Delta de sortie :** Format MODIFIÉ. Tous les parseurs en aval doivent être mis à jour.
**Rétro-compatible :** Non. Nécessite coordination de déploiement.
**PR :** #1425`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: 'Écrire le changelog AVANT le changement', text: 'Écrivez l\'entrée CHANGELOG.md en premier — cela force la clarté. Si vous ne pouvez pas expliquer en 2 phrases pourquoi ce changement importe, le changement lui-même est probablement inutile. Clarté du changelog = clarté du code.' },
          { type: 'Key Point', label: 'Minimum 5 champs', text: 'Chaque entrée de changelog doit inclure les 5 champs. Si vous ne pouvez pas le documenter, ne le déployez pas.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'Stratégies de rollback',
        content: [
          '**Git Revert est la méthode de rollback par défaut — elle prend secondes et a zéro risque.** Connaissez les 3 déclencheurs de rollback : chute de qualité en production (le taux d\'hallucination spicule), problème de sécurité découvert ou cassure de compatibilité avec modèle (nouveau modèle ne fonctionne pas avec ce prompt).',
        ],
        items: [
          'Déclencheur : le taux d\'hallucination en production monte de 2% à 8% après déploiement de v2.1',
          'Déclencheur : format de sortie v2.0 casse le parser en aval (5% des requêtes échouent)',
          'Déclencheur : bug de sécurité découvert — le prompt est vulnérable à l\'attaque par injection',
          'Déclencheur : nouveau modèle (Claude 5.0) incompatible avec la structure du prompt ; revert et refactoriser',
        ],
        columns: ['Méthode de rollback', 'Vitesse', 'Risque', 'Quand utiliser'],
        rows: [
          { 'Méthode de rollback': 'git revert v2.1.0', 'Vitesse': 'Secondes (instantané)', 'Risque': 'Bas (committe un commit de revert)', 'Quand utiliser': 'Standard pour tous les rollbacks. Nécessite un déploiement basé sur git.' },
          { 'Méthode de rollback': 'Feature flag OFF', 'Vitesse': 'Secondes (basculer le flag)', 'Risque': 'Zéro (pas de déploiement requis)', 'Quand utiliser': 'Si les feature flags sont déjà déployés. Meilleur pour rollback zéro temps d\'arrêt.' },
          { 'Méthode de rollback': 'Échange de variable d\'environnement', 'Vitesse': 'Secondes (redéployer env)', 'Risque': 'Moyen (risque d\'erreur de config)', 'Quand utiliser': 'Hotfix quand l\'infrastructure de flag est indisponible. Non recommandé pour la production.' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Warning', label: 'Tester avant rollback', text: 'Avant de revenir, toujours exécuter les tests de régression contre l\'ensemble golden. Le rollback pourrait réintroduire un bug précédemment corrigé si vous n\'êtes pas prudent. Un rollback est tout aussi risqué qu\'un déploiement s\'il n\'est pas testé.' },
          { type: 'Pro Tip', label: 'Automatiser la décision de rollback', text: 'Configurez les déclencheurs de rollback automatisé : si le taux d\'hallucination spicule >50% au-dessus de la ligne de base, automatiquement déclencher Git Revert et alerter l\'équipe. Ne pas attendre la décision manuelle.' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Le rollback est Git Revert : un nouveau commit qui défait un commit précédent. Zéro temps d\'arrêt, instantané, toujours sûr si la version précédente a été testée.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'Collaboration en équipe et propriété',
        content: [
          '**Un modèle de propriété de prompt prévient les conflits de fusion et applique la responsabilité claire.** Assignez un propriétaire de prompt par zone de fonctionnalité ; tous les changements passent par la révision de ce propriétaire. Pour les grandes équipes, les dépôts séparés préviennent l\'édition simultanée du même prompt.',
        ],
        items: [
          'Monorepo (recommandé pour <50 prompts) : dépôt Git unique, un répertoire /prompts/. Chaque propriétaire de prompt a droit de veto sur les changements à ses prompts. Active le couplage étroit avec le code.',
          'Dépôt de prompt séparé (recommandé pour 50+ prompts) : dépôt dédié pour tous les prompts. Plusieurs équipes gèrent différents ensembles de prompts indépendamment. Les cycles de libération se découplent du code applicatif. Pour le modèle de propriété complet, voir [configuration du prompt engineering pour petites équipes](/prompt-engineering/prompt-engineering-setup-small-teams?lang=fr).',
          'Règles de propriété : un ingénieur par prompt (propriétaire principal). Rôle de relecteur secondaire (vérification croisée). Pas de fusion dans main sans approbation du propriétaire principal. Les changements au prompt d\'un autre ingénieur nécessitent permission explicite.',
          'Prévention de conflit : différents ingénieurs possèdent différents prompts. Si deux ingénieurs doivent changer le même prompt, coordonnez hors ligne d\'abord ou assignez un propriétaire unique.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Assigner la propriété', text: 'Déclarez la propriété du prompt dans les commentaires de code : « # Propriétaire : alice@company.com » en haut de chaque prompt. Auto-tag le propriétaire sur les PRs. Propriété = responsabilité.' },
          { type: 'Key Point', label: 'Évitez la propriété partagée', text: 'Deux ingénieurs possédant un prompt = conflits de fusion et accusation mutuelle. Assignez un propriétaire par prompt, même si cela signifie que quelqu\'un apprend un nouveau domaine.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'Tests automatisés avant fusion',
        content: [
          '**Les tests automatisés valident le format, la qualité et la latence avant qu\'un PR de prompt soit révisé par des humains.** Quatre types de tests attrapent différentes classes d\'erreurs : validation du format (conformité JSON), comparaison d\'ensemble golden (correspondance de sortie), flags d\'hallucination (affirmations factuelles) et vérifications de latence (régression de vitesse).',
        ],
        items: [
          'Validation du format : parser la sortie en tant que JSON, valider le schéma, assurer tous les champs requis présents. Attrape les changements de format cassants (augmentations de version MAJOR). Exécuté en <1 seconde.',
          'Comparaison d\'ensemble golden : exécuter le prompt sur 10-20 entrées de test représentatives. Comparer la sortie avec des réponses connues-bonnes. Attrape les régressions de qualité (dégradation du raisonnement, chute d\'exactitude). Voir [métriques d\'évaluation de prompt](/prompt-engineering/prompt-evaluation-metrics?lang=fr) pour des méthodes de scoring au-delà du binaire pass/fail. Exécuté en 5-10 secondes.',
          'Détection d\'hallucination : signaler toute affirmation factuelle (dates, numéros, noms de produits) sans fournir du matériel source. Attrape les risques d\'hallucination non intentionnels. Exécuté en <1 seconde.',
          'Vérification de latence : mesurer le temps de réponse du prompt. Alerter si la latence spicule >10% au-dessus de la ligne de base. Attrape les régressions de performance des étapes de raisonnement ajoutées. Exécuté en temps réel.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Couverture de test minimale', text: 'Un ensemble de test golden de 10–20 entrées représentatives est le minimum absolu. Les prompts plus volumineux traitant des tâches complexes devraient avoir 20-50+ cas. Chaque cas inclut l\'entrée, le format attendu et le comportement attendu.' },
          { type: 'Pro Tip', label: 'Utiliser LLM-as-Judge', text: 'Pour l\'évaluation de qualité, utilisez un autre LLM pour juger si la sortie répond aux attentes (par ex. « est-ce que cette réponse répond à la question avec exactitude ? »). Plus robuste que la correspondance de mots-clés.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Erreurs courantes du contrôle de version des prompts',
        content: [],
        mistakes: [
          {
            mistake: 'Pas de schéma de versioning — les prompts changent mais les versions restent identiques',
            problem: 'Changements cassants silencieux. Quand le format de sortie casse les parseurs en aval, vous ne savez pas quelle version a introduit le bug. Le rollback est impossible sans tester manuellement chaque version précédente.',
            fix: 'Adoptez MAJOR.MINOR.PATCH dès le jour un. Taguez chaque version : git tag v1.0.0. Mettez à jour la version dans le header du fichier prompt à chaque changement. L\'entrée du changelog est requise avant la fusion.',
          },
          {
            mistake: 'Stocker les prompts dans le code d\'application (chaînes inline)',
            problem: 'Ne peux pas réviser les prompts séparément. Les changements enfouis dans les PRs de code. Pas d\'historique de version. Ne peux pas rollback un prompt sans redéployer le code. Collaboration d\'équipe impossible.',
            fix: 'Déplacez les prompts vers un répertoire /prompts/ dédié. Stockez comme fichiers texte. Importez dans le code. Historiques Git séparés pour les prompts et le code. Active la révision indépendante et le versioning.',
          },
          {
            mistake: 'Pas de changelog — le numéro de version augmente mais aucun enregistrement de ce qui a changé',
            problem: 'Vous avez libéré v2.0 il y a une semaine. La sortie est maintenant cassée. Était-ce le changement de format ou les exemples few-shot ? Pas moyen de savoir sans comparer chaque version à la suivante.',
            fix: 'Exigez l\'entrée CHANGELOG.md pour chaque PR. Minimum 5 champs : version, date, auteur, type de changement, résumé. Écrivez-la avant de faire le changement de prompt — force la clarté d\'intention.',
          },
          {
            mistake: 'Tester seulement le chemin heureux — pas de cas limites',
            problem: 'L\'ensemble de test golden a 3 cas : chemin heureux (fonctionne bien). Libération v2.0. En production, 5% des entrées touchent les cas limites et le format de sortie casse. Maintenant reverted. Temps gaspillé.',
            fix: 'Minimum 10 cas de test golden : 4-5 chemins heureux, 3-4 cas limites, 2-3 modes d\'échec (par ex. « et si la réponse est inconnue ? »). Couvrez 80% de la distribution d\'entrée réelle.',
          },
          {
            mistake: 'Rollback sans tester — revenir à l\'ancienne version sans validation de régression',
            problem: 'v2.0 est cassé. Revert à v1.5. Mais v1.5 avait un bug d\'hallucination qui a été fixé en v1.6, puis réintroduit en v2.0. Maintenant les utilisateurs voient le vieux bug d\'hallucination. Mauvais rollback.',
            fix: 'Exécutez toujours la suite de tests golden avant de fusionner un rollback. Un rollback est un déploiement comme n\'importe quel autre — traitez-le comme tel. Ne sautez pas les tests parce qu\'il semble « sûr ».',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Conformité et exigences d\'audit pour les modifications de prompts',
        content: [
          'Le contrôle de version et les changelogs satisfont les exigences d\'audit réglementaire. La RGPD exige la traçabilité pour les sorties IA à haut risque — l\'historique de version + changelog fournit une piste d\'audit complète. L\'article 22 de la RGPD s\'applique aux prompts qui prennent des décisions automatisées (décisions de crédit, modération de contenu) ; l\'historique de version complet est requis pour 12+ mois.',
          'Soins de santé et finance : toutes les versions de prompt et les changelogs doivent être conservés pour 7+ ans (santé) ou indéfiniment (finance réglementée). Utilisez Git + CHANGELOG.md pour documenter chaque changement. Quand les auditeurs demandent « quand avez-vous changé ce prompt et pourquoi ? » vous pouvez montrer le commit exact, la date, l\'auteur et le raisonnement en secondes.',
          'Domaines sensibles : envisagez la signature de code des prompts (signez chaque commit Git avec GPG). Active la preuve cryptographique de l\'auteur. Satisfait les exigences de non-répudiation pour les industries réglementées. Recommandation CNIL : pour les données sensibles professionnelles (financières, médicales, légales), le contrôle de version des prompts satisfait les exigences de la Commission Nationale de l\'Informatique et des Libertés (CNIL) en fournissant une piste d\'audit complète et une traçabilité des modifications.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que le contrôle de version des prompts ?',
            a: 'Le contrôle de version des prompts est un système qui suit chaque modification d\'un prompt IA avec le versioning sémantique (MAJOR.MINOR.PATCH), permet le rollback instantané vers n\'importe quelle version précédente et documente qui a changé quoi et pourquoi. Il applique la discipline du développement logiciel à la gestion des prompts — traite les prompts comme du code en production qui doit être révisé, testé et versionné.',
          },
          {
            q: 'Dois-je créer un dépôt Git séparé pour les prompts ou puis-je utiliser mon dépôt d\'application existant ?',
            a: 'Les deux fonctionnent. Utilisez un monorepo (dépôt unique) si vous avez moins de 50 prompts et un couplage étroit entre le code et les prompts. Utilisez un dépôt séparé si vous avez 50+ prompts, souhaitez des cycles de libération indépendants ou si plusieurs équipes gèrent différents ensembles de prompts. L\'essentiel est que les prompts vivent dans un répertoire /prompts/ dédié avec un fichier de version, un changelog et des fixtures de test à côté — la structure importe plus que le choix du dépôt.',
          },
          {
            q: 'Comment le versioning des prompts diffère-t-il du versioning des modèles ?',
            a: 'Le versioning des modèles (GPT-4o vs Claude 4.6 Sonnet) concerne le système IA sous-jacent que vous utilisez. Le versioning des prompts concerne le suivi des modifications dans un texte de prompt unique — formulation, structure, exemples, contraintes. Vous pouvez versionner les deux indépendamment : un prompt v2.1 peut être déployé contre le modèle GPT-4o et plus tard mis à jour vers GPT-4o + Claude 4.6 Sonnet sans changer le numéro de version du prompt.',
          },
          {
            q: 'Quelle est une bonne taille minimale d\'ensemble de tests pour un prompt en production ?',
            a: 'Minimum 10 cas de test golden par prompt — un mélange de chemins heureux attendus (4-5 cas), cas limites (3-4 cas) et modes d\'échec (2-3 cas). Les prompts plus volumineux traitant des tâches complexes devraient avoir 20+ cas. Chaque cas inclut : entrée, format de sortie attendu et comportement attendu (par exemple, « devrait signaler le risque d\'hallucination si le modèle fait des affirmations factuelles »).',
          },
          {
            q: 'Comment gérer le versioning quand le même prompt est utilisé sur différents modèles ?',
            a: 'Utilisez un numéro de version de prompt unique, mais testez contre tous les modèles cibles pendant la phase d\'examen du PR. La version reflète les modifications du prompt, pas les modifications du modèle. Si un prompt fonctionne de manière identique sur GPT-4o et Claude 4.6 Sonnet, c\'est v1.0. Si vous ajoutez plus tard une syntaxe spécifique à Claude (thinking blocks), augmentez à v2.0. Suivez la compatibilité du modèle séparément des versions du prompt.',
          },
          {
            q: 'Chaque modification de formulation doit-elle augmenter la version ?',
            a: 'Pas nécessairement. Utilisez la règle : augmentations de version PATCH pour les clarifications et corrections de typos qui ne changent pas le comportement de sortie. Augmentations MINOR pour les améliorations de qualité (meilleur raisonnement, moins d\'hallucinations, réponse plus rapide) qui sont rétro-compatibles. Augmentations MAJOR uniquement quand le format de sortie, la structure ou la sémantique cassent l\'analyse en aval. Un changement de synonyme est un PATCH ; un décalage de ton affectant le comportement est MINOR.',
          },
          {
            q: 'Quels outils supportent nativement le contrôle de version des prompts ?',
            a: 'Git supporte nativement le versioning des prompts si vous stockez les prompts comme des fichiers texte. Les outils spécialisés comme Braintrust, Promptlayer et Vellum ajoutent le versioning intégré, la comparaison et les tests A/B. PromptQuorum supporte la comparaison multi-modèles qui aide à identifier les changements cassants. Choisissez selon votre workflow : pur Git si vous avez de fortes pratiques de développement ; un outil si vous souhaitez une interface de rollback intégrée et le versioning de branche.',
          },
          {
            q: 'Comment faire un rollback de prompt si je n\'utilise pas Git ?',
            a: 'Utilisez des feature flags (méthode la plus simple) : déployez un nouveau prompt derrière un flag, testez en production, basculez le flag pour rollback en secondes. Utilisez des variables d\'environnement : stockez le prompt dans une variable env, échangez les valeurs pour revenir en arrière. Utilisez une base de données : stockez les versions du prompt dans une table de base de données, interrogez par numéro de version. La méthode la plus lente est de redéployer du vieux code, ce qui prend des minutes. Les feature flags ou variables d\'environnement sont recommandés — le rollback devrait prendre secondes.',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Comment les équipes examinent les prompts : liste de contrôle en 7 points & portes CI/CD](/prompt-engineering/prompt-review-workflow-for-teams?lang=fr) — workflow d\'examen de prompt avec portes de qualité automatisées',
          '[Vulnérabilités d\'injection de prompt et comment les arrêter](/prompt-engineering/prompt-injection-and-security?lang=fr) — vérifications de sécurité lors de l\'examen du PR de prompt',
          '[Construire des vérifications de qualité pour la sortie de prompt](/prompt-engineering/build-quality-checks?lang=fr) — tests de régression automatisés pour les prompts',
          '[Comment détecter et prévenir les hallucinations IA](/prompt-engineering/ai-hallucinations-how-to-stop?lang=fr) — détection des hallucinations lors des tests de régression',
          '[Framework RTF : format de prompt structuré](/prompt-engineering/rtf-framework?lang=fr) — format structuré qui simplifie le versioning et le parsing',
        ],
      },

      sources: {
        title: 'Sources',
        items: [
          '[Framework de gestion des risques IA du NIST](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — cadre de gouvernance fédéral couvrant la traçabilité des systèmes IA et la gestion des changements',
          '[Documentation Git : git revert](https://git-scm.com/docs/git-revert) — documentation Git officielle pour reverser les commits',
          '[Spécification de versioning sémantique](https://semver.org/) — spécification MAJOR.MINOR.PATCH officielle',
          '[Braintrust : versioning et test A/B de prompts](https://www.braintrust.dev/) — outil spécialisé pour la gestion et les tests de prompts',
          '[Promptlayer : contrôle de version pour les prompts](https://www.promptlayer.com/) — plateforme avec versioning de prompt intégré et comparaison',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'プロンプトのバージョン管理：セマンティックバージョニング・Git・ロールバック（2026年）',
    intro: '**プロンプトバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）とGitワークフローを使用してAIプロンプトのすべての変更を追跡します。** これにより、即座のロールバック、チーム協業、回帰検出が可能になります。このガイドでは、意味的バージョニングスキーム、Gitブランチワークフロー、変更ログフォーマット、ロールバック戦略、本番プロンプトシステムの自動テストパターンについて説明します。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '本番環境でLLMプロンプトを管理する開発者、プロンプトエンジニア、エンジニアリングチームリード',
    primaryTerm: 'プロンプトバージョン管理',
    toc: [
      { label: 'サイレント・リグレッションとなぜバージョン管理がそれを防ぐのか', anchor: 'why-version-control' },
      { label: 'AIプロンプトの意味的バージョニング', anchor: 'semantic-versioning' },
      { label: 'プロンプト変更のGitワークフロー', anchor: 'git-workflow' },
      { label: '必須変更ログフィールド', anchor: 'changelog' },
      { label: 'ロールバック戦略', anchor: 'rollback' },
      { label: 'チーム協力と所有権', anchor: 'team-collaboration' },
      { label: 'マージ前の自動テスト', anchor: 'automated-testing' },
      { label: 'プロンプトバージョン管理の一般的エラー', anchor: 'mistakes' },
      { label: 'プロンプト変更のコンプライアンスと監査要件', anchor: 'regional-considerations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連資料', anchor: 'related-reading' },
      { label: '出典', anchor: 'sources' },
    ],
    seoTitle: 'プロンプトバージョン管理：セマンティック・Git・ロールバック',
    metaDescription: 'MAJOR.MINOR.PATCHによるプロンプトバージョン管理、Gitワークフロー、変更ログ、ロールバック戦略、自動回帰テスト。本番運用ガイド。',
    readTime: '10分で読める',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプトのバージョン管理：セマンティックバージョニング・Git・ロールバック（2026年）',
      description: 'バージョン管理されていないプロンプトはサイレントに失敗します。MAJOR.MINOR.PATCHバージョニング、Gitブランチワークフロー、自動回帰テストをプロンプト変更ごとに適用します。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'ja',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=ja',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows', width: 1200, height: 630 },
      keywords: ['プロンプトバージョン管理', 'プロンプト管理', 'Gitワークフロー', 'セマンティックバージョニング', 'ロールバック', '変更ログ', '回帰テスト'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Git' },
        { '@type': 'SoftwareApplication', name: 'GitHub' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
      ],
      about: [
        { '@type': 'Thing', name: 'プロンプトバージョン管理', description: 'AIプロンプトのすべての変更をMAJOR.MINOR.PATCHセマンティックバージョニングで追跡し、任意の前バージョンへの即座ロールバックとすべての変更の作成者と理由を記録するシステム。' },
        { '@type': 'Thing', name: 'Gitプロンプトワークフロー', description: 'コード開発実装をミラーする枝切りとレビュー戦略 — フィーチャーブランチ、プルリクエスト、自動テスト、マルチレビュアー承認ゲート。' },
        { '@type': 'Thing', name: 'プロンプトロールバック戦略', description: 'git revert、フィーチャーフラグ、環境変数経由でプロンプトを前バージョンに即座復元するデプロイメント仕組み。' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways']
      }
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'プロンプト変更用Gitワークフローのセットアップ方法',
      inLanguage: 'ja',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'プロンプト変更用フィーチャーブランチ作成：git checkout -b feature/description' },
        { '@type': 'HowToStep', position: 2, name: 'プロンプトファイルを編集し、ヘッダーコメント内のバージョン番号を更新（MAJOR.MINOR.PATCH）' },
        { '@type': 'HowToStep', position: 3, name: '最小10個の代表的入力でGolden Test Setに対する自動回帰テスト実行' },
        { '@type': 'HowToStep', position: 4, name: 'プルリクエストを開く；レビュアーが明確性、幻覚リスク、出力フォーマット、セキュリティを確認' },
        { '@type': 'HowToStep', position: 5, name: '2+レビュアー承認後、mainにマージ；git tag v2.0.0 -m description でバージョンをタグ付け' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'プロンプトバージョン管理とは何ですか？',
          acceptedAnswer: { '@type': 'Answer', text: 'プロンプトバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）でAIプロンプトのすべての変更を追跡し、任意の前バージョンへの即座ロールバックを可能にし、誰が何を変更したか、なぜ変更したかを記録するシステムです。ソフトウェア開発の規律をプロンプト管理に適用します。プロンプトを本番コードとして扱い、レビュー、テスト、バージョンが必須です。' },
        },
        {
          '@type': 'Question',
          name: 'プロンプト用に独立したgitリポジトリが必要ですか？既存アプリリポジトリを使えますか？',
          acceptedAnswer: { '@type': 'Answer', text: 'どちらでも機能します。Monorepo（単一リポジトリ）を使用するなら、プロンプト数<50でコードとプロンプトの密結合。独立リポジトリを使用するなら、50+プロンプト、独立リリースサイクル、複数チーム管理。重要は、プロンプトが専用/prompts/ディレクトリにあり、バージョンファイル、変更ログ、テストフィクスチャが隣にあること。リポジトリ選択より構造が重要です。' },
        },
        {
          '@type': 'Question',
          name: 'プロンプトバージョニングとモデルバージョニングの違い？',
          acceptedAnswer: { '@type': 'Answer', text: 'モデルバージョニング（GPT-4o vs Claude 4.6 Sonnet）は使用する基盤AIシステム。プロンプトバージョニングは単一プロンプト内の変更追跡 — 表現、構造、例、制約。両者は独立してバージョン可：prompt v2.1はGPT-4oでデプロイされ、後でGPT-4o + Claude 4.6 Sonnetに更新でプロンプトバージョンは変わらない。' },
        },
        {
          '@type': 'Question',
          name: '本番プロンプト用の良い最小テストスイートサイズは？',
          acceptedAnswer: { '@type': 'Answer', text: 'プロンプトごと最小10個のGolden Test Cases — 期待される正常系（4-5）、エッジケース（3-4）、失敗モード（2-3）の混合。複雑なタスク処理プロンプトは20+必要。各ケースに：入力、期待出力フォーマット、期待動作（例「モデルが事実主張を出力するなら幻覚リスク表示」）。' },
        },
        {
          '@type': 'Question',
          name: '複数モデルで同じプロンプト使用時のバージョニング管理方法？',
          acceptedAnswer: { '@type': 'Answer', text: '単一プロンプトバージョン番号を使用、ただしPRレビュー段階で全対象モデルでテスト。バージョンはプロンプト変更を反映、モデル変更ではない。プロンプトがGPT-4oとClaude 4.6 Sonnetで同一に機能するならv1.0。後でClaude固有構文追加（thinking blocks）ならv2.0に。モデル互換性をプロンプトバージョンから独立追跡。' },
        },
        {
          '@type': 'Question',
          name: 'すべての表現変更がバージョンを上げるべき？',
          acceptedAnswer: { '@type': 'Answer', text: '必ずしも。ルール：出力動作を変えない明確化とタイポ修正はPATCH。互換性を保つ品質向上（より良いreasoning、幻覚減、速応）はMINOR。出力フォーマット、構造、セマンティクスがdownstreamパースを破壊ならMAJOR。同義語交換はPATCH；動作に影響する語気変更はMINOR。' },
        },
        {
          '@type': 'Question',
          name: 'プロンプトバージョン管理を本来サポートするツール？',
          acceptedAnswer: { '@type': 'Answer', text: 'プロンプトをテキストファイルで保存するならGitが本来サポート。Braintrust、Promptlayer、Vellumなどの専門ツールは組込みバージョニング、比較、A/Bテスト追加。PromptQuorumはマルチモデル比較でBreaking Changes識別支援。ワークフロー選択：強い開発実装あるなら純Git；組込みロールバックUIとversion branching要望ならツール。' },
        },
        {
          '@type': 'Question',
          name: 'Git未使用時のプロンプトロールバック方法？',
          acceptedAnswer: { '@type': 'Answer', text: 'フィーチャーフラグ（最簡単）：新プロンプトをフラグ背後にデプロイ、本番テスト、フラグ切替でロールバック秒単位。環境変数：プロンプトをenv変数に保存、値を交換して復元。データベース：プロンプト版をDB表に保存、版番号でクエリ。最遅い方法は旧コード再デプロイ（分単位）。フィーチャーフラグまたはenv変数推奨 — ロールバックは秒。' },
        },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'プロンプトロールバック方法',
      inLanguage: 'ja',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Git Revert', description: '即座（秒単位）、ダウンタイムなし、gitベースデプロイ必須。ほとんどのチーム向け。' },
        { '@type': 'ListItem', position: 2, name: 'フィーチャーフラグ', description: '即座（秒単位）、ダウンタイムなし、ただしフラグ基盤が必須。フラグ既デプロイなら最適。' },
        { '@type': 'ListItem', position: 3, name: '環境変数', description: '即座（秒単位）、中リスク、実装簡易。Hotfixに最適。' },
      ],
    },
    quickFacts: [
      'プロンプトセマンティックバージョニング：出力フォーマット破壊变更でMAJOR、品質向上でMINOR、タイポ修正でPATCH',
      'プロンプトへのGit revertは秒；版履歴なしの再テストは時間単位',
      'プロンプト変更ログは5フィールド必須：版、日付、作成者、変更タイプ（MAJOR/MINOR/PATCH）、期待出力delta',
      '手動レビュー前に≥10個のGolden Test Casesに対する自動回帰テスト実施',
      'プロンプト3分岐パターン：feature/（新機能）、fix/（回帰）、experiment/（A/Bテスト）',
    ],
    sections: {
      tldr: {
        title: '重要ポイント',
        isTldr: true,
        content: [
          '**TL;DR:** 版管理されていないプロンプトはサイレント失敗 — 出力品質低下時、何が変わったか履歴がない。MAJOR.MINOR.PATCHでプロンプト版管理。Gitでデプロイ：feature branch → PR → 自動回帰テスト → 手動レビュー → merge。2+承認必須。版をタグ付け：`git tag v2.0.0`。Git Revert（秒）で即座ロールバック、再テスト（時間）より速い。',
        ],
        items: [
          '版なしプロンプトはサイレント回帰 — 出力品質低下でもerror logは記録されず；版履歴で解決。',
          'セマンティック版スキーム：出力フォーマット破壊でMAJOR（JSON→markdown）、品質向上でMINOR（より良いreasoning）、タイポでPATCH。',
          '/prompts/専用ディレクトリにプロンプト保存、隣に版ファイル、テストフィクスチャ、変更ログ。',
          'Gitワークフロー：feature branch → プロンプト編集+版上昇 → 自動テスト（≥10 Golden Cases） → PR開く → 2+ reviewer承認 → merge + tag版。',
          '自動回帰テストは検証：出力フォーマット（JSON準拠）、品質（幻覚フラグ）、遅延（応答時間閾値以下）。',
          '3ロールバック方法：Git Revert（即座、推奨）、フィーチャーフラグ（ダウンタイムなし、デプロイ済なら）、環境変数（簡易、中リスク）。',
          'チームパターン：フィーチャー領域ごとに版オーナー一人；全変更がオーナー承認必須；密結合ならmonorepo、50+プロンプトなら別リポジトリ。',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'サイレント・リグレッションとなぜバージョン管理がそれを防ぐのか',
        content: [
          '**版管理されていないプロンプトはサイレントに失敗 — 出力品質低下時、何が変わったか履歴がない。** ソフトウェアでは実行時エラーが例外をスロー。プロンプトでは出力品質が漸減：reasoning が不連貫化、幻覚増加、フォーマット準拠破壊。版履歴がないと回帰は本番到達まで検知できず、ユーザー体験を傷つける。[AI幻覚の検出と防止方法](/prompt-engineering/ai-hallucinations-how-to-stop?lang=ja)で検出戦略を見る。',
          '版管理なしで3失敗モード発生：(1) **サイレント品質低下** — 無害そうな同義語交換が実は推論傷つける。Error log なし。Alert なし。品質メトリクス漸低、誰もプロンプト変更の犯人に気付かず。(2) **フォーマット破壊** — 出力がJSONからmarkdownに変わり、downstreamパーサがサイレント失敗。(3) **協力葛藤** — 2工程士が同プロンプトを同時編集、一方が他方の変更を気付かず上書き。',
          '版管理は3つ全て解決：全変更を記録、即座ロールバック可、review gatesを施行。回帰時、プロンプトを前版と秒で比較、正確に何が壊れたか識別。',
        ],
        callouts: [
          { type: 'Warning', label: 'サイレント失敗', text: 'プロンプトはサイレント失敗。Error log、例外なし。出力品質低下は本番ユーザー体験を傷つけるまで不可見。Git logが唯一の監査記録。' },
          { type: 'Did You Know', label: '同義語リスク', text: '「最重要理由」を「主要ファクタ」に変えると、入力の5-10%で推論品質が変わる。一見安全な同義語交換が本番を壊した — 版履歴が分で露出。' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'プロンプト版管理はAIプロンプトのあらゆる変更を追跡し、任意の前版へのロールバック、各変更作成者と理由を記録するシステム。' },
          { type: 'in-plain-terms', text: 'プロンプトをコード同様に扱う：各変更はPRを経由、テスト、承認要求、版番号タグ。何か壊れたら、Git Revertで秒、再テストで時間より速い。' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'AIプロンプトの意味的バージョニング',
        content: [
          '**プロンプトセマンティック版はMAJOR.MINOR.PATCH — 出力フォーマット破壊変更はMAJOR上昇、品質向上はMINOR上昇、タイポ修正はPATCH上昇。** スキームはソフト版と同じ、ただしプロンプトテキスト対象。',
          '版規則はシンプル：downstreamシステム（parser、API、特定フォーマット期待ユーザー）が壊れたらMAJOR上昇。出力が向上しても互換ならMINOR上昇。ユーザーに透過（タイポ修正、意図明確化）ならPATCH上昇。',
        ],
        columns: ['変更型', 'いつ上昇', '例', '後方互換？'],
        rows: [
          { '変更型': 'MAJOR', 'いつ上昇': '出力フォーマット破壊変更', '例': '出力を「Q: ... A: ...」からJSON {\"question\": \"...\", \"answer\": \"...\"} に変更', '後方互換？': 'いいえ' },
          { '変更型': 'MINOR', 'いつ上昇': '品質向上（より良いreasoning、幻覚減、高速応答）', '例': '幻覚減らすためfew-shot例を追加、フォーマット変更なし', '後方互換？': 'はい' },
          { '変更型': 'PATCH', 'いつ上昇': 'タイポ修正、明確化、動作非変更の表現変更', '例': '「簡潔に要約」を「2-3文で要約」に変更', '後方互換？': 'はい' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Key Point', label: 'MAJOR Trigger', text: 'downstreamシステムが出力パース破壊時MAJOR上昇：フォーマット変更（markdown→JSON）、構造変更（単文字列→array）、セマンティック変更（指示の意味が変わる）。スキーマ準拠強制は[構造出力とJSON mode](/prompt-engineering/structured-output-json-mode?lang=ja)を参照。' },
          { type: 'Pro Tip', label: 'Gitで版をTag', text: 'プロンプト変更merge後、版をtag：git tag v2.1.0 -m「Few-shot例でDate reasoningを向上」。変更ログとデプロイドキュメントでtagを参照。' },
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'MAJOR = ユーザー気付き、システム壊れる。MINOR = ユーザー気付き、互換維持。PATCH = ユーザー気付かず。' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'プロンプト変更のGitワークフロー',
        content: [
          '**完全なGitワークフロー for プロンプトはコード同様5ステップ：feature branch → 編集&テスト → PR → レビュー → merge → tag版。** サイレント回帰を防止、協力を有効化、各変更をdocument。',
        ],
        numberedItems: [
          'Feature branch作成：`git checkout -b feature/add-json-output` または `fix/date-hallucination`。説明的名前を使用。',
          'プロンプトファイルを編集。ヘッダーコメントで版番号を更新：v1.0.0 → v2.0.0（MAJOR変更時）。テストケースを/prompts/tests/に追加。',
          '自動回帰テスト実行：`npm run test:prompts`。フォーマット検証、golden setと比較、幻覚check必須。≥10テストケース要求。',
          'Pull request開く。Reviewer確認：明確性（意図は曖昧でない？）、幻覚リスク（事実主張に出典？）、フォーマット準拠（出力がスキーマに合致？）、セキュリティ（injection vector？）。[7-point prompt review checklist](/prompt-engineering/prompt-review-workflow-for-teams?lang=ja)で標準基準を参照。',
          '2+ reviewer承認後、mainにmerge。版をtag：`git tag v2.0.0 -m「Few-shot例でDate handlingを改善」`。CI/CDで自動デプロイ。',
        ],
        codeBlock: `name: Prompt Regression Tests
on: [pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt tests
        run: npm run test:prompts -- --coverage
      - name: Validate format
        run: npm run test:format -- prompts/
      - name: Check hallucination flags
        run: npm run test:hallucination -- prompts/`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Directory構造', text: 'プロンプトを/prompts/に保存、test fixtureを隣に：/prompts/my-prompt.txt, /prompts/tests/my-prompt.golden.json, /prompts/CHANGELOG.md。版をプロンプトファイル上部のコメントで保持。' },
          { type: 'Best Practice', label: 'Approval Gates', text: '本番プロンプト2+承認必須：domain expert（意図理解）とtest engineer（テスト カバー検証）。GitHubのbranch protection rulesを使用。' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: '必須変更ログフィールド',
        content: [
          '**プロンプト変更ログは各版変更、いつ、誰が、なぜを記録。** ChangeLogエントリは5フィールド必須：版番号、版日付、作成者、変更型（MAJOR/MINOR/PATCH）、期待出力deltaのサマリ。',
        ],
        columns: ['フィールド', '必須', '例'],
        rows: [
          { 'フィールド': 'version', '必須': 'はい', '例': 'v2.1.0' },
          { 'フィールド': 'date', '必須': 'はい', '例': '2026-04-30' },
          { 'フィールド': 'author', '必須': 'はい', '例': 'alice@company.com' },
          { 'フィールド': 'change_type', '必須': 'はい', '例': 'MINOR（品質向上）' },
          { 'フィールド': 'summary', '必須': 'はい', '例': '日付質問で幻覚低減用に3 few-shot例追加。出力フォーマット変更なし。' },
        ],
        tableFormat: true,
        codeBlock: `# Changelog

## v2.1.0 — 2026-04-30 (alice@company.com) — MINOR

**変更：** 日付質問で幻覚低減用に3 few-shot例を追加。
**Output Delta：** フォーマット変更なし（常JSON）。品質向上：幻覚率date-parsing test setで8%から2%に低減。
**後方互換：** はい。既存システムに影響なし。
**PR：** #1427

## v2.0.0 — 2026-04-28 (bob@company.com) — MAJOR

**変更：** 出力フォーマットを markdown (「Q: ... A: ...」) からJSON ({「question」: 「...」, 「answer」: 「...」})に変更。
**Output Delta：** フォーマット CHANGED。全downstreamパーサ更新必須。
**後方互換：** いいえ。デプロイ調整が必須。
**PR：** #1425`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: '変更BEFORE changelog書く', text: '最初にCHANGELOG.md entryを書く — 明確性を強制。2文で「なぜこの変更が重要か」説明できないなら、その変更自体は不要かも。Changelog clarity = code clarity。' },
          { type: 'Key Point', label: '5フィールド最小', text: 'すべてのchangelog entryが5フィールド必須。document できないなら deploy するな。' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'ロールバック戦略',
        content: [
          '**Git Revertがデフォルト回復方法 — 秒単位、リスク零。** 3回復トリガーを知る：本番品質低下（幻覚率spike）、セキュリティ問題発見、model非互換（新modelこのプロンプトで未対応）。',
        ],
        items: [
          'Trigger：v2.1デプロイ後、本番幻覚率2%から8%にspike',
          'Trigger：v2.0出力フォーマットがdownstream parser破壊（request 5%失敗）',
          'Trigger：セキュリティbug発見 — プロンプトがinjection attack脆弱',
          'Trigger：新model（Claude 5.0）このプロンプト構造で非互換；revert and refactor',
        ],
        columns: ['Rollback方法', '速度', 'リスク', 'いつ使う'],
        rows: [
          { 'Rollback方法': 'git revert v2.1.0', '速度': '秒（即座）', 'リスク': '低（revert commitを新規作成）', 'いつ使う': 'すべてのrollback標準。Git ベースdeployment必須。' },
          { 'Rollback方法': 'Feature Flag OFF', '速度': '秒（flag toggle）', 'リスク': '零（deployment不要）', 'いつ使う': 'Flag既deployなら。ダウンタイムなしrollback最適。' },
          { 'Rollback方法': '環境変数swap', '速度': '秒（env redeploy）', 'リスク': '中（config error risk）', 'いつ使う': 'Flag基盤不在時のhotfix。本番非推奨。' },
        ],
        tableFormat: true,
        callouts: [
          { type: 'Warning', label: 'Rollback前にテスト', text: 'Revert前に常にgolden setで回帰テスト実行。Rollback が前fix済みbugを再introduce する可能性。Rollbackは deploy同様 — untest は同リスク。' },
          { type: 'Pro Tip', label: 'Rollback判定を自動化', text: '自動rollback trigger設定：幻覚率がbaseline 50%超過上昇なら、自動Git Revert trigger、team alert。手動判定を待つな。' },
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Rollback は Git Revert：前commitをundo する新commit。ダウンタイム零、即座、前版がtest済みなら常に安全。' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'チーム協力と所有権',
        content: [
          '**プロンプト所有モデルはmerge葛藤を防止、明確責任を施行。** Feature領域ごとにプロンプトオーナー一人assign；全変更がそのオーナーのレビューを経由。Large teamなら別repoがsimultaneous編集を防止。',
        ],
        items: [
          'Monorepo（<50プロンプト推奨）：単一git repo、1個の/prompts/dir。各プロンプトオーナーが自分のプロンプト変更への拒否権あり。Code との密結合有効。',
          '別プロンプトrepo（50+プロンプト推奨）：専用repo all prompts。複数teamが異なるprompt setを独立manage。Releaseサイクルが application codeから分離。Full ownership modelは[small team向けprompt engineering setup](/prompt-engineering/prompt-engineering-setup-small-teams?lang=ja)参照。',
          'Ownership規則：prompts per エンジニア一人（principal owner）。Secondary reviewer role（cross-check）。Principal owner承認なし main merge禁止。他工程士のプロンプト変更には明確権限必須。',
          '葛藤防止：異工程士が異プロンプト所有。同プロンプト2工程士が変更必須なら、offline coordinate または single owner assign。',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Ownership宣言', text: 'プロンプトcode commentで所有権宣言：「# Owner: alice@company.com」 上部に。PR上でownerを auto-tag。所有権 = 責任。' },
          { type: 'Key Point', label: '共同所有を避ける', text: '2工程士がprompt共有 = merge葛藤とfinger-pointing。prompt毎に1 owner assign、たとえ誰かが新domain学ぶ必要あっても。' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'マージ前の自動テスト',
        content: [
          '**自動テストは format、品質、遅延を検証、人手reviewの前にPrompt PRを審査。** 4テストタイプが異error classを catch：format検証（JSON準拠）、golden set比較（出力一致）、幻覚flag（事実主張）、遅延check（速度低下）。',
        ],
        items: [
          'Format検証：出力を JSON parse、schema検証、全required field存在確認。Breaking format変更（MAJOR版bump）を catch。<1秒実行。',
          'Golden set比較：10-20 representative入力に対しprompt実行。出力を known-good答と比較。品質回帰（reasoning低下、accuracy drop）を catch。[Prompt evaluation metrics](/prompt-engineering/prompt-evaluation-metrics?lang=ja)でbinary pass/fail超の採点方法参照。5-10秒実行。',
          'Hallucination検出：出力に事実主張（日付、数値、product name）を source material提供せず flag。unintended幻覚risk を catch。<1秒実行。',
          'Latency check：prompt response timeを measure。Latency が baseline 10%超過上昇 alert。added reasoning step からのperformance低下を catch。リアルタイム実行。',
        ],
        callouts: [
          { type: 'Key Point', label: '最小テスト cover', text: '10-20 representative input のgolden test setは絶対最小。複雑task処理のlarge promptは20-50+必要。各case含む：input、期待output format、期待動作。' },
          { type: 'Pro Tip', label: 'LLM-as-Judge使用', text: '品質評価に別LLMを使：出力が期待を満たすか judge（例「この答が正確に質問に答える？」）。keyword matching より堅牢。' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'プロンプトバージョン管理の一般的エラー',
        content: [],
        mistakes: [
          {
            mistake: '版スキーム無し — プロンプト変更しても版は同一',
            problem: 'Silent breaking changes。Output format がdownstream parserを破壊時、どの版がbug導入したか不明。Version毎のmanual testなし rollback不可能。',
            fix: '初日からMAJOR.MINOR.PATCHを adopt。各releaseをtag：git tag v1.0.0。プロンプトファイル header の version を各changeで update。Merge前のchangelog entryは必須。',
          },
          {
            mistake: 'Application code内に prompts を inline string で保存',
            problem: 'Prompt独立 review不可。Code PRに変更が buried。Version履歴なし。Prompt alone rollback不可（code redeploy必須）。Team collaboration不可能。',
            fix: 'Prompt を専用/prompts/ディレクトリに move。Text fileで保存。Code に import。Prompt と code の git history別。独立 review と versioning 有効化。',
          },
          {
            mistake: 'Changelog無し — Version番号は上昇、何が変わった記録がない',
            problem: 'v2.0を1週前release。Now output は broken。Format変更？few-shot例？わからない。毎version をmanualに次と比較する必要。',
            fix: 'すべてのPRに CHANGELOG.md entry必須。5 field最小：version、date、author、change type、summary。Prompt変更BEFORE に書く — intentを clarity 強制。',
          },
          {
            mistake: 'Happy path onlyテスト — edge case なし',
            problem: 'Golden test setは3 case：happy path（ok）。v2.0 release。本番で5%の入力が edge caseを hit、output format broken。Rollback。Time wasted。',
            fix: 'Minimum 10 golden test case：4-5 happy paths、3-4 edge cases、2-3 failure mode（例「answer不明な場合？」）。Real-world input distribution の 80% cover。',
          },
          {
            mistake: 'Revert なしtesting — Rollback old version して regression validate なし',
            problem: 'v2.0 broken。v1.5 にrevert。でv1.5は hallucination bug があり、v1.6 で fix、v2.0 で re-introduce。Now user が old hallucination bug see。Bad rollback。',
            fix: 'Rollback merge前に常に golden test suite実行。Rollback は deploy 同様 — like 扱う。Test を skip するな「安全」に見えても。',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'プロンプト変更のコンプライアンスと監査要件',
        content: [
          '【日本（METI）】 バージョン管理と changelog は METI AI Governance 2024 の透明性・トレーサビリティ要件を満たします。AI システムの意思決定可能性、変更監査可能性が critical — prompt version history により「いつ、誰が、なぜ」が证明可能。',
          '【アジア太平洋地域（データ跨境）】 多くのAPAC国は個人データの国内 residency を要求（Thailand PDPA、Vietnam Law、Indonesia等）。Prompt版管理と local git repository により、データ retention と access control が transparent — audit時に各プロンプト版と出力を証明可能。',
          '【企業deployments】 金融・医療・法律分野の大enterprise は prompt version + changelog の 12ヶ月+保持を mandatory 化してる。Regulatory audit 時「いつこのpromptalgorithmがこう変わった？」に git log と CHANGELOG が秒で応答。',
        ],
      },

      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'プロンプトバージョン管理とは何ですか？',
            a: 'プロンプトバージョン管理はセマンティックバージョニング（MAJOR.MINOR.PATCH）でAIプロンプトのすべての変更を追跡し、任意の前バージョンへの即座ロールバック、誰が何を変更したか、なぜ変更したかを記録するシステムです。ソフトウェア開発の規律をプロンプト管理に適用 — プロンプトを本番コードとして扱い、レビュー、テスト、バージョンが必須。',
          },
          {
            q: 'プロンプト用に独立したgitリポジトリが必要ですか？既存アプリリポジトリを使えますか？',
            a: 'どちらでも機能します。Monorepo（単一リポジトリ）を使用するなら、プロンプト数<50でコードとプロンプトの密結合。独立リポジトリを使用するなら、50+プロンプト、独立リリースサイクル、複数チーム管理。重要は、プロンプトが専用/prompts/ディレクトリにあり、バージョンファイル、変更ログ、テストフィクスチャが隣にあること。リポジトリ選択より構造が重要。',
          },
          {
            q: 'プロンプトバージョニングとモデルバージョニングの違い？',
            a: 'モデルバージョニング（GPT-4o vs Claude 4.6 Sonnet）は使用する基盤AIシステム。プロンプトバージョニングは単一プロンプト内の変更追跡 — 表現、構造、例、制約。両者は独立してバージョン可：prompt v2.1はGPT-4oでデプロイされ、後でGPT-4o + Claude 4.6 Sonnetに更新でプロンプトバージョンは変わらない。',
          },
          {
            q: '本番プロンプト用の良い最小テストスイートサイズは？',
            a: 'プロンプトごと最小10個のGolden Test Cases — 期待される正常系（4-5）、エッジケース（3-4）、失敗モード（2-3）の混合。複雑なタスク処理プロンプトは20+必要。各ケースに：入力、期待出力フォーマット、期待動作（例「モデルが事実主張を出力するなら幻覚リスク表示」）。',
          },
          {
            q: '複数モデルで同じプロンプト使用時のバージョニング管理方法？',
            a: '単一プロンプトバージョン番号を使用、ただしPRレビュー段階で全対象モデルでテスト。バージョンはプロンプト変更を反映、モデル変更ではない。プロンプトがGPT-4oとClaude 4.6 Sonnetで同一に機能するならv1.0。後でClaude固有構文追加（thinking blocks）ならv2.0に。モデル互換性をプロンプトバージョンから独立追跡。',
          },
          {
            q: 'すべての表現変更がバージョンを上げるべき？',
            a: '必ずしも。ルール：出力動作を変えない明確化とタイポ修正はPATCH。互換性を保つ品質向上（より良いreasoning、幻覚減、速応）はMINOR。出力フォーマット、構造、セマンティクスがdownstreamパースを破壊ならMAJOR。同義語交換はPATCH；動作に影響する語気変更はMINOR。',
          },
          {
            q: 'プロンプトバージョン管理を本来サポートするツール？',
            a: 'プロンプトをテキストファイルで保存するならGitが本来サポート。Braintrust、Promptlayer、Vellumなどの専門ツールは組込みバージョニング、比較、A/Bテスト追加。PromptQuorumはマルチモデル比較でBreaking Changes識別支援。ワークフロー選択：強い開発実装あるなら純Git；組込みロールバックUIとversion branching要望ならツール。',
          },
          {
            q: 'Git未使用時のプロンプトロールバック方法？',
            a: 'フィーチャーフラグ（最簡単）：新プロンプトをフラグ背後にデプロイ、本番テスト、フラグ切替でロールバック秒単位。環境変数：プロンプトをenv変数に保存、値を交換して復元。データベース：プロンプト版をDB表に保存、版番号でクエリ。最遅い方法は旧コード再デプロイ（分単位）。フィーチャーフラグまたはenv変数推奨 — ロールバックは秒。',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[チームがプロンプトをレビューする方法：7-point Checklist & CI/CD Gates](/prompt-engineering/prompt-review-workflow-for-teams?lang=ja) — 自動品質gateの付いたprompt reviewワークフロー',
          '[Prompt Injection脆弱性と停止方法](/prompt-engineering/prompt-injection-and-security?lang=ja) — Prompt PR reviewの最中のセキュリティcheck',
          '[Prompt出力用品質checkを構築](/prompt-engineering/build-quality-checks?lang=ja) — prompt自動回帰テスト',
          '[AI幻覚の検出と防止方法](/prompt-engineering/ai-hallucinations-how-to-stop?lang=ja) — 回帰テスト時の幻覚検出',
          '[RTF Framework：構造化prompt format](/prompt-engineering/rtf-framework?lang=ja) — versioningとparsingを簡易化する構造format',
        ],
      },

      sources: {
        title: '出典',
        items: [
          '[NIST AI Risk Management Framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — AIシステムトレーサビリティと変更管理を包括連邦governance framework',
          '[Git Documentation：git revert](https://git-scm.com/docs/git-revert) — commit revert の公式 git documentation',
          '[Semantic Versioning Specification](https://semver.org/) — 公式MAJOR.MINOR.PATCH仕様',
          '[Braintrust：Prompt Versioning and A/B Testing](https://www.braintrust.dev/) — prompt管理とtestの専門ツール',
          '[Promptlayer：Version Control for Prompts](https://www.promptlayer.com/) — 組込みprompt versioningと比較の platform',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt版本控制：语义化版本、Git与回滚策略（2026）',
    intro: '使用语义版本控制（MAJOR.MINOR.PATCH）和 Git 工作流追踪 AI Prompt 的每项变更。实现即时回滚、团队协作和回归检测——应用于代码的同一纪律，现在应用于 Prompt。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '在生产环境管理 LLM Prompt 的开发者、Prompt 工程师、技术主管',
    seoTitle: 'Prompt版本控制：语义化版本、Git与回滚策略（2026）',
    metaDescription: '用MAJOR.MINOR.PATCH管理Prompt版本：Git工作流、变更日志、回滚策略和自动化回归测试。完整生产环境工作流指南。',
    readTime: '阅读约 10 分钟',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt版本控制：语义化版本、Git与回滚策略（2026）',
      description: '用MAJOR.MINOR.PATCH管理Prompt版本：Git工作流、变更日志、回滚策略和自动化回归测试。完整生产环境工作流指南。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=zh',
      publisher: { '@type': 'Organization', name: 'PromptQuorum' },
    },
    toc: [],
    sections: {},
  },
};
