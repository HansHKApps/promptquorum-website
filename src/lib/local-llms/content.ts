import type { Language } from '@/lib/blog/blogContent'

// ─── Section & Article types (mirrors PESection / PEArticle) ─────────────────

export interface LLMSection {
  title?: string
  content?: string | string[]
  blockquote?: string
  blockquoteSource?: string
  items?: string[]
  numberedItems?: string[]
  rows?: Array<{ [key: string]: string }>
  columns?: string[]
  faqs?: Array<{ q: string; a: string }>
  isTldr?: boolean
  tableFormat?: boolean
  image?: string
  imageCaption?: string
  imagePlaceholder?: boolean
  codeBlock?: string
  codeLanguage?: string
}

export interface LLMArticle {
  theme: string
  title: string
  intro: string
  metaDescription?: string
  seoTitle?: string
  publishDate: string
  dateModified?: string
  readTime: string
  sections: Record<string, LLMSection>
  schema?: Record<string, unknown>
  supplementalSchema?: Record<string, unknown>
  howToSchema?: Record<string, unknown>
  faqSchema?: Record<string, unknown>
  tableSchema?: Record<string, unknown>
  itemListSchema?: Record<string, unknown>
  educationalLevel?: string
  primaryTerm?: string
  toc?: { label: string; anchor: string }[]
}

// ─── Content registry ────────────────────────────────────────────────────────

export const llmContent: Record<string, Partial<Record<Language, LLMArticle>>> = {

  'what-are-local-llms': {
    en: {
      theme: 'Getting Started',
      title: 'What Are Local LLMs? How Running AI Models on Your Own Hardware Works',
      seoTitle: 'What Are Local LLMs?',
      intro: 'A local LLM is an AI language model that runs entirely on your own hardware — no internet connection, no API calls, no data leaving your machine. You download the model weights as a file, run an inference engine like Ollama or LM Studio, and the model responds from your CPU or GPU alone.',
      metaDescription: 'Local LLMs run AI models on your own hardware with no internet required. Learn what they are, how they work, and when to use them instead of cloud APIs.',
      publishDate: '2026-04-04',
      readTime: '7 min read',
      educationalLevel: 'Beginner',
      primaryTerm: 'local LLM',
      toc: [
        { label: 'Key Takeaways', anchor: '#key-takeaways' },
        { label: 'What Is a Local LLM?', anchor: '#what-is-a-local-llm' },
        { label: 'How Does a Local LLM Work?', anchor: '#how-does-a-local-llm-work' },
        { label: 'What Hardware Do You Need?', anchor: '#what-hardware-do-you-need' },
        { label: 'Local LLM vs Cloud API: What Is the Difference?', anchor: '#local-llm-vs-cloud-api' },
        { label: 'Which Model Formats Are Used?', anchor: '#which-model-formats-are-used' },
        { label: 'When Should You Use a Local LLM?', anchor: '#when-should-you-use-a-local-llm' },
        { label: 'Common Questions', anchor: '#common-questions' },
      ],
      sections: {
        tldr: {
          isTldr: true,
          items: [
            'A local LLM runs on your own CPU or GPU — no internet, no API costs, no data sent to third-party servers.',
            'Three components are required: the model file (GGUF or safetensors format), an inference engine (Ollama, LM Studio, or llama.cpp), and optionally a chat interface.',
            'Minimum hardware: 8 GB RAM for a 7B-parameter model at 4-bit quantization. 16 GB RAM handles most everyday models comfortably.',
            'Local models are slower than cloud APIs on consumer hardware — a 7B model on a modern laptop produces 15–40 tokens/sec vs. ~100 tokens/sec from GPT-4o Mini via API.',
            'Best use cases: private data processing, offline work, zero recurring cost, and learning how LLMs work.',
          ],
        },
        whatIsLocalLlm: {
          title: 'What Is a Local LLM?',
          content: [
            'A local LLM (large language model) is an AI model that runs on hardware you control — your laptop, desktop, or on-premise server. The model weights are stored as a file on your disk, and all processing happens on your own CPU or GPU. No prompt text or response data is transmitted to any external server.',
            'The term "local" distinguishes these models from cloud-hosted services like OpenAI GPT-4o, Anthropic Claude 4.6, or Google Gemini 2.5 Pro, which process your prompts on remote servers and return results over the internet.',
            'Local LLMs range from small 1B-parameter models that run on a phone to 70B-parameter models that require a workstation with 48 GB of VRAM. The most commonly used beginner models — Meta Llama 3.2 3B, Microsoft Phi-3 Mini, and Google Gemma 2 2B — run on any laptop with 8 GB of RAM.',
          ],
        },
        howItWorks: {
          title: 'How Does a Local LLM Work?',
          content: [
            'Running a local LLM involves three layers working together: the model file, the inference engine, and the interface.',
            '**The model file** contains the neural network weights — the learned numerical values that define how the model processes and generates text. For local use, these weights are almost always stored in GGUF format (a compressed format developed by the llama.cpp project) or safetensors format. A 7B-parameter model quantized to 4-bit precision is approximately 4.5 GB on disk.',
            '**The inference engine** reads the model file and performs the matrix calculations needed to generate tokens. The most popular engines are [Ollama](/local-llms/how-to-install-ollama) (runs as a background service with an OpenAI-compatible API), [LM Studio](/local-llms/how-to-install-lm-studio) (a desktop app with a built-in chat UI), and llama.cpp (the underlying C++ library that most other tools build on).',
            '**The interface** is where you interact with the model — a terminal, a web UI, or an API endpoint. Many tools like Ollama expose a REST API at `http://localhost:11434` so you can connect any OpenAI-compatible application to your local model.',
          ],
        },
        hardware: {
          title: 'What Hardware Do You Need to Run a Local LLM?',
          content: 'The hardware requirement depends entirely on which model you want to run and how fast you need responses.',
          rows: [
            { 'Model Size': '1B–3B parameters', 'RAM Required': '4–6 GB', 'Speed (CPU)': '20–60 tok/sec', 'Example Models': 'Llama 3.2 1B, Phi-3 Mini 3.8B' },
            { 'Model Size': '7B–8B parameters', 'RAM Required': '6–8 GB', 'Speed (CPU)': '10–30 tok/sec', 'Example Models': 'Llama 3.1 8B, Mistral 7B' },
            { 'Model Size': '13B–14B parameters', 'RAM Required': '10–12 GB', 'Speed (CPU)': '5–15 tok/sec', 'Example Models': 'Llama 2 13B, Qwen2.5 14B' },
            { 'Model Size': '32B–34B parameters', 'RAM Required': '20–24 GB', 'Speed (CPU)': '2–6 tok/sec', 'Example Models': 'Qwen2.5 32B, DeepSeek-R1 32B' },
            { 'Model Size': '70B+ parameters', 'RAM Required': '40–48 GB', 'Speed (CPU)': '1–3 tok/sec', 'Example Models': 'Llama 3.3 70B, Qwen2.5 72B' },
          ],
          columns: ['Model Size', 'RAM Required', 'Speed (CPU)', 'Example Models'],
        },
        hardwareGpu: {
          title: 'Does a GPU Make a Local LLM Faster?',
          content: 'GPU acceleration dramatically improves speed. An NVIDIA RTX 4070 Ti (12 GB VRAM) runs a 7B model at 80–120 tokens/sec — 4–8× faster than CPU-only mode. Apple Silicon Macs (M1, M2, M3, M4) use unified memory and achieve 40–80 tokens/sec on 7B models without a discrete GPU. For laptop users, see [How to Run Local LLMs on a Laptop](/local-llms/local-llm-on-laptop) for hardware-specific tips.',
        },
        vsCloud: {
          title: 'Local LLM vs Cloud API: What Is the Difference?',
          content: 'The core tradeoff is privacy and cost vs. capability and speed. See the full comparison in [Local LLMs vs Cloud APIs](/local-llms/local-llms-vs-cloud-apis).',
          rows: [
            { 'Factor': 'Privacy', 'Local LLM': 'Complete — data never leaves your machine', 'Cloud API': 'Data processed on provider servers' },
            { 'Factor': 'Cost', 'Local LLM': '$0 per token after hardware cost', 'Cloud API': '$0.15–$15 per 1M tokens depending on model' },
            { 'Factor': 'Speed', 'Local LLM': '10–120 tok/sec on consumer hardware', 'Cloud API': '50–200 tok/sec, varies by load' },
            { 'Factor': 'Model quality', 'Local LLM': 'Good — competitive at 70B scale', 'Cloud API': 'Best available (GPT-4o, Claude 4.6 Opus)' },
            { 'Factor': 'Setup time', 'Local LLM': '5–15 minutes with Ollama or LM Studio', 'Cloud API': '2–5 minutes to get an API key' },
            { 'Factor': 'Offline use', 'Local LLM': 'Yes — works without internet', 'Cloud API': 'No — requires active connection' },
          ],
          columns: ['Factor', 'Local LLM', 'Cloud API'],
        },
        modelFormats: {
          title: 'Which Model Formats Are Used for Local LLMs?',
          content: [
            '**GGUF** (GPT-Generated Unified Format) is the dominant format for local inference. Developed by the llama.cpp project, GGUF files embed all model metadata and support multiple quantization levels in a single file. When you run `ollama pull llama3.2`, Ollama downloads a GGUF file internally.',
            '**Safetensors** is a format from Hugging Face used primarily with PyTorch-based inference tools like transformers and vLLM. It is more common in research and server deployments.',
            '**Quantization** reduces model precision to lower memory requirements. A 7B model in full FP16 precision requires ~14 GB of RAM. At Q4_K_M quantization (4-bit), the same model requires ~4.5 GB with minimal quality loss. Most beginner guides use Q4_K_M or Q5_K_M.',
          ],
        },
        whenToUse: {
          title: 'When Should You Use a Local LLM Instead of a Cloud API?',
          items: [
            '**Processing sensitive data** — medical records, legal documents, financial data, or any personally identifiable information (PII) that cannot leave your infrastructure.',
            '**Eliminating API costs** — high-volume batch processing where per-token cloud costs accumulate quickly. A 7B model running locally costs $0 per query after hardware.',
            '**Offline or air-gapped environments** — field work, secure facilities, or applications that must function without internet connectivity.',
            '**Learning and experimentation** — understanding how LLMs work internally, testing prompts without cost concerns, or building local AI-powered tools.',
            '**Low-latency applications** — when network round-trip time is unacceptable and a smaller local model is fast enough for the task.',
          ],
        },
        faqSection: {
          title: 'Common Questions About Local LLMs',
          faqs: [
            {
              q: 'Can a local LLM match GPT-4o quality?',
              a: 'No — not on current consumer hardware. GPT-4o and Claude 4.6 Opus outperform any locally-runnable model on complex reasoning, code generation, and instruction-following benchmarks. However, for summarization, translation, and everyday writing tasks, a well-quantized 13B–34B model produces results that are difficult to distinguish from frontier models.',
            },
            {
              q: 'Do I need a GPU to run a local LLM?',
              a: 'No. All major inference engines (Ollama, LM Studio, llama.cpp) run on CPU only. A GPU significantly speeds things up — an NVIDIA RTX 4060 (8 GB VRAM) runs a 7B model at 60–90 tokens/sec vs. 10–20 tokens/sec on CPU. Apple Silicon Macs use GPU-accelerated unified memory by default and are well-suited for local LLMs without a discrete GPU.',
            },
            {
              q: 'Where do I download local LLM models?',
              a: 'The three main sources are: Ollama\'s model library (ollama.com/library) for easy one-command downloads; Hugging Face (huggingface.co) for the full range of GGUF and safetensors models; and LM Studio\'s built-in model browser which searches Hugging Face directly. See [How to Install Ollama](/local-llms/how-to-install-ollama) and [How to Install LM Studio](/local-llms/how-to-install-lm-studio) for setup guides.',
            },
            {
              q: 'Is running a local LLM private?',
              a: 'Yes — with caveats. The model inference itself is fully local. However, some applications built on top of local LLMs may send data to external servers. Always check whether the interface or plugin layer you use has telemetry or cloud sync enabled. See the [Local LLM Security & Privacy Checklist](/local-llms/local-llm-security-privacy-checklist) for a full audit guide.',
            },
          ],
        },
        nextSteps: {
          title: 'How to Get Started with Local LLMs',
          content: 'The fastest path to running your first local LLM is [How to Install Ollama](/local-llms/how-to-install-ollama) — a single command installs the engine and pulls a model in under 5 minutes on macOS, Windows, or Linux. If you prefer a graphical interface, [How to Install LM Studio](/local-llms/how-to-install-lm-studio) walks through the desktop app setup. To choose which model to start with, see [Best Beginner Local LLM Models](/local-llms/best-beginner-local-llm-models).',
        },
      },
    },
  },

}
