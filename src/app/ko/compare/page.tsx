import type { Metadata } from 'next'
import { translations } from '@/translations'
import { ComparePageClient } from '@/components/ComparePageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.compareMetaTitle,
    description: t.compareMetaDescription,
    alternates: generateAlternates('/compare', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.compareMetaTitle,
      description: t.compareMetaDescription,
    },
  }
}

export default async function KoComparePage() {
  return (
    <>
      <ComparePageClient initialLang="ko" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.promptquorum.com/ko/compare',
                'url': 'https://www.promptquorum.com/ko/compare',
                'name': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo — 멀티 LLM 도구 비교 (2026)',
                'description': 'PromptQuorum vs Poe vs LM Arena vs OpenMark vs AiZolo: 동시 전송, 합의 점수, 로컬 LLM 지원, API 키 제어를 2026년 기준으로 비교합니다.',
                'inLanguage': 'ko',
                'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
                  { '@type': 'ListItem', 'position': 2, 'name': '도구 비교', 'item': 'https://www.promptquorum.com/ko/compare' },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': '동일한 프롬프트를 여러 LLM에 동시에 비교할 수 있는 최선의 도구는 무엇인가요?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum은 프롬프트 동시 전송과 자동 합의 분석을 결합한 유일한 도구입니다 — 응답을 나란히 볼 수 있을 뿐만 아니라 모델들이 어디서 동의하고 어디서 다른지에 대한 판정도 제공합니다. Poe와 AiZolo는 멀티 모델 접근을 제공하지만 합의 점수는 생성하지 않습니다. LM Arena는 자동 분석 대신 인간 투표를 사용합니다. OpenMark는 개별 프롬프트를 평가하지만 모델 간 합의 판정을 생성하지 않습니다. 기능 정보는 2026년 3월 공개 문서를 기준으로 합니다.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Ollama나 LM Studio 같은 로컬 LLM을 지원하는 멀티 LLM 도구는 무엇인가요?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'PromptQuorum은 이 페이지에서 Ollama와 LM Studio를 통한 로컬 LLM 추론을 지원하는 유일한 도구입니다. 이는 민감한 프롬프트가 절대 내 기기를 벗어나지 않는다는 것을 의미합니다. Poe, LM Arena, OpenMark, AiZolo는 2026년 3월 공개 문서 기준으로 클라우드 전용 서비스로 운영됩니다. 결정을 내리기 전에 각 도구의 현재 기능을 해당 공급업체에 직접 확인하세요.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': '멀티 LLM 도구에서 합의 점수란 무엇인가요?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '합의 점수는 여러 AI 모델이 특정 프롬프트에 얼마나 동의하는지에 대한 자동 분석입니다. PromptQuorum의 Quorum Verdict는 배포된 모든 모델 간의 동의도를 평가하고, 어디서 다른지 식별하며, 그 차이가 무엇을 의미하는지 설명합니다. 합의 점수가 높으면 모델 아키텍처 전반에 걸쳐 응답이 신뢰할 수 있다는 것을 나타냅니다. 합의 점수가 낮으면 불확실성을 나타내며 추가 조사가 필요합니다.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'PromptQuorum은 Poe와 어떻게 다른가요?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Quora 소유의 Poe는 접근성과 대화에 초점을 맞춘 멀티 모델 채팅 플랫폼입니다. PromptQuorum은 프롬프트 평가와 합의 점수에 초점을 맞춘 멀티 LLM 전송 및 분석 도구입니다. Poe는 모델 간 전환하거나 두 모델을 동시에 비교할 수 있습니다. PromptQuorum은 선택한 모든 모델에 동시 전송하고 어디서 동의하는지 자동으로 분석합니다 — 캐주얼 채팅이 아닌 고급 사용자와 개발자를 위해 설계된 근본적으로 다른 워크플로우입니다.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'PromptQuorum을 사용하려면 자신의 API 키가 필요한가요?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': '네. PromptQuorum은 OpenAI, Anthropic, Google, Mistral 등의 제공업체에서 자신의 API 키를 가져오는 사용자를 위해 설계되었습니다. 이를 통해 데이터가 자신의 통제 하에 있고, 사용이 자신의 상업적 조건에 따르며, 비용이 투명하게 유지됩니다. 또한 완전히 프라이빗한 추론을 선호하는 사용자를 위해 Ollama와 LM Studio를 통한 로컬 LLM 지원도 가능합니다.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
