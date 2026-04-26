# PE Content Quality Audit — 2026-04-26

Discovered during full-site QA pass on Vercel preview (400 URLs tested, all HTTP 200).
None of these issues are caused by the content.ts refactor — they are pre-existing.

## Stub/Coming-Soon articles (25 slugs × 5 langs = 125 URLs)

These articles return HTTP 200 but serve placeholder content. Likely planned but unwritten.

### "Coming Soon" placeholders (~200 chars body)
- build-your-own-prompt-framework
- prompting-across-languages
- how-to-reduce-prompt-brittleness
- prompt-review-workflow-for-teams
- prompt-version-control-workflows
- prompt-documentation-templates
- prompt-governance-in-production
- prompt-security-tools-injection-testing
- prompt-audit-and-regression-risk
- best-tools-structured-output-json
- prompts-for-reliable-structured-data
- multi-model-prompt-testing-workflows
- prompt-library-management-for-teams
- prompts-to-repeatable-workflows
- prompt-engineering-for-content-teams
- prompt-engineering-for-developers-workflow
- prompt-engineering-for-support-operations
- prompt-framework-selection-for-teams
- prompt-engineering-setup-small-teams

### Truncated stubs (~400-580 chars, abbreviated titles)
- best-prompt-optimization-tools-for-teams (title: "Tools for Teams")
- braintrust-vs-prompthub-vs-vellum-vs-promptfoo (title: "Comparison")
- promptlayer-vs-mirascope-vs-promptperfect (title: "Tools")
- prompt-engineering-vs-fine-tuning (title: "Decision")
- prompt-engineering-vs-rag-decision (title: "Guide" en / "RAG" de+fr+ja+zh)
- manual-vs-automated-prompt-optimization (title: "Optimization")

### Recommended action
Either:
- Write real content for these (highest value if they have organic SEO)
- Remove them from slugs.ts so URLs return proper 404
- Add `noindex` directive so Google ignores them

## i18n quality bugs (zh + glossary fallbacks)

### zh translation quality issues
Several `?lang=zh` URLs serve English titles instead of localized ones. Examples:
- `what-is-prompt-engineering?lang=zh` → "What is Tip Project? A Complete Beginner's Guide for 2026"
- `fundamentals-of-prompt-optimization?lang=zh` → English title
- `5-building-blocks-every-prompt-needs?lang=zh` → "5 Essential Elements for Effective Hints (2026)"
- `ai-hallucinations-why-ai-makes-things-up?lang=zh` → "AI Illusion 2026: Why Does LLM Generate False Information"

Pattern is uneven — `the-single-step-prompt-method?lang=zh` correctly shows Chinese.

### Glossary falls back to English on all non-en langs
`prompt-engineering-glossary` shows English title across de/fr/ja/zh.

### Recommended action
Audit zh translations for terminology consistency. Consider a glossary-of-terms file to enforce consistent rendering of "Prompt Engineering" across all languages.

## Status
All findings deferred to post-canary cleanup. Refactor PR #1 unblocked.
