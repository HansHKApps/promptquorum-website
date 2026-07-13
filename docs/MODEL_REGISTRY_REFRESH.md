# Model Registry Refresh

**Recommended model to run this skill: Claude Sonnet 5 (`claude-sonnet-5`).**
Escalate a specific cycle to Opus 4.8 only if a review catches factual errors in
the registry — do not switch by default; this runs monthly and cost compounds.

## Purpose
Monthly refresh of `data/model-registry.json` (source of truth for all LLM
models referenced anywhere on promptquorum.com) and a diff against site
content to flag pages that are out of date. Never deletes historic model
mentions — supersedes them in place with a status flag.

## When to run
Manually triggered, monthly (target: first week of each month). Not
automated/cron — Hans reviews the diff report before any page edits ship.

## Preconditions
- Read `GEO_WRITING_GUIDELINES.md` before editing any page. (`PRE_RULES.md`,
  referenced by the original spec for this skill, does not exist in this repo
  — skip that precondition here; it may be a carryover from a sibling
  `pq-*` repo template.)
- Confirm WebSearch/WebFetch tools are available in this session.
- `data/model-registry.json` exists (create with the schema below on first run).

## Repo-specific notes (this repo has no `content/` directory)

This spec was originally written against a markdown-frontmatter content
layout (`content/**/*.md` with a `current_models_mentioned` frontmatter
array). **promptquorum-website uses a different architecture** — adjust
accordingly:

- Site content lives in `src/lib/{cluster}/articles/*.ts` (clusters:
  `local-llms`, `prompt-engineering`, `power-local-llm`, `prompt-bites`,
  `smart-home`, `balcony-solar`) plus the monolithic `src/lib/blog/blogContent.ts`.
  Each article is a TS object with one block per language (`en`, `de`, `fr`,
  `ja`, `zh`, `es`, `pt`, `ar`, `ko`), and the `current_models_mentioned`
  field (already an established convention — confirmed present in ~145
  files, ~880 occurrences across language blocks) sits inside each
  language's block, not as file-level frontmatter.
- Step 3's `grep -rl "current_models_mentioned" content/` becomes:
  ```bash
  grep -rl "current_models_mentioned" src/lib --include="*.ts" \
    | grep -v types.ts | grep -v '\.original\.ts'
  ```
- Because the field repeats per language block, a plain grep undercounts /
  overcounts distinct pages. Use a small script to regex-extract each
  `current_models_mentioned: [...]` array per file and union the model names
  across that file's language blocks — see `scripts/extract-model-mentions.mjs`
  (added by the 2026-07 cycle; reuse it in future cycles rather than
  rewriting).
- "Pages" for the purposes of Step 3/Step 4 means **files**, not per-language
  URLs — a stale-model flag on a file implies it needs fixing in every
  language block that mentions the stale model, not just one locale.

## Registry schema (`data/model-registry.json`)

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
      "superseded_by": "model name string or null",
      "source_url": "official lab page the fact was verified against",
      "verified_date": "YYYY-MM-DD this entry was last checked",
      "notes": "short factual note only — no marketing language"
    }
  ]
}
```

## Process

### Step 1 — Source list (do not skip, do not substitute)
Check ONLY official lab sources. Do not use third-party leaderboards,
aggregator blogs, or news summaries as the source of truth — those go stale
and introduce errors. Minimum coverage, ~10 labs (adjust list only if a lab
is added/dropped from site content):

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

**Added for this repo** (site content references these families heavily
enough — GLM 25+ mentions, Kimi 5+ mentions, Cohere Command R+ 4 mentions —
that the "adjust list only if a lab is added/dropped from site content"
rule requires including them):
- Zhipu AI / Z.ai (GLM family — open.bigmodel.cn, docs.z.ai)
- Moonshot AI (Kimi family — platform.moonshot.ai, github.com/MoonshotAI)
- Cohere (Command family — docs.cohere.com; added 2026-07 cycle follow-up
  after the initial pass missed it despite 4 site mentions — check for
  Cohere the same way as the other 12 labs from now on, don't rely on this
  note to remember it)

**Co-primary sources for labs with both open-weights and a hosted API**
(added 2026-07 cycle, after the Kimi K2.6 methodology miss — see
`docs/CONTENT_FOLLOWUPS.md` for the incident writeup): for any lab that
publishes BOTH an open-weights GitHub org AND a hosted API, the GitHub org
page is NOT sufficient verification on its own. Check the hosted
API/pricing docs page and the official Hugging Face model card
**alongside** GitHub, as co-primary sources — not as a fallback used only
when GitHub is unclear. Root cause: Moonshot AI's hosted API and
Hugging Face releases (Kimi K2.6) shipped ahead of their GitHub org page's
pinned repos, so a GitHub-only check concluded K2.6 didn't exist when it
had already been generally available for months. This applies to any lab
with the same shape (open-weights repo + hosted API) — Zhipu/Z.ai,
Alibaba/Qwen, Mistral AI, and DeepSeek all fit this pattern, not just
Moonshot.

For each: WebFetch the official page. Extract model name, release date,
open/closed status, and whether it has been superseded. If a fact can't be
verified from an official source, leave the field null and note
"unverified — needs manual check." Do not infer or guess a release date.

### Step 2 — Update the registry
- New model found and not in registry → add entry, `status: current`.
- Model in registry no longer listed as current by the lab → set
  `status: superseded`, fill `superseded_by`, do NOT delete the entry.
- Do not remove any entry, ever. Historic entries are load-bearing for
  existing page content ("as of April 2026, X was...").
- Update `last_updated` at file root.

### Step 3 — Site content diff
Extract each file's `current_models_mentioned` union (see repo-specific
notes above), compare against the registry:
- Registry has a `current` model not in the page's list → flag "missing new
  model" (informational only — most pages intentionally scope to a subset
  of models; only worth surfacing for ranking/comparison page types).
- Page lists a model as current that the registry now shows `superseded` →
  flag "stale — model superseded."
- No mismatch → no action, no date change.

### Step 4 — Output
One consolidated brief per cycle (not one per page — see branch hygiene
rule), listing every flagged page with: current mismatch, proposed fix,
and whether the fix qualifies as "substantial" (see rule below). Do not
edit pages directly in this pass — output the brief for review first,
consistent with the existing DIAGNOSIS RULE / METHOD RULE (no claim without
a verified source).

### Step 5 — Date-bump rule
A page's visible `<time dateTime>` / `last_significant_update` frontmatter
is bumped ONLY if the fix is substantial:

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

### Step 6 — Branching
One branch for the whole monthly cycle: `fix/model-refresh-YYYY-MM`.
Land it before starting the next cycle — do not let it sit alongside other
open feature branches (branch hygiene rule). This first (2026-07) cycle
lands only the registry + this doc + the extraction script — no page edits
went out in the same pass, per Step 4.

## Verification checklist
- [ ] Every registry entry has a `source_url` from an official lab domain
- [ ] No entries deleted, only status-updated
- [ ] Every flagged page has a documented mismatch, not a guess
- [ ] Date bumped only where Step 5 criteria are met
- [ ] `npm run build` — 0 errors
- [ ] Brief output for review before any page content is edited
