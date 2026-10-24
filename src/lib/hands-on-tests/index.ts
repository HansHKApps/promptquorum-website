import type { Language } from '@/lib/blog/blogContent'
import drawThings from './data/draw-things.json'
import bobe from './data/bobe.json'
import pageAssist from './data/page-assist.json'
import diffusionbee from './data/diffusionbee.json'
import diffusionbeeDe from './data/diffusionbee.de.json'
import diffusionbeeFr from './data/diffusionbee.fr.json'
import diffusionbeeJa from './data/diffusionbee.ja.json'
import diffusionbeeZh from './data/diffusionbee.zh.json'
import diffusionbeeEs from './data/diffusionbee.es.json'
import diffusionbeePt from './data/diffusionbee.pt.json'
import diffusionbeeAr from './data/diffusionbee.ar.json'
import diffusionbeeKo from './data/diffusionbee.ko.json'
import pageAssistDe from './data/page-assist.de.json'
import pageAssistFr from './data/page-assist.fr.json'
import pageAssistJa from './data/page-assist.ja.json'
import pageAssistZh from './data/page-assist.zh.json'
import pageAssistEs from './data/page-assist.es.json'
import pageAssistPt from './data/page-assist.pt.json'
import pageAssistAr from './data/page-assist.ar.json'
import pageAssistKo from './data/page-assist.ko.json'
import msty from './data/msty.json'
import mstyDe from './data/msty.de.json'
import mstyFr from './data/msty.fr.json'
import mstyJa from './data/msty.ja.json'
import mstyZh from './data/msty.zh.json'
import mstyEs from './data/msty.es.json'
import mstyPt from './data/msty.pt.json'
import mstyAr from './data/msty.ar.json'
import mstyKo from './data/msty.ko.json'
import unsloth from './data/unsloth.json'
import unslothDe from './data/unsloth.de.json'
import unslothFr from './data/unsloth.fr.json'
import unslothJa from './data/unsloth.ja.json'
import unslothZh from './data/unsloth.zh.json'
import unslothEs from './data/unsloth.es.json'
import unslothPt from './data/unsloth.pt.json'
import unslothAr from './data/unsloth.ar.json'
import unslothKo from './data/unsloth.ko.json'
import ltxDesktop from './data/ltx-desktop.json'
import locallyUncensored from './data/locally-uncensored.json'
import locallyUncensoredDe from './data/locally-uncensored.de.json'
import locallyUncensoredFr from './data/locally-uncensored.fr.json'
import locallyUncensoredJa from './data/locally-uncensored.ja.json'
import locallyUncensoredZh from './data/locally-uncensored.zh.json'
import locallyUncensoredEs from './data/locally-uncensored.es.json'
import locallyUncensoredPt from './data/locally-uncensored.pt.json'
import locallyUncensoredAr from './data/locally-uncensored.ar.json'
import locallyUncensoredKo from './data/locally-uncensored.ko.json'
import caelum from './data/caelum.json'
import caelumDe from './data/caelum.de.json'
import caelumFr from './data/caelum.fr.json'
import caelumJa from './data/caelum.ja.json'
import caelumZh from './data/caelum.zh.json'
import caelumEs from './data/caelum.es.json'
import caelumPt from './data/caelum.pt.json'
import caelumAr from './data/caelum.ar.json'
import caelumKo from './data/caelum.ko.json'
import ltxDesktopDe from './data/ltx-desktop.de.json'
import ltxDesktopFr from './data/ltx-desktop.fr.json'
import ltxDesktopJa from './data/ltx-desktop.ja.json'
import ltxDesktopZh from './data/ltx-desktop.zh.json'
import ltxDesktopEs from './data/ltx-desktop.es.json'
import ltxDesktopPt from './data/ltx-desktop.pt.json'
import ltxDesktopAr from './data/ltx-desktop.ar.json'
import ltxDesktopKo from './data/ltx-desktop.ko.json'
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
  faq_h: string
  more_tests_h: string
}

export type HandsOnTest = {
  id: string
  standard_version: string
  locale: string
  app: { name: string; slug: string; vendor: string; category: string; platform: string; pricing_url: string }
  title: string
  dek: string
  /** What search engines and social cards show: short, includes the word "test", no longer than the limits in validate-hands-on-tests.mjs. The H1 stays `title`. */
  seo: { title: string; description: string }
  /** Questions people search for, answered only from facts already in the report (each answer carries its evidence label). */
  faq: [string, string, EvidenceKey][]
  status: string
  published: string
  /** ISO date of the last reader-visible change; omit until the test is actually revised (falls back to `published`). */
  modified?: string
  /** Set true only when the tester has confirmed the scorecard; gates Review/reviewRating JSON-LD. */
  scores_confirmed?: boolean
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
  /** Optional memory-fit chart; tests without one omit it (no section, no nav entry). */
  fit?: {
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
  diffusionbee: {
    en: diffusionbee as unknown as HandsOnTest,
    de: diffusionbeeDe as unknown as HandsOnTest,
    fr: diffusionbeeFr as unknown as HandsOnTest,
    ja: diffusionbeeJa as unknown as HandsOnTest,
    zh: diffusionbeeZh as unknown as HandsOnTest,
    es: diffusionbeeEs as unknown as HandsOnTest,
    pt: diffusionbeePt as unknown as HandsOnTest,
    ar: diffusionbeeAr as unknown as HandsOnTest,
    ko: diffusionbeeKo as unknown as HandsOnTest,
  },
  'page-assist': {
    en: pageAssist as unknown as HandsOnTest,
    de: pageAssistDe as unknown as HandsOnTest,
    fr: pageAssistFr as unknown as HandsOnTest,
    ja: pageAssistJa as unknown as HandsOnTest,
    zh: pageAssistZh as unknown as HandsOnTest,
    es: pageAssistEs as unknown as HandsOnTest,
    pt: pageAssistPt as unknown as HandsOnTest,
    ar: pageAssistAr as unknown as HandsOnTest,
    ko: pageAssistKo as unknown as HandsOnTest,
  },
  msty: {
    en: msty as unknown as HandsOnTest,
    de: mstyDe as unknown as HandsOnTest,
    fr: mstyFr as unknown as HandsOnTest,
    ja: mstyJa as unknown as HandsOnTest,
    zh: mstyZh as unknown as HandsOnTest,
    es: mstyEs as unknown as HandsOnTest,
    pt: mstyPt as unknown as HandsOnTest,
    ar: mstyAr as unknown as HandsOnTest,
    ko: mstyKo as unknown as HandsOnTest,
  },
  'ltx-desktop': {
    en: ltxDesktop as unknown as HandsOnTest,
    de: ltxDesktopDe as unknown as HandsOnTest,
    fr: ltxDesktopFr as unknown as HandsOnTest,
    ja: ltxDesktopJa as unknown as HandsOnTest,
    zh: ltxDesktopZh as unknown as HandsOnTest,
    es: ltxDesktopEs as unknown as HandsOnTest,
    pt: ltxDesktopPt as unknown as HandsOnTest,
    ar: ltxDesktopAr as unknown as HandsOnTest,
    ko: ltxDesktopKo as unknown as HandsOnTest,
  },
  'locally-uncensored': {
    en: locallyUncensored as unknown as HandsOnTest,
    de: locallyUncensoredDe as unknown as HandsOnTest,
    fr: locallyUncensoredFr as unknown as HandsOnTest,
    ja: locallyUncensoredJa as unknown as HandsOnTest,
    zh: locallyUncensoredZh as unknown as HandsOnTest,
    es: locallyUncensoredEs as unknown as HandsOnTest,
    pt: locallyUncensoredPt as unknown as HandsOnTest,
    ar: locallyUncensoredAr as unknown as HandsOnTest,
    ko: locallyUncensoredKo as unknown as HandsOnTest,
  },
  caelum: {
    en: caelum as unknown as HandsOnTest,
    de: caelumDe as unknown as HandsOnTest,
    fr: caelumFr as unknown as HandsOnTest,
    ja: caelumJa as unknown as HandsOnTest,
    zh: caelumZh as unknown as HandsOnTest,
    es: caelumEs as unknown as HandsOnTest,
    pt: caelumPt as unknown as HandsOnTest,
    ar: caelumAr as unknown as HandsOnTest,
    ko: caelumKo as unknown as HandsOnTest,
  },
  unsloth: {
    en: unsloth as unknown as HandsOnTest,
    de: unslothDe as unknown as HandsOnTest,
    fr: unslothFr as unknown as HandsOnTest,
    ja: unslothJa as unknown as HandsOnTest,
    zh: unslothZh as unknown as HandsOnTest,
    es: unslothEs as unknown as HandsOnTest,
    pt: unslothPt as unknown as HandsOnTest,
    ar: unslothAr as unknown as HandsOnTest,
    ko: unslothKo as unknown as HandsOnTest,
  },
}

/** The test in `lang`, or null when that language has no translation (callers must 404, never fall back to English). */
export function getHandsOnTest(appSlug: string, lang: Language = 'en'): HandsOnTest | null {
  return HANDS_ON_TESTS[appSlug]?.[lang] ?? null
}

export { handsOnTestUrl, handsOnTestUrlSlug, handsOnTestLangs, HANDS_ON_TEST_LANGS, appSlugFromHandsOnUrlSlug, HANDS_ON_TEST_SLUGS } from './links'
