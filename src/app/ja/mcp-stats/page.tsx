// Locale entry point for /mcp-stats — path-prefixed at /ja/mcp-stats.
// src/app/{lang}/mcp-stats/page.tsx files for the other locales — all share
// McpStatsContent.tsx for rendering and mcp-stats-i18n.ts for copy. Linked
// from the homepage's "By the Numbers" block (all 9 locales) as the pitch
// that PromptQuorum is queryable by AI assistants, not just browsers.

import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, toOutputLocale } from '@/lib/i18n/constants'
import { getMcpUsageSnapshot } from '@/lib/mcp/usage'
import { McpStatsContent } from '@/components/tools/McpStatsContent'
import { t as tMcp } from '@/components/tools/mcp-stats-i18n'
import { t as tTools } from '@/components/tools/tools-i18n'

const LANG = 'ja' as const
const PATH = '/mcp-stats'
const LOCALIZED_PATH = (LANG as string) === 'en' ? PATH : `/${LANG}${PATH}`

// Must never be cached — this reflects live counter state, same reasoning as
// the JSON endpoint at src/app/api/mcp-status/route.ts.
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const title = tMcp('pageMetaTitle', LANG)
  const description = tMcp('pageMetaDescription', LANG)
  return {
    title: `${title} | PromptQuorum`,
    description,
    alternates: generateAlternates(PATH, LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: { title, description, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'website', siteName: 'PromptQuorum' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function McpStatsPage() {
  const snapshot = await getMcpUsageSnapshot()
  const title = tMcp('pageMetaTitle', LANG)
  const description = tMcp('pageMetaDescription', LANG)

  return (
    <>
      <McpStatsContent lang={LANG} snapshot={snapshot} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': `https://www.promptquorum.com${LOCALIZED_PATH}`,
                url: `https://www.promptquorum.com${LOCALIZED_PATH}`,
                name: title,
                description,
                inLanguage: toOutputLocale(LANG),
                isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: tTools('breadcrumbHome', LANG), item: 'https://www.promptquorum.com' },
                  { '@type': 'ListItem', position: 2, name: title, item: `https://www.promptquorum.com${LOCALIZED_PATH}` },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
