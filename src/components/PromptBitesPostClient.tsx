'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { LangLinksBar } from '@/components/LangLinksBar'
import { CopyButton } from '@/components/CopyButton'
import { AffiliateLink } from '@/components/AffiliateLink'
import { AFFILIATE_DISCLOSURE } from '@/lib/tracking/affiliate'
import { promptBitesContent } from '@/lib/prompt-bites/articles-barrel'
import { PROMPT_BITES_SLUG_TO_KEY } from '@/lib/prompt-bites/slugs'
import type { Language } from '@/lib/blog/blogContent'
import type { LLMSection } from '@/lib/local-llms/types'

interface Props {
  slug: string
  lang: Language
}

function promptBitesHubHref(lang: Language): string {
  return lang === 'en' ? '/prompt-bites' : `/${lang}/prompt-bites`
}

const BREADCRUMB_LABELS: Partial<Record<Language, Record<string, string>>> = {
  en: { home: 'Home', hub: 'Prompt Bites' },
  de: { home: 'Startseite', hub: 'Prompt-Häppchen' },
  fr: { home: 'Accueil', hub: 'Prompts en bref' },
  ja: { home: 'ホーム', hub: 'プロンプト早わかり' },
  zh: { home: '主页', hub: '提示词速答' },
  es: { home: 'Inicio', hub: 'Prompts en breve' },
  pt: { home: 'Início', hub: 'Prompts em resumo' },
}

const BACK_LABEL: Partial<Record<Language, string>> = {
  en: '← Back to Prompt Bites',
  de: '← Zurück zu Prompt-Häppchen',
  fr: '← Retour aux Prompts en bref',
  ja: '← プロンプト早わかり に戻る',
  zh: '← 返回 提示词速答',
  es: '← Volver a Prompts en breve',
  pt: '← Voltar para Prompts em resumo',
}

const QUICK_ANSWER_LABEL: Partial<Record<Language, string>> = {
  en: 'Quick Answer',
  de: 'Schnelle Antwort',
  fr: 'Réponse rapide',
  ja: 'クイック回答',
  zh: '快速回答',
  es: 'Respuesta rápida',
  pt: 'Resposta rápida', // VERIFY
}

const UPDATED_LABEL: Partial<Record<Language, string>> = {
  en: 'Updated:',
  de: 'Aktualisiert:',
  fr: 'Mis à jour :',
  ja: '更新:',
  zh: '更新于:',
  es: 'Actualizado:',
  pt: 'Atualizado:', // VERIFY
}

const KEY_TAKEAWAYS_LABEL: Partial<Record<Language, string>> = {
  en: 'Key Takeaways',
  de: 'Wichtigste Punkte',
  fr: 'Points clés',
  ja: '重要なポイント',
  zh: '关键要点',
  es: 'Puntos clave',
  pt: 'Pontos principais', // VERIFY
}

const GO_DEEPER_HEADING: Partial<Record<Language, string>> = {
  en: 'Want the full breakdown?',
  de: 'Den vollständigen Überblick?',
  fr: 'Vous voulez les détails complets ?',
  ja: '詳しく読みたいですか？',
  zh: '想了解完整详情？',
  es: '¿Quieres el desglose completo?',
  pt: 'Quer a análise completa?', // VERIFY
}

const READ_FULL_GUIDE: Partial<Record<Language, string>> = {
  en: 'Read the complete guide →',
  de: 'Die vollständige Anleitung lesen →',
  fr: 'Lire le guide complet →',
  ja: 'コンプリートガイドを読む →',
  zh: '阅读完整指南 →',
  es: 'Leer la guía completa →',
  pt: 'Ler o guia completo →', // VERIFY
}

const RELATED_BITES_LABEL: Partial<Record<Language, string>> = {
  en: 'Related Prompt Bites',
  de: 'Verwandte Prompt Bites',
  fr: 'Prompt Bites associés',
  ja: '関連する Prompt Bites',
  zh: '相关 Prompt Bites',
  es: 'Prompt Bites relacionados',
  pt: 'Prompt Bites relacionados', // VERIFY
}

const EDUCATIONAL_LEVEL: Record<string, Partial<Record<Language, string>>> = {
  Beginner:     { en: 'Beginner',     de: 'Einsteiger',      fr: 'Débutant',      ja: '初級', zh: '初级', es: 'Principiante', pt: 'Iniciante' }, // VERIFY
  Intermediate: { en: 'Intermediate', de: 'Fortgeschritten', fr: 'Intermédiaire', ja: '中級', zh: '中级', es: 'Intermedio', pt: 'Intermediário' }, // VERIFY
  Advanced:     { en: 'Advanced',     de: 'Fortgeschritten+',fr: 'Avancé',        ja: '上級', zh: '高级', es: 'Avanzado', pt: 'Avançado' }, // VERIFY
}

function GoDeeper({ parentArticle, siblingBites, lang }: {
  parentArticle?: string
  siblingBites?: string[]
  lang: Language
}) {
  if (!parentArticle && (!siblingBites || siblingBites.length === 0)) return null
  const langSuffix = lang !== 'en' ? `?lang=${lang}` : ''
  return (
    <div className="mt-10 border-t border-primary/10 pt-8 space-y-6">
      {parentArticle && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            {GO_DEEPER_HEADING[lang]}
          </p>
          <Link
            href={`${parentArticle}${langSuffix}`}
            className="text-sm font-semibold text-primary hover:underline"
          >
            {READ_FULL_GUIDE[lang]}
          </Link>
        </div>
      )}
      {siblingBites && siblingBites.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">
            {RELATED_BITES_LABEL[lang]}
          </p>
          <ul className="space-y-2">
            {siblingBites.map((slug) => {
              const key = PROMPT_BITES_SLUG_TO_KEY[slug]
              const sibArticle = key ? promptBitesContent[key] : undefined
              const sibData = sibArticle?.[lang] ?? sibArticle?.['en']
              const title = sibData?.title ?? slug
              return (
                <li key={slug}>
                  <Link
                    href={`/prompt-bites/${slug}${langSuffix}`}
                    className="flex gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span>{title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

function mdLinksToHtml(text: string): string {
  return text.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-primary hover:underline">$1</a>'
  )
}

function SectionTable({ rows, columns }: { rows: Array<Record<string, string>>; columns: string[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-primary/20">
            {columns.map((col) => (
              <th key={col} className="text-left py-2 pr-4 font-semibold text-text-primary">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-primary/10">
              {columns.map((col) => (
                <td key={col} className="py-2 pr-4 text-text-secondary align-top">
                  {row[col] ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = code.split('\n').length > 12

  return (
    <div className="mt-3">
      <div className="flex items-center justify-end bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-400 font-mono">
        <CopyButton text={code} />
      </div>
      <div className="relative">
        <pre
          className={`bg-surface border border-primary/10 rounded-b-lg p-4 text-sm text-text-primary overflow-x-auto ${
            !expanded && isLong ? 'max-h-48 overflow-y-hidden' : ''
          }`}
        >
          <code>{code}</code>
        </pre>
        {isLong && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="absolute inset-x-0 bottom-0 flex justify-center items-end pb-2 pt-8 bg-gradient-to-t from-surface to-transparent text-xs text-primary font-medium"
          >
            Show more ↓
          </button>
        )}
      </div>
    </div>
  )
}

function BodySection({ section, lang }: { section: LLMSection; lang: Language }) {
  const paragraphs = Array.isArray(section.content)
    ? section.content
    : section.content
    ? [section.content]
    : []

  return (
    <section className="mb-10">
      {section.title && (
        <h2 className="text-xl font-bold text-text-primary mb-4">{section.title}</h2>
      )}
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-text-secondary leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: p }}
        />
      ))}
      {section.rows && section.columns && (
        <SectionTable rows={section.rows} columns={section.columns} />
      )}
      {section.items && section.items.length > 0 && (
        <ul className="space-y-2 mt-3">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm text-text-secondary">
              <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
              <span dangerouslySetInnerHTML={{ __html: mdLinksToHtml(item) }} />
            </li>
          ))}
        </ul>
      )}
      {section.codeBlock && <CodeBlock code={section.codeBlock} />}
      {section.callouts && section.callouts.length > 0 && section.callouts.map((c, i) => (
        <div
          key={i}
          className={`rounded-lg p-4 mt-4 text-sm ${
            c.type === 'warning'
              ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 dark:text-yellow-300'
              : 'bg-primary/5 border border-primary/20 text-text-secondary'
          }`}
          dangerouslySetInnerHTML={{ __html: c.text }}
        />
      ))}
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
    </section>
  )
}

function TldrSection({ items, lang }: { items: string[]; lang: Language }) {
  return (
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-5 mb-8">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{KEY_TAKEAWAYS_LABEL[lang]}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm text-text-secondary">
            <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FaqSection({ title, faqs, lang: _lang }: { title?: string; faqs: Array<{ q: string; a: string }>; lang: Language }) {
  if (!faqs || faqs.length === 0) return null
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-text-primary mb-6">
        {title ?? 'Quick Answers'}
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group border border-primary/15 rounded-lg">
            <summary className="flex justify-between items-center cursor-pointer p-4 text-sm font-semibold text-text-primary select-none list-none">
              {faq.q}
              <span className="ml-2 text-primary group-open:rotate-180 transition-transform flex-shrink-0">▾</span>
            </summary>
            <div
              className="px-4 pb-4 text-sm text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </details>
        ))}
      </div>
    </section>
  )
}

export function PromptBitesPostClient({ slug, lang }: Props) {
  const key = PROMPT_BITES_SLUG_TO_KEY[slug]
  const articleData = key ? promptBitesContent[key] : undefined
  const article = articleData?.[lang] ?? articleData?.['en']

  if (!article) {
    return (
      <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-text-secondary">Article not found.</p>
        </div>
      </div>
    )
  }

  const quickAnswer = (article as any).quickAnswerTop?.[lang] ?? (article as any).quickAnswerTop?.['en']
  const bullets: string[] = quickAnswer?.bullets ?? []
  const sections = article.sections ?? {}
  const parentArticle = (article as any).parentArticle as string | undefined
  const siblingBites = (article as any).siblingBites as string[] | undefined

  const tldrSection = sections['tldr']
  const faqSection = sections['faq']
  const bodySections = Object.entries(sections).filter(
    ([key]) => key !== 'tldr' && key !== 'faq'
  )

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb + language switcher */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <nav className="text-sm text-text-secondary min-w-0">
            <Link href={lang === 'en' ? '/' : `/${lang}`} className="hover:text-primary transition-colors shrink-0">
              {(BREADCRUMB_LABELS[lang] ?? BREADCRUMB_LABELS["en"]!).home}
            </Link>
            <span className="mx-2">›</span>
            <Link href={promptBitesHubHref(lang)} className="hover:text-primary transition-colors shrink-0">
              {(BREADCRUMB_LABELS[lang] ?? BREADCRUMB_LABELS["en"]!).hub}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-text-primary break-words">{article.title}</span>
          </nav>
          <div className="shrink-0">
            <LanguageSwitcher initialLang={lang} />
          </div>
        </div>

        {/* Title */}
        <h1 className="prompt-bite-h1 text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Cross-language links */}
        <LangLinksBar cluster="prompt-bites" slug={slug} availableLangs={Object.keys(articleData ?? {})} initialLang={lang} />

        {/* Affiliate disclosure — neutral third-party-link notice */}
        {(article as any).affiliateDisclosure && (
          <p className="affiliate-disclosure text-xs text-text-secondary bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 mb-6">
            {AFFILIATE_DISCLOSURE[lang] ?? AFFILIATE_DISCLOSURE['en']}
          </p>
        )}

        {/* Quick Answer block */}
        {quickAnswer && (
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              {QUICK_ANSWER_LABEL[lang]}
            </p>
            <p className="prompt-bite-answer text-text-primary leading-relaxed mb-4">
              {quickAnswer.answer}
            </p>
            {bullets.length > 0 && (
              <ul className="space-y-2">
                {bullets.map((b: string, i: number) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {quickAnswer.updatedDate && (
              <p className="text-xs text-text-secondary mt-4">
                {UPDATED_LABEL[lang]} {quickAnswer.updatedDate}
              </p>
            )}
          </div>
        )}

        {/* Metadata chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {(article as any).theme && (
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-surface border border-primary/20 text-text-secondary">
              {(article as any).theme}
            </span>
          )}
          {(article as any).educationalLevel && (
            <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-surface border border-primary/20 text-text-secondary">
              {EDUCATIONAL_LEVEL[(article as any).educationalLevel]?.[lang] ?? (article as any).educationalLevel}
            </span>
          )}
        </div>

        {/* TLDR */}
        {tldrSection?.isTldr && tldrSection.items && tldrSection.items.length > 0 && tldrSection.items[0] !== 'TBD' && (
          <TldrSection items={tldrSection.items} lang={lang} />
        )}

        {/* Body sections */}
        {bodySections.map(([sectionKey, section]) => (
          <BodySection key={sectionKey} section={section} lang={lang} />
        ))}

        {/* FAQ */}
        {faqSection?.faqs && faqSection.faqs.length > 0 && (
          <FaqSection title={faqSection.title} faqs={faqSection.faqs} lang={lang} />
        )}

        {/* Go deeper */}
        <GoDeeper parentArticle={parentArticle} siblingBites={siblingBites} lang={lang} />

        {/* Back to hub */}
        <div className="mt-8 pt-8 border-t border-primary/10">
          <Link
            href={promptBitesHubHref(lang)}
            className="text-sm text-primary hover:underline"
          >
            {BACK_LABEL[lang] ?? BACK_LABEL['en']}
          </Link>
        </div>
      </div>
    </div>
  )
}
