# Tech Debt Log

Tracked issues that are non-blocking but should be addressed when touching related code.

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
