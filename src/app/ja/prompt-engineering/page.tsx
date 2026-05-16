import type { Metadata } from 'next'
import type { Language } from '@/translations'
import { translations } from '@/translations'
import { PromptEngineeringHub } from '@/components/PromptEngineeringHub'
import { peContent } from '@/lib/prompt-engineering/content'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.promptEngineeringHubTitle,
    description: t.promptEngineeringHubDescription,
    alternates: generateAlternates('/prompt-engineering', lang, true, undefined, ['ja']),
    openGraph: {
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubOgDescription ?? t.promptEngineeringHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.promptEngineeringHubTitle,
      description: t.promptEngineeringHubTwitterDescription ?? t.promptEngineeringHubDescription,
    },
  }
}

export default async function JaPromptEngineeringPage() {
  const titlesMap: Record<string, Partial<Record<Language, string>>> = Object.fromEntries(
    Object.entries(peContent).map(([key, langMap]) => [
      key,
      Object.fromEntries(
        Object.entries(langMap).map(([lang, article]) => [lang, article.title])
      ),
    ])
  )

  return <PromptEngineeringHub initialLang="ja" titlesMap={titlesMap} />
}
