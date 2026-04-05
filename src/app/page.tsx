import type { Metadata } from 'next'
import { translations } from '@/translations'
import { generateAlternates } from '@/lib/hreflang'
import { LandingPageServer } from '@/components/LandingPageServer'
import { ConfirmedToast } from '@/components/ConfirmedToast'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.homeMetaTitle,
    description: t.homeMetaDescription,
    alternates: generateAlternates('/'),
    openGraph: {
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.homeMetaTitle,
      description: t.homeMetaDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  return (
    <>
      <ConfirmedToast />
      <LandingPageServer initialLang={selectedLang as any} />

      {/* FAQPage Schema — 8 core questions for homepage rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'What is PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum is a multi-AI dispatch and consensus scoring tool. You write one structured prompt using any of 9 prompt engineering frameworks, then send it simultaneously to GPT-4o, Claude, Gemini, Mistral, Llama, DeepSeek and 25+ other AI models. PromptQuorum collects all responses in parallel and runs consensus analysis across them — so you get a single, verified verdict instead of trusting one model blindly.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How does PromptQuorum work?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum works in four stages: (1) Write — choose a prompt framework (CO-STAR, CRAFT, RISEN, APE, and more) and fill in the structured fields; (2) Optimize — your connected LLM transforms the fields into a precision prompt, which you refine with 8 one-click refinements; (3) Dispatch — send the optimized prompt to 25+ AI services simultaneously in one click; (4) Quorum — paste all responses into the analysis tab and choose from 13 analysis types including Consensus Summary, Hallucination Detection, Contradiction Detection, and Best Answer Selection.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Which AI models does PromptQuorum support?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum supports 25+ cloud AI models including OpenAI GPT-4o and o1, Anthropic Claude 3.5 Sonnet and Claude 4, Google Gemini 2.0 Flash and 1.5 Pro, xAI Grok, DeepSeek, Mistral Large, Cohere Command R+, Meta Llama via Together AI and Groq, and Perplexity. It also supports all major local LLM runtimes: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, KoboldCpp, and any OpenAI-compatible endpoint.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is consensus scoring and why does it matter?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Consensus scoring measures how much independent AI models agree on an answer. When 5 or more models give the same response to a question, confidence in that answer is far higher than when a single model answers alone. PromptQuorum\'s Quorum analysis extracts the points of agreement (consensus), flags contradictions between models, and scores the overall confidence level. This is the most reliable method currently available for detecting AI hallucinations — a claim that only one model makes, while four others omit it, is a strong hallucination signal.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How much does PromptQuorum cost?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum is free to use. You bring your own API key (BYOM) for any cloud AI provider — OpenAI, Anthropic, Google, and others — and PromptQuorum never charges you for model usage. You can also use a free local LLM like Ollama or LM Studio with no API key required at all. There is no subscription, no account required, and no usage limits imposed by PromptQuorum.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can I use PromptQuorum with local LLMs like Ollama or LM Studio?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes. PromptQuorum natively connects to Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, KoboldCpp, vLLM, oobabooga, and any OpenAI-compatible local endpoint. With a local model, PromptQuorum runs fully offline — no internet connection required, no API key needed. Your prompts, responses, and results never leave your device.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How does PromptQuorum protect my data and privacy?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'PromptQuorum collects zero telemetry and performs zero tracking. API keys are stored only in your browser\'s localStorage and are never transmitted to any PromptQuorum server — every model call goes directly from your browser to your chosen provider. PromptQuorum never sees your prompts, responses, or API keys. For maximum privacy, use a local LLM (Ollama or LM Studio): in that mode, no data leaves your device at all.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do I get beta access to PromptQuorum?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Enter your email in the waitlist form on the PromptQuorum homepage. Beta launches in April 2026. Early access members receive lifetime premium features, priority support, and direct input into the product roadmap. The desktop app (macOS and Windows) and web version will be available simultaneously at launch.'
                }
              }
            ]
          }),
        }}
      />

      {/* HowTo Schema — 4-stage PromptQuorum workflow */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': 'How to Optimize Prompts and Compare AI Models with PromptQuorum',
            'description': 'Four stages to turn any idea into a precision prompt and compare responses across 25+ AI models.',
            'totalTime': 'PT5M',
            'step': [
              {
                '@type': 'HowToStep',
                'position': 1,
                'name': 'Write a Structured Prompt',
                'text': 'Choose one of 9 prompt engineering frameworks (CO-STAR, CRAFT, RISEN, APE, SPECS, TRACE, RTF, Google Prompt, Single Prompt Line) and fill in the structured fields. The Framework Wizard recommends the best option for your task.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 2,
                'name': 'Optimize with Your LLM',
                'text': 'Your connected LLM (ChatGPT, Claude, Gemini, or a local model like Ollama) transforms the framework fields into a precision prompt. Refine iteratively with 8 one-click refinements. Every version is saved in history.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 3,
                'name': 'Dispatch to 25+ AI Services',
                'text': 'Send your optimized prompt to ChatGPT, Claude, Gemini, Grok, Mistral, Llama and 25+ other providers in one click. Tabs open in parallel — collect all responses in under a minute.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
              {
                '@type': 'HowToStep',
                'position': 4,
                'name': 'Quorum Analysis',
                'text': 'Paste all AI responses into the Quorum tab. Choose from 13 analysis types: Consensus Summary, Hallucination Detection, Contradiction Detection, Best Answer Selection, and more. Export results in TXT, MD, JSON, CSV, HTML, or PDF.',
                'image': 'https://www.promptquorum.com/og-image.png',
              },
            ],
          }),
        }}
      />
      {/* VideoObject Schema — tells Google how to index the demo video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            'name': 'PromptQuorum Demo — One Prompt to 25+ AI Models',
            'description': 'Watch how PromptQuorum works: write a structured prompt using 9 frameworks, optimize it with your own LLM, dispatch to ChatGPT, Claude, Gemini and 25+ AI models simultaneously, then run Quorum consensus analysis across all responses.',
            'thumbnailUrl': 'https://img.youtube.com/vi/R-bDPhT5EMo/maxresdefault.jpg',
            'embedUrl': 'https://www.youtube.com/embed/R-bDPhT5EMo',
            'url': 'https://www.youtube.com/watch?v=R-bDPhT5EMo',
            'uploadDate': '2026-03-13',
            'duration': 'PT2M',
            'publisher': {
              '@type': 'Organization',
              'name': 'PromptQuorum',
              'url': 'https://www.promptquorum.com',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.promptquorum.com/logo.svg',
              },
            },
          }),
        }}
      />
    </>
  )
}
