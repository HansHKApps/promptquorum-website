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
import { getHandsOnTest } from '@/lib/hands-on-tests'
import { listHandsOnTests } from '@/lib/mcp/directory-tools'
import { searchPages } from '@/lib/mcp/pages'

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

import { CLUSTER_META } from '@/lib/mcp/clusters'
import { readArticleVariant, loadSearchEntries, loadLatestArticles } from '@/lib/mcp/corpus'
export type { LatestItem } from '@/lib/mcp/corpus'
import type { LatestItem } from '@/lib/mcp/corpus'

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

// The search entries come from the build-time corpus (src/lib/mcp/corpus.ts), one small file per locale, so this
// function never loads article source. The Fuse index per (locale, cluster) is cached across warm invocations:
// rebuilding it on every call would waste time for content that is static per deployment.
const fuseCache = new Map<string, { entries: SearchEntry[]; fuse: Fuse<SearchEntry> }>()
function fuseFor(lang: SupportedLang | undefined, cluster: string | undefined) {
  const key = `${lang ?? '*'}|${cluster ?? '*'}`
  let hit = fuseCache.get(key)
  if (!hit) {
    let entries = loadSearchEntries(lang)
    if (cluster) entries = entries.filter((e) => e.hub === cluster)
    hit = { entries, fuse: new Fuse(entries, FUSE_OPTIONS) }
    fuseCache.set(key, hit)
  }
  return hit
}

export interface SearchToolResult {
  title: string
  description: string
  url: string
  hub: string
  lang: string
}

const PAGE_QUERY_NOISE = new Set(['page', 'pages', 'site', 'website', 'say', 'says', 'seite', 'what', 'run', 'local', 'llm', 'llms', 'tool', 'tools'])

/** Articles, reviews and apps (search index) plus the site's other pages (home, About, ... see pages.ts). */
export function searchPromptquorum(args: { query: string; lang?: string; cluster?: string; limit?: number }): SearchToolResult[] {
  const limit = Math.min(Math.max(args.limit ?? 10, 1), 25)
  const found = searchEntries(args)
  if (args.cluster && args.cluster !== 'site') return found
  // "about" is a stop word for article search but the name of a page here ("what does the About page say").
  const words = [...new Set([...questionKeywords(args.query), ...(/\babout\b/i.test(args.query) ? ['about'] : [])])].filter((w) => !PAGE_QUERY_NOISE.has(w))
  const pages = searchPages(words.join(' '), args.lang, 3).map((p) => ({ title: p.title, description: p.summary, url: p.url, hub: 'site', lang: args.lang ? normalizeLang(args.lang) : 'en' }))
  if (args.cluster === 'site') return pages.slice(0, limit)
  // A page whose title matches a keyword (a question about "the About page") leads; weaker page matches follow the articles.
  const strong = pages.filter((p) => words.some((w) => p.title.toLowerCase().includes(w)))
  const weak = pages.filter((p) => !strong.includes(p))
  return [...strong.slice(0, 2), ...found, ...weak.slice(0, 1)].slice(0, limit)
}

function searchEntries(args: { query: string; lang?: string; cluster?: string; limit?: number }): SearchToolResult[] {
  const lang = args.lang ? normalizeLang(args.lang) : undefined
  const { fuse } = fuseFor(lang, args.cluster)
  const limit = Math.min(Math.max(args.limit ?? 10, 1), 25)
  const toResult = (item: SearchEntry): SearchToolResult => ({ title: item.title, description: item.description, url: item.url, hub: item.hub, lang: item.lang })

  const direct = fuse.search(args.query).map((r) => r.item)
  if (direct.length >= 3) return direct.slice(0, limit).map(toResult)

  // Whole-sentence fuzzy matching finds little for chat-style questions ("what can LLMs not do ??").
  // Fall back to the keywords of the question (stop words dropped, "cannot/can't/not do" read as "limitations")
  // and rank pages by how many keywords hit them; direct hits keep their lead.
  const keywords = questionKeywords(args.query)
  if (keywords.length === 0) return direct.slice(0, limit).map(toResult)
  const score = new Map<string, { item: SearchEntry; points: number }>()
  const add = (item: SearchEntry, points: number) => {
    const hit = score.get(item.url)
    if (hit) hit.points += points
    else score.set(item.url, { item, points })
  }
  direct.forEach((item, i) => add(item, 10 - i * 0.1))
  for (const word of keywords) {
    fuse.search(word).slice(0, 15).forEach((r, i) => add(r.item, 1 - i * 0.03))
  }
  return [...score.values()]
    .sort((a, b) => b.points - a.points)
    .slice(0, limit)
    .map((x) => toResult(x.item))
}

const QUESTION_STOP_WORDS = new Set([
  'what', 'which', 'who', 'whom', 'whose', 'when', 'where', 'why', 'how', 'can', 'could', 'should', 'would', 'will', 'does', 'did', 'doing',
  'the', 'and', 'for', 'with', 'about', 'are', 'was', 'were', 'any', 'all', 'you', 'your', 'have', 'has', 'not', 'dont', 'cant', 'cannot',
  'welche', 'welcher', 'welches', 'was', 'wie', 'wo', 'warum', 'kann', 'können', 'nicht', 'der', 'die', 'das', 'und', 'für', 'mit', 'ist', 'sind', 'gibt',
  'quel', 'quelle', 'quels', 'comment', 'pourquoi', 'peut', 'pas', 'les', 'des', 'une', 'est', 'sont', 'pour',
  'cuál', 'cuáles', 'cómo', 'porque', 'puede', 'puedo', 'los', 'las', 'una', 'para', 'qué', 'qual', 'quais', 'como', 'pode', 'não',
])

/** Phrasing of "what it cannot do" in the site's Latin-script languages → the word the pages use for it. */
const NEGATION_SYNONYMS: { test: RegExp; words: string[] }[] = [
  { test: /\b(cannot|can't|can not|cant|unable|doesn't|does not|not (?:do|able|capable|possible)|never)\b/i, words: ['limitations', 'limits'] },
  { test: /\b(nicht|kann\s+nicht|können\s+nicht|nie|niemals|unfähig)\b/i, words: ['einschränkungen', 'grenzen'] },
  { test: /\b(ne\s+peu(?:t|vent)\s+pas|ne\s+sait\s+pas|incapable|impossible)\b/i, words: ['limites', 'limitations'] },
  { test: /\b(no\s+pue(?:de|den)|incapaz|imposible)\b/i, words: ['limitaciones', 'límites'] },
  { test: /\b(não\s+pode(?:m)?|incapaz|impossível)\b/i, words: ['limitações', 'limites'] },
]

function questionKeywords(query: string): string[] {
  const words = query
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .split(/\s+/)
    .map((w) => w.replace(/^['-]+|['-]+$/g, ''))
    .filter((w) => w.length >= 3 && !QUESTION_STOP_WORDS.has(w))
  const out = new Set(words)
  for (const { test, words: extra } of NEGATION_SYNONYMS) {
    if (test.test(query)) extra.forEach((w) => out.add(w))
  }
  return [...out].slice(0, 8)
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

export interface ArticleToolResult {
  cluster: string
  slug: string
  lang: string
  article: Record<string, unknown>
}

export class ArticleNotFoundError extends Error {}

export function getArticle(args: { cluster: string; slug: string; lang?: string }): ArticleToolResult {
  const source = CLUSTER_META[args.cluster]
  if (!source) throw new ArticleNotFoundError(`Unknown cluster "${args.cluster}". Call list_clusters for valid values.`)
  if (source.isPublished && !source.isPublished(args.slug)) {
    throw new ArticleNotFoundError(`No published article "${args.slug}" in cluster "${args.cluster}".`)
  }
  const key = source.slugToKey[args.slug]
  if (!key) throw new ArticleNotFoundError(`No article "${args.slug}" in cluster "${args.cluster}".`)
  const lang = normalizeLang(args.lang)
  // Read only this article (one gzip record of the corpus pack); fall back to English like before.
  const own = readArticleVariant(args.cluster, key, lang)
  const article = own ?? (lang !== 'en' ? readArticleVariant(args.cluster, key, 'en') : undefined)
  if (!article) throw new ArticleNotFoundError(`No content in any language for "${args.slug}" in cluster "${args.cluster}".`)
  return { cluster: args.cluster, slug: args.slug, lang: own ? lang : 'en', article }
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
const OS_KEYS: OSKey[] = ['mac', 'win', 'linux', 'ios', 'ipados', 'watchos', 'android', 'web']

// listedApps: excludes 'planned'/archived entries so counts and exampleApps
// match what search_apps would actually return — see MCP response-quality
// brief round 2, gap 2: an AI had to guess a category blind (no counts, no
// examples) because list_categories gave no signal on which ones actually
// have listings.
const listedApps = localAiApps.filter((a) => a.status !== 'planned' && a.upstreamStatus?.state !== 'archived' && a.upstreamStatus?.state !== 'delisted')

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

export const COMPARE_CRITERIA = ['price', 'license', 'platforms', 'ramGb', 'vramGb', 'cpuOnly', 'installEffort', 'locality', 'interfaces', 'useCases', 'worksWith', 'mcpSupport', 'exposesApi', 'stars', 'listingFreshness'] as const
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
      case 'exposesApi': return a.exposesApi === true ? true : NOT_RESEARCHED
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

export function getLatest(args: { type?: 'all' | 'apps' | 'articles' | 'hands-on'; limit?: number; since?: string; cluster?: string; lang?: string }) {
  const lang = normalizeLang(args.lang)
  const prefix = lang === 'en' ? '' : `/${lang}`
  const type = args.type ?? 'all'
  const limit = Math.min(Math.max(args.limit ?? 10, 1), 30)
  const since = args.since && /^\d{4}-\d{2}-\d{2}$/.test(args.since) ? args.since : undefined

  let items: LatestItem[] = []
  if (type === 'all' || type === 'apps') {
    items.push(
      ...listedApps
        .filter((a) => a.addedDate)
        .map((a): LatestItem => ({ type: 'app', title: a.name, date: a.addedDate!, url: `${SITE_URL}${prefix}/directory?tool=${a.slug}` })),
    )
  }
  if (type === 'all' || type === 'articles') {
    items.push(...loadLatestArticles(lang).filter((i) => !args.cluster || i.cluster === args.cluster))
  }
  if (type === 'all' || type === 'hands-on') {
    for (const t of listHandsOnTests()) {
      if (!t.published) continue
      // Localized title and URL when the test exists in the visitor's language, otherwise the English test.
      const local = lang !== 'en' ? handsOnTestUrl(t.slug, lang) : null
      const localTitle = local ? getHandsOnTest(t.slug, lang)?.title : undefined
      items.push({ type: 'hands-on-test', title: localTitle ?? t.title ?? t.name, date: t.published, url: local ? `${SITE_URL}${local}` : t.url })
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
