import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-en.webp',
    title: 'Best Embedding Model for Local RAG: nomic vs mxbai vs BGE-M3?',
    seoTitle: 'Best Local Embedding Model for RAG 2026: nomic vs mxbai',
    metaDescription: 'nomic-embed-text is the best default embedding model for local RAG on Ollama; mxbai-embed-large has a 512-token window, BGE-M3 wins multilingual. Specs compared.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    last_full_refresh: '2026-10-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers building a local RAG pipeline and choosing an embedding model',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>nomic-embed-text is the best default embedding model for local RAG on Ollama</strong> — a 274 MB download, 768-dimension vectors and a native 8,192-token context (Ollama lists 2K by default, so raise num_ctx for longer chunks). Pick BGE-M3 for multilingual documents, and mxbai-embed-large only if your chunks stay under its 512-token window.',
    toc: [
      { label: 'Best Pick: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: 'Embedding Models Compared', anchor: '#comparison' },
      { label: 'Setup Pitfalls', anchor: '#setup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best embedding model for local RAG?',
        answer: 'nomic-embed-text is the best default embedding model for local RAG on Ollama: small (274 MB), 768 dimensions, native 8,192-token context. BGE-M3 is the better pick for multilingual collections; mxbai-embed-large suits short English chunks.',
        bullets: [
          'nomic-embed-text: 274 MB, 768 dimensions, 8,192-token native context — Ollama\'s default window is 2K, so raise num_ctx for long chunks. Add search_document: / search_query: prefixes.',
          'BGE-M3: 1.2 GB, 8K context, built for multilingual retrieval — the right pick if your documents span several languages.',
          'mxbai-embed-large: 670 MB, 1,024 dimensions, but only a 512-token window — a fine English alternative when chunks are short.',
          'all-minilm: 46 MB and 384 dimensions — only for prototypes or very constrained CPUs. EmbeddingGemma and Qwen3-Embedding are newer options worth testing.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best default: nomic-embed-text — 274 MB, 768 dimensions, native 8,192-token context (raise num_ctx in Ollama to use it)',
          'Best multilingual pick: BGE-M3 — 1.2 GB, 8K context, built for retrieval across many languages',
          'Alternative: mxbai-embed-large — English-focused, but Ollama lists only a 512-token window, so keep chunks short',
          'all-minilm is tiny (46 MB) but older and generally weaker — use it for prototypes, not serious RAG',
          'Use one embedding model per index: switching models means re-embedding every chunk',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: nomic-embed-text',
        content: [
          '<strong>nomic-embed-text is the best default embedding model for local RAG because it pairs a small 274 MB download with a native 8,192-token context and 768-dimension vectors, and it runs through Ollama\'s embedding API after a single pull.</strong> Nomic\'s model card documents the 8,192-token sequence length and an Apache-2.0 license. Older embedding models typically cap out around 512 tokens, which forces more aggressive chunking.',
          'One catch: Ollama\'s library page lists a 2K context window for nomic-embed-text. To embed chunks longer than that, pass a larger num_ctx (up to 8,192) in the request options, as shown in the setup section below.',
          'If your documents span multiple languages, BGE-M3 is the better choice. It is a 567M-parameter model designed for multilingual retrieval, whereas nomic-embed-text is primarily English-optimized and weaker on non-English text.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'How nomic-embed-text Compares With mxbai-embed-large, BGE-M3 and all-MiniLM',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large:</strong> mxbai-embed-large is a 335M-parameter, 670 MB model with 1,024-dimension vectors, but Ollama lists only a 512-token window. With chunks of 300–500 tokens either model works; for longer chunks nomic-embed-text avoids truncation, and its 768-dimension vectors need about a quarter less index storage. Published retrieval scores for the two depend on the benchmark and dataset, and we did not run our own benchmark here — test both on a sample of your own documents.',
          '<strong>all-MiniLM vs nomic-embed-text:</strong> all-minilm (22M and 33M parameters, 46–67 MB, 384 dimensions) is the smallest and fastest option in Ollama\'s library, and Ollama lists a 512-token window. It is an older, much smaller model that generally retrieves less accurately, so treat it as a prototyping or low-power choice rather than a default.',
          '<strong>BGE-M3 vs nomic-embed-text:</strong> BGE-M3 (567M parameters, 1.2 GB, 8K context) is the multilingual specialist. It is larger and slower to index, so if your corpus is English-only, nomic-embed-text is the lighter choice; if it mixes languages, BGE-M3 is worth the extra weight.',
          '<strong>Newer options:</strong> EmbeddingGemma (300M parameters, 622 MB, 2K context, trained on 100+ languages) and Qwen3-Embedding (0.6B version: 639 MB, 32K context) are available on Ollama and worth a side-by-side test on your data.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Embedding Models Compared',
        content: [
          'Download size and context window come from each model\'s Ollama library page; vector size comes from the model cards. nomic-embed-text supports 8,192 tokens natively even though Ollama lists 2K by default.',
          'Avoid all-minilm for serious RAG work — it is fast and lightweight, but generally less accurate than the larger models below. All of them run through Ollama\'s embedding API with the same pull-and-call workflow.',
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Context (Ollama)', 'Vector size', 'Pick it for'],
        rows: [
          { 'Model': 'nomic-embed-text', 'Ollama tag': 'nomic-embed-text', 'Download': '274 MB', 'Context (Ollama)': '2K (8,192 native)', 'Vector size': '768', 'Pick it for': 'Default for English RAG' },
          { 'Model': 'mxbai-embed-large', 'Ollama tag': 'mxbai-embed-large', 'Download': '670 MB', 'Context (Ollama)': '512', 'Vector size': '1,024', 'Pick it for': 'Short English chunks' },
          { 'Model': 'BGE-M3', 'Ollama tag': 'bge-m3', 'Download': '1.2 GB', 'Context (Ollama)': '8K', 'Vector size': '1,024', 'Pick it for': 'Multilingual documents' },
          { 'Model': 'all-minilm', 'Ollama tag': 'all-minilm', 'Download': '46 MB (22M)', 'Context (Ollama)': '512', 'Vector size': '384', 'Pick it for': 'Prototypes, tiny CPUs' },
          { 'Model': 'EmbeddingGemma', 'Ollama tag': 'embeddinggemma', 'Download': '622 MB', 'Context (Ollama)': '2K', 'Vector size': '768', 'Pick it for': 'Small multilingual model' },
          { 'Model': 'Qwen3-Embedding 0.6B', 'Ollama tag': 'qwen3-embedding:0.6b', 'Download': '639 MB', 'Context (Ollama)': '32K', 'Vector size': '1,024', 'Pick it for': 'Very long chunks' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup Pitfalls That Hurt Local RAG Retrieval',
        content: [
          '<strong>Use the task prefixes.</strong> Nomic\'s model card says input must include a task instruction prefix: search_document: for chunks you index and search_query: for the user\'s question. Leaving them out can lower retrieval quality.',
          '<strong>Raise num_ctx deliberately.</strong> The request below embeds a chunk with the full 8,192-token window. Only raise it as far as your chunks need, since a larger context uses more memory.',
          '<strong>Never mix models in one index.</strong> Vectors from different embedding models are not comparable, so switching from nomic-embed-text to BGE-M3 means re-embedding every chunk.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Do I need a GPU to run an embedding model locally?',
            a: 'No — embedding models are much smaller than chat LLMs and run at reasonable speed on CPU. A GPU speeds up bulk indexing of large document collections but isn\'t required for typical RAG workloads.',
          },
          {
            q: 'Can I use the same model for embeddings and chat?',
            a: 'No — embedding models and chat models serve different purposes and use different architectures. Run a dedicated embedding model (like nomic-embed-text) alongside your chat model (like Qwen3 or Llama), not instead of it.',
          },
          {
            q: 'Is nomic-embed-text better than mxbai-embed-large?',
            a: 'For most local RAG setups nomic-embed-text is a sensible default: it is smaller (274 MB vs 670 MB) and handles longer chunks, while Ollama lists only a 512-token window for mxbai-embed-large. Retrieval quality on your own documents can differ, so run both on a sample of real queries before committing.',
          },
          {
            q: 'Does nomic-embed-text really support 8,192 tokens in Ollama?',
            a: 'The model supports 8,192 tokens natively, but Ollama\'s library page lists a 2K window. Pass num_ctx (up to 8,192) in the request options to embed longer chunks.',
          },
          {
            q: 'How do I choose a chunk size for RAG with nomic-embed-text?',
            a: 'Its long context gives flexibility, but shorter chunks (a few hundred tokens) still generally retrieve more precisely than very long chunks, since overly broad chunks dilute the embedding\'s specificity. Start around 300–500 tokens per chunk and adjust based on retrieval quality. With mxbai-embed-large, stay below its 512-token window.',
          },
          {
            q: 'Is BGE-M3 slower than nomic-embed-text?',
            a: 'BGE-M3 is larger (567M parameters, 1.2 GB), so expect modestly slower inference and indexing versus nomic-embed-text — a reasonable tradeoff if you need reliable multilingual retrieval.',
          },
          {
            q: 'Should I use EmbeddingGemma or Qwen3-Embedding instead?',
            a: 'They are newer options on Ollama (EmbeddingGemma at 622 MB with 100+ languages, Qwen3-Embedding 0.6B at 639 MB with a 32K window). We have not benchmarked them against nomic-embed-text here, so test them on your own documents before switching.',
          },
          {
            q: 'Can I switch embedding models later?',
            a: 'Yes, but you must re-embed your whole document collection, because vectors from different models are not comparable. Decide on the model before indexing a large corpus.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Local LLM for Document Summarization](/prompt-bites/best-local-llm-document-summarization) — pairing retrieval with a long-context chat model',
          '[How Much VRAM Do You Need for a Local LLM?](/prompt-bites/how-much-vram-for-local-llm) — sizing hardware for a full RAG pipeline',
          '[Best Sub-8B Model for Real-Time Chat](/prompt-bites/best-local-llm-under-8b-realtime-chat) — a fast chat model to pair with retrieval',
          '[Best Embedding Models for Local RAG (Full Comparison)](/power-local-llm/best-embedding-models-local-rag-2026) — the complete benchmark across accuracy, speed, and multilingual support',
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-ar.webp',
    title: 'أفضل نموذج تضمين لـ RAG محلي: nomic أم mxbai أم BGE-M3؟',
    seoTitle: 'أفضل نموذج تضمين لـ RAG محلي 2026: nomic أم mxbai',
    metaDescription: 'nomic-embed-text هو الخيار الافتراضي الأفضل لـ RAG محلي عبر Ollama؛ mxbai-embed-large بنافذة 512 رمزًا، وBGE-M3 الأفضل متعدد اللغات. مقارنة المواصفات.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يبنون خط أنابيب RAG محلي ويختارون نموذج تضمين',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج nomic-embed-text هو أفضل نموذج تضمين افتراضي لـ RAG محلي عبر Ollama</strong> — حجم تنزيل 274 ميغابايت، ومتجهات من 768 بُعدًا، وسياق أصلي بطول 8,192 رمزًا (يعرض Ollama نافذة 2K افتراضيًا، لذا ارفع num_ctx للمقاطع الأطول). اختر BGE-M3 للمستندات متعددة اللغات، واختر mxbai-embed-large فقط إذا بقيت مقاطعك ضمن نافذته البالغة 512 رمزًا.',
    toc: [
      { label: 'أفضل اختيار: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic مقابل mxbai مقابل BGE-M3 مقابل all-MiniLM', anchor: '#head-to-head' },
      { label: 'مقارنة نماذج التضمين', anchor: '#comparison' },
      { label: 'أخطاء شائعة في الإعداد', anchor: '#setup' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما هو أفضل نموذج تضمين لـ RAG محلي؟',
        answer: 'نموذج nomic-embed-text هو أفضل خيار افتراضي لـ RAG محلي عبر Ollama: صغير (274 ميغابايت)، 768 بُعدًا، وسياق أصلي بطول 8,192 رمزًا. BGE-M3 أفضل للمجموعات متعددة اللغات؛ وmxbai-embed-large يناسب المقاطع الإنجليزية القصيرة.',
        bullets: [
          'nomic-embed-text: 274 ميغابايت، 768 بُعدًا، سياق أصلي بطول 8,192 رمزًا — نافذة Ollama الافتراضية 2K، لذا ارفع num_ctx للمقاطع الطويلة. أضف البادئتين search_document: / search_query:.',
          'BGE-M3: 1.2 غيغابايت، سياق 8K، مصمم للاسترجاع متعدد اللغات — الاختيار الصحيح إذا امتدت مستنداتك عبر عدة لغات.',
          'mxbai-embed-large: 670 ميغابايت، 1,024 بُعدًا، لكن نافذته 512 رمزًا فقط — بديل إنجليزي جيد عندما تكون المقاطع قصيرة.',
          'all-minilm: 46 ميغابايت و384 بُعدًا — للنماذج الأولية أو المعالجات المحدودة جدًا فقط. وتُعدّ EmbeddingGemma وQwen3-Embedding خيارين أحدث يستحقان التجربة.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل خيار افتراضي: nomic-embed-text — 274 ميغابايت، 768 بُعدًا، سياق أصلي بطول 8,192 رمزًا (ارفع num_ctx في Ollama لاستخدامه)',
          'أفضل خيار متعدد اللغات: BGE-M3 — 1.2 غيغابايت، سياق 8K، مصمم للاسترجاع عبر لغات كثيرة',
          'بديل: mxbai-embed-large — موجه للإنجليزية، لكن Ollama يعرض نافذة 512 رمزًا فقط، فأبقِ المقاطع قصيرة',
          'all-minilm صغير جدًا (46 ميغابايت) لكنه أقدم وأضعف عمومًا — للنماذج الأولية لا لـ RAG جاد',
          'استخدم نموذج تضمين واحدًا لكل فهرس: تغيير النموذج يعني إعادة تضمين كل المقاطع',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: nomic-embed-text',
        content: [
          '<strong>نموذج nomic-embed-text هو أفضل نموذج تضمين افتراضي لـ RAG محلي لأنه يجمع بين تنزيل صغير بحجم 274 ميغابايت وسياق أصلي بطول 8,192 رمزًا ومتجهات من 768 بُعدًا، ويعمل عبر واجهة التضمين في Ollama بعد أمر pull واحد.</strong> تُوثّق بطاقة نموذج Nomic طول التسلسل 8,192 رمزًا ورخصة Apache-2.0. تتوقف نماذج التضمين الأقدم عادةً عند نحو 512 رمزًا، مما يفرض تقطيعًا أكثر حدّة.',
          'ملاحظة: تعرض صفحة مكتبة Ollama نافذة سياق 2K لنموذج nomic-embed-text. لتضمين مقاطع أطول، مرّر قيمة num_ctx أكبر (حتى 8,192) في خيارات الطلب كما في قسم الإعداد أدناه.',
          'إذا امتدت مستنداتك عبر لغات متعددة فـ BGE-M3 هو الخيار الأفضل. وهو نموذج بـ 567 مليون معامل مصمم للاسترجاع متعدد اللغات، بينما nomic-embed-text محسّن أساسًا للإنجليزية وأضعف مع النصوص بلغات أخرى.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'كيف يقارن nomic-embed-text مع mxbai-embed-large وBGE-M3 وall-MiniLM',
        content: [
          '<strong>nomic-embed-text مقابل mxbai-embed-large:</strong> يملك mxbai-embed-large نحو 335 مليون معامل وحجم 670 ميغابايت ومتجهات من 1,024 بُعدًا، لكن Ollama يعرض له نافذة 512 رمزًا فقط. مع مقاطع من 300 إلى 500 رمز يصلح كلاهما؛ ومع المقاطع الأطول يتجنب nomic-embed-text الاقتطاع، وتحتاج متجهاته ذات الـ 768 بُعدًا إلى مساحة فهرس أقل بنحو الربع. تعتمد درجات الاسترجاع المنشورة للنموذجين على المعيار ومجموعة البيانات، ولم نُجرِ هنا معيارًا خاصًا بنا — جرّب كليهما على عيّنة من مستنداتك.',
          '<strong>all-MiniLM مقابل nomic-embed-text:</strong> يُعدّ all-minilm (22 و33 مليون معامل، 46–67 ميغابايت، 384 بُعدًا) أصغر الخيارات وأسرعها في مكتبة Ollama، ويعرض Ollama له نافذة 512 رمزًا. هو نموذج أقدم وأصغر بكثير ويسترجع عمومًا بدقة أقل، لذا اعتبره خيارًا للنماذج الأولية أو العتاد المتواضع لا خيارًا افتراضيًا.',
          '<strong>BGE-M3 مقابل nomic-embed-text:</strong> BGE-M3 (567 مليون معامل، 1.2 غيغابايت، سياق 8K) هو المتخصص متعدد اللغات. وهو أكبر وأبطأ في الفهرسة؛ فإن كانت مجموعتك إنجليزية فقط فـ nomic-embed-text أخف، وإن كانت تخلط اللغات فـ BGE-M3 يستحق وزنه الإضافي.',
          '<strong>خيارات أحدث:</strong> EmbeddingGemma (300 مليون معامل، 622 ميغابايت، سياق 2K، مدرَّب على أكثر من 100 لغة) وQwen3-Embedding (نسخة 0.6B: ‏639 ميغابايت، سياق 32K) متاحان على Ollama ويستحقان اختبارًا جنبًا إلى جنب على بياناتك.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة نماذج التضمين',
        content: [
          'يأتي حجم التنزيل ونافذة السياق من صفحة كل نموذج في مكتبة Ollama، ويأتي حجم المتجه من بطاقات النماذج. يدعم nomic-embed-text أصليًا 8,192 رمزًا رغم أن Ollama يعرض 2K افتراضيًا.',
          'تجنّب all-minilm في أعمال RAG الجادة — فهو سريع وخفيف لكنه عمومًا أقل دقة من النماذج الأكبر في الجدول. تعمل جميعها عبر واجهة التضمين في Ollama بسير العمل نفسه: سحب ثم استدعاء.',
        ],
        columns: ['النموذج', 'وسم Ollama', 'التنزيل', 'السياق (Ollama)', 'حجم المتجه', 'يناسب'],
        rows: [
          { 'النموذج': 'nomic-embed-text', 'وسم Ollama': 'nomic-embed-text', 'التنزيل': '274 MB', 'السياق (Ollama)': '2K (أصلي 8,192)', 'حجم المتجه': '768', 'يناسب': 'الخيار الافتراضي لـ RAG بالإنجليزية' },
          { 'النموذج': 'mxbai-embed-large', 'وسم Ollama': 'mxbai-embed-large', 'التنزيل': '670 MB', 'السياق (Ollama)': '512', 'حجم المتجه': '1,024', 'يناسب': 'مقاطع إنجليزية قصيرة' },
          { 'النموذج': 'BGE-M3', 'وسم Ollama': 'bge-m3', 'التنزيل': '1.2 GB', 'السياق (Ollama)': '8K', 'حجم المتجه': '1,024', 'يناسب': 'مستندات متعددة اللغات' },
          { 'النموذج': 'all-minilm', 'وسم Ollama': 'all-minilm', 'التنزيل': '46 MB (22M)', 'السياق (Ollama)': '512', 'حجم المتجه': '384', 'يناسب': 'نماذج أولية، معالجات متواضعة' },
          { 'النموذج': 'EmbeddingGemma', 'وسم Ollama': 'embeddinggemma', 'التنزيل': '622 MB', 'السياق (Ollama)': '2K', 'حجم المتجه': '768', 'يناسب': 'نموذج صغير متعدد اللغات' },
          { 'النموذج': 'Qwen3-Embedding 0.6B', 'وسم Ollama': 'qwen3-embedding:0.6b', 'التنزيل': '639 MB', 'السياق (Ollama)': '32K', 'حجم المتجه': '1,024', 'يناسب': 'مقاطع طويلة جدًا' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'أخطاء في الإعداد تُضعف الاسترجاع في RAG محلي',
        content: [
          '<strong>استخدم بادئات المهمة.</strong> تذكر بطاقة نموذج Nomic أن المُدخل يجب أن يتضمن بادئة تعليمات المهمة: search_document: للمقاطع التي تفهرسها، وsearch_query: لسؤال المستخدم. وقد يؤدي إغفالها إلى خفض جودة الاسترجاع.',
          '<strong>ارفع num_ctx عن قصد.</strong> يضمّن الطلب أدناه مقطعًا بنافذة 8,192 رمزًا كاملة. ارفعها بقدر ما تحتاجه مقاطعك فقط، لأن السياق الأكبر يستهلك ذاكرة أكثر.',
          '<strong>لا تخلط النماذج في فهرس واحد.</strong> متجهات نماذج التضمين المختلفة غير قابلة للمقارنة، لذا فالانتقال من nomic-embed-text إلى BGE-M3 يعني إعادة تضمين كل المقاطع.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل أحتاج إلى GPU لتشغيل نموذج تضمين محليًا؟',
            a: 'لا — نماذج التضمين أصغر بكثير من نماذج الدردشة وتعمل بسرعة معقولة على المعالج. تسرّع بطاقة GPU الفهرسة المجمّعة لمجموعات المستندات الكبيرة لكنها ليست ضرورية لأحمال RAG المعتادة.',
          },
          {
            q: 'هل يمكنني استخدام النموذج نفسه للتضمين والدردشة؟',
            a: 'لا — لنموذج التضمين ونموذج الدردشة وظائف مختلفة وبنى مختلفة. شغّل نموذج تضمين مخصصًا (مثل nomic-embed-text) إلى جانب نموذج الدردشة (مثل Qwen3 أو Llama) لا بدلًا منه.',
          },
          {
            q: 'هل nomic-embed-text أفضل من mxbai-embed-large؟',
            a: 'في معظم إعدادات RAG المحلي يُعدّ nomic-embed-text خيارًا افتراضيًا معقولًا: فهو أصغر (274 ميغابايت مقابل 670) ويتعامل مع مقاطع أطول، بينما يعرض Ollama نافذة 512 رمزًا فقط لـ mxbai-embed-large. قد تختلف جودة الاسترجاع على مستنداتك، لذا جرّب كليهما على استعلامات حقيقية قبل أن تحسم.',
          },
          {
            q: 'هل يدعم nomic-embed-text فعلًا 8,192 رمزًا في Ollama؟',
            a: 'يدعم النموذج أصليًا 8,192 رمزًا، لكن صفحة مكتبة Ollama تعرض نافذة 2K. مرّر num_ctx (حتى 8,192) في خيارات الطلب لتضمين مقاطع أطول.',
          },
          {
            q: 'كيف أختار حجم المقطع في RAG مع nomic-embed-text؟',
            a: 'يمنحك سياقه الطويل مرونة، لكن المقاطع الأقصر (بضع مئات من الرموز) تسترجع عمومًا بدقة أكبر من المقاطع الطويلة جدًا، لأن المقاطع الواسعة أكثر من اللازم تُخفّف خصوصية التضمين. ابدأ بنحو 300–500 رمز للمقطع وعدّل حسب جودة الاسترجاع. ومع mxbai-embed-large ابقَ دون نافذته البالغة 512 رمزًا.',
          },
          {
            q: 'هل BGE-M3 أبطأ من nomic-embed-text؟',
            a: 'BGE-M3 أكبر (567 مليون معامل، 1.2 غيغابايت)، فتوقّع استدلالًا وفهرسة أبطأ قليلًا من nomic-embed-text — مقايضة معقولة إذا كنت تحتاج استرجاعًا موثوقًا متعدد اللغات.',
          },
          {
            q: 'هل أستخدم EmbeddingGemma أو Qwen3-Embedding بدلًا منه؟',
            a: 'هما خياران أحدث على Ollama (EmbeddingGemma بحجم 622 ميغابايت ودعم أكثر من 100 لغة، وQwen3-Embedding 0.6B بحجم 639 ميغابايت ونافذة 32K). لم نقارنهما هنا بـ nomic-embed-text، لذا جرّبهما على مستنداتك قبل التبديل.',
          },
          {
            q: 'هل يمكنني تغيير نموذج التضمين لاحقًا؟',
            a: 'نعم، لكن عليك إعادة تضمين مجموعة المستندات كاملة لأن متجهات النماذج المختلفة غير قابلة للمقارنة. حدّد النموذج قبل فهرسة مجموعة كبيرة.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل LLM محلي لتلخيص المستندات](/prompt-bites/best-local-llm-document-summarization) — إقران الاسترجاع بنموذج دردشة طويل السياق',
          '[كم VRAM تحتاجه لتشغيل LLM محليًا؟](/prompt-bites/how-much-vram-for-local-llm) — تحديد حجم العتاد لخط أنابيب RAG كامل',
          '[أفضل نموذج دون 8B للدردشة الفورية](/prompt-bites/best-local-llm-under-8b-realtime-chat) — نموذج دردشة سريع لإقرانه مع الاسترجاع',
          '[أفضل نماذج التضمين لـ RAG المحلي (مقارنة كاملة)](/power-local-llm/best-embedding-models-local-rag-2026) — المقارنة الشاملة للدقة والسرعة والدعم متعدد اللغات',
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-de.webp',
    title: 'Das beste Embedding-Modell für lokales RAG: nomic vs. mxbai vs. BGE-M3?',
    seoTitle: 'Bestes lokales Embedding-Modell für RAG 2026: nomic vs mxbai',
    metaDescription: 'nomic-embed-text ist die beste Standardwahl für lokales RAG mit Ollama; mxbai-embed-large hat 512 Token Kontext, BGE-M3 gewinnt mehrsprachig. Specs im Vergleich.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die eine lokale RAG-Pipeline bauen und ein Embedding-Modell wählen',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>nomic-embed-text ist die beste Standardwahl als Embedding-Modell für lokales RAG mit Ollama</strong> — 274 MB Download, 768-dimensionale Vektoren und ein nativer Kontext von 8.192 Token (Ollama zeigt standardmäßig 2K an, erhöhen Sie num_ctx für längere Chunks). Wählen Sie BGE-M3 für mehrsprachige Dokumente und mxbai-embed-large nur, wenn Ihre Chunks unter dem 512-Token-Fenster bleiben.',
    toc: [
      { label: 'Beste Wahl: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: 'Embedding-Modelle im Vergleich', anchor: '#comparison' },
      { label: 'Typische Setup-Fehler', anchor: '#setup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Was ist das beste Embedding-Modell für lokales RAG?',
        answer: 'nomic-embed-text ist die beste Standardwahl für lokales RAG mit Ollama: klein (274 MB), 768 Dimensionen, nativer Kontext von 8.192 Token. BGE-M3 ist die bessere Wahl für mehrsprachige Sammlungen; mxbai-embed-large passt zu kurzen englischen Chunks.',
        bullets: [
          'nomic-embed-text: 274 MB, 768 Dimensionen, nativer Kontext von 8.192 Token — Ollamas Standardfenster beträgt 2K, erhöhen Sie num_ctx für lange Chunks. Präfixe search_document: / search_query: verwenden.',
          'BGE-M3: 1,2 GB, 8K Kontext, für mehrsprachiges Retrieval gebaut — die richtige Wahl, wenn Ihre Dokumente mehrere Sprachen umfassen.',
          'mxbai-embed-large: 670 MB, 1.024 Dimensionen, aber nur ein 512-Token-Fenster — eine gute englische Alternative bei kurzen Chunks.',
          'all-minilm: 46 MB und 384 Dimensionen — nur für Prototypen oder sehr schwache CPUs. EmbeddingGemma und Qwen3-Embedding sind neuere Optionen zum Testen.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Standardwahl: nomic-embed-text — 274 MB, 768 Dimensionen, nativer Kontext von 8.192 Token (in Ollama num_ctx erhöhen)',
          'Beste mehrsprachige Wahl: BGE-M3 — 1,2 GB, 8K Kontext, für Retrieval über viele Sprachen gebaut',
          'Alternative: mxbai-embed-large — auf Englisch ausgerichtet, aber Ollama zeigt nur ein 512-Token-Fenster, Chunks also kurz halten',
          'all-minilm ist winzig (46 MB), aber älter und im Allgemeinen schwächer — für Prototypen, nicht für ernsthaftes RAG',
          'Ein Embedding-Modell pro Index: Ein Wechsel bedeutet, jeden Chunk neu einzubetten',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: nomic-embed-text',
        content: [
          '<strong>nomic-embed-text ist das beste Standard-Embedding-Modell für lokales RAG, weil es einen kleinen 274-MB-Download mit nativem 8.192-Token-Kontext und 768-dimensionalen Vektoren verbindet und nach einem einzigen Pull über Ollamas Embedding-API läuft.</strong> Die Modellkarte von Nomic dokumentiert die Sequenzlänge von 8.192 Token und eine Apache-2.0-Lizenz. Ältere Embedding-Modelle enden meist bei etwa 512 Token, was aggressiveres Chunking erzwingt.',
          'Ein Haken: Ollamas Bibliotheksseite nennt für nomic-embed-text ein 2K-Kontextfenster. Für längere Chunks übergeben Sie in den Request-Optionen ein größeres num_ctx (bis 8.192), wie im Abschnitt zum Setup unten gezeigt.',
          'Wenn Ihre Dokumente mehrere Sprachen umfassen, ist BGE-M3 die bessere Wahl. Es ist ein Modell mit 567 Mio. Parametern, das für mehrsprachiges Retrieval entwickelt wurde, während nomic-embed-text primär auf Englisch optimiert und bei nicht-englischem Text schwächer ist.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'Wie nomic-embed-text im Vergleich zu mxbai-embed-large, BGE-M3 und all-MiniLM abschneidet',
        content: [
          '<strong>nomic-embed-text vs. mxbai-embed-large:</strong> mxbai-embed-large hat 335 Mio. Parameter, 670 MB und 1.024-dimensionale Vektoren, aber Ollama nennt nur ein 512-Token-Fenster. Bei Chunks von 300–500 Token funktionieren beide; bei längeren Chunks vermeidet nomic-embed-text das Abschneiden, und seine 768-dimensionalen Vektoren brauchen rund ein Viertel weniger Index-Speicher. Veröffentlichte Retrieval-Werte beider Modelle hängen von Benchmark und Datensatz ab, und wir haben hier keinen eigenen Benchmark durchgeführt — testen Sie beide an einer Stichprobe Ihrer eigenen Dokumente.',
          '<strong>all-MiniLM vs. nomic-embed-text:</strong> all-minilm (22 und 33 Mio. Parameter, 46–67 MB, 384 Dimensionen) ist die kleinste und schnellste Option in Ollamas Bibliothek; Ollama nennt ein 512-Token-Fenster. Es ist ein älteres, deutlich kleineres Modell, das im Allgemeinen weniger genau abruft — sehen Sie es als Wahl für Prototypen oder schwache Hardware, nicht als Standard.',
          '<strong>BGE-M3 vs. nomic-embed-text:</strong> BGE-M3 (567 Mio. Parameter, 1,2 GB, 8K Kontext) ist der mehrsprachige Spezialist. Es ist größer und beim Indexieren langsamer; ist Ihr Korpus rein englisch, ist nomic-embed-text die leichtere Wahl, bei gemischten Sprachen lohnt sich BGE-M3.',
          '<strong>Neuere Optionen:</strong> EmbeddingGemma (300 Mio. Parameter, 622 MB, 2K Kontext, mit über 100 Sprachen trainiert) und Qwen3-Embedding (Version 0.6B: 639 MB, 32K Kontext) sind auf Ollama verfügbar und einen direkten Test mit Ihren Daten wert.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Embedding-Modelle im Vergleich',
        content: [
          'Download-Größe und Kontextfenster stammen von der jeweiligen Ollama-Bibliotheksseite, die Vektorgröße von den Modellkarten. nomic-embed-text unterstützt nativ 8.192 Token, obwohl Ollama standardmäßig 2K anzeigt.',
          'Vermeiden Sie all-minilm für ernsthaftes RAG — es ist schnell und leicht, aber im Allgemeinen weniger genau als die größeren Modelle unten. Alle laufen über Ollamas Embedding-API mit demselben Ablauf aus Pull und Aufruf.',
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Kontext (Ollama)', 'Vektorgröße', 'Geeignet für'],
        rows: [
          { 'Modell': 'nomic-embed-text', 'Ollama-Tag': 'nomic-embed-text', 'Download': '274 MB', 'Kontext (Ollama)': '2K (8.192 nativ)', 'Vektorgröße': '768', 'Geeignet für': 'Standard für englisches RAG' },
          { 'Modell': 'mxbai-embed-large', 'Ollama-Tag': 'mxbai-embed-large', 'Download': '670 MB', 'Kontext (Ollama)': '512', 'Vektorgröße': '1.024', 'Geeignet für': 'Kurze englische Chunks' },
          { 'Modell': 'BGE-M3', 'Ollama-Tag': 'bge-m3', 'Download': '1,2 GB', 'Kontext (Ollama)': '8K', 'Vektorgröße': '1.024', 'Geeignet für': 'Mehrsprachige Dokumente' },
          { 'Modell': 'all-minilm', 'Ollama-Tag': 'all-minilm', 'Download': '46 MB (22M)', 'Kontext (Ollama)': '512', 'Vektorgröße': '384', 'Geeignet für': 'Prototypen, schwache CPUs' },
          { 'Modell': 'EmbeddingGemma', 'Ollama-Tag': 'embeddinggemma', 'Download': '622 MB', 'Kontext (Ollama)': '2K', 'Vektorgröße': '768', 'Geeignet für': 'Kleines mehrsprachiges Modell' },
          { 'Modell': 'Qwen3-Embedding 0.6B', 'Ollama-Tag': 'qwen3-embedding:0.6b', 'Download': '639 MB', 'Kontext (Ollama)': '32K', 'Vektorgröße': '1.024', 'Geeignet für': 'Sehr lange Chunks' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup-Fehler, die das Retrieval im lokalen RAG verschlechtern',
        content: [
          '<strong>Task-Präfixe verwenden.</strong> Laut der Modellkarte von Nomic muss die Eingabe ein Task-Präfix enthalten: search_document: für indexierte Chunks und search_query: für die Nutzerfrage. Fehlen sie, kann die Retrieval-Qualität sinken.',
          '<strong>num_ctx bewusst erhöhen.</strong> Der Request unten bettet einen Chunk mit dem vollen 8.192-Token-Fenster ein. Erhöhen Sie den Wert nur so weit, wie Ihre Chunks es brauchen, da ein größerer Kontext mehr Speicher belegt.',
          '<strong>Nie Modelle in einem Index mischen.</strong> Vektoren verschiedener Embedding-Modelle sind nicht vergleichbar; ein Wechsel von nomic-embed-text zu BGE-M3 bedeutet, jeden Chunk neu einzubetten.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Brauche ich eine GPU, um ein Embedding-Modell lokal auszuführen?',
            a: 'Nein — Embedding-Modelle sind viel kleiner als Chat-LLMs und laufen auf der CPU mit akzeptabler Geschwindigkeit. Eine GPU beschleunigt das Massen-Indexieren großer Dokumentsammlungen, ist für typische RAG-Workloads aber nicht erforderlich.',
          },
          {
            q: 'Kann ich dasselbe Modell für Embeddings und Chat nutzen?',
            a: 'Nein — Embedding- und Chat-Modelle erfüllen unterschiedliche Aufgaben und nutzen unterschiedliche Architekturen. Betreiben Sie ein eigenes Embedding-Modell (wie nomic-embed-text) neben Ihrem Chat-Modell (wie Qwen3 oder Llama), nicht anstelle davon.',
          },
          {
            q: 'Ist nomic-embed-text besser als mxbai-embed-large?',
            a: 'Für die meisten lokalen RAG-Setups ist nomic-embed-text eine vernünftige Standardwahl: Es ist kleiner (274 MB statt 670 MB) und verarbeitet längere Chunks, während Ollama für mxbai-embed-large nur ein 512-Token-Fenster nennt. Die Retrieval-Qualität kann bei Ihren eigenen Dokumenten abweichen — testen Sie beide mit echten Anfragen, bevor Sie sich festlegen.',
          },
          {
            q: 'Unterstützt nomic-embed-text in Ollama wirklich 8.192 Token?',
            a: 'Das Modell unterstützt nativ 8.192 Token, aber Ollamas Bibliotheksseite nennt ein 2K-Fenster. Übergeben Sie num_ctx (bis 8.192) in den Request-Optionen, um längere Chunks einzubetten.',
          },
          {
            q: 'Wie wähle ich die Chunk-Größe für RAG mit nomic-embed-text?',
            a: 'Der lange Kontext bietet Spielraum, doch kürzere Chunks (einige hundert Token) liefern im Allgemeinen präzisere Treffer als sehr lange, da zu breite Chunks die Spezifität des Embeddings verwässern. Beginnen Sie bei etwa 300–500 Token pro Chunk und passen Sie nach der Retrieval-Qualität an. Bei mxbai-embed-large bleiben Sie unter dem 512-Token-Fenster.',
          },
          {
            q: 'Ist BGE-M3 langsamer als nomic-embed-text?',
            a: 'BGE-M3 ist größer (567 Mio. Parameter, 1,2 GB), rechnen Sie also mit etwas langsamerer Inferenz und Indexierung als bei nomic-embed-text — ein vertretbarer Kompromiss für zuverlässiges mehrsprachiges Retrieval.',
          },
          {
            q: 'Sollte ich stattdessen EmbeddingGemma oder Qwen3-Embedding nutzen?',
            a: 'Es sind neuere Optionen auf Ollama (EmbeddingGemma mit 622 MB und über 100 Sprachen, Qwen3-Embedding 0.6B mit 639 MB und 32K-Fenster). Wir haben sie hier nicht gegen nomic-embed-text gebenchmarkt — testen Sie sie an Ihren eigenen Dokumenten, bevor Sie wechseln.',
          },
          {
            q: 'Kann ich das Embedding-Modell später wechseln?',
            a: 'Ja, aber Sie müssen die gesamte Dokumentsammlung neu einbetten, weil Vektoren verschiedener Modelle nicht vergleichbar sind. Legen Sie das Modell fest, bevor Sie einen großen Korpus indexieren.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes lokales LLM für Dokumentenzusammenfassung](/prompt-bites/best-local-llm-document-summarization) — Retrieval mit einem Long-Context-Chat-Modell kombinieren',
          '[Wie viel VRAM braucht man für ein lokales LLM?](/prompt-bites/how-much-vram-for-local-llm) — Hardware für eine vollständige RAG-Pipeline dimensionieren',
          '[Bestes Sub-8B-Modell für Echtzeit-Chat](/prompt-bites/best-local-llm-under-8b-realtime-chat) — ein schnelles Chat-Modell zur Kombination mit Retrieval',
          '[Beste Embedding-Modelle für lokales RAG (vollständiger Vergleich)](/power-local-llm/best-embedding-models-local-rag-2026) — der vollständige Benchmark zu Genauigkeit, Geschwindigkeit und Mehrsprachigkeit',
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-es.webp',
    title: '¿Cuál es el mejor modelo de embedding para RAG local: nomic, mxbai o BGE-M3?',
    seoTitle: 'Mejor modelo de embedding local para RAG 2026: nomic vs mxbai',
    metaDescription: 'nomic-embed-text es la mejor opción por defecto para RAG local con Ollama; mxbai-embed-large tiene 512 tokens, BGE-M3 gana en multilingüe. Especificaciones comparadas.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que construyen una canalización RAG local y eligen un modelo de embedding',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>nomic-embed-text es el mejor modelo de embedding por defecto para RAG local con Ollama</strong> — descarga de 274 MB, vectores de 768 dimensiones y contexto nativo de 8.192 tokens (Ollama indica 2K por defecto, así que aumenta num_ctx para fragmentos más largos). Elige BGE-M3 para documentos multilingües y mxbai-embed-large solo si tus fragmentos caben en su ventana de 512 tokens.',
    toc: [
      { label: 'Mejor opción: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: 'Modelos de embedding comparados', anchor: '#comparison' },
      { label: 'Errores de configuración', anchor: '#setup' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor modelo de embedding para RAG local?',
        answer: 'nomic-embed-text es el mejor modelo de embedding por defecto para RAG local con Ollama: pequeño (274 MB), 768 dimensiones, contexto nativo de 8.192 tokens. BGE-M3 es mejor para colecciones multilingües; mxbai-embed-large encaja con fragmentos cortos en inglés.',
        bullets: [
          'nomic-embed-text: 274 MB, 768 dimensiones, contexto nativo de 8.192 tokens — la ventana por defecto de Ollama es 2K, así que aumenta num_ctx para fragmentos largos. Añade los prefijos search_document: / search_query:.',
          'BGE-M3: 1,2 GB, contexto de 8K, creado para recuperación multilingüe — la opción correcta si tus documentos abarcan varios idiomas.',
          'mxbai-embed-large: 670 MB, 1.024 dimensiones, pero solo una ventana de 512 tokens — una buena alternativa en inglés si los fragmentos son cortos.',
          'all-minilm: 46 MB y 384 dimensiones — solo para prototipos o CPU muy limitadas. EmbeddingGemma y Qwen3-Embedding son opciones más nuevas que conviene probar.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción por defecto: nomic-embed-text — 274 MB, 768 dimensiones, contexto nativo de 8.192 tokens (aumenta num_ctx en Ollama)',
          'Mejor opción multilingüe: BGE-M3 — 1,2 GB, contexto de 8K, creado para recuperación en muchos idiomas',
          'Alternativa: mxbai-embed-large — centrado en inglés, pero Ollama indica solo una ventana de 512 tokens, así que mantén los fragmentos cortos',
          'all-minilm es diminuto (46 MB), pero más antiguo y en general más débil — úsalo para prototipos, no para RAG serio',
          'Usa un solo modelo de embedding por índice: cambiarlo implica volver a generar los embeddings de todos los fragmentos',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor opción: nomic-embed-text',
        content: [
          '<strong>nomic-embed-text es el mejor modelo de embedding por defecto para RAG local porque combina una descarga pequeña de 274 MB con un contexto nativo de 8.192 tokens y vectores de 768 dimensiones, y funciona con la API de embeddings de Ollama tras un único pull.</strong> La ficha del modelo de Nomic documenta la longitud de secuencia de 8.192 tokens y la licencia Apache-2.0. Los modelos de embedding más antiguos suelen limitarse a unos 512 tokens, lo que obliga a fragmentar con más agresividad.',
          'Un detalle: la página de Ollama indica una ventana de contexto de 2K para nomic-embed-text. Para incrustar fragmentos más largos, pasa un num_ctx mayor (hasta 8.192) en las opciones de la petición, como se muestra en la sección de configuración más abajo.',
          'Si tus documentos abarcan varios idiomas, BGE-M3 es la mejor opción. Es un modelo de 567M de parámetros diseñado para recuperación multilingüe, mientras que nomic-embed-text está optimizado sobre todo para inglés y rinde peor con texto en otros idiomas.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'Cómo se compara nomic-embed-text con mxbai-embed-large, BGE-M3 y all-MiniLM',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large:</strong> mxbai-embed-large tiene 335M de parámetros, 670 MB y vectores de 1.024 dimensiones, pero Ollama indica solo una ventana de 512 tokens. Con fragmentos de 300–500 tokens sirven ambos; con fragmentos más largos nomic-embed-text evita el truncamiento, y sus vectores de 768 dimensiones ocupan aproximadamente una cuarta parte menos de espacio en el índice. Los resultados publicados de recuperación dependen del benchmark y del conjunto de datos, y aquí no hemos ejecutado un benchmark propio — prueba ambos con una muestra de tus propios documentos.',
          '<strong>all-MiniLM vs nomic-embed-text:</strong> all-minilm (22M y 33M de parámetros, 46–67 MB, 384 dimensiones) es la opción más pequeña y rápida de la biblioteca de Ollama, que indica una ventana de 512 tokens. Es un modelo más antiguo y mucho más pequeño que en general recupera con menos precisión, así que trátalo como opción para prototipos o equipos modestos, no como predeterminada.',
          '<strong>BGE-M3 vs nomic-embed-text:</strong> BGE-M3 (567M de parámetros, 1,2 GB, contexto de 8K) es el especialista multilingüe. Es más grande y más lento al indexar; si tu corpus es solo en inglés, nomic-embed-text es la opción más ligera, y si mezcla idiomas, BGE-M3 compensa su mayor peso.',
          '<strong>Opciones más nuevas:</strong> EmbeddingGemma (300M de parámetros, 622 MB, contexto de 2K, entrenado con más de 100 idiomas) y Qwen3-Embedding (versión 0.6B: 639 MB, contexto de 32K) están disponibles en Ollama y merecen una prueba comparativa con tus datos.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos de embedding comparados',
        content: [
          'El tamaño de descarga y la ventana de contexto proceden de la página de cada modelo en Ollama; el tamaño del vector, de las fichas de los modelos. nomic-embed-text admite 8.192 tokens de forma nativa, aunque Ollama indica 2K por defecto.',
          'Evita all-minilm para RAG serio: es rápido y ligero, pero en general menos preciso que los modelos mayores de la tabla. Todos funcionan con la API de embeddings de Ollama con el mismo flujo de descarga y llamada.',
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Descarga', 'Contexto (Ollama)', 'Tamaño del vector', 'Ideal para'],
        rows: [
          { 'Modelo': 'nomic-embed-text', 'Etiqueta Ollama': 'nomic-embed-text', 'Descarga': '274 MB', 'Contexto (Ollama)': '2K (8.192 nativo)', 'Tamaño del vector': '768', 'Ideal para': 'Opción por defecto para RAG en inglés' },
          { 'Modelo': 'mxbai-embed-large', 'Etiqueta Ollama': 'mxbai-embed-large', 'Descarga': '670 MB', 'Contexto (Ollama)': '512', 'Tamaño del vector': '1.024', 'Ideal para': 'Fragmentos cortos en inglés' },
          { 'Modelo': 'BGE-M3', 'Etiqueta Ollama': 'bge-m3', 'Descarga': '1,2 GB', 'Contexto (Ollama)': '8K', 'Tamaño del vector': '1.024', 'Ideal para': 'Documentos multilingües' },
          { 'Modelo': 'all-minilm', 'Etiqueta Ollama': 'all-minilm', 'Descarga': '46 MB (22M)', 'Contexto (Ollama)': '512', 'Tamaño del vector': '384', 'Ideal para': 'Prototipos, CPU modestas' },
          { 'Modelo': 'EmbeddingGemma', 'Etiqueta Ollama': 'embeddinggemma', 'Descarga': '622 MB', 'Contexto (Ollama)': '2K', 'Tamaño del vector': '768', 'Ideal para': 'Modelo multilingüe pequeño' },
          { 'Modelo': 'Qwen3-Embedding 0.6B', 'Etiqueta Ollama': 'qwen3-embedding:0.6b', 'Descarga': '639 MB', 'Contexto (Ollama)': '32K', 'Tamaño del vector': '1.024', 'Ideal para': 'Fragmentos muy largos' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Errores de configuración que empeoran la recuperación en RAG local',
        content: [
          '<strong>Usa los prefijos de tarea.</strong> La ficha del modelo de Nomic indica que la entrada debe incluir un prefijo de tarea: search_document: para los fragmentos que indexas y search_query: para la pregunta del usuario. Omitirlos puede reducir la calidad de la recuperación.',
          '<strong>Aumenta num_ctx de forma deliberada.</strong> La petición de abajo incrusta un fragmento con la ventana completa de 8.192 tokens. Súbelo solo lo que tus fragmentos necesiten, ya que un contexto mayor consume más memoria.',
          '<strong>No mezcles modelos en un mismo índice.</strong> Los vectores de distintos modelos de embedding no son comparables, así que pasar de nomic-embed-text a BGE-M3 implica regenerar los embeddings de todos los fragmentos.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Necesito una GPU para ejecutar un modelo de embedding en local?',
            a: 'No — los modelos de embedding son mucho más pequeños que los LLM de chat y funcionan a una velocidad razonable en CPU. Una GPU acelera la indexación masiva de grandes colecciones de documentos, pero no es necesaria para cargas RAG habituales.',
          },
          {
            q: '¿Puedo usar el mismo modelo para embeddings y chat?',
            a: 'No — los modelos de embedding y de chat cumplen funciones distintas y usan arquitecturas diferentes. Ejecuta un modelo de embedding dedicado (como nomic-embed-text) junto a tu modelo de chat (como Qwen3 o Llama), no en su lugar.',
          },
          {
            q: '¿Es nomic-embed-text mejor que mxbai-embed-large?',
            a: 'Para la mayoría de configuraciones de RAG local, nomic-embed-text es una opción por defecto razonable: es más pequeño (274 MB frente a 670 MB) y admite fragmentos más largos, mientras que Ollama indica solo una ventana de 512 tokens para mxbai-embed-large. La calidad de recuperación con tus propios documentos puede variar, así que prueba ambos con consultas reales antes de decidir.',
          },
          {
            q: '¿Admite nomic-embed-text realmente 8.192 tokens en Ollama?',
            a: 'El modelo admite 8.192 tokens de forma nativa, pero la página de Ollama indica una ventana de 2K. Pasa num_ctx (hasta 8.192) en las opciones de la petición para incrustar fragmentos más largos.',
          },
          {
            q: '¿Cómo elijo el tamaño de fragmento para RAG con nomic-embed-text?',
            a: 'Su contexto largo da margen, pero los fragmentos más cortos (unos cientos de tokens) siguen recuperando en general con más precisión que los muy largos, porque los fragmentos demasiado amplios diluyen la especificidad del embedding. Empieza con unos 300–500 tokens por fragmento y ajusta según la calidad de recuperación. Con mxbai-embed-large, mantente por debajo de su ventana de 512 tokens.',
          },
          {
            q: '¿Es BGE-M3 más lento que nomic-embed-text?',
            a: 'BGE-M3 es más grande (567M de parámetros, 1,2 GB), así que espera una inferencia e indexación algo más lentas que con nomic-embed-text — un compromiso razonable si necesitas recuperación multilingüe fiable.',
          },
          {
            q: '¿Debería usar EmbeddingGemma o Qwen3-Embedding en su lugar?',
            a: 'Son opciones más nuevas en Ollama (EmbeddingGemma con 622 MB y más de 100 idiomas, Qwen3-Embedding 0.6B con 639 MB y ventana de 32K). Aquí no las hemos comparado con nomic-embed-text, así que pruébalas con tus propios documentos antes de cambiar.',
          },
          {
            q: '¿Puedo cambiar de modelo de embedding más adelante?',
            a: 'Sí, pero tendrás que regenerar los embeddings de toda la colección, porque los vectores de modelos distintos no son comparables. Decide el modelo antes de indexar un corpus grande.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Mejor LLM Local para Resumen de Documentos](/prompt-bites/best-local-llm-document-summarization) — combinando recuperación con un modelo de chat de contexto largo',
          '[¿Cuánta VRAM Necesitas para un LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para una canalización RAG completa',
          '[Mejor Modelo Menor a 8B para Chat en Tiempo Real](/prompt-bites/best-local-llm-under-8b-realtime-chat) — un modelo de chat rápido para combinar con recuperación',
          '[Mejores modelos de embedding para RAG local (comparación completa)](/power-local-llm/best-embedding-models-local-rag-2026) — el benchmark completo de precisión, velocidad y soporte multilingüe',
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-fr.webp',
    title: 'Quel est le meilleur modèle d\'embedding pour un RAG local : nomic, mxbai ou BGE-M3 ?',
    seoTitle: 'Meilleur modèle d\'embedding local pour RAG 2026 : nomic vs mxbai',
    metaDescription: 'nomic-embed-text est le meilleur choix par défaut pour un RAG local avec Ollama ; mxbai-embed-large a 512 tokens, BGE-M3 domine le multilingue. Caractéristiques comparées.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui construisent un pipeline RAG local et choisissent un modèle d\'embedding',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>nomic-embed-text est le meilleur modèle d\'embedding par défaut pour un RAG local avec Ollama</strong> — téléchargement de 274 Mo, vecteurs de 768 dimensions et contexte natif de 8 192 tokens (Ollama affiche 2K par défaut : augmentez num_ctx pour des chunks plus longs). Choisissez BGE-M3 pour des documents multilingues, et mxbai-embed-large seulement si vos chunks restent sous sa fenêtre de 512 tokens.',
    toc: [
      { label: 'Meilleur choix : nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: 'Comparatif des modèles d\'embedding', anchor: '#comparison' },
      { label: 'Pièges de configuration', anchor: '#setup' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur modèle d\'embedding pour un RAG local ?',
        answer: 'nomic-embed-text est le meilleur modèle d\'embedding par défaut pour un RAG local avec Ollama : léger (274 Mo), 768 dimensions, contexte natif de 8 192 tokens. BGE-M3 convient mieux aux collections multilingues ; mxbai-embed-large aux chunks courts en anglais.',
        bullets: [
          'nomic-embed-text : 274 Mo, 768 dimensions, contexte natif de 8 192 tokens — la fenêtre par défaut d\'Ollama est de 2K, augmentez num_ctx pour les longs chunks. Ajoutez les préfixes search_document: / search_query:.',
          'BGE-M3 : 1,2 Go, contexte de 8K, conçu pour la recherche multilingue — le bon choix si vos documents couvrent plusieurs langues.',
          'mxbai-embed-large : 670 Mo, 1 024 dimensions, mais seulement une fenêtre de 512 tokens — une bonne alternative en anglais si les chunks sont courts.',
          'all-minilm : 46 Mo et 384 dimensions — uniquement pour des prototypes ou des CPU très limités. EmbeddingGemma et Qwen3-Embedding sont des options plus récentes à tester.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix par défaut : nomic-embed-text — 274 Mo, 768 dimensions, contexte natif de 8 192 tokens (augmentez num_ctx dans Ollama)',
          'Meilleur choix multilingue : BGE-M3 — 1,2 Go, contexte de 8K, conçu pour la recherche dans de nombreuses langues',
          'Alternative : mxbai-embed-large — axé sur l\'anglais, mais Ollama n\'indique qu\'une fenêtre de 512 tokens : gardez des chunks courts',
          'all-minilm est minuscule (46 Mo) mais plus ancien et généralement moins performant — pour des prototypes, pas pour un RAG sérieux',
          'Un seul modèle d\'embedding par index : en changer oblige à recalculer les embeddings de tous les chunks',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : nomic-embed-text',
        content: [
          '<strong>nomic-embed-text est le meilleur modèle d\'embedding par défaut pour un RAG local car il associe un petit téléchargement de 274 Mo à un contexte natif de 8 192 tokens et à des vecteurs de 768 dimensions, et il fonctionne avec l\'API d\'embeddings d\'Ollama après un simple pull.</strong> La fiche du modèle de Nomic documente la longueur de séquence de 8 192 tokens et la licence Apache-2.0. Les modèles d\'embedding plus anciens plafonnent généralement vers 512 tokens, ce qui oblige à découper plus finement.',
          'Un bémol : la page de bibliothèque d\'Ollama indique une fenêtre de contexte de 2K pour nomic-embed-text. Pour encoder des chunks plus longs, passez un num_ctx plus grand (jusqu\'à 8 192) dans les options de la requête, comme dans la section de configuration ci-dessous.',
          'Si vos documents couvrent plusieurs langues, BGE-M3 est le meilleur choix. C\'est un modèle de 567 M de paramètres conçu pour la recherche multilingue, alors que nomic-embed-text est surtout optimisé pour l\'anglais et moins performant sur les autres langues.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'Comment nomic-embed-text se compare à mxbai-embed-large, BGE-M3 et all-MiniLM',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large :</strong> mxbai-embed-large compte 335 M de paramètres, pèse 670 Mo et produit des vecteurs de 1 024 dimensions, mais Ollama n\'indique qu\'une fenêtre de 512 tokens. Avec des chunks de 300 à 500 tokens, les deux conviennent ; au-delà, nomic-embed-text évite la troncature, et ses vecteurs de 768 dimensions occupent environ un quart d\'espace d\'index en moins. Les scores de recherche publiés dépendent du benchmark et du jeu de données, et nous n\'avons pas mené de benchmark propre ici — testez les deux sur un échantillon de vos propres documents.',
          '<strong>all-MiniLM vs nomic-embed-text :</strong> all-minilm (22 M et 33 M de paramètres, 46 à 67 Mo, 384 dimensions) est l\'option la plus petite et la plus rapide de la bibliothèque d\'Ollama, qui indique une fenêtre de 512 tokens. C\'est un modèle plus ancien et bien plus petit, généralement moins précis : un choix de prototypage ou de matériel modeste, pas un défaut.',
          '<strong>BGE-M3 vs nomic-embed-text :</strong> BGE-M3 (567 M de paramètres, 1,2 Go, contexte de 8K) est le spécialiste multilingue. Il est plus gros et plus lent à indexer ; si votre corpus est uniquement en anglais, nomic-embed-text est plus léger, et s\'il mêle plusieurs langues, BGE-M3 vaut son poids supplémentaire.',
          '<strong>Options plus récentes :</strong> EmbeddingGemma (300 M de paramètres, 622 Mo, contexte de 2K, entraîné sur plus de 100 langues) et Qwen3-Embedding (version 0.6B : 639 Mo, contexte de 32K) sont disponibles sur Ollama et méritent un test comparatif sur vos données.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif des modèles d\'embedding',
        content: [
          'La taille de téléchargement et la fenêtre de contexte proviennent de la page de chaque modèle sur Ollama ; la taille des vecteurs, des fiches des modèles. nomic-embed-text prend en charge 8 192 tokens en natif, même si Ollama affiche 2K par défaut.',
          'Évitez all-minilm pour un RAG sérieux : il est rapide et léger, mais généralement moins précis que les modèles plus grands du tableau. Tous passent par l\'API d\'embeddings d\'Ollama avec le même flux de téléchargement et d\'appel.',
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Contexte (Ollama)', 'Taille du vecteur', 'À choisir pour'],
        rows: [
          { 'Modèle': 'nomic-embed-text', 'Tag Ollama': 'nomic-embed-text', 'Téléchargement': '274 Mo', 'Contexte (Ollama)': '2K (8 192 natif)', 'Taille du vecteur': '768', 'À choisir pour': 'Choix par défaut pour un RAG en anglais' },
          { 'Modèle': 'mxbai-embed-large', 'Tag Ollama': 'mxbai-embed-large', 'Téléchargement': '670 Mo', 'Contexte (Ollama)': '512', 'Taille du vecteur': '1 024', 'À choisir pour': 'Chunks courts en anglais' },
          { 'Modèle': 'BGE-M3', 'Tag Ollama': 'bge-m3', 'Téléchargement': '1,2 Go', 'Contexte (Ollama)': '8K', 'Taille du vecteur': '1 024', 'À choisir pour': 'Documents multilingues' },
          { 'Modèle': 'all-minilm', 'Tag Ollama': 'all-minilm', 'Téléchargement': '46 Mo (22M)', 'Contexte (Ollama)': '512', 'Taille du vecteur': '384', 'À choisir pour': 'Prototypes, CPU modestes' },
          { 'Modèle': 'EmbeddingGemma', 'Tag Ollama': 'embeddinggemma', 'Téléchargement': '622 Mo', 'Contexte (Ollama)': '2K', 'Taille du vecteur': '768', 'À choisir pour': 'Petit modèle multilingue' },
          { 'Modèle': 'Qwen3-Embedding 0.6B', 'Tag Ollama': 'qwen3-embedding:0.6b', 'Téléchargement': '639 Mo', 'Contexte (Ollama)': '32K', 'Taille du vecteur': '1 024', 'À choisir pour': 'Chunks très longs' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Pièges de configuration qui dégradent la recherche en RAG local',
        content: [
          '<strong>Utilisez les préfixes de tâche.</strong> La fiche du modèle de Nomic précise que l\'entrée doit inclure un préfixe de tâche : search_document: pour les chunks indexés et search_query: pour la question de l\'utilisateur. Les omettre peut réduire la qualité de la recherche.',
          '<strong>Augmentez num_ctx en connaissance de cause.</strong> La requête ci-dessous encode un chunk avec la fenêtre complète de 8 192 tokens. Ne l\'augmentez que dans la mesure où vos chunks l\'exigent, car un contexte plus grand consomme plus de mémoire.',
          '<strong>Ne mélangez jamais les modèles dans un même index.</strong> Les vecteurs de modèles d\'embedding différents ne sont pas comparables : passer de nomic-embed-text à BGE-M3 impose de recalculer tous les chunks.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Faut-il un GPU pour exécuter un modèle d\'embedding en local ?',
            a: 'Non — les modèles d\'embedding sont bien plus petits que les LLM de chat et tournent à une vitesse raisonnable sur CPU. Un GPU accélère l\'indexation en masse de grandes collections de documents, mais n\'est pas nécessaire pour des charges RAG typiques.',
          },
          {
            q: 'Puis-je utiliser le même modèle pour les embeddings et le chat ?',
            a: 'Non — les modèles d\'embedding et de chat remplissent des rôles différents et reposent sur des architectures différentes. Exécutez un modèle d\'embedding dédié (comme nomic-embed-text) à côté de votre modèle de chat (comme Qwen3 ou Llama), pas à sa place.',
          },
          {
            q: 'nomic-embed-text est-il meilleur que mxbai-embed-large ?',
            a: 'Pour la plupart des configurations de RAG local, nomic-embed-text est un choix par défaut raisonnable : il est plus petit (274 Mo contre 670 Mo) et gère des chunks plus longs, alors qu\'Ollama n\'indique qu\'une fenêtre de 512 tokens pour mxbai-embed-large. La qualité de recherche sur vos propres documents peut différer : testez les deux avec de vraies requêtes avant de vous engager.',
          },
          {
            q: 'nomic-embed-text prend-il vraiment en charge 8 192 tokens dans Ollama ?',
            a: 'Le modèle prend en charge 8 192 tokens en natif, mais la page d\'Ollama indique une fenêtre de 2K. Passez num_ctx (jusqu\'à 8 192) dans les options de la requête pour encoder des chunks plus longs.',
          },
          {
            q: 'Comment choisir la taille des chunks pour un RAG avec nomic-embed-text ?',
            a: 'Son long contexte laisse de la marge, mais des chunks plus courts (quelques centaines de tokens) retrouvent généralement l\'information plus précisément que de très longs chunks, car des chunks trop larges diluent la spécificité de l\'embedding. Commencez autour de 300 à 500 tokens par chunk et ajustez selon la qualité de recherche. Avec mxbai-embed-large, restez sous sa fenêtre de 512 tokens.',
          },
          {
            q: 'BGE-M3 est-il plus lent que nomic-embed-text ?',
            a: 'BGE-M3 est plus gros (567 M de paramètres, 1,2 Go) : attendez-vous à une inférence et une indexation un peu plus lentes qu\'avec nomic-embed-text — un compromis raisonnable si vous avez besoin d\'une recherche multilingue fiable.',
          },
          {
            q: 'Dois-je utiliser EmbeddingGemma ou Qwen3-Embedding à la place ?',
            a: 'Ce sont des options plus récentes sur Ollama (EmbeddingGemma : 622 Mo et plus de 100 langues ; Qwen3-Embedding 0.6B : 639 Mo et fenêtre de 32K). Nous ne les avons pas comparées à nomic-embed-text ici : testez-les sur vos propres documents avant de changer.',
          },
          {
            q: 'Puis-je changer de modèle d\'embedding plus tard ?',
            a: 'Oui, mais vous devrez recalculer les embeddings de toute la collection, car les vecteurs de modèles différents ne sont pas comparables. Choisissez le modèle avant d\'indexer un gros corpus.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur LLM local pour la synthèse de documents](/prompt-bites/best-local-llm-document-summarization) — associer la recherche à un modèle de chat à contexte long',
          '[De combien de VRAM avez-vous besoin pour un LLM local ?](/prompt-bites/how-much-vram-for-local-llm) — dimensionner le matériel pour un pipeline RAG complet',
          '[Meilleur modèle sous 8B pour le chat en temps réel](/prompt-bites/best-local-llm-under-8b-realtime-chat) — un modèle de chat rapide à associer à la recherche',
          '[Meilleurs modèles d\'embedding pour le RAG local (comparaison complète)](/power-local-llm/best-embedding-models-local-rag-2026) — le benchmark complet sur la précision, la vitesse et le support multilingue',
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-ja.webp',
    title: 'ローカルRAGに最適な埋め込みモデルは？ nomic vs mxbai vs BGE-M3',
    seoTitle: '2026年版 ローカルRAG向け埋め込みモデル比較: nomic vs mxbai',
    metaDescription: 'OllamaでのローカルRAGの標準はnomic-embed-text。mxbai-embed-largeは512トークン、多言語はBGE-M3。サイズ・コンテキスト・次元数を比較。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'ローカルRAGパイプラインを構築し埋め込みモデルを選ぶ開発者',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>OllamaでのローカルRAGでは、nomic-embed-textが最適な標準の埋め込みモデルです</strong>——ダウンロードは274 MB、768次元のベクトル、ネイティブ8,192トークンのコンテキスト（Ollamaの既定表示は2Kなので、長いチャンクにはnum_ctxを引き上げてください）。多言語文書にはBGE-M3、mxbai-embed-largeはチャンクが512トークンの枠に収まる場合のみ選びましょう。',
    toc: [
      { label: 'ベストピック: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: '埋め込みモデルの比較', anchor: '#comparison' },
      { label: 'セットアップの落とし穴', anchor: '#setup' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'ローカルRAGに最適な埋め込みモデルは？',
        answer: 'OllamaでのローカルRAGの標準はnomic-embed-text：小型（274 MB）、768次元、ネイティブ8,192トークン。多言語コレクションにはBGE-M3、短い英語チャンクにはmxbai-embed-largeが向きます。',
        bullets: [
          'nomic-embed-text：274 MB、768次元、ネイティブ8,192トークン——Ollamaの既定ウィンドウは2Kなので、長いチャンクにはnum_ctxを引き上げます。search_document: / search_query: のプレフィックスを付けてください。',
          'BGE-M3：1.2 GB、8Kコンテキスト、多言語検索向けに設計——文書が複数言語にまたがるなら最適です。',
          'mxbai-embed-large：670 MB、1,024次元ですが、ウィンドウは512トークンのみ——チャンクが短い英語用途の有力な代替です。',
          'all-minilm：46 MB・384次元——プロトタイプや非常に非力なCPU向け。EmbeddingGemmaとQwen3-Embeddingは試す価値のある新しい選択肢です。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '標準の最適解：nomic-embed-text——274 MB、768次元、ネイティブ8,192トークン（Ollamaではnum_ctxを引き上げて利用）',
          '多言語ならBGE-M3——1.2 GB、8Kコンテキスト、多数の言語での検索向けに設計',
          '代替：mxbai-embed-large——英語中心。Ollamaの表示は512トークンのみなので、チャンクは短く保つ',
          'all-minilmは極小（46 MB）だが古く、一般に精度は劣る——本格的なRAGではなくプロトタイプ向け',
          '1つのインデックスには1つの埋め込みモデルのみ：モデルを変えると全チャンクの再埋め込みが必要',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: nomic-embed-text',
        content: [
          '<strong>nomic-embed-textがローカルRAGの標準として最適なのは、274 MBという小さなダウンロードに、ネイティブ8,192トークンのコンテキストと768次元ベクトルを備え、1回のpullでOllamaの埋め込みAPIから使えるからです。</strong>Nomicのモデルカードには、8,192トークンのシーケンス長とApache-2.0ライセンスが記載されています。従来の埋め込みモデルは多くが512トークン前後で頭打ちとなり、より細かいチャンク分割を強いられます。',
          '注意点：Ollamaのライブラリページでは、nomic-embed-textのコンテキストウィンドウは2Kと表示されています。それより長いチャンクを埋め込むには、後述のセットアップ節のように、リクエストのオプションでより大きなnum_ctx（最大8,192）を指定します。',
          '文書が複数言語にまたがるなら、BGE-M3が適しています。多言語検索向けに設計された5.67億パラメータのモデルで、nomic-embed-textは主に英語向けに最適化されており、英語以外のテキストでは弱くなります。',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'nomic-embed-textとmxbai-embed-large・BGE-M3・all-MiniLMの比較',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large：</strong>mxbai-embed-largeは3.35億パラメータ・670 MB・1,024次元ですが、Ollamaの表示は512トークンのウィンドウのみです。チャンクが300〜500トークンならどちらも使えますが、それより長い場合はnomic-embed-textのほうが切り捨てを避けられ、768次元のベクトルはインデックスの容量も約4分の1少なくて済みます。公表されている検索スコアはベンチマークやデータセットによって異なり、ここで独自のベンチマークは実施していません——ご自身の文書のサンプルで両方を試してください。',
          '<strong>all-MiniLM vs nomic-embed-text：</strong>all-minilm（2,200万・3,300万パラメータ、46〜67 MB、384次元）はOllamaライブラリで最小・最速の選択肢で、ウィンドウは512トークンと表示されています。古くはるかに小さいモデルで、一般に検索精度は劣るため、標準ではなくプロトタイプや低スペック環境向けと考えてください。',
          '<strong>BGE-M3 vs nomic-embed-text：</strong>BGE-M3（5.67億パラメータ、1.2 GB、8Kコンテキスト）は多言語の専門モデルです。サイズが大きくインデックス作成も遅めなので、英語のみのコーパスならnomic-embed-textが軽量で、複数言語が混在するならBGE-M3の重さに見合う価値があります。',
          '<strong>新しい選択肢：</strong>EmbeddingGemma（3億パラメータ、622 MB、2Kコンテキスト、100以上の言語で学習）とQwen3-Embedding（0.6B版：639 MB、32Kコンテキスト）はOllamaで利用でき、自分のデータでの比較テストに値します。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '埋め込みモデルの比較',
        content: [
          'ダウンロードサイズとコンテキストウィンドウは各モデルのOllamaライブラリページ、ベクトルサイズはモデルカードに基づきます。nomic-embed-textはOllamaの既定表示が2Kでも、ネイティブで8,192トークンに対応します。',
          '本格的なRAGではall-minilmは避けてください——高速で軽量ですが、表の大きなモデルより一般に精度が劣ります。いずれもOllamaの埋め込みAPIで、pullして呼び出すという同じ手順で使えます。',
        ],
        columns: ['モデル', 'Ollamaタグ', 'ダウンロード', 'コンテキスト（Ollama）', 'ベクトルサイズ', '向いている用途'],
        rows: [
          { 'モデル': 'nomic-embed-text', 'Ollamaタグ': 'nomic-embed-text', 'ダウンロード': '274 MB', 'コンテキスト（Ollama）': '2K（ネイティブ8,192）', 'ベクトルサイズ': '768', '向いている用途': '英語RAGの標準' },
          { 'モデル': 'mxbai-embed-large', 'Ollamaタグ': 'mxbai-embed-large', 'ダウンロード': '670 MB', 'コンテキスト（Ollama）': '512', 'ベクトルサイズ': '1,024', '向いている用途': '短い英語チャンク' },
          { 'モデル': 'BGE-M3', 'Ollamaタグ': 'bge-m3', 'ダウンロード': '1.2 GB', 'コンテキスト（Ollama）': '8K', 'ベクトルサイズ': '1,024', '向いている用途': '多言語文書' },
          { 'モデル': 'all-minilm', 'Ollamaタグ': 'all-minilm', 'ダウンロード': '46 MB（22M）', 'コンテキスト（Ollama）': '512', 'ベクトルサイズ': '384', '向いている用途': 'プロトタイプ、非力なCPU' },
          { 'モデル': 'EmbeddingGemma', 'Ollamaタグ': 'embeddinggemma', 'ダウンロード': '622 MB', 'コンテキスト（Ollama）': '2K', 'ベクトルサイズ': '768', '向いている用途': '小型の多言語モデル' },
          { 'モデル': 'Qwen3-Embedding 0.6B', 'Ollamaタグ': 'qwen3-embedding:0.6b', 'ダウンロード': '639 MB', 'コンテキスト（Ollama）': '32K', 'ベクトルサイズ': '1,024', '向いている用途': '非常に長いチャンク' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'ローカルRAGの検索精度を下げるセットアップの落とし穴',
        content: [
          '<strong>タスクプレフィックスを付ける。</strong>Nomicのモデルカードでは、入力にタスク指示のプレフィックスを含める必要があるとされています：インデックスするチャンクにはsearch_document:、ユーザーの質問にはsearch_query:。付けないと検索品質が下がる場合があります。',
          '<strong>num_ctxは意図して引き上げる。</strong>下のリクエストは8,192トークンの全ウィンドウでチャンクを埋め込みます。コンテキストを大きくするとメモリを多く使うため、チャンクに必要な範囲にとどめてください。',
          '<strong>1つのインデックスでモデルを混在させない。</strong>異なる埋め込みモデルのベクトルは比較できないため、nomic-embed-textからBGE-M3に切り替えると全チャンクの再埋め込みが必要です。',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: '埋め込みモデルをローカルで動かすのにGPUは必要ですか？',
            a: 'いいえ——埋め込みモデルはチャット用LLMよりはるかに小さく、CPUでも十分な速度で動きます。GPUは大量の文書の一括インデックスを高速化しますが、一般的なRAG用途では必須ではありません。',
          },
          {
            q: '埋め込みとチャットで同じモデルを使えますか？',
            a: 'いいえ——埋め込みモデルとチャットモデルは目的もアーキテクチャも異なります。専用の埋め込みモデル（nomic-embed-textなど）を、チャットモデル（Qwen3やLlamaなど）の代わりではなく併用してください。',
          },
          {
            q: 'nomic-embed-textはmxbai-embed-largeより優れていますか？',
            a: 'ほとんどのローカルRAG構成では、nomic-embed-textのほうが無難な標準です。サイズが小さく（274 MB対670 MB）、より長いチャンクを扱えますが、Ollamaはmxbai-embed-largeについて512トークンのウィンドウしか表示していません。自分の文書での検索品質は異なり得るため、決める前に実際のクエリで両方を試してください。',
          },
          {
            q: 'nomic-embed-textはOllamaで本当に8,192トークンに対応していますか？',
            a: 'モデル自体はネイティブで8,192トークンに対応していますが、Ollamaのライブラリページには2Kのウィンドウが表示されています。より長いチャンクを埋め込むには、リクエストのオプションでnum_ctx（最大8,192）を指定してください。',
          },
          {
            q: 'nomic-embed-textでRAGを使う場合、チャンクサイズはどう決めますか？',
            a: '長いコンテキストのおかげで余裕はありますが、数百トークンの短いチャンクのほうが、一般に非常に長いチャンクより精密に検索できます。広すぎるチャンクは埋め込みの特異性を薄めるためです。1チャンク300〜500トークン程度から始め、検索品質に応じて調整してください。mxbai-embed-largeでは512トークンの枠を下回るようにします。',
          },
          {
            q: 'BGE-M3はnomic-embed-textより遅いですか？',
            a: 'BGE-M3は大きい（5.67億パラメータ、1.2 GB）ため、nomic-embed-textより推論とインデックス作成がやや遅くなります——信頼できる多言語検索が必要なら妥当なトレードオフです。',
          },
          {
            q: '代わりにEmbeddingGemmaやQwen3-Embeddingを使うべきですか？',
            a: 'Ollamaにある新しい選択肢です（EmbeddingGemmaは622 MBで100以上の言語、Qwen3-Embedding 0.6Bは639 MBで32Kウィンドウ）。ここではnomic-embed-textとのベンチマークは行っていないため、切り替える前にご自身の文書で試してください。',
          },
          {
            q: '後から埋め込みモデルを変更できますか？',
            a: 'はい。ただし異なるモデルのベクトルは比較できないため、文書コレクション全体を再埋め込みする必要があります。大きなコーパスをインデックスする前にモデルを決めておきましょう。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[文書要約に最適なローカルLLM](/prompt-bites/best-local-llm-document-summarization) — 検索と長文コンテキストのチャットモデルの組み合わせ',
          '[ローカルLLMに必要なVRAM量は?](/prompt-bites/how-much-vram-for-local-llm) — フルRAGパイプラインのためのハードウェアサイジング',
          '[リアルタイムチャットに最適な8B未満のモデル](/prompt-bites/best-local-llm-under-8b-realtime-chat) — 検索と組み合わせる高速チャットモデル',
          '[ローカルRAG向け最適な埋め込みモデル（完全比較）](/power-local-llm/best-embedding-models-local-rag-2026) — 精度、速度、多言語対応の完全なベンチマーク',
        ],
      },
    },
  },
  ko: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-ko.webp',
    title: '로컬 RAG를 위한 최적의 임베딩 모델은? nomic vs mxbai vs BGE-M3',
    seoTitle: '2026년 로컬 RAG 임베딩 모델 비교: nomic vs mxbai',
    metaDescription: 'Ollama 로컬 RAG의 기본 선택은 nomic-embed-text입니다. mxbai-embed-large는 512토큰, 다국어는 BGE-M3. 크기·컨텍스트·차원을 비교합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '로컬 RAG 파이프라인을 구축하며 임베딩 모델을 선택하는 개발자',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ollama 로컬 RAG에서는 nomic-embed-text가 최적의 기본 임베딩 모델입니다</strong> — 다운로드 274 MB, 768차원 벡터, 네이티브 8,192토큰 컨텍스트(Ollama는 기본 2K로 표시하므로 긴 청크에는 num_ctx를 높이세요). 다국어 문서에는 BGE-M3를, mxbai-embed-large는 청크가 512토큰 창 안에 들어갈 때만 고르세요.',
    toc: [
      { label: '최적의 선택: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: '임베딩 모델 비교', anchor: '#comparison' },
      { label: '설정 시 흔한 함정', anchor: '#setup' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '로컬 RAG를 위한 최적의 임베딩 모델은?',
        answer: 'Ollama 로컬 RAG의 최적 기본 선택은 nomic-embed-text입니다: 작고(274 MB), 768차원, 네이티브 8,192토큰 컨텍스트. 다국어 컬렉션에는 BGE-M3, 짧은 영어 청크에는 mxbai-embed-large가 어울립니다.',
        bullets: [
          'nomic-embed-text: 274 MB, 768차원, 네이티브 8,192토큰 컨텍스트 — Ollama 기본 창은 2K이므로 긴 청크에는 num_ctx를 높이세요. search_document: / search_query: 접두사를 붙이세요.',
          'BGE-M3: 1.2 GB, 8K 컨텍스트, 다국어 검색용으로 설계 — 문서가 여러 언어에 걸친다면 알맞은 선택입니다.',
          'mxbai-embed-large: 670 MB, 1,024차원이지만 창은 512토큰뿐 — 청크가 짧은 영어 용도의 좋은 대안입니다.',
          'all-minilm: 46 MB, 384차원 — 프로토타입이나 매우 제한적인 CPU용. EmbeddingGemma와 Qwen3-Embedding은 시험해 볼 만한 최신 옵션입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '최적의 기본 선택: nomic-embed-text — 274 MB, 768차원, 네이티브 8,192토큰 컨텍스트(Ollama에서 num_ctx를 높여 사용)',
          '최적의 다국어 선택: BGE-M3 — 1.2 GB, 8K 컨텍스트, 여러 언어에 걸친 검색용으로 설계',
          '대안: mxbai-embed-large — 영어 중심이며 Ollama는 512토큰 창만 표시하므로 청크를 짧게 유지',
          'all-minilm은 매우 작지만(46 MB) 오래되었고 대체로 성능이 낮음 — 본격 RAG가 아닌 프로토타입용',
          '인덱스 하나에는 임베딩 모델 하나만: 모델을 바꾸면 모든 청크를 다시 임베딩해야 함',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: nomic-embed-text',
        content: [
          '<strong>nomic-embed-text가 로컬 RAG의 최적 기본 임베딩 모델인 이유는, 274 MB의 작은 다운로드에 네이티브 8,192토큰 컨텍스트와 768차원 벡터를 갖췄고, 한 번의 pull 후 Ollama 임베딩 API로 실행되기 때문입니다.</strong> Nomic의 모델 카드에는 8,192토큰 시퀀스 길이와 Apache-2.0 라이선스가 명시되어 있습니다. 이전 임베딩 모델은 보통 512토큰 안팎에서 한계가 있어 더 공격적인 청킹이 필요했습니다.',
          '주의할 점: Ollama 라이브러리 페이지는 nomic-embed-text의 컨텍스트 창을 2K로 표시합니다. 그보다 긴 청크를 임베딩하려면 아래 설정 섹션처럼 요청 옵션에서 더 큰 num_ctx(최대 8,192)를 지정하세요.',
          '문서가 여러 언어에 걸친다면 BGE-M3가 더 나은 선택입니다. 다국어 검색용으로 설계된 5억 6,700만 파라미터 모델이며, nomic-embed-text는 주로 영어에 최적화되어 있어 영어 외 텍스트에서는 약합니다.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'nomic-embed-text와 mxbai-embed-large, BGE-M3, all-MiniLM 비교',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large:</strong> mxbai-embed-large는 3억 3,500만 파라미터, 670 MB, 1,024차원 벡터이지만 Ollama는 512토큰 창만 표시합니다. 청크가 300–500토큰이면 둘 다 쓸 수 있고, 더 길면 nomic-embed-text가 잘림을 피하며 768차원 벡터는 인덱스 저장 공간도 약 4분의 1 적게 듭니다. 두 모델의 공개된 검색 점수는 벤치마크와 데이터셋에 따라 달라지며, 여기서 자체 벤치마크를 실행하지는 않았습니다 — 본인 문서 샘플로 둘 다 테스트하세요.',
          '<strong>all-MiniLM vs nomic-embed-text:</strong> all-minilm(2,200만·3,300만 파라미터, 46–67 MB, 384차원)은 Ollama 라이브러리에서 가장 작고 빠른 옵션이며 Ollama는 512토큰 창을 표시합니다. 더 오래되고 훨씬 작은 모델로 대체로 검색 정확도가 낮으므로, 기본값이 아니라 프로토타입이나 저사양 환경용으로 보세요.',
          '<strong>BGE-M3 vs nomic-embed-text:</strong> BGE-M3(5억 6,700만 파라미터, 1.2 GB, 8K 컨텍스트)는 다국어 전문 모델입니다. 더 크고 인덱싱이 느리므로 코퍼스가 영어뿐이라면 nomic-embed-text가 더 가볍고, 여러 언어가 섞여 있다면 BGE-M3의 추가 무게가 값어치를 합니다.',
          '<strong>최신 옵션:</strong> EmbeddingGemma(3억 파라미터, 622 MB, 2K 컨텍스트, 100개 이상 언어로 학습)와 Qwen3-Embedding(0.6B 버전: 639 MB, 32K 컨텍스트)은 Ollama에서 사용할 수 있으며 본인 데이터로 나란히 테스트해 볼 가치가 있습니다.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '임베딩 모델 비교',
        content: [
          '다운로드 크기와 컨텍스트 창은 각 모델의 Ollama 라이브러리 페이지, 벡터 크기는 모델 카드에서 가져왔습니다. nomic-embed-text는 Ollama가 기본 2K로 표시해도 네이티브로 8,192토큰을 지원합니다.',
          '본격적인 RAG에는 all-minilm을 피하세요 — 빠르고 가볍지만 표의 더 큰 모델보다 대체로 정확도가 낮습니다. 모두 Ollama 임베딩 API에서 pull 후 호출하는 같은 흐름으로 실행됩니다.',
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '컨텍스트(Ollama)', '벡터 크기', '추천 용도'],
        rows: [
          { '모델': 'nomic-embed-text', 'Ollama 태그': 'nomic-embed-text', '다운로드': '274 MB', '컨텍스트(Ollama)': '2K(네이티브 8,192)', '벡터 크기': '768', '추천 용도': '영어 RAG 기본 선택' },
          { '모델': 'mxbai-embed-large', 'Ollama 태그': 'mxbai-embed-large', '다운로드': '670 MB', '컨텍스트(Ollama)': '512', '벡터 크기': '1,024', '추천 용도': '짧은 영어 청크' },
          { '모델': 'BGE-M3', 'Ollama 태그': 'bge-m3', '다운로드': '1.2 GB', '컨텍스트(Ollama)': '8K', '벡터 크기': '1,024', '추천 용도': '다국어 문서' },
          { '모델': 'all-minilm', 'Ollama 태그': 'all-minilm', '다운로드': '46 MB(22M)', '컨텍스트(Ollama)': '512', '벡터 크기': '384', '추천 용도': '프로토타입, 저사양 CPU' },
          { '모델': 'EmbeddingGemma', 'Ollama 태그': 'embeddinggemma', '다운로드': '622 MB', '컨텍스트(Ollama)': '2K', '벡터 크기': '768', '추천 용도': '작은 다국어 모델' },
          { '모델': 'Qwen3-Embedding 0.6B', 'Ollama 태그': 'qwen3-embedding:0.6b', '다운로드': '639 MB', '컨텍스트(Ollama)': '32K', '벡터 크기': '1,024', '추천 용도': '매우 긴 청크' },
        ],
      },
      setup: {
        id: 'setup',
        title: '로컬 RAG 검색 품질을 떨어뜨리는 설정 함정',
        content: [
          '<strong>작업 접두사를 사용하세요.</strong> Nomic의 모델 카드는 입력에 작업 지시 접두사를 포함해야 한다고 설명합니다: 인덱싱할 청크에는 search_document:, 사용자 질문에는 search_query:. 빼먹으면 검색 품질이 떨어질 수 있습니다.',
          '<strong>num_ctx는 의도적으로 높이세요.</strong> 아래 요청은 8,192토큰 전체 창으로 청크를 임베딩합니다. 컨텍스트가 클수록 메모리를 더 쓰므로 청크에 필요한 만큼만 높이세요.',
          '<strong>한 인덱스에 모델을 섞지 마세요.</strong> 서로 다른 임베딩 모델의 벡터는 비교할 수 없으므로, nomic-embed-text에서 BGE-M3로 바꾸면 모든 청크를 다시 임베딩해야 합니다.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '임베딩 모델을 로컬에서 실행하려면 GPU가 필요한가요?',
            a: '아니요 — 임베딩 모델은 채팅 LLM보다 훨씬 작아 CPU에서도 적당한 속도로 실행됩니다. GPU는 대규모 문서 컬렉션의 일괄 인덱싱을 빠르게 하지만 일반적인 RAG 작업에 필수는 아닙니다.',
          },
          {
            q: '임베딩과 채팅에 같은 모델을 쓸 수 있나요?',
            a: '아니요 — 임베딩 모델과 채팅 모델은 목적과 아키텍처가 다릅니다. 전용 임베딩 모델(nomic-embed-text 등)을 채팅 모델(Qwen3, Llama 등)을 대체하는 것이 아니라 함께 실행하세요.',
          },
          {
            q: 'nomic-embed-text가 mxbai-embed-large보다 나은가요?',
            a: '대부분의 로컬 RAG 구성에서 nomic-embed-text가 합리적인 기본값입니다. 더 작고(274 MB 대 670 MB) 더 긴 청크를 다루는 반면, Ollama는 mxbai-embed-large에 512토큰 창만 표시합니다. 본인 문서에서의 검색 품질은 다를 수 있으니 결정 전에 실제 질의로 둘 다 테스트하세요.',
          },
          {
            q: 'nomic-embed-text는 Ollama에서 정말 8,192토큰을 지원하나요?',
            a: '모델은 네이티브로 8,192토큰을 지원하지만 Ollama 라이브러리 페이지에는 2K 창이 표시됩니다. 더 긴 청크를 임베딩하려면 요청 옵션에서 num_ctx(최대 8,192)를 지정하세요.',
          },
          {
            q: 'nomic-embed-text로 RAG를 할 때 청크 크기는 어떻게 정하나요?',
            a: '긴 컨텍스트 덕분에 여유가 있지만, 수백 토큰의 짧은 청크가 대체로 매우 긴 청크보다 더 정밀하게 검색됩니다. 너무 넓은 청크는 임베딩의 특이성을 희석하기 때문입니다. 청크당 300–500토큰 정도로 시작해 검색 품질에 따라 조정하세요. mxbai-embed-large는 512토큰 창 아래로 유지하세요.',
          },
          {
            q: 'BGE-M3는 nomic-embed-text보다 느린가요?',
            a: 'BGE-M3는 더 크므로(5억 6,700만 파라미터, 1.2 GB) nomic-embed-text보다 추론과 인덱싱이 다소 느립니다 — 신뢰할 수 있는 다국어 검색이 필요하다면 합리적인 절충입니다.',
          },
          {
            q: '대신 EmbeddingGemma나 Qwen3-Embedding을 써야 하나요?',
            a: 'Ollama의 최신 옵션입니다(EmbeddingGemma는 622 MB에 100개 이상 언어, Qwen3-Embedding 0.6B는 639 MB에 32K 창). 여기서는 nomic-embed-text와 벤치마크 비교를 하지 않았으므로, 바꾸기 전에 본인 문서로 테스트하세요.',
          },
          {
            q: '나중에 임베딩 모델을 바꿀 수 있나요?',
            a: '네, 하지만 서로 다른 모델의 벡터는 비교할 수 없으므로 전체 문서 컬렉션을 다시 임베딩해야 합니다. 큰 코퍼스를 인덱싱하기 전에 모델을 정하세요.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[문서 요약을 위한 최적의 로컬 LLM](/ko/prompt-bites/best-local-llm-document-summarization) — 검색과 긴 컨텍스트 채팅 모델 결합하기',
          '[로컬 LLM에는 얼마나 많은 VRAM이 필요한가?](/ko/prompt-bites/how-much-vram-for-local-llm) — 전체 RAG 파이프라인을 위한 하드웨어 산정',
          '[실시간 채팅을 위한 최적의 8B 이하 모델](/ko/prompt-bites/best-local-llm-under-8b-realtime-chat) — 검색과 짝지을 빠른 채팅 모델',
          '[로컬 RAG를 위한 최고의 임베딩 모델(전체 비교)](/ko/power-local-llm/best-embedding-models-local-rag-2026) — 정확도, 속도, 다국어 지원에 대한 전체 벤치마크',
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-pt.webp',
    title: 'Qual o melhor modelo de embedding para RAG local: nomic, mxbai ou BGE-M3?',
    seoTitle: 'Melhor modelo de embedding local para RAG 2026: nomic vs mxbai',
    metaDescription: 'nomic-embed-text é a melhor escolha padrão para RAG local com Ollama; mxbai-embed-large tem 512 tokens, BGE-M3 vence em multilíngue. Especificações comparadas.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores construindo um pipeline de RAG local e escolhendo um modelo de embedding',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>nomic-embed-text é o melhor modelo de embedding padrão para RAG local com Ollama</strong> — download de 274 MB, vetores de 768 dimensões e contexto nativo de 8.192 tokens (o Ollama mostra 2K por padrão, então aumente num_ctx para chunks maiores). Escolha o BGE-M3 para documentos multilíngues e o mxbai-embed-large apenas se seus chunks ficarem abaixo da janela de 512 tokens.',
    toc: [
      { label: 'Melhor escolha: nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: 'Modelos de embedding comparados', anchor: '#comparison' },
      { label: 'Armadilhas de configuração', anchor: '#setup' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Leitura relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor modelo de embedding para RAG local?',
        answer: 'nomic-embed-text é o melhor modelo de embedding padrão para RAG local com Ollama: pequeno (274 MB), 768 dimensões, contexto nativo de 8.192 tokens. O BGE-M3 é melhor para coleções multilíngues; o mxbai-embed-large serve para chunks curtos em inglês.',
        bullets: [
          'nomic-embed-text: 274 MB, 768 dimensões, contexto nativo de 8.192 tokens — a janela padrão do Ollama é 2K, então aumente num_ctx para chunks longos. Use os prefixos search_document: / search_query:.',
          'BGE-M3: 1,2 GB, contexto de 8K, feito para recuperação multilíngue — a escolha certa se seus documentos abrangem vários idiomas.',
          'mxbai-embed-large: 670 MB, 1.024 dimensões, mas só uma janela de 512 tokens — uma boa alternativa em inglês quando os chunks são curtos.',
          'all-minilm: 46 MB e 384 dimensões — apenas para protótipos ou CPUs muito limitadas. EmbeddingGemma e Qwen3-Embedding são opções mais novas que valem o teste.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor padrão: nomic-embed-text — 274 MB, 768 dimensões, contexto nativo de 8.192 tokens (aumente num_ctx no Ollama)',
          'Melhor escolha multilíngue: BGE-M3 — 1,2 GB, contexto de 8K, feito para recuperação em muitos idiomas',
          'Alternativa: mxbai-embed-large — focado em inglês, mas o Ollama lista só uma janela de 512 tokens; mantenha os chunks curtos',
          'all-minilm é minúsculo (46 MB), mas mais antigo e em geral mais fraco — use em protótipos, não em RAG sério',
          'Use um único modelo de embedding por índice: trocar de modelo exige recalcular os embeddings de todos os chunks',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor escolha: nomic-embed-text',
        content: [
          '<strong>nomic-embed-text é o melhor modelo de embedding padrão para RAG local porque combina um download pequeno de 274 MB com contexto nativo de 8.192 tokens e vetores de 768 dimensões, e roda pela API de embeddings do Ollama após um único pull.</strong> A ficha do modelo da Nomic documenta o comprimento de sequência de 8.192 tokens e a licença Apache-2.0. Modelos de embedding mais antigos costumam parar em cerca de 512 tokens, o que exige um chunking mais agressivo.',
          'Um porém: a página da biblioteca do Ollama lista uma janela de contexto de 2K para o nomic-embed-text. Para incorporar chunks maiores, passe um num_ctx maior (até 8.192) nas opções da requisição, como mostra a seção de configuração abaixo.',
          'Se seus documentos abrangem vários idiomas, o BGE-M3 é a melhor escolha. É um modelo de 567M de parâmetros projetado para recuperação multilíngue, enquanto o nomic-embed-text é otimizado principalmente para inglês e mais fraco em texto de outros idiomas.',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'Como o nomic-embed-text se compara ao mxbai-embed-large, BGE-M3 e all-MiniLM',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large:</strong> o mxbai-embed-large tem 335M de parâmetros, 670 MB e vetores de 1.024 dimensões, mas o Ollama lista só uma janela de 512 tokens. Com chunks de 300–500 tokens, ambos funcionam; para chunks maiores, o nomic-embed-text evita o truncamento, e seus vetores de 768 dimensões ocupam cerca de um quarto menos de espaço no índice. As pontuações de recuperação publicadas dependem do benchmark e do conjunto de dados, e não rodamos um benchmark próprio aqui — teste os dois em uma amostra dos seus próprios documentos.',
          '<strong>all-MiniLM vs nomic-embed-text:</strong> o all-minilm (22M e 33M de parâmetros, 46–67 MB, 384 dimensões) é a opção menor e mais rápida da biblioteca do Ollama, que lista uma janela de 512 tokens. É um modelo mais antigo e bem menor, que em geral recupera com menos precisão; trate-o como opção para protótipos ou hardware modesto, não como padrão.',
          '<strong>BGE-M3 vs nomic-embed-text:</strong> o BGE-M3 (567M de parâmetros, 1,2 GB, contexto de 8K) é o especialista multilíngue. É maior e mais lento para indexar; se seu corpus é só em inglês, o nomic-embed-text é a opção mais leve, e se mistura idiomas, o BGE-M3 compensa o peso extra.',
          '<strong>Opções mais novas:</strong> EmbeddingGemma (300M de parâmetros, 622 MB, contexto de 2K, treinado em mais de 100 idiomas) e Qwen3-Embedding (versão 0.6B: 639 MB, contexto de 32K) estão disponíveis no Ollama e merecem um teste lado a lado com seus dados.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos de embedding comparados',
        content: [
          'O tamanho do download e a janela de contexto vêm da página de cada modelo no Ollama; o tamanho do vetor vem das fichas dos modelos. O nomic-embed-text suporta 8.192 tokens nativamente, embora o Ollama mostre 2K por padrão.',
          'Evite o all-minilm para RAG sério: é rápido e leve, mas em geral menos preciso que os modelos maiores da tabela. Todos rodam pela API de embeddings do Ollama com o mesmo fluxo de download e chamada.',
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Contexto (Ollama)', 'Tamanho do vetor', 'Indicado para'],
        rows: [
          { 'Modelo': 'nomic-embed-text', 'Tag do Ollama': 'nomic-embed-text', 'Download': '274 MB', 'Contexto (Ollama)': '2K (8.192 nativo)', 'Tamanho do vetor': '768', 'Indicado para': 'Padrão para RAG em inglês' },
          { 'Modelo': 'mxbai-embed-large', 'Tag do Ollama': 'mxbai-embed-large', 'Download': '670 MB', 'Contexto (Ollama)': '512', 'Tamanho do vetor': '1.024', 'Indicado para': 'Chunks curtos em inglês' },
          { 'Modelo': 'BGE-M3', 'Tag do Ollama': 'bge-m3', 'Download': '1,2 GB', 'Contexto (Ollama)': '8K', 'Tamanho do vetor': '1.024', 'Indicado para': 'Documentos multilíngues' },
          { 'Modelo': 'all-minilm', 'Tag do Ollama': 'all-minilm', 'Download': '46 MB (22M)', 'Contexto (Ollama)': '512', 'Tamanho do vetor': '384', 'Indicado para': 'Protótipos, CPUs modestas' },
          { 'Modelo': 'EmbeddingGemma', 'Tag do Ollama': 'embeddinggemma', 'Download': '622 MB', 'Contexto (Ollama)': '2K', 'Tamanho do vetor': '768', 'Indicado para': 'Modelo multilíngue pequeno' },
          { 'Modelo': 'Qwen3-Embedding 0.6B', 'Tag do Ollama': 'qwen3-embedding:0.6b', 'Download': '639 MB', 'Contexto (Ollama)': '32K', 'Tamanho do vetor': '1.024', 'Indicado para': 'Chunks muito longos' },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Armadilhas de configuração que prejudicam a recuperação em RAG local',
        content: [
          '<strong>Use os prefixos de tarefa.</strong> A ficha do modelo da Nomic diz que a entrada deve incluir um prefixo de tarefa: search_document: para os chunks indexados e search_query: para a pergunta do usuário. Omiti-los pode reduzir a qualidade da recuperação.',
          '<strong>Aumente o num_ctx de forma deliberada.</strong> A requisição abaixo incorpora um chunk com a janela completa de 8.192 tokens. Aumente só o quanto seus chunks precisarem, pois um contexto maior usa mais memória.',
          '<strong>Nunca misture modelos em um índice.</strong> Vetores de modelos de embedding diferentes não são comparáveis; trocar o nomic-embed-text pelo BGE-M3 exige recalcular todos os chunks.',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Preciso de uma GPU para rodar um modelo de embedding localmente?',
            a: 'Não — modelos de embedding são muito menores que LLMs de chat e rodam em velocidade razoável na CPU. Uma GPU acelera a indexação em massa de grandes coleções de documentos, mas não é necessária para cargas típicas de RAG.',
          },
          {
            q: 'Posso usar o mesmo modelo para embeddings e chat?',
            a: 'Não — modelos de embedding e de chat têm funções diferentes e usam arquiteturas diferentes. Rode um modelo de embedding dedicado (como o nomic-embed-text) junto com seu modelo de chat (como Qwen3 ou Llama), não no lugar dele.',
          },
          {
            q: 'O nomic-embed-text é melhor que o mxbai-embed-large?',
            a: 'Para a maioria das configurações de RAG local, o nomic-embed-text é um padrão razoável: é menor (274 MB contra 670 MB) e lida com chunks maiores, enquanto o Ollama lista só uma janela de 512 tokens para o mxbai-embed-large. A qualidade de recuperação nos seus próprios documentos pode variar; teste os dois com consultas reais antes de decidir.',
          },
          {
            q: 'O nomic-embed-text realmente suporta 8.192 tokens no Ollama?',
            a: 'O modelo suporta 8.192 tokens nativamente, mas a página do Ollama lista uma janela de 2K. Passe num_ctx (até 8.192) nas opções da requisição para incorporar chunks maiores.',
          },
          {
            q: 'Como escolher o tamanho do chunk para RAG com o nomic-embed-text?',
            a: 'O contexto longo dá flexibilidade, mas chunks mais curtos (algumas centenas de tokens) ainda recuperam em geral com mais precisão que chunks muito longos, pois chunks amplos demais diluem a especificidade do embedding. Comece com cerca de 300–500 tokens por chunk e ajuste conforme a qualidade da recuperação. Com o mxbai-embed-large, fique abaixo da janela de 512 tokens.',
          },
          {
            q: 'O BGE-M3 é mais lento que o nomic-embed-text?',
            a: 'O BGE-M3 é maior (567M de parâmetros, 1,2 GB), então espere inferência e indexação um pouco mais lentas que com o nomic-embed-text — uma troca razoável se você precisa de recuperação multilíngue confiável.',
          },
          {
            q: 'Devo usar EmbeddingGemma ou Qwen3-Embedding em vez disso?',
            a: 'São opções mais novas no Ollama (EmbeddingGemma com 622 MB e mais de 100 idiomas, Qwen3-Embedding 0.6B com 639 MB e janela de 32K). Não as comparamos com o nomic-embed-text aqui, então teste-as nos seus próprios documentos antes de trocar.',
          },
          {
            q: 'Posso trocar de modelo de embedding depois?',
            a: 'Sim, mas será preciso recalcular os embeddings de toda a coleção, porque vetores de modelos diferentes não são comparáveis. Defina o modelo antes de indexar um corpus grande.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor LLM Local para Resumo de Documentos](/prompt-bites/best-local-llm-document-summarization) — combinando recuperação com um modelo de chat de contexto longo',
          '[Quanta VRAM Você Precisa para um LLM Local?](/prompt-bites/how-much-vram-for-local-llm) — dimensionando hardware para um pipeline de RAG completo',
          '[Melhor Modelo Sub-8B para Chat em Tempo Real](/prompt-bites/best-local-llm-under-8b-realtime-chat) — um modelo de chat rápido para combinar com a recuperação',
          '[Melhores modelos de embedding para RAG local (comparação completa)](/power-local-llm/best-embedding-models-local-rag-2026) — o benchmark completo de precisão, velocidade e suporte multilíngue',
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    heroImage: '/images/best-embedding-model-local-rag-overview-hero-zh.webp',
    title: '本地 RAG 的最佳嵌入模型：nomic、mxbai 还是 BGE-M3？',
    seoTitle: '2026 年本地 RAG 嵌入模型推荐：nomic vs mxbai',
    metaDescription: '在 Ollama 上做本地 RAG，默认首选 nomic-embed-text；mxbai-embed-large 仅 512 token，多语言选 BGE-M3。体积、上下文与维度对比。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['nomic-embed-text', 'BGE-M3', 'mxbai-embed-large', 'all-minilm', 'EmbeddingGemma', 'Qwen3-Embedding'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '构建本地 RAG 流程并选择嵌入模型的开发者',
    siblingBites: ['best-local-llm-document-summarization', 'how-much-vram-for-local-llm'],
    is_living_page: false,
    leadAnswerBlock: '<strong>在 Ollama 上做本地 RAG，nomic-embed-text 是最佳的默认嵌入模型</strong>——下载仅 274 MB，向量 768 维，原生上下文 8,192 token（Ollama 默认显示 2K，处理更长文本块请调高 num_ctx）。多语言文档选 BGE-M3；只有当文本块不超过 512 token 窗口时才考虑 mxbai-embed-large。',
    toc: [
      { label: '最佳选择：nomic-embed-text', anchor: '#best-pick' },
      { label: 'nomic vs mxbai vs BGE-M3 vs all-MiniLM', anchor: '#head-to-head' },
      { label: '嵌入模型对比', anchor: '#comparison' },
      { label: '配置常见陷阱', anchor: '#setup' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '本地 RAG 的最佳嵌入模型是什么？',
        answer: '在 Ollama 上做本地 RAG，nomic-embed-text 是最佳默认选择：体积小（274 MB）、768 维、原生 8,192 token 上下文。多语言文档集选 BGE-M3；mxbai-embed-large 适合较短的英文文本块。',
        bullets: [
          'nomic-embed-text：274 MB，768 维，原生 8,192 token 上下文——Ollama 默认窗口为 2K，长文本块请调高 num_ctx。请加上 search_document: / search_query: 前缀。',
          'BGE-M3：1.2 GB，8K 上下文，专为多语言检索打造——文档涉及多种语言时的正确选择。',
          'mxbai-embed-large：670 MB，1,024 维，但窗口只有 512 token——文本块较短时是不错的英文替代方案。',
          'all-minilm：46 MB、384 维——仅适合原型或算力极弱的 CPU。EmbeddingGemma 与 Qwen3-Embedding 是值得测试的较新选项。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '最佳默认选择：nomic-embed-text——274 MB、768 维、原生 8,192 token 上下文（在 Ollama 中调高 num_ctx 即可使用）',
          '最佳多语言选择：BGE-M3——1.2 GB、8K 上下文，专为多种语言的检索设计',
          '备选：mxbai-embed-large——侧重英文，但 Ollama 仅列出 512 token 窗口，文本块需保持较短',
          'all-minilm 极小（46 MB），但较旧且整体较弱——适合原型，不适合严肃的 RAG',
          '一个索引只用一个嵌入模型：换模型意味着要对所有文本块重新嵌入',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：nomic-embed-text',
        content: [
          '<strong>nomic-embed-text 是本地 RAG 的最佳默认嵌入模型，因为它以仅 274 MB 的下载量提供原生 8,192 token 上下文和 768 维向量，一次 pull 即可通过 Ollama 的嵌入 API 使用。</strong>Nomic 的模型卡记载了 8,192 token 的序列长度和 Apache-2.0 许可证。较早的嵌入模型通常上限只有 512 token 左右，迫使你更激进地切分文本。',
          '需要注意：Ollama 的模型库页面为 nomic-embed-text 列出的上下文窗口是 2K。若要嵌入更长的文本块，请在请求选项中传入更大的 num_ctx（最高 8,192），见下方配置部分的示例。',
          '如果文档涉及多种语言，BGE-M3 是更好的选择。它是为多语言检索设计的 5.67 亿参数模型，而 nomic-embed-text 主要针对英文优化，处理非英文文本时较弱。',
        ],
      },
      headToHead: {
        id: 'head-to-head',
        title: 'nomic-embed-text 与 mxbai-embed-large、BGE-M3 和 all-MiniLM 的对比',
        content: [
          '<strong>nomic-embed-text vs mxbai-embed-large：</strong>mxbai-embed-large 为 3.35 亿参数、670 MB、1,024 维向量，但 Ollama 仅列出 512 token 的窗口。文本块在 300–500 token 时两者都能用；更长时 nomic-embed-text 能避免截断，且其 768 维向量所需索引存储约少四分之一。两者已公布的检索得分取决于基准和数据集，我们在此未做自己的基准测试——请用自己的文档样本对两者进行测试。',
          '<strong>all-MiniLM vs nomic-embed-text：</strong>all-minilm（2,200 万和 3,300 万参数，46–67 MB，384 维）是 Ollama 库中最小最快的选项，Ollama 列出的窗口为 512 token。它是更旧、小得多的模型，检索精度整体较低，应视为原型或低功耗场景的选择，而非默认。',
          '<strong>BGE-M3 vs nomic-embed-text：</strong>BGE-M3（5.67 亿参数，1.2 GB，8K 上下文）是多语言专家。它更大，建立索引也更慢；如果语料只有英文，nomic-embed-text 更轻量，若混合多种语言，BGE-M3 的额外体积是值得的。',
          '<strong>较新的选项：</strong>EmbeddingGemma（3 亿参数，622 MB，2K 上下文，基于 100 多种语言训练）和 Qwen3-Embedding（0.6B 版本：639 MB，32K 上下文）可在 Ollama 使用，值得用你的数据做并排测试。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '嵌入模型对比',
        content: [
          '下载大小和上下文窗口来自各模型的 Ollama 库页面，向量维度来自模型卡。尽管 Ollama 默认显示 2K，nomic-embed-text 原生支持 8,192 token。',
          '严肃的 RAG 应避免使用 all-minilm——它快速轻量，但整体精度低于表中较大的模型。它们都通过 Ollama 的嵌入 API 运行，流程相同：先 pull 再调用。',
        ],
        columns: ['模型', 'Ollama 标签', '下载大小', '上下文（Ollama）', '向量维度', '适用场景'],
        rows: [
          { '模型': 'nomic-embed-text', 'Ollama 标签': 'nomic-embed-text', '下载大小': '274 MB', '上下文（Ollama）': '2K（原生 8,192）', '向量维度': '768', '适用场景': '英文 RAG 默认选择' },
          { '模型': 'mxbai-embed-large', 'Ollama 标签': 'mxbai-embed-large', '下载大小': '670 MB', '上下文（Ollama）': '512', '向量维度': '1,024', '适用场景': '较短的英文文本块' },
          { '模型': 'BGE-M3', 'Ollama 标签': 'bge-m3', '下载大小': '1.2 GB', '上下文（Ollama）': '8K', '向量维度': '1,024', '适用场景': '多语言文档' },
          { '模型': 'all-minilm', 'Ollama 标签': 'all-minilm', '下载大小': '46 MB（22M）', '上下文（Ollama）': '512', '向量维度': '384', '适用场景': '原型、低算力 CPU' },
          { '模型': 'EmbeddingGemma', 'Ollama 标签': 'embeddinggemma', '下载大小': '622 MB', '上下文（Ollama）': '2K', '向量维度': '768', '适用场景': '小型多语言模型' },
          { '模型': 'Qwen3-Embedding 0.6B', 'Ollama 标签': 'qwen3-embedding:0.6b', '下载大小': '639 MB', '上下文（Ollama）': '32K', '向量维度': '1,024', '适用场景': '超长文本块' },
        ],
      },
      setup: {
        id: 'setup',
        title: '会降低本地 RAG 检索质量的配置陷阱',
        content: [
          '<strong>使用任务前缀。</strong>Nomic 的模型卡指出，输入必须包含任务指令前缀：索引的文本块用 search_document:，用户问题用 search_query:。省略它们可能降低检索质量。',
          '<strong>有意识地调高 num_ctx。</strong>下面的请求使用完整的 8,192 token 窗口嵌入一个文本块。只按文本块所需调高即可，因为更大的上下文会占用更多内存。',
          '<strong>不要在同一索引中混用模型。</strong>不同嵌入模型的向量不可比较，因此从 nomic-embed-text 切换到 BGE-M3 意味着要重新嵌入所有文本块。',
        ],
        codeBlock: 'curl http://localhost:11434/api/embed -d \'{\n  "model": "nomic-embed-text",\n  "input": "search_document: Your chunk text here",\n  "options": { "num_ctx": 8192 }\n}\'',
        codeLanguage: 'bash',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '在本地运行嵌入模型需要 GPU 吗？',
            a: '不需要——嵌入模型比聊天 LLM 小得多，在 CPU 上也能以合理速度运行。GPU 可加快大批文档的索引，但对典型 RAG 工作负载并非必需。',
          },
          {
            q: '嵌入和聊天可以用同一个模型吗？',
            a: '不能——嵌入模型和聊天模型用途不同、架构也不同。请在聊天模型（如 Qwen3 或 Llama）之外，另行运行专用的嵌入模型（如 nomic-embed-text），而不是用它替代。',
          },
          {
            q: 'nomic-embed-text 比 mxbai-embed-large 更好吗？',
            a: '对大多数本地 RAG 配置而言，nomic-embed-text 是合理的默认选择：它更小（274 MB 对 670 MB），能处理更长的文本块，而 Ollama 仅为 mxbai-embed-large 列出 512 token 的窗口。在你自己的文档上，检索质量可能不同，因此在定案前请用真实查询测试两者。',
          },
          {
            q: 'nomic-embed-text 在 Ollama 中真的支持 8,192 token 吗？',
            a: '模型本身原生支持 8,192 token，但 Ollama 的库页面列出的是 2K 窗口。请在请求选项中传入 num_ctx（最高 8,192）来嵌入更长的文本块。',
          },
          {
            q: '用 nomic-embed-text 做 RAG 时如何选择文本块大小？',
            a: '它的长上下文给了你灵活度，但较短的文本块（几百 token）通常比很长的文本块检索更精准，因为过宽的文本块会稀释嵌入的特异性。可从每块约 300–500 token 开始，根据检索质量调整。使用 mxbai-embed-large 时，请保持在 512 token 窗口以内。',
          },
          {
            q: 'BGE-M3 比 nomic-embed-text 慢吗？',
            a: 'BGE-M3 更大（5.67 亿参数，1.2 GB），所以推理和索引速度会比 nomic-embed-text 略慢——如果你需要可靠的多语言检索，这是合理的取舍。',
          },
          {
            q: '我应该改用 EmbeddingGemma 或 Qwen3-Embedding 吗？',
            a: '它们是 Ollama 上较新的选项（EmbeddingGemma 622 MB、支持 100 多种语言；Qwen3-Embedding 0.6B 为 639 MB、32K 窗口）。我们在此没有将它们与 nomic-embed-text 做基准对比，因此切换前请用自己的文档测试。',
          },
          {
            q: '以后可以更换嵌入模型吗？',
            a: '可以，但必须对整个文档集合重新嵌入，因为不同模型的向量不可比较。请在索引大型语料之前先确定模型。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[文档摘要的最佳本地 LLM](/prompt-bites/best-local-llm-document-summarization) — 将检索与长上下文聊天模型配对',
          '[本地 LLM 需要多少显存？](/prompt-bites/how-much-vram-for-local-llm) — 为完整 RAG 流程规划硬件规模',
          '[实时聊天的最佳 8B 以下模型](/prompt-bites/best-local-llm-under-8b-realtime-chat) — 与检索配对的快速聊天模型',
          '[本地RAG最佳嵌入模型（完整对比）](/power-local-llm/best-embedding-models-local-rag-2026) — 准确性、速度和多语言支持的完整基准测试',
        ],
      },
    },
  },
}
