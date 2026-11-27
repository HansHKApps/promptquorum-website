// Page view reality check ("ad display test"): our own ads on the uncensored pages, counted by OUR OWN counter (not
// Umami), so that real ad displays can be compared with Google Search Console and with Umami page views.
// No ad network, no third party, no cookies, no storage in the browser, no visitor ID.
// Separate from the promo pilot: own pages, own counter, own `adtest_` open source / ?via=.
// Method, counts and report: docs/ad-display-test.md. Check: npm run test:ad-display
import type { PromoTarget } from '@/lib/promo/types'

/** English paths; the same entry covers /de/..., /fr/..., ... (all 9 locales). */
export const AD_TEST_PAGES: readonly string[] = [
  '/power-local-llm/uncensored-local-llm-creative-writing-ethics',
  '/power-local-llm/uncensored-llm-models',
]

export type AdTestPosition = 'P1' | 'P2' | 'P3'
export const AD_TEST_POSITIONS: readonly AdTestPosition[] = ['P1', 'P2', 'P3']
export const AD_TEST_CREATIVES: readonly PromoTarget[] = ['ask-hans', 'directory', 'academy']

/** Creative at a position for rotation 0..2 (Latin square: every creative once per view, each position equally often). */
export function adTestCreative(position: AdTestPosition, rotation: number): PromoTarget {
  return AD_TEST_CREATIVES[(AD_TEST_POSITIONS.indexOf(position) + rotation) % AD_TEST_CREATIVES.length]
}

const LOCALE_PREFIX = /^\/(?:de|fr|ja|zh|es|pt|ar|ko)(?=\/|$)/

export function isAdTestPage(pathname: string): boolean {
  return AD_TEST_PAGES.includes(pathname.replace(LOCALE_PREFIX, '').replace(/\/$/, ''))
}

/** Visible label on every test ad. */
export const AD_TEST_LABEL: Record<string, string> = {
  en: 'Test ad · PromptQuorum’s own offer',
  de: 'Testanzeige · Eigenes Angebot von PromptQuorum',
  fr: 'Annonce test · Offre de PromptQuorum',
  es: 'Anuncio de prueba · Oferta propia de PromptQuorum',
  pt: 'Anúncio de teste · Oferta própria do PromptQuorum',
  ja: 'テスト広告 · PromptQuorumの自社サービス',
  zh: '测试广告 · PromptQuorum 自有服务',
  ko: '테스트 광고 · PromptQuorum 자체 서비스',
  ar: 'إعلان تجريبي · عرض خاص بـ PromptQuorum',
}
