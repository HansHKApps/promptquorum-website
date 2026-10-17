import type { Language } from '@/lib/blog/blogContent'
import { freshAgeDays } from '@/lib/article-freshness'
import { getLatestApps } from './apps-feed'
import { getLatestPosts } from './content-feed'

export type FreshKind = 'review' | 'test' | 'app' | 'guide'

export interface FreshItem {
  key: string
  kind: FreshKind
  title: string
  description: string
  url: string
  /** ISO date the item went live (publishDate for articles, addedDate for directory apps). */
  date: string
  /** Whole days since `date`, 0 = today. */
  ageDays: number
}

/**
 * Everything published in the last FRESH_DAYS days, newest first: new articles plus new directory
 * apps. A directory app that has its own review resolves to the review URL, so it would otherwise
 * appear twice (once as the article, once as the app) — items are de-duplicated by URL and the
 * article entry wins because it carries the real title and excerpt.
 */
export function getFreshItems(lang: Language = 'en', limit = 6): FreshItem[] {
  const byUrl = new Map<string, FreshItem>()

  for (const p of getLatestPosts(lang)) {
    const ageDays = freshAgeDays(p.publishDate)
    if (ageDays === null) continue
    byUrl.set(p.url, {
      key: p.url,
      kind: /-review$/.test(p.url) ? 'review' : /-hands-on-test$/.test(p.url) ? 'test' : 'guide',
      title: p.title,
      description: p.excerpt,
      url: p.url,
      date: p.publishDate,
      ageDays,
    })
  }

  for (const a of getLatestApps(lang)) {
    const ageDays = freshAgeDays(a.addedDate)
    if (ageDays === null || byUrl.has(a.url)) continue
    byUrl.set(a.url, {
      key: a.url,
      kind: 'app',
      title: a.name,
      description: a.tagline,
      url: a.url,
      date: a.addedDate,
      ageDays,
    })
  }

  return [...byUrl.values()]
    .sort((x, y) => y.date.localeCompare(x.date) || x.title.localeCompare(y.title))
    .slice(0, limit)
}
