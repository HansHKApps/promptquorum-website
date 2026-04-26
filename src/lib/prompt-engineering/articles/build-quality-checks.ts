// Auto-generated from src/lib/prompt-engineering/content.ts
// Slug: build-quality-checks
// Generated: 2026-04-26T09:45:32.245Z

import type { Language } from "@/lib/blog/blogContent";

import type { PEArticle } from "@/lib/prompt-engineering/content";

export const article: Record<Language, PEArticle> = {
    en: {
      freshness_tier: 'semi_annual',
      theme: 'Fundamentals',
      title: 'Build Quality Checks With AI In Mind: Detecting Hallucinations and Fabricated Dependencies',
      intro: 'AI-generated code fails traditional quality gates at scale: a large share of AI-written programs contain exploitable vulnerabilities, and a non-trivial fraction of AI-suggested packages or APIs simply do not exist. To keep these hallucinations and AI-specific failure modes out of production, build quality checks must evolve from generic "tests + coverage" gates into AI-aware pipelines that detect unreal APIs, fake dependencies, and confident-but-wrong logic before merge.',
      publishDate: '2026-03-24',
      readTime: '10 min read',

      seoTitle: 'Build Quality Checks for AI 2026',

      metaDescription: 'Quality assurance for LLM outputs: test coverage, metrics, evaluation. Prevent hallucinations and ensure consistency at scale.',

      educationalLevel: 'Beginner',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: 'Build Quality Checks With AI In Mind: Detecting Hallucinations and Fabricated Dependencies',
        description: 'Design CI/CD quality gates for AI-generated code. Includes hallucination detection, dependency validation, security gates, and developer-friendly practices.',
        datePublished: '2026-03-24',
        dateModified: '2026-03-24',
        author: { '@type': 'Person', name: 'Hans Kuepper', url: 'https://www.promptquorum.com/about' },
        publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com', logo: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/logo.svg' } },
        image: { '@type': 'ImageObject', url: 'https://www.promptquorum.com/api/og/build-quality-checks', width: 1200, height: 630 },
        keywords: ['quality gates', 'CI/CD', 'AI hallucinations', 'code review', 'security scanning', 'dependency validation', 'build checks'],
        mentions: [
          { '@type': 'SoftwareApplication', name: 'SAST' },
          { '@type': 'SoftwareApplication', name: 'DAST' },
        ],
      },
      sections: {

        definition: {
          title: 'What Changes When AI Writes Your Code',
          content: [
            'When AI writes code, quality gates must defend against a new class of problems: code hallucinations, fabricated dependencies, and patterns that look correct but fail at runtime or under attack.',
            'Observed issues with AI-generated code include:',
          ],
          items: [
            '**Security vulnerabilities:** studies show a large fraction of AI-generated solutions to common programming problems contain exploitable bugs, especially around input validation, authentication, and cryptography.',
            '**Fabricated packages:** language models sometimes recommend libraries or package names that do not exist in the ecosystem, opening the door for "typosquatting/slopsquatting" attacks if attackers later register those names.',
            '**Hallucinated APIs and functions:** models can invent methods, parameters, or configuration flags that look plausible but are absent from your actual SDKs or internal services.',
            '**Requirement-conflicting logic:** code that compiles and passes superficial tests but does the wrong thing compared to the original requirements (for example, mixing up `amountDue` and `amountPaid`).',
            '**Unsafe defaults:** use of insecure patterns such as broad CORS rules, permissive JWT validation, weak password policies, or debug logging of sensitive data.',
          ],
        },

        definitionConclusion: {
          content: [
            'Traditional checks (lint, unit tests, coverage thresholds) catch some of this, but they were not designed for confidently hallucinated behaviour.',
          ],
        },

        hallucinations: {
          title: 'Types of Hallucinations Your Gates Must Catch',
          content: [
            'Code hallucinations are not only syntax errors; they include logical, structural, and dependency-level fabrications that often pass superficial checks.',
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
        },

        hallucinationsConclusion: {
          content: [
            'A robust build system should assume these will appear wherever AI is allowed to write or refactor code.',
          ],
        },

        architecture: {
          title: 'An AI-Aware CI/CD Quality Gate Architecture',
          content: [
            'AI-aware build quality checks should form a multi-stage gate: pre-commit filters, PR-level policy checks, deep analysis in CI, and post-deployment monitoring.',
            'A practical architecture:',
          ],
          items: [
            '**Pre-commit / local hooks** — Enforce baseline formatting and linting. Optionally forbid direct committing of large AI-generated diffs without a short human-written summary of changes.',
            '**Pull request quality gate** — Add AI-specific checks on top of normal ones: standard checks (unit tests, coverage thresholds, style, conventional static analysis) plus AI-aware checks (detect unknown or non-existent packages, verify that all referenced APIs exist, flag changes that introduce new endpoints without tests).',
            '**Deeper CI analysis** — Run extended test suites and property-based tests for code touched by AI. Apply security scanners (SAST/DAST) with a focus on newly modified code paths. Analyse complexity and potential performance hotspots in AI-generated regions.',
            '**Pattern and drift detection** — Compare new code against established project patterns: architecture, error handling, logging. Flag code that diverges strongly from your usual idioms.',
            '**Security and dependency gates** — Require "no new high or critical vulnerabilities" from your security tooling on changed lines. Block builds if new dependencies are unapproved, unpinned, or from suspicious sources.',
            '**Runtime monitoring and feedback** — Track error rates, latency, and resource usage for endpoints recently modified by AI-assisted changes. Feed incidents back into prompts and quality rules to harden gates over time.',
          ],
        },

        architectureConclusion: {
          content: [
            'This layered approach treats AI-generated code as a first-class risk category rather than just "more code".',
          ],
        },

        concreteChecks: {
          title: 'Concrete Checks to Add for AI-Generated Code',
          content: [
            'To make quality gates AI-aware, add explicit checks for hallucinations, dependency fabrication, and unsafe defaults on top of your existing test and coverage rules.',
            'Examples of enforceable policies:',
          ],
          items: [
            '**Tests and coverage** — Minimum coverage for new or changed lines (for example, ≥80%). Mandatory tests for all new public endpoints, background jobs, or exported functions.',
            '**Security gates** — No new high/critical findings from SAST or dependency scanners on changed code. Require manual review for AI-generated code that touches authentication, payments, admin features, or personal data.',
            '**Dependency sanity checks** — New packages must exist in the target registry, meet minimum popularity or maturity signals (downloads, stars, last publish date) unless explicitly whitelisted. Banned or risky packages (for example, known typosquats) fail the build immediately.',
            '**API reality checks** — Static analysis to ensure all invoked methods and endpoints exist in your codebase or documented SDK. Optional: restrict usage to an allowlist of approved APIs in sensitive areas.',
            '**Pattern and performance checks** — Enforce standard error-handling and logging wrappers. Flag newly added functions with unusually high complexity or obvious O(n²)/O(n³) patterns on large data paths.',
          ],
        },

        concreteChecksConclusion: {
          content: [
            'Many of these can be implemented as "policy as code" in your CI system, custom linters, or specialised plugins.',
          ],
        },

        hallucinationHandling: {
          title: 'Handling Hallucinations Explicitly in the Pipeline',
          content: [
            'Hallucinations are structural, not temporary bugs; your build system should assume they happen and focus on detection and containment.',
            'Practical strategies:',
          ],
          items: [
            '**Execution-based verification** — Don\'t rely on compilation alone. Run targeted tests that stress AI-generated code with edge cases, invalid inputs, and randomised data. Property-based tests are particularly effective at flushing out logic and mapping errors.',
            '**Grounding with real context** — When using AI to propose changes, supply real schemas, API specs, and configuration files as context. This reduces the chance of invented functions and parameters and makes it easier to detect when generated code deviates from reality.',
            '**Hybrid static + AI analysis** — Combine conventional static analysis with AI-based review. Static tools are good at data-flow and taint analysis; AI is good at reading intent and spotting higher-level requirement mismatches. Use both and require agreement on risk-critical code.',
            '**Multi-model cross-checking** — For important changes, have one model generate code and a different model review it. Areas where reviewers disagree or express low confidence can be flagged for human attention.',
            '**Hallucination blacklists and rules** — As you discover recurring hallucinated patterns—fake package names, made-up flags, made-up endpoints—encode them as explicit rules. Future appearances then cause an automatic build failure or at least a strong warning.',
          ],
        },

        hallucinationHandlingConclusion: {
          content: [
            'By treating hallucinations as an expected class of defect, you can design tests and gates that reliably catch them.',
          ],
        },

        developerFriendly: {
          title: 'Making AI Quality Checks Developer-Friendly',
          content: [
            'Quality gates only work if developers trust them; AI-aware checks should be transparent, explain failures clearly, and avoid noisy false positives.',
            'Guidelines:',
          ],
          items: [
            '**Explain the "why" for each failure** — Error messages should show exactly which line or package violated which rule, and ideally link to documentation on how to fix or override it.',
            '**Differentiate hard blocks from warnings** — For new rules, start in "warning" mode to gather data and reduce frustration; promote to "blocking" only once signal-to-noise is acceptable.',
            '**Allow documented overrides** — Some AI-generated changes will be consciously risky or unusual. Provide a documented override mechanism (for example, a labelled comment plus a ticket link) so teams can proceed when appropriate while leaving an audit trail.',
            '**Measure false positives and iterate** — Track how often a gate blocks valid changes or forces unnecessary work. Adjust thresholds, refine rules, or narrow scope where needed.',
            '**Expose AI-specific dashboards** — Show how many issues were caught related to AI-generated code, how many vulnerabilities were avoided, and how often hallucinated dependencies were blocked. This builds confidence that the extra gates are worth the friction.',
          ],
        },

        developerFriendlyConclusion: {
          content: [
            'A good AI-aware pipeline feels like a safety net, not an arbitrary obstacle course.',
          ],
        },

        example: {
          title: 'Example: Extending a Classic Build Gate for AI',
          content: [
            'You can evolve an existing "tests + coverage + lint" gate into an AI-aware gate by layering a few targeted checks on top.',
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
            '**Manual review label:** if AI contributed more than N lines in a file (for example, detected via commit metadata or comments), require explicit human approval from a senior developer before merge.',
          ],
        },

        exampleConclusion: {
          content: [
            'This approach avoids a complete rebuild of your process while directly targeting AI-specific risks.',
          ],
        },

        tldr: {
          title: 'Key Takeaways',
          isTldr: true,
          items: [
            'AI-generated code introduces new failure modes—hallucinated APIs, fabricated dependencies, and requirement-breaking logic—that traditional quality gates were not designed to catch.',
            'Treat hallucinations as a structural risk: assume they will happen wherever AI is allowed to write or refactor code, and design tests and policies to detect them.',
            'An AI-aware gate architecture layers pre-commit checks, PR-level policies, deeper CI analysis, security and dependency gates, and runtime feedback.',
            'Concrete AI-specific checks include dependency existence and maturity checks, API reality checks, higher coverage thresholds on new code, and stricter security gates on AI-touched files.',
            'Developer-friendly gates explain failures clearly, differentiate warnings from hard blocks, support documented overrides, and are tuned to minimise noisy false positives.',
          ],
        },

        relatedReading: {
          title: 'Related Reading',
          items: [
            '[Write Better Code With AI](/prompt-engineering/write-better-code-with-ai) — how to structure prompts for code generation that produces reviewable output',
            '[AI Code Review: Tools and Verification](/prompt-engineering/ai-code-review) — using AI to review code quality and security',
            '[What Is Prompt Engineering?](/prompt-engineering/what-is-prompt-engineering) — foundational principles for reliable AI output',
          ],
        },

        howToStart: {
          title: 'How to Build AI-Aware Quality Checks',
          numberedItems: [
            '**Add a dependency validation step: check that all imported packages actually exist in your package manager.** Before running tests, verify that every package mentioned in `import` or `require` statements exists in npm, pip, PyPI, or your internal registry. AI hallucinations often invent plausible-sounding package names.',
            '**Scan for common hallucination patterns: non-existent APIs, functions with wrong signatures, and fabricated config flags.** Run a linter or custom script checking if every API call matches the actual SDK or service documentation. Flag calls to methods that don\'t exist.',
            '**Add a security-focused gate: SAST (Static Application Security Testing) plus explicit checks for common AI-generated vulnerabilities.** Use tools like Bandit (Python), ESLint-Security (JavaScript), or Snyk. Also scan for: SQL injection patterns, overly broad CORS rules, hardcoded credentials, insecure deserialization.',
            '**Use multi-model code validation for critical paths (auth, payments, infrastructure).** Before merging, run your code through ChatGPT, Claude, and Gemini asking \'Does this code match the intended logic? Any security risks?\' Flag divergence.',
            '**Require human code review with focus on logic vs. syntax.** Automated gates catch obvious hallucinations (missing packages, wrong methods). Code reviewers should verify: Does this do what was intended? Are edge cases handled? Is the approach appropriate for the use case?',
          ],
        },

      },
    },

    de: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    fr: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    ja: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
    zh: { theme: 'Fundamentals', title: '', intro: '', publishDate: '2026-03-24', readTime: '', sections: {} },
  };
