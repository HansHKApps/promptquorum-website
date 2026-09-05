// "Founder-reviewed" badge — shown for FOUNDER_STAR_VALID_DAYS after a founder/
// maintainer has checked a tool's technical specs and description for accuracy.
// Self-expiring by design: the badge is derived from `founderReviewedDate` at
// render time, so it disappears on its own after a year with no separate
// cleanup step. It is a fact-check credit, not an editorial endorsement — the
// review/article stays independent PromptQuorum content either way.

const FOUNDER_STAR_VALID_DAYS = 365

export function isFounderStarActive(founderReviewedDate: string | undefined): boolean {
  if (!founderReviewedDate) return false
  const reviewed = new Date(founderReviewedDate).getTime()
  if (Number.isNaN(reviewed)) return false
  const ageDays = (Date.now() - reviewed) / (1000 * 60 * 60 * 24)
  return ageDays >= 0 && ageDays <= FOUNDER_STAR_VALID_DAYS
}
