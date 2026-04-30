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
    intro: 'Le contrôle de version des prompts suit chaque modification d\'un prompt IA en utilisant le versioning sémantique (MAJOR.MINOR.PATCH) et les workflows Git. Il permet une restauration instantanée, la collaboration d\'équipe et la détection de régressions — la même discipline appliquée au code, appliquée aux prompts.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Développeurs gérant les prompts LLM en production, ingénieurs en prompte, chefs d\'équipe technique',
    seoTitle: 'Versionner ses Prompts : Versioning Sémantique, Git & Rollback (2026)',
    metaDescription: 'Versioning de prompts avec MAJOR.MINOR.PATCH, workflows Git, changelogs, stratégies de rollback et tests de régression automatisés. Workflow production complet.',
    readTime: '10 min de lecture',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Versionner ses Prompts : Versioning Sémantique, Git & Rollback (2026)',
      description: 'Versioning de prompts avec MAJOR.MINOR.PATCH, workflows Git, changelogs, stratégies de rollback et tests de régression automatisés. Workflow production complet.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=fr',
      publisher: { '@type': 'Organization', name: 'PromptQuorum' },
    },
    toc: [],
    sections: {},
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'プロンプトのバージョン管理：セマンティックバージョニング・Git・ロールバック（2026年）',
    intro: 'プロンプトバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）とGitワークフローを使用してAIプロンプトのすべての変更を追跡します。これにより、即座のロールバック、チーム協業、回帰検出が可能になります。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '本番環境でLLMプロンプトを管理する開発者、プロンプトエンジニア、チームリード',
    seoTitle: 'プロンプトのバージョン管理：セマンティックバージョニング・Git・ロールバック（2026年）',
    metaDescription: 'MAJOR.MINOR.PATCHによるプロンプトバージョン管理、Gitワークフロー、変更ログ、ロールバック戦略、自動回帰テスト。本番運用の完全ガイド。',
    readTime: '10分で読める',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプトのバージョン管理：セマンティックバージョニング・Git・ロールバック（2026年）',
      description: 'MAJOR.MINOR.PATCHによるプロンプトバージョン管理、Gitワークフロー、変更ログ、ロールバック戦略、自動回帰テスト。本番運用の完全ガイド。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=ja',
      publisher: { '@type': 'Organization', name: 'PromptQuorum' },
    },
    toc: [],
    sections: {},
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
