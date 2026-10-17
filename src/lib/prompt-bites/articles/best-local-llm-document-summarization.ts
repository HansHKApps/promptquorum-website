import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-en.webp',
    title: 'Best Local LLM for Document Summarization?',
    seoTitle: 'Best Local LLM for Summarization 2026 (Ollama)',
    metaDescription: 'Gemma 4 12B (256K context, 8 GB) is the best starting point for local summarization on Ollama; Qwen3.8 27B and Gemma 4 31B suit 24 GB GPUs.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Users summarizing long documents locally who need a long context window',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Gemma 4 12B is the best starting point for local summarization on Ollama: it has a 256K context window, a 7.7–8.0 GB download and lists text summarization as an intended use.</strong> On a 24 GB GPU, Qwen3.8 27B and Gemma 4 31B (both 256K) handle longer or denser documents. Ollama\'s default context is only 4K on GPUs under 24 GiB VRAM, so raise it before summarizing or part of the document is dropped.',
    toc: [
      { label: 'Best Pick: Gemma 4 12B (Qwen3.8 27B or Gemma 4 31B for 24 GB)', anchor: '#best-pick' },
      { label: 'Model Picks by Memory Size', anchor: '#model-tiers' },
      { label: 'Raise Ollama\'s Context Length First', anchor: '#context-setup' },
      { label: 'Full-Context Summarization vs Chunking', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best local LLM for summarizing long documents?',
        answer: 'Gemma 4 12B is the best starting point on Ollama: 256K context in a 7.7–8.0 GB download. Qwen3.8 27B and Gemma 4 31B suit 24 GB GPUs.',
        bullets: [
          'Gemma 4 12B (gemma4:12b) has a 256K context window and Apache 2.0 licensing — the default pick for 12–16 GB machines.',
          'Qwen3.8 27B (18 GB) and Gemma 4 31B (19–20 GB) suit 24 GB GPUs; Google reports 66.4% for the 31B versus 43.4% for the 12B on the MRCR v2 8-needle 128K test.',
          'Set the context length yourself: Ollama defaults to 4K on GPUs under 24 GiB VRAM, which cuts off long documents.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best pick: Gemma 4 12B — 256K context, 7.7–8.0 GB download, summarization listed as an intended use',
          'Best for 24 GB GPUs: Qwen3.8 27B or Gemma 4 31B — both 256K context, stronger on dense, multi-topic documents',
          'Ollama defaults to a 4K context on GPUs under 24 GiB VRAM — raise OLLAMA_CONTEXT_LENGTH before summarizing',
          'Qwen3 14B is listed at only 40K context on Ollama, so it is not a long-document pick',
          'Chunking remains the right approach when the document exceeds the context window or VRAM is tight',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Gemma 4 12B (Qwen3.8 27B or Gemma 4 31B for 24 GB)',
        content: [
          '<strong>Gemma 4 12B is the best starting point for local summarization: its Ollama tag (gemma4:12b) lists a 256K context window in a 7.7–8.0 GB download, and Google\'s model card names summaries of reports and research papers as an intended use.</strong> It is released under Apache 2.0 and fits comfortably on a 12–16 GB machine.',
          'On a 24 GB GPU, step up to Qwen3.8 27B (qwen3.8:27b, 18 GB, 256K) or Gemma 4 31B (gemma4:31b, 19–20 GB, 256K). Google reports 66.4% for the 31B against 43.4% for the 12B on the MRCR v2 8-needle 128K long-context test, so the larger model is the safer choice for dense, multi-topic documents where the summary must not miss a section.',
          'We did not run a summarization benchmark for this page. The picks rest on Ollama-listed context windows, download sizes and vendor-reported results — test any model on your own documents before relying on it. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B (llama3.1:8b, 4.9 GB, 128K) still works for lightweight summarization on 8 GB machines, but its Ollama listing has not been updated in about a year.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'Model Picks by Memory Size',
        content: [
          'Listed context windows and download sizes from the Ollama library, smallest to largest. Download size is not total memory: the context cache comes on top and grows with context length.',
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Context'],
        rows: [
          { 'Model': 'Llama 3.1 8B', 'Ollama tag': 'llama3.1:8b', 'Download': '4.9 GB', 'Context': '128K' },
          { 'Model': 'Gemma 4 E4B', 'Ollama tag': 'gemma4:e4b', 'Download': '6.6–9.5 GB', 'Context': '128K' },
          { 'Model': 'Gemma 4 12B', 'Ollama tag': 'gemma4:12b', 'Download': '7.7–8.0 GB', 'Context': '256K' },
          { 'Model': 'Gemma 4 26B A4B', 'Ollama tag': 'gemma4:26b', 'Download': '16–19 GB', 'Context': '256K' },
          { 'Model': 'Qwen3.8 27B', 'Ollama tag': 'qwen3.8:27b', 'Download': '18 GB', 'Context': '256K' },
          { 'Model': 'Gemma 4 31B', 'Ollama tag': 'gemma4:31b', 'Download': '19–20 GB', 'Context': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'Raise Ollama\'s Context Length First',
        content: [
          '<strong>Ollama defaults to a 4K context on GPUs with under 24 GiB VRAM, 32K on 24–48 GiB and 256K at 48 GiB or more, so a long document is cut off unless you raise the setting.</strong> A 4K window holds about 3,000 English words; the model then summarizes only what fits. See the [Ollama context length documentation](https://docs.ollama.com/context-length).',
          'Set <code>OLLAMA_CONTEXT_LENGTH</code> before starting the server, sized to the document plus room for the summary, then run <code>ollama ps</code>: the CONTEXT column shows the allocated length and PROCESSOR shows whether the model sits fully on the GPU. Aim for 100% GPU at the context you need.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'Rule of thumb: one token is about 0.75 English words, so a 50,000-word document is roughly 67,000 tokens. Other languages use more tokens per word.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'Full-Context Summarization vs Chunking',
        content: [
          'Feeding a whole document into a long-context model in one pass avoids the cross-chunk context loss of chunk-and-summarize pipelines, but it needs more memory and is not automatically more faithful.',
          'Research on long-form summarization reports positional bias in how faithful summaries are to different parts of a long document ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)), so check the middle of long documents against the source.',
          'Use chunking — summarize each section, then summarize the summaries, optionally with an embedding model for retrieving relevant sections — when VRAM is limited, the document exceeds the context window, or you need to cite which section a point came from.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best Ollama model for summarization?',
            a: 'Gemma 4 12B (gemma4:12b) for most machines: 256K context in a 7.7–8.0 GB download. On a 24 GB GPU, use Qwen3.8 27B or Gemma 4 31B. These picks rest on listed specs and vendor results, not a summarization benchmark we ran.',
          },
          {
            q: 'Why does my local summary only cover part of the document?',
            a: 'Usually the context window is too small. Ollama defaults to 4K on GPUs under 24 GiB VRAM, so the rest of the document is dropped. Set OLLAMA_CONTEXT_LENGTH above the document\'s token count and confirm it with ollama ps.',
          },
          {
            q: 'Does Qwen3 14B support 128K context on Ollama?',
            a: 'No. Ollama lists qwen3:14b with a 40K context window; only qwen3:4b and qwen3:30b are listed at 256K. For long documents, use Gemma 4 12B or Qwen3.8 27B instead.',
          },
          {
            q: 'Which models work for offline or edge devices?',
            a: 'Gemma 4 E4B (gemma4:e4b, 128K) and Llama 3.1 8B (4.9 GB, 128K) suit 8 GB-class machines; Gemma 4 E2B (gemma4:e2b, 128K) is smaller still. Once a model is downloaded, summarization runs without an internet connection.',
          },
          {
            q: 'How do I stop a summary from oversimplifying?',
            a: 'Tell the model what to keep: request section-by-section summaries that preserve numbers, names and caveats, set a target length per section, and ask it to quote the source sentence behind each key claim. Then spot-check the middle of the document against the source.',
          },
          {
            q: 'Do I need extra VRAM to use the full context?',
            a: 'Yes. The context cache grows with sequence length on top of the model\'s download size. Check ollama ps after loading: if the PROCESSOR column shows a CPU/GPU split, lower the context length or choose a smaller model.',
          },
          {
            q: 'Is chunking ever better than full-context summarization?',
            a: 'Yes, when VRAM is limited or the document exceeds the context window. Chunking also helps when you need to cite which section a summary point came from, since full-context summarization can blur section boundaries.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Which Ollama Models Support 128K Context?](/prompt-bites/ollama-128k-context-models) — the full list of long-context models',
          '[Best Embedding Model for Local RAG](/prompt-bites/best-embedding-model-local-rag) — a chunking-based alternative approach',
          '[How Much VRAM Do You Need for a Local LLM?](/prompt-bites/how-much-vram-for-local-llm) — sizing hardware for long-context work',
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-ar.webp',
    title: 'أفضل LLM محلي لتلخيص المستندات؟',
    seoTitle: 'أفضل LLM محلي لتلخيص المستندات 2026',
    metaDescription: 'نموذج Gemma 4 12B (سياق 256K وحجم 8 GB) هو أفضل نقطة بداية للتلخيص المحلي على Ollama؛ ويناسب Qwen3.8 27B وGemma 4 31B بطاقات 24 GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المستخدمون الذين يلخصون مستندات طويلة محليًا ويحتاجون نافذة سياق طويلة',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج Gemma 4 12B هو أفضل نقطة بداية للتلخيص المحلي على Ollama: نافذة سياق 256K وتنزيل بحجم 7.7–8.0 GB، ويذكر تلخيص النصوص ضمن الاستخدامات المقصودة.</strong> على بطاقة 24 GB يتعامل Qwen3.8 27B وGemma 4 31B (كلاهما 256K) مع مستندات أطول أو أكثر كثافة. السياق الافتراضي في Ollama هو 4K فقط على بطاقات GPU التي تقل ذاكرتها عن 24 GiB، فارفعه قبل التلخيص وإلا فسيُهمل جزء من المستند.',
    toc: [
      { label: 'أفضل اختيار: Gemma 4 12B (أو Qwen3.8 27B / Gemma 4 31B لبطاقة 24 GB)', anchor: '#best-pick' },
      { label: 'النماذج المقترحة حسب حجم الذاكرة', anchor: '#model-tiers' },
      { label: 'ارفع طول سياق Ollama أولًا', anchor: '#context-setup' },
      { label: 'التلخيص بالسياق الكامل مقابل التقطيع', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل LLM محلي لتلخيص المستندات الطويلة؟',
        answer: 'نموذج Gemma 4 12B هو أفضل نقطة بداية على Ollama: سياق 256K في تنزيل بحجم 7.7–8.0 GB. ويناسب Qwen3.8 27B وGemma 4 31B بطاقات 24 GB.',
        bullets: [
          'يوفر Gemma 4 12B (gemma4:12b) نافذة سياق 256K برخصة Apache 2.0 — الخيار الافتراضي للأجهزة بذاكرة 12–16 GB.',
          'يناسب Qwen3.8 27B (18 GB) وGemma 4 31B (19–20 GB) بطاقات 24 GB؛ وتفيد Google بنتيجة 66.4% للنموذج 31B مقابل 43.4% للنموذج 12B في اختبار MRCR v2 8-needle 128K.',
          'اضبط طول السياق بنفسك: يستخدم Ollama افتراضيًا 4K على بطاقات GPU التي تقل ذاكرتها عن 24 GiB، مما يقطع المستندات الطويلة.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار: Gemma 4 12B — سياق 256K، تنزيل 7.7–8.0 GB، والتلخيص مذكور ضمن الاستخدامات المقصودة',
          'الأفضل لبطاقات 24 GB: Qwen3.8 27B أو Gemma 4 31B — كلاهما 256K وأقوى في المستندات الكثيفة متعددة المواضيع',
          'يستخدم Ollama افتراضيًا سياق 4K على بطاقات GPU التي تقل ذاكرتها عن 24 GiB — ارفع OLLAMA_CONTEXT_LENGTH قبل التلخيص',
          'يظهر Qwen3 14B في Ollama بسياق 40K فقط، فلا يصلح للمستندات الطويلة',
          'يبقى التقطيع النهج الصحيح عندما يتجاوز المستند نافذة السياق أو تكون الذاكرة محدودة',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Gemma 4 12B (أو Qwen3.8 27B / Gemma 4 31B لبطاقة 24 GB)',
        content: [
          '<strong>Gemma 4 12B هو أفضل نقطة بداية للتلخيص المحلي: وسمه في Ollama (gemma4:12b) يعرض نافذة سياق 256K في تنزيل بحجم 7.7–8.0 GB، وتذكر بطاقة النموذج من Google تلخيص التقارير والأوراق البحثية ضمن الاستخدامات المقصودة.</strong> يصدر برخصة Apache 2.0 ويعمل بسهولة على جهاز بذاكرة 12–16 GB.',
          'على بطاقة 24 GB انتقل إلى Qwen3.8 27B (qwen3.8:27b، حجم 18 GB، سياق 256K) أو Gemma 4 31B (gemma4:31b، حجم 19–20 GB، سياق 256K). تفيد Google بنتيجة 66.4% للنموذج 31B مقابل 43.4% للنموذج 12B في اختبار السياق الطويل MRCR v2 8-needle 128K، لذا فالنموذج الأكبر هو الخيار الأكثر أمانًا للمستندات الكثيفة متعددة المواضيع التي يجب ألا يفوّت التلخيص فيها أي قسم.',
          'لم نُجرِ اختبار أداء للتلخيص لهذه الصفحة. تستند التوصيات إلى نوافذ السياق وأحجام التنزيل المعروضة في Ollama وإلى نتائج أعلنتها الجهات المصنِّعة — جرّب أي نموذج على مستنداتك قبل الاعتماد عليه. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'لا يزال Llama 3.1 8B (llama3.1:8b، حجم 4.9 GB، سياق 128K) مناسبًا للتلخيص الخفيف على أجهزة 8 GB، لكن صفحته في Ollama لم تُحدَّث منذ نحو عام.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'النماذج المقترحة حسب حجم الذاكرة',
        content: [
          'نوافذ السياق وأحجام التنزيل المعروضة في مكتبة Ollama، من الأصغر إلى الأكبر. حجم التنزيل ليس إجمالي الذاكرة: تُضاف إليه ذاكرة السياق المؤقتة وتنمو مع طول السياق.',
        ],
        columns: ['النموذج', 'وسم Ollama', 'التنزيل', 'السياق'],
        rows: [
          { 'النموذج': 'Llama 3.1 8B', 'وسم Ollama': 'llama3.1:8b', 'التنزيل': '4.9 GB', 'السياق': '128K' },
          { 'النموذج': 'Gemma 4 E4B', 'وسم Ollama': 'gemma4:e4b', 'التنزيل': '6.6–9.5 GB', 'السياق': '128K' },
          { 'النموذج': 'Gemma 4 12B', 'وسم Ollama': 'gemma4:12b', 'التنزيل': '7.7–8.0 GB', 'السياق': '256K' },
          { 'النموذج': 'Gemma 4 26B A4B', 'وسم Ollama': 'gemma4:26b', 'التنزيل': '16–19 GB', 'السياق': '256K' },
          { 'النموذج': 'Qwen3.8 27B', 'وسم Ollama': 'qwen3.8:27b', 'التنزيل': '18 GB', 'السياق': '256K' },
          { 'النموذج': 'Gemma 4 31B', 'وسم Ollama': 'gemma4:31b', 'التنزيل': '19–20 GB', 'السياق': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'ارفع طول سياق Ollama أولًا',
        content: [
          '<strong>يستخدم Ollama افتراضيًا سياق 4K على بطاقات GPU التي تقل ذاكرتها عن 24 GiB، و32K بين 24 و48 GiB، و256K عند 48 GiB فأكثر، لذا يُقطع المستند الطويل ما لم ترفع هذا الإعداد.</strong> تتسع نافذة 4K لنحو 3,000 كلمة إنجليزية، ولا يلخص النموذج إلا ما يتسع فيها. راجع [توثيق Ollama حول طول السياق](https://docs.ollama.com/context-length).',
          'اضبط <code>OLLAMA_CONTEXT_LENGTH</code> قبل تشغيل الخادم بحسب طول المستند مضافًا إليه مساحة للملخص، ثم نفّذ <code>ollama ps</code>: يعرض عمود CONTEXT الطول المخصص، ويبيّن عمود PROCESSOR ما إذا كان النموذج على GPU بالكامل. استهدف 100% GPU عند السياق الذي تحتاجه.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'قاعدة تقريبية: الرمز (token) الواحد يعادل نحو 0.75 كلمة إنجليزية، فمستند من 50,000 كلمة يقارب 67,000 رمز. وتستهلك اللغات الأخرى رموزًا أكثر لكل كلمة.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'التلخيص بالسياق الكامل مقابل التقطيع',
        content: [
          'إدخال المستند كاملًا في نموذج طويل السياق دفعة واحدة يتجنب فقدان السياق بين الأجزاء في مسارات التقطيع ثم التلخيص، لكنه يحتاج ذاكرة أكبر وليس أكثر أمانة للأصل تلقائيًا.',
          'تفيد أبحاث التلخيص الطويل بوجود انحياز موضعي في مدى أمانة الملخصات لأجزاء مختلفة من المستند الطويل ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609))، لذا قارن منتصف المستندات الطويلة بالمصدر.',
          'استخدم التقطيع — لخّص كل قسم ثم لخّص الملخصات، مع نموذج تضمين لاسترجاع الأقسام ذات الصلة عند الحاجة — عندما تكون الذاكرة محدودة أو يتجاوز المستند نافذة السياق أو تحتاج إلى ذكر القسم الذي جاءت منه كل نقطة.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أفضل نموذج على Ollama للتلخيص؟',
            a: 'نموذج Gemma 4 12B (gemma4:12b) لمعظم الأجهزة: سياق 256K في تنزيل بحجم 7.7–8.0 GB. وعلى بطاقة 24 GB استخدم Qwen3.8 27B أو Gemma 4 31B. تستند هذه التوصيات إلى المواصفات المعروضة ونتائج الجهات المصنِّعة، لا إلى اختبار تلخيص أجريناه بأنفسنا.',
          },
          {
            q: 'لماذا يغطي ملخصي المحلي جزءًا من المستند فقط؟',
            a: 'غالبًا لأن نافذة السياق صغيرة جدًا. يستخدم Ollama افتراضيًا 4K على بطاقات GPU التي تقل ذاكرتها عن 24 GiB فيُهمل بقية المستند. اضبط OLLAMA_CONTEXT_LENGTH بقيمة أعلى من عدد رموز المستند وتأكد بالأمر ollama ps.',
          },
          {
            q: 'هل يدعم Qwen3 14B سياق 128K على Ollama؟',
            a: 'لا. يعرض Ollama الوسم qwen3:14b بنافذة سياق 40K، ولا يظهر بسياق 256K سوى qwen3:4b وqwen3:30b. للمستندات الطويلة استخدم Gemma 4 12B أو Qwen3.8 27B.',
          },
          {
            q: 'ما النماذج المناسبة للأجهزة دون اتصال أو أجهزة الحافة؟',
            a: 'يناسب Gemma 4 E4B (gemma4:e4b، سياق 128K) وLlama 3.1 8B (حجم 4.9 GB، سياق 128K) أجهزة فئة 8 GB؛ أما Gemma 4 E2B (gemma4:e2b، سياق 128K) فهو أصغر. وبعد تنزيل النموذج يعمل التلخيص دون اتصال بالإنترنت.',
          },
          {
            q: 'كيف أمنع الملخص من التبسيط المفرط؟',
            a: 'أخبر النموذج بما يجب الإبقاء عليه: اطلب ملخصات لكل قسم تحافظ على الأرقام والأسماء والتحفظات، وحدّد طولًا مستهدفًا لكل قسم، واطلب منه اقتباس جملة المصدر وراء كل ادعاء رئيسي. ثم افحص منتصف المستند بالعينة مقابل المصدر.',
          },
          {
            q: 'هل أحتاج ذاكرة VRAM إضافية لاستخدام السياق الكامل؟',
            a: 'نعم. تنمو ذاكرة السياق المؤقتة مع طول التسلسل فوق حجم تنزيل النموذج. افحص ollama ps بعد التحميل: إذا أظهر عمود PROCESSOR تقسيمًا بين CPU وGPU فقلّل طول السياق أو اختر نموذجًا أصغر.',
          },
          {
            q: 'هل يكون التقطيع أحيانًا أفضل من التلخيص بالسياق الكامل؟',
            a: 'نعم، عندما تكون الذاكرة محدودة أو يتجاوز المستند نافذة السياق. ويفيد التقطيع أيضًا عندما تحتاج إلى ذكر القسم الذي جاءت منه كل نقطة في الملخص، لأن التلخيص بالسياق الكامل قد يطمس حدود الأقسام.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أي نماذج Ollama تدعم سياق 128K؟](/prompt-bites/ollama-128k-context-models) — القائمة الكاملة للنماذج طويلة السياق',
          '[أفضل نموذج تضمين لـ RAG محلي](/prompt-bites/best-embedding-model-local-rag) — نهج بديل قائم على التقطيع',
          '[كم VRAM تحتاجه لتشغيل LLM محليًا؟](/prompt-bites/how-much-vram-for-local-llm) — تحديد حجم العتاد لعمل السياق الطويل',
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-de.webp',
    title: 'Das beste lokale LLM für Dokumentenzusammenfassung?',
    seoTitle: 'Bestes lokales LLM für Dokumentenzusammenfassung 2026',
    metaDescription: 'Gemma 4 12B (256K Kontext, 8 GB) ist der beste Einstieg für lokale Zusammenfassungen mit Ollama; Qwen3.8 27B und Gemma 4 31B passen zu 24-GB-GPUs.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Nutzer, die lange Dokumente lokal zusammenfassen und dafür ein langes Kontextfenster brauchen',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Gemma 4 12B ist der beste Einstieg für lokale Zusammenfassungen mit Ollama: Es bietet 256K Kontext, einen Download von 7,7–8,0 GB und nennt Textzusammenfassung als vorgesehenen Einsatzzweck.</strong> Auf einer 24-GB-GPU bewältigen Qwen3.8 27B und Gemma 4 31B (beide 256K) längere oder dichtere Dokumente. Ollamas Standardkontext beträgt auf GPUs unter 24 GiB VRAM nur 4K – erhöhen Sie ihn vor dem Zusammenfassen, sonst wird ein Teil des Dokuments verworfen.',
    toc: [
      { label: 'Beste Wahl: Gemma 4 12B (Qwen3.8 27B oder Gemma 4 31B für 24 GB)', anchor: '#best-pick' },
      { label: 'Modellempfehlungen nach Speichergröße', anchor: '#model-tiers' },
      { label: 'Zuerst Ollamas Kontextlänge erhöhen', anchor: '#context-setup' },
      { label: 'Vollkontext-Zusammenfassung vs. Chunking', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste lokale LLM zum Zusammenfassen langer Dokumente?',
        answer: 'Gemma 4 12B ist der beste Einstieg mit Ollama: 256K Kontext bei 7,7–8,0 GB Download. Qwen3.8 27B und Gemma 4 31B passen zu 24-GB-GPUs.',
        bullets: [
          'Gemma 4 12B (gemma4:12b) hat ein 256K-Kontextfenster und steht unter Apache 2.0 – die Standardwahl für Rechner mit 12–16 GB.',
          'Qwen3.8 27B (18 GB) und Gemma 4 31B (19–20 GB) passen zu 24-GB-GPUs; Google nennt für den 31B 66,4 % gegenüber 43,4 % für den 12B im MRCR-v2-8-Needle-128K-Test.',
          'Legen Sie die Kontextlänge selbst fest: Ollama nutzt auf GPUs unter 24 GiB VRAM standardmäßig 4K, was lange Dokumente abschneidet.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl: Gemma 4 12B – 256K Kontext, 7,7–8,0 GB Download, Zusammenfassung als Einsatzzweck genannt',
          'Beste Wahl für 24-GB-GPUs: Qwen3.8 27B oder Gemma 4 31B – beide 256K Kontext, stärker bei dichten Dokumenten mit vielen Themen',
          'Ollama nutzt auf GPUs unter 24 GiB VRAM standardmäßig 4K Kontext – erhöhen Sie OLLAMA_CONTEXT_LENGTH vor dem Zusammenfassen',
          'Qwen3 14B ist auf Ollama nur mit 40K Kontext gelistet und daher keine Wahl für lange Dokumente',
          'Chunking bleibt richtig, wenn das Dokument das Kontextfenster übersteigt oder der VRAM knapp ist',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Gemma 4 12B (Qwen3.8 27B oder Gemma 4 31B für 24 GB)',
        content: [
          '<strong>Gemma 4 12B ist der beste Einstieg für lokale Zusammenfassungen: Der Ollama-Tag (gemma4:12b) listet ein 256K-Kontextfenster bei 7,7–8,0 GB Download, und die Modellkarte von Google nennt Zusammenfassungen von Berichten und Forschungsarbeiten als vorgesehenen Einsatz.</strong> Es steht unter Apache 2.0 und läuft bequem auf einem Rechner mit 12–16 GB.',
          'Auf einer 24-GB-GPU lohnt der Wechsel zu Qwen3.8 27B (qwen3.8:27b, 18 GB, 256K) oder Gemma 4 31B (gemma4:31b, 19–20 GB, 256K). Google nennt im MRCR-v2-8-Needle-128K-Langkontexttest 66,4 % für den 31B gegenüber 43,4 % für den 12B; das größere Modell ist daher die sicherere Wahl für dichte Dokumente mit vielen Themen, bei denen die Zusammenfassung keinen Abschnitt übergehen darf.',
          'Für diese Seite haben wir keinen eigenen Zusammenfassungs-Benchmark durchgeführt. Die Empfehlungen beruhen auf den in Ollama gelisteten Kontextfenstern, Download-Größen und Herstellerangaben – testen Sie jedes Modell mit Ihren eigenen Dokumenten, bevor Sie sich darauf verlassen. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B (llama3.1:8b, 4,9 GB, 128K) eignet sich weiterhin für leichte Zusammenfassungen auf 8-GB-Rechnern, doch sein Ollama-Eintrag wurde seit etwa einem Jahr nicht aktualisiert.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'Modellempfehlungen nach Speichergröße',
        content: [
          'In der Ollama-Bibliothek gelistete Kontextfenster und Download-Größen, von klein nach groß. Die Download-Größe ist nicht der gesamte Speicherbedarf: Der Kontext-Cache kommt hinzu und wächst mit der Kontextlänge.',
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Kontext'],
        rows: [
          { 'Modell': 'Llama 3.1 8B', 'Ollama-Tag': 'llama3.1:8b', 'Download': '4,9 GB', 'Kontext': '128K' },
          { 'Modell': 'Gemma 4 E4B', 'Ollama-Tag': 'gemma4:e4b', 'Download': '6,6–9,5 GB', 'Kontext': '128K' },
          { 'Modell': 'Gemma 4 12B', 'Ollama-Tag': 'gemma4:12b', 'Download': '7,7–8,0 GB', 'Kontext': '256K' },
          { 'Modell': 'Gemma 4 26B A4B', 'Ollama-Tag': 'gemma4:26b', 'Download': '16–19 GB', 'Kontext': '256K' },
          { 'Modell': 'Qwen3.8 27B', 'Ollama-Tag': 'qwen3.8:27b', 'Download': '18 GB', 'Kontext': '256K' },
          { 'Modell': 'Gemma 4 31B', 'Ollama-Tag': 'gemma4:31b', 'Download': '19–20 GB', 'Kontext': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'Zuerst Ollamas Kontextlänge erhöhen',
        content: [
          '<strong>Ollama nutzt auf GPUs mit unter 24 GiB VRAM standardmäßig 4K Kontext, bei 24–48 GiB 32K und ab 48 GiB 256K – ein langes Dokument wird also abgeschnitten, solange Sie die Einstellung nicht erhöhen.</strong> Ein 4K-Fenster fasst etwa 3.000 englische Wörter; das Modell fasst dann nur zusammen, was hineinpasst. Siehe die [Ollama-Dokumentation zur Kontextlänge](https://docs.ollama.com/context-length).',
          'Setzen Sie <code>OLLAMA_CONTEXT_LENGTH</code> vor dem Start des Servers, bemessen nach Dokument plus Platz für die Zusammenfassung, und führen Sie dann <code>ollama ps</code> aus: Die Spalte CONTEXT zeigt die zugewiesene Länge, PROCESSOR zeigt, ob das Modell vollständig auf der GPU liegt. Ziel ist 100 % GPU bei dem Kontext, den Sie brauchen.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'Faustregel: Ein Token entspricht etwa 0,75 englischen Wörtern, ein Dokument mit 50.000 Wörtern also rund 67.000 Tokens. Andere Sprachen benötigen mehr Tokens pro Wort.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'Vollkontext-Zusammenfassung vs. Chunking',
        content: [
          'Ein komplettes Dokument in einem Durchgang in ein Langkontext-Modell zu geben, vermeidet den Kontextverlust über Chunk-Grenzen hinweg, braucht aber mehr Speicher und ist nicht automatisch treuer zur Vorlage.',
          'Forschung zur Zusammenfassung langer Texte berichtet von einer positionsabhängigen Verzerrung, wie treu Zusammenfassungen verschiedenen Teilen eines langen Dokuments sind ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)); prüfen Sie daher die Mitte langer Dokumente gegen die Quelle.',
          'Nutzen Sie Chunking – jeden Abschnitt zusammenfassen, dann die Zusammenfassungen zusammenfassen, optional mit einem Embedding-Modell zum Abrufen relevanter Abschnitte –, wenn der VRAM begrenzt ist, das Dokument das Kontextfenster übersteigt oder Sie belegen müssen, aus welchem Abschnitt ein Punkt stammt.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welches ist das beste Ollama-Modell zum Zusammenfassen?',
            a: 'Gemma 4 12B (gemma4:12b) für die meisten Rechner: 256K Kontext bei 7,7–8,0 GB Download. Auf einer 24-GB-GPU nehmen Sie Qwen3.8 27B oder Gemma 4 31B. Diese Empfehlungen beruhen auf gelisteten Daten und Herstellerangaben, nicht auf einem von uns durchgeführten Zusammenfassungs-Benchmark.',
          },
          {
            q: 'Warum deckt meine lokale Zusammenfassung nur einen Teil des Dokuments ab?',
            a: 'Meist ist das Kontextfenster zu klein. Ollama nutzt auf GPUs unter 24 GiB VRAM standardmäßig 4K, der Rest des Dokuments wird verworfen. Setzen Sie OLLAMA_CONTEXT_LENGTH über die Token-Zahl des Dokuments und prüfen Sie es mit ollama ps.',
          },
          {
            q: 'Unterstützt Qwen3 14B auf Ollama 128K Kontext?',
            a: 'Nein. Ollama listet qwen3:14b mit 40K Kontextfenster; nur qwen3:4b und qwen3:30b sind mit 256K gelistet. Nehmen Sie für lange Dokumente stattdessen Gemma 4 12B oder Qwen3.8 27B.',
          },
          {
            q: 'Welche Modelle eignen sich für Offline- oder Edge-Geräte?',
            a: 'Gemma 4 E4B (gemma4:e4b, 128K) und Llama 3.1 8B (4,9 GB, 128K) passen zu Rechnern der 8-GB-Klasse; Gemma 4 E2B (gemma4:e2b, 128K) ist noch kleiner. Ist ein Modell heruntergeladen, läuft die Zusammenfassung ohne Internetverbindung.',
          },
          {
            q: 'Wie verhindere ich, dass eine Zusammenfassung zu stark vereinfacht?',
            a: 'Sagen Sie dem Modell, was erhalten bleiben soll: Fordern Sie abschnittsweise Zusammenfassungen an, die Zahlen, Namen und Einschränkungen bewahren, legen Sie eine Ziellänge pro Abschnitt fest und lassen Sie es den Quellsatz hinter jeder Kernaussage zitieren. Prüfen Sie dann die Mitte des Dokuments stichprobenartig gegen die Quelle.',
          },
          {
            q: 'Brauche ich zusätzlichen VRAM, um den vollen Kontext zu nutzen?',
            a: 'Ja. Der Kontext-Cache wächst mit der Sequenzlänge zusätzlich zur Download-Größe des Modells. Prüfen Sie nach dem Laden ollama ps: Zeigt die Spalte PROCESSOR eine CPU/GPU-Aufteilung, verringern Sie die Kontextlänge oder wählen Sie ein kleineres Modell.',
          },
          {
            q: 'Ist Chunking manchmal besser als Vollkontext-Zusammenfassung?',
            a: 'Ja, wenn VRAM begrenzt ist oder das Dokument das Kontextfenster übersteigt. Chunking hilft auch, wenn Sie belegen müssen, aus welchem Abschnitt ein Punkt der Zusammenfassung stammt, da Vollkontext-Zusammenfassung Abschnittsgrenzen verwischen kann.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Welche Ollama-Modelle unterstützen 128K-Kontext?](/prompt-bites/ollama-128k-context-models) — die vollständige Liste der Long-Context-Modelle',
          '[Bestes Embedding-Modell für lokales RAG](/prompt-bites/best-embedding-model-local-rag) — ein chunking-basierter alternativer Ansatz',
          '[Wie viel VRAM braucht man für ein lokales LLM?](/prompt-bites/how-much-vram-for-local-llm) — Hardware für Long-Context-Arbeit dimensionieren',
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-es.webp',
    title: '¿Cuál es el Mejor LLM Local para Resumir Documentos?',
    seoTitle: 'Mejor LLM Local para Resumen de Documentos 2026',
    metaDescription: 'Gemma 4 12B (contexto de 256K, 8 GB) es el mejor punto de partida para resumir en local con Ollama; Qwen3.8 27B y Gemma 4 31B encajan en GPU de 24 GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuarios que resumen documentos largos localmente y necesitan una ventana de contexto larga',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Gemma 4 12B es el mejor punto de partida para resumir en local con Ollama: ofrece una ventana de contexto de 256K, una descarga de 7.7–8.0 GB y lista el resumen de texto como uso previsto.</strong> En una GPU de 24 GB, Qwen3.8 27B y Gemma 4 31B (ambos 256K) manejan documentos más largos o densos. El contexto predeterminado de Ollama es de solo 4K en GPU con menos de 24 GiB de VRAM, así que auméntalo antes de resumir o parte del documento se descarta.',
    toc: [
      { label: 'Mejor opción: Gemma 4 12B (Qwen3.8 27B o Gemma 4 31B para 24 GB)', anchor: '#best-pick' },
      { label: 'Modelos recomendados según la memoria', anchor: '#model-tiers' },
      { label: 'Aumenta primero la longitud de contexto de Ollama', anchor: '#context-setup' },
      { label: 'Resumen con contexto completo vs. chunking', anchor: '#comparison' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor LLM local para resumir documentos largos?',
        answer: 'Gemma 4 12B es el mejor punto de partida en Ollama: 256K de contexto en una descarga de 7.7–8.0 GB. Qwen3.8 27B y Gemma 4 31B encajan en GPU de 24 GB.',
        bullets: [
          'Gemma 4 12B (gemma4:12b) tiene una ventana de contexto de 256K y licencia Apache 2.0: la opción por defecto para equipos de 12–16 GB.',
          'Qwen3.8 27B (18 GB) y Gemma 4 31B (19–20 GB) encajan en GPU de 24 GB; Google informa 66.4 % para el 31B frente a 43.4 % para el 12B en la prueba MRCR v2 8-needle 128K.',
          'Define tú la longitud de contexto: Ollama usa 4K por defecto en GPU con menos de 24 GiB de VRAM, lo que corta los documentos largos.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción: Gemma 4 12B — 256K de contexto, descarga de 7.7–8.0 GB, resumen indicado como uso previsto',
          'Mejor para GPU de 24 GB: Qwen3.8 27B o Gemma 4 31B — ambos con 256K, más sólidos en documentos densos con varios temas',
          'Ollama usa 4K de contexto por defecto en GPU con menos de 24 GiB de VRAM — aumenta OLLAMA_CONTEXT_LENGTH antes de resumir',
          'Qwen3 14B figura en Ollama con solo 40K de contexto, así que no es una opción para documentos largos',
          'El chunking sigue siendo lo correcto cuando el documento supera la ventana de contexto o la VRAM es justa',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: Gemma 4 12B (Qwen3.8 27B o Gemma 4 31B para 24 GB)',
        content: [
          '<strong>Gemma 4 12B es el mejor punto de partida para resumir en local: su etiqueta de Ollama (gemma4:12b) lista una ventana de contexto de 256K en una descarga de 7.7–8.0 GB, y la ficha del modelo de Google cita los resúmenes de informes y artículos de investigación como uso previsto.</strong> Se publica bajo Apache 2.0 y cabe cómodamente en un equipo de 12–16 GB.',
          'En una GPU de 24 GB, sube a Qwen3.8 27B (qwen3.8:27b, 18 GB, 256K) o Gemma 4 31B (gemma4:31b, 19–20 GB, 256K). Google informa 66.4 % para el 31B frente a 43.4 % para el 12B en la prueba de contexto largo MRCR v2 8-needle 128K, así que el modelo mayor es la opción más segura para documentos densos con varios temas en los que el resumen no debe omitir ninguna sección.',
          'No ejecutamos un benchmark de resumen para esta página. Las recomendaciones se basan en las ventanas de contexto y tamaños de descarga listados en Ollama y en resultados comunicados por los fabricantes: prueba cualquier modelo con tus propios documentos antes de depender de él. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B (llama3.1:8b, 4.9 GB, 128K) sigue sirviendo para resúmenes ligeros en equipos de 8 GB, pero su ficha en Ollama no se actualiza desde hace aproximadamente un año.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'Modelos recomendados según la memoria',
        content: [
          'Ventanas de contexto y tamaños de descarga listados en la biblioteca de Ollama, de menor a mayor. El tamaño de descarga no es la memoria total: la caché de contexto se suma y crece con la longitud del contexto.',
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Descarga', 'Contexto'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'Etiqueta Ollama': 'llama3.1:8b', 'Descarga': '4.9 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 E4B', 'Etiqueta Ollama': 'gemma4:e4b', 'Descarga': '6.6–9.5 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 12B', 'Etiqueta Ollama': 'gemma4:12b', 'Descarga': '7.7–8.0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 26B A4B', 'Etiqueta Ollama': 'gemma4:26b', 'Descarga': '16–19 GB', 'Contexto': '256K' },
          { 'Modelo': 'Qwen3.8 27B', 'Etiqueta Ollama': 'qwen3.8:27b', 'Descarga': '18 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 31B', 'Etiqueta Ollama': 'gemma4:31b', 'Descarga': '19–20 GB', 'Contexto': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'Aumenta primero la longitud de contexto de Ollama',
        content: [
          '<strong>Ollama usa por defecto 4K de contexto en GPU con menos de 24 GiB de VRAM, 32K con 24–48 GiB y 256K con 48 GiB o más, así que un documento largo se corta salvo que aumentes el ajuste.</strong> Una ventana de 4K admite unas 3,000 palabras en inglés; el modelo resume solo lo que cabe. Consulta la [documentación de longitud de contexto de Ollama](https://docs.ollama.com/context-length).',
          'Define <code>OLLAMA_CONTEXT_LENGTH</code> antes de iniciar el servidor, dimensionada según el documento más espacio para el resumen, y luego ejecuta <code>ollama ps</code>: la columna CONTEXT muestra la longitud asignada y PROCESSOR indica si el modelo está completamente en la GPU. Apunta a 100 % GPU con el contexto que necesitas.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'Regla práctica: un token equivale a unas 0.75 palabras en inglés, así que un documento de 50,000 palabras son unos 67,000 tokens. Otros idiomas usan más tokens por palabra.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'Resumen con contexto completo vs. chunking',
        content: [
          'Pasar un documento entero a un modelo de contexto largo en una sola pasada evita la pérdida de contexto entre fragmentos de los pipelines de dividir y resumir, pero requiere más memoria y no es automáticamente más fiel al original.',
          'La investigación sobre resumen de textos largos describe un sesgo posicional en la fidelidad de los resúmenes respecto a distintas partes de un documento largo ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)); por eso conviene comparar con el original la parte central de los documentos largos.',
          'Usa chunking —resumir cada sección y luego resumir los resúmenes, opcionalmente con un modelo de embeddings para recuperar secciones relevantes— cuando la VRAM es limitada, el documento supera la ventana de contexto o necesitas citar de qué sección procede un punto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Cuál es el mejor modelo de Ollama para resumir?',
            a: 'Gemma 4 12B (gemma4:12b) para la mayoría de los equipos: 256K de contexto en una descarga de 7.7–8.0 GB. En una GPU de 24 GB, usa Qwen3.8 27B o Gemma 4 31B. Estas recomendaciones se basan en especificaciones listadas y resultados de los fabricantes, no en un benchmark de resumen realizado por nosotros.',
          },
          {
            q: '¿Por qué mi resumen local solo cubre parte del documento?',
            a: 'Normalmente la ventana de contexto es demasiado pequeña. Ollama usa 4K por defecto en GPU con menos de 24 GiB de VRAM, así que el resto del documento se descarta. Define OLLAMA_CONTEXT_LENGTH por encima del número de tokens del documento y compruébalo con ollama ps.',
          },
          {
            q: '¿Qwen3 14B admite 128K de contexto en Ollama?',
            a: 'No. Ollama lista qwen3:14b con una ventana de contexto de 40K; solo qwen3:4b y qwen3:30b figuran con 256K. Para documentos largos, usa Gemma 4 12B o Qwen3.8 27B.',
          },
          {
            q: '¿Qué modelos sirven para dispositivos sin conexión o edge?',
            a: 'Gemma 4 E4B (gemma4:e4b, 128K) y Llama 3.1 8B (4.9 GB, 128K) encajan en equipos de la clase de 8 GB; Gemma 4 E2B (gemma4:e2b, 128K) es aún más pequeño. Una vez descargado el modelo, el resumen funciona sin conexión a internet.',
          },
          {
            q: '¿Cómo evito que un resumen simplifique demasiado?',
            a: 'Indica al modelo qué conservar: pide resúmenes por sección que mantengan cifras, nombres y salvedades, fija una longitud objetivo por sección y pídele que cite la frase de origen de cada afirmación clave. Después comprueba por muestreo la parte central del documento con el original.',
          },
          {
            q: '¿Necesito VRAM adicional para usar el contexto completo?',
            a: 'Sí. La caché de contexto crece con la longitud de la secuencia además del tamaño de descarga del modelo. Revisa ollama ps tras cargar: si la columna PROCESSOR muestra un reparto CPU/GPU, reduce la longitud de contexto o elige un modelo más pequeño.',
          },
          {
            q: '¿El chunking es a veces mejor que el resumen con contexto completo?',
            a: 'Sí, cuando la VRAM es limitada o el documento supera la ventana de contexto. El chunking también ayuda cuando necesitas citar de qué sección procede un punto del resumen, ya que el resumen con contexto completo puede difuminar los límites entre secciones.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[¿Qué Modelos de Ollama Soportan 128K de Contexto?](/prompt-bites/ollama-128k-context-models) — la lista completa de modelos de contexto largo',
          '[Mejor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — un enfoque alternativo basado en fragmentación',
          '[¿Cuánta VRAM Necesitas para un LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para trabajo de contexto largo',
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-fr.webp',
    title: 'Quel est le meilleur LLM local pour la synthèse de documents ?',
    seoTitle: 'Meilleur LLM local pour la synthèse de documents 2026',
    metaDescription: 'Gemma 4 12B (contexte 256K, 8 Go) est le meilleur point de départ pour résumer en local avec Ollama ; Qwen3.8 27B et Gemma 4 31B visent les GPU de 24 Go.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs qui résument de longs documents en local et ont besoin d\'une fenêtre de contexte étendue',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Gemma 4 12B est le meilleur point de départ pour résumer en local avec Ollama : il offre une fenêtre de contexte de 256K, un téléchargement de 7.7–8.0 Go et cite le résumé de texte parmi ses usages prévus.</strong> Sur un GPU de 24 Go, Qwen3.8 27B et Gemma 4 31B (tous deux 256K) gèrent des documents plus longs ou plus denses. Le contexte par défaut d\'Ollama n\'est que de 4K sur les GPU de moins de 24 GiB de VRAM : augmentez-le avant de résumer, sinon une partie du document est ignorée.',
    toc: [
      { label: 'Meilleur choix : Gemma 4 12B (Qwen3.8 27B ou Gemma 4 31B pour 24 Go)', anchor: '#best-pick' },
      { label: 'Modèles recommandés selon la mémoire', anchor: '#model-tiers' },
      { label: 'Augmenter d\'abord la longueur de contexte d\'Ollama', anchor: '#context-setup' },
      { label: 'Résumé en contexte complet vs chunking', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures associées', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur LLM local pour résumer de longs documents ?',
        answer: 'Gemma 4 12B est le meilleur point de départ sur Ollama : 256K de contexte pour 7.7–8.0 Go de téléchargement. Qwen3.8 27B et Gemma 4 31B visent les GPU de 24 Go.',
        bullets: [
          'Gemma 4 12B (gemma4:12b) offre une fenêtre de contexte de 256K sous licence Apache 2.0 — le choix par défaut pour les machines de 12–16 Go.',
          'Qwen3.8 27B (18 Go) et Gemma 4 31B (19–20 Go) visent les GPU de 24 Go ; Google annonce 66.4 % pour le 31B contre 43.4 % pour le 12B au test MRCR v2 8-needle 128K.',
          'Définissez vous-même la longueur de contexte : Ollama utilise 4K par défaut sur les GPU de moins de 24 GiB de VRAM, ce qui tronque les longs documents.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix : Gemma 4 12B — contexte 256K, téléchargement de 7.7–8.0 Go, résumé cité parmi les usages prévus',
          'Meilleur choix pour GPU de 24 Go : Qwen3.8 27B ou Gemma 4 31B — tous deux 256K, plus solides sur les documents denses et multithématiques',
          'Ollama utilise 4K de contexte par défaut sur les GPU de moins de 24 GiB de VRAM — augmentez OLLAMA_CONTEXT_LENGTH avant de résumer',
          'Qwen3 14B n\'est listé qu\'avec 40K de contexte sur Ollama : ce n\'est pas un choix pour les longs documents',
          'Le chunking reste la bonne approche quand le document dépasse la fenêtre de contexte ou que la VRAM est juste',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Gemma 4 12B (Qwen3.8 27B ou Gemma 4 31B pour 24 Go)',
        content: [
          '<strong>Gemma 4 12B est le meilleur point de départ pour résumer en local : son tag Ollama (gemma4:12b) indique une fenêtre de contexte de 256K pour 7.7–8.0 Go de téléchargement, et la fiche du modèle de Google cite les résumés de rapports et d\'articles de recherche parmi les usages prévus.</strong> Il est publié sous licence Apache 2.0 et tient confortablement sur une machine de 12–16 Go.',
          'Sur un GPU de 24 Go, passez à Qwen3.8 27B (qwen3.8:27b, 18 Go, 256K) ou Gemma 4 31B (gemma4:31b, 19–20 Go, 256K). Google annonce 66.4 % pour le 31B contre 43.4 % pour le 12B au test de contexte long MRCR v2 8-needle 128K ; le plus grand modèle est donc le choix le plus sûr pour les documents denses et multithématiques où le résumé ne doit omettre aucune section.',
          'Nous n\'avons pas réalisé de benchmark de résumé pour cette page. Les recommandations reposent sur les fenêtres de contexte et tailles de téléchargement listées dans Ollama et sur des résultats annoncés par les éditeurs : testez tout modèle sur vos propres documents avant de vous y fier. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B (llama3.1:8b, 4.9 Go, 128K) convient toujours aux résumés légers sur des machines de 8 Go, mais sa fiche Ollama n\'a pas été mise à jour depuis environ un an.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'Modèles recommandés selon la mémoire',
        content: [
          'Fenêtres de contexte et tailles de téléchargement listées dans la bibliothèque Ollama, du plus petit au plus grand. La taille de téléchargement n\'est pas la mémoire totale : le cache de contexte s\'y ajoute et croît avec la longueur du contexte.',
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Contexte'],
        rows: [
          { 'Modèle': 'Llama 3.1 8B', 'Tag Ollama': 'llama3.1:8b', 'Téléchargement': '4.9 GB', 'Contexte': '128K' },
          { 'Modèle': 'Gemma 4 E4B', 'Tag Ollama': 'gemma4:e4b', 'Téléchargement': '6.6–9.5 GB', 'Contexte': '128K' },
          { 'Modèle': 'Gemma 4 12B', 'Tag Ollama': 'gemma4:12b', 'Téléchargement': '7.7–8.0 GB', 'Contexte': '256K' },
          { 'Modèle': 'Gemma 4 26B A4B', 'Tag Ollama': 'gemma4:26b', 'Téléchargement': '16–19 GB', 'Contexte': '256K' },
          { 'Modèle': 'Qwen3.8 27B', 'Tag Ollama': 'qwen3.8:27b', 'Téléchargement': '18 GB', 'Contexte': '256K' },
          { 'Modèle': 'Gemma 4 31B', 'Tag Ollama': 'gemma4:31b', 'Téléchargement': '19–20 GB', 'Contexte': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'Augmenter d\'abord la longueur de contexte d\'Ollama',
        content: [
          '<strong>Ollama utilise par défaut 4K de contexte sur les GPU de moins de 24 GiB de VRAM, 32K entre 24 et 48 GiB et 256K à partir de 48 GiB : un long document est donc tronqué tant que vous n\'augmentez pas ce réglage.</strong> Une fenêtre de 4K contient environ 3 000 mots anglais ; le modèle ne résume que ce qui y tient. Voir la [documentation d\'Ollama sur la longueur de contexte](https://docs.ollama.com/context-length).',
          'Définissez <code>OLLAMA_CONTEXT_LENGTH</code> avant de démarrer le serveur, dimensionnée selon le document plus la place du résumé, puis lancez <code>ollama ps</code> : la colonne CONTEXT indique la longueur allouée et PROCESSOR montre si le modèle tient entièrement sur le GPU. Visez 100 % GPU au contexte dont vous avez besoin.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'Règle empirique : un token vaut environ 0.75 mot anglais, donc un document de 50 000 mots représente environ 67 000 tokens. Les autres langues consomment plus de tokens par mot.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'Résumé en contexte complet vs chunking',
        content: [
          'Fournir un document entier à un modèle à long contexte en un seul passage évite la perte de contexte entre fragments des pipelines « découper puis résumer », mais demande plus de mémoire et n\'est pas automatiquement plus fidèle.',
          'Les recherches sur le résumé de textes longs décrivent un biais de position dans la fidélité des résumés selon les parties d\'un long document ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)) ; vérifiez donc le milieu des longs documents par rapport à la source.',
          'Utilisez le chunking — résumer chaque section puis résumer les résumés, éventuellement avec un modèle d\'embeddings pour retrouver les sections pertinentes — lorsque la VRAM est limitée, que le document dépasse la fenêtre de contexte ou que vous devez citer la section d\'origine d\'un point.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quel est le meilleur modèle Ollama pour résumer ?',
            a: 'Gemma 4 12B (gemma4:12b) pour la plupart des machines : 256K de contexte pour 7.7–8.0 Go de téléchargement. Sur un GPU de 24 Go, utilisez Qwen3.8 27B ou Gemma 4 31B. Ces recommandations reposent sur les caractéristiques listées et les résultats des éditeurs, pas sur un benchmark de résumé réalisé par nos soins.',
          },
          {
            q: 'Pourquoi mon résumé local ne couvre-t-il qu\'une partie du document ?',
            a: 'Le plus souvent, la fenêtre de contexte est trop petite. Ollama utilise 4K par défaut sur les GPU de moins de 24 GiB de VRAM, et le reste du document est ignoré. Définissez OLLAMA_CONTEXT_LENGTH au-dessus du nombre de tokens du document et vérifiez avec ollama ps.',
          },
          {
            q: 'Qwen3 14B prend-il en charge 128K de contexte sur Ollama ?',
            a: 'Non. Ollama liste qwen3:14b avec une fenêtre de 40K ; seuls qwen3:4b et qwen3:30b sont listés à 256K. Pour les longs documents, utilisez plutôt Gemma 4 12B ou Qwen3.8 27B.',
          },
          {
            q: 'Quels modèles conviennent aux appareils hors ligne ou edge ?',
            a: 'Gemma 4 E4B (gemma4:e4b, 128K) et Llama 3.1 8B (4.9 Go, 128K) conviennent aux machines de la classe 8 Go ; Gemma 4 E2B (gemma4:e2b, 128K) est encore plus petit. Une fois le modèle téléchargé, le résumé fonctionne sans connexion internet.',
          },
          {
            q: 'Comment éviter qu\'un résumé simplifie trop ?',
            a: 'Indiquez au modèle ce qu\'il doit conserver : demandez des résumés section par section qui préservent chiffres, noms et réserves, fixez une longueur cible par section et demandez-lui de citer la phrase source de chaque affirmation clé. Vérifiez ensuite par sondage le milieu du document par rapport à la source.',
          },
          {
            q: 'Faut-il de la VRAM supplémentaire pour utiliser le contexte complet ?',
            a: 'Oui. Le cache de contexte croît avec la longueur de séquence en plus de la taille de téléchargement du modèle. Vérifiez ollama ps après le chargement : si la colonne PROCESSOR indique une répartition CPU/GPU, réduisez la longueur de contexte ou choisissez un modèle plus petit.',
          },
          {
            q: 'Le chunking est-il parfois préférable au résumé en contexte complet ?',
            a: 'Oui, quand la VRAM est limitée ou que le document dépasse la fenêtre de contexte. Le chunking aide aussi lorsque vous devez citer la section d\'origine d\'un point du résumé, car le résumé en contexte complet peut brouiller les limites entre sections.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Quels modèles Ollama prennent en charge un contexte de 128K ?](/prompt-bites/ollama-128k-context-models) — la liste complète des modèles à contexte long',
          '[Meilleur modèle d\'embedding pour un RAG local](/prompt-bites/best-embedding-model-local-rag) — une approche alternative basée sur le découpage',
          '[De combien de VRAM avez-vous besoin pour un LLM local ?](/prompt-bites/how-much-vram-for-local-llm) — dimensionner le matériel pour du travail à contexte long',
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-ja.webp',
    title: '文書要約に最適なローカルLLMは?',
    seoTitle: '2026年版 文書要約に最適なローカルLLM',
    metaDescription: 'Ollamaでのローカル要約は Gemma 4 12B（256Kコンテキスト、8 GB）が最適な出発点。24 GB GPUなら Qwen3.8 27B と Gemma 4 31B が適しています。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '長いコンテキストウィンドウが必要な、ローカルで長文書を要約するユーザー',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollamaでローカル要約を始めるなら、Gemma 4 12B が最適な出発点です。256Kのコンテキストウィンドウ、7.7–8.0 GBのダウンロードサイズを備え、テキスト要約が想定用途に挙げられています。</strong>24 GB GPUでは、Qwen3.8 27B と Gemma 4 31B（いずれも256K）がより長く密度の高い文書に対応します。Ollamaの既定コンテキストはVRAM 24 GiB未満のGPUでわずか4Kのため、要約の前に引き上げないと文書の一部が切り捨てられます。',
    toc: [
      { label: '最適な選択: Gemma 4 12B（24 GBなら Qwen3.8 27B / Gemma 4 31B）', anchor: '#best-pick' },
      { label: 'メモリ容量別のモデル選び', anchor: '#model-tiers' },
      { label: '最初にOllamaのコンテキスト長を引き上げる', anchor: '#context-setup' },
      { label: '全文コンテキスト要約とチャンク分割の比較', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: '長い文書を要約するのに最適なローカルLLMは何ですか？',
        answer: 'Ollamaでは Gemma 4 12B が最適な出発点で、7.7–8.0 GBのダウンロードで256Kコンテキストを使えます。24 GB GPUなら Qwen3.8 27B と Gemma 4 31B が適しています。',
        bullets: [
          'Gemma 4 12B（gemma4:12b）は256Kのコンテキストウィンドウを持ち、Apache 2.0ライセンスです。12–16 GBのマシン向けの既定の選択肢です。',
          'Qwen3.8 27B（18 GB）と Gemma 4 31B（19–20 GB）は24 GB GPU向けです。GoogleはMRCR v2 8-needle 128Kテストで31Bが66.4%、12Bが43.4%と報告しています。',
          'コンテキスト長は自分で設定してください。OllamaはVRAM 24 GiB未満のGPUで既定4Kとなり、長い文書が途中で切れます。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最適な選択: Gemma 4 12B — 256Kコンテキスト、7.7–8.0 GBのダウンロード、要約が想定用途に記載',
          '24 GB GPU向け: Qwen3.8 27B または Gemma 4 31B — どちらも256Kで、複数テーマの密度の高い文書に強い',
          'OllamaはVRAM 24 GiB未満のGPUで既定4Kコンテキスト — 要約前に OLLAMA_CONTEXT_LENGTH を引き上げる',
          'Qwen3 14B はOllamaで40Kコンテキストとしか記載されておらず、長文書向けではない',
          '文書がコンテキストウィンドウを超える場合やVRAMが厳しい場合は、チャンク分割が引き続き適切',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最適な選択: Gemma 4 12B（24 GBなら Qwen3.8 27B / Gemma 4 31B）',
        content: [
          '<strong>ローカル要約の出発点には Gemma 4 12B が最適です。Ollamaのタグ（gemma4:12b）は7.7–8.0 GBのダウンロードで256Kのコンテキストウィンドウを掲載しており、Googleのモデルカードはレポートや研究論文の要約を想定用途に挙げています。</strong>Apache 2.0で公開されており、12–16 GBのマシンに余裕で収まります。',
          '24 GB GPUでは Qwen3.8 27B（qwen3.8:27b、18 GB、256K）または Gemma 4 31B（gemma4:31b、19–20 GB、256K）に切り替えます。GoogleはMRCR v2 8-needle 128Kの長文脈テストで31Bが66.4%、12Bが43.4%と報告しており、要約が節を取りこぼせない密度の高い複数テーマの文書では大きいモデルが安全です。',
          '本ページでは要約ベンチマークを実施していません。推奨はOllama掲載のコンテキストウィンドウ、ダウンロードサイズ、ベンダー報告の結果に基づきます。どのモデルも、頼る前に自分の文書で試してください。 ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B（llama3.1:8b、4.9 GB、128K）は8 GBマシンでの軽量な要約には今も使えますが、Ollamaの掲載は約1年間更新されていません。',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'メモリ容量別のモデル選び',
        content: [
          'Ollamaライブラリ掲載のコンテキストウィンドウとダウンロードサイズを、小さい順に示します。ダウンロードサイズは総メモリではありません。コンテキストキャッシュが加わり、コンテキスト長に応じて増えます。',
        ],
        columns: ['モデル', 'Ollamaタグ', 'ダウンロード', 'コンテキスト'],
        rows: [
          { 'モデル': 'Llama 3.1 8B', 'Ollamaタグ': 'llama3.1:8b', 'ダウンロード': '4.9 GB', 'コンテキスト': '128K' },
          { 'モデル': 'Gemma 4 E4B', 'Ollamaタグ': 'gemma4:e4b', 'ダウンロード': '6.6–9.5 GB', 'コンテキスト': '128K' },
          { 'モデル': 'Gemma 4 12B', 'Ollamaタグ': 'gemma4:12b', 'ダウンロード': '7.7–8.0 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Gemma 4 26B A4B', 'Ollamaタグ': 'gemma4:26b', 'ダウンロード': '16–19 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Qwen3.8 27B', 'Ollamaタグ': 'qwen3.8:27b', 'ダウンロード': '18 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Gemma 4 31B', 'Ollamaタグ': 'gemma4:31b', 'ダウンロード': '19–20 GB', 'コンテキスト': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: '最初にOllamaのコンテキスト長を引き上げる',
        content: [
          '<strong>Ollamaの既定コンテキストは、VRAM 24 GiB未満のGPUで4K、24–48 GiBで32K、48 GiB以上で256Kです。設定を引き上げない限り、長い文書は途中で切れます。</strong>4Kのウィンドウに入るのは英単語で約3,000語で、モデルは収まった分だけを要約します。[Ollamaのコンテキスト長に関するドキュメント](https://docs.ollama.com/context-length)を参照してください。',
          'サーバー起動前に、文書の長さに要約の余裕を加えた値で <code>OLLAMA_CONTEXT_LENGTH</code> を設定し、<code>ollama ps</code> を実行します。CONTEXT列が割り当て長、PROCESSOR列がモデルが完全にGPU上にあるかを示します。必要なコンテキストでGPU 100%を目指してください。',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: '目安: 1トークンは英単語約0.75語なので、5万語の文書は約6.7万トークンです。他の言語は1語あたりのトークン数が多くなります。' }],
      },
      comparison: {
        id: 'comparison',
        title: '全文コンテキスト要約とチャンク分割の比較',
        content: [
          '文書全体を長文脈モデルに一度に渡すと、分割して要約するパイプラインで起きるチャンク間の文脈喪失を避けられますが、メモリが多く必要で、自動的に原文へ忠実になるわけではありません。',
          '長文要約の研究は、長い文書の部分ごとに要約の忠実度が偏る位置バイアスを報告しています（[On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)）。長い文書では中間部分を原文と照合してください。',
          'VRAMが限られる場合、文書がコンテキストウィンドウを超える場合、要点の出典セクションを示す必要がある場合は、チャンク分割を使います。各セクションを要約してから要約を要約し、必要に応じて埋め込みモデルで関連セクションを検索します。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '要約に最適なOllamaモデルは何ですか？',
            a: 'ほとんどのマシンでは Gemma 4 12B（gemma4:12b）で、7.7–8.0 GBのダウンロードで256Kコンテキストを使えます。24 GB GPUなら Qwen3.8 27B または Gemma 4 31B です。これらの推奨は掲載スペックとベンダー報告に基づくもので、当サイトが実施した要約ベンチマークではありません。',
          },
          {
            q: 'ローカルの要約が文書の一部しかカバーしないのはなぜですか？',
            a: '多くの場合、コンテキストウィンドウが小さすぎます。OllamaはVRAM 24 GiB未満のGPUで既定4Kとなり、残りの文書は切り捨てられます。文書のトークン数を上回る値を OLLAMA_CONTEXT_LENGTH に設定し、ollama ps で確認してください。',
          },
          {
            q: 'Qwen3 14B はOllamaで128Kコンテキストに対応していますか？',
            a: 'いいえ。Ollamaは qwen3:14b を40Kコンテキストと掲載しており、256Kと掲載されているのは qwen3:4b と qwen3:30b のみです。長い文書には Gemma 4 12B または Qwen3.8 27B を使ってください。',
          },
          {
            q: 'オフラインやエッジデバイスに向くモデルは？',
            a: 'Gemma 4 E4B（gemma4:e4b、128K）と Llama 3.1 8B（4.9 GB、128K）は8 GBクラスのマシン向けで、Gemma 4 E2B（gemma4:e2b、128K）はさらに小型です。モデルをダウンロードすれば、要約はインターネット接続なしで動作します。',
          },
          {
            q: '要約が単純化しすぎないようにするには？',
            a: '残すべき内容をモデルに伝えます。数値・名称・注意書きを保持したセクションごとの要約を依頼し、セクションごとの目標長を決め、主要な主張の根拠となる原文の文を引用させます。その後、文書の中間部分を原文と抜き取りで照合してください。',
          },
          {
            q: '全コンテキストを使うには追加のVRAMが必要ですか？',
            a: 'はい。コンテキストキャッシュはモデルのダウンロードサイズに加えて、シーケンス長に応じて増えます。ロード後に ollama ps を確認し、PROCESSOR列にCPU/GPU分割が表示されたら、コンテキスト長を下げるか小さいモデルを選んでください。',
          },
          {
            q: 'チャンク分割が全文コンテキスト要約より良い場合はありますか？',
            a: 'はい。VRAMが限られる場合や文書がコンテキストウィンドウを超える場合です。要約の各ポイントの出典セクションを示す必要があるときも、全文コンテキスト要約ではセクションの境界がぼやけることがあるため、チャンク分割が役立ちます。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[どのOllamaモデルが128Kコンテキストをサポートしていますか?](/prompt-bites/ollama-128k-context-models) — 長文コンテキストモデルの全リスト',
          '[ローカルRAGに最適な埋め込みモデル](/prompt-bites/best-embedding-model-local-rag) — チャンク分割ベースの代替アプローチ',
          '[ローカルLLMに必要なVRAM量は?](/prompt-bites/how-much-vram-for-local-llm) — 長文コンテキスト作業のハードウェアサイジング',
        ],
      },
    },
  },
  ko: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-ko.webp',
    title: '문서 요약을 위한 최적의 로컬 LLM은?',
    seoTitle: '2026년 문서 요약 최적 로컬 LLM',
    metaDescription: 'Ollama 로컬 요약의 출발점은 Gemma 4 12B(256K 컨텍스트, 8 GB)입니다. 24 GB GPU에는 Qwen3.8 27B와 Gemma 4 31B가 적합합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '긴 컨텍스트 윈도우가 필요한, 로컬에서 긴 문서를 요약하는 사용자',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama에서 로컬 요약을 시작하기에는 Gemma 4 12B가 최적의 출발점입니다. 256K 컨텍스트 윈도우와 7.7–8.0 GB 다운로드를 제공하며 텍스트 요약을 의도된 용도로 명시합니다.</strong> 24 GB GPU에서는 Qwen3.8 27B와 Gemma 4 31B(모두 256K)가 더 길거나 밀도 높은 문서를 처리합니다. Ollama의 기본 컨텍스트는 VRAM 24 GiB 미만 GPU에서 4K에 불과하므로, 요약 전에 늘리지 않으면 문서 일부가 잘려 나갑니다.',
    toc: [
      { label: '최적의 선택: Gemma 4 12B(24 GB는 Qwen3.8 27B 또는 Gemma 4 31B)', anchor: '#best-pick' },
      { label: '메모리 크기별 모델 추천', anchor: '#model-tiers' },
      { label: '먼저 Ollama 컨텍스트 길이 늘리기', anchor: '#context-setup' },
      { label: '전체 컨텍스트 요약 vs 청킹', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 글', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '긴 문서를 요약하기에 가장 좋은 로컬 LLM은 무엇입니까?',
        answer: 'Ollama에서는 Gemma 4 12B가 최적의 출발점입니다. 7.7–8.0 GB 다운로드로 256K 컨텍스트를 사용합니다. 24 GB GPU에는 Qwen3.8 27B와 Gemma 4 31B가 적합합니다.',
        bullets: [
          'Gemma 4 12B(gemma4:12b)는 256K 컨텍스트 윈도우와 Apache 2.0 라이선스를 갖춘 12–16 GB 기기의 기본 선택입니다.',
          'Qwen3.8 27B(18 GB)와 Gemma 4 31B(19–20 GB)는 24 GB GPU에 적합합니다. Google은 MRCR v2 8-needle 128K 테스트에서 31B 66.4%, 12B 43.4%를 보고했습니다.',
          '컨텍스트 길이는 직접 설정하십시오. Ollama는 VRAM 24 GiB 미만 GPU에서 기본 4K를 사용해 긴 문서가 잘립니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 선택: Gemma 4 12B — 256K 컨텍스트, 7.7–8.0 GB 다운로드, 요약이 의도된 용도로 명시됨',
          '24 GB GPU 추천: Qwen3.8 27B 또는 Gemma 4 31B — 모두 256K, 여러 주제가 담긴 밀도 높은 문서에 강함',
          'Ollama는 VRAM 24 GiB 미만 GPU에서 기본 4K 컨텍스트 — 요약 전에 OLLAMA_CONTEXT_LENGTH를 늘리십시오',
          'Qwen3 14B는 Ollama에서 40K 컨텍스트로만 표기되어 긴 문서용 선택이 아닙니다',
          '문서가 컨텍스트 윈도우를 넘거나 VRAM이 빠듯하면 청킹이 여전히 올바른 방법입니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Gemma 4 12B(24 GB는 Qwen3.8 27B 또는 Gemma 4 31B)',
        content: [
          '<strong>로컬 요약의 최적 출발점은 Gemma 4 12B입니다. Ollama 태그(gemma4:12b)는 7.7–8.0 GB 다운로드에 256K 컨텍스트 윈도우를 표기하며, Google의 모델 카드는 보고서와 연구 논문 요약을 의도된 용도로 꼽습니다.</strong> Apache 2.0으로 공개되어 있으며 12–16 GB 기기에서 여유롭게 구동됩니다.',
          '24 GB GPU에서는 Qwen3.8 27B(qwen3.8:27b, 18 GB, 256K) 또는 Gemma 4 31B(gemma4:31b, 19–20 GB, 256K)로 올리십시오. Google은 MRCR v2 8-needle 128K 장문맥 테스트에서 31B 66.4%, 12B 43.4%를 보고했습니다. 요약이 어떤 섹션도 놓치면 안 되는 밀도 높은 다주제 문서에는 더 큰 모델이 안전합니다.',
          '이 페이지를 위해 요약 벤치마크를 실행하지는 않았습니다. 추천은 Ollama에 표기된 컨텍스트 윈도우, 다운로드 크기, 벤더가 보고한 결과에 근거합니다. 어떤 모델이든 의존하기 전에 직접 문서로 테스트하십시오. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B(llama3.1:8b, 4.9 GB, 128K)는 8 GB 기기의 가벼운 요약에 여전히 쓸 수 있지만, Ollama 페이지는 약 1년간 업데이트되지 않았습니다.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: '메모리 크기별 모델 추천',
        content: [
          'Ollama 라이브러리에 표기된 컨텍스트 윈도우와 다운로드 크기를 작은 순서로 나열했습니다. 다운로드 크기는 전체 메모리가 아닙니다. 컨텍스트 캐시가 추가로 필요하며 컨텍스트 길이에 따라 커집니다.',
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '컨텍스트'],
        rows: [
          { '모델': 'Llama 3.1 8B', 'Ollama 태그': 'llama3.1:8b', '다운로드': '4.9 GB', '컨텍스트': '128K' },
          { '모델': 'Gemma 4 E4B', 'Ollama 태그': 'gemma4:e4b', '다운로드': '6.6–9.5 GB', '컨텍스트': '128K' },
          { '모델': 'Gemma 4 12B', 'Ollama 태그': 'gemma4:12b', '다운로드': '7.7–8.0 GB', '컨텍스트': '256K' },
          { '모델': 'Gemma 4 26B A4B', 'Ollama 태그': 'gemma4:26b', '다운로드': '16–19 GB', '컨텍스트': '256K' },
          { '모델': 'Qwen3.8 27B', 'Ollama 태그': 'qwen3.8:27b', '다운로드': '18 GB', '컨텍스트': '256K' },
          { '모델': 'Gemma 4 31B', 'Ollama 태그': 'gemma4:31b', '다운로드': '19–20 GB', '컨텍스트': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: '먼저 Ollama 컨텍스트 길이 늘리기',
        content: [
          '<strong>Ollama는 VRAM 24 GiB 미만 GPU에서 기본 4K, 24–48 GiB에서 32K, 48 GiB 이상에서 256K 컨텍스트를 사용하므로, 설정을 늘리지 않으면 긴 문서가 잘립니다.</strong> 4K 윈도우에는 영어 단어 약 3,000개가 들어가며, 모델은 들어간 부분만 요약합니다. [Ollama 컨텍스트 길이 문서](https://docs.ollama.com/context-length)를 참고하십시오.',
          '서버를 시작하기 전에 문서 길이에 요약 여유분을 더한 값으로 <code>OLLAMA_CONTEXT_LENGTH</code>를 설정한 뒤 <code>ollama ps</code>를 실행하십시오. CONTEXT 열은 할당된 길이를, PROCESSOR 열은 모델이 GPU에 완전히 올라갔는지를 보여 줍니다. 필요한 컨텍스트에서 GPU 100%를 목표로 하십시오.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: '경험칙: 토큰 1개는 영어 단어 약 0.75개이므로 5만 단어 문서는 약 6.7만 토큰입니다. 다른 언어는 단어당 토큰이 더 많이 쓰입니다.' }],
      },
      comparison: {
        id: 'comparison',
        title: '전체 컨텍스트 요약 vs 청킹',
        content: [
          '문서 전체를 장문맥 모델에 한 번에 넣으면 나눠서 요약하는 파이프라인의 청크 간 문맥 손실을 피할 수 있지만, 메모리가 더 필요하며 원문에 자동으로 더 충실해지는 것은 아닙니다.',
          '장문 요약 연구는 긴 문서의 부분별로 요약의 충실도가 달라지는 위치 편향을 보고합니다([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)). 따라서 긴 문서의 중간 부분은 원문과 대조하십시오.',
          'VRAM이 제한적이거나, 문서가 컨텍스트 윈도우를 넘거나, 요점의 출처 섹션을 밝혀야 할 때는 청킹을 사용하십시오. 각 섹션을 요약한 뒤 요약을 다시 요약하고, 필요하면 임베딩 모델로 관련 섹션을 검색합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '요약에 가장 좋은 Ollama 모델은 무엇입니까?',
            a: '대부분의 기기에서는 Gemma 4 12B(gemma4:12b)입니다. 7.7–8.0 GB 다운로드에 256K 컨텍스트를 제공합니다. 24 GB GPU에서는 Qwen3.8 27B 또는 Gemma 4 31B를 사용하십시오. 이 추천은 표기된 사양과 벤더 결과에 근거하며, 저희가 실행한 요약 벤치마크가 아닙니다.',
          },
          {
            q: '로컬 요약이 문서의 일부만 다루는 이유는 무엇입니까?',
            a: '대개 컨텍스트 윈도우가 너무 작기 때문입니다. Ollama는 VRAM 24 GiB 미만 GPU에서 기본 4K를 사용하며 나머지 문서는 버려집니다. OLLAMA_CONTEXT_LENGTH를 문서의 토큰 수보다 크게 설정하고 ollama ps로 확인하십시오.',
          },
          {
            q: 'Qwen3 14B는 Ollama에서 128K 컨텍스트를 지원합니까?',
            a: '아닙니다. Ollama는 qwen3:14b를 40K 컨텍스트로 표기하며, 256K로 표기된 것은 qwen3:4b와 qwen3:30b뿐입니다. 긴 문서에는 Gemma 4 12B 또는 Qwen3.8 27B를 사용하십시오.',
          },
          {
            q: '오프라인이나 엣지 기기에는 어떤 모델이 맞습니까?',
            a: 'Gemma 4 E4B(gemma4:e4b, 128K)와 Llama 3.1 8B(4.9 GB, 128K)는 8 GB급 기기에 적합하고, Gemma 4 E2B(gemma4:e2b, 128K)는 더 작습니다. 모델을 내려받은 뒤에는 인터넷 연결 없이 요약이 실행됩니다.',
          },
          {
            q: '요약이 지나치게 단순화되지 않게 하려면 어떻게 합니까?',
            a: '유지할 내용을 모델에 알려 주십시오. 숫자, 이름, 단서 조항을 보존한 섹션별 요약을 요청하고, 섹션별 목표 길이를 정하고, 핵심 주장마다 근거가 된 원문 문장을 인용하게 하십시오. 그런 다음 문서 중간 부분을 원문과 표본 대조하십시오.',
          },
          {
            q: '전체 컨텍스트를 쓰려면 추가 VRAM이 필요합니까?',
            a: '예. 컨텍스트 캐시는 모델 다운로드 크기에 더해 시퀀스 길이에 따라 커집니다. 로드 후 ollama ps를 확인해 PROCESSOR 열에 CPU/GPU 분할이 표시되면 컨텍스트 길이를 줄이거나 더 작은 모델을 선택하십시오.',
          },
          {
            q: '청킹이 전체 컨텍스트 요약보다 나은 경우가 있습니까?',
            a: '예. VRAM이 제한적이거나 문서가 컨텍스트 윈도우를 넘을 때입니다. 요약의 각 요점이 어느 섹션에서 나왔는지 밝혀야 할 때도 청킹이 유리한데, 전체 컨텍스트 요약은 섹션 경계를 흐릴 수 있기 때문입니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[어떤 Ollama 모델이 128K 컨텍스트를 지원하는가?](/ko/prompt-bites/ollama-128k-context-models) — 긴 컨텍스트 모델 전체 목록',
          '[로컬 RAG를 위한 최적의 임베딩 모델](/ko/prompt-bites/best-embedding-model-local-rag) — 청크 분할 기반 대안 접근 방식',
          '[로컬 LLM에는 얼마나 많은 VRAM이 필요한가?](/ko/prompt-bites/how-much-vram-for-local-llm) — 긴 컨텍스트 작업을 위한 하드웨어 산정',
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-pt.webp',
    title: 'Qual o Melhor LLM Local para Resumo de Documentos?',
    seoTitle: 'Melhor LLM Local para Resumo de Documentos 2026',
    metaDescription: 'Gemma 4 12B (contexto de 256K, 8 GB) é o melhor ponto de partida para resumir localmente com o Ollama; Qwen3.8 27B e Gemma 4 31B servem para GPUs de 24 GB.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Usuários resumindo documentos longos localmente que precisam de uma janela de contexto longa',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Gemma 4 12B é o melhor ponto de partida para resumir localmente com o Ollama: tem janela de contexto de 256K, download de 7.7–8.0 GB e lista o resumo de texto como uso previsto.</strong> Em uma GPU de 24 GB, Qwen3.8 27B e Gemma 4 31B (ambos 256K) lidam com documentos mais longos ou mais densos. O contexto padrão do Ollama é de apenas 4K em GPUs com menos de 24 GiB de VRAM; aumente-o antes de resumir, senão parte do documento é descartada.',
    toc: [
      { label: 'Melhor escolha: Gemma 4 12B (Qwen3.8 27B ou Gemma 4 31B para 24 GB)', anchor: '#best-pick' },
      { label: 'Modelos recomendados por memória', anchor: '#model-tiers' },
      { label: 'Aumente primeiro o tamanho de contexto do Ollama', anchor: '#context-setup' },
      { label: 'Resumo com contexto completo vs. chunking', anchor: '#comparison' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor LLM local para resumir documentos longos?',
        answer: 'Gemma 4 12B é o melhor ponto de partida no Ollama: 256K de contexto em um download de 7.7–8.0 GB. Qwen3.8 27B e Gemma 4 31B servem para GPUs de 24 GB.',
        bullets: [
          'Gemma 4 12B (gemma4:12b) tem janela de contexto de 256K e licença Apache 2.0 — a escolha padrão para máquinas de 12–16 GB.',
          'Qwen3.8 27B (18 GB) e Gemma 4 31B (19–20 GB) servem para GPUs de 24 GB; o Google informa 66.4% para o 31B contra 43.4% para o 12B no teste MRCR v2 8-needle 128K.',
          'Defina você mesmo o tamanho do contexto: o Ollama usa 4K por padrão em GPUs com menos de 24 GiB de VRAM, o que corta documentos longos.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha: Gemma 4 12B — 256K de contexto, download de 7.7–8.0 GB, resumo citado como uso previsto',
          'Melhor para GPUs de 24 GB: Qwen3.8 27B ou Gemma 4 31B — ambos com 256K, mais fortes em documentos densos com vários temas',
          'O Ollama usa 4K de contexto por padrão em GPUs com menos de 24 GiB de VRAM — aumente OLLAMA_CONTEXT_LENGTH antes de resumir',
          'O Qwen3 14B aparece no Ollama com apenas 40K de contexto, portanto não é uma escolha para documentos longos',
          'O chunking continua sendo a abordagem certa quando o documento excede a janela de contexto ou a VRAM é apertada',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: Gemma 4 12B (Qwen3.8 27B ou Gemma 4 31B para 24 GB)',
        content: [
          '<strong>Gemma 4 12B é o melhor ponto de partida para resumir localmente: sua tag no Ollama (gemma4:12b) lista janela de contexto de 256K em um download de 7.7–8.0 GB, e a ficha do modelo do Google cita resumos de relatórios e artigos de pesquisa como uso previsto.</strong> Ele é lançado sob Apache 2.0 e cabe confortavelmente em uma máquina de 12–16 GB.',
          'Em uma GPU de 24 GB, suba para Qwen3.8 27B (qwen3.8:27b, 18 GB, 256K) ou Gemma 4 31B (gemma4:31b, 19–20 GB, 256K). O Google informa 66.4% para o 31B contra 43.4% para o 12B no teste de contexto longo MRCR v2 8-needle 128K; por isso o modelo maior é a escolha mais segura para documentos densos com vários temas, em que o resumo não pode omitir nenhuma seção.',
          'Não executamos um benchmark de resumo para esta página. As recomendações se baseiam nas janelas de contexto e tamanhos de download listados no Ollama e em resultados divulgados pelos fabricantes — teste qualquer modelo com seus próprios documentos antes de confiar nele. ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'O Llama 3.1 8B (llama3.1:8b, 4.9 GB, 128K) ainda serve para resumos leves em máquinas de 8 GB, mas sua página no Ollama não é atualizada há cerca de um ano.',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: 'Modelos recomendados por memória',
        content: [
          'Janelas de contexto e tamanhos de download listados na biblioteca do Ollama, do menor para o maior. O tamanho do download não é a memória total: o cache de contexto soma-se a ele e cresce com o tamanho do contexto.',
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Contexto'],
        rows: [
          { 'Modelo': 'Llama 3.1 8B', 'Tag do Ollama': 'llama3.1:8b', 'Download': '4.9 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 E4B', 'Tag do Ollama': 'gemma4:e4b', 'Download': '6.6–9.5 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 12B', 'Tag do Ollama': 'gemma4:12b', 'Download': '7.7–8.0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 26B A4B', 'Tag do Ollama': 'gemma4:26b', 'Download': '16–19 GB', 'Contexto': '256K' },
          { 'Modelo': 'Qwen3.8 27B', 'Tag do Ollama': 'qwen3.8:27b', 'Download': '18 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 31B', 'Tag do Ollama': 'gemma4:31b', 'Download': '19–20 GB', 'Contexto': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: 'Aumente primeiro o tamanho de contexto do Ollama',
        content: [
          '<strong>O Ollama usa por padrão 4K de contexto em GPUs com menos de 24 GiB de VRAM, 32K entre 24 e 48 GiB e 256K a partir de 48 GiB; assim, um documento longo é cortado a menos que você aumente a configuração.</strong> Uma janela de 4K comporta cerca de 3.000 palavras em inglês; o modelo resume apenas o que cabe. Veja a [documentação do Ollama sobre tamanho de contexto](https://docs.ollama.com/context-length).',
          'Defina <code>OLLAMA_CONTEXT_LENGTH</code> antes de iniciar o servidor, dimensionada pelo documento mais espaço para o resumo, e depois execute <code>ollama ps</code>: a coluna CONTEXT mostra o tamanho alocado e PROCESSOR indica se o modelo está totalmente na GPU. Procure 100% GPU no contexto de que você precisa.',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: 'Regra prática: um token equivale a cerca de 0.75 palavra em inglês, então um documento de 50.000 palavras tem aproximadamente 67.000 tokens. Outros idiomas usam mais tokens por palavra.' }],
      },
      comparison: {
        id: 'comparison',
        title: 'Resumo com contexto completo vs. chunking',
        content: [
          'Enviar um documento inteiro a um modelo de contexto longo em uma única passada evita a perda de contexto entre trechos dos pipelines de dividir e resumir, mas exige mais memória e não é automaticamente mais fiel ao original.',
          'Pesquisas sobre resumo de textos longos relatam um viés posicional na fidelidade dos resumos a diferentes partes de um documento longo ([On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)); por isso, confira o meio de documentos longos com a fonte.',
          'Use chunking — resumir cada seção e depois resumir os resumos, opcionalmente com um modelo de embeddings para recuperar seções relevantes — quando a VRAM é limitada, o documento excede a janela de contexto ou você precisa citar de qual seção veio um ponto.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Qual é o melhor modelo do Ollama para resumir?',
            a: 'Gemma 4 12B (gemma4:12b) para a maioria das máquinas: 256K de contexto em um download de 7.7–8.0 GB. Em uma GPU de 24 GB, use Qwen3.8 27B ou Gemma 4 31B. Essas recomendações se baseiam em especificações listadas e resultados dos fabricantes, não em um benchmark de resumo executado por nós.',
          },
          {
            q: 'Por que meu resumo local cobre só parte do documento?',
            a: 'Normalmente a janela de contexto é pequena demais. O Ollama usa 4K por padrão em GPUs com menos de 24 GiB de VRAM, e o restante do documento é descartado. Defina OLLAMA_CONTEXT_LENGTH acima do número de tokens do documento e confirme com ollama ps.',
          },
          {
            q: 'O Qwen3 14B suporta 128K de contexto no Ollama?',
            a: 'Não. O Ollama lista o qwen3:14b com janela de contexto de 40K; apenas qwen3:4b e qwen3:30b aparecem com 256K. Para documentos longos, use Gemma 4 12B ou Qwen3.8 27B.',
          },
          {
            q: 'Quais modelos servem para dispositivos offline ou de borda?',
            a: 'Gemma 4 E4B (gemma4:e4b, 128K) e Llama 3.1 8B (4.9 GB, 128K) servem para máquinas da classe de 8 GB; o Gemma 4 E2B (gemma4:e2b, 128K) é ainda menor. Depois de baixado o modelo, o resumo funciona sem conexão com a internet.',
          },
          {
            q: 'Como evitar que um resumo simplifique demais?',
            a: 'Diga ao modelo o que manter: peça resumos seção por seção que preservem números, nomes e ressalvas, defina um tamanho-alvo por seção e peça que cite a frase de origem de cada afirmação-chave. Depois confira por amostragem o meio do documento com a fonte.',
          },
          {
            q: 'Preciso de VRAM extra para usar o contexto completo?',
            a: 'Sim. O cache de contexto cresce com o tamanho da sequência, além do tamanho de download do modelo. Confira ollama ps após o carregamento: se a coluna PROCESSOR mostrar divisão entre CPU e GPU, reduza o tamanho do contexto ou escolha um modelo menor.',
          },
          {
            q: 'O chunking às vezes é melhor que o resumo com contexto completo?',
            a: 'Sim, quando a VRAM é limitada ou o documento excede a janela de contexto. O chunking também ajuda quando você precisa citar de qual seção veio um ponto do resumo, já que o resumo com contexto completo pode borrar os limites entre seções.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Quais Modelos do Ollama Suportam Contexto de 128K?](/prompt-bites/ollama-128k-context-models) — a lista completa de modelos de contexto longo',
          '[Melhor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — uma abordagem alternativa baseada em fragmentação',
          '[Quanta VRAM Você Precisa para um LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para trabalho de contexto longo',
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    heroImage: '/images/best-local-llm-document-summarization-overview-hero-zh.webp',
    title: '文档摘要的最佳本地 LLM 是什么？',
    seoTitle: '2026 年文档摘要最佳本地 LLM',
    metaDescription: '在 Ollama 上做本地摘要，Gemma 4 12B（256K 上下文，8 GB）是最佳起点；24 GB 显卡可选 Qwen3.8 27B 和 Gemma 4 31B。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    last_full_refresh: '2026-10-17',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Gemma 4 12B', 'Gemma 4 31B', 'Qwen3.8 27B', 'Gemma 4 E4B', 'Llama 3.1 8B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '需要长上下文窗口在本地摘要长文档的用户',
    siblingBites: ['ollama-128k-context-models', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>在 Ollama 上做本地摘要，Gemma 4 12B 是最佳起点：它提供 256K 上下文窗口、7.7–8.0 GB 的下载体积，并将文本摘要列为预期用途。</strong>在 24 GB 显卡上，Qwen3.8 27B 和 Gemma 4 31B（均为 256K）可处理更长或更密集的文档。Ollama 在显存低于 24 GiB 的 GPU 上默认上下文只有 4K，摘要前请先调大，否则文档的一部分会被丢弃。',
    toc: [
      { label: '最佳选择：Gemma 4 12B（24 GB 可选 Qwen3.8 27B 或 Gemma 4 31B）', anchor: '#best-pick' },
      { label: '按内存大小选择模型', anchor: '#model-tiers' },
      { label: '先调大 Ollama 的上下文长度', anchor: '#context-setup' },
      { label: '全上下文摘要与分块摘要对比', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '摘要长文档，最佳本地 LLM 是什么？',
        answer: '在 Ollama 上，Gemma 4 12B 是最佳起点：7.7–8.0 GB 下载即可获得 256K 上下文。24 GB 显卡可选 Qwen3.8 27B 和 Gemma 4 31B。',
        bullets: [
          'Gemma 4 12B（gemma4:12b）拥有 256K 上下文窗口，采用 Apache 2.0 许可——12–16 GB 内存设备的默认选择。',
          'Qwen3.8 27B（18 GB）和 Gemma 4 31B（19–20 GB）适合 24 GB 显卡；Google 报告 31B 在 MRCR v2 8-needle 128K 测试中为 66.4%，12B 为 43.4%。',
          '请自行设置上下文长度：Ollama 在显存低于 24 GiB 的 GPU 上默认 4K，会截断长文档。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳选择：Gemma 4 12B——256K 上下文，下载 7.7–8.0 GB，摘要被列为预期用途',
          '24 GB 显卡首选：Qwen3.8 27B 或 Gemma 4 31B——均为 256K，更擅长多主题的密集文档',
          'Ollama 在显存低于 24 GiB 的 GPU 上默认 4K 上下文——摘要前先调大 OLLAMA_CONTEXT_LENGTH',
          'Qwen3 14B 在 Ollama 上仅列为 40K 上下文，不适合长文档',
          '当文档超出上下文窗口或显存紧张时，分块仍是正确做法',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Gemma 4 12B（24 GB 可选 Qwen3.8 27B 或 Gemma 4 31B）',
        content: [
          '<strong>Gemma 4 12B 是本地摘要的最佳起点：其 Ollama 标签（gemma4:12b）列出 256K 上下文窗口，下载体积 7.7–8.0 GB，Google 的模型卡将报告和研究论文的摘要列为预期用途。</strong>它采用 Apache 2.0 许可，可轻松运行在 12–16 GB 内存的设备上。',
          '在 24 GB 显卡上，可升级到 Qwen3.8 27B（qwen3.8:27b，18 GB，256K）或 Gemma 4 31B（gemma4:31b，19–20 GB，256K）。Google 报告在 MRCR v2 8-needle 128K 长上下文测试中，31B 为 66.4%，12B 为 43.4%；对于摘要不能遗漏任何章节的密集多主题文档，更大的模型更稳妥。',
          '本页没有进行摘要基准测试。推荐依据是 Ollama 列出的上下文窗口、下载体积和厂商报告的结果——在依赖任何模型之前，请用自己的文档测试。 ([Gemma 4 model card](https://huggingface.co/google/gemma-4-12b-it), [Ollama library](https://ollama.com/library/gemma4))',
          'Llama 3.1 8B（llama3.1:8b，4.9 GB，128K）仍可在 8 GB 设备上做轻量摘要，但其 Ollama 页面已约一年未更新。',
        ],
      },
      modelTiers: {
        id: 'model-tiers',
        title: '按内存大小选择模型',
        content: [
          '以下为 Ollama 库中列出的上下文窗口和下载体积，由小到大排列。下载体积不等于总内存：上下文缓存另外占用，并随上下文长度增长。',
        ],
        columns: ['模型', 'Ollama 标签', '下载体积', '上下文'],
        rows: [
          { '模型': 'Llama 3.1 8B', 'Ollama 标签': 'llama3.1:8b', '下载体积': '4.9 GB', '上下文': '128K' },
          { '模型': 'Gemma 4 E4B', 'Ollama 标签': 'gemma4:e4b', '下载体积': '6.6–9.5 GB', '上下文': '128K' },
          { '模型': 'Gemma 4 12B', 'Ollama 标签': 'gemma4:12b', '下载体积': '7.7–8.0 GB', '上下文': '256K' },
          { '模型': 'Gemma 4 26B A4B', 'Ollama 标签': 'gemma4:26b', '下载体积': '16–19 GB', '上下文': '256K' },
          { '模型': 'Qwen3.8 27B', 'Ollama 标签': 'qwen3.8:27b', '下载体积': '18 GB', '上下文': '256K' },
          { '模型': 'Gemma 4 31B', 'Ollama 标签': 'gemma4:31b', '下载体积': '19–20 GB', '上下文': '256K' },
        ],
      },
      contextSetup: {
        id: 'context-setup',
        title: '先调大 Ollama 的上下文长度',
        content: [
          '<strong>Ollama 在显存低于 24 GiB 的 GPU 上默认 4K 上下文，24–48 GiB 为 32K，48 GiB 及以上为 256K，因此除非调大设置，长文档会被截断。</strong>4K 窗口大约容纳 3,000 个英文单词，模型只会摘要放得下的部分。参见 [Ollama 上下文长度文档](https://docs.ollama.com/context-length)。',
          '启动服务器前，按文档长度加上摘要所需空间设置 <code>OLLAMA_CONTEXT_LENGTH</code>，然后运行 <code>ollama ps</code>：CONTEXT 列显示已分配的长度，PROCESSOR 列显示模型是否完全在 GPU 上。在所需上下文下争取 100% GPU。',
        ],
        codeBlock: 'OLLAMA_CONTEXT_LENGTH=65536 ollama serve\n\n# in a second terminal\nollama pull gemma4:12b\nollama run gemma4:12b\nollama ps',
        callouts: [{ type: 'tip', text: '经验法则：1 个 token 约等于 0.75 个英文单词，因此 5 万词的文档约为 6.7 万 token。其他语言每词使用的 token 更多。' }],
      },
      comparison: {
        id: 'comparison',
        title: '全上下文摘要与分块摘要对比',
        content: [
          '一次性把整篇文档交给长上下文模型，可避免“分块再摘要”流程中的跨块上下文丢失，但需要更多内存，也不会自动更忠实于原文。',
          '长文摘要研究报告了位置偏差：摘要对长文档不同部分的忠实度并不均衡（[On Positional Bias of Faithfulness for Long-form Summarization](https://arxiv.org/abs/2410.23609)），因此请将长文档的中间部分与原文核对。',
          '当显存有限、文档超出上下文窗口，或需要标明某个要点出自哪一节时，使用分块：先摘要每一节，再对摘要做摘要，必要时配合嵌入模型检索相关章节。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '做摘要，Ollama 上最佳模型是什么？',
            a: '大多数设备选 Gemma 4 12B（gemma4:12b）：7.7–8.0 GB 下载，256K 上下文。24 GB 显卡可用 Qwen3.8 27B 或 Gemma 4 31B。这些推荐基于列出的规格和厂商结果，而非我们自己运行的摘要基准测试。',
          },
          {
            q: '为什么本地摘要只覆盖文档的一部分？',
            a: '通常是上下文窗口太小。Ollama 在显存低于 24 GiB 的 GPU 上默认 4K，文档其余部分会被丢弃。请将 OLLAMA_CONTEXT_LENGTH 设置为高于文档 token 数的值，并用 ollama ps 确认。',
          },
          {
            q: 'Qwen3 14B 在 Ollama 上支持 128K 上下文吗？',
            a: '不支持。Ollama 将 qwen3:14b 列为 40K 上下文；只有 qwen3:4b 和 qwen3:30b 列为 256K。处理长文档请改用 Gemma 4 12B 或 Qwen3.8 27B。',
          },
          {
            q: '哪些模型适合离线或边缘设备？',
            a: 'Gemma 4 E4B（gemma4:e4b，128K）和 Llama 3.1 8B（4.9 GB，128K）适合 8 GB 级设备；Gemma 4 E2B（gemma4:e2b，128K）更小。模型下载后，摘要无需联网即可运行。',
          },
          {
            q: '如何避免摘要过度简化？',
            a: '明确告诉模型要保留什么：要求按章节摘要并保留数字、名称和限定条件，为每节设定目标长度，并让它引用每个关键论断对应的原文句子。然后抽查文档中间部分与原文是否一致。',
          },
          {
            q: '使用完整上下文需要额外显存吗？',
            a: '需要。除模型下载体积外，上下文缓存还会随序列长度增长。加载后检查 ollama ps：如果 PROCESSOR 列显示 CPU/GPU 拆分，请降低上下文长度或选择更小的模型。',
          },
          {
            q: '分块有时比全上下文摘要更好吗？',
            a: '是的，当显存有限或文档超出上下文窗口时。需要标明摘要要点出自哪一节时，分块也更有帮助，因为全上下文摘要可能模糊章节边界。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[哪些 Ollama 模型支持 128K 上下文？](/prompt-bites/ollama-128k-context-models) — 长上下文模型完整列表',
          '[本地 RAG 的最佳嵌入模型](/prompt-bites/best-embedding-model-local-rag) — 基于分块的替代方法',
          '[本地 LLM 需要多少显存？](/prompt-bites/how-much-vram-for-local-llm) — 为长上下文工作规划硬件规模',
        ],
      },
    },
  },
}
