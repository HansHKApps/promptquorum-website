# New App Intake

Runbook for when a founder/vendor emails about their app/tool and it needs to go from
"nothing" to "live, translated, in the directory, in its category comparison, and indexed."

This doc sequences existing pieces — it does not duplicate them. Read the linked skill/doc
at each step; this is the checklist that ties them together in order.

## Prerequisites

- `~/.claude/skills/feature-app-post/SKILL.md` — the review article spec
- `~/.claude/skills/category-compare-post/SKILL.md` — category comparison spec
- `docs/geo-translation.md` — translation skill (`/geo-translation`)
- `~/.claude/skills/risk-checker/SKILL.md` — legal/reputational gate (`/risk-checker`)
- `docs/ARTICLE_SCAFFOLD_2026.md` — canonical article field order
- Repo `CLAUDE.md` — freshness tier, no year/month in slugs, GEO rules

## Before starting

Decide the `slug` (no year/month, ever — build-validated) and whether this is a downloadable
app (needs Get It/Download CTA) or a framework/CLI/model (needs an Install block instead).
Identify its category/sub-segment in `src/lib/power-local-llm/apps/compare-schema.ts`
(`COMPARE_SEGMENTS`) — this determines which comparison table it lands in later.

## Steps

### 1. Directory entry
Create `src/lib/power-local-llm/apps/<slug>.ts` exporting `app: ToolRecord`
(type in `src/lib/power-local-llm/apps/types.ts`). Required fields: `slug, name, categories,
interfaces, locality, platforms, worksWith, engine, license, price, hardware, stars,
addedDate, status, uses, url, tagline (all 9 locales), lastVerifiedDate`. Leave `reviewSlug`
unset for now — added in step 4. `status: 'listed'` is fine before the review exists.

Register in:
- `src/lib/power-local-llm/apps-slugs.ts`
- `src/lib/power-local-llm/apps-barrel.ts`

Run `npm run validate-local-ai-apps` — blocks on TODO/missing `locality`/`engine`/`price`/`platforms`.

### 2. Write the FeatureAppPost review
Follow `feature-app-post` skill exactly. Reference templates: `jan-review`, `gpt4all-review`.
Four mandatory checks: Get It/Download CTA (or Install block), directory backlink to
`/power-local-llm/local-llm-software-directory` (never the hub), Competitors/Alternatives
section linking 2–4 same-sub-segment reviews, and version stated via `pqReview.version` on
the `ToolRecord` (never hand-typed — `validate-app-versions.mjs` enforces the match).

File: `src/lib/power-local-llm/articles/<slug>.ts` (EN block only at this stage).
Register in `src/lib/power-local-llm/slugs.ts` + `articles-barrel.ts`.

Generate localized hero images (facts strip: RAM/VRAM, license, price, platform pills) per
repo `CLAUDE.md` hero-image process — one per locale, `public/images/<slug>-hero-<lang>.webp`.

Do **not** add to `published.ts` yet.

### 3. Translate all 8 non-EN locales
Run `/geo-translation` per locale. Never translate code-side identifiers (`theme`, `slug`,
`type`, `id`, keys). Every locale block must match EN's field structure/count exactly.
Generate the remaining localized hero images.

### 4. Wire the category comparison
Fill the `compare: {...}` block (+ optional `verdict`, `affiliate`) on the `ToolRecord`,
verified against the project's own README/site with a verification-date comment. Set
`reviewSlug` on the `ToolRecord` now that the review exists. The comparison table is
data-driven — nothing is hand-edited in the article file. Run `npm run validate-category-compare`.

### 5. Regenerate generated indexes
`node scripts/generate-feature-review-index.mjs` (and the tool-article-index generator) so
MCP `search_apps`/`get_app_details` and directory search surface the new review.

### 6. Risk gate
`/risk-checker src/lib/power-local-llm/articles/<slug>.ts` — run across all 9 locale blocks,
not just EN (translation waves can turn a hedged EN claim into an absolute one). BLOCK on any
CRITICAL finding — fix and re-run before proceeding.

### 7. Publish
Add the slug to `src/lib/power-local-llm/published.ts` — only once all 9 locale blocks exist
and risk-checker passed. This is the actual "go live" switch: it flips `noindex` off and the
sitemap (`src/lib/sitemap/pages/power-local-llm.ts`) picks it up automatically. No manual
sitemap edit needed.

### 8. Verify
- Directory hub renders it: `src/app/directory/page.tsx` + each `src/app/{locale}/directory/page.tsx`
- Review article live at `/power-local-llm/<slug>` (and per-locale)
- Category comparison table includes it
- `npm run build` passes clean (validators above all run in `prebuild`/`postbuild`)
- Sitemap includes the new URL(s)

## Notes

- **"Latest Apps Added" homepage block is automatic.** `src/components/home/LatestAppsBlock.tsx`
  (via `src/lib/home/apps-feed.ts`'s `getLatestApps`) reads `apps-barrel.ts`, filters to entries
  with `addedDate` set, and sorts descending. Once step 1 sets `addedDate` on the `ToolRecord`
  and it's in the barrel, the app appears there with zero extra work — no separate registration.
- Directory registration (step 1) and article registration (step 2) are two independent
  barrel/slug systems (`apps-*` vs plain `slugs.ts`/`articles-barrel.ts`) — don't conflate them.
