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
    lastFactChecked: '2026-04-30 — git, semver.org, Braintrust, PromptLayer verified',
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
        { '@type': 'SoftwareApplication', name: 'PromptLayer' },
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
          acceptedAnswer: { '@type': 'Answer', text: 'Braintrust, PromptLayer, and Vellum provide native prompt versioning with UI dashboards for comparing versions, running evaluations, and viewing diff history. LangSmith has prompt version tracking built into its hub. For simpler setups, plain git with a /prompts/ directory works well — prompts are text files, and git handles diff, history, and rollback natively.' },
        },
        {
          '@type': 'Question',
          name: 'How do I roll back a prompt if I don\'t use git?',
          acceptedAnswer: { '@type': 'Answer', text: 'If you use a prompt management platform (Braintrust, Vellum, PromptLayer), use the built-in version history to revert to the previous approved version. If you store prompts in environment variables, keep a backup before every change and restore via your deployment pipeline. Going forward, add at minimum a CHANGELOG.md file — even without git, this gives you a rollback reference.' },
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
            a: 'Braintrust, PromptLayer, and Vellum provide native prompt versioning with UI dashboards for comparing versions, running evaluations, and viewing diff history. LangSmith has prompt version tracking in its hub. For simpler setups, plain git with a /prompts/ directory works well — prompts are text files, and git handles diff, history, and rollback natively.',
          },
          {
            q: 'How do I roll back a prompt if I don\'t use git?',
            a: 'If you use a prompt management platform (Braintrust, Vellum, PromptLayer), use the built-in version history to revert to the previous approved version. If you store prompts in environment variables, keep a backup before every change and restore via your deployment pipeline. Going forward, add at minimum a CHANGELOG.md file — even without git, this gives you a rollback reference.',
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
          '[AI Hallucinations: How to Stop Them](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up) — Hallucination detection techniques for the automated testing step in version control workflow',
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
    primaryTerm: 'Prompt-Versionskontrolle',
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
        { '@type': 'SoftwareApplication', name: 'PromptLayer' },
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
        { '@type': 'Question', name: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust, PromptLayer und Vellum bieten native Prompt-Versionierung mit UI-Dashboards zum Vergleich von Versionen, zur Ausführung von Evaluierungen und zur Anzeige der Diff-Historie. LangSmith verfügt über integrierte Prompt-Versionsverfolgung in seinem Hub. Für einfachere Setups funktioniert reines Git mit einem /prompts/-Verzeichnis gut — Prompts sind Textdateien, und Git handhabt Diff, Historie und Rollback nativ.' } },
        { '@type': 'Question', name: 'Wie rolle ich einen Prompt zurück, wenn ich Git nicht nutze?', acceptedAnswer: { '@type': 'Answer', text: 'Wenn Sie eine Prompt-Management-Plattform (Braintrust, Vellum, PromptLayer) verwenden, nutzen Sie die eingebaute Versionshistorie, um auf die vorherige genehmigte Version zurückzusetzen. Wenn Sie Prompts in Umgebungsvariablen speichern, erstellen Sie vor jeder Änderung ein Backup und stellen Sie es über Ihre Deployment-Pipeline wieder her. Für die Zukunft: Fügen Sie mindestens eine CHANGELOG.md-Datei hinzu — auch ohne Git gibt Ihnen das eine Rollback-Referenz.' } },
        { '@type': 'Question', name: 'Muss ich bei der Versionskontrolle von Prompts die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, in zwei Hinsichten. Erstens verpflichtet DSGVO Art. 22 zur Nachweisbarkeit menschlicher Aufsicht bei automatisierten Entscheidungen — ein Git-Log mit signierten Commits und PR-Genehmigungen liefert diesen Nachweis lückenlos. Zweitens greift DSGVO Art. 28, wenn Prompts personenbezogene Daten enthalten und über Cloud-APIs an externe Anbieter gesendet werden: Die Prompt-Versionshistorie dokumentiert, welche Verarbeitungslogik zu welchem Zeitpunkt eingesetzt wurde. BSI-Grundschutz-zertifizierte Organisationen erfüllen mit Git-basierter Prompt-Versionskontrolle die Anforderungen aus Baustein OPS.1.1.2 direkt.' } },
        { '@type': 'Question', name: 'Ist Git-basierte Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja — Git ist kostenfrei, weit verbreitet und in der deutschen IT-Landschaft bestens etabliert. Mittelständische Unternehmen ohne dedizierten MLOps-Stack können mit einem einfachen /prompts/-Verzeichnis im bestehenden Anwendungsrepository starten, ohne zusätzliche Lizenz- oder Infrastrukturkosten. Für Unternehmen mit BSI-IT-Grundschutz-Anforderungen erfüllt dieser Ansatz die Änderungsnachverfolgungspflichten direkt. Wer eine vollständigere Lösung mit Evaluierungs-Dashboard benötigt, kann auf Braintrust oder PromptLayer aufsetzen — beide bieten EU-Hosting-Optionen, die DSGVO-Anforderungen erfüllen.' } },
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
          { q: 'Welche Tools unterstützen Prompt-Versionskontrolle nativ?', a: 'Braintrust, PromptLayer und Vellum bieten native Prompt-Versionierung mit UI-Dashboards zum Vergleich von Versionen, zur Ausführung von Evaluierungen und zur Anzeige der Diff-Historie. LangSmith verfügt über integrierte Prompt-Versionsverfolgung in seinem Hub. Für einfachere Setups funktioniert reines Git mit einem /prompts/-Verzeichnis gut — Prompts sind Textdateien, und Git handhabt Diff, Historie und Rollback nativ.' },
          { q: 'Wie rolle ich einen Prompt zurück, wenn ich Git nicht nutze?', a: 'Wenn Sie eine Prompt-Management-Plattform (Braintrust, Vellum, PromptLayer) verwenden, nutzen Sie die eingebaute Versionshistorie, um auf die vorherige genehmigte Version zurückzusetzen. Wenn Sie Prompts in Umgebungsvariablen speichern, erstellen Sie vor jeder Änderung ein Backup und stellen Sie es über Ihre Deployment-Pipeline wieder her. Für die Zukunft: Fügen Sie mindestens eine CHANGELOG.md-Datei hinzu — auch ohne Git gibt Ihnen das eine Rollback-Referenz.' },
          { q: 'Muss ich bei der Versionskontrolle von Prompts die DSGVO beachten?', a: 'Ja, in zwei Hinsichten. Erstens verpflichtet DSGVO Art. 22 zur Nachweisbarkeit menschlicher Aufsicht bei automatisierten Entscheidungen — ein Git-Log mit signierten Commits und PR-Genehmigungen liefert diesen Nachweis lückenlos. Zweitens greift DSGVO Art. 28, wenn Prompts personenbezogene Daten enthalten und über Cloud-APIs an externe Anbieter gesendet werden: Die Prompt-Versionshistorie dokumentiert, welche Verarbeitungslogik zu welchem Zeitpunkt eingesetzt wurde. BSI-Grundschutz-zertifizierte Organisationen erfüllen mit Git-basierter Prompt-Versionskontrolle die Anforderungen aus Baustein OPS.1.1.2 direkt.' },
          { q: 'Ist Git-basierte Prompt-Versionskontrolle für den deutschen Mittelstand geeignet?', a: 'Ja — Git ist kostenfrei, weit verbreitet und in der deutschen IT-Landschaft bestens etabliert. Mittelständische Unternehmen ohne dedizierten MLOps-Stack können mit einem einfachen /prompts/-Verzeichnis im bestehenden Anwendungsrepository starten, ohne zusätzliche Lizenz- oder Infrastrukturkosten. Für Unternehmen mit BSI-IT-Grundschutz-Anforderungen erfüllt dieser Ansatz die Änderungsnachverfolgungspflichten direkt. Wer eine vollständigere Lösung benötigt, kann auf Braintrust oder PromptLayer aufsetzen — beide bieten EU-Hosting-Optionen, die DSGVO-Anforderungen erfüllen.' },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Prompt-Review-Workflow für Teams](/prompt-engineering/prompt-review-workflow-for-teams?lang=de) — 7-Punkte-Checkliste und CI/CD-Gates zur Prüfung von Prompt-Änderungen vor dem Deployment',
          '[Build-Qualitätsprüfungen für LLM-Ausgaben](/prompt-engineering/build-quality-checks?lang=de) — Automatisierte Qualitätsprüfungen als Teil des Prompt-PR-Gates',
          '[Prompts über Modelle hinweg testen](/prompt-engineering/how-to-test-prompts-across-models?lang=de) — Cross-Modell-Regressionstests zur Validierung der Prompt-Konsistenz vor dem Release',
          '[KI-Halluzinationen verhindern](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=de) — Halluzinations-Erkennungstechniken für den automatisierten Testschritt im Versionskontroll-Workflow',
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
    theme: 'Opérations d\'équipe & Gouvernance',
    title: 'Gestion de versions des prompts : Suivi, Rollback & Workflows d\'équipe',
    intro: 'Les prompts non versionnés échouent silencieusement — sans historique des changements, il n\'existe pas de chemin de rollback quand une mise à jour dégrade la qualité des sorties ou brise les parseurs en aval. Le versioning sémantique (MAJOR.MINOR.PATCH), les workflows git, les tests de régression automatisés et les changelogs structurés appliquent aux prompts la même discipline que les équipes logicielles utilisent déjà pour le code.',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'Développeurs qui gèrent des prompts LLM en production, ingénieurs prompt, responsables d\'équipes techniques',
    primaryTerm: 'Gestion de versions des prompts',
    readTime: '10 min de lecture',
    seoTitle: 'Gestion des versions de prompts IA : Git & rollback',
    metaDescription: 'Prompts non versionnés : aucun rollback possible sans historique. Appliquez MAJOR.MINOR.PATCH et des workflows git à chaque modification de prompt.',
    leadAnswerBlock: '**La gestion de versions des prompts trace chaque modification d\'un prompt IA via le versioning sémantique (MAJOR.MINOR.PATCH) et des workflows git. Elle permet un rollback immédiat, la collaboration d\'équipe et la détection de régressions — la même discipline que pour le code, appliquée aux prompts.**',
    quickFacts: [
      'Versioning sémantique pour les prompts : MAJOR pour les changements de format de sortie, MINOR pour les améliorations de qualité, PATCH pour les corrections de fautes/clarifications',
      'Un `git revert` sur un prompt prend quelques secondes ; retester sans historique de versions prend des heures',
      'Un changelog de prompt exige 5 champs : version, date, auteur, type de changement (MAJOR/MINOR/PATCH) et delta de sortie attendu',
      'Lancer des tests de régression automatisés sur ≥10 cas de tests de référence pour chaque PR avant toute révision manuelle',
      'Trois schémas de branches pour les prompts : feature/ (nouvelle fonctionnalité), fix/ (régression), experiment/ (test A/B)',
    ],
    toc: [
      { label: 'Pourquoi versionner', anchor: 'why-version-control' },
      { label: 'Versioning sémantique pour les prompts', anchor: 'semantic-versioning' },
      { label: 'Mise en place du workflow git', anchor: 'git-workflow' },
      { label: 'Exigences du changelog', anchor: 'changelog' },
      { label: 'Stratégies de rollback', anchor: 'rollback' },
      { label: 'Collaboration d\'équipe', anchor: 'team-collaboration' },
      { label: 'Tests automatisés', anchor: 'automated-testing' },
      { label: 'Erreurs courantes', anchor: 'mistakes' },
      { label: 'Conformité & Audit', anchor: 'regional-considerations' },
      { label: 'FAQ', anchor: 'faq' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
      { label: 'Sources', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Gestion de versions des prompts : Suivi, Rollback & Workflows d\'équipe',
      description: 'Prompts non versionnés : aucun rollback possible sans historique. Appliquez MAJOR.MINOR.PATCH et des workflows git à chaque modification de prompt.',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'fr',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=fr',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows?lang=fr', width: 1200, height: 630 },
      keywords: ['gestion de versions des prompts', 'versioning de prompts', 'workflow git pour prompts', 'gestion des changements de prompts', 'versionner les prompts IA'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'git' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptLayer' },
        { '@type': 'SoftwareApplication', name: 'GitHub Actions' },
      ],
      about: [
        { '@type': 'Thing', name: 'Gestion de versions des prompts', description: 'Un système permettant de tracer chaque modification d\'un prompt IA, d\'effectuer un rollback vers toute version précédente et d\'enregistrer l\'auteur et la raison de chaque modification' },
        { '@type': 'Thing', name: 'Versioning sémantique pour les prompts', description: 'Application du versioning MAJOR.MINOR.PATCH aux prompts IA : MAJOR pour les changements de format de sortie, MINOR pour les améliorations de qualité, PATCH pour les corrections de fautes/clarifications' },
        { '@type': 'Thing', name: 'Rollback de prompt', description: 'Le processus de restauration d\'un prompt IA vers une version précédemment approuvée via git revert, feature flags ou surcharge de variable d\'environnement' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment mettre en place un workflow git pour les modifications de prompts',
      inLanguage: 'fr',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Créer une branche feature pour la modification du prompt', text: 'Exécuter `git checkout -b feature/add-json-output` pour isoler le changement de main. Utiliser les préfixes feature/, fix/ ou experiment/.' },
        { '@type': 'HowToStep', position: 2, name: 'Modifier le fichier prompt et incrémenter la version dans le commentaire d\'en-tête', text: 'Mettre à jour le commentaire SEMVER en début de fichier pour refléter le type de changement (MAJOR, MINOR ou PATCH).' },
        { '@type': 'HowToStep', position: 3, name: 'Lancer les tests de régression automatisés sur le jeu de tests de référence', text: 'Exécuter au minimum 10 cas de tests représentatifs couvrant la validation de format, la comparaison de sorties, la détection d\'hallucinations et la latence.' },
        { '@type': 'HowToStep', position: 4, name: 'Ouvrir une pull request et compléter la checklist de révision', text: 'Le relecteur vérifie : clarté des instructions, risque d\'hallucinations, spécification du format de sortie, vulnérabilités de sécurité et compatibilité avec le modèle.' },
        { '@type': 'HowToStep', position: 5, name: 'Fusionner vers main et taguer la version', text: 'Après approbation, fusionner vers main et taguer : `git tag v2.0.0 -m "JSON output format — MAJOR"` puis `git push origin v2.0.0`.' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Qu\'est-ce que la gestion de versions des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'La gestion de versions des prompts est un système qui trace chaque modification d\'un prompt IA, permet de revenir à toute version précédente et enregistre l\'auteur et la raison de chaque changement. Elle applique le versioning sémantique (MAJOR.MINOR.PATCH) aux prompts : MAJOR pour les changements de format de sortie, MINOR pour les améliorations de qualité, PATCH pour les corrections de fautes. Les prompts sont stockés en tant que fichiers texte dans git, les changements passent par une pull request, et les versions sont taguées.' } },
        { '@type': 'Question', name: 'Faut-il un dépôt git séparé pour les prompts ou peut-on utiliser le dépôt applicatif existant ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour les équipes de moins de 5 personnes ou avec moins de 20 prompts : un répertoire /prompts/ dans le dépôt existant suffit. Pour les équipes plus grandes ou quand les prompts sont partagés entre plusieurs services : un dépôt dédié offre une propriété plus claire, un versioning indépendant et un contrôle d\'accès. Utilisez le dépôt applicatif si les prompts sont étroitement couplés à la logique métier ; un dépôt séparé s\'ils servent plusieurs services ou équipes.' } },
        { '@type': 'Question', name: 'Quelle est la différence entre le versioning des prompts et le versioning des modèles ?', acceptedAnswer: { '@type': 'Answer', text: 'Le versioning des prompts trace les changements dans les instructions textuelles envoyées à un modèle. Le versioning des modèles trace quelle version IA (GPT-4o, Claude 3.7, Llama 4) votre application appelle. Les deux nécessitent un contrôle de version distinct. Quand vous changez de modèle cible, traitez-le comme un bump MAJOR du prompt, même si le texte est identique — des modèles différents répondent différemment au même prompt.' } },
        { '@type': 'Question', name: 'Quelle est la taille minimale recommandée d\'un jeu de tests pour un prompt en production ?', acceptedAnswer: { '@type': 'Answer', text: '10 à 20 cas de tests de référence est le minimum. Couvrir : le chemin nominal, les cas limites (entrée vide, entrée très longue), les entrées adversariales (tentatives de contourner les instructions) et les modes de défaillance connus. Moins de 10 cas passe à côté de trop nombreux cas limites ; plus de 50 est coûteux à maintenir sans bénéfice proportionnel.' } },
        { '@type': 'Question', name: 'Comment gérer le versioning quand le même prompt est utilisé sur plusieurs modèles ?', acceptedAnswer: { '@type': 'Answer', text: 'Maintenez un historique de versions distinct par combinaison prompt+modèle. Utilisez un en-tête de métadonnées : `# version: 2.1.0 | model: gpt-4o`. Lors du déploiement sur un nouveau modèle, créez un nouveau fichier de variante plutôt que d\'écraser l\'existant. Exécutez votre jeu de tests de référence complet sur chaque variante de modèle avant de la promouvoir en production.' } },
        { '@type': 'Question', name: 'Faut-il incrémenter la version pour chaque modification de formulation ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui — chaque changement incrémente la version à un niveau quelconque. Corrections de fautes : PATCH. Améliorations de qualité sans changement de format : MINOR. Changements de format ou de structure qui brisent les parseurs en aval : MAJOR. Ne jamais sauter l\'incrément — même un petit changement de formulation peut modifier le comportement du modèle de façon inattendue, et un changement non versionné ne peut pas être annulé.' } },
        { '@type': 'Question', name: 'Quels outils supportent nativement la gestion de versions des prompts ?', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust, PromptLayer et Vellum proposent un versioning natif des prompts avec des tableaux de bord permettant de comparer les versions, d\'exécuter des évaluations et de consulter l\'historique des diffs. LangSmith intègre le suivi de versions dans son hub. Pour des configurations plus simples, git avec un répertoire /prompts/ fonctionne bien — les prompts sont des fichiers texte, et git gère nativement le diff, l\'historique et le rollback.' } },
        { '@type': 'Question', name: 'Comment faire un rollback de prompt sans git ?', acceptedAnswer: { '@type': 'Answer', text: 'Si vous utilisez une plateforme de gestion de prompts (Braintrust, Vellum, PromptLayer), utilisez l\'historique de versions intégré pour revenir à la version précédente approuvée. Si vos prompts sont stockés dans des variables d\'environnement, conservez une sauvegarde avant chaque changement et restaurez-la via votre pipeline de déploiement. Pour la suite, ajoutez au minimum un fichier CHANGELOG.md — même sans git, il vous donnera une référence de rollback.' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Méthodes de rollback de prompt',
      inLanguage: 'fr',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'git revert', description: 'Rollback standard : crée un nouveau commit qui annule le changement problématique. Immédiat, faible risque, historique d\'audit complet. Recommandé pour tous les rollbacks hors urgence.' },
        { '@type': 'ListItem', position: 2, name: 'Basculement de feature flag', description: 'Bascule le flag vers la version précédente du prompt sans redéploiement. Zéro temps d\'arrêt, exécution en quelques secondes. Nécessite que les feature flags soient déjà déployés.' },
        { '@type': 'ListItem', position: 3, name: 'Surcharge de variable d\'environnement', description: 'Écrase le contenu du prompt via une variable d\'environnement sans redéploiement de code. Chemin de hotfix le plus rapide ; risque moyen car les changements contournent le workflow de révision habituel.' },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          {
            type: 'tldr',
            label: 'TL;DR',
            text: 'Appliquez le versioning MAJOR.MINOR.PATCH et les workflows git à chaque prompt. Chaque modification ouvre une PR, chaque PR exécute des tests de régression automatisés, et chaque fusion est taguée. Le rollback est un `git revert` — exécuté en quelques secondes, historique d\'audit complet préservé.',
          },
        ],
      },

      tldr: {
        title: 'Points clés',
        isTldr: true,
        content: [
          '**Résumé :** La gestion de versions des prompts applique le versioning sémantique (MAJOR.MINOR.PATCH) et les workflows git aux prompts IA. Chaque modification crée une PR, chaque PR exécute des tests de régression automatisés, et chaque fusion est taguée avec une version. Le rollback s\'effectue via `git revert`. Sans contrôle de version, les baisses de qualité en production sont indétectables et irrécupérables.',
        ],
        items: [
          'Appliquer MAJOR.MINOR.PATCH aux prompts : MAJOR pour les changements de format de sortie, MINOR pour les améliorations de qualité, PATCH pour les corrections de fautes',
          'Stocker les prompts dans un répertoire `/prompts/` sous git — les traiter comme du code, pas comme de la configuration',
          'Chaque modification de prompt ouvre une PR ; des tests de régression automatisés s\'exécutent sur chaque PR avant la révision manuelle',
          'Un changelog de prompt exige 5 champs : version, date, auteur, type de changement et delta de sortie attendu',
          'Rollback via `git revert` (standard), feature flags (zéro temps d\'arrêt) ou surcharge de variable d\'environnement (hotfix)',
          'Désigner un propriétaire de prompt par domaine fonctionnel pour éviter les conflits de fusion et les responsabilités floues',
          'Un jeu de tests de référence de 10 à 20 entrées représentatives est le minimum pour tout prompt en production',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'Pourquoi la gestion de versions des prompts prévient les régressions silencieuses',
        content: [
          '**Sans contrôle de version, une modification de prompt qui dégrade la qualité des sorties ne laisse aucune trace — pas de log d\'erreur, pas de diff, pas de chemin de rollback.** Le modèle retourne des réponses plausibles mais erronées au lieu de lever des exceptions. Quand la baisse de qualité est détectée (via des réclamations utilisateurs, des métriques de précision ou des erreurs de parsing en aval), le prompt original peut avoir disparu.',
          'Trois modes de défaillance que le contrôle de version prévient : (1) Régression silencieuse — un changement de formulation modifie subtilement le comportement du modèle, dégradant la qualité des sorties sur des milliers de requêtes avant que quiconque le remarque. (2) Impossibilité de rollback — sans historique, restaurer le prompt précédent nécessite de le reconstruire de mémoire ou à partir d\'anciens logs de déploiement. (3) Conflits lors de la collaboration — deux développeurs modifient le même prompt en parallèle, et la fusion tardive écrase le changement antérieur sans aucune trace.',
        ],
        snippets: [
          { type: 'in-one-sentence', text: 'La gestion de versions des prompts est un système qui trace chaque modification d\'un prompt IA, permet de revenir à toute version précédente et enregistre l\'auteur et la raison de chaque changement.' },
        ],
        callouts: [
          { type: 'Warning', label: 'Régression silencieuse', text: 'Les prompts échouent silencieusement — ils retournent des réponses plausibles mais erronées au lieu d\'erreurs. Vos logs d\'erreur ne captureront pas les baisses de qualité. Seuls des tests de régression sur un jeu de référence les détecteront.' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'Comment le versioning sémantique fonctionne pour les prompts IA',
        content: [
          '**Le versioning MAJOR.MINOR.PATCH indique à chaque appelant si un changement de prompt peut être adopté sans retester le code en aval.** MAJOR signifie que le format de sortie a changé (les parseurs en aval se briseront). MINOR signifie que la qualité s\'est améliorée mais le format reste stable. PATCH signifie que seule la formulation ou la clarté a changé, sans impact comportemental.',
        ],
        columns: ['Type de changement', 'Quand incrémenter', 'Exemple', 'Rétrocompatible ?'],
        rows: [
          { 'Type de changement': 'MAJOR', 'Quand incrémenter': 'Le format de sortie change — JSON vers markdown, nouveaux champs obligatoires, suppression de champs', 'Exemple': 'v1.2.0 → v2.0.0', 'Rétrocompatible ?': 'Non — mettre à jour tous les appelants' },
          { 'Type de changement': 'MINOR', 'Quand incrémenter': 'Amélioration de qualité, optimisation de latence, meilleure conformité aux instructions', 'Exemple': 'v1.2.0 → v1.3.0', 'Rétrocompatible ?': 'Oui — adoption sans risque' },
          { 'Type de changement': 'PATCH', 'Quand incrémenter': 'Correction de faute, clarification, légère reformulation sans impact comportemental', 'Exemple': 'v1.2.0 → v1.2.1', 'Rétrocompatible ?': 'Oui — aucun changement de comportement attendu' },
        ],
        callouts: [
          { type: 'Key Point', label: 'Déclencheur MAJOR', text: 'Incrémentez MAJOR chaque fois que le code en aval qui analyse la sortie de votre prompt se briserait. Si la sortie passe d\'un tableau JSON à une liste markdown, c\'est un bump MAJOR même si le contenu est identique.' },
          { type: 'Pro Tip', label: 'Tagger dans git', text: 'Taguez chaque version après la fusion : `git tag v2.1.0 -m "Amélioration de l\'extraction de dates"`. Cela crée une référence permanente pour le rollback.' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'Comment mettre en place un workflow git pour les modifications de prompts',
        content: [
          '**Le workflow standard est : créer une branche → modifier le prompt → exécuter les tests de régression → ouvrir une PR → fusionner et taguer.** Chaque étape reflète un changement de code logiciel — car un prompt est du code.',
        ],
        numberedItems: [
          'Créer une branche feature : `git checkout -b feature/add-json-output`. Utiliser les préfixes `feature/` (nouvelle fonctionnalité), `fix/` (correction de régression) ou `experiment/` (test A/B).',
          'Modifier le fichier prompt dans `/prompts/[name].txt`. Mettre à jour le commentaire de version en début de fichier : `# version: 2.0.0 | changed: JSON output format | author: jane`.',
          'Lancer la suite de tests de régression sur le jeu de référence (minimum 10 cas). Les tests doivent couvrir : validation de format, comparaison de sorties avec les réponses de référence, détection d\'hallucinations et latence. Tous les tests doivent passer avant d\'ouvrir une PR.',
          'Ouvrir une PR avec une description indiquant : ce qui a changé, pourquoi, quel bump de version (MAJOR/MINOR/PATCH) et le delta de sortie attendu. Le relecteur vérifie : clarté, risque d\'hallucinations, format de sortie et sécurité.',
          'Après approbation, fusionner vers main et taguer la version : `git tag v2.0.0 -m "JSON output format — MAJOR"` puis `git push origin v2.0.0`.',
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
          { type: 'Pro Tip', label: 'Structure des répertoires', text: 'Stocker les prompts dans `/prompts/` et les fixtures de tests dans `/prompts/tests/`. Cela rend les fichiers de prompts révisables de manière autonome, séparés du code applicatif, tout en restant dans le même dépôt.' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'Ce que doit contenir chaque entrée de changelog de prompt',
        content: [
          '**Une entrée de changelog de prompt exige 5 champs : version, date, auteur, type de changement et delta de sortie attendu.** Le delta de sortie est le champ le plus important : il décrit comment la réponse du modèle différera après le changement, afin que les appelants en aval sachent ce qu\'ils doivent mettre à jour.',
        ],
        columns: ['Champ', 'Obligatoire', 'Exemple'],
        rows: [
          { 'Champ': 'version', 'Obligatoire': 'Oui', 'Exemple': '`v2.1.0`' },
          { 'Champ': 'date', 'Obligatoire': 'Oui', 'Exemple': '`2026-04-30`' },
          { 'Champ': 'author', 'Obligatoire': 'Oui', 'Exemple': '`jane.smith@company.com`' },
          { 'Champ': 'change type', 'Obligatoire': 'Oui', 'Exemple': '`MINOR — amélioration de l\'extraction de dates`' },
          { 'Champ': 'expected output delta', 'Obligatoire': 'Oui', 'Exemple': '`Les champs de date utilisent désormais systématiquement l\'ISO 8601 (YYYY-MM-DD). Précédemment : MM/DD/YYYY dans ~30 % des cas limites.`' },
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
          { type: 'Best Practice', label: 'Écrire le changelog en premier', text: 'Rédigez l\'entrée du changelog avant d\'écrire la modification du prompt — cela vous oblige à clarifier l\'intention. Si vous ne pouvez pas décrire le delta de sortie attendu, vous n\'avez pas encore compris ce que vous modifiez.' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'Quand et comment restaurer un prompt vers une version précédente',
        content: [
          '**`git revert` est le chemin de rollback standard — il crée un nouveau commit qui annule le changement problématique sans effacer l\'historique.** Connaissez les déclencheurs de rollback et adaptez la méthode à l\'urgence.',
          'Déclencheurs de rollback : (1) Baisse de qualité en production détectée via des métriques de précision ou des signalements utilisateurs. (2) Problème de sécurité découvert dans le prompt déployé. (3) Une mise à jour de version du modèle brise la compatibilité avec le prompt existant. (4) Un changement de logique métier rend le format de sortie précédent incorrect.',
        ],
        columns: ['Méthode de rollback', 'Rapidité', 'Risque', "Quand l'utiliser"],
        rows: [
          { 'Méthode de rollback': '`git revert <commit>`', 'Rapidité': 'Quelques secondes à créer, quelques minutes à déployer', 'Risque': 'Faible — crée un commit de revert documenté', "Quand l'utiliser": 'Rollback standard hors urgence ; préserve l\'historique d\'audit complet' },
          { 'Méthode de rollback': 'Basculement de feature flag', 'Rapidité': 'Quelques secondes — aucun redéploiement requis', 'Risque': 'Faible — zéro temps d\'arrêt si les flags sont pré-déployés', "Quand l'utiliser": 'Quand la sélection du prompt est déjà derrière un flag et que le système de flags est actif' },
          { 'Méthode de rollback': 'Surcharge de variable d\'environnement', 'Rapidité': 'Quelques secondes — aucun déploiement de code', 'Risque': 'Moyen — contourne le workflow de révision habituel', "Quand l'utiliser": 'Hotfix d\'urgence uniquement ; suivre immédiatement d\'une PR `git revert` standard' },
        ],
        callouts: [
          { type: 'Warning', label: 'Tester avant le rollback', text: 'N\'effectuez jamais un rollback sans avoir d\'abord lancé les tests de régression — vous pourriez réintroduire un bug précédemment corrigé. Le bug que la version annulée avait corrigé pourrait être pire que la régression que vous fuyez.' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'Comment les équipes collaborent sur les modifications de prompts sans conflits',
        content: [
          '**La propriété prévient les conflits de fusion : désignez un propriétaire de prompt par domaine fonctionnel, et toutes les modifications de ce prompt nécessitent sa révision.** Sans propriété claire, deux développeurs modifient le même prompt en parallèle, et la fusion tardive écrase silencieusement le changement antérieur.',
          'Deux schémas de dépôt conviennent aux équipes : (1) Monorepo avec répertoire `/prompts/` — idéal quand les prompts sont étroitement couplés à un seul service et que les changements doivent se déployer avec l\'application. (2) Dépôt ou package de prompts dédié — idéal quand les prompts sont partagés entre plusieurs services ou quand les ingénieurs prompt ont besoin de cycles de révision indépendants.',
        ],
        callouts: [
          { type: 'Best Practice', label: 'Modèle de propriété', text: 'Désignez un propriétaire de prompt par domaine fonctionnel (ex. : propriétaire du prompt d\'extraction, propriétaire du prompt de classification). Chaque modification de ce prompt passe par la révision de ce propriétaire — sans exception.' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'Ce que les tests automatisés détectent avant la mise en production d\'un changement de prompt',
        content: [
          '**Les tests de régression détectent les ruptures de format ; le LLM-évaluateur détecte les baisses de qualité.** Quatre types de tests couvrent les principaux modes de défaillance avant qu\'un changement de prompt atteigne la production.',
          'Les quatre types de tests : (1) Validation de format — vérifie que la sortie correspond au schéma attendu (structure JSON, champs obligatoires, types de données). S\'exécute en millisecondes, détecte 60–70 % des changements problématiques. (2) Comparaison de référence — compare la sortie à des réponses correctes vérifiées manuellement sur 10 à 20 entrées représentatives. Un LLM-évaluateur ou des métriques de similarité textuelle notent la comparaison. (3) Détection d\'hallucinations — identifie les affirmations factuelles dans la sortie qui ne sont pas ancrées dans le contexte fourni. Signale toute réponse qui affirme des faits absents de l\'entrée. (4) Vérification de latence — vérifie que le temps de réponse médian reste dans une plage acceptable (ex. : p95 ≤ 3 s). Détecte les prompts qui induisent un calcul excessif.',
        ],
        callouts: [
          { type: 'Key Point', label: 'Jeu de tests minimal', text: 'Un jeu de tests de référence de 10 à 20 entrées représentatives est le minimum pour tout prompt en production. Couvrir : le chemin nominal, les cas limites (entrée vide ou très longue), les entrées adversariales et les modes de défaillance connus.' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Erreurs courantes dans la gestion de versions des prompts',
        mistakes: [
          {
            mistake: 'Aucun schéma de versioning dès le premier jour',
            problem: 'Des changements problématiques silencieux atteignent la production quand l\'équipe grandit et que plusieurs développeurs modifient des prompts sans convention de versioning partagée',
            fix: 'Adopter MAJOR.MINOR.PATCH dès le premier prompt en production — même si un seul développeur écrit des prompts aujourd\'hui, le prochain hérite du système',
          },
          {
            mistake: 'Stocker les prompts dans le code applicatif au lieu d\'un répertoire `/prompts/`',
            problem: 'Les prompts enfouis dans le code applicatif ne peuvent pas être révisés, testés ou versionnés indépendamment — ils changent à chaque déploiement',
            fix: 'Déplacer tous les prompts vers `/prompts/` avec les fixtures de tests dans `/prompts/tests/`. Cela les rend révisables comme des artefacts autonomes sans toucher au code applicatif',
          },
          {
            mistake: 'Aucune exigence de changelog par PR',
            problem: 'Quand une régression apparaît des semaines plus tard, il n\'existe aucun enregistrement de ce qui a changé, quand et pourquoi — forçant une archéologie laborieuse dans le git log',
            fix: 'Rendre une entrée CHANGELOG.md obligatoire via un contrôle CI — la PR échoue si aucune entrée n\'existe pour le fichier de prompt modifié',
          },
          {
            mistake: 'Tester uniquement le chemin nominal',
            problem: 'Les cas limites qui fonctionnent dans la version précédente échouent silencieusement après un changement de prompt — détectés seulement par des réclamations utilisateurs ou des erreurs de parsing en production',
            fix: 'Exiger un minimum de 10 cas de tests de référence incluant au moins 2 cas limites et 1 entrée adversariale — aucune PR ne fusionne sans que la suite de tests complète soit validée',
          },
          {
            mistake: 'Effectuer un rollback sans lancer les tests de régression',
            problem: 'La version annulée réintroduit un bug que le changement annulé avait corrigé, créant une deuxième régression par-dessus la première',
            fix: 'Toujours exécuter la suite de régression complète avant de fusionner une PR de revert — traiter les commits de rollback comme des changements de production nécessitant le même contrôle de tests',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Exigences de conformité et d\'audit pour les modifications de prompts',
        content: [
          'L\'IA Act européen, qui s\'applique aux systèmes à haut risque dans les secteurs de la santé, la finance, les RH et les infrastructures critiques, exige la traçabilité pour les sorties IA dans les domaines réglementés. Un historique de versions de prompts contrôlé, avec auteur, date, type de changement et preuves d\'approbation, satisfait cette exigence sans outillage supplémentaire.',
          'Le RGPD Article 22 s\'applique aux prompts qui prennent ou soutiennent des décisions automatisées affectant des individus. Le contrôle de version et les journaux d\'audit attestent de la supervision humaine — un git log avec commits signés fournit cette preuve. La CNIL recommande l\'inférence locale pour le traitement de données professionnelles sensibles (financières, médicales, juridiques) — la gestion de versions des prompts reste applicable quel que soit le mode d\'exécution choisi. Les équipes des secteurs de la finance et de la santé soumises à des réglementations sectorielles (MiFID II, HDS, MDR) nécessitent généralement un historique de versions de prompts d\'au moins 12 mois avec stockage infalsifiable.',
        ],
      },

      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Qu\'est-ce que la gestion de versions des prompts ?', a: 'La gestion de versions des prompts est un système qui trace chaque modification d\'un prompt IA, permet de revenir à toute version précédente et enregistre l\'auteur et la raison de chaque changement. Elle applique le versioning sémantique (MAJOR.MINOR.PATCH) aux prompts : MAJOR pour les changements de format de sortie, MINOR pour les améliorations de qualité, PATCH pour les corrections de fautes. Les prompts sont stockés en tant que fichiers texte dans git, les changements passent par une pull request, et les versions sont taguées.' },
          { q: 'Faut-il un dépôt git séparé pour les prompts ou peut-on utiliser le dépôt applicatif existant ?', a: 'Pour les équipes de moins de 5 personnes ou avec moins de 20 prompts : un répertoire /prompts/ dans le dépôt existant suffit. Pour les équipes plus grandes ou quand les prompts sont partagés entre plusieurs services : un dépôt dédié offre une propriété plus claire, un versioning indépendant et un contrôle d\'accès. Utilisez le dépôt applicatif si les prompts sont étroitement couplés à la logique métier ; un dépôt séparé s\'ils servent plusieurs services ou équipes.' },
          { q: 'Quelle est la différence entre le versioning des prompts et le versioning des modèles ?', a: 'Le versioning des prompts trace les changements dans les instructions textuelles envoyées à un modèle. Le versioning des modèles trace quelle version IA (GPT-4o, Claude 3.7, Llama 4) votre application appelle. Les deux nécessitent un contrôle de version distinct. Quand vous changez de modèle cible, traitez-le comme un bump MAJOR du prompt, même si le texte est identique — des modèles différents répondent différemment au même prompt.' },
          { q: 'Quelle est la taille minimale recommandée d\'un jeu de tests pour un prompt en production ?', a: '10 à 20 cas de tests de référence est le minimum. Couvrir : le chemin nominal, les cas limites (entrée vide, entrée très longue), les entrées adversariales (tentatives de contourner les instructions) et les modes de défaillance connus. Moins de 10 cas passe à côté de trop nombreux cas limites ; plus de 50 est coûteux à maintenir sans bénéfice proportionnel.' },
          { q: 'Comment gérer le versioning quand le même prompt est utilisé sur plusieurs modèles ?', a: 'Maintenez un historique de versions distinct par combinaison prompt+modèle. Utilisez un en-tête de métadonnées dans votre fichier de prompt : `# version: 2.1.0 | model: gpt-4o`. Lors du déploiement sur un nouveau modèle, créez un nouveau fichier de variante plutôt que d\'écraser l\'existant. Exécutez votre jeu de tests de référence complet sur chaque variante de modèle avant de la promouvoir en production.' },
          { q: 'Faut-il incrémenter la version pour chaque modification de formulation ?', a: 'Oui — chaque changement incrémente la version à un niveau quelconque. Corrections de fautes : PATCH. Améliorations de qualité sans changement de format : MINOR. Changements de format ou de structure qui brisent les parseurs en aval : MAJOR. Ne jamais sauter l\'incrément — même un petit changement de formulation peut modifier le comportement du modèle de façon inattendue, et un changement non versionné ne peut pas être annulé.' },
          { q: 'Quels outils supportent nativement la gestion de versions des prompts ?', a: 'Braintrust, PromptLayer et Vellum proposent un versioning natif des prompts avec des tableaux de bord permettant de comparer les versions, d\'exécuter des évaluations et de consulter l\'historique des diffs. LangSmith intègre le suivi de versions dans son hub. Pour des configurations plus simples, git avec un répertoire /prompts/ fonctionne bien — les prompts sont des fichiers texte, et git gère nativement le diff, l\'historique et le rollback.' },
          { q: 'Comment faire un rollback de prompt sans git ?', a: 'Si vous utilisez une plateforme de gestion de prompts (Braintrust, Vellum, PromptLayer), utilisez l\'historique de versions intégré pour revenir à la version précédente approuvée. Si vos prompts sont stockés dans des variables d\'environnement, conservez une sauvegarde avant chaque changement et restaurez-la via votre pipeline de déploiement. Pour la suite, ajoutez au minimum un fichier CHANGELOG.md — même sans git, il vous donnera une référence de rollback.' },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Workflow de révision des prompts pour les équipes](/prompt-engineering/prompt-review-workflow-for-teams?lang=fr) — Checklist en 7 points et gates CI/CD pour la révision des changements de prompts avant déploiement',
          '[Contrôles qualité de build pour les sorties LLM](/prompt-engineering/build-quality-checks?lang=fr) — Contrôles de qualité automatisés dans le cadre du gate PR de prompts',
          '[Tester les prompts sur plusieurs modèles](/prompt-engineering/how-to-test-prompts-across-models?lang=fr) — Tests de régression cross-modèle pour valider la cohérence des prompts avant mise en production',
          '[Hallucinations IA : comment les éliminer](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=fr) — Techniques de détection d\'hallucinations pour l\'étape de tests automatisés dans le workflow de versioning',
          '[Framework RTF pour les prompts](/prompt-engineering/rtf-framework?lang=fr) — Format structuré de prompt (Rôle, Tâche, Format) qui simplifie le versioning en rendant le format de sortie explicite',
        ],
      },

      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécification Semantic Versioning (semver.org)](https://semver.org/) — Spécification canonique MAJOR.MINOR.PATCH, directement applicable au versioning des prompts',
          '[Documentation Git : git revert](https://git-scm.com/docs/git-revert) — Référence officielle pour le mécanisme de rollback principal utilisé dans les workflows de versioning des prompts',
          '[Braintrust : Guide d\'évaluation et de versioning des prompts](https://www.braintrust.dev/docs/guides/evals) — Guide technique sur le versioning, les tests automatisés et l\'intégration CI/CD avec des outils dédiés',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'evergreen',
    theme: 'チーム運用 & ガバナンス',
    title: 'プロンプトのバージョン管理：追跡・ロールバック・チームワークフロー',
    intro: 'バージョン管理のないプロンプトはサイレントに失敗します。変更履歴がなければ、プロンプト更新で出力品質が低下した際のロールバック手段がありません。セマンティックバージョニング（MAJOR.MINOR.PATCH）・Gitブランチワークフロー・自動回帰テストにより、ソフトウェア開発チームがコードに適用する規律をプロンプト管理にも実現できます。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: 'プロダクション環境でLLMプロンプトを管理する開発者、プロンプトエンジニア、エンジニアリングチームリード',
    primaryTerm: 'プロンプトのバージョン管理',
    readTime: '10分で読める',
    seoTitle: 'プロンプトのバージョン管理：Gitワークフロー・ロールバック・自動テストの実践ガイド',
    metaDescription: 'バージョン管理なしのプロンプトはサイレントに失敗します。MAJOR.MINOR.PATCH方式・Gitブランチワークフロー・自動回帰テストをすべてのプロンプト変更に適用し、品質低下を即座に検出・ロールバックしてください。',
    leadAnswerBlock: '**プロンプトのバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）とGitワークフローを使い、AIプロンプトへのすべての変更を追跡します。即時ロールバック・チーム協業・回帰検出を可能にし、コードに適用されてきた規律をプロンプトにも実現します。**',
    quickFacts: [
      'プロンプトのセマンティックバージョニング：出力フォーマット変更はMAJOR、品質改善はMINOR、誤字修正はPATCH',
      'プロンプトの `git revert` は数秒で完了。バージョン履歴なしの再テストは数時間かかる',
      'プロンプトのchangelogに必要な5フィールド：バージョン・日付・作成者・変更タイプ（MAJOR/MINOR/PATCH）・期待される出力デルタ',
      '各プロンプトPRで、手動レビュー前に≥10個のゴールデンテストケースに対して自動回帰テストを実行する',
      'プロンプト用の3つのブランチパターン：feature/（新機能）・fix/（回帰修正）・experiment/（A/Bテスト）',
    ],
    toc: [
      { label: 'なぜバージョン管理が必要か', anchor: 'why-version-control' },
      { label: 'プロンプトのセマンティックバージョニング', anchor: 'semantic-versioning' },
      { label: 'Gitワークフローの設定手順', anchor: 'git-workflow' },
      { label: 'Changelogの要件', anchor: 'changelog' },
      { label: 'ロールバック戦略', anchor: 'rollback' },
      { label: 'チーム協業', anchor: 'team-collaboration' },
      { label: '自動テスト', anchor: 'automated-testing' },
      { label: 'よくある失敗', anchor: 'mistakes' },
      { label: 'コンプライアンス & 監査', anchor: 'regional-considerations' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '関連資料', anchor: 'related-reading' },
      { label: '参考文献', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'プロンプトのバージョン管理：追跡・ロールバック・チームワークフロー',
      description: 'バージョン管理なしのプロンプトはサイレントに失敗します。MAJOR.MINOR.PATCH方式・Gitブランチワークフロー・自動回帰テストをすべてのプロンプト変更に適用し、品質低下を即座に検出・ロールバックしてください。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'ja',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=ja',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows?lang=ja', width: 1200, height: 630 },
      keywords: ['プロンプトバージョン管理', 'プロンプト管理ワークフロー', 'Gitプロンプト管理', 'プロンプト変更管理', 'AIプロンプトのバージョン管理方法'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'git' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptLayer' },
        { '@type': 'SoftwareApplication', name: 'GitHub Actions' },
      ],
      about: [
        { '@type': 'Thing', name: 'プロンプトのバージョン管理', description: 'AIプロンプトへのすべての変更を追跡し、任意の以前のバージョンへのロールバックを可能にし、各変更の作成者と理由を記録するシステム' },
        { '@type': 'Thing', name: 'プロンプトのセマンティックバージョニング', description: 'AIプロンプトへのMAJOR.MINOR.PATCHバージョニングの適用：出力フォーマット変更はMAJOR、品質改善はMINOR、誤字修正はPATCH' },
        { '@type': 'Thing', name: 'プロンプトのロールバック', description: 'git revert・フィーチャーフラグ・環境変数オーバーライドを使用して、AIプロンプトを以前に承認されたバージョンに戻すプロセス' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'プロンプト変更のGitワークフロー設定手順',
      inLanguage: 'ja',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'プロンプト変更用のfeatureブランチを作成する', text: '`git checkout -b feature/add-json-output` を実行して変更をmainから分離します。feature/（新機能）・fix/（回帰修正）・experiment/（A/Bテスト）のプレフィックスを使用してください。' },
        { '@type': 'HowToStep', position: 2, name: 'プロンプトファイルを編集しヘッダーコメントのバージョンを更新する', text: 'プロンプトファイル先頭のSEMVERコメントを変更タイプ（MAJOR・MINOR・PATCH）に合わせて更新します。' },
        { '@type': 'HowToStep', position: 3, name: 'ゴールデンテストセットに対して自動回帰テストを実行する', text: 'フォーマット検証・出力比較・ハルシネーション検出・レイテンシを含む最低10件の代表的なテストケースを実行します。' },
        { '@type': 'HowToStep', position: 4, name: 'プルリクエストを作成してレビューチェックリストを完了する', text: 'レビュアーが確認する項目：指示の明確さ・ハルシネーションリスク・出力フォーマット仕様・セキュリティ上の問題・モデル互換性。' },
        { '@type': 'HowToStep', position: 5, name: 'mainにマージしてリリースをタグ付けする', text: '承認後にmainにマージしてタグ付けします：`git tag v2.0.0 -m "JSON output形式 — MAJOR"` 、続けて `git push origin v2.0.0` を実行します。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'プロンプトのバージョン管理とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトのバージョン管理とは、AIプロンプトへのすべての変更を追跡し、任意の以前のバージョンへのロールバックを可能にし、各変更の作成者と理由を記録するシステムです。プロンプトにセマンティックバージョニング（MAJOR.MINOR.PATCH）を適用します：出力フォーマット変更はMAJOR、品質改善はMINOR、誤字修正はPATCH。プロンプトはGitにテキストファイルとして保存され、変更はPRレビューを経て、リリースにはタグが付けられます。' } },
        { '@type': 'Question', name: 'プロンプト専用のGitリポジトリは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '5名未満のチームまたは20件未満のプロンプトの場合：既存のアプリリポジトリの/prompts/ディレクトリを使用してください。より大規模なチームや複数サービスでプロンプトを共有する場合：専用のプロンプトリポジトリの方が所有権・独立したバージョニング・アクセス制御が明確になります。プロンプトがアプリロジックと密結合している場合はアプリリポジトリを、複数サービスにまたがる場合は専用リポジトリを使用してください。' } },
        { '@type': 'Question', name: 'プロンプトのバージョン管理とモデルのバージョン管理の違いは？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプトのバージョン管理は、モデルに送信するテキスト指示への変更を追跡します。モデルのバージョン管理は、アプリケーションが呼び出すAIバージョン（GPT-4o・Claude 3.7・Llama 4）を追跡します。両方に別個のバージョン管理が必要です。対象モデルを変更する場合、プロンプトテキストが同一でもMAJORバンプとして扱ってください。異なるモデルは同じプロンプトに対して異なる応答を返します。' } },
        { '@type': 'Question', name: 'プロダクション用プロンプトの最小テストスイートサイズは？', acceptedAnswer: { '@type': 'Answer', text: '10〜20件のゴールデンテストケースが最小です。ハッピーパス・エッジケース（空の入力・非常に長い入力）・敵対的な入力（指示の上書き試行）・既知の失敗パターンをカバーしてください。10件未満ではエッジケースが不十分、50件超はメンテナンスコストが高く費用対効果が低下します。' } },
        { '@type': 'Question', name: '同じプロンプトを複数のモデルで使用する場合のバージョン管理は？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプト＋モデルの組み合わせごとに別個のバージョン履歴を管理してください。プロンプトファイルにメタデータヘッダーを使用します：`# version: 2.1.0 | model: gpt-4o`。新しいモデルにデプロイする際は既存ファイルを上書きせず、新しいバリアントファイルを作成します。昇格前にすべてのモデルバリアントに対してゴールデンテストスイートを実行してください。' } },
        { '@type': 'Question', name: '文言の変更ごとにバージョンを上げる必要がありますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい——すべての変更は何らかのレベルでバージョンを上げます。誤字修正：PATCH。フォーマット変更のない品質改善：MINOR。下流のパーサーを壊すフォーマット・構造変更：MAJOR。バージョンバンプを省略しないでください。微小な文言変更でもモデルの動作に予期しない影響を与える可能性があり、バージョン管理のない変更はロールバックできません。' } },
        { '@type': 'Question', name: 'プロンプトのバージョン管理をネイティブにサポートするツールは？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust・PromptLayer・Vellumは、バージョン比較・評価実行・差分履歴表示のUIダッシュボードを持つネイティブのプロンプトバージョニングを提供します。LangSmithはそのハブにプロンプトバージョン追跡機能を内蔵しています。よりシンプルな設定には、/prompts/ディレクトリを使ったgitが有効です。プロンプトはテキストファイルであり、gitが差分・履歴・ロールバックをネイティブに処理します。' } },
        { '@type': 'Question', name: 'gitを使用していない場合のプロンプトのロールバック方法は？', acceptedAnswer: { '@type': 'Answer', text: 'プロンプト管理プラットフォーム（Braintrust・Vellum・PromptLayer）を使用している場合は、組み込みのバージョン履歴を使って以前の承認済みバージョンに戻します。環境変数でプロンプトを保存している場合は、変更前にバックアップを保持し、デプロイパイプライン経由で復元します。今後のためにCHANGELOG.mdを最低限追加してください——gitがなくてもロールバックの参照になります。' } },
        { '@type': 'Question', name: 'プロンプトのバージョン管理にMETI AIガバナンスガイドラインはどう関係しますか？', acceptedAnswer: { '@type': 'Answer', text: '経済産業省（METI）の「AI事業者ガイドライン」（2024年）は、AI利用事業者に対してAI利用の記録・変更履歴の管理を推奨しています。プロンプトバージョン管理の変更履歴・作成者記録・承認ログは、このガイドラインが求めるトレーサビリティを満たします。医療・金融・インフラ分野では、12ヶ月以上の変更履歴の保持が求められる場合があります。' } },
        { '@type': 'Question', name: '日本のエンタープライズ環境でプロンプト管理を導入するポイントは？', acceptedAnswer: { '@type': 'Answer', text: '日本の大企業では、プロンプト変更に対するドキュメント化・承認プロセスが重要視されます。具体的な導入ポイント：（1）プロンプトリポジトリをGitHub Enterpriseなど社内システムで管理、（2）変更はすべてPRレビュー必須で承認者を明記、（3）変更ログにビジネス要件との関連付けを記録、（4）四半期ごとのプロンプト監査を実施。セキュリティ要件が厳しい場合はBraintrust・VellumのオンプレミスオプションでDSGVO相当のデータ管理を確保してください。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'プロンプトのロールバック方法',
      inLanguage: 'ja',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'git revert', description: '標準的なロールバック：問題のある変更を取り消す新しいコミットを作成します。即時実行・低リスク・完全な監査証跡。緊急でないロールバックにはこの方法を推奨します。' },
        { '@type': 'ListItem', position: 2, name: 'フィーチャーフラグの切り替え', description: 'デプロイなしでフラグを以前のプロンプトバージョンに切り替えます。ゼロダウンタイム・実行数秒。事前にフィーチャーフラグのデプロイが必要です。' },
        { '@type': 'ListItem', position: 3, name: '環境変数オーバーライド', description: 'コードデプロイなしに環境変数でプロンプトをオーバーライドします。最速のホットフィックス手段。通常のレビューフローをバイパスするため中リスクです。' },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          {
            type: 'tldr',
            label: 'TL;DR',
            text: 'すべてのプロンプトにMAJOR.MINOR.PATCHバージョニングとGitワークフローを適用します。変更ごとにPRを作成し、PRごとに自動回帰テストを実行し、マージごとにタグを付けます。ロールバックは `git revert` で——数秒で完了し、完全な監査履歴が保持されます。',
          },
        ],
      },

      tldr: {
        title: '重要ポイント',
        isTldr: true,
        content: [
          '**要約：** プロンプトのバージョン管理は、セマンティックバージョニング（MAJOR.MINOR.PATCH）とGitワークフローをAIプロンプトに適用します。変更ごとにPRを作成し、PRごとに自動回帰テストを実行し、マージごとにバージョンタグを付けます。ロールバックは `git revert` 一発です。バージョン管理なしでは、プロダクション品質の低下は検知も復旧もできません。',
        ],
        items: [
          'プロンプトにMAJOR.MINOR.PATCHを適用：出力フォーマット変更はMAJOR、品質改善はMINOR、誤字修正はPATCH',
          'プロンプトはGitの `/prompts/` ディレクトリに保管——コードと同じ扱いで、設定ではなくコードとして管理する',
          'プロンプト変更はすべてPRを作成。手動レビュー前に自動回帰テストを実行',
          'プロンプトchangelogの5フィールド：バージョン・日付・作成者・変更タイプ・期待される出力デルタ',
          'ロールバック方法：`git revert`（標準）・フィーチャーフラグ（ゼロダウンタイム）・環境変数オーバーライド（ホットフィックス）',
          '機能エリアごとに1名のプロンプトオーナーを割り当て、マージコンフリクトと責任の曖昧さを防ぐ',
          'プロダクション用プロンプトの最小ゴールデンテストセットは10〜20件',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: 'プロンプトにバージョン管理が必要な理由：サイレント回帰を防ぐ',
        content: [
          '**バージョン管理なしのプロンプト変更は品質低下を残さない——エラーログも差分も、ロールバックパスも存在しません。** モデルは例外をスローする代わりに、もっともらしい誤った回答を返します。品質低下に気付くまでに（ユーザーのクレーム・精度指標・下流パースエラー経由で）、元のプロンプトが消えていることがあります。',
          'バージョン管理が防ぐ3つの失敗パターン：（1）サイレント回帰——文言変更がモデルの動作を微妙に変化させ、誰かが気付く前に数千リクエストにわたって品質が低下する。（2）ロールバック不能——履歴なしでは、以前のプロンプトを記憶や古いデプロイログから復元するしかない。（3）協業時のコンフリクト——2名のエンジニアが同じプロンプトを独立して編集し、後からのマージが前の変更を上書きして記録が残らない。',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'プロンプトのバージョン管理とは、AIプロンプトへのすべての変更を追跡し、任意の以前のバージョンへのロールバックを可能にし、各変更の作成者と理由を記録するシステムです。',
          },
        ],
        callouts: [
          { type: 'Warning', label: 'サイレント回帰', text: 'プロンプトはサイレントに失敗します——エラーではなく、もっともらしい誤った回答を返します。エラーログは品質低下を検知しません。ゴールデンテストセットに対する回帰テストだけが検出できます。' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'AIプロンプトへのセマンティックバージョニングの適用方法',
        content: [
          '**MAJOR.MINOR.PATCHバージョニングは、プロンプト変更が下流コードの再テストなしに安全に採用できるかどうかをすべての呼び出し元に伝えます。** MAJORは出力フォーマットが変わった（下流パーサーが壊れる）ことを意味します。MINORは品質が向上したがフォーマットは安定していることを意味します。PATCHは動作への影響なしに文言や明確さのみ変更されたことを意味します。',
        ],
        columns: ['変更タイプ', 'バンプのタイミング', '例', '後方互換性'],
        rows: [
          { '変更タイプ': 'MAJOR', 'バンプのタイミング': '出力フォーマット変更——JSONからmarkdown、新規必須フィールド、フィールド削除', '例': 'v1.2.0 → v2.0.0', '後方互換性': 'なし——すべての呼び出し元を更新する必要がある' },
          { '変更タイプ': 'MINOR', 'バンプのタイミング': '品質改善・レイテンシ最適化・指示遵守の向上', '例': 'v1.2.0 → v1.3.0', '後方互換性': 'あり——安全に採用可能' },
          { '変更タイプ': 'PATCH', 'バンプのタイミング': '誤字修正・明確化・モデルの動作を変えない軽微な文言変更', '例': 'v1.2.0 → v1.2.1', '後方互換性': 'あり——動作変更なし' },
        ],
        callouts: [
          { type: 'Key Point', label: 'MAJORのトリガー', text: 'プロンプトの出力を解析する下流コードが壊れる場合は常にMAJORをバンプします。出力がJSON配列からmarkdownリストに変わった場合、内容が同一でもMAJORバンプです。' },
          { type: 'Pro Tip', label: 'gitでタグ付け', text: 'マージ後に毎回バージョンをタグ付けします：`git tag v2.1.0 -m "抽出プロンプトの日付推論を改善"` 。ロールバック用の永続的な参照が作成されます。' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: 'プロンプト変更のGitワークフロー設定手順',
        content: [
          '**標準ワークフローは：ブランチ作成 → プロンプト編集 → 回帰テスト → PR作成 → マージ＆タグ付け。** すべてのステップがソフトウェアコードの変更と同じです——プロンプトはコードだからです。',
        ],
        numberedItems: [
          'featureブランチを作成：`git checkout -b feature/add-json-output`。`feature/`（新機能）・`fix/`（回帰修正）・`experiment/`（A/Bテスト）のプレフィックスを使用。',
          '`/prompts/[name].txt` のプロンプトファイルを編集。先頭のバージョンコメントを更新：`# version: 2.0.0 | changed: JSON出力形式 | author: jane`。',
          'ゴールデンテストセットに対して自動回帰スイートを実行（最低10件）。フォーマット検証・ゴールデン回答との出力比較・ハルシネーションフラグ・レイテンシをカバーします。PR作成前にすべてのテストがパスする必要があります。',
          '変更内容・理由・バージョンバンプ（MAJOR/MINOR/PATCH）・期待される出力デルタを記載したPRを作成。レビュアーが確認する項目：明確さ・ハルシネーションリスク・出力フォーマット・セキュリティ。',
          '承認後、mainにマージしてリリースをタグ付け：`git tag v2.0.0 -m "JSON出力形式 — MAJOR"` 、続けて `git push origin v2.0.0`。',
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
          { type: 'Pro Tip', label: 'ディレクトリ構成', text: 'プロンプトは `/prompts/` に、テストフィクスチャは `/prompts/tests/` に保管します。プロンプトファイルをアプリコードと分離しつつ同一リポジトリに置き、独立したアーティファクトとしてレビュー可能にします。' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: 'プロンプトChangelogエントリに必須の記録項目',
        content: [
          '**プロンプトchangelogエントリには5つのフィールドが必要です：バージョン・日付・作成者・変更タイプ・期待される出力デルタ。** 出力デルタが最も重要なフィールドです。変更後のモデルレスポンスの違いを説明することで、下流の呼び出し元が何を更新すべきか把握できます。',
        ],
        columns: ['フィールド', '必須', '例'],
        rows: [
          { 'フィールド': 'version', '必須': 'はい', '例': '`v2.1.0`' },
          { 'フィールド': 'date', '必須': 'はい', '例': '`2026-04-30`' },
          { 'フィールド': 'author', '必須': 'はい', '例': '`jane.smith@company.com`' },
          { 'フィールド': 'change type', '必須': 'はい', '例': '`MINOR — 日付抽出の推論を改善`' },
          { 'フィールド': 'expected output delta', '必須': 'はい', '例': '`日付フィールドがISO 8601（YYYY-MM-DD）で一貫して出力されるようになります。以前：エッジケースの約30%でMM/DD/YYYYが返される。`' },
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
          { type: 'Best Practice', label: '変更前にchangelogを書く', text: 'プロンプト変更を書く前にchangelogエントリを書きます——意図を明確にする強制力になります。期待される出力デルタを説明できないなら、変更の内容をまだ理解していません。' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: 'プロンプトを以前のバージョンにロールバックするタイミングと方法',
        content: [
          '**`git revert` が標準のロールバックパスです——履歴を消さずに問題のある変更を取り消す新しいコミットを作成します。** ロールバックのトリガーを把握し、緊急度に応じた方法を選択してください。',
          'ロールバックのトリガー：（1）精度指標やユーザー報告でプロダクション品質の低下を検知。（2）デプロイ済みプロンプトにセキュリティ上の問題が発見された。（3）モデルバージョン更新で既存プロンプトとの互換性が壊れた。（4）ビジネスロジック変更により以前の出力フォーマットが不正確になった。',
        ],
        columns: ['ロールバック方法', '速度', 'リスク', '使用タイミング'],
        rows: [
          { 'ロールバック方法': '`git revert <commit>`', '速度': 'コミット作成は数秒、デプロイは数分', 'リスク': '低——ドキュメント化されたrevertコミットを作成', '使用タイミング': '標準の非緊急ロールバック。完全な監査履歴を保持' },
          { 'ロールバック方法': 'フィーチャーフラグ切り替え', '速度': '数秒——デプロイ不要', 'リスク': '低——フラグが事前デプロイ済みならゼロダウンタイム', '使用タイミング': 'プロンプト選択がすでにフラグ管理下にあり、フラグシステムが稼働中の場合' },
          { 'ロールバック方法': '環境変数オーバーライド', '速度': '数秒——コードデプロイ不要', 'リスク': '中——通常のレビューフローをバイパス', '使用タイミング': '緊急ホットフィックスのみ。直後に正式な `git revert` PRで対応する' },
        ],
        callouts: [
          { type: 'Warning', label: 'ロールバック前にテスト', text: '回帰テストなしでロールバックしないでください——以前に修正したバグを再導入する可能性があります。ロールバックするバージョンが修正していたバグが、回避したい回帰より深刻かもしれません。' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: 'チームでのプロンプト変更管理とコンフリクト防止',
        content: [
          '**所有権がマージコンフリクトを防ぎます：機能エリアごとに1名のプロンプトオーナーを割り当て、そのプロンプトへのすべての変更にオーナーのレビューを必須とします。** 明確な所有権がなければ、2名のエンジニアが同じプロンプトを並行して編集し、後からのマージが前の変更を上書きします。',
          'チームに適した2つのリポジトリパターン：（1）`/prompts/` ディレクトリを含むモノリポ——プロンプトが単一サービスと密結合していて、プロンプト変更をアプリと一緒にデプロイする必要がある場合に最適。（2）専用プロンプトリポジトリまたはパッケージ——プロンプトを複数サービスで共有する場合や、アプリリポジトリアクセスなしにプロンプトエンジニアが独立したレビューサイクルを必要とする場合に最適。',
        ],
        callouts: [
          { type: 'Best Practice', label: 'オーナーシップモデル', text: '機能エリアごとに1名のプロンプトオーナーを割り当てます（例：抽出プロンプトオーナー、分類プロンプトオーナー）。そのプロンプトへのすべての変更はそのオーナーのレビューを経ます——例外なし。' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: 'プロンプト変更リリース前に自動テストが検出する問題',
        content: [
          '**回帰テストはフォーマット崩れを検出し、LLM-as-judgeは品質低下を検出します。** 4種類のテストで、プロンプト変更がプロダクションに到達する前の主要な失敗モードをカバーします。',
          '4種類のテスト：（1）フォーマット検証——出力が期待されるスキーマ（JSON構造・必須フィールド・データ型）に一致することをアサート。ミリ秒で実行され、破壊的変更の60〜70%を検出。（2）ゴールデンセット比較——10〜20件の代表的な入力に対してマニュアル検証済みの正解と出力を比較。LLM-as-judgeまたは文字列類似度指標でスコアリング。（3）ハルシネーションフラグ——提供されたコンテキストに基づかない出力内の事実主張を検出。入力にない事実を断言した応答にフラグを立てる。（4）レイテンシチェック——中央値のレスポンス時間が許容範囲内（例：p95 ≤ 3秒）であることをアサート。過剰なモデル計算を引き起こすプロンプトを検出。',
        ],
        callouts: [
          { type: 'Key Point', label: '最小テストセット', text: 'プロダクション用プロンプトの最小ゴールデンテストセットは10〜20件です。ハッピーパス・エッジケース（空または非常に長い入力）・敵対的入力・既知の失敗パターンをカバーしてください。' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'プロンプトバージョン管理でよくある失敗',
        mistakes: [
          {
            mistake: '初日からバージョニング体系を設定しない',
            problem: 'チームが成長して複数のエンジニアが共有のバージョニング規約なしにプロンプトを編集すると、サイレントな破壊的変更がリリースされる',
            fix: 'プロダクションの最初のプロンプトからMAJOR.MINOR.PATCHを採用する——今日1名のエンジニアだけがプロンプトを書いていても、次の採用者はそのシステムを引き継ぐ',
          },
          {
            mistake: 'プロンプトをアプリケーションコード内に保管する',
            problem: 'アプリコードに埋め込まれたプロンプトは独立してレビュー・テスト・バージョン管理できない——アプリのデプロイのたびに変更される',
            fix: 'すべてのプロンプトを `/prompts/` に、テストフィクスチャを `/prompts/tests/` に移動する。アプリコードに触れずに独立したアーティファクトとしてレビュー可能になる',
          },
          {
            mistake: 'PRごとにchangelogを必須にしない',
            problem: '数週間後に回帰が発生しても、何が・いつ・なぜ変わったかの記録がなく、gitログの時間のかかる調査を強いられる',
            fix: 'CHANGELOG.mdエントリをCIチェックでPRの必須要件にする——変更されたプロンプトファイルのchangelogエントリがなければPRが失敗する',
          },
          {
            mistake: 'ハッピーパスのみをテストする',
            problem: '以前のバージョンで機能していたエッジケースがプロンプト変更後にサイレントに壊れ、ユーザーのクレームや下流のパースエラーでのみ検出される',
            fix: '最低10件のゴールデンテストケースを必須とし、少なくとも2件のエッジケースと1件の敵対的入力を含める——テストスイートが全パスしなければPRはマージできない',
          },
          {
            mistake: '回帰テストなしでロールバックする',
            problem: 'ロールバックしたバージョンが、今ロールバックした変更で修正されていたバグを再導入し、最初の回帰に加えて2番目の回帰が発生する',
            fix: 'revert PRをマージする前に必ず完全な回帰スイートを実行する——ロールバックコミットをフォワード変更と同じテストゲートが必要なプロダクション変更として扱う',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'プロンプト変更のコンプライアンスと監査要件',
        content: [
          '**日本（METI AIガバナンス）：** 経済産業省（METI）の「AI事業者ガイドライン」（2024年3月）は、高リスクAIシステムに対してAI利用の記録・変更履歴の管理を推奨しています。プロンプトバージョン管理の作成者記録・変更タイプ・承認ログはこのガイドラインのトレーサビリティ要件を満たします。医療・金融・重要インフラ分野では、12ヶ月以上のプロンプトバージョン履歴と改ざん防止ストレージが求められる場合があります。',
          '**東アジア・アジア太平洋地域（データ主権）：** 日本（改正個人情報保護法）・韓国（PIPA）・シンガポール（PDPA）・マレーシア（PDPA）はデータの越境転送に関する規制を強化しています。プロンプトが個人データを処理する場合、バージョン管理済みのプロンプトリポジトリをオンプレミスまたはローカルクラウドリージョンに保持することで越境転送リスクを軽減できます。',
          '**グローバル展開する企業向け（EU AI法）：** EU AI法は医療・金融・HR・重要インフラの高リスクシステムに対してAI出力のトレーサビリティを要求します。バージョン管理済みプロンプト履歴（作成者・日付・変更タイプ・承認記録）は追加ツールなしでこのトレーサビリティ要件を満たします。',
        ],
      },

      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'プロンプトのバージョン管理とは何ですか？',
            a: 'プロンプトのバージョン管理とは、AIプロンプトへのすべての変更を追跡し、任意の以前のバージョンへのロールバックを可能にし、各変更の作成者と理由を記録するシステムです。プロンプトにセマンティックバージョニング（MAJOR.MINOR.PATCH）を適用します：出力フォーマット変更はMAJOR、品質改善はMINOR、誤字修正はPATCH。プロンプトはGitにテキストファイルとして保存され、変更はPRレビューを経て、リリースにはタグが付けられます。',
          },
          {
            q: 'プロンプト専用のGitリポジトリは必要ですか？既存のアプリのリポジトリで管理できますか？',
            a: '5名未満のチームまたは20件未満のプロンプトの場合：既存のアプリリポジトリの/prompts/ディレクトリを使用してください。より大規模なチームや複数サービスでプロンプトを共有する場合：専用のプロンプトリポジトリの方が所有権・独立したバージョニング・アクセス制御が明確になります。プロンプトがアプリロジックと密結合している場合はアプリリポジトリを、複数サービスやチームにまたがる場合は専用リポジトリを使用してください。',
          },
          {
            q: 'プロンプトのバージョン管理とモデルのバージョン管理の違いは何ですか？',
            a: 'プロンプトのバージョン管理は、モデルに送信するテキスト指示への変更を追跡します。モデルのバージョン管理は、アプリケーションが呼び出すAIのバージョン（GPT-4o・Claude 3.7・Llama 4）を追跡します。両方に別個のバージョン管理が必要です。対象モデルを変更する場合、プロンプトテキストが同一でもMAJORバンプとして扱ってください。異なるモデルは同じプロンプトに対して異なる応答を返します。',
          },
          {
            q: 'プロダクション用プロンプトの最小テストスイートサイズは？',
            a: '10〜20件のゴールデンテストケースが最小です。ハッピーパス・エッジケース（空の入力・非常に長い入力）・敵対的な入力（指示の上書き試行）・既知の失敗パターンをカバーしてください。10件未満ではエッジケースが不十分、50件超はメンテナンスコストが高く費用対効果が低下します。',
          },
          {
            q: '同じプロンプトを複数のモデルで使用する場合のバージョン管理は？',
            a: 'プロンプト＋モデルの組み合わせごとに別個のバージョン履歴を管理してください。プロンプトファイルにメタデータヘッダーを使用します：`# version: 2.1.0 | model: gpt-4o`。新しいモデルにデプロイする際は既存ファイルを上書きせず、新しいバリアントファイルを作成します。昇格前にすべてのモデルバリアントに対してゴールデンテストスイートを実行してください。',
          },
          {
            q: '文言の変更ごとにバージョンを上げる必要がありますか？',
            a: 'はい——すべての変更は何らかのレベルでバージョンを上げます。誤字修正：PATCH。フォーマット変更のない品質改善：MINOR。下流のパーサーを壊すフォーマット・構造変更：MAJOR。バージョンバンプを省略しないでください。微小な文言変更でもモデルの動作に予期しない影響を与える可能性があり、バージョン管理のない変更はロールバックできません。',
          },
          {
            q: 'プロンプトのバージョン管理をネイティブにサポートするツールは？',
            a: 'Braintrust・PromptLayer・Vellumは、バージョン比較・評価実行・差分履歴表示のUIダッシュボードを持つネイティブのプロンプトバージョニングを提供します。LangSmithはそのハブにプロンプトバージョン追跡機能を内蔵しています。よりシンプルな設定には、/prompts/ディレクトリを使ったgitが有効です。プロンプトはテキストファイルであり、gitが差分・履歴・ロールバックをネイティブに処理します。',
          },
          {
            q: 'gitを使用していない場合のプロンプトのロールバック方法は？',
            a: 'プロンプト管理プラットフォーム（Braintrust・Vellum・PromptLayer）を使用している場合は、組み込みのバージョン履歴を使って以前の承認済みバージョンに戻します。環境変数でプロンプトを保存している場合は、変更前にバックアップを保持し、デプロイパイプライン経由で復元します。今後のためにCHANGELOG.mdファイルを最低限追加してください——gitがなくてもロールバックの参照になります。',
          },
          {
            q: 'プロンプトのバージョン管理にMETI AIガバナンスガイドラインはどう関係しますか？',
            a: '経済産業省（METI）の「AI事業者ガイドライン」（2024年）は、AI利用事業者に対してAI利用の記録・変更履歴の管理を推奨しています。プロンプトバージョン管理の変更履歴・作成者記録・承認ログは、このガイドラインが求めるトレーサビリティを満たします。医療・金融・インフラ分野では、さらに厳密な記録保持（12ヶ月以上）が求められる場合があります。',
          },
          {
            q: '日本のエンタープライズ環境でプロンプト管理を導入するポイントは？',
            a: '日本の大企業では、プロンプト変更に対するドキュメント化・承認プロセスが重要視されます。具体的な導入ポイント：（1）プロンプトリポジトリをGitHub Enterpriseなど社内システムで管理、（2）変更はすべてPRレビュー必須で承認者を明記、（3）変更ログにビジネス要件との関連付けを記録、（4）四半期ごとのプロンプト監査を実施。セキュリティ要件が厳しい場合はBraintrust・VellumのオンプレミスオプションでGDPR相当のデータ管理を確保してください。',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[チームのためのプロンプトレビューワークフロー](/prompt-engineering/prompt-review-workflow-for-teams?lang=ja) — プロンプト変更をデプロイ前にレビューするための7点チェックリストとCI/CDゲート',
          '[LLM出力のビルド品質チェック](/prompt-engineering/build-quality-checks?lang=ja) — プロンプトPRゲートの一部として実行する自動品質チェック',
          '[モデル横断でのプロンプトテスト方法](/prompt-engineering/how-to-test-prompts-across-models?lang=ja) — リリース前のプロンプト一貫性を検証するクロスモデル回帰テスト',
          '[AIハルシネーションを止める方法](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=ja) — バージョン管理ワークフローの自動テストステップ向けハルシネーション検出技術',
          '[RTFプロンプトフレームワーク](/prompt-engineering/rtf-framework?lang=ja) — 出力フォーマットを明示することでバージョン管理を簡素化する構造化プロンプト形式（Role・Task・Format）',
        ],
      },

      sources: {
        id: 'sources',
        title: '参考文献',
        items: [
          '[Semantic Versioning仕様（semver.org）](https://semver.org/) — MAJOR.MINOR.PATCHの標準仕様。プロンプトバージョニングに直接適用可能',
          '[Gitドキュメント：git revert](https://git-scm.com/docs/git-revert) — プロンプトバージョン管理ワークフローで使用する主要ロールバックメカニズムの公式リファレンス',
          '[Braintrust：プロンプト評価・バージョニングガイド](https://www.braintrust.dev/docs/guides/evals) — 専用ツールを使ったプロンプトバージョニング・自動テスト・CI/CD統合の技術ガイド',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'evergreen',
    theme: '团队运营与治理',
    title: 'Prompt 版本控制：追踪、回滚与团队工作流',
    intro: '未版本化的 Prompt 会静默失败——没有变更历史，当 Prompt 更新降低输出质量或破坏下游解析器时，就无法回滚。语义化版本控制（MAJOR.MINOR.PATCH）、Git 分支工作流、自动化回归测试，将软件团队管理代码的规范同等应用于 Prompt 管理。',
    publishDate: '2026-04-30',
    dateModified: '2026-04-30',
    educationalLevel: 'Advanced',
    audience: '管理生产环境 LLM Prompt 的开发者、Prompt 工程师、工程团队负责人',
    primaryTerm: 'Prompt 版本控制',
    readTime: '阅读约10分钟',
    seoTitle: 'Prompt 版本控制：Git 工作流与回滚策略完全指南',
    metaDescription: '未版本化的 Prompt 会静默失败。运用 MAJOR.MINOR.PATCH 语义化版本控制、Git 分支工作流和自动化回归测试，管理每一次 Prompt 变更，实现快速回滚。',
    leadAnswerBlock: '**Prompt 版本控制使用语义化版本控制（MAJOR.MINOR.PATCH）和 Git 工作流追踪每次 AI Prompt 的变更。它实现即时回滚、团队协作和回归检测——将代码管理的规范同等应用于 Prompt 管理。**',
    quickFacts: [
      'Prompt 语义化版本控制：输出格式变更升级 MAJOR，质量改善升级 MINOR，修复错别字升级 PATCH',
      'Prompt 的 `git revert` 只需数秒；没有版本历史的重新测试则需要数小时',
      'Prompt 变更日志需要 5 个字段：版本、日期、作者、变更类型（MAJOR/MINOR/PATCH）和预期输出差异',
      '每个 Prompt PR 在人工审核前，需对 ≥10 个黄金测试用例运行自动化回归测试',
      'Prompt 的三种分支模式：feature/（新功能）、fix/（回归修复）、experiment/（A/B 测试）',
    ],
    toc: [
      { label: '为什么需要版本控制', anchor: 'why-version-control' },
      { label: 'Prompt 语义化版本控制', anchor: 'semantic-versioning' },
      { label: 'Git 工作流搭建', anchor: 'git-workflow' },
      { label: '变更日志要求', anchor: 'changelog' },
      { label: '回滚策略', anchor: 'rollback' },
      { label: '团队协作', anchor: 'team-collaboration' },
      { label: '自动化测试', anchor: 'automated-testing' },
      { label: '常见错误', anchor: 'mistakes' },
      { label: '合规与审计', anchor: 'regional-considerations' },
      { label: '常见问题', anchor: 'faq' },
      { label: '延伸阅读', anchor: 'related-reading' },
      { label: '参考资料', anchor: 'sources' },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Prompt 版本控制：追踪、回滚与团队工作流',
      description: '未版本化的 Prompt 会静默失败。运用 MAJOR.MINOR.PATCH 语义化版本控制、Git 分支工作流和自动化回归测试，管理每一次 Prompt 变更，实现快速回滚。',
      datePublished: '2026-04-30',
      dateModified: '2026-04-30',
      inLanguage: 'zh',
      proficiencyLevel: 'Advanced',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      url: 'https://www.promptquorum.com/prompt-engineering/prompt-version-control-workflows?lang=zh',
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/prompt-version-control-workflows?lang=zh', width: 1200, height: 630 },
      keywords: ['Prompt 版本控制', 'Prompt 版本管理工作流', 'Git Prompt 管理', 'Prompt 变更管理', 'AI Prompt 版本控制方法'],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'git' },
        { '@type': 'SoftwareApplication', name: 'Braintrust' },
        { '@type': 'SoftwareApplication', name: 'PromptLayer' },
        { '@type': 'SoftwareApplication', name: 'GitHub Actions' },
      ],
      about: [
        { '@type': 'Thing', name: 'Prompt 版本控制', description: '追踪 AI Prompt 每次变更、支持回滚至任意历史版本、并记录每次变更的作者和原因的系统' },
        { '@type': 'Thing', name: 'Prompt 语义化版本控制', description: '将 MAJOR.MINOR.PATCH 版本控制应用于 AI Prompt：输出格式变更升级 MAJOR，质量改善升级 MINOR，修复错别字升级 PATCH' },
        { '@type': 'Thing', name: 'Prompt 回滚', description: '使用 git revert、功能标志或环境变量覆盖，将 AI Prompt 恢复至先前已批准版本的过程' },
      ],
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何为 Prompt 变更搭建 Git 工作流',
      inLanguage: 'zh',
      totalTime: 'PT30M',
      step: [
        { '@type': 'HowToStep', position: 1, name: '为 Prompt 变更创建功能分支', text: '执行 `git checkout -b feature/add-json-output`，将变更与主分支隔离。使用 feature/（新功能）、fix/（回归修复）或 experiment/（A/B 测试）前缀。' },
        { '@type': 'HowToStep', position: 2, name: '编辑 Prompt 文件并在头部注释中升级版本号', text: '根据变更类型（MAJOR、MINOR 或 PATCH）更新 Prompt 文件顶部的 SEMVER 注释。' },
        { '@type': 'HowToStep', position: 3, name: '对黄金测试集运行自动化回归测试', text: '执行至少 10 个代表性测试用例，涵盖格式验证、输出对比、幻觉检测和延迟检查。' },
        { '@type': 'HowToStep', position: 4, name: '开启 PR 并完成审核清单', text: '审核人检查：指令清晰度、幻觉风险、输出格式规范、安全漏洞及模型兼容性。' },
        { '@type': 'HowToStep', position: 5, name: '合并至主分支并打标签发布', text: '审批通过后合并至 main 并打标签：`git tag v2.0.0 -m "JSON 输出格式 — MAJOR"`，然后 `git push origin v2.0.0`。' },
      ],
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '什么是 Prompt 版本控制？', acceptedAnswer: { '@type': 'Answer', text: 'Prompt 版本控制是追踪 AI Prompt 每次变更、支持回滚至任意历史版本、并记录每次变更的作者和原因的系统。它将语义化版本控制（MAJOR.MINOR.PATCH）应用于 Prompt：输出格式变更升级 MAJOR，质量改善升级 MINOR，修复错别字升级 PATCH。Prompt 以文本文件形式存储在 git 中，变更经过 PR 审核，发布版本打标签管理。' } },
        { '@type': 'Question', name: '需要为 Prompt 单独建立 Git 仓库吗？', acceptedAnswer: { '@type': 'Answer', text: '5 人以下团队或少于 20 个 Prompt 的情况：在现有应用仓库中建立 /prompts/ 目录即可。更大的团队或多服务共享 Prompt 的情况：专用 Prompt 仓库可提供更清晰的所有权、独立的版本控制和访问控制。Prompt 与应用逻辑紧密耦合时用应用仓库；Prompt 跨多个服务或团队使用时用独立仓库。' } },
        { '@type': 'Question', name: 'Prompt 版本控制与模型版本控制有何区别？', acceptedAnswer: { '@type': 'Answer', text: 'Prompt 版本控制追踪发送给模型的文本指令的变更。模型版本控制追踪应用程序调用的 AI 版本（GPT-4o、Claude 3.7、Llama 4）。两者都需要独立的版本控制。切换目标模型时，即使 Prompt 文本相同，也应视为 MAJOR 版本升级——不同模型对相同 Prompt 的响应可能不同。' } },
        { '@type': 'Question', name: '生产 Prompt 的最小测试集规模是多少？', acceptedAnswer: { '@type': 'Answer', text: '最少需要 10–20 个黄金测试用例。需覆盖：正常路径、边界情况（空输入、超长输入）、对抗性输入（尝试覆盖指令）以及已知失败模式。少于 10 个用例会遗漏太多边界情况；超过 50 个则维护成本过高，边际收益降低。' } },
        { '@type': 'Question', name: '同一 Prompt 在不同模型上使用时如何版本控制？', acceptedAnswer: { '@type': 'Answer', text: '为每个 Prompt+模型组合维护独立的版本历史。在 Prompt 文件中使用元数据头：`# version: 2.1.0 | model: gpt-4o`。部署到新模型时，创建新的变体文件而非覆盖已有文件。晋升前对每个模型变体运行完整的黄金测试集。' } },
        { '@type': 'Question', name: '每次措辞变更都需要升级版本吗？', acceptedAnswer: { '@type': 'Answer', text: '是的——每次变更都需要在某个级别升级版本。修复错别字：PATCH。不改变格式的质量改善：MINOR。破坏下游解析器的格式或结构变更：MAJOR。不要跳过版本升级——即使是微小的措辞变更也可能意外影响模型行为，而未版本化的变更无法回滚。' } },
        { '@type': 'Question', name: '哪些工具原生支持 Prompt 版本控制？', acceptedAnswer: { '@type': 'Answer', text: 'Braintrust、PromptLayer 和 Vellum 提供原生 Prompt 版本控制，具备版本比较、评估运行和差异历史查看的 UI 面板。LangSmith 在其 Hub 中内置了 Prompt 版本追踪。对于简单场景，使用 /prompts/ 目录的纯 git 方案效果很好——Prompt 是文本文件，git 原生处理差异、历史和回滚。' } },
        { '@type': 'Question', name: '不使用 git 时如何回滚 Prompt？', acceptedAnswer: { '@type': 'Answer', text: '使用 Prompt 管理平台（Braintrust、Vellum、PromptLayer）时，通过内置版本历史回滚到之前的已批准版本。在环境变量中存储 Prompt 时，每次变更前保留备份，通过部署管道恢复。今后至少添加一个 CHANGELOG.md 文件——即使没有 git，这也能提供回滚参考。' } },
        { '@type': 'Question', name: '中国《数据安全法》对 Prompt 版本控制有哪些要求？', acceptedAnswer: { '@type': 'Answer', text: '中国 2021 年《数据安全法》要求处理重要数据的企业建立数据安全管理制度，包括数据处理活动的记录和审计机制。对于 AI 系统，Prompt 的每次变更记录（版本号、变更时间、操作人及变更原因）可满足数据处理活动记录要求。金融、医疗等行业还需遵守行业特定规范，建议保留至少 12 个月的 Prompt 版本历史，并确保审计日志不可篡改。' } },
        { '@type': 'Question', name: '中国大型企业（银行、医院、律所）如何落地 Prompt 版本管理？', acceptedAnswer: { '@type': 'Answer', text: '大型企业建议采用专用 Prompt 仓库，配合分支权限控制和双人审核制度。具体措施：（1）建立 Prompt 分类分级制度，区分高风险（直接影响决策）和低风险 Prompt；（2）所有生产环境 Prompt 变更须经业务和技术双重审批；（3）使用签名提交（git commit --gpg-sign）确保变更记录不可抵赖；（4）将 Prompt 版本历史归档至企业合规系统，满足监管检查要求。Braintrust 和 PromptLayer 均提供可在私有环境部署的企业版方案。' } },
      ],
    },
    itemListSchema: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Prompt 回滚方法',
      inLanguage: 'zh',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'git revert', description: '标准回滚方式：创建一个新提交撤销破坏性变更。即时生效、低风险、完整审计追踪。适用于所有非紧急回滚场景。' },
        { '@type': 'ListItem', position: 2, name: '功能标志切换', description: '无需部署即可将标志切换至上一个 Prompt 版本。零停机、秒级执行。需提前部署功能标志。' },
        { '@type': 'ListItem', position: 3, name: '环境变量覆盖', description: '无需代码部署，通过环境变量覆盖 Prompt 内容。最快的紧急修复路径；中等风险，因变更绕过了常规审核工作流。' },
      ],
    },
    sections: {
      tldrCallout: {
        callouts: [
          {
            type: 'tldr',
            label: 'TL;DR',
            text: '对每个 Prompt 应用 MAJOR.MINOR.PATCH 版本控制和 Git 工作流。每次变更开启 PR，每个 PR 运行自动化回归测试，每次合并打标签。回滚只需 `git revert` — 秒级执行，完整审计历史保留。',
          },
        ],
      },

      tldr: {
        title: '核心要点',
        isTldr: true,
        content: [
          '**摘要：** Prompt 版本控制将语义化版本控制（MAJOR.MINOR.PATCH）和 Git 工作流应用于 AI Prompt。每次变更创建 PR，每个 PR 运行自动化回归测试，每次合并打版本标签。回滚即执行 `git revert`。没有版本控制，生产质量下降既无法检测也无法恢复。',
        ],
        items: [
          '对 Prompt 应用 MAJOR.MINOR.PATCH：输出格式变更升级 MAJOR，质量改善升级 MINOR，修复错别字升级 PATCH',
          '将 Prompt 存储在 git 的 `/prompts/` 目录中——视作代码管理，而非配置',
          '每次 Prompt 变更都开启 PR；人工审核前自动化回归测试先行',
          'Prompt 变更日志需要 5 个字段：版本、日期、作者、变更类型和预期输出差异',
          '回滚方式：`git revert`（标准）、功能标志（零停机）、环境变量覆盖（紧急修复）',
          '每个功能区域指定一位 Prompt 所有者，防止合并冲突和责任不清',
          '任何生产 Prompt 的黄金测试集最少需要 10–20 个用例',
        ],
      },

      whyVersionControl: {
        id: 'why-version-control',
        title: '为什么 Prompt 版本控制能防止静默回归',
        content: [
          '**没有版本控制，一次 Prompt 变更导致的输出质量下降不会留下任何痕迹——没有错误日志、没有差异记录、没有回滚路径。** 模型不会抛出异常，而是返回听起来合理的错误答案。等到质量下降被发现时（通过用户投诉、准确率指标或下游解析错误），原始 Prompt 可能已经消失。',
          '版本控制能防止的三种失败模式：（1）静默回归——措辞变更微妙地改变了模型行为，在有人注意到之前已影响数千次请求的输出质量。（2）无法回滚——没有历史记录，只能从记忆或旧部署日志中重建之前的 Prompt。（3）协作冲突——两位工程师独立编辑同一个 Prompt，后合并的版本悄然覆盖了前一个，没有任何记录。',
        ],
        snippets: [
          {
            type: 'in-one-sentence',
            text: 'Prompt 版本控制是追踪 AI Prompt 每次变更、支持回滚至任意历史版本、并记录每次变更的作者和原因的系统。',
          },
        ],
        callouts: [
          { type: 'Warning', label: '静默回归', text: 'Prompt 静默失败——返回听起来合理的错误答案，而非报错。错误日志无法捕捉质量下降。只有对黄金测试集运行回归测试才能检测到。' },
        ],
      },

      semanticVersioning: {
        id: 'semantic-versioning',
        title: 'AI Prompt 的语义化版本控制如何运作',
        content: [
          '**MAJOR.MINOR.PATCH 版本控制告知所有调用方，Prompt 变更是否可以安全采用而无需重新测试其下游代码。** MAJOR 表示输出格式已变更（下游解析器将会崩溃）。MINOR 表示质量有所提升但格式保持稳定。PATCH 表示仅有措辞或说明变更，不影响行为。',
        ],
        columns: ['变更类型', '何时升级', '示例', '向后兼容？'],
        rows: [
          { '变更类型': 'MAJOR', '何时升级': '输出格式变更——JSON 转 Markdown、新增必填字段、删除字段', '示例': 'v1.2.0 → v2.0.0', '向后兼容？': '否——需更新所有调用方' },
          { '变更类型': 'MINOR', '何时升级': '质量改善、延迟优化、指令遵循改善', '示例': 'v1.2.0 → v1.3.0', '向后兼容？': '是——可安全采用' },
          { '变更类型': 'PATCH', '何时升级': '修复错别字、补充说明、不影响模型行为的微小措辞调整', '示例': 'v1.2.0 → v1.2.1', '向后兼容？': '是——预期无行为变化' },
        ],
        callouts: [
          { type: 'Key Point', label: 'MAJOR 触发条件', text: '任何时候解析 Prompt 输出的下游代码会崩溃，就需要升级 MAJOR。如果输出从 JSON 数组变为 Markdown 列表，即使内容相同，这也是 MAJOR 升级。' },
          { type: 'Pro Tip', label: '在 git 中打标签', text: '每次合并后打版本标签：`git tag v2.1.0 -m "改善提取 Prompt 中的日期推理"`。这创建了用于回滚的永久引用。' },
        ],
      },

      gitWorkflow: {
        id: 'git-workflow',
        title: '如何为 Prompt 变更搭建 Git 工作流',
        content: [
          '**标准工作流为：创建分支 → 编辑 Prompt → 运行回归测试 → 开启 PR → 合并并打标签。** 每个步骤都与软件代码变更一一对应——因为 Prompt 就是代码。',
        ],
        numberedItems: [
          '创建功能分支：`git checkout -b feature/add-json-output`。使用前缀 `feature/`（新功能）、`fix/`（回归修复）或 `experiment/`（A/B 测试）。',
          '编辑 `/prompts/[name].txt` 中的 Prompt 文件。更新顶部版本注释：`# version: 2.0.0 | changed: JSON 输出格式 | author: jane`。',
          '对黄金测试集运行自动化回归套件（最少 10 个用例）。测试需涵盖：格式验证、与黄金答案的输出对比、幻觉标记和延迟检查。开启 PR 前所有测试必须通过。',
          '开启 PR，描述包含：变更内容、原因、版本升级类型（MAJOR/MINOR/PATCH）和预期输出差异。审核人检查：清晰度、幻觉风险、输出格式和安全性。',
          '审批通过后合并至 main 并打发布标签：`git tag v2.0.0 -m "JSON 输出格式 — MAJOR"`，然后 `git push origin v2.0.0`。',
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
          { type: 'Pro Tip', label: '目录结构', text: '将 Prompt 存放在 `/prompts/`，测试数据存放在 `/prompts/tests/`。这样 Prompt 文件可以独立审查，与应用代码分离，同时保留在同一个仓库中。' },
        ],
      },

      changelog: {
        id: 'changelog',
        title: '每条 Prompt 变更日志必须包含的内容',
        content: [
          '**Prompt 变更日志条目需要 5 个字段：版本、日期、作者、变更类型和预期输出差异。** 预期输出差异是最重要的字段：它描述变更后模型响应将如何不同，使下游调用方了解需要更新的内容。',
        ],
        columns: ['字段', '必填', '示例'],
        rows: [
          { '字段': 'version', '必填': '是', '示例': '`v2.1.0`' },
          { '字段': 'date', '必填': '是', '示例': '`2026-04-30`' },
          { '字段': 'author', '必填': '是', '示例': '`jane.smith@company.com`' },
          { '字段': 'change type', '必填': '是', '示例': '`MINOR — 改善日期提取推理`' },
          { '字段': 'expected output delta', '必填': '是', '示例': '`日期字段现在始终使用 ISO 8601（YYYY-MM-DD）格式。之前：约 30% 的边界情况返回 MM/DD/YYYY。`' },
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
          { type: 'Best Practice', label: '先写变更日志', text: '先写变更日志条目，再写 Prompt 变更——这会迫使你明确意图。如果无法描述预期输出差异，说明你还没有真正理解自己在修改什么。' },
        ],
      },

      rollback: {
        id: 'rollback',
        title: '何时以及如何将 Prompt 回滚至先前版本',
        content: [
          '**`git revert` 是标准回滚路径——它创建一个新提交来撤销破坏性变更，同时不删除历史。** 了解回滚触发条件，并根据紧急程度选择合适方法。',
          '回滚触发条件：（1）通过准确率指标或用户反馈检测到生产质量下降。（2）部署的 Prompt 中发现安全问题。（3）模型版本更新破坏了与现有 Prompt 的兼容性。（4）业务逻辑变更导致之前的输出格式不再正确。',
        ],
        columns: ['回滚方法', '速度', '风险', '使用时机'],
        rows: [
          { '回滚方法': '`git revert <commit>`', '速度': '秒级创建，分钟级部署', '风险': '低——创建有记录的回滚提交', '使用时机': '标准非紧急回滚；保留完整审计历史' },
          { '回滚方法': '功能标志切换', '速度': '秒级——无需部署', '风险': '低——预部署标志时零停机', '使用时机': 'Prompt 选择已在标志后且标志系统在线时' },
          { '回滚方法': '环境变量覆盖', '速度': '秒级——无需代码部署', '风险': '中等——绕过常规审核工作流', '使用时机': '仅限紧急修复；之后立即跟进正式的 `git revert` PR' },
        ],
        callouts: [
          { type: 'Warning', label: '回滚前先测试', text: '永远不要在不运行回归测试的情况下回滚——可能会重新引入之前已修复的 bug。被回滚版本修复的问题可能比正在逃离的回归更严重。' },
        ],
      },

      teamCollaboration: {
        id: 'team-collaboration',
        title: '团队如何在不冲突的情况下协作修改 Prompt',
        content: [
          '**所有权防止合并冲突：每个功能区域指定一位 Prompt 所有者，该 Prompt 的所有变更都需要该所有者审核。** 没有明确所有权，两位工程师会并行编辑同一个 Prompt，后合并的版本悄然覆盖前一个变更。',
          '团队适用的两种仓库模式：（1）含 `/prompts/` 目录的 Monorepo——当 Prompt 与单一服务紧密耦合，且 Prompt 变更需要与应用一起部署时最佳。（2）专用 Prompt 仓库或包——当 Prompt 跨多个服务共享，或 Prompt 工程师需要独立审核周期而无需应用仓库访问权限时最佳。',
        ],
        callouts: [
          { type: 'Best Practice', label: '所有权模型', text: '每个功能区域（如提取 Prompt 所有者、分类 Prompt 所有者）指定一位 Prompt 所有者。该 Prompt 的每次变更都经过该所有者审核——无一例外。' },
        ],
      },

      automatedTesting: {
        id: 'automated-testing',
        title: '自动化测试在 Prompt 变更发布前能发现什么',
        content: [
          '**回归测试检测格式崩溃；LLM 评判检测质量下降。** 四种测试类型覆盖 Prompt 变更进入生产前的主要失败模式。',
          '四种测试类型：（1）格式验证——断言输出符合预期 schema（JSON 结构、必填字段、数据类型）。毫秒级运行，捕捉 60–70% 的破坏性变更。（2）黄金集对比——将输出与 10–20 个代表性输入的人工验证正确答案进行比较。LLM 评判或字符串相似度指标评分。（3）幻觉标记——检测输出中不基于提供上下文的事实断言。标记任何断言输入中不存在事实的响应。（4）延迟检查——断言中位响应时间在可接受范围内（如 p95 ≤ 3s）。捕捉导致过多模型计算的 Prompt。',
        ],
        callouts: [
          { type: 'Key Point', label: '最小测试集', text: '任何生产 Prompt 的最低标准是 10–20 个代表性输入的黄金测试集。需覆盖：正常路径、边界情况（空输入/超长输入）、对抗性输入以及已知失败模式。' },
        ],
      },

      mistakes: {
        id: 'mistakes',
        title: 'Prompt 版本控制中的常见错误',
        mistakes: [
          {
            mistake: '从第一天起就没有版本控制方案',
            problem: '团队成长、多位工程师无统一版本规范地编辑 Prompt 时，静默破坏性变更就会进入生产',
            fix: '从第一个生产 Prompt 就采用 MAJOR.MINOR.PATCH——即使今天只有一位工程师编写 Prompt，下一个新人也会继承这套系统',
          },
          {
            mistake: '将 Prompt 内嵌在应用代码中而非 `/prompts/` 目录',
            problem: '埋在应用代码中的 Prompt 无法独立审查、测试或版本控制——它们随每次应用部署而变化',
            fix: '将所有 Prompt 移至 `/prompts/`，测试数据放在 `/prompts/tests/`。这样无需触动应用代码即可将其作为独立产物审查',
          },
          {
            mistake: '每个 PR 没有变更日志要求',
            problem: '数周后出现回归时，没有任何记录说明什么改变了、何时改变、为何改变——只能费力地翻 git log',
            fix: '通过 CI 检查将 CHANGELOG.md 条目列为强制 PR 要求——如果更改的 Prompt 文件没有对应的变更日志条目，PR 就无法合并',
          },
          {
            mistake: '只测试正常路径',
            problem: '上一个版本中正常工作的边界情况，在 Prompt 变更后静默崩溃——只有当用户投诉或生产中出现下游解析错误时才被发现',
            fix: '要求最少 10 个黄金测试用例，其中至少 2 个边界情况和 1 个对抗性输入——整个测试套件通过前 PR 不得合并',
          },
          {
            mistake: '不运行回归测试就回滚',
            problem: '被回滚的版本重新引入了当时已修复的 bug，在第一个回归之上制造了第二个回归',
            fix: '合并回滚 PR 前必须运行完整的回归套件——将回滚提交视为生产变更，与正向变更适用同等的测试门控',
          },
        ],
      },

      regionalConsiderations: {
        id: 'regional-considerations',
        title: 'Prompt 版本控制的合规与审计要求',
        content: [
          '**中国（数据安全法）** 中国 2021 年《数据安全法》要求对重要数据处理活动建立数据分类分级制度和安全审查机制。对于使用 AI 系统处理重要数据或核心数据的企业，Prompt 版本历史（包含版本号、变更时间、操作人及审批记录）可作为数据处理活动记录的技术证据。使用 Qwen2.5 等本地部署模型可满足数据本地化处理要求，规避 Prompt 内容跨境传输的合规风险。',
          '**亚太地区（数据跨境）** 亚太各经济体对 AI 系统数据跨境流动有差异化要求。新加坡 PDPA、日本 APPI 及 ASEAN 跨境数据流动框架均要求企业能够追溯 AI 输出的生成过程。版本化的 Prompt 历史结合 Git 签名提交，可提供 AI 决策过程的完整证据链，满足各地数据治理合规要求。',
          '**企业部署** 金融、医疗、法律等受严格监管的行业对 AI 系统的可追溯性要求最高。银行监管机构要求金融机构能够解释 AI 辅助决策的依据；医疗机构需保留 AI 输出的完整变更历史以满足医疗质量管理规范；律师事务所需证明 AI 生成内容经过人工审查和版本管控。建议此类机构保留至少 12 个月的 Prompt 版本历史，并采用防篡改存储方案。',
        ],
      },

      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '什么是 Prompt 版本控制？',
            a: 'Prompt 版本控制是追踪 AI Prompt 每次变更、支持回滚至任意历史版本、并记录每次变更的作者和原因的系统。它将语义化版本控制（MAJOR.MINOR.PATCH）应用于 Prompt：输出格式变更升级 MAJOR，质量改善升级 MINOR，修复错别字升级 PATCH。Prompt 以文本文件形式存储在 git 中，变更经过 PR 审核，发布版本打标签管理。',
          },
          {
            q: '需要为 Prompt 单独建立 Git 仓库吗？',
            a: '5 人以下团队或少于 20 个 Prompt 的情况：在现有应用仓库中建立 /prompts/ 目录即可。更大的团队或多服务共享 Prompt 的情况：专用 Prompt 仓库可提供更清晰的所有权、独立的版本控制和访问控制。Prompt 与应用逻辑紧密耦合时用应用仓库；Prompt 跨多个服务或团队使用时用独立仓库。',
          },
          {
            q: 'Prompt 版本控制与模型版本控制有何区别？',
            a: 'Prompt 版本控制追踪发送给模型的文本指令的变更。模型版本控制追踪应用程序调用的 AI 版本（GPT-4o、Claude 3.7、Llama 4）。两者都需要独立的版本控制。切换目标模型时，即使 Prompt 文本相同，也应视为 MAJOR 版本升级——不同模型对相同 Prompt 的响应可能不同。',
          },
          {
            q: '生产 Prompt 的最小测试集规模是多少？',
            a: '最少需要 10–20 个黄金测试用例。需覆盖：正常路径、边界情况（空输入、超长输入）、对抗性输入（尝试覆盖指令）以及已知失败模式。少于 10 个用例会遗漏太多边界情况；超过 50 个则维护成本过高，边际收益降低。',
          },
          {
            q: '同一 Prompt 在不同模型上使用时如何版本控制？',
            a: '为每个 Prompt+模型组合维护独立的版本历史。在 Prompt 文件中使用元数据头：`# version: 2.1.0 | model: gpt-4o`。部署到新模型时，创建新的变体文件而非覆盖已有文件。晋升前对每个模型变体运行完整的黄金测试集。',
          },
          {
            q: '每次措辞变更都需要升级版本吗？',
            a: '是的——每次变更都需要在某个级别升级版本。修复错别字：PATCH。不改变格式的质量改善：MINOR。破坏下游解析器的格式或结构变更：MAJOR。不要跳过版本升级——即使是微小的措辞变更也可能意外影响模型行为，而未版本化的变更无法回滚。',
          },
          {
            q: '哪些工具原生支持 Prompt 版本控制？',
            a: 'Braintrust、PromptLayer 和 Vellum 提供原生 Prompt 版本控制，具备版本比较、评估运行和差异历史查看的 UI 面板。LangSmith 在其 Hub 中内置了 Prompt 版本追踪。对于简单场景，使用 /prompts/ 目录的纯 git 方案效果很好——Prompt 是文本文件，git 原生处理差异、历史和回滚。',
          },
          {
            q: '不使用 git 时如何回滚 Prompt？',
            a: '使用 Prompt 管理平台（Braintrust、Vellum、PromptLayer）时，通过内置版本历史回滚到之前的已批准版本。在环境变量中存储 Prompt 时，每次变更前保留备份，通过部署管道恢复。今后至少添加一个 CHANGELOG.md 文件——即使没有 git，这也能提供回滚参考。',
          },
          {
            q: '中国《数据安全法》对 Prompt 版本控制有哪些要求？',
            a: '中国 2021 年《数据安全法》要求处理重要数据的企业建立数据安全管理制度，包括数据处理活动的记录和审计机制。对于 AI 系统，Prompt 的每次变更记录（版本号、变更时间、操作人及变更原因）可满足数据处理活动记录要求。金融、医疗等行业还需遵守行业特定规范，建议保留至少 12 个月的 Prompt 版本历史，并确保审计日志不可篡改。',
          },
          {
            q: '中国大型企业（银行、医院、律所）如何落地 Prompt 版本管理？',
            a: '大型企业建议采用专用 Prompt 仓库，配合分支权限控制和双人审核制度。具体措施：（1）建立 Prompt 分类分级制度，区分高风险（直接影响决策）和低风险 Prompt；（2）所有生产环境 Prompt 变更须经业务和技术双重审批；（3）使用签名提交（git commit --gpg-sign）确保变更记录不可抵赖；（4）将 Prompt 版本历史归档至企业合规系统，满足监管检查要求。Braintrust 和 PromptLayer 均提供可在私有环境部署的企业版方案。',
          },
        ],
      },

      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[团队 Prompt 审核工作流](/prompt-engineering/prompt-review-workflow-for-teams?lang=zh) — 部署前审核 Prompt 变更的 7 点检查清单与 CI/CD 门控',
          '[LLM 输出构建质量检查](/prompt-engineering/build-quality-checks?lang=zh) — 作为 Prompt PR 门控一部分运行的自动化质量检查',
          '[跨模型 Prompt 测试方法](/prompt-engineering/how-to-test-prompts-across-models?lang=zh) — 发布前验证 Prompt 一致性的跨模型回归测试',
          '[AI 幻觉：识别与应对](/prompt-engineering/ai-hallucinations-why-ai-makes-things-up?lang=zh) — 版本控制工作流自动化测试步骤中的幻觉检测技术',
          '[RTF Prompt 框架](/prompt-engineering/rtf-framework?lang=zh) — 通过明确输出格式简化版本控制的结构化 Prompt 格式（角色·任务·格式）',
        ],
      },

      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[语义化版本规范（semver.org）](https://semver.org/) — MAJOR.MINOR.PATCH 标准规范，可直接应用于 Prompt 版本控制',
          '[Git 文档：git revert](https://git-scm.com/docs/git-revert) — Prompt 版本控制工作流主要回滚机制的官方参考',
          '[Braintrust：Prompt 评估与版本控制指南](https://www.braintrust.dev/docs/guides/evals) — 使用专用工具进行 Prompt 版本控制、自动化测试和 CI/CD 集成的技术指南',
        ],
      },
    },
  },
};
