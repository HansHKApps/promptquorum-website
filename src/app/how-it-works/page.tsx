import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works | PromptQuorum',
  description: 'Learn how PromptQuorum works: Prompt, Optimize, Dispatch, Quorum - the 4-stage AI prompt optimization pipeline.',
  alternates: {
    canonical: 'https://www.promptquorum.com/how-it-works',
  },
}

export default function HowItWorksPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">How It Works</h1>
            <p className="text-lg text-text-secondary">Coming soon - Full how it works page</p>
          </div>
          <p className="text-center"><a href="/" className="text-primary hover:text-primary/80">← Back to Home</a></p>
        </div>
      </div>
    </Suspense>
  )
}
