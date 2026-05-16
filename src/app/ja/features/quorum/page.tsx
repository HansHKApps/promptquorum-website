import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { QuorumShowcase } from '@/components/QuorumShowcase'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'ja'
  const t = translations[lang]

  return {
    title: t.featuresQuorumMetaTitle,
    description: t.featuresQuorumMetaDescription,
    alternates: generateAlternates('/features/quorum', lang, true, undefined, ['ja', 'zh', 'de']),
    openGraph: {
      title: t.featuresQuorumMetaTitle,
      description: t.featuresQuorumMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.featuresQuorumMetaTitle,
      description: t.featuresQuorumMetaDescription,
    },
  }
}

export default function JaQuorumPage() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuorumShowcase />

        {/* Info Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collect Responses</h3>
              <p className="text-gray-600">Run your prompt across ChatGPT, Claude, Gemini, and 25+ other models. Get diverse perspectives and responses instantly.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analyze Patterns</h3>
              <p className="text-gray-600">Identify what all models agree on (consensus), where they differ, and which responses are highest quality for your use case.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Synthesize Insights</h3>
              <p className="text-gray-600">Combine the strengths of multiple models into better answers. Export results in multiple formats for further use.</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/ja/features"
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
