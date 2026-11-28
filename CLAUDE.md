# CLAUDE.md — PromptQuorum Website

## UPDATE FREEZE until 2027-01-15 (owner rule, 2026-11-28, HARD — overrides every other rule on update timing)

**Why:** update rounds used 30-40% of the owner's weekly token budget.

**Blocked until 2027-01-15, not before:** price sweeps; content or fact refresh rounds; `/updater` / page-updater runs on existing pages; monthly, semi-annual, annual and quarterly SEO refreshes; cross-page consistency rounds; bulk meta/CTR rewrites; re-checks of already published pages; any batch or multi-agent job doing one of these. A passed `next_refresh_due` / `next_seo_review_due`, a reminder, a memory note, an open-items list or a finding from an earlier run is NOT a reason to start. Do not offer or start these; if asked indirectly, say they are frozen. List new findings in one line for the January round.

**Update windows after the freeze:** from the middle of January 2027 (2027-01-15), then every four months (mid-May, mid-September). A window is not automatic: the owner starts it.

**Window rules:** one session only; one shared, dated price list used by all pages; exact prices stay on a few main price pages and other pages link there (build this during the January round); differences between clearly dated prices wait for the next window.

**Still allowed during the freeze:** new articles, app-directory entries and features the owner asks for; fixing a specific statement that is false, unsafe or legally risky once it is known (that statement and what directly repeats it on that page only — no sweep, no related pages); fixing a broken build, page or site; read-only measurement (`seo:measure`). New pages keep all normal gates.

**Override:** only the owner, in their own words in the current conversation, naming the work (for example "override the freeze and update X"). A general "finish all" or "fix everything" is not an override.

**Cost limit (always, also after the freeze):** before using more than one agent, state a token estimate and wait for the owner's OK. Only one session works on a given set of pages.

**Lighter check for number-only edits:** when an edit changes only numbers, prices or dates (no new or reworded claims), check the changed lines in every locale, the matching totals and any conclusion or ranking that depends on them, and report it as "number-only check" (not as a risk-checker PASS). No full re-run. If a conclusion, ranking or wording changes, or for any new or rewritten text, the full risk-checker gate applies as before.

## MANDATORY: Read Before Any Content Work

Before writing or editing any user-facing text on this website, read and apply the full GEO writing guidelines:

**`docs/GEO_WRITING_GUIDELINES.md`** — mandatory for all content (pages, blog posts, FAQ entries, feature descriptions, meta tags, headings, CTAs)

**`docs/ARTICLE_SCAFFOLD_2026.md`** — canonical field order, required schema fields, and localized FAQ titles for all new articles. Check this before writing any new article to avoid repeating the defects fixed in the June 2026 GEO audit.

**Translation gate (mandatory):** before writing ANY non-EN text — whole article, one new section or a single FAQ — open and read `docs/geo-translation.md` in that session and apply its per-language rules. Never translate from memory. Every report for work that touched non-EN blocks states `geo-translation: APPLIED` (owner rule, restated 2026-10-19 after it was skipped on the DeepSeek-R1 refresh).

**Risk gate (mandatory):** every new article and every page-updater run must pass the `risk-checker` skill (`/risk-checker <article file>`) before commit — GEO Rule 35b and `docs/PAGE_UPDATER.md` Step 5.7. `BLOCK` never ships. Site-wide triage: `npm run risk:scan`.

**Risk gate must be RUN, not imitated (owner rule, 2026-11-03, HARD; only exception: the number-only check in UPDATE FREEZE above):** the gate is only passed by actually invoking the `risk-checker` skill on the final file (Skill tool, skill `risk-checker`, argument = the article path; subagents too) and pasting its gate line (`PASS`/`REVIEW`/`BLOCK`, score, counts) into the Update Report. A hand-applied rubric, a grep pass or `npm run risk:scan` alone does NOT count and must never be reported as the risk gate. If the skill cannot be invoked, the run is INCOMPLETE: say so, do not write "PASS (manual)", and do not commit/ship the article as finished. Any later edit to an article's text (including a layout trim) re-opens the gate for that file.

**Batch runs:** see `docs/PAGE_UPDATER.md` §Batch and Delegated Refresh Runs and §Lessons Learned Log.

**Index gate (owner rule, 2026-10-26, HARD — never again):** never leave a normal content page `noindex`, and never ship one that way — no "publish later", no scaffold stage, no waiting on open items. A new article, app review, comparison or roundup is added to its `published.ts` allowlist **in the same run that finishes it** (all 9 locales + risk gate), so the first deploy serves it indexable and in the sitemap. Open items and risk findings go into the report as notes; they are never a reason to hold indexing back. `noindex` is only for utility pages (`/download`, `/waitlist`, `/unsubscribed`, `/not-found`) and genuine stubs with no content. Deploy stays on demand ([Deployments are on demand] below), but the *indexable* state must already be on main.

**Founder re-review (owner rule, 2026-11-07):** when a founder who already carries a "Founder-reviewed" badge (first review approved) sends a SECOND (or later) round of comments or corrections and the owner integrates them one-to-one, do this in the same run, no extra approval needed: (1) bump `founderReviewedDate` to the date of the new round in the tile's `apps/<slug>.ts`; (2) append that date to `founderReviewDates` (ISO, ascending, the first review date first; create the array as `[firstDate, newDate]` on the second round; the last entry must equal `founderReviewedDate`, enforced by `npm run test:app-activity`); the tile, drawer and review-article banner then show "reviewed N times" with the dates in all 9 locales automatically; (3) note the round in the tile's header comment and in the review's `fromTheMaker` note. This does NOT relax the first-badge rule: a badge is only ever set the first time on explicit maker approval of the finished text, and a round that is only partly integrated or disputed does not bump the date.

**Design gate (owner rule, 2026-11-01, HARD):** every new or updated article in `local-llms` / `power-local-llm` / `prompt-engineering` carries `designSkin: 'hub',` on all 9 locale objects, set in the same run (first commit for new pages). Never ship a page on the old design. Verify with `npm run check:page-updater` and `npm run test:article-skin`. See `docs/GEO_WRITING_GUIDELINES.md` Rule 35c and `docs/PAGE_UPDATER.md` Step 4.9.

**Author gate (owner rule, 2026-11-08, HARD):** one author entity. JSON-LD author only via `src/lib/author.ts` (`authorPerson()`/`authorRef()`), never an inline author object or an Organization author; the byline under the H1 links to `/author/hans-kuepper` with `rel="author"` (not locale-prefixed, never `/about`); no new external links or `sameAs` entries without the owner; never link `/en/...` (it redirects to the root). Verify with `npm run check:author`. Full rules: `docs/GEO_WRITING_GUIDELINES.md` Rule 50.

Summary of non-negotiable rules:
- **Answer-first:** Lead every section with the direct answer or key fact. Explanation follows.
- **Structure:** Use H2/H3 headings, bullet lists, short paragraphs (≤3 sentences each).
- **Facts only:** Every claim must be verifiable. No vague superlatives ("leading", "best", "powerful", "revolutionary").
- **Entity names:** Use full product/company names on first mention (e.g., "PromptQuorum", "OpenAI GPT-4o", "Ollama"). Be consistent throughout.
- **Schema markup:** Every page needs relevant JSON-LD (Article, FAQPage, HowTo, BreadcrumbList, etc.).
- **No marketing fluff:** Every sentence must add information. Delete anything decorative.
- **No typed volatile numbers:** GitHub star counts are never typed into an article — use `starsFor(lang)('<tile-slug>')` from `src/lib/power-local-llm/app-facts.ts` (read from the directory tile; refresh with `npm run refresh-app-stars`). `npm run validate-volatile-numbers` fails the build on new hard-coded counts. See GEO_WRITING_GUIDELINES.md Rule 49.
- **Clickable URLs:** Any domain or URL mentioned in reader-facing prose (`content`, `items`, `faqs`, `note`, `callouts`, table cells, etc.) must be a markdown link `[label](https://url)`, never bare text like `(cherryai.com)`. See GEO_WRITING_GUIDELINES.md Rule 44.

---

## Project Summary

PromptQuorum Website is the marketing site for PromptQuorum — a multi-model AI prompt dispatch and consensus tool. The site showcases features, explains how the product works, and hosts the content clusters. The app is in free public beta — there is no waitlist (retired 2026-10-18; /waitlist 301s to /download). It deploys automatically to Vercel on every push to `main`.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom design tokens |
| UI components | Radix UI primitives |
| Language | TypeScript (strict mode) |
| Package manager | npm |
| Deployment | Vercel (auto-deploy on push to main) |
| OG Images | Next.js `next/og` ImageResponse (built-in, free) |
| Dev server | `http://localhost:3000` |

## Environment Setup

```bash
npm install
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Preview production build
```

## File Structure

See `src/` itself; key entry points: `src/app/` (routes), `src/components/` (`*Client.tsx` UI), `src/lib/{cluster}/` (articles, slugs, published), `src/locales/` (UI strings), `docs/` (rules). Older tree: `docs/claude-md-moved-sections.md`.

## Code Conventions

- Components: `PascalCase` filenames (`HeaderClient.tsx`)
- Folders: `kebab-case` (`src/components/`)
- Functions/variables: `camelCase`
- Styling: Tailwind CSS `className` prop only — no separate CSS files
- Exports: Named exports (not default)
- TypeScript: Strict mode — no `any`
- User-facing dates ("Last updated", "Published"): always render via `formatDisplayDate(isoDate, lang)` from `src/lib/formatDisplayDate.ts` — never print a raw ISO date string (`article.dateModified`/`article.publishDate`) directly in JSX. Spelling out the month avoids ambiguous MM/DD-vs-DD/MM numeric formats for US/European readers. JSON-LD, OG `modifiedTime`, and sitemap `lastmod` are exempt — those must stay raw ISO 8601.

## Language / i18n

The site supports 9 languages, all on **path-prefix URL routing** (`/de/...`, `/fr/...`, `/ja/...`, `/zh/...`, `/es/...`, `/pt/...`, `/ar/...`, `/ko/...`) per `PATH_PREFIX_LANGS` in `src/lib/i18n/constants.ts`. English stays unprefixed at the site root (`/blog` not `/en/blog`). The legacy `?lang=XX` query-param scheme has been fully migrated away from (commits `d29c661b5`, `248c877f8`) — do not reintroduce query-param-only language handling in new code.

- `pt` emits hreflang/schema `inLanguage` as `pt-BR` (Brazilian Portuguese) via `toOutputLocale()`; `ar` is RTL (`getLangDir()` in `src/lib/i18n/constants.ts`)
- All nav links must resolve to the correct path-prefixed href via the shared nav helper in `HeaderClient.tsx`
- Translations live in `src/locales/[lang].ts`
- **Known gap (tracked, not yet fixed):** `src/app/layout.tsx` still hardcodes `<html lang="en" dir="ltr">` server-side for every locale; a client-side `HtmlLangUpdater.tsx` patches it post-hydration only. Raw HTML served to crawlers is wrong for all 8 non-EN locales until the `[locale]` segment refactor lands. See `docs/PAGE_UPDATER.md` Step 4.8 for the interim check.

### Critical: Server-to-Client Language Handoff

**`useLang()` defaults to `'en'` on first render.** Any client component that renders article body content must receive the server-resolved language as a prop — otherwise crawlers (Google, Perplexity, ChatGPT Browse) see English HTML on all `?lang=XX` URLs, making translations invisible to search engines.

**Rule:** Always pass `initialLang={selectedLang}` from the server page to `PromptEngineeringPostClient`:

```tsx
// page.tsx — correct ✅
<PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />

// Wrong ❌ — all language URLs serve English to crawlers
<PromptEngineeringPostClient slug={slug} />
```

If you add a new client component that renders multilingual content, follow the same pattern: accept `initialLang?: Language` as a prop and use it as the initial value before `useLang()` hydrates. Full details in `docs/TRANSLATION_SPEC.md` section 9.

## OG Image Generation

All Prompt Engineering articles automatically generate language-specific Open Graph images for social sharing.

- Route: `src/app/api/og/[slug]/route.tsx` — uses Next.js built-in `next/og` (free, no dependencies)
- **Automatic:** Images are generated on-demand with article title, intro, and PromptQuorum branding
- **Multi-language:** Each image includes the selected language (`?lang=XX` param)
- **No manual work:** Just write the article content — og:image is automatically created for all languages
- **Cache:** Generated images are cached for 24 hours (immutable)
- **GEO-compliant:** Ensures all articles have unique, professional social sharing previews

Writers do not need to create or manage og:images; they are handled automatically by the system.

## Hero Images Must Be Localized — No Language Exceptions

**MANDATORY rule, no exceptions:** every article's `heroImage` field, in **every language block**, must point to a hero image rendered **in that block's own language**. Never point two different language blocks at the same hero file, and never reuse the `-en` hero as a placeholder for other locales "until someone gets to it later." A hero image with English text baked into it, served on a Spanish/German/Japanese page, is a visible, embarrassing bug — it is exactly the kind of crawler-visible English-on-a-translated-page defect this repo's i18n rules exist to prevent (see the "Critical: Server-to-Client Language Handoff" section above).

This applies to every cluster that uses static pre-rendered hero images (`power-local-llm`, `local-llms`, etc. — anywhere an article sets `heroImage: '/images/{slug}-hero-{lang}.webp'`). It does **not** apply to the Prompt Engineering `/api/og/[slug]` route above, which renders OG images on-demand per request and is already language-aware automatically.

**How to generate a hero image for one language:**
1. Start the dev server (`npm run dev`).
2. POST to `http://localhost:3000/api/hero-image` with `{ lang, title, highlights, facts, footer }`. **Discover posters must be sparse** — Discover cards show mostly on phones, next to three other cards, so the image is a bold full-bleed poster of ~30 words total: the localized article title (huge) plus up to 3 hand-written `highlights` of ≤7 words each (≤16 chars for zh/ja/ko). Never pass prose sentences: the route *drops* any line over 9 words (20 CJK chars) instead of truncating it, then falls back to short `facts` values, then to headline-only. `bullets` is still accepted and subject to the same rule, so long `quickAnswerTop.bullets` no longer render. Write `highlights` per language from that article's own translated content — never invent claims.
3. **For FeatureAppPost review articles**, still pass `facts` (license, RAM/VRAM, price, platforms; same source and localization rules as before — reuse `directory-i18n.ts` strings, omit `null`/`'TODO'`). They are not drawn as chips any more (unreadable at thumbnail size) but become the poster's punch lines when no `highlights` fit, so keep each value short (`MIT`, `Free`, `8 GB RAM`). There is no minimum-body-chars floor any more; only `title` is required.
4. Save the returned PNG to `public/images/{slug}-hero-{lang}.png`, then convert to lossless WebP (`sharp({lossless: true, effort: 6})`, matching `scripts/convert-heroes-to-webp.mjs`) and delete the intermediate PNG.
5. Reference the resulting `{slug}-hero-{lang}.webp` from that language block's `heroImage` field — never from any other block.
6. Repeat for **all 9 languages** (en, de, fr, ja, zh, es, pt, ar, ko) before considering a new article "done." Generating only the English hero and shipping the other 8 language blocks without their own hero is the same class of bug as shipping English body text on a translated URL.

Existing batch scripts (`scripts/gen-batch*.mjs`, `scripts/gen-hub-heroes.mjs`, `scripts/gen-32-review-heroes.mjs`) show the working pattern — one hero spec object per language, one API call per language, one output file per language. Follow that pattern for new articles instead of improvising a shortcut.

## Image Attribution (SVG Branding)

All SVG images in `public/images/` must carry a `promptquorum.com` corner attribution mark and embedded Dublin Core metadata.

**After adding any new SVG files**, run:

```bash
npm run brand-images
```

This script (`scripts/brand-images.mjs`) is idempotent — it skips files that already contain `promptquorum.com` and processes only unbranded files. Run it before committing new images.

**Why:** Images are scraped, shared, and used by AI systems without context. The corner mark and SVG `<metadata>` block (dc:creator, dc:rights, dc:source) are the only persistent attribution signals that survive outside the page.

## Parallel Sessions — ALWAYS use a session worktree

**Never run two Claude sessions in `/Users/hanskuepper/promptquorum-website` at the same time.** A git checkout has one working tree, one index and one HEAD, so parallel sessions corrupt each other. This is not theoretical — on 2026-08-31 it caused, in one afternoon: one session's `git commit` silently swallowing another's staged file deletions, a branch switch that deleted a third session's test file mid-run, and `next build` failing with "Another next build process is already running".

**Start every parallel task with its own worktree:**

```bash
scripts/session.sh start <task-name>   # own directory, branch, and port
scripts/session.sh list                # what is running
scripts/session.sh finish <task-name>  # merge to main, push, clean up
scripts/session.sh drop <task-name>    # abandon (branch archived, recoverable)
```

`start` prints the directory, branch (`session/<name>`) and an allocated port.

**Two ways in, both fine:**
- Preferred: `cd` to the printed directory and run `claude` there.
- Already running in the shared checkout? Run `session.sh start`, then call the **`EnterWorktree` tool with `path` set to the printed directory** — that moves this session's own working directory into the worktree. Creating the worktree is not enough on its own; without `EnterWorktree` you are still editing the shared checkout.

**Rules inside a session worktree:**

- Work only in your own directory. Never `cd` to the main repo.
- Use the port `start` gave you — every session gets a distinct one.
- Dev server: `npm run dev -- --port <yours>` (works again since fonts are self-hosted).
- **Fonts are self-hosted** (`src/fonts/`, `public/fonts/`). Never use `next/font/google`: it downloads from Google during every build and broke builds and `npm run dev`.
- Build via `scripts/with-build-lock.sh npm run build`, never bare `npm run build`. Worktrees isolate git, not RAM: each build takes a ~4 GB heap, so the lock caps concurrent builds (default 2) and the rest queue instead of swapping.
- Test against a production build (`npx next start --port <yours>`), not the dev server — Playwright against dev is flaky and ~7x slower.
- Never use bare `git stash` / `git stash pop`; the stash stack is shared across worktrees.
- Commit with explicit paths (`git commit --only <paths>`) as a second line of defence.

**Capacity on this machine (24 GB RAM, 12 cores):** 8 concurrent sessions is comfortable. The limit is memory during builds, which the build lock already handles; editing, type-checking and dev servers are cheap. Disk is ~1 GB per worktree via APFS copy-on-write clones.

## Git Workflow

- Branch: `feature/[name]` for all new work, `fix/` for bugs
- Commits: conventional format (`feat:`, `fix:`, `docs:`, `refactor:`)
- `main` is always stable and auto-deploys to Vercel

## Do NOT

- Mention, imply, or disclose that content was written or assisted by AI — in copy, commit messages, meta tags, or anywhere user-facing. All content publishes as PromptQuorum editorial.

- Write content without applying GEO guidelines
- Use vague marketing language ("powerful", "seamless", "revolutionary", "cutting-edge")
- Add hardcoded strings without adding translation keys for all 5 languages
- Use CSS files or `<style>` tags — Tailwind only
- Use default exports — named exports only
- Omit JSON-LD schema markup on new pages
- Add a client component that renders multilingual content without passing `initialLang` from the server page (see Language / i18n section above)
- **Use `export const metadata` (static) on any page that supports `?lang=` parameter** — always use `export async function generateMetadata({ searchParams })` instead, so crawlers see correct language metadata on all language URLs. This rule prevents the systematic English-only metadata issue (see commit 1d685040).

## Presentation Skill (/gamma) — gammaDescription Requirement

Every `/gamma` deck needs `gammaDescription` (2-3 sentences: "The slide deck below covers: …", named slide topics, PDF CTA) in all languages right after `gammaEmbedUrl` in `src/lib/prompt-engineering/content.ts`, or the deck is invisible to search/AI crawlers. Full spec + example: `docs/GAMMA_SKILL_UPDATES.md` (Step 0.5 mandatory); full text of this rule: `docs/claude-md-moved-sections.md`.

## Comparison Tables — Column & Cell Content Rules

**MANDATORY** for every `columns`/`rows` table: headers ≤25 chars, cells ≤60 chars (use ` / ` to split), compact numbers/units, no explanations in cells. Full sentences → set `itemHeadings: true` on the section instead of forcing a table (ref: `loci-ai-review-offline-local-ai.ts`). Never give a table both an identifier column and a separate `Link` column — fold the URL into the identifier cell as a markdown link. Test at 375px and desktop width.

Enforcement: `npm run validate-table-cells` (informational); `.git/hooks/pre-commit` (untracked, check it exists) blocks staged articles with a header >40 or cell >110 chars unless `itemHeadings: true`. Full rules, examples and rationale: `docs/claude-md-moved-sections.md`.

## No Month Names in Titles, Headings, or Meta Descriptions

A month name in a title, heading, or meta description is a freshness claim
someone has to keep true by hand, in nine languages, forever. That has never
held here. An audit on 2026-08-28 found 48 page titles, 341 headings and 676
descriptions naming a month, the oldest stuck on March, and the failure mode
was usually locale drift: the English copy got refreshed and the other eight
locales kept the old month, so non-EN SERPs advertised stale dates for pages
that were current in English.

**The signal is redundant.** Every article already renders a self-updating
"Last updated <date>" badge from `dateModified` (via `formatDisplayDate`, all
nine locales), plus the New/Updated badges in `src/lib/article-freshness.ts`.
The hand-maintained month duplicated a signal the site computes for free.

**The rule is about position, not presence:**

- ❌ A month+year in **trailing stamp position** — inside a closing
  parenthetical, or after a final dash/comma/colon:
  `Performance Benchmarks (June 2026)`, `GPU-Preisvergleich — Juli 2026`,
  `… — verified against primary sources, July 2026.`
- ✅ A month+year **mid-sentence**, where the date is the fact rather than a
  claim about the page's currency: `The Performance Gap Closed in July 2026`,
  `EU AI Act deadline deferred to December 2027`, `per MIT Tech Review (May 2026)`.
- ✅ Anything **day-precise**. A day number means an event:
  `M5 Ultra: Confirmed August 25, 2026`.
- ✅ **Body prose is never checked.** `src/lib` holds ~3,300 month mentions and
  most are release dates, regulatory deadlines and knowledge cutoffs.

Keep the **year** where the freshness tier calls for it — strip only the month.
`Best Local LLMs August 2026: …` becomes `Best Local LLMs 2026: …`, never
`Best Local LLMs: …`.

**Enforcement:** `scripts/validate-month-drift.mjs` runs in `build-with-fix.js`
(next to the freshness-tier validator) and in `.github/workflows/pr-checks.yml`,
and **fails the build**. Deliberate exceptions go in
`scripts/month-drift-allowlist.json` with a written reason. Note the validator
matches full month names only — `Jan` is a product this site covers (Jan AI),
not January.

## No Year or Month in Slugs / URLs (HARD RULE — never again)

**A slug/URL must never contain a year or a month, in any cluster, for any freshness tier — including `annual`.** No exceptions, no "just this once."

**Why:** A year baked into the URL (`/power-local-llm/locally-ai-review-2026`) turns the page into a liability at every year boundary — it either goes stale in the URL forever, or someone has to rename the slug, update every internal link across 9 languages, add a 301 redirect, and hope nothing external (backlinks, GSC history, cached SERPs) breaks. This is not hypothetical: it recurred on `locally-ai-review-2026` (published 2026-09-04) despite the freshness-tier system already existing specifically to keep years out of URLs. A URL is permanent infrastructure; a year is not — never combine them.

**The year belongs in the title and in `specific_year` / `next_refresh_due`, never in the slug:**
- ❌ slug `locally-ai-review-2026` — ✅ slug `locally-ai-review`, title "Locally AI Review (2026): …"
- ❌ slug `2026-gpu-price-rankings` — ✅ slug `gpu-price-rankings`, title "2026 GPU Price Rankings"
- ❌ slug `best-llms-january-2026` — ✅ slug `best-llms`, title "Best LLMs 2026" (and see the month rule above — month stays out of the title too)

This applies identically to `local-llms`, `prompt-engineering`, `power-local-llm`, `prompt-bites`, `smart-home`, `balcony-solar`, `enterprise-ai`, and blog slugs. When a page is genuinely about a one-time dated event and the slug feels incomplete without a year, keep the year in the title/schema and let the "Last updated" badge and `specific_year` field carry the freshness signal — the same reasoning as the month rule above.

**Enforcement:** `scripts/validate-freshness-tier.mjs` fails the build if any article's slug (derived from the filename, or the `slugs.ts` key) contains a 4-digit year or a full month name. There is no allowlist for this one — if you think a page needs it, that's a sign the freshness tier or the URL naming is wrong, not that the rule needs an exception. Raise it instead of routing around the gate.

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

## Company HQ flag on directory tiles (owner rule 2026-11-14)

Every NEW directory app gets `hqCountry` (uppercase ISO alpha-2) + `hqCountrySource` (URL) on its `ToolRecord` **only when the HQ country is clear from a primary source** — it renders as a small flag with the tooltip "Company HQ: <country>" (`HqFlag.tsx`). **Always read the app's privacy policy AND its impressum/imprint (also terms, about and contact pages) for a country (owner rule 2026-11-15): if any country is mentioned there — a company address or registered office, the governing law, or the national authorities/dispute bodies the policy refers users to — use that country, and put that page's URL in `hqCountrySource`.** Only when none of these pages names a country (or they name conflicting countries), **ask the owner which country to use** (or "no flag"); never guess from the TLD, a name or an aggregator, and in an unattended run leave it unset and say so in the report. Existing tiles are backfilled later, not now. Flag files live in `public/flags` (`npm run add-flag -- <code>`); `npm run validate-local-ai-apps` enforces it. Full step: `docs/NEW_APP_INTAKE.md` step 1.

## Outbound links carry a source tag (owner rule 2026-10-28)

Every link that leaves promptquorum.com gets `utm_source=promptquorum.com&utm_medium=referral&utm_campaign=<directory|app-review|comparison|prompt-bites|home|article>` so app makers and shops see in their own analytics that the visit came from us. Applies to directory tiles/drawers, reviews, hubs, article prose. **PromptQuorum has no affiliate programme — never label anything `affiliate` in a tag, and never add affiliate parameters to any URL.** Shops (Amazon, Newegg, B&H, ...) are tagged like everything else — the goal is that a shop looking at its own analytics sees the visits we sent; never exempt a shop because it "ignores UTM".

- **Do nothing per link.** `OutboundUtmTagger` (mounted once in `src/app/layout.tsx`) tags any external `<a>` on hover/focus/touch/right-click via `withUtm()` in `src/lib/outbound-utm.ts`. New links, new clusters and markdown links in article data are covered automatically. Never hand-write `utm_` into a destination URL.
- **Deliberately untagged:** code hosts and stores (GitHub, App Store, Google Play, Hugging Face, PyPI), reference/standards/government/university hosts, social platforms, our own domain. Edit `SKIP_HOSTS` in `outbound-utm.ts` to change this; a URL that already has any `utm_*` is never touched.
- **Clean URLs stay clean** in server HTML, JSON-LD, sitemaps, `llms.txt` and MCP output (MCP has its own `utm_source=mcp` tag in `src/lib/mcp/utm.ts`). Single-link opt-out: `data-no-utm`.
- Test: `npm run test:outbound-utm` (also asserts the tagger is still mounted in the layout).

## Freshness Tier (MANDATORY before writing any new article)

Before writing or substantially editing any article, ask:

1. **"What is the core purpose of this page in one sentence?"** — Clarify scope before classifying.

2. **Apply 3-tier test:**
   - **evergreen**: Timeless concept, no year/model/hardware refs. Examples: "What is prompt engineering?", "How does an LLM work?", "Guide to fine-tuning fundamentals", **"Prompt review workflow for teams"**, **"Guide to CI/CD gates for LLMs"**. → Add `freshness_tier: 'evergreen'`
     - **Note:** A workflow/process/checklist article is evergreen even if it mentions specific tools (GitHub Actions, GPT-4o, Braintrust) as *illustrative examples*. Reserve `semi_annual` for articles whose PRIMARY subject is a specific versioned model, hardware spec, or ranked list with a year in the title.
   - **semi_annual**: Specific models, hardware, pricing, or "best-of" recommendations with year in title. Examples: "Best Llama 3.2 Models 2026", "RTX 4090 Performance Benchmark 2026", "Top Open-Source LLMs in 2026". → Add `freshness_tier: 'semi_annual'` + set `next_refresh_due` to 6 months from publish date
   - **annual**: Year-specific event, ranking, or timeline. The year goes in the **title** and `specific_year` field only — **never in the slug/URL** (see "No Year or Month in Slugs / URLs" below). Examples: title "2026 AI Model Releases", slug `/ai-model-releases/`; title "2026 GPU Price Rankings", slug `/gpu-price-rankings/`. → Add `freshness_tier: 'annual'` + set `specific_year: 2026`

3. **If 2 tiers apply → SPLIT into multiple pages.** Example: "GPT-4 vs Llama 3.2 (models) + How to Fine-Tune (concept)" → write as two separate articles.

4. **Add `freshness_tier` to `en:` block BEFORE writing content:**
   ```typescript
   en: {
     title: '...',
     freshness_tier: 'evergreen' | 'semi_annual' | 'annual',
     // ... rest of content
   }
   ```

5. **Build will fail if missing** on pages published >= 2026-04-21. The validator `scripts/validate-freshness-tier.mjs` runs at build time and enforces:
   - All new articles (publishDate ≥ 2026-04-21) must have `freshness_tier` set
   - `evergreen` articles must NOT contain year references, specific models, or benchmarks
   - `semi_annual` articles must have year in title and `next_refresh_due` set
   - `annual` articles must have `specific_year` set (year in title, never in the slug)
   - **No article slug, in any tier, may contain a year or a month** (see "No Year or Month in Slugs / URLs" above)

### Pre-commit Enforcement (Evergreen Article Validation)

A pre-commit hook runs `scripts/validate-evergreen-articles.mjs` on `freshness_tier: 'evergreen'` articles and blocks commits containing concrete LLM model names, version numbers, years or time-sensitive words (latest, current, newest…); code blocks/comments are exempt. Fix by changing the tier (`semi_annual` + `next_refresh_due`, or `annual` + `specific_year`) or rewriting timelessly. `--no-verify` is a last resort. Details: `docs/claude-md-moved-sections.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Deployments are on demand (owner rule 2026-10-17)

Pushing/merging to `main` NEVER deploys by itself — `scripts/vercel-ignore-build-step.sh` skips every production build that lacks `[force-deploy]`. Sessions merge to main freely (`scripts/session.sh finish`) and must **never** put `[force-deploy]` in a commit message. When the owner says "ship"/"deploy"/"go live", run `scripts/deploy.sh` once — it pushes one empty `[force-deploy]` commit, which builds everything accumulated on main as a single production deployment. Right after it, in the same step, run `npm run seo:log -- --mark-deployed --all-pending --date <today YYYY-MM-DD>` so the logged SEO changes start their T+14/T+28 clocks (no separate ask; if the deploy was skipped or failed, do not run it). Commit the updated `src/data/seo-changelog.json` like any other change.

## GSC data before page edits (standing rule, owner 2026-11-02)

The `gsc` MCP tool is connected. I never paste GSC data by hand; Claude pulls it. Whenever I ask to update, rewrite or optimise a specific page (including `/updater` and `/geo-meta-optimizer` runs):

1. First call the `gsc` tool `page_stats` for that page's live URL: **last 28 days, top 20 queries. If the 28-day pull has no usable data (no rows, impressions but empty `top_queries`, or <500 impressions), use 3 months (90 days).** If `top_queries` is still empty, fall back to `mcp__gsc__query` (`[query]` with `page_equals`, then `[page,query]` with `page_contains:<slug>` over 90 days) and say which window/rung produced the data.
2. Show a short table first: clicks, impressions, CTR, position, then the top queries, with the window dates.
   **Per language:** pull each locale's queries separately. If a locale has enough (3+ target queries, 30+ combined impressions, noise removed), adapt that locale's text (title, meta, headings, FAQ, keywords) to its own queries; if not, data-free review for that locale. Never translate another locale's query wording literally. Report one row per locale.
3. Use that data as input for the edit (never ask me to paste GSC data).
4. Use the exact live URL form, starting with `https://www.promptquorum.com/`, no trailing slash,
   English unprefixed, other locales as `/de|fr|ja|zh|es|pt|ar|ko/...`. Never `?lang=`.
   Mapping: `src/lib/{cluster}/articles/{slug}.ts` -> `/{cluster}/{slug}` (check the cluster's
   `slugs.ts`); use the post-redirect URL for moved pages.
5. Mark the last 1-2 days as provisional.
6. If no data comes back, say so and continue (No-GSC mode in the skills).
7. Do not call it for edits that are not about a specific page.
8. Everything GSC-related is automatic: monthly `gsc-intake` and the T+14/T+28 `seo:measure` pulls also use the gsc tool; never ask me for exports or uploads. If a step truly cannot be automated, skip it and say so.
