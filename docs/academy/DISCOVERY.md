# Academy v1 — Phase 0 Discovery

> **Note 2026-11-18:** Academy is now built inside this website repo like Ask Hans (see [DECISIONS.md](DECISIONS.md)).
> Sections 3 (HTTP MCP access) and 8 rows 1-4 no longer apply; everything else stays valid as background.

Date: 2026-11-17 · Method: read-only (`grep`, `sed`, `ls`, `git status`). No code changed, nothing committed, no live endpoint called.
Repo inspected: `~/promptquorum-website` (main checkout, `main...origin/main`, HEAD `440c4fed0`). The Academy repo does not exist yet, so this file sits in a plain folder `~/promptquorum-academy/docs/` (no `git init`).
Legend: **FACT** = seen in code. **UNVERIFIED** = not checked or not checkable read-only.

---

## 1. Headline finding

**Ask Hans is not a separate app. It lives inside the website repo.**

- Server: `src/app/api/ask/route.ts` (chat), `api/ask/solution/route.ts` (Power Mode reports), `api/ask/feedback`, `api/ask/event`, `api/ask/exp`
- Logic: `src/lib/askhans/*` (config, system-prompt, tools, followups, totals, …)
- UI: `src/components/askhans/*` (2,335 lines of TSX in the top folder, plus `power/`)
- Mounted once in `src/app/layout.tsx:266` behind `NEXT_PUBLIC_ASK_HANS_ENABLED === 'true'`

Consequences for the spec:
- "Reuse from Ask Hans" means **copying files out of the website repo**. Nothing is a shared package.
- Ask Hans tools call the content in-process. A separate Academy repo cannot do that (see §3).

---

## 2. LLM call pattern (spec 4.2 item 1)

| Item | Finding | Evidence |
|---|---|---|
| Provider / SDK | Anthropic, `@anthropic-ai/sdk ^1.3.0` | `package.json`; `api/ask/route.ts:18` |
| Chat model | `claude-haiku-5-5`, override env `ASK_HANS_MODEL` | `lib/askhans/config.ts` (`ASK_HANS_DEFAULT_MODEL`), `route.ts:149` |
| Report model | `claude-sonnet-5-5`, override env `ASK_HANS_SOLUTION_MODEL` | `config.ts` |
| Key | env `ANTHROPIC_API_KEY`; route returns 503 if missing | `route.ts:109` |
| Kill switch | env `ASK_HANS_ENABLED !== 'true'` → 404 | `route.ts:108` |
| Streaming | `client.messages.stream(...)`, output re-emitted as **NDJSON** lines `{t:'text'\|'tool'\|'done'\|'error'…}` | `route.ts:1-12, 170-200` |
| Params | `max_tokens` 3000, `output_config:{effort:'low'}`, system prompt with `cache_control: ephemeral`, `maxRetries:1`, 55 s timeout | `route.ts:150-185`, `config.ts` |
| Tool loop | up to 8 tool calls per answer, tools withheld after budget via `tool_choice:'none'` | `config.ts` `maxToolCallsPerAnswer`; `route.ts:172-176` |
| Runtime | `nodejs`, `maxDuration` 60 s (chat), 120 s (reports) | `route.ts:30-31`, `solution/route.ts` |
| Token logging | only `console.log('[askhans] turn', {outTokens…})` — output tokens, no input/cache tokens, no persistence | `route.ts:216` |
| **Structured output / JSON mode** | **Not used anywhere in Ask Hans.** It streams free text plus tool use. Spec 7.1 assumes JSON mode/zod-validated output; Academy must design this itself (forced tool-call schema or JSON output config). Not tested here. | grep of `route.ts`, `tools.ts` |

---

## 3. PromptQuorum content access / MCP (item 2)

**Two different access paths exist:**

1. **Ask Hans (in-process).** `src/lib/askhans/tools.ts` imports the plain functions from `src/lib/mcp/tools.ts`, `directory-tools.ts`, `pages.ts` and runs them directly. Not reusable from another repo.
2. **Public MCP server over HTTP:** `src/app/api/mcp/route.ts` (765 lines), built with `mcp-handler`, Streamable HTTP, **stateless, unauthenticated, read-only**. This is the only route for Academy as a separate app: `https://www.promptquorum.com/api/mcp`.

**Tool names.** The spec lists 8; the server registers **29** (`route.ts` `server.registerTool`):
`search_promptquorum, get_article, list_pages, get_page, list_clusters, get_app_details, list_categories, search_apps, compare_apps, explain_license, find_best_apps, check_hardware_compatibility, recommend_stack, estimate_vram, recommend_models, list_local_models, find_local_alternative, get_app_alternatives, get_latest, get_site_stats, get_hands_on_test, find_related_content, start, set_consent, forget_me, my_profile, set_language`. All 8 spec names exist.

**Argument shapes (from `tools.ts` zod schemas in `lib/askhans/tools.ts`):**
- `search_promptquorum {query, lang?, cluster?, limit 1-10}`
- `get_article {cluster, slug, lang?}`

Not read yet: schemas for `search_apps`, `get_app_details`, `compare_apps`, `explain_license`, `list_categories`, `list_clusters`.

**Things that matter for the lesson-grounding design (spec 7.2):**
- `get_article` returns the **whole article object** (all sections), not a trimmed text. Academy must trim to the ~3,000-token cap itself.
- `getArticle()` returns **no URL**. Ask Hans builds `https://www.promptquorum.com{/lang}/{cluster}/{slug}` itself (`tools.ts`, `get_article` run). The "further reading only from URLs the MCP returned" rule therefore needs `search_promptquorum` URLs, or the same URL builder.
- Every `promptquorum.com` URL in an MCP result is rewritten with `?utm_source=mcp&utm_medium=<tool>` (`src/lib/mcp/utm.ts`, `tagSiteUrls`). The URL-whitelist check must normalise or strip these, and the tags will attribute Academy traffic to "mcp" in analytics unless handled.
- Every MCP call is counted in public usage stats (`recordMcpCall`, `recordMcpDimensions`, shown on `/mcp-stats`). Academy lesson generation would pollute those numbers.
- **Rate limit:** 120 requests/min per salted IP hash, Upstash sliding window, fails open on Redis error (`route.ts:730-760`). Keyed on `x-forwarded-for`. Calls from Academy's Vercel functions come from shared egress addresses, so all learners may share one 120/min bucket. **UNVERIFIED** how Vercel sets that header for server-to-server calls.
- Content source at runtime is `generated-corpus/` data files (`lib/mcp/corpus.ts`), built by `scripts/generate-askhans-corpus.mjs` in prebuild. Do not import article barrels (caused OOM, 2026-11-08, comment in `corpus.ts`).
- The session tools (`start`, `set_consent`, …) are deliberately not exposed to Ask Hans (`tools.ts` header). Academy should not use them either.

---

## 4. UI components (item 3)

Ask Hans UI is a **floating, resizable window** with a chat area and a 1/3 side panel, not a page layout.
- `AskHansWindow.tsx` (288 lines): desktop default 50% × 80% of viewport, mobile full screen (`ASK_HANS_WINDOW` in `config.ts`)
- `ASK_HANS_SPLIT = {chatFr:3, panelFr:1}`, `MarketingPanel.tsx` (143 lines)
- `AskHansRoot.tsx` (786 lines): orchestration
- `useAskStream.ts`: NDJSON client
- `markdown.tsx` (139): markdown renderer
- `FeedbackBar.tsx` (192): 1-5 star rating
- `ConsentNotice.tsx`, `WelcomeBox.tsx`, `icons.tsx`
- `storage.ts`, `copy/{en,de,fr,…}.ts`
- Power Mode wizard: `power/PowerShell.tsx`, `profile.ts`, `drafts.ts`, `export/toDocx.ts`

Stack to mirror (`package.json`, FACT): Next `~16.3.8`, React `^19.2.8`, Tailwind `^4.3.3`, TypeScript `~6.0.3`, zod `^4.6.6`, **npm** (`package-lock.json`), Node 22 in CI. I read `AskHansRoot`, `useAskStream`, `config.ts` only partly. I have not read `AskHansWindow` or `MarketingPanel` in depth.

---

## 5. Rate limiting, bot protection, cost control, analytics (item 4)

**Rate limiting (FACT).**
- Upstash Redis via `src/lib/redis.ts` (`UPSTASH_REDIS_REST_URL/TOKEN`), `@upstash/ratelimit`.
- Chat: 8 requests/min/IP. Reports: 3 per 10 min/IP. Feedback: 6/h/IP. MCP: 120/min/IP.
- Key = SHA-256 of `IP_HASH_SALT|ip`, truncated, **fails closed in production** for chat (`route.ts:121-128`).
- Per-visit cap: 50 messages per `visitId` per 24 h. `visitId` is client-supplied (`parseBody` regex only), so it is a soft limit.

**Bot protection: none found.** grep for turnstile/botid/hcaptcha/recaptcha hit only `power-local-llm/articles/msty-review.ts` (review text). Spec 11 "reuse what Ask Hans uses" — nothing to reuse.

**Global spend ceiling: none found.** Limits are per-IP, per-visit and per-call token caps only. No daily budget counter, no cost logging.

**Analytics (FACT).**
- Umami script, cookieless, ungated, in `layout.tsx:276`. Custom events via `window.umami.track` (`lib/tracking/umami-events.ts`). That file says every custom event counts against the plan's monthly quota and events are kept sparse.
- Microsoft Clarity (`ClarityLoader.tsx`, `ClarityRouteTracker.tsx`).
- GA4 removed. `ConsentedAnalytics.tsx` is a no-op stub.
- Consent store: `src/lib/consent.ts`, key `analytics_consent`, version 2, categories analytics/recordings/marketing.
- Ask Hans own stats: Redis aggregate counters (`lib/askhans/totals.ts`, `askhans:day:<date>`), read by `npm run askhans:stats`.
- Spec 13 lists ~15 events including per-question ones. **UNVERIFIED** whether the Umami plan quota covers that; Academy on a subdomain also needs its own Umami site ID or script setup.

**Feedback/email precedent (FACT).** `api/ask/feedback/route.ts`: star rating 1-5 stored only as Redis aggregates plus an owner email via Resend (`hello@promptquorum.com`). **It deliberately accepts no free text** ("written feedback goes through the visitor's own mail program"). Resend is already used by `api/confirm`, `api/unsubscribe`, `api/feedback`, `api/ask/feedback` (`RESEND_API_KEY`).
Storage available: Upstash Redis (+ a separate `MCP_PROFILE_REDIS_*`), `@vercel/blob`. **No Postgres/KV table in use.**

---

## 6. Website: header, locales, publishing (items for Phase 8)

**Header (FACT).**
- `src/components/HeaderClient.tsx` is `'use client'`. Language comes from `useLang()` (`src/hooks/useLang.ts`), which uses `usePathname()`. No `headers()`, `cookies()` or `useSearchParams()` in the header or `useLang`. `layout.tsx:124` repeats the hard constraint (June outage).
- Right-hand cluster = `<SearchTrigger />` + `LanguageSwitcherWrapper` (hidden below `sm`) + mobile menu button (`HeaderClient.tsx:219-240`). The cap fits next to `SearchTrigger`. Labels use `t(key, lang)` from `src/translations.ts`.
- **UNVERIFIED:** actual `x-vercel-cache: HIT` today. Must be measured before and after.

**Locales.** 9 locales, English unprefixed, others path-prefixed (`PATH_PREFIX_LANGS`). `<html lang="en">` is hardcoded server-side (known gap, `layout.tsx:124`).

**How a standalone page is built today** (pattern = `/security`): `src/app/security/page.tsx` + one `src/app/{de,fr,…}/security/page.tsx` per locale (8 files), content in `src/lib/security/content.ts`, metadata via `generateAlternates` (`src/lib/hreflang.ts`), manual entry in `src/lib/sitemap/pages/static.ts` (hand-set `lastmod`), manual edit of `public/llms.txt`. IndexNow runs on push via `.github/workflows/indexnow-on-push.yml`.

**Schema:** no shared WebPage/FAQPage helper found. `src/lib/geo-schema.ts` only builds entity `about` blocks. `check-duplicate-faqpage.mjs` and `validate-faqpage-structure.mjs` exist. Not read.

**Validators named in the spec exist:** `validate-internal-links.mjs`, `validate-affiliate-disclosure.mjs`. Prebuild chain in `package.json` also runs translation-integrity, locale coverage, volatile numbers, no-internal-note-leakage and others. `pr-checks.yml` says it "does NOT gate merges".

---

## 7. Privacy precedent

`docs/askhans-privacy.de.md` (stand 2026-11-07) plus consent flow in `components/askhans/ConsentNotice.tsx`: Ask Hans sends question text and conversation to Anthropic; Vercel host logs may contain request bodies (owner decision); consent text is versioned (`ASK_HANS_CONSENT_TEXT_VERSION = '2026-11-07-v6'`), valid 30 days; stats only with opt-in; saved conversations only with opt-in. Academy will need an equivalent notice and a privacy-policy update (spec 14 says only "disclose"). The privacy doc says Ask Hans runs "on the German pages", but routes exist for all 9 locales (`src/app/*/askhans/page.tsx`); I did not reconcile this.

---

## 8. Where SPEC.md contradicts the code or the repo rules

| # | Spec says | Found | Impact |
|---|---|---|---|
| 1 | Existing structure is "website / app / marketing repos"; reuse "Ask Hans app" (§4.1, 4.2) | Ask Hans is inside the website repo | Copy files; no shared package possible without a refactor |
| 2 | Spec assumes it can call MCP like Ask Hans does (§7.2) | Ask Hans calls functions in-process; Academy must use HTTP `/api/mcp` | Network latency per lesson; shared rate-limit bucket (§3) |
| 3 | 8 MCP tools | 29 registered | Spec can use `find_related_content`, `get_page`, `get_hands_on_test` etc. |
| 4 | `furtherReading` only from MCP-returned URLs | `get_article` returns no URL; all site URLs get `utm_source=mcp` | Whitelist logic must normalise UTM or build URLs like `tools.ts` |
| 5 | "Reuse existing bot protection / rate limiting / spend ceiling" (§11) | Rate limiting yes; bot protection and spend ceiling **do not exist** | Both are new work in Phase 7 |
| 6 | Structured output with zod (§7.1) | No precedent in Ask Hans | New design |
| 7 | Server stores comments (§8a) | Existing feedback route intentionally takes no free text; privacy docs say so | Needs an owner decision and a privacy-text update |
| 8 | Explainer: "scaffold (noindex) → … → noindex removal" (§12.2) | Repo owner rules (`~/CLAUDE.md`, Index gate, HARD): never ship a content page noindex, no scaffold stage; add to sitemap in the same run | Drop the noindex stage for `/academy` |
| 9 | "Launch EN + DE first if translation cannot finish" (§12.2) | Index gate and locale-coverage validators expect all 9 locales; the translation gate requires `docs/geo-translation.md` and a "geo-translation: APPLIED" line. I did not run the validators to confirm what fails for a partial set | Likely not allowed as written; check `check-locale-coverage.mjs` |
| 10 | Risk and translation gates not mentioned | Risk gate (run the `risk-checker` skill, report PASS/REVIEW/BLOCK + score) and translation gate are mandatory for new pages | Add both to Phase 8 |
| 11 | Tailwind v4 | Confirmed: `^4.3.3`. `CLAUDE.md` says Tailwind v3 and React 18; it is stale | Trust `package.json` |
| 12 | "PR CI gate exists" | `pr-checks.yml` reports but does not gate; branch protection **UNVERIFIED** (GitHub MCP failed to connect) | Minor |
| 13 | §17 "two or more unmerged branches means stop and report" | `git branch --no-merged main` lists 7 branches from other sessions (6 as worktrees under `~/pq-sessions`) | Literal rule would block any start. Needs your interpretation: per-Academy-work only? |
| 14 | Hans pushes to main; feature branch per phase | Repo uses `scripts/session.sh start <name>` worktrees, deploy on demand via `scripts/deploy.sh`; main checkout currently has uncommitted changes (`.claude/settings.json`, `next-env.d.ts`, untracked `freshness-data/2026-10-19-unweighted.json`) | Phase 8 must use a worktree, not the main checkout |
| 15 | PDF with `pdf-lib` / `@react-pdf/renderer`, Noto fonts | Neither in dependencies (`docx` is). Site fonts: Plus Jakarta Sans, JetBrains Mono, Noto Sans Arabic via `next/font/google`; no CJK font in the repo | Font licensing and bundle size still **UNVERIFIED** |
| 16 | Analytics events (§13) | Umami quota note in `umami-events.ts` | Plan event volume before building |

---

## 9. Not verified

- Live `x-vercel-cache` headers, Vercel plan limits (120 s functions assumed by `solution/route.ts`)
- Whether Vercel BotID/Turnstile is available on the account
- Production env values (`ASK_HANS_ENABLED`, spend, DPA with Anthropic)
- Umami plan quota; separate Umami site ID for the subdomain
- Behaviour of rate limiting for server-to-server MCP calls
- GitHub branch protection (GitHub MCP not connected)
- Schemas of the remaining MCP tools; the `~/PromptQuorumClaude` and `~/promptquorum-marketing` folders were not inspected (if an "app" repo exists, it is not the website)
