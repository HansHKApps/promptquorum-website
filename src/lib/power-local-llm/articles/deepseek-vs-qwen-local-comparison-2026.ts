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
      'DeepSeek-R1 distilled models and Qwen3 are the two dominant families for local deployment in 2026. Both share the same VRAM footprint at equivalent parameter counts — 5.5 GB for 7B at Q4_K_M — but they are optimised for opposite strengths. DeepSeek-R1 distilled models lead on math and step-by-step reasoning; Qwen3 leads on coding and Chinese-language tasks. This guide gives you a direct benchmark table, a hardware-tier breakdown, and a one-sentence verdict for each common use case.',
    metaDescription:
      'DeepSeek-R1 distilled vs Qwen3 local LLMs: side-by-side VRAM, MMLU, MATH-500, HumanEval benchmarks. Which model to run at each hardware tier in 2026.',
    twitterDescription:
      'DeepSeek-R1 distilled vs Qwen3: same VRAM, different strengths. Math → DeepSeek. Code → Qwen. Full benchmark table inside.',
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
      '**For math and step-by-step reasoning, DeepSeek-R1-Distill-Qwen-32B scores 94% on MATH-500 vs 90.3% for Qwen3 32B. For coding and Chinese text, Qwen3 32B scores 91.5% HumanEval vs 83% for the DeepSeek distill. Both require identical VRAM at the same parameter count.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer:
          'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen3 is stronger (91.5% HumanEval at 32B). Both families run on identical hardware at equivalent parameter counts.',
        bullets: [
          'Math / reasoning: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Coding: Qwen3-Coder 32B (91.5% HumanEval)',
          'Chinese text: Qwen3 7B–72B (native tokenisation)',
          'Same VRAM: both 7B models need 5.5 GB at Q4_K_M',
          'Apple Silicon: both run well on M-series unified memory',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer:
          'Für Mathematik und Schlussfolgern sind DeepSeek-R1-destillierte Modelle stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen3 stärker (91,5 % HumanEval bei 32B). Beide Familien laufen bei gleicher Parameterzahl auf identischer Hardware.',
        bullets: [
          'Mathematik/Schlussfolgern: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Programmierung: Qwen3-Coder 32B (91,5 % HumanEval)',
          'Chinesischer Text: Qwen3 7B–72B (natives Tokenisierung)',
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?',
        answer:
          'Pour les mathématiques et le raisonnement, les modèles distillés DeepSeek-R1 sont plus forts (94 % MATH-500 à 32B). Pour le code et le texte chinois, Qwen3 est plus fort (91,5 % HumanEval à 32B). Les deux familles fonctionnent sur le même matériel à nombre de paramètres équivalent.',
        bullets: [
          'Maths / raisonnement : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Code : Qwen3-Coder 32B (91,5 % HumanEval)',
          'Texte chinois : Qwen3 7B–72B (tokenisation native)',
          'Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルで優れているのはDeepSeekとQwenのどちら？',
        answer:
          '数学・推論タスクではDeepSeek-R1蒸留モデルが優れています（32BでMATH-500 94%）。コーディングと中国語テキストではQwen3が優れています（32BでHumanEval 91.5%）。同じパラメータ数なら両ファミリーに同じハードウェアが必要です。',
        bullets: [
          '数学・推論：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          'コーディング：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中国語テキスト：Qwen3 7B〜72B（ネイティブトークナイゼーション）',
          '同じVRAM：両7BモデルともQ4_K_Mで5.5 GBが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'DeepSeek 和 Qwen 哪个本地运行更好？',
        answer:
          '数学和推理任务：DeepSeek-R1 蒸馏模型更强（32B MATH-500 达94%）。编程和中文文本：Qwen3 更强（32B HumanEval 达91.5%）。同等参数量下两者所需硬件相同。',
        bullets: [
          '数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          '编程：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中文文本：Qwen3 7B–72B（原生分词）',
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
      { label: 'Qwen3 Models Explained', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Use Case Verdicts', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        content:
          'DeepSeek-R1 distilled models lead on math and reasoning; Qwen3 leads on coding and Chinese text — both require the same VRAM at equivalent parameter counts.',
      },
      {
        type: 'plain-terms',
        content:
          'DeepSeek released a reasoning-focused model family (R1) and made smaller distilled versions available for local use. Qwen3 is Alibaba\'s general-purpose family. At 7B parameters, both fit in 5.5 GB VRAM. The difference is what they are good at: DeepSeek is better at math; Qwen is better at writing code and understanding Chinese.',
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
          'Code: Qwen3-Coder 32B wins (91.5% HumanEval vs 83%)',
          'Chinese: Qwen3 wins — native tokenisation, 30–40% more efficient on CJK text',
          'Reasoning chains: DeepSeek-R1 distills produce long chain-of-thought by default',
          'General chat: Qwen3 14B is slightly more fluent; DeepSeek 14B distill tends to over-reason',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Side-by-Side Benchmark Table',
        content:
          'All scores at Q4_K_M quantization. Speed measured on NVIDIA RTX 4090 (24 GB VRAM) for GPU rows and Apple M3 Max 48 GB for Mac rows.',
        columns: ['Model', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Speed (tok/s)'],
        rows: [
          {
            'Model': 'Qwen3 7B',
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
            'Model': 'Qwen3 14B',
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
            'Model': 'Qwen3 32B',
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
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Which Model to Run at Each Hardware Tier',
        content:
          'VRAM requirements are identical between the two families at each parameter size. The choice between DeepSeek and Qwen is a task preference, not a hardware constraint.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen3 7B for coding/chat; DS-R1-Distill-Qwen-7B for math tutoring',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen3 14B for general use; DS-R1-Distill-Qwen-14B for reasoning chains',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen3-Coder 32B or Qwen3 32B — best all-round local model in this tier',
          '**48 GB+ (M2/M3 Ultra / dual RTX 4090):** Qwen3 72B (86.1% MMLU, 97% HumanEval) — near GPT-4 class',
          '**CPU-only (32+ GB RAM):** Qwen3 7B or DS-R1-Distill 7B — both run at 3–8 tok/s on modern laptop CPUs',
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
        title: 'Qwen3 Local Models Explained',
        content:
          'Qwen3 is Alibaba\'s October 2025 release covering base, Coder, and Vision-Language variants. All base models use a 128K context window and Apache 2.0 license.',
        items: [
          '**Qwen3 7B:** 5.5 GB VRAM. Best general-purpose 7B for coding and Chinese text. 74.6% HumanEval outperforms every 7B competitor on code.',
          '**Qwen3 14B:** 9.5 GB VRAM. The sweet spot for balanced quality vs speed. 82.1% HumanEval, 79.2% MMLU. Best choice for most 12 GB VRAM setups.',
          '**Qwen3 32B:** 20.5 GB VRAM. 91.5% HumanEval — best coding benchmark score under 48 GB VRAM.',
          '**Qwen3-Coder 32B:** Same VRAM as base 32B, fine-tuned specifically for code generation and review. Use instead of base when coding is the primary task.',
          '**Qwen3 72B:** 46 GB VRAM. 86.1% MMLU, 97% HumanEval. Only runs on 48+ GB unified memory (M2/M3 Ultra) or multi-GPU setups.',
          'Ollama command: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: Running Both Families',
        content:
          'Both DeepSeek distills and Qwen3 run well on Apple Silicon via Ollama or llama.cpp with Metal acceleration. The key difference is memory bandwidth.',
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
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Use Case Verdicts',
        content: 'One-sentence answer for each common local-LLM use case:',
        items: [
          '**Math homework / tutoring:** DS-R1-Distill-Qwen-7B — 88% MATH-500 outperforms Qwen3 7B (62.5%) at the same VRAM',
          '**Code generation / review:** Qwen3-Coder 32B — 91.5% HumanEval, the highest of any consumer-runnable model',
          '**Chinese-language chat:** Qwen3 7B — native CJK tokenisation, 30–40% more token-efficient on Chinese text',
          '**Step-by-step analysis / reasoning chains:** DS-R1-Distill-Qwen-14B — produces explicit chain-of-thought by default',
          '**General daily assistant (8 GB VRAM):** Qwen3 7B — more fluent conversation, avoids DeepSeek\'s over-reasoning on simple tasks',
          '**Private enterprise deployment (China):** Qwen3 — Apache 2.0 license, Alibaba provenance simplifies CAC compliance documentation',
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
            a: 'Qwen3 is significantly better for Chinese text. It uses a purpose-built Chinese tokeniser that is 30–40% more efficient on CJK text. The DeepSeek-R1 distilled models are built on Qwen3 weights, so they also inherit reasonable Chinese support, but the base Qwen3 models are the primary choice.',
          },
          {
            q: 'Which model should I use for math on 8 GB VRAM?',
            a: 'DeepSeek-R1-Distill-Qwen-7B. It scores 88% on MATH-500 vs 62.5% for Qwen3 7B — a 25-point gap — at identical VRAM usage.',
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
          '[Qwen Local Deployment Guide 2026](/local-llms/qwen-local-deployment-guide-2026) — Full hardware tier table for all Qwen3 variants',
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
        'DeepSeek-R1 distilled vs Qwen3 local LLMs: side-by-side VRAM, MMLU, MATH-500, HumanEval benchmarks. Which model to run at each hardware tier in 2026.',
      url: 'https://www.promptquorum.com/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen3' },
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
        { '@type': 'Question', name: 'Which is better for Chinese text: DeepSeek or Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 is significantly better. It uses a purpose-built Chinese tokeniser that is 30–40% more efficient on CJK text.' } },
        { '@type': 'Question', name: 'Which model for math on 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. It scores 88% MATH-500 vs 62.5% for Qwen3 7B at identical VRAM.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen: Comparativa de LLM local 2026',
    seoTitle: 'DeepSeek vs Qwen LLM local 2026: Benchmarks y VRAM',
    intro:
      'Los modelos destilados de DeepSeek-R1 y Qwen3 son las dos familias dominantes para despliegue local en 2026. Ambas requieren el mismo VRAM con igual número de parámetros — 5,5 GB para 7B en Q4_K_M — pero están optimizadas para fortalezas opuestas. Los destilados de DeepSeek-R1 lideran en matemáticas y razonamiento paso a paso; Qwen3 lidera en programación y tareas con texto en chino. Esta guía ofrece una tabla de benchmarks directa, un desglose por nivel de hardware y un veredicto en una frase para cada caso de uso habitual.',
    metaDescription:
      'DeepSeek-R1 destilado vs Qwen3 LLM local: comparativa directa de VRAM, MMLU, MATH-500 y HumanEval. Qué modelo ejecutar en cada nivel de hardware en 2026.',
    twitterDescription:
      'DeepSeek-R1 destilado vs Qwen3: mismo VRAM, distintas fortalezas. Matemáticas → DeepSeek. Código → Qwen. Tabla de benchmarks completa.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen LLM local',
    targetKeywords: [
      'deepseek vs qwen llm local 2026',
      'deepseek r1 destilado vs qwen2.5',
      'mejor llm local para matemáticas',
      'qwen2.5 vs deepseek benchmark',
      'deepseek requisitos hardware local',
    ],
    leadAnswerBlock:
      '**Para matemáticas y razonamiento paso a paso, DeepSeek-R1-Distill-Qwen-32B obtiene un 94% en MATH-500 frente al 90,3% de Qwen3 32B. Para programación y texto en chino, Qwen3 32B logra un 91,5% en HumanEval frente al 83% del destilado DeepSeek. Ambos requieren VRAM idéntico con el mismo número de parámetros.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer:
          'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen3 is stronger (91.5% HumanEval at 32B). Both families run on identical hardware at equivalent parameter counts.',
        bullets: [
          'Math / reasoning: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Coding: Qwen3-Coder 32B (91.5% HumanEval)',
          'Chinese text: Qwen3 7B–72B (native tokenisation)',
          'Same VRAM: both 7B models need 5.5 GB at Q4_K_M',
          'Apple Silicon: both run well on M-series unified memory',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer:
          'Für Mathematik und Schlussfolgern sind DeepSeek-R1-destillierte Modelle stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen3 stärker (91,5 % HumanEval bei 32B).',
        bullets: [
          'Mathematik/Schlussfolgern: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Programmierung: Qwen3-Coder 32B (91,5 % HumanEval)',
          'Chinesischer Text: Qwen3 7B–72B (natives Tokenisierung)',
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?',
        answer:
          'Pour les mathématiques et le raisonnement, les modèles distillés DeepSeek-R1 sont plus forts (94 % MATH-500 à 32B). Pour le code et le texte chinois, Qwen3 est plus fort (91,5 % HumanEval à 32B).',
        bullets: [
          'Maths / raisonnement : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Code : Qwen3-Coder 32B (91,5 % HumanEval)',
          'Texte chinois : Qwen3 7B–72B (tokenisation native)',
          'Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルで優れているのはDeepSeekとQwenのどちら？',
        answer:
          '数学・推論タスクではDeepSeek-R1蒸留モデルが優れています（32BでMATH-500 94%）。コーディングと中国語テキストではQwen3が優れています（32BでHumanEval 91.5%）。',
        bullets: [
          '数学・推論：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          'コーディング：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中国語テキスト：Qwen3 7B〜72B（ネイティブトークナイゼーション）',
          '同じVRAM：両7BモデルともQ4_K_Mで5.5 GBが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'DeepSeek 和 Qwen 哪个本地运行更好？',
        answer:
          '数学和推理任务：DeepSeek-R1 蒸馏模型更强（32B MATH-500 达94%）。编程和中文文本：Qwen3 更强（32B HumanEval 达91.5%）。同等参数量下两者所需硬件相同。',
        bullets: [
          '数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          '编程：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中文文本：Qwen3 7B–72B（原生分词）',
          '相同显存：两款7B模型Q4_K_M均需5.5 GB',
        ],
        updatedDate: '2026-05',
      },
      es: {
        question: '¿Cuál es mejor para uso local: DeepSeek o Qwen?',
        answer:
          'Para matemáticas y razonamiento, los modelos destilados de DeepSeek-R1 son más potentes (94% MATH-500 en 32B). Para programación y texto en chino, Qwen3 es más potente (91,5% HumanEval en 32B). Ambas familias funcionan en hardware idéntico con el mismo número de parámetros.',
        bullets: [
          'Matemáticas / razonamiento: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Programación: Qwen3-Coder 32B (91,5% HumanEval)',
          'Texto en chino: Qwen3 7B–72B (tokenización nativa)',
          'Mismo VRAM: ambos modelos 7B necesitan 5,5 GB en Q4_K_M',
          'Apple Silicon: ambos funcionan bien con memoria unificada de la serie M',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: 'tldr' },
      { label: 'Tabla de benchmarks', anchor: 'benchmark-table' },
      { label: 'Niveles de hardware', anchor: 'hardware-tiers' },
      { label: 'Modelos DeepSeek explicados', anchor: 'deepseek-models' },
      { label: 'Modelos Qwen3 explicados', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Veredictos por caso de uso', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        content:
          'Los modelos destilados de DeepSeek-R1 lideran en matemáticas y razonamiento; Qwen3 lidera en programación y texto en chino — ambos requieren el mismo VRAM con igual número de parámetros.',
      },
      {
        type: 'plain-terms',
        content:
          'DeepSeek publicó una familia de modelos enfocada en razonamiento (R1) y puso a disposición versiones destiladas más pequeñas para uso local. Qwen3 es la familia de propósito general de Alibaba. Con 7B parámetros, ambos caben en 5,5 GB de VRAM. La diferencia está en sus fortalezas: DeepSeek es mejor en matemáticas; Qwen es mejor escribiendo código y entendiendo texto en chino.',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Puntos clave',
        isTldr: true,
        items: [
          'Mismo VRAM: ambos modelos 7B necesitan 5,5 GB en Q4_K_M; ambos 32B necesitan 20,5 GB',
          'Matemáticas: DeepSeek-R1-Distill-Qwen-32B gana (94% MATH-500 vs 90,3%)',
          'Programación: Qwen3-Coder 32B gana (91,5% HumanEval vs 83%)',
          'Texto en chino: Qwen3 gana — tokenización nativa, 30–40% más eficiente en texto CJK',
          'Cadenas de razonamiento: los destilados DeepSeek-R1 producen cadenas de pensamiento largas por defecto',
          'Asistente general: Qwen3 14B es algo más fluido; el destilado DeepSeek 14B tiende a razonar en exceso',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabla de benchmarks comparativa',
        content:
          'Todos los resultados con cuantización Q4_K_M. Velocidad medida en NVIDIA RTX 4090 (24 GB VRAM) para filas GPU y Apple M3 Max 48 GB para filas Mac.',
        columns: ['Modelo', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Velocidad (tok/s)'],
        rows: [
          {
            'Modelo': 'Qwen3 7B',
            'VRAM': '5,5 GB',
            'MMLU (%)': '72,5',
            'MATH-500 (%)': '62,5',
            'HumanEval (%)': '74,6',
            'Velocidad (tok/s)': '50–80',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 7B',
            'VRAM': '5,5 GB',
            'MMLU (%)': '70,1',
            'MATH-500 (%)': '88,0',
            'HumanEval (%)': '68,4',
            'Velocidad (tok/s)': '50–80',
          },
          {
            'Modelo': 'Qwen3 14B',
            'VRAM': '9,5 GB',
            'MMLU (%)': '79,2',
            'MATH-500 (%)': '76,1',
            'HumanEval (%)': '82,1',
            'Velocidad (tok/s)': '30–50',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 14B',
            'VRAM': '9,5 GB',
            'MMLU (%)': '75,8',
            'MATH-500 (%)': '90,0',
            'HumanEval (%)': '75,5',
            'Velocidad (tok/s)': '30–50',
          },
          {
            'Modelo': 'Qwen3 32B',
            'VRAM': '20,5 GB',
            'MMLU (%)': '83,4',
            'MATH-500 (%)': '90,3',
            'HumanEval (%)': '91,5',
            'Velocidad (tok/s)': '15–30',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 32B',
            'VRAM': '20,5 GB',
            'MMLU (%)': '80,6',
            'MATH-500 (%)': '94,0',
            'HumanEval (%)': '83,2',
            'Velocidad (tok/s)': '15–30',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Qué modelo ejecutar en cada nivel de hardware',
        content:
          'Los requisitos de VRAM son idénticos entre ambas familias para cada tamaño de parámetros. La elección entre DeepSeek y Qwen es una preferencia de tarea, no una restricción de hardware.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen3 7B para programación/chat; DS-R1-Distill-Qwen-7B para tutoría matemática',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen3 14B para uso general; DS-R1-Distill-Qwen-14B para cadenas de razonamiento',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen3-Coder 32B o Qwen3 32B — el mejor modelo local de propósito general en este nivel',
          '**48 GB+ (M2/M3 Ultra / RTX 4090 dual):** Qwen3 72B (86,1% MMLU, 97% HumanEval) — casi al nivel de GPT-4',
          '**Solo CPU (32+ GB RAM):** Qwen3 7B o DS-R1-Distill 7B — ambos funcionan a 3–8 tok/s en CPUs de portátiles modernos',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'Modelos locales de DeepSeek explicados',
        content:
          'DeepSeek publicó su modelo de razonamiento R1 como una arquitectura MoE (mezcla de expertos) de 671B que requiere hardware de nivel servidor. Para uso local en hardware de consumo, la opción práctica son las versiones destiladas — modelos densos más pequeños entrenados para replicar el razonamiento en cadena de R1.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** 5,5 GB VRAM en Q4_K_M. El modelo matemático más potente en el nivel 7B (88% MATH-500). Produce cadenas de razonamiento largas; desactiva la cadena de pensamiento mediante system prompt para chat más rápido.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9,5 GB VRAM. Mejor razonamiento por VRAM en el nivel 14B. Ideal para tutoría matemática, acertijos lógicos y tareas de análisis estructurado.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20,5 GB VRAM. La puntuación MATH-500 más alta de cualquier modelo ejecutable en hardware de consumo: 94%. Úsalo cuando la precisión matemática sea prioritaria sobre la programación.',
          '**DeepSeek-V3 (completo):** 671B MoE — más de 400 GB de RAM en Q4 — impracticable en hardware de consumo. Usa las versiones destiladas en su lugar.',
          'Comando Ollama: `ollama run deepseek-r1:7b` (usa el destilado Q4_K_M por defecto)',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'Modelos locales de Qwen3 explicados',
        content:
          'Qwen3 es el lanzamiento de Alibaba de octubre de 2025 que abarca variantes base, Coder y Vision-Language. Todos los modelos base utilizan una ventana de contexto de 128K y licencia Apache 2.0.',
        items: [
          '**Qwen3 7B:** 5,5 GB VRAM. El mejor 7B de propósito general para programación y texto en chino. Un 74,6% en HumanEval supera a todos los competidores 7B en código.',
          '**Qwen3 14B:** 9,5 GB VRAM. El punto óptimo entre calidad y velocidad. 82,1% HumanEval, 79,2% MMLU. La mejor opción para la mayoría de configuraciones con 12 GB VRAM.',
          '**Qwen3 32B:** 20,5 GB VRAM. 91,5% HumanEval — la mejor puntuación de benchmark de programación por debajo de 48 GB VRAM.',
          '**Qwen3-Coder 32B:** Mismo VRAM que el base 32B, ajustado específicamente para generación y revisión de código. Úsalo en lugar del base cuando la programación sea la tarea principal.',
          '**Qwen3 72B:** 46 GB VRAM. 86,1% MMLU, 97% HumanEval. Solo funciona en memoria unificada de 48+ GB (M2/M3 Ultra) o configuraciones multi-GPU.',
          'Comando Ollama: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: ejecutar ambas familias',
        content:
          'Tanto los destilados de DeepSeek como Qwen3 funcionan bien en Apple Silicon mediante Ollama o llama.cpp con aceleración Metal. La diferencia clave es el ancho de banda de memoria.',
        columns: ['Hardware', 'Mejor nivel de modelo', 'Velocidad (7B)', 'Velocidad (32B)', 'Notas'],
        rows: [
          {
            'Hardware': 'M2/M3 16 GB',
            'Mejor nivel de modelo': 'Solo 7B',
            'Velocidad (7B)': '30–50 tok/s',
            'Velocidad (32B)': 'N/A',
            'Notas': 'Ambos modelos 7B caben; 14B usa swap',
          },
          {
            'Hardware': 'M3 Pro 36 GB',
            'Mejor nivel de modelo': 'Punto óptimo 14B',
            'Velocidad (7B)': '60–90 tok/s',
            'Velocidad (32B)': 'N/A',
            'Notas': '14B a plena velocidad; 32B usa swap',
          },
          {
            'Hardware': 'M3 Max 48 GB',
            'Mejor nivel de modelo': '32B cómodamente',
            'Velocidad (7B)': '80–120 tok/s',
            'Velocidad (32B)': '15–25 tok/s',
            'Notas': 'El mejor Apple de consumo para 32B',
          },
          {
            'Hardware': 'RTX 4060 8 GB',
            'Mejor nivel de modelo': 'Solo 7B',
            'Velocidad (7B)': '50–80 tok/s',
            'Velocidad (32B)': 'N/A (offload parcial)',
            'Notas': '7B cabe completo; 14B requiere offload a CPU',
          },
          {
            'Hardware': 'RTX 4090 24 GB',
            'Mejor nivel de modelo': '32B',
            'Velocidad (7B)': '100–150 tok/s',
            'Velocidad (32B)': '18–28 tok/s',
            'Notas': 'La mejor GPU individual para 32B',
          },
        ],
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Veredictos por caso de uso',
        content: 'Respuesta en una frase para cada caso de uso habitual de LLM local:',
        items: [
          '**Deberes de matemáticas / tutoría:** DS-R1-Distill-Qwen-7B — 88% MATH-500 supera a Qwen3 7B (62,5%) con el mismo VRAM',
          '**Generación / revisión de código:** Qwen3-Coder 32B — 91,5% HumanEval, el más alto de cualquier modelo ejecutable en hardware de consumo',
          '**Chat en chino:** Qwen3 7B — tokenización CJK nativa, 30–40% más eficiente en token con texto chino',
          '**Análisis paso a paso / cadenas de razonamiento:** DS-R1-Distill-Qwen-14B — produce cadena de pensamiento explícita por defecto',
          '**Asistente general diario (8 GB VRAM):** Qwen3 7B — conversación más fluida, evita el exceso de razonamiento de DeepSeek en tareas simples',
          '**Despliegue empresarial privado (China):** Qwen3 — licencia Apache 2.0, procedencia Alibaba simplifica la documentación de cumplimiento CAC',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿DeepSeek-R1 es lo mismo que los modelos destilados?',
            a: 'No. DeepSeek-R1 es el modelo de mezcla de expertos de 671B que requiere hardware de servidor. Las versiones destiladas (7B, 14B, 32B) son modelos densos independientes entrenados para replicar su estilo de razonamiento — estas son las opciones prácticas para uso local.',
          },
          {
            q: '¿DeepSeek y Qwen usan el mismo VRAM en cada tamaño de parámetros?',
            a: 'Sí, al mismo nivel de cuantización. Ambos modelos 7B necesitan aproximadamente 5,5 GB en Q4_K_M; ambos modelos 32B necesitan 20,5 GB. La elección de hardware es sobre preferencia de tarea, no diferencia de VRAM.',
          },
          {
            q: '¿Puedo ejecutar modelos destilados de DeepSeek-R1 con Ollama?',
            a: 'Sí. Ejecuta `ollama run deepseek-r1:7b` para el destilado 7B o `ollama run deepseek-r1:32b` para el 32B. Ollama descarga Q4_K_M por defecto.',
          },
          {
            q: '¿Cuál es mejor para texto en chino: DeepSeek o Qwen?',
            a: 'Qwen3 es significativamente mejor para texto en chino. Utiliza un tokenizador chino diseñado específicamente que es un 30–40% más eficiente en texto CJK. Los modelos destilados de DeepSeek-R1 están construidos sobre pesos de Qwen3, por lo que también heredan un soporte razonable de chino, pero los modelos base de Qwen3 son la primera elección.',
          },
          {
            q: '¿Qué modelo debo usar para matemáticas con 8 GB VRAM?',
            a: 'DeepSeek-R1-Distill-Qwen-7B. Obtiene un 88% en MATH-500 frente al 62,5% de Qwen3 7B — una diferencia de 25 puntos — con un uso de VRAM idéntico.',
          },
          {
            q: '¿Ejecutar DeepSeek-R1 localmente cumple con las leyes de datos?',
            a: 'Ejecutar cualquier modelo localmente significa que los datos nunca salen de tu hardware, lo que satisface los requisitos de residencia de datos independientemente del origen del modelo. La pregunta de cumplimiento es sobre el manejo de datos, no la procedencia del modelo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Guía de despliegue local de Qwen 2026](/es/local-llms/qwen-local-deployment-guide-2026) — Tabla completa de niveles de hardware para todas las variantes de Qwen3',
          '[Guía de compra de GPU para LLMs locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 vs 4070 vs 4090 para inference local',
          '[Qwen vs Llama vs Mistral 2026](/es/local-llms/qwen-vs-llama-vs-mistral) — Comparativa tripartita incluyendo Llama 3.3 70B',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: Comparativa de LLM local 2026',
      description:
        'DeepSeek-R1 destilado vs Qwen3 LLM local: comparativa directa de VRAM, MMLU, MATH-500 y HumanEval. Qué modelo ejecutar en cada nivel de hardware en 2026.',
      url: 'https://www.promptquorum.com/es/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen3' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿DeepSeek-R1 es lo mismo que los modelos destilados?', acceptedAnswer: { '@type': 'Answer', text: 'No. DeepSeek-R1 es el modelo MoE de 671B. Las versiones destiladas (7B, 14B, 32B) son modelos densos independientes entrenados para replicar su estilo de razonamiento — prácticos para uso local.' } },
        { '@type': 'Question', name: '¿DeepSeek y Qwen usan el mismo VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, al mismo nivel de cuantización. Ambos modelos 7B necesitan 5,5 GB en Q4_K_M; ambos 32B necesitan 20,5 GB. La elección es por fortaleza de tarea, no por VRAM.' } },
        { '@type': 'Question', name: '¿Cuál es mejor para texto en chino: DeepSeek o Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 es significativamente mejor. Utiliza un tokenizador chino nativo que es un 30–40% más eficiente en texto CJK.' } },
        { '@type': 'Question', name: '¿Qué modelo para matemáticas con 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. Obtiene un 88% MATH-500 frente al 62,5% de Qwen3 7B con VRAM idéntico.' } },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek vs Qwen: Comparativo de LLM local 2026',
    seoTitle: 'DeepSeek vs Qwen LLM local 2026: Benchmarks e VRAM',
    intro:
      'Os modelos destilados do DeepSeek-R1 e o Qwen3 são as duas famílias dominantes para implantação local em 2026. Ambos exigem a mesma VRAM com o mesmo número de parâmetros — 5,5 GB para 7B em Q4_K_M — mas estão otimizados para forças opostas. Os destilados do DeepSeek-R1 lideram em matemática e raciocínio passo a passo; o Qwen3 lidera em programação e tarefas com texto em chinês. Este guia oferece uma tabela de benchmarks direta, um detalhamento por nível de hardware e um veredicto em uma frase para cada caso de uso comum.',
    metaDescription:
      'DeepSeek-R1 destilado vs Qwen3 LLM local: comparativo direto de VRAM, MMLU, MATH-500 e HumanEval. Qual modelo rodar em cada nível de hardware em 2026.',
    twitterDescription:
      'DeepSeek-R1 destilado vs Qwen3: mesma VRAM, forças diferentes. Matemática → DeepSeek. Código → Qwen. Tabela de benchmarks completa.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen LLM local',
    targetKeywords: [
      'deepseek vs qwen llm local 2026',
      'deepseek r1 destilado vs qwen2.5',
      'melhor llm local para matemática',
      'qwen2.5 vs deepseek benchmark',
      'deepseek requisitos hardware local',
    ],
    leadAnswerBlock:
      '**Para matemática e raciocínio passo a passo, o DeepSeek-R1-Distill-Qwen-32B atinge 94% no MATH-500 contra 90,3% do Qwen3 32B. Para programação e texto em chinês, o Qwen3 32B atinge 91,5% no HumanEval contra 83% do destilado DeepSeek. Ambos exigem VRAM idêntica com o mesmo número de parâmetros.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer:
          'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen3 is stronger (91.5% HumanEval at 32B). Both families run on identical hardware at equivalent parameter counts.',
        bullets: [
          'Math / reasoning: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Coding: Qwen3-Coder 32B (91.5% HumanEval)',
          'Chinese text: Qwen3 7B–72B (native tokenisation)',
          'Same VRAM: both 7B models need 5.5 GB at Q4_K_M',
          'Apple Silicon: both run well on M-series unified memory',
        ],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer:
          'Für Mathematik und Schlussfolgern sind DeepSeek-R1-destillierte Modelle stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen3 stärker (91,5 % HumanEval bei 32B).',
        bullets: [
          'Mathematik/Schlussfolgern: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Programmierung: Qwen3-Coder 32B (91,5 % HumanEval)',
          'Chinesischer Text: Qwen3 7B–72B (natives Tokenisierung)',
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      fr: {
        question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?',
        answer:
          'Pour les mathématiques et le raisonnement, les modèles distillés DeepSeek-R1 sont plus forts (94 % MATH-500 à 32B). Pour le code et le texte chinois, Qwen3 est plus fort (91,5 % HumanEval à 32B).',
        bullets: [
          'Maths / raisonnement : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)',
          'Code : Qwen3-Coder 32B (91,5 % HumanEval)',
          'Texte chinois : Qwen3 7B–72B (tokenisation native)',
          'Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M',
        ],
        updatedDate: '2026-05',
      },
      ja: {
        question: 'ローカルで優れているのはDeepSeekとQwenのどちら？',
        answer:
          '数学・推論タスクではDeepSeek-R1蒸留モデルが優れています（32BでMATH-500 94%）。コーディングと中国語テキストではQwen3が優れています（32BでHumanEval 91.5%）。',
        bullets: [
          '数学・推論：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          'コーディング：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中国語テキスト：Qwen3 7B〜72B（ネイティブトークナイゼーション）',
          '同じVRAM：両7BモデルともQ4_K_Mで5.5 GBが必要',
        ],
        updatedDate: '2026-05',
      },
      zh: {
        question: 'DeepSeek 和 Qwen 哪个本地运行更好？',
        answer:
          '数学和推理任务：DeepSeek-R1 蒸馏模型更强（32B MATH-500 达94%）。编程和中文文本：Qwen3 更强（32B HumanEval 达91.5%）。同等参数量下两者所需硬件相同。',
        bullets: [
          '数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）',
          '编程：Qwen3-Coder 32B（HumanEval 91.5%）',
          '中文文本：Qwen3 7B–72B（原生分词）',
          '相同显存：两款7B模型Q4_K_M均需5.5 GB',
        ],
        updatedDate: '2026-05',
      },
      pt: {
        question: 'Qual é melhor localmente: DeepSeek ou Qwen?',
        answer:
          'Para tarefas de matemática e raciocínio, os modelos destilados do DeepSeek-R1 são mais fortes (94% MATH-500 em 32B). Para programação e texto em chinês, o Qwen3 é mais forte (91,5% HumanEval em 32B). Ambas as famílias rodam em hardware idêntico com o mesmo número de parâmetros.',
        bullets: [
          'Matemática / raciocínio: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'Programação: Qwen3-Coder 32B (91,5% HumanEval)',
          'Texto em chinês: Qwen3 7B–72B (tokenização nativa)',
          'Mesma VRAM: ambos os modelos 7B precisam de 5,5 GB em Q4_K_M',
          'Apple Silicon: ambos rodam bem com memória unificada da série M',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: 'tldr' },
      { label: 'Tabela de benchmarks', anchor: 'benchmark-table' },
      { label: 'Níveis de hardware', anchor: 'hardware-tiers' },
      { label: 'Modelos DeepSeek explicados', anchor: 'deepseek-models' },
      { label: 'Modelos Qwen3 explicados', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Veredictos por caso de uso', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        content:
          'Os modelos destilados do DeepSeek-R1 lideram em matemática e raciocínio; o Qwen3 lidera em programação e texto em chinês — ambos exigem a mesma VRAM com o mesmo número de parâmetros.',
      },
      {
        type: 'plain-terms',
        content:
          'A DeepSeek publicou uma família de modelos voltada para raciocínio (R1) e disponibilizou versões destiladas menores para uso local. O Qwen3 é a família de propósito geral da Alibaba. Com 7B parâmetros, ambos cabem em 5,5 GB de VRAM. A diferença está nas suas forças: o DeepSeek é melhor em matemática; o Qwen é melhor escrevendo código e entendendo texto em chinês.',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Pontos principais',
        isTldr: true,
        items: [
          'Mesma VRAM: ambos os modelos 7B precisam de 5,5 GB em Q4_K_M; ambos os 32B precisam de 20,5 GB',
          'Matemática: DeepSeek-R1-Distill-Qwen-32B vence (94% MATH-500 vs 90,3%)',
          'Programação: Qwen3-Coder 32B vence (91,5% HumanEval vs 83%)',
          'Texto em chinês: Qwen3 vence — tokenização nativa, 30–40% mais eficiente em texto CJK',
          'Cadeias de raciocínio: os destilados DeepSeek-R1 produzem cadeias de pensamento longas por padrão',
          'Assistente geral: o Qwen3 14B é um pouco mais fluido; o destilado DeepSeek 14B tende a raciocinar em excesso',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Tabela de benchmarks comparativa',
        content:
          'Todos os resultados com quantização Q4_K_M. Velocidade medida em NVIDIA RTX 4090 (24 GB VRAM) para linhas de GPU e Apple M3 Max 48 GB para linhas de Mac.',
        columns: ['Modelo', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Velocidade (tok/s)'],
        rows: [
          {
            'Modelo': 'Qwen3 7B',
            'VRAM': '5,5 GB',
            'MMLU (%)': '72,5',
            'MATH-500 (%)': '62,5',
            'HumanEval (%)': '74,6',
            'Velocidade (tok/s)': '50–80',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 7B',
            'VRAM': '5,5 GB',
            'MMLU (%)': '70,1',
            'MATH-500 (%)': '88,0',
            'HumanEval (%)': '68,4',
            'Velocidade (tok/s)': '50–80',
          },
          {
            'Modelo': 'Qwen3 14B',
            'VRAM': '9,5 GB',
            'MMLU (%)': '79,2',
            'MATH-500 (%)': '76,1',
            'HumanEval (%)': '82,1',
            'Velocidade (tok/s)': '30–50',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 14B',
            'VRAM': '9,5 GB',
            'MMLU (%)': '75,8',
            'MATH-500 (%)': '90,0',
            'HumanEval (%)': '75,5',
            'Velocidade (tok/s)': '30–50',
          },
          {
            'Modelo': 'Qwen3 32B',
            'VRAM': '20,5 GB',
            'MMLU (%)': '83,4',
            'MATH-500 (%)': '90,3',
            'HumanEval (%)': '91,5',
            'Velocidade (tok/s)': '15–30',
          },
          {
            'Modelo': 'DS-R1-Distill-Qwen 32B',
            'VRAM': '20,5 GB',
            'MMLU (%)': '80,6',
            'MATH-500 (%)': '94,0',
            'HumanEval (%)': '83,2',
            'Velocidade (tok/s)': '15–30',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Qual modelo rodar em cada nível de hardware',
        content:
          'Os requisitos de VRAM são idênticos entre as duas famílias para cada tamanho de parâmetros. A escolha entre DeepSeek e Qwen é uma preferência de tarefa, não uma restrição de hardware.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen3 7B para programação/chat; DS-R1-Distill-Qwen-7B para tutoria de matemática',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen3 14B para uso geral; DS-R1-Distill-Qwen-14B para cadeias de raciocínio',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen3-Coder 32B ou Qwen3 32B — o melhor modelo local de propósito geral neste nível',
          '**48 GB+ (M2/M3 Ultra / RTX 4090 dupla):** Qwen3 72B (86,1% MMLU, 97% HumanEval) — quase no nível do GPT-4',
          '**Só CPU (32+ GB RAM):** Qwen3 7B ou DS-R1-Distill 7B — ambos rodam a 3–8 tok/s em CPUs de notebooks modernos',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'Modelos locais do DeepSeek explicados',
        content:
          'A DeepSeek publicou seu modelo de raciocínio R1 como uma arquitetura MoE (mistura de especialistas) de 671B que exige hardware de nível servidor. Para uso local em hardware de consumo, a opção prática são as versões destiladas — modelos densos menores treinados para replicar o raciocínio em cadeia do R1.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** 5,5 GB VRAM em Q4_K_M. O modelo de matemática mais forte no nível 7B (88% MATH-500). Produz cadeias de raciocínio longas; desative a cadeia de pensamento via system prompt para um chat mais rápido.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9,5 GB VRAM. Melhor raciocínio por VRAM no nível 14B. Ideal para tutoria de matemática, quebra-cabeças lógicos e tarefas de análise estruturada.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20,5 GB VRAM. A maior pontuação MATH-500 de qualquer modelo executável em hardware de consumo: 94%. Use-o quando a precisão matemática for prioritária sobre a programação.',
          '**DeepSeek-V3 (completo):** 671B MoE — mais de 400 GB de RAM em Q4 — impraticável em hardware de consumo. Use as versões destiladas no lugar.',
          'Comando Ollama: `ollama run deepseek-r1:7b` (usa o destilado Q4_K_M por padrão)',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'Modelos locais do Qwen3 explicados',
        content:
          'O Qwen3 é o lançamento da Alibaba de outubro de 2025 que abrange variantes base, Coder e Vision-Language. Todos os modelos base utilizam uma janela de contexto de 128K e licença Apache 2.0.',
        items: [
          '**Qwen3 7B:** 5,5 GB VRAM. O melhor 7B de propósito geral para programação e texto em chinês. Os 74,6% no HumanEval superam todos os concorrentes 7B em código.',
          '**Qwen3 14B:** 9,5 GB VRAM. O ponto ideal entre qualidade e velocidade. 82,1% HumanEval, 79,2% MMLU. A melhor opção para a maioria das configurações com 12 GB VRAM.',
          '**Qwen3 32B:** 20,5 GB VRAM. 91,5% HumanEval — a melhor pontuação de benchmark de programação abaixo de 48 GB VRAM.',
          '**Qwen3-Coder 32B:** Mesma VRAM que o base 32B, ajustado especificamente para geração e revisão de código. Use-o no lugar do base quando a programação for a tarefa principal.',
          '**Qwen3 72B:** 46 GB VRAM. 86,1% MMLU, 97% HumanEval. Só funciona em memória unificada de 48+ GB (M2/M3 Ultra) ou configurações multi-GPU.',
          'Comando Ollama: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: rodar ambas as famílias',
        content:
          'Tanto os destilados do DeepSeek quanto o Qwen3 rodam bem em Apple Silicon via Ollama ou llama.cpp com aceleração Metal. A diferença principal é a largura de banda de memória.',
        columns: ['Hardware', 'Melhor nível de modelo', 'Velocidade (7B)', 'Velocidade (32B)', 'Notas'],
        rows: [
          {
            'Hardware': 'M2/M3 16 GB',
            'Melhor nível de modelo': 'Só 7B',
            'Velocidade (7B)': '30–50 tok/s',
            'Velocidade (32B)': 'N/A',
            'Notas': 'Ambos os modelos 7B cabem; o 14B usa swap',
          },
          {
            'Hardware': 'M3 Pro 36 GB',
            'Melhor nível de modelo': 'Ponto ideal 14B',
            'Velocidade (7B)': '60–90 tok/s',
            'Velocidade (32B)': 'N/A',
            'Notas': '14B em velocidade total; o 32B usa swap',
          },
          {
            'Hardware': 'M3 Max 48 GB',
            'Melhor nível de modelo': '32B confortavelmente',
            'Velocidade (7B)': '80–120 tok/s',
            'Velocidade (32B)': '15–25 tok/s',
            'Notas': 'O melhor Apple de consumo para 32B',
          },
          {
            'Hardware': 'RTX 4060 8 GB',
            'Melhor nível de modelo': 'Só 7B',
            'Velocidade (7B)': '50–80 tok/s',
            'Velocidade (32B)': 'N/A (offload parcial)',
            'Notas': '7B cabe completo; o 14B exige offload para CPU',
          },
          {
            'Hardware': 'RTX 4090 24 GB',
            'Melhor nível de modelo': '32B',
            'Velocidade (7B)': '100–150 tok/s',
            'Velocidade (32B)': '18–28 tok/s',
            'Notas': 'A melhor GPU individual para 32B',
          },
        ],
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Veredictos por caso de uso',
        content: 'Resposta em uma frase para cada caso de uso comum de LLM local:',
        items: [
          '**Lição de matemática / tutoria:** DS-R1-Distill-Qwen-7B — 88% MATH-500 supera o Qwen3 7B (62,5%) com a mesma VRAM',
          '**Geração / revisão de código:** Qwen3-Coder 32B — 91,5% HumanEval, o mais alto de qualquer modelo executável em hardware de consumo',
          '**Chat em chinês:** Qwen3 7B — tokenização CJK nativa, 30–40% mais eficiente em token com texto chinês',
          '**Análise passo a passo / cadeias de raciocínio:** DS-R1-Distill-Qwen-14B — produz cadeia de pensamento explícita por padrão',
          '**Assistente geral do dia a dia (8 GB VRAM):** Qwen3 7B — conversa mais fluida, evita o excesso de raciocínio do DeepSeek em tarefas simples',
          '**Implantação corporativa privada (China):** Qwen3 — licença Apache 2.0, a procedência Alibaba simplifica a documentação de conformidade CAC',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'O DeepSeek-R1 é o mesmo que os modelos destilados?',
            a: 'Não. O DeepSeek-R1 é o modelo de mistura de especialistas de 671B que exige hardware de servidor. As versões destiladas (7B, 14B, 32B) são modelos densos independentes treinados para replicar seu estilo de raciocínio — estas são as opções práticas para uso local.',
          },
          {
            q: 'DeepSeek e Qwen usam a mesma VRAM em cada tamanho de parâmetros?',
            a: 'Sim, no mesmo nível de quantização. Ambos os modelos 7B precisam de aproximadamente 5,5 GB em Q4_K_M; ambos os modelos 32B precisam de 20,5 GB. A escolha de hardware é sobre preferência de tarefa, não diferença de VRAM.',
          },
          {
            q: 'Posso rodar os modelos destilados do DeepSeek-R1 com o Ollama?',
            a: 'Sim. Rode `ollama run deepseek-r1:7b` para o destilado 7B ou `ollama run deepseek-r1:32b` para o 32B. O Ollama baixa o Q4_K_M por padrão.',
          },
          {
            q: 'Qual é melhor para texto em chinês: DeepSeek ou Qwen?',
            a: 'O Qwen3 é significativamente melhor para texto em chinês. Utiliza um tokenizador chinês projetado especificamente que é 30–40% mais eficiente em texto CJK. Os modelos destilados do DeepSeek-R1 são construídos sobre pesos do Qwen3, por isso também herdam um suporte razoável de chinês, mas os modelos base do Qwen3 são a primeira escolha.',
          },
          {
            q: 'Qual modelo devo usar para matemática com 8 GB VRAM?',
            a: 'DeepSeek-R1-Distill-Qwen-7B. Atinge 88% no MATH-500 contra 62,5% do Qwen3 7B — uma diferença de 25 pontos — com uso de VRAM idêntico.',
          },
          {
            q: 'Rodar o DeepSeek-R1 localmente cumpre as leis de dados?',
            a: 'Rodar qualquer modelo localmente significa que os dados nunca saem do seu hardware, o que satisfaz os requisitos de residência de dados independentemente da origem do modelo. A questão de conformidade é sobre o tratamento de dados, não a procedência do modelo.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Guia de implantação local do Qwen 2026](/pt/local-llms/qwen-local-deployment-guide-2026) — Tabela completa de níveis de hardware para todas as variantes do Qwen3',
          '[Guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 vs 4070 vs 4090 para inference local',
          '[Qwen vs Llama vs Mistral 2026](/pt/local-llms/qwen-vs-llama-vs-mistral) — Comparativo de três incluindo Llama 3.3 70B',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: Comparativo de LLM local 2026',
      description:
        'DeepSeek-R1 destilado vs Qwen3 LLM local: comparativo direto de VRAM, MMLU, MATH-500 e HumanEval. Qual modelo rodar em cada nível de hardware em 2026.',
      url: 'https://www.promptquorum.com/pt/pt/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen3' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O DeepSeek-R1 é o mesmo que os modelos destilados?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O DeepSeek-R1 é o modelo MoE de 671B. As versões destiladas (7B, 14B, 32B) são modelos densos independentes treinados para replicar seu estilo de raciocínio — práticos para uso local.' } },
        { '@type': 'Question', name: 'DeepSeek e Qwen usam a mesma VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, no mesmo nível de quantização. Ambos os modelos 7B precisam de 5,5 GB em Q4_K_M; ambos os 32B precisam de 20,5 GB. A escolha é por força de tarefa, não por VRAM.' } },
        { '@type': 'Question', name: 'Qual é melhor para texto em chinês: DeepSeek ou Qwen?', acceptedAnswer: { '@type': 'Answer', text: 'O Qwen3 é significativamente melhor. Utiliza um tokenizador chinês nativo que é 30–40% mais eficiente em texto CJK.' } },
        { '@type': 'Question', name: 'Qual modelo para matemática com 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. Atinge 88% MATH-500 contra 62,5% do Qwen3 7B com VRAM idêntica.' } },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'DeepSeek مقابل Qwen: مقارنة النماذج اللغوية المحلية 2026',
    seoTitle: 'DeepSeek مقابل Qwen محلياً 2026: VRAM والمعايير مقارنةً',
    intro:
      'تُعدّ النماذج المقطّرة من DeepSeek-R1 ونماذج Qwen3 العائلتين المهيمنتين على النشر المحلي في 2026. كلتاهما تتطلب نفس حجم VRAM بعدد معاملات مكافئ — 5.5 جيجابايت لـ7B بـQ4_K_M — لكنهما محسّنتان لنقاط قوة متضادة. تتصدر مقطّرات DeepSeek-R1 في الرياضيات والاستدلال خطوة بخطوة؛ بينما تتصدر Qwen3 في البرمجة والمهام باللغة الصينية. يوفر هذا الدليل جدول معايير قياسية مباشراً وتفصيلاً حسب مستوى الأجهزة وحكماً في جملة واحدة لكل حالة استخدام شائعة.',
    metaDescription:
      'DeepSeek-R1 المقطّر يحقق 94% في MATH-500؛ Qwen3 يحقق 91.5% في HumanEval. جدول مقارنة VRAM وMMlu واختيار النموذج لكل مستوى أجهزة في 2026.',
    twitterDescription:
      'DeepSeek-R1 المقطّر مقابل Qwen3: نفس VRAM، نقاط قوة مختلفة. الرياضيات → DeepSeek. الكود → Qwen. جدول معايير قياسية كامل.',
    readTime: '11 دقائق قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek مقابل Qwen نموذج لغوي محلي',
    targetKeywords: [
      'deepseek مقابل qwen نموذج لغوي محلي 2026',
      'deepseek r1 مقطّر مقابل qwen2.5',
      'أفضل نموذج لغوي محلي للرياضيات',
      'qwen2.5 مقابل deepseek معايير قياسية',
      'deepseek متطلبات الأجهزة المحلية',
    ],
    leadAnswerBlock:
      '**للرياضيات والاستدلال خطوة بخطوة، يحصل DeepSeek-R1-Distill-Qwen-32B على 94% في MATH-500 مقابل 90.3% لـQwen3 32B. للبرمجة والنصوص الصينية، يحصل Qwen3 32B على 91.5% في HumanEval مقابل 83% للمقطّر من DeepSeek. كلاهما يتطلب نفس VRAM بعدد المعاملات المتكافئ.**',
    quickAnswerTop: {
      ar: {
        question: 'أيّهما أفضل محلياً: DeepSeek أم Qwen؟',
        answer:
          'لمهام الرياضيات والاستدلال، النماذج المقطّرة من DeepSeek-R1 أقوى (94% MATH-500 عند 32B). للبرمجة والنصوص الصينية، Qwen3 أقوى (91.5% HumanEval عند 32B). تعمل كلتا العائلتين على أجهزة متطابقة بعدد معاملات مكافئ.',
        bullets: [
          'الرياضيات / الاستدلال: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)',
          'البرمجة: Qwen3-Coder 32B (91.5% HumanEval)',
          'النصوص الصينية: Qwen3 7B–72B (تحليل نصوص أصيل)',
          'نفس VRAM: كلا النموذجين 7B يحتاجان 5.5 جيجابايت في Q4_K_M',
          'Apple Silicon: كلاهما يعمل بشكل جيد على الذاكرة الموحدة لسلسلة M',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: 'tldr' },
      { label: 'جدول المعايير القياسية', anchor: 'benchmark-table' },
      { label: 'مستويات الأجهزة', anchor: 'hardware-tiers' },
      { label: 'نماذج DeepSeek موضّحة', anchor: 'deepseek-models' },
      { label: 'نماذج Qwen3 موضّحة', anchor: 'qwen-models' },
      { label: 'Mac مقابل NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'الأحكام حسب حالة الاستخدام', anchor: 'use-case-verdicts' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        content:
          'تتصدر المقطّرات من DeepSeek-R1 في الرياضيات والاستدلال؛ وتتصدر Qwen3 في البرمجة والنصوص الصينية — وكلتاهما تتطلبان نفس VRAM بعدد المعاملات المتكافئ.',
      },
      {
        type: 'plain-terms',
        content:
          'نشرت DeepSeek عائلة نماذج تركز على الاستدلال (R1) وأتاحت نسخاً مقطّرة أصغر للاستخدام المحلي. Qwen3 هي عائلة الأغراض العامة من Alibaba. بـ7B معامل، يتسع كلاهما في 5.5 جيجابايت VRAM. الفارق في نقاط القوة: DeepSeek أفضل في الرياضيات؛ Qwen أفضل في كتابة الكود وفهم النصوص الصينية.',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'النقاط الرئيسية',
        isTldr: true,
        items: [
          'نفس VRAM: كلا النموذجين 7B يحتاجان 5.5 جيجابايت في Q4_K_M؛ وكلا النموذجين 32B يحتاجان 20.5 جيجابايت',
          'الرياضيات: DeepSeek-R1-Distill-Qwen-32B يفوز (94% MATH-500 مقابل 90.3%)',
          'البرمجة: Qwen3-Coder 32B يفوز (91.5% HumanEval مقابل 83%)',
          'النصوص الصينية: Qwen3 يفوز — تحليل نصوص CJK أصيل، أكثر كفاءةً بـ30–40% في النصوص الصينية',
          'سلاسل الاستدلال: تنتج مقطّرات DeepSeek-R1 سلاسل تفكير طويلة افتراضياً',
          'المساعد العام: Qwen3 14B أكثر سلاسةً؛ يميل مقطّر DeepSeek 14B إلى الإفراط في الاستدلال في المهام البسيطة',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'جدول معايير مقارنة',
        content:
          'جميع النتائج بكمية Q4_K_M. قيست السرعة على NVIDIA RTX 4090 (24 جيجابايت VRAM) لصفوف GPU وعلى Apple M3 Max 48 جيجابايت لصفوف Mac.',
        columns: ['النموذج', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'السرعة (tok/s)'],
        rows: [
          {
            'النموذج': 'Qwen3 7B',
            'VRAM': '5.5 جيجابايت',
            'MMLU (%)': '72.5',
            'MATH-500 (%)': '62.5',
            'HumanEval (%)': '74.6',
            'السرعة (tok/s)': '50–80',
          },
          {
            'النموذج': 'DS-R1-Distill-Qwen 7B',
            'VRAM': '5.5 جيجابايت',
            'MMLU (%)': '70.1',
            'MATH-500 (%)': '88.0',
            'HumanEval (%)': '68.4',
            'السرعة (tok/s)': '50–80',
          },
          {
            'النموذج': 'Qwen3 14B',
            'VRAM': '9.5 جيجابايت',
            'MMLU (%)': '79.2',
            'MATH-500 (%)': '76.1',
            'HumanEval (%)': '82.1',
            'السرعة (tok/s)': '30–50',
          },
          {
            'النموذج': 'DS-R1-Distill-Qwen 14B',
            'VRAM': '9.5 جيجابايت',
            'MMLU (%)': '75.8',
            'MATH-500 (%)': '90.0',
            'HumanEval (%)': '75.5',
            'السرعة (tok/s)': '30–50',
          },
          {
            'النموذج': 'Qwen3 32B',
            'VRAM': '20.5 جيجابايت',
            'MMLU (%)': '83.4',
            'MATH-500 (%)': '90.3',
            'HumanEval (%)': '91.5',
            'السرعة (tok/s)': '15–30',
          },
          {
            'النموذج': 'DS-R1-Distill-Qwen 32B',
            'VRAM': '20.5 جيجابايت',
            'MMLU (%)': '80.6',
            'MATH-500 (%)': '94.0',
            'HumanEval (%)': '83.2',
            'السرعة (tok/s)': '15–30',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'أيّ نموذج تشغّل في كل مستوى من مستويات الأجهزة',
        content:
          'متطلبات VRAM متطابقة بين العائلتين لكل حجم معاملات. الاختيار بين DeepSeek وQwen تفضيل للمهمة لا قيد على الأجهزة.',
        items: [
          '**8 جيجابايت VRAM (RTX 3060 / M2 16 جيجابايت):** Qwen3 7B للبرمجة والدردشة؛ DS-R1-Distill-Qwen-7B لتدريس الرياضيات',
          '**12 جيجابايت VRAM (RTX 3080 / M2 Pro 24 جيجابايت):** Qwen3 14B للاستخدام العام؛ DS-R1-Distill-Qwen-14B لسلاسل الاستدلال',
          '**24 جيجابايت VRAM (RTX 4090 / M3 Max 48 جيجابايت):** Qwen3-Coder 32B أو Qwen3 32B — أفضل نموذج محلي للأغراض العامة في هذا المستوى',
          '**48 جيجابايت+ (M2/M3 Ultra / RTX 4090 مزدوج):** Qwen3 72B (86.1% MMLU، 97% HumanEval) — قريب من مستوى GPT-4',
          '**CPU فقط (32+ جيجابايت RAM):** Qwen3 7B أو DS-R1-Distill 7B — كلاهما يعمل بـ3–8 tok/s على معالجات الحواسيب المحمولة الحديثة',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'نماذج DeepSeek المحلية موضّحة',
        content:
          'نشرت DeepSeek نموذج الاستدلال R1 كبنية MoE (خليط من الخبراء) بـ671B يتطلب أجهزة من مستوى الخوادم. للاستخدام المحلي على أجهزة المستهلك، الخيار العملي هو النسخ المقطّرة — نماذج كثيفة أصغر مدرّبة لتكرار استدلال R1 السلسلي.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** 5.5 جيجابايت VRAM بـQ4_K_M. أقوى نموذج رياضيات على مستوى 7B (88% MATH-500). ينتج سلاسل استدلال طويلة؛ أوقف سلسلة التفكير عبر system prompt لدردشة أسرع.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9.5 جيجابايت VRAM. أفضل استدلال لكل وحدة VRAM على مستوى 14B. مثالي لتدريس الرياضيات والألغاز المنطقية ومهام التحليل المنظّم.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20.5 جيجابايت VRAM. أعلى درجة MATH-500 لأي نموذج يعمل على أجهزة المستهلك: 94%. استخدمه حين تكون دقة الرياضيات أولوية على البرمجة.',
          '**DeepSeek-V3 (كامل):** 671B MoE — أكثر من 400 جيجابايت RAM بـQ4 — غير عملي على أجهزة المستهلك. استخدم النسخ المقطّرة بدلاً منه.',
          'أمر Ollama: `ollama run deepseek-r1:7b` (يستخدم مقطّر Q4_K_M افتراضياً)',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'نماذج Qwen3 المحلية موضّحة',
        content:
          'Qwen3 هو إصدار Alibaba من أكتوبر 2025 الذي يشمل متغيرات base وCoder وVision-Language. تستخدم جميع النماذج الأساسية نافذة سياق 128K ورخصة Apache 2.0.',
        items: [
          '**Qwen3 7B:** 5.5 جيجابايت VRAM. أفضل 7B للأغراض العامة للبرمجة والنصوص الصينية. 74.6% في HumanEval يتفوق على جميع المنافسين 7B في الكود.',
          '**Qwen3 14B:** 9.5 جيجابايت VRAM. نقطة التوازن المثلى بين الجودة والسرعة. 82.1% HumanEval، 79.2% MMLU. الخيار الأفضل لمعظم الإعدادات بـ12 جيجابايت VRAM.',
          '**Qwen3 32B:** 20.5 جيجابايت VRAM. 91.5% HumanEval — أعلى درجة معيارية للبرمجة دون 48 جيجابايت VRAM.',
          '**Qwen3-Coder 32B:** نفس VRAM كالنموذج الأساسي 32B، مضبوط دقيقاً خصيصاً لتوليد الكود ومراجعته. استخدمه بدلاً من الأساسي حين تكون البرمجة المهمة الرئيسية.',
          '**Qwen3 72B:** 46 جيجابايت VRAM. 86.1% MMLU، 97% HumanEval. يعمل فقط على الذاكرة الموحدة 48+ جيجابايت (M2/M3 Ultra) أو إعدادات متعددة GPU.',
          'أمر Ollama: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon مقابل NVIDIA: تشغيل كلتا العائلتين',
        content:
          'تعمل مقطّرات DeepSeek وQwen3 بشكل جيد على Apple Silicon عبر Ollama أو llama.cpp مع تسريع Metal. الفارق الرئيسي هو عرض نطاق الذاكرة.',
        columns: ['الأجهزة', 'أفضل مستوى نموذج', 'السرعة (7B)', 'السرعة (32B)', 'ملاحظات'],
        rows: [
          {
            'الأجهزة': 'M2/M3 16 جيجابايت',
            'أفضل مستوى نموذج': '7B فقط',
            'السرعة (7B)': '30–50 tok/s',
            'السرعة (32B)': 'N/A',
            'ملاحظات': 'كلا النموذجين 7B يتسعان؛ 14B يستخدم swap',
          },
          {
            'الأجهزة': 'M3 Pro 36 جيجابايت',
            'أفضل مستوى نموذج': 'نقطة التوازن 14B',
            'السرعة (7B)': '60–90 tok/s',
            'السرعة (32B)': 'N/A',
            'ملاحظات': '14B بالسرعة الكاملة؛ 32B يستخدم swap',
          },
          {
            'الأجهزة': 'M3 Max 48 جيجابايت',
            'أفضل مستوى نموذج': '32B بشكل مريح',
            'السرعة (7B)': '80–120 tok/s',
            'السرعة (32B)': '15–25 tok/s',
            'ملاحظات': 'أفضل جهاز Apple استهلاكي لـ32B',
          },
          {
            'الأجهزة': 'RTX 4060 8 جيجابايت',
            'أفضل مستوى نموذج': '7B فقط',
            'السرعة (7B)': '50–80 tok/s',
            'السرعة (32B)': 'N/A (تفريغ جزئي)',
            'ملاحظات': '7B يتسع كاملاً؛ 14B يتطلب تفريغاً للـCPU',
          },
          {
            'الأجهزة': 'RTX 4090 24 جيجابايت',
            'أفضل مستوى نموذج': '32B',
            'السرعة (7B)': '100–150 tok/s',
            'السرعة (32B)': '18–28 tok/s',
            'ملاحظات': 'أفضل GPU منفردة لـ32B',
          },
        ],
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'الأحكام حسب حالة الاستخدام',
        content: 'إجابة في جملة واحدة لكل حالة استخدام شائعة للنماذج اللغوية المحلية:',
        items: [
          '**الواجبات الرياضية / التدريس:** DS-R1-Distill-Qwen-7B — 88% MATH-500 يتفوق على Qwen3 7B (62.5%) بنفس VRAM',
          '**توليد الكود / مراجعته:** Qwen3-Coder 32B — 91.5% HumanEval، الأعلى لأي نموذج يعمل على أجهزة المستهلك',
          '**الدردشة بالصينية:** Qwen3 7B — تحليل نصوص CJK أصيل، أكثر كفاءةً بـ30–40% في التوكن مع النصوص الصينية',
          '**التحليل خطوة بخطوة / سلاسل الاستدلال:** DS-R1-Distill-Qwen-14B — ينتج سلسلة تفكير صريحة افتراضياً',
          '**المساعد العام اليومي (8 جيجابايت VRAM):** Qwen3 7B — محادثة أكثر سلاسةً، يتجنب الإفراط في الاستدلال من DeepSeek في المهام البسيطة',
          '**النشر المؤسسي الخاص (المنطقة العربية):** Qwen3 — رخصة Apache 2.0، يعمل محلياً بالكامل دون أي نقل بيانات خارجي، مما يُبسّط امتثال حماية البيانات',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل DeepSeek-R1 هو نفسه النماذج المقطّرة؟',
            a: 'لا. DeepSeek-R1 هو نموذج خليط من الخبراء بـ671B يتطلب أجهزة من مستوى الخوادم. النسخ المقطّرة (7B و14B و32B) نماذج كثيفة مستقلة مدرّبة لتكرار أسلوب استدلاله — هذه هي الخيارات العملية للاستخدام المحلي.',
          },
          {
            q: 'هل يستخدم DeepSeek وQwen نفس VRAM بكل حجم معاملات؟',
            a: 'نعم، بنفس مستوى الكمية. كلا النموذجين 7B يحتاجان ~5.5 جيجابايت في Q4_K_M؛ وكلا النموذجين 32B يحتاجان 20.5 جيجابايت. اختيار الأجهزة يتعلق بتفضيل المهمة لا بالفارق في VRAM.',
          },
          {
            q: 'هل يمكنني تشغيل النماذج المقطّرة من DeepSeek-R1 مع Ollama؟',
            a: 'نعم. شغّل `ollama run deepseek-r1:7b` للمقطّر 7B أو `ollama run deepseek-r1:32b` للـ32B. يُنزّل Ollama Q4_K_M افتراضياً.',
          },
          {
            q: 'أيّهما أفضل للنصوص الصينية: DeepSeek أم Qwen؟',
            a: 'Qwen3 أفضل بشكل ملحوظ للنصوص الصينية. يستخدم محلّل نصوص صينياً مصمماً خصيصاً أكثر كفاءةً بـ30–40% في نصوص CJK. النماذج المقطّرة من DeepSeek-R1 مبنية على أوزان Qwen3، لذا ترث دعماً معقولاً للصينية، لكن نماذج Qwen3 الأساسية هي الخيار الأول.',
          },
          {
            q: 'أيّ نموذج أستخدم للرياضيات مع 8 جيجابايت VRAM؟',
            a: 'DeepSeek-R1-Distill-Qwen-7B. يحصل على 88% في MATH-500 مقابل 62.5% لـQwen3 7B — فارق 25 نقطة — باستخدام VRAM متطابق.',
          },
          {
            q: 'هل تشغيل DeepSeek-R1 محلياً يتوافق مع قوانين البيانات؟',
            a: 'تشغيل أي نموذج محلياً يعني أن البيانات لا تغادر أجهزتك أبداً، مما يُلبّي متطلبات الإقامة البيانية بغض النظر عن منشأ النموذج. السؤال الخاص بالامتثال يتعلق بمعالجة البيانات لا بمنشأ النموذج.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[دليل النشر المحلي لـQwen 2026](/ar/local-llms/qwen-local-deployment-guide-2026) — جدول كامل لمستويات الأجهزة لجميع متغيرات Qwen3',
          '[دليل شراء GPU للنماذج اللغوية المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 مقابل 4070 مقابل 4090 للاستدلال المحلي',
          '[Qwen مقابل Llama مقابل Mistral 2026](/ar/local-llms/qwen-vs-llama-vs-mistral) — مقارنة ثلاثية تشمل Llama 3.3 70B',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek مقابل Qwen: مقارنة النماذج اللغوية المحلية 2026',
      description:
        'DeepSeek-R1 المقطّر مقابل Qwen3 محلياً: مقارنة مباشرة لـVRAM وMMlu وMATH-500 وHumanEval. أيّ نموذج تشغّل في كل مستوى من مستويات الأجهزة في 2026.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen3' },
        { '@type': 'Thing', name: 'Local LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل DeepSeek-R1 هو نفسه النماذج المقطّرة؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. DeepSeek-R1 هو نموذج MoE بـ671B. النسخ المقطّرة (7B و14B و32B) نماذج كثيفة مستقلة مدرّبة لتكرار أسلوب استدلاله — عملية للاستخدام المحلي.' } },
        { '@type': 'Question', name: 'هل يستخدم DeepSeek وQwen نفس VRAM؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، بنفس مستوى الكمية. كلا النموذجين 7B يحتاجان 5.5 جيجابايت في Q4_K_M؛ وكلا الـ32B يحتاجان 20.5 جيجابايت. الاختيار حسب نقاط قوة المهمة لا VRAM.' } },
        { '@type': 'Question', name: 'أيّهما أفضل للنصوص الصينية: DeepSeek أم Qwen؟', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3 أفضل بشكل ملحوظ. يستخدم محلّل نصوص صينياً أصيلاً أكثر كفاءةً بـ30–40% في نصوص CJK.' } },
        { '@type': 'Question', name: 'أيّ نموذج للرياضيات مع 8 جيجابايت VRAM؟', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. يحصل على 88% MATH-500 مقابل 62.5% لـQwen3 7B بـVRAM متطابق.' } },
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
      'DeepSeek-R1-destillierte Modelle und Qwen3 sind 2026 die zwei dominanten Familien für lokale Bereitstellung. Beide benötigen bei gleicher Parameterzahl denselben VRAM – 5,5 GB bei 7B mit Q4_K_M – sind aber für unterschiedliche Stärken optimiert. DeepSeek-R1-Destillate führen bei Mathematik und Schritt-für-Schritt-Schlussfolgerung; Qwen3 führt bei Programmierung und chinesischsprachigen Aufgaben.',
    metaDescription:
      'DeepSeek-R1 destilliert vs Qwen3 lokal: direkter VRAM-, MMLU-, MATH-500- und HumanEval-Vergleich. Welches Modell bei welcher Hardware-Stufe in 2026.',
    twitterDescription:
      'DeepSeek-R1 destilliert vs Qwen3: gleicher VRAM, unterschiedliche Stärken. Mathematik → DeepSeek. Code → Qwen.',
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
      '**Für Mathematik gewinnt DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500 vs 90,3 % für Qwen3 32B). Für Programmierung gewinnt Qwen3 32B (91,5 % HumanEval vs 83,2 %). Beide benötigen identischen VRAM bei gleicher Parameterzahl.**',
    quickAnswerTop: {
      en: {
        question: 'Which is better locally: DeepSeek or Qwen?',
        answer: 'For math and reasoning tasks, DeepSeek-R1 distilled models are stronger (94% MATH-500 at 32B). For coding and Chinese text, Qwen3 is stronger (91.5% HumanEval at 32B).',
        bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B (94% MATH-500)', 'Code: Qwen3-Coder 32B (91.5% HumanEval)', 'Chinese: Qwen3', 'Same VRAM at equivalent parameter count'],
        updatedDate: '2026-05',
      },
      de: {
        question: 'Was ist besser lokal: DeepSeek oder Qwen?',
        answer: 'Für Mathematik sind DeepSeek-R1-Destillate stärker (94 % MATH-500 bei 32B). Für Programmierung und chinesischen Text ist Qwen3 stärker (91,5 % HumanEval bei 32B).',
        bullets: ['Mathematik: DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)', 'Programmierung: Qwen3-Coder 32B (91,5 % HumanEval)', 'Chinesisch: Qwen3', 'Gleicher VRAM bei gleicher Parameterzahl'],
        updatedDate: '2026-05',
      },
      fr: { question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?', answer: 'Pour les maths, DeepSeek-R1 distillé est plus fort (94 % MATH-500). Pour le code, Qwen3 est plus fort (91,5 % HumanEval).', bullets: ['Maths : DeepSeek-R1-Distill-Qwen-32B', 'Code : Qwen3-Coder 32B', 'Même VRAM'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学・推論ではDeepSeek-R1蒸留モデルが優れています（32B: MATH-500 94%）。コーディングではQwen3が優れています（32B: HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B', 'コーディング: Qwen3-Coder 32B', 'VRAM同等'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学推理：DeepSeek-R1蒸馏模型更强（32B MATH-500 94%）。编程：Qwen3更强（32B HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B', '编程: Qwen3-Coder 32B', '显存相同'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: 'tldr' },
      { label: 'Benchmark-Tabelle', anchor: 'benchmark-table' },
      { label: 'Hardware-Stufen', anchor: 'hardware-tiers' },
      { label: 'DeepSeek-Modelle erklärt', anchor: 'deepseek-models' },
      { label: 'Qwen3-Modelle erklärt', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Anwendungsfälle', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1-Destillate führen bei Mathematik; Qwen3 führt bei Programmierung und chinesischem Text – bei gleicher VRAM-Anforderung.' },
      { type: 'plain-terms', content: 'DeepSeek hat ein Reasoning-Modell (R1) entwickelt und kleinere destillierte Versionen für lokale Nutzung bereitgestellt. Qwen3 ist Alibabas Allzweck-Familie. Beide 7B-Modelle passen in 5,5 GB VRAM. Der Unterschied liegt in der Stärke: DeepSeek ist besser in Mathematik, Qwen ist besser beim Programmieren und chinesischem Text.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        items: [
          'Gleicher VRAM: beide 7B-Modelle brauchen 5,5 GB bei Q4_K_M; beide 32B brauchen 20,5 GB',
          'Mathematik: DeepSeek-R1-Distill-Qwen-32B gewinnt (94 % MATH-500 vs 90,3 %)',
          'Programmierung: Qwen3-Coder 32B gewinnt (91,5 % HumanEval vs 83,2 %)',
          'Chinesischer Text: Qwen3 gewinnt — native Tokenisierung, 30–40 % effizienter bei CJK-Text',
          'Schlussfolgern: DeepSeek-R1-Destillate produzieren standardmäßig lange Gedankenketten',
          'DSGVO: beide laufen vollständig lokal — kein Datentransfer an Dritte',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: 'Direkte Benchmark-Tabelle',
        content: 'Alle Werte bei Q4_K_M-Quantisierung. Geschwindigkeit gemessen auf NVIDIA RTX 4090 (24 GB VRAM).',
        columns: ['Modell', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Geschwindigkeit'],
        rows: [
          { 'Modell': 'Qwen3 7B', 'VRAM': '5,5 GB', 'MMLU (%)': '72,5', 'MATH-500 (%)': '62,5', 'HumanEval (%)': '74,6', 'Geschwindigkeit': '50–80 Tok/s' },
          { 'Modell': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5,5 GB', 'MMLU (%)': '70,1', 'MATH-500 (%)': '88,0', 'HumanEval (%)': '68,4', 'Geschwindigkeit': '50–80 Tok/s' },
          { 'Modell': 'Qwen3 14B', 'VRAM': '9,5 GB', 'MMLU (%)': '79,2', 'MATH-500 (%)': '76,1', 'HumanEval (%)': '82,1', 'Geschwindigkeit': '30–50 Tok/s' },
          { 'Modell': 'DS-R1-Distill-Qwen 14B', 'VRAM': '9,5 GB', 'MMLU (%)': '75,8', 'MATH-500 (%)': '90,0', 'HumanEval (%)': '75,5', 'Geschwindigkeit': '30–50 Tok/s' },
          { 'Modell': 'Qwen3 32B', 'VRAM': '20,5 GB', 'MMLU (%)': '83,4', 'MATH-500 (%)': '90,3', 'HumanEval (%)': '91,5', 'Geschwindigkeit': '15–30 Tok/s' },
          { 'Modell': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20,5 GB', 'MMLU (%)': '80,6', 'MATH-500 (%)': '94,0', 'HumanEval (%)': '83,2', 'Geschwindigkeit': '15–30 Tok/s' },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: 'Welches Modell bei welcher Hardware-Stufe',
        content: 'VRAM-Anforderungen sind bei beiden Familien identisch. Die Wahl zwischen DeepSeek und Qwen ist eine Aufgaben-Präferenz, keine Hardware-Einschränkung.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** Qwen3 7B für Programmierung/Chat; DS-R1-Distill-Qwen-7B für Mathe-Nachhilfe',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** Qwen3 14B für allgemeine Nutzung; DS-R1-Distill-Qwen-14B für Argumentationsketten',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen3-Coder 32B — bestes Allround-Modell in diesem Tier',
          '**48 GB+ (M2/M3 Ultra / RTX 4090 Dual):** Qwen3 72B (86,1 % MMLU, 97 % HumanEval)',
          '**Nur CPU (32+ GB RAM):** Qwen3 7B oder DS-R1-Distill 7B — beide laufen bei 3–8 Tok/s auf modernen Laptop-CPUs',
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
        title: 'Qwen3-Lokalmodelle erklärt',
        content: 'Qwen3 ist Alibabas Oktober-2025-Release mit Basis-, Coder- und Vision-Language-Varianten. Alle Basismodelle nutzen ein 128K-Kontextfenster und Apache-2.0-Lizenz.',
        items: [
          '**Qwen3 7B:** 5,5 GB VRAM. Bestes Allzweck-7B für Programmierung und chinesischen Text.',
          '**Qwen3 14B:** 9,5 GB VRAM. Bestes Gleichgewicht Qualität/Geschwindigkeit für 12-GB-VRAM-Setups.',
          '**Qwen3 32B:** 20,5 GB VRAM. 91,5 % HumanEval — bester Coding-Benchmark unter 48 GB VRAM.',
          '**Qwen3-Coder 32B:** Gleicher VRAM wie 32B-Basis, speziell für Code-Generierung feinabgestimmt.',
          'Ollama-Befehl: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: Beide Familien betreiben',
        content: 'Beide Modell-Familien laufen gut auf Apple Silicon via Ollama oder llama.cpp mit Metal-Beschleunigung.',
        columns: ['Hardware', 'Beste Modell-Stufe', 'Geschw. (7B)', 'Geschw. (32B)', 'Hinweise'],
        rows: [
          { 'Hardware': 'M2/M3 16 GB', 'Beste Modell-Stufe': 'Nur 7B', 'Geschw. (7B)': '30–50 Tok/s', 'Geschw. (32B)': 'N/A', 'Hinweise': 'Beide 7B-Modelle passen' },
          { 'Hardware': 'M3 Max 48 GB', 'Beste Modell-Stufe': '32B komfortabel', 'Geschw. (7B)': '80–120 Tok/s', 'Geschw. (32B)': '15–25 Tok/s', 'Hinweise': 'Bestes Consumer-Apple für 32B' },
          { 'Hardware': 'RTX 4090 24 GB', 'Beste Modell-Stufe': '32B', 'Geschw. (7B)': '100–150 Tok/s', 'Geschw. (32B)': '18–28 Tok/s', 'Hinweise': 'Beste Einzel-GPU für 32B' },
        ],
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: 'Anwendungsfall-Urteile',
        content: 'Ein-Satz-Antwort für jeden häufigen lokalen LLM-Anwendungsfall:',
        items: [
          '**Mathe-Nachhilfe:** DS-R1-Distill-Qwen-7B — 88 % MATH-500 vs 62,5 % für Qwen3 7B',
          '**Code-Generierung/-Review:** Qwen3-Coder 32B — 91,5 % HumanEval, bestes Consumer-Modell',
          '**Chinesischsprachiger Chat:** Qwen3 7B — native CJK-Tokenisierung, 30–40 % effizienter',
          '**Schritt-für-Schritt-Analyse:** DS-R1-Distill-Qwen-14B — produziert standardmäßig explizite Gedankenketten',
          '**Allgemeiner täglicher Assistent (8 GB VRAM):** Qwen3 7B — flüssigere Konversation',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Ist DeepSeek-R1 dasselbe wie die destillierten Modelle?', a: 'Nein. DeepSeek-R1 ist das 671B-MoE-Modell. Die destillierten Versionen (7B, 14B, 32B) sind separate dichte Modelle — praktisch für lokale Nutzung.' },
          { q: 'Benötigen DeepSeek und Qwen denselben VRAM?', a: 'Ja, bei gleicher Quantisierung. Beide 7B-Modelle benötigen ca. 5,5 GB bei Q4_K_M; beide 32B-Modelle benötigen 20,5 GB.' },
          { q: 'Was ist besser für chinesischen Text: DeepSeek oder Qwen?', a: 'Qwen3 ist deutlich besser. Es verwendet einen speziell entwickelten chinesischen Tokenizer, der 30–40 % effizienter bei CJK-Text ist.' },
          { q: 'Muss ich bei der Verwendung dieser Modelle die DSGVO beachten?', a: 'Bei lokaler Ausführung verarbeiten beide Modelle keine personenbezogenen Daten auf Drittservern. Das vereinfacht die DSGVO-Dokumentation erheblich, da kein Auftragsverarbeitungsvertrag mit externen Anbietern erforderlich ist.' },
          { q: 'Welches Modell für Mathe bei 8 GB VRAM?', a: 'DeepSeek-R1-Distill-Qwen-7B. Es erzielt 88 % MATH-500 vs 62,5 % für Qwen3 7B bei identischem VRAM.' },
          { q: 'Welche Lizenz haben diese Modelle?', a: 'Qwen3 verwendet Apache 2.0 — kommerzielle Nutzung ist erlaubt. DeepSeek-R1-Destillate verwenden die MIT-Lizenz. Beide sind für kommerzielle Deployments geeignet.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Verwandte Artikel',
        items: [
          '[Qwen Lokal-Deployment-Guide 2026](/de/local-llms/qwen-local-deployment-guide-2026) — Vollständige Hardware-Tabelle für alle Qwen3-Varianten',
          '[GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 vs 4070 vs 4090',
          '[Qwen vs Llama vs Mistral 2026](/de/local-llms/qwen-vs-llama-vs-mistral) — Drei-Wege-Vergleich',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: Lokaler LLM-Vergleich 2026',
      description: 'DeepSeek-R1 destilliert vs Qwen3 lokal: VRAM, MMLU, MATH-500, HumanEval Benchmarks. Welches Modell bei welcher Hardware-Stufe.',
      url: 'https://www.promptquorum.com/de/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen3' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist DeepSeek-R1 dasselbe wie die destillierten Modelle?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. DeepSeek-R1 ist das 671B-MoE-Modell. Die destillierten Versionen sind separate dichte Modelle für lokale Nutzung.' } },
        { '@type': 'Question', name: 'Welches Modell für Mathe bei 8 GB VRAM?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. Es erzielt 88 % MATH-500 vs 62,5 % für Qwen3 7B bei identischem VRAM.' } },
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
      'Les modèles distillés DeepSeek-R1 et Qwen3 sont les deux familles dominantes pour le déploiement local en 2026. Les deux nécessitent la même VRAM à nombre de paramètres équivalent — 5,5 Go pour 7B en Q4_K_M — mais sont optimisées pour des points forts opposés. Les distillats DeepSeek-R1 dominent en mathématiques et raisonnement pas à pas ; Qwen3 domine en code et en traitement du texte chinois.',
    metaDescription:
      'DeepSeek-R1 distillé vs Qwen3 local : tableau comparatif VRAM, MMLU, MATH-500, HumanEval. Quel modèle faire tourner à chaque niveau matériel en 2026.',
    twitterDescription:
      'DeepSeek-R1 distillé vs Qwen3 : même VRAM, forces différentes. Maths → DeepSeek. Code → Qwen.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen LLM local',
    targetKeywords: ['deepseek vs qwen llm local 2026', 'deepseek r1 distillé vs qwen2.5', 'meilleur llm local maths'],
    leadAnswerBlock:
      '**Pour les mathématiques, DeepSeek-R1-Distill-Qwen-32B gagne (94 % MATH-500 contre 90,3 % pour Qwen3 32B). Pour le code, Qwen3 32B gagne (91,5 % HumanEval contre 83,2 %). Les deux nécessitent une VRAM identique à nombre de paramètres équivalent.**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled (94% MATH-500). Code/Chinese: Qwen3 (91.5% HumanEval).', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen3-Coder 32B', 'Same VRAM'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1 destilliert. Code: Qwen3.', bullets: ['Mathe: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen3-Coder 32B'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement : DeepSeek ou Qwen ?', answer: 'Pour les maths, DeepSeek-R1 distillé est plus fort (94 % MATH-500 à 32B). Pour le code, Qwen3 est plus fort (91,5 % HumanEval à 32B).', bullets: ['Maths : DeepSeek-R1-Distill-Qwen-32B (94 % MATH-500)', 'Code : Qwen3-Coder 32B (91,5 % HumanEval)', 'Même VRAM aux deux'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学：DeepSeek-R1蒸留。コード：Qwen3。', bullets: ['数学: DeepSeek-R1', 'コーディング: Qwen3'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学：DeepSeek-R1蒸馏。编程：Qwen3。', bullets: ['数学: DeepSeek-R1', '编程: Qwen3'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'Résumé', anchor: 'tldr' },
      { label: 'Tableau de benchmarks', anchor: 'benchmark-table' },
      { label: 'Niveaux matériels', anchor: 'hardware-tiers' },
      { label: 'Modèles DeepSeek', anchor: 'deepseek-models' },
      { label: 'Modèles Qwen3', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'Verdicts par usage', anchor: 'use-case-verdicts' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Les distillats DeepSeek-R1 dominent en mathématiques ; Qwen3 domine en code et texte chinois — avec la même VRAM à nombre de paramètres équivalent.' },
      { type: 'plain-terms', content: 'DeepSeek a publié un modèle de raisonnement (R1) et des versions distillées plus petites pour usage local. Qwen3 est la famille polyvalente d\'Alibaba. Les deux modèles 7B tiennent dans 5,5 Go de VRAM. La différence : DeepSeek est meilleur en maths ; Qwen est meilleur pour le code et le texte chinois.' },
    ],
    sections: {
      tldr: { id: 'tldr', title: 'Résumé', isTldr: true, items: ['Même VRAM : les deux modèles 7B nécessitent 5,5 Go en Q4_K_M ; les 32B nécessitent 20,5 Go', 'Maths : DeepSeek-R1-Distill-Qwen-32B gagne (94 % MATH-500 vs 90,3 %)', 'Code : Qwen3-Coder 32B gagne (91,5 % HumanEval vs 83,2 %)', 'Texte chinois : Qwen3 — tokenisation native, 30–40 % plus efficace sur le CJK', 'Raisonnement : les distillats DeepSeek-R1 produisent des chaînes de pensée par défaut', 'Conformité RGPD : les deux fonctionnent entièrement localement — aucun transfert de données'] },
      benchmarkTable: { id: 'benchmark-table', title: 'Tableau de benchmarks direct', content: 'Tous les scores en quantisation Q4_K_M.', columns: ['Modèle', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', 'Vitesse'], rows: [{ 'Modèle': 'Qwen3 7B', 'VRAM': '5,5 Go', 'MMLU (%)': '72,5', 'MATH-500 (%)': '62,5', 'HumanEval (%)': '74,6', 'Vitesse': '50–80 t/s' }, { 'Modèle': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5,5 Go', 'MMLU (%)': '70,1', 'MATH-500 (%)': '88,0', 'HumanEval (%)': '68,4', 'Vitesse': '50–80 t/s' }, { 'Modèle': 'Qwen3 32B', 'VRAM': '20,5 Go', 'MMLU (%)': '83,4', 'MATH-500 (%)': '90,3', 'HumanEval (%)': '91,5', 'Vitesse': '15–30 t/s' }, { 'Modèle': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20,5 Go', 'MMLU (%)': '80,6', 'MATH-500 (%)': '94,0', 'HumanEval (%)': '83,2', 'Vitesse': '15–30 t/s' }], },
      hardwareTiers: { id: 'hardware-tiers', title: 'Quel modèle à quel niveau matériel', content: 'Les besoins VRAM sont identiques entre les deux familles. Le choix est une préférence de tâche.', items: ['**8 Go VRAM (RTX 3060 / M2 16 Go) :** Qwen3 7B pour le code ; DS-R1-Distill-Qwen-7B pour les maths', '**24 Go VRAM (RTX 4090 / M3 Max 48 Go) :** Qwen3-Coder 32B — meilleur modèle polyvalent', '**CPU uniquement (32+ Go RAM) :** Qwen3 7B ou DS-R1-Distill 7B — 3–8 t/s sur CPU moderne'] },
      deepseekModels: { id: 'deepseek-models', title: 'Modèles locaux DeepSeek expliqués', content: 'DeepSeek-R1 est un modèle MoE 671B nécessitant du matériel serveur. Pour usage local, les versions distillées sont l\'option pratique.', items: ['**DS-R1-Distill-Qwen-7B :** 5,5 Go VRAM. 88 % MATH-500 — meilleur modèle maths du tier 7B.', '**DS-R1-Distill-Qwen-32B :** 20,5 Go VRAM. 94 % MATH-500 — meilleur score maths parmi les modèles grand public.', 'Commande Ollama : `ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Modèles locaux Qwen3 expliqués', content: 'Qwen3 est la version d\'octobre 2025 d\'Alibaba. Tous les modèles de base utilisent un contexte de 128K tokens et une licence Apache 2.0.', items: ['**Qwen3 7B :** 5,5 Go VRAM. Meilleur polyvalent 7B pour le code et le texte chinois.', '**Qwen3-Coder 32B :** 20,5 Go VRAM. 91,5 % HumanEval — meilleur modèle de code pour matériel grand public.', 'Commande Ollama : `ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA', content: 'Les deux familles fonctionnent bien sur Apple Silicon via Ollama avec accélération Metal.', columns: ['Matériel', 'Meilleur tier', 'Vitesse (7B)', 'Vitesse (32B)'], rows: [{ 'Matériel': 'M2/M3 16 Go', 'Meilleur tier': '7B uniquement', 'Vitesse (7B)': '30–50 t/s', 'Vitesse (32B)': 'N/A' }, { 'Matériel': 'M3 Max 48 Go', 'Meilleur tier': '32B confortablement', 'Vitesse (7B)': '80–120 t/s', 'Vitesse (32B)': '15–25 t/s' }, { 'Matériel': 'RTX 4090 24 Go', 'Meilleur tier': '32B', 'Vitesse (7B)': '100–150 t/s', 'Vitesse (32B)': '18–28 t/s' }], },
      useCaseVerdicts: { id: 'use-case-verdicts', title: 'Verdicts par cas d\'usage', content: 'Réponse en une phrase pour chaque usage courant :', items: ['**Maths / cours particuliers :** DS-R1-Distill-Qwen-7B — 88 % MATH-500 vs 62,5 % pour Qwen3 7B', '**Génération / révision de code :** Qwen3-Coder 32B — 91,5 % HumanEval', '**Chat en chinois :** Qwen3 7B — tokenisation CJK native, 30–40 % plus efficace', '**Conformité RGPD :** les deux options — exécution 100 % locale, pas de transfert de données'] },
      faqSection: { id: 'faq', title: 'FAQ', faqs: [
        { q: 'DeepSeek-R1 est-il identique aux modèles distillés ?', a: 'Non. DeepSeek-R1 est le modèle MoE 671B. Les versions distillées (7B, 14B, 32B) sont des modèles denses séparés, pratiques pour usage local.' },
        { q: 'DeepSeek et Qwen nécessitent-ils la même VRAM ?', a: 'Oui, à quantisation équivalente. Les deux modèles 7B nécessitent environ 5,5 Go en Q4_K_M ; les 32B nécessitent 20,5 Go.' },
        { q: 'Lequel est le mieux pour le texte chinois ?', a: 'Qwen3 est nettement meilleur. Il utilise un tokeniseur chinois natif, 30–40 % plus efficace sur le texte CJK.' },
        { q: 'Ces modèles sont-ils conformes au RGPD ?', a: 'En exécution locale, aucune donnée ne quitte votre matériel. Cela simplifie considérablement la documentation RGPD : pas de DPA requis avec des fournisseurs externes. Consultez un juriste pour votre situation spécifique.' },
      ] },
      relatedReading: { id: 'related-reading', title: 'Lectures connexes', items: ['[Guide de déploiement local Qwen 2026](/fr/local-llms/qwen-local-deployment-guide-2026) — Tableau matériel complet', '[Guide d\'achat GPU pour LLM locaux 2026](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026)', '[Qwen vs Llama vs Mistral 2026](/fr/local-llms/qwen-vs-llama-vs-mistral)'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen : Comparaison LLM local 2026', description: 'DeepSeek-R1 distillé vs Qwen3 local : VRAM, MMLU, MATH-500, HumanEval. Quel modèle à quel niveau matériel.', url: 'https://www.promptquorum.com/fr/power-local-llm/deepseek-vs-qwen-local-comparison-2026', inLanguage: 'fr', author: { '@type': 'Person', name: 'Hans Kuepper' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen3' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
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
      'DeepSeek-R1蒸留モデルとQwen3は、2026年のローカル展開における2大主要ファミリーです。同じパラメータ数では同一のVRAMを必要とし——7BのQ4_K_Mで5.5 GB——しかし最適化されている強みは正反対です。DeepSeek-R1蒸留は数学とステップバイステップ推論で優位；Qwen3はコーディングと中国語テキストで優位です。',
    metaDescription:
      'DeepSeek-R1蒸留 vs Qwen3ローカル：VRAM・MMLU・MATH-500・HumanEvalの直接比較。2026年における各ハードウェア層での最適モデル選択ガイド。',
    twitterDescription:
      'DeepSeek-R1蒸留 vs Qwen3：同じVRAM、異なる強み。数学→DeepSeek。コード→Qwen。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen ローカルLLM',
    targetKeywords: ['deepseek vs qwen ローカル 2026', 'deepseek r1蒸留 vs qwen2.5', 'ローカルllm 数学'],
    leadAnswerBlock:
      '**数学では、DeepSeek-R1-Distill-Qwen-32BがMATH-500 94%でQwen3 32B（90.3%）を上回ります。コーディングでは、Qwen3 32BがHumanEval 91.5%でDeepSeek蒸留（83.2%）を上回ります。両者は同じパラメータ数で同一のVRAMを必要とします。**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled. Code/Chinese: Qwen3.', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen3-Coder 32B'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1. Code: Qwen3.', bullets: ['Mathe: DeepSeek-R1', 'Code: Qwen3'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement ?', answer: 'Maths: DeepSeek-R1. Code: Qwen3.', bullets: ['Maths: DeepSeek-R1', 'Code: Qwen3'], updatedDate: '2026-05' },
      ja: { question: 'ローカルで優れているのはDeepSeekとQwenのどちら？', answer: '数学・推論ではDeepSeek-R1蒸留モデルが優れています（32B MATH-500 94%）。コーディングと中国語ではQwen3が優れています（32B HumanEval 91.5%）。', bullets: ['数学: DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）', 'コーディング: Qwen3-Coder 32B（HumanEval 91.5%）', '中国語テキスト: Qwen3（ネイティブトークナイゼーション）', '同じVRAM：どちらの7Bモデルも5.5 GBが必要'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学：DeepSeek-R1蒸馏。编程：Qwen3。', bullets: ['数学: DeepSeek-R1', '编程: Qwen3'], updatedDate: '2026-05' },
    },
    toc: [
      { label: 'まとめ', anchor: 'tldr' },
      { label: 'ベンチマーク表', anchor: 'benchmark-table' },
      { label: 'ハードウェア層別ガイド', anchor: 'hardware-tiers' },
      { label: 'DeepSeekモデル解説', anchor: 'deepseek-models' },
      { label: 'Qwen3モデル解説', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: 'ユースケース別判定', anchor: 'use-case-verdicts' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1蒸留は数学・推論で優位；Qwen3はコーディングと中国語テキストで優位——同じパラメータ数で同一のVRAMを必要とします。' },
      { type: 'plain-terms', content: 'DeepSeekは推論特化モデル（R1）を公開し、ローカル利用向けに小型の蒸留版を提供しています。Qwen3はアリババの汎用ファミリーです。どちらの7Bモデルも5.5 GBのVRAMに収まります。違いは得意分野：DeepSeekは数学が得意、Qwenはコーディングと中国語が得意です。' },
    ],
    sections: {
      tldr: { id: 'tldr', title: 'まとめ', isTldr: true, items: ['同じVRAM：どちらの7Bモデルも5.5 GB（Q4_K_M）；32Bは20.5 GB', '数学：DeepSeek-R1-Distill-Qwen-32Bが勝利（MATH-500 94% vs 90.3%）', 'コーディング：Qwen3-Coder 32Bが勝利（HumanEval 91.5% vs 83.2%）', '中国語：Qwen3が勝利——ネイティブCJKトークナイゼーション、30–40%効率向上', '推論チェーン：DeepSeek-R1蒸留はデフォルトで長い思考連鎖を生成'] },
      benchmarkTable: { id: 'benchmark-table', title: '直接ベンチマーク比較', content: 'すべてのスコアはQ4_K_M量子化での値。', columns: ['モデル', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', '速度（tok/s）'], rows: [{ 'モデル': 'Qwen3 7B', 'VRAM': '5.5 GB', 'MMLU (%)': '72.5', 'MATH-500 (%)': '62.5', 'HumanEval (%)': '74.6', '速度（tok/s）': '50–80' }, { 'モデル': 'DS-R1-Distill-Qwen 7B', 'VRAM': '5.5 GB', 'MMLU (%)': '70.1', 'MATH-500 (%)': '88.0', 'HumanEval (%)': '68.4', '速度（tok/s）': '50–80' }, { 'モデル': 'Qwen3 32B', 'VRAM': '20.5 GB', 'MMLU (%)': '83.4', 'MATH-500 (%)': '90.3', 'HumanEval (%)': '91.5', '速度（tok/s）': '15–30' }, { 'モデル': 'DS-R1-Distill-Qwen 32B', 'VRAM': '20.5 GB', 'MMLU (%)': '80.6', 'MATH-500 (%)': '94.0', 'HumanEval (%)': '83.2', '速度（tok/s）': '15–30' }], },
      hardwareTiers: { id: 'hardware-tiers', title: 'ハードウェア層別おすすめモデル', content: 'VRAM要件は両ファミリーで同一です。DeepSeekとQwenの選択はタスクの好みであり、ハードウェアの制約ではありません。', items: ['**8 GB VRAM（RTX 3060 / M2 16 GB）：** コーディング・チャットはQwen3 7B；数学tutoring はDS-R1-Distill-Qwen-7B', '**24 GB VRAM（RTX 4090 / M3 Max 48 GB）：** Qwen3-Coder 32B——このティアで最高の汎用モデル', '**CPUのみ（32+ GB RAM）：** Qwen3 7BまたはDS-R1-Distill 7B——3〜8 tok/sで動作'] },
      deepseekModels: { id: 'deepseek-models', title: 'DeepSeekローカルモデル解説', content: 'DeepSeek-R1は671B MoEモデルでサーバー用ハードウェアが必要です。ローカル利用には蒸留版が実用的な選択肢です。', items: ['**DS-R1-Distill-Qwen-7B：** 5.5 GB VRAM。MATH-500 88%——7Bティアで最強の数学モデル。', '**DS-R1-Distill-Qwen-32B：** 20.5 GB VRAM。MATH-500 94%——コンシューマー向けモデル中最高の数学スコア。', 'Ollamaコマンド：`ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Qwen3ローカルモデル解説', content: 'Qwen3はアリババの2025年10月リリースで、ベース・Coder・Vision-Languageバリアントをカバーします。', items: ['**Qwen3 7B：** 5.5 GB VRAM。コーディングと中国語テキストに最適な汎用7Bモデル。', '**Qwen3-Coder 32B：** 20.5 GB VRAM。HumanEval 91.5%——コンシューマー向けで最高のコーディングモデル。', 'Ollamaコマンド：`ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA', content: '両ファミリーともOllamaとMetal加速でApple Siliconで良好に動作します。', columns: ['ハードウェア', '最適モデル層', '速度（7B）', '速度（32B）'], rows: [{ 'ハードウェア': 'M2/M3 16 GB', '最適モデル層': '7Bのみ', '速度（7B）': '30–50 tok/s', '速度（32B）': 'N/A' }, { 'ハードウェア': 'M3 Max 48 GB', '最適モデル層': '32B (快適)', '速度（7B）': '80–120 tok/s', '速度（32B）': '15–25 tok/s' }, { 'ハードウェア': 'RTX 4090 24 GB', '最適モデル層': '32B', '速度（7B）': '100–150 tok/s', '速度（32B）': '18–28 tok/s' }], },
      useCaseVerdicts: { id: 'use-case-verdicts', title: 'ユースケース別判定', content: '各ユースケースに対する一文の回答：', items: ['**数学/家庭教師：** DS-R1-Distill-Qwen-7B——MATH-500 88% vs Qwen3 7Bの62.5%', '**コード生成・レビュー：** Qwen3-Coder 32B——HumanEval 91.5%', '**中国語チャット：** Qwen3 7B——ネイティブCJKトークナイゼーション', '**ステップバイステップ分析：** DS-R1-Distill-Qwen-14B——デフォルトで明示的な思考連鎖を生成'] },
      faqSection: { id: 'faq', title: 'よくある質問', faqs: [
        { q: 'DeepSeek-R1と蒸留モデルは同じですか？', a: 'いいえ。DeepSeek-R1は671B MoEモデルです。蒸留版（7B、14B、32B）はローカル利用のために訓練された別の高密度モデルです。' },
        { q: 'DeepSeekとQwenは同じVRAMを使いますか？', a: 'はい、同じ量子化レベルで。両方の7Bモデルは約5.5 GB（Q4_K_M）が必要；両方の32Bは20.5 GBが必要です。' },
        { q: '中国語テキストにはどちらが良いですか？', a: 'Qwen3が大幅に優れています。CJKテキストで30〜40%効率が高いネイティブ中国語トークナイザーを使用しています。' },
        { q: '8 GB VRAMで数学に最適なモデルは？', a: 'DeepSeek-R1-Distill-Qwen-7B。同じVRAMでMATH-500 88%（Qwen3 7Bは62.5%）を達成します。' },
        { q: 'METI AIガイドラインへの対応は？', a: 'ローカル実行では、データはお使いのハードウェア上のみで処理されます。METIのAI利活用ガイドラインにおけるデータ管理要件を満たしやすくなります。モデル名・バージョンの記録はどちらのモデルも同様に必要です。' },
      ] },
      relatedReading: { id: 'related-reading', title: '関連記事', items: ['[Qwenローカル展開ガイド 2026](/ja/local-llms/qwen-local-deployment-guide-2026) — 全Qwen3バリアントのハードウェア表', '[ローカルLLM向けGPU購入ガイド 2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026)', '[Qwen vs Llama vs Mistral 2026](/ja/local-llms/qwen-vs-llama-vs-mistral)'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen：ローカルLLM比較 2026', description: 'DeepSeek-R1蒸留 vs Qwen3ローカル：VRAM・MMLU・MATH-500・HumanEvalの直接比較。', url: 'https://www.promptquorum.com/ja/power-local-llm/deepseek-vs-qwen-local-comparison-2026', inLanguage: 'ja', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen3' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'ja', mainEntity: [{ '@type': 'Question', name: 'DeepSeekとQwenは同じVRAMを使いますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。両方の7Bモデルは約5.5 GB（Q4_K_M）が必要です。' } }, { '@type': 'Question', name: '中国語にはどちらが良い？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3。ネイティブ中国語トークナイザーでCJKテキストを30〜40%効率よく処理します。' } }] },
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
      'DeepSeek-R1蒸馏模型和Qwen3是2026年本地部署的两大主流系列。两者在同等参数规模下所需显存相同——7B Q4_K_M格式仅需5.5 GB——但各有专长。DeepSeek-R1蒸馏模型在数学和逐步推理方面占优；Qwen3在编程和中文文本处理方面占优。本文提供直接基准对比表、硬件配置建议和每种常见使用场景的一句话结论。',
    metaDescription:
      '通义千问与幻方深度求索本地大模型对比：二者在相同显存占用下性能各异——深度求索蒸馏版在数学推理上领先，通义千问在代码生成和中文任务上领先。含完整基准测试表格与硬件选型建议，2026年更新。',
    twitterDescription:
      'DeepSeek-R1蒸馏 vs Qwen3：显存相同，强项不同。数学→DeepSeek。编程→Qwen。',
    readTime: '11分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen 本地LLM',
    targetKeywords: ['deepseek vs qwen 本地 2026', 'deepseek r1蒸馏 vs qwen2.5', '本地llm数学', 'qwen本地部署'],
    leadAnswerBlock:
      '**数学方面：DeepSeek-R1-Distill-Qwen-32B以MATH-500 94%击败Qwen3 32B（90.3%）。编程方面：Qwen3 32B以HumanEval 91.5%击败DeepSeek蒸馏（83.2%）。两者在同等参数规模下所需显存完全相同。**',
    quickAnswerTop: {
      en: { question: 'Which is better locally: DeepSeek or Qwen?', answer: 'Math/reasoning: DeepSeek-R1 distilled. Code/Chinese: Qwen3.', bullets: ['Math: DeepSeek-R1-Distill-Qwen-32B', 'Code: Qwen3-Coder 32B'], updatedDate: '2026-05' },
      de: { question: 'Was ist besser lokal: DeepSeek oder Qwen?', answer: 'Mathematik: DeepSeek-R1. Code: Qwen3.', bullets: ['Mathe: DeepSeek-R1', 'Code: Qwen3'], updatedDate: '2026-05' },
      fr: { question: 'Lequel est le meilleur localement ?', answer: 'Maths: DeepSeek-R1. Code: Qwen3.', bullets: ['Maths: DeepSeek-R1', 'Code: Qwen3'], updatedDate: '2026-05' },
      ja: { question: 'DeepSeekとQwenどちらが優れている？', answer: '数学：DeepSeek-R1。コード：Qwen3。', bullets: ['数学: DeepSeek-R1', 'コード: Qwen3'], updatedDate: '2026-05' },
      zh: { question: 'DeepSeek 和 Qwen 哪个本地运行更好？', answer: '数学和推理：DeepSeek-R1蒸馏模型更强（32B MATH-500达94%）。编程和中文文本：Qwen3更强（32B HumanEval达91.5%）。同等参数量下两者所需硬件相同。', bullets: ['数学/推理：DeepSeek-R1-Distill-Qwen-32B（MATH-500 94%）', '编程：Qwen3-Coder 32B（HumanEval 91.5%）', '中文文本：Qwen3（原生分词，效率提升30–40%）', '显存相同：两款7B模型Q4_K_M均需5.5 GB', '符合《数据安全法》：本地运行，数据不出设备'], updatedDate: '2026-05' },
    },
    toc: [
      { label: '摘要', anchor: 'tldr' },
      { label: '基准对比表', anchor: 'benchmark-table' },
      { label: '硬件配置建议', anchor: 'hardware-tiers' },
      { label: 'DeepSeek模型解析', anchor: 'deepseek-models' },
      { label: 'Qwen3模型解析', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: '使用场景结论', anchor: 'use-case-verdicts' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'DeepSeek-R1蒸馏在数学推理上占优；Qwen3在编程和中文文本上占优——两者在同等参数规模下所需显存完全相同。' },
      { type: 'plain-terms', content: 'DeepSeek发布了推理专用模型（R1），并提供了适合本地使用的小型蒸馏版本。Qwen3是阿里巴巴的通用系列。两款7B模型均可在5.5 GB显存中运行。区别在于强项：DeepSeek擅长数学，Qwen擅长编程和中文。' },
    ],
    sections: {
      tldr: { id: 'tldr', title: '摘要', isTldr: true, items: ['显存相同：两款7B模型Q4_K_M均需5.5 GB；两款32B均需20.5 GB', '数学：DeepSeek-R1-Distill-Qwen-32B胜出（MATH-500 94% vs 90.3%）', '编程：Qwen3-Coder 32B胜出（HumanEval 91.5% vs 83.2%）', '中文文本：Qwen3胜出——原生分词，CJK文本效率提升30–40%', '逐步推理：DeepSeek-R1蒸馏默认生成长思维链', '符合《数据安全法》：本地运行，数据不出设备，满足数据驻留要求'] },
      benchmarkTable: { id: 'benchmark-table', title: '基准测试直接对比', content: '所有分数均为Q4_K_M量化格式，速度在NVIDIA RTX 4090（24 GB显存）上测试。', columns: ['模型', '显存', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', '速度（词元/秒）'], rows: [{ '模型': 'Qwen3 7B', '显存': '5.5 GB', 'MMLU (%)': '72.5', 'MATH-500 (%)': '62.5', 'HumanEval (%)': '74.6', '速度（词元/秒）': '50–80' }, { '模型': 'DS-R1蒸馏-Qwen 7B', '显存': '5.5 GB', 'MMLU (%)': '70.1', 'MATH-500 (%)': '88.0', 'HumanEval (%)': '68.4', '速度（词元/秒）': '50–80' }, { '模型': 'Qwen3 14B', '显存': '9.5 GB', 'MMLU (%)': '79.2', 'MATH-500 (%)': '76.1', 'HumanEval (%)': '82.1', '速度（词元/秒）': '30–50' }, { '模型': 'DS-R1蒸馏-Qwen 14B', '显存': '9.5 GB', 'MMLU (%)': '75.8', 'MATH-500 (%)': '90.0', 'HumanEval (%)': '75.5', '速度（词元/秒）': '30–50' }, { '模型': 'Qwen3 32B', '显存': '20.5 GB', 'MMLU (%)': '83.4', 'MATH-500 (%)': '90.3', 'HumanEval (%)': '91.5', '速度（词元/秒）': '15–30' }, { '模型': 'DS-R1蒸馏-Qwen 32B', '显存': '20.5 GB', 'MMLU (%)': '80.6', 'MATH-500 (%)': '94.0', 'HumanEval (%)': '83.2', '速度（词元/秒）': '15–30' }], },
      hardwareTiers: { id: 'hardware-tiers', title: '各硬件配置推荐模型', content: '两个系列在相同参数量下显存需求相同。选择DeepSeek还是Qwen取决于任务需求，而非硬件限制。', items: ['**8 GB显存（RTX 3060 / M2 16 GB统一内存）：** 编程/聊天选Qwen3 7B；数学辅导选DS-R1蒸馏-Qwen-7B', '**12 GB显存（RTX 3080 / M2 Pro 24 GB）：** 通用任务选Qwen3 14B；推理链选DS-R1蒸馏-Qwen-14B', '**24 GB显存（RTX 4090 / M3 Max 48 GB）：** Qwen3-Coder 32B——此配置下最佳全能模型', '**48 GB+（M2/M3 Ultra / 双RTX 4090）：** Qwen3 72B（MMLU 86.1%，HumanEval 97%）', '**仅CPU（32+ GB内存）：** Qwen3 7B或DS-R1蒸馏 7B——现代笔记本CPU上速度3–8词元/秒'] },
      deepseekModels: { id: 'deepseek-models', title: 'DeepSeek本地模型解析', content: 'DeepSeek-R1是671B MoE模型，需要服务器级硬件。本地使用的实用选择是蒸馏版本。', items: ['**DS-R1蒸馏-Qwen-7B：** 5.5 GB显存。MATH-500 88%——7B层级中最强的数学模型。', '**DS-R1蒸馏-Qwen-14B：** 9.5 GB显存。14B层级中最佳的推理效率。', '**DS-R1蒸馏-Qwen-32B：** 20.5 GB显存。所有消费级模型中最高的MATH-500分数（94%）。', '**DeepSeek-V3（完整版）：** 671B MoE——Q4格式需400+ GB内存——不适合消费硬件。', 'Ollama命令：`ollama run deepseek-r1:7b`'] },
      qwenModels: { id: 'qwen-models', title: 'Qwen3本地模型解析', content: 'Qwen3是阿里巴巴2025年10月发布的系列，涵盖基础版、Coder和视觉语言变体。所有基础模型使用128K上下文窗口和Apache 2.0许可证。', items: ['**Qwen3 7B：** 5.5 GB显存。编程和中文文本的最佳通用7B模型。', '**Qwen3 14B：** 9.5 GB显存。12 GB显存配置下质量与速度的最佳平衡点。', '**Qwen3 32B：** 20.5 GB显存。HumanEval 91.5%——48 GB显存以下最佳编程基准分数。', '**Qwen3-Coder 32B：** 显存需求与32B基础版相同，专门针对代码生成进行微调。', 'Ollama命令：`ollama run qwen2.5:14b-instruct-q4_K_M`'] },
      macVsNvidia: { id: 'mac-vs-nvidia', title: 'Apple Silicon vs NVIDIA：运行两个系列', content: '两个模型系列均可通过Ollama和Metal加速在Apple Silicon上良好运行。', columns: ['硬件', '最佳模型层级', '速度（7B）', '速度（32B）', '备注'], rows: [{ '硬件': 'M2/M3 16 GB统一内存', '最佳模型层级': '仅7B', '速度（7B）': '30–50词元/秒', '速度（32B）': 'N/A', '备注': '两款7B模型均可运行' }, { '硬件': 'M3 Max 48 GB', '最佳模型层级': '32B（流畅）', '速度（7B）': '80–120词元/秒', '速度（32B）': '15–25词元/秒', '备注': '最佳消费级Apple Silicon运行32B' }, { '硬件': 'RTX 4090 24 GB', '最佳模型层级': '32B', '速度（7B）': '100–150词元/秒', '速度（32B）': '18–28词元/秒', '备注': '最佳单GPU运行32B' }], },
      useCaseVerdicts: { id: 'use-case-verdicts', title: '使用场景结论', content: '针对每种常见本地LLM使用场景的一句话结论：', items: ['**数学/辅导：** DS-R1蒸馏-Qwen-7B——MATH-500 88%，远超Qwen3 7B（62.5%），显存需求相同', '**代码生成/审查：** Qwen3-Coder 32B——HumanEval 91.5%，消费级最高分', '**中文对话：** Qwen3 7B——原生CJK分词，效率提升30–40%', '**逐步分析推理：** DS-R1蒸馏-Qwen-14B——默认生成明确的思维链', '**通用日常助手（8 GB显存）：** Qwen3 7B——对话更流畅，避免DeepSeek在简单任务中的过度推理', '**企业合规部署（中国）：** Qwen3——Apache 2.0许可，阿里巴巴出品，更易满足CAC合规文档要求'] },
      faqSection: { id: 'faq', title: '常见问题', faqs: [
        { q: 'DeepSeek-R1和蒸馏模型是同一个吗？', a: '不是。DeepSeek-R1是671B MoE模型，需要服务器级硬件。蒸馏版本（7B、14B、32B）是独立的密集型模型，专为本地使用设计。' },
        { q: 'DeepSeek和Qwen显存需求相同吗？', a: '是的，在相同量化级别下。两款7B模型Q4_K_M格式约需5.5 GB；两款32B模型均需20.5 GB。' },
        { q: '中文文本哪个更好：DeepSeek还是Qwen？', a: 'Qwen3明显更好。它使用专为中文设计的分词器，处理CJK文本效率提升30–40%。' },
        { q: '8 GB显存下哪个模型最适合数学？', a: 'DeepSeek-R1蒸馏-Qwen-7B。相同显存下MATH-500达88%，远超Qwen3 7B的62.5%。' },
        { q: '本地运行是否符合中国《数据安全法》？', a: '本地推理意味着数据始终留在您的硬件上，无论模型来自哪家公司，均满足《数据安全法》的数据驻留要求。DeepSeek和Qwen本地运行均符合此要求。' },
        { q: 'DeepSeek-V3可以在本地运行吗？', a: '实际上不行，因为完整的DeepSeek-V3是671B MoE模型，Q4格式需要约400 GB内存，仅服务器级硬件可用。请改用蒸馏版本（7B/14B/32B）。' },
      ] },
      relatedReading: { id: 'related-reading', title: '相关阅读', items: ['[Qwen本地部署指南 2026](/zh/local-llms/qwen-local-deployment-guide-2026) — 所有Qwen3变体的完整硬件表', '[本地LLM显卡选购指南 2026](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — RTX 4060 vs 4070 vs 4090对比', '[Qwen vs Llama vs Mistral 2026](/zh/local-llms/qwen-vs-llama-vs-mistral) — 三方对比', '[Qwen本地部署指南2026](/zh/local-llms/qwen-local-deployment-guide-2026) — 通过Ollama逐步设置Qwen3 7B到72B。', '[DeepSeek v3本地硬件要求](/zh/prompt-bites/deepseek-v3-local-hardware-requirements) — 运行DeepSeek v3完整版和量化版的最低VRAM要求。'] },
    },
    schema: { '@context': 'https://schema.org', '@type': 'TechArticle', headline: 'DeepSeek vs Qwen：本地LLM对比 2026', description: 'DeepSeek-R1蒸馏 vs Qwen3本地部署：显存、MMLU、MATH-500、HumanEval基准直接对比，附各硬件配置推荐模型。', url: 'https://www.promptquorum.com/zh/power-local-llm/deepseek-vs-qwen-local-comparison-2026', inLanguage: 'zh', author: { '@type': 'Organization', name: 'PromptQuorum' }, publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' }, datePublished: '2026-05-26', dateModified: '2026-05-26', about: [{ '@type': 'Thing', name: 'DeepSeek R1' }, { '@type': 'Thing', name: 'Qwen3' }, { '@type': 'Thing', name: '本地LLM' }], speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] } },
    faqSchema: { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'zh', mainEntity: [{ '@type': 'Question', name: 'DeepSeek和Qwen显存需求相同吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。两款7B模型Q4_K_M均需约5.5 GB；两款32B均需20.5 GB。' } }, { '@type': 'Question', name: '本地运行是否符合中国《数据安全法》？', acceptedAnswer: { '@type': 'Answer', text: '本地推理意味着数据始终留在您的硬件上，满足《数据安全法》的数据驻留要求。' } }, { '@type': 'Question', name: 'DeepSeek-V3可以在本地运行吗？', acceptedAnswer: { '@type': 'Answer', text: '实际上不行。完整的DeepSeek-V3是671B MoE模型，Q4格式需约400 GB内存。请改用蒸馏版本。' } }] },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    slug: 'deepseek-vs-qwen-local-comparison-2026',
    title: 'DeepSeek vs Qwen: 로컬 LLM 비교 2026',
    seoTitle: 'DeepSeek vs Qwen 로컬 LLM 2026: 벤치마크 및 VRAM 비교',
    intro:
      'DeepSeek-R1 증류 모델과 Qwen3는 2026년 로컬 배포에서 가장 널리 사용되는 두 가지 모델 계열입니다. 동일한 파라미터 수에서 동일한 VRAM이 필요하며 — Q4_K_M 기준 7B 모델은 5.5 GB — 각각 서로 다른 강점에 최적화되어 있습니다. DeepSeek-R1 증류 모델은 수학 및 단계별 추론에서 우수하고, Qwen3는 코딩 및 중국어 텍스트 작업에서 우수합니다. 이 가이드는 직접적인 벤치마크 비교 표, 하드웨어 등급별 세부 분석, 그리고 일반적인 사용 사례별 한 문장 판정을 제공합니다.',
    metaDescription:
      'DeepSeek-R1 증류 vs Qwen3 로컬 LLM: VRAM, MMLU, MATH-500, HumanEval 직접 비교. 2026년 각 하드웨어 등급에서 실행할 모델 추천.',
    twitterDescription:
      'DeepSeek-R1 증류 vs Qwen3: 동일한 VRAM, 다른 강점. 수학 → DeepSeek. 코딩 → Qwen. 전체 벤치마크 표 포함.',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: 'DeepSeek vs Qwen 로컬 LLM',
    targetKeywords: [
      '로컬 llm 비교 2026',
      'deepseek r1 증류 vs qwen 비교',
      '로컬 llm 수학 추론 모델',
      'qwen 로컬 설치 방법',
      'deepseek 로컬 하드웨어 요구사항',
    ],
    leadAnswerBlock:
      '**수학 및 단계별 추론에서 DeepSeek-R1-Distill-Qwen-32B는 MATH-500 기준 94%를 달성하며 Qwen3 32B(90.3%)를 앞섭니다. 코딩과 중국어 텍스트에서는 Qwen3 32B가 HumanEval 기준 91.5%를 달성하며 DeepSeek 증류(83%)를 앞섭니다. 두 모델 모두 동일한 파라미터 수에서 동일한 VRAM이 필요합니다.**',
    quickAnswerTop: {
      ko: {
        question: '로컬에서 더 나은 모델은 DeepSeek인가요, Qwen인가요?',
        answer:
          '수학 및 추론 작업에서는 DeepSeek-R1 증류 모델이 더 강력합니다(32B에서 MATH-500 94%). 코딩 및 중국어 텍스트에서는 Qwen3가 더 강력합니다(32B에서 HumanEval 91.5%). 두 계열 모두 동일한 파라미터 수에서 동일한 하드웨어에서 실행됩니다.',
        bullets: [
          '수학/추론: DeepSeek-R1-Distill-Qwen-32B (MATH-500 94%)',
          '코딩: Qwen3-Coder 32B (HumanEval 91.5%)',
          '중국어 텍스트: Qwen3 7B–72B (네이티브 토크나이저)',
          '동일 VRAM: 7B 모델 모두 Q4_K_M 기준 5.5 GB 필요',
          'Apple Silicon: M 시리즈 통합 메모리에서 모두 잘 실행됨',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: 'tldr' },
      { label: '벤치마크 비교 표', anchor: 'benchmark-table' },
      { label: '하드웨어 등급별 가이드', anchor: 'hardware-tiers' },
      { label: 'DeepSeek 모델 설명', anchor: 'deepseek-models' },
      { label: 'Qwen3 모델 설명', anchor: 'qwen-models' },
      { label: 'Mac vs NVIDIA', anchor: 'mac-vs-nvidia' },
      { label: '사용 사례별 판정', anchor: 'use-case-verdicts' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      {
        type: 'one-sentence',
        text: 'DeepSeek-R1 증류 모델은 수학 및 추론에서 우수하고, Qwen3는 코딩과 중국어 텍스트에서 우수합니다 — 동일한 파라미터 수에서 동일한 VRAM이 필요합니다.',
      },
      {
        type: 'plain-terms',
        text: 'DeepSeek는 추론 특화 모델(R1)을 출시하고 로컬 사용을 위한 소형 증류 버전을 제공합니다. Qwen3는 알리바바의 범용 계열입니다. 7B 파라미터 기준으로 두 모델 모두 5.5 GB VRAM에 맞습니다. 차이는 강점에 있습니다: DeepSeek는 수학이 강하고, Qwen은 코딩과 중국어가 강합니다.',
      },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '핵심 요약',
        isTldr: true,
        items: [
          '동일 VRAM: 7B 모델 모두 Q4_K_M 기준 5.5 GB; 32B 모델 모두 20.5 GB 필요',
          '수학: DeepSeek-R1-Distill-Qwen-32B 우세 (MATH-500 94% vs 90.3%)',
          '코딩: Qwen3-Coder 32B 우세 (HumanEval 91.5% vs 83%)',
          '중국어 텍스트: Qwen3 우세 — 네이티브 토크나이저로 CJK 텍스트 30–40% 더 효율적',
          '추론 체인: DeepSeek-R1 증류 모델은 기본적으로 긴 사고 체인을 생성합니다',
          '범용 어시스턴트: Qwen3 14B가 다소 더 유창하며, DeepSeek 증류 14B는 단순 작업에서 과도한 추론 경향이 있습니다',
        ],
      },
      benchmarkTable: {
        id: 'benchmark-table',
        title: '벤치마크 직접 비교표',
        content:
          '모든 결과는 Q4_K_M 양자화 기준입니다. GPU 행의 속도는 NVIDIA RTX 4090 (24 GB VRAM), Mac 행은 Apple M3 Max 48 GB에서 측정했습니다.',
        columns: ['모델', 'VRAM', 'MMLU (%)', 'MATH-500 (%)', 'HumanEval (%)', '속도 (토큰/초)'],
        rows: [
          {
            '모델': 'Qwen3 7B',
            'VRAM': '5.5 GB',
            'MMLU (%)': '72.5',
            'MATH-500 (%)': '62.5',
            'HumanEval (%)': '74.6',
            '속도 (토큰/초)': '50–80',
          },
          {
            '모델': 'DS-R1-Distill-Qwen 7B',
            'VRAM': '5.5 GB',
            'MMLU (%)': '70.1',
            'MATH-500 (%)': '88.0',
            'HumanEval (%)': '68.4',
            '속도 (토큰/초)': '50–80',
          },
          {
            '모델': 'Qwen3 14B',
            'VRAM': '9.5 GB',
            'MMLU (%)': '79.2',
            'MATH-500 (%)': '76.1',
            'HumanEval (%)': '82.1',
            '속도 (토큰/초)': '30–50',
          },
          {
            '모델': 'DS-R1-Distill-Qwen 14B',
            'VRAM': '9.5 GB',
            'MMLU (%)': '75.8',
            'MATH-500 (%)': '90.0',
            'HumanEval (%)': '75.5',
            '속도 (토큰/초)': '30–50',
          },
          {
            '모델': 'Qwen3 32B',
            'VRAM': '20.5 GB',
            'MMLU (%)': '83.4',
            'MATH-500 (%)': '90.3',
            'HumanEval (%)': '91.5',
            '속도 (토큰/초)': '15–30',
          },
          {
            '모델': 'DS-R1-Distill-Qwen 32B',
            'VRAM': '20.5 GB',
            'MMLU (%)': '80.6',
            'MATH-500 (%)': '94.0',
            'HumanEval (%)': '83.2',
            '속도 (토큰/초)': '15–30',
          },
        ],
      },
      hardwareTiers: {
        id: 'hardware-tiers',
        title: '하드웨어 등급별 권장 모델',
        content:
          'VRAM 요구사항은 동일한 파라미터 크기에서 두 계열 모두 동일합니다. DeepSeek와 Qwen 중 선택은 하드웨어 제약이 아닌 작업 선호도에 따릅니다.',
        items: [
          '**8 GB VRAM (RTX 3060 / M2 16 GB):** 코딩/채팅에는 Qwen3 7B; 수학 튜터링에는 DS-R1-Distill-Qwen-7B',
          '**12 GB VRAM (RTX 3080 / M2 Pro 24 GB):** 범용 사용에는 Qwen3 14B; 추론 체인에는 DS-R1-Distill-Qwen-14B',
          '**24 GB VRAM (RTX 4090 / M3 Max 48 GB):** Qwen3-Coder 32B 또는 Qwen3 32B — 이 등급에서 최고의 범용 로컬 모델',
          '**48 GB+ (M2/M3 Ultra / RTX 4090 듀얼):** Qwen3 72B (MMLU 86.1%, HumanEval 97%) — GPT-4에 근접한 성능',
          '**CPU 전용 (32+ GB RAM):** Qwen3 7B 또는 DS-R1-Distill 7B — 최신 노트북 CPU에서 분당 3–8 토큰으로 동작',
        ],
      },
      deepseekModels: {
        id: 'deepseek-models',
        title: 'DeepSeek 로컬 모델 설명',
        content:
          'DeepSeek는 추론 모델 R1을 서버 수준 하드웨어가 필요한 671B MoE(전문가 혼합) 아키텍처로 출시했습니다. 소비자 하드웨어에서 로컬로 사용하기 위한 실용적인 선택은 증류 버전입니다 — R1의 체인 추론 방식을 복제하도록 훈련된 소형 밀집 모델입니다.',
        items: [
          '**DeepSeek-R1-Distill-Qwen-7B:** Q4_K_M 기준 5.5 GB VRAM. 7B 등급에서 가장 강력한 수학 모델 (MATH-500 88%). 긴 추론 체인을 생성하며, 빠른 채팅을 위해서는 시스템 프롬프트로 사고 체인을 비활성화할 수 있습니다.',
          '**DeepSeek-R1-Distill-Qwen-14B:** 9.5 GB VRAM. 14B 등급에서 VRAM당 최고의 추론 성능. 수학 튜터링, 논리 퍼즐, 구조화된 분석 작업에 이상적입니다.',
          '**DeepSeek-R1-Distill-Qwen-32B:** 20.5 GB VRAM. 소비자 하드웨어에서 실행 가능한 모든 모델 중 가장 높은 MATH-500 점수: 94%. 코딩보다 수학적 정확도가 우선일 때 사용하십시오.',
          '**DeepSeek-V3 (전체):** 671B MoE — Q4 형식으로 400 GB+ RAM 필요 — 소비자 하드웨어에서는 실용적이지 않습니다. 대신 증류 버전을 사용하십시오.',
          'Ollama 명령어: `ollama run deepseek-r1:7b` (기본적으로 Q4_K_M 증류 버전을 다운로드)',
        ],
      },
      qwenModels: {
        id: 'qwen-models',
        title: 'Qwen3 로컬 모델 설명',
        content:
          'Qwen3는 알리바바의 2025년 10월 출시 제품으로 베이스, Coder, Vision-Language 변형을 포함합니다. 모든 베이스 모델은 128K 컨텍스트 창과 Apache 2.0 라이선스를 사용합니다.',
        items: [
          '**Qwen3 7B:** 5.5 GB VRAM. 코딩 및 중국어 텍스트에 가장 적합한 7B 범용 모델. HumanEval 74.6%는 코드 분야에서 모든 7B 경쟁 모델을 능가합니다.',
          '**Qwen3 14B:** 9.5 GB VRAM. 품질과 속도의 최적 균형점. HumanEval 82.1%, MMLU 79.2%. 12 GB VRAM 설정 대부분에서 최선의 선택입니다.',
          '**Qwen3 32B:** 20.5 GB VRAM. HumanEval 91.5% — 48 GB VRAM 미만에서 최고의 코딩 벤치마크 점수.',
          '**Qwen3-Coder 32B:** 베이스 32B와 동일한 VRAM으로 코드 생성 및 리뷰에 특화 미세 조정됨. 코딩이 주요 작업일 때 베이스 대신 사용하십시오.',
          '**Qwen3 72B:** 46 GB VRAM. MMLU 86.1%, HumanEval 97%. 48 GB+ 통합 메모리(M2/M3 Ultra) 또는 멀티 GPU 설정에서만 실행 가능합니다.',
          'Ollama 명령어: `ollama run qwen2.5:14b-instruct-q4_K_M`',
        ],
      },
      macVsNvidia: {
        id: 'mac-vs-nvidia',
        title: 'Apple Silicon vs NVIDIA: 두 계열 실행',
        content:
          'DeepSeek 증류 모델과 Qwen3 모두 Ollama 또는 llama.cpp를 통해 Metal 가속으로 Apple Silicon에서 잘 동작합니다. 핵심 차이는 메모리 대역폭입니다.',
        columns: ['하드웨어', '최적 모델 등급', '속도 (7B)', '속도 (32B)', '비고'],
        rows: [
          {
            '하드웨어': 'M2/M3 16 GB',
            '최적 모델 등급': '7B 전용',
            '속도 (7B)': '30–50 토큰/초',
            '속도 (32B)': 'N/A',
            '비고': '두 7B 모델 모두 적합; 14B는 스왑 사용',
          },
          {
            '하드웨어': 'M3 Pro 36 GB',
            '최적 모델 등급': '14B 최적',
            '속도 (7B)': '60–90 토큰/초',
            '속도 (32B)': 'N/A',
            '비고': '14B 전속력; 32B는 스왑 사용',
          },
          {
            '하드웨어': 'M3 Max 48 GB',
            '최적 모델 등급': '32B 쾌적',
            '속도 (7B)': '80–120 토큰/초',
            '속도 (32B)': '15–25 토큰/초',
            '비고': '32B 실행 최고의 소비자급 Apple Silicon',
          },
          {
            '하드웨어': 'RTX 4060 8 GB',
            '최적 모델 등급': '7B 전용',
            '속도 (7B)': '50–80 토큰/초',
            '속도 (32B)': 'N/A (부분 오프로드)',
            '비고': '7B 완전 적합; 14B는 CPU 오프로드 필요',
          },
          {
            '하드웨어': 'RTX 4090 24 GB',
            '최적 모델 등급': '32B',
            '속도 (7B)': '100–150 토큰/초',
            '속도 (32B)': '18–28 토큰/초',
            '비고': '32B 실행 최고의 단일 GPU',
          },
        ],
      },
      useCaseVerdicts: {
        id: 'use-case-verdicts',
        title: '사용 사례별 판정',
        content: '일반적인 로컬 LLM 사용 사례별 한 문장 답변:',
        items: [
          '**수학 과외/튜터링:** DS-R1-Distill-Qwen-7B — MATH-500 88%로 동일 VRAM의 Qwen3 7B(62.5%)를 압도',
          '**코드 생성/검토:** Qwen3-Coder 32B — HumanEval 91.5%, 소비자 하드웨어에서 실행 가능한 모델 중 최고',
          '**중국어 채팅:** Qwen3 7B — 네이티브 CJK 토크나이저로 중국어 텍스트를 30–40% 더 효율적으로 처리',
          '**단계별 분석/추론 체인:** DS-R1-Distill-Qwen-14B — 기본적으로 명시적인 사고 체인을 생성',
          '**일상 범용 어시스턴트 (8 GB VRAM):** Qwen3 7B — 더 유창한 대화, 단순 작업에서 DeepSeek의 과도한 추론 방지',
          '**기업 프라이빗 배포 (한국):** 두 모델 모두 로컬 실행 시 데이터가 기기를 벗어나지 않아 PIPA(개인정보보호법) 데이터 거주 요건을 충족',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'DeepSeek-R1과 증류 모델은 같은 것인가요?',
            a: '아닙니다. DeepSeek-R1은 서버 수준 하드웨어가 필요한 671B MoE 모델입니다. 증류 버전(7B, 14B, 32B)은 R1의 추론 스타일을 복제하도록 훈련된 독립적인 밀집 모델로, 로컬 사용에 실용적인 선택입니다.',
          },
          {
            q: 'DeepSeek와 Qwen은 각 파라미터 크기에서 동일한 VRAM을 사용하나요?',
            a: '예, 동일한 양자화 수준에서 그렇습니다. 두 7B 모델 모두 Q4_K_M 기준 약 5.5 GB가 필요하고, 두 32B 모델 모두 20.5 GB가 필요합니다. 하드웨어 선택은 VRAM 차이가 아닌 작업 선호도에 따릅니다.',
          },
          {
            q: 'Ollama로 DeepSeek-R1 증류 모델을 실행할 수 있나요?',
            a: '예. 7B 증류 버전은 `ollama run deepseek-r1:7b`, 32B는 `ollama run deepseek-r1:32b`를 실행하십시오. Ollama는 기본적으로 Q4_K_M을 다운로드합니다.',
          },
          {
            q: '중국어 텍스트에는 DeepSeek와 Qwen 중 어느 것이 더 나은가요?',
            a: 'Qwen3가 중국어 텍스트에서 훨씬 더 우수합니다. CJK 텍스트에서 30–40% 더 효율적인 전용 중국어 토크나이저를 사용합니다. DeepSeek-R1 증류 모델은 Qwen3 가중치를 기반으로 구축되어 중국어 지원을 어느 정도 상속하지만, Qwen3 베이스 모델이 첫 번째 선택입니다.',
          },
          {
            q: '8 GB VRAM에서 수학에 어떤 모델을 사용해야 하나요?',
            a: 'DeepSeek-R1-Distill-Qwen-7B를 사용하십시오. 동일한 VRAM으로 MATH-500 88%를 달성하며 Qwen3 7B(62.5%)보다 25포인트 높습니다.',
          },
          {
            q: 'DeepSeek-R1을 로컬로 실행하면 개인정보보호법을 준수하나요?',
            a: '모델을 로컬로 실행하면 데이터가 귀하의 하드웨어를 벗어나지 않습니다. 이는 모델 출처에 관계없이 PIPA(개인정보보호법) 및 데이터 거주 요건을 충족합니다. 준수 여부는 데이터 처리 방식에 관한 것이지 모델 출처에 관한 것이 아닙니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[Qwen 로컬 배포 가이드 2026](/ko/local-llms/qwen-local-deployment-guide-2026) — 모든 Qwen3 변형의 전체 하드웨어 등급 표',
          '[로컬 LLM GPU 구매 가이드 2026](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 로컬 추론을 위한 RTX 4060 vs 4070 vs 4090 비교',
          '[Qwen vs Llama vs Mistral 2026](/ko/local-llms/qwen-vs-llama-vs-mistral) — Llama 3.3 70B를 포함한 3자 비교',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'DeepSeek vs Qwen: 로컬 LLM 비교 2026',
      description:
        'DeepSeek-R1 증류 vs Qwen3 로컬 LLM: VRAM, MMLU, MATH-500, HumanEval 직접 비교. 2026년 각 하드웨어 등급에서 실행할 모델 추천.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/deepseek-vs-qwen-local-comparison-2026',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      about: [
        { '@type': 'Thing', name: 'DeepSeek R1' },
        { '@type': 'Thing', name: 'Qwen3' },
        { '@type': 'Thing', name: '로컬 LLM' },
      ],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'DeepSeek-R1과 증류 모델은 같은 것인가요?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. DeepSeek-R1은 671B MoE 모델입니다. 증류 버전(7B, 14B, 32B)은 로컬 사용에 적합한 독립적인 밀집 모델입니다.' } },
        { '@type': 'Question', name: 'DeepSeek와 Qwen은 동일한 VRAM을 사용하나요?', acceptedAnswer: { '@type': 'Answer', text: '예, 동일한 양자화 수준에서 그렇습니다. 두 7B 모델 모두 Q4_K_M 기준 5.5 GB가 필요하고, 두 32B 모델 모두 20.5 GB가 필요합니다.' } },
        { '@type': 'Question', name: '중국어 텍스트에는 어느 모델이 더 나은가요?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3가 훨씬 더 우수합니다. CJK 텍스트에서 30–40% 더 효율적인 네이티브 중국어 토크나이저를 사용합니다.' } },
        { '@type': 'Question', name: '8 GB VRAM에서 수학에 최적인 모델은?', acceptedAnswer: { '@type': 'Answer', text: 'DeepSeek-R1-Distill-Qwen-7B. 동일한 VRAM으로 MATH-500 88%를 달성하며 Qwen3 7B(62.5%)보다 25포인트 높습니다.' } },
      ],
    },
  },
}
