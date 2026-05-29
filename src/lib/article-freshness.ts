const NEW_BADGE_DAYS = 15

function daysSince(dateStr: string): number {
  const date = new Date(dateStr)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  date.setHours(0, 0, 0, 0)
  return Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
}

export function isNewArticle(publishDate?: string): boolean {
  if (!publishDate) return false
  const days = daysSince(publishDate)
  return days >= 0 && days < NEW_BADGE_DAYS
}

// Returns true when dateModified is within NEW_BADGE_DAYS days AND at least 2 days
// after publishDate (prevents false positives on same-day publish+edit).
// "New" takes priority: caller must check isNewArticle first and skip this if true.
export function isUpdatedArticle(publishDate?: string, dateModified?: string): boolean {
  if (!dateModified || !publishDate) return false
  const modifiedDays = daysSince(dateModified)
  if (modifiedDays < 0 || modifiedDays >= NEW_BADGE_DAYS) return false
  const pub = new Date(publishDate)
  const mod = new Date(dateModified)
  pub.setHours(0, 0, 0, 0)
  mod.setHours(0, 0, 0, 0)
  return Math.floor((mod.getTime() - pub.getTime()) / (1000 * 60 * 60 * 24)) >= 2
}
