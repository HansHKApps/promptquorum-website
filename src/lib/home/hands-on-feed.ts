import type { Language } from '@/lib/blog/blogContent'
import { HANDS_ON_TEST_SLUGS, getHandsOnTest, handsOnTestUrl } from '@/lib/hands-on-tests'

export interface HandsOnFeedEntry {
  slug: string
  appName: string
  title: string
  excerpt: string
  date: string
  url: string
}

/** Published hands-on tests available in `lang`, newest first. Derived from the registry, so new tests appear on their own. */
export function getHandsOnFeed(lang: Language = 'en', limit = 10): HandsOnFeedEntry[] {
  const entries: HandsOnFeedEntry[] = []
  for (const slug of HANDS_ON_TEST_SLUGS) {
    const test = getHandsOnTest(slug, lang)
    const url = handsOnTestUrl(slug, lang)
    if (!test || !url) continue
    entries.push({ slug, appName: test.app.name, title: test.title, excerpt: test.dek, date: test.published, url })
  }
  return entries.sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit)
}
