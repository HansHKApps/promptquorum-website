import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Connect Ollama to Home Assistant: Local AI Assistant (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: Local AI Setup',
    intro:
      'Home Assistant has a built-in Ollama integration that turns a locally hosted model into your conversation agent, controlling devices in natural language with no cloud. This guide walks through prerequisites, adding the integration, choosing a model, wiring the conversation agent, controlling devices, and troubleshooting — keeping Ollama setup and model selection linked out, not re-explained.',
    metaDescription:
      'Connect Ollama to Home Assistant step by step: add the integration, pick a model, set the conversation agent, and control devices in natural language. No cloud.',
    twitterDescription:
      'Wire Ollama into Home Assistant for a fully local AI assistant: add the integration, choose a model, control devices by voice or text. Zero cloud.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding a local AI conversation agent',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'home assistant ollama integration',
      'ollama home assistant',
      'home assistant local llm',
      'home assistant conversation agent ollama',
      'local ai assistant home assistant',
    ],
    leadAnswerBlock:
      "**Add Home Assistant's Ollama integration, point it at your Ollama server, pick a model, then set that model as the Assist conversation agent — now you control devices in plain language, fully locally.** Ollama runs the model on your own hardware, so no command or home state leaves your network.",
    quickAnswerTop: {
      en: {
        question: 'How do I connect Ollama to Home Assistant?',
        answer:
          'Run Ollama on a machine reachable from Home Assistant, pull a model, then in Home Assistant add the Ollama integration (Settings → Devices & Services), enter the Ollama URL (default http://host:11434), and select your model. Finally, set the Ollama conversation entity as the agent in your Assist pipeline.',
        bullets: [
          'Run Ollama and pull a model on a reachable host',
          'Add the Ollama integration in Home Assistant',
          'Enter the Ollama URL (default port 11434) and pick a model',
          'Expose entities to Assist so the model can control them',
          'Set the Ollama agent in your Assist pipeline',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What This Gives You', anchor: 'what-this-gives' },
      { label: 'Prerequisites', anchor: 'prerequisites' },
      { label: 'Add the Integration', anchor: 'add-integration' },
      { label: 'Choose a Model', anchor: 'choose-model' },
      { label: 'Configure the Agent', anchor: 'configure-agent' },
      { label: 'Control Devices', anchor: 'control-devices' },
      { label: 'Troubleshooting', anchor: 'troubleshooting' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Add the Ollama integration in Home Assistant, point it at your Ollama server, pick a model, and set it as the Assist conversation agent.' },
      { type: 'plain-terms', content: 'Home Assistant can use a local AI model as its voice/chat brain. You run the model with Ollama on your own computer, tell Home Assistant where to find it, choose which model to use, and let it control the devices you expose. Everything runs on your hardware, so nothing is sent to a cloud service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant ships an official Ollama integration — no custom add-on needed',
          'Run Ollama on the Home Assistant host or another machine on your LAN',
          'Add integration → enter Ollama URL (default http://host:11434) → select a model',
          'Expose only the entities you want the model to control, then set it as the Assist agent',
          'Use a small function-calling model for low latency; link out for model/hardware depth',
          'Everything is local: no command or home state leaves your network',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'What Connecting Ollama to Home Assistant Gives You',
        content:
          '**It gives Home Assistant a local conversation agent: you speak or type a request and the model maps it to device actions, with no cloud assistant in the loop.** This replaces the cloud voice agent (Alexa, Google) for natural-language control.',
        items: [
          '**Natural-language control:** "turn off everything downstairs" maps to the right entities instead of a fixed phrase.',
          '**Local and private:** the model runs through Ollama on your hardware — see [the local LLM smart home guide](/smart-home/local-llm-smart-home-complete-guide) for the full architecture.',
          '**Voice-ready:** pair it with a local voice pipeline for a private Alexa replacement — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Prerequisites Before You Start',
        content:
          '**You need Home Assistant running, Ollama running on a reachable host, and one model pulled.** This guide does not re-explain installing Ollama — link out for that.',
        numberedItems: [
          'Home Assistant up and reachable on your LAN.',
          'Ollama installed and running on the same host or another machine — see [how to install Ollama](/local-llms/how-to-install-ollama).',
          'At least one model pulled (a small instruction model is the right starting point).',
          'Network reachability: confirm Home Assistant can reach the Ollama URL (default port 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'How Do You Add the Ollama Integration?',
        content:
          '**In Home Assistant go to Settings → Devices & Services → Add Integration → Ollama, then enter the Ollama URL.** The default URL is http://<host>:11434.',
        columns: ['Step', 'Action', 'Result'],
        rows: [
          { 'Step': '1', 'Action': 'Settings → Devices & Services → Add Integration', 'Result': 'Integration picker opens' },
          { 'Step': '2', 'Action': 'Search "Ollama" and select it', 'Result': 'Connection dialog appears' },
          { 'Step': '3', 'Action': 'Enter the Ollama URL (http://host:11434)', 'Result': 'Home Assistant connects to Ollama' },
          { 'Step': '4', 'Action': 'Select a model from the list', 'Result': 'A conversation entity is created' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Which Model Should You Choose?',
        content:
          '**Choose a small, fast, instruction-following model with function-calling for home control — not the largest model you can run.** Latency matters more than raw capability here.',
        items: [
          'Use a small model if you want snappy responses on modest hardware.',
          'Prioritise function-calling/tool support so the model can emit device actions reliably.',
          'For a smart-home-specific shortlist, see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
          'For deeper model mechanics, link out to [best local LLMs for coding](/power-local-llm/best-local-coding-models-2026) and the local-llms cluster — this guide does not re-rank models.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Configure the Conversation Agent',
        content:
          '**Set the Ollama conversation entity as the agent in your Assist pipeline, and expose only the entities you want it to control.** Exposure is what lets the model act on devices.',
        numberedItems: [
          'Open Settings → Voice assistants and edit (or create) an Assist pipeline.',
          'Set the conversation agent to the Ollama entity created by the integration.',
          'Under Assist exposure, expose the specific entities the model may control.',
          'Optionally add a custom prompt to constrain tone and scope.',
          'Save, then test from the Assist chat box before adding voice.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Control Devices by Voice or Text',
        content:
          '**Once the agent is set and entities are exposed, type or speak a request in Assist and the model performs the action.** Keep deterministic safety automations as plain rules, not model-driven.',
        items: [
          'Test with simple commands first ("turn on the office light"), then natural phrasing.',
          'The model only controls entities you exposed — unexposed devices are untouched.',
          'Add a local voice front-end for hands-free use — see [local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'For context-aware automations beyond direct commands, see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting Common Issues',
        content:
          '**Most problems are connectivity, model choice, or exposure.** Work through these in order.',
        items: [
          '**Cannot connect:** verify the Ollama URL and that port 11434 is reachable from Home Assistant; bind Ollama to 0.0.0.0 if on another host.',
          '**Slow responses:** switch to a smaller model or add a GPU/NPU — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Model ignores devices:** confirm the entities are exposed to Assist and the Ollama entity is the active agent.',
          '**Wrong actions:** add a system prompt constraining scope, or reduce the number of exposed entities.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Which model should I pick for Home Assistant?', a: 'A small instruction-following model with function-calling support is the best starting point because home control needs fast, structured responses. The right size depends on your hardware; see the best local LLM models for smart home guide for current options.' },
          { q: 'Do I need a GPU to run Ollama with Home Assistant?', a: 'No, but it helps. A small model runs on a modern CPU or integrated GPU; a discrete GPU or NPU lowers latency so the assistant feels snappier. Match model size to your hardware.' },
          { q: 'Can the model control any device in Home Assistant?', a: 'Only entities you explicitly expose to Assist. Exposure is opt-in, so the model cannot act on devices you have not shared with it, which keeps control predictable and safe.' },
          { q: 'Does the Ollama integration work offline?', a: 'Yes. Ollama runs the model locally and Home Assistant controls devices over your LAN, so the assistant works with no internet. Only remote access from outside the home needs connectivity.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — the full architecture this fits into',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — add hands-free voice',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — pick the right model',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: Ollama setup',
          '[Best Local Coding Models 2026](/power-local-llm/best-local-coding-models-2026) — cross-cluster: model depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Connect Ollama to Home Assistant: Local AI Assistant (2026)',
      description: 'Connect Ollama to Home Assistant step by step: add the integration, pick a model, set the conversation agent, and control devices in natural language. No cloud.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-ollama-integration',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Local AI assistant' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which model should I pick for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A small instruction-following model with function-calling support, because home control needs fast structured responses. The right size depends on your hardware.' } },
        { '@type': 'Question', name: 'Do I need a GPU to run Ollama with Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No, but it helps. A small model runs on a modern CPU or integrated GPU; a discrete GPU or NPU lowers latency.' } },
        { '@type': 'Question', name: 'Can the model control any device in Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Only entities you explicitly expose to Assist. Exposure is opt-in, so the model cannot act on devices you have not shared.' } },
        { '@type': 'Question', name: 'Does the Ollama integration work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Ollama runs the model locally and Home Assistant controls devices over your LAN, so it works with no internet.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'ربط Ollama بـ Home Assistant: مساعد ذكاء اصطناعي محلي (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: مساعد ذكاء اصطناعي محلي',
    intro:
      'يتضمن Home Assistant تكاملًا مدمجًا مع Ollama يحوّل نموذجًا يستضيفه محليًا إلى عامل محادثة يتحكم في الأجهزة بلغة طبيعية دون أي سحابة. يستعرض هذا الدليل المتطلبات الأساسية وإضافة التكامل واختيار النموذج وتوصيل عامل المحادثة والتحكم في الأجهزة واستكشاف الأخطاء — مع الإبقاء على إعداد Ollama واختيار النموذج كروابط خارجية لا إعادة شرح.',
    metaDescription:
      'ربط Ollama بـ Home Assistant على المنفذ 11434: أضف التكامل، اختر نموذجًا صغيرًا يدعم function-calling، وعيّنه عامل Assist للتحكم بالأجهزة محليًا.',
    twitterDescription:
      'اربط Ollama بـ Home Assistant للحصول على مساعد ذكاء اصطناعي محلي بالكامل: أضف التكامل واختر نموذجًا وتحكم في الأجهزة بالصوت أو النص. صفر سحابة.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يضيفون عامل محادثة ذكاء اصطناعي محلي',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'تكامل ollama home assistant',
      'ollama home assistant',
      'home assistant نموذج llm محلي',
      'عامل محادثة ollama home assistant',
      'مساعد ذكاء اصطناعي محلي home assistant',
    ],
    leadAnswerBlock:
      '**أضف تكامل Ollama في Home Assistant ووجّهه نحو خادم Ollama واختر نموذجًا ثم عيّن هذا النموذج عامل محادثة Assist — الآن تتحكم في الأجهزة بلغة طبيعية بشكل محلي تام.** يشغّل Ollama النموذج على جهازك الخاص، لذا لا يغادر أي أمر أو حالة منزلية شبكتك.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أربط Ollama بـ Home Assistant؟',
        answer:
          'شغّل Ollama على جهاز يمكن الوصول إليه من Home Assistant وحمّل نموذجًا، ثم في Home Assistant أضف تكامل Ollama (الإعدادات ← الأجهزة والخدمات)، وأدخل عنوان URL لـ Ollama (الافتراضي http://host:11434) وحدد نموذجك. أخيرًا، عيّن كيان محادثة Ollama عاملًا في خط أنابيب Assist.',
        bullets: [
          'شغّل Ollama وحمّل نموذجًا على مضيف يمكن الوصول إليه',
          'أضف تكامل Ollama في Home Assistant',
          'أدخل عنوان URL لـ Ollama (المنفذ الافتراضي 11434) واختر نموذجًا',
          'اعرض الكيانات لـ Assist حتى يتمكن النموذج من التحكم فيها',
          'عيّن عامل Ollama في خط أنابيب Assist',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما ستحصل عليه', anchor: 'what-this-gives' },
      { label: 'المتطلبات الأساسية', anchor: 'prerequisites' },
      { label: 'إضافة التكامل', anchor: 'add-integration' },
      { label: 'اختيار نموذج', anchor: 'choose-model' },
      { label: 'تهيئة العامل', anchor: 'configure-agent' },
      { label: 'التحكم في الأجهزة', anchor: 'control-devices' },
      { label: 'استكشاف الأخطاء', anchor: 'troubleshooting' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أضف تكامل Ollama في Home Assistant ووجّهه نحو خادم Ollama واختر نموذجًا وعيّنه عامل محادثة Assist.' },
      { type: 'plain-terms', content: 'يمكن لـ Home Assistant استخدام نموذج ذكاء اصطناعي محلي كعقله للصوت والدردشة. تشغّل النموذج بـ Ollama على جهازك الخاص وتخبر Home Assistant بمكانه وتختار النموذج وتتركه يتحكم في الأجهزة التي تعرضها. كل شيء يعمل على جهازك، لذا لا يُرسل شيء إلى خدمة سحابية.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يأتي Home Assistant مع تكامل Ollama رسمي — لا حاجة لإضافة مخصصة',
          'شغّل Ollama على مضيف Home Assistant أو جهاز آخر على شبكتك المحلية',
          'أضف التكامل ← أدخل عنوان URL لـ Ollama (الافتراضي http://host:11434) ← حدد نموذجًا',
          'اعرض الكيانات التي تريد أن يتحكم فيها النموذج فقط، ثم عيّنه عامل Assist',
          'استخدم نموذجًا صغيرًا يدعم استدعاء الدوال لتقليل زمن الاستجابة؛ اربط للتعمق في النماذج والجهاز',
          'كل شيء محلي: لا يغادر أي أمر أو حالة منزلية شبكتك',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'ما يمنحك إياه ربط Ollama بـ Home Assistant',
        content:
          '**يمنح Home Assistant عامل محادثة محليًا: تتكلم أو تكتب طلبًا ويقوم النموذج بتعيينه إلى إجراءات الأجهزة، دون مشاركة أي مساعد سحابي.** يحل هذا محل عامل الصوت السحابي (Alexa، Google) للتحكم بلغة طبيعية.',
        items: [
          '**التحكم بلغة طبيعية:** "أطفئ كل شيء في الطابق السفلي" يُعين على الكيانات الصحيحة بدلًا من عبارة ثابتة.',
          '**محلي وخاص:** يعمل النموذج عبر Ollama على جهازك — راجع [دليل المنزل الذكي بنموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) للبنية التقنية الكاملة.',
          '**جاهز للصوت:** ادمجه مع خط أنابيب صوتي محلي كبديل خاص لـ Alexa — راجع [بناء مساعد صوتي محلي بالكامل](/ar/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'المتطلبات الأساسية قبل البدء',
        content:
          '**تحتاج إلى Home Assistant يعمل و Ollama يعمل على مضيف يمكن الوصول إليه ونموذج واحد محمّل.** لا يُعيد هذا الدليل شرح تثبيت Ollama — الرابط لذلك خارجي.',
        numberedItems: [
          'Home Assistant يعمل ويمكن الوصول إليه على شبكتك المحلية.',
          'Ollama مثبت ويعمل على نفس المضيف أو جهاز آخر — راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
          'نموذج واحد على الأقل محمّل (نموذج تعليمات صغير هو نقطة البداية المناسبة).',
          'إمكانية الوصول الشبكي: تأكد من أن Home Assistant يمكنه الوصول إلى عنوان URL لـ Ollama (المنفذ الافتراضي 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'كيف تضيف تكامل Ollama؟',
        content:
          '**في Home Assistant اذهب إلى الإعدادات ← الأجهزة والخدمات ← إضافة تكامل ← Ollama، ثم أدخل عنوان URL لـ Ollama.** عنوان URL الافتراضي هو http://<host>:11434.',
        columns: ['الخطوة', 'الإجراء', 'النتيجة'],
        rows: [
          { 'الخطوة': '1', 'الإجراء': 'الإعدادات ← الأجهزة والخدمات ← إضافة تكامل', 'النتيجة': 'يفتح منتقي التكاملات' },
          { 'الخطوة': '2', 'الإجراء': 'ابحث عن "Ollama" وحدده', 'النتيجة': 'يظهر مربع حوار الاتصال' },
          { 'الخطوة': '3', 'الإجراء': 'أدخل عنوان URL لـ Ollama (http://host:11434)', 'النتيجة': 'يتصل Home Assistant بـ Ollama' },
          { 'الخطوة': '4', 'الإجراء': 'حدد نموذجًا من القائمة', 'النتيجة': 'يُنشأ كيان محادثة' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'أي نموذج يجب أن تختار؟',
        content:
          '**اختر نموذجًا صغيرًا سريعًا يتبع التعليمات ويدعم استدعاء الدوال للتحكم في المنزل — وليس أكبر نموذج يمكنك تشغيله.** زمن الاستجابة هنا أهم من القدرة الخام.',
        items: [
          'استخدم نموذجًا صغيرًا إذا أردت استجابات سريعة على جهاز متواضع.',
          'أعطِ الأولوية لدعم استدعاء الدوال/الأدوات حتى يُصدر النموذج إجراءات الأجهزة بشكل موثوق.',
          'للاطلاع على قائمة مختصرة خاصة بالمنزل الذكي، راجع [أفضل نماذج LLM المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home).',
          'للتعمق في آليات النماذج، انتقل إلى [أفضل LLMs المحلية للبرمجة](/ar/power-local-llm/best-local-coding-models-2026) وعنقود local-llms — هذا الدليل لا يُعيد ترتيب النماذج.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'تهيئة عامل المحادثة',
        content:
          '**عيّن كيان محادثة Ollama عاملًا في خط أنابيب Assist واعرض الكيانات التي تريده يتحكم فيها فقط.** العرض هو ما يسمح للنموذج بالتأثير في الأجهزة.',
        numberedItems: [
          'افتح الإعدادات ← المساعدات الصوتية وعدّل (أو أنشئ) خط أنابيب Assist.',
          'عيّن عامل المحادثة على كيان Ollama الذي أنشأه التكامل.',
          'تحت إعدادات عرض Assist، اعرض الكيانات المحددة التي يمكن للنموذج التحكم فيها.',
          'اختياريًا أضف تعليمة نظام مخصصة لتقييد النبرة والنطاق.',
          'احفظ ثم اختبر من مربع دردشة Assist قبل إضافة الصوت.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'التحكم في الأجهزة بالصوت أو النص',
        content:
          '**بمجرد ضبط العامل وعرض الكيانات، اكتب أو قُل طلبًا في Assist وسينفذ النموذج الإجراء.** احتفظ بأتمتة السلامة الحتمية كقواعد بسيطة لا يقودها النموذج.',
        items: [
          'اختبر أولًا بأوامر بسيطة ("أضئ مصباح المكتب")، ثم بصياغة طبيعية.',
          'يتحكم النموذج فقط في الكيانات التي عرضتها — الأجهزة غير المعروضة تبقى دون تغيير.',
          'أضف واجهة صوتية محلية للاستخدام باليد الحرة — راجع [مساعد صوتي محلي](/ar/smart-home/local-voice-assistant-smart-home).',
          'لأتمتة واعية بالسياق تتجاوز الأوامر المباشرة، راجع [أتمتة الذكاء الاصطناعي مع نموذج LLM محلي](/ar/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'استكشاف المشكلات الشائعة وإصلاحها',
        content:
          '**معظم المشكلات تتعلق بالاتصال أو اختيار النموذج أو العرض.** تعامل معها بالترتيب.',
        items: [
          '**تعذر الاتصال:** تحقق من عنوان URL لـ Ollama وأن المنفذ 11434 يمكن الوصول إليه من Home Assistant؛ اربط Ollama بـ 0.0.0.0 إذا كان على مضيف آخر.',
          '**استجابات بطيئة:** انتقل إلى نموذج أصغر أو أضف GPU/NPU — راجع [أفضل جهاز للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          '**النموذج يتجاهل الأجهزة:** تأكد من أن الكيانات معروضة لـ Assist وأن كيان Ollama هو العامل النشط.',
          '**إجراءات خاطئة:** أضف تعليمة نظام تقيّد النطاق، أو قلّل عدد الكيانات المعروضة.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'أي نموذج يجب أن أختار لـ Home Assistant؟', a: 'نموذج صغير يتبع التعليمات مع دعم استدعاء الدوال هو أفضل نقطة بداية لأن التحكم في المنزل يتطلب استجابات سريعة ومنظمة. الحجم المناسب يعتمد على جهازك؛ راجع دليل أفضل نماذج LLM المحلية للمنزل الذكي للخيارات الحالية.' },
          { q: 'هل أحتاج إلى GPU لتشغيل Ollama مع Home Assistant؟', a: 'لا، لكنه يساعد. يعمل نموذج صغير على CPU حديث أو GPU مدمج؛ GPU مخصص أو NPU يقلل زمن الاستجابة مما يجعل المساعد أكثر استجابة. طابق حجم النموذج مع جهازك.' },
          { q: 'هل يمكن للنموذج التحكم في أي جهاز في Home Assistant؟', a: 'فقط الكيانات التي تعرضها صراحةً لـ Assist. العرض يعتمد الموافقة المسبقة، لذا لا يمكن للنموذج التصرف على أجهزة لم تشاركها، مما يجعل التحكم قابلًا للتنبؤ وآمنًا.' },
          { q: 'هل يعمل تكامل Ollama دون اتصال بالإنترنت؟', a: 'نعم. يشغّل Ollama النموذج محليًا ويتحكم Home Assistant في الأجهزة عبر شبكتك المحلية، لذا يعمل المساعد دون إنترنت. فقط الوصول البعيد من خارج المنزل يحتاج اتصالًا.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — البنية التقنية الكاملة التي يندرج فيها هذا',
          '[بناء مساعد صوتي محلي بالكامل](/ar/smart-home/local-voice-assistant-smart-home) — إضافة الصوت باليد الحرة',
          '[أفضل نماذج LLM المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home) — اختر النموذج المناسب',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — متعدد العناقيد: إعداد Ollama',
          '[أفضل النماذج المحلية للبرمجة 2026](/ar/power-local-llm/best-local-coding-models-2026) — متعدد العناقيد: عمق النماذج',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ربط Ollama بـ Home Assistant: مساعد ذكاء اصطناعي محلي (2026)',
      description: 'ربط Ollama بـ Home Assistant خطوة بخطوة: أضف التكامل واختر نموذجًا وضبط عامل المحادثة وتحكم في الأجهزة بلغة طبيعية. بدون سحابة.',
      url: 'https://www.promptquorum.com/ar/smart-home/home-assistant-ollama-integration',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'مساعد ذكاء اصطناعي محلي' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'أي نموذج يجب أن أختار لـ Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'نموذج صغير يتبع التعليمات مع دعم استدعاء الدوال هو أفضل نقطة بداية لأن التحكم في المنزل يتطلب استجابات سريعة ومنظمة. الحجم المناسب يعتمد على جهازك.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى GPU لتشغيل Ollama مع Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'لا، لكنه يساعد. يعمل نموذج صغير على CPU حديث أو GPU مدمج؛ GPU مخصص أو NPU يقلل زمن الاستجابة.' } },
        { '@type': 'Question', name: 'هل يمكن للنموذج التحكم في أي جهاز في Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'فقط الكيانات التي تعرضها صراحةً لـ Assist. العرض يعتمد الموافقة المسبقة، لذا لا يمكن للنموذج التصرف على أجهزة لم تشاركها.' } },
        { '@type': 'Question', name: 'هل يعمل تكامل Ollama دون اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يشغّل Ollama النموذج محليًا ويتحكم Home Assistant في الأجهزة عبر شبكتك المحلية، لذا يعمل دون إنترنت.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Ollama mit Home Assistant verbinden: Lokaler KI-Assistent (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: Lokales KI-Setup',
    intro:
      'Home Assistant hat eine eingebaute Ollama-Integration, die ein lokal gehostetes Modell zu Ihrem Konversations-Agenten macht und Geräte in natürlicher Sprache ohne Cloud steuert. Dieser Leitfaden führt durch Voraussetzungen, das Hinzufügen der Integration, die Modellwahl, das Verdrahten des Konversations-Agenten, die Gerätesteuerung und die Fehlerbehebung – die Ollama-Installation und Modellauswahl werden verlinkt, nicht erneut erklärt.',
    metaDescription:
      'Ollama mit Home Assistant verbinden 2026: Integration hinzufügen, Modell wählen, Konversations-Agent setzen. Geräte in natürlicher Sprache steuern.',
    twitterDescription:
      'Ollama in Home Assistant verdrahten für einen vollständig lokalen KI-Assistenten: Integration hinzufügen, Modell wählen, Geräte per Sprache oder Text steuern. Keine Cloud.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die einen lokalen KI-Konversations-Agenten hinzufügen',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'home assistant ollama integration',
      'ollama home assistant',
      'home assistant lokales llm',
      'home assistant konversations-agent ollama',
      'lokaler ki-assistent home assistant',
    ],
    leadAnswerBlock:
      '**Fügen Sie die Ollama-Integration von Home Assistant hinzu, richten Sie sie auf Ihren Ollama-Server, wählen Sie ein Modell und setzen Sie dieses Modell als Assist-Konversations-Agenten – nun steuern Sie Geräte in natürlicher Sprache, vollständig lokal.** Ollama betreibt das Modell auf Ihrer eigenen Hardware, sodass kein Befehl oder Heimzustand Ihr Netzwerk verlässt.',
    quickAnswerTop: {
      de: {
        question: 'Wie verbinde ich Ollama mit Home Assistant?',
        answer:
          'Betreiben Sie Ollama auf einer von Home Assistant erreichbaren Maschine, laden Sie ein Modell, fügen Sie dann in Home Assistant die Ollama-Integration hinzu (Einstellungen → Geräte & Dienste), geben Sie die Ollama-URL ein (Standard http://host:11434) und wählen Sie Ihr Modell. Setzen Sie zuletzt die Ollama-Konversations-Entität als Agenten in Ihrer Assist-Pipeline.',
        bullets: [
          'Ollama betreiben und ein Modell auf einem erreichbaren Host laden',
          'Die Ollama-Integration in Home Assistant hinzufügen',
          'Die Ollama-URL eingeben (Standardport 11434) und ein Modell wählen',
          'Entitäten für Assist freigeben, damit das Modell sie steuern kann',
          'Den Ollama-Agenten in Ihrer Assist-Pipeline setzen',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was Ihnen das bringt', anchor: 'what-this-gives' },
      { label: 'Voraussetzungen', anchor: 'prerequisites' },
      { label: 'Integration hinzufügen', anchor: 'add-integration' },
      { label: 'Ein Modell wählen', anchor: 'choose-model' },
      { label: 'Den Agenten konfigurieren', anchor: 'configure-agent' },
      { label: 'Geräte steuern', anchor: 'control-devices' },
      { label: 'Fehlerbehebung', anchor: 'troubleshooting' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Fügen Sie die Ollama-Integration in Home Assistant hinzu, richten Sie sie auf Ihren Ollama-Server, wählen Sie ein Modell und setzen Sie es als Assist-Konversations-Agenten.' },
      { type: 'plain-terms', content: 'Home Assistant kann ein lokales KI-Modell als Sprach-/Chat-Gehirn nutzen. Sie betreiben das Modell mit Ollama auf Ihrem eigenen Computer, teilen Home Assistant mit, wo es zu finden ist, wählen, welches Modell genutzt wird, und lassen es die freigegebenen Geräte steuern. Alles läuft auf Ihrer Hardware, sodass nichts an einen Cloud-Dienst gesendet wird.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant bringt eine offizielle Ollama-Integration mit – kein eigenes Add-on nötig',
          'Betreiben Sie Ollama auf dem Home-Assistant-Host oder einer anderen Maschine im LAN',
          'Integration hinzufügen → Ollama-URL eingeben (Standard http://host:11434) → ein Modell wählen',
          'Geben Sie nur die Entitäten frei, die das Modell steuern soll, und setzen Sie es als Assist-Agenten',
          'Nutzen Sie ein kleines Function-Calling-Modell für geringe Latenz; für Modell-/Hardware-Tiefe verlinken',
          'Alles ist lokal: kein Befehl oder Heimzustand verlässt Ihr Netzwerk',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'Was die Verbindung von Ollama mit Home Assistant bringt',
        content:
          '**Es gibt Home Assistant einen lokalen Konversations-Agenten: Sie sprechen oder tippen eine Anfrage, und das Modell bildet sie auf Geräteaktionen ab, ohne Cloud-Assistent im Spiel.** Das ersetzt den Cloud-Sprachagenten (Alexa, Google) für die natürlichsprachliche Steuerung.',
        items: [
          '**Natürlichsprachliche Steuerung:** „schalte unten alles aus" bildet sich auf die richtigen Entitäten ab statt auf eine feste Phrase.',
          '**Lokal und privat:** Das Modell läuft über Ollama auf Ihrer Hardware – siehe [der lokale LLM-Smart-Home-Leitfaden](/de/smart-home/local-llm-smart-home-complete-guide) für die vollständige Architektur.',
          '**Sprachbereit:** Koppeln Sie es mit einer lokalen Sprach-Pipeline für einen privaten Alexa-Ersatz – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Voraussetzungen, bevor Sie beginnen',
        content:
          '**Sie brauchen ein laufendes Home Assistant, ein laufendes Ollama auf einem erreichbaren Host und ein geladenes Modell.** Dieser Leitfaden erklärt die Ollama-Installation nicht erneut – dafür verlinken wir nach außen.',
        numberedItems: [
          'Home Assistant läuft und ist in Ihrem LAN erreichbar.',
          'Ollama ist installiert und läuft auf demselben Host oder einer anderen Maschine – siehe [Ollama installieren](/de/local-llms/how-to-install-ollama).',
          'Mindestens ein Modell ist geladen (ein kleines Instruktionsmodell ist der richtige Ausgangspunkt).',
          'Netzwerk-Erreichbarkeit: Bestätigen Sie, dass Home Assistant die Ollama-URL erreicht (Standardport 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'Wie fügen Sie die Ollama-Integration hinzu?',
        content:
          '**Gehen Sie in Home Assistant zu Einstellungen → Geräte & Dienste → Integration hinzufügen → Ollama und geben Sie dann die Ollama-URL ein.** Die Standard-URL ist http://<host>:11434.',
        columns: ['Schritt', 'Aktion', 'Ergebnis'],
        rows: [
          { 'Schritt': '1', 'Aktion': 'Einstellungen → Geräte & Dienste → Integration hinzufügen', 'Ergebnis': 'Integrations-Auswahl öffnet sich' },
          { 'Schritt': '2', 'Aktion': '„Ollama" suchen und auswählen', 'Ergebnis': 'Verbindungsdialog erscheint' },
          { 'Schritt': '3', 'Aktion': 'Die Ollama-URL eingeben (http://host:11434)', 'Ergebnis': 'Home Assistant verbindet sich mit Ollama' },
          { 'Schritt': '4', 'Aktion': 'Ein Modell aus der Liste wählen', 'Ergebnis': 'Eine Konversations-Entität wird erstellt' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Welches Modell sollten Sie wählen?',
        content:
          '**Wählen Sie ein kleines, schnelles, instruktionsfolgendes Modell mit Function-Calling für die Heimsteuerung – nicht das größte Modell, das Sie betreiben können.** Latenz zählt hier mehr als rohe Fähigkeit.',
        items: [
          'Nutzen Sie ein kleines Modell, wenn Sie flotte Antworten auf bescheidener Hardware wollen.',
          'Priorisieren Sie Function-Calling-/Tool-Unterstützung, damit das Modell Geräteaktionen zuverlässig ausgibt.',
          'Für eine smart-home-spezifische Auswahl siehe [beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home).',
          'Für tiefere Modell-Mechanik verlinken wir auf [beste lokale LLMs fürs Coden](/de/power-local-llm/best-local-coding-models-2026) und den local-llms-Cluster – dieser Leitfaden ordnet Modelle nicht erneut.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Den Konversations-Agenten konfigurieren',
        content:
          '**Setzen Sie die Ollama-Konversations-Entität als Agenten in Ihrer Assist-Pipeline und geben Sie nur die Entitäten frei, die es steuern soll.** Die Freigabe ist es, die das Modell auf Geräte einwirken lässt.',
        numberedItems: [
          'Öffnen Sie Einstellungen → Sprachassistenten und bearbeiten (oder erstellen) Sie eine Assist-Pipeline.',
          'Setzen Sie den Konversations-Agenten auf die von der Integration erstellte Ollama-Entität.',
          'Geben Sie unter Assist-Freigabe die konkreten Entitäten frei, die das Modell steuern darf.',
          'Fügen Sie optional einen eigenen Prompt hinzu, um Ton und Umfang zu begrenzen.',
          'Speichern Sie, dann testen Sie über das Assist-Chatfenster, bevor Sie Sprache hinzufügen.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Geräte per Sprache oder Text steuern',
        content:
          '**Sobald der Agent gesetzt und die Entitäten freigegeben sind, tippen oder sprechen Sie eine Anfrage in Assist, und das Modell führt die Aktion aus.** Halten Sie deterministische Sicherheits-Automatisierungen als einfache Regeln, nicht modellgesteuert.',
        items: [
          'Testen Sie zuerst mit einfachen Befehlen („schalte das Bürolicht ein"), dann mit natürlicher Formulierung.',
          'Das Modell steuert nur freigegebene Entitäten – nicht freigegebene Geräte bleiben unangetastet.',
          'Fügen Sie ein lokales Sprach-Frontend für freihändige Nutzung hinzu – siehe [lokaler Sprachassistent](/de/smart-home/local-voice-assistant-smart-home).',
          'Für kontextbewusste Automatisierungen über direkte Befehle hinaus siehe [KI-Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Häufige Probleme beheben',
        content:
          '**Die meisten Probleme sind Konnektivität, Modellwahl oder Freigabe.** Arbeiten Sie diese der Reihe nach durch.',
        items: [
          '**Keine Verbindung:** Prüfen Sie die Ollama-URL und dass Port 11434 von Home Assistant erreichbar ist; binden Sie Ollama an 0.0.0.0, wenn es auf einem anderen Host läuft.',
          '**Langsame Antworten:** Wechseln Sie zu einem kleineren Modell oder fügen Sie eine GPU/NPU hinzu – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          '**Modell ignoriert Geräte:** Bestätigen Sie, dass die Entitäten für Assist freigegeben sind und die Ollama-Entität der aktive Agent ist.',
          '**Falsche Aktionen:** Fügen Sie einen System-Prompt hinzu, der den Umfang begrenzt, oder reduzieren Sie die Zahl der freigegebenen Entitäten.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Welches Modell sollte ich für Home Assistant wählen?', a: 'Ein kleines, instruktionsfolgendes Modell mit Function-Calling-Unterstützung ist der beste Ausgangspunkt, weil Heimsteuerung schnelle, strukturierte Antworten braucht. Die richtige Größe hängt von Ihrer Hardware ab; siehe den Leitfaden zu den besten lokalen LLM-Modellen fürs Smart Home für aktuelle Optionen.' },
          { q: 'Brauche ich eine GPU, um Ollama mit Home Assistant zu betreiben?', a: 'Nein, aber sie hilft. Ein kleines Modell läuft auf einer modernen CPU oder integrierten GPU; eine dedizierte GPU oder NPU senkt die Latenz, sodass der Assistent flotter wirkt. Passen Sie die Modellgröße an Ihre Hardware an.' },
          { q: 'Kann das Modell jedes Gerät in Home Assistant steuern?', a: 'Nur Entitäten, die Sie ausdrücklich für Assist freigeben. Die Freigabe ist Opt-in, sodass das Modell nicht auf Geräte einwirken kann, die Sie nicht geteilt haben, was die Steuerung vorhersehbar und sicher hält.' },
          { q: 'Funktioniert die Ollama-Integration offline?', a: 'Ja. Ollama betreibt das Modell lokal und Home Assistant steuert Geräte über Ihr LAN, sodass der Assistent ohne Internet funktioniert. Nur der Fernzugriff von außerhalb des Hauses benötigt Konnektivität.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – die vollständige Architektur, in die das passt',
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – freihändige Sprache hinzufügen',
          '[Beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home) – das richtige Modell wählen',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: Ollama-Setup',
          '[Beste lokale Coding-Modelle 2026](/de/power-local-llm/best-local-coding-models-2026) – clusterübergreifend: Modell-Tiefe',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama mit Home Assistant verbinden: Lokaler KI-Assistent (2026)',
      description: 'Ollama mit Home Assistant verbinden 2026: Integration hinzufügen, Modell wählen, Konversations-Agent setzen. Geräte in natürlicher Sprache steuern.',
      url: 'https://www.promptquorum.com/de/smart-home/home-assistant-ollama-integration',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Lokaler KI-Assistent' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welches Modell sollte ich für Home Assistant wählen?', acceptedAnswer: { '@type': 'Answer', text: 'Ein kleines, instruktionsfolgendes Modell mit Function-Calling-Unterstützung, weil Heimsteuerung schnelle, strukturierte Antworten braucht. Die richtige Größe hängt von Ihrer Hardware ab.' } },
        { '@type': 'Question', name: 'Brauche ich eine GPU, um Ollama mit Home Assistant zu betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, aber sie hilft. Ein kleines Modell läuft auf einer modernen CPU oder integrierten GPU; eine dedizierte GPU oder NPU senkt die Latenz.' } },
        { '@type': 'Question', name: 'Kann das Modell jedes Gerät in Home Assistant steuern?', acceptedAnswer: { '@type': 'Answer', text: 'Nur Entitäten, die Sie ausdrücklich für Assist freigeben. Die Freigabe ist Opt-in, sodass das Modell nicht auf nicht geteilte Geräte einwirken kann.' } },
        { '@type': 'Question', name: 'Funktioniert die Ollama-Integration offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ollama betreibt das Modell lokal und Home Assistant steuert Geräte über Ihr LAN, sodass es ohne Internet funktioniert.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Conectar Ollama a Home Assistant: Asistente de IA Local (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: Configuración IA Local',
    intro:
      'Home Assistant tiene una integración de Ollama incorporada que convierte un modelo alojado localmente en tu agente de conversación, controlando dispositivos en lenguaje natural sin nube. Esta guía recorre los requisitos previos, añadir la integración, elegir un modelo, cablear el agente de conversación, controlar dispositivos y resolver problemas, manteniendo la instalación de Ollama y la elección de modelo enlazadas, no reexplicadas.',
    metaDescription:
      'Conecta Ollama a Home Assistant 2026: añade la integración, elige un modelo y controla dispositivos en lenguaje natural. Sin nube.',
    twitterDescription:
      'Cablea Ollama en Home Assistant para un asistente de IA totalmente local: añade la integración, elige un modelo, controla dispositivos por voz o texto. Cero nube.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que añaden un agente de conversación de IA local',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'integración ollama home assistant',
      'ollama home assistant',
      'home assistant llm local',
      'agente de conversación ollama home assistant',
      'asistente ia local home assistant',
    ],
    leadAnswerBlock:
      '**Añade la integración de Ollama de Home Assistant, apúntala a tu servidor Ollama, elige un modelo y fija ese modelo como el agente de conversación de Assist: ahora controlas dispositivos en lenguaje natural, de forma totalmente local.** Ollama ejecuta el modelo en tu propio hardware, así que ningún comando o estado del hogar sale de tu red.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo conecto Ollama a Home Assistant?',
        answer:
          'Ejecuta Ollama en una máquina alcanzable desde Home Assistant, descarga un modelo, luego en Home Assistant añade la integración de Ollama (Ajustes → Dispositivos y servicios), introduce la URL de Ollama (por defecto http://host:11434) y selecciona tu modelo. Por último, fija la entidad de conversación de Ollama como el agente en tu pipeline de Assist.',
        bullets: [
          'Ejecuta Ollama y descarga un modelo en un host alcanzable',
          'Añade la integración de Ollama en Home Assistant',
          'Introduce la URL de Ollama (puerto por defecto 11434) y elige un modelo',
          'Expón entidades a Assist para que el modelo pueda controlarlas',
          'Fija el agente de Ollama en tu pipeline de Assist',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué te da esto', anchor: 'what-this-gives' },
      { label: 'Requisitos previos', anchor: 'prerequisites' },
      { label: 'Añadir la integración', anchor: 'add-integration' },
      { label: 'Elegir un modelo', anchor: 'choose-model' },
      { label: 'Configurar el agente', anchor: 'configure-agent' },
      { label: 'Controlar dispositivos', anchor: 'control-devices' },
      { label: 'Resolución de problemas', anchor: 'troubleshooting' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Añade la integración de Ollama en Home Assistant, apúntala a tu servidor Ollama, elige un modelo y fíjalo como el agente de conversación de Assist.' },
      { type: 'plain-terms', content: 'Home Assistant puede usar un modelo de IA local como su cerebro de voz/chat. Ejecutas el modelo con Ollama en tu propio ordenador, le dices a Home Assistant dónde encontrarlo, eliges qué modelo usar y dejas que controle los dispositivos que expones. Todo corre en tu hardware, así que nada se envía a un servicio en la nube.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant incluye una integración oficial de Ollama — no hace falta un add-on a medida',
          'Ejecuta Ollama en el host de Home Assistant o en otra máquina de tu LAN',
          'Añadir integración → introducir URL de Ollama (por defecto http://host:11434) → seleccionar un modelo',
          'Expón solo las entidades que quieras que el modelo controle, luego fíjalo como el agente de Assist',
          'Usa un modelo pequeño con llamada a funciones para baja latencia; enlaza para profundidad de modelo/hardware',
          'Todo es local: ningún comando o estado del hogar sale de tu red',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'Qué te da conectar Ollama a Home Assistant',
        content:
          '**Le da a Home Assistant un agente de conversación local: hablas o escribes una solicitud y el modelo la mapea a acciones de dispositivo, sin un asistente en la nube en medio.** Esto reemplaza al agente de voz en la nube (Alexa, Google) para el control en lenguaje natural.',
        items: [
          '**Control en lenguaje natural:** "apaga todo abajo" se mapea a las entidades correctas en vez de a una frase fija.',
          '**Local y privado:** el modelo corre mediante Ollama en tu hardware — consulta [la guía del smart home con LLM local](/es/smart-home/local-llm-smart-home-complete-guide) para la arquitectura completa.',
          '**Listo para voz:** combínalo con un pipeline de voz local para un reemplazo privado de Alexa — consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Requisitos previos antes de empezar',
        content:
          '**Necesitas Home Assistant en marcha, Ollama en marcha en un host alcanzable y un modelo descargado.** Esta guía no reexplica la instalación de Ollama — enlaza para eso.',
        numberedItems: [
          'Home Assistant activo y alcanzable en tu LAN.',
          'Ollama instalado y en marcha en el mismo host u otra máquina — consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
          'Al menos un modelo descargado (un modelo de instrucciones pequeño es el punto de partida adecuado).',
          'Alcanzabilidad de red: confirma que Home Assistant puede llegar a la URL de Ollama (puerto por defecto 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: '¿Cómo añades la integración de Ollama?',
        content:
          '**En Home Assistant ve a Ajustes → Dispositivos y servicios → Añadir integración → Ollama, luego introduce la URL de Ollama.** La URL por defecto es http://<host>:11434.',
        columns: ['Paso', 'Acción', 'Resultado'],
        rows: [
          { 'Paso': '1', 'Acción': 'Ajustes → Dispositivos y servicios → Añadir integración', 'Resultado': 'Se abre el selector de integraciones' },
          { 'Paso': '2', 'Acción': 'Busca "Ollama" y selecciónalo', 'Resultado': 'Aparece el diálogo de conexión' },
          { 'Paso': '3', 'Acción': 'Introduce la URL de Ollama (http://host:11434)', 'Resultado': 'Home Assistant se conecta a Ollama' },
          { 'Paso': '4', 'Acción': 'Selecciona un modelo de la lista', 'Resultado': 'Se crea una entidad de conversación' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '¿Qué modelo deberías elegir?',
        content:
          '**Elige un modelo pequeño, rápido y que siga instrucciones, con llamada a funciones para el control del hogar, no el modelo más grande que puedas ejecutar.** Aquí la latencia importa más que la capacidad bruta.',
        items: [
          'Usa un modelo pequeño si quieres respuestas ágiles en hardware modesto.',
          'Prioriza el soporte de llamada a funciones/herramientas para que el modelo emita acciones de dispositivo de forma fiable.',
          'Para una lista corta específica de smart home, consulta [mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home).',
          'Para una mecánica de modelos más profunda, enlaza a [mejores LLM locales para programar](/es/power-local-llm/best-local-coding-models-2026) y al clúster local-llms — esta guía no reordena modelos.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Configurar el agente de conversación',
        content:
          '**Fija la entidad de conversación de Ollama como el agente en tu pipeline de Assist y expón solo las entidades que quieras que controle.** La exposición es lo que deja al modelo actuar sobre los dispositivos.',
        numberedItems: [
          'Abre Ajustes → Asistentes de voz y edita (o crea) un pipeline de Assist.',
          'Fija el agente de conversación a la entidad de Ollama creada por la integración.',
          'En la exposición de Assist, expón las entidades concretas que el modelo puede controlar.',
          'Opcionalmente añade un prompt personalizado para limitar el tono y el alcance.',
          'Guarda, luego prueba desde el cuadro de chat de Assist antes de añadir voz.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Controlar dispositivos por voz o texto',
        content:
          '**Una vez fijado el agente y expuestas las entidades, escribe o di una solicitud en Assist y el modelo realiza la acción.** Mantén las automatizaciones de seguridad deterministas como reglas simples, no guiadas por el modelo.',
        items: [
          'Prueba primero con comandos simples ("enciende la luz de la oficina"), luego con frases naturales.',
          'El modelo solo controla las entidades que expusiste — los dispositivos no expuestos quedan intactos.',
          'Añade un front-end de voz local para uso manos libres — consulta [asistente de voz local](/es/smart-home/local-voice-assistant-smart-home).',
          'Para automatizaciones conscientes del contexto más allá de comandos directos, consulta [automatizaciones con IA con un LLM local](/es/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Resolver problemas comunes',
        content:
          '**La mayoría de los problemas son de conectividad, elección de modelo o exposición.** Resuélvelos en orden.',
        items: [
          '**No conecta:** verifica la URL de Ollama y que el puerto 11434 sea alcanzable desde Home Assistant; vincula Ollama a 0.0.0.0 si está en otro host.',
          '**Respuestas lentas:** cambia a un modelo más pequeño o añade una GPU/NPU — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
          '**El modelo ignora los dispositivos:** confirma que las entidades están expuestas a Assist y que la entidad de Ollama es el agente activo.',
          '**Acciones erróneas:** añade un prompt de sistema que limite el alcance, o reduce el número de entidades expuestas.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué modelo debería elegir para Home Assistant?', a: 'Un modelo pequeño que siga instrucciones con soporte de llamada a funciones es el mejor punto de partida porque el control del hogar necesita respuestas rápidas y estructuradas. El tamaño adecuado depende de tu hardware; consulta la guía de mejores modelos LLM locales para smart home para opciones actuales.' },
          { q: '¿Necesito una GPU para ejecutar Ollama con Home Assistant?', a: 'No, pero ayuda. Un modelo pequeño corre en una CPU moderna o GPU integrada; una GPU discreta o NPU reduce la latencia para que el asistente se sienta más ágil. Ajusta el tamaño del modelo a tu hardware.' },
          { q: '¿Puede el modelo controlar cualquier dispositivo en Home Assistant?', a: 'Solo las entidades que expones explícitamente a Assist. La exposición es opt-in, así que el modelo no puede actuar sobre dispositivos que no hayas compartido, lo que mantiene el control predecible y seguro.' },
          { q: '¿Funciona la integración de Ollama sin conexión?', a: 'Sí. Ollama ejecuta el modelo en local y Home Assistant controla los dispositivos por tu LAN, así que el asistente funciona sin internet. Solo el acceso remoto desde fuera del hogar necesita conectividad.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — la arquitectura completa en la que encaja',
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — añadir voz manos libres',
          '[Mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home) — elige el modelo adecuado',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: configuración de Ollama',
          '[Mejores modelos locales para programar 2026](/es/power-local-llm/best-local-coding-models-2026) — entre clústeres: profundidad de modelos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Conectar Ollama a Home Assistant: Asistente de IA Local (2026)',
      description: 'Conecta Ollama a Home Assistant 2026: añade la integración, elige un modelo y controla dispositivos en lenguaje natural. Sin nube.',
      url: 'https://www.promptquorum.com/es/smart-home/home-assistant-ollama-integration',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Asistente de IA local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué modelo debería elegir para Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo pequeño que siga instrucciones con soporte de llamada a funciones es el mejor punto de partida porque el control del hogar necesita respuestas rápidas y estructuradas. El tamaño adecuado depende de tu hardware.' } },
        { '@type': 'Question', name: '¿Necesito una GPU para ejecutar Ollama con Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No, pero ayuda. Un modelo pequeño corre en una CPU moderna o GPU integrada; una GPU discreta o NPU reduce la latencia.' } },
        { '@type': 'Question', name: '¿Puede el modelo controlar cualquier dispositivo en Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Solo las entidades que expones explícitamente a Assist. La exposición es opt-in, así que el modelo no puede actuar sobre dispositivos que no hayas compartido.' } },
        { '@type': 'Question', name: '¿Funciona la integración de Ollama sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Ollama ejecuta el modelo en local y Home Assistant controla los dispositivos por tu LAN, así que funciona sin internet.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Ollama를 Home Assistant에 연결하기: 로컬 AI 어시스턴트 (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: 로컬 AI 설정',
    intro:
      'Home Assistant에는 로컬에서 호스팅된 모델을 대화 에이전트로 전환하여 클라우드 없이 자연어로 기기를 제어하는 Ollama 통합이 내장되어 있습니다. 이 가이드는 전제 조건, 통합 추가, 모델 선택, 대화 에이전트 연결, 기기 제어, 문제 해결을 안내합니다. Ollama 설정과 모델 선택은 외부 링크로 연결됩니다.',
    metaDescription:
      'Ollama를 Home Assistant에 단계별로 연결하기: 통합 추가, 모델 선택, 대화 에이전트 설정, 자연어로 기기 제어. 클라우드 없음.',
    twitterDescription:
      'Ollama를 Home Assistant에 연결하여 완전한 로컬 AI 어시스턴트 구현: 통합 추가, 모델 선택, 음성 또는 텍스트로 기기 제어. 클라우드 제로.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: '로컬 AI 대화 에이전트를 추가하는 Home Assistant 사용자',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'Home Assistant Ollama 통합',
      'Ollama Home Assistant',
      'Home Assistant 로컬 LLM',
      'Home Assistant 대화 에이전트 Ollama',
      '로컬 AI 어시스턴트 Home Assistant',
    ],
    leadAnswerBlock:
      '**Home Assistant의 Ollama 통합을 추가하고 Ollama 서버를 지정하여 모델을 선택한 다음 해당 모델을 Assist 대화 에이전트로 설정하십시오 — 이제 완전히 로컬에서 자연어로 기기를 제어합니다.** Ollama는 자체 하드웨어에서 모델을 실행하므로 어떤 명령이나 홈 상태도 네트워크 밖으로 나가지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Ollama를 Home Assistant에 어떻게 연결합니까?',
        answer:
          'Home Assistant에서 접근 가능한 기기에서 Ollama를 실행하고 모델을 가져온 후, Home Assistant에서 Ollama 통합(설정 → 기기 및 서비스)을 추가하고 Ollama URL(기본값 http://host:11434)을 입력하여 모델을 선택합니다. 마지막으로 Assist 파이프라인에서 Ollama 대화 엔티티를 에이전트로 설정합니다.',
        bullets: [
          '접근 가능한 호스트에서 Ollama를 실행하고 모델을 가져오십시오',
          'Home Assistant에서 Ollama 통합을 추가하십시오',
          'Ollama URL(기본 포트 11434)을 입력하고 모델을 선택하십시오',
          '모델이 기기를 제어할 수 있도록 Assist에 엔티티를 노출하십시오',
          'Assist 파이프라인에서 Ollama 에이전트를 설정하십시오',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '이것이 주는 것', anchor: 'what-this-gives' },
      { label: '전제 조건', anchor: 'prerequisites' },
      { label: '통합 추가', anchor: 'add-integration' },
      { label: '모델 선택', anchor: 'choose-model' },
      { label: '에이전트 구성', anchor: 'configure-agent' },
      { label: '기기 제어', anchor: 'control-devices' },
      { label: '문제 해결', anchor: 'troubleshooting' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant에서 Ollama 통합을 추가하고 Ollama 서버를 지정하여 모델을 선택한 후 Assist 대화 에이전트로 설정합니다.' },
      { type: 'plain-terms', content: 'Home Assistant는 로컬 AI 모델을 음성/채팅 두뇌로 사용할 수 있습니다. 자신의 컴퓨터에서 Ollama로 모델을 실행하고, Home Assistant에 그 위치를 알려주며, 어떤 모델을 사용할지 선택하고, 노출된 기기를 제어하도록 합니다. 모든 것이 하드웨어에서 실행되므로 클라우드 서비스로 아무것도 전송되지 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant에는 공식 Ollama 통합이 내장되어 있습니다 — 사용자 정의 애드온이 필요 없습니다',
          'Home Assistant 호스트 또는 LAN의 다른 기기에서 Ollama를 실행하십시오',
          '통합 추가 → Ollama URL 입력(기본값 http://host:11434) → 모델 선택',
          '모델이 제어할 엔티티만 노출한 후 Assist 에이전트로 설정하십시오',
          '낮은 지연 시간을 위해 소형 함수 호출 모델을 사용하십시오. 모델/하드웨어 심층 정보는 링크를 참조하십시오',
          '모든 것이 로컬입니다: 어떤 명령이나 홈 상태도 네트워크 밖으로 나가지 않습니다',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'Ollama를 Home Assistant에 연결하면 얻는 것',
        content:
          '**Home Assistant에 로컬 대화 에이전트가 생깁니다: 요청을 말하거나 입력하면 모델이 클라우드 어시스턴트 없이 기기 동작에 매핑합니다.** 이것은 자연어 제어를 위해 클라우드 음성 에이전트(Alexa, Google)를 대체합니다.',
        items: [
          '**자연어 제어:** "아래층 모든 것 꺼줘"가 고정된 구문 대신 올바른 엔티티에 매핑됩니다.',
          '**로컬 및 사적:** 모델이 하드웨어의 Ollama를 통해 실행됩니다 — 전체 아키텍처는 [로컬 LLM 스마트 홈 가이드](/ko/smart-home/local-llm-smart-home-complete-guide)를 참조하십시오.',
          '**음성 준비:** 사적 Alexa 대체품을 위해 로컬 음성 파이프라인과 연결하십시오 — [완전한 로컬 음성 어시스턴트 구축](/ko/smart-home/local-voice-assistant-smart-home)을 참조하십시오.',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: '시작 전 전제 조건',
        content:
          '**Home Assistant 실행, 접근 가능한 호스트에서 Ollama 실행, 하나의 모델 가져오기가 필요합니다.** 이 가이드는 Ollama 설치를 다시 설명하지 않습니다 — 그것은 외부 링크를 참조하십시오.',
        numberedItems: [
          'LAN에서 실행 중이고 접근 가능한 Home Assistant.',
          '동일 호스트 또는 다른 기기에 설치된 실행 중인 Ollama — [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)을 참조하십시오.',
          '하나 이상의 모델 가져오기(소형 명령어 모델이 올바른 시작점입니다).',
          '네트워크 접근성: Home Assistant가 Ollama URL(기본 포트 11434)에 접근할 수 있는지 확인하십시오.',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'Ollama 통합을 어떻게 추가합니까?',
        content:
          '**Home Assistant에서 설정 → 기기 및 서비스 → 통합 추가 → Ollama로 이동한 후 Ollama URL을 입력하십시오.** 기본 URL은 http://<host>:11434입니다.',
        columns: ['단계', '작업', '결과'],
        rows: [
          { '단계': '1', '작업': '설정 → 기기 및 서비스 → 통합 추가', '결과': '통합 선택기가 열립니다' },
          { '단계': '2', '작업': '"Ollama"를 검색하여 선택합니다', '결과': '연결 대화 상자가 나타납니다' },
          { '단계': '3', '작업': 'Ollama URL 입력(http://host:11434)', '결과': 'Home Assistant가 Ollama에 연결됩니다' },
          { '단계': '4', '작업': '목록에서 모델을 선택합니다', '결과': '대화 엔티티가 생성됩니다' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '어떤 모델을 선택해야 합니까?',
        content:
          '**홈 제어를 위해 함수 호출이 가능한 소형의 빠른 명령어 추종 모델을 선택하십시오 — 실행 가능한 가장 큰 모델이 아닙니다.** 여기서는 원시 능력보다 지연 시간이 더 중요합니다.',
        items: [
          '보통 하드웨어에서 빠른 응답을 원한다면 소형 모델을 사용하십시오.',
          '모델이 기기 동작을 안정적으로 내보낼 수 있도록 함수 호출/도구 지원을 우선시하십시오.',
          '스마트 홈 특정 후보 목록은 [스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home)을 참조하십시오.',
          '더 깊은 모델 메커니즘은 [코딩을 위한 최고의 로컬 LLM](/ko/power-local-llm/best-local-coding-models-2026) 및 local-llms 클러스터를 링크하십시오 — 이 가이드는 모델 순위를 다시 매기지 않습니다.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: '대화 에이전트 구성',
        content:
          '**Assist 파이프라인에서 Ollama 대화 엔티티를 에이전트로 설정하고 제어하길 원하는 엔티티만 노출하십시오.** 노출이 모델이 기기에 작용할 수 있게 하는 것입니다.',
        numberedItems: [
          '설정 → 음성 어시스턴트를 열고 Assist 파이프라인을 편집(또는 생성)하십시오.',
          '대화 에이전트를 통합이 만든 Ollama 엔티티로 설정하십시오.',
          'Assist 노출 아래에서 모델이 제어할 수 있는 특정 엔티티를 노출하십시오.',
          '선택적으로 톤과 범위를 제한하는 사용자 정의 프롬프트를 추가하십시오.',
          '저장한 후 음성을 추가하기 전에 Assist 채팅 상자에서 테스트하십시오.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: '음성 또는 텍스트로 기기 제어',
        content:
          '**에이전트가 설정되고 엔티티가 노출되면 Assist에서 요청을 입력하거나 말하면 모델이 동작을 수행합니다.** 결정론적 안전 자동화는 모델 주도가 아닌 일반 규칙으로 유지하십시오.',
        items: [
          '먼저 간단한 명령("사무실 조명 켜줘")으로 테스트한 후 자연스러운 표현으로 테스트하십시오.',
          '모델은 노출한 엔티티만 제어합니다 — 노출되지 않은 기기는 그대로 유지됩니다.',
          '핸즈프리 사용을 위해 로컬 음성 프론트엔드를 추가하십시오 — [로컬 음성 어시스턴트](/ko/smart-home/local-voice-assistant-smart-home)를 참조하십시오.',
          '직접 명령을 넘어서는 컨텍스트 인식 자동화는 [로컬 LLM으로 AI 자동화](/ko/smart-home/ai-automations-local-llm)를 참조하십시오.',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '일반적인 문제 해결',
        content:
          '**대부분의 문제는 연결성, 모델 선택 또는 노출과 관련됩니다.** 순서대로 처리하십시오.',
        items: [
          '**연결 불가:** Ollama URL과 Home Assistant에서 포트 11434에 접근할 수 있는지 확인하십시오. 다른 호스트에 있다면 Ollama를 0.0.0.0에 바인딩하십시오.',
          '**느린 응답:** 더 작은 모델로 전환하거나 GPU/NPU를 추가하십시오 — [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
          '**모델이 기기를 무시함:** 엔티티가 Assist에 노출되어 있고 Ollama 엔티티가 활성 에이전트인지 확인하십시오.',
          '**잘못된 동작:** 범위를 제한하는 시스템 프롬프트를 추가하거나 노출된 엔티티 수를 줄이십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Home Assistant에 어떤 모델을 선택해야 합니까?', a: '홈 제어는 빠르고 구조화된 응답이 필요하기 때문에 함수 호출 지원이 있는 소형 명령어 추종 모델이 최고의 시작점입니다. 적절한 크기는 하드웨어에 따라 다릅니다. 현재 옵션은 스마트 홈을 위한 최고의 로컬 LLM 모델 가이드를 참조하십시오.' },
          { q: 'Home Assistant에서 Ollama를 실행하려면 GPU가 필요합니까?', a: '아니오, 하지만 도움이 됩니다. 소형 모델은 현대적인 CPU나 통합 GPU에서 실행됩니다. 별도의 GPU나 NPU는 지연 시간을 줄여 어시스턴트가 더 빠르게 느껴지게 합니다. 하드웨어에 맞게 모델 크기를 맞추십시오.' },
          { q: '모델이 Home Assistant의 모든 기기를 제어할 수 있습니까?', a: 'Assist에 명시적으로 노출한 엔티티만 제어할 수 있습니다. 노출은 옵트인 방식이므로 모델은 공유하지 않은 기기에 작용할 수 없습니다. 이로 인해 제어가 예측 가능하고 안전합니다.' },
          { q: 'Ollama 통합은 오프라인에서 작동합니까?', a: '네. Ollama는 로컬에서 모델을 실행하고 Home Assistant는 LAN을 통해 기기를 제어하므로 인터넷 없이도 어시스턴트가 작동합니다. 집 외부에서의 원격 접근만 연결이 필요합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 LLM으로 스마트 홈 실행](/ko/smart-home/local-llm-smart-home-complete-guide) — 이것이 맞는 전체 아키텍처',
          '[완전한 로컬 음성 어시스턴트 구축](/ko/smart-home/local-voice-assistant-smart-home) — 핸즈프리 음성 추가',
          '[스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home) — 올바른 모델 선택',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 크로스 클러스터: Ollama 설정',
          '[2026년 최고의 로컬 코딩 모델](/ko/power-local-llm/best-local-coding-models-2026) — 크로스 클러스터: 모델 심층 정보',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama를 Home Assistant에 연결하기: 로컬 AI 어시스턴트 (2026)',
      description: 'Ollama를 Home Assistant에 단계별로 연결하기: 통합 추가, 모델 선택, 대화 에이전트 설정, 자연어로 기기 제어. 클라우드 없음.',
      url: 'https://www.promptquorum.com/ko/smart-home/home-assistant-ollama-integration',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: '로컬 AI 어시스턴트' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant에 어떤 모델을 선택해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '홈 제어는 빠르고 구조화된 응답이 필요하기 때문에 함수 호출 지원이 있는 소형 명령어 추종 모델이 최고의 시작점입니다. 적절한 크기는 하드웨어에 따라 다릅니다.' } },
        { '@type': 'Question', name: 'Home Assistant에서 Ollama를 실행하려면 GPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아니오, 하지만 도움이 됩니다. 소형 모델은 현대적인 CPU나 통합 GPU에서 실행됩니다. 별도의 GPU나 NPU는 지연 시간을 줄입니다.' } },
        { '@type': 'Question', name: '모델이 Home Assistant의 모든 기기를 제어할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Assist에 명시적으로 노출한 엔티티만 제어할 수 있습니다. 노출은 옵트인이므로 공유하지 않은 기기에는 작용할 수 없습니다.' } },
        { '@type': 'Question', name: 'Ollama 통합은 오프라인에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '네. Ollama는 로컬에서 모델을 실행하고 Home Assistant는 LAN을 통해 기기를 제어하므로 인터넷 없이도 작동합니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Connecter Ollama à Home Assistant : Assistant IA Local (2026)',
    seoTitle: 'Ollama + Home Assistant 2026 : Configuration IA Locale',
    intro:
      'Home Assistant dispose d\'une intégration Ollama native qui transforme un modèle hébergé localement en votre agent de conversation, contrôlant les appareils en langage naturel sans cloud. Ce guide parcourt les prérequis, l\'ajout de l\'intégration, le choix d\'un modèle, le câblage de l\'agent de conversation, le contrôle des appareils et le dépannage — l\'installation d\'Ollama et le choix du modèle restant liés, non réexpliqués.',
    metaDescription:
      'Ollama + Home Assistant 2026 : ajoutez l\'intégration, choisissez un modèle, configurez l\'agent de conversation. Contrôle en langage naturel.',
    twitterDescription:
      'Câblez Ollama dans Home Assistant pour un assistant IA entièrement local : ajoutez l\'intégration, choisissez un modèle, contrôlez les appareils par voix ou texte. Zéro cloud.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant ajoutant un agent de conversation IA local',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'intégration ollama home assistant',
      'ollama home assistant',
      'home assistant llm local',
      'agent de conversation ollama home assistant',
      'assistant ia local home assistant',
    ],
    leadAnswerBlock:
      '**Ajoutez l\'intégration Ollama de Home Assistant, pointez-la vers votre serveur Ollama, choisissez un modèle, puis définissez ce modèle comme agent de conversation Assist — vous contrôlez désormais les appareils en langage clair, entièrement en local.** Ollama exécute le modèle sur votre propre matériel, donc aucune commande ni état du foyer ne quitte votre réseau.',
    quickAnswerTop: {
      fr: {
        question: 'Comment connecter Ollama à Home Assistant ?',
        answer:
          'Exécutez Ollama sur une machine joignable depuis Home Assistant, téléchargez un modèle, puis dans Home Assistant ajoutez l\'intégration Ollama (Paramètres → Appareils et services), saisissez l\'URL Ollama (par défaut http://host:11434) et sélectionnez votre modèle. Enfin, définissez l\'entité de conversation Ollama comme agent dans votre pipeline Assist.',
        bullets: [
          'Exécutez Ollama et téléchargez un modèle sur un hôte joignable',
          'Ajoutez l\'intégration Ollama dans Home Assistant',
          'Saisissez l\'URL Ollama (port par défaut 11434) et choisissez un modèle',
          'Exposez des entités à Assist pour que le modèle puisse les contrôler',
          'Définissez l\'agent Ollama dans votre pipeline Assist',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce que cela vous apporte', anchor: 'what-this-gives' },
      { label: 'Prérequis', anchor: 'prerequisites' },
      { label: 'Ajouter l\'intégration', anchor: 'add-integration' },
      { label: 'Choisir un modèle', anchor: 'choose-model' },
      { label: 'Configurer l\'agent', anchor: 'configure-agent' },
      { label: 'Contrôler les appareils', anchor: 'control-devices' },
      { label: 'Dépannage', anchor: 'troubleshooting' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ajoutez l\'intégration Ollama dans Home Assistant, pointez-la vers votre serveur Ollama, choisissez un modèle et définissez-le comme agent de conversation Assist.' },
      { type: 'plain-terms', content: 'Home Assistant peut utiliser un modèle d\'IA local comme cerveau voix/chat. Vous exécutez le modèle avec Ollama sur votre propre ordinateur, indiquez à Home Assistant où le trouver, choisissez quel modèle utiliser et le laissez contrôler les appareils que vous exposez. Tout tourne sur votre matériel, donc rien n\'est envoyé à un service cloud.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant fournit une intégration Ollama officielle — aucun add-on personnalisé nécessaire',
          'Exécutez Ollama sur l\'hôte Home Assistant ou une autre machine de votre LAN',
          'Ajouter l\'intégration → saisir l\'URL Ollama (par défaut http://host:11434) → sélectionner un modèle',
          'N\'exposez que les entités que le modèle doit contrôler, puis définissez-le comme agent Assist',
          'Utilisez un petit modèle à appel de fonctions pour une faible latence ; lien pour la profondeur modèle/matériel',
          'Tout est local : aucune commande ni état du foyer ne quitte votre réseau',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'Ce que connecter Ollama à Home Assistant vous apporte',
        content:
          '**Cela donne à Home Assistant un agent de conversation local : vous parlez ou tapez une requête et le modèle l\'associe à des actions d\'appareil, sans assistant cloud dans la boucle.** Cela remplace l\'agent vocal cloud (Alexa, Google) pour le contrôle en langage naturel.',
        items: [
          '**Contrôle en langage naturel :** « éteins tout en bas » s\'associe aux bonnes entités au lieu d\'une phrase fixe.',
          '**Local et privé :** le modèle tourne via Ollama sur votre matériel — voir [le guide de la maison connectée avec LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) pour l\'architecture complète.',
          '**Prêt pour la voix :** associez-le à un pipeline vocal local pour un remplacement privé d\'Alexa — voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Prérequis avant de commencer',
        content:
          '**Il vous faut Home Assistant en marche, Ollama en marche sur un hôte joignable et un modèle téléchargé.** Ce guide ne réexplique pas l\'installation d\'Ollama — lien pour cela.',
        numberedItems: [
          'Home Assistant actif et joignable sur votre LAN.',
          'Ollama installé et en marche sur le même hôte ou une autre machine — voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
          'Au moins un modèle téléchargé (un petit modèle d\'instructions est le bon point de départ).',
          'Joignabilité réseau : confirmez que Home Assistant peut atteindre l\'URL Ollama (port par défaut 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'Comment ajouter l\'intégration Ollama ?',
        content:
          '**Dans Home Assistant, allez dans Paramètres → Appareils et services → Ajouter une intégration → Ollama, puis saisissez l\'URL Ollama.** L\'URL par défaut est http://<host>:11434.',
        columns: ['Étape', 'Action', 'Résultat'],
        rows: [
          { 'Étape': '1', 'Action': 'Paramètres → Appareils et services → Ajouter une intégration', 'Résultat': 'Le sélecteur d\'intégrations s\'ouvre' },
          { 'Étape': '2', 'Action': 'Cherchez « Ollama » et sélectionnez-le', 'Résultat': 'La boîte de dialogue de connexion apparaît' },
          { 'Étape': '3', 'Action': 'Saisissez l\'URL Ollama (http://host:11434)', 'Résultat': 'Home Assistant se connecte à Ollama' },
          { 'Étape': '4', 'Action': 'Sélectionnez un modèle dans la liste', 'Résultat': 'Une entité de conversation est créée' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Quel modèle choisir ?',
        content:
          '**Choisissez un petit modèle rapide suivant les instructions, avec appel de fonctions pour le contrôle de la maison — pas le plus gros modèle que vous puissiez exécuter.** Ici la latence compte plus que la capacité brute.',
        items: [
          'Utilisez un petit modèle si vous voulez des réponses vives sur du matériel modeste.',
          'Priorisez la prise en charge de l\'appel de fonctions/outils pour que le modèle émette des actions d\'appareil de façon fiable.',
          'Pour une liste restreinte spécifique à la maison connectée, voir [meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home).',
          'Pour une mécanique de modèles plus approfondie, lien vers [meilleurs LLM locaux pour coder](/fr/power-local-llm/best-local-coding-models-2026) et le cluster local-llms — ce guide ne reclasse pas les modèles.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Configurer l\'agent de conversation',
        content:
          '**Définissez l\'entité de conversation Ollama comme agent dans votre pipeline Assist, et n\'exposez que les entités que vous voulez qu\'il contrôle.** L\'exposition est ce qui permet au modèle d\'agir sur les appareils.',
        numberedItems: [
          'Ouvrez Paramètres → Assistants vocaux et modifiez (ou créez) un pipeline Assist.',
          'Définissez l\'agent de conversation sur l\'entité Ollama créée par l\'intégration.',
          'Sous l\'exposition Assist, exposez les entités spécifiques que le modèle peut contrôler.',
          'Ajoutez éventuellement un prompt personnalisé pour limiter le ton et le périmètre.',
          'Enregistrez, puis testez depuis la zone de chat Assist avant d\'ajouter la voix.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Contrôler les appareils par voix ou texte',
        content:
          '**Une fois l\'agent défini et les entités exposées, tapez ou dites une requête dans Assist et le modèle exécute l\'action.** Gardez les automatisations de sécurité déterministes comme règles simples, non pilotées par le modèle.',
        items: [
          'Testez d\'abord avec des commandes simples (« allume la lumière du bureau »), puis avec une formulation naturelle.',
          'Le modèle ne contrôle que les entités que vous avez exposées — les appareils non exposés restent intacts.',
          'Ajoutez une interface vocale locale pour un usage mains libres — voir [assistant vocal local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Pour des automatisations conscientes du contexte au-delà des commandes directes, voir [automatisations IA avec un LLM local](/fr/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Dépanner les problèmes courants',
        content:
          '**La plupart des problèmes relèvent de la connectivité, du choix de modèle ou de l\'exposition.** Traitez-les dans l\'ordre.',
        items: [
          '**Connexion impossible :** vérifiez l\'URL Ollama et que le port 11434 est joignable depuis Home Assistant ; liez Ollama à 0.0.0.0 s\'il est sur un autre hôte.',
          '**Réponses lentes :** passez à un modèle plus petit ou ajoutez un GPU/NPU — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          '**Le modèle ignore les appareils :** confirmez que les entités sont exposées à Assist et que l\'entité Ollama est l\'agent actif.',
          '**Mauvaises actions :** ajoutez un prompt système limitant le périmètre, ou réduisez le nombre d\'entités exposées.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quel modèle choisir pour Home Assistant ?', a: 'Un petit modèle suivant les instructions avec prise en charge de l\'appel de fonctions est le meilleur point de départ, car le contrôle de la maison nécessite des réponses rapides et structurées. La bonne taille dépend de votre matériel ; voir le guide des meilleurs modèles LLM locaux pour la maison connectée pour les options actuelles.' },
          { q: 'Ai-je besoin d\'un GPU pour exécuter Ollama avec Home Assistant ?', a: 'Non, mais cela aide. Un petit modèle tourne sur un CPU moderne ou un GPU intégré ; un GPU discret ou un NPU réduit la latence, rendant l\'assistant plus vif. Adaptez la taille du modèle à votre matériel.' },
          { q: 'Le modèle peut-il contrôler n\'importe quel appareil dans Home Assistant ?', a: 'Seulement les entités que vous exposez explicitement à Assist. L\'exposition est sur option, donc le modèle ne peut pas agir sur les appareils que vous n\'avez pas partagés, ce qui garde le contrôle prévisible et sûr.' },
          { q: 'L\'intégration Ollama fonctionne-t-elle hors ligne ?', a: 'Oui. Ollama exécute le modèle en local et Home Assistant contrôle les appareils via votre LAN, donc l\'assistant fonctionne sans internet. Seul l\'accès à distance depuis l\'extérieur du foyer nécessite une connectivité.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — l\'architecture complète dans laquelle cela s\'insère',
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — ajouter la voix mains libres',
          '[Meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home) — choisir le bon modèle',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : configuration d\'Ollama',
          '[Meilleurs modèles locaux pour coder 2026](/fr/power-local-llm/best-local-coding-models-2026) — inter-clusters : profondeur des modèles',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Connecter Ollama à Home Assistant : Assistant IA Local (2026)',
      description: 'Ollama + Home Assistant 2026 : ajoutez l\'intégration, choisissez un modèle, configurez l\'agent de conversation. Contrôle en langage naturel.',
      url: 'https://www.promptquorum.com/fr/smart-home/home-assistant-ollama-integration',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Assistant IA local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel modèle choisir pour Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Un petit modèle suivant les instructions avec prise en charge de l\'appel de fonctions est le meilleur point de départ, car le contrôle de la maison nécessite des réponses rapides et structurées. La bonne taille dépend de votre matériel.' } },
        { '@type': 'Question', name: 'Ai-je besoin d\'un GPU pour exécuter Ollama avec Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, mais cela aide. Un petit modèle tourne sur un CPU moderne ou un GPU intégré ; un GPU discret ou un NPU réduit la latence.' } },
        { '@type': 'Question', name: 'Le modèle peut-il contrôler n\'importe quel appareil dans Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Seulement les entités que vous exposez explicitement à Assist. L\'exposition est sur option, donc le modèle ne peut pas agir sur les appareils non partagés.' } },
        { '@type': 'Question', name: 'L\'intégration Ollama fonctionne-t-elle hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Ollama exécute le modèle en local et Home Assistant contrôle les appareils via votre LAN, donc cela fonctionne sans internet.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Ollama を Home Assistant に接続する：ローカルAIアシスタント（2026）',
    seoTitle: 'Ollama + Home Assistant 2026：ローカルAI設定',
    intro:
      'Home Assistant には組み込みの Ollama 統合があり、ローカルでホストするモデルを会話エージェントにして、機器を自然言語でクラウドなしに制御します。本ガイドは、前提条件、統合の追加、モデルの選択、会話エージェントの配線、機器の制御、トラブルシューティングを順に解説します——Ollama のインストールとモデル選択は外部リンクにし、再説明しません。',
    metaDescription:
      'Ollama を Home Assistant に順を追って接続（2026）：統合を追加し、モデルを選び、会話エージェントを設定して機器を自然言語で制御。日本語で家電を完全ローカルに操作できるプライベートなAI音声制御。クラウドなし。',
    twitterDescription:
      'Ollama を Home Assistant に組み込み、完全ローカルのAIアシスタントに：統合を追加し、モデルを選び、機器を音声またはテキストで制御。クラウドはゼロ。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'ローカルAIの会話エージェントを追加する Home Assistant ユーザー',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'home assistant ollama 統合',
      'ollama home assistant',
      'home assistant ローカルllm',
      'home assistant 会話エージェント ollama',
      'ローカルAIアシスタント home assistant',
    ],
    leadAnswerBlock:
      '**Home Assistant の Ollama 統合を追加し、Ollama サーバーを指定し、モデルを選び、そのモデルを Assist の会話エージェントに設定します——これで機器を自然言語で完全ローカルに制御できます。** Ollama はモデルを自分のハードウェアで動かすため、命令も家の状態もネットワークを出ません。',
    quickAnswerTop: {
      ja: {
        question: 'Ollama を Home Assistant にどう接続しますか？',
        answer:
          'Home Assistant から到達できるマシンで Ollama を動かし、モデルをプルし、Home Assistant で Ollama 統合を追加し（設定 → デバイスとサービス）、Ollama の URL（既定 http://host:11434）を入力してモデルを選びます。最後に、Ollama の会話エンティティを Assist パイプラインのエージェントに設定します。',
        bullets: [
          '到達可能なホストで Ollama を動かしモデルをプルする',
          'Home Assistant で Ollama 統合を追加する',
          'Ollama の URL（既定ポート 11434）を入力しモデルを選ぶ',
          'モデルが制御できるよう、エンティティを Assist に公開する',
          'Assist パイプラインで Ollama エージェントを設定する',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'これで得られるもの', anchor: 'what-this-gives' },
      { label: '前提条件', anchor: 'prerequisites' },
      { label: '統合を追加', anchor: 'add-integration' },
      { label: 'モデルを選ぶ', anchor: 'choose-model' },
      { label: 'エージェントを設定', anchor: 'configure-agent' },
      { label: '機器を制御', anchor: 'control-devices' },
      { label: 'トラブルシューティング', anchor: 'troubleshooting' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant で Ollama 統合を追加し、Ollama サーバーを指定し、モデルを選び、Assist の会話エージェントに設定します。' },
      { type: 'plain-terms', content: 'Home Assistant はローカルAIモデルを音声／チャットの頭脳として使えます。Ollama でモデルを自分のコンピューターで動かし、Home Assistant に在りかを伝え、どのモデルを使うか選び、公開した機器を制御させます。すべて自分のハードウェアで動くため、クラウドサービスへ何も送られません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant は公式の Ollama 統合を備える——独自アドオンは不要',
          'Ollama を Home Assistant のホストか、LAN 上の別マシンで動かす',
          '統合を追加 → Ollama の URL を入力（既定 http://host:11434）→ モデルを選ぶ',
          'モデルに制御させたいエンティティだけ公開し、Assist エージェントに設定する',
          '低レイテンシのため小型の関数呼び出しモデルを使う；モデル／ハードウェアの詳細は外部リンク',
          'すべてローカル：命令も家の状態もネットワークを出ない',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'Ollama を Home Assistant に接続して得られるもの',
        content:
          '**Home Assistant にローカルの会話エージェントを与えます：要求を話すか入力すると、モデルがそれを機器の動作に対応づけ、クラウドアシスタントは介在しません。** これは自然言語制御のためにクラウド音声エージェント（Alexa、Google）を置き換えます。',
        items: [
          '**自然言語制御：**「下の階を全部消して」は固定フレーズではなく適切なエンティティに対応づきます。',
          '**ローカルでプライベート：** モデルは Ollama を介して自分のハードウェアで動きます——全体構成は[ローカルLLMスマートホームガイド](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
          '**音声対応：** ローカル音声パイプラインと組み合わせ、プライベートな Alexa 代替に——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: '始める前の前提条件',
        content:
          '**Home Assistant が稼働し、到達可能なホストで Ollama が稼働し、モデルが一つプルされている必要があります。** 本ガイドは Ollama のインストールを再説明しません——それは外部リンクへ。',
        numberedItems: [
          'Home Assistant が稼働し、LAN で到達可能。',
          'Ollama が同じホストか別マシンでインストール・稼働——[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)を参照。',
          '少なくとも一つのモデルがプル済み（小型の指示モデルが適切な出発点）。',
          'ネットワーク到達性：Home Assistant が Ollama の URL（既定ポート 11434）に到達できることを確認。',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'Ollama 統合はどう追加しますか？',
        content:
          '**Home Assistant で 設定 → デバイスとサービス → 統合を追加 → Ollama と進み、Ollama の URL を入力します。** 既定の URL は http://<host>:11434 です。',
        columns: ['手順', '操作', '結果'],
        rows: [
          { '手順': '1', '操作': '設定 → デバイスとサービス → 統合を追加', '結果': '統合の選択画面が開く' },
          { '手順': '2', '操作': '「Ollama」を検索して選択', '結果': '接続ダイアログが表示される' },
          { '手順': '3', '操作': 'Ollama の URL を入力（http://host:11434）', '結果': 'Home Assistant が Ollama に接続' },
          { '手順': '4', '操作': '一覧からモデルを選択', '結果': '会話エンティティが作成される' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'どのモデルを選ぶべきか？',
        content:
          '**家の制御には、動かせる最大のモデルではなく、小型で高速・指示に従い関数呼び出しのできるモデルを選びましょう。** ここでは生の能力よりレイテンシが重要です。',
        items: [
          '控えめなハードウェアでキビキビした応答が欲しいなら小型モデルを使う。',
          'モデルが機器の動作を確実に出力できるよう、関数呼び出し／ツール対応を優先する。',
          'スマートホーム特化の候補は[スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home)を参照。',
          'より深いモデルの仕組みは[コーディングに最適なローカルLLM](/ja/power-local-llm/best-local-coding-models-2026)と local-llms クラスターへ外部リンク——本ガイドはモデルを再ランク付けしません。',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: '会話エージェントを設定する',
        content:
          '**Ollama の会話エンティティを Assist パイプラインのエージェントに設定し、制御させたいエンティティだけを公開します。** 公開こそが、モデルに機器への作用を許します。',
        numberedItems: [
          '設定 → 音声アシスタント を開き、Assist パイプラインを編集（または作成）する。',
          '会話エージェントを、統合が作成した Ollama エンティティに設定する。',
          'Assist の公開設定で、モデルが制御してよい具体的なエンティティを公開する。',
          '必要なら、トーンと範囲を制限するカスタムプロンプトを加える。',
          '保存し、音声を加える前に Assist のチャット欄からテストする。',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: '音声またはテキストで機器を制御',
        content:
          '**エージェントを設定しエンティティを公開したら、Assist で要求を入力するか話すと、モデルが動作を実行します。** 決定論的な安全自動化は素のルールのまま保ち、モデル任せにしないでください。',
        items: [
          'まず簡単な命令（「書斎の照明をつけて」）で、その後自然な言い回しでテストする。',
          'モデルは公開したエンティティだけを制御します——非公開の機器は触れられません。',
          'ハンズフリー利用にはローカル音声フロントエンドを追加——[ローカル音声アシスタント](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
          '直接の命令を超えた文脈対応の自動化は[ローカルLLMによるAI自動化](/ja/smart-home/ai-automations-local-llm)を参照。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'よくある問題のトラブルシューティング',
        content:
          '**多くの問題は接続性、モデル選択、公開のいずれかです。** これらを順に潰しましょう。',
        items: [
          '**接続できない：** Ollama の URL と、ポート 11434 が Home Assistant から到達可能かを確認；別ホストなら Ollama を 0.0.0.0 にバインドする。',
          '**応答が遅い：** より小型のモデルに切り替えるか、GPU/NPU を追加——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
          '**モデルが機器を無視する：** エンティティが Assist に公開され、Ollama エンティティがアクティブなエージェントか確認する。',
          '**誤った動作：** 範囲を制限するシステムプロンプトを加えるか、公開するエンティティ数を減らす。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Home Assistant にどのモデルを選ぶべきですか？', a: '関数呼び出しに対応した小型の指示追従モデルが最良の出発点です。家の制御は速く構造化された応答を要するためです。適切なサイズはハードウェア次第；最新の選択肢はスマートホーム向け最適ローカルLLMモデルのガイドを参照してください。' },
          { q: 'Ollama を Home Assistant で動かすのに GPU は必要ですか？', a: 'いいえ、ただしあると助かります。小型モデルは現代の CPU や統合 GPU で動きます；専用 GPU や NPU はレイテンシを下げ、アシスタントをキビキビさせます。モデルサイズをハードウェアに合わせましょう。' },
          { q: 'モデルは Home Assistant のどの機器でも制御できますか？', a: 'Assist に明示的に公開したエンティティだけです。公開はオプトインなので、共有していない機器にモデルは作用できず、制御を予測可能で安全に保ちます。' },
          { q: 'Ollama 統合はオフラインで動きますか？', a: 'はい。Ollama はモデルをローカルで動かし、Home Assistant は LAN 経由で機器を制御するため、アシスタントはインターネットなしで動きます。家の外からのリモートアクセスだけが接続を必要とします。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — これが収まる全体構成',
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — ハンズフリー音声を追加',
          '[スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home) — 適切なモデルを選ぶ',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：Ollama の設定',
          '[コーディングに最適なローカルモデル 2026](/ja/power-local-llm/best-local-coding-models-2026) — クラスター横断：モデルの詳細',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama を Home Assistant に接続する：ローカルAIアシスタント（2026）',
      description: 'Ollama を Home Assistant に順を追って接続（2026）：統合を追加し、モデルを選び、会話エージェントを設定して機器を自然言語で制御。日本語で家電を完全ローカルに操作できるプライベートなAI音声制御。クラウドなし。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-assistant-ollama-integration',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'ローカルAIアシスタント' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant にどのモデルを選ぶべきですか？', acceptedAnswer: { '@type': 'Answer', text: '関数呼び出しに対応した小型の指示追従モデルが最良の出発点です。家の制御は速く構造化された応答を要するためです。適切なサイズはハードウェア次第です。' } },
        { '@type': 'Question', name: 'Ollama を Home Assistant で動かすのに GPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、ただしあると助かります。小型モデルは現代の CPU や統合 GPU で動きます；専用 GPU や NPU はレイテンシを下げます。' } },
        { '@type': 'Question', name: 'モデルは Home Assistant のどの機器でも制御できますか？', acceptedAnswer: { '@type': 'Answer', text: 'Assist に明示的に公開したエンティティだけです。公開はオプトインなので、共有していない機器にモデルは作用できません。' } },
        { '@type': 'Question', name: 'Ollama 統合はオフラインで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollama はモデルをローカルで動かし、Home Assistant は LAN 経由で機器を制御するため、インターネットなしで動きます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Conectar o Ollama ao Home Assistant: Assistente de IA Local (2026)',
    seoTitle: 'Ollama + Home Assistant 2026: Configuração de IA Local',
    intro:
      'O Home Assistant tem uma integração do Ollama embutida que transforma um modelo hospedado localmente no seu agente de conversa, controlando dispositivos em linguagem natural sem nuvem. Este guia percorre os pré-requisitos, adicionar a integração, escolher um modelo, cablear o agente de conversa, controlar dispositivos e solucionar problemas — mantendo a instalação do Ollama e a escolha do modelo com link externo, não reexplicadas.',
    metaDescription:
      'Conecte o Ollama ao Home Assistant 2026: adicione a integração, escolha um modelo e controle dispositivos em linguagem natural.',
    twitterDescription:
      'Cableie o Ollama no Home Assistant para um assistente de IA totalmente local: adicione a integração, escolha um modelo, controle dispositivos por voz ou texto. Zero nuvem.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant adicionando um agente de conversa de IA local',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'integração ollama home assistant',
      'ollama home assistant',
      'home assistant llm local',
      'agente de conversa ollama home assistant',
      'assistente de ia local home assistant',
    ],
    leadAnswerBlock:
      '**Adicione a integração do Ollama do Home Assistant, aponte-a para o seu servidor Ollama, escolha um modelo e defina esse modelo como o agente de conversa do Assist — agora você controla dispositivos em linguagem natural, totalmente local.** O Ollama roda o modelo no seu próprio hardware, então nenhum comando ou estado do lar sai da sua rede.',
    quickAnswerTop: {
      pt: {
        question: 'Como conecto o Ollama ao Home Assistant?',
        answer:
          'Rode o Ollama em uma máquina alcançável a partir do Home Assistant, baixe um modelo, depois no Home Assistant adicione a integração do Ollama (Configurações → Dispositivos e serviços), insira a URL do Ollama (padrão http://host:11434) e selecione o seu modelo. Por fim, defina a entidade de conversa do Ollama como o agente no seu pipeline do Assist.',
        bullets: [
          'Rode o Ollama e baixe um modelo em um host alcançável',
          'Adicione a integração do Ollama no Home Assistant',
          'Insira a URL do Ollama (porta padrão 11434) e escolha um modelo',
          'Exponha entidades ao Assist para que o modelo possa controlá-las',
          'Defina o agente do Ollama no seu pipeline do Assist',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que isso lhe dá', anchor: 'what-this-gives' },
      { label: 'Pré-requisitos', anchor: 'prerequisites' },
      { label: 'Adicionar a integração', anchor: 'add-integration' },
      { label: 'Escolher um modelo', anchor: 'choose-model' },
      { label: 'Configurar o agente', anchor: 'configure-agent' },
      { label: 'Controlar dispositivos', anchor: 'control-devices' },
      { label: 'Solução de problemas', anchor: 'troubleshooting' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Adicione a integração do Ollama no Home Assistant, aponte-a para o seu servidor Ollama, escolha um modelo e defina-o como o agente de conversa do Assist.' },
      { type: 'plain-terms', content: 'O Home Assistant pode usar um modelo de IA local como seu cérebro de voz/chat. Você roda o modelo com o Ollama no seu próprio computador, diz ao Home Assistant onde encontrá-lo, escolhe qual modelo usar e o deixa controlar os dispositivos que você expõe. Tudo roda no seu hardware, então nada é enviado a um serviço na nuvem.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Home Assistant traz uma integração oficial do Ollama — sem necessidade de add-on personalizado',
          'Rode o Ollama no host do Home Assistant ou em outra máquina da sua LAN',
          'Adicionar integração → inserir a URL do Ollama (padrão http://host:11434) → selecionar um modelo',
          'Exponha só as entidades que o modelo deve controlar, depois defina-o como o agente do Assist',
          'Use um modelo pequeno com chamada de funções para baixa latência; link externo para profundidade de modelo/hardware',
          'Tudo é local: nenhum comando ou estado do lar sai da sua rede',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: 'O que conectar o Ollama ao Home Assistant lhe dá',
        content:
          '**Dá ao Home Assistant um agente de conversa local: você fala ou digita uma solicitação e o modelo a mapeia para ações de dispositivo, sem um assistente na nuvem no meio.** Isso substitui o agente de voz na nuvem (Alexa, Google) para o controle em linguagem natural.',
        items: [
          '**Controle em linguagem natural:** "desligue tudo lá embaixo" mapeia para as entidades certas em vez de uma frase fixa.',
          '**Local e privado:** o modelo roda via Ollama no seu hardware — veja [o guia da casa inteligente com LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) para a arquitetura completa.',
          '**Pronto para voz:** combine-o com um pipeline de voz local para um substituto privado da Alexa — veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: 'Pré-requisitos antes de começar',
        content:
          '**Você precisa do Home Assistant rodando, do Ollama rodando em um host alcançável e de um modelo baixado.** Este guia não reexplica a instalação do Ollama — link externo para isso.',
        numberedItems: [
          'Home Assistant ativo e alcançável na sua LAN.',
          'Ollama instalado e rodando no mesmo host ou em outra máquina — veja [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
          'Pelo menos um modelo baixado (um modelo de instruções pequeno é o ponto de partida adequado).',
          'Alcançabilidade de rede: confirme que o Home Assistant consegue alcançar a URL do Ollama (porta padrão 11434).',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: 'Como você adiciona a integração do Ollama?',
        content:
          '**No Home Assistant, vá em Configurações → Dispositivos e serviços → Adicionar integração → Ollama, depois insira a URL do Ollama.** A URL padrão é http://<host>:11434.',
        columns: ['Passo', 'Ação', 'Resultado'],
        rows: [
          { 'Passo': '1', 'Ação': 'Configurações → Dispositivos e serviços → Adicionar integração', 'Resultado': 'O seletor de integrações abre' },
          { 'Passo': '2', 'Ação': 'Busque "Ollama" e selecione', 'Resultado': 'A caixa de diálogo de conexão aparece' },
          { 'Passo': '3', 'Ação': 'Insira a URL do Ollama (http://host:11434)', 'Resultado': 'O Home Assistant se conecta ao Ollama' },
          { 'Passo': '4', 'Ação': 'Selecione um modelo da lista', 'Resultado': 'Uma entidade de conversa é criada' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qual modelo você deve escolher?',
        content:
          '**Escolha um modelo pequeno, rápido, que siga instruções, com chamada de funções para o controle do lar — não o maior modelo que você consiga rodar.** Aqui a latência importa mais que a capacidade bruta.',
        items: [
          'Use um modelo pequeno se quiser respostas ágeis em hardware modesto.',
          'Priorize o suporte a chamada de funções/ferramentas para que o modelo emita ações de dispositivo de forma confiável.',
          'Para uma lista curta específica de casa inteligente, veja [melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home).',
          'Para uma mecânica de modelos mais profunda, link externo para [melhores LLMs locais para programar](/pt/power-local-llm/best-local-coding-models-2026) e o cluster local-llms — este guia não reordena modelos.',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: 'Configurar o agente de conversa',
        content:
          '**Defina a entidade de conversa do Ollama como o agente no seu pipeline do Assist e exponha só as entidades que você quer que ele controle.** A exposição é o que deixa o modelo agir sobre os dispositivos.',
        numberedItems: [
          'Abra Configurações → Assistentes de voz e edite (ou crie) um pipeline do Assist.',
          'Defina o agente de conversa para a entidade do Ollama criada pela integração.',
          'Na exposição do Assist, exponha as entidades específicas que o modelo pode controlar.',
          'Opcionalmente adicione um prompt personalizado para limitar o tom e o escopo.',
          'Salve, depois teste pela caixa de chat do Assist antes de adicionar voz.',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: 'Controlar dispositivos por voz ou texto',
        content:
          '**Uma vez definido o agente e expostas as entidades, digite ou diga uma solicitação no Assist e o modelo realiza a ação.** Mantenha as automações de segurança determinísticas como regras simples, não guiadas pelo modelo.',
        items: [
          'Teste primeiro com comandos simples ("acenda a luz do escritório"), depois com frases naturais.',
          'O modelo só controla as entidades que você expôs — dispositivos não expostos ficam intactos.',
          'Adicione um front-end de voz local para uso mãos-livres — veja [assistente de voz local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Para automações conscientes do contexto além de comandos diretos, veja [automações de IA com um LLM local](/pt/smart-home/ai-automations-local-llm).',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solucionar problemas comuns',
        content:
          '**A maioria dos problemas é de conectividade, escolha de modelo ou exposição.** Resolva-os em ordem.',
        items: [
          '**Não conecta:** verifique a URL do Ollama e se a porta 11434 é alcançável pelo Home Assistant; vincule o Ollama a 0.0.0.0 se estiver em outro host.',
          '**Respostas lentas:** mude para um modelo menor ou adicione uma GPU/NPU — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          '**O modelo ignora os dispositivos:** confirme que as entidades estão expostas ao Assist e que a entidade do Ollama é o agente ativo.',
          '**Ações erradas:** adicione um prompt de sistema que limite o escopo, ou reduza o número de entidades expostas.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual modelo devo escolher para o Home Assistant?', a: 'Um modelo pequeno que siga instruções com suporte a chamada de funções é o melhor ponto de partida, porque o controle do lar precisa de respostas rápidas e estruturadas. O tamanho certo depende do seu hardware; veja o guia dos melhores modelos LLM locais para casa inteligente para opções atuais.' },
          { q: 'Preciso de uma GPU para rodar o Ollama com o Home Assistant?', a: 'Não, mas ajuda. Um modelo pequeno roda em uma CPU moderna ou GPU integrada; uma GPU dedicada ou NPU reduz a latência, deixando o assistente mais ágil. Ajuste o tamanho do modelo ao seu hardware.' },
          { q: 'O modelo pode controlar qualquer dispositivo no Home Assistant?', a: 'Apenas as entidades que você expõe explicitamente ao Assist. A exposição é opt-in, então o modelo não pode agir sobre dispositivos que você não compartilhou, o que mantém o controle previsível e seguro.' },
          { q: 'A integração do Ollama funciona offline?', a: 'Sim. O Ollama roda o modelo localmente e o Home Assistant controla os dispositivos pela sua LAN, então o assistente funciona sem internet. Só o acesso remoto de fora do lar precisa de conectividade.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — a arquitetura completa em que isso se encaixa',
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — adicionar voz mãos-livres',
          '[Melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home) — escolha o modelo certo',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: configuração do Ollama',
          '[Melhores modelos locais para programar 2026](/pt/power-local-llm/best-local-coding-models-2026) — entre clusters: profundidade de modelos',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Conectar o Ollama ao Home Assistant: Assistente de IA Local (2026)',
      description: 'Conecte o Ollama ao Home Assistant 2026: adicione a integração, escolha um modelo e controle dispositivos em linguagem natural.',
      url: 'https://www.promptquorum.com/pt/smart-home/home-assistant-ollama-integration',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Assistente de IA local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual modelo devo escolher para o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo pequeno que siga instruções com suporte a chamada de funções é o melhor ponto de partida, porque o controle do lar precisa de respostas rápidas e estruturadas. O tamanho certo depende do seu hardware.' } },
        { '@type': 'Question', name: 'Preciso de uma GPU para rodar o Ollama com o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Não, mas ajuda. Um modelo pequeno roda em uma CPU moderna ou GPU integrada; uma GPU dedicada ou NPU reduz a latência.' } },
        { '@type': 'Question', name: 'O modelo pode controlar qualquer dispositivo no Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Apenas as entidades que você expõe explicitamente ao Assist. A exposição é opt-in, então o modelo não pode agir sobre dispositivos que você não compartilhou.' } },
        { '@type': 'Question', name: 'A integração do Ollama funciona offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Ollama roda o modelo localmente e o Home Assistant controla os dispositivos pela sua LAN, então funciona sem internet.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '把 Ollama 连接到 Home Assistant：本地 AI 助手（2026）',
    seoTitle: 'Ollama + Home Assistant 2026：本地 AI 配置',
    intro:
      'Home Assistant 内置了 Ollama 集成，可把一个本地托管的模型变成你的对话代理，用自然语言控制设备且无需云端。本指南依次讲解前提条件、添加集成、选择模型、连线对话代理、控制设备和排错——Ollama 的安装与模型选择走外链，不再赘述。',
    metaDescription:
      '把 Ollama 逐步接入 Home Assistant（2026）：添加集成、选择模型并配置对话代理，以自然语言指令控制所有智能家居设备。所有数据始终留在本地硬件上运行，完全无需云端服务，有效保护家庭隐私与数据安全。',
    twitterDescription:
      '把 Ollama 接入 Home Assistant，打造完全本地的 AI 助手：添加集成、选择模型、用语音或文本控制设备。零云端。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '为 Home Assistant 添加本地 AI 对话代理的用户',
    primaryTerm: 'Home Assistant Ollama integration',
    targetKeywords: [
      'home assistant ollama 集成',
      'ollama home assistant',
      'home assistant 本地llm',
      'home assistant 对话代理 ollama',
      '本地 ai 助手 home assistant',
    ],
    leadAnswerBlock:
      '**添加 Home Assistant 的 Ollama 集成，指向你的 Ollama 服务器，选择一个模型，然后把该模型设为 Assist 的对话代理——现在你就能用自然语言、完全本地地控制设备。** Ollama 在你自己的硬件上运行模型，因此任何命令或家庭状态都不会离开你的网络。',
    quickAnswerTop: {
      zh: {
        question: '我该如何把 Ollama 连接到 Home Assistant？',
        answer:
          '在一台 Home Assistant 可访问的机器上运行 Ollama，拉取一个模型，然后在 Home Assistant 中添加 Ollama 集成（设置 → 设备与服务），输入 Ollama 的 URL（默认 http://host:11434）并选择你的模型。最后，把 Ollama 的对话实体设为你 Assist 流水线中的代理。',
        bullets: [
          '在可访问的主机上运行 Ollama 并拉取一个模型',
          '在 Home Assistant 中添加 Ollama 集成',
          '输入 Ollama 的 URL（默认端口 11434）并选择一个模型',
          '把实体暴露给 Assist，使模型能够控制它们',
          '在你的 Assist 流水线中设置 Ollama 代理',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '这能给你什么', anchor: 'what-this-gives' },
      { label: '前提条件', anchor: 'prerequisites' },
      { label: '添加集成', anchor: 'add-integration' },
      { label: '选择模型', anchor: 'choose-model' },
      { label: '配置代理', anchor: 'configure-agent' },
      { label: '控制设备', anchor: 'control-devices' },
      { label: '排错', anchor: 'troubleshooting' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '在 Home Assistant 中添加 Ollama 集成，指向你的 Ollama 服务器，选择一个模型，并把它设为 Assist 的对话代理。' },
      { type: 'plain-terms', content: 'Home Assistant 可以用一个本地 AI 模型作为它的语音/聊天大脑。你用 Ollama 在自己的电脑上运行模型，告诉 Home Assistant 去哪里找它，选择使用哪个模型，并让它控制你暴露的设备。一切都在你的硬件上运行，因此不会有任何东西被发送到云服务。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Home Assistant 自带官方 Ollama 集成——无需自定义加载项',
          '在 Home Assistant 主机或局域网中的另一台机器上运行 Ollama',
          '添加集成 → 输入 Ollama 的 URL（默认 http://host:11434）→ 选择一个模型',
          '只暴露你想让模型控制的实体，然后把它设为 Assist 代理',
          '为低延迟使用小型函数调用模型；模型/硬件细节走外链',
          '一切都在本地：任何命令或家庭状态都不离开你的网络',
        ],
      },
      whatThisGives: {
        id: 'what-this-gives',
        title: '把 Ollama 连接到 Home Assistant 能给你什么',
        content:
          '**它为 Home Assistant 提供一个本地对话代理：你说出或输入一个请求，模型把它映射为设备动作，整个回路中没有云端助手。** 这在自然语言控制上取代了云端语音代理（Alexa、Google）。',
        items: [
          '**自然语言控制：**“把楼下都关掉”会映射到正确的实体，而不是一句固定短语。',
          '**本地且私密：** 模型经由 Ollama 在你的硬件上运行——完整架构参见[本地 LLM 智能家居指南](/zh/smart-home/local-llm-smart-home-complete-guide)。',
          '**可用于语音：** 把它与本地语音流水线结合，作为私密的 Alexa 替代——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
        ],
      },
      prerequisites: {
        id: 'prerequisites',
        title: '开始前的前提条件',
        content:
          '**你需要 Home Assistant 在运行、Ollama 在一台可访问的主机上运行，以及已拉取一个模型。** 本指南不再赘述 Ollama 的安装——相关内容走外链。',
        numberedItems: [
          'Home Assistant 已运行且在你的局域网中可访问。',
          'Ollama 已在同一主机或另一台机器上安装并运行——参见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)。',
          '至少已拉取一个模型（小型指令模型是合适的起点）。',
          '网络可达性：确认 Home Assistant 能访问 Ollama 的 URL（默认端口 11434）。',
        ],
      },
      addIntegration: {
        id: 'add-integration',
        title: '你如何添加 Ollama 集成？',
        content:
          '**在 Home Assistant 中进入 设置 → 设备与服务 → 添加集成 → Ollama，然后输入 Ollama 的 URL。** 默认 URL 为 http://<host>:11434。',
        columns: ['步骤', '操作', '结果'],
        rows: [
          { '步骤': '1', '操作': '设置 → 设备与服务 → 添加集成', '结果': '打开集成选择器' },
          { '步骤': '2', '操作': '搜索“Ollama”并选择', '结果': '出现连接对话框' },
          { '步骤': '3', '操作': '输入 Ollama 的 URL（http://host:11434）', '结果': 'Home Assistant 连接到 Ollama' },
          { '步骤': '4', '操作': '从列表中选择一个模型', '结果': '创建一个对话实体' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '你该选择哪个模型？',
        content:
          '**为家庭控制选择一个小而快、能遵循指令并支持函数调用的模型——而不是你能运行的最大模型。** 在这里延迟比纯粹的能力更重要。',
        items: [
          '若想在普通硬件上获得灵敏的响应，就用小型模型。',
          '优先选择支持函数调用/工具的模型，以便它可靠地输出设备动作。',
          '智能家居专属的精选清单参见[智能家居控制的最佳本地 LLM 模型](/zh/smart-home/best-local-llm-models-smart-home)。',
          '更深入的模型机制走外链至[编程的最佳本地 LLM](/zh/power-local-llm/best-local-coding-models-2026)和 local-llms 集群——本指南不再对模型重新排名。',
        ],
      },
      configureAgent: {
        id: 'configure-agent',
        title: '配置对话代理',
        content:
          '**把 Ollama 对话实体设为你 Assist 流水线中的代理，并只暴露你想让它控制的实体。** 正是“暴露”让模型能够作用于设备。',
        numberedItems: [
          '打开 设置 → 语音助手，编辑（或创建）一个 Assist 流水线。',
          '把对话代理设为集成所创建的 Ollama 实体。',
          '在 Assist 暴露设置中，暴露模型可控制的具体实体。',
          '可选地添加一段自定义提示词以限制语气和范围。',
          '保存，然后在添加语音之前从 Assist 聊天框测试。',
        ],
      },
      controlDevices: {
        id: 'control-devices',
        title: '用语音或文本控制设备',
        content:
          '**一旦设好代理并暴露实体，在 Assist 中输入或说出一个请求，模型就会执行该动作。** 把确定性的安全自动化保持为普通规则，而非由模型驱动。',
        items: [
          '先用简单命令测试（“打开书房的灯”），再用自然的措辞。',
          '模型只控制你暴露的实体——未暴露的设备不受影响。',
          '为免手使用添加一个本地语音前端——参见[本地语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '关于超出直接命令的情境感知自动化，参见[用本地LLM实现AI自动化](/zh/smart-home/ai-automations-local-llm)。',
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '常见问题排错',
        content:
          '**大多数问题出在连通性、模型选择或暴露上。** 按顺序逐一排查。',
        items: [
          '**无法连接：** 核对 Ollama 的 URL，并确认 11434 端口可从 Home Assistant 访问；若在另一台主机上，把 Ollama 绑定到 0.0.0.0。',
          '**响应缓慢：** 换一个更小的模型或加一块 GPU/NPU——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '**模型忽略设备：** 确认实体已暴露给 Assist，且 Ollama 实体是当前活动代理。',
          '**动作错误：** 添加一段限制范围的系统提示词，或减少暴露的实体数量。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Home Assistant 该选哪个模型？', a: '一个支持函数调用的小型指令遵循模型是最佳起点，因为家庭控制需要快速、结构化的响应。合适的大小取决于你的硬件；当前选项参见智能家居最佳本地 LLM 模型指南。' },
          { q: '在 Home Assistant 上运行 Ollama 需要 GPU 吗？', a: '不需要，但有帮助。小型模型可在现代 CPU 或集成 GPU 上运行；独立 GPU 或 NPU 能降低延迟，让助手更灵敏。把模型大小匹配到你的硬件。' },
          { q: '模型能控制 Home Assistant 里的任意设备吗？', a: '只能控制你明确暴露给 Assist 的实体。暴露是可选启用的，因此模型无法作用于你未共享的设备，从而让控制可预测且安全。' },
          { q: 'Ollama 集成能离线工作吗？', a: '能。Ollama 在本地运行模型，Home Assistant 经由你的局域网控制设备，因此助手在没有互联网时也能工作。只有来自家庭之外的远程访问才需要连通性。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 它所归属的完整架构',
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — 添加免手语音',
          '[智能家居控制的最佳本地 LLM 模型](/zh/smart-home/best-local-llm-models-smart-home) — 选对模型',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：Ollama 配置',
          '[2026 编程的最佳本地模型](/zh/power-local-llm/best-local-coding-models-2026) — 跨集群：模型细节',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '把 Ollama 连接到 Home Assistant：本地 AI 助手（2026）',
      description: '把 Ollama 逐步接入 Home Assistant（2026）：添加集成、选择模型并配置对话代理，以自然语言指令控制所有智能家居设备。所有数据始终留在本地硬件上运行，完全无需云端服务，有效保护家庭隐私与数据安全。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-assistant-ollama-integration',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: '本地 AI 助手' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant 该选哪个模型？', acceptedAnswer: { '@type': 'Answer', text: '一个支持函数调用的小型指令遵循模型是最佳起点，因为家庭控制需要快速、结构化的响应。合适的大小取决于你的硬件。' } },
        { '@type': 'Question', name: '在 Home Assistant 上运行 Ollama 需要 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要，但有帮助。小型模型可在现代 CPU 或集成 GPU 上运行；独立 GPU 或 NPU 能降低延迟。' } },
        { '@type': 'Question', name: '模型能控制 Home Assistant 里的任意设备吗？', acceptedAnswer: { '@type': 'Answer', text: '只能控制你明确暴露给 Assist 的实体。暴露是可选启用的，因此模型无法作用于你未共享的设备。' } },
        { '@type': 'Question', name: 'Ollama 集成能离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '能。Ollama 在本地运行模型，Home Assistant 经由你的局域网控制设备，因此在没有互联网时也能工作。' } },
      ],
    },
  },
}
