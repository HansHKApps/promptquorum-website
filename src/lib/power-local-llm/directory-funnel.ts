// Review-page → directory funnel: pure, deterministic data for DirectoryBlock
// and the engagement popup. Runs server-side only (see page-helpers.tsx and
// the /local-llms/[slug] page); the 238-tool barrel never reaches a client
// bundle — the renderers receive the small, already-resolved object below.
//
// Every count comes from `localAiApps.length`. Nothing here is random, so a
// rebuild produces identical output.

import type { Language } from '@/lib/blog/blogContent'
import { getLangDir } from '@/lib/i18n/constants'
import featureReviewIndex from '@/generated/feature-review-index.json'
import { localAiApps } from './apps-barrel'
import { CATEGORY_SUB_GROUP, CATEGORY_SUB_LABEL } from './apps/categories'
import type { OSKey, ToolRecord } from './apps/types'
import { funnelT } from './directory-funnel-i18n'

export type ReviewCluster = 'power-local-llm' | 'local-llms'

type FeatureReviewIndex = Record<string, { cluster: string; urlSlug: string; url: string }>

// urlSlug (per cluster) → directory tile slug. One review per tile, one tile per review.
const APP_SLUG_BY_REVIEW: ReadonlyMap<string, string> = new Map(
  Object.entries(featureReviewIndex as FeatureReviewIndex).map(([appSlug, v]) => [`${v.cluster}:${v.urlSlug}`, appSlug]),
)

const APP_BY_SLUG: ReadonlyMap<string, ToolRecord> = new Map(localAiApps.map((a) => [a.slug, a]))

/** Detection rule for "review page": the URL slug is some tile's review. */
export function isReviewPage(cluster: ReviewCluster, urlSlug: string): boolean {
  return APP_SLUG_BY_REVIEW.has(`${cluster}:${urlSlug}`)
}

/** The tile a review page is about, or null (no tile, or not a review). */
export function getReviewedTool(cluster: ReviewCluster, urlSlug: string): ToolRecord | null {
  const appSlug = APP_SLUG_BY_REVIEW.get(`${cluster}:${urlSlug}`)
  return appSlug ? (APP_BY_SLUG.get(appSlug) ?? null) : null
}

export const directoryTotal = (): number => localAiApps.length

const withLocale = (path: string, lang: Language): string => (lang === 'en' ? path : `/${lang}${path}`)

/** Directory URL (canonical `/directory`, locale-prefixed) with optional query. */
export function directoryHref(lang: Language, query?: Record<string, string>): string {
  const qs = query && Object.keys(query).length ? `?${new URLSearchParams(query).toString()}` : ''
  return `${withLocale('/directory', lang)}${qs}`
}

/** Deep link that opens one tool's drawer on /directory (`?tool=<slug>`). */
export function directoryEntryHref(toolSlug: string, lang: Language): string {
  return directoryHref(lang, { tool: toolSlug })
}

// --- similar-tool selection -------------------------------------------------

type LicenseClass = 'open' | 'closed' | 'other'

const OPEN_LICENSE = /^(mit|apache|modified apache|agpl|gpl|lgpl|bsd|mpl|unlicense|open source|openrail|cc-by|cpml)/i
const CLOSED_LICENSE = /^(closed source|proprietary)/i

/** Coarse open/closed class for ranking only; never shown to readers. */
export function licenseClass(license: string): LicenseClass {
  const s = license.trim()
  if (CLOSED_LICENSE.test(s)) return 'closed'
  if (OPEN_LICENSE.test(s)) return 'open'
  return 'other'
}

function platformOverlap(a: ToolRecord, b: ToolRecord): number {
  if (!a.platforms || !b.platforms) return 0
  return a.platforms.filter((p) => b.platforms!.includes(p)).length
}

/**
 * Same primary category → platform overlap → license class match → stars →
 * newest addedDate → slug. Fewer than `limit` in the category: fill from the
 * same top-level group with the same ordering. Still fewer: return fewer.
 * The reviewed tool itself is never returned.
 */
export function getSimilarTools(app: ToolRecord, limit = 3): ToolRecord[] {
  const primary = app.categories[0]
  if (!primary) return []
  const group = CATEGORY_SUB_GROUP[primary]
  const cls = licenseClass(app.license)

  const rank = (a: ToolRecord, b: ToolRecord): number =>
    platformOverlap(app, b) - platformOverlap(app, a) ||
    Number(licenseClass(b.license) === cls) - Number(licenseClass(a.license) === cls) ||
    (b.stars ?? 0) - (a.stars ?? 0) ||
    (b.addedDate ?? '').localeCompare(a.addedDate ?? '') ||
    a.slug.localeCompare(b.slug)

  const others = localAiApps.filter((t) => t.slug !== app.slug)
  const sameCategory = others.filter((t) => t.categories[0] === primary).sort(rank)
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  // Group fill: tools sharing any of the app's other sub-categories (e.g. XTTS-v2's
  // `text-to-speech`) come before the rest of the group, then the same ranking.
  const shared = (t: ToolRecord) => t.categories.filter((c) => app.categories.includes(c)).length
  const sameGroup = others
    .filter((t) => t.categories[0] !== primary && t.categories.some((c) => CATEGORY_SUB_GROUP[c] === group))
    .sort((a, b) => shared(b) - shared(a) || rank(a, b))
  return [...sameCategory, ...sameGroup].slice(0, limit)
}

/**
 * The block must agree with the page's own competitor table, so those tools come first (in table
 * order); only if the table names fewer than `limit` resolvable tools is the rest filled by the
 * deterministic category ranking above. Never contains the reviewed tool, never repeats a tool.
 */
export function pickSimilar(app: ToolRecord, preferredSlugs: readonly string[], limit = 3): ToolRecord[] {
  const chosen: ToolRecord[] = []
  const seen = new Set<string>([app.slug])
  for (const slug of preferredSlugs) {
    const tool = APP_BY_SLUG.get(slug)
    if (!tool || seen.has(slug)) continue
    seen.add(slug)
    chosen.push(tool)
    if (chosen.length === limit) return chosen
  }
  for (const tool of getSimilarTools(app, limit + chosen.length)) {
    if (seen.has(tool.slug)) continue
    seen.add(tool.slug)
    chosen.push(tool)
    if (chosen.length === limit) break
  }
  return chosen
}

// --- display helpers --------------------------------------------------------

const OS_LABEL: Record<OSKey, string> = {
  mac: 'macOS',
  win: 'Windows',
  linux: 'Linux',
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
}

/** First OS (in this order) the tool does not list — used for "Not on X?". */
const OTHER_PLATFORM_ORDER: readonly OSKey[] = ['win', 'mac', 'linux', 'ios', 'android', 'web']

/** Short license text for a card: drop the parenthetical/comma tail. Full text goes in `title`. */
function shortLicense(license: string): string {
  return license.split(/\s[(/]|,/)[0].trim()
}

export interface FunnelCard {
  name: string
  platforms: string
  license: string
  licenseFull: string
  href: string
}

export interface DirectoryFunnelData {
  dir: 'ltr' | 'rtl'
  heading: string
  /** Absent when the review has no directory tile. */
  entry?: { label: string; href: string }
  similarLabel: string
  similar: FunnelCard[]
  compareAll: { label: string; href: string }
  /** Absent when the tool already lists every platform, or has none recorded. */
  otherPlatform?: { label: string; href: string }
  popup: {
    headline: string
    body: string
    cta: string
    close: string
    similar?: string
    href: string
  }
}

const POPUP_UTM = {
  utm_source: 'review-popup',
  utm_medium: 'onsite',
  utm_campaign: 'directory-funnel',
}

/**
 * Everything the renderers need for one review page in one locale, or
 * undefined when the page is not a review (so non-review pages get nothing).
 */
export function buildDirectoryFunnel(
  cluster: ReviewCluster,
  urlSlug: string,
  lang: Language,
  /** Tools the review's own competitor table names, in table order (see competitorToolSlugs). */
  preferredSimilar: readonly string[] = [],
): DirectoryFunnelData | undefined {
  if (!isReviewPage(cluster, urlSlug)) return undefined
  const app = getReviewedTool(cluster, urlSlug)
  const n = directoryTotal()
  const similarTools = app ? pickSimilar(app, preferredSimilar, 3) : []

  const similar: FunnelCard[] = similarTools.map((t) => ({
    name: t.name,
    platforms: t.platforms?.length ? t.platforms.map((p) => OS_LABEL[p]).join(' · ') : '',
    license: shortLicense(t.license),
    licenseFull: t.license,
    href: directoryEntryHref(t.slug, lang),
  }))

  // End-of-page second line. Prefer the platform (one the app does not list) with the most tools in
  // the app's own category, so the filtered view is never empty; if there is none, link the category.
  let otherPlatform: DirectoryFunnelData['otherPlatform']
  if (app) {
    const primary = app.categories[0]
    const category = primary ? (CATEGORY_SUB_LABEL[primary]?.[lang] ?? CATEGORY_SUB_LABEL[primary]?.en) : undefined
    if (primary && category) {
      const listed = new Set(app.platforms ?? [])
      let best: { platform: OSKey; count: number } | null = null
      for (const platform of OTHER_PLATFORM_ORDER) {
        if (listed.has(platform)) continue
        const count = localAiApps.filter((t) => t.slug !== app.slug && t.categories[0] === primary && t.platforms?.includes(platform)).length
        if (count > 0 && (!best || count > best.count)) best = { platform, count }
      }
      otherPlatform = best
        ? {
            label: funnelT('otherPlatform', lang, { platform: OS_LABEL[best.platform], category }),
            href: directoryHref(lang, { os: best.platform, category: primary }),
          }
        : { label: funnelT('categoryMore', lang, { category }), href: directoryHref(lang, { category: primary }) }
    }
  }

  return {
    dir: getLangDir(lang),
    heading: funnelT('heading', lang),
    entry: app ? { label: funnelT('viewEntry', lang, { app: app.name }), href: directoryEntryHref(app.slug, lang) } : undefined,
    similarLabel: funnelT('similarLabel', lang),
    similar,
    compareAll: { label: funnelT('compareAll', lang, { n }), href: directoryHref(lang) },
    otherPlatform,
    popup: {
      headline: funnelT('popupHeadline', lang),
      body: funnelT('popupBody', lang, { n }),
      cta: funnelT('popupCta', lang),
      close: funnelT('popupClose', lang),
      similar:
        app && similar.length
          ? funnelT('popupSimilar', lang, { app: app.name, tools: similar.map((s) => s.name).join(', ') })
          : undefined,
      href: directoryHref(lang, POPUP_UTM),
    },
  }
}
