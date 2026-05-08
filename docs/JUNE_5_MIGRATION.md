# June 5, 2026 — Mixed-Locale Routing Migration

## Overview

On or around **June 5, 2026**, all article clusters (`/blog`, `/local-llms`, `/prompt-engineering`, `/frameworks`, `/power-local-llm`) will migrate from mixed-locale routing patterns to a unified **path-prefix locale routing** system:

- **Before (May 2026):** `/prompt-engineering/risen-framework?lang=de` (query-string)
- **After (June 5):** `/de/prompt-engineering/risen-framework` (path-prefix)

This is a **single coordinated sweep** across all 5 clusters to eliminate 301 redirect chains and improve SEO performance.

---

## Deferred Work (From May 2026)

### Internal Link Pattern Fixes

On **May 8, 2026**, the Power Local LLM cluster was published with 16 articles + hub. The translated (DE/FR/JA/ZH) content blocks use the old query-string link pattern:

```typescript
// EN block (correct for EN links)
'/power-local-llm/local-llm-with-obsidian-2026'

// DE/FR/JA/ZH blocks (old pattern — triggers 301 redirect)
'/power-local-llm/local-llm-with-obsidian-2026?lang=de'
'/power-local-llm/local-llm-with-obsidian-2026?lang=fr'
'/power-local-llm/local-llm-with-obsidian-2026?lang=ja'
'/power-local-llm/local-llm-with-obsidian-2026?lang=zh'
```

**Why this wasn't fixed immediately:** Retroactively fixing link patterns in 17 translated files would require re-doing translations in June when ALL clusters migrate. Fixing twice = waste.

### Files Affected (17 total)

All articles in `/src/lib/power-local-llm/articles/`:
1. `local-ai-app-non-technical-users.ts` (4 language blocks + 1 EN)
2. `local-ai-agents-business-workflows-eu-compliance.ts`
3–17. [15 more published articles in the cluster]

**Action:** These 17 files have internal links in DE/FR/JA/ZH blocks using `?lang=XX` suffix. On June 5, rewrite them to use path-prefix format.

---

## June 5 Execution Plan

### Phase 1: Prepare All Clusters

1. **Confirm all 5 clusters are "ready to migrate"**
   - `/blog` — all articles have DE/FR/JA/ZH translations with current link patterns
   - `/local-llms` — all articles have DE/FR/JA/ZH translations with current link patterns
   - `/prompt-engineering` — all articles have DE/FR/JA/ZH translations with current link patterns
   - `/frameworks` — all articles have DE/FR/JA/ZH translations with current link patterns
   - `/power-local-llm` — all published articles (16 + hub) have DE/FR/JA/ZH translations

2. **Pre-migration validation:**
   ```bash
   # Scan all article files for internal links using ?lang=XX pattern
   grep -r '\?lang=' src/lib/blog/blogContent.ts src/lib/prompt-engineering/content.ts src/lib/local-llms/content.ts src/lib/power-local-llm/articles/ | wc -l
   # Should return: ~2000+ link instances across all clusters
   
   # Verify middleware is ready for path-based routing
   cat src/middleware.ts
   # Confirm PATH_LOCALE_CLUSTERS includes all 5 clusters
   ```

### Phase 2: Update Route Architecture

1. **Extend middleware PATH_LOCALE_CLUSTERS** (currently `/power-local-llm` only):
   ```typescript
   // src/middleware.ts
   const PATH_LOCALE_CLUSTERS = [
     'power-local-llm',
     'local-llms',
     'prompt-engineering',
     'frameworks',
     'blog',
   ]
   ```

2. **Create locale route handlers** for each cluster:
   - `src/app/de/blog/[slug]/page.tsx` (mirror of `src/app/blog/[slug]/page.tsx`)
   - `src/app/de/local-llms/[slug]/page.tsx`
   - `src/app/de/prompt-engineering/[slug]/page.tsx`
   - `src/app/de/frameworks/[slug]/page.tsx`
   - Repeat for `fr/`, `ja/`, `zh/` (4 language subdirectories × 4 clusters × 2 routes = 32 new files)
   - Template: Copy existing EN route, change language param in `generateMetadata()` and page component calls

3. **Update metadata generators** in each cluster (page-helpers.tsx):
   - Add cluster-aware `alternates` builder
   - Use path-based hreflang for all 5 clusters (currently only power-local-llm has this)
   - Example: `generateAlternates('de', slug)` → `https://www.promptquorum.com/de/prompt-engineering/[slug]`

### Phase 3: Rewrite All Internal Links (Batch Operation)

**This is the heavy lift.** ~2000+ internal links across all clusters need rewriting.

#### Script Option (Recommended)

Create a batch link-rewriting script:
```typescript
// scripts/migrate-links-to-pathprefix.mjs
// Input: content.ts file, cluster name
// Operation: For each non-EN language block, rewrite /cluster/slug?lang=XX → /XX/cluster/slug
// Output: Updated file

// Usage:
// node scripts/migrate-links-to-pathprefix.mjs src/lib/blog/blogContent.ts blog
// node scripts/migrate-links-to-pathprefix.mjs src/lib/prompt-engineering/content.ts prompt-engineering
// ...
```

Alternatively: **Manual batch-edit approach**
- Use Find/Replace (IDE) with regex: `/prompt-engineering/([^?]+)\?lang=de` → `/de/prompt-engineering/$1`
- Repeat for each cluster + language combination
- Commit per cluster: `feat: Migrate internal links to path-prefix routing — [cluster-name]`

#### Scope (per cluster)

| Cluster | Articles | Link instances | Estimated time |
|---------|----------|---|---|
| `/blog` | ~40 | 500+ | 1–2 hours |
| `/local-llms` | ~20 | 300+ | 1 hour |
| `/prompt-engineering` | ~50 | 700+ | 2–3 hours |
| `/frameworks` | ~9 | 150+ | 30 min |
| `/power-local-llm` | 17 | 350+ | 1–2 hours |

**Total time:** ~6–9 hours of batch-edit work (parallelizable across 2–3 people).

### Phase 4: Update Infrastructure

1. **Update sitemap.ts** (if not already done):
   - Extend hreflang generation to all clusters
   - Change from query-string to path-prefix pattern for all clusters
   - Verify `alternates.languages` uses `/XX/cluster/slug` format

2. **Update header/footer/navigation** (LanguageSwitcher.tsx):
   - Change language switching to redirect to new path-prefix URLs
   - Verify `PATH_LOCALE_CLUSTERS` matches middleware

3. **Update TRANSLATION_SPEC.md** (if not already done):
   - Remove distinction between query-string and path-prefix
   - All clusters now use `/XX/cluster/slug` pattern
   - All link rewriting instructions updated

### Phase 5: Redirect Old URLs (SEO Protection)

Create **permanent 301 redirects** in next.config.ts to preserve rankings:

```typescript
// next.config.ts
async redirects() {
  const redirects = []
  
  // For each published article slug in each cluster:
  // /cluster/slug?lang=XX → /XX/cluster/slug
  
  // Example pattern (generated by script):
  for (const [cluster, slugs] of Object.entries(CLUSTER_SLUGS)) {
    for (const slug of slugs) {
      for (const lang of ['de', 'fr', 'ja', 'zh']) {
        redirects.push({
          source: `/${cluster}/${slug}`,
          destination: `/${lang}/${cluster}/${slug}`,
          permanent: true,
          locale: lang,  // Next.js locale-aware redirect
        })
      }
    }
  }
  
  return redirects
}
```

Alternatively: **Middleware-based redirects** (more efficient, already demonstrated by power-local-llm implementation).

### Phase 6: Testing & Validation

1. **Build verification:**
   ```bash
   npm run build
   # Must return 0 TypeScript errors
   # Warnings on unpublished locales are OK
   ```

2. **Local testing:**
   ```bash
   npm run dev
   # Test URLs:
   # /en/blog/[slug] → renders EN
   # /de/blog/[slug] → renders DE with German hreflang
   # /fr/prompt-engineering/[slug] → renders FR
   # /blog/[slug]?lang=de → redirects to /de/blog/[slug]
   ```

3. **Sitemap validation:**
   ```bash
   curl -s http://localhost:3000/sitemap.xml | grep -c '/de/'
   # Should show 100+ locale variant entries
   ```

4. **Hreflang validation** (for 5 random articles):
   ```bash
   curl -s http://localhost:3000/de/prompt-engineering/risen-framework | grep hreflang
   # Should show 6 hreflang tags (en, de, fr, ja, zh, x-default) with correct path-prefix format
   ```

5. **Middleware redirect chain** (verify no 301 stacking):
   ```bash
   curl -I http://localhost:3000/blog/[slug]?lang=de
   # Should be 301 → /de/blog/[slug] (one hop, then 200)
   ```

### Phase 7: Staged Deployment

1. **Commit strategy:**
   - Batch 1: Infrastructure (middleware, route handlers, metadata) — `feat: Phase 1 — route architecture for path-prefix locales`
   - Batch 2–5: Link rewriting per cluster — `feat: Phase 3 — migrate [cluster] internal links to path-prefix`
   - Batch 6: Redirects + sitemap — `feat: Phase 5 — add 301 redirects and update sitemap for path-prefix routing`
   - Batch 7: Docs — `docs: Update TRANSLATION_SPEC for unified path-prefix routing`

2. **Deploy to production:**
   - Push main → auto-deploy to Vercel
   - Monitor Vercel build logs for any errors
   - Check Google Search Console for crawl errors (expect some 404s initially as GSC recrawls)

3. **Post-deployment:**
   - Request reindex in Google Search Console for all migrated clusters
   - Monitor search traffic in GSC for 1–2 weeks for any rank drops
   - Verify Vercel logs for 301 redirect chain metrics

---

## Rollback Plan (If Needed)

If critical issues arise:

1. **Revert all commits** to pre-migration state
2. **Query-string routing remains active** (old infrastructure still in place)
3. **Notify team** — schedule post-mortem

---

## Success Criteria

✅ Build compiles with 0 TypeScript errors  
✅ All 5 clusters now use path-prefix routing  
✅ Sitemap hreflang entries use `/XX/cluster/slug` format  
✅ In-page hreflang tags use `/XX/cluster/slug` format  
✅ Canonical tags self-reference per locale  
✅ Internal links in all translated content point to path-prefix URLs  
✅ 301 redirects from old query-string URLs working  
✅ Google Search Console shows no increase in crawl errors (post-migration)  
✅ Search rankings stable or improved 2 weeks post-migration  

---

## Ownership & Timeline

| Phase | Owner | Dates | Effort |
|-------|-------|-------|--------|
| Phase 1 (Prep) | DevOps | June 1–3 | 4–6 hours |
| Phase 2 (Routes) | Frontend | June 3–4 | 6–8 hours |
| Phase 3 (Links) | Content Team | June 4–5 | 6–9 hours |
| Phase 4 (Infra) | DevOps | June 5 | 2–3 hours |
| Phase 5 (Redirects) | DevOps | June 5 | 1–2 hours |
| Phase 6 (Testing) | QA + DevOps | June 5–6 | 2–4 hours |
| Phase 7 (Deploy) | DevOps | June 5–6 | 1–2 hours |

**Total effort:** ~22–34 hours (2–4 person-days, parallelizable).

---

## Notes

- **No user-facing changes.** Users will see the same site; URLs just look different (path-based instead of query-string).
- **SEO benefit:** Eliminates 301 redirect chains, improves crawlability, improves PageRank distribution.
- **Future-proof:** Unified path-prefix routing across all clusters simplifies locale handling in middleware and metadata generators.
- **Translation pipeline already updated (May 8).** New translations after May 8 should use path-prefix link patterns for all clusters (per updated TRANSLATION_SPEC.md section 13).

---

**Last updated:** 2026-05-08  
**Target execution:** ~2026-06-05  
**Status:** Deferred — waiting for all clusters to be ready for migration
