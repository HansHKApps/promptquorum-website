# Zero-click batch 01: run under docs/PAGE_UPDATER.md

This file does NOT replace `docs/PAGE_UPDATER.md` or `CLAUDE.md`. It only adds what is specific to this batch.
**Read `docs/PAGE_UPDATER.md` and `CLAUDE.md` in full first (current version on main, including the standing rule "GSC data before page edits" of 2026-11-02) and follow them exactly.** If anything in this file conflicts with them, they win: stop and tell me about the conflict.

## Decisions already made by the owner
- Lane: **full PAGE_UPDATER run** (Steps 0-6 plus 2.5, 4.4, 4.5, 4.8, 4.9, 5, 5.5, 5.7 and 10) for every article in this batch. Not a meta-only lane.
- Articles that were already changed recently are INCLUDED but scheduled in the LAST round, so their earlier measurements stay readable (see below).
- All GSC work is automatic: use the `gsc` MCP tools exactly as the standing rule says (28 days, then 90 days, then the query ladder; every locale on its own queries). Never ask me for exports or uploads. If a step truly cannot be automated, skip it and say so.

## Input
`seo/zero-click-42.csv`: 42 URLs that received 500+ impressions and ZERO clicks in the 28 days 2026-10-05 to 2026-11-01. Columns include `locale`, `family_slug`, `impressions_28d`, `avg_position`, `group` (`snippet-candidate (pos<=10)` or `ranking-problem (pos>10)`) and `prior_seo_change`.
The unit of work is the **article file** (all 9 locales live in one `.ts` file), not the URL. The 42 URLs are about 40 articles.

## Already-changed articles (verified in `src/data/seo-changelog.json` on 2026-11-02)
Only 3 of the 40 articles have earlier `seo:log` entries:
| Article | Earlier change | Measurement dates |
|---|---|---|
| `hiwaifu-review` (de and fr are in the 42) | title/meta, all 9 locales, logged 2026-10-18 (commit 6badef6bd; deploy date not recorded) | T+14 2026-11-01, T+28 **2026-11-15** |
| `dify-ai-workflow-builder-review` (de is in the 42) | en, logged 2026-10-30, live 2026-10-31 | T+14 2026-11-14, T+28 **2026-11-28** |
| `ai-code-review` (en is in the 42) | en, logged 2026-10-30, live 2026-10-31 (older entry 2026-05-16 has no deploy date) | T+14 2026-11-14, T+28 **2026-11-28** |
Schedule these three in the **last round**, after their T+28 date, unless I say otherwise. (`locally-uncensored-review` is NOT in this batch.)

## Phases (stop after each one and wait for my approval)

### Phase 0: Map, status and measurement catch-up (no content edits)
1. Map each of the 42 URLs to its article file. Three slugs did not match a file name: `best-vector-database`, `enterprise-rag-vector-database-deployment-guide`, and the pt page `how-prompt-engineering-evolved`. Find them (rewrites, redirects, different folder).
2. `/local-llms/best-vector-database` and `/local-llms/best-vector-database-2026` may be one article under an old and a new URL (years were stripped from URLs on 2026-09-04). Check the redirect and canonical before touching either. Do not assume two separate topics.
3. Report the freshness tier, `dateModified`, `last_seo_review` and `designSkin` status of each article.
4. **Measurement catch-up.** Run `npm run seo:measure -- --status`. Pull what is due with the `gsc` tool as PAGE_UPDATER.md describes, run `seo:measure ... --write`, and commit only `src/data/seo-changelog.json` on the branch as `seo: measurement results T+14 2026-11-02`. If you need a full Pages/Queries export, the `gsc` tool `export_gsc_csv` writes `seo:measure`-compatible CSVs to `~/.gsc/exports/` and returns the exact command (only if that tool is present; otherwise use your normal method). Report the verdicts: page | logged | T+14/T+28 | CTR before | CTR after | position change | verdict | flags. Do not judge pages with fewer than 100 impressions.
   Note: 243 of 308 changelog entries have no recorded deploy date and are measured from the logged date ("approx"). List the pages where that could matter, and do NOT guess deploy dates.

### Phase 1: Triage (no edits)
For each of the 42 URLs pull the queries per the standing rule and classify:
- **A: automated.** Mostly templated or machine-like queries (for example "evaluate <company> on <topic>", pasted prompts, `site:` queries). No edit is expected to help. List them for my decision; do not edit unless I say so.
- **B: snippet or content mismatch.** Real queries, position 10 or better. Your protocol says position 5-8 with 0% CTR is a title/description problem.
- **C: ranking problem.** Position worse than 10. Your protocol says this needs content depth or authority work, not a title change.
- **D: URL or duplicate question.** To be resolved in Phase 0.
- **E: unclear.** Too few visible queries (Google hides rare queries; report the share of impressions with visible queries).
Output one table: article | URL | class | share of impressions with visible queries | top 5 visible queries with impressions | one-line reason. Then stop.

### Phase 2: Pilot, one article
Pick ONE article from class B that is NOT in the already-changed list (propose it, I approve). Run the complete protocol on it, all 9 locales (per-locale rule), including the gates and the Update Report. Keep each locale's existing title/meta where it passes every check ("NO CHANGE"). Log every title/meta change with `npm run seo:log` including the baseline. Deliver the Step 6 Update Report and the diff. Stop.

### Phase 3: Rounds
After I approve the pilot, work in rounds of at most 5 articles, grouped by cluster (see "Batch Efficiency" and the Cross-Page Consistency Rule in PAGE_UPDATER.md). Same full protocol per article. One Update Report per article and one summary table per round. Stop after every round. The already-changed articles go in the final round.

### Phase 4: Measurement
I will tell you the live (deploy) date. Then run `npm run seo:log -- --mark-deployed --all-pending --date <date>` only for entries from this batch. At T+14 and T+28 pull and measure as PAGE_UPDATER.md describes and report group-level results (single pages have too few clicks).
Optional control: do not edit the other zero-click pages with 100+ impressions that are not in this batch until T+28.

## Hard rules
1. Work on the branch `session/zero-click-batch-01`. Do not push, merge or deploy.
2. Do not edit pages outside the approved list.
3. Never invent facts, query data, benchmark numbers or deploy dates.
4. Do not bump `dateModified` without reader-visible content changes (Anti-Pattern #8).
