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
      intro: '**AI-generated code fails traditional quality gates at scale: studies and industry reports consistently find that AI-written programs contain exploitable vulnerabilities at significantly higher rates than human-reviewed code, and a measurable fraction of AI-suggested packages or APIs simply do not exist.** To keep these hallucinations out of production, build quality checks must evolve from generic "tests + coverage" gates into AI-aware pipelines that detect unreal APIs, fake dependencies, and confident-but-wrong logic before merge.',
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
        { label: 'Step-by-Step: How Do You Set Up AI-Aware Quality Checks?', anchor: '#how-to-start' },
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
          {
            '@type': 'Question',
            name: 'What is slopsquatting and why is it dangerous for AI-assisted development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Slopsquatting occurs when an AI model invents a plausible-sounding package name that does not actually exist in a registry. If an attacker later registers that invented name with malicious code, any developer who runs npm install or pip install on it executes the attacker\'s payload. The risk is particularly high with AI-assisted development because developers may not verify each suggested package individually before installing.',
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
            'As of Q2 2026, these issues are consistently reported across languages and models. Observed problems with [AI-generated code](/prompt-engineering/write-better-code-with-ai) include:',
          ],
          items: [
            '**Security vulnerabilities:** studies and industry reports consistently find that AI-generated solutions to common programming problems contain exploitable bugs at higher rates than human-reviewed code, especially around input validation, authentication, and cryptography.',
            '**Fabricated packages:** language models sometimes recommend libraries or package names that do not exist in the ecosystem, opening the door for "typosquatting/slopsquatting" attacks if attackers later register those names.',
            '**Hallucinated APIs and functions:** models can invent methods, parameters, or configuration flags that look plausible but are absent from your actual SDKs or internal services.',
            '**Requirement-conflicting logic:** code that compiles and passes superficial tests but does the wrong thing compared to the original requirements (for example, mixing up `amountDue` and `amountPaid`).',
            '**Unsafe defaults:** use of insecure patterns such as broad CORS rules, permissive JWT validation, weak password policies, or debug logging of sensitive data.',
          ],
          callouts: [
            { type: 'key-point', label: 'Quick Facts', text: '≥80% coverage threshold recommended for AI-generated lines. 5-stage gate architecture: pre-commit → PR review → CI → security → runtime monitoring. Zero new high/critical findings required on changed files.' },
            { type: 'warning', label: 'Slopsquatting Risk', text: 'When an AI model invents a package name, attackers can register that name with malicious code. Once your team runs npm install or pip install on it, the package executes arbitrary code in your build environment. See also: [Prompt Injection and Security](/prompt-engineering/prompt-injection-and-security).' },
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
            '**Code hallucinations are not only syntax errors; they include logical, structural, and dependency-level fabrications that often pass superficial checks.** Designing effective gates requires understanding each category. For techniques to reduce them at the prompt level, see [AI Hallucinations: How to Stop Them](/prompt-engineering/ai-hallucinations-how-to-stop).',
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
          snippets: [
            { type: 'in-one-sentence', text: 'A code hallucination is any AI-generated output — a package name, API method, config flag, or algorithm — that does not correspond to anything that actually exists or works in your environment.' },
            { type: 'in-plain-terms', text: 'Think of it like an AI confidently giving you directions to a street that doesn\'t exist. The directions look plausible, but following them leads nowhere — or somewhere dangerous.' },
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
            '**Security gates** — No new high/critical findings from SAST or dependency scanners on changed code. Require manual review for AI-generated code that touches authentication, payments, admin features, or personal data. Tooling guidance: [AI Code Review: Tools and Verification](/prompt-engineering/ai-code-review).',
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
          title: 'Step-by-Step: How Do You Set Up AI-Aware Quality Checks?',
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
            {
              q: 'What is slopsquatting and why is it dangerous for AI-assisted development?',
              a: 'Slopsquatting occurs when an AI model invents a plausible-sounding package name that does not actually exist in any registry. If an attacker later registers that name with malicious code, any developer who installs it via npm install or pip install executes the attacker\'s payload. The risk is highest in AI-assisted development because developers often install suggested packages without individually verifying them against official registries.',
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

    de: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Fundamentals',
      title: 'KI-Build-Quality-Checks: Halluzinationen und gefälschte Abhängigkeiten erkennen',
      seoTitle: 'KI-Build-Checks: Halluzinationen im CI/CD erkennen (2026)',
      metaDescription: 'KI-generierter Code halluziniert APIs, erfindet Pakete und bricht Anforderungen lautlos. Klassische Lint- und Test-Gates erkennen keines davon. So schließen Sie die Lücke.',
      ogTitle: '3 Wege, wie KI-generierter Code Ihre CI/CD-Pipeline bricht – und wie Sie es beheben',
      ogDescription: 'KI erfindet Paketnamen, fälscht APIs und verletzt Anforderungen ohne Fehlermeldung. Diese 5 Gates erkennen Halluzinationen vor dem Merge.',
      twitterTitle: 'Ihre CI/CD erkennt keine KI-Halluzinationen. Das sollten Sie hinzufügen',
      twitterDescription: 'KI schreibt Code, der kompiliert, den Lint besteht und trotzdem in der Produktion versagt. Abhängigkeitsprüfungen, API-Realitätschecks und SAST-Gates sind die Lösung.',
      intro: '**KI-generierter Code scheitert an herkömmlichen Qualitätsgates im großen Maßstab: Studien und Branchenberichte stellen konsistent fest, dass KI-geschriebene Programme deutlich häufiger ausnutzbare Schwachstellen enthalten als manuell geprüfter Code – und ein messbarer Anteil der vorgeschlagenen Pakete oder APIs existiert schlicht nicht.** Um diese Halluzinationen aus der Produktion fernzuhalten, müssen Build-Quality-Checks von generischen „Tests + Coverage"-Gates zu KI-bewussten Pipelines weiterentwickelt werden, die unwirkliche APIs, gefälschte Abhängigkeiten und zuversichtlich-aber-falschen Code vor dem Merge erkennen.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 Min. Lesezeit',
      educationalLevel: 'Intermediate',
      audience: 'Entwicklungsleiter und DevOps-Ingenieure, die KI-Coding-Assistenten in produktive CI/CD-Pipelines integrieren',
      primaryTerm: 'KI-Build-Quality-Checks',
      aboutTopics: ['CI/CD-Sicherheit', 'KI-Code-Halluzinationen', 'Abhängigkeitsvalidierung'],
      toc: [
        { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
        { label: 'Was ändert sich, wenn KI Ihren Code schreibt?', anchor: '#what-changes' },
        { label: 'Welche Halluzinationstypen muss Ihre Pipeline erkennen?', anchor: '#hallucination-types' },
        { label: 'Wie sieht eine KI-bewusste CI/CD-Gate-Architektur aus?', anchor: '#architecture' },
        { label: 'Welche konkreten Prüfungen sollten Sie hinzufügen?', anchor: '#concrete-checks' },
        { label: 'Wie behandeln Sie Halluzinationen explizit in der Pipeline?', anchor: '#hallucination-handling' },
        { label: 'Wie gestalten Sie KI-Qualitätsprüfungen entwicklerfreundlich?', anchor: '#developer-friendly' },
        { label: 'Beispiel: Erweiterung eines klassischen Gates für KI-Code', anchor: '#example' },
        { label: 'Schritt für Schritt: KI-bewusste Qualitätsprüfungen einrichten', anchor: '#how-to-start' },
        { label: 'Häufige Fehler vermeiden', anchor: '#common-mistakes' },
        { label: 'Regionale Überlegungen', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Weiterführende Literatur', anchor: '#related-reading' },
        { label: 'Quellen', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'KI-Build-Quality-Checks: Halluzinationen und gefälschte Abhängigkeiten erkennen',
        description: 'CI/CD-Qualitätsgates für KI-generierten Code entwerfen. Mit Halluzinationserkennung, Abhängigkeitsvalidierung, Sicherheitsgates und entwicklerfreundlichen Praktiken.',
        url: 'https://www.promptquorum.com/prompt-engineering/build-quality-checks?lang=de',
        inLanguage: 'de',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks?lang=de', width: 1200, height: 630 },
        keywords: ['Qualitätsgates', 'CI/CD', 'KI-Halluzinationen', 'Code-Review', 'Sicherheitsscanning', 'Abhängigkeitsvalidierung', 'Build-Prüfungen'],
        proficiencyLevel: 'Intermediate',
        audience: { '@type': 'Audience', audienceType: 'Entwicklungsleiter und DevOps-Ingenieure, die KI-Coding-Assistenten integrieren' },
        about: [
          { '@type': 'Thing', name: 'KI-Code-Qualität' },
          { '@type': 'Thing', name: 'CI/CD-Pipelines' },
          { '@type': 'Thing', name: 'Halluzinationserkennung' },
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
        inLanguage: 'de',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Was ist ein KI-bewusster Build-Quality-Check?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ein KI-bewusster Build-Quality-Check ist ein CI/CD-Gate, das speziell für Fehlerarten konzipiert wurde, die bei KI-generiertem Code auftreten: halluzinierte APIs, erfundene Paketnamen und Logikfehler, die zwar kompilieren, aber Anforderungen verletzen. Im Gegensatz zu herkömmlichen Lint- und Coverage-Gates überprüfen diese Checks, ob referenzierte Pakete tatsächlich existieren und ob aufgerufene APIs mit Ihrer tatsächlichen SDK- oder Service-Definition übereinstimmen.' },
          },
          {
            '@type': 'Question',
            name: 'Wie unterscheidet sich KI-generierter Code in Bezug auf Qualitätsrisiken von menschlich geschriebenem Code?',
            acceptedAnswer: { '@type': 'Answer', text: 'KI-generierter Code weist strukturelle Fehlermuster auf, die bei menschlich geschriebenem Code kaum vorkommen: erfundene Paketnamen, die in keiner Registry existieren, Methodenaufrufe, die in Ihrer SDK-Version fehlen, und Code, der oberflächliche Tests besteht, aber Anforderungen lautlos falsch implementiert. Herkömmliche Gates erkennen Syntaxfehler und Coverage-Lücken, wurden aber nicht für zuversichtliche Halluzinationen entwickelt.' },
          },
          {
            '@type': 'Question',
            name: 'Wie erkenne ich halluzinierte Paketnamen in meiner CI/CD-Pipeline?',
            acceptedAnswer: { '@type': 'Answer', text: 'Fügen Sie einen Abhängigkeitsvalidierungsschritt hinzu, der prüft, ob jedes importierte Paket tatsächlich in Ihrer Ziel-Registry (npm, PyPI, Maven usw.) vorhanden ist – bevor Tests ausgeführt werden. Implementieren Sie ihn als Pre-Commit-Hook oder als CI-Job, der die Registry-API aufruft. Pakete, die nicht aufgelöst werden können oder keine Veröffentlichungshistorie haben, sollten den Build sofort zum Scheitern bringen.' },
          },
          {
            '@type': 'Question',
            name: 'Welche Sicherheitsprüfungen sollte ich für KI-generierten Code hinzufügen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Führen Sie SAST-Tools wie Bandit (Python), ESLint-Security (JavaScript) oder Snyk für jede geänderte Datei aus. Verlangen Sie null neue kritische Findings auf KI-modifizierten Codepfaden. Schreiben Sie manuelle Sicherheitsreviews für KI-generierten Code vor, der Authentifizierung, Zahlungen, Admin-Funktionen oder personenbezogene Daten berührt.' },
          },
          {
            '@type': 'Question',
            name: 'Ist eine halluzinierte API dasselbe wie ein Laufzeitfehler?',
            acceptedAnswer: { '@type': 'Answer', text: 'Eine halluzinierte API ist subtiler als ein einfacher Laufzeitfehler. Sie bezeichnet eine Methode, einen Parameter oder eine Konfigurationsoption, die ein Modell erfunden hat und die im tatsächlichen SDK oder Service nicht existiert – Code, der korrekt erscheint und die Kompilierung besteht, aber zur Laufzeit eine Exception wirft oder das Verhalten still beeinträchtigt. Laufzeitfehler sind Symptome; Halluzinationserkennung trifft die Ursache früher in der Pipeline.' },
          },
          {
            '@type': 'Question',
            name: 'Kann ich KI-Tools nutzen, um KI-generierten Code zu überprüfen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja. Multi-Modell-Kreuzprüfung ist ein effektives Muster: Ein Modell generiert Code, ein anderes überprüft ihn. Stellen, an denen das prüfende Modell Unsicherheit zeigt oder dem generierenden widerspricht, können für menschliche Aufmerksamkeit markiert werden. Dies funktioniert am besten auf risikokritischen Pfaden wie Authentifizierung, Zahlungsverarbeitung oder Infrastrukturkonfiguration.' },
          },
          {
            '@type': 'Question',
            name: 'Wie führe ich KI-bewusste Qualitätsprüfungen ein, ohne mein Team zu verlangsamen?',
            acceptedAnswer: { '@type': 'Answer', text: 'Starten Sie alle neuen Regeln im Warnungsmodus, um Daten zu sammeln, bevor Merges blockiert werden. Erklären Sie Fehlergründe klar in Fehlermeldungen mit Links zur Dokumentation. Erlauben Sie dokumentierte Ausnahmen, damit Teams bei ungewöhnlichen, aber gültigen Fällen fortfahren können, während ein Audit-Trail erhalten bleibt. Verfolgen Sie False-Positive-Raten pro Gate und passen Sie Schwellenwerte an, wo die Reibung den Nutzen übersteigt.' },
          },
          {
            '@type': 'Question',
            name: 'Was ist Slopsquatting und warum ist es gefährlich für KI-gestützte Entwicklung?',
            acceptedAnswer: { '@type': 'Answer', text: 'Slopsquatting tritt auf, wenn ein KI-Modell einen plausibel klingenden Paketnamen erfindet, der in keiner Registry existiert. Wenn ein Angreifer diesen Namen später mit schädlichem Code registriert, führt jeder Entwickler, der ihn via npm install oder pip install installiert, den Payload des Angreifers aus. Das Risiko ist bei KI-gestützter Entwicklung besonders hoch, da Entwickler vorgeschlagene Pakete oft nicht einzeln gegen offizielle Registries prüfen.' },
          },
          {
            '@type': 'Question',
            name: 'Welche DSGVO-Anforderungen gelten für die Verwendung von KI-Code-Generierung?',
            acceptedAnswer: { '@type': 'Answer', text: 'DSGVO Artikel 25 (Datenschutz durch Technikgestaltung) schreibt vor, dass Code, der personenbezogene Daten verarbeitet, vor der Produktivsetzung überprüft und validiert wird. Für Betreiber kritischer Infrastrukturen kommt über die NIS2-Richtlinie die Pflicht zur Lieferkettensicherheit hinzu, die die Abhängigkeitsvalidierung abdeckt. Das BSI empfiehlt über die BSI-Grundschutz-Kataloge zusätzlich die Dokumentation von KI-spezifischen Risikominderungsmaßnahmen. NIS2-Enforcement begann im Oktober 2024.' },
          },
          {
            '@type': 'Question',
            name: 'Ist der Einsatz von KI-Code-Generierung im deutschen Mittelstand sinnvoll – und was sind die besonderen Risiken?',
            acceptedAnswer: { '@type': 'Answer', text: 'Ja, KI-Coding-Assistenten bieten auch mittelständischen Entwicklungsteams erhebliche Effizienzgewinne. Die besondere Herausforderung im Mittelstand: Oft fehlen spezialisierte DevSecOps-Teams, die Halluzinationen und Sicherheitslücken systematisch abfangen. Empfehlenswert ist ein schrittweiser Rollout – beginnend mit Abhängigkeitsvalidierung und SAST-Integration –, bevor weitere KI-spezifische Gates eingeführt werden. Das BSI-Grundschutz-Kompendium bietet praxisgerechte Leitlinien, die auch ohne große Sicherheitsabteilung umsetzbar sind.' },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Wie man KI-bewusste Build-Quality-Checks einrichtet',
        inLanguage: 'de',
        step: [
          { '@type': 'HowToStep', name: 'Abhängigkeitsvalidierungsschritt hinzufügen', text: 'Prüfen Sie, ob alle importierten Pakete tatsächlich in Ihrem Paketmanager existieren. Verifizieren Sie, dass jede import- oder require-Anweisung zu einem echten Paket in npm, pip, PyPI oder Ihrer internen Registry aufgelöst wird.' },
          { '@type': 'HowToStep', name: 'Auf Halluzinationsmuster scannen', text: 'Führen Sie einen Linter oder ein benutzerdefiniertes Skript aus, das jeden API-Aufruf gegen die tatsächliche SDK- oder Service-Dokumentation prüft. Markieren Sie Aufrufe zu Methoden oder Endpunkten, die in Ihrer Codebasis oder SDK-Versionen nicht existieren.' },
          { '@type': 'HowToStep', name: 'Sicherheitsfokussiertes Gate hinzufügen', text: 'Führen Sie SAST-Tools wie Bandit (Python), ESLint-Security (JavaScript) oder Snyk auf geänderten Dateien aus. Scannen Sie auf SQL-Injection-Muster, zu offene CORS-Regeln, hartcodierte Zugangsdaten und unsichere Deserialisierung.' },
          { '@type': 'HowToStep', name: 'Multi-Modell-Validierung für kritische Pfade einsetzen', text: 'Führen Sie Code, der Authentifizierung, Zahlungen oder Infrastruktur berührt, durch mehrere KI-Modelle und fragen Sie, ob er der beabsichtigten Logik entspricht und ob Sicherheitsrisiken bestehen.' },
          { '@type': 'HowToStep', name: 'Menschliches Code-Review mit Fokus auf Logik vorschreiben', text: 'Automatisierte Gates fangen offensichtliche Halluzinationen ab. Code-Reviewer sollten prüfen: Tut dieser Code das, was beabsichtigt war? Sind Randfälle berücksichtigt? Ist der Ansatz für den Anwendungsfall geeignet?' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Wichtigste Erkenntnisse',
          isTldr: true,
          items: [
            'KI-generierter Code führt neue Fehlerklassen ein – halluzinierte APIs, gefälschte Abhängigkeiten und anforderungsbrechende Logik –, die herkömmliche Qualitätsgates nicht erkennen.',
            'Behandeln Sie Halluzinationen als strukturelles Risiko: Gehen Sie davon aus, dass sie überall auftreten, wo KI Code schreiben oder refaktorieren darf, und entwerfen Sie Tests und Richtlinien für deren Erkennung.',
            'Eine KI-bewusste Gate-Architektur schichtet Pre-Commit-Prüfungen, PR-Richtlinien, tiefere CI-Analyse, Sicherheits- und Abhängigkeitsgates sowie Laufzeit-Feedback.',
            'Konkrete KI-spezifische Prüfungen umfassen Abhängigkeitsexistenzprüfungen, API-Realitätschecks, höhere Coverage-Schwellenwerte für neuen Code und striktere Sicherheitsgates für KI-berührte Dateien.',
            'Entwicklerfreundliche Gates erklären Fehler klar, unterscheiden Warnungen von harten Blockierungen, unterstützen dokumentierte Ausnahmen und sind auf minimale False Positives abgestimmt.',
          ],
        },
        definition: {
          id: 'what-changes',
          title: 'Was ändert sich, wenn KI Ihren Code schreibt?',
          content: [
            '**Wenn KI Code schreibt, müssen Qualitätsgates eine neue Klasse von Problemen abwehren: halluzinierte APIs, gefälschte Abhängigkeiten und Muster, die korrekt aussehen, aber zur Laufzeit oder unter Angriffen versagen.** Das unterscheidet sich strukturell von dem, was Lint und Unit-Tests erkennen sollten.',
            'Stand Q2 2026 werden diese Probleme konsistent über Sprachen und Modelle hinweg berichtet. Beobachtete Probleme mit [KI-generiertem Code](/prompt-engineering/write-better-code-with-ai?lang=de) umfassen:',
          ],
          items: [
            '**Sicherheitslücken:** Studien und Branchenberichte stellen konsistent fest, dass KI-generierte Lösungen für gängige Programmierprobleme häufiger ausnutzbare Fehler enthalten als manuell geprüfter Code – insbesondere bei Eingabevalidierung, Authentifizierung und Kryptografie.',
            '**Gefälschte Pakete:** Sprachmodelle empfehlen manchmal Bibliotheken oder Paketnamen, die im Ökosystem nicht existieren, und öffnen damit die Tür für Typosquatting-/Slopsquatting-Angriffe, wenn Angreifer diese Namen später registrieren.',
            '**Halluzinierte APIs und Funktionen:** Modelle können Methoden, Parameter oder Konfigurationsflags erfinden, die plausibel erscheinen, aber in Ihren tatsächlichen SDKs oder internen Services fehlen.',
            '**Anforderungsverletzende Logik:** Code, der kompiliert und oberflächliche Tests besteht, aber im Vergleich zu den ursprünglichen Anforderungen das Falsche tut (zum Beispiel `fälligerBetrag` und `bezahlterBetrag` vertauscht).',
            '**Unsichere Standardwerte:** Verwendung unsicherer Muster wie offene CORS-Regeln, permissive JWT-Validierung, schwache Passwortrichtlinien oder Debug-Logging sensibler Daten.',
          ],
          callouts: [
            { type: 'key-point', label: 'Quick Facts', text: '≥80 % Coverage-Schwellenwert empfohlen für KI-generierte Zeilen. 5-stufige Gate-Architektur: Pre-Commit → PR-Review → CI → Sicherheit → Laufzeit-Monitoring. Null neue kritische Findings auf geänderten Dateien erforderlich.' },
            { type: 'warning', label: 'Slopsquatting-Risiko', text: 'Wenn ein KI-Modell einen Paketnamen erfindet, können Angreifer diesen Namen mit schädlichem Code registrieren. Sobald Ihr Team npm install oder pip install darauf ausführt, wird beliebiger Code in Ihrer Build-Umgebung ausgeführt. Siehe auch: [Prompt Injection und Sicherheit](/prompt-engineering/prompt-injection-and-security?lang=de).' },
          ],
        },
        definitionConclusion: {
          content: [
            'Herkömmliche Prüfungen (Lint, Unit-Tests, Coverage-Schwellenwerte) fangen einen Teil davon ab, wurden aber nicht für zuversichtlich halluziniertes Verhalten entwickelt.',
          ],
        },
        hallucinations: {
          id: 'hallucination-types',
          title: 'Welche Halluzinationstypen muss Ihre Pipeline erkennen?',
          content: [
            '**Code-Halluzinationen sind nicht nur Syntaxfehler; sie umfassen logische, strukturelle und abhängigkeitsbezogene Fälschungen, die oberflächliche Prüfungen oft bestehen.** Effektive Gates zu entwerfen erfordert das Verständnis jeder Kategorie. Techniken zur Reduzierung auf Prompt-Ebene finden Sie unter [KI-Halluzinationen: So stoppen Sie sie](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de).',
            'Häufige Kategorien, auf die Sie Ihre Gates ausrichten sollten:',
          ],
          items: [
            '**Logik-Halluzinationen:** falsche Algorithmen, fehlende Randfall-Behandlung, „Happy-Path-only"-Code, der bei echten Daten versagt.',
            '**Zuordnungs-/Typfehler:** falsche Annahmen über Typen oder Zuordnungen zwischen Domänenobjekten, die zu subtiler Datenbeschädigung führen.',
            '**Namensverwirrung:** Variablen- oder Funktionsnamen vertauscht oder falsch verwendet auf eine Art, die noch kompiliert, aber Domänenregeln verletzt.',
            '**Ressourcen-Halluzinationen:** unbegrenzte Speicher- oder CPU-Nutzung (zum Beispiel ganze Tabellen in den Speicher laden), die Performance-Constraints ignoriert.',
            '**API-/Bibliotheks-Halluzinationen:** Aufrufe von Methoden, Endpunkten oder Konfigurationsoptionen, die in Ihren Versionen der Bibliotheken oder Services nicht vorhanden sind.',
            '**Sicherheits-Halluzinationen:** Code, der strukturiert und „sicher" aussieht, aber wichtige Prüfungen wie Autorisierung, Bereinigung oder Rate-Limiting stillschweigend weglässt.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Eine Code-Halluzination ist jede KI-generierte Ausgabe – ein Paketname, eine API-Methode, ein Konfigurationsflag oder ein Algorithmus –, die nichts entspricht, was in Ihrer Umgebung tatsächlich existiert oder funktioniert.' },
            { type: 'in-plain-terms', text: 'Stellen Sie es sich vor wie eine KI, die Ihnen selbstsicher den Weg zu einer Straße beschreibt, die nicht existiert. Die Beschreibung klingt plausibel, führt aber nirgendwohin – oder zu etwas Gefährlichem.' },
          ],
          callouts: [
            { type: 'key-point', label: 'Strukturell vs. syntaktisch', text: 'Ein halluzinierter API-Aufruf kompiliert sauber und besteht die statische Analyse. Nur die Laufzeitausführung oder SDK-bewusstes Linten fängt ihn ab. Deshalb sind zusätzliche Ebenen über Lint und Unit-Tests hinaus notwendig.' },
          ],
        },
        hallucinationsConclusion: {
          content: [
            'Ein robustes Build-System sollte davon ausgehen, dass diese Fehler überall auftreten, wo KI Code schreiben oder refaktorieren darf.',
          ],
        },
        architecture: {
          id: 'architecture',
          title: 'Wie sieht eine KI-bewusste CI/CD-Gate-Architektur aus?',
          content: [
            '**KI-bewusste Build-Quality-Checks sollten ein mehrstufiges Gate bilden: Pre-Commit-Filter, PR-Richtlinienprüfungen, tiefere Analyse im CI und Post-Deployment-Monitoring.** Keine einzelne Stufe fängt alle Fehlerarten ab.',
            'Eine praktische Architektur:',
          ],
          items: [
            '**Pre-Commit / lokale Hooks** — Grundlegendes Formatting und Linting erzwingen. Optional: direktes Committen großer KI-generierter Diffs ohne kurze menschliche Zusammenfassung der Änderungen verbieten.',
            '**Pull-Request-Qualitätsgate** — KI-spezifische Prüfungen auf gewöhnliche aufsetzen: Unit-Tests, Coverage-Schwellenwerte, Style, konventionelle statische Analyse, plus KI-bewusste Checks (unbekannte oder nicht existierende Pakete erkennen, referenzierte APIs überprüfen, neue Endpunkte ohne Tests markieren).',
            '**Tiefere CI-Analyse** — Erweiterte Testsuiten und Property-based Tests für KI-berührten Code ausführen. [Sicherheits-Scanner (SAST/DAST)](/prompt-engineering/ai-code-review?lang=de) mit Fokus auf neu geänderte Codepfade einsetzen. Komplexität und potenzielle Performance-Hotspots analysieren.',
            '**Muster- und Drift-Erkennung** — Neuen Code mit etablierten Projektmustern vergleichen: Architektur, Fehlerbehandlung, Logging. Code markieren, der stark von den üblichen Idiomen abweicht.',
            '**Sicherheits- und Abhängigkeitsgates** — „Keine neuen kritischen Schwachstellen" aus Ihren Sicherheits-Tools auf geänderten Zeilen verlangen. Builds blockieren, wenn neue Abhängigkeiten nicht genehmigt, nicht gepinnt oder aus verdächtigen Quellen stammen.',
            '**Laufzeit-Monitoring und Feedback** — Fehlerraten, Latenz und Ressourcennutzung für Endpunkte verfolgen, die durch KI-gestützte Änderungen kürzlich modifiziert wurden. Vorfälle in Prompts und Qualitätsregeln zurückführen, um Gates über die Zeit zu härten.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Mit Abhängigkeitsvalidierung beginnen', text: 'Implementieren Sie zuerst Abhängigkeitsexistenzprüfungen – höchster ROI, am einfachsten hinzuzufügen und null False Positives. Jedes nachfolgende Gate sollte messbar und anpassbar sein, bevor das nächste eingeführt wird.' },
          ],
        },
        architectureConclusion: {
          content: [
            'Dieser geschichtete Ansatz behandelt KI-generierten Code als erstklassige Risikokategorie und nicht nur als „mehr Code".',
          ],
        },
        concreteChecks: {
          id: 'concrete-checks',
          title: 'Welche konkreten Prüfungen sollten Sie für KI-generierten Code hinzufügen?',
          content: [
            '**Um Qualitätsgates KI-bewusst zu machen, fügen Sie explizite Prüfungen für Halluzinationen, Abhängigkeitsfälschungen und unsichere Standardwerte zu Ihren bestehenden Test- und Coverage-Regeln hinzu.** Diese lassen sich in jedem CI/CD-System als Policy-as-Code integrieren.',
            'Beispiele für durchsetzbare Richtlinien:',
          ],
          items: [
            '**Tests und Coverage** — Mindest-Coverage für neue oder geänderte Zeilen (zum Beispiel ≥80 %). Pflichthafte Tests für alle neuen öffentlichen Endpunkte, Background-Jobs oder exportierten Funktionen.',
            '**Sicherheitsgates** — Keine neuen kritischen Findings von SAST oder Abhängigkeits-Scannern auf geändertem Code. Manuelle Reviews für KI-generierten Code verlangen, der Authentifizierung, Zahlungen, Admin-Funktionen oder personenbezogene Daten berührt. Empfehlung: [KI-Code-Review: Tools und Verfahren](/prompt-engineering/ai-code-review?lang=de).',
            '**Abhängigkeitssanitätsprüfungen** — Neue Pakete müssen in der Ziel-Registry existieren und Mindest-Reifesignale erfüllen (Downloads, Stars, letztes Veröffentlichungsdatum), sofern nicht explizit auf der Whitelist. Bekannte Typosquats brechen den Build sofort ab.',
            '**API-Realitätschecks** — Statische Analyse, die sicherstellt, dass alle aufgerufenen Methoden und Endpunkte in Ihrer Codebasis oder dokumentierten SDK vorhanden sind. Optional: Verwendung auf eine Whitelist genehmigter APIs in sensiblen Bereichen beschränken.',
            '**Muster- und Performance-Prüfungen** — Standard-Fehlerbehandlungs- und Logging-Wrapper erzwingen. Neu hinzugefügte Funktionen mit ungewöhnlich hoher Komplexität oder offensichtlichen O(n²)/O(n³)-Mustern auf großen Datenpfaden markieren.',
          ],
          callouts: [
            { type: 'best-practice', label: 'Coverage-Schwellenwert', text: 'Wenden Sie einen strengeren Coverage-Schwellenwert auf KI-generierte Zeilen an als auf Legacy-Code. Legacy-Code mit 60 % Coverage kann akzeptabel sein; neu KI-generierter Code sollte vor dem Merge ≥80 % erreichen.' },
          ],
        },
        concreteChecksConclusion: {
          content: [
            'Viele davon können als „Policy as Code" in Ihrem CI-System, benutzerdefinierten Lintern oder spezialisierten Plugins implementiert werden.',
          ],
        },
        hallucinationHandling: {
          id: 'hallucination-handling',
          title: 'Wie behandeln Sie Halluzinationen explizit in der Pipeline?',
          content: [
            '**Halluzinationen sind eine strukturelle Fehlerklasse und keine temporären Bugs; Ihr Build-System sollte davon ausgehen, dass sie vorkommen, und sich auf Erkennung und Eindämmung konzentrieren.** Diese Denkweise bestimmt, welche Tools und Tests Sie priorisieren.',
            'Praktische Strategien:',
          ],
          items: [
            '**Ausführungsbasierte Verifikation** — Verlassen Sie sich nicht allein auf die Kompilierung. Führen Sie gezielte Tests durch, die KI-generierten Code mit Randfällen, ungültigen Eingaben und zufälligen Daten belasten. Property-based Tests sind besonders effektiv beim Aufdecken von Logik- und Zuordnungsfehlern.',
            '**Verankerung mit echtem Kontext** — Wenn Sie KI zur Ausarbeitung von Änderungen einsetzen, liefern Sie echte Schemas, API-Spezifikationen und Konfigurationsdateien als Kontext. Dies reduziert die Chance erfundener Funktionen und Parameter und erleichtert die Erkennung, wenn generierter Code von der Realität abweicht.',
            '**Hybrid aus statischer und KI-Analyse** — Kombinieren Sie konventionelle statische Analyse mit KI-basiertem Review. Statische Tools sind gut bei Datenfluss- und Taint-Analyse; KI-Reviewer sind gut beim Lesen von Absichten und Erkennen von Anforderungsabweichungen auf höherer Ebene.',
            '**Multi-Modell-Kreuzprüfung** — Lassen Sie bei wichtigen Änderungen ein Modell den Code generieren und ein anderes ihn überprüfen. Stellen, an denen Reviewer nicht übereinstimmen oder geringe Konfidenz zeigen, können für menschliche Aufmerksamkeit markiert werden.',
            '**Halluzinations-Blacklists und Regeln** — Wenn Sie wiederkehrende halluzinierte Muster entdecken – gefälschte Paketnamen, erfundene Flags, erfundene Endpunkte – codieren Sie diese als explizite Regeln. Zukünftige Vorkommen verursachen dann automatisch einen Build-Fehler oder eine starke Warnung.',
          ],
          callouts: [
            { type: 'warning', label: 'Kompilierung ≠ Korrektheit', text: 'Eine KI-generierte Funktion kann sauber kompilieren, alle bestehenden Tests bestehen und trotzdem eine Anforderung still falsch implementieren. Testen Sie neue Codepfade immer mit mindestens einem Test, der scheitern würde, wenn die Logik umgekehrt oder subtil falsch wäre.' },
          ],
        },
        hallucinationHandlingConclusion: {
          content: [
            'Indem Sie Halluzinationen als erwartete Fehlerklasse behandeln, können Sie Tests und Gates entwickeln, die sie zuverlässig abfangen.',
          ],
        },
        developerFriendly: {
          id: 'developer-friendly',
          title: 'Wie gestalten Sie KI-Qualitätsprüfungen entwicklerfreundlich?',
          content: [
            '**Qualitätsgates funktionieren nur, wenn Entwickler ihnen vertrauen; KI-bewusste Prüfungen sollten transparent sein, Fehler klar erklären und laute False Positives vermeiden.** Hohe False-Positive-Raten veranlassen Teams, Gates vollständig zu deaktivieren oder zu umgehen.',
            'Leitlinien:',
          ],
          items: [
            '**Das „Warum" für jeden Fehler erklären** — Fehlermeldungen sollten genau zeigen, welche Zeile oder welches Paket gegen welche Regel verstoßen hat, und idealerweise auf Dokumentation verlinken, wie man es behebt oder übergeht.',
            '**Harte Blockierungen von Warnungen unterscheiden** — Für neue Regeln im „Warnungs"-Modus beginnen, um Daten zu sammeln und Frustration zu reduzieren; erst auf „blockierend" hochstufen, wenn das Signal-Rausch-Verhältnis akzeptabel ist.',
            '**Dokumentierte Ausnahmen ermöglichen** — Einige KI-generierte Änderungen werden bewusst riskant oder ungewöhnlich sein. Einen dokumentierten Ausnahme-Mechanismus bereitstellen (zum Beispiel ein beschrifteter Kommentar plus Ticket-Link), damit Teams bei Bedarf fortfahren können, während ein Audit-Trail erhalten bleibt.',
            '**False Positives messen und iterieren** — Verfolgen, wie oft ein Gate gültige Änderungen blockiert oder unnötige Arbeit erzwingt. Schwellenwerte anpassen, Regeln verfeinern oder den Geltungsbereich einengen, wo dies nötig ist.',
            '**KI-spezifische Dashboards bereitstellen** — Zeigen, wie viele Probleme im Zusammenhang mit KI-generiertem Code abgefangen wurden, wie viele Schwachstellen vermieden wurden und wie oft halluzinierte Abhängigkeiten blockiert wurden. Dies schafft Vertrauen, dass die zusätzlichen Gates die Reibung wert sind.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Warning-First-Rollout', text: 'Führen Sie ein neues Gate immer mindestens einen Sprint lang im Warnungsmodus ein, bevor Sie es blockierend machen. So können Sie Signal-Rausch-Verhältnis messen und Entwicklervertrauen aufbauen, bevor es Builds abbricht.' },
          ],
        },
        developerFriendlyConclusion: {
          content: [
            'Eine gute KI-bewusste Pipeline fühlt sich wie ein Sicherheitsnetz an, nicht wie ein willkürlicher Hindernisparcours.',
          ],
        },
        example: {
          id: 'example',
          title: 'Beispiel: Erweiterung eines klassischen Gates für KI-generierten Code',
          content: [
            '**Sie können ein bestehendes „Tests + Coverage + Lint"-Gate zu einem KI-bewussten Gate weiterentwickeln, indem Sie gezielte Prüfungen aufsetzen.** Kein vollständiger Pipeline-Neuaufbau erforderlich.',
            'Basis-Gate:',
          ],
          items: [
            'Unit-Tests ausführen.',
            'Mindest-Gesamt-Coverage erzwingen.',
            'Linter und Formatter ausführen.',
          ],
        },
        exampleExtension: {
          content: ['KI-bewusste Erweiterung:'],
          items: [
            '**Coverage für neuen/geänderten Code:** für neue Zeilen einen höheren Coverage-Schwellenwert als für Legacy-Code verlangen.',
            '**Abhängigkeitsprüfung:** Scheitern, wenn ein neues Paket unbekannt, nicht genehmigt oder offensichtlich verdächtig ist.',
            '**API-Realitätscheck:** nach Aufrufen von Funktionen oder Endpunkten scannen, die in Ihrer Codebasis oder den offiziellen SDK-Versionen nicht existieren.',
            '**Sicherheits-Scan:** null kritische Findings auf geänderten Dateien verlangen.',
            '**Manuelles-Review-Label:** wenn KI in einer Datei mehr als N Zeilen beigetragen hat, explizite menschliche Genehmigung eines Senior-Entwicklers vor dem Merge verlangen.',
          ],
        },
        exampleConclusion: {
          content: [
            'Dieser Ansatz vermeidet einen vollständigen Umbau Ihres Prozesses und zielt direkt auf KI-spezifische Risiken ab.',
          ],
        },
        howToStart: {
          id: 'how-to-start',
          title: 'Schritt für Schritt: Wie richten Sie KI-bewusste Qualitätsprüfungen ein?',
          numberedItems: [
            '**Abhängigkeitsvalidierungsschritt hinzufügen: prüfen, ob alle importierten Pakete tatsächlich in Ihrem Paketmanager existieren.** Verifizieren Sie vor dem Ausführen von Tests, dass jedes Paket in `import`- oder `require`-Anweisungen in npm, pip, PyPI oder Ihrer internen Registry vorhanden ist. KI-Halluzinationen erfinden oft plausibel klingende Paketnamen.',
            '**Auf häufige Halluzinationsmuster scannen: nicht existierende APIs, Funktionen mit falschen Signaturen und erfundene Konfigurationsflags.** Einen Linter oder ein benutzerdefiniertes Skript ausführen, das prüft, ob jeder API-Aufruf mit der tatsächlichen SDK- oder Service-Dokumentation übereinstimmt. Aufrufe zu nicht existierenden Methoden markieren.',
            '**Sicherheitsfokussiertes Gate hinzufügen: SAST plus explizite Prüfungen für häufige KI-generierte Schwachstellen.** Tools wie Bandit (Python), ESLint-Security (JavaScript) oder Snyk einsetzen. Außerdem scannen auf: SQL-Injection-Muster, zu offene CORS-Regeln, hartcodierte Zugangsdaten, unsichere Deserialisierung.',
            '**Multi-Modell-Code-Validierung für kritische Pfade (Auth, Zahlungen, Infrastruktur) einsetzen.** Vor dem Merge den Code durch mehrere KI-Modelle laufen lassen und fragen: „Entspricht dieser Code der beabsichtigten Logik? Gibt es Sicherheitsrisiken?" Abweichungen markieren.',
            '**Menschliches Code-Review mit Fokus auf Logik vs. Syntax vorschreiben.** Automatisierte Gates fangen offensichtliche Halluzinationen ab. Code-Reviewer sollten prüfen: Tut dieser Code das, was beabsichtigt war? Sind Randfälle berücksichtigt? Ist der Ansatz für den Anwendungsfall geeignet?',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Häufige Fehler vermeiden',
          mistakes: [
            {
              mistake: 'KI-generierten Code in Bezug auf Qualitätsrisiken als gleichwertig mit menschlich geschriebenem Code behandeln',
              problem: 'Standard-Lint- und Unit-Test-Schwellenwerte sind für manuell geschriebenen und geprüften Code kalibriert. KI-generierter Code kann alle herkömmlichen Gates bestehen, während er halluzinierte APIs, gefälschte Pakete und still falschen Code enthält.',
              fix: 'Eine separate Risikostufe für KI-generierten oder KI-modifizierten Code anwenden. Strengere Coverage-Schwellenwerte (≥80 % für neue Zeilen), Sicherheits-Scans auf allen KI-berührten Dateien und Abhängigkeitsexistenzprüfungen vorschreiben.',
            },
            {
              mistake: 'Die Kompilierung als Korrektheitsbeweis akzeptieren',
              problem: 'KI-generierter Code kompiliert sauber, auch wenn er Methoden aufruft, die nicht existieren, Pakete importiert, die nicht registriert sind, oder Logik implementiert, die Anforderungen verletzt.',
              fix: 'Laufzeitvalidierung hinzufügen: Property-based Tests, Randfall-Tests und Integrationstests, die scheitern würden, wenn die Logik subtil falsch wäre. SDK-bewusstes Linten, das Methodensignaturen verifiziert, ist effektiver als Type-Checking allein.',
            },
            {
              mistake: 'Nicht prüfen, ob vorgeschlagene Pakete tatsächlich in der Registry existieren',
              problem: 'Sprachmodelle erfinden häufig plausible Paketnamen, wenn sie den korrekten nicht kennen. Entwickler, die npm install oder pip install auf einem halluzinierten Paketnamen ausführen, können ein schädliches Paket installieren, das ein Angreifer später registriert hat (Slopsquatting).',
              fix: 'Einen Abhängigkeitsvalidierungsschritt ausführen, der die npm/PyPI/Maven-Registry-API für jeden neuen Paket-Import aufruft. Den Build scheitern lassen, wenn das Paket nicht auflösbar ist oder keine Veröffentlichungshistorie hat.',
            },
            {
              mistake: 'Neue Gates ohne Daten im blockierenden Modus starten',
              problem: 'Ein neues Gate, das als harter Blocker eingeführt wird, wird auf False Positives stoßen, Reibung erzeugen und das Entwicklervertrauen untergraben. Teams werden Umgehungen suchen oder beantragen, das Gate zu entfernen.',
              fix: 'Jedes neue Gate mindestens einen Sprint im Warnungsmodus ausführen. Signal-Rausch-Verhältnis messen, False Positives beheben und erst auf blockierend hochstufen, wenn das Gate nachweislich zuverlässig ist.',
            },
            {
              mistake: 'KI-spezifische Dashboards und Metriken weglassen',
              problem: 'Ohne Sichtbarkeit darüber, wie viele halluzinationsbezogene Probleme abgefangen wurden, können Teams den Overhead von KI-bewussten Gates nicht rechtfertigen oder sie effektiv anpassen.',
              fix: 'Ihr CI instrumentieren, um Probleme nach Kategorie zu kennzeichnen (Abhängigkeits-Halluzination, API-Halluzination, Sicherheitsfinding, Logik-Markierung). Eine wöchentliche Zusammenfassung der abgefangenen Probleme pro Kategorie bereitstellen.',
            },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Regionale Überlegungen für KI-Code-Qualität',
          content: [
            '**Regulatorische Anforderungen bestimmen, welche KI-bewussten Qualitätsprüfungen je nach Deployment-Region verpflichtend oder empfohlen sind.** Die folgenden Unterscheidungen gelten ab 2026.',
          ],
          items: [
            '**EU (DSGVO / NIS2):** DSGVO Artikel 25 (Datenschutz durch Technikgestaltung) verlangt, dass Code, der personenbezogene Daten verarbeitet, vor dem Deployment überprüft und validiert wird. Die NIS2-Richtlinie schreibt für Betreiber kritischer Infrastrukturen Lieferkettensicherheitskontrollen vor, die die Abhängigkeitsvalidierung abdecken. NIS2-Enforcement begann im Oktober 2024.',
            '**Deutschland / DACH (BSI-Grundschutz):** Das BSI empfiehlt über die BSI-Grundschutz-Kataloge die Dokumentation von KI-spezifischen Risikominderungsmaßnahmen als Teil des Änderungsmanagements. Für den Mittelstand bietet das IT-Grundschutz-Kompendium praxisgerechte Leitlinien, die auch ohne spezialisierte DevSecOps-Teams umsetzbar sind.',
            '**Vereinigte Staaten (SOC 2 / FedRAMP):** SOC 2 Type II-Audits verlangen dokumentierte Change-Management-Prozesse. KI-generierter Code, der ohne nachverfolgbares menschliches Review gemergt wird, kann Audit-Findings erzeugen. FedRAMP-autorisierte Systeme müssen SAST-Scans bestehen und alle Drittanbieter-Abhängigkeiten dokumentieren.',
            '**Japan (METI KI-Governance-Richtlinien 2024):** METI-Richtlinien empfehlen risikobasierte KI-Governance einschließlich Qualitätssicherungsprozessen für KI-generierten Code. Enterprise-Deployments sollten Halluzinationserkennung als Teil der KI-Governance-Dokumentation erfassen.',
            '**China (Cybersicherheitsgesetz / Datensicherheitsgesetz 2021):** Entwicklungs-Pipelines für Systeme, die Daten chinesischer Nutzer verarbeiten, müssen Sicherheitsüberprüfungspflichten einhalten. KI-generierter Code, der personenbezogene Informationen berührt, unterliegt einer Überprüfung nach PIPL.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Häufig gestellte Fragen',
          faqs: [
            { q: 'Was ist ein KI-bewusster Build-Quality-Check?', a: 'Ein KI-bewusster Build-Quality-Check ist ein CI/CD-Gate, das speziell für Fehlerarten konzipiert wurde, die bei KI-generiertem Code auftreten: halluzinierte APIs, erfundene Paketnamen und Logikfehler, die zwar kompilieren, aber Anforderungen verletzen. Im Gegensatz zu herkömmlichen Lint- und Coverage-Gates überprüfen diese Checks, ob referenzierte Pakete tatsächlich existieren und ob aufgerufene APIs mit Ihrer tatsächlichen SDK- oder Service-Definition übereinstimmen.' },
            { q: 'Wie unterscheidet sich KI-generierter Code in Bezug auf Qualitätsrisiken von menschlich geschriebenem Code?', a: 'KI-generierter Code weist strukturelle Fehlermuster auf, die bei menschlich geschriebenem Code kaum vorkommen: erfundene Paketnamen, die in keiner Registry existieren, Methodenaufrufe, die in Ihrer SDK-Version fehlen, und Code, der oberflächliche Tests besteht, aber Anforderungen lautlos falsch implementiert. Herkömmliche Gates erkennen Syntaxfehler und Coverage-Lücken, wurden aber nicht für zuversichtliche Halluzinationen entwickelt.' },
            { q: 'Wie erkenne ich halluzinierte Paketnamen in meiner CI/CD-Pipeline?', a: 'Fügen Sie einen Abhängigkeitsvalidierungsschritt hinzu, der prüft, ob jedes importierte Paket tatsächlich in Ihrer Ziel-Registry (npm, PyPI, Maven usw.) vorhanden ist – bevor Tests ausgeführt werden. Implementieren Sie ihn als Pre-Commit-Hook oder als CI-Job, der die Registry-API aufruft. Pakete, die nicht aufgelöst werden können oder keine Veröffentlichungshistorie haben, sollten den Build sofort zum Scheitern bringen.' },
            { q: 'Welche Sicherheitsprüfungen sollte ich für KI-generierten Code hinzufügen?', a: 'Führen Sie SAST-Tools wie Bandit (Python), ESLint-Security (JavaScript) oder Snyk für jede geänderte Datei aus. Verlangen Sie null neue kritische Findings auf KI-modifizierten Codepfaden. Schreiben Sie manuelle Sicherheitsreviews für KI-generierten Code vor, der Authentifizierung, Zahlungen, Admin-Funktionen oder personenbezogene Daten berührt.' },
            { q: 'Ist eine halluzinierte API dasselbe wie ein Laufzeitfehler?', a: 'Eine halluzinierte API ist subtiler als ein einfacher Laufzeitfehler. Sie bezeichnet eine Methode, einen Parameter oder eine Konfigurationsoption, die ein Modell erfunden hat und die im tatsächlichen SDK oder Service nicht existiert – Code, der korrekt erscheint und die Kompilierung besteht, aber zur Laufzeit eine Exception wirft oder das Verhalten still beeinträchtigt. Laufzeitfehler sind Symptome; Halluzinationserkennung trifft die Ursache früher in der Pipeline.' },
            { q: 'Kann ich KI-Tools nutzen, um KI-generierten Code zu überprüfen?', a: 'Ja. Multi-Modell-Kreuzprüfung ist ein effektives Muster: Ein Modell generiert Code, ein anderes überprüft ihn. Stellen, an denen das prüfende Modell Unsicherheit zeigt oder dem generierenden widerspricht, können für menschliche Aufmerksamkeit markiert werden. Dies funktioniert am besten auf risikokritischen Pfaden wie Authentifizierung, Zahlungsverarbeitung oder Infrastrukturkonfiguration.' },
            { q: 'Wie führe ich KI-bewusste Qualitätsprüfungen ein, ohne mein Team zu verlangsamen?', a: 'Starten Sie alle neuen Regeln im Warnungsmodus, um Daten zu sammeln, bevor Merges blockiert werden. Erklären Sie Fehlergründe klar in Fehlermeldungen mit Links zur Dokumentation. Erlauben Sie dokumentierte Ausnahmen, damit Teams bei ungewöhnlichen, aber gültigen Fällen fortfahren können, während ein Audit-Trail erhalten bleibt. Verfolgen Sie False-Positive-Raten pro Gate und passen Sie Schwellenwerte an, wo die Reibung den Nutzen übersteigt.' },
            { q: 'Was ist Slopsquatting und warum ist es gefährlich für KI-gestützte Entwicklung?', a: 'Slopsquatting tritt auf, wenn ein KI-Modell einen plausibel klingenden Paketnamen erfindet, der in keiner Registry existiert. Wenn ein Angreifer diesen Namen später mit schädlichem Code registriert, führt jeder Entwickler, der ihn via npm install oder pip install installiert, den Payload des Angreifers aus. Das Risiko ist bei KI-gestützter Entwicklung besonders hoch, da Entwickler vorgeschlagene Pakete oft nicht einzeln gegen offizielle Registries prüfen.' },
            { q: 'Welche DSGVO-Anforderungen gelten für die Verwendung von KI-Code-Generierung?', a: 'DSGVO Artikel 25 (Datenschutz durch Technikgestaltung) schreibt vor, dass Code, der personenbezogene Daten verarbeitet, vor der Produktivsetzung überprüft und validiert wird. Für Betreiber kritischer Infrastrukturen kommt über die NIS2-Richtlinie die Pflicht zur Lieferkettensicherheit hinzu, die die Abhängigkeitsvalidierung abdeckt. Das BSI empfiehlt über die BSI-Grundschutz-Kataloge die Dokumentation von KI-spezifischen Risikominderungsmaßnahmen. NIS2-Enforcement begann im Oktober 2024.' },
            { q: 'Ist der Einsatz von KI-Code-Generierung im deutschen Mittelstand sinnvoll – und was sind die besonderen Risiken?', a: 'Ja, KI-Coding-Assistenten bieten auch mittelständischen Entwicklungsteams erhebliche Effizienzgewinne. Die besondere Herausforderung im Mittelstand: Oft fehlen spezialisierte DevSecOps-Teams, die Halluzinationen und Sicherheitslücken systematisch abfangen. Empfehlenswert ist ein schrittweiser Rollout – beginnend mit Abhängigkeitsvalidierung und SAST-Integration –, bevor weitere KI-spezifische Gates eingeführt werden. Das BSI-Grundschutz-Kompendium bietet praxisgerechte Leitlinien, die auch ohne große Sicherheitsabteilung umsetzbar sind.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Weiterführende Literatur',
          items: [
            '[Besseren Code mit KI schreiben](/prompt-engineering/write-better-code-with-ai?lang=de) — wie man Prompts für die Code-Generierung strukturiert, die überprüfbaren Output produzieren',
            '[KI-Code-Review: Tools und Verfahren](/prompt-engineering/ai-code-review?lang=de) — KI für Code-Qualität und Sicherheitsüberprüfung einsetzen',
            '[Was ist Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering?lang=de) — grundlegende Prinzipien für zuverlässige KI-Ausgaben',
            '[Prompt Injection und Sicherheit](/prompt-engineering/prompt-injection-and-security?lang=de) — Angriffsmuster, die KI-gestützte Entwicklungs-Pipelines betreffen',
            '[KI-Halluzinationen: So stoppen Sie sie](/prompt-engineering/ai-hallucinations-how-to-stop?lang=de) — Techniken zur Reduzierung von Halluzinationen in KI-generierten Ausgaben',
            '[Wie man Prompt-Qualität bewertet](/prompt-engineering/how-to-evaluate-prompt-quality?lang=de) — Bewertungsrahmen für Code-Generierungsqualität',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Quellen',
          items: [
            '[OWASP Top 10 für LLM-Anwendungen](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — OWASP, 2025. Sicherheitsrisiken für LLM-generierten Code und KI-gestützte Entwicklung.',
            '[GitHub CodeQL-Dokumentation](https://codeql.github.com/docs/) — GitHub. Static-Analysis-Engine für Sicherheits-Scanning von KI-modifizierten Codepfaden.',
            '[Snyk State of Open Source Security Report](https://snyk.io/reports/state-of-open-source-security/) — Snyk, 2024–2025. Jahresbericht über Abhängigkeitsschwachstellen und Supply-Chain-Risiken.',
            '[NIST AI Risk Management Framework (AI RMF 1.0)](https://airc.nist.gov/Home) — NIST, 2023. Rahmenwerk für das Management von Risiken aus KI-Systemen einschließlich Code-Qualität und Governance.',
          ],
        },
      },
    },
    fr: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'Fundamentals',
      title: 'Qualité CI/CD pour code généré par IA : détecter hallucinations et dépendances fabriquées',
      seoTitle: 'Hallucinations dans le code IA : vérifications CI/CD (2026)',
      metaDescription: 'Le code IA hallucine des API, invente de faux packages et viole les exigences en silence. Les gates classiques ne le détectent pas. Voici comment corriger cela.',
      ogTitle: '3 façons dont le code IA casse votre CI/CD — et comment y remédier',
      ogDescription: 'L\'IA invente des noms de packages, falsifie des API et viole des exigences sans erreur. Ces 5 gates détectent les hallucinations avant le merge.',
      twitterTitle: 'Votre CI/CD ne détecte pas les hallucinations IA. Voici quoi ajouter',
      twitterDescription: 'L\'IA produit du code qui compile, passe le lint et échoue en production. Validation des dépendances, vérifications API et gates SAST sont la solution.',
      intro: '**Le code généré par IA échoue aux gates qualité classiques : études et rapports sectoriels montrent que les programmes IA contiennent des vulnérabilités exploitables à des taux significativement supérieurs au code relu par des humains, et une fraction mesurable des packages ou API suggérés n\'existent pas.** Pour maintenir ces hallucinations hors de la production, les checks qualité doivent évoluer en pipelines adaptés à l\'IA, capables de détecter API irréelles, dépendances fictives et logique erronée avant le merge.',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10 min de lecture',
      educationalLevel: 'Intermediate',
      audience: 'Responsables d\'équipes de développement et ingénieurs DevOps intégrant des assistants de codage IA dans leurs pipelines CI/CD de production',
      primaryTerm: 'vérifications qualité CI/CD pour l\'IA',
      aboutTopics: ['Sécurité CI/CD', 'Hallucinations du code IA', 'Validation des dépendances'],
      toc: [
        { label: 'Points clés', anchor: '#key-takeaways' },
        { label: 'Qu\'est-ce qui change quand l\'IA écrit votre code ?', anchor: '#what-changes' },
        { label: 'Quels types d\'hallucinations votre pipeline doit-il détecter ?', anchor: '#hallucination-types' },
        { label: 'À quoi ressemble une architecture CI/CD adaptée à l\'IA ?', anchor: '#architecture' },
        { label: 'Quelles vérifications concrètes ajouter pour le code IA ?', anchor: '#concrete-checks' },
        { label: 'Comment gérer les hallucinations dans le pipeline ?', anchor: '#hallucination-handling' },
        { label: 'Comment rendre les checks qualité conviviaux pour les développeurs ?', anchor: '#developer-friendly' },
        { label: 'Exemple : étendre une gate classique pour le code IA', anchor: '#example' },
        { label: 'Étape par étape : mettre en place des vérifications adaptées à l\'IA', anchor: '#how-to-start' },
        { label: 'Erreurs courantes à éviter', anchor: '#common-mistakes' },
        { label: 'Considérations régionales', anchor: '#regional-context' },
        { label: 'FAQ', anchor: '#faq' },
        { label: 'Lectures complémentaires', anchor: '#related-reading' },
        { label: 'Sources', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Qualité CI/CD pour code généré par IA : détecter hallucinations et dépendances fabriquées',
        description: 'Concevoir des gates qualité CI/CD pour le code généré par IA. Inclut la détection des hallucinations, la validation des dépendances, les gates sécurité et les bonnes pratiques.',
        url: 'https://www.promptquorum.com/prompt-engineering/build-quality-checks?lang=fr',
        inLanguage: 'fr',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks?lang=fr', width: 1200, height: 630 },
        keywords: ['gates qualité', 'CI/CD', 'hallucinations IA', 'revue de code', 'analyse statique', 'validation des dépendances', 'checks de build'],
        proficiencyLevel: 'Intermediate',
        audience: { '@type': 'Audience', audienceType: 'Responsables d\'équipes de développement et ingénieurs DevOps intégrant des assistants IA' },
        about: [
          { '@type': 'Thing', name: 'Qualité du code IA' },
          { '@type': 'Thing', name: 'Pipelines CI/CD' },
          { '@type': 'Thing', name: 'Détection des hallucinations' },
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
        inLanguage: 'fr',
        mainEntity: [
          { '@type': 'Question', name: 'Qu\'est-ce qu\'un check qualité CI/CD adapté à l\'IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Un check qualité adapté à l\'IA est une gate CI/CD conçue pour détecter les modes d\'échec spécifiques au code généré par IA : API hallucinées, noms de packages fabriqués et erreurs logiques qui compilent mais violent les exigences. Contrairement aux gates lint et couverture classiques, ces checks vérifient que les packages référencés existent réellement et que les API appelées correspondent à votre SDK ou service réel.' } },
          { '@type': 'Question', name: 'En quoi le code généré par IA diffère-t-il du code humain en termes de risques qualité ?', acceptedAnswer: { '@type': 'Answer', text: 'Le code IA présente des modes d\'échec structurels rares dans le code humain : noms de packages inventés absents de tout registre, appels de méthodes absents de vos versions SDK, et code qui passe les tests superficiels tout en implémentant silencieusement les exigences de façon incorrecte. Les gates classiques détectent les erreurs de syntaxe et les lacunes de couverture, mais n\'ont pas été conçues pour les hallucinations confiantes.' } },
          { '@type': 'Question', name: 'Comment détecter les noms de packages hallucinés dans mon pipeline CI/CD ?', acceptedAnswer: { '@type': 'Answer', text: 'Ajoutez une étape de validation des dépendances qui vérifie si chaque package importé existe dans votre registre cible (npm, PyPI, Maven, etc.) avant d\'exécuter les tests. Implémentez-la comme un hook pre-commit ou un job CI appelant l\'API du registre. Les packages non résolubles ou sans historique de publication doivent faire échouer le build immédiatement.' } },
          { '@type': 'Question', name: 'Quels checks de sécurité ajouter pour le code généré par IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Exécutez des outils SAST comme Bandit (Python), ESLint-Security (JavaScript) ou Snyk sur chaque fichier modifié. Exigez zéro nouveau finding critique sur les chemins de code modifiés par IA. Imposez une revue manuelle pour le code IA touchant l\'authentification, les paiements, les fonctions admin ou les données personnelles.' } },
          { '@type': 'Question', name: 'Une API hallucinée est-elle la même chose qu\'une erreur d\'exécution ?', acceptedAnswer: { '@type': 'Answer', text: 'Une API hallucinée est plus subtile qu\'une simple erreur d\'exécution. Elle désigne une méthode, un paramètre ou une option de configuration inventée par le modèle et absente du SDK ou service réel — du code qui semble correct et passe la compilation mais lève une exception à l\'exécution ou dégrade silencieusement le comportement. Les erreurs d\'exécution sont des symptômes ; la détection des hallucinations en traite la cause plus tôt dans le pipeline.' } },
          { '@type': 'Question', name: 'Puis-je utiliser des outils IA pour réviser du code généré par IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. La validation croisée multi-modèles est un pattern efficace : un modèle génère le code, un autre le révise. Les passages où le réviseur exprime une incertitude ou contredit le générateur peuvent être signalés pour attention humaine. Cette approche fonctionne mieux sur les chemins à risque élevé comme l\'authentification, le traitement des paiements ou la configuration d\'infrastructure.' } },
          { '@type': 'Question', name: 'Comment introduire des vérifications qualité IA sans ralentir mon équipe ?', acceptedAnswer: { '@type': 'Answer', text: 'Démarrez toutes les nouvelles règles en mode avertissement pour collecter des données avant de bloquer les merges. Expliquez clairement les raisons d\'échec dans les messages d\'erreur avec des liens vers la documentation. Autorisez des dérogations documentées et suivez les taux de faux positifs par gate.' } },
          { '@type': 'Question', name: 'Qu\'est-ce que le slopsquatting et pourquoi est-il dangereux pour le développement assisté par IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Le slopsquatting survient quand un modèle IA invente un nom de package plausible qui n\'existe dans aucun registre. Si un attaquant enregistre ensuite ce nom avec du code malveillant, tout développeur qui l\'installe via npm install ou pip install exécute la charge utile de l\'attaquant. Le risque est particulièrement élevé dans le développement assisté par IA, car les développeurs ne vérifient souvent pas chaque package suggéré individuellement.' } },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'Comment mettre en place des vérifications qualité CI/CD adaptées à l\'IA',
        inLanguage: 'fr',
        step: [
          { '@type': 'HowToStep', name: 'Ajouter une étape de validation des dépendances', text: 'Vérifiez que tous les packages importés existent réellement dans votre gestionnaire de packages. Confirmez que chaque instruction import ou require se résout vers un vrai package dans npm, pip, PyPI ou votre registre interne.' },
          { '@type': 'HowToStep', name: 'Scanner les patterns d\'hallucination', text: 'Exécutez un linter ou un script personnalisé qui vérifie chaque appel API par rapport à la documentation réelle du SDK ou du service. Signalez les appels vers des méthodes ou endpoints absents de votre codebase ou de vos versions SDK.' },
          { '@type': 'HowToStep', name: 'Ajouter une gate orientée sécurité', text: 'Exécutez des outils SAST comme Bandit (Python), ESLint-Security (JavaScript) ou Snyk sur les fichiers modifiés. Recherchez les injections SQL, les règles CORS trop permissives, les credentials en dur et la désérialisation non sécurisée.' },
          { '@type': 'HowToStep', name: 'Utiliser la validation multi-modèles pour les chemins critiques', text: 'Pour le code touchant l\'authentification, les paiements ou l\'infrastructure, soumettez-le à plusieurs modèles IA en demandant s\'il correspond à la logique prévue et s\'il présente des risques de sécurité.' },
          { '@type': 'HowToStep', name: 'Exiger une revue humaine axée sur la logique', text: 'Les gates automatisées détectent les hallucinations évidentes. Les relecteurs doivent vérifier : ce code fait-il ce qui était prévu ? Les cas limites sont-ils gérés ? L\'approche est-elle adaptée au cas d\'usage ?' },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: 'Points clés',
          isTldr: true,
          items: [
            'Le code IA introduit de nouvelles classes d\'erreurs — API hallucinées, dépendances fabriquées, logique invalide — que les gates qualité classiques ne détectent pas.',
            'Traitez les hallucinations comme un risque structurel : partez du principe qu\'elles surviendront partout où l\'IA est autorisée à écrire ou refactoriser du code.',
            'Une architecture de gates adaptée à l\'IA superpose des checks pre-commit, des politiques PR, une analyse CI approfondie, des gates sécurité et un feedback en production.',
            'Les checks spécifiques à l\'IA incluent la validation des dépendances, les vérifications de réalité des API, des seuils de couverture plus élevés pour le nouveau code et des gates sécurité renforcées.',
            'Des gates conviviales expliquent clairement les échecs, distinguent avertissements et blocages, autorisent les dérogations documentées et minimisent les faux positifs.',
          ],
        },
        definition: {
          id: 'what-changes',
          title: 'Qu\'est-ce qui change quand l\'IA écrit votre code ?',
          content: [
            '**Quand l\'IA écrit du code, les gates qualité doivent se défendre contre une nouvelle classe de problèmes : API hallucinées, dépendances fabriquées et patterns qui semblent corrects mais échouent à l\'exécution ou sous attaque.** C\'est structurellement différent de ce que lint et tests unitaires ont été conçus à détecter.',
            'Au T2 2026, ces problèmes sont signalés de façon constante dans tous les langages et modèles. Problèmes observés avec le [code généré par IA](/prompt-engineering/write-better-code-with-ai?lang=fr) :',
          ],
          items: [
            '**Vulnérabilités de sécurité :** études et rapports sectoriels montrent systématiquement que les solutions IA contiennent des bugs exploitables à des taux supérieurs au code relu par des humains — notamment en validation des entrées, authentification et cryptographie.',
            '**Packages fabriqués :** les modèles de langage recommandent parfois des bibliothèques ou noms de packages inexistants, ouvrant la voie à des attaques de typosquatting/slopsquatting si des attaquants enregistrent ces noms plus tard.',
            '**API et fonctions hallucinées :** les modèles peuvent inventer des méthodes, paramètres ou flags de configuration absents de vos SDK réels ou services internes.',
            '**Logique violant les exigences :** du code qui compile et passe les tests superficiels mais fait la mauvaise chose par rapport aux exigences originales (par exemple, confondre `montantDû` et `montantPayé`).',
            '**Valeurs par défaut non sécurisées :** utilisation de patterns non sécurisés comme des règles CORS trop permissives, une validation JWT laxiste, des politiques de mots de passe faibles ou des logs de debug exposant des données sensibles.',
          ],
          callouts: [
            { type: 'key-point', label: 'Faits clés', text: 'Seuil de couverture ≥80 % recommandé pour les lignes générées par IA. Architecture en 5 étapes : pre-commit → révision PR → CI → sécurité → monitoring en production. Zéro nouveau finding critique exigé sur les fichiers modifiés.' },
            { type: 'warning', label: 'Risque de slopsquatting', text: 'Quand un modèle IA invente un nom de package, des attaquants peuvent enregistrer ce nom avec du code malveillant. Dès que votre équipe exécute npm install ou pip install dessus, le code s\'exécute dans votre environnement de build. Voir aussi : [Injection de prompts et sécurité](/prompt-engineering/prompt-injection-and-security?lang=fr).' },
          ],
        },
        definitionConclusion: {
          content: ['Les checks classiques (lint, tests unitaires, seuils de couverture) en détectent une partie, mais n\'ont pas été conçus pour les comportements hallucinés avec confiance.'],
        },
        hallucinations: {
          id: 'hallucination-types',
          title: 'Quels types d\'hallucinations votre pipeline doit-il détecter ?',
          content: [
            '**Les hallucinations de code ne sont pas seulement des erreurs de syntaxe ; elles incluent des fabrications logiques, structurelles et au niveau des dépendances qui passent souvent les vérifications superficielles.** Pour concevoir des gates efficaces, il faut comprendre chaque catégorie. Pour les techniques de réduction au niveau du prompt, voir [Hallucinations IA : comment les stopper](/prompt-engineering/ai-hallucinations-how-to-stop?lang=fr).',
            'Catégories courantes à couvrir :',
          ],
          items: [
            '**Hallucinations logiques :** algorithmes incorrects, gestion manquante des cas limites, code « happy-path only » qui échoue sur des données réelles.',
            '**Erreurs de mapping/typage :** hypothèses incorrectes sur les types ou mappings entre objets du domaine, entraînant une corruption silencieuse des données.',
            '**Confusion de nommage :** noms de variables ou fonctions inversés ou mal utilisés d\'une façon qui compile encore mais viole les règles métier.',
            '**Hallucinations de ressources :** consommation mémoire ou CPU non bornée (par exemple, charger des tables entières en mémoire), ignorant les contraintes de performance.',
            '**Hallucinations API/bibliothèque :** appels à des méthodes, endpoints ou options de configuration absents de vos versions de bibliothèques ou services.',
            '**Hallucinations de sécurité :** code qui semble structuré et « sécurisé » mais omet silencieusement des vérifications essentielles comme l\'autorisation, la sanitisation ou le rate limiting.',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'Une hallucination de code est toute sortie générée par IA — un nom de package, une méthode API, un flag de configuration ou un algorithme — qui ne correspond à rien qui existe ou fonctionne réellement dans votre environnement.' },
            { type: 'in-plain-terms', text: 'Imaginez une IA qui vous donne avec assurance des indications vers une rue qui n\'existe pas. Les indications semblent plausibles, mais elles ne mènent nulle part — ou quelque part de dangereux.' },
          ],
          callouts: [
            { type: 'key-point', label: 'Structurel vs syntaxique', text: 'Un appel API halluciné compile proprement et passe l\'analyse statique. Seule l\'exécution en production ou un lint conscient du SDK le détecte. C\'est pourquoi des couches supplémentaires au-delà du lint et des tests unitaires sont nécessaires.' },
          ],
        },
        hallucinationsConclusion: {
          content: ['Un système de build robuste doit supposer que ces erreurs apparaîtront partout où l\'IA est autorisée à écrire ou refactoriser du code.'],
        },
        architecture: {
          id: 'architecture',
          title: 'À quoi ressemble une architecture CI/CD adaptée à l\'IA ?',
          content: [
            '**Les checks qualité adaptés à l\'IA doivent former une gate multi-étapes : filtres pre-commit, politiques au niveau PR, analyse approfondie en CI et monitoring post-déploiement.** Aucune étape seule ne détecte tous les modes d\'échec.',
            'Une architecture pratique :',
          ],
          items: [
            '**Pre-commit / hooks locaux** — Appliquer le formatage et le lint de base. En option : interdire le commit direct de larges diffs générés par IA sans résumé humain des changements.',
            '**Gate qualité au niveau PR** — Ajouter des checks spécifiques à l\'IA par-dessus les checks normaux : tests unitaires, seuils de couverture, style, analyse statique, plus des checks IA (détecter les packages inconnus ou inexistants, vérifier l\'existence des API référencées, signaler les nouveaux endpoints sans tests).',
            '**Analyse CI approfondie** — Exécuter des suites de tests étendues et des tests à base de propriétés pour le code touché par IA. Utiliser des [scanners sécurité (SAST/DAST)](/prompt-engineering/ai-code-review?lang=fr) sur les chemins de code nouvellement modifiés. Analyser la complexité et les hotspots de performance potentiels.',
            '**Détection de patterns et de dérives** — Comparer le nouveau code aux patterns établis du projet : architecture, gestion des erreurs, logging. Signaler le code qui s\'écarte fortement des idiomes habituels.',
            '**Gates sécurité et dépendances** — Exiger « zéro nouvelle vulnérabilité critique » des outils de sécurité sur les lignes modifiées. Bloquer les builds si de nouvelles dépendances sont non approuvées, non épinglées ou de sources suspectes.',
            '**Monitoring en production et feedback** — Suivre les taux d\'erreur, la latence et l\'utilisation des ressources pour les endpoints récemment modifiés par des changements IA. Réintégrer les incidents dans les prompts et règles qualité.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Commencer par la validation des dépendances', text: 'Implémentez d\'abord les checks d\'existence des dépendances — ROI le plus élevé, le plus facile à ajouter et zéro faux positif. Chaque gate suivante doit être mesurable et ajustable avant d\'introduire la prochaine.' },
          ],
        },
        architectureConclusion: {
          content: ['Cette approche en couches traite le code généré par IA comme une catégorie de risque de première classe, pas seulement comme « plus de code ».'],
        },
        concreteChecks: {
          id: 'concrete-checks',
          title: 'Quelles vérifications concrètes ajouter pour le code généré par IA ?',
          content: [
            '**Pour rendre les gates qualité adaptées à l\'IA, ajoutez des checks explicites pour les hallucinations, la fabrication de dépendances et les valeurs par défaut non sécurisées.** Ces checks s\'intègrent dans n\'importe quel système CI/CD comme policy-as-code.',
            'Exemples de politiques applicables :',
          ],
          items: [
            '**Tests et couverture** — Couverture minimale pour les lignes nouvelles ou modifiées (par exemple ≥80 %). Tests obligatoires pour tous les nouveaux endpoints publics, jobs en arrière-plan ou fonctions exportées.',
            '**Gates sécurité** — Zéro nouveau finding critique des outils SAST ou scanners de dépendances sur le code modifié. Exiger une revue manuelle pour le code IA touchant l\'authentification, les paiements, les fonctions admin ou les données personnelles. Guide outillage : [Revue de code IA : outils et méthodes](/prompt-engineering/ai-code-review?lang=fr).',
            '**Checks de sanité des dépendances** — Les nouveaux packages doivent exister dans le registre cible et satisfaire des signaux minimaux de maturité (téléchargements, étoiles, date de dernière publication), sauf exception explicite. Les typosquats connus font échouer le build immédiatement.',
            '**Vérifications de réalité des API** — Analyse statique s\'assurant que toutes les méthodes et endpoints appelés existent dans votre codebase ou SDK documenté. En option : restreindre l\'usage à une liste approuvée d\'API dans les zones sensibles.',
            '**Checks de patterns et de performance** — Appliquer les wrappers standard de gestion d\'erreurs et de logging. Signaler les nouvelles fonctions avec une complexité inhabituellement élevée ou des patterns O(n²)/O(n³) évidents.',
          ],
          callouts: [
            { type: 'best-practice', label: 'Seuil de couverture', text: 'Appliquez un seuil de couverture plus strict aux lignes générées par IA qu\'au code legacy. Du code legacy à 60 % de couverture peut être acceptable ; du code nouvellement généré par IA devrait atteindre ≥80 % avant le merge.' },
          ],
        },
        concreteChecksConclusion: {
          content: ['Beaucoup de ces checks peuvent être implémentés comme « policy as code » dans votre système CI, des linters personnalisés ou des plugins spécialisés.'],
        },
        hallucinationHandling: {
          id: 'hallucination-handling',
          title: 'Comment gérer les hallucinations explicitement dans le pipeline ?',
          content: [
            '**Les hallucinations sont une classe de défauts structurels, pas des bugs temporaires ; votre système de build doit supposer qu\'elles se produisent et se concentrer sur la détection et le confinement.** Cet état d\'esprit détermine quels outils et tests prioriser.',
            'Stratégies pratiques :',
          ],
          items: [
            '**Vérification basée sur l\'exécution** — Ne vous fiez pas à la compilation seule. Exécutez des tests ciblés qui soumettent le code généré par IA à des cas limites, des entrées invalides et des données aléatoires. Les tests à base de propriétés sont particulièrement efficaces pour détecter les erreurs logiques et de mapping.',
            '**Ancrage avec du contexte réel** — Quand vous utilisez l\'IA pour proposer des changements, fournissez des schémas réels, des spécifications API et des fichiers de configuration en contexte. Cela réduit les risques de fonctions et paramètres inventés.',
            '**Analyse hybride statique + IA** — Combinez l\'analyse statique classique avec la revue basée sur l\'IA. Les outils statiques excellent en analyse de flux de données ; les réviseurs IA excellent pour lire l\'intention et repérer les écarts aux exigences.',
            '**Validation croisée multi-modèles** — Pour les changements importants, demandez à un modèle de générer le code et à un autre de le réviser. Les passages où les réviseurs divergent peuvent être signalés pour attention humaine.',
            '**Blacklists et règles d\'hallucination** — Quand vous découvrez des patterns hallucinés récurrents, encodez-les comme règles explicites. Les occurrences futures provoquent automatiquement un échec de build ou un avertissement fort.',
          ],
          callouts: [
            { type: 'warning', label: 'Compilation ≠ Correctness', text: 'Une fonction générée par IA peut compiler proprement, passer tous les tests existants et toujours implémenter silencieusement une exigence de façon incorrecte. Testez toujours les nouveaux chemins de code avec au moins un test qui échouerait si la logique était inversée.' },
          ],
        },
        hallucinationHandlingConclusion: {
          content: ['En traitant les hallucinations comme une classe de défauts attendue, vous pouvez concevoir des tests et des gates qui les détectent de façon fiable.'],
        },
        developerFriendly: {
          id: 'developer-friendly',
          title: 'Comment rendre les checks qualité IA conviviaux pour les développeurs ?',
          content: [
            '**Les gates qualité ne fonctionnent que si les développeurs leur font confiance ; les checks adaptés à l\'IA doivent être transparents, expliquer clairement les échecs et éviter les faux positifs bruyants.** Des taux élevés de faux positifs poussent les équipes à désactiver ou contourner les gates.',
            'Directives :',
          ],
          items: [
            '**Expliquer le « pourquoi » de chaque échec** — Les messages d\'erreur doivent montrer exactement quelle ligne ou quel package a violé quelle règle, et idéalement lier à la documentation sur la façon de le corriger.',
            '**Distinguer blocages forts et avertissements** — Pour les nouvelles règles, démarrer en mode « avertissement » ; promouvoir en « bloquant » seulement quand le ratio signal/bruit est acceptable.',
            '**Autoriser les dérogations documentées** — Fournir un mécanisme de dérogation documenté pour que les équipes puissent avancer quand c\'est approprié tout en laissant une trace d\'audit.',
            '**Mesurer les faux positifs et itérer** — Suivre la fréquence à laquelle une gate bloque des changements valides. Ajuster les seuils, affiner les règles ou réduire le périmètre selon les besoins.',
            '**Exposer des tableaux de bord spécifiques à l\'IA** — Montrer combien de problèmes liés au code IA ont été détectés, combien de vulnérabilités ont été évitées et combien de dépendances hallucinées ont été bloquées.',
          ],
          callouts: [
            { type: 'pro-tip', label: 'Déploiement warning-first', text: 'Introduisez toujours une nouvelle gate en mode avertissement pendant au moins un sprint avant de la rendre bloquante. Cela vous permet de mesurer le ratio signal/bruit et de renforcer la confiance des développeurs.' },
          ],
        },
        developerFriendlyConclusion: {
          content: ['Un bon pipeline adapté à l\'IA ressemble à un filet de sécurité, pas à un parcours d\'obstacles arbitraire.'],
        },
        example: {
          id: 'example',
          title: 'Exemple : étendre une gate classique pour le code généré par IA',
          content: [
            '**Vous pouvez faire évoluer une gate existante « tests + couverture + lint » en une gate adaptée à l\'IA en superposant des checks ciblés.** Aucune reconstruction complète du pipeline n\'est nécessaire.',
            'Gate de base :',
          ],
          items: ['Exécuter les tests unitaires.', 'Appliquer la couverture globale minimale.', 'Exécuter les linters et formatters.'],
        },
        exampleExtension: {
          content: ['Extension adaptée à l\'IA :'],
          items: [
            '**Couverture du code nouveau/modifié :** exiger un seuil de couverture plus élevé pour les nouvelles lignes que pour le code legacy.',
            '**Check de dépendances :** échouer si un nouveau package est inconnu, non approuvé ou manifestement suspect.',
            '**Vérification de réalité API :** scanner les appels vers des fonctions ou endpoints absents de votre codebase ou des versions SDK officielles.',
            '**Scan de sécurité :** exiger zéro finding critique sur les fichiers modifiés.',
            '**Label de revue manuelle :** si l\'IA a contribué plus de N lignes dans un fichier, exiger l\'approbation explicite d\'un développeur senior avant le merge.',
          ],
        },
        exampleConclusion: {
          content: ['Cette approche évite une reconstruction complète de votre processus tout en ciblant directement les risques spécifiques à l\'IA.'],
        },
        howToStart: {
          id: 'how-to-start',
          title: 'Étape par étape : comment mettre en place des vérifications qualité adaptées à l\'IA ?',
          numberedItems: [
            '**Ajouter une étape de validation des dépendances : vérifier que tous les packages importés existent dans votre gestionnaire de packages.** Avant d\'exécuter les tests, confirmez que chaque package dans les instructions `import` ou `require` existe dans npm, pip, PyPI ou votre registre interne. Les hallucinations IA inventent souvent des noms de packages plausibles.',
            '**Scanner les patterns d\'hallucination courants : API inexistantes, fonctions aux mauvaises signatures, flags de configuration inventés.** Exécuter un linter ou script personnalisé vérifiant si chaque appel API correspond à la documentation réelle du SDK ou service. Signaler les appels vers des méthodes inexistantes.',
            '**Ajouter une gate orientée sécurité : SAST plus checks explicites pour les vulnérabilités courantes du code IA.** Utiliser des outils comme Bandit (Python), ESLint-Security (JavaScript) ou Snyk. Scanner aussi : injections SQL, règles CORS trop permissives, credentials en dur, désérialisation non sécurisée.',
            '**Utiliser la validation de code multi-modèles pour les chemins critiques (auth, paiements, infrastructure).** Avant le merge, soumettre le code à plusieurs modèles IA en demandant : « Ce code correspond-il à la logique prévue ? Y a-t-il des risques de sécurité ? » Signaler les divergences.',
            '**Exiger une revue humaine axée sur la logique plutôt que la syntaxe.** Les gates automatisées détectent les hallucinations évidentes. Les relecteurs doivent vérifier : ce code fait-il ce qui était prévu ? Les cas limites sont-ils gérés ? L\'approche est-elle adaptée au cas d\'usage ?',
          ],
        },
        commonMistakes: {
          id: 'common-mistakes',
          title: 'Erreurs courantes à éviter',
          mistakes: [
            { mistake: 'Traiter le code généré par IA comme équivalent au code humain en termes de risques qualité', problem: 'Les seuils standard de lint et tests unitaires sont calibrés pour du code écrit et relu par des humains. Le code IA peut passer toutes les gates classiques tout en contenant des API hallucinées, des packages fictifs et une logique silencieusement incorrecte.', fix: 'Appliquer un niveau de risque séparé pour le code généré ou modifié par IA. Utiliser des seuils de couverture plus stricts (≥80 % pour les nouvelles lignes), des scans sécurité sur tous les fichiers touchés par IA et des checks d\'existence des dépendances.' },
            { mistake: 'S\'appuyer sur la compilation comme preuve de correctness', problem: 'Le code IA compile proprement même quand il appelle des méthodes inexistantes, importe des packages non enregistrés ou implémente une logique qui viole les exigences.', fix: 'Ajouter une validation à l\'exécution : tests à base de propriétés, tests de cas limites et tests d\'intégration qui échoueraient si la logique était subtilement incorrecte. Un lint conscient du SDK est plus efficace que la vérification de types seule.' },
            { mistake: 'Ne pas vérifier si les packages suggérés existent dans le registre', problem: 'Les modèles de langage inventent fréquemment des noms de packages plausibles. Les développeurs qui installent un nom halluciné peuvent installer un package malveillant enregistré par un attaquant (slopsquatting).', fix: 'Exécuter une étape de validation qui appelle l\'API du registre npm/PyPI/Maven pour chaque nouvel import de package. Faire échouer le build si le package est non résolvable ou sans historique de publication.' },
            { mistake: 'Démarrer de nouvelles gates en mode bloquant sans données', problem: 'Une gate bloquante sans période de rodage rencontrera des faux positifs et érodera la confiance des développeurs. Les équipes chercheront des contournements.', fix: 'Exécuter chaque nouvelle gate en mode avertissement pendant au moins un sprint. Mesurer le ratio signal/bruit et ne passer en bloquant qu\'une fois la gate démontrablement fiable.' },
            { mistake: 'Omettre les tableaux de bord et métriques spécifiques à l\'IA', problem: 'Sans visibilité sur le nombre de problèmes liés aux hallucinations détectés, les équipes ne peuvent pas justifier le surcoût des gates adaptées à l\'IA ni les affiner efficacement.', fix: 'Instrumenter votre CI pour étiqueter les problèmes par catégorie. Exposer un résumé hebdomadaire des problèmes détectés par catégorie.' },
          ],
        },
        regionalContext: {
          id: 'regional-context',
          title: 'Considérations régionales pour la qualité du code IA',
          content: [
            '**Les exigences réglementaires déterminent quels checks qualité adaptés à l\'IA sont obligatoires ou recommandés selon votre région de déploiement.** Les distinctions suivantes s\'appliquent à partir de 2026.',
          ],
          items: [
            '**UE (RGPD / NIS2) :** l\'article 25 du RGPD (protection des données dès la conception) exige que le code traitant des données personnelles soit révisé et validé avant le déploiement. La directive NIS2 impose des contrôles de sécurité de la chaîne d\'approvisionnement pour les opérateurs d\'infrastructures critiques. La CNIL recommande de privilégier l\'inférence locale pour les traitements IA impliquant des données professionnelles sensibles (financières, médicales, juridiques).',
            '**États-Unis (SOC 2 / FedRAMP) :** les audits SOC 2 Type II exigent des processus documentés de gestion des changements. Du code IA mergé sans revue humaine traçable peut générer des findings d\'audit. Les systèmes autorisés FedRAMP doivent passer des scans SAST et documenter toutes les dépendances tierces.',
            '**Japon (Lignes directrices METI sur la gouvernance IA 2024) :** les lignes directrices METI recommandent une gouvernance IA basée sur les risques, incluant des processus d\'assurance qualité pour le code généré par IA. Les déploiements en entreprise doivent documenter les contrôles de détection des hallucinations.',
            '**Chine (Loi sur la cybersécurité / Loi sur la sécurité des données 2021) :** les pipelines de développement pour les systèmes traitant des données d\'utilisateurs chinois doivent respecter les obligations de revue de sécurité. Le code IA touchant des informations personnelles est soumis à une revue au titre de la PIPL.',
          ],
        },
        faqSection: {
          id: 'faq',
          title: 'Questions fréquentes',
          faqs: [
            { q: 'Qu\'est-ce qu\'un check qualité CI/CD adapté à l\'IA ?', a: 'Un check qualité adapté à l\'IA est une gate CI/CD conçue pour détecter les modes d\'échec spécifiques au code généré par IA : API hallucinées, noms de packages fabriqués et erreurs logiques qui compilent mais violent les exigences. Contrairement aux gates lint et couverture classiques, ces checks vérifient que les packages référencés existent réellement et que les API appelées correspondent à votre SDK ou service réel.' },
            { q: 'En quoi le code généré par IA diffère-t-il du code humain en termes de risques qualité ?', a: 'Le code IA présente des modes d\'échec structurels rares dans le code humain : noms de packages inventés absents de tout registre, appels de méthodes absents de vos versions SDK, et code qui passe les tests superficiels tout en implémentant silencieusement les exigences de façon incorrecte. Les gates classiques détectent les erreurs de syntaxe et les lacunes de couverture, mais n\'ont pas été conçues pour les hallucinations confiantes.' },
            { q: 'Comment détecter les noms de packages hallucinés dans mon pipeline CI/CD ?', a: 'Ajoutez une étape de validation des dépendances qui vérifie si chaque package importé existe dans votre registre cible (npm, PyPI, Maven, etc.) avant d\'exécuter les tests. Implémentez-la comme un hook pre-commit ou un job CI appelant l\'API du registre. Les packages non résolubles ou sans historique de publication doivent faire échouer le build immédiatement.' },
            { q: 'Quels checks de sécurité ajouter pour le code généré par IA ?', a: 'Exécutez des outils SAST comme Bandit (Python), ESLint-Security (JavaScript) ou Snyk sur chaque fichier modifié. Exigez zéro nouveau finding critique sur les chemins de code modifiés par IA. Imposez une revue manuelle pour le code IA touchant l\'authentification, les paiements, les fonctions admin ou les données personnelles.' },
            { q: 'Une API hallucinée est-elle la même chose qu\'une erreur d\'exécution ?', a: 'Une API hallucinée est plus subtile qu\'une simple erreur d\'exécution. Elle désigne une méthode, un paramètre ou une option de configuration inventée par le modèle et absente du SDK ou service réel — du code qui semble correct et passe la compilation mais lève une exception à l\'exécution ou dégrade silencieusement le comportement.' },
            { q: 'Puis-je utiliser des outils IA pour réviser du code généré par IA ?', a: 'Oui. La validation croisée multi-modèles est un pattern efficace : un modèle génère le code, un autre le révise. Les passages où le réviseur exprime une incertitude ou contredit le générateur peuvent être signalés pour attention humaine. Cette approche fonctionne mieux sur les chemins à risque élevé comme l\'authentification ou le traitement des paiements.' },
            { q: 'Comment introduire des vérifications qualité IA sans ralentir mon équipe ?', a: 'Démarrez toutes les nouvelles règles en mode avertissement pour collecter des données avant de bloquer les merges. Expliquez clairement les raisons d\'échec. Autorisez des dérogations documentées et suivez les taux de faux positifs par gate pour ajuster les seuils.' },
            { q: 'Qu\'est-ce que le slopsquatting et pourquoi est-il dangereux pour le développement assisté par IA ?', a: 'Le slopsquatting survient quand un modèle IA invente un nom de package plausible qui n\'existe dans aucun registre. Si un attaquant enregistre ensuite ce nom avec du code malveillant, tout développeur qui l\'installe via npm install ou pip install exécute la charge utile de l\'attaquant. Le risque est particulièrement élevé car les développeurs ne vérifient souvent pas chaque package suggéré individuellement.' },
          ],
        },
        relatedReading: {
          id: 'related-reading',
          title: 'Lectures complémentaires',
          items: [
            '[Écrire du meilleur code avec l\'IA](/prompt-engineering/write-better-code-with-ai?lang=fr) — comment structurer les prompts de génération de code pour produire des sorties révisables',
            '[Revue de code IA : outils et méthodes](/prompt-engineering/ai-code-review?lang=fr) — utiliser l\'IA pour la qualité du code et la sécurité',
            '[Qu\'est-ce que le prompt engineering ?](/prompt-engineering/what-is-prompt-engineering?lang=fr) — principes fondamentaux pour des sorties IA fiables',
            '[Injection de prompts et sécurité](/prompt-engineering/prompt-injection-and-security?lang=fr) — patterns d\'attaque affectant les pipelines de développement assistés par IA',
            '[Hallucinations IA : comment les stopper](/prompt-engineering/ai-hallucinations-how-to-stop?lang=fr) — techniques pour réduire les hallucinations dans les sorties générées par IA',
            '[Comment évaluer la qualité des prompts](/prompt-engineering/how-to-evaluate-prompt-quality?lang=fr) — cadres d\'évaluation applicables à la qualité de génération de code',
          ],
        },
        sources: {
          id: 'sources',
          title: 'Sources',
          items: [
            '[OWASP Top 10 pour les applications LLM](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — OWASP, 2025. Risques de sécurité spécifiques au code généré par LLM et au développement assisté par IA.',
            '[Documentation GitHub CodeQL](https://codeql.github.com/docs/) — GitHub. Moteur d\'analyse statique pour le scanning de sécurité des chemins de code modifiés par IA.',
            '[Snyk State of Open Source Security Report](https://snyk.io/reports/state-of-open-source-security/) — Snyk, 2024–2025. Rapport annuel sur les vulnérabilités des dépendances et les risques de la chaîne d\'approvisionnement.',
            '[NIST AI Risk Management Framework (AI RMF 1.0)](https://airc.nist.gov/Home) — NIST, 2023. Cadre de gestion des risques des systèmes IA incluant la qualité du code et la gouvernance.',
          ],
        },
      },
    },
    ja: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: 'ファンダメンタルズ',
      title: 'AIを想定したビルド品質チェック：ハルシネーションと架空の依存関係を検出する',
      seoTitle: 'AIビルド品質チェック：CI/CDでハルシネーション検出（2026年）',
      metaDescription: 'AI生成コードはAPIをハルシネートし、存在しないパッケージを作り、要件を静かに破壊します。従来のlint・テストゲートでは検出できません。解決策を解説します。',
      ogTitle: 'AI生成コードがCI/CDを壊す3つの原因と対処法',
      ogDescription: 'AIはパッケージ名を作り出し、APIを偽り、要件をエラーなく違反します。この5つのゲートがマージ前にハルシネーションを検出します。',
      twitterTitle: 'あなたのCI/CDはAIハルシネーションを検出できません。追加すべきもの',
      twitterDescription: 'AI生成コードはコンパイルし、lintをパスしても本番環境で壊れます。依存関係チェック、API実在確認、SASTゲートが解決策です。',
      intro: '**AI生成コードは従来の品質ゲートを大規模に突破します：調査と業界レポートは一貫して、AI生成プログラムが人間レビューのコードより大幅に高い割合で悪用可能な脆弱性を含むことを示しており、提案されたパッケージやAPIの一定割合は単純に存在しません。** このようなハルシネーションを本番環境から排除するには、ビルド品質チェックを汎用的な「テスト+カバレッジ」ゲートから、存在しないAPI・偽の依存関係・自信たっぷりだが間違ったロジックをマージ前に検出するAI対応パイプラインへと進化させる必要があります。',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '10分で読める',
      educationalLevel: 'Intermediate',
      audience: 'AI coding assistantを本番CI/CDパイプラインに統合する開発チームリードとDevOpsエンジニア',
      primaryTerm: 'AIビルド品質チェック',
      aboutTopics: ['CI/CDセキュリティ', 'AIコードハルシネーション', '依存関係バリデーション'],
      toc: [
        { label: '重要ポイント', anchor: '#key-takeaways' },
        { label: 'AIがコードを書くと何が変わるか？', anchor: '#what-changes' },
        { label: 'ゲートが検出すべきハルシネーションの種類は？', anchor: '#hallucination-types' },
        { label: 'AI対応CI/CDアーキテクチャはどのようなものか？', anchor: '#architecture' },
        { label: '追加すべき具体的なチェックは？', anchor: '#concrete-checks' },
        { label: 'パイプラインでのハルシネーション対処法', anchor: '#hallucination-handling' },
        { label: '開発者に優しいAI品質チェックの構築方法', anchor: '#developer-friendly' },
        { label: '例：従来のゲートをAIコード向けに拡張する', anchor: '#example' },
        { label: 'ステップバイステップ：AI対応品質チェックの設定方法', anchor: '#how-to-start' },
        { label: '避けるべきよくあるミス', anchor: '#common-mistakes' },
        { label: '地域別考慮事項', anchor: '#regional-context' },
        { label: 'よくある質問', anchor: '#faq' },
        { label: '関連記事', anchor: '#related-reading' },
        { label: '参考文献', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'AIを想定したビルド品質チェック：ハルシネーションと架空の依存関係を検出する',
        description: 'AI生成コード向けCI/CD品質ゲートの設計方法。ハルシネーション検出、依存関係バリデーション、セキュリティゲート、開発者フレンドリーな手法を解説。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        url: 'https://www.promptquorum.com/prompt-engineering/build-quality-checks?lang=ja',
        inLanguage: 'ja',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks?lang=ja', width: 1200, height: 630 },
        keywords: ['品質ゲート', 'CI/CD', 'AIハルシネーション', 'コードレビュー', 'セキュリティスキャン', '依存関係バリデーション', 'ビルドチェック'],
        proficiencyLevel: 'Intermediate',
        audience: { '@type': 'Audience', audienceType: 'AI coding assistantを統合する開発チームリードとDevOpsエンジニア' },
        about: [
          { '@type': 'Thing', name: 'AIコード品質' },
          { '@type': 'Thing', name: 'CI/CDパイプライン' },
          { '@type': 'Thing', name: 'ハルシネーション検出' },
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
        inLanguage: 'ja',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'AI対応ビルド品質チェックとは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI対応ビルド品質チェックとは、AI生成コードに固有の障害モードを検出するCI/CDゲートです。ハルシネーションしたAPI、架空のパッケージ名、コンパイルされるが要件を違反するロジックエラーなどが対象です。従来のlintやカバレッジゲートとは異なり、参照されたパッケージが実際に存在するか、呼び出されたAPIが実際のSDKまたはサービス定義と一致するかを確認します。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI生成コードと人間が書いたコードでは品質リスクにどのような違いがありますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI生成コードは、人間が書いたコードではほとんど見られない構造的な障害モードをもたらします。存在しないレジストリのパッケージ名の発明、SDKバージョンに存在しないメソッド呼び出し、表面的なテストは通過するが要件を静かに誤実装するコードなどです。従来のゲートは構文エラーやカバレッジのギャップを検出しますが、自信たっぷりのハルシネーションに対しては設計されていません。',
            },
          },
          {
            '@type': 'Question',
            name: 'CI/CDパイプラインでハルシネーションされたパッケージ名を検出するには？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'テスト実行前に、インポートされたすべてのパッケージが対象レジストリ（npm、PyPI、Mavenなど）に実際に存在するかを確認する依存関係バリデーションステップを追加してください。プリコミットフックまたはレジストリAPIを呼び出すCIジョブとして実装します。解決できないか公開履歴のないパッケージはビルドを即座に失敗させてください。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI生成コードに追加すべきセキュリティチェックは何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '変更されたファイルごとにBandit（Python）、ESLint-Security（JavaScript）、Snykなどのツールを実行してください。AI修正コードパスでの新しい高/重大な問題をゼロに要求します。認証、決済、管理機能、個人データに触れるAI生成コードには手動セキュリティレビューを義務付けてください。',
            },
          },
          {
            '@type': 'Question',
            name: 'ハルシネーションされたAPIとランタイムエラーは同じですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ハルシネーションされたAPIは単純なランタイムエラーより微妙です。モデルが実際のSDKまたはサービスに存在しないメソッド、パラメータ、設定オプションを発明することを指します。コードは正しく見えてコンパイルを通過しますが、ランタイムで例外をスローするか動作を静かに劣化させます。ランタイムエラーは症状です。ハルシネーション検出はパイプラインの早い段階で原因を捉えます。',
            },
          },
          {
            '@type': 'Question',
            name: 'AIツールを使ってAI生成コードをレビューできますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'はい。マルチモデルクロスチェックは効果的なパターンです。一方のモデルがコードを生成し、別のモデルがレビューします。レビューモデルが不確かさを示すか生成者と意見が異なるエリアを人間のレビューのためにフラグ立てできます。認証、決済処理、インフラ設定などリスクの高いパスで最も効果的です。',
            },
          },
          {
            '@type': 'Question',
            name: 'チームを遅らせずにAI対応品質チェックを導入するには？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'マージをブロックする前にデータを収集するために、すべての新しいルールをまず警告モードで開始してください。エラーメッセージに失敗理由をドキュメントへのリンクと共に明確に説明してください。異常だが有効なケースでチームが進められるよう、文書化されたオーバーライドを許可してください。ゲートごとの偽陽性率を追跡し、摩擦が価値を超える場合はしきい値を調整してください。',
            },
          },
          {
            '@type': 'Question',
            name: 'スロップスクワッティングとは何ですか？なぜAI支援開発で危険なのですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'スロップスクワッティングは、AIモデルがいかなるレジストリにも実際には存在しない、もっともらしい名前のパッケージ名を発明するときに発生します。攻撃者が後でその名前を悪意のあるコードで登録した場合、npm installまたはpip installを実行する開発者は攻撃者のペイロードを実行します。このリスクはAI支援開発で特に高く、開発者は個々のパッケージを公式レジストリに対して個別に確認せずにインストールすることが多いためです。',
            },
          },
          {
            '@type': 'Question',
            name: 'METIのAIガバナンスガイドライン（2024年）はCI/CDパイプラインにどのような影響を与えますか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '経済産業省（METI）の2024年AIガバナンスガイドラインは、AIシステムのリスクベースのガバナンスを推奨しています。特に企業向けAI活用では、AI生成コードの品質保証プロセスをAIガバナンス記録として文書化することが求められます。CI/CDパイプラインにおいては、ハルシネーション検出ゲートの導入根拠、検出数の記録、継続的な改善プロセスを整備することで、METI指針への準拠を示すことができます。',
            },
          },
          {
            '@type': 'Question',
            name: '金融・医療・重要インフラ分野でAIコード品質チェックを導入する際の特別な注意点は何ですか？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '規制が厳しい分野では、AI生成コードに対するより厳格な要件が適用されます。金融機関では内部統制の観点からAI生成コードのレビュー証跡が必要です。医療分野では認証や個人データ処理コードへの必須人間レビューゲートが必要です。重要インフラでは依存関係の全件検証が求められます。いずれの分野でも、SASTゲートでの「新規高/重大な脆弱性ゼロ」要件を標準とし、AI修正ファイルのすべてを対象とすることをお勧めします。',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'AI対応品質チェックの構築方法',
        inLanguage: 'ja',
        step: [
          {
            '@type': 'HowToStep',
            name: '依存関係バリデーションステップを追加する',
            text: 'インポートされたすべてのパッケージがパッケージマネージャーに実際に存在するかを確認します。npmやpip、PyPI、または内部レジストリ内のすべてのimport・requireステートメントが実際のパッケージに解決されることを確認します。',
          },
          {
            '@type': 'HowToStep',
            name: 'ハルシネーションパターンをスキャンする',
            text: '実際のSDKまたはサービスドキュメントに対してすべてのAPIコールを確認するlinterまたはカスタムスクリプトを実行します。コードベースやSDKバージョンに存在しないメソッドやエンドポイントへの呼び出しにフラグを立てます。',
          },
          {
            '@type': 'HowToStep',
            name: 'セキュリティ重視のゲートを追加する',
            text: '変更されたファイルにBandit（Python）、ESLint-Security（JavaScript）、Snykなどのツールを実行します。SQLインジェクションパターン、過度に広いCORSルール、ハードコードされた認証情報、安全でないデシリアライゼーションをスキャンします。',
          },
          {
            '@type': 'HowToStep',
            name: 'クリティカルパスにマルチモデル検証を使用する',
            text: '認証、決済、またはインフラに触れるコードについて、意図したロジックと一致するか、セキュリティリスクがないかを複数のAIモデルでコードを確認します。',
          },
          {
            '@type': 'HowToStep',
            name: 'ロジック重視の人間コードレビューを要求する',
            text: '自動ゲートは明らかなハルシネーションを検出します。コードレビュアーは、意図どおりに動作するか、エッジケースが処理されているか、アプローチがユースケースに適切かを確認します。',
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '重要ポイント',
          isTldr: true,
          items: [
            'AI生成コードは従来の品質ゲートが検出するよう設計されていない新しい障害モードをもたらします：ハルシネーションされたAPI、架空の依存関係、要件を破壊するロジック。',
            'ハルシネーションを構造的リスクとして扱ってください。AIがコードの作成やリファクタリングを許可される場所ならどこでも発生すると仮定し、それを検出するためにテストとポリシーを設計します。',
            'AI対応ゲートアーキテクチャは複数の段階をレイヤー化します：プリコミットチェック、PRレベルポリシー、深いCI分析、セキュリティと依存関係ゲート、ランタイムフィードバック。',
            '具体的なAI固有のチェックには、依存関係存在チェック、API実在確認、新しいコードの高いカバレッジしきい値、AIが触れたファイルの厳しいセキュリティゲートが含まれます。',
            '開発者フレンドリーなゲートは失敗を明確に説明し、警告とハードブロックを区別し、文書化されたオーバーライドをサポートし、ノイズの多い偽陽性を最小化するように調整されます。',
          ],
        },

        definition: {
          id: 'what-changes',
          title: 'AIがコードを書くと何が変わるか？',
          content: [
            '**AIがコードを書く場合、品質ゲートは新しいクラスの問題から防御する必要があります：ハルシネーションされたAPI、架空の依存関係、そして正しく見えるが実行時または攻撃下で失敗するパターン。** これは、lintや単体テストが検出するよう設計されたものとは構造的に異なります。',
            '2026年第2四半期時点で、これらの問題は言語とモデル全体で一貫して報告されています。[AI生成コード](/prompt-engineering/write-better-code-with-ai?lang=ja)で観察される問題には以下が含まれます：',
          ],
          items: [
            '**セキュリティ脆弱性：** 調査と業界レポートは、AI生成ソリューションが特に入力バリデーション、認証、暗号化周辺でレビュー済みコードより高い割合で悪用可能なバグを含むことを一貫して示しています。',
            '**架空のパッケージ：** 言語モデルは正しい名前がわからない場合にエコシステムに存在しないライブラリやパッケージ名を推奨することがあります。',
            '**ハルシネーションされたAPIと関数：** モデルは実際のSDKや内部サービスに存在しない、もっともらしく見えるがメソッド、パラメータ、設定フラグを発明することがあります。',
            '**要件に反するロジック：** コンパイルされて表面的なテストを通過するが、元の要件と比較して間違ったことを行うコード（例：`amountDue`と`amountPaid`の混同）。',
            '**安全でないデフォルト：** 広いCORSルール、許容的なJWTバリデーション、弱いパスワードポリシー、機密データのデバッグログなどの安全でないパターンの使用。',
          ],
          callouts: [
            { type: 'key-point', label: 'クイックファクト', text: 'AI生成行には≥80%のカバレッジしきい値を推奨。5段階ゲートアーキテクチャ：プリコミット → PRレビュー → CI → セキュリティ → ランタイム監視。変更ファイルに新規の高/重大な問題ゼロを要求。' },
            { type: 'warning', label: 'スロップスクワッティングリスク', text: 'AIモデルが存在しないパッケージ名を発明した場合、攻撃者はその名前を悪意のあるコードで登録できます。チームがnpm installまたはpip installを実行すると、パッケージはビルド環境で任意のコードを実行します。参照：[プロンプトインジェクションとセキュリティ](/prompt-engineering/prompt-injection-and-security?lang=ja)。' },
          ],
        },

        definitionConclusion: {
          content: [
            '従来のチェック（lint、単体テスト、カバレッジしきい値）はこれらの一部を検出しますが、自信たっぷりのハルシネーション動作のために設計されていませんでした。',
          ],
        },

        hallucinations: {
          id: 'hallucination-types',
          title: 'ゲートが検出すべきハルシネーションの種類は？',
          content: [
            '**コードハルシネーションは構文エラーだけではありません。表面的なチェックを通過することが多い論理的、構造的、依存関係レベルの偽造も含まれます。** 効果的なゲートを設計するには、各カテゴリを理解する必要があります。プロンプトレベルでの削減技術については、[AIハルシネーション：止める方法](/prompt-engineering/ai-hallucinations-how-to-stop?lang=ja)を参照してください。',
            '設計時に考慮すべき主なカテゴリ：',
          ],
          items: [
            '**ロジックハルシネーション：** 間違ったアルゴリズム、欠落したエッジケース処理、実データで壊れる「ハッピーパスのみ」のコード。',
            '**マッピング/型エラー：** ドメインオブジェクト間の型やマッピングの誤った仮定で、微妙なデータ破損につながります。',
            '**命名の混乱：** コンパイルされるがドメインルールに違反するような方法で変数や関数名が入れ替えられたり誤使用されたりします。',
            '**リソースハルシネーション：** 制限のないメモリやCPU使用量（例：テーブル全体をメモリに読み込む）、パフォーマンス制約の無視。',
            '**API/ライブラリハルシネーション：** ライブラリまたはサービスの実際のバージョンに存在しないメソッド、エンドポイント、または設定オプションへの呼び出し。',
            '**セキュリティハルシネーション：** 構造化されて「セキュアっぽい」見た目だが、認証、サニタイゼーション、レート制限などの必須チェックをひそかに省略するコード。',
          ],
          snippets: [
            { type: 'in-one-sentence', text: 'コードハルシネーションとは、AI生成出力（パッケージ名、APIメソッド、設定フラグ、アルゴリズム）が実際には環境内に存在しないか機能しないものを指します。' },
            { type: 'in-plain-terms', text: 'AIが存在しない道への道案内を自信を持って提供するようなものです。道案内はもっともらしく見えますが、従うとどこにも行けません——または危険な場所に行きます。' },
          ],
          callouts: [
            { type: 'key-point', label: '構造的 vs 構文的', text: 'ハルシネーションされたAPIコールはクリーンにコンパイルされ静的解析もパスします。ランタイム実行またはSDK対応lintingのみがそれを検出します。これがlintと単体テスト以上の追加レイヤーが必要な理由です。' },
          ],
        },

        hallucinationsConclusion: {
          content: [
            '堅牢なビルドシステムは、AIがコードの作成やリファクタリングを許可される場所ならどこでもこれらが発生すると仮定する必要があります。',
          ],
        },

        architecture: {
          id: 'architecture',
          title: 'AI対応CI/CDゲートアーキテクチャはどのようなものか？',
          content: [
            '**AI対応ビルド品質チェックは多段階ゲートを形成する必要があります：プリコミットフィルター、PRレベルポリシーチェック、CIでの深い分析、デプロイ後のモニタリング。** 単一の段階ですべての障害モードを検出することはできません。',
            '実用的なアーキテクチャ：',
          ],
          items: [
            '**プリコミット/ローカルフック** — ベースラインフォーマットとlintingを強制します。オプションで、変更の短い人間が書いた要約なしに大きなAI生成の差分を直接コミットすることを禁止します。',
            '**プルリクエスト品質ゲート** — 通常のものに加えてAI固有のチェックを追加します：単体テスト、カバレッジしきい値、スタイル、従来の静的解析、さらにAI対応チェック（不明または存在しないパッケージを検出、参照されたAPIが存在することを確認、テストなしの新しいエンドポイントにフラグ）。',
            '**より深いCI分析** — AIが触れたコードに対して拡張テストスイートとプロパティベーステストを実行します。新たに修正されたコードパスに重点を置いた[セキュリティスキャナー（SAST/DAST）](/prompt-engineering/ai-code-review?lang=ja)を適用します。複雑さと潜在的なパフォーマンスホットスポットを分析します。',
            '**パターンとドリフト検出** — 新しいコードを確立されたプロジェクトパターン（アーキテクチャ、エラー処理、ロギング）と比較します。通常のイディオムから大きく逸脱するコードにフラグを立てます。',
            '**セキュリティと依存関係ゲート** — 変更された行のセキュリティツールから「新規の高または重大な脆弱性なし」を要求します。新しい依存関係が未承認、未固定、または疑わしいソースからの場合はビルドをブロックします。',
            '**ランタイムモニタリングとフィードバック** — AI支援の変更によって最近修正されたエンドポイントのエラーレート、レイテンシ、リソース使用量を追跡します。インシデントをプロンプトと品質ルールにフィードバックして、ゲートを時間をかけて強化します。',
          ],
          callouts: [
            { type: 'pro-tip', label: '依存関係バリデーションから始める', text: '最初に依存関係存在チェックを実装してください——最高のROI、追加が最も簡単、偽陽性ゼロ。各後続のゲートは、次のゲートが導入される前に測定可能かつ調整可能である必要があります。' },
          ],
        },

        architectureConclusion: {
          content: [
            'このレイヤードアプローチは、AI生成コードを単なる「より多くのコード」ではなく、ファーストクラスのリスクカテゴリとして扱います。',
          ],
        },

        concreteChecks: {
          id: 'concrete-checks',
          title: 'AI生成コードに追加すべき具体的なチェックは？',
          content: [
            '**品質ゲートをAI対応にするには、既存のテストとカバレッジルールに加えて、ハルシネーション、依存関係の偽造、安全でないデフォルトに対する明示的なチェックを追加してください。** これらはポリシーとしてのコードとして任意のCI/CDシステムに統合されます。',
            '実施可能なポリシーの例：',
          ],
          items: [
            '**テストとカバレッジ** — 新規または変更された行の最低カバレッジ（例：≥80%）。すべての新しいパブリックエンドポイント、バックグラウンドジョブ、エクスポートされた関数の必須テスト。',
            '**セキュリティゲート** — 変更されたコードのSASTまたは依存関係スキャナーからの新規の高/重大な問題なし。認証、決済、管理機能、または個人データに触れるAI生成コードには手動レビューを要求します。ツールのガイダンス：[AIコードレビュー：ツールと検証](/prompt-engineering/ai-code-review?lang=ja)。',
            '**依存関係の正気チェック** — 新しいパッケージは対象レジストリに存在し、明示的にホワイトリストに登録されていない限り、最低限の成熟度シグナル（ダウンロード数、スター、最終公開日）を満たす必要があります。既知のtyposquatはビルドを即座に失敗させます。',
            '**API実在確認** — 呼び出されたすべてのメソッドとエンドポイントがコードベースまたはドキュメント化されたSDKに存在することを確認する静的解析。オプション：機密エリアで承認済みAPIのallowlistへの使用制限。',
            '**パターンとパフォーマンスチェック** — 標準のエラー処理とロギングラッパーを強制します。大きなデータパスで明らかにO(n²)/O(n³)パターンを持つ異常に高い複雑さの新しく追加された関数にフラグを立てます。',
          ],
          callouts: [
            { type: 'best-practice', label: 'カバレッジしきい値', text: 'AI生成行にはレガシーコードより厳格なカバレッジしきい値を適用してください。60%カバレッジのレガシーコードは許容できるかもしれませんが、新しくAI生成されたコードはマージ前に≥80%に達する必要があります。' },
          ],
        },

        concreteChecksConclusion: {
          content: [
            'これらの多くは、CIシステムのポリシーとしてのコード、カスタムlinter、または特殊プラグインとして実装できます。',
          ],
        },

        hallucinationHandling: {
          id: 'hallucination-handling',
          title: 'パイプラインでハルシネーションを明示的に処理する方法は？',
          content: [
            '**ハルシネーションは一時的なバグではなく構造的な欠陥クラスです。ビルドシステムはそれが発生すると仮定し、検出と封じ込めに集中する必要があります。** この考え方が、どのツールとテストを優先するかを決定します。',
            '実用的な戦略：',
          ],
          items: [
            '**実行ベースの検証** — コンパイルのみに頼らないでください。エッジケース、無効な入力、ランダム化されたデータでAI生成コードにストレスをかける対象テストを実行します。プロパティベーステストはロジックとマッピングエラーを明らかにするのに特に効果的です。',
            '**実際のコンテキストによるグラウンディング** — AIを使用して変更を提案する場合、実際のスキーマ、API仕様、設定ファイルをコンテキストとして提供します。これにより、発明された関数とパラメータの可能性が減り、生成されたコードが現実から逸脱したときに検出しやすくなります。',
            '**ハイブリッド静的 + AIレビュー** — 従来の静的解析とAIベースのレビューを組み合わせます。静的ツールはデータフローとテイント分析が得意です。AIレビュアーは意図を読み取り、高レベルの要件の不一致を見つけるのが得意です。',
            '**マルチモデルクロスチェック** — 重要な変更には、一方のモデルがコードを生成し、別のモデルがレビューします。レビュアーが意見が合わなかったり低い信頼度を示したりするエリアを人間のレビューのためにフラグ立てできます。',
            '**ハルシネーションブラックリストとルール** — 繰り返し発生するハルシネーションパターン（偽のパッケージ名、作り上げられたフラグ、発明されたエンドポイント）を発見したら、それらを明示的なルールとしてエンコードします。今後の出現は自動的なビルド失敗または強い警告を引き起こします。',
          ],
          callouts: [
            { type: 'warning', label: 'コンパイル ≠ 正確さ', text: 'AI生成関数はクリーンにコンパイルされ、すべての既存テストを通過し、それでも要件を静かに誤実装する可能性があります。ロジックが反転または微妙に間違っていた場合に失敗するテストを少なくとも1つ使用して、常に新しいコードパスをテストしてください。' },
          ],
        },

        hallucinationHandlingConclusion: {
          content: [
            'ハルシネーションを予期される欠陥クラスとして扱うことで、それらを確実に検出するテストとゲートを設計できます。',
          ],
        },

        developerFriendly: {
          id: 'developer-friendly',
          title: '開発者に優しいAI品質チェックを構築するには？',
          content: [
            '**品質ゲートは開発者がそれらを信頼する場合にのみ機能します。AI対応チェックは透明であり、失敗を明確に説明し、ノイズの多い偽陽性を避ける必要があります。** 高い偽陽性率はチームをゲートを完全に無効化またはバイパスさせます。',
            'ガイドライン：',
          ],
          items: [
            '**各失敗の「なぜ」を説明する** — エラーメッセージは、どの行またはパッケージがどのルールに違反したかを正確に示し、理想的には修正またはオーバーライドする方法のドキュメントにリンクする必要があります。',
            '**ハードブロックと警告を区別する** — 新しいルールについては、データを収集してフラストレーションを減らすために「警告」モードで開始します。シグナル対ノイズが許容できたらのみ「ブロッキング」に昇格させます。',
            '**文書化されたオーバーライドを許可する** — 一部のAI生成の変更は意図的にリスクがあるか異常です。適切な場合にチームが進められるように文書化されたオーバーライドメカニズム（例：ラベル付きコメントとチケットリンク）を提供し、監査証跡を残します。',
            '**偽陽性を測定して反復する** — ゲートが有効な変更をどれだけ頻繁にブロックするか、または不必要な作業を強制するかを追跡します。必要に応じてしきい値を調整し、ルールを洗練させ、またはスコープを絞り込みます。',
            '**AI固有のダッシュボードを公開する** — AI生成コードに関連して検出された問題の数、回避された脆弱性の数、ブロックされたハルシネーション依存関係の回数を示します。これにより、追加のゲートが摩擦に値するという信頼が構築されます。',
          ],
          callouts: [
            { type: 'pro-tip', label: '警告優先のロールアウト', text: '常に新しいゲートをブロッキングにする前に少なくとも1スプリントの間警告モードで導入してください。これによりシグナル対ノイズを測定し、ビルドが壊れ始める前に開発者の信頼を構築できます。' },
          ],
        },

        developerFriendlyConclusion: {
          content: [
            '優れたAI対応パイプラインは、任意の障害コースではなく、セーフティネットのように感じられます。',
          ],
        },

        example: {
          id: 'example',
          title: '例：従来のゲートをAI生成コード向けに拡張する',
          content: [
            '**既存の「テスト + カバレッジ + lint」ゲートは、対象チェックをレイヤー化することでAI対応ゲートに進化できます。** 完全なパイプラインの再構築は不要です。',
            'ベースラインゲート：',
          ],
          items: [
            '単体テストを実行します。',
            '最低限の全体的なカバレッジを強制します。',
            'linterとフォーマッターを実行します。',
          ],
        },

        exampleExtension: {
          content: ['AI対応の拡張：'],
          items: [
            '**新規/変更されたコードのカバレッジ：** レガシーコードより新しい行に高いカバレッジしきい値を要求します。',
            '**依存関係チェック：** 新しいパッケージが不明、未承認、または明らかに疑わしい場合は失敗させます。',
            '**API実在確認：** コードベースまたは公式SDKバージョンに存在しない関数やエンドポイントへの呼び出しをスキャンします。',
            '**セキュリティスキャン：** 変更されたファイルで高/重大な問題ゼロを要求します。',
            '**手動レビューラベル：** AIがファイルにN行以上貢献した場合、マージ前にシニア開発者からの明示的な人間の承認を要求します。',
          ],
        },

        exampleConclusion: {
          content: [
            'このアプローチはプロセスの完全な再構築を避けながら、AI固有のリスクを直接対象とします。',
          ],
        },

        howToStart: {
          id: 'how-to-start',
          title: 'ステップバイステップ：AI対応品質チェックの設定方法',
          numberedItems: [
            '**依存関係バリデーションステップを追加する：インポートされたすべてのパッケージがパッケージマネージャーに実際に存在するかを確認します。** テスト実行前に、importまたはrequireステートメントに記載されたすべてのパッケージがnpm、pip、PyPI、または内部レジストリに存在することを確認します。AIハルシネーションはしばしばもっともらしい名前のパッケージ名を発明します。',
            '**一般的なハルシネーションパターンをスキャンする：存在しないAPI、間違ったシグネチャを持つ関数、架空の設定フラグ。** すべてのAPIコールが実際のSDKまたはサービスドキュメントと一致するかを確認するlinterまたはカスタムスクリプトを実行します。存在しないメソッドへの呼び出しにフラグを立てます。',
            '**セキュリティ重視のゲートを追加する：SAST と一般的なAI生成脆弱性の明示的なチェック。** Bandit（Python）、ESLint-Security（JavaScript）、Snykなどのツールを使用します。SQLインジェクションパターン、過度に広いCORSルール、ハードコードされた認証情報、安全でないデシリアライゼーションもスキャンします。',
            '**クリティカルパス（認証、決済、インフラ）にマルチモデルコードバリデーションを使用します。** マージ前に複数のAIモデルに「このコードは意図したロジックと一致するか？セキュリティリスクはあるか？」と確認させます。乖離にフラグを立てます。',
            '**ロジック対構文に焦点を当てた人間コードレビューを要求します。** 自動ゲートは明らかなハルシネーションを検出します。コードレビュアーは確認する必要があります：意図したことをしているか？エッジケースは処理されているか？アプローチはユースケースに適切か？',
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: '避けるべきよくあるミス',
          mistakes: [
            {
              mistake: 'AI生成コードを品質リスクにおいて人間が書いたコードと同等に扱う',
              problem: '標準的なlintと単体テストのしきい値は、人間が書いてレビューしたコードのために較正されています。AI生成コードはハルシネーションされたAPI、架空のパッケージ、静かに間違ったロジックを含みながら、すべての従来のゲートを通過できます。',
              fix: 'AI生成またはAI修正コードに別のリスクティアを適用します。より厳格なカバレッジしきい値（新しい行に≥80%）、すべてのAIが触れたファイルのセキュリティスキャン、依存関係存在チェックを追加します。',
            },
            {
              mistake: 'コンパイルを正確さの証明として頼る',
              problem: 'AI生成コードは、存在しないメソッドを呼び出し、登録されていないパッケージをインポートし、要件に違反するロジックを実装していても、クリーンにコンパイルされます。コンパイルは必要条件ですが十分条件ではありません。',
              fix: 'ランタイムバリデーションを追加します：プロパティベーステスト、エッジケーステスト、ロジックが微妙に間違っていた場合に失敗する統合テスト。型チェックだけよりメソッドシグネチャを検証するSDK対応lintingがより効果的です。',
            },
            {
              mistake: '提案されたパッケージがレジストリに実際に存在するかを確認しない',
              problem: '言語モデルは正しい名前がわからない場合にもっともらしいパッケージ名を頻繁に発明します。ハルシネーションされたパッケージ名でnpm installまたはpip installを実行する開発者は、後で攻撃者によって登録された悪意のあるパッケージをインストールする可能性があります（スロップスクワッティング）。',
              fix: 'すべての新しいパッケージインポートに対してnpm/PyPI/MavenレジストリAPIを呼び出す依存関係バリデーションステップを実行します。パッケージが解決できないか公開履歴がない場合はビルドを失敗させます。',
            },
            {
              mistake: 'データなしでブロッキングモードで新しいゲートを開始する',
              problem: 'ハードブロッカーとして導入された新しいゲートは偽陽性に遭遇し、摩擦を生んで開発者の信頼を損ないます。チームは回避策を探すかゲートの削除を要求します。',
              fix: '少なくとも1スプリントの間、警告モードですべての新しいゲートを実行します。シグナル対ノイズを測定し、偽陽性を修正し、ゲートが確実に信頼できることが実証されたときのみブロッキングに昇格させます。',
            },
            {
              mistake: 'AI固有のダッシュボードとメトリクスを省略する',
              problem: 'ハルシネーション関連の問題がいくつ検出されたかの可視性なしには、チームはAI対応ゲートのオーバーヘッドを正当化したり、効果的に調整したりすることができません。',
              fix: 'CIをカテゴリ別（依存関係ハルシネーション、APIハルシネーション、セキュリティ発見、ロジックフラグ）に問題にタグ付けするように計装します。カテゴリ別に検出された問題の週次サマリーを公開します。',
            },
          ],
        },

        regionalContext: {
          id: 'regional-context',
          title: 'AIコード品質の地域別考慮事項',
          content: [
            '**規制要件は、デプロイ地域によってどのAI対応品質チェックが必須か推奨かに影響します。** 以下の区別は2026年時点で適用されます。',
          ],
          items: [
            '**日本（METI AIガバナンスガイドライン2024年）：** 経済産業省（METI）のガイドラインはリスクベースのAIガバナンスを推奨しており、AI生成コードの品質保証プロセスが含まれます。企業向けデプロイメントでは、ハルシネーション検出コントロールをAIガバナンス記録の一部として文書化する必要があります。',
            '**アジア太平洋地域（データ越境ルール）：** APACのデータ越境規制（日本の個人情報保護法、シンガポールのPDPA、韓国のPIPAなど）は、個人データを処理するシステムのコード品質基準に影響します。機密データを処理するパスには、ローカルレビューと依存関係の全件検証を推奨します。',
            '**米国（SOC 2 / FedRAMP）：** SOC 2 Type II監査では、文書化された変更管理プロセスが必要です。追跡可能な人間のレビューなしにマージされたAI生成コードは監査所見を生む可能性があります。FedRAMP認可システムはSASTスキャンをパスし、すべてのサードパーティ依存関係を文書化する必要があります。',
            '**EU（GDPR / NIS2）：** GDPR第25条（設計によるデータ保護）は、個人データを処理するコードがデプロイ前にレビューおよびバリデーションされることを要求します。NIS2指令はさらに、重要インフラ事業者の依存関係バリデーションをカバーするサプライチェーンセキュリティコントロールを義務付けています。',
          ],
        },

        faqSection: {
          id: 'faq',
          title: 'よくある質問',
          faqs: [
            {
              q: 'AI対応ビルド品質チェックとは何ですか？',
              a: 'AI対応ビルド品質チェックとは、AI生成コードに固有の障害モードを検出するCI/CDゲートです。ハルシネーションしたAPI、架空のパッケージ名、コンパイルされるが要件を違反するロジックエラーなどが対象です。従来のlintやカバレッジゲートとは異なり、参照されたパッケージが実際に存在するか、呼び出されたAPIが実際のSDKまたはサービス定義と一致するかを確認します。',
            },
            {
              q: 'AI生成コードと人間が書いたコードでは品質リスクにどのような違いがありますか？',
              a: 'AI生成コードは、人間が書いたコードではほとんど見られない構造的な障害モードをもたらします。存在しないレジストリのパッケージ名の発明、SDKバージョンに存在しないメソッド呼び出し、表面的なテストは通過するが要件を静かに誤実装するコードなどです。従来のゲートは構文エラーやカバレッジのギャップを検出しますが、自信たっぷりのハルシネーションに対しては設計されていません。',
            },
            {
              q: 'CI/CDパイプラインでハルシネーションされたパッケージ名を検出するには？',
              a: 'テスト実行前に、インポートされたすべてのパッケージが対象レジストリ（npm、PyPI、Mavenなど）に実際に存在するかを確認する依存関係バリデーションステップを追加してください。プリコミットフックまたはレジストリAPIを呼び出すCIジョブとして実装します。解決できないか公開履歴のないパッケージはビルドを即座に失敗させてください。',
            },
            {
              q: 'AI生成コードに追加すべきセキュリティチェックは何ですか？',
              a: '変更されたファイルごとにBandit（Python）、ESLint-Security（JavaScript）、Snykなどのツールを実行してください。AI修正コードパスでの新しい高/重大な問題をゼロに要求します。認証、決済、管理機能、個人データに触れるAI生成コードには手動セキュリティレビューを義務付けてください。',
            },
            {
              q: 'ハルシネーションされたAPIとランタイムエラーは同じですか？',
              a: 'ハルシネーションされたAPIは単純なランタイムエラーより微妙です。モデルが実際のSDKまたはサービスに存在しないメソッド、パラメータ、設定オプションを発明することを指します。コードは正しく見えてコンパイルを通過しますが、ランタイムで例外をスローするか動作を静かに劣化させます。ランタイムエラーは症状です。ハルシネーション検出はパイプラインの早い段階で原因を捉えます。',
            },
            {
              q: 'AIツールを使ってAI生成コードをレビューできますか？',
              a: 'はい。マルチモデルクロスチェックは効果的なパターンです。一方のモデルがコードを生成し、別のモデルがレビューします。レビューモデルが不確かさを示すか生成者と意見が異なるエリアを人間のレビューのためにフラグ立てできます。認証、決済処理、インフラ設定などリスクの高いパスで最も効果的です。',
            },
            {
              q: 'チームを遅らせずにAI対応品質チェックを導入するには？',
              a: 'マージをブロックする前にデータを収集するために、すべての新しいルールをまず警告モードで開始してください。エラーメッセージに失敗理由をドキュメントへのリンクと共に明確に説明してください。異常だが有効なケースでチームが進められるよう、文書化されたオーバーライドを許可してください。ゲートごとの偽陽性率を追跡し、摩擦が価値を超える場合はしきい値を調整してください。',
            },
            {
              q: 'スロップスクワッティングとは何ですか？なぜAI支援開発で危険なのですか？',
              a: 'スロップスクワッティングは、AIモデルがいかなるレジストリにも実際には存在しない、もっともらしい名前のパッケージ名を発明するときに発生します。攻撃者が後でその名前を悪意のあるコードで登録した場合、npm installまたはpip installを実行する開発者は攻撃者のペイロードを実行します。このリスクはAI支援開発で特に高く、開発者は個々のパッケージを公式レジストリに対して個別に確認せずにインストールすることが多いためです。',
            },
            {
              q: 'METIのAIガバナンスガイドライン（2024年）はCI/CDパイプラインにどのような影響を与えますか？',
              a: '経済産業省（METI）の2024年AIガバナンスガイドラインは、AIシステムのリスクベースのガバナンスを推奨しています。特に企業向けAI活用では、AI生成コードの品質保証プロセスをAIガバナンス記録として文書化することが求められます。CI/CDパイプラインにおいては、ハルシネーション検出ゲートの導入根拠、検出数の記録、継続的な改善プロセスを整備することで、METI指針への準拠を示すことができます。',
            },
            {
              q: '金融・医療・重要インフラ分野でAIコード品質チェックを導入する際の特別な注意点は何ですか？',
              a: '規制が厳しい分野では、AI生成コードに対するより厳格な要件が適用されます。金融機関では内部統制の観点からAI生成コードのレビュー証跡が必要です。医療分野では認証や個人データ処理コードへの必須人間レビューゲートが必要です。重要インフラでは依存関係の全件検証が求められます。いずれの分野でも、SASTゲートでの「新規高/重大な脆弱性ゼロ」要件を標準とし、AI修正ファイルのすべてを対象とすることをお勧めします。',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '関連記事',
          items: [
            '[AIでより良いコードを書く](/prompt-engineering/write-better-code-with-ai?lang=ja) — レビュー可能な出力を生成するコード生成のためのプロンプト構造',
            '[AIコードレビュー：ツールと検証](/prompt-engineering/ai-code-review?lang=ja) — AIを使ったコード品質とセキュリティのレビュー',
            '[プロンプトエンジニアリングとは？](/prompt-engineering/what-is-prompt-engineering?lang=ja) — 信頼できるAI出力のための基礎原則',
            '[プロンプトインジェクションとセキュリティ](/prompt-engineering/prompt-injection-and-security?lang=ja) — AI支援開発パイプラインに影響する攻撃パターン',
            '[AIハルシネーション：止める方法](/prompt-engineering/ai-hallucinations-how-to-stop?lang=ja) — AI生成出力のハルシネーションを減らす技術',
            '[プロンプト品質の評価方法](/prompt-engineering/how-to-evaluate-prompt-quality?lang=ja) — コード生成品質に適用できる評価フレームワーク',
          ],
        },

        sources: {
          id: 'sources',
          title: '参考文献',
          items: [
            '[OWASP Top 10 LLMアプリケーション向け](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — OWASP, 2025年。LLM生成コードとAI支援開発に固有のセキュリティリスク。',
            '[GitHub CodeQLドキュメント](https://codeql.github.com/docs/) — GitHub。AI修正コードパスのセキュリティスキャンに使用される静的解析エンジン。',
            '[Snyk State of Open Source Security Report](https://snyk.io/reports/state-of-open-source-security/) — Snyk, 2024–2025年。依存関係の脆弱性とサプライチェーンリスクに関する年次レポート。',
            '[NIST AI Risk Management Framework (AI RMF 1.0)](https://airc.nist.gov/Home) — NIST, 2023年。コード品質とガバナンスを含むAIシステムのリスク管理フレームワーク。',
          ],
        },
      },
    },
    zh: {
      freshness_tier: 'semi_annual',
      next_refresh_due: '2026-09-24',
      theme: '基础知识',
      title: '面向AI的构建质量检查：检测幻觉与伪造依赖项',
      seoTitle: 'AI构建质量检查：在CI/CD中检测幻觉（2026年）',
      metaDescription: 'AI生成的代码会产生API幻觉、发明不存在的包，并悄悄破坏需求。传统的lint和测试门控无法检测这三类问题。以下是解决方案。',
      ogTitle: 'AI生成代码以3种方式破坏CI/CD——以及修复方法',
      ogDescription: 'AI会发明包名、伪造API，并在不报错的情况下违反需求。这5个门控可在合并前检测幻觉。',
      twitterTitle: '您的CI/CD无法捕获AI幻觉。应该添加这些检查',
      twitterDescription: 'AI生成的代码能编译、通过lint，却仍在生产环境中崩溃。依赖检查、API实存验证和SAST门控是解决方案。',
      intro: '**AI生成代码在大规模应用中无法通过传统质量门控：研究和行业报告一致发现，AI编写的程序包含可利用漏洞的比例明显高于经过人工审查的代码，且AI建议的包或API中有一定比例根本不存在。** 要将这些幻觉拒之于生产环境之外，构建质量检查必须从通用的"测试+覆盖率"门控演进为AI感知流水线，在合并前检测不存在的API、伪造依赖项以及看似正确实则有误的逻辑。',
      publishDate: '2026-03-24',
      dateModified: '2026-04-29',
      readTime: '阅读约10分钟',
      educationalLevel: 'Intermediate',
      audience: '将AI编码助手集成到生产CI/CD流水线的开发团队负责人和DevOps工程师',
      primaryTerm: 'AI构建质量检查',
      aboutTopics: ['CI/CD安全', 'AI代码幻觉', '依赖项验证'],
      toc: [
        { label: '核心要点', anchor: '#key-takeaways' },
        { label: 'AI编写代码会带来哪些变化？', anchor: '#what-changes' },
        { label: '门控必须捕获哪些幻觉类型？', anchor: '#hallucination-types' },
        { label: 'AI感知CI/CD架构是什么样的？', anchor: '#architecture' },
        { label: '应该添加哪些具体检查？', anchor: '#concrete-checks' },
        { label: '如何在流水线中处理幻觉？', anchor: '#hallucination-handling' },
        { label: '如何让AI质量检查对开发者友好？', anchor: '#developer-friendly' },
        { label: '示例：将传统门控扩展到AI代码', anchor: '#example' },
        { label: '分步指南：如何设置AI感知质量检查？', anchor: '#how-to-start' },
        { label: '应避免的常见错误', anchor: '#common-mistakes' },
        { label: '地区注意事项', anchor: '#regional-context' },
        { label: '常见问题', anchor: '#faq' },
        { label: '相关阅读', anchor: '#related-reading' },
        { label: '参考来源', anchor: '#sources' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: '面向AI的构建质量检查：检测幻觉与伪造依赖项',
        description: 'AI生成代码的CI/CD质量门控设计方法，涵盖幻觉检测、依赖项验证、安全门控及开发者友好实践。',
        datePublished: '2026-03-24',
        dateModified: '2026-04-29',
        url: 'https://www.promptquorum.com/prompt-engineering/build-quality-checks?lang=zh',
        inLanguage: 'zh',
        author: { '@type': 'Organization', name: 'PromptQuorum' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks?lang=zh', width: 1200, height: 630 },
        keywords: ['质量门控', 'CI/CD', 'AI幻觉', '代码审查', '安全扫描', '依赖项验证', '构建检查'],
        proficiencyLevel: 'Intermediate',
        audience: { '@type': 'Audience', audienceType: '将AI编码助手集成到生产流水线的开发团队负责人和DevOps工程师' },
        about: [
          { '@type': 'Thing', name: 'AI代码质量' },
          { '@type': 'Thing', name: 'CI/CD流水线' },
          { '@type': 'Thing', name: '幻觉检测' },
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
        inLanguage: 'zh',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'AI感知构建质量检查是什么？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI感知构建质量检查是专门用于捕获AI生成代码特有故障模式的CI/CD门控：幻觉API、伪造包名，以及能编译但违反需求的逻辑错误。与传统lint和覆盖率门控不同，这些检查会验证引用的包是否真实存在，以及调用的API是否与实际SDK或服务定义匹配。',
            },
          },
          {
            '@type': 'Question',
            name: 'AI生成代码与人工编写代码在质量风险上有何不同？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AI生成代码引入了人工编写代码中极少出现的结构性故障模式：在任何注册表中都不存在的包名、SDK版本中不存在的方法调用，以及通过表面测试但悄悄误实现需求的代码。传统门控能检测语法错误和覆盖率缺口，但并非为自信的幻觉而设计。',
            },
          },
          {
            '@type': 'Question',
            name: '如何在CI/CD流水线中检测幻觉包名？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '在运行测试前，添加一个依赖项验证步骤，检查每个导入的包是否在目标注册表（npm、PyPI、Maven等）中实际存在。将其实现为调用注册表API的预提交钩子或CI任务。无法解析或没有发布历史的包应立即使构建失败。',
            },
          },
          {
            '@type': 'Question',
            name: '应该为AI生成代码添加哪些安全检查？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '对每个更改的文件运行Bandit（Python）、ESLint-Security（JavaScript）或Snyk等SAST工具。要求AI修改的代码路径上零新增高危/严重问题。对涉及认证、支付、管理功能或个人数据的AI生成代码强制要求人工安全审查。',
            },
          },
          {
            '@type': 'Question',
            name: '幻觉API与运行时错误相同吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '幻觉API比简单的运行时错误更隐蔽。它指模型发明了实际SDK或服务中不存在的方法、参数或配置选项——代码看起来正确并通过编译，但在运行时抛出异常或悄悄降级行为。运行时错误是症状，幻觉检测则在流水线更早阶段捕获根本原因。',
            },
          },
          {
            '@type': 'Question',
            name: '能用AI工具来审查AI生成的代码吗？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '可以。多模型交叉检查是一种有效模式：一个模型生成代码，另一个模型审查它。审查模型表示不确定或与生成者意见不同的地方可以标记供人工关注。这种方法在认证、支付处理或基础设施配置等高风险路径上效果最佳。',
            },
          },
          {
            '@type': 'Question',
            name: '如何在不拖慢团队的情况下引入AI感知质量检查？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '在阻止合并之前先以警告模式启动所有新规则以收集数据。在错误消息中清晰解释失败原因并附上文档链接。允许有文档记录的覆盖机制，以便团队在不寻常但合理的情况下继续推进同时留下审计记录。跟踪每个门控的误报率，在摩擦超过价值时调整阈值。',
            },
          },
          {
            '@type': 'Question',
            name: '什么是slopsquatting，它为什么对AI辅助开发有危险？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Slopsquatting（投机注册）是指AI模型发明了一个听起来合理但实际上不存在于任何注册表中的包名。如果攻击者随后以该名称注册恶意代码，任何运行npm install或pip install的开发者都会执行攻击者的payload。这种风险在AI辅助开发中尤为突出，因为开发者在安装之前通常不会逐一核实建议的包。',
            },
          },
          {
            '@type': 'Question',
            name: '中国《数据安全法》（2021年）如何影响AI生成代码的质量检查要求？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '中国2021年《数据安全法》和《个人信息保护法》（PIPL）要求处理个人信息的代码在部署前经过审查和验证。对于AI生成的代码，这意味着：涉及个人数据处理的模块需要强制人工安全审查；依赖项必须全量可追溯；SAST扫描结果需存档备查。建议将AI代码质量门控的检测结果纳入数据安全合规记录，特别是在金融、医疗和政务系统中。',
            },
          },
          {
            '@type': 'Question',
            name: '金融、医疗和法律行业如何通过AI代码质量检查满足合规要求？',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '受严格监管的行业对AI生成代码有更高要求。金融机构需要AI代码审查的完整审计记录，以满足内部控制要求。医疗行业需要针对认证和个人数据处理代码的强制人工审查门控，以保障患者安全。法律服务需要对客户数据相关代码路径进行依赖项全量验证。所有行业建议将"变更文件上零新增高危/严重漏洞"设为SAST门控标准，并覆盖所有AI修改的文件。',
            },
          },
        ],
      },
      howToSchema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: '如何构建AI感知质量检查',
        inLanguage: 'zh',
        step: [
          {
            '@type': 'HowToStep',
            name: '添加依赖项验证步骤',
            text: '检查所有导入的包是否在包管理器中真实存在。验证npm、pip、PyPI或内部注册表中每条import或require语句都能解析到真实包。',
          },
          {
            '@type': 'HowToStep',
            name: '扫描幻觉模式',
            text: '运行linter或自定义脚本，对照实际SDK或服务文档检查每个API调用。标记代码库或SDK版本中不存在的方法或端点调用。',
          },
          {
            '@type': 'HowToStep',
            name: '添加安全重点门控',
            text: '对更改的文件运行Bandit（Python）、ESLint-Security（JavaScript）或Snyk等SAST工具。扫描SQL注入模式、过于宽松的CORS规则、硬编码凭据和不安全的反序列化。',
          },
          {
            '@type': 'HowToStep',
            name: '对关键路径使用多模型验证',
            text: '对涉及认证、支付或基础设施的代码，通过多个AI模型询问代码是否符合预期逻辑、是否存在安全风险。标记分歧之处。',
          },
          {
            '@type': 'HowToStep',
            name: '要求以逻辑为重点的人工代码审查',
            text: '自动门控捕获明显的幻觉。代码审查者应验证：代码是否做了预期的事？边界情况是否处理？方法是否适合该用例？',
          },
        ],
      },
      sections: {
        tldr: {
          id: 'key-takeaways',
          title: '核心要点',
          isTldr: true,
          items: [
            'AI生成代码引入了传统质量门控无法检测的新故障模式：幻觉API、伪造依赖项以及破坏需求的逻辑。',
            '将幻觉视为结构性风险：假设它们会在任何允许AI编写或重构代码的地方出现，并设计测试和策略来检测它们。',
            'AI感知门控架构分层叠加：预提交检查、PR级策略、深度CI分析、安全和依赖项门控、运行时反馈。',
            '具体的AI专用检查包括：依赖项存在性检查、API实存验证、新代码更高覆盖率阈值，以及AI修改文件的更严格安全门控。',
            '对开发者友好的门控应清晰解释失败原因、区分警告与硬性阻止、支持有文档记录的覆盖，并调整以最小化嘈杂的误报。',
          ],
        },

        definition: {
          id: 'what-changes',
          title: 'AI编写代码会带来哪些变化？',
          content: [
            '**当AI编写代码时，质量门控必须防御一类新问题：幻觉API、伪造依赖项，以及看起来正确但在运行时或攻击下失败的模式。** 这与lint和单元测试设计检测的问题在结构上截然不同。',
            '截至2026年第二季度，这些问题在不同语言和模型中被持续报告。[AI生成代码](/prompt-engineering/write-better-code-with-ai?lang=zh)中观察到的问题包括：',
          ],
          items: [
            '**安全漏洞：** 研究和行业报告一致发现，AI生成的解决方案包含可利用漏洞的比例高于经审查代码，尤其在输入验证、认证和加密方面。',
            '**伪造包：** 当语言模型不知道正确名称时，有时会推荐生态系统中不存在的库或包名，为"投机注册"攻击创造机会。',
            '**幻觉API和函数：** 模型可能发明看似合理但在实际SDK或内部服务中不存在的方法、参数或配置标志。',
            '**违反需求的逻辑：** 能编译并通过表面测试，但与原始需求相比做了错误的事（例如混淆`amountDue`和`amountPaid`）。',
            '**不安全的默认值：** 使用宽松CORS规则、允许性JWT验证、弱密码策略或敏感数据调试日志等不安全模式。',
          ],
          callouts: [
            { type: 'key-point', label: '快速事实', text: 'AI生成行推荐≥80%覆盖率阈值。5阶段门控架构：预提交 → PR审查 → CI → 安全 → 运行时监控。要求更改文件上零新增高危/严重问题。' },
            { type: 'warning', label: '投机注册风险', text: '当AI模型发明了一个不存在的包名时，攻击者可以用恶意代码注册该名称。一旦团队运行npm install或pip install，该包就会在构建环境中执行任意代码。另请参阅：[提示注入与安全](/prompt-engineering/prompt-injection-and-security?lang=zh)。' },
          ],
        },

        definitionConclusion: {
          content: [
            '传统检查（lint、单元测试、覆盖率阈值）能捕获其中一些问题，但并非为自信的幻觉行为而设计。',
          ],
        },

        hallucinations: {
          id: 'hallucination-types',
          title: '门控必须捕获哪些幻觉类型？',
          content: [
            '**代码幻觉不仅仅是语法错误，还包括经常能通过表面检查的逻辑、结构和依赖项级别的伪造。** 设计有效的门控需要理解每个类别。有关在提示层面减少幻觉的技术，请参阅[AI幻觉：如何阻止它们](/prompt-engineering/ai-hallucinations-how-to-stop?lang=zh)。',
            '设计时需考虑的常见类别：',
          ],
          items: [
            '**逻辑幻觉：** 错误的算法、缺少边界情况处理、在真实数据上崩溃的"仅处理正常路径"代码。',
            '**映射/类型错误：** 对域对象之间类型或映射的错误假设，导致微妙的数据损坏。',
            '**命名混乱：** 变量或函数名以仍能编译但违反域规则的方式被调换或误用。',
            '**资源幻觉：** 无限制的内存或CPU使用（例如将整个表加载到内存中），忽视性能约束。',
            '**API/库幻觉：** 调用库或服务实际版本中不存在的方法、端点或配置选项。',
            '**安全幻觉：** 看起来结构化且"安全感"十足，但悄悄省略了授权、清理或限流等关键检查的代码。',
          ],
          snippets: [
            { type: 'in-one-sentence', text: '代码幻觉是指AI生成的输出（包名、API方法、配置标志或算法）与您环境中实际存在或有效的任何内容不对应。' },
            { type: 'in-plain-terms', text: '就像AI自信地给出通往一条不存在的街道的路线一样。路线看起来合理，但按照它走只会走到没有路的地方——或者更危险的地方。' },
          ],
          callouts: [
            { type: 'key-point', label: '结构性 vs 语法性', text: '幻觉API调用能干净地编译并通过静态分析。只有运行时执行或SDK感知的linting才能捕获它。这就是为什么需要在lint和单元测试之外添加额外层次的原因。' },
          ],
        },

        hallucinationsConclusion: {
          content: [
            '一个健壮的构建系统应当假设这些问题会在任何允许AI编写或重构代码的地方出现。',
          ],
        },

        architecture: {
          id: 'architecture',
          title: 'AI感知CI/CD门控架构是什么样的？',
          content: [
            '**AI感知构建质量检查应形成多阶段门控：预提交过滤器、PR级策略检查、CI中的深度分析以及部署后监控。** 没有任何单一阶段能捕获所有故障模式。',
            '实用架构：',
          ],
          items: [
            '**预提交/本地钩子** — 强制执行基准格式和linting。可选择禁止直接提交没有人工编写摘要的大型AI生成diff。',
            '**拉取请求质量门控** — 在正常检查之上添加AI专用检查：单元测试、覆盖率阈值、风格、常规静态分析，加上AI感知检查（检测未知或不存在的包、验证引用的API存在、标记无测试的新端点）。',
            '**深度CI分析** — 对AI修改的代码运行扩展测试套件和基于属性的测试。将[安全扫描器（SAST/DAST）](/prompt-engineering/ai-code-review?lang=zh)重点应用于新修改的代码路径。分析复杂度和潜在性能热点。',
            '**模式和漂移检测** — 将新代码与已建立的项目模式（架构、错误处理、日志记录）进行比较。标记与通常惯用语大幅偏离的代码。',
            '**安全和依赖项门控** — 要求安全工具对更改行报告"零新增高危或严重漏洞"。如果新依赖项未经批准、未固定版本或来自可疑来源，则阻止构建。',
            '**运行时监控和反馈** — 跟踪最近由AI辅助变更修改的端点的错误率、延迟和资源使用情况。将事件反馈到提示和质量规则中以随时间强化门控。',
          ],
          callouts: [
            { type: 'pro-tip', label: '从依赖项验证开始', text: '首先实现依赖项存在性检查——ROI最高、最容易添加、零误报。在引入下一个门控之前，每个后续门控都应该是可测量和可调整的。' },
          ],
        },

        architectureConclusion: {
          content: [
            '这种分层方法将AI生成代码视为一等风险类别，而不仅仅是"更多代码"。',
          ],
        },

        concreteChecks: {
          id: 'concrete-checks',
          title: '应该为AI生成代码添加哪些具体检查？',
          content: [
            '**要使质量门控具备AI感知能力，请在现有测试和覆盖率规则之上添加针对幻觉、依赖项伪造和不安全默认值的显式检查。** 这些可以作为策略即代码集成到任何CI/CD系统中。',
            '可执行策略示例：',
          ],
          items: [
            '**测试和覆盖率** — 新增或更改行的最低覆盖率（例如≥80%）。所有新公共端点、后台任务或导出函数的强制测试。',
            '**安全门控** — 变更代码的SAST或依赖项扫描器零新增高危/严重问题。要求对涉及认证、支付、管理功能或个人数据的AI生成代码进行人工审查。工具指导：[AI代码审查：工具与验证](/prompt-engineering/ai-code-review?lang=zh)。',
            '**依赖项合理性检查** — 新包必须存在于目标注册表中，并满足最低成熟度信号（下载量、star数、最后发布日期），除非明确加入白名单。已知的投机注册包立即使构建失败。',
            '**API实存验证** — 静态分析以确保所有调用的方法和端点在代码库或已文档化的SDK中存在。可选：在敏感区域限制使用已批准API的白名单。',
            '**模式和性能检查** — 强制执行标准错误处理和日志记录包装器。标记在大数据路径上具有明显O(n²)/O(n³)模式的异常高复杂度新增函数。',
          ],
          callouts: [
            { type: 'best-practice', label: '覆盖率阈值', text: '对AI生成行应用比遗留代码更严格的覆盖率阈值。遗留代码60%覆盖率可能可以接受；新AI生成代码在合并前应达到≥80%。' },
          ],
        },

        concreteChecksConclusion: {
          content: [
            '其中许多可以作为CI系统中的策略即代码、自定义linter或专用插件来实现。',
          ],
        },

        hallucinationHandling: {
          id: 'hallucination-handling',
          title: '如何在流水线中显式处理幻觉？',
          content: [
            '**幻觉是结构性缺陷类别，不是临时性错误；您的构建系统应假设它们会发生，并专注于检测和遏制。** 这种心态决定了您优先考虑哪些工具和测试。',
            '实用策略：',
          ],
          items: [
            '**基于执行的验证** — 不要仅依赖编译。运行针对AI生成代码的有针对性测试，使用边界情况、无效输入和随机化数据进行压力测试。基于属性的测试对于暴露逻辑和映射错误特别有效。',
            '**用真实上下文进行接地** — 使用AI提议变更时，提供真实的模式、API规范和配置文件作为上下文。这减少了发明函数和参数的可能性，并使检测生成代码何时偏离现实变得更容易。',
            '**混合静态 + AI分析** — 将传统静态分析与AI审查相结合。静态工具擅长数据流和污点分析；AI审查者擅长读取意图并发现更高层次的需求不匹配。',
            '**多模型交叉检查** — 对于重要变更，让一个模型生成代码，另一个模型审查它。审查者不同意或表示低置信度的地方可以标记供人工关注。',
            '**幻觉黑名单和规则** — 当您发现反复出现的幻觉模式（假包名、编造的标志、发明的端点）时，将它们编码为显式规则。未来出现则触发自动构建失败或强烈警告。',
          ],
          callouts: [
            { type: 'warning', label: '编译 ≠ 正确性', text: 'AI生成函数可以干净地编译、通过所有现有测试，却仍然悄悄误实现需求。始终用至少一个在逻辑被反转或微妙错误时会失败的测试来测试新代码路径。' },
          ],
        },

        hallucinationHandlingConclusion: {
          content: [
            '通过将幻觉视为预期的缺陷类别，您可以设计能可靠捕获它们的测试和门控。',
          ],
        },

        developerFriendly: {
          id: 'developer-friendly',
          title: '如何让AI质量检查对开发者友好？',
          content: [
            '**质量门控只有在开发者信任它们时才有效；AI感知检查应该透明、清晰解释失败，并避免嘈杂的误报。** 高误报率会导致团队完全禁用或绕过门控。',
            '指导原则：',
          ],
          items: [
            '**解释每次失败的"原因"** — 错误消息应准确显示哪行或哪个包违反了哪个规则，并最好链接到如何修复或覆盖的文档。',
            '**区分硬阻止和警告** — 对于新规则，以"警告"模式开始以收集数据并减少挫败感；只有在信噪比可接受后才升级为"阻止"。',
            '**允许有文档记录的覆盖** — 一些AI生成的变更会是有意为之的风险或异常情况。提供有文档记录的覆盖机制（例如带标签的注释加上工单链接），让团队在适当时可以继续推进，同时留下审计记录。',
            '**衡量误报并迭代** — 跟踪门控阻止有效变更或强制不必要工作的频率。在需要时调整阈值、精化规则或缩小范围。',
            '**公开AI专用仪表板** — 显示捕获了多少与AI生成代码相关的问题、避免了多少漏洞，以及有多少次幻觉依赖项被阻止。这建立了额外门控值得付出摩擦的信心。',
          ],
          callouts: [
            { type: 'pro-tip', label: '警告优先推出', text: '始终在使新门控变为阻止之前，以警告模式运行至少一个迭代周期。这让您能够衡量信噪比并在开始阻止构建之前建立开发者信任。' },
          ],
        },

        developerFriendlyConclusion: {
          content: [
            '一个好的AI感知流水线应该感觉像一张安全网，而不是一个任意的障碍赛道。',
          ],
        },

        example: {
          id: 'example',
          title: '示例：将传统门控扩展到AI生成代码',
          content: [
            '**您可以通过在现有"测试+覆盖率+lint"门控之上叠加针对性检查，将其演进为AI感知门控。** 无需完全重建流水线。',
            '基准门控：',
          ],
          items: [
            '运行单元测试。',
            '强制执行最低总体覆盖率。',
            '运行linter和格式化工具。',
          ],
        },

        exampleExtension: {
          content: ['AI感知扩展：'],
          items: [
            '**新增/更改代码覆盖率：** 对新行要求比遗留代码更高的覆盖率阈值。',
            '**依赖项检查：** 如果新包未知、未经批准或明显可疑则失败。',
            '**API实存验证：** 扫描代码库或官方SDK版本中不存在的函数或端点调用。',
            '**安全扫描：** 要求更改文件上零高危/严重问题。',
            '**人工审查标签：** 如果AI在文件中贡献了超过N行，在合并前要求高级开发者的明确人工批准。',
          ],
        },

        exampleConclusion: {
          content: [
            '这种方法避免了完全重建流程，同时直接针对AI特有的风险。',
          ],
        },

        howToStart: {
          id: 'how-to-start',
          title: '分步指南：如何设置AI感知质量检查？',
          numberedItems: [
            '**添加依赖项验证步骤：检查所有导入的包在包管理器中是否真实存在。** 在运行测试之前，验证import或require语句中提到的每个包是否存在于npm、pip、PyPI或内部注册表中。AI幻觉经常发明听起来合理的包名。',
            '**扫描常见幻觉模式：不存在的API、签名错误的函数和虚构的配置标志。** 运行检查每个API调用是否与实际SDK或服务文档匹配的linter或自定义脚本。标记对不存在方法的调用。',
            '**添加安全重点门控：SAST加上对常见AI生成漏洞的显式检查。** 使用Bandit（Python）、ESLint-Security（JavaScript）或Snyk等工具。同时扫描SQL注入模式、过于宽松的CORS规则、硬编码凭据和不安全的反序列化。',
            '**对关键路径（认证、支付、基础设施）使用多模型代码验证。** 在合并之前，通过多个AI模型询问"这段代码是否符合预期逻辑？是否存在安全风险？"标记分歧。',
            '**要求以逻辑对比语法为重点的人工代码审查。** 自动门控捕获明显的幻觉。代码审查者应验证：这做了预期的事吗？边界情况处理了吗？方法适合该用例吗？',
          ],
        },

        commonMistakes: {
          id: 'common-mistakes',
          title: '应避免的常见错误',
          mistakes: [
            {
              mistake: '在质量风险上将AI生成代码等同于人工编写代码',
              problem: '标准lint和单元测试阈值是针对人工编写和审查的代码校准的。AI生成代码可以通过所有传统门控，同时包含幻觉API、伪造包和悄悄错误的逻辑。',
              fix: '对AI生成或AI修改的代码应用单独的风险等级。使用更严格的覆盖率阈值（新行≥80%）、对所有AI修改文件进行安全扫描，并添加依赖项存在性检查。',
            },
            {
              mistake: '将编译作为正确性的证明',
              problem: 'AI生成代码即使调用不存在的方法、导入未注册的包或实现违反需求的逻辑，也能干净地编译。编译是必要条件但不是充分条件。',
              fix: '添加运行时验证：基于属性的测试、边界情况测试，以及在逻辑微妙错误时会失败的集成测试。能验证方法签名的SDK感知linting比单独的类型检查更有效。',
            },
            {
              mistake: '不检查建议的包是否真实存在于注册表中',
              problem: '语言模型在不知道正确名称时会频繁发明听起来合理的包名。在幻觉包名上运行npm install或pip install的开发者可能会安装攻击者后来注册的恶意包（投机注册）。',
              fix: '运行依赖项验证步骤，为每个新包导入调用npm/PyPI/Maven注册表API。如果包无法解析或没有发布历史，则使构建失败。',
            },
            {
              mistake: '在没有数据的情况下以阻止模式启动新门控',
              problem: '作为硬阻止引入的新门控会遇到误报，造成摩擦并侵蚀开发者信任。团队会寻找变通方法或要求删除门控。',
              fix: '以警告模式运行每个新门控至少一个迭代周期。衡量信噪比，修复误报，只有在门控被证明可靠时才升级为阻止。',
            },
            {
              mistake: '省略AI专用仪表板和指标',
              problem: '如果不了解捕获了多少幻觉相关问题，团队就无法证明AI感知门控的开销是合理的，也无法有效调整它们。',
              fix: '对CI进行检测，按类别（依赖项幻觉、API幻觉、安全发现、逻辑标志）标记问题。公开每个类别每周捕获问题的摘要。',
            },
          ],
        },

        regionalContext: {
          id: 'regional-context',
          title: '地区注意事项',
          content: [
            '**AI代码质量检查的监管要求因部署地区而异。** 以下三个维度对使用AI辅助开发的团队最为相关。',
          ],
          items: [
            '**中国（数据安全法2021年 / 个人信息保护法）：** 《数据安全法》和《个人信息保护法》（PIPL）要求处理个人信息的代码在部署前经过审查和验证。AI生成代码涉及个人数据处理的模块需强制人工安全审查；依赖项需全量可追溯；SAST扫描结果建议存档备查。在金融、医疗和政务系统中，将AI代码质量门控的检测记录纳入数据安全合规文档尤为重要。',
            '**亚太地区（数据跨境规则）：** 亚太各司法管辖区的数据跨境规制（日本个人信息保护法、新加坡PDPA、韩国PIPA等）对处理个人数据的系统代码质量标准有影响。对处理敏感数据的代码路径建议采用本地化审查流程，并对所有第三方依赖项进行全量验证，以满足数据驻留要求。',
            '**企业部署（金融/医疗/法律）：** 受严格监管的行业对AI生成代码有更高要求。金融机构需要完整的审计记录以满足内部控制要求。医疗机构需针对认证和患者数据代码路径设置强制人工审查门控。法律服务需要对客户数据相关依赖项进行全量验证。所有行业建议将"变更文件上零新增高危/严重漏洞"设为SAST门控标准。',
          ],
        },

        faqSection: {
          id: 'faq',
          title: '常见问题',
          faqs: [
            {
              q: 'AI感知构建质量检查是什么？',
              a: 'AI感知构建质量检查是专门用于捕获AI生成代码特有故障模式的CI/CD门控：幻觉API、伪造包名，以及能编译但违反需求的逻辑错误。与传统lint和覆盖率门控不同，这些检查会验证引用的包是否真实存在，以及调用的API是否与实际SDK或服务定义匹配。',
            },
            {
              q: 'AI生成代码与人工编写代码在质量风险上有何不同？',
              a: 'AI生成代码引入了人工编写代码中极少出现的结构性故障模式：在任何注册表中都不存在的包名、SDK版本中不存在的方法调用，以及通过表面测试但悄悄误实现需求的代码。传统门控能检测语法错误和覆盖率缺口，但并非为自信的幻觉而设计。',
            },
            {
              q: '如何在CI/CD流水线中检测幻觉包名？',
              a: '在运行测试前，添加一个依赖项验证步骤，检查每个导入的包是否在目标注册表（npm、PyPI、Maven等）中实际存在。将其实现为调用注册表API的预提交钩子或CI任务。无法解析或没有发布历史的包应立即使构建失败。',
            },
            {
              q: '应该为AI生成代码添加哪些安全检查？',
              a: '对每个更改的文件运行Bandit（Python）、ESLint-Security（JavaScript）或Snyk等SAST工具。要求AI修改的代码路径上零新增高危/严重问题。对涉及认证、支付、管理功能或个人数据的AI生成代码强制要求人工安全审查。',
            },
            {
              q: '幻觉API与运行时错误相同吗？',
              a: '幻觉API比简单的运行时错误更隐蔽。它指模型发明了实际SDK或服务中不存在的方法、参数或配置选项——代码看起来正确并通过编译，但在运行时抛出异常或悄悄降级行为。运行时错误是症状，幻觉检测则在流水线更早阶段捕获根本原因。',
            },
            {
              q: '能用AI工具来审查AI生成的代码吗？',
              a: '可以。多模型交叉检查是一种有效模式：一个模型生成代码，另一个模型审查它。审查模型表示不确定或与生成者意见不同的地方可以标记供人工关注。这种方法在认证、支付处理或基础设施配置等高风险路径上效果最佳。',
            },
            {
              q: '如何在不拖慢团队的情况下引入AI感知质量检查？',
              a: '在阻止合并之前先以警告模式启动所有新规则以收集数据。在错误消息中清晰解释失败原因并附上文档链接。允许有文档记录的覆盖机制，以便团队在不寻常但合理的情况下继续推进同时留下审计记录。跟踪每个门控的误报率，在摩擦超过价值时调整阈值。',
            },
            {
              q: '什么是slopsquatting，它为什么对AI辅助开发有危险？',
              a: 'Slopsquatting（投机注册）是指AI模型发明了一个听起来合理但实际上不存在于任何注册表中的包名。如果攻击者随后以该名称注册恶意代码，任何运行npm install或pip install的开发者都会执行攻击者的payload。这种风险在AI辅助开发中尤为突出，因为开发者在安装之前通常不会逐一核实建议的包。',
            },
            {
              q: '中国《数据安全法》（2021年）如何影响AI生成代码的质量检查要求？',
              a: '中国2021年《数据安全法》和《个人信息保护法》（PIPL）要求处理个人信息的代码在部署前经过审查和验证。对于AI生成的代码，这意味着：涉及个人数据处理的模块需要强制人工安全审查；依赖项必须全量可追溯；SAST扫描结果需存档备查。建议将AI代码质量门控的检测结果纳入数据安全合规记录，特别是在金融、医疗和政务系统中。',
            },
            {
              q: '金融、医疗和法律行业如何通过AI代码质量检查满足合规要求？',
              a: '受严格监管的行业对AI生成代码有更高要求。金融机构需要AI代码审查的完整审计记录，以满足内部控制要求。医疗行业需要针对认证和个人数据处理代码的强制人工审查门控，以保障患者安全。法律服务需要对客户数据相关代码路径进行依赖项全量验证。所有行业建议将"变更文件上零新增高危/严重漏洞"设为SAST门控标准，并覆盖所有AI修改的文件。',
            },
          ],
        },

        relatedReading: {
          id: 'related-reading',
          title: '相关阅读',
          items: [
            '[用AI编写更好的代码](/prompt-engineering/write-better-code-with-ai?lang=zh) — 如何构建提示以生成可审查的代码生成输出',
            '[AI代码审查：工具与验证](/prompt-engineering/ai-code-review?lang=zh) — 使用AI审查代码质量和安全性',
            '[什么是提示工程？](/prompt-engineering/what-is-prompt-engineering?lang=zh) — 可靠AI输出的基础原则',
            '[提示注入与安全](/prompt-engineering/prompt-injection-and-security?lang=zh) — 影响AI辅助开发流水线的攻击模式',
            '[AI幻觉：如何阻止它们](/prompt-engineering/ai-hallucinations-how-to-stop?lang=zh) — 减少AI生成输出中幻觉的技术',
            '[如何评估提示质量](/prompt-engineering/how-to-evaluate-prompt-quality?lang=zh) — 适用于代码生成质量的评估框架',
          ],
        },

        sources: {
          id: 'sources',
          title: '参考来源',
          items: [
            '[OWASP大型语言模型应用Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — OWASP, 2025年。LLM生成代码和AI辅助开发特有的安全风险。',
            '[GitHub CodeQL文档](https://codeql.github.com/docs/) — GitHub。用于AI修改代码路径安全扫描的静态分析引擎。',
            '[Snyk开源安全状态报告](https://snyk.io/reports/state-of-open-source-security/) — Snyk, 2024–2025年。关于依赖项漏洞和供应链风险的年度报告。',
            '[NIST AI风险管理框架（AI RMF 1.0）](https://airc.nist.gov/Home) — NIST, 2023年。包括代码质量和治理的AI系统风险管理框架。',
          ],
        },
      },
    },
  };
