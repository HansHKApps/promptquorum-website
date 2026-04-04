import type { Metadata } from 'next'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Local LLMs 2026: Complete Guide to Running AI Models Offline | PromptQuorum',
  description: 'Run AI models locally with full privacy and zero API costs. 58 guides covering Ollama, LM Studio, hardware requirements, model selection, fine-tuning, and enterprise deployment.',
  openGraph: {
    title: 'Local LLMs 2026: Complete Guide | PromptQuorum',
    description: "Stop paying for AI APIs. Run Llama 4, Qwen3.5, DeepSeek, and 70B+ models locally on your own hardware — full privacy, offline capable, zero usage limits.",
    images: [{ url: '/og-image.png', alt: 'PromptQuorum — Local LLMs 2026 Guide' }],
    type: 'website',
    siteName: 'PromptQuorum',
  },
  twitter: {
    card: 'summary_large_image',
    description: 'Run AI offline 🖥️ → Ollama, LM Studio, 70B models on your own hardware. 58 guides. Full privacy, zero API costs.',
  },
  alternates: generateAlternates('/local-llms'),
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LocalLLMsPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Local LLMs 2026: Complete Guide to Running AI Models Offline',
      url: 'https://www.promptquorum.com/local-llms',
      description: '58 guides on local LLMs: Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
      isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Local LLMs', item: 'https://www.promptquorum.com/local-llms' },
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocalLLMsHub initialLang={selectedLang as any} />
    </>
  )
}
