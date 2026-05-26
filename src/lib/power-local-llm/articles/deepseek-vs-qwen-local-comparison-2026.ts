import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen: Local LLM Comparison 2026',
    seoTitle: 'DeepSeek vs Qwen Local LLM 2026: Benchmarks & VRAM',
    intro:
      'DeepSeek-R1 distilled models and Qwen2.5 are the two dominant families for local deployment in 2026. Both share the same VRAM footprint at equivalent parameter counts — 5.5 GB for 7B at Q4_K_M — but they are optimised for opposite strengths. DeepSeek-R1 distilled models lead on math and step-by-step reasoning; Qwen2.5 leads on coding and Chinese-language tasks. This guide gives you a direct benchmark table, a hardware-tier breakdown, and a one-sentence verdict for each common use case.',
    metaDescription:
      'DeepSeek-R1 distilled vs Qwen2.5 local LLMs: side-by-side VRAM, MMLU, MATH-500, HumanEval benchmarks. Which model to run at each hardware tier in 2026.',
    twitterDescription:
      'DeepSeek-R1 distilled vs Qwen2.5: same VRAM, different strengths. Math → DeepSeek. Code → Qwen. Full benchmark table inside.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen local LLM',
    gammaEmbedUrl: '/presentations/deepseek-vs-qwen-local-comparison-2026-static.html',
    targetKeywords: [
      'deepseek vs qwen local llm 2026',
      'deepseek r1 distilled vs qwen2.5',
      'best local llm for math',
      'qwen2.5 vs deepseek benchmark',
      'deepseek local hardware requirements',
    ],
    leadAnswerBlock:
      '**For math and step-by-step reasoning, DeepSeek-R1-Distill-Qwen-32B scores 94% on MATH-500 vs 90.3% for Qwen2.5 32B. For coding and Chinese text, Qwen2.5 32B scores 91.5% HumanEval vs 83% for the DeepSeek distill. Both require identical VRAM at the same parameter count.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer:
          'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen2.5 is stronger (91.5% HumanEval at 32B). Both families run on identical hardware at equivalent parameter counts.',
        bullets: [
          'Math / reasoning: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Coding: Qwen2.5-Coder 32B (91.5% HumanEval)',
          'Chinese text: Qwen2.5 7B–72B (native tokenisation)',
          'Same VRAM: both 7B models need 5.5 GB at Q4_K_M',
          'Apple Silicon: both run well on M-series unified memory',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer:
          'Für Mathematik und Schlussfolgern sind DeepSeek-R1-destillierte Modelle stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen2.5 stärker (91,5 % HumanEval bei 32B). Beide Familien laufen bei gleicher Parameterzahl auf identischer Hardware.',
        bullets: [
          'Mathematik/Schlussfolgern: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Programmierung: Qwen2.5-Coder 32B (91,5 % HumanEval)',
          'Chinesischer Text: Qwen2.5 7B–72B (natives Tokenisierung)',
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?',
        answer:
          'Pour les mathématiques et le raisonnement, les modèles distillés DeepSeek-R1 sont plus forts (94 % MATH-500 à 32B). Pour le code et le texte chinois, Qwen2.5 est plus fort (91,5 % HumanEval à 32B). Les deux familles fonctionnent sur le même matériel à nombre de paramètres équivalent.',
        bullets: [
          'Maths / raisonnement : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Code : Qwen2.5-Coder 32B (91,5 % HumanEval)',
          'Texte chinois : Qwen2.5 7B–72B (tokenisation native)',
          'Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルで優れているのはDeepSeekとQwenのどちら？',
        answer:
          '数学・推論タスクではDeepSeek-R1蒸留モデルが優れています（32BでMATH-500 94%）。コーディングと中国語テキストではQwen2.5が優れています（32BでHumanEval 91.5%）。同じパラメータ数なら両ファミリーに同じハードウェアが必要です。',
        bullets: [
          '数学・推論：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          'コーディング：Qwen2.5-Coder 32B（HumanEval 91.5%）',
          '中国語テキスト：Qwen2.5 7B〜72B（ネイティブトークナイゼーション）',
          '同じVRAM：両7BモデルともQ4_K_Mで5.5 GBが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'DeepSeek 和 Qwen 哪个本地运行更好？',
        answer:
          '数学和推理任务：DeepSeek-R1 蒸馏模型更强（32B MATH-500 达94%）。编程和中文文本：Qwen2.5 更强（32B HumanEval 达91.5%）。同等参数量下两者所需硬件相同。',
        bullets: [
          '数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          '编程：Qwen2.5-Coder 32B（HumanEval 91.5%）',
          '中文文本：Qwen2.5 7B–72B（原生分词）',
          '相同显存：两款7B模型Q4_K_M均需5.5 GB',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Benchmark Table', anchor: 'benchmark-table' },
      { label: 'Hardware Tiers', anchor: 'hardware-tiers' },
      { label: 'DeepSeek Models Explained', anchor: 'deepseek-models' },
      { label: 'Qwen2.5 Models Explained', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Use Case Verdicts', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        content:
          'DeepSeek-R1 distilled models lead on math and reasoning; Qwen2.5 leads on coding and Chinese text — both require the same VRAM at equivalent parameter counts.',
      },
      {
        type: 'plain-terms',
        content:
          'DeepSeek released a reasoning-focused model family (R1) and made smaller distilled versions available for local use. Qwen2.5 is Alibaba\'s general-purpose family. At 7B parameters, both fit in 5.5 GB VRAM. The difference is what they are good at: DeepSeek is better at math; Qwen is better at writing code and understanding Chinese.',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Same VRAM: both 7B models need 5.5 GB at Q4_K_M; both 32B need 20.5 GB',
          'Math: DeepSeek-R1-Distill-Qwen-32B wins (94% MATH-500 vs 90.3%)',
          'Code: Qwen2.5-Coder 32B wins (91.5% HumanEval vs 83%)',
          'Chinese: Qwen2.5 wins — native tokenisation, 30–40% more efficient on CJK text',
          'Reasoning chains: DeepSeek-R1 distills produce long chain-of-thought by default',
          'General chat: Qwen2.5 14B is slightly more fluent; DeepSeek 14B distill tends to over-reason',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Side-by-Side Benchmark Table',
        content:
          'All scores at Q4_K_M quantization. Speed measured on NVIDIA RTX 4090 (24 GB VRAM) for GPU rows and Apple M3 Max 48 GB for Mac rows.',
        tableData: {
          columns: ['Model', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Speed (tok/s)'],
          rows: [
            {
              'Model': 'Qwen2.5 7B',
              'VRAM': '5.5 GB',
              'MMLU (%)': '72.5',
              'MATH-500 (%)': '62.5',
              'HumanEval (%)': '74.6',
              'Speed (tok/s)': '50–80',
            },
            {
              'Model': 'DS-R1-Distill-Qwen 7B',
              'VRAM': '5.5 GB',
              'MMLU (%)': '70.1',
              'MATH-500 (%)': '88.0',
              'HumanEval (%)': '68.4',
              'Speed (tok/s)': '50–80',
            },
            {
              'Model': 'Qwen2.5 14B',
              'VRAM': '9.5 GB',
              'MMLU (%)': '79.2',
              'MATH-500 (%)': '76.1',
              'HumanEval (%)': '82.1',
              'Speed (tok/s)': '30–50',
            },
            {
              'Model': 'DS-R1-Distill-Qwen 14B',
              'VRAM': '9.5 GB',
              'MMLU (%)': '75.8',
              'MATH-500 (%)': '90.0',
              'HumanEval (%)': '75.5',
              'Speed (tok/s)': '30–50',
            },
            {
              'Model': 'Qwen2.5 32B',
              'VRAM': '20.5 GB',
              'MMLU (%)': '83.4',
              'MATH-500 (%)': '90.3',
              'HumanEval (%)': '91.5',
              'Speed (tok/s)': '15–30',
            },
            {
              'Model': 'DS-R1-Distill-Qwen 32B',
              'VRAM': '20.5 GB',
              'MMLU (%)': '80.6',
              'MATH-500 (%)': '94.0',
              'HumanEval (%)': '83.2',
              'Speed (tok/s)': '15–30',
            },
          ],
        },
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Which Model to Run at Each Hardware Tier',
        content:
          'VRAM requirements are identical between the two families at each parameter size. The choice between DeepSeek and Qwen is a task preference, not a hardware constraint.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen2.5 7B for coding/chat; DS-R1-Distill-Qwen-7B for math tutoring',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen2.5 14B for general use; DS-R1-Distill-Qwen-14B for reasoning chains',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen2.5-Coder 32B or Qwen2.5 32B — best all-round local model in this tier',
          '**48 GB+ (M2/M3 Ultra / dual RTX 4090):** Qwen2.5 72B (86.1% MMLU, 97% HumanEval) — near GPT-4 class',
          '**CPU-only (32+ GB RAM):** Qwen2.5 7B or DS-R1-Distill 7B — both run at 3–8 tok/s on modern laptop CPUs',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'DeepSeek Local Models Explained',
        content:
          'DeepSeek released its R1 reasoning model as a full 671B MoE (mixture-of-experts) architecture that requires server-grade hardware. For consumer local use, the practical option is the distilled versions — smaller dense models trained to replicate R1\'s chain-of-thought reasoning.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** 5.5 GB VRAM at Q4_K_M. Strongest math model at the 7B tier (88% MATH-500). Produces long reasoning chains; disable chain-of-thought via system prompt for faster chat.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9.5 GB VRAM. Best reasoning-per-VRAM at the 14B tier. Good for math tutoring, logic puzzles, and structured analysis tasks.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20.5 GB VRAM. Highest MATH-500 score of any consumer-runnable model at 94%. Use when math accuracy is the priority over coding.',
          '**DeepSeek-V3 (full):** 671B MoE — 400+ GB RAM at Q4 — impractical on consumer hardware. Use the distilled versions instead.',
          'Ollama command: `ollama run deepseek-r1:7b` (uses the Q4_K_M distill by default)',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'Qwen2.5 Local Models Explained',
        content:
          'Qwen2.5 is Alibaba\'s October 2025 release covering base, Coder, and Vision-Language variants. All base models use a 128K context window and Apache 2.0 license.',
        items: [
          '**Qwen2.5 7B:** 5.5 GB VRAM. Best general-purpose 7B for coding and Chinese text. 74.6% HumanEval outperforms every 7B competitor on code.',
          '**Qwen2.5 14B:** 9.5 GB VRAM. The sweet spot for balanced quality vs speed. 82.1% HumanEval, 79.2% MMLU. Best choice for most 12 GB VRAM setups.',
          '**Qwen2.5 32B:** 20.5 GB VRAM. 91.5% HumanEval — best coding benchmark score under 48 GB VRAM.',
          '**Qwen2.5-Coder 32B:** Same VRAM as base 32B, fine-tuned specifically for code generation and review. Use instead of base when coding is the primary task.',
          '**Qwen2.5 72B:** 46 GB VRAM. 86.1% MMLU, 97% HumanEval. Only runs on 48+ GB unified memory (M2/M3 Ultra) or multi-GPU setups.',
          'Ollama command: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: Running Both Families',
        content:
          'Both DeepSeek distills and Qwen2.5 run well on Apple Silicon via Ollama or llama.cpp with Metal acceleration. The key difference is memory bandwidth.',
        tableData: {
          columns: ['Hardware', 'Best Model Tier', 'Speed (7B)', 'Speed (32B)', 'Notes'],
          rows: [
            {
              'Hardware': 'M2/M3 16 GB',
              'Best Model Tier': '7B only',
              'Speed (7B)': '30–50 tok/s',
              'Speed (32B)': 'N/A',
              'Notes': 'Both 7B models fit; 14B uses swap',
            },
            {
              'Hardware': 'M3 Pro 36 GB',
              'Best Model Tier': '14B sweet spot',
              'Speed (7B)': '60–90 tok/s',
              'Speed (32B)': 'N/A',
              'Notes': '14B at full speed; 32B uses swap',
            },
            {
              'Hardware': 'M3 Max 48 GB',
              'Best Model Tier': '32B comfortably',
              'Speed (7B)': '80–120 tok/s',
              'Speed (32B)': '15–25 tok/s',
              'Notes': 'Best consumer Apple for 32B',
            },
            {
              'Hardware': 'RTX 4060 8 GB',
              'Best Model Tier': '7B only',
              'Speed (7B)': '50–80 tok/s',
              'Speed (32B)': 'N/A (partial offload)',
              'Notes': '7B fits fully; 14B requires CPU offload',
            },
            {
              'Hardware': 'RTX 4090 24 GB',
              'Best Model Tier': '32B',
              'Speed (7B)': '100–150 tok/s',
              'Speed (32B)': '18–28 tok/s',
              'Notes': 'Best single-GPU for 32B',
            },
          ],
        },
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Use Case Verdicts',
        content: 'One-sentence answer for each common local-LLM use case:',
        items: [
          '**Math homework / tutoring:** DS-R1-Distill-Qwen-7B — 88% MATH-500 outperforms Qwen2.5 7B (62.5%) at the same VRAM',
          '**Code generation / review:** Qwen2.5-Coder 32B — 91.5% HumanEval, the highest of any consumer-runnable model',
          '**Chinese-language chat:** Qwen2.5 7B — native CJK tokenisation, 30–40% more token-efficient on Chinese text',
          '**Step-by-step analysis / reasoning chains:** DS-R1-Distill-Qwen-14B — produces explicit chain-of-thought by default',
          '**General daily assistant (8 GB VRAM):** Qwen2.5 7B — more fluent conversation, avoids DeepSeek\'s over-reasoning on simple tasks',
          '**Private enterprise deployment (China):** Qwen2.5 — Apache 2.0 license, Alibaba provenance simplifies CAC compliance documentation',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Is DeepSeek-R1 the same as the distilled models?',
            a: 'No. DeepSeek-R1 is the 671B mixture-of-experts model requiring server hardware. The distilled versions (7B, 14B, 32B) are separate dense models trained to replicate its reasoning style — these are the practical local-use options.',
          },
          {
            q: 'Do DeepSeek and Qwen use the same VRAM at each parameter size?',
            a: 'Yes, at the same quantisation level. Both 7B models need approximately 5.5 GB at Q4_K_M; both 32B models need 20.5 GB. The hardware choice is about task preference, not VRAM difference.',
          },
          {
            q: 'Can I run DeepSeek-R1 distilled models with Ollama?',
            a: 'Yes. Run `ollama run deepseek-r1:7b` for the 7B distill or `ollama run deepseek-r1:32b` for the 32B. Ollama downloads Q4_K_M by default.',
          },
          {
            q: 'Which is better for Chinese text: DeepSeek or Qwen?',
            a: 'Qwen2.5 is significantly better for Chinese text. It uses a purpose-built Chinese tokeniser that is 30–40% more efficient on CJK text. The DeepSeek-R1 distilled models are built on Qwen2.5 weights, so they also inherit reasonable Chinese support, but the base Qwen2.5 models are the primary choice.',
          },
          {
            q: 'Which model should I use for math on 8 GB VRAM?',
            a: 'DeepSeek-R1-Distill-Qwen-7B. It scores 88% on MATH-500 vs 62.5% for Qwen2.5 7B — a 25-point gap — at identical VRAM usage.',
          },
          {
            q: 'Does DeepSeek-R1 comply with China data law if run locally?',
            a: 'Running any model locally means data never leaves your hardware, which satisfies the data residency requirements of China\'s Data Security Law regardless of model origin. The compliance question is about data handling, not model provenance.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Qwen Local Deployment Guide 2026](/local-llms/qwen-local-deployment-guide-2026) — Full hardware tier table for all Qwen2.5 variants',
          '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 vs 4070 vs 4090 for local inference',
          '[Qwen vs Llama vs Mistral 2026](/local-llms/qwen-vs-llama-vs-mistral) — Three-way comparison including Llama 3.3 70B',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: Local LLM Comparison 2026',
      description:
        'DeepSeek-R1 distilled vs Qwen2.5 local LLMs: side-by-side VRAM, MMLU, MATH-500, HumanEval benchmarks. Which model to run at each hardware tier in 2026.',
      url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026?lang=en',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen2.5' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is DeepSeek-R1 the same as the distilled models?', acceptedAnswer: { '@type': 'Answer', text: 'No. DeepSeek-R1 is the 671B MoE model. The distilled versions (7B, 14B, 32B) are separate dense models trained to replicate its reasoning style — practical for local use.' } },
        { '@type': 'Question', name: 'Do DeepSeek and Qwen use the same VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, at the same quantisation level. Both 7B models need 5.5 GB at Q4_K_M; both 32B need 20.5 GB. The choice is about task strength, not VRAM.' } },
        { '@type': 'Question', name: 'Which is better for Chinese text: DeepSeek or Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5 is significantly better. It uses a purpose-built Chinese tokeniser that is 30–40% more efficient on CJK text.' } },
        { '@type': 'Question', name: 'Which model for math on 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. It scores 88% MATH-500 vs 62.5% for Qwen2.5 7B at identical VRAM.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen: Lokaler LLM-Vergleich 2026',
    seoTitle: 'DeepSeek vs Qwen lokal 2026: Benchmarks & VRAM-Vergleich',
    intro:
      'DeepSeek-R1-destillierte Modelle und Qwen2.5 sind 2026 die zwei dominanten Familien für lokale Bereitstellung. Beide benötigen bei gleicher Parameterzahl denselben VRAM – 5,5 GB bei 7B mit Q4_K_M – sind aber für unterschiedliche Stärken optimiert. DeepSeek-R1-Destillate führen bei Mathematik und Schritt-für-Schritt-Schlussfolgerung; Qwen2.5 führt bei Programmierung und chinesischsprachigen Aufgaben.',
    metaDescription:
      'DeepSeek-R1 destilliert vs Qwen2.5 lokal: direkter VRAM-, MMLU-, MATH-500- und HumanEval-Vergleich. Welches Modell bei welcher Hardware-Stufe in 2026.',
    twitterDescription:
      'DeepSeek-R1 destilliert vs Qwen2.5: gleicher VRAM, unterschiedliche Stärken. Mathematik → DeepSeek. Code → Qwen.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen lokaler LLM',
    targetKeywords: [
      'deepseek vs qwen lokal 2026',
      'deepseek r1 destilliert vs qwen2.5',
      'bester lokaler llm für mathematik',
      'qwen2.5 vs deepseek benchmark',
    ],
    leadAnswerBlock:
      '**Für Mathematik gewinnt DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500 vs 90,3 % für Qwen2.5 32B). Für Programmierung gewinnt Qwen2.5 32B (91,5 % HumanEval vs 83,2 %). Beide benötigen identischen VRAM bei gleicher Parameterzahl.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer: 'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen2.5 is stronger (91.5% HumanEval at 32B).',
        bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)', 'Code: Qwen2.5-Coder 32B (91.5% HumanEval)', 'Chinese: Qwen2.5', 'Same VRAM at equivalent parameter count'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer: 'Für Mathematik sind DeepSeek-R1-Destillate stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen2.5 stärker (91,5 % HumanEval bei 32B).',
        bullets: ['Mathematik: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)', 'Programmierung: Qwen2.5-Coder 32B (91,5 % HumanEval)', 'Chinesisch: Qwen2.5', 'Gleicher VRAM bei gleicher Parameterzahl'],
        updatedDate: '2026-05',
      },
      fr: { question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?', answer: 'Pour les maths, DeepSeek-R1 distillé est plus fort (94 % MATH-500). Pour le code, Qwen2.5 est plus fort (91,5 % HumanEval).', bullets: ['Maths : DeepSeek-R1-Distill-Qwen-32B', 'Code : Qwen2.5-Coder 32B', 'Même VRAM'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学・推論ではDeepSeek-R1蒸留モデルが優れています（32B: MATH-500 94%）。コーディングではQwen2.5が優れています（32B: HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B', 'コーディング: Qwen2.5-Coder 32B', 'VRAM同等'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学推理：DeepSeek-R1蒸馏模型更强（32B MATH-500 94%）。编程：Qwen2.5更强（32B HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B', '编程: Qwen2.5-Coder 32B', '显存相同'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Benchmark-Tabelle', anchor: 'benchmark-table' },
      { label: 'Hardware-Stufen', anchor: 'hardware-tiers' },
      { label: 'DeepSeek-Modelle erklärt', anchor: 'deepseek-models' },
      { label: 'Qwen2.5-Modelle erklärt', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Anwendungsfälle', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1-Destillate führen bei Mathematik; Qwen2.5 führt bei Programmierung und chinesischem Text – bei gleicher VRAM-Anforderung.' },
      { type: 'plain-terms', content: 'DeepSeek hat ein Reasoning-Modell (R1) entwickelt und kleinere destillierte Versionen für lokale Nutzung bereitgestellt. Qwen2.5 ist Alibabas Allzweck-Familie. Beide 7B-Modelle passen in 5,5 GB VRAM. Der Unterschied liegt in der Stärke: DeepSeek ist besser in Mathematik, Qwen ist besser beim Programmieren und chinesischem Text.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M; beide 32B brauchen 20,5 GB',
          'Mathematik: DeepSeek-R1-Distill-Qwen-32B gewinnt (94 % MATH-500 vs 90,3 %)',
          'Programmierung: Qwen2.5-Coder 32B gewinnt (91,5 % HumanEval vs 83,2 %)',
          'Chinesischer Text: Qwen2.5 gewinnt — native Tokenisierung, 30–40 % effizienter bei CJK-Text',
          'Schlussfolgern: DeepSeek-R1-Destillate produzieren standardmäßig lange Gedankenketten',
          'DSGVO: beide laufen vollständig lokal — kein Datentransfer an Dritte',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Direkte Benchmark-Tabelle',
        content: 'Alle Werte bei Q4_K_M-Quantisierung. Geschwindigkeit gemessen auf NVIDIA RTX 4090 (24 GB VRAM).',
        tableData: {
          columns: ['Modell', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Geschwindigkeit'],
          rows: [
            { 'Modell': 'Qwen2.5 7B', 'VRAM': '5,5 GB', 'MMLU (%)': '72,5', 'MATH-500 (%)': '62,5', 'HumanEval (%)': '74,6', 'Geschwindigkeit': '50–80 Tok/s' },
            { 'Modell': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5,5 GB', 'MMLU (%)': '70,1', 'MATH-500 (%)': '88,0', 'HumanEval (%)': '68,4', 'Geschwindigkeit': '50–80 Tok/s' },
            { 'Modell': 'Qwen2.5 14B', 'VRAM': '9,5 GB', 'MMLU (%)': '79,2', 'MATH-500 (%)': '76,1', 'HumanEval (%)': '82,1', 'Geschwindigkeit': '30–50 Tok/s' },
            { 'Modell': 'DS-R1-Distill-Qwen 14B', 'VRAM': '9,5 GB', 'MMLU (%)': '75,8', 'MATH-500 (%)': '90,0', 'HumanEval (%)': '75,5', 'Geschwindigkeit': '30–50 Tok/s' },
            { 'Modell': 'Qwen2.5 32B', 'VRAM': '20,5 GB', 'MMLU (%)': '83,4', 'MATH-500 (%)': '90,3', 'HumanEval (%)': '91,5', 'Geschwindigkeit': '15–30 Tok/s' },
            { 'Modell': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20,5 GB', 'MMLU (%)': '80,6', 'MATH-500 (%)': '94,0', 'HumanEval (%)': '83,2', 'Geschwindigkeit': '15–30 Tok/s' },
          ],
        },
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Welches Modell bei welcher Hardware-Stufe',
        content: 'VRAM-Anforderungen sind bei beiden Familien identisch. Die Wahl zwischen DeepSeek und Qwen ist eine Aufgaben-Präferenz, keine Hardware-Einschränkung.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen2.5 7B für Programmierung/Chat; DS-R1-Distill-Qwen-7B für Mathe-Nachhilfe',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen2.5 14B für allgemeine Nutzung; DS-R1-Distill-Qwen-14B für Argumentationsketten',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen2.5-Coder 32B — bestes Allround-Modell in diesem Tier',
          '**48 GB+ (M2/M3 Ultra / RTX 4090 Dual):** Qwen2.5 72B (86,1 % MMLU, 97 % HumanEval)',
          '**Nur CPU (32+ GB RAM):** Qwen2.5 7B oder DS-R1-Distill 7B — beide laufen bei 3–8 Tok/s auf modernen Laptop-CPUs',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'DeepSeek-Lokalmodelle erklärt',
        content: 'DeepSeek-R1 ist ein 671B MoE-Modell, das Server-Hardware erfordert. Für lokale Nutzung sind die destillierten Versionen die praktische Option.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** 5,5 GB VRAM bei Q4_K_M. 88 % MATH-500 — stärkstes Mathe-Modell im 7B-Tier. Standardmäßig lange Gedankenketten.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9,5 GB VRAM. Bestes Reasoning-pro-VRAM bei 14B.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20,5 GB VRAM. Höchster MATH-500-Wert aller Consumer-Modelle (94 %).',
          '**DeepSeek-V3 (vollständig):** 671B MoE — 400+ GB RAM bei Q4 — für Consumer-Hardware unpraktisch.',
          'Ollama-Befehl: `ollama run deepseek-r1:7b`',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'Qwen2.5-Lokalmodelle erklärt',
        content: 'Qwen2.5 ist Alibabas Oktober-2025-Release mit Basis-, Coder- und Vision-Language-Varianten. Alle Basismodelle nutzen ein 128K-Kontextfenster und Apache-2.0-Lizenz.',
        items: [
          '**Qwen2.5 7B:** 5,5 GB VRAM. Bestes Allzweck-7B für Programmierung und chinesischen Text.',
          '**Qwen2.5 14B:** 9,5 GB VRAM. Bestes Gleichgewicht Qualität/Geschwindigkeit für 12-GB-VRAM-Setups.',
          '**Qwen2.5 32B:** 20,5 GB VRAM. 91,5 % HumanEval — bester Coding-Benchmark unter 48 GB VRAM.',
          '**Qwen2.5-Coder 32B:** Gleicher VRAM wie 32B-Basis, speziell für Code-Generierung feinabgestimmt.',
          'Ollama-Befehl: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: Beide Familien betreiben',
        content: 'Beide Modell-Familien laufen gut auf Apple Silicon via Ollama oder llama.cpp mit Metal-Beschleunigung.',
        tableData: {
          columns: ['Hardware', 'Beste Modell-Stufe', 'Geschw. (7B)', 'Geschw. (32B)', 'Hinweise'],
          rows: [
            { 'Hardware': 'M2/M3 16 GB', 'Beste Modell-Stufe': 'Nur 7B', 'Geschw. (7B)': '30–50 Tok/s', 'Geschw. (32B)': 'N/A', 'Hinweise': 'Beide 7B-Modelle passen' },
            { 'Hardware': 'M3 Max 48 GB', 'Beste Modell-Stufe': '32B komfortabel', 'Geschw. (7B)': '80–120 Tok/s', 'Geschw. (32B)': '15–25 Tok/s', 'Hinweise': 'Bestes Consumer-Apple für 32B' },
            { 'Hardware': 'RTX 4090 24 GB', 'Beste Modell-Stufe': '32B', 'Geschw. (7B)': '100–150 Tok/s', 'Geschw. (32B)': '18–28 Tok/s', 'Hinweise': 'Beste Einzel-GPU für 32B' },
          ],
        },
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Anwendungsfall-Urteile',
        content: 'Ein-Satz-Antwort für jeden häufigen lokalen LLM-Anwendungsfall:',
        items: [
          '**Mathe-Nachhilfe:** DS-R1-Distill-Qwen-7B — 88 % MATH-500 vs 62,5 % für Qwen2.5 7B',
          '**Code-Generierung/-Review:** Qwen2.5-Coder 32B — 91,5 % HumanEval, bestes Consumer-Modell',
          '**Chinesischsprachiger Chat:** Qwen2.5 7B — native CJK-Tokenisierung, 30–40 % effizienter',
          '**Schritt-für-Schritt-Analyse:** DS-R1-Distill-Qwen-14B — produziert standardmäßig explizite Gedankenketten',
          '**Allgemeiner täglicher Assistent (8 GB VRAM):** Qwen2.5 7B — flüssigere Konversation',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Ist DeepSeek-R1 dasselbe wie die destillierten Modelle?', a: 'Nein. DeepSeek-R1 ist das 671B-MoE-Modell. Die destillierten Versionen (7B, 14B, 32B) sind separate dichte Modelle — praktisch für lokale Nutzung.' },
          { q: 'Benötigen DeepSeek und Qwen denselben VRAM?', a: 'Ja, bei gleicher Quantisierung. Beide 7B-Modelle benötigen ca. 5,5 GB bei Q4_K_M; beide 32B-Modelle benötigen 20,5 GB.' },
          { q: 'Was ist besser für chinesischen Text: DeepSeek oder Qwen?', a: 'Qwen2.5 ist deutlich besser. Es verwendet einen speziell entwickelten chinesischen Tokenizer, der 30–40 % effizienter bei CJK-Text ist.' },
          { q: 'Muss ich bei der Verwendung dieser Modelle die DSGVO beachten?', a: 'Bei lokaler Ausführung verarbeiten beide Modelle keine personenbezogenen Daten auf Drittservern. Das vereinfacht die DSGVO-Dokumentation erheblich, da kein Auftragsverarbeitungsvertrag mit externen Anbietern erforderlich ist.' },
          { q: 'Welches Modell für Mathe bei 8 GB VRAM?', a: 'DeepSeek-R1-Distill-Qwen-7B. Es erzielt 88 % MATH-500 vs 62,5 % für Qwen2.5 7B bei identischem VRAM.' },
          { q: 'Welche Lizenz haben diese Modelle?', a: 'Qwen2.5 verwendet Apache 2.0 — kommerzielle Nutzung ist erlaubt. DeepSeek-R1-Destillate verwenden die MIT-Lizenz. Beide sind für kommerzielle Deployments geeignet.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Verwandte Artikel',
        items: [
          '[Qwen Lokal-Deployment-Guide 2026](/local-llms/qwen-local-deployment-guide-2026?lang=de) — Vollständige Hardware-Tabelle für alle Qwen2.5-Varianten',
          '[GPU-Kaufratgeber für lokale LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=de) — RTX 4060 vs 4070 vs 4090',
          '[Qwen vs Llama vs Mistral 2026](/local-llms/qwen-vs-llama-vs-mistral?lang=de) — Drei-Wege-Vergleich',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: Lokaler LLM-Vergleich 2026',
      description: 'DeepSeek-R1 destilliert vs Qwen2.5 lokal: VRAM, MMLU, MATH-500, HumanEval Benchmarks. Welches Modell bei welcher Hardware-Stufe.',
      url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026?lang=de',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen2.5' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist DeepSeek-R1 dasselbe wie die destillierten Modelle?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. DeepSeek-R1 ist das 671B-MoE-Modell. Die destillierten Versionen sind separate dichte Modelle für lokale Nutzung.' } },
        { '@type': 'Question', name: 'Welches Modell für Mathe bei 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. Es erzielt 88 % MATH-500 vs 62,5 % für Qwen2.5 7B bei identischem VRAM.' } },
        { '@type': 'Question', name: 'Muss ich bei diesen Modellen die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Bei lokaler Ausführung verarbeiten beide Modelle keine Daten auf Drittservern. Kein Auftragsverarbeitungsvertrag erforderlich.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen : Comparaison LLM local 2026',
    seoTitle: 'DeepSeek vs Qwen local 2026 : Benchmarks & comparatif VRAM',
    intro:
      'Les modèles distillés DeepSeek-R1 et Qwen2.5 sont les deux familles dominantes pour le déploiement local en 2026. Les deux nécessitent la même VRAM à nombre de paramètres équivalent — 5,5 Go pour 7B en Q4_K_M — mais sont optimisées pour des points forts opposés. Les distillats DeepSeek-R1 dominent en mathématiques et raisonnement pas à pas ; Qwen2.5 domine en code et en traitement du texte chinois.',
    metaDescription:
      'DeepSeek-R1 distillé vs Qwen2.5 local : tableau comparatif VRAM, MMLU, MATH-500, HumanEval. Quel modèle faire tourner à chaque niveau matériel en 2026.',
    twitterDescription:
      'DeepSeek-R1 distillé vs Qwen2.5 : même VRAM, forces différentes. Maths → DeepSeek. Code → Qwen.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen LLM local',
    targetKeywords: ['deepseek vs qwen llm local 2026', 'deepseek r1 distillé vs qwen2.5', 'meilleur llm local maths'],
    leadAnswerBlock:
      '**Pour les mathématiques, DeepSeek-R1-Distill-Qwen-32B gagne (94 % MATH-500 contre 90,3 % pour Qwen2.5 32B). Pour le code, Qwen2.5 32B gagne (91,5 % HumanEval contre 83,2 %). Les deux nécessitent une VRAM identique à nombre de paramètres équivalent.**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled (94% MATH-500). Code/Chinese: Qwen2.5 (91.5% HumanEval).', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen2.5-Coder 32B', 'Same VRAM'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1 destilliert. Code: Qwen2.5.', bullets: ['Mathe: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen2.5-Coder 32B'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?', answer: 'Pour les maths, DeepSeek-R1 distillé est plus fort (94 % MATH-500 à 32B). Pour le code, Qwen2.5 est plus fort (91,5 % HumanEval à 32B).', bullets: ['Maths : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)', 'Code : Qwen2.5-Coder 32B (91,5 % HumanEval)', 'Même VRAM aux deux'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学：DeepSeek-R1蒸留。コード：Qwen2.5。', bullets: ['数学: DeepSeek-R1', 'コーディング: Qwen2.5'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学：DeepSeek-R1蒸馏。编程：Qwen2.5。', bullets: ['数学: DeepSeek-R1', '编程: Qwen2.5'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Tableau de benchmarks', anchor: 'benchmark-table' },
      { label: 'Niveaux matériels', anchor: 'hardware-tiers' },
      { label: 'Modèles DeepSeek', anchor: 'deepseek-models' },
      { label: 'Modèles Qwen2.5', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Verdicts par usage', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Les distillats DeepSeek-R1 dominent en mathématiques ; Qwen2.5 domine en code et texte chinois — avec la même VRAM à nombre de paramètres équivalent.' },
      { type: 'plain-terms', content: 'DeepSeek a publié un modèle de raisonnement (R1) et des versions distillées plus petites pour usage local. Qwen2.5 est la famille polyvalente d\'Alibaba. Les deux modèles 7B tiennent dans 5,5 Go de VRAM. La différence : DeepSeek est meilleur en maths ; Qwen est meilleur pour le code et le texte chinois.' },
    ],
    sections: {
      tldr: { id: 'tldr', title: 'Résumé', isTldr: true, items: ['Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M ; les 32B nécessitent 20,5 Go', 'Maths : DeepSeek-R1-Distill-Qwen-32B gagne (94 % MATH-500 vs 90,3 %)', 'Code : Qwen2.5-Coder 32B gagne (91,5 % HumanEval vs 83,2 %)', 'Texte chinois : Qwen2.5 — tokenisation native, 30–40 % plus efficace sur le CJK', 'Raisonnement : les distillats DeepSeek-R1 produisent des chaînes de pensée par défaut', 'Conformité RGPD : les deux fonctionnent entièrement localement — aucun transfert de données'] },
      benchmarkTable: { id: 'benchmark-table', title: 'Tableau de benchmarks direct', content: 'Tous les scores en quantisation Q4_K_M.', tableData: { columns: ['Modèle', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Vitesse'], rows: [{ 'Modèle': 'Qwen2.5 7B', 'VRAM': '5,5 Go', 'MMLU (%)': '72,5', 'MATH-500 (%)': '62,5', 'HumanEval (%)': '74,6', 'Vitesse': '50–80 t/s' }, { 'Modèle': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5,5 Go', 'MMLU (%)': '70,1', 'MATH-500 (%)': '88,0', 'HumanEval (%)': '68,4', 'Vitesse': '50–80 t/s' }, { 'Modèle': 'Qwen2.5 32B', 'VRAM': '20,5 Go', 'MMLU (%)': '83,4', 'MATH-500 (%)': '90,3', 'HumanEval (%)': '91,5', 'Vitesse': '15–30 t/s' }, { 'Modèle': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20,5 Go', 'MMLU (%)': '80,6', 'MATH-500 (%)': '94,0', 'HumanEval (%)': '83,2', 'Vitesse': '15–30 t/s' }] } },
      hardwareTiers: { id: 'hardware-tiers', title: 'Quel modèle à quel niveau matériel', content: 'Les besoins VRAM sont identiques entre les deux familles. Le choix est une préférence de tâche.', items: ['**8 Go VRAM (RTX 3060 / M2 16 Go) :** Qwen2.5 7B pour le code ; DS-R1-Distill-Qwen-7B pour les maths', '**24 Go VRAM (RTX 4090 / M3 Max 48 Go) :** Qwen2.5-Coder 32B — meilleur modèle polyvalent', '**CPU uniquement (32+ Go RAM) :** Qwen2.5 7B ou DS-R1-Distill 7B — 3–8 t/s sur CPU moderne'] },
      deepseekModels: { id: 'deepseek-models', title: 'Modèles locaux DeepSeek expliqués', content: 'DeepSeek-R1 est un modèle MoE 671B nécessitant du matériel serveur. Pour usage local, les versions distillées sont l\'option pratique.', items: ['**DS-R1-Distill-Qwen-7B :** 5,5 Go VRAM. 88 % MATH-500 — meilleur modèle maths du tier 7B.', '**DS-R1-Distill-Qwen-32B :** 20,5 Go VRAM. 94 % MATH-500 — meilleur score maths parmi les modèles grand public.', 'Commande Ollama : `ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Modèles locaux Qwen2.5 expliqués', content: 'Qwen2.5 est la version d\'octobre 2025 d\'Alibaba. Tous les modèles de base utilisent un contexte de 128K tokens et une licence Apache 2.0.', items: ['**Qwen2.5 7B :** 5,5 Go VRAM. Meilleur polyvalent 7B pour le code et le texte chinois.', '**Qwen2.5-Coder 32B :** 20,5 Go VRAM. 91,5 % HumanEval — meilleur modèle de code pour matériel grand public.', 'Commande Ollama : `ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA', content: 'Les deux familles fonctionnent bien sur Apple Silicon via Ollama avec accélération Metal.', tableData: { columns: ['Matériel', 'Meilleur tier', 'Vitesse (7B)', 'Vitesse (32B)'], rows: [{ 'Matériel': 'M2/M3 16 Go', 'Meilleur tier': '7B uniquement', 'Vitesse (7B)': '30–50 t/s', 'Vitesse (32B)': 'N/A' }, { 'Matériel': 'M3 Max 48 Go', 'Meilleur tier': '32B confortablement', 'Vitesse (7B)': '80–120 t/s', 'Vitesse (32B)': '15–25 t/s' }, { 'Matériel': 'RTX 4090 24 Go', 'Meilleur tier': '32B', 'Vitesse (7B)': '100–150 t/s', 'Vitesse (32B)': '18–28 t/s' }] } },
      useCaseVerdicts: { id: 'use-case-verdicts', title: 'Verdicts par cas d\'usage', content: 'Réponse en une phrase pour chaque usage courant :', items: ['**Maths / cours particuliers :** DS-R1-Distill-Qwen-7B — 88 % MATH-500 vs 62,5 % pour Qwen2.5 7B', '**Génération / révision de code :** Qwen2.5-Coder 32B — 91,5 % HumanEval', '**Chat en chinois :** Qwen2.5 7B — tokenisation CJK native, 30–40 % plus efficace', '**Conformité RGPD :** les deux options — exécution 100 % locale, pas de transfert de données'] },
      faqSection: { id: 'faq', title: 'FAQ', faqs: [
        { q: 'DeepSeek-R1 est-il identique aux modèles distillés ?', a: 'Non. DeepSeek-R1 est le modèle MoE 671B. Les versions distillées (7B, 14B, 32B) sont des modèles denses séparés, pratiques pour usage local.' },
        { q: 'DeepSeek et Qwen nécessitent-ils la même VRAM ?', a: 'Oui, à quantisation équivalente. Les deux modèles 7B nécessitent environ 5,5 Go en Q4_K_M ; les 32B nécessitent 20,5 Go.' },
        { q: 'Lequel est le mieux pour le texte chinois ?', a: 'Qwen2.5 est nettement meilleur. Il utilise un tokeniseur chinois natif, 30–40 % plus efficace sur le texte CJK.' },
        { q: 'Ces modèles sont-ils conformes au RGPD ?', a: 'En exécution locale, aucune donnée ne quitte votre matériel. Cela simplifie considérablement la documentation RGPD : pas de DPA requis avec des fournisseurs externes. Consultez un juriste pour votre situation spécifique.' },
      ] },
      relatedReading: { id: 'related-reading', title: 'Lectures connexes', items: ['[Guide de déploiement local Qwen 2026](/local-llms/qwen-local-deployment-guide-2026?lang=fr) — Tableau matériel complet', '[Guide d\'achat GPU pour LLM locaux 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=fr)', '[Qwen vs Llama vs Mistral 2026](/local-llms/qwen-vs-llama-vs-mistral?lang=fr)'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen : Comparaison LLM local 2026', description: 'DeepSeek-R1 distillé vs Qwen2.5 local : VRAM, MMLU, MATH-500, HumanEval. Quel modèle à quel niveau matériel.', url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026?lang=fr', inLanguage: 'fr', author: { '@type': 'Person', name: 'Hans Kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen2.5' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'fr', mainEntity: [{ '@type': 'Question', name: 'DeepSeek et Qwen nécessitent-ils la même VRAM ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, à quantisation équivalente. Les deux 7B nécessitent 5,5 Go en Q4_K_M.' } }, { '@type': 'Question', name: 'Ces modèles sont-ils conformes au RGPD ?', acceptedAnswer: { '@type': 'Answer', text: 'En exécution locale, aucune donnée ne quitte votre matériel. Pas de DPA requis avec des fournisseurs externes.' } }] },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen：ローカルLLM比較 2026',
    seoTitle: 'DeepSeek vs Qwen ローカルLLM 2026：ベンチマーク & VRAM比較ガイド',
    intro:
      'DeepSeek-R1蒸留モデルとQwen2.5は、2026年のローカル展開における2大主要ファミリーです。同じパラメータ数では同一のVRAMを必要とし——7BのQ4_K_Mで5.5 GB——しかし最適化されている強みは正反対です。DeepSeek-R1蒸留は数学とステップバイステップ推論で優位；Qwen2.5はコーディングと中国語テキストで優位です。',
    metaDescription:
      'DeepSeek-R1蒸留 vs Qwen2.5ローカル：VRAM・MMLU・MATH-500・HumanEvalの直接比較。2026年における各ハードウェア層での最適モデル選択ガイド。',
    twitterDescription:
      'DeepSeek-R1蒸留 vs Qwen2.5：同じVRAM、異なる強み。数学→DeepSeek。コード→Qwen。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen ローカルLLM',
    targetKeywords: ['deepseek vs qwen ローカル 2026', 'deepseek r1蒸留 vs qwen2.5', 'ローカルllm 数学'],
    leadAnswerBlock:
      '**数学では、DeepSeek-R1-Distill-Qwen-32BがMATH-500 94%でQwen2.5 32B（90.3%）を上回ります。コーディングでは、Qwen2.5 32BがHumanEval 91.5%でDeepSeek蒸留（83.2%）を上回ります。両者は同じパラメータ数で同一のVRAMを必要とします。**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled. Code/Chinese: Qwen2.5.', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen2.5-Coder 32B'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1. Code: Qwen2.5.', bullets: ['Mathe: DeepSeek-R1', 'Code: Qwen2.5'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement ?', answer: 'Maths: DeepSeek-R1. Code: Qwen2.5.', bullets: ['Maths: DeepSeek-R1', 'Code: Qwen2.5'], updatedDate: '2026-05' },
      ja: { question: 'ローカルで優れているのはDeepSeekとQwenのどちら？', answer: '数学・推論ではDeepSeek-R1蒸留モデルが優れています（32B MATH-500 94%）。コーディングと中国語ではQwen2.5が優れています（32B HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）', 'コーディング: Qwen2.5-Coder 32B（HumanEval 91.5%）', '中国語テキスト: Qwen2.5（ネイティブトークナイゼーション）', '同じVRAM：どちらの7Bモデルも5.5 GBが必要'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学：DeepSeek-R1蒸馏。编程：Qwen2.5。', bullets: ['数学: DeepSeek-R1', '编程: Qwen2.5'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'まとめ', anchor: 'tldr' },
      { label: 'ベンチマーク表', anchor: 'benchmark-table' },
      { label: 'ハードウェア層別ガイド', anchor: 'hardware-tiers' },
      { label: 'DeepSeekモデル解説', anchor: 'deepseek-models' },
      { label: 'Qwen2.5モデル解説', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'ユースケース別判定', anchor: 'use-case-verdicts' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1蒸留は数学・推論で優位；Qwen2.5はコーディングと中国語テキストで優位——同じパラメータ数で同一のVRAMを必要とします。' },
      { type: 'plain-terms', content: 'DeepSeekは推論特化モデル（R1）を公開し、ローカル利用向けに小型の蒸留版を提供しています。Qwen2.5はアリババの汎用ファミリーです。どちらの7Bモデルも5.5 GBのVRAMに収まります。違いは得意分野：DeepSeekは数学が得意、Qwenはコーディングと中国語が得意です。' },
    ],
    sections: {
      tldr: { id: 'tldr', title: 'まとめ', isTldr: true, items: ['同じVRAM：どちらの7Bモデルも5.5 GB（Q4_K_M）；32Bは20.5 GB', '数学：DeepSeek-R1-Distill-Qwen-32Bが勝利（MATH-500 94% vs 90.3%）', 'コーディング：Qwen2.5-Coder 32Bが勝利（HumanEval 91.5% vs 83.2%）', '中国語：Qwen2.5が勝利——ネイティブCJKトークナイゼーション、30–40%効率向上', '推論チェーン：DeepSeek-R1蒸留はデフォルトで長い思考連鎖を生成'] },
      benchmarkTable: { id: 'benchmark-table', title: '直接ベンチマーク比較', content: 'すべてのスコアはQ4_K_M量子化での値。', tableData: { columns: ['モデル', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', '速度（tok/s）'], rows: [{ 'モデル': 'Qwen2.5 7B', 'VRAM': '5.5 GB', 'MMLU (%)': '72.5', 'MATH-500 (%)': '62.5', 'HumanEval (%)': '74.6', '速度（tok/s）': '50–80' }, { 'モデル': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5.5 GB', 'MMLU (%)': '70.1', 'MATH-500 (%)': '88.0', 'HumanEval (%)': '68.4', '速度（tok/s）': '50–80' }, { 'モデル': 'Qwen2.5 32B', 'VRAM': '20.5 GB', 'MMLU (%)': '83.4', 'MATH-500 (%)': '90.3', 'HumanEval (%)': '91.5', '速度（tok/s）': '15–30' }, { 'モデル': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20.5 GB', 'MMLU (%)': '80.6', 'MATH-500 (%)': '94.0', 'HumanEval (%)': '83.2', '速度（tok/s）': '15–30' }] } },
      hardwareTiers: { id: 'hardware-tiers', title: 'ハードウェア層別おすすめモデル', content: 'VRAM要件は両ファミリーで同一です。DeepSeekとQwenの選択はタスクの好みであり、ハードウェアの制約ではありません。', items: ['**8 GB VRAM（RTX 3060 / M2 16 GB）：** コーディング・チャットはQwen2.5 7B；数学tutoring はDS-R1-Distill-Qwen-7B', '**24 GB VRAM（RTX 4090 / M3 Max 48 GB）：** Qwen2.5-Coder 32B——このティアで最高の汎用モデル', '**CPUのみ（32+ GB RAM）：** Qwen2.5 7BまたはDS-R1-Distill 7B——3〜8 tok/sで動作'] },
      deepseekModels: { id: 'deepseek-models', title: 'DeepSeekローカルモデル解説', content: 'DeepSeek-R1は671B MoEモデルでサーバー用ハードウェアが必要です。ローカル利用には蒸留版が実用的な選択肢です。', items: ['**DS-R1-Distill-Qwen-7B：** 5.5 GB VRAM。MATH-500 88%——7Bティアで最強の数学モデル。', '**DS-R1-Distill-Qwen-32B：** 20.5 GB VRAM。MATH-500 94%——コンシューマー向けモデル中最高の数学スコア。', 'Ollamaコマンド：`ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Qwen2.5ローカルモデル解説', content: 'Qwen2.5はアリババの2025年10月リリースで、ベース・Coder・Vision-Languageバリアントをカバーします。', items: ['**Qwen2.5 7B：** 5.5 GB VRAM。コーディングと中国語テキストに最適な汎用7Bモデル。', '**Qwen2.5-Coder 32B：** 20.5 GB VRAM。HumanEval 91.5%——コンシューマー向けで最高のコーディングモデル。', 'Ollamaコマンド：`ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA', content: '両ファミリーともOllamaとMetal加速でApple Siliconで良好に動作します。', tableData: { columns: ['ハードウェア', '最適モデル層', '速度（7B）', '速度（32B）'], rows: [{ 'ハードウェア': 'M2/M3 16 GB', '最適モデル層': '7Bのみ', '速度（7B）': '30–50 tok/s', '速度（32B）': 'N/A' }, { 'ハードウェア': 'M3 Max 48 GB', '最適モデル層': '32B (快適)', '速度（7B）': '80–120 tok/s', '速度（32B）': '15–25 tok/s' }, { 'ハードウェア': 'RTX 4090 24 GB', '最適モデル層': '32B', '速度（7B）': '100–150 tok/s', '速度（32B）': '18–28 tok/s' }] } },
      useCaseVerdicts: { id: 'use-case-verdicts', title: 'ユースケース別判定', content: '各ユースケースに対する一文の回答：', items: ['**数学/家庭教師：** DS-R1-Distill-Qwen-7B——MATH-500 88% vs Qwen2.5 7Bの62.5%', '**コード生成・レビュー：** Qwen2.5-Coder 32B——HumanEval 91.5%', '**中国語チャット：** Qwen2.5 7B——ネイティブCJKトークナイゼーション', '**ステップバイステップ分析：** DS-R1-Distill-Qwen-14B——デフォルトで明示的な思考連鎖を生成'] },
      faqSection: { id: 'faq', title: 'よくある質問', faqs: [
        { q: 'DeepSeek-R1と蒸留モデルは同じですか？', a: 'いいえ。DeepSeek-R1は671B MoEモデルです。蒸留版（7B、14B、32B）はローカル利用のために訓練された別の高密度モデルです。' },
        { q: 'DeepSeekとQwenは同じVRAMを使いますか？', a: 'はい、同じ量子化レベルで。両方の7Bモデルは約5.5 GB（Q4_K_M）が必要；両方の32Bは20.5 GBが必要です。' },
        { q: '中国語テキストにはどちらが良いですか？', a: 'Qwen2.5が大幅に優れています。CJKテキストで30〜40%効率が高いネイティブ中国語トークナイザーを使用しています。' },
        { q: '8 GB VRAMで数学に最適なモデルは？', a: 'DeepSeek-R1-Distill-Qwen-7B。同じVRAMでMATH-500 88%（Qwen2.5 7Bは62.5%）を達成します。' },
        { q: 'METI AIガイドラインへの対応は？', a: 'ローカル実行では、データはお使いのハードウェア上のみで処理されます。METIのAI利活用ガイドラインにおけるデータ管理要件を満たしやすくなります。モデル名・バージョンの記録はどちらのモデルも同様に必要です。' },
      ] },
      relatedReading: { id: 'related-reading', title: '関連記事', items: ['[Qwenローカル展開ガイド 2026](/local-llms/qwen-local-deployment-guide-2026?lang=ja) — 全Qwen2.5バリアントのハードウェア表', '[ローカルLLM向けGPU購入ガイド 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=ja)', '[Qwen vs Llama vs Mistral 2026](/local-llms/qwen-vs-llama-vs-mistral?lang=ja)'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen：ローカルLLM比較 2026', description: 'DeepSeek-R1蒸留 vs Qwen2.5ローカル：VRAM・MMLU・MATH-500・HumanEvalの直接比較。', url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026?lang=ja', inLanguage: 'ja', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen2.5' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'ja', mainEntity: [{ '@type': 'Question', name: 'DeepSeekとQwenは同じVRAMを使いますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。両方の7Bモデルは約5.5 GB（Q4_K_M）が必要です。' } }, { '@type': 'Question', name: '中国語にはどちらが良い？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen2.5。ネイティブ中国語トークナイザーでCJKテキストを30〜40%効率よく処理します。' } }] },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen：本地LLM对比 2026',
    seoTitle: 'DeepSeek vs Qwen 本地LLM 2026：VRAM、MMLU基准测试与模型推荐对比',
    intro:
      'DeepSeek-R1蒸馏模型和Qwen2.5是2026年本地部署的两大主流系列。两者在同等参数规模下所需显存相同——7B Q4_K_M格式仅需5.5 GB——但各有专长。DeepSeek-R1蒸馏模型在数学和逐步推理方面占优；Qwen2.5在编程和中文文本处理方面占优。本文提供直接基准对比表、硬件配置建议和每种常见使用场景的一句话结论。',
    metaDescription:
      '通义千问与幻方深度求索本地大模型对比：二者在相同显存占用下性能各异——深度求索蒸馏版在数学推理上领先，通义千问在代码生成和中文任务上领先。含完整基准测试表格与硬件选型建议，2026年更新。',
    twitterDescription:
      'DeepSeek-R1蒸馏 vs Qwen2.5：显存相同，强项不同。数学→DeepSeek。编程→Qwen。',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen 本地LLM',
    targetKeywords: ['deepseek vs qwen 本地 2026', 'deepseek r1蒸馏 vs qwen2.5', '本地llm数学', 'qwen本地部署'],
    leadAnswerBlock:
      '**数学方面：DeepSeek-R1-Distill-Qwen-32B以MATH-500 94%击败Qwen2.5 32B（90.3%）。编程方面：Qwen2.5 32B以HumanEval 91.5%击败DeepSeek蒸馏（83.2%）。两者在同等参数规模下所需显存完全相同。**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled. Code/Chinese: Qwen2.5.', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen2.5-Coder 32B'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1. Code: Qwen2.5.', bullets: ['Mathe: DeepSeek-R1', 'Code: Qwen2.5'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement ?', answer: 'Maths: DeepSeek-R1. Code: Qwen2.5.', bullets: ['Maths: DeepSeek-R1', 'Code: Qwen2.5'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学：DeepSeek-R1。コード：Qwen2.5。', bullets: ['数学: DeepSeek-R1', 'コード: Qwen2.5'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学和推理：DeepSeek-R1蒸馏模型更强（32B MATH-500达94%）。编程和中文文本：Qwen2.5更强（32B HumanEval达91.5%）。同等参数量下两者所需硬件相同。', bullets: ['数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）', '编程：Qwen2.5-Coder 32B（HumanEval 91.5%）', '中文文本：Qwen2.5（原生分词，效率提升30–40%）', '显存相同：两款7B模型Q4_K_M均需5.5 GB', '符合《数据安全法》：本地运行，数据不出设备'], updatedDate: '2026-05' },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '基准对比表', anchor: 'benchmark-table' },
      { label: '硬件配置建议', anchor: 'hardware-tiers' },
      { label: 'DeepSeek模型解析', anchor: 'deepseek-models' },
      { label: 'Qwen2.5模型解析', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: '使用场景结论', anchor: 'use-case-verdicts' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1蒸馏在数学推理上占优；Qwen2.5在编程和中文文本上占优——两者在同等参数规模下所需显存完全相同。' },
      { type: 'plain-terms', content: 'DeepSeek发布了推理专用模型（R1），并提供了适合本地使用的小型蒸馏版本。Qwen2.5是阿里巴巴的通用系列。两款7B模型均可在5.5 GB显存中运行。区别在于强项：DeepSeek擅长数学，Qwen擅长编程和中文。' },
    ],
    sections: {
      tldr: { id: 'tldr', title: '摘要', isTldr: true, items: ['显存相同：两款7B模型Q4_K_M均需5.5 GB；两款32B均需20.5 GB', '数学：DeepSeek-R1-Distill-Qwen-32B胜出（MATH-500 94% vs 90.3%）', '编程：Qwen2.5-Coder 32B胜出（HumanEval 91.5% vs 83.2%）', '中文文本：Qwen2.5胜出——原生分词，CJK文本效率提升30–40%', '逐步推理：DeepSeek-R1蒸馏默认生成长思维链', '符合《数据安全法》：本地运行，数据不出设备，满足数据驻留要求'] },
      benchmarkTable: { id: 'benchmark-table', title: '基准测试直接对比', content: '所有分数均为Q4_K_M量化格式，速度在NVIDIA RTX 4090（24 GB显存）上测试。', tableData: { columns: ['模型', '显存', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', '速度（词元/秒）'], rows: [{ '模型': 'Qwen2.5 7B', '显存': '5.5 GB', 'MMLU (%)': '72.5', 'MATH-500 (%)': '62.5', 'HumanEval (%)': '74.6', '速度（词元/秒）': '50–80' }, { '模型': 'DS-R1蒸馏-Qwen 7B', '显存': '5.5 GB', 'MMLU (%)': '70.1', 'MATH-500 (%)': '88.0', 'HumanEval (%)': '68.4', '速度（词元/秒）': '50–80' }, { '模型': 'Qwen2.5 14B', '显存': '9.5 GB', 'MMLU (%)': '79.2', 'MATH-500 (%)': '76.1', 'HumanEval (%)': '82.1', '速度（词元/秒）': '30–50' }, { '模型': 'DS-R1蒸馏-Qwen 14B', '显存': '9.5 GB', 'MMLU (%)': '75.8', 'MATH-500 (%)': '90.0', 'HumanEval (%)': '75.5', '速度（词元/秒）': '30–50' }, { '模型': 'Qwen2.5 32B', '显存': '20.5 GB', 'MMLU (%)': '83.4', 'MATH-500 (%)': '90.3', 'HumanEval (%)': '91.5', '速度（词元/秒）': '15–30' }, { '模型': 'DS-R1蒸馏-Qwen 32B', '显存': '20.5 GB', 'MMLU (%)': '80.6', 'MATH-500 (%)': '94.0', 'HumanEval (%)': '83.2', '速度（词元/秒）': '15–30' }] } },
      hardwareTiers: { id: 'hardware-tiers', title: '各硬件配置推荐模型', content: '两个系列在相同参数量下显存需求相同。选择DeepSeek还是Qwen取决于任务需求，而非硬件限制。', items: ['**8 GB显存（RTX 3060 / M2 16 GB统一内存）：** 编程/聊天选Qwen2.5 7B；数学辅导选DS-R1蒸馏-Qwen-7B', '**12 GB显存（RTX 3080 / M2 Pro 24 GB）：** 通用任务选Qwen2.5 14B；推理链选DS-R1蒸馏-Qwen-14B', '**24 GB显存（RTX 4090 / M3 Max 48 GB）：** Qwen2.5-Coder 32B——此配置下最佳全能模型', '**48 GB+（M2/M3 Ultra / 双RTX 4090）：** Qwen2.5 72B（MMLU 86.1%，HumanEval 97%）', '**仅CPU（32+ GB内存）：** Qwen2.5 7B或DS-R1蒸馏 7B——现代笔记本CPU上速度3–8词元/秒'] },
      deepseekModels: { id: 'deepseek-models', title: 'DeepSeek本地模型解析', content: 'DeepSeek-R1是671B MoE模型，需要服务器级硬件。本地使用的实用选择是蒸馏版本。', items: ['**DS-R1蒸馏-Qwen-7B：** 5.5 GB显存。MATH-500 88%——7B层级中最强的数学模型。', '**DS-R1蒸馏-Qwen-14B：** 9.5 GB显存。14B层级中最佳的推理效率。', '**DS-R1蒸馏-Qwen-32B：** 20.5 GB显存。所有消费级模型中最高的MATH-500分数（94%）。', '**DeepSeek-V3（完整版）：** 671B MoE——Q4格式需400+ GB内存——不适合消费硬件。', 'Ollama命令：`ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Qwen2.5本地模型解析', content: 'Qwen2.5是阿里巴巴2025年10月发布的系列，涵盖基础版、Coder和视觉语言变体。所有基础模型使用128K上下文窗口和Apache 2.0许可证。', items: ['**Qwen2.5 7B：** 5.5 GB显存。编程和中文文本的最佳通用7B模型。', '**Qwen2.5 14B：** 9.5 GB显存。12 GB显存配置下质量与速度的最佳平衡点。', '**Qwen2.5 32B：** 20.5 GB显存。HumanEval 91.5%——48 GB显存以下最佳编程基准分数。', '**Qwen2.5-Coder 32B：** 显存需求与32B基础版相同，专门针对代码生成进行微调。', 'Ollama命令：`ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA：运行两个系列', content: '两个模型系列均可通过Ollama和Metal加速在Apple Silicon上良好运行。', tableData: { columns: ['硬件', '最佳模型层级', '速度（7B）', '速度（32B）', '备注'], rows: [{ '硬件': 'M2/M3 16 GB统一内存', '最佳模型层级': '仅7B', '速度（7B）': '30–50词元/秒', '速度（32B）': 'N/A', '备注': '两款7B模型均可运行' }, { '硬件': 'M3 Max 48 GB', '最佳模型层级': '32B（流畅）', '速度（7B）': '80–120词元/秒', '速度（32B）': '15–25词元/秒', '备注': '最佳消费级Apple Silicon运行32B' }, { '硬件': 'RTX 4090 24 GB', '最佳模型层级': '32B', '速度（7B）': '100–150词元/秒', '速度（32B）': '18–28词元/秒', '备注': '最佳单GPU运行32B' }] } },
      useCaseVerdicts: { id: 'use-case-verdicts', title: '使用场景结论', content: '针对每种常见本地LLM使用场景的一句话结论：', items: ['**数学/辅导：** DS-R1蒸馏-Qwen-7B——MATH-500 88%，远超Qwen2.5 7B（62.5%），显存需求相同', '**代码生成/审查：** Qwen2.5-Coder 32B——HumanEval 91.5%，消费级最高分', '**中文对话：** Qwen2.5 7B——原生CJK分词，效率提升30–40%', '**逐步分析推理：** DS-R1蒸馏-Qwen-14B——默认生成明确的思维链', '**通用日常助手（8 GB显存）：** Qwen2.5 7B——对话更流畅，避免DeepSeek在简单任务中的过度推理', '**企业合规部署（中国）：** Qwen2.5——Apache 2.0许可，阿里巴巴出品，更易满足CAC合规文档要求'] },
      faqSection: { id: 'faq', title: '常见问题', faqs: [
        { q: 'DeepSeek-R1和蒸馏模型是同一个吗？', a: '不是。DeepSeek-R1是671B MoE模型，需要服务器级硬件。蒸馏版本（7B、14B、32B）是独立的密集型模型，专为本地使用设计。' },
        { q: 'DeepSeek和Qwen显存需求相同吗？', a: '是的，在相同量化级别下。两款7B模型Q4_K_M格式约需5.5 GB；两款32B模型均需20.5 GB。' },
        { q: '中文文本哪个更好：DeepSeek还是Qwen？', a: 'Qwen2.5明显更好。它使用专为中文设计的分词器，处理CJK文本效率提升30–40%。' },
        { q: '8 GB显存下哪个模型最适合数学？', a: 'DeepSeek-R1蒸馏-Qwen-7B。相同显存下MATH-500达88%，远超Qwen2.5 7B的62.5%。' },
        { q: '本地运行是否符合中国《数据安全法》？', a: '本地推理意味着数据始终留在您的硬件上，无论模型来自哪家公司，均满足《数据安全法》的数据驻留要求。DeepSeek和Qwen本地运行均符合此要求。' },
        { q: 'DeepSeek-V3可以在本地运行吗？', a: '实际上不行，因为完整的DeepSeek-V3是671B MoE模型，Q4格式需要约400 GB内存，仅服务器级硬件可用。请改用蒸馏版本（7B/14B/32B）。' },
      ] },
      relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[Qwen本地部署指南 2026](/local-llms/qwen-local-deployment-guide-2026?lang=zh) — 所有Qwen2.5变体的完整硬件表', '[本地LLM显卡选购指南 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026?lang=zh) — RTX 4060 vs 4070 vs 4090对比', '[Qwen vs Llama vs Mistral 2026](/local-llms/qwen-vs-llama-vs-mistral?lang=zh) — 三方对比'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen：本地LLM对比 2026', description: 'DeepSeek-R1蒸馏 vs Qwen2.5本地部署：显存、MMLU、MATH-500、HumanEval基准直接对比，附各硬件配置推荐模型。', url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026?lang=zh', inLanguage: 'zh', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen2.5' }, { '@type': 'Thing', name: '本地LLM' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'zh', mainEntity: [{ '@type': 'Question', name: 'DeepSeek和Qwen显存需求相同吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。两款7B模型Q4_K_M均需约5.5 GB；两款32B均需20.5 GB。' } }, { '@type': 'Question', name: '本地运行是否符合中国《数据安全法》？', acceptedAnswer: { '@type': 'Answer', text: '本地推理意味着数据始终留在您的硬件上，满足《数据安全法》的数据驻留要求。' } }, { '@type': 'Question', name: 'DeepSeek-V3可以在本地运行吗？', acceptedAnswer: { '@type': 'Answer', text: '实际上不行。完整的DeepSeek-V3是671B MoE模型，Q4格式需约400 GB内存。请改用蒸馏版本。' } }] },
  },
}
