import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-en.webp',
    title: 'Best 8B-Class Local LLM for Real-Time Chat?',
    seoTitle: 'Best 8B Local LLM for Real-Time Chat 2026',
    metaDescription: 'Qwen 3.5 9B is the best 8B-class local LLM for real-time chat, Qwen 3.5 4B the faster pick. Ollama sizes compared with Gemma 4 and Llama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Developers building a low-latency local chat feature on modest hardware',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B is the best 8B-class local model for real-time chat</strong> — it has strong vendor-reported benchmark scores and downloads at 6.6–7.6 GB on Ollama. Qwen 3.5 has no 8B size; the 9B is its closest step. Turn thinking off for chat: it is on by default and delays the first visible token. Qwen 3.5 4B (3.3–4.0 GB) is the faster pick for CPU-only or entry-level GPU machines.',
    toc: [
      { label: 'Best Pick: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'Faster Pick: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: '8B-Class Models Compared', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'What is the best 8B model for real-time chat?',
        answer: 'Qwen 3.5 9B is the best 8B-class model for real-time chat in this comparison, run with thinking turned off. Qwen 3.5 4B is the faster pick; Gemma 4 E4B and Llama 3.1 8B are the alternatives.',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0, 256K context, 6.6–7.6 GB on Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: 3.3–4.0 GB — the pick when latency or memory matters more than peak quality.',
          'Llama 3.1 8B is the smallest 8B download at 4.9 GB; Gemma 4 12B (7.7–8.0 GB) is the step up if you have the memory.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Best 8B-class pick: Qwen 3.5 9B — Apache 2.0, 256K context, 6.6–7.6 GB on Ollama; there is no Qwen 3.5 8B',
          'Faster pick: Qwen 3.5 4B at 3.3–4.0 GB for CPU-only or entry-level GPU setups',
          'Alternatives: Gemma 4 E4B and 12B, Llama 3.1 8B (4.9 GB) and the previous-generation Qwen3 8B',
          'Turn thinking off for chat — Qwen 3.5 reasons before answering by default, which delays the first visible token',
          'We did not benchmark tokens per second: latency depends on your hardware, so measure time to first token on your own machine',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Best Pick: Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B is the best 8B-class model for real-time chat because it pairs strong vendor-reported benchmark scores with a download that fits in roughly 8 GB of memory.</strong> Alibaba\'s model card reports MMLU-Pro 82.5, GPQA Diamond 81.7 and IFEval 91.5 (vendor-reported, measured in thinking mode). It is released under Apache 2.0, accepts text and images, and supports a 256K-token context window.',
          'Qwen 3.5 reasons before it answers by default. For a chat widget, a voice-assistant backend or live autocomplete, that delay is the main latency cost, so disable thinking through your runtime\'s thinking setting (the model card documents the parameter enable_thinking set to False). Start it with ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'Faster Pick: Qwen 3.5 4B',
        content: [
          '<strong>Qwen 3.5 4B is the faster pick for real-time chat when memory or latency matters more than peak quality.</strong> It downloads at 3.3–4.0 GB on Ollama (ollama run qwen3.5:4b), keeps the 256K context window and image input, and fits machines where the 9B would leave little room for the context cache.',
          'Gemma 4 E4B is the alternative in this size class, with audio input and a 128K context window. Its Ollama download is 6.6–9.5 GB, larger than the "4B" name suggests, so check the exact tag size before choosing it for a small machine.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B-Class Models Compared',
        content: [
          'The table lists Ollama\'s published download size and context window for each tag. Size ranges are the low and high end Ollama shows for the tag; the page does not state which quantization sits behind each end.',
          'Qwen 3.6 is not in the table: on Ollama it exists only as 27B and 35B models, so Qwen 3.5 remains the newest Qwen generation in this size class.',
          'Llama 3.1 8B (4.9 GB, 128K context) is the smallest 8B download and the established baseline, but it is the oldest model in the table and predates the Qwen 3.5 and Gemma 4 generations. Qwen3 8B (5.2 GB, 40K context) is the previous-generation 8B and remains a fit when the 9B is too large.',
          'Gemma 4 12B (7.7–8.0 GB, Apache 2.0) is the step up for machines with memory to spare. Its published MMLU Pro is 77.2 against 82.5 for Qwen 3.5 9B, but the two vendors\' scores use different test settings and are not directly comparable. We did not run latency tests, so treat the ranking as a benchmark-and-size-based pick, not a speed measurement.',
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Context'],
        rows: [
          { 'Model': 'Qwen 3.5 9B', 'Ollama tag': 'qwen3.5:9b', 'Download': '6.6–7.6 GB', 'Context': '256K' },
          { 'Model': 'Qwen 3.5 4B', 'Ollama tag': 'qwen3.5:4b', 'Download': '3.3–4.0 GB', 'Context': '256K' },
          { 'Model': 'Gemma 4 E4B', 'Ollama tag': 'gemma4:e4b', 'Download': '6.6–9.5 GB', 'Context': '128K' },
          { 'Model': 'Gemma 4 12B', 'Ollama tag': 'gemma4:12b', 'Download': '7.7–8.0 GB', 'Context': '256K' },
          { 'Model': 'Llama 3.1 8B', 'Ollama tag': 'llama3.1:8b', 'Download': '4.9 GB', 'Context': '128K' },
          { 'Model': 'Qwen3 8B', 'Ollama tag': 'qwen3:8b', 'Download': '5.2 GB', 'Context': '40K' },
          { 'Model': 'Qwen3 4B', 'Ollama tag': 'qwen3:4b', 'Download': '2.5 GB', 'Context': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is the best 8B model for local chat?',
            a: 'Qwen 3.5 9B is the best 8B-class model for local chat in this comparison, run with thinking turned off. Qwen 3.5 has no 8B size, so the 9B is the closest; Qwen3 8B and Llama 3.1 8B are the true 8B alternatives.',
          },
          {
            q: 'Is there a Qwen 3.5 8B?',
            a: 'No. Ollama lists Qwen 3.5 in 0.8B, 2B, 4B, 9B, 27B, 35B and 122B sizes. The previous generation, Qwen3, has the 8B (qwen3:8b, 5.2 GB).',
          },
          {
            q: 'What is the smartest 8B model?',
            a: 'On published vendor benchmarks, Qwen 3.5 9B scores higher than Gemma 4 12B (MMLU-Pro 82.5, GPQA Diamond 81.7). Gemma 4 12B reports MMLU Pro 77.2 and GPQA Diamond 78.8. These numbers come from different vendors and test settings, so use them as a guide, not as proof of a ranking.',
          },
          {
            q: 'Which model is the fastest for real-time chat?',
            a: 'On the same hardware, the smallest downloads are usually the fastest: Qwen3 4B (2.5 GB) and Qwen 3.5 4B (3.3–4.0 GB). Speed depends on your hardware and runtime, and we did not benchmark tokens per second, so measure time to first token on your own machine.',
          },
          {
            q: 'Why turn thinking off for real-time chat?',
            a: 'Qwen 3.5 models produce reasoning text before the final answer by default. That helps on hard problems but delays the first visible answer token, which is the delay users notice in chat. Disable thinking for simple conversation and keep it for tasks that need step-by-step reasoning.',
          },
          {
            q: 'Do I need a GPU for real-time chat with these models?',
            a: 'Not strictly. The 4B-class models are small enough to try on a modern CPU, but speed varies widely by hardware. The 9B and 12B models need roughly 7–8 GB of memory for the weights alone, so a GPU, or Apple Silicon with enough unified memory, gives a smoother chat experience.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Local LLM for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — hardware sizing for this model tier',
          '[Best Embedding Model for Local RAG](/prompt-bites/best-embedding-model-local-rag) — pairing a small chat model with retrieval',
          '[What Hardware Do You Need to Fine-Tune a 7B Model Locally?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — customizing a small model further',
        ],
      },
    },
  },
  ar: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-ar.webp',
    title: 'ما أفضل نموذج محلي من فئة 8B للدردشة الفورية؟',
    seoTitle: 'أفضل نموذج LLM محلي 8B للدردشة الفورية 2026',
    metaDescription: 'نموذج Qwen 3.5 9B هو الأفضل من فئة 8B للدردشة الفورية، وQwen 3.5 4B الخيار الأسرع. مقارنة أحجام Ollama مع Gemma 4 وLlama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'المطورون الذين يبنون ميزة دردشة محلية منخفضة الكمون على عتاد متواضع',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نموذج Qwen 3.5 9B هو أفضل نموذج محلي من فئة 8B للدردشة الفورية</strong> — فله درجات اختبارات معيارية مرتفعة معلنة من الشركة، ويبلغ حجم تنزيله 6.6–7.6 GB على Ollama. لا يوجد حجم 8B في Qwen 3.5؛ والحجم 9B هو الأقرب. أوقف وضع thinking في الدردشة: فهو مفعّل افتراضيًا ويؤخر أول رمز مرئي. أما Qwen 3.5 4B (3.3–4.0 GB) فهو الخيار الأسرع للأجهزة التي تعتمد على CPU فقط أو على بطاقة GPU من الفئة المبتدئة.',
    toc: [
      { label: 'أفضل اختيار: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'الخيار الأسرع: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: 'مقارنة نماذج فئة 8B', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نموذج 8B للدردشة الفورية؟',
        answer: 'نموذج Qwen 3.5 9B هو أفضل نموذج من فئة 8B للدردشة الفورية في هذه المقارنة، مع إيقاف thinking. وQwen 3.5 4B هو الخيار الأسرع؛ أما Gemma 4 E4B وLlama 3.1 8B فهما البديلان.',
        bullets: [
          'Qwen 3.5 9B: ترخيص Apache 2.0، سياق 256K، وحجمه 6.6–7.6 GB على Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: ‏3.3–4.0 GB — الاختيار حين يكون الكمون أو الذاكرة أهم من أقصى جودة.',
          'نموذج Llama 3.1 8B هو أصغر تنزيل 8B بحجم 4.9 GB؛ وGemma 4 12B (7.7–8.0 GB) هو الخطوة التالية إن توفرت لديك الذاكرة.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'أفضل اختيار من فئة 8B: Qwen 3.5 9B — ترخيص Apache 2.0، سياق 256K، و6.6–7.6 GB على Ollama؛ ولا يوجد Qwen 3.5 8B',
          'الخيار الأسرع: Qwen 3.5 4B بحجم 3.3–4.0 GB للأجهزة المعتمدة على CPU فقط أو GPU من الفئة المبتدئة',
          'البدائل: Gemma 4 E4B و12B، وLlama 3.1 8B (4.9 GB)، وQwen3 8B من الجيل السابق',
          'أوقف thinking في الدردشة — يستدل Qwen 3.5 قبل الإجابة افتراضيًا، مما يؤخر أول رمز مرئي',
          'لم نقس عدد الرموز في الثانية: يعتمد الكمون على عتادك، لذا قِس الزمن حتى أول رمز على جهازك',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'أفضل اختيار: Qwen 3.5 9B',
        content: [
          '<strong>نموذج Qwen 3.5 9B هو أفضل نموذج من فئة 8B للدردشة الفورية لأنه يجمع بين درجات اختبارات معيارية مرتفعة معلنة من الشركة وحجم تنزيل يتسع في نحو 8 GB من الذاكرة.</strong> تذكر بطاقة النموذج من Alibaba النتائج MMLU-Pro 82.5 وGPQA Diamond 81.7 وIFEval 91.5 (أرقام معلنة من الشركة، مقاسة في وضع thinking). النموذج بترخيص Apache 2.0، ويقبل النص والصور، ويدعم نافذة سياق بحجم 256K رمز.',
          'يستدل Qwen 3.5 قبل أن يجيب افتراضيًا. وفي عنصر دردشة أو خلفية مساعد صوتي أو إكمال تلقائي مباشر، يكون هذا التأخير أكبر تكلفة في الكمون، لذا عطّل thinking من إعداد بيئة التشغيل لديك (توثّق بطاقة النموذج المعامل enable_thinking بقيمة False). ابدأ بالأمر ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'الخيار الأسرع: Qwen 3.5 4B',
        content: [
          '<strong>نموذج Qwen 3.5 4B هو الخيار الأسرع للدردشة الفورية حين تكون الذاكرة أو الكمون أهم من أقصى جودة.</strong> حجم تنزيله 3.3–4.0 GB على Ollama (ollama run qwen3.5:4b)، ويحتفظ بنافذة السياق 256K وإدخال الصور، ويناسب الأجهزة التي يترك فيها النموذج 9B مساحة قليلة لذاكرة السياق المؤقتة.',
          'نموذج Gemma 4 E4B هو البديل في هذه الفئة من الحجم، مع إدخال صوتي وسياق 128K. حجم تنزيله على Ollama هو 6.6–9.5 GB، أكبر مما يوحي به الاسم «4B»، فتحقق من حجم الوسم بدقة قبل اختياره لجهاز صغير.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'مقارنة نماذج فئة 8B',
        content: [
          'يعرض الجدول حجم التنزيل ونافذة السياق المنشورين في Ollama لكل وسم. نطاقات الحجم هي القيمة الدنيا والعليا التي يعرضها Ollama للوسم؛ ولا تذكر الصفحة أي تكميم يقابل كل طرف.',
          'لم نُدرج Qwen 3.6 في الجدول: فهو متاح على Ollama بحجمي 27B و35B فقط، لذا يظل Qwen 3.5 أحدث أجيال Qwen في هذه الفئة من الحجم.',
          'نموذج Llama 3.1 8B (‏4.9 GB، سياق 128K) هو أصغر تنزيل 8B والمرجع المعتمد، لكنه أقدم نموذج في الجدول وسابق لجيلي Qwen 3.5 وGemma 4. أما Qwen3 8B (‏5.2 GB، سياق 40K) فهو نموذج 8B من الجيل السابق ويظل مناسبًا حين يكون 9B كبيرًا جدًا.',
          'نموذج Gemma 4 12B (‏7.7–8.0 GB، ترخيص Apache 2.0) هو الخطوة التالية للأجهزة ذات الذاكرة الفائضة. نتيجة MMLU Pro المنشورة له هي 77.2 مقابل 82.5 لـ Qwen 3.5 9B، لكن الشركتين تستخدمان إعدادات اختبار مختلفة فلا تصح المقارنة المباشرة بين الدرجات. لم نجرِ اختبارات كمون، فالترتيب مبني على الاختبارات المعيارية والحجم لا على قياس السرعة.',
        ],
        columns: ['النموذج', 'وسم Ollama', 'التنزيل', 'السياق'],
        rows: [
          { 'النموذج': 'Qwen 3.5 9B', 'وسم Ollama': 'qwen3.5:9b', 'التنزيل': '6.6–7.6 GB', 'السياق': '256K' },
          { 'النموذج': 'Qwen 3.5 4B', 'وسم Ollama': 'qwen3.5:4b', 'التنزيل': '3.3–4.0 GB', 'السياق': '256K' },
          { 'النموذج': 'Gemma 4 E4B', 'وسم Ollama': 'gemma4:e4b', 'التنزيل': '6.6–9.5 GB', 'السياق': '128K' },
          { 'النموذج': 'Gemma 4 12B', 'وسم Ollama': 'gemma4:12b', 'التنزيل': '7.7–8.0 GB', 'السياق': '256K' },
          { 'النموذج': 'Llama 3.1 8B', 'وسم Ollama': 'llama3.1:8b', 'التنزيل': '4.9 GB', 'السياق': '128K' },
          { 'النموذج': 'Qwen3 8B', 'وسم Ollama': 'qwen3:8b', 'التنزيل': '5.2 GB', 'السياق': '40K' },
          { 'النموذج': 'Qwen3 4B', 'وسم Ollama': 'qwen3:4b', 'التنزيل': '2.5 GB', 'السياق': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما أفضل نموذج 8B للدردشة المحلية؟',
            a: 'نموذج Qwen 3.5 9B هو أفضل نموذج من فئة 8B للدردشة المحلية في هذه المقارنة، مع إيقاف thinking. لا يوجد حجم 8B في Qwen 3.5 والحجم 9B هو الأقرب؛ أما Qwen3 8B وLlama 3.1 8B فهما البديلان الحقيقيان بحجم 8B.',
          },
          {
            q: 'هل يوجد Qwen 3.5 8B؟',
            a: 'لا. يسرد Ollama نموذج Qwen 3.5 بالأحجام 0.8B و2B و4B و9B و27B و35B و122B. أما الجيل السابق Qwen3 ففيه نموذج 8B (‏qwen3:8b، حجمه 5.2 GB).',
          },
          {
            q: 'ما أذكى نموذج 8B؟',
            a: 'وفق الاختبارات المعيارية التي نشرتها الشركات، يحقق Qwen 3.5 9B درجات أعلى من Gemma 4 12B (MMLU-Pro 82.5 وGPQA Diamond 81.7). ويعلن Gemma 4 12B الدرجتين MMLU Pro 77.2 وGPQA Diamond 78.8. تأتي الأرقام من شركات وإعدادات اختبار مختلفة، فاستخدمها دليلًا إرشاديًا لا إثباتًا لترتيب.',
          },
          {
            q: 'أي نموذج هو الأسرع للدردشة الفورية؟',
            a: 'على العتاد نفسه تكون أصغر التنزيلات عادةً الأسرع: Qwen3 4B (‏2.5 GB) وQwen 3.5 4B (‏3.3–4.0 GB). تعتمد السرعة على العتاد وبيئة التشغيل، ولم نقس عدد الرموز في الثانية، لذا قِس الزمن حتى أول رمز على جهازك.',
          },
          {
            q: 'لماذا يُوقف thinking في الدردشة الفورية؟',
            a: 'تنتج نماذج Qwen 3.5 نص استدلال قبل الإجابة النهائية افتراضيًا. يفيد ذلك في المسائل الصعبة لكنه يؤخر أول رمز مرئي من الإجابة، وهو التأخير الذي يلاحظه المستخدمون في الدردشة. عطّل thinking في المحادثة البسيطة واحتفظ به للمهام التي تحتاج استدلالًا خطوة بخطوة.',
          },
          {
            q: 'هل أحتاج بطاقة GPU للدردشة الفورية مع هذه النماذج؟',
            a: 'ليس بالضرورة. نماذج فئة 4B صغيرة بما يكفي لتجربتها على معالج CPU حديث، لكن السرعة تتفاوت كثيرًا حسب العتاد. أما نموذجا 9B و12B فيحتاجان إلى نحو 7–8 GB من الذاكرة للأوزان وحدها، لذا تمنح بطاقة GPU أو Apple Silicon بذاكرة موحدة كافية دردشة أكثر سلاسة.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل LLM محلي لذاكرة VRAM سعة 6 GB](/prompt-bites/best-local-llm-6gb-vram) — تحديد حجم العتاد لهذه الفئة من النماذج',
          '[أفضل نموذج تضمين لـ RAG محلي](/prompt-bites/best-embedding-model-local-rag) — إقران نموذج دردشة صغير مع الاسترجاع',
          '[ما العتاد اللازم للضبط الدقيق لنموذج 7B محليًا؟](/prompt-bites/fine-tuning-7b-model-locally-hardware) — تخصيص نموذج صغير أكثر',
        ],
      },
    },
  },
  de: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-de.webp',
    title: 'Das beste lokale 8B-Modell für Echtzeit-Chat?',
    seoTitle: 'Bestes lokales 8B-LLM für Echtzeit-Chat 2026',
    metaDescription: 'Qwen 3.5 9B ist das beste lokale LLM der 8B-Klasse für Echtzeit-Chat, Qwen 3.5 4B die schnellere Wahl. Ollama-Größen im Vergleich mit Gemma 4 und Llama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Entwickler, die eine latenzarme lokale Chat-Funktion auf bescheidener Hardware bauen',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B ist das beste lokale Modell der 8B-Klasse für Echtzeit-Chat</strong> — es hat starke, vom Hersteller veröffentlichte Benchmark-Werte und ist bei Ollama 6,6–7,6 GB groß. Qwen 3.5 hat keine 8B-Größe; die 9B-Variante kommt ihr am nächsten. Schalten Sie für Chat das Thinking aus: Es ist standardmäßig aktiv und verzögert das erste sichtbare Token. Qwen 3.5 4B (3,3–4,0 GB) ist die schnellere Wahl für reine CPU-Rechner oder GPUs der Einstiegsklasse.',
    toc: [
      { label: 'Beste Wahl: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'Schnellere Wahl: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: '8B-Klasse im Vergleich', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Welches ist das beste 8B-Modell für Echtzeit-Chat?',
        answer: 'Qwen 3.5 9B ist in diesem Vergleich das beste Modell der 8B-Klasse für Echtzeit-Chat, betrieben mit ausgeschaltetem Thinking. Qwen 3.5 4B ist die schnellere Wahl; Gemma 4 E4B und Llama 3.1 8B sind die Alternativen.',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0, 256K Kontext, 6,6–7,6 GB bei Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: 3,3–4,0 GB — die Wahl, wenn Latenz oder Speicher wichtiger sind als maximale Qualität.',
          'Llama 3.1 8B ist mit 4,9 GB der kleinste 8B-Download; Gemma 4 12B (7,7–8,0 GB) ist der nächste Schritt, wenn Sie den Speicher haben.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Beste Wahl der 8B-Klasse: Qwen 3.5 9B — Apache 2.0, 256K Kontext, 6,6–7,6 GB bei Ollama; ein Qwen 3.5 8B gibt es nicht',
          'Schnellere Wahl: Qwen 3.5 4B mit 3,3–4,0 GB für reine CPU-Rechner oder GPUs der Einstiegsklasse',
          'Alternativen: Gemma 4 E4B und 12B, Llama 3.1 8B (4,9 GB) und das Vorgängermodell Qwen3 8B',
          'Thinking für Chat ausschalten — Qwen 3.5 denkt standardmäßig vor der Antwort, was das erste sichtbare Token verzögert',
          'Wir haben keine Tokens pro Sekunde gemessen: Die Latenz hängt von Ihrer Hardware ab, messen Sie die Zeit bis zum ersten Token auf Ihrem eigenen Rechner',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Beste Wahl: Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B ist das beste Modell der 8B-Klasse für Echtzeit-Chat, weil es starke, vom Hersteller veröffentlichte Benchmark-Werte mit einem Download verbindet, der in etwa 8 GB Speicher passt.</strong> Die Modellkarte von Alibaba nennt MMLU-Pro 82,5, GPQA Diamond 81,7 und IFEval 91,5 (Herstellerangaben, im Thinking-Modus gemessen). Das Modell steht unter Apache 2.0, verarbeitet Text und Bilder und unterstützt ein Kontextfenster von 256K Tokens.',
          'Qwen 3.5 denkt standardmäßig, bevor es antwortet. Bei einem Chat-Widget, einem Sprachassistenten-Backend oder einer Live-Autovervollständigung ist diese Verzögerung der größte Latenzfaktor. Deaktivieren Sie das Thinking daher über die Thinking-Einstellung Ihrer Laufzeitumgebung (die Modellkarte dokumentiert den Parameter enable_thinking mit dem Wert False). Starten Sie mit ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'Schnellere Wahl: Qwen 3.5 4B',
        content: [
          '<strong>Qwen 3.5 4B ist die schnellere Wahl für Echtzeit-Chat, wenn Speicher oder Latenz wichtiger sind als maximale Qualität.</strong> Der Download bei Ollama umfasst 3,3–4,0 GB (ollama run qwen3.5:4b); das Modell behält das 256K-Kontextfenster und die Bildeingabe und passt auch auf Rechner, auf denen das 9B-Modell kaum Platz für den Kontext-Cache ließe.',
          'Gemma 4 E4B ist die Alternative in dieser Größenklasse, mit Audioeingabe und 128K Kontext. Der Ollama-Download beträgt 6,6–9,5 GB und ist damit größer, als der Name „4B“ vermuten lässt. Prüfen Sie die genaue Größe des Tags, bevor Sie es für einen kleinen Rechner wählen.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B-Klasse im Vergleich',
        content: [
          'Die Tabelle zeigt die von Ollama veröffentlichte Download-Größe und das Kontextfenster je Tag. Größenbereiche sind der untere und obere Wert, den Ollama für das Tag angibt; welche Quantisierung hinter welchem Wert steht, nennt die Seite nicht.',
          'Qwen 3.6 steht nicht in der Tabelle: Bei Ollama gibt es nur 27B- und 35B-Modelle davon, daher bleibt Qwen 3.5 die neueste Qwen-Generation in dieser Größenklasse.',
          'Llama 3.1 8B (4,9 GB, 128K Kontext) ist der kleinste 8B-Download und die etablierte Referenz, aber das älteste Modell der Tabelle und älter als die Generationen Qwen 3.5 und Gemma 4. Qwen3 8B (5,2 GB, 40K Kontext) ist die 8B-Variante der Vorgängergeneration und bleibt passend, wenn das 9B-Modell zu groß ist.',
          'Gemma 4 12B (7,7–8,0 GB, Apache 2.0) ist der nächste Schritt für Rechner mit Speicherreserve. Der veröffentlichte MMLU-Pro-Wert liegt bei 77,2 gegenüber 82,5 für Qwen 3.5 9B, doch beide Hersteller nutzen unterschiedliche Testeinstellungen, die Werte sind nicht direkt vergleichbar. Wir haben keine Latenztests durchgeführt; die Rangfolge beruht auf Benchmarks und Größe, nicht auf einer Geschwindigkeitsmessung.',
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Kontext'],
        rows: [
          { 'Modell': 'Qwen 3.5 9B', 'Ollama-Tag': 'qwen3.5:9b', 'Download': '6,6–7,6 GB', 'Kontext': '256K' },
          { 'Modell': 'Qwen 3.5 4B', 'Ollama-Tag': 'qwen3.5:4b', 'Download': '3,3–4,0 GB', 'Kontext': '256K' },
          { 'Modell': 'Gemma 4 E4B', 'Ollama-Tag': 'gemma4:e4b', 'Download': '6,6–9,5 GB', 'Kontext': '128K' },
          { 'Modell': 'Gemma 4 12B', 'Ollama-Tag': 'gemma4:12b', 'Download': '7,7–8,0 GB', 'Kontext': '256K' },
          { 'Modell': 'Llama 3.1 8B', 'Ollama-Tag': 'llama3.1:8b', 'Download': '4,9 GB', 'Kontext': '128K' },
          { 'Modell': 'Qwen3 8B', 'Ollama-Tag': 'qwen3:8b', 'Download': '5,2 GB', 'Kontext': '40K' },
          { 'Modell': 'Qwen3 4B', 'Ollama-Tag': 'qwen3:4b', 'Download': '2,5 GB', 'Kontext': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welches ist das beste 8B-Modell für lokalen Chat?',
            a: 'Qwen 3.5 9B ist in diesem Vergleich das beste Modell der 8B-Klasse für lokalen Chat, betrieben mit ausgeschaltetem Thinking. Qwen 3.5 hat keine 8B-Größe, die 9B-Variante kommt ihr am nächsten; Qwen3 8B und Llama 3.1 8B sind die echten 8B-Alternativen.',
          },
          {
            q: 'Gibt es ein Qwen 3.5 8B?',
            a: 'Nein. Ollama führt Qwen 3.5 in den Größen 0.8B, 2B, 4B, 9B, 27B, 35B und 122B. Die Vorgängergeneration Qwen3 hat das 8B-Modell (qwen3:8b, 5,2 GB).',
          },
          {
            q: 'Welches ist das intelligenteste 8B-Modell?',
            a: 'Nach veröffentlichten Herstellerwerten erreicht Qwen 3.5 9B höhere Ergebnisse als Gemma 4 12B (MMLU-Pro 82,5, GPQA Diamond 81,7). Gemma 4 12B gibt MMLU Pro 77,2 und GPQA Diamond 78,8 an. Die Zahlen stammen von verschiedenen Herstellern mit unterschiedlichen Testeinstellungen; verstehen Sie sie als Orientierung, nicht als Beweis einer Rangfolge.',
          },
          {
            q: 'Welches Modell ist für Echtzeit-Chat am schnellsten?',
            a: 'Auf derselben Hardware sind die kleinsten Downloads meist am schnellsten: Qwen3 4B (2,5 GB) und Qwen 3.5 4B (3,3–4,0 GB). Die Geschwindigkeit hängt von Hardware und Laufzeitumgebung ab; wir haben keine Tokens pro Sekunde gemessen, messen Sie daher die Zeit bis zum ersten Token auf Ihrem eigenen Rechner.',
          },
          {
            q: 'Warum sollte man Thinking für Echtzeit-Chat ausschalten?',
            a: 'Qwen 3.5-Modelle erzeugen standardmäßig Denktext vor der endgültigen Antwort. Das hilft bei schwierigen Aufgaben, verzögert aber das erste sichtbare Antwort-Token, und genau diese Wartezeit bemerken Nutzer im Chat. Schalten Sie Thinking für einfache Unterhaltung aus und nutzen Sie es für Aufgaben, die schrittweises Überlegen brauchen.',
          },
          {
            q: 'Brauche ich für Echtzeit-Chat mit diesen Modellen eine GPU?',
            a: 'Nicht zwingend. Die Modelle der 4B-Klasse sind klein genug, um sie auf einer modernen CPU auszuprobieren, doch die Geschwindigkeit schwankt stark je nach Hardware. Die Modelle 9B und 12B brauchen allein für die Gewichte etwa 7–8 GB Speicher; eine GPU oder Apple Silicon mit genug Unified Memory sorgt für flüssigeren Chat.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes lokales LLM für 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — Hardware-Größenwahl für diese Modellstufe',
          '[Bestes Embedding-Modell für lokales RAG](/prompt-bites/best-embedding-model-local-rag) — ein kleines Chat-Modell mit Retrieval kombinieren',
          '[Welche Hardware braucht man, um ein 7B-Modell lokal zu fine-tunen?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — ein kleines Modell weiter anpassen',
        ],
      },
    },
  },
  es: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-es.webp',
    title: '¿Cuál es el Mejor LLM Local de Clase 8B para Chat en Tiempo Real?',
    seoTitle: 'Mejor LLM Local 8B para Chat en Tiempo Real 2026',
    metaDescription: 'Qwen 3.5 9B es el mejor LLM local de clase 8B para chat en tiempo real; Qwen 3.5 4B, la opción rápida. Tamaños de Ollama frente a Gemma 4 y Llama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores que construyen una función de chat local de baja latencia en hardware modesto',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B es el mejor modelo local de clase 8B para chat en tiempo real</strong>: tiene buenas puntuaciones de benchmark publicadas por el fabricante y se descarga a 6,6–7,6 GB en Ollama. Qwen 3.5 no tiene un tamaño 8B; el 9B es lo más cercano. Desactive el thinking para chat: viene activado por defecto y retrasa el primer token visible. Qwen 3.5 4B (3,3–4,0 GB) es la opción rápida para equipos solo con CPU o con GPU de gama de entrada.',
    toc: [
      { label: 'Mejor Opción: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'Opción Rápida: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: 'Modelos de Clase 8B Comparados', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Cuál es el mejor modelo de 8B para chat en tiempo real?',
        answer: 'Qwen 3.5 9B es el mejor modelo de clase 8B para chat en tiempo real en esta comparación, usado con el thinking desactivado. Qwen 3.5 4B es la opción rápida; Gemma 4 E4B y Llama 3.1 8B son las alternativas.',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0, contexto de 256K, 6,6–7,6 GB en Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: 3,3–4,0 GB — la opción cuando la latencia o la memoria importan más que la calidad máxima.',
          'Llama 3.1 8B es la descarga 8B más pequeña, con 4,9 GB; Gemma 4 12B (7,7–8,0 GB) es el siguiente paso si dispone de memoria.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Mejor opción de clase 8B: Qwen 3.5 9B — Apache 2.0, contexto de 256K, 6,6–7,6 GB en Ollama; no existe un Qwen 3.5 8B',
          'Opción rápida: Qwen 3.5 4B con 3,3–4,0 GB para equipos solo con CPU o con GPU de gama de entrada',
          'Alternativas: Gemma 4 E4B y 12B, Llama 3.1 8B (4,9 GB) y Qwen3 8B, la generación anterior',
          'Desactive el thinking para chat — Qwen 3.5 razona antes de responder por defecto, lo que retrasa el primer token visible',
          'No medimos tokens por segundo: la latencia depende de su hardware, así que mida el tiempo hasta el primer token en su propio equipo',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Mejor Opción: Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B es el mejor modelo de clase 8B para chat en tiempo real porque combina buenas puntuaciones de benchmark publicadas por el fabricante con una descarga que cabe en unos 8 GB de memoria.</strong> La ficha del modelo de Alibaba indica MMLU-Pro 82,5, GPQA Diamond 81,7 e IFEval 91,5 (cifras del fabricante, medidas en modo thinking). Se publica bajo Apache 2.0, admite texto e imágenes y soporta una ventana de contexto de 256K tokens.',
          'Qwen 3.5 razona antes de responder por defecto. En un widget de chat, un backend de asistente de voz o un autocompletado en vivo, ese retraso es el principal coste de latencia, así que desactive el thinking con el ajuste de su entorno de ejecución (la ficha del modelo documenta el parámetro enable_thinking en False). Inícielo con ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'Opción Rápida: Qwen 3.5 4B',
        content: [
          '<strong>Qwen 3.5 4B es la opción rápida para chat en tiempo real cuando la memoria o la latencia importan más que la calidad máxima.</strong> Se descarga a 3,3–4,0 GB en Ollama (ollama run qwen3.5:4b), mantiene la ventana de contexto de 256K y la entrada de imágenes, y encaja en equipos donde el 9B dejaría poco espacio para la caché de contexto.',
          'Gemma 4 E4B es la alternativa en esta clase de tamaño, con entrada de audio y contexto de 128K. Su descarga en Ollama es de 6,6–9,5 GB, mayor de lo que sugiere el nombre «4B»; compruebe el tamaño exacto de la etiqueta antes de elegirlo para un equipo pequeño.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos de Clase 8B Comparados',
        content: [
          'La tabla muestra el tamaño de descarga y la ventana de contexto publicados por Ollama para cada etiqueta. Los rangos de tamaño son el valor bajo y alto que muestra Ollama; la página no indica qué cuantización corresponde a cada extremo.',
          'Qwen 3.6 no está en la tabla: en Ollama solo existe como modelos de 27B y 35B, por lo que Qwen 3.5 sigue siendo la generación Qwen más reciente de esta clase de tamaño.',
          'Llama 3.1 8B (4,9 GB, contexto de 128K) es la descarga 8B más pequeña y la referencia establecida, pero es el modelo más antiguo de la tabla y anterior a las generaciones Qwen 3.5 y Gemma 4. Qwen3 8B (5,2 GB, contexto de 40K) es el 8B de la generación anterior y sigue siendo adecuado cuando el 9B es demasiado grande.',
          'Gemma 4 12B (7,7–8,0 GB, Apache 2.0) es el siguiente paso para equipos con memoria de sobra. Su MMLU Pro publicado es 77,2 frente a 82,5 de Qwen 3.5 9B, pero ambos fabricantes usan ajustes de prueba distintos y las puntuaciones no son directamente comparables. No hicimos pruebas de latencia, así que la clasificación se basa en benchmarks y tamaño, no en una medición de velocidad.',
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Descarga', 'Contexto'],
        rows: [
          { 'Modelo': 'Qwen 3.5 9B', 'Etiqueta Ollama': 'qwen3.5:9b', 'Descarga': '6,6–7,6 GB', 'Contexto': '256K' },
          { 'Modelo': 'Qwen 3.5 4B', 'Etiqueta Ollama': 'qwen3.5:4b', 'Descarga': '3,3–4,0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 E4B', 'Etiqueta Ollama': 'gemma4:e4b', 'Descarga': '6,6–9,5 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 12B', 'Etiqueta Ollama': 'gemma4:12b', 'Descarga': '7,7–8,0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Llama 3.1 8B', 'Etiqueta Ollama': 'llama3.1:8b', 'Descarga': '4,9 GB', 'Contexto': '128K' },
          { 'Modelo': 'Qwen3 8B', 'Etiqueta Ollama': 'qwen3:8b', 'Descarga': '5,2 GB', 'Contexto': '40K' },
          { 'Modelo': 'Qwen3 4B', 'Etiqueta Ollama': 'qwen3:4b', 'Descarga': '2,5 GB', 'Contexto': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Cuál es el mejor modelo de 8B para chat local?',
            a: 'Qwen 3.5 9B es el mejor modelo de clase 8B para chat local en esta comparación, usado con el thinking desactivado. Qwen 3.5 no tiene tamaño 8B, el 9B es lo más cercano; Qwen3 8B y Llama 3.1 8B son las verdaderas alternativas de 8B.',
          },
          {
            q: '¿Existe un Qwen 3.5 8B?',
            a: 'No. Ollama lista Qwen 3.5 en tamaños 0.8B, 2B, 4B, 9B, 27B, 35B y 122B. La generación anterior, Qwen3, tiene el 8B (qwen3:8b, 5,2 GB).',
          },
          {
            q: '¿Cuál es el modelo de 8B más inteligente?',
            a: 'Según los benchmarks publicados por los fabricantes, Qwen 3.5 9B obtiene puntuaciones más altas que Gemma 4 12B (MMLU-Pro 82,5, GPQA Diamond 81,7). Gemma 4 12B indica MMLU Pro 77,2 y GPQA Diamond 78,8. Las cifras provienen de fabricantes y ajustes de prueba distintos, así que úselas como guía, no como prueba de una clasificación.',
          },
          {
            q: '¿Qué modelo es el más rápido para chat en tiempo real?',
            a: 'En el mismo hardware, las descargas más pequeñas suelen ser las más rápidas: Qwen3 4B (2,5 GB) y Qwen 3.5 4B (3,3–4,0 GB). La velocidad depende del hardware y del entorno de ejecución; no medimos tokens por segundo, así que mida el tiempo hasta el primer token en su propio equipo.',
          },
          {
            q: '¿Por qué desactivar el thinking en el chat en tiempo real?',
            a: 'Los modelos Qwen 3.5 generan por defecto texto de razonamiento antes de la respuesta final. Eso ayuda en problemas difíciles, pero retrasa el primer token visible de la respuesta, que es la demora que los usuarios notan en un chat. Desactive el thinking en conversaciones simples y manténgalo para tareas que requieran razonamiento paso a paso.',
          },
          {
            q: '¿Necesito una GPU para chat en tiempo real con estos modelos?',
            a: 'No necesariamente. Los modelos de clase 4B son lo bastante pequeños para probarlos en una CPU moderna, pero la velocidad varía mucho según el hardware. Los modelos 9B y 12B necesitan unos 7–8 GB de memoria solo para los pesos; una GPU, o Apple Silicon con suficiente memoria unificada, da un chat más fluido.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Mejor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionamiento de hardware para este nivel de modelo',
          '[Mejor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — combinando un modelo de chat pequeño con recuperación',
          '[¿Qué Hardware Necesitas para Hacer Fine-Tuning de un Modelo de 7B Localmente?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personalizando más un modelo pequeño',
        ],
      },
    },
  },
  fr: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-fr.webp',
    title: 'Quel est le meilleur LLM local de classe 8B pour le chat en temps réel ?',
    seoTitle: 'Meilleur LLM local 8B pour le chat en temps réel 2026',
    metaDescription: 'Qwen 3.5 9B est le meilleur LLM local de classe 8B pour le chat en temps réel, Qwen 3.5 4B le choix rapide. Tailles Ollama comparées à Gemma 4 et Llama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Développeurs qui conçoivent une fonctionnalité de chat local à faible latence sur du matériel modeste',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B est le meilleur modèle local de classe 8B pour le chat en temps réel</strong> — il affiche de bons scores de benchmark publiés par le constructeur et se télécharge à 6,6–7,6 Go sur Ollama. Qwen 3.5 n\'a pas de taille 8B ; le 9B en est le plus proche. Désactivez le mode thinking pour le chat : il est actif par défaut et retarde le premier token visible. Qwen 3.5 4B (3,3–4,0 Go) est le choix rapide pour les machines sans GPU ou avec un GPU d\'entrée de gamme.',
    toc: [
      { label: 'Meilleur choix : Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'Choix rapide : Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: 'Comparatif de la classe 8B', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Quel est le meilleur modèle 8B pour le chat en temps réel ?',
        answer: 'Qwen 3.5 9B est le meilleur modèle de classe 8B pour le chat en temps réel dans ce comparatif, utilisé avec le thinking désactivé. Qwen 3.5 4B est le choix rapide ; Gemma 4 E4B et Llama 3.1 8B sont les alternatives.',
        bullets: [
          'Qwen 3.5 9B : Apache 2.0, contexte 256K, 6,6–7,6 Go sur Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B : 3,3–4,0 Go — le choix quand la latence ou la mémoire comptent plus que la qualité maximale.',
          'Llama 3.1 8B est le plus petit téléchargement 8B avec 4,9 Go ; Gemma 4 12B (7,7–8,0 Go) est l\'étape suivante si vous avez la mémoire.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Meilleur choix de classe 8B : Qwen 3.5 9B — Apache 2.0, contexte 256K, 6,6–7,6 Go sur Ollama ; il n\'existe pas de Qwen 3.5 8B',
          'Choix rapide : Qwen 3.5 4B à 3,3–4,0 Go pour les configurations sans GPU ou avec GPU d\'entrée de gamme',
          'Alternatives : Gemma 4 E4B et 12B, Llama 3.1 8B (4,9 Go) et Qwen3 8B, la génération précédente',
          'Désactivez le thinking pour le chat — Qwen 3.5 raisonne par défaut avant de répondre, ce qui retarde le premier token visible',
          'Nous n\'avons pas mesuré les tokens par seconde : la latence dépend de votre matériel, mesurez le temps jusqu\'au premier token sur votre propre machine',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Meilleur choix : Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B est le meilleur modèle de classe 8B pour le chat en temps réel : il associe de bons scores de benchmark publiés par le constructeur à un téléchargement qui tient dans environ 8 Go de mémoire.</strong> La fiche du modèle d\'Alibaba indique MMLU-Pro 82,5, GPQA Diamond 81,7 et IFEval 91,5 (chiffres du constructeur, mesurés en mode thinking). Il est publié sous licence Apache 2.0, accepte texte et images, et prend en charge une fenêtre de contexte de 256K tokens.',
          'Qwen 3.5 raisonne par défaut avant de répondre. Pour un widget de chat, un backend d\'assistant vocal ou une saisie semi-automatique en direct, ce délai est le principal coût de latence : désactivez donc le thinking via le réglage de votre environnement d\'exécution (la fiche du modèle documente le paramètre enable_thinking à False). Lancez-le avec ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'Choix rapide : Qwen 3.5 4B',
        content: [
          '<strong>Qwen 3.5 4B est le choix rapide pour le chat en temps réel quand la mémoire ou la latence comptent plus que la qualité maximale.</strong> Il se télécharge à 3,3–4,0 Go sur Ollama (ollama run qwen3.5:4b), conserve la fenêtre de contexte de 256K et l\'entrée image, et convient aux machines où le 9B laisserait peu de place au cache de contexte.',
          'Gemma 4 E4B est l\'alternative de cette catégorie, avec entrée audio et contexte de 128K. Son téléchargement Ollama fait 6,6–9,5 Go, plus que ne le suggère le nom « 4B » : vérifiez la taille exacte du tag avant de le choisir pour une petite machine.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparatif de la classe 8B',
        content: [
          'Le tableau indique la taille de téléchargement et la fenêtre de contexte publiées par Ollama pour chaque tag. Les plages de taille correspondent aux valeurs basse et haute affichées par Ollama ; la page ne précise pas quelle quantification correspond à chaque extrémité.',
          'Qwen 3.6 ne figure pas dans le tableau : sur Ollama, il n\'existe qu\'en modèles 27B et 35B, Qwen 3.5 reste donc la génération Qwen la plus récente de cette catégorie de taille.',
          'Llama 3.1 8B (4,9 Go, contexte 128K) est le plus petit téléchargement 8B et la référence établie, mais c\'est le modèle le plus ancien du tableau, antérieur aux générations Qwen 3.5 et Gemma 4. Qwen3 8B (5,2 Go, contexte 40K) est le 8B de la génération précédente et reste adapté quand le 9B est trop volumineux.',
          'Gemma 4 12B (7,7–8,0 Go, Apache 2.0) est l\'étape suivante pour les machines disposant de mémoire. Son MMLU Pro publié est de 77,2 contre 82,5 pour Qwen 3.5 9B, mais les deux constructeurs utilisent des réglages de test différents et les scores ne sont pas directement comparables. Nous n\'avons pas réalisé de tests de latence : le classement repose sur les benchmarks et la taille, pas sur une mesure de vitesse.',
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Contexte'],
        rows: [
          { 'Modèle': 'Qwen 3.5 9B', 'Tag Ollama': 'qwen3.5:9b', 'Téléchargement': '6,6–7,6 Go', 'Contexte': '256K' },
          { 'Modèle': 'Qwen 3.5 4B', 'Tag Ollama': 'qwen3.5:4b', 'Téléchargement': '3,3–4,0 Go', 'Contexte': '256K' },
          { 'Modèle': 'Gemma 4 E4B', 'Tag Ollama': 'gemma4:e4b', 'Téléchargement': '6,6–9,5 Go', 'Contexte': '128K' },
          { 'Modèle': 'Gemma 4 12B', 'Tag Ollama': 'gemma4:12b', 'Téléchargement': '7,7–8,0 Go', 'Contexte': '256K' },
          { 'Modèle': 'Llama 3.1 8B', 'Tag Ollama': 'llama3.1:8b', 'Téléchargement': '4,9 Go', 'Contexte': '128K' },
          { 'Modèle': 'Qwen3 8B', 'Tag Ollama': 'qwen3:8b', 'Téléchargement': '5,2 Go', 'Contexte': '40K' },
          { 'Modèle': 'Qwen3 4B', 'Tag Ollama': 'qwen3:4b', 'Téléchargement': '2,5 Go', 'Contexte': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Quel est le meilleur modèle 8B pour le chat local ?',
            a: 'Qwen 3.5 9B est le meilleur modèle de classe 8B pour le chat local dans ce comparatif, utilisé avec le thinking désactivé. Qwen 3.5 n\'a pas de taille 8B, le 9B en est le plus proche ; Qwen3 8B et Llama 3.1 8B sont les vraies alternatives 8B.',
          },
          {
            q: 'Existe-t-il un Qwen 3.5 8B ?',
            a: 'Non. Ollama propose Qwen 3.5 en tailles 0.8B, 2B, 4B, 9B, 27B, 35B et 122B. La génération précédente, Qwen3, a le 8B (qwen3:8b, 5,2 Go).',
          },
          {
            q: 'Quel est le modèle 8B le plus intelligent ?',
            a: 'Selon les benchmarks publiés par les constructeurs, Qwen 3.5 9B obtient des scores supérieurs à ceux de Gemma 4 12B (MMLU-Pro 82,5, GPQA Diamond 81,7). Gemma 4 12B annonce MMLU Pro 77,2 et GPQA Diamond 78,8. Ces chiffres viennent de constructeurs et de réglages de test différents : prenez-les comme une indication, pas comme la preuve d\'un classement.',
          },
          {
            q: 'Quel modèle est le plus rapide pour le chat en temps réel ?',
            a: 'À matériel égal, les plus petits téléchargements sont généralement les plus rapides : Qwen3 4B (2,5 Go) et Qwen 3.5 4B (3,3–4,0 Go). La vitesse dépend du matériel et de l\'environnement d\'exécution ; nous n\'avons pas mesuré les tokens par seconde, mesurez donc le temps jusqu\'au premier token sur votre machine.',
          },
          {
            q: 'Pourquoi désactiver le thinking pour le chat en temps réel ?',
            a: 'Les modèles Qwen 3.5 produisent par défaut un texte de raisonnement avant la réponse finale. C\'est utile pour les problèmes difficiles, mais cela retarde le premier token visible de la réponse, soit le délai que les utilisateurs remarquent dans un chat. Désactivez le thinking pour la conversation simple et gardez-le pour les tâches qui demandent un raisonnement pas à pas.',
          },
          {
            q: 'Faut-il un GPU pour le chat en temps réel avec ces modèles ?',
            a: 'Pas obligatoirement. Les modèles de classe 4B sont assez petits pour être essayés sur un CPU récent, mais la vitesse varie fortement selon le matériel. Les modèles 9B et 12B demandent environ 7–8 Go de mémoire pour les seuls poids ; un GPU, ou un Apple Silicon avec assez de mémoire unifiée, offre un chat plus fluide.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur LLM local pour 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionnement matériel pour cette catégorie de modèles',
          '[Meilleur modèle d\'embedding pour un RAG local](/prompt-bites/best-embedding-model-local-rag) — associer un petit modèle de chat à la recherche documentaire',
          '[Quel matériel pour fine-tuner un modèle 7B en local ?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personnaliser davantage un petit modèle',
        ],
      },
    },
  },
  ja: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-ja.webp',
    title: 'リアルタイムチャットに最適な8Bクラスのローカルモデルは?',
    seoTitle: '2026年版 リアルタイムチャット向けローカル8B LLM',
    metaDescription: 'リアルタイムチャットに最適な8Bクラスのローカルモデルは Qwen 3.5 9B、高速重視なら Qwen 3.5 4B。Gemma 4 や Llama 3.1 8B とOllamaのサイズを比較。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '控えめなハードウェアで低遅延のローカルチャット機能を構築する開発者',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9Bは、リアルタイムチャットに最適な8Bクラスのローカルモデルです</strong>。ベンダー公表のベンチマークスコアが高く、Ollamaでのダウンロードサイズは6.6–7.6 GBです。Qwen 3.5に8Bはなく、9Bが最も近いサイズです。チャットではthinkingをオフにしてください。既定で有効なため、最初の表示トークンが遅れます。CPUのみ、またはエントリークラスのGPUの環境には、Qwen 3.5 4B(3.3–4.0 GB)が高速な選択肢です。',
    toc: [
      { label: 'ベストピック: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: '高速重視: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: '8Bクラスモデルの比較', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'リアルタイムチャットに最適な8Bモデルは?',
        answer: 'この比較では、thinkingをオフにしたQwen 3.5 9Bがリアルタイムチャットに最適な8Bクラスのモデルです。高速重視ならQwen 3.5 4B、代替はGemma 4 E4BとLlama 3.1 8Bです。',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0、256Kコンテキスト、Ollamaで6.6–7.6 GB (ollama run qwen3.5:9b)。',
          'Qwen 3.5 4B: 3.3–4.0 GB — 最高品質よりレイテンシやメモリを重視する場合の選択肢。',
          'Llama 3.1 8Bは4.9 GBと最小の8Bダウンロード。メモリに余裕があればGemma 4 12B(7.7–8.0 GB)が次の選択肢です。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8Bクラスのベストピック: Qwen 3.5 9B — Apache 2.0、256Kコンテキスト、Ollamaで6.6–7.6 GB。Qwen 3.5 8Bは存在しません',
          '高速重視: Qwen 3.5 4B(3.3–4.0 GB)。CPUのみ、またはエントリークラスのGPU向け',
          '代替: Gemma 4 E4BとGemma 4 12B、Llama 3.1 8B(4.9 GB)、前世代のQwen3 8B',
          'チャットではthinkingをオフに — Qwen 3.5は既定で回答前に推論するため、最初の表示トークンが遅れます',
          '毎秒トークン数は計測していません。レイテンシはハードウェアに依存するため、最初のトークンまでの時間はご自身の環境で計測してください',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'ベストピック: Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9Bがリアルタイムチャットに最適な8Bクラスのモデルである理由は、ベンダー公表の高いベンチマークスコアと、約8 GBのメモリに収まるダウンロードサイズを両立しているためです。</strong>Alibabaのモデルカードには、MMLU-Pro 82.5、GPQA Diamond 81.7、IFEval 91.5と記載されています(ベンダー公表値、thinkingモードで測定)。Apache 2.0で公開され、テキストと画像を扱え、256Kトークンのコンテキストウィンドウをサポートします。',
          'Qwen 3.5は既定で回答の前に推論を行います。チャットウィジェット、音声アシスタントのバックエンド、リアルタイムのオートコンプリートでは、この遅延が主なレイテンシ要因になるため、ランタイムのthinking設定でオフにしてください(モデルカードにはパラメータenable_thinkingをFalseにする方法が記載されています)。起動は ollama run qwen3.5:9b です。',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: '高速重視: Qwen 3.5 4B',
        content: [
          '<strong>メモリやレイテンシを最高品質より優先するなら、Qwen 3.5 4Bがリアルタイムチャット向けの高速な選択肢です。</strong>Ollamaでのダウンロードは3.3–4.0 GB(ollama run qwen3.5:4b)で、256Kのコンテキストウィンドウと画像入力を維持し、9Bではコンテキストキャッシュの余裕が少なくなるマシンにも収まります。',
          'このサイズ帯の代替はGemma 4 E4Bで、音声入力と128Kコンテキストを備えます。Ollamaのダウンロードは6.6–9.5 GBで、「4B」という名前から想像するより大きいため、小型のマシンに選ぶ前にタグの正確なサイズを確認してください。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8Bクラスモデルの比較',
        content: [
          '表にはOllamaが公表している各タグのダウンロードサイズとコンテキストウィンドウを示しています。サイズの範囲はOllamaがタグに表示する下限と上限で、各端がどの量子化に対応するかはページに記載されていません。',
          'Qwen 3.6は表に含めていません。Ollamaでは27Bと35Bのモデルしかないため、このサイズ帯で最新のQwen世代はQwen 3.5のままです。',
          'Llama 3.1 8B(4.9 GB、128Kコンテキスト)は最小の8Bダウンロードで定番の基準ですが、表の中で最も古く、Qwen 3.5やGemma 4より前の世代です。Qwen3 8B(5.2 GB、40Kコンテキスト)は前世代の8Bで、9Bが大きすぎる場合に適しています。',
          'Gemma 4 12B(7.7–8.0 GB、Apache 2.0)はメモリに余裕のあるマシン向けの次の選択肢です。公表されているMMLU Proは77.2で、Qwen 3.5 9Bの82.5を下回りますが、両ベンダーのテスト設定は異なり、スコアは直接比較できません。レイテンシのテストは行っていないため、この順位はベンチマークとサイズに基づくもので、速度の計測結果ではありません。',
        ],
        columns: ['モデル', 'Ollamaタグ', 'ダウンロード', 'コンテキスト'],
        rows: [
          { 'モデル': 'Qwen 3.5 9B', 'Ollamaタグ': 'qwen3.5:9b', 'ダウンロード': '6.6–7.6 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Qwen 3.5 4B', 'Ollamaタグ': 'qwen3.5:4b', 'ダウンロード': '3.3–4.0 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Gemma 4 E4B', 'Ollamaタグ': 'gemma4:e4b', 'ダウンロード': '6.6–9.5 GB', 'コンテキスト': '128K' },
          { 'モデル': 'Gemma 4 12B', 'Ollamaタグ': 'gemma4:12b', 'ダウンロード': '7.7–8.0 GB', 'コンテキスト': '256K' },
          { 'モデル': 'Llama 3.1 8B', 'Ollamaタグ': 'llama3.1:8b', 'ダウンロード': '4.9 GB', 'コンテキスト': '128K' },
          { 'モデル': 'Qwen3 8B', 'Ollamaタグ': 'qwen3:8b', 'ダウンロード': '5.2 GB', 'コンテキスト': '40K' },
          { 'モデル': 'Qwen3 4B', 'Ollamaタグ': 'qwen3:4b', 'ダウンロード': '2.5 GB', 'コンテキスト': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'ローカルチャットに最適な8Bモデルは?',
            a: 'この比較では、thinkingをオフにしたQwen 3.5 9Bがローカルチャットに最適な8Bクラスのモデルです。Qwen 3.5に8Bはなく9Bが最も近く、本来の8Bの代替はQwen3 8BとLlama 3.1 8Bです。',
          },
          {
            q: 'Qwen 3.5 8Bはありますか?',
            a: 'いいえ。OllamaにはQwen 3.5が0.8B、2B、4B、9B、27B、35B、122Bのサイズで掲載されています。前世代のQwen3には8B(qwen3:8b、5.2 GB)があります。',
          },
          {
            q: '最も賢い8Bモデルは?',
            a: '各ベンダーが公表したベンチマークでは、Qwen 3.5 9BのスコアはGemma 4 12Bより高くなっています(MMLU-Pro 82.5、GPQA Diamond 81.7)。Gemma 4 12BはMMLU Pro 77.2、GPQA Diamond 78.8と公表しています。数値はベンダーやテスト設定が異なるため、順位の証明ではなく目安として使ってください。',
          },
          {
            q: 'リアルタイムチャットで最も速いモデルは?',
            a: '同じハードウェアでは、最小のダウンロードが通常は最速です。Qwen3 4B(2.5 GB)とQwen 3.5 4B(3.3–4.0 GB)が該当します。速度はハードウェアとランタイムに依存し、毎秒トークン数は計測していないため、最初のトークンまでの時間はご自身の環境で計測してください。',
          },
          {
            q: 'リアルタイムチャットでthinkingをオフにする理由は?',
            a: 'Qwen 3.5モデルは既定で最終回答の前に推論テキストを生成します。難しい問題には有効ですが、最初の回答トークンの表示が遅れ、これがチャットでユーザーが感じる待ち時間になります。単純な会話ではthinkingをオフにし、段階的な推論が必要なタスクにだけ使ってください。',
          },
          {
            q: 'これらのモデルでリアルタイムチャットにGPUは必要ですか?',
            a: '必須ではありません。4Bクラスのモデルは最近のCPUでも試せる小ささですが、速度はハードウェアで大きく変わります。9Bと12Bはウェイトだけで約7–8 GBのメモリが必要なため、GPUや十分なユニファイドメモリを持つApple Siliconのほうが快適にチャットできます。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[6GB VRAMに最適なローカルLLM](/prompt-bites/best-local-llm-6gb-vram) — この モデル層向けのハードウェアサイジング',
          '[ローカルRAGに最適な埋め込みモデル](/prompt-bites/best-embedding-model-local-rag) — 小さいチャットモデルと検索を組み合わせる',
          '[7Bモデルをローカルでファインチューニングするために必要なハードウェアは?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — 小さいモデルをさらにカスタマイズする',
        ],
      },
    },
  },
  ko: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-ko.webp',
    title: '실시간 채팅에 가장 적합한 8B급 로컬 모델은?',
    seoTitle: '2026년 실시간 채팅용 최고의 로컬 8B LLM',
    metaDescription: '실시간 채팅에는 Qwen 3.5 9B가 최적의 8B급 로컬 모델이고, 더 빠른 선택은 Qwen 3.5 4B입니다. Gemma 4, Llama 3.1 8B와 Ollama 크기를 비교합니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '적당한 하드웨어에서 저지연 로컬 채팅 기능을 구축하는 개발자',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B는 실시간 채팅에 가장 적합한 8B급 로컬 모델입니다</strong> — 벤더가 공개한 벤치마크 점수가 높고, Ollama에서 6.6–7.6 GB로 다운로드됩니다. Qwen 3.5에는 8B 크기가 없으며 9B가 가장 가깝습니다. 채팅에서는 thinking을 끄세요. 기본값이 켜짐이라 첫 번째 표시 토큰이 늦어집니다. CPU만 있거나 보급형 GPU인 환경에는 Qwen 3.5 4B(3.3–4.0 GB)가 더 빠른 선택입니다.',
    toc: [
      { label: '최적의 선택: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: '더 빠른 선택: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: '8B급 모델 비교', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: '실시간 채팅에 가장 적합한 8B 모델은?',
        answer: '이 비교에서는 thinking을 끈 Qwen 3.5 9B가 실시간 채팅에 가장 적합한 8B급 모델입니다. 더 빠른 선택은 Qwen 3.5 4B이며, Gemma 4 E4B와 Llama 3.1 8B가 대안입니다.',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0, 256K 컨텍스트, Ollama에서 6.6–7.6 GB (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: 3.3–4.0 GB — 최고 품질보다 지연 시간이나 메모리가 중요할 때의 선택.',
          'Llama 3.1 8B는 4.9 GB로 가장 작은 8B 다운로드이며, 메모리 여유가 있다면 Gemma 4 12B(7.7–8.0 GB)가 다음 단계입니다.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8B급 최적의 선택: Qwen 3.5 9B — Apache 2.0, 256K 컨텍스트, Ollama에서 6.6–7.6 GB. Qwen 3.5 8B는 존재하지 않습니다',
          '더 빠른 선택: Qwen 3.5 4B(3.3–4.0 GB), CPU 전용 또는 보급형 GPU 환경용',
          '대안: Gemma 4 E4B와 12B, Llama 3.1 8B(4.9 GB), 이전 세대인 Qwen3 8B',
          '채팅에서는 thinking 끄기 — Qwen 3.5는 기본적으로 답하기 전에 추론하므로 첫 번째 표시 토큰이 늦어집니다',
          '초당 토큰 수는 측정하지 않았습니다. 지연 시간은 하드웨어에 따라 달라지므로 첫 토큰까지의 시간을 직접 측정하세요',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '최적의 선택: Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B는 벤더가 공개한 벤치마크 점수가 높으면서 약 8 GB 메모리에 들어가는 다운로드 크기를 갖추었기 때문에 실시간 채팅에 가장 적합한 8B급 모델입니다.</strong> Alibaba의 모델 카드는 MMLU-Pro 82.5, GPQA Diamond 81.7, IFEval 91.5를 제시합니다(벤더 공개 수치, thinking 모드에서 측정). Apache 2.0으로 공개되었고 텍스트와 이미지를 받으며 256K 토큰 컨텍스트 윈도우를 지원합니다.',
          'Qwen 3.5는 기본적으로 답하기 전에 추론합니다. 채팅 위젯, 음성 비서 백엔드, 실시간 자동 완성에서는 이 지연이 주된 지연 요인이므로 런타임의 thinking 설정으로 끄세요(모델 카드에는 enable_thinking 매개변수를 False로 설정하는 방법이 문서화되어 있습니다). ollama run qwen3.5:9b 로 시작하세요.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: '더 빠른 선택: Qwen 3.5 4B',
        content: [
          '<strong>메모리나 지연 시간이 최고 품질보다 중요하다면 Qwen 3.5 4B가 실시간 채팅에 더 빠른 선택입니다.</strong> Ollama에서 3.3–4.0 GB로 다운로드되며(ollama run qwen3.5:4b), 256K 컨텍스트 윈도우와 이미지 입력을 유지하고, 9B로는 컨텍스트 캐시 여유가 부족한 기기에도 맞습니다.',
          '이 크기 구간의 대안은 Gemma 4 E4B로, 오디오 입력과 128K 컨텍스트를 지원합니다. Ollama 다운로드는 6.6–9.5 GB로 "4B"라는 이름에서 짐작하는 것보다 크므로, 작은 기기에 선택하기 전에 태그의 정확한 크기를 확인하세요.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B급 모델 비교',
        content: [
          '표에는 각 태그에 대해 Ollama가 공개한 다운로드 크기와 컨텍스트 윈도우가 나와 있습니다. 크기 범위는 Ollama가 태그에 표시하는 하한과 상한이며, 각 끝이 어떤 양자화에 해당하는지는 페이지에 나와 있지 않습니다.',
          'Qwen 3.6은 표에 포함하지 않았습니다. Ollama에서는 27B와 35B 모델만 있으므로, 이 크기 구간에서 가장 최신의 Qwen 세대는 여전히 Qwen 3.5입니다.',
          'Llama 3.1 8B(4.9 GB, 128K 컨텍스트)는 가장 작은 8B 다운로드이자 오랜 기준이지만, 표에서 가장 오래된 모델이며 Qwen 3.5와 Gemma 4 세대보다 앞섭니다. Qwen3 8B(5.2 GB, 40K 컨텍스트)는 이전 세대의 8B로, 9B가 너무 클 때 여전히 적합합니다.',
          'Gemma 4 12B(7.7–8.0 GB, Apache 2.0)는 메모리에 여유가 있는 기기를 위한 다음 단계입니다. 공개된 MMLU Pro는 77.2로 Qwen 3.5 9B의 82.5보다 낮지만, 두 벤더의 테스트 설정이 달라 점수를 직접 비교할 수 없습니다. 지연 시간 테스트는 하지 않았으므로 이 순위는 벤치마크와 크기에 근거한 것이지 속도 측정이 아닙니다.',
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '컨텍스트'],
        rows: [
          { '모델': 'Qwen 3.5 9B', 'Ollama 태그': 'qwen3.5:9b', '다운로드': '6.6–7.6 GB', '컨텍스트': '256K' },
          { '모델': 'Qwen 3.5 4B', 'Ollama 태그': 'qwen3.5:4b', '다운로드': '3.3–4.0 GB', '컨텍스트': '256K' },
          { '모델': 'Gemma 4 E4B', 'Ollama 태그': 'gemma4:e4b', '다운로드': '6.6–9.5 GB', '컨텍스트': '128K' },
          { '모델': 'Gemma 4 12B', 'Ollama 태그': 'gemma4:12b', '다운로드': '7.7–8.0 GB', '컨텍스트': '256K' },
          { '모델': 'Llama 3.1 8B', 'Ollama 태그': 'llama3.1:8b', '다운로드': '4.9 GB', '컨텍스트': '128K' },
          { '모델': 'Qwen3 8B', 'Ollama 태그': 'qwen3:8b', '다운로드': '5.2 GB', '컨텍스트': '40K' },
          { '모델': 'Qwen3 4B', 'Ollama 태그': 'qwen3:4b', '다운로드': '2.5 GB', '컨텍스트': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: '로컬 채팅에 가장 적합한 8B 모델은?',
            a: '이 비교에서는 thinking을 끈 Qwen 3.5 9B가 로컬 채팅에 가장 적합한 8B급 모델입니다. Qwen 3.5에는 8B 크기가 없고 9B가 가장 가까우며, Qwen3 8B와 Llama 3.1 8B가 진짜 8B 대안입니다.',
          },
          {
            q: 'Qwen 3.5 8B가 있나요?',
            a: '아니요. Ollama는 Qwen 3.5를 0.8B, 2B, 4B, 9B, 27B, 35B, 122B 크기로 제공합니다. 이전 세대인 Qwen3에 8B(qwen3:8b, 5.2 GB)가 있습니다.',
          },
          {
            q: '가장 똑똑한 8B 모델은?',
            a: '벤더가 공개한 벤치마크에서는 Qwen 3.5 9B의 점수가 Gemma 4 12B보다 높습니다(MMLU-Pro 82.5, GPQA Diamond 81.7). Gemma 4 12B는 MMLU Pro 77.2, GPQA Diamond 78.8을 공개했습니다. 수치는 서로 다른 벤더와 테스트 설정에서 나온 것이므로 순위의 증거가 아니라 참고 자료로 쓰세요.',
          },
          {
            q: '실시간 채팅에서 가장 빠른 모델은?',
            a: '같은 하드웨어에서는 가장 작은 다운로드가 대체로 가장 빠릅니다. Qwen3 4B(2.5 GB)와 Qwen 3.5 4B(3.3–4.0 GB)가 해당합니다. 속도는 하드웨어와 런타임에 따라 달라지며 초당 토큰 수는 측정하지 않았으므로, 첫 토큰까지의 시간을 직접 측정하세요.',
          },
          {
            q: '실시간 채팅에서 thinking을 끄는 이유는?',
            a: 'Qwen 3.5 모델은 기본적으로 최종 답변 전에 추론 텍스트를 생성합니다. 어려운 문제에는 도움이 되지만 첫 번째 답변 토큰의 표시를 늦추며, 이것이 채팅에서 사용자가 느끼는 지연입니다. 단순한 대화에서는 thinking을 끄고, 단계별 추론이 필요한 작업에만 사용하세요.',
          },
          {
            q: '이 모델들로 실시간 채팅을 하려면 GPU가 필요한가요?',
            a: '반드시 필요하지는 않습니다. 4B급 모델은 최신 CPU에서 시험해 볼 만큼 작지만 속도는 하드웨어에 따라 크게 달라집니다. 9B와 12B 모델은 가중치만으로 약 7–8 GB 메모리가 필요하므로, GPU나 통합 메모리가 충분한 Apple Silicon에서 채팅이 더 부드럽습니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[6GB VRAM을 위한 최적의 로컬 LLM](/ko/prompt-bites/best-local-llm-6gb-vram) — 이 모델 등급을 위한 하드웨어 산정',
          '[로컬 RAG를 위한 최적의 임베딩 모델](/ko/prompt-bites/best-embedding-model-local-rag) — 작은 채팅 모델과 검색 결합하기',
          '[7B 모델을 로컬에서 파인튜닝하려면 어떤 하드웨어가 필요한가?](/ko/prompt-bites/fine-tuning-7b-model-locally-hardware) — 작은 모델을 더 커스터마이징하기',
        ],
      },
    },
  },
  pt: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-pt.webp',
    title: 'Qual o Melhor LLM Local da Classe 8B para Chat em Tempo Real?',
    seoTitle: 'Melhor LLM Local 8B para Chat em Tempo Real 2026',
    metaDescription: 'O Qwen 3.5 9B é o melhor LLM local da classe 8B para chat em tempo real; o Qwen 3.5 4B, a opção rápida. Tamanhos do Ollama versus Gemma 4 e Llama 3.1 8B.',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores construindo um recurso de chat local de baixa latência em hardware modesto',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>O Qwen 3.5 9B é o melhor modelo local da classe 8B para chat em tempo real</strong> — tem boas pontuações de benchmark publicadas pelo fabricante e baixa a 6,6–7,6 GB no Ollama. O Qwen 3.5 não tem tamanho 8B; o 9B é o mais próximo. Desative o thinking no chat: ele vem ativado por padrão e atrasa o primeiro token visível. O Qwen 3.5 4B (3,3–4,0 GB) é a opção rápida para máquinas só com CPU ou com GPU de entrada.',
    toc: [
      { label: 'Melhor Escolha: Qwen 3.5 9B', anchor: '#best-pick' },
      { label: 'Opção Rápida: Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: 'Modelos da Classe 8B Comparados', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'Qual é o melhor modelo de 8B para chat em tempo real?',
        answer: 'O Qwen 3.5 9B é o melhor modelo da classe 8B para chat em tempo real nesta comparação, usado com o thinking desativado. O Qwen 3.5 4B é a opção rápida; Gemma 4 E4B e Llama 3.1 8B são as alternativas.',
        bullets: [
          'Qwen 3.5 9B: Apache 2.0, contexto de 256K, 6,6–7,6 GB no Ollama (ollama run qwen3.5:9b).',
          'Qwen 3.5 4B: 3,3–4,0 GB — a escolha quando latência ou memória importam mais que a qualidade máxima.',
          'O Llama 3.1 8B é o menor download 8B, com 4,9 GB; o Gemma 4 12B (7,7–8,0 GB) é o próximo passo se você tiver memória.',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Melhor escolha da classe 8B: Qwen 3.5 9B — Apache 2.0, contexto de 256K, 6,6–7,6 GB no Ollama; não existe Qwen 3.5 8B',
          'Opção rápida: Qwen 3.5 4B com 3,3–4,0 GB para configurações só com CPU ou com GPU de entrada',
          'Alternativas: Gemma 4 E4B e 12B, Llama 3.1 8B (4,9 GB) e o Qwen3 8B, da geração anterior',
          'Desative o thinking no chat — o Qwen 3.5 raciocina antes de responder por padrão, o que atrasa o primeiro token visível',
          'Não medimos tokens por segundo: a latência depende do seu hardware, então meça o tempo até o primeiro token na sua própria máquina',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Melhor Escolha: Qwen 3.5 9B',
        content: [
          '<strong>O Qwen 3.5 9B é o melhor modelo da classe 8B para chat em tempo real porque une boas pontuações de benchmark publicadas pelo fabricante a um download que cabe em cerca de 8 GB de memória.</strong> O model card da Alibaba informa MMLU-Pro 82,5, GPQA Diamond 81,7 e IFEval 91,5 (números do fabricante, medidos no modo thinking). Ele é lançado sob Apache 2.0, aceita texto e imagens e suporta uma janela de contexto de 256K tokens.',
          'O Qwen 3.5 raciocina antes de responder por padrão. Em um widget de chat, um backend de assistente de voz ou um autocompletar ao vivo, esse atraso é o principal custo de latência; por isso, desative o thinking pela configuração do seu ambiente de execução (o model card documenta o parâmetro enable_thinking como False). Inicie com ollama run qwen3.5:9b.',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: 'Opção Rápida: Qwen 3.5 4B',
        content: [
          '<strong>O Qwen 3.5 4B é a opção rápida para chat em tempo real quando memória ou latência importam mais que a qualidade máxima.</strong> Ele baixa a 3,3–4,0 GB no Ollama (ollama run qwen3.5:4b), mantém a janela de contexto de 256K e a entrada de imagens, e cabe em máquinas em que o 9B deixaria pouco espaço para o cache de contexto.',
          'O Gemma 4 E4B é a alternativa nesta classe de tamanho, com entrada de áudio e contexto de 128K. Seu download no Ollama é de 6,6–9,5 GB, maior do que o nome "4B" sugere; confira o tamanho exato da tag antes de escolhê-lo para uma máquina pequena.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Modelos da Classe 8B Comparados',
        content: [
          'A tabela mostra o tamanho de download e a janela de contexto publicados pelo Ollama para cada tag. As faixas de tamanho são os valores baixo e alto exibidos pelo Ollama; a página não informa qual quantização corresponde a cada extremo.',
          'O Qwen 3.6 não está na tabela: no Ollama ele existe apenas como modelos de 27B e 35B, então o Qwen 3.5 continua sendo a geração Qwen mais recente desta classe de tamanho.',
          'O Llama 3.1 8B (4,9 GB, contexto de 128K) é o menor download 8B e a referência estabelecida, mas é o modelo mais antigo da tabela e anterior às gerações Qwen 3.5 e Gemma 4. O Qwen3 8B (5,2 GB, contexto de 40K) é o 8B da geração anterior e continua adequado quando o 9B é grande demais.',
          'O Gemma 4 12B (7,7–8,0 GB, Apache 2.0) é o próximo passo para máquinas com memória sobrando. Seu MMLU Pro publicado é 77,2 contra 82,5 do Qwen 3.5 9B, mas os dois fabricantes usam configurações de teste diferentes e as pontuações não são diretamente comparáveis. Não fizemos testes de latência, então a classificação se baseia em benchmarks e tamanho, não em medição de velocidade.',
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Contexto'],
        rows: [
          { 'Modelo': 'Qwen 3.5 9B', 'Tag do Ollama': 'qwen3.5:9b', 'Download': '6,6–7,6 GB', 'Contexto': '256K' },
          { 'Modelo': 'Qwen 3.5 4B', 'Tag do Ollama': 'qwen3.5:4b', 'Download': '3,3–4,0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Gemma 4 E4B', 'Tag do Ollama': 'gemma4:e4b', 'Download': '6,6–9,5 GB', 'Contexto': '128K' },
          { 'Modelo': 'Gemma 4 12B', 'Tag do Ollama': 'gemma4:12b', 'Download': '7,7–8,0 GB', 'Contexto': '256K' },
          { 'Modelo': 'Llama 3.1 8B', 'Tag do Ollama': 'llama3.1:8b', 'Download': '4,9 GB', 'Contexto': '128K' },
          { 'Modelo': 'Qwen3 8B', 'Tag do Ollama': 'qwen3:8b', 'Download': '5,2 GB', 'Contexto': '40K' },
          { 'Modelo': 'Qwen3 4B', 'Tag do Ollama': 'qwen3:4b', 'Download': '2,5 GB', 'Contexto': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'Qual é o melhor modelo de 8B para chat local?',
            a: 'O Qwen 3.5 9B é o melhor modelo da classe 8B para chat local nesta comparação, usado com o thinking desativado. O Qwen 3.5 não tem tamanho 8B, o 9B é o mais próximo; Qwen3 8B e Llama 3.1 8B são as verdadeiras alternativas de 8B.',
          },
          {
            q: 'Existe um Qwen 3.5 8B?',
            a: 'Não. O Ollama lista o Qwen 3.5 nos tamanhos 0.8B, 2B, 4B, 9B, 27B, 35B e 122B. A geração anterior, Qwen3, tem o 8B (qwen3:8b, 5,2 GB).',
          },
          {
            q: 'Qual é o modelo de 8B mais inteligente?',
            a: 'Pelos benchmarks publicados pelos fabricantes, o Qwen 3.5 9B tem pontuações maiores que o Gemma 4 12B (MMLU-Pro 82,5, GPQA Diamond 81,7). O Gemma 4 12B informa MMLU Pro 77,2 e GPQA Diamond 78,8. Os números vêm de fabricantes e configurações de teste diferentes, então use-os como referência, não como prova de um ranking.',
          },
          {
            q: 'Qual modelo é o mais rápido para chat em tempo real?',
            a: 'No mesmo hardware, os menores downloads costumam ser os mais rápidos: Qwen3 4B (2,5 GB) e Qwen 3.5 4B (3,3–4,0 GB). A velocidade depende do hardware e do ambiente de execução; não medimos tokens por segundo, então meça o tempo até o primeiro token na sua própria máquina.',
          },
          {
            q: 'Por que desativar o thinking no chat em tempo real?',
            a: 'Os modelos Qwen 3.5 geram por padrão um texto de raciocínio antes da resposta final. Isso ajuda em problemas difíceis, mas atrasa o primeiro token visível da resposta, que é a espera que os usuários notam no chat. Desative o thinking em conversas simples e mantenha-o para tarefas que exigem raciocínio passo a passo.',
          },
          {
            q: 'Preciso de GPU para chat em tempo real com esses modelos?',
            a: 'Não necessariamente. Os modelos da classe 4B são pequenos o bastante para testar em uma CPU moderna, mas a velocidade varia muito conforme o hardware. Os modelos 9B e 12B precisam de cerca de 7–8 GB de memória só para os pesos; uma GPU, ou um Apple Silicon com memória unificada suficiente, oferece um chat mais fluido.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — dimensionamento de hardware para essa faixa de modelo',
          '[Melhor Modelo de Embedding para RAG Local](/prompt-bites/best-embedding-model-local-rag) — combinando um modelo de chat pequeno com recuperação',
          '[Qual Hardware Você Precisa para Fazer Fine-Tuning de um Modelo de 7B Localmente?](/prompt-bites/fine-tuning-7b-model-locally-hardware) — personalizando ainda mais um modelo pequeno',
        ],
      },
    },
  },
  zh: {
    theme: 'Model Comparisons',
    heroImage: '/images/best-local-llm-under-8b-realtime-chat-overview-hero-zh.webp',
    title: '实时聊天的最佳 8B 级本地模型是什么？',
    seoTitle: '2026 年实时聊天最佳本地 8B 大模型',
    metaDescription: 'Qwen 3.5 9B 是实时聊天的最佳 8B 级本地模型，Qwen 3.5 4B 是更快的选择。对比 Ollama 大小，以及 Gemma 4 和 Llama 3.1 8B。',
    publishDate: '2026-07-14',
    dateModified: '2026-10-17',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-17',
    current_models_mentioned: ['Qwen 3.5 9B', 'Qwen 3.5 4B', 'Gemma 4 E4B', 'Gemma 4 12B', 'Llama 3.1 8B', 'Qwen3 8B', 'Qwen3 4B'],
    current_hardware_mentioned: [],
    educationalLevel: 'Intermediate',
    audience: '在普通硬件上构建低延迟本地聊天功能的开发者',
    siblingBites: ['best-local-llm-6gb-vram', 'best-embedding-model-local-rag'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Qwen 3.5 9B 是实时聊天的最佳 8B 级本地模型</strong>——它的厂商公布基准分数很高，在 Ollama 上的下载大小为 6.6–7.6 GB。Qwen 3.5 没有 8B 规格，9B 最为接近。聊天时请关闭 thinking：它默认开启，会延迟第一个可见 token。对于仅有 CPU 或入门级 GPU 的机器，Qwen 3.5 4B（3.3–4.0 GB）是更快的选择。',
    toc: [
      { label: '最佳选择：Qwen 3.5 9B', anchor: '#best-pick' },
      { label: '更快的选择：Qwen 3.5 4B', anchor: '#faster-pick' },
      { label: '8B 级模型对比', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: '实时聊天的最佳 8B 模型是什么？',
        answer: '在本次对比中，关闭 thinking 的 Qwen 3.5 9B 是实时聊天的最佳 8B 级模型。Qwen 3.5 4B 是更快的选择；Gemma 4 E4B 和 Llama 3.1 8B 是备选。',
        bullets: [
          'Qwen 3.5 9B：Apache 2.0，256K 上下文，Ollama 上 6.6–7.6 GB（ollama run qwen3.5:9b）。',
          'Qwen 3.5 4B：3.3–4.0 GB——当延迟或内存比峰值质量更重要时的选择。',
          'Llama 3.1 8B 是最小的 8B 下载，仅 4.9 GB；内存充足时，Gemma 4 12B（7.7–8.0 GB）是更进一步的选择。',
        ],
        updatedDate: '2026-10',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '8B 级最佳选择：Qwen 3.5 9B——Apache 2.0，256K 上下文，Ollama 上 6.6–7.6 GB；不存在 Qwen 3.5 8B',
          '更快的选择：Qwen 3.5 4B（3.3–4.0 GB），适合仅有 CPU 或入门级 GPU 的配置',
          '备选：Gemma 4 E4B 和 12B、Llama 3.1 8B（4.9 GB），以及上一代的 Qwen3 8B',
          '聊天时关闭 thinking——Qwen 3.5 默认先推理再回答，会延迟第一个可见 token',
          '我们没有测量每秒 token 数：延迟取决于您的硬件，请在自己的机器上测量首个 token 的时间',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '最佳选择：Qwen 3.5 9B',
        content: [
          '<strong>Qwen 3.5 9B 是实时聊天的最佳 8B 级模型，因为它既拥有厂商公布的较高基准分数，下载大小又能装进约 8 GB 内存。</strong>阿里巴巴的模型卡给出 MMLU-Pro 82.5、GPQA Diamond 81.7 和 IFEval 91.5（厂商公布，在 thinking 模式下测得）。该模型以 Apache 2.0 发布，支持文本和图像输入，并支持 256K token 的上下文窗口。',
          'Qwen 3.5 默认先推理再回答。对于聊天组件、语音助手后端或实时自动补全，这一延迟是主要的延迟成本，因此请通过运行环境的 thinking 设置将其关闭（模型卡记录了将参数 enable_thinking 设为 False 的方法）。使用 ollama run qwen3.5:9b 启动。',
        ],
      },
      fasterPick: {
        id: 'faster-pick',
        title: '更快的选择：Qwen 3.5 4B',
        content: [
          '<strong>当内存或延迟比峰值质量更重要时，Qwen 3.5 4B 是实时聊天更快的选择。</strong>它在 Ollama 上的下载大小为 3.3–4.0 GB（ollama run qwen3.5:4b），保留 256K 上下文窗口和图像输入，适合 9B 会让上下文缓存空间所剩无几的机器。',
          'Gemma 4 E4B 是这一尺寸级别的备选，支持音频输入和 128K 上下文。它在 Ollama 上的下载为 6.6–9.5 GB，比“4B”这个名称所暗示的更大，选择它用于小型机器前，请先确认标签的具体大小。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '8B 级模型对比',
        content: [
          '表中列出了 Ollama 为每个标签公布的下载大小和上下文窗口。大小范围是 Ollama 为该标签显示的低值和高值；页面没有说明两端分别对应哪种量化。',
          '表中不含 Qwen 3.6：它在 Ollama 上只有 27B 和 35B 模型，因此在这一尺寸级别，Qwen 3.5 仍是最新的 Qwen 世代。',
          'Llama 3.1 8B（4.9 GB，128K 上下文）是最小的 8B 下载，也是公认的基准，但它是表中最旧的模型，早于 Qwen 3.5 和 Gemma 4 两代。Qwen3 8B（5.2 GB，40K 上下文）是上一代的 8B，在 9B 太大时仍然适用。',
          'Gemma 4 12B（7.7–8.0 GB，Apache 2.0）是内存充裕的机器的进阶选择。它公布的 MMLU Pro 为 77.2，Qwen 3.5 9B 为 82.5，但两家厂商的测试设置不同，分数不能直接比较。我们没有做延迟测试，因此该排序基于基准分数和大小，而不是速度测量。',
        ],
        columns: ['模型', 'Ollama 标签', '下载大小', '上下文'],
        rows: [
          { '模型': 'Qwen 3.5 9B', 'Ollama 标签': 'qwen3.5:9b', '下载大小': '6.6–7.6 GB', '上下文': '256K' },
          { '模型': 'Qwen 3.5 4B', 'Ollama 标签': 'qwen3.5:4b', '下载大小': '3.3–4.0 GB', '上下文': '256K' },
          { '模型': 'Gemma 4 E4B', 'Ollama 标签': 'gemma4:e4b', '下载大小': '6.6–9.5 GB', '上下文': '128K' },
          { '模型': 'Gemma 4 12B', 'Ollama 标签': 'gemma4:12b', '下载大小': '7.7–8.0 GB', '上下文': '256K' },
          { '模型': 'Llama 3.1 8B', 'Ollama 标签': 'llama3.1:8b', '下载大小': '4.9 GB', '上下文': '128K' },
          { '模型': 'Qwen3 8B', 'Ollama 标签': 'qwen3:8b', '下载大小': '5.2 GB', '上下文': '40K' },
          { '模型': 'Qwen3 4B', 'Ollama 标签': 'qwen3:4b', '下载大小': '2.5 GB', '上下文': '256K' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地聊天的最佳 8B 模型是什么？',
            a: '在本次对比中，关闭 thinking 的 Qwen 3.5 9B 是本地聊天的最佳 8B 级模型。Qwen 3.5 没有 8B 规格，9B 最为接近；Qwen3 8B 和 Llama 3.1 8B 是真正的 8B 备选。',
          },
          {
            q: '有 Qwen 3.5 8B 吗？',
            a: '没有。Ollama 列出的 Qwen 3.5 规格有 0.8B、2B、4B、9B、27B、35B 和 122B。上一代 Qwen3 有 8B（qwen3:8b，5.2 GB）。',
          },
          {
            q: '最聪明的 8B 模型是哪个？',
            a: '按厂商公布的基准，Qwen 3.5 9B 得分高于 Gemma 4 12B（MMLU-Pro 82.5，GPQA Diamond 81.7）。Gemma 4 12B 公布 MMLU Pro 77.2 和 GPQA Diamond 78.8。这些数字来自不同厂商和不同测试设置，请当作参考，而不是排名的证明。',
          },
          {
            q: '实时聊天哪个模型最快？',
            a: '在同一硬件上，下载最小的模型通常最快：Qwen3 4B（2.5 GB）和 Qwen 3.5 4B（3.3–4.0 GB）。速度取决于硬件和运行环境，我们没有测量每秒 token 数，请在自己的机器上测量首个 token 的时间。',
          },
          {
            q: '为什么实时聊天要关闭 thinking？',
            a: 'Qwen 3.5 模型默认会在最终答案前生成推理文本。这对难题有帮助，但会延迟第一个可见的回答 token，而这正是用户在聊天中能感受到的等待。简单对话请关闭 thinking，需要逐步推理的任务再开启。',
          },
          {
            q: '用这些模型做实时聊天需要 GPU 吗？',
            a: '并非必须。4B 级模型小到可以在现代 CPU 上尝试，但速度因硬件而差异很大。9B 和 12B 模型仅权重就需要约 7–8 GB 内存，使用 GPU 或统一内存足够的 Apple Silicon，聊天体验会更流畅。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[6 GB 显存的最佳本地 LLM](/prompt-bites/best-local-llm-6gb-vram) — 该模型档位的硬件规划',
          '[本地 RAG 的最佳嵌入模型](/prompt-bites/best-embedding-model-local-rag) — 将小型聊天模型与检索配对',
          '[本地微调 7B 模型需要什么硬件？](/prompt-bites/fine-tuning-7b-model-locally-hardware) — 进一步定制小模型',
        ],
      },
    },
  },
}
