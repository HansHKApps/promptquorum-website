# Tech Debt Log

Tracked issues that are non-blocking but should be addressed when touching related code.

| Item | Notes | Severity |
|------|-------|----------|
| `.next/types/validator.ts` TypeScript warning | Pre-existing, non-blocking. Appears in pre-commit hook type-check but does not block `npm run build`. Investigate when touching build config or upgrading Next.js. | Low |
