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
          'A 7B model at Q4 needs 5–6 GB of VRAM — budget 6 GB to include context window overhead',
          'Quick rule: parameter count in billions × 0.7 = approximate GB needed at Q4',
          'Extending the context window to 16K tokens adds ~4 GB on top of the model weight',
        ],
      },
      body1: {
        title: 'The Quick Rule for Any Model Size',
        content: [
          'As of May 2026, a 7B model at Q4 quantization needs 5–6 GB of VRAM. <strong>The rule of thumb: multiply the parameter count in billions by 0.7 to get approximate GB at Q4. A 13B model needs ~9 GB. A 3B model needs ~2 GB.</strong>',
          'Actual VRAM also includes 0.5–1 GB of KV-cache overhead at a 2048-token context. The table below shows model weight only — add that overhead to get your total VRAM budget.',
        ],
        columns: ['Model Size', 'Q4 VRAM', 'Q5 VRAM'],
        rows: [
          { 'Model Size': '3B', 'Q4 VRAM': '~2.0 GB', 'Q5 VRAM': '~2.5 GB' },
          { 'Model Size': '7B', 'Q4 VRAM': '~4.8 GB', 'Q5 VRAM': '~5.8 GB' },
          { 'Model Size': '8B', 'Q4 VRAM': '~5.5 GB', 'Q5 VRAM': '~6.5 GB' },
          { 'Model Size': '13B', 'Q4 VRAM': '~8.5 GB', 'Q5 VRAM': '~10.0 GB' },
          { 'Model Size': '14B', 'Q4 VRAM': '~9.5 GB', 'Q5 VRAM': '~11.0 GB' },
        ],
      },
      body2: {
        title: 'How Context Window Size Changes VRAM',
        content: [
          'The context window is memory that stores the conversation history. A 7B model uses roughly 0.5 GB of KV-cache at 2048 tokens, 1 GB at 4096 tokens, and 4 GB at 16,384 tokens.',
          'For most tasks, <code>--num-ctx 4096</code> is the right default: long enough for multi-turn chat and short documents, without eating into VRAM headroom. Only increase context for specific tasks that need it (long documents, large codebases).',
          'For the full VRAM breakdown including hardware recommendations, see the <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">complete VRAM guide for local LLMs</a>.',
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
            q: 'What 7B models are available on Ollama?',
            a: 'Mistral 7B, Qwen 2.5 7B, and Gemma 2 9B (technically 9B but in the same tier) are the most popular. For much larger models, see <a href="/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">how much VRAM a 70B model needs</a>.',
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
