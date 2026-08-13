import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { metadata, type Page } from '../sitemap-shared'

export const PAGES: Page[] = [
  { path: '/blog', priority: 0.7, changefreq: 'weekly', lastmod: '2026-03-15' },
  ...Object.keys(SLUG_TO_POST_ID).map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: metadata.blog[SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]]?.lastmod ?? '2026-01-01',
  })),
]
