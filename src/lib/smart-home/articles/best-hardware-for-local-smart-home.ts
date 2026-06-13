import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'Best Hardware for a Local Smart Home + Local AI (2026)',
    seoTitle: 'Best Hardware for Local Smart Home + AI (2026)',
    intro:
      'The best hardware for a local smart home depends on whether you also want to run a local LLM: a Raspberry Pi handles the basics, while a mini PC is the better pick if you want Home Assistant plus local AI on one box. This guide compares Pi, mini PC, NAS, and dedicated server, and helps you choose for HA-only versus HA-plus-AI — linking out for VRAM depth.',
    metaDescription:
      'Best hardware for a local smart home plus local AI in 2026: Raspberry Pi vs mini PC vs NAS vs server. Pick for Home Assistant alone or HA plus a local LLM.',
    twitterDescription:
      'Local smart home hardware: Pi vs mini PC vs NAS vs server. Pick a Pi for basics, a mini PC if you also want to run a local LLM. 2026 guide.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing hardware to run Home Assistant and local AI',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'best hardware home assistant local ai',
      'home assistant hardware',
      'mini pc home assistant local llm',
      'raspberry pi vs mini pc home assistant',
      'local smart home server',
    ],
    leadAnswerBlock:
      '**Run a local smart home on a Raspberry Pi for the basics, or a mini PC if you also want to run a local LLM, larger Whisper models, or Frigate on the same box.** A NAS or dedicated server suits larger setups; the deciding factor is whether you want local AI.',
    quickAnswerTop: {
      en: {
        question: 'What hardware do I need for a local smart home with AI?',
        answer:
          'For Home Assistant alone, a Raspberry Pi is enough. To run a local LLM, larger Whisper models, or Frigate camera detection on the same box, choose a mini PC with adequate RAM and a capable integrated GPU or NPU. A NAS or dedicated server fits larger, multi-service setups.',
        bullets: [
          'Home Assistant alone: Raspberry Pi is enough',
          'HA + local LLM: a mini PC with a capable iGPU/NPU',
          'More RAM and a GPU/NPU lower LLM latency',
          'NAS or server: for larger multi-service setups',
          'Decide first: HA-only or HA + local AI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What the Hub Needs', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedicated Server', anchor: 'server' },
      { label: 'HA-only vs HA + AI', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A Raspberry Pi runs a local smart home hub; a mini PC is better if you also want a local LLM, larger Whisper, or Frigate on the same box.' },
      { type: 'plain-terms', content: 'The hub software (Home Assistant) is light and runs on a small computer like a Raspberry Pi. Adding local AI — a language model, bigger speech recognition, or camera detection — needs more power, which is where a mini PC with more RAM and a capable graphics chip comes in.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant alone runs comfortably on a Raspberry Pi',
          'A mini PC is the better pick if you also want a local LLM, larger Whisper, or Frigate',
          'More RAM and a capable iGPU/NPU lower local-AI latency',
          'A NAS can host Home Assistant in a container alongside storage services',
          'A dedicated server suits larger, multi-service local setups',
          'Decide HA-only vs HA + AI before buying — it changes the right box',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'What the Hub Needs',
        content:
          '**Home Assistant itself is lightweight and runs on modest hardware; the heavy demands come from local AI and camera detection.** Size the box for what you will add, not just the hub.',
        items: [
          'The hub needs little compute for device control and automations.',
          'Local LLM inference, larger Whisper, and Frigate are the demanding workloads.',
          'Plan RAM and a GPU/NPU around those add-ons.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**A Raspberry Pi is the cheapest, lowest-power way to run Home Assistant for typical smart home use.** It struggles with LLM inference and large Whisper models.',
        items: [
          'Great for device control, automations, and a small local voice setup.',
          'LLM inference on a Pi is limited to very small, slow models.',
          'Choose a Pi if you want basics at low cost and power. Example: Raspberry Pi 5 (8GB), or the pre-built Home Assistant Green appliance.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (and Room for an LLM)',
        content:
          '**A mini PC is the best single-box choice for Home Assistant plus local AI, with enough RAM and a capable iGPU or NPU to run a small LLM.** It balances power, size, and cost.',
        items: [
          'Run Home Assistant, a small LLM via Ollama, Whisper, and Frigate together.',
          'Prioritise RAM and a capable integrated GPU or NPU for lower latency.',
          'For specific picks, see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai) and the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm). Example: Beelink SER8 (Ryzen 7 8845HS) for a 7B model, or Beelink EQ14 (Intel N150) for a low-power build.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**A NAS can host Home Assistant in a container alongside storage and Frigate recordings, if it has enough CPU and RAM.** It is convenient if you already own one.',
        items: [
          'Good for combining storage with home automation services.',
          'Check the NAS has the CPU/RAM headroom for your add-ons.',
          'LLM inference on a NAS depends on its hardware — many lack a capable GPU. Example: Synology DS925+ or DS225+; UGREEN NASync models ship a built-in local LLM option.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedicated Server',
        content:
          '**A dedicated server suits larger setups running multiple services and a larger local model.** It offers the most headroom at higher cost and power.',
        items: [
          'Best for many cameras, a larger LLM, and multiple users.',
          'Higher power draw and cost than a mini PC.',
          'Overkill for a basic smart home — reserve for heavy local-AI use.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Picking for HA-only vs HA + AI',
        content:
          '**Choose a Pi for HA-only, and a mini PC for HA plus local AI — that single decision drives the right hardware.** Match the box to the workload.',
        columns: ['Hardware', 'Relative price', 'HA-only', 'Can run a local LLM', 'Notes'],
        rows: [
          { 'Hardware': 'Raspberry Pi', 'Relative price': 'Low', 'HA-only': 'Yes', 'Can run a local LLM': 'Very small only, slow', 'Notes': 'Lowest power' },
          { 'Hardware': 'Mini PC', 'Relative price': 'Medium', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (small models)', 'Notes': 'Best single-box for HA + AI' },
          { 'Hardware': 'NAS', 'Relative price': 'Medium–High', 'HA-only': 'Yes (container)', 'Can run a local LLM': 'Depends on hardware', 'Notes': 'Combines storage + HA' },
          { 'Hardware': 'Dedicated server', 'Relative price': 'High', 'HA-only': 'Yes', 'Can run a local LLM': 'Yes (larger models)', 'Notes': 'Most headroom, most power' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can a Raspberry Pi run a local LLM too?', a: 'A Pi can run only very small models, and slowly, so it is not ideal for a responsive local-LLM assistant. It handles Home Assistant and basic voice well, but for local AI a mini PC with a capable iGPU or NPU is the better choice.' },
          { q: 'How much RAM do I need?', a: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM and other AI services on the same box, more RAM helps; a mini PC with ample RAM and a capable iGPU/NPU keeps a small model responsive. Match RAM to the model size you plan to run.' },
          { q: 'What mini PC should I get?', a: 'Choose a mini PC with enough RAM and a capable integrated GPU or NPU for the model size you want. See the best mini PCs for Home Assistant + local AI guide for picks matched to HA plus a small LLM.' },
          { q: 'One box or two?', a: 'One box (a mini PC) is simplest and runs Home Assistant plus a small local LLM together. Split into two if you want to keep the hub ultra-reliable on a Pi and offload heavy AI to a separate, more powerful machine.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — specific picks',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full stack',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the AI box runs',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Hardware for a Local Smart Home + Local AI (2026)',
      description: 'Best hardware for a local smart home plus local AI in 2026: Raspberry Pi vs mini PC vs NAS vs server. Pick for Home Assistant alone or HA plus a local LLM.',
      url: 'https://www.promptquorum.com/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Home Assistant hardware' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Local LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can a Raspberry Pi run a local LLM too?', acceptedAnswer: { '@type': 'Answer', text: 'A Pi can run only very small models, and slowly. It handles Home Assistant and basic voice well, but for a responsive local-LLM assistant a mini PC with a capable iGPU or NPU is better.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant alone runs in a couple of gigabytes. To run a small local LLM on the same box, more RAM helps; match RAM to the model size you plan to run.' } },
        { '@type': 'Question', name: 'What mini PC should I get?', acceptedAnswer: { '@type': 'Answer', text: 'One with enough RAM and a capable integrated GPU or NPU for your model size. See the best mini PCs for Home Assistant + local AI guide for picks.' } },
        { '@type': 'Question', name: 'One box or two?', acceptedAnswer: { '@type': 'Answer', text: 'One mini PC runs Home Assistant plus a small local LLM together. Split into two if you want the hub ultra-reliable on a Pi and heavy AI offloaded to a separate machine.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (2026)',
    seoTitle: 'أجهزة المنزل الذكي المحلي 2026: Pi أم mini PC أم NAS',
    intro:
      'تعتمد أفضل أجهزة المنزل الذكي المحلي على ما إذا كنت تريد أيضًا تشغيل نموذج LLM محلي: يكفي Raspberry Pi للأساسيات، بينما يُعدّ mini PC الخيار الأفضل إذا أردت Home Assistant مع الذكاء الاصطناعي المحلي على صندوق واحد. يقارن هذا الدليل بين Pi وmini PC وNAS والخادم المخصص، ويساعدك على الاختيار بين HA فقط أو HA مع الذكاء الاصطناعي — مع إحالات خارجية لتفاصيل VRAM.',
    metaDescription:
      'Raspberry Pi يكفي لـ Home Assistant وحده؛ اختر mini PC إذا أردت نموذج LLM محلي أيضًا. مقارنة 4 فئات واختيار حسب حمل العمل.',
    twitterDescription:
      'أجهزة المنزل الذكي المحلي: Pi مقابل mini PC مقابل NAS مقابل خادم. اختر Pi للأساسيات، وmini PC إذا أردت تشغيل نموذج LLM محلي. دليل 2026.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون أجهزة لتشغيل Home Assistant والذكاء الاصطناعي المحلي',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'أفضل أجهزة home assistant ذكاء اصطناعي محلي',
      'أجهزة home assistant',
      'mini pc home assistant نموذج llm محلي',
      'raspberry pi مقابل mini pc home assistant',
      'خادم المنزل الذكي المحلي',
    ],
    leadAnswerBlock:
      '**شغّل المنزل الذكي المحلي على Raspberry Pi للأساسيات، أو على mini PC إذا أردت أيضًا نموذج LLM محلي أو نماذج Whisper أكبر أو Frigate على نفس الصندوق.** يناسب NAS أو الخادم المخصص الإعدادات الأكبر؛ العامل الحاسم هو ما إذا كنت تريد الذكاء الاصطناعي المحلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما الأجهزة التي أحتاجها للمنزل الذكي المحلي مع الذكاء الاصطناعي؟',
        answer:
          'لـ Home Assistant وحده، يكفي Raspberry Pi. لتشغيل نموذج LLM محلي أو نماذج Whisper أكبر أو كشف كاميرات Frigate على نفس الصندوق، اختر mini PC مع RAM كافٍ وGPU متكاملة أو NPU قادرة. يناسب NAS أو الخادم المخصص الإعدادات الأكبر متعددة الخدمات.',
        bullets: [
          'Home Assistant وحده: يكفي Raspberry Pi',
          'HA + نموذج LLM محلي: mini PC مع iGPU/NPU قادرة',
          'المزيد من RAM وGPU/NPU يقلل زمن استجابة النموذج اللغوي',
          'NAS أو خادم: للإعدادات الأكبر متعددة الخدمات',
          'قرر أولًا: HA فقط أم HA + ذكاء اصطناعي محلي',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما يحتاجه المركز', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'خادم مخصص', anchor: 'server' },
      { label: 'HA فقط أم HA + ذكاء اصطناعي', anchor: 'picking' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يُشغّل Raspberry Pi مركز المنزل الذكي المحلي؛ أما mini PC فهو الأفضل إذا أردت أيضًا نموذج LLM محلي أو Whisper أكبر أو Frigate على نفس الصندوق.' },
      { type: 'plain-terms', content: 'برنامج المركز (Home Assistant) خفيف ويعمل على حاسوب صغير مثل Raspberry Pi. إضافة الذكاء الاصطناعي المحلي — نموذج لغوي أو التعرف على الكلام الأكبر أو كشف الكاميرا — تتطلب قدرة أكبر، وهنا يأتي دور mini PC مع RAM أكثر وشريحة رسومات قادرة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Home Assistant وحده يعمل بسهولة على Raspberry Pi',
          'mini PC هو الخيار الأفضل إذا أردت أيضًا نموذج LLM محلي أو Whisper أكبر أو Frigate',
          'المزيد من RAM وiGPU/NPU قادرة يقلل زمن استجابة الذكاء الاصطناعي المحلي',
          'يمكن لـ NAS استضافة Home Assistant في حاوية إلى جانب خدمات التخزين',
          'الخادم المخصص يناسب الإعدادات المحلية الأكبر متعددة الخدمات',
          'قرر HA فقط أم HA + ذكاء اصطناعي قبل الشراء — يغيّر ذلك الجهاز المناسب',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ما يحتاجه المركز',
        content:
          '**Home Assistant خفيف بحد ذاته ويعمل على أجهزة متواضعة؛ الطلبات الثقيلة تأتي من الذكاء الاصطناعي المحلي وكشف الكاميرا.** حجّم الصندوق لما ستضيفه، ليس فقط للمركز.',
        items: [
          'يحتاج المركز حسابًا ضئيلًا للتحكم في الأجهزة والأتمتة.',
          'استنتاج نموذج LLM محلي وWhisper الأكبر وFrigate هي أحمال العمل الثقيلة.',
          'خطط لـ RAM وGPU/NPU حول تلك الإضافات.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi هو أرخص وأقل استهلاكًا للطاقة طريقة لتشغيل Home Assistant للاستخدام المنزلي الذكي الاعتيادي.** يجد صعوبة مع استنتاج النموذج اللغوي ونماذج Whisper الكبيرة.',
        items: [
          'ممتاز للتحكم في الأجهزة والأتمتة وإعداد صوتي محلي صغير.',
          'استنتاج النموذج اللغوي على Pi محدود بنماذج صغيرة جدًا وبطيئة.',
          'اختر Pi إذا أردت الأساسيات بتكلفة منخفضة واستهلاك طاقة منخفض. مثال: Raspberry Pi 5 (8GB)، أو جهاز Home Assistant Green الجاهز.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (ومساحة لنموذج LLM)',
        content:
          '**mini PC هو أفضل خيار بصندوق واحد لـ Home Assistant مع الذكاء الاصطناعي المحلي، بما يكفي من RAM وiGPU أو NPU قادرة لتشغيل نموذج LLM صغير.** يوازن القدرة والحجم والتكلفة.',
        items: [
          'شغّل Home Assistant ونموذج LLM صغير عبر Ollama وWhisper وFrigate معًا.',
          'أعطِ الأولوية لـ RAM وGPU متكاملة أو NPU قادرة لزمن استجابة أقل.',
          'للاختيارات المحددة، راجع [أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) ومتعدد العناقيد [أفضل mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm). مثال: Beelink SER8 (Ryzen 7 8845HS) لنموذج 7B، أو Beelink EQ14 (Intel N150) لبناء منخفض الطاقة.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**يمكن لـ NAS استضافة Home Assistant في حاوية إلى جانب التخزين وتسجيلات Frigate، إذا كان يمتلك CPU وRAM كافيين.** مريح إذا كنت تمتلك واحدًا بالفعل.',
        items: [
          'مناسب لدمج التخزين مع خدمات أتمتة المنزل.',
          'تحقق من أن NAS لديه حيّز CPU/RAM لإضافاتك.',
          'يعتمد استنتاج النموذج اللغوي على NAS على أجهزته — كثير منها يفتقر إلى GPU قادرة. مثال: Synology DS925+ أو DS225+؛ طرازات UGREEN NASync تشحن مع خيار نموذج LLM محلي مدمج.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'خادم مخصص',
        content:
          '**الخادم المخصص يناسب الإعدادات الأكبر التي تشغّل خدمات متعددة ونموذجًا محليًا أكبر.** يوفر أكبر حيّز بتكلفة واستهلاك طاقة أعلى.',
        items: [
          'الأفضل لكاميرات كثيرة ونموذج LLM أكبر ومستخدمين متعددين.',
          'استهلاك طاقة وتكلفة أعلى من mini PC.',
          'مبالغة لمنزل ذكي أساسي — احتفظ به للاستخدام الكثيف للذكاء الاصطناعي المحلي.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'الاختيار بين HA فقط أم HA + ذكاء اصطناعي',
        content:
          '**اختر Pi لـ HA فقط، وmini PC لـ HA مع الذكاء الاصطناعي المحلي — هذا القرار الواحد يحدد الأجهزة المناسبة.** طابق الصندوق مع حمل العمل.',
        columns: ['الأجهزة', 'السعر النسبي', 'HA فقط', 'يمكنه تشغيل نموذج LLM محلي', 'ملاحظات'],
        rows: [
          { 'الأجهزة': 'Raspberry Pi', 'السعر النسبي': 'منخفض', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نماذج صغيرة جدًا فقط، بطيء', 'ملاحظات': 'أقل استهلاكًا للطاقة' },
          { 'الأجهزة': 'Mini PC', 'السعر النسبي': 'متوسط', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (نماذج صغيرة)', 'ملاحظات': 'أفضل صندوق واحد لـ HA + ذكاء اصطناعي' },
          { 'الأجهزة': 'NAS', 'السعر النسبي': 'متوسط-مرتفع', 'HA فقط': 'نعم (حاوية)', 'يمكنه تشغيل نموذج LLM محلي': 'يعتمد على الأجهزة', 'ملاحظات': 'يجمع التخزين + HA' },
          { 'الأجهزة': 'خادم مخصص', 'السعر النسبي': 'مرتفع', 'HA فقط': 'نعم', 'يمكنه تشغيل نموذج LLM محلي': 'نعم (نماذج أكبر)', 'ملاحظات': 'أكبر حيّز، أعلى طاقة' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', a: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء، لذا فهو ليس مثاليًا لمساعد LLM محلي سريع الاستجابة. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي يُعدّ mini PC مع iGPU أو NPU قادرة الخيار الأفضل.' },
          { q: 'كم من RAM أحتاج؟', a: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير وخدمات ذكاء اصطناعي أخرى على نفس الصندوق، يساعد المزيد من RAM؛ طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' },
          { q: 'ما mini PC الذي يجب أن أشتريه؟', a: 'اختر mini PC مع RAM كافٍ وGPU متكاملة أو NPU قادرة لحجم النموذج المطلوب. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي للاختيارات المتوافقة مع HA ونموذج LLM صغير.' },
          { q: 'صندوق واحد أم اثنان؟', a: 'صندوق واحد (mini PC) هو الأبسط ويشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على Pi وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل أكثر قدرة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل Mini PCs لـ Home Assistant + ذكاء اصطناعي محلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — اختيارات محددة',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — المجموعة الكاملة',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — ما يشغّله صندوق الذكاء الاصطناعي',
          '[أفضل Mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm) — متعدد العناقيد: VRAM وتفاصيل الأجهزة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل أجهزة المنزل الذكي المحلي + الذكاء الاصطناعي المحلي (2026)',
      description: 'أفضل أجهزة المنزل الذكي المحلي مع الذكاء الاصطناعي 2026: Raspberry Pi مقابل mini PC مقابل NAS مقابل خادم. اختر لـ Home Assistant وحده أو HA مع نموذج LLM محلي.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'أجهزة Home Assistant' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يستطيع Raspberry Pi تشغيل نموذج LLM محلي أيضًا؟', acceptedAnswer: { '@type': 'Answer', text: 'يمكن لـ Pi تشغيل نماذج صغيرة جدًا فحسب وببطء. يتعامل بشكل جيد مع Home Assistant والصوت الأساسي، لكن للذكاء الاصطناعي المحلي mini PC مع iGPU أو NPU قادرة هو الأفضل.' } },
        { '@type': 'Question', name: 'كم من RAM أحتاج؟', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant وحده يعمل في بضعة غيغابايت. لتشغيل نموذج LLM محلي صغير على نفس الصندوق، يساعد المزيد من RAM؛ طابق RAM مع حجم النموذج الذي تخطط لتشغيله.' } },
        { '@type': 'Question', name: 'ما mini PC الذي يجب أن أشتريه؟', acceptedAnswer: { '@type': 'Answer', text: 'واحد مع RAM كافٍ وGPU متكاملة أو NPU قادرة لحجم نموذجك. راجع دليل أفضل mini PCs لـ Home Assistant + ذكاء اصطناعي محلي للاختيارات.' } },
        { '@type': 'Question', name: 'صندوق واحد أم اثنان؟', acceptedAnswer: { '@type': 'Answer', text: 'mini PC واحد يشغّل Home Assistant مع نموذج LLM محلي صغير معًا. قسّم إلى اثنين إذا أردت إبقاء المركز موثوقًا للغاية على Pi وتفريغ الذكاء الاصطناعي الثقيل على جهاز منفصل.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
    seoTitle: 'Beste Hardware: lokales Smart Home + KI (2026)',
    intro:
      'Die beste Hardware für ein lokales Smart Home hängt davon ab, ob Sie auch ein lokales LLM betreiben wollen: Ein Raspberry Pi bewältigt die Grundlagen, während ein Mini-PC die bessere Wahl ist, wenn Sie Home Assistant plus lokale KI auf einem Gerät wollen. Dieser Leitfaden vergleicht Pi, Mini-PC, NAS und dedizierten Server und hilft bei der Wahl zwischen nur-HA und HA-plus-KI – mit Verweis nach außen für VRAM-Details.',
    metaDescription:
      'Beste Hardware für lokales Smart Home + KI 2026: Raspberry Pi vs Mini-PC vs NAS vs Server — für Home Assistant allein oder HA plus lokales LLM.',
    twitterDescription:
      'Hardware für ein lokales Smart Home: Pi vs Mini-PC vs NAS vs Server. Pi für Grundlagen, Mini-PC, wenn Sie auch ein lokales LLM betreiben wollen. 2026-Leitfaden.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die Hardware für Home Assistant und lokale KI wählen',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'beste hardware home assistant lokale ki',
      'home assistant hardware',
      'mini pc home assistant lokales llm',
      'raspberry pi vs mini pc home assistant',
      'lokaler smart home server',
    ],
    leadAnswerBlock:
      '**Betreiben Sie ein lokales Smart Home auf einem Raspberry Pi für die Grundlagen oder auf einem Mini-PC, wenn Sie auch ein lokales LLM, größere Whisper-Modelle oder Frigate auf demselben Gerät wollen.** Ein NAS oder dedizierter Server passt zu größeren Setups; der entscheidende Faktor ist, ob Sie lokale KI wollen.',
    quickAnswerTop: {
      de: {
        question: 'Welche Hardware brauche ich für ein lokales Smart Home mit KI?',
        answer:
          'Für Home Assistant allein genügt ein Raspberry Pi. Um ein lokales LLM, größere Whisper-Modelle oder Frigate-Kameraerkennung auf demselben Gerät zu betreiben, wählen Sie einen Mini-PC mit ausreichend RAM und einer leistungsfähigen integrierten GPU oder NPU. Ein NAS oder dedizierter Server passt zu größeren Multi-Service-Setups.',
        bullets: [
          'Home Assistant allein: ein Raspberry Pi genügt',
          'HA + lokales LLM: ein Mini-PC mit leistungsfähiger iGPU/NPU',
          'Mehr RAM und eine GPU/NPU senken die LLM-Latenz',
          'NAS oder Server: für größere Multi-Service-Setups',
          'Zuerst entscheiden: nur HA oder HA + lokale KI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was der Hub braucht', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Dedizierter Server', anchor: 'server' },
      { label: 'Nur HA vs HA + KI', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein Raspberry Pi betreibt einen lokalen Smart-Home-Hub; ein Mini-PC ist besser, wenn Sie auch ein lokales LLM, größeres Whisper oder Frigate auf demselben Gerät wollen.' },
      { type: 'plain-terms', content: 'Die Hub-Software (Home Assistant) ist leichtgewichtig und läuft auf einem kleinen Computer wie einem Raspberry Pi. Lokale KI hinzuzufügen – ein Sprachmodell, größere Spracherkennung oder Kameraerkennung – braucht mehr Leistung, und hier kommt ein Mini-PC mit mehr RAM und einem leistungsfähigen Grafikchip ins Spiel.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant allein läuft bequem auf einem Raspberry Pi',
          'Ein Mini-PC ist die bessere Wahl, wenn Sie auch ein lokales LLM, größeres Whisper oder Frigate wollen',
          'Mehr RAM und eine leistungsfähige iGPU/NPU senken die Latenz lokaler KI',
          'Ein NAS kann Home Assistant in einem Container neben Speicherdiensten betreiben',
          'Ein dedizierter Server passt zu größeren lokalen Multi-Service-Setups',
          'Entscheiden Sie nur-HA vs HA + KI vor dem Kauf – das ändert das richtige Gerät',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Was der Hub braucht',
        content:
          '**Home Assistant selbst ist leichtgewichtig und läuft auf bescheidener Hardware; die hohen Anforderungen kommen von lokaler KI und Kameraerkennung.** Dimensionieren Sie das Gerät nach dem, was Sie hinzufügen, nicht nur nach dem Hub.',
        items: [
          'Der Hub braucht wenig Rechenleistung für Gerätesteuerung und Automatisierungen.',
          'Lokale LLM-Inferenz, größeres Whisper und Frigate sind die anspruchsvollen Workloads.',
          'Planen Sie RAM und eine GPU/NPU rund um diese Add-ons.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Ein Raspberry Pi ist der günstigste, stromsparendste Weg, Home Assistant für typische Smart-Home-Nutzung zu betreiben.** Mit LLM-Inferenz und großen Whisper-Modellen hat er Schwierigkeiten.',
        items: [
          'Hervorragend für Gerätesteuerung, Automatisierungen und ein kleines lokales Sprach-Setup.',
          'LLM-Inferenz auf einem Pi ist auf sehr kleine, langsame Modelle begrenzt.',
          'Wählen Sie einen Pi, wenn Sie Grundlagen bei niedrigen Kosten und Stromverbrauch wollen. Beispiel: Raspberry Pi 5 (8GB) oder das vorkonfigurierte Home Assistant Green.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (und Platz für ein LLM)',
        content:
          '**Ein Mini-PC ist die beste Ein-Geräte-Wahl für Home Assistant plus lokale KI, mit genug RAM und einer leistungsfähigen iGPU oder NPU, um ein kleines LLM zu betreiben.** Er balanciert Leistung, Größe und Kosten.',
        items: [
          'Betreiben Sie Home Assistant, ein kleines LLM über Ollama, Whisper und Frigate zusammen.',
          'Priorisieren Sie RAM und eine leistungsfähige integrierte GPU oder NPU für geringere Latenz.',
          'Für konkrete Empfehlungen siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) und clusterübergreifend [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm). Beispiel: Beelink SER8 (Ryzen 7 8845HS) für ein 7B-Modell oder Beelink EQ14 (Intel N150) für einen stromsparenden Aufbau.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Ein NAS kann Home Assistant in einem Container neben Speicher und Frigate-Aufnahmen betreiben, wenn es genug CPU und RAM hat.** Es ist praktisch, wenn Sie bereits eines besitzen.',
        items: [
          'Gut, um Speicher mit Heimautomatisierungsdiensten zu kombinieren.',
          'Prüfen Sie, ob das NAS CPU-/RAM-Reserven für Ihre Add-ons hat.',
          'LLM-Inferenz auf einem NAS hängt von seiner Hardware ab – vielen fehlt eine leistungsfähige GPU. Beispiel: Synology DS925+ oder DS225+; UGREEN-NASync-Modelle bieten ein integriertes lokales LLM.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Dedizierter Server',
        content:
          '**Ein dedizierter Server passt zu größeren Setups, die mehrere Dienste und ein größeres lokales Modell betreiben.** Er bietet die meisten Reserven bei höheren Kosten und höherem Stromverbrauch.',
        items: [
          'Am besten für viele Kameras, ein größeres LLM und mehrere Nutzer.',
          'Höherer Stromverbrauch und höhere Kosten als ein Mini-PC.',
          'Überdimensioniert für ein einfaches Smart Home – reservieren Sie ihn für intensive lokale KI-Nutzung.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Wählen für nur-HA vs HA + KI',
        content:
          '**Wählen Sie einen Pi für nur-HA und einen Mini-PC für HA plus lokale KI – diese eine Entscheidung bestimmt die richtige Hardware.** Passen Sie das Gerät an den Workload an.',
        columns: ['Hardware', 'Relativer Preis', 'Nur-HA', 'Kann ein lokales LLM betreiben', 'Hinweise'],
        rows: [
          { 'Hardware': 'Raspberry Pi', 'Relativer Preis': 'Niedrig', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Nur sehr klein, langsam', 'Hinweise': 'Niedrigster Stromverbrauch' },
          { 'Hardware': 'Mini-PC', 'Relativer Preis': 'Mittel', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (kleine Modelle)', 'Hinweise': 'Bestes Ein-Geräte-Setup für HA + KI' },
          { 'Hardware': 'NAS', 'Relativer Preis': 'Mittel–hoch', 'Nur-HA': 'Ja (Container)', 'Kann ein lokales LLM betreiben': 'Hängt von der Hardware ab', 'Hinweise': 'Kombiniert Speicher + HA' },
          { 'Hardware': 'Dedizierter Server', 'Relativer Preis': 'Hoch', 'Nur-HA': 'Ja', 'Kann ein lokales LLM betreiben': 'Ja (größere Modelle)', 'Hinweise': 'Meiste Reserven, meiste Leistung' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', a: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam, daher ist er für einen reaktionsschnellen lokalen LLM-Assistenten nicht ideal. Home Assistant und einfache Sprache bewältigt er gut, aber für lokale KI ist ein Mini-PC mit einer leistungsfähigen iGPU oder NPU die bessere Wahl.' },
          { q: 'Wie viel RAM brauche ich?', a: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM und andere KI-Dienste auf demselben Gerät zu betreiben, hilft mehr RAM; ein Mini-PC mit reichlich RAM und einer leistungsfähigen iGPU/NPU hält ein kleines Modell reaktionsschnell. Passen Sie den RAM an die geplante Modellgröße an.' },
          { q: 'Welchen Mini-PC sollte ich kaufen?', a: 'Wählen Sie einen Mini-PC mit genug RAM und einer leistungsfähigen integrierten GPU oder NPU für die gewünschte Modellgröße. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI für auf HA plus ein kleines LLM abgestimmte Empfehlungen.' },
          { q: 'Ein Gerät oder zwei?', a: 'Ein Gerät (ein Mini-PC) ist am einfachsten und betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem Pi extrem zuverlässig halten und intensive KI auf eine separate, leistungsfähigere Maschine auslagern wollen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – konkrete Empfehlungen',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der vollständige Stack',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – was das KI-Gerät betreibt',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) – clusterübergreifend: VRAM und Hardware-Details',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Hardware für ein lokales Smart Home + lokale KI (2026)',
      description: 'Beste Hardware für lokales Smart Home + KI 2026: Raspberry Pi vs Mini-PC vs NAS vs Server — für Home Assistant allein oder HA plus lokales LLM.',
      url: 'https://www.promptquorum.com/de/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Home-Assistant-Hardware' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Lokales LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Kann ein Raspberry Pi auch ein lokales LLM betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Pi kann nur sehr kleine Modelle betreiben, und das langsam. Home Assistant und einfache Sprache bewältigt er gut, aber für einen reaktionsschnellen lokalen LLM-Assistenten ist ein Mini-PC mit leistungsfähiger iGPU oder NPU besser.' } },
        { '@type': 'Question', name: 'Wie viel RAM brauche ich?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant allein läuft in ein paar Gigabyte. Um ein kleines lokales LLM auf demselben Gerät zu betreiben, hilft mehr RAM; passen Sie den RAM an die geplante Modellgröße an.' } },
        { '@type': 'Question', name: 'Welchen Mini-PC sollte ich kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Einen mit genug RAM und einer leistungsfähigen integrierten GPU oder NPU für Ihre Modellgröße. Siehe den Leitfaden zu den besten Mini-PCs für Home Assistant + lokale KI für Empfehlungen.' } },
        { '@type': 'Question', name: 'Ein Gerät oder zwei?', acceptedAnswer: { '@type': 'Answer', text: 'Ein Mini-PC betreibt Home Assistant plus ein kleines lokales LLM zusammen. Teilen Sie auf zwei auf, wenn Sie den Hub auf einem Pi extrem zuverlässig halten und intensive KI auf eine separate Maschine auslagern wollen.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
    seoTitle: 'Mejor Hardware: Smart Home Local + IA (2026)',
    intro:
      'El mejor hardware para un smart home local depende de si también quieres ejecutar un LLM local: una Raspberry Pi cubre lo básico, mientras que un mini PC es la mejor opción si quieres Home Assistant más IA local en un solo equipo. Esta guía compara Pi, mini PC, NAS y servidor dedicado, y te ayuda a elegir entre solo-HA y HA-más-IA, enlazando hacia fuera para la profundidad de VRAM.',
    metaDescription:
      'Mejor hardware para un smart home local más IA local en 2026: Raspberry Pi vs mini PC vs NAS vs servidor. Elige para Home Assistant solo o HA más un LLM local.',
    twitterDescription:
      'Hardware para un smart home local: Pi vs mini PC vs NAS vs servidor. Pi para lo básico, mini PC si también quieres ejecutar un LLM local. Guía 2026.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'mejor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor smart home local',
    ],
    leadAnswerBlock:
      '**Ejecuta un smart home local en una Raspberry Pi para lo básico, o un mini PC si también quieres ejecutar un LLM local, modelos Whisper más grandes o Frigate en el mismo equipo.** Un NAS o servidor dedicado encaja en configuraciones mayores; el factor decisivo es si quieres IA local.',
    quickAnswerTop: {
      es: {
        question: '¿Qué hardware necesito para un smart home local con IA?',
        answer:
          'Para Home Assistant solo, una Raspberry Pi es suficiente. Para ejecutar un LLM local, modelos Whisper más grandes o detección de cámaras con Frigate en el mismo equipo, elige un mini PC con RAM adecuada y una GPU integrada o NPU capaz. Un NAS o servidor dedicado encaja en configuraciones mayores de varios servicios.',
        bullets: [
          'Home Assistant solo: una Raspberry Pi es suficiente',
          'HA + LLM local: un mini PC con iGPU/NPU capaz',
          'Más RAM y una GPU/NPU reducen la latencia del LLM',
          'NAS o servidor: para configuraciones mayores de varios servicios',
          'Decide primero: solo-HA o HA + IA local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué necesita el hub', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'Solo-HA vs HA + IA', anchor: 'picking' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Una Raspberry Pi ejecuta un hub de smart home local; un mini PC es mejor si también quieres un LLM local, Whisper más grande o Frigate en el mismo equipo.' },
      { type: 'plain-terms', content: 'El software del hub (Home Assistant) es ligero y corre en un ordenador pequeño como una Raspberry Pi. Añadir IA local —un modelo de lenguaje, reconocimiento de voz más grande o detección de cámaras— necesita más potencia, y ahí entra un mini PC con más RAM y un chip gráfico capaz.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant solo corre cómodamente en una Raspberry Pi',
          'Un mini PC es la mejor opción si también quieres un LLM local, Whisper más grande o Frigate',
          'Más RAM y una iGPU/NPU capaz reducen la latencia de la IA local',
          'Un NAS puede alojar Home Assistant en un contenedor junto a servicios de almacenamiento',
          'Un servidor dedicado encaja en configuraciones locales mayores de varios servicios',
          'Decide solo-HA vs HA + IA antes de comprar: cambia el equipo adecuado',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Qué necesita el hub',
        content:
          '**El propio Home Assistant es ligero y corre en hardware modesto; las demandas pesadas vienen de la IA local y la detección de cámaras.** Dimensiona el equipo para lo que vas a añadir, no solo para el hub.',
        items: [
          'El hub necesita poco cómputo para el control de dispositivos y las automatizaciones.',
          'La inferencia de LLM local, Whisper más grande y Frigate son las cargas exigentes.',
          'Planifica la RAM y una GPU/NPU en torno a esos complementos.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Una Raspberry Pi es la forma más barata y de menor consumo de ejecutar Home Assistant para el uso típico de smart home.** Tiene dificultades con la inferencia de LLM y los modelos Whisper grandes.',
        items: [
          'Estupenda para control de dispositivos, automatizaciones y una pequeña configuración de voz local.',
          'La inferencia de LLM en una Pi se limita a modelos muy pequeños y lentos.',
          'Elige una Pi si quieres lo básico con bajo coste y consumo. Ejemplo: Raspberry Pi 5 (8GB) o el equipo preconfigurado Home Assistant Green.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (y sitio para un LLM)',
        content:
          '**Un mini PC es la mejor opción de un solo equipo para Home Assistant más IA local, con suficiente RAM y una iGPU o NPU capaz para ejecutar un LLM pequeño.** Equilibra potencia, tamaño y coste.',
        items: [
          'Ejecuta Home Assistant, un LLM pequeño vía Ollama, Whisper y Frigate juntos.',
          'Prioriza la RAM y una GPU integrada o NPU capaz para menor latencia.',
          'Para opciones concretas, consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) y, entre clústeres, [mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm). Ejemplo: Beelink SER8 (Ryzen 7 8845HS) para un modelo 7B, o Beelink EQ14 (Intel N150) para un equipo de bajo consumo.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS puede alojar Home Assistant en un contenedor junto al almacenamiento y las grabaciones de Frigate, si tiene suficiente CPU y RAM.** Es cómodo si ya tienes uno.',
        items: [
          'Bueno para combinar almacenamiento con servicios de domótica.',
          'Comprueba que el NAS tenga margen de CPU/RAM para tus complementos.',
          'La inferencia de LLM en un NAS depende de su hardware: muchos carecen de una GPU capaz. Ejemplo: Synology DS925+ o DS225+; los modelos UGREEN NASync incluyen una opción de LLM local integrada.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado',
        content:
          '**Un servidor dedicado encaja en configuraciones mayores que ejecutan varios servicios y un modelo local más grande.** Ofrece el mayor margen a mayor coste y consumo.',
        items: [
          'Mejor para muchas cámaras, un LLM más grande y varios usuarios.',
          'Mayor consumo y coste que un mini PC.',
          'Excesivo para un smart home básico: resérvalo para uso intensivo de IA local.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Elegir para solo-HA vs HA + IA',
        content:
          '**Elige una Pi para solo-HA y un mini PC para HA más IA local: esa única decisión determina el hardware adecuado.** Ajusta el equipo a la carga de trabajo.',
        columns: ['Hardware', 'Precio relativo', 'Solo-HA', 'Puede ejecutar un LLM local', 'Notas'],
        rows: [
          { 'Hardware': 'Raspberry Pi', 'Precio relativo': 'Bajo', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Solo muy pequeños, lento', 'Notas': 'Menor consumo' },
          { 'Hardware': 'Mini PC', 'Precio relativo': 'Medio', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (modelos pequeños)', 'Notas': 'Mejor equipo único para HA + IA' },
          { 'Hardware': 'NAS', 'Precio relativo': 'Medio–alto', 'Solo-HA': 'Sí (contenedor)', 'Puede ejecutar un LLM local': 'Depende del hardware', 'Notas': 'Combina almacenamiento + HA' },
          { 'Hardware': 'Servidor dedicado', 'Precio relativo': 'Alto', 'Solo-HA': 'Sí', 'Puede ejecutar un LLM local': 'Sí (modelos más grandes)', 'Notas': 'Más margen, más consumo' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede una Raspberry Pi ejecutar también un LLM local?', a: 'Una Pi solo puede ejecutar modelos muy pequeños, y lentamente, así que no es ideal para un asistente de LLM local con buena respuesta. Maneja bien Home Assistant y la voz básica, pero para IA local un mini PC con una iGPU o NPU capaz es la mejor opción.' },
          { q: '¿Cuánta RAM necesito?', a: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño y otros servicios de IA en el mismo equipo, ayuda más RAM; un mini PC con RAM amplia y una iGPU/NPU capaz mantiene un modelo pequeño con buena respuesta. Ajusta la RAM al tamaño del modelo que planees ejecutar.' },
          { q: '¿Qué mini PC debería comprar?', a: 'Elige un mini PC con suficiente RAM y una GPU integrada o NPU capaz para el tamaño de modelo que quieras. Consulta la guía de mejores mini PC para Home Assistant + IA local para opciones ajustadas a HA más un LLM pequeño.' },
          { q: '¿Un equipo o dos?', a: 'Un equipo (un mini PC) es lo más simple y ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres mantener el hub ultrafiable en una Pi y descargar la IA pesada a una máquina separada y más potente.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — opciones concretas',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el stack completo',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — qué ejecuta el equipo de IA',
          '[Mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm) — entre clústeres: VRAM y detalle de hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejor Hardware para un Smart Home Local + IA Local (2026)',
      description: 'Mejor hardware para un smart home local más IA local en 2026: Raspberry Pi vs mini PC vs NAS vs servidor. Elige para Home Assistant solo o HA más un LLM local.',
      url: 'https://www.promptquorum.com/es/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Hardware de Home Assistant' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Puede una Raspberry Pi ejecutar también un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Una Pi solo puede ejecutar modelos muy pequeños y lentamente. Maneja bien Home Assistant y la voz básica, pero para un asistente de LLM local con buena respuesta un mini PC con iGPU o NPU capaz es mejor.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant solo corre en un par de gigabytes. Para ejecutar un LLM local pequeño en el mismo equipo, ayuda más RAM; ajusta la RAM al tamaño del modelo que planees ejecutar.' } },
        { '@type': 'Question', name: '¿Qué mini PC debería comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Uno con suficiente RAM y una GPU integrada o NPU capaz para tu tamaño de modelo. Consulta la guía de mejores mini PC para Home Assistant + IA local para opciones.' } },
        { '@type': 'Question', name: '¿Un equipo o dos?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC ejecuta Home Assistant más un LLM local pequeño juntos. Divide en dos si quieres el hub ultrafiable en una Pi y la IA pesada en una máquina separada.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
    seoTitle: '로컬 스마트 홈 + AI를 위한 최고의 하드웨어 (2026)',
    intro:
      '로컬 스마트 홈에 최적인 하드웨어는 로컬 LLM도 실행할지 여부에 따라 달라집니다. 기본 기능에는 Raspberry Pi로 충분하지만 한 기기에서 Home Assistant와 로컬 AI를 함께 실행하려면 미니 PC가 더 나은 선택입니다. 이 가이드는 Pi, 미니 PC, NAS, 전용 서버를 비교하고 HA 단독과 HA+AI 중 선택하는 방법을 안내하며 VRAM 심층 정보는 외부 링크로 연결합니다.',
    metaDescription:
      '2026년 로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어: Raspberry Pi 대 미니 PC 대 NAS 대 서버. Home Assistant 단독 또는 HA + 로컬 LLM 선택 가이드.',
    twitterDescription:
      '로컬 스마트 홈 하드웨어: Pi 대 미니 PC 대 NAS 대 서버. 기본 기능에는 Pi, 로컬 LLM도 실행하려면 미니 PC. 2026 가이드.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant와 로컬 AI 실행을 위한 하드웨어를 선택하는 구매자',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'home assistant 로컬 AI 최고의 하드웨어',
      'home assistant 하드웨어',
      '미니 PC home assistant 로컬 LLM',
      'raspberry pi 대 미니 PC home assistant',
      '로컬 스마트 홈 서버',
    ],
    leadAnswerBlock:
      '**기본 기능에는 Raspberry Pi로 로컬 스마트 홈을 운영하고, 같은 기기에서 로컬 LLM, 대형 Whisper 모델, Frigate도 실행하려면 미니 PC를 선택하십시오.** NAS나 전용 서버는 대규모 설정에 적합합니다. 결정 요인은 로컬 AI 필요 여부입니다.',
    quickAnswerTop: {
      ko: {
        question: 'AI가 포함된 로컬 스마트 홈에 어떤 하드웨어가 필요합니까?',
        answer:
          'Home Assistant 단독으로는 Raspberry Pi로 충분합니다. 같은 기기에서 로컬 LLM, 대형 Whisper 모델, Frigate 카메라 감지를 실행하려면 충분한 RAM과 고성능 내장 GPU 또는 NPU가 있는 미니 PC를 선택하십시오. NAS 또는 전용 서버는 대규모 멀티서비스 설정에 적합합니다.',
        bullets: [
          'Home Assistant 단독: Raspberry Pi로 충분합니다',
          'HA + 로컬 LLM: 고성능 iGPU/NPU가 있는 미니 PC',
          '더 많은 RAM과 GPU/NPU는 LLM 지연 시간을 줄입니다',
          'NAS 또는 서버: 대규모 멀티서비스 설정에 적합합니다',
          '먼저 결정하십시오: HA 단독인지 HA + 로컬 AI인지',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '허브에 필요한 것', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '미니 PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '전용 서버', anchor: 'server' },
      { label: 'HA 단독 대 HA + AI', anchor: 'picking' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Raspberry Pi는 로컬 스마트 홈 허브를 실행하고, 같은 기기에서 로컬 LLM, 대형 Whisper, Frigate도 원한다면 미니 PC가 더 적합합니다.' },
      { type: 'plain-terms', content: '허브 소프트웨어(Home Assistant)는 가볍고 Raspberry Pi 같은 소형 컴퓨터에서 실행됩니다. 언어 모델, 대형 음성 인식, 카메라 감지 등 로컬 AI를 추가하면 더 많은 성능이 필요하고, 이때 더 많은 RAM과 고성능 그래픽 칩이 있는 미니 PC가 필요합니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant 단독은 Raspberry Pi에서 쾌적하게 실행됩니다',
          '로컬 LLM, 대형 Whisper, Frigate도 원한다면 미니 PC가 더 나은 선택입니다',
          '더 많은 RAM과 고성능 iGPU/NPU는 로컬 AI 지연 시간을 줄입니다',
          'NAS는 스토리지 서비스와 함께 컨테이너에서 Home Assistant를 호스팅할 수 있습니다',
          '전용 서버는 멀티서비스 대규모 로컬 설정에 적합합니다',
          '구매 전에 HA 단독 대 HA + AI를 결정하십시오. 그 선택이 적합한 기기를 바꿉니다',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '허브에 필요한 것',
        content:
          '**Home Assistant 자체는 가볍고 평범한 하드웨어에서 실행됩니다. 높은 요구 사항은 로컬 AI와 카메라 감지에서 옵니다.** 허브만이 아니라 추가할 것을 고려하여 기기 크기를 결정하십시오.',
        items: [
          '허브는 장치 제어 및 자동화에 거의 연산이 필요하지 않습니다.',
          '로컬 LLM 추론, 대형 Whisper, Frigate가 까다로운 워크로드입니다.',
          '이러한 부가 기능에 맞춰 RAM과 GPU/NPU를 계획하십시오.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi는 일반 스마트 홈 용도로 Home Assistant를 실행하는 가장 저렴하고 저전력인 방법입니다.** LLM 추론과 대형 Whisper 모델에는 어려움을 겪습니다.',
        items: [
          '장치 제어, 자동화, 소형 로컬 음성 설정에 탁월합니다.',
          'Pi에서의 LLM 추론은 매우 소형이고 느린 모델에만 제한됩니다.',
          '저비용 저전력으로 기본 기능만 원한다면 Pi를 선택하십시오. 예시: Raspberry Pi 5 (8GB) 또는 사전 구성된 Home Assistant Green 어플라이언스.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '미니 PC (LLM을 위한 여유 공간)',
        content:
          '**미니 PC는 Home Assistant와 로컬 AI를 하나의 기기에서 실행하는 최고의 선택입니다. 충분한 RAM과 고성능 iGPU 또는 NPU로 소형 LLM을 실행합니다.** 성능, 크기, 비용의 균형이 잡혀 있습니다.',
        items: [
          'Home Assistant, Ollama를 통한 소형 LLM, Whisper, Frigate를 함께 실행하십시오.',
          '더 낮은 지연 시간을 위해 RAM과 고성능 내장 GPU 또는 NPU를 우선시하십시오.',
          '구체적인 선택은 [Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)와 크로스 클러스터 [로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm)를 참조하십시오. 예시: 7B 모델용 Beelink SER8 (Ryzen 7 8845HS) 또는 저전력 구성용 Beelink EQ14 (Intel N150).',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS는 충분한 CPU와 RAM이 있다면 스토리지 및 Frigate 녹화와 함께 컨테이너에서 Home Assistant를 호스팅할 수 있습니다.** 이미 보유하고 있다면 편리합니다.',
        items: [
          '스토리지와 홈 자동화 서비스를 결합하기에 적합합니다.',
          'NAS에 부가 기능을 위한 CPU/RAM 여유가 있는지 확인하십시오.',
          'NAS에서의 LLM 추론은 하드웨어에 따라 다릅니다. 많은 NAS에는 고성능 GPU가 없습니다. 예시: Synology DS925+ 또는 DS225+; UGREEN NASync 모델은 내장 로컬 LLM 옵션을 제공합니다.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '전용 서버',
        content:
          '**전용 서버는 여러 서비스와 대형 로컬 모델을 실행하는 대규모 설정에 적합합니다.** 더 높은 비용과 전력으로 가장 많은 여유를 제공합니다.',
        items: [
          '많은 카메라, 대형 LLM, 다수의 사용자에게 가장 적합합니다.',
          '미니 PC보다 전력 소비와 비용이 높습니다.',
          '기본 스마트 홈에는 과도합니다. 대용량 로컬 AI 사용에 예약하십시오.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'HA 단독 대 HA + AI 선택',
        content:
          '**HA 단독에는 Pi, HA + 로컬 AI에는 미니 PC를 선택하십시오. 이 단일 결정이 올바른 하드웨어를 결정합니다.** 워크로드에 맞게 기기를 선택하십시오.',
        columns: ['하드웨어', '상대적 가격', 'HA 단독', '로컬 LLM 실행 가능', '비고'],
        rows: [
          { '하드웨어': 'Raspberry Pi', '상대적 가격': '저가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '매우 소형만, 느림', '비고': '최저 전력' },
          { '하드웨어': '미니 PC', '상대적 가격': '중가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (소형 모델)', '비고': 'HA + AI를 위한 최고의 단일 기기' },
          { '하드웨어': 'NAS', '상대적 가격': '중~고가', 'HA 단독': '가능 (컨테이너)', '로컬 LLM 실행 가능': '하드웨어에 따라 다름', '비고': '스토리지 + HA 결합' },
          { '하드웨어': '전용 서버', '상대적 가격': '고가', 'HA 단독': '가능', '로컬 LLM 실행 가능': '가능 (대형 모델)', '비고': '최대 여유, 최고 전력' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', a: 'Pi는 매우 소형 모델만 느리게 실행할 수 있으므로 반응이 빠른 로컬 LLM 어시스턴트에는 이상적이지 않습니다. Home Assistant와 기본 음성은 잘 처리하지만 로컬 AI에는 고성능 iGPU 또는 NPU가 있는 미니 PC가 더 나은 선택입니다.' },
          { q: 'RAM이 얼마나 필요합니까?', a: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM과 다른 AI 서비스를 실행하려면 더 많은 RAM이 도움이 됩니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' },
          { q: '어떤 미니 PC를 구매해야 합니까?', a: '원하는 모델 크기에 맞는 충분한 RAM과 고성능 내장 GPU 또는 NPU가 있는 미니 PC를 선택하십시오. HA + 소형 LLM에 맞는 선택은 Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드를 참조하십시오.' },
          { q: '기기 하나로 충분합니까, 두 개가 필요합니까?', a: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행하는 것이 가장 간단합니다. Pi에서 허브를 매우 안정적으로 유지하고 무거운 AI를 별도의 강력한 기기에 오프로드하려면 두 기기로 나누십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — 구체적인 선택',
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 전체 스택',
          '[로컬 LLM으로 스마트 홈 운영하기](/ko/smart-home/local-llm-smart-home-complete-guide) — AI 기기가 실행하는 것',
          '[로컬 LLM을 위한 최고의 미니 PC](/ko/local-llms/best-mini-pcs-local-llm) — 크로스 클러스터: VRAM 및 하드웨어 심층 정보',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어 (2026)',
      description: '2026년 로컬 스마트 홈 + 로컬 AI를 위한 최고의 하드웨어: Raspberry Pi 대 미니 PC 대 NAS 대 서버. Home Assistant 단독 또는 HA + 로컬 LLM 선택.',
      url: 'https://www.promptquorum.com/ko/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Home Assistant 하드웨어' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '미니 PC' }, { '@type': 'Thing', name: '로컬 LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi도 로컬 LLM을 실행할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Pi는 매우 소형 모델만 느리게 실행할 수 있습니다. Home Assistant와 기본 음성은 잘 처리하지만 반응이 빠른 로컬 LLM 어시스턴트에는 고성능 iGPU 또는 NPU가 있는 미니 PC가 더 적합합니다.' } },
        { '@type': 'Question', name: 'RAM이 얼마나 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 단독은 몇 GB면 충분합니다. 같은 기기에서 소형 로컬 LLM을 실행하려면 더 많은 RAM이 도움이 됩니다. 실행할 모델 크기에 맞게 RAM을 선택하십시오.' } },
        { '@type': 'Question', name: '어떤 미니 PC를 구매해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '모델 크기에 맞는 충분한 RAM과 고성능 내장 GPU 또는 NPU가 있는 것을 선택하십시오. Home Assistant + 로컬 AI를 위한 최고의 미니 PC 가이드에서 선택을 확인하십시오.' } },
        { '@type': 'Question', name: '기기 하나로 충분합니까, 두 개가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '미니 PC 하나로 Home Assistant와 소형 로컬 LLM을 함께 실행합니다. Pi에서 허브를 매우 안정적으로 유지하고 무거운 AI를 별도 기기에 오프로드하려면 두 기기로 나누십시오.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
    seoTitle: 'Meilleur Matériel : Maison Connectée Locale + IA (2026)',
    intro:
      'Le meilleur matériel pour une maison connectée locale dépend de si vous voulez aussi exécuter un LLM local : une Raspberry Pi gère les bases, tandis qu\'un mini-PC est le meilleur choix si vous voulez Home Assistant plus l\'IA locale sur une seule machine. Ce guide compare Pi, mini-PC, NAS et serveur dédié, et vous aide à choisir entre HA-seul et HA-plus-IA, avec un lien vers l\'extérieur pour la profondeur de VRAM.',
    metaDescription:
      'Meilleur matériel maison connectée locale + IA 2026 : Raspberry Pi vs mini-PC vs NAS vs serveur — Home Assistant seul ou HA plus LLM local.',
    twitterDescription:
      'Matériel pour une maison connectée locale : Pi vs mini-PC vs NAS vs serveur. Pi pour les bases, mini-PC si vous voulez aussi un LLM local. Guide 2026.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant du matériel pour Home Assistant et l\'IA locale',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'meilleur matériel home assistant ia locale',
      'home assistant matériel',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'serveur maison connectée locale',
    ],
    leadAnswerBlock:
      '**Faites tourner une maison connectée locale sur une Raspberry Pi pour les bases, ou un mini-PC si vous voulez aussi exécuter un LLM local, des modèles Whisper plus grands ou Frigate sur la même machine.** Un NAS ou un serveur dédié convient aux configurations plus grandes ; le facteur décisif est de savoir si vous voulez de l\'IA locale.',
    quickAnswerTop: {
      fr: {
        question: 'Quel matériel pour une maison connectée locale avec IA ?',
        answer:
          'Pour Home Assistant seul, une Raspberry Pi suffit. Pour exécuter un LLM local, des modèles Whisper plus grands ou la détection de caméras Frigate sur la même machine, choisissez un mini-PC avec assez de RAM et un GPU intégré ou NPU capable. Un NAS ou un serveur dédié convient aux configurations plus grandes à plusieurs services.',
        bullets: [
          'Home Assistant seul : une Raspberry Pi suffit',
          'HA + LLM local : un mini-PC avec iGPU/NPU capable',
          'Plus de RAM et un GPU/NPU réduisent la latence du LLM',
          'NAS ou serveur : pour les configurations plus grandes à plusieurs services',
          'Décidez d\'abord : HA-seul ou HA + IA locale',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce que le hub nécessite', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini-PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Serveur dédié', anchor: 'server' },
      { label: 'HA-seul vs HA + IA', anchor: 'picking' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une Raspberry Pi fait tourner un hub de maison connectée locale ; un mini-PC est meilleur si vous voulez aussi un LLM local, un Whisper plus grand ou Frigate sur la même machine.' },
      { type: 'plain-terms', content: 'Le logiciel du hub (Home Assistant) est léger et tourne sur un petit ordinateur comme une Raspberry Pi. Ajouter de l\'IA locale — un modèle de langage, une reconnaissance vocale plus grande ou la détection de caméras — demande plus de puissance, et c\'est là qu\'un mini-PC avec plus de RAM et une puce graphique capable intervient.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant seul tourne confortablement sur une Raspberry Pi',
          'Un mini-PC est le meilleur choix si vous voulez aussi un LLM local, un Whisper plus grand ou Frigate',
          'Plus de RAM et une iGPU/NPU capable réduisent la latence de l\'IA locale',
          'Un NAS peut héberger Home Assistant dans un conteneur aux côtés de services de stockage',
          'Un serveur dédié convient aux configurations locales plus grandes à plusieurs services',
          'Décidez HA-seul vs HA + IA avant d\'acheter — cela change la bonne machine',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'Ce que le hub nécessite',
        content:
          '**Home Assistant lui-même est léger et tourne sur du matériel modeste ; les exigences lourdes viennent de l\'IA locale et de la détection de caméras.** Dimensionnez la machine pour ce que vous allez ajouter, pas seulement pour le hub.',
        items: [
          'Le hub demande peu de puissance pour le contrôle des appareils et les automatisations.',
          'L\'inférence de LLM local, un Whisper plus grand et Frigate sont les charges exigeantes.',
          'Planifiez la RAM et un GPU/NPU autour de ces add-ons.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Une Raspberry Pi est le moyen le moins cher et le moins gourmand de faire tourner Home Assistant pour un usage maison connectée typique.** Elle peine avec l\'inférence de LLM et les grands modèles Whisper.',
        items: [
          'Parfaite pour le contrôle des appareils, les automatisations et une petite configuration vocale locale.',
          'L\'inférence de LLM sur une Pi se limite à des modèles très petits et lents.',
          'Choisissez une Pi si vous voulez les bases à faible coût et faible consommation. Exemple : Raspberry Pi 5 (8 Go) ou l\'appareil préconfiguré Home Assistant Green.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8 Go)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini-PC (et de la place pour un LLM)',
        content:
          '**Un mini-PC est le meilleur choix en une seule machine pour Home Assistant plus l\'IA locale, avec assez de RAM et un iGPU ou NPU capable pour exécuter un petit LLM.** Il équilibre puissance, taille et coût.',
        items: [
          'Faites tourner Home Assistant, un petit LLM via Ollama, Whisper et Frigate ensemble.',
          'Priorisez la RAM et un GPU intégré ou NPU capable pour une latence plus faible.',
          'Pour des choix précis, voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) et, inter-clusters, [meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm). Exemple : Beelink SER8 (Ryzen 7 8845HS) pour un modèle 7B, ou Beelink EQ14 (Intel N150) pour un montage basse consommation.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Un NAS peut héberger Home Assistant dans un conteneur aux côtés du stockage et des enregistrements Frigate, s\'il a assez de CPU et de RAM.** C\'est pratique si vous en possédez déjà un.',
        items: [
          'Bon pour combiner stockage et services de domotique.',
          'Vérifiez que le NAS a la marge CPU/RAM pour vos add-ons.',
          'L\'inférence de LLM sur un NAS dépend de son matériel — beaucoup n\'ont pas de GPU capable. Exemple : Synology DS925+ ou DS225+ ; les modèles UGREEN NASync intègrent une option de LLM local.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Serveur dédié',
        content:
          '**Un serveur dédié convient aux configurations plus grandes exécutant plusieurs services et un modèle local plus grand.** Il offre le plus de marge à un coût et une consommation supérieurs.',
        items: [
          'Idéal pour de nombreuses caméras, un LLM plus grand et plusieurs utilisateurs.',
          'Consommation et coût supérieurs à un mini-PC.',
          'Surdimensionné pour une maison connectée basique — réservez-le à un usage intensif d\'IA locale.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Choisir pour HA-seul vs HA + IA',
        content:
          '**Choisissez une Pi pour HA-seul et un mini-PC pour HA plus IA locale — cette seule décision détermine le bon matériel.** Adaptez la machine à la charge de travail.',
        columns: ['Matériel', 'Prix relatif', 'HA-seul', 'Peut exécuter un LLM local', 'Notes'],
        rows: [
          { 'Matériel': 'Raspberry Pi', 'Prix relatif': 'Faible', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Très petits seulement, lent', 'Notes': 'Consommation la plus faible' },
          { 'Matériel': 'Mini-PC', 'Prix relatif': 'Moyen', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (petits modèles)', 'Notes': 'Meilleure machine unique pour HA + IA' },
          { 'Matériel': 'NAS', 'Prix relatif': 'Moyen–élevé', 'HA-seul': 'Oui (conteneur)', 'Peut exécuter un LLM local': 'Dépend du matériel', 'Notes': 'Combine stockage + HA' },
          { 'Matériel': 'Serveur dédié', 'Prix relatif': 'Élevé', 'HA-seul': 'Oui', 'Peut exécuter un LLM local': 'Oui (modèles plus grands)', 'Notes': 'Plus de marge, plus de consommation' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', a: 'Une Pi ne peut exécuter que des modèles très petits, et lentement, elle n\'est donc pas idéale pour un assistant LLM local réactif. Elle gère bien Home Assistant et la voix basique, mais pour l\'IA locale un mini-PC avec un iGPU ou NPU capable est le meilleur choix.' },
          { q: 'De combien de RAM ai-je besoin ?', a: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local et d\'autres services d\'IA sur la même machine, plus de RAM aide ; un mini-PC avec une RAM ample et un iGPU/NPU capable garde un petit modèle réactif. Adaptez la RAM à la taille du modèle prévu.' },
          { q: 'Quel mini-PC choisir ?', a: 'Choisissez un mini-PC avec assez de RAM et un GPU intégré ou NPU capable pour la taille de modèle voulue. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale pour des choix adaptés à HA plus un petit LLM.' },
          { q: 'Une machine ou deux ?', a: 'Une machine (un mini-PC) est la plus simple et fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez garder le hub ultra-fiable sur une Pi et déporter l\'IA lourde vers une machine séparée et plus puissante.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — choix précis',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le stack complet',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine IA exécute',
          '[Meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm) — inter-clusters : VRAM et détail matériel',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleur Matériel pour une Maison Connectée Locale + IA Locale (2026)',
      description: 'Meilleur matériel maison connectée locale + IA 2026 : Raspberry Pi vs mini-PC vs NAS vs serveur — Home Assistant seul ou HA plus LLM local.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Matériel Home Assistant' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Une Raspberry Pi peut-elle aussi exécuter un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Une Pi ne peut exécuter que des modèles très petits et lentement. Elle gère bien Home Assistant et la voix basique, mais pour un assistant LLM local réactif un mini-PC avec iGPU ou NPU capable est meilleur.' } },
        { '@type': 'Question', name: 'De combien de RAM ai-je besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant seul tourne dans quelques gigaoctets. Pour exécuter un petit LLM local sur la même machine, plus de RAM aide ; adaptez la RAM à la taille du modèle prévu.' } },
        { '@type': 'Question', name: 'Quel mini-PC choisir ?', acceptedAnswer: { '@type': 'Answer', text: 'Un avec assez de RAM et un GPU intégré ou NPU capable pour votre taille de modèle. Voir le guide des meilleurs mini-PC pour Home Assistant + IA locale pour des choix.' } },
        { '@type': 'Question', name: 'Une machine ou deux ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC fait tourner Home Assistant plus un petit LLM local ensemble. Séparez en deux si vous voulez le hub ultra-fiable sur une Pi et l\'IA lourde sur une machine séparée.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
    seoTitle: '最適なハードウェア：ローカルSH + AI（2026）',
    intro:
      'ローカルスマートホームに最適なハードウェアは、ローカルLLMも動かしたいかどうかで決まります：Raspberry Pi は基本を担い、Home Assistant とローカルAIを一台で動かしたいならミニPCがより良い選択です。本ガイドは Pi、ミニPC、NAS、専用サーバーを比較し、HAのみか HA＋AI かの選択を助けます——VRAM の詳細は外部リンクへ。',
    metaDescription:
      'ローカルスマートホームとローカルAI活用に最適なハードウェア比較（2026年）：Raspberry Pi、ミニPC、NAS、専用サーバーの特徴と性能を詳しく比較し、Home Assistantのみか、ローカルLLMも同時に動かすかで最適な設定と構成を案内します。',
    twitterDescription:
      'ローカルスマートホームのハードウェア：Pi 対 ミニPC 対 NAS 対 サーバー。基本は Pi、ローカルLLMも動かすならミニPC。2026年ガイド。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant とローカルAIを動かすハードウェアを選ぶ購入者',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最適 ハードウェア home assistant ローカルai',
      'home assistant ハードウェア',
      'ミニpc home assistant ローカルllm',
      'raspberry pi 対 ミニpc home assistant',
      'ローカル スマートホーム サーバー',
    ],
    leadAnswerBlock:
      '**基本なら Raspberry Pi、ローカルLLM・より大きな Whisper モデル・Frigate を同じ機器で動かしたいならミニPCで、ローカルスマートホームを動かしましょう。** NAS や専用サーバーは大規模構成に向きます；決め手はローカルAIが欲しいかどうかです。',
    quickAnswerTop: {
      ja: {
        question: 'AI付きのローカルスマートホームにはどんなハードウェアが必要ですか？',
        answer:
          'Home Assistant 単体なら Raspberry Pi で十分です。ローカルLLM、より大きな Whisper モデル、または Frigate のカメラ検出を同じ機器で動かすなら、十分な RAM と高性能な統合GPUまたはNPUを備えたミニPCを選びましょう。NAS や専用サーバーは、より大きなマルチサービス構成に向きます。',
        bullets: [
          'Home Assistant 単体：Raspberry Pi で十分',
          'HA＋ローカルLLM：高性能な iGPU/NPU 付きのミニPC',
          'RAM と GPU/NPU が多いほど LLM のレイテンシが下がる',
          'NAS やサーバー：より大きなマルチサービス構成向け',
          'まず決める：HAのみか HA＋ローカルAIか',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'ハブに必要なもの', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'ミニPC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '専用サーバー', anchor: 'server' },
      { label: 'HAのみ 対 HA＋AI', anchor: 'picking' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Raspberry Pi はローカルスマートホームのハブを動かします；ローカルLLM・より大きな Whisper・Frigate を同じ機器で動かすならミニPCが良いです。' },
      { type: 'plain-terms', content: 'ハブのソフト（Home Assistant）は軽量で、Raspberry Pi のような小型コンピューターで動きます。ローカルAI——言語モデル、より大きな音声認識、カメラ検出——を加えるにはより多くの性能が必要で、そこで RAM の多いミニPCと高性能なグラフィックチップが活きてきます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant 単体は Raspberry Pi で快適に動く',
          'ローカルLLM・より大きな Whisper・Frigate も欲しいならミニPCが良い選択',
          'RAM と高性能な iGPU/NPU が多いほどローカルAIのレイテンシが下がる',
          'NAS はストレージサービスと並べてコンテナで Home Assistant をホストできる',
          '専用サーバーは大規模なローカルのマルチサービス構成に向く',
          '購入前に HAのみ 対 HA＋AI を決める——適切な機器が変わる',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'ハブに必要なもの',
        content:
          '**Home Assistant 自体は軽量で控えめなハードウェアで動きます；重い要求はローカルAIとカメラ検出から来ます。** ハブだけでなく、追加するものに合わせて機器を選びましょう。',
        items: [
          'ハブは機器制御と自動化にほとんど計算力を要しません。',
          'ローカルLLM推論、より大きな Whisper、Frigate が要求の高いワークロードです。',
          'これらのアドオンを軸に RAM と GPU/NPU を計画しましょう。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi は、一般的なスマートホーム用途で Home Assistant を動かす最も安く低消費電力な方法です。** LLM推論や大きな Whisper モデルには苦労します。',
        items: [
          '機器制御、自動化、小規模なローカル音声構成に最適。',
          'Pi 上の LLM 推論は非常に小さく遅いモデルに限られます。',
          '低コスト・低消費電力で基本が欲しいなら Pi を選びましょう。例：Raspberry Pi 5（8GB）、または完成品の Home Assistant Green。',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5（8GB）', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'ミニPC（と LLM の余地）',
        content:
          '**ミニPCは、十分な RAM と小型 LLM を動かせる高性能な iGPU または NPU を備えた、Home Assistant＋ローカルAIに最適な一台の選択です。** 性能・サイズ・コストのバランスが取れています。',
        items: [
          'Home Assistant、Ollama 経由の小型 LLM、Whisper、Frigate を一緒に動かせます。',
          'より低いレイテンシのために RAM と高性能な統合GPUまたはNPUを優先します。',
          '具体的な候補は[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)、クラスター横断で[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm)を参照。例：7B モデルには Beelink SER8（Ryzen 7 8845HS）、低消費電力構成には Beelink EQ14（Intel N150）。',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**NAS は、十分な CPU と RAM があれば、ストレージや Frigate の録画と並べてコンテナで Home Assistant をホストできます。** すでに所有しているなら便利です。',
        items: [
          'ストレージとホームオートメーションのサービスを組み合わせるのに適します。',
          'NAS にアドオン用の CPU/RAM の余裕があるか確認しましょう。',
          'NAS 上の LLM 推論はそのハードウェア次第——多くは高性能な GPU を欠きます。例：Synology DS925+ または DS225+；UGREEN NASync モデルはローカル LLM を内蔵します。',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '専用サーバー',
        content:
          '**専用サーバーは、複数のサービスとより大きなローカルモデルを動かす大規模構成に向きます。** より高いコストと消費電力で最大の余裕を提供します。',
        items: [
          '多数のカメラ、より大きな LLM、複数ユーザーに最適。',
          'ミニPCより消費電力もコストも高い。',
          '基本的なスマートホームには過剰——重いローカルAI用途に取っておきましょう。',
        ],
      },
      picking: {
        id: 'picking',
        title: 'HAのみ 対 HA＋AI で選ぶ',
        content:
          '**HAのみなら Pi、HA＋ローカルAIならミニPCを選びましょう——この一つの判断が適切なハードウェアを決めます。** 機器をワークロードに合わせます。',
        columns: ['ハードウェア', '相対価格', 'HAのみ', 'ローカルLLMを動かせるか', '備考'],
        rows: [
          { 'ハードウェア': 'Raspberry Pi', '相対価格': '低', 'HAのみ': '可', 'ローカルLLMを動かせるか': '非常に小型のみ、遅い', '備考': '最も低消費電力' },
          { 'ハードウェア': 'ミニPC', '相対価格': '中', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（小型モデル）', '備考': 'HA＋AIに最適な一台' },
          { 'ハードウェア': 'NAS', '相対価格': '中〜高', 'HAのみ': '可（コンテナ）', 'ローカルLLMを動かせるか': 'ハードウェア次第', '備考': 'ストレージ＋HAを兼ねる' },
          { 'ハードウェア': '専用サーバー', '相対価格': '高', 'HAのみ': '可', 'ローカルLLMを動かせるか': '可（より大きなモデル）', '備考': '最大の余裕、最大の消費電力' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Raspberry Pi でもローカルLLMを動かせますか？', a: 'Pi は非常に小型のモデルを遅く動かせるだけなので、反応の良いローカルLLMアシスタントには不向きです。Home Assistant と基本的な音声はよく動かしますが、ローカルAIには高性能な iGPU または NPU 付きのミニPCがより良い選択です。' },
          { q: 'RAM はどれくらい必要ですか？', a: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMや他のAIサービスを動かすには RAM が多いほど助かります；RAM が潤沢で高性能な iGPU/NPU を備えたミニPCは小型モデルを反応良く保ちます。動かす予定のモデルサイズに RAM を合わせましょう。' },
          { q: 'どのミニPCを買うべきですか？', a: '欲しいモデルサイズに対し、十分な RAM と高性能な統合GPUまたはNPUを備えたミニPCを選びましょう。HA に小型 LLM を加えた構成に合う候補は、Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' },
          { q: '一台ですか、二台ですか？', a: '一台（ミニPC）が最もシンプルで、Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを Pi で極めて安定させ、重いAIを別のより強力なマシンに任せたい場合は二台に分けましょう。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — 具体的な候補',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 構成の全体',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — AI機器が何を動かすか',
          '[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm) — クラスター横断：VRAM とハードウェアの詳細',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルスマートホーム + ローカルAIに最適なハードウェア（2026）',
      description: 'ローカルスマートホームとローカルAI活用に最適なハードウェア比較（2026年）：Raspberry Pi、ミニPC、NAS、専用サーバーの特徴と性能を詳しく比較し、Home Assistantのみか、ローカルLLMも同時に動かすかで最適な設定と構成を案内します。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Home Assistant ハードウェア' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'ミニPC' }, { '@type': 'Thing', name: 'ローカルLLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi でもローカルLLMを動かせますか？', acceptedAnswer: { '@type': 'Answer', text: 'Pi は非常に小型のモデルを遅く動かせるだけです。Home Assistant と基本的な音声はよく動かしますが、反応の良いローカルLLMアシスタントには高性能な iGPU または NPU 付きのミニPCが良いです。' } },
        { '@type': 'Question', name: 'RAM はどれくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 単体なら数ギガバイトで動きます。同じ機器で小型のローカルLLMを動かすには RAM が多いほど助かります；動かす予定のモデルサイズに RAM を合わせましょう。' } },
        { '@type': 'Question', name: 'どのミニPCを買うべきですか？', acceptedAnswer: { '@type': 'Answer', text: '欲しいモデルサイズに対し、十分な RAM と高性能な統合GPUまたはNPUを備えたものを選びましょう。Home Assistant＋ローカルAIに最適なミニPCのガイドを参照してください。' } },
        { '@type': 'Question', name: '一台ですか、二台ですか？', acceptedAnswer: { '@type': 'Answer', text: 'ミニPC一台で Home Assistant と小型のローカルLLMを一緒に動かせます。ハブを Pi で極めて安定させ、重いAIを別のマシンに任せたいなら二台に分けましょう。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
    seoTitle: 'Melhor Hardware: Casa Inteligente Local + IA (2026)',
    intro:
      'O melhor hardware para uma casa inteligente local depende de se você também quer rodar um LLM local: uma Raspberry Pi dá conta do básico, enquanto um mini PC é a melhor escolha se você quer Home Assistant mais IA local em um único equipamento. Este guia compara Pi, mini PC, NAS e servidor dedicado, e ajuda a escolher entre só-HA e HA-mais-IA, com link externo para a profundidade de VRAM.',
    metaDescription:
      'Melhor hardware para casa inteligente local + IA 2026: Raspberry Pi vs mini-PC vs NAS vs servidor. Para Home Assistant ou HA + LLM local.',
    twitterDescription:
      'Hardware para uma casa inteligente local: Pi vs mini PC vs NAS vs servidor. Pi para o básico, mini PC se você também quer rodar um LLM local. Guia 2026.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores escolhendo hardware para Home Assistant e IA local',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      'melhor hardware home assistant ia local',
      'home assistant hardware',
      'mini pc home assistant llm local',
      'raspberry pi vs mini pc home assistant',
      'servidor casa inteligente local',
    ],
    leadAnswerBlock:
      '**Rode uma casa inteligente local em uma Raspberry Pi para o básico, ou um mini PC se você também quer rodar um LLM local, modelos Whisper maiores ou Frigate no mesmo equipamento.** Um NAS ou servidor dedicado serve para configurações maiores; o fator decisivo é se você quer IA local.',
    quickAnswerTop: {
      pt: {
        question: 'Qual hardware preciso para uma casa inteligente local com IA?',
        answer:
          'Para o Home Assistant sozinho, uma Raspberry Pi basta. Para rodar um LLM local, modelos Whisper maiores ou detecção de câmeras com Frigate no mesmo equipamento, escolha um mini PC com RAM adequada e uma GPU integrada ou NPU capaz. Um NAS ou servidor dedicado serve para configurações maiores de vários serviços.',
        bullets: [
          'Home Assistant sozinho: uma Raspberry Pi basta',
          'HA + LLM local: um mini PC com iGPU/NPU capaz',
          'Mais RAM e uma GPU/NPU reduzem a latência do LLM',
          'NAS ou servidor: para configurações maiores de vários serviços',
          'Decida primeiro: só-HA ou HA + IA local',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que o hub precisa', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: 'Mini PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: 'Servidor dedicado', anchor: 'server' },
      { label: 'Só-HA vs HA + IA', anchor: 'picking' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma Raspberry Pi roda um hub de casa inteligente local; um mini PC é melhor se você também quer um LLM local, Whisper maior ou Frigate no mesmo equipamento.' },
      { type: 'plain-terms', content: 'O software do hub (Home Assistant) é leve e roda em um computador pequeno como uma Raspberry Pi. Adicionar IA local — um modelo de linguagem, reconhecimento de voz maior ou detecção de câmeras — precisa de mais potência, e é aí que entra um mini PC com mais RAM e um chip gráfico capaz.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Home Assistant sozinho roda confortavelmente em uma Raspberry Pi',
          'Um mini PC é a melhor escolha se você também quer um LLM local, Whisper maior ou Frigate',
          'Mais RAM e uma iGPU/NPU capaz reduzem a latência da IA local',
          'Um NAS pode hospedar o Home Assistant em um contêiner ao lado de serviços de armazenamento',
          'Um servidor dedicado serve para configurações locais maiores de vários serviços',
          'Decida só-HA vs HA + IA antes de comprar — muda o equipamento certo',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: 'O que o hub precisa',
        content:
          '**O próprio Home Assistant é leve e roda em hardware modesto; as demandas pesadas vêm da IA local e da detecção de câmeras.** Dimensione o equipamento para o que você vai adicionar, não só para o hub.',
        items: [
          'O hub precisa de pouco processamento para o controle de dispositivos e as automações.',
          'A inferência de LLM local, Whisper maior e Frigate são as cargas exigentes.',
          'Planeje a RAM e uma GPU/NPU em torno desses complementos.',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Uma Raspberry Pi é a forma mais barata e de menor consumo de rodar o Home Assistant para o uso típico de casa inteligente.** Ela tem dificuldade com inferência de LLM e modelos Whisper grandes.',
        items: [
          'Ótima para controle de dispositivos, automações e uma pequena configuração de voz local.',
          'A inferência de LLM em uma Pi se limita a modelos muito pequenos e lentos.',
          'Escolha uma Pi se você quer o básico com baixo custo e consumo. Exemplo: Raspberry Pi 5 (8GB) ou o aparelho pré-montado Home Assistant Green.',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5 (8GB)', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: 'Mini PC (e espaço para um LLM)',
        content:
          '**Um mini PC é a melhor escolha de equipamento único para Home Assistant mais IA local, com RAM suficiente e uma iGPU ou NPU capaz para rodar um LLM pequeno.** Ele equilibra potência, tamanho e custo.',
        items: [
          'Rode o Home Assistant, um LLM pequeno via Ollama, Whisper e Frigate juntos.',
          'Priorize a RAM e uma GPU integrada ou NPU capaz para menor latência.',
          'Para escolhas específicas, veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) e, entre clusters, [melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm). Exemplo: Beelink SER8 (Ryzen 7 8845HS) para um modelo 7B, ou Beelink EQ14 (Intel N150) para uma montagem de baixo consumo.',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**Um NAS pode hospedar o Home Assistant em um contêiner ao lado do armazenamento e das gravações do Frigate, se tiver CPU e RAM suficientes.** É conveniente se você já tem um.',
        items: [
          'Bom para combinar armazenamento com serviços de automação residencial.',
          'Verifique se o NAS tem folga de CPU/RAM para seus complementos.',
          'A inferência de LLM em um NAS depende do hardware dele — muitos não têm uma GPU capaz. Exemplo: Synology DS925+ ou DS225+; os modelos UGREEN NASync trazem uma opção de LLM local integrada.',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: 'Servidor dedicado',
        content:
          '**Um servidor dedicado serve para configurações maiores que rodam vários serviços e um modelo local maior.** Oferece a maior folga a maior custo e consumo.',
        items: [
          'Melhor para muitas câmeras, um LLM maior e vários usuários.',
          'Maior consumo e custo que um mini PC.',
          'Exagero para uma casa inteligente básica — reserve para uso intenso de IA local.',
        ],
      },
      picking: {
        id: 'picking',
        title: 'Escolher para só-HA vs HA + IA',
        content:
          '**Escolha uma Pi para só-HA e um mini PC para HA mais IA local — essa única decisão define o hardware certo.** Ajuste o equipamento à carga de trabalho.',
        columns: ['Hardware', 'Preço relativo', 'Só-HA', 'Pode rodar um LLM local', 'Notas'],
        rows: [
          { 'Hardware': 'Raspberry Pi', 'Preço relativo': 'Baixo', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Só muito pequenos, lento', 'Notas': 'Menor consumo' },
          { 'Hardware': 'Mini PC', 'Preço relativo': 'Médio', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (modelos pequenos)', 'Notas': 'Melhor equipamento único para HA + IA' },
          { 'Hardware': 'NAS', 'Preço relativo': 'Médio–alto', 'Só-HA': 'Sim (contêiner)', 'Pode rodar um LLM local': 'Depende do hardware', 'Notas': 'Combina armazenamento + HA' },
          { 'Hardware': 'Servidor dedicado', 'Preço relativo': 'Alto', 'Só-HA': 'Sim', 'Pode rodar um LLM local': 'Sim (modelos maiores)', 'Notas': 'Mais folga, mais consumo' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Uma Raspberry Pi também pode rodar um LLM local?', a: 'Uma Pi só consegue rodar modelos muito pequenos, e devagar, então não é ideal para um assistente de LLM local responsivo. Ela dá conta bem do Home Assistant e da voz básica, mas para IA local um mini PC com uma iGPU ou NPU capaz é a melhor escolha.' },
          { q: 'De quanta RAM eu preciso?', a: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno e outros serviços de IA no mesmo equipamento, mais RAM ajuda; um mini PC com RAM ampla e uma iGPU/NPU capaz mantém um modelo pequeno responsivo. Ajuste a RAM ao tamanho do modelo que você planeja rodar.' },
          { q: 'Qual mini PC eu deveria comprar?', a: 'Escolha um mini PC com RAM suficiente e uma GPU integrada ou NPU capaz para o tamanho de modelo que você quer. Veja o guia dos melhores mini PCs para Home Assistant + IA local para escolhas ajustadas a HA mais um LLM pequeno.' },
          { q: 'Um equipamento ou dois?', a: 'Um equipamento (um mini PC) é o mais simples e roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se você quiser manter o hub ultraconfiável em uma Pi e descarregar a IA pesada para uma máquina separada e mais potente.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — escolhas específicas',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o stack completo',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — o que o equipamento de IA roda',
          '[Melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm) — entre clusters: VRAM e detalhe de hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhor Hardware para uma Casa Inteligente Local + IA Local (2026)',
      description: 'Melhor hardware para casa inteligente local + IA 2026: Raspberry Pi vs mini-PC vs NAS vs servidor. Para Home Assistant ou HA + LLM local.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Hardware do Home Assistant' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Uma Raspberry Pi também pode rodar um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Uma Pi só consegue rodar modelos muito pequenos e devagar. Ela dá conta bem do Home Assistant e da voz básica, mas para um assistente de LLM local responsivo um mini PC com iGPU ou NPU capaz é melhor.' } },
        { '@type': 'Question', name: 'De quanta RAM eu preciso?', acceptedAnswer: { '@type': 'Answer', text: 'O Home Assistant sozinho roda em poucos gigabytes. Para rodar um LLM local pequeno no mesmo equipamento, mais RAM ajuda; ajuste a RAM ao tamanho do modelo que você planeja rodar.' } },
        { '@type': 'Question', name: 'Qual mini PC eu deveria comprar?', acceptedAnswer: { '@type': 'Answer', text: 'Um com RAM suficiente e uma GPU integrada ou NPU capaz para o seu tamanho de modelo. Veja o guia dos melhores mini PCs para Home Assistant + IA local para escolhas.' } },
        { '@type': 'Question', name: 'Um equipamento ou dois?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC roda o Home Assistant mais um LLM local pequeno juntos. Divida em dois se quiser o hub ultraconfiável em uma Pi e a IA pesada em uma máquina separada.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    affiliateDisclosure: true,
    title: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
    seoTitle: '最佳硬件：本地智能家居 + AI（2026）',
    intro:
      '本地智能家居的最佳硬件取决于你是否还想运行本地 LLM：Raspberry Pi 能应付基础，而如果你想在一台设备上同时运行 Home Assistant 和本地 AI，迷你 PC 是更好的选择。本指南比较 Pi、迷你 PC、NAS 和专用服务器，并帮你在仅-HA 与 HA-加-AI 之间做选择——VRAM 的深入内容走外链。',
    metaDescription:
      '2026年本地智能家居与本地AI的最佳硬件推荐：系统比较Raspberry Pi、迷你PC、NAS和专用服务器的性能与价格区间。仅运行Home Assistant还是同时运行本地大语言模型，两种需求对应完全不同的选购方案，本指南逐一分析。',
    twitterDescription:
      '本地智能家居硬件：Pi 对迷你 PC 对 NAS 对服务器。基础用 Pi，若还想运行本地 LLM 就用迷你 PC。2026 指南。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '为运行 Home Assistant 和本地 AI 选购硬件的人',
    primaryTerm: 'best hardware local smart home',
    targetKeywords: [
      '最佳硬件 home assistant 本地ai',
      'home assistant 硬件',
      '迷你pc home assistant 本地llm',
      'raspberry pi 对 迷你pc home assistant',
      '本地 智能家居 服务器',
    ],
    leadAnswerBlock:
      '**基础用 Raspberry Pi 运行本地智能家居；若你还想在同一台设备上运行本地 LLM、更大的 Whisper 模型或 Frigate，就用迷你 PC。** NAS 或专用服务器适合更大的配置；决定性因素是你是否想要本地 AI。',
    quickAnswerTop: {
      zh: {
        question: '带 AI 的本地智能家居需要什么硬件？',
        answer:
          '仅运行 Home Assistant 的话，一台 Raspberry Pi 就够了。要在同一台设备上运行本地 LLM、更大的 Whisper 模型或 Frigate 摄像头检测，就选一台拥有足够内存和强力集成 GPU 或 NPU 的迷你 PC。NAS 或专用服务器适合更大的多服务配置。',
        bullets: [
          '仅 Home Assistant：一台 Raspberry Pi 就够',
          'HA + 本地 LLM：带强力 iGPU/NPU 的迷你 PC',
          '更多内存和 GPU/NPU 可降低 LLM 延迟',
          'NAS 或服务器：用于更大的多服务配置',
          '先决定：仅-HA 还是 HA + 本地 AI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '中枢需要什么', anchor: 'hub-needs' },
      { label: 'Raspberry Pi', anchor: 'raspberry-pi' },
      { label: '迷你 PC', anchor: 'mini-pc' },
      { label: 'NAS', anchor: 'nas' },
      { label: '专用服务器', anchor: 'server' },
      { label: '仅-HA 对 HA + AI', anchor: 'picking' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Raspberry Pi 可运行本地智能家居中枢；若你还想在同一台设备上运行本地 LLM、更大的 Whisper 或 Frigate，迷你 PC 更好。' },
      { type: 'plain-terms', content: '中枢软件（Home Assistant）很轻量，可在像 Raspberry Pi 这样的小电脑上运行。加入本地 AI——语言模型、更大的语音识别或摄像头检测——需要更多算力，这正是内存更大、显示芯片更强的迷你 PC 派上用场的地方。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '仅 Home Assistant 在 Raspberry Pi 上运行轻松自如',
          '若你还想要本地 LLM、更大的 Whisper 或 Frigate，迷你 PC 是更好的选择',
          '更多内存和强力 iGPU/NPU 可降低本地 AI 的延迟',
          'NAS 可在容器中与存储服务并存地托管 Home Assistant',
          '专用服务器适合更大的本地多服务配置',
          '购买前先决定仅-HA 还是 HA + AI——这会改变合适的设备',
        ],
      },
      hubNeeds: {
        id: 'hub-needs',
        title: '中枢需要什么',
        content:
          '**Home Assistant 本身很轻量，在普通硬件上即可运行；繁重需求来自本地 AI 和摄像头检测。** 按你要添加的内容来选设备，而不仅是中枢本身。',
        items: [
          '中枢在设备控制和自动化上几乎不需要算力。',
          '本地 LLM 推理、更大的 Whisper 和 Frigate 才是吃力的工作负载。',
          '围绕这些附加项来规划内存和 GPU/NPU。',
        ],
      },
      raspberryPi: {
        id: 'raspberry-pi',
        title: 'Raspberry Pi',
        content:
          '**Raspberry Pi 是为典型智能家居用途运行 Home Assistant 的最便宜、最省电的方式。** 它在 LLM 推理和大型 Whisper 模型上吃力。',
        items: [
          '非常适合设备控制、自动化以及小规模本地语音配置。',
          'Pi 上的 LLM 推理仅限非常小且缓慢的模型。',
          '若你想以低成本、低功耗实现基础功能，就选 Pi。示例：Raspberry Pi 5（8GB），或预装成品 Home Assistant Green。',
        ],
        affiliateLinks: [
          { label: 'Raspberry Pi 5（8GB）', url: 'https://www.raspberrypi.com/products/raspberry-pi-5/', productName: 'Raspberry Pi 5', productCategory: 'Single-board computer' },
          { label: 'Home Assistant Green', url: 'https://www.home-assistant.io/green/', productName: 'Home Assistant Green', productCategory: 'Smart home hub' },
        ],
      },
      miniPc: {
        id: 'mini-pc',
        title: '迷你 PC（以及给 LLM 留出空间）',
        content:
          '**迷你 PC 是 Home Assistant 加本地 AI 的最佳单机选择，拥有足够内存以及可运行小型 LLM 的强力 iGPU 或 NPU。** 它在性能、体积和成本之间取得平衡。',
        items: [
          '可同时运行 Home Assistant、经由 Ollama 的小型 LLM、Whisper 和 Frigate。',
          '优先内存和强力集成 GPU 或 NPU 以降低延迟。',
          '具体选择参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)，以及跨集群的[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm)。示例：7B 模型用 Beelink SER8（Ryzen 7 8845HS），低功耗搭建用 Beelink EQ14（Intel N150）。',
        ],
        affiliateLinks: [
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
        ],
      },
      nas: {
        id: 'nas',
        title: 'NAS',
        content:
          '**若 NAS 有足够的 CPU 和内存，它可在容器中与存储及 Frigate 录像并存地托管 Home Assistant。** 如果你已经有一台，会很方便。',
        items: [
          '适合把存储与家庭自动化服务结合在一起。',
          '检查 NAS 是否有足够的 CPU/内存余量来跑你的附加项。',
          'NAS 上的 LLM 推理取决于其硬件——许多缺少强力 GPU。示例：Synology DS925+ 或 DS225+；UGREEN NASync 机型内置本地 LLM 选项。',
        ],
        affiliateLinks: [
          { label: 'Synology DS925+', url: 'https://www.synology.com/en-us/products/DS925+', productName: 'Synology DS925+', productCategory: 'NAS' },
          { label: 'Synology DS225+', url: 'https://www.synology.com/en-us/products/DS225+', productName: 'Synology DS225+', productCategory: 'NAS' },
          { label: 'UGREEN NASync', url: 'https://nas.ugreen.com/pages/ugreen-nasync-series', productName: 'UGREEN NASync', productCategory: 'NAS' },
        ],
      },
      server: {
        id: 'server',
        title: '专用服务器',
        content:
          '**专用服务器适合运行多个服务和更大本地模型的更大配置。** 它以更高的成本和功耗提供最大的余量。',
        items: [
          '最适合大量摄像头、更大的 LLM 和多个用户。',
          '功耗和成本都高于迷你 PC。',
          '对基础智能家居而言过于强大——留给繁重的本地 AI 用途。',
        ],
      },
      picking: {
        id: 'picking',
        title: '为仅-HA 对 HA + AI 选择',
        content:
          '**仅-HA 选 Pi，HA 加本地 AI 选迷你 PC——这一个决定就能确定合适的硬件。** 让设备匹配工作负载。',
        columns: ['硬件', '相对价格', '仅-HA', '能否运行本地 LLM', '备注'],
        rows: [
          { '硬件': 'Raspberry Pi', '相对价格': '低', '仅-HA': '可', '能否运行本地 LLM': '仅非常小，缓慢', '备注': '功耗最低' },
          { '硬件': '迷你 PC', '相对价格': '中', '仅-HA': '可', '能否运行本地 LLM': '可（小型模型）', '备注': 'HA + AI 的最佳单机' },
          { '硬件': 'NAS', '相对价格': '中–高', '仅-HA': '可（容器）', '能否运行本地 LLM': '取决于硬件', '备注': '兼顾存储 + HA' },
          { '硬件': '专用服务器', '相对价格': '高', '仅-HA': '可', '能否运行本地 LLM': '可（更大模型）', '备注': '余量最大，功耗最大' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Raspberry Pi 也能运行本地 LLM 吗？', a: 'Pi 只能运行非常小的模型，而且很慢，因此不适合做响应灵敏的本地 LLM 助手。它能很好地处理 Home Assistant 和基础语音，但对本地 AI 而言，带强力 iGPU 或 NPU 的迷你 PC 是更好的选择。' },
          { q: '我需要多少内存？', a: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM 和其他 AI 服务，更多内存会有帮助；一台内存充裕、带强力 iGPU/NPU 的迷你 PC 能让小型模型保持响应。把内存匹配到你计划运行的模型大小。' },
          { q: '我该买哪台迷你 PC？', a: '选一台内存足够、并为你想要的模型大小配备强力集成 GPU 或 NPU 的迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南，获取匹配 HA 加小型 LLM 的选择。' },
          { q: '一台还是两台？', a: '一台（迷你 PC）最简单，可同时运行 Home Assistant 和一个小型本地 LLM。如果你想让中枢在 Pi 上保持极高可靠性、并把繁重 AI 卸载到另一台更强的机器，就分成两台。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 具体选择',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整堆栈',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — AI 设备运行什么',
          '[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm) — 跨集群：VRAM 与硬件细节',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地智能家居 + 本地 AI 的最佳硬件（2026）',
      description: '2026年本地智能家居与本地AI的最佳硬件推荐：系统比较Raspberry Pi、迷你PC、NAS和专用服务器的性能与价格区间。仅运行Home Assistant还是同时运行本地大语言模型，两种需求对应完全不同的选购方案，本指南逐一分析。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-hardware-for-local-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Home Assistant 硬件' }, { '@type': 'Thing', name: 'Raspberry Pi' }, { '@type': 'Thing', name: '迷你 PC' }, { '@type': 'Thing', name: '本地 LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Raspberry Pi 也能运行本地 LLM 吗？', acceptedAnswer: { '@type': 'Answer', text: 'Pi 只能运行非常小的模型，而且很慢。它能很好地处理 Home Assistant 和基础语音，但对响应灵敏的本地 LLM 助手而言，带强力 iGPU 或 NPU 的迷你 PC 更好。' } },
        { '@type': 'Question', name: '我需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '仅 Home Assistant 用几个 GB 就能运行。要在同一台设备上运行小型本地 LLM，更多内存会有帮助；把内存匹配到你计划运行的模型大小。' } },
        { '@type': 'Question', name: '我该买哪台迷你 PC？', acceptedAnswer: { '@type': 'Answer', text: '选一台内存足够、并为你想要的模型大小配备强力集成 GPU 或 NPU 的迷你 PC。参见 Home Assistant + 本地 AI 的最佳迷你 PC 指南。' } },
        { '@type': 'Question', name: '一台还是两台？', acceptedAnswer: { '@type': 'Answer', text: '一台迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM。若想让中枢在 Pi 上保持极高可靠并把繁重 AI 卸载到另一台机器，就分成两台。' } },
      ],
    },
  },
}
