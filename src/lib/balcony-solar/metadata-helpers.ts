/**
 * Path-based hreflang/canonical builder for the Balcony Solar cluster.
 *
 * IMPORTANT: This cluster uses path-based locales (/de/balcony-solar/...) — different
 * from the rest of the site, which uses `?lang=XX` query params. Do NOT swap this
 * with `generateAlternates` from `@/lib/hreflang` — that helper emits the wrong URL shape.
 *
 * Returns a Next.js Metadata `alternates` object:
 *   - canonical: self-referential per language
 *   - languages: full set of language URLs + x-default (always EN)
 */

import { ALL_LANGS, toOutputLocale, type Lang } from '@/lib/i18n/constants'

const BASE = 'https://www.promptquorum.com'

function pathFor(lang: Lang, slug?: string): string {
  const suffix = slug ? `/${slug}` : ''
  return lang === 'en'
    ? `/balcony-solar${suffix}`
    : `/${lang}/balcony-solar${suffix}`
}

export function balconySolarAlternates(selectedLang: Lang, slug?: string) {
  const langs: typeof ALL_LANGS = ALL_LANGS
  return {
    canonical: `${BASE}${pathFor(selectedLang, slug)}`,
    languages: {
      ...Object.fromEntries(
        // hreflang VALUE is the outward-facing locale (pt → pt-BR); the /pt path is unchanged.
        langs.map((l) => [toOutputLocale(l), `${BASE}${pathFor(l, slug)}`])
      ),
      'x-default': `${BASE}${pathFor('en', slug)}`,
    },
  }
}

export function balconySolarHubPath(lang: Lang): string {
  return pathFor(lang)
}

export function balconySolarArticlePath(lang: Lang, slug: string): string {
  return pathFor(lang, slug)
}
