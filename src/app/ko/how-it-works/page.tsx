import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.howItWorksMetaTitle,
    description: t.howItWorksMetaDescription,
    alternates: generateAlternates('/how-it-works', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
    },
  }
}

export default async function KoHowItWorksPage() {
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'PromptQuorum 작동 방식 — 작성, 최적화, 전송, Quorum',
      'url': 'https://www.promptquorum.com/ko/how-it-works',
      'inLanguage': 'ko',
      'description': 'PromptQuorum 4단계 워크플로우 완전 가이드: 9개 프레임워크로 구조화된 프롬프트 작성, LLM 기반 최적화, 25개 이상 AI 서비스에 원클릭 전송, 다중 모델 Quorum 분석.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', 'position': 2, 'name': '작동 방식', 'item': 'https://www.promptquorum.com/ko/how-it-works' },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang="ko" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
