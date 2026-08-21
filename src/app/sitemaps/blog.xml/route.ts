import { PAGES } from '@/lib/sitemap/pages/blog'
import { renderSitemapXml, SITEMAP_XML_HEADERS } from '@/lib/sitemap/sitemap-shared'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(renderSitemapXml(PAGES), { headers: SITEMAP_XML_HEADERS })
}
