import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS, getLangDir } from '@/lib/i18n/constants'
import { localAiApps, TOTAL_TOOL_COUNT } from '@/lib/power-local-llm/apps-barrel'
import { CanIRunThisClient, type AppPickerEntry } from '@/components/tools/CanIRunThisClient'
import { t } from '@/components/tools/tools-i18n'

const LANG = 'de' as const
const PATH = '/tools/can-i-run-this'
const LOCALIZED_PATH = (LANG as string) === 'en' ? PATH : `/${LANG}${PATH}`

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  const title = t('canIRunThisPageTitle', LANG)
  const description = t('canIRunThisPageLead', LANG, { appCount: TOTAL_TOOL_COUNT })
  return {
    title: `${title} | PromptQuorum`,
    description,
    alternates: generateAlternates(PATH, LANG, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: { title, description, images: [{ url: '/og-image.png', alt: 'PromptQuorum' }], type: 'website', siteName: 'PromptQuorum' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

function buildAppIndex(): AppPickerEntry[] {
  return localAiApps
    .filter((a) => a.status !== 'planned')
    .map((a) => ({ slug: a.slug, name: a.name, tagline: a.tagline.en ?? '' }))
}

export default function CanIRunThisPage() {
  const appIndex = buildAppIndex()
  const appCount = TOTAL_TOOL_COUNT

  return (
    <>
      <main dir={getLangDir(LANG)} className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-3">{t('canIRunThisPageTitle', LANG)}</h1>
          <p className="text-lg text-text-secondary mb-8">{t('canIRunThisPageLead', LANG, { appCount })}</p>
          <CanIRunThisClient lang={LANG} appIndex={appIndex} />
        </div>
      </main>
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
                name: t('canIRunThisPageTitle', LANG),
                description: t('canIRunThisPageLead', LANG, { appCount }),
                inLanguage: 'de',
                isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t('breadcrumbHome', LANG), item: 'https://www.promptquorum.com' },
                  { '@type': 'ListItem', position: 2, name: t('canIRunThisPageTitle', LANG), item: `https://www.promptquorum.com${LOCALIZED_PATH}` },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
