import type { Language } from '@/lib/blog/blogContent'
import drawThings from './data/draw-things.json'
import bobe from './data/bobe.json'
import drawThingsDe from './data/draw-things.de.json'
import drawThingsFr from './data/draw-things.fr.json'
import drawThingsJa from './data/draw-things.ja.json'
import drawThingsZh from './data/draw-things.zh.json'
import drawThingsEs from './data/draw-things.es.json'
import drawThingsPt from './data/draw-things.pt.json'
import drawThingsAr from './data/draw-things.ar.json'
import drawThingsKo from './data/draw-things.ko.json'
import bobeDe from './data/bobe.de.json'
import bobeFr from './data/bobe.fr.json'
import bobeJa from './data/bobe.ja.json'
import bobeZh from './data/bobe.zh.json'
import bobeEs from './data/bobe.es.json'
import bobePt from './data/bobe.pt.json'
import bobeAr from './data/bobe.ar.json'
import bobeKo from './data/bobe.ko.json'

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

/** Page chrome (nav, headings, table headers, aria text) in the test's language. {x} tokens are filled by the view. */
export type HandsOnUi = {
  kicker: string
  date_line: string
  nav_aria: string
  nav: Record<'verdict' | 'moments' | 'story' | 'claims' | 'fit' | 'log' | 'errors' | 'findings' | 'background', string>
  related: string
  review_link: string
  directory_link: string
  verdict_h: string
  general_assessment: string
  fit_for_tester: string
  scorecard: string
  status_prefix: string
  na: string
  score_aria: string
  details_h: string
  label_intro: string
  legend_link: string
  disclosure_label: string
  raw_notes: string
  to_be_added: string
  moments_h: string
  see_context: string
  story_h: string
  claims_h: string
  claims_cols: string[]
  fit_h: string
  memory_line: string
  above: string
  below: string
  log_h: string
  log_cols: string[]
  statuses: Record<string, string>
  errors_h: string
  findings_h: string
  filter_aria: string
  filter_all: string
  findings_cols: string[]
  severities: Record<string, string>
  fig_abbr: string
  figure: string
  enlarge: string
  audience_h: string
  likely_fit: string
  likely_poor_fit: string
  retest: string
  background_h: string
  gallery_h: string
  legend_h: string
  sources_h: string
  footer_line: string
  crumb_home: string
  crumb_directory: string
  crumb_test: string
}

export type HandsOnTest = {
  id: string
  standard_version: string
  locale: string
  app: { name: string; slug: string; vendor: string; category: string; platform: string; pricing_url: string }
  title: string
  dek: string
  status: string
  published: string
  started: string
  meta: [string, string, EvidenceKey | null][]
  disclosure: string
  verdict: { general: string; fit: string }
  scores: [string, number | null, string][]
  scores_note: string
  tldr: [EvidenceKey, string][]
  quotes: string[]
  quote_note: string
  /** [title, text, imageId | null, chapterId]; a moment without an image renders as a text card. */
  moments: [string, string, string | null, string][]
  moments_title?: string
  moments_nav?: string
  chapters: { id: string; title: string; items: [EvidenceKey, string, string | null][] }[]
  claims: [string, string, string, EvidenceKey][]
  fit: {
    memory_gb: number
    rows: [string, number, string, EvidenceKey][]
    note: string
    title?: string
    nav?: string
    scale?: number
    memline?: string
    above?: string
    below?: string
  }
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
  ui: HandsOnUi
}

/** Registry keyed by app slug, then language. English is the source of truth; the other eight are translations of it. */
const HANDS_ON_TESTS: Record<string, Partial<Record<Language, HandsOnTest>>> = {
  'draw-things': {
    en: drawThings as unknown as HandsOnTest,
    de: drawThingsDe as unknown as HandsOnTest,
    fr: drawThingsFr as unknown as HandsOnTest,
    ja: drawThingsJa as unknown as HandsOnTest,
    zh: drawThingsZh as unknown as HandsOnTest,
    es: drawThingsEs as unknown as HandsOnTest,
    pt: drawThingsPt as unknown as HandsOnTest,
    ar: drawThingsAr as unknown as HandsOnTest,
    ko: drawThingsKo as unknown as HandsOnTest,
  },
  bobe: {
    en: bobe as unknown as HandsOnTest,
    de: bobeDe as unknown as HandsOnTest,
    fr: bobeFr as unknown as HandsOnTest,
    ja: bobeJa as unknown as HandsOnTest,
    zh: bobeZh as unknown as HandsOnTest,
    es: bobeEs as unknown as HandsOnTest,
    pt: bobePt as unknown as HandsOnTest,
    ar: bobeAr as unknown as HandsOnTest,
    ko: bobeKo as unknown as HandsOnTest,
  },
}

/** The test in `lang`, or null when that language has no translation (callers must 404, never fall back to English). */
export function getHandsOnTest(appSlug: string, lang: Language = 'en'): HandsOnTest | null {
  return HANDS_ON_TESTS[appSlug]?.[lang] ?? null
}

export { handsOnTestUrl, handsOnTestUrlSlug, handsOnTestLangs, HANDS_ON_TEST_LANGS, appSlugFromHandsOnUrlSlug, HANDS_ON_TEST_SLUGS } from './links'
