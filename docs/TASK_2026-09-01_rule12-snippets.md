# TASK 2026-09-01 — Finish Rule 12 snippet blocks across prompt-engineering

Carried over from 2026-08-31. **38 of 82 prompt-engineering articles still have no snippet blocks.**

## What this is

`docs/GEO_WRITING_GUIDELINES.md` **Rule 12** requires at least two LLM snippet blocks per article — one `in-one-sentence` (technical precision, Rule 12a) and one `in-plain-terms` (analogy / non-technical, Rule 12b). They exist so AI summarisers and TTS systems can lift a clean definition off the page.

44 of 82 articles now have them. 38 do not.

## Read these first

- `docs/GEO_WRITING_GUIDELINES.md` — Rule 12 (line ~2031) for the two block types
- `docs/geo-translation.md` — **per-language rules** (line ~429 onward). This is a spec you apply by hand; there is no auto-translate tool.
- `docs/PAGE_UPDATER.md` — Step 5.5 (structural parity is fixed in the same pass, never deferred)

## Two naming traps that cost time yesterday

1. **The field is `snippets` in prompt-engineering**, with types `'in-one-sentence' | 'in-plain-terms'` (`src/lib/prompt-engineering/types.ts:22`). The other four clusters (local-llms, power-local-llm, balcony-solar, smart-home) call the same feature `snippetBlocks` with types `'one-sentence' | 'plain-terms'`. CLAUDE.md's blanket "GEO compliance requires `snippetBlocks`" line is **wrong for PE** — it names a field PE does not have. Fix that line while you are in here.
2. It is already rendered — `src/components/PromptEngineeringPostClient.tsx:815`, right after the H2, before the body. **No renderer or type work is needed.** Do not "add support"; it exists.

## The 38 remaining

**Group A — 6 articles that were contended on 2026-08-31.** Check `git branch -a` first; only start these once the branches below have merged.

| Article | Was blocked by |
|---|---|
| `gpt-claude-gemini-which-model.ts` | `content/gpt-claude-gemini-refresh-2026-08-31` |
| `temperature-and-top-p.ts` | `content/temperature-top-p-refresh-*`, `content/tokens-costs-limits-refresh-*`, `fix/glossary-term-count-and-parity` |
| `prompt-engineering-glossary.ts` | `content/tokens-costs-limits-refresh-*`, `fix/glossary-500-claim-parity`, `fix/glossary-term-count-and-parity` |
| `tokens-costs-limits.ts` | `content/tokens-costs-limits-refresh-*` |
| `how-llms-actually-work.ts` | `session/how-llms-refresh` |
| `which-framework-to-use.ts` | `session/which-framework` |

**Group B — 32 articles, free to start immediately:**

```
ai-limitations-what-llms-cant-do   ai-powered-research              ape-framework
best-pe-tools-2026                 best-prompt-management-platforms best-prompt-optimization-tools-teams
best-tools-structured-output       chain-of-thought-prompting       co-star-framework
craft-framework                    extract-and-summarise            geopolitics-and-ai
google-prompting-guide             manual-vs-automated-prompt-optimization
multi-model-prompt-testing         negative-prompting               pe-for-content-teams
pe-for-support-operations          prompt-building-blocks           prompt-chaining
prompt-engineering-history         prompt-engineering-vs-rag        prompt-for-speed
prompt-framework-for-teams         self-consistency-prompting       specs-framework
structured-output-json-mode        system-prompt-vs-user-prompt     trace-framework
what-is-prompt-engineering         write-better-code-with-ai        zero-shot-vs-few-shot
```

Group B splits cleanly across 4 parallel sessions of 8 (`scripts/session.sh start snippets-a` … `-d`). No shared files — 80 of 82 PE articles are self-contained, all 9 locales inline.

## Method that worked

`add_snippets.py` (in the `session/prompt-with-images` worktree, uncommitted — copy it over) takes a batch JSON and inserts the block after the matching `title:` line at the right indentation, one locale at a time:

```json
{ "src/lib/prompt-engineering/articles/<file>.ts": [
    {"title": "<exact locale title>", "one": "…", "plain": "…", "drop": "<optional prose line to remove>"}
] }
```

It refuses on ambiguous titles or if snippets already exist nearby, and it strips backslashes before matching so escaped apostrophes (`l\'injection`) still match.

Per article:
1. `grep -n -A2 "definition: {" <file>` to get all 9 locale titles (`ko` sits at a shallower indent — check for it separately).
2. Author the EN pair. **Prefer converting copy the article already has:** these still carry an "In one sentence: …" prose line to move into the block rather than duplicate — `extract-and-summarise`, `system-prompt-vs-user-prompt`, `write-better-code-with-ai`.
3. Localise into the other 8 per `geo-translation.md`.
4. `npx tsc --noEmit`, then commit with **explicit paths** (`git commit --only <files>`).

## Register warning

Several existing blocks contradict `geo-translation.md`: it specifies formal *Sie* for German and *tú* for Spanish, but some articles use informal *du*, and some Chinese blocks use 您. **Match the register the block already uses** so a page is not half formal and half informal. Normalising the whole cluster to the spec is a separate, larger decision — do not silently start it here.

## Do not

- Do not bump `dateModified`. Snippet blocks restate the section's own definition, so no reader sees different information.
- Do not attach snippets to a section with `isTldr: true` — the renderer suppresses them there.
- Do not translate the `type` values; `in-one-sentence` / `in-plain-terms` are enum keys the renderer switches on.

## Done when

1. `grep -rL "snippets:" src/lib/prompt-engineering/articles/ | wc -l` → **0**
2. Each edited file has 9 `snippets:`, 9 `in-one-sentence`, 9 `in-plain-terms`
3. `npm run build` green
4. Spot-render on a production build (`npx next start --port <your session port>`) — confirm `📍 In One Sentence` and `💬 In Plain Terms` appear, in the right language, for a sample across all 9 locales
5. CLAUDE.md's `snippetBlocks` line corrected to name `snippets` for PE

## Also open (small)

`imagesWithTextKo` in `src/lib/prompt-engineering/imagesWithTextTranslations.ts` is imported but unused and missing `howToStart` — `ko` uses inline sections instead. Dead code; delete it.

---

## HIGHER PRIORITY — found 2026-08-31 while doing the above

**11 prompt-engineering articles have locale blocks with almost no content.** This is worse than the snippet gap and should be fixed first.

Run `python3 scan_parity.py` (in the `session/prompt-with-images` worktree) to reproduce:

```
ape-framework.ts                     en=12  starved: de=11 fr=11 ja=11 zh=11  (missing)
best-pe-tools-2026.ts                en=18  starved: fr=18
best-prompt-engineering-ides.ts      en=15  starved: ko=15
braintrust-vs-prompthub-vs-vellum.ts en=15  starved: de=15 fr=15 ja=15 zh=15
co-star-framework.ts                 en=16  starved: zh=15
google-prompting-guide.ts            en=13  starved: ja=13 zh=13
negative-prompting.ts                en=16  starved: zh=15
single-prompt-method.ts              en=17  starved: pt=9
structured-output-json-mode.ts       en=23  starved: pt=13
teaching-with-ai.ts                  en=20  starved: pt=11
tree-of-thought-react.ts             en=17  starved: zh=17
```

**Confirmed live for one case:** `/de/prompt-engineering/ape-framework` returns HTTP 200 and renders an FAQ **written in English** ("Frequently Asked Questions", "What does APE stand for") — the German block's only section is `faqSection`, and its content was never translated. The other 11 sections do not exist in the de/fr/ja/zh blocks at all.

Verify each case at source before authoring — `python3 parity.py <file>` lists per-locale section keys. Note that several PE pages are client-rendered, so `curl | grep "<h2"` returns 0 even for healthy pages; do not use that as the check. Compare source section counts, or render against a local production build.

This is an "author the missing language" job (PAGE_UPDATER Step 5.5 / geo-translation Step 5.5), not a mechanical fix. Scope it before starting: `braintrust-vs-prompthub-vs-vellum` and `ape-framework` each need four full locale bodies.

---

## ALSO FOUND — EN framework pages render from a different source

The six framework articles (`rtf`, `co-star`, `craft`, `specs`, `trace`, `ape`, plus `google-prompt` and `single-prompt-line`) serve their **EN canonical URL from `src/lib/frameworksData.ts` via `src/app/frameworks/[slug]/page.tsx`** — not from the prompt-engineering article files.

`/prompt-engineering/co-star-framework` 308-redirects to `/frameworks/co-star`. The non-EN locales (`/de/prompt-engineering/co-star-framework` etc.) still render from the PE article file.

Consequence: snippet blocks added to the `en:` block of a framework article file are **not rendered on the EN page**. Confirmed — `/frameworks/co-star` shows zero snippet callouts while `/de/prompt-engineering/co-star-framework` shows both.

`frameworksData.ts` contains **0 snippets**, and `src/app/frameworks/[slug]/page.tsx` has no snippet rendering at all. So giving EN framework pages Rule 12 blocks is a **renderer change plus a content change in a second data source**, not a copy-paste of what was done for the other articles. Scope it separately.

Note `frameworksData.ts` has previously held uncommitted work from other sessions (a CRAFT rewrite) — check `git status` and `git branch -a` before editing it.
