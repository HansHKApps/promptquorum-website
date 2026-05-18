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
// Base /power-local-llm blocks unpublished articles, briefs, and stubs.
// Language variants (/de/, /fr/, /ja/, /zh/) are now emitted per-language via POWER_LLM_PUBLISHED_PATHS check.
const EXCLUDED_PATH_PREFIXES = [
  '/power-local-llm',
  '/prompt-bites',
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

    // All sections now use multi-language pattern:
    // Emit separate <loc> for EN + DE/FR/JA/ZH, each with hreflang alternates.
    // For PLL articles: publish gate (isExcluded check above) ensures only published
    // EN articles generate entries; their language variants follow automatically.
    {
      // Emit separate <loc> for each language (EN + DE + FR + JA + ZH).
      // Each <loc> includes hreflang annotations pointing to other language versions.
      // This ensures AI crawlers discover language URLs as primary entries, not just alternates.
      const languages = ['en', 'de', 'fr', 'ja', 'zh'] as const

      languages.forEach((lang) => {
        const langPath = lang === 'en' ? path : (path === '' ? `/${lang}` : `/${lang}${path}`)

        // Build hreflang alternates for this language version
        const alternates: Record<string, string> = {}
        languages.forEach((otherLang) => {
          const otherPath = otherLang === 'en' ? path : (path === '' ? `/${otherLang}` : `/${otherLang}${path}`)
          alternates[otherLang] = `${BASE}${otherPath}`
        })
        alternates['x-default'] = `${BASE}${path}`

        entries.push({
          url: `${BASE}${langPath}`,
          lastModified: lastmod,
          changeFrequency: changefreq,
          priority,
          alternates: { languages: alternates },
        })
      })
    }
  })

  return entries
}
