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
import { CATEGORY_SUB_LABEL, CATEGORY_SUB_GROUP, CATEGORY_GROUPS, CATEGORY_GROUP_LABEL } from '@/lib/power-local-llm/apps/categories'
import type { CategoryGroupKey, CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import type { OSKey, PriceKey, ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'
import { getListingFreshness } from '@/components/local-ai-directory/staleness'

export const DIRECTORY_DISCLAIMER =
  'Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.'

export const ARTICLE_HINT =
  'Structure your answer in this order: (1) a one-line best pick, (2) a short comparison of at most 3 apps, (3) per app — download link, "Read the full review", and a staleness note if hardwareFit is "unknown" or listingFreshness is "warn"/"old"/"unverified", (4) the response-level "categoryGuide" once, linked as "Read the full comparison", when present, (5) the response-level "directoryUrl" once, linked as "See the full directory". Never answer with just an app name — for each app you mention, link "downloadUrl" (or "storeLinks" if present) as the download/install link, link "article" as "Read the full review" when present, and mention "relatedArticles" when present. Treat "hardwareFit: unknown" as "not verified to fit," not as "fits" — read "hardwareNote" aloud when present. Use each result\'s "whyMatched" to justify why it is included rather than guessing a reason. Render every one of these as a clickable markdown link, never bare text, and always relay the disclaimer.'

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

// Single source of truth for listingFreshness, so it can never again say
// "fresh" from an absent signal — a real gap reported after the first round
// of fixes: dataVerifiedAt was null for 2 apps while listingFreshness said
// "fresh". That combination is contradictory on its face to an external
// caller, even though the underlying logic (falling back to addedDate) was
// defensible on its own — "fresh" should mean "verified recently," not
// "added recently, never independently verified." Those are different
// claims, so they get different states: 'unverified' fires whenever
// lastVerifiedDate itself is null, regardless of addedDate, matching this
// codebase's own convention that a null field means "not yet researched,"
// never "confirmed current" (see ToolRecord's field comments in ./apps/types.ts).
// getListingFreshness's own null-means-'fresh' default is a UI-badge
// convenience (staleness.ts: "no date to judge, so don't show a warning
// badge") — correct for a silent absence of a warning icon, wrong for a
// named JSON field an LLM caller reads as an assertion.
function computeListingFreshness(app: ToolRecord): 'fresh' | 'warn' | 'old' | 'unverified' {
  if (app.upstreamStatus) return 'old'
  if (app.lastVerifiedDate === null) return 'unverified'
  return getListingFreshness(app.lastVerifiedDate)
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
  listingFreshness: 'fresh' | 'warn' | 'old' | 'unverified'
  whyMatched?: string
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
  opts?: { ramGb?: number; vramGb?: number; directoryFilters?: { category?: CategorySubKey; os?: OSKey; price?: PriceKey }; whyMatched?: string },
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
    listingFreshness: computeListingFreshness(app),
    ...(opts?.whyMatched ? { whyMatched: opts.whyMatched } : {}),
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
      // Lets whyMatched below say WHICH key matched (name vs. tagline vs.
      // category) instead of a generic "matched your search" for every
      // result — gap 4 of the MCP response-quality brief.
      includeMatches: true,
    })
  }
  return cachedAppFuse
}

// Curated fallback for plain-language terms that share no characters with
// this taxonomy's own labels, so no amount of fuzzy-threshold tuning could
// ever bridge them (e.g. "blog" vs. "Notes & integrations") — gap 3: "image
// editing"-style category words work through categoryLabelsBySlug above, but
// "writing"/"blog"/"markdown" returned 0 matches because they don't lexically
// overlap with any category label at all. Applied ONLY as a same-response
// suggestion when the literal search finds nothing (see searchApps below) —
// never used to outrank or replace a real fuzzy/category match. Deliberately
// small; extend as new zero-result queries surface rather than guessing a
// complete list up front.
const QUERY_CATEGORY_SYNONYMS: Record<string, CategorySubKey[]> = {
  writing: ['document-pdf-chat', 'notes-integrations'],
  write: ['document-pdf-chat', 'notes-integrations'],
  blog: ['notes-integrations', 'document-pdf-chat'],
  blogging: ['notes-integrations', 'document-pdf-chat'],
  markdown: ['notes-integrations', 'document-pdf-chat'],
  cms: ['notes-integrations'],
  publishing: ['notes-integrations', 'document-pdf-chat'],
  notes: ['notes-integrations'],
  translate: ['general-chat-clients'],
  translation: ['general-chat-clients'],
  summarize: ['document-pdf-chat', 'general-chat-clients'],
  summary: ['document-pdf-chat', 'general-chat-clients'],
  database: ['vector-databases'],
  search: ['local-search', 'vector-databases'],
  transcribe: ['speech-to-text'],
  transcription: ['speech-to-text'],
  podcast: ['speech-to-text', 'text-to-speech'],
  narration: ['text-to-speech'],
  avatar: ['avatars-3d'],
  training: ['fine-tuning-lora'],
  finetune: ['fine-tuning-lora'],
  benchmark: ['evaluation-benchmarking'],
  monitor: ['observability'],
  monitoring: ['observability'],
}

interface CategorySuggestion {
  key: CategorySubKey
  label: string
  exampleApps: string[]
}

function categorySuggestionsFor(keys: CategorySubKey[]): CategorySuggestion[] {
  return [...new Set(keys)].map((k) => ({
    key: k,
    label: CATEGORY_SUB_LABEL[k]?.en ?? k,
    exampleApps: localAiApps
      .filter((a) => a.categories.includes(k) && a.status !== 'planned' && a.upstreamStatus?.state !== 'archived')
      .sort((x, y) => (y.stars ?? 0) - (x.stars ?? 0))
      .slice(0, 3)
      .map((a) => a.name),
  }))
}

function suggestCategoriesForQuery(query: string): CategorySuggestion[] {
  const tokens = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
  const matched = new Set<CategorySubKey>()
  for (const token of tokens) QUERY_CATEGORY_SYNONYMS[token]?.forEach((k) => matched.add(k))
  return categorySuggestionsFor([...matched])
}

// Dynamically built from the live taxonomy rather than a hand-typed list, so
// it can never drift from what categories actually exist — gap 1's "scope
// statement".
const SCOPE_STATEMENT = `The Local LLM Software Directory covers local-AI software only, organized into: ${CATEGORY_GROUPS.map((g) => CATEGORY_GROUP_LABEL[g.key]).join(', ')}. It has no listings for general publishing, CMS, or non-AI tools.`

// Plain-language reason a result appeared, so the calling AI can justify a
// ranking instead of guessing — gap 4. `matchedKeys` comes from Fuse's
// includeMatches output for query-driven searches; filters (category/
// useCase/os/price/worksWith) apply identically to every result, so they're
// always named when set, without needing per-app introspection.
function buildWhyMatched(
  app: ToolRecord,
  fit: AppSummary['hardwareFit'],
  args: { query?: string; category?: string; useCase?: string; os?: string; price?: string; worksWith?: string; ramGb?: number; vramGb?: number },
  matchedKeys?: Set<string>,
): string {
  const reasons: string[] = []
  if (args.query) {
    if (matchedKeys?.has('name')) reasons.push(`name matches "${args.query}"`)
    else if (matchedKeys?.has('categoryLabels')) reasons.push(`category matches "${args.query}"`)
    else if (matchedKeys?.has('tagline.en')) reasons.push(`description matches "${args.query}"`)
    else reasons.push(`matched search "${args.query}"`)
  }
  if (args.category) reasons.push(`in category filter "${args.category}"`)
  if (args.useCase) reasons.push(`supports use case "${args.useCase}"`)
  if (args.os) reasons.push(`available on ${args.os}`)
  if (args.price) reasons.push(`price: ${args.price}`)
  if (args.worksWith) reasons.push(`works with ${args.worksWith}`)
  if (fit === 'fits') reasons.push('confirmed to fit your stated hardware')
  return reasons.length ? reasons.join('; ') : 'listed in the directory (no filters applied)'
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

  let pool: ToolRecord[]
  let matchedKeysBySlug: Map<string, Set<string>> | undefined
  if (args.query) {
    const fuseResults = getAppFuse().search(args.query)
    // Gap 1/3: the literal search found nothing at all — a wrong-scope
    // question ("markdown editor") or a synonym gap ("blog"), not a hardware/
    // category filter being too narrow (that's the separate branch below,
    // after filtering). Return early with the directory's actual scope and
    // the closest browsable categories instead of a bare empty array.
    if (fuseResults.length === 0) {
      const suggestedCategories = suggestCategoriesForQuery(args.query)
      return {
        totalMatches: 0,
        results: [],
        offset,
        limit,
        scope: SCOPE_STATEMENT,
        suggestedCategories,
        directoryUrl: directoryUrlFor({}),
        categoryGuide: null,
        disclaimer: DIRECTORY_DISCLAIMER,
        instructions:
          'No directory match for this query. State the "scope" field so the user knows what this directory does and does not cover — do not just say "no results." If "suggestedCategories" is non-empty, offer those as the closest available alternative, naming their "exampleApps". Otherwise point to "directoryUrl" to browse. Never invent an app that is not in this response.',
      }
    }
    pool = fuseResults.map((r) => r.item)
    matchedKeysBySlug = new Map(fuseResults.map((r) => [r.item.slug, new Set((r.matches ?? []).map((m) => m.key ?? ''))]))
  } else {
    pool = [...localAiApps]
  }
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

  // Distinct from the query-found-nothing branch above: here the query (or
  // an unfiltered browse) DID match apps, but category/os/price/ramGb/vramGb
  // narrowed it to zero. The fix is "loosen a filter," not "wrong scope."
  if (scored.length === 0) {
    return {
      totalMatches: 0,
      results: [],
      offset,
      limit,
      directoryUrl: directoryUrlFor(directoryFilters),
      categoryGuide,
      disclaimer: DIRECTORY_DISCLAIMER,
      instructions:
        'No apps matched every filter together. Tell the user which filters were applied and suggest relaxing one (hardware, OS, price, or category) rather than concluding no such app exists — call search_apps again with fewer filters.',
    }
  }

  return {
    totalMatches: scored.length,
    results: scored
      .slice(offset, offset + limit)
      .map(({ a, fit }) => summarize(a, fit, { ramGb: args.ramGb, vramGb: args.vramGb, directoryFilters, whyMatched: buildWhyMatched(a, fit, args, matchedKeysBySlug?.get(a.slug)) })),
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
    listingFreshness: computeListingFreshness(app),
  }
}
