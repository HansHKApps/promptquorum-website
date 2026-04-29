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
    fr: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    ja: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    zh: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
