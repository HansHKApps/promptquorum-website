import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_GROUP_LABEL, type CategoryGroupKey } from './apps/categories'
import { COMMON_COLUMNS, COMPARE_SEGMENTS, CATEGORY_COMPARE_ARTICLE, type CompareSegment } from './apps/compare-schema'
import { normalizeLicenseLabel } from './license-taxonomy'
import { POWER_LLM_PUBLISHED_SLUGS } from './published'
import type { CompareValue, ToolRecord } from './apps/types'

// Serializable comparison data for one category group. Built on the server from the tool records
// (the single source of truth) and handed to client components as props, so the client bundle never
// imports the ~220 tool files.

export interface CompareColumn {
  key: string
  label: string
}

export interface CompareRow {
  slug: string
  name: string
  /** Bare domain from the tool record, no scheme. */
  url: string | null
  /** Slug of the tool's own review article, when it has one. */
  reviewSlug: string | null
  cells: Record<string, string>
}

export interface CompareSegmentData {
  key: string
  label: string
  columns: CompareColumn[]
  rows: CompareRow[]
}

export interface CategoryCompareData {
  group: CategoryGroupKey
  label: string
  /** Slug of the category's full comparison article, or null when there is none yet. */
  articleSlug: string | null
  segments: CompareSegmentData[]
}

const NOT_STATED = '—'

const PRICE_LABEL: Record<string, string> = { free: 'Free', freemium: 'Freemium', paid: 'Paid' }
const LOCALITY_LABEL: Record<string, string> = { local: 'Local', hybrid: 'Hybrid', cloud: 'Cloud' }
const OS_LABEL: Record<string, string> = { mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web' }

function hardwareCell(t: ToolRecord): string {
  const h = t.hardware
  if (!h) return NOT_STATED
  if (h.variesByModel) return 'Varies by model'
  if (h.cpuOnly) return 'CPU is enough'
  if (h.vramGb) return `${h.vramGb} GB VRAM`
  if (h.ramGb) return `${h.ramGb} GB RAM`
  return NOT_STATED
}

function valueCell(v: CompareValue | undefined): string {
  if (v === undefined) return NOT_STATED
  if (typeof v === 'boolean') return v ? 'Yes' : 'No'
  if (Array.isArray(v)) return v.join(', ')
  return String(v)
}

function commonCell(t: ToolRecord, key: string): string {
  switch (key) {
    case 'price':
      return PRICE_LABEL[t.price] ?? NOT_STATED
    case 'license':
      return t.license && t.license !== 'TODO' ? normalizeLicenseLabel(t.license) : NOT_STATED
    case 'platforms':
      return t.platforms && t.platforms.length > 0 ? t.platforms.map((p) => OS_LABEL[p] ?? p).join(', ') : NOT_STATED
    case 'locality':
      return LOCALITY_LABEL[t.locality] ?? NOT_STATED
    case 'hardware':
      return hardwareCell(t)
    case 'version':
      return t.pqReview?.version ?? NOT_STATED
    default:
      return NOT_STATED
  }
}

function inSegment(t: ToolRecord, seg: CompareSegment): boolean {
  return t.categories.some((c) => seg.subs.includes(c))
}

/** A guide is only linked once it is publicly indexable, so nothing points at a draft. */
function publishedGuideSlug(group: CategoryGroupKey): string | null {
  const slug = CATEGORY_COMPARE_ARTICLE[group]
  return slug && POWER_LLM_PUBLISHED_SLUGS.has(slug) ? slug : null
}

export function buildCategoryCompareData(group: CategoryGroupKey): CategoryCompareData {
  const segments: CompareSegmentData[] = COMPARE_SEGMENTS[group].map((seg) => {
    const columns: CompareColumn[] = [
      ...COMMON_COLUMNS.map((c) => ({ key: c.key, label: c.label })),
      ...seg.attributes.map((a) => ({ key: a.key, label: a.label })),
    ]
    const rows: CompareRow[] = localAiApps
      .filter((t) => inSegment(t, seg))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((t) => {
        const cells: Record<string, string> = {}
        for (const c of COMMON_COLUMNS) cells[c.key] = commonCell(t, c.key)
        for (const a of seg.attributes) cells[a.key] = valueCell(t.compare?.[a.key])
        return { slug: t.slug, name: t.name, url: t.url, reviewSlug: t.reviewSlug ?? null, cells }
      })
    return { key: seg.key, label: seg.label, columns, rows }
  })
  return { group, label: CATEGORY_GROUP_LABEL[group], articleSlug: publishedGuideSlug(group), segments }
}

/** Groups that have at least one comparison segment defined (the homepage tool only offers these). */
export function getComparableGroups(): CategoryCompareData[] {
  return (Object.keys(COMPARE_SEGMENTS) as CategoryGroupKey[])
    .filter((g) => COMPARE_SEGMENTS[g].length > 0)
    .map(buildCategoryCompareData)
}

/**
 * For a tool's review page: the category guide it appears in plus up to four sibling tools from the
 * same segment that have their own review (the FeatureAppPost "Competitors" cap of 4).
 */
export function getCategoryLinksForReview(reviewSlug: string): {
  guideLabel: string
  guideSlug: string | null
  siblings: { name: string; reviewSlug: string }[]
} | null {
  const tool = localAiApps.find((t) => t.reviewSlug === reviewSlug)
  if (!tool) return null
  for (const group of Object.keys(COMPARE_SEGMENTS) as CategoryGroupKey[]) {
    const seg = COMPARE_SEGMENTS[group].find((s) => inSegment(tool, s))
    if (!seg) continue
    const siblings = localAiApps
      .filter((t) => t.slug !== tool.slug && t.reviewSlug && inSegment(t, seg))
      .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
      .slice(0, 4)
      .map((t) => ({ name: t.name, reviewSlug: t.reviewSlug! }))
    return { guideLabel: `${CATEGORY_GROUP_LABEL[group]} — ${seg.label}`, guideSlug: publishedGuideSlug(group), siblings }
  }
  return null
}
