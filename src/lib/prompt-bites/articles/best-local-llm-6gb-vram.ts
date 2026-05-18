import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Best Local LLM for 6 GB VRAM?',
    seoTitle: 'Best Local LLM for 6 GB VRAM? | Prompt Bites | PromptQuorum',
    metaDescription: 'Llama 3 8B Q4_K_M (5.5 GB) is the top pick for 6 GB VRAM. Phi-4 Q4 and Mistral 7B Q4_K_S are solid alternatives. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 8B', 'Phi-4', 'Mistral 7B'],
    current_hardware_mentioned: ['RTX 3050', 'RTX 4050'],
    educationalLevel: 'Intermediate',
    audience: 'Developers with 6 GB VRAM GPUs or 16 GB MacBooks',
    parentArticle: '/local-llms/how-much-vram-local-llm',
    siblingBites: ['best-ollama-models-4gb-vram', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Best local LLM for 6 GB VRAM?',
        answer: 'With 6 GB VRAM, Llama 3 8B Q4_K_M is the top pick at ~5.5 GB. Phi-4 Q4_K_M and Mistral 7B Q4_K_S are solid alternatives.',
        bullets: [
          'Llama 3 8B Q4_K_M: best overall for 6 GB (5.5 GB VRAM)',
          'Phi-4 Q4_K_M: best for instruction following',
          'Mistral 7B Q4_K_S: fastest at 6 GB',
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
          'Llama 3 8B Q4_K_M is the top pick for 6 GB VRAM: 5.5 GB, ~20 tok/s, excellent for chat and coding',
          'Phi-4 Q4_K_M (5.0 GB) leads on instruction following and reasoning tasks',
          '6 GB VRAM covers RTX 3050/4050 on Windows and any MacBook with 16 GB unified memory',
        ],
      },
      body1: {
        title: 'Top 3 Models for 6 GB VRAM',
        content: [
          'As of May 2026, 6 GB VRAM unlocks the best-value tier for local LLMs. <strong>Llama 3 8B at Q4_K_M (5.5 GB) is the top pick for general use. Phi-4 at Q4_K_M (5.0 GB) leads on instruction following. Mistral 7B at Q4_K_S (4.5 GB) is the fastest option.</strong>',
          'All three models run with Ollama out of the box. Speed figures below assume a 2048-token context window. Extending to 4096 tokens adds ~1 GB — still within 6 GB for Phi-4 and Mistral.',
        ],
        columns: ['Model', 'VRAM', 'Best For'],
        rows: [
          { 'Model': 'Llama 3 8B Q4_K_M', 'VRAM': '5.5 GB', 'Best For': 'General chat, coding' },
          { 'Model': 'Phi-4 Q4_K_M', 'VRAM': '5.0 GB', 'Best For': 'Instructions, reasoning' },
          { 'Model': 'Mistral 7B Q4_K_S', 'VRAM': '4.5 GB', 'Best For': 'Speed-first tasks' },
        ],
      },
      body2: {
        title: '6 GB VRAM on Windows vs MacBook',
        content: [
          'On Windows, the RTX 3050 6 GB and RTX 4050 6 GB are the two main GPUs at this tier. Both run Ollama via CUDA with nearly identical performance — the newer RTX 4050 is about 10% faster per watt but not meaningfully faster in practice.',
          'On macOS, any MacBook with 16 GB unified memory has approximately 6 GB available for the GPU workload. Unified memory eliminates the PCIe bandwidth bottleneck that limits discrete GPU cards, so macOS performance is often equal to or better than a discrete RTX 3050.',
          'Upgrading from 6 GB to 8 GB unlocks Q5_K_M quantization on 7–8B models (+3% quality) and faster context windows. For 12 GB options and 14B models, see <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>. For the full VRAM reference, see <a href="/local-llms/how-much-vram-local-llm" class="text-primary hover:underline">how much VRAM a local LLM needs</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 6 GB VRAM Models',
        faqs: [
          {
            q: 'Is 6 GB VRAM enough for daily LLM use?',
            a: 'Yes. Llama 3 8B Q4_K_M at ~20 tok/s handles multi-turn chat, code completion, document summarization, and Q&A. Speed is fast enough for interactive use.',
          },
          {
            q: 'Does Llama 3 8B fit in 6 GB VRAM?',
            a: 'Yes at Q4_K_M — the model uses 5.5 GB. A 4096-token context window adds ~1 GB, totaling ~6.5 GB. For strict 6 GB headroom, use a 2048-token context (<code>--num-ctx 2048</code>) or choose Phi-4 Q4_K_M instead.',
          },
          {
            q: 'Can I run 13B or 14B models on 6 GB VRAM?',
            a: 'No. Qwen 14B at Q4_K_M needs ~10 GB VRAM. Upgrading to 12 GB is the minimum for 14B models. See <a href="/prompt-bites/best-ollama-models-rtx-3060-12gb" class="text-primary hover:underline">best Ollama models for RTX 3060 12 GB</a>.',
          },
          {
            q: 'Can I use 6 GB VRAM for image generation too?',
            a: 'Not well. Stable Diffusion XL requires 8 GB VRAM minimum. Running both LLMs and image generation on a 6 GB card means constantly switching — stick to one workload at a time or upgrade to 8 GB.',
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
