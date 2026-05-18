import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models for CPU Only?',
    seoTitle: 'Best Ollama Models for CPU Only? | Prompt Bites | PromptQuorum',
    metaDescription: 'No GPU? Phi-4 Mini Q4 is the best CPU-only Ollama model. Llama 3 8B Q4 works with 8+ GB RAM. Gemma 2B is the fastest. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Phi-4 Mini', 'Llama 3 8B', 'Gemma 2B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama without a dedicated GPU',
    parentArticle: '/local-llms/best-cpu-only-llm',
    siblingBites: ['best-ollama-models-right-now', 'ollama-128k-context-models'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for CPU only?',
        answer: 'Without a GPU, Phi-4 Mini at Q4 is the best balance of quality and speed on CPU. Llama 3 8B Q4 works with 8+ GB RAM. Gemma 2B is the fastest CPU option.',
        bullets: [
          'Phi-4 Mini Q4: best quality/speed on CPU, needs 4 GB RAM',
          'Llama 3 8B Q4: best quality, needs 8 GB RAM (slower)',
          'Gemma 2B: fastest CPU inference, 2 GB RAM',
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
          'CPU inference is 5–10× slower than GPU — expect 3–6 tok/s on a modern 8-core desktop CPU',
          'Phi-4 Mini Q4 is the best CPU-only pick: 4 GB RAM, ~5 tok/s, strong reasoning quality',
          'Gemma 2B is fastest on CPU (~6 tok/s) but has lower reasoning quality than Phi-4 Mini',
          'CPU inference is practical for batch jobs and single-query lookups; too slow for interactive chat',
        ],
      },
      body1: {
        title: 'The CPU Speed Reality',
        content: [
          '<strong>As of May 2026, CPU inference runs at 3–6 tokens per second on a modern 8-core desktop CPU — roughly 5–10× slower than a mid-range GPU.</strong> A 7B model at Q4 produces one word approximately every 200–300 milliseconds on CPU.',
          'This speed is acceptable for two use cases: overnight batch processing such as summarizing documents or classifying data, and single-query lookups where a 30-second wait is acceptable. For interactive chat or real-time code completion, CPU inference is too slow to be practical.',
          'The root constraint is memory bandwidth, not CPU clock speed. Consumer CPUs read RAM at 40–80 GB/s. A dedicated GPU reads VRAM at 400–900 GB/s. LLM inference scales directly with memory bandwidth — which is why even a mid-range GPU produces dramatically faster inference than a high-end CPU.',
        ],
      },
      body2: {
        title: 'Top 3 Models for CPU-Only Use',
        content: [
          'The right CPU-only model depends on whether you prioritize quality or speed. <strong>Phi-4 Mini Q4 is the best balance — it delivers reasoning quality close to Llama 3 8B while needing only 4 GB RAM and running noticeably faster.</strong>',
          'Gemma 2B is the only viable option when RAM is limited to 2 GB. It reaches ~6 tok/s on CPU but produces noticeably lower quality answers on multi-step reasoning tasks compared to Phi-4 Mini.',
          'For the full breakdown of CPU-only configurations including RAM requirements and OS-level optimizations, see the <a href="/local-llms/best-cpu-only-llm" class="text-primary hover:underline">best CPU-only LLM guide</a>.',
        ],
        columns: ['Model', 'RAM Required', 'CPU Speed'],
        rows: [
          { 'Model': 'Phi-4 Mini Q4', 'RAM Required': '4 GB', 'CPU Speed': '~4–5 tok/s' },
          { 'Model': 'Llama 3 8B Q4', 'RAM Required': '8 GB', 'CPU Speed': '~3 tok/s' },
          { 'Model': 'Gemma 2B', 'RAM Required': '2 GB', 'CPU Speed': '~6 tok/s' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About CPU-Only LLMs',
        faqs: [
          {
            q: 'How much RAM do I need for CPU-only Ollama?',
            a: 'Minimum 2 GB for Gemma 2B. 4 GB for Phi-4 Mini Q4. 8 GB for Llama 3 8B Q4. Add 1–2 GB on top of the model size for the OS and Ollama runtime overhead.',
          },
          {
            q: 'Why is CPU inference so much slower than GPU?',
            a: 'LLM inference is memory-bandwidth-bound. Consumer CPUs read RAM at 40–80 GB/s. A mid-range GPU reads VRAM at 400–900 GB/s. That 10× bandwidth difference translates directly into 5–10× slower token generation.',
          },
          {
            q: 'Can I use Ollama on a laptop without a dedicated GPU?',
            a: 'Yes. Ollama runs on CPU automatically when no GPU is detected. Expect 3–5 tok/s on a modern laptop CPU. See <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a> for GPU-tier recommendations if you later upgrade.',
          },
          {
            q: 'Which CPUs are fastest for local LLM inference?',
            a: 'Apple M-series chips (M3, M4) use unified memory architecture and reach 15–30 tok/s on 7B models — far exceeding x86 CPUs on CPU-only inference. Among x86 CPUs, those with higher memory bandwidth and large L3 cache perform best.',
          },
        ],
      },
    },
  },
  de: { theme: 'Ollama', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Ollama', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Ollama', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Ollama', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-06-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
