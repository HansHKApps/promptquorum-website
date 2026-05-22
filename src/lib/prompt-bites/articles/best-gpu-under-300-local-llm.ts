import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Hardware-Specific',
    title: 'Best GPU Under $300 for Local LLMs in 2026?',
    seoTitle: 'Best GPU Under $300 for Local LLM 2026 | Prompt Bites',
    metaDescription: 'Best GPU under $300 for local LLMs: used RTX 3060 12 GB ($150-250) wins on CUDA support. RX 6700 XT ($130-200) is cheaper. May 2026 snapshot.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB', 'RX 6700 XT'],
    educationalLevel: 'Intermediate',
    audience: 'Budget buyers choosing a first GPU for local LLM inference',
    affiliateDisclosure: true,
    parentArticle: '/power-local-llm/best-gpu-buying-guide-local-llm-2026',
    siblingBites: ['best-gpu-under-600-local-llm', 'best-ollama-models-rtx-3060-12gb'],
    is_living_page: false,
    leadAnswerBlock:
      'The best GPU under $300 for local LLMs is a used NVIDIA RTX 3060 12 GB ($150-250 in May 2026). Its 12 GB of VRAM runs every 7B model and most 13B models at Q4, and NVIDIA CUDA works out of the box with Ollama. The AMD RX 6700 XT ($130-200 used) is cheaper but needs ROCm setup.',
    toc: [
      { label: 'Best Pick: Used RTX 3060 12 GB', anchor: '#best-pick' },
      { label: 'RTX 3060 vs RX 6700 XT', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    intro:
      'Under $300, two used cards dominate local LLM inference: the NVIDIA RTX 3060 12 GB and the AMD RX 6700 XT. Both carry 12 GB of VRAM — enough for 7B and most 13B models at Q4 quantization. The difference is software friction, not capacity.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: used NVIDIA RTX 3060 12 GB at $150-250 (May 2026) — CUDA works instantly with Ollama and llama.cpp',
          'Cheapest pick: used AMD RX 6700 XT at $130-200 — 12 GB VRAM, but ROCm setup adds 3-5 hours of work',
          'Both cards run every 7B model and most 13B models at Q4 quantization; neither fits a 70B model',
          'Buy the RTX 3060 in its 12 GB version — the 6 GB variant only runs 3B models and is not worth it',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Used NVIDIA RTX 3060 12 GB',
        content: [
          '<strong>The used NVIDIA RTX 3060 12 GB is the best GPU under $300 for local LLMs because 12 GB of VRAM plus zero-setup CUDA support gives you a working LLM box in minutes.</strong> At $150-250 in the May 2026 used market, it runs Mistral 7B, Llama 3 8B, and Qwen3 8B at 15-20 tokens per second, and most 13B models at Q4.',
          'The RTX 3060 wins on software. Ollama and llama.cpp detect NVIDIA GPUs via CUDA automatically on Windows and Linux — no driver hunting, no ROCm. The AMD RX 6700 XT ($130-200 used) saves $30-80 and matches the 12 GB capacity, but ROCm setup on Linux typically costs 3-5 hours and is unsupported on Windows for fast inference.',
          'Choose the RX 6700 XT only if budget is the single deciding factor and you are comfortable on Linux. For everyone else, the RTX 3060 12 GB is the safer first GPU. Avoid the 6 GB RTX 3060 variant — it looks identical in listings but only fits 3B models.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Check RTX 3060 12GB price on Amazon',
          },
          {
            url: 'https://www.newegg.com/p/pl?d=RTX+3060+12GB',
            productName: 'NVIDIA RTX 3060 12GB',
            productCategory: 'gpu',
            priceRange: '150-250',
            label: 'Check RTX 3060 12GB price on Newegg',
          },
          {
            url: 'https://www.amazon.com/s?k=RX+6700+XT+12GB',
            productName: 'AMD RX 6700 XT 12GB',
            productCategory: 'gpu',
            priceRange: '130-200',
            label: 'Check RX 6700 XT price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'RTX 3060 12 GB vs RX 6700 XT for Local LLMs',
        content: [
          '<strong>Both cards carry 12 GB of VRAM, so model capacity is identical — the decision is CUDA versus ROCm.</strong> Prices below are a May 2026 US used-market snapshot; the 2026 memory shortage keeps GPU prices volatile, so re-check before buying.',
        ],
        columns: ['GPU', 'VRAM', 'Price (May 2026)', 'Setup', 'Best for'],
        rows: [
          {
            'GPU': 'RTX 3060 12 GB',
            'VRAM': '12 GB',
            'Price (May 2026)': '$150-250 used',
            'Setup': 'CUDA, instant',
            'Best for': 'Best pick — no setup friction',
          },
          {
            'GPU': 'RX 6700 XT',
            'VRAM': '12 GB',
            'Price (May 2026)': '$130-200 used',
            'Setup': 'ROCm, 3-5 hours',
            'Best for': 'Cheapest, accepts AMD setup',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Sub-$300 GPUs for Local LLMs',
        faqs: [
          {
            q: 'Can a $300 GPU run local LLMs well?',
            a: 'Yes. A used RTX 3060 12 GB or RX 6700 XT runs every 7B model at 15-20 tokens per second and most 13B models at Q4 quantization. Both have 12 GB of VRAM, which is enough for general chat, coding assistance, and summarization.',
          },
          {
            q: 'Why pick the RTX 3060 over the cheaper RX 6700 XT?',
            a: 'The RTX 3060 uses NVIDIA CUDA, which Ollama and llama.cpp detect automatically. The RX 6700 XT needs ROCm setup — typically 3-5 hours on Linux and unsupported on Windows for fast inference. The $30-80 you save rarely covers that time.',
          },
          {
            q: 'Should I buy the 6 GB or 12 GB RTX 3060?',
            a: 'Buy the 12 GB version. The 6 GB RTX 3060 only fits 3B models, half the parameter count of the 7B class. The two variants look identical in listings — confirm the VRAM before buying.',
          },
          {
            q: 'Can a sub-$300 GPU run a 70B model?',
            a: 'No. A 70B model at Q4 needs roughly 40 GB of VRAM. A 12 GB card maxes out around 14B models at Q4. For larger models you need a higher tier or a multi-GPU build.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best GPU Under $600 for Local LLMs](/prompt-bites/best-gpu-under-600-local-llm) — the next tier up: RTX 4060 Ti 16 GB',
          '[Best Ollama Models for RTX 3060 12 GB](/prompt-bites/best-ollama-models-rtx-3060-12gb) — which models to pull once you have the card',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — the full eight-GPU comparison across all budget tiers',
        ],
      },
    },
  },
}
