/**
 * Generate hreflang alternates for multi-language pages.
 *
 * Canonical rule:
 * - selectedLang === 'en' OR hasTranslation === false → canonical is the bare URL.
 *   (English is the default; pages that fall back to English because no translation
 *   exists must not declare `?lang=XX` as their own canonical — that creates duplicate
 *   English content under multiple URLs.)
 * - hasTranslation === true AND selectedLang !== 'en' → canonical is `?lang=XX`
 *   self-referential, so each language is indexed as a distinct page.
 *
 * Usage:
 *   generateAlternates('/compare', selectedLang, true)                    // fully translated
 *   generateAlternates(`/local-llms/${slug}`, selectedLang, hasTranslation) // dynamic
 */
export function generateAlternates(
  path: string,
  selectedLang: string = 'en',
  hasTranslation: boolean = true,
) {
  const BASE = 'https://www.promptquorum.com'
  const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const
  const canonical =
    selectedLang === 'en' || !hasTranslation
      ? `${BASE}${path}`
      : `${BASE}${path}?lang=${selectedLang}`

  return {
    canonical,
    languages: {
      ...Object.fromEntries(
        LANGS.map(lang => [
          lang,
          lang === 'en' ? `${BASE}${path}` : `${BASE}${path}?lang=${lang}`,
        ])
      ),
      'x-default': `${BASE}${path}`,
    },
  }
}
