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
import { CATEGORY_GROUPS, CATEGORY_GROUP_LABEL, CATEGORY_SUB_LABEL, CATEGORY_SUB_GROUP } from '@/lib/power-local-llm/apps/categories'
import type { CompareValue, OSKey, UseCaseKey } from '@/lib/power-local-llm/apps/types'
// Directory search/hardware-match logic lives in its own module (not here)
// so routes that only need it — the homepage "What Can I Run?"/"Can I Run
// This?" tools — don't pull in the multi-cluster content barrels this file
// imports below for search_promptquorum/get_article. Re-exported here so
// existing MCP callers (search_apps, get_app_details) see no behavior change.
import {
  DIRECTORY_DISCLAIMER,
  ARTICLE_HINT,
  AppNotFoundError,
  appNotFoundMessage,
  findApp,
  suggestApps,
  articlesForApp,
  categoryGuideForGroup,
  directoryUrlFor,
  hardwareFit,
  summarize,
  searchApps,
  getAppDetails,
} from '@/lib/power-local-llm/app-search'
import type { AppSummary } from '@/lib/power-local-llm/app-search'
import { HANDS_ON_TEST_SLUGS, handsOnTestUrl } from '@/lib/hands-on-tests/links'
import { listHandsOnTests } from '@/lib/mcp/directory-tools'

export {
  DIRECTORY_DISCLAIMER,
  ARTICLE_HINT,
  AppNotFoundError,
  appNotFoundMessage,
  findApp,
  suggestApps,
  articlesForApp,
  hardwareFit,
  summarize,
  searchApps,
  getAppDetails,
}
export type { AppSummary }

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

export type LicenseUseCase = 'commercial-use' | 'modify' | 'redistribute-modified' | 'host-as-service' | 'embed-in-product'

// Plain-language, hedged rule of thumb per license family and scenario. These
// are generalisations of each family's well-known core rule (see
// license-taxonomy.ts), never a reading of any specific app's actual license
// text — vendor licenses carry custom terms, so the answer always says to read
// the license file. Keys missing here fall back to LICENSE_FALLBACK.
const PERMISSIVE = new Set(['mit', 'apache', 'bsd', 'ccBy'])
const STRONG_COPYLEFT = new Set(['gpl', 'agpl'])
const RESTRICTED = new Set(['bsl', 'sspl', 'commonsClause', 'sustainableUse', 'rail', 'sourceAvailable', 'customVendor', 'proprietary', 'unclear'])

function useCaseNote(familyKey: string, useCase: LicenseUseCase): string {
  if (PERMISSIVE.has(familyKey)) {
    return {
      'commercial-use': 'Generally allowed; keep the copyright and license notice.',
      modify: 'Generally allowed without publishing your changes.',
      'redistribute-modified': 'Generally allowed; keep the license text and notices (Apache adds a changes notice and a patent grant).',
      'host-as-service': 'Generally allowed with no source-sharing duty.',
      'embed-in-product': 'Generally allowed in closed-source products; include the notice.',
    }[useCase]
  }
  if (familyKey === 'agpl') {
    return {
      'commercial-use': 'Using it internally is generally fine; the strong obligations start when you modify, distribute or offer it to others over a network.',
      modify: 'Modifying for private use is generally fine; sharing or hosting the modified version triggers the source-release duty.',
      'redistribute-modified': 'Must release your modified source under the same license.',
      'host-as-service': 'Hosting a modified version for users over a network requires offering them the source — the defining AGPL rule.',
      'embed-in-product': 'Embedding generally pulls your product under AGPL unless you have a separate commercial license from the copyright holder.',
    }[useCase]
  }
  if (STRONG_COPYLEFT.has(familyKey)) {
    return {
      'commercial-use': 'Generally allowed to use and sell; the obligations are about distributing.',
      modify: 'Generally allowed; duties apply once you distribute the modified version.',
      'redistribute-modified': 'Must release the modified source under the same license.',
      'host-as-service': 'Plain hosting without distributing copies generally carries no source duty (that gap is what AGPL closes).',
      'embed-in-product': 'Distributing a product that embeds it generally requires releasing that product under GPL-compatible terms.',
    }[useCase]
  }
  if (familyKey === 'lgpl' || familyKey === 'mpl') {
    return {
      'commercial-use': 'Generally allowed.',
      modify: 'Generally allowed; changes to the licensed files must be shared if you distribute them.',
      'redistribute-modified': 'Changes to the licensed files stay under the same license; the rest of your code is separate.',
      'host-as-service': 'Generally no source duty for hosting.',
      'embed-in-product': 'Generally allowed in closed products if the licensed part stays separable/swappable and its own source stays open.',
    }[useCase]
  }
  if (RESTRICTED.has(familyKey)) {
    return 'This family restricts at least some commercial or competing uses and varies by vendor. Read the actual license file for this exact app before relying on it.'
  }
  return 'No rule of thumb available for this license — read the license file itself.'
}

export function explainLicense(args: { licenseString: string; useCase?: LicenseUseCase }) {
  const families = matchLicenseFamilies(args.licenseString).map(({ key, name, summary }) => ({
    key,
    name,
    summary,
    ...(args.useCase ? { useCaseNote: useCaseNote(key, args.useCase) } : {}),
  }))
  return {
    families,
    ...(args.useCase ? { useCase: args.useCase } : {}),
    caveats: [
      'The application\'s license is separate from the license of any model you run with it (e.g. Llama, Gemma, Qwen licenses have their own terms) and from bundled components. Check each one.',
      'Multi-license strings (e.g. "GPL / AGPL / Apache") mean different parts carry different licenses.',
      'This is a general, plain-language explanation, not legal advice. For commercial use or redistribution, read the license text or consult a lawyer.',
    ],
  }
}

// --- Directory recommendation tools (search_apps / list_categories) ---------
// Answer only from the directory's own ToolRecords — never the open internet —
// so recommendations stay curated. Hardware/OS fields that are null mean "not
// yet researched", so those apps are kept but flagged, never silently dropped.

const USE_CASES: UseCaseKey[] = ['chat', 'code', 'agent', 'docs', 'image', 'audio', 'phone', 'build', 'serve']
const OS_KEYS: OSKey[] = ['mac', 'win', 'linux', 'ios', 'android', 'web']

// listedApps: excludes 'planned'/archived entries so counts and exampleApps
// match what search_apps would actually return — see MCP response-quality
// brief round 2, gap 2: an AI had to guess a category blind (no counts, no
// examples) because list_categories gave no signal on which ones actually
// have listings.
const listedApps = localAiApps.filter((a) => a.status !== 'planned' && a.upstreamStatus?.state !== 'archived')

export function listCategories() {
  return {
    groups: CATEGORY_GROUPS.map((g) => ({
      key: g.key,
      label: CATEGORY_GROUP_LABEL[g.key],
      count: listedApps.filter((a) => a.categories.some((k) => CATEGORY_SUB_GROUP[k] === g.key)).length,
      categories: g.subs.map((k) => {
        const inCategory = listedApps.filter((a) => a.categories.includes(k))
        return {
          key: k,
          label: CATEGORY_SUB_LABEL[k].en,
          count: inCategory.length,
          exampleApps: inCategory
            .sort((x, y) => (y.stars ?? 0) - (x.stars ?? 0))
            .slice(0, 3)
            .map((a) => a.name),
        }
      }),
    })),
    useCases: USE_CASES,
    operatingSystems: OS_KEYS,
    hint: 'Ask the user what they want to do and their OS and RAM/VRAM, then call search_apps. Use each category\'s "count"/"exampleApps" to pick a plausible category before guessing — a category with count 0 has no listings.',
  }
}

// --- compare_apps ------------------------------------------------------
// Side-by-side comparison of 2-4 named directory entries. Reuses the same
// AppSummary shape as search_apps (hardware/price/license/worksWith/articles)
// rather than inventing a second data shape, plus each pair's shared `compare`
// attribute keys (./compare-schema.ts) when both tools were reviewed in the
// same category segment — never fabricated for tools that weren't.

export const COMPARE_CRITERIA = ['price', 'license', 'platforms', 'ramGb', 'vramGb', 'cpuOnly', 'installEffort', 'locality', 'interfaces', 'useCases', 'worksWith', 'mcpSupport', 'stars', 'listingFreshness'] as const
export type CompareCriterion = (typeof COMPARE_CRITERIA)[number]

const NOT_RESEARCHED = 'not researched'
const EFFORT_ORDER = ['hosted', 'installer', 'one-command', 'terminal-setup']

export interface CompareAppsResult {
  apps: AppSummary[]
  /** One row per criterion; each app's cell is its value, or "not researched" when the directory has no figure (never treated as a failure). */
  matrix: Record<string, Record<string, unknown>>
  /** Per-dimension leaders computed only from researched values; a dimension with no researched value has no entry. */
  bestFor: Record<string, { slug: string; name: string; basis: string }>
  /** Apps that support each use case (from the directory's own use-case tags). */
  byUseCase: Record<string, string[]>
  summary: string
  sharedCompareAttributes: Record<string, Record<string, CompareValue>> | null
  disclaimer: string
  instructions: string
}

export function compareApps(args: { slugs: string[]; criteria?: CompareCriterion[] }): CompareAppsResult {
  const slugs = [...new Set(args.slugs.map((s) => s.trim().toLowerCase()))]
  if (slugs.length < 2) throw new AppNotFoundError('Provide at least 2 distinct slugs to compare.')
  if (slugs.length > 5) throw new AppNotFoundError('Compare at most 5 apps at once — call again for more.')

  const apps = slugs.map((slug) => findApp(slug))

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

  const summaries = apps.map((a) => summarize(a, 'unknown'))
  const criteria = args.criteria?.length ? args.criteria : [...COMPARE_CRITERIA]

  const value = (a: (typeof apps)[number], c: CompareCriterion): unknown => {
    switch (c) {
      case 'price': return a.price === 'TODO' ? NOT_RESEARCHED : a.price
      case 'license': return a.license || NOT_RESEARCHED
      case 'platforms': return a.platforms ?? NOT_RESEARCHED
      case 'ramGb': return a.hardware?.ramGb ?? (a.hardware?.variesByModel ? 'depends on the model you load' : NOT_RESEARCHED)
      case 'vramGb': return a.hardware?.cpuOnly ? 'not required (CPU-only possible)' : (a.hardware?.vramGb ?? (a.hardware?.variesByModel ? 'depends on the model you load' : NOT_RESEARCHED))
      case 'cpuOnly': return a.hardware?.cpuOnly ?? NOT_RESEARCHED
      case 'installEffort': return a.installEffort ?? NOT_RESEARCHED
      case 'locality': return a.locality === 'TODO' ? NOT_RESEARCHED : a.locality
      case 'interfaces': return a.interfaces.length ? a.interfaces : NOT_RESEARCHED
      case 'useCases': return a.uses ?? NOT_RESEARCHED
      case 'worksWith': return a.worksWith ?? NOT_RESEARCHED
      case 'mcpSupport': return a.mcpSupport === true ? true : NOT_RESEARCHED
      case 'stars': return a.stars ?? NOT_RESEARCHED
      case 'listingFreshness': return summarize(a, 'unknown').listingFreshness
    }
  }
  const matrix: Record<string, Record<string, unknown>> = {}
  for (const c of criteria) matrix[c] = Object.fromEntries(apps.map((a) => [a.slug, value(a, c)]))

  const bestFor: CompareAppsResult['bestFor'] = {}
  const pick = (key: string, score: (a: (typeof apps)[number]) => number | null, basis: string, lowerIsBetter = false) => {
    const scored = apps.map((a) => ({ a, v: score(a) })).filter((x): x is { a: (typeof apps)[number]; v: number } => x.v !== null)
    if (scored.length === 0) return
    scored.sort((x, y) => (lowerIsBetter ? x.v - y.v : y.v - x.v))
    // A tie is not a winner.
    if (scored.length > 1 && scored[0].v === scored[1].v) return
    bestFor[key] = { slug: scored[0].a.slug, name: scored[0].a.name, basis }
  }
  pick('easiestInstall', (a) => { const i = a.installEffort ? EFFORT_ORDER.indexOf(a.installEffort) : -1; return i === -1 ? null : i }, 'lowest verified install effort (hosted < installer < one-command < terminal-setup)', true)
  pick('lightestHardware', (a) => a.hardware?.ramGb ?? null, 'lowest researched RAM requirement', true)
  pick('mostPopular', (a) => a.stars, 'most GitHub stars (a popularity signal, not a quality ranking)')
  pick('mostRecentlyVerified', (a) => (a.lastVerifiedDate ? Date.parse(a.lastVerifiedDate) : null), 'most recent PromptQuorum data verification')
  const priceRank: Record<string, number> = { free: 0, freemium: 1, paid: 2 }
  pick('cheapest', (a) => priceRank[a.price] ?? null, 'lowest price tier', true)

  const byUseCase: Record<string, string[]> = {}
  for (const a of apps) for (const u of a.uses ?? []) (byUseCase[u] ??= []).push(a.slug)

  const parts: string[] = [`Compared ${apps.map((a) => a.name).join(', ')}.`]
  const lines = Object.entries(bestFor).map(([k, v]) => `${k}: ${v.name}`)
  parts.push(lines.length ? `Leaders on researched data — ${lines.join('; ')}.` : 'No single app leads on any dimension with researched data; see the matrix.')
  const gaps = criteria.filter((c) => apps.some((a) => value(a, c) === NOT_RESEARCHED))
  if (gaps.length) parts.push(`"not researched" cells (${gaps.join(', ')}) mean PromptQuorum has no verified figure yet, not that the app lacks the feature.`)

  return {
    apps: summaries,
    matrix,
    bestFor,
    byUseCase,
    summary: parts.join(' '),
    sharedCompareAttributes,
    disclaimer: DIRECTORY_DISCLAIMER,
    instructions: `${ARTICLE_HINT} Present "bestFor" as per-need picks, never one universal winner, and mention "not researched" cells as unknowns rather than negatives.`,
  }
}

// --- get_latest -------------------------------------------------------------
// "What's new": newly listed directory apps (addedDate), recently updated
// articles (dateModified of the EN block, falling back to publishDate /
// last_full_refresh) and hands-on tests. Dates are the content's own ISO
// dates; articles without one are omitted rather than guessed.

const SITE_URL = 'https://www.promptquorum.com'

export interface LatestItem {
  type: 'app' | 'article' | 'hands-on-test'
  title: string
  date: string
  url: string
  cluster?: string
}

let cachedArticleDates: LatestItem[] | null = null
function articleDates(): LatestItem[] {
  if (cachedArticleDates) return cachedArticleDates
  const items: LatestItem[] = []
  for (const [cluster, source] of Object.entries(CLUSTER_SOURCES)) {
    for (const [slug, key] of Object.entries(source.slugToKey)) {
      if (source.isPublished && !source.isPublished(slug)) continue
      const en = (source.content[key] as Record<string, Record<string, unknown>> | undefined)?.en
      if (!en) continue
      const raw = (en.dateModified ?? en.last_full_refresh ?? en.publishDate) as string | undefined
      const iso = typeof raw === 'string' ? raw.match(/\d{4}-\d{2}-\d{2}/)?.[0] : undefined
      if (!iso) continue
      const title = typeof en.title === 'string' ? en.title : slug
      items.push({ type: 'article', title, date: iso, url: `${SITE_URL}/${cluster}/${slug}`, cluster })
    }
  }
  cachedArticleDates = items
  return items
}

export function getLatest(args: { type?: 'all' | 'apps' | 'articles' | 'hands-on'; limit?: number; since?: string; cluster?: string }) {
  const type = args.type ?? 'all'
  const limit = Math.min(Math.max(args.limit ?? 10, 1), 30)
  const since = args.since && /^\d{4}-\d{2}-\d{2}$/.test(args.since) ? args.since : undefined

  let items: LatestItem[] = []
  if (type === 'all' || type === 'apps') {
    items.push(
      ...listedApps
        .filter((a) => a.addedDate)
        .map((a): LatestItem => ({ type: 'app', title: a.name, date: a.addedDate!, url: `${SITE_URL}/directory?tool=${a.slug}` })),
    )
  }
  if (type === 'all' || type === 'articles') {
    items.push(...articleDates().filter((i) => !args.cluster || i.cluster === args.cluster))
  }
  if (type === 'all' || type === 'hands-on') {
    for (const t of listHandsOnTests()) {
      if (t.published) items.push({ type: 'hands-on-test', title: t.title ?? t.name, date: t.published, url: t.url })
    }
  }
  if (since) items = items.filter((i) => i.date >= since)
  items.sort((a, b) => b.date.localeCompare(a.date))

  return {
    total: items.length,
    items: items.slice(0, limit),
    note: 'App dates are the day an app was added to the directory; article dates are the content\'s own last-modified date. Every item has a real URL — render as links.',
  }
}

// --- find_related_content ---------------------------------------------------

export function findRelatedContent(args: { app?: string; topic?: string; lang?: string; limit?: number }) {
  const limit = Math.min(Math.max(args.limit ?? 8, 1), 20)
  if (!args.app && !args.topic) throw new AppNotFoundError('Provide "app" (a directory slug) or "topic" (free text).')

  if (args.app) {
    const app = findApp(args.app)
    const { article, relatedArticles } = articlesForApp(app)
    const group = app.categories[0] ? CATEGORY_SUB_GROUP[app.categories[0]] : null
    const handsOn = HANDS_ON_TEST_SLUGS.includes(app.slug) ? `${SITE_URL}${handsOnTestUrl(app.slug, 'en')}` : null
    const text = searchPromptquorum({ query: `${app.name} setup install guide`, lang: args.lang, limit })
    return {
      app: { slug: app.slug, name: app.name },
      review: article,
      handsOnTest: handsOn,
      relatedArticles,
      categoryGuide: group ? categoryGuideForGroup(group) : null,
      moreFromSearch: text,
      directoryUrl: directoryUrlFor({ category: app.categories[0] }),
      note: 'Setup/installation help appears in "review" and "moreFromSearch"; PromptQuorum does not generate install commands — follow the vendor\'s official instructions.',
    }
  }

  return { topic: args.topic, results: searchPromptquorum({ query: args.topic!, lang: args.lang, limit }) }
}
