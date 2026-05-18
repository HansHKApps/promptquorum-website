import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quantization & VRAM',
    title: 'How Much VRAM for a 70B Model?',
    seoTitle: 'How Much VRAM for a 70B Model? | Prompt Bites | PromptQuorum',
    metaDescription: 'A 70B model at Q4_K_M needs ~40 GB VRAM. Options: dual RTX 3090 (48 GB), M5 Max 128 GB unified memory, or cloud GPU. Quick answer from PromptQuorum.',
    publishDate: '2026-05-18',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-18',
    current_models_mentioned: ['Llama 3 70B'],
    current_hardware_mentioned: ['RTX 3090', 'M5 Max'],
    educationalLevel: 'Intermediate',
    audience: 'Developers planning to run 70B models locally',
    parentArticle: '/local-llms/run-70b-models-24gb-vram',
    siblingBites: ['how-much-ram-for-7b-model', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    quickAnswerTop: {
      en: {
        question: 'How much VRAM for a 70B model?',
        answer: 'A 70B model at Q4_K_M needs approximately 40 GB of VRAM. Consumer options: dual RTX 3090 (48 GB total), M5 Max with 128 GB unified memory, or cloud GPU rental.',
        bullets: [
          'Q4_K_M 70B: ~40 GB VRAM required',
          'Dual RTX 3090 (48 GB total): consumer desktop option',
          'M5 Max 128 GB unified memory: best single-machine experience',
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
          'A 70B model at Q4_K_M needs approximately 40 GB of VRAM',
          'Consumer hardware options: dual RTX 3090 (48 GB) or Apple M5 Max with 128 GB unified memory',
          'For occasional use under 5 hours per week, cloud GPU rental at $0.50–$1.50/hour is cheaper than buying hardware',
        ],
      },
      body1: {
        title: 'Hardware Options for Running a 70B Model',
        content: [
          'As of May 2026, <strong>a 70B model at Q4_K_M is approximately 40 GB of compressed weights — 1.7× a single RTX 4090 and 1.6× a single RTX 3090.</strong> This is why 70B is the hardest tier to run locally: it crosses the boundary between consumer GPUs (max 24 GB) and workstation hardware. Three paths exist, each with different trade-offs.',
          'Apple M5 Max with 128 GB unified memory is the smoothest single-machine option — no PCIe transfer bottleneck between CPU and GPU memory, and macOS manages allocation automatically. Dual RTX 3090s work but require a workstation-class desktop and careful driver configuration.',
        ],
        columns: ['Hardware', 'Total VRAM', 'Speed'],
        rows: [
          { 'Hardware': 'Dual RTX 3090', 'Total VRAM': '48 GB', 'Speed': '~8 tok/s' },
          { 'Hardware': 'RTX 3090 + CPU offload', 'Total VRAM': '24 GB + 32 GB RAM', 'Speed': '~3 tok/s' },
          { 'Hardware': 'Apple M5 Max 128 GB', 'Total VRAM': '128 GB unified', 'Speed': '~15 tok/s' },
          { 'Hardware': 'RunPod H100 (cloud)', 'Total VRAM': '80 GB', 'Speed': '~50 tok/s' },
        ],
      },
      body2: {
        title: 'When Cloud Makes More Sense Than Local',
        content: [
          'Cloud GPU rental for 70B inference runs $0.50–$1.50 per hour on RunPod and Lambda Labs as of May 2026. A dual RTX 3090 setup costs $1,500–$2,500 in hardware, which amortizes to cloud costs only after 1,500–3,000 hours of use.',
          'For teams or individuals using 70B models fewer than 5 hours per week, cloud rental is both cheaper and easier to maintain. Local 70B is justified for privacy-sensitive use cases (no data leaving your hardware) or sustained high-frequency inference where cloud costs compound quickly. For smaller models that fit on consumer GPUs, see <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">the VRAM tier guide</a>.',
          'For a full breakdown of 70B deployment strategies, see <a href="/local-llms/run-70b-models-24gb-vram" class="text-primary hover:underline">how to run 70B models with 24 GB VRAM</a>.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Quick Answers About 70B Model VRAM',
        faqs: [
          {
            q: 'Can a single RTX 3090 run a 70B model?',
            a: 'Partially. A single RTX 3090 (24 GB) can run 70B with CPU offload, but speed drops to ~3 tok/s — too slow for interactive use. Full GPU inference for 70B requires 40+ GB in combined VRAM.',
          },
          {
            q: 'Can I run a 70B model on a MacBook?',
            a: 'Only on M3 Max, M4 Max, M4 Ultra, or M5 Max with 128 GB of unified memory. A MacBook with 32 GB RAM cannot run 70B at Q4. See <a href="/prompt-bites/how-much-ram-for-7b-model" class="text-primary hover:underline">the RAM sizing guide</a> for smaller model alternatives.',
          },
          {
            q: 'Is there a cheaper way to run 70B models locally?',
            a: 'Yes — use Q2_K quantization to bring the 70B model down to ~21 GB VRAM, but quality degrades significantly. Alternatively, 34B models at Q5 deliver 80–90% of 70B quality at half the VRAM requirement.',
          },
          {
            q: 'How does 70B VRAM compare to a 13B model?',
            a: 'A 13B model at Q4 needs ~9 GB VRAM vs ~40 GB for 70B. For most tasks — chat, coding, summarization — a 13–14B model at Q5 covers the gap. See <a href="/prompt-bites/how-much-vram-for-local-llm" class="text-primary hover:underline">VRAM requirements by model size</a>.',
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
