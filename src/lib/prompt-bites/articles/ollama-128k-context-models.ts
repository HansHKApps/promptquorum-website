import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Which Ollama Models Support 128K Context?',
    seoTitle: 'Ollama 128K Context Models? | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3.1 8B and Qwen 2.5 14B support 128K+ context on Ollama. Qwen reaches 1M tokens. Full context dramatically increases VRAM. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3.1 8B', 'Qwen 2.5 14B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers needing long context windows for local LLMs',
    parentArticle: '/local-llms/long-context-local-llms',
    siblingBites: ['which-ollama-models-support-vision', 'can-you-run-qwen3-on-ollama'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support 128K context?',
        answer: 'Llama 3.1 8B supports 128K context on Ollama. Qwen 2.5 14B reaches 1M tokens. Note: running full context dramatically increases VRAM — a 128K window needs 3–4× more VRAM than the default 4K window.',
        bullets: [
          'Llama 3.1 8B: 128K context, ~16 GB VRAM at full context',
          'Qwen 2.5 14B: up to 1M tokens, 24+ GB VRAM at full context',
          'Set --num-ctx 4096 for normal use to save VRAM',
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
          'Most 7B Ollama models advertise 128K context but degrade in quality above 32K tokens',
          'Llama 3.1 8B and Qwen 2.5 14B are the two models that deliver reliable quality at full 128K',
          'A 128K context window can nearly triple VRAM usage — a 7B Q4 model needs ~15 GB at 128K vs ~5.5 GB at default',
          'Set <code>--num-ctx 4096</code> for everyday tasks; only expand context when you need it',
        ],
      },
      body1: {
        title: 'Which Models Actually Reach 128K',
        content: [
          '<strong>As of May 2026, most Ollama models advertise 128K context but fewer deliver useful output quality at that length.</strong> The problem is the "lost in the middle" effect: models trained on typical document lengths struggle to attend to information placed deep in a long context.',
          'Two models reliably maintain quality at full 128K context on Ollama: <strong>Llama 3.1 8B</strong> (natively trained at 128K) and <strong>Qwen 2.5 14B</strong> (up to 1M tokens, though VRAM constraints make 128K the practical consumer limit). For most other 7B models, output quality degrades noticeably above 32K tokens.',
          'If your task involves documents longer than 20,000 words, start with Llama 3.1 8B. If you need the strongest long-context quality and have 12+ GB VRAM, Qwen 2.5 14B is the better choice.',
        ],
      },
      body2: {
        title: 'The VRAM Cost of Long Context',
        content: [
          'Expanding the context window increases VRAM usage significantly. <strong>The KV-cache, which stores attention state for all tokens in context, can add as much VRAM as the model weights themselves at 128K context.</strong>',
          'The table below shows how KV-cache VRAM scales for a 7B model at Q4_K_M. These figures assume models using grouped query attention (GQA) — models without GQA use significantly more KV-cache.',
          'To save VRAM on everyday tasks, set <code>--num-ctx 4096</code> when running Ollama. Only expand to 32K or 128K when your specific task requires it. For the full guide on long-context local LLMs including model selection and RAM splitting, see the <a href="/local-llms/long-context-local-llms" class="text-primary hover:underline">long-context local LLMs guide</a>.',
        ],
        columns: ['Context Length', 'KV-Cache (7B)', 'Total VRAM (7B Q4)'],
        rows: [
          { 'Context Length': '4K (default)', 'KV-Cache (7B)': '~0.5 GB', 'Total VRAM (7B Q4)': '~5.5 GB' },
          { 'Context Length': '16K', 'KV-Cache (7B)': '~1.5 GB', 'Total VRAM (7B Q4)': '~6.5 GB' },
          { 'Context Length': '32K', 'KV-Cache (7B)': '~3 GB', 'Total VRAM (7B Q4)': '~8 GB' },
          { 'Context Length': '128K', 'KV-Cache (7B)': '~10 GB', 'Total VRAM (7B Q4)': '~15 GB' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Long Context Models',
        faqs: [
          {
            q: 'How do I enable 128K context in Ollama?',
            a: 'Add <code>--num-ctx 131072</code> to your run command: <code>ollama run llama3.1:8b --num-ctx 131072</code>. Without this flag, Ollama defaults to 2048–4096 tokens regardless of the model\'s maximum capability.',
          },
          {
            q: 'Why does long context use so much VRAM?',
            a: 'The KV-cache stores attention state for every token in context. At 128K tokens, this cache can be as large as the model weights themselves. A 7B model at Q4 needs ~5.5 GB for weights but ~10 GB of KV-cache at 128K context.',
          },
          {
            q: 'Is 128K context useful for coding?',
            a: 'Yes, when working across large codebases. Fitting an entire repository or multiple files into context dramatically improves refactoring and cross-file reasoning tasks. For coding at 128K, Qwen 2.5 14B is the recommended model.',
          },
          {
            q: 'Which model is best for long-document analysis?',
            a: 'Qwen 2.5 14B at Q4_K_M is the top choice for long documents on Ollama — it maintains quality at full context length better than 7B alternatives. See <a href="/prompt-bites/which-ollama-models-support-vision" class="text-primary hover:underline">Ollama vision models</a> if you also need image understanding alongside long documents.',
          },
        ],
      },
    },
  },
  de: { theme: 'Ollama', title: '[DE translation pending]', seoTitle: '[DE translation pending]', metaDescription: '[DE translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  fr: { theme: 'Ollama', title: '[FR translation pending]', seoTitle: '[FR translation pending]', metaDescription: '[FR translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  ja: { theme: 'Ollama', title: '[JA translation pending]', seoTitle: '[JA translation pending]', metaDescription: '[JA translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
  zh: { theme: 'Ollama', title: '[ZH translation pending]', seoTitle: '[ZH translation pending]', metaDescription: '[ZH translation pending]', publishDate: '2026-05-18', freshness_tier: 'semi_annual', next_refresh_due: '2026-11-18', sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } } },
}
