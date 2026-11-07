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

/**
 * All logged founder review rounds, oldest first. Falls back to the single
 * `founderReviewedDate`. Length >= 2 means the founder reviewed again after the
 * first round (owner rule 2026-11-07); the UI then shows "reviewed N times".
 */
export function getFounderReviewDates(app: { founderReviewedDate?: string; founderReviewDates?: string[] }): string[] {
  const dates = app.founderReviewDates && app.founderReviewDates.length > 0
    ? [...app.founderReviewDates]
    : app.founderReviewedDate ? [app.founderReviewedDate] : []
  return dates.sort()
}
