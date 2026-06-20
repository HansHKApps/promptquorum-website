import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Build a Fully Local Voice Assistant for Your Smart Home (2026)',
    seoTitle: 'Local Voice Assistant 2026: Replace Alexa Privately',
    intro:
      'You can replace Alexa or Google with a fully local voice assistant built from Home Assistant Assist, local Whisper for speech-to-text, Piper for text-to-speech, and a local LLM as the brain. This guide covers the offline voice stack, each component, the Wyoming protocol that connects them, and the hardware you need — all private and working without the cloud.',
    metaDescription:
      'Replace Alexa with a fully local voice assistant: Home Assistant Assist + Whisper + Piper + a local LLM over the Wyoming protocol. Private and offline.',
    twitterDescription:
      'Build a private voice assistant that replaces Alexa: Assist + Whisper (STT) + Piper (TTS) + a local LLM. Fully offline, over Wyoming.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious Home Assistant users replacing cloud voice assistants',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'local voice assistant home assistant',
      'replace alexa home assistant',
      'private voice assistant',
      'home assistant assist whisper piper',
      'offline voice assistant',
    ],
    leadAnswerBlock:
      '**A fully local voice assistant combines Home Assistant Assist (intent), local Whisper (speech-to-text), Piper (text-to-speech), and a local LLM (reasoning) — all connected over the Wyoming protocol and running on your own hardware.** No audio or commands leave the house, and it works offline.',
    quickAnswerTop: {
      en: {
        question: 'How do I build a fully local voice assistant?',
        answer:
          'Use Home Assistant Assist as the pipeline, add the Whisper add-on for speech-to-text and the Piper add-on for text-to-speech, connect them via the Wyoming protocol, add a wake-word engine, and optionally set a local LLM as the conversation agent. Everything runs on your hardware with no cloud.',
        bullets: [
          'Assist = the voice pipeline inside Home Assistant',
          'Whisper = local speech-to-text; Piper = local text-to-speech',
          'Wyoming protocol connects the speech services',
          'Add a wake word engine for hands-free use',
          'Optional: a local LLM as the conversation agent',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Local Voice Stack', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper for STT', anchor: 'whisper' },
      { label: 'Piper for TTS', anchor: 'piper' },
      { label: 'The Wyoming Protocol', anchor: 'wyoming' },
      { label: 'Adding the LLM Brain', anchor: 'llm-brain' },
      { label: 'Hardware Needs', anchor: 'hardware' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A fully local voice assistant is Home Assistant Assist + Whisper (STT) + Piper (TTS) + an optional local LLM, connected over Wyoming and running offline.' },
      { type: 'plain-terms', content: 'A voice assistant has three jobs: hear you (speech-to-text), understand and act (intent or an LLM), and speak back (text-to-speech). Home Assistant can do all three on your own hardware using Whisper, Piper, and Assist, so unlike Alexa, no recording is sent to a company server.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant Assist is the local voice pipeline that ties everything together',
          'Whisper handles speech-to-text locally; pick a model size for your accuracy/speed/hardware trade-off',
          'Piper handles text-to-speech locally with natural-sounding voices',
          'The Wyoming protocol connects Assist to the Whisper and Piper services',
          'Add a wake-word engine (such as openWakeWord) for hands-free triggering',
          'Optional: set a local LLM as the conversation agent for natural-language understanding',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'The Fully-Local Voice Stack',
        content:
          '**A local voice assistant is four roles on your own hardware: capture and transcribe (Whisper), understand (Assist intents or a local LLM), respond (Piper), and trigger (wake word).** Each runs offline; the Wyoming protocol wires them together.',
        columns: ['Component', 'Role', 'Local?', 'Notes'],
        rows: [
          { 'Component': 'Assist', 'Role': 'Pipeline + intent', 'Local?': 'Yes', 'Notes': 'Built into Home Assistant' },
          { 'Component': 'Whisper', 'Role': 'Speech-to-text', 'Local?': 'Yes', 'Notes': 'Model size sets accuracy/speed' },
          { 'Component': 'Piper', 'Role': 'Text-to-speech', 'Local?': 'Yes', 'Notes': 'Natural local voices' },
          { 'Component': 'Wake word', 'Role': 'Hands-free trigger', 'Local?': 'Yes', 'Notes': 'e.g. openWakeWord' },
          { 'Component': 'Local LLM', 'Role': 'Understanding (optional)', 'Local?': 'Yes', 'Notes': 'Via Ollama as conversation agent' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist is the built-in voice pipeline that routes audio through speech-to-text, an agent, and text-to-speech.** It is configured under Settings → Voice assistants.',
        items: [
          'Assist works with built-in intents out of the box (no LLM required) for common commands.',
          'You select the STT engine (Whisper), the TTS engine (Piper), and the conversation agent.',
          'Use multiple pipelines if you want a fast intent-only assistant and a separate LLM-powered one.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper for Local Speech-to-Text',
        content:
          '**Whisper transcribes your speech locally; larger Whisper models are more accurate but need more compute.** Add it as the Whisper (faster-whisper) add-on and connect via Wyoming.',
        items: [
          'Whisper ships in sizes from tiny to large — smaller is faster, larger is more accurate.',
          'For a focused STT setup (models, hardware, accuracy), see [local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant).',
          'Whisper is multilingual, so non-English commands transcribe without a cloud service.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper for Local Text-to-Speech',
        content:
          '**Piper generates spoken responses locally with natural-sounding voices, fast enough for real-time replies on modest hardware.** Add it as the Piper add-on and select a voice.',
        items: [
          'Piper offers multiple languages and voices; pick one per pipeline.',
          'It runs well on a Raspberry Pi for typical response lengths.',
          'No audio is sent anywhere — the speech is synthesised on your device.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'The Wyoming Protocol',
        content:
          '**Wyoming is the protocol Home Assistant uses to connect Assist to local voice services like Whisper and Piper.** It lets the speech services run as separate add-ons or on separate machines.',
        items: [
          'Each service (Whisper, Piper, wake word) runs as a Wyoming endpoint.',
          'Assist discovers and uses them through the Wyoming integration.',
          'This modularity means you can offload Whisper to a more powerful box if needed.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Adding the LLM Brain',
        content:
          '**Set a local LLM as the conversation agent to understand natural language instead of only fixed intents.** This is optional but unlocks flexible phrasing.',
        items: [
          'Wire Ollama into Home Assistant first — see [the Ollama integration guide](/smart-home/home-assistant-ollama-integration).',
          'Use a small function-calling model so voice responses stay snappy.',
          'For the end-to-end picture, see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Needs',
        content:
          '**A mini PC comfortably runs Assist, Whisper, Piper, and a small LLM; a Raspberry Pi handles intent-only voice but struggles with large Whisper models and LLM inference.** Microphone hardware (voice satellites) captures audio around the house.',
        items: [
          'Use a mini PC if you want the LLM brain and larger Whisper models — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          'Use a Pi for a lightweight, intent-only assistant.',
          'Add voice-satellite hardware (microphone + speaker endpoints) for room coverage.',
          'Compare local vs cloud voice trade-offs in [local vs cloud voice assistants](/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can a local voice assistant fully replace Alexa?', a: 'For smart-home control and many routines, yes — Assist with Whisper, Piper, and a local LLM covers natural-language device control and responses. It does not replicate every third-party Alexa skill or cloud shopping feature, but it covers the core home-control use case privately.' },
          { q: 'Does a local voice assistant work offline?', a: 'Yes. Speech-to-text (Whisper), text-to-speech (Piper), intent handling, and an optional local LLM all run on your hardware, so the assistant works with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'How accurate is local speech recognition?', a: 'Accuracy depends on the Whisper model size and your microphone. Larger Whisper models are more accurate but slower; a mid-size model on a mini PC gives a good balance for home commands. See the local Whisper guide for sizing.' },
          { q: 'What hardware do I need for a local voice assistant?', a: 'A mini PC for the full stack (LLM + larger Whisper), or a Raspberry Pi for an intent-only assistant, plus microphone/speaker voice-satellite hardware for room coverage. A GPU or NPU lowers LLM and large-Whisper latency.' },
          { q: 'Can I use a custom wake word?', a: 'Yes. A local wake-word engine such as openWakeWord supports custom wake words and runs on your hardware, so hands-free triggering needs no cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — add the LLM conversation agent',
          '[Local Whisper + Home Assistant](/smart-home/local-whisper-home-assistant) — pick and tune speech-to-text',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full local-AI architecture',
          '[Local vs Cloud Voice Assistants](/smart-home/local-vs-cloud-voice-assistant) — the decision and trade-offs',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Build a Fully Local Voice Assistant for Your Smart Home (2026)',
      description: 'Replace Alexa with a fully local voice assistant: Home Assistant Assist + Whisper + Piper + a local LLM over the Wyoming protocol. Private and offline.',
      url: 'https://www.promptquorum.com/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Voice assistant' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can a local voice assistant fully replace Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'For smart-home control and many routines, yes — Assist with Whisper, Piper, and a local LLM covers natural-language device control privately. It does not replicate every third-party Alexa skill.' } },
        { '@type': 'Question', name: 'Does a local voice assistant work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Whisper, Piper, intent handling, and an optional local LLM all run on your hardware, so it works with no internet.' } },
        { '@type': 'Question', name: 'How accurate is local speech recognition?', acceptedAnswer: { '@type': 'Answer', text: 'Accuracy depends on Whisper model size and microphone. Larger models are more accurate but slower; a mid-size model on a mini PC balances both for home commands.' } },
        { '@type': 'Question', name: 'What hardware do I need for a local voice assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A mini PC for the full stack, or a Raspberry Pi for an intent-only assistant, plus microphone/speaker voice-satellite hardware. A GPU or NPU lowers latency.' } },
        { '@type': 'Question', name: 'Can I use a custom wake word?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A local wake-word engine such as openWakeWord supports custom wake words and runs on your hardware with no cloud.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'ابنِ مساعدًا صوتيًا محليًا كاملًا لمنزلك الذكي (2026)',
    seoTitle: 'مساعد صوتي محلي 2026: استبدل Alexa بشكل خاص',
    intro:
      'يمكنك استبدال Alexa أو Google بمساعد صوتي محلي كامل مبني من Home Assistant Assist، وWhisper المحلي لتحويل الكلام إلى نص، وPiper لتحويل النص إلى كلام، ونموذج لغوي محلي كعقل. يتناول هذا الدليل البنية الصوتية دون إنترنت، وكل مكون، وبروتوكول Wyoming الذي يربطها، والأجهزة التي تحتاجها — جميعها خاصة وتعمل بدون سحابة.',
    metaDescription:
      'Whisper + Piper + نموذج لغوي محلي عبر Wyoming يستبدل Alexa بمساعد Home Assistant كامل يعمل دون إنترنت — بدون سحابة، بدون تسجيلات خارجية.',
    twitterDescription:
      'ابنِ مساعدًا صوتيًا خاصًا يحل محل Alexa: Assist + Whisper (STT) + Piper (TTS) + نموذج لغوي محلي. كامل بدون إنترنت، عبر Wyoming.',
    readTime: '11 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant المهتمون بالخصوصية والذين يستبدلون المساعدين الصوتيين السحابيين',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'مساعد صوتي محلي home assistant',
      'استبدال alexa home assistant',
      'مساعد صوتي خاص',
      'home assistant assist whisper piper',
      'مساعد صوتي دون إنترنت',
    ],
    leadAnswerBlock:
      '**يجمع المساعد الصوتي المحلي الكامل بين Home Assistant Assist (النوايا)، وWhisper المحلي (الكلام إلى نص)، وPiper (النص إلى كلام)، ونموذج لغوي محلي (التفكير) — جميعها مترابطة عبر بروتوكول Wyoming وتعمل على أجهزتك الخاصة.** لا يغادر أي صوت أو أمر المنزل، ويعمل دون إنترنت.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني مساعدًا صوتيًا محليًا كاملًا؟',
        answer:
          'استخدم Home Assistant Assist كخط أنابيب، وأضف إضافة Whisper لتحويل الكلام إلى نص وإضافة Piper لتحويل النص إلى كلام، وربطهما عبر بروتوكول Wyoming، وأضف محرك كلمة التنبيه، واضبط اختياريًا نموذجًا لغويًا محليًا كعميل محادثة. كل شيء يعمل على أجهزتك بدون سحابة.',
        bullets: [
          'Assist = خط أنابيب الصوت داخل Home Assistant',
          'Whisper = كلام إلى نص محلي؛ Piper = نص إلى كلام محلي',
          'بروتوكول Wyoming يربط خدمات الكلام',
          'أضف محرك كلمة التنبيه للاستخدام دون اليدين',
          'اختياري: نموذج لغوي محلي كعميل محادثة',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'البنية الصوتية المحلية', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper لتحويل الكلام إلى نص', anchor: 'whisper' },
      { label: 'Piper لتحويل النص إلى كلام', anchor: 'piper' },
      { label: 'بروتوكول Wyoming', anchor: 'wyoming' },
      { label: 'إضافة عقل النموذج اللغوي', anchor: 'llm-brain' },
      { label: 'متطلبات الأجهزة', anchor: 'hardware' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'المساعد الصوتي المحلي الكامل هو Home Assistant Assist + Whisper (STT) + Piper (TTS) + نموذج لغوي محلي اختياري، مترابطة عبر Wyoming وتعمل دون إنترنت.' },
      { type: 'plain-terms', content: 'للمساعد الصوتي ثلاث وظائف: سماعك (كلام إلى نص)، والفهم والتصرف (نوايا أو نموذج لغوي)، والتحدث مرة أخرى (نص إلى كلام). يمكن لـ Home Assistant فعل الثلاثة على أجهزتك باستخدام Whisper وPiper وAssist، لذا على خلاف Alexa، لا يُرسَل أي تسجيل إلى خادم شركة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Home Assistant Assist هو خط أنابيب الصوت المحلي الذي يربط كل شيء معًا',
          'Whisper يتعامل مع تحويل الكلام إلى نص محليًا؛ اختر حجم النموذج لتوازن الدقة/السرعة/الأجهزة',
          'Piper يتعامل مع تحويل النص إلى كلام محليًا بأصوات طبيعية الاستماع',
          'بروتوكول Wyoming يربط Assist بخدمات Whisper وPiper',
          'أضف محرك كلمة التنبيه (مثل openWakeWord) للتشغيل دون اليدين',
          'اختياري: اضبط نموذجًا لغويًا محليًا كعميل محادثة لفهم اللغة الطبيعية',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'البنية الصوتية المحلية الكاملة',
        content:
          '**المساعد الصوتي المحلي أربعة أدوار على أجهزتك الخاصة: الالتقاط والنسخ (Whisper)، والفهم (نوايا Assist أو نموذج لغوي محلي)، والاستجابة (Piper)، والتشغيل (كلمة التنبيه).** كل واحدة تعمل دون إنترنت؛ بروتوكول Wyoming يوصلها معًا.',
        columns: ['المكوّن', 'الدور', 'محلي؟', 'ملاحظات'],
        rows: [
          { 'المكوّن': 'Assist', 'الدور': 'خط أنابيب + النوايا', 'محلي؟': 'نعم', 'ملاحظات': 'مدمج في Home Assistant' },
          { 'المكوّن': 'Whisper', 'الدور': 'كلام إلى نص', 'محلي؟': 'نعم', 'ملاحظات': 'حجم النموذج يحدد الدقة/السرعة' },
          { 'المكوّن': 'Piper', 'الدور': 'نص إلى كلام', 'محلي؟': 'نعم', 'ملاحظات': 'أصوات محلية طبيعية' },
          { 'المكوّن': 'كلمة التنبيه', 'الدور': 'تشغيل دون اليدين', 'محلي؟': 'نعم', 'ملاحظات': 'مثل openWakeWord' },
          { 'المكوّن': 'النموذج اللغوي المحلي', 'الدور': 'الفهم (اختياري)', 'محلي؟': 'نعم', 'ملاحظات': 'عبر Ollama كعميل محادثة' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist هو خط أنابيب الصوت المدمج الذي يُوجِّه الصوت عبر تحويل الكلام إلى نص، وعميل، وتحويل النص إلى كلام.** يُعدَّ في الإعدادات ← المساعدون الصوتيون.',
        items: [
          'يعمل Assist مع النوايا المدمجة فورًا (بدون نموذج لغوي) للأوامر الشائعة.',
          'تختار محرك STT (Whisper)، ومحرك TTS (Piper)، وعميل المحادثة.',
          'استخدم خطوط أنابيب متعددة إذا أردت مساعدًا سريعًا للنوايا فقط وآخر مشغَّلًا بنموذج لغوي.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper لتحويل الكلام إلى نص محليًا',
        content:
          '**ينسخ Whisper كلامك محليًا؛ النماذج الأكبر أكثر دقةً لكنها تحتاج معالجة أكثر.** أضفه كإضافة Whisper (faster-whisper) واربطه عبر Wyoming.',
        items: [
          'يأتي Whisper بأحجام من tiny إلى large — الأصغر أسرع، والأكبر أدق.',
          'لإعداد STT المركّز (النماذج، الأجهزة، الدقة)، راجع [Whisper المحلي + Home Assistant](/ar/smart-home/local-whisper-home-assistant).',
          'Whisper متعدد اللغات، لذا الأوامر غير الإنجليزية تُنسَخ بدون خدمة سحابية.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper لتحويل النص إلى كلام محليًا',
        content:
          '**يُولِّد Piper ردودًا منطوقة محليًا بأصوات طبيعية الاستماع، بسرعة كافية للردود الفورية على أجهزة متواضعة.** أضفه كإضافة Piper واختر صوتًا.',
        items: [
          'يوفر Piper لغات وأصوات متعددة؛ اختر واحدًا لكل خط أنابيب.',
          'يعمل جيدًا على Raspberry Pi لأطوال الردود المعتادة.',
          'لا يُرسَل أي صوت إلى أي مكان — الكلام مُولَّد على جهازك.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'بروتوكول Wyoming',
        content:
          '**Wyoming هو البروتوكول الذي يستخدمه Home Assistant لربط Assist بخدمات الصوت المحلية مثل Whisper وPiper.** يتيح تشغيل خدمات الكلام كإضافات منفصلة أو على أجهزة منفصلة.',
        items: [
          'كل خدمة (Whisper، Piper، كلمة التنبيه) تعمل كنقطة نهاية Wyoming.',
          'يكتشفها Assist ويستخدمها عبر تكامل Wyoming.',
          'هذه الوحدات تعني أنك تستطيع تفريغ Whisper على جهاز أكثر قوةً إذا لزم الأمر.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'إضافة عقل النموذج اللغوي',
        content:
          '**اضبط نموذجًا لغويًا محليًا كعميل محادثة لفهم اللغة الطبيعية بدلًا من النوايا الثابتة فقط.** هذا اختياري لكنه يفتح الصياغة المرنة.',
        items: [
          'اربط Ollama بـ Home Assistant أولًا — راجع [دليل تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration).',
          'استخدم نموذجًا صغيرًا يدعم استدعاء الوظائف حتى تبقى ردود الصوت سريعة.',
          'للصورة الشاملة من الطرف إلى الطرف، راجع [تشغيل منزلك الذكي بنموذج لغوي محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة',
        content:
          '**جهاز كمبيوتر مصغر يُشغِّل بسهولة Assist وWhisper وPiper ونموذجًا لغويًا صغيرًا؛ Raspberry Pi يتعامل مع الصوت القائم على النوايا فقط لكنه يعاني مع نماذج Whisper الكبيرة واستنتاج النماذج اللغوية.** أجهزة الميكروفون (الأقمار الصوتية) تلتقط الصوت في أرجاء المنزل.',
        items: [
          'استخدم جهاز كمبيوتر مصغر إذا أردت عقل النموذج اللغوي ونماذج Whisper الأكبر — راجع [أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          'استخدم Pi لمساعد خفيف الوزن قائم على النوايا فقط.',
          'أضف أجهزة الأقمار الصوتية (نقاط نهاية الميكروفون + مكبر الصوت) لتغطية الغرف.',
          'قارن المقايضات بين الصوت المحلي والسحابي في [المساعدون الصوتيون المحليون مقابل السحابيون](/ar/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يمكن للمساعد الصوتي المحلي أن يحل محل Alexa بالكامل؟', a: 'للتحكم في المنزل الذكي وكثير من الروتينات، نعم — Assist مع Whisper وPiper ونموذج لغوي محلي يغطي التحكم في الأجهزة بلغة طبيعية والردود بشكل خاص. لا يُكرِّر كل مهارة Alexa خارجية أو ميزة التسوق السحابية، لكنه يغطي حالة الاستخدام الأساسية للتحكم في المنزل بشكل خاص.' },
          { q: 'هل يعمل المساعد الصوتي المحلي دون إنترنت؟', a: 'نعم. تحويل الكلام إلى نص (Whisper)، وتحويل النص إلى كلام (Piper)، ومعالجة النوايا، ونموذج لغوي محلي اختياري تعمل جميعها على أجهزتك، لذا يعمل المساعد بدون إنترنت. الوصول عن بُعد من خارج المنزل فقط يحتاج اتصالًا.' },
          { q: 'ما دقة التعرف على الكلام المحلي؟', a: 'تعتمد الدقة على حجم نموذج Whisper والميكروفون. النماذج الأكبر أكثر دقةً لكن أبطأ؛ نموذج متوسط الحجم على جهاز كمبيوتر مصغر يعطي توازنًا جيدًا لأوامر المنزل. راجع دليل Whisper المحلي للتحجيم.' },
          { q: 'ما الأجهزة التي أحتاجها للمساعد الصوتي المحلي؟', a: 'جهاز كمبيوتر مصغر للبنية الكاملة (نموذج لغوي + Whisper أكبر)، أو Raspberry Pi لمساعد قائم على النوايا فقط، بالإضافة إلى أجهزة الأقمار الصوتية (ميكروفون + مكبر صوت) لتغطية الغرف. GPU أو NPU يخفض كمون النموذج اللغوي وWhisper الكبير.' },
          { q: 'هل يمكنني استخدام كلمة تنبيه مخصصة؟', a: 'نعم. محرك كلمة التنبيه المحلي مثل openWakeWord يدعم كلمات تنبيه مخصصة ويعمل على أجهزتك، لذا لا يحتاج التشغيل دون اليدين إلى سحابة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — إضافة عميل المحادثة بالنموذج اللغوي',
          '[Whisper المحلي + Home Assistant](/ar/smart-home/local-whisper-home-assistant) — اختر وضبط تحويل الكلام إلى نص',
          '[تشغيل منزلك الذكي بنموذج لغوي محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — البنية الكاملة للذكاء الاصطناعي المحلي',
          '[المساعدون الصوتيون المحليون مقابل السحابيون](/ar/smart-home/local-vs-cloud-voice-assistant) — القرار والمقايضات',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — عبر المجموعات: تشغيل نموذج محلي',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ابنِ مساعدًا صوتيًا محليًا كاملًا لمنزلك الذكي (2026)',
      description: 'استبدل Alexa بمساعد صوتي محلي كامل: Home Assistant Assist + Whisper + Piper + نموذج لغوي محلي عبر بروتوكول Wyoming. خاص ويعمل دون إنترنت.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'مساعد صوتي' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يمكن للمساعد الصوتي المحلي أن يحل محل Alexa بالكامل؟', acceptedAnswer: { '@type': 'Answer', text: 'للتحكم في المنزل الذكي وكثير من الروتينات، نعم — Assist مع Whisper وPiper ونموذج لغوي محلي يغطي التحكم في الأجهزة بلغة طبيعية بشكل خاص. لا يُكرِّر كل مهارة Alexa خارجية.' } },
        { '@type': 'Question', name: 'هل يعمل المساعد الصوتي المحلي دون إنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. Whisper وPiper ومعالجة النوايا ونموذج لغوي محلي اختياري تعمل جميعها على أجهزتك، لذا يعمل بدون إنترنت.' } },
        { '@type': 'Question', name: 'ما دقة التعرف على الكلام المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'تعتمد الدقة على حجم نموذج Whisper والميكروفون. النماذج الأكبر أدق لكن أبطأ؛ نموذج متوسط الحجم على جهاز كمبيوتر مصغر يوازن بينهما لأوامر المنزل.' } },
        { '@type': 'Question', name: 'ما الأجهزة التي أحتاجها للمساعد الصوتي المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'جهاز كمبيوتر مصغر للبنية الكاملة، أو Raspberry Pi لمساعد قائم على النوايا فقط، بالإضافة إلى أجهزة الأقمار الصوتية. GPU أو NPU يخفض الكمون.' } },
        { '@type': 'Question', name: 'هل يمكنني استخدام كلمة تنبيه مخصصة؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. محرك كلمة التنبيه المحلي مثل openWakeWord يدعم كلمات تنبيه مخصصة ويعمل على أجهزتك بدون سحابة.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Einen vollständig lokalen Sprachassistenten fürs Smart Home bauen (2026)',
    seoTitle: 'Lokaler Sprachassistent 2026: Alexa privat ersetzen',
    intro:
      'Sie können Alexa oder Google durch einen vollständig lokalen Sprachassistenten ersetzen, gebaut aus Home Assistant Assist, lokalem Whisper für Sprache-zu-Text, Piper für Text-zu-Sprache und einem lokalen LLM als Gehirn. Dieser Leitfaden behandelt den Offline-Sprach-Stack, jede Komponente, das Wyoming-Protokoll, das sie verbindet, und die nötige Hardware – alles privat und ohne Cloud.',
    metaDescription:
      'Alexa lokal ersetzen (2026): Home Assistant Assist + Whisper + Piper + lokales LLM via Wyoming-Protokoll. Privat, vollständig offline, kein Cloud-Upload.',
    twitterDescription:
      'Bauen Sie einen privaten Sprachassistenten als Alexa-Ersatz: Assist + Whisper (STT) + Piper (TTS) + ein lokales LLM. Vollständig offline, über Wyoming.',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Datenschutzbewusste Home-Assistant-Nutzer, die Cloud-Sprachassistenten ersetzen',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'lokaler sprachassistent home assistant',
      'alexa ersetzen home assistant',
      'privater sprachassistent',
      'home assistant assist whisper piper',
      'offline sprachassistent',
    ],
    leadAnswerBlock:
      '**Ein vollständig lokaler Sprachassistent kombiniert Home Assistant Assist (Intent), lokales Whisper (Sprache-zu-Text), Piper (Text-zu-Sprache) und ein lokales LLM (Schlussfolgern) – alle über das Wyoming-Protokoll verbunden und auf Ihrer eigenen Hardware laufend.** Kein Audio oder Befehl verlässt das Haus, und er funktioniert offline.',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich einen vollständig lokalen Sprachassistenten?',
        answer:
          'Nutzen Sie Home Assistant Assist als Pipeline, fügen Sie das Whisper-Add-on für Sprache-zu-Text und das Piper-Add-on für Text-zu-Sprache hinzu, verbinden Sie sie über das Wyoming-Protokoll, fügen Sie eine Aktivierungswort-Engine hinzu und setzen Sie optional ein lokales LLM als Konversations-Agenten. Alles läuft auf Ihrer Hardware ohne Cloud.',
        bullets: [
          'Assist = die Sprach-Pipeline in Home Assistant',
          'Whisper = lokales Sprache-zu-Text; Piper = lokales Text-zu-Sprache',
          'Das Wyoming-Protokoll verbindet die Sprachdienste',
          'Fügen Sie eine Aktivierungswort-Engine für freihändige Nutzung hinzu',
          'Optional: ein lokales LLM als Konversations-Agent',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Der lokale Sprach-Stack', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper für STT', anchor: 'whisper' },
      { label: 'Piper für TTS', anchor: 'piper' },
      { label: 'Das Wyoming-Protokoll', anchor: 'wyoming' },
      { label: 'Das LLM-Gehirn hinzufügen', anchor: 'llm-brain' },
      { label: 'Hardware-Bedarf', anchor: 'hardware' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein vollständig lokaler Sprachassistent ist Home Assistant Assist + Whisper (STT) + Piper (TTS) + ein optionales lokales LLM, über Wyoming verbunden und offline laufend.' },
      { type: 'plain-terms', content: 'Ein Sprachassistent hat drei Aufgaben: Sie hören (Sprache-zu-Text), verstehen und handeln (Intent oder ein LLM) und zurücksprechen (Text-zu-Sprache). Home Assistant kann alle drei auf Ihrer eigenen Hardware mit Whisper, Piper und Assist erledigen, sodass anders als bei Alexa keine Aufnahme an einen Firmen-Server gesendet wird.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant Assist ist die lokale Sprach-Pipeline, die alles verbindet',
          'Whisper übernimmt Sprache-zu-Text lokal; wählen Sie eine Modellgröße für Ihren Genauigkeits-/Tempo-/Hardware-Kompromiss',
          'Piper übernimmt Text-zu-Sprache lokal mit natürlich klingenden Stimmen',
          'Das Wyoming-Protokoll verbindet Assist mit den Whisper- und Piper-Diensten',
          'Fügen Sie eine Aktivierungswort-Engine (etwa openWakeWord) für freihändiges Auslösen hinzu',
          'Optional: ein lokales LLM als Konversations-Agent für natürlichsprachliches Verstehen',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'Der vollständig lokale Sprach-Stack',
        content:
          '**Ein lokaler Sprachassistent sind vier Rollen auf Ihrer eigenen Hardware: erfassen und transkribieren (Whisper), verstehen (Assist-Intents oder ein lokales LLM), antworten (Piper) und auslösen (Aktivierungswort).** Jede läuft offline; das Wyoming-Protokoll verdrahtet sie.',
        columns: ['Komponente', 'Rolle', 'Lokal?', 'Hinweise'],
        rows: [
          { 'Komponente': 'Assist', 'Rolle': 'Pipeline + Intent', 'Lokal?': 'Ja', 'Hinweise': 'In Home Assistant eingebaut' },
          { 'Komponente': 'Whisper', 'Rolle': 'Sprache-zu-Text', 'Lokal?': 'Ja', 'Hinweise': 'Modellgröße bestimmt Genauigkeit/Tempo' },
          { 'Komponente': 'Piper', 'Rolle': 'Text-zu-Sprache', 'Lokal?': 'Ja', 'Hinweise': 'Natürliche lokale Stimmen' },
          { 'Komponente': 'Aktivierungswort', 'Rolle': 'Freihändiger Auslöser', 'Lokal?': 'Ja', 'Hinweise': 'z. B. openWakeWord' },
          { 'Komponente': 'Lokales LLM', 'Rolle': 'Verstehen (optional)', 'Lokal?': 'Ja', 'Hinweise': 'Über Ollama als Konversations-Agent' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist ist die eingebaute Sprach-Pipeline, die Audio durch Sprache-zu-Text, einen Agenten und Text-zu-Sprache leitet.** Sie wird unter Einstellungen → Sprachassistenten konfiguriert.',
        items: [
          'Assist funktioniert für übliche Befehle out of the box mit eingebauten Intents (kein LLM nötig).',
          'Sie wählen die STT-Engine (Whisper), die TTS-Engine (Piper) und den Konversations-Agenten.',
          'Nutzen Sie mehrere Pipelines, wenn Sie einen schnellen Intent-Only-Assistenten und einen separaten LLM-gestützten wollen.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper für lokales Sprache-zu-Text',
        content:
          '**Whisper transkribiert Ihre Sprache lokal; größere Whisper-Modelle sind genauer, brauchen aber mehr Rechenleistung.** Fügen Sie es als Whisper-(faster-whisper-)Add-on hinzu und verbinden Sie es über Wyoming.',
        items: [
          'Whisper gibt es in Größen von tiny bis large – kleiner ist schneller, größer ist genauer.',
          'Für ein fokussiertes STT-Setup (Modelle, Hardware, Genauigkeit) siehe [lokales Whisper + Home Assistant](/de/smart-home/local-whisper-home-assistant).',
          'Whisper ist mehrsprachig, sodass nicht-englische Befehle ohne Cloud-Dienst transkribiert werden.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper für lokales Text-zu-Sprache',
        content:
          '**Piper erzeugt gesprochene Antworten lokal mit natürlich klingenden Stimmen, schnell genug für Echtzeit-Antworten auf bescheidener Hardware.** Fügen Sie es als Piper-Add-on hinzu und wählen Sie eine Stimme.',
        items: [
          'Piper bietet mehrere Sprachen und Stimmen; wählen Sie eine pro Pipeline.',
          'Es läuft für typische Antwortlängen gut auf einem Raspberry Pi.',
          'Kein Audio wird irgendwohin gesendet – die Sprache wird auf Ihrem Gerät synthetisiert.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'Das Wyoming-Protokoll',
        content:
          '**Wyoming ist das Protokoll, das Home Assistant nutzt, um Assist mit lokalen Sprachdiensten wie Whisper und Piper zu verbinden.** Es lässt die Sprachdienste als separate Add-ons oder auf separaten Maschinen laufen.',
        items: [
          'Jeder Dienst (Whisper, Piper, Aktivierungswort) läuft als Wyoming-Endpunkt.',
          'Assist erkennt und nutzt sie über die Wyoming-Integration.',
          'Diese Modularität bedeutet, dass Sie Whisper bei Bedarf auf ein leistungsfähigeres Gerät auslagern können.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Das LLM-Gehirn hinzufügen',
        content:
          '**Setzen Sie ein lokales LLM als Konversations-Agenten, um natürliche Sprache zu verstehen statt nur feste Intents.** Das ist optional, schaltet aber flexible Formulierungen frei.',
        items: [
          'Verdrahten Sie zuerst Ollama in Home Assistant – siehe [der Leitfaden zur Ollama-Integration](/de/smart-home/home-assistant-ollama-integration).',
          'Nutzen Sie ein kleines Function-Calling-Modell, damit Sprachantworten flott bleiben.',
          'Für das End-to-End-Bild siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Bedarf',
        content:
          '**Ein Mini-PC betreibt Assist, Whisper, Piper und ein kleines LLM bequem; ein Raspberry Pi bewältigt Intent-Only-Sprache, hat aber mit großen Whisper-Modellen und LLM-Inferenz Schwierigkeiten.** Mikrofon-Hardware (Sprach-Satelliten) erfasst Audio im ganzen Haus.',
        items: [
          'Nutzen Sie einen Mini-PC, wenn Sie das LLM-Gehirn und größere Whisper-Modelle wollen – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          'Nutzen Sie einen Pi für einen leichtgewichtigen Intent-Only-Assistenten.',
          'Fügen Sie Sprach-Satelliten-Hardware (Mikrofon- + Lautsprecher-Endpunkte) für die Raumabdeckung hinzu.',
          'Vergleichen Sie die Kompromisse lokal vs Cloud in [lokale vs Cloud-Sprachassistenten](/de/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Kann ein lokaler Sprachassistent Alexa vollständig ersetzen?', a: 'Für die Smart-Home-Steuerung und viele Routinen ja – Assist mit Whisper, Piper und einem lokalen LLM deckt natürlichsprachliche Gerätesteuerung und Antworten ab. Er repliziert nicht jeden Alexa-Skill von Drittanbietern oder Cloud-Shopping-Funktionen, deckt aber den Kern-Anwendungsfall der Heimsteuerung privat ab.' },
          { q: 'Funktioniert ein lokaler Sprachassistent offline?', a: 'Ja. Sprache-zu-Text (Whisper), Text-zu-Sprache (Piper), die Intent-Verarbeitung und ein optionales lokales LLM laufen alle auf Ihrer Hardware, sodass der Assistent ohne Internet funktioniert. Nur der Fernzugriff von außerhalb des Hauses benötigt Konnektivität.' },
          { q: 'Wie genau ist lokale Spracherkennung?', a: 'Die Genauigkeit hängt von der Whisper-Modellgröße und Ihrem Mikrofon ab. Größere Whisper-Modelle sind genauer, aber langsamer; ein mittelgroßes Modell auf einem Mini-PC gibt eine gute Balance für Heimbefehle. Siehe den lokalen Whisper-Leitfaden zur Dimensionierung.' },
          { q: 'Welche Hardware brauche ich für einen lokalen Sprachassistenten?', a: 'Einen Mini-PC für den vollständigen Stack (LLM + größeres Whisper) oder einen Raspberry Pi für einen Intent-Only-Assistenten, plus Mikrofon-/Lautsprecher-Sprach-Satelliten-Hardware für die Raumabdeckung. Eine GPU oder NPU senkt die LLM- und Large-Whisper-Latenz.' },
          { q: 'Kann ich ein eigenes Aktivierungswort nutzen?', a: 'Ja. Eine lokale Aktivierungswort-Engine wie openWakeWord unterstützt eigene Aktivierungswörter und läuft auf Ihrer Hardware, sodass freihändiges Auslösen keine Cloud braucht.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – den LLM-Konversations-Agenten hinzufügen',
          '[Lokales Whisper + Home Assistant](/de/smart-home/local-whisper-home-assistant) – Sprache-zu-Text wählen und abstimmen',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – die vollständige lokale KI-Architektur',
          '[Lokale vs Cloud-Sprachassistenten](/de/smart-home/local-vs-cloud-voice-assistant) – die Entscheidung und Kompromisse',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: ein lokales Modell betreiben',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Einen vollständig lokalen Sprachassistenten fürs Smart Home bauen (2026)',
      description: 'Alexa lokal ersetzen (2026): Home Assistant Assist + Whisper + Piper + lokales LLM via Wyoming-Protokoll. Privat, vollständig offline, kein Cloud-Upload.',
      url: 'https://www.promptquorum.com/de/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Sprachassistent' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Kann ein lokaler Sprachassistent Alexa vollständig ersetzen?', acceptedAnswer: { '@type': 'Answer', text: 'Für die Smart-Home-Steuerung und viele Routinen ja – Assist mit Whisper, Piper und einem lokalen LLM deckt natürlichsprachliche Gerätesteuerung privat ab. Er repliziert nicht jeden Alexa-Skill von Drittanbietern.' } },
        { '@type': 'Question', name: 'Funktioniert ein lokaler Sprachassistent offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Whisper, Piper, die Intent-Verarbeitung und ein optionales lokales LLM laufen alle auf Ihrer Hardware, sodass er ohne Internet funktioniert.' } },
        { '@type': 'Question', name: 'Wie genau ist lokale Spracherkennung?', acceptedAnswer: { '@type': 'Answer', text: 'Die Genauigkeit hängt von der Whisper-Modellgröße und dem Mikrofon ab. Größere Modelle sind genauer, aber langsamer; ein mittelgroßes Modell auf einem Mini-PC balanciert beides.' } },
        { '@type': 'Question', name: 'Welche Hardware brauche ich für einen lokalen Sprachassistenten?', acceptedAnswer: { '@type': 'Answer', text: 'Einen Mini-PC für den vollständigen Stack oder einen Raspberry Pi für einen Intent-Only-Assistenten, plus Mikrofon-/Lautsprecher-Sprach-Satelliten-Hardware. Eine GPU oder NPU senkt die Latenz.' } },
        { '@type': 'Question', name: 'Kann ich ein eigenes Aktivierungswort nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Eine lokale Aktivierungswort-Engine wie openWakeWord unterstützt eigene Aktivierungswörter und läuft auf Ihrer Hardware ohne Cloud.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Monta un Asistente de Voz Totalmente Local para tu Smart Home (2026)',
    seoTitle: 'Asistente de Voz Local 2026: Reemplaza Alexa en Privado',
    intro:
      'Puedes reemplazar Alexa o Google por un asistente de voz totalmente local construido con Home Assistant Assist, Whisper local para voz-a-texto, Piper para texto-a-voz y un LLM local como cerebro. Esta guía cubre el stack de voz offline, cada componente, el protocolo Wyoming que los conecta y el hardware que necesitas, todo privado y funcionando sin la nube.',
    metaDescription:
      'Reemplaza Alexa por un asistente de voz totalmente local: Home Assistant Assist + Whisper + Piper + un LLM local sobre el protocolo Wyoming. Privado y offline.',
    twitterDescription:
      'Monta un asistente de voz privado que reemplaza a Alexa: Assist + Whisper (STT) + Piper (TTS) + un LLM local. Totalmente offline, sobre Wyoming.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant preocupados por la privacidad que reemplazan asistentes de voz en la nube',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'asistente de voz local home assistant',
      'reemplazar alexa home assistant',
      'asistente de voz privado',
      'home assistant assist whisper piper',
      'asistente de voz offline',
    ],
    leadAnswerBlock:
      '**Un asistente de voz totalmente local combina Home Assistant Assist (intención), Whisper local (voz-a-texto), Piper (texto-a-voz) y un LLM local (razonamiento), todos conectados sobre el protocolo Wyoming y ejecutándose en tu propio hardware.** Ningún audio ni comando sale de casa, y funciona sin conexión.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo monto un asistente de voz totalmente local?',
        answer:
          'Usa Home Assistant Assist como pipeline, añade el add-on de Whisper para voz-a-texto y el add-on de Piper para texto-a-voz, conéctalos vía el protocolo Wyoming, añade un motor de palabra de activación y opcionalmente fija un LLM local como agente de conversación. Todo corre en tu hardware sin nube.',
        bullets: [
          'Assist = el pipeline de voz dentro de Home Assistant',
          'Whisper = voz-a-texto local; Piper = texto-a-voz local',
          'El protocolo Wyoming conecta los servicios de voz',
          'Añade un motor de palabra de activación para uso manos libres',
          'Opcional: un LLM local como agente de conversación',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'El stack de voz local', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper para STT', anchor: 'whisper' },
      { label: 'Piper para TTS', anchor: 'piper' },
      { label: 'El protocolo Wyoming', anchor: 'wyoming' },
      { label: 'Añadir el cerebro LLM', anchor: 'llm-brain' },
      { label: 'Necesidades de hardware', anchor: 'hardware' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un asistente de voz totalmente local es Home Assistant Assist + Whisper (STT) + Piper (TTS) + un LLM local opcional, conectados sobre Wyoming y funcionando offline.' },
      { type: 'plain-terms', content: 'Un asistente de voz tiene tres tareas: oírte (voz-a-texto), entender y actuar (intención o un LLM) y responder hablando (texto-a-voz). Home Assistant puede hacer las tres en tu propio hardware con Whisper, Piper y Assist, así que a diferencia de Alexa, ninguna grabación se envía a un servidor de empresa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant Assist es el pipeline de voz local que une todo',
          'Whisper maneja voz-a-texto localmente; elige un tamaño de modelo por tu equilibrio precisión/velocidad/hardware',
          'Piper maneja texto-a-voz localmente con voces de sonido natural',
          'El protocolo Wyoming conecta Assist con los servicios Whisper y Piper',
          'Añade un motor de palabra de activación (como openWakeWord) para el disparo manos libres',
          'Opcional: fija un LLM local como agente de conversación para la comprensión en lenguaje natural',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'El stack de voz totalmente local',
        content:
          '**Un asistente de voz local son cuatro roles en tu propio hardware: capturar y transcribir (Whisper), entender (intenciones de Assist o un LLM local), responder (Piper) y disparar (palabra de activación).** Cada uno corre offline; el protocolo Wyoming los enlaza.',
        columns: ['Componente', 'Rol', '¿Local?', 'Notas'],
        rows: [
          { 'Componente': 'Assist', 'Rol': 'Pipeline + intención', '¿Local?': 'Sí', 'Notas': 'Incorporado en Home Assistant' },
          { 'Componente': 'Whisper', 'Rol': 'Voz-a-texto', '¿Local?': 'Sí', 'Notas': 'El tamaño del modelo fija precisión/velocidad' },
          { 'Componente': 'Piper', 'Rol': 'Texto-a-voz', '¿Local?': 'Sí', 'Notas': 'Voces locales naturales' },
          { 'Componente': 'Palabra de activación', 'Rol': 'Disparo manos libres', '¿Local?': 'Sí', 'Notas': 'p. ej. openWakeWord' },
          { 'Componente': 'LLM local', 'Rol': 'Comprensión (opcional)', '¿Local?': 'Sí', 'Notas': 'Vía Ollama como agente de conversación' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist es el pipeline de voz incorporado que enruta el audio por voz-a-texto, un agente y texto-a-voz.** Se configura en Ajustes → Asistentes de voz.',
        items: [
          'Assist funciona con intenciones incorporadas de fábrica (sin LLM) para comandos comunes.',
          'Seleccionas el motor STT (Whisper), el motor TTS (Piper) y el agente de conversación.',
          'Usa varios pipelines si quieres un asistente rápido solo-intención y otro separado con LLM.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper para voz-a-texto local',
        content:
          '**Whisper transcribe tu voz localmente; los modelos Whisper más grandes son más precisos pero necesitan más cómputo.** Añádelo como el add-on de Whisper (faster-whisper) y conéctalo vía Wyoming.',
        items: [
          'Whisper viene en tamaños de tiny a large — más pequeño es más rápido, más grande es más preciso.',
          'Para una configuración STT enfocada (modelos, hardware, precisión), consulta [Whisper local + Home Assistant](/es/smart-home/local-whisper-home-assistant).',
          'Whisper es multilingüe, así que los comandos en otros idiomas se transcriben sin un servicio en la nube.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper para texto-a-voz local',
        content:
          '**Piper genera respuestas habladas localmente con voces de sonido natural, lo bastante rápido para respuestas en tiempo real en hardware modesto.** Añádelo como el add-on de Piper y selecciona una voz.',
        items: [
          'Piper ofrece varios idiomas y voces; elige una por pipeline.',
          'Funciona bien en una Raspberry Pi para longitudes de respuesta típicas.',
          'No se envía audio a ningún sitio — el habla se sintetiza en tu dispositivo.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'El protocolo Wyoming',
        content:
          '**Wyoming es el protocolo que Home Assistant usa para conectar Assist con servicios de voz locales como Whisper y Piper.** Permite que los servicios de voz corran como add-ons separados o en máquinas separadas.',
        items: [
          'Cada servicio (Whisper, Piper, palabra de activación) corre como un endpoint Wyoming.',
          'Assist los descubre y usa mediante la integración Wyoming.',
          'Esta modularidad significa que puedes descargar Whisper a un equipo más potente si hace falta.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Añadir el cerebro LLM',
        content:
          '**Fija un LLM local como agente de conversación para entender lenguaje natural en vez de solo intenciones fijas.** Es opcional pero desbloquea frases flexibles.',
        items: [
          'Cablea Ollama en Home Assistant primero — consulta [la guía de integración de Ollama](/es/smart-home/home-assistant-ollama-integration).',
          'Usa un modelo pequeño con llamada a funciones para que las respuestas de voz se mantengan ágiles.',
          'Para la imagen de extremo a extremo, consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Necesidades de hardware',
        content:
          '**Un mini PC ejecuta cómodamente Assist, Whisper, Piper y un LLM pequeño; una Raspberry Pi maneja voz solo-intención pero tiene dificultades con modelos Whisper grandes e inferencia de LLM.** El hardware de micrófono (satélites de voz) captura el audio por la casa.',
        items: [
          'Usa un mini PC si quieres el cerebro LLM y modelos Whisper más grandes — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
          'Usa una Pi para un asistente ligero solo-intención.',
          'Añade hardware de satélite de voz (endpoints de micrófono + altavoz) para la cobertura por habitaciones.',
          'Compara los compromisos local vs nube en [asistentes de voz local vs nube](/es/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede un asistente de voz local reemplazar por completo a Alexa?', a: 'Para el control del smart home y muchas rutinas, sí — Assist con Whisper, Piper y un LLM local cubre el control de dispositivos y las respuestas en lenguaje natural. No replica cada skill de Alexa de terceros ni funciones de compra en la nube, pero cubre el caso de uso central del control del hogar de forma privada.' },
          { q: '¿Funciona un asistente de voz local sin conexión?', a: 'Sí. Voz-a-texto (Whisper), texto-a-voz (Piper), el manejo de intenciones y un LLM local opcional corren todos en tu hardware, así que el asistente funciona sin internet. Solo el acceso remoto desde fuera del hogar necesita conectividad.' },
          { q: '¿Qué tan precisa es el reconocimiento de voz local?', a: 'La precisión depende del tamaño del modelo Whisper y tu micrófono. Los modelos Whisper más grandes son más precisos pero más lentos; un modelo de tamaño medio en un mini PC da un buen equilibrio para comandos del hogar. Consulta la guía de Whisper local para el dimensionado.' },
          { q: '¿Qué hardware necesito para un asistente de voz local?', a: 'Un mini PC para el stack completo (LLM + Whisper más grande), o una Raspberry Pi para un asistente solo-intención, más hardware de satélite de voz de micrófono/altavoz para la cobertura por habitaciones. Una GPU o NPU reduce la latencia del LLM y de Whisper grande.' },
          { q: '¿Puedo usar una palabra de activación personalizada?', a: 'Sí. Un motor de palabra de activación local como openWakeWord admite palabras de activación personalizadas y corre en tu hardware, así que el disparo manos libres no necesita nube.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — añadir el agente de conversación LLM',
          '[Whisper local + Home Assistant](/es/smart-home/local-whisper-home-assistant) — elegir y ajustar voz-a-texto',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la arquitectura de IA local completa',
          '[Asistentes de voz local vs nube](/es/smart-home/local-vs-cloud-voice-assistant) — la decisión y los compromisos',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: ejecutar un modelo local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Monta un Asistente de Voz Totalmente Local para tu Smart Home (2026)',
      description: 'Reemplaza Alexa por un asistente de voz totalmente local: Home Assistant Assist + Whisper + Piper + un LLM local sobre el protocolo Wyoming. Privado y offline.',
      url: 'https://www.promptquorum.com/es/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Asistente de voz' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Puede un asistente de voz local reemplazar por completo a Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'Para el control del smart home y muchas rutinas, sí — Assist con Whisper, Piper y un LLM local cubre el control de dispositivos en lenguaje natural de forma privada. No replica cada skill de Alexa de terceros.' } },
        { '@type': 'Question', name: '¿Funciona un asistente de voz local sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Whisper, Piper, el manejo de intenciones y un LLM local opcional corren todos en tu hardware, así que funciona sin internet.' } },
        { '@type': 'Question', name: '¿Qué tan precisa es el reconocimiento de voz local?', acceptedAnswer: { '@type': 'Answer', text: 'La precisión depende del tamaño del modelo Whisper y el micrófono. Los modelos más grandes son más precisos pero más lentos; un modelo de tamaño medio en un mini PC equilibra ambos.' } },
        { '@type': 'Question', name: '¿Qué hardware necesito para un asistente de voz local?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC para el stack completo, o una Raspberry Pi para un asistente solo-intención, más hardware de satélite de voz de micrófono/altavoz. Una GPU o NPU reduce la latencia.' } },
        { '@type': 'Question', name: '¿Puedo usar una palabra de activación personalizada?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un motor de palabra de activación local como openWakeWord admite palabras de activación personalizadas y corre en tu hardware sin nube.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '스마트 홈용 완전 로컬 음성 어시스턴트 구축하기 (2026)',
    seoTitle: '로컬 음성 어시스턴트 2026: Alexa를 개인적으로 대체',
    intro:
      'Home Assistant Assist, 로컬 Whisper 음성→텍스트, Piper 텍스트→음성, 로컬 LLM 두뇌로 구축된 완전 로컬 음성 어시스턴트로 Alexa 또는 Google을 대체할 수 있습니다. 이 가이드는 오프라인 음성 스택, 각 구성 요소, 이들을 연결하는 Wyoming 프로토콜, 필요한 하드웨어를 다룹니다. 모두 비공개이며 클라우드 없이 동작합니다.',
    metaDescription:
      'Alexa를 완전 로컬 음성 어시스턴트로 대체하십시오: Wyoming 프로토콜 기반 Home Assistant Assist + Whisper + Piper + 로컬 LLM. 비공개, 오프라인.',
    twitterDescription:
      'Alexa를 대체하는 비공개 음성 어시스턴트 구축: Assist + Whisper(STT) + Piper(TTS) + 로컬 LLM. Wyoming 기반 완전 오프라인.',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    audience: '클라우드 음성 어시스턴트를 대체하는 프라이버시 중시 Home Assistant 사용자',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      '로컬 음성 어시스턴트 home assistant',
      'alexa home assistant 대체',
      '프라이빗 음성 어시스턴트',
      'home assistant assist whisper piper',
      '오프라인 음성 어시스턴트',
    ],
    leadAnswerBlock:
      '**완전 로컬 음성 어시스턴트는 Home Assistant Assist(의도), 로컬 Whisper(음성→텍스트), Piper(텍스트→음성), 로컬 LLM(추론)을 결합하며 Wyoming 프로토콜 위에서 직접 소유한 하드웨어에서 모두 실행됩니다.** 어떤 오디오나 명령도 집 밖으로 나가지 않으며 오프라인으로 동작합니다.',
    quickAnswerTop: {
      ko: {
        question: '완전 로컬 음성 어시스턴트를 어떻게 구축합니까?',
        answer:
          'Home Assistant Assist를 파이프라인으로 사용하고, 음성→텍스트를 위한 Whisper 애드온, 텍스트→음성을 위한 Piper 애드온을 추가하고, Wyoming 프로토콜을 통해 연결하고, 웨이크 워드 엔진을 추가하고 선택적으로 로컬 LLM을 대화 에이전트로 설정하십시오. 모든 것이 클라우드 없이 직접 소유한 하드웨어에서 실행됩니다.',
        bullets: [
          'Assist = Home Assistant 내의 음성 파이프라인',
          'Whisper = 로컬 음성→텍스트; Piper = 로컬 텍스트→음성',
          'Wyoming 프로토콜이 음성 서비스를 연결',
          '핸즈프리 트리거를 위한 웨이크 워드 엔진 추가',
          '선택 사항: 대화 에이전트로서의 로컬 LLM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '완전 로컬 음성 스택', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'STT용 Whisper', anchor: 'whisper' },
      { label: 'TTS용 Piper', anchor: 'piper' },
      { label: 'Wyoming 프로토콜', anchor: 'wyoming' },
      { label: 'LLM 두뇌 추가', anchor: 'llm-brain' },
      { label: '하드웨어 요구 사항', anchor: 'hardware' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '완전 로컬 음성 어시스턴트는 Wyoming 기반의 Home Assistant Assist + Whisper(STT) + Piper(TTS) + 선택적 로컬 LLM으로 오프라인으로 동작합니다.' },
      { type: 'plain-terms', content: '음성 어시스턴트는 세 가지 역할이 있습니다. 듣기(음성→텍스트), 이해하고 행동하기(의도 또는 LLM), 말로 응답하기(텍스트→음성)입니다. Home Assistant는 Whisper, Piper, Assist로 세 가지 모두를 직접 소유한 하드웨어에서 수행할 수 있으므로 Alexa와 달리 어떤 녹음도 기업 서버로 전송되지 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Home Assistant Assist는 모든 것을 연결하는 로컬 음성 파이프라인입니다',
          'Whisper는 로컬에서 음성→텍스트를 처리합니다. 정확도/속도/하드웨어 균형에 맞는 모델 크기를 선택하십시오',
          'Piper는 자연스러운 음성으로 로컬에서 텍스트→음성을 처리합니다',
          'Wyoming 프로토콜이 Assist를 Whisper 및 Piper 서비스와 연결합니다',
          '핸즈프리 트리거를 위한 웨이크 워드 엔진(예: openWakeWord)을 추가하십시오',
          '선택 사항: 고정된 의도 대신 자연어 이해를 위해 로컬 LLM을 대화 에이전트로 설정하십시오',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: '완전 로컬 음성 스택',
        content:
          '**로컬 음성 어시스턴트는 직접 소유한 하드웨어에서 네 가지 역할을 수행합니다. 캡처 및 변환(Whisper), 이해(Assist 의도 또는 로컬 LLM), 응답(Piper), 트리거(웨이크 워드)입니다.** 각각은 오프라인으로 실행되며 Wyoming 프로토콜이 이들을 연결합니다.',
        columns: ['구성 요소', '역할', '로컬?', '비고'],
        rows: [
          { '구성 요소': 'Assist', '역할': '파이프라인 + 의도', '로컬?': '예', '비고': 'Home Assistant에 내장됨' },
          { '구성 요소': 'Whisper', '역할': '음성→텍스트', '로컬?': '예', '비고': '모델 크기가 정확도/속도 결정' },
          { '구성 요소': 'Piper', '역할': '텍스트→음성', '로컬?': '예', '비고': '자연스러운 로컬 음성' },
          { '구성 요소': '웨이크 워드', '역할': '핸즈프리 트리거', '로컬?': '예', '비고': '예: openWakeWord' },
          { '구성 요소': '로컬 LLM', '역할': '이해(선택)', '로컬?': '예', '비고': 'Ollama를 통해 대화 에이전트로' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist는 오디오를 음성→텍스트, 에이전트, 텍스트→음성으로 라우팅하는 내장 음성 파이프라인입니다.** 설정 → 음성 어시스턴트에서 구성합니다.',
        items: [
          'Assist는 일반 명령에 대해 기본적으로 내장 의도(LLM 없음)로 동작합니다.',
          'STT 엔진(Whisper), TTS 엔진(Piper), 대화 에이전트를 선택합니다.',
          '빠른 의도 전용 어시스턴트와 LLM 어시스턴트를 별도로 원한다면 여러 파이프라인을 사용하십시오.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: '로컬 음성→텍스트용 Whisper',
        content:
          '**Whisper는 로컬에서 음성을 변환합니다. 더 큰 Whisper 모델이 더 정확하지만 더 많은 연산이 필요합니다.** Whisper 애드온(faster-whisper)으로 추가하고 Wyoming을 통해 연결하십시오.',
        items: [
          'Whisper는 tiny부터 large까지 크기가 있습니다. 더 작으면 더 빠르고 더 크면 더 정확합니다.',
          'STT에 집중된 설정(모델, 하드웨어, 정확도)은 [로컬 Whisper + Home Assistant](/ko/smart-home/local-whisper-home-assistant)를 참조하십시오.',
          'Whisper는 다국어를 지원하므로 다른 언어 명령도 클라우드 서비스 없이 변환됩니다.',
        ],
      },
      piper: {
        id: 'piper',
        title: '로컬 텍스트→음성용 Piper',
        content:
          '**Piper는 자연스럽게 들리는 음성으로 로컬에서 응답을 생성하며 저사양 하드웨어에서도 실시간 응답이 가능할 만큼 빠릅니다.** Piper 애드온으로 추가하고 음성을 선택하십시오.',
        items: [
          'Piper는 여러 언어와 음성을 제공합니다. 파이프라인당 하나를 선택하십시오.',
          'Raspberry Pi에서도 일반적인 응답 길이에 잘 동작합니다.',
          '오디오가 어디로도 전송되지 않습니다. 음성이 직접 소유한 기기에서 합성됩니다.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'Wyoming 프로토콜',
        content:
          '**Wyoming는 Home Assistant가 Assist를 Whisper 및 Piper와 같은 로컬 음성 서비스에 연결하는 데 사용하는 프로토콜입니다.** 음성 서비스가 별도 애드온 또는 별도 기기에서 실행될 수 있게 합니다.',
        items: [
          '각 서비스(Whisper, Piper, 웨이크 워드)는 Wyoming 엔드포인트로 실행됩니다.',
          'Assist는 Wyoming 통합을 통해 이들을 감지하고 사용합니다.',
          '이 모듈성은 필요한 경우 Whisper를 더 강력한 기기로 오프로드할 수 있음을 의미합니다.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'LLM 두뇌 추가',
        content:
          '**고정된 의도 대신 자연어를 이해하기 위해 로컬 LLM을 대화 에이전트로 설정하십시오.** 선택 사항이지만 유연한 표현을 가능하게 합니다.',
        items: [
          '먼저 Ollama를 Home Assistant에 연결하십시오 — [Ollama 통합 가이드](/ko/smart-home/home-assistant-ollama-integration)를 참조하십시오.',
          '음성 응답이 빠르게 유지되도록 function-calling이 가능한 소형 모델을 사용하십시오.',
          '전체 그림은 [로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide)를 참조하십시오.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 요구 사항',
        content:
          '**미니 PC는 Assist, Whisper, Piper, 소형 LLM을 편안하게 실행합니다. Raspberry Pi는 의도 전용 음성은 처리하지만 큰 Whisper 모델과 LLM 추론에는 어려움을 겪습니다.** 마이크 하드웨어(음성 위성)가 집 전체의 오디오를 캡처합니다.',
        items: [
          'LLM 두뇌와 더 큰 Whisper 모델을 원한다면 미니 PC를 사용하십시오 — [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
          '가벼운 의도 전용 어시스턴트에는 Pi를 사용하십시오.',
          '방별 커버리지를 위해 음성 위성 하드웨어(마이크 + 스피커 엔드포인트)를 추가하십시오.',
          '[로컬 vs 클라우드 음성 어시스턴트](/ko/smart-home/local-vs-cloud-voice-assistant)에서 트레이드오프를 비교하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '로컬 음성 어시스턴트가 Alexa를 완전히 대체할 수 있습니까?', a: '스마트 홈 제어와 많은 루틴에 대해서는 예입니다. Assist와 Whisper, Piper, 로컬 LLM은 비공개로 자연어로 기기 제어와 응답을 처리합니다. 타사 Alexa 스킬과 클라우드 쇼핑 기능을 복제하지는 않지만 핵심적인 홈 제어 사용 사례를 비공개로 처리합니다.' },
          { q: '로컬 음성 어시스턴트가 오프라인으로 동작합니까?', a: '예. 음성→텍스트(Whisper), 텍스트→음성(Piper), 의도 처리, 선택적 로컬 LLM 모두 직접 소유한 하드웨어에서 실행되므로 인터넷 없이 동작합니다. 집 밖에서의 원격 접근만 연결이 필요합니다.' },
          { q: '로컬 음성 인식이 얼마나 정확합니까?', a: 'Whisper 모델 크기와 마이크에 따라 달라집니다. 더 큰 Whisper 모델이 더 정확하지만 더 느립니다. 미니 PC에서 중간 크기 모델은 홈 명령에 대한 균형이 좋습니다. 크기 선택은 로컬 Whisper 가이드를 참조하십시오.' },
          { q: '로컬 음성 어시스턴트에 어떤 하드웨어가 필요합니까?', a: '전체 스택(LLM + 더 큰 Whisper)을 위한 미니 PC 또는 의도 전용 어시스턴트를 위한 Raspberry Pi, 방별 커버리지를 위한 마이크/스피커 음성 위성 하드웨어가 필요합니다. GPU 또는 NPU는 LLM과 큰 Whisper의 지연 시간을 줄입니다.' },
          { q: '맞춤 웨이크 워드를 사용할 수 있습니까?', a: '예. openWakeWord와 같은 로컬 웨이크 워드 엔진은 맞춤 웨이크 워드를 지원하며 직접 소유한 하드웨어에서 실행되므로 핸즈프리 트리거에 클라우드가 필요 없습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — LLM 대화 에이전트 추가',
          '[로컬 Whisper + Home Assistant](/ko/smart-home/local-whisper-home-assistant) — 음성→텍스트 선택 및 조정',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — 완전한 로컬 AI 아키텍처',
          '[로컬 vs 클라우드 음성 어시스턴트](/ko/smart-home/local-vs-cloud-voice-assistant) — 결정과 트레이드오프',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 클러스터 간: 로컬 모델 실행',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트 홈용 완전 로컬 음성 어시스턴트 구축하기 (2026)',
      description: 'Alexa를 완전 로컬 음성 어시스턴트로 대체하십시오: Wyoming 프로토콜 기반 Home Assistant Assist + Whisper + Piper + 로컬 LLM. 비공개, 오프라인.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '음성 어시스턴트' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '로컬 음성 어시스턴트가 Alexa를 완전히 대체할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '스마트 홈 제어와 많은 루틴에 대해서는 예입니다. Assist, Whisper, Piper, 로컬 LLM은 비공개로 자연어 기기 제어를 처리합니다. 타사 Alexa 스킬은 복제하지 않습니다.' } },
        { '@type': 'Question', name: '로컬 음성 어시스턴트가 오프라인으로 동작합니까?', acceptedAnswer: { '@type': 'Answer', text: '예. Whisper, Piper, 의도 처리, 선택적 로컬 LLM 모두 직접 소유한 하드웨어에서 실행되므로 인터넷 없이 동작합니다.' } },
        { '@type': 'Question', name: '로컬 음성 인식이 얼마나 정확합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Whisper 모델 크기와 마이크에 따라 달라집니다. 더 큰 모델이 더 정확하지만 더 느립니다. 미니 PC에서 중간 크기 모델이 홈 명령에 균형이 좋습니다.' } },
        { '@type': 'Question', name: '로컬 음성 어시스턴트에 어떤 하드웨어가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '전체 스택을 위한 미니 PC 또는 의도 전용을 위한 Raspberry Pi, 방별 커버리지를 위한 마이크/스피커 음성 위성이 필요합니다. GPU 또는 NPU는 지연 시간을 줄입니다.' } },
        { '@type': 'Question', name: '맞춤 웨이크 워드를 사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '예. openWakeWord와 같은 로컬 웨이크 워드 엔진은 맞춤 웨이크 워드를 지원하며 클라우드 없이 직접 소유한 하드웨어에서 실행됩니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Construire un Assistant Vocal Entièrement Local pour votre Maison Connectée (2026)',
    seoTitle: 'Assistant Vocal Local 2026 : Remplacer Alexa en Privé',
    intro:
      'Vous pouvez remplacer Alexa ou Google par un assistant vocal entièrement local construit avec Home Assistant Assist, Whisper local pour la reconnaissance vocale, Piper pour la synthèse vocale et un LLM local comme cerveau. Ce guide couvre la pile vocale hors ligne, chaque composant, le protocole Wyoming qui les relie et le matériel nécessaire — le tout privé et fonctionnant sans le cloud.',
    metaDescription:
      'Remplacez Alexa par un assistant vocal entièrement local : Home Assistant Assist + Whisper + Piper + un LLM local via le protocole Wyoming. Privé et hors ligne.',
    twitterDescription:
      'Construisez un assistant vocal privé qui remplace Alexa : Assist + Whisper (STT) + Piper (TTS) + un LLM local. Entièrement hors ligne, via Wyoming.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant soucieux de la vie privée remplaçant les assistants vocaux cloud',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'assistant vocal local home assistant',
      'remplacer alexa home assistant',
      'assistant vocal privé',
      'home assistant assist whisper piper',
      'assistant vocal hors ligne',
    ],
    leadAnswerBlock:
      '**Un assistant vocal entièrement local combine Home Assistant Assist (intention), Whisper local (reconnaissance vocale), Piper (synthèse vocale) et un LLM local (raisonnement) — tous reliés via le protocole Wyoming et tournant sur votre propre matériel.** Aucun audio ni commande ne quitte la maison, et il fonctionne hors ligne.',
    quickAnswerTop: {
      fr: {
        question: 'Comment construire un assistant vocal entièrement local ?',
        answer:
          'Utilisez Home Assistant Assist comme pipeline, ajoutez l\'add-on Whisper pour la reconnaissance vocale et l\'add-on Piper pour la synthèse vocale, reliez-les via le protocole Wyoming, ajoutez un moteur de mot d\'activation et définissez éventuellement un LLM local comme agent de conversation. Tout tourne sur votre matériel sans cloud.',
        bullets: [
          'Assist = le pipeline vocal dans Home Assistant',
          'Whisper = reconnaissance vocale locale ; Piper = synthèse vocale locale',
          'Le protocole Wyoming relie les services vocaux',
          'Ajoutez un moteur de mot d\'activation pour un usage mains libres',
          'Optionnel : un LLM local comme agent de conversation',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'La pile vocale locale', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper pour la STT', anchor: 'whisper' },
      { label: 'Piper pour la TTS', anchor: 'piper' },
      { label: 'Le protocole Wyoming', anchor: 'wyoming' },
      { label: 'Ajouter le cerveau LLM', anchor: 'llm-brain' },
      { label: 'Besoins matériels', anchor: 'hardware' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un assistant vocal entièrement local est Home Assistant Assist + Whisper (STT) + Piper (TTS) + un LLM local optionnel, reliés via Wyoming et tournant hors ligne.' },
      { type: 'plain-terms', content: 'Un assistant vocal a trois tâches : vous entendre (reconnaissance vocale), comprendre et agir (intention ou un LLM) et répondre à voix haute (synthèse vocale). Home Assistant peut faire les trois sur votre propre matériel avec Whisper, Piper et Assist, donc contrairement à Alexa, aucun enregistrement n\'est envoyé à un serveur d\'entreprise.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant Assist est le pipeline vocal local qui relie tout',
          'Whisper gère la reconnaissance vocale localement ; choisissez une taille de modèle selon votre compromis précision/vitesse/matériel',
          'Piper gère la synthèse vocale localement avec des voix au son naturel',
          'Le protocole Wyoming relie Assist aux services Whisper et Piper',
          'Ajoutez un moteur de mot d\'activation (comme openWakeWord) pour le déclenchement mains libres',
          'Optionnel : définissez un LLM local comme agent de conversation pour la compréhension du langage naturel',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'La pile vocale entièrement locale',
        content:
          '**Un assistant vocal local, ce sont quatre rôles sur votre propre matériel : capturer et transcrire (Whisper), comprendre (intentions Assist ou un LLM local), répondre (Piper) et déclencher (mot d\'activation).** Chacun tourne hors ligne ; le protocole Wyoming les relie.',
        columns: ['Composant', 'Rôle', 'Local ?', 'Notes'],
        rows: [
          { 'Composant': 'Assist', 'Rôle': 'Pipeline + intention', 'Local ?': 'Oui', 'Notes': 'Intégré à Home Assistant' },
          { 'Composant': 'Whisper', 'Rôle': 'Reconnaissance vocale', 'Local ?': 'Oui', 'Notes': 'La taille du modèle fixe précision/vitesse' },
          { 'Composant': 'Piper', 'Rôle': 'Synthèse vocale', 'Local ?': 'Oui', 'Notes': 'Voix locales naturelles' },
          { 'Composant': 'Mot d\'activation', 'Rôle': 'Déclencheur mains libres', 'Local ?': 'Oui', 'Notes': 'ex. openWakeWord' },
          { 'Composant': 'LLM local', 'Rôle': 'Compréhension (optionnel)', 'Local ?': 'Oui', 'Notes': 'Via Ollama comme agent de conversation' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist est le pipeline vocal intégré qui achemine l\'audio par reconnaissance vocale, un agent et synthèse vocale.** Il se configure dans Paramètres → Assistants vocaux.',
        items: [
          'Assist fonctionne avec des intentions intégrées prêtes à l\'emploi (sans LLM) pour les commandes courantes.',
          'Vous sélectionnez le moteur STT (Whisper), le moteur TTS (Piper) et l\'agent de conversation.',
          'Utilisez plusieurs pipelines si vous voulez un assistant rapide intention-seule et un autre séparé piloté par LLM.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper pour la reconnaissance vocale locale',
        content:
          '**Whisper transcrit votre parole localement ; les plus gros modèles Whisper sont plus précis mais demandent plus de calcul.** Ajoutez-le comme add-on Whisper (faster-whisper) et reliez-le via Wyoming.',
        items: [
          'Whisper existe en tailles de tiny à large — plus petit est plus rapide, plus grand est plus précis.',
          'Pour une configuration STT ciblée (modèles, matériel, précision), voir [Whisper local + Home Assistant](/fr/smart-home/local-whisper-home-assistant).',
          'Whisper est multilingue, donc les commandes non anglaises se transcrivent sans service cloud.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper pour la synthèse vocale locale',
        content:
          '**Piper génère des réponses parlées localement avec des voix au son naturel, assez rapides pour des réponses en temps réel sur du matériel modeste.** Ajoutez-le comme add-on Piper et sélectionnez une voix.',
        items: [
          'Piper offre plusieurs langues et voix ; choisissez-en une par pipeline.',
          'Il tourne bien sur une Raspberry Pi pour des longueurs de réponse typiques.',
          'Aucun audio n\'est envoyé nulle part — la parole est synthétisée sur votre appareil.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'Le protocole Wyoming',
        content:
          '**Wyoming est le protocole que Home Assistant utilise pour relier Assist aux services vocaux locaux comme Whisper et Piper.** Il permet aux services vocaux de tourner comme add-ons séparés ou sur des machines séparées.',
        items: [
          'Chaque service (Whisper, Piper, mot d\'activation) tourne comme un point d\'accès Wyoming.',
          'Assist les découvre et les utilise via l\'intégration Wyoming.',
          'Cette modularité signifie que vous pouvez déporter Whisper sur une machine plus puissante au besoin.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Ajouter le cerveau LLM',
        content:
          '**Définissez un LLM local comme agent de conversation pour comprendre le langage naturel au lieu de seulement des intentions fixes.** C\'est optionnel mais cela débloque des formulations flexibles.',
        items: [
          'Câblez d\'abord Ollama dans Home Assistant — voir [le guide d\'intégration Ollama](/fr/smart-home/home-assistant-ollama-integration).',
          'Utilisez un petit modèle à appel de fonctions pour que les réponses vocales restent vives.',
          'Pour la vue d\'ensemble de bout en bout, voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Besoins matériels',
        content:
          '**Un mini-PC fait tourner confortablement Assist, Whisper, Piper et un petit LLM ; une Raspberry Pi gère la voix intention-seule mais peine avec les gros modèles Whisper et l\'inférence LLM.** Le matériel micro (satellites vocaux) capte l\'audio dans toute la maison.',
        items: [
          'Utilisez un mini-PC si vous voulez le cerveau LLM et des modèles Whisper plus grands — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          'Utilisez une Pi pour un assistant léger intention-seule.',
          'Ajoutez du matériel de satellite vocal (points micro + haut-parleur) pour la couverture par pièce.',
          'Comparez les compromis local vs cloud dans [assistants vocaux local vs cloud](/fr/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Un assistant vocal local peut-il remplacer entièrement Alexa ?', a: 'Pour le contrôle de la maison connectée et de nombreuses routines, oui — Assist avec Whisper, Piper et un LLM local couvre le contrôle d\'appareils et les réponses en langage naturel. Il ne reproduit pas chaque skill Alexa tierce ni les fonctions d\'achat cloud, mais il couvre le cas d\'usage central du contrôle de la maison en privé.' },
          { q: 'Un assistant vocal local fonctionne-t-il hors ligne ?', a: 'Oui. Reconnaissance vocale (Whisper), synthèse vocale (Piper), gestion des intentions et un LLM local optionnel tournent tous sur votre matériel, donc l\'assistant fonctionne sans internet. Seul l\'accès à distance depuis l\'extérieur nécessite une connectivité.' },
          { q: 'Quelle est la précision de la reconnaissance vocale locale ?', a: 'La précision dépend de la taille du modèle Whisper et de votre micro. Les plus gros modèles Whisper sont plus précis mais plus lents ; un modèle de taille moyenne sur un mini-PC offre un bon équilibre pour les commandes domestiques. Voir le guide Whisper local pour le dimensionnement.' },
          { q: 'Quel matériel pour un assistant vocal local ?', a: 'Un mini-PC pour la pile complète (LLM + Whisper plus grand), ou une Raspberry Pi pour un assistant intention-seule, plus du matériel de satellite vocal micro/haut-parleur pour la couverture par pièce. Un GPU ou un NPU réduit la latence du LLM et du gros Whisper.' },
          { q: 'Puis-je utiliser un mot d\'activation personnalisé ?', a: 'Oui. Un moteur de mot d\'activation local comme openWakeWord prend en charge les mots d\'activation personnalisés et tourne sur votre matériel, donc le déclenchement mains libres ne nécessite aucun cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — ajouter l\'agent de conversation LLM',
          '[Whisper local + Home Assistant](/fr/smart-home/local-whisper-home-assistant) — choisir et régler la reconnaissance vocale',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — l\'architecture IA locale complète',
          '[Assistants vocaux local vs cloud](/fr/smart-home/local-vs-cloud-voice-assistant) — la décision et les compromis',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : exécuter un modèle local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construire un Assistant Vocal Entièrement Local pour votre Maison Connectée (2026)',
      description: 'Remplacez Alexa par un assistant vocal entièrement local : Home Assistant Assist + Whisper + Piper + un LLM local via le protocole Wyoming. Privé et hors ligne.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Assistant vocal' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un assistant vocal local peut-il remplacer entièrement Alexa ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour le contrôle de la maison connectée et de nombreuses routines, oui — Assist avec Whisper, Piper et un LLM local couvre le contrôle d\'appareils en langage naturel en privé. Il ne reproduit pas chaque skill Alexa tierce.' } },
        { '@type': 'Question', name: 'Un assistant vocal local fonctionne-t-il hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Whisper, Piper, la gestion des intentions et un LLM local optionnel tournent tous sur votre matériel, donc il fonctionne sans internet.' } },
        { '@type': 'Question', name: 'Quelle est la précision de la reconnaissance vocale locale ?', acceptedAnswer: { '@type': 'Answer', text: 'La précision dépend de la taille du modèle Whisper et du micro. Les plus gros modèles sont plus précis mais plus lents ; un modèle de taille moyenne sur un mini-PC équilibre les deux.' } },
        { '@type': 'Question', name: 'Quel matériel pour un assistant vocal local ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC pour la pile complète, ou une Raspberry Pi pour un assistant intention-seule, plus du matériel de satellite vocal micro/haut-parleur. Un GPU ou un NPU réduit la latence.' } },
        { '@type': 'Question', name: 'Puis-je utiliser un mot d\'activation personnalisé ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Un moteur de mot d\'activation local comme openWakeWord prend en charge les mots d\'activation personnalisés et tourne sur votre matériel sans cloud.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'スマートホーム向けの完全ローカルな音声アシスタントを作る（2026）',
    seoTitle: 'ローカル音声アシスタント 2026：Alexa をプライベートに置換',
    intro:
      'Home Assistant Assist、音声認識のローカル Whisper、音声合成の Piper、頭脳としてのローカル LLM で構築した完全ローカルな音声アシスタントで、Alexa や Google を置き換えられます。本ガイドは、オフラインの音声スタック、各コンポーネント、それらをつなぐ Wyoming プロトコル、そして必要なハードウェアを扱います——すべてプライベートで、クラウドなしに動きます。',
    metaDescription:
      'Alexa を完全ローカルな音声アシスタントに置き換える（2026）：Assist・Whisper・Piper・ローカルLLM を Wyoming プロトコルで統合。マイク設定・Wake Word検出・音声認識・音声合成の組み合わせ方を解説。プライベートかつオフライン動作。',
    twitterDescription:
      'Alexa を置き換えるプライベートな音声アシスタントを作る：Assist + Whisper（STT）+ Piper（TTS）+ ローカル LLM。完全オフライン、Wyoming 経由。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: 'クラウド音声アシスタントを置き換える、プライバシーを重視する Home Assistant ユーザー',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'ローカル音声アシスタント home assistant',
      'alexa 置き換え home assistant',
      'プライベート 音声アシスタント',
      'home assistant assist whisper piper',
      'オフライン 音声アシスタント',
    ],
    leadAnswerBlock:
      '**完全ローカルな音声アシスタントは、Home Assistant Assist（インテント）、ローカル Whisper（音声認識）、Piper（音声合成）、ローカル LLM（推論）を組み合わせ——すべて Wyoming プロトコルでつなぎ、自分のハードウェアで動かします。** 音声も命令も家を出ず、オフラインで動作します。',
    quickAnswerTop: {
      ja: {
        question: '完全ローカルな音声アシスタントはどう作りますか？',
        answer:
          'Home Assistant Assist をパイプラインに使い、音声認識に Whisper アドオン、音声合成に Piper アドオンを追加し、Wyoming プロトコルでつなぎ、ウェイクワードエンジンを加え、任意でローカル LLM を会話エージェントに設定します。すべて自分のハードウェアでクラウドなしに動きます。',
        bullets: [
          'Assist = Home Assistant 内の音声パイプライン',
          'Whisper = ローカルの音声認識；Piper = ローカルの音声合成',
          'Wyoming プロトコルが音声サービスをつなぐ',
          'ハンズフリー利用のためウェイクワードエンジンを追加',
          '任意：会話エージェントとしてのローカル LLM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'ローカル音声スタック', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'STT のための Whisper', anchor: 'whisper' },
      { label: 'TTS のための Piper', anchor: 'piper' },
      { label: 'Wyoming プロトコル', anchor: 'wyoming' },
      { label: 'LLM の頭脳を加える', anchor: 'llm-brain' },
      { label: 'ハードウェア要件', anchor: 'hardware' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '完全ローカルな音声アシスタントは Home Assistant Assist + Whisper（STT）+ Piper（TTS）+ 任意のローカル LLM で、Wyoming でつなぎ、オフラインで動きます。' },
      { type: 'plain-terms', content: '音声アシスタントには三つの仕事があります：あなたを聞く（音声認識）、理解して動く（インテントまたは LLM）、声で返す（音声合成）。Home Assistant は Whisper、Piper、Assist でこの三つすべてを自分のハードウェアでこなせるため、Alexa と違い録音が企業のサーバーへ送られません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant Assist は、すべてをつなぐローカル音声パイプライン',
          'Whisper が音声認識をローカルで処理；精度/速度/ハードウェアの兼ね合いでモデルサイズを選ぶ',
          'Piper が音声合成をローカルで、自然な声で処理',
          'Wyoming プロトコルが Assist を Whisper・Piper サービスにつなぐ',
          'ハンズフリーの起動にウェイクワードエンジン（openWakeWord など）を加える',
          '任意：自然言語理解のため会話エージェントとしてローカル LLM を設定',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: '完全ローカルな音声スタック',
        content:
          '**ローカル音声アシスタントは、自分のハードウェア上の四つの役割です：取り込んで文字起こし（Whisper）、理解（Assist のインテントまたはローカル LLM）、応答（Piper）、起動（ウェイクワード）。** いずれもオフラインで動き、Wyoming プロトコルがそれらを配線します。',
        columns: ['コンポーネント', '役割', 'ローカル？', '備考'],
        rows: [
          { 'コンポーネント': 'Assist', '役割': 'パイプライン＋インテント', 'ローカル？': 'はい', '備考': 'Home Assistant に内蔵' },
          { 'コンポーネント': 'Whisper', '役割': '音声認識', 'ローカル？': 'はい', '備考': 'モデルサイズが精度/速度を決める' },
          { 'コンポーネント': 'Piper', '役割': '音声合成', 'ローカル？': 'はい', '備考': '自然なローカル音声' },
          { 'コンポーネント': 'ウェイクワード', '役割': 'ハンズフリーの起動', 'ローカル？': 'はい', '備考': '例：openWakeWord' },
          { 'コンポーネント': 'ローカル LLM', '役割': '理解（任意）', 'ローカル？': 'はい', '備考': 'Ollama を会話エージェントとして' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist は、音声を音声認識・エージェント・音声合成へと通す内蔵の音声パイプラインです。** 設定 → 音声アシスタント で構成します。',
        items: [
          'Assist は一般的な命令には、内蔵インテントでそのまま（LLM なしで）動きます。',
          'STT エンジン（Whisper）、TTS エンジン（Piper）、会話エージェントを選びます。',
          '高速なインテントのみのアシスタントと、別の LLM 搭載のものが欲しければ複数パイプラインを使います。',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'ローカル音声認識のための Whisper',
        content:
          '**Whisper はあなたの音声をローカルで文字起こしします；大きな Whisper モデルほど高精度ですが、より多くの計算を要します。** Whisper（faster-whisper）アドオンとして追加し、Wyoming でつなぎます。',
        items: [
          'Whisper は tiny から large までのサイズがあります——小さいほど速く、大きいほど高精度。',
          '集中した STT 構成（モデル、ハードウェア、精度）は[ローカル Whisper + Home Assistant](/ja/smart-home/local-whisper-home-assistant)を参照。',
          'Whisper は多言語対応なので、英語以外の命令もクラウドサービスなしで文字起こしされます。',
        ],
      },
      piper: {
        id: 'piper',
        title: 'ローカル音声合成のための Piper',
        content:
          '**Piper は自然な声でローカルに音声応答を生成し、控えめなハードウェアでもリアルタイム応答に十分な速さです。** Piper アドオンとして追加し、声を選びます。',
        items: [
          'Piper は複数の言語と声を提供します；パイプラインごとに一つ選びます。',
          '典型的な応答長なら、Raspberry Pi でも良好に動きます。',
          '音声はどこにも送られません——あなたの機器で合成されます。',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'Wyoming プロトコル',
        content:
          '**Wyoming は、Home Assistant が Assist を Whisper や Piper のようなローカル音声サービスにつなぐために使うプロトコルです。** 音声サービスを別々のアドオンや別マシンで動かせます。',
        items: [
          '各サービス（Whisper、Piper、ウェイクワード）は Wyoming エンドポイントとして動きます。',
          'Assist は Wyoming 統合を通じてそれらを検出し利用します。',
          'このモジュール性により、必要なら Whisper をより強力な機器に逃がせます。',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'LLM の頭脳を加える',
        content:
          '**固定のインテントだけでなく自然言語を理解するため、ローカル LLM を会話エージェントに設定します。** 任意ですが、柔軟な言い回しを解禁します。',
        items: [
          'まず Ollama を Home Assistant に配線します——[Ollama 統合ガイド](/ja/smart-home/home-assistant-ollama-integration)を参照。',
          '音声応答をキビキビ保つため、小型の関数呼び出しモデルを使います。',
          'エンドツーエンドの全体像は[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア要件',
        content:
          '**ミニPCは Assist、Whisper、Piper、小型 LLM を余裕で動かします；Raspberry Pi はインテントのみの音声を扱えますが、大きな Whisper モデルや LLM 推論には苦労します。** マイクのハードウェア（音声サテライト）が家中の音声を拾います。',
        items: [
          'LLM の頭脳とより大きな Whisper モデルが欲しいならミニPCを使う——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
          '軽量なインテントのみのアシスタントには Pi を使う。',
          '部屋ごとのカバーのため、音声サテライト機器（マイク＋スピーカーのエンドポイント）を追加する。',
          'ローカル対クラウドの兼ね合いは[ローカル対クラウドの音声アシスタント](/ja/smart-home/local-vs-cloud-voice-assistant)で比較。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ローカル音声アシスタントは Alexa を完全に置き換えられますか？', a: 'スマートホーム制御と多くのルーティンについてはそうです——Whisper、Piper、ローカル LLM を備えた Assist が、自然言語の機器制御と応答をカバーします。サードパーティの Alexa スキルやクラウドショッピング機能すべてを再現はしませんが、家庭制御の中核ユースケースをプライベートにカバーします。' },
          { q: 'ローカル音声アシスタントはオフラインで動きますか？', a: 'はい。音声認識（Whisper）、音声合成（Piper）、インテント処理、任意のローカル LLM はすべて自分のハードウェアで動くため、インターネットなしで動作します。家の外からのリモートアクセスだけが接続を必要とします。' },
          { q: 'ローカル音声認識の精度はどれくらいですか？', a: '精度は Whisper のモデルサイズとマイク次第です。大きな Whisper モデルほど高精度ですが遅く、ミニPC上の中サイズモデルが家庭の命令には良いバランスです。サイズ選びはローカル Whisper ガイドを参照。' },
          { q: 'ローカル音声アシスタントにどんなハードウェアが必要ですか？', a: 'フルスタック（LLM＋より大きな Whisper）にはミニPC、インテントのみのアシスタントには Raspberry Pi、加えて部屋ごとのカバー用にマイク/スピーカーの音声サテライト機器。GPU や NPU が LLM と大型 Whisper のレイテンシを下げます。' },
          { q: 'カスタムのウェイクワードを使えますか？', a: 'はい。openWakeWord のようなローカルのウェイクワードエンジンはカスタムウェイクワードに対応し、あなたのハードウェアで動くため、ハンズフリーの起動にクラウドは不要です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — LLM 会話エージェントを追加',
          '[ローカル Whisper + Home Assistant](/ja/smart-home/local-whisper-home-assistant) — 音声認識を選び調整する',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 完全なローカルAIアーキテクチャ',
          '[ローカル対クラウドの音声アシスタント](/ja/smart-home/local-vs-cloud-voice-assistant) — 判断と兼ね合い',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：ローカルモデルを動かす',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム向けの完全ローカルな音声アシスタントを作る（2026）',
      description: 'Alexa を完全ローカルな音声アシスタントに置き換える（2026）：Assist・Whisper・Piper・ローカルLLM を Wyoming プロトコルで統合。マイク設定・Wake Word検出・音声認識・音声合成の組み合わせ方を解説。プライベートかつオフライン動作。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '音声アシスタント' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'ローカル音声アシスタントは Alexa を完全に置き換えられますか？', acceptedAnswer: { '@type': 'Answer', text: 'スマートホーム制御と多くのルーティンについてはそうです——Whisper、Piper、ローカル LLM を備えた Assist が自然言語の機器制御をプライベートにカバーします。サードパーティの Alexa スキルすべては再現しません。' } },
        { '@type': 'Question', name: 'ローカル音声アシスタントはオフラインで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Whisper、Piper、インテント処理、任意のローカル LLM はすべて自分のハードウェアで動くため、インターネットなしで動作します。' } },
        { '@type': 'Question', name: 'ローカル音声認識の精度はどれくらいですか？', acceptedAnswer: { '@type': 'Answer', text: '精度は Whisper のモデルサイズとマイク次第です。大きなモデルほど高精度ですが遅く、ミニPC上の中サイズモデルが両者をバランスします。' } },
        { '@type': 'Question', name: 'ローカル音声アシスタントにどんなハードウェアが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'フルスタックにはミニPC、インテントのみには Raspberry Pi、加えてマイク/スピーカーの音声サテライト機器。GPU や NPU がレイテンシを下げます。' } },
        { '@type': 'Question', name: 'カスタムのウェイクワードを使えますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。openWakeWord のようなローカルのウェイクワードエンジンはカスタムウェイクワードに対応し、あなたのハードウェアでクラウドなしに動きます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Monte um Assistente de Voz Totalmente Local para sua Casa Inteligente (2026)',
    seoTitle: 'Assistente de Voz Local 2026: Substitua a Alexa em Privado',
    intro:
      'Você pode substituir a Alexa ou o Google por um assistente de voz totalmente local construído com Home Assistant Assist, Whisper local para voz-para-texto, Piper para texto-para-voz e um LLM local como cérebro. Este guia cobre o stack de voz offline, cada componente, o protocolo Wyoming que os conecta e o hardware necessário — tudo privado e funcionando sem a nuvem.',
    metaDescription:
      'Substitua a Alexa por assistente de voz local 2026: Assist + Whisper + Piper + LLM local via protocolo Wyoming. Privado, sem nuvem, 100 % offline.',
    twitterDescription:
      'Monte um assistente de voz privado que substitui a Alexa: Assist + Whisper (STT) + Piper (TTS) + um LLM local. Totalmente offline, via Wyoming.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant preocupados com privacidade substituindo assistentes de voz na nuvem',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      'assistente de voz local home assistant',
      'substituir alexa home assistant',
      'assistente de voz privado',
      'home assistant assist whisper piper',
      'assistente de voz offline',
    ],
    leadAnswerBlock:
      '**Um assistente de voz totalmente local combina Home Assistant Assist (intenção), Whisper local (voz-para-texto), Piper (texto-para-voz) e um LLM local (raciocínio) — todos conectados sobre o protocolo Wyoming e rodando no seu próprio hardware.** Nenhum áudio ou comando sai de casa, e funciona offline.',
    quickAnswerTop: {
      pt: {
        question: 'Como monto um assistente de voz totalmente local?',
        answer:
          'Use o Home Assistant Assist como pipeline, adicione o add-on do Whisper para voz-para-texto e o add-on do Piper para texto-para-voz, conecte-os via o protocolo Wyoming, adicione um motor de palavra de ativação e, opcionalmente, defina um LLM local como agente de conversa. Tudo roda no seu hardware sem nuvem.',
        bullets: [
          'Assist = o pipeline de voz dentro do Home Assistant',
          'Whisper = voz-para-texto local; Piper = texto-para-voz local',
          'O protocolo Wyoming conecta os serviços de voz',
          'Adicione um motor de palavra de ativação para uso mãos-livres',
          'Opcional: um LLM local como agente de conversa',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O stack de voz local', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: 'Whisper para STT', anchor: 'whisper' },
      { label: 'Piper para TTS', anchor: 'piper' },
      { label: 'O protocolo Wyoming', anchor: 'wyoming' },
      { label: 'Adicionar o cérebro LLM', anchor: 'llm-brain' },
      { label: 'Necessidades de hardware', anchor: 'hardware' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Um assistente de voz totalmente local é Home Assistant Assist + Whisper (STT) + Piper (TTS) + um LLM local opcional, conectados sobre Wyoming e rodando offline.' },
      { type: 'plain-terms', content: 'Um assistente de voz tem três tarefas: ouvir você (voz-para-texto), entender e agir (intenção ou um LLM) e responder falando (texto-para-voz). O Home Assistant pode fazer as três no seu próprio hardware com Whisper, Piper e Assist, então, ao contrário da Alexa, nenhuma gravação é enviada a um servidor de empresa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Home Assistant Assist é o pipeline de voz local que une tudo',
          'O Whisper faz voz-para-texto localmente; escolha um tamanho de modelo pelo seu equilíbrio precisão/velocidade/hardware',
          'O Piper faz texto-para-voz localmente com vozes de som natural',
          'O protocolo Wyoming conecta o Assist aos serviços Whisper e Piper',
          'Adicione um motor de palavra de ativação (como o openWakeWord) para o disparo mãos-livres',
          'Opcional: defina um LLM local como agente de conversa para a compreensão em linguagem natural',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: 'O stack de voz totalmente local',
        content:
          '**Um assistente de voz local são quatro papéis no seu próprio hardware: capturar e transcrever (Whisper), entender (intenções do Assist ou um LLM local), responder (Piper) e disparar (palavra de ativação).** Cada um roda offline; o protocolo Wyoming os liga.',
        columns: ['Componente', 'Papel', 'Local?', 'Notas'],
        rows: [
          { 'Componente': 'Assist', 'Papel': 'Pipeline + intenção', 'Local?': 'Sim', 'Notas': 'Embutido no Home Assistant' },
          { 'Componente': 'Whisper', 'Papel': 'Voz-para-texto', 'Local?': 'Sim', 'Notas': 'O tamanho do modelo define precisão/velocidade' },
          { 'Componente': 'Piper', 'Papel': 'Texto-para-voz', 'Local?': 'Sim', 'Notas': 'Vozes locais naturais' },
          { 'Componente': 'Palavra de ativação', 'Papel': 'Disparo mãos-livres', 'Local?': 'Sim', 'Notas': 'ex.: openWakeWord' },
          { 'Componente': 'LLM local', 'Papel': 'Compreensão (opcional)', 'Local?': 'Sim', 'Notas': 'Via Ollama como agente de conversa' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**O Assist é o pipeline de voz embutido que roteia o áudio por voz-para-texto, um agente e texto-para-voz.** Ele é configurado em Configurações → Assistentes de voz.',
        items: [
          'O Assist funciona com intenções embutidas de fábrica (sem LLM) para comandos comuns.',
          'Você seleciona o motor STT (Whisper), o motor TTS (Piper) e o agente de conversa.',
          'Use vários pipelines se quiser um assistente rápido só-intenção e outro separado movido a LLM.',
        ],
      },
      whisper: {
        id: 'whisper',
        title: 'Whisper para voz-para-texto local',
        content:
          '**O Whisper transcreve sua fala localmente; modelos Whisper maiores são mais precisos, mas precisam de mais processamento.** Adicione-o como o add-on do Whisper (faster-whisper) e conecte via Wyoming.',
        items: [
          'O Whisper vem em tamanhos de tiny a large — menor é mais rápido, maior é mais preciso.',
          'Para uma configuração STT focada (modelos, hardware, precisão), veja [Whisper local + Home Assistant](/pt/smart-home/local-whisper-home-assistant).',
          'O Whisper é multilíngue, então comandos em outros idiomas são transcritos sem um serviço na nuvem.',
        ],
      },
      piper: {
        id: 'piper',
        title: 'Piper para texto-para-voz local',
        content:
          '**O Piper gera respostas faladas localmente com vozes de som natural, rápido o bastante para respostas em tempo real em hardware modesto.** Adicione-o como o add-on do Piper e selecione uma voz.',
        items: [
          'O Piper oferece vários idiomas e vozes; escolha uma por pipeline.',
          'Ele roda bem em uma Raspberry Pi para comprimentos de resposta típicos.',
          'Nenhum áudio é enviado a lugar algum — a fala é sintetizada no seu dispositivo.',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'O protocolo Wyoming',
        content:
          '**O Wyoming é o protocolo que o Home Assistant usa para conectar o Assist a serviços de voz locais como Whisper e Piper.** Ele permite que os serviços de voz rodem como add-ons separados ou em máquinas separadas.',
        items: [
          'Cada serviço (Whisper, Piper, palavra de ativação) roda como um endpoint Wyoming.',
          'O Assist os descobre e usa por meio da integração Wyoming.',
          'Essa modularidade significa que você pode descarregar o Whisper para uma máquina mais potente, se preciso.',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: 'Adicionar o cérebro LLM',
        content:
          '**Defina um LLM local como agente de conversa para entender linguagem natural em vez de apenas intenções fixas.** É opcional, mas libera frases flexíveis.',
        items: [
          'Cableie o Ollama no Home Assistant primeiro — veja [o guia de integração do Ollama](/pt/smart-home/home-assistant-ollama-integration).',
          'Use um modelo pequeno com chamada de funções para que as respostas de voz fiquem ágeis.',
          'Para o panorama de ponta a ponta, veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Necessidades de hardware',
        content:
          '**Um mini PC roda com folga o Assist, Whisper, Piper e um LLM pequeno; uma Raspberry Pi lida com voz só-intenção, mas tem dificuldade com modelos Whisper grandes e inferência de LLM.** O hardware de microfone (satélites de voz) capta o áudio pela casa.',
        items: [
          'Use um mini PC se quiser o cérebro LLM e modelos Whisper maiores — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          'Use uma Pi para um assistente leve só-intenção.',
          'Adicione hardware de satélite de voz (endpoints de microfone + alto-falante) para a cobertura por cômodo.',
          'Compare os compromissos local vs nuvem em [assistentes de voz local vs nuvem](/pt/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um assistente de voz local pode substituir totalmente a Alexa?', a: 'Para o controle da casa inteligente e muitas rotinas, sim — o Assist com Whisper, Piper e um LLM local cobre o controle de dispositivos e as respostas em linguagem natural. Ele não replica cada skill da Alexa de terceiros nem funções de compra na nuvem, mas cobre o caso de uso central do controle do lar de forma privada.' },
          { q: 'Um assistente de voz local funciona offline?', a: 'Sim. Voz-para-texto (Whisper), texto-para-voz (Piper), o tratamento de intenções e um LLM local opcional rodam todos no seu hardware, então o assistente funciona sem internet. Só o acesso remoto de fora do lar precisa de conectividade.' },
          { q: 'Quão precisa é o reconhecimento de voz local?', a: 'A precisão depende do tamanho do modelo Whisper e do seu microfone. Modelos Whisper maiores são mais precisos, mas mais lentos; um modelo de tamanho médio em um mini PC dá um bom equilíbrio para comandos do lar. Veja o guia do Whisper local para o dimensionamento.' },
          { q: 'Que hardware preciso para um assistente de voz local?', a: 'Um mini PC para o stack completo (LLM + Whisper maior), ou uma Raspberry Pi para um assistente só-intenção, mais hardware de satélite de voz de microfone/alto-falante para a cobertura por cômodo. Uma GPU ou NPU reduz a latência do LLM e do Whisper grande.' },
          { q: 'Posso usar uma palavra de ativação personalizada?', a: 'Sim. Um motor de palavra de ativação local como o openWakeWord suporta palavras de ativação personalizadas e roda no seu hardware, então o disparo mãos-livres não precisa de nuvem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — adicionar o agente de conversa LLM',
          '[Whisper local + Home Assistant](/pt/smart-home/local-whisper-home-assistant) — escolher e ajustar voz-para-texto',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a arquitetura de IA local completa',
          '[Assistentes de voz local vs nuvem](/pt/smart-home/local-vs-cloud-voice-assistant) — a decisão e os compromissos',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: rodar um modelo local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Monte um Assistente de Voz Totalmente Local para sua Casa Inteligente (2026)',
      description: 'Substitua a Alexa por assistente de voz local 2026: Assist + Whisper + Piper + LLM local via protocolo Wyoming. Privado, sem nuvem, 100 % offline.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Assistente de voz' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um assistente de voz local pode substituir totalmente a Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'Para o controle da casa inteligente e muitas rotinas, sim — o Assist com Whisper, Piper e um LLM local cobre o controle de dispositivos em linguagem natural de forma privada. Ele não replica cada skill da Alexa de terceiros.' } },
        { '@type': 'Question', name: 'Um assistente de voz local funciona offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Whisper, Piper, o tratamento de intenções e um LLM local opcional rodam todos no seu hardware, então funciona sem internet.' } },
        { '@type': 'Question', name: 'Quão precisa é o reconhecimento de voz local?', acceptedAnswer: { '@type': 'Answer', text: 'A precisão depende do tamanho do modelo Whisper e do microfone. Modelos maiores são mais precisos, mas mais lentos; um modelo de tamanho médio em um mini PC equilibra ambos.' } },
        { '@type': 'Question', name: 'Que hardware preciso para um assistente de voz local?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC para o stack completo, ou uma Raspberry Pi para um assistente só-intenção, mais hardware de satélite de voz de microfone/alto-falante. Uma GPU ou NPU reduz a latência.' } },
        { '@type': 'Question', name: 'Posso usar uma palavra de ativação personalizada?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Um motor de palavra de ativação local como o openWakeWord suporta palavras de ativação personalizadas e roda no seu hardware sem nuvem.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '为你的智能家居搭建完全本地的语音助手（2026）',
    seoTitle: '本地语音助手 2026：私密地替代 Alexa',
    intro:
      '你可以用 Home Assistant Assist、用于语音转文字的本地 Whisper、用于文字转语音的 Piper，以及作为大脑的本地 LLM，搭建一个完全本地的语音助手来替代 Alexa 或 Google。本指南讲解离线语音堆栈、各个组件、把它们连起来的 Wyoming 协议，以及你需要的硬件——一切私密，且无需云端即可工作。',
    metaDescription:
      '用完全本地语音助手替代 Alexa（2026）：Home Assistant Assist 整合本地 Whisper 语音识别、Piper 语音合成与本地 LLM 推理模块，经由 Wyoming 协议连接组合。实现完全离线运行、隐私数据保护、零月费订阅。含麦克风与唤醒词检测全流程配置。',
    twitterDescription:
      '搭建一个替代 Alexa 的私密语音助手：Assist + Whisper（STT）+ Piper（TTS）+ 本地 LLM。完全离线，经由 Wyoming。',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    audience: '替换云端语音助手、注重隐私的 Home Assistant 用户',
    primaryTerm: 'local voice assistant',
    targetKeywords: [
      '本地语音助手 home assistant',
      '替代 alexa home assistant',
      '私密语音助手',
      'home assistant assist whisper piper',
      '离线语音助手',
    ],
    leadAnswerBlock:
      '**一个完全本地的语音助手结合了 Home Assistant Assist（意图）、本地 Whisper（语音转文字）、Piper（文字转语音）和本地 LLM（推理）——全部经由 Wyoming 协议连接，并在你自己的硬件上运行。** 没有音频或命令离开家门，而且它可以离线工作。',
    quickAnswerTop: {
      zh: {
        question: '我该如何搭建一个完全本地的语音助手？',
        answer:
          '把 Home Assistant Assist 用作流水线，添加用于语音转文字的 Whisper 加载项和用于文字转语音的 Piper 加载项，经由 Wyoming 协议把它们连起来，添加一个唤醒词引擎，并可选地把本地 LLM 设为对话代理。一切都在你的硬件上运行，无需云端。',
        bullets: [
          'Assist = Home Assistant 内部的语音流水线',
          'Whisper = 本地语音转文字；Piper = 本地文字转语音',
          'Wyoming 协议把各语音服务连起来',
          '添加一个唤醒词引擎以实现免手使用',
          '可选：把本地 LLM 作为对话代理',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '本地语音堆栈', anchor: 'voice-stack' },
      { label: 'Home Assistant Assist', anchor: 'assist' },
      { label: '用于 STT 的 Whisper', anchor: 'whisper' },
      { label: '用于 TTS 的 Piper', anchor: 'piper' },
      { label: 'Wyoming 协议', anchor: 'wyoming' },
      { label: '加入 LLM 大脑', anchor: 'llm-brain' },
      { label: '硬件需求', anchor: 'hardware' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '一个完全本地的语音助手就是 Home Assistant Assist + Whisper（STT）+ Piper（TTS）+ 可选的本地 LLM，经由 Wyoming 连接并离线运行。' },
      { type: 'plain-terms', content: '语音助手有三项工作：听到你（语音转文字）、理解并行动（意图或 LLM）、用语音回应（文字转语音）。Home Assistant 可用 Whisper、Piper 和 Assist 在你自己的硬件上完成这三项，因此不像 Alexa，没有录音被发送到公司服务器。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Home Assistant Assist 是把一切串起来的本地语音流水线',
          'Whisper 在本地处理语音转文字；按你的精度/速度/硬件取舍选择模型大小',
          'Piper 在本地以自然的嗓音处理文字转语音',
          'Wyoming 协议把 Assist 与 Whisper、Piper 服务连接起来',
          '添加一个唤醒词引擎（如 openWakeWord）以实现免手触发',
          '可选：为自然语言理解，把本地 LLM 设为对话代理',
        ],
      },
      voiceStack: {
        id: 'voice-stack',
        title: '完全本地的语音堆栈',
        content:
          '**一个本地语音助手就是你自己硬件上的四个角色：采集并转写（Whisper）、理解（Assist 意图或本地 LLM）、回应（Piper）、触发（唤醒词）。** 每一个都离线运行；Wyoming 协议把它们连起来。',
        columns: ['组件', '角色', '本地？', '备注'],
        rows: [
          { '组件': 'Assist', '角色': '流水线 + 意图', '本地？': '是', '备注': '内置于 Home Assistant' },
          { '组件': 'Whisper', '角色': '语音转文字', '本地？': '是', '备注': '模型大小决定精度/速度' },
          { '组件': 'Piper', '角色': '文字转语音', '本地？': '是', '备注': '自然的本地嗓音' },
          { '组件': '唤醒词', '角色': '免手触发', '本地？': '是', '备注': '例如 openWakeWord' },
          { '组件': '本地 LLM', '角色': '理解（可选）', '本地？': '是', '备注': '经由 Ollama 作为对话代理' },
        ],
      },
      assist: {
        id: 'assist',
        title: 'Home Assistant Assist',
        content:
          '**Assist 是内置的语音流水线，把音频依次经过语音转文字、一个代理，再到文字转语音。** 它在 设置 → 语音助手 中配置。',
        items: [
          '对于常见命令，Assist 用内置意图开箱即用（无需 LLM）。',
          '你选择 STT 引擎（Whisper）、TTS 引擎（Piper）和对话代理。',
          '若你想要一个快速的仅意图助手和另一个独立的、由 LLM 驱动的助手，可使用多条流水线。',
        ],
      },
      whisper: {
        id: 'whisper',
        title: '用于本地语音转文字的 Whisper',
        content:
          '**Whisper 在本地转写你的语音；更大的 Whisper 模型更准确，但需要更多算力。** 把它作为 Whisper（faster-whisper）加载项添加，并经由 Wyoming 连接。',
        items: [
          'Whisper 有从 tiny 到 large 的多种大小——越小越快，越大越准。',
          '关于聚焦的 STT 配置（模型、硬件、精度），参见[本地 Whisper + Home Assistant](/zh/smart-home/local-whisper-home-assistant)。',
          'Whisper 支持多语言，因此非英语命令也能在没有云服务的情况下转写。',
        ],
      },
      piper: {
        id: 'piper',
        title: '用于本地文字转语音的 Piper',
        content:
          '**Piper 在本地以自然嗓音生成语音回应，速度足以在普通硬件上实现实时回复。** 把它作为 Piper 加载项添加，并选择一个嗓音。',
        items: [
          'Piper 提供多种语言和嗓音；每条流水线选一个。',
          '对于典型的回复长度，它在 Raspberry Pi 上也运行良好。',
          '没有音频被发送到任何地方——语音在你的设备上合成。',
        ],
      },
      wyoming: {
        id: 'wyoming',
        title: 'Wyoming 协议',
        content:
          '**Wyoming 是 Home Assistant 用来把 Assist 与 Whisper、Piper 等本地语音服务连接起来的协议。** 它让语音服务能作为独立的加载项或在独立的机器上运行。',
        items: [
          '每个服务（Whisper、Piper、唤醒词）都作为一个 Wyoming 端点运行。',
          'Assist 通过 Wyoming 集成发现并使用它们。',
          '这种模块化意味着必要时你可以把 Whisper 卸载到一台更强的机器上。',
        ],
      },
      llmBrain: {
        id: 'llm-brain',
        title: '加入 LLM 大脑',
        content:
          '**把本地 LLM 设为对话代理，以理解自然语言，而不仅是固定意图。** 这是可选的，但能解锁灵活的表达方式。',
        items: [
          '先把 Ollama 接入 Home Assistant——参见[Ollama 集成指南](/zh/smart-home/home-assistant-ollama-integration)。',
          '使用一个小型函数调用模型，让语音回应保持灵敏。',
          '端到端全貌参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件需求',
        content:
          '**一台迷你 PC 能从容运行 Assist、Whisper、Piper 和一个小型 LLM；Raspberry Pi 可应付仅意图的语音，但在大型 Whisper 模型和 LLM 推理上吃力。** 麦克风硬件（语音卫星）在家中各处采集音频。',
        items: [
          '若你想要 LLM 大脑和更大的 Whisper 模型，就用迷你 PC——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '若要一个轻量的仅意图助手，就用 Pi。',
          '为按房间覆盖，添加语音卫星硬件（麦克风 + 扬声器端点）。',
          '在[本地对云端的语音助手](/zh/smart-home/local-vs-cloud-voice-assistant)中比较本地对云端的取舍。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '本地语音助手能完全替代 Alexa 吗？', a: '对于智能家居控制和许多日常，能——带 Whisper、Piper 和本地 LLM 的 Assist 涵盖了自然语言的设备控制与回应。它不会复制每一个第三方 Alexa 技能或云端购物功能，但能私密地覆盖家庭控制的核心用例。' },
          { q: '本地语音助手能离线工作吗？', a: '能。语音转文字（Whisper）、文字转语音（Piper）、意图处理和可选的本地 LLM 都在你的硬件上运行，因此助手在没有互联网时也能工作。只有来自家庭之外的远程访问才需要连通性。' },
          { q: '本地语音识别有多准确？', a: '准确度取决于 Whisper 的模型大小和你的麦克风。更大的 Whisper 模型更准确但更慢；迷你 PC 上的中等大小模型对家庭命令而言取得了良好平衡。规模选择参见本地 Whisper 指南。' },
          { q: '本地语音助手需要什么硬件？', a: '完整堆栈（LLM + 更大的 Whisper）用一台迷你 PC，仅意图助手用一台 Raspberry Pi，再加用于按房间覆盖的麦克风/扬声器语音卫星硬件。GPU 或 NPU 可降低 LLM 和大型 Whisper 的延迟。' },
          { q: '我可以使用自定义唤醒词吗？', a: '可以。像 openWakeWord 这样的本地唤醒词引擎支持自定义唤醒词，并在你的硬件上运行，因此免手触发无需云端。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 添加 LLM 对话代理',
          '[本地 Whisper + Home Assistant](/zh/smart-home/local-whisper-home-assistant) — 选择并调优语音转文字',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 完整的本地 AI 架构',
          '[本地对云端的语音助手](/zh/smart-home/local-vs-cloud-voice-assistant) — 决策与取舍',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：运行本地模型',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '为你的智能家居搭建完全本地的语音助手（2026）',
      description: '用完全本地语音助手替代 Alexa（2026）：Home Assistant Assist 整合本地 Whisper 语音识别、Piper 语音合成与本地 LLM 推理模块，经由 Wyoming 协议连接组合。实现完全离线运行、隐私数据保护、零月费订阅。含麦克风与唤醒词检测全流程配置。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-voice-assistant-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '语音助手' }, { '@type': 'Thing', name: 'Home Assistant Assist' }, { '@type': 'Thing', name: 'Whisper' }, { '@type': 'Thing', name: 'Piper' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '本地语音助手能完全替代 Alexa 吗？', acceptedAnswer: { '@type': 'Answer', text: '对于智能家居控制和许多日常，能——带 Whisper、Piper 和本地 LLM 的 Assist 私密地涵盖了自然语言的设备控制。它不会复制每一个第三方 Alexa 技能。' } },
        { '@type': 'Question', name: '本地语音助手能离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '能。Whisper、Piper、意图处理和可选的本地 LLM 都在你的硬件上运行，因此在没有互联网时也能工作。' } },
        { '@type': 'Question', name: '本地语音识别有多准确？', acceptedAnswer: { '@type': 'Answer', text: '准确度取决于 Whisper 的模型大小和麦克风。更大的模型更准确但更慢；迷你 PC 上的中等大小模型兼顾两者。' } },
        { '@type': 'Question', name: '本地语音助手需要什么硬件？', acceptedAnswer: { '@type': 'Answer', text: '完整堆栈用一台迷你 PC，仅意图助手用一台 Raspberry Pi，再加麦克风/扬声器语音卫星硬件。GPU 或 NPU 可降低延迟。' } },
        { '@type': 'Question', name: '我可以使用自定义唤醒词吗？', acceptedAnswer: { '@type': 'Answer', text: '可以。像 openWakeWord 这样的本地唤醒词引擎支持自定义唤醒词，并在你的硬件上运行，无需云端。' } },
      ],
    },
  },
}
