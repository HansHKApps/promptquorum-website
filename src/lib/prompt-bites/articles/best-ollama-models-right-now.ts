import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Best Ollama Models Right Now?',
    seoTitle: 'Best Ollama Models Right Now? | Prompt Bites | PromptQuorum',
    metaDescription: 'Best general Ollama model: Llama 3 8B Q4. Best coding: Qwen 2.5 Coder 14B Q4. Best compact: Phi-4 Mini Q4. Updated monthly. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-06-18',
    current_models_mentioned: ['Llama 3 8B', 'Qwen 2.5 Coder 14B', 'Phi-4 Mini'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing Ollama models for everyday use',
    parentArticle: '/local-llms/top-open-source-models-ollama',
    siblingBites: ['ollama-latest-version', 'best-ollama-models-cpu-only'],
    is_living_page: true,
    quickAnswerTop: {
      en: {
        question: 'Best Ollama models right now?',
        answer: 'As of May 2026, the top general Ollama model is Llama 3 8B. For coding, Qwen 2.5 Coder 14B leads. For compact use, Phi-4 Mini is excellent. This page updates monthly.',
        bullets: [
          'Best general: Llama 3 8B Q4_K_M',
          'Best coding: Qwen 2.5 Coder 14B Q4',
          'Best compact: Phi-4 Mini Q4',
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
          'Best general use: Llama 3 8B Q4_K_M — fits in 6 GB VRAM, ~20 tok/s, excellent instruction following',
          'Best coding: Qwen 2.5 Coder 14B Q4_K_M — top HumanEval score in the 14B class, needs 10 GB VRAM',
          'Best compact: Phi-4 Mini Q4 — runs on 4 GB VRAM or CPU-only, strong reasoning for its size',
          'A model from 6 months ago with mature quantization often outperforms a brand-new release with limited community support',
        ],
      },
      body1: {
        title: 'The Three Tier Leaders',
        content: [
          '<strong>As of May 2026, the best Ollama model for general use is Llama 3 8B Q4_K_M. This page is updated monthly — last verified May 2026.</strong>',
          '"Best" in practice means the highest balance of output quality, inference speed, and VRAM efficiency — not raw benchmark score alone. A 7B model running at 20 tok/s is more useful for daily work than a 14B model that requires 10 GB and runs at 12 tok/s.',
          'The table below shows the current leader in each VRAM tier. All three run with Ollama out of the box via a single <code>ollama pull</code> command.',
        ],
        columns: ['Tier', 'Model', 'Why It Leads'],
        rows: [
          { 'Tier': 'Compact (≤4 GB)', 'Model': 'Phi-4 Mini Q4', 'Why It Leads': 'Best reasoning-per-GB at this tier' },
          { 'Tier': 'General (6–8 GB)', 'Model': 'Llama 3 8B Q4_K_M', 'Why It Leads': 'Top quality-per-GB in the 8B class' },
          { 'Tier': 'Coding (10–12 GB)', 'Model': 'Qwen 2.5 Coder 14B Q4', 'Why It Leads': 'Best HumanEval score at 14B tier' },
        ],
      },
      body2: {
        title: 'When Newer Isn\'t Better',
        content: [
          'A new model release does not automatically become the best Ollama pick. <strong>Quantization quality, community fine-tunes, and Ollama integration maturity take 4–8 weeks to catch up with a fresh release.</strong>',
          'Llama 3 8B and Mistral 7B remain top choices not because they are the newest, but because their Q4_K_M quantizations are well-optimized, their system prompts are well-understood, and their performance is predictable across hardware.',
          'Watch for a model to hold its top position for 6+ weeks before relying on it for production use. For a deeper look at how to evaluate models for your specific workload, see the <a href="/local-llms/top-open-source-models-ollama" class="text-primary hover:underline">top open-source models for Ollama</a>.',
          'Last verified: May 2026. If the data above looks stale, check the official Ollama GitHub releases page or model library.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Models',
        faqs: [
          {
            q: 'Should I always use the newest Ollama model?',
            a: 'Not automatically. New releases need 4–8 weeks for community quantizations, fine-tunes, and Ollama integration to mature. Check the table above for the current vetted top picks. For CPU-only setups, see <a href="/prompt-bites/best-ollama-models-cpu-only" class="text-primary hover:underline">best Ollama models for CPU-only use</a>.',
          },
          {
            q: 'How often does the "best" Ollama model change?',
            a: 'General-purpose top picks shift every 2–3 months. Coding models update more frequently as benchmark leaders change. This page is reviewed monthly.',
          },
          {
            q: 'Which Ollama model is best for coding right now?',
            a: 'Qwen 2.5 Coder 14B at Q4_K_M. It leads HumanEval benchmarks in the 14B class and handles Python, TypeScript, and Go without special prompting. Needs 10 GB VRAM.',
          },
          {
            q: 'Are Qwen models better than Llama models in 2026?',
            a: 'For coding: yes, Qwen 2.5 Coder leads. For general conversation and instruction following at the 8B tier: Llama 3 8B remains competitive and runs faster on the same hardware due to its smaller size.',
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
