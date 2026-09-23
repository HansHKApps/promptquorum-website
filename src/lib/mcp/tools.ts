// Named, plain-function implementations of every MCP tool this site exposes
// at src/app/api/mcp/route.ts. Each function takes a plain args object and
// returns a plain, JSON-serializable result — the route wraps results in
// the MCP content envelope, so nothing here needs to know about MCP itself.
//
// Every data source below is read-only and already built/maintained for the
// website (the ⌘K search index, the content barrels, the app directory, the
// license taxonomy) — this file adds no new content pipeline, it only wraps
// existing exports for a second consumer.

import Fuse from 'fuse.js'
import type { SearchEntry } from '@/components/search/search-utils'
import { SUPPORTED_LANGS, HUB_LABELS } from '@/components/search/search-utils'
import { buildAllSearchEntries } from '@/lib/search/build-search-entries'
import { matchLicenseFamilies } from '@/lib/power-local-llm/license-taxonomy'
import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import featureReviewIndex from '@/generated/feature-review-index.json'
import toolArticleIndex from '@/generated/tool-article-index.json'
import { CATEGORY_GROUPS, CATEGORY_GROUP_LABEL, CATEGORY_SUB_LABEL, CATEGORY_SUB_GROUP } from '@/lib/power-local-llm/apps/categories'
import type { CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import type { CompareValue, OSKey, ToolRecord, UseCaseKey } from '@/lib/power-local-llm/apps/types'

import { peContent } from '@/lib/prompt-engineering/articles-barrel'
import { llmContent } from '@/lib/local-llms/articles-barrel'
import { powerLLMContent } from '@/lib/power-local-llm/articles-barrel'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { balconySolarContent } from '@/lib/balcony-solar/articles-barrel'
import { smartHomeContent } from '@/lib/smart-home/articles-barrel'
import { blogContent } from '@/lib/blog/blogContent'

import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { POWER_LLM_SLUG_TO_KEY } from '@/lib/power-local-llm/slugs'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { BALCONY_SOLAR_SLUG_TO_KEY } from '@/lib/balcony-solar/slugs'
import { SMART_HOME_SLUG_TO_KEY } from '@/lib/smart-home/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { POWER_LLM_PUBLISHED_SLUGS } from '@/lib/power-local-llm/published'
import { BALCONY_SOLAR_PUBLISHED_SLUGS } from '@/lib/balcony-solar/published'
import { SMART_HOME_PUBLISHED_SLUGS } from '@/lib/smart-home/published'

// Same weighting as src/components/search/useSearch.ts's FUSE_OPTIONS —
// kept as a literal duplicate (no shared-options module exists yet) rather
// than importing the client hook. Skips that file's extra query-hardening
// (short-prefix/model-token/synonym handling, tuned for human typos) since
// MCP callers are LLMs that typically send clean natural-language queries.
const FUSE_OPTIONS: import('fuse.js').IFuseOptions<SearchEntry> = {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1.5 },
    { name: 'tags', weight: 2 },
    { name: 'section', weight: 1 },
  ],
  threshold: 0.3,
  ignoreLocation: true,
  minMatchCharLength: 2,
  ignoreFieldNorm: true,
}

type SupportedLang = (typeof SUPPORTED_LANGS)[number]

function normalizeLang(lang: string | undefined): SupportedLang {
  return (SUPPORTED_LANGS as readonly string[]).includes(lang ?? '') ? (lang as SupportedLang) : 'en'
}

// Cached across warm serverless invocations — rebuilding the ~thousands-of-
// entries index (and a fresh Fuse instance) on every call would waste the
// cold-start budget for no reason, since the underlying content is static
// per deployment.
let cachedEntries: SearchEntry[] | null = null
function getSearchEntries(): SearchEntry[] {
  if (!cachedEntries) cachedEntries = buildAllSearchEntries()
  return cachedEntries
}

export interface SearchToolResult {
  title: string
  description: string
  url: string
  hub: string
  lang: string
}

export function searchPromptquorum(args: { query: string; lang?: string; cluster?: string; limit?: number }): SearchToolResult[] {
  const lang = args.lang ? normalizeLang(args.lang) : undefined
  let entries = getSearchEntries()
  if (lang) entries = entries.filter((e) => e.lang === lang)
  if (args.cluster) entries = entries.filter((e) => e.hub === args.cluster)

  const fuse = new Fuse(entries, FUSE_OPTIONS)
  const limit = Math.min(Math.max(args.limit ?? 10, 1), 25)
  return fuse
    .search(args.query)
    .slice(0, limit)
    .map((r) => ({ title: r.item.title, description: r.item.description, url: r.item.url, hub: r.item.hub, lang: r.item.lang }))
}

export interface ClusterInfo {
  hub: string
  label: string
  description: string
}

const CLUSTER_DESCRIPTIONS: Record<string, string> = {
  'local-llms': 'Guides and explainers about running large language models on your own hardware.',
  'prompt-engineering': 'Techniques and reference material for writing effective prompts.',
  'power-local-llm': 'Reviews of local-AI tools, plus the Local LLM Software Directory listing hundreds of them.',
  'prompt-bites': 'Short, focused answers to specific local-AI questions.',
  'smart-home': 'Guides on local, privacy-respecting smart-home setups.',
  'balcony-solar': 'Guides on small balcony solar power systems.',
  blog: 'PromptQuorum blog posts on AI tooling and related topics.',
}

export function listClusters(): ClusterInfo[] {
  return Object.entries(HUB_LABELS)
    .filter(([hub]) => hub !== 'product')
    .map(([hub, label]) => ({ hub, label, description: CLUSTER_DESCRIPTIONS[hub] ?? '' }))
}

interface ClusterSource {
  content: Record<string, Record<string, unknown>>
  slugToKey: Record<string, string>
  isPublished?: (slug: string) => boolean
}

const CLUSTER_SOURCES: Record<string, ClusterSource> = {
  'local-llms': { content: llmContent as unknown as Record<string, Record<string, unknown>>, slugToKey: LLM_SLUG_TO_KEY as Record<string, string> },
  'prompt-engineering': { content: peContent as unknown as Record<string, Record<string, unknown>>, slugToKey: PE_SLUG_TO_KEY as Record<string, string> },
  'power-local-llm': {
    content: powerLLMContent as unknown as Record<string, Record<string, unknown>>,
    slugToKey: POWER_LLM_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => POWER_LLM_PUBLISHED_SLUGS.has(slug),
  },
  'prompt-bites': { content: promptBitesContent as unknown as Record<string, Record<string, unknown>>, slugToKey: PROMPT_BITES_SLUG_TO_KEY as Record<string, string> },
  'smart-home': {
    content: smartHomeContent as unknown as Record<string, Record<string, unknown>>,
    slugToKey: SMART_HOME_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => SMART_HOME_PUBLISHED_SLUGS.has(slug),
  },
  'balcony-solar': {
    content: balconySolarContent as unknown as Record<string, Record<string, unknown>>,
    slugToKey: BALCONY_SOLAR_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug),
  },
  blog: { content: blogContent as unknown as Record<string, Record<string, unknown>>, slugToKey: SLUG_TO_POST_ID as Record<string, string> },
}

export interface ArticleToolResult {
  cluster: string
  slug: string
  lang: string
  article: Record<string, unknown>
}

export class ArticleNotFoundError extends Error {}

export function getArticle(args: { cluster: string; slug: string; lang?: string }): ArticleToolResult {
  const source = CLUSTER_SOURCES[args.cluster]
  if (!source) throw new ArticleNotFoundError(`Unknown cluster "${args.cluster}". Call list_clusters for valid values.`)
  if (source.isPublished && !source.isPublished(args.slug)) {
    throw new ArticleNotFoundError(`No published article "${args.slug}" in cluster "${args.cluster}".`)
  }
  const key = source.slugToKey[args.slug]
  if (!key) throw new ArticleNotFoundError(`No article "${args.slug}" in cluster "${args.cluster}".`)
  const langMap = source.content[key]
  if (!langMap) throw new ArticleNotFoundError(`No content for "${args.slug}" in cluster "${args.cluster}".`)
  const lang = normalizeLang(args.lang)
  const article = (langMap[lang] ?? langMap.en) as Record<string, unknown> | undefined
  if (!article) throw new ArticleNotFoundError(`No content in any language for "${args.slug}" in cluster "${args.cluster}".`)
  return { cluster: args.cluster, slug: args.slug, lang: langMap[lang] ? lang : 'en', article }
}

export class AppNotFoundError extends Error {}

export function getAppDetails(args: { slug: string }) {
  const app = localAiApps.find((t) => t.slug === args.slug)
  if (!app) throw new AppNotFoundError(`No directory entry "${args.slug}". Use search_promptquorum to find the right slug.`)
  return { ...app, ...articlesForApp(app) }
}

export function explainLicense(args: { licenseString: string }) {
  return matchLicenseFamilies(args.licenseString).map(({ key, name, summary }) => ({ key, name, summary }))
}

// --- Directory recommendation tools (search_apps / list_categories) ---------
// Answer only from the directory's own ToolRecords — never the open internet —
// so recommendations stay curated. Hardware/OS fields that are null mean "not
// yet researched", so those apps are kept but flagged, never silently dropped.

export const DIRECTORY_DISCLAIMER =
  'Directory data is editorial, may be outdated, and download links are not verified by PromptQuorum. Check the official source before installing.'

export const ARTICLE_HINT = 'Link each app\'s "article" as "Read the full article" and mention relatedArticles (e.g. category comparison) when present.'

const USE_CASES: UseCaseKey[] = ['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']
const OS_KEYS: OSKey[] = ['mac', 'win', 'linux', 'ios', 'android', 'web']

export function listCategories() {
  return {
    groups: CATEGORY_GROUPS.map((g) => ({
      key: g.key,
      label: CATEGORY_GROUP_LABEL[g.key],
      categories: g.subs.map((k) => ({ key: k, label: CATEGORY_SUB_LABEL[k].en })),
    })),
    useCases: USE_CASES,
    operatingSystems: OS_KEYS,
    hint: 'Ask the user what they want to do and their OS and RAM/VRAM, then call search_apps.',
  }
}

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

function hardwareFit(app: ToolRecord, ramGb?: number, vramGb?: number): AppSummary['hardwareFit'] {
  if (ramGb === undefined && vramGb === undefined) return 'unknown'
  const hw = app.hardware
  if (!hw || (hw.ramGb === null && hw.vramGb === null && hw.cpuOnly === null)) return 'unknown'
  if (ramGb !== undefined && hw.ramGb !== null && hw.ramGb > ramGb) return 'too-demanding'
  if (vramGb !== undefined && hw.vramGb !== null && hw.vramGb > vramGb && !hw.cpuOnly) return 'too-demanding'
  return 'fits'
}

function summarize(app: ToolRecord, fit: AppSummary['hardwareFit']): AppSummary {
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
  const limit = Math.min(Math.max(args.limit ?? 5, 1), 15)
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
  // Fuse order is preserved for query searches; otherwise rank reviewed and
  // well-starred tools first so the top few are the safest recommendations.
  if (!args.query) {
    scored.sort((x, y) => Number(!!y.a.reviewSlug) - Number(!!x.a.reviewSlug) || (y.a.stars ?? 0) - (x.a.stars ?? 0))
  }
  return {
    totalMatches: scored.length,
    results: scored.slice(0, limit).map(({ a, fit }) => summarize(a, fit)),
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: ARTICLE_HINT,
  }
}

// --- compare_apps ------------------------------------------------------
// Side-by-side comparison of 2-4 named directory entries. Reuses the same
// AppSummary shape as search_apps (hardware/price/license/worksWith/articles)
// rather than inventing a second data shape, plus each pair's shared `compare`
// attribute keys (./compare-schema.ts) when both tools were reviewed in the
// same category segment — never fabricated for tools that weren't.

export interface CompareAppsResult {
  apps: AppSummary[]
  sharedCompareAttributes: Record<string, Record<string, CompareValue>> | null
  disclaimer: string
  instructions: string
}

export function compareApps(args: { slugs: string[] }): CompareAppsResult {
  const slugs = [...new Set(args.slugs)]
  if (slugs.length < 2) throw new AppNotFoundError('Provide at least 2 distinct slugs to compare.')
  if (slugs.length > 4) throw new AppNotFoundError('Compare at most 4 apps at once — call again for more.')

  const apps = slugs.map((slug) => {
    const app = localAiApps.find((t) => t.slug === slug)
    if (!app) throw new AppNotFoundError(`No directory entry "${slug}". Use search_apps or search_promptquorum to find the right slug.`)
    return app
  })

  // Attribute keys every compared app has a `compare` value for — only
  // meaningful when they share a category segment (./compare-schema.ts), but
  // checking segment membership per-pair is unnecessary: an attribute key is
  // only ever populated for tools actually reviewed within that segment, so
  // an intersection across unrelated tools is naturally empty.
  const keySets = apps.map((a) => new Set(Object.keys(a.compare ?? {})))
  const sharedKeys = keySets.length ? [...keySets[0]].filter((k) => keySets.every((s) => s.has(k))) : []
  const sharedCompareAttributes = sharedKeys.length
    ? Object.fromEntries(apps.map((a) => [a.slug, Object.fromEntries(sharedKeys.map((k) => [k, a.compare![k]]))]))
    : null

  return {
    apps: apps.map((a) => summarize(a, 'unknown')),
    sharedCompareAttributes,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: ARTICLE_HINT,
  }
}
