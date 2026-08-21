import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { hasRealContent, metadata, articleLastmod, NOINDEX_PAGES, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  { path: '/prompt-engineering', priority: 0.9, changefreq: 'weekly', lastmod: '2026-05-26' },
  ...Object.keys(PE_SLUG_TO_KEY)
    .filter(slug => hasRealContent(metadata['prompt-engineering'], PE_SLUG_TO_KEY[slug]))
    .filter(slug => !NOINDEX_PAGES.has(`/prompt-engineering/${slug}`))
    .map(slug => ({
      path: `/prompt-engineering/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: articleLastmod(metadata['prompt-engineering'], PE_SLUG_TO_KEY[slug], '2026-05-26'),
    })),
]
