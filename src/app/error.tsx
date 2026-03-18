'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to console in development
    console.error('Page error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-surface pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="py-16 border-b border-primary/20 mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Error</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
            Something went wrong.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-8">
            An unexpected error occurred loading this page. This has been noted.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/20 text-text-primary rounded-xl font-semibold hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              Go home
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-primary/20">
          <Link href="/" className="text-primary hover:text-primary/80 font-medium text-sm">← Home</Link>
          <a href="mailto:promptquorum@gmail.com" className="text-primary hover:text-primary/80 font-medium text-sm">Report this issue</a>
        </div>

      </div>
    </div>
  )
}
