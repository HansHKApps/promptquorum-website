// "Not verified recently" signal for directory tiles — distinct from
// upstreamStatus (archived/unmaintained, which is a researched, confirmed
// fact about the project) and from the plain LastUpdatedBadge date (which
// shows the date but never flags it as old). This is a threshold heuristic
// over whichever date the tile already shows (lastVerifiedDate ?? addedDate),
// same self-expiring pattern as founderStar.ts's isFounderStarActive.
//
// Two tiers: local-AI tooling moves fast enough that even 6 months
// unverified is worth a soft flag, escalating to a stronger one past a
// year. Neither implies the app itself changed — only that PromptQuorum
// hasn't rechecked the listing.

const STALE_LISTING_WARN_DAYS = 180
const STALE_LISTING_OLD_DAYS = 365

export type ListingFreshness = 'fresh' | 'warn' | 'old'

export function getListingFreshness(dateIso: string | null | undefined): ListingFreshness {
  if (!dateIso) return 'fresh'
  const date = new Date(dateIso).getTime()
  if (Number.isNaN(date)) return 'fresh'
  const ageDays = (Date.now() - date) / (1000 * 60 * 60 * 24)
  if (ageDays > STALE_LISTING_OLD_DAYS) return 'old'
  if (ageDays > STALE_LISTING_WARN_DAYS) return 'warn'
  return 'fresh'
}
