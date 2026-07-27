import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Local Speech-to-Text for Smart Homes: Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-en.png',
    seoTitle: 'Whisper + Home Assistant 2026: Local STT Guide',
    intro:
      'Local Whisper gives Home Assistant private speech-to-text with no cloud: you pick a Whisper model size for your accuracy, speed, and hardware trade-off, then connect it to Assist over the Wyoming protocol. This guide covers why local STT matters, the Whisper model sizes, Wyoming setup, hardware needs, and how to tune accuracy.',
    metaDescription:
      'Add local speech-to-text to Home Assistant with Whisper: model sizes, hardware needs, accuracy vs speed, and Wyoming setup. Private, offline transcription.',
    twitterDescription:
      'Private speech-to-text for Home Assistant with local Whisper: pick a model size, connect over Wyoming, tune accuracy. No cloud.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users configuring local speech-to-text',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant local stt',
      'home assistant speech to text',
      'local stt home assistant',
      'faster-whisper home assistant',
      'whisper model size home assistant',
    ],
    leadAnswerBlock:
      '**Local Whisper gives Home Assistant private speech-to-text: install the Whisper add-on, pick a model size that fits your hardware, and connect it to Assist over the Wyoming protocol.** Smaller models are faster; larger models are more accurate. Nothing is sent to a cloud service.',
    quickAnswerTop: {
      en: {
        question: 'How do I add local speech-to-text to Home Assistant?',
        answer:
          'Install the Whisper (faster-whisper) add-on in Home Assistant, choose a model size, and it registers as a Wyoming speech-to-text service. Select it in your Assist pipeline. Transcription then runs entirely on your hardware, so no audio leaves the house.',
        bullets: [
          'Install the Whisper add-on (faster-whisper)',
          'Pick a model size: tiny/base/small/medium/large',
          'It connects to Assist via the Wyoming protocol',
          'Smaller = faster on CPU; larger = more accurate',
          'Multilingual transcription with no cloud',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Local STT', anchor: 'why-local-stt' },
      { label: 'Whisper Model Sizes', anchor: 'model-sizes' },
      { label: 'Wyoming Setup', anchor: 'wyoming-setup' },
      { label: 'Hardware Needs', anchor: 'hardware' },
      { label: 'Tuning Accuracy', anchor: 'tuning' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Install the Whisper add-on in Home Assistant, pick a model size for your hardware, and connect it to Assist over Wyoming for private speech-to-text.' },
      { type: 'plain-terms', content: 'Speech-to-text turns your spoken words into text the assistant can act on. Whisper is an open speech-recognition model that runs locally, so unlike cloud assistants, your voice recordings never leave your hardware. The main choice is model size: bigger is more accurate but needs more compute.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Whisper is an open speech-to-text model that runs locally — no audio leaves your hardware',
          'Use the Whisper (faster-whisper) add-on; it connects to Assist over Wyoming',
          'Model sizes range tiny → base → small → medium → large; bigger is more accurate, slower',
          'On CPU-only hardware, prefer tiny/base/small; a GPU makes medium/large practical',
          'Whisper is multilingual, so non-English commands transcribe without a cloud service',
          'Tune accuracy with a better microphone and the right model before going larger',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'Why Use Local Speech-to-Text?',
        content:
          '**Local speech-to-text keeps your voice recordings on your own hardware, so no audio is uploaded to a third party.** It also works offline and has no per-request cost.',
        items: [
          '**Privacy:** cloud assistants transmit and may retain recordings; local Whisper does not — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          '**Offline:** transcription works during internet outages.',
          '**No fees:** there is no usage charge for local transcription.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Which Whisper Model Size Should You Use?',
        content:
          '**Pick the smallest Whisper model that gives acceptable accuracy on your hardware — tiny/base/small for CPU-only, medium/large when you have a GPU.** Larger models improve accuracy on accents and noisy audio at the cost of speed.',
        columns: ['Model', 'Relative accuracy', 'Relative speed', 'Best for'],
        rows: [
          { 'Model': 'tiny', 'Relative accuracy': 'Lowest', 'Relative speed': 'Fastest', 'Best for': 'Low-power CPU, short commands' },
          { 'Model': 'base', 'Relative accuracy': 'Low', 'Relative speed': 'Very fast', 'Best for': 'Raspberry Pi, simple phrases' },
          { 'Model': 'small', 'Relative accuracy': 'Good', 'Relative speed': 'Fast', 'Best for': 'Mini PC CPU, everyday use' },
          { 'Model': 'medium', 'Relative accuracy': 'High', 'Relative speed': 'Moderate', 'Best for': 'GPU or strong CPU' },
          { 'Model': 'large', 'Relative accuracy': 'Highest', 'Relative speed': 'Slowest', 'Best for': 'GPU, accents/noisy rooms' },
        ],
        items: [
          'Use small as the default on a mini PC CPU; move to medium/large only if accuracy is lacking.',
          'Use tiny/base on a Raspberry Pi to keep latency usable.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-en.svg',
        imageCaption: 'Whisper model sizes by relative speed on Home Assistant: tiny and base are fastest on a Raspberry Pi, small is the mini PC CPU default, medium needs a GPU or strong CPU, and large is slowest but most accurate on accents and noise.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming Setup',
        content:
          '**The Whisper add-on exposes a Wyoming endpoint that Assist uses for speech-to-text.** Setup is install → pick model → select in pipeline.',
        numberedItems: [
          'Install the Whisper (faster-whisper) add-on from the add-on store.',
          'Set the model size in the add-on configuration and start it.',
          'The add-on registers as a Wyoming speech-to-text service automatically.',
          'In Settings → Voice assistants, set Whisper as the STT engine for your Assist pipeline.',
          'Test transcription from the Assist debug tools before adding voice hardware.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Needs',
        content:
          '**Whisper runs on CPU for small models and benefits from a GPU for medium/large models.** Match model size to the box that hosts it.',
        items: [
          'Raspberry Pi: stick to tiny/base for acceptable latency.',
          'Mini PC (CPU): small works well; medium is possible but slower — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          'With a GPU/NPU: medium and large become practical for high accuracy.',
          'You can run Whisper on a separate, more powerful machine via Wyoming if your hub is a Pi.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-en.svg',
        imageCaption: 'Decision tree for matching Whisper model size to hardware: no GPU means a Raspberry Pi runs tiny/base while a mini PC CPU runs small; a GPU or NPU makes medium practical and large for accents or noisy rooms.',
      },
      tuning: {
        id: 'tuning',
        title: 'Tuning Accuracy',
        content:
          '**Improve a good microphone and the right model before reaching for the largest Whisper.** Audio quality often matters more than model size for home commands.',
        items: [
          'Use a quality microphone or voice-satellite hardware close to the speaker.',
          'Reduce background noise where the microphone sits.',
          'Set the correct language in the add-on to avoid mis-transcription.',
          'Step up one model size at a time and re-test rather than jumping to large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which Whisper model should I use for Home Assistant?', a: 'Use small as the default on a mini PC CPU, tiny or base on a Raspberry Pi, and medium or large only if you have a GPU and need higher accuracy on accents or noisy rooms. Step up one size at a time and re-test.' },
          { q: 'Do I need a GPU for local Whisper?', a: 'No for small and below — those run on CPU. A GPU mainly makes medium and large models fast enough for real-time use. You can also offload Whisper to a more powerful machine over the Wyoming protocol.' },
          { q: 'How accurate is local Whisper offline?', a: 'Accuracy is strong with the right model and a good microphone; larger models handle accents and noise better. For clear home commands, the small model on a mini PC is usually accurate enough, and it runs fully offline.' },
          { q: 'Is local Whisper multilingual?', a: 'Yes. Whisper supports many languages, so non-English commands transcribe locally without any cloud service. Set the language in the add-on configuration for best results.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — the full voice stack Whisper fits into',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — add the LLM brain',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — sizing the box that runs Whisper',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: model and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local Speech-to-Text for Smart Homes: Whisper + HA (2026)',
      description: 'Add local speech-to-text to Home Assistant with Whisper: model sizes, hardware needs, accuracy vs speed, and Wyoming setup. Private, offline transcription.',
      url: 'https://www.promptquorum.com/smart-home/local-whisper-home-assistant',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Speech-to-text' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which Whisper model should I use for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Use small as the default on a mini PC CPU, tiny or base on a Raspberry Pi, and medium or large only with a GPU when you need higher accuracy on accents or noise.' } },
        { '@type': 'Question', name: 'Do I need a GPU for local Whisper?', acceptedAnswer: { '@type': 'Answer', text: 'No for small and below — those run on CPU. A GPU mainly makes medium and large fast enough for real-time use. You can also offload Whisper over Wyoming.' } },
        { '@type': 'Question', name: 'How accurate is local Whisper offline?', acceptedAnswer: { '@type': 'Answer', text: 'Strong with the right model and microphone; larger models handle accents and noise better. The small model on a mini PC is usually accurate enough for clear home commands, fully offline.' } },
        { '@type': 'Question', name: 'Is local Whisper multilingual?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Whisper supports many languages, so non-English commands transcribe locally with no cloud. Set the language in the add-on configuration.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'تحويل الكلام إلى نص محليًا للمنازل الذكية: ⁨Whisper + HA⁩ (⁨2026⁩)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-ar.png',
    seoTitle: '⁨Whisper + Home Assistant 2026⁩: تحويل الكلام محليًا',
    intro:
      'يمنح Whisper المحلي Home Assistant خاصية تحويل الكلام إلى نص بشكل خاص دون سحابة: تختار حجم نموذج Whisper لتحقيق التوازن بين الدقة والسرعة والأجهزة، ثم تربطه بـ Assist عبر بروتوكول Wyoming. يتناول هذا الدليل سبب أهمية تحويل الكلام إلى نص المحلي، وأحجام نماذج Whisper، وإعداد Wyoming، ومتطلبات الأجهزة، وكيفية ضبط الدقة.',
    metaDescription:
      '5 أحجام نماذج Whisper لـ Home Assistant — tiny على CPU، large مع GPU. اربط بـ Assist عبر Wyoming لنسخ صوتي خاص دون إنترنت.',
    twitterDescription:
      'تحويل كلام إلى نص خاص لـ Home Assistant مع Whisper المحلي: اختر حجم النموذج، اربط عبر Wyoming، اضبط الدقة. بدون سحابة.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يُعدّون تحويل الكلام إلى نص محليًا',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant تحويل كلام إلى نص محلي',
      'home assistant تحويل كلام إلى نص',
      'تحويل كلام إلى نص محلي home assistant',
      'faster-whisper home assistant',
      'حجم نموذج whisper home assistant',
    ],
    leadAnswerBlock:
      '**يمنح Whisper المحلي Home Assistant خاصية تحويل الكلام إلى نص بشكل خاص: ثبِّت إضافة Whisper، واختر حجم النموذج المناسب لأجهزتك، واربطه بـ Assist عبر بروتوكول Wyoming.** النماذج الأصغر أسرع؛ النماذج الأكبر أدق. لا شيء يُرسَل إلى خدمة سحابية.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أضيف تحويل الكلام إلى نص محليًا لـ Home Assistant؟',
        answer:
          'ثبِّت إضافة Whisper (faster-whisper) في Home Assistant، واختر حجم النموذج، ويسجِّل نفسه تلقائيًا كخدمة تحويل كلام إلى نص عبر Wyoming. اختره في خط أنابيب Assist. يعمل النسخ بالكامل على أجهزتك لذا لا يغادر أي صوت المنزل.',
        bullets: [
          'ثبِّت إضافة Whisper (faster-whisper)',
          'اختر حجم النموذج: tiny/base/small/medium/large',
          'يتصل بـ Assist عبر بروتوكول Wyoming',
          'الأصغر = أسرع على المعالج المركزي؛ الأكبر = أدق',
          'نسخ متعدد اللغات بدون سحابة',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا تحويل الكلام إلى نص المحلي', anchor: 'why-local-stt' },
      { label: 'أحجام نماذج Whisper', anchor: 'model-sizes' },
      { label: 'إعداد Wyoming', anchor: 'wyoming-setup' },
      { label: 'متطلبات الأجهزة', anchor: 'hardware' },
      { label: 'ضبط الدقة', anchor: 'tuning' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ثبِّت إضافة Whisper في Home Assistant، واختر حجم النموذج لأجهزتك، واربطه بـ Assist عبر Wyoming لتحويل كلام إلى نص خاص.' },
      { type: 'plain-terms', content: 'تحويل الكلام إلى نص يحوِّل كلامك المنطوق إلى نص يمكن للمساعد التصرف بناءً عليه. Whisper نموذج تعرف على الكلام مفتوح المصدر يعمل محليًا، لذا على خلاف المساعدات السحابية، تسجيلاتك الصوتية لا تغادر أجهزتك أبدًا. الاختيار الرئيسي هو حجم النموذج: الأكبر أدق لكن يحتاج معالجة أكثر.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Whisper نموذج تحويل كلام إلى نص مفتوح المصدر يعمل محليًا — لا يغادر أي صوت أجهزتك',
          'استخدم إضافة Whisper (faster-whisper)؛ يتصل بـ Assist عبر Wyoming',
          'أحجام النماذج من tiny → base → small → medium → large؛ الأكبر أدق، أبطأ',
          'على الأجهزة التي تعتمد على المعالج المركزي فقط، فضِّل tiny/base/small؛ GPU يجعل medium/large عمليًا',
          'Whisper متعدد اللغات، لذا الأوامر غير الإنجليزية تُنسَخ بدون خدمة سحابية',
          'حسِّن بميكروفون أفضل والنموذج الصحيح قبل الانتقال لنموذج أكبر',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'لماذا تستخدم تحويل الكلام إلى نص المحلي؟',
        content:
          '**يحتفظ تحويل الكلام إلى نص المحلي بتسجيلاتك الصوتية على أجهزتك الخاصة، لذا لا يُرفَع أي صوت إلى طرف ثالث.** كما يعمل دون إنترنت وليس له تكلفة لكل طلب.',
        items: [
          '**الخصوصية:** تنقل المساعدات السحابية وقد تحتفظ بالتسجيلات؛ Whisper المحلي لا يفعل ذلك — راجع [مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks).',
          '**دون إنترنت:** يعمل النسخ أثناء انقطاع الإنترنت.',
          '**بدون رسوم:** لا توجد رسوم استخدام للنسخ المحلي.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'أي حجم نموذج Whisper يجب أن تستخدم؟',
        content:
          '**اختر أصغر نموذج Whisper يعطي دقةً مقبولة على أجهزتك — tiny/base/small للمعالج المركزي فقط، وmedium/large عند توفر GPU.** النماذج الأكبر تحسِّن الدقة على اللهجات والصوت الصاخب على حساب السرعة.',
        columns: ['النموذج', 'الدقة النسبية', 'السرعة النسبية', 'الأنسب لـ'],
        rows: [
          { 'النموذج': 'tiny', 'الدقة النسبية': 'الأدنى', 'السرعة النسبية': 'الأسرع', 'الأنسب لـ': 'معالج مركزي منخفض الطاقة، أوامر قصيرة' },
          { 'النموذج': 'base', 'الدقة النسبية': 'منخفضة', 'السرعة النسبية': 'سريع جدًا', 'الأنسب لـ': 'Raspberry Pi، عبارات بسيطة' },
          { 'النموذج': 'small', 'الدقة النسبية': 'جيدة', 'السرعة النسبية': 'سريع', 'الأنسب لـ': 'معالج جهاز كمبيوتر مصغر، الاستخدام اليومي' },
          { 'النموذج': 'medium', 'الدقة النسبية': 'عالية', 'السرعة النسبية': 'متوسط', 'الأنسب لـ': 'GPU أو معالج مركزي قوي' },
          { 'النموذج': 'large', 'الدقة النسبية': 'الأعلى', 'السرعة النسبية': 'الأبطأ', 'الأنسب لـ': 'GPU، لهجات/غرف صاخبة' },
        ],
        items: [
          'استخدم small كإعداد افتراضي على معالج جهاز كمبيوتر مصغر؛ انتقل إلى medium/large فقط إذا كانت الدقة غير كافية.',
          'استخدم tiny/base على Raspberry Pi لإبقاء الكمون مقبولًا.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-ar.svg',
        imageCaption: 'أحجام نماذج Whisper حسب السرعة النسبية في Home Assistant: tiny وbase الأسرع على Raspberry Pi، وsmall الافتراضي لمعالج كمبيوتر مصغر، وmedium يحتاج GPU أو معالجًا قويًا، وlarge الأبطأ لكن الأدق مع اللهجات والضوضاء.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'إعداد Wyoming',
        content:
          '**تعرض إضافة Whisper نقطة نهاية Wyoming يستخدمها Assist لتحويل الكلام إلى نص.** الإعداد هو: ثبِّت ← اختر النموذج ← اختره في خط الأنابيب.',
        numberedItems: [
          'ثبِّت إضافة Whisper (faster-whisper) من متجر الإضافات.',
          'اضبط حجم النموذج في إعداد الإضافة وشغِّلها.',
          'تسجِّل الإضافة نفسها تلقائيًا كخدمة تحويل كلام إلى نص عبر Wyoming.',
          'في الإعدادات ← المساعدون الصوتيون، اضبط Whisper كمحرك STT لخط أنابيب Assist.',
          'اختبر النسخ من أدوات التصحيح في Assist قبل إضافة أجهزة الصوت.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة',
        content:
          '**يعمل Whisper على المعالج المركزي للنماذج الصغيرة ويستفيد من GPU للنماذج medium/large.** طابق حجم النموذج مع الجهاز الذي يستضيفه.',
        items: [
          'Raspberry Pi: التزم بـ tiny/base لكمون مقبول.',
          'جهاز كمبيوتر مصغر (معالج مركزي): small يعمل جيدًا؛ medium ممكن لكن أبطأ — راجع [أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          'مع GPU/NPU: يصبح medium وlarge عمليًا للدقة العالية.',
          'يمكنك تشغيل Whisper على جهاز أقوى منفصل عبر Wyoming إذا كان مركزك Raspberry Pi.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-ar.svg',
        imageCaption: 'شجرة قرار لمطابقة حجم نموذج Whisper مع الجهاز: بدون GPU يشغّل Raspberry Pi نموذج tiny/base بينما يشغّل الكمبيوتر المصغر نموذج small؛ ووجود GPU أو NPU يجعل medium عمليًا وlarge مناسبًا للهجات أو الغرف الصاخبة.',
      },
      tuning: {
        id: 'tuning',
        title: 'ضبط الدقة',
        content:
          '**حسِّن بميكروفون جيد والنموذج الصحيح قبل الانتقال لأكبر نموذج Whisper.** جودة الصوت كثيرًا ما تهم أكثر من حجم النموذج لأوامر المنزل.',
        items: [
          'استخدم ميكروفونًا عالي الجودة أو أجهزة أقمار صوتية قريبة من المتحدث.',
          'قلِّل ضوضاء الخلفية حيث يوجد الميكروفون.',
          'اضبط اللغة الصحيحة في الإضافة لتجنب النسخ الخاطئ.',
          'انتقل حجمًا واحدًا في كل مرة وأعِد الاختبار بدلًا من القفز مباشرة إلى large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'أي نموذج Whisper يجب أن أستخدم لـ Home Assistant؟', a: 'استخدم small كإعداد افتراضي على معالج جهاز كمبيوتر مصغر، وtiny أو base على Raspberry Pi، وmedium أو large فقط إذا كان لديك GPU وتحتاج دقة أعلى على اللهجات أو الغرف الصاخبة. انتقل حجمًا واحدًا في كل مرة وأعِد الاختبار.' },
          { q: 'هل أحتاج إلى GPU لـ Whisper المحلي؟', a: 'لا للنماذج small وما دونها — تلك تعمل على المعالج المركزي. GPU بشكل رئيسي يجعل النماذج medium وlarge سريعة بما يكفي للاستخدام الفوري. يمكنك أيضًا تفريغ Whisper إلى جهاز أقوى عبر بروتوكول Wyoming.' },
          { q: 'ما دقة Whisper المحلي دون إنترنت؟', a: 'الدقة قوية مع النموذج الصحيح وميكروفون جيد؛ النماذج الأكبر تتعامل بشكل أفضل مع اللهجات والضوضاء. لأوامر المنزل الواضحة، النموذج small على جهاز كمبيوتر مصغر عادةً دقيق بما يكفي، ويعمل بالكامل دون إنترنت.' },
          { q: 'هل Whisper المحلي متعدد اللغات؟', a: 'نعم. يدعم Whisper لغات كثيرة، لذا الأوامر غير الإنجليزية تُنسَخ محليًا بدون أي خدمة سحابية. اضبط اللغة في إعداد الإضافة للحصول على أفضل النتائج.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[بناء مساعد صوتي محلي كامل](/ar/smart-home/local-voice-assistant-smart-home) — البنية الصوتية الكاملة التي يناسبها Whisper',
          '[تشغيل منزلك الذكي بنموذج لغوي محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — أضف عقل النموذج اللغوي',
          '[أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — تحجيم الجهاز الذي يُشغِّل Whisper',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — عبر المجموعات: عمق النموذج والأجهزة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تحويل الكلام إلى نص محليًا للمنازل الذكية: Whisper + HA (2026)',
      description: 'أضف تحويل الكلام إلى نص محليًا لـ Home Assistant مع Whisper: أحجام النماذج ومتطلبات الأجهزة والدقة مقابل السرعة وإعداد Wyoming. نسخ خاص دون إنترنت.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-whisper-home-assistant',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'تحويل الكلام إلى نص' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'أي نموذج Whisper يجب أن أستخدم لـ Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'استخدم small كإعداد افتراضي على معالج جهاز كمبيوتر مصغر، وtiny أو base على Raspberry Pi، وmedium أو large فقط مع GPU عند الحاجة لدقة أعلى على اللهجات أو الضوضاء.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى GPU لـ Whisper المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'لا للنماذج small وما دونها — تلك تعمل على المعالج المركزي. GPU بشكل رئيسي يجعل medium وlarge سريعة بما يكفي للاستخدام الفوري. يمكنك أيضًا تفريغ Whisper عبر Wyoming.' } },
        { '@type': 'Question', name: 'ما دقة Whisper المحلي دون إنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'قوية مع النموذج الصحيح والميكروفون؛ النماذج الأكبر تتعامل بشكل أفضل مع اللهجات والضوضاء. النموذج small على جهاز كمبيوتر مصغر عادةً دقيق بما يكفي لأوامر المنزل الواضحة، بالكامل دون إنترنت.' } },
        { '@type': 'Question', name: 'هل Whisper المحلي متعدد اللغات؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يدعم Whisper لغات كثيرة، لذا الأوامر غير الإنجليزية تُنسَخ محليًا بدون سحابة. اضبط اللغة في إعداد الإضافة.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Lokales Sprache-zu-Text fürs Smart Home: Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-de.png',
    seoTitle: 'Whisper + Home Assistant 2026: Lokales-STT-Leitfaden',
    intro:
      'Lokales Whisper gibt Home Assistant privates Sprache-zu-Text ohne Cloud: Sie wählen eine Whisper-Modellgröße für Ihren Kompromiss aus Genauigkeit, Tempo und Hardware und verbinden es dann über das Wyoming-Protokoll mit Assist. Dieser Leitfaden behandelt, warum lokales STT wichtig ist, die Whisper-Modellgrößen, die Wyoming-Einrichtung, den Hardware-Bedarf und wie Sie die Genauigkeit abstimmen.',
    metaDescription:
      'Whisper für lokales Sprache-zu-Text in Home Assistant 2026: Modellgröße wählen, Wyoming konfigurieren, offline transkribieren. Kein Cloud-Dienst.',
    twitterDescription:
      'Privates Sprache-zu-Text für Home Assistant mit lokalem Whisper: eine Modellgröße wählen, über Wyoming verbinden, Genauigkeit abstimmen. Keine Cloud.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die lokales Sprache-zu-Text konfigurieren',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant lokales stt',
      'home assistant sprache zu text',
      'lokales stt home assistant',
      'faster-whisper home assistant',
      'whisper modellgröße home assistant',
    ],
    leadAnswerBlock:
      '**Lokales Whisper gibt Home Assistant privates Sprache-zu-Text: Installieren Sie das Whisper-Add-on, wählen Sie eine zu Ihrer Hardware passende Modellgröße und verbinden Sie es über das Wyoming-Protokoll mit Assist.** Kleinere Modelle sind schneller; größere sind genauer. Nichts wird an einen Cloud-Dienst gesendet.',
    quickAnswerTop: {
      de: {
        question: 'Wie füge ich Home Assistant lokales Sprache-zu-Text hinzu?',
        answer:
          'Installieren Sie das Whisper-(faster-whisper-)Add-on in Home Assistant, wählen Sie eine Modellgröße, und es registriert sich als Wyoming-Sprache-zu-Text-Dienst. Wählen Sie es in Ihrer Assist-Pipeline. Die Transkription läuft dann vollständig auf Ihrer Hardware, sodass kein Audio das Haus verlässt.',
        bullets: [
          'Das Whisper-Add-on (faster-whisper) installieren',
          'Eine Modellgröße wählen: tiny/base/small/medium/large',
          'Es verbindet sich über das Wyoming-Protokoll mit Assist',
          'Kleiner = schneller auf der CPU; größer = genauer',
          'Mehrsprachige Transkription ohne Cloud',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum lokales STT', anchor: 'why-local-stt' },
      { label: 'Whisper-Modellgrößen', anchor: 'model-sizes' },
      { label: 'Wyoming-Einrichtung', anchor: 'wyoming-setup' },
      { label: 'Hardware-Bedarf', anchor: 'hardware' },
      { label: 'Genauigkeit abstimmen', anchor: 'tuning' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Installieren Sie das Whisper-Add-on in Home Assistant, wählen Sie eine zur Hardware passende Modellgröße und verbinden Sie es für privates Sprache-zu-Text über Wyoming mit Assist.' },
      { type: 'plain-terms', content: 'Sprache-zu-Text verwandelt Ihre gesprochenen Worte in Text, auf den der Assistent reagieren kann. Whisper ist ein offenes Spracherkennungsmodell, das lokal läuft, sodass Ihre Sprachaufnahmen anders als bei Cloud-Assistenten Ihre Hardware nie verlassen. Die Hauptwahl ist die Modellgröße: größer ist genauer, braucht aber mehr Rechenleistung.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Whisper ist ein offenes Sprache-zu-Text-Modell, das lokal läuft – kein Audio verlässt Ihre Hardware',
          'Nutzen Sie das Whisper-(faster-whisper-)Add-on; es verbindet sich über Wyoming mit Assist',
          'Modellgrößen reichen tiny → base → small → medium → large; größer ist genauer, langsamer',
          'Auf reiner CPU-Hardware bevorzugen Sie tiny/base/small; eine GPU macht medium/large praktikabel',
          'Whisper ist mehrsprachig, sodass nicht-englische Befehle ohne Cloud-Dienst transkribiert werden',
          'Stimmen Sie Genauigkeit mit einem besseren Mikrofon und dem richtigen Modell ab, bevor Sie größer werden',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'Warum lokales Sprache-zu-Text nutzen?',
        content:
          '**Lokales Sprache-zu-Text hält Ihre Sprachaufnahmen auf Ihrer eigenen Hardware, sodass kein Audio an einen Dritten hochgeladen wird.** Es funktioniert auch offline und hat keine Kosten pro Anfrage.',
        items: [
          '**Datenschutz:** Cloud-Assistenten übertragen und behalten eventuell Aufnahmen; lokales Whisper nicht – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          '**Offline:** Die Transkription funktioniert bei Internetausfällen.',
          '**Keine Gebühren:** Für lokale Transkription gibt es keine Nutzungsgebühr.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Welche Whisper-Modellgröße sollten Sie nutzen?',
        content:
          '**Wählen Sie das kleinste Whisper-Modell, das auf Ihrer Hardware akzeptable Genauigkeit liefert – tiny/base/small für reine CPU, medium/large, wenn Sie eine GPU haben.** Größere Modelle verbessern die Genauigkeit bei Akzenten und verrauschtem Audio auf Kosten des Tempos.',
        columns: ['Modell', 'Relative Genauigkeit', 'Relatives Tempo', 'Am besten für'],
        rows: [
          { 'Modell': 'tiny', 'Relative Genauigkeit': 'Am niedrigsten', 'Relatives Tempo': 'Am schnellsten', 'Am besten für': 'Stromsparende CPU, kurze Befehle' },
          { 'Modell': 'base', 'Relative Genauigkeit': 'Niedrig', 'Relatives Tempo': 'Sehr schnell', 'Am besten für': 'Raspberry Pi, einfache Phrasen' },
          { 'Modell': 'small', 'Relative Genauigkeit': 'Gut', 'Relatives Tempo': 'Schnell', 'Am besten für': 'Mini-PC-CPU, Alltagsnutzung' },
          { 'Modell': 'medium', 'Relative Genauigkeit': 'Hoch', 'Relatives Tempo': 'Mäßig', 'Am besten für': 'GPU oder starke CPU' },
          { 'Modell': 'large', 'Relative Genauigkeit': 'Am höchsten', 'Relatives Tempo': 'Am langsamsten', 'Am besten für': 'GPU, Akzente/laute Räume' },
        ],
        items: [
          'Nutzen Sie small als Standard auf einer Mini-PC-CPU; wechseln Sie nur zu medium/large, wenn die Genauigkeit fehlt.',
          'Nutzen Sie tiny/base auf einem Raspberry Pi, um die Latenz nutzbar zu halten.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-de.svg',
        imageCaption: 'Whisper-Modellgrößen nach relativer Geschwindigkeit in Home Assistant: tiny und base sind auf einem Raspberry Pi am schnellsten, small ist der Standard für Mini-PC-CPUs, medium braucht eine GPU oder starke CPU, und large ist am langsamsten, aber am genauesten bei Akzenten und Störgeräuschen.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming-Einrichtung',
        content:
          '**Das Whisper-Add-on stellt einen Wyoming-Endpunkt bereit, den Assist für Sprache-zu-Text nutzt.** Die Einrichtung ist: installieren → Modell wählen → in der Pipeline auswählen.',
        numberedItems: [
          'Installieren Sie das Whisper-(faster-whisper-)Add-on aus dem Add-on-Store.',
          'Stellen Sie die Modellgröße in der Add-on-Konfiguration ein und starten Sie es.',
          'Das Add-on registriert sich automatisch als Wyoming-Sprache-zu-Text-Dienst.',
          'Setzen Sie unter Einstellungen → Sprachassistenten Whisper als STT-Engine für Ihre Assist-Pipeline.',
          'Testen Sie die Transkription über die Assist-Debug-Tools, bevor Sie Sprach-Hardware hinzufügen.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Bedarf',
        content:
          '**Whisper läuft für kleine Modelle auf der CPU und profitiert bei medium/large-Modellen von einer GPU.** Passen Sie die Modellgröße an das Gerät an, das es hostet.',
        items: [
          'Raspberry Pi: bleiben Sie bei tiny/base für akzeptable Latenz.',
          'Mini-PC (CPU): small funktioniert gut; medium ist möglich, aber langsamer – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          'Mit einer GPU/NPU: medium und large werden für hohe Genauigkeit praktikabel.',
          'Sie können Whisper über Wyoming auf einer separaten, leistungsfähigeren Maschine betreiben, wenn Ihr Hub ein Pi ist.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-de.svg',
        imageCaption: 'Entscheidungsbaum zur Zuordnung der Whisper-Modellgröße zur Hardware: ohne GPU läuft auf einem Raspberry Pi tiny/base, während ein Mini-PC small ausführt; eine GPU oder NPU macht medium praktikabel und large geeignet für Akzente oder laute Räume.',
      },
      tuning: {
        id: 'tuning',
        title: 'Genauigkeit abstimmen',
        content:
          '**Verbessern Sie ein gutes Mikrofon und das richtige Modell, bevor Sie zum größten Whisper greifen.** Die Audioqualität zählt bei Heimbefehlen oft mehr als die Modellgröße.',
        items: [
          'Nutzen Sie ein hochwertiges Mikrofon oder Sprach-Satelliten-Hardware nahe am Sprecher.',
          'Reduzieren Sie Hintergrundgeräusche dort, wo das Mikrofon sitzt.',
          'Stellen Sie die korrekte Sprache im Add-on ein, um Fehltranskriptionen zu vermeiden.',
          'Erhöhen Sie die Modellgröße jeweils um eine Stufe und testen Sie erneut, statt zu large zu springen.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Welches Whisper-Modell sollte ich für Home Assistant nutzen?', a: 'Nutzen Sie small als Standard auf einer Mini-PC-CPU, tiny oder base auf einem Raspberry Pi und medium oder large nur, wenn Sie eine GPU haben und höhere Genauigkeit bei Akzenten oder lauten Räumen brauchen. Erhöhen Sie jeweils eine Stufe und testen Sie erneut.' },
          { q: 'Brauche ich eine GPU für lokales Whisper?', a: 'Nein für small und kleiner – die laufen auf der CPU. Eine GPU macht vor allem medium- und large-Modelle schnell genug für die Echtzeitnutzung. Sie können Whisper auch über das Wyoming-Protokoll auf eine leistungsfähigere Maschine auslagern.' },
          { q: 'Wie genau ist lokales Whisper offline?', a: 'Die Genauigkeit ist mit dem richtigen Modell und einem guten Mikrofon stark; größere Modelle bewältigen Akzente und Rauschen besser. Für klare Heimbefehle ist das small-Modell auf einem Mini-PC meist genau genug, und es läuft vollständig offline.' },
          { q: 'Ist lokales Whisper mehrsprachig?', a: 'Ja. Whisper unterstützt viele Sprachen, sodass nicht-englische Befehle lokal ohne Cloud-Dienst transkribiert werden. Stellen Sie die Sprache in der Add-on-Konfiguration für die besten Ergebnisse ein.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – der vollständige Sprach-Stack, in den Whisper passt',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – das LLM-Gehirn hinzufügen',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – das Gerät dimensionieren, das Whisper betreibt',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: Modell- und Hardware-Tiefe',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokales Sprache-zu-Text fürs Smart Home: Whisper + HA (2026)',
      description: 'Whisper für lokales Sprache-zu-Text in Home Assistant 2026: Modellgröße wählen, Wyoming konfigurieren, offline transkribieren. Kein Cloud-Dienst.',
      url: 'https://www.promptquorum.com/de/smart-home/local-whisper-home-assistant',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Sprache-zu-Text' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welches Whisper-Modell sollte ich für Home Assistant nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'small als Standard auf einer Mini-PC-CPU, tiny oder base auf einem Raspberry Pi und medium oder large nur mit einer GPU, wenn Sie höhere Genauigkeit bei Akzenten oder Rauschen brauchen.' } },
        { '@type': 'Question', name: 'Brauche ich eine GPU für lokales Whisper?', acceptedAnswer: { '@type': 'Answer', text: 'Nein für small und kleiner – die laufen auf der CPU. Eine GPU macht vor allem medium und large schnell genug für die Echtzeitnutzung. Sie können Whisper auch über Wyoming auslagern.' } },
        { '@type': 'Question', name: 'Wie genau ist lokales Whisper offline?', acceptedAnswer: { '@type': 'Answer', text: 'Stark mit dem richtigen Modell und Mikrofon; größere Modelle bewältigen Akzente und Rauschen besser. Das small-Modell auf einem Mini-PC ist für klare Heimbefehle meist genau genug, vollständig offline.' } },
        { '@type': 'Question', name: 'Ist lokales Whisper mehrsprachig?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Whisper unterstützt viele Sprachen, sodass nicht-englische Befehle lokal ohne Cloud transkribiert werden. Stellen Sie die Sprache in der Add-on-Konfiguration ein.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Voz-a-Texto Local para Smart Homes: Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-es.png',
    seoTitle: 'Whisper + Home Assistant 2026: Guía de STT Local',
    intro:
      'Whisper local da a Home Assistant voz-a-texto privado sin nube: eliges un tamaño de modelo Whisper para tu equilibrio de precisión, velocidad y hardware, y luego lo conectas a Assist sobre el protocolo Wyoming. Esta guía cubre por qué importa el STT local, los tamaños de modelo Whisper, la configuración de Wyoming, las necesidades de hardware y cómo ajustar la precisión.',
    metaDescription:
      'Whisper en Home Assistant 2026: voz-a-texto local, tamaños de modelo, hardware necesario y ajuste de precisión. Sin nube, transcripción offline.',
    twitterDescription:
      'Voz-a-texto privado para Home Assistant con Whisper local: elige un tamaño de modelo, conecta sobre Wyoming, ajusta la precisión. Sin nube.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que configuran voz-a-texto local',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant stt local',
      'home assistant voz a texto',
      'stt local home assistant',
      'faster-whisper home assistant',
      'tamaño de modelo whisper home assistant',
    ],
    leadAnswerBlock:
      '**Whisper local da a Home Assistant voz-a-texto privado: instala el add-on de Whisper, elige un tamaño de modelo que se ajuste a tu hardware y conéctalo a Assist sobre el protocolo Wyoming.** Los modelos más pequeños son más rápidos; los más grandes son más precisos. Nada se envía a un servicio en la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo añado voz-a-texto local a Home Assistant?',
        answer:
          'Instala el add-on de Whisper (faster-whisper) en Home Assistant, elige un tamaño de modelo, y se registra como un servicio de voz-a-texto Wyoming. Selecciónalo en tu pipeline de Assist. La transcripción corre entonces enteramente en tu hardware, así que ningún audio sale de casa.',
        bullets: [
          'Instala el add-on de Whisper (faster-whisper)',
          'Elige un tamaño de modelo: tiny/base/small/medium/large',
          'Se conecta a Assist vía el protocolo Wyoming',
          'Más pequeño = más rápido en CPU; más grande = más preciso',
          'Transcripción multilingüe sin nube',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué STT local', anchor: 'why-local-stt' },
      { label: 'Tamaños de modelo Whisper', anchor: 'model-sizes' },
      { label: 'Configuración de Wyoming', anchor: 'wyoming-setup' },
      { label: 'Necesidades de hardware', anchor: 'hardware' },
      { label: 'Ajustar la precisión', anchor: 'tuning' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Instala el add-on de Whisper en Home Assistant, elige un tamaño de modelo para tu hardware y conéctalo a Assist sobre Wyoming para voz-a-texto privado.' },
      { type: 'plain-terms', content: 'La voz-a-texto convierte tus palabras habladas en texto sobre el que el asistente puede actuar. Whisper es un modelo abierto de reconocimiento de voz que corre localmente, así que a diferencia de los asistentes en la nube, tus grabaciones de voz nunca salen de tu hardware. La elección principal es el tamaño del modelo: más grande es más preciso pero necesita más cómputo.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Whisper es un modelo abierto de voz-a-texto que corre localmente — ningún audio sale de tu hardware',
          'Usa el add-on de Whisper (faster-whisper); se conecta a Assist sobre Wyoming',
          'Los tamaños de modelo van tiny → base → small → medium → large; más grande es más preciso, más lento',
          'En hardware solo-CPU, prefiere tiny/base/small; una GPU hace práctico medium/large',
          'Whisper es multilingüe, así que los comandos en otros idiomas se transcriben sin un servicio en la nube',
          'Ajusta la precisión con un mejor micrófono y el modelo correcto antes de ir más grande',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: '¿Por qué usar voz-a-texto local?',
        content:
          '**La voz-a-texto local mantiene tus grabaciones de voz en tu propio hardware, así que ningún audio se sube a un tercero.** También funciona sin conexión y no tiene coste por petición.',
        items: [
          '**Privacidad:** los asistentes en la nube transmiten y pueden retener grabaciones; Whisper local no — consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
          '**Sin conexión:** la transcripción funciona durante caídas de internet.',
          '**Sin cuotas:** no hay cargo por uso para la transcripción local.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: '¿Qué tamaño de modelo Whisper deberías usar?',
        content:
          '**Elige el modelo Whisper más pequeño que dé una precisión aceptable en tu hardware — tiny/base/small para solo-CPU, medium/large cuando tienes una GPU.** Los modelos más grandes mejoran la precisión con acentos y audio ruidoso a costa de la velocidad.',
        columns: ['Modelo', 'Precisión relativa', 'Velocidad relativa', 'Mejor para'],
        rows: [
          { 'Modelo': 'tiny', 'Precisión relativa': 'La más baja', 'Velocidad relativa': 'La más rápida', 'Mejor para': 'CPU de bajo consumo, comandos cortos' },
          { 'Modelo': 'base', 'Precisión relativa': 'Baja', 'Velocidad relativa': 'Muy rápida', 'Mejor para': 'Raspberry Pi, frases simples' },
          { 'Modelo': 'small', 'Precisión relativa': 'Buena', 'Velocidad relativa': 'Rápida', 'Mejor para': 'CPU de mini PC, uso diario' },
          { 'Modelo': 'medium', 'Precisión relativa': 'Alta', 'Velocidad relativa': 'Moderada', 'Mejor para': 'GPU o CPU potente' },
          { 'Modelo': 'large', 'Precisión relativa': 'La más alta', 'Velocidad relativa': 'La más lenta', 'Mejor para': 'GPU, acentos/salas ruidosas' },
        ],
        items: [
          'Usa small como predeterminado en una CPU de mini PC; pasa a medium/large solo si falta precisión.',
          'Usa tiny/base en una Raspberry Pi para mantener la latencia usable.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-es.svg',
        imageCaption: 'Tamaños del modelo Whisper por velocidad relativa en Home Assistant: tiny y base son los más rápidos en una Raspberry Pi, small es el valor predeterminado en la CPU de una mini PC, medium necesita una GPU o CPU potente, y large es el más lento pero el más preciso con acentos y ruido.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Configuración de Wyoming',
        content:
          '**El add-on de Whisper expone un endpoint Wyoming que Assist usa para voz-a-texto.** La configuración es instalar → elegir modelo → seleccionar en el pipeline.',
        numberedItems: [
          'Instala el add-on de Whisper (faster-whisper) desde la tienda de add-ons.',
          'Fija el tamaño de modelo en la configuración del add-on e inícialo.',
          'El add-on se registra como un servicio de voz-a-texto Wyoming automáticamente.',
          'En Ajustes → Asistentes de voz, fija Whisper como el motor STT para tu pipeline de Assist.',
          'Prueba la transcripción desde las herramientas de depuración de Assist antes de añadir hardware de voz.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Necesidades de hardware',
        content:
          '**Whisper corre en CPU para modelos pequeños y se beneficia de una GPU para modelos medium/large.** Ajusta el tamaño del modelo al equipo que lo aloja.',
        items: [
          'Raspberry Pi: quédate con tiny/base para una latencia aceptable.',
          'Mini PC (CPU): small funciona bien; medium es posible pero más lento — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
          'Con una GPU/NPU: medium y large se vuelven prácticos para alta precisión.',
          'Puedes ejecutar Whisper en una máquina separada más potente vía Wyoming si tu hub es una Pi.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-es.svg',
        imageCaption: 'Árbol de decisión para adaptar el tamaño del modelo Whisper al hardware: sin GPU, una Raspberry Pi ejecuta tiny/base mientras una mini PC ejecuta small; una GPU o NPU hace que medium sea práctico y large adecuado para acentos o salas ruidosas.',
      },
      tuning: {
        id: 'tuning',
        title: 'Ajustar la precisión',
        content:
          '**Mejora un buen micrófono y el modelo correcto antes de recurrir al Whisper más grande.** La calidad del audio suele importar más que el tamaño del modelo para los comandos del hogar.',
        items: [
          'Usa un micrófono de calidad o hardware de satélite de voz cerca del hablante.',
          'Reduce el ruido de fondo donde está el micrófono.',
          'Fija el idioma correcto en el add-on para evitar transcripciones erróneas.',
          'Sube un tamaño de modelo cada vez y vuelve a probar en vez de saltar a large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué modelo Whisper debería usar para Home Assistant?', a: 'Usa small como predeterminado en una CPU de mini PC, tiny o base en una Raspberry Pi, y medium o large solo si tienes una GPU y necesitas mayor precisión con acentos o salas ruidosas. Sube un tamaño cada vez y vuelve a probar.' },
          { q: '¿Necesito una GPU para Whisper local?', a: 'No para small y por debajo — esos corren en CPU. Una GPU principalmente hace los modelos medium y large lo bastante rápidos para uso en tiempo real. También puedes descargar Whisper a una máquina más potente sobre el protocolo Wyoming.' },
          { q: '¿Qué tan preciso es Whisper local sin conexión?', a: 'La precisión es fuerte con el modelo correcto y un buen micrófono; los modelos más grandes manejan mejor los acentos y el ruido. Para comandos del hogar claros, el modelo small en un mini PC suele ser lo bastante preciso, y corre totalmente sin conexión.' },
          { q: '¿Es Whisper local multilingüe?', a: 'Sí. Whisper admite muchos idiomas, así que los comandos en otros idiomas se transcriben localmente sin ningún servicio en la nube. Fija el idioma en la configuración del add-on para mejores resultados.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — el stack de voz completo en el que encaja Whisper',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — añadir el cerebro LLM',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — dimensionar el equipo que ejecuta Whisper',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: profundidad de modelo y hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Voz-a-Texto Local para Smart Homes: Whisper + HA (2026)',
      description: 'Whisper en Home Assistant 2026: voz-a-texto local, tamaños de modelo, hardware necesario y ajuste de precisión. Sin nube, transcripción offline.',
      url: 'https://www.promptquorum.com/es/smart-home/local-whisper-home-assistant',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Voz-a-texto' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué modelo Whisper debería usar para Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'small como predeterminado en una CPU de mini PC, tiny o base en una Raspberry Pi, y medium o large solo con una GPU cuando necesitas mayor precisión con acentos o ruido.' } },
        { '@type': 'Question', name: '¿Necesito una GPU para Whisper local?', acceptedAnswer: { '@type': 'Answer', text: 'No para small y por debajo — esos corren en CPU. Una GPU principalmente hace medium y large lo bastante rápidos para uso en tiempo real. También puedes descargar Whisper sobre Wyoming.' } },
        { '@type': 'Question', name: '¿Qué tan preciso es Whisper local sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Fuerte con el modelo correcto y un buen micrófono; los modelos más grandes manejan mejor acentos y ruido. El modelo small en un mini PC suele ser lo bastante preciso para comandos del hogar claros, totalmente sin conexión.' } },
        { '@type': 'Question', name: '¿Es Whisper local multilingüe?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Whisper admite muchos idiomas, así que los comandos en otros idiomas se transcriben localmente sin nube. Fija el idioma en la configuración del add-on.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '스마트 홈용 로컬 음성→텍스트: Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-ko.png',
    seoTitle: 'Whisper + Home Assistant 2026: 로컬 STT 가이드',
    intro:
      '로컬 Whisper는 Home Assistant에 클라우드 없는 비공개 음성→텍스트를 제공합니다. 정확도, 속도, 하드웨어의 균형에 맞는 Whisper 모델 크기를 선택한 후 Wyoming 프로토콜을 통해 Assist에 연결합니다. 이 가이드는 로컬 STT가 중요한 이유, Whisper 모델 크기, Wyoming 설정, 하드웨어 요구 사항, 정확도 조정 방법을 다룹니다.',
    metaDescription:
      'Home Assistant의 Whisper 2026: 로컬 음성→텍스트, 모델 크기, 필요한 하드웨어, 정확도 조정. 클라우드 없음, 오프라인 변환.',
    twitterDescription:
      'Whisper 로컬로 Home Assistant의 비공개 음성→텍스트: 모델 크기 선택, Wyoming 위에 연결, 정확도 조정. 클라우드 없음.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '로컬 음성→텍스트를 설정하는 Home Assistant 사용자',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant stt 로컬',
      'home assistant 음성 텍스트',
      '로컬 stt home assistant',
      'faster-whisper home assistant',
      'whisper 모델 크기 home assistant',
    ],
    leadAnswerBlock:
      '**로컬 Whisper는 Home Assistant에 비공개 음성→텍스트를 제공합니다. Whisper 애드온을 설치하고 하드웨어에 맞는 모델 크기를 선택하고 Wyoming 프로토콜을 통해 Assist에 연결하십시오.** 더 작은 모델이 더 빠르고 더 큰 모델이 더 정확합니다. 어떤 것도 클라우드 서비스로 전송되지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Home Assistant에 로컬 음성→텍스트를 어떻게 추가합니까?',
        answer:
          'Home Assistant에 Whisper 애드온(faster-whisper)을 설치하고 모델 크기를 선택하면 Wyoming 음성→텍스트 서비스로 등록됩니다. Assist 파이프라인에서 선택하십시오. 변환이 이후 완전히 직접 소유한 하드웨어에서 실행되므로 어떤 오디오도 집 밖으로 나가지 않습니다.',
        bullets: [
          'Whisper 애드온(faster-whisper) 설치',
          '모델 크기 선택: tiny/base/small/medium/large',
          'Wyoming 프로토콜을 통해 Assist에 연결',
          '더 작음 = CPU에서 더 빠름; 더 큼 = 더 정확함',
          '클라우드 없이 다국어 변환',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '로컬 STT를 사용하는 이유', anchor: 'why-local-stt' },
      { label: 'Whisper 모델 크기', anchor: 'model-sizes' },
      { label: 'Wyoming 설정', anchor: 'wyoming-setup' },
      { label: '하드웨어 요구 사항', anchor: 'hardware' },
      { label: '정확도 조정', anchor: 'tuning' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant에 Whisper 애드온을 설치하고 하드웨어에 맞는 모델 크기를 선택하고 Wyoming을 통해 Assist에 연결하면 비공개 음성→텍스트를 사용할 수 있습니다.' },
      { type: 'plain-terms', content: '음성→텍스트는 말한 단어를 어시스턴트가 처리할 수 있는 텍스트로 변환합니다. Whisper는 로컬에서 실행되는 오픈 음성 인식 모델이므로 클라우드 어시스턴트와 달리 음성 녹음이 절대 직접 소유한 하드웨어를 떠나지 않습니다. 주요 선택은 모델 크기입니다. 더 크면 더 정확하지만 더 많은 연산이 필요합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Whisper는 로컬에서 실행되는 오픈 음성→텍스트 모델입니다. 어떤 오디오도 직접 소유한 하드웨어를 떠나지 않습니다',
          'Whisper 애드온(faster-whisper)을 사용하십시오. Wyoming을 통해 Assist에 연결됩니다',
          '모델 크기는 tiny → base → small → medium → large입니다. 더 크면 더 정확하고 더 느립니다',
          'CPU 전용 하드웨어에서는 tiny/base/small을 선호하십시오. GPU가 있으면 medium/large가 실용적입니다',
          'Whisper는 다국어를 지원하므로 다른 언어 명령도 클라우드 서비스 없이 변환됩니다',
          '더 큰 모델로 가기 전에 더 좋은 마이크와 올바른 모델로 정확도를 조정하십시오',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: '로컬 음성→텍스트를 사용하는 이유',
        content:
          '**로컬 음성→텍스트는 음성 녹음을 직접 소유한 하드웨어에 유지하므로 어떤 오디오도 제3자에게 업로드되지 않습니다.** 오프라인으로도 동작하고 요청당 비용도 없습니다.',
        items: [
          '**프라이버시:** 클라우드 어시스턴트는 녹음을 전송하고 보관할 수 있습니다. 로컬 Whisper는 그렇지 않습니다 — [스마트 홈 프라이버시 위험](/ko/smart-home/smart-home-privacy-risks)을 참조하십시오.',
          '**오프라인:** 인터넷 장애 중에도 변환이 동작합니다.',
          '**비용 없음:** 로컬 변환에 사용당 요금이 없습니다.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: '어떤 Whisper 모델 크기를 사용해야 합니까?',
        content:
          '**직접 소유한 하드웨어에서 허용 가능한 정확도를 제공하는 가장 작은 Whisper 모델을 선택하십시오. CPU 전용에는 tiny/base/small, GPU가 있을 때는 medium/large입니다.** 더 큰 모델은 억양과 잡음 있는 오디오에 대한 정확도를 속도를 희생해 향상합니다.',
        columns: ['모델', '상대 정확도', '상대 속도', '최적 용도'],
        rows: [
          { '모델': 'tiny', '상대 정확도': '가장 낮음', '상대 속도': '가장 빠름', '최적 용도': '저전력 CPU, 짧은 명령' },
          { '모델': 'base', '상대 정확도': '낮음', '상대 속도': '매우 빠름', '최적 용도': 'Raspberry Pi, 간단한 문장' },
          { '모델': 'small', '상대 정확도': '양호', '상대 속도': '빠름', '최적 용도': '미니 PC CPU, 일상 사용' },
          { '모델': 'medium', '상대 정확도': '높음', '상대 속도': '보통', '최적 용도': 'GPU 또는 강력한 CPU' },
          { '모델': 'large', '상대 정확도': '가장 높음', '상대 속도': '가장 느림', '최적 용도': 'GPU, 억양/잡음 있는 공간' },
        ],
        items: [
          '미니 PC CPU에서는 small을 기본값으로 사용하십시오. 정확도가 부족할 때만 medium/large로 전환하십시오.',
          'Raspberry Pi에서는 사용 가능한 지연 시간을 유지하기 위해 tiny/base를 사용하십시오.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-ko.svg',
        imageCaption: 'Home Assistant에서 상대 속도별 Whisper 모델 크기: tiny와 base는 Raspberry Pi에서 가장 빠르고, small은 미니 PC CPU의 기본값이며, medium은 GPU나 강력한 CPU가 필요하고, large는 가장 느리지만 억양과 소음에 가장 정확합니다.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming 설정',
        content:
          '**Whisper 애드온은 Assist가 음성→텍스트에 사용하는 Wyoming 엔드포인트를 노출합니다.** 설정은 설치 → 모델 선택 → 파이프라인에서 선택입니다.',
        numberedItems: [
          '애드온 스토어에서 Whisper 애드온(faster-whisper)을 설치하십시오.',
          '애드온 설정에서 모델 크기를 설정하고 시작하십시오.',
          '애드온이 자동으로 Wyoming 음성→텍스트 서비스로 등록됩니다.',
          '설정 → 음성 어시스턴트에서 Assist 파이프라인의 STT 엔진으로 Whisper를 설정하십시오.',
          '음성 하드웨어를 추가하기 전에 Assist 디버그 도구에서 변환을 테스트하십시오.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 요구 사항',
        content:
          '**Whisper는 소형 모델의 경우 CPU에서 실행되고 medium/large 모델의 경우 GPU가 도움이 됩니다.** 호스팅하는 기기에 맞게 모델 크기를 조정하십시오.',
        items: [
          'Raspberry Pi: 허용 가능한 지연 시간을 위해 tiny/base를 유지하십시오.',
          '미니 PC(CPU): small이 잘 동작합니다. medium은 가능하지만 더 느립니다 — [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
          'GPU/NPU가 있을 때: 높은 정확도를 위해 medium과 large가 실용적이 됩니다.',
          '허브가 Pi인 경우 Wyoming를 통해 더 강력한 별도 기기에서 Whisper를 실행할 수 있습니다.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-ko.svg',
        imageCaption: 'Whisper 모델 크기를 하드웨어에 맞추는 결정 트리: GPU가 없으면 Raspberry Pi는 tiny/base를, 미니 PC는 small을 실행하며, GPU나 NPU가 있으면 medium이 실용적이고 large는 억양이나 소음이 있는 공간에 적합합니다.',
      },
      tuning: {
        id: 'tuning',
        title: '정확도 조정',
        content:
          '**가장 큰 Whisper에 의존하기 전에 좋은 마이크와 올바른 모델로 개선하십시오.** 홈 명령의 경우 모델 크기보다 오디오 품질이 더 중요한 경우가 많습니다.',
        items: [
          '화자 근처에 품질 좋은 마이크 또는 음성 위성 하드웨어를 사용하십시오.',
          '마이크가 있는 곳의 배경 소음을 줄이십시오.',
          '잘못된 변환을 피하기 위해 애드온에서 올바른 언어를 설정하십시오.',
          'large로 바로 건너뛰지 말고 한 번에 하나씩 모델 크기를 올리고 재테스트하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Home Assistant에 어떤 Whisper 모델을 사용해야 합니까?', a: '미니 PC CPU에서는 small을 기본값으로, Raspberry Pi에서는 tiny 또는 base를 사용하고, 억양이나 잡음 있는 공간에서 더 높은 정확도가 필요할 때만 GPU가 있을 경우 medium 또는 large를 사용하십시오. 한 번에 하나씩 크기를 올리고 재테스트하십시오.' },
          { q: '로컬 Whisper에 GPU가 필요합니까?', a: 'small 이하에는 필요 없습니다. 이 모델들은 CPU에서 실행됩니다. GPU는 주로 medium과 large를 실시간 사용에 충분히 빠르게 만듭니다. Wyoming 프로토콜을 통해 더 강력한 기기에서 Whisper를 오프로드할 수도 있습니다.' },
          { q: '로컬 Whisper 오프라인이 얼마나 정확합니까?', a: '올바른 모델과 좋은 마이크로 정확도가 강합니다. 더 큰 모델은 억양과 소음을 더 잘 처리합니다. 명확한 홈 명령의 경우 미니 PC의 small 모델이 보통 충분히 정확하며 완전히 오프라인으로 실행됩니다.' },
          { q: '로컬 Whisper가 다국어를 지원합니까?', a: '예. Whisper는 많은 언어를 지원하므로 다른 언어 명령도 클라우드 서비스 없이 로컬에서 변환됩니다. 최상의 결과를 위해 애드온 설정에서 언어를 설정하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[완전 로컬 음성 어시스턴트 구축하기](/ko/smart-home/local-voice-assistant-smart-home) — Whisper가 맞는 완전한 음성 스택',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — LLM 두뇌 추가',
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — Whisper를 실행하는 기기 크기 선택',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 클러스터 간: 모델과 하드웨어 심층 분석',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트 홈용 로컬 음성→텍스트: Whisper + HA (2026)',
      description: 'Home Assistant의 Whisper 2026: 로컬 음성→텍스트, 모델 크기, 필요한 하드웨어, 정확도 조정. 클라우드 없음, 오프라인 변환.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-whisper-home-assistant',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: '음성→텍스트' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant에 어떤 Whisper 모델을 사용해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '미니 PC CPU에서는 small을 기본값으로, Raspberry Pi에서는 tiny 또는 base를 사용하고, 더 높은 정확도가 필요할 때만 GPU가 있을 경우 medium 또는 large를 사용하십시오.' } },
        { '@type': 'Question', name: '로컬 Whisper에 GPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'small 이하에는 필요 없습니다. 이 모델들은 CPU에서 실행됩니다. GPU는 주로 medium과 large를 실시간 사용에 충분히 빠르게 만듭니다. Wyoming을 통해 오프로드할 수도 있습니다.' } },
        { '@type': 'Question', name: '로컬 Whisper 오프라인이 얼마나 정확합니까?', acceptedAnswer: { '@type': 'Answer', text: '올바른 모델과 좋은 마이크로 강합니다. 더 큰 모델은 억양과 소음을 더 잘 처리합니다. 미니 PC의 small 모델이 명확한 홈 명령에 보통 충분히 정확합니다.' } },
        { '@type': 'Question', name: '로컬 Whisper가 다국어를 지원합니까?', acceptedAnswer: { '@type': 'Answer', text: '예. Whisper는 많은 언어를 지원하므로 다른 언어 명령도 클라우드 서비스 없이 로컬에서 변환됩니다. 최상의 결과를 위해 애드온 설정에서 언어를 설정하십시오.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Reconnaissance Vocale Locale pour la Maison Connectée : Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-fr.png',
    seoTitle: 'Whisper + Home Assistant 2026 : Guide STT Local',
    intro:
      'Whisper local donne à Home Assistant une reconnaissance vocale privée sans cloud : vous choisissez une taille de modèle Whisper selon votre compromis précision, vitesse et matériel, puis vous le reliez à Assist via le protocole Wyoming. Ce guide couvre pourquoi la STT locale compte, les tailles de modèle Whisper, la configuration Wyoming, les besoins matériels et comment régler la précision.',
    metaDescription:
      'Whisper + Home Assistant 2026 : reconnaissance vocale locale, tailles de modèle, Wyoming et précision. Transcription privée, hors ligne.',
    twitterDescription:
      'Reconnaissance vocale privée pour Home Assistant avec Whisper local : choisir une taille de modèle, relier via Wyoming, régler la précision. Sans cloud.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant configurant la reconnaissance vocale locale',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant stt local',
      'home assistant reconnaissance vocale',
      'stt local home assistant',
      'faster-whisper home assistant',
      'taille de modèle whisper home assistant',
    ],
    leadAnswerBlock:
      '**Whisper local donne à Home Assistant une reconnaissance vocale privée : installez l\'add-on Whisper, choisissez une taille de modèle adaptée à votre matériel et reliez-le à Assist via le protocole Wyoming.** Les modèles plus petits sont plus rapides ; les plus grands sont plus précis. Rien n\'est envoyé à un service cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Comment ajouter la reconnaissance vocale locale à Home Assistant ?',
        answer:
          'Installez l\'add-on Whisper (faster-whisper) dans Home Assistant, choisissez une taille de modèle, et il s\'enregistre comme service de reconnaissance vocale Wyoming. Sélectionnez-le dans votre pipeline Assist. La transcription tourne alors entièrement sur votre matériel, donc aucun audio ne quitte la maison.',
        bullets: [
          'Installez l\'add-on Whisper (faster-whisper)',
          'Choisissez une taille de modèle : tiny/base/small/medium/large',
          'Il se relie à Assist via le protocole Wyoming',
          'Plus petit = plus rapide sur CPU ; plus grand = plus précis',
          'Transcription multilingue sans cloud',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Pourquoi la STT locale', anchor: 'why-local-stt' },
      { label: 'Tailles de modèle Whisper', anchor: 'model-sizes' },
      { label: 'Configuration Wyoming', anchor: 'wyoming-setup' },
      { label: 'Besoins matériels', anchor: 'hardware' },
      { label: 'Régler la précision', anchor: 'tuning' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Installez l\'add-on Whisper dans Home Assistant, choisissez une taille de modèle pour votre matériel et reliez-le à Assist via Wyoming pour une reconnaissance vocale privée.' },
      { type: 'plain-terms', content: 'La reconnaissance vocale transforme vos paroles en texte sur lequel l\'assistant peut agir. Whisper est un modèle ouvert de reconnaissance vocale qui tourne localement, donc contrairement aux assistants cloud, vos enregistrements vocaux ne quittent jamais votre matériel. Le choix principal est la taille du modèle : plus grand est plus précis mais demande plus de calcul.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Whisper est un modèle ouvert de reconnaissance vocale qui tourne localement — aucun audio ne quitte votre matériel',
          'Utilisez l\'add-on Whisper (faster-whisper) ; il se relie à Assist via Wyoming',
          'Les tailles de modèle vont tiny → base → small → medium → large ; plus grand est plus précis, plus lent',
          'Sur du matériel CPU seul, préférez tiny/base/small ; un GPU rend medium/large pratique',
          'Whisper est multilingue, donc les commandes non anglaises se transcrivent sans service cloud',
          'Réglez la précision avec un meilleur micro et le bon modèle avant de passer à plus grand',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'Pourquoi utiliser la reconnaissance vocale locale ?',
        content:
          '**La reconnaissance vocale locale garde vos enregistrements vocaux sur votre propre matériel, donc aucun audio n\'est téléversé vers un tiers.** Elle fonctionne aussi hors ligne et n\'a aucun coût par requête.',
        items: [
          '**Confidentialité :** les assistants cloud transmettent et peuvent conserver les enregistrements ; Whisper local non — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          '**Hors ligne :** la transcription fonctionne pendant les coupures internet.',
          '**Sans frais :** il n\'y a aucun coût d\'utilisation pour la transcription locale.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Quelle taille de modèle Whisper choisir ?',
        content:
          '**Choisissez le plus petit modèle Whisper qui donne une précision acceptable sur votre matériel — tiny/base/small pour CPU seul, medium/large quand vous avez un GPU.** Les plus grands modèles améliorent la précision sur les accents et l\'audio bruyant au prix de la vitesse.',
        columns: ['Modèle', 'Précision relative', 'Vitesse relative', 'Idéal pour'],
        rows: [
          { 'Modèle': 'tiny', 'Précision relative': 'La plus faible', 'Vitesse relative': 'La plus rapide', 'Idéal pour': 'CPU basse consommation, commandes courtes' },
          { 'Modèle': 'base', 'Précision relative': 'Faible', 'Vitesse relative': 'Très rapide', 'Idéal pour': 'Raspberry Pi, phrases simples' },
          { 'Modèle': 'small', 'Précision relative': 'Bonne', 'Vitesse relative': 'Rapide', 'Idéal pour': 'CPU de mini-PC, usage quotidien' },
          { 'Modèle': 'medium', 'Précision relative': 'Élevée', 'Vitesse relative': 'Modérée', 'Idéal pour': 'GPU ou CPU puissant' },
          { 'Modèle': 'large', 'Précision relative': 'La plus élevée', 'Vitesse relative': 'La plus lente', 'Idéal pour': 'GPU, accents/pièces bruyantes' },
        ],
        items: [
          'Utilisez small par défaut sur un CPU de mini-PC ; passez à medium/large seulement si la précision manque.',
          'Utilisez tiny/base sur une Raspberry Pi pour garder une latence utilisable.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-fr.svg',
        imageCaption: 'Tailles de modèle Whisper par vitesse relative sur Home Assistant : tiny et base sont les plus rapides sur un Raspberry Pi, small est la valeur par défaut sur un CPU de mini-PC, medium nécessite un GPU ou un CPU puissant, et large est le plus lent mais le plus précis avec les accents et le bruit.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Configuration Wyoming',
        content:
          '**L\'add-on Whisper expose un point d\'accès Wyoming que Assist utilise pour la reconnaissance vocale.** La configuration est : installer → choisir le modèle → sélectionner dans le pipeline.',
        numberedItems: [
          'Installez l\'add-on Whisper (faster-whisper) depuis le magasin d\'add-ons.',
          'Définissez la taille du modèle dans la configuration de l\'add-on et démarrez-le.',
          'L\'add-on s\'enregistre automatiquement comme service de reconnaissance vocale Wyoming.',
          'Dans Paramètres → Assistants vocaux, définissez Whisper comme moteur STT pour votre pipeline Assist.',
          'Testez la transcription depuis les outils de débogage d\'Assist avant d\'ajouter du matériel vocal.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Besoins matériels',
        content:
          '**Whisper tourne sur CPU pour les petits modèles et profite d\'un GPU pour les modèles medium/large.** Adaptez la taille du modèle à la machine qui l\'héberge.',
        items: [
          'Raspberry Pi : restez sur tiny/base pour une latence acceptable.',
          'Mini-PC (CPU) : small fonctionne bien ; medium est possible mais plus lent — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          'Avec un GPU/NPU : medium et large deviennent pratiques pour une haute précision.',
          'Vous pouvez exécuter Whisper sur une machine séparée plus puissante via Wyoming si votre hub est une Pi.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-fr.svg',
        imageCaption: 'Arbre de décision pour adapter la taille du modèle Whisper au matériel : sans GPU, un Raspberry Pi exécute tiny/base tandis qu\'un mini-PC exécute small ; un GPU ou NPU rend medium pratique et large adapté aux accents ou aux pièces bruyantes.',
      },
      tuning: {
        id: 'tuning',
        title: 'Régler la précision',
        content:
          '**Améliorez un bon micro et le bon modèle avant de recourir au plus gros Whisper.** La qualité audio compte souvent plus que la taille du modèle pour les commandes domestiques.',
        items: [
          'Utilisez un micro de qualité ou du matériel de satellite vocal près du locuteur.',
          'Réduisez le bruit de fond là où se trouve le micro.',
          'Définissez la bonne langue dans l\'add-on pour éviter les mauvaises transcriptions.',
          'Montez d\'une taille de modèle à la fois et retestez plutôt que de sauter à large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quel modèle Whisper utiliser pour Home Assistant ?', a: 'Utilisez small par défaut sur un CPU de mini-PC, tiny ou base sur une Raspberry Pi, et medium ou large seulement si vous avez un GPU et avez besoin d\'une meilleure précision sur les accents ou les pièces bruyantes. Montez d\'une taille à la fois et retestez.' },
          { q: 'Ai-je besoin d\'un GPU pour Whisper local ?', a: 'Non pour small et en dessous — ceux-ci tournent sur CPU. Un GPU rend surtout les modèles medium et large assez rapides pour un usage en temps réel. Vous pouvez aussi déporter Whisper sur une machine plus puissante via le protocole Wyoming.' },
          { q: 'Quelle est la précision de Whisper local hors ligne ?', a: 'La précision est forte avec le bon modèle et un bon micro ; les plus grands modèles gèrent mieux les accents et le bruit. Pour des commandes domestiques claires, le modèle small sur un mini-PC est généralement assez précis, et il tourne entièrement hors ligne.' },
          { q: 'Whisper local est-il multilingue ?', a: 'Oui. Whisper prend en charge de nombreuses langues, donc les commandes non anglaises se transcrivent localement sans aucun service cloud. Définissez la langue dans la configuration de l\'add-on pour de meilleurs résultats.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — la pile vocale complète dans laquelle Whisper s\'insère',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ajouter le cerveau LLM',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — dimensionner la machine qui exécute Whisper',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : profondeur de modèle et matériel',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Reconnaissance Vocale Locale pour la Maison Connectée : Whisper + HA (2026)',
      description: 'Whisper + Home Assistant 2026 : reconnaissance vocale locale, tailles de modèle, Wyoming et précision. Transcription privée, hors ligne.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-whisper-home-assistant',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Reconnaissance vocale' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel modèle Whisper utiliser pour Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'small par défaut sur un CPU de mini-PC, tiny ou base sur une Raspberry Pi, et medium ou large seulement avec un GPU quand vous avez besoin d\'une meilleure précision sur les accents ou le bruit.' } },
        { '@type': 'Question', name: 'Ai-je besoin d\'un GPU pour Whisper local ?', acceptedAnswer: { '@type': 'Answer', text: 'Non pour small et en dessous — ceux-ci tournent sur CPU. Un GPU rend surtout medium et large assez rapides pour un usage en temps réel. Vous pouvez aussi déporter Whisper via Wyoming.' } },
        { '@type': 'Question', name: 'Quelle est la précision de Whisper local hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Forte avec le bon modèle et un bon micro ; les plus grands modèles gèrent mieux les accents et le bruit. Le modèle small sur un mini-PC est généralement assez précis pour des commandes claires, entièrement hors ligne.' } },
        { '@type': 'Question', name: 'Whisper local est-il multilingue ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Whisper prend en charge de nombreuses langues, donc les commandes non anglaises se transcrivent localement sans cloud. Définissez la langue dans la configuration de l\'add-on.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'スマートホーム向けのローカル音声認識：Whisper + HA（2026）',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-ja.png',
    seoTitle: 'Whisper + Home Assistant 2026：ローカルSTTガイド',
    intro:
      'ローカル Whisper は、Home Assistant にクラウドなしのプライベートな音声認識を与えます：精度・速度・ハードウェアの兼ね合いで Whisper のモデルサイズを選び、Wyoming プロトコルで Assist につなぎます。本ガイドは、ローカル STT がなぜ重要か、Whisper のモデルサイズ、Wyoming の設定、ハードウェア要件、そして精度の調整方法を扱います。',
    metaDescription:
      'Whisper で Home Assistant にローカル音声認識を追加する方法（2026）：クラウド不要の音声テキスト変換、日本語対応モデルの選び方を解説。モデルサイズ・ハードウェア要件・精度と速度のトレードオフ・Wyoming の設定手順を網羅。',
    twitterDescription:
      'ローカル Whisper で Home Assistant にプライベートな音声認識を：モデルサイズを選び、Wyoming でつなぎ、精度を調整。クラウドなし。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'ローカル音声認識を構成する Home Assistant ユーザー',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant ローカルstt',
      'home assistant 音声認識',
      'ローカルstt home assistant',
      'faster-whisper home assistant',
      'whisper モデルサイズ home assistant',
    ],
    leadAnswerBlock:
      '**ローカル Whisper は Home Assistant にプライベートな音声認識を与えます：Whisper アドオンをインストールし、ハードウェアに合うモデルサイズを選び、Wyoming プロトコルで Assist につなぎます。** 小さいモデルほど速く、大きいモデルほど高精度。クラウドサービスへは何も送られません。',
    quickAnswerTop: {
      ja: {
        question: 'Home Assistant にローカル音声認識をどう追加しますか？',
        answer:
          'Home Assistant に Whisper（faster-whisper）アドオンをインストールし、モデルサイズを選ぶと、Wyoming の音声認識サービスとして登録されます。Assist パイプラインでそれを選びます。文字起こしは完全にあなたのハードウェアで動くため、音声は家を出ません。',
        bullets: [
          'Whisper（faster-whisper）アドオンをインストール',
          'モデルサイズを選ぶ：tiny/base/small/medium/large',
          'Wyoming プロトコルで Assist につながる',
          '小さいほど CPU で速く；大きいほど高精度',
          'クラウドなしの多言語文字起こし',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'なぜローカル STT か', anchor: 'why-local-stt' },
      { label: 'Whisper のモデルサイズ', anchor: 'model-sizes' },
      { label: 'Wyoming の設定', anchor: 'wyoming-setup' },
      { label: 'ハードウェア要件', anchor: 'hardware' },
      { label: '精度の調整', anchor: 'tuning' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant に Whisper アドオンをインストールし、ハードウェアに合うモデルサイズを選び、プライベートな音声認識のため Wyoming で Assist につなぎます。' },
      { type: 'plain-terms', content: '音声認識は、あなたの話した言葉を、アシスタントが行動できるテキストに変えます。Whisper はローカルで動くオープンな音声認識モデルなので、クラウドアシスタントと違い、あなたの音声録音はハードウェアを決して離れません。主な選択はモデルサイズで、大きいほど高精度ですがより多くの計算を要します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Whisper はローカルで動くオープンな音声認識モデル——音声はあなたのハードウェアを出ない',
          'Whisper（faster-whisper）アドオンを使う；Wyoming で Assist につながる',
          'モデルサイズは tiny → base → small → medium → large；大きいほど高精度・低速',
          'CPU のみのハードウェアでは tiny/base/small を；GPU があれば medium/large が実用的',
          'Whisper は多言語対応なので、英語以外の命令もクラウドサービスなしで文字起こしされる',
          '大きくする前に、より良いマイクと適切なモデルで精度を調整する',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'なぜローカル音声認識を使うのか？',
        content:
          '**ローカル音声認識はあなたの音声録音を自分のハードウェアに保つため、音声が第三者へアップロードされません。** オフラインでも動き、リクエストごとのコストもありません。',
        items: [
          '**プライバシー：** クラウドアシスタントは録音を送信し保持し得ますが、ローカル Whisper はしません——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          '**オフライン：** 文字起こしはインターネット障害中も動きます。',
          '**料金なし：** ローカルの文字起こしに利用料はありません。',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'どの Whisper モデルサイズを使うべきか？',
        content:
          '**あなたのハードウェアで許容できる精度を出す最小の Whisper モデルを選びましょう——CPU のみなら tiny/base/small、GPU があるなら medium/large。** 大きなモデルは、速度を犠牲に、アクセントや雑音の多い音声で精度を上げます。',
        columns: ['モデル', '相対精度', '相対速度', '最適な用途'],
        rows: [
          { 'モデル': 'tiny', '相対精度': '最低', '相対速度': '最速', '最適な用途': '低消費電力CPU、短い命令' },
          { 'モデル': 'base', '相対精度': '低', '相対速度': '非常に速い', '最適な用途': 'Raspberry Pi、簡単なフレーズ' },
          { 'モデル': 'small', '相対精度': '良好', '相対速度': '速い', '最適な用途': 'ミニPCのCPU、日常利用' },
          { 'モデル': 'medium', '相対精度': '高い', '相対速度': '中程度', '最適な用途': 'GPU または強力なCPU' },
          { 'モデル': 'large', '相対精度': '最高', '相対速度': '最も遅い', '最適な用途': 'GPU、アクセント/騒がしい部屋' },
        ],
        items: [
          'ミニPCのCPUでは small を既定にし、精度が足りない場合のみ medium/large へ移ります。',
          'Raspberry Pi ではレイテンシを使える範囲に保つため tiny/base を使います。',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-ja.svg',
        imageCaption: 'Home AssistantにおけるWhisperモデルサイズ別の相対速度: tinyとbaseはRaspberry Piで最速、smallはミニPCのCPUの既定値、mediumはGPUまたは強力なCPUが必要、largeは最も遅いがアクセントやノイズに最も正確です。',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming の設定',
        content:
          '**Whisper アドオンは、Assist が音声認識に使う Wyoming エンドポイントを公開します。** 設定は、インストール → モデルを選ぶ → パイプラインで選択、です。',
        numberedItems: [
          'アドオンストアから Whisper（faster-whisper）アドオンをインストールします。',
          'アドオン設定でモデルサイズを設定し、起動します。',
          'アドオンは自動的に Wyoming の音声認識サービスとして登録されます。',
          '設定 → 音声アシスタント で、Assist パイプラインの STT エンジンに Whisper を設定します。',
          '音声ハードウェアを追加する前に、Assist のデバッグツールから文字起こしをテストします。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア要件',
        content:
          '**Whisper は小型モデルなら CPU で動き、medium/large モデルでは GPU が役立ちます。** モデルサイズを、それをホストする機器に合わせましょう。',
        items: [
          'Raspberry Pi：許容できるレイテンシのため tiny/base にとどめます。',
          'ミニPC（CPU）：small はよく動きます；medium は可能ですがより遅い——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
          'GPU/NPU があれば：medium と large が高精度に実用的になります。',
          'ハブが Pi なら、Wyoming 経由で Whisper を別のより強力なマシンで動かせます。',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-ja.svg',
        imageCaption: 'Whisperのモデルサイズをハードウェアに合わせる決定木: GPUがない場合、Raspberry Piはtiny/baseを、ミニPCはsmallを実行します。GPUまたはNPUがあればmediumが実用的になり、largeはアクセントや騒がしい部屋に適しています。',
      },
      tuning: {
        id: 'tuning',
        title: '精度の調整',
        content:
          '**最大の Whisper に手を伸ばす前に、良いマイクと適切なモデルを整えましょう。** 家庭の命令では、モデルサイズより音質が重要なことが多いです。',
        items: [
          '話者の近くに、質の良いマイクや音声サテライト機器を使います。',
          'マイクのある場所の背景雑音を減らします。',
          '誤認識を避けるため、アドオンで正しい言語を設定します。',
          'large に飛ばず、モデルサイズを一段ずつ上げて再テストします。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Home Assistant にどの Whisper モデルを使うべきですか？', a: 'ミニPCのCPUでは small を既定に、Raspberry Pi では tiny か base を、そして GPU があり、アクセントや騒がしい部屋でより高い精度が必要な場合のみ medium か large を使いましょう。一段ずつ上げて再テストします。' },
          { q: 'ローカル Whisper に GPU は必要ですか？', a: 'small 以下には不要です——それらは CPU で動きます。GPU は主に medium と large をリアルタイム利用に十分な速さにします。Wyoming プロトコルで Whisper をより強力なマシンに逃がすこともできます。' },
          { q: 'ローカル Whisper はオフラインでどれくらい正確ですか？', a: '適切なモデルと良いマイクなら精度は高く、大きなモデルほどアクセントや雑音をうまく扱います。明瞭な家庭の命令には、ミニPC上の small モデルで通常十分な精度で、完全にオフラインで動きます。' },
          { q: 'ローカル Whisper は多言語対応ですか？', a: 'はい。Whisper は多くの言語に対応するため、英語以外の命令もクラウドサービスなしでローカルに文字起こしされます。最良の結果のため、アドオン設定で言語を設定しましょう。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — Whisper が収まる完全な音声スタック',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — LLM の頭脳を加える',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — Whisper を動かす機器のサイズ選び',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：モデルとハードウェアの詳細',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム向けのローカル音声認識：Whisper + HA（2026）',
      description: 'Whisper で Home Assistant にローカル音声認識を追加する方法（2026）：クラウド不要の音声テキスト変換、日本語対応モデルの選び方を解説。モデルサイズ・ハードウェア要件・精度と速度のトレードオフ・Wyoming の設定手順を網羅。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-whisper-home-assistant',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: '音声認識' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant にどの Whisper モデルを使うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'ミニPCのCPUでは small を既定に、Raspberry Pi では tiny か base、そして GPU があり高い精度が必要なときのみ medium か large を。一段ずつ上げて再テストします。' } },
        { '@type': 'Question', name: 'ローカル Whisper に GPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'small 以下には不要で、CPU で動きます。GPU は主に medium と large をリアルタイム利用に十分速くします。Wyoming で別マシンに逃がすこともできます。' } },
        { '@type': 'Question', name: 'ローカル Whisper はオフラインでどれくらい正確ですか？', acceptedAnswer: { '@type': 'Answer', text: '適切なモデルと良いマイクなら高精度で、大きなモデルほどアクセントや雑音に強いです。明瞭な命令にはミニPC上の small で通常十分、完全にオフラインです。' } },
        { '@type': 'Question', name: 'ローカル Whisper は多言語対応ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。多くの言語に対応するため、英語以外もクラウドなしでローカルに文字起こしされます。アドオン設定で言語を設定しましょう。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Voz-para-Texto Local para Casas Inteligentes: Whisper + HA (2026)',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-pt.png',
    seoTitle: 'Whisper + Home Assistant 2026: Guia de STT Local',
    intro:
      'O Whisper local dá ao Home Assistant voz-para-texto privado sem nuvem: você escolhe um tamanho de modelo Whisper para o seu equilíbrio de precisão, velocidade e hardware, e depois o conecta ao Assist sobre o protocolo Wyoming. Este guia cobre por que o STT local importa, os tamanhos de modelo Whisper, a configuração do Wyoming, as necessidades de hardware e como ajustar a precisão.',
    metaDescription:
      'Whisper no Home Assistant 2026: voz-para-texto local, tamanhos de modelo, hardware necessário e configuração Wyoming. Transcrição offline.',
    twitterDescription:
      'Voz-para-texto privado para o Home Assistant com Whisper local: escolha um tamanho de modelo, conecte sobre Wyoming, ajuste a precisão. Sem nuvem.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant configurando voz-para-texto local',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant stt local',
      'home assistant voz para texto',
      'stt local home assistant',
      'faster-whisper home assistant',
      'tamanho de modelo whisper home assistant',
    ],
    leadAnswerBlock:
      '**O Whisper local dá ao Home Assistant voz-para-texto privado: instale o add-on do Whisper, escolha um tamanho de modelo que caiba no seu hardware e conecte-o ao Assist sobre o protocolo Wyoming.** Modelos menores são mais rápidos; modelos maiores são mais precisos. Nada é enviado a um serviço na nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Como adiciono voz-para-texto local ao Home Assistant?',
        answer:
          'Instale o add-on do Whisper (faster-whisper) no Home Assistant, escolha um tamanho de modelo, e ele se registra como um serviço de voz-para-texto Wyoming. Selecione-o no seu pipeline do Assist. A transcrição então roda inteiramente no seu hardware, então nenhum áudio sai de casa.',
        bullets: [
          'Instale o add-on do Whisper (faster-whisper)',
          'Escolha um tamanho de modelo: tiny/base/small/medium/large',
          'Ele se conecta ao Assist via o protocolo Wyoming',
          'Menor = mais rápido na CPU; maior = mais preciso',
          'Transcrição multilíngue sem nuvem',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que STT local', anchor: 'why-local-stt' },
      { label: 'Tamanhos de modelo Whisper', anchor: 'model-sizes' },
      { label: 'Configuração do Wyoming', anchor: 'wyoming-setup' },
      { label: 'Necessidades de hardware', anchor: 'hardware' },
      { label: 'Ajustar a precisão', anchor: 'tuning' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Instale o add-on do Whisper no Home Assistant, escolha um tamanho de modelo para o seu hardware e conecte-o ao Assist sobre Wyoming para voz-para-texto privado.' },
      { type: 'plain-terms', content: 'A voz-para-texto transforma suas palavras faladas em texto sobre o qual o assistente pode agir. O Whisper é um modelo aberto de reconhecimento de fala que roda localmente, então, ao contrário dos assistentes na nuvem, suas gravações de voz nunca saem do seu hardware. A escolha principal é o tamanho do modelo: maior é mais preciso, mas precisa de mais processamento.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Whisper é um modelo aberto de voz-para-texto que roda localmente — nenhum áudio sai do seu hardware',
          'Use o add-on do Whisper (faster-whisper); ele se conecta ao Assist sobre Wyoming',
          'Os tamanhos de modelo vão tiny → base → small → medium → large; maior é mais preciso, mais lento',
          'Em hardware só-CPU, prefira tiny/base/small; uma GPU torna medium/large práticos',
          'O Whisper é multilíngue, então comandos em outros idiomas são transcritos sem um serviço na nuvem',
          'Ajuste a precisão com um microfone melhor e o modelo certo antes de ir maior',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: 'Por que usar voz-para-texto local?',
        content:
          '**A voz-para-texto local mantém suas gravações de voz no seu próprio hardware, então nenhum áudio é enviado a um terceiro.** Ela também funciona offline e não tem custo por requisição.',
        items: [
          '**Privacidade:** assistentes na nuvem transmitem e podem reter gravações; o Whisper local não — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          '**Offline:** a transcrição funciona durante quedas de internet.',
          '**Sem taxas:** não há cobrança por uso para a transcrição local.',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: 'Que tamanho de modelo Whisper você deve usar?',
        content:
          '**Escolha o menor modelo Whisper que dê uma precisão aceitável no seu hardware — tiny/base/small para só-CPU, medium/large quando você tem uma GPU.** Modelos maiores melhoram a precisão em sotaques e áudio ruidoso ao custo da velocidade.',
        columns: ['Modelo', 'Precisão relativa', 'Velocidade relativa', 'Melhor para'],
        rows: [
          { 'Modelo': 'tiny', 'Precisão relativa': 'A mais baixa', 'Velocidade relativa': 'A mais rápida', 'Melhor para': 'CPU de baixo consumo, comandos curtos' },
          { 'Modelo': 'base', 'Precisão relativa': 'Baixa', 'Velocidade relativa': 'Muito rápida', 'Melhor para': 'Raspberry Pi, frases simples' },
          { 'Modelo': 'small', 'Precisão relativa': 'Boa', 'Velocidade relativa': 'Rápida', 'Melhor para': 'CPU de mini PC, uso diário' },
          { 'Modelo': 'medium', 'Precisão relativa': 'Alta', 'Velocidade relativa': 'Moderada', 'Melhor para': 'GPU ou CPU forte' },
          { 'Modelo': 'large', 'Precisão relativa': 'A mais alta', 'Velocidade relativa': 'A mais lenta', 'Melhor para': 'GPU, sotaques/salas ruidosas' },
        ],
        items: [
          'Use small como padrão em uma CPU de mini PC; passe para medium/large só se faltar precisão.',
          'Use tiny/base em uma Raspberry Pi para manter a latência utilizável.',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-pt.svg',
        imageCaption: 'Tamanhos do modelo Whisper por velocidade relativa no Home Assistant: tiny e base são os mais rápidos em um Raspberry Pi, small é o padrão na CPU de um mini PC, medium precisa de uma GPU ou CPU forte, e large é o mais lento, mas o mais preciso com sotaques e ruído.',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Configuração do Wyoming',
        content:
          '**O add-on do Whisper expõe um endpoint Wyoming que o Assist usa para voz-para-texto.** A configuração é instalar → escolher modelo → selecionar no pipeline.',
        numberedItems: [
          'Instale o add-on do Whisper (faster-whisper) da loja de add-ons.',
          'Defina o tamanho do modelo na configuração do add-on e inicie-o.',
          'O add-on se registra como um serviço de voz-para-texto Wyoming automaticamente.',
          'Em Configurações → Assistentes de voz, defina o Whisper como o motor STT do seu pipeline do Assist.',
          'Teste a transcrição pelas ferramentas de depuração do Assist antes de adicionar hardware de voz.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Necessidades de hardware',
        content:
          '**O Whisper roda na CPU para modelos pequenos e se beneficia de uma GPU para modelos medium/large.** Ajuste o tamanho do modelo à máquina que o hospeda.',
        items: [
          'Raspberry Pi: fique com tiny/base para uma latência aceitável.',
          'Mini PC (CPU): small funciona bem; medium é possível mas mais lento — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          'Com uma GPU/NPU: medium e large se tornam práticos para alta precisão.',
          'Você pode rodar o Whisper em uma máquina separada mais potente via Wyoming se o seu hub for uma Pi.',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-pt.svg',
        imageCaption: 'Árvore de decisão para combinar o tamanho do modelo Whisper com o hardware: sem GPU, um Raspberry Pi roda tiny/base enquanto um mini PC roda small; uma GPU ou NPU torna medium prático e large adequado para sotaques ou salas ruidosas.',
      },
      tuning: {
        id: 'tuning',
        title: 'Ajustar a precisão',
        content:
          '**Melhore um bom microfone e o modelo certo antes de recorrer ao maior Whisper.** A qualidade do áudio muitas vezes importa mais que o tamanho do modelo para comandos do lar.',
        items: [
          'Use um microfone de qualidade ou hardware de satélite de voz perto de quem fala.',
          'Reduza o ruído de fundo onde o microfone fica.',
          'Defina o idioma correto no add-on para evitar transcrições erradas.',
          'Suba um tamanho de modelo por vez e teste de novo em vez de pular para large.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual modelo Whisper devo usar para o Home Assistant?', a: 'Use small como padrão em uma CPU de mini PC, tiny ou base em uma Raspberry Pi, e medium ou large só se você tiver uma GPU e precisar de maior precisão com sotaques ou salas ruidosas. Suba um tamanho por vez e teste de novo.' },
          { q: 'Preciso de uma GPU para o Whisper local?', a: 'Não para small e abaixo — esses rodam na CPU. Uma GPU principalmente torna os modelos medium e large rápidos o bastante para uso em tempo real. Você também pode descarregar o Whisper para uma máquina mais potente sobre o protocolo Wyoming.' },
          { q: 'Quão preciso é o Whisper local offline?', a: 'A precisão é forte com o modelo certo e um bom microfone; modelos maiores lidam melhor com sotaques e ruído. Para comandos do lar claros, o modelo small em um mini PC costuma ser preciso o bastante, e roda totalmente offline.' },
          { q: 'O Whisper local é multilíngue?', a: 'Sim. O Whisper suporta muitos idiomas, então comandos em outros idiomas são transcritos localmente sem nenhum serviço na nuvem. Defina o idioma na configuração do add-on para melhores resultados.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — o stack de voz completo em que o Whisper se encaixa',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — adicionar o cérebro LLM',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — dimensionar a máquina que roda o Whisper',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: profundidade de modelo e hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Voz-para-Texto Local para Casas Inteligentes: Whisper + HA (2026)',
      description: 'Whisper no Home Assistant 2026: voz-para-texto local, tamanhos de modelo, hardware necessário e configuração Wyoming. Transcrição offline.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-whisper-home-assistant',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Voz-para-texto' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual modelo Whisper devo usar para o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'small como padrão em uma CPU de mini PC, tiny ou base em uma Raspberry Pi, e medium ou large só com uma GPU quando você precisa de maior precisão com sotaques ou ruído.' } },
        { '@type': 'Question', name: 'Preciso de uma GPU para o Whisper local?', acceptedAnswer: { '@type': 'Answer', text: 'Não para small e abaixo — esses rodam na CPU. Uma GPU principalmente torna medium e large rápidos o bastante para uso em tempo real. Você também pode descarregar o Whisper sobre Wyoming.' } },
        { '@type': 'Question', name: 'Quão preciso é o Whisper local offline?', acceptedAnswer: { '@type': 'Answer', text: 'Forte com o modelo certo e um bom microfone; modelos maiores lidam melhor com sotaques e ruído. O modelo small em um mini PC costuma ser preciso o bastante para comandos claros, totalmente offline.' } },
        { '@type': 'Question', name: 'O Whisper local é multilíngue?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Whisper suporta muitos idiomas, então comandos em outros idiomas são transcritos localmente sem nuvem. Defina o idioma na configuração do add-on.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '智能家居的本地语音转文字：Whisper + HA（2026）',
    heroImage: '/images/local-whisper-home-assistant-overview-hero-zh.png',
    seoTitle: 'Whisper + Home Assistant 2026：本地 STT 指南',
    intro:
      '本地 Whisper 为 Home Assistant 提供无云端的私密语音转文字：你按精度、速度和硬件的取舍选择一个 Whisper 模型大小，然后经由 Wyoming 协议把它连接到 Assist。本指南讲解本地 STT 为何重要、Whisper 的模型大小、Wyoming 配置、硬件需求，以及如何调优精度。',
    metaDescription:
      '用 Whisper 为 Home Assistant 添加本地语音识别与实时转写（2026）：支持中文等多语言识别，数据完全本地处理无需联网。含不同规格模型的延迟与精度对比，以及经由 Wyoming 协议接入 Assist 流水线的详细配置指南。',
    twitterDescription:
      '用本地 Whisper 为 Home Assistant 实现私密语音转文字：选择模型大小、经由 Wyoming 连接、调优精度。无云端。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '配置本地语音转文字的 Home Assistant 用户',
    primaryTerm: 'local Whisper Home Assistant',
    targetKeywords: [
      'whisper home assistant 本地stt',
      'home assistant 语音转文字',
      '本地stt home assistant',
      'faster-whisper home assistant',
      'whisper 模型大小 home assistant',
    ],
    leadAnswerBlock:
      '**本地 Whisper 为 Home Assistant 提供私密语音转文字：安装 Whisper 加载项，选择一个适合你硬件的模型大小，并经由 Wyoming 协议把它连接到 Assist。** 更小的模型更快；更大的模型更准。没有任何东西被发送到云服务。',
    quickAnswerTop: {
      zh: {
        question: '我该如何为 Home Assistant 添加本地语音转文字？',
        answer:
          '在 Home Assistant 中安装 Whisper（faster-whisper）加载项，选择一个模型大小，它便会注册为一个 Wyoming 语音转文字服务。在你的 Assist 流水线中选择它。转写随后完全在你的硬件上运行，因此没有音频离开家门。',
        bullets: [
          '安装 Whisper（faster-whisper）加载项',
          '选择一个模型大小：tiny/base/small/medium/large',
          '它经由 Wyoming 协议连接到 Assist',
          '越小在 CPU 上越快；越大越准',
          '无云端的多语言转写',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '为何选本地 STT', anchor: 'why-local-stt' },
      { label: 'Whisper 模型大小', anchor: 'model-sizes' },
      { label: 'Wyoming 配置', anchor: 'wyoming-setup' },
      { label: '硬件需求', anchor: 'hardware' },
      { label: '调优精度', anchor: 'tuning' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '在 Home Assistant 中安装 Whisper 加载项，为你的硬件选一个模型大小，并经由 Wyoming 把它连接到 Assist，以实现私密的语音转文字。' },
      { type: 'plain-terms', content: '语音转文字把你说出的话变成助手可据以行动的文本。Whisper 是一个在本地运行的开源语音识别模型，因此与云端助手不同，你的语音录音从不离开你的硬件。主要的选择是模型大小：越大越准，但需要更多算力。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Whisper 是一个在本地运行的开源语音转文字模型——没有音频离开你的硬件',
          '使用 Whisper（faster-whisper）加载项；它经由 Wyoming 连接到 Assist',
          '模型大小为 tiny → base → small → medium → large；越大越准、越慢',
          '在仅 CPU 的硬件上，优先 tiny/base/small；有 GPU 时 medium/large 才实用',
          'Whisper 支持多语言，因此非英语命令也能在没有云服务的情况下转写',
          '在加大之前，先用更好的麦克风和合适的模型来调优精度',
        ],
      },
      whyLocalStt: {
        id: 'why-local-stt',
        title: '为何使用本地语音转文字？',
        content:
          '**本地语音转文字把你的语音录音留在你自己的硬件上，因此没有音频被上传给第三方。** 它还能离线工作，并且没有按次费用。',
        items: [
          '**隐私：** 云端助手会传输并可能保留录音；本地 Whisper 不会——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '**离线：** 转写在断网期间也能工作。',
          '**无费用：** 本地转写没有使用费。',
        ],
      },
      modelSizes: {
        id: 'model-sizes',
        title: '你该使用哪个 Whisper 模型大小？',
        content:
          '**选择能在你硬件上给出可接受精度的最小 Whisper 模型——仅 CPU 用 tiny/base/small，有 GPU 用 medium/large。** 更大的模型在口音和嘈杂音频上提升精度，但以速度为代价。',
        columns: ['模型', '相对精度', '相对速度', '最适合'],
        rows: [
          { '模型': 'tiny', '相对精度': '最低', '相对速度': '最快', '最适合': '低功耗 CPU、短命令' },
          { '模型': 'base', '相对精度': '低', '相对速度': '非常快', '最适合': 'Raspberry Pi、简单短语' },
          { '模型': 'small', '相对精度': '良好', '相对速度': '快', '最适合': '迷你 PC 的 CPU、日常使用' },
          { '模型': 'medium', '相对精度': '高', '相对速度': '中等', '最适合': 'GPU 或强力 CPU' },
          { '模型': 'large', '相对精度': '最高', '相对速度': '最慢', '最适合': 'GPU、口音/嘈杂房间' },
        ],
        items: [
          '在迷你 PC 的 CPU 上以 small 为默认；仅在精度不足时才换到 medium/large。',
          '在 Raspberry Pi 上用 tiny/base 以保持延迟可用。',
        ],
        image: '/images/local-whisper-home-assistant-model-sizes-speed-zh.svg',
        imageCaption: 'Home Assistant 中按相对速度划分的 Whisper 模型大小：tiny 和 base 在 Raspberry Pi 上最快，small 是迷你 PC CPU 的默认选择，medium 需要 GPU 或强力 CPU，large 最慢但在口音和噪音场景下最准确。',
      },
      wyomingSetup: {
        id: 'wyoming-setup',
        title: 'Wyoming 配置',
        content:
          '**Whisper 加载项会暴露一个 Wyoming 端点，供 Assist 用于语音转文字。** 配置流程是：安装 → 选择模型 → 在流水线中选择。',
        numberedItems: [
          '从加载项商店安装 Whisper（faster-whisper）加载项。',
          '在加载项配置中设置模型大小并启动它。',
          '加载项会自动注册为一个 Wyoming 语音转文字服务。',
          '在 设置 → 语音助手 中，把 Whisper 设为你 Assist 流水线的 STT 引擎。',
          '在添加语音硬件之前，从 Assist 的调试工具测试转写。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件需求',
        content:
          '**Whisper 的小型模型在 CPU 上运行，medium/large 模型则受益于 GPU。** 把模型大小匹配到托管它的机器。',
        items: [
          'Raspberry Pi：保持 tiny/base 以获得可接受的延迟。',
          '迷你 PC（CPU）：small 运行良好；medium 可行但更慢——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '配 GPU/NPU 时：medium 和 large 在高精度下变得实用。',
          '若你的中枢是 Pi，可经由 Wyoming 在一台更强的独立机器上运行 Whisper。',
        ],
        image: '/images/local-whisper-home-assistant-hardware-decision-tree-zh.svg',
        imageCaption: '将 Whisper 模型大小与硬件匹配的决策树：没有 GPU 时，Raspberry Pi 运行 tiny/base，迷你 PC 运行 small；有 GPU 或 NPU 时 medium 变得实用，large 适合口音或嘈杂房间。',
      },
      tuning: {
        id: 'tuning',
        title: '调优精度',
        content:
          '**在动用最大的 Whisper 之前，先改善一只好麦克风和合适的模型。** 对家庭命令而言，音质往往比模型大小更重要。',
        items: [
          '在说话者附近使用优质麦克风或语音卫星硬件。',
          '降低麦克风所在处的背景噪声。',
          '在加载项中设置正确的语言以避免转写错误。',
          '一次只上调一个模型大小并重新测试，而不是直接跳到 large。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Home Assistant 该用哪个 Whisper 模型？', a: '在迷你 PC 的 CPU 上以 small 为默认，在 Raspberry Pi 上用 tiny 或 base，仅当你有 GPU 并需要在口音或嘈杂房间获得更高精度时才用 medium 或 large。一次上调一个大小并重新测试。' },
          { q: '本地 Whisper 需要 GPU 吗？', a: 'small 及以下不需要——它们在 CPU 上运行。GPU 主要让 medium 和 large 模型足够快以供实时使用。你也可以经由 Wyoming 协议把 Whisper 卸载到一台更强的机器。' },
          { q: '本地 Whisper 离线时有多准？', a: '配合合适的模型和好麦克风，精度很高；更大的模型能更好地处理口音和噪声。对清晰的家庭命令，迷你 PC 上的 small 模型通常已足够准确，并且完全离线运行。' },
          { q: '本地 Whisper 支持多语言吗？', a: '支持。Whisper 支持许多语言，因此非英语命令也能在没有任何云服务的情况下在本地转写。在加载项配置中设置语言以获得最佳结果。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — Whisper 所归属的完整语音堆栈',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 加入 LLM 大脑',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 为运行 Whisper 的机器选规模',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：模型与硬件细节',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居的本地语音转文字：Whisper + HA（2026）',
      description: '用 Whisper 为 Home Assistant 添加本地语音识别与实时转写（2026）：支持中文等多语言识别，数据完全本地处理无需联网。含不同规格模型的延迟与精度对比，以及经由 Wyoming 协议接入 Assist 流水线的详细配置指南。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-whisper-home-assistant',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: '语音转文字' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant 该用哪个 Whisper 模型？', acceptedAnswer: { '@type': 'Answer', text: '在迷你 PC 的 CPU 上以 small 为默认，在 Raspberry Pi 上用 tiny 或 base，仅当你有 GPU 并需要在口音或噪声中更高精度时才用 medium 或 large。' } },
        { '@type': 'Question', name: '本地 Whisper 需要 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: 'small 及以下不需要——它们在 CPU 上运行。GPU 主要让 medium 和 large 足够快以供实时使用。也可经由 Wyoming 把 Whisper 卸载到更强的机器。' } },
        { '@type': 'Question', name: '本地 Whisper 离线时有多准？', acceptedAnswer: { '@type': 'Answer', text: '配合合适模型和好麦克风精度很高；更大的模型更好地处理口音和噪声。迷你 PC 上的 small 通常已足够准确，并完全离线运行。' } },
        { '@type': 'Question', name: '本地 Whisper 支持多语言吗？', acceptedAnswer: { '@type': 'Answer', text: '支持。Whisper 支持许多语言，因此非英语命令也能在没有云服务的情况下在本地转写。在加载项配置中设置语言。' } },
      ],
    },
  },
}
