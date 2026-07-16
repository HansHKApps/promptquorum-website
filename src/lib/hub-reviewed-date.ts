// Computes the "content last reviewed" date for a cluster hub page: the most recent
// dateModified (falling back to publishDate) across every article in the cluster.
export function latestDateModified(
  dates: Array<{ publishDate?: string; dateModified?: string } | undefined>
): string | undefined {
  const values = dates
    .map((d) => d?.dateModified ?? d?.publishDate)
    .filter((d): d is string => !!d)
  return values.sort().at(-1)
}
