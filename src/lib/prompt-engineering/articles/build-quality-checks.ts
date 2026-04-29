// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: build-quality-checks
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/types";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Fundamentals',
      title: 'Build Quality Checks With AI In Mind: Detecting Hallucinations and Fabricated Dependencies',
      seoTitle: 'AI Build Quality Checks: Catch Hallucinations in CI/CD (2026)',
      metaDescription: 'AI-generated code hallucinates APIs, invents fake packages, and breaks requirements silently. Traditional lint-and-test gates miss all 3. Here\'s the fix.',
      ogTitle: '3 Ways AI-Generated Code Breaks Your CI/CD — And How to Fix Them',
      ogDescription: 'AI invents package names, fakes APIs, and silently misimplements requirements. These 5 gates catch hallucinations before merge.',
      twitterTitle: 'Your CI/CD Can\'t Catch AI Hallucinations. Here\'s What to Add',
      twitterDescription: 'AI writes code that compiles, passes lint, and still breaks in production. Dependency checks, API reality checks, and SAST gates are the fix.',
      intro: 'AI-generated code fails traditional quality gates at scale: studies and industry reports consistently find that AI-written programs contain exploitable vulnerabilities at significantly higher rates than human-reviewed code, and a measurable fraction of AI-suggested packages or APIs simply do not exist. To keep these hallucinations and AI-specific failure modes out of production, build quality checks must evolve from generic "tests + coverage" gates into AI-aware pipelines that detect unreal APIs, fake dependencies, and confident-but-wrong logic before merge.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 min read',
      educationalLevel: 'Intermediate',
      audience: 'Development team leads and DevOps engineers integrating AI coding assistants into production CI/CD pipelines',
      primaryTerm: 'AI Build Quality Checks',
      aboutTopics: ['CI/CD Security', 'AI Code Hallucinations', 'Dependency Validation'],
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Changes When AI Writes Your Code?', anchor: '#what-changes' },
        { label: 'Which Hallucination Types Must Your Gates Catch?', anchor: '#hallucination-types' },
        { label: 'What Does an AI-Aware CI/CD Architecture Look Like?', anchor: '#architecture' },
        { label: 'Which Concrete Checks Should You Add?', anchor: '#concrete-checks' },
        { label: 'How Do You Handle Hallucinations in the Pipeline?', anchor: '#hallucination-handling' },
        { label: 'How Do You Make AI Quality Checks Developer-Friendly?', anchor: '#developer-friendly' },
        { label: 'Example: Extending a Classic Gate for AI Code', anchor: '#example' },
        { label: 'How to Build AI-Aware Quality Checks', anchor: '#how-to-start' },
        { label: 'Common Mistakes to Avoid', anchor: '#common-mistakes' },
        { label: 'Regional Considerations', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Related Reading', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Build Quality Checks With AI In Mind: Detecting Hallucinations and Fabricated Dependencies',
        description: 'Design CI/CD quality gates for AI-generated code. Includes hallucination detection, dependency validation, security gates, and developer-friendly practices.',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks', width: 1200, height: 630 },
        keywords: ['quality gates', 'CI/CD', 'AI hallucinations', 'code review', 'security scanning', 'dependency validation', 'build checks'],
        proficiencyLevel: 'Intermediate',
        audience: { '@type': 'Audience', audienceType: 'Development team leads and DevOps engineers integrating AI coding assistants' },
        about: [
          { '@type': 'Thing', name: 'AI Code Quality' },
          { '@type': 'Thing', name: 'CI/CD Pipelines' },
          { '@type': 'Thing', name: 'Hallucination Detection' },
        ],
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
        mentions: [
          { '@type': 'SoftwareApplication', name: 'SAST' },
          { '@type': 'SoftwareApplication', name: 'DAST' },
          { '@type': 'SoftwareApplication', name: 'Snyk' },
          { '@type': 'SoftwareApplication', name: 'Bandit' },
        ],
      },
      faqSchema: {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'en',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is an AI-aware build quality check?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'An AI-aware build quality check is a CI/CD gate designed to catch failure modes specific to AI-generated code: hallucinated APIs, fabricated package names, and logic errors that compile but violate requirements. Unlike traditional lint and coverage gates, these checks verify that referenced packages actually exist and that invoked APIs match your actual SDK or service definitions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How is AI-generated code different from human-written code in terms of quality risk?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI-generated code introduces structural failure modes that human-written code rarely exhibits: invented package names that do not exist in any registry, method calls absent from your SDK versions, and code that satisfies superficial tests while silently misimplementing requirements. Traditional gates detect syntax errors and coverage gaps but were not designed for confident hallucinations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I detect hallucinated package names in my CI/CD pipeline?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Add a dependency validation step that checks whether every imported package actually exists in your target registry (npm, PyPI, Maven, etc.) before running tests. Implement it as a pre-commit hook or a CI job that calls the registry API. Packages that cannot be resolved or have no publish history should fail the build immediately.',
            },
          },
          {
            '@type': 'Question',
            name: 'What security checks should I add for AI-generated code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Run SAST tools like Bandit (Python), ESLint-Security (JavaScript), or Snyk on every changed file. Require zero new high or critical findings on AI-modified code paths. Mandate manual security review for AI-generated code that touches authentication, payments, admin features, or personal data.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is a hallucinated API the same as a runtime error?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A hallucinated API is subtler than a simple runtime error. It refers to a model inventing a method, parameter, or configuration option that does not exist in the actual SDK or service — code that appears correct and passes compilation but throws at runtime or silently degrades behavior. Runtime errors are symptoms; hallucination detection catches the cause earlier in the pipeline.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use AI tools to review AI-generated code?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Multi-model cross-checking is an effective pattern: one model generates code, a different model reviews it. Areas where the reviewer model expresses uncertainty or disagrees with the generator can be flagged for human attention. This works best on risk-critical paths like authentication, payment processing, or infrastructure configuration.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I introduce AI-aware quality checks without slowing my team down?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Start all new rules in warning mode to gather data before blocking merges. Explain failure reasons clearly in error messages with links to documentation. Allow documented overrides so teams can proceed on unusual but valid cases while leaving an audit trail. Track false-positive rates per gate and adjust thresholds where friction exceeds value.',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Build AI-Aware Quality Checks',
        inLanguage: 'en',
        step: [
          {
            '@type': 'HowToStep',
            name: 'Add a dependency validation step',
            text: 'Check that all imported packages actually exist in your package manager. Verify every import or require statement resolves to a real package in npm, pip, PyPI, or your internal registry.',
          },
          {
            '@type': 'HowToStep',
            name: 'Scan for hallucination patterns',
            text: 'Run a linter or custom script that checks every API call against the actual SDK or service documentation. Flag calls to methods or endpoints that do not exist in your codebase or SDK versions.',
          },
          {
            '@type': 'HowToStep',
            name: 'Add a security-focused gate',
            text: 'Run SAST tools like Bandit (Python), ESLint-Security (JavaScript), or Snyk on changed files. Scan for SQL injection patterns, overly broad CORS rules, hardcoded credentials, and insecure deserialization.',
          },
          {
            '@type': 'HowToStep',
            name: 'Use multi-model validation for critical paths',
            text: 'For code touching authentication, payments, or infrastructure, run the code through multiple AI models asking whether it matches the intended logic and whether there are security risks.',
          },
          {
            '@type': 'HowToStep',
            name: 'Require human code review focused on logic',
            text: 'Automated gates catch obvious hallucinations. Code reviewers should verify: Does this do what was intended? Are edge cases handled? Is the approach appropriate for the use case?',
          },
        ],
      },
      sections: {

        tldr: {
          id: 'key-takeaways',
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'AI-generated code introduces new failure modes — hallucinated APIs, fabricated dependencies, and requirement-breaking logic — that traditional quality gates were not designed to catch.',
            'Treat hallucinations as a structural risk: assume they will happen wherever AI is allowed to write or refactor code, and design tests and policies to detect them.',
            'An AI-aware gate architecture layers pre-commit checks, PR-level policies, deeper CI analysis, security and dependency gates, and runtime feedback.',
            'Concrete AI-specific checks include dependency existence checks, API reality checks, higher coverage thresholds on new code, and stricter security gates on AI-touched files.',
            'Developer-friendly gates explain failures clearly, differentiate warnings from hard blocks, support documented overrides, and are tuned to minimise noisy false positives.',
          ],
        },

        definition: {
          id: 'what-changes',
          title: 'What Changes When AI Writes Your Code?',
          content: [
            '**When AI writes code, quality gates must defend against a new class of problems: hallucinated APIs, fabricated dependencies, and patterns that look correct but fail at runtime or under attack.** This is structurally different from what lint and unit tests were designed to detect.',
            'Observed issues with [AI-generated code](/prompt-engineering/write-better-code-with-ai) include:',
          ],
          items: [
            '**Security vulnerabilities:** studies and industry reports consistently find that AI-generated solutions to common programming problems contain exploitable bugs at higher rates than human-reviewed code, especially around input validation, authentication, and cryptography.',
            '**Fabricated packages:** language models sometimes recommend libraries or package names that do not exist in the ecosystem, opening the door for "typosquatting/slopsquatting" attacks if attackers later register those names.',
            '**Hallucinated APIs and functions:** models can invent methods, parameters, or configuration flags that look plausible but are absent from your actual SDKs or internal services.',
            '**Requirement-conflicting logic:** code that compiles and passes superficial tests but does the wrong thing compared to the original requirements (for example, mixing up `amountDue` and `amountPaid`).',
            '**Unsafe defaults:** use of insecure patterns such as broad CORS rules, permissive JWT validation, weak password policies, or debug logging of sensitive data.',
          ],
          callouts: [
            { type: 'warning', label: 'Slopsquatting Risk', text: 'When an AI model invents a package name, attackers can register that name with malicious code. Once your team runs npm install or pip install on it, the package executes arbitrary code in your build environment.' },
          ],
        },

        definitionConclusion: {
          content: [
            'Traditional checks (lint, unit tests, coverage thresholds) catch some of this, but they were not designed for confidently hallucinated behaviour.',
          ],
        },

        hallucinations: {
          id: 'hallucination-types',
          title: 'Which Hallucination Types Must Your Gates Catch?',
          content: [
            '**Code hallucinations are not only syntax errors; they include logical, structural, and dependency-level fabrications that often pass superficial checks.** Designing effective gates requires understanding each category.',
            'Common categories to design around:',
          ],
          items: [
            '**Logic hallucinations:** wrong algorithms, missing edge-case handling, "happy-path only" code that breaks on real data.',
            '**Mapping/type errors:** incorrect assumptions about types or mappings between domain objects, leading to subtle data corruption.',
            '**Naming confusion:** variable or function names swapped or misused in ways that still compile but violate domain rules.',
            '**Resource hallucinations:** unbounded memory or CPU usage (for example, loading entire tables into memory), ignoring performance constraints.',
            '**API / library hallucinations:** calls to methods, endpoints, or configuration options that are not present in your versions of libraries or services.',
            '**Security hallucinations:** code that looks structured and "secure-ish" but quietly omits essential checks such as authorization, sanitisation, or rate limiting.',
          ],
          callouts: [
            { type: 'key-point', label: 'Structural vs Syntax', text: 'A hallucinated API call compiles cleanly and passes static analysis. Only runtime execution or SDK-aware linting catches it. This is why extra layers beyond lint and unit tests are necessary.' },
          ],
        },

        hallucinationsConclusion: {
          content: [
            'A robust build system should assume these will appear wherever AI is allowed to write or refactor code.',
          ],
        },

        architecture: {
          id: 'architecture',
          title: 'What Does an AI-Aware CI/CD Gate Architecture Look Like?',
          content: [
            '**AI-aware build quality checks should form a multi-stage gate: pre-commit filters, PR-level policy checks, deep analysis in CI, and post-deployment monitoring.** No single stage catches all failure modes.',
            'A practical architecture:',
          ],
          items: [
            '**Pre-commit / local hooks** — Enforce baseline formatting and linting. Optionally forbid direct committing of large AI-generated diffs without a short human-written summary of changes.',
            '**Pull request quality gate** — Add AI-specific checks on top of normal ones: unit tests, coverage thresholds, style, conventional static analysis, plus AI-aware checks (detect unknown or non-existent packages, verify referenced APIs exist, flag new endpoints without tests).',
            '**Deeper CI analysis** — Run extended test suites and property-based tests for code touched by AI. Apply [security scanners (SAST/DAST)](/prompt-engineering/ai-code-review) with a focus on newly modified code paths. Analyse complexity and potential performance hotspots.',
            '**Pattern and drift detection** — Compare new code against established project patterns: architecture, error handling, logging. Flag code that diverges strongly from your usual idioms.',
            '**Security and dependency gates** — Require "no new high or critical vulnerabilities" from your security tooling on changed lines. Block builds if new dependencies are unapproved, unpinned, or from suspicious sources.',
            '**Runtime monitoring and feedback** — Track error rates, latency, and resource usage for endpoints recently modified by AI-assisted changes. Feed incidents back into prompts and quality rules to harden gates over time.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Start With Dependency Validation', text: 'Implement dependency existence checks first — highest ROI, easiest to add, and zero false positives. Each subsequent gate should be measurable and tunable before the next is introduced.' },
          ],
        },

        architectureConclusion: {
          content: [
            'This layered approach treats AI-generated code as a first-class risk category rather than just "more code".',
          ],
        },

        concreteChecks: {
          id: 'concrete-checks',
          title: 'Which Concrete Checks Should You Add for AI-Generated Code?',
          content: [
            '**To make quality gates AI-aware, add explicit checks for hallucinations, dependency fabrication, and unsafe defaults on top of your existing test and coverage rules.** These integrate into any CI/CD system as policy-as-code.',
            'Examples of enforceable policies:',
          ],
          items: [
            '**Tests and coverage** — Minimum coverage for new or changed lines (for example, ≥80%). Mandatory tests for all new public endpoints, background jobs, or exported functions.',
            '**Security gates** — No new high/critical findings from SAST or dependency scanners on changed code. Require manual review for AI-generated code that touches authentication, payments, admin features, or personal data.',
            '**Dependency sanity checks** — New packages must exist in the target registry and meet minimum maturity signals (downloads, stars, last publish date) unless explicitly whitelisted. Known typosquats fail the build immediately.',
            '**API reality checks** — Static analysis to ensure all invoked methods and endpoints exist in your codebase or documented SDK. Optional: restrict usage to an allowlist of approved APIs in sensitive areas.',
            '**Pattern and performance checks** — Enforce standard error-handling and logging wrappers. Flag newly added functions with unusually high complexity or obvious O(n²)/O(n³) patterns on large data paths.',
          ],
          callouts: [
            { type: 'best-practice', label: 'Coverage Threshold', text: 'Apply a stricter coverage threshold to AI-generated lines than to legacy code. Legacy code at 60% coverage may be acceptable; newly AI-generated code should reach ≥80% before merge.' },
          ],
        },

        concreteChecksConclusion: {
          content: [
            'Many of these can be implemented as "policy as code" in your CI system, custom linters, or specialised plugins.',
          ],
        },

        hallucinationHandling: {
          id: 'hallucination-handling',
          title: 'How Do You Handle Hallucinations Explicitly in the Pipeline?',
          content: [
            '**Hallucinations are a structural defect class, not temporary bugs; your build system should assume they happen and focus on detection and containment.** This mindset determines which tools and tests you prioritise.',
            'Practical strategies:',
          ],
          items: [
            '**Execution-based verification** — Don\'t rely on compilation alone. Run targeted tests that stress AI-generated code with edge cases, invalid inputs, and randomised data. Property-based tests are particularly effective at flushing out logic and mapping errors.',
            '**Grounding with real context** — When using AI to propose changes, supply real schemas, API specs, and configuration files as context. This reduces the chance of invented functions and parameters and makes it easier to detect when generated code deviates from reality.',
            '**Hybrid static + AI analysis** — Combine conventional static analysis with AI-based review. Static tools are good at data-flow and taint analysis; AI reviewers are good at reading intent and spotting higher-level requirement mismatches.',
            '**Multi-model cross-checking** — For important changes, have one model generate code and a different model review it. Areas where reviewers disagree or express low confidence can be flagged for human attention.',
            '**Hallucination blacklists and rules** — As you discover recurring hallucinated patterns — fake package names, made-up flags, invented endpoints — encode them as explicit rules. Future appearances then cause an automatic build failure or a strong warning.',
          ],
          callouts: [
            { type: 'warning', label: 'Compilation ≠ Correctness', text: 'An AI-generated function can compile cleanly, pass all existing tests, and still silently misimplement a requirement. Always test new code paths with at least one test that would fail if the logic were inverted or subtly wrong.' },
          ],
        },

        hallucinationHandlingConclusion: {
          content: [
            'By treating hallucinations as an expected class of defect, you can design tests and gates that reliably catch them.',
          ],
        },

        developerFriendly: {
          id: 'developer-friendly',
          title: 'How Do You Make AI Quality Checks Developer-Friendly?',
          content: [
            '**Quality gates only work if developers trust them; AI-aware checks should be transparent, explain failures clearly, and avoid noisy false positives.** High false-positive rates lead teams to disable or bypass gates entirely.',
            'Guidelines:',
          ],
          items: [
            '**Explain the "why" for each failure** — Error messages should show exactly which line or package violated which rule, and ideally link to documentation on how to fix or override it.',
            '**Differentiate hard blocks from warnings** — For new rules, start in "warning" mode to gather data and reduce frustration; promote to "blocking" only once signal-to-noise is acceptable.',
            '**Allow documented overrides** — Some AI-generated changes will be consciously risky or unusual. Provide a documented override mechanism (for example, a labelled comment plus a ticket link) so teams can proceed when appropriate while leaving an audit trail.',
            '**Measure false positives and iterate** — Track how often a gate blocks valid changes or forces unnecessary work. Adjust thresholds, refine rules, or narrow scope where needed.',
            '**Expose AI-specific dashboards** — Show how many issues were caught related to AI-generated code, how many vulnerabilities were avoided, and how often hallucinated dependencies were blocked. This builds confidence that the extra gates are worth the friction.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Warning-First Rollout', text: 'Always introduce a new gate in warning mode for at least one sprint before making it blocking. This lets you measure signal-to-noise and build developer trust before it starts breaking builds.' },
          ],
        },

        developerFriendlyConclusion: {
          content: [
            'A good AI-aware pipeline feels like a safety net, not an arbitrary obstacle course.',
          ],
        },

        example: {
          id: 'example',
          title: 'Example: Extending a Classic Gate for AI-Generated Code',
          content: [
            '**You can evolve an existing "tests + coverage + lint" gate into an AI-aware gate by layering targeted checks on top.** No full pipeline rebuild required.',
            'Baseline gate:',
          ],
          items: [
            'Run unit tests.',
            'Enforce minimum overall coverage.',
            'Run linters and formatters.',
          ],
        },

        exampleExtension: {
          content: ['AI-aware extension:'],
          items: [
            '**New/changed code coverage:** require a higher coverage threshold for new lines than for legacy code.',
            '**Dependency check:** fail if a new package is unknown, unapproved, or obviously suspicious.',
            '**API reality check:** scan for calls to functions or endpoints that don\'t exist in your codebase or official SDK versions.',
            '**Security scan:** require zero high/critical findings on changed files.',
            '**Manual review label:** if AI contributed more than N lines in a file, require explicit human approval from a senior developer before merge.',
          ],
        },

        exampleConclusion: {
          content: [
            'This approach avoids a complete rebuild of your process while directly targeting AI-specific risks.',
          ],
        },

        howToStart: {
          id: 'how-to-start',
          title: 'How to Build AI-Aware Quality Checks',
          numberedItems: [
            '**Add a dependency validation step: check that all imported packages actually exist in your package manager.** Before running tests, verify that every package mentioned in `import` or `require` statements exists in npm, pip, PyPI, or your internal registry. AI hallucinations often invent plausible-sounding package names.',
            '**Scan for common hallucination patterns: non-existent APIs, functions with wrong signatures, and fabricated config flags.** Run a linter or custom script checking if every API call matches the actual SDK or service documentation. Flag calls to methods that don\'t exist.',
            '**Add a security-focused gate: SAST plus explicit checks for common AI-generated vulnerabilities.** Use tools like Bandit (Python), ESLint-Security (JavaScript), or Snyk. Also scan for: SQL injection patterns, overly broad CORS rules, hardcoded credentials, insecure deserialization.',
            '**Use multi-model code validation for critical paths (auth, payments, infrastructure).** Before merging, run your code through multiple AI models asking "Does this code match the intended logic? Any security risks?" Flag divergence.',
            '**Require human code review with focus on logic vs. syntax.** Automated gates catch obvious hallucinations. Code reviewers should verify: Does this do what was intended? Are edge cases handled? Is the approach appropriate for the use case?',
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: 'Common Mistakes to Avoid',
          mistakes: [
            {
              mistake: 'Treating AI-generated code as equivalent to human-written code in quality risk',
              problem: 'Standard lint and unit test thresholds are calibrated for code written and reviewed by humans. AI-generated code can pass all traditional gates while containing hallucinated APIs, fabricated packages, and silently wrong logic.',
              fix: 'Apply a separate risk tier for AI-generated or AI-modified code. Use stricter coverage thresholds (≥80% for new lines), require security scans on all AI-touched files, and add dependency existence checks.',
            },
            {
              mistake: 'Relying on compilation as proof of correctness',
              problem: 'AI-generated code compiles cleanly even when it invokes methods that don\'t exist, imports packages that aren\'t registered, or implements logic that violates requirements. Compilation is a necessary but insufficient gate.',
              fix: 'Add runtime validation: property-based tests, edge-case tests, and integration tests that would fail if the logic were subtly wrong. SDK-aware linting that verifies method signatures is more effective than type checking alone.',
            },
            {
              mistake: 'Not checking whether suggested packages actually exist in the registry',
              problem: 'Language models frequently invent plausible package names when they do not know the correct one. Developers who run npm install or pip install on a hallucinated package name may install a malicious package later registered by an attacker (slopsquatting).',
              fix: 'Run a dependency validation step that calls the npm/PyPI/Maven registry API for every new package import. Fail the build if the package is unresolvable or has no publish history.',
            },
            {
              mistake: 'Starting new gates in blocking mode without data',
              problem: 'A new gate introduced as a hard blocker will encounter false positives, creating friction and eroding developer trust. Teams will seek workarounds or request the gate be removed.',
              fix: 'Run every new gate in warning mode for at least one sprint. Measure signal-to-noise, fix false positives, and only promote to blocking once the gate is demonstrably reliable.',
            },
            {
              mistake: 'Omitting AI-specific dashboards and metrics',
              problem: 'Without visibility into how many hallucination-related issues were caught, teams cannot justify the overhead of AI-aware gates or tune them effectively.',
              fix: 'Instrument your CI to tag issues by category (dependency hallucination, API hallucination, security finding, logic flag). Expose a weekly summary of issues caught per category.',
            },
          ],
        },

        regionalContext: {
          id: 'regional-context',
          title: 'Regional Considerations for AI Code Quality',
          content: [
            '**Regulatory requirements affect which AI-aware quality checks are mandatory versus recommended depending on your deployment region.** The following distinctions apply as of 2026.',
          ],
          items: [
            '**EU (GDPR / NIS2):** GDPR Article 25 (data protection by design) requires that code processing personal data is reviewed and validated before deployment. The NIS2 Directive additionally mandates supply chain security controls that cover dependency validation for critical infrastructure operators.',
            '**United States (SOC 2 / FedRAMP):** SOC 2 Type II audits require documented change management processes. AI-generated code merged without traceable human review may create audit findings. FedRAMP-authorized systems must pass SAST scans and document all third-party dependencies.',
            '**Japan (METI AI Governance Guidelines 2024):** METI guidelines recommend risk-based AI governance including quality assurance processes for AI-generated code. Enterprise deployments should document hallucination detection controls as part of AI governance records.',
            '**China (Cybersecurity Law / Data Security Law 2021):** Development pipelines for systems processing Chinese user data must comply with security review obligations. AI-generated code touching personal information requires review under PIPL.',
          ],
        },

        faqSection: {
          id: 'faq',
          title: 'FAQ',
          faqs: [
            {
              q: 'What is an AI-aware build quality check?',
              a: 'An AI-aware build quality check is a CI/CD gate designed to catch failure modes specific to AI-generated code: hallucinated APIs, fabricated package names, and logic errors that compile but violate requirements. Unlike traditional lint and coverage gates, these checks verify that referenced packages actually exist and that invoked APIs match your actual SDK or service definitions.',
            },
            {
              q: 'How is AI-generated code different from human-written code in terms of quality risk?',
              a: 'AI-generated code introduces structural failure modes that human-written code rarely exhibits: invented package names that do not exist in any registry, method calls absent from your SDK versions, and code that satisfies superficial tests while silently misimplementing requirements. Traditional gates detect syntax errors and coverage gaps but were not designed for confident hallucinations.',
            },
            {
              q: 'How do I detect hallucinated package names in my CI/CD pipeline?',
              a: 'Add a dependency validation step that checks whether every imported package actually exists in your target registry (npm, PyPI, Maven, etc.) before running tests. Implement it as a pre-commit hook or CI job that calls the registry API. Packages that cannot be resolved or have no publish history should fail the build immediately.',
            },
            {
              q: 'What security checks should I add for AI-generated code?',
              a: 'Run SAST tools like Bandit (Python), ESLint-Security (JavaScript), or Snyk on every changed file. Require zero new high or critical findings on AI-modified code paths. Mandate manual security review for AI-generated code that touches authentication, payments, admin features, or personal data.',
            },
            {
              q: 'Is a hallucinated API the same as a runtime error?',
              a: 'A hallucinated API is subtler than a simple runtime error. It refers to a model inventing a method, parameter, or configuration option that does not exist in the actual SDK or service — code that appears correct and passes compilation but throws at runtime or silently degrades behavior. Runtime errors are symptoms; hallucination detection catches the cause earlier in the pipeline.',
            },
            {
              q: 'Can I use AI tools to review AI-generated code?',
              a: 'Yes. Multi-model cross-checking is an effective pattern: one model generates code, a different model reviews it. Areas where the reviewer model expresses uncertainty or disagrees with the generator can be flagged for human attention. This works best on risk-critical paths like authentication, payment processing, or infrastructure configuration.',
            },
            {
              q: 'How do I introduce AI-aware quality checks without slowing my team down?',
              a: 'Start all new rules in warning mode to gather data before blocking merges. Explain failure reasons clearly in error messages with links to documentation. Allow documented overrides so teams can proceed on unusual but valid cases while leaving an audit trail. Track false-positive rates per gate and adjust thresholds where friction exceeds value.',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: 'Related Reading',
          items: [
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — how to structure prompts for code generation that produces reviewable output',
            '[AI Code Review: Tools and Verification](/prompt-engineering/ai-code-review) — using AI to review code quality and security',
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — foundational principles for reliable AI output',
            '[Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security) — attack patterns that affect AI-assisted development pipelines',
            '[AI Hallucinations: How to Stop Them](/prompt-engineering/ai-hallucinations-how-to-stop) — techniques to reduce hallucinations in AI-generated outputs',
            '[How to Evaluate Prompt Quality](/prompt-engineering/how-to-evaluate-prompt-quality) — evaluation frameworks applicable to code generation quality',
          ],
        },

        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — OWASP, 2025. Security risks specific to LLM-generated code and AI-assisted development.',
            '[GitHub CodeQL Documentation](https://codeql.github.com/docs/) — GitHub. Static analysis engine used for security scanning of AI-modified code paths.',
            '[Snyk State of Open Source Security Report](https://snyk.io/reports/state-of-open-source-security/) — Snyk, 2024–2025. Annual report on dependency vulnerabilities and supply chain risks.',
            '[NIST AI Risk Management Framework (AI RMF 1.0)](https://airc.nist.gov/Home) — NIST, 2023. Framework for managing risks from AI systems including code quality and governance.',
          ],
        },

      },
    },

    de: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    fr: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    ja: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    zh: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
