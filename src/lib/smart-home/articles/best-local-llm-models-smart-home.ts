import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Best Local LLM Models for Smart Home Control (2026)',
    seoTitle: 'Best Local LLMs for Home Assistant (2026)',
    intro:
      'The best local LLM models for smart home control are small, fast, instruction-following models with reliable function-calling — not the largest model your hardware can hold. This guide explains what actually matters for home control, gives a shortlist of suitable small models, compares them, and maps picks to hardware budgets, linking out to deeper model guides rather than re-ranking the whole field.',
    metaDescription:
      'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
    twitterDescription:
      'Best local LLM models for Home Assistant control: small, fast, function-calling models over the biggest model you can run. Picks by hardware budget.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users choosing a local model for device control',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'best local llm for home assistant',
      'best local llm smart home',
      'local llm home control model',
      'function calling local llm',
      'small local llm home automation',
    ],
    leadAnswerBlock:
      '**For smart home control, choose a small instruction model with reliable function-calling — a 3B–8B model is the sweet spot, because home control rewards low latency and structured output over raw capability.** Match the model to your hardware rather than picking the largest one available.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for smart home control?',
        answer:
          'A small instruction-following model with solid function-calling, typically in the 3B to 8B range, is the best fit for home control because it responds quickly and emits reliable device actions. Models such as Llama 3.2 3B and Qwen2.5 7B are common choices; the right pick depends on your hardware and language needs.',
        bullets: [
          'Prioritise low latency and function-calling over size',
          '3B models suit low-power hardware; 7B–8B suit a mini PC with a GPU',
          'Llama 3.2 3B and Qwen2.5 7B are common starting points',
          'Pick a model with strong support for your spoken language',
          'Larger models add little for simple device control',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matters for Home Control', anchor: 'what-matters' },
      { label: 'The Shortlist', anchor: 'shortlist' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'By Hardware Budget', anchor: 'by-budget' },
      { label: 'How to Pick', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best local LLM for smart home control is a small (3B–8B) instruction model with reliable function-calling, chosen for low latency over raw size.' },
      { type: 'plain-terms', content: 'Controlling a home does not need a giant model — it needs one that responds fast and reliably outputs structured commands the hub can execute. Small models in the 3B to 8B range do this well and run on modest hardware. The deeper model rankings live in the local-llms cluster; this guide focuses on the home-control angle.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home control rewards low latency and reliable function-calling, not maximum model size',
          'A 3B model fits low-power hardware; a 7B–8B model suits a mini PC with a GPU or NPU',
          'Llama 3.2 3B (Meta) and Qwen2.5 7B (Alibaba) are common, well-supported choices',
          'Pick a model with strong support for the language you speak to it',
          'Larger models add latency with little benefit for simple device control',
          'For deep model rankings and mechanics, link out to the local-llms cluster',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'What Matters for Home Control',
        content:
          '**Three things decide a good home-control model: latency, reliable function-calling, and size that fits your hardware.** Benchmark leaderboards matter far less here than responsiveness.',
        items: [
          '**Latency:** a voice command should feel near-instant; smaller models on capable hardware respond faster.',
          '**Function-calling:** the model must emit structured device actions reliably — this is the decisive capability.',
          '**Fit:** the model must run comfortably on the box that also hosts Home Assistant — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'The Shortlist',
        content:
          '**These small models are common, well-supported choices for home control across different hardware budgets.** Use a 3B model on light hardware and a 7B–8B model when you have a GPU or NPU.',
        items: [
          '**Llama 3.2 3B (Meta):** a 3-billion-parameter model that runs on modest hardware with good instruction-following and function-calling.',
          '**Qwen2.5 7B (Alibaba):** a strong all-round 7B model with reliable tool use and good multilingual coverage.',
          '**Qwen2.5 3B (Alibaba):** a lighter option when you want lower latency on a CPU or integrated GPU.',
          '**Phi-3.5 Mini 3.8B (Microsoft):** a compact model that punches above its size for instruction-following.',
          '**Gemma 2 2B (Google):** a very small model for the lowest-power hosts where latency is critical.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Pick by hardware and language: smaller models for CPU-only or Pi-class hardware, 7B for a GPU-equipped mini PC.** Sizes below are approximate at common 4-bit quantization.',
        columns: ['Model', 'Params', 'Approx. footprint (Q4)', 'Best for'],
        rows: [
          { 'Model': 'Gemma 2 2B', 'Params': '2B', 'Approx. footprint (Q4)': '~1.5–2 GB', 'Best for': 'Lowest-power hosts, lowest latency' },
          { 'Model': 'Llama 3.2 3B', 'Params': '3B', 'Approx. footprint (Q4)': '~2–3 GB', 'Best for': 'Balanced default on modest hardware' },
          { 'Model': 'Qwen2.5 3B', 'Params': '3B', 'Approx. footprint (Q4)': '~2–3 GB', 'Best for': 'Multilingual, low latency' },
          { 'Model': 'Phi-3.5 Mini 3.8B', 'Params': '3.8B', 'Approx. footprint (Q4)': '~2.5–3 GB', 'Best for': 'Strong instruction-following, compact' },
          { 'Model': 'Qwen2.5 7B', 'Params': '7B', 'Approx. footprint (Q4)': '~4–5 GB', 'Best for': 'Best quality with a GPU/NPU' },
        ],
        items: [
          'Footprints are approximate and depend on quantization — for VRAM and quantization depth, link out to the local-llms cluster.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Picks by Hardware Budget',
        content:
          '**Choose a 2B–3B model on a Pi or CPU-only mini PC; choose a 7B model when you have a GPU or NPU.** This keeps responses snappy at every tier.',
        items: [
          '**Raspberry Pi / low-power:** Gemma 2 2B or a 3B model, accepting slower responses.',
          '**Mini PC (CPU only):** Llama 3.2 3B or Qwen2.5 3B as a responsive default.',
          '**Mini PC with GPU/NPU:** Qwen2.5 7B for the best quality at acceptable latency — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'How to Pick',
        content:
          '**Start with a 3B model, confirm latency and reliable device actions, then move to 7B only if quality is lacking.** Test with your real commands before committing.',
        items: [
          'Install via the [Ollama integration](/smart-home/home-assistant-ollama-integration) and test your common commands.',
          'If responses are slow, drop a size or add a GPU/NPU.',
          'If actions are unreliable, prefer a model known for function-calling.',
          'For deep model rankings and mechanics, see [best local LLMs 2026](/local-llms/best-local-llms-2026) (cross-cluster) — this guide stays home-control-specific.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the smallest usable model for home control?', a: 'A 2B model such as Gemma 2 2B is usable for simple device control on low-power hardware, trading some understanding for speed. A 3B model is a better balance if your hardware allows it.' },
          { q: 'Does a home-control model need a GPU?', a: 'No for 2B–3B models, which run on CPU or an integrated GPU. A GPU or NPU mainly lets you run a 7B model at low latency for better understanding. Match the model to your hardware.' },
          { q: 'Which models support function-calling?', a: 'Modern small models including Llama 3.2 and Qwen2.5 support tool/function-calling, which is the capability that lets them emit reliable device actions. Prefer a model documented to support it for home control.' },
          { q: 'What is the best model for a Raspberry Pi?', a: 'A 2B model like Gemma 2 2B, or a small 3B model, is the practical ceiling on a Raspberry Pi, and responses will be slower than on a mini PC. For a snappy assistant, a mini PC with a GPU/NPU is the better host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — install and test your chosen model',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full architecture',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — match model size to hardware',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — cross-cluster: deep model rankings',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local LLM Models for Smart Home Control (2026)',
      description: 'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
      url: 'https://www.promptquorum.com/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Function calling' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is the smallest usable model for home control?', acceptedAnswer: { '@type': 'Answer', text: 'A 2B model such as Gemma 2 2B is usable for simple device control on low-power hardware. A 3B model is a better balance if your hardware allows it.' } },
        { '@type': 'Question', name: 'Does a home-control model need a GPU?', acceptedAnswer: { '@type': 'Answer', text: 'No for 2B–3B models, which run on CPU or integrated GPU. A GPU or NPU mainly lets you run a 7B model at low latency.' } },
        { '@type': 'Question', name: 'Which models support function-calling?', acceptedAnswer: { '@type': 'Answer', text: 'Modern small models including Llama 3.2 and Qwen2.5 support tool/function-calling, which lets them emit reliable device actions.' } },
        { '@type': 'Question', name: 'What is the best model for a Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'A 2B model like Gemma 2 2B or a small 3B model is the practical ceiling on a Pi, with slower responses. A mini PC with a GPU/NPU is a better host.' } },
      ],
    },
  },
}
