/**
 * Path-based hreflang/canonical builder for the Power Local LLM cluster.
 *
 * IMPORTANT: This cluster uses path-based locales (/de/power-local-llm/...) — different
 * from the rest of the site, which uses `?lang=XX` query params. Do NOT swap this
 * with `generateAlternates` from `@/lib/hreflang` — that helper emits the wrong URL shape.
 *
 * Returns a Next.js Metadata `alternates` object:
 *   - canonical: self-referential per language
 *   - languages: full set of 5 language URLs + x-default (always EN)
 */

const BASE = 'https://www.promptquorum.com'

type Lang = 'en' | 'de' | 'fr' | 'ja' | 'zh'

function pathFor(lang: Lang, slug?: string): string {
  const suffix = slug ? `/${slug}` : ''
  return lang === 'en'
    ? `/power-local-llm${suffix}`
    : `/${lang}/power-local-llm${suffix}`
}

export function powerLLMAlternates(selectedLang: Lang, slug?: string) {
  const langs: Lang[] = ['en', 'de', 'fr', 'ja', 'zh']
  return {
    canonical: `${BASE}${pathFor(selectedLang, slug)}`,
    languages: {
      ...Object.fromEntries(
        langs.map((l) => [l, `${BASE}${pathFor(l, slug)}`])
      ),
      'x-default': `${BASE}${pathFor('en', slug)}`,
    },
  }
}

export function powerLLMHubPath(lang: Lang): string {
  return pathFor(lang)
}

export function powerLLMArticlePath(lang: Lang, slug: string): string {
  return pathFor(lang, slug)
}
