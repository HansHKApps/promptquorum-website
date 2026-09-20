import mentionsData from '@/data/home/mentions.json'

export interface Mention {
  id: string
  outlet: string
  title: string
  url: string
  date: string
  domainRating: number
  excerpt?: string
}

/**
 * Hand-maintained DR50+ backlink mentions, newest first. Empty until Hans
 * drops in a real export — RecentMentionsBlock's placeholder state covers
 * that. Top 10 shown by default, the rest revealed on expand (roughly
 * 4-5 months of history is the target retention, per the spec; trimming
 * older entries is a manual edit to the data file, not automated).
 */
export function getMentions(): Mention[] {
  return (mentionsData.mentions as Mention[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
}
