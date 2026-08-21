# Next instructions — live browser findings, corrections, revised priority

Facts below come from executing JS against **production** (post-hydration DOM),
not from source. Two of my earlier claims were wrong; both corrected here.

---

## Finding 1 — the local-llms schema gap is still live, and hydration does NOT repair it

`https://www.promptquorum.com/de/local-llms/troubleshooting-local-llm-setup`
and `https://www.promptquorum.com/ko/local-llms/best-beginner-local-llm-models`,
fully hydrated, both return:

```
jsonLdTypes: ["Organization", "WebSite", "SoftwareApplication", "BreadcrumbList"]
```

No `TechArticle`, no `FAQPage`, no `HowTo`, no `ImageObject` — **after JavaScript
has run**.

This is categorically worse than the `lang` and footer defects. Those are
repaired by hydration (verified below). The missing article schema is not
repaired by anything, because it was never generated. Every crawler gets nothing
on these pages — including Google, which does render JS.

**Action: get `fix/local-llms-schema-parity` deployed. It is the single highest-value
thing outstanding.** Hans pushes; confirm with him rather than waiting.

After deploy, re-run the same probe on both URLs and confirm the article types
appear.

---

## Finding 2 — `lang` and footer ARE repaired by hydration

Same live probe on the DE page:

```
htmlLang: "de"     footerCount: 1     hreflangs: en,de,fr,ja,zh,es,pt-BR,ar,ko,x-default
canonical: https://www.promptquorum.com/de/local-llms/troubleshooting-local-llm-setup
```

So `HtmlLangUpdater` and the Suspense-wrapped Footer both work as designed
post-hydration. hreflang is complete and correct.

**This reprioritises the `[locale]` refactor.** The raw-HTML defects only affect
clients that don't execute JavaScript. Google renders JS, so Google sees correct
`lang`, the footer, and hreflang. The refactor is therefore an **AI-crawler
problem, not a Google SEO problem** — it matters for GPTBot / ClaudeBot /
PerplexityBot / CCBot, which is still strategically important given the
Platzhirsch thesis, but it is not the emergency the raw-HTML checks made it look
like.

Keep it gated on the Phase 1 plan. It is now clearly lower priority than
Finding 1.

---

## Finding 3 — correction: Noto Sans KR is NOT downloaded

I told you it was "downloaded on every page load." Wrong. Live font status on
`/ko/`:

```
Noto Sans KR: unloaded          Noto Sans KR Fallback: unloaded
Noto Sans Arabic: unloaded      Plus Jakarta Sans: loaded
```

`next/font` only fetches a face when something actually uses it. Since
`--font-korean` is applied to no element, the font never downloads. **The
performance cost is zero.**

Removing it is still correct — dead declarations mislead the next person exactly
as they misled me — but file it as `chore:`, not `perf:`, and don't expect a
metric to move.

Note `--font-korean` *is* defined as a CSS custom property
(`"Noto Sans KR", "Noto Sans KR Fallback"`). It's generated but never consumed.

---

## Finding 4 — `/ko/` Korean typography is genuinely uncontrolled

On the Korean article, the `<h1>` containing Hangul computes to:

```
font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Fallback", system-ui, sans-serif
```

Plus Jakarta Sans has no Hangul coverage, so every Korean glyph falls through to
whatever system font the visitor happens to have. Korean readers get
inconsistent typography across devices; you have no control over it.

Two options — **this is Hans's call, present both, don't pick:**

| Option | What it means |
|---|---|
| Leave on system fallback | Zero bytes. Modern OSes ship good Korean fonts (Apple SD Gothic Neo, Malgun Gothic, Noto CJK on Android/Linux). Rendering is decent but inconsistent. |
| Wire Noto Sans KR properly | `subsets: ['korean']` (not `['latin']`), applied via `--font-korean` in `globals.css` the way `--font-arabic` is at line 130, scoped to `ko` only. Consistent typography, at the cost of a large CJK font download for Korean visitors. |

Screenshot `/ko/` on the current setup so Hans can judge how it actually looks
before deciding.

---

## Finding 5 — Wave 3 is cancelled

CrUX field data via PageSpeed Insights, 28-day, "many samples", origin level:

| | LCP | INP | CLS | Verdict |
|---|---|---|---|---|
| Mobile | 1.6s | 73ms | 0 | Passed |
| Desktop | 1.3s | 37ms | 0 | Passed |

The "INP 256ms / LCP 2.46–2.57s" premise came from Microsoft Clarity **means**,
not p75. Clarity's own overview reported 28.67s LCP — an outlier artifact.

Do not touch the analytics stack. Do not remove Clarity. Do not restructure
client components for performance. There is nothing to fix.

---

## Revised order

1. **Deploy `fix/local-llms-schema-parity`** — Hans pushes. Verify live after.
2. **Deploy the other pending branches** (`deploy-robots-fix`,
   `fix/image-schema-integrity`, `feature/preferred-source-link` once Hans
   confirms Google eligibility). Several fixes are sitting undeployed, which is
   why production still shows problems you already solved.
3. **Finish the validator blind-spot work** from the previous instructions —
   extend for bare-string `image:` nodes, migrate the 7 files, publish the
   written list of shapes scanned and not scanned.
4. **Open the new issue** recording the 61 verified URLs and corrected scope
   numbers. Do not touch #65.
5. **`chore:` remove Noto Sans KR**, and screenshot `/ko/` for Hans.
6. **`[locale]` refactor** — Phase 1 plan still gated, now correctly understood
   as an AI-crawler fix rather than a Google fix.

---

## Report back

1. Live probe on both local-llms URLs after the schema branch deploys, showing
   `TechArticle` / `FAQPage` / `HowTo` present.
2. The validator's scanned/not-scanned shape list.
3. New issue number.
4. `/ko/` screenshot.
