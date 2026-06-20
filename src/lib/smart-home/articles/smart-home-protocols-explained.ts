import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: Protocols Explained (2026)',
    seoTitle: 'Smart Home Protocols 2026: Matter, Thread, Zigbee, Z-Wave',
    intro:
      'Smart home protocols decide how your devices communicate, how far they reach, and whether they work locally. This plain-English guide explains Zigbee, Z-Wave, Thread, and Matter — their range, power use, interoperability, and which are local by default — so you can choose the right ones for a reliable, private setup.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave explained in plain English: range, power, mesh, interoperability, and which are local by default. Choose the right protocol.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: plain-English guide to range, power, interoperability, and which protocols are local by default.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People choosing smart home devices by protocol',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'matter thread zigbee z-wave difference',
      'smart home protocols explained',
      'zigbee vs z-wave',
      'what is matter smart home',
      'thread protocol smart home',
    ],
    leadAnswerBlock:
      '**Zigbee and Z-Wave are mature low-power mesh protocols, Thread is the modern IP-based low-power mesh, and Matter is the application-layer standard that runs over Thread, Wi-Fi, and Ethernet to unify devices.** Zigbee, Z-Wave, and Thread are local by default; Matter can run locally through a local controller.',
    quickAnswerTop: {
      en: {
        question: 'What is the difference between Matter, Thread, Zigbee, and Z-Wave?',
        answer:
          'Zigbee and Z-Wave are established low-power wireless mesh protocols for sensors and controls. Thread is a newer IP-based low-power mesh. Matter is not a radio but a standard that runs over Thread, Wi-Fi, and Ethernet so devices from different brands work together. Zigbee, Z-Wave, and Thread are local by default.',
        bullets: [
          'Zigbee: 2.4 GHz open mesh, huge device range',
          'Z-Wave: sub-GHz mesh, less interference, long range',
          'Thread: modern IP-based low-power mesh',
          'Matter: a standard over Thread/Wi-Fi/Ethernet, not a radio',
          'Zigbee, Z-Wave, Thread are local by default',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Why Protocols Matter', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (the Unifier)', anchor: 'matter' },
      { label: 'Which to Choose', anchor: 'which-to-choose' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee and Z-Wave are mature low-power mesh radios, Thread is the modern IP-based mesh, and Matter is a standard that runs over them to unify devices.' },
      { type: 'plain-terms', content: 'Protocols are the languages smart home devices speak. Zigbee and Z-Wave are older, reliable wireless meshes. Thread is a newer mesh built on internet standards. Matter is not a radio at all — it is a shared standard that lets devices from different brands work together, and it can run without the cloud.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Zigbee: 2.4 GHz open mesh with the widest device ecosystem; needs a coordinator',
          'Z-Wave: sub-GHz mesh with less interference and good range; mature and reliable',
          'Thread: modern IP-based low-power mesh that underpins much of Matter',
          'Matter: an application-layer standard (not a radio) over Thread, Wi-Fi, and Ethernet',
          'Zigbee, Z-Wave, and Thread are local by default; Matter runs locally via a local controller',
          'Choose by device availability and whether you want sub-GHz range (Z-Wave) or broad choice (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Why Protocols Matter',
        content:
          '**The protocol a device uses determines its range, battery life, reliability, and whether it can work without the cloud.** Picking compatible protocols avoids a drawer of incompatible gadgets.',
        items: [
          '**Reliability:** mesh protocols relay signals between devices, extending coverage.',
          '**Local control:** local protocols work through a hub with no internet — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          '**Compatibility:** a hub that speaks your devices\' protocols ties them together.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee is an open 2.4 GHz low-power mesh protocol with the widest range of affordable devices.** It needs a coordinator (a USB stick or hub) and relays through mains-powered devices.',
        items: [
          'Huge ecosystem of bulbs, sensors, plugs, and switches.',
          'Shares the 2.4 GHz band with Wi-Fi, so placement matters.',
          'Local by default through a Zigbee coordinator on your hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave is a sub-GHz low-power mesh protocol with less interference and good range, known for reliable home-control devices.** It uses a separate frequency band from Wi-Fi and Zigbee.',
        items: [
          'Operates in sub-GHz bands (regional frequencies), avoiding 2.4 GHz congestion.',
          'Strong reputation for reliable locks, sensors, and controls.',
          'Local by default through a Z-Wave controller.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread is a modern IPv6-based low-power mesh that gives each device an IP address and underpins much of Matter.** It needs a Thread border router to connect to your network.',
        items: [
          'IP-based, so it integrates cleanly with modern networks.',
          'Requires a Thread border router (built into some hubs and speakers).',
          'A foundation for Matter devices — see [Matter local control](/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: The Unifier',
        content:
          '**Matter is an application-layer standard — not a radio — that runs over Thread, Wi-Fi, and Ethernet so devices from different brands interoperate.** It can run locally through a local controller, reducing cloud dependence.',
        items: [
          'Matter standardises how devices are described and controlled across brands.',
          'It runs on top of Thread (low-power devices) or Wi-Fi/Ethernet (mains devices).',
          'Local control is possible with a local Matter controller like Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'Which Protocol Should You Choose?',
        content:
          '**Choose Zigbee for the widest affordable device choice, Z-Wave for sub-GHz range and less interference, and Matter-over-Thread for future-proof interoperability.** A hub like Home Assistant can speak all of them.',
        columns: ['Protocol', 'Band / range', 'Power', 'Mesh', 'Local by default', 'Maturity'],
        rows: [
          { 'Protocol': 'Zigbee', 'Band / range': '2.4 GHz, medium', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Mature' },
          { 'Protocol': 'Z-Wave', 'Band / range': 'Sub-GHz, good', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Mature' },
          { 'Protocol': 'Thread', 'Band / range': '2.4 GHz, medium', 'Power': 'Low', 'Mesh': 'Yes', 'Local by default': 'Yes', 'Maturity': 'Growing' },
          { 'Protocol': 'Matter', 'Band / range': 'Over Thread/Wi-Fi', 'Power': 'Varies', 'Mesh': 'Via Thread', 'Local by default': 'With local controller', 'Maturity': 'Growing' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is Matter a protocol or a standard?', a: 'Matter is an application-layer standard, not a radio protocol. It defines how devices are described and controlled and runs on top of transport layers like Thread, Wi-Fi, and Ethernet, which is why it can unify devices from different brands.' },
          { q: 'Do I need Thread?', a: 'Only if you use Thread-based or Matter-over-Thread devices, which need a Thread border router. Many hubs and some speakers include one. Zigbee and Z-Wave devices do not use Thread and need their own coordinator instead.' },
          { q: 'Zigbee vs Z-Wave — which is better?', a: 'Zigbee offers the widest, most affordable device selection on the 2.4 GHz band; Z-Wave uses sub-GHz frequencies with less interference and good range. Choose Zigbee for device choice and Z-Wave for reliability in congested 2.4 GHz environments.' },
          { q: 'Are these protocols local or cloud?', a: 'Zigbee, Z-Wave, and Thread are local by default and work through a hub with no internet. Matter can run locally through a local controller, though some Matter devices may also offer cloud features.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Matter & Local Control](/smart-home/matter-local-control-guide) — using Matter and Thread without cloud bridges',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — a hub that speaks all these protocols',
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — platforms built on these protocols',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first picture',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: Protocols Explained (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave explained in plain English: range, power, mesh, interoperability, and which are local by default. Choose the right protocol.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-protocols-explained',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is Matter a protocol or a standard?', acceptedAnswer: { '@type': 'Answer', text: 'Matter is an application-layer standard, not a radio. It defines how devices are described and controlled and runs over transport layers like Thread, Wi-Fi, and Ethernet.' } },
        { '@type': 'Question', name: 'Do I need Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Only if you use Thread-based or Matter-over-Thread devices, which need a Thread border router. Zigbee and Z-Wave devices do not use Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave — which is better?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee offers the widest affordable device selection on 2.4 GHz; Z-Wave uses sub-GHz with less interference and good range. Choose by device choice vs interference.' } },
        { '@type': 'Question', name: 'Are these protocols local or cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave, and Thread are local by default through a hub. Matter can run locally via a local controller.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter وThread وZigbee وZ-Wave: شرح البروتوكولات (2026)',
    seoTitle: 'Zigbee وZ-Wave وMatter وThread: الدليل 2026',
    intro:
      'تحدد بروتوكولات المنزل الذكي كيفية تواصل أجهزتك ومداها وما إذا كانت تعمل محليًا. يشرح هذا الدليل البسيط بروتوكولات Zigbee وZ-Wave وThread وMatter — مداها واستهلاكها للطاقة وقابلية التشغيل المتبادل وأيها محلي بشكل افتراضي — حتى تتمكن من اختيار المناسب لإعداد موثوق وخاص.',
    metaDescription:
      'Zigbee وZ-Wave محليان افتراضيًا؛ Thread شبكة حديثة مبنية على IP؛ Matter معيار يوحّد الأجهزة عبر Thread وWi-Fi. اختر البروتوكول المناسب.',
    twitterDescription:
      'Zigbee مقابل Z-Wave مقابل Thread مقابل Matter: دليل بسيط للمدى والطاقة والتشغيل المتبادل وأي البروتوكولات محلية بشكل افتراضي.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'الأشخاص الذين يختارون أجهزة المنزل الذكي حسب البروتوكول',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'الفرق بين matter thread zigbee z-wave',
      'شرح بروتوكولات المنزل الذكي',
      'zigbee مقابل z-wave',
      'ما هو matter للمنزل الذكي',
      'بروتوكول thread للمنزل الذكي',
    ],
    leadAnswerBlock:
      '**Zigbee وZ-Wave بروتوكولات شبكية ناضجة منخفضة الطاقة، وThread هو الشبكة الشبكية الحديثة المبنية على IP منخفضة الطاقة، وMatter هو معيار طبقة التطبيقات الذي يعمل عبر Thread وWi-Fi وEthernet لتوحيد الأجهزة.** Zigbee وZ-Wave وThread محلية بشكل افتراضي؛ يمكن تشغيل Matter محليًا من خلال متحكم محلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما الفرق بين Matter وThread وZigbee وZ-Wave؟',
        answer:
          'Zigbee وZ-Wave بروتوكولا شبكة لاسلكية شبكية منخفضة الطاقة راسخان للحساسات وأدوات التحكم. Thread شبكة شبكية حديثة منخفضة الطاقة مبنية على IP. Matter ليس تردد لاسلكي بل معيار يعمل عبر Thread وWi-Fi وEthernet لتمكين التفاهم بين الأجهزة من علامات تجارية مختلفة. Zigbee وZ-Wave وThread محلية بشكل افتراضي.',
        bullets: [
          'Zigbee: شبكة شبكية مفتوحة بـ 2.4 GHz، نطاق أجهزة ضخم',
          'Z-Wave: شبكة شبكية دون GHz، تداخل أقل، مدى جيد',
          'Thread: شبكة شبكية حديثة منخفضة الطاقة مبنية على IP',
          'Matter: معيار عبر Thread/Wi-Fi/Ethernet، وليس تردد لاسلكي',
          'Zigbee وZ-Wave وThread محلية بشكل افتراضي',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'لماذا تهم البروتوكولات', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (الموحِّد)', anchor: 'matter' },
      { label: 'أيها تختار', anchor: 'which-to-choose' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee وZ-Wave ترددات لاسلكية شبكية ناضجة منخفضة الطاقة، وThread الشبكة الشبكية الحديثة المبنية على IP، وMatter معيار يعمل عبرها لتوحيد الأجهزة.' },
      { type: 'plain-terms', content: 'البروتوكولات هي اللغات التي تتحدثها أجهزة المنزل الذكي. Zigbee وZ-Wave شبكات لاسلكية قديمة وموثوقة. Thread شبكة شبكية أحدث مبنية على معايير الإنترنت. Matter ليس تردد لاسلكي على الإطلاق — بل معيار مشترك يجعل الأجهزة من علامات تجارية مختلفة تعمل معًا، ويمكنه العمل دون سحابة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Zigbee: شبكة شبكية مفتوحة بـ 2.4 GHz بأوسع نظام بيئي للأجهزة؛ يحتاج منسقًا',
          'Z-Wave: شبكة شبكية دون GHz بتداخل أقل ومدى جيد؛ ناضجة وموثوقة',
          'Thread: شبكة شبكية حديثة منخفضة الطاقة مبنية على IPv6 تدعم كثيرًا من Matter',
          'Matter: معيار طبقة تطبيق (وليس تردد لاسلكي) عبر Thread وWi-Fi وEthernet',
          'Zigbee وZ-Wave وThread محلية بشكل افتراضي؛ Matter يعمل محليًا عبر متحكم محلي',
          'اختر حسب توفر الأجهزة وما إذا أردت مدى دون GHz (Z-Wave) أو اختيارًا واسعًا (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'لماذا تهم البروتوكولات',
        content:
          '**يحدد البروتوكول الذي يستخدمه الجهاز مداه وعمر البطارية والموثوقية وما إذا كان يعمل دون سحابة.** اختيار بروتوكولات متوافقة يتجنب درجًا مليئًا بأجهزة غير متوافقة.',
        items: [
          '**الموثوقية:** تُمرّر البروتوكولات الشبكية الإشارات بين الأجهزة، مما يمدد التغطية.',
          '**التحكم المحلي:** البروتوكولات المحلية تعمل عبر مركز بلا إنترنت — راجع [الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide).',
          '**التوافق:** المركز الذي يتحدث بروتوكولات أجهزتك يربطها معًا.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee بروتوكول شبكي مفتوح منخفض الطاقة بـ 2.4 GHz يملك أوسع نطاق من الأجهزة الميسورة.** يحتاج منسقًا (عصا USB أو مركز) ويمرر الإشارات عبر الأجهزة المتصلة بالكهرباء.',
        items: [
          'نظام بيئي ضخم من المصابيح والحساسات والقوابس والمفاتيح.',
          'يشترك في نطاق 2.4 GHz مع Wi-Fi، لذا يهم موضع التثبيت.',
          'محلي بشكل افتراضي عبر منسق Zigbee على مركزك.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave بروتوكول شبكي منخفض الطاقة دون GHz بتداخل أقل ومدى جيد، مشهور بأجهزة تحكم منزلية موثوقة.** يستخدم نطاق تردد منفصلًا عن Wi-Fi وZigbee.',
        items: [
          'يعمل في نطاقات دون GHz (ترددات إقليمية)، متجنبًا ازدحام 2.4 GHz.',
          'سمعة قوية في الأقفال والحساسات وأدوات التحكم الموثوقة.',
          'محلي بشكل افتراضي عبر متحكم Z-Wave.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread شبكة شبكية حديثة منخفضة الطاقة مبنية على IPv6 تمنح كل جهاز عنوان IP وتدعم كثيرًا من Matter.** يحتاج موجه حدودي Thread للاتصال بشبكتك.',
        items: [
          'مبني على IP، فيتكامل بسلاسة مع الشبكات الحديثة.',
          'يتطلب موجه حدودي Thread (مدمج في بعض المراكز والسماعات).',
          'أساس لأجهزة Matter — راجع [التحكم المحلي بـ Matter](/ar/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: الموحِّد',
        content:
          '**Matter معيار طبقة تطبيق — وليس تردد لاسلكي — يعمل عبر Thread وWi-Fi وEthernet لتمكين التشغيل المتبادل بين الأجهزة من علامات تجارية مختلفة.** يمكنه العمل محليًا عبر متحكم محلي، مما يُقلل الاعتماد على السحابة.',
        items: [
          'يوحّد Matter كيفية وصف الأجهزة والتحكم فيها عبر العلامات التجارية.',
          'يعمل فوق Thread (للأجهزة منخفضة الطاقة) أو Wi-Fi/Ethernet (للأجهزة المتصلة بالكهرباء).',
          'التحكم المحلي ممكن مع متحكم Matter محلي مثل Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'أي بروتوكول تختار؟',
        content:
          '**اختر Zigbee للأجهزة الميسورة الأوسع، وZ-Wave للمدى دون GHz والتداخل الأقل، وMatter-over-Thread للتشغيل المتبادل مستقبلًا.** مركز مثل Home Assistant يتحدث بها جميعًا.',
        columns: ['البروتوكول', 'النطاق / المدى', 'الطاقة', 'شبكة شبكية', 'محلي بشكل افتراضي', 'النضج'],
        rows: [
          { 'البروتوكول': 'Zigbee', 'النطاق / المدى': '2.4 GHz، متوسط', 'الطاقة': 'منخفضة', 'شبكة شبكية': 'نعم', 'محلي بشكل افتراضي': 'نعم', 'النضج': 'ناضج' },
          { 'البروتوكول': 'Z-Wave', 'النطاق / المدى': 'دون GHz، جيد', 'الطاقة': 'منخفضة', 'شبكة شبكية': 'نعم', 'محلي بشكل افتراضي': 'نعم', 'النضج': 'ناضج' },
          { 'البروتوكول': 'Thread', 'النطاق / المدى': '2.4 GHz، متوسط', 'الطاقة': 'منخفضة', 'شبكة شبكية': 'نعم', 'محلي بشكل افتراضي': 'نعم', 'النضج': 'في نمو' },
          { 'البروتوكول': 'Matter', 'النطاق / المدى': 'عبر Thread/Wi-Fi', 'الطاقة': 'متفاوتة', 'شبكة شبكية': 'عبر Thread', 'محلي بشكل افتراضي': 'مع متحكم محلي', 'النضج': 'في نمو' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Matter بروتوكول أم معيار؟', a: 'Matter معيار طبقة تطبيق، وليس بروتوكول لاسلكي. يحدد كيفية وصف الأجهزة والتحكم فيها ويعمل فوق طبقات النقل مثل Thread وWi-Fi وEthernet، ولهذا يمكنه توحيد الأجهزة من علامات تجارية مختلفة.' },
          { q: 'هل أحتاج إلى Thread؟', a: 'فقط إذا كنت تستخدم أجهزة مبنية على Thread أو Matter-over-Thread، التي تحتاج موجه حدودي Thread. كثير من المراكز وبعض السماعات تتضمنه. أجهزة Zigbee وZ-Wave لا تستخدم Thread وتحتاج منسقها الخاص.' },
          { q: 'Zigbee مقابل Z-Wave — أيهما أفضل؟', a: 'Zigbee يوفر أوسع اختيار للأجهزة الميسورة على نطاق 2.4 GHz؛ Z-Wave يستخدم ترددات دون GHz بتداخل أقل ومدى جيد. اختر Zigbee لتنوع الأجهزة وZ-Wave للموثوقية في بيئات 2.4 GHz المزدحمة.' },
          { q: 'هل هذه البروتوكولات محلية أم سحابية؟', a: 'Zigbee وZ-Wave وThread محلية بشكل افتراضي وتعمل عبر مركز بلا إنترنت. Matter يمكنه العمل محليًا عبر متحكم محلي، وإن كانت بعض أجهزة Matter قد تقدم ميزات سحابية أيضًا.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Matter والتحكم المحلي](/ar/smart-home/matter-local-control-guide) — استخدام Matter وThread بدون جسور سحابية',
          '[Home Assistant: دليل البدء](/ar/smart-home/home-assistant-getting-started) — مركز يتحدث كل هذه البروتوكولات',
          '[مقارنة منظومات المنزل الذكي](/ar/smart-home/smart-home-ecosystems-compared) — المنصات المبنية على هذه البروتوكولات',
          '[الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — الصورة الكاملة للمحلي أولًا',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter وThread وZigbee وZ-Wave: شرح البروتوكولات (2026)',
      description: 'شرح Matter وThread وZigbee وZ-Wave بلغة بسيطة: المدى والطاقة والشبكة الشبكية والتشغيل المتبادل وأيها محلي بشكل افتراضي. اختر البروتوكول المناسب.',
      url: 'https://www.promptquorum.com/ar/smart-home/smart-home-protocols-explained',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل Matter بروتوكول أم معيار؟', acceptedAnswer: { '@type': 'Answer', text: 'Matter معيار طبقة تطبيق، وليس تردد لاسلكي. يحدد كيفية وصف الأجهزة والتحكم فيها ويعمل فوق طبقات النقل مثل Thread وWi-Fi وEthernet.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى Thread؟', acceptedAnswer: { '@type': 'Answer', text: 'فقط إذا كنت تستخدم أجهزة مبنية على Thread أو Matter-over-Thread، التي تحتاج موجه حدودي Thread. أجهزة Zigbee وZ-Wave لا تستخدم Thread.' } },
        { '@type': 'Question', name: 'Zigbee مقابل Z-Wave — أيهما أفضل؟', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee يوفر أوسع اختيار للأجهزة الميسورة على 2.4 GHz؛ Z-Wave يستخدم دون GHz بتداخل أقل ومدى جيد. اختر حسب تنوع الأجهزة مقابل التداخل.' } },
        { '@type': 'Question', name: 'هل هذه البروتوكولات محلية أم سحابية؟', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee وZ-Wave وThread محلية بشكل افتراضي عبر مركز. Matter يمكنه العمل محليًا عبر متحكم محلي.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: Protokolle erklärt (2026)',
    seoTitle: 'Smart-Home-Protokolle 2026: Matter, Thread, Zigbee, Z-Wave',
    intro:
      'Smart-Home-Protokolle bestimmen, wie Ihre Geräte kommunizieren, wie weit sie reichen und ob sie lokal funktionieren. Dieser verständliche Leitfaden erklärt Zigbee, Z-Wave, Thread und Matter – ihre Reichweite, ihren Stromverbrauch, ihre Interoperabilität und welche standardmäßig lokal sind –, damit Sie die richtigen für ein zuverlässiges, privates Setup wählen.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave einfach erklärt: Reichweite, Energieverbrauch, Mesh, Interoperabilität und welche lokal sind. Protokoll richtig wählen.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: verständlicher Leitfaden zu Reichweite, Strom, Interoperabilität und welche Protokolle standardmäßig lokal sind.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Menschen, die Smart-Home-Geräte nach Protokoll wählen',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'matter thread zigbee z-wave unterschied',
      'smart home protokolle erklärt',
      'zigbee vs z-wave',
      'was ist matter smart home',
      'thread protokoll smart home',
    ],
    leadAnswerBlock:
      '**Zigbee und Z-Wave sind ausgereifte stromsparende Mesh-Protokolle, Thread ist das moderne IP-basierte stromsparende Mesh, und Matter ist der Standard auf Anwendungsebene, der über Thread, WLAN und Ethernet läuft, um Geräte zu vereinheitlichen.** Zigbee, Z-Wave und Thread sind standardmäßig lokal; Matter kann über einen lokalen Controller lokal laufen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist der Unterschied zwischen Matter, Thread, Zigbee und Z-Wave?',
        answer:
          'Zigbee und Z-Wave sind etablierte stromsparende drahtlose Mesh-Protokolle für Sensoren und Steuerungen. Thread ist ein neueres IP-basiertes stromsparendes Mesh. Matter ist kein Funk, sondern ein Standard, der über Thread, WLAN und Ethernet läuft, damit Geräte verschiedener Marken zusammenarbeiten. Zigbee, Z-Wave und Thread sind standardmäßig lokal.',
        bullets: [
          'Zigbee: 2.4 GHz offenes Mesh, riesige Geräteauswahl',
          'Z-Wave: Sub-GHz-Mesh, weniger Störungen, gute Reichweite',
          'Thread: modernes IP-basiertes stromsparendes Mesh',
          'Matter: ein Standard über Thread/WLAN/Ethernet, kein Funk',
          'Zigbee, Z-Wave, Thread sind standardmäßig lokal',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Warum Protokolle wichtig sind', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (der Vereinheitlicher)', anchor: 'matter' },
      { label: 'Welches wählen', anchor: 'which-to-choose' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee und Z-Wave sind ausgereifte stromsparende Mesh-Funks, Thread ist das moderne IP-basierte Mesh, und Matter ist ein Standard, der darüber läuft, um Geräte zu vereinheitlichen.' },
      { type: 'plain-terms', content: 'Protokolle sind die Sprachen, die Smart-Home-Geräte sprechen. Zigbee und Z-Wave sind ältere, zuverlässige drahtlose Meshes. Thread ist ein neueres Mesh auf Basis von Internet-Standards. Matter ist überhaupt kein Funk – es ist ein gemeinsamer Standard, der Geräte verschiedener Marken zusammenarbeiten lässt, und kann ohne Cloud laufen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Zigbee: 2.4 GHz offenes Mesh mit der breitesten Geräteauswahl; benötigt einen Koordinator',
          'Z-Wave: Sub-GHz-Mesh mit weniger Störungen und guter Reichweite; ausgereift und zuverlässig',
          'Thread: modernes IP-basiertes stromsparendes Mesh, das viel von Matter trägt',
          'Matter: ein Standard auf Anwendungsebene (kein Funk) über Thread, WLAN und Ethernet',
          'Zigbee, Z-Wave und Thread sind standardmäßig lokal; Matter läuft lokal über einen lokalen Controller',
          'Wählen Sie nach Geräteverfügbarkeit und ob Sie Sub-GHz-Reichweite (Z-Wave) oder breite Auswahl (Zigbee) wollen',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Warum Protokolle wichtig sind',
        content:
          '**Das Protokoll eines Geräts bestimmt seine Reichweite, Akkulaufzeit, Zuverlässigkeit und ob es ohne Cloud funktionieren kann.** Kompatible Protokolle zu wählen vermeidet eine Schublade voller inkompatibler Geräte.',
        items: [
          '**Zuverlässigkeit:** Mesh-Protokolle leiten Signale zwischen Geräten weiter und erweitern die Abdeckung.',
          '**Lokale Steuerung:** Lokale Protokolle funktionieren über einen Hub ohne Internet – siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
          '**Kompatibilität:** Ein Hub, der die Protokolle Ihrer Geräte spricht, verbindet sie miteinander.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee ist ein offenes 2.4-GHz-stromsparendes Mesh-Protokoll mit der breitesten Auswahl an erschwinglichen Geräten.** Es benötigt einen Koordinator (einen USB-Stick oder Hub) und leitet über netzbetriebene Geräte weiter.',
        items: [
          'Riesiges Ökosystem aus Leuchtmitteln, Sensoren, Steckdosen und Schaltern.',
          'Teilt das 2.4-GHz-Band mit WLAN, daher ist die Platzierung wichtig.',
          'Standardmäßig lokal über einen Zigbee-Koordinator an Ihrem Hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave ist ein Sub-GHz-stromsparendes Mesh-Protokoll mit weniger Störungen und guter Reichweite, bekannt für zuverlässige Steuergeräte.** Es nutzt ein anderes Frequenzband als WLAN und Zigbee.',
        items: [
          'Arbeitet in Sub-GHz-Bändern (regionale Frequenzen) und vermeidet die 2.4-GHz-Überlastung.',
          'Starker Ruf für zuverlässige Schlösser, Sensoren und Steuerungen.',
          'Standardmäßig lokal über einen Z-Wave-Controller.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread ist ein modernes IPv6-basiertes stromsparendes Mesh, das jedem Gerät eine IP-Adresse gibt und viel von Matter trägt.** Es benötigt einen Thread-Border-Router, um sich mit Ihrem Netzwerk zu verbinden.',
        items: [
          'IP-basiert, lässt sich daher sauber in moderne Netzwerke integrieren.',
          'Benötigt einen Thread-Border-Router (in manchen Hubs und Lautsprechern eingebaut).',
          'Eine Grundlage für Matter-Geräte – siehe [Matter lokale Steuerung](/de/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: Der Vereinheitlicher',
        content:
          '**Matter ist ein Standard auf Anwendungsebene – kein Funk –, der über Thread, WLAN und Ethernet läuft, damit Geräte verschiedener Marken interoperabel sind.** Es kann über einen lokalen Controller lokal laufen und so die Cloud-Abhängigkeit verringern.',
        items: [
          'Matter standardisiert, wie Geräte markenübergreifend beschrieben und gesteuert werden.',
          'Es läuft auf Thread (stromsparende Geräte) oder WLAN/Ethernet (netzbetriebene Geräte).',
          'Lokale Steuerung ist mit einem lokalen Matter-Controller wie Home Assistant möglich.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'Welches Protokoll sollten Sie wählen?',
        content:
          '**Wählen Sie Zigbee für die breiteste erschwingliche Geräteauswahl, Z-Wave für Sub-GHz-Reichweite und weniger Störungen und Matter-über-Thread für zukunftssichere Interoperabilität.** Ein Hub wie Home Assistant kann sie alle sprechen.',
        columns: ['Protokoll', 'Band / Reichweite', 'Strom', 'Mesh', 'Standardmäßig lokal', 'Reife'],
        rows: [
          { 'Protokoll': 'Zigbee', 'Band / Reichweite': '2.4 GHz, mittel', 'Strom': 'Niedrig', 'Mesh': 'Ja', 'Standardmäßig lokal': 'Ja', 'Reife': 'Ausgereift' },
          { 'Protokoll': 'Z-Wave', 'Band / Reichweite': 'Sub-GHz, gut', 'Strom': 'Niedrig', 'Mesh': 'Ja', 'Standardmäßig lokal': 'Ja', 'Reife': 'Ausgereift' },
          { 'Protokoll': 'Thread', 'Band / Reichweite': '2.4 GHz, mittel', 'Strom': 'Niedrig', 'Mesh': 'Ja', 'Standardmäßig lokal': 'Ja', 'Reife': 'Wachsend' },
          { 'Protokoll': 'Matter', 'Band / Reichweite': 'Über Thread/WLAN', 'Strom': 'Variiert', 'Mesh': 'Über Thread', 'Standardmäßig lokal': 'Mit lokalem Controller', 'Reife': 'Wachsend' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist Matter ein Protokoll oder ein Standard?', a: 'Matter ist ein Standard auf Anwendungsebene, kein Funkprotokoll. Es definiert, wie Geräte beschrieben und gesteuert werden, und läuft auf Transportschichten wie Thread, WLAN und Ethernet – deshalb kann es Geräte verschiedener Marken vereinheitlichen.' },
          { q: 'Brauche ich Thread?', a: 'Nur wenn Sie Thread-basierte oder Matter-über-Thread-Geräte nutzen, die einen Thread-Border-Router benötigen. Viele Hubs und manche Lautsprecher enthalten einen. Zigbee- und Z-Wave-Geräte nutzen kein Thread und brauchen stattdessen ihren eigenen Koordinator.' },
          { q: 'Zigbee vs Z-Wave – was ist besser?', a: 'Zigbee bietet die breiteste, günstigste Geräteauswahl im 2.4-GHz-Band; Z-Wave nutzt Sub-GHz-Frequenzen mit weniger Störungen und guter Reichweite. Wählen Sie Zigbee für die Geräteauswahl und Z-Wave für Zuverlässigkeit in überlasteten 2.4-GHz-Umgebungen.' },
          { q: 'Sind diese Protokolle lokal oder Cloud?', a: 'Zigbee, Z-Wave und Thread sind standardmäßig lokal und funktionieren über einen Hub ohne Internet. Matter kann über einen lokalen Controller lokal laufen, obwohl manche Matter-Geräte auch Cloud-Funktionen bieten können.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Matter & lokale Steuerung](/de/smart-home/matter-local-control-guide) – Matter und Thread ohne Cloud-Bridges nutzen',
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – ein Hub, der all diese Protokolle spricht',
          '[Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared) – Plattformen auf Basis dieser Protokolle',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – das Local-First-Gesamtbild',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: Protokolle erklärt (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave einfach erklärt: Reichweite, Energieverbrauch, Mesh, Interoperabilität und welche lokal sind. Protokoll richtig wählen.',
      url: 'https://www.promptquorum.com/de/smart-home/smart-home-protocols-explained',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist Matter ein Protokoll oder ein Standard?', acceptedAnswer: { '@type': 'Answer', text: 'Matter ist ein Standard auf Anwendungsebene, kein Funk. Es definiert, wie Geräte beschrieben und gesteuert werden, und läuft über Transportschichten wie Thread, WLAN und Ethernet.' } },
        { '@type': 'Question', name: 'Brauche ich Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Nur für Thread-basierte oder Matter-über-Thread-Geräte, die einen Thread-Border-Router benötigen. Zigbee- und Z-Wave-Geräte nutzen kein Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave – was ist besser?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee bietet die breiteste günstige Auswahl im 2.4-GHz-Band; Z-Wave nutzt Sub-GHz mit weniger Störungen und guter Reichweite. Wählen Sie nach Geräteauswahl vs. Störungen.' } },
        { '@type': 'Question', name: 'Sind diese Protokolle lokal oder Cloud?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave und Thread sind standardmäßig lokal über einen Hub. Matter kann über einen lokalen Controller lokal laufen.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: Protocolos Explicados (2026)',
    seoTitle: 'Protocolos Smart Home 2026: Matter, Thread, Zigbee, Z-Wave',
    intro:
      'Los protocolos del smart home deciden cómo se comunican tus dispositivos, hasta dónde llegan y si funcionan localmente. Esta guía en lenguaje claro explica Zigbee, Z-Wave, Thread y Matter —su alcance, consumo, interoperabilidad y cuáles son locales por defecto— para que elijas los adecuados para una configuración fiable y privada.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave en lenguaje claro: alcance, consumo, mesh e interoperabilidad. Cuáles son locales por defecto y cómo elegir.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: guía clara sobre alcance, consumo, interoperabilidad y qué protocolos son locales por defecto.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Personas que eligen dispositivos de smart home por protocolo',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'diferencia matter thread zigbee z-wave',
      'protocolos smart home explicados',
      'zigbee vs z-wave',
      'qué es matter smart home',
      'protocolo thread smart home',
    ],
    leadAnswerBlock:
      '**Zigbee y Z-Wave son protocolos mesh de bajo consumo maduros, Thread es el mesh moderno de bajo consumo basado en IP, y Matter es el estándar de capa de aplicación que corre sobre Thread, Wi-Fi y Ethernet para unificar dispositivos.** Zigbee, Z-Wave y Thread son locales por defecto; Matter puede correr localmente mediante un controlador local.',
    quickAnswerTop: {
      es: {
        question: '¿Cuál es la diferencia entre Matter, Thread, Zigbee y Z-Wave?',
        answer:
          'Zigbee y Z-Wave son protocolos mesh inalámbricos de bajo consumo establecidos para sensores y controles. Thread es un mesh más nuevo de bajo consumo basado en IP. Matter no es una radio sino un estándar que corre sobre Thread, Wi-Fi y Ethernet para que dispositivos de distintas marcas funcionen juntos. Zigbee, Z-Wave y Thread son locales por defecto.',
        bullets: [
          'Zigbee: mesh abierto de 2.4 GHz, enorme gama de dispositivos',
          'Z-Wave: mesh sub-GHz, menos interferencias, buen alcance',
          'Thread: mesh moderno de bajo consumo basado en IP',
          'Matter: un estándar sobre Thread/Wi-Fi/Ethernet, no una radio',
          'Zigbee, Z-Wave, Thread son locales por defecto',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Por qué importan los protocolos', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (el unificador)', anchor: 'matter' },
      { label: 'Cuál elegir', anchor: 'which-to-choose' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee y Z-Wave son radios mesh de bajo consumo maduras, Thread es el mesh moderno basado en IP, y Matter es un estándar que corre sobre ellos para unificar dispositivos.' },
      { type: 'plain-terms', content: 'Los protocolos son los idiomas que hablan los dispositivos del smart home. Zigbee y Z-Wave son mesh inalámbricas más antiguas y fiables. Thread es un mesh más nuevo construido sobre estándares de internet. Matter no es una radio en absoluto: es un estándar común que permite que dispositivos de distintas marcas funcionen juntos, y puede correr sin la nube.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Zigbee: mesh abierto de 2.4 GHz con el ecosistema de dispositivos más amplio; necesita un coordinador',
          'Z-Wave: mesh sub-GHz con menos interferencias y buen alcance; maduro y fiable',
          'Thread: mesh moderno de bajo consumo basado en IP que sustenta buena parte de Matter',
          'Matter: un estándar de capa de aplicación (no una radio) sobre Thread, Wi-Fi y Ethernet',
          'Zigbee, Z-Wave y Thread son locales por defecto; Matter corre localmente mediante un controlador local',
          'Elige por disponibilidad de dispositivos y si quieres alcance sub-GHz (Z-Wave) o amplia variedad (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Por qué importan los protocolos',
        content:
          '**El protocolo que usa un dispositivo determina su alcance, su duración de batería, su fiabilidad y si puede funcionar sin la nube.** Elegir protocolos compatibles evita un cajón de aparatos incompatibles.',
        items: [
          '**Fiabilidad:** los protocolos mesh retransmiten señales entre dispositivos, ampliando la cobertura.',
          '**Control local:** los protocolos locales funcionan mediante un hub sin internet — consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
          '**Compatibilidad:** un hub que habla los protocolos de tus dispositivos los une entre sí.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee es un protocolo mesh abierto de 2.4 GHz y bajo consumo con la mayor variedad de dispositivos asequibles.** Necesita un coordinador (un stick USB o un hub) y retransmite a través de dispositivos con alimentación de red.',
        items: [
          'Enorme ecosistema de bombillas, sensores, enchufes e interruptores.',
          'Comparte la banda de 2.4 GHz con el Wi-Fi, así que la ubicación importa.',
          'Local por defecto mediante un coordinador Zigbee en tu hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave es un protocolo mesh sub-GHz de bajo consumo con menos interferencias y buen alcance, conocido por dispositivos de control fiables.** Usa una banda de frecuencia distinta del Wi-Fi y Zigbee.',
        items: [
          'Opera en bandas sub-GHz (frecuencias regionales), evitando la congestión de 2.4 GHz.',
          'Sólida reputación de cerraduras, sensores y controles fiables.',
          'Local por defecto mediante un controlador Z-Wave.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread es un mesh moderno de bajo consumo basado en IPv6 que da una dirección IP a cada dispositivo y sustenta buena parte de Matter.** Necesita un router de borde Thread para conectarse a tu red.',
        items: [
          'Basado en IP, así que se integra limpiamente con las redes modernas.',
          'Requiere un router de borde Thread (incorporado en algunos hubs y altavoces).',
          'Una base para los dispositivos Matter — consulta [control local con Matter](/es/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: el unificador',
        content:
          '**Matter es un estándar de capa de aplicación —no una radio— que corre sobre Thread, Wi-Fi y Ethernet para que dispositivos de distintas marcas interoperen.** Puede correr localmente mediante un controlador local, reduciendo la dependencia de la nube.',
        items: [
          'Matter estandariza cómo se describen y controlan los dispositivos entre marcas.',
          'Corre sobre Thread (dispositivos de bajo consumo) o Wi-Fi/Ethernet (dispositivos con alimentación de red).',
          'El control local es posible con un controlador Matter local como Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: '¿Qué protocolo deberías elegir?',
        content:
          '**Elige Zigbee por la mayor variedad de dispositivos asequibles, Z-Wave por el alcance sub-GHz y menos interferencias, y Matter-sobre-Thread por una interoperabilidad a prueba de futuro.** Un hub como Home Assistant puede hablarlos todos.',
        columns: ['Protocolo', 'Banda / alcance', 'Consumo', 'Mesh', 'Local por defecto', 'Madurez'],
        rows: [
          { 'Protocolo': 'Zigbee', 'Banda / alcance': '2.4 GHz, medio', 'Consumo': 'Bajo', 'Mesh': 'Sí', 'Local por defecto': 'Sí', 'Madurez': 'Maduro' },
          { 'Protocolo': 'Z-Wave', 'Banda / alcance': 'Sub-GHz, bueno', 'Consumo': 'Bajo', 'Mesh': 'Sí', 'Local por defecto': 'Sí', 'Madurez': 'Maduro' },
          { 'Protocolo': 'Thread', 'Banda / alcance': '2.4 GHz, medio', 'Consumo': 'Bajo', 'Mesh': 'Sí', 'Local por defecto': 'Sí', 'Madurez': 'En crecimiento' },
          { 'Protocolo': 'Matter', 'Banda / alcance': 'Sobre Thread/Wi-Fi', 'Consumo': 'Variable', 'Mesh': 'Vía Thread', 'Local por defecto': 'Con controlador local', 'Madurez': 'En crecimiento' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Matter es un protocolo o un estándar?', a: 'Matter es un estándar de capa de aplicación, no una radio. Define cómo se describen y controlan los dispositivos y corre sobre capas de transporte como Thread, Wi-Fi y Ethernet, por eso puede unificar dispositivos de distintas marcas.' },
          { q: '¿Necesito Thread?', a: 'Solo si usas dispositivos basados en Thread o Matter-sobre-Thread, que necesitan un router de borde Thread. Muchos hubs y algunos altavoces incluyen uno. Los dispositivos Zigbee y Z-Wave no usan Thread y en su lugar necesitan su propio coordinador.' },
          { q: 'Zigbee vs Z-Wave, ¿cuál es mejor?', a: 'Zigbee ofrece la mayor variedad de dispositivos asequibles en la banda de 2.4 GHz; Z-Wave usa frecuencias sub-GHz con menos interferencias y buen alcance. Elige Zigbee por variedad de dispositivos y Z-Wave por fiabilidad en entornos de 2.4 GHz congestionados.' },
          { q: '¿Estos protocolos son locales o nube?', a: 'Zigbee, Z-Wave y Thread son locales por defecto y funcionan mediante un hub sin internet. Matter puede correr localmente mediante un controlador local, aunque algunos dispositivos Matter también pueden ofrecer funciones en la nube.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Matter y control local](/es/smart-home/matter-local-control-guide) — usar Matter y Thread sin puentes en la nube',
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — un hub que habla todos estos protocolos',
          '[Ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared) — plataformas basadas en estos protocolos',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — la imagen local-first',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: Protocolos Explicados (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave en lenguaje claro: alcance, consumo, mesh e interoperabilidad. Cuáles son locales por defecto y cómo elegir.',
      url: 'https://www.promptquorum.com/es/smart-home/smart-home-protocols-explained',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Matter es un protocolo o un estándar?', acceptedAnswer: { '@type': 'Answer', text: 'Matter es un estándar de capa de aplicación, no una radio. Define cómo se describen y controlan los dispositivos y corre sobre capas de transporte como Thread, Wi-Fi y Ethernet.' } },
        { '@type': 'Question', name: '¿Necesito Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Solo si usas dispositivos basados en Thread o Matter-sobre-Thread, que necesitan un router de borde Thread. Los dispositivos Zigbee y Z-Wave no usan Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave, ¿cuál es mejor?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee ofrece la mayor variedad asequible en 2.4 GHz; Z-Wave usa sub-GHz con menos interferencias y buen alcance. Elige según variedad de dispositivos o interferencias.' } },
        { '@type': 'Question', name: '¿Estos protocolos son locales o nube?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave y Thread son locales por defecto mediante un hub. Matter puede correr localmente mediante un controlador local.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: 프로토콜 설명 (2026)',
    seoTitle: '스마트홈 프로토콜 2026: Matter, Thread, Zigbee, Z-Wave',
    intro:
      '스마트홈 프로토콜은 기기 간 통신 방식, 도달 범위, 로컬 작동 여부를 결정합니다. 이 가이드는 Zigbee, Z-Wave, Thread, Matter의 범위·전력 소비·상호 운용성, 그리고 기본적으로 로컬인 프로토콜을 알기 쉽게 설명합니다. 신뢰할 수 있는 프라이빗 설정을 위한 올바른 선택을 돕습니다.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave 알기 쉬운 설명: 범위, 전력, 메시, 상호 운용성, 기본 로컬 여부. 올바른 프로토콜 선택 방법.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: 범위, 전력, 상호 운용성, 기본 로컬 프로토콜에 관한 알기 쉬운 가이드.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '프로토콜 기준으로 스마트홈 기기를 선택하는 사람',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'Matter Thread Zigbee Z-Wave 차이',
      '스마트홈 프로토콜 설명',
      'Zigbee vs Z-Wave',
      'Matter 스마트홈이란',
      'Thread 프로토콜 스마트홈',
    ],
    leadAnswerBlock:
      '**Zigbee와 Z-Wave는 성숙한 저전력 메시 프로토콜이고, Thread는 현대적인 IP 기반 저전력 메시이며, Matter는 Thread·Wi-Fi·Ethernet 위에서 실행되어 기기를 통합하는 애플리케이션 계층 표준입니다.** Zigbee, Z-Wave, Thread는 기본적으로 로컬이며 Matter는 로컬 컨트롤러를 통해 로컬로 실행될 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Matter, Thread, Zigbee, Z-Wave의 차이는 무엇입니까?',
        answer:
          'Zigbee와 Z-Wave는 센서 및 제어 장치를 위한 검증된 저전력 무선 메시 프로토콜입니다. Thread는 IP 기반의 최신 저전력 메시입니다. Matter는 무선 방식이 아니라 Thread·Wi-Fi·Ethernet 위에서 실행되어 서로 다른 브랜드의 기기가 함께 작동하도록 하는 표준입니다. Zigbee, Z-Wave, Thread는 기본적으로 로컬입니다.',
        bullets: [
          'Zigbee: 2.4 GHz 개방형 메시, 방대한 기기 선택지',
          'Z-Wave: 서브 GHz 메시, 간섭 적음, 긴 범위',
          'Thread: 현대적인 IP 기반 저전력 메시',
          'Matter: Thread/Wi-Fi/Ethernet 위의 표준, 무선 방식 아님',
          'Zigbee, Z-Wave, Thread는 기본적으로 로컬',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '프로토콜이 중요한 이유', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (통합자)', anchor: 'matter' },
      { label: '선택 기준', anchor: 'which-to-choose' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee와 Z-Wave는 성숙한 저전력 메시 무선 방식이고, Thread는 현대적인 IP 기반 메시이며, Matter는 그 위에서 실행되어 기기를 통합하는 표준입니다.' },
      { type: 'plain-terms', content: '프로토콜은 스마트홈 기기가 사용하는 언어입니다. Zigbee와 Z-Wave는 오래되고 신뢰할 수 있는 무선 메시입니다. Thread는 인터넷 표준을 기반으로 한 최신 메시입니다. Matter는 무선 방식이 전혀 아닙니다. 서로 다른 브랜드 기기가 함께 작동하도록 하는 공통 표준이며 클라우드 없이 실행될 수 있습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Zigbee: 가장 넓은 기기 생태계를 가진 2.4 GHz 개방형 메시, 코디네이터 필요',
          'Z-Wave: 간섭 적고 범위 좋은 서브 GHz 메시, 성숙하고 신뢰할 수 있음',
          'Thread: Matter의 많은 부분을 지탱하는 현대적인 IP 기반 저전력 메시',
          'Matter: Thread, Wi-Fi, Ethernet 위의 애플리케이션 계층 표준(무선 방식 아님)',
          'Zigbee, Z-Wave, Thread는 기본적으로 로컬; Matter는 로컬 컨트롤러를 통해 로컬로 실행',
          '기기 가용성, 서브 GHz 범위(Z-Wave) 또는 폭넓은 선택지(Zigbee) 중 원하는 것에 따라 선택',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: '프로토콜이 중요한 이유',
        content:
          '**기기가 사용하는 프로토콜은 범위, 배터리 수명, 신뢰성, 클라우드 없이 작동 가능 여부를 결정합니다.** 호환 프로토콜을 선택하면 호환되지 않는 기기로 가득 찬 서랍을 피할 수 있습니다.',
        items: [
          '**신뢰성:** 메시 프로토콜은 기기 간 신호를 중계하여 커버리지를 확장합니다.',
          '**로컬 제어:** 로컬 프로토콜은 인터넷 없이 허브를 통해 작동합니다 — [완전한 로컬 스마트홈 가이드](/ko/smart-home/local-smart-home-complete-guide)를 참조하십시오.',
          '**호환성:** 기기의 프로토콜을 지원하는 허브가 기기를 연결합니다.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee는 가장 넓은 범위의 저가 기기를 가진 개방형 2.4 GHz 저전력 메시 프로토콜입니다.** 코디네이터(USB 스틱 또는 허브)가 필요하며 유선 전원 기기를 통해 중계합니다.',
        items: [
          '전구, 센서, 플러그, 스위치의 방대한 생태계를 보유합니다.',
          'Wi-Fi와 2.4 GHz 대역을 공유하므로 배치 위치가 중요합니다.',
          '허브의 Zigbee 코디네이터를 통해 기본적으로 로컬입니다.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave는 간섭이 적고 범위가 좋은 서브 GHz 저전력 메시 프로토콜로, 신뢰할 수 있는 홈 컨트롤 기기로 유명합니다.** Wi-Fi 및 Zigbee와 다른 주파수 대역을 사용합니다.',
        items: [
          '서브 GHz 대역(지역별 주파수)에서 작동하여 2.4 GHz 혼잡을 피합니다.',
          '신뢰할 수 있는 잠금장치, 센서, 제어 장치로 강한 명성을 가집니다.',
          'Z-Wave 컨트롤러를 통해 기본적으로 로컬입니다.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread는 각 기기에 IP 주소를 부여하고 Matter의 많은 부분을 지탱하는 현대적인 IPv6 기반 저전력 메시입니다.** 네트워크에 연결하려면 Thread 보더 라우터가 필요합니다.',
        items: [
          'IP 기반이므로 현대 네트워크와 깔끔하게 통합됩니다.',
          'Thread 보더 라우터가 필요합니다(일부 허브와 스피커에 내장).',
          'Matter 기기의 기반입니다 — [Matter 로컬 제어](/ko/smart-home/matter-local-control-guide)를 참조하십시오.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: 통합자',
        content:
          '**Matter는 무선 방식이 아닌 애플리케이션 계층 표준으로, Thread·Wi-Fi·Ethernet 위에서 실행되어 서로 다른 브랜드 기기가 상호 운용되도록 합니다.** 로컬 컨트롤러를 통해 로컬로 실행될 수 있어 클라우드 의존도를 줄입니다.',
        items: [
          'Matter는 브랜드 전반에서 기기를 설명하고 제어하는 방식을 표준화합니다.',
          'Thread(저전력 기기) 또는 Wi-Fi/Ethernet(유선 전원 기기) 위에서 실행됩니다.',
          'Home Assistant와 같은 로컬 Matter 컨트롤러로 로컬 제어가 가능합니다.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: '어떤 프로토콜을 선택해야 합니까?',
        content:
          '**가장 넓은 저가 기기 선택지를 원하면 Zigbee, 서브 GHz 범위와 적은 간섭을 원하면 Z-Wave, 미래 지향적 상호 운용성을 원하면 Matter-over-Thread를 선택하십시오.** Home Assistant 같은 허브는 이 모두를 지원합니다.',
        columns: ['프로토콜', '대역/범위', '전력', '메시', '기본 로컬', '성숙도'],
        rows: [
          { '프로토콜': 'Zigbee', '대역/범위': '2.4 GHz, 중간', '전력': '낮음', '메시': '예', '기본 로컬': '예', '성숙도': '성숙' },
          { '프로토콜': 'Z-Wave', '대역/범위': '서브 GHz, 양호', '전력': '낮음', '메시': '예', '기본 로컬': '예', '성숙도': '성숙' },
          { '프로토콜': 'Thread', '대역/범위': '2.4 GHz, 중간', '전력': '낮음', '메시': '예', '기본 로컬': '예', '성숙도': '성장 중' },
          { '프로토콜': 'Matter', '대역/범위': 'Thread/Wi-Fi 위', '전력': '다양', '메시': 'Thread 경유', '기본 로컬': '로컬 컨트롤러 필요', '성숙도': '성장 중' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Matter는 프로토콜입니까, 표준입니까?', a: 'Matter는 무선 프로토콜이 아닌 애플리케이션 계층 표준입니다. 기기를 설명하고 제어하는 방식을 정의하며 Thread·Wi-Fi·Ethernet 같은 전송 계층 위에서 실행됩니다. 그렇기 때문에 서로 다른 브랜드의 기기를 통합할 수 있습니다.' },
          { q: 'Thread가 필요합니까?', a: 'Thread 보더 라우터가 필요한 Thread 기반 또는 Matter-over-Thread 기기를 사용할 경우에만 필요합니다. 많은 허브와 일부 스피커에 내장되어 있습니다. Zigbee 및 Z-Wave 기기는 Thread를 사용하지 않으며 별도의 코디네이터가 필요합니다.' },
          { q: 'Zigbee vs Z-Wave — 어느 것이 더 낫습니까?', a: 'Zigbee는 2.4 GHz 대역에서 가장 넓고 저렴한 기기 선택지를 제공합니다. Z-Wave는 간섭이 적고 범위가 좋은 서브 GHz 주파수를 사용합니다. 기기 선택지를 위해서는 Zigbee를, 2.4 GHz 혼잡 환경에서의 신뢰성을 위해서는 Z-Wave를 선택하십시오.' },
          { q: '이 프로토콜들은 로컬입니까, 클라우드입니까?', a: 'Zigbee, Z-Wave, Thread는 기본적으로 로컬이며 인터넷 없이 허브를 통해 작동합니다. Matter는 로컬 컨트롤러를 통해 로컬로 실행될 수 있지만 일부 Matter 기기는 클라우드 기능도 제공할 수 있습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Matter와 로컬 제어](/ko/smart-home/matter-local-control-guide) — 클라우드 브리지 없이 Matter와 Thread 사용하기',
          '[Home Assistant: 시작하기 가이드](/ko/smart-home/home-assistant-getting-started) — 이 모든 프로토콜을 지원하는 허브',
          '[스마트홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared) — 이 프로토콜을 기반으로 하는 플랫폼',
          '[완전한 로컬 스마트홈 가이드](/ko/smart-home/local-smart-home-complete-guide) — 로컬 우선 전체 그림',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: 프로토콜 설명 (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave 알기 쉬운 설명: 범위, 전력, 메시, 상호 운용성, 기본 로컬 여부. 올바른 프로토콜 선택 방법.',
      url: 'https://www.promptquorum.com/ko/smart-home/smart-home-protocols-explained',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Matter는 프로토콜입니까, 표준입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Matter는 무선 방식이 아닌 애플리케이션 계층 표준입니다. 기기 설명 및 제어 방식을 정의하며 Thread·Wi-Fi·Ethernet 같은 전송 계층 위에서 실행됩니다.' } },
        { '@type': 'Question', name: 'Thread가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Thread 기반 또는 Matter-over-Thread 기기를 사용할 경우에만 필요합니다. Zigbee 및 Z-Wave 기기는 Thread를 사용하지 않습니다.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave — 어느 것이 더 낫습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee는 2.4 GHz에서 가장 넓고 저렴한 기기 선택지를 제공합니다. Z-Wave는 간섭이 적고 범위가 좋은 서브 GHz를 사용합니다. 기기 선택지 대 간섭 회피 중 원하는 것에 따라 선택하십시오.' } },
        { '@type': 'Question', name: '이 프로토콜들은 로컬입니까, 클라우드입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave, Thread는 기본적으로 허브를 통해 로컬입니다. Matter는 로컬 컨트롤러를 통해 로컬로 실행될 수 있습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave : Protocoles Expliqués (2026)',
    seoTitle: 'Protocoles de la Maison Connectée Expliqués (2026)',
    intro:
      'Les protocoles de la maison connectée déterminent comment vos appareils communiquent, jusqu\'où ils portent et s\'ils fonctionnent localement. Ce guide en langage clair explique Zigbee, Z-Wave, Thread et Matter — leur portée, leur consommation, leur interopérabilité et lesquels sont locaux par défaut — pour que vous choisissiez les bons pour une installation fiable et privée.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave en langage clair : portée, consommation, mesh, interopérabilité et lesquels sont locaux par défaut. Choisissez le bon.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter : guide clair sur la portée, la consommation, l\'interopérabilité et quels protocoles sont locaux par défaut.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Personnes choisissant des appareils de maison connectée par protocole',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'différence matter thread zigbee z-wave',
      'protocoles maison connectée expliqués',
      'zigbee vs z-wave',
      'qu\'est-ce que matter maison connectée',
      'protocole thread maison connectée',
    ],
    leadAnswerBlock:
      '**Zigbee et Z-Wave sont des protocoles mesh basse consommation matures, Thread est le mesh moderne basse consommation basé sur IP, et Matter est le standard de couche application qui tourne sur Thread, Wi-Fi et Ethernet pour unifier les appareils.** Zigbee, Z-Wave et Thread sont locaux par défaut ; Matter peut tourner localement via un contrôleur local.',
    quickAnswerTop: {
      fr: {
        question: 'Quelle est la différence entre Matter, Thread, Zigbee et Z-Wave ?',
        answer:
          'Zigbee et Z-Wave sont des protocoles mesh sans fil basse consommation établis pour les capteurs et les commandes. Thread est un mesh plus récent basse consommation basé sur IP. Matter n\'est pas une radio mais un standard qui tourne sur Thread, Wi-Fi et Ethernet pour que des appareils de marques différentes fonctionnent ensemble. Zigbee, Z-Wave et Thread sont locaux par défaut.',
        bullets: [
          'Zigbee : mesh ouvert 2.4 GHz, énorme gamme d\'appareils',
          'Z-Wave : mesh sub-GHz, moins d\'interférences, bonne portée',
          'Thread : mesh moderne basse consommation basé sur IP',
          'Matter : un standard sur Thread/Wi-Fi/Ethernet, pas une radio',
          'Zigbee, Z-Wave, Thread sont locaux par défaut',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Pourquoi les protocoles comptent', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (l\'unificateur)', anchor: 'matter' },
      { label: 'Lequel choisir', anchor: 'which-to-choose' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee et Z-Wave sont des radios mesh basse consommation matures, Thread est le mesh moderne basé sur IP, et Matter est un standard qui tourne par-dessus pour unifier les appareils.' },
      { type: 'plain-terms', content: 'Les protocoles sont les langages que parlent les appareils de la maison connectée. Zigbee et Z-Wave sont des meshes sans fil plus anciens et fiables. Thread est un mesh plus récent bâti sur des standards internet. Matter n\'est pas du tout une radio — c\'est un standard commun qui permet à des appareils de marques différentes de fonctionner ensemble, et il peut tourner sans le cloud.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Zigbee : mesh ouvert 2.4 GHz avec l\'écosystème d\'appareils le plus large ; nécessite un coordinateur',
          'Z-Wave : mesh sub-GHz avec moins d\'interférences et bonne portée ; mature et fiable',
          'Thread : mesh moderne basse consommation basé sur IP qui sous-tend une grande partie de Matter',
          'Matter : un standard de couche application (pas une radio) sur Thread, Wi-Fi et Ethernet',
          'Zigbee, Z-Wave et Thread sont locaux par défaut ; Matter tourne localement via un contrôleur local',
          'Choisissez selon la disponibilité des appareils et si vous voulez la portée sub-GHz (Z-Wave) ou un large choix (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Pourquoi les protocoles comptent',
        content:
          '**Le protocole d\'un appareil détermine sa portée, son autonomie, sa fiabilité et s\'il peut fonctionner sans le cloud.** Choisir des protocoles compatibles évite un tiroir d\'appareils incompatibles.',
        items: [
          '**Fiabilité :** les protocoles mesh relaient les signaux entre appareils, étendant la couverture.',
          '**Contrôle local :** les protocoles locaux fonctionnent via un hub sans internet — voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
          '**Compatibilité :** un hub qui parle les protocoles de vos appareils les relie entre eux.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee est un protocole mesh ouvert 2.4 GHz basse consommation avec la plus large gamme d\'appareils abordables.** Il nécessite un coordinateur (une clé USB ou un hub) et relaie via les appareils alimentés sur secteur.',
        items: [
          'Énorme écosystème d\'ampoules, capteurs, prises et interrupteurs.',
          'Partage la bande 2.4 GHz avec le Wi-Fi, le placement compte donc.',
          'Local par défaut via un coordinateur Zigbee sur votre hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave est un protocole mesh sub-GHz basse consommation avec moins d\'interférences et une bonne portée, réputé pour ses appareils de commande fiables.** Il utilise une bande de fréquence différente du Wi-Fi et de Zigbee.',
        items: [
          'Opère dans des bandes sub-GHz (fréquences régionales), évitant la congestion 2.4 GHz.',
          'Solide réputation de serrures, capteurs et commandes fiables.',
          'Local par défaut via un contrôleur Z-Wave.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread est un mesh moderne basse consommation basé sur IPv6 qui donne une adresse IP à chaque appareil et sous-tend une grande partie de Matter.** Il nécessite un routeur de bordure Thread pour se connecter à votre réseau.',
        items: [
          'Basé sur IP, il s\'intègre proprement aux réseaux modernes.',
          'Nécessite un routeur de bordure Thread (intégré à certains hubs et enceintes).',
          'Une base pour les appareils Matter — voir [contrôle local avec Matter](/fr/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter : l\'unificateur',
        content:
          '**Matter est un standard de couche application — pas une radio — qui tourne sur Thread, Wi-Fi et Ethernet pour que des appareils de marques différentes interopèrent.** Il peut tourner localement via un contrôleur local, réduisant la dépendance au cloud.',
        items: [
          'Matter standardise la façon dont les appareils sont décrits et commandés entre marques.',
          'Il tourne sur Thread (appareils basse consommation) ou Wi-Fi/Ethernet (appareils sur secteur).',
          'Le contrôle local est possible avec un contrôleur Matter local comme Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'Quel protocole choisir ?',
        content:
          '**Choisissez Zigbee pour le plus large choix d\'appareils abordables, Z-Wave pour la portée sub-GHz et moins d\'interférences, et Matter-sur-Thread pour une interopérabilité pérenne.** Un hub comme Home Assistant peut tous les parler.',
        columns: ['Protocole', 'Bande / portée', 'Consommation', 'Mesh', 'Local par défaut', 'Maturité'],
        rows: [
          { 'Protocole': 'Zigbee', 'Bande / portée': '2.4 GHz, moyenne', 'Consommation': 'Faible', 'Mesh': 'Oui', 'Local par défaut': 'Oui', 'Maturité': 'Mature' },
          { 'Protocole': 'Z-Wave', 'Bande / portée': 'Sub-GHz, bonne', 'Consommation': 'Faible', 'Mesh': 'Oui', 'Local par défaut': 'Oui', 'Maturité': 'Mature' },
          { 'Protocole': 'Thread', 'Bande / portée': '2.4 GHz, moyenne', 'Consommation': 'Faible', 'Mesh': 'Oui', 'Local par défaut': 'Oui', 'Maturité': 'En croissance' },
          { 'Protocole': 'Matter', 'Bande / portée': 'Sur Thread/Wi-Fi', 'Consommation': 'Variable', 'Mesh': 'Via Thread', 'Local par défaut': 'Avec contrôleur local', 'Maturité': 'En croissance' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Matter est-il un protocole ou un standard ?', a: 'Matter est un standard de couche application, pas une radio. Il définit comment les appareils sont décrits et commandés et tourne sur des couches de transport comme Thread, Wi-Fi et Ethernet — c\'est pourquoi il peut unifier des appareils de marques différentes.' },
          { q: 'Ai-je besoin de Thread ?', a: 'Seulement si vous utilisez des appareils basés sur Thread ou Matter-sur-Thread, qui nécessitent un routeur de bordure Thread. De nombreux hubs et certaines enceintes en intègrent un. Les appareils Zigbee et Z-Wave n\'utilisent pas Thread et nécessitent plutôt leur propre coordinateur.' },
          { q: 'Zigbee vs Z-Wave, lequel est meilleur ?', a: 'Zigbee offre le plus large choix d\'appareils abordables sur la bande 2.4 GHz ; Z-Wave utilise des fréquences sub-GHz avec moins d\'interférences et une bonne portée. Choisissez Zigbee pour le choix d\'appareils et Z-Wave pour la fiabilité dans des environnements 2.4 GHz encombrés.' },
          { q: 'Ces protocoles sont-ils locaux ou cloud ?', a: 'Zigbee, Z-Wave et Thread sont locaux par défaut et fonctionnent via un hub sans internet. Matter peut tourner localement via un contrôleur local, même si certains appareils Matter peuvent aussi offrir des fonctions cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Matter & contrôle local](/fr/smart-home/matter-local-control-guide) — utiliser Matter et Thread sans ponts cloud',
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — un hub qui parle tous ces protocoles',
          '[Écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared) — plateformes bâties sur ces protocoles',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — la vue d\'ensemble local-first',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave : Protocoles Expliqués (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave en langage clair : portée, consommation, mesh, interopérabilité et lesquels sont locaux par défaut. Choisissez le bon.',
      url: 'https://www.promptquorum.com/fr/smart-home/smart-home-protocols-explained',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Matter est-il un protocole ou un standard ?', acceptedAnswer: { '@type': 'Answer', text: 'Matter est un standard de couche application, pas une radio. Il définit comment les appareils sont décrits et commandés et tourne sur des couches de transport comme Thread, Wi-Fi et Ethernet.' } },
        { '@type': 'Question', name: 'Ai-je besoin de Thread ?', acceptedAnswer: { '@type': 'Answer', text: 'Seulement pour les appareils basés sur Thread ou Matter-sur-Thread, qui nécessitent un routeur de bordure Thread. Les appareils Zigbee et Z-Wave n\'utilisent pas Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave, lequel est meilleur ?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee offre le plus large choix abordable sur 2.4 GHz ; Z-Wave utilise le sub-GHz avec moins d\'interférences et une bonne portée. Choisissez selon le choix d\'appareils ou les interférences.' } },
        { '@type': 'Question', name: 'Ces protocoles sont-ils locaux ou cloud ?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave et Thread sont locaux par défaut via un hub. Matter peut tourner localement via un contrôleur local.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter・Thread・Zigbee・Z-Wave：プロトコル解説（2026）',
    seoTitle: 'スマートホームプロトコル完全解説（2026年版）：メッシュ・ローカル・互換性',
    intro:
      'スマートホームのプロトコルは、機器がどう通信し、どこまで届き、ローカルで動くかを決めます。本ガイドは分かりやすく Zigbee、Z-Wave、Thread、Matter を解説します——到達距離、消費電力、相互運用性、どれが標準でローカルか——信頼でき、プライベートな構成のために正しいものを選べます。',
    metaDescription:
      'スマートホームの四大無線規格を徹底解説：Zigbeeの広いデバイス生態系、Z-Waveの長距離通信、ThreadのIPメッシュ、そしてMatterのブランド統合まで。通信範囲・消費電力・相互運用・ローカル動作の違いを2026年版で比較。',
    twitterDescription:
      'Zigbee 対 Z-Wave 対 Thread 対 Matter：到達距離、消費電力、相互運用、どのプロトコルが標準でローカルかを分かりやすく解説。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プロトコルでスマートホーム機器を選ぶ人',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'matter thread zigbee z-wave 違い',
      'スマートホーム プロトコル 解説',
      'zigbee 対 z-wave',
      'matter とは スマートホーム',
      'thread プロトコル スマートホーム',
    ],
    leadAnswerBlock:
      '**Zigbee と Z-Wave は成熟した低消費電力のメッシュプロトコル、Thread は現代的な IP ベースの低消費電力メッシュ、Matter は機器を統一するために Thread・Wi-Fi・Ethernet 上で動くアプリケーション層の規格です。** Zigbee・Z-Wave・Thread は標準でローカル；Matter はローカルコントローラー経由でローカル動作できます。',
    quickAnswerTop: {
      ja: {
        question: 'Matter・Thread・Zigbee・Z-Wave の違いは何ですか？',
        answer:
          'Zigbee と Z-Wave は、センサーや制御向けに確立した低消費電力の無線メッシュプロトコルです。Thread はより新しい IP ベースの低消費電力メッシュです。Matter は無線ではなく、Thread・Wi-Fi・Ethernet 上で動き、異なるブランドの機器を協調させる規格です。Zigbee・Z-Wave・Thread は標準でローカルです。',
        bullets: [
          'Zigbee：2.4 GHz のオープンなメッシュ、膨大な機器対応',
          'Z-Wave：サブ GHz メッシュ、干渉が少なく到達距離が良い',
          'Thread：現代的な IP ベースの低消費電力メッシュ',
          'Matter：Thread/Wi-Fi/Ethernet 上の規格であって無線ではない',
          'Zigbee・Z-Wave・Thread は標準でローカル',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'プロトコルが重要な理由', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter（統一役）', anchor: 'matter' },
      { label: 'どれを選ぶか', anchor: 'which-to-choose' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee と Z-Wave は成熟した低消費電力メッシュ無線、Thread は現代的な IP ベースのメッシュ、Matter はその上で動いて機器を統一する規格です。' },
      { type: 'plain-terms', content: 'プロトコルはスマートホーム機器が話す言語です。Zigbee と Z-Wave は古くからの信頼できる無線メッシュ。Thread はインターネット標準の上に作られた新しいメッシュ。Matter は無線ではなく、異なるブランドの機器を協調させる共通規格で、クラウドなしで動作できます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Zigbee：最も広い機器エコシステムを持つ 2.4 GHz のオープンなメッシュ；コーディネーターが必要',
          'Z-Wave：干渉が少なく到達距離が良いサブ GHz メッシュ；成熟して信頼できる',
          'Thread：Matter の多くを支える現代的な IP ベースの低消費電力メッシュ',
          'Matter：Thread・Wi-Fi・Ethernet 上のアプリケーション層規格（無線ではない）',
          'Zigbee・Z-Wave・Thread は標準でローカル；Matter はローカルコントローラー経由でローカル動作',
          '機器の入手性と、サブ GHz の到達距離（Z-Wave）か幅広い選択肢（Zigbee）かで選ぶ',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'プロトコルが重要な理由',
        content:
          '**機器が使うプロトコルは、その到達距離、電池寿命、信頼性、そしてクラウドなしで動けるかを決めます。** 互換性のあるプロトコルを選べば、非互換のガジェットでいっぱいの引き出しを避けられます。',
        items: [
          '**信頼性：** メッシュプロトコルは機器間で信号を中継し、カバー範囲を広げます。',
          '**ローカル制御：** ローカルプロトコルはインターネットなしにハブ経由で動作します——[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
          '**互換性：** あなたの機器のプロトコルを話すハブが、それらをまとめます。',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee は、手頃な機器の選択肢が最も広い、オープンな 2.4 GHz 低消費電力メッシュプロトコルです。** コーディネーター（USB スティックまたはハブ）が必要で、電源接続機器を介して中継します。',
        items: [
          '電球、センサー、プラグ、スイッチの巨大なエコシステム。',
          '2.4 GHz 帯を Wi-Fi と共有するため、設置場所が重要。',
          'ハブ上の Zigbee コーディネーター経由で標準でローカル。',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave は、干渉が少なく到達距離が良いサブ GHz の低消費電力メッシュプロトコルで、信頼できる制御機器で知られています。** Wi-Fi や Zigbee とは別の周波数帯を使います。',
        items: [
          'サブ GHz 帯（地域ごとの周波数）で動作し、2.4 GHz の混雑を避けます。',
          '信頼できるロック、センサー、制御機器としての確かな評価。',
          'Z-Wave コントローラー経由で標準でローカル。',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread は、各機器に IP アドレスを与え、Matter の多くを支える現代的な IPv6 ベースの低消費電力メッシュです。** ネットワークに接続するには Thread ボーダールーターが必要です。',
        items: [
          'IP ベースなので、現代のネットワークときれいに統合できます。',
          'Thread ボーダールーターが必要（一部のハブやスピーカーに内蔵）。',
          'Matter 機器の基盤——[Matter のローカル制御](/ja/smart-home/matter-local-control-guide)を参照。',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter：統一役',
        content:
          '**Matter は無線ではなくアプリケーション層の規格で、Thread・Wi-Fi・Ethernet 上で動き、異なるブランドの機器を相互運用させます。** ローカルコントローラー経由でローカル動作でき、クラウド依存を減らせます。',
        items: [
          'Matter は、機器の記述と制御の仕方をブランド横断で標準化します。',
          'Thread（低消費電力機器）または Wi-Fi/Ethernet（電源接続機器）上で動きます。',
          'Home Assistant のようなローカル Matter コントローラーでローカル制御が可能です。',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'どのプロトコルを選ぶべきか',
        content:
          '**手頃な機器の選択肢が最も広いなら Zigbee、サブ GHz の到達距離と少ない干渉なら Z-Wave、将来を見据えた相互運用なら Matter-over-Thread を選びましょう。** Home Assistant のようなハブはこれらすべてを話せます。',
        columns: ['プロトコル', '帯域 / 到達距離', '消費電力', 'メッシュ', '標準でローカル', '成熟度'],
        rows: [
          { 'プロトコル': 'Zigbee', '帯域 / 到達距離': '2.4 GHz、中程度', '消費電力': '低い', 'メッシュ': 'あり', '標準でローカル': 'はい', '成熟度': '成熟' },
          { 'プロトコル': 'Z-Wave', '帯域 / 到達距離': 'サブ GHz、良好', '消費電力': '低い', 'メッシュ': 'あり', '標準でローカル': 'はい', '成熟度': '成熟' },
          { 'プロトコル': 'Thread', '帯域 / 到達距離': '2.4 GHz、中程度', '消費電力': '低い', 'メッシュ': 'あり', '標準でローカル': 'はい', '成熟度': '拡大中' },
          { 'プロトコル': 'Matter', '帯域 / 到達距離': 'Thread/Wi-Fi 上', '消費電力': '可変', 'メッシュ': 'Thread 経由', '標準でローカル': 'ローカルコントローラーで', '成熟度': '拡大中' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Matter はプロトコルですか、規格ですか？', a: 'Matter はアプリケーション層の規格であって、無線プロトコルではありません。機器の記述と制御の仕方を定義し、Thread・Wi-Fi・Ethernet のような搬送層の上で動きます。だからこそ異なるブランドの機器を統一できます。' },
          { q: 'Thread は必要ですか？', a: 'Thread ボーダールーターを必要とする Thread ベースまたは Matter-over-Thread 機器を使う場合だけです。多くのハブや一部のスピーカーに内蔵されています。Zigbee と Z-Wave の機器は Thread を使わず、代わりに専用のコーディネーターが必要です。' },
          { q: 'Zigbee と Z-Wave、どちらが良いですか？', a: 'Zigbee は 2.4 GHz 帯で最も広く手頃な機器を提供します；Z-Wave はサブ GHz の周波数を使い、干渉が少なく到達距離が良好です。機器の選択肢なら Zigbee、混雑した 2.4 GHz 環境での信頼性なら Z-Wave を選びましょう。' },
          { q: 'これらのプロトコルはローカルですか、クラウドですか？', a: 'Zigbee・Z-Wave・Thread は標準でローカルで、インターネットなしにハブ経由で動きます。Matter はローカルコントローラー経由でローカル動作できますが、一部の Matter 機器はクラウド機能も提供する場合があります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Matter とローカル制御](/ja/smart-home/matter-local-control-guide) — クラウドブリッジなしで Matter と Thread を使う',
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — これらすべてのプロトコルを話すハブ',
          '[スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared) — これらのプロトコル上のプラットフォーム',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルファーストの全体像',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter・Thread・Zigbee・Z-Wave：プロトコル解説（2026）',
      description: 'スマートホームの四大無線規格を徹底解説：Zigbeeの広いデバイス生態系、Z-Waveの長距離通信、ThreadのIPメッシュ、そしてMatterのブランド統合まで。通信範囲・消費電力・相互運用・ローカル動作の違いを2026年版で比較。',
      url: 'https://www.promptquorum.com/ja/smart-home/smart-home-protocols-explained',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Matter はプロトコルですか、規格ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Matter はアプリケーション層の規格であって無線ではありません。機器の記述と制御を定義し、Thread・Wi-Fi・Ethernet のような搬送層の上で動きます。' } },
        { '@type': 'Question', name: 'Thread は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Thread ボーダールーターを必要とする Thread ベースまたは Matter-over-Thread 機器を使う場合だけです。Zigbee と Z-Wave の機器は Thread を使いません。' } },
        { '@type': 'Question', name: 'Zigbee と Z-Wave、どちらが良いですか？', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee は 2.4 GHz 帯で最も広く手頃な選択肢を提供；Z-Wave はサブ GHz で干渉が少なく到達距離が良好です。選択肢か干渉かで選びましょう。' } },
        { '@type': 'Question', name: 'これらのプロトコルはローカルですか、クラウドですか？', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee・Z-Wave・Thread は標準でハブ経由のローカル。Matter はローカルコントローラー経由でローカル動作できます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter, Thread, Zigbee, Z-Wave: Protocolos Explicados (2026)',
    seoTitle: 'Protocolos da Casa Inteligente 2026: Matter, Thread, Zigbee',
    intro:
      'Os protocolos da casa inteligente decidem como seus dispositivos se comunicam, até onde alcançam e se funcionam localmente. Este guia em linguagem clara explica Zigbee, Z-Wave, Thread e Matter — seu alcance, consumo, interoperabilidade e quais são locais por padrão — para que você escolha os certos para uma configuração confiável e privada.',
    metaDescription:
      'Matter, Thread, Zigbee, Z-Wave em linguagem clara: alcance, consumo, mesh, interoperabilidade e quais são locais por padrão. Escolha o certo.',
    twitterDescription:
      'Zigbee vs Z-Wave vs Thread vs Matter: guia claro sobre alcance, consumo, interoperabilidade e quais protocolos são locais por padrão.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Pessoas escolhendo dispositivos de casa inteligente por protocolo',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'diferença matter thread zigbee z-wave',
      'protocolos casa inteligente explicados',
      'zigbee vs z-wave',
      'o que é matter casa inteligente',
      'protocolo thread casa inteligente',
    ],
    leadAnswerBlock:
      '**Zigbee e Z-Wave são protocolos mesh de baixo consumo maduros, Thread é o mesh moderno de baixo consumo baseado em IP, e Matter é o padrão de camada de aplicação que roda sobre Thread, Wi-Fi e Ethernet para unificar dispositivos.** Zigbee, Z-Wave e Thread são locais por padrão; o Matter pode rodar localmente por meio de um controlador local.',
    quickAnswerTop: {
      pt: {
        question: 'Qual a diferença entre Matter, Thread, Zigbee e Z-Wave?',
        answer:
          'Zigbee e Z-Wave são protocolos mesh sem fio de baixo consumo estabelecidos para sensores e controles. Thread é um mesh mais novo de baixo consumo baseado em IP. O Matter não é um rádio, mas um padrão que roda sobre Thread, Wi-Fi e Ethernet para que dispositivos de marcas diferentes funcionem juntos. Zigbee, Z-Wave e Thread são locais por padrão.',
        bullets: [
          'Zigbee: mesh aberto de 2.4 GHz, enorme variedade de dispositivos',
          'Z-Wave: mesh sub-GHz, menos interferência, bom alcance',
          'Thread: mesh moderno de baixo consumo baseado em IP',
          'Matter: um padrão sobre Thread/Wi-Fi/Ethernet, não um rádio',
          'Zigbee, Z-Wave, Thread são locais por padrão',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Por que os protocolos importam', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter (o unificador)', anchor: 'matter' },
      { label: 'Qual escolher', anchor: 'which-to-choose' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee e Z-Wave são rádios mesh de baixo consumo maduros, Thread é o mesh moderno baseado em IP, e o Matter é um padrão que roda sobre eles para unificar dispositivos.' },
      { type: 'plain-terms', content: 'Protocolos são os idiomas que os dispositivos da casa inteligente falam. Zigbee e Z-Wave são meshes sem fio mais antigos e confiáveis. Thread é um mesh mais novo construído sobre padrões da internet. O Matter não é um rádio: é um padrão comum que permite que dispositivos de marcas diferentes funcionem juntos, e pode rodar sem a nuvem.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Zigbee: mesh aberto de 2.4 GHz com o ecossistema de dispositivos mais amplo; precisa de um coordenador',
          'Z-Wave: mesh sub-GHz com menos interferência e bom alcance; maduro e confiável',
          'Thread: mesh moderno de baixo consumo baseado em IP que sustenta boa parte do Matter',
          'Matter: um padrão de camada de aplicação (não um rádio) sobre Thread, Wi-Fi e Ethernet',
          'Zigbee, Z-Wave e Thread são locais por padrão; o Matter roda localmente por meio de um controlador local',
          'Escolha pela disponibilidade de dispositivos e se você quer alcance sub-GHz (Z-Wave) ou ampla variedade (Zigbee)',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: 'Por que os protocolos importam',
        content:
          '**O protocolo que um dispositivo usa determina seu alcance, sua duração de bateria, sua confiabilidade e se ele pode funcionar sem a nuvem.** Escolher protocolos compatíveis evita uma gaveta cheia de aparelhos incompatíveis.',
        items: [
          '**Confiabilidade:** protocolos mesh retransmitem sinais entre dispositivos, ampliando a cobertura.',
          '**Controle local:** protocolos locais funcionam por meio de um hub sem internet — veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
          '**Compatibilidade:** um hub que fala os protocolos dos seus dispositivos os une.',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**O Zigbee é um protocolo mesh aberto de 2.4 GHz e baixo consumo com a maior variedade de dispositivos acessíveis.** Precisa de um coordenador (um pen drive USB ou hub) e retransmite por meio de dispositivos ligados à tomada.',
        items: [
          'Enorme ecossistema de lâmpadas, sensores, tomadas e interruptores.',
          'Compartilha a faixa de 2.4 GHz com o Wi-Fi, então o posicionamento importa.',
          'Local por padrão por meio de um coordenador Zigbee no seu hub.',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**O Z-Wave é um protocolo mesh sub-GHz de baixo consumo com menos interferência e bom alcance, conhecido por dispositivos de controle confiáveis.** Usa uma faixa de frequência diferente do Wi-Fi e do Zigbee.',
        items: [
          'Opera em faixas sub-GHz (frequências regionais), evitando o congestionamento de 2.4 GHz.',
          'Forte reputação de fechaduras, sensores e controles confiáveis.',
          'Local por padrão por meio de um controlador Z-Wave.',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**O Thread é um mesh moderno de baixo consumo baseado em IPv6 que dá um endereço IP a cada dispositivo e sustenta boa parte do Matter.** Precisa de um roteador de borda Thread para se conectar à sua rede.',
        items: [
          'Baseado em IP, então se integra de forma limpa às redes modernas.',
          'Requer um roteador de borda Thread (embutido em alguns hubs e caixas de som).',
          'Uma base para os dispositivos Matter — veja [controle local com Matter](/pt/smart-home/matter-local-control-guide).',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter: o unificador',
        content:
          '**O Matter é um padrão de camada de aplicação — não um rádio — que roda sobre Thread, Wi-Fi e Ethernet para que dispositivos de marcas diferentes interoperem.** Pode rodar localmente por meio de um controlador local, reduzindo a dependência da nuvem.',
        items: [
          'O Matter padroniza como os dispositivos são descritos e controlados entre marcas.',
          'Roda sobre Thread (dispositivos de baixo consumo) ou Wi-Fi/Ethernet (dispositivos ligados à tomada).',
          'O controle local é possível com um controlador Matter local como o Home Assistant.',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: 'Qual protocolo você deve escolher?',
        content:
          '**Escolha o Zigbee pela maior variedade de dispositivos acessíveis, o Z-Wave pelo alcance sub-GHz e menos interferência, e o Matter-sobre-Thread por interoperabilidade à prova de futuro.** Um hub como o Home Assistant pode falar todos eles.',
        columns: ['Protocolo', 'Faixa / alcance', 'Consumo', 'Mesh', 'Local por padrão', 'Maturidade'],
        rows: [
          { 'Protocolo': 'Zigbee', 'Faixa / alcance': '2.4 GHz, médio', 'Consumo': 'Baixo', 'Mesh': 'Sim', 'Local por padrão': 'Sim', 'Maturidade': 'Maduro' },
          { 'Protocolo': 'Z-Wave', 'Faixa / alcance': 'Sub-GHz, bom', 'Consumo': 'Baixo', 'Mesh': 'Sim', 'Local por padrão': 'Sim', 'Maturidade': 'Maduro' },
          { 'Protocolo': 'Thread', 'Faixa / alcance': '2.4 GHz, médio', 'Consumo': 'Baixo', 'Mesh': 'Sim', 'Local por padrão': 'Sim', 'Maturidade': 'Em crescimento' },
          { 'Protocolo': 'Matter', 'Faixa / alcance': 'Sobre Thread/Wi-Fi', 'Consumo': 'Variável', 'Mesh': 'Via Thread', 'Local por padrão': 'Com controlador local', 'Maturidade': 'Em crescimento' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O Matter é um protocolo ou um padrão?', a: 'O Matter é um padrão de camada de aplicação, não um rádio. Ele define como os dispositivos são descritos e controlados e roda sobre camadas de transporte como Thread, Wi-Fi e Ethernet — por isso pode unificar dispositivos de marcas diferentes.' },
          { q: 'Preciso de Thread?', a: 'Apenas se você usa dispositivos baseados em Thread ou Matter-sobre-Thread, que precisam de um roteador de borda Thread. Muitos hubs e algumas caixas de som incluem um. Dispositivos Zigbee e Z-Wave não usam Thread e, em vez disso, precisam do próprio coordenador.' },
          { q: 'Zigbee vs Z-Wave, qual é melhor?', a: 'O Zigbee oferece a maior variedade de dispositivos acessíveis na faixa de 2.4 GHz; o Z-Wave usa frequências sub-GHz com menos interferência e bom alcance. Escolha o Zigbee pela variedade de dispositivos e o Z-Wave pela confiabilidade em ambientes de 2.4 GHz congestionados.' },
          { q: 'Esses protocolos são locais ou nuvem?', a: 'Zigbee, Z-Wave e Thread são locais por padrão e funcionam por meio de um hub sem internet. O Matter pode rodar localmente por meio de um controlador local, embora alguns dispositivos Matter também possam oferecer recursos na nuvem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Matter e controle local](/pt/smart-home/matter-local-control-guide) — usar Matter e Thread sem pontes na nuvem',
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — um hub que fala todos esses protocolos',
          '[Ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared) — plataformas baseadas nesses protocolos',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o panorama local-first',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter, Thread, Zigbee, Z-Wave: Protocolos Explicados (2026)',
      description: 'Matter, Thread, Zigbee, Z-Wave em linguagem clara: alcance, consumo, mesh, interoperabilidade e quais são locais por padrão. Escolha o certo.',
      url: 'https://www.promptquorum.com/pt/smart-home/smart-home-protocols-explained',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O Matter é um protocolo ou um padrão?', acceptedAnswer: { '@type': 'Answer', text: 'O Matter é um padrão de camada de aplicação, não um rádio. Define como os dispositivos são descritos e controlados e roda sobre camadas de transporte como Thread, Wi-Fi e Ethernet.' } },
        { '@type': 'Question', name: 'Preciso de Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Apenas para dispositivos baseados em Thread ou Matter-sobre-Thread, que precisam de um roteador de borda Thread. Dispositivos Zigbee e Z-Wave não usam Thread.' } },
        { '@type': 'Question', name: 'Zigbee vs Z-Wave, qual é melhor?', acceptedAnswer: { '@type': 'Answer', text: 'O Zigbee oferece a maior variedade acessível em 2.4 GHz; o Z-Wave usa sub-GHz com menos interferência e bom alcance. Escolha pela variedade de dispositivos ou pela interferência.' } },
        { '@type': 'Question', name: 'Esses protocolos são locais ou nuvem?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave e Thread são locais por padrão por meio de um hub. O Matter pode rodar localmente por meio de um controlador local.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Matter、Thread、Zigbee、Z-Wave：协议详解（2026）',
    seoTitle: '智能家居通信协议深度解析2026：网状、本地控制与协议互操作全面对比',
    intro:
      '智能家居协议决定你的设备如何通信、能传多远，以及是否本地工作。本指南用通俗语言讲解 Zigbee、Z-Wave、Thread 和 Matter——它们的覆盖范围、功耗、互操作性，以及哪些默认本地——帮助你为可靠且私密的配置选对协议。',
    metaDescription:
      '通俗讲解四大智能家居无线协议的关键区别：Zigbee拥有最广泛的设备生态系统，Z-Wave工作在抗干扰的亚吉赫兹频段，Thread采用低功耗IP网状组网，Matter是实现跨品牌互通的应用层标准。2026版指南助你选对协议。',
    twitterDescription:
      'Zigbee 对 Z-Wave 对 Thread 对 Matter：用通俗语言讲解覆盖范围、功耗、互操作，以及哪些协议默认本地。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '按协议选购智能家居设备的人',
    primaryTerm: 'smart home protocols',
    targetKeywords: [
      'matter thread zigbee z-wave 区别',
      '智能家居协议 详解',
      'zigbee 对 z-wave',
      'matter 是什么 智能家居',
      'thread 协议 智能家居',
    ],
    leadAnswerBlock:
      '**Zigbee 和 Z-Wave 是成熟的低功耗网状协议，Thread 是现代基于 IP 的低功耗网状，Matter 是运行在 Thread、Wi-Fi 和以太网之上、用于统一设备的应用层标准。** Zigbee、Z-Wave、Thread 默认本地；Matter 可经由本地控制器本地运行。',
    quickAnswerTop: {
      zh: {
        question: 'Matter、Thread、Zigbee 和 Z-Wave 有什么区别？',
        answer:
          'Zigbee 和 Z-Wave 是面向传感器和控制的成熟低功耗无线网状协议。Thread 是较新的基于 IP 的低功耗网状。Matter 不是无线电，而是运行在 Thread、Wi-Fi 和以太网之上、让不同品牌设备协同工作的标准。Zigbee、Z-Wave 和 Thread 默认本地。',
        bullets: [
          'Zigbee：2.4 GHz 开放网状，设备种类极广',
          'Z-Wave：亚 GHz 网状，干扰更少，覆盖更好',
          'Thread：现代基于 IP 的低功耗网状',
          'Matter：运行在 Thread/Wi-Fi/以太网之上的标准，并非无线电',
          'Zigbee、Z-Wave、Thread 默认本地',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '协议为何重要', anchor: 'why-protocols' },
      { label: 'Zigbee', anchor: 'zigbee' },
      { label: 'Z-Wave', anchor: 'z-wave' },
      { label: 'Thread', anchor: 'thread' },
      { label: 'Matter（统一者）', anchor: 'matter' },
      { label: '该选哪个', anchor: 'which-to-choose' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Zigbee 和 Z-Wave 是成熟的低功耗网状无线电，Thread 是现代基于 IP 的网状，Matter 是运行在它们之上、用于统一设备的标准。' },
      { type: 'plain-terms', content: '协议是智能家居设备所说的“语言”。Zigbee 和 Z-Wave 是较老且可靠的无线网状。Thread 是建立在互联网标准之上的较新网状。Matter 根本不是无线电——它是一个共同标准，让不同品牌的设备协同工作，并且可以不依赖云端运行。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Zigbee：拥有最广设备生态的 2.4 GHz 开放网状；需要一个协调器',
          'Z-Wave：干扰更少、覆盖更好的亚 GHz 网状；成熟可靠',
          'Thread：支撑 Matter 很大一部分的现代基于 IP 的低功耗网状',
          'Matter：运行在 Thread、Wi-Fi 和以太网之上的应用层标准（并非无线电）',
          'Zigbee、Z-Wave、Thread 默认本地；Matter 经由本地控制器本地运行',
          '按设备可得性，以及你想要亚 GHz 覆盖（Z-Wave）还是广泛选择（Zigbee）来选',
        ],
      },
      whyProtocols: {
        id: 'why-protocols',
        title: '协议为何重要',
        content:
          '**设备所用的协议决定其覆盖范围、电池寿命、可靠性，以及能否在没有云端的情况下工作。** 选择兼容的协议，可以避免一抽屉互不兼容的设备。',
        items: [
          '**可靠性：** 网状协议在设备之间中继信号，扩大覆盖。',
          '**本地控制：** 本地协议经由中枢在无网络时工作——参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
          '**兼容性：** 能说你设备协议的中枢，会把它们连到一起。',
        ],
      },
      zigbee: {
        id: 'zigbee',
        title: 'Zigbee',
        content:
          '**Zigbee 是一种开放的 2.4 GHz 低功耗网状协议，拥有最广泛的实惠设备选择。** 它需要一个协调器（USB 接收器或中枢），并通过市电供电设备中继。',
        items: [
          '由灯泡、传感器、插座和开关组成的庞大生态。',
          '与 Wi-Fi 共享 2.4 GHz 频段，因此摆放位置很重要。',
          '经由中枢上的 Zigbee 协调器默认本地。',
        ],
      },
      zwave: {
        id: 'z-wave',
        title: 'Z-Wave',
        content:
          '**Z-Wave 是一种亚 GHz 低功耗网状协议，干扰更少、覆盖更好，以可靠的控制设备著称。** 它使用与 Wi-Fi 和 Zigbee 不同的频段。',
        items: [
          '工作在亚 GHz 频段（各地区频率），避开 2.4 GHz 拥堵。',
          '在可靠门锁、传感器和控制设备方面口碑扎实。',
          '经由 Z-Wave 控制器默认本地。',
        ],
      },
      thread: {
        id: 'thread',
        title: 'Thread',
        content:
          '**Thread 是一种现代基于 IPv6 的低功耗网状，为每个设备分配 IP 地址，并支撑 Matter 的很大一部分。** 它需要一个 Thread 边界路由器来接入你的网络。',
        items: [
          '基于 IP，因此能与现代网络干净地整合。',
          '需要 Thread 边界路由器（内置于部分中枢和音箱）。',
          'Matter 设备的基础——参见[Matter 本地控制](/zh/smart-home/matter-local-control-guide)。',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter：统一者',
        content:
          '**Matter 是一个应用层标准——并非无线电——运行在 Thread、Wi-Fi 和以太网之上，让不同品牌的设备互操作。** 它可经由本地控制器本地运行，降低云端依赖。',
        items: [
          'Matter 统一了跨品牌描述与控制设备的方式。',
          '它运行在 Thread（低功耗设备）或 Wi-Fi/以太网（市电供电设备）之上。',
          '借助像 Home Assistant 这样的本地 Matter 控制器即可实现本地控制。',
        ],
      },
      whichToChoose: {
        id: 'which-to-choose',
        title: '你该选择哪个协议？',
        content:
          '**要最广泛的实惠设备选择就选 Zigbee，要亚 GHz 覆盖与更少干扰就选 Z-Wave，要面向未来的互操作就选 Matter-over-Thread。** 像 Home Assistant 这样的中枢能把它们全都说清。',
        columns: ['协议', '频段 / 覆盖', '功耗', '网状', '默认本地', '成熟度'],
        rows: [
          { '协议': 'Zigbee', '频段 / 覆盖': '2.4 GHz，中等', '功耗': '低', '网状': '是', '默认本地': '是', '成熟度': '成熟' },
          { '协议': 'Z-Wave', '频段 / 覆盖': '亚 GHz，良好', '功耗': '低', '网状': '是', '默认本地': '是', '成熟度': '成熟' },
          { '协议': 'Thread', '频段 / 覆盖': '2.4 GHz，中等', '功耗': '低', '网状': '是', '默认本地': '是', '成熟度': '增长中' },
          { '协议': 'Matter', '频段 / 覆盖': '基于 Thread/Wi-Fi', '功耗': '不定', '网状': '经由 Thread', '默认本地': '配本地控制器', '成熟度': '增长中' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Matter 是协议还是标准？', a: 'Matter 是应用层标准，不是无线电协议。它定义设备如何被描述与控制，并运行在 Thread、Wi-Fi、以太网等传输层之上——这正是它能统一不同品牌设备的原因。' },
          { q: '我需要 Thread 吗？', a: '只有当你使用需要 Thread 边界路由器的 Thread 设备或 Matter-over-Thread 设备时才需要。许多中枢和部分音箱内置了它。Zigbee 和 Z-Wave 设备不使用 Thread，而是需要各自的协调器。' },
          { q: 'Zigbee 与 Z-Wave 哪个更好？', a: 'Zigbee 在 2.4 GHz 频段提供最广泛、最实惠的设备选择；Z-Wave 使用亚 GHz 频率，干扰更少、覆盖更好。要设备选择就选 Zigbee，要在拥堵的 2.4 GHz 环境中保持可靠就选 Z-Wave。' },
          { q: '这些协议是本地还是云端？', a: 'Zigbee、Z-Wave 和 Thread 默认本地，经由中枢在无网络时工作。Matter 可经由本地控制器本地运行，尽管某些 Matter 设备也可能提供云端功能。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Matter 与本地控制](/zh/smart-home/matter-local-control-guide) — 在不经云端网桥的情况下使用 Matter 和 Thread',
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 能说所有这些协议的中枢',
          '[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared) — 建立在这些协议之上的平台',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地优先全貌',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter、Thread、Zigbee、Z-Wave：协议详解（2026）',
      description: '通俗讲解四大智能家居无线协议的关键区别：Zigbee拥有最广泛的设备生态系统，Z-Wave工作在抗干扰的亚吉赫兹频段，Thread采用低功耗IP网状组网，Matter是实现跨品牌互通的应用层标准。2026版指南助你选对协议。',
      url: 'https://www.promptquorum.com/zh/smart-home/smart-home-protocols-explained',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Zigbee' }, { '@type': 'Thing', name: 'Z-Wave' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Matter 是协议还是标准？', acceptedAnswer: { '@type': 'Answer', text: 'Matter 是应用层标准，不是无线电。它定义设备如何被描述与控制，并运行在 Thread、Wi-Fi、以太网等传输层之上。' } },
        { '@type': 'Question', name: '我需要 Thread 吗？', acceptedAnswer: { '@type': 'Answer', text: '只有当你使用需要 Thread 边界路由器的 Thread 设备或 Matter-over-Thread 设备时才需要。Zigbee 和 Z-Wave 设备不使用 Thread。' } },
        { '@type': 'Question', name: 'Zigbee 与 Z-Wave 哪个更好？', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee 在 2.4 GHz 提供最广泛实惠的选择；Z-Wave 使用亚 GHz，干扰更少、覆盖更好。按设备选择或干扰情况来选。' } },
        { '@type': 'Question', name: '这些协议是本地还是云端？', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee、Z-Wave 和 Thread 默认经由中枢本地。Matter 可经由本地控制器本地运行。' } },
      ],
    },
  },
}
