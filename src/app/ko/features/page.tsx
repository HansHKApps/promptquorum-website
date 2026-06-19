import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.featuresMetaTitle,
    description: t.featuresMetaDescription,
    alternates: generateAlternates('/features', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
    },
  }
}

export default async function KoFeaturesPage() {
  return (
    <>
      <FeaturesPageClient initialLang="ko" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'PromptQuorum 기능 — 프롬프트 엔지니어링, 다중 모델 전송, Quorum 분석',
              'url': 'https://www.promptquorum.com/ko/features',
              'description': 'PromptQuorum 기능 살펴보기: 9가지 프롬프트 프레임워크, AI 최적화, 25개 이상의 AI 서비스 전송, 다중 모델 합의 분석, 환각 감지, 로컬 LLM 지원, 완전한 프라이버시.',
              'inLanguage': 'ko',
              'datePublished': '2026-04-05',
              'dateModified': '2026-04-05',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              'about': {
                '@type': 'SoftwareApplication',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
                { '@type': 'ListItem', 'position': 2, 'name': '기능', 'item': 'https://www.promptquorum.com/ko/features' },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
