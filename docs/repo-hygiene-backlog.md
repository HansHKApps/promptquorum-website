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

## Cache-control / middleware performance issue (added 2026-05-03)

Discovered during Pass 2 deploy verification. Pre-existing, not caused by refactor.

**Symptom:** Homepage and other static-eligible pages have variable response times 1.5–28s with `x-vercel-cache: MISS` on every request. Lambda cold-starts on every page view.

**Root cause (compounding):**

1. `next.config.ts` (lines ~41-43) sets sitewide `Cache-Control: public, max-age=0, must-revalidate` via `source: '/:path*'`. Forces revalidation on every request.

2. `src/middleware.ts` (line ~36) matches every path via `matcher: '/:path*'`, reads request URL, sets per-request headers (`x-selected-lang`, `x-pathname`). Request-aware middleware prevents Next.js from statically optimizing — every route becomes dynamic SSR.

Combined: every page view triggers SSR → lambda cold-start → response ends up with `private, no-cache, no-store` despite config saying `public`.

**Suggested fix paths (separate session, decide which):**

- Narrow `next.config.ts` matcher to skip static-eligible HTML pages (`/`, `/about`, `/faq`, hubs)
- Narrow middleware matcher to skip routes that don't need locale detection
- Or accept current behavior if dynamic personalization is intentional (validate need)

**Investigation needed before fixing:**

- Why is `x-selected-lang` set per-request? Could it move to client-side hydration?
- Is `?lang=` query param the only locale signal, or is there cookie/header detection?
- Can we mark hub pages as `export const dynamic = 'auto'` to allow ISR?

**Impact:** SEO + UX. Slow TTFB hurts Core Web Vitals (LCP). Fixing this could deliver larger user-visible improvement than the content.ts refactor itself.
