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

**Judge "downloadable" by install effort, not by where the files are hosted.** A GitHub repo whose
Releases page ships a `.dmg`/`.exe`/`.AppImage`/store build is an installer app — GitHub is only its
CDN. Open the Releases page, the official website and any store listing (not just the README: a
README that shows only `pip install` can hide a `.dmg`), then classify the EASIEST officially
supported path as `installer` | `one-command` | `terminal-setup` | `hosted` (check 6 of the
`feature-app-post` skill). Do not count preview/beta-labelled builds as the easy path unless that is
the only one.
Identify its category/sub-segment in `src/lib/power-local-llm/apps/compare-schema.ts`
(`COMPARE_SEGMENTS`) — this determines which comparison table it lands in later.

## App Maintenance Recency — last upstream update + 3-month stale warning (MANDATORY, owner rule 2026-10-16)

Whenever you work on the App Directory — a tile, a FeatureAppPost review, a category comparison, the post writer, or a `/updater` run on any of them — establish **when the app itself last received an update** (latest release/tag, or last substantive commit, from the official site, GitHub Releases or store listing) and record it. This shows readers whether the project is still being developed.

1. **Look it up every time, from a primary source** (official release page / GitHub Releases / store listing). Never guess, never reuse an old value without re-checking. Write the date down in the report even when nothing else changes.
2. **State it in the text.** Every review and comparison entry names the app's last update date (localized via `formatDisplayDate`, in all 9 locales) next to the version. It is separate from the page's own `dateModified` and from `lastVerifiedDate`/`pqReview.date` (those say when *we* checked).
3. **Stale = last upstream update more than 3 months before today.** Then:
   - put a **large, clearly visible warning** at the top of the review/comparison text (all 9 locales): the project has had no update since `<date>`, so it may be unmaintained — check before relying on it;
   - show a **warning badge on the directory tile** (and in the drawer) — same wording logic, same date;
   - never soften it in the verdict, and never remove it unless a newer upstream update is verified.
4. **Distinct from `upstreamStatus`:** `archived`/`unmaintained` is a hard statement from the project itself. The 3-month warning is date-based and applies to every app that has simply gone quiet; if both apply, show both.
5. **Re-evaluate at every touch.** A warning set earlier is cleared only by a newly verified upstream update; a fresh app crossing the 3-month line gets the warning on the next run.
6. **Report it:** every run's report lists, per app, the last-update date, its source URL and whether the stale warning is on or off.

**Implementation (2026-10-16):** `ToolRecord.lastUpstreamUpdate` (ISO date) + `lastUpstreamUpdateSource` (URL) in `src/lib/power-local-llm/apps/types.ts`; thresholds in `src/components/local-ai-directory/staleness.ts` (`getAppActivity`: >90 days = `quiet` → red warning banner on tile/drawer/table row; >180 days = `dead` → grey tile + dark "likely a dead project" banner). Unset = no warning (unknown, never "no updates"). Set the field on every tile you touch, from a primary source (GitHub: newer of latest release and last push; otherwise official release page/store listing), and run `npm run test:app-activity` (also validates the field). Backfilled 2026-10-16 for 229 of 245 tiles (GitHub API, App Store version history, Google Play, official changelogs). Still unset on purpose: no dated primary-source release found (`backyard-ai`, `blackbox-ai`, `codegpt`, `cognira`, `hyperlink-nexa`, `macwhisper`, `nvidia-g-assist`, `open-felix`, `rapr-ai`, `spiritbox-ultimate`), repo unconfirmed (`hermes-agent`), Cody discontinued 2025-07-23 with no product release date (`sourcegraph-cody`), and model-weight repos where "dead" is misleading (`idefics`, `stable-diffusion`, `xtts-v2`). Left unset on purpose (repo mapping unreliable): `mlx-lm` (lives at ml-explore/mlx-lm, not mlx-examples), `piper-tts` (original archived, development moved to a successor repo).

## Steps

### 1. Directory entry
Create `src/lib/power-local-llm/apps/<slug>.ts` exporting `app: ToolRecord`
(type in `src/lib/power-local-llm/apps/types.ts`). Required fields: `slug, name, categories,
interfaces, locality, platforms, worksWith, engine, license, price, hardware, stars,
addedDate, status, uses, url, tagline (all 9 locales), lastVerifiedDate`. Leave `reviewSlug`
unset for now — added in step 4. `status: 'listed'` is fine before the review exists.

Also set (only once verified — unset means "not yet checked", never "none"):
- `installEffort` + `installEvidence` — the tier and what you actually saw (asset names, README line,
  store listing) with the date. `installOn: [...]` when the tier only holds on some of `platforms`
  (a Windows-only `.exe`, an Android-only APK). The validator rejects a tier with no evidence.
- `url` = the official website when one exists; the repo goes in `storeLinks.github` (and store
  listings in `storeLinks.appStore`/`googlePlay`, site in `storeLinks.web` — same host as `url`).
  A `github.com/...` `url` is only right when there is no separate website.

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

Add it to `published.ts` in the same run as soon as all 9 locales and the risk gate are done (index gate in `CLAUDE.md`: never leave a content page noindex).

### 3. Translate all 8 non-EN locales
Run `/geo-translation` per locale. Never translate code-side identifiers (`theme`, `slug`,
`type`, `id`, keys). Every locale block must match EN's field structure/count exactly.
Generate the remaining localized hero images.

### 4. Wire the category comparison
Fill the `compare: {...}` block (+ optional `verdict`, `affiliate`) on the `ToolRecord`,
verified against the project's own README/site with a verification-date comment. Set
`reviewSlug` on the `ToolRecord` now that the review exists. The comparison table is
data-driven — nothing is hand-edited in the article file. Run `npm run validate-category-compare`.

### 4b. Add it to the platform roundups (iOS / Android apps)
The category comparison is data-driven, but `best-local-llm-apps-iphone-2026` and
`best-local-llm-apps-android-2026` are **hand-written** (9 locale blocks each) and nothing updates
them automatically. If the tile lists `ios` and/or `android` and is a chat/LLM app (not a note or
bookmark tool), add it to the matching roundup(s): a section in all 9 locales, a TOC entry, a
`dateModified` bump (block + schema). Never invent benchmark numbers — if the app was not measured on
the test phones, say so in the section. Check with `npm run validate-platform-roundups` (warn-only).

### 5. Regenerate generated indexes
`node scripts/generate-feature-review-index.mjs` (and the tool-article-index generator) so
MCP `search_apps`/`get_app_details` and directory search surface the new review.

### 6. Risk gate
`/risk-checker src/lib/power-local-llm/articles/<slug>.ts` — run across all 9 locale blocks,
not just EN (translation waves can turn a hedged EN claim into an absolute one). BLOCK on any
CRITICAL finding — fix and re-run before proceeding.

### 7. Publish
Add the slug to `src/lib/power-local-llm/published.ts` in the same run — once all 9 locale blocks exist
and risk-checker passed (never leave it noindex). This is the actual "go live" switch: it flips `noindex` off and the
sitemap (`src/lib/sitemap/pages/power-local-llm.ts`) picks it up automatically. No manual
sitemap edit needed.

### 8. Verify
- Directory hub renders it: `src/app/directory/page.tsx` + each `src/app/{locale}/directory/page.tsx`
- Review article live at `/power-local-llm/<slug>` (and per-locale)
- Category comparison table includes it
- iOS/Android app: present in the iPhone / Android roundup (`npm run validate-platform-roundups`)
- `npm run build` passes clean (validators above all run in `prebuild`/`postbuild`)
- Sitemap includes the new URL(s)

## Notes

- **"Latest Apps Added" homepage block is automatic.** `src/components/home/LatestAppsBlock.tsx`
  (via `src/lib/home/apps-feed.ts`'s `getLatestApps`) reads `apps-barrel.ts`, filters to entries
  with `addedDate` set, and sorts descending. Once step 1 sets `addedDate` on the `ToolRecord`
  and it's in the barrel, the app appears there with zero extra work — no separate registration.
- Directory registration (step 1) and article registration (step 2) are two independent
  barrel/slug systems (`apps-*` vs plain `slugs.ts`/`articles-barrel.ts`) — don't conflate them.
