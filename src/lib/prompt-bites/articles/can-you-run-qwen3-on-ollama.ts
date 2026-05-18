import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Can You Run Qwen 3 on Ollama?',
    seoTitle: 'Can You Run Qwen 3 on Ollama? | Prompt Bites | PromptQuorum',
    metaDescription: 'Yes — Ollama supports all Qwen 3 sizes from 0.6B to 72B. Run with: ollama run qwen3:8b. The 8B model needs ~6 GB VRAM. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Qwen 3 0.6B', 'Qwen 3 8B', 'Qwen 3 72B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers wanting to run Qwen 3 models locally',
    parentArticle: '/local-llms/run-qwen-locally-guide-2026',
    siblingBites: ['which-ollama-models-support-vision', 'ollama-128k-context-models'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Can you run Qwen 3 on Ollama?',
        answer: 'Yes — Ollama supports all Qwen 3 model sizes from 0.6B to 72B. Run any size with ollama run qwen3:8b. The 8B model needs ~6 GB VRAM at Q4.',
        bullets: [
          'ollama run qwen3:0.6b — fits in 1 GB VRAM',
          'ollama run qwen3:8b — needs ~6 GB VRAM',
          'ollama run qwen3:72b — needs ~40 GB VRAM',
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
          'Ollama supports all Qwen 3 sizes: 0.6B, 1.5B, 3B, 7B, 14B, 32B, and 72B',
          'Pull any size with <code>ollama run qwen3:8b</code> — replace the tag with your target size',
          'The 7B model needs ~6 GB VRAM at Q4 and runs at ~20 tok/s on a mid-range GPU',
          'Qwen 3 supports tool calling natively via the standard Ollama API — no custom Modelfile required',
        ],
      },
      body1: {
        title: 'Yes — Here\'s What\'s Available',
        content: [
          '<strong>As of May 2026, Ollama supports all major Qwen 3 model sizes from 0.6B to 72B.</strong> Pull any size with a single command: <code>ollama run qwen3:8b</code>. Replace <code>8b</code> with <code>0.6b</code>, <code>1.5b</code>, <code>3b</code>, <code>14b</code>, <code>32b</code>, or <code>72b</code> for other sizes.',
          'Each size is available in multiple quantizations. Q4_K_M is the default and recommended starting point — it delivers the best quality-to-file-size ratio. Q8_0 is available for 7B and 14B if you have the VRAM headroom.',
          'Tool calling is supported natively on all Qwen 3 sizes via the standard Ollama API. No custom Modelfile or special prompt template is required.',
        ],
        codeBlock: 'ollama run qwen3:8b',
      },
      body2: {
        title: 'Which Qwen 3 Size to Pick',
        content: [
          'The right Qwen 3 size depends entirely on available VRAM. <strong>For most users on a mid-range GPU (6–8 GB VRAM), the 7B model at Q4_K_M is the practical choice — it needs ~6 GB and runs at ~20 tok/s.</strong>',
          'The 14B model at Q4 is the recommended coding tier: it outperforms the 7B on code generation and fits comfortably in 10–12 GB VRAM. For a full comparison of Qwen 3 coding performance versus other local models, see the <a href="/local-llms/run-qwen-locally-guide-2026" class="text-primary hover:underline">guide to running Qwen locally in 2026</a>.',
        ],
        columns: ['VRAM', 'Qwen 3 Size', 'Best For'],
        rows: [
          { 'VRAM': '< 4 GB', 'Qwen 3 Size': '0.6B / 1.5B', 'Best For': 'Edge devices, testing, CPU-only' },
          { 'VRAM': '4–6 GB', 'Qwen 3 Size': '3B', 'Best For': 'Budget GPU or low-RAM CPU' },
          { 'VRAM': '6–12 GB', 'Qwen 3 Size': '7B / 14B', 'Best For': 'General use and coding' },
          { 'VRAM': '12–24 GB', 'Qwen 3 Size': '14B / 32B', 'Best For': 'High-quality coding and reasoning' },
          { 'VRAM': '40+ GB', 'Qwen 3 Size': '72B', 'Best For': 'Near-frontier local quality' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Qwen 3 on Ollama',
        faqs: [
          {
            q: 'How do I install Qwen 3 on Ollama?',
            a: 'Run <code>ollama run qwen3:8b</code> in a terminal. Ollama downloads the model automatically on first run. Replace <code>8b</code> with your target size: 0.6b, 1.5b, 3b, 14b, 32b, or 72b.',
          },
          {
            q: 'Is Qwen 3 better than Llama 3 for coding?',
            a: 'For coding: yes, Qwen 3 14B outperforms Llama 3 8B on HumanEval benchmarks. For general conversation at the 8B tier: Llama 3 8B remains competitive. For the current top Ollama picks across all tasks, see <a href="/prompt-bites/best-ollama-models-right-now" class="text-primary hover:underline">the best Ollama models right now</a>.',
          },
          {
            q: 'Does Qwen 3 support tool calling on Ollama?',
            a: 'Yes. Qwen 3 supports function and tool calling natively via the standard Ollama API. No custom Modelfile or special configuration is required — it works with any client that supports the Ollama tool-use format.',
          },
          {
            q: 'Can I run Qwen 3 72B on consumer hardware?',
            a: 'Technically yes, but it requires ~40 GB of VRAM at Q4 — meaning a dual-GPU setup (two RTX 3090s) or an Apple M-series Mac with 64+ GB unified memory. Most consumer setups max out at the 32B tier.',
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
