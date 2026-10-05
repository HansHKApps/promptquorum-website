// Automatic "Last updated" date for the Local LLM Software Directory page.
//
// The article file carries a hand-set `dateModified` (the baseline). Every tool added to the directory
// after that baseline counts toward a bump: once DIRECTORY_APPS_PER_DATE_BUMP (5) new tools exist, the page
// date becomes the day the 5th of them was added; 10 new tools -> the day the 10th was added, and so on.
// Editing the article's own `dateModified` by hand (a real content refresh) moves the baseline forward and
// restarts the count. Pure function so it can be unit-tested and reused by build scripts.

export const DIRECTORY_APPS_PER_DATE_BUMP = 5
export const DIRECTORY_ARTICLE_KEY = 'local-llm-software-directory-2026'

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

export function computeDirectoryDate(
  baselineDate: string,
  tools: ReadonlyArray<{ addedDate: string | null }>,
  perBump: number = DIRECTORY_APPS_PER_DATE_BUMP,
): string {
  if (!ISO_DAY.test(baselineDate)) return baselineDate
  const added = tools
    .map((t) => t.addedDate)
    .filter((d): d is string => !!d && ISO_DAY.test(d) && d > baselineDate)
    .sort()
  const complete = Math.floor(added.length / perBump) * perBump
  return complete >= perBump ? added[complete - 1] : baselineDate
}

// Replace every dateModified equal to the baseline (top level and nested schema blocks) with the computed date.
export function applyDirectoryDate(
  blocks: Partial<Record<string, unknown>> | undefined,
  tools: ReadonlyArray<{ addedDate: string | null }>,
): void {
  if (!blocks) return
  for (const block of Object.values(blocks)) {
    if (!block || typeof block !== 'object') continue
    const baseline = (block as { dateModified?: string }).dateModified
    if (!baseline) continue
    const effective = computeDirectoryDate(baseline, tools)
    if (effective === baseline) continue
    const walk = (node: unknown): void => {
      if (Array.isArray(node)) { node.forEach(walk); return }
      if (!node || typeof node !== 'object') return
      const rec = node as Record<string, unknown>
      for (const k of Object.keys(rec)) {
        if (k === 'dateModified' && rec[k] === baseline) rec[k] = effective
        else walk(rec[k])
      }
    }
    walk(block)
  }
}
