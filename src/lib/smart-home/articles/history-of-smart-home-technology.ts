import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-en.webp',
    title: 'History of Home Automation: From X10 to Local AI (2026)',
    seoTitle: 'History of Home Automation & Smart Homes: 1966 to 2026',
    intro:
      'The history of home automation runs from 1960s prototypes and X10 powerline control (1975) through Z-Wave and Zigbee, the cloud era of Nest and Echo, and the Matter standard, to a swing back toward local control with on-device AI. This guide traces that arc, from the first smart home to today, and explains why the pendulum is moving from cloud dependence back to local autonomy.',
    metaDescription:
      'History of home automation and smart homes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest and Echo, Matter 1.5, and the swing back to local AI.',
    twitterDescription:
      'Home automation history from 1966 prototypes and X10 (1975) to Matter and local AI: how smart homes went local, then cloud, then local again.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Readers wanting context on how smart home tech developed',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'history of home automation',
      'first smart home',
      'history of smart home technology',
      'smart home history',
      'x10 home automation history',
      'evolution of smart home',
      'when did smart homes start',
    ],
    leadAnswerBlock:
      '**Home automation began with one-off 1960s prototypes such as ECHO IV (1966), became a consumer product with X10 powerline control in 1975, moved to wireless mesh (Z-Wave, Zigbee), entered a cloud era with Nest (2011) and Amazon Echo (2014), gained the Matter standard in 2022, and is now swinging back toward local control with on-device AI.** The arc is a pendulum from local, to cloud, and back to local.',
    quickAnswerTop: {
      en: {
        question: 'How did smart home technology evolve?',
        answer:
          'Smart home tech started with X10 powerline signalling in 1975, moved to wireless mesh protocols like Z-Wave and Zigbee in the 2000s, then entered a cloud-connected era led by Nest and Amazon Echo in the 2010s. Matter arrived in 2022 to unify devices, and the current shift is back toward local control with on-device AI.',
        bullets: [
          'Before X10 (1966–1969): one-off prototypes such as ECHO IV and the Kitchen Computer',
          'X10 (1975): first mainstream home automation, over powerlines',
          'Z-Wave (2001) and Zigbee (mid-2000s): wireless mesh',
          'Cloud era: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): a unifying interoperability standard',
          '2026: a swing back to local control plus on-device AI',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Before X10', anchor: 'before-x10' },
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
          'One-off prototypes such as ECHO IV (1966) came first; X10 (1975) made home automation a product',
          'X10 (1975) was the first mainstream home-automation system, sending signals over powerlines',
          'Z-Wave (2001) and Zigbee (mid-2000s) brought low-power wireless mesh networking',
          'The cloud era arrived with Nest (2011) and Amazon Echo and Apple HomeKit (2014)',
          'Matter (2022) added a cross-vendor interoperability standard',
          'In 2026 the trend is swinging back to local control with on-device AI',
          'The pattern is a pendulum: local control, to cloud dependence, and back to local',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'Before X10: The First Smart Homes (1960s)',
        content:
          '**The first smart home was ECHO IV, a one-off home computer built in 1966 by Westinghouse engineer Jim Sutherland that controlled household systems such as the TV, thermostat and air conditioning — but it never reached the market.** Home automation as a product category only began a decade later.',
        items: [
          '**ECHO IV (1966):** the "Electronic Computing Home Operator" ran household tasks and logged family finances; it was never sold commercially.',
          '**Kitchen Computer (1969):** Neiman Marcus listed a Honeywell-based kitchen computer for roughly $10,000 in its catalog; reports say no unit was ever sold.',
          '**Why it matters:** both were fully local, single-building machines — the same architecture the local-first revival returns to.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'Five eras of smart home technology from 1975 to 2026: X10 powerline control, Z-Wave and Zigbee wireless mesh, the Nest and Amazon Echo cloud era, the 2022 Matter standard, and 2026 local AI control.',
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
          'Matter 1.5, released in November 2025, added camera support with WebRTC streaming, a unified closures model (shades, gates, garage doors), soil sensors and energy-tariff data.',
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
          'Concrete cases: Nest ended service for the Revolv hub in May 2016, Insteon went offline reportedly without notice in April 2022, and Google ended support for 1st- and 2nd-generation Nest Learning Thermostats on October 25, 2025, leaving them manual-only.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'The 50-year smart home pendulum: local X10 and Z-Wave control from 1975–2010, the Nest and Amazon Echo cloud era from 2011–2021, and a swing back to local AI control with Matter in 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: "What's Next",
        content:
          '**The next era pairs local control with local AI: a home that runs automations and a natural-language assistant entirely on your own hardware.** Matter eases interoperability while local AI adds intelligence without the cloud.',
        columns: ['Era', 'Approx. years', 'Defining tech', 'Cloud or local'],
        rows: [
          { 'Era': 'Prototypes', 'Approx. years': '1966–1974', 'Defining tech': 'ECHO IV, Kitchen Computer', 'Cloud or local': 'Local' },
          { 'Era': 'Wired', 'Approx. years': '1975–2000', 'Defining tech': 'X10, Insteon', 'Cloud or local': 'Local' },
          { 'Era': 'Wireless mesh', 'Approx. years': '2001–2010', 'Defining tech': 'Z-Wave, Zigbee', 'Cloud or local': 'Local' },
          { 'Era': 'Cloud', 'Approx. years': '2011–2021', 'Defining tech': 'Nest, Echo, HomeKit', 'Cloud or local': 'Cloud' },
          { 'Era': 'Interoperability', 'Approx. years': '2022–2025', 'Defining tech': 'Matter, Thread', 'Cloud or local': 'Both' },
          { 'Era': 'Local AI', 'Approx. years': '2026+', 'Defining tech': 'Local LLMs, Home Assistant', 'Cloud or local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What was the first smart home technology?', a: 'X10, introduced in 1975, is generally considered the first mainstream home-automation technology. It sent control signals over a home\'s existing electrical wiring, letting switches and modules communicate without new cabling.' },
          { q: 'When did smart homes go mainstream?', a: 'Smart homes reached the mainstream in the 2010s with cloud-connected devices: the Nest thermostat in 2011 and voice assistants like the Amazon Echo in 2014 made the technology accessible to a broad audience.' },
          { q: 'What is Matter?', a: 'Matter is a cross-vendor smart home standard launched in 2022 by the Connectivity Standards Alliance. It lets devices from different brands work together over IP, and it can run locally through a local controller rather than depending on each vendor\'s cloud.' },
          { q: 'Why is smart home tech moving back to local?', a: 'Privacy concerns, cloud shutdowns that disable devices, and the arrival of practical on-device AI are pushing users back toward local control. A local setup keeps data at home, works offline, and is not at the mercy of a vendor\'s cloud.' },
          { q: 'What is the history of home automation?', a: 'Home automation began with one-off prototypes in the 1960s, such as ECHO IV in 1966, became a consumer product with X10 powerline control in 1975, went wireless with Z-Wave and Zigbee in the 2000s, moved to the cloud with Nest (2011) and Amazon Echo (2014), gained the Matter standard in 2022, and is now returning to local control with on-device AI.' },
          { q: 'What was the first smart home?', a: 'The earliest documented example is ECHO IV, built in 1966 by Westinghouse engineer Jim Sutherland to control household systems such as the thermostat. It was never sold, so X10 (1975) is usually cited as the first commercially available home automation system.' },
          { q: 'Which cloud shutdowns left smart home devices without features?', a: 'Notable cases are the Revolv hub (service ended by Nest in May 2016), Insteon (offline reportedly without notice in April 2022) and the 1st- and 2nd-generation Nest Learning Thermostats (support ended October 25, 2025, leaving only manual control on the device).' },
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
      headline: 'History of Home Automation: From X10 to Local AI (2026)',
      description: 'History of home automation and smart homes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest and Echo, Matter 1.5, and the swing back to local AI.',
      url: 'https://www.promptquorum.com/smart-home/history-of-smart-home-technology',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'Home automation history' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'What is the history of home automation?', acceptedAnswer: { '@type': 'Answer', text: 'From 1960s prototypes like ECHO IV (1966) to X10 in 1975, wireless mesh, the cloud era, Matter in 2022, and a return to local control with on-device AI.' } },
        { '@type': 'Question', name: 'What was the first smart home?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV (1966) is the earliest documented smart home but was never sold; X10 (1975) is usually cited as the first commercial system.' } },
        { '@type': 'Question', name: 'Which cloud shutdowns left smart home devices without features?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (May 2016), Insteon (April 2022) and 1st- and 2nd-generation Nest Learning Thermostats (October 25, 2025).' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-ar.webp',
    title: 'تاريخ أتمتة المنزل: من X10 إلى الذكاء الاصطناعي المحلي (2026)',
    seoTitle: 'تاريخ أتمتة المنزل والمنازل الذكية: من 1966 إلى 2026',
    intro:
      'يمتد تاريخ أتمتة المنزل من نماذج أولية في الستينيات والتحكم عبر خطوط الطاقة X10 (1975) مرورًا بـ Z-Wave وZigbee وعصر السحابة مع Nest وEcho ومعيار Matter، وصولًا إلى عودة نحو التحكم المحلي بالذكاء الاصطناعي على الجهاز. يتتبع هذا الدليل هذا المسار من أول منزل ذكي حتى اليوم، ويشرح لماذا يعود البندول من الاعتماد على السحابة إلى الاستقلالية المحلية.',
    metaDescription:
      'تاريخ أتمتة المنزل والمنازل الذكية: ECHO IV (1966) وX10 (1975) وZ-Wave وZigbee وNest وEcho وMatter 1.5 والعودة إلى الذكاء الاصطناعي المحلي.',
    twitterDescription:
      'تاريخ أتمتة المنزل من نماذج 1966 وX10 (1975) إلى Matter والذكاء الاصطناعي المحلي: محلي ثم سحابي ثم محلي من جديد.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'القراء الراغبون في فهم سياق تطور تقنية المنزل الذكي',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'تاريخ أتمتة المنزل',
      'أول منزل ذكي',
      'تاريخ تقنية المنزل الذكي',
      'تاريخ المنزل الذكي',
      'تاريخ أتمتة المنزل x10',
      'تطور المنزل الذكي',
      'متى بدأت المنازل الذكية',
    ],
    leadAnswerBlock:
      '**بدأت أتمتة المنزل بنماذج أولية فردية في الستينيات مثل ECHO IV (1966)، وأصبحت منتجًا استهلاكيًا مع التحكم عبر خطوط الطاقة X10 عام 1975، ثم انتقلت إلى الشبكات اللاسلكية المتشابكة (Z-Wave وZigbee)، ودخلت عصر السحابة مع Nest (2011) وAmazon Echo (2014)، وحصلت على معيار Matter عام 2022، وهي تعود الآن نحو التحكم المحلي بالذكاء الاصطناعي على الجهاز.** المسار بندول: من المحلي إلى السحابة ثم العودة إلى المحلي.',
    quickAnswerTop: {
      ar: {
        question: 'كيف تطورت تقنية المنزل الذكي؟',
        answer:
          'بدأت تقنية المنزل الذكي بإشارات X10 الكهربائية عام 1975، ثم انتقلت في العقد الأول من الألفية الثالثة إلى بروتوكولات الشبكة اللاسلكية مثل Z-Wave وZigbee، ثم دخلت في العقد الثاني حقبة السحابة بقيادة Nest وAmazon Echo. وصل Matter عام 2022 لتوحيد الأجهزة، والتحول الحالي يعود نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز.',
        bullets: [
          'قبل X10 (1966–1969): نماذج أولية فردية مثل ECHO IV وKitchen Computer',
          'X10 (1975): أول أتمتة منزلية واسعة الانتشار، عبر الأسلاك الكهربائية',
          'Z-Wave (2001) وZigbee (منتصف العقد الأول): شبكة لاسلكية متشابكة',
          'حقبة السحابة: Nest (2011)، Amazon Echo (2014)، Apple HomeKit (2014)',
          'Matter (2022): معيار تشغيل بيني موحّد',
          '2026: تأرجح نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'قبل X10', anchor: 'before-x10' },
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
          'جاءت نماذج أولية فردية مثل ECHO IV (1966) أولًا، ثم جعل X10 (1975) أتمتة المنزل منتجًا',
          'X10 (1975) كان أول نظام أتمتة منزلية واسع الانتشار، يرسل الإشارات عبر الأسلاك الكهربائية',
          'Z-Wave (2001) وZigbee (منتصف العقد الأول) جلبا شبكة لاسلكية منخفضة الطاقة',
          'حقبة السحابة بدأت مع Nest (2011) وAmazon Echo وApple HomeKit (2014)',
          'Matter (2022) أضاف معيار تشغيل بيني بين الشركات',
          'في 2026 الاتجاه يتأرجح نحو التحكم المحلي مع الذكاء الاصطناعي على الجهاز',
          'النمط هو بندول: تحكم محلي، ثم اعتماد على السحابة، ثم عودة إلى المحلي',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'قبل X10: أولى المنازل الذكية (الستينيات)',
        content:
          '**كان أول منزل ذكي هو ECHO IV، وهو حاسوب منزلي فريد بناه عام 1966 المهندس في Westinghouse جيم ساذرلاند، وكان يتحكم في أنظمة منزلية مثل التلفاز والثرموستات والتكييف، لكنه لم يصل إلى السوق قط.** ولم تبدأ أتمتة المنزل كفئة منتجات إلا بعد عقد من الزمن.',
        items: [
          '**ECHO IV (1966):** كان «Electronic Computing Home Operator» ينفذ مهام منزلية ويسجل مالية الأسرة؛ ولم يُباع تجاريًا قط.',
          '**Kitchen Computer (1969):** عرضت Neiman Marcus في كتالوجها حاسوب مطبخ مبنيًا على Honeywell بنحو 10,000 دولار؛ وتفيد التقارير بأنه لم تُبع أي وحدة.',
          '**لماذا يهم ذلك:** كلاهما كان جهازًا محليًا بالكامل لمبنى واحد — وهي البنية نفسها التي يعود إليها توجه المحلي أولًا.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'خمس حقب في تقنية المنزل الذكي من 1975 إلى 2026: التحكم الكهربائي X10، الشبكة اللاسلكية Z-Wave وZigbee، حقبة السحابة مع Nest وAmazon Echo، معيار Matter لعام 2022، والتحكم بالذكاء الاصطناعي المحلي في 2026.',
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
          'أضاف Matter 1.5، الصادر في نوفمبر 2025، دعم الكاميرات مع بث WebRTC، ونموذجًا موحدًا للإغلاقات (الستائر والبوابات وأبواب المرآب)، ومستشعرات التربة وبيانات تعرفة الطاقة.',
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
          'حالات ملموسة: أنهت Nest خدمة موزّع Revolv في مايو 2016، وتوقفت Insteon عن العمل بحسب التقارير دون إنذار في أبريل 2022، وأنهت Google في 25 أكتوبر 2025 دعم ثرموستات Nest Learning من الجيلين الأول والثاني ليبقى التحكم اليدوي فقط.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'بندول المنزل الذكي على مدى 50 عامًا: تحكم محلي بـ X10 وZ-Wave من 1975 إلى 2010، حقبة السحابة مع Nest وAmazon Echo من 2011 إلى 2021، وعودة إلى التحكم بالذكاء الاصطناعي المحلي مع Matter في 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: 'ما التالي',
        content:
          '**الحقبة التالية تجمع التحكم المحلي مع الذكاء الاصطناعي المحلي: منزل يشغّل الأتمتة ومساعدًا بلغة طبيعية بالكامل على جهازك الخاص.** Matter يُسهّل التشغيل البيني بينما يضيف الذكاء الاصطناعي المحلي الذكاء دون السحابة.',
        columns: ['الحقبة', 'السنوات التقريبية', 'التقنية المحورية', 'سحابة أم محلي'],
        rows: [
          { 'الحقبة': 'نماذج أولية', 'السنوات التقريبية': '1966–1974', 'التقنية المحورية': 'ECHO IV وKitchen Computer', 'سحابة أم محلي': 'محلي' },
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
          { q: 'ما تاريخ أتمتة المنزل؟', a: 'بدأت أتمتة المنزل بنماذج أولية فردية في الستينيات مثل ECHO IV عام 1966، وأصبحت منتجًا استهلاكيًا مع التحكم عبر خطوط الطاقة X10 عام 1975، ثم انتقلت إلى اللاسلكي مع Z-Wave وZigbee في الألفينيات، وإلى السحابة مع Nest (2011) وAmazon Echo (2014)، وحصلت على معيار Matter عام 2022، وهي تعود الآن إلى التحكم المحلي بالذكاء الاصطناعي على الجهاز.' },
          { q: 'ما أول منزل ذكي؟', a: 'أقدم مثال موثق هو ECHO IV الذي بناه عام 1966 المهندس في Westinghouse جيم ساذرلاند للتحكم في أنظمة منزلية مثل الثرموستات. لم يُباع قط، لذا يُذكر X10 (1975) عادةً كأول نظام لأتمتة المنزل متاح تجاريًا.' },
          { q: 'ما حالات إغلاق السحابة التي تركت الأجهزة المنزلية الذكية بلا ميزات؟', a: 'من الحالات البارزة موزّع Revolv (أنهت Nest خدمته في مايو 2016)، وInsteon (توقفت بحسب التقارير دون إنذار في أبريل 2022)، وثرموستات Nest Learning من الجيلين الأول والثاني (انتهى الدعم في 25 أكتوبر 2025 ولم يبقَ سوى التحكم اليدوي على الجهاز).' },
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
      headline: 'تاريخ أتمتة المنزل: من X10 إلى الذكاء الاصطناعي المحلي (2026)',
      description: 'تاريخ أتمتة المنزل والمنازل الذكية: ECHO IV (1966) وX10 (1975) وZ-Wave وZigbee وNest وEcho وMatter 1.5 والعودة إلى الذكاء الاصطناعي المحلي.',
      url: 'https://www.promptquorum.com/ar/smart-home/history-of-smart-home-technology',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'تاريخ أتمتة المنزل' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'ما تاريخ أتمتة المنزل؟', acceptedAnswer: { '@type': 'Answer', text: 'من نماذج مثل ECHO IV (1966) إلى X10 عام 1975 ثم الشبكات اللاسلكية وعصر السحابة وMatter عام 2022 والعودة إلى التحكم المحلي بالذكاء الاصطناعي على الجهاز.' } },
        { '@type': 'Question', name: 'ما أول منزل ذكي؟', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV (1966) أقدم منزل ذكي موثق لكنه لم يُباع؛ ويُذكر X10 (1975) عادةً كأول نظام تجاري.' } },
        { '@type': 'Question', name: 'ما حالات إغلاق السحابة التي تركت الأجهزة المنزلية الذكية بلا ميزات؟', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (مايو 2016) وInsteon (أبريل 2022) وثرموستات Nest Learning من الجيلين الأول والثاني (25 أكتوبر 2025).' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-de.webp',
    title: 'Geschichte der Hausautomation: Von X10 zur lokalen KI (2026)',
    seoTitle: 'Geschichte der Hausautomation & Smart Homes: 1966 bis 2026',
    intro:
      'Die Geschichte der Hausautomation reicht von Prototypen der 1960er und der X10-Powerline-Steuerung (1975) über Z-Wave und Zigbee, die Cloud-Ära von Nest und Echo und den Matter-Standard bis zur heutigen Rückkehr zur lokalen Steuerung mit On-Device-KI. Dieser Leitfaden zeichnet den Bogen vom ersten Smart Home bis heute nach und erklärt, warum das Pendel von der Cloud-Abhängigkeit zurück zur lokalen Autonomie schwingt.',
    metaDescription:
      'Geschichte der Hausautomation und Smart Homes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest und Echo, Matter 1.5 und die Rückkehr zur lokalen KI.',
    twitterDescription:
      'Hausautomation von Prototypen 1966 und X10 (1975) bis Matter und lokaler KI: wie Smart Homes erst lokal, dann Cloud, dann wieder lokal wurden.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Leser, die Kontext zur Entwicklung der Smart-Home-Technik suchen',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'geschichte der hausautomation',
      'erstes smart home',
      'geschichte des smart home',
      'smart home historie',
      'x10 heimautomatisierung geschichte',
      'entwicklung smart home',
      'wann begann smart home',
    ],
    leadAnswerBlock:
      '**Die Hausautomation begann mit einzelnen Prototypen der 1960er wie ECHO IV (1966), wurde 1975 mit der X10-Powerline-Steuerung zum Verbraucherprodukt, wechselte zu drahtlosem Mesh (Z-Wave, Zigbee), trat mit Nest (2011) und Amazon Echo (2014) in eine Cloud-Ära ein, erhielt 2022 den Matter-Standard und schwingt nun zurück zur lokalen Steuerung mit On-Device-KI.** Der Bogen ist ein Pendel von lokal zu Cloud und zurück zu lokal.',
    quickAnswerTop: {
      de: {
        question: 'Wie hat sich die Smart-Home-Technik entwickelt?',
        answer:
          'Die Smart-Home-Technik begann 1975 mit der X10-Powerline-Signalisierung, wechselte in den 2000ern zu drahtlosen Mesh-Protokollen wie Z-Wave und Zigbee und trat in den 2010ern in eine cloud-vernetzte Ära unter Führung von Nest und Amazon Echo ein. Matter kam 2022 zur Vereinheitlichung, und der aktuelle Wandel führt zurück zur lokalen Steuerung mit On-Device-KI.',
        bullets: [
          'Vor X10 (1966–1969): einzelne Prototypen wie ECHO IV und der Kitchen Computer',
          'X10 (1975): erste verbreitete Heimautomatisierung über Stromleitungen',
          'Z-Wave (2001) und Zigbee (Mitte der 2000er): drahtloses Mesh',
          'Cloud-Ära: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): ein vereinheitlichender Interoperabilitätsstandard',
          '2026: Rückkehr zur lokalen Steuerung plus On-Device-KI',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Vor X10', anchor: 'before-x10' },
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
          'Einzelne Prototypen wie ECHO IV (1966) kamen zuerst; X10 (1975) machte Hausautomation zum Produkt',
          'X10 (1975) war das erste verbreitete Heimautomatisierungssystem und sendete Signale über Stromleitungen',
          'Z-Wave (2001) und Zigbee (Mitte der 2000er) brachten stromsparende drahtlose Mesh-Netze',
          'Die Cloud-Ära kam mit Nest (2011) sowie Amazon Echo und Apple HomeKit (2014)',
          'Matter (2022) fügte einen herstellerübergreifenden Interoperabilitätsstandard hinzu',
          '2026 schwingt der Trend zurück zur lokalen Steuerung mit On-Device-KI',
          'Das Muster ist ein Pendel: lokale Steuerung, Cloud-Abhängigkeit und zurück zu lokal',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'Vor X10: Die ersten Smart Homes (1960er)',
        content:
          '**Das erste Smart Home war ECHO IV, ein 1966 vom Westinghouse-Ingenieur Jim Sutherland gebauter Heimcomputer, der Haushaltssysteme wie Fernseher, Thermostat und Klimaanlage steuerte – er kam jedoch nie auf den Markt.** Hausautomation als Produktkategorie entstand erst ein Jahrzehnt später.',
        items: [
          '**ECHO IV (1966):** der „Electronic Computing Home Operator“ übernahm Haushaltsaufgaben und führte die Familienfinanzen; er wurde nie kommerziell verkauft.',
          '**Kitchen Computer (1969):** Neiman Marcus bot im Katalog einen Küchencomputer auf Honeywell-Basis für rund 10.000 US-Dollar an; Berichten zufolge wurde nie ein Gerät verkauft.',
          '**Warum das zählt:** beide waren vollständig lokale Maschinen für ein einzelnes Gebäude – dieselbe Architektur, zu der die Local-First-Wiederbelebung zurückkehrt.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'Fünf Epochen der Smart-Home-Technik von 1975 bis 2026: X10-Powerline-Steuerung, Z-Wave- und Zigbee-Funknetz, die Cloud-Ära von Nest und Amazon Echo, der Matter-Standard von 2022 und die lokale KI-Steuerung ab 2026.',
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
          'Matter 1.5, im November 2025 veröffentlicht, ergänzte Kameraunterstützung mit WebRTC-Streaming, ein einheitliches Closures-Modell (Jalousien, Tore, Garagentore), Bodensensoren und Energietarifdaten.',
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
          'Konkrete Fälle: Nest stellte den Dienst für den Revolv-Hub im Mai 2016 ein, Insteon ging im April 2022 laut Berichten ohne Vorwarnung offline, und Google beendete am 25. Oktober 2025 den Support für Nest Learning Thermostats der 1. und 2. Generation, die danach nur noch manuell bedienbar sind.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'Das 50-jährige Smart-Home-Pendel: lokale X10- und Z-Wave-Steuerung von 1975–2010, die Cloud-Ära von Nest und Amazon Echo von 2011–2021, und die Rückkehr zur lokalen KI-Steuerung mit Matter im Jahr 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Was kommt als Nächstes',
        content:
          '**Die nächste Ära verbindet lokale Steuerung mit lokaler KI: ein Zuhause, das Automatisierungen und einen natürlichsprachlichen Assistenten vollständig auf eigener Hardware ausführt.** Matter erleichtert die Interoperabilität, während lokale KI Intelligenz ohne Cloud hinzufügt.',
        columns: ['Ära', 'Ungefähre Jahre', 'Prägende Technik', 'Cloud oder lokal'],
        rows: [
          { 'Ära': 'Prototypen', 'Ungefähre Jahre': '1966–1974', 'Prägende Technik': 'ECHO IV, Kitchen Computer', 'Cloud oder lokal': 'Lokal' },
          { 'Ära': 'Kabelgebunden', 'Ungefähre Jahre': '1975–2000', 'Prägende Technik': 'X10, Insteon', 'Cloud oder lokal': 'Lokal' },
          { 'Ära': 'Drahtloses Mesh', 'Ungefähre Jahre': '2001–2010', 'Prägende Technik': 'Z-Wave, Zigbee', 'Cloud oder lokal': 'Lokal' },
          { 'Ära': 'Cloud', 'Ungefähre Jahre': '2011–2021', 'Prägende Technik': 'Nest, Echo, HomeKit', 'Cloud oder lokal': 'Cloud' },
          { 'Ära': 'Interoperabilität', 'Ungefähre Jahre': '2022–2025', 'Prägende Technik': 'Matter, Thread', 'Cloud oder lokal': 'Beides' },
          { 'Ära': 'Lokale KI', 'Ungefähre Jahre': '2026+', 'Prägende Technik': 'Lokale LLMs, Home Assistant', 'Cloud oder lokal': 'Lokal' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was war die erste Smart-Home-Technik?', a: 'X10, eingeführt 1975, gilt allgemein als erste verbreitete Heimautomatisierungstechnik. Es sendete Steuersignale über die vorhandene Elektroinstallation eines Hauses und ließ Schalter und Module ohne neue Verkabelung kommunizieren.' },
          { q: 'Wann wurden Smart Homes Mainstream?', a: 'Smart Homes erreichten in den 2010ern den Mainstream mit cloud-vernetzten Geräten: das Nest-Thermostat 2011 und Sprachassistenten wie der Amazon Echo 2014 machten die Technik einem breiten Publikum zugänglich.' },
          { q: 'Was ist Matter?', a: 'Matter ist ein herstellerübergreifender Smart-Home-Standard, 2022 von der Connectivity Standards Alliance eingeführt. Er lässt Geräte verschiedener Marken über IP zusammenarbeiten und kann lokal über einen lokalen Controller laufen, statt von der Cloud jedes Herstellers abzuhängen.' },
          { q: 'Warum wandert die Smart-Home-Technik zurück zum Lokalen?', a: 'Datenschutzbedenken, Cloud-Abschaltungen, die Geräte deaktivieren, und das Aufkommen praxistauglicher On-Device-KI drängen Nutzer zurück zur lokalen Steuerung. Eine lokale Lösung hält Daten zu Hause, funktioniert offline und ist nicht der Cloud eines Herstellers ausgeliefert.' },
          { q: 'Wie ist die Geschichte der Hausautomation?', a: 'Die Hausautomation begann in den 1960ern mit einzelnen Prototypen wie ECHO IV (1966), wurde 1975 mit der X10-Powerline-Steuerung zum Verbraucherprodukt, wurde in den 2000ern mit Z-Wave und Zigbee drahtlos, zog mit Nest (2011) und Amazon Echo (2014) in die Cloud, erhielt 2022 den Matter-Standard und kehrt nun mit On-Device-KI zur lokalen Steuerung zurück.' },
          { q: 'Was war das erste Smart Home?', a: 'Das früheste dokumentierte Beispiel ist ECHO IV, 1966 vom Westinghouse-Ingenieur Jim Sutherland gebaut, um Haushaltssysteme wie das Thermostat zu steuern. Es wurde nie verkauft; daher gilt X10 (1975) meist als erstes kommerziell erhältliches Hausautomationssystem.' },
          { q: 'Welche Cloud-Abschaltungen ließen Smart-Home-Geräte ohne Funktionen zurück?', a: 'Bekannte Fälle sind der Revolv-Hub (Dienst von Nest im Mai 2016 eingestellt), Insteon (April 2022 laut Berichten ohne Vorwarnung offline) und die Nest Learning Thermostats der 1. und 2. Generation (Support am 25. Oktober 2025 beendet, nur noch manuelle Bedienung am Gerät).' },
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
      headline: 'Geschichte der Hausautomation: Von X10 zur lokalen KI (2026)',
      description: 'Geschichte der Hausautomation und Smart Homes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest und Echo, Matter 1.5 und die Rückkehr zur lokalen KI.',
      url: 'https://www.promptquorum.com/de/smart-home/history-of-smart-home-technology',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'Geschichte der Heimautomatisierung' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'Wie ist die Geschichte der Hausautomation?', acceptedAnswer: { '@type': 'Answer', text: 'Von Prototypen wie ECHO IV (1966) über X10 1975, drahtloses Mesh, die Cloud-Ära und Matter 2022 zurück zur lokalen Steuerung mit On-Device-KI.' } },
        { '@type': 'Question', name: 'Was war das erste Smart Home?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV (1966) ist das früheste dokumentierte Smart Home, wurde aber nie verkauft; X10 (1975) gilt meist als erstes kommerzielles System.' } },
        { '@type': 'Question', name: 'Welche Cloud-Abschaltungen ließen Smart-Home-Geräte ohne Funktionen zurück?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (Mai 2016), Insteon (April 2022) und Nest Learning Thermostats der 1. und 2. Generation (25. Oktober 2025).' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-es.webp',
    title: 'Historia de la domótica: de X10 a la IA local (2026)',
    seoTitle: 'Historia de la domótica y las casas inteligentes: 1966-2026',
    intro:
      'La historia de la domótica va de los prototipos de los años 60 y el control por línea eléctrica X10 (1975) a Z-Wave y Zigbee, la era de la nube de Nest y Echo y el estándar Matter, hasta un giro de vuelta al control local con IA en el dispositivo. Esta guía recorre ese arco, desde la primera casa inteligente hasta hoy, y explica por qué el péndulo vuelve de la dependencia de la nube a la autonomía local.',
    metaDescription:
      'Historia de la domótica y las casas inteligentes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest y Echo, Matter 1.5 y el regreso a la IA local.',
    twitterDescription:
      'La domótica de los prototipos de 1966 y X10 (1975) a Matter y la IA local: primero local, luego nube y de nuevo local.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Lectores que quieren contexto sobre cómo se desarrolló el smart home',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'historia de la domótica',
      'primera casa inteligente',
      'historia del smart home',
      'historia de la domótica',
      'historia x10 domótica',
      'evolución del smart home',
      'cuándo empezaron los smart home',
    ],
    leadAnswerBlock:
      '**La domótica empezó con prototipos únicos de los años 60 como ECHO IV (1966), se convirtió en producto de consumo con el control por línea eléctrica X10 en 1975, pasó a la malla inalámbrica (Z-Wave, Zigbee), entró en la era de la nube con Nest (2011) y Amazon Echo (2014), obtuvo el estándar Matter en 2022 y ahora vuelve hacia el control local con IA en el dispositivo.** El arco es un péndulo: de lo local a la nube y de nuevo a lo local.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo evolucionó la tecnología del smart home?',
        answer:
          'La tecnología del smart home empezó con la señalización por línea eléctrica X10 en 1975, pasó a protocolos mesh inalámbricos como Z-Wave y Zigbee en los 2000, y luego entró en una era conectada a la nube liderada por Nest y Amazon Echo en los 2010. Matter llegó en 2022 para unificar dispositivos, y el cambio actual vuelve al control local con IA en el dispositivo.',
        bullets: [
          'Antes de X10 (1966-1969): prototipos únicos como ECHO IV y el Kitchen Computer',
          'X10 (1975): primera domótica masiva, por líneas eléctricas',
          'Z-Wave (2001) y Zigbee (mediados de los 2000): mesh inalámbrico',
          'Era de la nube: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): un estándar de interoperabilidad unificador',
          '2026: giro de vuelta al control local más IA en el dispositivo',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Antes de X10', anchor: 'before-x10' },
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
          'Prototipos únicos como ECHO IV (1966) llegaron primero; X10 (1975) convirtió la domótica en producto',
          'X10 (1975) fue el primer sistema de domótica masivo, enviando señales por líneas eléctricas',
          'Z-Wave (2001) y Zigbee (mediados de los 2000) trajeron redes mesh inalámbricas de bajo consumo',
          'La era de la nube llegó con Nest (2011) y Amazon Echo y Apple HomeKit (2014)',
          'Matter (2022) añadió un estándar de interoperabilidad entre fabricantes',
          'En 2026 la tendencia gira de vuelta al control local con IA en el dispositivo',
          'El patrón es un péndulo: control local, dependencia de la nube y de vuelta a lo local',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'Antes de X10: las primeras casas inteligentes (años 60)',
        content:
          '**La primera casa inteligente fue ECHO IV, un ordenador doméstico único construido en 1966 por el ingeniero de Westinghouse Jim Sutherland que controlaba sistemas del hogar como la televisión, el termostato y el aire acondicionado, pero nunca llegó al mercado.** La domótica como categoría de producto solo empezó una década después.',
        items: [
          '**ECHO IV (1966):** el «Electronic Computing Home Operator» ejecutaba tareas domésticas y llevaba las finanzas familiares; nunca se vendió comercialmente.',
          '**Kitchen Computer (1969):** Neiman Marcus ofreció en su catálogo un ordenador de cocina basado en Honeywell por unos 10 000 dólares; según los informes, no se vendió ninguna unidad.',
          '**Por qué importa:** ambos eran máquinas totalmente locales para un solo edificio, la misma arquitectura a la que vuelve el movimiento local-first.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'Cinco eras de la tecnología del smart home de 1975 a 2026: control por línea eléctrica X10, mesh inalámbrico Z-Wave y Zigbee, la era de la nube de Nest y Amazon Echo, el estándar Matter de 2022 y el control con IA local en 2026.',
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
          'Matter 1.5, publicado en noviembre de 2025, añadió compatibilidad con cámaras con streaming WebRTC, un modelo unificado de cierres (persianas, portones, puertas de garaje), sensores de suelo y datos de tarifas energéticas.',
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
          'Casos concretos: Nest puso fin al servicio del hub Revolv en mayo de 2016, Insteon se desconectó según los usuarios sin aviso en abril de 2022 y Google terminó el 25 de octubre de 2025 el soporte de los termostatos Nest Learning de 1.ª y 2.ª generación, que quedaron solo en modo manual.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'El péndulo de 50 años del smart home: control local con X10 y Z-Wave de 1975 a 2010, la era de la nube de Nest y Amazon Echo de 2011 a 2021, y el giro de vuelta al control con IA local con Matter en 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Qué viene después',
        content:
          '**La próxima era combina control local con IA local: un hogar que ejecuta automatizaciones y un asistente en lenguaje natural enteramente en tu propio hardware.** Matter facilita la interoperabilidad mientras la IA local añade inteligencia sin la nube.',
        columns: ['Era', 'Años aprox.', 'Tecnología definitoria', 'Nube o local'],
        rows: [
          { 'Era': 'Prototipos', 'Años aprox.': '1966–1974', 'Tecnología definitoria': 'ECHO IV, Kitchen Computer', 'Nube o local': 'Local' },
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
          { q: '¿Cuál es la historia de la domótica?', a: 'La domótica empezó con prototipos únicos en los años 60, como ECHO IV en 1966, se convirtió en producto de consumo con el control por línea eléctrica X10 en 1975, pasó a lo inalámbrico con Z-Wave y Zigbee en los 2000, a la nube con Nest (2011) y Amazon Echo (2014), obtuvo el estándar Matter en 2022 y ahora vuelve al control local con IA en el dispositivo.' },
          { q: '¿Cuál fue la primera casa inteligente?', a: 'El primer ejemplo documentado es ECHO IV, construido en 1966 por el ingeniero de Westinghouse Jim Sutherland para controlar sistemas del hogar como el termostato. Nunca se vendió, por lo que X10 (1975) suele citarse como el primer sistema de domótica disponible comercialmente.' },
          { q: '¿Qué cierres de servicios en la nube dejaron dispositivos domésticos sin funciones?', a: 'Casos notables son el hub Revolv (servicio terminado por Nest en mayo de 2016), Insteon (sin conexión y según los usuarios sin aviso en abril de 2022) y los termostatos Nest Learning de 1.ª y 2.ª generación (soporte terminado el 25 de octubre de 2025, solo control manual en el dispositivo).' },
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
      headline: 'Historia de la domótica: de X10 a la IA local (2026)',
      description: 'Historia de la domótica y las casas inteligentes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest y Echo, Matter 1.5 y el regreso a la IA local.',
      url: 'https://www.promptquorum.com/es/smart-home/history-of-smart-home-technology',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'Historia de la domótica' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: '¿Cuál es la historia de la domótica?', acceptedAnswer: { '@type': 'Answer', text: 'De prototipos como ECHO IV (1966) a X10 en 1975, la malla inalámbrica, la era de la nube, Matter en 2022 y el regreso al control local con IA en el dispositivo.' } },
        { '@type': 'Question', name: '¿Cuál fue la primera casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV (1966) es la primera casa inteligente documentada, pero nunca se vendió; X10 (1975) suele citarse como el primer sistema comercial.' } },
        { '@type': 'Question', name: '¿Qué cierres de servicios en la nube dejaron dispositivos domésticos sin funciones?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (mayo de 2016), Insteon (abril de 2022) y termostatos Nest Learning de 1.ª y 2.ª generación (25 de octubre de 2025).' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-ko.webp',
    title: '홈 오토메이션의 역사: X10에서 로컬 AI까지 (2026)',
    seoTitle: '홈 오토메이션과 스마트홈의 역사: 1966년부터 2026년까지',
    intro:
      '홈 오토메이션의 역사는 1960년대 시제품과 X10 전력선 제어(1975년)에서 시작해 Z-Wave와 Zigbee, Nest와 Echo의 클라우드 시대, Matter 표준을 거쳐 온디바이스 AI를 통한 로컬 제어로의 회귀로 이어집니다. 이 가이드는 최초의 스마트홈부터 오늘날까지의 흐름을 따라가며, 진자가 클라우드 의존에서 로컬 자율성으로 돌아오는 이유를 설명합니다.',
    metaDescription:
      '홈 오토메이션과 스마트홈의 역사: ECHO IV(1966), X10(1975), Z-Wave, Zigbee, Nest와 Echo, Matter 1.5, 그리고 로컬 AI로의 회귀.',
    twitterDescription:
      '1966년 시제품과 X10(1975)에서 Matter와 로컬 AI까지: 스마트홈은 로컬에서 클라우드로, 다시 로컬로.',
    readTime: '8분 분량',
    educationalLevel: 'Beginner',
    audience: '스마트 홈 기술 발전 맥락을 이해하려는 독자',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      '홈 오토메이션 역사',
      '최초의 스마트홈',
      '스마트 홈 기술의 역사',
      '스마트 홈 역사',
      'x10 홈 자동화 역사',
      '스마트 홈 진화',
      '스마트 홈은 언제 시작되었나',
    ],
    leadAnswerBlock:
      '**홈 오토메이션은 ECHO IV(1966) 같은 1960년대의 단품 시제품에서 시작해 1975년 X10 전력선 제어로 소비자 제품이 되었고, 무선 메시(Z-Wave, Zigbee)로 옮겨 갔으며, Nest(2011)와 Amazon Echo(2014)로 클라우드 시대에 들어섰고, 2022년 Matter 표준을 얻었으며, 이제 온디바이스 AI와 함께 로컬 제어로 되돌아가고 있습니다.** 흐름은 로컬에서 클라우드로, 다시 로컬로 돌아오는 진자입니다.',
    quickAnswerTop: {
      ko: {
        question: '스마트 홈 기술은 어떻게 발전해 왔습니까?',
        answer:
          '스마트 홈 기술은 1975년 X10 전력선 신호 방식으로 시작하여 2000년대에는 Z-Wave와 Zigbee 같은 무선 메시 프로토콜로 전환되었습니다. 2010년대에는 Nest와 Amazon Echo가 주도하는 클라우드 연결 시대로 접어들었습니다. 2022년에는 Matter가 등장하여 기기들을 통합하였으며, 현재는 온디바이스 AI와 함께 로컬 제어로 다시 전환되고 있습니다.',
        bullets: [
          'X10 이전(1966–1969): ECHO IV와 Kitchen Computer 같은 단품 시제품',
          'X10(1975): 전력선을 통한 최초의 대중적 홈 자동화',
          'Z-Wave(2001)와 Zigbee(2000년대 중반): 무선 메시',
          '클라우드 시대: Nest(2011), Amazon Echo(2014), Apple HomeKit(2014)',
          'Matter(2022): 통합 상호운용성 표준',
          '2026년: 온디바이스 AI와 함께 로컬 제어로 회귀',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'X10 이전', anchor: 'before-x10' },
      { label: '유선 시대', anchor: 'wired-era' },
      { label: '무선 프로토콜', anchor: 'wireless' },
      { label: '클라우드 시대', anchor: 'cloud-era' },
      { label: 'Matter와 상호운용성', anchor: 'matter' },
      { label: '로컬로의 회귀', anchor: 'swing-back' },
      { label: '다음은 무엇인가', anchor: 'whats-next' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '스마트 홈 기술은 1975년 X10 전력선 제어에서 무선 메시와 클라우드 시대를 거쳐 Matter와 로컬 AI 제어로 회귀하였습니다.' },
      { type: 'plain-terms', content: '홈 자동화는 대부분의 사람들이 생각하는 것보다 훨씬 오래되었습니다. 1970년대 집 안 전선을 통해 신호를 보내는 방식으로 시작하였습니다. 수십 년에 걸쳐 무선으로 발전하고, 기업 클라우드로 이동하였다가, 이제는 다시 집 안의 하드웨어에서 실행되며 로컬 AI도 함께 작동하는 방향으로 돌아오고 있습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'ECHO IV(1966) 같은 시제품이 먼저 나왔고, X10(1975)이 홈 오토메이션을 제품으로 만들었습니다',
          'X10(1975)는 전력선을 통해 신호를 전송하는 최초의 대중적 홈 자동화 시스템이었습니다',
          'Z-Wave(2001)와 Zigbee(2000년대 중반)는 저전력 무선 메시 네트워크를 도입하였습니다',
          '클라우드 시대는 Nest(2011)와 Amazon Echo, Apple HomeKit(2014)과 함께 시작되었습니다',
          'Matter(2022)는 제조사 간 상호운용성 표준을 추가하였습니다',
          '2026년에는 온디바이스 AI를 통한 로컬 제어로의 회귀 추세가 뚜렷합니다',
          '이 패턴은 진자와 같습니다: 로컬 제어, 클라우드 의존, 다시 로컬로',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'X10 이전: 최초의 스마트홈(1960년대)',
        content:
          '**최초의 스마트홈은 1966년 웨스팅하우스 엔지니어 짐 서덜랜드가 만든 단품 가정용 컴퓨터 ECHO IV로, TV·온도 조절기·에어컨 같은 가정 시스템을 제어했지만 시장에는 나오지 않았습니다.** 홈 오토메이션이 제품 범주가 된 것은 약 10년 뒤입니다.',
        items: [
          '**ECHO IV(1966):** 「Electronic Computing Home Operator」는 가사 작업을 수행하고 가계 재정을 기록했으며, 상업적으로 판매된 적이 없습니다.',
          '**Kitchen Computer(1969):** 니만 마커스는 카탈로그에 허니웰 기반 주방 컴퓨터를 약 1만 달러에 실었지만, 보도에 따르면 한 대도 팔리지 않았습니다.',
          '**중요한 이유:** 둘 다 한 건물 안에서 완결되는 완전한 로컬 기계였으며, 로컬 우선 흐름이 되돌아가는 것과 같은 구조입니다.',
        ],
      },
      wiredEra: {
        id: 'wired-era',
        title: '유선 시대: X10과 Insteon',
        content:
          '**홈 자동화는 1975년 X10으로 시작되었습니다. X10은 기존 가정용 전선을 통해 제어 신호를 전송하였습니다.** 클라우드가 없었던 시절 필연적으로 로컬 방식을 택하였으나 기능이 제한적이었고 간섭에 취약하였습니다.',
        items: [
          '**X10(1975):** Pico Electronics가 개발하였으며 스위치와 모듈이 전력선을 통해 통신하도록 하였습니다.',
          '**Insteon:** 이후 전력선과 무선 신호를 결합하여 신뢰성을 향상하였습니다.',
          '**기본적으로 로컬:** 모든 것이 집 안에서 실행되었으며, 오늘날의 로컬 우선 부활을 예고하였습니다.',
        ],
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: '1975년부터 2026년까지 스마트홈 기술의 다섯 시대: X10 전력선 제어, Z-Wave 및 Zigbee 무선 메시, Nest와 Amazon Echo의 클라우드 시대, 2022년 Matter 표준, 그리고 2026년 로컬 AI 제어.',
      },
      wireless: {
        id: 'wireless',
        title: '무선 프로토콜: Z-Wave와 Zigbee',
        content:
          '**Z-Wave(2001)와 Zigbee(2000년대 중반)는 배터리 기기와 센서를 위해 구축된 저전력 무선 메시 네트워크를 도입하였습니다.** 두 프로토콜은 오늘날에도 핵심적인 로컬 프로토콜로 남아 있습니다.',
        items: [
          '**Z-Wave(2001):** 신뢰할 수 있는 홈 제어 기기를 위해 설계된 저전력 메시 프로토콜입니다.',
          '**Zigbee(2000년대 중반):** 전구와 센서에 널리 사용되는 개방형 저전력 메시 표준입니다.',
          '**여전히 유효합니다:** 두 프로토콜 모두 기본적으로 로컬이며 현대 허브의 기반이 됩니다 — [스마트 홈 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained)을 참조하십시오.',
        ],
      },
      cloudEra: {
        id: 'cloud-era',
        title: '클라우드 시대: Nest, Echo, HomeKit',
        content:
          '**2010년대에는 스마트 홈이 클라우드로 이동하였습니다: Nest 온도조절기(2011), Amazon Echo(2014), Apple HomeKit(2014)은 기기를 편리하게 만들었으나 제조사 서버에 의존하게 되었습니다.** 편의성은 높아졌지만 개인정보 보호와 오프라인 신뢰성은 낮아졌습니다.',
        items: [
          '**Nest(2011):** 학습형 온도조절기가 클라우드 연결 가정용 기기를 대중화하였습니다. Google이 2014년 Nest를 인수하였습니다.',
          '**Amazon Echo(2014):** 클라우드 어시스턴트를 통한 음성 제어가 대중화되었습니다.',
          '**Apple HomeKit(2014):** Apple의 보다 프라이버시 중심적인 프레임워크로 일부 로컬 제어를 지원합니다.',
          '**절충점:** 설치 편의성을 위해 데이터가 집 밖으로 나가고 기업 클라우드에 의존하게 되었습니다.',
        ],
      },
      matter: {
        id: 'matter',
        title: 'Matter와 상호운용성',
        content:
          '**Matter는 2022년 Connectivity Standards Alliance가 출시한 제조사 간 표준으로, 서로 다른 브랜드의 기기가 함께 작동하도록 하며 로컬에서도 실행될 수 있습니다.** 클라우드 시대의 파편화 문제를 해결하였습니다.',
        items: [
          'Matter는 IP를 통해 실행되며 Thread와 Wi-Fi와 함께 작동합니다.',
          '로컬 컨트롤러를 통한 로컬 제어를 가능하게 하여 클라우드 의존도를 줄입니다 — [Matter 로컬 제어 가이드](/ko/smart-home/matter-local-control-guide)를 참조하십시오.',
          '이전의 앱과 브리지 패치워크보다 브랜드 혼합을 훨씬 쉽게 만들었습니다.',
          '2025년 11월에 공개된 Matter 1.5는 WebRTC 스트리밍을 지원하는 카메라, 통합 클로저 모델(블라인드, 게이트, 차고 문), 토양 센서, 에너지 요금 데이터를 추가했습니다.',
        ],
      },
      swingBack: {
        id: 'swing-back',
        title: '2026년 로컬로의 회귀',
        content:
          '**현재의 변화는 개인정보 보호 우려, 기기를 무력화하는 클라우드 서비스 종료, 이제 실용적이 된 온디바이스 AI에 의해 로컬 제어로 회귀하고 있습니다.** 로컬 자율성은 틈새 영역이 아닌 다음 시대로 자리매김하고 있습니다.',
        items: [
          '기기를 비활성화하는 클라우드 서비스 종료로 인해 사용자들은 로컬 우선 설정으로 이동하였습니다.',
          '클라우드 데이터 수집 범위가 명확해지면서 개인정보 보호 인식이 높아졌습니다 — [스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks)을 참조하십시오.',
          '온디바이스 AI를 통해 로컬 LLM이 홈 제어를 실행할 수 있습니다 — [완전한 로컬 스마트 홈 가이드](/ko/smart-home/local-smart-home-complete-guide)를 참조하십시오.',
          '구체적 사례: Nest는 2016년 5월 Revolv 허브 서비스를 종료했고, Insteon은 2022년 4월 보도에 따르면 예고 없이 오프라인이 되었으며, Google은 2025년 10월 25일 1·2세대 Nest Learning Thermostat 지원을 종료해 수동 조작만 가능해졌습니다.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: '스마트홈의 50년 진자 운동: 1975~2010년 X10과 Z-Wave의 로컬 제어, 2011~2021년 Nest와 Amazon Echo의 클라우드 시대, 그리고 2026년 Matter와 함께 로컬 AI 제어로의 복귀.',
      },
      whatsNext: {
        id: 'whats-next',
        title: '다음은 무엇인가',
        content:
          '**다음 시대는 로컬 제어와 로컬 AI를 결합합니다: 자동화와 자연어 어시스턴트를 모두 자체 하드웨어에서 실행하는 가정입니다.** Matter가 상호운용성을 용이하게 하는 동안 로컬 AI는 클라우드 없이 지능을 추가합니다.',
        columns: ['시대', '대략적 연도', '핵심 기술', '클라우드 또는 로컬'],
        rows: [
          { '시대': '시제품', '대략적 연도': '1966–1974년', '핵심 기술': 'ECHO IV, Kitchen Computer', '클라우드 또는 로컬': '로컬' },
          { '시대': '유선', '대략적 연도': '1975–2000', '핵심 기술': 'X10, Insteon', '클라우드 또는 로컬': '로컬' },
          { '시대': '무선 메시', '대략적 연도': '2001–2010', '핵심 기술': 'Z-Wave, Zigbee', '클라우드 또는 로컬': '로컬' },
          { '시대': '클라우드', '대략적 연도': '2011–2021', '핵심 기술': 'Nest, Echo, HomeKit', '클라우드 또는 로컬': '클라우드' },
          { '시대': '상호운용성', '대략적 연도': '2022–2025', '핵심 기술': 'Matter, Thread', '클라우드 또는 로컬': '양쪽 모두' },
          { '시대': '로컬 AI', '대략적 연도': '2026+', '핵심 기술': '로컬 LLM, Home Assistant', '클라우드 또는 로컬': '로컬' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '최초의 스마트 홈 기술은 무엇이었습니까?', a: '1975년에 도입된 X10이 일반적으로 최초의 대중적 홈 자동화 기술로 여겨집니다. 기존 가정용 전선을 통해 제어 신호를 전송하여 새 배선 없이 스위치와 모듈이 통신할 수 있도록 하였습니다.' },
          { q: '스마트 홈은 언제 대중화되었습니까?', a: '스마트 홈은 2010년대 클라우드 연결 기기와 함께 대중화되었습니다. 2011년 Nest 온도조절기와 2014년 Amazon Echo 같은 음성 어시스턴트가 광범위한 대중에게 기술을 접근 가능하게 만들었습니다.' },
          { q: 'Matter는 무엇입니까?', a: 'Matter는 2022년 Connectivity Standards Alliance가 출시한 제조사 간 스마트 홈 표준입니다. 서로 다른 브랜드의 기기가 IP를 통해 함께 작동하도록 하며, 각 제조사의 클라우드에 의존하지 않고 로컬 컨트롤러를 통해 로컬에서 실행될 수 있습니다.' },
          { q: '스마트 홈 기술이 로컬로 다시 이동하는 이유는 무엇입니까?', a: '개인정보 보호 우려, 기기를 비활성화하는 클라우드 서비스 종료, 실용적인 온디바이스 AI의 등장으로 인해 사용자들이 로컬 제어로 다시 돌아가고 있습니다. 로컬 설정은 데이터를 집 안에 보관하고 오프라인에서도 작동하며 제조사의 클라우드에 의존하지 않습니다.' },
          { q: '홈 오토메이션의 역사는 어떻게 되나요?', a: '홈 오토메이션은 1966년 ECHO IV 같은 1960년대 단품 시제품에서 시작해 1975년 X10 전력선 제어로 소비자 제품이 되었고, 2000년대에 Z-Wave와 Zigbee로 무선화되었으며, Nest(2011)와 Amazon Echo(2014)로 클라우드로 옮겨 갔고, 2022년 Matter 표준을 얻었으며, 이제 온디바이스 AI와 함께 로컬 제어로 돌아가고 있습니다.' },
          { q: '최초의 스마트홈은 무엇인가요?', a: '기록된 가장 오래된 사례는 1966년 웨스팅하우스 엔지니어 짐 서덜랜드가 온도 조절기 같은 가정 시스템을 제어하려고 만든 ECHO IV입니다. 판매된 적이 없어서 상업적으로 구매할 수 있었던 최초의 홈 오토메이션 시스템은 보통 X10(1975)으로 꼽힙니다.' },
          { q: '클라우드 종료로 기능을 잃은 스마트홈 기기에는 어떤 사례가 있나요?', a: '대표적인 사례는 Nest가 서비스를 종료한 Revolv 허브(2016년 5월), 보도에 따르면 예고 없이 오프라인이 된 Insteon(2022년 4월), 2025년 10월 25일 지원이 끝나 기기 자체의 수동 조작만 남은 1·2세대 Nest Learning Thermostat입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 실제 로컬 우선 시대',
          '[스마트 홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared) — 이 역사에서 탄생한 플랫폼들',
          '[스마트 홈 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained) — 무선 표준 심층 분석',
          '[스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks) — 진자가 다시 돌아오는 이유',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '홈 오토메이션의 역사: X10에서 로컬 AI까지 (2026)',
      description: '홈 오토메이션과 스마트홈의 역사: ECHO IV(1966), X10(1975), Z-Wave, Zigbee, Nest와 Echo, Matter 1.5, 그리고 로컬 AI로의 회귀.',
      url: 'https://www.promptquorum.com/ko/smart-home/history-of-smart-home-technology',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: '홈 자동화의 역사' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '최초의 스마트 홈 기술은 무엇이었습니까?', acceptedAnswer: { '@type': 'Answer', text: '1975년에 도입된 X10이 일반적으로 최초의 대중적 홈 자동화 기술로 여겨집니다. 기존 가정용 전선을 통해 제어 신호를 전송하였습니다.' } },
        { '@type': 'Question', name: '스마트 홈은 언제 대중화되었습니까?', acceptedAnswer: { '@type': 'Answer', text: '2010년대 클라우드 연결 기기와 함께 대중화되었습니다 — 2011년 Nest 온도조절기와 2014년 Amazon Echo 같은 음성 어시스턴트가 기술을 대중화하였습니다.' } },
        { '@type': 'Question', name: 'Matter는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '2022년 Connectivity Standards Alliance가 출시한 제조사 간 스마트 홈 표준입니다. 서로 다른 브랜드의 기기가 IP를 통해 함께 작동하도록 하며 로컬에서도 실행될 수 있습니다.' } },
        { '@type': 'Question', name: '스마트 홈 기술이 로컬로 다시 이동하는 이유는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '개인정보 보호 우려, 기기를 비활성화하는 클라우드 서비스 종료, 실용적인 온디바이스 AI로 인해 사용자들이 로컬 제어로 돌아가고 있습니다.' } },
        { '@type': 'Question', name: '홈 오토메이션의 역사는 어떻게 되나요?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV(1966) 같은 시제품에서 1975년 X10, 무선 메시, 클라우드 시대, 2022년 Matter를 거쳐 온디바이스 AI 기반 로컬 제어로 돌아가고 있습니다.' } },
        { '@type': 'Question', name: '최초의 스마트홈은 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV(1966)는 기록된 최초의 스마트홈이지만 판매되지 않았고, 최초의 상용 시스템은 보통 X10(1975)으로 꼽힙니다.' } },
        { '@type': 'Question', name: '클라우드 종료로 기능을 잃은 스마트홈 기기에는 어떤 사례가 있나요?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv(2016년 5월), Insteon(2022년 4월), 1·2세대 Nest Learning Thermostat(2025년 10월 25일).' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-fr.webp',
    title: 'Histoire de la domotique : de X10 à l’IA locale (2026)',
    seoTitle: 'Histoire de la domotique et des maisons connectées : 1966-2026',
    intro:
      'L’histoire de la domotique va des prototypes des années 1960 et du contrôle par courants porteurs X10 (1975) à Z-Wave et Zigbee, à l’ère du cloud de Nest et d’Echo, puis au standard Matter, avant un retour vers le contrôle local avec l’IA embarquée. Ce guide retrace cet arc, de la première maison connectée à aujourd’hui, et explique pourquoi le balancier revient de la dépendance au cloud vers l’autonomie locale.',
    metaDescription:
      'Histoire de la domotique et des maisons connectées : ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest et Echo, Matter 1.5 et le retour à l’IA locale.',
    twitterDescription:
      'La domotique des prototypes de 1966 et de X10 (1975) à Matter et à l’IA locale : local, puis cloud, puis de nouveau local.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Lecteurs cherchant du contexte sur le développement de la maison connectée',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'histoire de la domotique',
      'première maison connectée',
      'histoire de la maison connectée',
      'histoire domotique',
      'histoire x10 domotique',
      'évolution maison connectée',
      'quand la maison connectée a commencé',
    ],
    leadAnswerBlock:
      '**La domotique est née avec des prototypes uniques des années 1960 comme ECHO IV (1966), est devenue un produit grand public avec le contrôle par courants porteurs X10 en 1975, est passée au maillage sans fil (Z-Wave, Zigbee), est entrée dans l’ère du cloud avec Nest (2011) et Amazon Echo (2014), a reçu le standard Matter en 2022 et revient aujourd’hui vers le contrôle local avec l’IA embarquée.** L’arc est un balancier : local, cloud, puis local de nouveau.',
    quickAnswerTop: {
      fr: {
        question: 'Comment la technologie de la maison connectée a-t-elle évolué ?',
        answer:
          'La technologie de la maison connectée a débuté avec la signalisation par courant porteur X10 en 1975, est passée aux protocoles mesh sans fil comme Z-Wave et Zigbee dans les années 2000, puis est entrée dans une ère connectée au cloud menée par Nest et Amazon Echo dans les années 2010. Matter est arrivé en 2022 pour unifier les appareils, et le changement actuel revient au contrôle local avec l\'IA embarquée.',
        bullets: [
          'Avant X10 (1966-1969) : prototypes uniques comme ECHO IV et le Kitchen Computer',
          'X10 (1975) : première domotique grand public, par courant porteur',
          'Z-Wave (2001) et Zigbee (milieu des années 2000) : mesh sans fil',
          'Ère du cloud : Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022) : un standard d\'interopérabilité unificateur',
          '2026 : retour au contrôle local plus l\'IA embarquée',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Avant X10', anchor: 'before-x10' },
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
          'Des prototypes uniques comme ECHO IV (1966) ont précédé X10 (1975), qui a fait de la domotique un produit',
          'X10 (1975) fut le premier système de domotique grand public, envoyant des signaux par courant porteur',
          'Z-Wave (2001) et Zigbee (milieu des années 2000) ont apporté des réseaux mesh sans fil basse consommation',
          'L\'ère du cloud est arrivée avec Nest (2011) puis Amazon Echo et Apple HomeKit (2014)',
          'Matter (2022) a ajouté un standard d\'interopérabilité entre fabricants',
          'En 2026 la tendance revient au contrôle local avec l\'IA embarquée',
          'Le schéma est un pendule : contrôle local, dépendance au cloud, puis retour au local',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'Avant X10 : les premières maisons connectées (années 1960)',
        content:
          '**La première maison connectée fut ECHO IV, un ordinateur domestique unique construit en 1966 par l’ingénieur de Westinghouse Jim Sutherland, qui pilotait des systèmes domestiques comme la télévision, le thermostat et la climatisation — mais il n’a jamais été commercialisé.** La domotique comme catégorie de produits n’est apparue qu’une décennie plus tard.',
        items: [
          '**ECHO IV (1966) :** l’« Electronic Computing Home Operator » exécutait des tâches ménagères et suivait les finances familiales ; il n’a jamais été vendu.',
          '**Kitchen Computer (1969) :** Neiman Marcus a proposé dans son catalogue un ordinateur de cuisine à base Honeywell pour environ 10 000 dollars ; selon les sources, aucun exemplaire n’aurait été vendu.',
          '**Pourquoi c’est important :** les deux étaient des machines entièrement locales, limitées à un seul bâtiment — l’architecture vers laquelle revient le mouvement local-first.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'Cinq ères de la technologie smart home de 1975 à 2026 : contrôle par courants porteurs X10, maillage sans fil Z-Wave et Zigbee, l\'ère du cloud avec Nest et Amazon Echo, la norme Matter de 2022, et le contrôle par IA locale en 2026.',
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
          'Matter 1.5, publié en novembre 2025, a ajouté la prise en charge des caméras avec streaming WebRTC, un modèle unifié d’ouvrants (stores, portails, portes de garage), des capteurs de sol et des données de tarifs d’énergie.',
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
          'Cas concrets : Nest a mis fin au service du hub Revolv en mai 2016, Insteon s’est arrêté selon des témoignages sans préavis en avril 2022, et Google a mis fin le 25 octobre 2025 à la prise en charge des thermostats Nest Learning de 1re et 2e génération, désormais utilisables uniquement en manuel.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'Le pendule de 50 ans de la maison connectée : contrôle local avec X10 et Z-Wave de 1975 à 2010, l\'ère du cloud avec Nest et Amazon Echo de 2011 à 2021, puis le retour au contrôle par IA locale avec Matter en 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: 'Et ensuite',
        content:
          '**La prochaine ère associe contrôle local et IA locale : une maison qui exécute des automatisations et un assistant en langage naturel entièrement sur votre propre matériel.** Matter facilite l\'interopérabilité tandis que l\'IA locale ajoute de l\'intelligence sans le cloud.',
        columns: ['Ère', 'Années approx.', 'Technologie déterminante', 'Cloud ou local'],
        rows: [
          { 'Ère': 'Prototypes', 'Années approx.': '1966–1974', 'Technologie déterminante': 'ECHO IV, Kitchen Computer', 'Cloud ou local': 'Local' },
          { 'Ère': 'Filaire', 'Années approx.': '1975–2000', 'Technologie déterminante': 'X10, Insteon', 'Cloud ou local': 'Local' },
          { 'Ère': 'Mesh sans fil', 'Années approx.': '2001–2010', 'Technologie déterminante': 'Z-Wave, Zigbee', 'Cloud ou local': 'Local' },
          { 'Ère': 'Cloud', 'Années approx.': '2011–2021', 'Technologie déterminante': 'Nest, Echo, HomeKit', 'Cloud ou local': 'Cloud' },
          { 'Ère': 'Interopérabilité', 'Années approx.': '2022–2025', 'Technologie déterminante': 'Matter, Thread', 'Cloud ou local': 'Les deux' },
          { 'Ère': 'IA locale', 'Années approx.': '2026+', 'Technologie déterminante': 'LLMs locaux, Home Assistant', 'Cloud ou local': 'Local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quelle a été la première technologie de maison connectée ?', a: 'X10, introduite en 1975, est généralement considérée comme la première technologie de domotique grand public. Elle envoyait des signaux de commande par le câblage électrique existant d\'une maison, permettant aux interrupteurs et modules de communiquer sans nouveau câblage.' },
          { q: 'Quand les maisons connectées sont-elles devenues grand public ?', a: 'Les maisons connectées ont atteint le grand public dans les années 2010 avec des appareils connectés au cloud : le thermostat Nest en 2011 et des assistants vocaux comme l\'Amazon Echo en 2014 ont rendu la technologie accessible à un large public.' },
          { q: 'Qu\'est-ce que Matter ?', a: 'Matter est un standard de maison connectée inter-fabricants lancé en 2022 par la Connectivity Standards Alliance. Il permet à des appareils de marques différentes de fonctionner ensemble sur IP, et peut tourner localement via un contrôleur local plutôt que de dépendre du cloud de chaque fabricant.' },
          { q: 'Pourquoi la technologie de la maison connectée revient-elle au local ?', a: 'Les préoccupations de confidentialité, les fermetures de cloud qui désactivent les appareils et l\'arrivée d\'une IA embarquée pratique poussent les utilisateurs vers le contrôle local. Une configuration locale garde les données à la maison, fonctionne hors ligne et n\'est pas à la merci du cloud d\'un fabricant.' },
          { q: 'Quelle est l’histoire de la domotique ?', a: 'La domotique est née avec des prototypes uniques dans les années 1960, comme ECHO IV en 1966, est devenue un produit grand public avec le contrôle par courants porteurs X10 en 1975, est passée au sans-fil avec Z-Wave et Zigbee dans les années 2000, au cloud avec Nest (2011) et Amazon Echo (2014), a reçu le standard Matter en 2022 et revient aujourd’hui vers le contrôle local avec l’IA embarquée.' },
          { q: 'Quelle fut la première maison connectée ?', a: 'Le plus ancien exemple documenté est ECHO IV, construit en 1966 par l’ingénieur de Westinghouse Jim Sutherland pour piloter des systèmes domestiques comme le thermostat. Il n’a jamais été vendu ; X10 (1975) est donc généralement cité comme le premier système de domotique disponible dans le commerce.' },
          { q: 'Quels arrêts de services cloud ont privé des appareils connectés de leurs fonctions ?', a: 'Les cas notables sont le hub Revolv (service arrêté par Nest en mai 2016), Insteon (hors ligne selon des témoignages sans préavis en avril 2022) et les thermostats Nest Learning de 1re et 2e génération (assistance terminée le 25 octobre 2025, seul le réglage manuel restant possible sur l’appareil).' },
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
      headline: 'Histoire de la domotique : de X10 à l’IA locale (2026)',
      description: 'Histoire de la domotique et des maisons connectées : ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest et Echo, Matter 1.5 et le retour à l’IA locale.',
      url: 'https://www.promptquorum.com/fr/smart-home/history-of-smart-home-technology',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'Histoire de la domotique' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'Quelle est l’histoire de la domotique ?', acceptedAnswer: { '@type': 'Answer', text: 'Des prototypes comme ECHO IV (1966) à X10 en 1975, au maillage sans fil, à l’ère du cloud, à Matter en 2022 et au retour du contrôle local avec l’IA embarquée.' } },
        { '@type': 'Question', name: 'Quelle fut la première maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV (1966) est la plus ancienne maison connectée documentée mais n’a jamais été vendu ; X10 (1975) est le premier système commercial.' } },
        { '@type': 'Question', name: 'Quels arrêts de services cloud ont privé des appareils connectés de leurs fonctions ?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (mai 2016), Insteon (avril 2022) et thermostats Nest Learning de 1re et 2e génération (25 octobre 2025).' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-ja.webp',
    title: 'ホームオートメーションの歴史：X10からローカルAIへ（2026）',
    seoTitle: 'ホームオートメーションとスマートホームの歴史：1966年から2026年',
    intro:
      'ホームオートメーションの歴史は、1960年代の試作機とX10の電力線制御（1975年）から、Z-WaveとZigbee、NestやEchoのクラウド時代、Matter規格を経て、オンデバイスAIによるローカル制御への回帰へと続きます。本ガイドは最初のスマートホームから現在までの流れをたどり、振り子がクラウド依存からローカル自律へ戻る理由を説明します。',
    metaDescription:
      'ホームオートメーションとスマートホームの歴史：ECHO IV（1966年）、X10（1975年）、Z-Wave、Zigbee、NestとEcho、Matter 1.5、そしてローカルAIへの回帰。',
    twitterDescription:
      '1966年の試作機とX10（1975年）からMatterとローカルAIまで：スマートホームはローカル、クラウド、再びローカルへ。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    audience: 'スマートホーム技術がどう発展したか背景を知りたい読者',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'ホームオートメーション 歴史',
      '最初のスマートホーム',
      'スマートホームの歴史',
      'ホームオートメーション 歴史',
      'x10 歴史',
      'スマートホーム 進化',
      'スマートホーム いつから',
    ],
    leadAnswerBlock:
      '**ホームオートメーションは、ECHO IV（1966年）のような1960年代の一点物の試作機から始まり、1975年のX10電力線制御で消費者向け製品となり、無線メッシュ（Z-Wave、Zigbee）へ移り、Nest（2011年）とAmazon Echo（2014年）でクラウド時代に入り、2022年にMatter規格を得て、現在はオンデバイスAIによるローカル制御へ回帰しています。** 流れはローカルからクラウド、そして再びローカルへ戻る振り子です。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホーム技術はどのように進化しましたか？',
        answer:
          'スマートホーム技術は1975年の X10 電力線信号に始まり、2000年代に Z-Wave や Zigbee のような無線メッシュプロトコルへ移り、2010年代には Nest と Amazon Echo を中心としたクラウド接続の時代に入りました。Matter は機器の統一のため2022年に登場し、現在の流れはオンデバイスAIによるローカル制御へと戻っています。',
        bullets: [
          'X10以前（1966〜1969年）：ECHO IVやKitchen Computerなどの一点物の試作機',
          'X10（1975）：電力線による初の普及型ホームオートメーション',
          'Z-Wave（2001）と Zigbee（2000年代半ば）：無線メッシュ',
          'クラウド時代：Nest（2011）、Amazon Echo（2014）、Apple HomeKit（2014）',
          'Matter（2022）：統一的な相互運用規格',
          '2026：ローカル制御＋オンデバイスAIへの回帰',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'X10以前', anchor: 'before-x10' },
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
          'ECHO IV（1966年）などの試作機が先にあり、X10（1975年）がホームオートメーションを製品にした',
          'X10（1975）は電力線で信号を送る初の普及型ホームオートメーションだった',
          'Z-Wave（2001）と Zigbee（2000年代半ば）は低消費電力の無線メッシュをもたらした',
          'クラウド時代は Nest（2011）、Amazon Echo・Apple HomeKit（2014）で到来した',
          'Matter（2022）はメーカー横断の相互運用規格を加えた',
          '2026年、流れはオンデバイスAIによるローカル制御へ戻っている',
          'このパターンは振り子：ローカル制御、クラウド依存、そして再びローカルへ',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'X10以前：最初のスマートホーム（1960年代）',
        content:
          '**最初のスマートホームは、1966年にウェスティングハウスの技術者ジム・サザーランドが作った一点物の家庭用コンピューターECHO IVで、テレビ、サーモスタット、エアコンなどを制御しましたが、市場には出ませんでした。** ホームオートメーションが製品カテゴリーになるのは約10年後です。',
        items: [
          '**ECHO IV（1966年）：**「Electronic Computing Home Operator」は家事の制御や家計の記録を行い、商業販売はされませんでした。',
          '**Kitchen Computer（1969年）：**ニーマン・マーカスがカタログでハネウェル製のキッチンコンピューターを約1万ドルで掲載しましたが、報告によれば1台も売れませんでした。',
          '**重要な理由：**どちらも1つの建物で完結する完全ローカルの機械で、ローカルファースト回帰が戻るのと同じ構成です。',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'スマートホーム技術の5つの時代(1975年〜2026年): X10電力線制御、Z-WaveとZigbeeの無線メッシュ、NestとAmazon Echoによるクラウド時代、2022年のMatter標準、そして2026年のローカルAI制御。',
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
          '2025年11月公開のMatter 1.5は、WebRTCストリーミング対応のカメラ、統一されたクロージャーモデル（シェード、ゲート、ガレージドア）、土壌センサー、エネルギー料金データを追加しました。',
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
          '具体例：Nestは2016年5月にRevolvハブのサービスを終了し、Insteonは2022年4月に報告によれば予告なくオフラインとなり、Googleは2025年10月25日にNest Learning Thermostat第1・第2世代のサポートを終了して手動操作のみになりました。',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'スマートホームの50年にわたる振り子: 1975〜2010年のX10とZ-Waveによるローカル制御、2011〜2021年のNestとAmazon Echoによるクラウド時代、そして2026年にMatterとローカルAI制御へ回帰。',
      },
      whatsNext: {
        id: 'whats-next',
        title: '次に来るもの',
        content:
          '**次の時代はローカル制御とローカルAIを組み合わせます：自動化と自然言語アシスタントを、すべて自分のハードウェアで動かす家。** Matter が相互運用を容易にし、ローカルAIがクラウドなしで知性を加えます。',
        columns: ['時代', 'おおよその年', '象徴的な技術', 'クラウドかローカルか'],
        rows: [
          { '時代': '試作機', 'おおよその年': '1966〜1974年', '象徴的な技術': 'ECHO IV、Kitchen Computer', 'クラウドかローカルか': 'ローカル' },
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
          { q: 'ホームオートメーションの歴史とは？', a: 'ホームオートメーションは1960年代のECHO IV（1966年）などの一点物の試作機に始まり、1975年のX10電力線制御で消費者向け製品となり、2000年代にZ-WaveとZigbeeで無線化し、Nest（2011年）とAmazon Echo（2014年）でクラウドへ移り、2022年にMatter規格を得て、現在はオンデバイスAIによるローカル制御へ回帰しています。' },
          { q: '最初のスマートホームは？', a: '記録に残る最古の例は、1966年にウェスティングハウスの技術者ジム・サザーランドがサーモスタットなどの家庭設備を制御するために作ったECHO IVです。販売されなかったため、市販された最初のホームオートメーションシステムとしては通常X10（1975年）が挙げられます。' },
          { q: 'クラウド終了で機能を失ったスマートホーム機器の例は？', a: '代表例は、Nestがサービスを終了したRevolvハブ（2016年5月）、報告によれば予告なくオフラインになったInsteon（2022年4月）、サポートが2025年10月25日に終了し本体での手動操作のみとなったNest Learning Thermostat第1・第2世代です。' },
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
      headline: 'ホームオートメーションの歴史：X10からローカルAIへ（2026）',
      description: 'ホームオートメーションとスマートホームの歴史：ECHO IV（1966年）、X10（1975年）、Z-Wave、Zigbee、NestとEcho、Matter 1.5、そしてローカルAIへの回帰。',
      url: 'https://www.promptquorum.com/ja/smart-home/history-of-smart-home-technology',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'ホームオートメーションの歴史' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'ホームオートメーションの歴史とは？', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV（1966年）などの試作機から1975年のX10、無線メッシュ、クラウド時代、2022年のMatterを経て、オンデバイスAIによるローカル制御へ回帰しています。' } },
        { '@type': 'Question', name: '最初のスマートホームは？', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV（1966年）は記録に残る最古のスマートホームですが販売されず、市販第1号は通常X10（1975年）とされます。' } },
        { '@type': 'Question', name: 'クラウド終了で機能を失ったスマートホーム機器の例は？', acceptedAnswer: { '@type': 'Answer', text: 'Revolv（2016年5月）、Insteon（2022年4月）、Nest Learning Thermostat第1・第2世代（2025年10月25日）。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-pt.webp',
    title: 'História da automação residencial: do X10 à IA local (2026)',
    seoTitle: 'História da automação residencial e das casas inteligentes: 1966-2026',
    intro:
      'A história da automação residencial vai dos protótipos dos anos 1960 e do controle por rede elétrica X10 (1975) ao Z-Wave e ao Zigbee, à era da nuvem de Nest e Echo e ao padrão Matter, até a volta ao controle local com IA no dispositivo. Este guia traça esse arco, da primeira casa inteligente até hoje, e explica por que o pêndulo está voltando da dependência da nuvem para a autonomia local.',
    metaDescription:
      'História da automação residencial e das casas inteligentes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest e Echo, Matter 1.5 e a volta à IA local.',
    twitterDescription:
      'Automação residencial dos protótipos de 1966 e do X10 (1975) ao Matter e à IA local: primeiro local, depois nuvem e de novo local.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Leitores que querem contexto sobre como a casa inteligente se desenvolveu',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      'história da automação residencial',
      'primeira casa inteligente',
      'história da casa inteligente',
      'história da automação residencial',
      'história x10 automação',
      'evolução da casa inteligente',
      'quando começou a casa inteligente',
    ],
    leadAnswerBlock:
      '**A automação residencial começou com protótipos únicos dos anos 1960, como o ECHO IV (1966), virou produto de consumo com o controle por rede elétrica X10 em 1975, passou para malha sem fio (Z-Wave, Zigbee), entrou na era da nuvem com Nest (2011) e Amazon Echo (2014), ganhou o padrão Matter em 2022 e agora volta ao controle local com IA no dispositivo.** O arco é um pêndulo: do local para a nuvem e de volta ao local.',
    quickAnswerTop: {
      pt: {
        question: 'Como a tecnologia de casa inteligente evoluiu?',
        answer:
          'A tecnologia de casa inteligente começou com a sinalização por linha elétrica X10 em 1975, passou para protocolos mesh sem fio como Z-Wave e Zigbee nos anos 2000, e depois entrou em uma era conectada à nuvem liderada por Nest e Amazon Echo nos anos 2010. O Matter chegou em 2022 para unificar dispositivos, e a mudança atual volta ao controle local com IA no dispositivo.',
        bullets: [
          'Antes do X10 (1966–1969): protótipos únicos como o ECHO IV e o Kitchen Computer',
          'X10 (1975): primeira automação residencial em massa, por linhas elétricas',
          'Z-Wave (2001) e Zigbee (meados dos anos 2000): mesh sem fio',
          'Era da nuvem: Nest (2011), Amazon Echo (2014), Apple HomeKit (2014)',
          'Matter (2022): um padrão de interoperabilidade unificador',
          '2026: virada de volta ao controle local mais IA no dispositivo',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Antes do X10', anchor: 'before-x10' },
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
          'Protótipos únicos como o ECHO IV (1966) vieram primeiro; o X10 (1975) transformou a automação residencial em produto',
          'O X10 (1975) foi o primeiro sistema de automação residencial em massa, enviando sinais por linhas elétricas',
          'Z-Wave (2001) e Zigbee (meados dos anos 2000) trouxeram redes mesh sem fio de baixo consumo',
          'A era da nuvem chegou com o Nest (2011) e o Amazon Echo e o Apple HomeKit (2014)',
          'O Matter (2022) adicionou um padrão de interoperabilidade entre fabricantes',
          'Em 2026 a tendência volta ao controle local com IA no dispositivo',
          'O padrão é um pêndulo: controle local, dependência da nuvem e de volta ao local',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'Antes do X10: as primeiras casas inteligentes (anos 1960)',
        content:
          '**A primeira casa inteligente foi o ECHO IV, um computador doméstico único construído em 1966 pelo engenheiro da Westinghouse Jim Sutherland, que controlava sistemas da casa como televisão, termostato e ar-condicionado, mas nunca chegou ao mercado.** A automação residencial como categoria de produto só começou uma década depois.',
        items: [
          '**ECHO IV (1966):** o «Electronic Computing Home Operator» executava tarefas domésticas e registrava as finanças da família; nunca foi vendido comercialmente.',
          '**Kitchen Computer (1969):** a Neiman Marcus anunciou em seu catálogo um computador de cozinha baseado em Honeywell por cerca de 10.000 dólares; segundo relatos, nenhuma unidade foi vendida.',
          '**Por que importa:** ambos eram máquinas totalmente locais, restritas a um único edifício — a mesma arquitetura para a qual o movimento local-first volta.',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: 'Cinco eras da tecnologia de casa inteligente de 1975 a 2026: controle por linha elétrica X10, malha sem fio Z-Wave e Zigbee, a era da nuvem com Nest e Amazon Echo, o padrão Matter de 2022 e o controle por IA local em 2026.',
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
          'O Matter 1.5, lançado em novembro de 2025, adicionou suporte a câmeras com streaming WebRTC, um modelo unificado de fechamentos (persianas, portões, portas de garagem), sensores de solo e dados de tarifas de energia.',
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
          'Casos concretos: a Nest encerrou o serviço do hub Revolv em maio de 2016, a Insteon saiu do ar segundo relatos sem aviso em abril de 2022 e o Google encerrou em 25 de outubro de 2025 o suporte aos termostatos Nest Learning de 1ª e 2ª geração, que ficaram apenas no modo manual.',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: 'O pêndulo de 50 anos da casa inteligente: controle local com X10 e Z-Wave de 1975 a 2010, a era da nuvem com Nest e Amazon Echo de 2011 a 2021, e o retorno ao controle por IA local com Matter em 2026.',
      },
      whatsNext: {
        id: 'whats-next',
        title: 'O que vem a seguir',
        content:
          '**A próxima era combina controle local com IA local: uma casa que executa automações e um assistente em linguagem natural inteiramente no seu próprio hardware.** O Matter facilita a interoperabilidade enquanto a IA local adiciona inteligência sem a nuvem.',
        columns: ['Era', 'Anos aprox.', 'Tecnologia definidora', 'Nuvem ou local'],
        rows: [
          { 'Era': 'Protótipos', 'Anos aprox.': '1966–1974', 'Tecnologia definidora': 'ECHO IV, Kitchen Computer', 'Nuvem ou local': 'Local' },
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
          { q: 'Qual é a história da automação residencial?', a: 'A automação residencial começou com protótipos únicos nos anos 1960, como o ECHO IV em 1966, virou produto de consumo com o controle por rede elétrica X10 em 1975, passou ao sem fio com Z-Wave e Zigbee nos anos 2000, à nuvem com Nest (2011) e Amazon Echo (2014), ganhou o padrão Matter em 2022 e agora volta ao controle local com IA no dispositivo.' },
          { q: 'Qual foi a primeira casa inteligente?', a: 'O exemplo documentado mais antigo é o ECHO IV, construído em 1966 pelo engenheiro da Westinghouse Jim Sutherland para controlar sistemas da casa, como o termostato. Ele nunca foi vendido, por isso o X10 (1975) costuma ser citado como o primeiro sistema de automação residencial disponível comercialmente.' },
          { q: 'Quais encerramentos de serviços em nuvem deixaram dispositivos domésticos sem funções?', a: 'Casos notáveis são o hub Revolv (serviço encerrado pela Nest em maio de 2016), a Insteon (fora do ar segundo relatos sem aviso em abril de 2022) e os termostatos Nest Learning de 1ª e 2ª geração (suporte encerrado em 25 de outubro de 2025, restando apenas o controle manual no aparelho).' },
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
      headline: 'História da automação residencial: do X10 à IA local (2026)',
      description: 'História da automação residencial e das casas inteligentes: ECHO IV (1966), X10 (1975), Z-Wave, Zigbee, Nest e Echo, Matter 1.5 e a volta à IA local.',
      url: 'https://www.promptquorum.com/pt/smart-home/history-of-smart-home-technology',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: 'História da automação residencial' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: 'Qual é a história da automação residencial?', acceptedAnswer: { '@type': 'Answer', text: 'De protótipos como o ECHO IV (1966) ao X10 em 1975, à malha sem fio, à era da nuvem, ao Matter em 2022 e à volta ao controle local com IA no dispositivo.' } },
        { '@type': 'Question', name: 'Qual foi a primeira casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'O ECHO IV (1966) é a primeira casa inteligente documentada, mas nunca foi vendido; o X10 (1975) costuma ser citado como o primeiro sistema comercial.' } },
        { '@type': 'Question', name: 'Quais encerramentos de serviços em nuvem deixaram dispositivos domésticos sem funções?', acceptedAnswer: { '@type': 'Answer', text: 'Revolv (maio de 2016), Insteon (abril de 2022) e termostatos Nest Learning de 1ª e 2ª geração (25 de outubro de 2025).' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-18',
    next_refresh_due: '2027-04-18',
    theme: 'Smart Home Foundations',
    heroImage: '/images/history-of-smart-home-technology-overview-hero-zh.webp',
    title: '家庭自动化的历史：从 X10 到本地AI（2026）',
    seoTitle: '家庭自动化与智能家居的历史：1966年至2026年',
    intro:
      '家庭自动化的历史从20世纪60年代的原型机和 X10 电力线控制（1975年）出发，经过 Z-Wave 和 Zigbee、Nest 与 Echo 的云时代、Matter 标准，走向如今借助设备端AI回归本地控制。本指南梳理从第一个智能家居到今天的脉络，并解释为什么钟摆正从依赖云端回到本地自主。',
    metaDescription:
      '家庭自动化与智能家居的历史：ECHO IV（1966年）、X10（1975年）、Z-Wave、Zigbee、Nest 与 Echo、Matter 1.5，以及回归本地AI。',
    twitterDescription:
      '从1966年的原型机和 X10（1975年）到 Matter 与本地AI：智能家居从本地到云端，再回到本地。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    audience: '想了解智能家居技术如何发展的读者',
    primaryTerm: 'history of smart home technology',
    targetKeywords: [
      '家庭自动化的历史',
      '第一个智能家居',
      '智能家居历史',
      '智能家居简史',
      'x10 家庭自动化 历史',
      '智能家居 演进',
      '智能家居 起源',
    ],
    leadAnswerBlock:
      '**家庭自动化始于 ECHO IV（1966年）等20世纪60年代的单件原型机，1975年借助 X10 电力线控制成为消费产品，随后转向无线网状网络（Z-Wave、Zigbee），在 Nest（2011年）和 Amazon Echo（2014年）带动下进入云时代，2022年迎来 Matter 标准，如今正借助设备端AI回归本地控制。** 这一脉络是一个钟摆：从本地到云端，再回到本地。',
    quickAnswerTop: {
      zh: {
        question: '智能家居技术是如何演进的？',
        answer:
          '智能家居技术始于1975年的 X10 电力线信号，2000年代转向 Z-Wave、Zigbee 等无线网状协议，2010年代进入由 Nest 和 Amazon Echo 主导的云端互联时代。Matter 于2022年问世以统一设备，而当前的转变正回归借助设备端AI的本地控制。',
        bullets: [
          'X10 之前（1966–1969年）：ECHO IV 和 Kitchen Computer 等单件原型机',
          'X10（1975）：首个大众化家庭自动化，经电力线',
          'Z-Wave（2001）与 Zigbee（2000年代中期）：无线网状',
          '云端时代：Nest（2011）、Amazon Echo（2014）、Apple HomeKit（2014）',
          'Matter（2022）：统一的互操作标准',
          '2026：回归本地控制并加上设备端AI',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: 'X10 之前', anchor: 'before-x10' },
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
          'ECHO IV（1966年）等原型机在先，X10（1975年）使家庭自动化成为产品',
          'X10（1975）是首个大众化的家庭自动化系统，通过电力线传送信号',
          'Z-Wave（2001）与 Zigbee（2000年代中期）带来低功耗无线网状网络',
          '云端时代随 Nest（2011）以及 Amazon Echo、Apple HomeKit（2014）到来',
          'Matter（2022）增加了跨厂商的互操作标准',
          '2026年趋势摆回到借助设备端AI的本地控制',
          '这一模式是钟摆：本地控制、云端依赖，再回到本地',
        ],
      },
      beforeX10: {
        id: 'before-x10',
        title: 'X10 之前：最早的智能家居（20世纪60年代）',
        content:
          '**第一个智能家居是 ECHO IV，这是1966年由西屋电气工程师 Jim Sutherland 制造的单件家用计算机，可控制电视、恒温器和空调等家庭系统，但从未上市。** 家庭自动化作为产品类别要到约十年后才出现。',
        items: [
          '**ECHO IV（1966年）：**“Electronic Computing Home Operator”负责家务控制并记录家庭财务，从未商业销售。',
          '**Kitchen Computer（1969年）：**Neiman Marcus 在目录中以约1万美元推出基于 Honeywell 的厨房计算机；据报道，一台也没有卖出。',
          '**意义：**两者都是只服务单栋建筑的完全本地机器，正是本地优先回潮所回归的架构。',
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
        image: '/images/history-of-smart-home-technology-timeline-en.svg',
        imageCaption: '智能家居技术的五个时代(1975年至2026年):X10电力线控制、Z-Wave与Zigbee无线网状网络、Nest与Amazon Echo的云端时代、2022年的Matter标准,以及2026年的本地AI控制。',
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
          '2025年11月发布的 Matter 1.5 新增了支持 WebRTC 流媒体的摄像头、统一的闭合件模型（遮阳帘、闸门、车库门）、土壤传感器以及能源电价数据。',
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
          '具体案例：Nest 于2016年5月终止 Revolv 中枢的服务，Insteon 于2022年4月据报道无预警下线，Google 于2025年10月25日终止对第一、二代 Nest Learning Thermostat 的支持，使其只能手动操作。',
        ],
        image: '/images/history-of-smart-home-technology-pendulum-en.svg',
        imageCaption: '智能家居50年的钟摆:1975至2010年X10与Z-Wave的本地控制、2011至2021年Nest与Amazon Echo的云端时代,以及2026年借助Matter回归本地AI控制。',
      },
      whatsNext: {
        id: 'whats-next',
        title: '接下来是什么',
        content:
          '**下一个时代把本地控制与本地AI结合：一个完全在你自己的硬件上运行自动化和自然语言助手的家。** Matter 让互操作更容易，而本地AI在无云端的情况下增添智能。',
        columns: ['时代', '大致年份', '标志性技术', '云端还是本地'],
        rows: [
          { '时代': '原型机', '大致年份': '1966–1974年', '标志性技术': 'ECHO IV、Kitchen Computer', '云端还是本地': '本地' },
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
          { q: '家庭自动化的历史是怎样的？', a: '家庭自动化始于20世纪60年代的单件原型机，如1966年的 ECHO IV；1975年借助 X10 电力线控制成为消费产品；2000年代随 Z-Wave 和 Zigbee 走向无线；随 Nest（2011年）和 Amazon Echo（2014年）转向云端；2022年迎来 Matter 标准；如今借助设备端AI回归本地控制。' },
          { q: '第一个智能家居是什么？', a: '有记录的最早例子是 ECHO IV，由西屋电气工程师 Jim Sutherland 于1966年制造，用于控制恒温器等家庭系统。它从未出售，因此通常把 X10（1975年）视为第一个商用的家庭自动化系统。' },
          { q: '哪些云服务关停让智能家居设备失去了功能？', a: '典型案例包括 Nest 终止服务的 Revolv 中枢（2016年5月）、据报道无预警下线的 Insteon（2022年4月），以及支持于2025年10月25日结束、只剩设备本体手动控制的第一、二代 Nest Learning Thermostat。' },
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
      headline: '家庭自动化的历史：从 X10 到本地AI（2026）',
      description: '家庭自动化与智能家居的历史：ECHO IV（1966年）、X10（1975年）、Z-Wave、Zigbee、Nest 与 Echo、Matter 1.5，以及回归本地AI。',
      url: 'https://www.promptquorum.com/zh/smart-home/history-of-smart-home-technology',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-18',
      about: [{ '@type': 'Thing', name: '家庭自动化历史' }, { '@type': 'Thing', name: 'X10' }, { '@type': 'Thing', name: 'Matter' }],
      'proficiencyLevel': 'Beginner',
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
        { '@type': 'Question', name: '家庭自动化的历史是怎样的？', acceptedAnswer: { '@type': 'Answer', text: '从 ECHO IV（1966年）等原型机到1975年的 X10、无线网状网络、云时代、2022年的 Matter，再借助设备端AI回归本地控制。' } },
        { '@type': 'Question', name: '第一个智能家居是什么？', acceptedAnswer: { '@type': 'Answer', text: 'ECHO IV（1966年）是有记录的最早智能家居但从未出售；X10（1975年）通常被视为第一个商用系统。' } },
        { '@type': 'Question', name: '哪些云服务关停让智能家居设备失去了功能？', acceptedAnswer: { '@type': 'Answer', text: 'Revolv（2016年5月）、Insteon（2022年4月）和第一、二代 Nest Learning Thermostat（2025年10月25日）。' } },
      ],
    },
  },
}
