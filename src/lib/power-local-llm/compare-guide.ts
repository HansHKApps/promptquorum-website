import type { CategorySubKey } from './apps/categories'
import { COMPARE_SEGMENTS, CATEGORY_COMPARE_ARTICLE } from './apps/compare-schema'
import { POWER_LLM_PUBLISHED_SLUGS } from './published'
import { groupLabel } from './compare-i18n'
import type { CategoryGroupKey } from './apps/categories'

/**
 * The published category comparison guide a tool belongs to (by any of its categories), or null when
 * its category has no guide yet or the guide is not public. Pure data, safe to import in client
 * components (the directory cards/drawer).
 */
export function guideForCategories(categories: CategorySubKey[], lang: string): { slug: string; label: string } | null {
  for (const group of Object.keys(COMPARE_SEGMENTS) as CategoryGroupKey[]) {
    const slug = CATEGORY_COMPARE_ARTICLE[group]
    if (!slug || !POWER_LLM_PUBLISHED_SLUGS.has(slug)) continue
    if (COMPARE_SEGMENTS[group].some((seg) => seg.subs.some((c) => categories.includes(c)))) {
      return { slug, label: groupLabel(group, lang) }
    }
  }
  return null
}
