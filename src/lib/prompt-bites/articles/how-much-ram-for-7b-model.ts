import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much RAM Does a 7B Model Need?',
    seoTitle: 'How Much RAM for a 7B Model? | Prompt Bites | PromptQuorum',
    metaDescription: 'A 7B model at Q4 needs 5–6 GB of VRAM. Rule: parameters in billions × 0.7 = GB at Q4. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Mistral 7B', 'Llama 3 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers estimating hardware requirements for local LLMs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['how-much-vram-for-local-llm', 'vram-for-70b-model'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much RAM does a 7B model need?',
        answer: 'A 7B model at Q4 quantization needs 5–6 GB of VRAM or RAM. Rule of thumb: model parameters in billions × 0.7 = approximate GB needed at Q4.',
        bullets: [
          '7B Q4: 5–6 GB VRAM or unified memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Wie viel RAM braucht ein 7B-Modell?',
        answer: 'Ein 7B-Modell bei Q4-Quantisierung benötigt 5–6 GB VRAM oder RAM. Daumenregel: Modellparameter in Milliarden × 0,7 = ungefähre GB bei Q4.',
        bullets: [
          '7B Q4: 5–6 GB VRAM oder Unified Memory',
          '7B Q5: 6–7 GB VRAM',
          '7B Q8: 8–9 GB VRAM',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'De combien de RAM a besoin un modèle 7B ?',
        answer: 'Un modèle 7B en quantisation Q4 nécessite 5–6 Go de VRAM ou de RAM. Règle de calcul : paramètres en milliards × 0,7 = Go approximatifs en Q4.',
        bullets: [
          '7B Q4 : 5–6 Go de VRAM ou de mémoire unifiée',
          '7B Q5 : 6–7 Go de VRAM',
          '7B Q8 : 8–9 Go de VRAM',
        ],
        updatedDate: '2026-05',
      },
      ja: { question: '[JA translation pending]', answer: '[JA translation pending]', bullets: [], updatedDate: '2026-05' },
      zh: { question: '[ZH translation pending]', answer: '[ZH translation pending]', bullets: [], updatedDate: '2026-05' },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'A 7B model at Q4 needs 5–6 GB of VRAM — budget 6 GB to include context window overhead',
          'Quick rule: parameter count in billions × 0.7 = approximate GB needed at Q4',
          'Extending the context window to 16K tokens adds ~4 GB on top of the model weight',
        ],
      },
      body1: {
        title: 'The Quick Rule for CPU and GPU',
        content: [
          'As of May 2026, <strong>a 7B model at Q4 needs 5–6 GB of memory — either system RAM (CPU-only inference) or VRAM (GPU inference).</strong> The amount is the same; what changes is speed. CPU inference runs at ~5 tokens per second on a modern 8-core processor. GPU inference runs at 20–25 tokens per second on a card with adequate VRAM.',
          'On CPU-only, divide the GPU speed column by 5× for an 8-core processor estimate. A 7B model at Q4 runs at ~5 tok/s on CPU, ~25 on GPU. This 5× gap is why a budget GPU is worth buying for interactive use.',
        ],
        columns: ['Model Size', 'Q4 Memory', 'GPU Speed'],
        rows: [
          { 'Model Size': '3B', 'Q4 Memory': '~2 GB', 'GPU Speed': '~40 tok/s' },
          { 'Model Size': '7B', 'Q4 Memory': '~5 GB', 'GPU Speed': '~25 tok/s' },
          { 'Model Size': '8B', 'Q4 Memory': '~5.5 GB', 'GPU Speed': '~22 tok/s' },
          { 'Model Size': '13B', 'Q4 Memory': '~9 GB', 'GPU Speed': '~15 tok/s' },
        ],
      },
      body2: {
        title: 'When to Choose CPU vs GPU',
        content: [
          'Choose CPU-only when you have 16+ GB of system RAM and your tasks are batch or background (overnight document analysis, scheduled summarization). The ~5 tok/s rate is acceptable for non-interactive work and avoids GPU costs entirely.',
          'Choose GPU when you need interactive chat or coding. The 5× speed difference matters in real-time use. Even a budget RTX 3050 6 GB delivers ~22 tok/s on Llama 3 8B Q4_K_M — fast enough for chat that feels instant.',
          'For the GPU-side full VRAM breakdown by tier, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">how much VRAM a local LLM needs</a>. For the complete hardware reference, see the <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">complete VRAM guide for local LLMs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 7B Model RAM',
        faqs: [
          {
            q: 'Is 8 GB of system RAM enough to run a 7B model without a GPU?',
            a: 'Yes. Running CPU-only, a 7B model at Q4 uses ~5–6 GB of system RAM and runs at 3–6 tok/s on a modern 8-core processor. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM guide</a> for GPU-accelerated options.',
          },
          {
            q: 'How much VRAM does Llama 3 8B need exactly?',
            a: '~5.5 GB at Q4_K_M for the model weights. Add 0.5–1 GB for a 4096-token context window. Budget 6–7 GB total to avoid VRAM overflow.',
          },
          {
            q: 'What happens when a model exceeds available VRAM?',
            a: 'Ollama offloads layers to system RAM, which is 10–20× slower. The model still runs but generation speed drops significantly. To prevent this, lower the quantization or reduce context with <code>--num-ctx 2048</code>.',
          },
          {
            q: 'Is GPU inference always better than CPU?',
            a: 'Not for every use case. For batch tasks, scheduled processing, or non-interactive use, CPU at ~5 tok/s is acceptable and avoids GPU costs. For real-time chat or coding, GPU\'s 20–25 tok/s is essential.',
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
