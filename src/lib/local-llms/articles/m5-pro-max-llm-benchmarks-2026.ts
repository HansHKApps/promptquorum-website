import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro vs M5 Max for Local LLMs 2026: Specs and Speed Estimates',
    seoTitle: 'M5 Pro vs M5 Max 2026: LLM Speed Estimates',
    intro: 'How M5 Pro and M5 Max compare for local LLMs in 2026, based on published specifications. Every M5 speed on this page is an estimate calculated from memory bandwidth and model file size, not a benchmark: PromptQuorum has not measured these chips. Includes estimates for Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B and Phi-4, memory limits, desktop prices and which chip fits which model size.',
    metaDescription: 'M5 Pro vs M5 Max for local LLMs: 307 vs up to 614 GB/s. Estimated 70B Q4 speed ~4–5 vs ~9–11 tok/s. Specs, memory limits, which to buy.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-en.webp',
    twitterDescription: 'M5 Pro vs M5 Max for local AI: bandwidth, memory limits and estimated (not measured) tok/s by model size.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    last_full_refresh: '2026-08-26',
    next_seo_review_due: '2026-10-01',
    last_seo_review: '2026-08-26',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: 'M5 Pro/Max owners and prospective buyers who want spec-based speed estimates before buying.',
    readTime: '6 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max LLM benchmarks',
    targetKeywords: ['M5 Pro benchmarks', 'M5 Max benchmarks', 'tok/s comparison', 'Apple Silicon LLM performance'],
    leadAnswerBlock: '**M5 Pro has 307 GB/s of memory bandwidth; the 40-core-GPU M5 Max has 614 GB/s. For Llama 3.3 70B Q4_K_M (43 GB), our estimate is about 4–5 tok/s on a 64 GB M5 Pro and 9–11 tok/s on an M5 Max with 64 GB or more. For Llama 3.1 8B Q4 (4.9 GB), it is about 38–50 versus 75–100 tok/s. These are estimates from bandwidth and file size, not measurements.**',
    quickAnswerTop: {
      en: {
        question: 'How fast is M5 Pro vs M5 Max for local LLM inference?',
        answer: 'Estimates, not measurements: on a 70B Q4_K_M model, about 4–5 tok/s on M5 Pro (64 GB) and 9–11 tok/s on M5 Max (614 GB/s, 64 GB or more). On an 8B Q4 model, about 38–50 and 75–100 tok/s. The roughly 2× gap follows from the 2× memory bandwidth used in the calculation.',
        bullets: [
          '70B Q4_K_M (estimate): ~4–5 tok/s on M5 Pro 64 GB, ~9–11 tok/s on M5 Max',
          '8B Q4 (estimate): ~38–50 tok/s on M5 Pro, ~75–100 tok/s on M5 Max',
          'M5 Pro: 307 GB/s, up to 64 GB. M5 Max: 460 or 614 GB/s, up to 128 GB',
          'The 614 GB/s M5 Max needs the 40-core GPU; the 32-core version has 460 GB/s and 36 GB',
          'PromptQuorum has not benchmarked these chips',
        ],
        updatedDate: '2026-11-28',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'M5 Pro vs M5 Max Specifications', anchor: '#specs' },
      { label: 'Estimated Generation Speed', anchor: '#benchmarks' },
      { label: 'Apple\'s Prompt Processing Claim', anchor: '#prompt-speed' },
      { label: 'Which Should You Buy?', anchor: '#which-buy' },
      { label: 'Desktop Macs: Mac mini and Mac Studio', anchor: '#desktop-availability' },
      { label: 'Measure It on Your Own Mac', anchor: '#reproducibility' },
      { label: 'M5 Ultra: Price and Estimated Speed', anchor: '#ultra-projections' },
      { label: 'How These Estimates Were Made', anchor: '#freshness-note' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro (307 GB/s) and M5 Max (up to 614 GB/s) differ mainly in memory bandwidth and maximum memory: for a 70B Q4_K_M model we estimate about 4–5 tok/s on M5 Pro 64 GB and 9–11 tok/s on the 614 GB/s M5 Max, calculated rather than measured.',
          },
          {
            type: 'plain-terms',
            text: 'Memory bandwidth is how fast a chip can read data from memory. To produce each token, the chip reads the model from memory, so bandwidth divided by model size gives a rough upper limit on speed. Real software usually stays below that limit.',
          },
        ],
        items: [
          'M5 Pro: 307 GB/s and up to 64 GB. M5 Max: 460 GB/s (32-core GPU) or 614 GB/s (40-core GPU), up to 128 GB.',
          'Estimated Llama 3.3 70B Q4_K_M speed: ~4–5 tok/s on M5 Pro 64 GB, ~9–11 tok/s on the 614 GB/s M5 Max.',
          'Estimated Llama 3.1 8B Q4 speed: ~38–50 tok/s on M5 Pro, ~75–100 tok/s on the 614 GB/s M5 Max.',
          'The 43 GB 70B file is tight on 64 GB, because context and macOS share the same memory.',
          'M5 Pro is the lower-priced option for small and mid-size models; consider M5 Max if you often run 70B.',
          'No speed on this page was measured by PromptQuorum.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro vs M5 Max — Specs That Matter for LLMs',
        tableFormat: true,
        columns: ['Spec', 'M5 Pro', 'M5 Max'],
        rows: [
          { Spec: 'Max unified memory', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { Spec: 'Memory bandwidth', 'M5 Pro': '307 GB/s', 'M5 Max': '460 or 614 GB/s' },
          { Spec: 'GPU cores', 'M5 Pro': '16 or 20', 'M5 Max': '32 or 40' },
          { Spec: 'Neural Engine', 'M5 Pro': '16-core', 'M5 Max': '16-core' },
          { Spec: 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': '64 GB only, tight', 'M5 Max': 'Needs 64 GB or more' },
          { Spec: 'Apple LLM prompt claim', 'M5 Pro': 'Up to 3.9× vs M4 Pro', 'M5 Max': 'Up to 4× vs M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Estimated Generation Speed by Model',
        content: '**These are estimates, not benchmarks.** Ceiling = memory bandwidth ÷ model file size. The table shows roughly 60–80% of that ceiling, the same method as our [70B hardware guide](/local-llms/70b-models-consumer-hardware). For example, 307 GB/s ÷ 43 GB gives a ceiling of about 7 tok/s, and 614 GB/s ÷ 43 GB about 14 tok/s. File sizes are the Ollama library downloads. The M5 Max column assumes the 614 GB/s version. Results assume a single user, short context and a model that fits fully in memory.',
        tableFormat: true,
        columns: ['Model (file size)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'Model (file size)': 'Llama 3.1 8B Q4 (4.9 GB)', 'M5 Pro (307 GB/s)': '~38–50 tok/s', 'M5 Max (614 GB/s)': '~75–100 tok/s' },
          { 'Model (file size)': 'Llama 3.1 8B Q8 (8.5 GB)', 'M5 Pro (307 GB/s)': '~22–29 tok/s', 'M5 Max (614 GB/s)': '~43–58 tok/s' },
          { 'Model (file size)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~9–11 tok/s' },
          { 'Model (file size)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~7–10 tok/s' },
          { 'Model (file size)': 'Ministral 3 8B Q4 (6.0 GB)', 'M5 Pro (307 GB/s)': '~31–41 tok/s', 'M5 Max (614 GB/s)': '~61–82 tok/s' },
          { 'Model (file size)': 'Phi-4 14B Q4 (9.1 GB)', 'M5 Pro (307 GB/s)': '~20–27 tok/s', 'M5 Max (614 GB/s)': '~40–54 tok/s' },
        ],
        note: 'Estimates only. The 60–80% range is a rule of thumb and may not hold for small models, long context or a particular runtime. Prompt processing is not included. Phi-4 is a 14B model.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'Prompt Processing Speed: What Apple Claims',
        content: [
          'Apple states up to 3.9× faster LLM prompt processing for M5 Pro than for M4 Pro, and up to 4× for M5 Max than for M4 Max, based on its own testing ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). PromptQuorum has not verified these claims.',
          'Prompt processing is separate from token generation, so these factors do not apply to the tok/s estimates above, and this page gives no time-to-first-token figures.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'Which Should You Buy?',
        numberedItems: [
          {
            title: '8B to 14B models daily',
            whyItMatters: 'On the estimates, M5 Pro gives about 20–50 tok/s for the 8B and 14B files above. M5 Max is not required for these sizes.',
          },
          {
            title: 'Models around 20 GB (for example 32B at Q4)',
            whyItMatters: 'A 20 GB file works out to about 9–12 tok/s on M5 Pro and 18–25 tok/s on the 614 GB/s M5 Max (estimates). Choose by how long you are willing to wait.',
          },
          {
            title: '70B models regularly',
            whyItMatters: 'Consider the 40-core M5 Max with 64 GB or more: estimated ~9–11 tok/s on 70B Q4_K_M, against ~4–5 tok/s on M5 Pro.',
          },
          {
            title: 'Always-on server',
            whyItMatters: 'A Mac mini M5 Pro is the compact desktop option. $1,699 is the 24 GB base. The cheapest 64 GB configuration (15-core CPU, 512 GB SSD) is $2,699: the base plus a $1,000 memory upgrade ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)). The $3,199 that Fstoppers listed on September 21, 2026 is the 18-core CPU, 1 TB version.',
          },
          { title: 'Portable machine', whyItMatters: 'A MacBook Pro offers M5 Pro with up to 64 GB; 64 GB requires the 20-core GPU version.' },
          {
            title: 'More memory headroom',
            whyItMatters: 'A Mac Studio M5 Max with 128 GB (40-core GPU) leaves more room for a 50 GB 70B Q5_K_M file, longer context or additional models.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro and M5 Max in Desktop Macs',
        content: 'On August 25, 2026, Apple announced the Mac mini M5 Pro and the Mac Studio with M5 Max or M5 Ultra, with availability from September 22, 2026. Apple said the 512 GB Mac Studio M5 Ultra configuration would follow in late October 2026. Prices are US list prices as reported on the dates of the sources ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)); check Apple\'s store for current prices.',
        tableFormat: true,
        columns: ['Desktop Mac', 'Starting price', 'Max memory', 'Available'],
        rows: [
          { 'Desktop Mac': 'Mac mini M5 Pro', 'Starting price': '$1,699 (24 GB)', 'Max memory': '64 GB (307 GB/s)', Available: 'Sept 22, 2026' },
          {
            'Desktop Mac': 'Mac Studio M5 Max',
            'Starting price': '$2,499 (36 GB)',
            'Max memory': '128 GB (up to 614 GB/s)',
            Available: 'Sept 22, 2026',
          },
          {
            'Desktop Mac': 'Mac Studio M5 Ultra',
            'Starting price': '$5,499 (96 GB)',
            'Max memory': '512 GB (up to 1.2 TB/s)',
            Available: 'Sept 22 (512 GB later)',
          },
        ],
        note: 'The base Mac Studio M5 Max has the 32-core GPU, 460 GB/s and 36 GB, which is too little for a 43 GB 70B Q4_K_M file. PromptQuorum has not tested any desktop or laptop M5 model, so this page does not compare their speed.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'Measure It on Your Own Mac',
        content: 'The estimates above are no substitute for a measurement. With MLX installed (pip install mlx-lm), this short script prints prompt and generation speed for your own Mac. See also [MLX vs Ollama vs llama.cpp on Mac](/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'Results depend on the model file, runtime version, context length, power settings and other running apps. A single short run is only a rough check.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: Price and Estimated Speed',
        content: 'The Mac Studio M5 Ultra starts at $5,499 with 96 GB, with availability from September 22, 2026. MacRumors reported on October 28, 2026 that the 512 GB configuration could be ordered from $22,299 ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). The speeds below are estimates calculated with the same method, not measurements.',
        columns: ['Spec', 'M5 Ultra'],
        rows: [
          { Spec: 'Max unified memory', 'M5 Ultra': '512 GB' },
          { Spec: 'Memory bandwidth', 'M5 Ultra': 'Up to 1.2 TB/s' },
          { Spec: 'GPU cores', 'M5 Ultra': 'Up to 80' },
          { Spec: '70B Q4_K_M, 43 GB (estimate)', 'M5 Ultra': '~17–21 tok/s' },
          { Spec: '70B FP16, 141 GB (estimate)', 'M5 Ultra': '~5–7 tok/s' },
          { Spec: 'Starting price', 'M5 Ultra': '$5,499 (96 GB)' },
          { Spec: '512 GB configuration', 'M5 Ultra': 'From $22,299 (Oct 28, 2026)' },
        ],
        note: 'A 141 GB FP16 file needs a configuration with more than 96 GB of memory.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'How These Estimates Were Made',
        items: [
          '**Method:** memory bandwidth ÷ model file size gives a ceiling; this page shows about 60–80% of it.',
          '**Bandwidth and memory:** Apple\'s [MacBook Pro](https://www.apple.com/macbook-pro/specs/) and [Mac Studio](https://www.apple.com/mac-studio/specs/) specification pages, checked November 28, 2026; the 1.2 TB/s M5 Ultra figure is an "up to" value.',
          '**File sizes:** Ollama library tags for [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags) and [Phi-4](https://ollama.com/library/phi4/tags), checked November 28, 2026.',
          '**Testing:** PromptQuorum has not benchmarked M5 Pro, M5 Max or M5 Ultra for this page.',
          '**Correction (November 28, 2026):** speed figures were replaced with calculated estimates. Framework, latency, transcription, power and thermal figures were removed.',
          '**Limits:** real speed can fall outside these ranges. Treat them as planning figures.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Why is the M5 Max estimate about 2× the M5 Pro?',
            a: 'The estimate is built from memory bandwidth, and the 40-core M5 Max has 614 GB/s against 307 GB/s for M5 Pro. So the 2× comes from the method; it is not a measured speedup, and real results can differ. The 32-core M5 Max has 460 GB/s, about 1.5× the M5 Pro.',
          },
          {
            q: 'Can an RTX 4090 run these models faster?',
            a: 'Its bandwidth ceiling is higher (1,008 GB/s against up to 614 GB/s) for models that fit in its 24 GB of VRAM. The 43 GB Llama 3.3 70B Q4_K_M file does not fit on one RTX 4090. This page has no measured comparison.',
          },
          {
            q: 'Is the M5 Pro good enough, or should I buy M5 Max?',
            a: 'M5 Pro may be enough for small and mid-size models: we estimate about 9–12 tok/s for a 20 GB file. If you often run 70B or [several models together](/power-local-llm/local-multimodal-pipeline-voice-vision-text), the 40-core M5 Max with 64 GB or more gives more headroom.',
          },
          {
            q: 'How much faster could an M5 Ultra be?',
            a: 'Apple lists up to 1.2 TB/s, about twice the 614 GB/s of the top M5 Max, so the bandwidth ceiling is about twice as high. For 70B Q4_K_M our estimate is ~17–21 tok/s. It is not a measurement.',
          },
          {
            q: 'Did PromptQuorum benchmark these chips?',
            a: 'No. The speeds on this page are calculations from published bandwidth and file sizes. For real numbers on your Mac, run the MLX script above and compare results only for the same model file, runtime and settings.',
          },
        ],
      },
    },
    ctaText: 'Running models on an M5 Pro or M5 Max? Compare your local LLM answers with cloud models in a single dispatch with PromptQuorum and check how they hold up on your own tasks.',
  },
  es: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro vs M5 Max para LLM locales 2026: especificaciones y velocidad estimada',
    seoTitle: 'M5 Pro vs M5 Max 2026: velocidad LLM estimada',
    intro: 'Cómo se comparan M5 Pro y M5 Max para LLM locales en 2026, según las especificaciones publicadas. Todas las velocidades de M5 de esta página son estimaciones calculadas a partir del ancho de banda de memoria y el tamaño del archivo del modelo, no benchmarks: PromptQuorum no ha medido estos chips. Incluye estimaciones para Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B y Phi-4, límites de memoria, precios de sobremesa y qué chip encaja con cada tamaño de modelo.',
    metaDescription: 'M5 Pro vs M5 Max para LLM locales: 307 frente a hasta 614 GB/s. 70B Q4 estimado: ~4–5 frente a ~9–11 tok/s. Specs, memoria y cuál elegir.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-es.webp',
    twitterDescription: 'M5 Pro vs M5 Max para IA local: ancho de banda, límites de memoria y tok/s estimados (no medidos) por tamaño de modelo.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090'],
    audience: 'Propietarios y futuros compradores de M5 Pro/Max que quieren estimaciones basadas en especificaciones antes de comprar.',
    readTime: '6 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max benchmarks LLM',
    targetKeywords: ['benchmarks M5 Pro', 'benchmarks M5 Max', 'comparativa tok/s', 'rendimiento LLM Apple Silicon'],
    leadAnswerBlock: '**M5 Pro tiene 307 GB/s de ancho de banda de memoria; el M5 Max con GPU de 40 núcleos, 614 GB/s. Para Llama 3.3 70B Q4_K_M (43 GB), estimamos unos 4–5 tok/s en un M5 Pro de 64 GB y 9–11 tok/s en un M5 Max con 64 GB o más. Para Llama 3.1 8B Q4 (4,9 GB), unos 38–50 frente a 75–100 tok/s. Son estimaciones a partir del ancho de banda y el tamaño del archivo, no mediciones.**',
    quickAnswerTop: {
      es: {
        question: '¿Qué velocidad ofrecen M5 Pro y M5 Max en inferencia local de LLM?',
        answer: 'Son estimaciones, no mediciones: con un modelo 70B Q4_K_M, unos 4–5 tok/s en M5 Pro (64 GB) y 9–11 tok/s en M5 Max (614 GB/s, 64 GB o más). Con un modelo 8B Q4, unos 38–50 y 75–100 tok/s. La diferencia de aproximadamente 2× sale del doble ancho de banda usado en el cálculo.',
        bullets: [
          '70B Q4_K_M (estimación): ~4–5 tok/s en M5 Pro 64 GB, ~9–11 tok/s en M5 Max',
          '8B Q4 (estimación): ~38–50 tok/s en M5 Pro, ~75–100 tok/s en M5 Max',
          'M5 Pro: 307 GB/s, hasta 64 GB. M5 Max: 460 o 614 GB/s, hasta 128 GB',
          'Los 614 GB/s exigen la GPU de 40 núcleos; la de 32 tiene 460 GB/s y 36 GB',
          'PromptQuorum no ha hecho benchmarks de estos chips',
        ],
        updatedDate: '2026-11-28',
      },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Especificaciones M5 Pro vs M5 Max', anchor: '#specs' },
      { label: 'Velocidad de generación estimada', anchor: '#benchmarks' },
      { label: 'Lo que afirma Apple sobre los prompts', anchor: '#prompt-speed' },
      { label: '¿Cuál deberías comprar?', anchor: '#which-buy' },
      { label: 'Mac de escritorio: Mac mini y Mac Studio', anchor: '#desktop-availability' },
      { label: 'Mídelo en tu propio Mac', anchor: '#reproducibility' },
      { label: 'M5 Ultra: precio y velocidad estimada', anchor: '#ultra-projections' },
      { label: 'Cómo se calcularon las estimaciones', anchor: '#freshness-note' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro (307 GB/s) y M5 Max (hasta 614 GB/s) se diferencian sobre todo en ancho de banda y memoria máxima: para un modelo 70B Q4_K_M estimamos unos 4–5 tok/s en M5 Pro de 64 GB y 9–11 tok/s en el M5 Max de 614 GB/s, calculados y no medidos.',
          },
          {
            type: 'plain-terms',
            text: 'El ancho de banda de memoria es la velocidad a la que un chip puede leer datos de la memoria. Para generar cada token, el chip lee el modelo, así que el ancho de banda dividido entre el tamaño del modelo da un límite superior aproximado. El software real suele quedar por debajo.',
          },
        ],
        items: [
          'M5 Pro: 307 GB/s y hasta 64 GB. M5 Max: 460 GB/s (GPU de 32 núcleos) o 614 GB/s (GPU de 40 núcleos), hasta 128 GB.',
          'Velocidad estimada en Llama 3.3 70B Q4_K_M: ~4–5 tok/s en M5 Pro 64 GB, ~9–11 tok/s en el M5 Max de 614 GB/s.',
          'Velocidad estimada en Llama 3.1 8B Q4: ~38–50 tok/s en M5 Pro, ~75–100 tok/s en el M5 Max de 614 GB/s.',
          'El archivo 70B de 43 GB va justo en 64 GB, porque el contexto y macOS comparten esa memoria.',
          'M5 Pro es la opción más barata para modelos pequeños y medianos; si usas 70B a menudo, valora el M5 Max.',
          'PromptQuorum no ha medido ninguna velocidad de esta página.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro vs M5 Max: especificaciones que importan para LLM',
        tableFormat: true,
        columns: ['Especificación', 'M5 Pro', 'M5 Max'],
        rows: [
          { 'Especificación': 'Memoria unificada máx.', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { 'Especificación': 'Ancho de banda de memoria', 'M5 Pro': '307 GB/s', 'M5 Max': '460 o 614 GB/s' },
          { 'Especificación': 'Núcleos GPU', 'M5 Pro': '16 o 20', 'M5 Max': '32 o 40' },
          { 'Especificación': 'Neural Engine', 'M5 Pro': '16 núcleos', 'M5 Max': '16 núcleos' },
          { 'Especificación': 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': 'Solo con 64 GB, justo', 'M5 Max': 'Requiere 64 GB o más' },
          { 'Especificación': 'Apple sobre prompts LLM', 'M5 Pro': 'Hasta 3,9× vs M4 Pro', 'M5 Max': 'Hasta 4× vs M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Velocidad de generación estimada por modelo',
        content: '**Son estimaciones, no benchmarks.** Límite = ancho de banda de memoria ÷ tamaño del archivo del modelo. La tabla muestra aproximadamente el 60–80 % de ese límite, el mismo método que nuestra [guía de hardware para 70B](/es/local-llms/70b-models-consumer-hardware). Por ejemplo, 307 GB/s ÷ 43 GB da un límite de unos 7 tok/s, y 614 GB/s ÷ 43 GB, de unos 14 tok/s. Los tamaños son las descargas de la biblioteca de Ollama. La columna M5 Max supone la versión de 614 GB/s. Se asume un solo usuario, contexto corto y un modelo que cabe entero en memoria.',
        tableFormat: true,
        columns: ['Modelo (tamaño)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'Modelo (tamaño)': 'Llama 3.1 8B Q4 (4,9 GB)', 'M5 Pro (307 GB/s)': '~38–50 tok/s', 'M5 Max (614 GB/s)': '~75–100 tok/s' },
          { 'Modelo (tamaño)': 'Llama 3.1 8B Q8 (8,5 GB)', 'M5 Pro (307 GB/s)': '~22–29 tok/s', 'M5 Max (614 GB/s)': '~43–58 tok/s' },
          { 'Modelo (tamaño)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~9–11 tok/s' },
          { 'Modelo (tamaño)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~7–10 tok/s' },
          { 'Modelo (tamaño)': 'Ministral 3 8B Q4 (6,0 GB)', 'M5 Pro (307 GB/s)': '~31–41 tok/s', 'M5 Max (614 GB/s)': '~61–82 tok/s' },
          { 'Modelo (tamaño)': 'Phi-4 14B Q4 (9,1 GB)', 'M5 Pro (307 GB/s)': '~20–27 tok/s', 'M5 Max (614 GB/s)': '~40–54 tok/s' },
        ],
        note: 'Solo estimaciones. El margen del 60–80 % es una regla orientativa y puede no cumplirse con modelos pequeños, contexto largo o un runtime concreto. No incluye el procesamiento del prompt. Phi-4 es un modelo de 14B.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'Procesamiento de prompts: lo que afirma Apple',
        content: [
          'Apple afirma, según sus propias pruebas, un procesamiento de prompts LLM hasta 3,9× más rápido en M5 Pro que en M4 Pro, y hasta 4× en M5 Max frente a M4 Max ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). PromptQuorum no ha verificado estas afirmaciones.',
          'El procesamiento del prompt es distinto de la generación de tokens, así que esos factores no se aplican a las estimaciones de tok/s anteriores, y esta página no da cifras de tiempo hasta el primer token.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: '¿Cuál deberías comprar?',
        numberedItems: [
          {
            title: 'Modelos de 8B a 14B a diario',
            whyItMatters: 'Según la estimación, M5 Pro da unos 20–50 tok/s con los archivos 8B y 14B anteriores. Para estos tamaños no hace falta M5 Max.',
          },
          {
            title: 'Modelos de unos 20 GB (por ejemplo, 32B en Q4)',
            whyItMatters: 'Con un archivo de 20 GB salen unos 9–12 tok/s en M5 Pro y 18–25 tok/s en el M5 Max de 614 GB/s (estimaciones). Decide según cuánto quieras esperar.',
          },
          {
            title: 'Modelos 70B con regularidad',
            whyItMatters: 'Valora el M5 Max de 40 núcleos con 64 GB o más: estimamos ~9–11 tok/s con 70B Q4_K_M, frente a ~4–5 tok/s en M5 Pro.',
          },
          {
            title: 'Servidor siempre encendido',
            whyItMatters: 'El Mac mini M5 Pro es la opción compacta de sobremesa. $1,699 es la base de 24 GB en EE. UU. La configuración de 64 GB más barata (CPU de 15 núcleos, SSD de 512 GB) cuesta $2,699: la base más $1,000 de ampliación de memoria ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)). Los $3,199 que listó Fstoppers el 21 de septiembre de 2026 son la versión de 18 núcleos y 1 TB.',
          },
          {
            title: 'Equipo portátil',
            whyItMatters: 'El MacBook Pro ofrece M5 Pro con hasta 64 GB; los 64 GB requieren la versión con GPU de 20 núcleos.',
          },
          {
            title: 'Más margen de memoria',
            whyItMatters: 'Un Mac Studio M5 Max con 128 GB (GPU de 40 núcleos) deja más espacio para un archivo 70B Q5_K_M de 50 GB, contexto más largo u otros modelos.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro y M5 Max en Mac de escritorio',
        content: 'El 25 de agosto de 2026, Apple anunció el Mac mini M5 Pro y el Mac Studio con M5 Max o M5 Ultra, disponibles desde el 22 de septiembre de 2026. Apple indicó que la configuración de 512 GB del Mac Studio M5 Ultra llegaría a finales de octubre de 2026. Son precios de lista de EE. UU. según la fecha de las fuentes ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)); consulta la tienda de Apple para los precios actuales.',
        tableFormat: true,
        columns: ['Mac de escritorio', 'Precio inicial', 'Memoria máx.', 'Disponible'],
        rows: [
          {
            'Mac de escritorio': 'Mac mini M5 Pro',
            'Precio inicial': '$1,699 (24 GB)',
            'Memoria máx.': '64 GB (307 GB/s)',
            Disponible: '22 sept. 2026',
          },
          {
            'Mac de escritorio': 'Mac Studio M5 Max',
            'Precio inicial': '$2,499 (36 GB)',
            'Memoria máx.': '128 GB (hasta 614 GB/s)',
            Disponible: '22 sept. 2026',
          },
          {
            'Mac de escritorio': 'Mac Studio M5 Ultra',
            'Precio inicial': '$5,499 (96 GB)',
            'Memoria máx.': '512 GB (hasta 1,2 TB/s)',
            Disponible: '22 sept. (512 GB después)',
          },
        ],
        note: 'El Mac Studio M5 Max base tiene GPU de 32 núcleos, 460 GB/s y 36 GB, insuficiente para un archivo 70B Q4_K_M de 43 GB. PromptQuorum no ha probado ningún M5 de escritorio ni portátil, así que no compara su velocidad.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'Mídelo en tu propio Mac',
        content: 'Las estimaciones no sustituyen una medición. Con MLX instalado (pip install mlx-lm), este script breve muestra la velocidad de procesamiento del prompt y de generación en tu Mac. Consulta también [MLX vs Ollama vs llama.cpp en Mac](/es/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'Los resultados dependen del archivo del modelo, la versión del runtime, la longitud del contexto, los ajustes de energía y otras apps abiertas. Una sola ejecución corta es solo una comprobación aproximada.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: precio y velocidad estimada',
        content: 'El Mac Studio M5 Ultra parte de $5,499 con 96 GB (precio de EE. UU.), disponible desde el 22 de septiembre de 2026. MacRumors informó el 28 de octubre de 2026 de que la configuración de 512 GB podía pedirse desde $22,299 ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). Las velocidades siguientes son estimaciones calculadas con el mismo método, no mediciones.',
        columns: ['Especificación', 'M5 Ultra'],
        rows: [
          { 'Especificación': 'Memoria unificada máx.', 'M5 Ultra': '512 GB' },
          { 'Especificación': 'Ancho de banda de memoria', 'M5 Ultra': 'Hasta 1,2 TB/s' },
          { 'Especificación': 'Núcleos GPU', 'M5 Ultra': 'Hasta 80' },
          { 'Especificación': '70B Q4_K_M, 43 GB (estimado)', 'M5 Ultra': '~17–21 tok/s' },
          { 'Especificación': '70B FP16, 141 GB (estimado)', 'M5 Ultra': '~5–7 tok/s' },
          { 'Especificación': 'Precio inicial', 'M5 Ultra': '$5,499 (96 GB)' },
          { 'Especificación': 'Configuración de 512 GB', 'M5 Ultra': 'Desde $22,299 (28/10/2026)' },
        ],
        note: 'Un archivo FP16 de 141 GB necesita una configuración con más de 96 GB de memoria.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'Cómo se calcularon las estimaciones',
        items: [
          '**Método:** ancho de banda de memoria ÷ tamaño del archivo da un límite; la página muestra alrededor del 60–80 % de él.',
          '**Ancho de banda y memoria:** fichas técnicas de Apple de [MacBook Pro](https://www.apple.com/macbook-pro/specs/) y [Mac Studio](https://www.apple.com/mac-studio/specs/), revisadas el 28 de noviembre de 2026; los 1,2 TB/s del M5 Ultra son un valor «hasta».',
          '**Tamaños:** etiquetas de la biblioteca de Ollama de [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags) y [Phi-4](https://ollama.com/library/phi4/tags), revisadas el 28 de noviembre de 2026.',
          '**Pruebas:** PromptQuorum no ha hecho benchmarks de M5 Pro, M5 Max ni M5 Ultra para esta página.',
          '**Corrección (28 de noviembre de 2026):** las cifras de velocidad se sustituyeron por estimaciones calculadas. Se eliminaron las cifras de frameworks, latencia, transcripción, consumo y temperatura.',
          '**Límites:** la velocidad real puede quedar fuera de estos rangos. Úsalos solo para planificar.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '¿Por qué la estimación del M5 Max es unas 2× la del M5 Pro?',
            a: 'La estimación se basa en el ancho de banda de memoria, y el M5 Max de 40 núcleos tiene 614 GB/s frente a los 307 GB/s del M5 Pro. El 2× sale del método; no es una mejora medida y los resultados reales pueden variar. El M5 Max de 32 núcleos tiene 460 GB/s, unas 1,5× el M5 Pro.',
          },
          {
            q: '¿Puede una RTX 4090 ejecutar estos modelos más rápido?',
            a: 'Su límite por ancho de banda es mayor (1.008 GB/s frente a hasta 614 GB/s) para modelos que caben en sus 24 GB de VRAM. El archivo de 43 GB de Llama 3.3 70B Q4_K_M no cabe en una sola RTX 4090. Esta página no ofrece ninguna comparación medida.',
          },
          {
            q: '¿Basta con el M5 Pro o debería comprar el M5 Max?',
            a: 'M5 Pro puede bastar para modelos pequeños y medianos: para un archivo de 20 GB estimamos unos 9–12 tok/s. Si usas 70B a menudo o [varios modelos a la vez](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text), el M5 Max de 40 núcleos con 64 GB o más da más margen.',
          },
          {
            q: '¿Cuánto más rápido podría ser un M5 Ultra?',
            a: 'Apple indica hasta 1,2 TB/s, unas dos veces los 614 GB/s del M5 Max superior, así que el límite por ancho de banda es aproximadamente el doble. Para 70B Q4_K_M estimamos ~17–21 tok/s. No es una medición.',
          },
          {
            q: '¿Ha hecho PromptQuorum benchmarks de estos chips?',
            a: 'No. Las velocidades de esta página se calculan a partir del ancho de banda publicado y el tamaño de los archivos. Para obtener cifras reales en tu Mac, ejecuta el script MLX anterior y compara solo resultados con el mismo archivo, runtime y ajustes.',
          },
        ],
      },
    },
    ctaText: '¿Usas modelos en un M5 Pro o M5 Max? Compara con PromptQuorum las respuestas de tu LLM local con modelos en la nube en un solo envío y comprueba cómo responden en tus propias tareas.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'M5 Pro vs M5 Max para LLM locales 2026: especificaciones y velocidad estimada',
      description: 'Comparativa por especificaciones con velocidades estimadas, no medidas: 70B Q4 unos 4–5 tok/s en M5 Pro y 9–11 tok/s en M5 Max.',
      url: 'https://www.promptquorum.com/es/local-llms/m5-pro-max-llm-benchmarks-2026',
      inLanguage: 'es',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
  },
  ar: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro مقابل M5 Max لنماذج LLM المحلية 2026: المواصفات وتقديرات السرعة',
    seoTitle: 'M5 Pro مقابل M5 Max 2026: تقديرات سرعة LLM',
    intro: 'مقارنة بين M5 Pro وM5 Max لتشغيل نماذج LLM محليًا في 2026 استنادًا إلى المواصفات المنشورة. جميع سرعات M5 في هذه الصفحة تقديرات محسوبة من عرض نطاق الذاكرة وحجم ملف النموذج، وليست اختبارات معيارية: لم تقم PromptQuorum بقياس هذه الشرائح. تتضمن الصفحة تقديرات لـ Llama 3.1 8B وLlama 3.3 70B وMinistral 3 8B وPhi-4، وحدود الذاكرة، وأسعار أجهزة سطح المكتب، والشريحة المناسبة لكل حجم نموذج.',
    metaDescription: 'M5 Pro مقابل M5 Max لنماذج LLM المحلية: 307 مقابل حتى 614 GB/s. تقدير 70B Q4: نحو 4–5 مقابل 9–11 tok/s. المواصفات والذاكرة وأيهما تختار.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-ar.webp',
    twitterDescription: 'M5 Pro مقابل M5 Max للذكاء الاصطناعي المحلي: عرض النطاق وحدود الذاكرة وقيم tok/s تقديرية (غير مقاسة) حسب حجم النموذج.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090'],
    audience: 'مالكو M5 Pro/Max والمشترون المحتملون الذين يريدون تقديرات سرعة مبنية على المواصفات قبل الشراء.',
    readTime: '6 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max benchmarks LLM',
    targetKeywords: ['معايير M5 Pro', 'معايير M5 Max', 'مقارنة tok/s', 'أداء LLM على Apple Silicon'],
    leadAnswerBlock: '**يوفر M5 Pro عرض نطاق ذاكرة 307 GB/s، ويوفر M5 Max ذو وحدة الرسوميات بـ40 نواة 614 GB/s. بالنسبة إلى Llama 3.3 70B Q4_K_M (43 GB) نقدّر نحو 4–5 tok/s على M5 Pro بذاكرة 64 GB، و9–11 tok/s على M5 Max بذاكرة 64 GB أو أكثر. وبالنسبة إلى Llama 3.1 8B Q4 (4.9 GB) نحو 38–50 مقابل 75–100 tok/s. هذه تقديرات من عرض النطاق وحجم الملف وليست قياسات.**',
    quickAnswerTop: {
      ar: {
        question: 'ما سرعة M5 Pro مقارنة بـ M5 Max في استدلال LLM محليًا؟',
        answer: 'هذه تقديرات وليست قياسات: مع نموذج 70B Q4_K_M نحو 4–5 tok/s على M5 Pro (64 GB) و9–11 tok/s على M5 Max (614 GB/s و64 GB أو أكثر). ومع نموذج 8B Q4 نحو 38–50 و75–100 tok/s. الفارق البالغ نحو 2× ناتج عن ضعف عرض النطاق المستخدم في الحساب.',
        bullets: [
          '70B Q4_K_M (تقدير): نحو 4–5 tok/s على M5 Pro 64 GB، ونحو 9–11 tok/s على M5 Max',
          '8B Q4 (تقدير): نحو 38–50 tok/s على M5 Pro، ونحو 75–100 tok/s على M5 Max',
          'M5 Pro: ‏307 GB/s وحتى 64 GB. أما M5 Max: ‏460 أو 614 GB/s وحتى 128 GB',
          'قيمة 614 GB/s تتطلب وحدة رسوميات بـ40 نواة؛ نسخة 32 نواة تقدم 460 GB/s و36 GB',
          'لم تُجرِ PromptQuorum اختبارات معيارية لهذه الشرائح',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'مواصفات M5 Pro مقابل M5 Max', anchor: '#specs' },
      { label: 'سرعة التوليد التقديرية', anchor: '#benchmarks' },
      { label: 'ما تقوله Apple عن معالجة المطالبات', anchor: '#prompt-speed' },
      { label: 'أيهما تشتري؟', anchor: '#which-buy' },
      { label: 'أجهزة Mac المكتبية: Mac mini وMac Studio', anchor: '#desktop-availability' },
      { label: 'قِس السرعة على جهازك', anchor: '#reproducibility' },
      { label: 'M5 Ultra: السعر والسرعة التقديرية', anchor: '#ultra-projections' },
      { label: 'كيف حُسبت التقديرات', anchor: '#freshness-note' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يختلف M5 Pro (307 GB/s) عن M5 Max (حتى 614 GB/s) أساسًا في عرض نطاق الذاكرة وأقصى سعة لها: لنموذج 70B Q4_K_M نقدّر نحو 4–5 tok/s على M5 Pro بذاكرة 64 GB و9–11 tok/s على M5 Max بعرض 614 GB/s، وهي قيم محسوبة لا مقاسة.',
          },
          {
            type: 'plain-terms',
            text: 'عرض نطاق الذاكرة هو سرعة قراءة الشريحة للبيانات من الذاكرة. ولإنتاج كل token تقرأ الشريحة النموذج، لذا يعطي عرض النطاق مقسومًا على حجم النموذج حدًا أعلى تقريبيًا للسرعة. وعادةً تبقى البرامج الفعلية دونه.',
          },
        ],
        items: [
          'M5 Pro: ‏307 GB/s وحتى 64 GB. M5 Max: ‏460 GB/s (رسوميات 32 نواة) أو 614 GB/s (40 نواة)، وحتى 128 GB.',
          'السرعة التقديرية لـ Llama 3.3 70B Q4_K_M: نحو 4–5 tok/s على M5 Pro 64 GB، ونحو 9–11 tok/s على M5 Max بعرض 614 GB/s.',
          'السرعة التقديرية لـ Llama 3.1 8B Q4: نحو 38–50 tok/s على M5 Pro، ونحو 75–100 tok/s على M5 Max بعرض 614 GB/s.',
          'ملف 70B بحجم 43 GB يكاد يملأ ذاكرة 64 GB، لأن السياق وmacOS يتشاركان الذاكرة نفسها.',
          'M5 Pro هو الخيار الأقل سعرًا للنماذج الصغيرة والمتوسطة؛ وإذا كنت تشغّل 70B كثيرًا ففكّر في M5 Max.',
          'لم تقِس PromptQuorum أي سرعة في هذه الصفحة.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro مقابل M5 Max: المواصفات المهمة لنماذج LLM',
        tableFormat: true,
        columns: ['المواصفة', 'M5 Pro', 'M5 Max'],
        rows: [
          { 'المواصفة': 'أقصى ذاكرة موحدة', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { 'المواصفة': 'عرض نطاق الذاكرة', 'M5 Pro': '307 GB/s', 'M5 Max': '460 أو 614 GB/s' },
          { 'المواصفة': 'أنوية GPU', 'M5 Pro': '16 أو 20', 'M5 Max': '32 أو 40' },
          { 'المواصفة': 'Neural Engine', 'M5 Pro': '16 نواة', 'M5 Max': '16 نواة' },
          { 'المواصفة': 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': 'مع 64 GB فقط، بهامش ضيق', 'M5 Max': 'يتطلب 64 GB أو أكثر' },
          { 'المواصفة': 'ادعاء Apple للمطالبات', 'M5 Pro': 'حتى 3.9× مقابل M4 Pro', 'M5 Max': 'حتى 4× مقابل M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'سرعة التوليد التقديرية حسب النموذج',
        content: '**هذه تقديرات وليست اختبارات معيارية.** الحد الأعلى = عرض نطاق الذاكرة ÷ حجم ملف النموذج. يعرض الجدول نحو 60–80% من هذا الحد، وهي الطريقة نفسها في [دليل عتاد 70B](/ar/local-llms/70b-models-consumer-hardware). مثلًا: 307 GB/s ÷ 43 GB يعطي حدًا يبلغ نحو 7 tok/s، و614 GB/s ÷ 43 GB نحو 14 tok/s. أحجام الملفات هي أحجام التنزيل في مكتبة Ollama. يفترض عمود M5 Max نسخة 614 GB/s، مع مستخدم واحد وسياق قصير ونموذج يتسع بالكامل في الذاكرة.',
        tableFormat: true,
        columns: ['النموذج (حجم الملف)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'النموذج (حجم الملف)': 'Llama 3.1 8B Q4 (4.9 GB)', 'M5 Pro (307 GB/s)': 'نحو 38–50 tok/s', 'M5 Max (614 GB/s)': 'نحو 75–100 tok/s' },
          { 'النموذج (حجم الملف)': 'Llama 3.1 8B Q8 (8.5 GB)', 'M5 Pro (307 GB/s)': 'نحو 22–29 tok/s', 'M5 Max (614 GB/s)': 'نحو 43–58 tok/s' },
          { 'النموذج (حجم الملف)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': 'نحو 4–5 tok/s', 'M5 Max (614 GB/s)': 'نحو 9–11 tok/s' },
          { 'النموذج (حجم الملف)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': 'نحو 4–5 tok/s', 'M5 Max (614 GB/s)': 'نحو 7–10 tok/s' },
          { 'النموذج (حجم الملف)': 'Ministral 3 8B Q4 (6.0 GB)', 'M5 Pro (307 GB/s)': 'نحو 31–41 tok/s', 'M5 Max (614 GB/s)': 'نحو 61–82 tok/s' },
          { 'النموذج (حجم الملف)': 'Phi-4 14B Q4 (9.1 GB)', 'M5 Pro (307 GB/s)': 'نحو 20–27 tok/s', 'M5 Max (614 GB/s)': 'نحو 40–54 tok/s' },
        ],
        note: 'تقديرات فقط. نطاق 60–80% قاعدة تقريبية قد لا تنطبق على النماذج الصغيرة أو السياق الطويل أو بيئة تشغيل بعينها. لا يشمل معالجة المطالبة. Phi-4 نموذج 14B.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'سرعة معالجة المطالبات: ما تقوله Apple',
        content: [
          'تقول Apple، بناءً على اختباراتها الخاصة، إن معالجة مطالبات LLM على M5 Pro أسرع حتى 3.9× من M4 Pro، وعلى M5 Max حتى 4× من M4 Max ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). لم تتحقق PromptQuorum من هذه الادعاءات.',
          'معالجة المطالبة مرحلة منفصلة عن توليد tokens، لذا لا تنطبق هذه المعاملات على تقديرات tok/s أعلاه، ولا تقدّم هذه الصفحة أرقامًا لزمن ظهور أول token.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'أيهما تشتري؟',
        numberedItems: [
          {
            title: 'نماذج من 8B إلى 14B يوميًا',
            whyItMatters: 'وفق التقدير يقدّم M5 Pro نحو 20–50 tok/s مع ملفي 8B و14B أعلاه. لا يلزم M5 Max لهذه الأحجام.',
          },
          {
            title: 'نماذج بحجم نحو 20 GB (مثل 32B بصيغة Q4)',
            whyItMatters: 'ملف بحجم 20 GB يعطي نحو 9–12 tok/s على M5 Pro و18–25 tok/s على M5 Max بعرض 614 GB/s (تقديرات). اختر حسب مدة الانتظار التي تقبلها.',
          },
          {
            title: 'تشغيل نماذج 70B بانتظام',
            whyItMatters: 'فكّر في M5 Max ذي 40 نواة بذاكرة 64 GB أو أكثر: تقدير نحو 9–11 tok/s مع 70B Q4_K_M مقابل نحو 4–5 tok/s على M5 Pro.',
          },
          {
            title: 'خادم يعمل باستمرار',
            whyItMatters: 'Mac mini M5 Pro هو خيار سطح المكتب المدمج. سعر $1,699 هو للطراز الأساسي بذاكرة 24 GB في الولايات المتحدة. وأرخص تكوين بذاكرة 64 GB (معالج 15 نواة وSSD بسعة 512 GB) بسعر $2,699، أي السعر الأساسي مع $1,000 لترقية الذاكرة ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)). أما $3,199 التي أدرجها Fstoppers في 21 سبتمبر 2026 فهي لنسخة المعالج ذي 18 نواة مع 1 TB.',
          },
          { title: 'جهاز محمول', whyItMatters: 'يتيح MacBook Pro شريحة M5 Pro بذاكرة تصل إلى 64 GB؛ وتتطلب سعة 64 GB نسخة الرسوميات ذات 20 نواة.' },
          {
            title: 'هامش ذاكرة أكبر',
            whyItMatters: 'يترك Mac Studio M5 Max بذاكرة 128 GB (رسوميات 40 نواة) مساحة أكبر لملف 70B Q5_K_M بحجم 50 GB أو لسياق أطول أو لنماذج إضافية.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro وM5 Max في أجهزة Mac المكتبية',
        content: 'في 25 أغسطس 2026 أعلنت Apple عن Mac mini M5 Pro وMac Studio بشريحة M5 Max أو M5 Ultra، مع التوفر اعتبارًا من 22 سبتمبر 2026. وذكرت Apple أن تكوين 512 GB من Mac Studio M5 Ultra سيأتي في أواخر أكتوبر 2026. الأسعار هي الأسعار الرسمية في الولايات المتحدة بتاريخ المصادر ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/)، [MacRumors](https://www.macrumors.com/roundup/mac-mini/))؛ راجع متجر Apple للأسعار الحالية.',
        tableFormat: true,
        columns: ['جهاز Mac المكتبي', 'السعر الابتدائي (أمريكا)', 'أقصى ذاكرة', 'التوفر'],
        rows: [
          {
            'جهاز Mac المكتبي': 'Mac mini M5 Pro',
            'السعر الابتدائي (أمريكا)': '$1,699 (24 GB)',
            'أقصى ذاكرة': '64 GB (307 GB/s)',
            'التوفر': '22 سبتمبر 2026',
          },
          {
            'جهاز Mac المكتبي': 'Mac Studio M5 Max',
            'السعر الابتدائي (أمريكا)': '$2,499 (36 GB)',
            'أقصى ذاكرة': '128 GB (حتى 614 GB/s)',
            'التوفر': '22 سبتمبر 2026',
          },
          {
            'جهاز Mac المكتبي': 'Mac Studio M5 Ultra',
            'السعر الابتدائي (أمريكا)': '$5,499 (96 GB)',
            'أقصى ذاكرة': '512 GB (حتى 1.2 TB/s)',
            'التوفر': '22 سبتمبر (512 GB لاحقًا)',
          },
        ],
        note: 'الطراز الأساسي من Mac Studio M5 Max فيه رسوميات 32 نواة و460 GB/s و36 GB، وهي لا تكفي لملف 70B Q4_K_M بحجم 43 GB. لم تختبر PromptQuorum أي جهاز M5 مكتبي أو محمول، لذا لا تقارن سرعاتها.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'قِس السرعة على جهازك',
        content: 'التقديرات لا تغني عن القياس. بعد تثبيت MLX (pip install mlx-lm) يطبع هذا البرنامج النصي القصير سرعة معالجة المطالبة وسرعة التوليد على جهازك. راجع أيضًا [مقارنة MLX وOllama وllama.cpp على Mac](/ar/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'تعتمد النتائج على ملف النموذج وإصدار بيئة التشغيل وطول السياق وإعدادات الطاقة والتطبيقات الأخرى المفتوحة. التشغيل القصير لمرة واحدة مجرد فحص تقريبي.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: السعر والسرعة التقديرية',
        content: 'يبدأ سعر Mac Studio M5 Ultra من $5,499 بذاكرة 96 GB (سعر أمريكي)، ويتوفر اعتبارًا من 22 سبتمبر 2026. وأفاد MacRumors في 28 أكتوبر 2026 بإمكان طلب تكوين 512 GB بدءًا من $22,299 ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). السرعات أدناه تقديرات محسوبة بالطريقة نفسها وليست قياسات.',
        columns: ['المواصفة', 'M5 Ultra'],
        rows: [
          { 'المواصفة': 'أقصى ذاكرة موحدة', 'M5 Ultra': '512 GB' },
          { 'المواصفة': 'عرض نطاق الذاكرة', 'M5 Ultra': 'حتى 1.2 TB/s' },
          { 'المواصفة': 'أنوية GPU', 'M5 Ultra': 'حتى 80' },
          { 'المواصفة': '70B Q4_K_M، ‏43 GB (تقدير)', 'M5 Ultra': 'نحو 17–21 tok/s' },
          { 'المواصفة': '70B FP16، ‏141 GB (تقدير)', 'M5 Ultra': 'نحو 5–7 tok/s' },
          { 'المواصفة': 'السعر الابتدائي (أمريكا)', 'M5 Ultra': '$5,499 (96 GB)' },
          { 'المواصفة': 'تكوين 512 GB', 'M5 Ultra': 'من $22,299 (28 أكتوبر 2026)' },
        ],
        note: 'يحتاج ملف FP16 بحجم 141 GB إلى تكوين بذاكرة تتجاوز 96 GB.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'كيف حُسبت التقديرات',
        items: [
          '**الطريقة:** عرض نطاق الذاكرة ÷ حجم ملف النموذج يعطي حدًا أعلى، وتعرض الصفحة نحو 60–80% منه.',
          '**عرض النطاق والذاكرة:** صفحتا مواصفات [MacBook Pro](https://www.apple.com/macbook-pro/specs/) و[Mac Studio](https://www.apple.com/mac-studio/specs/) لدى Apple، جرى التحقق منهما في 28 نوفمبر 2026؛ وقيمة 1.2 TB/s لشريحة M5 Ultra هي قيمة «حتى».',
          '**أحجام الملفات:** وسوم مكتبة Ollama لكل من [Llama 3.1](https://ollama.com/library/llama3.1/tags) و[Llama 3.3](https://ollama.com/library/llama3.3/tags) و[Ministral 3](https://ollama.com/library/ministral-3/tags) و[Phi-4](https://ollama.com/library/phi4/tags)، جرى التحقق منها في 28 نوفمبر 2026.',
          '**الاختبار:** لم تُجرِ PromptQuorum اختبارات معيارية لـ M5 Pro أو M5 Max أو M5 Ultra لهذه الصفحة.',
          '**تصحيح (28 نوفمبر 2026):** استُبدلت أرقام السرعة بتقديرات محسوبة، وحُذفت أرقام أطر التشغيل وزمن الاستجابة والتفريغ الصوتي واستهلاك الطاقة والحرارة.',
          '**الحدود:** قد تقع السرعة الفعلية خارج هذه النطاقات. استخدمها للتخطيط فقط.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'لماذا يبلغ تقدير M5 Max نحو 2× تقدير M5 Pro؟',
            a: 'يقوم التقدير على عرض نطاق الذاكرة، ويقدم M5 Max ذو 40 نواة ‏614 GB/s مقابل 307 GB/s في M5 Pro. إذن فالعامل 2× ناتج عن الطريقة، وليس تسارعًا مقاسًا، وقد تختلف النتائج الفعلية. أما M5 Max ذو 32 نواة فيقدم 460 GB/s، أي نحو 1.5× من M5 Pro.',
          },
          {
            q: 'هل تشغّل RTX 4090 هذه النماذج أسرع؟',
            a: 'حدها الأعلى المرتبط بعرض النطاق أعلى (1,008 GB/s مقابل حتى 614 GB/s) للنماذج التي تتسع في ذاكرة VRAM البالغة 24 GB. ملف Llama 3.3 70B Q4_K_M بحجم 43 GB لا يتسع في بطاقة RTX 4090 واحدة. لا تتضمن هذه الصفحة مقارنة مقاسة.',
          },
          {
            q: 'هل يكفي M5 Pro أم أشتري M5 Max؟',
            a: 'قد يكفي M5 Pro للنماذج الصغيرة والمتوسطة: لملف بحجم 20 GB نقدّر نحو 9–12 tok/s. وإذا كنت تشغّل 70B كثيرًا أو [عدة نماذج معًا](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) فإن M5 Max ذا 40 نواة بذاكرة 64 GB أو أكثر يمنحك هامشًا أكبر.',
          },
          {
            q: 'كم يمكن أن يكون M5 Ultra أسرع؟',
            a: 'تذكر Apple حتى 1.2 TB/s، أي نحو ضعف 614 GB/s في أقوى M5 Max، لذا فالحد الأعلى المرتبط بعرض النطاق نحو الضعف. وتقديرنا لنموذج 70B Q4_K_M نحو 17–21 tok/s، وهو ليس قياسًا.',
          },
          {
            q: 'هل أجرت PromptQuorum اختبارات معيارية لهذه الشرائح؟',
            a: 'لا. سرعات هذه الصفحة محسوبة من عرض النطاق المنشور وأحجام الملفات. للحصول على أرقام فعلية على جهازك شغّل برنامج MLX أعلاه، وقارن فقط النتائج المأخوذة بالملف وبيئة التشغيل والإعدادات نفسها.',
          },
        ],
      },
    },
    ctaText: 'هل تشغّل نماذج على M5 Pro أو M5 Max؟ قارن عبر PromptQuorum إجابات LLM المحلي بإجابات النماذج السحابية في إرسال واحد، وتحقق من أدائها في مهامك أنت.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'M5 Pro مقابل M5 Max لنماذج LLM المحلية 2026: المواصفات وتقديرات السرعة',
      description: 'مقارنة قائمة على المواصفات بسرعات تقديرية غير مقاسة: ‏70B Q4 نحو 4–5 tok/s على M5 Pro و9–11 tok/s على M5 Max.',
      url: 'https://www.promptquorum.com/ar/local-llms/m5-pro-max-llm-benchmarks-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
  },
  pt: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro vs M5 Max para LLMs locais 2026: especificações e velocidade estimada',
    seoTitle: 'M5 Pro vs M5 Max 2026: velocidade LLM estimada',
    intro: 'Como M5 Pro e M5 Max se comparam para LLMs locais em 2026, com base nas especificações publicadas. Todas as velocidades do M5 nesta página são estimativas calculadas a partir da largura de banda de memória e do tamanho do arquivo do modelo, não benchmarks: o PromptQuorum não mediu esses chips. Inclui estimativas para Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B e Phi-4, limites de memória, preços de desktop e qual chip serve a cada tamanho de modelo.',
    metaDescription: 'M5 Pro vs M5 Max para LLMs locais: 307 contra até 614 GB/s. 70B Q4 estimado: ~4–5 contra ~9–11 tok/s. Specs, memória e qual escolher.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-pt.webp',
    twitterDescription: 'M5 Pro vs M5 Max para IA local: largura de banda, limites de memória e tok/s estimados (não medidos) por tamanho de modelo.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: 'Donos e futuros compradores de M5 Pro/Max que querem estimativas baseadas em especificações antes de comprar.',
    readTime: '6 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'benchmarks LLM M5 Pro M5 Max',
    targetKeywords: ['benchmarks M5 Pro', 'benchmarks M5 Max', 'comparativo tok/s', 'desempenho LLM Apple Silicon'],
    leadAnswerBlock: '**O M5 Pro tem 307 GB/s de largura de banda de memória; o M5 Max com GPU de 40 núcleos, 614 GB/s. Para o Llama 3.3 70B Q4_K_M (43 GB), estimamos cerca de 4–5 tok/s num M5 Pro de 64 GB e 9–11 tok/s num M5 Max com 64 GB ou mais. Para o Llama 3.1 8B Q4 (4,9 GB), cerca de 38–50 contra 75–100 tok/s. São estimativas a partir da largura de banda e do tamanho do arquivo, não medições.**',
    quickAnswerTop: {
      pt: {
        question: 'Qual é a velocidade do M5 Pro e do M5 Max em inferência local de LLMs?',
        answer: 'São estimativas, não medições: num modelo 70B Q4_K_M, cerca de 4–5 tok/s no M5 Pro (64 GB) e 9–11 tok/s no M5 Max (614 GB/s, 64 GB ou mais). Num 8B Q4, cerca de 38–50 e 75–100 tok/s. A diferença de cerca de 2× vem do dobro de largura de banda usado no cálculo.',
        bullets: [
          '70B Q4_K_M (estimativa): ~4–5 tok/s no M5 Pro 64 GB, ~9–11 tok/s no M5 Max',
          '8B Q4 (estimativa): ~38–50 tok/s no M5 Pro, ~75–100 tok/s no M5 Max',
          'M5 Pro: 307 GB/s, até 64 GB. M5 Max: 460 ou 614 GB/s, até 128 GB',
          'Os 614 GB/s exigem a GPU de 40 núcleos; a de 32 tem 460 GB/s e 36 GB',
          'O PromptQuorum não fez benchmarks desses chips',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Especificações M5 Pro vs M5 Max', anchor: '#specs' },
      { label: 'Velocidade de geração estimada', anchor: '#benchmarks' },
      { label: 'O que a Apple afirma sobre prompts', anchor: '#prompt-speed' },
      { label: 'Qual você deve comprar?', anchor: '#which-buy' },
      { label: 'Macs de mesa: Mac mini e Mac Studio', anchor: '#desktop-availability' },
      { label: 'Meça no seu próprio Mac', anchor: '#reproducibility' },
      { label: 'M5 Ultra: preço e velocidade estimada', anchor: '#ultra-projections' },
      { label: 'Como as estimativas foram feitas', anchor: '#freshness-note' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro (307 GB/s) e M5 Max (até 614 GB/s) diferem principalmente na largura de banda e na memória máxima: para um modelo 70B Q4_K_M, estimamos cerca de 4–5 tok/s no M5 Pro de 64 GB e 9–11 tok/s no M5 Max de 614 GB/s, valores calculados e não medidos.',
          },
          {
            type: 'plain-terms',
            text: 'Largura de banda de memória é a velocidade com que o chip lê dados da memória. Para gerar cada token, o chip lê o modelo, então a largura de banda dividida pelo tamanho do modelo dá um teto aproximado. O software real costuma ficar abaixo dele.',
          },
        ],
        items: [
          'M5 Pro: 307 GB/s e até 64 GB. M5 Max: 460 GB/s (GPU de 32 núcleos) ou 614 GB/s (GPU de 40 núcleos), até 128 GB.',
          'Velocidade estimada no Llama 3.3 70B Q4_K_M: ~4–5 tok/s no M5 Pro 64 GB, ~9–11 tok/s no M5 Max de 614 GB/s.',
          'Velocidade estimada no Llama 3.1 8B Q4: ~38–50 tok/s no M5 Pro, ~75–100 tok/s no M5 Max de 614 GB/s.',
          'O arquivo 70B de 43 GB fica apertado em 64 GB, porque o contexto e o macOS dividem a mesma memória.',
          'O M5 Pro é a opção mais barata para modelos pequenos e médios; se você usa 70B com frequência, avalie o M5 Max.',
          'Nenhuma velocidade desta página foi medida pelo PromptQuorum.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro vs M5 Max: especificações que importam para LLMs',
        tableFormat: true,
        columns: ['Especificação', 'M5 Pro', 'M5 Max'],
        rows: [
          { 'Especificação': 'Memória unificada máx.', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { 'Especificação': 'Largura de banda de memória', 'M5 Pro': '307 GB/s', 'M5 Max': '460 ou 614 GB/s' },
          { 'Especificação': 'Núcleos de GPU', 'M5 Pro': '16 ou 20', 'M5 Max': '32 ou 40' },
          { 'Especificação': 'Neural Engine', 'M5 Pro': '16 núcleos', 'M5 Max': '16 núcleos' },
          { 'Especificação': 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': 'Só com 64 GB, apertado', 'M5 Max': 'Requer 64 GB ou mais' },
          { 'Especificação': 'Apple sobre prompts LLM', 'M5 Pro': 'Até 3,9× vs M4 Pro', 'M5 Max': 'Até 4× vs M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Velocidade de geração estimada por modelo',
        content: '**São estimativas, não benchmarks.** Teto = largura de banda de memória ÷ tamanho do arquivo do modelo. A tabela mostra cerca de 60–80% desse teto, o mesmo método do nosso [guia de hardware para 70B](/pt/local-llms/70b-models-consumer-hardware). Por exemplo, 307 GB/s ÷ 43 GB dá um teto de cerca de 7 tok/s, e 614 GB/s ÷ 43 GB, cerca de 14 tok/s. Os tamanhos são os downloads da biblioteca do Ollama. A coluna M5 Max considera a versão de 614 GB/s. Premissas: um usuário, contexto curto e modelo inteiro na memória.',
        tableFormat: true,
        columns: ['Modelo (tamanho)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'Modelo (tamanho)': 'Llama 3.1 8B Q4 (4,9 GB)', 'M5 Pro (307 GB/s)': '~38–50 tok/s', 'M5 Max (614 GB/s)': '~75–100 tok/s' },
          { 'Modelo (tamanho)': 'Llama 3.1 8B Q8 (8,5 GB)', 'M5 Pro (307 GB/s)': '~22–29 tok/s', 'M5 Max (614 GB/s)': '~43–58 tok/s' },
          { 'Modelo (tamanho)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~9–11 tok/s' },
          { 'Modelo (tamanho)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~7–10 tok/s' },
          { 'Modelo (tamanho)': 'Ministral 3 8B Q4 (6,0 GB)', 'M5 Pro (307 GB/s)': '~31–41 tok/s', 'M5 Max (614 GB/s)': '~61–82 tok/s' },
          { 'Modelo (tamanho)': 'Phi-4 14B Q4 (9,1 GB)', 'M5 Pro (307 GB/s)': '~20–27 tok/s', 'M5 Max (614 GB/s)': '~40–54 tok/s' },
        ],
        note: 'Apenas estimativas. A faixa de 60–80% é uma regra aproximada e pode não valer para modelos pequenos, contexto longo ou um runtime específico. O processamento do prompt não está incluído. O Phi-4 é um modelo de 14B.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'Processamento de prompts: o que a Apple afirma',
        content: [
          'A Apple afirma, com base nos próprios testes, processamento de prompts LLM até 3,9× mais rápido no M5 Pro que no M4 Pro, e até 4× no M5 Max em relação ao M4 Max ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). O PromptQuorum não verificou essas afirmações.',
          'O processamento do prompt é separado da geração de tokens, então esses fatores não se aplicam às estimativas de tok/s acima, e esta página não informa tempo até o primeiro token.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'Qual você deve comprar?',
        numberedItems: [
          {
            title: 'Modelos de 8B a 14B no dia a dia',
            whyItMatters: 'Pela estimativa, o M5 Pro entrega cerca de 20–50 tok/s com os arquivos 8B e 14B acima. Para esses tamanhos, o M5 Max não é necessário.',
          },
          {
            title: 'Modelos de cerca de 20 GB (por exemplo, 32B em Q4)',
            whyItMatters: 'Um arquivo de 20 GB resulta em cerca de 9–12 tok/s no M5 Pro e 18–25 tok/s no M5 Max de 614 GB/s (estimativas). Escolha conforme quanto você aceita esperar.',
          },
          {
            title: 'Modelos 70B com frequência',
            whyItMatters: 'Avalie o M5 Max de 40 núcleos com 64 GB ou mais: ~9–11 tok/s estimados em 70B Q4_K_M, contra ~4–5 tok/s no M5 Pro.',
          },
          {
            title: 'Servidor sempre ligado',
            whyItMatters: 'O Mac mini M5 Pro é a opção compacta de mesa. US$ 1.699 é a base de 24 GB nos EUA. A configuração de 64 GB mais barata (CPU de 15 núcleos, SSD de 512 GB) custa US$ 2.699: a base mais US$ 1.000 pelo upgrade de memória ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)). Os US$ 3.199 listados pelo Fstoppers em 21 de setembro de 2026 são da versão com 18 núcleos e 1 TB. No Brasil os preços podem variar bastante.',
          },
          { title: 'Máquina portátil', whyItMatters: 'O MacBook Pro oferece M5 Pro com até 64 GB; os 64 GB exigem a versão com GPU de 20 núcleos.' },
          {
            title: 'Mais folga de memória',
            whyItMatters: 'Um Mac Studio M5 Max com 128 GB (GPU de 40 núcleos) deixa mais espaço para um arquivo 70B Q5_K_M de 50 GB, contexto maior ou outros modelos.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro e M5 Max em Macs de mesa',
        content: 'Em 25 de agosto de 2026, a Apple anunciou o Mac mini M5 Pro e o Mac Studio com M5 Max ou M5 Ultra, disponíveis a partir de 22 de setembro de 2026. Segundo a Apple, a configuração de 512 GB do Mac Studio M5 Ultra viria no fim de outubro de 2026. São preços de tabela dos EUA na data das fontes ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)); confira os preços atuais na loja da Apple.',
        tableFormat: true,
        columns: ['Mac de mesa', 'Preço inicial (EUA)', 'Memória máx.', 'Disponível'],
        rows: [
          {
            'Mac de mesa': 'Mac mini M5 Pro',
            'Preço inicial (EUA)': 'US$ 1.699 (24 GB)',
            'Memória máx.': '64 GB (307 GB/s)',
            'Disponível': '22 set. 2026',
          },
          {
            'Mac de mesa': 'Mac Studio M5 Max',
            'Preço inicial (EUA)': 'US$ 2.499 (36 GB)',
            'Memória máx.': '128 GB (até 614 GB/s)',
            'Disponível': '22 set. 2026',
          },
          {
            'Mac de mesa': 'Mac Studio M5 Ultra',
            'Preço inicial (EUA)': 'US$ 5.499 (96 GB)',
            'Memória máx.': '512 GB (até 1,2 TB/s)',
            'Disponível': '22 set. (512 GB depois)',
          },
        ],
        note: 'O Mac Studio M5 Max básico tem GPU de 32 núcleos, 460 GB/s e 36 GB, pouco para um arquivo 70B Q4_K_M de 43 GB. O PromptQuorum não testou nenhum M5 de mesa ou notebook e, por isso, não compara a velocidade deles.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'Meça no seu próprio Mac',
        content: 'As estimativas não substituem uma medição. Com o MLX instalado (pip install mlx-lm), este script curto mostra a velocidade de processamento do prompt e de geração no seu Mac. Veja também [MLX vs Ollama vs llama.cpp no Mac](/pt/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'Os resultados dependem do arquivo do modelo, da versão do runtime, do tamanho do contexto, dos ajustes de energia e de outros apps abertos. Uma única execução curta é só uma verificação aproximada.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: preço e velocidade estimada',
        content: 'O Mac Studio M5 Ultra começa em US$ 5.499 com 96 GB (preço dos EUA), disponível a partir de 22 de setembro de 2026. O MacRumors informou em 28 de outubro de 2026 que a configuração de 512 GB podia ser encomendada a partir de US$ 22.299 ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). As velocidades abaixo são estimativas calculadas pelo mesmo método, não medições.',
        columns: ['Especificação', 'M5 Ultra'],
        rows: [
          { 'Especificação': 'Memória unificada máx.', 'M5 Ultra': '512 GB' },
          { 'Especificação': 'Largura de banda de memória', 'M5 Ultra': 'Até 1,2 TB/s' },
          { 'Especificação': 'Núcleos de GPU', 'M5 Ultra': 'Até 80' },
          { 'Especificação': '70B Q4_K_M, 43 GB (estimado)', 'M5 Ultra': '~17–21 tok/s' },
          { 'Especificação': '70B FP16, 141 GB (estimado)', 'M5 Ultra': '~5–7 tok/s' },
          { 'Especificação': 'Preço inicial (EUA)', 'M5 Ultra': 'US$ 5.499 (96 GB)' },
          { 'Especificação': 'Configuração de 512 GB', 'M5 Ultra': 'De US$ 22.299 (28/10/2026)' },
        ],
        note: 'Um arquivo FP16 de 141 GB exige uma configuração com mais de 96 GB de memória.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'Como as estimativas foram feitas',
        items: [
          '**Método:** largura de banda de memória ÷ tamanho do arquivo dá um teto; a página mostra cerca de 60–80% dele.',
          '**Largura de banda e memória:** especificações da Apple do [MacBook Pro](https://www.apple.com/macbook-pro/specs/) e do [Mac Studio](https://www.apple.com/mac-studio/specs/), verificadas em 28 de novembro de 2026; os 1,2 TB/s do M5 Ultra são um valor "até".',
          '**Tamanhos:** tags da biblioteca do Ollama de [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags) e [Phi-4](https://ollama.com/library/phi4/tags), verificadas em 28 de novembro de 2026.',
          '**Testes:** o PromptQuorum não fez benchmarks do M5 Pro, M5 Max ou M5 Ultra para esta página.',
          '**Correção (28 de novembro de 2026):** os números de velocidade foram substituídos por estimativas calculadas. Os números de frameworks, latência, transcrição, consumo e temperatura foram removidos.',
          '**Limites:** a velocidade real pode ficar fora dessas faixas. Use-as apenas para planejamento.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Por que a estimativa do M5 Max é cerca de 2× a do M5 Pro?',
            a: 'A estimativa se baseia na largura de banda de memória, e o M5 Max de 40 núcleos tem 614 GB/s contra 307 GB/s do M5 Pro. O 2× vem do método; não é um ganho medido, e os resultados reais podem diferir. O M5 Max de 32 núcleos tem 460 GB/s, cerca de 1,5× o M5 Pro.',
          },
          {
            q: 'Uma RTX 4090 roda esses modelos mais rápido?',
            a: 'O teto pela largura de banda é maior (1.008 GB/s contra até 614 GB/s) para modelos que cabem nos 24 GB de VRAM. O arquivo de 43 GB do Llama 3.3 70B Q4_K_M não cabe em uma única RTX 4090. Esta página não traz comparação medida.',
          },
          {
            q: 'O M5 Pro basta ou devo comprar o M5 Max?',
            a: 'O M5 Pro pode bastar para modelos pequenos e médios: para um arquivo de 20 GB, estimamos cerca de 9–12 tok/s. Se você usa 70B com frequência ou [vários modelos juntos](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text), o M5 Max de 40 núcleos com 64 GB ou mais dá mais folga.',
          },
          {
            q: 'Quanto mais rápido um M5 Ultra poderia ser?',
            a: 'A Apple informa até 1,2 TB/s, cerca de duas vezes os 614 GB/s do M5 Max mais forte, então o teto pela largura de banda é cerca do dobro. Para 70B Q4_K_M, estimamos ~17–21 tok/s. Não é uma medição.',
          },
          {
            q: 'O PromptQuorum fez benchmarks desses chips?',
            a: 'Não. As velocidades desta página são calculadas a partir da largura de banda publicada e do tamanho dos arquivos. Para números reais no seu Mac, rode o script MLX acima e compare apenas resultados com o mesmo arquivo, runtime e ajustes.',
          },
        ],
      },
    },
    ctaText: 'Você roda modelos em um M5 Pro ou M5 Max? Compare com o PromptQuorum, em um único envio, as respostas do seu LLM local com as de modelos na nuvem e veja como se saem nas suas próprias tarefas.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'M5 Pro vs M5 Max para LLMs locais 2026: especificações e velocidade estimada',
      description: 'Comparação por especificações com velocidades estimadas, não medidas: 70B Q4 cerca de 4–5 tok/s no M5 Pro e 9–11 tok/s no M5 Max.',
      url: 'https://www.promptquorum.com/pt/local-llms/m5-pro-max-llm-benchmarks-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-15',
      dateModified: '2026-11-28',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      proficiencyLevel: 'Intermediate',
    },
  },
  de: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro vs. M5 Max für lokale LLMs 2026: Spezifikationen und Tempo-Schätzungen',
    seoTitle: 'M5 Pro vs. M5 Max 2026: LLM-Tempo geschätzt',
    intro: 'So unterscheiden sich M5 Pro und M5 Max 2026 für lokale LLMs, auf Basis veröffentlichter Spezifikationen. Alle M5-Geschwindigkeiten auf dieser Seite sind Schätzungen aus Speicherbandbreite und Modelldateigröße, keine Benchmarks: PromptQuorum hat diese Chips nicht gemessen. Mit Schätzwerten für Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B und Phi-4, Speichergrenzen, Desktop-Preisen und der Frage, welcher Chip zu welcher Modellgröße passt.',
    metaDescription: 'M5 Pro vs. M5 Max für lokale LLMs: 307 gegen bis zu 614 GB/s. 70B Q4 geschätzt ~4–5 gegen ~9–11 tok/s. Specs, Speichergrenzen und Kaufhilfe.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-de.webp',
    twitterDescription: 'M5 Pro vs. M5 Max für lokale KI: Bandbreite, Speichergrenzen und geschätzte (nicht gemessene) tok/s je Modellgröße.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: 'Besitzer und Interessierte von M5 Pro/Max, die vor dem Kauf spezifikationsbasierte Schätzwerte suchen.',
    readTime: '6 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max LLM-Benchmarks',
    targetKeywords: ['M5 Pro-Benchmarks', 'M5 Max-Benchmarks', 'tok/s Vergleich', 'Apple Silicon LLM-Leistung'],
    leadAnswerBlock: '**M5 Pro hat 307 GB/s Speicherbandbreite, der M5 Max mit 40-Kern-GPU 614 GB/s. Für Llama 3.3 70B Q4_K_M (43 GB) schätzen wir etwa 4–5 tok/s auf einem M5 Pro mit 64 GB und 9–11 tok/s auf einem M5 Max mit mindestens 64 GB. Für Llama 3.1 8B Q4 (4,9 GB) sind es etwa 38–50 gegenüber 75–100 tok/s. Das sind Schätzungen aus Bandbreite und Dateigröße, keine Messungen.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: {
        question: 'Wie schnell sind M5 Pro und M5 Max bei lokaler LLM-Inferenz?',
        answer: 'Geschätzt, nicht gemessen: bei einem 70B-Q4_K_M-Modell etwa 4–5 tok/s auf dem M5 Pro (64 GB) und 9–11 tok/s auf dem M5 Max (614 GB/s, mindestens 64 GB). Bei einem 8B-Q4-Modell etwa 38–50 und 75–100 tok/s. Der Abstand von rund 2× folgt aus der doppelten Speicherbandbreite in der Rechnung.',
        bullets: [
          '70B Q4_K_M (Schätzung): ~4–5 tok/s auf M5 Pro 64 GB, ~9–11 tok/s auf M5 Max',
          '8B Q4 (Schätzung): ~38–50 tok/s auf M5 Pro, ~75–100 tok/s auf M5 Max',
          'M5 Pro: 307 GB/s, bis 64 GB. M5 Max: 460 oder 614 GB/s, bis 128 GB',
          'Die 614 GB/s gibt es nur mit 40-Kern-GPU; die 32-Kern-Version hat 460 GB/s und 36 GB',
          'PromptQuorum hat diese Chips nicht gebenchmarkt',
        ],
        updatedDate: '2026-11-28',
      },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Spezifikationen: M5 Pro vs. M5 Max', anchor: '#specs' },
      { label: 'Geschätzte Generierungsgeschwindigkeit', anchor: '#benchmarks' },
      { label: 'Apples Angabe zur Prompt-Verarbeitung', anchor: '#prompt-speed' },
      { label: 'Welchen sollten Sie kaufen?', anchor: '#which-buy' },
      { label: 'Desktop-Macs: Mac mini und Mac Studio', anchor: '#desktop-availability' },
      { label: 'Auf dem eigenen Mac messen', anchor: '#reproducibility' },
      { label: 'M5 Ultra: Preis und geschätztes Tempo', anchor: '#ultra-projections' },
      { label: 'So entstanden die Schätzwerte', anchor: '#freshness-note' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro (307 GB/s) und M5 Max (bis 614 GB/s) unterscheiden sich vor allem bei Speicherbandbreite und maximalem Speicher: Für ein 70B-Q4_K_M-Modell schätzen wir etwa 4–5 tok/s auf dem M5 Pro mit 64 GB und 9–11 tok/s auf dem M5 Max mit 614 GB/s, berechnet statt gemessen.',
          },
          {
            type: 'plain-terms',
            text: 'Die Speicherbandbreite gibt an, wie schnell ein Chip Daten aus dem Speicher lesen kann. Für jedes Token liest der Chip das Modell aus dem Speicher. Bandbreite geteilt durch Modellgröße ergibt daher eine grobe Obergrenze. Reale Software bleibt meist darunter.',
          },
        ],
        items: [
          'M5 Pro: 307 GB/s und bis 64 GB. M5 Max: 460 GB/s (32-Kern-GPU) oder 614 GB/s (40-Kern-GPU), bis 128 GB.',
          'Geschätzt für Llama 3.3 70B Q4_K_M: ~4–5 tok/s auf M5 Pro 64 GB, ~9–11 tok/s auf dem M5 Max mit 614 GB/s.',
          'Geschätzt für Llama 3.1 8B Q4: ~38–50 tok/s auf M5 Pro, ~75–100 tok/s auf dem M5 Max mit 614 GB/s.',
          'Die 43 GB große 70B-Datei ist bei 64 GB knapp, weil Kontext und macOS denselben Speicher nutzen.',
          'Der M5 Pro ist die günstigere Option für kleine und mittlere Modelle; wer oft 70B nutzt, sollte den M5 Max prüfen.',
          'Keine Geschwindigkeit auf dieser Seite wurde von PromptQuorum gemessen.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro vs. M5 Max: Die für LLMs wichtigen Daten',
        tableFormat: true,
        columns: ['Spezifikation', 'M5 Pro', 'M5 Max'],
        rows: [
          { Spezifikation: 'Max. Unified Memory', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { Spezifikation: 'Speicherbandbreite', 'M5 Pro': '307 GB/s', 'M5 Max': '460 oder 614 GB/s' },
          { Spezifikation: 'GPU-Kerne', 'M5 Pro': '16 oder 20', 'M5 Max': '32 oder 40' },
          { Spezifikation: 'Neural Engine', 'M5 Pro': '16 Kerne', 'M5 Max': '16 Kerne' },
          { Spezifikation: 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': 'Nur mit 64 GB, knapp', 'M5 Max': 'Ab 64 GB' },
          { Spezifikation: 'Apple: LLM-Prompts', 'M5 Pro': 'Bis 3,9× vs. M4 Pro', 'M5 Max': 'Bis 4× vs. M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Geschätzte Generierungsgeschwindigkeit je Modell',
        content: '**Das sind Schätzungen, keine Benchmarks.** Obergrenze = Speicherbandbreite ÷ Modelldateigröße. Die Tabelle zeigt etwa 60–80 % dieser Obergrenze, dieselbe Methode wie in unserem [70B-Hardware-Leitfaden](/de/local-llms/70b-models-consumer-hardware). Beispiel: 307 GB/s ÷ 43 GB ergeben höchstens etwa 7 tok/s, 614 GB/s ÷ 43 GB etwa 14 tok/s. Die Dateigrößen sind die Downloads der Ollama-Bibliothek. Die M5-Max-Spalte gilt für die Version mit 614 GB/s. Angenommen werden ein Nutzer, kurzer Kontext und ein Modell, das vollständig in den Speicher passt.',
        tableFormat: true,
        columns: ['Modell (Dateigröße)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'Modell (Dateigröße)': 'Llama 3.1 8B Q4 (4,9 GB)', 'M5 Pro (307 GB/s)': '~38–50 tok/s', 'M5 Max (614 GB/s)': '~75–100 tok/s' },
          { 'Modell (Dateigröße)': 'Llama 3.1 8B Q8 (8,5 GB)', 'M5 Pro (307 GB/s)': '~22–29 tok/s', 'M5 Max (614 GB/s)': '~43–58 tok/s' },
          { 'Modell (Dateigröße)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~9–11 tok/s' },
          { 'Modell (Dateigröße)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~7–10 tok/s' },
          { 'Modell (Dateigröße)': 'Ministral 3 8B Q4 (6,0 GB)', 'M5 Pro (307 GB/s)': '~31–41 tok/s', 'M5 Max (614 GB/s)': '~61–82 tok/s' },
          { 'Modell (Dateigröße)': 'Phi-4 14B Q4 (9,1 GB)', 'M5 Pro (307 GB/s)': '~20–27 tok/s', 'M5 Max (614 GB/s)': '~40–54 tok/s' },
        ],
        note: 'Nur Schätzwerte. Die Spanne von 60–80 % ist eine Faustregel und gilt womöglich nicht für kleine Modelle, langen Kontext oder jede Laufzeitumgebung. Die Prompt-Verarbeitung ist nicht enthalten. Phi-4 ist ein 14B-Modell.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'Prompt-Verarbeitung: Was Apple angibt',
        content: [
          'Apple gibt auf Basis eigener Tests eine bis zu 3,9-mal schnellere LLM-Prompt-Verarbeitung für den M5 Pro gegenüber dem M4 Pro an und eine bis zu 4-mal schnellere für den M5 Max gegenüber dem M4 Max ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). PromptQuorum hat diese Angaben nicht überprüft.',
          'Die Prompt-Verarbeitung ist von der Token-Generierung getrennt. Diese Faktoren gelten daher nicht für die tok/s-Schätzungen oben; Angaben zur Zeit bis zum ersten Token macht diese Seite nicht.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'Welchen sollten Sie kaufen?',
        numberedItems: [
          {
            title: 'Täglich 8B- bis 14B-Modelle',
            whyItMatters: 'Laut Schätzung erreicht der M5 Pro bei den 8B- und 14B-Dateien oben etwa 20–50 tok/s. Für diese Größen ist kein M5 Max nötig.',
          },
          {
            title: 'Modelle um 20 GB (z. B. 32B in Q4)',
            whyItMatters: 'Für eine 20-GB-Datei ergeben sich etwa 9–12 tok/s auf dem M5 Pro und 18–25 tok/s auf dem M5 Max mit 614 GB/s (Schätzungen). Entscheidend ist, wie lange Sie warten möchten.',
          },
          {
            title: 'Regelmäßig 70B-Modelle',
            whyItMatters: 'Prüfen Sie den M5 Max mit 40-Kern-GPU und mindestens 64 GB: geschätzt ~9–11 tok/s bei 70B Q4_K_M gegenüber ~4–5 tok/s beim M5 Pro.',
          },
          {
            title: 'Server im Dauerbetrieb',
            whyItMatters: 'Der Mac mini M5 Pro ist die kompakte Desktop-Option. 1.699 $ gelten in den USA für die Basis mit 24 GB. Die günstigste 64-GB-Konfiguration (15-Kern-CPU, 512-GB-SSD) kostet 2.699 $, also Basis plus 1.000 $ Speicher-Upgrade ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)); im deutschen Apple Store 3.099 € (Stand 28. November 2026). Die 3.199 $, die Fstoppers am 21. September 2026 listete, gelten für 18-Kern-CPU und 1 TB.',
          },
          {
            title: 'Mobiler Rechner',
            whyItMatters: 'Das MacBook Pro bietet den M5 Pro mit bis zu 64 GB; 64 GB setzen die Version mit 20-Kern-GPU voraus.',
          },
          {
            title: 'Mehr Speicherreserve',
            whyItMatters: 'Ein Mac Studio M5 Max mit 128 GB (40-Kern-GPU) lässt mehr Platz für eine 50 GB große 70B-Q5_K_M-Datei, längeren Kontext oder weitere Modelle.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro und M5 Max in Desktop-Macs',
        content: 'Am 25. August 2026 hat Apple den Mac mini M5 Pro und den Mac Studio mit M5 Max oder M5 Ultra vorgestellt, verfügbar ab dem 22. September 2026. Die 512-GB-Konfiguration des Mac Studio M5 Ultra sollte laut Apple Ende Oktober 2026 folgen. Die Preise sind US-Listenpreise zum Stand der Quellen ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)); aktuelle Preise finden Sie im Apple Store.',
        tableFormat: true,
        columns: ['Desktop-Mac', 'Startpreis (US)', 'Max. Speicher', 'Verfügbar ab'],
        rows: [
          {
            'Desktop-Mac': 'Mac mini M5 Pro',
            'Startpreis (US)': '1.699 $ (24 GB)',
            'Max. Speicher': '64 GB (307 GB/s)',
            'Verfügbar ab': '22. Sept. 2026',
          },
          {
            'Desktop-Mac': 'Mac Studio M5 Max',
            'Startpreis (US)': '2.499 $ (36 GB)',
            'Max. Speicher': '128 GB (bis 614 GB/s)',
            'Verfügbar ab': '22. Sept. 2026',
          },
          {
            'Desktop-Mac': 'Mac Studio M5 Ultra',
            'Startpreis (US)': '5.499 $ (96 GB)',
            'Max. Speicher': '512 GB (bis 1,2 TB/s)',
            'Verfügbar ab': '22. Sept. (512 GB später)',
          },
        ],
        note: 'Das Basismodell des Mac Studio M5 Max hat die 32-Kern-GPU, 460 GB/s und 36 GB, zu wenig für eine 43 GB große 70B-Q4_K_M-Datei. PromptQuorum hat weder Desktop- noch Notebook-Modelle mit M5 getestet und vergleicht deren Tempo daher nicht.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'Auf dem eigenen Mac messen',
        content: 'Die Schätzwerte ersetzen keine Messung. Mit installiertem MLX (pip install mlx-lm) gibt dieses kurze Skript die Geschwindigkeit von Prompt-Verarbeitung und Generierung für Ihren Mac aus. Siehe auch [MLX vs. Ollama vs. llama.cpp auf dem Mac](/de/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'Die Ergebnisse hängen von Modelldatei, Laufzeitversion, Kontextlänge, Energieeinstellungen und anderen laufenden Apps ab. Ein einzelner kurzer Lauf ist nur eine grobe Kontrolle.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: Preis und geschätztes Tempo',
        content: 'Der Mac Studio M5 Ultra beginnt bei 5.499 $ mit 96 GB (US-Preis), verfügbar ab dem 22. September 2026. MacRumors berichtete am 28. Oktober 2026, dass die 512-GB-Konfiguration ab 22.299 $ bestellbar ist ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). Die Geschwindigkeiten unten sind nach derselben Methode berechnete Schätzungen, keine Messungen.',
        columns: ['Spezifikation', 'M5 Ultra'],
        rows: [
          { Spezifikation: 'Max. Unified Memory', 'M5 Ultra': '512 GB' },
          { Spezifikation: 'Speicherbandbreite', 'M5 Ultra': 'Bis 1,2 TB/s' },
          { Spezifikation: 'GPU-Kerne', 'M5 Ultra': 'Bis 80' },
          { Spezifikation: '70B Q4_K_M, 43 GB (Schätzung)', 'M5 Ultra': '~17–21 tok/s' },
          { Spezifikation: '70B FP16, 141 GB (Schätzung)', 'M5 Ultra': '~5–7 tok/s' },
          { Spezifikation: 'Startpreis (US)', 'M5 Ultra': '5.499 $ (96 GB)' },
          { Spezifikation: '512-GB-Konfiguration', 'M5 Ultra': 'Ab 22.299 $ (28.10.2026)' },
        ],
        note: 'Eine 141 GB große FP16-Datei braucht eine Konfiguration mit mehr als 96 GB Speicher.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'So entstanden die Schätzwerte',
        items: [
          '**Methode:** Speicherbandbreite ÷ Modelldateigröße ergibt eine Obergrenze; die Seite zeigt etwa 60–80 % davon.',
          '**Bandbreite und Speicher:** Apples Datenblätter zu [MacBook Pro](https://www.apple.com/macbook-pro/specs/) und [Mac Studio](https://www.apple.com/mac-studio/specs/), geprüft am 28. November 2026; die 1,2 TB/s beim M5 Ultra sind ein „bis zu“-Wert.',
          '**Dateigrößen:** Tags der Ollama-Bibliothek für [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags) und [Phi-4](https://ollama.com/library/phi4/tags), geprüft am 28. November 2026.',
          '**Tests:** PromptQuorum hat M5 Pro, M5 Max und M5 Ultra für diese Seite nicht gebenchmarkt.',
          '**Korrektur (28. November 2026):** Die Geschwindigkeitsangaben wurden durch berechnete Schätzwerte ersetzt. Angaben zu Frameworks, Latenz, Transkription, Stromverbrauch und Thermik wurden entfernt.',
          '**Grenzen:** Das reale Tempo kann außerhalb dieser Spannen liegen. Nutzen Sie sie nur zur Planung.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Warum liegt die M5-Max-Schätzung etwa beim Doppelten des M5 Pro?',
            a: 'Die Schätzung beruht auf der Speicherbandbreite, und der M5 Max mit 40-Kern-GPU hat 614 GB/s gegenüber 307 GB/s beim M5 Pro. Das 2× folgt also aus der Methode; es ist kein gemessener Vorsprung, und reale Ergebnisse können abweichen. Der M5 Max mit 32 Kernen hat 460 GB/s, etwa das 1,5-Fache des M5 Pro.',
          },
          {
            q: 'Führt eine RTX 4090 diese Modelle schneller aus?',
            a: 'Ihre Bandbreiten-Obergrenze ist höher (1.008 GB/s gegenüber bis zu 614 GB/s) bei Modellen, die in 24 GB VRAM passen. Die 43 GB große Datei von Llama 3.3 70B Q4_K_M passt nicht auf eine einzelne RTX 4090. Einen gemessenen Vergleich enthält diese Seite nicht.',
          },
          {
            q: 'Reicht der M5 Pro, oder sollte ich den M5 Max kaufen?',
            a: 'Für kleine und mittlere Modelle kann der M5 Pro genügen: Für eine 20-GB-Datei schätzen wir etwa 9–12 tok/s. Wer oft 70B oder [mehrere Modelle zusammen](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) nutzt, hat mit dem M5 Max mit 40-Kern-GPU und mindestens 64 GB mehr Reserve.',
          },
          {
            q: 'Wie viel schneller könnte ein M5 Ultra sein?',
            a: 'Apple nennt bis zu 1,2 TB/s, etwa das Doppelte der 614 GB/s des größten M5 Max; die Bandbreiten-Obergrenze liegt also etwa doppelt so hoch. Für 70B Q4_K_M schätzen wir ~17–21 tok/s. Das ist keine Messung.',
          },
          {
            q: 'Hat PromptQuorum diese Chips gebenchmarkt?',
            a: 'Nein. Die Geschwindigkeiten auf dieser Seite sind aus veröffentlichten Bandbreiten und Dateigrößen berechnet. Für echte Werte auf Ihrem Mac führen Sie das MLX-Skript oben aus und vergleichen Ergebnisse nur bei gleicher Modelldatei, Laufzeitumgebung und Einstellung.',
          },
          {
            q: 'Muss ich für die Verwendung von lokalen LLMs auf M5 die BSI-Grundschutz-Kataloge beachten?',
            a: 'Wenn Sie M5 Pro/Max in deutschen Unternehmen einsetzen, prüfen Sie die DSGVO-Pflichten und, soweit für Sie relevant, den BSI-Grundschutz. Lokale Inferenz kann Datentransfers an externe KI-Anbieter vermeiden; ob Ihr Einsatz die Anforderungen erfüllt, hängt vom Einzelfall ab. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Ist M5 Pro/Max für deutsche Mittelstand-Unternehmen geeignet?',
            a: 'M5 Pro kann für kleine Teams passen, die Modelle lokal betreiben wollen. Der Mac mini M5 Pro kostet in den USA ab 1.699 $ (24 GB; 64 GB gegen Aufpreis). Datenschutz- und IT-Sicherheitsanforderungen wie DSGVO oder BSI-Grundschutz müssen Sie unabhängig davon prüfen und umsetzen. Für größere Workloads gibt es den M5 Max.',
          },
        ],
      },
    },
    ctaText: 'Sie betreiben Modelle auf einem M5 Pro oder M5 Max? Vergleichen Sie die Antworten Ihres lokalen LLM mit PromptQuorum in einem Durchgang mit Cloud-Modellen und prüfen Sie, wie sie bei Ihren eigenen Aufgaben abschneiden.',
  },
  fr: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'M5 Pro vs M5 Max pour LLM locaux 2026 : caractéristiques et vitesses estimées',
    seoTitle: 'M5 Pro vs M5 Max 2026 : vitesses LLM estimées',
    intro: 'Comparaison du M5 Pro et du M5 Max pour les LLM locaux en 2026, à partir des caractéristiques publiées. Toutes les vitesses M5 de cette page sont des estimations calculées à partir de la bande passante mémoire et de la taille du fichier, pas des benchmarks : PromptQuorum n\'a pas mesuré ces puces. Estimations pour Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B et Phi-4, limites de mémoire, prix des Mac de bureau et choix selon la taille du modèle.',
    metaDescription: 'M5 Pro vs M5 Max pour LLM locaux : 307 contre jusqu\'à 614 GB/s. 70B Q4 estimé : ~4–5 contre ~9–11 tok/s. Specs, mémoire et quel choisir.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-fr.webp',
    twitterDescription: 'M5 Pro vs M5 Max pour l\'IA locale : bande passante, limites mémoire et tok/s estimés (non mesurés) selon le modèle.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: 'Propriétaires et futurs acheteurs de M5 Pro/Max qui veulent des estimations basées sur les caractéristiques avant d\'acheter.',
    readTime: '6 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max benchmarks LLM',
    targetKeywords: ['benchmarks M5 Pro', 'benchmarks M5 Max', 'comparaison tok/s', 'performance LLM Apple Silicon'],
    leadAnswerBlock: '**Le M5 Pro offre 307 GB/s de bande passante mémoire ; le M5 Max à GPU 40 cœurs, 614 GB/s. Pour Llama 3.3 70B Q4_K_M (43 Go), nous estimons environ 4–5 tok/s sur un M5 Pro 64 Go et 9–11 tok/s sur un M5 Max avec au moins 64 Go. Pour Llama 3.1 8B Q4 (4,9 Go), environ 38–50 contre 75–100 tok/s. Ce sont des estimations tirées de la bande passante et de la taille du fichier, pas des mesures.**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: {
        question: 'Quelle vitesse attendre du M5 Pro et du M5 Max en inférence LLM locale ?',
        answer: 'Estimations, non mesurées : avec un modèle 70B Q4_K_M, environ 4–5 tok/s sur M5 Pro (64 Go) et 9–11 tok/s sur M5 Max (614 GB/s, 64 Go ou plus). Avec un 8B Q4, environ 38–50 et 75–100 tok/s. L\'écart d\'environ 2× vient de la bande passante double utilisée dans le calcul.',
        bullets: [
          '70B Q4_K_M (estimation) : ~4–5 tok/s sur M5 Pro 64 Go, ~9–11 tok/s sur M5 Max',
          '8B Q4 (estimation) : ~38–50 tok/s sur M5 Pro, ~75–100 tok/s sur M5 Max',
          'M5 Pro : 307 GB/s, jusqu\'à 64 Go. M5 Max : 460 ou 614 GB/s, jusqu\'à 128 Go',
          'Les 614 GB/s exigent le GPU 40 cœurs ; la version 32 cœurs offre 460 GB/s et 36 Go',
          'PromptQuorum n\'a pas benchmarké ces puces',
        ],
        updatedDate: '2026-11-28',
      },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Caractéristiques M5 Pro vs M5 Max', anchor: '#specs' },
      { label: 'Vitesse de génération estimée', anchor: '#benchmarks' },
      { label: 'Ce qu\'annonce Apple pour les prompts', anchor: '#prompt-speed' },
      { label: 'Lequel acheter ?', anchor: '#which-buy' },
      { label: 'Mac de bureau : Mac mini et Mac Studio', anchor: '#desktop-availability' },
      { label: 'Mesurez sur votre propre Mac', anchor: '#reproducibility' },
      { label: 'M5 Ultra : prix et vitesse estimée', anchor: '#ultra-projections' },
      { label: 'Méthode des estimations', anchor: '#freshness-note' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Le M5 Pro (307 GB/s) et le M5 Max (jusqu\'à 614 GB/s) diffèrent surtout par la bande passante et la mémoire maximale : pour un modèle 70B Q4_K_M, nous estimons environ 4–5 tok/s sur M5 Pro 64 Go et 9–11 tok/s sur le M5 Max à 614 GB/s, valeurs calculées et non mesurées.',
          },
          {
            type: 'plain-terms',
            text: 'La bande passante mémoire est la vitesse à laquelle une puce lit les données en mémoire. Pour produire chaque token, la puce lit le modèle : la bande passante divisée par la taille du modèle donne donc un plafond approximatif. Les logiciels réels restent généralement en dessous.',
          },
        ],
        items: [
          'M5 Pro : 307 GB/s et jusqu\'à 64 Go. M5 Max : 460 GB/s (GPU 32 cœurs) ou 614 GB/s (GPU 40 cœurs), jusqu\'à 128 Go.',
          'Vitesse estimée sur Llama 3.3 70B Q4_K_M : ~4–5 tok/s sur M5 Pro 64 Go, ~9–11 tok/s sur le M5 Max à 614 GB/s.',
          'Vitesse estimée sur Llama 3.1 8B Q4 : ~38–50 tok/s sur M5 Pro, ~75–100 tok/s sur le M5 Max à 614 GB/s.',
          'Le fichier 70B de 43 Go est juste sur 64 Go, car le contexte et macOS partagent la même mémoire.',
          'Le M5 Pro est l\'option la moins chère pour les petits et moyens modèles ; envisagez le M5 Max si vous utilisez souvent du 70B.',
          'PromptQuorum n\'a mesuré aucune des vitesses de cette page.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro vs M5 Max : les caractéristiques utiles aux LLM',
        tableFormat: true,
        columns: ['Spec', 'M5 Pro', 'M5 Max'],
        rows: [
          { Spec: 'Mémoire unifiée max', 'M5 Pro': '64 Go', 'M5 Max': '128 Go' },
          { Spec: 'Bande passante mémoire', 'M5 Pro': '307 GB/s', 'M5 Max': '460 ou 614 GB/s' },
          { Spec: 'Cœurs GPU', 'M5 Pro': '16 ou 20', 'M5 Max': '32 ou 40' },
          { Spec: 'Neural Engine', 'M5 Pro': '16 cœurs', 'M5 Max': '16 cœurs' },
          { Spec: 'Llama 3.3 70B Q4 (43 Go)', 'M5 Pro': '64 Go seulement, juste', 'M5 Max': '64 Go ou plus requis' },
          { Spec: 'Apple : prompts LLM', 'M5 Pro': 'Jusqu\'à 3,9× vs M4 Pro', 'M5 Max': 'Jusqu\'à 4× vs M4 Max' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'Vitesse de génération estimée par modèle',
        content: '**Ce sont des estimations, pas des benchmarks.** Plafond = bande passante mémoire ÷ taille du fichier du modèle. Le tableau indique environ 60–80 % de ce plafond, la même méthode que notre [guide matériel 70B](/fr/local-llms/70b-models-consumer-hardware). Par exemple, 307 GB/s ÷ 43 Go donne un plafond d\'environ 7 tok/s, et 614 GB/s ÷ 43 Go environ 14 tok/s. Les tailles sont celles des téléchargements de la bibliothèque Ollama. La colonne M5 Max suppose la version à 614 GB/s. Hypothèses : un seul utilisateur, contexte court et modèle entièrement en mémoire.',
        tableFormat: true,
        columns: ['Modèle (taille)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'Modèle (taille)': 'Llama 3.1 8B Q4 (4,9 Go)', 'M5 Pro (307 GB/s)': '~38–50 tok/s', 'M5 Max (614 GB/s)': '~75–100 tok/s' },
          { 'Modèle (taille)': 'Llama 3.1 8B Q8 (8,5 Go)', 'M5 Pro (307 GB/s)': '~22–29 tok/s', 'M5 Max (614 GB/s)': '~43–58 tok/s' },
          { 'Modèle (taille)': 'Llama 3.3 70B Q4_K_M (43 Go)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~9–11 tok/s' },
          { 'Modèle (taille)': 'Llama 3.3 70B Q5_K_M (50 Go)', 'M5 Pro (307 GB/s)': '~4–5 tok/s', 'M5 Max (614 GB/s)': '~7–10 tok/s' },
          { 'Modèle (taille)': 'Ministral 3 8B Q4 (6,0 Go)', 'M5 Pro (307 GB/s)': '~31–41 tok/s', 'M5 Max (614 GB/s)': '~61–82 tok/s' },
          { 'Modèle (taille)': 'Phi-4 14B Q4 (9,1 Go)', 'M5 Pro (307 GB/s)': '~20–27 tok/s', 'M5 Max (614 GB/s)': '~40–54 tok/s' },
        ],
        note: 'Estimations uniquement. La fourchette de 60–80 % est une règle approximative qui peut ne pas tenir avec de petits modèles, un long contexte ou un moteur donné. Le traitement du prompt n\'est pas inclus. Phi-4 est un modèle 14B.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'Traitement des prompts : ce qu\'annonce Apple',
        content: [
          'Apple annonce, d\'après ses propres tests, un traitement des prompts LLM jusqu\'à 3,9× plus rapide sur M5 Pro que sur M4 Pro, et jusqu\'à 4× sur M5 Max par rapport au M4 Max ([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). PromptQuorum n\'a pas vérifié ces annonces.',
          'Le traitement du prompt est distinct de la génération de tokens : ces facteurs ne s\'appliquent pas aux estimations ci-dessus, et cette page ne donne aucun délai avant le premier token.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'Lequel acheter ?',
        numberedItems: [
          {
            title: 'Modèles 8B à 14B au quotidien',
            whyItMatters: 'D\'après l\'estimation, le M5 Pro donne environ 20–50 tok/s avec les fichiers 8B et 14B ci-dessus. Le M5 Max n\'est pas nécessaire pour ces tailles.',
          },
          {
            title: 'Modèles d\'environ 20 Go (par exemple 32B en Q4)',
            whyItMatters: 'Un fichier de 20 Go donne environ 9–12 tok/s sur M5 Pro et 18–25 tok/s sur le M5 Max à 614 GB/s (estimations). Choisissez selon l\'attente que vous acceptez.',
          },
          {
            title: 'Modèles 70B réguliers',
            whyItMatters: 'Envisagez le M5 Max 40 cœurs avec au moins 64 Go : ~9–11 tok/s estimés en 70B Q4_K_M, contre ~4–5 tok/s sur M5 Pro.',
          },
          {
            title: 'Serveur allumé en permanence',
            whyItMatters: 'Le Mac mini M5 Pro est l\'option de bureau compacte. 1 699 $ correspond à la base 24 Go (US). La configuration 64 Go la moins chère (CPU 15 cœurs, SSD 512 Go) coûte 2 699 $, soit la base plus 1 000 $ d\'option mémoire ([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)) ; sur l\'Apple Store français, 3 099 € (au 28 novembre 2026). Les 3 199 $ affichés par Fstoppers le 21 septembre 2026 concernent la version 18 cœurs avec 1 To.',
          },
          {
            title: 'Machine portable',
            whyItMatters: 'Le MacBook Pro propose le M5 Pro jusqu\'à 64 Go ; les 64 Go exigent la version à GPU 20 cœurs.',
          },
          {
            title: 'Plus de marge mémoire',
            whyItMatters: 'Un Mac Studio M5 Max 128 Go (GPU 40 cœurs) laisse plus de place à un fichier 70B Q5_K_M de 50 Go, à un contexte plus long ou à d\'autres modèles.',
          },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'M5 Pro et M5 Max dans les Mac de bureau',
        content: 'Le 25 août 2026, Apple a annoncé le Mac mini M5 Pro et le Mac Studio avec M5 Max ou M5 Ultra, disponibles à partir du 22 septembre 2026. Apple indiquait que la configuration 512 Go du Mac Studio M5 Ultra suivrait fin octobre 2026. Il s\'agit de prix catalogue américains à la date des sources ([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)) ; vérifiez les prix actuels sur l\'Apple Store.',
        tableFormat: true,
        columns: ['Mac de bureau', 'Prix de départ (US)', 'Mémoire max', 'Disponibilité'],
        rows: [
          {
            'Mac de bureau': 'Mac mini M5 Pro',
            'Prix de départ (US)': '1 699 $ (24 Go)',
            'Mémoire max': '64 Go (307 GB/s)',
            'Disponibilité': '22 sept. 2026',
          },
          {
            'Mac de bureau': 'Mac Studio M5 Max',
            'Prix de départ (US)': '2 499 $ (36 Go)',
            'Mémoire max': '128 Go (jusqu\'à 614 GB/s)',
            'Disponibilité': '22 sept. 2026',
          },
          {
            'Mac de bureau': 'Mac Studio M5 Ultra',
            'Prix de départ (US)': '5 499 $ (96 Go)',
            'Mémoire max': '512 Go (jusqu\'à 1,2 TB/s)',
            'Disponibilité': '22 sept. (512 Go plus tard)',
          },
        ],
        note: 'Le Mac Studio M5 Max de base a le GPU 32 cœurs, 460 GB/s et 36 Go, insuffisant pour un fichier 70B Q4_K_M de 43 Go. PromptQuorum n\'a testé aucun M5 de bureau ou portable et ne compare donc pas leur vitesse.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: 'Mesurez sur votre propre Mac',
        content: 'Les estimations ne remplacent pas une mesure. Avec MLX installé (pip install mlx-lm), ce court script affiche la vitesse de traitement du prompt et de génération sur votre Mac. Voir aussi [MLX, Ollama ou llama.cpp sur Mac](/fr/local-llms/mlx-vs-ollama-vs-llama-cpp-mac).',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: 'Les résultats dépendent du fichier du modèle, de la version du moteur, de la longueur du contexte, des réglages d\'énergie et des autres applications ouvertes. Un seul essai court n\'est qu\'un contrôle approximatif.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra : prix et vitesse estimée',
        content: 'Le Mac Studio M5 Ultra démarre à 5 499 $ avec 96 Go (prix US), disponible à partir du 22 septembre 2026. MacRumors indiquait le 28 octobre 2026 que la configuration 512 Go pouvait être commandée à partir de 22 299 $ ([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). Les vitesses ci-dessous sont des estimations calculées selon la même méthode, pas des mesures.',
        columns: ['Spec', 'M5 Ultra'],
        rows: [
          { Spec: 'Mémoire unifiée max', 'M5 Ultra': '512 Go' },
          { Spec: 'Bande passante mémoire', 'M5 Ultra': 'Jusqu\'à 1,2 TB/s' },
          { Spec: 'Cœurs GPU', 'M5 Ultra': 'Jusqu\'à 80' },
          { Spec: '70B Q4_K_M, 43 Go (estimé)', 'M5 Ultra': '~17–21 tok/s' },
          { Spec: '70B FP16, 141 Go (estimé)', 'M5 Ultra': '~5–7 tok/s' },
          { Spec: 'Prix de départ (US)', 'M5 Ultra': '5 499 $ (96 Go)' },
          { Spec: 'Configuration 512 Go', 'M5 Ultra': 'Dès 22 299 $ (28/10/2026)' },
        ],
        note: 'Un fichier FP16 de 141 Go exige une configuration de plus de 96 Go de mémoire.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: 'Méthode des estimations',
        items: [
          '**Méthode :** bande passante mémoire ÷ taille du fichier donne un plafond ; la page en indique environ 60–80 %.',
          '**Bande passante et mémoire :** fiches techniques Apple du [MacBook Pro](https://www.apple.com/macbook-pro/specs/) et du [Mac Studio](https://www.apple.com/mac-studio/specs/), consultées le 28 novembre 2026 ; les 1,2 TB/s du M5 Ultra sont une valeur « jusqu\'à ».',
          '**Tailles des fichiers :** tags de la bibliothèque Ollama pour [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags) et [Phi-4](https://ollama.com/library/phi4/tags), consultés le 28 novembre 2026.',
          '**Tests :** PromptQuorum n\'a pas benchmarké les M5 Pro, M5 Max ou M5 Ultra pour cette page.',
          '**Correction (28 novembre 2026) :** les vitesses ont été remplacées par des estimations calculées. Les chiffres sur les frameworks, la latence, la transcription, la consommation et la température ont été retirés.',
          '**Limites :** la vitesse réelle peut sortir de ces fourchettes. Utilisez-les uniquement pour planifier.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'Pourquoi l\'estimation du M5 Max est-elle environ 2× celle du M5 Pro ?',
            a: 'L\'estimation repose sur la bande passante mémoire, et le M5 Max 40 cœurs offre 614 GB/s contre 307 GB/s pour le M5 Pro. Le 2× vient donc de la méthode ; ce n\'est pas un gain mesuré et les résultats réels peuvent différer. Le M5 Max 32 cœurs offre 460 GB/s, environ 1,5× le M5 Pro.',
          },
          {
            q: 'Une RTX 4090 exécute-t-elle ces modèles plus vite ?',
            a: 'Son plafond lié à la bande passante est plus élevé (1 008 GB/s contre jusqu\'à 614 GB/s) pour les modèles qui tiennent dans ses 24 Go de VRAM. Le fichier de 43 Go de Llama 3.3 70B Q4_K_M ne tient pas sur une seule RTX 4090. Cette page ne propose aucune comparaison mesurée.',
          },
          {
            q: 'Le M5 Pro suffit-il, ou faut-il le M5 Max ?',
            a: 'Le M5 Pro peut suffire pour les petits et moyens modèles : pour un fichier de 20 Go, nous estimons environ 9–12 tok/s. Si vous utilisez souvent du 70B ou [plusieurs modèles ensemble](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text), le M5 Max 40 cœurs avec au moins 64 Go offre plus de marge.',
          },
          {
            q: 'De combien un M5 Ultra pourrait-il être plus rapide ?',
            a: 'Apple annonce jusqu\'à 1,2 TB/s, environ deux fois les 614 GB/s du M5 Max le plus rapide : le plafond lié à la bande passante est donc environ doublé. Pour 70B Q4_K_M, nous estimons ~17–21 tok/s. Ce n\'est pas une mesure.',
          },
          {
            q: 'PromptQuorum a-t-il benchmarké ces puces ?',
            a: 'Non. Les vitesses de cette page sont calculées à partir de la bande passante publiée et de la taille des fichiers. Pour des chiffres réels sur votre Mac, lancez le script MLX ci-dessus et ne comparez que des résultats obtenus avec le même fichier, le même moteur et les mêmes réglages.',
          },
          {
            q: 'Dois-je respecter le RGPD pour une inférence locale sur M5 ?',
            a: 'Oui : le RGPD s\'applique dès que vous traitez des données personnelles, y compris en local. L\'inférence locale peut éviter d\'envoyer des données à un fournisseur d\'IA externe, mais ne garantit pas à elle seule la conformité : stockage, accès, durée de conservation et sécurité restent à traiter. La CNIL publie des recommandations sur l\'IA ; consultez votre DPD. Ceci n\'est pas un conseil juridique.',
          },
        ],
      },
    },
    ctaText: 'Vous faites tourner des modèles sur un M5 Pro ou M5 Max ? Avec PromptQuorum, comparez en un seul envoi les réponses de votre LLM local à celles de modèles cloud et voyez ce qu\'elles valent sur vos propres tâches.',
  },
  ja: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: 'ローカルLLM向けM5 ProとM5 Maxの比較 2026：仕様と推定速度',
    seoTitle: 'M5 Pro vs M5 Max 2026：LLM推定速度比較',
    intro: '公開されている仕様をもとに、2026年のローカルLLM用途でM5 ProとM5 Maxを比較します。このページのM5の速度はすべて、メモリ帯域幅とモデルのファイルサイズから計算した推定値で、ベンチマークではありません。PromptQuorumはこれらのチップを測定していません。Llama 3.1 8B、Llama 3.3 70B、Ministral 3 8B、Phi-4の推定値、メモリの上限、デスクトップ版の価格、モデルサイズ別の選び方を解説します。',
    metaDescription: 'ローカルLLM向けM5 ProとM5 Maxの比較。帯域幅は307 GB/s対最大614 GB/s。70B Q4の推定速度は約4〜5対約9〜11 tok/s。仕様、メモリ上限、選び方を解説。',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-ja.webp',
    twitterDescription: 'ローカルAI向けM5 Pro対M5 Max：帯域幅、メモリ上限、モデルサイズ別の推定tok/s（実測ではありません）。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: '購入前に仕様ベースの推定速度を知りたいM5 Pro/Maxのユーザーと購入検討者。',
    readTime: '6分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max LLMベンチマーク',
    targetKeywords: ['M5 Proベンチマーク', 'M5 Maxベンチマーク', 'tok/s比較', 'Apple Silicon LLM性能'],
    leadAnswerBlock: '**M5 Proのメモリ帯域幅は307 GB/s、40コアGPUのM5 Maxは614 GB/sです。Llama 3.3 70B Q4_K_M（43 GB）の推定速度は、64 GBのM5 Proで約4〜5 tok/s、64 GB以上のM5 Maxで約9〜11 tok/sです。Llama 3.1 8B Q4（4.9 GB）では約38〜50 tok/s対75〜100 tok/sです。帯域幅とファイルサイズからの推定値であり、実測値ではありません。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: {
        question: 'ローカルLLM推論でM5 ProとM5 Maxはどのくらいの速度ですか？',
        answer: '実測ではなく推定値です。70B Q4_K_Mモデルでは、M5 Pro（64 GB）で約4〜5 tok/s、M5 Max（614 GB/s、64 GB以上）で約9〜11 tok/sです。8B Q4モデルでは約38〜50と75〜100 tok/sです。約2倍の差は、計算に使う帯域幅が2倍であることから生じます。',
        bullets: [
          '70B Q4_K_M（推定）：M5 Pro 64 GBで約4〜5 tok/s、M5 Maxで約9〜11 tok/s',
          '8B Q4（推定）：M5 Proで約38〜50 tok/s、M5 Maxで約75〜100 tok/s',
          'M5 Pro：307 GB/s、最大64 GB。M5 Max：460または614 GB/s、最大128 GB',
          '614 GB/sは40コアGPU版のみ。32コア版は460 GB/sで36 GB',
          'PromptQuorumはこれらのチップをベンチマークしていません',
        ],
        updatedDate: '2026-11-28',
      },
      zh: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'M5 ProとM5 Maxの仕様', anchor: '#specs' },
      { label: '生成速度の推定値', anchor: '#benchmarks' },
      { label: 'プロンプト処理に関するAppleの発表', anchor: '#prompt-speed' },
      { label: 'どちらを選ぶべきか', anchor: '#which-buy' },
      { label: 'デスクトップMac：Mac miniとMac Studio', anchor: '#desktop-availability' },
      { label: '自分のMacで測定する', anchor: '#reproducibility' },
      { label: 'M5 Ultra：価格と推定速度', anchor: '#ultra-projections' },
      { label: '推定値の算出方法', anchor: '#freshness-note' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro（307 GB/s）とM5 Max（最大614 GB/s）の主な違いはメモリ帯域幅と最大メモリです。70B Q4_K_Mモデルの推定速度は、64 GBのM5 Proで約4〜5 tok/s、614 GB/sのM5 Maxで約9〜11 tok/sです（実測ではなく計算値）。',
          },
          { type: 'plain-terms', text: 'メモリ帯域幅は、チップがメモリからデータを読み出す速さです。トークンを1つ生成するたびにモデルを読み出すため、帯域幅をモデルサイズで割ると速度のおおよその上限になります。実際のソフトウェアは通常それを下回ります。' },
        ],
        items: [
          'M5 Pro：307 GB/s、最大64 GB。M5 Max：460 GB/s（32コアGPU）または614 GB/s（40コアGPU）、最大128 GB。',
          'Llama 3.3 70B Q4_K_Mの推定速度：M5 Pro 64 GBで約4〜5 tok/s、614 GB/sのM5 Maxで約9〜11 tok/s。',
          'Llama 3.1 8B Q4の推定速度：M5 Proで約38〜50 tok/s、614 GB/sのM5 Maxで約75〜100 tok/s。',
          '43 GBの70Bファイルは、コンテキストとmacOSがメモリを共有するため、64 GBでは余裕がありません。',
          '小〜中規模モデルにはM5 Proがより低価格な選択肢です。70Bをよく使うならM5 Maxを検討してください。',
          'このページの速度はいずれもPromptQuorumが測定したものではありません。',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 ProとM5 Max：LLMに関係する仕様',
        tableFormat: true,
        columns: ['スペック', 'M5 Pro', 'M5 Max'],
        rows: [
          { 'スペック': '最大ユニファイドメモリ', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { 'スペック': 'メモリ帯域幅', 'M5 Pro': '307 GB/s', 'M5 Max': '460または614 GB/s' },
          { 'スペック': 'GPUコア数', 'M5 Pro': '16または20', 'M5 Max': '32または40' },
          { 'スペック': 'Neural Engine', 'M5 Pro': '16コア', 'M5 Max': '16コア' },
          { 'スペック': 'Llama 3.3 70B Q4（43 GB）', 'M5 Pro': '64 GBのみ、余裕は少ない', 'M5 Max': '64 GB以上が必要' },
          { 'スペック': 'AppleのLLMプロンプト発表値', 'M5 Pro': 'M4 Pro比で最大3.9倍', 'M5 Max': 'M4 Max比で最大4倍' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: 'モデル別の生成速度（推定）',
        content: '**以下は推定値で、ベンチマークではありません。** 上限＝メモリ帯域幅÷モデルのファイルサイズ。表はこの上限の約60〜80%を示します。[70Bハードウェアガイド](/ja/local-llms/70b-models-consumer-hardware)と同じ方法です。たとえば307 GB/s÷43 GBの上限は約7 tok/s、614 GB/s÷43 GBは約14 tok/sです。ファイルサイズはOllamaライブラリのダウンロードサイズです。M5 Maxの列は614 GB/s版を想定しています。前提は、利用者1人、短いコンテキスト、モデル全体がメモリに収まることです。',
        tableFormat: true,
        columns: ['モデル（サイズ）', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { 'モデル（サイズ）': 'Llama 3.1 8B Q4 (4.9 GB)', 'M5 Pro (307 GB/s)': '約38〜50 tok/s', 'M5 Max (614 GB/s)': '約75〜100 tok/s' },
          { 'モデル（サイズ）': 'Llama 3.1 8B Q8 (8.5 GB)', 'M5 Pro (307 GB/s)': '約22〜29 tok/s', 'M5 Max (614 GB/s)': '約43〜58 tok/s' },
          { 'モデル（サイズ）': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '約4〜5 tok/s', 'M5 Max (614 GB/s)': '約9〜11 tok/s' },
          { 'モデル（サイズ）': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '約4〜5 tok/s', 'M5 Max (614 GB/s)': '約7〜10 tok/s' },
          { 'モデル（サイズ）': 'Ministral 3 8B Q4 (6.0 GB)', 'M5 Pro (307 GB/s)': '約31〜41 tok/s', 'M5 Max (614 GB/s)': '約61〜82 tok/s' },
          { 'モデル（サイズ）': 'Phi-4 14B Q4 (9.1 GB)', 'M5 Pro (307 GB/s)': '約20〜27 tok/s', 'M5 Max (614 GB/s)': '約40〜54 tok/s' },
        ],
        note: '推定値のみです。60〜80%という範囲は目安で、小型モデル、長いコンテキスト、特定のランタイムでは当てはまらない場合があります。プロンプト処理は含みません。Phi-4は14Bモデルです。',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: 'プロンプト処理速度：Appleの発表',
        content: [
          'Appleは自社テストに基づき、LLMのプロンプト処理がM5 ProはM4 Pro比で最大3.9倍、M5 MaxはM4 Max比で最大4倍速いと発表しています（[Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)）。PromptQuorumはこの発表値を検証していません。',
          'プロンプト処理はトークン生成とは別の工程のため、これらの倍率は上記のtok/s推定値には当てはまりません。また、このページは最初のトークンまでの時間を示しません。',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: 'どちらを選ぶべきか',
        numberedItems: [
          { title: '8B〜14Bモデルを日常的に使う', whyItMatters: '推定では、上記の8B・14BファイルでM5 Proは約20〜50 tok/sです。このサイズならM5 Maxは必須ではありません。' },
          { title: '約20 GBのモデル（例：Q4の32B）', whyItMatters: '20 GBのファイルでは、M5 Proで約9〜12 tok/s、614 GB/sのM5 Maxで約18〜25 tok/s（推定）です。許容できる待ち時間で選んでください。' },
          { title: '70Bモデルを定期的に使う', whyItMatters: '64 GB以上の40コアM5 Maxを検討してください。70B Q4_K_Mの推定は約9〜11 tok/s、M5 Proは約4〜5 tok/sです。' },
          {
            title: '常時稼働サーバー',
            whyItMatters: 'Mac mini M5 Proはコンパクトなデスクトップの選択肢です。$1,699は24 GBの基本構成の米国価格です。64 GBの最安構成（15コアCPU、512 GB SSD）は$2,699で、基本価格にメモリ追加の$1,000を加えた額です（[Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)）。日本のApple Storeでは¥479,800です（2026年11月28日時点）。Fstoppersが2026年9月21日に掲載した$3,199は18コアCPU・1 TB版の価格です。',
          },
          { title: '持ち運べるマシン', whyItMatters: 'MacBook ProではM5 Proを最大64 GBで構成できます。64 GBには20コアGPU版が必要です。' },
          { title: 'メモリに余裕がほしい', whyItMatters: '128 GBのMac Studio M5 Max（40コアGPU）なら、50 GBの70B Q5_K_Mファイル、より長いコンテキスト、追加モデルに余裕ができます。' },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: 'デスクトップMacのM5 ProとM5 Max',
        content: '2026年8月25日、AppleはMac mini M5 Proと、M5 MaxまたはM5 Ultraを搭載するMac Studioを発表し、2026年9月22日から提供するとしました。Mac Studio M5 Ultraの512 GB構成は2026年10月下旬の予定とされていました。価格は各出典の時点の米国定価です（[9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/)、[MacRumors](https://www.macrumors.com/roundup/mac-mini/)）。最新の価格はAppleのストアで確認してください。',
        tableFormat: true,
        columns: ['デスクトップMac', '開始価格（米国）', '最大メモリ', '提供開始'],
        rows: [
          { 'デスクトップMac': 'Mac mini M5 Pro', '開始価格（米国）': '$1,699（24 GB）', '最大メモリ': '64 GB（307 GB/s）', '提供開始': '2026年9月22日' },
          { 'デスクトップMac': 'Mac Studio M5 Max', '開始価格（米国）': '$2,499（36 GB）', '最大メモリ': '128 GB（最大614 GB/s）', '提供開始': '2026年9月22日' },
          { 'デスクトップMac': 'Mac Studio M5 Ultra', '開始価格（米国）': '$5,499（96 GB）', '最大メモリ': '512 GB（最大1.2 TB/s）', '提供開始': '9月22日（512 GBは後日）' },
        ],
        note: 'Mac Studio M5 Maxの基本モデルは32コアGPU、460 GB/s、36 GBで、43 GBの70B Q4_K_Mファイルには足りません。PromptQuorumはデスクトップ版もノート版のM5もテストしていないため、速度は比較しません。',
      },
      reproducibility: {
        id: 'reproducibility',
        title: '自分のMacで測定する',
        content: '推定値は実測の代わりにはなりません。MLXを導入（pip install mlx-lm）すれば、次の短いスクリプトで自分のMacのプロンプト処理速度と生成速度が表示されます。[MacでのMLX・Ollama・llama.cpp比較](/ja/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)も参照してください。',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: '結果はモデルファイル、ランタイムのバージョン、コンテキスト長、電源設定、実行中のほかのアプリによって変わります。短い1回の実行は目安にすぎません。',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra：価格と推定速度',
        content: 'Mac Studio M5 Ultraは96 GB構成で$5,499から（米国価格）、2026年9月22日からの提供です。MacRumorsは2026年10月28日、512 GB構成が$22,299から注文できると報じました（[MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)）。以下の速度は同じ方法で計算した推定値で、実測値ではありません。',
        columns: ['スペック', 'M5 Ultra'],
        rows: [
          { 'スペック': '最大ユニファイドメモリ', 'M5 Ultra': '512 GB' },
          { 'スペック': 'メモリ帯域幅', 'M5 Ultra': '最大1.2 TB/s' },
          { 'スペック': 'GPUコア数', 'M5 Ultra': '最大80' },
          { 'スペック': '70B Q4_K_M、43 GB（推定）', 'M5 Ultra': '約17〜21 tok/s' },
          { 'スペック': '70B FP16、141 GB（推定）', 'M5 Ultra': '約5〜7 tok/s' },
          { 'スペック': '開始価格（米国）', 'M5 Ultra': '$5,499（96 GB）' },
          { 'スペック': '512 GB構成', 'M5 Ultra': '$22,299から（2026年10月28日）' },
        ],
        note: '141 GBのFP16ファイルには、96 GBを超えるメモリ構成が必要です。',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: '推定値の算出方法',
        items: [
          '**方法：** メモリ帯域幅÷モデルのファイルサイズで上限を求め、その約60〜80%を掲載しています。',
          '**帯域幅とメモリ：** Appleの[MacBook Pro](https://www.apple.com/macbook-pro/specs/)と[Mac Studio](https://www.apple.com/mac-studio/specs/)の仕様ページ（2026年11月28日確認）。M5 Ultraの1.2 TB/sは「最大」の値です。',
          '**ファイルサイズ：** Ollamaライブラリの[Llama 3.1](https://ollama.com/library/llama3.1/tags)、[Llama 3.3](https://ollama.com/library/llama3.3/tags)、[Ministral 3](https://ollama.com/library/ministral-3/tags)、[Phi-4](https://ollama.com/library/phi4/tags)のタグ（2026年11月28日確認）。',
          '**テスト：** PromptQuorumは、このページのためにM5 Pro、M5 Max、M5 Ultraのベンチマークを行っていません。',
          '**訂正（2026年11月28日）：** 速度の数値は計算による推定値に置き換えました。フレームワーク、レイテンシ、文字起こし、消費電力、温度の数値は削除しました。',
          '**限界：** 実際の速度はこの範囲から外れることがあります。計画の目安として使ってください。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'M5 Maxの推定値がM5 Proの約2倍なのはなぜですか？',
            a: '推定はメモリ帯域幅に基づき、40コアのM5 Maxは614 GB/s、M5 Proは307 GB/sだからです。2倍は計算方法から出る値で、実測した高速化ではなく、実際の結果は異なる場合があります。32コアのM5 Maxは460 GB/sで、M5 Proの約1.5倍です。',
          },
          {
            q: 'RTX 4090ならこれらのモデルをより速く実行できますか？',
            a: '24 GBのVRAMに収まるモデルでは、帯域幅による上限が高くなります（1,008 GB/s対最大614 GB/s）。43 GBのLlama 3.3 70B Q4_K_Mファイルは1枚のRTX 4090に収まりません。このページに実測の比較はありません。',
          },
          {
            q: 'M5 Proで十分ですか、それともM5 Maxを買うべきですか？',
            a: '小〜中規模モデルならM5 Proで足りる可能性があります。20 GBのファイルの推定は約9〜12 tok/sです。70Bをよく使う、または[複数のモデルを同時に使う](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text)場合は、64 GB以上の40コアM5 Maxのほうが余裕があります。',
          },
          {
            q: 'M5 Ultraはどのくらい速くなりそうですか？',
            a: 'Appleの公表値は最大1.2 TB/sで、最上位M5 Maxの614 GB/sの約2倍のため、帯域幅による上限も約2倍です。70B Q4_K_Mの推定は約17〜21 tok/sで、実測値ではありません。',
          },
          {
            q: 'PromptQuorumはこれらのチップをベンチマークしましたか？',
            a: 'いいえ。このページの速度は、公開された帯域幅とファイルサイズからの計算値です。自分のMacの実際の値は上記のMLXスクリプトで確認し、同じモデルファイル、ランタイム、設定の結果同士を比較してください。',
          },
          {
            q: 'M5を「AI事業者ガイドライン」のもとで使う場合の注意点は？',
            a: '経済産業省と総務省は「AI事業者ガイドライン」を公開しています。ローカル推論では外部のAIサービスへのデータ送信を避けられる場合がありますが、それだけでガイドラインや法令への適合が保証されるわけではありません。用途ごとに自社で確認してください。本回答は法的助言ではありません。',
          },
        ],
      },
    },
    ctaText: 'M5 ProやM5 Maxでモデルを動かしていますか？PromptQuorumなら、ローカルLLMの回答とクラウドモデルの回答を一度の送信で比較し、自分の作業でどこまで使えるかを確かめられます。',
  },
  zh: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '本地LLM用M5 Pro与M5 Max对比 2026：规格与速度估算',
    seoTitle: 'M5 Pro对比M5 Max 2026：LLM速度估算',
    intro: '基于公开规格，比较2026年用于本地LLM的M5 Pro和M5 Max。本页所有M5速度均是根据内存带宽和模型文件大小计算的估算值，并非基准测试：PromptQuorum没有实测过这些芯片。内容包括Llama 3.1 8B、Llama 3.3 70B、Ministral 3 8B和Phi-4的估算值、内存上限、桌面机型价格，以及不同模型大小该选哪款芯片。',
    metaDescription: '本地LLM用M5 Pro与M5 Max对比：带宽307 GB/s对最高614 GB/s。70B Q4估算速度约4–5对约9–11 tok/s。规格、内存上限与选购建议。',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-zh.webp',
    twitterDescription: '本地AI用M5 Pro对比M5 Max：带宽、内存上限，以及按模型大小估算（非实测）的tok/s。',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: '想在购买前了解基于规格的速度估算的M5 Pro/Max用户和潜在买家。',
    readTime: '阅读约6分钟',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max LLM基准',
    targetKeywords: ['M5 Pro基准', 'M5 Max基准', 'tok/s对比', 'Apple Silicon LLM性能'],
    leadAnswerBlock: '**M5 Pro的内存带宽为307 GB/s，40核GPU的M5 Max为614 GB/s。对于Llama 3.3 70B Q4_K_M（43 GB），我们估算64 GB的M5 Pro约4–5 tok/s，64 GB及以上的M5 Max约9–11 tok/s。对于Llama 3.1 8B Q4（4.9 GB），约为38–50对75–100 tok/s。这些是根据带宽和文件大小得出的估算值，并非实测。**',
    quickAnswerTop: {
      en: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      de: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      fr: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      ja: { question: '', answer: '', bullets: [], updatedDate: '2026-05-15' },
      zh: {
        question: 'M5 Pro与M5 Max运行本地LLM推理有多快？',
        answer: '以下为估算而非实测：运行70B Q4_K_M模型时，M5 Pro（64 GB）约4–5 tok/s，M5 Max（614 GB/s，64 GB及以上）约9–11 tok/s；运行8B Q4模型时分别约38–50和75–100 tok/s。约2倍的差距来自计算中所用的两倍内存带宽。',
        bullets: [
          '70B Q4_K_M（估算）：M5 Pro 64 GB约4–5 tok/s，M5 Max约9–11 tok/s',
          '8B Q4（估算）：M5 Pro约38–50 tok/s，M5 Max约75–100 tok/s',
          'M5 Pro：307 GB/s，最高64 GB。M5 Max：460或614 GB/s，最高128 GB',
          '614 GB/s需要40核GPU版本；32核版本为460 GB/s、36 GB',
          'PromptQuorum没有对这些芯片做过基准测试',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: 'M5 Pro与M5 Max规格', anchor: '#specs' },
      { label: '生成速度估算', anchor: '#benchmarks' },
      { label: '苹果关于提示处理的说法', anchor: '#prompt-speed' },
      { label: '应该买哪一款？', anchor: '#which-buy' },
      { label: '桌面版Mac：Mac mini与Mac Studio', anchor: '#desktop-availability' },
      { label: '在你自己的Mac上实测', anchor: '#reproducibility' },
      { label: 'M5 Ultra：价格与估算速度', anchor: '#ultra-projections' },
      { label: '估算方法说明', anchor: '#freshness-note' },
      { label: '常见问题', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro（307 GB/s）与M5 Max（最高614 GB/s）的主要差别在内存带宽和最大内存：运行70B Q4_K_M模型时，我们估算64 GB的M5 Pro约4–5 tok/s，614 GB/s的M5 Max约9–11 tok/s，均为计算值而非实测。',
          },
          { type: 'plain-terms', text: '内存带宽是指芯片从内存读取数据的速度。每生成一个token都要读取模型，因此带宽除以模型大小可以得到速度的大致上限。实际软件通常达不到这个上限。' },
        ],
        items: [
          'M5 Pro：307 GB/s，最高64 GB。M5 Max：460 GB/s（32核GPU）或614 GB/s（40核GPU），最高128 GB。',
          'Llama 3.3 70B Q4_K_M估算速度：M5 Pro 64 GB约4–5 tok/s，614 GB/s的M5 Max约9–11 tok/s。',
          'Llama 3.1 8B Q4估算速度：M5 Pro约38–50 tok/s，614 GB/s的M5 Max约75–100 tok/s。',
          '43 GB的70B文件在64 GB上比较紧张，因为上下文和macOS共用这部分内存。',
          '对中小模型，M5 Pro是价格更低的选择；如果经常运行70B，可考虑M5 Max。',
          '本页没有任何速度由PromptQuorum实测。',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro与M5 Max：与LLM相关的规格',
        tableFormat: true,
        columns: ['规格', 'M5 Pro', 'M5 Max'],
        rows: [
          { '规格': '最大统一内存', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { '规格': '内存带宽', 'M5 Pro': '307 GB/s', 'M5 Max': '460或614 GB/s' },
          { '规格': 'GPU核心', 'M5 Pro': '16或20', 'M5 Max': '32或40' },
          { '规格': 'Neural Engine', 'M5 Pro': '16核', 'M5 Max': '16核' },
          { '规格': 'Llama 3.3 70B Q4（43 GB）', 'M5 Pro': '仅64 GB版，余量小', 'M5 Max': '需64 GB及以上' },
          { '规格': '苹果的LLM提示处理说法', 'M5 Pro': '较M4 Pro最高3.9倍', 'M5 Max': '较M4 Max最高4倍' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '各模型生成速度估算',
        content: '**以下是估算值，不是基准测试。** 上限 = 内存带宽 ÷ 模型文件大小。表中给出该上限的约60–80%，与我们的[70B硬件指南](/zh/local-llms/70b-models-consumer-hardware)方法相同。例如，307 GB/s ÷ 43 GB的上限约为7 tok/s，614 GB/s ÷ 43 GB约为14 tok/s。文件大小取自Ollama模型库的下载大小。M5 Max一列按614 GB/s版本计算。前提是单用户、短上下文、模型完全装入内存。',
        tableFormat: true,
        columns: ['模型（文件大小）', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { '模型（文件大小）': 'Llama 3.1 8B Q4 (4.9 GB)', 'M5 Pro (307 GB/s)': '约38–50 tok/s', 'M5 Max (614 GB/s)': '约75–100 tok/s' },
          { '模型（文件大小）': 'Llama 3.1 8B Q8 (8.5 GB)', 'M5 Pro (307 GB/s)': '约22–29 tok/s', 'M5 Max (614 GB/s)': '约43–58 tok/s' },
          { '模型（文件大小）': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '约4–5 tok/s', 'M5 Max (614 GB/s)': '约9–11 tok/s' },
          { '模型（文件大小）': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '约4–5 tok/s', 'M5 Max (614 GB/s)': '约7–10 tok/s' },
          { '模型（文件大小）': 'Ministral 3 8B Q4 (6.0 GB)', 'M5 Pro (307 GB/s)': '约31–41 tok/s', 'M5 Max (614 GB/s)': '约61–82 tok/s' },
          { '模型（文件大小）': 'Phi-4 14B Q4 (9.1 GB)', 'M5 Pro (307 GB/s)': '约20–27 tok/s', 'M5 Max (614 GB/s)': '约40–54 tok/s' },
        ],
        note: '仅为估算。60–80%是经验范围，对小模型、长上下文或某些运行环境可能不适用。不含提示处理。Phi-4是14B模型。',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: '提示处理速度：苹果的说法',
        content: [
          '苹果依据自家测试称，LLM提示处理速度M5 Pro较M4 Pro最高快3.9倍，M5 Max较M4 Max最高快4倍（[Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)）。PromptQuorum未验证这些说法。',
          '提示处理与token生成是两个环节，因此这些倍数不适用于上面的tok/s估算值，本页也不给出首个token延迟数据。',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: '应该买哪一款？',
        numberedItems: [
          { title: '日常使用8B至14B模型', whyItMatters: '按估算，M5 Pro运行上述8B和14B文件约为20–50 tok/s。这个大小并不一定需要M5 Max。' },
          { title: '约20 GB的模型（如Q4的32B）', whyItMatters: '20 GB文件在M5 Pro上约9–12 tok/s，在614 GB/s的M5 Max上约18–25 tok/s（估算）。按你能接受的等待时间选择。' },
          { title: '经常运行70B模型', whyItMatters: '可考虑64 GB及以上的40核M5 Max：70B Q4_K_M估算约9–11 tok/s，M5 Pro约4–5 tok/s。' },
          {
            title: '常开服务器',
            whyItMatters: 'Mac mini M5 Pro是紧凑的桌面选择。$1,699是24 GB基础版的美国价格。最便宜的64 GB配置（15核CPU、512 GB SSD）为$2,699，即基础价加$1,000内存升级费（[Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)）。Fstoppers于2026年9月21日列出的$3,199是18核CPU、1 TB版本。',
          },
          { title: '便携设备', whyItMatters: 'MacBook Pro可配M5 Pro，最高64 GB；64 GB需要20核GPU版本。' },
          { title: '更多内存余量', whyItMatters: '128 GB的Mac Studio M5 Max（40核GPU）能为50 GB的70B Q5_K_M文件、更长上下文或其他模型留出更多空间。' },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: '桌面版Mac中的M5 Pro与M5 Max',
        content: '2026年8月25日，苹果发布了Mac mini M5 Pro以及搭载M5 Max或M5 Ultra的Mac Studio，自2026年9月22日起供货。苹果当时表示，Mac Studio M5 Ultra的512 GB配置将于2026年10月下旬推出。价格为各来源发布时的美国官方价（[9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/)、[MacRumors](https://www.macrumors.com/roundup/mac-mini/)）；当前价格请查看苹果商店。',
        tableFormat: true,
        columns: ['桌面版Mac', '起售价（美国）', '最大内存', '供货时间'],
        rows: [
          { '桌面版Mac': 'Mac mini M5 Pro', '起售价（美国）': '$1,699（24 GB）', '最大内存': '64 GB（307 GB/s）', '供货时间': '2026年9月22日' },
          { '桌面版Mac': 'Mac Studio M5 Max', '起售价（美国）': '$2,499（36 GB）', '最大内存': '128 GB（最高614 GB/s）', '供货时间': '2026年9月22日' },
          { '桌面版Mac': 'Mac Studio M5 Ultra', '起售价（美国）': '$5,499（96 GB）', '最大内存': '512 GB（最高1.2 TB/s）', '供货时间': '9月22日（512 GB稍后）' },
        ],
        note: 'Mac Studio M5 Max基础款为32核GPU、460 GB/s、36 GB，装不下43 GB的70B Q4_K_M文件。PromptQuorum没有测试过任何桌面版或笔记本版M5，因此不比较它们的速度。',
      },
      reproducibility: {
        id: 'reproducibility',
        title: '在你自己的Mac上实测',
        content: '估算不能代替实测。安装MLX（pip install mlx-lm）后，下面的简短脚本会输出你这台Mac的提示处理和生成速度。另见[Mac上的MLX、Ollama与llama.cpp对比](/zh/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)。',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: '结果取决于模型文件、运行环境版本、上下文长度、电源设置和其他正在运行的应用。单次短测试只能作粗略参考。',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra：价格与估算速度',
        content: 'Mac Studio M5 Ultra的96 GB配置起售价$5,499（美国价格），自2026年9月22日起供货。MacRumors于2026年10月28日报道，512 GB配置可下单，起价$22,299（[MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)）。下列速度是用同一方法计算的估算值，并非实测。',
        columns: ['规格', 'M5 Ultra'],
        rows: [
          { '规格': '最大统一内存', 'M5 Ultra': '512 GB' },
          { '规格': '内存带宽', 'M5 Ultra': '最高1.2 TB/s' },
          { '规格': 'GPU核心', 'M5 Ultra': '最多80' },
          { '规格': '70B Q4_K_M，43 GB（估算）', 'M5 Ultra': '约17–21 tok/s' },
          { '规格': '70B FP16，141 GB（估算）', 'M5 Ultra': '约5–7 tok/s' },
          { '规格': '起售价（美国）', 'M5 Ultra': '$5,499（96 GB）' },
          { '规格': '512 GB配置', 'M5 Ultra': '$22,299起（2026年10月28日）' },
        ],
        note: '141 GB的FP16文件需要内存超过96 GB的配置。',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: '估算方法说明',
        items: [
          '**方法：** 内存带宽 ÷ 模型文件大小得出上限，本页给出其约60–80%。',
          '**带宽与内存：** 苹果[MacBook Pro](https://www.apple.com/macbook-pro/specs/)和[Mac Studio](https://www.apple.com/mac-studio/specs/)规格页面，2026年11月28日核对；M5 Ultra的1.2 TB/s为“最高”值。',
          '**文件大小：** Ollama模型库中[Llama 3.1](https://ollama.com/library/llama3.1/tags)、[Llama 3.3](https://ollama.com/library/llama3.3/tags)、[Ministral 3](https://ollama.com/library/ministral-3/tags)和[Phi-4](https://ollama.com/library/phi4/tags)的标签，2026年11月28日核对。',
          '**测试情况：** PromptQuorum没有为本页对M5 Pro、M5 Max或M5 Ultra做基准测试。',
          '**更正（2026年11月28日）：** 速度数据已改为计算得出的估算值；框架、延迟、转录、功耗和温度数据已删除。',
          '**局限：** 实际速度可能超出这些范围，仅供规划参考。',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: '为什么M5 Max的估算值约为M5 Pro的2倍？',
            a: '估算以内存带宽为基础，40核M5 Max为614 GB/s，M5 Pro为307 GB/s。所以2倍来自计算方法，并非实测提升，实际结果可能不同。32核M5 Max为460 GB/s，约为M5 Pro的1.5倍。',
          },
          { q: 'RTX 4090运行这些模型会更快吗？', a: '对能装进24 GB显存的模型，它的带宽上限更高（1,008 GB/s对最高614 GB/s）。43 GB的Llama 3.3 70B Q4_K_M文件装不进单张RTX 4090。本页没有实测对比。' },
          {
            q: 'M5 Pro够用吗，还是应该买M5 Max？',
            a: '对中小模型，M5 Pro可能够用：20 GB文件我们估算约9–12 tok/s。如果经常运行70B或[同时运行多个模型](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text)，64 GB及以上的40核M5 Max余量更大。',
          },
          { q: 'M5 Ultra可能快多少？', a: '苹果标称最高1.2 TB/s，约为顶配M5 Max的614 GB/s的两倍，因此带宽上限也约为两倍。70B Q4_K_M估算约17–21 tok/s，这不是实测值。' },
          { q: 'PromptQuorum对这些芯片做过基准测试吗？', a: '没有。本页速度是根据公开带宽和文件大小计算的。要得到你自己Mac上的实际数值，请运行上面的MLX脚本，并且只比较模型文件、运行环境和设置相同的结果。' },
          {
            q: '在中国使用本地LLM推理是否需要考虑数据安全法规？',
            a: '需要。《数据安全法》和《个人信息保护法》(PIPL)对数据处理提出要求。本地推理可以避免把数据发送给外部AI服务商，但本身并不保证合规：存储、访问控制，以及备份或联网工具可能涉及的跨境传输等仍需单独评估。金融、医疗、政务等行业还可能有额外规定。本回答不构成法律意见。',
          },
        ],
      },
    },
    ctaText: '正在M5 Pro或M5 Max上运行模型？用PromptQuorum一次发送，即可把本地LLM的回答与云端模型对比，看看它们在你自己任务上的表现。',
  },
  ko: {
    freshness_tier: 'annual',
    specific_year: 2026,
    designSkin: 'hub',
    theme: 'Hardware & Performance',
    title: '로컬 LLM용 M5 Pro 대 M5 Max 2026: 사양과 예상 속도',
    seoTitle: 'M5 Pro vs M5 Max 2026: LLM 예상 속도 비교',
    intro: '공개된 사양을 바탕으로 2026년 로컬 LLM 용도의 M5 Pro와 M5 Max를 비교합니다. 이 페이지의 모든 M5 속도는 메모리 대역폭과 모델 파일 크기로 계산한 추정값이며 벤치마크가 아닙니다. PromptQuorum은 이 칩들을 측정하지 않았습니다. Llama 3.1 8B, Llama 3.3 70B, Ministral 3 8B, Phi-4의 추정값, 메모리 한계, 데스크톱 가격, 모델 크기별 선택 기준을 담았습니다.',
    metaDescription: '로컬 LLM용 M5 Pro와 M5 Max 비교: 대역폭 307 GB/s 대 최대 614 GB/s. 70B Q4 예상 속도 약 4–5 대 약 9–11 tok/s. 사양, 메모리 한계, 선택 기준.',
    heroImage: '/images/m5-pro-max-llm-benchmarks-2026-tokens-per-sec-hero-ko.webp',
    twitterDescription: '로컬 AI용 M5 Pro 대 M5 Max: 대역폭, 메모리 한계, 모델 크기별 추정(미측정) tok/s.',
    publishDate: '2026-05-15',
    dateModified: '2026-11-28',
    current_models_mentioned: ['Llama 3.1 8B', 'Llama 3.3 70B', 'Ministral 3 8B', 'Phi-4'],
    current_hardware_mentioned: ['M5 Pro', 'M5 Max', 'M4 Pro', 'RTX 4090', 'Mac mini M5 Pro', 'Mac Studio M5 Max', 'Mac Studio M5 Ultra'],
    audience: '구매 전에 사양 기반 예상 속도를 확인하려는 M5 Pro/Max 사용자와 구매 예정자.',
    readTime: '6분 읽기',
    educationalLevel: 'Intermediate',
    primaryTerm: 'M5 Pro M5 Max LLM 벤치마크',
    targetKeywords: ['M5 Pro 벤치마크', 'M5 Max 벤치마크', 'tok/s 비교', 'Apple Silicon LLM 성능'],
    leadAnswerBlock: '**M5 Pro의 메모리 대역폭은 307 GB/s이고, 40코어 GPU M5 Max는 614 GB/s입니다. Llama 3.3 70B Q4_K_M(43 GB)의 예상 속도는 64 GB M5 Pro에서 약 4–5 tok/s, 64 GB 이상 M5 Max에서 약 9–11 tok/s입니다. Llama 3.1 8B Q4(4.9 GB)는 약 38–50 대 75–100 tok/s입니다. 대역폭과 파일 크기로 계산한 추정값이며 측정값이 아닙니다.**',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM 추론에서 M5 Pro와 M5 Max는 얼마나 빠릅니까?',
        answer: '측정이 아닌 추정값입니다. 70B Q4_K_M 모델에서는 M5 Pro(64 GB) 약 4–5 tok/s, M5 Max(614 GB/s, 64 GB 이상) 약 9–11 tok/s입니다. 8B Q4 모델에서는 각각 약 38–50, 75–100 tok/s입니다. 약 2배 차이는 계산에 사용한 대역폭이 2배이기 때문입니다.',
        bullets: [
          '70B Q4_K_M(추정): M5 Pro 64 GB 약 4–5 tok/s, M5 Max 약 9–11 tok/s',
          '8B Q4(추정): M5 Pro 약 38–50 tok/s, M5 Max 약 75–100 tok/s',
          'M5 Pro: 307 GB/s, 최대 64 GB. M5 Max: 460 또는 614 GB/s, 최대 128 GB',
          '614 GB/s는 40코어 GPU 버전이 필요하며, 32코어 버전은 460 GB/s와 36 GB입니다',
          'PromptQuorum은 이 칩들을 벤치마크하지 않았습니다',
        ],
        updatedDate: '2026-11-28',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: 'M5 Pro와 M5 Max 사양', anchor: '#specs' },
      { label: '예상 생성 속도', anchor: '#benchmarks' },
      { label: '프롬프트 처리에 관한 Apple의 발표', anchor: '#prompt-speed' },
      { label: '어느 것을 사야 합니까?', anchor: '#which-buy' },
      { label: '데스크톱 Mac: Mac mini와 Mac Studio', anchor: '#desktop-availability' },
      { label: '내 Mac에서 직접 측정하기', anchor: '#reproducibility' },
      { label: 'M5 Ultra: 가격과 예상 속도', anchor: '#ultra-projections' },
      { label: '추정값 산출 방법', anchor: '#freshness-note' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'M5 Pro(307 GB/s)와 M5 Max(최대 614 GB/s)의 주된 차이는 메모리 대역폭과 최대 메모리입니다. 70B Q4_K_M 모델의 예상 속도는 64 GB M5 Pro에서 약 4–5 tok/s, 614 GB/s M5 Max에서 약 9–11 tok/s이며, 측정이 아닌 계산값입니다.',
          },
          {
            type: 'plain-terms',
            text: '메모리 대역폭은 칩이 메모리에서 데이터를 읽는 속도입니다. 토큰을 하나 만들 때마다 모델을 읽어야 하므로, 대역폭을 모델 크기로 나누면 속도의 대략적인 상한이 됩니다. 실제 소프트웨어는 보통 그보다 낮습니다.',
          },
        ],
        items: [
          'M5 Pro: 307 GB/s, 최대 64 GB. M5 Max: 460 GB/s(32코어 GPU) 또는 614 GB/s(40코어 GPU), 최대 128 GB.',
          'Llama 3.3 70B Q4_K_M 예상 속도: M5 Pro 64 GB 약 4–5 tok/s, 614 GB/s M5 Max 약 9–11 tok/s.',
          'Llama 3.1 8B Q4 예상 속도: M5 Pro 약 38–50 tok/s, 614 GB/s M5 Max 약 75–100 tok/s.',
          '43 GB 70B 파일은 컨텍스트와 macOS가 같은 메모리를 쓰므로 64 GB에서는 여유가 적습니다.',
          '중소형 모델에는 M5 Pro가 더 저렴한 선택입니다. 70B를 자주 쓴다면 M5 Max를 검토하십시오.',
          '이 페이지의 속도는 모두 PromptQuorum이 측정한 값이 아닙니다.',
        ],
      },
      specs: {
        id: 'specs',
        title: 'M5 Pro 대 M5 Max: LLM에 중요한 사양',
        tableFormat: true,
        columns: ['사양', 'M5 Pro', 'M5 Max'],
        rows: [
          { '사양': '최대 통합 메모리', 'M5 Pro': '64 GB', 'M5 Max': '128 GB' },
          { '사양': '메모리 대역폭', 'M5 Pro': '307 GB/s', 'M5 Max': '460 또는 614 GB/s' },
          { '사양': 'GPU 코어', 'M5 Pro': '16 또는 20', 'M5 Max': '32 또는 40' },
          { '사양': 'Neural Engine', 'M5 Pro': '16코어', 'M5 Max': '16코어' },
          { '사양': 'Llama 3.3 70B Q4 (43 GB)', 'M5 Pro': '64 GB만 가능, 여유 적음', 'M5 Max': '64 GB 이상 필요' },
          { '사양': 'Apple의 LLM 프롬프트 발표', 'M5 Pro': 'M4 Pro 대비 최대 3.9배', 'M5 Max': 'M4 Max 대비 최대 4배' },
        ],
      },
      benchmarks: {
        id: 'benchmarks',
        title: '모델별 예상 생성 속도',
        content: '**아래는 추정값이며 벤치마크가 아닙니다.** 상한 = 메모리 대역폭 ÷ 모델 파일 크기. 표는 이 상한의 약 60–80%를 보여 주며, [70B 하드웨어 가이드](/ko/local-llms/70b-models-consumer-hardware)와 같은 방법입니다. 예를 들어 307 GB/s ÷ 43 GB의 상한은 약 7 tok/s, 614 GB/s ÷ 43 GB는 약 14 tok/s입니다. 파일 크기는 Ollama 라이브러리의 다운로드 크기입니다. M5 Max 열은 614 GB/s 버전 기준이며, 단일 사용자, 짧은 컨텍스트, 메모리에 모두 올라가는 모델을 가정합니다.',
        tableFormat: true,
        columns: ['모델 (파일 크기)', 'M5 Pro (307 GB/s)', 'M5 Max (614 GB/s)'],
        rows: [
          { '모델 (파일 크기)': 'Llama 3.1 8B Q4 (4.9 GB)', 'M5 Pro (307 GB/s)': '약 38–50 tok/s', 'M5 Max (614 GB/s)': '약 75–100 tok/s' },
          { '모델 (파일 크기)': 'Llama 3.1 8B Q8 (8.5 GB)', 'M5 Pro (307 GB/s)': '약 22–29 tok/s', 'M5 Max (614 GB/s)': '약 43–58 tok/s' },
          { '모델 (파일 크기)': 'Llama 3.3 70B Q4_K_M (43 GB)', 'M5 Pro (307 GB/s)': '약 4–5 tok/s', 'M5 Max (614 GB/s)': '약 9–11 tok/s' },
          { '모델 (파일 크기)': 'Llama 3.3 70B Q5_K_M (50 GB)', 'M5 Pro (307 GB/s)': '약 4–5 tok/s', 'M5 Max (614 GB/s)': '약 7–10 tok/s' },
          { '모델 (파일 크기)': 'Ministral 3 8B Q4 (6.0 GB)', 'M5 Pro (307 GB/s)': '약 31–41 tok/s', 'M5 Max (614 GB/s)': '약 61–82 tok/s' },
          { '모델 (파일 크기)': 'Phi-4 14B Q4 (9.1 GB)', 'M5 Pro (307 GB/s)': '약 20–27 tok/s', 'M5 Max (614 GB/s)': '약 40–54 tok/s' },
        ],
        note: '추정값일 뿐입니다. 60–80% 범위는 어림 기준이며 소형 모델, 긴 컨텍스트, 특정 런타임에서는 맞지 않을 수 있습니다. 프롬프트 처리는 포함하지 않습니다. Phi-4는 14B 모델입니다.',
      },
      promptSpeed: {
        id: 'prompt-speed',
        title: '프롬프트 처리 속도: Apple의 발표',
        content: [
          'Apple은 자체 테스트를 근거로 LLM 프롬프트 처리가 M5 Pro는 M4 Pro 대비 최대 3.9배, M5 Max는 M4 Max 대비 최대 4배 빠르다고 밝혔습니다([Apple Newsroom](https://www.apple.com/newsroom/2026/03/apple-introduces-macbook-pro-with-all-new-m5-pro-and-m5-max/)). PromptQuorum은 이 발표를 검증하지 않았습니다.',
          '프롬프트 처리는 토큰 생성과 별개의 단계이므로 이 배수는 위의 tok/s 추정값에 적용되지 않으며, 이 페이지는 첫 토큰까지의 시간을 제시하지 않습니다.',
        ],
      },
      whichBuy: {
        id: 'which-buy',
        title: '어느 것을 사야 합니까?',
        numberedItems: [
          { title: '8B~14B 모델을 매일 사용', whyItMatters: '추정에 따르면 위의 8B·14B 파일에서 M5 Pro는 약 20–50 tok/s입니다. 이 크기에는 M5 Max가 꼭 필요하지 않습니다.' },
          {
            title: '약 20 GB 모델(예: Q4 32B)',
            whyItMatters: '20 GB 파일은 M5 Pro에서 약 9–12 tok/s, 614 GB/s M5 Max에서 약 18–25 tok/s입니다(추정). 감수할 수 있는 대기 시간에 따라 선택하십시오.',
          },
          { title: '70B 모델을 자주 사용', whyItMatters: '64 GB 이상의 40코어 M5 Max를 검토하십시오. 70B Q4_K_M 예상 속도는 약 9–11 tok/s, M5 Pro는 약 4–5 tok/s입니다.' },
          {
            title: '상시 가동 서버',
            whyItMatters: 'Mac mini M5 Pro는 소형 데스크톱 선택지입니다. $1,699는 24 GB 기본형의 미국 가격입니다. 가장 저렴한 64 GB 구성(15코어 CPU, 512 GB SSD)은 기본 가격에 메모리 업그레이드 $1,000를 더한 $2,699입니다([Daring Fireball](https://daringfireball.net/2026/08/configurations_and_pricing_for_new_mac_minis_and_mac_studios)). Fstoppers가 2026년 9월 21일 표기한 $3,199는 18코어 CPU, 1 TB 버전 가격입니다.',
          },
          { title: '휴대용 장비', whyItMatters: 'MacBook Pro는 M5 Pro를 최대 64 GB까지 지원합니다. 64 GB는 20코어 GPU 버전이 필요합니다.' },
          { title: '더 넉넉한 메모리', whyItMatters: '128 GB Mac Studio M5 Max(40코어 GPU)는 50 GB 70B Q5_K_M 파일, 더 긴 컨텍스트, 추가 모델을 위한 공간이 더 넉넉합니다.' },
        ],
      },
      desktopAvailability: {
        id: 'desktop-availability',
        title: '데스크톱 Mac의 M5 Pro와 M5 Max',
        content: '2026년 8월 25일 Apple은 Mac mini M5 Pro와 M5 Max 또는 M5 Ultra를 탑재한 Mac Studio를 발표했으며, 2026년 9월 22일부터 공급한다고 밝혔습니다. Mac Studio M5 Ultra의 512 GB 구성은 2026년 10월 말에 나온다고 안내했습니다. 가격은 각 출처 시점의 미국 정가입니다([9to5Mac](https://9to5mac.com/2026/08/25/apple-unveils-next-generation-mac-studio-with-m5-max-and-m5-ultra/), [MacRumors](https://www.macrumors.com/roundup/mac-mini/)). 현재 가격은 Apple 스토어에서 확인하십시오.',
        tableFormat: true,
        columns: ['데스크톱 Mac', '시작 가격(미국)', '최대 메모리', '공급 시작'],
        rows: [
          { '데스크톱 Mac': 'Mac mini M5 Pro', '시작 가격(미국)': '$1,699(24 GB)', '최대 메모리': '64 GB(307 GB/s)', '공급 시작': '2026년 9월 22일' },
          { '데스크톱 Mac': 'Mac Studio M5 Max', '시작 가격(미국)': '$2,499(36 GB)', '최대 메모리': '128 GB(최대 614 GB/s)', '공급 시작': '2026년 9월 22일' },
          { '데스크톱 Mac': 'Mac Studio M5 Ultra', '시작 가격(미국)': '$5,499(96 GB)', '최대 메모리': '512 GB(최대 1.2 TB/s)', '공급 시작': '9월 22일(512 GB는 이후)' },
        ],
        note: 'Mac Studio M5 Max 기본형은 32코어 GPU, 460 GB/s, 36 GB로 43 GB 70B Q4_K_M 파일을 담기에 부족합니다. PromptQuorum은 데스크톱이나 노트북 M5 모델을 테스트하지 않았으므로 속도를 비교하지 않습니다.',
      },
      reproducibility: {
        id: 'reproducibility',
        title: '내 Mac에서 직접 측정하기',
        content: '추정값은 측정을 대신할 수 없습니다. MLX를 설치하면(pip install mlx-lm) 아래의 짧은 스크립트가 사용 중인 Mac의 프롬프트 처리 속도와 생성 속도를 출력합니다. [Mac에서의 MLX, Ollama, llama.cpp 비교](/ko/local-llms/mlx-vs-ollama-vs-llama-cpp-mac)도 참고하십시오.',
        codeBlock: `from mlx_lm import load, generate

model, tokenizer = load("mlx-community/Llama-3.1-8B-Instruct-4bit")

prompt = "Explain quantum computing in 200 words."

# verbose=True prints prompt and generation tokens-per-second
generate(model, tokenizer, prompt=prompt, max_tokens=200, verbose=True)`,
        codeLanguage: 'python',
        note: '결과는 모델 파일, 런타임 버전, 컨텍스트 길이, 전원 설정, 실행 중인 다른 앱에 따라 달라집니다. 짧은 1회 실행은 대략적인 확인일 뿐입니다.',
      },
      ultraProjections: {
        id: 'ultra-projections',
        title: 'M5 Ultra: 가격과 예상 속도',
        content: 'Mac Studio M5 Ultra는 96 GB 구성이 $5,499부터이며(미국 가격) 2026년 9월 22일부터 공급됩니다. MacRumors는 2026년 10월 28일 512 GB 구성을 $22,299부터 주문할 수 있다고 보도했습니다([MacRumors](https://www.macrumors.com/2026/10/28/mac-studio-m5-ultra-512gb-ram/)). 아래 속도는 같은 방법으로 계산한 추정값이며 측정값이 아닙니다.',
        columns: ['사양', 'M5 Ultra'],
        rows: [
          { '사양': '최대 통합 메모리', 'M5 Ultra': '512 GB' },
          { '사양': '메모리 대역폭', 'M5 Ultra': '최대 1.2 TB/s' },
          { '사양': 'GPU 코어', 'M5 Ultra': '최대 80' },
          { '사양': '70B Q4_K_M, 43 GB (추정)', 'M5 Ultra': '약 17–21 tok/s' },
          { '사양': '70B FP16, 141 GB (추정)', 'M5 Ultra': '약 5–7 tok/s' },
          { '사양': '시작 가격(미국)', 'M5 Ultra': '$5,499(96 GB)' },
          { '사양': '512 GB 구성', 'M5 Ultra': '$22,299부터(2026년 10월 28일)' },
        ],
        note: '141 GB FP16 파일에는 메모리가 96 GB를 넘는 구성이 필요합니다.',
      },
      freshnessNote: {
        id: 'freshness-note',
        title: '추정값 산출 방법',
        items: [
          '**방법:** 메모리 대역폭 ÷ 모델 파일 크기로 상한을 구하고, 그 약 60–80%를 표시합니다.',
          '**대역폭과 메모리:** Apple의 [MacBook Pro](https://www.apple.com/macbook-pro/specs/) 및 [Mac Studio](https://www.apple.com/mac-studio/specs/) 사양 페이지(2026년 11월 28일 확인). M5 Ultra의 1.2 TB/s는 "최대" 값입니다.',
          '**파일 크기:** Ollama 라이브러리의 [Llama 3.1](https://ollama.com/library/llama3.1/tags), [Llama 3.3](https://ollama.com/library/llama3.3/tags), [Ministral 3](https://ollama.com/library/ministral-3/tags), [Phi-4](https://ollama.com/library/phi4/tags) 태그(2026년 11월 28일 확인).',
          '**테스트:** PromptQuorum은 이 페이지를 위해 M5 Pro, M5 Max, M5 Ultra를 벤치마크하지 않았습니다.',
          '**정정(2026년 11월 28일):** 속도 수치를 계산한 추정값으로 교체했습니다. 프레임워크, 지연 시간, 음성 전사, 전력, 발열 수치는 삭제했습니다.',
          '**한계:** 실제 속도는 이 범위를 벗어날 수 있습니다. 계획용으로만 사용하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        faqs: [
          {
            q: 'M5 Max 추정값이 M5 Pro의 약 2배인 이유는 무엇입니까?',
            a: '추정은 메모리 대역폭을 기준으로 하며, 40코어 M5 Max는 614 GB/s, M5 Pro는 307 GB/s이기 때문입니다. 즉 2배는 계산 방법에서 나온 값으로 측정된 성능 향상이 아니며, 실제 결과는 다를 수 있습니다. 32코어 M5 Max는 460 GB/s로 M5 Pro의 약 1.5배입니다.',
          },
          {
            q: 'RTX 4090이 이 모델들을 더 빠르게 실행합니까?',
            a: '24 GB VRAM에 들어가는 모델에서는 대역폭에 따른 상한이 더 높습니다(1,008 GB/s 대 최대 614 GB/s). 43 GB의 Llama 3.3 70B Q4_K_M 파일은 RTX 4090 한 장에 들어가지 않습니다. 이 페이지에는 측정 비교가 없습니다.',
          },
          {
            q: 'M5 Pro로 충분합니까, M5 Max를 사야 합니까?',
            a: '중소형 모델에는 M5 Pro로 충분할 수 있습니다. 20 GB 파일의 예상 속도는 약 9–12 tok/s입니다. 70B를 자주 쓰거나 [여러 모델을 함께](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) 실행한다면 64 GB 이상의 40코어 M5 Max가 여유가 더 큽니다.',
          },
          {
            q: 'M5 Ultra는 얼마나 더 빠를 수 있습니까?',
            a: 'Apple이 밝힌 값은 최대 1.2 TB/s로 최상위 M5 Max의 614 GB/s의 약 2배이므로 대역폭 상한도 약 2배입니다. 70B Q4_K_M 예상 속도는 약 17–21 tok/s이며 측정값이 아닙니다.',
          },
          {
            q: 'PromptQuorum이 이 칩들을 벤치마크했습니까?',
            a: '아닙니다. 이 페이지의 속도는 공개된 대역폭과 파일 크기로 계산한 값입니다. 사용 중인 Mac의 실제 수치는 위의 MLX 스크립트로 확인하고, 모델 파일, 런타임, 설정이 같은 결과끼리만 비교하십시오.',
          },
        ],
      },
    },
    ctaText: 'M5 Pro 또는 M5 Max에서 모델을 실행하고 계십니까? PromptQuorum으로 로컬 LLM의 답변과 클라우드 모델의 답변을 한 번에 비교하고, 직접 하는 작업에서 어느 정도인지 확인하십시오.',
  },
};
