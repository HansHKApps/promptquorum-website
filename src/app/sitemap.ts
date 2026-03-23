import type { MetadataRoute } from 'next'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const

type Page = {
  path: string
  priority: number
  changefreq: 'weekly' | 'monthly'
  lastmod: string
}

const STATIC_PAGES: Page[] = [
  { path: '',                      priority: 1.0, changefreq: 'weekly',  lastmod: '2026-03-16' },
  { path: '/compare',              priority: 0.9, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/features',             priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/features/optimization', priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/features/quorum',      priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/how-it-works',         priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-16' },
  { path: '/download',             priority: 0.9, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/faq',                  priority: 0.7, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/about',                priority: 0.5, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/waitlist',             priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/privacy',              priority: 0.3, changefreq: 'monthly', lastmod: '2026-03-15' },
]

const PE_PAGES: Page[] = [
  { path: '/prompt-engineering', priority: 0.9, changefreq: 'weekly', lastmod: '2026-03-16' },
  ...Object.keys(PE_SLUG_TO_KEY).map(slug => ({
    path: `/prompt-engineering/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: '2026-03-16',
  })),
]

const BLOG_PAGES: Page[] = [
  { path: '/blog', priority: 0.7, changefreq: 'weekly', lastmod: '2026-03-15' },
  ...Object.keys(SLUG_TO_POST_ID).map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: '2026-03-16',
  })),
]

const FRAMEWORK_PAGES: Page[] = [
  { path: '/frameworks', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/co-star',                 priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/craft',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/risen',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/trace',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/ape',                     priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/specs',                   priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/rtf',                     priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/google-prompt',           priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/single-prompt-line',      priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
]

const PAGES: Page[] = [...STATIC_PAGES, ...PE_PAGES, ...BLOG_PAGES, ...FRAMEWORK_PAGES]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority, changefreq, lastmod }) => ({
    url: `${BASE}${path}`,
    lastModified: lastmod,
    changeFrequency: changefreq,
    priority,
    alternates: {
      languages: Object.fromEntries(
        LANGS.map(lang => [
          lang,
          lang === 'en' ? `${BASE}${path}` : `${BASE}${path}?lang=${lang}`,
        ])
      ),
    },
  }))
}
