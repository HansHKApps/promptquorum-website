# Claude Code Extension Rules — PromptQuorum

Copy this entire file into Claude Code's extension settings (File → Preferences → Extension Rules) to unlock AI-assisted development with full project context.

---

## Project Overview

**PromptQuorum Website** — Multi-model AI dispatch tool marketing site + content hub.
- **Framework:** Next.js 15 (App Router), React 18, TypeScript strict
- **Languages:** 5 locales (EN/DE/FR/JA/ZH) with query param routing (`?lang=xx`)
- **Styling:** Tailwind CSS + Radix UI
- **Analytics:** Umami, Vercel Analytics, GA4 (editorial outbound-link tracking)
- **Deployment:** Vercel (auto-deploy on push to `main`)

**Outbound Link Tracking (May 2026 Implementation):**
- Event: `outbound_click` fires on click to external editorial links
- Payload: `{ vendor, article, cluster, lang, position, target_domain }`
- Vendors tracked: Hetzner, Ollama, Anthropic, OpenAI, MCP, Hugging Face, etc.
- 11 articles across 3 clusters (LOCAL LLMs, Prompt Engineering, Power Local LLM)
- Chrome extension debugger: `pq-tracker-ext/` (toast notifications + event log)

---

## Commands

```bash
npm run dev              # Dev server at http://localhost:3000
npm run build            # Production build (validates translations + cluster noindex)
npm run lint             # ESLint
npm run validate-translations   # Check power-local-llm theme/slug/type consistency
npm run validate-seo            # SEO field completeness
npm run generate:seo-registry   # Regenerate SEO registry post-article-bulk-changes
```

**Key:** `npm run build` runs: `validate-translations` → `next build` → `test-cluster-noindex`

---

## Architecture Patterns

### Language Handling
- No URL-based locale routing
- Language selected via `?lang=xx` query param (default: `en`)
- All content is **multilingual in one file** (e.g., `article.ts` has `en:`, `de:`, `fr:`, `ja:`, `zh:` blocks)
- UI strings in `src/translations.ts` (flat object, keyed by language code)

**CRITICAL:** Server components must pass `initialLang` to client components so crawlers see correct language HTML:
```tsx
// CORRECT ✅
<PromptEngineeringPostClient slug={slug} initialLang={selectedLang} />

// WRONG ❌ — crawlers see English on all ?lang= URLs
<PromptEngineeringPostClient slug={slug} />
```

### Server / Client Split
- **Page (server):** `app/*/page.tsx` handles metadata, JSON-LD schema, static params
- **Content (client):** `*Client.tsx` components in `src/components/` handle interactivity + language switching
- **Data:** Article content live in `src/lib/{cluster}/articles/` as TypeScript objects

### Content Clusters (3 types)
| Cluster | Dir | Page Route | Slugs Map | Barrel |
|---|---|---|---|---|
| **local-llms** | `src/lib/local-llms/articles/` | `/local-llms/[slug]` | `slugs.ts` (`LLM_SLUG_TO_KEY`) | `articles-barrel.ts` |
| **prompt-engineering** | `src/lib/prompt-engineering/articles/` | `/prompt-engineering/[slug]` | `slugs.ts` | `articles-barrel.ts` |
| **power-local-llm** | `src/lib/power-local-llm/articles/` | `/power-local-llm/[slug]` | `slugs.ts` | `articles-barrel.ts` |
| **blog** | `src/lib/blog/` | `/blog/[slug]` | `blogSlugs.ts` | `blogContent.ts` (monolithic) |

**Adding an article:**
1. Create `src/lib/{cluster}/articles/{slug}.ts`
2. Add entry to `src/lib/{cluster}/slugs.ts`
3. Add import + object to `src/lib/{cluster}/articles-barrel.ts`
4. Sitemap auto-updates

### Outbound Click Tracking

**Tracking Utility:** `src/lib/tracking/outbound.ts`
```ts
export function trackOutboundClick(params: OutboundClickParams): void
  // Fires to window.umami?.track(), @vercel/analytics track(), window.gtag()
```

**Types:**
```ts
export type OutboundPosition = 'in-body' | 'cta-box' | 'comparison-table' | 'resources' | 'footer'
export type OutboundCluster = 'local-llms' | 'prompt-engineering' | 'power-local-llm'
```

**Link Integration:** In post-client components (LocalLLMsPostClient, PromptEngineeringPostClient, PowerLocalLLMPostClient):
```tsx
<a
  href={url}
  target="_blank"
  rel="nofollow noopener noreferrer"   // CRITICAL: nofollow signals editorial, not affiliate
  onClick={() => { if (slug) trackOutboundClick({ url, article: slug, cluster, lang, position }) }}
>
  {label}
</a>
```

**Vendor Mapping:** `VENDOR_MAP` in `outbound.ts` extracts clean vendor name from domain.

**Chrome Extension Debugger:** `pq-tracker-ext/`
- Load: `chrome://extensions` → Developer mode → Load unpacked
- Intercepts all 3 analytics sources in real-time
- Toast notification on each click + event log popup
- Works on `localhost:3000` and `*.promptquorum.com`

---

## Code Conventions

### File Naming
- Components: `PascalCase` (`HeaderClient.tsx`)
- Folders: `kebab-case` (`src/components/`)
- Functions/variables: `camelCase`

### Exports
- **Named exports only** — no default exports
- Article files: `export const article: Partial<Record<Language, LLMArticle>> = { en: {...}, de: {...}, ... }`

### Styling
- **Tailwind CSS only** — no separate CSS files or `<style>` tags
- Use `className` prop with `clsx()` for conditionals

### TypeScript
- Strict mode enforced
- No `any` types
- All multilingual content must match field structure across all 5 language blocks

### Freshness Tier (MANDATORY)
Every article published ≥ 2026-04-21 must have `freshness_tier`:
- **`'evergreen'`:** Timeless (no year/model refs). Pre-commit hook validates: no "2026", "GPT-4o", "Claude", "latest", "current", etc.
- **`'semi_annual'`:** Specific models/hardware/pricing. Requires `next_refresh_due` (6 months from publish).
- **`'annual'`:** Year-specific (e.g., "2026 Model Rankings"). Requires `specific_year: 2026` + year in slug.

**Example:**
```ts
en: {
  freshness_tier: 'evergreen',   // or 'semi_annual' / 'annual'
  next_refresh_due: '2026-11-03',  // IF semi_annual
  specific_year: 2026,             // IF annual
  title: '...',
  // ...
}
```

---

## Schema & SEO

### Auto-Generated Schema
For `local-llms` and `prompt-engineering` clusters:
- **TechArticle** (auto-generated from title, intro, meta)
- **BreadcrumbList** (auto-generated from slug path)
- **FAQPage** (auto-generated from `section.faqs[]` arrays)
- **HowTo** (auto-generated from `numberedItems[]`)

Override with explicit fields in article data: `faqSchema`, `howToSchema`, etc.

### Hreflang / Alternates
Use `generateAlternates(path, lang, hasTranslation)` from `src/lib/hreflang.ts` in all `generateMetadata()` functions.

### power-local-llm Publish Gate
`src/lib/power-local-llm/published.ts` controls which slugs are indexed. New articles must be added to `POWER_LLM_PUBLISHED_SLUGS` before going live. Unpublished = `noindex`.

### Build Validation
- `npm run validate-seo` checks field completeness
- `test-cluster-noindex` (post-build) verifies 212+ URLs pass noindex contract

---

## Testing Outbound Click Tracking

### Manual Test (Browser)
1. `npm run dev` (http://localhost:3000)
2. Navigate to any article (e.g., `/local-llms/eu-cloud-gpu-gdpr-2026`)
3. Click an external link (Hetzner, Ollama, Anthropic, etc.)
4. Open DevTools Console → check for `umami.track('outbound_click', {...})`
5. Open Network tab → filter `api/stats` (Umami), `api/data` (Vercel), `googletagmanager.com` → verify all 3 fire

### Chrome Extension Test
1. Load `pq-tracker-ext/` unpacked in Chrome
2. Click an outbound link → toast appears (bottom right) with vendor, article, lang
3. Click extension icon → popup shows event log table
4. Each click fires 3 events (Umami purple, GA4 orange, Vercel black)

### Validation Script (Browser Console)
```js
// Verify rel="nofollow" on all external links
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (!a.hostname.includes('promptquorum.com'))
    console.assert(a.rel.includes('nofollow'), 'Missing nofollow:', a.href)
})
```

---

## Common Tasks

### Add Editorial Link to Article
1. Find the article file: `src/lib/{cluster}/articles/{slug}.ts`
2. Locate the `en` block and the appropriate section (e.g., `gdpr`, `setup`, `modelSelection`)
3. Add markdown link: `[Vendor Name](https://vendor.com/path)`
4. Wrap with `/link/` for tracking: `<a href="..." onClick={() => trackOutboundClick({...})}`
5. All 5 languages: copy the same link text across de/fr/ja/zh blocks (URLs unchanged)

### Add New Article
1. Create `src/lib/{cluster}/articles/{slug}.ts` with all 5 language blocks
2. Add slug to `src/lib/{cluster}/slugs.ts`
3. Add import + export to `src/lib/{cluster}/articles-barrel.ts`
4. If power-local-llm: add slug to `POWER_LLM_PUBLISHED_SLUGS` in `published.ts`
5. `npm run build` to validate

### Update Tracking Payload
Modify `src/lib/tracking/outbound.ts`:
- Add vendor to `VENDOR_MAP` if new domain
- Update `OutboundPosition` or `OutboundCluster` types if needed
- Re-test with Chrome extension

### Translate Article
Use the `/geo-translation` skill with the article URL + `?lang=XX`. Skill handles:
- Full localization (region-appropriate context)
- Schema field structure matching (never add/remove fields)
- Code identifier preservation (`theme`, `slug`, `type`, `id` unchanged)
- Locale-specific FAQs if relevant (DE: DSGVO, FR: CNIL, etc.)

---

## Git Workflow

- **Branch naming:** `feature/[name]` or `fix/[name]`
- **Commits:** Conventional format (`feat:`, `fix:`, `docs:`, `refactor:`)
- **Main is always stable** — auto-deploys to Vercel
- **No force push** to main
- **Pre-commit hook:** Validates freshness tiers + evergreen articles

---

## Critical Rules

1. **Never translate code identifiers** (`theme`, `slug`, `type`, `id`, `anchor`) — they're lookup keys
2. **Always pass `initialLang`** to client components that render multilingual content
3. **Always add `rel="nofollow"`** to editorial external links (Google signal for non-affiliate)
4. **Always include `freshness_tier`** on new articles (build enforces post-2026-04-21)
5. **Build must pass** before pushing — 0 TypeScript errors + noindex contract verified
6. **Schema field structure must match** across all 5 language blocks in multilingual files

---

## File Structure Quick Ref

```
src/
├── app/                    # Next.js pages (server components)
│   ├── local-llms/[slug]/page.tsx
│   ├── prompt-engineering/[slug]/page.tsx
│   ├── power-local-llm/[slug]/page.tsx
│   └── ...
├── components/             # React client components
│   ├── LocalLLMsPostClient.tsx
│   ├── PromptEngineeringPostClient.tsx
│   ├── PowerLocalLLMPostClient.tsx
│   └── ...
├── lib/
│   ├── tracking/
│   │   └── outbound.ts     # Tracking utility (Umami + GA4 + Vercel)
│   ├── local-llms/
│   │   ├── articles/       # Article data files (*.ts)
│   │   ├── articles-barrel.ts
│   │   └── slugs.ts
│   ├── prompt-engineering/ # Same structure
│   ├── power-local-llm/    # Same structure + published.ts
│   ├── blog/               # Monolithic blogContent.ts
│   └── hreflang.ts         # Alternate link generator
├── translations.ts         # UI strings (all 5 languages)
└── types/
    └── umami.d.ts          # Analytics type definitions

pq-tracker-ext/            # Chrome extension (self-contained)
├── manifest.json          # MV3 config
├── content.js             # Intercepts analytics calls
├── popup.html / popup.js  # Event log UI
└── README.md              # Installation + usage
```

---

## Quick Commands for Common Tasks

```bash
# Validate build + tracking
npm run build

# Test a specific article
open http://localhost:3000/local-llms/eu-cloud-gpu-gdpr-2026

# Test with language param
open http://localhost:3000/local-llms/eu-cloud-gpu-gdpr-2026?lang=de

# Test tracking in browser console
# (See validation script above)

# Translate article to German
# Use /geo-translation skill with article URL + ?lang=de

# Load Chrome extension
# chrome://extensions → Developer mode → Load unpacked → pq-tracker-ext/

# Push to production
git push origin main
# (auto-deploys to Vercel)
```

---

## Debugging Tips

**Tracking events not firing:**
- Check `window.umami` exists: `console.log(window.umami)`
- Check `window.gtag` exists: `console.log(window.gtag)`
- Verify link has `onClick` handler: inspect in DevTools
- Check Network tab for `api/stats` (Umami), `api/data` (Vercel), `googletagmanager.com` (GA4)

**Chrome extension not showing toasts:**
- Load unpacked at `chrome://extensions`
- Check manifest.json matches domain: `*://*.promptquorum.com/*` or `*://localhost:3000/*`
- Click link again and watch for toast (bottom right)
- Open popup → check event log

**Build fails:**
- Run `npm run validate-translations` (checks multilingual field structure)
- Run `npm run validate-seo` (checks required SEO fields)
- Check freshness_tier is set and valid (evergreen articles validated for no year refs)

**Language not switching:**
- Verify `initialLang` is passed from server page to client component
- Check URL has `?lang=de` (or other code)
- Verify article has all 5 language blocks in the data file

---

## Related Files to Know

- `CLAUDE.md` — Project instructions (read before writing any content)
- `GEO_WRITING_GUIDELINES.md` — Content rules (answer-first, facts-only, no fluff)
- `/scripts/validate-freshness-tier.mjs` — Pre-commit freshness tier validator
- `/scripts/test-cluster-noindex.mjs` — Post-build noindex contract verifier

---

**Last updated:** 2026-05-22
**Tracking implementation:** May 2026 (11 articles, 3 sources, Chrome debugger)
