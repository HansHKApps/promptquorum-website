# Content.ts Refactor Plan — 2026-04

## Goal
Split the two monolithic `content.ts` files into per-article modules, eliminating the 89k/43k-line monolith problem that drives high Claude Code token costs and edit risk.

## Scope
Two files, refactored in two passes:

| Pass | Target | Lines | When |
|---|---|---|---|
| Pass 1 | `src/lib/prompt-engineering/content.ts` | 43,240 | First (smaller, safer baseline) |
| Pass 2 | `src/lib/local-llms/content.ts` | 89,869 | After Pass 1 stable in production (48h+ canary) |

## Target architecture
Per-article flat files. Category grouping stays in existing `themes.ts` files (already separate from content). No category folders.

Structure:
- `src/lib/<domain>/types.ts` — extracted interfaces
- `src/lib/<domain>/themes.ts` — EXISTING, unchanged
- `src/lib/<domain>/slugs.ts` — EXISTING, unchanged (PE only)
- `src/lib/<domain>/index.ts` — barrel, exports the original `peContent` / `llmContent` shape
- `src/lib/<domain>/articles/<slug>.ts` — one file per slug, all languages inside

## Why per-article flat
- Maximum edit efficiency (~32× token reduction per Claude Code edit)
- Translation work stays cohesive (all 5 langs per slug in one file)
- Recategorization via `themes.ts` is a one-line change, no file moves
- Multi-category articles supported naturally (just list slug in multiple `articleKeys[]`)
- Drift detection trivial (compare `themes.ts` slugs vs `articles/` directory)

## Parser strategy
**AST-based, not regex-based.** Mandatory due to indent variability discovered during audits:
- Local LLMs: 2 misindented slugs (fixed)
- PE: 1 misindented slug (fixed), 2 cosmetic 8-space-indent language blocks (deferred)

Use TypeScript Compiler API or `ts-morph`. Regex would silently drop content at non-standard indents.

The parser must:
1. Parse the source `content.ts` as a TypeScript AST
2. Locate the top-level `peContent` / `llmContent` object literal
3. For each slug property, emit a per-slug file preserving all language sub-objects, schema overlays, section IDs, and top-level fields byte-identically
4. Emit a deterministic barrel that reassembles the original export shape
5. Fail loudly on any unexpected node type — never silently skip

## Safety gates (12 total, hard-stop on any failure)

| # | Gate | Check |
|---|---|---|
| 1 | Branch isolation | Refactor branch, never on main |
| 2 | Backup git tag | Pre-refactor tag exists for instant rollback |
| 3 | Parser dry-run | Runs against a copy in /tmp, never the real file first |
| 4 | TS build | `npm run build` passes |
| 5 | TS strict | No `any` introduced; all interfaces resolve |
| 6 | HTML byte-diff | Rendered HTML for all pages matches baseline |
| 7 | JSON-LD diff | Structured data on all pages byte-identical |
| 8 | Sitemap diff | URL set unchanged |
| 9 | Bundle size diff | No unexpected bloat (>5% triggers investigation) |
| 10 | Vercel preview build | Preview deploy succeeds without errors |
| 11 | Manual QA | Top 10 GSC pages spot-checked on preview URL |
| 12 | 48h canary | Soft launch behind feature flag before old file removal |

## Rollout strategy

Feature flag: `NEXT_PUBLIC_USE_SPLIT_CONTENT=true`

The barrel `index.ts` reads this flag. When OFF, it re-exports the original `content.ts` constant unchanged. When ON, it assembles the export from the split files.

| Phase | Flag | Behavior | Rollback |
|---|---|---|---|
| Pre-merge | OFF | Original file used | N/A |
| Merge to main | OFF | Refactored code deployed but inactive | None needed |
| 24h observation | OFF | Build proven on prod infra | Don't flip flag |
| Flip flag | ON | Split files become source of truth | Set flag back to OFF, instant |
| 48h canary | ON | Both code paths exist | Flag toggle, no redeploy |
| Post-canary | ON | Original `content.ts` removed in separate commit | `git revert` of removal commit |

## Push policy
- Local commits per phase, no push between phases
- Single push to feature branch only when local production build + diff gates pass
- Never push to main directly during refactor
- Branch protection on main requires PR + Vercel status check (set up before Phase 0)

## Local-vs-Vercel parity
Before any push, run the production-equivalent build locally:

    rm -rf .next
    NODE_ENV=production npm run build

Plus case-sensitivity check on the new articles directory (Vercel runs Linux; macOS is case-insensitive):

    node -e "const fs=require('fs');const d='src/lib/prompt-engineering/articles';const f=fs.readdirSync(d);const lc=f.map(x=>x.toLowerCase());const dup=lc.filter((x,i)=>lc.indexOf(x)!==i);if(dup.length){console.error('CASE COLLISION:',dup);process.exit(1)}else console.log('OK',f.length,'files')"

## Phases (per pass)

| Phase | Duration | Action |
|---|---|---|
| 0 | 30 min | Branch, backup tag, baseline HTML snapshot |
| 1 | 60–90 min | Write & test parser on 1 slug → run on all |
| 2 | 30 min | Generate barrel `index.ts`, types extraction |
| 3 | 30 min | TS strict + build gate |
| 4 | 30 min | HTML diff gate vs baseline |
| 5 | 15 min | Schema validation on representative pages |
| 6 | 30 min | Vercel preview deploy + manual QA |
| Total active | ~3.5–4 hours | One Opus session |
| Canary | 48h elapsed | Observation, no active work |

## Deferred items (post-refactor cleanup)
Cheap on split files; expensive on monolith. Tracked in:
- `docs/audits/local-llms-link-audit-2026-04-25.md`
- `docs/audits/prompt-engineering-audit-2026-04-26.md`

Tasks deferred to post-canary:
- Delete `src/lib/prompt-engineering/content.ts.backup.de` (1.8 MB)
- Fix 34 broken local-llms internal links
- Add `multimodal-local-llms` to `relatedReading` in adjacent articles (orphan)
- Reconcile `themes.ts` ↔ articles drift (2 dead keys in `hardware-setups`)
- Translation backlog: 25 incomplete local-llms articles (20 EN-only + 5 partials), 0 incomplete PE articles (100% coverage confirmed via AST audit)
- Investigate `-en` slug-suffix translation pipeline leak (`local-llm-limitations-setup-time-en`)

## Hard rules
1. Refactor changes how content is **stored**, not what's **rendered**. URLs, slugs, schema, hreflang — all preserved byte-identically.
2. Single-variable principle: refactor commits must not mix in content fixes. Link fixes, translation fills, etc. happen in separate commits AFTER refactor canary stable.
3. Hard-stop on any unexpected diff at any gate. No "probably nothing" judgments.
4. No push to main during refactor. Feature branch + Vercel preview only until canary passes.
5. The original `content.ts` file stays in place behind a feature flag until 48h canary completes. Removal is a separate commit.

## Abort triggers
Stop immediately and revert if any of the following occur:
- Build fails on Vercel preview
- HTML diff shows unexpected content changes
- JSON-LD schema differs from baseline
- Sitemap URL set changes
- Bundle size grows >5%
- Manual QA reveals broken page on preview URL
- Claude Code session caps mid-task with code in undefined state

When aborting: `git checkout main && git branch -D refactor/<branch>`. Audit findings preserved in their respective docs.

---

## Lessons from Pass 1 (PE Refactor — completed 2026-04-26)

Pass 1 succeeded but surfaced methodology improvements worth applying to Pass 2.
This section captures lessons fresh, before they fade.

### Audit methodology
- **Skip regex audits entirely. Use AST from the start.** Initial PE audit (regex-based) missed 10 articles using non-canonical 2-space indent. Local-llms regex audit similarly missed 12 language blocks. Numbers in any regex-based audit are unreliable.
- **AST audit must be Phase 0 step.** Re-verify article counts, language coverage, and orphan slugs before any refactor work. Cost: 5 minutes via ts-morph script.
- **Numbers in `docs/audits/local-llms-link-audit-2026-04-25.md` are regex-based.** Re-verify via AST before trusting them.

### Tooling
- **ts-morph parser strategy is proven.** No methodology change. AST traversal handled all PE indent variations cleanly.
- **Per-article import detection works.** Most articles need only `Language` type. Only 2 of 61 PE articles needed translation helpers.
- **Snapshot/diff scripts are reusable.** `scripts/snapshot-routes.mjs` and `scripts/diff-snapshots.mjs` work for any PE/local-llms baseline.
- **macOS curl/xargs silently fails on bulk operations.** The `xargs > file` pattern produced 0 output even with concurrency 8. Switch to Chrome extension iframe-based testing for bulk URL QA.
- **Vercel preview deployment protection blocks curl-based QA.** Disable as Phase 0 prep, not during QA phase.
- **Heredoc size cap exists somewhere.** ~30-line chunks always work. Plan multi-section doc creation as multiple appends from the start.
- **Plan mode in Claude Code is too restrictive.** Sandboxes file writes and forces ExitPlanMode/AskUserQuestion patterns. Stay in auto-edit; the human-in-the-loop chat workflow IS the safety mechanism.

### Local-llms-specific risks (Pass 2)

Local-llms is structurally different from PE in ways that affect parser design:

- **Type signature is `Partial<Record<Language, LLMArticle>>`** — missing languages are valid. PE used strict `Record<Language, PEArticle>`. Parser must emit `Partial<...>` for local-llms files. PE-style strict assertion would fail compilation.
- **25 incomplete articles** (20 EN-only + 5 partials, per AST audit). Parser must handle missing-language case without inventing empty stubs.
- **89k lines is at the edge of 1M context.** AST parser loading may be slower than PE. Plan for longer Phase 1.
- **themes.ts drift already documented**: 86 articleKeys vs 85 articles. Re-verify via AST as Phase 0 step. Likely 2 dead keys in `hardware-setups`.
- **34 broken internal links + 1 orphan** (`multimodal-local-llms`) already documented in `docs/audits/local-llms-link-audit-2026-04-25.md`. Do NOT fix during refactor — single-variable principle.
- **Possible `-en` slug-suffix translation pipeline leak** observed (`local-llm-limitations-setup-time-en`). Audit before Pass 2 to verify no leaks add complexity.

### Process

- **Three-system workflow worked well**: claude.ai (planning), Claude Code in VS Code (execution), Chrome extension (browser tasks). Always state which system to use; don't assume context.
- **AI-side merge buttons are blocked by design.** Both Claude Code and Chrome extension refuse to click merge/destructive actions. Plan for human-click steps in the timeline.
- **Feature flag rollout was the right safety choice but added friction.** Worked correctly; never invoked rollback. For Pass 2, keep the pattern for consistency — the methodology is now proven.
- **24h canary acceptable when 48h is too costly.** Token allocation pressure is a legitimate trade-off. 24h covers the high-value observations; 48h adds marginal coverage.
- **Single-variable principle held throughout.** Refactor commits never mixed in content fixes. All audit findings (broken links, stub articles, i18n bugs) deferred to post-canary cleanup. This kept blast radius understandable.
- **Pre-existing issues will surface during QA.** PE Pass 1 surfaced 25 stub articles, 19 orphan slugs, zh translation quality issues, dead schema fields. None caused by refactor — all pre-existing. Expect the same pattern in Pass 2; document and defer.

### Pass 2 estimated faster than Pass 1
Pass 1 took one focused day (audit corrections + methodology development). Pass 2 should be ~half that — methodology proven, scripts written, only the data file changes.
