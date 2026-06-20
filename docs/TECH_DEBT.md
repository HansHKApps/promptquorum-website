# Tech Debt Log

Tracked issues that are non-blocking but should be addressed when touching related code.

| Item | Notes | Severity |
|------|-------|----------|
| `.next/types/validator.ts` TypeScript warning | Pre-existing, non-blocking. Appears in pre-commit hook type-check but does not block `npm run build`. Investigate when touching build config or upgrading Next.js. | Low |

## html lang/dir is client-set (June 2026)
HtmlLangUpdater sets lang/dir post-hydration, so server HTML shows lang="en" on all locales; Arabic gets a post-hydration RTL flash + wrong server dir. hreflang is intact so the language signal is OK meanwhile. Proper fix = [locale] dynamic segment (Option C, route restructure). Trigger: before Arabic search demand grows, or next time doing route-level work. Not urgent.

## EN hub/article routes still dynamic (June 2026)
/, /local-llms, /local-llms/[slug] read await searchParams in their page components → still no-store/dynamic after the root-layout cache fix. EN = ~94% of impressions, so this is the bigger caching prize. Investigate removing/deferring searchParams. Likely smaller than Option C.
