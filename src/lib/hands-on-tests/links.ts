import type { Language } from '@/lib/blog/blogContent'

/**
 * Slugs (ToolRecord.slug) of apps that have a hands-on test page.
 * Kept separate from the report data so client components (tile, drawer)
 * don't bundle the full test content.
 */
export const HANDS_ON_TEST_SLUGS: readonly string[] = ['draw-things', 'bobe']

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

/**
 * Path to an app's hands-on test page, or null when the app has none.
 * Only the English page exists so far, so non-EN tiles hide the button
 * until their translation ships.
 */
export function handsOnTestUrl(appSlug: string, lang: Language): string | null {
  if (!HANDS_ON_TEST_SLUGS.includes(appSlug)) return null
  if (lang !== 'en') return null
  return `/power-local-llm/${handsOnTestUrlSlug(appSlug)}`
}
