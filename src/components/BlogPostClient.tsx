'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import type { BlogPost, Language } from '@/lib/blog/blogContent'
import { blogMetadata } from '@/lib/blog/blogTranslations'
import { SLUG_TO_POST_ID } from '@/lib/blogSlugs'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { Suspense } from 'react'

interface BlogPostClientProps {
  post: BlogPost
  slug: string
}

function BlogPostClientContent({ post, slug }: BlogPostClientProps) {
  const searchParams = useSearchParams()
  const lang = (searchParams?.get('lang') || 'en') as Language
  const router = useRouter()

  // Get translated metadata
  const postId = SLUG_TO_POST_ID[slug as keyof typeof SLUG_TO_POST_ID]
  const metadata = blogMetadata[postId as keyof typeof blogMetadata]?.[lang] || blogMetadata[postId as keyof typeof blogMetadata]?.['en']

  const handleLangChange = (l: Language) => {
    router.push(`/blog/${slug}?lang=${l}`, { scroll: false })
  }

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
          <LanguageSwitcher currentLang={lang} onChange={handleLangChange} />
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
              <span>{metadata?.publishDate || post.publishDate}</span>
              <span>•</span>
              <span>{metadata?.readTime || post.readTime}</span>
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
          <a href="/#blog" className="text-primary hover:text-primary/80">
            ← Back to Blog
          </a>
        </p>
      </div>
    </div>
  )
}

export function BlogPostClient(props: BlogPostClientProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <BlogPostClientContent {...props} />
    </Suspense>
  )
}
