import { BALCONY_SOLAR_PUBLISHED_SLUGS, BALCONY_SOLAR_HUB_PUBLISHED } from '@/lib/balcony-solar/published'
import { BALCONY_SOLAR_SLUG_TO_KEY } from '@/lib/balcony-solar/slugs'
import { metadata, articleLastmod, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  ...(BALCONY_SOLAR_HUB_PUBLISHED
    ? [{ path: '/balcony-solar', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-07-02' }]
    : []),
  ...Array.from(BALCONY_SOLAR_PUBLISHED_SLUGS).map(slug => ({
    path: `/balcony-solar/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(metadata['balcony-solar'], BALCONY_SOLAR_SLUG_TO_KEY[slug], '2026-07-02'),
  })),
]
