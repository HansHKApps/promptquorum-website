'use client'

import Image from 'next/image'
import { AppLink as Link } from '@/components/AppLink'
import { useMemo, useRef, useState, useEffect } from 'react'
import { llmThemes, type LLMTheme } from '@/lib/local-llms/themes'
import { COMING_SOON_SLUGS } from '@/lib/local-llms/comingSoon'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { isNewArticle, isUpdatedArticle } from '@/lib/article-freshness'
import { LazySection } from './hub/LazySection'
import { HubReviewedBadge } from './hub/HubReviewedBadge'
import { latestDateModified } from '@/lib/hub-reviewed-date'
import type { LLMHubData } from '@/lib/local-llms/hub-data'
import { HUB_PRACTICAL_SECTIONS } from '@/lib/local-llms/hub-practical-sections'

const NEW_LABEL: Record<string, string> = { en: 'NEW', de: 'NEU', fr: 'NOUVEAU', ja: '新着', zh: '新', es: 'NUEVO', pt: 'NOVO', ar: 'جديد', ko: '새글' }
const UPDATED_LABEL: Record<string, string> = { en: 'UPDATED', de: 'AKTUALISIERT', fr: 'MIS À JOUR', ja: '更新', zh: '已更新', es: 'ACTUALIZADO', pt: 'ATUALIZADO', ar: 'محدث', ko: '업데이트' }

function navHref(path: string, lang: string) {
  if (lang === 'en') return path
  if (path === '/') return `/${lang}`
  return `/${lang}${path}`
}

function getImagePath(basePath: string, lang: string): string {
  const supportedLangs = ['es', 'pt']
  if (!supportedLangs.includes(lang)) return basePath
  const dotIndex = basePath.lastIndexOf('.')
  return basePath.slice(0, dotIndex) + `-${lang}` + basePath.slice(dotIndex)
}

function renderDescription(text: string, lang: Language): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
    if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (linkMatch) {
      const href = lang !== 'en' && !linkMatch[2].startsWith(`/${lang}/`) ? `/${lang}${linkMatch[2]}` : linkMatch[2]
      return <Link key={i} href={href} className="text-primary hover:underline">{linkMatch[1]}</Link>
    }
    return part
  })
}

import {
  HUB_HERO_TITLE,
  HUB_HERO_DESC,
  HUB_START_HERE_TITLE,
  HUB_START_HERE_ITEMS,
  HUB_NEW_APRIL_HEADING,
  HUB_NEW_APRIL_MODELS,
  HUB_NEW_APRIL_COLS,
  HUB_COMPARISON_HEADING,
  HUB_COMPARISON_ROWS,
  HUB_COMPARISON_COLS,
  HUB_VRAM_TIER_HEADING,
  HUB_VRAM_TIER_INTRO,
  HUB_VRAM_TIER_COLS,
  HUB_VRAM_TIER_ROWS,
  HUB_CTA_TEXT,
  HUB_CTA_BUTTON,
  HUB_NAV_HOME,
  THEME_LABELS,
  THEME_DESCRIPTIONS,
  HUB_COMING_SOON,
  HUB_PE_SIDEBAR_TITLE,
  HUB_PE_SIDEBAR_BODY,
  HUB_PE_SIDEBAR_LINKS,
  HUB_PB_SIDEBAR_TITLE,
  HUB_PB_SIDEBAR_BODY,
  HUB_PB_SIDEBAR_LINKS,
  HUB_GETTING_STARTED_LINK,
  HUB_TAKEAWAYS_TITLE,
  HUB_TAKEAWAYS_BULLETS,
  THEME_COLORS,
  SLUG_ACRONYMS,
  HUB_FAQ_TITLE,
  HUB_FAQS,
  HUB_REGIONAL_TITLE,
  HUB_REGIONAL_ITEMS,
  HUB_PRESENTATION_HEADING,
  HUB_PRESENTATION_DESC,
  HUB_PRESENTATION_PDF,
  HUB_FIGCAPTION_VRAM,
  HUB_FIGCAPTION_CLOUD,
  HUB_FIGCAPTION_MODELS,
  HUB_FIGCAPTION_OLLAMA,
  HUB_FIGCAPTION_PQ,
  HUB_BOTTOM_FAQ_TITLE,
  HUB_FAQS_BOTTOM,
} from '@/lib/local-llms/hub-content'


function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => SLUG_ACRONYMS[word.toLowerCase()] ?? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Returns the article title from the server-precomputed titlesMap (already
// resolved to the active language, with English fallback baked in server-side
// by buildLLMHubData), or a readable slug-derived fallback.
function getArticleTitle(
  articleKey: string,
  titlesMap: Record<string, string>
): string {
  return titlesMap[articleKey] ?? slugToTitle(articleKey)
}

function ArticleCard({
  articleKey, dot, lang, titlesMap, datesMap, liveSet,
}: {
  articleKey: string
  dot: string
  lang: Language
  titlesMap: Record<string, string>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSet: Set<string>
}) {
  if (!liveSet.has(articleKey)) return null

  const title = getArticleTitle(articleKey, titlesMap)
  const href = navHref(`/local-llms/${articleKey}`, lang)
  const dates = datesMap[articleKey]
  const publishDate = dates?.publishDate
  const dateModified = dates?.dateModified
  const showNew = isNewArticle(publishDate)
  const showUpdated = !showNew && isUpdatedArticle(publishDate, dateModified)

  return (
    <div className={`relative h-full transition-all rounded-xl ${showNew ? 'ring-2 ring-emerald-400/60 shadow-[0_0_12px_rgba(52,211,153,0.25)]' : showUpdated ? 'ring-2 ring-amber-400/60 shadow-[0_0_12px_rgba(251,191,36,0.25)]' : ''}`}>
      {showNew && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-bold uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {NEW_LABEL[lang] ?? NEW_LABEL['en']}
        </span>
      )}
      {showUpdated && (
        <span className="absolute top-0 right-3 -translate-y-1/2 text-[11px] font-bold uppercase tracking-widest text-white bg-amber-500 border-2 border-amber-300 shadow-md rounded px-2.5 py-0.5 z-10">
          {UPDATED_LABEL[lang] ?? UPDATED_LABEL['en']}
        </span>
      )}
      <Link
        href={href}
        className={`flex items-start gap-3 bg-card rounded-xl p-4 h-full transition-colors group ${showNew ? 'border-2 border-emerald-400 hover:border-emerald-500' : showUpdated ? 'border-2 border-amber-400 hover:border-amber-500' : 'border border-primary/30 hover:border-primary/50 hover:bg-primary/5'}`}
      >
        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${dot}`} />
        <span className="text-text-primary text-sm font-medium leading-snug group-hover:text-primary transition-colors flex-1">
          {title}
        </span>
      </Link>
    </div>
  )
}

function ArticleComingSoon({ articleKey, lang, titlesMap }: {
  articleKey: string
  lang: Language
  titlesMap: Record<string, string>
}) {
  const title = getArticleTitle(articleKey, titlesMap)
  return (
    <div className="flex items-start gap-3 bg-card border border-primary/20 rounded-xl p-4 opacity-50 cursor-default select-none">
      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-gray-300" />
      <span className="text-text-secondary text-sm font-medium leading-snug flex-1">
        {title}
        <span className="ml-2 text-xs font-normal opacity-60">· soon</span>
      </span>
    </div>
  )
}

function ThemeSection({ theme, lang, titlesMap, datesMap, liveSet }: {
  theme: LLMTheme
  lang: Language
  titlesMap: Record<string, string>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSet: Set<string>
}) {
  const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: 'bg-gray-400' }
  const label = THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title

  const liveArticles = theme.articleKeys.filter(
    key => !COMING_SOON_SLUGS.has(key) && liveSet.has(key)
  )
  const soonArticles = theme.articleKeys.filter(key => COMING_SOON_SLUGS.has(key))
  const hasContent = liveArticles.length > 0 || soonArticles.length > 0

  return (
    <section id={theme.id} className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
          {theme.title}
        </span>
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{label}</h2>
      <p className="text-text-secondary text-sm mb-6 max-w-2xl">
        {renderDescription(THEME_DESCRIPTIONS[theme.id]?.[lang] ?? THEME_DESCRIPTIONS[theme.id]?.['en'] ?? theme.description ?? '', lang)}
      </p>
      {hasContent ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {liveArticles.map(key => (
            <ArticleCard key={key} articleKey={key} dot={colors.dot} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
          ))}
          {soonArticles.map(key => (
            <ArticleComingSoon key={key} articleKey={key} lang={lang} titlesMap={titlesMap} />
          ))}
        </div>
      ) : (
        <div className="text-text-secondary text-sm p-4 bg-primary/5 rounded-lg border border-primary/15">
          <p>{HUB_COMING_SOON[lang] ?? HUB_COMING_SOON['en']} <Link href={navHref('/local-llms#getting-started', lang)} className="text-primary hover:underline">{HUB_GETTING_STARTED_LINK[lang] ?? HUB_GETTING_STARTED_LINK['en']}</Link>.</p>
        </div>
      )}
    </section>
  )
}

function LocalLLMsHubContent({ initialLang, titlesMap, datesMap, liveSlugs }: {
  initialLang?: import("@/hooks/useLang").Lang
  titlesMap: Record<string, string>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSlugs: string[]
}) {
  const lang = useLang(initialLang)
  const liveSet = useMemo(() => new Set(liveSlugs), [liveSlugs])
  const newModelsTableRef = useRef<HTMLDivElement>(null)
  const [newModelsTableIsScrollable, setNewModelsTableIsScrollable] = useState(false)
  const comparisonTableRef = useRef<HTMLDivElement>(null)
  const [comparisonTableIsScrollable, setComparisonTableIsScrollable] = useState(false)
  const vramTierTableRef = useRef<HTMLDivElement>(null)
  const [vramTierTableIsScrollable, setVramTierTableIsScrollable] = useState(false)

  useEffect(() => {
    const el = newModelsTableRef.current
    if (!el) return
    const checkOverflow = () => setNewModelsTableIsScrollable(el.scrollWidth > el.clientWidth + 1)
    checkOverflow()
    const observer = new ResizeObserver(checkOverflow)
    observer.observe(el)
    return () => observer.disconnect()
  }, [lang])

  useEffect(() => {
    const el = comparisonTableRef.current
    if (!el) return
    const checkOverflow = () => setComparisonTableIsScrollable(el.scrollWidth > el.clientWidth + 1)
    checkOverflow()
    const observer = new ResizeObserver(checkOverflow)
    observer.observe(el)
    return () => observer.disconnect()
  }, [lang])

  useEffect(() => {
    const el = vramTierTableRef.current
    if (!el) return
    const checkOverflow = () => setVramTierTableIsScrollable(el.scrollWidth > el.clientWidth + 1)
    checkOverflow()
    const observer = new ResizeObserver(checkOverflow)
    observer.observe(el)
    return () => observer.disconnect()
  }, [lang])

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Local LLMs</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            {HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
          </h1>
          <p className="article-intro text-lg text-text-secondary max-w-2xl leading-relaxed mb-4">
            {HUB_HERO_DESC[lang] ?? HUB_HERO_DESC['en']}
          </p>
          <figure className="mb-8 rounded-xl overflow-hidden max-w-2xl">
            <Image
              src={`/images/local-llms-hub-overview-hero-${lang}.webp`}
              alt={HUB_HERO_TITLE[lang] ?? HUB_HERO_TITLE['en']}
              width={1200}
              height={675}
              priority
              // Pre-rendered at exactly these dimensions as WebP (12-37 KB), so Vercel's
              // image optimizer has nothing to add — it only adds a billed transformation
              // per source image (5,318 of them) and a redirect hop before LCP.
              unoptimized
              className="w-full"
            />
          </figure>

          <HubReviewedBadge date={latestDateModified(Object.values(datesMap))} lang={lang} className="mb-10" />

          {/* Key Takeaways */}
          <div className="key-takeaways mb-10 bg-primary/3 border border-primary/15 rounded-xl p-5">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
              {HUB_TAKEAWAYS_TITLE[lang] ?? HUB_TAKEAWAYS_TITLE['en']}
            </p>
            <ul className="space-y-2">
              {(HUB_TAKEAWAYS_BULLETS[lang] ?? HUB_TAKEAWAYS_BULLETS['en']).map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  {renderDescription(bullet, lang)}
                </li>
              ))}
            </ul>
          </div>

          {/* Start Here — curated picks by use case */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-text-primary mb-4">
              {HUB_START_HERE_TITLE[lang] ?? HUB_START_HERE_TITLE['en']}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {(HUB_START_HERE_ITEMS[lang] ?? HUB_START_HERE_ITEMS['en']).map((item, i) => (
                <Link
                  key={i}
                  href={navHref(item.href, lang)}
                  className="group flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/3 p-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <span className="text-xl leading-none" aria-hidden="true">{item.emoji}</span>
                  <span>
                    <span className="block text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="block text-xs text-text-secondary mt-0.5">{item.desc}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* PE Sidebar */}
          <div className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              {HUB_PE_SIDEBAR_TITLE[lang] ?? HUB_PE_SIDEBAR_TITLE['en']}
            </h3>
            <p className="text-sm text-blue-800 mb-4">
              {HUB_PE_SIDEBAR_BODY[lang] ?? HUB_PE_SIDEBAR_BODY['en']}
            </p>
            <div className="space-y-2">
              {(HUB_PE_SIDEBAR_LINKS[lang] ?? HUB_PE_SIDEBAR_LINKS['en']).map((link, i) => (
                <div key={i}>
                  <Link href={link.href} className="text-blue-700 hover:text-blue-900 text-sm font-medium transition-colors">
                    → {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* PB Sidebar */}
          <div className="mb-10 bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-900 mb-2">
              {HUB_PB_SIDEBAR_TITLE[lang] ?? HUB_PB_SIDEBAR_TITLE['en']}
            </h3>
            <p className="text-sm text-purple-800 mb-4">
              {HUB_PB_SIDEBAR_BODY[lang] ?? HUB_PB_SIDEBAR_BODY['en']}
            </p>
            <div className="space-y-2">
              {(HUB_PB_SIDEBAR_LINKS[lang] ?? HUB_PB_SIDEBAR_LINKS['en']).map((link, i) => (
                <div key={i}>
                  <Link href={link.href} className="text-purple-700 hover:text-purple-900 text-sm font-medium transition-colors">
                    → {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Image 1: VRAM Requirements */}
          <figure className="mb-10">
            <img
              src={getImagePath('/images/local-llm-vram-requirements.svg', lang)}
              alt="VRAM requirements for local LLMs: 3B models need 4 GB, 7B needs 8 GB (RTX 4060 / Apple M3 limit), 13B needs 16 GB, 70B models like Llama 4 Scout need 40 GB+ at Q4_K_M quantization"
              className="w-full rounded-xl border border-primary/15"
              loading="lazy"
              width={800}
              height={420}
            />
            <figcaption className="mt-2 text-xs text-text-secondary text-center">
              {HUB_FIGCAPTION_VRAM[lang] ?? HUB_FIGCAPTION_VRAM['en']}
            </figcaption>
          </figure>

          {/* Quick-nav pills */}
          <div className="flex flex-wrap gap-2">
            {llmThemes.map(theme => {
              const colors = THEME_COLORS[theme.id] ?? { badge: 'bg-gray-50 text-gray-700 border-gray-200', dot: '' }
              return (
                <a
                  key={theme.id}
                  href={`#${theme.id}`}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-opacity hover:opacity-80 ${colors.badge}`}
                >
                  {THEME_LABELS[theme.id]?.[lang] ?? THEME_LABELS[theme.id]?.['en'] ?? theme.title}
                </a>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-text-secondary flex-1">
            {HUB_CTA_TEXT[lang] ?? HUB_CTA_TEXT['en']}
          </p>
          <Link
            href={navHref('/', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {HUB_CTA_BUTTON[lang] ?? HUB_CTA_BUTTON['en']}
          </Link>
        </div>

        {/* Recently added */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_NEW_APRIL_HEADING[lang] ?? HUB_NEW_APRIL_HEADING['en']}
          </h2>
          <div className="relative overflow-x-auto" ref={newModelsTableRef}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  {(HUB_NEW_APRIL_COLS[lang] ?? HUB_NEW_APRIL_COLS['en']).map((col, colIdx) => (
                    <th key={col} className={`text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide${colIdx === 0 ? ' sticky left-0 z-10 bg-white' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(HUB_NEW_APRIL_MODELS[lang] ?? HUB_NEW_APRIL_MODELS['en']).map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/3 group">
                    <td className={`py-1.5 sm:py-2.5 pr-4 font-medium text-text-primary${i % 2 === 0 ? ' bg-white' : ''} sticky left-0 z-10 group-hover:bg-primary/3 transition-colors`}>{row.name}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 font-mono text-xs text-text-secondary bg-primary/5 px-2 rounded">{row.pull}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.vram}</td>
                    <td className="py-1.5 sm:py-2.5 text-text-secondary">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {newModelsTableIsScrollable && (
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
            )}
          </div>
        </section>

        {/* Best Local LLM by VRAM Tier */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-3">
            {HUB_VRAM_TIER_HEADING[lang] ?? HUB_VRAM_TIER_HEADING['en']}
          </h2>
          <p className="text-sm text-text-secondary mb-6 max-w-2xl leading-relaxed">
            {renderDescription(HUB_VRAM_TIER_INTRO[lang] ?? HUB_VRAM_TIER_INTRO['en'], lang)}
          </p>
          <div className="relative overflow-x-auto" ref={vramTierTableRef}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  {(HUB_VRAM_TIER_COLS[lang] ?? HUB_VRAM_TIER_COLS['en']).map((col, colIdx) => (
                    <th key={col} className={`text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide${colIdx === 0 ? ' sticky left-0 z-10 bg-white' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(HUB_VRAM_TIER_ROWS[lang] ?? HUB_VRAM_TIER_ROWS['en']).map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/3 group">
                    <td className={`py-1.5 sm:py-2.5 pr-4 font-medium text-text-primary${i % 2 === 0 ? ' bg-white' : ''} sticky left-0 z-10 group-hover:bg-primary/3 transition-colors`}>{row.vram}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.model}</td>
                    <td className="py-1.5 sm:py-2.5 text-text-secondary">{row.gpu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {vramTierTableIsScrollable && (
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
            )}
          </div>
        </section>

        {/* Practical answers: largest model, 16 GB quantization, mid-range PC, low-RAM RAG */}
        {(HUB_PRACTICAL_SECTIONS[lang] ?? HUB_PRACTICAL_SECTIONS['en']).map(section => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-bold text-text-primary mb-3">{section.heading}</h2>
            <p className="text-sm text-text-secondary mb-6 max-w-2xl leading-relaxed">
              {renderDescription(section.intro, lang)}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    {section.cols.map(col => (
                      <th key={col} className="text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.rows.map((row, i) => (
                    <tr key={i} className="border-b border-primary/10 hover:bg-primary/3">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-1.5 sm:py-2.5 pr-4 ${j === 0 ? 'font-medium text-text-primary' : 'text-text-secondary'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-text-secondary mt-4 max-w-2xl leading-relaxed">
              {renderDescription(section.outro, lang)}
            </p>
          </section>
        ))}

        {/* Ollama vs LM Studio vs Jan.ai */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            {HUB_COMPARISON_HEADING[lang] ?? HUB_COMPARISON_HEADING['en']}
          </h2>
          <div className="relative overflow-x-auto" ref={comparisonTableRef}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20">
                  {(HUB_COMPARISON_COLS[lang] ?? HUB_COMPARISON_COLS['en']).map((col, colIdx) => (
                    <th key={col} className={`text-left py-1.5 sm:py-2 pr-4 text-xs font-bold text-text-secondary uppercase tracking-wide${colIdx === 0 ? ' sticky left-0 z-10 bg-white' : ''}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(HUB_COMPARISON_ROWS[lang] ?? HUB_COMPARISON_ROWS['en']).map((row, i) => (
                  <tr key={i} className="border-b border-primary/10 hover:bg-primary/3 group">
                    <td className={`py-1.5 sm:py-2.5 pr-4 font-medium text-text-primary${i % 2 === 0 ? ' bg-white' : ''} sticky left-0 z-10 group-hover:bg-primary/3 transition-colors`}>{row.feature}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.ollama}</td>
                    <td className="py-1.5 sm:py-2.5 pr-4 text-text-secondary">{row.lmstudio}</td>
                    <td className="py-1.5 sm:py-2.5 text-text-secondary">{row.janai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {comparisonTableIsScrollable && (
              <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
            )}
          </div>
        </section>

        {/* Image 2: Local vs Cloud Comparison */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/local-vs-cloud-llm-comparison.svg', lang)}
            alt="Local LLMs vs Cloud APIs comparison table: local costs $0 per token after hardware with full privacy; cloud APIs charge $0.15–$60 per 1M tokens with excellent quality and instant setup"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_CLOUD[lang] ?? HUB_FIGCAPTION_CLOUD['en']}
          </figcaption>
        </figure>

        {/* Recently Published — auto-surfaced articles with publishDate within 15 days */}
        {(() => {
          const RECENT_HEADING: Record<string, string> = {
            en: 'New This Month', de: 'Neu diesen Monat', fr: 'Nouveautés du mois', ja: '今月の新着', zh: '本月新增', es: 'Nuevo este mes', pt: 'Novo este mês', ar: 'جديد هذا الشهر', ko: '이번 달 신규',
          }
          const RECENT_SUB: Record<string, string> = {
            en: 'Just published — disappears from this spot after 14 days',
            de: 'Gerade veröffentlicht — verschwindet nach 14 Tagen',
            fr: 'Vient de paraître — disparaît de cet emplacement après 14 jours',
            ja: '公開されたばかり — 14日後にここから消えます',
            zh: '刚刚发布 — 14天后从此处消失',
            es: 'Recién publicado — desaparece de este lugar después de 14 días',
            pt: 'Recém publicado — desaparece deste local após 14 dias',
            ar: 'نُشر للتو — يختفي من هنا بعد 14 يومًا',
            ko: '방금 게시됨 — 14일 후 이 위치에서 사라집니다',
          }
          const recentSlugs = Object.keys(datesMap)
            .filter(slug => isNewArticle(datesMap[slug]?.publishDate))
          if (recentSlugs.length === 0) return null
          const dotColor = 'bg-emerald-400'
          return (
            <section className="mb-16 border-2 border-emerald-400/40 rounded-2xl p-6 bg-emerald-50/30">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-emerald-800 tracking-tight">
                  {RECENT_HEADING[lang] ?? RECENT_HEADING['en']}
                </h2>
                <span className="text-xs font-bold uppercase tracking-widest text-white bg-emerald-500 border-2 border-emerald-300 shadow-sm rounded px-2.5 py-1">
                  {recentSlugs.length}
                </span>
              </div>
              <p className="text-xs text-emerald-700/70 mb-5">{RECENT_SUB[lang] ?? RECENT_SUB['en']}</p>
              <div className="grid sm:grid-cols-2 gap-5">
                {recentSlugs.map(slug => (
                  <ArticleCard key={slug} articleKey={slug} dot={dotColor} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
                ))}
              </div>
            </section>
          )
        })()}

        {/* Theme sections */}
        {llmThemes.map((theme, idx) => (
          <LazySection key={theme.id} eager={idx < 2}>
            <ThemeSection theme={theme} lang={lang} titlesMap={titlesMap} datesMap={datesMap} liveSet={liveSet} />
          </LazySection>
        ))}

        {/* Image 3: Top Models 2026 */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/top-open-source-models-2026.svg', lang)}
            alt="Top open-source local models 2026: Llama 4 Scout 109B MoE for reasoning, Qwen3.5 72B for coding, DeepSeek V3 671B MoE for math, Mistral 7B for speed at 8 GB VRAM, Phi-3.5 Mini 3.8B for low-power devices at 4 GB VRAM"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_MODELS[lang] ?? HUB_FIGCAPTION_MODELS['en']}
          </figcaption>
        </figure>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_FAQ_TITLE[lang] ?? HUB_FAQ_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_FAQS[lang] ?? HUB_FAQS['en']).map((faq, i) => (
              <div key={i} className="border-b border-primary/15 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image 4: Ollama Quick Start */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/ollama-quick-start-commands.svg', lang)}
            alt="Ollama terminal showing two commands: ollama pull llama3.2 downloads the 4.7 GB Q4_K_M model, ollama run llama3.2 starts an interactive session at 60 tokens per second on GPU or 12 tokens per second on CPU"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_OLLAMA[lang] ?? HUB_FIGCAPTION_OLLAMA['en']}
          </figcaption>
        </figure>

        {/* Regional Context Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_REGIONAL_TITLE[lang] ?? HUB_REGIONAL_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_REGIONAL_ITEMS[lang] ?? HUB_REGIONAL_ITEMS['en']).map((item, i) => (
              <div key={i} className="bg-primary/5 border border-primary/15 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{item.region}</h3>
                <p className="text-sm text-text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Image 5: PromptQuorum Dispatch */}
        <figure className="mb-16">
          <img
            src={getImagePath('/images/promptquorum-local-cloud-dispatch.svg', lang)}
            alt="PromptQuorum architecture diagram: one prompt dispatched to local Ollama LLM and 25+ cloud APIs including GPT-4o, Claude 4.6, and Gemini 2.5 simultaneously, with side-by-side results comparison view"
            className="w-full rounded-xl border border-primary/15"
            loading="lazy"
            width={800}
            height={420}
          />
          <figcaption className="mt-2 text-xs text-text-secondary text-center">
            {HUB_FIGCAPTION_PQ[lang] ?? HUB_FIGCAPTION_PQ['en']}
          </figcaption>
        </figure>

        {/* Presentation Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
          </h2>
          <p className="text-sm text-text-secondary mb-4 max-w-2xl">
            {HUB_PRESENTATION_DESC[lang] ?? HUB_PRESENTATION_DESC['en']}
          </p>
          <a
            href={`/presentations/local-llms-hub-static.html?lang=${lang}&print=1`}
            className="inline-block mb-6 text-sm text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {HUB_PRESENTATION_PDF[lang] ?? HUB_PRESENTATION_PDF['en']}
          </a>
          <iframe
            src={`/presentations/local-llms-hub-static.html?lang=${lang}`}
            title={HUB_PRESENTATION_HEADING[lang] ?? HUB_PRESENTATION_HEADING['en']}
            className="w-full rounded-xl border border-primary/15"
            style={{ height: 'min(80vh, max(520px, 56.25vw))' }}
            loading="lazy"
          />
        </section>

        {/* Bottom FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            {HUB_BOTTOM_FAQ_TITLE[lang] ?? HUB_BOTTOM_FAQ_TITLE['en']}
          </h2>
          <div className="space-y-6">
            {(HUB_FAQS_BOTTOM[lang] ?? HUB_FAQS_BOTTOM['en']).map((faq, i) => (
              <div key={i} className="border-b border-primary/15 pb-4 last:border-0">
                <h3 className="text-sm font-semibold text-text-primary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cross-link: Prompt Engineering */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? 'Verwandte Themen: Prompt Engineering'
                : lang === 'fr' ? 'Connexe : Guide de Prompt Engineering'
                : lang === 'ja' ? '関連：プロンプトエンジニアリングガイド'
                : lang === 'zh' ? '相关推荐：Prompt工程指南'
                : lang === 'es' ? 'Relacionado: Guía de Prompt Engineering'
                : lang === 'pt' ? 'Relacionado: Guia de Prompt Engineering'
                : 'Related: Prompt Engineering Guide'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Ein lokales Modell auszuführen ist Schritt eins. Großartige Ausgaben zu erzielen ist Schritt zwei. Der Prompt-Engineering-Guide deckt 80 Techniken in 9 Themen ab — von Grundlagen wie Temperatur und Kontextfenster bis zu fortgeschrittenen Methoden wie Chain-of-Thought, RAG und Team-Governance. Jede Technik funktioniert mit lokalen Modellen.'
                : lang === 'fr'
                ? 'Faire tourner un modèle local est la première étape. En obtenir d\'excellentes sorties est la deuxième. Le guide de prompt engineering couvre 80 techniques dans 9 domaines — des fondamentaux comme la température et les fenêtres de contexte aux méthodes avancées comme la chain-of-thought, le RAG et la gouvernance d\'équipe. Chaque technique fonctionne avec les modèles locaux.'
                : lang === 'ja'
                ? 'ローカルモデルを動かすことがステップ1です。そこから優れた出力を得ることがステップ2です。プロンプトエンジニアリングガイドは、温度やコンテキストウィンドウなどの基礎から、Chain-of-Thought・RAG・チームガバナンスなどの高度な手法まで、9つのトピックにわたる80のテクニックを解説しています。すべてのテクニックはローカルモデルで使用できます。'
                : lang === 'zh'
                ? '运行本地模型是第一步，从中获取出色输出是第二步。Prompt工程指南涵盖9个主题的80项技术——从温度和上下文窗口等基础知识，到思维链、RAG和团队治理等高级方法。每项技术都适用于本地模型。'
                : lang === 'es'
                ? 'Ejecutar un modelo local es el primer paso. Obtener una excelente salida de él es el segundo. La guía de Prompt Engineering cubre 80 técnicas en 9 temas — desde fundamentos como temperatura y ventanas de contexto hasta métodos avanzados como chain-of-thought, RAG y gobernanza de equipos. Cada técnica funciona con modelos locales.'
                : lang === 'pt'
                ? 'Executar um modelo local é o primeiro passo. Obter uma ótima saída dele é o segundo. O guia de Prompt Engineering cobre 80 técnicas em 9 tópicos — de fundamentos como temperatura e janelas de contexto a métodos avançados como chain-of-thought, RAG e governança de equipes. Cada técnica funciona com modelos locais.'
                : 'Running a local model is step one. Getting great output from it is step two. The Prompt Engineering guide covers 80 techniques across 9 topics — from fundamentals like temperature and context windows to advanced methods like chain-of-thought, RAG, and team governance. Every technique works with local models.'}
            </p>
          </div>
          <Link
            href={navHref('/prompt-engineering', lang)}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Zum Prompt-Engineering-Guide →'
              : lang === 'fr' ? 'Explorer le Guide de Prompt Engineering →'
              : lang === 'ja' ? 'プロンプトエンジニアリングガイドを見る →'
              : lang === 'zh' ? '探索Prompt工程指南 →'
              : lang === 'es' ? 'Explorar la Guía de Prompt Engineering →'
              : lang === 'pt' ? 'Explorar o Guia de Prompt Engineering →'
              : 'Explore the Prompt Engineering Guide →'}
          </Link>
        </div>

        {/* Cross-link: Smart Home */}
        <div className="mb-16 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-text-primary mb-1">
              {lang === 'de' ? 'Verwandte Themen: Smart-Home-Guide'
                : lang === 'fr' ? 'Connexe : Guide Maison Connectée'
                : lang === 'ja' ? '関連：スマートホームガイド'
                : lang === 'zh' ? '相关推荐：智能家居指南'
                : lang === 'es' ? 'Relacionado: Guía de Hogar Inteligente'
                : lang === 'pt' ? 'Relacionado: Guia de Casa Inteligente'
                : 'Related: Smart Home Guide'}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {lang === 'de'
                ? 'Ein lokales LLM auszuführen ist Schritt eins. Es zu Hause einzusetzen ist Schritt zwei. Der Smart-Home-Guide behandelt Home Assistant Setup, Ollama-Integration, lokale Sprachassistenten mit Whisper + Piper, datenschutzorientierte Automatisierung und Hardware-Empfehlungen für dauerhaft aktive KI im Zuhause — alles offline, kein Cloud-Abo.'
                : lang === 'fr'
                ? 'Faire tourner un LLM local est la première étape. L\'utiliser chez vous est la deuxième. Le guide maison connectée couvre la configuration de Home Assistant, l\'intégration Ollama, les assistants vocaux locaux avec Whisper + Piper, l\'automatisation axée sur la confidentialité et les recommandations matérielles pour une IA permanente à domicile — tout offline, sans abonnement cloud.'
                : lang === 'ja'
                ? 'ローカルLLMを動かすことがステップ1です。それを自宅で活用することがステップ2です。スマートホームガイドは、Home Assistantのセットアップ、Ollama統合、Whisper + Piperによるローカル音声アシスタント、プライバシー重視のオートメーション、常時稼働AIのハードウェア推奨事項をカバーしています — すべてオフライン、クラウドサブスクリプション不要。'
                : lang === 'zh'
                ? '运行本地LLM是第一步，在家中应用它是第二步。智能家居指南涵盖Home Assistant设置、Ollama集成、Whisper + Piper本地语音助手、隐私优先自动化以及家庭常驻AI的硬件推荐——全部离线，无需云端订阅。'
                : lang === 'es'
                ? 'Ejecutar un LLM local es el primer paso. Ponerlo a trabajar en tu hogar es el segundo. La guía de hogar inteligente cubre la configuración de Home Assistant, integración con Ollama, asistentes de voz locales con Whisper + Piper, automatización centrada en la privacidad y recomendaciones de hardware para IA siempre activa en el hogar — todo offline, sin suscripción a la nube.'
                : lang === 'pt'
                ? 'Executar um LLM local é o primeiro passo. Colocá-lo para trabalhar em sua casa é o segundo. O guia de casa inteligente cobre a configuração do Home Assistant, integração com Ollama, assistentes de voz locais com Whisper + Piper, automação focada na privacidade e recomendações de hardware para IA sempre ativa em casa — tudo offline, sem assinatura em nuvem.'
                : 'Running a local model is step one. Putting it to work in your home is step two. The Smart Home guide covers Home Assistant setup, Ollama integration, local voice assistants with Whisper + Piper, privacy-first automation, and hardware recommendations for always-on AI in your home — all offline, no cloud subscription.'}
            </p>
          </div>
          <Link
            href={lang === 'en' ? '/smart-home' : `/${lang}/smart-home`}
            className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            {lang === 'de' ? 'Zum Smart-Home-Guide →'
              : lang === 'fr' ? 'Explorer le Guide Maison Connectée →'
              : lang === 'ja' ? 'スマートホームガイドを見る →'
              : lang === 'zh' ? '探索智能家居指南 →'
              : lang === 'es' ? 'Explorar la Guía de Hogar Inteligente →'
              : lang === 'pt' ? 'Explorar o Guia de Casa Inteligente →'
              : 'Explore the Smart Home Guide →'}
          </Link>
        </div>

        {/* Back nav */}
        <div className="pt-8 border-t border-primary/20">
          <Link href={navHref('/', lang)} className="text-sm text-text-secondary hover:text-primary transition-colors">
            {HUB_NAV_HOME[lang] ?? HUB_NAV_HOME['en']}
          </Link>
        </div>

      </div>
    </div>
  )
}

export function LocalLLMsHub({ initialLang, titlesMap, datesMap, liveSlugs }: {
  initialLang?: import("@/hooks/useLang").Lang
  titlesMap: Record<string, string>
  datesMap: Record<string, { publishDate?: string; dateModified?: string }>
  liveSlugs: string[]
}) {
  return <LocalLLMsHubContent initialLang={initialLang} titlesMap={titlesMap} datesMap={datesMap} liveSlugs={liveSlugs} />
}
