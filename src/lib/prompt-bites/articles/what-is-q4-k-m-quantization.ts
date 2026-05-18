import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'What Is Q4_K_M Quantization?',
    seoTitle: 'What Is Q4_K_M Quantization? | Prompt Bites | PromptQuorum',
    metaDescription: 'Q4_K_M means 4-bit k-quant at medium quality. Better than Q4_0, smaller than Q8_0. Use it as your default. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running local LLMs for the first time',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['q4-k-m-vs-q8-0', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'What is Q4_K_M quantization?',
        answer: 'Q4_K_M means 4-bit quantization using k-quant (K) compression at medium (M) quality. It is the best default for most models: better quality than Q4_0, smaller than Q8_0.',
        bullets: [
          'Q = quantized, 4 = 4-bit, K = k-quant, M = medium',
          'Better quality than Q4_0 at the same file size',
          'Use Q4_K_M as your default quantization',
        ],
        updatedDate: '2026-05',
      },
      de: { question: '[DE translation pending]', answer: '[DE translation pending]', bullets: [], updatedDate: '2026-05' },
      fr: { question: '[FR translation pending]', answer: '[FR translation pending]', bullets: [], updatedDate: '2026-05' },
      ja: { question: '[JA translation pending]', answer: '[JA translation pending]', bullets: [], updatedDate: '2026-05' },
      zh: { question: '[ZH translation pending]', answer: '[ZH translation pending]', bullets: [], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Q4_K_M = 4-bit quantization with k-quant compression at medium quality — better than Q4_0 at the same file size',
          'A 7B model at Q4_K_M fits in ~4.1 GB on disk and needs ~5.5 GB VRAM to run',
          'Use Q4_K_M as your default — it delivers the best quality-per-gigabyte for most VRAM budgets',
        ],
      },
      body1: {
        title: 'What Each Letter in Q4_K_M Means',
        content: [
          'As of May 2026, Q4_K_M is the recommended default quantization for local LLMs. <strong>Q = quantized (reduced precision), 4 = 4 bits per weight, K = k-quant compression method, M = medium quality tier.</strong>',
          'The "K" is the key differentiator. K-quant compression applies non-uniform bit allocation — critical weights get more bits, less important ones get fewer. This recovers 5–8% quality compared to the older Q4_0 format at the same file size.',
          'The "M" is the quality setting within k-quant. Q4_K_S (small) is slightly smaller with lower quality. Q4_K_M (medium) is the best balance. Q4_K_L (large) is marginally better but rarely worth the extra size.',
        ],
      },
      body2: {
        title: 'How Q4_K_M Compares to Other Quantizations',
        content: [
          'The table below shows the tradeoffs for a 7B model. Quality is relative to the full-precision Q8_0 baseline. Unless you have 12+ GB VRAM, Q4_K_M gives the best quality-per-gigabyte.',
          'For a direct comparison of Q4_K_M vs Q8_0, see the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 decision guide</a>. For the full quantization reference, see the <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels comparison</a>.',
        ],
        columns: ['Format', 'File Size (7B)', 'Quality vs Q8_0'],
        rows: [
          { 'Format': 'Q4_0', 'File Size (7B)': '3.8 GB', 'Quality vs Q8_0': 'Baseline (~87%)' },
          { 'Format': 'Q4_K_M', 'File Size (7B)': '4.1 GB', 'Quality vs Q8_0': '~92% (+5%)' },
          { 'Format': 'Q5_K_M', 'File Size (7B)': '5.0 GB', 'Quality vs Q8_0': '~95% (+3%)' },
          { 'Format': 'Q8_0', 'File Size (7B)': '7.7 GB', 'Quality vs Q8_0': '100% (reference)' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Quantization',
        faqs: [
          {
            q: 'Is Q4_K_M the same as Q4_0?',
            a: 'No. Q4_K_M uses k-quant compression which recovers 5–8% quality over Q4_0 at the same bit depth. Always prefer Q4_K_M over Q4_0. See the <a href="/prompt-bites/q4-k-m-vs-q8-0" class="text-primary hover:underline">Q4_K_M vs Q8_0 guide</a> for when to go higher.',
          },
          {
            q: 'Which quantization should I use for 8 GB VRAM?',
            a: 'Q4_K_M for 7B models (5.5 GB VRAM). If you want better quality and have headroom, Q5_K_M uses 6.5 GB and adds ~3% quality. Both fit comfortably in 8 GB.',
          },
          {
            q: "What does the 'M' in Q4_K_M stand for?",
            a: "Medium — it refers to the quality tier within k-quant compression. Q4_K_S is the small (lower quality) variant, Q4_K_M is medium (recommended), and Q4_K_L is large (marginal gain over M).",
          },
          {
            q: 'Does Q4_K_M work with Ollama?',
            a: 'Yes. Ollama downloads Q4_K_M automatically for most models when you run <code>ollama pull modelname</code>. It is the default quantization for the majority of models in the Ollama library.',
          },
        ],
      },
    },
  },
  de: { theme: 'Quantization & VRAM', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Quantization & VRAM', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Quantization & VRAM', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Quantization & VRAM', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
