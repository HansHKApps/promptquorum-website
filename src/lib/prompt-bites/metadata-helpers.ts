/**
 * Path-based hreflang/canonical builder for the Prompt Bites cluster.
 * Mirrors powerLLMAlternates — uses path-prefix locales (/de/prompt-bites/...).
 */

import { ALL_LANGS, toOutputLocale, type Lang } from '@/lib/i18n/constants'

const BASE = 'https://www.promptquorum.com'

function pathFor(lang: Lang, slug?: string): string {
  const suffix = slug ? `/${slug}` : ''
  return lang === 'en'
    ? `/prompt-bites${suffix}`
    : `/${lang}/prompt-bites${suffix}`
}

export function promptBitesAlternates(selectedLang: Lang, slug?: string) {
  return {
    canonical: `${BASE}${pathFor(selectedLang, slug)}`,
    languages: {
      // hreflang VALUE is the outward-facing locale (pt → pt-BR); the /pt path is unchanged.
      ...Object.fromEntries(ALL_LANGS.map((l) => [toOutputLocale(l), `${BASE}${pathFor(l, slug)}`])),
      'x-default': `${BASE}${pathFor('en', slug)}`,
    },
  }
}

export function promptBitesHubPath(lang: Lang): string {
  return pathFor(lang)
}

export function promptBitesArticlePath(lang: Lang, slug: string): string {
  return pathFor(lang, slug)
}
