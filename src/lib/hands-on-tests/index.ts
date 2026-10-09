import drawThings from './data/draw-things.json'

export type EvidenceKey =
  | 'observed'
  | 'measured'
  | 'tester-estimate'
  | 'vendor-claim'
  | 'third-party'
  | 'assumption'
  | 'tester-view'
  | 'tester-error'

export type HandsOnImage = {
  id: string
  figure: number
  file: string
  path: string
  alt: string
  caption: string
  role: string
  width: number
  height: number
  loading: 'lazy' | 'eager'
}

export type HandsOnTest = {
  id: string
  locale: string
  app: { name: string; slug: string; vendor: string; category: string; platform: string; pricing_url: string }
  title: string
  dek: string
  status: string
  started: string
  meta: [string, string, EvidenceKey | null][]
  disclosure: string
  verdict: { general: string; fit: string }
  scores: [string, number | null, string][]
  scores_note: string
  tldr: [EvidenceKey, string][]
  quotes: string[]
  quote_note: string
  moments: [string, string, string, string][]
  chapters: { id: string; title: string; items: [EvidenceKey, string, string | null][] }[]
  claims: [string, string, string, EvidenceKey][]
  fit: { memory_gb: number; rows: [string, number, string, EvidenceKey][]; note: string }
  usage_log: [string, string, string, string, string, string[]][]
  errors: [EvidenceKey, string][]
  findings: [string, string, string, EvidenceKey, string, string[]][]
  severity_note: string
  audience: { fits: [EvidenceKey, string][]; not_fits: [EvidenceKey, string][]; retest: string }
  background_intro: string
  background: [EvidenceKey, string][]
  sources: string[]
  evidence_labels: Record<EvidenceKey, { label: string; meaning: string }>
  images: HandsOnImage[]
  figure_order: string[]
}

/** Registry keyed by app slug (matches ToolRecord.slug). */
const HANDS_ON_TESTS: Record<string, HandsOnTest> = {
  'draw-things': drawThings as unknown as HandsOnTest,
}

export function getHandsOnTest(appSlug: string): HandsOnTest | null {
  return HANDS_ON_TESTS[appSlug] ?? null
}

export { handsOnTestUrl, HANDS_ON_TEST_SLUGS } from './links'
