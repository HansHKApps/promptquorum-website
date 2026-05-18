import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Ollama',
    title: 'Which Ollama Models Support Vision?',
    seoTitle: 'Which Ollama Models Support Vision? | Prompt Bites | PromptQuorum',
    metaDescription: 'LLaVA, Gemma 3 multimodal, and Qwen-VL support vision on Ollama. Start with: ollama run llava. All accept images via the Ollama API. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['LLaVA', 'Gemma 3', 'Qwen-VL'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers using vision models with Ollama',
    parentArticle: '/local-llms/multimodal-local-llms',
    siblingBites: ['can-you-run-qwen3-on-ollama', 'ollama-128k-context-models'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'Which Ollama models support vision?',
        answer: 'Ollama supports several vision models: LLaVA, Gemma 3 multimodal, and Qwen-VL. Run ollama run llava for the easiest start. All accept images via the Ollama API.',
        bullets: [
          'llava: original vision model, best compatibility',
          'gemma3: Google multimodal model, good quality',
          'qwen-vl: strong for document understanding',
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
          'Four Ollama vision models are production-ready: LLaVA, Llama 3.2 Vision, Qwen-VL, and Gemma 3',
          'Vision models need 1–3 GB more VRAM than their text-only equivalents — the image encoder runs alongside the LLM',
          'LLaVA 7B is the safest starting point (~7 GB VRAM, broad client compatibility)',
          'Use Qwen-VL for chart and diagram analysis; use Llama 3.2 Vision 11B for OCR and multi-step reasoning',
        ],
      },
      body1: {
        title: 'The Top Vision Models on Ollama',
        content: [
          '<strong>As of May 2026, Ollama supports four production-ready vision models: LLaVA, Llama 3.2 Vision, Qwen-VL, and Gemma 3.</strong> Each has a distinct strength and VRAM profile.',
          'LLaVA is the safest starting point — it has the broadest client compatibility and works with any image format Ollama accepts. Llama 3.2 Vision 11B is the best choice for OCR and multi-step visual reasoning. Qwen-VL leads on charts, diagrams, and structured documents. Gemma 3\'s vision variant handles 35+ languages — useful when images contain non-English text like signage, foreign-language documents, or charts with localized labels. LLaVA and Qwen-VL are strongest on English text.',
          'All vision models load an image encoder alongside the LLM weights. This encoder adds 1–3 GB of VRAM above what the base text-only model needs — plan for that overhead when checking your VRAM budget.',
        ],
      },
      body2: {
        title: 'VRAM Requirements for Vision',
        content: [
          '<strong>Every vision model needs more VRAM than its text-only equivalent.</strong> A 7B vision model typically requires 7–9 GB VRAM, not the ~6 GB you would budget for a 7B text model.',
          'For chart and document analysis, Qwen-VL 7B and Gemma 3 offer the most VRAM-efficient options with strong diagram understanding. For OCR and complex reasoning on images, Llama 3.2 Vision 11B justifies the extra VRAM. For the full guide on multimodal local models and use-case matching, see the <a href="/local-llms/multimodal-local-llms" class="text-primary hover:underline">multimodal local LLMs guide</a>.',
        ],
        columns: ['Model', 'VRAM at Q4', 'Image Capability'],
        rows: [
          { 'Model': 'LLaVA 7B', 'VRAM at Q4': '~7 GB', 'Image Capability': 'General image Q&A, broad compatibility' },
          { 'Model': 'Llama 3.2 Vision 11B', 'VRAM at Q4': '~10 GB', 'Image Capability': 'OCR, multi-step visual reasoning' },
          { 'Model': 'Qwen-VL 7B', 'VRAM at Q4': '~7 GB', 'Image Capability': 'Charts, diagrams, document analysis' },
          { 'Model': 'Gemma 3 (vision)', 'VRAM at Q4': '~6 GB', 'Image Capability': 'Multilingual image understanding' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About Ollama Vision Models',
        faqs: [
          {
            q: 'How do I send an image to Ollama via the API?',
            a: 'POST to the <code>/api/chat</code> endpoint with the image as a base64 string in the <code>images</code> array. Minimum working JSON body: <code>{"model":"llava","messages":[{"role":"user","content":"What is in this image?","images":["&lt;base64&gt;"]}]}</code> See <a href="/prompt-bites/can-you-run-qwen3-on-ollama" class="text-primary hover:underline">Qwen 3 on Ollama</a> for a multimodal-capable option with strong tool calling support.',
          },
          {
            q: 'Can vision models do OCR (read text from images)?',
            a: 'Yes, but quality varies. Llama 3.2 Vision 11B is the strongest for OCR among Ollama-supported models. LLaVA 7B can read clearly printed text but struggles with handwriting or small fonts.',
          },
          {
            q: 'Which Ollama vision model is best for charts and diagrams?',
            a: 'Qwen-VL 7B. It was fine-tuned on structured visual data including charts, tables, and diagrams, and outperforms LLaVA and Gemma 3 on document understanding benchmarks.',
          },
          {
            q: 'Do vision models support multiple images in one prompt?',
            a: 'Support varies by model. LLaVA and Qwen-VL currently process one image per turn in Ollama. Llama 3.2 Vision supports multi-image inputs depending on the Ollama version and client implementation.',
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
