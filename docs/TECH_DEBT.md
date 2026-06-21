# Tech Debt Log

Tracked issues that are non-blocking but should be addressed when touching related code.

## PE rename-orphans — alias-covered, no action needed (June 2026)

The V2 inventory flagged 33 prompt-engineering articles as "orphans" because inbound links point at their **old** (pre-rename) URL slugs. These are **not broken**. `src/lib/prompt-engineering/slugs.ts` is an alias table: every old slug maps to the article's current internal key, so old URLs resolve to the correct article with HTTP 200.

**Verification (2026-06-21):**
- All 33 alias keys are present in `articles-barrel.ts` (code-verified)
- 6 live spot-checks all returned 200: `how-prompt-engineering-evolved`, `ai-hallucinations-why-ai-makes-things-up`, `gpt-claude-or-gemini-how-to-pick-the-right-model`, `best-prompt-engineering-tools-2026`, `prompt-engineering-for-content-teams`, `prompt-engineering-setup-small-teams`

**Decision:** No inbound-link backport (2,004 instances) needed or wanted. Alias handles it.

**For future auditors:** These 33 old slugs will always appear as "orphans" in any tool that checks URLs against the slug map without understanding the alias pattern. They are **expected false-positives**. Do not re-file them as bugs.

Complete alias table (old slug → article key):

| Old slug (URL) | Article key |
|---|---|
| `how-prompt-engineering-evolved` | `prompt-engineering-history` |
| `5-building-blocks-every-prompt-needs` | `prompt-building-blocks` |
| `ai-hallucinations-why-ai-makes-things-up` | `ai-hallucinations-how-to-stop` |
| `faster-ai-answers-how-to-prompt-for-speed` | `prompt-for-speed` |
| `temperature-and-top-p-control-ai-creativity` | `temperature-and-top-p` |
| `context-windows-explained-why-ai-forgets` | `context-windows-explained` |
| `beyond-text-how-to-prompt-with-images` | `prompt-with-images` |
| `tokens-costs-limits-economics-of-ai-prompting` | `tokens-costs-limits` |
| `system-prompt-vs-user-prompt-whats-the-difference` | `system-prompt-vs-user-prompt` |
| `gpt-claude-or-gemini-how-to-pick-the-right-model` | `gpt-claude-gemini-which-model` |
| `which-prompt-framework-should-you-use` | `which-framework-to-use` |
| `the-single-step-prompt-method` | `single-prompt-method` |
| `googles-prompting-guide` | `google-prompting-guide` |
| `build-your-own-prompt-framework` | `build-your-own-framework` |
| `tree-of-thought-and-react` | `tree-of-thought-react` |
| `structured-output-and-json-mode` | `structured-output-json-mode` |
| `best-prompt-engineering-tools-2026` | `best-pe-tools-2026` |
| `best-prompt-optimization-tools-for-teams` | `best-prompt-optimization-tools-teams` |
| `best-prompt-testing-evaluation-tools` | `best-prompt-testing-tools` |
| `braintrust-vs-prompthub-vs-vellum-vs-promptfoo` | `braintrust-vs-prompthub-vs-vellum` |
| `prompt-engineering-vs-rag-decision` | `prompt-engineering-vs-rag` |
| `prompt-version-control-workflows` | `prompt-version-control` |
| `prompt-governance-in-production` | `prompt-governance-production` |
| `prompt-security-tools-injection-testing` | `prompt-security-tools` |
| `prompt-audit-and-regression-risk` | `prompt-audit-regression` |
| `best-tools-structured-output-json` | `best-tools-structured-output` |
| `multi-model-prompt-testing-workflows` | `multi-model-prompt-testing` |
| `prompt-library-management-for-teams` | `prompt-library-team-management` |
| `prompt-engineering-for-content-teams` | `pe-for-content-teams` |
| `prompt-engineering-for-developers-workflow` | `pe-for-developers-workflow` |
| `prompt-engineering-for-support-operations` | `pe-for-support-operations` |
| `prompt-framework-selection-for-teams` | `prompt-framework-for-teams` |
| `prompt-engineering-setup-small-teams` | `pe-setup-small-teams` |

---


| Item | Notes | Severity |
|------|-------|----------|
| `.next/types/validator.ts` TypeScript warning | Pre-existing, non-blocking. Appears in pre-commit hook type-check but does not block `npm run build`. Investigate when touching build config or upgrading Next.js. | Low |

## Dead searchParams reads in EN hub pages (June 2026)
`force-static` was added to all EN pages (cache/en-routes-static, 2026-06-20). For [slug] article pages (with `generateStaticParams`) this fully flips them to `●` SSG. For hub pages without `generateStaticParams` (`/`, `/local-llms`, `/prompt-engineering`, `/blog`, `/compare`, `/faq`, `/features`, `/frameworks`, `/how-it-works`, `/privacy`, `/download`, `/about`), the `await searchParams` in `generateMetadata` overrides `force-static` in Next.js 15 — they remain `ƒ` (dynamic). Fix = Option A: remove `searchParams` from `generateMetadata` signature on these hub files and hardcode `const selectedLang = 'en'` (middleware guarantees ?lang= never reaches EN pages). Trigger: next time touching hub page metadata, or if hub page caching becomes a priority. Affects ~12 files, 4-line change each.

## html lang/dir is client-set (June 2026)
HtmlLangUpdater sets lang/dir post-hydration, so server HTML shows lang="en" on all locales; Arabic gets a post-hydration RTL flash + wrong server dir. hreflang is intact so the language signal is OK meanwhile. Proper fix = [locale] dynamic segment (Option C, route restructure). Trigger: before Arabic search demand grows, or next time doing route-level work. Not urgent.

## EN hub/article routes still dynamic (June 2026)
/, /local-llms, /local-llms/[slug] read await searchParams in their page components → still no-store/dynamic after the root-layout cache fix. EN = ~94% of impressions, so this is the bigger caching prize. Investigate removing/deferring searchParams. Likely smaller than Option C.

## Broken internal links — second straggler batch (pre-existing, post-243-fix) (June 2026)

The 243-link broken-links PR (merged 2026-06-20, HEAD c5fa1c7b) fixed all identified issues. A follow-up sitemap-seeded crawl surfaced additional pre-existing broken links NOT included in that fix scope. All were confirmed present in `git show HEAD~2` (before our commits). These fall into four groups:

### (a) `url:` property strip/repoint links — same pattern as 9 stragglers just fixed
These are `{ title: '...', url: '/cluster/slug' }` relatedLinks objects pointing to dead slugs. Needs same strip/repoint treatment as the straggler pass.

| Dead path | Hit count | Source article(s) | Fix |
|---|---|---|---|
| `/prompt-engineering/frameworks` | 7× | `prompt-engineering-vs-fine-tuning.ts` (all locales) | strip |
| `/prompt-engineering/how-to-write-effective-prompts` | 7× | unknown — needs grep | strip |
| `/prompt-engineering/retrieval-augmented-generation` | 5× | unknown — needs grep | strip |
| `/prompt-engineering/model-selection` | 5× | unknown — needs grep | strip |
| `/prompt-engineering/llm-api-benchmarks` | 5× | unknown — needs grep | strip |
| `/prompt-engineering/cost-optimization` | 5× | unknown — needs grep | strip |
| `/prompt-engineering/best-local-llms-2026` | 2× | unknown — needs grep (wrong-cluster link) | strip or repoint |
| `/local-llms/apple-silicon-vs-nvidia-gpu-local-llm` | 2× | unknown — needs grep | strip |
| `/prompt-engineering/gpt-claude-gemini-which-model` | 1× | unknown (PE file-key used as URL; Cat 2 missed in `url:` prop) | repoint → `gpt-claude-or-gemini-how-to-pick-the-right-model` |

Grep pattern: `grep -rn "slug-name" src/lib/**/articles/`

### (b) `siblingBites[]` architectural broken links
These slugs appear in `siblingBites: ['slug']` arrays in prompt-bites articles. The frontend prepends `/prompt-bites/` at render time. The referenced slugs don't exist.

- `/prompt-bites/sillytavern-vs-agnai-vs-risuai-roleplay` (9×)
- `/prompt-bites/best-local-llm-creative-writing-2026` (9×)

Fix requires either: (1) creating the articles for these slugs, or (2) removing the entries from `siblingBites[]` arrays. These are architectural — not simple strip/repoint.

### (c) Runtime render bug: `/prompt-engineering/negative-prompting/undefined`
The page `/ja/prompt-engineering/negative-prompting` generates a link to `.../undefined`. No `undefined` string literal found in article files — this is a JavaScript evaluation issue (a `url:` field or array item resolves to `undefined` at render time, probably a missing field in a relatedLinks object for the `ja` locale block). The crawler found it as 2-3 hits across locale variants.

To debug: inspect the `ja` locale block of `negative-prompting.ts` for relatedLinks objects with missing or undefined `url` keys.

### (d) Missing locale SVG image files
`/local-llms/multilingual-local-llms/multilingual-llm-comparison-{locale}.svg` files are referenced in the `multilingual-local-llms` article but the actual `.svg` files don't exist in `public/`. Affects `en`, `de`, `fr`, `ja` locale variants (2-3 hits each).

Fix: either create the missing SVG files or remove the `<img>` references from the article data.

---

### Crawl reliability note
The recursive crawl (`npx website-crawler --recurse`) proved unreliable for link health checks: it timed out on 86% of requests (44k total rows, ~38k status-0 timeouts) because it follows every generated/duplicate URL including all `?lang=xx` permutations, expanding exponentially. For future crawl-based link audits, seed from `sitemap.xml` instead:

```bash
# Extract sitemap URLs → check status only (no recursion)
curl -s https://www.promptquorum.com/sitemap.xml | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' > /tmp/sitemap-urls.txt
# Then curl-check each URL at concurrency 3-5
```

Or run the crawler with `--depth 1` from only the sitemap URLs (not from every page found).

### Pre-existing out-of-scope 404s (separate known issues)
These appeared in the same crawl but are NOT related to internal article links:
- **Presentation locale routing** (~36 rows): `/presentations/*.html` pages have no locale variants (`/de/presentations/`, `/fr/presentations/`, etc.) but pages link to them with locale prefixes.
- **Missing static images** (~18 rows): various `public/images/` files referenced but absent.
- **Malformed external URLs** (~39 rows): Notion, NIST, Anthropic, and similar URLs that return non-200 from the crawler (likely crawl-blocking, not real 404s).
