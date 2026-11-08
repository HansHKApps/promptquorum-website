import type { BannerLocale, Market } from './types'

/**
 * Locale -> market, from GSC country data (28 days to 2026-11-06). The page language decides, never the visitor's country.
 * zh and ar are OPEN (brief D2): zh traffic is only ~half mainland China, ar is too small to measure. Both use 'global'
 * (hardware brand sites and cloud GPUs, no country store) until Hans decides.
 */
export const LOCALE_MARKET: Record<BannerLocale, Market> = {
  en: 'us',
  de: 'de',
  fr: 'fr',
  ja: 'jp',
  ko: 'kr',
  es: 'es',
  pt: 'br',
  zh: 'global',
  ar: 'global',
}
