import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | PromptQuorum',
  description: 'Smart AI prompt optimization features including frameworks, multi-AI dispatch, quorum comparison, and local LLM support.',
  alternates: {
    canonical: 'https://www.promptquorum.com/features',
  },
}

export default function FeaturesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Features</h1>
            <p className="text-lg text-text-secondary">Coming soon - Full features page</p>
          </div>
          <p className="text-center"><a href="/" className="text-primary hover:text-primary/80">← Back to Home</a></p>
        </div>
      </div>
    </Suspense>
  )
}
