import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FAQPageClient } from '@/components/FAQPageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata(): Promise<Metadata> {
  const lang = 'de'
  const t = translations[lang]

  return {
    title: t.faqMetaTitle,
    description: t.faqMetaDescription,
    alternates: generateAlternates('/faq', lang, true, undefined, ['de', 'zh', 'de']),
    openGraph: {
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.faqMetaTitle,
      description: t.faqMetaDescription,
    },
  }
}

export default async function JaFAQPage() {
  return (
    <>
      <FAQPageClient initialLang="ja" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is PromptQuorum free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. PromptQuorum is free to use. You can bring your own API key, use a local LLM, or try our limited free backend service for prompt optimization on a test basis.' } },
              { '@type': 'Question', name: 'How does privacy work?', acceptedAnswer: { '@type': 'Answer', text: 'Zero telemetry, zero tracking, no data collection. API keys are stored only in your browser localStorage and never transmitted to any PromptQuorum server.' } },
              { '@type': 'Question', name: 'Which AI providers are supported?', acceptedAnswer: { '@type': 'Answer', text: 'Over 25 AI providers including OpenAI, Anthropic Claude, Google Gemini, Grok, DeepSeek, Mistral, Cohere, Together AI, Groq, OpenRouter, plus all local providers like Ollama, LM Studio, Jan AI, GPT4All, and any OpenAI-compatible endpoint.' } },
              { '@type': 'Question', name: 'What platforms does PromptQuorum run on?', acceptedAnswer: { '@type': 'Answer', text: 'Desktop apps (Mac, Windows via Electron), web application, and eventually mobile (iOS and Android via Capacitor). Works fully offline with a local LLM.' } },
              { '@type': 'Question', name: 'What makes PromptQuorum different?', acceptedAnswer: { '@type': 'Answer', text: 'PromptQuorum covers the full prompt lifecycle in a single browser-based tool: structured writing with 9 frameworks, AI-powered iterative optimization with 8 refinement types, one-click dispatch to 25+ AI services, and 13 Quorum analysis types for consensus scoring — all without any data leaving your device.' } },
              { '@type': 'Question', name: 'Are there any limits?', acceptedAnswer: { '@type': 'Answer', text: 'No limits from PromptQuorum. Your usage is only limited by your API keys or local LLM resources.' } },
              { '@type': 'Question', name: 'What is prompt engineering and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'Prompt engineering is the practice of designing inputs to AI models so they return more accurate, useful, and reliable outputs. In testing, structured prompts with framework fields produce 25–45% higher LLM evaluation scores compared to unstructured inputs. PromptQuorum automates this with 9 built-in frameworks.' } },
              { '@type': 'Question', name: 'How does PromptQuorum optimize my prompts?', acceptedAnswer: { '@type': 'Answer', text: 'Your connected LLM transforms raw framework fields into a precision prompt. You then refine iteratively with 8 one-click refinements. Every step is saved in version history so you can revert anytime.' } },
              { '@type': 'Question', name: 'What prompt frameworks are built into PromptQuorum?', acceptedAnswer: { '@type': 'Answer', text: '9 frameworks: Single Prompt Line, APE, CRAFT, CO-STAR (won the Singapore GPT-4 competition), SPECS, RISEN, TRACE, Google Prompt, and RTF. You can also build 2 fully custom frameworks.' } },
              { '@type': 'Question', name: 'What is the CO-STAR framework?', acceptedAnswer: { '@type': 'Answer', text: 'CO-STAR stands for Context, Objective, Style, Tone, Audience, and Response. It won the Singapore GPT-4 prompt engineering competition and is ideal for business communication and marketing.' } },
            ],
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com/ja' },
                { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://www.promptquorum.com/ja/faq' },
              ],
            },
          }),
        }}
      />
    </>
  )
}
