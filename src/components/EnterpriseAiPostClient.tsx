'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { EnterpriseAiSection, EnterpriseAiArticle } from '@/lib/enterprise-ai/types'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LangLinksBar } from '@/components/LangLinksBar'
import { QuickAnswer } from '@/components/QuickAnswer'
import { ShadowAiExposureAssessment } from '@/components/ShadowAiExposureAssessment'
import { AgentBlastRadiusCalculator } from '@/components/AgentBlastRadiusCalculator'
import { IpRiskTriageMatrix } from '@/components/IpRiskTriageMatrix'
import { parseContentBlocks } from '@/lib/parseContentBlocks'
import { slugifySectionId } from '@/lib/sectionAnchor'
import { FactsDisclaimer } from '@/components/FactsDisclaimer'
import { AFFILIATE_DISCLOSURE } from '@/lib/tracking/affiliate'
import { AffiliateLink } from '@/components/AffiliateLink'
import { CopyButton } from '@/components/CopyButton'
import { NextStepBlock } from '@/components/NextStepBlock'

interface Props {
  slug: string
  initialLang?: Language
  articleData: Partial<Record<Language, EnterpriseAiArticle>>
  availableLangs?: string[]
}

const SECTION_HEADER_LABELS: Partial<Record<Language, Record<string, string>>> = {
  en: { keyTakeaways: 'Key Takeaways', tableOfContents: 'Contents' },
  de: { keyTakeaways: 'Zusammenfassung', tableOfContents: 'Inhalt' },
  fr: { keyTakeaways: 'Points clés', tableOfContents: 'Sommaire' },
  ja: { keyTakeaways: '重要ポイント', tableOfContents: '目次' },
  zh: { keyTakeaways: '核心要点', tableOfContents: '目录' },
  es: { keyTakeaways: 'Puntos clave', tableOfContents: 'Contenido' },
  pt: { keyTakeaways: 'Pontos principais', tableOfContents: 'Conteúdo' },
  ar: { keyTakeaways: 'النقاط الرئيسية', tableOfContents: 'المحتويات' },
  ko: { keyTakeaways: '핵심 내용', tableOfContents: '목차' },
}

const POST_UI: Record<string, Record<string, string>> = {
  byLine: {
    en: 'By [Hans Kuepper](/about) · Founder of PromptQuorum, multi-model AI dispatch tool · PromptQuorum',
    de: 'Von [Hans Kuepper](/about) · Gründer von PromptQuorum, Multi-Model-AI-Dispatch-Tool · PromptQuorum',
    fr: 'Par [Hans Kuepper](/about) · Fondateur de PromptQuorum, outil de dispatch multi-modèle · PromptQuorum',
    ja: '[Hans Kuepper](/about) 著 · PromptQuorumの創設者 · PromptQuorum',
    zh: '[Hans Kuepper](/about) 作者 · PromptQuorum创始人 · PromptQuorum',
    es: 'Por [Hans Kuepper](/about) · Fundador de PromptQuorum · PromptQuorum',
    pt: 'Por [Hans Kuepper](/about) · Fundador da PromptQuorum · PromptQuorum',
    ar: 'بقلم [Hans Kuepper](/about) · مؤسس PromptQuorum · PromptQuorum',
    ko: '[Hans Kuepper](/about) 저 · PromptQuorum 창립자 · PromptQuorum',
  },
  lastUpdated: {
    en: 'Last updated:', de: 'Aktualisiert:', fr: 'Dernière mise à jour :', ja: '最終更新:', zh: '最后更新:',
    es: 'Última actualización:', pt: 'Última atualização:', ar: 'آخر تحديث:', ko: '마지막 업데이트:',
  },
  ctaText: {
    en: 'Run PromptQuorum with a local LLM, your own API keys, or both — you pick the backend.',
    de: 'Nutzen Sie PromptQuorum mit einem lokalen LLM, eigenen API-Schlüsseln oder beidem — Sie wählen das Backend.',
    fr: 'Utilisez PromptQuorum avec un LLM local, vos propres clés API, ou les deux.',
    ja: 'ローカルLLM、独自のAPIキー、またはその両方でPromptQuorumを使用できます。',
    zh: '使用本地LLM、您自己的API密钥或两者运行PromptQuorum。',
    es: 'Usa PromptQuorum con un LLM local, tus propias claves de API, o ambos.',
    pt: 'Use o PromptQuorum com um LLM local, suas próprias chaves de API, ou ambos.',
    ar: 'شغّل PromptQuorum بنموذج محلي، أو بمفاتيح API الخاصة بك، أو كليهما.',
    ko: '로컬 LLM, 자체 API 키, 또는 둘 다로 PromptQuorum을 실행하세요.',
  },
  ctaButton: {
    en: 'Download the PromptQuorum Beta →', de: 'PromptQuorum-Beta herunterladen →', fr: 'Télécharger la bêta PromptQuorum →',
    ja: 'PromptQuorumベータ版をダウンロード →', zh: '下载 PromptQuorum 测试版 →', es: 'Descargar la beta de PromptQuorum →',
    pt: 'Baixar a Beta do PromptQuorum →', ar: 'تنزيل نسخة PromptQuorum التجريبية ←', ko: 'PromptQuorum 베타 다운로드 →',
  },
  backLink: {
    en: '← Back to Enterprise AI', de: '← Zurück zu Enterprise AI', fr: '← Retour à Enterprise AI',
    ja: '← エンタープライズAIに戻る', zh: '← 返回企业AI', es: '← Volver a IA Empresarial',
    pt: '← Voltar para IA Empresarial', ar: '← العودة إلى الذكاء الاصطناعي للمؤسسات', ko: '← 엔터프라이즈 AI로 돌아가기',
  },
  breadcrumbHome: { en: 'Home', de: 'Startseite', fr: 'Accueil', ja: 'ホーム', zh: '主页', es: 'Inicio', pt: 'Início', ar: 'الرئيسية', ko: '홈' },
  breadcrumbHub: { en: 'Enterprise AI', de: 'Enterprise AI', fr: 'Enterprise AI', ja: 'エンタープライズAI', zh: '企业AI', es: 'IA Empresarial', pt: 'IA Empresarial', ar: 'الذكاء الاصطناعي للمؤسسات', ko: '엔터프라이즈 AI' },
  snippetOneSentence: { en: '📍 In One Sentence', de: '📍 In einem Satz', fr: '📍 En une phrase', ja: '📍 一文で説明', zh: '📍 简单一句话', es: '📍 En una frase', pt: '📍 Em uma frase', ar: '📍 بجملة واحدة', ko: '📍 한 문장으로' },
  snippetPlainTerms: { en: '💬 In Plain Terms', de: '💬 In einfachen Worten', fr: '💬 En termes simples', ja: '💬 簡潔に説明', zh: '💬 简单来说', es: '💬 En términos simples', pt: '💬 Em termos simples', ar: '💬 بعبارة مبسطة', ko: '💬 쉬운 설명' },
}

const THEME_COLORS: Record<string, { dot: string; badge: string }> = {
  'Build': { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-700 border border-blue-200' },
  'Buy': { dot: 'bg-emerald-400', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  'Govern': { dot: 'bg-amber-400', badge: 'bg-amber-50 text-amber-700 border border-amber-200' },
}

function renderInlineLinks(text: string, lang: Language = 'en') {
  const parts = text.split(/(\[[^\]]+\]\([^\)]+\)|\[[^\]]+\])/g)
  return parts.map((part, i) => {
    const markdownMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (markdownMatch) {
      const [, label, url] = markdownMatch
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
            {label}
          </a>
        )
      }
      let finalUrl = url
      if (lang !== 'en' && url.startsWith('/') && !url.startsWith(`/${lang}/`)) {
        if (url.includes('#')) {
          const [basePath, anchor] = url.split('#')
          finalUrl = `/${lang}${basePath}#${anchor}`
        } else {
          finalUrl = `/${lang}${url}`
        }
      }
      return (
        <Link key={i} href={finalUrl} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      )
    }

    const URL_PATTERN = /(https?:\/\/[^\s,;)\]"]+)/g
    const segments = part.split(URL_PATTERN)
    return (
      <span key={i}>
        {segments.map((seg, j) => {
          if (/(https?:\/\/[^\s,;)\]"]+)/.test(seg)) {
            return (
              <a key={j} href={seg} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline break-all">
                {seg}
              </a>
            )
          }
          const boldParts = seg.split(/(\*\*[^*]+\*\*)/g)
          return (
            <span key={j}>
              {boldParts.map((bp, k) =>
                bp.startsWith('**') && bp.endsWith('**')
                  ? <strong key={k} className="text-text-primary font-semibold">{bp.slice(2, -2)}</strong>
                  : bp
              )}
            </span>
          )
        })}
      </span>
    )
  })
}

function isMarkdownTable(lines: string[]): boolean {
  return lines.length >= 2 && lines[0].includes('|') && lines[1].includes('|') && lines[1].includes('-')
}

function renderMarkdownTable(lines: string[], renderLinks: (text: string) => React.ReactNode): React.JSX.Element {
  const rows = lines.filter(line => line.trim()).map(line =>
    line.split('|').map(cell => cell.trim()).filter(Boolean)
  ).filter(row => row.length > 0)
  if (rows.length < 2) return <></>
  const headers = rows[0]
  const dataRows = rows.slice(2)
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, i) => (
              <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold text-text-primary">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2 text-text-secondary">{renderLinks(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionBlock({ section, colors, id, lang, renderLinks }: { section: EnterpriseAiSection; colors: { dot: string; badge: string }; id?: string; lang: Language; renderLinks: (text: string) => React.ReactNode }) {
  const tableScrollRef = useRef<HTMLDivElement>(null)
  const [tableIsScrollable, setTableIsScrollable] = useState(false)

  useEffect(() => {
    const el = tableScrollRef.current
    if (!el) return
    const checkOverflow = () => setTableIsScrollable(el.scrollWidth > el.clientWidth + 1)
    checkOverflow()
    const observer = new ResizeObserver(checkOverflow)
    observer.observe(el)
    return () => observer.disconnect()
  }, [section.rows, section.columns])

  const labels = SECTION_HEADER_LABELS[lang] ?? SECTION_HEADER_LABELS.en!

  return (
    <div className="mt-8" id={id}>
      {section.title && !section.isTldr && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">{renderLinks(section.title)}</h2>
      )}

      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{labels.keyTakeaways}</p>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary text-sm">
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                <span>{renderLinks(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {section.blockquote && (
        <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-5 py-3 my-6 text-text-secondary">
          <p className="italic leading-relaxed">{renderLinks(section.blockquote)}</p>
          {section.blockquoteSource && (
            <footer className="mt-2 text-xs font-semibold text-text-secondary not-italic opacity-75">— {renderLinks(section.blockquoteSource)}</footer>
          )}
        </blockquote>
      )}

      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(() => {
            const contentArray = Array.isArray(section.content) ? section.content : [section.content]
            if (isMarkdownTable(contentArray)) return renderMarkdownTable(contentArray, renderLinks)
            return parseContentBlocks(section.content).map((block, i) => {
              if (block.type === 'h3') return <h3 key={i} className="text-base font-semibold text-text-primary mt-2">{block.text}</h3>
              if (block.type === 'ul') return (
                <ul key={i} className="space-y-1.5 ml-1">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-text-secondary">
                      <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
                      <span className="leading-relaxed">{renderLinks(item)}</span>
                    </li>
                  ))}
                </ul>
              )
              if (block.type === 'table') return renderMarkdownTable(block.lines, renderLinks)
              return <p key={i} className="text-text-secondary leading-relaxed">{renderLinks(block.text)}</p>
            })
          })()}
        </div>
      )}

      {section.snippetBlocks && (
        <div className="space-y-3 my-6">
          {section.snippetBlocks.map((snippet, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                {snippet.type === 'one-sentence' ? POST_UI.snippetOneSentence[lang] : POST_UI.snippetPlainTerms[lang]}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">{renderLinks(snippet.text)}</p>
            </div>
          ))}
        </div>
      )}

      {section.component === 'ShadowAiExposureAssessment' && (
        <div className="my-8">
          <ShadowAiExposureAssessment />
        </div>
      )}

      {section.component === 'AgentBlastRadiusCalculator' && (
        <div className="my-8">
          <AgentBlastRadiusCalculator />
        </div>
      )}

      {section.component === 'IpRiskTriageMatrix' && (
        <div className="my-8">
          <IpRiskTriageMatrix />
        </div>
      )}

      {!section.isTldr && section.items && (
        <ul className="space-y-3 my-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary">
              <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
              <span className="leading-relaxed">{renderLinks(item)}</span>
            </li>
          ))}
        </ul>
      )}

      {section.numberedItems && (
        <ol className="list-none space-y-4 my-4">
          {section.numberedItems.map((item, i) => {
            const isObject = item && typeof item === 'object' && 'title' in item
            const title = isObject ? (item as any).title : item
            const whyItMatters = isObject ? (item as any).whyItMatters : null
            return (
              <li key={i} className="flex gap-4 text-text-secondary">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot.replace('-400', '-500')}`}>{i + 1}</span>
                <div className="leading-relaxed pt-0.5">
                  <span className="font-semibold">{renderLinks(title)}</span>
                  {whyItMatters && (<><br /><span className="text-sm italic">{whyItMatters}</span></>)}
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {section.itemHeadings && section.rows && section.columns && (
        <div className="my-6 space-y-4">
          {section.rows.map((row, i) => {
            const [nameCol, ...restCols] = section.columns!
            const name = String(row[nameCol.toLowerCase().replace(/\./g, '')] ?? row[nameCol] ?? row['0'] ?? '')
            const itemId = name.replace(/\*\*/g, '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
            return (
              <div key={i} id={itemId || undefined} className="border border-primary/10 rounded-xl p-4 scroll-mt-24">
                <h3 className="text-lg font-bold text-text-primary mb-2">{renderLinks(name.replace(/\*\*/g, ''))}</h3>
                <dl className="text-sm text-text-secondary space-y-1.5">
                  {restCols.map((col, colIdx) => {
                    const key = col.toLowerCase().replace(/\./g, '')
                    const value = row[key] ?? row[col] ?? row[String(colIdx + 1)] ?? '—'
                    return (
                      <div key={col} className="flex flex-col sm:flex-row sm:gap-2">
                        <dt className="font-semibold text-text-primary shrink-0 sm:w-32">{col}:</dt>
                        <dd>{renderLinks(value)}</dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            )
          })}
          {section.note && <p className="text-sm text-text-secondary leading-relaxed mt-4 italic">{renderLinks(section.note)}</p>}
        </div>
      )}

      {!section.itemHeadings && section.rows && section.columns && (
        <div className="relative overflow-x-auto my-6" ref={tableScrollRef}>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                {section.columns.map((col, colIdx) => (
                  <th key={col} className={`text-left p-2 sm:p-3 font-bold text-text-primary bg-primary/5${colIdx === 0 ? ' sticky left-0 z-10' : ''}`}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors group">
                  {section.columns!.map((col, colIdx) => {
                    const key = col.toLowerCase().replace(/\./g, '')
                    const value = row[key] ?? row[col] ?? row[String(colIdx)] ?? '—'
                    return (
                      <td key={col} className={colIdx === 0 ? 'p-2 sm:p-3 sticky left-0 z-10 bg-white group-hover:bg-primary/5 transition-colors font-medium text-text-primary' : 'p-2 sm:p-3 text-text-secondary'}>{renderLinks(value)}</td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          {tableIsScrollable && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          )}
          {section.note && <p className="text-sm text-text-secondary leading-relaxed mt-4 italic">{renderLinks(section.note)}</p>}
        </div>
      )}

      {section.codeBlock && (
        <div className="my-6">
          <div className="flex items-center justify-between bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
            {section.codeLanguage ? <span>{section.codeLanguage}</span> : <div />}
            <CopyButton text={section.codeBlock} />
          </div>
          <pre className="bg-gray-900 text-gray-100 text-xs leading-relaxed p-5 overflow-x-auto rounded-b-lg"><code>{section.codeBlock}</code></pre>
        </div>
      )}

      {section.callouts && (
        <div className="space-y-3 my-6">
          {section.callouts.map((callout, i) => {
            const calloutIcons: Record<string, string> = { warning: '⚠️', tip: '💡', insight: '🔍', note: '📌', practice: '🛠️' }
            const icon = calloutIcons[callout.type] || '•'
            const bgColor = callout.type === 'warning' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
            return (
              <div key={i} className={`border ${bgColor} rounded-lg p-4`}>
                <p className="text-text-secondary text-sm">
                  <span className="mr-2">{icon}</span>
                  <span className="font-semibold">{callout.type.charAt(0).toUpperCase() + callout.type.slice(1)}:</span> {renderLinks(callout.text)}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {section.affiliateLinks && section.affiliateLinks.length > 0 && (
        <div className="flex flex-wrap gap-2.5 my-5">
          {section.affiliateLinks.map((link, i) => (
            <AffiliateLink key={i} url={link.url} productName={link.productName} productCategory={link.productCategory} priceRange={link.priceRange} lang={lang} label={link.label} variant="button" />
          ))}
        </div>
      )}

      {section.faqs && (
        <div className="space-y-6 mt-4">
          {section.faqs.map((faq, i) => (
            <div key={i} className="border border-primary/15 rounded-xl p-5">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{renderLinks(faq.a)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function EnterpriseAiPostContent({ slug, initialLang, articleData, availableLangs }: Props) {
  const clientLang = useLang(initialLang) as Language
  const lang: Language = clientLang

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  const langData = articleData[lang]
  const enData = articleData['en']!
  const article = (langData ?? enData)
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Govern']

  const renderLinks = (text: string) => renderInlineLinks(text, lang)

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" key={`${slug}-${lang}`}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href={lang === 'en' ? '/' : `/${lang}`} className="hover:text-primary">{POST_UI.breadcrumbHome[lang] ?? 'Home'}</a>
            <span>/</span>
            <a href={lang === 'en' ? '/enterprise-ai' : `/${lang}/enterprise-ai`} className="hover:text-primary">{POST_UI.breadcrumbHub[lang] ?? 'Enterprise AI'}</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{article.title}</span>
          </div>
          <LanguageSwitcher initialLang={lang} />
        </div>

        <div className="mb-10">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 ${colors.badge}`}>{article.theme}</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary flex-wrap">
            <time dateTime={article.dateModified ?? article.publishDate} className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              {POST_UI.lastUpdated[lang] ?? POST_UI.lastUpdated['en']} {formatDisplayDate(article.dateModified ?? article.publishDate!, lang)}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{renderLinks(POST_UI.byLine[lang] ?? POST_UI.byLine['en'])}</span>
          </div>
        </div>

        <LangLinksBar cluster="enterprise-ai" slug={slug} availableLangs={availableLangs ?? Object.keys(articleData)} initialLang={lang} />

        {(article as any).affiliateDisclosure && (
          <p className="affiliate-disclosure text-xs text-text-secondary bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 mb-6">
            {AFFILIATE_DISCLOSURE[lang] ?? AFFILIATE_DISCLOSURE['en']}
          </p>
        )}

        {article.affiliateLinks && article.affiliateLinks.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mb-6">
            {article.affiliateLinks.map((link, i) => (
              <AffiliateLink key={i} url={link.url} productName={link.productName} productCategory={link.productCategory} priceRange={link.priceRange} lang={lang} label={link.label} variant="button" />
            ))}
          </div>
        )}

        {article.leadAnswerBlock && (
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4 mb-6">
            <p className="text-text-primary font-semibold leading-relaxed">{renderLinks(article.leadAnswerBlock)}</p>
          </div>
        )}

        {article.intro && (
          <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl article-intro">{renderLinks(article.intro)}</p>
        )}

        {(() => {
          const qat = (article as any).quickAnswerTop
          const qa = qat?.[lang] ?? (qat?.question ? qat : null)
          if (!qa) return null
          return <QuickAnswer lang={lang} question={qa.question} answer={qa.answer} bullets={qa.bullets} updatedDate={qa.updatedDate} />
        })()}

        {(article as any).heroImage && (
          <figure className="mb-8 rounded-xl overflow-hidden">
            <Image src={(article as any).heroImage} alt={article.title || 'Article hero image'} width={1200} height={675} sizes="(max-width: 768px) 100vw, 768px" priority unoptimized className="w-full" />
          </figure>
        )}

        {(article as any).toc && (
          <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5" aria-label="Table of contents">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{(SECTION_HEADER_LABELS[lang] ?? SECTION_HEADER_LABELS['en']!).tableOfContents}</p>
            <ol className="space-y-1">
              {((article as any).toc as { label: string; anchor: string }[]).map((item) => (
                <li key={item.anchor}>
                  <a href={`#${item.anchor.replace(/^#/, '')}`} className="text-sm text-primary hover:text-primary/80 transition-colors">{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="key-takeaways-container">
          {Object.entries(article.sections).map(([key, section]) => {
            const sectionId = slugifySectionId(section as any, key)
            return <SectionBlock key={key} section={section} colors={colors} id={sectionId} lang={lang} renderLinks={renderLinks} />
          })}
        </article>

        {(article as any)?.nextStep?.text && (
          <NextStepBlock text={(article as any).nextStep.text} label={(article as any).nextStep.label} href={(article as any).nextStep.href} lang={lang} />
        )}

        <div id="facts-disclaimer">
          <FactsDisclaimer lang={lang} />
        </div>

        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">{article?.ctaText ?? POST_UI.ctaText[lang] ?? POST_UI.ctaText['en']}</p>
          <a href={(article as any)?.ctaHref ?? (lang === 'en' ? '/waitlist' : `/${lang}/waitlist`)} className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
            {(article as any)?.ctaButton ?? POST_UI.ctaButton[lang] ?? POST_UI.ctaButton['en']}
          </a>
        </div>

        <p className="text-center mt-8">
          <a href={lang === 'en' ? '/enterprise-ai' : `/${lang}/enterprise-ai`} className="text-primary hover:text-primary/80 text-sm">
            {POST_UI.backLink[lang] ?? POST_UI.backLink['en']}
          </a>
        </p>
      </div>
    </div>
  )
}

export function EnterpriseAiPostClient(props: Props) {
  return <EnterpriseAiPostContent {...props} />
}
