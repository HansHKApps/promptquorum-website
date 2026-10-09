import type { Language } from '@/lib/blog/blogContent'

/**
 * Slugs (ToolRecord.slug) of apps that have a hands-on test page.
 * Kept separate from the report data so client components (tile, drawer)
 * don't bundle the full test content.
 */
export const HANDS_ON_TEST_SLUGS: readonly string[] = ['draw-things', 'bobe']

/**
 * Languages each test is published in (a data/<app>.<lang>.json file must exist for every entry;
 * scripts/validate-hands-on-tests.mjs checks it). English is the source and sits at the unprefixed root.
 */
export const HANDS_ON_TEST_LANGS: Record<string, readonly Language[]> = {
  'draw-things': ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'],
  bobe: ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'],
}

export function handsOnTestLangs(appSlug: string): readonly Language[] {
  return HANDS_ON_TEST_LANGS[appSlug] ?? []
}

const URL_SUFFIX = '-hands-on-test'

/** URL slug under /power-local-llm/, next to the app's review (e.g. draw-things-hands-on-test). */
export function handsOnTestUrlSlug(appSlug: string): string {
  return `${appSlug}${URL_SUFFIX}`
}

/** Reverse lookup: URL slug -> app slug, or null when it is not a hands-on test. */
export function appSlugFromHandsOnUrlSlug(urlSlug: string): string | null {
  if (!urlSlug.endsWith(URL_SUFFIX)) return null
  const appSlug = urlSlug.slice(0, -URL_SUFFIX.length)
  return HANDS_ON_TEST_SLUGS.includes(appSlug) ? appSlug : null
}

/** Path to an app's hands-on test page in `lang`, or null when the app has no test in that language. */
export function handsOnTestUrl(appSlug: string, lang: Language): string | null {
  if (!handsOnTestLangs(appSlug).includes(lang)) return null
  const path = `/power-local-llm/${handsOnTestUrlSlug(appSlug)}`
  return lang === 'en' ? path : `/${lang}${path}`
}
