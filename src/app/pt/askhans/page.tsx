// Locale entry point for /askhans — path-prefixed at /pt/askhans. Ask Hans usage statistics
// (totals + report), shared by all 9 locales via AskHansBlock.tsx and ask-hans-block-i18n.ts. Linked from the
// homepage "By the Numbers" block. 404 while Ask Hans is switched off (ASK_HANS_ENABLED).

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, toOutputLocale, ogLocale, getLangDir } from '@/lib/i18n/constants'
import { parseCard, cardImageUrl } from '@/lib/askhans/card'
import { AskHansBlock } from '@/components/tools/AskHansBlock'
import { tAsk } from '@/components/tools/ask-hans-block-i18n'
import { t as tTools } from '@/components/tools/tools-i18n'

const LANG = 'pt' as const
const PATH = '/askhans'
const LOCALIZED_PATH = (LANG as string) === 'en' ? PATH : `/${LANG}${PATH}`

// Live counters — never cached.
export const dynamic = 'force-dynamic'

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ card?: string | string[] }> }): Promise<Metadata> {
  const card = parseCard((await searchParams).card)
  const image = card ? { url: cardImageUrl(LANG, card), width: 1200, height: 630, alt: 'PromptQuorum Ask Hans' } : { url: '/og-image.png', alt: 'PromptQuorum' }
  const title = tAsk('pageMetaTitle', LANG)
  const description = tAsk('pageMetaDescription', LANG)
  return {
    title: `${title} | PromptQuorum`,
    description,
    alternates: generateAlternates(PATH, LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: { title, description, images: [image], type: 'website', siteName: 'PromptQuorum', ...ogLocale(LANG) },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  }
}

export default async function AskHansPage() {
  if (process.env.ASK_HANS_ENABLED !== 'true') notFound()
  const title = tAsk('pageMetaTitle', LANG)
  const description = tAsk('pageMetaDescription', LANG)

  return (
    <div dir={getLangDir(LANG)} className="min-h-screen bg-white text-text-primary">
      <AskHansBlock lang={LANG} />
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
    </div>
  )
}
