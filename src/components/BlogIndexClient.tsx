'use client'

import Link from 'next/link'
import { useLang } from '@/hooks/useLang'
import { blogMetadata } from '@/lib/blog/blogTranslations'
import { translations } from '@/translations'
import type { Language } from '@/translations'

const blogPosts = [
  { key: 'frameworks' as const, slug: 'prompt-frameworks' },
  { key: 'localAI' as const, slug: 'local-ai-vs-cloud' },
  { key: 'comparison' as const, slug: 'ai-model-comparison' },
  { key: 'quorum' as const, slug: 'quorum' },
  { key: 'optimization' as const, slug: 'prompt-optimization' },
  { key: 'dataPrivacy' as const, slug: 'enterprise-data-privacy' },
  { key: 'promptImpact' as const, slug: 'research-prompt-optimization-impact' },
  { key: 'promptToolsMarket2026' as const, slug: 'prompt-optimization-market-overview-2026' },
]

function BlogIndexInner() {
  const lang = useLang() as Language
  const t = translations[lang] || translations.en

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t.blogTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.blogSubtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map(({ key, slug }) => {
            const post = blogMetadata[key][lang] || blogMetadata[key].en
            return (
              <Link
                key={key}
                href={`/blog/${slug}`}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.intro}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.publishDate}</span>
                    <span className="flex items-center gap-1 text-purple-600 font-medium group-hover:gap-2 transition-all">
                      {post.readTime} →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export function BlogIndexClient() {
  return <BlogIndexInner />
}
