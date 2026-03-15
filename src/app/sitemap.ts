import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const
const NOW = new Date().toISOString().split('T')[0]

type Page = {
  path: string
  priority: number
  changefreq: 'weekly' | 'monthly'
}

const PAGES: Page[] = [
  { path: '',               priority: 1.0, changefreq: 'weekly'  },
  { path: '/compare',       priority: 0.9, changefreq: 'weekly'  },
  { path: '/features',      priority: 0.8, changefreq: 'weekly'  },
  { path: '/how-it-works',  priority: 0.8, changefreq: 'weekly'  },
  { path: '/download',      priority: 0.9, changefreq: 'weekly'  },
  { path: '/faq',           priority: 0.7, changefreq: 'weekly'  },
  { path: '/blog',          priority: 0.7, changefreq: 'weekly'  },
  { path: '/blog/prompt-frameworks',               priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/local-ai-vs-cloud',               priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/ai-model-comparison',             priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/quorum',                          priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/prompt-optimization',             priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/enterprise-data-privacy',         priority: 0.8, changefreq: 'monthly' },
  { path: '/blog/research-prompt-optimization-impact', priority: 0.8, changefreq: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, priority, changefreq }) => ({
    url: `${BASE}${path}`,
    lastModified: NOW,
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
