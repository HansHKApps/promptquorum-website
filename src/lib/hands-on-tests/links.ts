import type { Language } from '@/lib/blog/blogContent'

/**
 * Slugs (ToolRecord.slug) of apps that have a hands-on test page.
 * Kept separate from the report data so client components (tile, drawer)
 * don't bundle the full test content.
 */
export const HANDS_ON_TEST_SLUGS: readonly string[] = ['draw-things']

/**
 * Path to an app's hands-on test page, or null when the app has none.
 * Only the English page exists so far, so non-EN tiles hide the button
 * until their translation ships.
 */
export function handsOnTestUrl(appSlug: string, lang: Language): string | null {
  if (!HANDS_ON_TEST_SLUGS.includes(appSlug)) return null
  if (lang !== 'en') return null
  return `/hands-on-tests/${appSlug}`
}
