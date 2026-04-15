/**
 * Generate hreflang alternates for multi-language pages.
 * Pass selectedLang so non-English pages get a self-referential canonical.
 * Usage: generateAlternates('/compare', selectedLang)
 */
export function generateAlternates(path: string, selectedLang: string = 'en') {
  const BASE = 'https://www.promptquorum.com'
  const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const
  const canonical = selectedLang === 'en' ? `${BASE}${path}` : `${BASE}${path}?lang=${selectedLang}`

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
