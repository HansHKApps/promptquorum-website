import { blogContent } from './blogContent'

const MONTHS: Record<string, string> = {
  january: '01', february: '02', march: '03', april: '04',
  may: '05', june: '06', july: '07', august: '08',
  september: '09', october: '10', november: '11', december: '12',
}

/**
 * Blog posts only store a pre-translated, localized publishDate string
 * (e.g. "Published March 14, 2026", "Publié le 14 mars 2026") — there is no
 * raw ISO field. The EN block's string always follows "Published <Month> <D>, <YYYY>",
 * so it's the one reliable source for a machine-readable date; every locale of a
 * given post publishes on the same day. Used for JSON-LD dates and sitemap lastmod
 * so non-English pages stop emitting garbled dates parsed from their own localized string.
 */
export function getBlogPostIsoDate(postId: string): string {
  const enDate = blogContent[postId]?.en?.publishDate ?? ''
  // Day is optional — one post ("Published March 2026") has month + year only.
  const match = enDate.match(/([A-Za-z]+)\s+(?:(\d{1,2}),\s+)?(\d{4})/)
  if (!match) return '2026-01-01'
  const [, monthName, day, year] = match
  const month = MONTHS[monthName.toLowerCase()]
  if (!month) return '2026-01-01'
  return `${year}-${month}-${(day ?? '01').padStart(2, '0')}`
}

/**
 * JSON-LD dateModified / sitemap lastmod: the EN block's `dateModified` (set only on
 * substantive content updates) if present, otherwise falls back to publishDate — same
 * fallback chain other clusters use (dateModified ?? lastFactChecked ?? publishDate).
 */
export function getBlogPostModifiedIsoDate(postId: string): string {
  const dateModified = blogContent[postId]?.en?.dateModified
  return dateModified ?? getBlogPostIsoDate(postId)
}
