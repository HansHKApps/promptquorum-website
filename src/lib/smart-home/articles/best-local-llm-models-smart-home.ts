import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Best Local LLM Models for Smart Home Control (2026)',
    seoTitle: 'Best Local LLMs for Home Assistant (2026)',
    intro:
      'The best local LLM models for smart home control are small, fast, instruction-following models with reliable function-calling — not the largest model your hardware can hold. This guide explains what actually matters for home control, gives a shortlist of suitable small models, compares them, and maps picks to hardware budgets, linking out to deeper model guides rather than re-ranking the whole field.',
    metaDescription:
      'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
    twitterDescription:
      'Best local LLM models for Home Assistant control: small, fast, function-calling models over the biggest model you can run. Picks by hardware budget.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users choosing a local model for device control',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'best local llm for home assistant',
      'best local llm smart home',
      'local llm home control model',
      'function calling local llm',
      'small local llm home automation',
    ],
    leadAnswerBlock:
      '**For smart home control, choose a small instruction model with reliable function-calling — a 3B–8B model is the sweet spot, because home control rewards low latency and structured output over raw capability.** Match the model to your hardware rather than picking the largest one available.',
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for smart home control?',
        answer:
          'A small instruction-following model with solid function-calling, typically in the 4B to 8B range, is the best fit for home control because it responds quickly and emits reliable device actions. Models such as Gemma 3 4B, Qwen3 4B, and Qwen3 8B are common, well-supported choices; the right pick depends on your hardware and language needs.',
        bullets: [
          'Prioritise low latency and function-calling over size',
          '4B models suit low-power hardware; 8B suits a mini PC with a GPU or NPU',
          'Gemma 3 4B, Qwen3 4B, and Phi-4-mini are common starting points',
          'Pick a model with strong support for your spoken language',
          'Larger models add little for simple device control',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What Matters for Home Control', anchor: 'what-matters' },
      { label: 'The Shortlist', anchor: 'shortlist' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'By Hardware Budget', anchor: 'by-budget' },
      { label: 'How to Pick', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best local LLM for smart home control is a small (3B–8B) instruction model with reliable function-calling, chosen for low latency over raw size.' },
      { type: 'plain-terms', content: 'Controlling a home does not need a giant model — it needs one that responds fast and reliably outputs structured commands the hub can execute. Small models in the 3B to 8B range do this well and run on modest hardware. The deeper model rankings live in the local-llms cluster; this guide focuses on the home-control angle.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home control rewards low latency and reliable function-calling, not maximum model size',
          'A 4B model fits low-power hardware; an 8B model suits a mini PC with a GPU or NPU',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba), and Qwen3 8B (Alibaba) are common, well-supported choices',
          'Qwen3, Gemma 3, and Phi-4-mini have proven Home Assistant tool-calling support today',
          'Pick a model with strong support for the language you speak to it',
          'For deep model rankings and mechanics, link out to the local-llms cluster',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'What Matters for Home Control',
        content:
          '**Three things decide a good home-control model: latency, reliable function-calling, and size that fits your hardware.** Benchmark leaderboards matter far less here than responsiveness.',
        items: [
          '**Latency:** a voice command should feel near-instant; smaller models on capable hardware respond faster.',
          '**Function-calling:** the model must emit structured device actions reliably — this is the decisive capability.',
          '**Fit:** the model must run comfortably on the box that also hosts Home Assistant — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'The Shortlist',
        content:
          '**These small models are common, well-supported choices for home control across different hardware budgets.** Use a 4B model on light hardware and an 8B model when you have a GPU or NPU. Gemma 4 (June 2026) is the newest option; Qwen3, Gemma 3, and Phi-4-mini have proven Home Assistant tool-calling support today.',
        items: [
          '**Gemma 3 4B (Google):** a 4-billion-parameter model with broad multilingual coverage (140+ languages), a strong low-power choice — Ollama tag `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** a fast 4B model with reliable tool use and good multilingual support, low latency on a CPU or integrated GPU — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** a compact 3.8B model that punches above its size for instruction-following — `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** a widely-supported 3B baseline that runs on modest hardware with good function-calling — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** the best quality here on a GPU or NPU and a Home Assistant favourite for tool-calling — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Pick by hardware and language: smaller models for CPU-only or Pi-class hardware, 8B for a GPU-equipped mini PC.** Sizes below are approximate at common 4-bit quantization; the Ollama tag is the exact model to pull.',
        columns: ['Model', 'Params', 'Approx. footprint (Q4)', 'Ollama tag', 'Best for'],
        rows: [
          { 'Model': 'Gemma 3 4B', 'Params': '4B', 'Approx. footprint (Q4)': '~3 GB', 'Ollama tag': 'gemma3:4b', 'Best for': 'Low-power host, 140+ languages' },
          { 'Model': 'Qwen3 4B', 'Params': '4B', 'Approx. footprint (Q4)': '~2.5–3 GB', 'Ollama tag': 'qwen3:4b', 'Best for': 'Low latency, multilingual, tools' },
          { 'Model': 'Phi-4-mini', 'Params': '3.8B', 'Approx. footprint (Q4)': '~2.5–3 GB', 'Ollama tag': 'phi4-mini', 'Best for': 'Strong instruction-following' },
          { 'Model': 'Llama 3.2 3B', 'Params': '3B', 'Approx. footprint (Q4)': '~2–3 GB', 'Ollama tag': 'llama3.2:3b', 'Best for': 'Widely-supported baseline' },
          { 'Model': 'Qwen3 8B', 'Params': '8B', 'Approx. footprint (Q4)': '~5 GB', 'Ollama tag': 'qwen3:8b', 'Best for': 'Best quality on GPU/NPU; HA favourite' },
        ],
        items: [
          'Footprints are approximate and depend on quantization — for VRAM and quantization depth, link out to the local-llms cluster.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Picks by Hardware Budget',
        content:
          '**Choose a 4B model on a Pi or CPU-only mini PC; choose an 8B model when you have a GPU or NPU.** This keeps responses snappy at every tier.',
        items: [
          '**Raspberry Pi / low-power:** Gemma 3 4B or Qwen3 4B, accepting slower responses.',
          '**Mini PC (CPU only):** Qwen3 4B or Phi-4-mini as a responsive default.',
          '**Mini PC with GPU/NPU:** Qwen3 8B for the best quality at acceptable latency — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'How to Pick',
        content:
          '**Start with a 4B model, confirm latency and reliable device actions, then move to 8B only if quality is lacking.** Test with your real commands before committing.',
        items: [
          'Install via the [Ollama integration](/smart-home/home-assistant-ollama-integration) and test your common commands.',
          'If responses are slow, drop a size or add a GPU/NPU.',
          'If actions are unreliable, prefer a model known for function-calling.',
          'For deep model rankings and mechanics, see [best local LLMs 2026](/local-llms/best-local-llms-2026) (cross-cluster) — this guide stays home-control-specific.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the smallest usable model for home control?', a: 'A 3B model such as Llama 3.2 3B is the practical floor for reliable device control on low-power hardware, trading some understanding for speed. A 4B model like Gemma 3 4B or Qwen3 4B is the better balance if your hardware allows it.' },
          { q: 'Does a home-control model need a GPU?', a: 'No for 4B models, which run on CPU or an integrated GPU. A GPU or NPU mainly lets you run an 8B model such as Qwen3 8B at low latency for better understanding. Match the model to your hardware.' },
          { q: 'Which models support function-calling?', a: 'Modern small models including Qwen3, Gemma 3, and Phi-4-mini have proven Home Assistant tool/function-calling support, which is the capability that lets them emit reliable device actions. Prefer a model documented to support it for home control.' },
          { q: 'What is the best model for a Raspberry Pi?', a: 'A 4B model like Gemma 3 4B or Qwen3 4B is the practical ceiling on a Raspberry Pi, and responses will be slower than on a mini PC. For a snappy assistant, a mini PC with a GPU/NPU running Qwen3 8B is the better host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — install and test your chosen model',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full architecture',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — match model size to hardware',
          '[Best Local LLMs 2026](/local-llms/best-local-llms-2026) — cross-cluster: deep model rankings',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Local LLM Models for Smart Home Control (2026)',
      description: 'The best local LLM models for smart home control in 2026: small, fast, function-calling models that run on modest hardware. Shortlist and picks by budget.',
      url: 'https://www.promptquorum.com/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Function calling' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What is the smallest usable model for home control?', acceptedAnswer: { '@type': 'Answer', text: 'A 3B model such as Llama 3.2 3B is the practical floor for reliable device control on low-power hardware. A 4B model like Gemma 3 4B or Qwen3 4B is a better balance if your hardware allows it.' } },
        { '@type': 'Question', name: 'Does a home-control model need a GPU?', acceptedAnswer: { '@type': 'Answer', text: 'No for 4B models, which run on CPU or integrated GPU. A GPU or NPU mainly lets you run an 8B model like Qwen3 8B at low latency.' } },
        { '@type': 'Question', name: 'Which models support function-calling?', acceptedAnswer: { '@type': 'Answer', text: 'Modern small models including Qwen3, Gemma 3, and Phi-4-mini have proven Home Assistant tool/function-calling support, which lets them emit reliable device actions.' } },
        { '@type': 'Question', name: 'What is the best model for a Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'A 4B model like Gemma 3 4B or Qwen3 4B is the practical ceiling on a Pi, with slower responses. A mini PC with a GPU/NPU running Qwen3 8B is a better host.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'أفضل نماذج LLM المحلية للتحكم في المنزل الذكي (2026)',
    seoTitle: 'أفضل LLMs المحلية لـ Home Assistant 2026',
    intro:
      'أفضل نماذج LLM المحلية للتحكم في المنزل الذكي هي نماذج صغيرة وسريعة تتبع التعليمات مع استدعاء دوال موثوق — وليس أكبر نموذج يمكن لجهازك تشغيله. يشرح هذا الدليل ما يهم فعلًا للتحكم المنزلي، ويقدم قائمة مختصرة بالنماذج الصغيرة المناسبة، ويقارنها، ويعيّن الاختيارات حسب ميزانيات الأجهزة، مع إحالات خارجية لأدلة النماذج الأعمق.',
    metaDescription:
      'نماذج 3B–8B صغيرة وسريعة مع استدعاء الدوال هي الأفضل للتحكم المنزلي. Gemma 3 4B وQwen3 4B وQwen3 8B اختيارات شائعة حسب الأجهزة.',
    twitterDescription:
      'أفضل نماذج LLM المحلية للتحكم بـ Home Assistant: نماذج صغيرة وسريعة مع استدعاء الدوال بدلًا من أكبر نموذج يمكنك تشغيله. اختيارات حسب ميزانية الأجهزة.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يختارون نموذجًا محليًا للتحكم في الأجهزة',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'أفضل llm محلي لـ home assistant',
      'أفضل llm محلي للمنزل الذكي',
      'نموذج llm محلي للتحكم المنزلي',
      'استدعاء دوال llm محلي',
      'llm محلي صغير لأتمتة المنزل',
    ],
    leadAnswerBlock:
      '**للتحكم في المنزل الذكي، اختر نموذج تعليمات صغيرًا مع استدعاء دوال موثوق — نموذج بحجم 3B–8B هو النقطة المثلى، لأن التحكم المنزلي يكافئ زمن الاستجابة المنخفض والمخرجات المنظمة على حساب القدرة الخام.** طابق النموذج مع جهازك بدلًا من اختيار الأكبر المتاح.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج LLM محلي للتحكم في المنزل الذكي؟',
        answer:
          'نموذج تعليمات صغير مع استدعاء دوال قوي، عادةً في نطاق 4B إلى 8B، هو الأنسب للتحكم المنزلي لأنه يستجيب بسرعة ويصدر إجراءات أجهزة موثوقة. نماذج مثل Gemma 3 4B وQwen3 4B وQwen3 8B هي خيارات شائعة ومدعومة جيدًا؛ الاختيار الصحيح يعتمد على جهازك واحتياجاتك اللغوية.',
        bullets: [
          'أعطِ الأولوية لزمن الاستجابة المنخفض واستدعاء الدوال على حساب الحجم',
          'نماذج 4B تناسب الأجهزة منخفضة الطاقة؛ 8B تناسب mini PC مع GPU أو NPU',
          'Gemma 3 4B وQwen3 4B وPhi-4-mini نقاط بداية شائعة',
          'اختر نموذجًا ذا دعم قوي للغة التي تتحدث بها',
          'النماذج الأكبر لا تضيف شيئًا يُذكر للتحكم البسيط في الأجهزة',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما يهم للتحكم المنزلي', anchor: 'what-matters' },
      { label: 'القائمة المختصرة', anchor: 'shortlist' },
      { label: 'المقارنة', anchor: 'comparison' },
      { label: 'حسب ميزانية الأجهزة', anchor: 'by-budget' },
      { label: 'كيفية الاختيار', anchor: 'how-to-pick' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أفضل نموذج LLM محلي للتحكم في المنزل الذكي هو نموذج تعليمات صغير (3B–8B) مع استدعاء دوال موثوق، يُختار لزمن الاستجابة المنخفض لا للحجم الخام.' },
      { type: 'plain-terms', content: 'التحكم في المنزل لا يحتاج نموذجًا ضخمًا — بل يحتاج نموذجًا يستجيب بسرعة ويصدر أوامر منظمة يمكن للمركز تنفيذها. النماذج الصغيرة في نطاق 3B إلى 8B تؤدي هذا بشكل جيد وتعمل على أجهزة متواضعة. تصنيفات النماذج الأعمق موجودة في عنقود local-llms؛ هذا الدليل يركز على جانب التحكم المنزلي.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'التحكم المنزلي يكافئ زمن الاستجابة المنخفض واستدعاء الدوال الموثوق، لا أقصى حجم للنموذج',
          'نموذج 4B يناسب الأجهزة منخفضة الطاقة؛ نموذج 8B يناسب mini PC مع GPU أو NPU',
          'Gemma 3 4B (Google) وQwen3 4B (Alibaba) وQwen3 8B (Alibaba) خيارات شائعة ومدعومة جيدًا',
          'Qwen3 وGemma 3 وPhi-4-mini لديها دعم مُثبَت لاستدعاء أدوات Home Assistant اليوم',
          'اختر نموذجًا ذا دعم قوي للغة التي تتحدث بها',
          'لتصنيفات النماذج العميقة والميكانيكا، أحل إلى عنقود local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'ما يهم للتحكم المنزلي',
        content:
          '**ثلاثة أشياء تحدد نموذج التحكم المنزلي الجيد: زمن الاستجابة واستدعاء الدوال الموثوق والحجم الملائم لجهازك.** جداول تصنيف المعايير تهم هنا أقل بكثير من سرعة الاستجابة.',
        items: [
          '**زمن الاستجابة:** يجب أن يبدو الأمر الصوتي شبه فوري؛ النماذج الأصغر على أجهزة قادرة تستجيب بشكل أسرع.',
          '**استدعاء الدوال:** يجب أن يصدر النموذج إجراءات أجهزة منظمة بشكل موثوق — هذه هي القدرة الحاسمة.',
          '**الملاءمة:** يجب أن يعمل النموذج بشكل مريح على الصندوق الذي يستضيف أيضًا Home Assistant — راجع [أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'القائمة المختصرة',
        content:
          '**هذه النماذج الصغيرة خيارات شائعة ومدعومة جيدًا للتحكم المنزلي عبر ميزانيات أجهزة مختلفة.** استخدم نموذج 4B على الأجهزة الخفيفة ونموذج 8B حين تمتلك GPU أو NPU. Gemma 4 (يونيو 2026) هو الخيار الأحدث؛ Qwen3 وGemma 3 وPhi-4-mini لديها دعم مُثبَت لاستدعاء أدوات Home Assistant اليوم.',
        items: [
          '**Gemma 3 4B (Google):** نموذج بـ 4 مليار معامل مع تغطية متعددة اللغات واسعة (أكثر من 140 لغة)، خيار قوي منخفض الطاقة — علامة Ollama `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** نموذج 4B سريع مع استخدام أدوات موثوق ودعم جيد متعدد اللغات، زمن استجابة منخفض على CPU أو GPU متكاملة — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** نموذج مدمج بـ 3.8B يتجاوز حجمه في اتباع التعليمات — `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** قاعدة 3B مدعومة على نطاق واسع تعمل على أجهزة متواضعة مع استدعاء دوال جيد — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** أفضل جودة هنا على GPU أو NPU ومفضّل Home Assistant لاستدعاء الأدوات — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'المقارنة',
        content:
          '**اختر حسب الأجهزة واللغة: نماذج أصغر لأجهزة CPU فقط أو من فئة Pi، و8B لـ mini PC مجهّز بـ GPU.** الأحجام أدناه تقريبية عند التكميم الشائع بـ 4 بت؛ علامة Ollama هي النموذج الدقيق للسحب.',
        columns: ['النموذج', 'المعاملات', 'البصمة التقريبية (Q4)', 'علامة Ollama', 'الأفضل لـ'],
        rows: [
          { 'النموذج': 'Gemma 3 4B', 'المعاملات': '4B', 'البصمة التقريبية (Q4)': '~3 GB', 'علامة Ollama': 'gemma3:4b', 'الأفضل لـ': 'مضيف منخفض الطاقة، 140+ لغة' },
          { 'النموذج': 'Qwen3 4B', 'المعاملات': '4B', 'البصمة التقريبية (Q4)': '~2.5–3 GB', 'علامة Ollama': 'qwen3:4b', 'الأفضل لـ': 'زمن استجابة منخفض، متعدد اللغات، أدوات' },
          { 'النموذج': 'Phi-4-mini', 'المعاملات': '3.8B', 'البصمة التقريبية (Q4)': '~2.5–3 GB', 'علامة Ollama': 'phi4-mini', 'الأفضل لـ': 'اتباع تعليمات قوي' },
          { 'النموذج': 'Llama 3.2 3B', 'المعاملات': '3B', 'البصمة التقريبية (Q4)': '~2–3 GB', 'علامة Ollama': 'llama3.2:3b', 'الأفضل لـ': 'قاعدة مدعومة على نطاق واسع' },
          { 'النموذج': 'Qwen3 8B', 'المعاملات': '8B', 'البصمة التقريبية (Q4)': '~5 GB', 'علامة Ollama': 'qwen3:8b', 'الأفضل لـ': 'أفضل جودة على GPU/NPU؛ مفضّل HA' },
        ],
        items: [
          'البصمات تقريبية وتعتمد على التكميم — لعمق VRAM والتكميم، أحل إلى عنقود local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'الاختيارات حسب ميزانية الأجهزة',
        content:
          '**اختر نموذج 4B على Pi أو mini PC بـ CPU فقط؛ اختر نموذج 8B حين تمتلك GPU أو NPU.** يُبقي هذا الاستجابات سريعة في كل مستوى.',
        items: [
          '**Raspberry Pi / منخفض الطاقة:** Gemma 3 4B أو Qwen3 4B، مع قبول استجابات أبطأ.',
          '**Mini PC (CPU فقط):** Qwen3 4B أو Phi-4-mini كخيار افتراضي سريع الاستجابة.',
          '**Mini PC مع GPU/NPU:** Qwen3 8B لأفضل جودة بزمن استجابة مقبول — راجع [أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'كيفية الاختيار',
        content:
          '**ابدأ بنموذج 4B، تحقق من زمن الاستجابة وموثوقية إجراءات الأجهزة، ثم انتقل إلى 8B فقط إذا كانت الجودة ناقصة.** اختبر بأوامرك الحقيقية قبل الالتزام.',
        items: [
          'ثبّت عبر [تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration) واختبر أوامرك الشائعة.',
          'إذا كانت الاستجابات بطيئة، انتقل لحجم أصغر أو أضف GPU/NPU.',
          'إذا كانت الإجراءات غير موثوقة، فضّل نموذجًا معروفًا باستدعاء الدوال.',
          'لتصنيفات النماذج العميقة والميكانيكا، راجع [أفضل النماذج اللغوية المحلية 2026](/ar/local-llms/best-local-llms-2026) (متعدد العناقيد) — هذا الدليل يبقى خاصًا بالتحكم المنزلي.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'ما أصغر نموذج قابل للاستخدام للتحكم المنزلي؟', a: 'نموذج 3B مثل Llama 3.2 3B هو الحد الأدنى العملي للتحكم الموثوق في الأجهزة على الأجهزة منخفضة الطاقة، يتداول بعض الفهم مقابل السرعة. نموذج 4B مثل Gemma 3 4B أو Qwen3 4B هو توازن أفضل إذا سمح جهازك بذلك.' },
          { q: 'هل يحتاج نموذج التحكم المنزلي إلى GPU؟', a: 'لا لنماذج 4B التي تعمل على CPU أو GPU متكاملة. GPU أو NPU تتيح لك أساسًا تشغيل نموذج 8B مثل Qwen3 8B بزمن استجابة منخفض لفهم أفضل. طابق النموذج مع جهازك.' },
          { q: 'أي النماذج تدعم استدعاء الدوال؟', a: 'النماذج الصغيرة الحديثة بما فيها Qwen3 وGemma 3 وPhi-4-mini لديها دعم مُثبَت لاستدعاء أدوات/دوال Home Assistant، وهي القدرة التي تتيح لها إصدار إجراءات أجهزة موثوقة. فضّل نموذجًا موثق الدعم للتحكم المنزلي.' },
          { q: 'ما أفضل نموذج لـ Raspberry Pi؟', a: 'نموذج 4B مثل Gemma 3 4B أو Qwen3 4B هو السقف العملي على Raspberry Pi، والاستجابات ستكون أبطأ من mini PC. لمساعد سريع الاستجابة، mini PC مع GPU/NPU يشغّل Qwen3 8B هو المضيف الأفضل.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — تثبيت واختبار نموذجك المختار',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — البنية الكاملة',
          '[أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — مطابقة حجم النموذج مع الأجهزة',
          '[أفضل النماذج اللغوية المحلية 2026](/ar/local-llms/best-local-llms-2026) — متعدد العناقيد: تصنيفات نماذج عميقة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل نماذج LLM المحلية للتحكم في المنزل الذكي (2026)',
      description: 'أفضل نماذج LLM المحلية للتحكم في المنزل الذكي 2026: نماذج صغيرة وسريعة مع استدعاء الدوال تعمل على أجهزة متواضعة. قائمة مختصرة واختيارات حسب الميزانية.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'نموذج LLM محلي' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'استدعاء الدوال' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما أصغر نموذج قابل للاستخدام للتحكم المنزلي؟', acceptedAnswer: { '@type': 'Answer', text: 'نموذج 3B مثل Llama 3.2 3B هو الحد الأدنى العملي للتحكم الموثوق في الأجهزة على الأجهزة منخفضة الطاقة. نموذج 4B مثل Gemma 3 4B أو Qwen3 4B هو توازن أفضل إذا سمح جهازك بذلك.' } },
        { '@type': 'Question', name: 'هل يحتاج نموذج التحكم المنزلي إلى GPU؟', acceptedAnswer: { '@type': 'Answer', text: 'لا لنماذج 4B التي تعمل على CPU أو GPU متكاملة. GPU أو NPU تتيح لك تشغيل نموذج 8B مثل Qwen3 8B بزمن استجابة منخفض.' } },
        { '@type': 'Question', name: 'أي النماذج تدعم استدعاء الدوال؟', acceptedAnswer: { '@type': 'Answer', text: 'النماذج الصغيرة الحديثة بما فيها Qwen3 وGemma 3 وPhi-4-mini لديها دعم مُثبَت لاستدعاء أدوات Home Assistant، مما يتيح لها إصدار إجراءات أجهزة موثوقة.' } },
        { '@type': 'Question', name: 'ما أفضل نموذج لـ Raspberry Pi؟', acceptedAnswer: { '@type': 'Answer', text: 'نموذج 4B مثل Gemma 3 4B أو Qwen3 4B هو السقف العملي على Pi، مع استجابات أبطأ. mini PC مع GPU/NPU يشغّل Qwen3 8B هو مضيف أفضل.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Beste lokale LLM-Modelle für die Smart-Home-Steuerung (2026)',
    seoTitle: 'Beste lokale LLMs für Home Assistant (2026)',
    intro:
      'Die besten lokalen LLM-Modelle für die Smart-Home-Steuerung sind kleine, schnelle, instruktionsfolgende Modelle mit zuverlässigem Function-Calling – nicht das größte Modell, das Ihre Hardware fassen kann. Dieser Leitfaden erklärt, was für die Heimsteuerung wirklich zählt, gibt eine Auswahl geeigneter kleiner Modelle, vergleicht sie und ordnet Empfehlungen Hardware-Budgets zu – und verlinkt für tiefere Modell-Leitfäden, statt das ganze Feld neu zu ordnen.',
    metaDescription:
      'Beste lokale LLMs für Home Assistant 2026: kleine, schnelle Function-Calling-Modelle für bescheidene Hardware. Auswahl nach Budgetstufen.',
    twitterDescription:
      'Beste lokale LLM-Modelle für die Home-Assistant-Steuerung: kleine, schnelle Function-Calling-Modelle statt des größten betreibbaren Modells. Empfehlungen nach Hardware-Budget.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die ein lokales Modell für die Gerätesteuerung wählen',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'bestes lokales llm für home assistant',
      'bestes lokales llm smart home',
      'lokales llm modell heimsteuerung',
      'function calling lokales llm',
      'kleines lokales llm heimautomatisierung',
    ],
    leadAnswerBlock:
      '**Für die Smart-Home-Steuerung wählen Sie ein kleines Instruktionsmodell mit zuverlässigem Function-Calling – ein 3B–8B-Modell ist der Sweet Spot, weil Heimsteuerung niedrige Latenz und strukturierte Ausgabe über rohe Fähigkeit belohnt.** Passen Sie das Modell an Ihre Hardware an, statt das größte verfügbare zu wählen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM für die Smart-Home-Steuerung?',
        answer:
          'Ein kleines, instruktionsfolgendes Modell mit solidem Function-Calling, typischerweise im Bereich 4B bis 8B, passt am besten zur Heimsteuerung, weil es schnell antwortet und zuverlässige Geräteaktionen ausgibt. Modelle wie Gemma 3 4B, Qwen3 4B und Qwen3 8B sind verbreitete, gut unterstützte Wahlen; die richtige Wahl hängt von Ihrer Hardware und Ihren Sprachbedürfnissen ab.',
        bullets: [
          'Priorisieren Sie niedrige Latenz und Function-Calling über Größe',
          '4B-Modelle passen zu stromsparender Hardware; 8B zu einem Mini-PC mit GPU oder NPU',
          'Gemma 3 4B, Qwen3 4B und Phi-4-mini sind verbreitete Ausgangspunkte',
          'Wählen Sie ein Modell mit starker Unterstützung für Ihre gesprochene Sprache',
          'Größere Modelle bringen für einfache Gerätesteuerung wenig',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was für die Heimsteuerung zählt', anchor: 'what-matters' },
      { label: 'Die Auswahl', anchor: 'shortlist' },
      { label: 'Vergleich', anchor: 'comparison' },
      { label: 'Nach Hardware-Budget', anchor: 'by-budget' },
      { label: 'Wie man wählt', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Das beste lokale LLM für die Smart-Home-Steuerung ist ein kleines (3B–8B) Instruktionsmodell mit zuverlässigem Function-Calling, gewählt für niedrige Latenz statt roher Größe.' },
      { type: 'plain-terms', content: 'Ein Zuhause zu steuern braucht kein riesiges Modell – es braucht eines, das schnell antwortet und zuverlässig strukturierte Befehle ausgibt, die der Hub ausführen kann. Kleine Modelle im Bereich 3B bis 8B tun das gut und laufen auf bescheidener Hardware. Die tieferen Modell-Rankings leben im local-llms-Cluster; dieser Leitfaden konzentriert sich auf den Heimsteuerungs-Aspekt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Heimsteuerung belohnt niedrige Latenz und zuverlässiges Function-Calling, nicht maximale Modellgröße',
          'Ein 4B-Modell passt zu stromsparender Hardware; ein 8B-Modell zu einem Mini-PC mit GPU oder NPU',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba) und Qwen3 8B (Alibaba) sind verbreitete, gut unterstützte Wahlen',
          'Qwen3, Gemma 3 und Phi-4-mini haben heute nachgewiesene Home-Assistant-Tool-Calling-Unterstützung',
          'Wählen Sie ein Modell mit starker Unterstützung für die Sprache, die Sie damit sprechen',
          'Für tiefe Modell-Rankings und -Mechanik verlinken Sie auf den local-llms-Cluster',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Was für die Heimsteuerung zählt',
        content:
          '**Drei Dinge entscheiden über ein gutes Heimsteuerungs-Modell: Latenz, zuverlässiges Function-Calling und eine zu Ihrer Hardware passende Größe.** Benchmark-Bestenlisten zählen hier weit weniger als Reaktionsfähigkeit.',
        items: [
          '**Latenz:** Ein Sprachbefehl sollte sich nahezu sofort anfühlen; kleinere Modelle auf fähiger Hardware antworten schneller.',
          '**Function-Calling:** Das Modell muss zuverlässig strukturierte Geräteaktionen ausgeben – das ist die entscheidende Fähigkeit.',
          '**Passung:** Das Modell muss bequem auf dem Gerät laufen, das auch Home Assistant hostet – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'Die Auswahl',
        content:
          '**Diese kleinen Modelle sind verbreitete, gut unterstützte Wahlen für die Heimsteuerung über verschiedene Hardware-Budgets hinweg.** Nutzen Sie ein 4B-Modell auf leichter Hardware und ein 8B-Modell, wenn Sie eine GPU oder NPU haben. Gemma 4 (Juni 2026) ist die neueste Option; Qwen3, Gemma 3 und Phi-4-mini haben heute nachgewiesene Home-Assistant-Tool-Calling-Unterstützung.',
        items: [
          '**Gemma 3 4B (Google):** ein Modell mit 4 Milliarden Parametern mit breiter Mehrsprachigkeit (über 140 Sprachen), eine starke stromsparende Wahl – Ollama-Tag `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** ein schnelles 4B-Modell mit zuverlässigem Tool-Einsatz und guter Mehrsprachigkeit, niedrige Latenz auf einer CPU oder integrierten GPU – `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** ein kompaktes 3,8B-Modell, das beim Instruktionsfolgen über seiner Größe spielt – `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** eine breit unterstützte 3B-Basis, die auf bescheidener Hardware mit gutem Function-Calling läuft – `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** hier die beste Qualität auf einer GPU oder NPU und ein Home-Assistant-Favorit für Tool-Calling – `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Vergleich',
        content:
          '**Wählen Sie nach Hardware und Sprache: kleinere Modelle für reine CPU- oder Pi-Klasse-Hardware, 8B für einen Mini-PC mit GPU.** Die Größen unten sind ungefähr bei üblicher 4-Bit-Quantisierung; der Ollama-Tag ist das exakte Modell zum Laden.',
        columns: ['Modell', 'Parameter', 'Ungef. Bedarf (Q4)', 'Ollama-Tag', 'Am besten für'],
        rows: [
          { 'Modell': 'Gemma 3 4B', 'Parameter': '4B', 'Ungef. Bedarf (Q4)': '~3 GB', 'Ollama-Tag': 'gemma3:4b', 'Am besten für': 'Stromsparender Host, über 140 Sprachen' },
          { 'Modell': 'Qwen3 4B', 'Parameter': '4B', 'Ungef. Bedarf (Q4)': '~2,5–3 GB', 'Ollama-Tag': 'qwen3:4b', 'Am besten für': 'Niedrige Latenz, mehrsprachig, Tools' },
          { 'Modell': 'Phi-4-mini', 'Parameter': '3.8B', 'Ungef. Bedarf (Q4)': '~2,5–3 GB', 'Ollama-Tag': 'phi4-mini', 'Am besten für': 'Starkes Instruktionsfolgen' },
          { 'Modell': 'Llama 3.2 3B', 'Parameter': '3B', 'Ungef. Bedarf (Q4)': '~2–3 GB', 'Ollama-Tag': 'llama3.2:3b', 'Am besten für': 'Breit unterstützte Basis' },
          { 'Modell': 'Qwen3 8B', 'Parameter': '8B', 'Ungef. Bedarf (Q4)': '~5 GB', 'Ollama-Tag': 'qwen3:8b', 'Am besten für': 'Beste Qualität auf GPU/NPU; HA-Favorit' },
        ],
        items: [
          'Die Bedarfe sind ungefähr und hängen von der Quantisierung ab – für VRAM und Quantisierungs-Tiefe verlinken Sie auf den local-llms-Cluster.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Empfehlungen nach Hardware-Budget',
        content:
          '**Wählen Sie ein 4B-Modell auf einem Pi oder reinen CPU-Mini-PC; wählen Sie ein 8B-Modell, wenn Sie eine GPU oder NPU haben.** Das hält Antworten auf jeder Stufe flott.',
        items: [
          '**Raspberry Pi / stromsparend:** Gemma 3 4B oder Qwen3 4B, langsamere Antworten in Kauf nehmend.',
          '**Mini-PC (nur CPU):** Qwen3 4B oder Phi-4-mini als reaktionsschneller Standard.',
          '**Mini-PC mit GPU/NPU:** Qwen3 8B für die beste Qualität bei akzeptabler Latenz – siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Wie man wählt',
        content:
          '**Beginnen Sie mit einem 4B-Modell, bestätigen Sie Latenz und zuverlässige Geräteaktionen, und wechseln Sie nur zu 8B, wenn die Qualität fehlt.** Testen Sie mit Ihren echten Befehlen, bevor Sie sich festlegen.',
        items: [
          'Installieren Sie über die [Ollama-Anbindung](/de/smart-home/home-assistant-ollama-integration) und testen Sie Ihre üblichen Befehle.',
          'Sind die Antworten langsam, gehen Sie eine Größe herunter oder fügen Sie eine GPU/NPU hinzu.',
          'Sind die Aktionen unzuverlässig, bevorzugen Sie ein Modell, das für Function-Calling bekannt ist.',
          'Für tiefe Modell-Rankings und -Mechanik siehe [beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) (clusterübergreifend) – dieser Leitfaden bleibt heimsteuerungsspezifisch.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Was ist das kleinste nutzbare Modell für die Heimsteuerung?', a: 'Ein 3B-Modell wie Llama 3.2 3B ist die praktische Untergrenze für zuverlässige Gerätesteuerung auf stromsparender Hardware und tauscht etwas Verständnis gegen Tempo. Ein 4B-Modell wie Gemma 3 4B oder Qwen3 4B ist die bessere Balance, wenn Ihre Hardware es erlaubt.' },
          { q: 'Braucht ein Heimsteuerungs-Modell eine GPU?', a: 'Nein für 4B-Modelle, die auf CPU oder einer integrierten GPU laufen. Eine GPU oder NPU lässt Sie vor allem ein 8B-Modell wie Qwen3 8B bei niedriger Latenz für besseres Verständnis betreiben. Passen Sie das Modell an Ihre Hardware an.' },
          { q: 'Welche Modelle unterstützen Function-Calling?', a: 'Moderne kleine Modelle wie Qwen3, Gemma 3 und Phi-4-mini haben nachgewiesene Home-Assistant-Tool-/Function-Calling-Unterstützung, die Fähigkeit, mit der sie zuverlässige Geräteaktionen ausgeben. Bevorzugen Sie für die Heimsteuerung ein Modell, das dies dokumentiert unterstützt.' },
          { q: 'Was ist das beste Modell für einen Raspberry Pi?', a: 'Ein 4B-Modell wie Gemma 3 4B oder Qwen3 4B ist die praktische Obergrenze auf einem Raspberry Pi, und die Antworten sind langsamer als auf einem Mini-PC. Für einen flotten Assistenten ist ein Mini-PC mit GPU/NPU, der Qwen3 8B betreibt, der bessere Host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – das gewählte Modell installieren und testen',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – die vollständige Architektur',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Modellgröße an Hardware anpassen',
          '[Beste lokale LLMs 2026](/de/local-llms/best-local-llms-2026) – clusterübergreifend: tiefe Modell-Rankings',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste lokale LLM-Modelle für die Smart-Home-Steuerung (2026)',
      description: 'Beste lokale LLMs für Home Assistant 2026: kleine, schnelle Function-Calling-Modelle für bescheidene Hardware. Auswahl nach Budgetstufen.',
      url: 'https://www.promptquorum.com/de/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Lokales LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Function Calling' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist das kleinste nutzbare Modell für die Heimsteuerung?', acceptedAnswer: { '@type': 'Answer', text: 'Ein 3B-Modell wie Llama 3.2 3B ist die praktische Untergrenze für zuverlässige Gerätesteuerung auf stromsparender Hardware. Ein 4B-Modell wie Gemma 3 4B oder Qwen3 4B ist eine bessere Balance, wenn Ihre Hardware es erlaubt.' } },
        { '@type': 'Question', name: 'Braucht ein Heimsteuerungs-Modell eine GPU?', acceptedAnswer: { '@type': 'Answer', text: 'Nein für 4B-Modelle, die auf CPU oder integrierter GPU laufen. Eine GPU oder NPU lässt Sie vor allem ein 8B-Modell wie Qwen3 8B bei niedriger Latenz betreiben.' } },
        { '@type': 'Question', name: 'Welche Modelle unterstützen Function-Calling?', acceptedAnswer: { '@type': 'Answer', text: 'Moderne kleine Modelle wie Qwen3, Gemma 3 und Phi-4-mini haben nachgewiesene Home-Assistant-Tool-/Function-Calling-Unterstützung, was ihnen zuverlässige Geräteaktionen erlaubt.' } },
        { '@type': 'Question', name: 'Was ist das beste Modell für einen Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Ein 4B-Modell wie Gemma 3 4B oder Qwen3 4B ist die praktische Obergrenze auf einem Pi, mit langsameren Antworten. Ein Mini-PC mit GPU/NPU, der Qwen3 8B betreibt, ist ein besserer Host.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Mejores Modelos LLM Locales para el Control del Smart Home (2026)',
    seoTitle: 'Mejores LLM Locales para Home Assistant (2026)',
    intro:
      'Los mejores modelos LLM locales para el control del smart home son modelos pequeños, rápidos y que siguen instrucciones con llamada a funciones fiable, no el modelo más grande que tu hardware pueda contener. Esta guía explica qué importa de verdad para el control del hogar, da una lista corta de modelos pequeños adecuados, los compara y asigna opciones a presupuestos de hardware, enlazando a guías de modelos más profundas en vez de reordenar todo el campo.',
    metaDescription:
      'Mejores LLMs locales para Home Assistant 2026: modelos 3B–8B con llamada a funciones para hardware modesto. Lista y recomendaciones por presupuesto.',
    twitterDescription:
      'Mejores modelos LLM locales para el control con Home Assistant: modelos pequeños, rápidos y con llamada a funciones sobre el modelo más grande que puedas ejecutar. Opciones por presupuesto.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que eligen un modelo local para el control de dispositivos',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'mejor llm local para home assistant',
      'mejor llm local smart home',
      'modelo llm local control hogar',
      'llamada a funciones llm local',
      'llm local pequeño domótica',
    ],
    leadAnswerBlock:
      '**Para el control del smart home, elige un modelo de instrucciones pequeño con llamada a funciones fiable — un modelo de 3B–8B es el punto óptimo, porque el control del hogar premia la baja latencia y la salida estructurada sobre la capacidad bruta.** Ajusta el modelo a tu hardware en vez de elegir el más grande disponible.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para el control del smart home?',
        answer:
          'Un modelo pequeño que siga instrucciones con sólida llamada a funciones, normalmente en el rango de 4B a 8B, es el mejor ajuste para el control del hogar porque responde rápido y emite acciones de dispositivo fiables. Modelos como Gemma 3 4B, Qwen3 4B y Qwen3 8B son opciones comunes y bien soportadas; la elección correcta depende de tu hardware y tus necesidades de idioma.',
        bullets: [
          'Prioriza baja latencia y llamada a funciones sobre el tamaño',
          'Los modelos 4B se ajustan a hardware de bajo consumo; 8B a un mini PC con GPU o NPU',
          'Gemma 3 4B, Qwen3 4B y Phi-4-mini son puntos de partida comunes',
          'Elige un modelo con fuerte soporte de tu idioma hablado',
          'Los modelos más grandes añaden poco para el control simple de dispositivos',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué importa para el control del hogar', anchor: 'what-matters' },
      { label: 'La lista corta', anchor: 'shortlist' },
      { label: 'Comparación', anchor: 'comparison' },
      { label: 'Por presupuesto de hardware', anchor: 'by-budget' },
      { label: 'Cómo elegir', anchor: 'how-to-pick' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El mejor LLM local para el control del smart home es un modelo de instrucciones pequeño (3B–8B) con llamada a funciones fiable, elegido por baja latencia sobre tamaño bruto.' },
      { type: 'plain-terms', content: 'Controlar un hogar no necesita un modelo gigante — necesita uno que responda rápido y emita de forma fiable comandos estructurados que el hub pueda ejecutar. Los modelos pequeños en el rango de 3B a 8B lo hacen bien y corren en hardware modesto. Los rankings de modelos más profundos viven en el clúster local-llms; esta guía se centra en el ángulo del control del hogar.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'El control del hogar premia la baja latencia y la llamada a funciones fiable, no el tamaño máximo de modelo',
          'Un modelo 4B se ajusta a hardware de bajo consumo; un modelo 8B a un mini PC con GPU o NPU',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba) y Qwen3 8B (Alibaba) son opciones comunes y bien soportadas',
          'Qwen3, Gemma 3 y Phi-4-mini tienen soporte probado de tool-calling en Home Assistant hoy',
          'Elige un modelo con fuerte soporte del idioma en que le hablas',
          'Para rankings y mecánica de modelos profundos, enlaza al clúster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Qué importa para el control del hogar',
        content:
          '**Tres cosas deciden un buen modelo de control del hogar: latencia, llamada a funciones fiable y un tamaño que se ajuste a tu hardware.** Las tablas de líderes de benchmarks importan mucho menos aquí que la capacidad de respuesta.',
        items: [
          '**Latencia:** un comando de voz debería sentirse casi instantáneo; los modelos más pequeños en hardware capaz responden más rápido.',
          '**Llamada a funciones:** el modelo debe emitir acciones de dispositivo estructuradas de forma fiable — esta es la capacidad decisiva.',
          '**Ajuste:** el modelo debe correr cómodamente en el equipo que también aloja Home Assistant — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'La lista corta',
        content:
          '**Estos modelos pequeños son opciones comunes y bien soportadas para el control del hogar en distintos presupuestos de hardware.** Usa un modelo 4B en hardware ligero y un modelo 8B cuando tengas una GPU o NPU. Gemma 4 (junio de 2026) es la opción más nueva; Qwen3, Gemma 3 y Phi-4-mini tienen soporte probado de tool-calling en Home Assistant hoy.',
        items: [
          '**Gemma 3 4B (Google):** un modelo de 4 mil millones de parámetros con amplia cobertura multilingüe (más de 140 idiomas), una fuerte opción de bajo consumo — etiqueta de Ollama `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** un modelo 4B rápido con uso fiable de herramientas y buen soporte multilingüe, baja latencia en una CPU o GPU integrada — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** un modelo compacto de 3.8B que rinde por encima de su tamaño en seguimiento de instrucciones — `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** una base 3B ampliamente soportada que corre en hardware modesto con buena llamada a funciones — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** aquí la mejor calidad en una GPU o NPU y un favorito de Home Assistant para tool-calling — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparación',
        content:
          '**Elige por hardware e idioma: modelos más pequeños para hardware solo-CPU o de clase Pi, 8B para un mini PC con GPU.** Los tamaños de abajo son aproximados con la cuantización común de 4 bits; la etiqueta de Ollama es el modelo exacto a descargar.',
        columns: ['Modelo', 'Parámetros', 'Huella aprox. (Q4)', 'Etiqueta Ollama', 'Mejor para'],
        rows: [
          { 'Modelo': 'Gemma 3 4B', 'Parámetros': '4B', 'Huella aprox. (Q4)': '~3 GB', 'Etiqueta Ollama': 'gemma3:4b', 'Mejor para': 'Host de bajo consumo, más de 140 idiomas' },
          { 'Modelo': 'Qwen3 4B', 'Parámetros': '4B', 'Huella aprox. (Q4)': '~2,5–3 GB', 'Etiqueta Ollama': 'qwen3:4b', 'Mejor para': 'Baja latencia, multilingüe, herramientas' },
          { 'Modelo': 'Phi-4-mini', 'Parámetros': '3.8B', 'Huella aprox. (Q4)': '~2,5–3 GB', 'Etiqueta Ollama': 'phi4-mini', 'Mejor para': 'Fuerte seguimiento de instrucciones' },
          { 'Modelo': 'Llama 3.2 3B', 'Parámetros': '3B', 'Huella aprox. (Q4)': '~2–3 GB', 'Etiqueta Ollama': 'llama3.2:3b', 'Mejor para': 'Base ampliamente soportada' },
          { 'Modelo': 'Qwen3 8B', 'Parámetros': '8B', 'Huella aprox. (Q4)': '~5 GB', 'Etiqueta Ollama': 'qwen3:8b', 'Mejor para': 'Mejor calidad en GPU/NPU; favorito de HA' },
        ],
        items: [
          'Las huellas son aproximadas y dependen de la cuantización — para VRAM y profundidad de cuantización, enlaza al clúster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Opciones por presupuesto de hardware',
        content:
          '**Elige un modelo 4B en una Pi o mini PC solo-CPU; elige un modelo 8B cuando tengas una GPU o NPU.** Esto mantiene las respuestas ágiles en cada nivel.',
        items: [
          '**Raspberry Pi / bajo consumo:** Gemma 3 4B o Qwen3 4B, aceptando respuestas más lentas.',
          '**Mini PC (solo CPU):** Qwen3 4B o Phi-4-mini como predeterminado con buena respuesta.',
          '**Mini PC con GPU/NPU:** Qwen3 8B para la mejor calidad con latencia aceptable — consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Cómo elegir',
        content:
          '**Empieza con un modelo 4B, confirma la latencia y las acciones de dispositivo fiables, y pasa a 8B solo si falta calidad.** Prueba con tus comandos reales antes de comprometerte.',
        items: [
          'Instala mediante la [integración de Ollama](/es/smart-home/home-assistant-ollama-integration) y prueba tus comandos comunes.',
          'Si las respuestas son lentas, baja un tamaño o añade una GPU/NPU.',
          'Si las acciones no son fiables, prefiere un modelo conocido por la llamada a funciones.',
          'Para rankings y mecánica de modelos profundos, consulta [mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) (entre clústeres) — esta guía se mantiene específica del control del hogar.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el modelo usable más pequeño para el control del hogar?', a: 'Un modelo 3B como Llama 3.2 3B es el suelo práctico para un control de dispositivos fiable en hardware de bajo consumo, cambiando algo de comprensión por velocidad. Un modelo 4B como Gemma 3 4B o Qwen3 4B es el mejor equilibrio si tu hardware lo permite.' },
          { q: '¿Necesita una GPU un modelo de control del hogar?', a: 'No para modelos 4B, que corren en CPU o una GPU integrada. Una GPU o NPU principalmente te permite ejecutar un modelo 8B como Qwen3 8B con baja latencia para mejor comprensión. Ajusta el modelo a tu hardware.' },
          { q: '¿Qué modelos admiten llamada a funciones?', a: 'Los modelos pequeños modernos, incluidos Qwen3, Gemma 3 y Phi-4-mini, tienen soporte probado de tool/function-calling en Home Assistant, que es la capacidad que les permite emitir acciones de dispositivo fiables. Prefiere un modelo documentado para soportarla en el control del hogar.' },
          { q: '¿Cuál es el mejor modelo para una Raspberry Pi?', a: 'Un modelo 4B como Gemma 3 4B o Qwen3 4B es el techo práctico en una Raspberry Pi, y las respuestas serán más lentas que en un mini PC. Para un asistente ágil, un mini PC con GPU/NPU ejecutando Qwen3 8B es el mejor host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — instala y prueba tu modelo elegido',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la arquitectura completa',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — ajusta el tamaño del modelo al hardware',
          '[Mejores LLM locales 2026](/es/local-llms/best-local-llms-2026) — entre clústeres: rankings de modelos profundos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores Modelos LLM Locales para el Control del Smart Home (2026)',
      description: 'Mejores LLMs locales para Home Assistant 2026: modelos 3B–8B con llamada a funciones para hardware modesto. Lista y recomendaciones por presupuesto.',
      url: 'https://www.promptquorum.com/es/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Llamada a funciones' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuál es el modelo usable más pequeño para el control del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo 3B como Llama 3.2 3B es el suelo práctico para un control de dispositivos fiable en hardware de bajo consumo. Un modelo 4B como Gemma 3 4B o Qwen3 4B es un mejor equilibrio si tu hardware lo permite.' } },
        { '@type': 'Question', name: '¿Necesita una GPU un modelo de control del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'No para modelos 4B, que corren en CPU o GPU integrada. Una GPU o NPU principalmente te permite ejecutar un modelo 8B como Qwen3 8B con baja latencia.' } },
        { '@type': 'Question', name: '¿Qué modelos admiten llamada a funciones?', acceptedAnswer: { '@type': 'Answer', text: 'Los modelos pequeños modernos como Qwen3, Gemma 3 y Phi-4-mini tienen soporte probado de tool/function-calling en Home Assistant, que les permite emitir acciones de dispositivo fiables.' } },
        { '@type': 'Question', name: '¿Cuál es el mejor modelo para una Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo 4B como Gemma 3 4B o Qwen3 4B es el techo práctico en una Pi, con respuestas más lentas. Un mini PC con GPU/NPU ejecutando Qwen3 8B es un mejor host.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '스마트 홈 제어를 위한 최고의 로컬 LLM 모델 (2026)',
    seoTitle: 'Home Assistant를 위한 최고의 로컬 LLM (2026)',
    intro:
      '스마트 홈 제어를 위한 최고의 로컬 LLM 모델은 신뢰할 수 있는 함수 호출 기능을 갖춘 소형 고속 명령 이행 모델입니다. 하드웨어가 수용할 수 있는 가장 큰 모델이 아닙니다. 이 가이드는 홈 제어에 실제로 중요한 것을 설명하고, 적합한 소형 모델의 단축 목록을 제공하며, 비교하고, 하드웨어 예산별 선택을 제시합니다. 전 분야를 재순위화하는 대신 더 깊은 모델 가이드로 링크합니다.',
    metaDescription:
      '2026년 스마트 홈 제어를 위한 최고의 로컬 LLM: 평범한 하드웨어에서 실행되는 소형 고속 함수 호출 모델. 단축 목록 및 예산별 선택.',
    twitterDescription:
      'Home Assistant 제어를 위한 최고의 로컬 LLM 모델: 실행 가능한 가장 큰 모델보다 소형 고속 함수 호출 모델을 우선시하십시오. 하드웨어 예산별 선택.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '장치 제어를 위한 로컬 모델을 선택하는 Home Assistant 사용자',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'home assistant 최고의 로컬 LLM',
      '스마트 홈 최고의 로컬 LLM',
      '홈 제어 로컬 LLM 모델',
      '함수 호출 로컬 LLM',
      '홈 자동화 소형 로컬 LLM',
    ],
    leadAnswerBlock:
      '**스마트 홈 제어에는 신뢰할 수 있는 함수 호출 기능을 갖춘 소형 명령 이행 모델을 선택하십시오. 3B~8B 모델이 최적입니다. 홈 제어는 원시 성능보다 낮은 지연 시간과 구조화된 출력을 필요로 하기 때문입니다.** 사용 가능한 가장 큰 모델을 선택하는 대신 하드웨어에 맞는 모델을 선택하십시오.',
    quickAnswerTop: {
      ko: {
        question: '스마트 홈 제어에 가장 적합한 로컬 LLM은 무엇입니까?',
        answer:
          '단단한 함수 호출 기능을 갖춘 소형 명령 이행 모델, 일반적으로 4B~8B 범위의 모델이 홈 제어에 가장 적합합니다. 빠르게 응답하고 신뢰할 수 있는 장치 동작을 출력하기 때문입니다. Gemma 3 4B, Qwen3 4B, Qwen3 8B 같은 모델이 일반적이고 잘 지원되는 선택입니다. 올바른 선택은 하드웨어와 언어 요구 사항에 따라 다릅니다.',
        bullets: [
          '크기보다 낮은 지연 시간과 함수 호출을 우선시하십시오',
          '4B 모델은 저전력 하드웨어에 적합하고 8B는 GPU 또는 NPU가 있는 미니 PC에 적합합니다',
          'Gemma 3 4B, Qwen3 4B, Phi-4-mini가 일반적인 시작점입니다',
          '사용하는 언어를 강하게 지원하는 모델을 선택하십시오',
          '대형 모델은 단순한 장치 제어에 거의 도움이 되지 않습니다',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '홈 제어에 중요한 것', anchor: 'what-matters' },
      { label: '단축 목록', anchor: 'shortlist' },
      { label: '비교', anchor: 'comparison' },
      { label: '하드웨어 예산별', anchor: 'by-budget' },
      { label: '선택 방법', anchor: 'how-to-pick' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '스마트 홈 제어를 위한 최고의 로컬 LLM은 낮은 지연 시간을 위해 선택된 신뢰할 수 있는 함수 호출 기능을 갖춘 소형(3B~8B) 명령 이행 모델입니다.' },
      { type: 'plain-terms', content: '홈 제어에는 거대한 모델이 필요하지 않습니다. 빠르게 응답하고 허브가 실행할 수 있는 구조화된 명령을 안정적으로 출력하는 모델이 필요합니다. 3B~8B 범위의 소형 모델이 이를 잘 수행하고 평범한 하드웨어에서 실행됩니다. 더 깊은 모델 순위는 local-llms 클러스터에 있습니다. 이 가이드는 홈 제어 측면에 집중합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          '홈 제어는 최대 모델 크기가 아닌 낮은 지연 시간과 신뢰할 수 있는 함수 호출을 필요로 합니다',
          '4B 모델은 저전력 하드웨어에 적합하고 8B 모델은 GPU 또는 NPU가 있는 미니 PC에 적합합니다',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba), Qwen3 8B (Alibaba)가 일반적이고 잘 지원되는 선택입니다',
          'Qwen3, Gemma 3, Phi-4-mini는 현재 Home Assistant 툴 호출 지원이 검증되어 있습니다',
          '사용하는 언어를 강하게 지원하는 모델을 선택하십시오',
          '깊은 모델 순위와 메커니즘은 local-llms 클러스터로 연결하십시오',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: '홈 제어에 중요한 것',
        content:
          '**좋은 홈 제어 모델을 결정하는 세 가지: 지연 시간, 신뢰할 수 있는 함수 호출, 하드웨어에 맞는 크기입니다.** 벤치마크 리더보드는 반응성보다 훨씬 덜 중요합니다.',
        items: [
          '**지연 시간:** 음성 명령이 거의 즉각적으로 느껴져야 합니다. 고성능 하드웨어의 소형 모델이 더 빠르게 응답합니다.',
          '**함수 호출:** 모델이 구조화된 장치 동작을 안정적으로 출력해야 합니다. 이것이 결정적인 능력입니다.',
          '**적합성:** 모델이 Home Assistant를 호스팅하는 기기에서 편안하게 실행되어야 합니다. [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: '단축 목록',
        content:
          '**이 소형 모델들은 다양한 하드웨어 예산에서 홈 제어에 일반적이고 잘 지원되는 선택입니다.** 경량 하드웨어에는 4B 모델을, GPU 또는 NPU가 있을 때는 8B 모델을 사용하십시오. Gemma 4 (2026년 6월)가 최신 옵션입니다. Qwen3, Gemma 3, Phi-4-mini는 현재 Home Assistant 툴 호출 지원이 검증되어 있습니다.',
        items: [
          '**Gemma 3 4B (Google):** 광범위한 다국어 지원(140개 이상 언어)을 갖춘 40억 매개변수 모델로 강력한 저전력 선택입니다 — Ollama 태그 `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** 신뢰할 수 있는 툴 사용과 우수한 다국어 지원을 갖춘 빠른 4B 모델로 CPU 또는 내장 GPU에서 낮은 지연 시간 — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** 명령 이행에서 크기 이상의 성능을 발휘하는 컴팩트한 3.8B 모델 — `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** 우수한 함수 호출로 평범한 하드웨어에서 실행되는 광범위하게 지원되는 3B 기준 모델 — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** GPU 또는 NPU에서 최고의 품질, Home Assistant 툴 호출의 선호 모델 — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '비교',
        content:
          '**하드웨어와 언어로 선택하십시오: CPU 전용 또는 Pi급 하드웨어에는 소형 모델, GPU 탑재 미니 PC에는 8B.** 아래 크기는 일반적인 4비트 양자화에서 근사치입니다. Ollama 태그가 다운로드할 정확한 모델입니다.',
        columns: ['모델', '매개변수', '근사 풋프린트 (Q4)', 'Ollama 태그', '최적 용도'],
        rows: [
          { '모델': 'Gemma 3 4B', '매개변수': '4B', '근사 풋프린트 (Q4)': '~3 GB', 'Ollama 태그': 'gemma3:4b', '최적 용도': '저전력 호스트, 140개 이상 언어' },
          { '모델': 'Qwen3 4B', '매개변수': '4B', '근사 풋프린트 (Q4)': '~2.5–3 GB', 'Ollama 태그': 'qwen3:4b', '최적 용도': '낮은 지연 시간, 다국어, 툴' },
          { '모델': 'Phi-4-mini', '매개변수': '3.8B', '근사 풋프린트 (Q4)': '~2.5–3 GB', 'Ollama 태그': 'phi4-mini', '최적 용도': '강력한 명령 이행' },
          { '모델': 'Llama 3.2 3B', '매개변수': '3B', '근사 풋프린트 (Q4)': '~2–3 GB', 'Ollama 태그': 'llama3.2:3b', '최적 용도': '광범위하게 지원되는 기준 모델' },
          { '모델': 'Qwen3 8B', '매개변수': '8B', '근사 풋프린트 (Q4)': '~5 GB', 'Ollama 태그': 'qwen3:8b', '최적 용도': 'GPU/NPU에서 최고 품질; HA 선호 모델' },
        ],
        items: [
          '풋프린트는 근사치이며 양자화에 따라 달라집니다. VRAM 및 양자화 심도는 local-llms 클러스터로 연결하십시오.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: '하드웨어 예산별 선택',
        content:
          '**Pi 또는 CPU 전용 미니 PC에는 4B 모델, GPU 또는 NPU가 있을 때는 8B 모델을 선택하십시오.** 이렇게 하면 모든 계층에서 응답이 빠릅니다.',
        items: [
          '**Raspberry Pi / 저전력:** 더 느린 응답을 감수하고 Gemma 3 4B 또는 Qwen3 4B.',
          '**미니 PC (CPU 전용):** 반응이 빠른 기본값으로 Qwen3 4B 또는 Phi-4-mini.',
          '**GPU/NPU 탑재 미니 PC:** 허용 가능한 지연 시간으로 최고의 품질을 위해 Qwen3 8B — [Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)를 참조하십시오.',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: '선택 방법',
        content:
          '**4B 모델로 시작하여 지연 시간과 신뢰할 수 있는 장치 동작을 확인하고, 품질이 부족한 경우에만 8B로 전환하십시오.** 결정하기 전에 실제 명령으로 테스트하십시오.',
        items: [
          '[Ollama 통합](/ko/smart-home/home-assistant-ollama-integration)을 통해 설치하고 일반적인 명령을 테스트하십시오.',
          '응답이 느리면 크기를 줄이거나 GPU/NPU를 추가하십시오.',
          '동작이 불안정하면 함수 호출로 알려진 모델을 선호하십시오.',
          '깊은 모델 순위와 메커니즘은 [최고의 로컬 LLM 2026](/ko/local-llms/best-local-llms-2026)(크로스 클러스터)를 참조하십시오. 이 가이드는 홈 제어 특화입니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '홈 제어에 사용 가능한 가장 소형 모델은 무엇입니까?', a: 'Llama 3.2 3B 같은 3B 모델은 저전력 하드웨어에서 신뢰할 수 있는 장치 제어를 위한 실용적인 최저선입니다. 일부 이해력을 속도와 교환합니다. 하드웨어가 허용한다면 Gemma 3 4B나 Qwen3 4B 같은 4B 모델이 더 나은 균형입니다.' },
          { q: '홈 제어 모델에 GPU가 필요합니까?', a: 'CPU 또는 내장 GPU에서 실행되는 4B 모델에는 필요하지 않습니다. GPU 또는 NPU는 주로 더 나은 이해를 위해 낮은 지연 시간으로 Qwen3 8B 같은 8B 모델을 실행할 수 있게 합니다. 하드웨어에 맞는 모델을 선택하십시오.' },
          { q: '어떤 모델이 함수 호출을 지원합니까?', a: 'Qwen3, Gemma 3, Phi-4-mini를 포함한 현대 소형 모델은 신뢰할 수 있는 장치 동작을 출력할 수 있는 능력인 Home Assistant 툴/함수 호출 지원이 검증되어 있습니다. 홈 제어에는 이를 지원하는 것으로 문서화된 모델을 선호하십시오.' },
          { q: 'Raspberry Pi에 가장 적합한 모델은 무엇입니까?', a: 'Gemma 3 4B나 Qwen3 4B 같은 4B 모델이 Raspberry Pi의 실용적인 상한선이며 응답이 미니 PC보다 느립니다. 빠른 어시스턴트를 원한다면 GPU/NPU로 Qwen3 8B를 실행하는 미니 PC가 더 나은 호스트입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — 선택한 모델 설치 및 테스트',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 전체 아키텍처',
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 모델 크기를 하드웨어에 맞추기',
          '[최고의 로컬 LLM 2026](/ko/local-llms/best-local-llms-2026) — 크로스 클러스터: 깊은 모델 순위',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트 홈 제어를 위한 최고의 로컬 LLM 모델 (2026)',
      description: '2026년 스마트 홈 제어를 위한 최고의 로컬 LLM: 평범한 하드웨어에서 실행되는 소형 고속 함수 호출 모델. 단축 목록 및 예산별 선택.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: '로컬 LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '함수 호출' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '홈 제어에 사용 가능한 가장 소형 모델은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Llama 3.2 3B 같은 3B 모델이 저전력 하드웨어에서 신뢰할 수 있는 장치 제어를 위한 실용적인 최저선입니다. 하드웨어가 허용한다면 Gemma 3 4B나 Qwen3 4B 같은 4B 모델이 더 나은 균형입니다.' } },
        { '@type': 'Question', name: '홈 제어 모델에 GPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'CPU 또는 내장 GPU에서 실행되는 4B 모델에는 필요하지 않습니다. GPU 또는 NPU는 주로 낮은 지연 시간으로 Qwen3 8B 같은 8B 모델을 실행할 수 있게 합니다.' } },
        { '@type': 'Question', name: '어떤 모델이 함수 호출을 지원합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3, Gemma 3, Phi-4-mini를 포함한 현대 소형 모델은 신뢰할 수 있는 장치 동작을 출력할 수 있는 Home Assistant 툴/함수 호출 지원이 검증되어 있습니다.' } },
        { '@type': 'Question', name: 'Raspberry Pi에 가장 적합한 모델은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Gemma 3 4B나 Qwen3 4B 같은 4B 모델이 Pi의 실용적인 상한선이며 응답이 더 느립니다. GPU/NPU로 Qwen3 8B를 실행하는 미니 PC가 더 나은 호스트입니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Meilleurs Modèles LLM Locaux pour le Contrôle de la Maison Connectée (2026)',
    seoTitle: 'Meilleurs LLM Locaux pour Home Assistant (2026)',
    intro:
      'Les meilleurs modèles LLM locaux pour le contrôle de la maison connectée sont des modèles petits, rapides et suivant les instructions, avec un appel de fonctions fiable — pas le plus gros modèle que votre matériel peut contenir. Ce guide explique ce qui compte vraiment pour le contrôle de la maison, donne une liste restreinte de petits modèles adaptés, les compare et associe des choix aux budgets matériels, en renvoyant vers des guides de modèles plus approfondis plutôt que de reclasser tout le domaine.',
    metaDescription:
      'Meilleurs LLM locaux 2026 pour la maison connectée : modèles petits à appel de fonctions, faible latence. Liste restreinte et choix par budget.',
    twitterDescription:
      'Meilleurs modèles LLM locaux pour le contrôle avec Home Assistant : des modèles petits, rapides et à appel de fonctions plutôt que le plus gros modèle exécutable. Choix par budget matériel.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant choisissant un modèle local pour le contrôle des appareils',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'meilleur llm local pour home assistant',
      'meilleur llm local maison connectée',
      'modèle llm local contrôle maison',
      'appel de fonctions llm local',
      'petit llm local domotique',
    ],
    leadAnswerBlock:
      '**Pour le contrôle de la maison connectée, choisissez un petit modèle d\'instructions avec un appel de fonctions fiable — un modèle de 3B–8B est le point idéal, car le contrôle de la maison récompense la faible latence et la sortie structurée plutôt que la capacité brute.** Adaptez le modèle à votre matériel au lieu de choisir le plus gros disponible.',
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour le contrôle de la maison connectée ?',
        answer:
          'Un petit modèle suivant les instructions avec un solide appel de fonctions, typiquement dans la plage 4B à 8B, est le meilleur choix pour le contrôle de la maison car il répond vite et émet des actions d\'appareil fiables. Des modèles comme Gemma 3 4B, Qwen3 4B et Qwen3 8B sont des choix courants et bien pris en charge ; le bon choix dépend de votre matériel et de vos besoins linguistiques.',
        bullets: [
          'Priorisez la faible latence et l\'appel de fonctions plutôt que la taille',
          'Les modèles 4B conviennent au matériel basse consommation ; 8B à un mini-PC avec GPU ou NPU',
          'Gemma 3 4B, Qwen3 4B et Phi-4-mini sont des points de départ courants',
          'Choisissez un modèle avec un solide support de votre langue parlée',
          'Les plus gros modèles apportent peu pour le contrôle simple d\'appareils',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce qui compte pour le contrôle de la maison', anchor: 'what-matters' },
      { label: 'La liste restreinte', anchor: 'shortlist' },
      { label: 'Comparaison', anchor: 'comparison' },
      { label: 'Par budget matériel', anchor: 'by-budget' },
      { label: 'Comment choisir', anchor: 'how-to-pick' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le meilleur LLM local pour le contrôle de la maison connectée est un petit modèle d\'instructions (3B–8B) à appel de fonctions fiable, choisi pour la faible latence plutôt que la taille brute.' },
      { type: 'plain-terms', content: 'Contrôler une maison ne nécessite pas un modèle géant — il en faut un qui réponde vite et émette de façon fiable des commandes structurées que le hub peut exécuter. Les petits modèles de 3B à 8B le font bien et tournent sur du matériel modeste. Les classements de modèles plus approfondis vivent dans le cluster local-llms ; ce guide se concentre sur l\'angle du contrôle de la maison.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Le contrôle de la maison récompense la faible latence et l\'appel de fonctions fiable, pas la taille maximale du modèle',
          'Un modèle 4B convient au matériel basse consommation ; un modèle 8B à un mini-PC avec GPU ou NPU',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba) et Qwen3 8B (Alibaba) sont des choix courants et bien pris en charge',
          'Qwen3, Gemma 3 et Phi-4-mini ont un support de tool-calling Home Assistant prouvé aujourd\'hui',
          'Choisissez un modèle avec un solide support de la langue que vous lui parlez',
          'Pour des classements et une mécanique de modèles approfondis, renvoyez vers le cluster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'Ce qui compte pour le contrôle de la maison',
        content:
          '**Trois choses décident d\'un bon modèle de contrôle de la maison : la latence, l\'appel de fonctions fiable et une taille qui correspond à votre matériel.** Les classements de benchmarks comptent bien moins ici que la réactivité.',
        items: [
          '**Latence :** une commande vocale doit sembler quasi instantanée ; les modèles plus petits sur du matériel capable répondent plus vite.',
          '**Appel de fonctions :** le modèle doit émettre des actions d\'appareil structurées de façon fiable — c\'est la capacité décisive.',
          '**Adéquation :** le modèle doit tourner confortablement sur la machine qui héberge aussi Home Assistant — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'La liste restreinte',
        content:
          '**Ces petits modèles sont des choix courants et bien pris en charge pour le contrôle de la maison à travers différents budgets matériels.** Utilisez un modèle 4B sur du matériel léger et un modèle 8B quand vous avez un GPU ou un NPU. Gemma 4 (juin 2026) est l\'option la plus récente ; Qwen3, Gemma 3 et Phi-4-mini ont un support de tool-calling Home Assistant prouvé aujourd\'hui.',
        items: [
          '**Gemma 3 4B (Google) :** un modèle de 4 milliards de paramètres à large couverture multilingue (plus de 140 langues), un solide choix basse consommation — tag Ollama `gemma3:4b`.',
          '**Qwen3 4B (Alibaba) :** un modèle 4B rapide avec un usage d\'outils fiable et un bon support multilingue, faible latence sur un CPU ou un GPU intégré — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft) :** un modèle compact de 3,8B qui dépasse sa taille en suivi des instructions — `phi4-mini`.',
          '**Llama 3.2 3B (Meta) :** une base 3B largement prise en charge qui tourne sur du matériel modeste avec un bon appel de fonctions — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba) :** ici la meilleure qualité sur un GPU ou un NPU et un favori de Home Assistant pour le tool-calling — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparaison',
        content:
          '**Choisissez par matériel et langue : des modèles plus petits pour du matériel CPU seul ou de classe Pi, 8B pour un mini-PC équipé d\'un GPU.** Les tailles ci-dessous sont approximatives à la quantification courante de 4 bits ; le tag Ollama est le modèle exact à télécharger.',
        columns: ['Modèle', 'Paramètres', 'Empreinte approx. (Q4)', 'Tag Ollama', 'Idéal pour'],
        rows: [
          { 'Modèle': 'Gemma 3 4B', 'Paramètres': '4B', 'Empreinte approx. (Q4)': '~3 Go', 'Tag Ollama': 'gemma3:4b', 'Idéal pour': 'Hôte basse consommation, plus de 140 langues' },
          { 'Modèle': 'Qwen3 4B', 'Paramètres': '4B', 'Empreinte approx. (Q4)': '~2,5–3 Go', 'Tag Ollama': 'qwen3:4b', 'Idéal pour': 'Faible latence, multilingue, outils' },
          { 'Modèle': 'Phi-4-mini', 'Paramètres': '3.8B', 'Empreinte approx. (Q4)': '~2,5–3 Go', 'Tag Ollama': 'phi4-mini', 'Idéal pour': 'Fort suivi des instructions' },
          { 'Modèle': 'Llama 3.2 3B', 'Paramètres': '3B', 'Empreinte approx. (Q4)': '~2–3 Go', 'Tag Ollama': 'llama3.2:3b', 'Idéal pour': 'Base largement prise en charge' },
          { 'Modèle': 'Qwen3 8B', 'Paramètres': '8B', 'Empreinte approx. (Q4)': '~5 Go', 'Tag Ollama': 'qwen3:8b', 'Idéal pour': 'Meilleure qualité sur GPU/NPU ; favori de HA' },
        ],
        items: [
          'Les empreintes sont approximatives et dépendent de la quantification — pour la VRAM et la profondeur de quantification, renvoyez vers le cluster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Choix par budget matériel',
        content:
          '**Choisissez un modèle 4B sur une Pi ou un mini-PC CPU seul ; choisissez un modèle 8B quand vous avez un GPU ou un NPU.** Cela garde les réponses vives à chaque niveau.',
        items: [
          '**Raspberry Pi / basse consommation :** Gemma 3 4B ou Qwen3 4B, en acceptant des réponses plus lentes.',
          '**Mini-PC (CPU seul) :** Qwen3 4B ou Phi-4-mini comme choix par défaut réactif.',
          '**Mini-PC avec GPU/NPU :** Qwen3 8B pour la meilleure qualité à une latence acceptable — voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Comment choisir',
        content:
          '**Commencez par un modèle 4B, confirmez la latence et des actions d\'appareil fiables, puis passez à 8B seulement si la qualité manque.** Testez avec vos vraies commandes avant de vous engager.',
        items: [
          'Installez via l\'[intégration Ollama](/fr/smart-home/home-assistant-ollama-integration) et testez vos commandes courantes.',
          'Si les réponses sont lentes, descendez d\'une taille ou ajoutez un GPU/NPU.',
          'Si les actions ne sont pas fiables, préférez un modèle connu pour l\'appel de fonctions.',
          'Pour des classements et une mécanique de modèles approfondis, voir [meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) (inter-clusters) — ce guide reste spécifique au contrôle de la maison.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quel est le plus petit modèle utilisable pour le contrôle de la maison ?', a: 'Un modèle 3B comme Llama 3.2 3B est le plancher pratique pour un contrôle d\'appareils fiable sur du matériel basse consommation, échangeant un peu de compréhension contre de la vitesse. Un modèle 4B comme Gemma 3 4B ou Qwen3 4B est un meilleur équilibre si votre matériel le permet.' },
          { q: 'Un modèle de contrôle de la maison a-t-il besoin d\'un GPU ?', a: 'Non pour les modèles 4B, qui tournent sur CPU ou un GPU intégré. Un GPU ou un NPU vous permet surtout d\'exécuter un modèle 8B comme Qwen3 8B à faible latence pour une meilleure compréhension. Adaptez le modèle à votre matériel.' },
          { q: 'Quels modèles prennent en charge l\'appel de fonctions ?', a: 'Les petits modèles modernes dont Qwen3, Gemma 3 et Phi-4-mini ont un support de tool/function-calling Home Assistant prouvé, la capacité qui leur permet d\'émettre des actions d\'appareil fiables. Préférez un modèle documenté pour la prendre en charge pour le contrôle de la maison.' },
          { q: 'Quel est le meilleur modèle pour une Raspberry Pi ?', a: 'Un modèle 4B comme Gemma 3 4B ou Qwen3 4B est le plafond pratique sur une Raspberry Pi, et les réponses seront plus lentes que sur un mini-PC. Pour un assistant vif, un mini-PC avec GPU/NPU exécutant Qwen3 8B est le meilleur hôte.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — installez et testez le modèle choisi',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — l\'architecture complète',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — adapter la taille du modèle au matériel',
          '[Meilleurs LLM locaux 2026](/fr/local-llms/best-local-llms-2026) — inter-clusters : classements de modèles approfondis',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs Modèles LLM Locaux pour le Contrôle de la Maison Connectée (2026)',
      description: 'Meilleurs LLM locaux 2026 pour la maison connectée : modèles petits à appel de fonctions, faible latence. Liste restreinte et choix par budget.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Appel de fonctions' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel est le plus petit modèle utilisable pour le contrôle de la maison ?', acceptedAnswer: { '@type': 'Answer', text: 'Un modèle 3B comme Llama 3.2 3B est le plancher pratique pour un contrôle d\'appareils fiable sur du matériel basse consommation. Un modèle 4B comme Gemma 3 4B ou Qwen3 4B est un meilleur équilibre si votre matériel le permet.' } },
        { '@type': 'Question', name: 'Un modèle de contrôle de la maison a-t-il besoin d\'un GPU ?', acceptedAnswer: { '@type': 'Answer', text: 'Non pour les modèles 4B, qui tournent sur CPU ou GPU intégré. Un GPU ou un NPU vous permet surtout d\'exécuter un modèle 8B comme Qwen3 8B à faible latence.' } },
        { '@type': 'Question', name: 'Quels modèles prennent en charge l\'appel de fonctions ?', acceptedAnswer: { '@type': 'Answer', text: 'Les petits modèles modernes comme Qwen3, Gemma 3 et Phi-4-mini ont un support de tool/function-calling Home Assistant prouvé, qui leur permet d\'émettre des actions d\'appareil fiables.' } },
        { '@type': 'Question', name: 'Quel est le meilleur modèle pour une Raspberry Pi ?', acceptedAnswer: { '@type': 'Answer', text: 'Un modèle 4B comme Gemma 3 4B ou Qwen3 4B est le plafond pratique sur une Pi, avec des réponses plus lentes. Un mini-PC avec GPU/NPU exécutant Qwen3 8B est un meilleur hôte.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'スマートホーム制御に最適なローカルLLMモデル（2026）',
    seoTitle: 'Home Assistant に最適なローカルLLM（2026）',
    intro:
      'スマートホーム制御に最適なローカルLLMモデルは、信頼できる関数呼び出しを備えた、小型で高速・指示追従のモデルです——ハードウェアが収められる最大のモデルではありません。本ガイドは、家庭制御で実際に重要なことを説明し、適した小型モデルの短いリストを示し、それらを比較し、ハードウェア予算に候補を対応づけます——分野全体を再ランク付けせず、より深いモデルガイドへ外部リンクします。',
    metaDescription:
      'スマートホーム制御に最適なローカルLLMモデル（2026）：控えめなハードウェアで動く小型・高速・関数呼び出しモデルを優先。Ollama対応の推奨リストと予算別の候補を掲載。各モデルの性能と応答速度を比較。',
    twitterDescription:
      'Home Assistant 制御に最適なローカルLLMモデル：動かせる最大のモデルより、小型・高速・関数呼び出しのモデル。ハードウェア予算別の候補。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: '機器制御のためローカルモデルを選ぶ Home Assistant ユーザー',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      '最適 ローカルllm home assistant',
      '最適 ローカルllm スマートホーム',
      'ローカルllm モデル 家庭制御',
      '関数呼び出し ローカルllm',
      '小型 ローカルllm ホーム自動化',
    ],
    leadAnswerBlock:
      '**スマートホーム制御には、信頼できる関数呼び出しを備えた小型の指示モデルを選びましょう——4B のモデルが低消費電力での最適点で、8B は GPU または NPU で動かす価値のある上限です。家庭制御は、生の能力より低レイテンシと構造化された出力を報いるからです。** 利用可能な最大のモデルではなく、ハードウェアに合わせて選びましょう。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホーム制御に最適なローカルLLMは？',
        answer:
          'しっかりした関数呼び出しを備えた小型の指示追従モデル、通常 4B〜8B の範囲が家庭制御に最適です。素早く応答し、信頼できる機器の動作を出力するからです。Gemma 3 4B、Qwen3 4B、Qwen3 8B は一般的で、よく支援された選択肢で、適切な選択はハードウェアと言語のニーズ次第です。',
        bullets: [
          'サイズより低レイテンシと関数呼び出しを優先する',
          '4B モデルは低消費電力ハードウェアに、8B は GPU または NPU 付きミニPCに適する',
          'Gemma 3 4B、Qwen3 4B、Phi-4-mini は一般的な出発点',
          'あなたが話す言語を強く支援するモデルを選ぶ',
          '単純な機器制御に、より大きなモデルはほとんど足さない',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '家庭制御で重要なこと', anchor: 'what-matters' },
      { label: '短いリスト', anchor: 'shortlist' },
      { label: '比較', anchor: 'comparison' },
      { label: 'ハードウェア予算別', anchor: 'by-budget' },
      { label: '選び方', anchor: 'how-to-pick' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'スマートホーム制御に最適なローカルLLMは、信頼できる関数呼び出しを備えた小型（3B〜8B）の指示モデルで、生のサイズより低レイテンシで選びます。' },
      { type: 'plain-terms', content: '家を制御するのに巨大なモデルは要りません——素早く応答し、ハブが実行できる構造化された命令を確実に出力するものが要ります。3B〜8B の小型モデルはこれをうまくこなし、控えめなハードウェアで動きます。より深いモデルのランキングは local-llms クラスターにあり、本ガイドは家庭制御の観点に集中します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          '家庭制御は最大のモデルサイズではなく、低レイテンシと信頼できる関数呼び出しを報いる',
          '4B モデルは低消費電力ハードウェアに、8B モデルは GPU または NPU 付きのミニPCに適する',
          'Gemma 3 4B（Google）、Qwen3 4B（Alibaba）、Qwen3 8B（Alibaba）は一般的で、よく支援された選択肢',
          'Qwen3、Gemma 3、Phi-4-mini は今日、実証済みの Home Assistant ツール呼び出し対応を備える',
          'あなたが話しかける言語を強く支援するモデルを選ぶ',
          '深いモデルのランキングと仕組みは local-llms クラスターへ外部リンク',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: '家庭制御で重要なこと',
        content:
          '**良い家庭制御モデルを決めるのは三つ：レイテンシ、信頼できる関数呼び出し、そしてハードウェアに合うサイズです。** ベンチマークの順位表は、ここでは応答性ほど重要ではありません。',
        items: [
          '**レイテンシ：** 音声命令はほぼ即時に感じられるべき；高性能なハードウェア上の小型モデルほど速く応答します。',
          '**関数呼び出し：** モデルは構造化された機器の動作を確実に出力する必要がある——これが決定的な能力です。',
          '**適合：** モデルは、Home Assistant もホストする機器で快適に動かなければなりません——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: '短いリスト',
        content:
          '**これらの小型モデルは、さまざまなハードウェア予算にわたる家庭制御で一般的かつよく支援された選択肢です。** 軽いハードウェアでは 4B モデルを、GPU または NPU があるときは 8B モデルを使います。Gemma 4（2026年6月）は最新の選択肢で、Qwen3、Gemma 3、Phi-4-mini は今日、実証済みの Home Assistant ツール呼び出し対応を備えます。',
        items: [
          '**Gemma 3 4B（Google）：** 40 億パラメータのモデルで、広い多言語対応（140 以上の言語）を持つ、強力な低消費電力の選択肢——Ollama タグ `gemma3:4b`。',
          '**Qwen3 4B（Alibaba）：** 信頼できるツール利用と良好な多言語対応を備えた高速な 4B モデルで、CPU や統合 GPU で低レイテンシ——`qwen3:4b`。',
          '**Phi-4-mini（Microsoft）：** 指示追従でサイズ以上に活躍するコンパクトな 3.8B モデル——`phi4-mini`。',
          '**Llama 3.2 3B（Meta）：** 控えめなハードウェアで良好な関数呼び出しで動く、広く支援された 3B のベースライン——`llama3.2:3b`。',
          '**Qwen3 8B（Alibaba）：** ここでは GPU または NPU で最高品質、ツール呼び出しでの Home Assistant のお気に入り——`qwen3:8b`。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**ハードウェアと言語で選びましょう：CPU のみや Pi クラスのハードウェアにはより小型を、GPU 付きミニPCには 8B を。** 以下のサイズは一般的な 4 ビット量子化での概算です；Ollama タグが取得する正確なモデルです。',
        columns: ['モデル', 'パラメータ', '概算サイズ (Q4)', 'Ollama タグ', '最適な用途'],
        rows: [
          { 'モデル': 'Gemma 3 4B', 'パラメータ': '4B', '概算サイズ (Q4)': '約 3 GB', 'Ollama タグ': 'gemma3:4b', '最適な用途': '低消費電力ホスト、140以上の言語' },
          { 'モデル': 'Qwen3 4B', 'パラメータ': '4B', '概算サイズ (Q4)': '約 2.5〜3 GB', 'Ollama タグ': 'qwen3:4b', '最適な用途': '低レイテンシ、多言語、ツール' },
          { 'モデル': 'Phi-4-mini', 'パラメータ': '3.8B', '概算サイズ (Q4)': '約 2.5〜3 GB', 'Ollama タグ': 'phi4-mini', '最適な用途': '強い指示追従' },
          { 'モデル': 'Llama 3.2 3B', 'パラメータ': '3B', '概算サイズ (Q4)': '約 2〜3 GB', 'Ollama タグ': 'llama3.2:3b', '最適な用途': '広く支援されたベースライン' },
          { 'モデル': 'Qwen3 8B', 'パラメータ': '8B', '概算サイズ (Q4)': '約 5 GB', 'Ollama タグ': 'qwen3:8b', '最適な用途': 'GPU/NPU で最高品質；HA のお気に入り' },
        ],
        items: [
          'サイズは概算で、量子化に依存します——VRAM と量子化の詳細は local-llms クラスターへ外部リンク。',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'ハードウェア予算別の候補',
        content:
          '**Pi や CPU のみのミニPCには 4B モデルを、GPU または NPU があるときは 8B モデルを選びましょう。** これで各ティアで応答をキビキビ保てます。',
        items: [
          '**Raspberry Pi / 低消費電力：** Gemma 3 4B または Qwen3 4B、より遅い応答を許容して。',
          '**ミニPC（CPU のみ）：** 反応の良い既定として Qwen3 4B または Phi-4-mini。',
          '**GPU/NPU 付きミニPC：** 許容できるレイテンシで最高品質なら Qwen3 8B——[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: '選び方',
        content:
          '**4B モデルから始め、レイテンシと信頼できる機器の動作を確認し、品質が足りない場合のみ 8B へ移りましょう。** 決める前に、実際の命令でテストします。',
        items: [
          '[Ollama 統合](/ja/smart-home/home-assistant-ollama-integration)経由でインストールし、よく使う命令をテストします。',
          '応答が遅ければ、一段下げるか GPU/NPU を追加します。',
          '動作が不安定なら、関数呼び出しで知られるモデルを優先します。',
          '深いモデルのランキングと仕組みは[最適なローカルLLM 2026](/ja/local-llms/best-local-llms-2026)（クラスター横断）を参照——本ガイドは家庭制御に特化したままです。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '家庭制御に使える最小のモデルは？', a: 'Llama 3.2 3B のような 3B モデルは、低消費電力ハードウェアでの信頼できる機器制御の実用的な下限で、理解の一部を速度と引き換えにします。ハードウェアが許せば、Gemma 3 4B や Qwen3 4B のような 4B モデルがより良いバランスです。' },
          { q: '家庭制御モデルに GPU は必要ですか？', a: 'CPU や統合 GPU で動く 4B モデルには不要です。GPU や NPU は主に、より良い理解のために Qwen3 8B のような 8B モデルを低レイテンシで動かせるようにします。モデルをハードウェアに合わせましょう。' },
          { q: 'どのモデルが関数呼び出しに対応していますか？', a: 'Qwen3、Gemma 3、Phi-4-mini を含む現代の小型モデルは、実証済みの Home Assistant ツール／関数呼び出し対応を備え、これが信頼できる機器の動作を出力させる能力です。家庭制御には、対応が文書化されたモデルを優先しましょう。' },
          { q: 'Raspberry Pi に最適なモデルは？', a: 'Gemma 3 4B や Qwen3 4B のような 4B モデルが Raspberry Pi での実用的な上限で、応答はミニPCより遅くなります。キビキビしたアシスタントには、Qwen3 8B を動かす GPU/NPU 付きのミニPCがより良いホストです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — 選んだモデルをインストールしテストする',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 完全なアーキテクチャ',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — モデルサイズをハードウェアに合わせる',
          '[最適なローカルLLM 2026](/ja/local-llms/best-local-llms-2026) — クラスター横断：深いモデルのランキング',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム制御に最適なローカルLLMモデル（2026）',
      description: 'スマートホーム制御に最適なローカルLLMモデル（2026）：控えめなハードウェアで動く小型・高速・関数呼び出しモデルを優先。Ollama対応の推奨リストと予算別の候補を掲載。各モデルの性能と応答速度を比較。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'ローカルLLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '関数呼び出し' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '家庭制御に使える最小のモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Llama 3.2 3B のような 3B モデルは低消費電力ハードウェアでの信頼できる機器制御の実用的な下限です。ハードウェアが許せば Gemma 3 4B や Qwen3 4B のような 4B モデルがより良いバランスです。' } },
        { '@type': 'Question', name: '家庭制御モデルに GPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'CPU や統合 GPU で動く 4B モデルには不要です。GPU や NPU は主に Qwen3 8B のような 8B モデルを低レイテンシで動かせるようにします。' } },
        { '@type': 'Question', name: 'どのモデルが関数呼び出しに対応していますか？', acceptedAnswer: { '@type': 'Answer', text: 'Qwen3、Gemma 3、Phi-4-mini を含む現代の小型モデルは実証済みの Home Assistant ツール／関数呼び出し対応を備え、信頼できる機器の動作を出力させます。' } },
        { '@type': 'Question', name: 'Raspberry Pi に最適なモデルは？', acceptedAnswer: { '@type': 'Answer', text: 'Gemma 3 4B や Qwen3 4B のような 4B モデルが Pi での実用的な上限で、応答は遅めです。Qwen3 8B を動かす GPU/NPU 付きのミニPCがより良いホストです。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Melhores Modelos LLM Locais para o Controle da Casa Inteligente (2026)',
    seoTitle: 'Melhores LLMs Locais para Home Assistant (2026)',
    intro:
      'Os melhores modelos LLM locais para o controle da casa inteligente são modelos pequenos, rápidos e que seguem instruções, com chamada de funções confiável — não o maior modelo que o seu hardware consegue conter. Este guia explica o que realmente importa para o controle do lar, dá uma lista curta de modelos pequenos adequados, os compara e mapeia escolhas a orçamentos de hardware, com link externo para guias de modelos mais profundos em vez de reordenar todo o campo.',
    metaDescription:
      'Melhores LLMs locais para Home Assistant 2026: modelos 3B–8B com chamada de funções para hardware modesto. Lista curta e escolhas por orçamento.',
    twitterDescription:
      'Melhores modelos LLM locais para o controle com Home Assistant: modelos pequenos, rápidos e com chamada de funções, em vez do maior modelo que você consegue rodar. Escolhas por orçamento de hardware.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant escolhendo um modelo local para o controle de dispositivos',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      'melhor llm local para home assistant',
      'melhor llm local casa inteligente',
      'modelo llm local controle do lar',
      'chamada de funções llm local',
      'llm local pequeno automação residencial',
    ],
    leadAnswerBlock:
      '**Para o controle da casa inteligente, escolha um modelo de instruções pequeno com chamada de funções confiável — um modelo de 4B é o ponto ideal de baixo consumo e um modelo de 8B é o teto que vale a pena rodar em uma GPU ou NPU, porque o controle do lar premia a baixa latência e a saída estruturada sobre a capacidade bruta.** Ajuste o modelo ao seu hardware em vez de escolher o maior disponível.',
    quickAnswerTop: {
      pt: {
        question: 'Qual o melhor LLM local para o controle da casa inteligente?',
        answer:
          'Um modelo pequeno que siga instruções com chamada de funções sólida, normalmente na faixa de 4B a 8B, é o melhor ajuste para o controle do lar porque responde rápido e emite ações de dispositivo confiáveis. Modelos como Gemma 3 4B, Qwen3 4B e Qwen3 8B são escolhas comuns e bem suportadas; a escolha certa depende do seu hardware e das suas necessidades de idioma.',
        bullets: [
          'Priorize baixa latência e chamada de funções sobre o tamanho',
          'Modelos 4B servem para hardware de baixo consumo; 8B para um mini PC com GPU ou NPU',
          'Gemma 3 4B, Qwen3 4B e Phi-4-mini são pontos de partida comuns',
          'Escolha um modelo com forte suporte ao seu idioma falado',
          'Modelos maiores acrescentam pouco para o controle simples de dispositivos',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que importa para o controle do lar', anchor: 'what-matters' },
      { label: 'A lista curta', anchor: 'shortlist' },
      { label: 'Comparação', anchor: 'comparison' },
      { label: 'Por orçamento de hardware', anchor: 'by-budget' },
      { label: 'Como escolher', anchor: 'how-to-pick' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O melhor LLM local para o controle da casa inteligente é um modelo de instruções pequeno (3B–8B) com chamada de funções confiável, escolhido por baixa latência em vez de tamanho bruto.' },
      { type: 'plain-terms', content: 'Controlar um lar não precisa de um modelo gigante — precisa de um que responda rápido e emita de forma confiável comandos estruturados que o hub possa executar. Modelos pequenos na faixa de 3B a 8B fazem isso bem e rodam em hardware modesto. Os rankings de modelos mais profundos ficam no cluster local-llms; este guia foca o ângulo do controle do lar.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O controle do lar premia a baixa latência e a chamada de funções confiável, não o tamanho máximo do modelo',
          'Um modelo 4B serve para hardware de baixo consumo; um modelo 8B para um mini PC com GPU ou NPU',
          'Gemma 3 4B (Google), Qwen3 4B (Alibaba) e Qwen3 8B (Alibaba) são escolhas comuns e bem suportadas',
          'Qwen3, Gemma 3 e Phi-4-mini têm suporte comprovado de tool-calling no Home Assistant hoje',
          'Escolha um modelo com forte suporte ao idioma em que você fala com ele',
          'Para rankings e mecânica de modelos profundos, faça link externo para o cluster local-llms',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: 'O que importa para o controle do lar',
        content:
          '**Três coisas decidem um bom modelo de controle do lar: latência, chamada de funções confiável e um tamanho que caiba no seu hardware.** As tabelas de líderes de benchmark importam muito menos aqui que a capacidade de resposta.',
        items: [
          '**Latência:** um comando de voz deve parecer quase instantâneo; modelos menores em hardware capaz respondem mais rápido.',
          '**Chamada de funções:** o modelo deve emitir ações de dispositivo estruturadas de forma confiável — essa é a capacidade decisiva.',
          '**Ajuste:** o modelo deve rodar confortavelmente na máquina que também hospeda o Home Assistant — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: 'A lista curta',
        content:
          '**Estes modelos pequenos são escolhas comuns e bem suportadas para o controle do lar em diferentes orçamentos de hardware.** Use um modelo 4B em hardware leve e um modelo 8B quando você tiver uma GPU ou NPU. O Gemma 4 (junho de 2026) é a opção mais nova; Qwen3, Gemma 3 e Phi-4-mini têm suporte comprovado de tool-calling no Home Assistant hoje.',
        items: [
          '**Gemma 3 4B (Google):** um modelo de 4 bilhões de parâmetros com ampla cobertura multilíngue (mais de 140 idiomas), uma forte escolha de baixo consumo — tag do Ollama `gemma3:4b`.',
          '**Qwen3 4B (Alibaba):** um modelo 4B rápido com uso confiável de ferramentas e bom suporte multilíngue, baixa latência em uma CPU ou GPU integrada — `qwen3:4b`.',
          '**Phi-4-mini (Microsoft):** um modelo compacto de 3,8B que rende acima do seu tamanho no seguimento de instruções — `phi4-mini`.',
          '**Llama 3.2 3B (Meta):** uma base 3B amplamente suportada que roda em hardware modesto com boa chamada de funções — `llama3.2:3b`.',
          '**Qwen3 8B (Alibaba):** aqui a melhor qualidade em uma GPU ou NPU e um favorito do Home Assistant para tool-calling — `qwen3:8b`.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparação',
        content:
          '**Escolha por hardware e idioma: modelos menores para hardware só-CPU ou de classe Pi, 8B para um mini PC com GPU.** Os tamanhos abaixo são aproximados na quantização comum de 4 bits; a tag do Ollama é o modelo exato a baixar.',
        columns: ['Modelo', 'Parâmetros', 'Tamanho aprox. (Q4)', 'Tag Ollama', 'Melhor para'],
        rows: [
          { 'Modelo': 'Gemma 3 4B', 'Parâmetros': '4B', 'Tamanho aprox. (Q4)': '~3 GB', 'Tag Ollama': 'gemma3:4b', 'Melhor para': 'Host de baixo consumo, mais de 140 idiomas' },
          { 'Modelo': 'Qwen3 4B', 'Parâmetros': '4B', 'Tamanho aprox. (Q4)': '~2,5–3 GB', 'Tag Ollama': 'qwen3:4b', 'Melhor para': 'Baixa latência, multilíngue, ferramentas' },
          { 'Modelo': 'Phi-4-mini', 'Parâmetros': '3.8B', 'Tamanho aprox. (Q4)': '~2,5–3 GB', 'Tag Ollama': 'phi4-mini', 'Melhor para': 'Forte seguimento de instruções' },
          { 'Modelo': 'Llama 3.2 3B', 'Parâmetros': '3B', 'Tamanho aprox. (Q4)': '~2–3 GB', 'Tag Ollama': 'llama3.2:3b', 'Melhor para': 'Base amplamente suportada' },
          { 'Modelo': 'Qwen3 8B', 'Parâmetros': '8B', 'Tamanho aprox. (Q4)': '~5 GB', 'Tag Ollama': 'qwen3:8b', 'Melhor para': 'Melhor qualidade em GPU/NPU; favorito do HA' },
        ],
        items: [
          'Os tamanhos são aproximados e dependem da quantização — para VRAM e profundidade de quantização, faça link externo para o cluster local-llms.',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: 'Escolhas por orçamento de hardware',
        content:
          '**Escolha um modelo 4B em uma Pi ou mini PC só-CPU; escolha um modelo 8B quando você tiver uma GPU ou NPU.** Isso mantém as respostas ágeis em cada nível.',
        items: [
          '**Raspberry Pi / baixo consumo:** Gemma 3 4B ou Qwen3 4B, aceitando respostas mais lentas.',
          '**Mini PC (só CPU):** Qwen3 4B ou Phi-4-mini como padrão responsivo.',
          '**Mini PC com GPU/NPU:** Qwen3 8B para a melhor qualidade com latência aceitável — veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: 'Como escolher',
        content:
          '**Comece com um modelo 4B, confirme a latência e as ações de dispositivo confiáveis, e passe para 8B só se faltar qualidade.** Teste com os seus comandos reais antes de se comprometer.',
        items: [
          'Instale pela [integração do Ollama](/pt/smart-home/home-assistant-ollama-integration) e teste os seus comandos comuns.',
          'Se as respostas forem lentas, baixe um tamanho ou adicione uma GPU/NPU.',
          'Se as ações não forem confiáveis, prefira um modelo conhecido pela chamada de funções.',
          'Para rankings e mecânica de modelos profundos, veja [melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) (entre clusters) — este guia permanece específico do controle do lar.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual o menor modelo usável para o controle do lar?', a: 'Um modelo 3B como o Llama 3.2 3B é o piso prático para um controle de dispositivos confiável em hardware de baixo consumo, trocando alguma compreensão por velocidade. Um modelo 4B como o Gemma 3 4B ou o Qwen3 4B é um equilíbrio melhor se o seu hardware permitir.' },
          { q: 'Um modelo de controle do lar precisa de uma GPU?', a: 'Não para modelos 4B, que rodam em CPU ou uma GPU integrada. Uma GPU ou NPU principalmente permite rodar um modelo 8B como o Qwen3 8B com baixa latência para melhor compreensão. Ajuste o modelo ao seu hardware.' },
          { q: 'Quais modelos suportam chamada de funções?', a: 'Modelos pequenos modernos, incluindo Qwen3, Gemma 3 e Phi-4-mini, têm suporte comprovado de tool/function-calling no Home Assistant, que é a capacidade que lhes permite emitir ações de dispositivo confiáveis. Prefira um modelo documentado para suportá-la no controle do lar.' },
          { q: 'Qual o melhor modelo para uma Raspberry Pi?', a: 'Um modelo 4B como o Gemma 3 4B ou o Qwen3 4B é o teto prático em uma Raspberry Pi, e as respostas serão mais lentas que em um mini PC. Para um assistente ágil, um mini PC com GPU/NPU rodando o Qwen3 8B é o melhor host.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — instale e teste o modelo escolhido',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a arquitetura completa',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — ajuste o tamanho do modelo ao hardware',
          '[Melhores LLMs locais 2026](/pt/local-llms/best-local-llms-2026) — entre clusters: rankings de modelos profundos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores Modelos LLM Locais para o Controle da Casa Inteligente (2026)',
      description: 'Melhores LLMs locais para Home Assistant 2026: modelos 3B–8B com chamada de funções para hardware modesto. Lista curta e escolhas por orçamento.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Chamada de funções' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual o menor modelo usável para o controle do lar?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo 3B como o Llama 3.2 3B é o piso prático para um controle de dispositivos confiável em hardware de baixo consumo. Um modelo 4B como o Gemma 3 4B ou o Qwen3 4B é um equilíbrio melhor se o seu hardware permitir.' } },
        { '@type': 'Question', name: 'Um modelo de controle do lar precisa de uma GPU?', acceptedAnswer: { '@type': 'Answer', text: 'Não para modelos 4B, que rodam em CPU ou GPU integrada. Uma GPU ou NPU principalmente permite rodar um modelo 8B como o Qwen3 8B com baixa latência.' } },
        { '@type': 'Question', name: 'Quais modelos suportam chamada de funções?', acceptedAnswer: { '@type': 'Answer', text: 'Modelos pequenos modernos como Qwen3, Gemma 3 e Phi-4-mini têm suporte comprovado de tool/function-calling no Home Assistant, que lhes permite emitir ações de dispositivo confiáveis.' } },
        { '@type': 'Question', name: 'Qual o melhor modelo para uma Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo 4B como o Gemma 3 4B ou o Qwen3 4B é o teto prático em uma Pi, com respostas mais lentas. Um mini PC com GPU/NPU rodando o Qwen3 8B é o melhor host.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '智能家居控制的最佳本地 LLM 模型（2026）',
    seoTitle: 'Home Assistant 的最佳本地 LLM（2026）',
    intro:
      '智能家居控制的最佳本地 LLM 模型，是具备可靠函数调用、小而快、能遵循指令的模型——而不是你硬件能容纳的最大模型。本指南讲解家庭控制真正重要的是什么，给出一份适用小型模型的精选清单，对它们进行比较，并把选择对应到硬件预算，并以外链指向更深入的模型指南，而非把整个领域重新排名。',
    metaDescription:
      '2026年智能家居控制最佳本地LLM模型：优先选择小型函数调用模型以降低响应延迟，适合在普通迷你PC或低功耗硬件设备上部署，含按预算的推荐型号清单、功能说明与性能对比表。',
    twitterDescription:
      'Home Assistant 控制的最佳本地 LLM 模型：相较你能运行的最大模型，更应选小而快、支持函数调用的模型。按硬件预算给出选择。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '为设备控制选择本地模型的 Home Assistant 用户',
    primaryTerm: 'best local LLM for home control',
    targetKeywords: [
      '最佳本地llm home assistant',
      '最佳本地llm 智能家居',
      '本地llm 模型 家庭控制',
      '函数调用 本地llm',
      '小型本地llm 家庭自动化',
    ],
    leadAnswerBlock:
      '**对于智能家居控制，选择一个具备可靠函数调用的小型指令模型——4B 模型是低功耗的最佳点，8B 是值得在 GPU 或 NPU 上运行的上限，因为家庭控制更看重低延迟和结构化输出，而非纯粹的能力。** 把模型匹配到你的硬件，而不是挑可得的最大模型。',
    quickAnswerTop: {
      zh: {
        question: '智能家居控制的最佳本地 LLM 是哪个？',
        answer:
          '一个能遵循指令、具备扎实函数调用、通常在 4B 到 8B 之间的小型模型，最适合家庭控制，因为它响应快并能输出可靠的设备动作。Gemma 3 4B、Qwen3 4B 和 Qwen3 8B 是常见且受良好支持的选择；正确的选择取决于你的硬件和语言需求。',
        bullets: [
          '把低延迟和函数调用置于大小之上',
          '4B 模型适合低功耗硬件；8B 适合带 GPU 或 NPU 的迷你 PC',
          'Gemma 3 4B、Qwen3 4B 和 Phi-4-mini 是常见起点',
          '选择对你所说语言有强力支持的模型',
          '对于简单的设备控制，更大的模型几乎无益',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '家庭控制重要的是什么', anchor: 'what-matters' },
      { label: '精选清单', anchor: 'shortlist' },
      { label: '比较', anchor: 'comparison' },
      { label: '按硬件预算', anchor: 'by-budget' },
      { label: '如何选择', anchor: 'how-to-pick' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '智能家居控制的最佳本地 LLM 是一个具备可靠函数调用的小型（3B–8B）指令模型，以低延迟而非纯粹的大小来选择。' },
      { type: 'plain-terms', content: '控制一个家并不需要巨型模型——它需要一个响应快、能可靠输出中枢可执行的结构化命令的模型。3B 到 8B 的小型模型在这方面表现良好，并能在普通硬件上运行。更深入的模型排名在 local-llms 集群中；本指南专注于家庭控制这一角度。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '家庭控制看重低延迟和可靠的函数调用，而非最大的模型大小',
          '4B 模型适合低功耗硬件；8B 模型适合带 GPU 或 NPU 的迷你 PC',
          'Gemma 3 4B（Google）、Qwen3 4B（Alibaba）和 Qwen3 8B（Alibaba）是常见且受良好支持的选择',
          'Qwen3、Gemma 3 和 Phi-4-mini 如今具备经过验证的 Home Assistant 工具调用支持',
          '选择对你与它交谈所用语言有强力支持的模型',
          '关于深入的模型排名与机制，以外链指向 local-llms 集群',
        ],
      },
      whatMatters: {
        id: 'what-matters',
        title: '家庭控制重要的是什么',
        content:
          '**有三点决定一个好的家庭控制模型：延迟、可靠的函数调用，以及与你硬件相称的大小。** 在这里，基准排行榜远不如响应性重要。',
        items: [
          '**延迟：** 语音命令应当近乎即时；高性能硬件上的小型模型响应更快。',
          '**函数调用：** 模型必须可靠地输出结构化的设备动作——这是决定性的能力。',
          '**相称：** 模型必须能在同时托管 Home Assistant 的机器上从容运行——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
      },
      shortlist: {
        id: 'shortlist',
        title: '精选清单',
        content:
          '**这些小型模型是跨不同硬件预算、用于家庭控制的常见且受良好支持的选择。** 在轻量硬件上用 4B 模型，有 GPU 或 NPU 时用 8B 模型。Gemma 4（2026 年 6 月）是最新选项；Qwen3、Gemma 3 和 Phi-4-mini 如今具备经过验证的 Home Assistant 工具调用支持。',
        items: [
          '**Gemma 3 4B（Google）：** 一个 40 亿参数的模型，具备广泛的多语言覆盖（140 多种语言），是强力的低功耗选择——Ollama 标签 `gemma3:4b`。',
          '**Qwen3 4B（Alibaba）：** 一个快速的 4B 模型，工具使用可靠、多语言支持良好，在 CPU 或集成 GPU 上低延迟——`qwen3:4b`。',
          '**Phi-4-mini（Microsoft）：** 一个紧凑的 3.8B 模型，在指令遵循上的表现超出其体量——`phi4-mini`。',
          '**Llama 3.2 3B（Meta）：** 一个广受支持的 3B 基线，能在普通硬件上以良好的函数调用运行——`llama3.2:3b`。',
          '**Qwen3 8B（Alibaba）：** 此处在 GPU 或 NPU 上质量最佳，是工具调用方面 Home Assistant 的热门之选——`qwen3:8b`。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比较',
        content:
          '**按硬件和语言选择：仅 CPU 或 Pi 级硬件用更小的模型，带 GPU 的迷你 PC 用 8B。** 下面的大小为常见 4 位量化下的近似值；Ollama 标签即要拉取的确切模型。',
        columns: ['模型', '参数量', '近似占用 (Q4)', 'Ollama 标签', '最适合'],
        rows: [
          { '模型': 'Gemma 3 4B', '参数量': '4B', '近似占用 (Q4)': '约 3 GB', 'Ollama 标签': 'gemma3:4b', '最适合': '低功耗主机、140 多种语言' },
          { '模型': 'Qwen3 4B', '参数量': '4B', '近似占用 (Q4)': '约 2.5–3 GB', 'Ollama 标签': 'qwen3:4b', '最适合': '低延迟、多语言、工具' },
          { '模型': 'Phi-4-mini', '参数量': '3.8B', '近似占用 (Q4)': '约 2.5–3 GB', 'Ollama 标签': 'phi4-mini', '最适合': '强指令遵循' },
          { '模型': 'Llama 3.2 3B', '参数量': '3B', '近似占用 (Q4)': '约 2–3 GB', 'Ollama 标签': 'llama3.2:3b', '最适合': '广受支持的基线' },
          { '模型': 'Qwen3 8B', '参数量': '8B', '近似占用 (Q4)': '约 5 GB', 'Ollama 标签': 'qwen3:8b', '最适合': 'GPU/NPU 上质量最佳；HA 热门' },
        ],
        items: [
          '占用为近似值，取决于量化——关于 VRAM 和量化细节，以外链指向 local-llms 集群。',
        ],
      },
      byBudget: {
        id: 'by-budget',
        title: '按硬件预算的选择',
        content:
          '**在 Pi 或仅 CPU 的迷你 PC 上用 4B 模型；有 GPU 或 NPU 时用 8B 模型。** 这能在每一档都保持响应灵敏。',
        items: [
          '**Raspberry Pi / 低功耗：** Gemma 3 4B 或 Qwen3 4B，接受更慢的响应。',
          '**迷你 PC（仅 CPU）：** 以 Qwen3 4B 或 Phi-4-mini 作为响应良好的默认。',
          '**带 GPU/NPU 的迷你 PC：** 要在可接受延迟下获得最佳质量就用 Qwen3 8B——参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      howToPick: {
        id: 'how-to-pick',
        title: '如何选择',
        content:
          '**从 4B 模型开始，确认延迟和可靠的设备动作，仅在质量不足时才换到 8B。** 在最终确定之前，用你真实的命令测试。',
        items: [
          '经由 [Ollama 集成](/zh/smart-home/home-assistant-ollama-integration) 安装，并测试你常用的命令。',
          '若响应缓慢，降一档或加一块 GPU/NPU。',
          '若动作不可靠，优先选择以函数调用著称的模型。',
          '关于深入的模型排名与机制，参见[2026 最佳本地 LLM](/zh/local-llms/best-local-llms-2026)（跨集群）——本指南保持专注于家庭控制。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '家庭控制可用的最小模型是哪个？', a: '像 Llama 3.2 3B 这样的 3B 模型，是低功耗硬件上可靠设备控制的实际下限，以部分理解力换取速度。若你的硬件允许，像 Gemma 3 4B 或 Qwen3 4B 这样的 4B 模型是更好的平衡。' },
          { q: '家庭控制模型需要 GPU 吗？', a: '4B 模型不需要，它们在 CPU 或集成 GPU 上运行。GPU 或 NPU 主要让你以低延迟运行像 Qwen3 8B 这样的 8B 模型以获得更好理解。把模型匹配到你的硬件。' },
          { q: '哪些模型支持函数调用？', a: '包括 Qwen3、Gemma 3 和 Phi-4-mini 在内的现代小型模型具备经过验证的 Home Assistant 工具/函数调用支持，这正是让它们输出可靠设备动作的能力。家庭控制请优先选择有文档支持的模型。' },
          { q: 'Raspberry Pi 的最佳模型是哪个？', a: '像 Gemma 3 4B 或 Qwen3 4B 这样的 4B 模型，是 Raspberry Pi 上的实际上限，响应会比迷你 PC 更慢。要想助手灵敏，运行 Qwen3 8B 的带 GPU/NPU 迷你 PC 是更好的主机。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 安装并测试你选定的模型',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 完整架构',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 把模型大小匹配到硬件',
          '[2026 最佳本地 LLM](/zh/local-llms/best-local-llms-2026) — 跨集群：深入的模型排名',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居控制的最佳本地 LLM 模型（2026）',
      description: '2026年智能家居控制最佳本地LLM模型：优先选择小型函数调用模型以降低响应延迟，适合在普通迷你PC或低功耗硬件设备上部署，含按预算的推荐型号清单、功能说明与性能对比表。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-local-llm-models-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: '本地 LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '函数调用' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '家庭控制可用的最小模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: '像 Llama 3.2 3B 这样的 3B 模型是低功耗硬件上可靠设备控制的实际下限。若硬件允许，像 Gemma 3 4B 或 Qwen3 4B 这样的 4B 模型是更好的平衡。' } },
        { '@type': 'Question', name: '家庭控制模型需要 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '4B 模型不需要，它们在 CPU 或集成 GPU 上运行。GPU 或 NPU 主要让你以低延迟运行像 Qwen3 8B 这样的 8B 模型。' } },
        { '@type': 'Question', name: '哪些模型支持函数调用？', acceptedAnswer: { '@type': 'Answer', text: '包括 Qwen3、Gemma 3 和 Phi-4-mini 在内的现代小型模型具备经过验证的 Home Assistant 工具/函数调用支持，让它们输出可靠的设备动作。' } },
        { '@type': 'Question', name: 'Raspberry Pi 的最佳模型是哪个？', acceptedAnswer: { '@type': 'Answer', text: '像 Gemma 3 4B 或 Qwen3 4B 这样的 4B 模型是 Pi 上的实际上限，响应更慢。运行 Qwen3 8B 的带 GPU/NPU 迷你 PC 是更好的主机。' } },
      ],
    },
  },
}
