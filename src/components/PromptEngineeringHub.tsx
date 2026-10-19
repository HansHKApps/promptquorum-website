'use client'

import { AppLink as Link } from '@/components/AppLink'
import { useMemo } from 'react'
import { themes, type PETheme } from '@/lib/prompt-engineering/themes'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { useHubSignals } from './hub/useHubSignals'
import { getArticleHighlight, type ArticleHighlight } from './hub/hub-utils'
import { LevelBar } from './hub/LevelBar'
import { HubArticleCard } from './hub/HubArticleCard'
import { HubReviewedBadge } from './hub/HubReviewedBadge'
import { GuideStarWidget, type RecommendedArticle } from './hub/GuideStarWidget'
import { LazySection } from './hub/LazySection'
import { latestDateModified } from '@/lib/hub-reviewed-date'

function navHref(path: string, lang: string) {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

import {
  HUB_HERO_TITLE,
  HUB_LEAD_ANSWER,
  HUB_IN_ONE_SENTENCE,
  HUB_IN_PLAIN_TERMS,
  HUB_IN_ONE_SENTENCE_LABEL,
  HUB_IN_PLAIN_TERMS_LABEL,
  HUB_HERO_DESC,
  HUB_TLDR,
  HUB_CTA_TEXT,
  HUB_QUICK_FACTS,
  HUB_QUICK_FACTS_DETAILED,
  HUB_QUICK_FACTS_HEADER,
  HUB_CTA_BUTTON,
  HUB_NAV_HOME,
  HUB_NAV_FEATURES,
  HUB_NAV_HOW,
  HUB_NAV_BLOG,
  GUIDES_LABEL,
  GUIDE_LABEL_SINGULAR,
  THEME_DESCRIPTION_LEADS,
  THEME_DESCRIPTIONS,
  SUBSECTION_LABELS,
  THEME_LABELS,
  THEME_CALLOUTS,
  HUB_SOURCES_HEADER,
  HUB_SOURCES_DATA,
  FALLBACK_TITLES,
  HUB_FAQ_HEADER,
  HUB_FAQ_DATA,
} from '@/lib/prompt-engineering/hub-content'

const THEME_COLORS: Record<string, { badge: string; dot: string }> = {
  fundamentals: { badge: 'bg-blue-50 text-blue-700 border-blue-200', dot: 'bg-blue-400' },
  frameworks:   { badge: 'bg-purple-50 text-purple-700 border-purple-200', dot: 'bg-purple-400' },
  techniques:   { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-400' },
  'use-topics': { badge: 'bg-orange-50 text-orange-700 border-orange-200', dot: 'bg-orange-400' },
  policy:       { badge: 'bg-rose-50 text-rose-700 border-rose-200', dot: 'bg-rose-400' },
  'tools-platforms': { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200', dot: 'bg-cyan-400' },
  'evaluation-reliability': { badge: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-400' },
  'team-governance': { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200', dot: 'bg-indigo-400' },
  'workflows-automation': { badge: 'bg-green-50 text-green-700 border-green-200', dot: 'bg-green-400' },
}

// Precomputed slug → theme ID map (derived from themes data)
const SLUG_TO_THEME_ID: Record<string, string> = Object.fromEntries(
  themes.flatMap(theme => {
    const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
    return keys.map(key => [key, theme.id])
  })
)

// Get translated article title — checks titles map (already resolved to the
// active language, with English fallback baked in server-side by
// buildPEHubData), then fallback titles, then formats slug.
function getArticleTitle(articleKey: string, lang: Language, titlesMap: Record<string, string>): string {
  const contentKey = PE_SLUG_TO_KEY[articleKey]
  if (contentKey && titlesMap[contentKey]) {
    return titlesMap[contentKey]
  }
  // Use fallback titles for articles without content yet
  if (FALLBACK_TITLES[articleKey]?.[lang]) {
    return FALLBACK_TITLES[articleKey][lang]
  }
  if (FALLBACK_TITLES[articleKey]?.en) {
    return FALLBACK_TITLES[articleKey].en
  }
  return articleKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function ArticleCard({ articleKey, dot, lang, titlesMap }: { articleKey: string; dot: string; lang: Language; titlesMap: Record<string, string> }) {
  const title = getArticleTitle(articleKey, lang, titlesMap)
  const href = navHref(`/prompt-engineering/${articleKey}`, lang)

  return (
    <Link
      href={href}
      className="flex items-start gap-3 bg-card border border-primary/15 rounded-xl p-4 h-full hover:border-primary/50 hover:bg-primary/5 transition-colors group"
    >
      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
      <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors">{title}</span>
    </Link>
  )
}

function PromptEngineeringHubContent({ initialLang, titlesMap, articleLevels, datesMap }: { initialLang?: import("@/hooks/useLang").Lang; titlesMap: Record<string, string>; articleLevels: Record<string, string>; datesMap?: Record<string, { publishDate?: string; dateModified?: string }> }) {
  const lang = useLang(initialLang)
  const { signal, setLevel, clearLevel } = useHubSignals(SLUG_TO_THEME_ID)

  const highlights = useMemo<Record<string, ArticleHighlight>>(() => {
    const map: Record<string, ArticleHighlight> = {}
    for (const theme of themes) {
      const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
      for (const key of keys) {
        const contentKey = PE_SLUG_TO_KEY[key]
        const level = contentKey ? (articleLevels[contentKey] ?? '') : ''
        const themeId = SLUG_TO_THEME_ID[key] ?? ''
        map[key] = getArticleHighlight(signal, level, themeId, [])
      }
    }
    return map
  }, [signal, articleLevels])

  const recommendations = useMemo<RecommendedArticle[]>(() => {
    const recs: RecommendedArticle[] = []
    for (const theme of themes) {
      const keys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
      for (const key of keys) {
        if (highlights[key]?.isHighlighted) {
          const themeId = SLUG_TO_THEME_ID[key] ?? ''
          recs.push({
            title: getArticleTitle(key, lang, titlesMap),
            url: navHref(`/prompt-engineering/${key}`, lang),
            theme: THEME_LABELS[themeId]?.[lang] ?? themeId,
            level: '',
          })
        }
      }
    }
    return recs.slice(0, 5)
  }, [highlights, lang, titlesMap])

  const activeLevel = signal.type === 'level' ? signal.level : undefined

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Prompt Engineering</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-5">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="text-lg font-semibold text-text-primary leading-relaxed max-w-3xl mb-4 key-takeaways">
            {HUB_LEAD_ANSWER[lang] ?? HUB_LEAD_ANSWER['en']}
          </p>

          {/* In One Sentence / In Plain Terms */}
          <div className="grid sm:grid-cols-2 gap-4 my-5 max-w-3xl">
            <div className="border-l-2 border-primary/40 pl-4 py-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                {HUB_IN_ONE_SENTENCE_LABEL[lang] ?? HUB_IN_ONE_SENTENCE_LABEL['en']}
              </p>
              <p className="text-sm text-text-secondary">{HUB_IN_ONE_SENTENCE[lang] ?? HUB_IN_ONE_SENTENCE['en']}</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-4 py-1">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
                {HUB_IN_PLAIN_TERMS_LABEL[lang] ?? HUB_IN_PLAIN_TERMS_LABEL['en']}
              </p>
              <p className="text-sm text-text-secondary">{HUB_IN_PLAIN_TERMS[lang] ?? HUB_IN_PLAIN_TERMS['en']}</p>
            </div>
          </div>

          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl hub-hero-desc mb-4">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>
          <HubReviewedBadge date={latestDateModified(Object.values(datesMap ?? {}))} lang={lang} className="mb-5" />

          {/* TL;DR */}
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-4 my-5 max-w-2xl">
            <p className="text-sm font-semibold text-primary mb-1">TL;DR</p>
            <p className="text-sm text-text-secondary leading-relaxed">{HUB_TLDR[lang] ?? HUB_TLDR['en']}</p>
          </div>

          {/* Stats line */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
            {(HUB_QUICK_FACTS[lang] ?? HUB_QUICK_FACTS['en']).map((fact, i) => (
              <li key={i} className="text-sm text-text-secondary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <strong className="text-text-primary font-medium">{fact}</strong>
              </li>
            ))}
          </ul>

          {/* Quick Facts detailed */}
          <div className="mt-6 bg-card border border-primary/15 rounded-xl p-5 max-w-2xl">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {HUB_QUICK_FACTS_HEADER[lang] ?? HUB_QUICK_FACTS_HEADER['en']}
            </p>
            <ul className="space-y-2">
              {(HUB_QUICK_FACTS_DETAILED[lang] ?? HUB_QUICK_FACTS_DETAILED['en']).map((fact, i) => (
                <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Level self-selection bar — Mechanism A */}
        <LevelBar activeLevel={activeLevel} onSelect={setLevel} onClear={clearLevel} />

        {/* Theme sections */}
        <div className="space-y-20">
          {themes.map((theme, idx) => {
            const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title
            const colors = THEME_COLORS[theme.id]
            const articleKeys = theme.articleKeys ?? theme.subSections?.flatMap(s => s.articleKeys) ?? []
            const count = articleKeys.length
            const descLead = THEME_DESCRIPTION_LEADS[theme.id]?.[lang] ?? THEME_DESCRIPTION_LEADS[theme.id]?.['en']
            const desc = THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description
            const callout = THEME_CALLOUTS[theme.id]?.[lang] ?? THEME_CALLOUTS[theme.id]?.['en']

            return (
              <LazySection key={theme.id} eager={idx < 2}>
              <section id={theme.id}>
                {/* Theme header */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-text-primary">{label}</h2>
                    <span className="text-sm text-text-secondary font-normal shrink-0">
                      {count} {count === 1
                        ? (GUIDE_LABEL_SINGULAR[lang] ?? GUIDE_LABEL_SINGULAR['en'])
                        : (GUIDES_LABEL[lang] ?? GUIDES_LABEL['en'])}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed max-w-2xl">
                    {descLead && <strong className="text-text-primary font-semibold">{descLead} </strong>}
                    {desc}
                  </p>
                  {callout && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-2xl">
                      <p className="text-sm font-semibold text-amber-800 mb-1">{callout.icon} {callout.title}</p>
                      <p className="text-sm text-amber-700 leading-relaxed">{callout.text}</p>
                    </div>
                  )}
                </div>

                {/* Flat article grid (most themes) */}
                {theme.articleKeys && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {theme.articleKeys.map((key) => {
                      const contentKey = PE_SLUG_TO_KEY[key]
                      const dates = contentKey ? datesMap?.[contentKey] : undefined
                      return (
                        <HubArticleCard key={key} highlight={highlights[key] ?? { isHighlighted: false, isDimmed: false }} publishDate={dates?.publishDate} dateModified={dates?.dateModified} lang={lang}>
                          <ArticleCard articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} />
                        </HubArticleCard>
                      )
                    })}
                  </div>
                )}

                {/* Sub-section article grids (Use Topics) */}
                {theme.subSections && (
                  <div className="space-y-8">
                    {theme.subSections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className={`text-xs font-bold uppercase tracking-widest mb-4 px-1 ${colors.badge.split(' ').find(c => c.startsWith('text-')) ?? 'text-primary'}`}>
                          {SUBSECTION_LABELS[sub.title]?.[lang] ?? sub.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {sub.articleKeys.map((key) => {
                            const contentKey = PE_SLUG_TO_KEY[key]
                            const dates = contentKey ? datesMap?.[contentKey] : undefined
                            return (
                              <HubArticleCard key={key} highlight={highlights[key] ?? { isHighlighted: false, isDimmed: false }} publishDate={dates?.publishDate} dateModified={dates?.dateModified} lang={lang}>
                                <ArticleCard articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} />
                              </HubArticleCard>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
              </LazySection>
            )
          })}
        </div>

        {/* Cross-link: Local LLMs */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? '🔍 Lokale Modelle ausführen?'
                : lang === 'fr' ? '🔍 Vous utilisez des modèles locaux ?'
                : lang === 'ja' ? '🔍 ローカルモデルを実行中ですか？'
                : lang === 'zh' ? '🔍 正在运行本地模型？'
                : lang === 'pt' ? '🔍 Executando modelos locais?'
                : lang === 'es' ? '🔍 ¿Ejecutando modelos locales?'
                : lang === 'ar' ? '🔍 هل تشغّل نماذج محلية؟'
                : lang === 'ko' ? '🔍 로컬 모델을 실행 중이신가요?'
                : '🔍 Running Local Models?'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Wenn Sie lokale LLMs mit Ollama, LM Studio oder llama.cpp betreiben, gilt jede Technik in diesem Guide auch für Sie. Sehen Sie sich den Abschnitt Lokale LLMs für Hardware-Guides, Modellvergleiche und Einrichtungsanleitungen an.'
                : lang === 'fr'
                ? 'Si vous exécutez des LLM locaux avec Ollama, LM Studio ou llama.cpp, chaque technique de ce guide s\'applique. Consultez la section LLMs locaux pour les guides matériels, les comparaisons de modèles et les instructions d\'installation.'
                : lang === 'ja'
                ? 'Ollama、LM Studio、またはllama.cppでローカルLLMを実行している場合、このガイドのすべてのテクニックが適用されます。ハードウェアガイド・モデル比較・セットアップ手順についてはローカルLLMセクションをご覧ください。'
                : lang === 'zh'
                ? '如果你正在使用Ollama、LM Studio或llama.cpp运行本地LLM，本指南中的每项技术都适用。请查看本地LLMs板块获取硬件指南、模型比较和安装说明。'
                : lang === 'pt'
                ? 'Se você está executando LLMs locais com Ollama, LM Studio ou llama.cpp, cada técnica deste guia se aplica. Consulte a seção de LLMs locais para guias de hardware, comparações de modelos e instruções de configuração — depois volte aqui para técnicas de prompting.'
                : lang === 'es'
                ? 'Si estás ejecutando LLMs locales con Ollama, LM Studio o llama.cpp, cada técnica de esta guía aplica. Consulta la sección de LLMs locales para guías de hardware, comparaciones de modelos e instrucciones de configuración — luego vuelve aquí para técnicas de prompting.'
                : lang === 'ar'
                ? 'إذا كنت تشغّل نماذج LLM المحلية باستخدام Ollama أو LM Studio أو llama.cpp، فإن كل تقنية في هذا الدليل تنطبق عليك. راجع قسم LLMs المحلية للحصول على أدلة الأجهزة ومقارنات النماذج وتعليمات الإعداد — ثم عد إلى هنا لتقنيات Prompting.'
                : lang === 'ko'
                ? 'Ollama, LM Studio 또는 llama.cpp로 로컬 LLM을 실행하고 있다면, 이 가이드의 모든 기법이 그대로 적용됩니다. 하드웨어 가이드, 모델 비교, 설치 안내는 로컬 LLM 섹션을 참고하세요 — 그런 다음 여기로 돌아와 프롬프팅 기법을 익히세요.'
                : 'If you\'re running local LLMs with Ollama, LM Studio, or llama.cpp, every technique in this guide applies. See the Local LLMs section for hardware guides, model comparisons, and setup instructions — then come back here for prompting techniques.'}
            </p>
          </div>
          <Link
            href={navHref('/local-llms', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Lokale LLMs entdecken →'
              : lang === 'fr' ? 'Explorer les LLMs locaux →'
              : lang === 'ja' ? 'ローカルLLMを見る →'
              : lang === 'zh' ? '探索本地LLMs →'
              : lang === 'pt' ? 'Explorar LLMs locais →'
              : lang === 'es' ? 'Explorar LLMs locales →'
              : lang === 'ar' ? 'استكشف LLMs المحلية ←'
              : lang === 'ko' ? '로컬 LLM 탐색하기 →'
              : 'Explore Local LLMs →'}
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Sources */}
        <div className="mt-20 pt-12 border-t border-primary/20" id="sources">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_SOURCES_HEADER[lang] ?? HUB_SOURCES_HEADER['en']}
          </h2>
          <ul className="space-y-3">
            {HUB_SOURCES_DATA.map((s, i) => (
              <li key={i} className="text-sm">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">{s.title}</a>
                <span className="text-text-secondary"> — {s.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-12 border-t border-primary/20" id="faq">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_HEADER[lang] ?? HUB_FAQ_HEADER['en']}
          </h2>
          <div className="space-y-4">
            {(HUB_FAQ_DATA[lang] ?? HUB_FAQ_DATA['en']).map((item, i) => (
              <div key={i} className="border border-primary/15 rounded-xl p-6 bg-card">
                <h3 className="font-semibold text-text-primary mb-2 text-base">{item.q}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}</Link>
          <Link href={`${navHref('/pq-apps', lang)}#features`} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_FEATURES[lang] ?? HUB_NAV_FEATURES['en']}</Link>
          <Link href={`${navHref('/pq-apps', lang)}#how-it-works`} className="text-primary hover:text-primary/80 font-medium text-sm">{HUB_NAV_HOW[lang] ?? HUB_NAV_HOW['en']}</Link>
        </div>

      </div>

      {/* Guide Star recommendation widget — Mechanism C */}
      <GuideStarWidget signal={signal} recommendations={recommendations} />
    </div>
  )
}

export function PromptEngineeringHub({ initialLang, titlesMap, articleLevels, datesMap }: { initialLang?: import("@/hooks/useLang").Lang; titlesMap: Record<string, string>; articleLevels: Record<string, string>; datesMap?: Record<string, { publishDate?: string; dateModified?: string }> }) {
  return <PromptEngineeringHubContent initialLang={initialLang} titlesMap={titlesMap} articleLevels={articleLevels} datesMap={datesMap} />
}
