import type { Language } from "@/lib/blog/blogContent";
import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
  en: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt Version Control: Tracking, Rollback & Team Workflows',
    intro: 'Unversioned prompts fail silently — without a change history, there is no rollback path when a prompt update degrades output quality or breaks downstream parsers. Semantic versioning (MAJOR.MINOR.PATCH), git branch workflows, automated regression tests, and structured changelogs apply the same discipline to prompt management that software teams already use for code.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    lastFactChecked: '2026-04-30 — git, semver.org, Braintrust, Promptlayer verified',
    educationalLevel: 'Advanced',
    audience: 'Developers managing LLM prompts in production, prompt engineers, engineering team leads',
    primaryTerm: 'Prompt Version Control',
    readTime: '10 min read',
    seoTitle: 'Prompt Version Control: Git, Semver & Rollback Guide',
    metaDescription: 'Unversioned prompts fail silently — no rollback without change history. Apply MAJOR.MINOR.PATCH versioning and git branch workflows to every prompt change.',
    toc: [
      { label: 'Why Version Control', anchor: 'why-version-control' },
      { label: 'Semantic Versioning for Prompts', anchor: 'semantic-versioning' },
      { label: 'Git Workflow Setup', anchor: 'git-workflow' },
      { label: 'Changelog Requirements', anchor: 'changelog' },
      { label: 'Rollback Strategies', anchor: 'rollback' },
      { label: 'Team Collaboration', anchor: 'team-collaboration' },
      { label: 'Automated Testing', anchor: 'automated-testing' },
      { label: 'Common Mistakes', anchor: 'mistakes' },
      { label: 'Compliance & Audit', anchor: 'regional-considerations' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Related Reading', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    leadAnswerBlock: '**Prompt version control tracks every change to an AI prompt using semantic versioning (MAJOR.MINOR.PATCH) and git workflows. It enables instant rollback, team collaboration, and regression detection — the same discipline applied to code, applied to prompts.**',
    quickFacts: [
      'Semantic versioning for prompts: MAJOR bumps on breaking output format changes, MINOR on quality improvements, PATCH on typo/clarification fixes',
      'A git revert on a prompt takes seconds; re-testing without version history takes hours',
      'Prompt changelogs require 5 fields: version, date, author, change type (MAJOR/MINOR/PATCH), and expected output delta',
      'Run automated regression tests against ≥10 golden test cases on every prompt PR before manual review',
      'Three branching patterns for prompts: feature/ (new capability), fix/ (regression), experiment/ (A/B test)',
    ],
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
      keywords: ['prompt version control', 'prompt versioning workflow', 'git workflow for prompts', 'prompt change management', 'how to version control AI prompts'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'git' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'Promptlayer' },
        { '@type': 'SoftwareApplication', name: 'GitHub Actions' },
      ],
      about: [
        { '@type': 'Thing', name: 'Prompt Version Control', description: 'A system for tracking every change to an AI prompt, enabling rollback to any previous version and recording the author and reason for each modification' },
        { '@type': 'Thing', name: 'Semantic Versioning for Prompts', description: 'Application of MAJOR.MINOR.PATCH versioning to AI prompts: MAJOR for breaking output format changes, MINOR for quality improvements, PATCH for typo/clarification fixes' },
        { '@type': 'Thing', name: 'Prompt Rollback', description: 'The process of reverting an AI prompt to a previously approved version using git revert, feature flags, or environment variable overrides' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Set Up a Git Workflow for Prompt Changes',
      inLanguage: 'en',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Create a feature branch for the prompt change', text: 'Run `git checkout -b feature/add-json-output` to isolate the change from main. Use prefixes feature/, fix/, or experiment/.' },
        { '@type': 'HowToStep', position: 2, name: 'Edit the prompt file and bump the version in the header comment', text: 'Update the SEMVER comment at the top of the prompt file to reflect the change type (MAJOR, MINOR, or PATCH).' },
        { '@type': 'HowToStep', position: 3, name: 'Run automated regression tests against your golden test set', text: 'Execute at least 10 representative test cases covering format validation, output comparison, hallucination detection, and latency.' },
        { '@type': 'HowToStep', position: 4, name: 'Open a pull request and complete the review checklist', text: 'Reviewer checks: instruction clarity, hallucination risk, output format specification, security vulnerabilities, and model compatibility.' },
        { '@type': 'HowToStep', position: 5, name: 'Merge to main and tag the release', text: 'After approval, merge to main and tag: `git tag v2.0.0 -m "JSON output format — MAJOR"` then `git push origin v2.0.0`.' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Prompt version control is a system that tracks every change to an AI prompt, enables rollback to any previous version, and records the author and reason for each modification. It applies semantic versioning (MAJOR.MINOR.PATCH) to prompts: MAJOR for breaking output format changes, MINOR for quality improvements, PATCH for typo/wording fixes. Prompts are stored in git as text files, changes go through PR review, and releases are tagged.' },
        },
        {
          '@type': 'Question',
          name: 'Do I need a separate git repo for prompts or can I use my existing app repo?',
          acceptedAnswer: { '@type': 'Answer', text: 'For teams under 5 engineers or fewer than 20 prompts: use a /prompts/ directory in your existing app repo. For larger teams or when prompts are shared across multiple services: a dedicated prompt repo gives cleaner ownership, independent versioning, and access control. Use the app repo if prompts are tightly coupled to app logic; use a separate repo if prompts serve multiple services or teams.' },
        },
        {
          '@type': 'Question',
          name: 'How is prompt versioning different from model versioning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Prompt versioning tracks changes to the text instructions you send to a model. Model versioning tracks which AI version (GPT-4o, Claude 3.7, Llama 4) your application calls. Both require separate version control. When you change the target model, treat it as a MAJOR prompt version bump even if the prompt text is identical — different models respond differently to the same prompt.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good minimum test suite size for a production prompt?',
          acceptedAnswer: { '@type': 'Answer', text: '10–20 golden test cases is the minimum. Cover: happy path, edge cases (empty input, very long input), adversarial inputs (attempts to override instructions), and known failure modes. Under 10 cases misses too many edge cases; over 50 cases is expensive to maintain without proportional benefit.' },
        },
        {
          '@type': 'Question',
          name: 'How do I handle versioning when the same prompt is used across different models?',
          acceptedAnswer: { '@type': 'Answer', text: 'Maintain a separate version history per prompt+model combination. Use a metadata header: `# version: 2.1.0 | model: gpt-4o`. When deploying to a new model, create a new variant file rather than overwriting the existing one. Run your full golden test suite against every model variant before promoting.' },
        },
        {
          '@type': 'Question',
          name: 'Should every wording change bump the version?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — every change bumps the version at some level. Typo fixes: PATCH. Quality improvements without format changes: MINOR. Format/structure changes that break downstream parsers: MAJOR. Never skip the version bump — even small wording changes can affect model behavior unexpectedly, and an unversioned change cannot be rolled back.' },
        },
        {
          '@type': 'Question',
          name: 'What tools support prompt version control natively?',
          acceptedAnswer: { '@type': 'Answer', text: 'Braintrust, Promptlayer, and Vellum provide native prompt versioning with UI dashboards for comparing versions, running evaluations, and viewing diff history. LangSmith has prompt version tracking built into its hub. For simpler setups, plain git with a /prompts/ directory works well — prompts are text files, and git handles diff, history, and rollback natively.' },
        },
        {
          '@type': 'Question',
          name: 'How do I roll back a prompt if I don\'t use git?',
          acceptedAnswer: { '@type': 'Answer', text: 'If you use a prompt management platform (Braintrust, Vellum, Promptlayer), use the built-in version history to revert to the previous approved version. If you store prompts in environment variables, keep a backup before every change and restore via your deployment pipeline. Going forward, add at minimum a CHANGELOG.md file — even without git, this gives you a rollback reference.' },
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
        { '@type': 'ListItem', position: 1, name: 'git revert', description: 'Standard rollback: creates a new commit that undoes the breaking change. Immediate, low risk, full audit trail. Recommended for all non-emergency rollbacks.' },
        { '@type': 'ListItem', position: 2, name: 'Feature flag switch', description: 'Switch the flag to the previous prompt version with no deploy required. Zero downtime, seconds to execute. Requires feature flags to be deployed in advance.' },
        { '@type': 'ListItem', position: 3, name: 'Environment variable override', description: 'Override the prompt content via environment variable without a code deploy. Fastest hotfix path; medium risk since changes bypass the normal review workflow.' },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          {
            type: 'tldr',
            label: 'TL;DR',
            text: 'Apply MAJOR.MINOR.PATCH versioning and git workflows to every prompt. Every change opens a PR, every PR runs automated regression tests, and every merge is tagged. Rollback is `git revert` — seconds to execute, full audit history preserved.',
          },
        ],
      },

      tldr: {
        title: 'Key Takeaways',
        isTldr: true,
        content: [
          '**TL;DR:** Prompt version control applies semantic versioning (MAJOR.MINOR.PATCH) and git workflows to AI prompts. Every change creates a PR, every PR runs automated regression tests, and every merge is tagged with a version. Rollback is a `git revert` away. Without version control, production quality drops are undetectable and unrecoverable.',
        ],
        items: [
          'Apply MAJOR.MINOR.PATCH to prompts: MAJOR for breaking output format changes, MINOR for quality improvements, PATCH for typo/wording fixes',
          'Store prompts in a `/prompts/` directory in git — treat them as code, not configuration',
          'Every prompt change opens a PR; automated regression tests run on every PR before manual review',
          'A prompt changelog requires 5 fields: version, date, author, change type, and expected output delta',
          'Roll back using `git revert` (standard), feature flags (zero downtime), or env variable override (hotfix)',
          'Assign one prompt owner per feature area to prevent merge conflicts and unclear accountability',
          'A golden test set of 10–20 representative inputs is the minimum for any production prompt',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Why Prompt Version Control Prevents Silent Regressions',
        content: [
          '**Without version control, a prompt change that degrades output quality leaves no trace — no error log, no diff, no rollback path.** The model returns plausible-sounding wrong answers instead of throwing exceptions. By the time the quality drop is noticed (via user complaints, accuracy metrics, or downstream parsing errors), the original prompt may be gone.',
          'Three failure modes that version control prevents: (1) Silent regression — a wording change subtly shifts model behavior, degrading output quality across thousands of requests before anyone notices. (2) No-rollback trap — without history, restoring the previous prompt requires reconstructing it from memory or old deployment logs. (3) Conflict during collaboration — two engineers edit the same prompt independently, and one overwrites the other\'s change with no record of what was lost.',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Prompt version control is a system that tracks every change to an AI prompt, enables rollback to any previous version, and records the author and reason for each modification.',
          },
        ],
        callouts: [
          { type: 'Warning', label: 'Silent Regression', text: 'Prompts fail silently — they return plausible-sounding wrong answers instead of errors. Your error logs will not catch quality drops. Only regression tests against a golden test set will.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'How Semantic Versioning Works for AI Prompts',
        content: [
          '**MAJOR.MINOR.PATCH versioning tells every caller whether a prompt change is safe to adopt without retesting their downstream code.** MAJOR means the output format changed (downstream parsers will break). MINOR means quality improved but the format is stable. PATCH means only wording or clarity changed with no behavioral impact.',
        ],
        columns: ['Change Type', 'When to Bump', 'Example', 'Backwards-Compatible?'],
        rows: [
          { 'Change Type': 'MAJOR', 'When to Bump': 'Output format changes — JSON to markdown, new required fields, field removal', 'Example': 'v1.2.0 → v2.0.0', 'Backwards-Compatible?': 'No — update all callers' },
          { 'Change Type': 'MINOR', 'When to Bump': 'Quality improvement, latency optimization, better instruction following', 'Example': 'v1.2.0 → v1.3.0', 'Backwards-Compatible?': 'Yes — safe to adopt' },
          { 'Change Type': 'PATCH', 'When to Bump': 'Typo fix, clarification, minor wording that does not alter model behavior', 'Example': 'v1.2.0 → v1.2.1', 'Backwards-Compatible?': 'Yes — no behavior change expected' },
        ],
        callouts: [
          { type: 'Key Point', label: 'MAJOR trigger', text: 'Bump MAJOR whenever downstream code that parses your prompt\'s output would break. If your output changes from a JSON array to a markdown list, that is a MAJOR bump even if the content is identical.' },
          { type: 'Pro Tip', label: 'Tag in git', text: 'Tag every version after merging: `git tag v2.1.0 -m "Improved date reasoning in extraction prompt"`. This creates a permanent reference for rollback.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'How to Set Up a Git Workflow for Prompt Changes',
        content: [
          '**The standard workflow is: create branch → edit prompt → run regression tests → open PR → merge and tag.** Every step mirrors a software code change — because a prompt is code.',
        ],
        numberedItems: [
          'Create a feature branch: `git checkout -b feature/add-json-output`. Use prefixes `feature/` (new capability), `fix/` (regression fix), or `experiment/` (A/B test).',
          'Edit the prompt file at `/prompts/[name].txt`. Update the version comment at the top: `# version: 2.0.0 | changed: JSON output format | author: jane`.',
          'Run the automated regression suite against your golden test set (minimum 10 cases). Tests must cover: format validation, output comparison against golden answers, hallucination flag, and latency. All tests must pass before opening a PR.',
          'Open a PR with a description covering: what changed, why, which version bump (MAJOR/MINOR/PATCH), and expected output delta. Reviewer checks: clarity, hallucination risk, output format, and security.',
          'After approval, merge to main and tag the release: `git tag v2.0.0 -m "JSON output format — MAJOR"` then `git push origin v2.0.0`.',
        ],
        codeBlock: `# .github/workflows/prompt-regression.yml
name: Prompt Regression Tests
on:
  pull_request:
    paths:
      - 'prompts/**'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt regression tests
        run: npm run test:prompts
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Directory structure', text: 'Store prompts in `/prompts/` and test fixtures in `/prompts/tests/`. This keeps prompt files reviewable on their own, separate from application code, while staying in the same repo.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'What Every Prompt Changelog Entry Must Include',
        content: [
          '**A prompt changelog entry requires 5 fields: version, date, author, change type, and expected output delta.** The output delta is the most important field: it describes how the model\'s response will differ after the change, so downstream callers know what to update.',
        ],
        columns: ['Field', 'Required', 'Example'],
        rows: [
          { 'Field': 'version', 'Required': 'Yes', 'Example': '`v2.1.0`' },
          { 'Field': 'date', 'Required': 'Yes', 'Example': '`2026-04-30`' },
          { 'Field': 'author', 'Required': 'Yes', 'Example': '`jane.smith@company.com`' },
          { 'Field': 'change type', 'Required': 'Yes', 'Example': '`MINOR — improved date extraction reasoning`' },
          { 'Field': 'expected output delta', 'Required': 'Yes', 'Example': '`Date fields now consistently use ISO 8601 (YYYY-MM-DD). Previous: MM/DD/YYYY in ~30% of edge cases.`' },
        ],
        codeBlock: `## [v2.1.0] — 2026-04-30

**Author:** jane.smith@company.com
**Change type:** MINOR — improved date extraction reasoning
**Expected output delta:** Date fields now consistently use ISO 8601 format (YYYY-MM-DD).
  Previous behavior: returned MM/DD/YYYY in ~30% of edge cases.
  Backwards-compatible — parsers accepting ISO 8601 require no update.

**Test results:** 18/18 golden test cases passed (previously 15/18).`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: 'Write changelog first', text: 'Write the changelog entry before writing the prompt change — it forces you to clarify intent. If you cannot describe the expected output delta, you do not yet understand what you are changing.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'When and How to Roll Back a Prompt to a Previous Version',
        content: [
          '**`git revert` is the standard rollback path — it creates a new commit that undoes the breaking change without erasing history.** Know the rollback triggers and match the method to the urgency.',
          'Rollback triggers: (1) Production quality drop detected via accuracy metrics or user reports. (2) Security issue found in the deployed prompt. (3) Model version update breaks compatibility with the existing prompt. (4) Business logic changed making the previous output format incorrect.',
        ],
        columns: ['Rollback Method', 'Speed', 'Risk', 'When to Use'],
        rows: [
          { 'Rollback Method': '`git revert <commit>`', 'Speed': 'Seconds to create, minutes to deploy', 'Risk': 'Low — creates a documented revert commit', 'When to Use': 'Standard non-emergency rollback; preserves full audit history' },
          { 'Rollback Method': 'Feature flag switch', 'Speed': 'Seconds — no deploy required', 'Risk': 'Low — zero downtime if flags are pre-deployed', 'When to Use': 'When prompt selection is already behind a flag and the flag system is live' },
          { 'Rollback Method': 'Environment variable override', 'Speed': 'Seconds — no code deploy', 'Risk': 'Medium — bypasses normal review workflow', 'When to Use': 'Emergency hotfix only; follow up with a proper `git revert` PR immediately after' },
        ],
        callouts: [
          { type: 'Warning', label: 'Test before rollback', text: 'Never rollback without running regression tests first — you may reintroduce a previously fixed bug. The bug the rolled-back version fixed could be worse than the regression you are escaping.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'How Teams Collaborate on Prompt Changes Without Conflicts',
        content: [
          '**Ownership prevents merge conflicts: assign one prompt owner per feature area, and all changes to that prompt require that owner\'s review.** Without clear ownership, two engineers edit the same prompt in parallel, and the later merge silently overwrites the earlier change.',
          'Two repository patterns work for teams: (1) Monorepo with `/prompts/` directory — best when prompts are tightly coupled to a single service and prompt changes need to deploy with the app. (2) Dedicated prompt repo or package — best when prompts are shared across multiple services, or when prompt engineers need independent review cycles without app repo access.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Ownership model', text: 'Assign one prompt owner per feature area (e.g., extraction-prompt owner, classification-prompt owner). Every change to that prompt goes through that owner\'s review — no exceptions.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'What Automated Tests Catch Before a Prompt Change Ships',
        content: [
          '**Regression tests catch format breaks; LLM-as-judge catches quality drops.** Four test types cover the main failure modes before a prompt change reaches production.',
          'The four test types: (1) Format validation — assert the output matches the expected schema (JSON structure, required fields, data types). Runs in milliseconds, catches 60–70% of breaking changes. (2) Golden set comparison — compare output against manually verified correct answers on 10–20 representative inputs. LLM-as-judge or string similarity metrics score the comparison. (3) Hallucination flag — detect factual claims in the output not grounded in the provided context. Flag any response that asserts facts not present in the input. (4) Latency check — assert that median response time stays within an acceptable range (e.g., p95 ≤ 3s). Catches prompts that cause excessive model computation.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Minimum test set', text: 'A golden test set of 10–20 representative inputs is the minimum for any production prompt. Cover: happy path, edge cases (empty/very long input), adversarial inputs, and known failure modes.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Common Mistakes in Prompt Version Control',
        mistakes: [
          {
            mistake: 'No versioning scheme from day one',
            problem: 'Silent breaking changes ship when the team grows and multiple engineers edit prompts without a shared versioning convention',
            fix: 'Adopt MAJOR.MINOR.PATCH from the first prompt in production — even if only one engineer writes prompts today, the next hire inherits the system',
          },
          {
            mistake: 'Storing prompts inside application code instead of a `/prompts/` directory',
            problem: 'Prompts buried in application code cannot be reviewed, tested, or versioned independently — they change with every app deploy',
            fix: 'Move all prompts to `/prompts/` with test fixtures in `/prompts/tests/`. This makes them reviewable as standalone artifacts without touching application code',
          },
          {
            mistake: 'No changelog requirement per PR',
            problem: 'When a regression appears weeks later, there is no record of what changed, when, or why — forcing time-consuming archaeology through git log',
            fix: 'Make a CHANGELOG.md entry a mandatory PR requirement via CI check — the PR fails if no changelog entry exists for the changed prompt file',
          },
          {
            mistake: 'Testing only the happy path',
            problem: 'Edge cases that work in the previous version break silently after a prompt change — detected only by user complaints or downstream parsing errors in production',
            fix: 'Require a minimum of 10 golden test cases including at least 2 edge cases and 1 adversarial input — no PR merges without full test suite passing',
          },
          {
            mistake: 'Rolling back without running regression tests',
            problem: 'The reverted version reintroduces a bug that the now-reverted change had fixed, creating a second regression on top of the first',
            fix: 'Always run the full regression suite before merging a revert PR — treat rollback commits as production changes requiring the same test gate as forward changes',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Compliance and Audit Requirements for Prompt Changes',
        content: [
          'The EU AI Act, which applies to high-risk systems in healthcare, finance, HR, and critical infrastructure, requires traceability for AI outputs in regulated domains. A version-controlled prompt history with author, date, change type, and approval records satisfies the traceability requirement without additional tooling.',
          'GDPR Article 22 applies to prompts that make or support automated decisions affecting individuals. Version control and audit logs demonstrate human oversight — a git log with signed commits provides this evidence. Healthcare and finance teams operating under sector-specific regulations (MiFID II, HIPAA, MDR) typically require 12+ months of prompt version history with tamper-evident storage.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is prompt version control?',
            a: 'Prompt version control is a system that tracks every change to an AI prompt, enables rollback to any previous version, and records the author and reason for each modification. It applies semantic versioning (MAJOR.MINOR.PATCH) to prompts: MAJOR for breaking output format changes, MINOR for quality improvements, PATCH for typo/wording fixes. Prompts are stored in git as text files, changes go through PR review, and releases are tagged.',
          },
          {
            q: 'Do I need a separate git repo for prompts or can I use my existing app repo?',
            a: 'For teams under 5 engineers or fewer than 20 prompts: use a /prompts/ directory in your existing app repo. For larger teams or when prompts are shared across multiple services: a dedicated prompt repo gives cleaner ownership, independent versioning, and access control. Use the app repo if prompts are tightly coupled to app logic; use a separate repo if prompts serve multiple services or teams.',
          },
          {
            q: 'How is prompt versioning different from model versioning?',
            a: 'Prompt versioning tracks changes to the text instructions you send to a model. Model versioning tracks which AI version (GPT-4o, Claude 3.7, Llama 4) your application calls. Both require separate version control. When you change the target model, treat it as a MAJOR prompt version bump even if the prompt text is identical — different models respond differently to the same prompt.',
          },
          {
            q: 'What is a good minimum test suite size for a production prompt?',
            a: '10–20 golden test cases is the minimum. Cover: happy path, edge cases (empty input, very long input), adversarial inputs (attempts to override instructions), and known failure modes. Under 10 cases misses too many edge cases; over 50 cases is expensive to maintain without proportional benefit.',
          },
          {
            q: 'How do I handle versioning when the same prompt is used across different models?',
            a: 'Maintain a separate version history per prompt+model combination. Use a metadata header in your prompt file: `# version: 2.1.0 | model: gpt-4o`. When deploying to a new model, create a new variant file rather than overwriting the existing one. Run your full golden test suite against every model variant before promoting.',
          },
          {
            q: 'Should every wording change bump the version?',
            a: 'Yes — every change bumps the version at some level. Typo fixes: PATCH. Quality improvements without format changes: MINOR. Format/structure changes that break downstream parsers: MAJOR. Never skip the version bump — even small wording changes can affect model behavior unexpectedly, and an unversioned change cannot be rolled back.',
          },
          {
            q: 'What tools support prompt version control natively?',
            a: 'Braintrust, Promptlayer, and Vellum provide native prompt versioning with UI dashboards for comparing versions, running evaluations, and viewing diff history. LangSmith has prompt version tracking in its hub. For simpler setups, plain git with a /prompts/ directory works well — prompts are text files, and git handles diff, history, and rollback natively.',
          },
          {
            q: 'How do I roll back a prompt if I don\'t use git?',
            a: 'If you use a prompt management platform (Braintrust, Vellum, Promptlayer), use the built-in version history to revert to the previous approved version. If you store prompts in environment variables, keep a backup before every change and restore via your deployment pipeline. Going forward, add at minimum a CHANGELOG.md file — even without git, this gives you a rollback reference.',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Prompt Review Workflow for Teams](/prompt-engineering/prompt-review-workflow-for-teams) — 7-point checklist and CI/CD gates for reviewing prompt changes before deployment',
          '[Build Quality Checks for LLM Outputs](/prompt-engineering/build-quality-checks) — Automated quality checks that run as part of the prompt PR gate',
          '[How to Test Prompts Across Models](/prompt-engineering/how-to-test-prompts-across-models) — Cross-model regression testing for validating prompt consistency before shipping',
          '[AI Hallucinations: How to Stop Them](/prompt-engineering/ai-hallucinations-how-to-stop) — Hallucination detection techniques for the automated testing step in version control workflow',
          '[RTF Prompt Framework](/prompt-engineering/rtf-framework) — Structured prompt format (Role, Task, Format) that simplifies versioning by making output format explicit',
        ],
      },

      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Semantic Versioning Specification (semver.org)](https://semver.org/) — Canonical MAJOR.MINOR.PATCH specification, directly applicable to prompt versioning',
          '[Git Documentation: git revert](https://git-scm.com/docs/git-revert) — Official reference for the primary rollback mechanism used in prompt version control workflows',
          '[Braintrust: Prompt Evaluation and Versioning Guide](https://www.braintrust.dev/docs/guides/evals) — Technical guide to prompt versioning, automated testing, and CI/CD integration using dedicated tooling',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'evergreen',
    theme: 'Team-Betrieb & Governance',
    title: 'Prompt-Versionskontrolle: Tracking, Rollback & Team-Workflows',
    intro: 'Unveersionierte Prompts schlagen lautlos fehl — ohne Änderungshistorie gibt es keinen Rollback-Pfad, wenn ein Prompt-Update die Ausgabequalität verschlechtert oder nachgelagerte Parser beschädigt. Semantisches Versioning (MAJOR.MINOR.PATCH), Git-Branch-Workflows, automatisierte Regressionstests und strukturierte Changelogs wenden dieselbe Disziplin auf das Prompt-Management an, die Software-Teams bereits für Code einsetzen.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Entwickler, die LLM-Prompts in der Produktion verwalten, Prompt-Engineers, Engineering-Team-Leads',
    primaryTerm: 'Prompt Version Control',
    readTime: '10 Min. Lesezeit',
    seoTitle: 'Prompt-Versionskontrolle: Git-Workflow & Rollback',
    metaDescription: 'Unveersionierte Prompts schlagen lautlos fehl. MAJOR.MINOR.PATCH-Versioning und Git-Workflows auf jeden Prompt-Change anwenden – Rollback in Sekunden.',
    leadAnswerBlock: '**Prompt-Versionskontrolle erfasst jede Änderung an einem KI-Prompt mithilfe von semantischem Versioning (MAJOR.MINOR.PATCH) und Git-Workflows. Sie ermöglicht sofortigen Rollback, Team-Zusammenarbeit und Regressionserkennung — dieselbe Disziplin, die für Code gilt, auf Prompts angewendet.**',
    quickFacts: [
      'Semantisches Versioning für Prompts: MAJOR bei brechenden Ausgabeformat-Änderungen, MINOR bei Qualitätsverbesserungen, PATCH bei Tippfehler-/Klärungskorrekturen',
      'Ein `git revert` eines Prompts dauert Sekunden; erneutes Testen ohne Versionshistorie kostet Stunden',
      'Prompt-Changelogs erfordern 5 Felder: Version, Datum, Autor, Änderungstyp (MAJOR/MINOR/PATCH) und erwartetes Ausgabedelta',
      'Automatisierte Regressionstests gegen ≥10 goldene Testfälle für jeden Prompt-PR durchführen, bevor eine manuelle Prüfung erfolgt',
      'Drei Branching-Muster für Prompts: feature/ (neue Funktion), fix/ (Regression), experiment/ (A/B-Test)',
    ],
    toc: [
      { label: 'Warum Versionskontrolle', anchor: 'why-version-control' },
      { label: 'Semantisches Versioning für Prompts', anchor: 'semantic-versioning' },
      { label: 'Git-Workflow einrichten', anchor: 'git-workflow' },
      { label: 'Anforderungen an den Changelog', anchor: 'changelog' },
      { label: 'Rollback-Strategien', anchor: 'rollback' },
      { label: 'Team-Zusammenarbeit', anchor: 'team-collaboration' },
      { label: 'Automatisierte Tests', anchor: 'automated-testing' },
      { label: 'Häufige Fehler', anchor: 'mistakes' },
      { label: 'Compliance & Audit', anchor: 'regional-considerations' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
      { label: 'Quellen', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt-Versionskontrolle: Tracking, Rollback & Team-Workflows',
      description: 'Unveersionierte Prompts schlagen lautlos fehl. MAJOR.MINOR.PATCH-Versioning und Git-Workflows auf jeden Prompt-Change anwenden – Rollback in Sekunden.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'de',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=de',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows?lang=de', width: 1200, height: 630 },
      keywords: ['Prompt-Versionskontrolle', 'Prompt-Versioning', 'Git-Workflow für Prompts', 'Prompt-Änderungsmanagement', 'KI-Prompts versionieren'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'git' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'Promptlayer' },
        { '@type': 'SoftwareApplication', name: 'GitHub Actions' },
      ],
      about: [
        { '@type': 'Thing', name: 'Prompt-Versionskontrolle', description: 'Ein System zur Verfolgung jeder Änderung an einem KI-Prompt, das Rollback auf jede frühere Version ermöglicht und Autor sowie Grund jeder Änderung aufzeichnet' },
        { '@type': 'Thing', name: 'Semantisches Versioning für Prompts', description: 'Anwendung von MAJOR.MINOR.PATCH-Versioning auf KI-Prompts: MAJOR für brechende Ausgabeformat-Änderungen, MINOR für Qualitätsverbesserungen, PATCH für Tippfehler-/Klärungskorrekturen' },
        { '@type': 'Thing', name: 'Prompt-Rollback', description: 'Der Prozess des Zurücksetzens eines KI-Prompts auf eine zuvor genehmigte Version mittels git revert, Feature Flags oder Umgebungsvariablen-Override' },
      ],
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die LLM-Prompts in der Produktion verwalten, Prompt-Engineers, Engineering-Team-Leads' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Git-Workflow für Prompt-Änderungen einrichten',
      inLanguage: 'de',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Feature-Branch für die Prompt-Änderung erstellen', text: '`git checkout -b feature/add-json-output` ausführen, um die Änderung von main zu isolieren. Präfixe feature/, fix/ oder experiment/ verwenden.' },
        { '@type': 'HowToStep', position: 2, name: 'Prompt-Datei bearbeiten und Version im Header-Kommentar inkrementieren', text: 'Den SEMVER-Kommentar am Anfang der Prompt-Datei aktualisieren, um den Änderungstyp (MAJOR, MINOR oder PATCH) widerzuspiegeln.' },
        { '@type': 'HowToStep', position: 3, name: 'Automatisierte Regressionstests gegen das goldene Testset ausführen', text: 'Mindestens 10 repräsentative Testfälle ausführen, die Formatvalidierung, Ausgabevergleich, Halluzinations-Flag und Latenz abdecken.' },
        { '@type': 'HowToStep', position: 4, name: 'Pull Request öffnen und Review-Checkliste abschließen', text: 'Reviewer prüft: Instruktionsklarheit, Halluzinationsrisiko, Ausgabeformat-Spezifikation, Sicherheitslücken und Modellkompatibilität.' },
        { '@type': 'HowToStep', position: 5, name: 'In main mergen und Release taggen', text: 'Nach Genehmigung in main mergen und taggen: `git tag v2.0.0 -m "JSON output format — MAJOR"` dann `git push origin v2.0.0`.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist Prompt-Versionskontrolle?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt verfolgt, einen Rollback auf jede frühere Version ermöglicht und Autor sowie Grund jeder Änderung festhält. Es wendet semantisches Versioning (MAJOR.MINOR.PATCH) auf Prompts an: MAJOR für brechende Ausgabeformat-Änderungen, MINOR für Qualitätsverbesserungen, PATCH für Tippfehler-/Wortlautkorrekturen. Prompts werden als Textdateien in Git gespeichert, Änderungen durchlaufen PR-Reviews, und Releases werden getaggt.' } },
        { '@type': 'Question', name: 'Benötige ich ein separates Git-Repository für Prompts oder kann ich mein bestehendes App-Repo nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Für Teams unter 5 Entwicklern oder weniger als 20 Prompts: Verwenden Sie ein /prompts/-Verzeichnis im bestehenden App-Repo. Für größere Teams oder wenn Prompts über mehrere Dienste geteilt werden: Ein dediziertes Prompt-Repo bietet sauberere Eigentümerschaft, unabhängige Versionierung und Zugriffssteuerung. Nutzen Sie das App-Repo, wenn Prompts eng mit der App-Logik gekoppelt sind; ein separates Repo, wenn Prompts mehreren Diensten oder Teams dienen.' } },
        { '@type': 'Question', name: 'Wie unterscheidet sich Prompt-Versionierung von Modell-Versionierung?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt-Versionierung verfolgt Änderungen an den Textinstruktionen, die Sie an ein Modell senden. Modell-Versionierung verfolgt, welche KI-Version (GPT-4o, Claude 3.7, Llama 4) Ihre Anwendung aufruft. Beide erfordern separate Versionskontrolle. Wenn Sie das Zielmodell wechseln, behandeln Sie es als MAJOR-Prompt-Versions-Bump, auch wenn der Prompt-Text identisch ist — verschiedene Modelle antworten unterschiedlich auf denselben Prompt.' } },
        { '@type': 'Question', name: 'Wie groß sollte ein Testset für einen Produktions-Prompt mindestens sein?', acceptedAnswer: { '@type': 'Answer', text: '10–20 goldene Testfälle sind das Minimum. Abdecken: Happy Path, Randfälle (leere Eingabe, sehr lange Eingabe), adversarielle Eingaben (Versuche, Instruktionen zu überschreiben) und bekannte Fehlermuster. Unter 10 Fällen werden zu viele Randfälle übersehen; über 50 Fälle sind kostspielig zu pflegen ohne proportionalen Nutzen.' } },
        { '@type': 'Question', name: 'Wie gehe ich mit Versionierung um, wenn derselbe Prompt über verschiedene Modelle verwendet wird?', acceptedAnswer: { '@type': 'Answer', text: 'Pflegen Sie eine separate Versionshistorie pro Prompt+Modell-Kombination. Verwenden Sie einen Metadaten-Header: `# version: 2.1.0 | model: gpt-4o`. Beim Deployen auf ein neues Modell erstellen Sie eine neue Variantendatei statt die bestehende zu überschreiben. Führen Sie Ihre vollständige goldene Test-Suite gegen jede Modellvariante aus, bevor Sie sie in die Produktion überführen.' } },
        { '@type': 'Question', name: 'Muss jede Formulierungsänderung die Version inkrementieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — jede Änderung inkrementiert die Version auf irgendeiner Ebene. Tippfehler-Korrekturen: PATCH. Qualitätsverbesserungen ohne Formatänderungen: MINOR. Format-/Strukturänderungen, die nachgelagerte Parser brechen: MAJOR. Den Versions-Bump niemals überspringen — selbst kleine Formulierungsänderungen können das Modellverhalten unerwartet beeinflussen, und eine unveersionierte Änderung kann nicht zurückgerollt werden.' } },
        { '@type': 'Question', name: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust, Promptlayer und Vellum bieten native Prompt-Versionierung mit UI-Dashboards zum Vergleich von Versionen, zur Ausführung von Evaluierungen und zur Anzeige der Diff-Historie. LangSmith verfügt über integrierte Prompt-Versionsverfolgung in seinem Hub. Für einfachere Setups funktioniert reines Git mit einem /prompts/-Verzeichnis gut — Prompts sind Textdateien, und Git handhabt Diff, Historie und Rollback nativ.' } },
        { '@type': 'Question', name: 'Wie rolle ich einen Prompt zurück, wenn ich Git nicht nutze?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn Sie eine Prompt-Management-Plattform (Braintrust, Vellum, Promptlayer) verwenden, nutzen Sie die eingebaute Versionshistorie, um auf die vorherige genehmigte Version zurückzusetzen. Wenn Sie Prompts in Umgebungsvariablen speichern, erstellen Sie vor jeder Änderung ein Backup und stellen Sie es über Ihre Deployment-Pipeline wieder her. Für die Zukunft: Fügen Sie mindestens eine CHANGELOG.md-Datei hinzu — auch ohne Git gibt Ihnen das eine Rollback-Referenz.' } },
        { '@type': 'Question', name: 'Muss ich bei der Versionskontrolle von Prompts die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, in zwei Hinsichten. Erstens verpflichtet DSGVO Art. 22 zur Nachweisbarkeit menschlicher Aufsicht bei automatisierten Entscheidungen — ein Git-Log mit signierten Commits und PR-Genehmigungen liefert diesen Nachweis lückenlos. Zweitens greift DSGVO Art. 28, wenn Prompts personenbezogene Daten enthalten und über Cloud-APIs an externe Anbieter gesendet werden: Die Prompt-Versionshistorie dokumentiert, welche Verarbeitungslogik zu welchem Zeitpunkt eingesetzt wurde. BSI-Grundschutz-zertifizierte Organisationen erfüllen mit Git-basierter Prompt-Versionskontrolle die Anforderungen aus Baustein OPS.1.1.2 direkt.' } },
        { '@type': 'Question', name: 'Ist Git-basierte Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Git ist kostenfrei, weit verbreitet und in der deutschen IT-Landschaft bestens etabliert. Mittelständische Unternehmen ohne dedizierten MLOps-Stack können mit einem einfachen /prompts/-Verzeichnis im bestehenden Anwendungsrepository starten, ohne zusätzliche Lizenz- oder Infrastrukturkosten. Für Unternehmen mit BSI-IT-Grundschutz-Anforderungen erfüllt dieser Ansatz die Änderungsnachverfolgungspflichten direkt. Wer eine vollständigere Lösung mit Evaluierungs-Dashboard benötigt, kann auf Braintrust oder Promptlayer aufsetzen — beide bieten EU-Hosting-Optionen, die DSGVO-Anforderungen erfüllen.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt-Rollback-Methoden',
      inLanguage: 'de',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'git revert', description: 'Standard-Rollback: Erstellt einen neuen Commit, der die brechende Änderung rückgängig macht. Sofortig, geringes Risiko, vollständige Audithistorie. Empfohlen für alle nicht-notfall-Rollbacks.' },
        { '@type': 'ListItem', position: 2, name: 'Feature-Flag-Umschaltung', description: 'Den Flag auf die vorherige Prompt-Version umschalten ohne Deploy. Zero-Downtime, Ausführung in Sekunden. Erfordert vorab deployte Feature Flags.' },
        { '@type': 'ListItem', position: 3, name: 'Umgebungsvariablen-Override', description: 'Prompt-Inhalt über Umgebungsvariable überschreiben ohne Code-Deploy. Schnellster Hotfix-Pfad; mittleres Risiko, da Änderungen den normalen Review-Workflow umgehen.' },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          {
            type: 'tldr',
            label: 'TL;DR',
            text: 'MAJOR.MINOR.PATCH-Versioning und Git-Workflows auf jeden Prompt anwenden. Jede Änderung öffnet einen PR, jeder PR durchläuft automatisierte Regressionstests, und jeder Merge wird mit einer Version getaggt. Rollback ist ein `git revert` — in Sekunden ausgeführt, vollständige Audithistorie erhalten.',
          },
        ],
      },

      tldr: {
        title: 'Zusammenfassung',
        isTldr: true,
        content: [
          '**Zusammenfassung:** Prompt-Versionskontrolle wendet semantisches Versioning (MAJOR.MINOR.PATCH) und Git-Workflows auf KI-Prompts an. Jede Änderung erstellt einen PR, jeder PR führt automatisierte Regressionstests aus, und jeder Merge wird mit einer Version getaggt. Der Rollback ist ein `git revert`. Ohne Versionskontrolle sind Qualitätseinbrüche in der Produktion weder erkennbar noch behebbar.',
        ],
        items: [
          'MAJOR.MINOR.PATCH auf Prompts anwenden: MAJOR bei brechenden Ausgabeformat-Änderungen, MINOR bei Qualitätsverbesserungen, PATCH bei Tippfehler-/Wortlautkorrekturen',
          'Prompts in einem `/prompts/`-Verzeichnis in Git speichern – wie Code behandeln, nicht wie Konfiguration',
          'Jede Prompt-Änderung öffnet einen PR; automatisierte Regressionstests laufen auf jedem PR vor der manuellen Prüfung',
          'Ein Prompt-Changelog erfordert 5 Felder: Version, Datum, Autor, Änderungstyp und erwartetes Ausgabedelta',
          'Rollback über `git revert` (Standard), Feature Flags (Zero-Downtime) oder Umgebungsvariablen-Override (Hotfix)',
          'Einen Prompt-Eigentümer pro Funktionsbereich benennen, um Merge-Konflikte und unklare Verantwortlichkeiten zu verhindern',
          'Ein goldenes Testset mit 10–20 repräsentativen Eingaben ist das Minimum für jeden Produktions-Prompt',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Warum Prompt-Versionskontrolle stille Regressionen verhindert',
        content: [
          '**Ohne Versionskontrolle hinterlässt eine Prompt-Änderung, die die Ausgabequalität verschlechtert, keine Spur — kein Fehlerlog, kein Diff, kein Rollback-Pfad.** Das Modell liefert plausibel klingende falsche Antworten statt Ausnahmen auszulösen. Bis der Qualitätseinbruch bemerkt wird (durch Nutzerbeschwerden, Genauigkeitsmetriken oder Parsing-Fehler nachgelagerter Systeme), ist der ursprüngliche Prompt möglicherweise verloren.',
          'Drei Fehlermuster, die Versionskontrolle verhindert: (1) Stille Regression — eine Formulierungsänderung verändert das Modellverhalten subtil und verschlechtert die Ausgabequalität über Tausende von Anfragen, bevor es jemandem auffällt. (2) Kein-Rollback-Falle — ohne Verlauf erfordert die Wiederherstellung des vorherigen Prompts eine Rekonstruktion aus dem Gedächtnis oder alten Deployment-Logs. (3) Kollisionen bei der Zusammenarbeit — zwei Entwickler bearbeiten denselben Prompt parallel, und der spätere Merge überschreibt die frühere Änderung ohne jede Aufzeichnung.',
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt verfolgt, einen Rollback auf jede frühere Version ermöglicht und Autor sowie Grund jeder Änderung festhält.' },
        ],
        callouts: [
          { type: 'Warning', label: 'Stille Regression', text: 'Prompts schlagen lautlos fehl — sie liefern plausibel klingende falsche Antworten statt Fehlern. Ihre Fehler-Logs erfassen keine Qualitätseinbrüche. Nur Regressionstests gegen ein goldenes Testset decken diese auf.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'Wie semantisches Versioning für KI-Prompts funktioniert',
        content: [
          '**MAJOR.MINOR.PATCH-Versioning teilt jedem Aufrufer mit, ob eine Prompt-Änderung sicher übernommen werden kann, ohne den nachgelagerten Code erneut zu testen.** MAJOR bedeutet, dass sich das Ausgabeformat geändert hat (nachgelagerte Parser brechen). MINOR bedeutet, dass sich die Qualität verbessert hat, das Format aber stabil geblieben ist. PATCH bedeutet, dass sich nur Formulierung oder Klarheit geändert haben, ohne verhaltensrelevante Auswirkungen.',
        ],
        columns: ['Änderungstyp', 'Wann inkrementieren', 'Beispiel', 'Rückwärtskompatibel?'],
        rows: [
          { 'Änderungstyp': 'MAJOR', 'Wann inkrementieren': 'Ausgabeformat ändert sich — JSON zu Markdown, neue Pflichtfelder, Felder entfernt', 'Beispiel': 'v1.2.0 → v2.0.0', 'Rückwärtskompatibel?': 'Nein — alle Aufrufer aktualisieren' },
          { 'Änderungstyp': 'MINOR', 'Wann inkrementieren': 'Qualitätsverbesserung, Latenzoptimierung, bessere Instruktionsbefolgung', 'Beispiel': 'v1.2.0 → v1.3.0', 'Rückwärtskompatibel?': 'Ja — sicher zu übernehmen' },
          { 'Änderungstyp': 'PATCH', 'Wann inkrementieren': 'Tippfehler, Klärung, kleinere Formulierungsänderung ohne Verhaltensauswirkung', 'Beispiel': 'v1.2.0 → v1.2.1', 'Rückwärtskompatibel?': 'Ja — keine Verhaltensänderung zu erwarten' },
        ],
        callouts: [
          { type: 'Key Point', label: 'MAJOR-Auslöser', text: 'Inkrementieren Sie MAJOR immer dann, wenn nachgelagerter Code, der die Ausgabe Ihres Prompts verarbeitet, brechen würde. Wenn sich die Ausgabe von einem JSON-Array zu einer Markdown-Liste ändert, ist das ein MAJOR-Bump, auch wenn der Inhalt identisch ist.' },
          { type: 'Pro Tip', label: 'In Git taggen', text: 'Taggen Sie jede Version nach dem Merge: `git tag v2.1.0 -m "Verbesserte Datumsextraktion in Extraktions-Prompt"`. Das schafft eine permanente Referenz für den Rollback.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'Git-Workflow für Prompt-Änderungen einrichten',
        content: [
          '**Der Standardworkflow lautet: Branch erstellen → Prompt bearbeiten → Regressionstests ausführen → PR öffnen → Mergen und taggen.** Jeder Schritt spiegelt eine Software-Code-Änderung wider — denn ein Prompt ist Code.',
        ],
        numberedItems: [
          'Feature-Branch erstellen: `git checkout -b feature/add-json-output`. Präfixe verwenden: `feature/` (neue Funktion), `fix/` (Regressionsbehebung) oder `experiment/` (A/B-Test).',
          'Prompt-Datei unter `/prompts/[name].txt` bearbeiten. Den Versionskommentar am Anfang aktualisieren: `# version: 2.0.0 | changed: JSON output format | author: jane`.',
          'Automatisierte Regressionssuite gegen das goldene Testset ausführen (mindestens 10 Testfälle). Tests müssen abdecken: Formatvalidierung, Ausgabevergleich mit goldenen Antworten, Halluzinations-Flag und Latenz. Alle Tests müssen bestehen, bevor ein PR geöffnet wird.',
          'PR öffnen mit einer Beschreibung, die enthält: Was wurde geändert, warum, welcher Versions-Bump (MAJOR/MINOR/PATCH) und erwartetes Ausgabedelta. Reviewer prüft: Klarheit, Halluzinationsrisiko, Ausgabeformat und Sicherheit.',
          'Nach Genehmigung in main mergen und Release taggen: `git tag v2.0.0 -m "JSON output format — MAJOR"` dann `git push origin v2.0.0`.',
        ],
        codeBlock: `# .github/workflows/prompt-regression.yml
name: Prompt Regression Tests
on:
  pull_request:
    paths:
      - 'prompts/**'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run prompt regression tests
        run: npm run test:prompts
        env:
          OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}`,
        codeLanguage: 'yaml',
        callouts: [
          { type: 'Pro Tip', label: 'Verzeichnisstruktur', text: 'Prompts in `/prompts/` und Test-Fixtures in `/prompts/tests/` ablegen. So sind Prompt-Dateien als eigenständige Artefakte prüfbar — getrennt vom Anwendungscode, aber im selben Repository.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'Was jeder Prompt-Changelog-Eintrag enthalten muss',
        content: [
          '**Ein Prompt-Changelog-Eintrag erfordert 5 Felder: Version, Datum, Autor, Änderungstyp und erwartetes Ausgabedelta.** Das Ausgabedelta ist das wichtigste Feld: Es beschreibt, wie die Modellantwort sich nach der Änderung unterscheiden wird, damit nachgelagerte Aufrufer wissen, was sie anpassen müssen.',
        ],
        columns: ['Feld', 'Pflichtfeld', 'Beispiel'],
        rows: [
          { 'Feld': 'version', 'Pflichtfeld': 'Ja', 'Beispiel': '`v2.1.0`' },
          { 'Feld': 'date', 'Pflichtfeld': 'Ja', 'Beispiel': '`2026-04-30`' },
          { 'Feld': 'author', 'Pflichtfeld': 'Ja', 'Beispiel': '`jane.smith@company.com`' },
          { 'Feld': 'change type', 'Pflichtfeld': 'Ja', 'Beispiel': '`MINOR — verbesserte Datumsextraktion`' },
          { 'Feld': 'expected output delta', 'Pflichtfeld': 'Ja', 'Beispiel': '`Datumsfelder verwenden jetzt konsistent ISO 8601 (JJJJ-MM-TT). Zuvor: MM.TT.JJJJ in ~30 % der Randfälle.`' },
        ],
        codeBlock: `## [v2.1.0] — 2026-04-30

**Author:** jane.smith@company.com
**Change type:** MINOR — improved date extraction reasoning
**Expected output delta:** Date fields now consistently use ISO 8601 format (YYYY-MM-DD).
  Previous behavior: returned MM/DD/YYYY in ~30% of edge cases.
  Backwards-compatible — parsers accepting ISO 8601 require no update.

**Test results:** 18/18 golden test cases passed (previously 15/18).`,
        codeLanguage: 'markdown',
        callouts: [
          { type: 'Best Practice', label: 'Zuerst Changelog schreiben', text: 'Schreiben Sie den Changelog-Eintrag, bevor Sie die Prompt-Änderung verfassen — das zwingt Sie, die Absicht zu klären. Wenn Sie das erwartete Ausgabedelta nicht beschreiben können, haben Sie noch nicht verstanden, was Sie ändern.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'Wann und wie Sie einen Prompt auf eine frühere Version zurücksetzen',
        content: [
          '**`git revert` ist der Standard-Rollback-Pfad — er erstellt einen neuen Commit, der die brechende Änderung rückgängig macht, ohne die Historie zu löschen.** Kennen Sie die Rollback-Auslöser und wählen Sie die Methode passend zur Dringlichkeit.',
          'Rollback-Auslöser: (1) Qualitätseinbruch in der Produktion erkannt über Genauigkeitsmetriken oder Nutzermeldungen. (2) Sicherheitsproblem im eingesetzten Prompt gefunden. (3) Modell-Versionsupdate bricht Kompatibilität mit dem bestehenden Prompt. (4) Geschäftslogik geändert, was das vorherige Ausgabeformat inkorrekt macht.',
        ],
        columns: ['Rollback-Methode', 'Geschwindigkeit', 'Risiko', 'Verwendung'],
        rows: [
          { 'Rollback-Methode': '`git revert <commit>`', 'Geschwindigkeit': 'Sekunden zum Erstellen, Minuten bis zum Deploy', 'Risiko': 'Niedrig — erstellt einen dokumentierten Revert-Commit', 'Verwendung': 'Standard-Rollback ohne Zeitdruck; vollständige Audithistorie bleibt erhalten' },
          { 'Rollback-Methode': 'Feature-Flag-Umschaltung', 'Geschwindigkeit': 'Sekunden — kein Deploy nötig', 'Risiko': 'Niedrig — Zero-Downtime bei vordeployten Flags', 'Verwendung': 'Wenn Prompt-Auswahl bereits hinter einem Flag liegt und das Flag-System aktiv ist' },
          { 'Rollback-Methode': 'Umgebungsvariablen-Override', 'Geschwindigkeit': 'Sekunden — kein Code-Deploy', 'Risiko': 'Mittel — umgeht den normalen Review-Workflow', 'Verwendung': 'Nur für Notfall-Hotfixes; sofort anschließend einen ordentlichen `git revert`-PR erstellen' },
        ],
        callouts: [
          { type: 'Warning', label: 'Vor dem Rollback testen', text: 'Führen Sie niemals einen Rollback durch, ohne vorher Regressionstests auszuführen — Sie könnten einen zuvor behobenen Bug erneut einführen. Der Bug, den die zurückgerollte Version behoben hatte, könnte schlimmer sein als die Regression, der Sie entkommen.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'Wie Teams konfliktfrei an Prompt-Änderungen zusammenarbeiten',
        content: [
          '**Eigentümerschaft verhindert Merge-Konflikte: Weisen Sie einen Prompt-Eigentümer pro Funktionsbereich zu, und alle Änderungen an diesem Prompt erfordern die Prüfung durch diesen Eigentümer.** Ohne klare Eigentümerschaft bearbeiten zwei Entwickler denselben Prompt parallel, und der spätere Merge überschreibt die frühere Änderung ohne jede Aufzeichnung.',
          'Zwei Repository-Muster funktionieren für Teams: (1) Monorepo mit `/prompts/`-Verzeichnis — am besten, wenn Prompts eng mit einem einzelnen Dienst gekoppelt sind und Prompt-Änderungen mit der App deployt werden müssen. (2) Dediziertes Prompt-Repository oder -Paket — am besten, wenn Prompts über mehrere Dienste geteilt werden oder Prompt-Engineers unabhängige Review-Zyklen ohne Zugriff auf das App-Repo benötigen.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Eigentümerschaftsmodell', text: 'Weisen Sie einen Prompt-Eigentümer pro Funktionsbereich zu (z. B. Extraktions-Prompt-Eigentümer, Klassifizierungs-Prompt-Eigentümer). Jede Änderung an diesem Prompt durchläuft die Prüfung dieses Eigentümers — ohne Ausnahmen.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'Was automatisierte Tests vor dem Release einer Prompt-Änderung prüfen',
        content: [
          '**Regressionstests erkennen Format-Brüche; LLM-als-Richter erkennt Qualitätseinbrüche.** Vier Testtypen decken die wichtigsten Fehlermuster ab, bevor eine Prompt-Änderung die Produktion erreicht.',
          'Die vier Testtypen: (1) Formatvalidierung — prüft, ob die Ausgabe dem erwarteten Schema entspricht (JSON-Struktur, Pflichtfelder, Datentypen). Läuft in Millisekunden, erkennt 60–70 % der brechenden Änderungen. (2) Goldener-Satz-Vergleich — vergleicht Ausgabe mit manuell verifizierten korrekten Antworten für 10–20 repräsentative Eingaben. LLM-als-Richter oder Zeichenkettenähnlichkeitsmetriken bewerten den Vergleich. (3) Halluzinations-Flag — erkennt sachliche Behauptungen in der Ausgabe, die nicht im bereitgestellten Kontext verankert sind. Markiert jede Antwort, die Fakten behauptet, die nicht in der Eingabe vorhanden sind. (4) Latenzprüfung — prüft, ob die mediane Antwortzeit in einem akzeptablen Bereich bleibt (z. B. p95 ≤ 3 s). Erkennt Prompts, die übermäßige Modellberechnungen verursachen.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Minimales Testset', text: 'Ein goldenes Testset mit 10–20 repräsentativen Eingaben ist das Minimum für jeden Produktions-Prompt. Abdecken: Happy Path, Randfälle (leere/sehr lange Eingabe), adversarielle Eingaben und bekannte Fehlermuster.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Häufige Fehler bei der Prompt-Versionskontrolle',
        mistakes: [
          {
            mistake: 'Kein Versionierungsschema vom ersten Tag an',
            problem: 'Stille brechende Änderungen gelangen in die Produktion, wenn das Team wächst und mehrere Entwickler Prompts ohne eine gemeinsame Versionierungskonvention bearbeiten',
            fix: 'MAJOR.MINOR.PATCH ab dem ersten Produktions-Prompt verwenden — auch wenn heute nur ein Entwickler Prompts schreibt, erbt der nächste Mitarbeiter das System',
          },
          {
            mistake: 'Prompts im Anwendungscode statt in einem `/prompts/`-Verzeichnis ablegen',
            problem: 'Im Anwendungscode vergrabene Prompts können nicht unabhängig geprüft, getestet oder versioniert werden — sie ändern sich mit jedem App-Deploy',
            fix: 'Alle Prompts nach `/prompts/` mit Test-Fixtures in `/prompts/tests/` verschieben. So sind sie als eigenständige Artefakte prüfbar, ohne den Anwendungscode zu berühren',
          },
          {
            mistake: 'Keine Changelog-Pflicht pro PR',
            problem: 'Wenn Wochen später eine Regression auftritt, gibt es keine Aufzeichnung darüber, was wann und warum geändert wurde — was zeitaufwändige Archäologie im Git-Log erzwingt',
            fix: 'Einen CHANGELOG.md-Eintrag per CI-Check zur Pflichtanforderung im PR machen — der PR schlägt fehl, wenn für die geänderte Prompt-Datei kein Changelog-Eintrag existiert',
          },
          {
            mistake: 'Nur den Happy Path testen',
            problem: 'Randfälle, die in der vorherigen Version funktionieren, brechen nach einer Prompt-Änderung lautlos — erst durch Nutzerbeschwerden oder Parsing-Fehler in der Produktion erkannt',
            fix: 'Mindestens 10 goldene Testfälle vorschreiben, darunter mindestens 2 Randfälle und 1 adversarielle Eingabe — kein PR merged ohne bestandene vollständige Test-Suite',
          },
          {
            mistake: 'Rollback ohne vorherige Regressionstests durchführen',
            problem: 'Die zurückgerollte Version führt einen Bug erneut ein, den die nun zurückgerollte Änderung behoben hatte — eine zweite Regression obendrauf',
            fix: 'Vor dem Merge eines Revert-PRs immer die vollständige Regressionssuite ausführen — Rollback-Commits wie Vorwärtsänderungen behandeln, die dasselbe Test-Gate erfordern',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Compliance- und Audit-Anforderungen für Prompt-Änderungen',
        content: [
          'Der EU AI Act, der für Hochrisikosysteme in regulierten Bereichen wie Gesundheitswesen, Finanzen, HR und kritische Infrastruktur gilt, schreibt Rückverfolgbarkeit für KI-Ausgaben vor. Eine versionskontrollierte Prompt-Historie mit Autor, Datum, Änderungstyp und Genehmigungsnachweis erfüllt diese Anforderung ohne zusätzliches Tooling.',
          'Die DSGVO Art. 22 gilt für Prompts, die automatisierte Entscheidungen treffen oder unterstützen, die Personen betreffen. Versionskontrolle und Audit-Logs belegen menschliche Aufsicht — ein Git-Log mit signierten Commits liefert diesen Nachweis. Unternehmen in Deutschland, Österreich und der Schweiz (DACH) sollten zusätzlich DSGVO Art. 28 (Auftragsverarbeitungsverträge) beachten, wenn Prompts personenbezogene Daten enthalten und über Cloud-APIs an externe Anbieter gesendet werden: Die Prompt-Versionshistorie dokumentiert, welche Instruktionen zu welchem Zeitpunkt übermittelt wurden.',
          'BSI-Grundschutz-Kataloge: Für Unternehmen, die nach BSI IT-Grundschutz zertifiziert sind oder es anstreben, bildet die Git-basierte Prompt-Versionskontrolle eine direkte Maßnahme zur Umsetzung der Anforderungen aus Baustein OPS.1.1.2 (Ordnungsgemäße IT-Administration) — Änderungsnachverfolgung, Rollback und Genehmigungsworkflows sind explizit gefordert. Teams in Finanzdienstleistung und Gesundheitswesen, die unter sektorspezifischen Vorschriften (MiFID II, HIPAA, MDR) operieren, benötigen typischerweise eine Prompt-Versionshistorie von 12+ Monaten mit manipulationssicherer Speicherung.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Was ist Prompt-Versionskontrolle?', a: 'Prompt-Versionskontrolle ist ein System, das jede Änderung an einem KI-Prompt verfolgt, einen Rollback auf jede frühere Version ermöglicht und Autor sowie Grund jeder Änderung festhält. Es wendet semantisches Versioning (MAJOR.MINOR.PATCH) auf Prompts an: MAJOR für brechende Ausgabeformat-Änderungen, MINOR für Qualitätsverbesserungen, PATCH für Tippfehler-/Wortlautkorrekturen. Prompts werden als Textdateien in Git gespeichert, Änderungen durchlaufen PR-Reviews, und Releases werden getaggt.' },
          { q: 'Benötige ich ein separates Git-Repository für Prompts oder kann ich mein bestehendes App-Repo nutzen?', a: 'Für Teams unter 5 Entwicklern oder weniger als 20 Prompts: Verwenden Sie ein /prompts/-Verzeichnis im bestehenden App-Repo. Für größere Teams oder wenn Prompts über mehrere Dienste geteilt werden: Ein dediziertes Prompt-Repo bietet sauberere Eigentümerschaft, unabhängige Versionierung und Zugriffssteuerung. Nutzen Sie das App-Repo, wenn Prompts eng mit der App-Logik gekoppelt sind; ein separates Repo, wenn Prompts mehreren Diensten oder Teams dienen.' },
          { q: 'Wie unterscheidet sich Prompt-Versionierung von Modell-Versionierung?', a: 'Prompt-Versionierung verfolgt Änderungen an den Textinstruktionen, die Sie an ein Modell senden. Modell-Versionierung verfolgt, welche KI-Version (GPT-4o, Claude 3.7, Llama 4) Ihre Anwendung aufruft. Beide erfordern separate Versionskontrolle. Wenn Sie das Zielmodell wechseln, behandeln Sie es als MAJOR-Prompt-Versions-Bump, auch wenn der Prompt-Text identisch ist — verschiedene Modelle antworten unterschiedlich auf denselben Prompt.' },
          { q: 'Wie groß sollte ein Testset für einen Produktions-Prompt mindestens sein?', a: '10–20 goldene Testfälle sind das Minimum. Abdecken: Happy Path, Randfälle (leere Eingabe, sehr lange Eingabe), adversarielle Eingaben (Versuche, Instruktionen zu überschreiben) und bekannte Fehlermuster. Unter 10 Fällen werden zu viele Randfälle übersehen; über 50 Fälle sind kostspielig zu pflegen ohne proportionalen Nutzen.' },
          { q: 'Wie gehe ich mit Versionierung um, wenn derselbe Prompt über verschiedene Modelle verwendet wird?', a: 'Pflegen Sie eine separate Versionshistorie pro Prompt+Modell-Kombination. Verwenden Sie einen Metadaten-Header: `# version: 2.1.0 | model: gpt-4o`. Beim Deployen auf ein neues Modell erstellen Sie eine neue Variantendatei statt die bestehende zu überschreiben. Führen Sie Ihre vollständige goldene Test-Suite gegen jede Modellvariante aus, bevor Sie sie in die Produktion überführen.' },
          { q: 'Muss jede Formulierungsänderung die Version inkrementieren?', a: 'Ja — jede Änderung inkrementiert die Version auf irgendeiner Ebene. Tippfehler-Korrekturen: PATCH. Qualitätsverbesserungen ohne Formatänderungen: MINOR. Format-/Strukturänderungen, die nachgelagerte Parser brechen: MAJOR. Den Versions-Bump niemals überspringen — selbst kleine Formulierungsänderungen können das Modellverhalten unerwartet beeinflussen, und eine unveersionierte Änderung kann nicht zurückgerollt werden.' },
          { q: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?', a: 'Braintrust, Promptlayer und Vellum bieten native Prompt-Versionierung mit UI-Dashboards zum Vergleich von Versionen, zur Ausführung von Evaluierungen und zur Anzeige der Diff-Historie. LangSmith verfügt über integrierte Prompt-Versionsverfolgung in seinem Hub. Für einfachere Setups funktioniert reines Git mit einem /prompts/-Verzeichnis gut — Prompts sind Textdateien, und Git handhabt Diff, Historie und Rollback nativ.' },
          { q: 'Wie rolle ich einen Prompt zurück, wenn ich Git nicht nutze?', a: 'Wenn Sie eine Prompt-Management-Plattform (Braintrust, Vellum, Promptlayer) verwenden, nutzen Sie die eingebaute Versionshistorie, um auf die vorherige genehmigte Version zurückzusetzen. Wenn Sie Prompts in Umgebungsvariablen speichern, erstellen Sie vor jeder Änderung ein Backup und stellen Sie es über Ihre Deployment-Pipeline wieder her. Für die Zukunft: Fügen Sie mindestens eine CHANGELOG.md-Datei hinzu — auch ohne Git gibt Ihnen das eine Rollback-Referenz.' },
          { q: 'Muss ich bei der Versionskontrolle von Prompts die DSGVO beachten?', a: 'Ja, in zwei Hinsichten. Erstens verpflichtet DSGVO Art. 22 zur Nachweisbarkeit menschlicher Aufsicht bei automatisierten Entscheidungen — ein Git-Log mit signierten Commits und PR-Genehmigungen liefert diesen Nachweis lückenlos. Zweitens greift DSGVO Art. 28, wenn Prompts personenbezogene Daten enthalten und über Cloud-APIs an externe Anbieter gesendet werden: Die Prompt-Versionshistorie dokumentiert, welche Verarbeitungslogik zu welchem Zeitpunkt eingesetzt wurde. BSI-Grundschutz-zertifizierte Organisationen erfüllen mit Git-basierter Prompt-Versionskontrolle die Anforderungen aus Baustein OPS.1.1.2 direkt.' },
          { q: 'Ist Git-basierte Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?', a: 'Ja — Git ist kostenfrei, weit verbreitet und in der deutschen IT-Landschaft bestens etabliert. Mittelständische Unternehmen ohne dedizierten MLOps-Stack können mit einem einfachen /prompts/-Verzeichnis im bestehenden Anwendungsrepository starten, ohne zusätzliche Lizenz- oder Infrastrukturkosten. Für Unternehmen mit BSI-IT-Grundschutz-Anforderungen erfüllt dieser Ansatz die Änderungsnachverfolgungspflichten direkt. Wer eine vollständigere Lösung benötigt, kann auf Braintrust oder Promptlayer aufsetzen — beide bieten EU-Hosting-Optionen, die DSGVO-Anforderungen erfüllen.' },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Prompt-Review-Workflow für Teams](/prompt-engineering/prompt-review-workflow-for-teams?lang=de) — 7-Punkte-Checkliste und CI/CD-Gates zur Prüfung von Prompt-Änderungen vor dem Deployment',
          '[Build-Qualitätsprüfungen für LLM-Ausgaben](/prompt-engineering/build-quality-checks?lang=de) — Automatisierte Qualitätsprüfungen als Teil des Prompt-PR-Gates',
          '[Prompts über Modelle hinweg testen](/prompt-engineering/how-to-test-prompts-across-models?lang=de) — Cross-Modell-Regressionstests zur Validierung der Prompt-Konsistenz vor dem Release',
          '[KI-Halluzinationen verhindern](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) — Halluzinations-Erkennungstechniken für den automatisierten Testschritt im Versionskontroll-Workflow',
          '[RTF-Prompt-Framework](/prompt-engineering/rtf-framework?lang=de) — Strukturiertes Prompt-Format (Rolle, Aufgabe, Format), das Versionierung vereinfacht, indem das Ausgabeformat explizit gemacht wird',
        ],
      },

      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Semantic Versioning Specification (semver.org)](https://semver.org/) — Kanonische MAJOR.MINOR.PATCH-Spezifikation, direkt auf Prompt-Versionierung anwendbar',
          '[Git-Dokumentation: git revert](https://git-scm.com/docs/git-revert) — Offizielle Referenz für den primären Rollback-Mechanismus in Prompt-Versionskontroll-Workflows',
          '[Braintrust: Prompt-Evaluierung und Versionierungsleitfaden](https://www.braintrust.dev/docs/guides/evals) — Technischer Leitfaden zur Prompt-Versionierung, automatisierten Tests und CI/CD-Integration mit dediziertem Tooling',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Gestion de versions des prompts : Suivi, Rollback & Workflows d\'équipe',
    intro: 'Les prompts non versionnés échouent silencieusement — sans historique des changements, il n\'existe pas de chemin de rollback quand une mise à jour dégrade la qualité des sorties ou brise les parseurs en aval. Le versioning sémantique (MAJOR.MINOR.PATCH), les workflows git et les tests de régression automatisés appliquent aux prompts la même discipline que les équipes logicielles utilisent déjà pour le code.',
    seoTitle: 'Gestion de versions des prompts : Git & Rollback',
    metaDescription: 'Les prompts non versionnés échouent silencieusement. Appliquez MAJOR.MINOR.PATCH, des workflows git et des tests de régression automatisés à chaque modification de prompt.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Gestion de versions des prompts : Suivi, Rollback & Workflows d\'équipe',
      description: 'Les prompts non versionnés échouent silencieusement. Appliquez MAJOR.MINOR.PATCH, des workflows git et des tests de régression automatisés à chaque modification de prompt.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=fr',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {},
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'プロンプトのバージョン管理：追跡、ロールバック、チームワークフロー',
    intro: 'バージョン管理されていないプロンプトはサイレントに失敗します。変更履歴がなければ、プロンプトの更新で出力品質が低下した場合のロールバックパスがありません。セマンティックバージョニング（MAJOR.MINOR.PATCH）、Gitブランチワークフロー、自動回帰テストにより、ソフトウェアチームがコードに用いる規律をプロンプト管理にも適用できます。',
    seoTitle: 'プロンプトのバージョン管理：Gitワークフロー・ロールバック・自動テストの実践ガイド',
    metaDescription: 'バージョン管理なしのプロンプトはサイレントに失敗します。MAJOR.MINOR.PATCH方式、Gitブランチワークフロー、自動回帰テストをすべてのプロンプト変更に適用してください。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプトのバージョン管理：追跡、ロールバック、チームワークフロー',
      description: 'バージョン管理なしのプロンプトはサイレントに失敗します。MAJOR.MINOR.PATCH方式、Gitブランチワークフロー、自動回帰テストをすべてのプロンプト変更に適用してください。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=ja',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {},
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: 'Team Operations & Governance',
    title: 'Prompt 版本控制：追踪、回滚与团队工作流',
    intro: '未版本化的 Prompt 会静默失败——没有变更历史，当 Prompt 更新降低输出质量或破坏下游解析器时，就无法回滚。语义化版本控制（MAJOR.MINOR.PATCH）、Git 分支工作流、自动化回归测试，将软件团队管理代码的规范同等应用于 Prompt 管理。',
    seoTitle: 'Prompt 版本控制：Git 工作流与回滚策略完全指南',
    metaDescription: '未版本化的 Prompt 会静默失败。运用 MAJOR.MINOR.PATCH 语义化版本控制、Git 分支工作流和自动化回归测试，管理每一次 Prompt 变更，实现快速回滚。',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt 版本控制：追踪、回滚与团队工作流',
      description: '未版本化的 Prompt 会静默失败。运用 MAJOR.MINOR.PATCH 语义化版本控制、Git 分支工作流和自动化回归测试，管理每一次 Prompt 变更，实现快速回滚。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=zh',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    sections: {},
  },
};
