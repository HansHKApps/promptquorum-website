import type { Page } from '../sitemap-shared'

// Combined STATIC_PAGES + FRAMEWORK_PAGES: both small and static, sharing one child sitemap.
export const PAGES: Page[] = [
  { path: '', priority: 1.0, changefreq: 'weekly', lastmod: '2026-03-16' },
  { path: '/compare', priority: 0.9, changefreq: 'weekly', lastmod: '2026-03-14' },
  { path: '/features', priority: 0.8, changefreq: 'weekly', lastmod: '2026-03-14' },
  { path: '/features/optimization', priority: 0.8, changefreq: 'weekly', lastmod: '2026-03-14' },
  { path: '/features/quorum', priority: 0.8, changefreq: 'weekly', lastmod: '2026-03-14' },
  { path: '/how-it-works', priority: 0.8, changefreq: 'weekly', lastmod: '2026-03-16' },
  { path: '/faq', priority: 0.7, changefreq: 'weekly', lastmod: '2026-03-14' },
  { path: '/about', priority: 0.5, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/waitlist', priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/privacy', priority: 0.3, changefreq: 'monthly', lastmod: '2026-03-15' },
  { path: '/frameworks', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/co-star', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/craft', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/risen', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/trace', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/ape', priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/specs', priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/rtf', priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/google-prompt', priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/single-prompt-line', priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
]
