# Next step

Three tasks, in this order. Stop after task 1 and report before starting task 2.

---

## Task 1 — can the 250 schema-only gaps be derived instead of authored?

**Do this before writing a single translation.** It may delete most of the
remaining work.

`itemListSchema` is now 219 of the 250 schema-only instances. Earlier inspection
showed it is **derived** from `article.sections` in the `power-local-llm`,
`smart-home` and `balcony-solar` page-helpers, but **authored as a field** in
`blog`.

Determine which it is in `prompt-engineering` and `local-llms` — the two clusters
carrying essentially all of the debt.

Then answer, for each of the two fields:

| Field | Instances | Question |
|---|---|---|
| `itemListSchema` | 219 | Is the data it encodes already present in the translated section content? If so it can be generated at render time, exactly as the three other clusters already do. |
| `howToName` | 31 | Does it map to a section title that is already translated? If so it is derivable, not authorable. |

**Report the split:**

- **Derivable** — the information already exists in translated form; a code
  change generates it. One fix, not N.
- **Genuinely authored** — carries information that exists nowhere else and must
  be written per locale.

If `itemListSchema` turns out derivable in these two clusters, propose the change
that brings them in line with the pattern `power-local-llm` already uses, rather
than writing 219 hand-authored entries. Do not implement it yet — show me the
approach first.

**Do not start writing schema entries either way until I've seen this.**

---

## Task 2 — resume visible-content backport, rows 2–10

Against the **corrected** `TRANSLATION_GAPS_WORKLIST.md`. Same procedure as
`TRANSLATION_GAP_FIX_SPEC.md`: translate the existing EN source, canonical field
position, `pt` is `pt-BR`, `ar` is RTL, bump `dateModified` only on locales you
touch, never touch the `en:` block.

343 visible instances is the real target. Report after row 10.

**Also tell me the row number where per-file visible instances drop below 5.**
That is where the work stops being worth batching — below it, fix
opportunistically when an article is next touched for another reason.

Branch: `fix/translation-content-gaps`, as now. Don't open the PR until #217
lands and you've rebased.

---

## Task 3 — bring `docs/TRANSLATION_SPEC.md` fully current

Not piecemeal. It is mandatory reading for every future translation pass, so a
half-corrected document is a trap — worse than an obviously stale one, because
the corrected sections make the stale ones look trustworthy.

One pass, one commit, `docs:` prefix:

- **Sections 1 and 1b** — documents 5 languages (en/de/fr/ja/zh). The site has 9.
- **The ~20 remaining `?lang=XX` examples** in Section 2, 8, 9, 14.5, 14.8 →
  path-prefix routing. Section 9's concept is correct; only its URL syntax is
  dated.
- **Both `git push origin main` instructions** (~line 88 and ~485) → PR workflow.
  PR #39 is a CI gate that direct pushes bypass. This is a workflow-safety
  defect, not a routing one.

Flag anything else in the document you don't trust rather than silently leaving
it.

---

## Report back

1. The derivable-vs-authored split for the 250 schema instances, with the
   proposed approach if derivable. **Stop here.**
2. Then rows 2–10 completed, new totals, and the row number where visible
   instances drop below 5.
3. Then `TRANSLATION_SPEC.md` current, with anything else you flagged.
