import type { MetadataRoute } from 'next'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { peContent } from '@/lib/prompt-engineering/content'
import { llmContent } from '@/lib/local-llms/content'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'
const LANGS = ['en', 'de', 'fr', 'ja', 'zh'] as const

// Placeholder pages that should be noindexed and excluded from sitemap
const NOINDEX_PAGES = new Set([
  '/download',
  '/prompt-engineering/prompt-engineering-glossary',
  '/prompt-engineering/the-single-step-prompt-method',
])

// Path prefixes excluded from sitemap entirely (every URL beneath these paths is dropped).
// Use for whole clusters that ship behind noindex pre-launch — e.g. Power Local LLM.
const EXCLUDED_PATH_PREFIXES = [
  '/power-local-llm',
  '/de/power-local-llm',
  '/fr/power-local-llm',
  '/ja/power-local-llm',
  '/zh/power-local-llm',
]

// Check if a content entry has real sections (not a stub)
function hasRealContent(contentMap: Record<string, any>, key: string): boolean {
  const en = contentMap[key]?.['en']
  return !!en && Object.keys(en.sections ?? {}).length > 0
}

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
  { path: '/faq',                  priority: 0.7, changefreq: 'weekly',  lastmod: '2026-03-14' },
  { path: '/about',                priority: 0.5, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/waitlist',             priority: 0.6, changefreq: 'monthly', lastmod: '2026-03-16' },
  { path: '/privacy',              priority: 0.3, changefreq: 'monthly', lastmod: '2026-03-15' },
  { path: '/image-license',        priority: 0.3, changefreq: 'monthly', lastmod: '2026-04-20' },
  // Note: /download removed from sitemap (noindex placeholder page)
]

const PE_PAGES: Page[] = [
  { path: '/prompt-engineering', priority: 0.9, changefreq: 'weekly', lastmod: '2026-04-30' },
  ...Object.keys(PE_SLUG_TO_KEY)
    .filter(slug => hasRealContent(peContent, PE_SLUG_TO_KEY[slug]))
    .filter(slug => !NOINDEX_PAGES.has(`/prompt-engineering/${slug}`))
    .map(slug => ({
      path: `/prompt-engineering/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: '2026-04-30',
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

const LOCAL_LLM_PAGES: Page[] = [
  { path: '/local-llms', priority: 0.9, changefreq: 'weekly', lastmod: '2026-05-06' },
  ...Object.keys(LLM_SLUG_TO_KEY)
    .filter(slug => hasRealContent(llmContent, LLM_SLUG_TO_KEY[slug]))
    .map(slug => ({
      path: `/local-llms/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: '2026-05-06',
    })),
]

const PAGES: Page[] = [...STATIC_PAGES, ...PE_PAGES, ...BLOG_PAGES, ...FRAMEWORK_PAGES, ...LOCAL_LLM_PAGES]

function isExcluded(path: string): boolean {
  return EXCLUDED_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  PAGES.forEach(({ path, priority, changefreq, lastmod }) => {
    if (isExcluded(path)) return

    // Only EN pages as <loc> entries; all language variants via hreflang
    const enUrl = `${BASE}${path}`
    entries.push({
      url: enUrl,
      lastModified: lastmod,
      changeFrequency: changefreq,
      priority,
      alternates: {
        languages: Object.fromEntries([
          ['en', enUrl],
          ['de', `${BASE}${path}?lang=de`],
          ['fr', `${BASE}${path}?lang=fr`],
          ['ja', `${BASE}${path}?lang=ja`],
          ['zh', `${BASE}${path}?lang=zh`],
          ['x-default', enUrl],
        ]),
      },
    })
  })

  return entries
}
