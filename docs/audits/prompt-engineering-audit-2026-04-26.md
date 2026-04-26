# Prompt Engineering Content Audit — 2026-04-26

## Summary
- 51 articles defined
- Total language blocks: 184 (en: 51, de: 37, fr: 33, ja: 32, zh: 31)
- 21 articles with incomplete language coverage
- 1 cosmetic indent bug (fixed in commit prior to this doc)
- 2 cosmetic 8-space-indent language blocks (functional, deferred)

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
Type signature is `Record<string, Record<Language, PEArticle>>` (no Partial). Despite this, 21 articles compile with missing languages — TypeScript inference on object literals this large appears lenient. Post-refactor, per-article files will let TypeScript enforce strict typing properly.

## Translation gaps (21 articles)

### EN-only (13 articles)
build-a-prompt-library, prompt-with-images, tokens-costs-limits, write-better-code-with-ai, seo-meets-ai, teaching-with-ai, extract-and-summarise, control-the-output, your-brand-voice-ai, build-quality-checks, specs-framework, how-to-evaluate-prompt-quality, prompt-evaluation-metrics

### EN + DE only (3 articles)
system-prompt-vs-user-prompt, ape-framework, structured-output-json-mode

### Missing 2 langs (1 article)
ai-powered-research (missing ja, zh)

### Missing 1 lang (4 articles)
- ai-limitations-what-llms-cant-do (missing zh)
- single-prompt-method (missing ja)
- prompt-chaining (missing zh)
- self-consistency-prompting (missing fr)

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
- 21 translation gaps: deferred (cheap to fix post-refactor on split files)
- 8-space cosmetic blocks: deferred (parser must handle, no fix needed)
- Backup file `content.ts.backup.de`: pending deletion
