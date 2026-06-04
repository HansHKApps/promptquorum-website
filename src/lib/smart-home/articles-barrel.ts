// Smart Home — barrel of all written articles.
// Slugs registered in slugs.ts but absent from this map fall through to the
// "Coming Soon" template at the article page level.
//
// SCAFFOLD STATE (Phase 1): no articles authored yet — the map is empty and every
// slug renders Coming Soon. As articles land in Phase 2, add:
//   1. src/lib/smart-home/articles/{slug}.ts
//   2. an `import { article as a_{slug} } from './articles/{slug}'` line
//   3. a `'{slug}': a_{slug},` entry to smartHomeContent
// The `theme` field on each article must be one of the four canonical Smart Home
// themes (see THEME_COLORS in src/components/SmartHomePostClient.tsx).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

// Category 2 — Local-First Smart Home
import { article as a_local_smart_home_complete_guide } from './articles/local-smart-home-complete-guide'
// Category 3 — Local AI & LLMs in the Smart Home
import { article as a_local_llm_smart_home_complete_guide } from './articles/local-llm-smart-home-complete-guide'

export const smartHomeContent: Record<string, Partial<Record<Language, LLMArticle>>> = {
  'local-smart-home-complete-guide':      a_local_smart_home_complete_guide,
  'local-llm-smart-home-complete-guide':  a_local_llm_smart_home_complete_guide,
}
