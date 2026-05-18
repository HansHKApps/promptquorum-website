import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Ollama Models for RTX 3060 12 GB?',
    seoTitle: 'Best Ollama Models for RTX 3060 12 GB? | Prompt Bites | PromptQuorum',
    metaDescription: 'RTX 3060 12 GB runs Llama 3 8B Q5_K_M for chat and Qwen 2.5 Coder 14B Q4 for code at 20–30 tok/s. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 2.5 Coder 14B', 'Mistral 7B'],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers running Ollama on an RTX 3060',
    parentArticle: '/local-llms/best-gpus-for-local-llms',
    siblingBites: ['best-ollama-models-4gb-vram', 'best-local-llm-6gb-vram'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models for RTX 3060 12 GB?',
        answer: 'With 12 GB VRAM, the best general model is Llama 3 8B at Q5_K_M. For coding, use Qwen 2.5 Coder 14B at Q4_K_M. Both run at 20–30 tokens per second.',
        bullets: [
          'Llama 3 8B Q5_K_M: best general purpose on RTX 3060',
          'Qwen 2.5 Coder 14B Q4_K_M: best for coding',
          'Mistral 7B Q6_K: fast alternative for chat',
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
          'Best general: Llama 3 8B at Q5_K_M — 7 GB VRAM, ~25 tok/s, excellent chat and coding quality',
          'Best for coding: Qwen 2.5 Coder 14B at Q4_K_M — 10 GB VRAM, top HumanEval score in the 14B class',
          'RTX 3060 12 GB is the only consumer GPU under $400 with enough VRAM to run 14B models at Q4',
        ],
      },
      body1: {
        title: 'Top 5 Ollama Models for RTX 3060 12 GB',
        content: [
          'As of May 2026, the RTX 3060 12 GB is the best-value GPU for local LLMs. Its 12 GB VRAM matches cards costing 2–3× more, enabling 14B models at Q4. <strong>Llama 3 8B at Q5_K_M is the top general pick. Qwen 2.5 Coder 14B at Q4_K_M leads for coding.</strong>',
          'All five models below run with Ollama out of the box. Speed figures are at default 2048-token context on a desktop PC with no CPU offload.',
        ],
        columns: ['Model', 'VRAM Used', 'Speed'],
        rows: [
          { 'Model': 'Llama 3 8B Q5_K_M', 'VRAM Used': '7.0 GB', 'Speed': '~25 tok/s' },
          { 'Model': 'Qwen 2.5 Coder 14B Q4_K_M', 'VRAM Used': '10.0 GB', 'Speed': '~20 tok/s' },
          { 'Model': 'Mistral 7B Q6_K', 'VRAM Used': '6.5 GB', 'Speed': '~27 tok/s' },
          { 'Model': 'Phi-4 Q5_K_M', 'VRAM Used': '6.2 GB', 'Speed': '~28 tok/s' },
          { 'Model': 'Qwen 14B Q4_K_M', 'VRAM Used': '10.0 GB', 'Speed': '~18 tok/s' },
        ],
      },
      body2: {
        title: 'How to Get the Best Performance on RTX 3060',
        content: [
          'For the general-use pick, run Llama 3 8B at Q5_K_M with a 4096-token context window. This uses ~8 GB VRAM total and leaves 4 GB of headroom — enough to avoid VRAM overflow when switching between models.',
          'For coding, Qwen 2.5 Coder 14B at Q4_K_M is the clear choice: it outperforms Llama 3 8B on HumanEval, fits in 10 GB VRAM, and handles Python, TypeScript, and Go without fine-tuning.',
          'Leave at least 1.5–2 GB of VRAM free at all times. Loading two models back-to-back without unloading the first triggers VRAM overflow and forces slow CPU offload. For the full GPU benchmark context, see the <a href="/local-llms/best-gpus-for-local-llms" class="text-primary hover:underline">best GPUs for local LLMs</a>.',
        ],
        codeBlock: 'ollama run llama3:8b-instruct-q5_K_M',
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About RTX 3060 Models',
        faqs: [
          {
            q: 'Can the RTX 3060 run a 70B model?',
            a: 'No. A 70B model at Q4_K_M needs approximately 40 GB of VRAM. The RTX 3060 12 GB maxes out at ~14B models at Q4. See <a href="/prompt-bites/vram-for-70b-model" class="text-primary hover:underline">how much VRAM a 70B model needs</a> for options.',
          },
          {
            q: 'Is RTX 3060 12 GB good for local LLMs?',
            a: 'Yes — it is the best value at this VRAM tier. The 12 GB capacity (shared with the more expensive RTX 4060 Ti 16 GB and RTX 3060 Ti) enables 14B models at Q4, which 8 GB cards cannot run. Street price is typically $280–$350 used.',
          },
          {
            q: 'What quantization should I use on RTX 3060 12 GB?',
            a: 'Q5_K_M for 7–8B models (best quality within 12 GB budget). Q4_K_M for 13–14B models (required to fit). See <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a> for the quality trade-off.',
          },
          {
            q: 'Does Ollama automatically use the RTX 3060 GPU?',
            a: 'Yes. Ollama detects NVIDIA GPUs via CUDA automatically on Windows and Linux. No manual configuration is needed. Run <code>ollama run modelname</code> and it loads entirely to GPU if VRAM is sufficient.',
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
