# Repository Hygiene Backlog

Pre-existing repo-wide concerns surfaced during the content.ts refactor session (2026-04-26). All deferred to post-refactor canary stable.

## npm audit warnings
7 warnings (5 moderate, 2 high) in transitive dependencies. Pre-existing — not introduced by ts-morph install. Address post-refactor.

Diagnose:
- `npm audit` — all warnings
- `npm audit --omit=dev` — production deps only
- `npm audit fix` — apply non-breaking fixes
- `npm audit fix --force` — apply potentially breaking fixes (review carefully)

## Build artifacts in repo
- `out/` directory — Next.js export artifact, likely from pre-Vite migration. Verify .gitignore covers it.
- `dist/` directory — Vite artifact, leftover from Vite→Next.js migration. Verify .gitignore covers it.

## Vite→Next.js migration leftovers
Mentioned in CLAUDE.md. Review src/ for any unused Vite-era files post-refactor.
