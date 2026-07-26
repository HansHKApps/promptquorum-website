import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { peContent } from '@/lib/prompt-engineering/content'
import { llmContent } from '@/lib/local-llms/content'
import { powerLLMContent } from '@/lib/power-local-llm/content'
import { blogContent } from '@/lib/blog/blogContent'
import { POWER_LLM_PUBLISHED_SLUGS, POWER_LLM_HUB_PUBLISHED } from '@/lib/power-local-llm/published'
import { POWER_LLM_SLUG_TO_KEY } from '@/lib/power-local-llm/slugs'
import { PROMPT_BITES_PUBLISHED_SLUGS, PROMPT_BITES_HUB_PUBLISHED } from '@/lib/prompt-bites/published'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { SMART_HOME_PUBLISHED_SLUGS, SMART_HOME_HUB_PUBLISHED } from '@/lib/smart-home/published'
import { BALCONY_SOLAR_PUBLISHED_SLUGS, BALCONY_SOLAR_HUB_PUBLISHED, isBalconySolarLangPublished } from '@/lib/balcony-solar/published'
import { SMART_HOME_SLUG_TO_KEY } from '@/lib/smart-home/slugs'
import { smartHomeContent } from '@/lib/smart-home/content'
import { BALCONY_SOLAR_SLUG_TO_KEY } from '@/lib/balcony-solar/slugs'
import { balconySolarContent } from '@/lib/balcony-solar/content'
import { getBlogPostIsoDate } from '@/lib/blog/parsePublishDate'

export const dynamic = 'force-static'

const BASE = 'https://www.promptquorum.com'

// Placeholder / robots-disallowed pages that must never appear in the sitemap.
// Keep this in sync with robots.ts baseDisallow — any path Disallow'd there and
// present in a PAGES list must be listed here so the guardrail in GET() drops it.
const NOINDEX_PAGES = new Set([
  '/download',
  '/image-license', // robots.ts Disallow'd — utility/attribution page, not indexable
  '/prompt-engineering/prompt-engineering-glossary',
  '/prompt-engineering/the-single-step-prompt-method',
])

// Path prefixes excluded from sitemap entirely
const EXCLUDED_PATH_PREFIXES = [
  '/power-local-llm',
  '/prompt-bites',
  '/smart-home', // Smart Home cluster: gated by SMART_HOME_PUBLISHED_SLUGS/SMART_HOME_HUB_PUBLISHED; published paths are whitelisted back in below
  '/balcony-solar', // Balcony Solar cluster: gated by BALCONY_SOLAR_PUBLISHED_SLUGS; bypass below
]

function hasRealContent(contentMap: Record<string, any>, key: string): boolean {
  const en = contentMap[key]?.['en']
  return !!en && Object.keys(en.sections ?? {}).length > 0
}

// Real per-article lastmod, sourced the same way each cluster's own render route
// sources its JSON-LD dateModified — not a single hardcoded date applied to every
// URL in a cluster regardless of actual edit history.
function articleLastmod(contentMap: Record<string, any>, key: string, fallback: string): string {
  const en = contentMap[key]?.['en']
  return en?.dateModified ?? en?.lastFactChecked ?? en?.publishDate ?? fallback
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function extractImagesFromArticle(
  contentMap: Record<string, any>,
  key: string
): Array<{ url: string; title?: string }> {
  const en = contentMap[key]?.['en']
  if (!en || !en.sections) return []

  const images: Array<{ url: string; title?: string }> = []
  const sections = en.sections

  Object.values(sections).forEach((section: any) => {
    if (section && typeof section === 'object') {
      if (section.image) {
        const imageUrl = section.image.startsWith('/') ? section.image : `/${section.image}`
        images.push({
          url: imageUrl,
          title: section.imageCaption || undefined,
        })
      }

      if (Array.isArray(section.items)) {
        section.items.forEach((item: any) => {
          if (item && item.image) {
            const imageUrl = item.image.startsWith('/') ? item.image : `/${item.image}`
            images.push({
              url: imageUrl,
              title: item.imageCaption || undefined,
            })
          }
        })
      }

      if (Array.isArray(section.numberedItems)) {
        section.numberedItems.forEach((item: any) => {
          if (item && item.image) {
            const imageUrl = item.image.startsWith('/') ? item.image : `/${item.image}`
            images.push({
              url: imageUrl,
              title: item.imageCaption || undefined,
            })
          }
        })
      }
    }
  })

  return images
}

function getImagesForPage(path: string): Array<{ url: string; title?: string }> {
  if (path.startsWith('/local-llms/')) {
    const slug = path.replace('/local-llms/', '')
    const key = LLM_SLUG_TO_KEY[slug]
    if (key) return extractImagesFromArticle(llmContent, key)
  }

  if (path.startsWith('/prompt-engineering/')) {
    const slug = path.replace('/prompt-engineering/', '')
    const key = PE_SLUG_TO_KEY[slug]
    if (key) return extractImagesFromArticle(peContent, key)
  }

  if (path.startsWith('/power-local-llm/')) {
    const slug = path.replace('/power-local-llm/', '')
    const key = POWER_LLM_SLUG_TO_KEY[slug]
    if (key) return extractImagesFromArticle(powerLLMContent, key)
  }

  if (path.startsWith('/prompt-bites/')) {
    const slug = path.replace('/prompt-bites/', '')
    const key = PROMPT_BITES_SLUG_TO_KEY[slug]
    if (key) return extractImagesFromArticle(promptBitesContent, key)
  }

  if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    const postId = SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]
    if (postId && blogContent[postId as keyof typeof blogContent]) {
      const post = blogContent[postId as keyof typeof blogContent] as any
      const en = post?.en || post?.['en']
      if (en && en.sections) {
        const images: Array<{ url: string; title?: string }> = []
        Object.values(en.sections).forEach((section: any) => {
          if (section && section.image) {
            const imageUrl = section.image.startsWith('/') ? section.image : `/${section.image}`
            images.push({
              url: imageUrl,
              title: section.imageCaption || undefined,
            })
          }
        })
        return images
      }
    }
  }

  return []
}

type Page = {
  path: string
  priority: number
  changefreq: 'weekly' | 'monthly'
  lastmod: string
}

// Pages that exist only at the English canonical URL — no /{lang}/path routes.
// Listing these with path-prefix alternates in the sitemap causes Google to crawl
// non-existent URLs and receive 404s. /waitlist now has real /{lang}/waitlist
// routes (src/app/{lang}/waitlist/page.tsx) so it no longer belongs here.
const ENGLISH_ONLY_PATHS = new Set<string>([])

const STATIC_PAGES: Page[] = [
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
]

const PE_PAGES: Page[] = [
  { path: '/prompt-engineering', priority: 0.9, changefreq: 'weekly', lastmod: '2026-05-26' },
  ...Object.keys(PE_SLUG_TO_KEY)
    .filter(slug => hasRealContent(peContent, PE_SLUG_TO_KEY[slug]))
    .filter(slug => !NOINDEX_PAGES.has(`/prompt-engineering/${slug}`))
    .map(slug => ({
      path: `/prompt-engineering/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: articleLastmod(peContent, PE_SLUG_TO_KEY[slug], '2026-05-26'),
    })),
]

const BLOG_PAGES: Page[] = [
  { path: '/blog', priority: 0.7, changefreq: 'weekly', lastmod: '2026-03-15' },
  ...Object.keys(SLUG_TO_POST_ID).map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: getBlogPostIsoDate(SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]),
  })),
]

const FRAMEWORK_PAGES: Page[] = [
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

const LOCAL_LLM_PAGES: Page[] = [
  { path: '/local-llms', priority: 0.9, changefreq: 'weekly', lastmod: '2026-05-26' },
  ...Object.keys(LLM_SLUG_TO_KEY)
    .filter(slug => hasRealContent(llmContent, LLM_SLUG_TO_KEY[slug]))
    .map(slug => ({
      path: `/local-llms/${slug}`,
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: articleLastmod(llmContent, LLM_SLUG_TO_KEY[slug], '2026-05-26'),
    })),
]

const POWER_LOCAL_LLM_PAGES: Page[] = [
  ...(POWER_LLM_HUB_PUBLISHED
    ? [{ path: '/power-local-llm', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-05-26' }]
    : []),
  ...Array.from(POWER_LLM_PUBLISHED_SLUGS).map(slug => ({
    path: `/power-local-llm/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(powerLLMContent, POWER_LLM_SLUG_TO_KEY[slug], '2026-05-26'),
  })),
]

const PROMPT_BITES_PAGES: Page[] = [
  ...(PROMPT_BITES_HUB_PUBLISHED
    ? [{ path: '/prompt-bites', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-05-26' }]
    : []),
  ...Array.from(PROMPT_BITES_PUBLISHED_SLUGS).map(slug => ({
    path: `/prompt-bites/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(promptBitesContent, PROMPT_BITES_SLUG_TO_KEY[slug], '2026-05-26'),
  })),
]

const SMART_HOME_PAGES: Page[] = [
  ...(SMART_HOME_HUB_PUBLISHED
    ? [{ path: '/smart-home', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-06-05' }]
    : []),
  ...Array.from(SMART_HOME_PUBLISHED_SLUGS).map(slug => ({
    path: `/smart-home/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(smartHomeContent, SMART_HOME_SLUG_TO_KEY[slug], '2026-06-05'),
  })),
]

const BALCONY_SOLAR_PAGES: Page[] = [
  ...(BALCONY_SOLAR_HUB_PUBLISHED
    ? [{ path: '/balcony-solar', priority: 0.9, changefreq: 'weekly' as const, lastmod: '2026-07-02' }]
    : []),
  ...Array.from(BALCONY_SOLAR_PUBLISHED_SLUGS).map(slug => ({
    path: `/balcony-solar/${slug}`,
    priority: 0.8,
    changefreq: 'monthly' as const,
    lastmod: articleLastmod(balconySolarContent, BALCONY_SOLAR_SLUG_TO_KEY[slug], '2026-07-02'),
  })),
]

const PAGES: Page[] = [
  ...STATIC_PAGES,
  ...PE_PAGES,
  ...BLOG_PAGES,
  ...FRAMEWORK_PAGES,
  ...LOCAL_LLM_PAGES,
  ...POWER_LOCAL_LLM_PAGES,
  ...PROMPT_BITES_PAGES,
  ...SMART_HOME_PAGES,
  ...BALCONY_SOLAR_PAGES,
]

const POWER_LLM_PUBLISHED_PATHS: ReadonlySet<string> = new Set([
  ...(POWER_LLM_HUB_PUBLISHED ? ['/power-local-llm'] : []),
  ...Array.from(POWER_LLM_PUBLISHED_SLUGS).map(slug => `/power-local-llm/${slug}`),
])

const PROMPT_BITES_PUBLISHED_PATHS: ReadonlySet<string> = new Set([
  ...(PROMPT_BITES_HUB_PUBLISHED ? ['/prompt-bites'] : []),
  ...Array.from(PROMPT_BITES_PUBLISHED_SLUGS).map(slug => `/prompt-bites/${slug}`),
])

const SMART_HOME_PUBLISHED_PATHS: ReadonlySet<string> = new Set([
  ...(SMART_HOME_HUB_PUBLISHED ? ['/smart-home'] : []),
  ...Array.from(SMART_HOME_PUBLISHED_SLUGS).map(slug => `/smart-home/${slug}`),
])

const BALCONY_SOLAR_PUBLISHED_PATHS: ReadonlySet<string> = new Set([
  ...(BALCONY_SOLAR_HUB_PUBLISHED ? ['/balcony-solar'] : []),
  ...Array.from(BALCONY_SOLAR_PUBLISHED_SLUGS).map(slug => `/balcony-solar/${slug}`),
])

function isExcluded(path: string): boolean {
  if (POWER_LLM_PUBLISHED_PATHS.has(path)) return false
  if (PROMPT_BITES_PUBLISHED_PATHS.has(path)) return false
  if (SMART_HOME_PUBLISHED_PATHS.has(path)) return false
  if (BALCONY_SOLAR_PUBLISHED_PATHS.has(path)) return false
  return EXCLUDED_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`))
}

const LANGS = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar', 'ko'] as const

function hasSections(article: any): boolean {
  return !!article && Object.keys(article?.sections ?? {}).length > 0
}

// Returns the languages that actually have real content for an ARTICLE path, mirroring
// the per-page `availableLangsForMeta` (hasSections) check the render routes use for their
// own <link rel="alternate"> tags. Returns null for non-article paths (static pages, hubs,
// frameworks) which are UI-translated and available in every language.
// The sitemap must only emit a <loc> + hreflang alternate for a language that this returns,
// so sitemap hreflang exactly matches what each live page declares.
function availableLangsForPath(path: string): readonly string[] | null {
  const clusters: Array<[string, Record<string, any>, Record<string, string>]> = [
    ['/local-llms/', llmContent, LLM_SLUG_TO_KEY],
    ['/prompt-engineering/', peContent, PE_SLUG_TO_KEY],
    ['/power-local-llm/', powerLLMContent, POWER_LLM_SLUG_TO_KEY],
    ['/prompt-bites/', promptBitesContent, PROMPT_BITES_SLUG_TO_KEY],
    ['/smart-home/', smartHomeContent, SMART_HOME_SLUG_TO_KEY],
    ['/balcony-solar/', balconySolarContent, BALCONY_SOLAR_SLUG_TO_KEY],
  ]
  for (const [prefix, contentMap, slugMap] of clusters) {
    if (path.startsWith(prefix)) {
      const slug = path.slice(prefix.length)
      const key = slugMap[slug]
      if (!key || !contentMap[key]) return ['en']
      let langs = LANGS.filter((l) => hasSections(contentMap[key][l]))
      if (prefix === '/balcony-solar/') {
        // Balcony Solar rolls out languages one at a time (see LANG_ROLLOUT in
        // published.ts) — don't sitemap/hreflang a language before it's cleared,
        // even though its translated sections already exist in the content file.
        langs = langs.filter((l) => isBalconySolarLangPublished(slug, l))
      }
      return langs.length ? langs : ['en']
    }
  }
  if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length)
    const postId = (SLUG_TO_POST_ID as Record<string, string>)[slug]
    const post = postId ? (blogContent as Record<string, any>)[postId] : undefined
    if (!post) return ['en']
    const langs = LANGS.filter((l) => hasSections(post[l]))
    return langs.length ? langs : ['en']
  }
  return null // non-article (static / hub / frameworks) — all languages
}

export async function GET() {
  const languages = LANGS

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'

  PAGES.forEach(({ path, priority, changefreq, lastmod }) => {
    if (isExcluded(path)) return
    if (NOINDEX_PAGES.has(path)) return // guardrail: never emit a robots-disallowed / noindex path

    const pageImages = getImagesForPage(path)

    // Languages to emit for this path: article paths → only languages that actually have
    // real content (matches the live page's own <link rel="alternate"> tags); non-article
    // paths (static / hubs / frameworks) → all languages.
    const emitLangs = availableLangsForPath(path) ?? languages

    // English-only pages: emit a single entry without lang-prefix variants so
    // Google doesn't crawl /{lang}/path URLs that don't exist.
    if (ENGLISH_ONLY_PATHS.has(path)) {
      xml += '  <url>\n'
      xml += `    <loc>${escapeXml(`${BASE}${path}`)}</loc>\n`
      xml += `    <lastmod>${lastmod}</lastmod>\n`
      xml += `    <changefreq>${changefreq}</changefreq>\n`
      xml += `    <priority>${priority}</priority>\n`
      xml += '  </url>\n'
      return
    }

    emitLangs.forEach((lang) => {
      const langPath = lang === 'en' ? path : (path === '' ? `/${lang}` : `/${lang}${path}`)

      xml += '  <url>\n'
      xml += `    <loc>${escapeXml(`${BASE}${langPath}`)}</loc>\n`

      // Add hreflang alternates — only for languages this path actually serves
      emitLangs.forEach((otherLang) => {
        const otherPath = otherLang === 'en' ? path : (path === '' ? `/${otherLang}` : `/${otherLang}${path}`)
        xml += `    <xhtml:link rel="alternate" hreflang="${otherLang}" href="${escapeXml(`${BASE}${otherPath}`)}" />\n`
      })
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(`${BASE}${path}`)}" />\n`

      // Add images with proper serialization
      pageImages.forEach((img) => {
        const fullImageUrl = `${BASE}${img.url}`
        xml += '    <image:image>\n'
        xml += `      <image:loc>${escapeXml(fullImageUrl)}</image:loc>\n`
        if (img.title) {
          xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`
        }
        xml += '    </image:image>\n'
      })

      xml += `    <lastmod>${lastmod}</lastmod>\n`
      xml += `    <changefreq>${changefreq}</changefreq>\n`
      xml += `    <priority>${priority}</priority>\n`
      xml += '  </url>\n'
    })
  })

  xml += '</urlset>\n'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
