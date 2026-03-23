/**
 * Generate hreflang alternates for multi-language pages
 * Usage: const alternates = generateAlternates('/prompt-engineering/system-prompt-vs-user-prompt')
 */
export function generateAlternates(path: string) {
  const BASE = 'https://www.promptquorum.com'
  const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const

  return {
    canonical: `${BASE}${path}`,
    languages: Object.fromEntries(
      LANGS.map(lang => [
        lang,
        lang === 'en' ? `${BASE}${path}` : `${BASE}${path}?lang=${lang}`,
      ])
    ),
    'x-default': `${BASE}${path}`,
  }
}
