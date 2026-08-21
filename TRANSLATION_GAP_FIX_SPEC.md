# Task: backport missing structured content into translations

Source of truth for the work: `TRANSLATION_GAPS_WORKLIST.md` (repo root).
Regenerate it any time with `node scripts/analyze-translation-gaps.mjs`.

## Target

| Tier | Fields | Instances | Target |
|---|---|---|---|
| **A — critical** | `faqs`, `numberedItems`, `contextTable` | 274 | **100%** |
| **B — visible** | `tableFormat` | 109 | **100%** |
| **C — opportunistic** | `itemListSchema`, `howToName` | 164 | only on files already opened for A/B |

A + B = all 383 visible-content instances. A+B+C-on-touched-files clears well
past 75% of the 547 total. **Do not open a file solely for Tier C.**

Tier A is non-negotiable because those are the elements AI retrieval extracts:
Q&A blocks feed `FAQPage`, step lists feed `HowTo`. A locale missing them is
invisible for exactly the queries the article was written to answer.

---

## Mandatory reading before writing a single line

Per `CLAUDE.md`, and in this order:

1. `docs/GEO_WRITING_GUIDELINES.md` — governs all user-facing text
2. `docs/TRANSLATION_SPEC.md` — especially section 9
3. `docs/geo-translation.md`
4. `TRANSLATION_GUIDE-gpt-claude-gemini.md`
5. `docs/ARTICLE_SCAFFOLD_2026.md` — canonical field order and localized FAQ titles
6. `docs/DUPLICATE_FAQPAGE_FIX.md` — **read this before touching any `faqs` field**
7. `PERSONA_PROMPTING_TRANSLATION_REVIEW.md` — prior translation-quality findings

If any of these contradict this spec, they win. Tell me what conflicted.

---

## What this work is, and is not

**Is:** backporting structured sections that exist in the `en:` block and were
never carried into the other locale blocks. The English source already exists.
Each gap is a defined translation task.

**Is not:** authoring new content. If a locale is missing a `numberedItems` that
English has, translate the English one. Do not invent steps, invent FAQ answers,
or improve on the original while you're in there.

The pattern is overwhelmingly `locale(0/N)` — the element was added to English
after the translation pass and never backported. Treat it as a mechanical
carry-forward.

---

## Order of work

Work top-down through `TRANSLATION_GAPS_WORKLIST.md`. It is sorted by total
missing instances, and the distribution is steep — file #1 alone is 96 instances
(25% of all visible debt), and the top 5 are 43%.

**Batch 1: worklist rows 1–10.** Stop and report before going further.
**Batches 2+: 15 rows at a time**, report between each.

Start with `prompt-engineering/context-windows-explained`: 7 `numberedItems`,
3 `tableFormat`, 1 `faqs`, 1 `contextTable` in English, **zero in all 8
locales**.

---

## Per-file procedure

1. **Check the freshness tier first.** Read the `freshness_tier` on the `en:`
   block. If it is `evergreen`, the pre-commit hook
   (`scripts/validate-evergreen-articles.mjs`) rejects concrete model names,
   version numbers, years, and time-sensitive phrasing. If the English content
   you are about to backport contains any of those, **stop on that file and
   report it** — it means either the English is mis-tiered or the content needs
   the generic phrasing treatment described in `CLAUDE.md`. Do not use
   `--no-verify`.
2. Read the English source element in full, including surrounding section
   context.
3. Translate into each missing locale, following the guidelines above.
4. Insert at the **canonical field position** per `docs/ARTICLE_SCAFFOLD_2026.md`
   — matching where it sits in the `en:` block, not appended at the end.
5. `pt` is Brazilian Portuguese — BR vocabulary and spelling, per
   `toOutputLocale()`.
6. `ar` is RTL. Check that inserted tables and numbered lists don't assume LTR
   ordering in their content.
7. While the file is open, fill any Tier C field (`itemListSchema`, `howToName`)
   the worklist flags for that same file.
8. Bump `dateModified` on the locales you changed. `CLAUDE.md`'s discipline is
   "only when content genuinely changes" — this genuinely changes content, so
   bump it. Do not bump locales you didn't touch.

---

## Traps

**Duplicate `FAQPage`.** `docs/DUPLICATE_FAQPAGE_FIX.md` exists because this has
already gone wrong once. Adding `faqs` back into locale blocks can re-trigger it,
particularly where an article also declares an explicit `faqSchema`. Recall the
auto-generation logic: `local-llms/[slug]/page.tsx` only collects
`section.faqs` when there is **no** explicit `faqSchema` — single source of
truth. Verify per file which path applies before adding.

**Freshness tier.** See step 1. This will bite on evergreen articles.

**Localized FAQ section titles.** `docs/ARTICLE_SCAFFOLD_2026.md` specifies these
per locale. Don't leave an English heading above translated Q&A.

**Don't touch the EN block.** This work is additive to non-EN locales only. If
you believe the English needs changing, report it — don't do it.

---

## Validation

After each file, before committing:

```bash
npm run validate-translations
npm run verify:locales
node scripts/validate-locale-schema-parity.mjs   # report-only, expect the count to drop
node scripts/analyze-translation-gaps.mjs        # expect this file to disappear
```

After each batch:

```bash
npm run prebuild
npm run build
```

The pre-commit hook runs `validate-evergreen-articles.mjs` — expect it to catch
tier violations. That is the system working; fix or report, never bypass.

---

## Commits

One commit per file, or per tight group of small files. Conventional format:

```
fix: backport missing structured sections to 8 locales (context-windows-explained)
```

Branch: `fix/translation-content-gaps`. Do not push to `main` — Hans pushes.

Given the volume, keep the branch rebased on `main` as PRs #215–#217 land.

---

## Report back after Batch 1

1. Rows completed, instances closed, and the new totals from
   `analyze-translation-gaps.mjs`.
2. Any file stopped on a freshness-tier conflict, and why.
3. Any file where the `faqSchema` / `section.faqs` distinction changed your
   approach.
4. Anything in the mandatory-reading docs that contradicted this spec.
5. Your estimate of effort per remaining batch, so Hans can decide how far down
   the list is worth going — below roughly row 30 the entries are one or two
   instances each and the return drops sharply.
