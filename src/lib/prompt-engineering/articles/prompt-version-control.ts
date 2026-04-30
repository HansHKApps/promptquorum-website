import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt Version Control: Tracking, Rollback & Team Workflows',
    intro: '**Prompt version control tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH) and git workflows.** It enables instant rollback, team collaboration, and regression detection — the same discipline applied to code, applied to prompts. This guide covers semantic versioning schemes, git branch workflows, changelog format, rollback strategies, and automated testing patterns for production prompt systems.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    lastFactChecked: '2026-04-30 — Git documentation, semantic versioning spec, Braintrust and Promptlayer docs verified',
    educationalLevel: 'Advanced',
    audience: 'Developers managing LLM prompts in production, prompt engineers, engineering team leads',
    primaryTerm: 'Prompt Version Control',
    toc: [
      { label: 'Key Takeaways', anchor: 'tldr' },
      { label: 'Why Prompt Version Control Prevents Silent Regressions', anchor: 'why-version-control' },
      { label: 'How Semantic Versioning Works for AI Prompts', anchor: 'semantic-versioning' },
      { label: 'How to Set Up a Git Workflow for Prompt Changes', anchor: 'git-workflow' },
      { label: 'What Every Prompt Changelog Entry Must Include', anchor: 'changelog' },
      { label: 'When and How to Roll Back a Prompt to a Previous Version', anchor: 'rollback' },
      { label: 'How Teams Collaborate on Prompt Changes Without Conflicts', anchor: 'team-collaboration' },
      { label: 'What Automated Tests Catch Before a Prompt Change Ships', anchor: 'automated-testing' },
      { label: 'Common Mistakes in Prompt Version Control', anchor: 'mistakes' },
      { label: 'Compliance and Audit Requirements for Prompt Changes', anchor: 'regional-considerations' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    seoTitle: 'Prompt Version Control: Git Workflows & Rollback',
    metaDescription: 'Unversioned prompts fail silently — no history means no rollback. Apply MAJOR.MINOR.PATCH versioning, git branch workflows, and automated regression tests to every prompt change.',
    ogDescription: 'Prompt version control: tracking changes with semantic versioning (MAJOR.MINOR.PATCH), git workflows for teams, rollback strategies, and automated regression testing. Complete guide.',
    twitterDescription: 'Unversioned prompts = silent failures. Version control prompts with MAJOR.MINOR.PATCH, git branches, changelogs, and automated tests. Team workflows included.',
    readTime: '10 min read',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt Version Control: Tracking, Rollback & Team Workflows',
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
    leadAnswerBlock: '**Prompt version control tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH) and git workflows. It enables instant rollback, team collaboration, and regression detection — the same discipline applied to code, applied to prompts.**',
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
        title: 'Why Prompt Version Control Prevents Silent Regressions',
        content: [
          '**Unversioned prompts fail silently — when output quality degrades, there\'s no history to show what changed or when.** In software, a runtime error throws an exception. In prompts, output quality degrades gradually: reasoning becomes less coherent, hallucinations increase, format compliance breaks. Without version history, the regression is undetectable until it reaches production and damages user experience.',
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
        title: 'How Semantic Versioning Works for AI Prompts',
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
          { type: 'Key Point', label: 'MAJOR Triggers', text: 'Bump MAJOR if downstream systems parsing output would break: format change (markdown → JSON), structure change (single string → array), or semantic change (instruction meaning changes).' },
          { type: 'Pro Tip', label: 'Tag Releases in Git', text: 'After merging a prompt change, tag the version: git tag v2.1.0 -m "Improved date reasoning via few-shot examples". Reference the tag in changelogs and deployment docs.' },
        ],
        snippets: [
          { type: 'in-plain-terms', text: 'MAJOR = customers notice and their systems break. MINOR = customers notice but stay compatible. PATCH = customers don\'t notice.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'How to Set Up a Git Workflow for Prompt Changes',
        content: [
          '**A complete git workflow for prompts follows the same 5 steps as code: feature branch → edit & test → PR → review → merge → tag release.** The workflow prevents silent regressions, enables collaboration, and documents every change.',
        ],
        numberedItems: [
          'Create a feature branch: `git checkout -b feature/add-json-output` or `fix/date-hallucination`. Use descriptive names.',
          'Edit the prompt file. Update the version number in a header comment: v1.0.0 → v2.0.0 (if MAJOR change). Add test cases to /prompts/tests/.',
          'Run automated regression tests: `npm run test:prompts`. Must pass format validation, golden set comparison, and hallucination checks. ≥10 test cases required.',
          'Open a pull request. Reviewers verify: clarity (is intent unambiguous?), hallucination risk (any factual claims without sources?), format compliance (does output match schema?), security (injection vectors?).',
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
        title: 'What Every Prompt Changelog Entry Must Include',
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
        title: 'When and How to Roll Back a Prompt to a Previous Version',
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
        title: 'How Teams Collaborate on Prompt Changes Without Conflicts',
        content: [
          '**A prompt ownership model prevents merge conflicts and enforces clear responsibility.** Assign one prompt owner per feature area; all changes go through that owner\'s review. For large teams, separate repos prevent concurrent editing of the same prompt.',
        ],
        items: [
          'Monorepo (recommended for <50 prompts): Single git repo, one /prompts/ directory. Each prompt owner has veto power over changes to their prompts. Enables tight coupling with code.',
          'Separate prompt repo (recommended for 50+ prompts): Dedicated repo for all prompts. Multiple teams manage different prompt sets independently. Release cycles decouple from application code.',
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
        title: 'What Automated Tests Catch Before a Prompt Change Ships',
        content: [
          '**Automated tests validate format, quality, and latency before a prompt PR is reviewed by humans.** Four test types catch different failure classes: format validation (JSON compliance), golden set comparison (output match), hallucination flags (factual claims), and latency checks (speed regression).',
        ],
        items: [
          'Format validation: parse output as JSON, validate schema, ensure all required fields present. Catches breaking format changes (MAJOR version bumps). Runs in <1 second.',
          'Golden set comparison: run prompt against 10-20 representative test inputs. Compare output against known-good answers. Catches quality regressions (reasoning degradation, accuracy drop). Runs in 5-10 seconds.',
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
    title: 'Prompt-Versionskontrolle: Nachverfolgung, Rollback & Team-Workflows',
    intro: 'Prompt-Versionskontrolle verfolgt jede Änderung an einem KI-Prompt unter Verwendung von semantischer Versionierung (MAJOR.MINOR.PATCH) und Git-Workflows. Sie ermöglicht sofortiges Rollback, Team-Zusammenarbeit und Regressionserkennung — die gleiche Disziplin, die auf Code angewendet wird, auf Prompts angewendet.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die KI-Prompts in der Produktion verwalten, Prompt Engineers, Team Leads',
    seoTitle: 'Prompt-Versionskontrolle: Git-Workflows & Rollback',
    metaDescription: 'Ungeprüfte Prompts scheitern 3-mal öfter. Prompt-Versionskontrolle mit MAJOR.MINOR.PATCH, Git-Workflows und automatisierten Regressionstests für jede Änderung.',
    readTime: '10 Min. Lesezeit',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt-Versionskontrolle: Nachverfolgung, Rollback & Team-Workflows',
      description: 'Ungeprüfte Prompts scheitern 3-mal öfter. Prompt-Versionskontrolle mit MAJOR.MINOR.PATCH, Git-Workflows und automatisierten Regressionstests für jede Änderung.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=de',
      publisher: { '@type': 'Organization', name: 'PromptQuorum' },
    },
    toc: [],
    sections: {},
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Contrôle de version des Prompts : Suivi, Restauration & Workflows Collectifs',
    intro: 'Le contrôle de version des prompts suit chaque modification d\'un prompt IA en utilisant le versioning sémantique (MAJOR.MINOR.PATCH) et les workflows Git. Il permet une restauration instantanée, la collaboration d\'équipe et la détection de régressions — la même discipline appliquée au code, appliquée aux prompts.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Développeurs gérant les prompts LLM en production, ingénieurs en prompte, chefs d\'équipe technique',
    seoTitle: 'Contrôle de version des Prompts : Workflows Git & Restauration',
    metaDescription: 'Les prompts non vérifiés échouent 3× plus souvent. Contrôlez la version des prompts avec MAJOR.MINOR.PATCH, workflows Git et tests de régression automatisés.',
    readTime: '10 min de lecture',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Contrôle de version des Prompts : Suivi, Restauration & Workflows Collectifs',
      description: 'Les prompts non vérifiés échouent 3× plus souvent. Contrôlez la version des prompts avec MAJOR.MINOR.PATCH, workflows Git et tests de régression automatisés.',
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
    title: 'プロンプトバージョン管理：追跡、ロールバック & チームワークフロー',
    intro: 'プロンプトバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）とGitワークフローを使用してAIプロンプトのすべての変更を追跡します。これにより、即座のロールバック、チーム協業、回帰検出が可能になります。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '本番環境でLLMプロンプトを管理する開発者、プロンプトエンジニア、チームリード',
    seoTitle: 'プロンプトバージョン管理：Gitワークフロー & ロールバック',
    metaDescription: 'レビュー未済のプロンプトは3倍以上失敗します。MAJOR.MINOR.PATCH、Gitワークフロー、自動回帰テストでプロンプト管理。',
    readTime: '10分で読める',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプトバージョン管理：追跡、ロールバック & チームワークフロー',
      description: 'レビュー未済のプロンプトは3倍以上失敗します。MAJOR.MINOR.PATCH、Gitワークフロー、自動回帰テストでプロンプト管理。',
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
    title: 'Prompt 版本控制：追踪、回滚 & 团队工作流',
    intro: '使用语义版本控制（MAJOR.MINOR.PATCH）和 Git 工作流追踪 AI Prompt 的每项变更。实现即时回滚、团队协作和回归检测——应用于代码的同一纪律，现在应用于 Prompt。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '在生产环境管理 LLM Prompt 的开发者、Prompt 工程师、技术主管',
    seoTitle: 'Prompt 版本控制：Git 工作流 & 回滚',
    metaDescription: '未审查的 Prompt 失败率高 3 倍。使用 MAJOR.MINOR.PATCH、Git 工作流和自动回归测试管理 Prompt。',
    readTime: '阅读约 10 分钟',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt 版本控制：追踪、回滚 & 团队工作流',
      description: '未审查的 Prompt 失败率高 3 倍。使用 MAJOR.MINOR.PATCH、Git 工作流和自动回归测试管理 Prompt。',
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
