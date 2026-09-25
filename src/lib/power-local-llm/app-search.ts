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
import { CATEGORY_SUB_LABEL, CATEGORY_SUB_GROUP, CATEGORY_GROUPS } from '@/lib/power-local-llm/apps/categories'
import type { CategoryGroupKey, CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import type { OSKey, PriceKey, ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'
import { getListingFreshness } from '@/components/local-ai-directory/staleness'

export const DIRECTORY_DISCLAIMER =
  'Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.'

export const ARTICLE_HINT =
  'Structure your answer in this order: (1) a one-line best pick, (2) a short comparison of at most 3 apps, (3) per app — download link, "Read the full review", and a staleness note if hardwareFit is "unknown" or listingFreshness is "warn"/"old", (4) the response-level "categoryGuide" once, linked as "Read the full comparison", when present, (5) the response-level "directoryUrl" once, linked as "See the full directory". Never answer with just an app name — for each app you mention, link "downloadUrl" (or "storeLinks" if present) as the download/install link, link "article" as "Read the full review" when present, and mention "relatedArticles" when present. Treat "hardwareFit: unknown" as "not verified to fit," not as "fits" — read "hardwareNote" aloud when present. Render every one of these as a clickable markdown link, never bare text, and always relay the disclaimer.'

export class AppNotFoundError extends Error {}

const SITE = 'https://www.promptquorum.com'

// Editorial brand block, rendered once per search_apps answer — never per
// app. Slogan wording is an editorial call (see MCP response-quality brief
// §3), safe to revise without touching any of the structured data logic
// above. Deliberately avoids "tested"/"verified" per that brief, since the
// directory itself does not claim to have run or benchmarked every listing.
const BRAND_SLOGAN = 'Local AI, sorted by what your machine can actually run.'
const BRAND_ATTRIBUTION = 'Powered by the PromptQuorum Local LLM Software Directory (promptquorum.com).'

export interface BrandBlock {
  slogan: string
  cta: ArticleLink
  attribution: string
}

// Chat/LLM-category searches point at the PromptQuorum desktop app (compares
// local and cloud models side by side) — never shown for other categories,
// where it has no relevance (brief §3). Everything else falls back to the
// category guide, then the bare directory.
function brandFor(searchedGroup: CategoryGroupKey | null, categoryGuide: ArticleLink | null): BrandBlock {
  const cta: ArticleLink =
    searchedGroup === 'chat-assistants'
      ? { title: 'Compare local and cloud models side by side in the PromptQuorum desktop app', url: `${SITE}/download` }
      : (categoryGuide ?? { title: 'See the full directory', url: directoryUrlFor({}) })
  return { slogan: BRAND_SLOGAN, cta, attribution: BRAND_ATTRIBUTION }
}

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

// The category comparison article for a category group (e.g. "Local Image,
// Video & Vision Tools Compared") — the combined post that was previously
// only reachable by accident through relatedArticles, and only when the
// review index happened to surface it (see MCP response-quality brief,
// gap 1: ComfyUI's related posts were unrelated, Real-ESRGAN had none).
// Discovered from the already-generated toolArticleIndex (title stays in
// sync with the live article automatically) rather than hand-typing 7
// titles that would drift the next time a comparison post is retitled.
const CATEGORY_COMPARE_SLUG: Record<CategoryGroupKey, string> = Object.fromEntries(
  CATEGORY_GROUPS.map((g) => [g.key, `local-llm-${g.key}-compared`]),
) as Record<CategoryGroupKey, string>

let cachedCategoryGuides: Partial<Record<CategoryGroupKey, ArticleLink>> | null = null
function getCategoryGuides(): Partial<Record<CategoryGroupKey, ArticleLink>> {
  if (cachedCategoryGuides) return cachedCategoryGuides
  const slugToGroup = new Map(Object.entries(CATEGORY_COMPARE_SLUG).map(([group, slug]) => [slug, group as CategoryGroupKey]))
  const guides: Partial<Record<CategoryGroupKey, ArticleLink>> = {}
  for (const entry of Object.values(toolArticleIndex as Record<string, { articles: IndexedArticle[] }>)) {
    for (const a of entry.articles) {
      const slug = a.url.split('/').pop()
      const group = slug ? slugToGroup.get(slug) : undefined
      if (group && !guides[group]) guides[group] = { title: a.title, url: `${SITE}${a.url}` }
    }
  }
  cachedCategoryGuides = guides
  return guides
}

export function categoryGuideForGroup(group: CategoryGroupKey): ArticleLink | null {
  return getCategoryGuides()[group] ?? null
}

function primaryCategoryGroup(app: ToolRecord): CategoryGroupKey | null {
  const primary = app.categories[0]
  return primary ? (CATEGORY_SUB_GROUP[primary] ?? null) : null
}

// Filtered directory view for a set of search_apps/compare_apps results —
// gap 2: directoryUrl used to be the same generic page for every app.
// `category` takes a subcategory key (what SubcategoryChips/FilterState use;
// see src/components/local-ai-directory/types.ts), matching the query-param
// contract DirectoryClient reads on load.
export function directoryUrlFor(filters: { category?: CategorySubKey; os?: OSKey; price?: PriceKey }): string {
  const params = new URLSearchParams()
  if (filters.category) params.set('category', filters.category)
  if (filters.os) params.set('os', filters.os)
  if (filters.price) params.set('price', filters.price)
  const qs = params.toString()
  return `${SITE}/power-local-llm/local-llm-software-directory-2026${qs ? `?${qs}` : ''}`
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
  hardwareNote?: string
  bestFor?: string
  downloadUrl: string | null
  storeLinks?: Record<string, string>
  directoryUrl: string
  article: ArticleLink | null
  relatedArticles: ArticleLink[]
  categoryGuide?: ArticleLink | null
  mcpSupport?: boolean
  upstreamStatus?: { state: 'archived' | 'unmaintained'; since?: string }
  dataVerifiedAt: string | null
  addedDate: string | null
  listingFreshness: 'fresh' | 'warn' | 'old'
}

// Per-dimension: a dimension the caller didn't ask about is never evaluated,
// and a dimension that WAS asked about but has no researched figure (null)
// makes the overall verdict 'unknown' rather than silently defaulting to
// 'fits' — gap 4: ComfyUI-style records (cpuOnly: true, ramGb/vramGb both
// null) used to report "fits" for a RAM ceiling nobody actually verified.
// cpuOnly: true still answers the VRAM question definitively (no GPU is
// required), so it never contributes to the "unknown" verdict on its own.
export function hardwareFit(app: ToolRecord, ramGb?: number, vramGb?: number): AppSummary['hardwareFit'] {
  if (ramGb === undefined && vramGb === undefined) return 'unknown'
  const hw = app.hardware
  if (!hw) return 'unknown'
  let unresearchedDimension = false
  if (ramGb !== undefined) {
    if (hw.ramGb === null) unresearchedDimension = true
    else if (hw.ramGb > ramGb) return 'too-demanding'
  }
  if (vramGb !== undefined && !hw.cpuOnly) {
    if (hw.vramGb === null) unresearchedDimension = true
    else if (hw.vramGb > vramGb) return 'too-demanding'
  }
  return unresearchedDimension ? 'unknown' : 'fits'
}

// Explains an 'unknown' hardwareFit verdict in plain language, so a caller
// doesn't have to guess whether "unknown" means "nobody has looked at this
// tool" or "this tool's requirement genuinely varies" — gap 4's hardwareNote.
function hardwareNoteFor(app: ToolRecord, fit: AppSummary['hardwareFit'], ramGb?: number, vramGb?: number): string | undefined {
  if (fit !== 'unknown') return undefined
  const hw = app.hardware
  if (hw?.variesByModel) return 'Requirement depends on which model/backend you load — there is no single fixed number for this tool.'
  if (!hw) return 'Hardware requirements have not been researched for this tool yet.'
  const missing: string[] = []
  if (ramGb !== undefined && hw.ramGb === null) missing.push('RAM')
  if (vramGb !== undefined && hw.vramGb === null && !hw.cpuOnly) missing.push('VRAM')
  return missing.length
    ? `${missing.join(' and ')} requirement not yet researched for this tool.`
    : 'Hardware requirements have not been researched for this tool yet.'
}

export function summarize(
  app: ToolRecord,
  fit: AppSummary['hardwareFit'],
  opts?: { ramGb?: number; vramGb?: number; directoryFilters?: { category?: CategorySubKey; os?: OSKey; price?: PriceKey } },
): AppSummary {
  const group = primaryCategoryGroup(app)
  const note = hardwareNoteFor(app, fit, opts?.ramGb, opts?.vramGb)
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
    ...(note ? { hardwareNote: note } : {}),
    ...(app.verdict ? { bestFor: app.verdict } : {}),
    downloadUrl: app.url ? `https://${app.url}` : null,
    ...(app.storeLinks ? { storeLinks: app.storeLinks as Record<string, string> } : {}),
    directoryUrl: directoryUrlFor(opts?.directoryFilters ?? { category: app.categories[0] }),
    ...articlesForApp(app),
    categoryGuide: group ? categoryGuideForGroup(group) : null,
    ...(app.mcpSupport ? { mcpSupport: true } : {}),
    ...(app.upstreamStatus ? { upstreamStatus: app.upstreamStatus } : {}),
    dataVerifiedAt: app.lastVerifiedDate,
    addedDate: app.addedDate,
    listingFreshness: app.upstreamStatus ? 'old' : getListingFreshness(app.lastVerifiedDate ?? app.addedDate),
  }
}

// Precomputed, human-readable category labels per app (e.g. "Editing & upscaling",
// "Image generation") so free-text queries like "image editing" can match a tool
// through its taxonomy even when that phrase never appears in its name/tagline —
// gap 6: "editing-upscaling" returned only 2 results (one of them a mismatch)
// because Fuse had no way to see a tool's category at all.
const categoryLabelsBySlug = new Map(
  localAiApps.map((a) => [a.slug, a.categories.map((c) => CATEGORY_SUB_LABEL[c]?.en ?? c).join(' ')]),
)

let cachedAppFuse: Fuse<ToolRecord> | null = null
function getAppFuse() {
  if (!cachedAppFuse) {
    cachedAppFuse = new Fuse(localAiApps, {
      keys: [
        { name: 'name', weight: 3 },
        { name: 'tagline.en', weight: 2 },
        { name: 'slug', weight: 1 },
        { name: 'categoryLabels', weight: 2, getFn: (a) => categoryLabelsBySlug.get(a.slug) ?? '' },
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
  offset?: number
}) {
  // 15 is the MCP search_apps tool's own contractual ceiling (enforced again by its
  // zod schema, src/app/api/mcp/route.ts) to keep LLM tool-result payloads small. The
  // "What Can I Run?" web widget shares this function but is a full-page UI, not an
  // LLM context budget, so it needs a much higher ceiling — see its route.ts caller.
  const limit = Math.min(Math.max(args.limit ?? 5, 1), 60)
  const offset = Math.max(args.offset ?? 0, 0)
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
  // Single directory deep-link + category guide for the searched category (gaps
  // 1 and 2's "once at response level for the searched category"), independent
  // of each result's own per-app fields above (a multi-category result set
  // still gets a useful directory link; a single-category search additionally
  // gets a category guide worth surfacing once instead of per app).
  const directoryFilters = {
    category: (args.category as CategorySubKey | undefined) && CATEGORY_SUB_GROUP[args.category as CategorySubKey] ? (args.category as CategorySubKey) : undefined,
    os: args.os as OSKey | undefined,
    price: args.price as PriceKey | undefined,
  }
  const searchedGroup = directoryFilters.category
    ? CATEGORY_SUB_GROUP[directoryFilters.category]
    : (args.category as CategoryGroupKey | undefined) && CATEGORY_GROUPS.some((g) => g.key === args.category)
      ? (args.category as CategoryGroupKey)
      : null

  const categoryGuide = searchedGroup ? categoryGuideForGroup(searchedGroup) : null
  return {
    totalMatches: scored.length,
    results: scored.slice(offset, offset + limit).map(({ a, fit }) => summarize(a, fit, { ramGb: args.ramGb, vramGb: args.vramGb, directoryFilters })),
    offset,
    limit,
    directoryUrl: directoryUrlFor(directoryFilters),
    categoryGuide,
    brand: brandFor(searchedGroup, categoryGuide),
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: ARTICLE_HINT,
  }
}

export function getAppDetails(args: { slug: string }) {
  const app = localAiApps.find((t) => t.slug === args.slug)
  if (!app) throw new AppNotFoundError(`No directory entry "${args.slug}". Use search_promptquorum to find the right slug.`)
  const group = primaryCategoryGroup(app)
  return {
    ...app,
    ...articlesForApp(app),
    categoryGuide: group ? categoryGuideForGroup(group) : null,
    directoryUrl: directoryUrlFor({ category: app.categories[0] }),
    dataVerifiedAt: app.lastVerifiedDate,
    listingFreshness: app.upstreamStatus ? 'old' : getListingFreshness(app.lastVerifiedDate ?? app.addedDate),
  }
}
