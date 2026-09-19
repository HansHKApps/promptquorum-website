import type { Metadata } from 'next'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

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
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">가격</div>
                  <div className="text-text-primary font-medium">무료. 자신의 API 키를 사용합니다.</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">개인정보 보호 모델</div>
                  <div className="text-text-primary font-medium">BYOM — 서버로 전송되지 않음</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">지원되는 AI 모델</div>
                  <div className="text-text-primary font-medium">클라우드 25개 이상 + Ollama를 통한 무제한 로컬 모델</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">프롬프트 프레임워크</div>
                  <div className="text-text-primary font-medium">내장 9종 + 사용자 지정 슬롯 2개</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Quorum 분석 유형</div>
                  <div className="text-text-primary font-medium">환각 탐지를 포함한 13종</div>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">오프라인 지원</div>
                  <div className="text-text-primary font-medium">완전 지원 — Ollama, LM Studio, Jan AI 경유</div>
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
