# Next step — stop the backport, fix the code bug, get traffic data

The section-recreation work is on hold. What you found in rows 2–9 is not a
field-level gap — it is that the locales are materially different articles.
That is a content-strategy decision with a permanent maintenance cost attached,
not a bug queue to grind through.

Work these in order. Steps 1 and 2 are unambiguous. Step 3 is the one that
decides everything after it.

---

## 1. Fix the `howToName` fallback — live production defect

Both `local-llms/jsonld.tsx` and `prompt-engineering/jsonld.tsx` compute:

```ts
article.howToName ?? enArticle.howToName
```

When a locale lacks the field, the schema emits **the English string** on a
non-English page. That is a Zero-English-Rule violation shipping right now, on
all 31 instances, independent of the backport project entirely.

Change the fallback chain to resolve to the section's own already-translated
title, and never to `enArticle`. If no translated title exists either, omit the
`HowTo` node rather than emitting English — a missing node is better than a
wrong-language one.

- Own commit, own concern: `fix: stop English howToName leaking into non-EN schema`
- Verify on a built page in two locales that the emitted `HowTo.name` is in the
  page's language
- This closes 11 of the 31 instances with no quality loss and fixes the language
  leak on all 31

---

## 2. Close row 10

`ai-powered-research` — 2 missing FAQ questions, `ja`/`zh`. Genuinely small.
Do it, commit, done.

---

## 3. Pull GSC traffic data — this gates rows 2–9

Do not recreate a single section until this is answered.

For every URL affected by worklist rows 2–9, report **impressions and clicks
over the last 90 days, broken out per locale**. You have the GSC service account
and `searchanalytics.query` already set up.

Present it as: article, locale, impressions, clicks, and the number of missing
sections from the worklist.

**Why this gates the work:** recreating four provider-comparison sections in
French is worth doing if `/fr/local-llms/cloud-gpu-rental-comparison-2026` gets
demand, and worthless if it does not. Those sections carry pricing, GDPR claims
and benchmark figures — recreating them commits us to refreshing them in nine
languages on the `semi_annual` cycle indefinitely. That ongoing cost has to be
justified by actual demand, not by a completeness instinct.

If GSC shows near-zero impressions for the affected non-EN URLs, the correct
answer is to leave them and say so.

---

## 4. Check git history on row 4 before calling it a defect

`open-source-vs-proprietary-llms`: `es`/`pt`/`ar`/`ko` carry a `howToStart`
section that `de`/`fr`/`ja`/`zh` lack, while missing four comparison-table
sections the others have.

Two divergent structures is not obviously drift — it may be deliberate
localization from a different source revision. Check the history of that file
and report what actually happened before anyone "fixes" it.

---

## 5. `itemListSchema` — build the helper, but after the above

Your recommendation stands: one `deriveItemListSchema()` helper plus integration
in both `jsonld.tsx` files, not 219 hand-authored translations. Half a day of
engineering beats 219 translation tasks.

But it is **schema-only and invisible to readers**, so it sits behind steps 1–3.

When you build it:

- Support the derivation strategies you identified — from an existing
  `tableFormat` section, and from section titles + first-line paraphrase
- **Verify before replacing.** Generate output for a sample of articles that
  already have hand-authored `itemListSchema`, diff generated against existing,
  and show me the diff. If the generated version is materially worse, the
  strategy needs work before it goes anywhere near the 219.
- Keep the hand-authored field as an override that wins when present, same
  pattern as `faqSchema` / `section.faqs`

---

## 6. Leave the 20 distinct `howToName` phrases

Four files where EN's `howToName` is a deliberately distinct phrase rather than
the section title. Section-title fallback is acceptable there. Not worth an
editorial pass. Closed.

---

## Report back

1. Confirmation the `howToName` English leak is fixed, verified on a built page
   in two locales.
2. Row 10 closed.
3. **The GSC table.** This is the deliverable that matters — everything about
   rows 2–9 depends on it.
4. What the git history shows for row 4.

Then stop. Do not start step 5 or touch rows 2–9 until I have seen the traffic
data.
