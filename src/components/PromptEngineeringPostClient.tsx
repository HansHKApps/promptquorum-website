'use client'

import { useLang } from '@/hooks/useLang'
import type { Language } from '@/lib/blog/blogContent'
import { peContent, type PESection } from '@/lib/prompt-engineering/content'
import { PE_SLUG_TO_KEY } from '@/lib/prompt-engineering/slugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

interface Props {
  slug: string
}

// Render inline link placeholders like [Techniques: Chain-of-Thought Prompting]
// as styled spans for now (full links added once article pages exist)
function renderInlineLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return parts.map((part, i) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const label = part.slice(1, -1)
      return (
        <span key={i} className="text-primary font-medium cursor-default" title="Internal link — coming soon">
          {label}
        </span>
      )
    }
    // Handle **bold** markers
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g)
    return (
      <span key={i}>
        {boldParts.map((bp, j) =>
          bp.startsWith('**') && bp.endsWith('**')
            ? <strong key={j} className="text-text-primary font-semibold">{bp.slice(2, -2)}</strong>
            : bp
        )}
      </span>
    )
  })
}

function SectionBlock({ section, colors }: { section: PESection; colors: { dot: string; badge: string } }) {
  return (
    <div className="mt-8">
      {section.title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-10 mb-4">
          {section.title}
        </h2>
      )}

      {/* TL;DR block */}
      {section.isTldr && section.items && (
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 my-4">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">TL;DR</p>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary text-sm">
                <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-1.5 ${colors.dot}`} />
                <span>{renderInlineLinks(item)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Regular content paragraphs */}
      {section.content && !section.isTldr && (
        <div className="space-y-4">
          {(Array.isArray(section.content) ? section.content : [section.content]).map((para, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {renderInlineLinks(para)}
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
              <span className="leading-relaxed">{renderInlineLinks(item)}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Numbered list */}
      {section.numberedItems && (
        <ol className="space-y-4 my-4">
          {section.numberedItems.map((item, i) => (
            <li key={i} className="flex gap-4 text-text-secondary">
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${colors.dot.replace('bg-', 'bg-').replace('-400', '-500')}`}>
                {i + 1}
              </span>
              <span className="leading-relaxed pt-0.5">{renderInlineLinks(item)}</span>
            </li>
          ))}
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
                      {renderInlineLinks(row[col] ?? '—')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* FAQ */}
      {section.faqs && (
        <div className="space-y-6 mt-4">
          {section.faqs.map((faq, i) => (
            <div key={i} className="border border-primary/15 rounded-xl p-5">
              <h3 className="font-bold text-text-primary mb-2">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{renderInlineLinks(faq.a)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const THEME_COLORS: Record<string, { dot: string; badge: string; label: string }> = {
  Fundamentals: { dot: 'bg-blue-400', badge: 'bg-blue-50 text-blue-700 border border-blue-200', label: 'Fundamentals' },
  Frameworks:   { dot: 'bg-purple-400', badge: 'bg-purple-50 text-purple-700 border border-purple-200', label: 'Frameworks' },
  Techniques:   { dot: 'bg-emerald-400', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200', label: 'Techniques' },
  'Use Topics': { dot: 'bg-orange-400', badge: 'bg-orange-50 text-orange-700 border border-orange-200', label: 'Use Topics' },
}

function PromptEngineeringPostContent({ slug }: Props) {
  const lang = useLang() as Language
  const key = PE_SLUG_TO_KEY[slug]
  const articleData = key ? peContent[key] : null

  if (!articleData) {
    return <div className="min-h-screen bg-surface pt-32 flex items-center justify-center"><p className="text-text-secondary">Article not found.</p></div>
  }

  // Fall back to English if translation has empty sections
  const hasTranslation = articleData[lang] && Object.keys(articleData[lang].sections).length > 0
  const article = hasTranslation ? articleData[lang] : articleData['en']
  const colors = THEME_COLORS[article.theme] ?? THEME_COLORS['Fundamentals']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        {/* Breadcrumb + language */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary flex-wrap">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/prompt-engineering" className="hover:text-primary">Prompt Engineering</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{article.title}</span>
          </div>
          <LanguageSwitcher />
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
            <span>{article.publishDate}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>By Hans Kuepper · PromptQuorum</span>
          </div>
        </div>

        {/* Sections */}
        <article>
          {Object.entries(article.sections).map(([key, section]) => (
            <SectionBlock key={key} section={section} colors={colors} />
          ))}
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-text-secondary mb-6">
            Apply these techniques across 25+ AI models simultaneously with PromptQuorum.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Try PromptQuorum free →
          </a>
        </div>

        <p className="text-center mt-8">
          <a href="/prompt-engineering" className="text-primary hover:text-primary/80 text-sm">
            ← Back to Prompt Engineering
          </a>
        </p>

      </div>
    </div>
  )
}

export function PromptEngineeringPostClient(props: Props) {
  return <PromptEngineeringPostContent {...props} />
}
