import { EDGE_AI_SLUG_TO_KEY } from '@/lib/edge-ai/slugs'
import { EDGE_AI_HUB_PUBLISHED } from '@/lib/edge-ai/published'
import { hasRealContent, metadata, articleLastmod, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  ...(EDGE_AI_HUB_PUBLISHED ? [{ path: '/edge-ai', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-09-02' }] : []),
  ...Object.keys(EDGE_AI_SLUG_TO_KEY)
    .filter(slug => hasRealContent(metadata['edge-ai'], EDGE_AI_SLUG_TO_KEY[slug]))
    .map(slug => ({
      path: `/edge-ai/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: articleLastmod(metadata['edge-ai'], EDGE_AI_SLUG_TO_KEY[slug], '2026-09-02'),
    })),
]
