/**
 * Path-based hreflang/canonical builder for the Edge AI cluster.
 * Mirrors src/lib/power-local-llm/metadata-helpers.ts.
 */

import { ALL_LANGS, toOutputLocale, type Lang } from '@/lib/i18n/constants'

const BASE = 'https://www.promptquorum.com'

function pathFor(lang: Lang, slug?: string): string {
  const suffix = slug ? `/${slug}` : ''
  return lang === 'en'
    ? `/edge-ai${suffix}`
    : `/${lang}/edge-ai${suffix}`
}

export function edgeAiAlternates(selectedLang: Lang, slug?: string) {
  const langs: typeof ALL_LANGS = ALL_LANGS
  return {
    canonical: `${BASE}${pathFor(selectedLang, slug)}`,
    languages: {
      ...Object.fromEntries(
        langs.map((l) => [toOutputLocale(l), `${BASE}${pathFor(l, slug)}`])
      ),
      'x-default': `${BASE}${pathFor('en', slug)}`,
    },
  }
}

export function edgeAiHubPath(lang: Lang): string {
  return pathFor(lang)
}

export function edgeAiArticlePath(lang: Lang, slug: string): string {
  return pathFor(lang, slug)
}
