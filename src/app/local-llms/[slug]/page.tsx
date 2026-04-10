import type { Metadata } from 'next'
import Link from 'next/link'

// TEMPORARILY DISABLED: local-llms/content.ts has syntax errors

interface PageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateStaticParams() {
  // Disabled temporarily
  return []
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  return {
    title: 'Local LLM Article — Coming Soon | PromptQuorum',
    description: 'This article is temporarily unavailable. Please check back soon.',
    robots: { index: false, follow: true },
  }
}

export default async function LocalLLMsArticlePage({ params, searchParams }: PageProps) {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary/10 text-primary mb-8">
          Coming Soon
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">Local LLM Guide</h1>
        <p className="text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto">
          Local LLMs articles are temporarily unavailable due to content file maintenance. Check back soon — or explore the other guides in PromptQuorum.
        </p>
        <Link
          href="/prompt-engineering"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          ← Explore Prompt Engineering
        </Link>
      </div>
    </div>
  )
}
