import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQAccordion } from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQ | PromptQuorum',
  description: 'Frequently asked questions about PromptQuorum - pricing, privacy, supported AI providers, and more.',
  alternates: {
    canonical: 'https://www.promptquorum.com/faq',
  },
  openGraph: {
    title: 'FAQ | PromptQuorum',
    description: 'Frequently asked questions about PromptQuorum - pricing, privacy, supported AI providers, and more.',
  },
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy-First Local Workflow—FAQs</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about PromptQuorum, pricing, privacy, and getting started.
          </p>
        </div>

        <FAQAccordion />

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Prompts?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the waitlist and be the first to know when we launch. Early access members get exclusive features and priority support.
          </p>
          <a
            href="/#waitlist"
            className="inline-block px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Join Waitlist
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is PromptQuorum free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does privacy work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which AI providers are supported?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.',
                },
              },
              {
                '@type': 'Question',
                name: 'What platforms does PromptQuorum run on?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.',
                },
              },
              {
                '@type': 'Question',
                name: 'What makes PromptQuorum different?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are there any limits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.',
                },
              },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.promptquorum.com',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'FAQ',
                  item: 'https://www.promptquorum.com/faq',
                },
              ],
            },
          }),
        }}
      />
    </main>
  )
}
