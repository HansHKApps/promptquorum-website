// Pure, environment-free helpers for the homepage "fresh" (last 3 days) tier. Kept separate from
// src/lib/article-freshness.ts because that module freezes "today" at BUILD time (process.env.BUILD_DATE),
// which is right for static badges but wrong for anything that says "today"/"yesterday": the page is
// served for days after a deploy. The client components below call these with the visitor's real clock.

/** Window for the homepage "Just published" highlight — a stricter, louder tier inside the 14-day "New" badge. */
export const FRESH_DAYS = 3

/**
 * Whole calendar days between an ISO date ("2026-10-02", date part only) and `now`, both read as local
 * calendar dates so "today" means the visitor's today. 0 = today, 1 = yesterday, negative = future date.
 */
export function localAgeDays(isoDate: string, now: Date): number {
  const [y, m, d] = isoDate.slice(0, 10).split('-').map(Number)
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const then = new Date(y, m - 1, d).getTime()
  return Math.round((startOfToday - then) / 86_400_000)
}

export function isFreshAge(ageDays: number): boolean {
  return ageDays >= 0 && ageDays <= FRESH_DAYS
}
