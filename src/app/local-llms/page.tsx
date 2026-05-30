import type { Metadata } from 'next'
import { translations } from '@/translations'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'
import { truncateTitle } from '@/lib/utils'
import { generateLocalLlmsJsonLd } from '@/lib/local-llms/schema'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: truncateTitle(t.localLlmsHubTitle),
    description: t.localLlmsHubDescription,
    alternates: generateAlternates('/local-llms', selectedLang, true, undefined, ['ja', 'zh', 'de', 'fr']),
    openGraph: {
      title: t.localLlmsHubTitle,
      description: t.localLlmsHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.localLlmsHubTitle,
      description: selectedLang === 'en'
        ? 'Run AI locally in 5 min with Ollama. $0/token, offline, private. Hardware guides, model rankings, LM Studio — May 2026.'
        : t.localLlmsHubDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LocalLLMsPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh', 'es', 'pt', 'ar']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const t = translations[selectedLang as keyof typeof translations]
  const langSuffix = selectedLang === 'en' ? '' : `?lang=${selectedLang}`
  const canonicalUrl = `https://www.promptquorum.com/local-llms${langSuffix}`

  const jsonLd = generateLocalLlmsJsonLd(selectedLang as any, canonicalUrl, langSuffix)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocalLLMsHub initialLang={selectedLang as any} />
    </>
  )
}
