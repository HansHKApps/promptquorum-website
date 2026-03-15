import type { Metadata } from 'next'
import { FAQPageClient } from '@/components/FAQPageClient'

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
    <>
      <FAQPageClient />

      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is PromptQuorum free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' } },
              { '@type': 'Question', name: 'How does privacy work?', acceptedAnswer: { '@type': 'Answer', text: 'You decide where your data goes. Keep everything local with LM Studio or Ollama, or use your own API keys. PromptQuorum is as private as you set it up.' } },
              { '@type': 'Question', name: 'Which AI providers are supported?', acceptedAnswer: { '@type': 'Answer', text: 'Over 25 AI providers are included, and you can add your own custom providers. Connect to ChatGPT, Claude, Gemini, and many more.' } },
              { '@type': 'Question', name: 'What platforms does PromptQuorum run on?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum starts with desktop apps (Mac, Windows), followed by a web application, and eventually mobile solutions.' } },
              { '@type': 'Question', name: 'What makes PromptQuorum different?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum is highly automated for prompt improvements, can send the same prompt to multiple AIs simultaneously, and analyzes results based on your criteria.' } },
              { '@type': 'Question', name: 'Are there any limits?', acceptedAnswer: { '@type': 'Answer', text: 'No limits from PromptQuorum side. Your usage is only limited by your API keys or local LLM resources.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
