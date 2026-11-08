// Which content clusters exist, how a URL slug maps to a content key, and which slugs are published.
//
// This file is deliberately LIGHT: it imports only the small slug maps and publish allowlists, never an article
// barrel. The article text itself lives in the build-time corpus packs (see corpus.ts), so the chat and MCP
// serverless functions no longer load the ~170 MB of article source on every cold start.

import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { POWER_LLM_SLUG_TO_KEY } from '@/lib/power-local-llm/slugs'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { BALCONY_SOLAR_SLUG_TO_KEY } from '@/lib/balcony-solar/slugs'
import { SMART_HOME_SLUG_TO_KEY } from '@/lib/smart-home/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { POWER_LLM_PUBLISHED_SLUGS } from '@/lib/power-local-llm/published'
import { BALCONY_SOLAR_PUBLISHED_SLUGS } from '@/lib/balcony-solar/published'
import { SMART_HOME_PUBLISHED_SLUGS } from '@/lib/smart-home/published'

export interface ClusterMeta {
  slugToKey: Record<string, string>
  /** Present only for clusters gated by a publish allowlist. */
  isPublished?: (slug: string) => boolean
}

export const CLUSTER_META: Record<string, ClusterMeta> = {
  'local-llms': { slugToKey: LLM_SLUG_TO_KEY as Record<string, string> },
  'prompt-engineering': { slugToKey: PE_SLUG_TO_KEY as Record<string, string> },
  'power-local-llm': {
    slugToKey: POWER_LLM_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => POWER_LLM_PUBLISHED_SLUGS.has(slug),
  },
  'prompt-bites': { slugToKey: PROMPT_BITES_SLUG_TO_KEY as Record<string, string> },
  'smart-home': {
    slugToKey: SMART_HOME_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => SMART_HOME_PUBLISHED_SLUGS.has(slug),
  },
  'balcony-solar': {
    slugToKey: BALCONY_SOLAR_SLUG_TO_KEY as Record<string, string>,
    isPublished: (slug) => BALCONY_SOLAR_PUBLISHED_SLUGS.has(slug),
  },
  blog: { slugToKey: SLUG_TO_POST_ID as Record<string, string> },
}

/** Content keys that may be read through get_article for a cluster (mapped slugs only, published only when gated). */
export function readableKeys(cluster: string): Set<string> {
  const meta = CLUSTER_META[cluster]
  const keys = new Set<string>()
  if (!meta) return keys
  for (const [slug, key] of Object.entries(meta.slugToKey)) {
    if (meta.isPublished && !meta.isPublished(slug)) continue
    keys.add(key)
  }
  return keys
}
