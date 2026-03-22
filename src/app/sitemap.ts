import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const

type Page = {
  path: string
  priority: number
  changefreq: 'weekly' | 'monthly'
  lastmod: string
}

const PAGES: Page[] = [
  { path: '',               priority: 1.0, changefreq: 'weekly',  lastmod: '2026-03-16' },
  { path: '/compare',       priority: 0.9, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/features',      priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/how-it-works',  priority: 0.8, changefreq: 'weekly',  lastmod: '2026-03-16' },
  { path: '/download',      priority: 0.9, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/faq',           priority: 0.7, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/about',         priority: 0.5, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/blog',          priority: 0.7, changefreq: 'weekly',  lastmod: '2026-03-15' },
  { path: '/blog/prompt-frameworks',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/blog/local-ai-vs-cloud',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/blog/ai-model-comparison',                 priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/blog/quorum',                              priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/blog/prompt-optimization',                 priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-14' },
  { path: '/blog/enterprise-data-privacy',             priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-15' },
  { path: '/blog/research-prompt-optimization-impact', priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-15' },
  { path: '/blog/ai-consensus-scoring',                priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/blog/promptquorum-vs-askquorum',           priority: 0.9, changefreq: 'monthly', lastmod: '2026-03-17' },
  { path: '/blog/what-is-ai-consensus-scoring',        priority: 0.9, changefreq: 'monthly', lastmod: '2026-03-17' },
  { path: '/frameworks',                         priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/co-star',                 priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/craft',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/risen',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/trace',                   priority: 0.8, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/ape',                     priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/specs',                   priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/rtf',                     priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/google-prompt',           priority: 0.7, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/frameworks/single-prompt-line',      priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/privacy',       priority: 0.3, changefreq: 'monthly', lastmod: '2026-03-15' },
]

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
