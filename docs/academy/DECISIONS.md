# Academy — decisions after Phase 0

Newest first. Each entry: date, who decided, what, and what it changes in [SPEC.md](SPEC.md).

## 2026-11-18 (Hans): Academy is a website tool like Ask Hans, not a separate app

> "This should be just normally on my website. This is just another tool like Ask Hans, nothing special. Same format."

Supersedes SPEC 2 #9 and #10, SPEC 4.1 and SPEC 12, plus the 2026-11-17 MCP-key decision.

**Where it lives**
- Academy lives in the website repo (`promptquorum-website`) at `/academy`, with path-prefixed locales (`/de/academy`, …) like every other page. There is no separate repo, no subdomain and no separate Vercel project.
- The local folder `~/promptquorum-academy` (Phase 1 attempt as its own app) is obsolete.

**How it is built, mirroring Ask Hans**

| Part | Location |
|---|---|
| Server page shared by 9 thin locale routes | `src/components/academy/AcademyPage.tsx`; `src/app/{,de,fr,…}/academy/page.tsx` |
| Client tool | `src/components/academy/AcademyApp.tsx` |
| UI copy per language | `src/components/academy/copy/*.ts` |
| Logic | `src/lib/academy/*` |
| Kill switch | `ACADEMY_ENABLED` (pages 404 while off), like `ASK_HANS_ENABLED` |

- The learner flow (setup → quick check → programme → lessons → tests → results) consists of **screens inside the one tool**, not URLs. SPEC 5's routes (`/diagnostic`, `/lesson/[n]`, …) become views. No learner page ever exists as a URL, so none needs noindex. `/academy` itself is a normal indexable tool page.

**Content access, cost controls and infrastructure**
- Content access is **in-process**, exactly like Ask Hans (`src/lib/mcp/tools.ts` functions, `generated-corpus/` data files). The HTTP MCP client, the separate MCP key, the shared-rate-limit problem and the `utm_source=mcp` problem from DISCOVERY.md section 3 all disappear.
- API routes will live under `src/app/api/academy/*` and reuse the existing Anthropic SDK, Upstash rate limiting, `IP_HASH_SALT` and Resend setup.

**What happens to SPEC 12 (header cap + explainer)**
- The explainer content goes onto `/academy` itself, below or around the tool.
- The header icon links to `/academy`.
- No separate explainer page and no "Start learning" hop to another domain.

## 2026-11-17 (Hans, after reading DISCOVERY.md)

1. ~~MCP access uses a separate Academy key, added later.~~ **Obsolete since 2026-11-18:** in-process access needs no key.
2. **Free-text feedback comments may be stored server-side.** SPEC 8a stands as written: max 500 characters, "no personal data" notice. This differs from Ask Hans, which accepts no free text. The privacy policy needs an Academy section before launch (SPEC 14).
3. **Unmerged-branch rule (SPEC 17) applies to Academy work only.** Hans left it to Claude: at most one open Academy branch at a time. Website branches from other, unrelated sessions do not count.

## Implementation choices (Claude, open to change)

- **App UI in all 9 languages.** The page language picks the UI copy, as with Ask Hans. The programme language is a separate choice on the setup screen, preset to the page language.
- **Subject suggestions are built on the server at render time** (`src/lib/academy/topics.ts`), so no `/api/topics` endpoint is needed:
  - six content hubs, labelled from the Academy copy;
  - the 12 largest directory categories, labelled from the localized taxonomy.
- **Not in the sitemap and `llms.txt` yet.** `/academy` gets added to the sitemap (`src/lib/sitemap/pages/static.ts`) and `llms.txt` in the same run that switches it on for launch. Until then the page is a 404, like Ask Hans while off.
