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
            <h2 className="text-2xl font-bold text-text-primary mb-6">작동 방식</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">1</div>
                <div className="text-text-primary font-semibold mb-1">구조화된 프롬프트 작성</div>
                <div className="text-sm text-text-secondary">9가지 내장 프레임워크 중 하나로 시작하세요 — CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, Single Prompt Line.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">2</div>
                <div className="text-text-primary font-semibold mb-1">자신의 LLM으로 최적화</div>
                <div className="text-sm text-text-secondary">전송 전에 연결된 LLM을 통해 프롬프트의 구조와 표현을 선택적으로 다듬을 수 있습니다.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">3</div>
                <div className="text-text-primary font-semibold mb-1">25개 이상의 AI 모델로 전송</div>
                <div className="text-sm text-text-secondary">한 번의 클릭으로 모든 대상이 동시에 열립니다 — GPT-4o, Claude, Gemini, Grok, DeepSeek, Mistral 등은 물론 Ollama를 통한 로컬 모델까지.</div>
              </div>
              <div className="bg-card border border-primary/20 rounded-xl p-5">
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">4</div>
                <div className="text-text-primary font-semibold mb-1">Quorum 분석 실행</div>
                <div className="text-sm text-text-secondary">13가지 분석 유형으로 응답을 비교하세요 — 환각 탐지, 모순 탐지, 합의 요약 등.</div>
              </div>
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
