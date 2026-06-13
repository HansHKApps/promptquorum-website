import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: Complete Getting-Started Guide (2026)',
    seoTitle: 'Home Assistant 2026: Complete Local Smart Home Setup',
    intro:
      'Home Assistant is the leading local-first smart home hub: install it on a Raspberry Pi or mini PC, add integrations, and control everything locally with no cloud. This getting-started guide covers why Home Assistant, the install options, first integrations, the dashboard, your first automation, and where to add local AI later — without re-explaining the LLM mechanics.',
    metaDescription:
      'Get started with Home Assistant in 2026: install options (HAOS, container, Pi vs mini PC), first integrations, dashboards, and your first local automation.',
    twitterDescription:
      'Home Assistant getting-started guide: install on a Pi or mini PC, add integrations, build your first local automation. The local-first hub.',
    readTime: '10 min read',
    educationalLevel: 'Intermediate',
    audience: 'People setting up their first Home Assistant hub',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant getting started',
      'home assistant setup',
      'home assistant install',
      'home assistant raspberry pi vs mini pc',
      'home assistant beginner guide',
    ],
    leadAnswerBlock:
      '**Home Assistant is free, open-source, local-first smart home software you install on a Raspberry Pi or mini PC — add integrations, build a dashboard, and control devices locally with no cloud.** Use Home Assistant OS (HAOS) on dedicated hardware for the easiest start.',
    quickAnswerTop: {
      en: {
        question: 'How do I get started with Home Assistant?',
        answer:
          'Install Home Assistant OS on a Raspberry Pi, a mini PC, or dedicated Home Assistant hardware, open the web interface, and add integrations for your devices. Build a dashboard, create a first automation, and add a Zigbee or Z-Wave coordinator for local devices. Everything runs locally with no cloud account required.',
        bullets: [
          'Install Home Assistant OS (HAOS) for the easiest setup',
          'Run it on a Raspberry Pi (basics) or mini PC (basics + local AI)',
          'Add integrations for your devices through the UI',
          'Add a Zigbee/Z-Wave coordinator for local protocols',
          'Build a dashboard and a first automation — all local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Home Assistant', anchor: 'why-ha' },
      { label: 'Install Options', anchor: 'install' },
      { label: 'First Integrations', anchor: 'integrations' },
      { label: 'The Dashboard', anchor: 'dashboard' },
      { label: 'Your First Automation', anchor: 'automation' },
      { label: 'Adding AI Later', anchor: 'ai-later' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant is free, open-source, local-first hub software you install on a Pi or mini PC to control devices locally with no cloud.' },
      { type: 'plain-terms', content: 'Home Assistant is the software that runs your smart home on your own hardware instead of a company cloud. You install it on a small computer, connect your devices, and build dashboards and automations. It is the foundation of a private, local-first smart home.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant is free, open-source, and local-first — the standard private smart home hub',
          'Install Home Assistant OS (HAOS) on dedicated hardware for the easiest start',
          'Raspberry Pi handles the basics; a mini PC is better if you also want local AI',
          'Add integrations through the UI; no coding needed for common devices',
          'Add a Zigbee or Z-Wave coordinator (USB stick) for local protocols',
          'Add a local LLM brain later — link out for the LLM mechanics',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Why Home Assistant?',
        content:
          '**Home Assistant is the foundation of a local smart home because it runs on your own hardware, speaks every major local protocol, and keeps automations working offline.** It is the most flexible and private hub.',
        items: [
          'Local-first: control and automations run without the cloud.',
          'Broad support: thousands of integrations across brands and protocols.',
          'Foundation for local AI — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'Which Install Option Should You Choose?',
        content:
          '**Use Home Assistant OS (HAOS) on dedicated hardware for the simplest setup, a container install if you already run a server, and choose a Raspberry Pi for basics or a mini PC if you want local AI.** HAOS includes the add-on system you will want.',
        columns: ['Install method', 'Difficulty', 'Best for'],
        rows: [
          { 'Install method': 'HAOS on dedicated device', 'Difficulty': 'Easiest', 'Best for': 'Most users; full add-on support' },
          { 'Install method': 'HAOS on Raspberry Pi', 'Difficulty': 'Easy', 'Best for': 'Basics, low power' },
          { 'Install method': 'HAOS on mini PC', 'Difficulty': 'Easy', 'Best for': 'Basics + local AI' },
          { 'Install method': 'Container (Docker)', 'Difficulty': 'Moderate', 'Best for': 'Existing home servers/NAS' },
        ],
        items: [
          'For hardware sizing including a local LLM, see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Adding Your First Integrations',
        content:
          '**Add integrations through Settings → Devices & Services; many devices are auto-discovered on your network.** For Zigbee or Z-Wave devices, add a coordinator first.',
        items: [
          'Auto-discovery finds many Wi-Fi and Matter devices automatically.',
          'Add a Zigbee coordinator (and the ZHA or Zigbee2MQTT integration) for Zigbee devices — see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
          'Expose only the entities you want, especially before connecting voice or AI.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'The Dashboard',
        content:
          '**Home Assistant auto-generates a dashboard you can customise with cards for your devices.** Start with the default and refine it over time.',
        items: [
          'The default dashboard lists your devices and areas automatically.',
          'Add cards for the controls you use most.',
          'Create per-room views as your setup grows.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Your First Automation',
        content:
          '**Create a simple automation in Settings → Automations using the visual editor — for example, turn on a light at sunset.** No coding is required for common rules.',
        numberedItems: [
          'Open Settings → Automations & Scenes → Create Automation.',
          'Choose a trigger (time, sunset, or a sensor state).',
          'Choose an action (turn on a light, send a notification).',
          'Save and test it, then refine.',
          'For context-aware rules later, see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'Adding AI Later',
        content:
          '**Once the basics work, add a local LLM as a conversation agent — but do that after your devices and automations are stable.** This guide does not re-explain Ollama; link out for that.',
        items: [
          'Wire a local model via the [Ollama integration](/smart-home/home-assistant-ollama-integration).',
          'For Ollama setup and model choice, see [how to install Ollama](/local-llms/how-to-install-ollama) (cross-cluster).',
          'Add a local voice front-end with [the local voice assistant guide](/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Raspberry Pi or mini PC for Home Assistant?', a: 'A Raspberry Pi runs Home Assistant well for typical smart home use. Choose a mini PC if you also want to run a local LLM, larger Whisper models, or Frigate camera detection on the same box, since those need more compute.' },
          { q: 'Is Home Assistant free?', a: 'Yes. Home Assistant is free and open-source. You only pay for the hardware it runs on and any optional extras (for example, a cloud relay for easy remote access). Core local control needs no subscription.' },
          { q: 'Do I need to code to use Home Assistant?', a: 'No. Common setups, dashboards, and automations are built through a graphical interface. YAML configuration is available for advanced automations but is optional for getting started.' },
          { q: 'Can Home Assistant run AI?', a: 'Yes. Home Assistant integrates with Ollama so a local model can act as a conversation agent, and it supports local voice with Whisper and Piper. Running these on a mini PC keeps everything local. See the Ollama integration guide for setup.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full local-first stack',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — add a local AI agent',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — choose the right box',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: Complete Getting-Started Guide (2026)',
      description: 'Get started with Home Assistant in 2026: install options (HAOS, container, Pi vs mini PC), first integrations, dashboards, and your first local automation.',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-getting-started',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Home automation' }, { '@type': 'Thing', name: 'Local control' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi or mini PC for Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'A Raspberry Pi runs Home Assistant well for typical use. Choose a mini PC if you also want a local LLM, larger Whisper models, or Frigate detection on the same box.' } },
        { '@type': 'Question', name: 'Is Home Assistant free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is free and open-source. You pay only for hardware and optional extras like a cloud relay for remote access. Core local control needs no subscription.' } },
        { '@type': 'Question', name: 'Do I need to code to use Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No. Common setups, dashboards, and automations are built through a graphical interface. YAML is optional for advanced automations.' } },
        { '@type': 'Question', name: 'Can Home Assistant run AI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It integrates with Ollama for a local conversation agent and supports local voice with Whisper and Piper. Running these on a mini PC keeps everything local.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: دليل البدء الشامل (2026)',
    seoTitle: 'Home Assistant 2026: إعداد المنزل الذكي المحلي',
    intro:
      'Home Assistant هو المركز الرائد للمنزل الذكي المحلي أولًا: ثبّته على Raspberry Pi أو mini PC، أضف التكاملات، وتحكم في كل شيء محليًا بدون سحابة. يغطي هذا الدليل للمبتدئين سبب اختيار Home Assistant وخيارات التثبيت والتكاملات الأولى ولوحة التحكم وأول أتمتة وكيفية إضافة الذكاء الاصطناعي المحلي لاحقًا — دون إعادة شرح ميكانيكا النموذج اللغوي.',
    metaDescription:
      'Home Assistant مجاني ومفتوح المصدر: تثبيته على Raspberry Pi أو mini PC، خيارات HAOS والحاوية، أول تكاملات Zigbee، لوحة تحكم، وأول أتمتة محلية.',
    twitterDescription:
      'دليل البدء مع Home Assistant: ثبّته على Pi أو mini PC، أضف التكاملات، وابنِ أول أتمتة محلية. المركز المحلي أولًا.',
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'من يُعدّون أول مركز Home Assistant لهم',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'Home Assistant للمبتدئين',
      'إعداد Home Assistant',
      'تثبيت Home Assistant',
      'Home Assistant raspberry pi مقابل mini pc',
      'دليل مبتدئ Home Assistant',
    ],
    leadAnswerBlock:
      '**Home Assistant برنامج منزل ذكي مجاني ومفتوح المصدر ومحلي أولًا تُثبّته على Raspberry Pi أو mini PC — أضف التكاملات وابنِ لوحة تحكم وتحكم في الأجهزة محليًا بدون سحابة.** استخدم Home Assistant OS (HAOS) على جهاز مخصص للبدء الأسهل.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبدأ مع Home Assistant؟',
        answer:
          'ثبّت Home Assistant OS على Raspberry Pi أو mini PC أو جهاز Home Assistant مخصص، افتح واجهة الويب، وأضف تكاملات لأجهزتك. ابنِ لوحة تحكم وأنشئ أول أتمتة وأضف منسّق Zigbee أو Z-Wave للأجهزة المحلية. كل شيء يعمل محليًا ولا يتطلب حسابًا سحابيًا.',
        bullets: [
          'ثبّت Home Assistant OS (HAOS) للإعداد الأسهل',
          'شغّله على Raspberry Pi (أساسيات) أو mini PC (أساسيات + ذكاء اصطناعي محلي)',
          'أضف تكاملات لأجهزتك عبر واجهة المستخدم',
          'أضف منسّق Zigbee/Z-Wave للبروتوكولات المحلية',
          'ابنِ لوحة تحكم وأول أتمتة — كل ذلك محليًا',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا Home Assistant', anchor: 'why-ha' },
      { label: 'خيارات التثبيت', anchor: 'install' },
      { label: 'التكاملات الأولى', anchor: 'integrations' },
      { label: 'لوحة التحكم', anchor: 'dashboard' },
      { label: 'أول أتمتة', anchor: 'automation' },
      { label: 'إضافة الذكاء الاصطناعي لاحقًا', anchor: 'ai-later' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant برنامج مركز مجاني ومفتوح المصدر محلي أولًا تُثبّته على Pi أو mini PC للتحكم في الأجهزة محليًا بدون سحابة.' },
      { type: 'plain-terms', content: 'Home Assistant هو البرنامج الذي يشغّل منزلك الذكي على جهازك الخاص بدلًا من سحابة شركة. تُثبّته على حاسوب صغير وتوصّل أجهزتك وتبني لوحات تحكم وأتمتة. إنه أساس منزل ذكي خاص ومحلي.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Home Assistant مجاني ومفتوح المصدر ومحلي أولًا — المركز الخاص المعياري للمنزل الذكي',
          'ثبّت Home Assistant OS (HAOS) على جهاز مخصص للبدء الأسهل',
          'Raspberry Pi يتعامل مع الأساسيات؛ mini PC أفضل إذا أردت أيضًا ذكاءً اصطناعيًا محليًا',
          'أضف التكاملات عبر واجهة المستخدم؛ لا حاجة للبرمجة للأجهزة الشائعة',
          'أضف منسّق Zigbee أو Z-Wave (عصا USB) للبروتوكولات المحلية',
          'أضف دماغ نموذج LLM محلي لاحقًا — أحل خارجًا لميكانيكا النموذج',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'لماذا Home Assistant؟',
        content:
          '**Home Assistant هو أساس المنزل الذكي المحلي لأنه يعمل على جهازك الخاص ويتحدث كل بروتوكول محلي رئيسي ويُبقي الأتمتة تعمل دون إنترنت.** إنه الأكثر مرونةً وخصوصيةً.',
        items: [
          'محلي أولًا: التحكم والأتمتة تعمل بدون السحابة.',
          'دعم واسع: آلاف التكاملات عبر الماركات والبروتوكولات.',
          'أساس للذكاء الاصطناعي المحلي — راجع [تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'أي خيار تثبيت تختار؟',
        content:
          '**استخدم Home Assistant OS (HAOS) على جهاز مخصص للإعداد الأبسط، وتثبيت حاوية إذا كنت تشغّل بالفعل خادمًا، واختر Raspberry Pi للأساسيات أو mini PC إذا أردت الذكاء الاصطناعي المحلي.** HAOS يتضمن نظام الإضافات الذي ستحتاجه.',
        columns: ['طريقة التثبيت', 'الصعوبة', 'الأفضل لـ'],
        rows: [
          { 'طريقة التثبيت': 'HAOS على جهاز مخصص', 'الصعوبة': 'الأسهل', 'الأفضل لـ': 'معظم المستخدمين؛ دعم كامل للإضافات' },
          { 'طريقة التثبيت': 'HAOS على Raspberry Pi', 'الصعوبة': 'سهل', 'الأفضل لـ': 'الأساسيات، منخفض الطاقة' },
          { 'طريقة التثبيت': 'HAOS على mini PC', 'الصعوبة': 'سهل', 'الأفضل لـ': 'الأساسيات + ذكاء اصطناعي محلي' },
          { 'طريقة التثبيت': 'حاوية (Docker)', 'الصعوبة': 'متوسط', 'الأفضل لـ': 'الخوادم المنزلية/NAS الموجودة' },
        ],
        items: [
          'لتحديد حجم الأجهزة بما في ذلك نموذج LLM محلي، راجع [أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'إضافة أول تكاملاتك',
        content:
          '**أضف التكاملات عبر الإعدادات ← الأجهزة والخدمات؛ يتم اكتشاف كثير من الأجهزة تلقائيًا على شبكتك.** لأجهزة Zigbee أو Z-Wave، أضف منسّقًا أولًا.',
        items: [
          'الاكتشاف التلقائي يعثر على كثير من أجهزة Wi-Fi وMatter تلقائيًا.',
          'أضف منسّق Zigbee (وتكامل ZHA أو Zigbee2MQTT) لأجهزة Zigbee — راجع [بروتوكولات المنزل الذكي شرح](/ar/smart-home/smart-home-protocols-explained).',
          'اعرض فقط الكيانات التي تريدها، خاصةً قبل توصيل الصوت أو الذكاء الاصطناعي.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'لوحة التحكم',
        content:
          '**ينشئ Home Assistant تلقائيًا لوحة تحكم يمكنك تخصيصها ببطاقات لأجهزتك.** ابدأ بالافتراضي وحسّنه تدريجيًا.',
        items: [
          'لوحة التحكم الافتراضية تُدرج أجهزتك ومناطقك تلقائيًا.',
          'أضف بطاقات للعناصر التحكمية الأكثر استخدامًا.',
          'أنشئ طرق عرض لكل غرفة مع نمو إعدادك.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'أول أتمتة',
        content:
          '**أنشئ أتمتة بسيطة في الإعدادات ← الأتمتة باستخدام المحرر المرئي — مثلًا، تشغيل ضوء عند الغروب.** لا يلزم برمجة للقواعد الشائعة.',
        numberedItems: [
          'افتح الإعدادات ← الأتمتة والمشاهد ← إنشاء أتمتة.',
          'اختر محفّزًا (وقت أو غروب أو حالة مستشعر).',
          'اختر إجراءً (تشغيل ضوء أو إرسال إشعار).',
          'احفظها واختبرها، ثم حسّنها.',
          'لقواعد واعية بالسياق لاحقًا، راجع [أتمتة الذكاء الاصطناعي بنموذج LLM محلي](/ar/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'إضافة الذكاء الاصطناعي لاحقًا',
        content:
          '**بمجرد عمل الأساسيات، أضف نموذج LLM محلي كعامل محادثة — لكن افعل ذلك بعد استقرار أجهزتك وأتمتتك.** لا يعيد هذا الدليل شرح Ollama؛ أحل خارجًا لذلك.',
        items: [
          'اربط نموذجًا محليًا عبر [تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration).',
          'لإعداد Ollama واختيار النموذج، راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) (متعدد العناقيد).',
          'أضف واجهة صوتية محلية مع [دليل مساعد الصوت المحلي](/ar/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'Raspberry Pi أم mini PC لـ Home Assistant؟', a: 'Raspberry Pi يشغّل Home Assistant بشكل جيد للاستخدام المنزلي الذكي الاعتيادي. اختر mini PC إذا أردت أيضًا تشغيل نموذج LLM محلي أو نماذج Whisper أكبر أو كشف كاميرا Frigate على نفس الصندوق، إذ تحتاج تلك إلى قدرة حسابية أكبر.' },
          { q: 'هل Home Assistant مجاني؟', a: 'نعم. Home Assistant مجاني ومفتوح المصدر. تدفع فقط للجهاز الذي يعمل عليه وأي إضافات اختيارية (مثل مرحّل سحابي للوصول عن بُعد السهل). التحكم المحلي الأساسي لا يحتاج اشتراكًا.' },
          { q: 'هل أحتاج إلى البرمجة لاستخدام Home Assistant؟', a: 'لا. الإعدادات الشائعة ولوحات التحكم والأتمتة تُبنى عبر واجهة رسومية. تكوين YAML متاح للأتمتة المتقدمة لكنه اختياري للبداية.' },
          { q: 'هل يمكن لـ Home Assistant تشغيل الذكاء الاصطناعي؟', a: 'نعم. Home Assistant يتكامل مع Ollama ليتصرف نموذج محلي كعامل محادثة، ويدعم الصوت المحلي مع Whisper وPiper. تشغيل هذه على mini PC يبقي كل شيء محليًا. راجع دليل تكامل Ollama للإعداد.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — المجموعة الكاملة المحلية أولًا',
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — إضافة عامل ذكاء اصطناعي محلي',
          '[أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — اختيار الصندوق المناسب',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — متعدد العناقيد: تشغيل نموذج محلي',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: دليل البدء الشامل (2026)',
      description: 'ابدأ مع Home Assistant في 2026: خيارات التثبيت (HAOS، حاوية، Pi مقابل mini PC)، التكاملات الأولى، لوحات التحكم، وأول أتمتة محلية.',
      url: 'https://www.promptquorum.com/ar/smart-home/home-assistant-getting-started',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'أتمتة المنزل' }, { '@type': 'Thing', name: 'التحكم المحلي' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi أم mini PC لـ Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'Raspberry Pi يشغّل Home Assistant بشكل جيد للاستخدام الاعتيادي. اختر mini PC إذا أردت أيضًا نموذج LLM محلي أو نماذج Whisper أكبر أو كشف Frigate على نفس الصندوق.' } },
        { '@type': 'Question', name: 'هل Home Assistant مجاني؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. مجاني ومفتوح المصدر. تدفع فقط للجهاز وإضافات اختيارية كمرحّل سحابي للوصول عن بُعد. التحكم المحلي الأساسي لا يحتاج اشتراكًا.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى البرمجة لاستخدام Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. الإعدادات الشائعة ولوحات التحكم والأتمتة تُبنى عبر واجهة رسومية. YAML اختياري للأتمتة المتقدمة.' } },
        { '@type': 'Question', name: 'هل يمكن لـ Home Assistant تشغيل الذكاء الاصطناعي؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يتكامل مع Ollama لعامل محادثة محلي ويدعم الصوت المحلي مع Whisper وPiper. تشغيل هذه على mini PC يبقي كل شيء محليًا.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: Vollständiger Einsteiger-Leitfaden (2026)',
    seoTitle: 'Home Assistant 2026: Lokales Smart Home einrichten',
    intro:
      'Home Assistant ist der führende Local-First-Smart-Home-Hub: Installieren Sie ihn auf einem Raspberry Pi oder Mini-PC, fügen Sie Integrationen hinzu und steuern Sie alles lokal ohne Cloud. Dieser Einsteiger-Leitfaden behandelt Warum Home Assistant, die Installationsoptionen, erste Integrationen, das Dashboard, Ihre erste Automatisierung und wo Sie später lokale KI hinzufügen – ohne die LLM-Mechanik erneut zu erklären.',
    metaDescription:
      'Erste Schritte mit Home Assistant 2026: HAOS oder Container, Pi vs Mini-PC, erste Integrationen, Dashboards und lokale Automatisierung.',
    twitterDescription:
      'Home Assistant Einsteiger-Leitfaden: auf einem Pi oder Mini-PC installieren, Integrationen hinzufügen, Ihre erste lokale Automatisierung bauen. Der Local-First-Hub.',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Menschen, die ihren ersten Home-Assistant-Hub einrichten',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant erste schritte',
      'home assistant einrichten',
      'home assistant installieren',
      'home assistant raspberry pi vs mini-pc',
      'home assistant einsteiger leitfaden',
    ],
    leadAnswerBlock:
      '**Home Assistant ist kostenlose, quelloffene, Local-First-Smart-Home-Software, die Sie auf einem Raspberry Pi oder Mini-PC installieren – fügen Sie Integrationen hinzu, bauen Sie ein Dashboard und steuern Sie Geräte lokal ohne Cloud.** Nutzen Sie Home Assistant OS (HAOS) auf dedizierter Hardware für den einfachsten Start.',
    quickAnswerTop: {
      de: {
        question: 'Wie fange ich mit Home Assistant an?',
        answer:
          'Installieren Sie Home Assistant OS auf einem Raspberry Pi, einem Mini-PC oder dedizierter Home-Assistant-Hardware, öffnen Sie die Weboberfläche und fügen Sie Integrationen für Ihre Geräte hinzu. Bauen Sie ein Dashboard, erstellen Sie eine erste Automatisierung und fügen Sie für lokale Geräte einen Zigbee- oder Z-Wave-Koordinator hinzu. Alles läuft lokal ohne erforderliches Cloud-Konto.',
        bullets: [
          'Home Assistant OS (HAOS) für die einfachste Einrichtung installieren',
          'Auf einem Raspberry Pi (Grundlagen) oder Mini-PC (Grundlagen + lokale KI) betreiben',
          'Integrationen für Ihre Geräte über die Oberfläche hinzufügen',
          'Einen Zigbee/Z-Wave-Koordinator für lokale Protokolle hinzufügen',
          'Ein Dashboard und eine erste Automatisierung bauen – alles lokal',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum Home Assistant', anchor: 'why-ha' },
      { label: 'Installationsoptionen', anchor: 'install' },
      { label: 'Erste Integrationen', anchor: 'integrations' },
      { label: 'Das Dashboard', anchor: 'dashboard' },
      { label: 'Ihre erste Automatisierung', anchor: 'automation' },
      { label: 'KI später hinzufügen', anchor: 'ai-later' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant ist kostenlose, quelloffene Local-First-Hub-Software, die Sie auf einem Pi oder Mini-PC installieren, um Geräte lokal ohne Cloud zu steuern.' },
      { type: 'plain-terms', content: 'Home Assistant ist die Software, die Ihr Smart Home auf Ihrer eigenen Hardware statt in einer Firmen-Cloud betreibt. Sie installieren sie auf einem kleinen Computer, verbinden Ihre Geräte und bauen Dashboards und Automatisierungen. Sie ist die Grundlage eines privaten, lokalen Smart Homes.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant ist kostenlos, quelloffen und Local-First – der Standard für private Smart-Home-Hubs',
          'Home Assistant OS (HAOS) auf dedizierter Hardware für den einfachsten Start installieren',
          'Ein Raspberry Pi bewältigt die Grundlagen; ein Mini-PC ist besser, wenn Sie auch lokale KI wollen',
          'Integrationen über die Oberfläche hinzufügen; für übliche Geräte kein Programmieren nötig',
          'Einen Zigbee- oder Z-Wave-Koordinator (USB-Stick) für lokale Protokolle hinzufügen',
          'Ein lokales LLM-Gehirn später hinzufügen – für die LLM-Mechanik nach außen verlinken',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Warum Home Assistant?',
        content:
          '**Home Assistant ist die Grundlage eines lokalen Smart Homes, weil es auf Ihrer eigenen Hardware läuft, jedes wichtige lokale Protokoll spricht und Automatisierungen offline am Laufen hält.** Es ist der flexibelste und privateste Hub.',
        items: [
          'Local-First: Steuerung und Automatisierungen laufen ohne die Cloud.',
          'Breite Unterstützung: Tausende Integrationen über Marken und Protokolle hinweg.',
          'Grundlage für lokale KI – siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'Welche Installationsoption sollten Sie wählen?',
        content:
          '**Nutzen Sie Home Assistant OS (HAOS) auf dedizierter Hardware für die einfachste Einrichtung, eine Container-Installation, wenn Sie bereits einen Server betreiben, und wählen Sie einen Raspberry Pi für die Grundlagen oder einen Mini-PC, wenn Sie lokale KI wollen.** HAOS enthält das Add-on-System, das Sie brauchen werden.',
        columns: ['Installationsmethode', 'Schwierigkeit', 'Am besten für'],
        rows: [
          { 'Installationsmethode': 'HAOS auf dediziertem Gerät', 'Schwierigkeit': 'Am einfachsten', 'Am besten für': 'Die meisten; volle Add-on-Unterstützung' },
          { 'Installationsmethode': 'HAOS auf Raspberry Pi', 'Schwierigkeit': 'Einfach', 'Am besten für': 'Grundlagen, niedriger Stromverbrauch' },
          { 'Installationsmethode': 'HAOS auf Mini-PC', 'Schwierigkeit': 'Einfach', 'Am besten für': 'Grundlagen + lokale KI' },
          { 'Installationsmethode': 'Container (Docker)', 'Schwierigkeit': 'Mittel', 'Am besten für': 'Vorhandene Heimserver/NAS' },
        ],
        items: [
          'Für die Hardware-Dimensionierung inklusive eines lokalen LLM siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Ihre ersten Integrationen hinzufügen',
        content:
          '**Fügen Sie Integrationen über Einstellungen → Geräte & Dienste hinzu; viele Geräte werden in Ihrem Netzwerk automatisch erkannt.** Für Zigbee- oder Z-Wave-Geräte fügen Sie zuerst einen Koordinator hinzu.',
        items: [
          'Die automatische Erkennung findet viele WLAN- und Matter-Geräte selbstständig.',
          'Fügen Sie einen Zigbee-Koordinator (und die ZHA- oder Zigbee2MQTT-Integration) für Zigbee-Geräte hinzu – siehe [Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained).',
          'Geben Sie nur die Entitäten frei, die Sie wollen, besonders bevor Sie Sprache oder KI verbinden.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'Das Dashboard',
        content:
          '**Home Assistant erzeugt automatisch ein Dashboard, das Sie mit Karten für Ihre Geräte anpassen können.** Beginnen Sie mit dem Standard und verfeinern Sie es mit der Zeit.',
        items: [
          'Das Standard-Dashboard listet Ihre Geräte und Bereiche automatisch auf.',
          'Fügen Sie Karten für die am häufigsten genutzten Steuerungen hinzu.',
          'Erstellen Sie raumweise Ansichten, während Ihr Setup wächst.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Ihre erste Automatisierung',
        content:
          '**Erstellen Sie eine einfache Automatisierung in Einstellungen → Automatisierungen mit dem visuellen Editor – etwa ein Licht bei Sonnenuntergang einschalten.** Für übliche Regeln ist kein Programmieren nötig.',
        numberedItems: [
          'Öffnen Sie Einstellungen → Automatisierungen & Szenen → Automatisierung erstellen.',
          'Wählen Sie einen Auslöser (Zeit, Sonnenuntergang oder einen Sensorzustand).',
          'Wählen Sie eine Aktion (ein Licht einschalten, eine Benachrichtigung senden).',
          'Speichern und testen Sie sie, dann verfeinern.',
          'Für kontextbewusste Regeln später siehe [KI-Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'KI später hinzufügen',
        content:
          '**Sobald die Grundlagen funktionieren, fügen Sie ein lokales LLM als Konversations-Agent hinzu – aber tun Sie das, nachdem Ihre Geräte und Automatisierungen stabil sind.** Dieser Leitfaden erklärt Ollama nicht erneut; verlinken Sie dafür nach außen.',
        items: [
          'Verbinden Sie ein lokales Modell über die [Ollama-Anbindung](/de/smart-home/home-assistant-ollama-integration).',
          'Für Ollama-Installation und Modellwahl siehe [Ollama installieren](/de/local-llms/how-to-install-ollama) (clusterübergreifend).',
          'Fügen Sie ein lokales Sprach-Frontend mit [dem Leitfaden zum lokalen Sprachassistenten](/de/smart-home/local-voice-assistant-smart-home) hinzu.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Raspberry Pi oder Mini-PC für Home Assistant?', a: 'Ein Raspberry Pi betreibt Home Assistant für typische Smart-Home-Nutzung gut. Wählen Sie einen Mini-PC, wenn Sie auch ein lokales LLM, größere Whisper-Modelle oder Frigate-Kameraerkennung auf demselben Gerät betreiben wollen, da diese mehr Rechenleistung brauchen.' },
          { q: 'Ist Home Assistant kostenlos?', a: 'Ja. Home Assistant ist kostenlos und quelloffen. Sie zahlen nur für die Hardware, auf der es läuft, und optionale Extras (etwa ein Cloud-Relay für einfachen Fernzugriff). Die lokale Kernsteuerung benötigt kein Abonnement.' },
          { q: 'Muss ich programmieren, um Home Assistant zu nutzen?', a: 'Nein. Übliche Setups, Dashboards und Automatisierungen werden über eine grafische Oberfläche gebaut. YAML-Konfiguration ist für fortgeschrittene Automatisierungen verfügbar, aber für den Start optional.' },
          { q: 'Kann Home Assistant KI ausführen?', a: 'Ja. Home Assistant lässt sich mit Ollama verbinden, sodass ein lokales Modell als Konversations-Agent dienen kann, und es unterstützt lokale Sprache mit Whisper und Piper. Diese auf einem Mini-PC zu betreiben hält alles lokal. Siehe den Leitfaden zur Ollama-Anbindung für die Einrichtung.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der vollständige Local-First-Stack',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – einen lokalen KI-Agenten hinzufügen',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – das richtige Gerät wählen',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: ein lokales Modell betreiben',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: Vollständiger Einsteiger-Leitfaden (2026)',
      description: 'Erste Schritte mit Home Assistant 2026: HAOS oder Container, Pi vs Mini-PC, erste Integrationen, Dashboards und lokale Automatisierung.',
      url: 'https://www.promptquorum.com/de/smart-home/home-assistant-getting-started',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Heimautomatisierung' }, { '@type': 'Thing', name: 'Lokale Steuerung' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi oder Mini-PC für Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Raspberry Pi betreibt Home Assistant für typische Nutzung gut. Wählen Sie einen Mini-PC, wenn Sie auch ein lokales LLM, größere Whisper-Modelle oder Frigate-Erkennung auf demselben Gerät wollen.' } },
        { '@type': 'Question', name: 'Ist Home Assistant kostenlos?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Es ist kostenlos und quelloffen. Sie zahlen nur für Hardware und optionale Extras wie ein Cloud-Relay für Fernzugriff. Die lokale Kernsteuerung benötigt kein Abonnement.' } },
        { '@type': 'Question', name: 'Muss ich programmieren, um Home Assistant zu nutzen?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Übliche Setups, Dashboards und Automatisierungen werden über eine grafische Oberfläche gebaut. YAML ist für fortgeschrittene Automatisierungen optional.' } },
        { '@type': 'Question', name: 'Kann Home Assistant KI ausführen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Es lässt sich mit Ollama für einen lokalen Konversations-Agenten verbinden und unterstützt lokale Sprache mit Whisper und Piper. Auf einem Mini-PC bleibt alles lokal.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: Guía Completa para Empezar (2026)',
    seoTitle: 'Home Assistant 2026: Guía Completa para Empezar',
    intro:
      'Home Assistant es el hub de smart home local-first líder: instálalo en una Raspberry Pi o un mini PC, añade integraciones y controla todo localmente sin nube. Esta guía para empezar cubre por qué Home Assistant, las opciones de instalación, las primeras integraciones, el panel, tu primera automatización y dónde añadir IA local más adelante, sin reexplicar la mecánica del LLM.',
    metaDescription:
      'Empieza con Home Assistant 2026: HAOS o contenedor, Pi vs mini-PC, primeras integraciones, paneles y primera automatización local.',
    twitterDescription:
      'Guía para empezar con Home Assistant: instala en una Pi o mini PC, añade integraciones, crea tu primera automatización local. El hub local-first.',
    readTime: '10 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Personas que configuran su primer hub de Home Assistant',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant empezar',
      'home assistant configuración',
      'instalar home assistant',
      'home assistant raspberry pi vs mini pc',
      'home assistant guía principiantes',
    ],
    leadAnswerBlock:
      '**Home Assistant es software de smart home local-first, gratuito y de código abierto que instalas en una Raspberry Pi o un mini PC: añade integraciones, crea un panel y controla dispositivos localmente sin nube.** Usa Home Assistant OS (HAOS) en hardware dedicado para el arranque más fácil.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo empiezo con Home Assistant?',
        answer:
          'Instala Home Assistant OS en una Raspberry Pi, un mini PC o hardware dedicado de Home Assistant, abre la interfaz web y añade integraciones para tus dispositivos. Crea un panel, una primera automatización y añade un coordinador Zigbee o Z-Wave para dispositivos locales. Todo corre localmente sin necesidad de cuenta en la nube.',
        bullets: [
          'Instala Home Assistant OS (HAOS) para la configuración más fácil',
          'Ejecútalo en una Raspberry Pi (básico) o un mini PC (básico + IA local)',
          'Añade integraciones para tus dispositivos desde la interfaz',
          'Añade un coordinador Zigbee/Z-Wave para protocolos locales',
          'Crea un panel y una primera automatización, todo local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué Home Assistant', anchor: 'why-ha' },
      { label: 'Opciones de instalación', anchor: 'install' },
      { label: 'Primeras integraciones', anchor: 'integrations' },
      { label: 'El panel', anchor: 'dashboard' },
      { label: 'Tu primera automatización', anchor: 'automation' },
      { label: 'Añadir IA después', anchor: 'ai-later' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant es software de hub local-first, gratuito y de código abierto, que instalas en una Pi o mini PC para controlar dispositivos localmente sin nube.' },
      { type: 'plain-terms', content: 'Home Assistant es el software que ejecuta tu smart home en tu propio hardware en lugar de en la nube de una empresa. Lo instalas en un ordenador pequeño, conectas tus dispositivos y creas paneles y automatizaciones. Es la base de un smart home privado y local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant es gratuito, de código abierto y local-first: el hub de smart home privado estándar',
          'Instala Home Assistant OS (HAOS) en hardware dedicado para el arranque más fácil',
          'Una Raspberry Pi cubre lo básico; un mini PC es mejor si también quieres IA local',
          'Añade integraciones desde la interfaz; no hace falta programar para dispositivos comunes',
          'Añade un coordinador Zigbee o Z-Wave (stick USB) para protocolos locales',
          'Añade un cerebro LLM local más adelante: enlaza hacia fuera para la mecánica del LLM',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: '¿Por qué Home Assistant?',
        content:
          '**Home Assistant es la base de un smart home local porque corre en tu propio hardware, habla todos los protocolos locales principales y mantiene las automatizaciones funcionando sin conexión.** Es el hub más flexible y privado.',
        items: [
          'Local-first: el control y las automatizaciones corren sin la nube.',
          'Amplio soporte: miles de integraciones entre marcas y protocolos.',
          'Base para la IA local — consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: '¿Qué opción de instalación deberías elegir?',
        content:
          '**Usa Home Assistant OS (HAOS) en hardware dedicado para la configuración más simple, una instalación en contenedor si ya ejecutas un servidor, y elige una Raspberry Pi para lo básico o un mini PC si quieres IA local.** HAOS incluye el sistema de add-ons que querrás.',
        columns: ['Método de instalación', 'Dificultad', 'Mejor para'],
        rows: [
          { 'Método de instalación': 'HAOS en dispositivo dedicado', 'Dificultad': 'La más fácil', 'Mejor para': 'La mayoría; soporte completo de add-ons' },
          { 'Método de instalación': 'HAOS en Raspberry Pi', 'Dificultad': 'Fácil', 'Mejor para': 'Lo básico, bajo consumo' },
          { 'Método de instalación': 'HAOS en mini PC', 'Dificultad': 'Fácil', 'Mejor para': 'Lo básico + IA local' },
          { 'Método de instalación': 'Contenedor (Docker)', 'Dificultad': 'Moderada', 'Mejor para': 'Servidores domésticos/NAS existentes' },
        ],
        items: [
          'Para el dimensionado de hardware incluyendo un LLM local, consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Añadir tus primeras integraciones',
        content:
          '**Añade integraciones desde Ajustes → Dispositivos y servicios; muchos dispositivos se detectan automáticamente en tu red.** Para dispositivos Zigbee o Z-Wave, añade primero un coordinador.',
        items: [
          'La detección automática encuentra muchos dispositivos Wi-Fi y Matter por sí sola.',
          'Añade un coordinador Zigbee (y la integración ZHA o Zigbee2MQTT) para dispositivos Zigbee — consulta [protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained).',
          'Expón solo las entidades que quieras, sobre todo antes de conectar voz o IA.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'El panel',
        content:
          '**Home Assistant genera automáticamente un panel que puedes personalizar con tarjetas para tus dispositivos.** Empieza con el predeterminado y refínalo con el tiempo.',
        items: [
          'El panel predeterminado lista tus dispositivos y áreas automáticamente.',
          'Añade tarjetas para los controles que más uses.',
          'Crea vistas por habitación a medida que crece tu configuración.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Tu primera automatización',
        content:
          '**Crea una automatización simple en Ajustes → Automatizaciones usando el editor visual, por ejemplo encender una luz al atardecer.** No hace falta programar para reglas comunes.',
        numberedItems: [
          'Abre Ajustes → Automatizaciones y escenas → Crear automatización.',
          'Elige un disparador (tiempo, atardecer o un estado de sensor).',
          'Elige una acción (encender una luz, enviar una notificación).',
          'Guárdala y pruébala, luego refínala.',
          'Para reglas contextuales más adelante, consulta [automatizaciones con IA con un LLM local](/es/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'Añadir IA después',
        content:
          '**Una vez que lo básico funcione, añade un LLM local como agente de conversación, pero hazlo después de que tus dispositivos y automatizaciones sean estables.** Esta guía no reexplica Ollama; enlaza hacia fuera para eso.',
        items: [
          'Conecta un modelo local mediante la [integración de Ollama](/es/smart-home/home-assistant-ollama-integration).',
          'Para la instalación de Ollama y la elección de modelo, consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama) (entre clústeres).',
          'Añade un frontend de voz local con [la guía del asistente de voz local](/es/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Raspberry Pi o mini PC para Home Assistant?', a: 'Una Raspberry Pi ejecuta bien Home Assistant para el uso típico de smart home. Elige un mini PC si también quieres ejecutar un LLM local, modelos Whisper más grandes o detección de cámaras con Frigate en el mismo equipo, ya que necesitan más cómputo.' },
          { q: '¿Home Assistant es gratuito?', a: 'Sí. Home Assistant es gratuito y de código abierto. Solo pagas por el hardware donde corre y extras opcionales (por ejemplo, un relay en la nube para acceso remoto fácil). El control local básico no necesita suscripción.' },
          { q: '¿Necesito programar para usar Home Assistant?', a: 'No. Las configuraciones, paneles y automatizaciones comunes se crean mediante una interfaz gráfica. La configuración YAML está disponible para automatizaciones avanzadas, pero es opcional para empezar.' },
          { q: '¿Puede Home Assistant ejecutar IA?', a: 'Sí. Home Assistant se integra con Ollama para que un modelo local actúe como agente de conversación, y admite voz local con Whisper y Piper. Ejecutar esto en un mini PC mantiene todo local. Consulta la guía de la integración de Ollama para configurarlo.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el stack local-first completo',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — añadir un agente de IA local',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — elige el equipo adecuado',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: ejecutar un modelo local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: Guía Completa para Empezar (2026)',
      description: 'Empieza con Home Assistant 2026: HAOS o contenedor, Pi vs mini-PC, primeras integraciones, paneles y primera automatización local.',
      url: 'https://www.promptquorum.com/es/smart-home/home-assistant-getting-started',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Domótica' }, { '@type': 'Thing', name: 'Control local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Raspberry Pi o mini PC para Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Una Raspberry Pi ejecuta bien Home Assistant para el uso típico. Elige un mini PC si también quieres un LLM local, modelos Whisper más grandes o detección con Frigate en el mismo equipo.' } },
        { '@type': 'Question', name: '¿Home Assistant es gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Es gratuito y de código abierto. Solo pagas por hardware y extras opcionales como un relay en la nube para acceso remoto. El control local básico no necesita suscripción.' } },
        { '@type': 'Question', name: '¿Necesito programar para usar Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'No. Las configuraciones, paneles y automatizaciones comunes se crean mediante una interfaz gráfica. El YAML es opcional para automatizaciones avanzadas.' } },
        { '@type': 'Question', name: '¿Puede Home Assistant ejecutar IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Se integra con Ollama para un agente de conversación local y admite voz local con Whisper y Piper. Ejecutarlo en un mini PC mantiene todo local.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: 완전한 시작 가이드 (2026)',
    seoTitle: 'Home Assistant 2026: 로컬 스마트 홈 완전 설정',
    intro:
      'Home Assistant는 선도적인 로컬 우선 스마트 홈 허브입니다. Raspberry Pi나 미니 PC에 설치하고 통합을 추가하면 클라우드 없이 모든 것을 로컬로 제어할 수 있습니다. 이 시작 가이드는 Home Assistant를 선택하는 이유, 설치 옵션, 첫 번째 통합, 대시보드, 첫 번째 자동화, 나중에 로컬 AI를 추가하는 방법을 다룹니다.',
    metaDescription:
      '2026년 Home Assistant 시작하기: 설치 옵션(HAOS, 컨테이너, Pi 대 미니 PC), 첫 번째 통합, 대시보드, 첫 번째 로컬 자동화.',
    twitterDescription:
      'Home Assistant 시작 가이드: Pi 또는 미니 PC에 설치하고, 통합을 추가하며, 첫 번째 로컬 자동화를 구축합니다. 로컬 우선 허브.',
    readTime: '10분 분량',
    educationalLevel: 'Intermediate',
    audience: '첫 번째 Home Assistant 허브를 설정하는 사람들',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'Home Assistant 시작하기',
      'Home Assistant 설정',
      'Home Assistant 설치',
      'Home Assistant raspberry pi vs mini pc',
      'Home Assistant 초보자 가이드',
    ],
    leadAnswerBlock:
      '**Home Assistant는 Raspberry Pi나 미니 PC에 설치하는 무료 오픈 소스 로컬 우선 스마트 홈 소프트웨어입니다 — 통합을 추가하고 대시보드를 구축하여 클라우드 없이 로컬로 기기를 제어합니다.** 가장 쉬운 시작을 위해 전용 하드웨어에 Home Assistant OS(HAOS)를 사용하십시오.',
    quickAnswerTop: {
      ko: {
        question: 'Home Assistant를 어떻게 시작합니까?',
        answer:
          'Raspberry Pi, 미니 PC, 또는 전용 Home Assistant 하드웨어에 Home Assistant OS를 설치하고 웹 인터페이스를 열어 기기용 통합을 추가합니다. 대시보드를 구축하고 첫 번째 자동화를 만들며 로컬 기기를 위한 Zigbee 또는 Z-Wave 코디네이터를 추가합니다. 클라우드 계정 없이 모든 것이 로컬에서 실행됩니다.',
        bullets: [
          '가장 쉬운 설정을 위해 Home Assistant OS(HAOS)를 설치하십시오',
          'Raspberry Pi(기본 기능) 또는 미니 PC(기본 기능 + 로컬 AI)에서 실행하십시오',
          'UI를 통해 기기용 통합을 추가하십시오',
          '로컬 프로토콜을 위한 Zigbee/Z-Wave 코디네이터를 추가하십시오',
          '대시보드와 첫 번째 자동화를 구축하십시오 — 모두 로컬',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Home Assistant를 선택하는 이유', anchor: 'why-ha' },
      { label: '설치 옵션', anchor: 'install' },
      { label: '첫 번째 통합', anchor: 'integrations' },
      { label: '대시보드', anchor: 'dashboard' },
      { label: '첫 번째 자동화', anchor: 'automation' },
      { label: '나중에 AI 추가하기', anchor: 'ai-later' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant는 Pi 또는 미니 PC에 설치하여 클라우드 없이 로컬로 기기를 제어하는 무료 오픈 소스 로컬 우선 허브 소프트웨어입니다.' },
      { type: 'plain-terms', content: 'Home Assistant는 기업 클라우드 대신 자체 하드웨어에서 스마트 홈을 실행하는 소프트웨어입니다. 소형 컴퓨터에 설치하고 기기를 연결하여 대시보드와 자동화를 구축합니다. 이것이 사설 로컬 우선 스마트 홈의 기반입니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant는 무료, 오픈 소스, 로컬 우선입니다 — 표준적인 사설 스마트 홈 허브입니다',
          '가장 쉬운 시작을 위해 전용 하드웨어에 Home Assistant OS(HAOS)를 설치하십시오',
          'Raspberry Pi는 기본 기능을 처리합니다. 로컬 AI도 원한다면 미니 PC가 더 적합합니다',
          'UI를 통해 통합을 추가하십시오. 일반적인 기기에는 코딩이 필요 없습니다',
          '로컬 프로토콜을 위해 Zigbee 또는 Z-Wave 코디네이터(USB 스틱)를 추가하십시오',
          '나중에 로컬 LLM 두뇌를 추가하십시오 — LLM 메커니즘은 외부 링크를 참조하십시오',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Home Assistant를 선택하는 이유',
        content:
          '**Home Assistant는 자체 하드웨어에서 실행되고, 모든 주요 로컬 프로토콜을 지원하며, 오프라인에서도 자동화가 작동하기 때문에 로컬 스마트 홈의 기반입니다.** 가장 유연하고 사적인 허브입니다.',
        items: [
          '로컬 우선: 제어와 자동화가 클라우드 없이 실행됩니다.',
          '광범위한 지원: 브랜드와 프로토콜에 걸쳐 수천 개의 통합.',
          '로컬 AI의 기반 — [로컬 LLM으로 스마트 홈 실행](/ko/smart-home/local-llm-smart-home-complete-guide)을 참조하십시오.',
        ],
      },
      install: {
        id: 'install',
        title: '어떤 설치 옵션을 선택해야 합니까?',
        content:
          '**가장 간단한 설정을 위해 전용 하드웨어에 Home Assistant OS(HAOS)를 사용하고, 이미 서버를 운영 중이라면 컨테이너 설치를, 기본 기능만 원한다면 Raspberry Pi를, 로컬 AI를 원한다면 미니 PC를 선택하십시오.** HAOS에는 필요한 애드온 시스템이 포함되어 있습니다.',
        columns: ['설치 방법', '난이도', '최적 용도'],
        rows: [
          { '설치 방법': '전용 기기에 HAOS', '난이도': '가장 쉬움', '최적 용도': '대부분의 사용자; 전체 애드온 지원' },
          { '설치 방법': 'Raspberry Pi에 HAOS', '난이도': '쉬움', '최적 용도': '기본 기능, 저전력' },
          { '설치 방법': '미니 PC에 HAOS', '난이도': '쉬움', '최적 용도': '기본 기능 + 로컬 AI' },
          { '설치 방법': '컨테이너(Docker)', '난이도': '보통', '최적 용도': '기존 홈 서버/NAS' },
        ],
        items: [
          '로컬 LLM을 포함한 하드웨어 규모 산정은 [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
        ],
      },
      integrations: {
        id: 'integrations',
        title: '첫 번째 통합 추가하기',
        content:
          '**설정 → 기기 및 서비스를 통해 통합을 추가하십시오. 많은 기기가 네트워크에서 자동으로 검색됩니다.** Zigbee 또는 Z-Wave 기기의 경우 먼저 코디네이터를 추가하십시오.',
        items: [
          '자동 검색으로 많은 Wi-Fi 및 Matter 기기가 자동으로 발견됩니다.',
          'Zigbee 기기를 위해 Zigbee 코디네이터(및 ZHA 또는 Zigbee2MQTT 통합)를 추가하십시오 — [스마트 홈 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained)을 참조하십시오.',
          '특히 음성 또는 AI를 연결하기 전에 원하는 엔티티만 노출하십시오.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: '대시보드',
        content:
          '**Home Assistant는 기기용 카드로 맞춤 설정할 수 있는 대시보드를 자동으로 생성합니다.** 기본값으로 시작하여 시간이 지나면서 개선하십시오.',
        items: [
          '기본 대시보드는 기기와 영역을 자동으로 나열합니다.',
          '가장 많이 사용하는 컨트롤에 카드를 추가하십시오.',
          '설정이 확장됨에 따라 방별 보기를 만드십시오.',
        ],
      },
      automation: {
        id: 'automation',
        title: '첫 번째 자동화',
        content:
          '**설정 → 자동화에서 시각적 편집기를 사용하여 간단한 자동화를 만드십시오 — 예를 들어 일몰 시 조명 켜기.** 일반적인 규칙에는 코딩이 필요 없습니다.',
        numberedItems: [
          '설정 → 자동화 및 장면 → 자동화 만들기를 여십시오.',
          '트리거를 선택하십시오(시간, 일몰 또는 센서 상태).',
          '작업을 선택하십시오(조명 켜기, 알림 보내기).',
          '저장하고 테스트한 후 개선하십시오.',
          '나중에 컨텍스트 인식 규칙을 위해 [로컬 LLM으로 AI 자동화](/ko/smart-home/ai-automations-local-llm)를 참조하십시오.',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: '나중에 AI 추가하기',
        content:
          '**기본 기능이 작동하면 로컬 LLM을 대화 에이전트로 추가하십시오 — 하지만 기기와 자동화가 안정된 후에 하십시오.** 이 가이드는 Ollama를 다시 설명하지 않습니다. 그것은 외부 링크를 참조하십시오.',
        items: [
          '[Ollama 통합](/ko/smart-home/home-assistant-ollama-integration)을 통해 로컬 모델을 연결하십시오.',
          'Ollama 설정 및 모델 선택은 [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)(크로스 클러스터)을 참조하십시오.',
          '[로컬 음성 어시스턴트 가이드](/ko/smart-home/local-voice-assistant-smart-home)로 로컬 음성 프론트엔드를 추가하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Home Assistant에는 Raspberry Pi 또는 미니 PC가 더 적합합니까?', a: 'Raspberry Pi는 일반적인 스마트 홈 사용에 Home Assistant를 잘 실행합니다. 같은 기기에서 로컬 LLM, 더 큰 Whisper 모델, 또는 Frigate 카메라 감지도 실행하려면 미니 PC를 선택하십시오. 그런 기능들은 더 많은 컴퓨팅 성능을 필요로 합니다.' },
          { q: 'Home Assistant는 무료입니까?', a: '네. Home Assistant는 무료 오픈 소스입니다. 실행되는 하드웨어와 원격 접근을 위한 클라우드 릴레이 같은 선택적 추가 기능에만 비용이 듭니다. 핵심 로컬 제어에는 구독이 필요 없습니다.' },
          { q: 'Home Assistant를 사용하려면 코딩이 필요합니까?', a: '아니오. 일반적인 설정, 대시보드, 자동화는 그래픽 인터페이스를 통해 구축됩니다. YAML 설정은 고급 자동화에 사용 가능하지만 시작할 때는 선택 사항입니다.' },
          { q: 'Home Assistant로 AI를 실행할 수 있습니까?', a: '네. Home Assistant는 로컬 모델이 대화 에이전트로 작동할 수 있도록 Ollama와 통합되며, Whisper와 Piper로 로컬 음성을 지원합니다. 미니 PC에서 이것들을 실행하면 모든 것이 로컬로 유지됩니다. 설정은 Ollama 통합 가이드를 참조하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 전체 로컬 우선 스택',
          '[Home Assistant에 Ollama 연결](/ko/smart-home/home-assistant-ollama-integration) — 로컬 AI 에이전트 추가',
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 올바른 기기 선택',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 크로스 클러스터: 로컬 모델 실행',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: 완전한 시작 가이드 (2026)',
      description: '2026년 Home Assistant 시작하기: 설치 옵션(HAOS, 컨테이너, Pi 대 미니 PC), 첫 번째 통합, 대시보드, 첫 번째 로컬 자동화.',
      url: 'https://www.promptquorum.com/ko/smart-home/home-assistant-getting-started',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '홈 자동화' }, { '@type': 'Thing', name: '로컬 제어' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant에는 Raspberry Pi 또는 미니 PC가 더 적합합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Raspberry Pi는 일반적인 용도에 잘 작동합니다. 같은 기기에서 로컬 LLM, 더 큰 Whisper 모델, 또는 Frigate 감지도 원한다면 미니 PC를 선택하십시오.' } },
        { '@type': 'Question', name: 'Home Assistant는 무료입니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 무료 오픈 소스입니다. 하드웨어와 원격 접근을 위한 클라우드 릴레이 같은 선택적 추가 기능에만 비용이 듭니다. 핵심 로컬 제어에는 구독이 필요 없습니다.' } },
        { '@type': 'Question', name: 'Home Assistant를 사용하려면 코딩이 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아니오. 일반적인 설정, 대시보드, 자동화는 그래픽 인터페이스를 통해 구축됩니다. YAML은 고급 자동화에 선택 사항입니다.' } },
        { '@type': 'Question', name: 'Home Assistant로 AI를 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 로컬 대화 에이전트를 위해 Ollama와 통합되며 Whisper와 Piper로 로컬 음성을 지원합니다. 미니 PC에서 실행하면 모든 것이 로컬로 유지됩니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant : Guide Complet pour Débuter (2026)',
    seoTitle: 'Home Assistant 2026 : Guide Complet pour Bien Démarrer',
    intro:
      'Home Assistant est le hub de maison connectée local-first de référence : installez-le sur une Raspberry Pi ou un mini-PC, ajoutez des intégrations et contrôlez tout localement sans cloud. Ce guide de démarrage couvre pourquoi Home Assistant, les options d\'installation, les premières intégrations, le tableau de bord, votre première automatisation et où ajouter de l\'IA locale plus tard, sans réexpliquer la mécanique du LLM.',
    metaDescription:
      'Débutez avec Home Assistant en 2026 : HAOS ou conteneur, Pi vs mini-PC, premières intégrations, tableaux de bord et première automatisation locale.',
    twitterDescription:
      'Guide de démarrage Home Assistant : installez sur une Pi ou un mini-PC, ajoutez des intégrations, créez votre première automatisation locale. Le hub local-first.',
    readTime: '10 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Personnes configurant leur premier hub Home Assistant',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant débuter',
      'home assistant configuration',
      'installer home assistant',
      'home assistant raspberry pi vs mini-pc',
      'home assistant guide débutant',
    ],
    leadAnswerBlock:
      '**Home Assistant est un logiciel de maison connectée local-first, gratuit et open source, que vous installez sur une Raspberry Pi ou un mini-PC — ajoutez des intégrations, créez un tableau de bord et contrôlez les appareils localement sans cloud.** Utilisez Home Assistant OS (HAOS) sur du matériel dédié pour le démarrage le plus facile.',
    quickAnswerTop: {
      fr: {
        question: 'Comment démarrer avec Home Assistant ?',
        answer:
          'Installez Home Assistant OS sur une Raspberry Pi, un mini-PC ou du matériel dédié Home Assistant, ouvrez l\'interface web et ajoutez des intégrations pour vos appareils. Créez un tableau de bord, une première automatisation et ajoutez un coordinateur Zigbee ou Z-Wave pour les appareils locaux. Tout tourne localement sans compte cloud requis.',
        bullets: [
          'Installez Home Assistant OS (HAOS) pour la configuration la plus facile',
          'Exécutez-le sur une Raspberry Pi (bases) ou un mini-PC (bases + IA locale)',
          'Ajoutez des intégrations pour vos appareils depuis l\'interface',
          'Ajoutez un coordinateur Zigbee/Z-Wave pour les protocoles locaux',
          'Créez un tableau de bord et une première automatisation, tout en local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Pourquoi Home Assistant', anchor: 'why-ha' },
      { label: 'Options d\'installation', anchor: 'install' },
      { label: 'Premières intégrations', anchor: 'integrations' },
      { label: 'Le tableau de bord', anchor: 'dashboard' },
      { label: 'Votre première automatisation', anchor: 'automation' },
      { label: 'Ajouter l\'IA plus tard', anchor: 'ai-later' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant est un logiciel de hub local-first, gratuit et open source, que vous installez sur une Pi ou un mini-PC pour contrôler les appareils localement sans cloud.' },
      { type: 'plain-terms', content: 'Home Assistant est le logiciel qui fait tourner votre maison connectée sur votre propre matériel plutôt que dans le cloud d\'une entreprise. Vous l\'installez sur un petit ordinateur, connectez vos appareils et créez des tableaux de bord et des automatisations. C\'est la fondation d\'une maison connectée privée et locale.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant est gratuit, open source et local-first — le hub de maison connectée privé de référence',
          'Installez Home Assistant OS (HAOS) sur du matériel dédié pour le démarrage le plus facile',
          'Une Raspberry Pi gère les bases ; un mini-PC est meilleur si vous voulez aussi de l\'IA locale',
          'Ajoutez des intégrations depuis l\'interface ; aucune programmation pour les appareils courants',
          'Ajoutez un coordinateur Zigbee ou Z-Wave (clé USB) pour les protocoles locaux',
          'Ajoutez un cerveau LLM local plus tard — lien vers l\'extérieur pour la mécanique du LLM',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Pourquoi Home Assistant ?',
        content:
          '**Home Assistant est la fondation d\'une maison connectée locale car il tourne sur votre propre matériel, parle tous les grands protocoles locaux et garde les automatisations en fonctionnement hors ligne.** C\'est le hub le plus flexible et le plus privé.',
        items: [
          'Local-first : le contrôle et les automatisations tournent sans le cloud.',
          'Large prise en charge : des milliers d\'intégrations à travers marques et protocoles.',
          'Fondation pour l\'IA locale — voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'Quelle option d\'installation choisir ?',
        content:
          '**Utilisez Home Assistant OS (HAOS) sur du matériel dédié pour la configuration la plus simple, une installation en conteneur si vous exécutez déjà un serveur, et choisissez une Raspberry Pi pour les bases ou un mini-PC si vous voulez de l\'IA locale.** HAOS inclut le système d\'add-ons dont vous aurez besoin.',
        columns: ['Méthode d\'installation', 'Difficulté', 'Idéal pour'],
        rows: [
          { 'Méthode d\'installation': 'HAOS sur appareil dédié', 'Difficulté': 'La plus facile', 'Idéal pour': 'La plupart ; prise en charge complète des add-ons' },
          { 'Méthode d\'installation': 'HAOS sur Raspberry Pi', 'Difficulté': 'Facile', 'Idéal pour': 'Les bases, faible consommation' },
          { 'Méthode d\'installation': 'HAOS sur mini-PC', 'Difficulté': 'Facile', 'Idéal pour': 'Les bases + IA locale' },
          { 'Méthode d\'installation': 'Conteneur (Docker)', 'Difficulté': 'Modérée', 'Idéal pour': 'Serveurs domestiques/NAS existants' },
        ],
        items: [
          'Pour le dimensionnement matériel incluant un LLM local, voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Ajouter vos premières intégrations',
        content:
          '**Ajoutez des intégrations depuis Paramètres → Appareils et services ; beaucoup d\'appareils sont détectés automatiquement sur votre réseau.** Pour les appareils Zigbee ou Z-Wave, ajoutez d\'abord un coordinateur.',
        items: [
          'La détection automatique trouve seule beaucoup d\'appareils Wi-Fi et Matter.',
          'Ajoutez un coordinateur Zigbee (et l\'intégration ZHA ou Zigbee2MQTT) pour les appareils Zigbee — voir [les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained).',
          'N\'exposez que les entités que vous voulez, surtout avant de connecter la voix ou l\'IA.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'Le tableau de bord',
        content:
          '**Home Assistant génère automatiquement un tableau de bord que vous pouvez personnaliser avec des cartes pour vos appareils.** Commencez par celui par défaut et affinez-le avec le temps.',
        items: [
          'Le tableau de bord par défaut liste automatiquement vos appareils et zones.',
          'Ajoutez des cartes pour les commandes que vous utilisez le plus.',
          'Créez des vues par pièce à mesure que votre installation grandit.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Votre première automatisation',
        content:
          '**Créez une automatisation simple dans Paramètres → Automatisations avec l\'éditeur visuel — par exemple allumer une lumière au coucher du soleil.** Aucune programmation n\'est requise pour les règles courantes.',
        numberedItems: [
          'Ouvrez Paramètres → Automatisations et scènes → Créer une automatisation.',
          'Choisissez un déclencheur (heure, coucher du soleil ou un état de capteur).',
          'Choisissez une action (allumer une lumière, envoyer une notification).',
          'Enregistrez-la et testez-la, puis affinez.',
          'Pour des règles contextuelles plus tard, voir [automatisations IA avec un LLM local](/fr/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'Ajouter l\'IA plus tard',
        content:
          '**Une fois les bases en place, ajoutez un LLM local comme agent de conversation — mais faites-le après que vos appareils et automatisations soient stables.** Ce guide ne réexplique pas Ollama ; lien vers l\'extérieur pour cela.',
        items: [
          'Connectez un modèle local via l\'[intégration Ollama](/fr/smart-home/home-assistant-ollama-integration).',
          'Pour l\'installation d\'Ollama et le choix du modèle, voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama) (inter-clusters).',
          'Ajoutez une interface vocale locale avec [le guide de l\'assistant vocal local](/fr/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Raspberry Pi ou mini-PC pour Home Assistant ?', a: 'Une Raspberry Pi fait bien tourner Home Assistant pour un usage maison connectée typique. Choisissez un mini-PC si vous voulez aussi exécuter un LLM local, des modèles Whisper plus grands ou la détection de caméras Frigate sur la même machine, car cela demande plus de puissance.' },
          { q: 'Home Assistant est-il gratuit ?', a: 'Oui. Home Assistant est gratuit et open source. Vous payez seulement le matériel sur lequel il tourne et des extras optionnels (par exemple un relais cloud pour un accès à distance facile). Le contrôle local de base ne nécessite aucun abonnement.' },
          { q: 'Dois-je programmer pour utiliser Home Assistant ?', a: 'Non. Les configurations, tableaux de bord et automatisations courants se créent via une interface graphique. La configuration YAML est disponible pour les automatisations avancées, mais optionnelle pour démarrer.' },
          { q: 'Home Assistant peut-il exécuter de l\'IA ?', a: 'Oui. Home Assistant s\'intègre à Ollama pour qu\'un modèle local serve d\'agent de conversation, et prend en charge la voix locale avec Whisper et Piper. Exécuter cela sur un mini-PC garde tout local. Voir le guide de l\'intégration Ollama pour la configuration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le stack local-first complet',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — ajouter un agent IA local',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — choisir la bonne machine',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : faire tourner un modèle local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant : Guide Complet pour Débuter (2026)',
      description: 'Débutez avec Home Assistant en 2026 : HAOS ou conteneur, Pi vs mini-PC, premières intégrations, tableaux de bord et première automatisation locale.',
      url: 'https://www.promptquorum.com/fr/smart-home/home-assistant-getting-started',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Domotique' }, { '@type': 'Thing', name: 'Contrôle local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi ou mini-PC pour Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Une Raspberry Pi fait bien tourner Home Assistant pour un usage typique. Choisissez un mini-PC si vous voulez aussi un LLM local, des modèles Whisper plus grands ou la détection Frigate sur la même machine.' } },
        { '@type': 'Question', name: 'Home Assistant est-il gratuit ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Il est gratuit et open source. Vous payez seulement le matériel et des extras optionnels comme un relais cloud pour l\'accès à distance. Le contrôle local de base ne nécessite aucun abonnement.' } },
        { '@type': 'Question', name: 'Dois-je programmer pour utiliser Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Les configurations, tableaux de bord et automatisations courants se créent via une interface graphique. Le YAML est optionnel pour les automatisations avancées.' } },
        { '@type': 'Question', name: 'Home Assistant peut-il exécuter de l\'IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Il s\'intègre à Ollama pour un agent de conversation local et prend en charge la voix locale avec Whisper et Piper. L\'exécuter sur un mini-PC garde tout local.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant：完全入門ガイド（2026）',
    seoTitle: 'Home Assistant 2026 完全入門：インストールから自動化まで',
    intro:
      'Home Assistant は主要なローカルファーストのスマートホームハブです：Raspberry Pi やミニPCにインストールし、統合を追加し、すべてをクラウドなしでローカル制御します。本入門ガイドは、なぜ Home Assistant か、インストール方法、最初の統合、ダッシュボード、最初の自動化、そして後でローカルAIをどこに追加するかを扱います——LLMの仕組みは再説明しません。',
    metaDescription:
      'Home Assistantを2026年に始める完全ガイド：HAOSとコンテナによるインストール手順、Raspberry PiとミニPCの選び方、はじめての統合設定、ダッシュボードの構築方法、最初のローカル自動化の作成まで初心者向けに詳しく解説。',
    twitterDescription:
      'Home Assistant 入門ガイド：Pi かミニPCにインストールし、統合を追加し、最初のローカル自動化を作る。ローカルファーストのハブ。',
    readTime: '10分で読める',
    educationalLevel: 'Intermediate',
    audience: '初めて Home Assistant ハブを構築する人',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant 始め方',
      'home assistant セットアップ',
      'home assistant インストール',
      'home assistant raspberry pi 対 ミニpc',
      'home assistant 初心者 ガイド',
    ],
    leadAnswerBlock:
      '**Home Assistant は無料・オープンソースのローカルファーストなスマートホームソフトで、Raspberry Pi やミニPCにインストールします——統合を追加し、ダッシュボードを作り、機器をクラウドなしでローカル制御します。** 最も簡単に始めるには、専用ハードウェア上の Home Assistant OS（HAOS）を使います。',
    quickAnswerTop: {
      ja: {
        question: 'Home Assistant はどう始めればいいですか？',
        answer:
          'Raspberry Pi、ミニPC、または専用の Home Assistant ハードウェアに Home Assistant OS をインストールし、Web インターフェースを開いて、機器の統合を追加します。ダッシュボードを作り、最初の自動化を作り、ローカル機器のために Zigbee か Z-Wave のコーディネーターを追加します。すべてクラウドアカウントなしでローカルに動きます。',
        bullets: [
          '最も簡単なセットアップには Home Assistant OS（HAOS）をインストール',
          'Raspberry Pi（基本）またはミニPC（基本＋ローカルAI）で動かす',
          '機器の統合を画面から追加',
          'ローカルプロトコルのために Zigbee/Z-Wave コーディネーターを追加',
          'ダッシュボードと最初の自動化を作る——すべてローカル',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'なぜ Home Assistant', anchor: 'why-ha' },
      { label: 'インストール方法', anchor: 'install' },
      { label: '最初の統合', anchor: 'integrations' },
      { label: 'ダッシュボード', anchor: 'dashboard' },
      { label: '最初の自動化', anchor: 'automation' },
      { label: 'AIは後で追加', anchor: 'ai-later' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant は無料・オープンソースのローカルファーストなハブソフトで、Pi かミニPCにインストールして機器をクラウドなしでローカル制御します。' },
      { type: 'plain-terms', content: 'Home Assistant は、企業のクラウドではなく自分のハードウェアでスマートホームを動かすソフトです。小型コンピューターにインストールし、機器をつなぎ、ダッシュボードと自動化を作ります。プライベートでローカルなスマートホームの土台です。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant は無料・オープンソース・ローカルファースト——プライベートなスマートホームハブの標準',
          '最も簡単に始めるには専用ハードウェアに Home Assistant OS（HAOS）をインストール',
          'Raspberry Pi は基本を担う；ローカルAIも欲しいならミニPCが良い',
          '統合は画面から追加；一般的な機器にプログラミングは不要',
          'ローカルプロトコルのために Zigbee または Z-Wave コーディネーター（USB スティック）を追加',
          'ローカルLLMの頭脳は後で追加——LLMの仕組みは外部リンクへ',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'なぜ Home Assistant か？',
        content:
          '**Home Assistant がローカルスマートホームの土台なのは、自分のハードウェアで動き、主要なローカルプロトコルをすべて話し、自動化をオフラインで動かし続けるからです。** 最も柔軟でプライベートなハブです。',
        items: [
          'ローカルファースト：制御も自動化もクラウドなしで動く。',
          '幅広い対応：ブランドとプロトコルを横断する数千の統合。',
          'ローカルAIの土台——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
        ],
      },
      install: {
        id: 'install',
        title: 'どのインストール方法を選ぶべきか？',
        content:
          '**最もシンプルなセットアップには専用ハードウェア上の Home Assistant OS（HAOS）、すでにサーバーを動かしているならコンテナ版、基本なら Raspberry Pi、ローカルAIが欲しいならミニPCを選びましょう。** HAOS には必要となるアドオンシステムが含まれます。',
        columns: ['インストール方法', '難易度', '最適な用途'],
        rows: [
          { 'インストール方法': '専用機器上の HAOS', '難易度': '最も簡単', '最適な用途': '大半の人；アドオンを完全サポート' },
          { 'インストール方法': 'Raspberry Pi 上の HAOS', '難易度': '簡単', '最適な用途': '基本、低消費電力' },
          { 'インストール方法': 'ミニPC 上の HAOS', '難易度': '簡単', '最適な用途': '基本＋ローカルAI' },
          { 'インストール方法': 'コンテナ（Docker）', '難易度': '中程度', '最適な用途': '既存のホームサーバー/NAS' },
        ],
        items: [
          'ローカルLLMを含むハードウェアのサイズ選びは[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
      },
      integrations: {
        id: 'integrations',
        title: '最初の統合を追加する',
        content:
          '**設定 → デバイスとサービスから統合を追加します；多くの機器はネットワーク上で自動検出されます。** Zigbee や Z-Wave 機器には、まずコーディネーターを追加します。',
        items: [
          '自動検出が多くの Wi-Fi・Matter 機器を自ら見つけます。',
          'Zigbee 機器には Zigbee コーディネーター（と ZHA または Zigbee2MQTT 統合）を追加——[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained)を参照。',
          '特に音声やAIをつなぐ前は、必要なエンティティだけを公開しましょう。',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'ダッシュボード',
        content:
          '**Home Assistant は機器ごとのカードでカスタマイズできるダッシュボードを自動生成します。** 既定のものから始め、時間をかけて整えていきましょう。',
        items: [
          '既定のダッシュボードは機器とエリアを自動で一覧表示します。',
          'よく使う操作のカードを追加します。',
          '設定が増えるにつれ、部屋ごとのビューを作ります。',
        ],
      },
      automation: {
        id: 'automation',
        title: '最初の自動化',
        content:
          '**設定 → 自動化でビジュアルエディターを使い、簡単な自動化を作りましょう——たとえば日没に点灯する照明。** 一般的なルールにプログラミングは不要です。',
        numberedItems: [
          '設定 → 自動化とシーン → 自動化を作成 を開く。',
          'トリガー（時間、日没、またはセンサーの状態）を選ぶ。',
          'アクション（照明を点ける、通知を送る）を選ぶ。',
          '保存してテストし、それから調整する。',
          '後の文脈対応ルールは[ローカルLLMによるAI自動化](/ja/smart-home/ai-automations-local-llm)を参照。',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'AIは後で追加',
        content:
          '**基本が動いたら、ローカルLLMを会話エージェントとして追加します——ただし機器と自動化が安定した後で。** 本ガイドは Ollama を再説明しません；それは外部リンクへ。',
        items: [
          'ローカルモデルを[Ollama 統合](/ja/smart-home/home-assistant-ollama-integration)で接続。',
          'Ollama のインストールとモデル選びは[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)（クラスター横断）を参照。',
          'ローカル音声フロントエンドは[ローカル音声アシスタントのガイド](/ja/smart-home/local-voice-assistant-smart-home)で追加。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Home Assistant は Raspberry Pi とミニPCのどちらが良いですか？', a: 'Raspberry Pi は一般的なスマートホーム用途で Home Assistant をよく動かします。ローカルLLM、より大きな Whisper モデル、または Frigate のカメラ検出を同じ機器で動かしたいなら、より多くの計算が必要なのでミニPCを選びましょう。' },
          { q: 'Home Assistant は無料ですか？', a: 'はい。Home Assistant は無料・オープンソースです。費用は動かすハードウェアと、簡単なリモートアクセス用のクラウドリレーなど任意の追加分だけです。ローカルの基本制御にサブスクは不要です。' },
          { q: 'Home Assistant を使うのにプログラミングは必要ですか？', a: 'いいえ。一般的な設定、ダッシュボード、自動化はグラフィカルな画面で作れます。高度な自動化に YAML 設定が使えますが、始めるには任意です。' },
          { q: 'Home Assistant は AI を動かせますか？', a: 'はい。Home Assistant は Ollama と連携してローカルモデルを会話エージェントにでき、Whisper と Piper でローカル音声に対応します。これらをミニPCで動かせばすべてローカルに保てます。設定は Ollama 統合のガイドを参照してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 完全なローカルファースト構成',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — ローカルAIエージェントを追加',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — 適切な機器を選ぶ',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：ローカルモデルを動かす',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant：完全入門ガイド（2026）',
      description: 'Home Assistantを2026年に始める完全ガイド：HAOSとコンテナによるインストール手順、Raspberry PiとミニPCの選び方、はじめての統合設定、ダッシュボードの構築方法、最初のローカル自動化の作成まで初心者向けに詳しく解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-assistant-getting-started',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'ホームオートメーション' }, { '@type': 'Thing', name: 'ローカル制御' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant は Raspberry Pi とミニPCのどちらが良いですか？', acceptedAnswer: { '@type': 'Answer', text: 'Raspberry Pi は一般的な用途で Home Assistant をよく動かします。ローカルLLM、より大きな Whisper、Frigate 検出を同じ機器で動かすならミニPCを選びましょう。' } },
        { '@type': 'Question', name: 'Home Assistant は無料ですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。無料・オープンソースです。費用はハードウェアと、リモートアクセス用クラウドリレーなど任意の追加分だけ。ローカルの基本制御にサブスクは不要です。' } },
        { '@type': 'Question', name: 'Home Assistant を使うのにプログラミングは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。一般的な設定・ダッシュボード・自動化はグラフィカルな画面で作れます。高度な自動化に YAML は任意です。' } },
        { '@type': 'Question', name: 'Home Assistant は AI を動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Ollama と連携してローカルモデルを会話エージェントにでき、Whisper と Piper でローカル音声に対応します。ミニPCで動かせばすべてローカルに保てます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant: Guia Completo para Começar (2026)',
    seoTitle: 'Home Assistant 2026: Guia Completo para Começar',
    intro:
      'O Home Assistant é o hub de casa inteligente local-first líder: instale-o em uma Raspberry Pi ou mini PC, adicione integrações e controle tudo localmente sem nuvem. Este guia para começar cobre por que o Home Assistant, as opções de instalação, as primeiras integrações, o painel, sua primeira automação e onde adicionar IA local depois, sem reexplicar a mecânica do LLM.',
    metaDescription:
      'Comece com o Home Assistant em 2026: opções de instalação (HAOS, contêiner, Pi vs mini PC), primeiras integrações, painéis e sua primeira automação local.',
    twitterDescription:
      'Guia para começar com o Home Assistant: instale em uma Pi ou mini PC, adicione integrações, crie sua primeira automação local. O hub local-first.',
    readTime: '10 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Pessoas configurando seu primeiro hub Home Assistant',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant começar',
      'home assistant configuração',
      'instalar home assistant',
      'home assistant raspberry pi vs mini pc',
      'home assistant guia iniciante',
    ],
    leadAnswerBlock:
      '**O Home Assistant é um software de casa inteligente local-first, gratuito e de código aberto, que você instala em uma Raspberry Pi ou mini PC — adicione integrações, crie um painel e controle dispositivos localmente sem nuvem.** Use o Home Assistant OS (HAOS) em hardware dedicado para o começo mais fácil.',
    quickAnswerTop: {
      pt: {
        question: 'Como começo com o Home Assistant?',
        answer:
          'Instale o Home Assistant OS em uma Raspberry Pi, um mini PC ou hardware dedicado do Home Assistant, abra a interface web e adicione integrações para seus dispositivos. Crie um painel, uma primeira automação e adicione um coordenador Zigbee ou Z-Wave para dispositivos locais. Tudo roda localmente sem necessidade de conta na nuvem.',
        bullets: [
          'Instale o Home Assistant OS (HAOS) para a configuração mais fácil',
          'Rode-o em uma Raspberry Pi (básico) ou mini PC (básico + IA local)',
          'Adicione integrações para seus dispositivos pela interface',
          'Adicione um coordenador Zigbee/Z-Wave para protocolos locais',
          'Crie um painel e uma primeira automação — tudo local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que o Home Assistant', anchor: 'why-ha' },
      { label: 'Opções de instalação', anchor: 'install' },
      { label: 'Primeiras integrações', anchor: 'integrations' },
      { label: 'O painel', anchor: 'dashboard' },
      { label: 'Sua primeira automação', anchor: 'automation' },
      { label: 'Adicionar IA depois', anchor: 'ai-later' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Home Assistant é um software de hub local-first, gratuito e de código aberto, que você instala em uma Pi ou mini PC para controlar dispositivos localmente sem nuvem.' },
      { type: 'plain-terms', content: 'O Home Assistant é o software que roda sua casa inteligente no seu próprio hardware em vez da nuvem de uma empresa. Você o instala em um computador pequeno, conecta seus dispositivos e cria painéis e automações. É a base de uma casa inteligente privada e local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Home Assistant é gratuito, de código aberto e local-first — o hub de casa inteligente privado padrão',
          'Instale o Home Assistant OS (HAOS) em hardware dedicado para o começo mais fácil',
          'Uma Raspberry Pi dá conta do básico; um mini PC é melhor se você também quer IA local',
          'Adicione integrações pela interface; não é preciso programar para dispositivos comuns',
          'Adicione um coordenador Zigbee ou Z-Wave (pen drive USB) para protocolos locais',
          'Adicione um cérebro LLM local depois — link externo para a mecânica do LLM',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: 'Por que o Home Assistant?',
        content:
          '**O Home Assistant é a base de uma casa inteligente local porque roda no seu próprio hardware, fala todos os principais protocolos locais e mantém as automações funcionando offline.** É o hub mais flexível e privado.',
        items: [
          'Local-first: o controle e as automações rodam sem a nuvem.',
          'Amplo suporte: milhares de integrações entre marcas e protocolos.',
          'Base para a IA local — veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
        ],
      },
      install: {
        id: 'install',
        title: 'Qual opção de instalação você deve escolher?',
        content:
          '**Use o Home Assistant OS (HAOS) em hardware dedicado para a configuração mais simples, uma instalação em contêiner se você já roda um servidor, e escolha uma Raspberry Pi para o básico ou um mini PC se quiser IA local.** O HAOS inclui o sistema de add-ons que você vai querer.',
        columns: ['Método de instalação', 'Dificuldade', 'Melhor para'],
        rows: [
          { 'Método de instalação': 'HAOS em dispositivo dedicado', 'Dificuldade': 'O mais fácil', 'Melhor para': 'A maioria; suporte completo a add-ons' },
          { 'Método de instalação': 'HAOS em Raspberry Pi', 'Dificuldade': 'Fácil', 'Melhor para': 'O básico, baixo consumo' },
          { 'Método de instalação': 'HAOS em mini PC', 'Dificuldade': 'Fácil', 'Melhor para': 'O básico + IA local' },
          { 'Método de instalação': 'Contêiner (Docker)', 'Dificuldade': 'Moderada', 'Melhor para': 'Servidores domésticos/NAS existentes' },
        ],
        items: [
          'Para o dimensionamento de hardware incluindo um LLM local, veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      integrations: {
        id: 'integrations',
        title: 'Adicionar suas primeiras integrações',
        content:
          '**Adicione integrações em Configurações → Dispositivos e serviços; muitos dispositivos são detectados automaticamente na sua rede.** Para dispositivos Zigbee ou Z-Wave, adicione primeiro um coordenador.',
        items: [
          'A detecção automática encontra sozinha muitos dispositivos Wi-Fi e Matter.',
          'Adicione um coordenador Zigbee (e a integração ZHA ou Zigbee2MQTT) para dispositivos Zigbee — veja [protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained).',
          'Exponha apenas as entidades que você quer, especialmente antes de conectar voz ou IA.',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: 'O painel',
        content:
          '**O Home Assistant gera automaticamente um painel que você pode personalizar com cartões para seus dispositivos.** Comece pelo padrão e refine com o tempo.',
        items: [
          'O painel padrão lista seus dispositivos e áreas automaticamente.',
          'Adicione cartões para os controles que você mais usa.',
          'Crie visões por cômodo à medida que sua configuração cresce.',
        ],
      },
      automation: {
        id: 'automation',
        title: 'Sua primeira automação',
        content:
          '**Crie uma automação simples em Configurações → Automações usando o editor visual, por exemplo acender uma luz ao pôr do sol.** Não é preciso programar para regras comuns.',
        numberedItems: [
          'Abra Configurações → Automações e cenas → Criar automação.',
          'Escolha um gatilho (horário, pôr do sol ou um estado de sensor).',
          'Escolha uma ação (acender uma luz, enviar uma notificação).',
          'Salve e teste, depois refine.',
          'Para regras contextuais depois, veja [automações de IA com um LLM local](/pt/smart-home/ai-automations-local-llm).',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: 'Adicionar IA depois',
        content:
          '**Quando o básico funcionar, adicione um LLM local como agente de conversa — mas faça isso depois que seus dispositivos e automações estiverem estáveis.** Este guia não reexplica o Ollama; faça link externo para isso.',
        items: [
          'Conecte um modelo local pela [integração do Ollama](/pt/smart-home/home-assistant-ollama-integration).',
          'Para a instalação do Ollama e a escolha do modelo, veja [como instalar o Ollama](/pt/local-llms/how-to-install-ollama) (entre clusters).',
          'Adicione um front-end de voz local com [o guia do assistente de voz local](/pt/smart-home/local-voice-assistant-smart-home).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Raspberry Pi ou mini PC para o Home Assistant?', a: 'Uma Raspberry Pi roda bem o Home Assistant para o uso típico de casa inteligente. Escolha um mini PC se você também quiser rodar um LLM local, modelos Whisper maiores ou detecção de câmeras com Frigate na mesma máquina, pois precisam de mais processamento.' },
          { q: 'O Home Assistant é gratuito?', a: 'Sim. O Home Assistant é gratuito e de código aberto. Você paga apenas pelo hardware em que roda e por extras opcionais (por exemplo, um relay na nuvem para acesso remoto fácil). O controle local básico não precisa de assinatura.' },
          { q: 'Preciso programar para usar o Home Assistant?', a: 'Não. As configurações, painéis e automações comuns são criados por uma interface gráfica. A configuração YAML está disponível para automações avançadas, mas é opcional para começar.' },
          { q: 'O Home Assistant pode rodar IA?', a: 'Sim. O Home Assistant se integra ao Ollama para que um modelo local atue como agente de conversa, e suporta voz local com Whisper e Piper. Rodar isso em um mini PC mantém tudo local. Veja o guia da integração do Ollama para configurar.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o stack local-first completo',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — adicionar um agente de IA local',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — escolha a máquina certa',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: rodar um modelo local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant: Guia Completo para Começar (2026)',
      description: 'Comece com o Home Assistant em 2026: opções de instalação (HAOS, contêiner, Pi vs mini PC), primeiras integrações, painéis e sua primeira automação local.',
      url: 'https://www.promptquorum.com/pt/smart-home/home-assistant-getting-started',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Automação residencial' }, { '@type': 'Thing', name: 'Controle local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi ou mini PC para o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Uma Raspberry Pi roda bem o Home Assistant para o uso típico. Escolha um mini PC se também quiser um LLM local, modelos Whisper maiores ou detecção com Frigate na mesma máquina.' } },
        { '@type': 'Question', name: 'O Home Assistant é gratuito?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. É gratuito e de código aberto. Você paga apenas pelo hardware e extras opcionais como um relay na nuvem para acesso remoto. O controle local básico não precisa de assinatura.' } },
        { '@type': 'Question', name: 'Preciso programar para usar o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Não. As configurações, painéis e automações comuns são criados por uma interface gráfica. O YAML é opcional para automações avançadas.' } },
        { '@type': 'Question', name: 'O Home Assistant pode rodar IA?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Integra-se ao Ollama para um agente de conversa local e suporta voz local com Whisper e Piper. Rodar isso em um mini PC mantém tudo local.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Home Assistant：完整入门指南（2026）',
    seoTitle: 'Home Assistant 2026 完整入门指南：安装与本地自动化',
    intro:
      'Home Assistant 是领先的本地优先智能家居中枢：把它装在 Raspberry Pi 或迷你 PC 上，添加集成，并在无云端的情况下本地控制一切。本入门指南讲解为何选 Home Assistant、安装方式、首批集成、仪表盘、你的第一条自动化，以及以后在哪里添加本地 AI——不再赘述 LLM 机制。',
    metaDescription:
      '2026年Home Assistant完整入门教程：全面介绍HAOS、容器部署、Raspberry Pi和迷你PC的安装方式，详细指导完成首批设备集成、自定义仪表盘搭建，以及创建第一条完全本地运行的自动化规则，全程无需云端服务。',
    twitterDescription:
      'Home Assistant 入门指南：装在 Pi 或迷你 PC 上，添加集成，创建你的第一条本地自动化。本地优先中枢。',
    readTime: '阅读约10分钟',
    educationalLevel: 'Intermediate',
    audience: '首次搭建 Home Assistant 中枢的人',
    primaryTerm: 'Home Assistant getting started',
    targetKeywords: [
      'home assistant 入门',
      'home assistant 配置',
      '安装 home assistant',
      'home assistant raspberry pi 对 迷你pc',
      'home assistant 新手 指南',
    ],
    leadAnswerBlock:
      '**Home Assistant 是免费、开源、本地优先的智能家居软件，你把它装在 Raspberry Pi 或迷你 PC 上——添加集成、创建仪表盘，并在无云端的情况下本地控制设备。** 要最简单地起步，就在专用硬件上使用 Home Assistant OS（HAOS）。',
    quickAnswerTop: {
      zh: {
        question: '我该如何开始使用 Home Assistant？',
        answer:
          '在 Raspberry Pi、迷你 PC 或专用 Home Assistant 硬件上安装 Home Assistant OS，打开网页界面，为你的设备添加集成。创建仪表盘、第一条自动化，并为本地设备添加一个 Zigbee 或 Z-Wave 协调器。一切都在本地运行，无需云端账户。',
        bullets: [
          '安装 Home Assistant OS（HAOS）以获得最简单的配置',
          '在 Raspberry Pi（基础）或迷你 PC（基础 + 本地 AI）上运行',
          '从界面为你的设备添加集成',
          '为本地协议添加 Zigbee/Z-Wave 协调器',
          '创建仪表盘和第一条自动化——全部本地',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '为何选 Home Assistant', anchor: 'why-ha' },
      { label: '安装方式', anchor: 'install' },
      { label: '首批集成', anchor: 'integrations' },
      { label: '仪表盘', anchor: 'dashboard' },
      { label: '你的第一条自动化', anchor: 'automation' },
      { label: '以后再加 AI', anchor: 'ai-later' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant 是免费、开源、本地优先的中枢软件，装在 Pi 或迷你 PC 上即可在无云端的情况下本地控制设备。' },
      { type: 'plain-terms', content: 'Home Assistant 是让你的智能家居运行在你自己硬件上、而非企业云端的软件。你把它装在一台小电脑上，连接设备，创建仪表盘和自动化。它是私密、本地智能家居的基础。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Home Assistant 免费、开源、本地优先——私密智能家居中枢的标准',
          '要最简单地起步，就在专用硬件上安装 Home Assistant OS（HAOS）',
          'Raspberry Pi 可应付基础；若还想要本地 AI，迷你 PC 更好',
          '从界面添加集成；常见设备无需编程',
          '为本地协议添加一个 Zigbee 或 Z-Wave 协调器（USB 接收器）',
          '以后再添加本地 LLM 大脑——LLM 机制走外链',
        ],
      },
      whyHa: {
        id: 'why-ha',
        title: '为何选 Home Assistant？',
        content:
          '**Home Assistant 是本地智能家居的基础，因为它运行在你自己的硬件上、会说所有主要的本地协议，并让自动化离线持续运行。** 它是最灵活也最私密的中枢。',
        items: [
          '本地优先：控制和自动化都在无云端的情况下运行。',
          '广泛支持：跨品牌和协议的数千项集成。',
          '本地 AI 的基础——参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
        ],
      },
      install: {
        id: 'install',
        title: '你该选择哪种安装方式？',
        content:
          '**要最简单的配置就在专用硬件上用 Home Assistant OS（HAOS）；若你已在运行服务器就用容器安装；基础用途选 Raspberry Pi，想要本地 AI 选迷你 PC。** HAOS 包含你会用到的加载项系统。',
        columns: ['安装方式', '难度', '最适合'],
        rows: [
          { '安装方式': '专用设备上的 HAOS', '难度': '最简单', '最适合': '多数人；完整支持加载项' },
          { '安装方式': 'Raspberry Pi 上的 HAOS', '难度': '简单', '最适合': '基础、低功耗' },
          { '安装方式': '迷你 PC 上的 HAOS', '难度': '简单', '最适合': '基础 + 本地 AI' },
          { '安装方式': '容器（Docker）', '难度': '中等', '最适合': '既有的家庭服务器/NAS' },
        ],
        items: [
          '关于含本地 LLM 的硬件规模选择，参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
      },
      integrations: {
        id: 'integrations',
        title: '添加你的首批集成',
        content:
          '**在 设置 → 设备与服务 中添加集成；许多设备会在你的网络上被自动发现。** 对 Zigbee 或 Z-Wave 设备，先添加一个协调器。',
        items: [
          '自动发现会自行找到许多 Wi-Fi 和 Matter 设备。',
          '为 Zigbee 设备添加一个 Zigbee 协调器（以及 ZHA 或 Zigbee2MQTT 集成）——参见[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained)。',
          '尤其在接入语音或 AI 之前，只暴露你想要的实体。',
        ],
      },
      dashboard: {
        id: 'dashboard',
        title: '仪表盘',
        content:
          '**Home Assistant 会自动生成一个仪表盘，你可以用设备卡片来定制。** 从默认开始，随时间逐步打磨。',
        items: [
          '默认仪表盘会自动列出你的设备和区域。',
          '为你最常用的控制添加卡片。',
          '随着配置增长，按房间创建视图。',
        ],
      },
      automation: {
        id: 'automation',
        title: '你的第一条自动化',
        content:
          '**在 设置 → 自动化 中用可视化编辑器创建一条简单自动化，例如日落时开灯。** 常见规则无需编程。',
        numberedItems: [
          '打开 设置 → 自动化与场景 → 创建自动化。',
          '选择一个触发器（时间、日落或某个传感器状态）。',
          '选择一个动作（开灯、发送通知）。',
          '保存并测试，然后再打磨。',
          '关于以后基于情境的规则，参见[用本地LLM实现AI自动化](/zh/smart-home/ai-automations-local-llm)。',
        ],
      },
      aiLater: {
        id: 'ai-later',
        title: '以后再加 AI',
        content:
          '**等基础跑通后，再把本地 LLM 作为对话代理加入——但要在你的设备和自动化稳定之后。** 本指南不再赘述 Ollama；相关内容走外链。',
        items: [
          '通过 [Ollama 集成](/zh/smart-home/home-assistant-ollama-integration) 接入一个本地模型。',
          '关于 Ollama 的安装与模型选择，参见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)（跨集群）。',
          '用[本地语音助手指南](/zh/smart-home/local-voice-assistant-smart-home)添加一个本地语音前端。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Home Assistant 该用 Raspberry Pi 还是迷你 PC？', a: 'Raspberry Pi 在典型的智能家居用途中能很好地运行 Home Assistant。如果你还想在同一台机器上运行本地 LLM、更大的 Whisper 模型或 Frigate 摄像头检测，就选迷你 PC，因为它们需要更多算力。' },
          { q: 'Home Assistant 免费吗？', a: '是的。Home Assistant 免费且开源。你只为运行它的硬件以及可选附加项（例如便于远程访问的云中继）付费。本地核心控制无需订阅。' },
          { q: '使用 Home Assistant 需要编程吗？', a: '不需要。常见的配置、仪表盘和自动化都通过图形界面创建。高级自动化可用 YAML 配置，但入门时是可选的。' },
          { q: 'Home Assistant 能运行 AI 吗？', a: '能。Home Assistant 与 Ollama 集成，可让本地模型充当对话代理，并通过 Whisper 和 Piper 支持本地语音。在迷你 PC 上运行这些可保持一切本地。配置参见 Ollama 集成指南。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整的本地优先堆栈',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 添加本地 AI 代理',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 选对机器',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：运行本地模型',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant：完整入门指南（2026）',
      description: '2026年Home Assistant完整入门教程：全面介绍HAOS、容器部署、Raspberry Pi和迷你PC的安装方式，详细指导完成首批设备集成、自定义仪表盘搭建，以及创建第一条完全本地运行的自动化规则，全程无需云端服务。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-assistant-getting-started',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '家庭自动化' }, { '@type': 'Thing', name: '本地控制' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Home Assistant 该用 Raspberry Pi 还是迷你 PC？', acceptedAnswer: { '@type': 'Answer', text: 'Raspberry Pi 在典型用途中能很好地运行 Home Assistant。若还想在同一台机器上运行本地 LLM、更大的 Whisper 或 Frigate 检测，就选迷你 PC。' } },
        { '@type': 'Question', name: 'Home Assistant 免费吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。免费且开源。你只为硬件和可选附加项（如远程访问的云中继）付费。本地核心控制无需订阅。' } },
        { '@type': 'Question', name: '使用 Home Assistant 需要编程吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。常见的配置、仪表盘和自动化都通过图形界面创建。高级自动化可用 YAML，但属可选。' } },
        { '@type': 'Question', name: 'Home Assistant 能运行 AI 吗？', acceptedAnswer: { '@type': 'Answer', text: '能。它与 Ollama 集成可让本地模型充当对话代理，并通过 Whisper 和 Piper 支持本地语音。在迷你 PC 上运行可保持一切本地。' } },
      ],
    },
  },
}
