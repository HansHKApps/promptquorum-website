import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Smart Home History: From X10 to Local AI (2026)',
    seoTitle: 'Smart Home Technology History: X10 to Local AI (2026)',
    intro:
      'Smart home technology evolved from 1970s X10 powerline control through Z-Wave and Zigbee, the cloud era of Nest and Echo, the Matter unifying standard, and now a swing back toward local control with on-device AI. This guide traces that arc and explains why the pendulum is moving away from cloud dependence toward local autonomy.',
    metaDescription:
      'Smart home history from X10 (1975) to local AI: Z-Wave, Zigbee, the cloud era of Nest and Echo, Matter, and the 2026 swing back to local control.',
    twitterDescription:
      'From X10 in 1975 to local AI in 2026: how smart home tech evolved through Z-Wave, Zigbee, the cloud era, Matter, and back toward local control.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Readers wanting context on how smart home tech developed',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'history of smart home technology',
      'smart home history',
      'x10 home automation history',
      'evolution of smart home',
      'when did smart homes start',
    ],
    leadAnswerBlock:
      '**Smart home technology began with X10 powerline control in 1975, moved to wireless mesh protocols (Z-Wave in 2001, Zigbee in the mid-2000s), entered a cloud era with Nest (2011) and Amazon Echo (2014), gained the Matter standard in 2022, and is now swinging back toward local control with on-device AI.** The arc is a pendulum from local, to cloud, and back to local.',
    quickAnswerTop: {
      en: {
        question: 'How did smart home technology evolve?',
        answer:
          'Smart home tech started with X10 powerline signalling in 1975, moved to wireless mesh protocols like Z-Wave and Zigbee in the 2000s, then entered a cloud-connected era led by Nest and Amazon Echo in the 2010s. Matter arrived in 2022 to unify devices, and the current shift is back toward local control with on-device AI.',
        bullets: [
          'X10 (1975): first mainstream home automation, over powerlines',
          'Z-Wave (2001) and Zigbee (mid-2000s): wireless mesh',
          'Cloud era: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): a unifying interoperability standard',
          '2026: a swing back to local control plus on-device AI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Wired Era', anchor: 'wired-era' },
      { label: 'Wireless Protocols', anchor: 'wireless' },
      { label: 'The Cloud Era', anchor: 'cloud-era' },
      { label: 'Matter and Interoperability', anchor: 'matter' },
      { label: 'The Swing Back to Local', anchor: 'swing-back' },
      { label: "What's Next", anchor: 'whats-next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Smart home tech went from X10 powerline control in 1975, through wireless mesh and a cloud era, to Matter and a swing back to local AI control.' },
      { type: 'plain-terms', content: 'Home automation is older than most people think — it started in the 1970s with signals sent over house wiring. Over decades it went wireless, then moved into company clouds, and now it is moving back to running on hardware in your own home, with AI that runs locally too.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'X10 (1975) was the first mainstream home-automation system, sending signals over powerlines',
          'Z-Wave (2001) and Zigbee (mid-2000s) brought low-power wireless mesh networking',
          'The cloud era arrived with Nest (2011) and Amazon Echo and Apple HomeKit (2014)',
          'Matter (2022) added a cross-vendor interoperability standard',
          'In 2026 the trend is swinging back to local control with on-device AI',
          'The pattern is a pendulum: local control, to cloud dependence, and back to local',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'The Wired Era: X10 and Insteon',
        content:
          '**Home automation began in 1975 with X10, which sent control signals over a home\'s existing electrical wiring.** It was local by necessity — there was no cloud — but limited and prone to interference.',
        items: [
          '**X10 (1975):** developed by Pico Electronics, it let switches and modules communicate over powerlines.',
          '**Insteon:** later combined powerline and wireless signalling to improve reliability.',
          '**Local by default:** everything ran in the home, foreshadowing today\'s local-first revival.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'Wireless Protocols: Z-Wave and Zigbee',
        content:
          '**Z-Wave (2001) and Zigbee (mid-2000s) introduced low-power wireless mesh networks built for battery devices and sensors.** These remain core local protocols today.',
        items: [
          '**Z-Wave (2001):** a low-power mesh protocol designed for reliable home-control devices.',
          '**Zigbee (mid-2000s):** an open low-power mesh standard widely used for bulbs and sensors.',
          '**Still relevant:** both are local-by-default and underpin modern hubs — see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'The Cloud Era: Nest, Echo, and HomeKit',
        content:
          '**The 2010s shifted smart homes to the cloud: the Nest thermostat (2011), Amazon Echo (2014), and Apple HomeKit (2014) made devices easy but dependent on vendor servers.** Convenience rose; privacy and offline reliability fell.',
        items: [
          '**Nest (2011):** the learning thermostat popularised cloud-connected home devices; Google acquired Nest in 2014.',
          '**Amazon Echo (2014):** voice control via a cloud assistant became mainstream.',
          '**Apple HomeKit (2014):** Apple\'s more privacy-leaning framework, with some local control.',
          '**The trade-off:** ease of setup came with data leaving the home and reliance on company clouds.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter and Interoperability',
        content:
          '**Matter, launched in 2022 by the Connectivity Standards Alliance, is a cross-vendor standard so devices from different brands work together — and it can run locally.** It addressed the fragmentation of the cloud era.',
        items: [
          'Matter runs over IP and works with Thread and Wi-Fi.',
          'It enables local control through a local controller, reducing cloud dependence — see [Matter local control](/smart-home/matter-local-control-guide).',
          'It made mixing brands far easier than the previous patchwork of apps and bridges.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'The 2026 Swing Back to Local',
        content:
          '**The current shift is back toward local control, driven by privacy concerns, cloud shutdowns bricking devices, and on-device AI now being practical.** Local autonomy is becoming the next era rather than a niche.',
        items: [
          'Cloud shutdowns that disable devices pushed users toward local-first setups.',
          'Privacy awareness grew as the scope of cloud data collection became clear — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          'On-device AI lets a local LLM run home control — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: "What's Next",
        content:
          '**The next era pairs local control with local AI: a home that runs automations and a natural-language assistant entirely on your own hardware.** Matter eases interoperability while local AI adds intelligence without the cloud.',
        columns: ['Era', 'Approx. years', 'Defining tech', 'Cloud or local'],
        rows: [
          { 'Era': 'Wired', 'Approx. years': '1975–2000', 'Defining tech': 'X10, Insteon', 'Cloud or local': 'Local' },
          { 'Era': 'Wireless mesh', 'Approx. years': '2001–2010', 'Defining tech': 'Z-Wave, Zigbee', 'Cloud or local': 'Local' },
          { 'Era': 'Cloud', 'Approx. years': '2011–2021', 'Defining tech': 'Nest, Echo, HomeKit', 'Cloud or local': 'Cloud' },
          { 'Era': 'Interoperability', 'Approx. years': '2022–2025', 'Defining tech': 'Matter, Thread', 'Cloud or local': 'Both' },
          { 'Era': 'Local AI', 'Approx. years': '2026+', 'Defining tech': 'Local LLMs, Home Assistant', 'Cloud or local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What was the first smart home technology?', a: 'X10, introduced in 1975, is generally considered the first mainstream home-automation technology. It sent control signals over a home\'s existing electrical wiring, letting switches and modules communicate without new cabling.' },
          { q: 'When did smart homes go mainstream?', a: 'Smart homes reached the mainstream in the 2010s with cloud-connected devices: the Nest thermostat in 2011 and voice assistants like the Amazon Echo in 2014 made the technology accessible to a broad audience.' },
          { q: 'What is Matter?', a: 'Matter is a cross-vendor smart home standard launched in 2022 by the Connectivity Standards Alliance. It lets devices from different brands work together over IP, and it can run locally through a local controller rather than depending on each vendor\'s cloud.' },
          { q: 'Why is smart home tech moving back to local?', a: 'Privacy concerns, cloud shutdowns that disable devices, and the arrival of practical on-device AI are pushing users back toward local control. A local setup keeps data at home, works offline, and is not at the mercy of a vendor\'s cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first era in practice',
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — the platforms that emerged from this history',
          '[Smart Home Protocols Explained](/smart-home/smart-home-protocols-explained) — the wireless standards in depth',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — why the pendulum is swinging back',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home History: From X10 to Local AI (2026)',
      description: 'Smart home history from X10 (1975) to local AI: Z-Wave, Zigbee, the cloud era of Nest and Echo, Matter, and the 2026 swing back to local control.',
      url: 'https://www.promptquorum.com/smart-home/history-of-smart-home-technology',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home automation history' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What was the first smart home technology?', acceptedAnswer: { '@type': 'Answer', text: 'X10, introduced in 1975, is generally considered the first mainstream home-automation technology, sending control signals over a home\'s existing electrical wiring.' } },
        { '@type': 'Question', name: 'When did smart homes go mainstream?', acceptedAnswer: { '@type': 'Answer', text: 'In the 2010s with cloud-connected devices — the Nest thermostat in 2011 and voice assistants like the Amazon Echo in 2014.' } },
        { '@type': 'Question', name: 'What is Matter?', acceptedAnswer: { '@type': 'Answer', text: 'A cross-vendor smart home standard launched in 2022 by the Connectivity Standards Alliance. It lets devices from different brands work together over IP and can run locally.' } },
        { '@type': 'Question', name: 'Why is smart home tech moving back to local?', acceptedAnswer: { '@type': 'Answer', text: 'Privacy concerns, cloud shutdowns that disable devices, and practical on-device AI are pushing users back toward local control.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'تاريخ المنزل الذكي: من X10 إلى الذكاء الاصطناعي المحلي (2026)',
    seoTitle: 'تاريخ تقنية المنزل الذكي: من X10 إلى الذكاء الاصطناعي المحلي (2026)',
    intro:
      'تطورت تقنية المنزل الذكي من التحكم الكهربائي X10 في السبعينيات، عبر Z-Wave وZigbee، إلى حقبة السحابة مع Nest وEcho، ثم معيار Matter الموحّد، وصولًا إلى العودة نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز. يتتبع هذا الدليل هذا المسار ويشرح سبب تأرجح البندول بعيدًا عن الاعتماد على السحابة نحو الاستقلالية المحلية.',
    metaDescription:
      'تاريخ المنزل الذكي من X10 (1975) إلى الذكاء الاصطناعي المحلي: Z-Wave وZigbee وحقبة السحابة مع Nest وEcho وMatter والعودة إلى التحكم المحلي في 2026.',
    twitterDescription:
      'من X10 عام 1975 إلى الذكاء الاصطناعي المحلي في 2026: كيف تطورت تقنية المنزل الذكي عبر Z-Wave وZigbee وحقبة السحابة وMatter والعودة إلى التحكم المحلي.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'القراء الراغبون في فهم سياق تطور تقنية المنزل الذكي',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'تاريخ تقنية المنزل الذكي',
      'تاريخ المنزل الذكي',
      'تاريخ أتمتة المنزل x10',
      'تطور المنزل الذكي',
      'متى بدأت المنازل الذكية',
    ],
    leadAnswerBlock:
      '**بدأت تقنية المنزل الذكي بالتحكم الكهربائي X10 عام 1975، ثم انتقلت إلى بروتوكولات الشبكة اللاسلكية (Z-Wave عام 2001، Zigbee في منتصف العقد الأول من الألفية الثالثة)، ودخلت حقبة السحابة مع Nest (2011) وAmazon Echo (2014)، وحصلت على معيار Matter عام 2022، وتتأرجح الآن نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز.** المسار هو بندول من المحلي إلى السحابة وعودةً إلى المحلي.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تطورت تقنية المنزل الذكي؟',
        answer:
          'بدأت تقنية المنزل الذكي بإشارات X10 الكهربائية عام 1975، ثم انتقلت في العقد الأول من الألفية الثالثة إلى بروتوكولات الشبكة اللاسلكية مثل Z-Wave وZigbee، ثم دخلت في العقد الثاني حقبة السحابة بقيادة Nest وAmazon Echo. وصل Matter عام 2022 لتوحيد الأجهزة، والتحول الحالي يعود نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز.',
        bullets: [
          'X10 (1975): أول أتمتة منزلية واسعة الانتشار، عبر الأسلاك الكهربائية',
          'Z-Wave (2001) وZigbee (منتصف العقد الأول): شبكة لاسلكية متشابكة',
          'حقبة السحابة: Nest (2011)، Amazon Echo (2014)، Apple HomeKit (2014)',
          'Matter (2022): معيار تشغيل بيني موحّد',
          '2026: تأرجح نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'الحقبة السلكية', anchor: 'wired-era' },
      { label: 'البروتوكولات اللاسلكية', anchor: 'wireless' },
      { label: 'حقبة السحابة', anchor: 'cloud-era' },
      { label: 'Matter والتشغيل البيني', anchor: 'matter' },
      { label: 'العودة إلى المحلي', anchor: 'swing-back' },
      { label: 'ما التالي', anchor: 'whats-next' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تقنية المنزل الذكي انتقلت من التحكم الكهربائي X10 عام 1975، عبر الشبكة اللاسلكية وحقبة السحابة، إلى Matter والعودة إلى التحكم بالذكاء الاصطناعي المحلي.' },
      { type: 'plain-terms', content: 'أتمتة المنزل أقدم مما يعتقد معظم الناس — بدأت في السبعينيات بإشارات تُرسَل عبر الأسلاك الكهربائية. على مدى عقود أصبحت لاسلكية، ثم انتقلت إلى سحابات الشركات، والآن تعود للعمل على أجهزة في منزلك الخاص، مع ذكاء اصطناعي يعمل محليًا أيضًا.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'X10 (1975) كان أول نظام أتمتة منزلية واسع الانتشار، يرسل الإشارات عبر الأسلاك الكهربائية',
          'Z-Wave (2001) وZigbee (منتصف العقد الأول) جلبا شبكة لاسلكية منخفضة الطاقة',
          'حقبة السحابة بدأت مع Nest (2011) وAmazon Echo وApple HomeKit (2014)',
          'Matter (2022) أضاف معيار تشغيل بيني بين الشركات',
          'في 2026 الاتجاه يتأرجح نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز',
          'النمط هو بندول: تحكم محلي، ثم اعتماد على السحابة، ثم عودة إلى المحلي',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'الحقبة السلكية: X10 وInsteon',
        content:
          '**بدأت أتمتة المنزل عام 1975 مع X10 الذي أرسل إشارات التحكم عبر الأسلاك الكهربائية الموجودة في المنزل.** كانت محلية بالضرورة — لم تكن هناك سحابة — لكنها محدودة وعرضة للتشويش.',
        items: [
          '**X10 (1975):** طورته Pico Electronics، جعل المفاتيح والوحدات تتواصل عبر الأسلاك الكهربائية.',
          '**Insteon:** جمع لاحقًا إشارات الأسلاك الكهربائية واللاسلكية لتحسين الموثوقية.',
          '**محلي افتراضيًا:** كل شيء عمل في المنزل، مُبشّرًا بانتعاش المحلي أولًا اليوم.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'البروتوكولات اللاسلكية: Z-Wave وZigbee',
        content:
          '**قدّم Z-Wave (2001) وZigbee (منتصف العقد الأول) شبكات لاسلكية متشابكة منخفضة الطاقة مبنية للأجهزة التي تعمل بالبطاريات والمستشعرات.** يبقى كلاهما بروتوكولات محلية أساسية حتى اليوم.',
        items: [
          '**Z-Wave (2001):** بروتوكول شبكة منخفض الطاقة مصمم لأجهزة تحكم منزلية موثوقة.',
          '**Zigbee (منتصف العقد الأول):** معيار شبكة مفتوح منخفض الطاقة يُستخدم على نطاق واسع للمصابيح والمستشعرات.',
          '**لا يزالان ذوَي صلة:** كلاهما محلي افتراضيًا ويشكّلان أساس المراكز الحديثة — راجع [بروتوكولات المنزل الذكي شرح](/ar/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'حقبة السحابة: Nest وEcho وHomeKit',
        content:
          '**نقل العقد الثاني من الألفية الثالثة المنازل الذكية إلى السحابة: منظّم Nest (2011) وAmazon Echo (2014) وApple HomeKit (2014) جعلوا الأجهزة سهلة لكن معتمدة على خوادم البائع.** ارتفع الراحة؛ انخفضت الخصوصية والموثوقية دون إنترنت.',
        items: [
          '**Nest (2011):** منظّم التعلم الذاتي رسّخ أجهزة المنزل المتصلة بالسحابة؛ استحوذت Google على Nest عام 2014.',
          '**Amazon Echo (2014):** التحكم الصوتي عبر مساعد سحابي أصبح سائدًا.',
          '**Apple HomeKit (2014):** إطار Apple الأكثر خصوصيةً، مع بعض التحكم المحلي.',
          '**المقايضة:** سهولة الإعداد جاءت مع خروج البيانات من المنزل والاعتماد على سحابات الشركات.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter والتشغيل البيني',
        content:
          '**Matter، الذي أطلقه تحالف معايير الاتصال عام 2022، هو معيار بين الشركات لكي تعمل الأجهزة من ماركات مختلفة معًا — ويمكنه العمل محليًا.** عالج تجزّؤ حقبة السحابة.',
        items: [
          'يعمل Matter عبر IP ويعمل مع Thread وWi-Fi.',
          'يُمكّن التحكم المحلي عبر وحدة تحكم محلية، مما يقلل الاعتماد على السحابة — راجع [دليل التحكم المحلي بـ Matter](/ar/smart-home/matter-local-control-guide).',
          'جعل خلط الماركات أسهل بكثير من الرقع السابقة من التطبيقات والجسور.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'عودة 2026 إلى المحلي',
        content:
          '**التحول الحالي يعود نحو التحكم المحلي، مدفوعًا بمخاوف الخصوصية وإيقاف الخدمات السحابية الذي يعطّل الأجهزة والذكاء الاصطناعي على الجهاز الذي أصبح عمليًا الآن.** الاستقلالية المحلية تصبح الحقبة التالية لا مجرد مجال ضيق.',
        items: [
          'إيقاف الخدمات السحابية الذي يعطّل الأجهزة دفع المستخدمين نحو إعدادات محلية أولًا.',
          'نما الوعي بالخصوصية مع وضوح نطاق جمع بيانات السحابة — راجع [مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks).',
          'الذكاء الاصطناعي على الجهاز يتيح لنموذج LLM محلي تشغيل التحكم المنزلي — راجع [الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: 'ما التالي',
        content:
          '**الحقبة التالية تجمع التحكم المحلي مع الذكاء الاصطناعي المحلي: منزل يشغّل الأتمتة ومساعدًا بلغة طبيعية بالكامل على جهازك الخاص.** Matter يُسهّل التشغيل البيني بينما يضيف الذكاء الاصطناعي المحلي الذكاء دون السحابة.',
        columns: ['الحقبة', 'السنوات التقريبية', 'التقنية المحورية', 'سحابة أم محلي'],
        rows: [
          { 'الحقبة': 'سلكي', 'السنوات التقريبية': '1975–2000', 'التقنية المحورية': 'X10, Insteon', 'سحابة أم محلي': 'محلي' },
          { 'الحقبة': 'شبكة لاسلكية', 'السنوات التقريبية': '2001–2010', 'التقنية المحورية': 'Z-Wave, Zigbee', 'سحابة أم محلي': 'محلي' },
          { 'الحقبة': 'سحابة', 'السنوات التقريبية': '2011–2021', 'التقنية المحورية': 'Nest, Echo, HomeKit', 'سحابة أم محلي': 'سحابة' },
          { 'الحقبة': 'تشغيل بيني', 'السنوات التقريبية': '2022–2025', 'التقنية المحورية': 'Matter, Thread', 'سحابة أم محلي': 'كلاهما' },
          { 'الحقبة': 'ذكاء اصطناعي محلي', 'السنوات التقريبية': '2026+', 'التقنية المحورية': 'نماذج LLM محلية، Home Assistant', 'سحابة أم محلي': 'محلي' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'ما كانت أول تقنية منزل ذكي؟', a: 'X10، المقدَّم عام 1975، يُعدّ بشكل عام أول تقنية أتمتة منزلية واسعة الانتشار. أرسل إشارات التحكم عبر الأسلاك الكهربائية الموجودة في المنزل، مما أتاح للمفاتيح والوحدات التواصل دون أسلاك جديدة.' },
          { q: 'متى أصبحت المنازل الذكية سائدة؟', a: 'وصلت المنازل الذكية إلى التيار السائد في العقد الثاني من الألفية الثالثة مع الأجهزة المتصلة بالسحابة: منظّم Nest عام 2011 والمساعدات الصوتية مثل Amazon Echo عام 2014 جعلت التقنية متاحةً لجمهور واسع.' },
          { q: 'ما هو Matter؟', a: 'Matter هو معيار منزل ذكي بين الشركات أطلقه تحالف معايير الاتصال عام 2022. يتيح للأجهزة من ماركات مختلفة العمل معًا عبر IP، ويمكنه العمل محليًا عبر وحدة تحكم محلية بدلًا من الاعتماد على سحابة كل بائع.' },
          { q: 'لماذا تعود تقنية المنزل الذكي إلى المحلي؟', a: 'مخاوف الخصوصية وإيقاف الخدمات السحابية التي تعطّل الأجهزة ووصول الذكاء الاصطناعي العملي على الجهاز تدفع المستخدمين نحو التحكم المحلي. الإعداد المحلي يحتفظ بالبيانات في المنزل ويعمل دون إنترنت وليس رهينًا بسحابة بائع.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — حقبة المحلي أولًا في الممارسة',
          '[مقارنة أنظمة المنزل الذكي](/ar/smart-home/smart-home-ecosystems-compared) — المنصات التي نشأت من هذا التاريخ',
          '[بروتوكولات المنزل الذكي شرح](/ar/smart-home/smart-home-protocols-explained) — المعايير اللاسلكية بعمق',
          '[مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — لماذا يتأرجح البندول للخلف',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'تاريخ المنزل الذكي: من X10 إلى الذكاء الاصطناعي المحلي (2026)',
      description: 'تاريخ المنزل الذكي من X10 (1975) إلى الذكاء الاصطناعي المحلي: Z-Wave وZigbee وحقبة السحابة مع Nest وEcho وMatter والعودة إلى التحكم المحلي في 2026.',
      url: 'https://www.promptquorum.com/ar/smart-home/history-of-smart-home-technology',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'تاريخ أتمتة المنزل' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما كانت أول تقنية منزل ذكي؟', acceptedAnswer: { '@type': 'Answer', text: 'X10، المقدَّم عام 1975، يُعدّ بشكل عام أول تقنية أتمتة منزلية واسعة الانتشار، ترسل إشارات التحكم عبر الأسلاك الكهربائية الموجودة في المنزل.' } },
        { '@type': 'Question', name: 'متى أصبحت المنازل الذكية سائدة؟', acceptedAnswer: { '@type': 'Answer', text: 'في العقد الثاني من الألفية الثالثة مع الأجهزة المتصلة بالسحابة — منظّم Nest عام 2011 والمساعدات الصوتية مثل Amazon Echo عام 2014.' } },
        { '@type': 'Question', name: 'ما هو Matter؟', acceptedAnswer: { '@type': 'Answer', text: 'معيار منزل ذكي بين الشركات أطلقه تحالف معايير الاتصال عام 2022. يتيح للأجهزة من ماركات مختلفة العمل معًا عبر IP ويمكنه العمل محليًا.' } },
        { '@type': 'Question', name: 'لماذا تعود تقنية المنزل الذكي إلى المحلي؟', acceptedAnswer: { '@type': 'Answer', text: 'مخاوف الخصوصية وإيقاف الخدمات السحابية التي تعطّل الأجهزة والذكاء الاصطناعي العملي على الجهاز تدفع المستخدمين نحو التحكم المحلي.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Geschichte des Smart Home: Von X10 zur lokalen KI (2026)',
    seoTitle: 'Smart-Home-Geschichte: Von X10 bis zur lokalen KI (2026)',
    intro:
      'Die Smart-Home-Technik entwickelte sich von der X10-Powerline-Steuerung der 1970er über Z-Wave und Zigbee, die Cloud-Ära von Nest und Echo, den vereinheitlichenden Matter-Standard bis zur heutigen Rückkehr zur lokalen Steuerung mit On-Device-KI. Dieser Leitfaden zeichnet diesen Bogen nach und erklärt, warum das Pendel von der Cloud-Abhängigkeit zurück zur lokalen Autonomie schwingt.',
    metaDescription:
      'Smart-Home-Geschichte von X10 (1975) bis zur lokalen KI: Z-Wave, Zigbee, die Cloud-Ära von Nest und Echo, Matter und die Rückkehr zur lokalen Steuerung 2026.',
    twitterDescription:
      'Von X10 (1975) zur lokalen KI 2026: Wie sich die Smart-Home-Technik über Z-Wave, Zigbee, die Cloud-Ära, Matter und zurück zur lokalen Steuerung entwickelte.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Leser, die Kontext zur Entwicklung der Smart-Home-Technik suchen',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'geschichte des smart home',
      'smart home historie',
      'x10 heimautomatisierung geschichte',
      'entwicklung smart home',
      'wann begann smart home',
    ],
    leadAnswerBlock:
      '**Die Smart-Home-Technik begann 1975 mit der X10-Powerline-Steuerung, wechselte zu drahtlosen Mesh-Protokollen (Z-Wave 2001, Zigbee Mitte der 2000er), trat mit Nest (2011) und Amazon Echo (2014) in eine Cloud-Ära ein, erhielt 2022 den Matter-Standard und schwingt nun zurück zur lokalen Steuerung mit On-Device-KI.** Der Bogen ist ein Pendel von lokal zu Cloud und zurück zu lokal.',
    quickAnswerTop: {
      de: {
        question: 'Wie hat sich die Smart-Home-Technik entwickelt?',
        answer:
          'Die Smart-Home-Technik begann 1975 mit der X10-Powerline-Signalisierung, wechselte in den 2000ern zu drahtlosen Mesh-Protokollen wie Z-Wave und Zigbee und trat in den 2010ern in eine cloud-vernetzte Ära unter Führung von Nest und Amazon Echo ein. Matter kam 2022 zur Vereinheitlichung, und der aktuelle Wandel führt zurück zur lokalen Steuerung mit On-Device-KI.',
        bullets: [
          'X10 (1975): erste verbreitete Heimautomatisierung über Stromleitungen',
          'Z-Wave (2001) und Zigbee (Mitte der 2000er): drahtloses Mesh',
          'Cloud-Ära: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): ein vereinheitlichender Interoperabilitätsstandard',
          '2026: Rückkehr zur lokalen Steuerung plus On-Device-KI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Die kabelgebundene Ära', anchor: 'wired-era' },
      { label: 'Drahtlose Protokolle', anchor: 'wireless' },
      { label: 'Die Cloud-Ära', anchor: 'cloud-era' },
      { label: 'Matter und Interoperabilität', anchor: 'matter' },
      { label: 'Die Rückkehr zum Lokalen', anchor: 'swing-back' },
      { label: 'Was kommt als Nächstes', anchor: 'whats-next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Die Smart-Home-Technik ging von der X10-Powerline-Steuerung 1975 über drahtloses Mesh und eine Cloud-Ära zu Matter und zurück zur lokalen KI-Steuerung.' },
      { type: 'plain-terms', content: 'Heimautomatisierung ist älter, als die meisten denken – sie begann in den 1970ern mit Signalen über die Hausverkabelung. Über Jahrzehnte wurde sie drahtlos, wanderte dann in Firmen-Clouds und kehrt nun zurück zur Ausführung auf Hardware bei Ihnen zu Hause, samt lokaler KI.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'X10 (1975) war das erste verbreitete Heimautomatisierungssystem und sendete Signale über Stromleitungen',
          'Z-Wave (2001) und Zigbee (Mitte der 2000er) brachten stromsparende drahtlose Mesh-Netze',
          'Die Cloud-Ära kam mit Nest (2011) sowie Amazon Echo und Apple HomeKit (2014)',
          'Matter (2022) fügte einen herstellerübergreifenden Interoperabilitätsstandard hinzu',
          '2026 schwingt der Trend zurück zur lokalen Steuerung mit On-Device-KI',
          'Das Muster ist ein Pendel: lokale Steuerung, Cloud-Abhängigkeit und zurück zu lokal',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'Die kabelgebundene Ära: X10 und Insteon',
        content:
          '**Die Heimautomatisierung begann 1975 mit X10, das Steuersignale über die vorhandene Elektroinstallation eines Hauses sendete.** Sie war notgedrungen lokal – es gab keine Cloud –, aber begrenzt und störanfällig.',
        items: [
          '**X10 (1975):** von Pico Electronics entwickelt, ließ es Schalter und Module über Stromleitungen kommunizieren.',
          '**Insteon:** kombinierte später Powerline- und Funksignale für mehr Zuverlässigkeit.',
          '**Standardmäßig lokal:** alles lief im Haus und nahm die heutige Local-First-Wiederbelebung vorweg.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'Drahtlose Protokolle: Z-Wave und Zigbee',
        content:
          '**Z-Wave (2001) und Zigbee (Mitte der 2000er) führten stromsparende drahtlose Mesh-Netze ein, gebaut für Batteriegeräte und Sensoren.** Beide bleiben bis heute zentrale lokale Protokolle.',
        items: [
          '**Z-Wave (2001):** ein stromsparendes Mesh-Protokoll für zuverlässige Steuergeräte.',
          '**Zigbee (Mitte der 2000er):** ein offener stromsparender Mesh-Standard, weit verbreitet für Leuchtmittel und Sensoren.',
          '**Weiterhin relevant:** beide sind lokal-standardmäßig und bilden die Basis moderner Hubs – siehe [Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'Die Cloud-Ära: Nest, Echo und HomeKit',
        content:
          '**Die 2010er verlagerten Smart Homes in die Cloud: das Nest-Thermostat (2011), Amazon Echo (2014) und Apple HomeKit (2014) machten Geräte einfach, aber abhängig von Hersteller-Servern.** Der Komfort stieg; Datenschutz und Offline-Zuverlässigkeit sanken.',
        items: [
          '**Nest (2011):** das lernende Thermostat machte cloud-vernetzte Heimgeräte populär; Google übernahm Nest 2014.',
          '**Amazon Echo (2014):** Sprachsteuerung über einen Cloud-Assistenten wurde Mainstream.',
          '**Apple HomeKit (2014):** Apples stärker datenschutzorientiertes Framework, mit etwas lokaler Steuerung.',
          '**Der Kompromiss:** einfache Einrichtung kam mit Daten, die das Haus verließen, und Abhängigkeit von Firmen-Clouds.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter und Interoperabilität',
        content:
          '**Matter, 2022 von der Connectivity Standards Alliance eingeführt, ist ein herstellerübergreifender Standard, damit Geräte verschiedener Marken zusammenarbeiten – und es kann lokal laufen.** Es begegnete der Fragmentierung der Cloud-Ära.',
        items: [
          'Matter läuft über IP und arbeitet mit Thread und WLAN.',
          'Es ermöglicht lokale Steuerung über einen lokalen Controller und verringert die Cloud-Abhängigkeit – siehe [Matter lokale Steuerung](/de/smart-home/matter-local-control-guide).',
          'Es machte das Mischen von Marken weit einfacher als das frühere Flickwerk aus Apps und Bridges.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'Die Rückkehr zum Lokalen 2026',
        content:
          '**Der aktuelle Wandel führt zurück zur lokalen Steuerung, getrieben von Datenschutzbedenken, Cloud-Abschaltungen, die Geräte unbrauchbar machen, und nun praxistauglicher On-Device-KI.** Lokale Autonomie wird zur nächsten Ära statt zur Nische.',
        items: [
          'Cloud-Abschaltungen, die Geräte deaktivieren, trieben Nutzer zu Local-First-Lösungen.',
          'Das Datenschutzbewusstsein wuchs, als der Umfang der Cloud-Datensammlung klar wurde – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          'On-Device-KI lässt ein lokales LLM die Heimsteuerung übernehmen – siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Was kommt als Nächstes',
        content:
          '**Die nächste Ära verbindet lokale Steuerung mit lokaler KI: ein Zuhause, das Automatisierungen und einen natürlichsprachlichen Assistenten vollständig auf eigener Hardware ausführt.** Matter erleichtert die Interoperabilität, während lokale KI Intelligenz ohne Cloud hinzufügt.',
        columns: ['Ära', 'Ungefähre Jahre', 'Prägende Technik', 'Cloud oder lokal'],
        rows: [
          { 'Ära': 'Kabelgebunden', 'Ungefähre Jahre': '1975–2000', 'Prägende Technik': 'X10, Insteon', 'Cloud oder lokal': 'Lokal' },
          { 'Ära': 'Drahtloses Mesh', 'Ungefähre Jahre': '2001–2010', 'Prägende Technik': 'Z-Wave, Zigbee', 'Cloud oder lokal': 'Lokal' },
          { 'Ära': 'Cloud', 'Ungefähre Jahre': '2011–2021', 'Prägende Technik': 'Nest, Echo, HomeKit', 'Cloud oder lokal': 'Cloud' },
          { 'Ära': 'Interoperabilität', 'Ungefähre Jahre': '2022–2025', 'Prägende Technik': 'Matter, Thread', 'Cloud oder lokal': 'Beides' },
          { 'Ära': 'Lokale KI', 'Ungefähre Jahre': '2026+', 'Prägende Technik': 'Lokale LLMs, Home Assistant', 'Cloud oder lokal': 'Lokal' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Was war die erste Smart-Home-Technik?', a: 'X10, eingeführt 1975, gilt allgemein als erste verbreitete Heimautomatisierungstechnik. Es sendete Steuersignale über die vorhandene Elektroinstallation eines Hauses und ließ Schalter und Module ohne neue Verkabelung kommunizieren.' },
          { q: 'Wann wurden Smart Homes Mainstream?', a: 'Smart Homes erreichten in den 2010ern den Mainstream mit cloud-vernetzten Geräten: das Nest-Thermostat 2011 und Sprachassistenten wie der Amazon Echo 2014 machten die Technik einem breiten Publikum zugänglich.' },
          { q: 'Was ist Matter?', a: 'Matter ist ein herstellerübergreifender Smart-Home-Standard, 2022 von der Connectivity Standards Alliance eingeführt. Er lässt Geräte verschiedener Marken über IP zusammenarbeiten und kann lokal über einen lokalen Controller laufen, statt von der Cloud jedes Herstellers abzuhängen.' },
          { q: 'Warum wandert die Smart-Home-Technik zurück zum Lokalen?', a: 'Datenschutzbedenken, Cloud-Abschaltungen, die Geräte deaktivieren, und das Aufkommen praxistauglicher On-Device-KI drängen Nutzer zurück zur lokalen Steuerung. Eine lokale Lösung hält Daten zu Hause, funktioniert offline und ist nicht der Cloud eines Herstellers ausgeliefert.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – die Local-First-Ära in der Praxis',
          '[Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared) – die Plattformen, die aus dieser Geschichte entstanden',
          '[Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained) – die Funkstandards im Detail',
          '[Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks) – warum das Pendel zurückschwingt',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Geschichte des Smart Home: Von X10 zur lokalen KI (2026)',
      description: 'Smart-Home-Geschichte von X10 (1975) bis zur lokalen KI: Z-Wave, Zigbee, die Cloud-Ära von Nest und Echo, Matter und die Rückkehr zur lokalen Steuerung 2026.',
      url: 'https://www.promptquorum.com/de/smart-home/history-of-smart-home-technology',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Geschichte der Heimautomatisierung' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was war die erste Smart-Home-Technik?', acceptedAnswer: { '@type': 'Answer', text: 'X10, eingeführt 1975, gilt allgemein als erste verbreitete Heimautomatisierungstechnik und sendete Steuersignale über die vorhandene Elektroinstallation eines Hauses.' } },
        { '@type': 'Question', name: 'Wann wurden Smart Homes Mainstream?', acceptedAnswer: { '@type': 'Answer', text: 'In den 2010ern mit cloud-vernetzten Geräten – dem Nest-Thermostat 2011 und Sprachassistenten wie dem Amazon Echo 2014.' } },
        { '@type': 'Question', name: 'Was ist Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Ein herstellerübergreifender Smart-Home-Standard, 2022 von der Connectivity Standards Alliance eingeführt. Er lässt Geräte verschiedener Marken über IP zusammenarbeiten und kann lokal laufen.' } },
        { '@type': 'Question', name: 'Warum wandert die Smart-Home-Technik zurück zum Lokalen?', acceptedAnswer: { '@type': 'Answer', text: 'Datenschutzbedenken, Cloud-Abschaltungen, die Geräte deaktivieren, und praxistaugliche On-Device-KI drängen Nutzer zurück zur lokalen Steuerung.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Historia del Smart Home: De X10 a la IA Local (2026)',
    seoTitle: 'Historia del Smart Home: De X10 a la IA Local en 2026',
    intro:
      'La tecnología del smart home evolucionó desde el control por línea eléctrica X10 de los años 70, pasando por Z-Wave y Zigbee, la era de la nube de Nest y Echo, el estándar unificador Matter, hasta el giro actual hacia el control local con IA en el dispositivo. Esta guía traza ese arco y explica por qué el péndulo se aleja de la dependencia de la nube hacia la autonomía local.',
    metaDescription:
      'Historia del smart home desde X10 (1975) a la IA local: Z-Wave, Zigbee, la era de la nube de Nest y Echo, Matter y el giro de 2026 hacia el control local.',
    twitterDescription:
      'De X10 en 1975 a la IA local en 2026: cómo evolucionó el smart home a través de Z-Wave, Zigbee, la era de la nube, Matter y de vuelta al control local.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Lectores que quieren contexto sobre cómo se desarrolló el smart home',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'historia del smart home',
      'historia de la domótica',
      'historia x10 domótica',
      'evolución del smart home',
      'cuándo empezaron los smart home',
    ],
    leadAnswerBlock:
      '**La tecnología del smart home comenzó con el control por línea eléctrica X10 en 1975, pasó a protocolos mesh inalámbricos (Z-Wave en 2001, Zigbee a mediados de los 2000), entró en una era de la nube con Nest (2011) y Amazon Echo (2014), obtuvo el estándar Matter en 2022 y ahora gira de vuelta al control local con IA en el dispositivo.** El arco es un péndulo de lo local a la nube y de vuelta a lo local.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo evolucionó la tecnología del smart home?',
        answer:
          'La tecnología del smart home empezó con la señalización por línea eléctrica X10 en 1975, pasó a protocolos mesh inalámbricos como Z-Wave y Zigbee en los 2000, y luego entró en una era conectada a la nube liderada por Nest y Amazon Echo en los 2010. Matter llegó en 2022 para unificar dispositivos, y el cambio actual vuelve al control local con IA en el dispositivo.',
        bullets: [
          'X10 (1975): primera domótica masiva, por líneas eléctricas',
          'Z-Wave (2001) y Zigbee (mediados de los 2000): mesh inalámbrico',
          'Era de la nube: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): un estándar de interoperabilidad unificador',
          '2026: giro de vuelta al control local más IA en el dispositivo',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'La era cableada', anchor: 'wired-era' },
      { label: 'Protocolos inalámbricos', anchor: 'wireless' },
      { label: 'La era de la nube', anchor: 'cloud-era' },
      { label: 'Matter e interoperabilidad', anchor: 'matter' },
      { label: 'El giro de vuelta a lo local', anchor: 'swing-back' },
      { label: 'Qué viene después', anchor: 'whats-next' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La tecnología del smart home pasó del control por línea eléctrica X10 en 1975, por el mesh inalámbrico y una era de la nube, a Matter y de vuelta al control local con IA.' },
      { type: 'plain-terms', content: 'La domótica es más antigua de lo que la mayoría cree: empezó en los años 70 con señales enviadas por el cableado de la casa. A lo largo de décadas se volvió inalámbrica, luego se trasladó a las nubes de las empresas, y ahora vuelve a ejecutarse en hardware de tu propia casa, también con IA local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'X10 (1975) fue el primer sistema de domótica masivo, enviando señales por líneas eléctricas',
          'Z-Wave (2001) y Zigbee (mediados de los 2000) trajeron redes mesh inalámbricas de bajo consumo',
          'La era de la nube llegó con Nest (2011) y Amazon Echo y Apple HomeKit (2014)',
          'Matter (2022) añadió un estándar de interoperabilidad entre fabricantes',
          'En 2026 la tendencia gira de vuelta al control local con IA en el dispositivo',
          'El patrón es un péndulo: control local, dependencia de la nube y de vuelta a lo local',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'La era cableada: X10 e Insteon',
        content:
          '**La domótica comenzó en 1975 con X10, que enviaba señales de control por el cableado eléctrico existente de una casa.** Era local por necesidad —no había nube— pero limitada y propensa a interferencias.',
        items: [
          '**X10 (1975):** desarrollado por Pico Electronics, permitía que interruptores y módulos se comunicaran por líneas eléctricas.',
          '**Insteon:** más tarde combinó señalización por línea eléctrica e inalámbrica para mejorar la fiabilidad.',
          '**Local por defecto:** todo funcionaba en la casa, anticipando el resurgir local-first de hoy.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'Protocolos inalámbricos: Z-Wave y Zigbee',
        content:
          '**Z-Wave (2001) y Zigbee (mediados de los 2000) introdujeron redes mesh inalámbricas de bajo consumo pensadas para dispositivos a batería y sensores.** Ambos siguen siendo protocolos locales clave hoy.',
        items: [
          '**Z-Wave (2001):** un protocolo mesh de bajo consumo diseñado para dispositivos de control fiables.',
          '**Zigbee (mediados de los 2000):** un estándar mesh abierto de bajo consumo, muy usado para bombillas y sensores.',
          '**Aún relevante:** ambos son locales por defecto y sustentan los hubs modernos: consulta [protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'La era de la nube: Nest, Echo y HomeKit',
        content:
          '**Los 2010 llevaron los smart homes a la nube: el termostato Nest (2011), Amazon Echo (2014) y Apple HomeKit (2014) hicieron los dispositivos fáciles pero dependientes de servidores del fabricante.** La comodidad subió; la privacidad y la fiabilidad sin conexión bajaron.',
        items: [
          '**Nest (2011):** el termostato que aprende popularizó los dispositivos del hogar conectados a la nube; Google adquirió Nest en 2014.',
          '**Amazon Echo (2014):** el control por voz mediante un asistente en la nube se volvió masivo.',
          '**Apple HomeKit (2014):** el marco de Apple más orientado a la privacidad, con algo de control local.',
          '**El compromiso:** la facilidad de configuración vino con datos que salían de casa y dependencia de las nubes de las empresas.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter e interoperabilidad',
        content:
          '**Matter, lanzado en 2022 por la Connectivity Standards Alliance, es un estándar entre fabricantes para que dispositivos de distintas marcas funcionen juntos, y puede ejecutarse localmente.** Abordó la fragmentación de la era de la nube.',
        items: [
          'Matter funciona sobre IP y trabaja con Thread y Wi-Fi.',
          'Permite el control local mediante un controlador local, reduciendo la dependencia de la nube: consulta [control local con Matter](/es/smart-home/matter-local-control-guide).',
          'Hizo mucho más fácil mezclar marcas que el antiguo mosaico de apps y puentes.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'El giro de vuelta a lo local en 2026',
        content:
          '**El cambio actual vuelve hacia el control local, impulsado por preocupaciones de privacidad, cierres de la nube que inutilizan dispositivos y una IA en el dispositivo ahora práctica.** La autonomía local se está convirtiendo en la próxima era en vez de un nicho.',
        items: [
          'Los cierres de la nube que desactivan dispositivos empujaron a los usuarios hacia configuraciones local-first.',
          'La conciencia sobre la privacidad creció al hacerse claro el alcance de la recopilación de datos en la nube: consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
          'La IA en el dispositivo deja que un LLM local ejecute el control del hogar: consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Qué viene después',
        content:
          '**La próxima era combina control local con IA local: un hogar que ejecuta automatizaciones y un asistente en lenguaje natural enteramente en tu propio hardware.** Matter facilita la interoperabilidad mientras la IA local añade inteligencia sin la nube.',
        columns: ['Era', 'Años aprox.', 'Tecnología definitoria', 'Nube o local'],
        rows: [
          { 'Era': 'Cableada', 'Años aprox.': '1975–2000', 'Tecnología definitoria': 'X10, Insteon', 'Nube o local': 'Local' },
          { 'Era': 'Mesh inalámbrico', 'Años aprox.': '2001–2010', 'Tecnología definitoria': 'Z-Wave, Zigbee', 'Nube o local': 'Local' },
          { 'Era': 'Nube', 'Años aprox.': '2011–2021', 'Tecnología definitoria': 'Nest, Echo, HomeKit', 'Nube o local': 'Nube' },
          { 'Era': 'Interoperabilidad', 'Años aprox.': '2022–2025', 'Tecnología definitoria': 'Matter, Thread', 'Nube o local': 'Ambos' },
          { 'Era': 'IA local', 'Años aprox.': '2026+', 'Tecnología definitoria': 'LLMs locales, Home Assistant', 'Nube o local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál fue la primera tecnología de smart home?', a: 'X10, introducida en 1975, se considera generalmente la primera tecnología de domótica masiva. Enviaba señales de control por el cableado eléctrico existente de una casa, permitiendo que interruptores y módulos se comunicaran sin cableado nuevo.' },
          { q: '¿Cuándo se volvieron masivos los smart homes?', a: 'Los smart homes llegaron a las masas en los 2010 con dispositivos conectados a la nube: el termostato Nest en 2011 y asistentes de voz como el Amazon Echo en 2014 hicieron la tecnología accesible a un público amplio.' },
          { q: '¿Qué es Matter?', a: 'Matter es un estándar de smart home entre fabricantes lanzado en 2022 por la Connectivity Standards Alliance. Permite que dispositivos de distintas marcas funcionen juntos sobre IP, y puede ejecutarse localmente mediante un controlador local en lugar de depender de la nube de cada fabricante.' },
          { q: '¿Por qué la tecnología del smart home vuelve a lo local?', a: 'Las preocupaciones de privacidad, los cierres de la nube que desactivan dispositivos y la llegada de una IA en el dispositivo práctica empujan a los usuarios de vuelta al control local. Una configuración local mantiene los datos en casa, funciona sin conexión y no está a merced de la nube de un fabricante.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — la era local-first en la práctica',
          '[Ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared) — las plataformas que surgieron de esta historia',
          '[Protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained) — los estándares inalámbricos en detalle',
          '[Riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks) — por qué el péndulo gira de vuelta',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Historia del Smart Home: De X10 a la IA Local (2026)',
      description: 'Historia del smart home desde X10 (1975) a la IA local: Z-Wave, Zigbee, la era de la nube de Nest y Echo, Matter y el giro de 2026 hacia el control local.',
      url: 'https://www.promptquorum.com/es/smart-home/history-of-smart-home-technology',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Historia de la domótica' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuál fue la primera tecnología de smart home?', acceptedAnswer: { '@type': 'Answer', text: 'X10, introducida en 1975, se considera la primera tecnología de domótica masiva, enviando señales de control por el cableado eléctrico existente de una casa.' } },
        { '@type': 'Question', name: '¿Cuándo se volvieron masivos los smart homes?', acceptedAnswer: { '@type': 'Answer', text: 'En los 2010 con dispositivos conectados a la nube: el termostato Nest en 2011 y asistentes de voz como el Amazon Echo en 2014.' } },
        { '@type': 'Question', name: '¿Qué es Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Un estándar de smart home entre fabricantes lanzado en 2022 por la Connectivity Standards Alliance. Permite que dispositivos de distintas marcas funcionen juntos sobre IP y puede ejecutarse localmente.' } },
        { '@type': 'Question', name: '¿Por qué la tecnología del smart home vuelve a lo local?', acceptedAnswer: { '@type': 'Answer', text: 'Las preocupaciones de privacidad, los cierres de la nube que desactivan dispositivos y una IA en el dispositivo práctica empujan a los usuarios de vuelta al control local.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Histoire de la Maison Connectée : de X10 à l\'IA Locale (2026)',
    seoTitle: 'Histoire de la Maison Connectée : X10 à l\'IA (2026)',
    intro:
      'La technologie de la maison connectée a évolué depuis la commande par courant porteur X10 des années 1970, en passant par Z-Wave et Zigbee, l\'ère du cloud de Nest et Echo, le standard unificateur Matter, jusqu\'au virage actuel vers le contrôle local avec l\'IA embarquée. Ce guide retrace cet arc et explique pourquoi le pendule s\'éloigne de la dépendance au cloud vers l\'autonomie locale.',
    metaDescription:
      'Histoire de la maison connectée de X10 (1975) à l\'IA locale : Z-Wave, Zigbee, Nest, Echo, Matter et le virage 2026 vers le contrôle local.',
    twitterDescription:
      'De X10 en 1975 à l\'IA locale en 2026 : comment la maison connectée a évolué via Z-Wave, Zigbee, l\'ère du cloud, Matter et le retour au contrôle local.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Lecteurs cherchant du contexte sur le développement de la maison connectée',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'histoire de la maison connectée',
      'histoire domotique',
      'histoire x10 domotique',
      'évolution maison connectée',
      'quand la maison connectée a commencé',
    ],
    leadAnswerBlock:
      '**La technologie de la maison connectée a commencé avec la commande par courant porteur X10 en 1975, est passée aux protocoles mesh sans fil (Z-Wave en 2001, Zigbee au milieu des années 2000), est entrée dans une ère du cloud avec Nest (2011) et Amazon Echo (2014), a obtenu le standard Matter en 2022 et revient désormais au contrôle local avec l\'IA embarquée.** L\'arc est un pendule du local au cloud puis de retour au local.',
    quickAnswerTop: {
      fr: {
        question: 'Comment la technologie de la maison connectée a-t-elle évolué ?',
        answer:
          'La technologie de la maison connectée a débuté avec la signalisation par courant porteur X10 en 1975, est passée aux protocoles mesh sans fil comme Z-Wave et Zigbee dans les années 2000, puis est entrée dans une ère connectée au cloud menée par Nest et Amazon Echo dans les années 2010. Matter est arrivé en 2022 pour unifier les appareils, et le changement actuel revient au contrôle local avec l\'IA embarquée.',
        bullets: [
          'X10 (1975) : première domotique grand public, par courant porteur',
          'Z-Wave (2001) et Zigbee (milieu des années 2000) : mesh sans fil',
          'Ère du cloud : Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022) : un standard d\'interopérabilité unificateur',
          '2026 : retour au contrôle local plus l\'IA embarquée',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'L\'ère filaire', anchor: 'wired-era' },
      { label: 'Protocoles sans fil', anchor: 'wireless' },
      { label: 'L\'ère du cloud', anchor: 'cloud-era' },
      { label: 'Matter et interopérabilité', anchor: 'matter' },
      { label: 'Le retour au local', anchor: 'swing-back' },
      { label: 'Et ensuite', anchor: 'whats-next' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'La maison connectée est passée de la commande par courant porteur X10 en 1975, par le mesh sans fil et une ère du cloud, à Matter et au retour au contrôle local par l\'IA.' },
      { type: 'plain-terms', content: 'La domotique est plus ancienne qu\'on ne le pense : elle a commencé dans les années 1970 avec des signaux envoyés par le câblage de la maison. Au fil des décennies, elle est devenue sans fil, puis s\'est déplacée dans les clouds des entreprises, et revient maintenant à s\'exécuter sur du matériel chez vous, avec une IA locale.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'X10 (1975) fut le premier système de domotique grand public, envoyant des signaux par courant porteur',
          'Z-Wave (2001) et Zigbee (milieu des années 2000) ont apporté des réseaux mesh sans fil basse consommation',
          'L\'ère du cloud est arrivée avec Nest (2011) puis Amazon Echo et Apple HomeKit (2014)',
          'Matter (2022) a ajouté un standard d\'interopérabilité entre fabricants',
          'En 2026 la tendance revient au contrôle local avec l\'IA embarquée',
          'Le schéma est un pendule : contrôle local, dépendance au cloud, puis retour au local',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'L\'ère filaire : X10 et Insteon',
        content:
          '**La domotique a commencé en 1975 avec X10, qui envoyait des signaux de commande par le câblage électrique existant d\'une maison.** Elle était locale par nécessité — il n\'y avait pas de cloud — mais limitée et sujette aux interférences.',
        items: [
          '**X10 (1975) :** développé par Pico Electronics, il permettait aux interrupteurs et modules de communiquer par courant porteur.',
          '**Insteon :** a ensuite combiné signalisation par courant porteur et sans fil pour améliorer la fiabilité.',
          '**Local par défaut :** tout fonctionnait dans la maison, préfigurant le renouveau local-first d\'aujourd\'hui.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'Protocoles sans fil : Z-Wave et Zigbee',
        content:
          '**Z-Wave (2001) et Zigbee (milieu des années 2000) ont introduit des réseaux mesh sans fil basse consommation conçus pour les appareils à pile et les capteurs.** Les deux restent des protocoles locaux essentiels aujourd\'hui.',
        items: [
          '**Z-Wave (2001) :** un protocole mesh basse consommation conçu pour des appareils de commande fiables.',
          '**Zigbee (milieu des années 2000) :** un standard mesh ouvert basse consommation, largement utilisé pour les ampoules et capteurs.',
          '**Toujours pertinents :** les deux sont locaux par défaut et sous-tendent les hubs modernes — voir [les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'L\'ère du cloud : Nest, Echo et HomeKit',
        content:
          '**Les années 2010 ont déplacé les maisons connectées vers le cloud : le thermostat Nest (2011), Amazon Echo (2014) et Apple HomeKit (2014) ont rendu les appareils faciles mais dépendants des serveurs du fabricant.** La commodité a augmenté ; la confidentialité et la fiabilité hors ligne ont baissé.',
        items: [
          '**Nest (2011) :** le thermostat apprenant a popularisé les appareils domestiques connectés au cloud ; Google a racheté Nest en 2014.',
          '**Amazon Echo (2014) :** la commande vocale via un assistant cloud est devenue grand public.',
          '**Apple HomeKit (2014) :** le cadre d\'Apple plus axé sur la confidentialité, avec un peu de contrôle local.',
          '**Le compromis :** la facilité de configuration s\'est accompagnée de données quittant la maison et d\'une dépendance aux clouds des entreprises.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter et interopérabilité',
        content:
          '**Matter, lancé en 2022 par la Connectivity Standards Alliance, est un standard inter-fabricants pour que des appareils de marques différentes fonctionnent ensemble — et il peut tourner localement.** Il a répondu à la fragmentation de l\'ère du cloud.',
        items: [
          'Matter fonctionne sur IP et avec Thread et Wi-Fi.',
          'Il permet le contrôle local via un contrôleur local, réduisant la dépendance au cloud — voir [contrôle local avec Matter](/fr/smart-home/matter-local-control-guide).',
          'Il a rendu le mélange de marques bien plus simple que l\'ancien patchwork d\'applications et de ponts.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'Le retour au local en 2026',
        content:
          '**Le changement actuel revient vers le contrôle local, porté par des préoccupations de confidentialité, des fermetures de cloud qui rendent le matériel inutilisable et une IA embarquée désormais pratique.** L\'autonomie locale devient la prochaine ère plutôt qu\'une niche.',
        items: [
          'Les fermetures de cloud qui désactivent les appareils ont poussé les utilisateurs vers les configurations local-first.',
          'La sensibilité à la confidentialité a grandi à mesure que l\'ampleur de la collecte de données par le cloud devenait claire — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          'L\'IA embarquée permet à un LLM local d\'assurer le contrôle domestique — voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Et ensuite',
        content:
          '**La prochaine ère associe contrôle local et IA locale : une maison qui exécute des automatisations et un assistant en langage naturel entièrement sur votre propre matériel.** Matter facilite l\'interopérabilité tandis que l\'IA locale ajoute de l\'intelligence sans le cloud.',
        columns: ['Ère', 'Années approx.', 'Technologie déterminante', 'Cloud ou local'],
        rows: [
          { 'Ère': 'Filaire', 'Années approx.': '1975–2000', 'Technologie déterminante': 'X10, Insteon', 'Cloud ou local': 'Local' },
          { 'Ère': 'Mesh sans fil', 'Années approx.': '2001–2010', 'Technologie déterminante': 'Z-Wave, Zigbee', 'Cloud ou local': 'Local' },
          { 'Ère': 'Cloud', 'Années approx.': '2011–2021', 'Technologie déterminante': 'Nest, Echo, HomeKit', 'Cloud ou local': 'Cloud' },
          { 'Ère': 'Interopérabilité', 'Années approx.': '2022–2025', 'Technologie déterminante': 'Matter, Thread', 'Cloud ou local': 'Les deux' },
          { 'Ère': 'IA locale', 'Années approx.': '2026+', 'Technologie déterminante': 'LLMs locaux, Home Assistant', 'Cloud ou local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quelle a été la première technologie de maison connectée ?', a: 'X10, introduite en 1975, est généralement considérée comme la première technologie de domotique grand public. Elle envoyait des signaux de commande par le câblage électrique existant d\'une maison, permettant aux interrupteurs et modules de communiquer sans nouveau câblage.' },
          { q: 'Quand les maisons connectées sont-elles devenues grand public ?', a: 'Les maisons connectées ont atteint le grand public dans les années 2010 avec des appareils connectés au cloud : le thermostat Nest en 2011 et des assistants vocaux comme l\'Amazon Echo en 2014 ont rendu la technologie accessible à un large public.' },
          { q: 'Qu\'est-ce que Matter ?', a: 'Matter est un standard de maison connectée inter-fabricants lancé en 2022 par la Connectivity Standards Alliance. Il permet à des appareils de marques différentes de fonctionner ensemble sur IP, et peut tourner localement via un contrôleur local plutôt que de dépendre du cloud de chaque fabricant.' },
          { q: 'Pourquoi la technologie de la maison connectée revient-elle au local ?', a: 'Les préoccupations de confidentialité, les fermetures de cloud qui désactivent les appareils et l\'arrivée d\'une IA embarquée pratique poussent les utilisateurs vers le contrôle local. Une configuration locale garde les données à la maison, fonctionne hors ligne et n\'est pas à la merci du cloud d\'un fabricant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — l\'ère local-first en pratique',
          '[Écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared) — les plateformes issues de cette histoire',
          '[Les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained) — les standards sans fil en détail',
          '[Risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks) — pourquoi le pendule revient',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Histoire de la Maison Connectée : de X10 à l\'IA Locale (2026)',
      description: 'Histoire de la maison connectée de X10 (1975) à l\'IA locale : Z-Wave, Zigbee, Nest, Echo, Matter et le virage 2026 vers le contrôle local.',
      url: 'https://www.promptquorum.com/fr/smart-home/history-of-smart-home-technology',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Histoire de la domotique' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quelle a été la première technologie de maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'X10, introduite en 1975, est considérée comme la première technologie de domotique grand public, envoyant des signaux de commande par le câblage électrique existant d\'une maison.' } },
        { '@type': 'Question', name: 'Quand les maisons connectées sont-elles devenues grand public ?', acceptedAnswer: { '@type': 'Answer', text: 'Dans les années 2010 avec des appareils connectés au cloud — le thermostat Nest en 2011 et des assistants vocaux comme l\'Amazon Echo en 2014.' } },
        { '@type': 'Question', name: 'Qu\'est-ce que Matter ?', acceptedAnswer: { '@type': 'Answer', text: 'Un standard de maison connectée inter-fabricants lancé en 2022 par la Connectivity Standards Alliance. Il permet à des appareils de marques différentes de fonctionner ensemble sur IP et peut tourner localement.' } },
        { '@type': 'Question', name: 'Pourquoi la technologie de la maison connectée revient-elle au local ?', acceptedAnswer: { '@type': 'Answer', text: 'Les préoccupations de confidentialité, les fermetures de cloud qui désactivent les appareils et une IA embarquée pratique poussent les utilisateurs vers le contrôle local.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'スマートホームの歴史：X10からローカルAIへ（2026）',
    seoTitle: 'スマートホームの進化史（2026年版）：X10からMatterまでローカルAIへの転換を追う',
    intro:
      'スマートホーム技術は、1970年代の X10 電力線制御から、Z-Wave と Zigbee、Nest と Echo のクラウド時代、統一規格 Matter を経て、今日のオンデバイスAIによるローカル制御への転換まで進化してきました。本ガイドはその流れをたどり、振り子がクラウド依存からローカルの自律へと戻る理由を説明します。',
    metaDescription:
      'スマートホームの技術は1975年のX10電力線制御から始まり、Z-WaveとZigbeeの普及、NestとAmazon Echoによるクラウド時代を経て、Matter統一規格とローカルAI制御による本地回帰へと進化しました。2026年版で五十年の技術変遷を解説。',
    twitterDescription:
      '1975年の X10 から2026年のローカルAIへ：Z-Wave、Zigbee、クラウド時代、Matter を経てローカル制御へ戻るスマートホームの進化。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    audience: 'スマートホーム技術がどう発展したか背景を知りたい読者',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'スマートホームの歴史',
      'ホームオートメーション 歴史',
      'x10 歴史',
      'スマートホーム 進化',
      'スマートホーム いつから',
    ],
    leadAnswerBlock:
      '**スマートホーム技術は1975年の X10 電力線制御に始まり、無線メッシュプロトコル（2001年 Z-Wave、2000年代半ば Zigbee）へ移り、Nest（2011）と Amazon Echo（2014）でクラウド時代に入り、2022年に Matter 規格を得て、今やオンデバイスAIによるローカル制御へと戻りつつあります。** その流れはローカルからクラウドへ、そして再びローカルへという振り子です。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホーム技術はどのように進化しましたか？',
        answer:
          'スマートホーム技術は1975年の X10 電力線信号に始まり、2000年代に Z-Wave や Zigbee のような無線メッシュプロトコルへ移り、2010年代には Nest と Amazon Echo を中心としたクラウド接続の時代に入りました。Matter は機器の統一のため2022年に登場し、現在の流れはオンデバイスAIによるローカル制御へと戻っています。',
        bullets: [
          'X10（1975）：電力線による初の普及型ホームオートメーション',
          'Z-Wave（2001）と Zigbee（2000年代半ば）：無線メッシュ',
          'クラウド時代：Nest（2011）、Amazon Echo（2014）、Apple HomeKit（2014）',
          'Matter（2022）：統一的な相互運用規格',
          '2026：ローカル制御＋オンデバイスAIへの回帰',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '有線の時代', anchor: 'wired-era' },
      { label: '無線プロトコル', anchor: 'wireless' },
      { label: 'クラウドの時代', anchor: 'cloud-era' },
      { label: 'Matter と相互運用', anchor: 'matter' },
      { label: 'ローカルへの回帰', anchor: 'swing-back' },
      { label: '次に来るもの', anchor: 'whats-next' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'スマートホーム技術は1975年の X10 電力線制御から、無線メッシュとクラウド時代を経て、Matter とローカルAI制御への回帰まで進んできました。' },
      { type: 'plain-terms', content: 'ホームオートメーションは多くの人が思うより古く、1970年代に家の配線を通じて信号を送ることから始まりました。数十年かけて無線化し、その後は企業のクラウドへ移り、今は自宅のハードウェア上で——ローカルAIとともに——動くほうへ戻りつつあります。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'X10（1975）は電力線で信号を送る初の普及型ホームオートメーションだった',
          'Z-Wave（2001）と Zigbee（2000年代半ば）は低消費電力の無線メッシュをもたらした',
          'クラウド時代は Nest（2011）、Amazon Echo・Apple HomeKit（2014）で到来した',
          'Matter（2022）はメーカー横断の相互運用規格を加えた',
          '2026年、流れはオンデバイスAIによるローカル制御へ戻っている',
          'このパターンは振り子：ローカル制御、クラウド依存、そして再びローカルへ',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: '有線の時代：X10 と Insteon',
        content:
          '**ホームオートメーションは1975年、家の既存の電気配線を通じて制御信号を送る X10 に始まりました。** クラウドが存在しなかったため必然的にローカルでしたが、機能は限られ干渉も受けやすいものでした。',
        items: [
          '**X10（1975）：** Pico Electronics が開発し、スイッチやモジュールが電力線で通信できるようにした。',
          '**Insteon：** のちに電力線と無線の信号を組み合わせて信頼性を高めた。',
          '**標準でローカル：** すべてが家の中で動き、今日のローカルファースト復興を先取りしていた。',
        ],
      },
      wireless: {
        id: 'wireless',
        title: '無線プロトコル：Z-Wave と Zigbee',
        content:
          '**Z-Wave（2001）と Zigbee（2000年代半ば）は、電池機器やセンサー向けに作られた低消費電力の無線メッシュネットワークを導入しました。** 両者は今日も中核的なローカルプロトコルです。',
        items: [
          '**Z-Wave（2001）：** 信頼性の高い制御機器向けに設計された低消費電力のメッシュプロトコル。',
          '**Zigbee（2000年代半ば）：** 電球やセンサーに広く使われる、低消費電力のオープンなメッシュ規格。',
          '**今も重要：** どちらも標準でローカルであり、現代のハブの基盤——[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained)を参照。',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'クラウドの時代：Nest、Echo、HomeKit',
        content:
          '**2010年代はスマートホームをクラウドへ移しました：Nest サーモスタット（2011）、Amazon Echo（2014）、Apple HomeKit（2014）は機器を簡単にしましたが、メーカーのサーバーに依存させました。** 利便性は上がり、プライバシーとオフラインの信頼性は下がりました。',
        items: [
          '**Nest（2011）：** 学習するサーモスタットがクラウド接続の家庭機器を広めた；Google は2014年に Nest を買収。',
          '**Amazon Echo（2014）：** クラウドアシスタントによる音声制御が主流になった。',
          '**Apple HomeKit（2014）：** よりプライバシー寄りの Apple のフレームワークで、一部ローカル制御あり。',
          '**トレードオフ：** 設定の容易さは、データが家を出ることと企業クラウドへの依存を伴った。',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter と相互運用',
        content:
          '**Matter は2022年に Connectivity Standards Alliance が立ち上げたメーカー横断の規格で、異なるブランドの機器を協調させ——ローカルでも動作します。** クラウド時代の断片化に応えました。',
        items: [
          'Matter は IP 上で動作し、Thread や Wi-Fi と連携します。',
          'ローカルコントローラーを介したローカル制御を可能にし、クラウド依存を減らします——[Matter のローカル制御](/ja/smart-home/matter-local-control-guide)を参照。',
          'アプリとブリッジの寄せ集めだった以前より、ブランドの混在をはるかに簡単にしました。',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: '2026年のローカルへの回帰',
        content:
          '**現在の流れはローカル制御へと戻っており、プライバシーへの懸念、機器を無効化するクラウド終了、そして今や実用的なオンデバイスAIが後押ししています。** ローカルの自律はニッチではなく次の時代になりつつあります。',
        items: [
          '機器を無効化するクラウド終了が、ユーザーをローカルファーストへ向かわせた。',
          'クラウドのデータ収集の範囲が明らかになるにつれ、プライバシー意識が高まった——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          'オンデバイスAIにより、ローカルLLMが家庭制御を担える——[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: '次に来るもの',
        content:
          '**次の時代はローカル制御とローカルAIを組み合わせます：自動化と自然言語アシスタントを、すべて自分のハードウェアで動かす家。** Matter が相互運用を容易にし、ローカルAIがクラウドなしで知性を加えます。',
        columns: ['時代', 'おおよその年', '象徴的な技術', 'クラウドかローカルか'],
        rows: [
          { '時代': '有線', 'おおよその年': '1975–2000', '象徴的な技術': 'X10, Insteon', 'クラウドかローカルか': 'ローカル' },
          { '時代': '無線メッシュ', 'おおよその年': '2001–2010', '象徴的な技術': 'Z-Wave, Zigbee', 'クラウドかローカルか': 'ローカル' },
          { '時代': 'クラウド', 'おおよその年': '2011–2021', '象徴的な技術': 'Nest, Echo, HomeKit', 'クラウドかローカルか': 'クラウド' },
          { '時代': '相互運用', 'おおよその年': '2022–2025', '象徴的な技術': 'Matter, Thread', 'クラウドかローカルか': '両方' },
          { '時代': 'ローカルAI', 'おおよその年': '2026+', '象徴的な技術': 'ローカルLLM, Home Assistant', 'クラウドかローカルか': 'ローカル' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '最初のスマートホーム技術は何ですか？', a: '1975年に登場した X10 が、一般に最初の普及型ホームオートメーション技術とされています。家の既存の電気配線を通じて制御信号を送り、新たな配線なしにスイッチやモジュールが通信できるようにしました。' },
          { q: 'スマートホームはいつ主流になりましたか？', a: 'スマートホームは2010年代にクラウド接続機器で主流に達しました。2011年の Nest サーモスタットや、2014年の Amazon Echo のような音声アシスタントが、技術を幅広い人々に届けました。' },
          { q: 'Matter とは何ですか？', a: 'Matter は2022年に Connectivity Standards Alliance が立ち上げたメーカー横断のスマートホーム規格です。異なるブランドの機器を IP 上で協調させ、各メーカーのクラウドに依存せずローカルコントローラーを介してローカルで動作できます。' },
          { q: 'なぜスマートホーム技術はローカルへ戻っているのですか？', a: 'プライバシーへの懸念、機器を無効化するクラウド終了、そして実用的なオンデバイスAIの登場が、ユーザーをローカル制御へ押し戻しています。ローカル構成はデータを家に保ち、オフラインで動作し、メーカーのクラウドに左右されません。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルファースト時代の実践',
          '[スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared) — この歴史から生まれたプラットフォーム',
          '[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained) — 無線規格の詳細',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — なぜ振り子が戻るのか',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホームの歴史：X10からローカルAIへ（2026）',
      description: 'スマートホームの技術は1975年のX10電力線制御から始まり、Z-WaveとZigbeeの普及、NestとAmazon Echoによるクラウド時代を経て、Matter統一規格とローカルAI制御による本地回帰へと進化しました。2026年版で五十年の技術変遷を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/history-of-smart-home-technology',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'ホームオートメーションの歴史' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '最初のスマートホーム技術は何ですか？', acceptedAnswer: { '@type': 'Answer', text: '1975年に登場した X10 が一般に最初の普及型ホームオートメーション技術とされ、家の既存の電気配線を通じて制御信号を送りました。' } },
        { '@type': 'Question', name: 'スマートホームはいつ主流になりましたか？', acceptedAnswer: { '@type': 'Answer', text: '2010年代にクラウド接続機器で主流になりました——2011年の Nest サーモスタットや2014年の Amazon Echo のような音声アシスタント。' } },
        { '@type': 'Question', name: 'Matter とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '2022年に Connectivity Standards Alliance が立ち上げたメーカー横断のスマートホーム規格で、異なるブランドの機器を IP 上で協調させ、ローカルでも動作します。' } },
        { '@type': 'Question', name: 'なぜスマートホーム技術はローカルへ戻っているのですか？', acceptedAnswer: { '@type': 'Answer', text: 'プライバシーへの懸念、機器を無効化するクラウド終了、実用的なオンデバイスAIが、ユーザーをローカル制御へ押し戻しています。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'História da Casa Inteligente: do X10 à IA Local (2026)',
    seoTitle: 'História da Casa Inteligente: X10 à IA Local (2026)',
    intro:
      'A tecnologia de casa inteligente evoluiu do controle por linha elétrica X10 dos anos 1970, passando por Z-Wave e Zigbee, a era da nuvem de Nest e Echo, o padrão unificador Matter, até a virada atual rumo ao controle local com IA no dispositivo. Este guia traça esse arco e explica por que o pêndulo se afasta da dependência da nuvem em direção à autonomia local.',
    metaDescription:
      'História da casa inteligente do X10 (1975) à IA local: Z-Wave, Zigbee, a era da nuvem de Nest e Echo, Matter e a virada de 2026 rumo ao controle local.',
    twitterDescription:
      'Do X10 em 1975 à IA local em 2026: como a casa inteligente evoluiu por Z-Wave, Zigbee, a era da nuvem, Matter e de volta ao controle local.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Leitores que querem contexto sobre como a casa inteligente se desenvolveu',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'história da casa inteligente',
      'história da automação residencial',
      'história x10 automação',
      'evolução da casa inteligente',
      'quando começou a casa inteligente',
    ],
    leadAnswerBlock:
      '**A tecnologia de casa inteligente começou com o controle por linha elétrica X10 em 1975, passou para protocolos mesh sem fio (Z-Wave em 2001, Zigbee em meados dos anos 2000), entrou em uma era da nuvem com Nest (2011) e Amazon Echo (2014), ganhou o padrão Matter em 2022 e agora volta ao controle local com IA no dispositivo.** O arco é um pêndulo do local para a nuvem e de volta ao local.',
    quickAnswerTop: {
      pt: {
        question: 'Como a tecnologia de casa inteligente evoluiu?',
        answer:
          'A tecnologia de casa inteligente começou com a sinalização por linha elétrica X10 em 1975, passou para protocolos mesh sem fio como Z-Wave e Zigbee nos anos 2000, e depois entrou em uma era conectada à nuvem liderada por Nest e Amazon Echo nos anos 2010. O Matter chegou em 2022 para unificar dispositivos, e a mudança atual volta ao controle local com IA no dispositivo.',
        bullets: [
          'X10 (1975): primeira automação residencial em massa, por linhas elétricas',
          'Z-Wave (2001) e Zigbee (meados dos anos 2000): mesh sem fio',
          'Era da nuvem: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): um padrão de interoperabilidade unificador',
          '2026: virada de volta ao controle local mais IA no dispositivo',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'A era com fio', anchor: 'wired-era' },
      { label: 'Protocolos sem fio', anchor: 'wireless' },
      { label: 'A era da nuvem', anchor: 'cloud-era' },
      { label: 'Matter e interoperabilidade', anchor: 'matter' },
      { label: 'A volta ao local', anchor: 'swing-back' },
      { label: 'O que vem a seguir', anchor: 'whats-next' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A tecnologia de casa inteligente passou do controle por linha elétrica X10 em 1975, pelo mesh sem fio e uma era da nuvem, ao Matter e de volta ao controle local com IA.' },
      { type: 'plain-terms', content: 'A automação residencial é mais antiga do que a maioria pensa: começou nos anos 1970 com sinais enviados pela fiação da casa. Ao longo de décadas ficou sem fio, depois se mudou para as nuvens das empresas, e agora volta a rodar em hardware na sua própria casa, com IA local também.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O X10 (1975) foi o primeiro sistema de automação residencial em massa, enviando sinais por linhas elétricas',
          'Z-Wave (2001) e Zigbee (meados dos anos 2000) trouxeram redes mesh sem fio de baixo consumo',
          'A era da nuvem chegou com o Nest (2011) e o Amazon Echo e o Apple HomeKit (2014)',
          'O Matter (2022) adicionou um padrão de interoperabilidade entre fabricantes',
          'Em 2026 a tendência volta ao controle local com IA no dispositivo',
          'O padrão é um pêndulo: controle local, dependência da nuvem e de volta ao local',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: 'A era com fio: X10 e Insteon',
        content:
          '**A automação residencial começou em 1975 com o X10, que enviava sinais de controle pela fiação elétrica existente de uma casa.** Era local por necessidade — não havia nuvem — mas limitada e sujeita a interferências.',
        items: [
          '**X10 (1975):** desenvolvido pela Pico Electronics, permitia que interruptores e módulos se comunicassem por linhas elétricas.',
          '**Insteon:** mais tarde combinou sinalização por linha elétrica e sem fio para melhorar a confiabilidade.',
          '**Local por padrão:** tudo funcionava na casa, antecipando o ressurgimento local-first de hoje.',
        ],
      },
      wireless: {
        id: 'wireless',
        title: 'Protocolos sem fio: Z-Wave e Zigbee',
        content:
          '**Z-Wave (2001) e Zigbee (meados dos anos 2000) introduziram redes mesh sem fio de baixo consumo feitas para dispositivos a bateria e sensores.** Ambos continuam sendo protocolos locais essenciais hoje.',
        items: [
          '**Z-Wave (2001):** um protocolo mesh de baixo consumo projetado para dispositivos de controle confiáveis.',
          '**Zigbee (meados dos anos 2000):** um padrão mesh aberto de baixo consumo, muito usado para lâmpadas e sensores.',
          '**Ainda relevantes:** ambos são locais por padrão e sustentam os hubs modernos — veja [protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained).',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: 'A era da nuvem: Nest, Echo e HomeKit',
        content:
          '**Os anos 2010 levaram as casas inteligentes para a nuvem: o termostato Nest (2011), o Amazon Echo (2014) e o Apple HomeKit (2014) tornaram os dispositivos fáceis, mas dependentes de servidores do fabricante.** A comodidade subiu; a privacidade e a confiabilidade offline caíram.',
        items: [
          '**Nest (2011):** o termostato que aprende popularizou os dispositivos domésticos conectados à nuvem; o Google adquiriu o Nest em 2014.',
          '**Amazon Echo (2014):** o controle por voz via um assistente na nuvem se tornou popular.',
          '**Apple HomeKit (2014):** o framework da Apple mais voltado à privacidade, com algum controle local.',
          '**O compromisso:** a facilidade de configuração veio com dados saindo de casa e dependência das nuvens das empresas.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter e interoperabilidade',
        content:
          '**O Matter, lançado em 2022 pela Connectivity Standards Alliance, é um padrão entre fabricantes para que dispositivos de marcas diferentes funcionem juntos — e pode rodar localmente.** Ele enfrentou a fragmentação da era da nuvem.',
        items: [
          'O Matter funciona sobre IP e trabalha com Thread e Wi-Fi.',
          'Permite o controle local por meio de um controlador local, reduzindo a dependência da nuvem — veja [controle local com Matter](/pt/smart-home/matter-local-control-guide).',
          'Tornou muito mais fácil misturar marcas do que o antigo mosaico de aplicativos e pontes.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: 'A volta ao local em 2026',
        content:
          '**A mudança atual volta ao controle local, impulsionada por preocupações com privacidade, encerramentos de nuvem que inutilizam dispositivos e uma IA no dispositivo agora prática.** A autonomia local está se tornando a próxima era, e não um nicho.',
        items: [
          'Encerramentos de nuvem que desativam dispositivos empurraram os usuários para configurações local-first.',
          'A consciência sobre privacidade cresceu à medida que o alcance da coleta de dados na nuvem ficou claro — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          'A IA no dispositivo permite que um LLM local execute o controle da casa — veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: 'O que vem a seguir',
        content:
          '**A próxima era combina controle local com IA local: uma casa que executa automações e um assistente em linguagem natural inteiramente no seu próprio hardware.** O Matter facilita a interoperabilidade enquanto a IA local adiciona inteligência sem a nuvem.',
        columns: ['Era', 'Anos aprox.', 'Tecnologia definidora', 'Nuvem ou local'],
        rows: [
          { 'Era': 'Com fio', 'Anos aprox.': '1975–2000', 'Tecnologia definidora': 'X10, Insteon', 'Nuvem ou local': 'Local' },
          { 'Era': 'Mesh sem fio', 'Anos aprox.': '2001–2010', 'Tecnologia definidora': 'Z-Wave, Zigbee', 'Nuvem ou local': 'Local' },
          { 'Era': 'Nuvem', 'Anos aprox.': '2011–2021', 'Tecnologia definidora': 'Nest, Echo, HomeKit', 'Nuvem ou local': 'Nuvem' },
          { 'Era': 'Interoperabilidade', 'Anos aprox.': '2022–2025', 'Tecnologia definidora': 'Matter, Thread', 'Nuvem ou local': 'Ambos' },
          { 'Era': 'IA local', 'Anos aprox.': '2026+', 'Tecnologia definidora': 'LLMs locais, Home Assistant', 'Nuvem ou local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual foi a primeira tecnologia de casa inteligente?', a: 'O X10, lançado em 1975, é geralmente considerado a primeira tecnologia de automação residencial em massa. Ele enviava sinais de controle pela fiação elétrica existente de uma casa, permitindo que interruptores e módulos se comunicassem sem nova fiação.' },
          { q: 'Quando as casas inteligentes se tornaram populares?', a: 'As casas inteligentes chegaram ao grande público nos anos 2010 com dispositivos conectados à nuvem: o termostato Nest em 2011 e assistentes de voz como o Amazon Echo em 2014 tornaram a tecnologia acessível a um público amplo.' },
          { q: 'O que é o Matter?', a: 'O Matter é um padrão de casa inteligente entre fabricantes lançado em 2022 pela Connectivity Standards Alliance. Ele permite que dispositivos de marcas diferentes funcionem juntos sobre IP e pode rodar localmente por meio de um controlador local, em vez de depender da nuvem de cada fabricante.' },
          { q: 'Por que a tecnologia de casa inteligente está voltando ao local?', a: 'Preocupações com privacidade, encerramentos de nuvem que desativam dispositivos e a chegada de uma IA no dispositivo prática estão empurrando os usuários de volta ao controle local. Uma configuração local mantém os dados em casa, funciona offline e não fica à mercê da nuvem de um fabricante.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — a era local-first na prática',
          '[Ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared) — as plataformas que surgiram dessa história',
          '[Protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained) — os padrões sem fio em detalhe',
          '[Riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks) — por que o pêndulo volta',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'História da Casa Inteligente: do X10 à IA Local (2026)',
      description: 'História da casa inteligente do X10 (1975) à IA local: Z-Wave, Zigbee, a era da nuvem de Nest e Echo, Matter e a virada de 2026 rumo ao controle local.',
      url: 'https://www.promptquorum.com/pt/smart-home/history-of-smart-home-technology',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'História da automação residencial' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual foi a primeira tecnologia de casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'O X10, lançado em 1975, é considerado a primeira tecnologia de automação residencial em massa, enviando sinais de controle pela fiação elétrica existente de uma casa.' } },
        { '@type': 'Question', name: 'Quando as casas inteligentes se tornaram populares?', acceptedAnswer: { '@type': 'Answer', text: 'Nos anos 2010 com dispositivos conectados à nuvem — o termostato Nest em 2011 e assistentes de voz como o Amazon Echo em 2014.' } },
        { '@type': 'Question', name: 'O que é o Matter?', acceptedAnswer: { '@type': 'Answer', text: 'Um padrão de casa inteligente entre fabricantes lançado em 2022 pela Connectivity Standards Alliance. Ele permite que dispositivos de marcas diferentes funcionem juntos sobre IP e pode rodar localmente.' } },
        { '@type': 'Question', name: 'Por que a tecnologia de casa inteligente está voltando ao local?', acceptedAnswer: { '@type': 'Answer', text: 'Preocupações com privacidade, encerramentos de nuvem que desativam dispositivos e uma IA no dispositivo prática estão empurrando os usuários de volta ao controle local.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: '智能家居简史：从 X10 到本地AI（2026）',
    seoTitle: '智能家居技术发展完整史2026：X10电力线协议到本地人工智能控制的五十年',
    intro:
      '智能家居技术从1970年代的 X10 电力线控制，经由 Z-Wave 与 Zigbee、Nest 与 Echo 的云端时代、统一标准 Matter，演进到如今借助设备端AI回归本地控制。本指南梳理这一脉络，并解释为何钟摆正从云端依赖摆回本地自主。',
    metaDescription:
      '智能家居技术从1975年X10电力线协议起步，历经Z-Wave与Zigbee的低功耗网状发展、Nest与Echo引领的云端时代、Matter统一标准的推出，最终在2026年以设备端AI控制实现本地回归。本文全面梳理五十年演进脉络。',
    twitterDescription:
      '从1975年的 X10 到2026年的本地AI：智能家居如何经由 Z-Wave、Zigbee、云端时代、Matter，再摆回本地控制。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    audience: '想了解智能家居技术如何发展的读者',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      '智能家居历史',
      '智能家居简史',
      'x10 家庭自动化 历史',
      '智能家居 演进',
      '智能家居 起源',
    ],
    leadAnswerBlock:
      '**智能家居技术始于1975年的 X10 电力线控制，转向无线网状协议（2001年 Z-Wave、2000年代中期 Zigbee），随 Nest（2011）和 Amazon Echo（2014）进入云端时代，2022年得到 Matter 标准，如今正借助设备端AI摆回本地控制。** 这一脉络是一个钟摆：从本地到云端，再回到本地。',
    quickAnswerTop: {
      zh: {
        question: '智能家居技术是如何演进的？',
        answer:
          '智能家居技术始于1975年的 X10 电力线信号，2000年代转向 Z-Wave、Zigbee 等无线网状协议，2010年代进入由 Nest 和 Amazon Echo 主导的云端互联时代。Matter 于2022年问世以统一设备，而当前的转变正回归借助设备端AI的本地控制。',
        bullets: [
          'X10（1975）：首个大众化家庭自动化，经电力线',
          'Z-Wave（2001）与 Zigbee（2000年代中期）：无线网状',
          '云端时代：Nest（2011）、Amazon Echo（2014）、Apple HomeKit（2014）',
          'Matter（2022）：统一的互操作标准',
          '2026：回归本地控制并加上设备端AI',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '有线时代', anchor: 'wired-era' },
      { label: '无线协议', anchor: 'wireless' },
      { label: '云端时代', anchor: 'cloud-era' },
      { label: 'Matter 与互操作', anchor: 'matter' },
      { label: '摆回本地', anchor: 'swing-back' },
      { label: '接下来是什么', anchor: 'whats-next' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '智能家居技术从1975年的 X10 电力线控制，经无线网状和云端时代，走到 Matter 并摆回到本地AI控制。' },
      { type: 'plain-terms', content: '家庭自动化比多数人以为的更久远——它始于1970年代，通过房屋布线传送信号。数十年间它变得无线，随后迁入企业云端，如今又摆回到在你自家硬件上运行，并带有本地AI。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'X10（1975）是首个大众化的家庭自动化系统，通过电力线传送信号',
          'Z-Wave（2001）与 Zigbee（2000年代中期）带来低功耗无线网状网络',
          '云端时代随 Nest（2011）以及 Amazon Echo、Apple HomeKit（2014）到来',
          'Matter（2022）增加了跨厂商的互操作标准',
          '2026年趋势摆回到借助设备端AI的本地控制',
          '这一模式是钟摆：本地控制、云端依赖，再回到本地',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: '有线时代：X10 与 Insteon',
        content:
          '**家庭自动化始于1975年的 X10，它通过房屋既有的电气布线传送控制信号。** 因为当时没有云端，它必然是本地的，但功能有限且易受干扰。',
        items: [
          '**X10（1975）：** 由 Pico Electronics 开发，让开关与模块经电力线通信。',
          '**Insteon：** 后来结合电力线与无线信号以提升可靠性。',
          '**默认本地：** 一切都在家中运行，预示了今天的本地优先复兴。',
        ],
      },
      wireless: {
        id: 'wireless',
        title: '无线协议：Z-Wave 与 Zigbee',
        content:
          '**Z-Wave（2001）与 Zigbee（2000年代中期）引入了为电池设备和传感器打造的低功耗无线网状网络。** 两者至今仍是核心的本地协议。',
        items: [
          '**Z-Wave（2001）：** 为可靠控制设备设计的低功耗网状协议。',
          '**Zigbee（2000年代中期）：** 一种开放的低功耗网状标准，广泛用于灯泡和传感器。',
          '**仍然重要：** 二者默认本地，是现代中枢的基础——参见[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained)。',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: '云端时代：Nest、Echo 与 HomeKit',
        content:
          '**2010年代把智能家居推向云端：Nest 温控器（2011）、Amazon Echo（2014）和 Apple HomeKit（2014）让设备变得简单，却依赖厂商服务器。** 便利上升；隐私和离线可靠性下降。',
        items: [
          '**Nest（2011）：** 这款学习型温控器普及了云端互联的家居设备；Google 于2014年收购 Nest。',
          '**Amazon Echo（2014）：** 通过云端助手的语音控制成为主流。',
          '**Apple HomeKit（2014）：** Apple 更注重隐私的框架，带有部分本地控制。',
          '**取舍：** 设置的便利伴随着数据离开家门以及对企业云端的依赖。',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter 与互操作',
        content:
          '**Matter 于2022年由 Connectivity Standards Alliance 推出，是一个跨厂商标准，让不同品牌的设备协同工作——并且可以本地运行。** 它回应了云端时代的碎片化。',
        items: [
          'Matter 基于 IP 运行，并与 Thread 和 Wi-Fi 协作。',
          '它通过本地控制器实现本地控制，减少云端依赖——参见[Matter 本地控制](/zh/smart-home/matter-local-control-guide)。',
          '相比以往应用与网桥的拼凑，它让混用品牌容易得多。',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: '2026年摆回本地',
        content:
          '**当前的转变正回到本地控制，背后是隐私担忧、使设备作废的云端关停，以及如今实用的设备端AI。** 本地自主正成为下一个时代，而非小众。',
        items: [
          '使设备失效的云端关停，把用户推向本地优先方案。',
          '随着云端数据收集的范围变得清晰，隐私意识上升——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '设备端AI让本地LLM可以承担家庭控制——参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
        ],
      },
      whatsNext: {
        id: 'whats-next',
        title: '接下来是什么',
        content:
          '**下一个时代把本地控制与本地AI结合：一个完全在你自己的硬件上运行自动化和自然语言助手的家。** Matter 让互操作更容易，而本地AI在无云端的情况下增添智能。',
        columns: ['时代', '大致年份', '标志性技术', '云端还是本地'],
        rows: [
          { '时代': '有线', '大致年份': '1975–2000', '标志性技术': 'X10、Insteon', '云端还是本地': '本地' },
          { '时代': '无线网状', '大致年份': '2001–2010', '标志性技术': 'Z-Wave、Zigbee', '云端还是本地': '本地' },
          { '时代': '云端', '大致年份': '2011–2021', '标志性技术': 'Nest、Echo、HomeKit', '云端还是本地': '云端' },
          { '时代': '互操作', '大致年份': '2022–2025', '标志性技术': 'Matter、Thread', '云端还是本地': '两者' },
          { '时代': '本地AI', '大致年份': '2026+', '标志性技术': '本地LLM、Home Assistant', '云端还是本地': '本地' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '最早的智能家居技术是什么？', a: '1975年推出的 X10 通常被视为首个大众化的家庭自动化技术。它通过房屋既有的电气布线传送控制信号，让开关与模块无需新布线即可通信。' },
          { q: '智能家居何时走向大众？', a: '智能家居在2010年代随云端互联设备走向大众：2011年的 Nest 温控器与2014年的 Amazon Echo 等语音助手，让该技术触及广大人群。' },
          { q: 'Matter 是什么？', a: 'Matter 是2022年由 Connectivity Standards Alliance 推出的跨厂商智能家居标准。它让不同品牌的设备基于 IP 协同工作，并可通过本地控制器本地运行，而非依赖各厂商的云端。' },
          { q: '智能家居技术为何回到本地？', a: '隐私担忧、使设备失效的云端关停，以及实用的设备端AI的到来，正把用户推回本地控制。本地配置把数据留在家中、可离线工作，且不受某家厂商云端的左右。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地优先时代的实践',
          '[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared) — 从这段历史中诞生的平台',
          '[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained) — 无线标准细节',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 钟摆为何摆回',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居简史：从 X10 到本地AI（2026）',
      description: '智能家居技术从1975年X10电力线协议起步，历经Z-Wave与Zigbee的低功耗网状发展、Nest与Echo引领的云端时代、Matter统一标准的推出，最终在2026年以设备端AI控制实现本地回归。本文全面梳理五十年演进脉络。',
      url: 'https://www.promptquorum.com/zh/smart-home/history-of-smart-home-technology',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '家庭自动化历史' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '最早的智能家居技术是什么？', acceptedAnswer: { '@type': 'Answer', text: '1975年推出的 X10 通常被视为首个大众化的家庭自动化技术，通过房屋既有的电气布线传送控制信号。' } },
        { '@type': 'Question', name: '智能家居何时走向大众？', acceptedAnswer: { '@type': 'Answer', text: '在2010年代随云端互联设备走向大众——2011年的 Nest 温控器与2014年的 Amazon Echo 等语音助手。' } },
        { '@type': 'Question', name: 'Matter 是什么？', acceptedAnswer: { '@type': 'Answer', text: '2022年由 Connectivity Standards Alliance 推出的跨厂商智能家居标准，让不同品牌的设备基于 IP 协同工作，并可本地运行。' } },
        { '@type': 'Question', name: '智能家居技术为何回到本地？', acceptedAnswer: { '@type': 'Answer', text: '隐私担忧、使设备失效的云端关停，以及实用的设备端AI，正把用户推回本地控制。' } },
      ],
    },
  },
}
