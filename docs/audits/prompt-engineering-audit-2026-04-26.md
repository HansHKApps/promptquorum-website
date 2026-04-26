# Prompt Engineering Content Audit — 2026-04-26

## Summary
- **61 articles defined** (verified via AST)
- **Total language blocks: 305** — every article has all 5 languages (en/de/fr/ja/zh)
- **0 articles with incomplete language coverage**
- 1 cosmetic indent bug (fixed in commit prior to this doc)
- 2 cosmetic 8-space-indent language blocks (functional, deferred)

> **Note (corrected 2026-04-26):** Initial summary incorrectly claimed 51 articles / 184 language blocks / 21 incomplete articles, based on regex-driven counting that missed 10 articles whose slug keys had non-standard indent. AST audit via ts-morph established the corrected numbers above. See "Regex-missed articles" section below.

## Architecture
| File | Lines | Role |
|---|---|---|
| `content.ts` | 43,240 | Main article content |
| `themes.ts` | 168 | Category definitions (10 categories, supports nested subSections) |
| `slugs.ts` | 103 | URL slug → content key mapping (PE_SLUG_TO_KEY) |
| `pe-translations.ts` | 577 | General PE translation strings |
| `learningPaths.ts` | 274 | Learning paths |
| `contextWindowsTranslations.ts` | 117 | Context window data |
| `imagesWithTextTranslations.ts` | 785 | Images-with-text translations |
| `framework-translations.ts` | 58 | Framework name translations |

## Type definition note
Type signature is `Record<string, Record<Language, PEArticle>>` (no Partial). AST audit confirms all 61 articles have all 5 language keys, so the type IS being enforced — the original audit's "lenient inference" hypothesis was based on undercounted regex data. Post-refactor, per-article files will let TypeScript enforce richer per-article checks (e.g., schema completeness).

## Regex-missed articles (the 10 that escaped the original audit)

These slugs have non-standard indent in source and were missed by the strict 2-space regex used in the original audit. All have full 5-language coverage. They form a coherent "prompt-engineering tools" cluster, likely added in a single batch:

- best-prompt-optimization-tools-teams
- best-prompt-testing-tools
- best-prompt-management-platforms
- braintrust-vs-prompthub-vs-vellum
- promptlayer-vs-mirascope-vs-promptperfect
- prompt-engineering-vs-fine-tuning
- prompt-engineering-vs-rag
- manual-vs-automated-prompt-optimization
- how-to-test-prompts-across-models
- best-prompt-engineering-ides

These should also be checked against `themes.ts` (which appears to omit a "Tools" category — see Architecture section above).

## Translation coverage
**100% across all 61 articles × 5 languages.** No backlog.

## Cosmetic indent anomalies (8-space language blocks)

Two language blocks are functional but indented at 8 spaces instead of the canonical 4:

| Line | Article | Lang | Status |
|---|---|---|---|
| 37350 | persona-prompting | de | Functional, cosmetic only |
| 42108 | prompt-engineering-glossary | ja | Functional, cosmetic only |

**Verification:** brace balance for prompt-engineering-glossary article is 919 opens / 919 closes (balanced). Running depth analysis confirms both blocks are correct structural siblings of other language blocks — just visually offset.

**Decision:** Do not fix in source. Reformatting via prettier across the whole 5MB file would be a separate coordinated decision. The parser must handle indent variability regardless.

## Parser implications for upcoming refactor

1. **Parser MUST be AST-based, not regex-based.** Regex on indent will undercount language blocks and silently drop content. Use TypeScript Compiler API or ts-morph.
2. **Parser MUST handle 8-space-indent language blocks.** AST parsing makes this automatic.
3. **Build gate MUST verify post-split language counts match pre-split counts** per article (catches any drops the AST might miss).

## Status
- Indent fix for `best-pe-tools-2026` slug: applied (prior commit)
- Translation coverage: 100% (no backlog — original "21 gaps" claim was wrong; see Summary note)
- 8-space cosmetic blocks: deferred (parser must handle, no fix needed)
- Backup file `content.ts.backup.de`: deleted (commit `cd2b9d30`)
- `themes.ts` Tools category check: deferred to post-refactor
