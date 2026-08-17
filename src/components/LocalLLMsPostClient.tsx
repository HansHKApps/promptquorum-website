'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { formatDisplayDate } from '@/lib/formatDisplayDate'
import type { LLMSection, LLMArticle } from '@/lib/local-llms/types'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LangLinksBar } from '@/components/LangLinksBar'
import { LLMImageSelector } from '@/components/local-llms/LLMImageSelector'
import { VramCalculator } from '@/components/VramCalculator'
import { QuickAnswer } from '@/components/QuickAnswer'
import { ImageLightbox } from '@/components/ImageLightbox'
import { parseContentBlocks } from '@/lib/parseContentBlocks'
import { FactsDisclaimer } from '@/components/FactsDisclaimer'
import { AFFILIATE_DISCLOSURE } from '@/lib/tracking/affiliate'
import { AffiliateLink } from '@/components/AffiliateLink'
import { CopyButton } from '@/components/CopyButton'
import { NextStepBlock } from '@/components/NextStepBlock'
import { StickyNextStepBar } from '@/components/StickyNextStepBar'

interface Props {
  slug: string
  initialLang?: Language
  articleData: Partial<Record<Language, LLMArticle>>
}

// Section header translations
const SECTION_HEADER_LABELS: Partial<Record<Language, Record<string, string>>> = {
  en: { keyTakeaways: 'Key Takeaways', tableOfContents: 'Contents' },
  de: { keyTakeaways: 'Wichtigste Erkenntnisse', tableOfContents: 'Inhalt' },
  fr: { keyTakeaways: 'Points clés', tableOfContents: 'Sommaire' },
  ja: { keyTakeaways: '重要なポイント', tableOfContents: '目次' },
  zh: { keyTakeaways: '关键要点', tableOfContents: '目录' },
}

const PROS_CONS_LABELS: Partial<Record<Language, { pros: string; cons: string }>> = {
  en: { pros: 'Pros', cons: 'Cons' },
  de: { pros: 'Vorteile', cons: 'Nachteile' },
  fr: { pros: 'Avantages', cons: 'Inconvénients' },
  ja: { pros: '長所', cons: '短所' },
  zh: { pros: '优点', cons: '缺点' },
  es: { pros: 'Ventajas', cons: 'Desventajas' },
  pt: { pros: 'Vantagens', cons: 'Desvantagens' },
  ar: { pros: 'الإيجابيات', cons: 'السلبيات' },
  ko: { pros: '장점', cons: '단점' },
}

// Post UI translations
const POST_UI: Record<string, Record<string, string>> = {
  byLine: {
    en: 'By [Hans Kuepper](/about) · Founder of PromptQuorum, multi-model AI dispatch tool · PromptQuorum',
    de: 'Von [Hans Kuepper](/about) · Gründer von PromptQuorum, Multi-Model-AI-Dispatch-Tool · PromptQuorum',
    fr: 'Par [Hans Kuepper](/about) · Fondateur de PromptQuorum, outil de dispatch multi-modèle · PromptQuorum',
    ja: '[Hans Kuepper](/about) 著 · PromptQuorumの創設者、マルチモデルAIディスパッチツール · PromptQuorum',
    zh: '[Hans Kuepper](/about) 作者 · PromptQuorum创始人，多模型AI调度工具 · PromptQuorum',
    es: 'Por [Hans Kuepper](/about) · Fundador de PromptQuorum, herramienta de despacho multi-modelo · PromptQuorum',
  },
  lastUpdated: {
    en: 'Last updated:',
    de: 'Aktualisiert:',
    fr: 'Dernière mise à jour:',
    ja: '最終更新:',
    zh: '最后更新:',
  },
  ctaText: {
    en: 'Run PromptQuorum with a local LLM, your own API keys, or both — you pick the backend.',
    de: 'Nutzen Sie PromptQuorum mit einem lokalen LLM, eigenen API-Schlüsseln oder beidem — Sie wählen das Backend.',
    fr: 'Utilisez PromptQuorum avec un LLM local, vos propres clés API, ou les deux — vous choisissez le backend.',
    ja: 'ローカルLLM、独自のAPIキー、またはその両方でPromptQuorumを使用できます — バックエンドはあなたが選択します。',
    zh: '使用本地LLM、您自己的API密钥或两者运行PromptQuorum — 您来决定使用哪个后端。',
  },
  ctaButton: {
    en: 'Download the PromptQuorum Beta →',
    de: 'PromptQuorum-Beta herunterladen →',
    fr: 'Télécharger la bêta PromptQuorum →',
    ja: 'PromptQuorumベータ版をダウンロード →',
    zh: '下载 PromptQuorum 测试版 →',
  },
  backLink: {
    en: '← Back to Local LLMs',
    de: '← Zurück zu Lokale LLMs',
    fr: '← Retour aux LLMs locaux',
    ja: '← ローカルLLMに戻る',
    zh: '← 返回本地LLM',
  },
  breadcrumbHome: {
    en: 'Home',
    de: 'Startseite',
    fr: 'Accueil',
    ja: 'ホーム',
    zh: '主页',
    pt: 'Início',
  },
  breadcrumbHub: {
    en: 'Local LLMs',
    de: 'Lokale LLMs',
    fr: 'LLMs locaux',
    ja: 'ローカルLLM',
    zh: '本地LLM',
    pt: 'LLMs locais',
  },
  snippetOneSentence: {
    en: '📍 In One Sentence',
    de: '📍 In einem Satz',
    fr: '📍 En une phrase',
    ja: '📍 一文で説明',
    zh: '📍 简单一句话',
  },
  snippetPlainTerms: {
    en: '💬 In Plain Terms',
    de: '💬 In einfachen Worten',
    fr: '💬 En termes simples',
    ja: '💬 簡潔に説明',
    zh: '💬 简单来说',
  },
}

// Map language codes to their locale strings for date formatting
const LANGUAGE_TO_LOCALE: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  ja: 'ja-JP',
  zh: 'zh-CN',
}

const THEME_COLORS: Record<string, { dot: string; badge: string }> = {
  'Getting Started':       { dot: 'bg-blue-400',      badge: 'bg-blue-50 text-blue-700 border border-blue-200' },
  'Best Models':           { dot: 'bg-emerald-400',   badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  'Tools & Interfaces':    { dot: 'bg-purple-400',    badge: 'bg-purple-50 text-purple-700 border border-purple-200' },
  'Hardware & Performance': { dot: 'bg-orange-400',   badge: 'bg-orange-50 text-orange-700 border border-orange-200' },
  'Advanced Techniques':   { dot: 'bg-rose-400',      badge: 'bg-rose-50 text-rose-700 border border-rose-200' },
  'Enterprise':            { dot: 'bg-amber-400',     badge: 'bg-amber-50 text-amber-700 border border-amber-200' },
}

const PRESENTATION_UI: Partial<Record<Language, { heading: string; description: string; savePdf: string; fallbackDescription: string }>> = {
  en: {
    heading: 'Slide Deck',
    description: 'Browse the slides below or download as PDF for offline reference.',
    savePdf: 'Download Reference Card (PDF)',
    fallbackDescription: 'Interactive slide deck for this article.',
  },
  de: {
    heading: 'Präsentation',
    description: 'Folien unten ansehen oder als PDF herunterladen.',
    savePdf: 'Präsentation herunterladen (PDF)',
    fallbackDescription: 'Interaktive Folien für diesen Artikel.',
  },
  fr: {
    heading: 'Présentation',
    description: 'Parcourez les diapositives ci-dessous ou téléchargez en PDF.',
    savePdf: 'Télécharger la fiche de référence (PDF)',
    fallbackDescription: 'Diaporama interactif pour cet article.',
  },
  ja: {
    heading: 'スライドデッキ',
    description: '以下のスライドを閲覧するか、PDFとしてダウンロードしてください。',
    savePdf: 'リファレンスカードをダウンロード（PDF）',
    fallbackDescription: 'この記事のインタラクティブスライド。',
  },
  zh: {
    heading: '演示文稿',
    description: '浏览以下幻灯片或下载PDF以供离线参考。',
    savePdf: '下载参考卡（PDF）',
    fallbackDescription: '本文的交互式幻灯片。',
  },
  ar: {
    heading: 'العرض التقديمي',
    description: 'تصفّح الشرائح أدناه أو نزّلها بصيغة PDF للرجوع إليها دون اتصال.',
    savePdf: 'تنزيل البطاقة المرجعية (PDF)',
    fallbackDescription: 'عرض شرائح تفاعلي لهذا المقال.',
  },
}

// Render inline link placeholders and markdown links [text](url)
// Injects ?lang= query parameter for internal links when lang is not 'en'
function renderInlineLinks(
  text: string,
  lang: Language = 'en',
  slug = ''
) {
  const parts = text.split(/(\[[^\]]+\]\([^\)]+\)|\[[^\]]+\])/g)
  return parts.map((part, i) => {
    // Handle markdown links: [text](url)
    const markdownMatch = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
    if (markdownMatch) {
      const [, label, url] = markdownMatch
      // External links: open in new tab with security attributes
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            {label}
          </a>
        )
      }
      // Internal links: use Next.js Link with language path prefix
      let finalUrl = url
      if (lang !== 'en' && url.startsWith('/') && !url.includes('?lang=') && !url.startsWith(`/${lang}/`)) {
        if (url.includes('#')) {
          const [basePath, anchor] = url.split('#')
          finalUrl = `/${lang}${basePath}#${anchor}`
        } else {
          finalUrl = `/${lang}${url}`
        }
      }
      return (
        <Link prefetch={false} key={i} href={finalUrl} className="text-primary font-medium hover:underline">
          {label}
        </Link>
      )
    }

    // Handle bare URLs and **bold** markers
    const URL_PATTERN = /(https?:\/\/[^\s,;)\]"]+)/g
    const segments = part.split(URL_PATTERN)
    return (
      <span key={i}>
        {segments.map((seg, j) => {
          // Check if this segment is a URL by testing with a fresh regex
          if (/(https?:\/\/[^\s,;)\]"]+)/.test(seg)) {
            return (
              <a
                key={j}
                href={seg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline break-all"
              >
                {seg}
              </a>
            )
          }
          // Handle **bold** markers within non-URL text
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

function renderMarkdownTable(lines: string[], lang: Language, renderLinks: (text: string) => React.ReactNode): JSX.Element {
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
              <th key={i} className="border border-gray-300 px-4 py-2 text-left font-semibold text-text-primary">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2 text-text-secondary">
                  {renderLinks(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface LightboxImage {
  src: string
  alt: string
  caption?: string
}

function SectionBlock({ section, colors, id, lang, renderLinks }: { section: LLMSection; colors: { dot: string; badge: string }; id?: string; lang: Language; renderLinks: (text: string) => React.ReactNode }) {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null)

  return (
    <div className="mt-8" id={id}>
      {section.title && !section.isTldr && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">
          {renderLinks(section.title)}
        </h2>
      )}

      {/* TL;DR block */}
      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{(SECTION_HEADER_LABELS[lang] ?? SECTION_HEADER_LABELS["en"]!).keyTakeaways}</p>
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

      {/* Blockquote content */}
      {section.blockquote && (
        <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-5 py-3 my-6 text-text-secondary">
          <p className="italic leading-relaxed">{renderLinks(section.blockquote)}</p>
          {section.blockquoteSource && (
            <footer className="mt-2 text-xs font-semibold text-text-secondary not-italic opacity-75">
              — {renderLinks(section.blockquoteSource)}
            </footer>
          )}
        </blockquote>
      )}

      {/* Regular content paragraphs or markdown tables */}
      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(() => {
            const contentArray = Array.isArray(section.content) ? section.content : [section.content]
            if (isMarkdownTable(contentArray)) {
              return renderMarkdownTable(contentArray, lang, renderLinks)
            }
            return parseContentBlocks(section.content).map((block, i) => {
              if (block.type === 'h3') return (
                <h3 key={i} className="text-base font-semibold text-text-primary mt-2">{block.text}</h3>
              )
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
              if (block.type === 'table') return renderMarkdownTable(block.lines, lang, renderLinks)
              return <p key={i} className="text-text-secondary leading-relaxed">{renderLinks(block.text)}</p>
            })
          })()}
        </div>
      )}

      {/* LLM Snippet Blocks — "In One Sentence" / "In Plain Terms" (Rule 12) */}
      {section.snippetBlocks && (
        <div className="space-y-3 my-6">
          {section.snippetBlocks.map((snippet, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                {snippet.type === 'one-sentence' ? POST_UI.snippetOneSentence[lang] : POST_UI.snippetPlainTerms[lang]}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                {renderLinks(snippet.text)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Prompt Examples — Bad → Good pairs (Rule 15) */}
      {section.promptExamples && (
        <div className="space-y-4 my-6">
          {section.promptExamples.map((example, i) => {
            const isBad = example.label.toLowerCase().includes('bad') || example.label.includes('❌')
            return (
              <div key={i} className={`border rounded-xl p-4 ${isBad ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isBad ? 'text-red-600' : 'text-green-600'}`}>
                  {example.label}
                </p>
                <blockquote className={`text-sm leading-relaxed italic ${isBad ? 'text-red-900' : 'text-green-900'}`}>
                  &ldquo;{renderLinks(example.text)}&rdquo;
                </blockquote>
              </div>
            )
          })}
        </div>
      )}

      {/* Component rendering */}
      {section.component === 'VramCalculator' && (
        <div className="my-8">
          <VramCalculator />
        </div>
      )}

      {/* Decision block */}
      {section.decisionBlock && (
        <div className="mt-6 border border-primary/20 rounded-xl overflow-hidden">
          <h3 className="text-lg font-bold text-text-primary px-5 py-3 bg-primary/5 border-b border-primary/10">
            {section.decisionBlock.title}
          </h3>
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-primary/10">
            {/* Use local if */}
            <div className="p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-green-600 mb-2">Use a local LLM if:</p>
              <ul className="space-y-1.5">
                {section.decisionBlock.localIf.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 text-green-500 mt-0.5">•</span>
                    <span>{renderLinks(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Use cloud if */}
            <div className="p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-2">Use a cloud model if:</p>
              <ul className="space-y-1.5">
                {section.decisionBlock.cloudIf.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 text-orange-500 mt-0.5">•</span>
                    <span>{renderLinks(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quick decision */}
            <div className="p-4 bg-primary/3">
              <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Quick decision:</p>
              <ul className="space-y-1.5">
                {section.decisionBlock.quick.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="flex-shrink-0 text-primary mt-0.5">→</span>
                    <span>{renderLinks(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bullet list */}
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

      {/* Numbered list */}
      {section.numberedItems && (
        <ol className="list-none space-y-4 my-4">
          {section.numberedItems.map((item, i) => {
            const isObject = item && typeof item === 'object' && 'title' in item
            const title = isObject ? (item as any).title : item
            const whyItMatters = isObject ? (item as any).whyItMatters : null
            return (
              <li key={i} className="flex gap-4 text-text-secondary">
                <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot.replace('bg-', 'bg-').replace('-400', '-500')}`}>
                  {i + 1}
                </span>
                <div className="leading-relaxed pt-0.5">
                  <span className="font-semibold">{renderLinks(title)}</span>
                  {whyItMatters && (
                    <>
                      <br />
                      <span className="text-sm italic">Why it matters: {whyItMatters}</span>
                    </>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      )}

      {/* Table */}
      {section.rows && section.columns && (
        <div className="relative overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                {section.columns.map((col, colIdx) => (
                  <th key={col} className={`text-left p-2 sm:p-3 font-bold text-text-primary bg-primary/5${colIdx === 0 ? ' sticky left-0 z-10' : ''}`}>
                    {col}
                  </th>
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
                      <td key={col} className={colIdx === 0 ? 'p-2 sm:p-3 sticky left-0 z-10 bg-white group-hover:bg-primary/5 transition-colors font-medium text-text-primary' : 'p-2 sm:p-3 text-text-secondary'}>
                        {renderLinks(value)}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/80 to-transparent sm:hidden" />
          {section.note && (
            <p className="text-sm text-text-secondary leading-relaxed mt-4 italic">
              {renderLinks(section.note)}
            </p>
          )}
        </div>
      )}

      {/* YouTube embed */}
      {section.youtubeUrl && (
        <div className="my-8">
          <div className="relative w-full overflow-hidden rounded-lg shadow-md bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src={section.youtubeUrl.replace('youtube.com/watch?v=', 'youtube-nocookie.com/embed/').split('&')[0]}
              title="Video tutorial"
              className="absolute top-0 left-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Code block */}
      {section.codeBlock && (
        <div className="my-6">
          <div className="flex items-center justify-between bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
            {section.codeLanguage ? (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-2">{section.codeLanguage}</span>
              </div>
            ) : (
              <div />
            )}
            <CopyButton text={section.codeBlock} />
          </div>
          <pre className="bg-gray-900 text-gray-100 text-xs leading-relaxed p-5 overflow-x-auto rounded-b-lg">
            <code>{section.codeBlock}</code>
          </pre>
        </div>
      )}

      {/* Image with caption */}
      {section.image && (
        <figure className="my-8 flex flex-col items-center cursor-zoom-in" onClick={() => setLightboxImage({
          src: section.image!,
          alt: section.imageCaption || (section.title ? `${section.title} diagram` : 'PromptQuorum article diagram'),
          caption: section.imageCaption,
        })}>
          <img
            src={section.image}
            alt={section.imageCaption || (section.title ? `${section.title} diagram` : 'PromptQuorum article diagram')}
            className="w-full max-w-2xl rounded-lg border border-primary/20 shadow-sm hover:shadow-md transition-shadow"
            loading="lazy"
          />
          {section.imageCaption && (
            <figcaption className="text-sm text-text-secondary italic mt-3 text-center max-w-2xl">
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
      )}

      {/* Lightbox component */}
      {lightboxImage && (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          caption={lightboxImage.caption}
          onClose={() => setLightboxImage(null)}
        />
      )}

      {/* Image placeholder */}
      {section.imagePlaceholder && (
        <figure className="my-8 flex flex-col items-center bg-primary/5 border border-dashed border-primary/30 rounded-lg p-8">
          <div className="text-center">
            <p className="text-primary/60 text-sm font-semibold mb-2">📊 Image Coming Soon</p>
            <p className="text-text-secondary text-sm">{section.imageCaption}</p>
          </div>
        </figure>
      )}

      {/* Callout boxes */}
      {section.callouts && (
        <div className="space-y-3 my-6">
          {section.callouts.map((callout, i) => {
            const calloutIcons: Record<string, string> = {
              'warning': '⚠️',
              'tip': '💡',
              'insight': '🔍',
              'note': '📌',
              'practice': '🛠️',
            }
            const icon = calloutIcons[callout.type] || '•'
            const bgColor = callout.type === 'warning' ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
            return (
              <div key={i} className={`border ${bgColor} rounded-lg p-4`}>
                <p className="text-text-secondary text-sm">
                  <span className="mr-2">{icon}</span>
                  <span className="font-semibold">{callout.type.charAt(0).toUpperCase() + callout.type.slice(1)}:</span>{' '}
                  {renderLinks(callout.text)}
                </p>
              </div>
            )
          })}
        </div>
      )}

      {/* Affiliate product links */}
      {section.affiliateLinks && section.affiliateLinks.length > 0 && (
        <div className="flex flex-wrap gap-2.5 my-5">
          {section.affiliateLinks.map((link, i) => (
            <AffiliateLink
              key={i}
              url={link.url}
              productName={link.productName}
              productCategory={link.productCategory}
              priceRange={link.priceRange}
              lang={lang}
              label={link.label}
              variant="button"
            />
          ))}
        </div>
      )}

      {/* Ranked buying-guide items */}
      {section.rankedItems && section.rankedItems.length > 0 && (
        <div className="space-y-6 my-6">
          {section.rankedItems.map((item, i) => {
            const heading = item.title ?? item.name ?? ''
            const body = item.content ?? item.verdict ?? ''
            const prosConsLabels = PROS_CONS_LABELS[lang] ?? PROS_CONS_LABELS.en!
            return (
              <div key={i} className="border border-primary/15 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot}`}>
                    {item.rank}
                  </span>
                  <div>
                    <h3 className="font-bold text-text-primary text-lg">{renderLinks(heading)}</h3>
                    {item.tagline && (
                      <p className="text-sm text-text-secondary italic">{renderLinks(item.tagline)}</p>
                    )}
                  </div>
                </div>
                {body && (
                  <p className="text-text-secondary leading-relaxed text-sm mb-3">{renderLinks(body)}</p>
                )}
                {(item.pros?.length || item.cons?.length) && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-3">
                    {item.pros && item.pros.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-green-600 mb-1.5">{prosConsLabels.pros}</p>
                        <ul className="space-y-1">
                          {item.pros.map((p, j) => (
                            <li key={j} className="text-sm text-text-secondary flex gap-2">
                              <span className="text-green-500 flex-shrink-0">+</span>
                              <span>{renderLinks(p)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.cons && item.cons.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-1.5">{prosConsLabels.cons}</p>
                        <ul className="space-y-1">
                          {item.cons.map((c, j) => (
                            <li key={j} className="text-sm text-text-secondary flex gap-2">
                              <span className="text-orange-500 flex-shrink-0">–</span>
                              <span>{renderLinks(c)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {item.affiliateLinks && item.affiliateLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {item.affiliateLinks.map((link, j) => (
                      <AffiliateLink
                        key={j}
                        url={link.url}
                        productName={link.productName ?? link.label ?? (heading || 'Product')}
                        productCategory={link.productCategory ?? 'product'}
                        priceRange={link.priceRange}
                        lang={lang}
                        label={link.label}
                        variant="button"
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* FAQ */}
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

function LocalLLMsPostContent({ slug, initialLang, articleData }: Props) {
  const clientLang = useLang(initialLang) as Language
  const lang: Language = clientLang

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  // Use language data if it exists, otherwise fall back to English
  const langData = articleData[lang]
  const enData = articleData['en']!
  const article = (langData ?? enData)
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Getting Started']

  // Bound helper for rendering links
  const renderLinks = (text: string) =>
    renderInlineLinks(text, lang, slug)

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" key={`${slug}-${lang}`}>
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb + language */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href={lang === 'en' ? '/' : `/${lang}`} className="hover:text-primary">{POST_UI.breadcrumbHome[lang] ?? 'Home'}</a>
            <span>/</span>
            <a href={lang === 'en' ? '/local-llms' : `/${lang}/local-llms`} className="hover:text-primary">{POST_UI.breadcrumbHub[lang] ?? 'Local LLMs'}</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{article.title}</span>
          </div>
          <LanguageSwitcher initialLang={lang} />
        </div>

        {/* Article header */}
        <div className="mb-10">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full mb-4 ${colors.badge}`}>
            {article.theme}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-text-secondary flex-wrap">
            <time dateTime={article.dateModified ?? article.publishDate} className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {POST_UI.lastUpdated[lang] ?? POST_UI.lastUpdated['en']} {formatDisplayDate(article.dateModified ?? article.publishDate, lang)}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{renderLinks(POST_UI.byLine[lang] ?? POST_UI.byLine['en'])}</span>
          </div>
        </div>

        {/* Cross-language links */}
        <LangLinksBar cluster="local-llms" slug={slug} availableLangs={Object.keys(articleData)} initialLang={lang} />

        {/* Affiliate disclosure — neutral third-party-link notice */}
        {(article as any).affiliateDisclosure && (
          <p className="affiliate-disclosure text-xs text-text-secondary bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 mb-6">
            {AFFILIATE_DISCLOSURE[lang] ?? AFFILIATE_DISCLOSURE['en']}
          </p>
        )}

        {/* Article-level affiliate links (not attached to any single section) */}
        {article.affiliateLinks && article.affiliateLinks.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mb-6">
            {article.affiliateLinks.map((link, i) => (
              <AffiliateLink
                key={i}
                url={link.url}
                productName={link.productName}
                productCategory={link.productCategory}
                priceRange={link.priceRange}
                lang={lang}
                label={link.label}
                variant="button"
              />
            ))}
          </div>
        )}

        {/* Lead Answer Block — canonical definition for AI crawlers (Rule 31) */}
        {article.leadAnswerBlock && (
          <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4 mb-6">
            <p className="text-text-primary font-semibold leading-relaxed">
              {renderLinks(article.leadAnswerBlock)}
            </p>
          </div>
        )}

        {/* Article intro paragraph */}
        {article.intro && (
          <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl article-intro">
            {renderLinks(article.intro)}
          </p>
        )}

        {/* Quick Answer Block — Top of page for featured snippet */}
        {(article as any).quickAnswerTop && (article as any).quickAnswerTop[lang] && (
          <QuickAnswer
            lang={lang}
            question={(article as any).quickAnswerTop[lang].question}
            answer={(article as any).quickAnswerTop[lang].answer}
            bullets={(article as any).quickAnswerTop[lang].bullets}
            updatedDate={(article as any).quickAnswerTop[lang].updatedDate}
          />
        )}

        {/* Quick Answer Block — AI-crawler-optimized featured snippet */}
        {article.quickAnswer && (
          <section className="quick-answer bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-text-primary mb-3">
              {article.quickAnswer.title}
            </h2>
            <p className="text-text-secondary text-sm mb-3 leading-relaxed">
              {article.quickAnswer.intro}
            </p>
            <ul className="space-y-2 mb-3">
              {article.quickAnswer.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm text-text-secondary">
                  <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                  <span>{renderLinks(bullet)}</span>
                </li>
              ))}
            </ul>
            {article.quickAnswer.footer && (
              <p className="text-text-secondary text-sm leading-relaxed">
                {article.quickAnswer.footer}
              </p>
            )}
          </section>
        )}

        {/* Presentation / Gamma slide deck */}
        {(article as any).gammaEmbedUrl && (
          <div className="mt-6 pt-8 border-t border-primary/20">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {PRESENTATION_UI[lang]?.heading ?? PRESENTATION_UI["en"]?.heading}: {article.title}
            </h2>
            <p className="text-text-secondary mb-4 text-sm">
              {(article as any).gammaDescription ?? (PRESENTATION_UI[lang] ?? PRESENTATION_UI["en"])?.fallbackDescription}
            </p>
            <p className="text-sm mb-4">
              {(PRESENTATION_UI[lang] ?? PRESENTATION_UI["en"])?.description}{' '}
              <a
                href={`${(article as any).gammaEmbedUrl}?lang=${lang}&print=1`}
                className="text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {(PRESENTATION_UI[lang] ?? PRESENTATION_UI["en"])?.savePdf}
              </a>
            </p>
            <iframe
              src={`${(article as any).gammaEmbedUrl}?lang=${lang}`}
              title={`${article.title} — PromptQuorum`}
              className="w-full rounded-xl border border-primary/20 shadow-sm"
              style={{ height: 'min(80vh, max(600px, 56.25vw))' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Hero Component or Image */}
        {(article as any).heroComponent === 'LLMImageSelector' && (
          <LLMImageSelector />
        )}

        {/* Static Hero Image for Discover */}
        {(article as any).heroImage && (
          <figure className="mb-8 rounded-xl overflow-hidden">
            <Image
              src={(article as any).heroImage}
              alt={article.title || 'Article hero image'}
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="w-full"
            />
          </figure>
        )}

        {/* Table of Contents */}
        {(article as any).toc && (
          <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5" aria-label="Table of contents">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{(SECTION_HEADER_LABELS[lang] ?? SECTION_HEADER_LABELS["en"]!).tableOfContents}</p>
            <ol className="space-y-1">
              {((article as any).toc as { label: string; anchor: string }[]).map((item) => (
                <li key={item.anchor}>
                  <a href={`#${item.anchor.replace(/^#/, '')}`} className="text-sm text-primary hover:text-primary/80 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Sections */}
        <article className="key-takeaways-container">
          {Object.entries(article.sections).map(([key, section]) => {
            const sectionId = section.isTldr ? (section.id ?? 'key-takeaways') : (section.id ?? (section.title ? section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : undefined))
            return (
              <SectionBlock key={key} section={section} colors={colors} id={sectionId} lang={lang} renderLinks={renderLinks} />
            )
          })}
        </article>

        {(article as any)?.nextStep?.text && (
          <NextStepBlock
            text={(article as any).nextStep.text}
            label={(article as any).nextStep.label}
            href={(article as any).nextStep.href}
            lang={lang}
          />
        )}

        <div id="facts-disclaimer">
          <FactsDisclaimer lang={lang} />
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">
            {article?.ctaText ?? POST_UI.ctaText[lang] ?? POST_UI.ctaText['en']}
          </p>
          <a
            href={(article as any)?.ctaHref ?? (lang === 'en' ? '/waitlist' : `/${lang}/waitlist`)}
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {(article as any)?.ctaButton ?? POST_UI.ctaButton[lang] ?? POST_UI.ctaButton['en']}
          </a>
        </div>

        <p className="text-center mt-8">
          <a href={lang === 'en' ? '/local-llms' : `/${lang}/local-llms`} className="text-primary hover:text-primary/80 text-sm">
            {POST_UI.backLink[lang] ?? POST_UI.backLink['en']}
          </a>
        </p>

      </div>

      {(article as any)?.nextStep?.text && (
        <StickyNextStepBar
          label={(article as any).nextStep.label}
          href={(article as any).nextStep.href}
          lang={lang}
          triggerElementId="facts-disclaimer"
        />
      )}
    </div>
  )
}

export function LocalLLMsPostClient(props: Props) {
  return <LocalLLMsPostContent {...props} />
}
