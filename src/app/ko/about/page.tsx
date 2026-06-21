import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { PATH_PREFIX_LANGS } from '@/lib/i18n/constants'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ko'
  const t = translations[lang]

  return {
    title: t.aboutMetaTitle,
    description: t.aboutMetaDescription,
    alternates: generateAlternates('/about', lang, true, undefined, [...PATH_PREFIX_LANGS]),
    openGraph: {
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.aboutMetaTitle,
      description: t.aboutMetaDescription,
    },
  }
}

export default function KoAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              'url': 'https://www.promptquorum.com/ko/about',
              'name': 'PromptQuorum 소개',
              'description': 'PromptQuorum은 Hans Kuepper가 개발한 프라이버시 중심의 멀티모델 AI 디스패치 및 합의 도구입니다.',
              'inLanguage': 'ko',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.promptquorum.com/ko/about#founder',
              'name': 'Hans Kuepper',
              'url': 'https://www.promptquorum.com/ko/about',
              'jobTitle': '창립자 겸 개발자',
              'worksFor': {
                '@type': 'Organization',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
              'sameAs': [
                'https://www.linkedin.com/in/hanskuepper/',
                'https://x.com/HansKuepperAPPs',
                'https://github.com/HansHKApps',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': '홈', 'item': 'https://www.promptquorum.com/ko' },
                { '@type': 'ListItem', 'position': 2, 'name': '소개', 'item': 'https://www.promptquorum.com/ko/about' },
              ],
            },
          ]),
        }}
      />

      <div className="min-h-screen bg-surface pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <div className="py-16 border-b border-primary/20 mb-16">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">소개</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              AI 답변을 신뢰해야 하는 사람들을 위해 만들어졌습니다.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed">
              PromptQuorum은 멀티모델 AI 디스패치 및 합의 도구입니다. 모든 모델에 하나의 프롬프트.
              실제로 신뢰할 수 있는 하나의 평결.
            </p>
          </div>

          {/* Founder */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">개발자</h2>
            <div className="bg-card border border-primary/20 rounded-2xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">HK</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">Hans Kuepper</h3>
                  <p className="text-sm text-primary font-medium mb-4">창립자 &amp; 개발자, PromptQuorum</p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">배경</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Hans는 독일 바덴-뷔르템베르크주 하이델베르크 인근 크라이히가우에 거주하고 있습니다.
                    독일어, 영어, 프랑스어, 러시아어를 유창하게 구사하는 다국어 독립 개발자입니다.
                    지난 20여 년간 유럽, 아시아 등 20개국 이상에서 생활하고 일하며
                    분산 팀과 협력하고 글로벌 사용자를 위한 도구를 개발해 왔습니다.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">왜 PromptQuorum인가</h4>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum은 단순한 불만에서 시작됐습니다. 신뢰할 수 있는 답변이 필요할 때,
                    AI 모델 하나에만 물어보는 것으로는 충분하지 않습니다. 모델마다 다른 방식으로 환각을 일으키고,
                    다른 실수를 하며, 다른 유형의 추론에서 성공합니다. 진실은 교차점에 있습니다 —
                    다섯 개의 독립 모델이 하나의 답변에 동의할 때, 단일 모델이 혼자 답하는 경우보다
                    신뢰도가 훨씬 높아집니다.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    PromptQuorum을 만들기 전, Hans는 수년간 기업 AI 워크플로우와 함께 일하며
                    같은 문제를 반복해서 목격했습니다. 팀과 조직이 채용 결정, 의학 연구 요약,
                    법적 분석, 위험 평가 등 고위험 결정에 검증 레이어나 합의 메커니즘 없이
                    단일 모델의 출력을 그대로 신뢰하는 것입니다. 고위험 결정은 더 나은 것을 받을 자격이 있습니다.
                    PromptQuorum은 그가 존재하기를 원했던 도구입니다.
                  </p>

                  <h4 className="text-base font-semibold text-text-primary mt-6 mb-3">철학</h4>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    Hans는 AI 도구에서 프라이버시와 사용자 자율성이 타협할 수 없는 요소여야 한다고 믿습니다.
                    PromptQuorum은 단순한 원칙 위에 구축되었습니다. 당신의 프롬프트, API 키, 그리고 답변은 당신의 것입니다.
                    이 도구는 AI 모델 간의 합의와 비교를 용이하게 하지만,
                    PromptQuorum 서버를 통과하는 것은 아무것도 없습니다. 당신이 통제합니다.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.linkedin.com/in/hanskuepper/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com/HansKuepperAPPs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      X / Twitter
                    </a>
                    <a
                      href="https://github.com/HansHKApps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://substack.com/@promptquorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      Substack
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">PromptQuorum이 존재하는 이유</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                모든 주요 AI 모델은 환각을 일으킵니다. GPT-4o, Claude, Gemini — 모두 사실을 날조하고,
                문맥을 놓치고, 자신있게 들리는 틀린 답을 내놓습니다. 차이는 각각이 <em>어떤</em> 사실을
                틀리게 말하는지, 그리고 <em>언제</em> 그런지입니다.
              </p>
              <p>
                다섯 개의 독립 모델이 하나의 답변에 동의할 때, 다섯 모두가 같은 구체적인 세부사항을
                날조했을 확률은 단일 모델이 혼자 답하는 경우보다 훨씬 낮아집니다.
                합의는 신뢰성의 신호입니다. PromptQuorum은 그 신호를 수집하기 쉽게 만듭니다.
              </p>
              <p>
                두 번째 문제는 프라이버시입니다. 대부분의 AI 도구는 프롬프트를 자체 서버를 통해 라우팅합니다.
                PromptQuorum은 그렇지 않습니다. API 키는 브라우저에서 선택한 제공업체로 직접 연결됩니다.
                PromptQuorum 인프라를 통과하는 것은 아무것도 없습니다 — 프롬프트도,
                API 키도, 답변도.
              </p>
            </div>
          </section>

          {/* Product facts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">제품</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: '출시', value: '베타 — 2026년 7월' },
                { label: '요금', value: '무료. 본인 API 키를 가져오세요.' },
                { label: '프라이버시 모델', value: 'BYOM — 서버 전송 없음' },
                { label: '지원 AI 모델', value: '25개 이상 클라우드 + Ollama를 통한 무제한 로컬' },
                { label: '프롬프트 프레임워크', value: '9개 내장 + 커스텀 2슬롯' },
                { label: 'Quorum 분석 유형', value: '13가지, 환각 감지 포함' },
                { label: '오프라인 지원', value: '완전 지원 — Ollama, LM Studio, Jan AI 경유' },
                { label: '가입 필요 여부', value: '없음. 앱을 열고 바로 시작.' },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card border border-primary/20 rounded-xl p-4">
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-text-primary font-medium">{value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">연락처</h2>
            <p className="text-text-secondary mb-4">
              언론 문의, 파트너십 제안 또는 피드백:
            </p>
            <a
              href="mailto:hello@promptquorum.com"
              className="text-primary hover:text-primary/80 font-medium"
            >
              hello@promptquorum.com
            </a>
          </section>

          {/* Nav */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
            <Link href="/ko" className="text-primary hover:text-primary/80 font-medium text-sm">← 홈</Link>
            <Link href="/ko/how-it-works" className="text-primary hover:text-primary/80 font-medium text-sm">작동 방식</Link>
            <Link href="/ko/compare" className="text-primary hover:text-primary/80 font-medium text-sm">도구 비교</Link>
            <Link href="/ko/blog" className="text-primary hover:text-primary/80 font-medium text-sm">블로그</Link>
          </div>

        </div>
      </div>
    </>
  )
}
