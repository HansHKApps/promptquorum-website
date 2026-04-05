import type { Metadata } from 'next'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'

export const metadata: Metadata = {
  title: 'Local LLMs 2026: Complete Guide to Running AI Models Offline | PromptQuorum',
  description: 'Run open-source models locally (Llama 4, Qwen3.5, DeepSeek) with Ollama, LM Studio. Hardware requirements, benchmarks, fine-tuning, RAG. As of April 2026.',
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
      description: 'As of April 2026: 58 guides on local LLMs covering Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
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
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are local LLMs?',
          acceptedAnswer: { '@type': 'Answer', text: 'Local LLMs are open-source large language models (Llama 4, Qwen3.5, DeepSeek) that run on your own hardware instead of cloud APIs. Benefits: full privacy, offline capability, no usage limits, zero API costs.' }
        },
        {
          '@type': 'Question',
          name: 'How much VRAM do I need to run local LLMs?',
          acceptedAnswer: { '@type': 'Answer', text: '7B parameter models need 8GB VRAM, 13B need 16GB, 70B need 48GB+ VRAM. GPU memory is more important than CPU memory. Use vLLM, Ollama, or LM Studio to optimize VRAM usage.' }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Ollama and LM Studio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama is a lightweight CLI tool for running models locally via simple commands. LM Studio provides a desktop GUI, better model management, and easier testing. Both support the same models (Llama, Mistral, etc.).' }
        },
        {
          '@type': 'Question',
          name: 'Can local LLMs match cloud models like GPT-4o?',
          acceptedAnswer': { '@type': 'Answer', text: 'Llama 4, DeepSeek V4, and Qwen3.5 perform similarly to GPT-4 on many tasks (coding, reasoning). GPT-5 and Claude 4.6 still excel on complex, multi-step reasoning. Test on your specific workload to compare.' }
        },
        {
          '@type': 'Question',
          name: 'How do I fine-tune a local model?',
          acceptedAnswer': { '@type': 'Answer', text: 'Fine-tuning local models requires: labeled training data (500+ examples), QLoRA framework for efficient training, 24GB+ VRAM (or use cloud GPU), and 1–4 hours of training time. LoRA adapters let you fine-tune without full retraining.' }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Install and Run a Local LLM',
      step: [
        { '@type': 'HowToStep', name: 'Check hardware requirements', text: 'Verify you have sufficient VRAM: 8GB for 7B models, 16GB for 13B, 48GB+ for 70B models.' },
        { '@type': 'HowToStep', name: 'Install Ollama or LM Studio', text: 'Download Ollama from ollama.ai (CLI) or LM Studio (GUI) depending on your preference.' },
        { '@type': 'HowToStep', name: 'Choose and download a model', text: 'Select Llama 4, Qwen3.5, or DeepSeek based on your task. Ollama: ollama pull llama2. LM Studio: use the model browser.' },
        { '@type': 'HowToStep', name: 'Run the model locally', text: 'Ollama: ollama run llama2. LM Studio: launch the model in the GUI and connect via API (http://localhost:8000).' },
        { '@type': 'HowToStep', name: 'Integrate into your app', text: 'Use OpenAI-compatible API endpoints to integrate local models into applications without code changes.' }
      ]
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocalLLMsHub initialLang={selectedLang as any} />
    </>
  )
}
