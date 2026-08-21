import { SMART_HOME_PUBLISHED_SLUGS, SMART_HOME_HUB_PUBLISHED } from '@/lib/smart-home/published'
import { SMART_HOME_SLUG_TO_KEY } from '@/lib/smart-home/slugs'
import { metadata, articleLastmod, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  ...(SMART_HOME_HUB_PUBLISHED
    ? [{ path: '/smart-home', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-06-05' }]
    : []),
  ...Array.from(SMART_HOME_PUBLISHED_SLUGS).map(slug => ({
    path: `/smart-home/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(metadata['smart-home'], SMART_HOME_SLUG_TO_KEY[slug], '2026-06-05'),
  })),
]
