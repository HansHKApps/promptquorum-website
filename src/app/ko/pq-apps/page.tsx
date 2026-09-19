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
            <p className="text-text-secondary mb-4">PromptQuorum이 다른 AI 프롬프트 도구와 어떻게 비교되는지 확인하세요.</p>
            <Link href="/ko/compare" className="text-primary hover:text-primary/80 font-medium">
              전체 비교 보기 →
            </Link>
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
