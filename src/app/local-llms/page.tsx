import type { Metadata } from 'next'
import { translations } from '@/translations'
import { LocalLLMsHub } from '@/components/LocalLLMsHub'
import { generateAlternates } from '@/lib/hreflang'

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'
  const t = translations[selectedLang as keyof typeof translations]

  return {
    title: t.localLlmsHubTitle,
    description: t.localLlmsHubDescription,
    alternates: generateAlternates('/local-llms', selectedLang),
    openGraph: {
      title: t.localLlmsHubTitle,
      description: t.localLlmsHubDescription,
      images: [{ url: '/og-image.png', alt: 'PromptQuorum' }],
      type: 'website',
      siteName: 'PromptQuorum',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.localLlmsHubTitle,
      description: selectedLang === 'en'
        ? 'Run AI locally in 5 min with Ollama. $0/token, offline, private. Hardware guides, model rankings, LM Studio — April 2026.'
        : t.localLlmsHubDescription,
    },
  }
}

interface PageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LocalLLMsPage({ searchParams }: PageProps) {
  const sp = await searchParams
  const lang = (sp?.lang as string) || 'en'
  const validLangs = ['en', 'de', 'fr', 'ja', 'zh']
  const selectedLang = validLangs.includes(lang) ? lang : 'en'

  const t = translations[selectedLang as keyof typeof translations]
  const langSuffix = selectedLang === 'en' ? '' : `?lang=${selectedLang}`
  const canonicalUrl = `https://www.promptquorum.com/local-llms${langSuffix}`

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Best Local LLMs April 2026: Ollama, LM Studio, Hardware & VRAM Guide',
      description: 'Best local LLMs April 2026 – latest Ollama models (Llama 4 Scout, Qwen3, Gemma 3), LM Studio vs Jan.ai comparison, VRAM/GPU requirements for RTX 3060 & more. Pull commands, beginner guides & hardware recommendations.',
      url: canonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      hasPart: [
        { '@type': 'WebPage', name: 'How to Install Ollama', url: 'https://www.promptquorum.com/local-llms/how-to-install-ollama' },
        { '@type': 'WebPage', name: 'Best Local LLMs 2026', url: 'https://www.promptquorum.com/local-llms/best-local-llms-2026' },
        { '@type': 'WebPage', name: 'Local LLM Hardware Guide 2026', url: 'https://www.promptquorum.com/local-llms/local-llm-hardware-guide-2026' },
        { '@type': 'WebPage', name: 'LLM Quantization Explained', url: 'https://www.promptquorum.com/local-llms/llm-quantization-explained' },
        { '@type': 'WebPage', name: 'Ollama vs LM Studio', url: 'https://www.promptquorum.com/local-llms/ollama-vs-lm-studio' },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: t.localLlmsHubTitle,
      url: canonicalUrl,
      'inLanguage': selectedLang,
      datePublished: '2026-04-01',
      dateModified: '2026-04-16',
      description: 'As of April 2026: 88 guides on local LLMs covering Ollama, LM Studio, hardware requirements, model benchmarks, fine-tuning, local RAG, and enterprise deployment.',
      isPartOf: { '@type': 'WebSite', url: 'https://www.promptquorum.com' },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.key-takeaways', '.article-intro']
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'inLanguage': selectedLang,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Local LLMs', item: canonicalUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'inLanguage': selectedLang,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a local LLM?',
          acceptedAnswer: { '@type': 'Answer', text: 'A large language model (e.g., Llama 4, Qwen3.5, DeepSeek) that runs on your own hardware instead of a cloud API. You get full privacy, offline capability, no usage limits, and zero API costs after hardware purchase.' }
        },
        {
          '@type': 'Question',
          name: 'How much VRAM do I need for a local LLM?',
          acceptedAnswer: { '@type': 'Answer', text: '8 GB VRAM runs 7B models at Q4 quantization. 16 GB handles 13B models comfortably. 40 GB+ (e.g., dual RTX 4090s or A100) is required for 70B models. Apple Silicon unified memory counts as VRAM.' }
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Ollama and LM Studio?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama is a CLI tool that runs models via simple terminal commands and exposes an OpenAI-compatible API at `localhost:11434`. LM Studio provides a desktop GUI, model browser, and built-in chat interface. Both support the same models.' }
        },
        {
          '@type': 'Question',
          name: 'Can local LLMs match cloud models like GPT-4o?',
          acceptedAnswer: { '@type': 'Answer', text: 'On coding and reasoning tasks, Llama 4, DeepSeek V3, and Qwen3.5 score within 5–10% of GPT-4o on standard benchmarks (MMLU, HumanEval). Claude Opus 4.6 and GPT-5 maintain an edge on complex multi-step tasks.' }
        },
        {
          '@type': 'Question',
          name: 'How do I fine-tune a local model?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fine-tuning requires 500+ labeled training examples, the QLoRA framework (reduces VRAM requirement via 4-bit quantization), 24 GB+ VRAM (or a cloud GPU rental), and 1–4 hours of training time for a 7B model.' }
        },
        {
          '@type': 'Question',
          name: 'What is the minimum hardware to run a local LLM in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minimum: 8 GB RAM and any modern CPU (runs 3B–7B models at 2–5 tokens/sec). Recommended: a GPU with 8 GB+ VRAM (RTX 3060 or newer) for 20–40 tokens/sec on 7B models.' }
        },
        {
          '@type': 'Question',
          name: 'Are local LLMs free to use?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ollama and LM Studio are free and open-source. The models themselves (Llama, Mistral, Qwen, DeepSeek) are available under open-source licenses at no cost. The only cost is your hardware.' }
        },
        {
          '@type': 'Question',
          name: 'What is the best local LLM for coding in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 7B is the top performer for code completion and review on consumer hardware (8 GB VRAM). DeepSeek-Coder V2 Lite is the strongest alternative. For CPU-only setups, Phi-3.5 Mini offers the best coding quality under 4 GB RAM.' }
        },
        {
          '@type': 'Question',
          name: 'Can I run a local LLM without a GPU?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Any modern CPU can run 3B–7B models at Q4 quantization using Ollama (CPU mode) or LM Studio. Typical CPU inference speed: 2–8 tokens/sec on a modern laptop CPU, compared to 20–50 tokens/sec on an RTX 4060. 7B Q4 requires ~5 GB RAM (not VRAM). For CPU-only setups, Phi-3.5 Mini (3.8B) and Llama 3.2 3B offer the best quality-to-speed ratio.' }
        },
        {
          '@type': 'Question',
          name: 'How do I update local LLM models when new versions are released?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama: run `ollama pull <model-name>` again — it downloads only changed layers. LM Studio: open the model browser, find the updated version, and download it. Old GGUF files are not automatically removed — delete them manually from ~/.ollama/models (Ollama) or ~/Library/Application Support/LM Studio/models (macOS) to free disk space. Model updates from Meta, Alibaba, and Mistral typically arrive within 24–48 hours of official release.' }
        },
        {
          '@type': 'Question',
          name: 'Is a local LLM better than ChatGPT?',
          acceptedAnswer: { '@type': 'Answer', text: 'For privacy and cost, yes. For raw output quality, no. As of 2026, frontier cloud models (GPT-4o, Claude 4.6 Opus) outperform all locally-runnable models on complex reasoning. However, local 70B models (Llama 3.3 70B, Qwen2.5 72B) match or exceed GPT-4o Mini on most everyday tasks — at zero per-query cost.' }
        },
        {
          '@type': 'Question',
          name: 'How much RAM do I need to run a local LLM?',
          acceptedAnswer: { '@type': 'Answer', text: 'Minimum: 8 GB RAM to run a 7B model at Q4 quantization. Recommended: 16 GB for 13B models, 40+ GB for 70B models. Apple Silicon unified memory counts fully toward this — an M3 Mac with 18 GB can run a 13B model well.' }
        },
        {
          '@type': 'Question',
          name: 'How do I run a local LLM?',
          acceptedAnswer: { '@type': 'Answer', text: 'Install Ollama (ollama.com), then run: ollama run llama3.1:8b. The model downloads automatically. No API key, no account, no internet after the initial download.' }
        },
        {
          '@type': 'Question',
          name: 'What is the best free local LLM in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Meta Llama 3.1 8B for general use (Apache-compatible, 5.5 GB RAM). Qwen2.5-Coder 32B for coding (92.7% HumanEval, 20 GB RAM). DeepSeek-R1 7B for reasoning (MIT licence, 5 GB RAM).' }
        },
        {
          '@type': 'Question',
          name: 'Are local LLMs private?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. When running with Ollama or LM Studio, prompts and responses never leave your machine. No data is transmitted. Recommended for GDPR-regulated workflows, legal and medical document processing, and any task involving confidential information.' }
        },
        {
          '@type': 'Question',
          name: 'What is the best local LLM for coding in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5-Coder 32B scores 92.7% on HumanEval and is the top choice for coding on hardware with 20 GB RAM. For 8 GB VRAM, Qwen2.5-Coder 7B is the best option. DeepSeek-Coder V2 Lite is a strong alternative.' }
        },
        {
          '@type': 'Question',
          name: 'What are the best Ollama models in April 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Top Ollama models April 2026: Llama 4 Scout 17B (best overall quality on 12 GB VRAM, ollama pull llama4:scout), Qwen3 8B (top coding, 5 GB VRAM), Gemma 3 12B (strong reasoning on RTX 3060, 8 GB VRAM), DeepSeek-R2 8B (best math/logic, 5 GB VRAM).' }
        },
        {
          '@type': 'Question',
          name: 'What is the best local LLM for RTX 3060 12 GB VRAM?',
          acceptedAnswer: { '@type': 'Answer', text: 'RTX 3060 12 GB VRAM is an excellent GPU for local LLMs. Best choices: Llama 4 Scout 17B at Q4 (~10 GB VRAM), Gemma 3 12B (~8 GB VRAM), Qwen3 14B (~9 GB VRAM). All run at 20–40 tokens/sec on an RTX 3060.' }
        },
        {
          '@type': 'Question',
          name: 'Ollama vs LM Studio vs Jan.ai: which should I use?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use Ollama if you need a CLI and OpenAI-compatible API at localhost:11434 for scripting or dev work. Use LM Studio if you want a desktop GUI and model browser. Use Jan.ai for privacy-first chat with a GUI. Setup time: Ollama 2 min, LM Studio 5 min, Jan.ai 5 min.' }
        },
        {
          '@type': 'Question',
          name: 'What are the best budget GPUs for local LLMs in 2026?',
          acceptedAnswer: { '@type': 'Answer', text: 'Best budget GPUs for local LLMs: RTX 3060 12 GB (~$200 used) runs 13B models at 20–30 tok/s. RTX 4060 8 GB (~$280 new) runs 7B at 35–45 tok/s. RTX 2070 8 GB (~$120 used) runs 7B at 15–20 tok/s. AMD RX 6700 XT 12 GB (~$180) matches RTX 3060 under ROCm/Linux. Minimum recommended: 8 GB VRAM.' }
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      'name': 'Local LLMs Hub Navigation',
      'inLanguage': selectedLang,
      'hasPart': [
        { '@type': 'SiteNavigationElement', name: 'Getting Started', url: `https://www.promptquorum.com/local-llms${langSuffix}#getting-started` },
        { '@type': 'SiteNavigationElement', name: 'Models by Use Case', url: `https://www.promptquorum.com/local-llms${langSuffix}#best-models` },
        { '@type': 'SiteNavigationElement', name: 'Tools & Interfaces', url: `https://www.promptquorum.com/local-llms${langSuffix}#tools-interfaces` },
        { '@type': 'SiteNavigationElement', name: 'Hardware & Performance', url: `https://www.promptquorum.com/local-llms${langSuffix}#hardware-performance` },
        { '@type': 'SiteNavigationElement', name: 'Advanced Techniques & Applications', url: `https://www.promptquorum.com/local-llms${langSuffix}#advanced-techniques` },
        { '@type': 'SiteNavigationElement', name: 'Enterprise', url: `https://www.promptquorum.com/local-llms${langSuffix}#enterprise` },
        { '@type': 'SiteNavigationElement', name: 'GPU Buying Guides', url: `https://www.promptquorum.com/local-llms${langSuffix}#gpu-buying-guides` },
        { '@type': 'SiteNavigationElement', name: 'Hardware Setups', url: `https://www.promptquorum.com/local-llms${langSuffix}#hardware-setups` },
        { '@type': 'SiteNavigationElement', name: 'Privacy & Business', url: `https://www.promptquorum.com/local-llms${langSuffix}#privacy-business` },
        { '@type': 'SiteNavigationElement', name: 'Cost & Comparisons', url: `https://www.promptquorum.com/local-llms${langSuffix}#cost-comparisons` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'inLanguage': selectedLang,
      name: 'Best Local LLM Models April 2026',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Llama 4 Scout 17B', description: 'Meta. Best overall quality on 12 GB VRAM. ollama pull llama4:scout. ~10 GB VRAM at Q4.' },
        { '@type': 'ListItem', position: 2, name: 'Qwen3 8B', description: 'Alibaba. Top coding and multilingual. ollama pull qwen3:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 3, name: 'Gemma 3 12B', description: 'Google. Strong reasoning on RTX 3060. ollama pull gemma3:12b. 8 GB VRAM.' },
        { '@type': 'ListItem', position: 4, name: 'DeepSeek-R2 8B', description: 'DeepSeek. Best for math and logic. ollama pull deepseek-r2:8b. 5 GB VRAM.' },
        { '@type': 'ListItem', position: 5, name: 'Qwen2.5-Coder 7B', description: 'Alibaba. Best for code completion and review. 7B runs on 8 GB GPU. Outperforms GPT-4 on HumanEval.' },
        { '@type': 'ListItem', position: 6, name: 'Mistral 7B', description: 'Mistral AI. Fastest on consumer hardware. 4 GB VRAM at Q4. Best for throughput-sensitive tasks.' },
        { '@type': 'ListItem', position: 7, name: 'Llama 4', description: 'Meta. Best overall quality. 8B and 70B variants. Runs on RTX 4060 Ti (8B Q4) or dual RTX 4090 (70B Q4).' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'inLanguage': selectedLang,
      'totalTime': 'PT15M',
      name: 'How to Install and Run a Local LLM',
      step: [
        { '@type': 'HowToStep', name: 'Check hardware requirements', text: 'Verify you have sufficient VRAM: 8GB for 7B models, 16GB for 13B, 48GB+ for 70B models.' },
        { '@type': 'HowToStep', name: 'Install Ollama or LM Studio', text: 'Download Ollama from ollama.ai (CLI) or LM Studio (GUI) depending on your preference.' },
        { '@type': 'HowToStep', name: 'Choose and download a model', text: 'Select Llama 4, Qwen3.5, or DeepSeek based on your task. Ollama: ollama pull llama4. LM Studio: use the model browser.' },
        { '@type': 'HowToStep', name: 'Run the model locally', text: 'Ollama: ollama run llama4. LM Studio: launch the model in the GUI and connect via API (http://localhost:11434).' },
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
