import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'Q4_K_M vs Q8_0: Which Should You Pick?',
    seoTitle: 'Q4_K_M vs Q8_0: Which Should You Pick? | Prompt Bites | PromptQuorum',
    metaDescription: 'Use Q4_K_M with 8 GB VRAM or less. Use Q8_0 with 12+ GB. Q4_K_M delivers 95% of Q8_0 quality at half the size. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: [],
    current_hardware_mentioned: ['RTX 3060 12 GB'],
    educationalLevel: 'Intermediate',
    audience: 'Developers choosing quantization for local LLMs',
    parentArticle: '/local-llms/quantization-levels-comparison',
    siblingBites: ['what-is-q4-k-m-quantization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Q4_K_M vs Q8_0: which should you pick?',
        answer: 'Use Q4_K_M if you have 8 GB VRAM or less. Use Q8_0 if you have 12+ GB. Q4_K_M delivers 95% of Q8_0 quality at roughly half the file size.',
        bullets: [
          'Q4_K_M: ~5–6 GB for 7B models, ideal for 8 GB VRAM',
          'Q8_0: ~8–9 GB for 7B models, needs 12+ GB VRAM',
          'Quality difference is under 5% in real-world use',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Q4_K_M vs. Q8_0: Was sollten Sie wählen?',
        answer: 'Verwenden Sie Q4_K_M bei 8 GB VRAM oder weniger. Verwenden Sie Q8_0 bei 12+ GB. Q4_K_M liefert 95 % der Q8_0-Qualität bei ungefähr halbem Dateivolumen.',
        bullets: [
          'Q4_K_M: ~5–6 GB für 7B-Modelle, ideal für 8 GB VRAM',
          'Q8_0: ~8–9 GB für 7B-Modelle, benötigt 12+ GB VRAM',
          'Qualitätsunterschied unter 5 % im realen Einsatz',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Q4_K_M ou Q8_0 : lequel choisir ?',
        answer: 'Utilisez Q4_K_M avec 8 Go de VRAM ou moins. Utilisez Q8_0 avec 12+ Go. Q4_K_M offre 95 % de la qualité de Q8_0 à environ la moitié de la taille.',
        bullets: [
          'Q4_K_M : ~5–6 Go pour les modèles 7B, idéal pour 8 Go de VRAM',
          'Q8_0 : ~8–9 Go pour les modèles 7B, nécessite 12+ Go de VRAM',
          'Différence de qualité inférieure à 5 % en usage réel',
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
          '8 GB VRAM or less: use Q4_K_M — delivers 95% of Q8_0 quality at roughly half the file size',
          '12+ GB VRAM: Q8_0 is worth it for near-full-precision quality with no speed penalty',
          'For most users running Ollama daily, Q4_K_M is the right choice',
        ],
      },
      body1: {
        title: 'The Quick Verdict',
        content: [
          'As of May 2026, <strong>Q8_0 is ~99% of full-precision quality. Q4_K_M is ~92%.</strong> The 7-point gap is invisible in chat, coding, and summarization — three tasks that cover 95% of local LLM use. Q8_0 only pulls ahead on long-form factual recall, multi-step math, and code requiring exact syntax over 500+ lines.',
          'Q4_K_M is the right default because the extra quality from Q8_0 only shows up in edge cases: long-form generation with exact factual recall, or mathematical reasoning that requires higher precision. For everything else, Q4_K_M matches Q8_0 in practice.',
          'If you are already using Q4_K_M and your results feel wrong, the issue is almost never the quantization — it is the model size or prompt structure.',
        ],
      },
      body2: {
        title: 'Side-by-Side Comparison',
        content: [
          'The table below compares Q4_K_M and Q8_0 for a 7B model. Both formats work with Ollama, LM Studio, and llama.cpp without any special configuration.',
          'For context on what Q4_K_M means and how k-quant compression works, see the <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">Q4_K_M explained guide</a>. For the full quantization reference, see <a href="/local-llms/quantization-levels-comparison" class="text-primary hover:underline">quantization levels compared</a>.',
          '<strong>Three tasks reveal Q4_K_M\'s quality gap: long-document recall (50+ pages), multi-step math with intermediate state, and code generation over 300+ lines.</strong> For these, Q8_0\'s extra precision prevents the small drift errors that compound across long outputs. For everything else — chat, code under 200 lines, Q&A, summarization — the gap is invisible. For a refresher before deciding, see <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a>.',
        ],
        columns: ['Metric', 'Q4_K_M', 'Q8_0'],
        rows: [
          { 'Metric': 'File size (7B model)', 'Q4_K_M': '~4.1 GB', 'Q8_0': '~7.7 GB' },
          { 'Metric': 'VRAM needed (7B)', 'Q4_K_M': '5–6 GB', 'Q8_0': '8–9 GB' },
          { 'Metric': 'Quality vs full precision', 'Q4_K_M': '~92%', 'Q8_0': '~99%' },
          { 'Metric': 'Best for', 'Q4_K_M': '6–8 GB VRAM', 'Q8_0': '12+ GB VRAM' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Q4_K_M vs Q8_0',
        faqs: [
          {
            q: 'Is Q8_0 noticeably better than Q4_K_M?',
            a: 'Only in edge cases — complex multi-step math, exact quote recall from long documents, or very long outputs. For chat, coding, and summarization (which covers 95% of usage), most users cannot tell the difference.',
          },
          {
            q: 'Does Q8_0 run faster than Q4_K_M?',
            a: 'No. Q8_0 is larger and requires more memory bandwidth, making it slightly slower per token than Q4_K_M. Speed and quality both favor Q4_K_M for VRAM-constrained setups. See <a href="/prompt-bites/what-is-q4-k-m-quantization" class="text-primary hover:underline">what Q4_K_M means</a> for the underlying reason.',
          },
          {
            q: 'Can I switch between Q4_K_M and Q8_0 for different tasks?',
            a: 'Only by pulling and running different model tags. In Ollama: <code>ollama pull llama3:8b-q4_K_M</code> and <code>ollama pull llama3:8b-q8_0</code> are separate downloads. You switch by specifying the tag in <code>ollama run</code>.',
          },
          {
            q: 'What about Q4_K_S — is it worth using instead of Q4_K_M?',
            a: 'Q4_K_S saves about 300 MB versus Q4_K_M but delivers lower quality. Only use Q4_K_S if you are very tight on VRAM and cannot fit Q4_K_M. In almost all cases, Q4_K_M is the better choice.',
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
