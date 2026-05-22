import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best eGPU for Ollama on a MacBook in 2026?',
    seoTitle: 'eGPU for Ollama on MacBook 2026 | Prompt Bites',
    metaDescription: 'There is no working eGPU for Ollama on an Apple Silicon MacBook. Unified memory and no PCIe eGPU support rule it out. Use unified memory or a Linux laptop.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['Apple Silicon MacBook'],
    educationalLevel: 'Intermediate',
    audience: 'MacBook owners considering an eGPU to accelerate Ollama',
    affiliateDisclosure: true,
    siblingBites: ['mac-mini-m4-local-llm', 'best-budget-ai-laptop-under-1000'],
    is_living_page: false,
    leadAnswerBlock:
      'There is no working eGPU for Ollama on an Apple Silicon MacBook. Apple Silicon uses unified memory and does not expose PCIe to external GPUs — macOS dropped third-party eGPU drivers when Intel Macs were discontinued. eGPUs only help Linux laptops with Thunderbolt 4 or OCuLink.',
    toc: [
      { label: 'Best Pick: Skip the eGPU, Use Unified Memory', anchor: '#best-pick' },
      { label: 'Why eGPUs Do Not Work on Apple Silicon', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'eGPU enclosures plug an external GPU into a laptop via Thunderbolt or OCuLink. They are useful on Linux. On Apple Silicon MacBooks, they do not work — and not because of price or availability. The architecture rules them out.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Apple Silicon MacBooks do not support eGPUs — macOS dropped third-party GPU drivers when Intel Macs were retired',
          'Apple Silicon uses unified memory, which is the GPU memory; there is no PCIe path to attach a discrete GPU',
          'For more LLM headroom on a Mac, buy a MacBook Pro or Mac Studio with more unified memory instead',
          'eGPUs do still work on Linux laptops with Thunderbolt 4 or OCuLink — only relevant for non-Apple hardware',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Skip the eGPU — Buy More Unified Memory',
        content: [
          '<strong>The best eGPU for Ollama on a MacBook is no eGPU. Apple Silicon does not support them, and no workaround exists.</strong> The path to faster local LLM inference on a Mac is more unified memory, not an external GPU.',
          'On Apple Silicon, the GPU shares the same physical RAM as the CPU. There is no separate VRAM pool to expand, and macOS does not expose PCIe device tunneling over Thunderbolt the way Linux does. Apple dropped third-party eGPU drivers when Intel Macs were discontinued — there is no Metal driver for NVIDIA, AMD, or any external GPU.',
          'If you want more local LLM headroom on a Mac, the upgrade path is a MacBook Pro or Mac Studio with more unified memory (32 GB, 64 GB, 96 GB). If GPU expandability is essential, the alternative is a Linux laptop with Thunderbolt 4 or an OCuLink-equipped laptop paired with a desktop GPU in an enclosure — those still work, just not on Apple Silicon.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=MacBook+Pro+M4+32GB',
            productName: 'MacBook Pro M-series 32GB+',
            productCategory: 'laptop',
            label: 'Check MacBook Pro 32GB+ on Amazon (eGPU alternative)',
          },
          {
            url: 'https://www.amazon.com/s?k=Mac+Studio+M+series',
            productName: 'Mac Studio M-series',
            productCategory: 'desktop',
            label: 'Check Mac Studio price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Why eGPUs Do Not Work on Apple Silicon',
        content: [
          '<strong>The blocker is architectural, not commercial — no enclosure, no driver, and no software stack solves it.</strong>',
        ],
        columns: ['Constraint', 'Apple Silicon MacBook', 'Linux laptop with TB4/OCuLink'],
        rows: [
          {
            'Constraint': 'GPU driver for external NVIDIA/AMD',
            'Apple Silicon MacBook': 'Not available on macOS',
            'Linux laptop with TB4/OCuLink': 'Available (nvidia, amdgpu)',
          },
          {
            'Constraint': 'PCIe tunneling over Thunderbolt',
            'Apple Silicon MacBook': 'Not exposed by macOS',
            'Linux laptop with TB4/OCuLink': 'Supported',
          },
          {
            'Constraint': 'Memory architecture',
            'Apple Silicon MacBook': 'Unified memory only',
            'Linux laptop with TB4/OCuLink': 'Discrete VRAM on eGPU',
          },
          {
            'Constraint': 'Ollama eGPU acceleration',
            'Apple Silicon MacBook': 'No path — does not work',
            'Linux laptop with TB4/OCuLink': 'Works with CUDA or ROCm',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About eGPUs and MacBooks',
        faqs: [
          {
            q: 'Why does my MacBook not support an eGPU?',
            a: 'Apple Silicon MacBooks use unified memory and do not expose PCIe tunneling over Thunderbolt. Apple also dropped third-party eGPU drivers when Intel Macs were retired. There is no software path to make an external NVIDIA or AMD GPU work on macOS today.',
          },
          {
            q: 'Did older Intel MacBooks support eGPUs?',
            a: 'Yes, Intel MacBooks supported AMD eGPUs via Thunderbolt 3. That support ended with the Apple Silicon transition. New Macs and Ollama on Apple Silicon do not have an eGPU path.',
          },
          {
            q: 'What is the fastest way to speed up Ollama on a MacBook?',
            a: 'Buy more unified memory. A MacBook Pro with 32 GB or 64 GB of unified memory runs larger models locally with full Metal GPU acceleration. There is no external accelerator option.',
          },
          {
            q: 'Do eGPUs work for Ollama on Linux laptops?',
            a: 'Yes. A Linux laptop with Thunderbolt 4 or OCuLink can attach a desktop NVIDIA or AMD GPU and run Ollama via CUDA or ROCm. Performance is limited by the Thunderbolt 4 bandwidth (40 Gbps), but it works.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Is the Mac Mini M4 Good for Local LLMs?](/prompt-bites/mac-mini-m4-local-llm) — the desktop counterpart with the same architecture',
          '[Best Budget AI Laptop Under $1,000](/prompt-bites/best-budget-ai-laptop-under-1000) — non-Apple alternatives at the entry tier',
          '[Best Mini PC for Local LLM](/prompt-bites/best-mini-pc-for-local-llm) — desktop mini PCs vs MacBook unified memory',
        ],
      },
    },
  },
}
