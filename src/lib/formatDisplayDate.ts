import type { Language } from '@/lib/blog/blogContent'

const LOCALE_MAP: Record<Language, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  ja: 'ja-JP',
  zh: 'zh-CN',
  es: 'es-ES',
  pt: 'pt-BR',
  ar: 'ar-SA',
  ko: 'ko-KR',
}

/**
 * Formats an ISO date string ("2026-05-07") for user-facing display,
 * spelling out the month so it reads unambiguously across locales
 * (unlike numeric MM/DD vs DD/MM formats). Never use for JSON-LD/OG
 * dates — those must stay raw ISO 8601 strings.
 */
export function formatDisplayDate(isoDate: string | undefined, lang: Language): string {
  if (!isoDate) return ''
  const dateObj = new Date(isoDate)
  if (isNaN(dateObj.getTime())) return ''
  return dateObj.toLocaleDateString(LOCALE_MAP[lang] ?? LOCALE_MAP.en, { month: 'long', day: 'numeric', year: 'numeric' })
}

/**
 * Same locale handling as formatDisplayDate, but month/year only —
 * for surfaces (like cluster hubs) that show a coarser "last updated" granularity.
 */
export function formatDisplayMonthYear(isoDate: string | undefined, lang: Language): string {
  if (!isoDate) return ''
  const dateObj = new Date(isoDate)
  if (isNaN(dateObj.getTime())) return ''
  return dateObj.toLocaleDateString(LOCALE_MAP[lang] ?? LOCALE_MAP.en, { month: 'long', year: 'numeric' })
}
