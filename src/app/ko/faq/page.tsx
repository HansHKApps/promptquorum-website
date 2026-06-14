import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function KoFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="ko" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: 'ko',
            mainEntity: [
              { '@type': 'Question', name: 'PromptQuorum은 무료인가요?', acceptedAnswer: { '@type': 'Answer', text: '네. PromptQuorum은 무료로 사용할 수 있습니다. 자신의 API 키를 가져오거나, 로컬 LLM을 사용하거나, 프롬프트 최적화를 위한 무료 테스트 백엔드 서비스를 이용할 수 있습니다.' } },
              { '@type': 'Question', name: '개인정보 보호는 어떻게 작동하나요?', acceptedAnswer: { '@type': 'Answer', text: '제로 텔레메트리, 제로 추적, 데이터 수집 없음. API 키는 브라우저의 localStorage에만 저장되며 어떤 PromptQuorum 서버에도 전송되지 않습니다.' } },
              { '@type': 'Question', name: '어떤 AI 제공업체가 지원되나요?', acceptedAnswer: { '@type': 'Answer', text: '25개 이상의 AI 제공업체가 포함됩니다: OpenAI, Anthropic Claude, Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, 그리고 Ollama, LM Studio, Jan AI, GPT4All 및 OpenAI 호환 엔드포인트 등 모든 로컬 제공업체.' } },
              { '@type': 'Question', name: 'PromptQuorum은 어떤 플랫폼에서 실행되나요?', acceptedAnswer: { '@type': 'Answer', text: '데스크톱 앱(Mac, Windows via Electron), 웹 애플리케이션, 이후 모바일(iOS 및 Android via Capacitor). 로컬 LLM과 함께 완전히 오프라인으로 작동합니다.' } },
              { '@type': 'Question', name: 'PromptQuorum의 차별점은 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum은 단일 브라우저 기반 도구에서 프롬프트의 전체 생명 주기를 커버합니다: 9개 프레임워크를 활용한 구조화된 작성, AI 기반 반복 최적화(8가지 정제 유형), 25개 이상의 AI 서비스로의 원클릭 전송, 합의 점수 산정을 위한 13가지 Quorum 분석 — 모두 데이터가 기기를 벗어나지 않고 처리됩니다.' } },
              { '@type': 'Question', name: '사용 제한이 있나요?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum 측에서는 어떤 제한도 없습니다. 사용량은 API 키나 로컬 LLM 리소스에 의해서만 제한됩니다.' } },
              { '@type': 'Question', name: '프롬프트 엔지니어링이란 무엇이며 왜 중요한가요?', acceptedAnswer: { '@type': 'Answer', text: '프롬프트 엔지니어링은 AI 모델에 대한 입력을 설계해 더 정확하고 유용하며 신뢰할 수 있는 출력을 얻는 실천입니다. 테스트에서 프레임워크 필드를 갖춘 구조화된 프롬프트는 LLM 평가 점수를 25~45% 높입니다. PromptQuorum은 9개의 내장 프레임워크로 이를 자동화합니다.' } },
              { '@type': 'Question', name: 'PromptQuorum은 어떻게 프롬프트를 최적화하나요?', acceptedAnswer: { '@type': 'Answer', text: '연결된 LLM이 프레임워크의 원시 필드를 정밀 프롬프트로 변환합니다. 이후 8가지 원클릭 정제로 반복적으로 개선할 수 있습니다. 모든 단계가 버전 기록에 저장되므로 언제든지 되돌릴 수 있습니다.' } },
              { '@type': 'Question', name: 'PromptQuorum에 내장된 프롬프트 프레임워크는 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '9가지 프레임워크: Single Prompt Line, APE, CRAFT, CO-STAR(싱가포르 GPT-4 대회 우승), SPECS, RISEN, TRACE, Google Prompt, RTF. 또한 2개의 완전히 사용자 정의 프레임워크를 만들 수 있습니다.' } },
              { '@type': 'Question', name: 'CO-STAR 프레임워크란 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR는 Context(맥락), Objective(목표), Style(스타일), Tone(어조), Audience(대상), Response(응답 형식)의 약자입니다. 싱가포르 GPT-4 프롬프트 엔지니어링 대회에서 우승했으며, 비즈니스 커뮤니케이션과 마케팅에 이상적입니다.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              inLanguage: 'ko',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/ko/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
