import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'
import { Sparkles, Layers, Brain, Zap, Shield } from 'lucide-react'
import { PromptOptimizerShowcase } from '@/components/PromptOptimizerShowcase'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import { QuorumShowcase } from '@/components/QuorumShowcase'

export const dynamic = 'force-static'
export const revalidate = 86400

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'PQ Apps — PromptQuorum',
    description: 'PromptQuorum 앱의 작동 방식을 확인하세요: 내장된 프레임워크로 프롬프트를 작성하고, 25개 이상의 AI 모델에 전송하며, Quorum 분석으로 결과를 비교합니다.',
    alternates: generateAlternates('/pq-apps', 'ko', true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: 'PQ Apps — PromptQuorum',
      description: 'PromptQuorum 앱의 작동 방식을 확인하세요: 내장된 프레임워크로 프롬프트를 작성하고, 25개 이상의 AI 모델에 전송하며, Quorum 분석으로 결과를 비교합니다.',
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'PQ Apps — PromptQuorum',
      description: 'PromptQuorum 앱의 작동 방식을 확인하세요: 내장된 프레임워크로 프롬프트를 작성하고, 25개 이상의 AI 모델에 전송하며, Quorum 분석으로 결과를 비교합니다.',
    },
  }
}

export default function KoPQAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'url': 'https://www.promptquorum.com/ko/pq-apps',
              'name': 'PQ Apps — PromptQuorum',
              'description': 'PromptQuorum 앱의 작동 방식을 확인하세요: 내장된 프레임워크로 프롬프트를 작성하고, 25개 이상의 AI 모델에 전송하며, Quorum 분석으로 결과를 비교합니다.',
              'inLanguage': 'ko',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "PromptQuorum은 무료인가요?", "acceptedAnswer": {"@type": "Answer", "text": "네. PromptQuorum은 무료로 사용할 수 있습니다. 자신의 API 키를 가져오거나, 로컬 LLM을 사용하거나, 프롬프트 최적화를 위한 무료 테스트 백엔드 서비스를 이용할 수 있습니다."}}, {"@type": "Question", "name": "개인정보 보호는 어떻게 작동하나요?", "acceptedAnswer": {"@type": "Answer", "text": "데이터의 행방은 사용자가 결정합니다. LM Studio나 Ollama를 사용해 모든 것을 로컬에 유지하거나, 자신의 API 키를 사용하세요. 제로 텔레메트리, 제로 추적, 데이터 수집 없음 — 익명 사용 통계조차 수집하지 않습니다."}}, {"@type": "Question", "name": "어떤 AI 제공업체가 지원되나요?", "acceptedAnswer": {"@type": "Answer", "text": "25개 이상의 AI 제공업체가 포함됩니다: OpenAI(GPT-4, GPT-4o), Anthropic(Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, 그리고 모든 로컬 제공업체(Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga 및 OpenAI 호환 엔드포인트)."}}, {"@type": "Question", "name": "PromptQuorum은 어떤 플랫폼에서 실행되나요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 macOS, Windows, Linux(데스크톱 via Electron)에서 사용 가능합니다. 웹 애플리케이션은 개발 중이며, 그 다음 모바일(iOS 및 Android via Capacitor)이 출시됩니다. 로컬 LLM과 함께 완전히 오프라인으로 작동합니다."}}, {"@type": "Question", "name": "PromptQuorum의 차별점은 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 단일 브라우저 기반 도구에서 프롬프트의 전체 생명 주기를 커버합니다: 9개 프레임워크를 활용한 구조화된 작성, AI 기반 반복 최적화(8가지 정제 유형), 25개 이상의 AI 서비스로의 원클릭 전송, 합의 점수 산정을 위한 13가지 Quorum 분석 — 모두 데이터가 기기를 벗어나지 않고 처리됩니다."}}, {"@type": "Question", "name": "사용 제한이 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum 측에서는 어떤 제한도 없습니다. 사용량은 API 키나 로컬 LLM 리소스에 의해서만 제한됩니다."}}, {"@type": "Question", "name": "프롬프트 엔지니어링이란 무엇이며 왜 중요한가요?", "acceptedAnswer": {"@type": "Answer", "text": "프롬프트 엔지니어링은 AI 모델에 대한 입력을 설계해 더 정확하고 유용하며 신뢰할 수 있는 출력을 얻는 실천입니다. 테스트에서 프레임워크 필드를 갖춘 구조화된 프롬프트는 구조화되지 않은 입력에 비해 LLM 평가 점수를 25~45% 높입니다. PromptQuorum은 9개의 내장 프레임워크로 이를 자동화합니다 — 전문 지식이 필요 없습니다."}}, {"@type": "Question", "name": "PromptQuorum은 어떻게 프롬프트를 최적화하나요?", "acceptedAnswer": {"@type": "Answer", "text": "연결된 LLM이 프레임워크의 원시 필드를 정밀 프롬프트로 변환합니다. 이후 8가지 원클릭 정제(간결하게 만들기, 세부 사항 확장, 단계로 분해, 단순화, 구체성 높이기, 다중 전문가 상담, 품질 통제 추가, 사용자 정의 지시)로 반복적으로 개선할 수 있습니다. 모든 단계가 버전 기록에 저장되므로 언제든지 되돌릴 수 있습니다."}}, {"@type": "Question", "name": "PromptQuorum에 내장된 프롬프트 프레임워크는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum에는 9가지 프레임워크가 포함됩니다: Single Prompt Line, APE, CRAFT, CO-STAR(싱가포르 GPT-4 대회 우승), SPECS, RISEN, TRACE, Google Prompt, RTF. 또한 2개의 완전히 사용자 정의 프레임워크를 만들 수 있습니다."}}, {"@type": "Question", "name": "CO-STAR 프레임워크란 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "CO-STAR는 Context(맥락), Objective(목표), Style(스타일), Tone(어조), Audience(대상), Response(응답 형식)의 약자입니다. 싱가포르 GPT-4 프롬프트 엔지니어링 대회에서 우승했으며, 비즈니스 커뮤니케이션과 마케팅에 이상적입니다. PromptQuorum이 각 필드를 안내하고 최종 프롬프트를 자동으로 조합합니다."}}, {"@type": "Question", "name": "다중 모델 합의란 무엇이며 왜 가치 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "다중 모델 합의는 동일한 프롬프트를 여러 AI 모델에 보내 일치하는 부분을 찾는 것입니다. 5개의 독립적인 모델이 동일한 답변을 제시할 때 신뢰도는 단일 모델보다 훨씬 높습니다. 모순과 잠재적 환각도 자동으로 발견됩니다."}}, {"@type": "Question", "name": "PromptQuorum은 AI 환각을 어떻게 감지하나요?", "acceptedAnswer": {"@type": "Answer", "text": "Quorum 단계에서 여러 모델의 응답을 수집한 후 LLM이 환각 감지 분석을 실행합니다 — 하나의 모델 응답에만 나타나거나 사실적 합의와 모순되는 주장에 플래그를 답니다. 실행할 분석 유형을 선택하고 자유롭게 조합할 수 있습니다."}}, {"@type": "Question", "name": "Ollama나 LM Studio 같은 로컬 AI 모델과 함께 사용할 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네. PromptQuorum은 Ollama(localhost:11434), LM Studio(localhost:1234), Jan AI(localhost:1337), GPT4All(localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga 및 OpenAI 호환 엔드포인트에 기본으로 연결됩니다. 로컬 모델에는 API 키가 필요 없습니다 — 모든 것이 내 컴퓨터에서 실행됩니다."}}, {"@type": "Question", "name": "PromptQuorum을 완전히 오프라인으로 사용할 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네. Ollama나 LM Studio 같은 로컬 모델을 사용하면 PromptQuorum이 완전히 오프라인으로 작동합니다. 인터넷 연결이 필요 없습니다. 프롬프트, API 키, 결과가 기기를 벗어나지 않습니다."}}, {"@type": "Question", "name": "BYOM(Bring Your Own Model)이란 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "BYOM은 PromptQuorum이 자체 API 키로 LLM을 호출하지 않는다는 의미입니다. 모든 호출은 브라우저에서 선택한 제공업체(클라우드 또는 로컬)로 직접 전달됩니다. API 키는 브라우저의 localStorage에만 저장되며 어떤 PromptQuorum 서버에도 전송되지 않습니다."}}, {"@type": "Question", "name": "Dispatch 기능은 어떻게 작동하나요?", "acceptedAnswer": {"@type": "Answer", "text": "Dispatch는 최적화된 프롬프트를 한 번의 클릭으로 여러 AI 서비스에 전송합니다. 자동 전송 서비스(ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral 등)의 경우 PromptQuorum이 URL에 프롬프트를 미리 로드합니다. Perplexity는 로드 시 자동으로 제출됩니다. 모든 탭이 병렬로 열리며 1분 안에 모든 응답을 수집할 수 있습니다."}}, {"@type": "Question", "name": "Quorum 분석이란 무엇이며 어떤 유형이 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "Quorum 분석은 수집된 모든 AI 응답을 LLM으로 처리합니다. 4개 카테고리 13가지 분석 유형: 합성(합의 요약, 가중 병합, 원자적 사실 추출), 비교(중복 매핑, 모순 감지, 신뢰도 점수), 품질(완전성 검사, 환각 감지, 중복 제거), 추천(최선 답변 선택, 다중 모델 앙상블, 논쟁 표시)."}}, {"@type": "Question", "name": "결과를 내보낼 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네. Quorum 결과는 6가지 형식으로 내보낼 수 있습니다: .txt, .md, .json, .csv, .html, .pdf. 여러 형식을 선택하면 .zip 아카이브로 묶입니다. Chrome, Edge, Safari 16+에서는 File System Access API를 사용해 저장 폴더를 선택할 수 있습니다."}}, {"@type": "Question", "name": "프레임워크 마법사는 어떻게 작동하나요?", "acceptedAnswer": {"@type": "Answer", "text": "프레임워크 마법사가 작업에 관한 몇 가지 질문을 합니다 — 달성하려는 것, 필요한 출력 유형, 대상. 답변을 바탕으로 9가지 내장 옵션 중 가장 적합한 프레임워크를 추천하고 각 프레임워크가 프롬프트에 대해 생성할 내용을 나란히 비교해서 보여줍니다."}}, {"@type": "Question", "name": "스마트 온도 조정이란 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "각 최적화 전에 PromptQuorum이 프롬프트 텍스트를 분석하고 이상적인 LLM 온도를 제안합니다: 사실적 작업에는 ~0.2, 균형 있는 작업에는 ~0.7, 창의적 작업에는 ~0.85. 신뢰도가 60% 이상일 때만 표시됩니다. 동일한 의도 유형에 대해 3번 연속 일관된 선택을 하면 자동으로 적용됩니다."}}, {"@type": "Question", "name": "PromptQuorum은 ChatGPT, Claude, Gemini와 함께 작동하나요?", "acceptedAnswer": {"@type": "Answer", "text": "네. 설정에서 API 키를 추가하면 ChatGPT(GPT-4, GPT-4o), Anthropic Claude(3, 3.5), Google Gemini(1.5 Pro, Flash)를 최적화 LLM으로 사용할 수 있습니다. Dispatch 페이지에서는 API 키 없이도 세 서비스에 동시에 프롬프트를 전송할 수 있습니다."}}, {"@type": "Question", "name": "프롬프트의 버전 기록이 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네. 모든 최적화 단계와 정제가 읽기 쉬운 레이블(예: \"v2 — 간결하게 만들기 12:36\")과 함께 버전 기록에 자동 저장됩니다. 임의의 버전을 선택해 복원하고 거기서 새 정제를 시작할 수 있습니다. 아무것도 손실되지 않습니다."}}, {"@type": "Question", "name": "PromptQuorum은 어떤 출력 형식과 언어를 지원하나요?", "acceptedAnswer": {"@type": "Answer", "text": "LLM 출력 언어는 세션별로 구성 가능합니다: 영어, 독일어, 프랑스어, 스페인어, 이탈리아어, 포르투갈어, 중국어, 일본어. 응답 길이는 100~2000단어 사이에서 조정할 수 있습니다."}}, {"@type": "Question", "name": "PromptQuorum은 내 API 키를 어떻게 안전하게 처리하나요?", "acceptedAnswer": {"@type": "Answer", "text": "API 키는 브라우저의 localStorage에만 저장됩니다. 어떤 PromptQuorum 서버에도 전송되지 않고, 기록되지 않으며, 텔레메트리에 포함되지 않습니다(텔레메트리 자체가 없습니다). 설정에서 언제든지 지울 수 있습니다."}}, {"@type": "Question", "name": "PromptQuorum은 기업 또는 팀 사용에 적합한가요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 현재 개인 파워 유저 — 개발자, 연구자, 콘텐츠 크리에이터, AI를 많이 사용하는 전문가를 위해 설계되었습니다. 각 사용자는 자신의 API 키로 자체 인스턴스를 실행합니다. 엔터프라이즈 기능(공유 작업 공간, 팀 기록, 역할 기반 접근)은 로드맵에 있습니다."}}, {"@type": "Question", "name": "티칭 모드란 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "티칭 모드는 모든 최적화 결과 아래에 설명 상자를 추가해 각 변경이 이루어진 이유 — 적용된 프롬프트 엔지니어링 원칙과 그 효과 — 를 정확히 설명합니다. 도구를 사용하면서 프롬프트 엔지니어링을 배우고 싶은 개발자와 연구자를 위해 설계되었습니다."}}, {"@type": "Question", "name": "PromptQuorum은 어떻게 받을 수 있고 비용이 드나요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 무료 퍼블릭 베타 단계입니다. 데스크톱 앱을 직접 다운로드하세요 — 가입, 대기자 명단, 이메일이 필요하지 않습니다."}}, {"@type": "Question", "name": "PromptQuorum 창립자 Hans Kuepper는 누구인가요?", "acceptedAnswer": {"@type": "Answer", "text": "Hans Kuepper는 PromptQuorum의 창립자이자 개발자입니다. 독일 바덴-뷔르템베르크 주, 하이델베르크 근처 크라이히가우 구릉 지대에 거주합니다. 독일어, 영어, 프랑스어, 러시아어 4개 언어를 구사하며 20개 이상의 나라에서 생활하고 일했습니다."}}, {"@type": "Question", "name": "PromptQuorum은 어디에서 개발되나요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 독일 바덴-뷔르템베르크 주의 독립 개발자 Hans Kuepper가 개발합니다. 외부 투자자 없이 프라이버시 우선, 사용자 소유 AI 도구로 개발되고 있습니다."}}, {"@type": "Question", "name": "동일한 프롬프트를 여러 LLM에 동시에 비교할 수 있는 최선의 도구는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "PromptQuorum은 여기서 분석된 도구 중 동시 전송과 자동화된 합의 점수를 결합한 유일한 도구입니다. Poe, AiZolo, OpenMark는 나란히 응답을 제공하지만, GPT-4o, Claude 4.6 Sonnet 등의 모델이 어디서 동의하거나 다른지 자동으로 분석하는 Quorum Verdict를 생성하지 않습니다. 시각적 나란히 비교 이상이 필요한 사용자에게 PromptQuorum이 전용으로 설계된 옵션입니다. 기능 정보는 2026년 3월에 검증되었습니다."}}, {"@type": "Question", "name": "PromptQuorum은 Poe나 LM Arena와 어떻게 다른가요?", "acceptedAnswer": {"@type": "Answer", "text": "Poe는 모델을 하나씩 전환하기 위한 소비자 채팅 플랫폼입니다. LM Arena는 커뮤니티 투표를 사용해 모델을 순위 매깁니다. PromptQuorum은 독자적입니다: 선택한 모든 모델에 동시 전송하고 합의 점수를 통해 어디서 동의하거나 다른지 자동으로 분석합니다. Poe는 대화에 최적화되어 있고, LM Arena는 벤치마킹에, PromptQuorum은 제어된 평가와 환각 감지에 최적화되어 있습니다."}}]},
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
                { '@type': 'ListItem', 'position': 2, 'name': 'PQ Apps', 'item': 'https://www.promptquorum.com/ko/pq-apps' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16 text-center">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">PQ Apps</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              어디서 작업하든 PromptQuorum
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              하나의 프롬프트를 25개 이상의 AI 모델에 동시 전송 — 로컬 LLM 지원과 다중 모델 합의 분석까지, 모두 브라우저에서.
            </p>
            <Link
              href="/ko/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              베타 체험
            </Link>
          </div>

          {/* How It Works */}
          <section id="how-it-works" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-2">작동 방식</h2>
            <p className="text-text-secondary mb-3">4단계 워크플로우: 9가지 프레임워크 중 하나를 사용해 구조화된 프롬프트를 작성하고, 본인의 LLM으로 최적화한 후, 25개 이상의 AI 서비스에 동시에 전송하고, 13가지 합의 분석 유형으로 모든 응답을 분석합니다.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
              완전히 브라우저에서 실행 — PromptQuorum 서버는 프롬프트나 API 키를 볼 수 없습니다
            </div>

            <div className="space-y-8 mb-16">
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">작성</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">프롬프트를 구조화하세요</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">프레임워크로 구조화된 프롬프트는 더 높은 품질의 출력을 생성합니다. PromptQuorum에는 9개의 내장 프레임워크(Single Prompt Line, CRAFT, CO-STAR, RISEN, TRACE, APE, SPECS, Google Prompt, RTF)와 2개의 완전 맞춤형 프레임워크 슬롯이 포함됩니다.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Single Prompt Line — 빠른 작업을 위한 최소 구조</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CRAFT — Context, Role, Action, Format, Target (창의적 글쓰기)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>CO-STAR — Context, Objective, Style, Tone, Audience, Response (마케팅, 비즈니스)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>RISEN — Role, Instructions, Steps, End Goal, Narrowing (순차적 기업 작업)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>TRACE — Task, Request, Action, Context, Example (퓨샷 학습)</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>APE, SPECS, Google Prompt, RTF — 특정 작업 유형에 최적화</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      프레임워크 마법사가 작업 유형에 따라 최적의 프레임워크를 추천합니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">최적화</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">본인의 LLM으로 개선하세요</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">최적화를 통해 프롬프트 품질이 측정 가능하게 향상됩니다 — 구조화된 프롬프트는 LLM 평가에서 25~45% 더 높은 점수를 받습니다. PromptQuorum은 8가지 개선 유형(간결하게, 세부사항 확장, 단계별 분류, 구체성 높이기, 단순화, 품질 관리 추가, 다중 전문가 자문, 핵심으로 압축)과 스마트 온도 감지를 적용합니다.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>품질 평가 — 명확성, 구체성, 구조, 제약 조건에 대한 0-100% 점수</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>스마트 온도 — 작업 유형에 따라 최적의 창의성 수준(0.0-1.0) 추천</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>버전 기록 — 모든 개선 사항 저장; 개선 경로 분기 및 비교</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>교육 모드 — 각 변경사항이 품질과 명확성을 어떻게 개선하는지 설명</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>원클릭 8가지 개선 — 구조화된 변환을 즉시 적용</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>맞춤 지시 — 본인의 LLM을 사용한 자유 텍스트 개선</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      내 LLM. 내 API 키. PromptQuorum 서버를 통과하는 것은 아무것도 없습니다.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">전송</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">25개 이상의 AI 서비스로 전송하세요</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">동일한 프롬프트를 여러 AI 모델에 전송하면 작업에 가장 적합한 모델이 어떤 것인지 알 수 있습니다. PromptQuorum은 복사-붙여넣기 없이 25개 이상의 목적지에 병렬 브라우저 탭을 엽니다.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>자동 전송 (17개 서비스): OpenAI ChatGPT, Google Gemini, Anthropic Claude, Perplexity, xAI Grok, DeepSeek, Mistral, Cohere, Azure, Together, Groq 등</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>복사-붙여넣기 (8개 서비스): Qwen, Meta AI, Poe, Kimi, LM Studio, Jan AI, GPT4All 등</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>Perplexity 자동 제출 — 도착 즉시 프롬프트 전송</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>맞춤 URL 슬롯 2개 — 기본 목록에 없는 AI 서비스 구성 가능</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>전송 전 선택적 개선 — 전송 전 최종 LLM 향상</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>병렬 실행 — 모든 탭이 동시에 열림; 1분 이내에 응답 수집</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      모든 브라우저 탭이 동시에 열립니다. 탭 간 수동 복사-붙여넣기 없음.
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-primary/20 rounded-2xl overflow-hidden">
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Quorum</span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3 mt-1">모든 모델에서 합의를 찾으세요</h3>
                    <p className="text-text-secondary mb-5 text-lg leading-relaxed">5개 이상의 독립 모델이 답변에 동의하면, 단일 모델보다 신뢰도가 높아집니다. 모든 응답을 PromptQuorum에 붙여넣고 13가지 합의 분석 유형을 적용하세요.</p>
                    <ul className="space-y-2 mb-5">
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>합의 요약 — 공유 주제와 만장일치 합의 식별</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>모순 감지 — 모델이 분기되는 지점 표시; 소수 의견 식별</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>환각 감지 — 소수 모델에만 나타나는 주장 식별; 잠재적 허위 사실</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>신뢰도 점수 — 모델별, 주장별 확실성 수준</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>최적 답변 선택 — 가장 높은 품질의 개별 응답 선택</span>
                      </li>
                      <li className="flex items-start gap-2 text-text-secondary">
                        <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span>가중 병합 — 모든 모델의 최선 요소를 사용하여 혼합 응답 합성</span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg px-4 py-3 text-sm text-text-secondary italic">
                      5개 이상의 독립 모델이 동일한 답변으로 수렴하면, 단일 모델보다 환각 위험이 낮습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">9가지 내장 프롬프트 프레임워크</h3>
              <p className="text-text-secondary mb-6">프레임워크로 구조화된 프롬프트는 비구조적 요청보다 측정 가능하게 더 나은 출력을 생성합니다. 각 프레임워크는 특정 작업 유형에 대해 입력을 다르게 구성합니다. 프레임워크 마법사가 최적의 것을 추천하거나, 맞춤 프레임워크 2개를 만드세요.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-primary/20">
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary">프레임워크</th>
                      <th className="text-left py-2 sm:py-3 pr-6 font-semibold text-text-primary hidden md:table-cell">구조</th>
                      <th className="text-left py-2 sm:py-3 font-semibold text-text-primary">최적 용도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Single Prompt Line</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">—</td>
                      <td className="py-2 sm:py-3 text-text-secondary">구조 없는 빠른 임시 쿼리</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">APE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Action · Purpose · Expectation</td>
                      <td className="py-2 sm:py-3 text-text-secondary">3개 필드 최소 구조; 단순한 작업</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CRAFT</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Role · Action · Format · Target</td>
                      <td className="py-2 sm:py-3 text-text-secondary">창의적 글쓰기; 범용 작업</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">CO-STAR</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Context · Objective · Style · Tone · Audience · Response</td>
                      <td className="py-2 sm:py-3 text-text-secondary">마케팅 카피; 비즈니스 커뮤니케이션</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">SPECS</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Situation · Purpose · Expected Output · Context · Style</td>
                      <td className="py-2 sm:py-3 text-text-secondary">분석; 연구; 기술 글쓰기</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RISEN</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Instructions · Steps · End Goal · Narrowing</td>
                      <td className="py-2 sm:py-3 text-text-secondary">다단계 기업 워크플로우</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">TRACE</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Request · Action · Context · Example</td>
                      <td className="py-2 sm:py-3 text-text-secondary">퓨샷 학습; 예시 기반 작업</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">Google Prompt</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Task · Context · Persona</td>
                      <td className="py-2 sm:py-3 text-text-secondary">전문 작업; 역할 기반 프롬프트</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-2 sm:py-3 pr-6 font-semibold text-primary whitespace-nowrap">RTF</td>
                      <td className="py-2 sm:py-3 pr-6 text-text-muted hidden md:table-cell font-mono text-xs">Role · Task · Format</td>
                      <td className="py-2 sm:py-3 text-text-secondary">최소 구조; 핵심 3개 필드만</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">13가지 Quorum 분석 유형</h3>
              <p className="text-text-secondary mb-6">여러 모델의 응답에 2가지 또는 13가지 분석 전체를 적용하세요. 각 분석은 PromptQuorum 서버가 아닌 연결된 LLM에 의해 실행됩니다. 모든 출력에서 합의, 모순, 환각, 신뢰 수준을 식별하세요.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">합성 (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      합의 요약 — 모든 모델에서 공유된 주제
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      가중 병합 — 각 모델의 최선을 결합한 혼합 응답
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      원자적 사실 추출 — 주장을 개별 사실로 분해; 모델 간 합의 집계
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">비교 (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      겹침 매핑 — 동일한 결과를 생성한 모델 식별
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      모순 감지 — 모델이 분기되는 주장 표시
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      신뢰도 점수 — 모델별, 주장별 확실성 수준 측정
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">품질 (3)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      완전성 확인 — 필요한 모든 정보가 있는지 확인
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      환각 감지 — 소수 모델의 주장 식별; 잠재적 허위 데이터
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      중복 제거 — 중복 또는 거의 중복된 주장 제거
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">선택 (4)</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      최적 답변 선택 — 가장 높은 품질의 개별 응답 선택
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      다중 모델 앙상블 — 모델 신뢰도 가중치로 결과 결합
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      논란 표시 — 모델 간 합의가 약한 주장 강조
                    </li>
                    <li className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                      맞춤 분석 — 사용자 정의 분석 템플릿
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-secondary/30 border border-primary/20 rounded-xl p-6">
                <div className="text-sm font-semibold text-text-primary mb-2">6가지 형식으로 결과 내보내기</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.txt</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.md</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.json</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.csv</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.html</span>
                  <span className="px-3 py-1 bg-card border border-primary/20 rounded-full text-xs font-mono text-text-secondary">.pdf</span>
                </div>
                <p className="text-xs text-text-muted mt-2">여러 형식 → .zip 파일로 다운로드. 폴더 선택을 위한 File System Access API (Chrome/Edge/Safari 16+).</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-6">핵심 개념</h3>
              <dl className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">다중 모델 디스패치</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">한 번의 클릭으로 25개 이상의 AI 모델에 프롬프트를 동시에 전송합니다. PromptQuorum은 URL을 통해 각 목적지에 프롬프트를 미리 로드합니다 — 복사-붙여넣기 없이, 모든 탭이 동시에 열립니다.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">Quorum 분석</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">합의, 모순, 신뢰 수준을 식별하기 위한 여러 AI 모델 응답의 구조화된 비교. PromptQuorum은 환각 감지와 최적 답변 선택을 포함한 13가지 분석 유형을 제공합니다.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">합의 점수</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">여러 모델 응답이 얼마나 일치하는지에서 도출된 신뢰 등급. 합의가 높을수록 신뢰도가 높습니다. 합의가 낮으면 불확실성 또는 잠재적 환각 영역을 나타냅니다.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">환각 감지</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">하나 또는 소수의 모델에만 나타나는 사실적 주장을 식별하여 AI가 만들어냈을 가능성을 나타냅니다. 5개 이상의 독립 모델을 교차 확인하면 감지되지 않은 환각률을 크게 줄입니다.</dd>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <dt className="font-semibold text-primary mb-2">BYOM — 본인 모델 가져오기</dt>
                  <dd className="text-text-secondary text-sm leading-relaxed">본인의 API 키를 AI 제공업체에 직접 연결합니다. 키는 브라우저의 localStorage에만 저장되고 제공업체에 직접 연결됩니다 — PromptQuorum 서버는 자격 증명을 수신하거나 전송하지 않습니다.</dd>
                </div>
              </dl>
            </div>

            <div className="mb-16">
              <h3 className="text-xl font-bold text-text-primary mb-2">본인 모델 가져오기 (BYOM) — PromptQuorum 인프라 없음</h3>
              <p className="text-text-secondary mb-6">PromptQuorum은 LLM 모델을 호스팅하거나 실행하지 않습니다. 모든 API 호출은 브라우저에서 직접 선택한 제공업체로 이동합니다. API 키는 브라우저의 localStorage에 남아 있으며 PromptQuorum 서버로 전송되지 않습니다.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">클라우드 API (본인 API 키 가져오기)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenAI (GPT-4, GPT-4o)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Anthropic (Claude 3.5)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Google Gemini 1.5
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Grok (xAI)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      DeepSeek
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Mistral
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Cohere
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Together AI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      Groq
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      OpenRouter (free tier)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-4">로컬 모델 (API 키 없음; 내 기기에서 실행)</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Ollama (localhost:11434)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      LM Studio (localhost:1234)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Jan AI (localhost:1337)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      GPT4All (localhost:4891)
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Open WebUI
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      KoboldCpp
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      vLLM
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      oobabooga
                    </li>
                    <li className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      Any OpenAI-compatible endpoint
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-16">
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">원격 측정 없음</h3>
                  <p className="text-text-secondary text-sm">분석, 추적, 로깅, 데이터 수집 없음. 익명 사용 통계나 세션 시간조차 없습니다.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">가입 없음</h3>
                  <p className="text-text-secondary text-sm">가입 불필요. 이메일, 계정, 로그인 없음. 앱을 열고 바로 시작하세요.</p>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-6">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center mb-3">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2">오프라인 작동</h3>
                  <p className="text-text-secondary text-sm">데스크톱 앱(Electron)과 모바일 앱(Capacitor)은 Ollama, LM Studio, Jan AI 또는 호환 엔드포인트를 통한 로컬 모델로 완전 오프라인 작동을 지원합니다.</p>
                </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-3">테스트 방법</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">PromptQuorum 기사에서 인용된 성능 데이터는 PromptQuorum을 사용한 통제된 디스패치 세션을 기반으로 합니다. 기사에서 특정 수치(프롬프트 품질 점수, 온도 비교, 벤치마크 값)를 인용할 때, 이는 명시적으로 표시된 경우를 제외하고는 편집 테스트 또는 공개 벤치마크 데이터를 반영합니다.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  프롬프트 디스패치: PromptQuorum의 원클릭 디스패치를 통해 명시된 모델에 동시 전송
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  샘플 크기: 달리 명시되지 않는 한 편집 테스트는 조건당 최소 30개 프롬프트 사용
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  평가: 응답은 맹검 검토에서 최소 2명의 독립 평가자에 의해 점수 매겨짐
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  제3자 벤치마크 (HumanEval, SWE-bench, MBPP): 공식 모델 간행물 또는 커뮤니티 리더보드에서 추출; 평가 날짜는 각 기사에 인용됨
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  로컬 모델 테스트: 기사에 명시된 양자화 수준에서 소비자 하드웨어에서 실행
                </li>
                <li className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                  공개: PromptQuorum 내부 테스트가 인용된 경우, 기사 본문에서 "Tested in PromptQuorum" 레이블로 식별됨
                </li>
              </ul>
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">기능</h2>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">주요 기능 한눈에 보기</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">9가지 프롬프트 엔지니어링 프레임워크 (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, RTF)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">25개 이상의 클라우드 모델에 동시 전송 (GPT-4o, Claude, Gemini, DeepSeek 등)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">4가지 카테고리에 걸친 13가지 Quorum 합의 분석 유형 (합성, 비교, 품질, 선택)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">환각 감지: 단일 모델에만 나타나거나 합의와 상충되는 주장을 표시</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">로컬 LLM 지원: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, OpenAI 호환 엔드포인트</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">프라이버시 우선: 완전한 오프라인 실행, 가입 불필요, 장치 밖으로 데이터 유출 없음</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">모든 전송 모델의 실시간 나란한 응답 비교</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                <span className="text-text-secondary">더 나은 AI 출력을 위한 8가지 개선 기법으로 자동 프롬프트 최적화</span>
              </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">프롬프트 최적화</h3>
                <p className="text-text-secondary">더 나은 AI 출력을 위해 8가지 검증된 개선 기법으로 프롬프트를 자동으로 개선하고 최적화합니다.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">다중 모델 전송</h3>
                <p className="text-text-secondary">ChatGPT, Claude, Gemini 및 25개 이상의 AI 모델에 동시에 병렬로 프롬프트를 실행합니다.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Quorum 스코어링</h3>
                <p className="text-text-secondary">신뢰도 점수로 모델 간 합의 답변을 찾아냅니다. 환각을 즉시 감지합니다.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">즉각 비교</h3>
                <p className="text-text-secondary">클릭 한 번으로 병렬 응답을 받아보세요 — 브라우저 탭 간의 수동 복사·붙여넣기가 필요 없습니다.</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-primary/20">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">프라이버시 우선</h3>
                <p className="text-text-secondary">로컬 실행 옵션 제공. 가입 불필요. 프롬프트에 대한 완전한 제어권을 가집니다.</p>
              </div>
            </div>

            <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-8">
              <PromptOptimizerShowcase lang="ko" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-2">최적화 결과를 어떻게 검토하나요?</h3>
              <p className="text-text-secondary mb-6">최적화된 프롬프트의 품질 평가, 버전 기록, 개선 제안을 검토하세요.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <OptimizationShowcase lang="ko" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">버전 관리</h4>
                  <p className="text-text-secondary text-sm">프롬프트의 모든 반복 기록을 추적하세요. 언제든지 이전 버전으로 되돌리거나 분기하여 다른 최적화 경로를 탐색할 수 있습니다.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">품질 인사이트</h4>
                  <p className="text-text-secondary text-sm">프롬프트가 왜 개선되었는지 정확히 이해하세요. 강점과 개선이 필요한 부분에 대한 상세한 피드백을 받으세요.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">스마트 개선</h4>
                  <p className="text-text-secondary text-sm">원클릭 개선을 적용해 프롬프트를 더 간결하거나 명확하거나 전문적이거나 상세하게 만드세요.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Quorum — 다중 모델 합의란 무엇인가요?</h3>
              <p className="text-text-secondary mb-6">25개 이상의 AI 모델에서 응답을 수집하고, 합의 패턴을 분석하며, 다양한 관점의 인사이트를 종합합니다.</p>
              <div className="bg-surface-highlight border border-primary/20 rounded-xl p-6 sm:p-8 mb-6">
                <QuorumShowcase lang="ko" />
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">응답 수집</h4>
                  <p className="text-text-secondary text-sm">ChatGPT, Claude, Gemini 및 25개 이상의 다른 모델에서 프롬프트를 실행하세요. 다양한 관점과 응답을 즉시 얻으세요.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">패턴 분석</h4>
                  <p className="text-text-secondary text-sm">모든 모델이 동의하는 부분(합의), 차이가 나는 부분, 그리고 사용 사례에 가장 적합한 응답을 파악하세요.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">인사이트 종합</h4>
                  <p className="text-text-secondary text-sm">여러 모델의 강점을 결합해 더 나은 답변을 만드세요. 결과를 다양한 형식으로 내보내 추가로 활용하세요.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Compare Tools */}
          <section id="compare-tools" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-4">도구 비교</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-xs text-amber-800 leading-relaxed mb-8">
              <strong>정확성 안내:</strong>
               기능 및 가격 정보는 2026년 3월에 검증되었으며 각 제품의 공개 문서를 기반으로 선의로 제공됩니다. 제품은 자주 변경됩니다 — 각 공급업체에 직접 현재 기능을 확인하세요. 이 페이지의 정보가 부정확하거나 오래되었다고 생각되면 
              <a href="mailto:hello@promptquorum.com" className="underline hover:text-amber-900">문의하세요</a>
               즉시 수정하겠습니다. 이 비교는 PromptQuorum이 제작했으며 시장 참여자로서 우리의 관점을 반영합니다.
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-3">멀티 LLM 비교 도구란 무엇인가요?</h3>
              <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mb-4">
                <p className="text-text-primary text-[15px] leading-relaxed">멀티 LLM 비교 도구는 동일한 프롬프트를 여러 대형 언어 모델에 동시에 전송하고 응답을 병렬로 표시하여, 탭을 전환하거나 입력을 반복하지 않고 GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large 등 AI 시스템 간의 추론, 정확성, 스타일 차이를 평가할 수 있게 합니다.</p>
              </div>
              <p className="text-text-secondary mb-3">2026년 현재 어떤 단일 AI 모델도 모든 작업에서 권위 있지 않습니다. GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro는 각각 서로 다른 학습 데이터, 아키텍처 편향, 추론 강점을 가지고 있습니다. 한 모델에서 정확해 보이는 답변이 다른 모델에서 반박되거나, 제한되거나, 크게 확장될 수 있습니다.</p>
              <p className="text-text-secondary">여기서 비교하는 5가지 도구는 현재 이용 가능한 주요 접근 방식을 대표합니다: 소비자 플랫폼(Poe by Quora), 커뮤니티 벤치마크(LM Arena), 개발자 평가 도구(OpenMark), 통합 멀티 모델 워크스페이스(AiZolo), 합의 점수 플랫폼(PromptQuorum). 각각은 서로 다른 워크플로우를 지원합니다.</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-text-primary mb-2">5가지 멀티 LLM 도구의 주요 차이점은 무엇인가요?</h3>
              <p className="text-text-secondary mb-4">다음 표는 전문적인 멀티 LLM 워크플로우에서 가장 중요한 기능인 동시 전송, 합의 점수, 로컬 LLM 지원, API 키 제어, 가격을 기준으로 5가지 도구를 비교합니다.</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-semibold text-xs uppercase tracking-wider">도구</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">동시 전송</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">합의 점수</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">로컬 LLM</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider whitespace-nowrap">API 키 제어</th>
                      <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-text-secondary font-semibold text-xs uppercase tracking-wider">가격</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">PromptQuorum</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 예</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Quorum Verdict</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ Ollama + LM Studio</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 내 키 사용</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">무료 베타</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">Poe (Quora)</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 순차 / 제한적</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 아니오</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 클라우드 전용</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 제한적</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">무료 / $19.99/월</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">LM Arena</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 2개 모델만</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 인간 투표만</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 클라우드 전용</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 아니오</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">무료</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">OpenMark</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 병렬</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-amber-500">~ 결정론적 점수</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 클라우드 전용</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 예</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">무료 티어 / 크레딧</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-primary font-medium whitespace-nowrap">AiZolo</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 예</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 아니오</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-red-400">✗ 클라우드 전용</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-green-600 font-semibold">✓ 예</td>
                      <td className="py-2 sm:py-3 px-2 sm:px-4 text-text-secondary">$9.90/월부터</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs font-mono text-text-secondary mt-3">✓ 예 · ~ 부분 · ✗ 아니오 · 2026년 3월 공개 문서 기준. 가격 및 기능은 변경될 수 있습니다 — 각 공급업체에 직접 확인하세요. 이 비교는 PromptQuorum이 제작했습니다.</p>
            </div>

            <div className="mb-10">
              <div className="border border-primary/25 bg-primary/5 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-primary">PromptQuorum</span>
                  <span className="text-xs font-mono bg-green-100 text-green-700 border-green-200 border px-3 py-1 rounded-full">최적 대상: 개발자 및 파워 유저</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">베타 · 2026년 7월</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">promptquorum.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">API 키 필요</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">Ollama + LM Studio</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>PromptQuorum은 검토된 도구 중 프롬프트 동시 전송과 자동 합의 점수를 결합한 유일한 도구입니다.</strong> 프롬프트를 작성하고 모델을 선택하면 — GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large 및 로컬에서 실행 중인 모델 — PromptQuorum이 모두에 병렬로 전송합니다. 그런 다음 Quorum Verdict가 모델들이 어디서 일치하는지, 어디서 다른지, 그리고 그 패턴이 응답 신뢰성에 무엇을 의미하는지 분석합니다.</p>
<p className="text-text-secondary mb-3 leading-relaxed">결정적 기능은 로컬 LLM 지원입니다. Ollama 및 LM Studio 통합을 통해 PromptQuorum은 로컬에서 실행 중인 모델(LLaMA 3.1 7B는 8GB RAM 필요, 13B는 16GB 필요)을 전송에 포함시켜 민감한 프롬프트가 절대 내 기기를 벗어나지 않습니다. 법률 전문가, 의료 종사자, 금융 분석가, 독점 코드를 다루는 개발자에게 이는 선택이 아닌 필수입니다.</p>
<p className="text-text-secondary leading-relaxed">PromptQuorum은 사용자가 OpenAI, Anthropic, Google, Mistral의 자체 API 키를 가져오도록 요구합니다. 이를 통해 데이터가 자신의 통제 하에 있고, 비용이 투명하게 유지되며, 사용이 각 공급업체와의 자체 상업적 조건에 연결됩니다.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">PromptQuorum을 사용해야 하는 사람은 누구인가요?</h4>
              <p className="text-text-secondary mb-8">PromptQuorum은 프로덕션 파이프라인에 통합할 모델을 평가하는 개발자, 모델 간 결과를 교차 검증해야 하는 연구자, 제3자 클라우드 서버로 전송할 수 없는 기밀 정보를 다루는 전문가를 위해 설계되었습니다.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">Poe (by Quora)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">최적 대상: 일상/소비자 사용</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">poe.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">무료 / $19.99/월</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">iOS, Android, 웹</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">수백만 사용자</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>Poe(Quora 소유)는 GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Llama, Mistral 및 수천 개의 커뮤니티 제작 봇에 접근할 수 있는 멀티 모델 채팅 플랫폼입니다.</strong> 소비자 인터페이스는 API 키나 기술 설정 없이 여러 모델을 탐색하는 데 최적화되어 있습니다.</p>
<p className="text-text-secondary leading-relaxed">Poe는 합의 점수를 제공하지 않습니다 — 모델 간 전환하거나 두 모델을 나란히 비교할 수 있지만 자동화된 일치 분석은 없습니다. 2026년 3월 공개 문서 기준으로 Ollama나 LM Studio를 통한 로컬 LLM 추론을 지원하지 않습니다.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">Poe vs PromptQuorum: 주요 차이점</h4>
              <p className="text-text-secondary mb-8">Poe는 접근성과 대화를 위한 소비자 플랫폼입니다. PromptQuorum은 프롬프트 평가와 합의 점수를 위한 전문 도구입니다. Poe는 일상적인 채팅과 봇 탐색에 더 적합합니다. PromptQuorum은 제어된 프롬프트 평가, 합의 분석, 로컬 LLM 워크플로우에 더 적합합니다.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">LM Arena (lmarena.ai)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">최적 대상: 학술 벤치마킹</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">lmarena.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">무료</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">웹 전용</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">인간 투표 시스템</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>LM Arena(구 Chatbot Arena)는 수백만 건의 인간 선호도 투표에서 도출된 Elo 등급을 사용하는 가장 많이 인용되는 AI 모델 리더보드입니다.</strong> 사용자가 프롬프트를 제출하고 두 익명 모델 중 더 나은 응답을 투표합니다.</p>
<p className="text-text-secondary leading-relaxed">LM Arena는 두 모델을 나란히 표시하고 인간 선호도 투표를 수집합니다 — 자동화된 합의 분석을 제공하지 않고, 로컬 LLM을 지원하지 않으며, 주요 비교 모드에서 특정 모델을 선택할 수 없습니다. 벤치마킹 플랫폼이지 워크플로우 도구가 아닙니다.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">LM Arena vs PromptQuorum: 주요 차이점</h4>
              <p className="text-text-secondary mb-8">LM Arena는 업계의 집계된 인간 선호도 트렌드를 이해하는 데 더 적합합니다. PromptQuorum은 선택한 모델 전반에 걸쳐 일관된 자동화된 분석으로 특정 프롬프트를 평가하는 데 더 적합합니다. LM Arena는 커뮤니티가 무엇을 선호하는지 알려주고, PromptQuorum은 중요한 각 모델에서 내 프롬프트가 무엇을 생성하는지 알려줍니다.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">OpenMark (openmark.ai)</span>
                  <span className="text-xs font-mono bg-green-50 text-green-700 border-green-200 border px-3 py-1 rounded-full">최적 대상: 비용/품질 분석</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">openmark.ai</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">무료 티어 / 크레딧</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">100개 이상 모델</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">결정론적 점수</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>OpenMark는 100개 이상의 AI 모델에 대해 프롬프트를 동시에 실행하고 결과를 결정론적으로 점수를 매기는 개발자 지향 벤치마킹 도구입니다 — 동일한 프롬프트는 항상 동일한 순위 결과를 생성합니다.</strong> 품질 점수와 함께 각 모델의 프롬프트당 비용을 정확하게 보여줍니다.</p>
<p className="text-text-secondary leading-relaxed">OpenMark는 범위(100개 이상 모델)와 비용 투명성에서 탁월하지만 합의 판정을 생성하지 않습니다 — 일치 패턴을 분석하는 대신 각 모델을 개별적으로 점수 매깁니다. Ollama나 LM Studio를 통한 로컬 LLM을 지원하지 않습니다.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">OpenMark vs PromptQuorum: 주요 차이점</h4>
              <p className="text-text-secondary mb-8">OpenMark는 "이 작업에서 어느 개별 모델이 가장 잘 작동하며 비용은 얼마인가"에 답합니다. PromptQuorum은 "이 프롬프트에서 모델들이 얼마나 동의하며 불일치는 무엇을 의미하는가"에 답합니다. 둘 다 API 키가 필요합니다. OpenMark는 100개 이상의 모델을 지원하고, PromptQuorum은 로컬 LLM 추론과 합의 점수를 추가합니다.</p>
              <div className="border border-gray-200 bg-gray-50 rounded-xl p-6 mb-3">
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <span className="text-lg font-bold text-text-primary">AiZolo (aizolo.com)</span>
                  <span className="text-xs font-mono bg-amber-50 text-amber-700 border-amber-200 border px-3 py-1 rounded-full">최적 대상: 콘텐츠 팀</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">aizolo.com</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">$9.90/월부터</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">GPT-4o, Claude, Gemini, Grok</span>
                <span className="text-xs font-mono text-text-secondary bg-white border border-gray-200 px-2 py-1 rounded">프롬프트 라이브러리</span>
                </div>
<p className="text-text-secondary mb-3 leading-relaxed"><strong>AiZolo는 콘텐츠 크리에이터와 마케팅 팀을 위해 설계된 통합 멀티 모델 워크스페이스로, GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Grok에 병렬로 동시 전송합니다.</strong> 2026년 3월 기준으로 요금제는 $9.90/월부터 시작했습니다 — aizolo.com에서 현재 가격을 확인하세요.</p>
<p className="text-text-secondary leading-relaxed">AiZolo는 합의 점수를 제공하지 않습니다 — 응답을 나란히 표시하지만 분석은 사용자에게 맡깁니다. 클라우드의 네 가지 모델만 지원하며 로컬 LLM 옵션은 없습니다. 기술 평가 플랫폼이 아닌 콘텐츠 제작 워크플로우 도구입니다.</p>
              </div>
              <h4 className="text-base font-semibold text-text-primary mb-2">AiZolo vs PromptQuorum: 주요 차이점</h4>
              <p className="text-text-secondary mb-8">AiZolo는 일상적인 사용을 위한 저렴하고 잘 설계된 멀티 모델 글쓰기 워크스페이스가 필요한 콘텐츠 팀에 더 적합합니다. PromptQuorum은 자동화된 합의 분석, 로컬 LLM 개인정보 보호, 오픈 웨이트 시스템을 포함한 더 광범위한 모델 세트에 대한 API 키 제어 접근이 필요한 파워 유저에게 더 적합합니다.</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-text-primary mb-6">어떤 멀티 LLM 도구를 사용해야 할까요?</h3>
              <div className="space-y-3">
                <div className="rounded-lg px-5 py-4 bg-primary/8 border border-primary/20">
                  <span className="font-semibold text-primary">PromptQuorum 선택</span>
                  <span className="text-text-secondary"> 모델 간 합의 점수, 민감한 작업을 위한 로컬 LLM 지원, 또는 자체 API 키를 사용하는 제어된 평가 워크플로우가 필요한 경우.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">Poe 선택</span>
                  <span className="text-text-secondary"> API 키 관리 없이 일상적인 대화와 탐색을 위해 GPT-4o, Claude 4.6 Sonnet, Gemini 및 수천 개의 봇에 쉽게 접근하고 싶은 경우.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">LM Arena 선택</span>
                  <span className="text-text-secondary"> 커뮤니티 기반 모델 선호도 데이터와 업계 Elo 순위에 기여하거나 연구하고 싶은 경우.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">OpenMark 선택</span>
                  <span className="text-text-secondary"> 프로덕션 애플리케이션용 모델을 선택하는 개발자로서 100개 이상의 모델에 대한 투명한 비용 데이터와 함께 결정론적 품질 점수가 필요한 경우.</span>
                </div>
                <div className="rounded-lg px-5 py-4 bg-gray-50 border border-gray-100">
                  <span className="font-semibold text-text-primary">AiZolo 선택</span>
                  <span className="text-text-secondary"> 일상적인 글쓰기 워크플로우를 위한 저렴하고 잘 설계된 멀티 모델 워크스페이스가 필요한 콘텐츠 크리에이터나 마케터인 경우.</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-6">자주 묻는 질문</h2>
            <div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 무료인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. PromptQuorum은 무료로 사용할 수 있습니다. 자신의 API 키를 가져오거나, 로컬 LLM을 사용하거나, 프롬프트 최적화를 위한 무료 테스트 백엔드 서비스를 이용할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">개인정보 보호는 어떻게 작동하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">데이터의 행방은 사용자가 결정합니다. LM Studio나 Ollama를 사용해 모든 것을 로컬에 유지하거나, 자신의 API 키를 사용하세요. 제로 텔레메트리, 제로 추적, 데이터 수집 없음 — 익명 사용 통계조차 수집하지 않습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">어떤 AI 제공업체가 지원되나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">25개 이상의 AI 제공업체가 포함됩니다: OpenAI(GPT-4, GPT-4o), Anthropic(Claude), Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, 그리고 모든 로컬 제공업체(Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga 및 OpenAI 호환 엔드포인트).</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 어떤 플랫폼에서 실행되나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 macOS, Windows, Linux(데스크톱 via Electron)에서 사용 가능합니다. 웹 애플리케이션은 개발 중이며, 그 다음 모바일(iOS 및 Android via Capacitor)이 출시됩니다. 로컬 LLM과 함께 완전히 오프라인으로 작동합니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum의 차별점은 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 단일 브라우저 기반 도구에서 프롬프트의 전체 생명 주기를 커버합니다: 9개 프레임워크를 활용한 구조화된 작성, AI 기반 반복 최적화(8가지 정제 유형), 25개 이상의 AI 서비스로의 원클릭 전송, 합의 점수 산정을 위한 13가지 Quorum 분석 — 모두 데이터가 기기를 벗어나지 않고 처리됩니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">사용 제한이 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum 측에서는 어떤 제한도 없습니다. 사용량은 API 키나 로컬 LLM 리소스에 의해서만 제한됩니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">프롬프트 엔지니어링이란 무엇이며 왜 중요한가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">프롬프트 엔지니어링은 AI 모델에 대한 입력을 설계해 더 정확하고 유용하며 신뢰할 수 있는 출력을 얻는 실천입니다. 테스트에서 프레임워크 필드를 갖춘 구조화된 프롬프트는 구조화되지 않은 입력에 비해 LLM 평가 점수를 25~45% 높입니다. PromptQuorum은 9개의 내장 프레임워크로 이를 자동화합니다 — 전문 지식이 필요 없습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 어떻게 프롬프트를 최적화하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">연결된 LLM이 프레임워크의 원시 필드를 정밀 프롬프트로 변환합니다. 이후 8가지 원클릭 정제(간결하게 만들기, 세부 사항 확장, 단계로 분해, 단순화, 구체성 높이기, 다중 전문가 상담, 품질 통제 추가, 사용자 정의 지시)로 반복적으로 개선할 수 있습니다. 모든 단계가 버전 기록에 저장되므로 언제든지 되돌릴 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum에 내장된 프롬프트 프레임워크는 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum에는 9가지 프레임워크가 포함됩니다: Single Prompt Line, APE, CRAFT, CO-STAR(싱가포르 GPT-4 대회 우승), SPECS, RISEN, TRACE, Google Prompt, RTF. 또한 2개의 완전히 사용자 정의 프레임워크를 만들 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">CO-STAR 프레임워크란 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">CO-STAR는 Context(맥락), Objective(목표), Style(스타일), Tone(어조), Audience(대상), Response(응답 형식)의 약자입니다. 싱가포르 GPT-4 프롬프트 엔지니어링 대회에서 우승했으며, 비즈니스 커뮤니케이션과 마케팅에 이상적입니다. PromptQuorum이 각 필드를 안내하고 최종 프롬프트를 자동으로 조합합니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">다중 모델 합의란 무엇이며 왜 가치 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">다중 모델 합의는 동일한 프롬프트를 여러 AI 모델에 보내 일치하는 부분을 찾는 것입니다. 5개의 독립적인 모델이 동일한 답변을 제시할 때 신뢰도는 단일 모델보다 훨씬 높습니다. 모순과 잠재적 환각도 자동으로 발견됩니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 AI 환각을 어떻게 감지하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Quorum 단계에서 여러 모델의 응답을 수집한 후 LLM이 환각 감지 분석을 실행합니다 — 하나의 모델 응답에만 나타나거나 사실적 합의와 모순되는 주장에 플래그를 답니다. 실행할 분석 유형을 선택하고 자유롭게 조합할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Ollama나 LM Studio 같은 로컬 AI 모델과 함께 사용할 수 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. PromptQuorum은 Ollama(localhost:11434), LM Studio(localhost:1234), Jan AI(localhost:1337), GPT4All(localhost:4891), Open WebUI, KoboldCpp, vLLM, oobabooga 및 OpenAI 호환 엔드포인트에 기본으로 연결됩니다. 로컬 모델에는 API 키가 필요 없습니다 — 모든 것이 내 컴퓨터에서 실행됩니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum을 완전히 오프라인으로 사용할 수 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. Ollama나 LM Studio 같은 로컬 모델을 사용하면 PromptQuorum이 완전히 오프라인으로 작동합니다. 인터넷 연결이 필요 없습니다. 프롬프트, API 키, 결과가 기기를 벗어나지 않습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">BYOM(Bring Your Own Model)이란 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">BYOM은 PromptQuorum이 자체 API 키로 LLM을 호출하지 않는다는 의미입니다. 모든 호출은 브라우저에서 선택한 제공업체(클라우드 또는 로컬)로 직접 전달됩니다. API 키는 브라우저의 localStorage에만 저장되며 어떤 PromptQuorum 서버에도 전송되지 않습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Dispatch 기능은 어떻게 작동하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Dispatch는 최적화된 프롬프트를 한 번의 클릭으로 여러 AI 서비스에 전송합니다. 자동 전송 서비스(ChatGPT, Gemini, Perplexity, Claude, Copilot, DeepSeek, Mistral 등)의 경우 PromptQuorum이 URL에 프롬프트를 미리 로드합니다. Perplexity는 로드 시 자동으로 제출됩니다. 모든 탭이 병렬로 열리며 1분 안에 모든 응답을 수집할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">Quorum 분석이란 무엇이며 어떤 유형이 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Quorum 분석은 수집된 모든 AI 응답을 LLM으로 처리합니다. 4개 카테고리 13가지 분석 유형: 합성(합의 요약, 가중 병합, 원자적 사실 추출), 비교(중복 매핑, 모순 감지, 신뢰도 점수), 품질(완전성 검사, 환각 감지, 중복 제거), 추천(최선 답변 선택, 다중 모델 앙상블, 논쟁 표시).</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">결과를 내보낼 수 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. Quorum 결과는 6가지 형식으로 내보낼 수 있습니다: .txt, .md, .json, .csv, .html, .pdf. 여러 형식을 선택하면 .zip 아카이브로 묶입니다. Chrome, Edge, Safari 16+에서는 File System Access API를 사용해 저장 폴더를 선택할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">프레임워크 마법사는 어떻게 작동하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">프레임워크 마법사가 작업에 관한 몇 가지 질문을 합니다 — 달성하려는 것, 필요한 출력 유형, 대상. 답변을 바탕으로 9가지 내장 옵션 중 가장 적합한 프레임워크를 추천하고 각 프레임워크가 프롬프트에 대해 생성할 내용을 나란히 비교해서 보여줍니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">스마트 온도 조정이란 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">각 최적화 전에 PromptQuorum이 프롬프트 텍스트를 분석하고 이상적인 LLM 온도를 제안합니다: 사실적 작업에는 ~0.2, 균형 있는 작업에는 ~0.7, 창의적 작업에는 ~0.85. 신뢰도가 60% 이상일 때만 표시됩니다. 동일한 의도 유형에 대해 3번 연속 일관된 선택을 하면 자동으로 적용됩니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 ChatGPT, Claude, Gemini와 함께 작동하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. 설정에서 API 키를 추가하면 ChatGPT(GPT-4, GPT-4o), Anthropic Claude(3, 3.5), Google Gemini(1.5 Pro, Flash)를 최적화 LLM으로 사용할 수 있습니다. Dispatch 페이지에서는 API 키 없이도 세 서비스에 동시에 프롬프트를 전송할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">프롬프트의 버전 기록이 있나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">네. 모든 최적화 단계와 정제가 읽기 쉬운 레이블(예: "v2 — 간결하게 만들기 12:36")과 함께 버전 기록에 자동 저장됩니다. 임의의 버전을 선택해 복원하고 거기서 새 정제를 시작할 수 있습니다. 아무것도 손실되지 않습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 어떤 출력 형식과 언어를 지원하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">LLM 출력 언어는 세션별로 구성 가능합니다: 영어, 독일어, 프랑스어, 스페인어, 이탈리아어, 포르투갈어, 중국어, 일본어. 응답 길이는 100~2000단어 사이에서 조정할 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 내 API 키를 어떻게 안전하게 처리하나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">API 키는 브라우저의 localStorage에만 저장됩니다. 어떤 PromptQuorum 서버에도 전송되지 않고, 기록되지 않으며, 텔레메트리에 포함되지 않습니다(텔레메트리 자체가 없습니다). 설정에서 언제든지 지울 수 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 기업 또는 팀 사용에 적합한가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 현재 개인 파워 유저 — 개발자, 연구자, 콘텐츠 크리에이터, AI를 많이 사용하는 전문가를 위해 설계되었습니다. 각 사용자는 자신의 API 키로 자체 인스턴스를 실행합니다. 엔터프라이즈 기능(공유 작업 공간, 팀 기록, 역할 기반 접근)은 로드맵에 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">티칭 모드란 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">티칭 모드는 모든 최적화 결과 아래에 설명 상자를 추가해 각 변경이 이루어진 이유 — 적용된 프롬프트 엔지니어링 원칙과 그 효과 — 를 정확히 설명합니다. 도구를 사용하면서 프롬프트 엔지니어링을 배우고 싶은 개발자와 연구자를 위해 설계되었습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 어떻게 받을 수 있고 비용이 드나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 무료 퍼블릭 베타 단계입니다. 데스크톱 앱을 직접 다운로드하세요 — 가입, 대기자 명단, 이메일이 필요하지 않습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum 창립자 Hans Kuepper는 누구인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Hans Kuepper는 PromptQuorum의 창립자이자 개발자입니다. 독일 바덴-뷔르템베르크 주, 하이델베르크 근처 크라이히가우 구릉 지대에 거주합니다. 독일어, 영어, 프랑스어, 러시아어 4개 언어를 구사하며 20개 이상의 나라에서 생활하고 일했습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 어디에서 개발되나요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 독일 바덴-뷔르템베르크 주의 독립 개발자 Hans Kuepper가 개발합니다. 외부 투자자 없이 프라이버시 우선, 사용자 소유 AI 도구로 개발되고 있습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">동일한 프롬프트를 여러 LLM에 동시에 비교할 수 있는 최선의 도구는 무엇인가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">PromptQuorum은 여기서 분석된 도구 중 동시 전송과 자동화된 합의 점수를 결합한 유일한 도구입니다. Poe, AiZolo, OpenMark는 나란히 응답을 제공하지만, GPT-4o, Claude 4.6 Sonnet 등의 모델이 어디서 동의하거나 다른지 자동으로 분석하는 Quorum Verdict를 생성하지 않습니다. 시각적 나란히 비교 이상이 필요한 사용자에게 PromptQuorum이 전용으로 설계된 옵션입니다. 기능 정보는 2026년 3월에 검증되었습니다.</p>
              </div>
              <div className="py-5 border-b border-primary/10 last:border-0">
                <p className="font-semibold text-text-primary mb-2 leading-snug">PromptQuorum은 Poe나 LM Arena와 어떻게 다른가요?</p>
                <p className="text-sm text-text-secondary leading-relaxed">Poe는 모델을 하나씩 전환하기 위한 소비자 채팅 플랫폼입니다. LM Arena는 커뮤니티 투표를 사용해 모델을 순위 매깁니다. PromptQuorum은 독자적입니다: 선택한 모든 모델에 동시 전송하고 합의 점수를 통해 어디서 동의하거나 다른지 자동으로 분석합니다. Poe는 대화에 최적화되어 있고, LM Arena는 벤치마킹에, PromptQuorum은 제어된 평가와 환각 감지에 최적화되어 있습니다.</p>
              </div>
            </div>
          </section>

          {/* Repeat CTA */}
          <div className="text-center py-12 border-t border-primary/20">
            <Link
              href="/ko/waitlist"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              베타 체험
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
