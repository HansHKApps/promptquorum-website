'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { blogMetadata } from '@/lib/blog/blogTranslations'
import { translations } from '@/translations'
import type { Language } from '@/translations'

const blogPosts = [
  { key: 'frameworks' as const, href: '/blog/prompt-frameworks' },
  { key: 'localAI' as const, href: '/blog/local-ai-vs-cloud' },
  { key: 'comparison' as const, href: '/blog/ai-model-comparison' },
  { key: 'quorum' as const, href: '/blog/quorum' },
  { key: 'optimization' as const, href: '/blog/prompt-optimization' },
  { key: 'dataPrivacy' as const, href: '/blog/enterprise-data-privacy' },
  { key: 'promptImpact' as const, href: '/blog/research-prompt-optimization-impact' },
]

function BlogSectionInner() {
  const lang = useLang() as Language
  const t = translations[lang] || translations.en

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {t.blogTitle}
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {t.blogSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogPosts.map(({ key, href }) => {
            const post = blogMetadata[key][lang] || blogMetadata[key].en
            return (
              <Link
                key={key}
                href={href}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {post.intro}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-muted">
                    <span>{post.readTime}</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function BlogSectionClient() {
  return <BlogSectionInner />
}
