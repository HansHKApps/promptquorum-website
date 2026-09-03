import { PAGES as STATIC_PAGES } from '@/lib/sitemap/pages/static'
import { PAGES as PE_PAGES } from '@/lib/sitemap/pages/prompt-engineering'
import { PAGES as LOCAL_LLM_PAGES } from '@/lib/sitemap/pages/local-llms'
import { PAGES as POWER_LOCAL_LLM_PAGES } from '@/lib/sitemap/pages/power-local-llm'
import { PAGES as PROMPT_BITES_PAGES } from '@/lib/sitemap/pages/prompt-bites'
import { PAGES as SMART_HOME_PAGES } from '@/lib/sitemap/pages/smart-home'
import { PAGES as BALCONY_SOLAR_PAGES } from '@/lib/sitemap/pages/balcony-solar'
import { PAGES as BLOG_PAGES } from '@/lib/sitemap/pages/blog'
import { BASE, latestLastmod, escapeXml, type Page } from '@/lib/sitemap/sitemap-shared'

export const dynamic = 'force-static'

// Sitemap index — one entry per child sitemap (see src/app/sitemaps/*.xml).
// robots.txt's `Sitemap: https://www.promptquorum.com/sitemap.xml` line does
// not need to change: crawlers follow a sitemap index exactly like a regular
// sitemap, just one level of indirection deeper (this is what the
// sitemap-index protocol is for). video-sitemap.xml is a separate, unrelated
// route and is not part of this index.
const CHILDREN: Array<{ slug: string; pages: Page[] }> = [
  { slug: 'static', pages: STATIC_PAGES },
  { slug: 'prompt-engineering', pages: PE_PAGES },
  { slug: 'local-llms', pages: LOCAL_LLM_PAGES },
  { slug: 'power-local-llm', pages: POWER_LOCAL_LLM_PAGES },
  { slug: 'prompt-bites', pages: PROMPT_BITES_PAGES },
  { slug: 'smart-home', pages: SMART_HOME_PAGES },
  { slug: 'balcony-solar', pages: BALCONY_SOLAR_PAGES },
  { slug: 'blog', pages: BLOG_PAGES },
]

export async function GET() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  CHILDREN.forEach(({ slug, pages }) => {
    xml += '  <sitemap>\n'
    xml += `    <loc>${escapeXml(`${BASE}/sitemaps/${slug}.xml`)}</loc>\n`
    xml += `    <lastmod>${latestLastmod(pages)}</lastmod>\n`
    xml += '  </sitemap>\n'
  })

  xml += '</sitemapindex>\n'

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
