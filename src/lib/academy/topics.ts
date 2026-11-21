// PromptQuorum Academy — subject suggestions for the setup screen, built at render time on the server from the
// same in-process functions the MCP server and Ask Hans use (list_clusters / list_categories). Category labels
// come localized from the directory taxonomy; hub labels come from the Academy copy.

import { listCategories, listClusters } from '@/lib/mcp/tools'
import { CATEGORY_SUB_LABEL, type CategorySubKey } from '@/lib/power-local-llm/apps/categories'
import { ACADEMY_MAX_CATEGORY_TOPICS } from './config'
import type { AcademyLang, TopicSuggestion } from './types'

/** Content hubs offered as learning subjects (blog is retired, product is the app itself). */
export const ACADEMY_TOPIC_HUBS = ['local-llms', 'prompt-engineering', 'power-local-llm', 'prompt-bites'] as const
export type AcademyTopicHub = (typeof ACADEMY_TOPIC_HUBS)[number]

export function buildAcademyTopics(lang: AcademyLang, hubLabels: Record<AcademyTopicHub, string>): TopicSuggestion[] {
  const known = new Set(listClusters().map((c) => c.hub))
  const hubs: TopicSuggestion[] = ACADEMY_TOPIC_HUBS.filter((h) => known.has(h)).map((h) => ({ key: `hub:${h}`, label: hubLabels[h] }))
  // Largest directory categories first: they have the most material to ground lessons in.
  const cats = listCategories()
    .groups.flatMap((g) => g.categories)
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, ACADEMY_MAX_CATEGORY_TOPICS)
    .map((c) => ({
      key: `category:${c.key}`,
      label: CATEGORY_SUB_LABEL[c.key as CategorySubKey]?.[lang] ?? c.label,
      hint: c.exampleApps.slice(0, 3).join(', ') || undefined,
    }))
  return [...hubs, ...cats]
}
