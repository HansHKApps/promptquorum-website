// "Not verified recently" signal for directory tiles — distinct from
// upstreamStatus (archived/unmaintained, which is a researched, confirmed
// fact about the project) and from the plain LastUpdatedBadge date (which
// shows the date but never flags it as old). This is a threshold heuristic
// over whichever date the tile already shows (lastVerifiedDate ?? addedDate),
// same self-expiring pattern as founderStar.ts's isFounderStarActive.

const STALE_LISTING_DAYS = 365

export function isStaleListing(dateIso: string | null | undefined): boolean {
  if (!dateIso) return false
  const date = new Date(dateIso).getTime()
  if (Number.isNaN(date)) return false
  const ageDays = (Date.now() - date) / (1000 * 60 * 60 * 24)
  return ageDays > STALE_LISTING_DAYS
}
