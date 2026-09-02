import { ENTERPRISE_AI_SLUG_TO_KEY } from '@/lib/enterprise-ai/slugs'
import { enterpriseAiContent } from '@/lib/enterprise-ai/articles-barrel'
import type { Page } from '../sitemap-shared'

// enterprise-ai is a new, single-article cluster not yet wired into the generated
// content-metadata.json pipeline (scripts/generate-content-metadata.mjs) used by the
// other clusters — so lastmod is read directly from the article's own EN dateModified
// instead of that generated file. If/when this cluster grows, fold it into that
// generator the same way local-llms/prompt-engineering/etc. are.
function lastmodFor(key: string, fallback: string): string {
  const en = enterpriseAiContent[key]?.en
  return en?.dateModified ?? en?.publishDate ?? fallback
}

export const PAGES: Page[] = [
  { path: '/enterprise-ai', priority: 0.8, changefreq: 'weekly', lastmod: '2026-09-02' },
  ...Object.keys(ENTERPRISE_AI_SLUG_TO_KEY)
    .filter(slug => Object.keys(enterpriseAiContent[ENTERPRISE_AI_SLUG_TO_KEY[slug]]?.en?.sections ?? {}).length > 0)
    .map(slug => ({
      path: `/enterprise-ai/${slug}`,
      priority: 0.7,
      changefreq: 'monthly' as const,
      lastmod: lastmodFor(ENTERPRISE_AI_SLUG_TO_KEY[slug], '2026-09-02'),
    })),
]
