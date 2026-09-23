// Directory search/hardware-match logic — the single implementation behind
// both the MCP server's search_apps/get_app_details tools (src/lib/mcp/tools.ts
// re-exports these) and the homepage "What Can I Run?" / "Can I Run This?"
// API routes (src/app/api/tools/*). Kept in its own file, deliberately NOT
// importing src/lib/mcp/tools.ts or the multi-cluster content barrels it pulls
// in (peContent, llmContent, blogContent, etc.) — those are only needed by
// MCP's search_promptquorum/get_article tools. Bundling the whole ~9-language,
// 7-cluster content graph into a route that only needs the 224-app directory
// blew the dev-mode webpack bundle for any route importing tools.ts past
// Node's fs.readFileSync string-length limit (500MB+ route.js in `next dev`);
// production builds tolerated it, dev didn't. This module stays directory-only
// so routes that need just hardware matching don't pay that cost.

import Fuse from 'fuse.js'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import featureReviewIndex from '@/generated/feature-review-index.json'
import toolArticleIndex from '@/generated/tool-article-index.json'
import { CATEGORY_SUB_LABEL, CATEGORY_SUB_GROUP } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import type { OSKey, ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'

export const DIRECTORY_DISCLAIMER =
  'Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.'

export const ARTICLE_HINT =
  'Every app in this result carries real URLs — never answer with just the app name. For each app you mention: link "downloadUrl" (or "storeLinks" if present) as the download/install link, link "article" as "Read the full review" when present, and mention "relatedArticles" (e.g. category comparison) when present. Always include "directoryUrl" once, linked as "See the full directory", so the user can browse all options. Render every one of these as a clickable markdown link, not bare text.'

export class AppNotFoundError extends Error {}

const SITE = 'https://www.promptquorum.com'

export interface ArticleLink {
  title: string
  url: string
}

interface IndexedArticle {
  title: string
  url: string
  tier: string
}

// The app's own review if it has one, otherwise the best article about it; up
// to two more (usually the category comparison) as related reading. Both
// indexes are build-time generated, so links always point at live pages.
export function articlesForApp(app: ToolRecord): { article: ArticleLink | null; relatedArticles: ArticleLink[] } {
  const about = ((toolArticleIndex as Record<string, { articles: IndexedArticle[] }>)[app.name]?.articles ?? []).filter((a) => a.tier === 'about')
  const own = (featureReviewIndex as Record<string, { url: string }>)[app.slug]
  const ownMatch = own ? about.find((a) => a.url === own.url) : undefined
  const primary = own ? { title: ownMatch?.title ?? `${app.name} review`, url: own.url } : about[0]
  const toLink = (a: { title: string; url: string }): ArticleLink => ({ title: a.title, url: `${SITE}${a.url}` })
  const related = about.filter((a) => a.url !== primary?.url).slice(0, 2).map(toLink)
  return { article: primary ? toLink(primary) : null, relatedArticles: related }
}

export interface AppSummary {
  slug: string
  name: string
  tagline: string
  categories: string[]
  useCases: UseCaseKey[] | null
  platforms: OSKey[] | null
  price: string
  license: string
  hardware: { ramGb: number | null; vramGb: number | null; cpuOnly: boolean | null; variesByModel?: boolean } | null
  hardwareFit: 'fits' | 'too-demanding' | 'unknown'
  downloadUrl: string | null
  storeLinks?: Record<string, string>
  directoryUrl: string
  article: ArticleLink | null
  relatedArticles: ArticleLink[]
  mcpSupport?: boolean
  upstreamStatus?: string
}

export function hardwareFit(app: ToolRecord, ramGb?: number, vramGb?: number): AppSummary['hardwareFit'] {
  if (ramGb === undefined && vramGb === undefined) return 'unknown'
  const hw = app.hardware
  if (!hw || (hw.ramGb === null && hw.vramGb === null && hw.cpuOnly === null)) return 'unknown'
  if (ramGb !== undefined && hw.ramGb !== null && hw.ramGb > ramGb) return 'too-demanding'
  if (vramGb !== undefined && hw.vramGb !== null && hw.vramGb > vramGb && !hw.cpuOnly) return 'too-demanding'
  return 'fits'
}

export function summarize(app: ToolRecord, fit: AppSummary['hardwareFit']): AppSummary {
  return {
    slug: app.slug,
    name: app.name,
    tagline: app.tagline.en ?? '',
    categories: app.categories.map((c) => CATEGORY_SUB_LABEL[c]?.en ?? c),
    useCases: app.uses,
    platforms: app.platforms,
    price: app.price,
    license: app.license,
    hardware: app.hardware,
    hardwareFit: fit,
    downloadUrl: app.url ? `https://${app.url}` : null,
    ...(app.storeLinks ? { storeLinks: app.storeLinks as Record<string, string> } : {}),
    directoryUrl: `https://www.promptquorum.com/power-local-llm/local-llm-software-directory-2026`,
    ...articlesForApp(app),
    ...(app.mcpSupport ? { mcpSupport: true } : {}),
    ...(app.upstreamStatus ? { upstreamStatus: app.upstreamStatus.state } : {}),
  }
}

let cachedAppFuse: Fuse<ToolRecord> | null = null
function getAppFuse() {
  if (!cachedAppFuse) {
    cachedAppFuse = new Fuse(localAiApps, {
      keys: [
        { name: 'name', weight: 3 },
        { name: 'tagline.en', weight: 2 },
        { name: 'slug', weight: 1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    })
  }
  return cachedAppFuse
}

export function searchApps(args: {
  query?: string
  category?: string
  useCase?: string
  os?: string
  ramGb?: number
  vramGb?: number
  price?: string
  worksWith?: string
  limit?: number
}) {
  // 15 is the MCP search_apps tool's own contractual ceiling (enforced again by its
  // zod schema, src/app/api/mcp/route.ts) to keep LLM tool-result payloads small. The
  // "What Can I Run?" web widget shares this function but is a full-page UI, not an
  // LLM context budget, so it needs a much higher ceiling — see its route.ts caller.
  const limit = Math.min(Math.max(args.limit ?? 5, 1), 60)
  let pool: ToolRecord[] = args.query ? getAppFuse().search(args.query).map((r) => r.item) : [...localAiApps]
  pool = pool.filter((a) => a.status !== 'planned' && a.upstreamStatus?.state !== 'archived')

  if (args.category) {
    const c = args.category
    pool = pool.filter((a) => a.categories.some((k) => k === c || CATEGORY_SUB_GROUP[k as CategorySubKey] === c))
  }
  if (args.useCase) pool = pool.filter((a) => a.uses?.includes(args.useCase as UseCaseKey))
  if (args.os) pool = pool.filter((a) => a.platforms === null || a.platforms.includes(args.os as OSKey))
  if (args.price) pool = pool.filter((a) => a.price === args.price)
  // worksWith is free-text data (e.g. "Ollama", "LM Studio", "llama.cpp"), not a closed
  // enum — match case-insensitively/substring so callers don't need the exact casing.
  if (args.worksWith) {
    const needle = args.worksWith.toLowerCase()
    pool = pool.filter((a) => a.worksWith?.some((w) => w.toLowerCase().includes(needle)))
  }

  const scored = pool.map((a) => ({ a, fit: hardwareFit(a, args.ramGb, args.vramGb) })).filter((x) => x.fit !== 'too-demanding')
  // Fuse order is preserved for query searches. Otherwise: when hardware was
  // given, put confirmed 'fits' ahead of 'unknown' (unresearched hardware)
  // first — without this, an app whose hardware.ramGb/vramGb are simply null
  // ranks no differently than one actually verified to fit, so unresearched
  // apps (which are most of the directory) crowd out verified ones at the
  // top. Then rank reviewed and well-starred tools first so the top few are
  // the safest recommendations.
  if (!args.query) {
    const hardwareGiven = args.ramGb !== undefined || args.vramGb !== undefined
    scored.sort(
      (x, y) =>
        (hardwareGiven ? Number(y.fit === 'fits') - Number(x.fit === 'fits') : 0) ||
        Number(!!y.a.reviewSlug) - Number(!!x.a.reviewSlug) ||
        (y.a.stars ?? 0) - (x.a.stars ?? 0),
    )
  }
  return {
    totalMatches: scored.length,
    results: scored.slice(0, limit).map(({ a, fit }) => summarize(a, fit)),
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: ARTICLE_HINT,
  }
}

export function getAppDetails(args: { slug: string }) {
  const app = localAiApps.find((t) => t.slug === args.slug)
  if (!app) throw new AppNotFoundError(`No directory entry "${args.slug}". Use search_promptquorum to find the right slug.`)
  return { ...app, ...articlesForApp(app) }
}
