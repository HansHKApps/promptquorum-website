import { useState } from 'react'
import { ArrowLeft, ChevronDown } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogContent } from './blogContent'
import type { Language } from '../../translations'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

interface BlogPostProps {
  postId: 'frameworks' | 'localAI' | 'comparison' | 'quorum' | 'optimization'
  backUrl: string
  langUrl: (lang: Language) => string
}

export function BlogPost({ postId, backUrl, langUrl }: BlogPostProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const lang = (searchParams.get('lang') || 'en') as Language

  const handleLanguageChange = (newLang: Language) => {
    setSearchParams({ lang: newLang })
  }

  const post = blogContent[postId][lang]
  if (!post) {
    return <div>Blog post not found</div>
  }

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    () => new Set(Object.keys(post.sections))
  )

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
      <Helmet>
        <title>{`${post.title} | PromptQuorum`}</title>
        <meta name="description" content={post.intro.slice(0, 160)} />
        <link rel="canonical" href={`https://www.promptquorum.com/blog/${postId}`} />
        <meta property="og:title" content={`${post.title} | PromptQuorum`} />
        <meta property="og:description" content={post.intro.slice(0, 160)} />
        <meta property="og:url" content={`https://www.promptquorum.com/blog/${postId}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://www.promptquorum.com/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${post.title} | PromptQuorum`} />
        <meta property="twitter:description" content={post.intro.slice(0, 160)} />
        <meta property="twitter:image" content="https://www.promptquorum.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.intro,
          "author": {
            "@type": "Person",
            "name": "Hans Kuepper"
          },
          "publisher": {
            "@type": "Organization",
            "name": "PromptQuorum",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.promptquorum.com/logo.svg"
            }
          },
          "datePublished": post.publishDate,
          "dateModified": post.publishDate,
          "mainEntityOfPage": `https://www.promptquorum.com/blog/${postId}`,
          "image": "https://www.promptquorum.com/og-image.png",
          "articleSection": post.category,
          "timeRequired": post.readTime,
          "inLanguage": lang
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.promptquorum.com" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.promptquorum.com/#blog" },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.promptquorum.com/blog/${postId}` }
          ]
        })}</script>
      </Helmet>

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
          <LanguageSwitcher currentLang={lang} onChange={handleLanguageChange} />
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

          {/* Content - All sections expanded */}
          <div className="space-y-4">
            {Object.entries(post.sections).map(([key, section]) => {
              const isExpanded = expandedSections.has(key)
              return (
                <div key={key} className="border-2 rounded-xl overflow-hidden transition-all bg-white border-gray-200">
                  <button
                    onClick={() => {
                      const newExpanded = new Set(expandedSections)
                      if (newExpanded.has(key)) {
                        newExpanded.delete(key)
                      } else {
                        newExpanded.add(key)
                      }
                      setExpandedSections(newExpanded)
                    }}
                    className="w-full text-left px-4 sm:px-6 py-5 sm:py-6 hover:bg-gray-50 transition-colors"
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

                  {isExpanded && (
                    <div className="px-4 sm:px-6 py-5 sm:py-6 bg-gradient-to-br from-primary/5 to-primary/10 border-t-2 border-gray-200 prose prose-lg max-w-none text-text-primary">
                      {renderSection(key, section)}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

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
