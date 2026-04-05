import type { Metadata } from 'next'
import { translations } from '@/translations'
import { FeaturesPageClient } from '@/components/FeaturesPageClient'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.featuresMetaTitle,
    description: t.featuresMetaDescription,
    alternates: generateAlternates('/features'),
    openGraph: {
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.featuresMetaTitle,
      description: t.featuresMetaDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function FeaturesPage({ searchParams }: PageProps) {
  // Extract language from searchParams
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  return (
    <>
      <FeaturesPageClient initialLang={selectedLang as any} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              'name': 'PromptQuorum Features — Prompt Engineering, Multi-Model Dispatch, Quorum Analysis',
              'url': 'https://www.promptquorum.com/features',
              'description': 'Explore PromptQuorum features: 9 prompt frameworks, AI optimization, dispatch to 25+ AI services, multi-model consensus analysis, hallucination detection, local LLM support, and full privacy.',
              'datePublished': '2026-04-05',
              'dateModified': '2026-04-05',
              'isPartOf': { '@type': 'WebSite', 'url': 'https://www.promptquorum.com' },
              'about': {
                '@type': 'SoftwareApplication',
                'name': 'PromptQuorum',
                'url': 'https://www.promptquorum.com',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.promptquorum.com' },
                { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://www.promptquorum.com/features' },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What prompt frameworks does PromptQuorum include?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum includes 9 built-in prompt engineering frameworks: CO-STAR, CRAFT, RISEN, TRACE, APE, SPECS, Google, and RTF. Each framework structures your input into specific fields that improve output quality.' },
                },
                {
                  '@type': 'Question',
                  'name': 'What is Quorum consensus scoring?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Quorum analysis collects responses from multiple AI models and scores them for consensus. When 5+ independent models agree on an answer, confidence is far higher than when a single model responds alone.' },
                },
                {
                  '@type': 'Question',
                  'name': 'How many AI models can I dispatch to simultaneously?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum dispatches to 25+ cloud AI models including GPT-4o, Claude 4.6 Sonnet, Gemini 2.5 Pro, Mistral Large, DeepSeek, and others. You can also add custom API endpoints.' },
                },
                {
                  '@type': 'Question',
                  'name': 'What types of Quorum analysis are available?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'PromptQuorum offers 13 Quorum analysis types across 4 categories: Synthesis (Consensus Summary, Weighted Merge, Key Points), Comparison (Contradiction Detection, Confidence Scoring, Best Answer Selection), Quality (Hallucination Detection, Fact Verification, Tone Analysis), and Selection (Consensus-based ranking).' },
                },
                {
                  '@type': 'Question',
                  'name': 'How does hallucination detection work?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Hallucination Detection flags claims that appear in only one model\'s response or that contradict factual consensus across multiple models. When 5+ independent models disagree on a specific claim, it is flagged as a potential hallucination.' },
                },
                {
                  '@type': 'Question',
                  'name': 'Can I use PromptQuorum offline with local LLMs?',
                  'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. PromptQuorum supports all major local LLM runtimes: Ollama, LM Studio, Jan AI, GPT4All, Open WebUI, vLLM, KoboldCpp, and any OpenAI-compatible endpoint. Run entirely in your browser—nothing leaves your device.' },
                },
              ],
            },
          ]),
        }}
      />
    </>
  )
}
