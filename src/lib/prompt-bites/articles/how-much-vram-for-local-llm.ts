import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much VRAM Do You Need for a Local LLM?',
    seoTitle: 'How Much VRAM for a Local LLM? | Prompt Bites | PromptQuorum',
    metaDescription: '4 GB runs Phi-4 Mini. 6 GB runs Llama 3 8B Q4. 12 GB fits Qwen 14B Q4. Quick VRAM decision tree from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Phi-4 Mini', 'Llama 3 8B', 'Mistral 7B', 'Qwen 14B'],
    current_hardware_mentioned: ['RTX 3060', 'RTX 3050'],
    educationalLevel: 'Intermediate',
    audience: 'Developers and enthusiasts running local LLMs',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['how-much-ram-for-7b-model', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM do you need for a local LLM?',
        answer: '4 GB handles Phi-4 Mini and Gemma 2B. 6 GB runs Llama 3 8B at Q4. 8 GB handles Mistral 7B at Q5. 12 GB fits Qwen 14B Q4. 16+ GB is needed for 70B models at Q4.',
        bullets: [
          '4 GB: Phi-4 Mini Q4, Gemma 2 2B',
          '6 GB: Llama 3 8B Q4_K_M',
          '8–12 GB: Mistral 7B Q5, Qwen 14B Q4',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: '[DE translation pending]',
        answer: '[DE translation pending]',
        bullets: [],
        updatedDate: '2026-05',
      },
      fr: {
        question: '[FR translation pending]',
        answer: '[FR translation pending]',
        bullets: [],
        updatedDate: '2026-05',
      },
      ja: {
        question: '[JA translation pending]',
        answer: '[JA translation pending]',
        bullets: [],
        updatedDate: '2026-05',
      },
      zh: {
        question: '[ZH translation pending]',
        answer: '[ZH translation pending]',
        bullets: [],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '4 GB VRAM runs Phi-4 Mini Q4 and Gemma 2 2B comfortably',
          '6 GB is the entry point for Llama 3 8B at Q4_K_M — the most popular local model',
          '12 GB unlocks Qwen 14B Q4, the best quality-per-dollar tier',
          '70B models require 40+ GB — plan for dual RTX 3090 or Apple M-series with large unified memory',
        ],
      },
      body1: {
        title: 'VRAM Requirements by Model Size',
        content: [
          'As of May 2026, a model\'s VRAM need follows a simple formula: parameter count in billions × 0.7 = approximate GB at Q4 quantization. <strong>A 7B model needs ~4.9 GB for weights, plus 0.5–1 GB of context overhead.</strong> This is why 6 GB is the minimum for the 7–8B tier, and why 12 GB unlocks the 14B tier with breathing room.',
          'Use the table below as a quick decision reference. The "Speed" column assumes Ollama on a desktop GPU running at default context (2048 tokens).',
          '<strong>Always keep 1–2 GB of VRAM free above your model\'s stated needs.</strong> Operating systems, browser tabs, and Ollama\'s runtime consume 500 MB–1 GB even with no model loaded. A 6 GB card running a 5.5 GB model leaves only 500 MB headroom — you\'ll hit out-of-memory errors the moment you increase <code>--num-ctx</code> beyond 2048 tokens. For the 6 GB tier with safe headroom, see <a href="/prompt-bites/best-local-llm-6gb-vram" class="text-primary hover:underline">best local LLMs for 6 GB VRAM</a>.',
        ],
        columns: ['VRAM', 'Best Model at Q4_K_M', 'Speed'],
        rows: [
          { 'VRAM': '4 GB', 'Best Model at Q4_K_M': 'Phi-4 Mini Q4', 'Speed': '~25 tok/s' },
          { 'VRAM': '6 GB', 'Best Model at Q4_K_M': 'Llama 3 8B Q4_K_M', 'Speed': '~20 tok/s' },
          { 'VRAM': '8 GB', 'Best Model at Q4_K_M': 'Mistral 7B Q5_K_M', 'Speed': '~18 tok/s' },
          { 'VRAM': '12 GB', 'Best Model at Q4_K_M': 'Qwen 14B Q4_K_M', 'Speed': '~15 tok/s' },
          { 'VRAM': '16+ GB', 'Best Model at Q4_K_M': 'Qwen 32B Q4 or Llama 70B partial', 'Speed': '~8 tok/s' },
        ],
      },
      body2: {
        title: 'When Your VRAM Is Not Enough',
        content: [
          'If a model exceeds your VRAM, you have three options: lower the quantization (Q4_K_M instead of Q5), reduce the context window with <code>--num-ctx 2048</code>, or let Ollama offload layers to system RAM.',
          'CPU offload works but is slow — each layer moved to RAM adds latency. For interactive use, stay within your GPU\'s VRAM limit. Reducing context from 4096 to 2048 tokens saves approximately 2 GB on a 7B model.',
          'For a full breakdown of model sizes and the math behind VRAM estimates, see the <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">complete VRAM guide for local LLMs</a>. For the 7B tier specifically, see <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">how much RAM a 7B model needs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About VRAM',
        faqs: [
          {
            q: 'Is 8 GB VRAM enough for local LLMs?',
            a: 'Yes. 8 GB runs Llama 3 8B at Q5_K_M at around 18 tokens per second, or Mistral 7B at Q5_K_M with headroom to spare. Most day-to-day chat and coding tasks are well-covered at this tier.',
          },
          {
            q: 'Can I run a 7B model on 4 GB VRAM?',
            a: 'No. A 7B model at Q4 needs 5–6 GB of VRAM. The smallest usable quantization still exceeds 4 GB. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">how much RAM a 7B model needs</a> for the full breakdown.',
          },
          {
            q: 'Does context window size affect VRAM usage?',
            a: 'Yes. Each additional 1,000 context tokens uses approximately 250 MB of VRAM on a 7B model. The default 2048-token context uses ~0.5 GB; 16,384 tokens uses ~4 GB on top of the model weight.',
          },
          {
            q: 'What should I do if my model uses more VRAM than expected?',
            a: 'Set <code>--num-ctx 2048</code> in your Ollama command. This reduces VRAM by up to 2 GB on 7B models without changing the model file.',
          },
        ],
      },
    },
  },
  de: {
    theme: 'Quantization & VRAM',
    title: '[DE translation pending]',
    seoTitle: '[DE translation pending]',
    metaDescription: '[DE translation pending]',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } },
  },
  fr: {
    theme: 'Quantization & VRAM',
    title: '[FR translation pending]',
    seoTitle: '[FR translation pending]',
    metaDescription: '[FR translation pending]',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } },
  },
  ja: {
    theme: 'Quantization & VRAM',
    title: '[JA translation pending]',
    seoTitle: '[JA translation pending]',
    metaDescription: '[JA translation pending]',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } },
  },
  zh: {
    theme: 'Quantization & VRAM',
    title: '[ZH translation pending]',
    seoTitle: '[ZH translation pending]',
    metaDescription: '[ZH translation pending]',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    sections: { tldr: { id: 'key-takeaways', isTldr: true, items: ['TBD'] }, faq: { id: 'faq', title: 'FAQ', faqs: [] } },
  },
}
