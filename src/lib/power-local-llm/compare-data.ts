import { localAiApps } from '@/lib/power-local-llm/apps-barrel'
import { CATEGORY_GROUP_LABEL, type CategoryGroupKey } from './apps/categories'
import { COMMON_COLUMNS, COMPARE_SEGMENTS, CATEGORY_COMPARE_ARTICLE, type CompareSegment } from './apps/compare-schema'
import { normalizeLicenseLabel } from './license-taxonomy'
import { POWER_LLM_PUBLISHED_SLUGS } from './published'
import type { CompareValue, ToolRecord } from './apps/types'
import type { Language } from '@/lib/blog/blogContent'
import featureReviewIndex from '@/generated/feature-review-index.json'
import { compareStrings, fmt, groupLabel, type CompareStrings, type CompareUiKey } from './compare-i18n'

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

/** Localized chrome the table components need (buttons, headers, notes). */
export interface CompareTableUi {
  tool: string
  review: string
  readReview: string
  expandTable: string
  copyTable: string
  copied: string
  copyFailed: string
  close: string
  notStatedNote: string
  chooseTools: string
  readFullReviews: string
  selectAtLeastTwo: string
  readFullComparison: string
}

export interface CategoryCompareData {
  group: CategoryGroupKey
  ui: CompareTableUi
  label: string
  /** Slug of the category's full comparison article, or null when there is none yet. */
  articleSlug: string | null
  segments: CompareSegmentData[]
}

// Tool slug -> its dedicated review's PUBLIC url slug (build-time index; the tool's `reviewSlug` is the
// article file key, which can differ from the URL slug, e.g. animatediff).
const REVIEW_URL_SLUG = featureReviewIndex as Record<string, { urlSlug: string }>
const reviewUrlSlug = (t: ToolRecord): string | null => REVIEW_URL_SLUG[t.slug]?.urlSlug ?? null

const OS_LABEL: Record<string, string> = { mac: 'macOS', win: 'Windows', linux: 'Linux', ios: 'iOS', android: 'Android', web: 'Web' }

const COLUMN_KEY: Record<string, CompareUiKey> = {
  price: 'colPrice',
  license: 'colLicense',
  platforms: 'colPlatforms',
  locality: 'colRuns',
  hardware: 'colHardware',
  version: 'colVersion',
  languages: 'colLanguages',
  voiceCloning: 'colVoiceCloning',
  streaming: 'colStreaming',
  cpuUsable: 'colCpuUsable',
  apiServer: 'colApiServer',
  realtime: 'colRealtime',
  speakerLabels: 'colSpeakerLabels',
  fullyLocal: 'colFullyLocal',
  bargeIn: 'colBargeIn',
  customLlm: 'colCustomLlm',
  telephony: 'colTelephony',
  inpainting: 'colInpainting',
  videoGeneration: 'colVideoGeneration',
  nodeWorkflow: 'colNodeWorkflow',
  extensions: 'colExtensions',
  lowVram: 'colLowVram',
  ocr: 'colOcr',
  multiImage: 'colMultiImage',
}
const SEGMENT_KEY: Record<string, CompareUiKey> = {
  'text-to-speech': 'segTts',
  'speech-to-text': 'segStt',
  'voice-agents': 'segAgents',
  'image-video-generation': 'segImageVideo',
  'vision-ocr': 'segVision',
}
const PRICE_KEY: Record<string, CompareUiKey> = { free: 'priceFree', freemium: 'priceFreemium', paid: 'pricePaid' }
const LOCALITY_KEY: Record<string, CompareUiKey> = { local: 'localityLocal', hybrid: 'localityHybrid', cloud: 'localityCloud' }

function hardwareCell(t: ToolRecord, cs: CompareStrings): string {
  const h = t.hardware
  if (!h) return cs.notStated
  if (h.variesByModel) return cs.hardwareVaries
  if (h.cpuOnly) return cs.hardwareCpu
  if (h.vramGb) return fmt(cs.hardwareVram, { n: h.vramGb })
  if (h.ramGb) return fmt(cs.hardwareRam, { n: h.ramGb })
  return cs.notStated
}

function valueCell(v: CompareValue | undefined, cs: CompareStrings): string {
  if (v === undefined) return cs.notStated
  if (typeof v === 'boolean') return v ? cs.yes : cs.no
  if (Array.isArray(v)) return v.join(', ')
  return String(v)
}

function commonCell(t: ToolRecord, key: string, cs: CompareStrings): string {
  switch (key) {
    case 'price':
      return PRICE_KEY[t.price] ? cs[PRICE_KEY[t.price]] : cs.notStated
    case 'license':
      return t.license && t.license !== 'TODO' ? normalizeLicenseLabel(t.license) : cs.notStated
    case 'platforms':
      return t.platforms && t.platforms.length > 0 ? t.platforms.map((p) => OS_LABEL[p] ?? p).join(', ') : cs.notStated
    case 'locality':
      return LOCALITY_KEY[t.locality] ? cs[LOCALITY_KEY[t.locality]] : cs.notStated
    case 'hardware':
      return hardwareCell(t, cs)
    case 'version':
      return t.pqReview?.version ?? cs.notStated
    default:
      return cs.notStated
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

export function buildCategoryCompareData(group: CategoryGroupKey, lang: Language | string = 'en'): CategoryCompareData {
  const cs = compareStrings(lang)
  const segments: CompareSegmentData[] = COMPARE_SEGMENTS[group].map((seg) => {
    const columns: CompareColumn[] = [
      ...COMMON_COLUMNS.map((c) => ({ key: c.key, label: COLUMN_KEY[c.key] ? cs[COLUMN_KEY[c.key]] : c.label })),
      ...seg.attributes.map((a) => ({ key: a.key, label: COLUMN_KEY[a.key] ? cs[COLUMN_KEY[a.key]] : a.label })),
    ]
    const rows: CompareRow[] = localAiApps
      .filter((t) => inSegment(t, seg) && reviewUrlSlug(t))
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((t) => {
        const cells: Record<string, string> = {}
        for (const c of COMMON_COLUMNS) cells[c.key] = commonCell(t, c.key, cs)
        for (const a of seg.attributes) cells[a.key] = valueCell(t.compare?.[a.key], cs)
        return { slug: t.slug, name: t.name, url: t.url, reviewSlug: reviewUrlSlug(t), cells }
      })
    return { key: seg.key, label: SEGMENT_KEY[seg.key] ? cs[SEGMENT_KEY[seg.key]] : seg.label, columns, rows }
  })
  return {
    group,
    ui: {
      tool: cs.tool,
      review: cs.review,
      readReview: cs.readReview,
      expandTable: cs.expandTable,
      copyTable: cs.copyTable,
      copied: cs.copied,
      copyFailed: cs.copyFailed,
      close: cs.close,
      notStatedNote: cs.notStatedNote,
      chooseTools: cs.chooseTools,
      readFullReviews: cs.readFullReviews,
      selectAtLeastTwo: cs.selectAtLeastTwo,
      readFullComparison: cs.readFullComparison,
    },
    label: groupLabel(group, lang),
    articleSlug: publishedGuideSlug(group),
    segments,
  }
}

/** Groups that have at least one comparison segment defined (the homepage tool only offers these). */
export function getComparableGroups(lang: Language | string = 'en'): CategoryCompareData[] {
  return (Object.keys(COMPARE_SEGMENTS) as CategoryGroupKey[])
    .filter((g) => COMPARE_SEGMENTS[g].length > 0)
    .map((g) => buildCategoryCompareData(g, lang))
}

/**
 * For a tool's review page: the category guide it appears in plus up to four sibling tools from the
 * same segment that have their own review (the FeatureAppPost "Competitors" cap of 4).
 */
export function getCategoryLinksForReview(
  reviewSlug: string,
  lang: Language | string = 'en',
): {
  guideLabel: string
  guideSlug: string | null
  siblings: { name: string; reviewSlug: string }[]
  ui: { blockTitle: string; blockComparedIn: string; blockCategory: string; blockAlsoReviewed: string }
} | null {
  const cs = compareStrings(lang)
  const tool = localAiApps.find((t) => reviewUrlSlug(t) === reviewSlug)
  if (!tool) return null
  for (const group of Object.keys(COMPARE_SEGMENTS) as CategoryGroupKey[]) {
    const seg = COMPARE_SEGMENTS[group].find((s) => inSegment(tool, s))
    if (!seg) continue
    const siblings = localAiApps
      .filter((t) => t.slug !== tool.slug && reviewUrlSlug(t) && inSegment(t, seg))
      .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
      .slice(0, 4)
      .map((t) => ({ name: t.name, reviewSlug: reviewUrlSlug(t)! }))
    const gLabel = groupLabel(group, lang)
    const segLabel = SEGMENT_KEY[seg.key] ? cs[SEGMENT_KEY[seg.key]] : seg.label
    return {
      guideLabel: `${gLabel} — ${segLabel}`,
      guideSlug: publishedGuideSlug(group),
      siblings,
      ui: { blockTitle: cs.blockTitle, blockComparedIn: cs.blockComparedIn, blockCategory: cs.blockCategory, blockAlsoReviewed: cs.blockAlsoReviewed },
    }
  }
  return null
}
