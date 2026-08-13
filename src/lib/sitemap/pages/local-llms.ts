import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { hasRealContent, metadata, articleLastmod, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  { path: '/local-llms', priority: 0.9, changefreq: 'weekly', lastmod: '2026-05-26' },
  ...Object.keys(LLM_SLUG_TO_KEY)
    .filter(slug => hasRealContent(metadata['local-llms'], LLM_SLUG_TO_KEY[slug]))
    .map(slug => ({
      path: `/local-llms/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: articleLastmod(metadata['local-llms'], LLM_SLUG_TO_KEY[slug], '2026-05-26'),
    })),
]
