import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Run Your Smart Home on a Local LLM (2026 Guide)',
    seoTitle: 'Local LLM Smart Home 2026: The Complete Guide',
    intro:
      'A local LLM can now act as the brain of your smart home — interpreting natural-language commands, running context-aware automations, and powering a private voice assistant, all on hardware you own with no cloud. This guide explains what that means, why it became practical in 2026, the Home Assistant + Ollama + local-voice architecture, what it unlocks beyond rule-based automation, and the step-by-step path to build it.',
    metaDescription:
      'Run your smart home on a local LLM: natural-language control, context-aware automations, and private voice via Home Assistant + Ollama. No cloud. 2026 guide.',
    twitterDescription:
      'Use a local LLM as your smart home brain: natural-language control and context-aware automations via Home Assistant + Ollama. Zero cloud.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users adding local AI control to their smart home',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'local llm smart home',
      'home assistant local llm',
      'ollama smart home',
      'natural language home automation',
      'local ai home assistant',
    ],
    leadAnswerBlock:
      '**You can run your smart home on a local LLM by connecting Ollama to Home Assistant and using the model as the conversation agent and automation brain — natural-language device control, all on your own hardware with no cloud.** It became practical in 2026 because small, capable, function-calling models now run on a mini PC.',
    quickAnswerTop: {
      en: {
        question: 'Can you run a smart home on a local LLM?',
        answer:
          'Yes. Home Assistant integrates with Ollama so a locally hosted model acts as the conversation agent, turning plain-language requests into device actions. The model runs on your own hardware, so control and automations work with no cloud and no data leaving the house. A small model on a mini PC is enough for home control.',
        bullets: [
          'Home Assistant + Ollama = local model as conversation agent',
          'Natural-language control: "dim the kitchen and start the kettle"',
          'Context-aware automations beyond rigid if-this-then-that rules',
          'Runs offline on your hardware — no cloud, no usage logging',
          'A small function-calling model on a mini PC handles home control',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What It Means', anchor: 'what-it-means' },
      { label: 'Why It Works in 2026', anchor: 'why-2026' },
      { label: 'The Architecture', anchor: 'architecture' },
      { label: 'What It Unlocks', anchor: 'what-it-unlocks' },
      { label: 'Hardware Reality', anchor: 'hardware' },
      { label: 'Step-by-Step Path', anchor: 'step-by-step' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Connect Ollama to Home Assistant and a locally hosted model becomes your smart home brain — natural-language control and context-aware automations, with no cloud.' },
      { type: 'plain-terms', content: 'Traditional smart home automations are rigid rules: if motion, then light. A local LLM adds a layer that understands plain language and context — you can say "I am heading out" and it can decide what to turn off. The model runs on your own computer through Ollama and plugs into Home Assistant, so none of it depends on a cloud service.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant has a built-in Ollama integration; a local model becomes the conversation agent',
          'You control devices in natural language instead of memorising exact command phrases',
          'The model can run context-aware automations that rigid rules cannot express',
          'Everything runs on your hardware — no cloud, no usage data leaving the house',
          'A small function-calling model on a mini PC is enough; a GPU or capable iGPU/NPU lowers latency',
          'Build order: Home Assistant first, then Ollama, then wire the conversation agent, then add local voice',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'What Running Your Smart Home on a Local LLM Means',
        content:
          '**It means a locally hosted language model sits between you and your devices, translating plain-language intent into Home Assistant actions and making automation decisions a fixed rule could not.** The LLM plays two roles: conversation agent (you talk, it acts) and automation brain (it reasons over context).',
        items: [
          '**Conversation agent:** You say or type "make the living room cosy" and the model maps that intent to concrete device calls — dim lights, set a warm colour, lower the blinds.',
          '**Automation brain:** Instead of one trigger → one action, the model can weigh context: time of day, who is home, sensor states, and a natural-language goal.',
          '**Local by design:** The model runs through Ollama on your own machine, so neither your commands nor your home state are sent to a third party.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: "Why It's Possible in 2026",
        content:
          '**Three things converged: small models got capable enough for home control, they gained reliable function-calling, and Home Assistant shipped a first-class LLM integration.** None of these existed together for home users a few years ago.',
        items: [
          '**Capable small models:** Models in the 3B–8B range now follow instructions well enough to map intent to device actions, and they fit on modest hardware. For model mechanics and sizing, see [what local LLMs are](/local-llms/what-are-local-llms) — this guide does not re-explain them.',
          '**Function-calling / tool use:** Home control depends on the model emitting structured calls (turn on, set temperature). Modern local models support this, which is what makes reliable control possible.',
          '**Home Assistant integration:** Home Assistant exposes a conversation-agent interface and an Ollama integration, so wiring a local model to your devices is a configuration step, not a custom build.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'The Architecture: Home Assistant + Ollama + Local Voice',
        content:
          '**The stack is three components on your own hardware: Home Assistant (devices + automations), Ollama (the local model runtime), and a local voice pipeline (Assist + Whisper + Piper).** Data flows in a loop that never leaves your network.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Owns your devices, entity states, and automations, and exposes the conversation-agent interface. It is the hub the model acts through — start at [Home Assistant getting started](/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Runs the local model and serves it to Home Assistant. For installing and choosing models, link out to [how to install Ollama](/local-llms/how-to-install-ollama); this guide stays focused on the smart-home wiring.' },
          { title: 'Conversation agent', whyItMatters: 'The Home Assistant setting that points Assist at the Ollama model so natural language becomes device actions — the step-by-step is in [connecting Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration).' },
          { title: 'Local voice (optional)', whyItMatters: 'Whisper transcribes speech and Piper speaks responses, so you get a fully offline voice assistant — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'What It Unlocks vs Rule-Based Automation',
        content:
          '**A local LLM adds flexibility, natural language, and context that rule-based automation cannot express — at the cost of more setup and hardware.** Use rules for deterministic triggers; use the LLM where intent and context matter.',
        columns: ['Aspect', 'Rule-based automation', 'Local-LLM automation'],
        rows: [
          { 'Aspect': 'Flexibility', 'Rule-based automation': 'Fixed trigger → fixed action', 'Local-LLM automation': 'Interprets goals and adapts to context' },
          { 'Aspect': 'Natural language', 'Rule-based automation': 'None — you wire exact conditions', 'Local-LLM automation': 'Plain-language commands and intents' },
          { 'Aspect': 'Context-awareness', 'Rule-based automation': 'Only the states you script', 'Local-LLM automation': 'Reasons over time, presence, sensors' },
          { 'Aspect': 'Setup', 'Rule-based automation': 'Simple per rule', 'Local-LLM automation': 'Higher — hub + model + wiring' },
          { 'Aspect': 'Hardware need', 'Rule-based automation': 'Minimal (a Pi)', 'Local-LLM automation': 'A mini PC; GPU/NPU helps latency' },
        ],
        items: [
          'For concrete automation examples and the prompts behind them, see [smarter automations with a local LLM](/smart-home/ai-automations-local-llm).',
          'Keep deterministic safety automations (smoke alarm, door locks) as plain rules — do not route them through the model.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'The Hardware Reality',
        content:
          '**You can run Home Assistant and a small local model on a single mini PC; a GPU, capable iGPU, or NPU lowers response latency.** This guide does not re-explain VRAM or model quantization — link out for that depth.',
        items: [
          '**One box is enough:** A mini PC can host Home Assistant plus a small model via Ollama. For picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**Latency scales with hardware:** Larger models and CPU-only inference respond more slowly; a GPU or modern iGPU/NPU shortens the gap to a snappy assistant. For VRAM and model-sizing depth, see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Pick the model for the job:** Home control rewards small, fast, function-calling models over the largest available — see [best local LLM models for smart home control](/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Your Step-by-Step Path',
        content:
          '**Build in order: Home Assistant, then Ollama, then the conversation agent, then voice and automations.** Each step is covered in a focused how-to so this flagship stays a map, not a wall of commands.',
        numberedItems: [
          'Set up Home Assistant on a mini PC — [getting-started guide](/smart-home/home-assistant-getting-started).',
          'Install Ollama and pull a small model — [how to install Ollama](/local-llms/how-to-install-ollama).',
          'Connect Ollama to Home Assistant and set it as the conversation agent — [integration how-to](/smart-home/home-assistant-ollama-integration).',
          'Choose a model tuned for home control — [best local LLM models for smart home](/smart-home/best-local-llm-models-smart-home).',
          'Add a fully local voice front-end — [local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'Design context-aware automations — [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which local model is best for home control?', a: 'A small instruction-following model with reliable function-calling — typically in the 3B to 8B range — is the best fit, because home control needs fast, structured responses rather than the largest model. The right pick depends on your hardware; see the best local LLM models for smart home guide for current options.' },
          { q: 'Do I need a GPU to run a local LLM smart home?', a: 'No, but it helps. A small model runs on a modern CPU or capable integrated GPU; a discrete GPU or NPU mainly lowers response latency so the assistant feels snappier. Match the model size to your hardware rather than buying the biggest GPU.' },
          { q: 'Does a local LLM smart home work offline?', a: 'Yes. The model runs locally through Ollama and Home Assistant controls devices over your LAN, so natural-language control and automations work with no internet. Only remote access from outside the home needs connectivity.' },
          { q: 'Is a local LLM faster than Alexa?', a: 'It depends on hardware and model size. Cloud assistants like Alexa are tuned for low latency, while a local LLM trades some speed for privacy and offline operation; on a GPU-equipped mini PC the gap narrows. The decisive advantage is privacy and control, not raw speed.' },
          { q: 'Can a local LLM smart home run on a Raspberry Pi?', a: 'A Raspberry Pi runs Home Assistant well, but LLM inference on a Pi is limited to very small models and is slow. For a responsive local-LLM assistant, a mini PC with a capable iGPU/NPU or a discrete GPU is the better choice.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — the step-by-step integration',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[Smarter Automations with a Local LLM](/smart-home/ai-automations-local-llm) — context-aware rules and prompts',
          '[Best Local LLM Models for Smart Home Control](/smart-home/best-local-llm-models-smart-home) — model selection',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first pillar',
          '[Autonomous Local Agents That Actually Work](/power-local-llm/autonomous-local-agents-actually-work) — cross-cluster: local AI agents and workflows',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Run Your Smart Home on a Local LLM (2026 Guide)',
      description: 'Run your smart home on a local LLM: natural-language control, context-aware automations, and private voice via Home Assistant + Ollama. No cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Local LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Home automation' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which local model is best for home control?', acceptedAnswer: { '@type': 'Answer', text: 'A small instruction-following model with reliable function-calling, typically 3B to 8B, is the best fit because home control needs fast structured responses rather than the largest model.' } },
        { '@type': 'Question', name: 'Do I need a GPU to run a local LLM smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No, but it helps. A small model runs on a modern CPU or capable integrated GPU; a discrete GPU or NPU mainly lowers response latency.' } },
        { '@type': 'Question', name: 'Does a local LLM smart home work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The model runs locally through Ollama and Home Assistant controls devices over your LAN, so control and automations work with no internet.' } },
        { '@type': 'Question', name: 'Is a local LLM faster than Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on hardware and model size. Cloud assistants are tuned for low latency; a local LLM trades some speed for privacy and offline operation, and the gap narrows on a GPU-equipped mini PC.' } },
        { '@type': 'Question', name: 'Can a local LLM smart home run on a Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi runs Home Assistant well, but LLM inference on a Pi is limited to very small, slow models. A mini PC with a capable iGPU/NPU or discrete GPU is better for a responsive assistant.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'شغِّل منزلك الذكي بنموذج لغوي محلي (دليل 2026)',
    seoTitle: 'LLM محلي للمنزل الذكي 2026: الدليل الشامل مع Ollama',
    intro:
      'يمكن لنموذج لغوي محلي الآن أن يكون بمثابة عقل منزلك الذكي — يفسّر الأوامر باللغة الطبيعية، ويُشغِّل الأتمتة الواعية بالسياق، ويُفعِّل مساعدًا صوتيًا خاصًا، كل ذلك على أجهزتك دون أي سحابة. يشرح هذا الدليل ما يعنيه ذلك، ولماذا أصبح عمليًا في 2026، وبنية Home Assistant + Ollama + الصوت المحلي، وما يُفتحه مقارنةً بالأتمتة القائمة على القواعد، والمسار خطوة بخطوة لبنائه.',
    metaDescription:
      'Home Assistant + Ollama يحوِّل نموذجًا محليًا إلى عقل منزلك الذكي — تحكم بلغة طبيعية وأتمتة واعية بالسياق بدون سحابة. 2026.',
    twitterDescription:
      'استخدم نموذجًا لغويًا محليًا كعقل لمنزلك الذكي: تحكم بلغة طبيعية وأتمتة واعية بالسياق عبر Home Assistant + Ollama. بدون سحابة إطلاقًا.',
    readTime: '12 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يُضيفون التحكم بالذكاء الاصطناعي المحلي إلى منزلهم الذكي',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'نموذج لغوي محلي منزل ذكي',
      'home assistant نموذج لغوي محلي',
      'ollama منزل ذكي',
      'أتمتة المنزل بلغة طبيعية',
      'ذكاء اصطناعي محلي home assistant',
    ],
    leadAnswerBlock:
      '**يمكنك تشغيل منزلك الذكي بنموذج لغوي محلي عن طريق ربط Ollama بـ Home Assistant واستخدام النموذج كعميل محادثة وعقل للأتمتة — التحكم في الأجهزة بلغة طبيعية، على أجهزتك الخاصة دون سحابة.** أصبح ذلك عمليًا في 2026 لأن النماذج الصغيرة القادرة على استدعاء الوظائف تعمل الآن على جهاز كمبيوتر مصغر.',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكن تشغيل منزل ذكي بنموذج لغوي محلي؟',
        answer:
          'نعم. يتكامل Home Assistant مع Ollama حتى يعمل النموذج المستضاف محليًا كعميل محادثة يحوِّل الطلبات باللغة الطبيعية إلى إجراءات على الأجهزة. يعمل النموذج على جهازك الخاص، لذا يعمل التحكم والأتمتة دون سحابة وبدون أي بيانات تغادر المنزل. يكفي نموذج صغير على جهاز كمبيوتر مصغر للتحكم في المنزل.',
        bullets: [
          'Home Assistant + Ollama = نموذج محلي كعميل محادثة',
          'تحكم بلغة طبيعية: "اخفِّف إضاءة المطبخ وشغِّل غلاية الماء"',
          'أتمتة واعية بالسياق تتجاوز قواعد "إذا-ثم" الجامدة',
          'يعمل دون اتصال بالإنترنت على جهازك — بدون سحابة، بدون تسجيل الاستخدام',
          'نموذج صغير يدعم استدعاء الوظائف على جهاز كمبيوتر مصغر يكفي للتحكم في المنزل',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما يعنيه ذلك', anchor: 'what-it-means' },
      { label: 'لماذا يعمل في 2026', anchor: 'why-2026' },
      { label: 'البنية المعمارية', anchor: 'architecture' },
      { label: 'ما يُفتحه', anchor: 'what-it-unlocks' },
      { label: 'واقع الأجهزة', anchor: 'hardware' },
      { label: 'المسار خطوة بخطوة', anchor: 'step-by-step' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'اربط Ollama بـ Home Assistant ويصبح النموذج المستضاف محليًا عقل منزلك الذكي — تحكم بلغة طبيعية وأتمتة واعية بالسياق، دون سحابة.' },
      { type: 'plain-terms', content: 'الأتمتة التقليدية للمنزل الذكي قواعد جامدة: إذا توجّد حركة، أشعل الضوء. يُضيف نموذج لغوي محلي طبقة تفهم اللغة الطبيعية والسياق — يمكنك القول "أنا خارج" فيقرر ما يجب إيقافه. يعمل النموذج عبر Ollama على جهازك الخاص ويتصل بـ Home Assistant، لذا لا شيء من هذا يعتمد على خدمة سحابية.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يحتوي Home Assistant على تكامل مدمج مع Ollama؛ يصبح النموذج المحلي عميل المحادثة',
          'تتحكم في الأجهزة بلغة طبيعية بدلًا من حفظ عبارات أوامر دقيقة',
          'يمكن للنموذج تشغيل أتمتة واعية بالسياق لا تستطيع القواعد الجامدة التعبير عنها',
          'كل شيء يعمل على جهازك — لا سحابة، ولا بيانات استخدام تغادر المنزل',
          'يكفي نموذج صغير يدعم استدعاء الوظائف على جهاز كمبيوتر مصغر؛ GPU أو iGPU/NPU قادر يخفض الكمون',
          'ترتيب البناء: Home Assistant أولًا، ثم Ollama، ثم ربط عميل المحادثة، ثم إضافة الصوت المحلي',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'ما يعنيه تشغيل منزلك الذكي بنموذج لغوي محلي',
        content:
          '**يعني ذلك أن نموذجًا لغويًا مستضافًا محليًا يجلس بينك وبين أجهزتك، يترجم النية باللغة الطبيعية إلى إجراءات Home Assistant ويتخذ قرارات أتمتة لم تستطع قاعدة ثابتة اتخاذها.** يؤدي النموذج اللغوي دورين: عميل محادثة (تتحدث وهو يتصرف) وعقل أتمتة (يستنتج من السياق).',
        items: [
          '**عميل المحادثة:** تقول أو تكتب "اجعل غرفة المعيشة مريحة" فيربط النموذج تلك النية باستدعاءات أجهزة محددة — خفِّف الأضواء، واضبط لونًا دافئًا، واخفِض الستائر.',
          '**عقل الأتمتة:** بدلًا من مشغِّل واحد → إجراء واحد، يمكن للنموذج الموازنة بين السياق: وقت اليوم، ومن في المنزل، وحالات الاستشعار، وهدف باللغة الطبيعية.',
          '**محلي بالتصميم:** يعمل النموذج عبر Ollama على جهازك الخاص، لذا لا تُرسَل أوامرك ولا حالة منزلك إلى جهة خارجية.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: 'لماذا أصبح ممكنًا في 2026',
        content:
          '**تقاطعت ثلاثة أشياء: أصبحت النماذج الصغيرة قادرة بما يكفي للتحكم في المنزل، واكتسبت استدعاء وظائف موثوقًا، وأصدر Home Assistant تكاملًا متميزًا مع النماذج اللغوية.** لم يكن أي من هذه الأشياء متوفرًا معًا للمستخدمين المنزليين قبل سنوات قليلة.',
        items: [
          '**نماذج صغيرة قادرة:** النماذج في النطاق 3B–8B تتبع التعليمات بما يكفي لتعيين النية إلى إجراءات الأجهزة، وتناسب الأجهزة المتواضعة. لمعرفة آليات النموذج والتحجيم، راجع [ما هي النماذج اللغوية المحلية](/ar/local-llms/what-are-local-llms) — هذا الدليل لا يعيد شرحها.',
          '**استدعاء الوظائف / استخدام الأدوات:** يعتمد التحكم في المنزل على إصدار النموذج استدعاءات منظمة (تشغيل، ضبط درجة الحرارة). تدعم النماذج المحلية الحديثة ذلك، وهو ما يجعل التحكم الموثوق ممكنًا.',
          '**تكامل Home Assistant:** يعرض Home Assistant واجهة عميل محادثة وتكاملًا مع Ollama، لذا ربط نموذج محلي بأجهزتك هو خطوة إعداد، وليس بناءً مخصصًا.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'البنية المعمارية: Home Assistant + Ollama + الصوت المحلي',
        content:
          '**البنية ثلاثة مكونات على جهازك الخاص: Home Assistant (الأجهزة + الأتمتة)، وOllama (بيئة تشغيل النموذج المحلي)، وخط أنابيب الصوت المحلي (Assist + Whisper + Piper).** تتدفق البيانات في حلقة لا تغادر شبكتك أبدًا.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'يمتلك أجهزتك وحالات الكيانات والأتمتة، ويعرض واجهة عميل المحادثة. إنه المركز الذي يتصرف من خلاله النموذج — ابدأ من [بدء استخدام Home Assistant](/ar/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'يُشغِّل النموذج المحلي ويقدمه لـ Home Assistant. للتثبيت واختيار النماذج، راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama)؛ يركز هذا الدليل على ربط المنزل الذكي.' },
          { title: 'عميل المحادثة', whyItMatters: 'إعداد Home Assistant الذي يوجه Assist نحو نموذج Ollama حتى تصبح اللغة الطبيعية إجراءات على الأجهزة — التعليمات التفصيلية في [ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration).' },
          { title: 'الصوت المحلي (اختياري)', whyItMatters: 'يحوِّل Whisper الكلام إلى نص ويقرأ Piper الردود، فتحصل على مساعد صوتي يعمل بالكامل دون اتصال — راجع [بناء مساعد صوتي محلي كامل](/ar/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'ما يُفتحه مقارنةً بالأتمتة القائمة على القواعد',
        content:
          '**يُضيف نموذج لغوي محلي مرونة ولغة طبيعية وسياقًا لا تستطيع الأتمتة القائمة على القواعد التعبير عنه — مقابل مزيد من الإعداد والأجهزة.** استخدم القواعد للمشغلات الحتمية؛ واستخدم النموذج اللغوي حيث تهم النية والسياق.',
        columns: ['الجانب', 'الأتمتة القائمة على القواعد', 'أتمتة النموذج اللغوي المحلي'],
        rows: [
          { 'الجانب': 'المرونة', 'الأتمتة القائمة على القواعد': 'مشغِّل ثابت → إجراء ثابت', 'أتمتة النموذج اللغوي المحلي': 'يفسّر الأهداف ويتكيف مع السياق' },
          { 'الجانب': 'اللغة الطبيعية', 'الأتمتة القائمة على القواعد': 'لا شيء — تُبرمج الشروط بدقة', 'أتمتة النموذج اللغوي المحلي': 'أوامر ونوايا بلغة طبيعية' },
          { 'الجانب': 'الوعي بالسياق', 'الأتمتة القائمة على القواعد': 'فقط الحالات التي تبرمجها', 'أتمتة النموذج اللغوي المحلي': 'يستنتج من الوقت والحضور وأجهزة الاستشعار' },
          { 'الجانب': 'الإعداد', 'الأتمتة القائمة على القواعد': 'بسيط لكل قاعدة', 'أتمتة النموذج اللغوي المحلي': 'أعلى — مركز + نموذج + ربط' },
          { 'الجانب': 'متطلبات الأجهزة', 'الأتمتة القائمة على القواعد': 'طفيفة (جهاز Pi)', 'أتمتة النموذج اللغوي المحلي': 'جهاز كمبيوتر مصغر؛ GPU/NPU يساعد في الكمون' },
        ],
        items: [
          'لأمثلة أتمتة ملموسة والمطالبات الكامنة وراءها، راجع [أتمتة أذكى مع نموذج لغوي محلي](/ar/smart-home/ai-automations-local-llm).',
          'احتفظ بالأتمتة الأمنية الحتمية (إنذارات الدخان، أقفال الأبواب) كقواعد عادية — لا تمررها عبر النموذج.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'واقع الأجهزة',
        content:
          '**يمكنك تشغيل Home Assistant ونموذج محلي صغير على جهاز كمبيوتر مصغر واحد؛ GPU أو iGPU قادر أو NPU يخفض كمون الاستجابة.** لا يعيد هذا الدليل شرح VRAM أو تكميم النماذج — راجع الروابط لمزيد من التفاصيل.',
        items: [
          '**جهاز واحد يكفي:** يمكن لجهاز كمبيوتر مصغر استضافة Home Assistant مع نموذج صغير عبر Ollama. للتوصيات، راجع [أفضل أجهزة الكمبيوتر المصغرة لـ Home Assistant + الذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**الكمون يتناسب مع الأجهزة:** النماذج الأكبر والاستنتاج بالمعالج المركزي فقط يستجيبان بشكل أبطأ؛ GPU أو iGPU/NPU حديث يقلل الفجوة نحو مساعد أسرع استجابة. لتفاصيل VRAM وتحجيم النموذج، راجع [أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          '**اختر النموذج للمهمة:** يكافئ التحكم في المنزل النماذج الصغيرة السريعة التي تدعم استدعاء الوظائف على حساب الأكبر المتاح — راجع [أفضل النماذج اللغوية المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'مسارك خطوة بخطوة',
        content:
          '**ابنِ بالترتيب: Home Assistant، ثم Ollama، ثم عميل المحادثة، ثم الصوت والأتمتة.** كل خطوة مغطاة في دليل مركّز حتى تبقى هذه المقالة الرئيسية خريطة، لا جدارًا من الأوامر.',
        numberedItems: [
          'أعدّ Home Assistant على جهاز كمبيوتر مصغر — [دليل البدء](/ar/smart-home/home-assistant-getting-started).',
          'ثبِّت Ollama واسحب نموذجًا صغيرًا — [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
          'اربط Ollama بـ Home Assistant واجعله عميل المحادثة — [دليل التكامل](/ar/smart-home/home-assistant-ollama-integration).',
          'اختر نموذجًا مُعدًّا للتحكم في المنزل — [أفضل النماذج اللغوية المحلية للمنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home).',
          'أضف واجهة صوتية محلية كاملة — [مساعد صوتي محلي](/ar/smart-home/local-voice-assistant-smart-home).',
          'صمِّم أتمتة واعية بالسياق — [أتمتة الذكاء الاصطناعي مع نموذج لغوي محلي](/ar/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'أي نموذج محلي هو الأفضل للتحكم في المنزل؟', a: 'نموذج صغير يتبع التعليمات ويدعم استدعاء الوظائف بشكل موثوق — عادةً في نطاق 3B إلى 8B — هو الأنسب، لأن التحكم في المنزل يحتاج إلى استجابات سريعة ومنظمة لا إلى أكبر نموذج. يعتمد الاختيار الصحيح على أجهزتك؛ راجع دليل أفضل النماذج اللغوية المحلية للمنزل الذكي للخيارات الحالية.' },
          { q: 'هل أحتاج إلى GPU لتشغيل منزل ذكي بنموذج لغوي محلي؟', a: 'لا، لكنها تساعد. يعمل نموذج صغير على معالج مركزي حديث أو GPU متكاملة قادرة؛ GPU منفصلة أو NPU تخفض الكمون أساسًا لتشعر بمساعد أسرع. طابق حجم النموذج مع أجهزتك بدلًا من شراء أكبر GPU.' },
          { q: 'هل يعمل المنزل الذكي بنموذج لغوي محلي دون إنترنت؟', a: 'نعم. يعمل النموذج محليًا عبر Ollama ويتحكم Home Assistant في الأجهزة عبر شبكتك المحلية، لذا يعمل التحكم بلغة طبيعية والأتمتة دون إنترنت. الوصول عن بُعد من خارج المنزل فقط يحتاج اتصالًا.' },
          { q: 'هل النموذج اللغوي المحلي أسرع من Alexa؟', a: 'يعتمد على الأجهزة وحجم النموذج. المساعدون السحابيون مضبوطون لكمون منخفض، بينما يتبادل النموذج اللغوي المحلي بعض السرعة مقابل الخصوصية والعمل دون اتصال؛ على جهاز كمبيوتر مصغر مزود بـ GPU تضيق الفجوة. الميزة الحاسمة هي الخصوصية والتحكم، وليس السرعة المطلقة.' },
          { q: 'هل يمكن للمنزل الذكي بنموذج لغوي محلي أن يعمل على Raspberry Pi؟', a: 'يعمل Raspberry Pi مع Home Assistant بشكل جيد، لكن استنتاج النموذج اللغوي على Pi مقيّد بنماذج صغيرة جدًا وبطيء. جهاز كمبيوتر مصغر مزود بـ iGPU/NPU قادرة أو GPU منفصلة هو الاختيار الأفضل لمساعد محلي استجابته سريعة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — التكامل خطوة بخطوة',
          '[بناء مساعد صوتي محلي كامل](/ar/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[أتمتة أذكى مع نموذج لغوي محلي](/ar/smart-home/ai-automations-local-llm) — قواعد واعية بالسياق ومطالبات',
          '[أفضل النماذج اللغوية المحلية للتحكم في المنزل الذكي](/ar/smart-home/best-local-llm-models-smart-home) — اختيار النموذج',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — الركيزة المحلية أولًا',
          '[عملاء الذكاء الاصطناعي المحليون المستقلون الذين يعملون فعلًا](/ar/power-local-llm/autonomous-local-agents-actually-work) — عبر المجموعات: وكلاء الذكاء الاصطناعي المحلي وتدفقات العمل',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'شغِّل منزلك الذكي بنموذج لغوي محلي (دليل 2026)',
      description: 'المنزل الذكي بنموذج لغوي محلي 2026: التحكم بلغة طبيعية والأتمتة الواعية بالسياق عبر Home Assistant + Ollama. بدون سحابة.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'نموذج لغوي محلي' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'أتمتة المنزل' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'أي نموذج محلي هو الأفضل للتحكم في المنزل؟', acceptedAnswer: { '@type': 'Answer', text: 'نموذج صغير يتبع التعليمات ويدعم استدعاء الوظائف بشكل موثوق، عادةً 3B إلى 8B، هو الأنسب لأن التحكم في المنزل يحتاج استجابات سريعة ومنظمة لا إلى أكبر نموذج.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى GPU لتشغيل منزل ذكي بنموذج لغوي محلي؟', acceptedAnswer: { '@type': 'Answer', text: 'لا، لكنها تساعد. يعمل نموذج صغير على معالج مركزي حديث أو GPU متكاملة قادرة؛ GPU منفصلة أو NPU تخفض الكمون أساسًا.' } },
        { '@type': 'Question', name: 'هل يعمل المنزل الذكي بنموذج لغوي محلي دون إنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يعمل النموذج محليًا عبر Ollama ويتحكم Home Assistant في الأجهزة عبر شبكتك المحلية، لذا يعمل التحكم والأتمتة دون إنترنت.' } },
        { '@type': 'Question', name: 'هل النموذج اللغوي المحلي أسرع من Alexa؟', acceptedAnswer: { '@type': 'Answer', text: 'يعتمد على الأجهزة وحجم النموذج. المساعدون السحابيون مضبوطون لكمون منخفض؛ يتبادل النموذج اللغوي المحلي بعض السرعة مقابل الخصوصية والعمل دون اتصال، وعلى جهاز مصغر مزود بـ GPU تضيق الفجوة.' } },
        { '@type': 'Question', name: 'هل يمكن للمنزل الذكي بنموذج لغوي محلي أن يعمل على Raspberry Pi؟', acceptedAnswer: { '@type': 'Answer', text: 'Pi يعمل مع Home Assistant بشكل جيد، لكن استنتاج النموذج اللغوي على Pi مقيّد بنماذج صغيرة جدًا وبطيء. جهاز كمبيوتر مصغر مزود بـ iGPU/NPU قادرة أو GPU منفصلة أفضل.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Ihr Smart Home mit einem lokalen LLM betreiben (Leitfaden 2026)',
    seoTitle: 'Lokales LLM Smart Home 2026: Der komplette Leitfaden',
    intro:
      'Ein lokales LLM kann heute als Gehirn Ihres Smart Homes dienen – es interpretiert natürlichsprachliche Befehle, führt kontextbewusste Automatisierungen aus und betreibt einen privaten Sprachassistenten, alles auf eigener Hardware und ohne Cloud. Dieser Leitfaden erklärt, was das bedeutet, warum es 2026 praxistauglich wurde, die Architektur aus Home Assistant + Ollama + lokaler Sprache, was es gegenüber regelbasierter Automatisierung freischaltet und den Schritt-für-Schritt-Weg zum Aufbau.',
    metaDescription:
      'Smart Home mit lokalem LLM 2026: Natürlichsprachliche Steuerung und kontextbewusste Automatisierungen via Home Assistant + Ollama. Kein Cloud-Dienst.',
    twitterDescription:
      'Nutzen Sie ein lokales LLM als Smart-Home-Gehirn: natürlichsprachliche Steuerung und kontextbewusste Automatisierungen über Home Assistant + Ollama. Null Cloud.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die ihrem Smart Home lokale KI-Steuerung hinzufügen',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'lokales llm smart home',
      'home assistant lokales llm',
      'ollama smart home',
      'natürlichsprachliche heimautomatisierung',
      'lokale ki home assistant',
    ],
    leadAnswerBlock:
      '**Sie können Ihr Smart Home mit einem lokalen LLM betreiben, indem Sie Ollama mit Home Assistant verbinden und das Modell als Konversations-Agent und Automatisierungs-Gehirn nutzen – natürlichsprachliche Gerätesteuerung, vollständig auf eigener Hardware und ohne Cloud.** Praxistauglich wurde es 2026, weil kleine, leistungsfähige Modelle mit Function-Calling jetzt auf einem Mini-PC laufen.',
    quickAnswerTop: {
      de: {
        question: 'Kann man ein Smart Home mit einem lokalen LLM betreiben?',
        answer:
          'Ja. Home Assistant lässt sich mit Ollama verbinden, sodass ein lokal gehostetes Modell als Konversations-Agent dient und natürlichsprachliche Anfragen in Geräteaktionen übersetzt. Das Modell läuft auf eigener Hardware, sodass Steuerung und Automatisierungen ohne Cloud funktionieren und keine Daten das Haus verlassen. Ein kleines Modell auf einem Mini-PC reicht für die Heimsteuerung.',
        bullets: [
          'Home Assistant + Ollama = lokales Modell als Konversations-Agent',
          'Natürlichsprachliche Steuerung: „Dimme die Küche und starte den Wasserkocher"',
          'Kontextbewusste Automatisierungen jenseits starrer Wenn-Dann-Regeln',
          'Läuft offline auf eigener Hardware – keine Cloud, keine Protokollierung',
          'Ein kleines Function-Calling-Modell auf einem Mini-PC bewältigt die Heimsteuerung',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was es bedeutet', anchor: 'what-it-means' },
      { label: 'Warum es 2026 funktioniert', anchor: 'why-2026' },
      { label: 'Die Architektur', anchor: 'architecture' },
      { label: 'Was es freischaltet', anchor: 'what-it-unlocks' },
      { label: 'Hardware-Realität', anchor: 'hardware' },
      { label: 'Schritt-für-Schritt-Weg', anchor: 'step-by-step' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Verbinden Sie Ollama mit Home Assistant, und ein lokal gehostetes Modell wird zum Gehirn Ihres Smart Homes – natürlichsprachliche Steuerung und kontextbewusste Automatisierungen, ohne Cloud.' },
      { type: 'plain-terms', content: 'Klassische Smart-Home-Automatisierungen sind starre Regeln: bei Bewegung Licht an. Ein lokales LLM ergänzt eine Schicht, die natürliche Sprache und Kontext versteht – Sie können sagen „Ich gehe raus", und es kann entscheiden, was auszuschalten ist. Das Modell läuft über Ollama auf Ihrem eigenen Rechner und bindet sich in Home Assistant ein, sodass nichts davon von einem Cloud-Dienst abhängt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant hat eine integrierte Ollama-Anbindung; ein lokales Modell wird zum Konversations-Agent',
          'Sie steuern Geräte in natürlicher Sprache, statt exakte Befehlsphrasen zu merken',
          'Das Modell kann kontextbewusste Automatisierungen ausführen, die starre Regeln nicht ausdrücken',
          'Alles läuft auf eigener Hardware – keine Cloud, keine Nutzungsdaten, die das Haus verlassen',
          'Ein kleines Function-Calling-Modell auf einem Mini-PC genügt; eine GPU oder leistungsfähige iGPU/NPU senkt die Latenz',
          'Reihenfolge: erst Home Assistant, dann Ollama, dann den Konversations-Agent verbinden, dann lokale Sprache ergänzen',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Was es bedeutet, das Smart Home mit einem lokalen LLM zu betreiben',
        content:
          '**Es bedeutet, dass ein lokal gehostetes Sprachmodell zwischen Ihnen und Ihren Geräten sitzt, natürlichsprachliche Absichten in Home-Assistant-Aktionen übersetzt und Automatisierungsentscheidungen trifft, die eine feste Regel nicht treffen könnte.** Das LLM spielt zwei Rollen: Konversations-Agent (Sie sprechen, es handelt) und Automatisierungs-Gehirn (es schließt über den Kontext).',
        items: [
          '**Konversations-Agent:** Sie sagen oder tippen „Mach das Wohnzimmer gemütlich", und das Modell ordnet diese Absicht konkreten Geräteaufrufen zu – Licht dimmen, warme Farbe einstellen, Rollos herunterfahren.',
          '**Automatisierungs-Gehirn:** Statt ein Auslöser → eine Aktion kann das Modell den Kontext abwägen: Tageszeit, wer zu Hause ist, Sensorzustände und ein natürlichsprachliches Ziel.',
          '**Lokal von Grund auf:** Das Modell läuft über Ollama auf Ihrem eigenen Rechner, sodass weder Ihre Befehle noch Ihr Heimzustand an Dritte gesendet werden.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: 'Warum es 2026 funktioniert',
        content:
          '**Drei Dinge kamen zusammen: Kleine Modelle wurden leistungsfähig genug für die Heimsteuerung, sie erhielten zuverlässiges Function-Calling, und Home Assistant lieferte eine erstklassige LLM-Anbindung.** Keines davon existierte bis vor wenigen Jahren gemeinsam für Privatanwender.',
        items: [
          '**Leistungsfähige kleine Modelle:** Modelle im Bereich 3B–8B folgen Anweisungen jetzt gut genug, um Absicht in Geräteaktionen zu übersetzen, und passen auf bescheidene Hardware. Zur Modellmechanik und Größenwahl siehe [was lokale LLMs sind](/de/local-llms/what-are-local-llms) – dieser Leitfaden erklärt sie nicht erneut.',
          '**Function-Calling / Tool-Nutzung:** Die Heimsteuerung hängt davon ab, dass das Modell strukturierte Aufrufe ausgibt (einschalten, Temperatur setzen). Moderne lokale Modelle unterstützen das, was zuverlässige Steuerung erst möglich macht.',
          '**Home-Assistant-Anbindung:** Home Assistant stellt eine Konversations-Agent-Schnittstelle und eine Ollama-Anbindung bereit, sodass das Verbinden eines lokalen Modells mit Ihren Geräten ein Konfigurationsschritt ist, kein Eigenbau.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Die Architektur: Home Assistant + Ollama + lokale Sprache',
        content:
          '**Der Stack besteht aus drei Komponenten auf eigener Hardware: Home Assistant (Geräte + Automatisierungen), Ollama (die lokale Modell-Laufzeit) und eine lokale Sprach-Pipeline (Assist + Whisper + Piper).** Die Daten fließen in einer Schleife, die das Netzwerk nie verlässt.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Verwaltet Ihre Geräte, Entitätszustände und Automatisierungen und stellt die Konversations-Agent-Schnittstelle bereit. Es ist der Hub, über den das Modell handelt – beginnen Sie bei [Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Betreibt das lokale Modell und stellt es Home Assistant bereit. Zur Installation und Modellwahl verweisen wir auf [Ollama installieren](/de/local-llms/how-to-install-ollama); dieser Leitfaden bleibt bei der Smart-Home-Verkabelung.' },
          { title: 'Konversations-Agent', whyItMatters: 'Die Home-Assistant-Einstellung, die Assist auf das Ollama-Modell richtet, sodass natürliche Sprache zu Geräteaktionen wird – die Schritt-für-Schritt-Anleitung steht in [Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration).' },
          { title: 'Lokale Sprache (optional)', whyItMatters: 'Whisper transkribiert Sprache und Piper spricht Antworten, sodass Sie einen vollständig offline arbeitenden Sprachassistenten erhalten – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'Was es gegenüber regelbasierter Automatisierung freischaltet',
        content:
          '**Ein lokales LLM bringt Flexibilität, natürliche Sprache und Kontext, die regelbasierte Automatisierung nicht ausdrücken kann – im Tausch gegen mehr Einrichtung und Hardware.** Nutzen Sie Regeln für deterministische Auslöser; das LLM dort, wo Absicht und Kontext zählen.',
        columns: ['Aspekt', 'Regelbasierte Automatisierung', 'Lokale-LLM-Automatisierung'],
        rows: [
          { 'Aspekt': 'Flexibilität', 'Regelbasierte Automatisierung': 'Fester Auslöser → feste Aktion', 'Lokale-LLM-Automatisierung': 'Interpretiert Ziele und passt sich dem Kontext an' },
          { 'Aspekt': 'Natürliche Sprache', 'Regelbasierte Automatisierung': 'Keine – Sie verdrahten exakte Bedingungen', 'Lokale-LLM-Automatisierung': 'Natürlichsprachliche Befehle und Absichten' },
          { 'Aspekt': 'Kontextbewusstsein', 'Regelbasierte Automatisierung': 'Nur die Zustände, die Sie skripten', 'Lokale-LLM-Automatisierung': 'Schließt über Zeit, Anwesenheit, Sensoren' },
          { 'Aspekt': 'Einrichtung', 'Regelbasierte Automatisierung': 'Einfach pro Regel', 'Lokale-LLM-Automatisierung': 'Höher – Hub + Modell + Verkabelung' },
          { 'Aspekt': 'Hardwarebedarf', 'Regelbasierte Automatisierung': 'Minimal (ein Pi)', 'Lokale-LLM-Automatisierung': 'Ein Mini-PC; GPU/NPU hilft bei der Latenz' },
        ],
        items: [
          'Konkrete Automatisierungsbeispiele und die zugehörigen Prompts finden Sie unter [smartere Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm).',
          'Behalten Sie deterministische Sicherheitsautomatisierungen (Rauchmelder, Türschlösser) als einfache Regeln – leiten Sie sie nicht durch das Modell.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Die Hardware-Realität',
        content:
          '**Sie können Home Assistant und ein kleines lokales Modell auf einem einzigen Mini-PC betreiben; eine GPU, leistungsfähige iGPU oder NPU senkt die Antwortlatenz.** Dieser Leitfaden erklärt VRAM oder Modell-Quantisierung nicht erneut – dafür verweisen wir nach außen.',
        items: [
          '**Eine Box genügt:** Ein Mini-PC kann Home Assistant plus ein kleines Modell über Ollama hosten. Empfehlungen siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**Latenz skaliert mit der Hardware:** Größere Modelle und reine CPU-Inferenz antworten langsamer; eine GPU oder moderne iGPU/NPU verkürzt den Abstand zu einem flotten Assistenten. Zu VRAM und Modellgröße siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          '**Wählen Sie das Modell für die Aufgabe:** Heimsteuerung belohnt kleine, schnelle Function-Calling-Modelle gegenüber dem größten verfügbaren – siehe [beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Ihr Schritt-für-Schritt-Weg',
        content:
          '**Bauen Sie in dieser Reihenfolge: Home Assistant, dann Ollama, dann der Konversations-Agent, dann Sprache und Automatisierungen.** Jeder Schritt ist in einer eigenen Anleitung behandelt, damit dieser Flaggschiff-Artikel eine Landkarte bleibt, keine Befehlswüste.',
        numberedItems: [
          'Richten Sie Home Assistant auf einem Mini-PC ein – [Erste-Schritte-Leitfaden](/de/smart-home/home-assistant-getting-started).',
          'Installieren Sie Ollama und laden Sie ein kleines Modell – [Ollama installieren](/de/local-llms/how-to-install-ollama).',
          'Verbinden Sie Ollama mit Home Assistant und setzen Sie es als Konversations-Agent – [Anbindungs-Anleitung](/de/smart-home/home-assistant-ollama-integration).',
          'Wählen Sie ein für die Heimsteuerung abgestimmtes Modell – [beste lokale LLM-Modelle fürs Smart Home](/de/smart-home/best-local-llm-models-smart-home).',
          'Ergänzen Sie ein vollständig lokales Sprach-Frontend – [lokaler Sprachassistent](/de/smart-home/local-voice-assistant-smart-home).',
          'Entwerfen Sie kontextbewusste Automatisierungen – [KI-Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Welches lokale Modell eignet sich am besten für die Heimsteuerung?', a: 'Ein kleines, anweisungsfolgendes Modell mit zuverlässigem Function-Calling – typischerweise im Bereich 3B bis 8B – passt am besten, weil die Heimsteuerung schnelle, strukturierte Antworten braucht statt des größten Modells. Die richtige Wahl hängt von Ihrer Hardware ab; siehe den Leitfaden zu den besten lokalen LLM-Modellen fürs Smart Home für aktuelle Optionen.' },
          { q: 'Brauche ich eine GPU für ein lokales LLM-Smart-Home?', a: 'Nein, aber sie hilft. Ein kleines Modell läuft auf einer modernen CPU oder leistungsfähigen integrierten GPU; eine dedizierte GPU oder NPU senkt vor allem die Antwortlatenz, sodass sich der Assistent flotter anfühlt. Passen Sie die Modellgröße an Ihre Hardware an, statt die größte GPU zu kaufen.' },
          { q: 'Funktioniert ein lokales LLM-Smart-Home offline?', a: 'Ja. Das Modell läuft lokal über Ollama, und Home Assistant steuert Geräte über Ihr LAN, sodass natürlichsprachliche Steuerung und Automatisierungen ohne Internet funktionieren. Nur der Fernzugriff von außerhalb des Hauses benötigt eine Verbindung.' },
          { q: 'Ist ein lokales LLM schneller als Alexa?', a: 'Das hängt von Hardware und Modellgröße ab. Cloud-Assistenten wie Alexa sind auf niedrige Latenz optimiert, während ein lokales LLM etwas Geschwindigkeit gegen Privatsphäre und Offline-Betrieb eintauscht; auf einem GPU-bestückten Mini-PC verringert sich der Abstand. Der entscheidende Vorteil ist Privatsphäre und Kontrolle, nicht reine Geschwindigkeit.' },
          { q: 'Kann ein lokales LLM-Smart-Home auf einem Raspberry Pi laufen?', a: 'Ein Raspberry Pi betreibt Home Assistant gut, aber LLM-Inferenz auf einem Pi ist auf sehr kleine Modelle beschränkt und langsam. Für einen reaktionsschnellen lokalen LLM-Assistenten ist ein Mini-PC mit leistungsfähiger iGPU/NPU oder einer dedizierten GPU die bessere Wahl.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – die Schritt-für-Schritt-Anbindung',
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – Assist + Whisper + Piper',
          '[Smartere Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm) – kontextbewusste Regeln und Prompts',
          '[Beste lokale LLM-Modelle für die Smart-Home-Steuerung](/de/smart-home/best-local-llm-models-smart-home) – Modellauswahl',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – die Local-First-Säule',
          '[Autonome lokale Agenten, die wirklich funktionieren](/de/power-local-llm/autonomous-local-agents-actually-work) – clusterübergreifend: lokale KI-Agenten und Workflows',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ihr Smart Home mit einem lokalen LLM betreiben (Leitfaden 2026)',
      description: 'Smart Home mit lokalem LLM 2026: Natürlichsprachliche Steuerung und kontextbewusste Automatisierungen via Home Assistant + Ollama. Kein Cloud-Dienst.',
      url: 'https://www.promptquorum.com/de/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Lokales LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Heimautomatisierung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welches lokale Modell eignet sich am besten für die Heimsteuerung?', acceptedAnswer: { '@type': 'Answer', text: 'Ein kleines, anweisungsfolgendes Modell mit zuverlässigem Function-Calling, typischerweise 3B bis 8B, passt am besten, weil die Heimsteuerung schnelle strukturierte Antworten braucht statt des größten Modells.' } },
        { '@type': 'Question', name: 'Brauche ich eine GPU für ein lokales LLM-Smart-Home?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, aber sie hilft. Ein kleines Modell läuft auf einer modernen CPU oder integrierten GPU; eine dedizierte GPU oder NPU senkt vor allem die Antwortlatenz.' } },
        { '@type': 'Question', name: 'Funktioniert ein lokales LLM-Smart-Home offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das Modell läuft lokal über Ollama, und Home Assistant steuert Geräte über Ihr LAN, sodass Steuerung und Automatisierungen ohne Internet funktionieren.' } },
        { '@type': 'Question', name: 'Ist ein lokales LLM schneller als Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt von Hardware und Modellgröße ab. Cloud-Assistenten sind auf niedrige Latenz optimiert; ein lokales LLM tauscht etwas Geschwindigkeit gegen Privatsphäre und Offline-Betrieb, und auf einem GPU-Mini-PC verringert sich der Abstand.' } },
        { '@type': 'Question', name: 'Kann ein lokales LLM-Smart-Home auf einem Raspberry Pi laufen?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pi betreibt Home Assistant gut, aber LLM-Inferenz auf einem Pi ist auf sehr kleine, langsame Modelle beschränkt. Ein Mini-PC mit leistungsfähiger iGPU/NPU oder dedizierter GPU ist besser.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Ejecuta Tu Smart Home con un LLM Local (Guía 2026)',
    seoTitle: 'LLM Local Smart Home 2026: La Guía Completa',
    intro:
      'Un LLM local ya puede actuar como el cerebro de tu smart home: interpreta comandos en lenguaje natural, ejecuta automatizaciones contextuales y alimenta un asistente de voz privado, todo en hardware propio y sin nube. Esta guía explica qué significa, por qué se volvió práctico en 2026, la arquitectura Home Assistant + Ollama + voz local, qué desbloquea frente a la automatización por reglas y el camino paso a paso para montarlo.',
    metaDescription:
      'Smart home con LLM local 2026: control en lenguaje natural y automatizaciones contextuales via Home Assistant + Ollama. Sin nube.',
    twitterDescription:
      'Usa un LLM local como cerebro de tu smart home: control en lenguaje natural y automatizaciones contextuales vía Home Assistant + Ollama. Cero nube.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que añaden control con IA local a su smart home',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'llm local smart home',
      'home assistant llm local',
      'ollama smart home',
      'automatización del hogar lenguaje natural',
      'ia local home assistant',
    ],
    leadAnswerBlock:
      '**Puedes ejecutar tu smart home con un LLM local conectando Ollama a Home Assistant y usando el modelo como agente de conversación y cerebro de automatización: control de dispositivos en lenguaje natural, todo en tu propio hardware y sin nube.** Se volvió práctico en 2026 porque modelos pequeños, capaces y con function-calling ya corren en un mini PC.',
    quickAnswerTop: {
      es: {
        question: '¿Se puede ejecutar un smart home con un LLM local?',
        answer:
          'Sí. Home Assistant se integra con Ollama para que un modelo alojado localmente actúe como agente de conversación, convirtiendo peticiones en lenguaje natural en acciones de dispositivos. El modelo corre en tu propio hardware, así que el control y las automatizaciones funcionan sin nube y sin que los datos salgan de casa. Un modelo pequeño en un mini PC basta para el control del hogar.',
        bullets: [
          'Home Assistant + Ollama = modelo local como agente de conversación',
          'Control en lenguaje natural: "atenúa la cocina y enciende el hervidor"',
          'Automatizaciones contextuales más allá de reglas rígidas si-esto-entonces',
          'Corre sin conexión en tu hardware: sin nube, sin registro de uso',
          'Un modelo pequeño con function-calling en un mini PC maneja el control del hogar',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué significa', anchor: 'what-it-means' },
      { label: 'Por qué funciona en 2026', anchor: 'why-2026' },
      { label: 'La arquitectura', anchor: 'architecture' },
      { label: 'Qué desbloquea', anchor: 'what-it-unlocks' },
      { label: 'Realidad del hardware', anchor: 'hardware' },
      { label: 'Camino paso a paso', anchor: 'step-by-step' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Conecta Ollama a Home Assistant y un modelo alojado localmente se convierte en el cerebro de tu smart home: control en lenguaje natural y automatizaciones contextuales, sin nube.' },
      { type: 'plain-terms', content: 'Las automatizaciones tradicionales del hogar son reglas rígidas: si hay movimiento, enciende la luz. Un LLM local añade una capa que entiende lenguaje natural y contexto: puedes decir "voy a salir" y puede decidir qué apagar. El modelo corre vía Ollama en tu propia máquina y se conecta a Home Assistant, así que nada de esto depende de un servicio en la nube.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant tiene una integración con Ollama incorporada; un modelo local se convierte en el agente de conversación',
          'Controlas dispositivos en lenguaje natural en lugar de memorizar frases exactas',
          'El modelo puede ejecutar automatizaciones contextuales que las reglas rígidas no expresan',
          'Todo corre en tu hardware: sin nube, sin datos de uso saliendo de casa',
          'Un modelo pequeño con function-calling en un mini PC basta; una GPU o iGPU/NPU capaz reduce la latencia',
          'Orden de montaje: primero Home Assistant, luego Ollama, luego conectar el agente de conversación, luego añadir voz local',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Qué significa ejecutar tu smart home con un LLM local',
        content:
          '**Significa que un modelo de lenguaje alojado localmente se sitúa entre tú y tus dispositivos, traduciendo la intención en lenguaje natural a acciones de Home Assistant y tomando decisiones de automatización que una regla fija no podría.** El LLM cumple dos papeles: agente de conversación (tú hablas, él actúa) y cerebro de automatización (razona sobre el contexto).',
        items: [
          '**Agente de conversación:** dices o escribes "pon el salón acogedor" y el modelo asigna esa intención a llamadas concretas de dispositivos: atenuar luces, fijar un color cálido, bajar las persianas.',
          '**Cerebro de automatización:** en lugar de un disparador → una acción, el modelo puede sopesar el contexto: hora del día, quién está en casa, estados de sensores y un objetivo en lenguaje natural.',
          '**Local por diseño:** el modelo corre vía Ollama en tu propia máquina, así que ni tus comandos ni el estado de tu hogar se envían a terceros.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: 'Por qué funciona en 2026',
        content:
          '**Convergieron tres cosas: los modelos pequeños se volvieron lo bastante capaces para el control del hogar, ganaron function-calling fiable y Home Assistant lanzó una integración LLM de primera clase.** Ninguna de ellas existía junta para usuarios domésticos hace pocos años.',
        items: [
          '**Modelos pequeños capaces:** los modelos de 3B–8B ya siguen instrucciones lo bastante bien para asignar intención a acciones de dispositivos, y caben en hardware modesto. Para la mecánica y el tamaño de modelo, consulta [qué son los LLM locales](/es/local-llms/what-are-local-llms): esta guía no lo reexplica.',
          '**Function-calling / uso de herramientas:** el control del hogar depende de que el modelo emita llamadas estructuradas (encender, fijar temperatura). Los modelos locales modernos lo admiten, y eso es lo que hace posible el control fiable.',
          '**Integración de Home Assistant:** Home Assistant expone una interfaz de agente de conversación y una integración con Ollama, así que conectar un modelo local a tus dispositivos es un paso de configuración, no un desarrollo a medida.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'La arquitectura: Home Assistant + Ollama + voz local',
        content:
          '**El stack son tres componentes en tu propio hardware: Home Assistant (dispositivos + automatizaciones), Ollama (el runtime del modelo local) y una pipeline de voz local (Assist + Whisper + Piper).** Los datos fluyen en un bucle que nunca sale de tu red.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Gestiona tus dispositivos, estados de entidades y automatizaciones, y expone la interfaz de agente de conversación. Es el hub a través del cual actúa el modelo: empieza en [Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Ejecuta el modelo local y lo sirve a Home Assistant. Para instalar y elegir modelos, consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama); esta guía se centra en el cableado del smart home.' },
          { title: 'Agente de conversación', whyItMatters: 'El ajuste de Home Assistant que apunta Assist al modelo de Ollama para que el lenguaje natural se convierta en acciones de dispositivos: el paso a paso está en [conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration).' },
          { title: 'Voz local (opcional)', whyItMatters: 'Whisper transcribe el habla y Piper pronuncia las respuestas, así que obtienes un asistente de voz totalmente sin conexión: consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'Qué desbloquea frente a la automatización por reglas',
        content:
          '**Un LLM local aporta flexibilidad, lenguaje natural y contexto que la automatización por reglas no puede expresar, a cambio de más configuración y hardware.** Usa reglas para disparadores deterministas; el LLM donde importan la intención y el contexto.',
        columns: ['Aspecto', 'Automatización por reglas', 'Automatización con LLM local'],
        rows: [
          { 'Aspecto': 'Flexibilidad', 'Automatización por reglas': 'Disparador fijo → acción fija', 'Automatización con LLM local': 'Interpreta objetivos y se adapta al contexto' },
          { 'Aspecto': 'Lenguaje natural', 'Automatización por reglas': 'Ninguno: cableas condiciones exactas', 'Automatización con LLM local': 'Comandos e intenciones en lenguaje natural' },
          { 'Aspecto': 'Conciencia del contexto', 'Automatización por reglas': 'Solo los estados que programas', 'Automatización con LLM local': 'Razona sobre tiempo, presencia, sensores' },
          { 'Aspecto': 'Configuración', 'Automatización por reglas': 'Sencilla por regla', 'Automatización con LLM local': 'Mayor: hub + modelo + cableado' },
          { 'Aspecto': 'Necesidad de hardware', 'Automatización por reglas': 'Mínima (una Pi)', 'Automatización con LLM local': 'Un mini PC; una GPU/NPU ayuda con la latencia' },
        ],
        items: [
          'Para ejemplos concretos de automatización y los prompts detrás, consulta [automatizaciones más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm).',
          'Mantén las automatizaciones de seguridad deterministas (alarma de humo, cerraduras) como reglas simples: no las enrutes por el modelo.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'La realidad del hardware',
        content:
          '**Puedes ejecutar Home Assistant y un modelo local pequeño en un solo mini PC; una GPU, iGPU capaz o NPU reduce la latencia de respuesta.** Esta guía no reexplica la VRAM ni la cuantización de modelos: para esa profundidad, enlaza hacia fuera.',
        items: [
          '**Una sola máquina basta:** un mini PC puede alojar Home Assistant más un modelo pequeño vía Ollama. Para recomendaciones, consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**La latencia escala con el hardware:** los modelos más grandes y la inferencia solo en CPU responden más despacio; una GPU o iGPU/NPU moderna acorta la distancia hasta un asistente ágil. Para VRAM y tamaño de modelo, consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
          '**Elige el modelo según la tarea:** el control del hogar premia modelos pequeños, rápidos y con function-calling frente al más grande disponible: consulta [mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Tu camino paso a paso',
        content:
          '**Monta en orden: Home Assistant, luego Ollama, luego el agente de conversación, luego voz y automatizaciones.** Cada paso se trata en una guía dedicada, para que este artículo insignia siga siendo un mapa y no un muro de comandos.',
        numberedItems: [
          'Configura Home Assistant en un mini PC — [guía de primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Instala Ollama y descarga un modelo pequeño — [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
          'Conecta Ollama a Home Assistant y ponlo como agente de conversación — [guía de integración](/es/smart-home/home-assistant-ollama-integration).',
          'Elige un modelo afinado para el control del hogar — [mejores modelos LLM locales para el smart home](/es/smart-home/best-local-llm-models-smart-home).',
          'Añade un frontend de voz totalmente local — [asistente de voz local](/es/smart-home/local-voice-assistant-smart-home).',
          'Diseña automatizaciones contextuales — [automatizaciones con IA con un LLM local](/es/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el mejor modelo local para el control del hogar?', a: 'Un modelo pequeño que siga instrucciones y con function-calling fiable —normalmente en el rango de 3B a 8B— es el mejor encaje, porque el control del hogar necesita respuestas rápidas y estructuradas más que el modelo más grande. La elección correcta depende de tu hardware; consulta la guía de los mejores modelos LLM locales para el smart home.' },
          { q: '¿Necesito una GPU para un smart home con LLM local?', a: 'No, pero ayuda. Un modelo pequeño corre en una CPU moderna o una GPU integrada capaz; una GPU dedicada o NPU sobre todo reduce la latencia de respuesta para que el asistente se sienta más ágil. Ajusta el tamaño del modelo a tu hardware.' },
          { q: '¿Funciona sin conexión un smart home con LLM local?', a: 'Sí. El modelo corre localmente vía Ollama y Home Assistant controla los dispositivos por tu LAN, así que el control en lenguaje natural y las automatizaciones funcionan sin internet. Solo el acceso remoto desde fuera de casa necesita conexión.' },
          { q: '¿Es un LLM local más rápido que Alexa?', a: 'Depende del hardware y el tamaño del modelo. Los asistentes en la nube como Alexa están afinados para baja latencia, mientras que un LLM local cambia algo de velocidad por privacidad y operación sin conexión; en un mini PC con GPU la distancia se acorta. La ventaja decisiva es la privacidad y el control, no la velocidad bruta.' },
          { q: '¿Puede correr un smart home con LLM local en una Raspberry Pi?', a: 'Una Raspberry Pi ejecuta bien Home Assistant, pero la inferencia de LLM en una Pi se limita a modelos muy pequeños y es lenta. Para un asistente con LLM local ágil, un mini PC con iGPU/NPU capaz o una GPU dedicada es la mejor opción.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — la integración paso a paso',
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[Automatizaciones más inteligentes con un LLM local](/es/smart-home/ai-automations-local-llm) — reglas contextuales y prompts',
          '[Mejores modelos LLM locales para el control del smart home](/es/smart-home/best-local-llm-models-smart-home) — selección de modelo',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el pilar local-first',
          '[Agentes locales autónomos que de verdad funcionan](/es/power-local-llm/autonomous-local-agents-actually-work) — entre clústeres: agentes y flujos de IA local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ejecuta Tu Smart Home con un LLM Local (Guía 2026)',
      description: 'Smart home con LLM local 2026: control en lenguaje natural y automatizaciones contextuales via Home Assistant + Ollama. Sin nube.',
      url: 'https://www.promptquorum.com/es/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Automatización del hogar' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuál es el mejor modelo local para el control del hogar?', acceptedAnswer: { '@type': 'Answer', text: 'Un modelo pequeño que siga instrucciones y con function-calling fiable, normalmente de 3B a 8B, porque el control del hogar necesita respuestas rápidas y estructuradas más que el modelo más grande.' } },
        { '@type': 'Question', name: '¿Necesito una GPU para un smart home con LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'No, pero ayuda. Un modelo pequeño corre en una CPU moderna o GPU integrada; una GPU dedicada o NPU sobre todo reduce la latencia de respuesta.' } },
        { '@type': 'Question', name: '¿Funciona sin conexión un smart home con LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. El modelo corre localmente vía Ollama y Home Assistant controla los dispositivos por tu LAN, así que el control y las automatizaciones funcionan sin internet.' } },
        { '@type': 'Question', name: '¿Es un LLM local más rápido que Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del hardware y el tamaño del modelo. Los asistentes en la nube están afinados para baja latencia; un LLM local cambia algo de velocidad por privacidad y operación sin conexión, y en un mini PC con GPU la distancia se acorta.' } },
        { '@type': 'Question', name: '¿Puede correr un smart home con LLM local en una Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Una Pi ejecuta bien Home Assistant, pero la inferencia de LLM en una Pi se limita a modelos muy pequeños y lentos. Un mini PC con iGPU/NPU capaz o GPU dedicada es mejor.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '로컬 LLM으로 스마트 홈 운영하기 (2026 가이드)',
    seoTitle: '로컬 LLM 스마트 홈 2026: 완전 가이드',
    intro:
      '이제 로컬 LLM이 스마트 홈의 두뇌 역할을 담당할 수 있습니다. 자연어 명령을 해석하고, 문맥 인식 자동화를 실행하며, 프라이빗 음성 어시스턴트를 구동합니다. 이 모든 것이 클라우드 없이 직접 소유한 하드웨어에서 실행됩니다. 이 가이드는 그 의미, 2026년에 실용화된 이유, Home Assistant + Ollama + 로컬 음성 아키텍처, 규칙 기반 자동화 대비 장점, 그리고 구축 단계별 경로를 설명합니다.',
    metaDescription:
      '로컬 LLM 스마트 홈 2026: Home Assistant + Ollama로 자연어 제어와 문맥 인식 자동화를 클라우드 없이 구현하는 완전 가이드.',
    twitterDescription:
      '로컬 LLM을 스마트 홈의 두뇌로 활용하십시오. Home Assistant + Ollama를 통한 자연어 제어와 문맥 인식 자동화. 클라우드 없음.',
    readTime: '12분 분량',
    educationalLevel: 'Intermediate',
    audience: '스마트 홈에 로컬 AI 제어를 추가하는 Home Assistant 사용자',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      '로컬 LLM 스마트 홈',
      'home assistant 로컬 LLM',
      'ollama 스마트 홈',
      '자연어 홈 자동화',
      '로컬 AI home assistant',
    ],
    leadAnswerBlock:
      '**Ollama를 Home Assistant에 연결하고 모델을 대화 에이전트 및 자동화 두뇌로 사용하면 로컬 LLM으로 스마트 홈을 운영할 수 있습니다. 자연어로 기기를 제어하며, 클라우드 없이 직접 소유한 하드웨어에서 모두 실행됩니다.** 소형이면서 function-calling이 가능한 모델이 미니 PC에서 구동되기 시작한 2026년에 실용화되었습니다.',
    quickAnswerTop: {
      ko: {
        question: '로컬 LLM으로 스마트 홈을 운영할 수 있습니까?',
        answer:
          '예. Home Assistant는 Ollama와 연동되므로 로컬에서 호스팅된 모델이 대화 에이전트 역할을 하며 자연어 요청을 기기 동작으로 변환합니다. 모델은 직접 소유한 하드웨어에서 실행되므로 제어와 자동화가 클라우드 없이 작동하며 데이터가 집 밖으로 나가지 않습니다. 미니 PC의 소형 모델로도 홈 컨트롤이 충분합니다.',
        bullets: [
          'Home Assistant + Ollama = 로컬 모델이 대화 에이전트로 동작',
          '자연어 제어: "부엌 조명 어둡게 하고 전기 주전자 켜줘"',
          '경직된 if-then 규칙을 넘어선 문맥 인식 자동화',
          '직접 소유한 하드웨어에서 오프라인으로 동작 — 클라우드 없음, 사용 기록 없음',
          '미니 PC의 소형 function-calling 모델로 홈 컨트롤 처리 가능',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '의미', anchor: 'what-it-means' },
      { label: '2026년에 가능한 이유', anchor: 'why-2026' },
      { label: '아키텍처', anchor: 'architecture' },
      { label: '달성 가능한 것', anchor: 'what-it-unlocks' },
      { label: '하드웨어 현실', anchor: 'hardware' },
      { label: '단계별 경로', anchor: 'step-by-step' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ollama를 Home Assistant에 연결하면 로컬에서 호스팅된 모델이 스마트 홈의 두뇌가 됩니다. 클라우드 없이 자연어 제어와 문맥 인식 자동화를 실현합니다.' },
      { type: 'plain-terms', content: '전통적인 스마트 홈 자동화는 경직된 규칙입니다. 움직임이 감지되면 조명을 켭니다. 로컬 LLM은 자연어와 문맥을 이해하는 계층을 추가합니다. "외출합니다"라고 말하면 무엇을 끌지 결정할 수 있습니다. 모델은 직접 소유한 기기에서 Ollama를 통해 실행되며 Home Assistant에 연결되므로 어떤 것도 클라우드 서비스에 의존하지 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Home Assistant에는 Ollama 통합이 내장되어 있습니다. 로컬 모델이 대화 에이전트가 됩니다.',
          '정확한 명령 문구를 외울 필요 없이 자연어로 기기를 제어합니다.',
          '모델은 경직된 규칙으로는 표현할 수 없는 문맥 인식 자동화를 실행할 수 있습니다.',
          '모든 것이 직접 소유한 하드웨어에서 실행됩니다. 클라우드 없음, 사용 데이터가 집 밖으로 나가지 않습니다.',
          '미니 PC의 소형 function-calling 모델로 충분합니다. GPU 또는 고성능 iGPU/NPU는 지연 시간을 줄입니다.',
          '구축 순서: 먼저 Home Assistant, 다음 Ollama, 대화 에이전트 연결, 마지막으로 로컬 음성 추가',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '로컬 LLM으로 스마트 홈을 운영한다는 의미',
        content:
          '**로컬에서 호스팅된 언어 모델이 사용자와 기기 사이에 위치하여 자연어 의도를 Home Assistant 동작으로 변환하고, 고정 규칙으로는 내릴 수 없는 자동화 결정을 내린다는 것을 의미합니다.** LLM은 두 가지 역할을 담당합니다. 대화 에이전트(말을 하면 행동합니다)와 자동화 두뇌(문맥을 추론합니다)입니다.',
        items: [
          '**대화 에이전트:** "거실을 아늑하게 해줘"라고 말하거나 입력하면 모델이 그 의도를 구체적인 기기 호출로 매핑합니다. 조명을 어둡게 하고 따뜻한 색조로 설정하며 블라인드를 내립니다.',
          '**자동화 두뇌:** 하나의 트리거가 하나의 동작을 유발하는 대신, 모델은 문맥을 고려합니다. 시간대, 재실 여부, 센서 상태, 그리고 자연어로 표현된 목표를 반영합니다.',
          '**설계부터 로컬:** 모델은 직접 소유한 기기에서 Ollama를 통해 실행되므로 명령도, 홈 상태도 제3자에게 전송되지 않습니다.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: '2026년에 가능해진 이유',
        content:
          '**세 가지가 수렴했습니다. 소형 모델이 홈 컨트롤에 충분한 성능을 갖추었고, 신뢰할 수 있는 function-calling을 획득했으며, Home Assistant가 일류 LLM 통합을 출시했습니다.** 이것들이 동시에 가정 사용자에게 제공된 것은 몇 년 전에는 없었던 일입니다.',
        items: [
          '**유능한 소형 모델:** 3B~8B 범위의 모델들이 이제 의도를 기기 동작에 매핑할 만큼 지시를 잘 따르며 소박한 하드웨어에서도 동작합니다. 모델 원리와 크기 선택에 대해서는 [로컬 LLM이란 무엇인가](/ko/local-llms/what-are-local-llms)를 참조하십시오. 이 가이드에서는 다시 설명하지 않습니다.',
          '**Function-calling / 도구 사용:** 홈 컨트롤은 모델이 구조화된 호출(켜기, 온도 설정)을 출력하는 것에 의존합니다. 현대 로컬 모델들이 이를 지원하며, 이것이 신뢰할 수 있는 제어를 가능하게 합니다.',
          '**Home Assistant 통합:** Home Assistant는 대화 에이전트 인터페이스와 Ollama 통합을 제공하므로 로컬 모델을 기기에 연결하는 것은 설정 단계이지 커스텀 개발이 아닙니다.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '아키텍처: Home Assistant + Ollama + 로컬 음성',
        content:
          '**스택은 직접 소유한 하드웨어의 세 가지 구성 요소입니다. Home Assistant(기기 + 자동화), Ollama(로컬 모델 런타임), 로컬 음성 파이프라인(Assist + Whisper + Piper)입니다.** 데이터는 네트워크를 벗어나지 않는 루프로 흐릅니다.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: '기기, 엔티티 상태, 자동화를 관리하고 대화 에이전트 인터페이스를 제공합니다. 모델이 동작하는 허브입니다. [Home Assistant 시작하기](/ko/smart-home/home-assistant-getting-started)에서 시작하십시오.' },
          { title: 'Ollama', whyItMatters: '로컬 모델을 실행하고 Home Assistant에 제공합니다. 설치 및 모델 선택은 [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)을 참조하십시오. 이 가이드는 스마트 홈 연결에 집중합니다.' },
          { title: '대화 에이전트', whyItMatters: 'Assist를 Ollama 모델에 연결하여 자연어가 기기 동작이 되도록 하는 Home Assistant 설정입니다. 단계별 안내는 [Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration)에 있습니다.' },
          { title: '로컬 음성(선택 사항)', whyItMatters: 'Whisper가 음성을 텍스트로 변환하고 Piper가 응답을 말하므로 완전히 오프라인으로 동작하는 음성 어시스턴트를 구성할 수 있습니다. [완전 로컬 음성 어시스턴트 구축하기](/ko/smart-home/local-voice-assistant-smart-home)를 참조하십시오.' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: '규칙 기반 자동화 대비 달성 가능한 것',
        content:
          '**로컬 LLM은 규칙 기반 자동화로는 표현할 수 없는 유연성, 자연어, 문맥을 제공합니다. 더 많은 설정과 하드웨어가 필요한 대신입니다.** 결정론적 트리거에는 규칙을, 의도와 문맥이 중요한 곳에는 LLM을 사용하십시오.',
        columns: ['항목', '규칙 기반 자동화', '로컬 LLM 자동화'],
        rows: [
          { '항목': '유연성', '규칙 기반 자동화': '고정 트리거 → 고정 동작', '로컬 LLM 자동화': '목표를 해석하고 문맥에 적응' },
          { '항목': '자연어', '규칙 기반 자동화': '없음 — 정확한 조건을 직접 설정', '로컬 LLM 자동화': '자연어 명령 및 의도' },
          { '항목': '문맥 인식', '규칙 기반 자동화': '스크립트로 작성된 상태만', '로컬 LLM 자동화': '시간, 재실, 센서를 종합하여 추론' },
          { '항목': '설정', '규칙 기반 자동화': '규칙별로 간단', '로컬 LLM 자동화': '높음 — 허브 + 모델 + 연결' },
          { '항목': '하드웨어 필요', '규칙 기반 자동화': '최소(Pi 하나)', '로컬 LLM 자동화': '미니 PC; GPU/NPU가 지연 시간에 도움' },
        ],
        items: [
          '구체적인 자동화 예시와 그 이면의 프롬프트는 [로컬 LLM을 활용한 스마트한 자동화](/ko/smart-home/ai-automations-local-llm)를 참조하십시오.',
          '결정론적 안전 자동화(화재 경보, 도어록)는 간단한 규칙으로 유지하십시오. 모델을 통해 라우팅하지 마십시오.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 현실',
        content:
          '**Home Assistant와 소형 로컬 모델을 미니 PC 하나에서 실행할 수 있습니다. GPU, 고성능 iGPU 또는 NPU는 응답 지연 시간을 줄입니다.** 이 가이드는 VRAM이나 모델 양자화를 다시 설명하지 않습니다. 자세한 내용은 외부 링크를 참조하십시오.',
        items: [
          '**하나의 기기로 충분합니다:** 미니 PC는 Ollama를 통해 Home Assistant와 소형 모델을 함께 호스팅할 수 있습니다. 추천 제품은 [Home Assistant + 로컬 AI용 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)를 참조하십시오.',
          '**지연 시간은 하드웨어에 비례합니다:** 더 큰 모델과 CPU 전용 추론은 응답이 더 느립니다. GPU나 최신 iGPU/NPU는 빠른 어시스턴트와의 격차를 줄입니다. VRAM과 모델 크기에 대한 자세한 내용은 [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
          '**용도에 맞는 모델을 선택하십시오:** 홈 컨트롤은 가장 큰 모델보다 소형의 빠른 function-calling 모델이 적합합니다. [스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home)을 참조하십시오.',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: '단계별 경로',
        content:
          '**순서대로 구축하십시오. Home Assistant, 다음 Ollama, 대화 에이전트, 그리고 음성과 자동화입니다.** 각 단계는 별도의 가이드에서 다루므로 이 핵심 문서는 지도 역할을 유지하며 명령어 나열이 되지 않습니다.',
        numberedItems: [
          '미니 PC에 Home Assistant를 설정하십시오 — [시작 가이드](/ko/smart-home/home-assistant-getting-started).',
          'Ollama를 설치하고 소형 모델을 다운로드하십시오 — [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama).',
          'Ollama를 Home Assistant에 연결하고 대화 에이전트로 설정하십시오 — [통합 가이드](/ko/smart-home/home-assistant-ollama-integration).',
          '홈 컨트롤에 맞춰진 모델을 선택하십시오 — [스마트 홈을 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home).',
          '완전 로컬 음성 프론트엔드를 추가하십시오 — [로컬 음성 어시스턴트](/ko/smart-home/local-voice-assistant-smart-home).',
          '문맥 인식 자동화를 설계하십시오 — [로컬 LLM을 활용한 AI 자동화](/ko/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '홈 컨트롤에 가장 적합한 로컬 모델은 무엇입니까?', a: '신뢰할 수 있는 function-calling을 갖춘 소형 지시 추종 모델(일반적으로 3B~8B 범위)이 가장 적합합니다. 홈 컨트롤은 가장 큰 모델보다 빠르고 구조화된 응답이 필요하기 때문입니다. 최적의 선택은 하드웨어에 따라 다릅니다. 현재 옵션은 스마트 홈을 위한 최고의 로컬 LLM 모델 가이드를 참조하십시오.' },
          { q: '로컬 LLM 스마트 홈에 GPU가 필요합니까?', a: '아니요, 하지만 도움이 됩니다. 소형 모델은 최신 CPU나 고성능 내장 GPU에서 실행됩니다. 전용 GPU나 NPU는 주로 응답 지연 시간을 줄여 어시스턴트를 더 빠르게 만듭니다. 가장 큰 GPU를 구입하기보다 하드웨어에 맞게 모델 크기를 조정하십시오.' },
          { q: '로컬 LLM 스마트 홈은 오프라인으로 작동합니까?', a: '예. 모델은 Ollama를 통해 로컬에서 실행되고 Home Assistant는 LAN으로 기기를 제어하므로 자연어 제어와 자동화가 인터넷 없이 작동합니다. 집 밖에서의 원격 접근만 연결이 필요합니다.' },
          { q: '로컬 LLM이 Alexa보다 빠릅니까?', a: '하드웨어와 모델 크기에 따라 다릅니다. Alexa 같은 클라우드 어시스턴트는 낮은 지연 시간에 최적화되어 있으며, 로컬 LLM은 프라이버시와 오프라인 운영을 위해 어느 정도 속도를 희생합니다. GPU가 장착된 미니 PC에서는 격차가 줄어듭니다. 결정적인 장점은 속도가 아니라 프라이버시와 제어권입니다.' },
          { q: '로컬 LLM 스마트 홈을 Raspberry Pi에서 실행할 수 있습니까?', a: 'Raspberry Pi는 Home Assistant를 잘 실행하지만 Pi에서의 LLM 추론은 매우 소형 모델에 제한되며 느립니다. 반응 속도가 좋은 로컬 LLM 어시스턴트를 위해서는 고성능 iGPU/NPU 또는 전용 GPU가 있는 미니 PC가 더 나은 선택입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — 단계별 통합',
          '[완전 로컬 음성 어시스턴트 구축하기](/ko/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[로컬 LLM을 활용한 스마트한 자동화](/ko/smart-home/ai-automations-local-llm) — 문맥 인식 규칙과 프롬프트',
          '[스마트 홈 제어를 위한 최고의 로컬 LLM 모델](/ko/smart-home/best-local-llm-models-smart-home) — 모델 선택',
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 로컬 퍼스트 기반',
          '[실제로 작동하는 자율 로컬 에이전트](/ko/power-local-llm/autonomous-local-agents-actually-work) — 클러스터 간: 로컬 AI 에이전트와 워크플로우',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 LLM으로 스마트 홈 운영하기 (2026 가이드)',
      description: '로컬 LLM 스마트 홈 2026: Home Assistant + Ollama로 자연어 제어와 문맥 인식 자동화를 클라우드 없이 구현하는 완전 가이드.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '로컬 LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: '홈 자동화' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '홈 컨트롤에 가장 적합한 로컬 모델은 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '신뢰할 수 있는 function-calling을 갖춘 소형 지시 추종 모델(일반적으로 3B~8B)이 가장 적합합니다. 홈 컨트롤은 가장 큰 모델보다 빠르고 구조화된 응답이 필요하기 때문입니다.' } },
        { '@type': 'Question', name: '로컬 LLM 스마트 홈에 GPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아니요, 하지만 도움이 됩니다. 소형 모델은 최신 CPU나 내장 GPU에서 실행됩니다. 전용 GPU나 NPU는 주로 응답 지연 시간을 줄입니다.' } },
        { '@type': 'Question', name: '로컬 LLM 스마트 홈은 오프라인으로 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '예. 모델은 Ollama를 통해 로컬에서 실행되고 Home Assistant는 LAN으로 기기를 제어하므로 제어와 자동화가 인터넷 없이 작동합니다.' } },
        { '@type': 'Question', name: '로컬 LLM이 Alexa보다 빠릅니까?', acceptedAnswer: { '@type': 'Answer', text: '하드웨어와 모델 크기에 따라 다릅니다. 클라우드 어시스턴트는 낮은 지연 시간에 최적화되어 있습니다. 로컬 LLM은 프라이버시와 오프라인 운영을 위해 어느 정도 속도를 희생하며 GPU 장착 미니 PC에서는 격차가 줄어듭니다.' } },
        { '@type': 'Question', name: '로컬 LLM 스마트 홈을 Raspberry Pi에서 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Pi는 Home Assistant를 잘 실행하지만 Pi에서의 LLM 추론은 매우 소형 모델에 제한되며 느립니다. 고성능 iGPU/NPU 또는 전용 GPU가 있는 미니 PC가 더 낫습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Faire Tourner Votre Maison Connectée sur un LLM Local (Guide 2026)',
    seoTitle: 'LLM Local Maison Connectée 2026 : Le Guide Complet',
    intro:
      'Un LLM local peut désormais servir de cerveau à votre maison connectée : il interprète des commandes en langage naturel, exécute des automatisations contextuelles et alimente un assistant vocal privé, le tout sur votre propre matériel et sans cloud. Ce guide explique ce que cela signifie, pourquoi c\'est devenu pratique en 2026, l\'architecture Home Assistant + Ollama + voix locale, ce que cela débloque face à l\'automatisation par règles et le chemin pas à pas pour le construire.',
    metaDescription:
      'Maison connectée avec LLM local 2026 : commande en langage naturel et automatisations contextuelles via Home Assistant + Ollama. Sans cloud.',
    twitterDescription:
      'Utilisez un LLM local comme cerveau de votre maison connectée : commande en langage naturel et automatisations contextuelles via Home Assistant + Ollama. Zéro cloud.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant ajoutant un contrôle par IA locale à leur maison connectée',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'llm local maison connectée',
      'home assistant llm local',
      'ollama maison connectée',
      'automatisation maison langage naturel',
      'ia locale home assistant',
    ],
    leadAnswerBlock:
      '**Vous pouvez faire tourner votre maison connectée sur un LLM local en connectant Ollama à Home Assistant et en utilisant le modèle comme agent de conversation et cerveau d\'automatisation : commande des appareils en langage naturel, entièrement sur votre matériel et sans cloud.** C\'est devenu pratique en 2026 car des modèles petits, capables et dotés de function-calling tournent désormais sur un mini-PC.',
    quickAnswerTop: {
      fr: {
        question: 'Peut-on faire tourner une maison connectée sur un LLM local ?',
        answer:
          'Oui. Home Assistant s\'intègre à Ollama pour qu\'un modèle hébergé localement serve d\'agent de conversation, transformant les demandes en langage naturel en actions sur les appareils. Le modèle tourne sur votre propre matériel, donc le contrôle et les automatisations fonctionnent sans cloud et sans que les données quittent la maison. Un petit modèle sur un mini-PC suffit pour le contrôle domestique.',
        bullets: [
          'Home Assistant + Ollama = modèle local comme agent de conversation',
          'Commande en langage naturel : « tamise la cuisine et lance la bouilloire »',
          'Automatisations contextuelles au-delà des règles rigides si-alors',
          'Tourne hors ligne sur votre matériel : sans cloud, sans journalisation',
          'Un petit modèle à function-calling sur un mini-PC gère le contrôle domestique',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce que cela signifie', anchor: 'what-it-means' },
      { label: 'Pourquoi ça marche en 2026', anchor: 'why-2026' },
      { label: 'L\'architecture', anchor: 'architecture' },
      { label: 'Ce que cela débloque', anchor: 'what-it-unlocks' },
      { label: 'Réalité du matériel', anchor: 'hardware' },
      { label: 'Chemin pas à pas', anchor: 'step-by-step' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Connectez Ollama à Home Assistant et un modèle hébergé localement devient le cerveau de votre maison connectée : commande en langage naturel et automatisations contextuelles, sans cloud.' },
      { type: 'plain-terms', content: 'Les automatisations domestiques classiques sont des règles rigides : si mouvement, alors lumière. Un LLM local ajoute une couche qui comprend le langage naturel et le contexte : vous pouvez dire « je sors » et il peut décider quoi éteindre. Le modèle tourne via Ollama sur votre propre machine et se branche à Home Assistant, donc rien de tout cela ne dépend d\'un service cloud.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant dispose d\'une intégration Ollama native ; un modèle local devient l\'agent de conversation',
          'Vous commandez les appareils en langage naturel au lieu de mémoriser des phrases exactes',
          'Le modèle peut exécuter des automatisations contextuelles que les règles rigides ne peuvent exprimer',
          'Tout tourne sur votre matériel : sans cloud, aucune donnée d\'usage ne quitte la maison',
          'Un petit modèle à function-calling sur un mini-PC suffit ; une GPU ou iGPU/NPU performante réduit la latence',
          'Ordre de construction : Home Assistant d\'abord, puis Ollama, puis brancher l\'agent de conversation, puis ajouter la voix locale',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'Ce que signifie faire tourner sa maison connectée sur un LLM local',
        content:
          '**Cela signifie qu\'un modèle de langage hébergé localement se place entre vous et vos appareils, traduisant l\'intention en langage naturel en actions Home Assistant et prenant des décisions d\'automatisation qu\'une règle fixe ne pourrait pas.** Le LLM joue deux rôles : agent de conversation (vous parlez, il agit) et cerveau d\'automatisation (il raisonne sur le contexte).',
        items: [
          '**Agent de conversation :** vous dites ou tapez « rends le salon cosy » et le modèle associe cette intention à des appels d\'appareils concrets — tamiser les lumières, régler une couleur chaude, baisser les stores.',
          '**Cerveau d\'automatisation :** au lieu d\'un déclencheur → une action, le modèle peut peser le contexte : heure de la journée, qui est à la maison, états des capteurs et un objectif en langage naturel.',
          '**Local par conception :** le modèle tourne via Ollama sur votre propre machine, donc ni vos commandes ni l\'état de votre maison ne sont envoyés à un tiers.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: 'Pourquoi ça marche en 2026',
        content:
          '**Trois choses ont convergé : les petits modèles sont devenus assez capables pour le contrôle domestique, ils ont gagné un function-calling fiable, et Home Assistant a livré une intégration LLM de premier ordre.** Aucune de ces conditions n\'existait ensemble pour les particuliers il y a quelques années.',
        items: [
          '**Petits modèles capables :** les modèles de 3B–8B suivent désormais les instructions assez bien pour associer l\'intention à des actions d\'appareils, et tiennent sur du matériel modeste. Pour la mécanique et le dimensionnement, voir [qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) — ce guide ne les réexplique pas.',
          '**Function-calling / utilisation d\'outils :** le contrôle domestique dépend de la capacité du modèle à émettre des appels structurés (allumer, régler la température). Les modèles locaux modernes le prennent en charge, ce qui rend le contrôle fiable possible.',
          '**Intégration Home Assistant :** Home Assistant expose une interface d\'agent de conversation et une intégration Ollama, donc brancher un modèle local à vos appareils est une étape de configuration, pas un développement sur mesure.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'L\'architecture : Home Assistant + Ollama + voix locale',
        content:
          '**Le stack, c\'est trois composants sur votre propre matériel : Home Assistant (appareils + automatisations), Ollama (le runtime du modèle local) et une pipeline vocale locale (Assist + Whisper + Piper).** Les données circulent en boucle, sans jamais quitter votre réseau.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Gère vos appareils, états d\'entités et automatisations, et expose l\'interface d\'agent de conversation. C\'est le hub par lequel le modèle agit — commencez par [Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Exécute le modèle local et le sert à Home Assistant. Pour l\'installation et le choix des modèles, voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama) ; ce guide reste centré sur le câblage de la maison connectée.' },
          { title: 'Agent de conversation', whyItMatters: 'Le réglage Home Assistant qui pointe Assist vers le modèle Ollama pour que le langage naturel devienne des actions d\'appareils — le pas à pas est dans [connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration).' },
          { title: 'Voix locale (optionnelle)', whyItMatters: 'Whisper transcrit la parole et Piper énonce les réponses, vous obtenez donc un assistant vocal entièrement hors ligne — voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'Ce que cela débloque face à l\'automatisation par règles',
        content:
          '**Un LLM local apporte flexibilité, langage naturel et contexte que l\'automatisation par règles ne peut exprimer — au prix de plus de configuration et de matériel.** Utilisez les règles pour les déclencheurs déterministes ; le LLM là où l\'intention et le contexte comptent.',
        columns: ['Aspect', 'Automatisation par règles', 'Automatisation par LLM local'],
        rows: [
          { 'Aspect': 'Flexibilité', 'Automatisation par règles': 'Déclencheur fixe → action fixe', 'Automatisation par LLM local': 'Interprète les objectifs et s\'adapte au contexte' },
          { 'Aspect': 'Langage naturel', 'Automatisation par règles': 'Aucun — vous câblez des conditions exactes', 'Automatisation par LLM local': 'Commandes et intentions en langage naturel' },
          { 'Aspect': 'Conscience du contexte', 'Automatisation par règles': 'Seulement les états que vous scriptez', 'Automatisation par LLM local': 'Raisonne sur le temps, la présence, les capteurs' },
          { 'Aspect': 'Configuration', 'Automatisation par règles': 'Simple par règle', 'Automatisation par LLM local': 'Plus élevée — hub + modèle + câblage' },
          { 'Aspect': 'Besoin matériel', 'Automatisation par règles': 'Minimal (un Pi)', 'Automatisation par LLM local': 'Un mini-PC ; une GPU/NPU aide à la latence' },
        ],
        items: [
          'Pour des exemples concrets d\'automatisation et les prompts associés, voir [des automatisations plus intelligentes avec un LLM local](/fr/smart-home/ai-automations-local-llm).',
          'Gardez les automatisations de sécurité déterministes (détecteur de fumée, serrures) comme de simples règles — ne les faites pas passer par le modèle.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'La réalité du matériel',
        content:
          '**Vous pouvez faire tourner Home Assistant et un petit modèle local sur un seul mini-PC ; une GPU, iGPU performante ou NPU réduit la latence de réponse.** Ce guide ne réexplique pas la VRAM ni la quantification des modèles — pour cette profondeur, lien vers l\'extérieur.',
        items: [
          '**Une seule machine suffit :** un mini-PC peut héberger Home Assistant plus un petit modèle via Ollama. Pour des choix, voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**La latence évolue avec le matériel :** les modèles plus grands et l\'inférence CPU seule répondent plus lentement ; une GPU ou iGPU/NPU moderne réduit l\'écart vers un assistant réactif. Pour la VRAM et le dimensionnement, voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          '**Choisissez le modèle selon la tâche :** le contrôle domestique récompense les petits modèles rapides à function-calling plutôt que le plus grand disponible — voir [meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Votre chemin pas à pas',
        content:
          '**Construisez dans l\'ordre : Home Assistant, puis Ollama, puis l\'agent de conversation, puis la voix et les automatisations.** Chaque étape est traitée dans un guide dédié, pour que cet article phare reste une carte et non un mur de commandes.',
        numberedItems: [
          'Configurez Home Assistant sur un mini-PC — [guide de démarrage](/fr/smart-home/home-assistant-getting-started).',
          'Installez Ollama et téléchargez un petit modèle — [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
          'Connectez Ollama à Home Assistant et définissez-le comme agent de conversation — [guide d\'intégration](/fr/smart-home/home-assistant-ollama-integration).',
          'Choisissez un modèle adapté au contrôle domestique — [meilleurs modèles LLM locaux pour la maison connectée](/fr/smart-home/best-local-llm-models-smart-home).',
          'Ajoutez un frontal vocal entièrement local — [assistant vocal local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Concevez des automatisations contextuelles — [automatisations IA avec un LLM local](/fr/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quel modèle local est le meilleur pour le contrôle domestique ?', a: 'Un petit modèle suivant les instructions et doté d\'un function-calling fiable — généralement entre 3B et 8B — convient le mieux, car le contrôle domestique exige des réponses rapides et structurées plutôt que le plus grand modèle. Le bon choix dépend de votre matériel ; voir le guide des meilleurs modèles LLM locaux pour la maison connectée.' },
          { q: 'Ai-je besoin d\'une GPU pour une maison connectée à LLM local ?', a: 'Non, mais elle aide. Un petit modèle tourne sur un CPU moderne ou une GPU intégrée performante ; une GPU dédiée ou NPU réduit surtout la latence de réponse pour un assistant plus réactif. Adaptez la taille du modèle à votre matériel.' },
          { q: 'Une maison connectée à LLM local fonctionne-t-elle hors ligne ?', a: 'Oui. Le modèle tourne localement via Ollama et Home Assistant contrôle les appareils via votre LAN, donc la commande en langage naturel et les automatisations fonctionnent sans internet. Seul l\'accès à distance hors de la maison nécessite une connexion.' },
          { q: 'Un LLM local est-il plus rapide qu\'Alexa ?', a: 'Cela dépend du matériel et de la taille du modèle. Les assistants cloud comme Alexa sont optimisés pour une faible latence, tandis qu\'un LLM local échange un peu de vitesse contre la confidentialité et le fonctionnement hors ligne ; sur un mini-PC équipé d\'une GPU, l\'écart se réduit. L\'avantage décisif est la confidentialité et le contrôle, pas la vitesse brute.' },
          { q: 'Une maison connectée à LLM local peut-elle tourner sur un Raspberry Pi ?', a: 'Un Raspberry Pi fait bien tourner Home Assistant, mais l\'inférence LLM sur un Pi se limite à de très petits modèles et reste lente. Pour un assistant à LLM local réactif, un mini-PC avec iGPU/NPU performante ou une GPU dédiée est le meilleur choix.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — l\'intégration pas à pas',
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[Des automatisations plus intelligentes avec un LLM local](/fr/smart-home/ai-automations-local-llm) — règles contextuelles et prompts',
          '[Meilleurs modèles LLM locaux pour le contrôle de la maison connectée](/fr/smart-home/best-local-llm-models-smart-home) — choix du modèle',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le pilier local-first',
          '[Des agents locaux autonomes qui fonctionnent vraiment](/fr/power-local-llm/autonomous-local-agents-actually-work) — inter-clusters : agents et workflows d\'IA locale',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Faire Tourner Votre Maison Connectée sur un LLM Local (Guide 2026)',
      description: 'Maison connectée avec LLM local 2026 : commande en langage naturel et automatisations contextuelles via Home Assistant + Ollama. Sans cloud.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Domotique' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quel modèle local est le meilleur pour le contrôle domestique ?', acceptedAnswer: { '@type': 'Answer', text: 'Un petit modèle suivant les instructions et doté d\'un function-calling fiable, généralement entre 3B et 8B, car le contrôle domestique exige des réponses rapides et structurées plutôt que le plus grand modèle.' } },
        { '@type': 'Question', name: 'Ai-je besoin d\'une GPU pour une maison connectée à LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, mais elle aide. Un petit modèle tourne sur un CPU moderne ou une GPU intégrée ; une GPU dédiée ou NPU réduit surtout la latence de réponse.' } },
        { '@type': 'Question', name: 'Une maison connectée à LLM local fonctionne-t-elle hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Le modèle tourne localement via Ollama et Home Assistant contrôle les appareils via votre LAN, donc la commande et les automatisations fonctionnent sans internet.' } },
        { '@type': 'Question', name: 'Un LLM local est-il plus rapide qu\'Alexa ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend du matériel et de la taille du modèle. Les assistants cloud sont optimisés pour une faible latence ; un LLM local échange un peu de vitesse contre la confidentialité et le hors-ligne, et l\'écart se réduit sur un mini-PC à GPU.' } },
        { '@type': 'Question', name: 'Une maison connectée à LLM local peut-elle tourner sur un Raspberry Pi ?', acceptedAnswer: { '@type': 'Answer', text: 'Un Pi fait bien tourner Home Assistant, mais l\'inférence LLM sur un Pi se limite à de très petits modèles lents. Un mini-PC avec iGPU/NPU performante ou GPU dédiée est meilleur.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'ローカルLLMでスマートホームを動かす（2026年ガイド）',
    seoTitle: 'ローカルLLMスマートホーム2026：完全ガイド',
    intro:
      'ローカルLLMは今やスマートホームの頭脳として機能できます——自然言語コマンドを解釈し、文脈を踏まえた自動化を実行し、プライベートな音声アシスタントを動かします。すべて自分のハードウェア上でクラウドなしに行えます。本ガイドではその意味、2026年に実用化した理由、Home Assistant + Ollama + ローカル音声のアーキテクチャ、ルールベースの自動化に対して何が広がるか、そして構築の手順を説明します。',
    metaDescription:
      'ローカルLLMでスマートホームを動かす2026年ガイド：インストール手順、ハードウェア要件、音声制御の設定方法を解説。Home Assistant と Ollama で自然言語制御と文脈を踏まえた自動化を実現。クラウド不要のプライベートAI環境を構築。',
    twitterDescription:
      'ローカルLLMをスマートホームの頭脳に：Home Assistant + Ollama による自然言語制御と文脈を踏まえた自動化。クラウドはゼロ。',
    readTime: '12分で読める',
    educationalLevel: 'Intermediate',
    audience: 'スマートホームにローカルAI制御を追加する Home Assistant ユーザー',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'ローカルLLM スマートホーム',
      'home assistant ローカルLLM',
      'ollama スマートホーム',
      '自然言語 ホームオートメーション',
      'ローカルAI home assistant',
    ],
    leadAnswerBlock:
      '**Ollama を Home Assistant に接続し、モデルを会話エージェント兼自動化の頭脳として使えば、ローカルLLMでスマートホームを動かせます——自然言語によるデバイス制御を、すべて自分のハードウェア上でクラウドなしに行えます。** 小型で高性能、Function-Calling 対応のモデルがミニPCで動くようになったため、2026年に実用化しました。',
    quickAnswerTop: {
      ja: {
        question: 'ローカルLLMでスマートホームを動かせますか？',
        answer:
          'はい。Home Assistant は Ollama と連携でき、ローカルでホストしたモデルが会話エージェントとして動作し、自然言語のリクエストをデバイス操作へ変換します。モデルは自分のハードウェアで動くため、制御も自動化もクラウドなしで機能し、データが家から出ません。家庭の制御にはミニPCの小型モデルで十分です。',
        bullets: [
          'Home Assistant + Ollama = ローカルモデルが会話エージェントに',
          '自然言語制御：「キッチンを暗くしてケトルをつけて」',
          '硬直した if-then を超える文脈を踏まえた自動化',
          'ハードウェア上でオフライン動作——クラウドなし、ログなし',
          'ミニPCの小型 Function-Calling モデルで家庭の制御をこなす',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '意味するもの', anchor: 'what-it-means' },
      { label: '2026年に動く理由', anchor: 'why-2026' },
      { label: 'アーキテクチャ', anchor: 'architecture' },
      { label: '何が広がるか', anchor: 'what-it-unlocks' },
      { label: 'ハードウェアの現実', anchor: 'hardware' },
      { label: '手順', anchor: 'step-by-step' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ollama を Home Assistant に接続すると、ローカルでホストしたモデルがスマートホームの頭脳になります——自然言語制御と文脈を踏まえた自動化を、クラウドなしで実現します。' },
      { type: 'plain-terms', content: '従来のスマートホーム自動化は硬直したルールです：動きがあれば点灯。ローカルLLMは自然言語と文脈を理解する層を追加します——「出かけます」と言えば、何を消すかを判断できます。モデルは自分のマシンで Ollama 経由で動き、Home Assistant に組み込まれるため、どれもクラウドサービスに依存しません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant は Ollama 連携を内蔵しており、ローカルモデルが会話エージェントになる',
          '正確な命令フレーズを覚える代わりに、自然言語でデバイスを制御する',
          'モデルは硬直したルールでは表現できない文脈を踏まえた自動化を実行できる',
          'すべてハードウェア上で動作——クラウドなし、利用データが家から出ない',
          'ミニPCの小型 Function-Calling モデルで十分；GPU や高性能 iGPU/NPU が遅延を下げる',
          '構築順：まず Home Assistant、次に Ollama、続いて会話エージェントを接続、最後にローカル音声を追加',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'ローカルLLMでスマートホームを動かすとは',
        content:
          '**それは、ローカルでホストした言語モデルがあなたとデバイスの間に立ち、自然言語の意図を Home Assistant の操作へ翻訳し、固定ルールではできない自動化の判断を下すことを意味します。** LLMは二つの役割を担います：会話エージェント（あなたが話し、それが動く）と自動化の頭脳（文脈を踏まえて推論する）。',
        items: [
          '**会話エージェント：** 「リビングを居心地よくして」と言えば、モデルはその意図を具体的なデバイス呼び出しに割り当てます——照明を暗く、暖色に、ブラインドを下ろす。',
          '**自動化の頭脳：** 一つの引き金→一つの動作ではなく、モデルは文脈を比較できます：時間帯、誰が在宅か、センサー状態、そして自然言語の目標。',
          '**設計からローカル：** モデルは自分のマシンで Ollama 経由で動くため、命令も家の状態も第三者に送られません。',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: '2026年に動く理由',
        content:
          '**三つが重なりました：小型モデルが家庭制御に十分な能力を持ち、信頼できる Function-Calling を獲得し、Home Assistant が一級の LLM 連携を提供したのです。** これらが個人ユーザー向けに同時にそろったのは数年前にはありませんでした。',
        items: [
          '**高性能な小型モデル：** 3B〜8B のモデルは今や意図をデバイス操作へ割り当てるのに十分な指示追従性を持ち、控えめなハードウェアに収まります。モデルの仕組みやサイズ選びは[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms)を参照——本ガイドでは再説明しません。',
          '**Function-Calling / ツール利用：** 家庭制御はモデルが構造化された呼び出し（オン、温度設定）を出せることに依存します。現代のローカルモデルはこれに対応しており、信頼できる制御を可能にします。',
          '**Home Assistant 連携：** Home Assistant は会話エージェントのインターフェースと Ollama 連携を提供するため、ローカルモデルをデバイスにつなぐのは設定の一手間で、独自開発ではありません。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'アーキテクチャ：Home Assistant + Ollama + ローカル音声',
        content:
          '**スタックは自分のハードウェア上の三つの構成要素です：Home Assistant（デバイス + 自動化）、Ollama（ローカルモデルのランタイム）、ローカル音声パイプライン（Assist + Whisper + Piper）。** データはネットワークの外に出ないループで流れます。',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'デバイス、エンティティの状態、自動化を管理し、会話エージェントのインターフェースを提供します。モデルが操作を行うハブです——[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started)から始めてください。' },
          { title: 'Ollama', whyItMatters: 'ローカルモデルを動かし、Home Assistant に提供します。インストールとモデル選びは[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)を参照——本ガイドはスマートホームの配線に集中します。' },
          { title: '会話エージェント', whyItMatters: 'Assist を Ollama モデルに向ける Home Assistant の設定で、自然言語がデバイス操作になります——手順は[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration)にあります。' },
          { title: 'ローカル音声（任意）', whyItMatters: 'Whisper が発話を文字起こしし、Piper が応答を話すため、完全オフラインの音声アシスタントになります——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'ルールベースの自動化に対して何が広がるか',
        content:
          '**ローカルLLMは、ルールベースの自動化では表現できない柔軟性・自然言語・文脈をもたらします——設定とハードウェアが増える代わりに。** 決定論的な引き金にはルールを、意図や文脈が問われる場面ではLLMを使いましょう。',
        columns: ['観点', 'ルールベースの自動化', 'ローカルLLMの自動化'],
        rows: [
          { '観点': '柔軟性', 'ルールベースの自動化': '固定の引き金 → 固定の動作', 'ローカルLLMの自動化': '目標を解釈し文脈に適応' },
          { '観点': '自然言語', 'ルールベースの自動化': 'なし——正確な条件を配線', 'ローカルLLMの自動化': '自然言語の命令と意図' },
          { '観点': '文脈認識', 'ルールベースの自動化': 'スクリプト化した状態のみ', 'ローカルLLMの自動化': '時間・在宅・センサーを横断して推論' },
          { '観点': '設定', 'ルールベースの自動化': 'ルールごとに簡単', 'ローカルLLMの自動化': '高い——ハブ + モデル + 配線' },
          { '観点': 'ハードウェア要件', 'ルールベースの自動化': '最小（Pi）', 'ローカルLLMの自動化': 'ミニPC；GPU/NPU が遅延に有効' },
        ],
        items: [
          '具体的な自動化例とその背後のプロンプトは[ローカルLLMでより賢い自動化](/ja/smart-home/ai-automations-local-llm)を参照。',
          '決定論的な安全自動化（火災警報、ドアロック）は単純なルールのまま——モデルを経由させないでください。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェアの現実',
        content:
          '**Home Assistant と小型ローカルモデルは1台のミニPCで動かせます；GPU、高性能 iGPU、NPU が応答遅延を下げます。** 本ガイドは VRAM やモデルの量子化を再説明しません——その詳細は外部リンクへ。',
        items: [
          '**1台で十分：** ミニPCは Home Assistant と Ollama 経由の小型モデルを同居できます。選び方は[Home Assistant + ローカルAI に最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。',
          '**遅延はハードウェアに比例：** 大きいモデルやCPUのみの推論は遅く、GPU や新しい iGPU/NPU が機敏なアシスタントまでの差を縮めます。VRAM とサイズの詳細は[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
          '**用途に合わせてモデルを選ぶ：** 家庭制御は最大のモデルより、小型で速い Function-Calling モデルを優先——[スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home)を参照。',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: '手順',
        content:
          '**この順で構築します：Home Assistant、次に Ollama、続いて会話エージェント、最後に音声と自動化。** 各ステップは個別のハウツーで扱うため、この旗艦記事は地図のまま——コマンドの羅列にはなりません。',
        numberedItems: [
          'ミニPCに Home Assistant をセットアップする——[入門ガイド](/ja/smart-home/home-assistant-getting-started)。',
          'Ollama をインストールし小型モデルを取得する——[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)。',
          'Ollama を Home Assistant に接続し会話エージェントに設定する——[連携ハウツー](/ja/smart-home/home-assistant-ollama-integration)。',
          '家庭制御に合わせたモデルを選ぶ——[スマートホーム向けの最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home)。',
          '完全ローカルの音声フロントエンドを追加する——[ローカル音声アシスタント](/ja/smart-home/local-voice-assistant-smart-home)。',
          '文脈を踏まえた自動化を設計する——[ローカルLLMによるAI自動化](/ja/smart-home/ai-automations-local-llm)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '家庭制御に最適なローカルモデルはどれですか？', a: '信頼できる Function-Calling を備えた小型の指示追従モデル——通常 3B〜8B——が最適です。家庭制御は最大のモデルより速く構造化された応答を必要とするためです。最適な選択はハードウェア次第で、最新の選択肢はスマートホーム向けの最適なローカルLLMモデルのガイドを参照してください。' },
          { q: 'ローカルLLMスマートホームに GPU は必要ですか？', a: 'いいえ、ただし役立ちます。小型モデルは新しいCPUや高性能な内蔵GPUで動き、専用GPUやNPUは主に応答遅延を下げてアシスタントを機敏にします。GPUの大きさより、モデルサイズをハードウェアに合わせましょう。' },
          { q: 'ローカルLLMスマートホームはオフラインで動きますか？', a: 'はい。モデルは Ollama 経由でローカルに動き、Home Assistant が LAN でデバイスを制御するため、自然言語制御と自動化はインターネットなしで機能します。家の外からのリモートアクセスだけ接続が必要です。' },
          { q: 'ローカルLLMは Alexa より速いですか？', a: 'ハードウェアとモデルサイズ次第です。Alexa のようなクラウドアシスタントは低遅延に最適化されており、ローカルLLMは速度を多少犠牲にしてプライバシーとオフライン動作を得ます；GPU搭載のミニPCでは差が縮まります。決め手は速度ではなくプライバシーと主導権です。' },
          { q: 'ローカルLLMスマートホームは Raspberry Pi で動きますか？', a: 'Raspberry Pi は Home Assistant をよく動かしますが、Pi 上の LLM 推論は非常に小型のモデルに限られ遅いです。機敏なローカルLLMアシスタントには、高性能 iGPU/NPU または専用GPUを備えたミニPCが適します。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — 手順ごとの連携',
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[ローカルLLMでより賢い自動化](/ja/smart-home/ai-automations-local-llm) — 文脈を踏まえたルールとプロンプト',
          '[スマートホーム制御に最適なローカルLLMモデル](/ja/smart-home/best-local-llm-models-smart-home) — モデル選び',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルファーストの柱',
          '[本当に機能する自律型ローカルエージェント](/ja/power-local-llm/autonomous-local-agents-actually-work) — クラスター横断：ローカルAIエージェントとワークフロー',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルLLMでスマートホームを動かす（2026年ガイド）',
      description: 'ローカルLLMでスマートホームを動かす2026年ガイド：インストール手順、ハードウェア要件、音声制御の設定方法を解説。Home Assistant と Ollama で自然言語制御と文脈を踏まえた自動化を実現。クラウド不要のプライベートAI環境を構築。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'ローカルLLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'ホームオートメーション' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '家庭制御に最適なローカルモデルはどれですか？', acceptedAnswer: { '@type': 'Answer', text: '信頼できる Function-Calling を備えた小型の指示追従モデル、通常 3B〜8B が最適です。家庭制御は最大のモデルより速く構造化された応答を必要とするためです。' } },
        { '@type': 'Question', name: 'ローカルLLMスマートホームに GPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、ただし役立ちます。小型モデルは新しいCPUや内蔵GPUで動き、専用GPUやNPUは主に応答遅延を下げます。' } },
        { '@type': 'Question', name: 'ローカルLLMスマートホームはオフラインで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。モデルは Ollama 経由でローカルに動き、Home Assistant が LAN でデバイスを制御するため、制御と自動化はインターネットなしで機能します。' } },
        { '@type': 'Question', name: 'ローカルLLMは Alexa より速いですか？', acceptedAnswer: { '@type': 'Answer', text: 'ハードウェアとモデルサイズ次第です。クラウドアシスタントは低遅延に最適化されており、ローカルLLMは速度を多少犠牲にしてプライバシーとオフライン動作を得ます；GPUミニPCでは差が縮まります。' } },
        { '@type': 'Question', name: 'ローカルLLMスマートホームは Raspberry Pi で動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'Pi は Home Assistant をよく動かしますが、Pi 上の LLM 推論は非常に小型で遅いモデルに限られます。高性能 iGPU/NPU または専用GPUのミニPCが適します。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Rode Sua Casa Inteligente em um LLM Local (Guia 2026)',
    seoTitle: 'LLM Local Casa Inteligente 2026: Guia Completo',
    intro:
      'Um LLM local já pode atuar como o cérebro da sua casa inteligente: interpreta comandos em linguagem natural, executa automações contextuais e alimenta um assistente de voz privado, tudo em hardware próprio e sem nuvem. Este guia explica o que isso significa, por que se tornou prático em 2026, a arquitetura Home Assistant + Ollama + voz local, o que desbloqueia em relação à automação por regras e o caminho passo a passo para montar.',
    metaDescription:
      'Casa inteligente com LLM local 2026: controle em linguagem natural e automações contextuais via Home Assistant + Ollama. Sem nuvem.',
    twitterDescription:
      'Use um LLM local como cérebro da sua casa inteligente: controle em linguagem natural e automações contextuais via Home Assistant + Ollama. Zero nuvem.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant que adicionam controle com IA local à casa inteligente',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      'llm local casa inteligente',
      'home assistant llm local',
      'ollama casa inteligente',
      'automação residencial linguagem natural',
      'ia local home assistant',
    ],
    leadAnswerBlock:
      '**Você pode rodar sua casa inteligente em um LLM local conectando o Ollama ao Home Assistant e usando o modelo como agente de conversa e cérebro de automação: controle de dispositivos em linguagem natural, tudo no seu próprio hardware e sem nuvem.** Tornou-se prático em 2026 porque modelos pequenos, capazes e com function-calling já rodam em um mini PC.',
    quickAnswerTop: {
      pt: {
        question: 'Dá para rodar uma casa inteligente em um LLM local?',
        answer:
          'Sim. O Home Assistant se integra ao Ollama para que um modelo hospedado localmente atue como agente de conversa, transformando pedidos em linguagem natural em ações nos dispositivos. O modelo roda no seu próprio hardware, então o controle e as automações funcionam sem nuvem e sem que os dados saiam de casa. Um modelo pequeno em um mini PC basta para o controle da casa.',
        bullets: [
          'Home Assistant + Ollama = modelo local como agente de conversa',
          'Controle em linguagem natural: "diminua a cozinha e ligue a chaleira"',
          'Automações contextuais além de regras rígidas se-isto-então',
          'Roda offline no seu hardware: sem nuvem, sem registro de uso',
          'Um modelo pequeno com function-calling em um mini PC dá conta do controle da casa',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que significa', anchor: 'what-it-means' },
      { label: 'Por que funciona em 2026', anchor: 'why-2026' },
      { label: 'A arquitetura', anchor: 'architecture' },
      { label: 'O que desbloqueia', anchor: 'what-it-unlocks' },
      { label: 'Realidade do hardware', anchor: 'hardware' },
      { label: 'Caminho passo a passo', anchor: 'step-by-step' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Conecte o Ollama ao Home Assistant e um modelo hospedado localmente vira o cérebro da sua casa inteligente: controle em linguagem natural e automações contextuais, sem nuvem.' },
      { type: 'plain-terms', content: 'As automações tradicionais de casa são regras rígidas: se houver movimento, acenda a luz. Um LLM local adiciona uma camada que entende linguagem natural e contexto: você pode dizer "estou saindo" e ele pode decidir o que desligar. O modelo roda via Ollama na sua própria máquina e se conecta ao Home Assistant, então nada disso depende de um serviço na nuvem.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Home Assistant tem uma integração com o Ollama embutida; um modelo local vira o agente de conversa',
          'Você controla dispositivos em linguagem natural em vez de decorar frases exatas',
          'O modelo pode executar automações contextuais que regras rígidas não expressam',
          'Tudo roda no seu hardware: sem nuvem, sem dados de uso saindo de casa',
          'Um modelo pequeno com function-calling em um mini PC basta; uma GPU ou iGPU/NPU capaz reduz a latência',
          'Ordem de montagem: primeiro Home Assistant, depois Ollama, depois conectar o agente de conversa, depois adicionar voz local',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: 'O que significa rodar sua casa inteligente em um LLM local',
        content:
          '**Significa que um modelo de linguagem hospedado localmente fica entre você e seus dispositivos, traduzindo a intenção em linguagem natural para ações do Home Assistant e tomando decisões de automação que uma regra fixa não conseguiria.** O LLM cumpre dois papéis: agente de conversa (você fala, ele age) e cérebro de automação (raciocina sobre o contexto).',
        items: [
          '**Agente de conversa:** você diz ou digita "deixe a sala aconchegante" e o modelo mapeia essa intenção para chamadas concretas de dispositivos — diminuir luzes, definir cor quente, baixar as persianas.',
          '**Cérebro de automação:** em vez de um gatilho → uma ação, o modelo pode pesar o contexto: hora do dia, quem está em casa, estados de sensores e um objetivo em linguagem natural.',
          '**Local por design:** o modelo roda via Ollama na sua própria máquina, então nem seus comandos nem o estado da casa são enviados a terceiros.',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: 'Por que funciona em 2026',
        content:
          '**Três coisas convergiram: modelos pequenos ficaram capazes o bastante para o controle da casa, ganharam function-calling confiável e o Home Assistant lançou uma integração LLM de primeira linha.** Nenhuma delas existia junta para usuários domésticos há poucos anos.',
        items: [
          '**Modelos pequenos capazes:** modelos de 3B–8B já seguem instruções bem o suficiente para mapear intenção em ações de dispositivos, e cabem em hardware modesto. Para a mecânica e o tamanho do modelo, veja [o que são LLMs locais](/pt/local-llms/what-are-local-llms) — este guia não reexplica.',
          '**Function-calling / uso de ferramentas:** o controle da casa depende de o modelo emitir chamadas estruturadas (ligar, definir temperatura). Modelos locais modernos suportam isso, e é o que torna o controle confiável possível.',
          '**Integração do Home Assistant:** o Home Assistant expõe uma interface de agente de conversa e uma integração com o Ollama, então conectar um modelo local aos seus dispositivos é um passo de configuração, não um desenvolvimento sob medida.',
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'A arquitetura: Home Assistant + Ollama + voz local',
        content:
          '**O stack são três componentes no seu próprio hardware: Home Assistant (dispositivos + automações), Ollama (o runtime do modelo local) e um pipeline de voz local (Assist + Whisper + Piper).** Os dados fluem em um loop que nunca sai da sua rede.',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: 'Gerencia seus dispositivos, estados de entidades e automações, e expõe a interface de agente de conversa. É o hub pelo qual o modelo age — comece em [Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started).' },
          { title: 'Ollama', whyItMatters: 'Roda o modelo local e o serve ao Home Assistant. Para instalar e escolher modelos, veja [como instalar o Ollama](/pt/local-llms/how-to-install-ollama); este guia foca na ligação do smart home.' },
          { title: 'Agente de conversa', whyItMatters: 'A configuração do Home Assistant que aponta o Assist para o modelo do Ollama para que a linguagem natural vire ações de dispositivos — o passo a passo está em [conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration).' },
          { title: 'Voz local (opcional)', whyItMatters: 'O Whisper transcreve a fala e o Piper fala as respostas, então você ganha um assistente de voz totalmente offline — veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: 'O que desbloqueia em relação à automação por regras',
        content:
          '**Um LLM local traz flexibilidade, linguagem natural e contexto que a automação por regras não consegue expressar — ao custo de mais configuração e hardware.** Use regras para gatilhos determinísticos; o LLM onde intenção e contexto importam.',
        columns: ['Aspecto', 'Automação por regras', 'Automação com LLM local'],
        rows: [
          { 'Aspecto': 'Flexibilidade', 'Automação por regras': 'Gatilho fixo → ação fixa', 'Automação com LLM local': 'Interpreta objetivos e se adapta ao contexto' },
          { 'Aspecto': 'Linguagem natural', 'Automação por regras': 'Nenhuma — você cabeia condições exatas', 'Automação com LLM local': 'Comandos e intenções em linguagem natural' },
          { 'Aspecto': 'Consciência de contexto', 'Automação por regras': 'Apenas os estados que você programa', 'Automação com LLM local': 'Raciocina sobre tempo, presença, sensores' },
          { 'Aspecto': 'Configuração', 'Automação por regras': 'Simples por regra', 'Automação com LLM local': 'Maior — hub + modelo + ligação' },
          { 'Aspecto': 'Necessidade de hardware', 'Automação por regras': 'Mínima (um Pi)', 'Automação com LLM local': 'Um mini PC; uma GPU/NPU ajuda na latência' },
        ],
        items: [
          'Para exemplos concretos de automação e os prompts por trás, veja [automações mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm).',
          'Mantenha automações de segurança determinísticas (alarme de fumaça, fechaduras) como regras simples — não as roteie pelo modelo.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'A realidade do hardware',
        content:
          '**Você pode rodar o Home Assistant e um modelo local pequeno em um único mini PC; uma GPU, iGPU capaz ou NPU reduz a latência de resposta.** Este guia não reexplica VRAM nem quantização de modelos — para essa profundidade, links externos.',
        items: [
          '**Uma máquina basta:** um mini PC pode hospedar o Home Assistant mais um modelo pequeno via Ollama. Para escolhas, veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
          '**A latência escala com o hardware:** modelos maiores e inferência só em CPU respondem mais devagar; uma GPU ou iGPU/NPU moderna encurta a distância até um assistente ágil. Para VRAM e tamanho de modelo, veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          '**Escolha o modelo para a tarefa:** o controle da casa premia modelos pequenos, rápidos e com function-calling em vez do maior disponível — veja [melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home).',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: 'Seu caminho passo a passo',
        content:
          '**Monte na ordem: Home Assistant, depois Ollama, depois o agente de conversa, depois voz e automações.** Cada passo é tratado em um tutorial dedicado, para que este artigo principal continue sendo um mapa, não um paredão de comandos.',
        numberedItems: [
          'Configure o Home Assistant em um mini PC — [guia de primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Instale o Ollama e baixe um modelo pequeno — [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
          'Conecte o Ollama ao Home Assistant e defina-o como agente de conversa — [guia de integração](/pt/smart-home/home-assistant-ollama-integration).',
          'Escolha um modelo ajustado ao controle da casa — [melhores modelos LLM locais para o smart home](/pt/smart-home/best-local-llm-models-smart-home).',
          'Adicione um frontend de voz totalmente local — [assistente de voz local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Projete automações contextuais — [automações de IA com um LLM local](/pt/smart-home/ai-automations-local-llm).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual o melhor modelo local para o controle da casa?', a: 'Um modelo pequeno que segue instruções e com function-calling confiável — normalmente na faixa de 3B a 8B — é o melhor encaixe, porque o controle da casa precisa de respostas rápidas e estruturadas mais do que do maior modelo. A escolha certa depende do seu hardware; veja o guia dos melhores modelos LLM locais para o smart home.' },
          { q: 'Preciso de uma GPU para uma casa inteligente com LLM local?', a: 'Não, mas ajuda. Um modelo pequeno roda em uma CPU moderna ou GPU integrada capaz; uma GPU dedicada ou NPU sobretudo reduz a latência de resposta para o assistente ficar mais ágil. Ajuste o tamanho do modelo ao seu hardware.' },
          { q: 'Uma casa inteligente com LLM local funciona offline?', a: 'Sim. O modelo roda localmente via Ollama e o Home Assistant controla os dispositivos pela sua LAN, então o controle em linguagem natural e as automações funcionam sem internet. Só o acesso remoto de fora de casa precisa de conexão.' },
          { q: 'Um LLM local é mais rápido que a Alexa?', a: 'Depende do hardware e do tamanho do modelo. Assistentes na nuvem como a Alexa são ajustados para baixa latência, enquanto um LLM local troca um pouco de velocidade por privacidade e operação offline; em um mini PC com GPU a distância diminui. A vantagem decisiva é privacidade e controle, não velocidade bruta.' },
          { q: 'Uma casa inteligente com LLM local roda em uma Raspberry Pi?', a: 'Uma Raspberry Pi roda bem o Home Assistant, mas a inferência de LLM em uma Pi se limita a modelos muito pequenos e é lenta. Para um assistente com LLM local ágil, um mini PC com iGPU/NPU capaz ou uma GPU dedicada é a melhor opção.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — a integração passo a passo',
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[Automações mais inteligentes com um LLM local](/pt/smart-home/ai-automations-local-llm) — regras contextuais e prompts',
          '[Melhores modelos LLM locais para o controle da casa inteligente](/pt/smart-home/best-local-llm-models-smart-home) — escolha de modelo',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o pilar local-first',
          '[Agentes locais autônomos que realmente funcionam](/pt/power-local-llm/autonomous-local-agents-actually-work) — entre clusters: agentes e fluxos de IA local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Rode Sua Casa Inteligente em um LLM Local (Guia 2026)',
      description: 'Casa inteligente com LLM local 2026: controle em linguagem natural e automações contextuais via Home Assistant + Ollama. Sem nuvem.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'LLM local' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: 'Automação residencial' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual o melhor modelo local para o controle da casa?', acceptedAnswer: { '@type': 'Answer', text: 'Um modelo pequeno que segue instruções e com function-calling confiável, normalmente de 3B a 8B, porque o controle da casa precisa de respostas rápidas e estruturadas mais do que do maior modelo.' } },
        { '@type': 'Question', name: 'Preciso de uma GPU para uma casa inteligente com LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Não, mas ajuda. Um modelo pequeno roda em uma CPU moderna ou GPU integrada; uma GPU dedicada ou NPU sobretudo reduz a latência de resposta.' } },
        { '@type': 'Question', name: 'Uma casa inteligente com LLM local funciona offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O modelo roda localmente via Ollama e o Home Assistant controla os dispositivos pela sua LAN, então o controle e as automações funcionam sem internet.' } },
        { '@type': 'Question', name: 'Um LLM local é mais rápido que a Alexa?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do hardware e do tamanho do modelo. Assistentes na nuvem são ajustados para baixa latência; um LLM local troca um pouco de velocidade por privacidade e operação offline, e em um mini PC com GPU a distância diminui.' } },
        { '@type': 'Question', name: 'Uma casa inteligente com LLM local roda em uma Raspberry Pi?', acceptedAnswer: { '@type': 'Answer', text: 'Uma Pi roda bem o Home Assistant, mas a inferência de LLM em uma Pi se limita a modelos muito pequenos e lentos. Um mini PC com iGPU/NPU capaz ou GPU dedicada é melhor.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '用本地LLM运行你的智能家居（2026指南）',
    seoTitle: '本地LLM智能家居2026：完整指南',
    intro:
      '本地LLM如今可以充当你智能家居的大脑：解读自然语言指令、执行情境化自动化，并驱动一个私密的语音助手，全部在你自己的硬件上运行且无需云端。本指南解释它的含义、为何在2026年变得实用、Home Assistant + Ollama + 本地语音的架构、相对基于规则的自动化它解锁了什么，以及搭建的分步路径。',
    metaDescription:
      '用本地LLM运行智能家居完整指南（2026）：实现自然语言设备控制和情境化智能自动化，通过 Home Assistant 与 Ollama 搭建私密语音控制系统。含硬件选型、安装配置步骤和模型选择建议，数据不离家，无需云端。',
    twitterDescription:
      '把本地LLM当作智能家居的大脑：通过 Home Assistant + Ollama 实现自然语言控制与情境化自动化。零云端。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Intermediate',
    audience: '为智能家居添加本地AI控制的 Home Assistant 用户',
    primaryTerm: 'local LLM smart home',
    targetKeywords: [
      '本地LLM 智能家居',
      'home assistant 本地LLM',
      'ollama 智能家居',
      '自然语言 家庭自动化',
      '本地AI home assistant',
    ],
    leadAnswerBlock:
      '**通过把 Ollama 连接到 Home Assistant，并将模型用作对话代理和自动化大脑，你就能用本地LLM运行智能家居——以自然语言控制设备，全部在你自己的硬件上且无需云端。** 它在2026年变得实用，是因为小而强、支持函数调用的模型如今能在迷你 PC 上运行。',
    quickAnswerTop: {
      zh: {
        question: '可以用本地LLM运行智能家居吗？',
        answer:
          '可以。Home Assistant 与 Ollama 集成，使本地托管的模型充当对话代理，把自然语言请求转化为设备操作。模型在你自己的硬件上运行，因此控制和自动化无需云端即可工作，数据也不出家门。迷你 PC 上的小型模型就足以应付家庭控制。',
        bullets: [
          'Home Assistant + Ollama = 本地模型作为对话代理',
          '自然语言控制：“把厨房调暗并烧水”',
          '超越僵硬 if-then 的情境化自动化',
          '在你的硬件上离线运行：无云端、无日志记录',
          '迷你 PC 上的小型函数调用模型即可应付家庭控制',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '它意味着什么', anchor: 'what-it-means' },
      { label: '为何在2026可行', anchor: 'why-2026' },
      { label: '架构', anchor: 'architecture' },
      { label: '它解锁了什么', anchor: 'what-it-unlocks' },
      { label: '硬件现实', anchor: 'hardware' },
      { label: '分步路径', anchor: 'step-by-step' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '把 Ollama 连接到 Home Assistant，本地托管的模型就成为你智能家居的大脑：自然语言控制与情境化自动化，无需云端。' },
      { type: 'plain-terms', content: '传统的智能家居自动化是僵硬的规则：有动静就开灯。本地LLM增加了一层，能理解自然语言和情境——你可以说“我要出门了”，它就能判断该关掉什么。模型通过 Ollama 在你自己的机器上运行并接入 Home Assistant，因此这一切都不依赖云服务。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Home Assistant 内置 Ollama 集成；本地模型成为对话代理',
          '你用自然语言控制设备，而不必记住精确的指令短语',
          '模型可执行僵硬规则无法表达的情境化自动化',
          '一切都在你的硬件上运行：无云端，使用数据不出家门',
          '迷你 PC 上的小型函数调用模型即可；GPU 或强力 iGPU/NPU 可降低延迟',
          '搭建顺序：先 Home Assistant，再 Ollama，然后连接对话代理，最后添加本地语音',
        ],
      },
      whatItMeans: {
        id: 'what-it-means',
        title: '用本地LLM运行智能家居究竟意味着什么',
        content:
          '**它意味着一个本地托管的语言模型位于你和设备之间，把自然语言意图翻译成 Home Assistant 的操作，并做出固定规则无法做出的自动化决策。** LLM 担当两个角色：对话代理（你说，它做）和自动化大脑（基于情境推理）。',
        items: [
          '**对话代理：** 你说或输入“把客厅弄得温馨些”，模型就把该意图映射为具体的设备调用——调暗灯光、设为暖色、放下百叶窗。',
          '**自动化大脑：** 不是一个触发→一个动作，模型能权衡情境：时间、谁在家、传感器状态，以及一个自然语言目标。',
          '**从设计上本地化：** 模型通过 Ollama 在你自己的机器上运行，因此你的指令和家中状态都不会发给第三方。',
        ],
      },
      why2026: {
        id: 'why-2026',
        title: '为何在2026可行',
        content:
          '**三件事汇合了：小型模型变得足以胜任家庭控制，获得了可靠的函数调用，Home Assistant 推出了一流的 LLM 集成。** 这些条件几年前对家庭用户还不曾同时具备。',
        items: [
          '**能干的小型模型：** 3B–8B 的模型如今足以遵循指令，把意图映射为设备操作，并能装进普通硬件。模型机制与规模选择见[什么是本地LLM](/zh/local-llms/what-are-local-llms)——本指南不再赘述。',
          '**函数调用 / 工具使用：** 家庭控制依赖模型输出结构化调用（开启、设温）。现代本地模型支持这一点，这正是可靠控制成为可能的原因。',
          '**Home Assistant 集成：** Home Assistant 暴露对话代理接口和 Ollama 集成，因此把本地模型接到你的设备只是一步配置，而非定制开发。',
        ],
      },
      architecture: {
        id: 'architecture',
        title: '架构：Home Assistant + Ollama + 本地语音',
        content:
          '**这套堆栈是你自有硬件上的三个组件：Home Assistant（设备 + 自动化）、Ollama（本地模型运行时）和本地语音管线（Assist + Whisper + Piper）。** 数据在一个永不离开你网络的回路中流动。',
        numberedItems: [
          { title: 'Home Assistant', whyItMatters: '管理你的设备、实体状态和自动化，并暴露对话代理接口。它是模型据以行动的中枢——从[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)开始。' },
          { title: 'Ollama', whyItMatters: '运行本地模型并提供给 Home Assistant。安装与模型选择见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)；本指南专注于智能家居的接线。' },
          { title: '对话代理', whyItMatters: 'Home Assistant 中把 Assist 指向 Ollama 模型的设置，使自然语言变为设备操作——分步说明见[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration)。' },
          { title: '本地语音（可选）', whyItMatters: 'Whisper 转写语音，Piper 朗读回复，于是你获得一个完全离线的语音助手——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。' },
        ],
      },
      whatItUnlocks: {
        id: 'what-it-unlocks',
        title: '相对基于规则的自动化它解锁了什么',
        content:
          '**本地LLM带来基于规则的自动化无法表达的灵活性、自然语言和情境——代价是更多配置和硬件。** 把规则用于确定性触发；把 LLM 用在意图和情境要紧的地方。',
        columns: ['维度', '基于规则的自动化', '本地LLM自动化'],
        rows: [
          { '维度': '灵活性', '基于规则的自动化': '固定触发 → 固定动作', '本地LLM自动化': '解读目标并适应情境' },
          { '维度': '自然语言', '基于规则的自动化': '无——你需接线精确条件', '本地LLM自动化': '自然语言命令与意图' },
          { '维度': '情境感知', '基于规则的自动化': '仅你脚本化的状态', '本地LLM自动化': '跨时间、在场、传感器推理' },
          { '维度': '配置', '基于规则的自动化': '每条规则简单', '本地LLM自动化': '更高——中枢 + 模型 + 接线' },
          { '维度': '硬件需求', '基于规则的自动化': '极小（一个 Pi）', '本地LLM自动化': '一台迷你 PC；GPU/NPU 有助于延迟' },
        ],
        items: [
          '具体的自动化示例及其背后的提示词，参见[用本地LLM实现更聪明的自动化](/zh/smart-home/ai-automations-local-llm)。',
          '把确定性的安全自动化（烟雾报警、门锁）保持为简单规则——不要经过模型。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '硬件现实',
        content:
          '**你可以在一台迷你 PC 上同时运行 Home Assistant 和一个小型本地模型；GPU、强力 iGPU 或 NPU 可降低响应延迟。** 本指南不再赘述 VRAM 或模型量化——相关深度请见外链。',
        items: [
          '**一台机器就够：** 一台迷你 PC 可同时托管 Home Assistant 和通过 Ollama 的小型模型。选购见[Home Assistant + 本地AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
          '**延迟随硬件而变：** 更大的模型和纯 CPU 推理响应更慢；GPU 或现代 iGPU/NPU 能把差距缩短到一个利落的助手。VRAM 与模型规模见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '**按任务选模型：** 家庭控制更看重小而快、支持函数调用的模型，而非最大的——参见[智能家居控制的最佳本地LLM模型](/zh/smart-home/best-local-llm-models-smart-home)。',
        ],
      },
      stepByStep: {
        id: 'step-by-step',
        title: '你的分步路径',
        content:
          '**按顺序搭建：Home Assistant，然后 Ollama，然后对话代理，再加语音和自动化。** 每一步都在专门的教程中讲解，使这篇旗舰文章保持为一张地图，而非一堵命令墙。',
        numberedItems: [
          '在迷你 PC 上设置 Home Assistant——[入门指南](/zh/smart-home/home-assistant-getting-started)。',
          '安装 Ollama 并拉取一个小型模型——[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)。',
          '把 Ollama 连接到 Home Assistant 并设为对话代理——[集成教程](/zh/smart-home/home-assistant-ollama-integration)。',
          '选择适配家庭控制的模型——[智能家居的最佳本地LLM模型](/zh/smart-home/best-local-llm-models-smart-home)。',
          '添加一个完全本地的语音前端——[本地语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '设计情境化自动化——[用本地LLM实现AI自动化](/zh/smart-home/ai-automations-local-llm)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '家庭控制最好用哪个本地模型？', a: '一个能遵循指令、具备可靠函数调用的小型模型——通常在 3B 到 8B 之间——最为合适，因为家庭控制更需要快速且结构化的响应，而非最大的模型。正确选择取决于你的硬件；当前选项见智能家居最佳本地LLM模型指南。' },
          { q: '本地LLM智能家居需要 GPU 吗？', a: '不需要，但有帮助。小型模型可在现代 CPU 或强力集成 GPU 上运行；独立 GPU 或 NPU 主要降低响应延迟，让助手更利落。应按硬件匹配模型规模。' },
          { q: '本地LLM智能家居能离线工作吗？', a: '能。模型通过 Ollama 在本地运行，Home Assistant 经由你的 LAN 控制设备，因此自然语言控制和自动化无需联网即可工作。只有从屋外远程访问才需要联网。' },
          { q: '本地LLM比 Alexa 更快吗？', a: '取决于硬件和模型规模。Alexa 等云端助手为低延迟优化，而本地LLM以一些速度换取隐私和离线运行；在配备 GPU 的迷你 PC 上差距会缩小。决定性优势是隐私与掌控，而非纯粹速度。' },
          { q: '本地LLM智能家居能在 Raspberry Pi 上运行吗？', a: 'Raspberry Pi 能很好地运行 Home Assistant，但 Pi 上的 LLM 推理仅限于非常小且缓慢的模型。要获得利落的本地LLM助手，配备强力 iGPU/NPU 或独立 GPU 的迷你 PC 是更好的选择。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 分步集成',
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — Assist + Whisper + Piper',
          '[用本地LLM实现更聪明的自动化](/zh/smart-home/ai-automations-local-llm) — 情境化规则与提示词',
          '[智能家居控制的最佳本地LLM模型](/zh/smart-home/best-local-llm-models-smart-home) — 模型选择',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地优先的支柱',
          '[真正可用的自主本地代理](/zh/power-local-llm/autonomous-local-agents-actually-work) — 跨集群：本地AI代理与工作流',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '用本地LLM运行你的智能家居（2026指南）',
      description: '用本地LLM运行智能家居完整指南（2026）：实现自然语言设备控制和情境化智能自动化，通过 Home Assistant 与 Ollama 搭建私密语音控制系统。含硬件选型、安装配置步骤和模型选择建议，数据不离家，无需云端。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-llm-smart-home-complete-guide',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '本地LLM' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Ollama' }, { '@type': 'Thing', name: '家庭自动化' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '家庭控制最好用哪个本地模型？', acceptedAnswer: { '@type': 'Answer', text: '一个能遵循指令、具备可靠函数调用的小型模型，通常在 3B 到 8B 之间，因为家庭控制更需要快速且结构化的响应，而非最大的模型。' } },
        { '@type': 'Question', name: '本地LLM智能家居需要 GPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要，但有帮助。小型模型可在现代 CPU 或集成 GPU 上运行；独立 GPU 或 NPU 主要降低响应延迟。' } },
        { '@type': 'Question', name: '本地LLM智能家居能离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '能。模型通过 Ollama 在本地运行，Home Assistant 经由你的 LAN 控制设备，因此控制和自动化无需联网即可工作。' } },
        { '@type': 'Question', name: '本地LLM比 Alexa 更快吗？', acceptedAnswer: { '@type': 'Answer', text: '取决于硬件和模型规模。云端助手为低延迟优化；本地LLM以一些速度换取隐私和离线运行，在配备 GPU 的迷你 PC 上差距会缩小。' } },
        { '@type': 'Question', name: '本地LLM智能家居能在 Raspberry Pi 上运行吗？', acceptedAnswer: { '@type': 'Answer', text: 'Pi 能很好地运行 Home Assistant，但 Pi 上的 LLM 推理仅限于非常小且缓慢的模型。配备强力 iGPU/NPU 或独立 GPU 的迷你 PC 更好。' } },
      ],
    },
  },
}
