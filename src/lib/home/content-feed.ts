// Reads the pre-generated homepage content feed (src/generated/home-content-feed.json,
// produced by scripts/generate-home-content-feed.mjs) for the Latest Posts /
// Recently Updated blocks.
//
// This does NOT live-import the 6 clusters' content barrels — an earlier
// version of this file did, and it crashed Next's dev webpack bundler with
// "Cannot create a string longer than 0x1fffffe8 characters": the combined
// raw source of 780+ articles across 9 locales is too large for webpack's
// dev bundle once it's part of a page's server component tree (an
// API-route-only consumer like src/lib/search/build-search-entries.ts
// doesn't hit this — routes bundle differently). Re-run
// `node scripts/generate-home-content-feed.mjs` after adding/updating
// articles in any of the 6 live clusters to refresh this feed.

import feedData from '@/generated/home-content-feed.json'

export interface ContentFeedEntry {
  title: string
  excerpt: string
  publishDate: string
  dateModified: string
  url: string
  cluster: string
}

const entries = feedData as ContentFeedEntry[]

/** Total count of published English articles across all 6 live clusters, for the By-the-Numbers stat. */
export function getTotalArticleCount(): number {
  return entries.length
}

/** Newest-published-first, for Latest Posts. */
export function getLatestPosts(limit = 30): ContentFeedEntry[] {
  return entries
    .slice()
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .slice(0, limit)
}

/** dateModified strictly after publishDate, newest-modified-first, for Recently Updated. */
export function getRecentlyUpdated(limit = 30): ContentFeedEntry[] {
  return entries
    .filter((e) => e.dateModified > e.publishDate)
    .sort((a, b) => b.dateModified.localeCompare(a.dateModified))
    .slice(0, limit)
}
