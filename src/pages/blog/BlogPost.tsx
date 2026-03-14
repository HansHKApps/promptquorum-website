import { useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { blogContent, Language } from './blogContent'

interface BlogPostProps {
  postId: 'frameworks' | 'localAI' | 'comparison' | 'quorum' | 'optimization'
  backUrl: string
  langUrl: (lang: Language) => string
}

export function BlogPost({ postId, backUrl, langUrl }: BlogPostProps) {
  const [searchParams] = useSearchParams()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const lang = (searchParams.get('lang') || 'en') as Language

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ]

  const post = blogContent[postId][lang]
  if (!post) {
    return <div>Blog post not found</div>
  }

  const renderContent = (content: string | string[] | undefined) => {
    if (!content) return null
    if (typeof content === 'string') {
      return <p>{content}</p>
    }
    return (
      <>
        {content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </>
    )
  }

  const renderSection = (key: string, section: any) => {
    if (!section) return null

    return (
      <div key={key}>
        {section.title && (
          <h2 className="text-2xl font-bold mt-8 mb-4">{section.title}</h2>
        )}

        {section.content && renderContent(section.content)}

        {section.items && (
          <ul className="list-disc list-inside space-y-2 mb-4">
            {section.items.map((item: string, idx: number) => (
              <li key={idx}>
                {item.includes(':') ? (
                  <>
                    <strong>{item.split(':')[0]}:</strong>
                    {item.split(':')[1]}
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>
        )}

        {section.rows && section.columns && (
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  {section.columns.map((col: string) => (
                    <th key={col} className="text-left py-2 font-semibold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row: Record<string, string>, idx: number) => (
                  <tr
                    key={idx}
                    className={idx < section.rows.length - 1 ? 'border-b border-primary/20' : ''}
                  >
                    {section.columns.map((col: string) => (
                      <td key={`${idx}-${col}`} className="py-2">
                        {col === section.columns[0] ? (
                          <strong>{row[col]}</strong>
                        ) : (
                          row[col]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to={backUrl}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            {languages.map((l) => (
              <Link
                key={l.code}
                to={langUrl(l.code)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all ${
                  lang === l.code
                    ? 'border-primary bg-primary/5 text-primary font-semibold'
                    : 'border-gray-200 text-text-secondary hover:border-primary/30'
                }`}
              >
                <span>{l.flag}</span>
                <span className="text-sm">{l.code.toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="mb-8 pb-8 border-b border-gray-200">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary mb-4">{post.intro}</p>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content - Accordion Style */}
          <div className="space-y-4">
            {Object.entries(post.sections).map(([key, section]) => {
              const isExpanded = expandedSection === key
              return (
                <button
                  key={key}
                  onClick={() => setExpandedSection(isExpanded ? null : key)}
                  className={`w-full text-left px-4 sm:px-6 py-5 sm:py-6 rounded-xl border-2 transition-all ${
                    isExpanded
                      ? 'bg-primary/10 border-primary shadow-lg'
                      : 'bg-white border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                      {section?.title || key}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Expanded Content */}
          {expandedSection && (
            <div className="mt-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 sm:p-8 animate-fade-in">
              <div className="prose prose-lg max-w-none text-text-primary">
                {renderSection(expandedSection, post.sections[expandedSection])}
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setExpandedSection(null)}
                    className="px-6 py-2 bg-white border border-gray-200 rounded-lg text-text-secondary hover:border-primary hover:text-primary transition-colors"
                  >
                    Close section
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
            <p className="text-sm text-text-secondary mb-4">
              Try {post.category.toLowerCase()} with PromptQuorum
            </p>
            <Link
              to="/#waitlist"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
