import type { Metadata } from 'next'
import { translations } from '@/translations'
import { HowItWorksPageClient } from '@/components/HowItWorksPageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.howItWorksMetaTitle,
    description: t.howItWorksMetaDescription,
    alternates: generateAlternates('/how-it-works', selectedLang),
    openGraph: {
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.howItWorksMetaTitle,
      description: t.howItWorksMetaDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function HowItWorksPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  // Build language-specific schema
  const langSuffix = selectedLang === 'en' ? '' : `?lang=${selectedLang}`
  const schemaArray = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': 'How PromptQuorum Works — Write, Optimize, Dispatch, Quorum',
      'url': `https://www.promptquorum.com/how-it-works${langSuffix}`,
      'inLanguage': selectedLang,
      'description': 'A complete guide to the PromptQuorum 4-stage workflow: structured prompt writing with 9 frameworks, LLM-powered optimization, one-click dispatch to 25+ AI services, and multi-model Quorum analysis.',
      'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
        { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'item': `https://www.promptquorum.com/how-it-works${langSuffix}` },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Use PromptQuorum: 4-Stage Workflow',
      'inLanguage': selectedLang,
      'totalTime': 'PT8M',
      'description': 'A complete guide to the PromptQuorum 4-stage workflow for multi-model AI dispatch and consensus analysis.',
      'image': 'https://www.promptquorum.com/og-image.png',
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': 'Write Your Structured Prompt',
          'text': 'Start with a structured prompt using one of PromptQuorum\'s 9 built-in frameworks (CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, or Single Prompt Line). Include role, objective, context, constraints, and output format.',
          'image': 'https://www.promptquorum.com/og-image.png',
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': 'Optimize With Your Own LLM',
          'text': 'Optionally improve your prompt by sending it to your connected LLM for optimization. PromptQuorum can refine the prompt structure, wording, and constraints before dispatch.',
          'image': 'https://www.promptquorum.com/og-image.png',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': 'Dispatch to 25+ AI Models',
          'text': 'Send your prompt simultaneously to 25+ AI models including OpenAI GPT-4o, Anthropic Claude, Google Gemini, xAI Grok, DeepSeek, Mistral, Cohere, and more. PromptQuorum opens all destinations in parallel browser tabs in a single click.',
          'image': 'https://www.promptquorum.com/og-image.png',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': 'Run Quorum Analysis on Results',
          'text': 'Use PromptQuorum\'s 13 analysis types to compare and synthesize results: Hallucination Detection, Contradiction Detection, Best Answer Selection, Consensus Summary, Weighted Merge, Cost Analysis, Speed Analysis, Quality Score, Confidence Level, Minority Report, Model Reliability, Semantic Similarity, and Custom Analysis.',
          'image': 'https://www.promptquorum.com/og-image.png',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': selectedLang,
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is multi-model AI dispatch?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Multi-model dispatch means sending one prompt simultaneously to 25+ AI models — such as GPT-4o, Claude, and Gemini — in a single click. PromptQuorum pre-loads your prompt into each destination via URL, opening all browser tabs in parallel so you can collect responses in under a minute.' },
        },
        {
          '@type': 'Question',
          'name': 'What is Quorum analysis?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Quorum analysis is the structured comparison of responses from multiple AI models to identify consensus, contradictions, and confidence levels. PromptQuorum offers 13 analysis types including Hallucination Detection, Contradiction Detection, Best Answer Selection, Consensus Summary, and Weighted Merge.' },
        },
        {
          '@type': 'Question',
          'name': 'How many AI models does PromptQuorum support?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum supports 25+ cloud AI services including OpenAI (GPT-4o, o1), Anthropic Claude, Google Gemini, xAI Grok, DeepSeek, Mistral, Cohere, and more via OpenRouter. It also supports local LLMs via Ollama, LM Studio, Jan AI, and any OpenAI-compatible endpoint — with full offline capability.' },
        },
        {
          '@type': 'Question',
          'name': 'Is PromptQuorum free to use?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. PromptQuorum is free. You bring your own API keys (BYOM) — your keys connect directly from your browser to your chosen AI providers. No account is required, no subscription needed, and no PromptQuorum server ever handles your API keys or prompts.' },
        },
        {
          '@type': 'Question',
          'name': 'What prompt engineering frameworks does PromptQuorum include?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum includes 9 built-in frameworks: CO-STAR (winner of the Singapore GPT-4 competition), CRAFT, RISEN, TRACE, APE, SPECS, Google Prompt, RTF, and Single Prompt Line — plus 2 fully custom framework slots. A Framework Wizard helps you choose the right one for your task.' },
        },
        {
          '@type': 'Question',
          'name': 'How does hallucination detection work in PromptQuorum?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum\'s Hallucination Detection analysis sends all collected model responses to your connected LLM, which identifies factual claims that appear in only one or a minority of responses. When 5+ independent models disagree on a specific claim, it is flagged as a potential hallucination for your review.' },
        },
      ],
    },
  ]

  return (
    <>
      <HowItWorksPageClient initialLang={selectedLang as any} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaArray),
        }}
      />
    </>
  )
}
