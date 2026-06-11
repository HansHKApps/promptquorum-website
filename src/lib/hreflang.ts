/**
 * Generate hreflang alternates for multi-language pages.
 *
 * Canonical rule:
 * - selectedLang === 'en' OR hasTranslation === false → canonical is the bare URL.
 *   (English is the default; pages that fall back to English because no translation
 *   exists must not declare `?lang=XX` as their own canonical — that creates duplicate
 *   English content under multiple URLs.)
 * - hasTranslation === true AND selectedLang !== 'en' → canonical is self-referential
 *   for the language-specific URL, so each language is indexed as a distinct page.
 *
 * pathPrefixLangs: when a language code appears in this array, its alternate URL
 * uses /{lang}{path} path-prefix form instead of {path}?lang={lang}.
 * Example: pathPrefixLangs: ['ja'] → languages.ja = BASE + '/ja' + path
 *
 * Usage:
 *   generateAlternates('/compare', selectedLang, true)
 *   generateAlternates('/compare', selectedLang, true, undefined, ['ja'])
 *   generateAlternates(`/local-llms/${slug}`, selectedLang, hasTranslation, ['de','ja'], ['ja'])
 *   generateAlternates('/', selectedLang, true, undefined, ['ja'])
 *     → languages.ja = BASE + '/ja'  (trailing slash stripped)
 */
import { toOutputLocale } from './i18n/constants'

export function generateAlternates(
  path: string,
  selectedLang: string = 'en',
  hasTranslation: boolean = true,
  availableLangs?: string[],
  pathPrefixLangs?: string[],
) {
  const BASE = 'https://www.promptquorum.com'
  const LANGS = availableLangs && availableLangs.length > 0
    ? (['en', ...availableLangs.filter((l: string) => l !== 'en')] as const)
    : (['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar'] as const)

  // Build the URL for a given lang alternate.
  // If the lang is in pathPrefixLangs, use /{lang}{path} instead of {path}?lang={lang}.
  // Special case: path === '/' → /{lang}  (not /ja/, which would be a trailing-slash variant)
  // Note: Next.js strips query parameters from root URLs in alternates metadata, so
  // for path='/', we return base URLs without query params to avoid Next.js normalization issues.
  function langUrl(lang: string): string {
    if (lang === 'en') return `${BASE}${path}`
    if (pathPrefixLangs && pathPrefixLangs.includes(lang)) {
      // /ja/ special: strip trailing slash from '/' so we get /ja not /ja/
      const suffix = path === '/' ? '' : path
      return `${BASE}/${lang}${suffix}`
    }
    // All non-EN langs use path-prefix form; ?lang= is deprecated.
    const suffix = path === '/' ? '' : path
    return `${BASE}/${lang}${suffix}`
  }

  // Canonical determination:
  // - EN or no translation → bare URL (EN canonical)
  // - JA (or any pathPrefixLang) with translation → /{lang}{path}
  // - Other translated non-EN → {path}?lang={selectedLang}
  let canonical: string
  if (selectedLang === 'en' || !hasTranslation) {
    canonical = `${BASE}${path}`
  } else {
    canonical = langUrl(selectedLang)
  }

  return {
    canonical,
    languages: {
      // hreflang VALUE is the outward-facing locale (pt → pt-BR); the URL path is unchanged.
      ...Object.fromEntries(
        (LANGS as readonly string[]).map(lang => [toOutputLocale(lang), langUrl(lang)])
      ),
      'x-default': `${BASE}${path}`,
    },
  }
}
