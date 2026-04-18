'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { llmContent, type LLMSection } from '@/lib/local-llms/content'
import { LLM_SLUG_TO_KEY } from '@/lib/local-llms/slugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LLMImageSelector } from '@/components/local-llms/LLMImageSelector'

interface Props {
  slug: string
  initialLang?: Language
}

// Section header translations
const SECTION_HEADER_LABELS: Record<Language, Record<string, string>> = {
  en: { keyTakeaways: 'Key Takeaways' },
  de: { keyTakeaways: 'Wichtigste Erkenntnisse' },
  fr: { keyTakeaways: 'Points clés' },
  ja: { keyTakeaways: '重要なポイント' },
  zh: { keyTakeaways: '关键要点' },
}

// Post UI translations
const POST_UI: Record<string, Record<string, string>> = {
  byLine: {
    en: 'By [Hans Kuepper](/about) · Founder of PromptQuorum, multi-model AI dispatch tool · PromptQuorum',
    de: 'Von [Hans Kuepper](/about) · Gründer von PromptQuorum, Multi-Model-AI-Dispatch-Tool · PromptQuorum',
    fr: 'Par [Hans Kuepper](/about) · Fondateur de PromptQuorum, outil de dispatch multi-modèle · PromptQuorum',
    ja: '[Hans Kuepper](/about) 著 · PromptQuorumの創設者、マルチモデルAIディスパッチツール · PromptQuorum',
    zh: '[Hans Kuepper](/about) 作者 · PromptQuorum创始人，多模型AI调度工具 · PromptQuorum',
  },
  lastUpdated: {
    en: 'Last updated:',
    de: 'Aktualisiert:',
    fr: 'Dernière mise à jour:',
    ja: '最終更新:',
    zh: '最后更新:',
  },
  ctaText: {
    en: 'Compare your local LLM against 25+ cloud models simultaneously with PromptQuorum.',
    de: 'Vergleichen Sie Ihr lokales LLM gleichzeitig mit 25+ Cloud-Modellen in PromptQuorum.',
    fr: 'Comparez votre LLM local avec 25+ modèles cloud simultanément avec PromptQuorum.',
    ja: 'PromptQuorumで、ローカルLLMを25以上のクラウドモデルと同時に比較しましょう。',
    zh: '使用PromptQuorum将您的本地LLM与25+个云模型同时进行比较。',
  },
  ctaButton: {
    en: 'Try PromptQuorum free →',
    de: 'PromptQuorum kostenlos testen →',
    fr: 'Essayer PromptQuorum gratuitement →',
    ja: 'PromptQuorumを無料で試す →',
    zh: '免费试用PromptQuorum →',
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
  },
  breadcrumbHub: {
    en: 'Local LLMs',
    de: 'Lokale LLMs',
    fr: 'LLMs locaux',
    ja: 'ローカルLLM',
    zh: '本地LLM',
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

const PRESENTATION_UI: Record<Language, { heading: string; description: string; savePdf: string; fallbackDescription: string }> = {
  en: {
    heading: 'Slide Deck',
    description: 'Browse the slides below or download as PDF for offline reference.',
    savePdf: 'Download Reference Card (PDF)',
    fallbackDescription: 'Interactive slide deck for this article.',
  },
  de: {
    heading: 'Präsentation',
    description: 'Folien unten ansehen oder als PDF herunterladen.',
    savePdf: 'Referenzkarte herunterladen (PDF)',
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
}

// Render inline link placeholders and markdown links [text](url)
// Injects ?lang= query parameter for internal links when lang is not 'en'
function renderInlineLinks(text: string, lang: Language = 'en') {
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
      // Internal links: use Next.js Link with lang parameter injection
      let finalUrl = url
      if (lang !== 'en' && url.startsWith('/') && !url.includes('?lang=')) {
        if (url.includes('#')) {
          const [basePath, anchor] = url.split('#')
          finalUrl = `${basePath}?lang=${lang}#${anchor}`
        } else {
          finalUrl = `${url}?lang=${lang}`
        }
      }
      return (
        <Link key={i} href={finalUrl} className="text-primary font-medium hover:underline">
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

function SectionBlock({ section, colors, id, lang }: { section: LLMSection; colors: { dot: string; badge: string }; id?: string; lang: Language }) {
  return (
    <div className="mt-8" id={id}>
      {section.title && !section.isTldr && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">
          {renderInlineLinks(section.title, lang)}
        </h2>
      )}

      {/* TL;DR block */}
      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4 key-takeaways">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">{SECTION_HEADER_LABELS[lang].keyTakeaways}</p>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary text-sm">
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                <span>{renderInlineLinks(item, lang)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Blockquote content */}
      {section.blockquote && (
        <blockquote className="border-l-4 border-primary/40 bg-primary/5 pl-5 py-3 my-6 text-text-secondary">
          <p className="italic leading-relaxed">{renderInlineLinks(section.blockquote, lang)}</p>
          {section.blockquoteSource && (
            <footer className="mt-2 text-xs font-semibold text-text-secondary not-italic opacity-75">
              — {renderInlineLinks(section.blockquoteSource, lang)}
            </footer>
          )}
        </blockquote>
      )}

      {/* Regular content paragraphs */}
      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(Array.isArray(section.content) ? section.content : [section.content]).map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {renderInlineLinks(para, lang)}
            </p>
          ))}
        </div>
      )}

      {/* Bullet list */}
      {!section.isTldr && section.items && (
        <ul className="space-y-3 my-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-text-secondary">
              <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${colors.dot}`} />
              <span className="leading-relaxed">{renderInlineLinks(item, lang)}</span>
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
                  <span className="font-semibold">{renderInlineLinks(title, lang)}</span>
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
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                {section.columns.map((col) => (
                  <th key={col} className="text-left p-3 font-bold text-text-primary bg-primary/5">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr key={i} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                  {section.columns!.map((col) => (
                    <td key={col} className="p-3 text-text-secondary">
                      {renderInlineLinks(row[col] ?? '—', lang)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {section.note && (
            <p className="text-sm text-text-secondary leading-relaxed mt-4 italic">
              {renderInlineLinks(section.note, lang)}
            </p>
          )}
        </div>
      )}

      {/* Code block */}
      {section.codeBlock && (
        <div className="my-6">
          {section.codeLanguage && (
            <div className="flex items-center gap-2 bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="ml-2">{section.codeLanguage}</span>
            </div>
          )}
          <pre className={`bg-gray-900 text-gray-100 text-xs leading-relaxed p-5 overflow-x-auto ${section.codeLanguage ? 'rounded-b-lg' : 'rounded-lg'}`}>
            <code>{section.codeBlock}</code>
          </pre>
        </div>
      )}

      {/* Image with caption */}
      {section.image && (
        <figure className="my-8 flex flex-col items-center">
          <img
            src={section.image}
            alt={section.imageCaption || 'Article visualization'}
            className="w-full max-w-2xl rounded-lg border border-primary/20 shadow-sm"
          />
          {section.imageCaption && (
            <figcaption className="text-sm text-text-secondary italic mt-3 text-center max-w-2xl">
              {section.imageCaption}
            </figcaption>
          )}
        </figure>
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

      {/* FAQ */}
      {section.faqs && (
        <div className="space-y-6 mt-4">
          {section.faqs.map((faq, i) => (
            <div key={i} className="border border-primary/15 rounded-xl p-5">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{renderInlineLinks(faq.a, lang)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function LocalLLMsPostContent({ slug, initialLang }: Props) {
  const clientLang = useLang() as Language
  const lang: Language = (clientLang !== 'en' ? clientLang : (initialLang ?? clientLang))
  const key = LLM_SLUG_TO_KEY[slug]
  const articleData = key ? llmContent[key] : null

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  // Use language data if it exists, otherwise fall back to English
  const langData = articleData[lang]
  const enData = articleData['en']!
  const article = (langData ?? enData)
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Getting Started']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6" key={`${slug}-${lang}`}>
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb + language */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href="/" className="hover:text-primary">{POST_UI.breadcrumbHome[lang] ?? 'Home'}</a>
            <span>/</span>
            <a href="/local-llms" className="hover:text-primary">{POST_UI.breadcrumbHub[lang] ?? 'Local LLMs'}</a>
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
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <time dateTime={article.dateModified ?? article.publishDate}>
              {POST_UI.lastUpdated[lang] ?? POST_UI.lastUpdated['en']} {new Date((article.dateModified ?? article.publishDate) + 'T00:00:00Z').toLocaleDateString(LANGUAGE_TO_LOCALE[lang] ?? 'en-US', { month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>{renderInlineLinks(POST_UI.byLine[lang] ?? POST_UI.byLine['en'], lang)}</span>
          </div>
        </div>

        {/* Article intro paragraph */}
        {article.intro && (
          <p className="text-lg text-text-secondary leading-relaxed mb-6 max-w-2xl article-intro">
            {renderInlineLinks(article.intro, lang)}
          </p>
        )}

        {/* Presentation / Gamma slide deck */}
        {(article as any).gammaEmbedUrl && (
          <div className="mt-6 pt-8 border-t border-primary/20">
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              {PRESENTATION_UI[lang]?.heading}: {article.title} (Slide Deck)
            </h2>
            <p className="text-text-secondary mb-4 text-sm">
              {(article as any).gammaDescription ?? PRESENTATION_UI[lang]?.fallbackDescription}
            </p>
            <p className="text-sm mb-4">
              {PRESENTATION_UI[lang]?.description}{' '}
              <a
                href={`${(article as any).gammaEmbedUrl}?lang=${lang}&print=1`}
                className="text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                {PRESENTATION_UI[lang]?.savePdf}
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

        {/* Table of Contents */}
        {(article as any).toc && (
          <nav className="mb-8 bg-primary/5 border border-primary/20 rounded-lg p-5" aria-label="Table of contents">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Contents</p>
            <ol className="space-y-1">
              {((article as any).toc as { label: string; anchor: string }[]).map((item) => (
                <li key={item.anchor}>
                  <a href={item.anchor} className="text-sm text-primary hover:text-primary/80 transition-colors">
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
              <SectionBlock key={key} section={section} colors={colors} id={sectionId} lang={lang} />
            )
          })}
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">
            {POST_UI.ctaText[lang] ?? POST_UI.ctaText['en']}
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {POST_UI.ctaButton[lang] ?? POST_UI.ctaButton['en']}
          </a>
        </div>

        <p className="text-center mt-8">
          <a href="/local-llms" className="text-primary hover:text-primary/80 text-sm">
            {POST_UI.backLink[lang] ?? POST_UI.backLink['en']}
          </a>
        </p>

      </div>
    </div>
  )
}

export function LocalLLMsPostClient(props: Props) {
  return <LocalLLMsPostContent {...props} />
}
