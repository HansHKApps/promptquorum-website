import type { MetadataRoute } from 'next'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { peContent } from '@/lib/prompt-engineering/content'
import { llmContent } from '@/lib/local-llms/content'
import { POWER_LLM_PUBLISHED_SLUGS, POWER_LLM_HUB_PUBLISHED } from '@/lib/power-local-llm/published'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'

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
  // JA/ZH/DE path-prefix clusters — /ja/<cluster>, /zh/<cluster>, and /de/<cluster> entries are excluded and instead handled as hreflang alternates on EN entries
  '/ja/prompt-engineering',
  '/ja/local-llms',
  '/ja/blog',
  '/ja/frameworks',
  '/ja/compare',
  '/ja/features',
  '/ja/how-it-works',
  '/ja/faq',
  '/ja/about',
  '/ja/privacy',
  '/zh/prompt-engineering',
  '/zh/local-llms',
  '/zh/blog',
  '/zh/frameworks',
  '/zh/compare',
  '/zh/features',
  '/zh/how-it-works',
  '/zh/faq',
  '/zh/about',
  '/zh/privacy',
  '/de/prompt-engineering',
  '/de/local-llms',
  '/de/blog',
  '/de/frameworks',
  '/de/compare',
  '/de/features',
  '/de/how-it-works',
  '/de/faq',
  '/de/about',
  '/de/privacy',
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

// Power Local LLM — partial-launch allowlist. Only slugs in
// POWER_LLM_PUBLISHED_SLUGS are emitted here; the rest of the cluster stays
// excluded via EXCLUDED_PATH_PREFIXES below until they pass audit.
const POWER_LOCAL_LLM_PAGES: Page[] = [
  ...(POWER_LLM_HUB_PUBLISHED
    ? [{ path: '/power-local-llm', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-05-08' }]
    : []),
  ...Array.from(POWER_LLM_PUBLISHED_SLUGS).map(slug => ({
    path: `/power-local-llm/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: '2026-05-08',
  })),
]

const PAGES: Page[] = [
  ...STATIC_PAGES,
  ...PE_PAGES,
  ...BLOG_PAGES,
  ...FRAMEWORK_PAGES,
  ...LOCAL_LLM_PAGES,
  ...POWER_LOCAL_LLM_PAGES,
]

// Power Local LLM published paths override the prefix exclusion. Anything else
// under /power-local-llm stays excluded (briefs, unwritten slugs, locale variants).
const POWER_LLM_PUBLISHED_PATHS: ReadonlySet<string> = new Set([
  ...(POWER_LLM_HUB_PUBLISHED ? ['/power-local-llm'] : []),
  ...Array.from(POWER_LLM_PUBLISHED_SLUGS).map(slug => `/power-local-llm/${slug}`),
])

function isExcluded(path: string): boolean {
  if (POWER_LLM_PUBLISHED_PATHS.has(path)) return false
  return EXCLUDED_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  PAGES.forEach(({ path, priority, changefreq, lastmod }) => {
    if (isExcluded(path)) return

    const isPowerLLM = path.startsWith('/power-local-llm')

    if (isPowerLLM) {
      // Power LLM locale variants (/de/power-local-llm/...) are excluded until content is ready.
      // Emit EN-only <loc> with hreflang alternates.
      entries.push({
        url: `${BASE}${path}`,
        lastModified: lastmod,
        changeFrequency: changefreq,
        priority,
        alternates: {
          languages: {
            'en': `${BASE}${path}`,
            'de': `${BASE}/de${path}`,
            'fr': `${BASE}/fr${path}`,
            'ja': `${BASE}/ja${path}`,
            'zh': `${BASE}/zh${path}`,
            'x-default': `${BASE}${path}`,
          },
        },
      })
    } else {
      // All other clusters: emit EN <loc> with full hreflang alternates.
      // JA/ZH/DE use /ja/, /zh/, /de/ path prefixes; FR uses ?lang= query param.
      // This prevents duplication and ensures all language variants are discoverable.
      const getPathPrefixUrl = (p: string, lang: string) => p === '' ? `/${lang}` : `/${lang}${p}`
      const alternates = {
        'en': `${BASE}${path}`,
        'de': `${BASE}${getPathPrefixUrl(path, 'de')}`,
        'fr': `${BASE}${path}?lang=fr`,
        'ja': `${BASE}${getPathPrefixUrl(path, 'ja')}`,
        'zh': `${BASE}${getPathPrefixUrl(path, 'zh')}`,
        'x-default': `${BASE}${path}`,
      }
      entries.push({
        url: `${BASE}${path}`,
        lastModified: lastmod,
        changeFrequency: changefreq,
        priority,
        alternates: { languages: alternates },
      })
    }
  })

  return entries
}
