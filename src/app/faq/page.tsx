import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | PromptQuorum',
  description: 'Frequently asked questions about PromptQuorum - pricing, privacy, supported AI providers, and more.',
  alternates: {
    canonical: 'https://www.promptquorum.com/faq',
  },
}

export default function FAQPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">FAQ</h1>
            <p className="text-lg text-text-secondary">Coming soon - Full FAQ page</p>
          </div>
          <p className="text-center"><a href="/" className="text-primary hover:text-primary/80">← Back to Home</a></p>
        </div>
      </div>
    </Suspense>
  )
}
