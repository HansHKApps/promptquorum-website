'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import type { BlogPost, Language } from '@/lib/blog/blogContent'
import { blogMetadata } from '@/lib/blog/blogTranslations'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

// Helper to convert "Published Month DD, YYYY" to ISO date format "YYYY-MM-DD"
function getDateISO(dateStr: string): string {
  const match = dateStr.match(/(\w+)\s+(\d{1,2}),?\s+(\d{4})/)
  if (!match) return new Date().toISOString().split('T')[0]
  const monthMap: Record<string, string> = {
    January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
    July: '07', August: '08', September: '09', October: '10', November: '11', December: '12'
  }
  const [, month, day, year] = match
  const monthNum = monthMap[month] || '01'
  return `${year}-${monthNum}-${day.padStart(2, '0')}`
}

interface BlogPostClientProps {
  post: BlogPost
  slug: string
}

function BlogPostClientContent({ post, slug }: BlogPostClientProps) {
  const lang = useLang() as Language

  // Get translated metadata
  const postId = SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]
  const metadata = blogMetadata[postId as keyof typeof blogMetadata]?.[lang] || blogMetadata[postId as keyof typeof blogMetadata]?.['en']

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb + Language Switcher */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <a href="/" className="hover:text-primary">Home</a>
            <span>/</span>
            <a href="/#blog" className="hover:text-primary">Blog</a>
            <span>/</span>
            <span className="text-text-primary font-medium">{metadata?.title || post.title}</span>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Article Header */}
        <article className="prose prose-invert max-w-none">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {metadata?.category || post.category}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {metadata?.title || post.title}
            </h1>
            <p className="text-lg text-text-secondary mb-4">{metadata?.intro || post.intro}</p>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <time dateTime={getDateISO(metadata?.publishDate || post.publishDate)}>
                {metadata?.publishDate || post.publishDate}
              </time>
              <span>•</span>
              <span>{metadata?.readTime || post.readTime}</span>
              <span>•</span>
              <span>By <Link href="/author/hans-kuepper" className="text-primary hover:text-primary/80 font-medium">Hans Kuepper</Link> · PromptQuorum</span>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-12 space-y-8">
            {Object.entries(post.sections).map(([key, section]) => (
              <section key={key} className="prose prose-invert max-w-none">
                {section.title && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mt-8 mb-4">
                    {section.title}
                  </h2>
                )}

                {/* Content: string or string[] */}
                {section.content && (
                  <div className="text-text-secondary leading-relaxed">
                    {Array.isArray(section.content) ? (
                      <div className="space-y-4">
                        {section.content.map((paragraph, idx) => (
                          <p key={idx} className="text-text-secondary">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-text-secondary">{section.content}</p>
                    )}
                  </div>
                )}

                {/* Items: bullet list */}
                {section.items && section.items.length > 0 && (
                  <ul className="space-y-2 my-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="text-text-secondary flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Table: rows with columns */}
                {section.rows && section.rows.length > 0 && section.columns && (
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-text-tertiary">
                          {section.columns.map((col) => (
                            <th
                              key={col}
                              className="text-left p-3 font-bold text-text-primary bg-primary/5"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, idx) => (
                          <tr key={idx} className="border-b border-text-tertiary hover:bg-primary/5">
                            {section.columns?.map((col) => (
                              <td key={`${idx}-${col}`} className="p-3 text-text-secondary">
                                {row[col] || '—'}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Download CTA */}
                {section.downloadCta && (
                  <div className="my-6 p-5 border border-primary/30 rounded-xl bg-primary/5">
                    {section.downloadCta.description && (
                      <p className="text-sm text-text-secondary mb-3">{section.downloadCta.description}</p>
                    )}
                    <a
                      href={section.downloadCta.href}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      ↓ {section.downloadCta.label}
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-text-tertiary">
          <p className="text-center text-text-secondary mb-6">
            Ready to optimize your prompts?
          </p>
          <div className="text-center">
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <p className="text-center mt-8">
          <a href="/blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </a>
        </p>
      </div>
    </div>
  )
}

export function BlogPostClient(props: BlogPostClientProps) {
  return <BlogPostClientContent {...props} />
}
