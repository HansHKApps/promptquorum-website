'use client'

import Link from 'next/link'
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

function BodySection({ section }: { section: LLMSection }) {
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
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )}
      {section.codeBlock && (
        <pre className="bg-surface border border-primary/10 rounded-lg p-4 text-sm text-text-primary overflow-x-auto mt-3">
          <code>{section.codeBlock}</code>
        </pre>
      )}
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
    </section>
  )
}

function TldrSection({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl bg-primary/5 border border-primary/20 p-5 mb-8">
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Key Takeaways</p>
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

function FaqSection({ title, faqs }: { title?: string; faqs: Array<{ q: string; a: string }> }) {
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

  const tldrSection = sections['tldr']
  const faqSection = sections['faq']
  const bodySections = Object.entries(sections).filter(
    ([key]) => key !== 'tldr' && key !== 'faq'
  )

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-text-secondary">
          <Link href={promptBitesHubHref(lang)} className="hover:text-primary transition-colors">
            Prompt Bites
          </Link>
          <span className="mx-2">›</span>
          <span className="text-text-primary">{article.title}</span>
        </nav>

        {/* Title */}
        <h1 className="prompt-bite-h1 text-3xl sm:text-4xl font-bold text-text-primary mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Quick Answer block */}
        {quickAnswer && (
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Quick Answer
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
                Updated: {quickAnswer.updatedDate}
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
              {(article as any).educationalLevel}
            </span>
          )}
        </div>

        {/* TLDR */}
        {tldrSection?.isTldr && tldrSection.items && tldrSection.items.length > 0 && tldrSection.items[0] !== 'TBD' && (
          <TldrSection items={tldrSection.items} />
        )}

        {/* Body sections */}
        {bodySections.map(([sectionKey, section]) => (
          <BodySection key={sectionKey} section={section} />
        ))}

        {/* FAQ */}
        {faqSection?.faqs && faqSection.faqs.length > 0 && (
          <FaqSection title={faqSection.title} faqs={faqSection.faqs} />
        )}

        {/* Back to hub */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <Link
            href={promptBitesHubHref(lang)}
            className="text-sm text-primary hover:underline"
          >
            ← Back to Prompt Bites
          </Link>
        </div>
      </div>
    </div>
  )
}
