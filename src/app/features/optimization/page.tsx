import type { Metadata } from 'next'
import { OptimizationShowcase } from '@/components/OptimizationShowcase'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Prompt Optimization Results | PromptQuorum',
  description: 'See how PromptQuorum optimizes and refines your prompts. Review quality assessments, version history, and improvement suggestions.',
  openGraph: {
    title: 'Prompt Optimization Results | PromptQuorum',
    description: 'See how PromptQuorum optimizes and refines your prompts. Review quality assessments, version history, and improvement suggestions.',
  },
}

export default function OptimizationPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <OptimizationShowcase />

        {/* Info Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Version Control</h3>
              <p className="text-gray-600">Track all iterations of your prompt. Revert to previous versions anytime or branch off to explore different optimization paths.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Insights</h3>
              <p className="text-gray-600">Understand exactly why your prompt was improved. Get detailed feedback on strengths and areas to refine.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Refinements</h3>
              <p className="text-gray-600">Apply one-click refinements to make your prompt concise, clear, professional, or more detailed as needed.</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-purple-600 hover:text-purple-700 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
            >
              ← Back to Features
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
