import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import { LandingPageServer } from '@/components/LandingPageServer'
import { ConfirmedToast } from '@/components/ConfirmedToast'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations['ko' as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

export default async function KoHome() {
  return (
    <>
      <ConfirmedToast />
      <LandingPageServer initialLang="ko" />

      {/* FAQPage Schema — 8가지 주요 질문 (구조화된 스니펫용) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'inLanguage': 'ko',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'PromptQuorum이란 무엇인가요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum은 여러 AI 모델에 프롬프트를 전송하고 합의를 분석하는 도구입니다. 9가지 프롬프트 엔지니어링 프레임워크 중 하나를 사용해 구조화된 프롬프트를 작성하면, GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek 등 25개 이상의 모델에 동시에 전송됩니다. PromptQuorum은 모든 응답을 병렬로 수집하고 합의 분석을 수행하여 단일 모델에 의존하는 대신 통합되고 검증된 판단을 제공합니다.'
                }
              },
              {
                '@type': 'Question',
                'name': 'PromptQuorum은 어떻게 작동하나요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum은 4단계로 작동합니다: (1) 작성 — 프롬프트 프레임워크(CO-STAR, CRAFT, RISEN, APE 등)를 선택하고 구조화된 필드를 채웁니다; (2) 최적화 — 연결된 모델이 필드를 정밀한 프롬프트로 변환하며 클릭 한 번으로 8가지 개선을 적용합니다; (3) 전송 — 최적화된 프롬프트를 클릭 한 번으로 25개 이상의 AI 서비스에 동시 전송합니다; (4) Quorum — 모든 응답을 분석 탭에 붙여넣고 합의 요약, 환각 감지, 모순 감지, 최선의 답변 선택 등 13가지 분석 유형 중 선택합니다.'
                }
              },
              {
                '@type': 'Question',
                'name': 'PromptQuorum은 어떤 AI 모델을 지원하나요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum은 OpenAI GPT-4o 및 o1, Anthropic Claude 3.5 Sonnet 및 Claude 4, Google Gemini 2.0 Flash 및 1.5 Pro, xAI Grok, DeepSeek, Mistral Large, Cohere Command R+, Together AI 및 Groq를 통한 Meta Llama, Perplexity 등 25개 이상의 클라우드 AI 모델을 지원합니다. 또한 Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, KoboldCpp 및 OpenAI 호환 엔드포인트를 포함한 모든 주요 로컬 모델 환경도 지원합니다.'
                }
              },
              {
                '@type': 'Question',
                'name': '합의 점수란 무엇이며 왜 중요한가요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': '합의 점수는 독립적인 모델들이 특정 답변에 얼마나 동의하는지를 측정합니다. 5개 이상의 모델이 동일한 답변을 제공하면, 단일 모델의 답변보다 그 신뢰도가 훨씬 높습니다. Quorum 분석은 합의 지점을 추출하고, 모델 간 모순을 감지하며, 전반적인 신뢰 수준을 평가합니다. 이 방법은 현재 AI 환각을 감지하는 가장 신뢰할 수 있는 방법입니다 — 한 모델이 주장하는데 네 개의 다른 모델이 언급하지 않는 내용은 환각의 강력한 신호입니다.'
                }
              },
              {
                '@type': 'Question',
                'name': 'PromptQuorum 사용 비용은 얼마인가요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum은 무료입니다. OpenAI, Anthropic, Google 등 클라우드 AI 제공업체에서 자신의 API 키(BYOM)를 가져오면 PromptQuorum이 모델 사용에 요금을 부과하지 않습니다. API 키 없이 Ollama나 LM Studio 같은 무료 로컬 모델을 사용할 수도 있습니다. 구독료 없음, 계정 불필요, 사용 제한 없음.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Ollama나 LM Studio 같은 로컬 모델과 함께 PromptQuorum을 사용할 수 있나요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': '네. PromptQuorum은 Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga 및 모든 OpenAI 호환 로컬 엔드포인트와 기본적으로 연결됩니다. 로컬 모델을 사용하면 PromptQuorum은 완전히 오프라인으로 작동합니다 — 인터넷도 API 키도 필요하지 않습니다. 프롬프트, 응답, 결과가 기기를 벗어나지 않습니다.'
                }
              },
              {
                '@type': 'Question',
                'name': 'PromptQuorum은 내 데이터와 개인정보를 어떻게 보호하나요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum은 추적 데이터를 수집하지 않습니다. API 키는 브라우저의 localStorage에만 저장되며 PromptQuorum 서버로 전송되지 않습니다 — 모든 모델 호출은 브라우저에서 선택한 제공업체로 직접 전달됩니다. PromptQuorum은 프롬프트, 응답 또는 API 키를 볼 수 없습니다. 최대 개인정보 보호를 위해 로컬 모델(Ollama 또는 LM Studio)을 사용하세요: 이 모드에서는 어떤 데이터도 기기를 벗어나지 않습니다.'
                }
              },
              {
                '@type': 'Question',
                'name': 'PromptQuorum 베타 접근은 어떻게 받나요?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum 홈페이지의 대기자 명단 양식에 이메일을 입력하세요. 베타 버전은 2026년 7월에 출시될 예정입니다. 얼리 액세스 회원은 평생 프리미엄 기능, 우선 지원, 제품 로드맵에 대한 직접적인 영향력을 받습니다. 데스크톱 앱(macOS 및 Windows)과 웹 버전이 출시 시 동시에 제공됩니다.'
                }
              }
            ]
          }),
        }}
      />

      {/* HowTo Schema — PromptQuorum 4단계 워크플로우 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'inLanguage': 'ko',
            'name': 'PromptQuorum으로 프롬프트를 최적화하고 AI 모델을 비교하는 방법',
            'description': '아이디어를 정밀한 프롬프트로 변환하고 25개 이상의 AI 모델에서 응답을 비교하는 4단계.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': '구조화된 프롬프트 작성',
                'text': '9가지 프롬프트 엔지니어링 프레임워크(CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line) 중 하나를 선택하고 구조화된 필드를 채웁니다. 프레임워크 어시스턴트가 작업에 가장 적합한 옵션을 추천합니다.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': '모델로 프롬프트 최적화',
                'text': '연결된 모델(ChatGPT, Claude, Gemini 또는 Ollama 같은 로컬 모델)이 프레임워크 필드를 정밀한 프롬프트로 변환합니다. 클릭 한 번으로 8가지 개선을 단계적으로 적용합니다. 모든 버전이 기록에 저장됩니다.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': '여러 AI 모델에 전송',
                'text': '클릭 한 번으로 최적화된 프롬프트를 25개 이상의 AI 서비스에 동시 전송합니다. 응답이 병렬로 도착합니다 — 한 모델이 끝날 때까지 기다릴 필요가 없습니다.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': '모델 간 합의 분석',
                'text': '모든 응답을 분석 탭에 붙여넣고 13가지 분석 유형(합의 요약, 환각 감지, 모순 감지, 최선의 답변 선택 등) 중 선택합니다. 단일 모델에 의존하는 대신 검증된 판단을 얻습니다.',
                'image': 'https://www.promptquorum.com/og-image.png',
              }
            ]
          }),
        }}
      />
    </>
  )
}
