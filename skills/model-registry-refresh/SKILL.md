---
name: model-registry-refresh
description: Monthly refresh of data/model-registry.json against official lab sources, diffed against site content, with a build-gated validator closing the loop. Use when asked to run a model-registry refresh cycle, close LINEAGE_DANGLING errors, resolve a NEEDS_RETRIEVAL/CONTESTED registry entry, or investigate why the model-name validator is failing.
---

**Recommended model to run this skill: Claude Sonnet 5 (`claude-sonnet-5`).**
Escalate a specific cycle to Opus 4.8 only if a review catches factual errors in
the registry — do not switch by default; this runs monthly and cost compounds.

## Purpose

Keep `data/model-registry.json` (source of truth for every LLM model referenced
anywhere on promptquorum.com) current against official lab sources, and keep
site content from silently drifting away from it. Two halves:

1. **Retrieval** (this doc, human-triggered, monthly) — update the registry
   from primary sources.
2. **Enforcement** (`scripts/validate-model-names.mjs`, build-gated) — fails
   the build if site content names a model the registry doesn't recognize, or
   marks as superseded/deprecated/retired.

Never delete historic model mentions — supersede in place with a status flag.

## The rule this entire skill exists to enforce

**RETRIEVE, DO NOT RECALL.** The site's model-name errors (documented
2026-07-17 audit: "Llama 4 Scout best overall" shipped on a page stamped
"reviewed July 15") all trace to one cause — a training-cutoff fact wearing a
current date stamp. Every step below exists to make that structurally
impossible: no model fact enters the registry without a live fetch of an
official source dated the day it was checked.

## When to run

Manually triggered, monthly (target: first week of each month). Not
automated/cron — a human reviews the diff report before any page edits ship.
Also run ad hoc when `scripts/validate-registry-freshness.mjs` fails, or when
`validate-model-names.mjs` flags a genuinely new model with no registry entry.

## Preconditions

- Read `docs/GEO_WRITING_GUIDELINES.md` before editing any page.
- Confirm WebSearch/WebFetch tools are available in this session.
- `data/model-registry.json` exists (v2 schema below).

## Repo-specific notes

Site content lives in `src/lib/{cluster}/articles/*.ts` (clusters:
`local-llms`, `prompt-engineering`, `power-local-llm`, `prompt-bites`,
`smart-home`, `balcony-solar`) plus the monolithic `src/lib/blog/blogContent.ts`.
Each article is a TS object with one block per language (`en`, `de`, `fr`,
`ja`, `zh`, `es`, `pt`, `ar`, `ko`); the `current_models_mentioned` field sits
inside each language's block, not as file-level frontmatter.

Extraction and matching logic is centralized in `scripts/lib/registry.mjs` —
reuse `discoverArticleFiles()`, `extractModelMentionsByLocale()`, and
`findRegistryMatch()` rather than re-deriving them. "Pages" for Step 3/4 means
**files**, not per-language URLs — a stale-model flag on a file implies it
needs fixing in every language block that mentions the stale model, not just
one locale. Use `validate-model-names.mjs`'s per-locale breakdown (not a plain
grep) to see this — a plain grep undercounts/overcounts distinct pages because
the field repeats per language block.

## Registry schema (`data/model-registry.json`, v2)

```json
{
  "last_updated": "YYYY-MM-DD",
  "models": [
    {
      "company": "string, official lab name",
      "family": "string, e.g. Claude, GPT, Gemini, Llama, Qwen, Mistral, DeepSeek",
      "model": "string, official public model name",
      "type": "closed | open-weight | hybrid",
      "release_date": "YYYY-MM-DD or YYYY-MM if day unknown, or null if unverified",
      "status": "current | superseded | deprecated | retired",
      "superseded_by": "model name string or null — MUST match another entry's `model` exactly, or validate-registry-freshness.mjs flags LINEAGE_DANGLING",
      "source_url": "official lab page the fact was verified against",
      "verified_date": "YYYY-MM-DD this entry was last checked",
      "notes": "short factual note only — no marketing language"
    }
  ],
  "sources": [
    { "id": "string, referenced by ecosystem_notes[].source_id", "name": "string", "url": "string", "tier": "vendor | aggregator" }
  ],
  "ecosystem_notes": [
    {
      "id": "string",
      "text": "a non-model-name technical fact that rots the same way (context defaults, driver versions, CLI flags, keep_alive behaviour)",
      "source_id": "must match a sources[].id — required, validate-registry-freshness.mjs fails otherwise",
      "retrieved_at": "YYYY-MM-DD — required, same rule",
      "editorial_implication": "what a writer should do differently because of this fact"
    }
  ],
  "recommendations": {
    "<tier_key>": {
      "status": "NEEDS_RETRIEVAL | RESOLVED",
      "sources": ["source ids — RESOLVED requires >= 2"],
      "note": "string"
    }
  },
  "best_overall_open_weight": {
    "status": "CONTESTED | RESOLVED",
    "positions": [ { "source_id": "...", "pick": "model name", "retrieved_at": "YYYY-MM-DD" } ],
    "note": "string"
  }
}
```

`recommendations` and `best_overall_open_weight` exist so an unresolved
question is a recorded, visible NEEDS_RETRIEVAL/CONTESTED state rather than a
guessed answer. **Do not resolve a CONTESTED claim to a single winner unless
independent sources actually agree** — an article picking a winner where
sources disagree is exactly the failure mode that produced "Llama 4 Scout
(best overall)." Record each source's position instead.

## Process

### Step 1 — Source list (do not skip, do not substitute)

Check ONLY official lab sources. Do not use third-party leaderboards,
aggregator blogs, or news summaries as the source of truth — those go stale
and introduce errors. Minimum coverage (adjust only if a lab is added/dropped
from site content):

- OpenAI (openai.com model pages / changelog)
- Anthropic (anthropic.com/news, docs.claude.com)
- Google DeepMind (deepmind.google, ai.google.dev)
- Meta (ai.meta.com/llama)
- Mistral AI (mistral.ai/news)
- Alibaba / Qwen (qwenlm.github.io, official Qwen repo)
- DeepSeek (deepseek.com)
- xAI (x.ai)
- Amazon (aws.amazon.com/bedrock model pages, for Titan/Nova)
- Microsoft (for Phi family, azure.microsoft.com)
- Zhipu AI / Z.ai (GLM family — open.bigmodel.cn, docs.z.ai)
- Moonshot AI (Kimi family — platform.moonshot.ai, github.com/MoonshotAI)
- Cohere (Command family — docs.cohere.com)

**Co-primary sources for labs with both open-weights and a hosted API:** for
any lab that publishes BOTH an open-weights GitHub org AND a hosted API, the
GitHub org page is NOT sufficient verification on its own — check the hosted
API/pricing docs page and the official Hugging Face model card **alongside**
GitHub. (Root incident: Moonshot AI's hosted API and Hugging Face releases for
Kimi K2.6 shipped ahead of their GitHub org page's pinned repos; a GitHub-only
check concluded K2.6 didn't exist when it had already been generally available
for months. Applies to any lab with the same shape — Zhipu/Z.ai, Alibaba/Qwen,
Mistral AI, DeepSeek.)

For each: WebFetch the official page. Extract model name, release date,
open/closed status, and whether it has been superseded. If a fact can't be
verified from an official source, leave the field null and note "unverified —
needs manual check." Do not infer or guess a release date.

### Step 2 — Update the registry

- New model found and not in registry → add entry, `status: current`.
- Model in registry no longer listed as current by the lab → set
  `status: superseded`, fill `superseded_by` with an exact existing entry
  name (or add that entry in the same pass — never leave it dangling).
- Do not remove any entry, ever. Historic entries are load-bearing for
  existing page content ("as of April 2026, X was...").
- Update `last_updated` at file root.
- If resolving a `recommendations` tier or `best_overall_open_weight`: only
  move to `RESOLVED` with >= 2 independent sources in agreement; otherwise
  leave as `NEEDS_RETRIEVAL`/`CONTESTED` and record what you found in
  `positions`/`sources` instead of guessing.

### Step 3 — Site content diff

Run `node scripts/extract-model-mentions.mjs` then
`node scripts/diff-model-registry.mjs` for the human-readable brief (informational,
report-only). Then run the build-gated check:

```bash
node scripts/validate-model-names.mjs --paths src/lib --warn-only
```

Read the per-locale breakdown. Non-EN locales frozen at an older registry
state than EN is the expected failure mode of hand-translation — confirm or
refute against this run's numbers, don't assume.

### Step 4 — Registry self-check

```bash
node scripts/validate-registry-freshness.mjs
```

Must show 0 errors before this cycle lands. If it fails on `LINEAGE_DANGLING`,
close it in Step 2 (never leave a dangling `superseded_by`). If it fails on
`ECOSYSTEM_NOTE_UNSOURCED`/`_UNDATED`, every `ecosystem_notes[]` entry needs a
`source_id` resolving to `sources[]` and a `retrieved_at` date.

### Step 5 — Baseline burn-down

Existing site violations that predate this validator are frozen in
`.model-names-baseline.json` (written via `--write-baseline`). Do not add new
violations to the baseline — only remove entries as you fix the underlying
article. Burn down cluster by cluster, `local-llms` first.

### Step 6 — Output

One consolidated brief per cycle (not one per page), listing every flagged
file with: current mismatch, proposed fix, and whether the fix qualifies as
"substantial" (see Step 7). Do not edit pages directly in this pass — output
the brief for review first.

### Step 7 — Date-bump rule

A page's visible `dateModified` is bumped ONLY if the fix is substantial:

**Substantial (bump date):**
- A new model added to a comparison/ranking
- A model's status changed to superseded/deprecated and the page's
  recommendation logic changes as a result
- A "best for X" or ranking position changes because of the above

**Not substantial (no date bump):**
- Wording/phrasing cleanup
- Typo or broken-link fixes
- Adding a superseded-model caveat without changing the page's actual
  recommendation

### Step 8 — Record the review

```bash
node scripts/record-review.mjs --action refresh --summary "<what you verified>"
```

Only after you've actually done Steps 1-7 for this cycle — recording a review
you didn't do defeats the purpose of the ledger.

### Step 9 — Branching

One branch for the whole monthly cycle: `fix/model-refresh-YYYY-MM`. Land it
before starting the next cycle — do not let it sit alongside other open
feature branches. Before any history operation, check for other sessions'
in-flight work (concurrent Claude Code sessions run in this repo); never
`git reset` or rebase on local `main`.

## Verification checklist

- [ ] Every registry entry has a `source_url` from an official lab domain
- [ ] No entries deleted, only status-updated
- [ ] No `superseded_by` points at a name without its own entry (`validate-registry-freshness.mjs` passes)
- [ ] Every flagged file has a documented mismatch, not a guess
- [ ] Date bumped only where Step 7 criteria are met
- [ ] `node scripts/validate-model-names.mjs --paths src/lib` passes (baseline-aware)
- [ ] `npm run build` — 0 errors
- [ ] Brief output for review before any page content is edited
- [ ] Review recorded via `record-review.mjs`
