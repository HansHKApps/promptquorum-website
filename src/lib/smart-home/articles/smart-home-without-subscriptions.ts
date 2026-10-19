import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-en.webp',
    title: 'How to Build a Smart Home With Zero Subscriptions (2026)',
    seoTitle: 'Smart Home Without Subscriptions: 2026 Setup Guide',
    intro:
      'You can build a smart home with zero subscriptions by choosing local-capable devices and a local hub, paying one-time hardware costs instead of monthly fees. This guide shows where subscriptions hide, the no-subscription local stack, devices that charge no fees, local camera storage, and the one-time-cost math that makes local cheaper over time.',
    metaDescription:
      'Build a smart home with zero subscriptions: local-capable devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
    twitterDescription:
      'Build a smart home with no subscriptions: local devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People avoiding recurring smart home fees',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'smart home no subscription',
      'smart home without subscriptions',
      'no fee smart home',
      'local camera no subscription',
      'subscription free smart home',
    ],
    leadAnswerBlock:
      '**Build a subscription-free smart home by choosing local-capable devices, a local hub (Home Assistant), and local camera storage with Frigate — you pay one-time hardware costs instead of monthly fees.** Cloud cameras and premium features are where subscriptions hide.',
    quickAnswerTop: {
      en: {
        question: 'How do I build a smart home with no subscriptions?',
        answer:
          'Choose local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi), run a local hub like Home Assistant, and record cameras locally with Frigate instead of a cloud plan. This replaces recurring fees for camera storage, AI detection, and premium features with a one-time hardware cost.',
        bullets: [
          'Subscriptions hide in camera storage, AI detection, premium features',
          'Local hub (Home Assistant) runs control and automations free',
          'Frigate records cameras locally with no monthly fee',
          'Local-capable devices avoid cloud-account requirements',
          'One-time hardware replaces recurring fees',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Where Subscriptions Hide', anchor: 'where-hide' },
      { label: 'The No-Subscription Stack', anchor: 'no-sub-stack' },
      { label: 'Devices With No Fees', anchor: 'no-fee-devices' },
      { label: 'Local Camera Storage', anchor: 'camera-storage' },
      { label: 'The One-Time-Cost Math', anchor: 'cost-math' },
      { label: 'Which Platforms Charge', anchor: 'who-charges' },
      { label: 'Estimate Total Cost', anchor: 'estimate-tco' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'A subscription-free smart home uses local-capable devices, a local hub, and local camera storage to replace monthly fees with one-time hardware costs.' },
      { type: 'plain-terms', content: 'Smart home subscriptions usually come from cloud cameras: you pay monthly to store footage and unlock AI detection. By recording cameras locally and running a local hub, you pay once for hardware and never pay a monthly fee for the core features.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Most smart home subscriptions come from cloud camera storage and AI detection',
          'A local hub (Home Assistant) runs control and automations with no fee',
          'Frigate records cameras and runs AI detection locally, no subscription',
          'Choose local-capable devices that do not require a cloud account',
          'You trade one-time hardware cost for zero recurring fees',
          'Over time, the local approach is cheaper and keeps data private',
          'Core control is free on the major platforms; fees attach to cloud video history, AI camera features, and AI assistants',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Where Subscriptions Hide',
        content:
          '**Smart home subscriptions hide mostly in cloud cameras: footage storage, AI detection, and premium features behind a monthly plan.** Knowing where they hide lets you design them out.',
        items: [
          '**Camera storage:** cloud video history is the most common recurring fee.',
          '**AI detection:** person/object alerts are often gated behind a plan.',
          '**Premium features:** some ecosystems lock automations or extras behind subscriptions.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-en.svg',
        imageCaption: 'Subscription vs. local comparison across four functions — camera storage, AI detection, control and automations, and voice/AI — each recurring cloud plan replaced by a one-time local option: Frigate, Home Assistant, or a local LLM.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'The No-Subscription Stack',
        content:
          '**The no-subscription stack is a local hub plus local-capable devices and local camera recording — everything runs on hardware you own.** No core feature requires a monthly fee.',
        items: [
          'Local hub: Home Assistant runs control and automations free — see [getting started](/smart-home/home-assistant-getting-started).',
          'Local devices: Zigbee, Z-Wave, Matter, or local Wi-Fi with no cloud account.',
          'Local cameras: Frigate for recording and AI detection — see [local AI security cameras](/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-en.svg',
        imageCaption: 'Three-step path to a subscription-free smart home: local hub (Home Assistant), local devices (Zigbee, Z-Wave, Matter), and local cameras (Frigate) — ending with zero recurring subscription fees.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Devices With No Fees',
        content:
          '**Devices that use local protocols and do not require a cloud account charge no recurring fees.** Check the protocol and whether a cloud login is mandatory.',
        items: [
          'Zigbee and Z-Wave bulbs, plugs, and sensors have no fees.',
          'Matter devices commissioned to a local controller have no fees.',
          'Avoid devices that require a vendor subscription for basic control.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Local Camera Storage',
        content:
          '**Record cameras to local storage with Frigate instead of paying for cloud video history.** This removes the biggest recurring smart home fee.',
        items: [
          'Use RTSP/PoE cameras and record locally — footage stays in your home.',
          'Frigate provides AI detection with no subscription — see [local AI security cameras](/smart-home/local-ai-security-camera).',
          'Plan local disk for the retention you want; no monthly fee applies.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'The One-Time-Cost Math',
        content:
          '**Local replaces recurring monthly fees with one-time hardware, so it is cheaper over time.** The longer you run it, the larger the saving versus a subscription.',
        columns: ['Function', 'Subscription option', 'No-subscription local option'],
        rows: [
          { 'Function': 'Camera storage', 'Subscription option': 'Monthly cloud plan', 'No-subscription local option': 'Local disk + Frigate' },
          { 'Function': 'AI detection', 'Subscription option': 'Cloud plan add-on', 'No-subscription local option': 'Frigate (Coral/GPU)' },
          { 'Function': 'Control & automations', 'Subscription option': 'Sometimes gated', 'No-subscription local option': 'Home Assistant (free)' },
          { 'Function': 'Voice/AI', 'Subscription option': 'Cloud assistant', 'No-subscription local option': 'Local voice + local LLM' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'Which Platforms Charge — and What Stays Free',
        content:
          '**Basic device control is free on Google Home, Amazon Alexa, Apple Home, and Home Assistant; the fees attach to cloud video history, AI camera features, AI assistants, and remote-access add-ons.** Prices below are vendor list prices and vary by region and over time.',
        items: [
          '**Google Home:** live view and motion alerts need no plan; video history, Gemini Live, and Ask Home sit behind [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/) — Standard $10/month or $100/year, Advanced $20/month or $200/year. Premium replaced Nest Aware.',
          '**Amazon Alexa and Ring:** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) is included with Prime and costs $19.99/month without it (non-Prime users get a limited free text chat). Ring cloud video needs a [Ring Protect plan](https://ring.com/protect-plans) — in the EU, Solo €3.99, Multi €9.99, Pro €19.99 per month.',
          '**Apple Home:** HomeKit Secure Video needs [iCloud+](https://support.apple.com/guide/icloud/mme054c72692): the 50 GB plan covers one camera, 200 GB up to five, and 2 TB or more unlimited. Recordings do not count against your storage.',
          '**Philips Hue:** lights, the Hue Bridge, and basic control need no subscription; cloud video history for Hue Secure cameras is a paid add-on whose price varies by region.',
          '**Home Assistant:** the software is free. The optional [Home Assistant Cloud](https://www.nabucasa.com/pricing/) (renamed Home Assistant Link on December 2) costs €7.50/month or €75/year for remote access, backups, and voice processing.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'How to Estimate Total Cost of Ownership Before Buying',
        content:
          '**Total cost of ownership = upfront hardware + (monthly fees × months of use) + setup and replacement cost; compare it over 3 and 5 years.** Fees are rarely on the product page, so check the vendor plan page before you buy.',
        items: [
          '**Step 1:** list the cloud-dependent features you want: video history, AI alerts, an AI assistant, remote access.',
          '**Step 2:** read the vendor plan page and note the price per camera or per household, monthly vs. annual.',
          '**Step 3:** multiply by 36 and 60 months to get the 3-year and 5-year subscription cost.',
          '**Step 4:** price the local alternative once: hub, storage disk, and a detection accelerator if you use Frigate.',
          '**Step 5:** check what happens if you stop paying — live view only, or recordings lost.',
          '**Illustrative example:** three cameras on a hypothetical $4 per camera per month plan cost $144 per year, $432 over 3 years, and $720 over 5 years. This is an arithmetic example, not a vendor quote.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which smart home devices have no fees?', a: 'Devices using Zigbee, Z-Wave, or Matter, or local-Wi-Fi devices with a local API, charge no recurring fees because they work through a local hub with no cloud account. The recurring fees almost always come from cloud cameras and premium ecosystem features.' },
          { q: 'Can I store camera footage without a subscription?', a: 'Yes. Record RTSP or PoE cameras locally with Frigate to your own storage, which provides recording and AI detection with no subscription. Footage stays in your home, and you control retention by the disk space you provide.' },
          { q: 'How much do I save long-term?', a: 'Savings grow over time because you replace recurring monthly fees with a one-time hardware cost. The exact amount depends on how many cloud subscriptions you avoid, but a local setup is typically cheaper the longer you run it.' },
          { q: 'Are there hidden costs to a no-subscription smart home?', a: 'The main cost is upfront hardware (a local hub, a detection accelerator, and storage) plus your setup time. After that, core control, automations, and local camera recording run with no recurring fees.' },
          { q: 'Do smart bulbs, plugs, and other fixtures require ongoing subscription fees?', a: 'No. Bulbs, plugs, switches, and sensors do not charge recurring fees on any major platform. Some require a cloud account, but the fees attach to cameras, doorbells, and security services, not to the fixtures themselves.' },
          { q: 'Do AI smart home assistants need a paid subscription?', a: 'It depends on the vendor. Alexa+ is included with Prime and costs $19.99/month without it; Gemini Live for Home sits in Google Home Premium from $10/month. A local assistant such as Home Assistant with local voice processing has no fee.' },
          { q: 'Do smart home platforms require a subscription for core features?', a: 'Generally no. Core control and automations are free on Google Home, Alexa, Apple Home, and Home Assistant. Fees attach to video history, AI camera features, assistants, and remote access add-ons such as Home Assistant Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the broader local case',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — build the no-fee stack',
          '[Local AI Security Cameras with Frigate](/smart-home/local-ai-security-camera) — replace cloud camera fees',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI with no per-use fee',
          '[Balcony Solar Sizing, Yield & Payback](/balcony-solar/balcony-solar-sizing-yield-payback) — panel wattage, expected yield by location, and payback timeline — no recurring costs',
          '[Best Smart Locks With Local Control (2026)](/smart-home/best-smart-locks-local-control-2027) — no-subscription lock picks',
          '[Best Smart Thermostats for Local AI Control (2026)](/smart-home/best-smart-thermostats-local-ai-2027) — no-subscription thermostat picks',
          '[Best Energy-Monitoring Smart Plugs (2026)](/smart-home/best-energy-monitoring-smart-plugs-2027) — no-subscription energy monitoring',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Build a Smart Home With Zero Subscriptions (2026)',
      description: 'Build a smart home with zero subscriptions: local-capable devices, a local hub, and local camera storage replace monthly fees with one-time hardware costs.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-without-subscriptions',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Smart home subscriptions' }, { '@type': 'Thing', name: 'Local storage' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which smart home devices have no fees?', acceptedAnswer: { '@type': 'Answer', text: 'Devices using Zigbee, Z-Wave, or Matter, or local-Wi-Fi devices with a local API, charge no recurring fees because they work through a local hub. Fees almost always come from cloud cameras and premium features.' } },
        { '@type': 'Question', name: 'Can I store camera footage without a subscription?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Record RTSP or PoE cameras locally with Frigate to your own storage for recording and AI detection with no subscription. Footage stays in your home.' } },
        { '@type': 'Question', name: 'How much do I save long-term?', acceptedAnswer: { '@type': 'Answer', text: 'Savings grow over time because you replace recurring monthly fees with a one-time hardware cost. The local setup is typically cheaper the longer you run it.' } },
        { '@type': 'Question', name: 'Are there hidden costs to a no-subscription smart home?', acceptedAnswer: { '@type': 'Answer', text: 'The main cost is upfront hardware (hub, detection accelerator, storage) plus setup time. After that, core control, automations, and local camera recording run with no recurring fees.' } },
        { '@type': 'Question', name: 'Do smart bulbs, plugs, and other fixtures require ongoing subscription fees?', acceptedAnswer: { '@type': 'Answer', text: 'No. Bulbs, plugs, switches, and sensors do not charge recurring fees on any major platform. Some require a cloud account, but the fees attach to cameras, doorbells, and security services, not to the fixtures themselves.' } },
        { '@type': 'Question', name: 'Do AI smart home assistants need a paid subscription?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the vendor. Alexa+ is included with Prime and costs $19.99/month without it; Gemini Live for Home sits in Google Home Premium from $10/month. A local assistant such as Home Assistant with local voice processing has no fee.' } },
        { '@type': 'Question', name: 'Do smart home platforms require a subscription for core features?', acceptedAnswer: { '@type': 'Answer', text: 'Generally no. Core control and automations are free on Google Home, Alexa, Apple Home, and Home Assistant. Fees attach to video history, AI camera features, assistants, and remote access add-ons such as Home Assistant Cloud.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-ar.webp',
    title: 'كيف تبني منزلًا ذكيًا بدون اشتراكات (⁨2026⁩)',
    seoTitle: 'منزل ذكي بدون اشتراكات: دليل الإعداد ⁨2026⁩',
    intro:
      'يمكنك بناء منزل ذكي بدون اشتراكات باختيار أجهزة ذات قدرة محلية ومركز محلي، ودفع تكاليف أجهزة لمرة واحدة بدلًا من رسوم شهرية. يُظهر هذا الدليل أين تختبئ الاشتراكات، والمكدس المحلي بلا اشتراك، والأجهزة الخالية من الرسوم، وتخزين الكاميرات محليًا، وحساب التكلفة الواحدة الذي يجعل المحلي أرخص بمرور الوقت.',
    metaDescription:
      'معظم اشتراكات المنزل الذكي تأتي من الكاميرات السحابية. Home Assistant وFrigate يُغنيان عن الرسوم الشهرية بتكلفة أجهزة واحدة فقط.',
    twitterDescription:
      'ابنِ منزلًا ذكيًا بلا اشتراكات: أجهزة محلية ومركز محلي وتخزين كاميرات محلي يُحل محل الرسوم الشهرية بتكاليف أجهزة لمرة واحدة.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'الأشخاص الذين يتجنبون الرسوم المتكررة للمنزل الذكي',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'منزل ذكي بدون اشتراك',
      'منزل ذكي بدون اشتراكات',
      'منزل ذكي بلا رسوم',
      'كاميرا محلية بلا اشتراك',
      'منزل ذكي بلا اشتراك',
    ],
    leadAnswerBlock:
      '**ابنِ منزلًا ذكيًا خاليًا من الاشتراكات باختيار أجهزة ذات قدرة محلية ومركز محلي (Home Assistant) وتخزين كاميرات محلي مع Frigate — تدفع تكاليف أجهزة لمرة واحدة بدلًا من رسوم شهرية.** الكاميرات السحابية والميزات المتميزة هي الأماكن التي تختبئ فيها الاشتراكات.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبني منزلًا ذكيًا بدون اشتراكات؟',
        answer:
          'اختر أجهزة ذات قدرة محلية (Zigbee وZ-Wave وMatter وWi-Fi محلي)، وشغّل مركزًا محليًا مثل Home Assistant، وسجّل الكاميرات محليًا مع Frigate بدلًا من خطة سحابية. هذا يُحل محل الرسوم المتكررة لتخزين الكاميرا والكشف بالذكاء الاصطناعي والميزات المتميزة بتكلفة أجهزة لمرة واحدة.',
        bullets: [
          'تختبئ الاشتراكات في تخزين الكاميرا والكشف بالذكاء الاصطناعي والميزات المتميزة',
          'المركز المحلي (Home Assistant) يشغّل التحكم والأتمتات مجانًا',
          'Frigate يسجّل الكاميرات محليًا بدون رسوم شهرية',
          'الأجهزة ذات القدرة المحلية تتجنب متطلب حساب سحابي',
          'تكلفة الأجهزة لمرة واحدة تحل محل الرسوم المتكررة',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'أين تختبئ الاشتراكات', anchor: 'where-hide' },
      { label: 'المكدس بلا اشتراك', anchor: 'no-sub-stack' },
      { label: 'أجهزة بلا رسوم', anchor: 'no-fee-devices' },
      { label: 'تخزين الكاميرات محليًا', anchor: 'camera-storage' },
      { label: 'حساب التكلفة الواحدة', anchor: 'cost-math' },
      { label: 'المنصات التي تفرض رسومًا', anchor: 'who-charges' },
      { label: 'تقدير التكلفة الإجمالية', anchor: 'estimate-tco' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يستخدم المنزل الذكي الخالي من الاشتراكات أجهزةً ذات قدرة محلية ومركزًا محليًا وتخزين كاميرات محليًا لاستبدال الرسوم الشهرية بتكاليف أجهزة لمرة واحدة.' },
      { type: 'plain-terms', content: 'تأتي اشتراكات المنزل الذكي عادةً من الكاميرات السحابية: تدفع شهريًا لتخزين اللقطات وفتح الكشف بالذكاء الاصطناعي. بتسجيل الكاميرات محليًا وتشغيل مركز محلي، تدفع مرة واحدة للأجهزة ولا تدفع رسومًا شهرية أبدًا للميزات الأساسية.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'معظم اشتراكات المنزل الذكي تأتي من تخزين كاميرات السحابة والكشف بالذكاء الاصطناعي',
          'المركز المحلي (Home Assistant) يشغّل التحكم والأتمتات بدون رسوم',
          'Frigate يسجّل الكاميرات ويشغّل الكشف بالذكاء الاصطناعي محليًا، بلا اشتراك',
          'اختر أجهزة ذات قدرة محلية لا تتطلب حسابًا سحابيًا',
          'تتبادل تكلفة الأجهزة لمرة واحدة مقابل صفر رسوم متكررة',
          'مع مرور الوقت، النهج المحلي أرخص ويُبقي البيانات خاصة',
          'التحكم الأساسي مجاني على المنصات الكبرى؛ وتتركز الرسوم في سجل الفيديو السحابي وميزات الذكاء الاصطناعي للكاميرات ومساعدات الذكاء الاصطناعي',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'أين تختبئ الاشتراكات',
        content:
          '**تختبئ اشتراكات المنزل الذكي في الغالب في الكاميرات السحابية: تخزين اللقطات والكشف بالذكاء الاصطناعي والميزات المتميزة خلف خطة شهرية.** معرفة أماكن اختبائها تتيح لك تصميم الإعداد لتجنبها.',
        items: [
          '**تخزين الكاميرا:** سجل الفيديو السحابي هو أكثر الرسوم المتكررة شيوعًا.',
          '**الكشف بالذكاء الاصطناعي:** تنبيهات الأشخاص/الأشياء غالبًا محجوبة خلف خطة.',
          '**الميزات المتميزة:** بعض المنظومات تحجب الأتمتات أو الإضافات خلف اشتراكات.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-ar.svg',
        imageCaption: 'مقارنة بين الاشتراك والخيار المحلي عبر أربع وظائف: تخزين الكاميرا، الكشف بالذكاء الاصطناعي، التحكم والأتمتات، والصوت/الذكاء الاصطناعي. كل خطة سحابية متكررة تُستبدل بخيار محلي لمرة واحدة: Frigate أو Home Assistant أو نموذج لغوي محلي.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'المكدس بلا اشتراك',
        content:
          '**المكدس بلا اشتراك هو مركز محلي مع أجهزة ذات قدرة محلية وتسجيل كاميرات محلي — كل شيء يعمل على أجهزة تملكها.** لا تتطلب أي ميزة أساسية رسومًا شهرية.',
        items: [
          'المركز المحلي: Home Assistant يشغّل التحكم والأتمتات مجانًا — راجع [دليل البدء](/ar/smart-home/home-assistant-getting-started).',
          'الأجهزة المحلية: Zigbee وZ-Wave وMatter أو Wi-Fi محلي بدون حساب سحابي.',
          'الكاميرات المحلية: Frigate للتسجيل والكشف بالذكاء الاصطناعي — راجع [كاميرات الأمان المحلية بالذكاء الاصطناعي](/ar/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-ar.svg',
        imageCaption: 'مسار من ثلاث خطوات إلى منزل ذكي بلا اشتراكات: مركز محلي (Home Assistant)، أجهزة محلية (Zigbee وZ-Wave وMatter)، وكاميرات محلية (Frigate) — لينتهي بلا رسوم اشتراك متكررة.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'أجهزة بلا رسوم',
        content:
          '**الأجهزة التي تستخدم بروتوكولات محلية ولا تتطلب حسابًا سحابيًا لا تُحصّل رسومًا متكررة.** تحقق من البروتوكول وما إذا كان تسجيل الدخول السحابي إلزاميًا.',
        items: [
          'مصابيح وقوابس وحساسات Zigbee وZ-Wave خالية من الرسوم.',
          'أجهزة Matter المفعّلة عبر متحكم محلي خالية من الرسوم.',
          'تجنب الأجهزة التي تتطلب اشتراكًا من المورد للتحكم الأساسي.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'تخزين الكاميرات محليًا',
        content:
          '**سجّل الكاميرات على تخزين محلي مع Frigate بدلًا من الدفع مقابل سجل الفيديو السحابي.** هذا يُزيل أكبر رسوم متكررة في المنزل الذكي.',
        items: [
          'استخدم كاميرات RTSP/PoE وسجّل محليًا — تبقى اللقطات في منزلك.',
          'يوفر Frigate الكشف بالذكاء الاصطناعي بدون اشتراك — راجع [كاميرات الأمان المحلية بالذكاء الاصطناعي](/ar/smart-home/local-ai-security-camera).',
          'خطط للقرص المحلي حسب فترة الاحتفاظ التي تريدها؛ لا تطبق رسوم شهرية.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'حساب التكلفة الواحدة',
        content:
          '**المحلي يستبدل الرسوم الشهرية المتكررة بأجهزة لمرة واحدة، لذا فهو أرخص بمرور الوقت.** كلما طالت مدة تشغيله، كانت التوفيرات أكبر مقارنة بالاشتراك.',
        columns: ['الوظيفة', 'خيار الاشتراك', 'الخيار المحلي بلا اشتراك'],
        rows: [
          { 'الوظيفة': 'تخزين الكاميرا', 'خيار الاشتراك': 'خطة سحابية شهرية', 'الخيار المحلي بلا اشتراك': 'قرص محلي + Frigate' },
          { 'الوظيفة': 'الكشف بالذكاء الاصطناعي', 'خيار الاشتراك': 'إضافة في خطة سحابية', 'الخيار المحلي بلا اشتراك': 'Frigate (Coral/GPU)' },
          { 'الوظيفة': 'التحكم والأتمتات', 'خيار الاشتراك': 'أحيانًا محجوب', 'الخيار المحلي بلا اشتراك': 'Home Assistant (مجاني)' },
          { 'الوظيفة': 'الصوت/الذكاء الاصطناعي', 'خيار الاشتراك': 'مساعد سحابي', 'الخيار المحلي بلا اشتراك': 'صوت محلي + نموذج لغوي محلي' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'أي المنصات تفرض رسومًا وما الذي يبقى مجانًا',
        content:
          '**التحكم الأساسي بالأجهزة مجاني في Google Home وAmazon Alexa وApple Home وHome Assistant؛ وتتركز الرسوم في سجل الفيديو السحابي وميزات الذكاء الاصطناعي للكاميرات ومساعدات الذكاء الاصطناعي وإضافات الوصول عن بُعد.** الأسعار أدناه هي أسعار القوائم المعلنة من الشركات (الولايات المتحدة والاتحاد الأوروبي)، وتختلف حسب المنطقة والوقت.',
        items: [
          '**Google Home:** العرض المباشر وتنبيهات الحركة لا يتطلبان باقة؛ أما سجل الفيديو وGemini Live وAsk Home فضمن [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/) – Standard بسعر 10 دولارات شهريًا أو 100 دولار سنويًا، وAdvanced بسعر 20 دولارًا شهريًا أو 200 دولار سنويًا. وقد حلّت Premium محل Nest Aware.',
          '**Amazon Alexa وRing:** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) مشمول مع Prime ويكلف 19.99 دولارًا شهريًا بدونه (لغير مشتركي Prime دردشة نصية مجانية محدودة فقط). ويتطلب فيديو Ring السحابي [باقة Ring Protect](https://ring.com/protect-plans) – في الاتحاد الأوروبي: Solo بـ 3.99 يورو وMulti بـ 9.99 يورو وPro بـ 19.99 يورو شهريًا.',
          '**Apple Home:** يتطلب HomeKit Secure Video اشتراك [iCloud+](https://support.apple.com/guide/icloud/mme054c72692): باقة 50 جيجابايت تغطي كاميرا واحدة، و200 جيجابايت حتى خمس كاميرات، و2 تيرابايت أو أكثر عددًا غير محدود. ولا تُحسب التسجيلات من مساحة التخزين.',
          '**Philips Hue:** المصابيح وجسر Hue والتحكم الأساسي لا تتطلب اشتراكًا؛ أما سجل الفيديو السحابي لكاميرات Hue Secure فهو إضافة مدفوعة يختلف سعرها حسب المنطقة.',
          '**Home Assistant:** البرنامج مجاني. وخدمة [Home Assistant Cloud](https://www.nabucasa.com/pricing/) الاختيارية (تُسمّى Home Assistant Link اعتبارًا من 2 ديسمبر) تكلف 7.50 يورو شهريًا أو 75 يورو سنويًا للوصول عن بُعد والنسخ الاحتياطي ومعالجة الصوت.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'كيف تقدّر التكلفة الإجمالية قبل الشراء',
        content:
          '**التكلفة الإجمالية = تكلفة العتاد المقدّمة + (الرسوم الشهرية × أشهر الاستخدام) + تكلفة الإعداد والاستبدال؛ قارنها على 3 و5 سنوات.** نادرًا ما تظهر الرسوم في صفحة المنتج، لذا راجع صفحة باقات الشركة قبل الشراء.',
        items: [
          '**الخطوة 1:** اكتب الميزات السحابية التي تريدها: سجل الفيديو، تنبيهات الذكاء الاصطناعي، مساعد الذكاء الاصطناعي، الوصول عن بُعد.',
          '**الخطوة 2:** اقرأ صفحة الباقات وسجّل السعر لكل كاميرا أو لكل منزل، شهريًا أو سنويًا.',
          '**الخطوة 3:** اضرب في 36 و60 شهرًا لتحصل على تكلفة الاشتراك على 3 و5 سنوات.',
          '**الخطوة 4:** قدّر تكلفة البديل المحلي مرة واحدة: المحور وقرص التخزين ومسرّع الكشف إذا استخدمت Frigate.',
          '**الخطوة 5:** تحقق مما يحدث إذا توقفت عن الدفع: العرض المباشر فقط أم فقدان التسجيلات.',
          '**مثال توضيحي:** ثلاث كاميرات بباقة افتراضية قدرها 4 يورو لكل كاميرا شهريًا تكلف 144 يورو سنويًا و432 يورو على 3 سنوات و720 يورو على 5 سنوات. هذا مثال حسابي وليس عرض سعر من شركة.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'أي أجهزة المنزل الذكي خالية من الرسوم؟', a: 'الأجهزة التي تستخدم Zigbee أو Z-Wave أو Matter، أو أجهزة Wi-Fi المحلية بواجهة برمجية محلية، لا تُحصّل رسومًا متكررة لأنها تعمل عبر مركز محلي بدون حساب سحابي. الرسوم المتكررة تأتي دائمًا تقريبًا من الكاميرات السحابية وميزات المنظومات المتميزة.' },
          { q: 'هل يمكنني تخزين لقطات الكاميرا بدون اشتراك؟', a: 'نعم. سجّل كاميرات RTSP أو PoE محليًا مع Frigate على تخزينك الخاص، مما يوفر التسجيل والكشف بالذكاء الاصطناعي بدون اشتراك. تبقى اللقطات في منزلك وتتحكم في فترة الاحتفاظ بالمساحة التي توفرها.' },
          { q: 'كم أوفر على المدى البعيد؟', a: 'تنمو التوفيرات بمرور الوقت لأنك تستبدل الرسوم الشهرية المتكررة بتكلفة أجهزة لمرة واحدة. يعتمد المبلغ الدقيق على عدد اشتراكات السحابة التي تتجنبها، لكن الإعداد المحلي عادةً أرخص كلما طالت مدة تشغيله.' },
          { q: 'هل هناك تكاليف خفية في المنزل الذكي بلا اشتراك؟', a: 'التكلفة الرئيسية هي الأجهزة المقدمة (مركز محلي ومسرّع كشف وتخزين) إضافةً إلى وقت الإعداد. بعد ذلك، يعمل التحكم الأساسي والأتمتات وتسجيل الكاميرات محليًا بدون رسوم متكررة.' },
          { q: 'هل تتطلب المصابيح والمقابس الذكية وغيرها رسوم اشتراك مستمرة؟', a: 'لا. المصابيح والمقابس والمفاتيح والحساسات لا تفرض رسومًا متكررة على أي منصة كبرى. بعضها يتطلب حسابًا سحابيًا، لكن الرسوم تتركز في الكاميرات وأجراس الأبواب وخدمات الأمان لا في الأجهزة نفسها.' },
          { q: 'هل تحتاج مساعدات المنزل الذكي بالذكاء الاصطناعي إلى اشتراك مدفوع؟', a: 'يعتمد ذلك على الشركة. Alexa+ مشمول مع Prime ويكلف 19.99 دولارًا شهريًا بدونه؛ وGemini Live للمنزل ضمن Google Home Premium بدءًا من 10 دولارات شهريًا. أما المساعد المحلي مثل Home Assistant مع معالجة صوت محلية فلا رسوم عليه.' },
          { q: 'هل تتطلب منصات المنزل الذكي اشتراكًا للميزات الأساسية؟', a: 'عمومًا لا. التحكم الأساسي والأتمتة مجانيان في Google Home وAlexa وApple Home وHome Assistant. وتتركز الرسوم في سجل الفيديو وميزات الذكاء الاصطناعي للكاميرات والمساعدات وإضافات الوصول عن بُعد مثل Home Assistant Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[لماذا يتفوق المنزل الذكي المحلي على السحابة](/ar/smart-home/why-local-smart-home-beats-cloud) — الحجة الأشمل للمحلي',
          '[الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — بناء المكدس بلا رسوم',
          '[كاميرات الأمان المحلية بالذكاء الاصطناعي مع Frigate](/ar/smart-home/local-ai-security-camera) — استبدال رسوم الكاميرا السحابية',
          '[ما هي نماذج اللغة المحلية](/ar/local-llms/what-are-local-llms) — عبر المجموعات: ذكاء اصطناعي محلي خاص بدون رسوم لكل استخدام',
          '[حجم الطاقة الشمسية للشرفة والإنتاجية والاسترداد](/ar/balcony-solar/balcony-solar-sizing-yield-payback) — واط اللوحة والإنتاجية المتوقعة حسب الموقع وجدول الاسترداد — بدون رسوم متكررة',
          '[أفضل الأقفال الذكية بالتحكم المحلي (2026)](/ar/smart-home/best-smart-locks-local-control-2027) — أقفال بدون اشتراك',
          '[أفضل منظمات الحرارة الذكية للتحكم بالذكاء الاصطناعي المحلي (2026)](/ar/smart-home/best-smart-thermostats-local-ai-2027) — منظمات حرارة بدون اشتراك',
          '[أفضل المقابس الذكية لمراقبة استهلاك الطاقة (2026)](/ar/smart-home/best-energy-monitoring-smart-plugs-2027) — مراقبة طاقة بدون اشتراك',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كيف تبني منزلًا ذكيًا بدون اشتراكات (2026)',
      description: 'ابنِ منزلًا ذكيًا بدون اشتراكات: أجهزة محلية ومركز محلي وتخزين كاميرات محلي يُحل محل الرسوم الشهرية بتكلفة أجهزة لمرة واحدة.',
      url: 'https://www.promptquorum.com/ar/smart-home/smart-home-without-subscriptions',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'اشتراكات المنزل الذكي' }, { '@type': 'Thing', name: 'التخزين المحلي' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'أي أجهزة المنزل الذكي خالية من الرسوم؟', acceptedAnswer: { '@type': 'Answer', text: 'الأجهزة التي تستخدم Zigbee أو Z-Wave أو Matter، أو Wi-Fi محليًا بواجهة برمجية محلية، لا تُحصّل رسومًا لأنها تعمل عبر مركز محلي. الرسوم تأتي دائمًا تقريبًا من الكاميرات السحابية والميزات المتميزة.' } },
        { '@type': 'Question', name: 'هل يمكنني تخزين لقطات الكاميرا بدون اشتراك؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. سجّل كاميرات RTSP أو PoE محليًا مع Frigate للتسجيل والكشف بالذكاء الاصطناعي بدون اشتراك. تبقى اللقطات في منزلك.' } },
        { '@type': 'Question', name: 'كم أوفر على المدى البعيد؟', acceptedAnswer: { '@type': 'Answer', text: 'تنمو التوفيرات بمرور الوقت لأنك تستبدل الرسوم الشهرية بتكلفة أجهزة لمرة واحدة. الإعداد المحلي عادةً أرخص كلما طالت مدة تشغيله.' } },
        { '@type': 'Question', name: 'هل هناك تكاليف خفية في المنزل الذكي بلا اشتراك؟', acceptedAnswer: { '@type': 'Answer', text: 'التكلفة الرئيسية هي الأجهزة المقدمة (مركز محلي ومسرّع كشف وتخزين) إضافةً إلى وقت الإعداد. بعد ذلك تعمل الميزات الأساسية بدون رسوم متكررة.' } },
        { '@type': 'Question', name: 'هل تتطلب المصابيح والمقابس الذكية وغيرها رسوم اشتراك مستمرة؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. المصابيح والمقابس والمفاتيح والحساسات لا تفرض رسومًا متكررة على أي منصة كبرى. بعضها يتطلب حسابًا سحابيًا، لكن الرسوم تتركز في الكاميرات وأجراس الأبواب وخدمات الأمان لا في الأجهزة نفسها.' } },
        { '@type': 'Question', name: 'هل تحتاج مساعدات المنزل الذكي بالذكاء الاصطناعي إلى اشتراك مدفوع؟', acceptedAnswer: { '@type': 'Answer', text: 'يعتمد ذلك على الشركة. Alexa+ مشمول مع Prime ويكلف 19.99 دولارًا شهريًا بدونه؛ وGemini Live للمنزل ضمن Google Home Premium بدءًا من 10 دولارات شهريًا. أما المساعد المحلي مثل Home Assistant مع معالجة صوت محلية فلا رسوم عليه.' } },
        { '@type': 'Question', name: 'هل تتطلب منصات المنزل الذكي اشتراكًا للميزات الأساسية؟', acceptedAnswer: { '@type': 'Answer', text: 'عمومًا لا. التحكم الأساسي والأتمتة مجانيان في Google Home وAlexa وApple Home وHome Assistant. وتتركز الرسوم في سجل الفيديو وميزات الذكاء الاصطناعي للكاميرات والمساعدات وإضافات الوصول عن بُعد مثل Home Assistant Cloud.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-de.webp',
    title: 'Ein Smart Home ganz ohne Abonnements bauen (2026)',
    seoTitle: 'Smart Home ohne Abonnements: Aufbau-Anleitung 2026',
    intro:
      'Sie können ein Smart Home ganz ohne Abonnements bauen, indem Sie lokal-fähige Geräte und einen lokalen Hub wählen und einmalige Hardwarekosten statt monatlicher Gebühren zahlen. Dieser Leitfaden zeigt, wo sich Abonnements verstecken, den abofreien lokalen Stack, Geräte ohne Gebühren, lokalen Kameraspeicher und die Einmalkosten-Rechnung, die lokal mit der Zeit günstiger macht.',
    metaDescription:
      'Smart Home ohne Abonnements bauen 2026: lokale Geräte, lokaler Hub und lokaler Kameraspeicher ersetzen monatliche Gebühren durch einmalige Hardwarekosten.',
    twitterDescription:
      'Ein Smart Home ohne Abonnements bauen: lokale Geräte, ein lokaler Hub und lokaler Kameraspeicher ersetzen monatliche Gebühren durch einmalige Hardwarekosten.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Menschen, die wiederkehrende Smart-Home-Gebühren vermeiden',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'smart home ohne abo',
      'smart home ohne abonnements',
      'smart home ohne gebühren',
      'lokale kamera ohne abo',
      'abofreies smart home',
    ],
    leadAnswerBlock:
      '**Bauen Sie ein abofreies Smart Home, indem Sie lokal-fähige Geräte, einen lokalen Hub (Home Assistant) und lokalen Kameraspeicher mit Frigate wählen – Sie zahlen einmalige Hardwarekosten statt monatlicher Gebühren.** Cloud-Kameras und Premium-Funktionen sind dort, wo sich Abonnements verstecken.',
    quickAnswerTop: {
      de: {
        question: 'Wie baue ich ein Smart Home ohne Abonnements?',
        answer:
          'Wählen Sie lokal-fähige Geräte (Zigbee, Z-Wave, Matter, lokales WLAN), betreiben Sie einen lokalen Hub wie Home Assistant und zeichnen Sie Kameras lokal mit Frigate statt mit einem Cloud-Tarif auf. Das ersetzt wiederkehrende Gebühren für Kameraspeicher, KI-Erkennung und Premium-Funktionen durch einmalige Hardwarekosten.',
        bullets: [
          'Abonnements verstecken sich in Kameraspeicher, KI-Erkennung, Premium-Funktionen',
          'Ein lokaler Hub (Home Assistant) betreibt Steuerung und Automatisierungen kostenlos',
          'Frigate zeichnet Kameras lokal ohne monatliche Gebühr auf',
          'Lokal-fähige Geräte vermeiden die Pflicht zu einem Cloud-Konto',
          'Einmalige Hardware ersetzt wiederkehrende Gebühren',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Wo sich Abonnements verstecken', anchor: 'where-hide' },
      { label: 'Der abofreie Stack', anchor: 'no-sub-stack' },
      { label: 'Geräte ohne Gebühren', anchor: 'no-fee-devices' },
      { label: 'Lokaler Kameraspeicher', anchor: 'camera-storage' },
      { label: 'Die Einmalkosten-Rechnung', anchor: 'cost-math' },
      { label: 'Welche Plattformen kosten', anchor: 'who-charges' },
      { label: 'Gesamtkosten schätzen', anchor: 'estimate-tco' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Ein abofreies Smart Home nutzt lokal-fähige Geräte, einen lokalen Hub und lokalen Kameraspeicher, um monatliche Gebühren durch einmalige Hardwarekosten zu ersetzen.' },
      { type: 'plain-terms', content: 'Smart-Home-Abonnements kommen meist von Cloud-Kameras: Sie zahlen monatlich, um Aufnahmen zu speichern und KI-Erkennung freizuschalten. Indem Sie Kameras lokal aufzeichnen und einen lokalen Hub betreiben, zahlen Sie einmal für Hardware und nie eine monatliche Gebühr für die Kernfunktionen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Die meisten Smart-Home-Abonnements kommen von Cloud-Kameraspeicher und KI-Erkennung',
          'Ein lokaler Hub (Home Assistant) betreibt Steuerung und Automatisierungen ohne Gebühr',
          'Frigate zeichnet Kameras auf und führt KI-Erkennung lokal aus, ohne Abonnement',
          'Wählen Sie lokal-fähige Geräte, die kein Cloud-Konto verlangen',
          'Sie tauschen einmalige Hardwarekosten gegen null wiederkehrende Gebühren',
          'Mit der Zeit ist der lokale Ansatz günstiger und hält Daten privat',
          'Die Kernsteuerung ist auf den großen Plattformen kostenlos; Gebühren hängen an Cloud-Videoverlauf, KI-Kamerafunktionen und KI-Assistenten',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Wo sich Abonnements verstecken',
        content:
          '**Smart-Home-Abonnements verstecken sich meist in Cloud-Kameras: Aufnahmenspeicher, KI-Erkennung und Premium-Funktionen hinter einem Monatstarif.** Zu wissen, wo sie sich verstecken, lässt Sie sie wegplanen.',
        items: [
          '**Kameraspeicher:** der Cloud-Videoverlauf ist die häufigste wiederkehrende Gebühr.',
          '**KI-Erkennung:** Personen-/Objektalarme sind oft hinter einem Tarif gesperrt.',
          '**Premium-Funktionen:** manche Ökosysteme sperren Automatisierungen oder Extras hinter Abonnements.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-de.svg',
        imageCaption: 'Abonnement- vs. lokaler Vergleich über vier Funktionen – Kameraspeicher, KI-Erkennung, Steuerung und Automatisierungen sowie Sprache/KI – jeder wiederkehrende Cloud-Tarif wird durch eine einmalige lokale Option ersetzt: Frigate, Home Assistant oder ein lokales LLM.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'Der abofreie Stack',
        content:
          '**Der abofreie Stack ist ein lokaler Hub plus lokal-fähige Geräte und lokale Kameraaufzeichnung – alles läuft auf Hardware, die Ihnen gehört.** Keine Kernfunktion erfordert eine monatliche Gebühr.',
        items: [
          'Lokaler Hub: Home Assistant betreibt Steuerung und Automatisierungen kostenlos – siehe [Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Lokale Geräte: Zigbee, Z-Wave, Matter oder lokales WLAN ohne Cloud-Konto.',
          'Lokale Kameras: Frigate für Aufzeichnung und KI-Erkennung – siehe [lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-de.svg',
        imageCaption: 'Dreistufiger Weg zu einem abofreien Smart Home: lokaler Hub (Home Assistant), lokale Geräte (Zigbee, Z-Wave, Matter) und lokale Kameras (Frigate) – am Ende keine wiederkehrenden Abo-Gebühren.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Geräte ohne Gebühren',
        content:
          '**Geräte, die lokale Protokolle nutzen und kein Cloud-Konto verlangen, erheben keine wiederkehrenden Gebühren.** Prüfen Sie das Protokoll und ob ein Cloud-Login zwingend ist.',
        items: [
          'Zigbee- und Z-Wave-Leuchtmittel, -Steckdosen und -Sensoren haben keine Gebühren.',
          'Matter-Geräte, die in einen lokalen Controller eingebunden sind, haben keine Gebühren.',
          'Vermeiden Sie Geräte, die für die Grundsteuerung ein Hersteller-Abonnement verlangen.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Lokaler Kameraspeicher',
        content:
          '**Zeichnen Sie Kameras mit Frigate auf lokalen Speicher auf, statt für Cloud-Videoverlauf zu zahlen.** Das entfernt die größte wiederkehrende Smart-Home-Gebühr.',
        items: [
          'Nutzen Sie RTSP/PoE-Kameras und zeichnen Sie lokal auf – Aufnahmen bleiben zu Hause.',
          'Frigate bietet KI-Erkennung ohne Abonnement – siehe [lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera).',
          'Planen Sie lokalen Datenträger für die gewünschte Aufbewahrung; keine monatliche Gebühr fällt an.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Die Einmalkosten-Rechnung',
        content:
          '**Lokal ersetzt wiederkehrende Monatsgebühren durch einmalige Hardware, also ist es mit der Zeit günstiger.** Je länger Sie es betreiben, desto größer die Ersparnis gegenüber einem Abonnement.',
        columns: ['Funktion', 'Abo-Option', 'Abofreie lokale Option'],
        rows: [
          { 'Funktion': 'Kameraspeicher', 'Abo-Option': 'Monatlicher Cloud-Tarif', 'Abofreie lokale Option': 'Lokaler Datenträger + Frigate' },
          { 'Funktion': 'KI-Erkennung', 'Abo-Option': 'Cloud-Tarif-Zusatz', 'Abofreie lokale Option': 'Frigate (Coral/GPU)' },
          { 'Funktion': 'Steuerung & Automatisierungen', 'Abo-Option': 'Manchmal gesperrt', 'Abofreie lokale Option': 'Home Assistant (kostenlos)' },
          { 'Funktion': 'Sprache/KI', 'Abo-Option': 'Cloud-Assistent', 'Abofreie lokale Option': 'Lokale Sprache + lokales LLM' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'Welche Plattformen kosten – und was kostenlos bleibt',
        content:
          '**Die Grundsteuerung ist bei Google Home, Amazon Alexa, Apple Home und Home Assistant kostenlos; Gebühren fallen für Cloud-Videoverlauf, KI-Kamerafunktionen, KI-Assistenten und Fernzugriffs-Zusätze an.** Die Preise unten sind Listenpreise der Anbieter und variieren nach Region und Zeit.',
        items: [
          '**Google Home:** Live-Ansicht und Bewegungsalarme brauchen keinen Tarif; Videoverlauf, Gemini Live und Ask Home gehören zu [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/) – Standard 10 $/Monat bzw. 100 $/Jahr, Advanced 20 $/Monat bzw. 200 $/Jahr. Premium hat Nest Aware ersetzt.',
          '**Amazon Alexa und Ring:** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) ist in Prime enthalten und kostet ohne Prime 19,99 $/Monat (ohne Prime gibt es nur einen begrenzten kostenlosen Text-Chat). Ring-Cloudvideo erfordert einen [Ring-Protect-Tarif](https://ring.com/protect-plans) – in der EU Solo 3,99 €, Multi 9,99 €, Pro 19,99 € pro Monat.',
          '**Apple Home:** HomeKit Secure Video braucht [iCloud+](https://support.apple.com/guide/icloud/mme054c72692): 50 GB decken eine Kamera ab, 200 GB bis zu fünf, 2 TB oder mehr unbegrenzt. Aufnahmen belegen keinen iCloud-Speicher.',
          '**Philips Hue:** Lampen, die Hue Bridge und die Grundsteuerung brauchen kein Abo; der Cloud-Videoverlauf der Hue-Secure-Kameras ist ein kostenpflichtiger Zusatz, dessen Preis je nach Region variiert.',
          '**Home Assistant:** Die Software ist kostenlos. Das optionale [Home Assistant Cloud](https://www.nabucasa.com/pricing/) (ab 2. Dezember Home Assistant Link) kostet 7,50 €/Monat bzw. 75 €/Jahr für Fernzugriff, Backups und Sprachverarbeitung.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'So schätzen Sie die Gesamtkosten vor dem Kauf',
        content:
          '**Gesamtkosten = einmalige Hardware + (Monatsgebühr × Nutzungsmonate) + Einrichtungs- und Ersatzkosten; vergleichen Sie über 3 und 5 Jahre.** Gebühren stehen selten auf der Produktseite – prüfen Sie vor dem Kauf die Tarifseite des Anbieters.',
        items: [
          '**Schritt 1:** Listen Sie die Cloud-Funktionen auf, die Sie wollen: Videoverlauf, KI-Alarme, KI-Assistent, Fernzugriff.',
          '**Schritt 2:** Lesen Sie die Tarifseite des Anbieters und notieren Sie den Preis pro Kamera oder Haushalt, monatlich vs. jährlich.',
          '**Schritt 3:** Multiplizieren Sie mit 36 und 60 Monaten für die Abo-Kosten über 3 und 5 Jahre.',
          '**Schritt 4:** Veranschlagen Sie die lokale Alternative einmalig: Hub, Speicherplatte und bei Frigate ein Erkennungs-Beschleuniger.',
          '**Schritt 5:** Prüfen Sie, was bei Zahlungsstopp passiert – nur Live-Ansicht oder verlorene Aufnahmen.',
          '**Rechenbeispiel:** Drei Kameras mit einem hypothetischen Tarif von 4 € pro Kamera und Monat kosten 144 € pro Jahr, 432 € in 3 Jahren und 720 € in 5 Jahren. Das ist ein Rechenbeispiel, kein Anbieterangebot.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Welche Smart-Home-Geräte haben keine Gebühren?', a: 'Geräte mit Zigbee, Z-Wave oder Matter oder lokale-WLAN-Geräte mit einer lokalen API erheben keine wiederkehrenden Gebühren, weil sie über einen lokalen Hub ohne Cloud-Konto funktionieren. Die wiederkehrenden Gebühren kommen fast immer von Cloud-Kameras und Premium-Ökosystem-Funktionen.' },
          { q: 'Kann ich Kameraaufnahmen ohne Abonnement speichern?', a: 'Ja. Zeichnen Sie RTSP- oder PoE-Kameras mit Frigate lokal auf Ihren eigenen Speicher auf, das Aufzeichnung und KI-Erkennung ohne Abonnement bietet. Aufnahmen bleiben zu Hause, und Sie steuern die Aufbewahrung über den bereitgestellten Speicherplatz.' },
          { q: 'Wie viel spare ich langfristig?', a: 'Die Ersparnis wächst mit der Zeit, weil Sie wiederkehrende Monatsgebühren durch einmalige Hardwarekosten ersetzen. Der genaue Betrag hängt davon ab, wie viele Cloud-Abonnements Sie vermeiden, aber ein lokales Setup ist in der Regel günstiger, je länger Sie es betreiben.' },
          { q: 'Gibt es versteckte Kosten bei einem abofreien Smart Home?', a: 'Die Hauptkosten sind die anfängliche Hardware (ein lokaler Hub, ein Erkennungs-Beschleuniger und Speicher) plus Ihre Einrichtungszeit. Danach laufen Kernsteuerung, Automatisierungen und lokale Kameraaufzeichnung ohne wiederkehrende Gebühren.' },
          { q: 'Verlangen smarte Leuchtmittel, Steckdosen und andere Geräte laufende Abogebühren?', a: 'Nein. Leuchtmittel, Steckdosen, Schalter und Sensoren verlangen auf keiner großen Plattform wiederkehrende Gebühren. Manche brauchen ein Cloud-Konto, aber die Gebühren hängen an Kameras, Türklingeln und Sicherheitsdiensten, nicht an den Geräten selbst.' },
          { q: 'Brauchen KI-Smart-Home-Assistenten ein bezahltes Abonnement?', a: 'Das hängt vom Anbieter ab. Alexa+ ist in Prime enthalten und kostet ohne Prime 19,99 $/Monat; Gemini Live für Home gehört ab 10 $/Monat zu Google Home Premium. Ein lokaler Assistent wie Home Assistant mit lokaler Sprachverarbeitung hat keine Gebühr.' },
          { q: 'Verlangen Smart-Home-Plattformen ein Abonnement für Kernfunktionen?', a: 'In der Regel nicht. Kernsteuerung und Automatisierungen sind bei Google Home, Alexa, Apple Home und Home Assistant kostenlos. Gebühren fallen für Videoverlauf, KI-Kamerafunktionen, Assistenten und Fernzugriffs-Zusätze wie Home Assistant Cloud an.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) – das breitere lokale Argument',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – den gebührenfreien Stack bauen',
          '[Lokale KI-Sicherheitskameras mit Frigate](/de/smart-home/local-ai-security-camera) – Cloud-Kamera-Gebühren ersetzen',
          '[Was lokale LLMs sind](/de/local-llms/what-are-local-llms) – clusterübergreifend: private lokale KI ohne Nutzungsgebühr',
          '[Balkonkraftwerk: Größe, Ertrag und Amortisation](/de/balcony-solar/balcony-solar-sizing-yield-payback) — Panel-Wattage, erwarteter Ertrag nach Standort, Amortisationszeit — keine laufenden Kosten',
          '[Die besten Smart Locks mit lokaler Steuerung (2026)](/de/smart-home/best-smart-locks-local-control-2027) – abo-freie Schloss-Empfehlungen',
          '[Beste smarte Thermostate für lokale KI-Steuerung (2026)](/de/smart-home/best-smart-thermostats-local-ai-2027) – abo-freie Thermostat-Empfehlungen',
          '[Die besten Energiemonitoring-Smart-Plugs (2026)](/de/smart-home/best-energy-monitoring-smart-plugs-2027) – abo-freies Energiemonitoring',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ein Smart Home ganz ohne Abonnements bauen (2026)',
      description: 'Smart Home ohne Abonnements bauen 2026: lokale Geräte, lokaler Hub und lokaler Kameraspeicher ersetzen monatliche Gebühren durch einmalige Hardwarekosten.',
      url: 'https://www.promptquorum.com/de/smart-home/smart-home-without-subscriptions',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Smart-Home-Abonnements' }, { '@type': 'Thing', name: 'Lokaler Speicher' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Welche Smart-Home-Geräte haben keine Gebühren?', acceptedAnswer: { '@type': 'Answer', text: 'Geräte mit Zigbee, Z-Wave oder Matter oder lokale-WLAN-Geräte mit lokaler API erheben keine wiederkehrenden Gebühren, weil sie über einen lokalen Hub funktionieren. Gebühren kommen fast immer von Cloud-Kameras und Premium-Funktionen.' } },
        { '@type': 'Question', name: 'Kann ich Kameraaufnahmen ohne Abonnement speichern?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Zeichnen Sie RTSP- oder PoE-Kameras mit Frigate lokal auf Ihren eigenen Speicher auf, für Aufzeichnung und KI-Erkennung ohne Abonnement. Aufnahmen bleiben zu Hause.' } },
        { '@type': 'Question', name: 'Wie viel spare ich langfristig?', acceptedAnswer: { '@type': 'Answer', text: 'Die Ersparnis wächst mit der Zeit, weil Sie wiederkehrende Monatsgebühren durch einmalige Hardwarekosten ersetzen. Ein lokales Setup ist in der Regel günstiger, je länger Sie es betreiben.' } },
        { '@type': 'Question', name: 'Gibt es versteckte Kosten bei einem abofreien Smart Home?', acceptedAnswer: { '@type': 'Answer', text: 'Die Hauptkosten sind die anfängliche Hardware (Hub, Erkennungs-Beschleuniger, Speicher) plus Einrichtungszeit. Danach laufen Kernsteuerung, Automatisierungen und lokale Kameraaufzeichnung ohne wiederkehrende Gebühren.' } },
        { '@type': 'Question', name: 'Verlangen smarte Leuchtmittel, Steckdosen und andere Geräte laufende Abogebühren?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Leuchtmittel, Steckdosen, Schalter und Sensoren verlangen auf keiner großen Plattform wiederkehrende Gebühren. Manche brauchen ein Cloud-Konto, aber die Gebühren hängen an Kameras, Türklingeln und Sicherheitsdiensten, nicht an den Geräten selbst.' } },
        { '@type': 'Question', name: 'Brauchen KI-Smart-Home-Assistenten ein bezahltes Abonnement?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt vom Anbieter ab. Alexa+ ist in Prime enthalten und kostet ohne Prime 19,99 $/Monat; Gemini Live für Home gehört ab 10 $/Monat zu Google Home Premium. Ein lokaler Assistent wie Home Assistant mit lokaler Sprachverarbeitung hat keine Gebühr.' } },
        { '@type': 'Question', name: 'Verlangen Smart-Home-Plattformen ein Abonnement für Kernfunktionen?', acceptedAnswer: { '@type': 'Answer', text: 'In der Regel nicht. Kernsteuerung und Automatisierungen sind bei Google Home, Alexa, Apple Home und Home Assistant kostenlos. Gebühren fallen für Videoverlauf, KI-Kamerafunktionen, Assistenten und Fernzugriffs-Zusätze wie Home Assistant Cloud an.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-es.webp',
    title: 'Cómo Construir un Smart Home con Cero Suscripciones (2026)',
    seoTitle: 'Smart Home sin Suscripciones: Guía de Configuración 2026',
    intro:
      'Puedes construir un smart home con cero suscripciones eligiendo dispositivos con capacidad local y un hub local, pagando costes de hardware únicos en vez de cuotas mensuales. Esta guía muestra dónde se esconden las suscripciones, el stack local sin suscripción, los dispositivos que no cobran cuotas, el almacenamiento local de cámaras y la matemática del coste único que hace que lo local sea más barato con el tiempo.',
    metaDescription:
      'Construye un smart home sin suscripciones en 2026: dispositivos locales, hub local y almacenamiento local de cámaras eliminan las cuotas mensuales.',
    twitterDescription:
      'Construye un smart home sin suscripciones: dispositivos locales, un hub local y almacenamiento local de cámaras reemplazan las cuotas mensuales por costes de hardware únicos.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Personas que evitan las cuotas recurrentes del smart home',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'smart home sin suscripción',
      'smart home sin suscripciones',
      'smart home sin cuotas',
      'cámara local sin suscripción',
      'smart home libre de suscripciones',
    ],
    leadAnswerBlock:
      '**Construye un smart home sin suscripciones eligiendo dispositivos con capacidad local, un hub local (Home Assistant) y almacenamiento local de cámaras con Frigate: pagas costes de hardware únicos en vez de cuotas mensuales.** Las cámaras en la nube y las funciones premium son donde se esconden las suscripciones.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo construyo un smart home sin suscripciones?',
        answer:
          'Elige dispositivos con capacidad local (Zigbee, Z-Wave, Matter, Wi-Fi local), ejecuta un hub local como Home Assistant y graba las cámaras localmente con Frigate en vez de un plan en la nube. Esto reemplaza las cuotas recurrentes por almacenamiento de cámara, detección con IA y funciones premium con un coste de hardware único.',
        bullets: [
          'Las suscripciones se esconden en almacenamiento de cámara, detección con IA, funciones premium',
          'Un hub local (Home Assistant) ejecuta el control y las automatizaciones gratis',
          'Frigate graba las cámaras localmente sin cuota mensual',
          'Los dispositivos con capacidad local evitan el requisito de cuenta en la nube',
          'El hardware único reemplaza las cuotas recurrentes',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Dónde se esconden las suscripciones', anchor: 'where-hide' },
      { label: 'El stack sin suscripción', anchor: 'no-sub-stack' },
      { label: 'Dispositivos sin cuotas', anchor: 'no-fee-devices' },
      { label: 'Almacenamiento local de cámaras', anchor: 'camera-storage' },
      { label: 'La matemática del coste único', anchor: 'cost-math' },
      { label: 'Qué plataformas cobran', anchor: 'who-charges' },
      { label: 'Estimar el coste total', anchor: 'estimate-tco' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Un smart home sin suscripciones usa dispositivos con capacidad local, un hub local y almacenamiento local de cámaras para reemplazar las cuotas mensuales por costes de hardware únicos.' },
      { type: 'plain-terms', content: 'Las suscripciones del smart home suelen venir de las cámaras en la nube: pagas al mes para almacenar el vídeo y desbloquear la detección con IA. Al grabar las cámaras localmente y ejecutar un hub local, pagas una vez por el hardware y nunca pagas una cuota mensual por las funciones principales.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'La mayoría de las suscripciones del smart home vienen del almacenamiento de cámaras en la nube y la detección con IA',
          'Un hub local (Home Assistant) ejecuta el control y las automatizaciones sin cuota',
          'Frigate graba las cámaras y ejecuta la detección con IA localmente, sin suscripción',
          'Elige dispositivos con capacidad local que no requieran una cuenta en la nube',
          'Cambias un coste de hardware único por cero cuotas recurrentes',
          'Con el tiempo, el enfoque local es más barato y mantiene los datos privados',
          'El control básico es gratuito en las grandes plataformas; las cuotas se concentran en el historial de vídeo en la nube, las funciones de IA de las cámaras y los asistentes de IA',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Dónde se esconden las suscripciones',
        content:
          '**Las suscripciones del smart home se esconden sobre todo en las cámaras en la nube: almacenamiento de grabaciones, detección con IA y funciones premium tras un plan mensual.** Saber dónde se esconden te permite diseñarlas fuera.',
        items: [
          '**Almacenamiento de cámara:** el historial de vídeo en la nube es la cuota recurrente más común.',
          '**Detección con IA:** las alertas de persona/objeto suelen estar tras un plan.',
          '**Funciones premium:** algunos ecosistemas bloquean automatizaciones o extras tras suscripciones.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-es.svg',
        imageCaption: 'Comparación entre suscripción y opción local en cuatro funciones: almacenamiento de cámara, detección con IA, control y automatizaciones, y voz/IA. Cada plan de nube recurrente se sustituye por una opción local única: Frigate, Home Assistant o un LLM local.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'El stack sin suscripción',
        content:
          '**El stack sin suscripción es un hub local más dispositivos con capacidad local y grabación local de cámaras: todo corre en hardware que posees.** Ninguna función principal requiere una cuota mensual.',
        items: [
          'Hub local: Home Assistant ejecuta el control y las automatizaciones gratis — consulta [primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Dispositivos locales: Zigbee, Z-Wave, Matter o Wi-Fi local sin cuenta en la nube.',
          'Cámaras locales: Frigate para grabación y detección con IA — consulta [cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-es.svg',
        imageCaption: 'Camino de tres pasos hacia un smart home sin suscripciones: hub local (Home Assistant), dispositivos locales (Zigbee, Z-Wave, Matter) y cámaras locales (Frigate), terminando sin cuotas de suscripción recurrentes.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Dispositivos sin cuotas',
        content:
          '**Los dispositivos que usan protocolos locales y no requieren una cuenta en la nube no cobran cuotas recurrentes.** Comprueba el protocolo y si un inicio de sesión en la nube es obligatorio.',
        items: [
          'Las bombillas, enchufes y sensores Zigbee y Z-Wave no tienen cuotas.',
          'Los dispositivos Matter vinculados a un controlador local no tienen cuotas.',
          'Evita los dispositivos que requieran una suscripción del fabricante para el control básico.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Almacenamiento local de cámaras',
        content:
          '**Graba las cámaras en almacenamiento local con Frigate en vez de pagar por el historial de vídeo en la nube.** Esto elimina la mayor cuota recurrente del smart home.',
        items: [
          'Usa cámaras RTSP/PoE y graba localmente — el vídeo se queda en tu casa.',
          'Frigate ofrece detección con IA sin suscripción — consulta [cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera).',
          'Planifica disco local para la retención que quieras; no se aplica cuota mensual.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'La matemática del coste único',
        content:
          '**Lo local reemplaza las cuotas mensuales recurrentes por hardware único, así que es más barato con el tiempo.** Cuanto más lo ejecutes, mayor el ahorro frente a una suscripción.',
        columns: ['Función', 'Opción con suscripción', 'Opción local sin suscripción'],
        rows: [
          { 'Función': 'Almacenamiento de cámara', 'Opción con suscripción': 'Plan mensual en la nube', 'Opción local sin suscripción': 'Disco local + Frigate' },
          { 'Función': 'Detección con IA', 'Opción con suscripción': 'Complemento del plan en la nube', 'Opción local sin suscripción': 'Frigate (Coral/GPU)' },
          { 'Función': 'Control y automatizaciones', 'Opción con suscripción': 'A veces bloqueado', 'Opción local sin suscripción': 'Home Assistant (gratis)' },
          { 'Función': 'Voz/IA', 'Opción con suscripción': 'Asistente en la nube', 'Opción local sin suscripción': 'Voz local + LLM local' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'Qué plataformas cobran y qué sigue siendo gratis',
        content:
          '**El control básico de dispositivos es gratuito en Google Home, Amazon Alexa, Apple Casa y Home Assistant; las cuotas se aplican al historial de vídeo en la nube, las funciones de IA de las cámaras, los asistentes de IA y los complementos de acceso remoto.** Los precios son tarifas públicas de los fabricantes y varían según la región y el tiempo.',
        items: [
          '**Google Home:** la vista en directo y las alertas de movimiento no requieren plan; el historial de vídeo, Gemini Live y Ask Home están en [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/): Standard 10 $/mes o 100 $/año, Advanced 20 $/mes o 200 $/año. Premium sustituyó a Nest Aware.',
          '**Amazon Alexa y Ring:** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) está incluido con Prime y cuesta 19,99 $/mes sin Prime (sin Prime solo hay un chat de texto gratuito y limitado). El vídeo en la nube de Ring requiere un [plan Ring Protect](https://ring.com/protect-plans): en la UE, Solo 3,99 €, Multi 9,99 €, Pro 19,99 € al mes.',
          '**Apple Casa:** HomeKit Secure Video requiere [iCloud+](https://support.apple.com/guide/icloud/mme054c72692): el plan de 50 GB cubre una cámara, el de 200 GB hasta cinco y el de 2 TB o más, ilimitadas. Las grabaciones no consumen tu almacenamiento.',
          '**Philips Hue:** las bombillas, el puente Hue y el control básico no requieren suscripción; el historial de vídeo en la nube de las cámaras Hue Secure es un complemento de pago cuyo precio varía según la región.',
          '**Home Assistant:** el software es gratuito. El servicio opcional [Home Assistant Cloud](https://www.nabucasa.com/pricing/) (se renombra Home Assistant Link el 2 de diciembre) cuesta 7,50 €/mes o 75 €/año por acceso remoto, copias de seguridad y procesamiento de voz.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'Cómo estimar el coste total antes de comprar',
        content:
          '**Coste total = hardware inicial + (cuota mensual × meses de uso) + coste de instalación y reposición; compáralo a 3 y 5 años.** Las cuotas rara vez aparecen en la ficha del producto: consulta la página de planes del fabricante antes de comprar.',
        items: [
          '**Paso 1:** enumera las funciones en la nube que quieres: historial de vídeo, alertas de IA, asistente de IA, acceso remoto.',
          '**Paso 2:** lee la página de planes y anota el precio por cámara o por hogar, mensual o anual.',
          '**Paso 3:** multiplica por 36 y 60 meses para obtener el coste de suscripción a 3 y 5 años.',
          '**Paso 4:** presupuesta una sola vez la alternativa local: hub, disco de almacenamiento y, con Frigate, un acelerador de detección.',
          '**Paso 5:** comprueba qué ocurre si dejas de pagar: solo vista en directo o grabaciones perdidas.',
          '**Ejemplo ilustrativo:** tres cámaras con un plan hipotético de 4 € por cámara al mes cuestan 144 € al año, 432 € en 3 años y 720 € en 5 años. Es un ejemplo de cálculo, no un presupuesto.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué dispositivos de smart home no tienen cuotas?', a: 'Los dispositivos que usan Zigbee, Z-Wave o Matter, o los dispositivos de Wi-Fi local con una API local, no cobran cuotas recurrentes porque funcionan mediante un hub local sin cuenta en la nube. Las cuotas recurrentes casi siempre vienen de las cámaras en la nube y las funciones premium del ecosistema.' },
          { q: '¿Puedo almacenar el vídeo de las cámaras sin suscripción?', a: 'Sí. Graba cámaras RTSP o PoE localmente con Frigate en tu propio almacenamiento, que ofrece grabación y detección con IA sin suscripción. El vídeo se queda en tu casa, y tú controlas la retención según el espacio de disco que proporciones.' },
          { q: '¿Cuánto ahorro a largo plazo?', a: 'El ahorro crece con el tiempo porque reemplazas las cuotas mensuales recurrentes por un coste de hardware único. La cantidad exacta depende de cuántas suscripciones en la nube evites, pero una configuración local suele ser más barata cuanto más la ejecutas.' },
          { q: '¿Hay costes ocultos en un smart home sin suscripción?', a: 'El coste principal es el hardware inicial (un hub local, un acelerador de detección y almacenamiento) más tu tiempo de configuración. Después de eso, el control principal, las automatizaciones y la grabación local de cámaras corren sin cuotas recurrentes.' },
          { q: '¿Las bombillas, enchufes y otros dispositivos inteligentes exigen cuotas de suscripción continuas?', a: 'No. Las bombillas, enchufes, interruptores y sensores no cobran cuotas recurrentes en ninguna plataforma importante. Algunos requieren una cuenta en la nube, pero las cuotas se aplican a cámaras, timbres y servicios de seguridad, no a los dispositivos en sí.' },
          { q: '¿Los asistentes de IA para el hogar inteligente necesitan una suscripción de pago?', a: 'Depende del fabricante. Alexa+ está incluido con Prime y cuesta 19,99 $/mes sin Prime; Gemini Live para el hogar forma parte de Google Home Premium desde 10 $/mes. Un asistente local como Home Assistant con voz local no tiene cuota.' },
          { q: '¿Las plataformas de hogar inteligente exigen suscripción para las funciones básicas?', a: 'Por lo general no. El control básico y las automatizaciones son gratuitos en Google Home, Alexa, Apple Casa y Home Assistant. Las cuotas se aplican al historial de vídeo, las funciones de IA de las cámaras, los asistentes y complementos de acceso remoto como Home Assistant Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Por qué un smart home local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — el argumento local más amplio',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — construye el stack sin cuotas',
          '[Cámaras de seguridad con IA local con Frigate](/es/smart-home/local-ai-security-camera) — reemplaza las cuotas de cámaras en la nube',
          '[Qué son los LLM locales](/es/local-llms/what-are-local-llms) — entre clústeres: IA local privada sin cuota por uso',
          '[Dimensionamiento, rendimiento y amortización del solar de balcón](/es/balcony-solar/balcony-solar-sizing-yield-payback) — vatios del panel, rendimiento esperado y cronología de amortización — sin costes recurrentes',
          '[Las mejores cerraduras inteligentes con control local (2026)](/es/smart-home/best-smart-locks-local-control-2027) — cerraduras sin suscripción',
          '[Los mejores termostatos inteligentes para control de IA local (2026)](/es/smart-home/best-smart-thermostats-local-ai-2027) — termostatos sin suscripción',
          '[Los mejores enchufes inteligentes con monitorización energética (2026)](/es/smart-home/best-energy-monitoring-smart-plugs-2027) — monitorización energética sin suscripción',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cómo Construir un Smart Home con Cero Suscripciones (2026)',
      description: 'Construye un smart home sin suscripciones en 2026: dispositivos locales, hub local y almacenamiento local de cámaras eliminan las cuotas mensuales.',
      url: 'https://www.promptquorum.com/es/smart-home/smart-home-without-subscriptions',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Suscripciones de smart home' }, { '@type': 'Thing', name: 'Almacenamiento local' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué dispositivos de smart home no tienen cuotas?', acceptedAnswer: { '@type': 'Answer', text: 'Los dispositivos que usan Zigbee, Z-Wave o Matter, o los de Wi-Fi local con una API local, no cobran cuotas recurrentes porque funcionan mediante un hub local. Las cuotas casi siempre vienen de las cámaras en la nube y las funciones premium.' } },
        { '@type': 'Question', name: '¿Puedo almacenar el vídeo de las cámaras sin suscripción?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Graba cámaras RTSP o PoE localmente con Frigate en tu propio almacenamiento, para grabación y detección con IA sin suscripción. El vídeo se queda en tu casa.' } },
        { '@type': 'Question', name: '¿Cuánto ahorro a largo plazo?', acceptedAnswer: { '@type': 'Answer', text: 'El ahorro crece con el tiempo porque reemplazas las cuotas mensuales recurrentes por un coste de hardware único. Una configuración local suele ser más barata cuanto más la ejecutas.' } },
        { '@type': 'Question', name: '¿Hay costes ocultos en un smart home sin suscripción?', acceptedAnswer: { '@type': 'Answer', text: 'El coste principal es el hardware inicial (hub, acelerador de detección, almacenamiento) más tu tiempo de configuración. Después, el control principal, las automatizaciones y la grabación local corren sin cuotas recurrentes.' } },
        { '@type': 'Question', name: '¿Las bombillas, enchufes y otros dispositivos inteligentes exigen cuotas de suscripción continuas?', acceptedAnswer: { '@type': 'Answer', text: 'No. Las bombillas, enchufes, interruptores y sensores no cobran cuotas recurrentes en ninguna plataforma importante. Algunos requieren una cuenta en la nube, pero las cuotas se aplican a cámaras, timbres y servicios de seguridad, no a los dispositivos en sí.' } },
        { '@type': 'Question', name: '¿Los asistentes de IA para el hogar inteligente necesitan una suscripción de pago?', acceptedAnswer: { '@type': 'Answer', text: 'Depende del fabricante. Alexa+ está incluido con Prime y cuesta 19,99 $/mes sin Prime; Gemini Live para el hogar forma parte de Google Home Premium desde 10 $/mes. Un asistente local como Home Assistant con voz local no tiene cuota.' } },
        { '@type': 'Question', name: '¿Las plataformas de hogar inteligente exigen suscripción para las funciones básicas?', acceptedAnswer: { '@type': 'Answer', text: 'Por lo general no. El control básico y las automatizaciones son gratuitos en Google Home, Alexa, Apple Casa y Home Assistant. Las cuotas se aplican al historial de vídeo, las funciones de IA de las cámaras, los asistentes y complementos de acceso remoto como Home Assistant Cloud.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-ko.webp',
    title: '구독료 없이 스마트홈 구축하는 방법 (2026)',
    seoTitle: '구독 없는 스마트홈: 2026 설정 가이드',
    intro:
      '로컬 가능 기기와 로컬 허브를 선택하면 월정액 대신 일회성 하드웨어 비용만 지불하고 구독료 없는 스마트홈을 구축할 수 있습니다. 이 가이드는 구독료가 숨어 있는 곳, 구독 없는 로컬 스택, 수수료 없는 기기, 로컬 카메라 저장, 그리고 로컬 방식이 시간이 지날수록 더 저렴한 이유를 설명합니다.',
    metaDescription:
      '구독료 없는 스마트홈 구축: 로컬 가능 기기, 로컬 허브, 로컬 카메라 저장이 월정액을 일회성 하드웨어 비용으로 대체합니다.',
    twitterDescription:
      '구독 없는 스마트홈 구축: 로컬 기기, 로컬 허브, 로컬 카메라 저장이 월정액을 일회성 하드웨어 비용으로 대체합니다.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '반복 수수료를 피하려는 스마트홈 사용자',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      '구독 없는 스마트홈',
      '구독료 없는 스마트홈',
      '수수료 없는 스마트홈',
      '구독 없는 로컬 카메라',
      '구독 없는 스마트홈 구축',
    ],
    leadAnswerBlock:
      '**로컬 가능 기기, 로컬 허브(Home Assistant), Frigate를 이용한 로컬 카메라 저장을 선택하면 구독료 없는 스마트홈을 구축할 수 있습니다. 월정액 대신 일회성 하드웨어 비용만 지불합니다.** 클라우드 카메라와 프리미엄 기능이 구독료가 숨어 있는 곳입니다.',
    quickAnswerTop: {
      ko: {
        question: '구독 없이 스마트홈을 구축하려면 어떻게 합니까?',
        answer:
          '로컬 가능 기기(Zigbee, Z-Wave, Matter, 로컬 Wi-Fi)를 선택하고, Home Assistant 같은 로컬 허브를 실행하며, 클라우드 요금제 대신 Frigate로 카메라를 로컬에 녹화합니다. 이렇게 하면 카메라 저장, AI 감지, 프리미엄 기능의 반복 수수료가 일회성 하드웨어 비용으로 대체됩니다.',
        bullets: [
          '구독료는 카메라 저장, AI 감지, 프리미엄 기능에 숨어 있습니다',
          '로컬 허브(Home Assistant)는 제어와 자동화를 무료로 실행합니다',
          'Frigate는 월정액 없이 카메라를 로컬에 녹화합니다',
          '로컬 가능 기기는 클라우드 계정 요구 사항을 피합니다',
          '일회성 하드웨어가 반복 수수료를 대체합니다',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '구독료가 숨어 있는 곳', anchor: 'where-hide' },
      { label: '구독 없는 스택', anchor: 'no-sub-stack' },
      { label: '수수료 없는 기기', anchor: 'no-fee-devices' },
      { label: '로컬 카메라 저장', anchor: 'camera-storage' },
      { label: '일회성 비용 계산', anchor: 'cost-math' },
      { label: '요금을 받는 플랫폼', anchor: 'who-charges' },
      { label: '총비용 추정', anchor: 'estimate-tco' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '구독료 없는 스마트홈은 로컬 가능 기기, 로컬 허브, 로컬 카메라 저장을 사용하여 월정액을 일회성 하드웨어 비용으로 대체합니다.' },
      { type: 'plain-terms', content: '스마트홈 구독료는 주로 클라우드 카메라에서 발생합니다. 영상 저장과 AI 감지 잠금 해제를 위해 매달 비용을 지불합니다. 카메라를 로컬에 녹화하고 로컬 허브를 실행하면 하드웨어 비용만 한 번 지불하고 핵심 기능에 대한 월정액은 없습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '대부분의 스마트홈 구독료는 클라우드 카메라 저장과 AI 감지에서 발생합니다',
          '로컬 허브(Home Assistant)는 수수료 없이 제어와 자동화를 실행합니다',
          'Frigate는 구독 없이 카메라를 녹화하고 AI 감지를 로컬에서 실행합니다',
          '클라우드 계정이 필요 없는 로컬 가능 기기를 선택하십시오',
          '일회성 하드웨어 비용으로 반복 수수료를 없앨 수 있습니다',
          '시간이 지날수록 로컬 방식이 더 저렴하고 데이터를 프라이빗하게 유지합니다',
          '주요 플랫폼의 기본 제어는 무료이며, 요금은 클라우드 영상 기록, 카메라 AI 기능, AI 어시스턴트에 붙습니다',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: '구독료가 숨어 있는 곳',
        content:
          '**스마트홈 구독료는 주로 클라우드 카메라에 숨어 있습니다. 영상 저장, AI 감지, 월정액 뒤의 프리미엄 기능이 해당합니다.** 어디에 숨어 있는지 알면 설계 단계에서 제거할 수 있습니다.',
        items: [
          '**카메라 저장:** 클라우드 영상 기록이 가장 일반적인 반복 수수료입니다.',
          '**AI 감지:** 사람/사물 알림은 종종 요금제 뒤에 잠겨 있습니다.',
          '**프리미엄 기능:** 일부 생태계는 자동화나 추가 기능을 구독 뒤에 잠급니다.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-ko.svg',
        imageCaption: '카메라 저장, AI 감지, 제어 및 자동화, 음성/AI 네 가지 기능에서 구독과 로컬을 비교한다. 각 클라우드 요금제는 Frigate, Home Assistant, 로컬 LLM이라는 일회성 로컬 옵션으로 대체된다.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: '구독 없는 스택',
        content:
          '**구독 없는 스택은 로컬 허브 + 로컬 가능 기기 + 로컬 카메라 녹화입니다. 모든 것이 귀하 소유의 하드웨어에서 실행됩니다.** 핵심 기능에는 월정액이 필요하지 않습니다.',
        items: [
          '로컬 허브: Home Assistant는 제어와 자동화를 무료로 실행합니다 — [시작하기 가이드](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          '로컬 기기: 클라우드 계정 없는 Zigbee, Z-Wave, Matter, 또는 로컬 Wi-Fi.',
          '로컬 카메라: 녹화와 AI 감지를 위한 Frigate — [로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera)를 참조하십시오.',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-ko.svg',
        imageCaption: '구독료 없는 스마트홈으로 가는 3단계: 로컬 허브(Home Assistant), 로컬 기기(Zigbee, Z-Wave, Matter), 로컬 카메라(Frigate) — 결과적으로 반복되는 구독료가 전혀 없다.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: '수수료 없는 기기',
        content:
          '**로컬 프로토콜을 사용하고 클라우드 계정이 필요 없는 기기는 반복 수수료를 부과하지 않습니다.** 프로토콜과 클라우드 로그인 필수 여부를 확인하십시오.',
        items: [
          'Zigbee 및 Z-Wave 전구, 플러그, 센서는 수수료가 없습니다.',
          '로컬 컨트롤러에 등록된 Matter 기기는 수수료가 없습니다.',
          '기본 제어를 위해 제조사 구독이 필요한 기기는 피하십시오.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: '로컬 카메라 저장',
        content:
          '**클라우드 영상 기록 비용을 지불하는 대신 Frigate로 카메라를 로컬 저장소에 녹화하십시오.** 이렇게 하면 가장 큰 스마트홈 반복 수수료가 제거됩니다.',
        items: [
          'RTSP/PoE 카메라를 사용하고 로컬에 녹화하십시오. 영상이 집 안에 유지됩니다.',
          'Frigate는 구독 없이 AI 감지를 제공합니다 — [로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera)를 참조하십시오.',
          '원하는 보존 기간에 맞게 로컬 디스크를 계획하십시오. 월정액이 적용되지 않습니다.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: '일회성 비용 계산',
        content:
          '**로컬 방식은 반복 월정액을 일회성 하드웨어로 대체하므로 시간이 지날수록 더 저렴합니다.** 오래 운영할수록 구독 대비 절감 효과가 커집니다.',
        columns: ['기능', '구독 옵션', '구독 없는 로컬 옵션'],
        rows: [
          { '기능': '카메라 저장', '구독 옵션': '월간 클라우드 요금제', '구독 없는 로컬 옵션': '로컬 디스크 + Frigate' },
          { '기능': 'AI 감지', '구독 옵션': '클라우드 요금제 추가 기능', '구독 없는 로컬 옵션': 'Frigate (Coral/GPU)' },
          { '기능': '제어 및 자동화', '구독 옵션': '잠겨 있는 경우도 있음', '구독 없는 로컬 옵션': 'Home Assistant (무료)' },
          { '기능': '음성/AI', '구독 옵션': '클라우드 어시스턴트', '구독 없는 로컬 옵션': '로컬 음성 + 로컬 LLM' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: '요금을 받는 플랫폼과 무료로 남는 기능',
        content:
          '**Google Home, Amazon Alexa, Apple 홈, Home Assistant에서 기본 기기 제어는 무료이며, 요금은 클라우드 영상 기록, 카메라 AI 기능, AI 어시스턴트, 원격 접속 부가 서비스에 붙습니다.** 아래 가격은 제조사 정가(미국·EU)이며 지역과 시기에 따라 달라집니다.',
        items: [
          '**Google Home:** 실시간 보기와 움직임 알림에는 요금제가 필요 없습니다. 영상 기록, Gemini Live, Ask Home은 [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/)에 포함되며 Standard는 월 10달러 또는 연 100달러, Advanced는 월 20달러 또는 연 200달러입니다. Premium은 Nest Aware를 대체했습니다.',
          '**Amazon Alexa와 Ring:** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us)는 Prime 회원에게 추가 비용이 없고 비회원은 월 19.99달러입니다(비회원은 사용량이 제한된 무료 텍스트 채팅만 가능). Ring 클라우드 영상에는 [Ring Protect 요금제](https://ring.com/protect-plans)가 필요하며 EU에서는 월 Solo 3.99유로, Multi 9.99유로, Pro 19.99유로입니다.',
          '**Apple 홈:** HomeKit 보안 비디오에는 [iCloud+](https://support.apple.com/guide/icloud/mme054c72692)가 필요합니다. 50GB는 카메라 1대, 200GB는 최대 5대, 2TB 이상은 무제한입니다. 녹화본은 iCloud 저장 공간을 차지하지 않습니다.',
          '**Philips Hue:** 전구, Hue Bridge, 기본 제어에는 구독이 필요 없습니다. Hue Secure 카메라의 클라우드 영상 기록은 유료 부가 서비스이며 가격은 지역마다 다릅니다.',
          '**Home Assistant:** 소프트웨어는 무료입니다. 선택 서비스인 [Home Assistant Cloud](https://www.nabucasa.com/pricing/)(12월 2일 Home Assistant Link로 이름 변경)는 원격 접속, 백업, 음성 처리에 월 7.50유로 또는 연 75유로입니다.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: '구매 전에 총소유비용을 추정하는 방법',
        content:
          '**총소유비용 = 초기 하드웨어 비용 +(월 요금 × 사용 개월 수)+ 설치·교체 비용이며, 3년과 5년 기준으로 비교하세요.** 요금은 제품 페이지에 잘 나오지 않으므로 구매 전에 제조사의 요금제 페이지를 확인하세요.',
        items: [
          '**1단계:** 원하는 클라우드 기능을 적습니다: 영상 기록, AI 알림, AI 어시스턴트, 원격 접속.',
          '**2단계:** 제조사 요금제 페이지에서 카메라당 또는 가구당 월·연 요금을 확인합니다.',
          '**3단계:** 36개월과 60개월을 곱해 3년·5년 구독 비용을 구합니다.',
          '**4단계:** 로컬 대안 비용을 한 번만 계산합니다: 허브, 저장 디스크, Frigate 사용 시 감지 가속기.',
          '**5단계:** 결제를 중단하면 실시간 보기만 남는지, 녹화본이 사라지는지 확인합니다.',
          '**예시:** 카메라당 월 4유로라는 가상의 요금제에서 카메라 3대는 연 144유로, 3년 432유로, 5년 720유로입니다. 계산 예시이며 제조사 견적이 아닙니다.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '수수료 없는 스마트홈 기기는 무엇입니까?', a: 'Zigbee, Z-Wave, Matter를 사용하는 기기나 로컬 API가 있는 로컬 Wi-Fi 기기는 클라우드 계정 없이 로컬 허브를 통해 작동하므로 반복 수수료가 없습니다. 반복 수수료는 거의 항상 클라우드 카메라와 프리미엄 생태계 기능에서 발생합니다.' },
          { q: '구독 없이 카메라 영상을 저장할 수 있습니까?', a: '가능합니다. RTSP 또는 PoE 카메라를 Frigate로 자신의 저장소에 로컬 녹화하면 구독 없이 녹화와 AI 감지를 이용할 수 있습니다. 영상은 집 안에 유지되며 제공하는 디스크 공간으로 보존 기간을 제어합니다.' },
          { q: '장기적으로 얼마나 절감할 수 있습니까?', a: '반복 월정액을 일회성 하드웨어 비용으로 대체하므로 시간이 지날수록 절감액이 늘어납니다. 정확한 금액은 피하는 클라우드 구독 수에 따라 다르지만, 로컬 설정은 오래 운영할수록 더 저렴합니다.' },
          { q: '구독 없는 스마트홈에 숨은 비용이 있습니까?', a: '주요 비용은 초기 하드웨어(로컬 허브, 감지 가속기, 저장소)와 설정 시간입니다. 그 이후에는 핵심 제어, 자동화, 로컬 카메라 녹화가 반복 수수료 없이 실행됩니다.' },
          { q: '스마트 전구, 플러그 같은 기기는 지속적인 구독료가 필요한가요?', a: '아니요. 전구, 플러그, 스위치, 센서는 주요 플랫폼에서 반복 요금을 받지 않습니다. 일부는 클라우드 계정이 필요하지만 요금은 기기 자체가 아니라 카메라, 도어벨, 보안 서비스에 붙습니다.' },
          { q: 'AI 스마트홈 어시스턴트는 유료 구독이 필요한가요?', a: '제조사에 따라 다릅니다. Alexa+는 Prime 회원에게 추가 비용이 없고 비회원은 월 19.99달러이며, Gemini Live for Home은 월 10달러부터인 Google Home Premium에 포함됩니다. 로컬 음성 처리를 쓰는 Home Assistant 같은 로컬 어시스턴트는 요금이 없습니다.' },
          { q: '스마트홈 플랫폼은 핵심 기능에 구독을 요구하나요?', a: '대체로 아닙니다. 기본 제어와 자동화는 Google Home, Alexa, Apple 홈, Home Assistant에서 무료입니다. 요금은 영상 기록, 카메라 AI 기능, 어시스턴트, Home Assistant Cloud 같은 원격 접속 부가 서비스에 붙습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 스마트홈이 클라우드를 능가하는 이유](/ko/smart-home/why-local-smart-home-beats-cloud) — 더 넓은 로컬 논거',
          '[완전한 로컬 스마트홈 가이드](/ko/smart-home/local-smart-home-complete-guide) — 수수료 없는 스택 구축',
          '[Frigate를 이용한 로컬 AI 보안 카메라](/ko/smart-home/local-ai-security-camera) — 클라우드 카메라 수수료 대체',
          '[로컬 LLM이란](/ko/local-llms/what-are-local-llms) — 크로스 클러스터: 이용 수수료 없는 프라이빗 로컬 AI',
          '[발코니 태양광 용량, 발전량 및 투자 회수](/ko/balcony-solar/balcony-solar-sizing-yield-payback) — 패널 와트, 위치별 예상 발전량, 회수 기간 — 반복 비용 없음',
          '[로컬 제어를 지원하는 최고의 스마트 도어락 (2026년)](/ko/smart-home/best-smart-locks-local-control-2027) — 구독료 없는 도어락 추천',
          '[로컬 AI 제어를 위한 최고의 스마트 온도조절기(2026)](/ko/smart-home/best-smart-thermostats-local-ai-2027) — 구독료 없는 온도조절기 추천',
          '[최고의 에너지 모니터링 스마트 플러그 추천 (2026)](/ko/smart-home/best-energy-monitoring-smart-plugs-2027) — 구독료 없는 에너지 모니터링',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '구독료 없이 스마트홈 구축하는 방법 (2026)',
      description: '구독료 없는 스마트홈 구축: 로컬 가능 기기, 로컬 허브, 로컬 카메라 저장이 월정액을 일회성 하드웨어 비용으로 대체합니다.',
      url: 'https://www.promptquorum.com/ko/smart-home/smart-home-without-subscriptions',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: '스마트홈 구독' }, { '@type': 'Thing', name: '로컬 저장' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '수수료 없는 스마트홈 기기는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave, Matter를 사용하는 기기나 로컬 API가 있는 로컬 Wi-Fi 기기는 로컬 허브를 통해 작동하므로 수수료가 없습니다. 수수료는 거의 항상 클라우드 카메라와 프리미엄 기능에서 발생합니다.' } },
        { '@type': 'Question', name: '구독 없이 카메라 영상을 저장할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '가능합니다. RTSP 또는 PoE 카메라를 Frigate로 자신의 저장소에 로컬 녹화하면 구독 없이 녹화와 AI 감지를 이용할 수 있습니다. 영상은 집 안에 유지됩니다.' } },
        { '@type': 'Question', name: '장기적으로 얼마나 절감할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '반복 월정액을 일회성 하드웨어 비용으로 대체하므로 시간이 지날수록 절감액이 늘어납니다. 로컬 설정은 오래 운영할수록 더 저렴합니다.' } },
        { '@type': 'Question', name: '구독 없는 스마트홈에 숨은 비용이 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '주요 비용은 초기 하드웨어(허브, 감지 가속기, 저장소)와 설정 시간입니다. 그 이후에는 핵심 제어, 자동화, 로컬 카메라 녹화가 반복 수수료 없이 실행됩니다.' } },
        { '@type': 'Question', name: '스마트 전구, 플러그 같은 기기는 지속적인 구독료가 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '아니요. 전구, 플러그, 스위치, 센서는 주요 플랫폼에서 반복 요금을 받지 않습니다. 일부는 클라우드 계정이 필요하지만 요금은 기기 자체가 아니라 카메라, 도어벨, 보안 서비스에 붙습니다.' } },
        { '@type': 'Question', name: 'AI 스마트홈 어시스턴트는 유료 구독이 필요한가요?', acceptedAnswer: { '@type': 'Answer', text: '제조사에 따라 다릅니다. Alexa+는 Prime 회원에게 추가 비용이 없고 비회원은 월 19.99달러이며, Gemini Live for Home은 월 10달러부터인 Google Home Premium에 포함됩니다. 로컬 음성 처리를 쓰는 Home Assistant 같은 로컬 어시스턴트는 요금이 없습니다.' } },
        { '@type': 'Question', name: '스마트홈 플랫폼은 핵심 기능에 구독을 요구하나요?', acceptedAnswer: { '@type': 'Answer', text: '대체로 아닙니다. 기본 제어와 자동화는 Google Home, Alexa, Apple 홈, Home Assistant에서 무료입니다. 요금은 영상 기록, 카메라 AI 기능, 어시스턴트, Home Assistant Cloud 같은 원격 접속 부가 서비스에 붙습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-fr.webp',
    title: 'Construire une Maison Connectée Sans Aucun Abonnement (2026)',
    seoTitle: 'Maison Connectée Sans Abonnement : Guide Complet 2026',
    intro:
      'Vous pouvez construire une maison connectée sans aucun abonnement en choisissant des appareils à capacité locale et un hub local, en payant des coûts matériels uniques au lieu de frais mensuels. Ce guide montre où se cachent les abonnements, la pile locale sans abonnement, les appareils qui ne facturent aucun frais, le stockage local des caméras et le calcul du coût unique qui rend le local moins cher avec le temps.',
    metaDescription:
      'Construire une maison connectée sans abonnement en 2026 : appareils locaux, hub local et stockage local des caméras éliminent les frais mensuels.',
    twitterDescription:
      'Construire une maison connectée sans abonnement : des appareils locaux, un hub local et un stockage local des caméras remplacent les frais mensuels par des coûts matériels uniques.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Personnes évitant les frais récurrents de la maison connectée',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'maison connectée sans abonnement',
      'maison connectée sans abonnements',
      'maison connectée sans frais',
      'caméra locale sans abonnement',
      'maison connectée sans frais récurrents',
    ],
    leadAnswerBlock:
      '**Construisez une maison connectée sans abonnement en choisissant des appareils à capacité locale, un hub local (Home Assistant) et un stockage local des caméras avec Frigate — vous payez des coûts matériels uniques au lieu de frais mensuels.** Les caméras cloud et les fonctions premium sont là où se cachent les abonnements.',
    quickAnswerTop: {
      fr: {
        question: 'Comment construire une maison connectée sans abonnement ?',
        answer:
          'Choisissez des appareils à capacité locale (Zigbee, Z-Wave, Matter, Wi-Fi local), faites tourner un hub local comme Home Assistant et enregistrez les caméras en local avec Frigate plutôt qu\'un forfait cloud. Cela remplace les frais récurrents pour le stockage des caméras, la détection IA et les fonctions premium par un coût matériel unique.',
        bullets: [
          'Les abonnements se cachent dans le stockage des caméras, la détection IA, les fonctions premium',
          'Un hub local (Home Assistant) fait tourner le contrôle et les automatisations gratuitement',
          'Frigate enregistre les caméras en local sans frais mensuels',
          'Les appareils à capacité locale évitent l\'exigence d\'un compte cloud',
          'Le matériel unique remplace les frais récurrents',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Où se cachent les abonnements', anchor: 'where-hide' },
      { label: 'La pile sans abonnement', anchor: 'no-sub-stack' },
      { label: 'Appareils sans frais', anchor: 'no-fee-devices' },
      { label: 'Stockage local des caméras', anchor: 'camera-storage' },
      { label: 'Le calcul du coût unique', anchor: 'cost-math' },
      { label: 'Quelles plateformes facturent', anchor: 'who-charges' },
      { label: 'Estimer le coût total', anchor: 'estimate-tco' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Une maison connectée sans abonnement utilise des appareils à capacité locale, un hub local et un stockage local des caméras pour remplacer les frais mensuels par des coûts matériels uniques.' },
      { type: 'plain-terms', content: 'Les abonnements de la maison connectée viennent généralement des caméras cloud : vous payez chaque mois pour stocker les images et débloquer la détection IA. En enregistrant les caméras en local et en faisant tourner un hub local, vous payez une fois le matériel et ne payez jamais de frais mensuels pour les fonctions principales.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'La plupart des abonnements de la maison connectée viennent du stockage des caméras cloud et de la détection IA',
          'Un hub local (Home Assistant) fait tourner le contrôle et les automatisations sans frais',
          'Frigate enregistre les caméras et fait tourner la détection IA en local, sans abonnement',
          'Choisissez des appareils à capacité locale qui ne nécessitent pas de compte cloud',
          'Vous échangez un coût matériel unique contre zéro frais récurrents',
          'Avec le temps, l\'approche locale est moins chère et garde les données privées',
          'Le contrôle de base est gratuit sur les grandes plateformes ; les frais portent sur l’historique vidéo cloud, les fonctions IA des caméras et les assistants IA',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Où se cachent les abonnements',
        content:
          '**Les abonnements de la maison connectée se cachent surtout dans les caméras cloud : stockage des images, détection IA et fonctions premium derrière un forfait mensuel.** Savoir où ils se cachent permet de les éliminer à la conception.',
        items: [
          '**Stockage des caméras :** l\'historique vidéo cloud est le frais récurrent le plus courant.',
          '**Détection IA :** les alertes de personne/objet sont souvent derrière un forfait.',
          '**Fonctions premium :** certains écosystèmes verrouillent les automatisations ou les extras derrière des abonnements.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-fr.svg',
        imageCaption: 'Comparaison abonnement vs local sur quatre fonctions : stockage des caméras, détection IA, contrôle et automatisations, et voix/IA. Chaque forfait cloud récurrent est remplacé par une option locale unique : Frigate, Home Assistant ou un LLM local.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'La pile sans abonnement',
        content:
          '**La pile sans abonnement est un hub local plus des appareils à capacité locale et l\'enregistrement local des caméras — tout tourne sur du matériel que vous possédez.** Aucune fonction principale ne nécessite de frais mensuels.',
        items: [
          'Hub local : Home Assistant fait tourner le contrôle et les automatisations gratuitement — voir [premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Appareils locaux : Zigbee, Z-Wave, Matter ou Wi-Fi local sans compte cloud.',
          'Caméras locales : Frigate pour l\'enregistrement et la détection IA — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-fr.svg',
        imageCaption: 'Parcours en trois étapes vers une maison connectée sans abonnement : hub local (Home Assistant), appareils locaux (Zigbee, Z-Wave, Matter) et caméras locales (Frigate) — pour finir sans aucun frais d\'abonnement récurrent.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Appareils sans frais',
        content:
          '**Les appareils qui utilisent des protocoles locaux et ne nécessitent pas de compte cloud ne facturent aucun frais récurrent.** Vérifiez le protocole et si une connexion cloud est obligatoire.',
        items: [
          'Les ampoules, prises et capteurs Zigbee et Z-Wave n\'ont aucun frais.',
          'Les appareils Matter appairés à un contrôleur local n\'ont aucun frais.',
          'Évitez les appareils qui nécessitent un abonnement du fabricant pour le contrôle de base.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Stockage local des caméras',
        content:
          '**Enregistrez les caméras sur un stockage local avec Frigate au lieu de payer pour l\'historique vidéo cloud.** Cela supprime le plus gros frais récurrent de la maison connectée.',
        items: [
          'Utilisez des caméras RTSP/PoE et enregistrez en local — les images restent chez vous.',
          'Frigate fournit la détection IA sans abonnement — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera).',
          'Prévoyez un disque local pour la rétention voulue ; aucun frais mensuel ne s\'applique.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'Le calcul du coût unique',
        content:
          '**Le local remplace les frais mensuels récurrents par du matériel unique, il est donc moins cher avec le temps.** Plus vous le faites tourner longtemps, plus l\'économie est grande face à un abonnement.',
        columns: ['Fonction', 'Option avec abonnement', 'Option locale sans abonnement'],
        rows: [
          { 'Fonction': 'Stockage des caméras', 'Option avec abonnement': 'Forfait cloud mensuel', 'Option locale sans abonnement': 'Disque local + Frigate' },
          { 'Fonction': 'Détection IA', 'Option avec abonnement': 'Module complémentaire du forfait cloud', 'Option locale sans abonnement': 'Frigate (Coral/GPU)' },
          { 'Fonction': 'Contrôle & automatisations', 'Option avec abonnement': 'Parfois verrouillé', 'Option locale sans abonnement': 'Home Assistant (gratuit)' },
          { 'Fonction': 'Voix/IA', 'Option avec abonnement': 'Assistant cloud', 'Option locale sans abonnement': 'Voix locale + LLM local' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'Quelles plateformes facturent – et ce qui reste gratuit',
        content:
          '**Le contrôle de base des appareils est gratuit sur Google Home, Amazon Alexa, Apple Home et Home Assistant ; les frais portent sur l’historique vidéo cloud, les fonctions IA des caméras, les assistants IA et les options d’accès à distance.** Les prix ci-dessous sont les tarifs publics des fabricants ; ils varient selon la région et le temps.',
        items: [
          '**Google Home :** la vue en direct et les alertes de mouvement ne demandent aucun abonnement ; l’historique vidéo, Gemini Live et Ask Home relèvent de [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/) – Standard 10 $/mois ou 100 $/an, Advanced 20 $/mois ou 200 $/an. Premium a remplacé Nest Aware.',
          '**Amazon Alexa et Ring :** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) est inclus avec Prime et coûte 19,99 $/mois sans Prime (sans Prime, seul un chat texte gratuit et limité est proposé). La vidéo cloud Ring exige un [forfait Ring Protect](https://ring.com/protect-plans) – dans l’UE, Solo 3,99 €, Multi 9,99 €, Pro 19,99 € par mois.',
          '**Apple Maison :** HomeKit Secure Video exige [iCloud+](https://support.apple.com/guide/icloud/mme054c72692) : 50 Go couvrent une caméra, 200 Go jusqu’à cinq, 2 To ou plus un nombre illimité. Les enregistrements ne consomment pas votre stockage.',
          '**Philips Hue :** les ampoules, le pont Hue et le contrôle de base n’exigent aucun abonnement ; l’historique vidéo cloud des caméras Hue Secure est une option payante dont le prix varie selon la région.',
          '**Home Assistant :** le logiciel est gratuit. L’option [Home Assistant Cloud](https://www.nabucasa.com/pricing/) (rebaptisée Home Assistant Link le 2 décembre) coûte 7,50 €/mois ou 75 €/an pour l’accès à distance, les sauvegardes et le traitement vocal.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'Comment estimer le coût total avant d’acheter',
        content:
          '**Coût total = matériel initial + (frais mensuels × mois d’utilisation) + coûts d’installation et de remplacement ; comparez sur 3 et 5 ans.** Les frais figurent rarement sur la fiche produit : consultez la page des forfaits du fabricant avant d’acheter.',
        items: [
          '**Étape 1 :** listez les fonctions cloud souhaitées : historique vidéo, alertes IA, assistant IA, accès à distance.',
          '**Étape 2 :** lisez la page des forfaits et notez le prix par caméra ou par foyer, mensuel ou annuel.',
          '**Étape 3 :** multipliez par 36 et 60 mois pour obtenir le coût d’abonnement sur 3 et 5 ans.',
          '**Étape 4 :** chiffrez une fois l’alternative locale : hub, disque de stockage et, avec Frigate, un accélérateur de détection.',
          '**Étape 5 :** vérifiez ce qui se passe si vous cessez de payer – vue en direct seule ou enregistrements perdus.',
          '**Exemple chiffré :** trois caméras avec un forfait hypothétique de 4 € par caméra et par mois coûtent 144 € par an, 432 € sur 3 ans et 720 € sur 5 ans. C’est un exemple de calcul, pas un devis.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quels appareils de maison connectée n\'ont aucun frais ?', a: 'Les appareils utilisant Zigbee, Z-Wave ou Matter, ou les appareils Wi-Fi local avec une API locale, ne facturent aucun frais récurrent car ils fonctionnent via un hub local sans compte cloud. Les frais récurrents viennent presque toujours des caméras cloud et des fonctions premium de l\'écosystème.' },
          { q: 'Puis-je stocker les images des caméras sans abonnement ?', a: 'Oui. Enregistrez les caméras RTSP ou PoE en local avec Frigate sur votre propre stockage, ce qui fournit enregistrement et détection IA sans abonnement. Les images restent chez vous, et vous contrôlez la rétention selon l\'espace disque que vous fournissez.' },
          { q: 'Combien j\'économise à long terme ?', a: 'Les économies augmentent avec le temps car vous remplacez les frais mensuels récurrents par un coût matériel unique. Le montant exact dépend du nombre d\'abonnements cloud évités, mais une configuration locale est généralement moins chère plus vous la faites tourner.' },
          { q: 'Y a-t-il des coûts cachés dans une maison connectée sans abonnement ?', a: 'Le coût principal est le matériel initial (un hub local, un accélérateur de détection et du stockage) plus votre temps de configuration. Après cela, le contrôle principal, les automatisations et l\'enregistrement local des caméras tournent sans frais récurrents.' },
          { q: 'Les ampoules, prises et autres appareils connectés exigent-ils des frais d’abonnement récurrents ?', a: 'Non. Les ampoules, prises, interrupteurs et capteurs ne facturent pas de frais récurrents sur les grandes plateformes. Certains demandent un compte cloud, mais les frais portent sur les caméras, sonnettes et services de sécurité, pas sur les appareils eux-mêmes.' },
          { q: 'Les assistants IA pour la maison connectée exigent-ils un abonnement payant ?', a: 'Cela dépend du fabricant. Alexa+ est inclus avec Prime et coûte 19,99 $/mois sans Prime ; Gemini Live pour la maison fait partie de Google Home Premium à partir de 10 $/mois. Un assistant local comme Home Assistant avec traitement vocal local n’a aucun frais.' },
          { q: 'Les plateformes de maison connectée exigent-elles un abonnement pour les fonctions de base ?', a: 'En général non. Le contrôle de base et les automatisations sont gratuits sur Google Home, Alexa, Apple Maison et Home Assistant. Les frais portent sur l’historique vidéo, les fonctions IA des caméras, les assistants et les options d’accès à distance comme Home Assistant Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Pourquoi une maison connectée locale bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — l\'argument local plus large',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — construire la pile sans frais',
          '[Caméras de sécurité à IA locale avec Frigate](/fr/smart-home/local-ai-security-camera) — remplacer les frais des caméras cloud',
          '[Qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) — inter-clusters : IA locale privée sans frais à l\'usage',
          '[Dimensionnement, rendement et retour sur investissement du solaire de balcon](/fr/balcony-solar/balcony-solar-sizing-yield-payback) — puissance du panneau, rendement attendu par région, délai de retour — sans frais récurrents',
          '[Les meilleures serrures connectées à contrôle local (2026)](/fr/smart-home/best-smart-locks-local-control-2027) — serrures sans abonnement',
          '[Meilleurs thermostats connectés pour le contrôle IA local (2026)](/fr/smart-home/best-smart-thermostats-local-ai-2027) — thermostats sans abonnement',
          '[Meilleures prises connectées de monitoring énergétique (2026)](/fr/smart-home/best-energy-monitoring-smart-plugs-2027) — monitoring énergétique sans abonnement',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Construire une Maison Connectée Sans Aucun Abonnement (2026)',
      description: 'Construire une maison connectée sans abonnement en 2026 : appareils locaux, hub local et stockage local des caméras éliminent les frais mensuels.',
      url: 'https://www.promptquorum.com/fr/smart-home/smart-home-without-subscriptions',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Abonnements de maison connectée' }, { '@type': 'Thing', name: 'Stockage local' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Quels appareils de maison connectée n\'ont aucun frais ?', acceptedAnswer: { '@type': 'Answer', text: 'Les appareils utilisant Zigbee, Z-Wave ou Matter, ou Wi-Fi local avec une API locale, ne facturent aucun frais récurrent car ils fonctionnent via un hub local. Les frais viennent presque toujours des caméras cloud et des fonctions premium.' } },
        { '@type': 'Question', name: 'Puis-je stocker les images des caméras sans abonnement ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Enregistrez les caméras RTSP ou PoE en local avec Frigate sur votre propre stockage, pour enregistrement et détection IA sans abonnement. Les images restent chez vous.' } },
        { '@type': 'Question', name: 'Combien j\'économise à long terme ?', acceptedAnswer: { '@type': 'Answer', text: 'Les économies augmentent avec le temps car vous remplacez les frais mensuels récurrents par un coût matériel unique. Une configuration locale est généralement moins chère plus vous la faites tourner.' } },
        { '@type': 'Question', name: 'Y a-t-il des coûts cachés dans une maison connectée sans abonnement ?', acceptedAnswer: { '@type': 'Answer', text: 'Le coût principal est le matériel initial (hub, accélérateur de détection, stockage) plus votre temps de configuration. Ensuite, le contrôle principal, les automatisations et l\'enregistrement local tournent sans frais récurrents.' } },
        { '@type': 'Question', name: 'Les ampoules, prises et autres appareils connectés exigent-ils des frais d’abonnement récurrents ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Les ampoules, prises, interrupteurs et capteurs ne facturent pas de frais récurrents sur les grandes plateformes. Certains demandent un compte cloud, mais les frais portent sur les caméras, sonnettes et services de sécurité, pas sur les appareils eux-mêmes.' } },
        { '@type': 'Question', name: 'Les assistants IA pour la maison connectée exigent-ils un abonnement payant ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela dépend du fabricant. Alexa+ est inclus avec Prime et coûte 19,99 $/mois sans Prime ; Gemini Live pour la maison fait partie de Google Home Premium à partir de 10 $/mois. Un assistant local comme Home Assistant avec traitement vocal local n’a aucun frais.' } },
        { '@type': 'Question', name: 'Les plateformes de maison connectée exigent-elles un abonnement pour les fonctions de base ?', acceptedAnswer: { '@type': 'Answer', text: 'En général non. Le contrôle de base et les automatisations sont gratuits sur Google Home, Alexa, Apple Maison et Home Assistant. Les frais portent sur l’historique vidéo, les fonctions IA des caméras, les assistants et les options d’accès à distance comme Home Assistant Cloud.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-ja.webp',
    title: 'サブスクなしでスマートホームを作る方法（2026）',
    seoTitle: 'サブスクなしのスマートホーム構築完全ガイド（2026年）',
    intro:
      'ローカル対応の機器とローカルハブを選び、月額料金ではなく一度きりのハードウェア費用を払うことで、サブスクなしのスマートホームを作れます。本ガイドは、サブスクがどこに潜むか、サブスクなしのローカル構成、料金のかからない機器、ローカルのカメラ保存、そしてローカルを長期的に安くする一度きり費用の計算を示します。',
    metaDescription:
      'サブスクなしでスマートホームを作る方法（2026年版）：Home Assistant を中心に、ローカル機器・ローカルハブ・クラウドカメラ不要の構成で月額料金をゼロに。初期費用のみで長期的に安く運用する方法を解説。',
    twitterDescription:
      'サブスクなしでスマートホームを作る：ローカル機器、ローカルハブ、ローカルのカメラ保存が、月額料金を一度きりのハードウェア費用に置き換えます。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'スマートホームの継続課金を避けたい人',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'スマートホーム サブスクなし',
      'スマートホーム 月額なし',
      'スマートホーム 料金なし',
      'ローカルカメラ サブスクなし',
      'サブスク不要 スマートホーム',
    ],
    leadAnswerBlock:
      '**ローカル対応機器、ローカルハブ（Home Assistant）、Frigate によるローカルのカメラ保存を選ぶことで、サブスクなしのスマートホームを作れます——月額料金ではなく一度きりのハードウェア費用を払います。** クラウドカメラとプレミアム機能こそが、サブスクの潜む場所です。',
    quickAnswerTop: {
      ja: {
        question: 'サブスクなしのスマートホームはどう作りますか？',
        answer:
          'ローカル対応機器（Zigbee、Z-Wave、Matter、ローカル Wi-Fi）を選び、Home Assistant のようなローカルハブを動かし、クラウドプランではなく Frigate でカメラをローカル録画します。これで、カメラ保存・AI 検出・プレミアム機能の継続課金が、一度きりのハードウェア費用に置き換わります。',
        bullets: [
          'サブスクはカメラ保存、AI 検出、プレミアム機能に潜む',
          'ローカルハブ（Home Assistant）は制御と自動化を無料で動かす',
          'Frigate は月額なしでカメラをローカル録画する',
          'ローカル対応機器はクラウドアカウントの要件を避ける',
          '一度きりのハードウェアが継続課金を置き換える',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'サブスクが潜む場所', anchor: 'where-hide' },
      { label: 'サブスクなしの構成', anchor: 'no-sub-stack' },
      { label: '料金のない機器', anchor: 'no-fee-devices' },
      { label: 'ローカルのカメラ保存', anchor: 'camera-storage' },
      { label: '一度きり費用の計算', anchor: 'cost-math' },
      { label: '課金するプラットフォーム', anchor: 'who-charges' },
      { label: '総コストの見積もり', anchor: 'estimate-tco' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'サブスクなしのスマートホームは、ローカル対応機器・ローカルハブ・ローカルのカメラ保存を使い、月額料金を一度きりのハードウェア費用に置き換えます。' },
      { type: 'plain-terms', content: 'スマートホームのサブスクはたいていクラウドカメラから来ます：映像を保存し AI 検出を解除するため毎月払うのです。カメラをローカル録画しローカルハブを動かせば、ハードウェアに一度払うだけで、コア機能に月額料金を一切払いません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'スマートホームのサブスクの多くはクラウドのカメラ保存と AI 検出から来る',
          'ローカルハブ（Home Assistant）は制御と自動化を料金なしで動かす',
          'Frigate はサブスクなしでカメラを録画し AI 検出をローカルで動かす',
          'クラウドアカウントを要しないローカル対応機器を選ぶ',
          '一度きりのハードウェア費用と引き換えに、継続課金がゼロになる',
          '時間が経つほど、ローカルのやり方は安く、データをプライベートに保つ',
          '主要プラットフォームでも基本操作は無料で、料金がかかるのはクラウド映像履歴、カメラのAI機能、AIアシスタントです',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'サブスクが潜む場所',
        content:
          '**スマートホームのサブスクは主にクラウドカメラに潜みます：映像保存、AI 検出、プレミアム機能が月額プランの背後にあります。** どこに潜むかを知れば、設計で取り除けます。',
        items: [
          '**カメラ保存：** クラウドの映像履歴が最も一般的な継続課金です。',
          '**AI 検出：** 人物/物体の通知はしばしばプランの背後に閉じ込められます。',
          '**プレミアム機能：** 一部のエコシステムは自動化や追加機能をサブスクの背後にロックします。',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-ja.svg',
        imageCaption: 'カメラ保存、AI検出、制御と自動化、音声/AIという4つの機能でサブスクとローカルを比較。各クラウドプランは、Frigate、Home Assistant、ローカルLLMという一度きりのローカルの選択肢に置き換わる。',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'サブスクなしの構成',
        content:
          '**サブスクなしの構成は、ローカルハブにローカル対応機器とローカルのカメラ録画を加えたもの——すべて自分が所有するハードウェアで動きます。** どのコア機能も月額料金を要しません。',
        items: [
          'ローカルハブ：Home Assistant は制御と自動化を無料で動かす——[入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          'ローカル機器：クラウドアカウントなしの Zigbee、Z-Wave、Matter、ローカル Wi-Fi。',
          'ローカルカメラ：録画と AI 検出に Frigate——[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera)を参照。',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-ja.svg',
        imageCaption: 'サブスクなしのスマートホームへの3ステップ：ローカルハブ（Home Assistant）、ローカル機器（Zigbee、Z-Wave、Matter）、ローカルカメラ（Frigate）——最終的に月額のサブスク料金はゼロになる。',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: '料金のない機器',
        content:
          '**ローカルプロトコルを使い、クラウドアカウントを要しない機器は、継続課金を課しません。** プロトコルと、クラウドログインが必須かを確認しましょう。',
        items: [
          'Zigbee と Z-Wave の電球、プラグ、センサーは料金がありません。',
          'ローカルコントローラーにコミッショニングした Matter 機器は料金がありません。',
          '基本制御にメーカーのサブスクを要する機器は避けましょう。',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'ローカルのカメラ保存',
        content:
          '**クラウドの映像履歴に払う代わりに、Frigate でカメラをローカルストレージに録画しましょう。** これでスマートホーム最大の継続課金がなくなります。',
        items: [
          'RTSP/PoE カメラを使い、ローカル録画する——映像は家にとどまります。',
          'Frigate はサブスクなしで AI 検出を提供します——[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera)を参照。',
          '欲しい保持期間のためローカルディスクを計画する；月額料金はかかりません。',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: '一度きり費用の計算',
        content:
          '**ローカルは継続的な月額料金を一度きりのハードウェアに置き換えるため、時間が経つほど安くなります。** 長く動かすほど、サブスクに対する節約は大きくなります。',
        columns: ['機能', 'サブスクの選択肢', 'サブスクなしのローカルの選択肢'],
        rows: [
          { '機能': 'カメラ保存', 'サブスクの選択肢': '月額のクラウドプラン', 'サブスクなしのローカルの選択肢': 'ローカルディスク + Frigate' },
          { '機能': 'AI 検出', 'サブスクの選択肢': 'クラウドプランの追加', 'サブスクなしのローカルの選択肢': 'Frigate（Coral/GPU）' },
          { '機能': '制御と自動化', 'サブスクの選択肢': 'ときに制限される', 'サブスクなしのローカルの選択肢': 'Home Assistant（無料）' },
          { '機能': '音声/AI', 'サブスクの選択肢': 'クラウドアシスタント', 'サブスクなしのローカルの選択肢': 'ローカル音声 + ローカルLLM' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: '課金されるプラットフォームと無料のままの機能',
        content:
          '**Google Home、Amazon Alexa、Apple ホーム、Home Assistantでは基本的な機器操作は無料で、料金はクラウド映像履歴、カメラのAI機能、AIアシスタント、リモートアクセスの追加機能にかかります。** 以下の価格は各社の定価（米国・EU）で、地域や時期により変わります。',
        items: [
          '**Google Home：** ライブ映像と動体検知通知にプランは不要です。映像履歴、Gemini Live、Ask Homeは[Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/)の対象で、Standardは月額10ドルまたは年額100ドル、Advancedは月額20ドルまたは年額200ドルです。PremiumはNest Awareの後継です。',
          '**Amazon AlexaとRing：** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us)はPrime会員は追加料金なし、非会員は月額19.99ドルです（非会員は利用制限付きの無料テキストチャットのみ）。Ringのクラウド映像には[Ring Protectプラン](https://ring.com/protect-plans)が必要で、EUでは月額Solo 3.99ユーロ、Multi 9.99ユーロ、Pro 19.99ユーロです。',
          '**Apple ホーム：** HomeKitセキュアビデオには[iCloud+](https://support.apple.com/guide/icloud/mme054c72692)が必要です。50GBプランは1台、200GBは最大5台、2TB以上は無制限です。録画はiCloudの容量を消費しません。',
          '**Philips Hue：** 電球、Hue Bridge、基本操作にサブスクリプションは不要です。Hue Secureカメラのクラウド映像履歴は有料の追加機能で、価格は地域により異なります。',
          '**Home Assistant：** ソフトウェア自体は無料です。任意の[Home Assistant Cloud](https://www.nabucasa.com/pricing/)（12月2日にHome Assistant Linkへ名称変更）は、リモートアクセス、バックアップ、音声処理で月額7.50ユーロまたは年額75ユーロです。',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: '購入前に総所有コストを見積もる方法',
        content:
          '**総所有コスト＝初期ハードウェア費＋（月額料金×利用月数）＋設置・交換費用です。3年と5年で比較してください。** 料金は商品ページに載らないことが多いため、購入前にメーカーのプラン案内を確認します。',
        items: [
          '**手順1：** 必要なクラウド機能を書き出します（映像履歴、AI通知、AIアシスタント、リモートアクセス）。',
          '**手順2：** メーカーのプラン案内で、カメラ単位または世帯単位の月額・年額を確認します。',
          '**手順3：** 36か月と60か月を掛けて、3年間と5年間のサブスク費用を出します。',
          '**手順4：** ローカル代替の費用を一度だけ見積もります（ハブ、ストレージ、Frigateなら検出アクセラレーター）。',
          '**手順5：** 支払いをやめた場合にライブ映像だけ残るのか、録画が失われるのかを確認します。',
          '**計算例：** 仮に1台月額4ユーロのプランでカメラ3台なら、年144ユーロ、3年で432ユーロ、5年で720ユーロです。これは計算例であり、メーカーの見積もりではありません。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '料金のないスマートホーム機器はどれですか？', a: 'Zigbee、Z-Wave、Matter を使う機器や、ローカル API を備えるローカル Wi-Fi 機器は、クラウドアカウントなしでローカルハブ経由で動くため、継続課金を課しません。継続課金はほぼ常に、クラウドカメラとエコシステムのプレミアム機能から来ます。' },
          { q: 'サブスクなしでカメラ映像を保存できますか？', a: 'はい。RTSP や PoE のカメラを Frigate で自分のストレージにローカル録画すれば、サブスクなしで録画と AI 検出が得られます。映像は家にとどまり、用意するディスク容量で保持期間を制御します。' },
          { q: '長期でどれくらい節約できますか？', a: '継続的な月額料金を一度きりのハードウェア費用に置き換えるため、節約は時間とともに増えます。正確な額は避けられるクラウドサブスクの数次第ですが、ローカル構成はたいてい、長く動かすほど安くなります。' },
          { q: 'サブスクなしのスマートホームに隠れた費用はありますか？', a: '主な費用は初期のハードウェア（ローカルハブ、検出アクセラレーター、ストレージ）と、あなたの設定時間です。その後は、コアの制御、自動化、ローカルのカメラ録画が継続課金なしで動きます。' },
          { q: 'スマート電球やプラグなどの機器は継続的なサブスク料金がかかりますか？', a: 'いいえ。電球、プラグ、スイッチ、センサーは主要プラットフォームでは継続課金されません。クラウドアカウントが必要な製品もありますが、料金がかかるのはカメラ、ドアベル、セキュリティサービスであり、機器そのものではありません。' },
          { q: 'AIスマートホームアシスタントは有料サブスクリプションが必要ですか？', a: 'メーカーによります。Alexa+はPrime会員は追加料金なしで、非会員は月額19.99ドルです。Gemini Live for HomeはGoogle Home Premiumの月額10ドルからの対象です。ローカル音声処理を使うHome Assistantのようなローカルアシスタントは無料です。' },
          { q: 'スマートホームのプラットフォームは基本機能にサブスクリプションを求めますか？', a: '通常は求めません。基本操作とオートメーションはGoogle Home、Alexa、Apple ホーム、Home Assistantで無料です。料金は映像履歴、カメラのAI機能、アシスタント、Home Assistant Cloudなどのリモートアクセス追加機能にかかります。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[なぜローカルスマートホームはクラウドに勝るのか](/ja/smart-home/why-local-smart-home-beats-cloud) — より広いローカルの根拠',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 料金なしの構成を作る',
          '[Frigate によるローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera) — クラウドカメラの料金を置き換える',
          '[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms) — クラスター横断：利用ごとの料金がないプライベートなローカルAI',
          '[バルコニー太陽光のサイジング・発電量・回収期間](/ja/balcony-solar/balcony-solar-sizing-yield-payback) — パネル出力、地域別予想発電量、回収期間 — ランニングコストなし',
          '[ローカル制御対応の最高のスマートロック（2026年）](/ja/smart-home/best-smart-locks-local-control-2027) — サブスク不要のロック選び',
          '[ローカルAI制御に最適なスマートサーモスタット(2026年)](/ja/smart-home/best-smart-thermostats-local-ai-2027) — サブスク不要のサーモスタット選び',
          '[電力量モニタリング対応スマートプラグのおすすめ（2026年版）](/ja/smart-home/best-energy-monitoring-smart-plugs-2027) — サブスク不要の電力モニタリング',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'サブスクなしでスマートホームを作る方法（2026）',
      description: 'サブスクなしでスマートホームを作る方法（2026年版）：Home Assistant を中心に、ローカル機器・ローカルハブ・クラウドカメラ不要の構成で月額料金をゼロに。初期費用のみで長期的に安く運用する方法を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/smart-home-without-subscriptions',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'スマートホームのサブスク' }, { '@type': 'Thing', name: 'ローカルストレージ' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '料金のないスマートホーム機器はどれですか？', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee、Z-Wave、Matter を使う機器や、ローカル API を備えるローカル Wi-Fi 機器は、ローカルハブ経由で動くため継続課金を課しません。継続課金はほぼ常にクラウドカメラとプレミアム機能から来ます。' } },
        { '@type': 'Question', name: 'サブスクなしでカメラ映像を保存できますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。RTSP や PoE のカメラを Frigate で自分のストレージにローカル録画すれば、サブスクなしで録画と AI 検出が得られます。映像は家にとどまります。' } },
        { '@type': 'Question', name: '長期でどれくらい節約できますか？', acceptedAnswer: { '@type': 'Answer', text: '継続的な月額料金を一度きりのハードウェア費用に置き換えるため、節約は時間とともに増えます。ローカル構成はたいてい、長く動かすほど安くなります。' } },
        { '@type': 'Question', name: 'サブスクなしのスマートホームに隠れた費用はありますか？', acceptedAnswer: { '@type': 'Answer', text: '主な費用は初期のハードウェア（ハブ、検出アクセラレーター、ストレージ）と設定時間です。その後はコアの制御、自動化、ローカル録画が継続課金なしで動きます。' } },
        { '@type': 'Question', name: 'スマート電球やプラグなどの機器は継続的なサブスク料金がかかりますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。電球、プラグ、スイッチ、センサーは主要プラットフォームでは継続課金されません。クラウドアカウントが必要な製品もありますが、料金がかかるのはカメラ、ドアベル、セキュリティサービスであり、機器そのものではありません。' } },
        { '@type': 'Question', name: 'AIスマートホームアシスタントは有料サブスクリプションが必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'メーカーによります。Alexa+はPrime会員は追加料金なしで、非会員は月額19.99ドルです。Gemini Live for HomeはGoogle Home Premiumの月額10ドルからの対象です。ローカル音声処理を使うHome Assistantのようなローカルアシスタントは無料です。' } },
        { '@type': 'Question', name: 'スマートホームのプラットフォームは基本機能にサブスクリプションを求めますか？', acceptedAnswer: { '@type': 'Answer', text: '通常は求めません。基本操作とオートメーションはGoogle Home、Alexa、Apple ホーム、Home Assistantで無料です。料金は映像履歴、カメラのAI機能、アシスタント、Home Assistant Cloudなどのリモートアクセス追加機能にかかります。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-pt.webp',
    title: 'Como Construir uma Casa Inteligente Sem Nenhuma Assinatura (2026)',
    seoTitle: 'Casa Inteligente Sem Assinaturas: Guia de Configuração 2026',
    intro:
      'Você pode construir uma casa inteligente sem nenhuma assinatura escolhendo dispositivos com capacidade local e um hub local, pagando custos de hardware únicos em vez de taxas mensais. Este guia mostra onde as assinaturas se escondem, o stack local sem assinatura, os dispositivos que não cobram taxas, o armazenamento local de câmeras e a matemática do custo único que torna o local mais barato com o tempo.',
    metaDescription:
      'Construa uma casa inteligente sem assinaturas em 2026: dispositivos locais, hub local e armazenamento local de câmeras eliminam as taxas mensais.',
    twitterDescription:
      'Construa uma casa inteligente sem assinaturas: dispositivos locais, um hub local e armazenamento local de câmeras substituem as taxas mensais por custos de hardware únicos.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Pessoas evitando taxas recorrentes da casa inteligente',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      'casa inteligente sem assinatura',
      'casa inteligente sem assinaturas',
      'casa inteligente sem taxas',
      'câmera local sem assinatura',
      'casa inteligente livre de assinaturas',
    ],
    leadAnswerBlock:
      '**Construa uma casa inteligente sem assinaturas escolhendo dispositivos com capacidade local, um hub local (Home Assistant) e armazenamento local de câmeras com o Frigate — você paga custos de hardware únicos em vez de taxas mensais.** Câmeras na nuvem e recursos premium são onde as assinaturas se escondem.',
    quickAnswerTop: {
      pt: {
        question: 'Como construo uma casa inteligente sem assinaturas?',
        answer:
          'Escolha dispositivos com capacidade local (Zigbee, Z-Wave, Matter, Wi-Fi local), rode um hub local como o Home Assistant e grave as câmeras localmente com o Frigate em vez de um plano na nuvem. Isso substitui as taxas recorrentes por armazenamento de câmera, detecção com IA e recursos premium por um custo de hardware único.',
        bullets: [
          'As assinaturas se escondem em armazenamento de câmera, detecção com IA, recursos premium',
          'Um hub local (Home Assistant) roda o controle e as automações de graça',
          'O Frigate grava as câmeras localmente sem taxa mensal',
          'Dispositivos com capacidade local evitam a exigência de conta na nuvem',
          'O hardware único substitui as taxas recorrentes',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Onde as assinaturas se escondem', anchor: 'where-hide' },
      { label: 'O stack sem assinatura', anchor: 'no-sub-stack' },
      { label: 'Dispositivos sem taxas', anchor: 'no-fee-devices' },
      { label: 'Armazenamento local de câmeras', anchor: 'camera-storage' },
      { label: 'A matemática do custo único', anchor: 'cost-math' },
      { label: 'Quais plataformas cobram', anchor: 'who-charges' },
      { label: 'Estimar o custo total', anchor: 'estimate-tco' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Uma casa inteligente sem assinaturas usa dispositivos com capacidade local, um hub local e armazenamento local de câmeras para substituir as taxas mensais por custos de hardware únicos.' },
      { type: 'plain-terms', content: 'As assinaturas da casa inteligente geralmente vêm das câmeras na nuvem: você paga por mês para armazenar as imagens e liberar a detecção com IA. Ao gravar as câmeras localmente e rodar um hub local, você paga uma vez pelo hardware e nunca paga uma taxa mensal pelos recursos principais.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'A maioria das assinaturas da casa inteligente vem do armazenamento de câmeras na nuvem e da detecção com IA',
          'Um hub local (Home Assistant) roda o controle e as automações sem taxa',
          'O Frigate grava as câmeras e roda a detecção com IA localmente, sem assinatura',
          'Escolha dispositivos com capacidade local que não exijam uma conta na nuvem',
          'Você troca um custo de hardware único por zero taxas recorrentes',
          'Com o tempo, a abordagem local é mais barata e mantém os dados privados',
          'O controle básico é gratuito nas grandes plataformas; as taxas recaem sobre o histórico de vídeo na nuvem, os recursos de IA das câmeras e os assistentes de IA',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: 'Onde as assinaturas se escondem',
        content:
          '**As assinaturas da casa inteligente se escondem principalmente nas câmeras na nuvem: armazenamento de gravações, detecção com IA e recursos premium atrás de um plano mensal.** Saber onde elas se escondem permite projetá-las para fora.',
        items: [
          '**Armazenamento de câmera:** o histórico de vídeo na nuvem é a taxa recorrente mais comum.',
          '**Detecção com IA:** os alertas de pessoa/objeto costumam ficar atrás de um plano.',
          '**Recursos premium:** alguns ecossistemas bloqueiam automações ou extras atrás de assinaturas.',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-pt.svg',
        imageCaption: 'Comparação entre assinatura e opção local em quatro funções: armazenamento de câmera, detecção com IA, controle e automações, e voz/IA. Cada plano de nuvem recorrente é substituído por uma opção local única: Frigate, Home Assistant ou um LLM local.',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: 'O stack sem assinatura',
        content:
          '**O stack sem assinatura é um hub local mais dispositivos com capacidade local e gravação local de câmeras — tudo roda em hardware que você possui.** Nenhum recurso principal exige uma taxa mensal.',
        items: [
          'Hub local: o Home Assistant roda o controle e as automações de graça — veja [primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Dispositivos locais: Zigbee, Z-Wave, Matter ou Wi-Fi local sem conta na nuvem.',
          'Câmeras locais: o Frigate para gravação e detecção com IA — veja [câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera).',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-pt.svg',
        imageCaption: 'Caminho de três passos para uma casa inteligente sem assinaturas: hub local (Home Assistant), dispositivos locais (Zigbee, Z-Wave, Matter) e câmeras locais (Frigate), terminando sem taxas de assinatura recorrentes.',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: 'Dispositivos sem taxas',
        content:
          '**Os dispositivos que usam protocolos locais e não exigem uma conta na nuvem não cobram taxas recorrentes.** Verifique o protocolo e se um login na nuvem é obrigatório.',
        items: [
          'Lâmpadas, tomadas e sensores Zigbee e Z-Wave não têm taxas.',
          'Dispositivos Matter emparelhados a um controlador local não têm taxas.',
          'Evite dispositivos que exijam uma assinatura do fabricante para o controle básico.',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: 'Armazenamento local de câmeras',
        content:
          '**Grave as câmeras em armazenamento local com o Frigate em vez de pagar pelo histórico de vídeo na nuvem.** Isso remove a maior taxa recorrente da casa inteligente.',
        items: [
          'Use câmeras RTSP/PoE e grave localmente — as imagens ficam em casa.',
          'O Frigate fornece detecção com IA sem assinatura — veja [câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera).',
          'Planeje disco local para a retenção que você quer; nenhuma taxa mensal se aplica.',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: 'A matemática do custo único',
        content:
          '**O local substitui as taxas mensais recorrentes por hardware único, então é mais barato com o tempo.** Quanto mais tempo você o roda, maior a economia frente a uma assinatura.',
        columns: ['Função', 'Opção com assinatura', 'Opção local sem assinatura'],
        rows: [
          { 'Função': 'Armazenamento de câmera', 'Opção com assinatura': 'Plano mensal na nuvem', 'Opção local sem assinatura': 'Disco local + Frigate' },
          { 'Função': 'Detecção com IA', 'Opção com assinatura': 'Adicional do plano na nuvem', 'Opção local sem assinatura': 'Frigate (Coral/GPU)' },
          { 'Função': 'Controle e automações', 'Opção com assinatura': 'Às vezes bloqueado', 'Opção local sem assinatura': 'Home Assistant (grátis)' },
          { 'Função': 'Voz/IA', 'Opção com assinatura': 'Assistente na nuvem', 'Opção local sem assinatura': 'Voz local + LLM local' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: 'Quais plataformas cobram – e o que continua grátis',
        content:
          '**O controle básico de dispositivos é gratuito no Google Home, Amazon Alexa, Apple Casa e Home Assistant; as taxas recaem sobre o histórico de vídeo na nuvem, os recursos de IA das câmeras, os assistentes de IA e os complementos de acesso remoto.** Os preços abaixo são preços de tabela dos fabricantes e variam conforme a região e o tempo.',
        items: [
          '**Google Home:** a visualização ao vivo e os alertas de movimento não exigem plano; o histórico de vídeo, o Gemini Live e o Ask Home ficam no [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/) – Standard US$ 10/mês ou US$ 100/ano, Advanced US$ 20/mês ou US$ 200/ano. O Premium substituiu o Nest Aware.',
          '**Amazon Alexa e Ring:** o [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) está incluído no Prime e custa US$ 19,99/mês sem o Prime (sem Prime, há apenas um chat de texto gratuito e limitado). O vídeo na nuvem da Ring exige um [plano Ring Protect](https://ring.com/protect-plans) – na UE, Solo € 3,99, Multi € 9,99, Pro € 19,99 por mês.',
          '**Apple Casa:** o HomeKit Secure Video exige [iCloud+](https://support.apple.com/guide/icloud/mme054c72692): o plano de 50 GB cobre uma câmera, o de 200 GB até cinco e o de 2 TB ou mais, ilimitadas. As gravações não consomem seu armazenamento.',
          '**Philips Hue:** lâmpadas, a Hue Bridge e o controle básico não exigem assinatura; o histórico de vídeo na nuvem das câmeras Hue Secure é um complemento pago cujo preço varia por região.',
          '**Home Assistant:** o software é gratuito. O serviço opcional [Home Assistant Cloud](https://www.nabucasa.com/pricing/) (renomeado Home Assistant Link em 2 de dezembro) custa € 7,50/mês ou € 75/ano por acesso remoto, backups e processamento de voz.',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: 'Como estimar o custo total antes de comprar',
        content:
          '**Custo total = hardware inicial + (taxa mensal × meses de uso) + custo de instalação e reposição; compare em 3 e 5 anos.** As taxas raramente aparecem na página do produto: consulte a página de planos do fabricante antes de comprar.',
        items: [
          '**Passo 1:** liste os recursos em nuvem que você quer: histórico de vídeo, alertas de IA, assistente de IA, acesso remoto.',
          '**Passo 2:** leia a página de planos e anote o preço por câmera ou por casa, mensal ou anual.',
          '**Passo 3:** multiplique por 36 e 60 meses para obter o custo de assinatura em 3 e 5 anos.',
          '**Passo 4:** oriente o custo da alternativa local uma única vez: hub, disco de armazenamento e, com o Frigate, um acelerador de detecção.',
          '**Passo 5:** verifique o que acontece se você parar de pagar – só visualização ao vivo ou gravações perdidas.',
          '**Exemplo ilustrativo:** três câmeras em um plano hipotético de R$ 20 por câmera ao mês custam R$ 720 por ano, R$ 2.160 em 3 anos e R$ 3.600 em 5 anos. É um exemplo de cálculo, não uma cotação.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Quais dispositivos de casa inteligente não têm taxas?', a: 'Dispositivos que usam Zigbee, Z-Wave ou Matter, ou dispositivos de Wi-Fi local com uma API local, não cobram taxas recorrentes porque funcionam por meio de um hub local sem conta na nuvem. As taxas recorrentes quase sempre vêm das câmeras na nuvem e dos recursos premium do ecossistema.' },
          { q: 'Posso armazenar as imagens das câmeras sem assinatura?', a: 'Sim. Grave câmeras RTSP ou PoE localmente com o Frigate no seu próprio armazenamento, que fornece gravação e detecção com IA sem assinatura. As imagens ficam em casa, e você controla a retenção pelo espaço de disco que fornecer.' },
          { q: 'Quanto eu economizo a longo prazo?', a: 'A economia cresce com o tempo porque você substitui as taxas mensais recorrentes por um custo de hardware único. O valor exato depende de quantas assinaturas na nuvem você evita, mas uma configuração local costuma ser mais barata quanto mais você a roda.' },
          { q: 'Há custos ocultos em uma casa inteligente sem assinatura?', a: 'O custo principal é o hardware inicial (um hub local, um acelerador de detecção e armazenamento) mais o seu tempo de configuração. Depois disso, o controle principal, as automações e a gravação local de câmeras rodam sem taxas recorrentes.' },
          { q: 'Lâmpadas, tomadas e outros dispositivos inteligentes exigem taxas de assinatura contínuas?', a: 'Não. Lâmpadas, tomadas, interruptores e sensores não cobram taxas recorrentes em nenhuma plataforma importante. Alguns exigem uma conta na nuvem, mas as taxas recaem sobre câmeras, campainhas e serviços de segurança, não sobre os dispositivos em si.' },
          { q: 'Os assistentes de IA para casa inteligente exigem assinatura paga?', a: 'Depende do fabricante. O Alexa+ está incluído no Prime e custa US$ 19,99/mês sem o Prime; o Gemini Live para casa faz parte do Google Home Premium a partir de US$ 10/mês. Um assistente local como o Home Assistant com voz local não tem taxa.' },
          { q: 'As plataformas de casa inteligente exigem assinatura para os recursos básicos?', a: 'Em geral, não. O controle básico e as automações são gratuitos no Google Home, Alexa, Apple Casa e Home Assistant. As taxas recaem sobre o histórico de vídeo, os recursos de IA das câmeras, os assistentes e complementos de acesso remoto como o Home Assistant Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — o argumento local mais amplo',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — construa o stack sem taxas',
          '[Câmeras de segurança com IA local com Frigate](/pt/smart-home/local-ai-security-camera) — substitua as taxas das câmeras na nuvem',
          '[O que são LLMs locais](/pt/local-llms/what-are-local-llms) — entre clusters: IA local privada sem taxa por uso',
          '[Dimensionamento, rendimento e payback do solar de varanda](/pt/balcony-solar/balcony-solar-sizing-yield-payback) — potência do painel, rendimento esperado por localização e prazo de retorno — sem custos recorrentes',
          '[As melhores fechaduras inteligentes com controle local (2026)](/pt/smart-home/best-smart-locks-local-control-2027) — fechaduras sem assinatura',
          '[Melhores termostatos inteligentes para controle de IA local (2026)](/pt/smart-home/best-smart-thermostats-local-ai-2027) — termostatos sem assinatura',
          '[As melhores tomadas inteligentes com monitoramento de energia (2026)](/pt/smart-home/best-energy-monitoring-smart-plugs-2027) — monitoramento de energia sem assinatura',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Como Construir uma Casa Inteligente Sem Nenhuma Assinatura (2026)',
      description: 'Construa uma casa inteligente sem assinaturas em 2026: dispositivos locais, hub local e armazenamento local de câmeras eliminam as taxas mensais.',
      url: 'https://www.promptquorum.com/pt/smart-home/smart-home-without-subscriptions',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Assinaturas de casa inteligente' }, { '@type': 'Thing', name: 'Armazenamento local' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Quais dispositivos de casa inteligente não têm taxas?', acceptedAnswer: { '@type': 'Answer', text: 'Dispositivos que usam Zigbee, Z-Wave ou Matter, ou de Wi-Fi local com uma API local, não cobram taxas recorrentes porque funcionam por meio de um hub local. As taxas quase sempre vêm das câmeras na nuvem e dos recursos premium.' } },
        { '@type': 'Question', name: 'Posso armazenar as imagens das câmeras sem assinatura?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Grave câmeras RTSP ou PoE localmente com o Frigate no seu próprio armazenamento, para gravação e detecção com IA sem assinatura. As imagens ficam em casa.' } },
        { '@type': 'Question', name: 'Quanto eu economizo a longo prazo?', acceptedAnswer: { '@type': 'Answer', text: 'A economia cresce com o tempo porque você substitui as taxas mensais recorrentes por um custo de hardware único. Uma configuração local costuma ser mais barata quanto mais você a roda.' } },
        { '@type': 'Question', name: 'Há custos ocultos em uma casa inteligente sem assinatura?', acceptedAnswer: { '@type': 'Answer', text: 'O custo principal é o hardware inicial (hub, acelerador de detecção, armazenamento) mais o seu tempo de configuração. Depois, o controle principal, as automações e a gravação local rodam sem taxas recorrentes.' } },
        { '@type': 'Question', name: 'Lâmpadas, tomadas e outros dispositivos inteligentes exigem taxas de assinatura contínuas?', acceptedAnswer: { '@type': 'Answer', text: 'Não. Lâmpadas, tomadas, interruptores e sensores não cobram taxas recorrentes em nenhuma plataforma importante. Alguns exigem uma conta na nuvem, mas as taxas recaem sobre câmeras, campainhas e serviços de segurança, não sobre os dispositivos em si.' } },
        { '@type': 'Question', name: 'Os assistentes de IA para casa inteligente exigem assinatura paga?', acceptedAnswer: { '@type': 'Answer', text: 'Depende do fabricante. O Alexa+ está incluído no Prime e custa US$ 19,99/mês sem o Prime; o Gemini Live para casa faz parte do Google Home Premium a partir de US$ 10/mês. Um assistente local como o Home Assistant com voz local não tem taxa.' } },
        { '@type': 'Question', name: 'As plataformas de casa inteligente exigem assinatura para os recursos básicos?', acceptedAnswer: { '@type': 'Answer', text: 'Em geral, não. O controle básico e as automações são gratuitos no Google Home, Alexa, Apple Casa e Home Assistant. As taxas recaem sobre o histórico de vídeo, os recursos de IA das câmeras, os assistentes e complementos de acesso remoto como o Home Assistant Cloud.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Decision & Comparison',
    heroImage: '/images/smart-home-without-subscriptions-overview-hero-zh.webp',
    title: '如何打造零订阅的智能家居（2026）',
    seoTitle: '零订阅智能家居 2026：本地设备、本地中枢搭建完全指南',
    intro:
      '通过选择支持本地的设备和一个本地中枢，并支付一次性硬件成本而非按月付费，你就能打造一个零订阅的智能家居。本指南展示订阅藏在何处、无订阅的本地堆栈、不收费的设备、本地摄像头存储，以及让本地随时间更便宜的一次性成本算法。',
    metaDescription:
      '打造零订阅智能家居的完整方案（2026）：选用支持本地运行的设备和 Home Assistant 中枢，用 Frigate 本地存储摄像头画面，以一次性硬件成本彻底取代按月付费。含设备推荐、成本计算与长期节省分析。',
    twitterDescription:
      '打造无订阅的智能家居：本地设备、一个本地中枢，以及本地摄像头存储，用一次性硬件成本取代按月付费。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '想避免智能家居持续费用的人',
    primaryTerm: 'smart home without subscriptions',
    targetKeywords: [
      '智能家居 无订阅',
      '智能家居 无月费',
      '智能家居 无费用',
      '本地摄像头 无订阅',
      '免订阅 智能家居',
    ],
    leadAnswerBlock:
      '**通过选择支持本地的设备、一个本地中枢（Home Assistant），以及用 Frigate 的本地摄像头存储，打造无订阅的智能家居——你支付一次性硬件成本，而非按月付费。** 云端摄像头和高级功能正是订阅藏身之处。',
    quickAnswerTop: {
      zh: {
        question: '我该如何打造无订阅的智能家居？',
        answer:
          '选择支持本地的设备（Zigbee、Z-Wave、Matter、本地 Wi-Fi），运行像 Home Assistant 这样的本地中枢，并用 Frigate 本地录制摄像头，而不是云端套餐。这就用一次性硬件成本，取代了摄像头存储、AI 检测和高级功能的持续费用。',
        bullets: [
          '订阅藏在摄像头存储、AI 检测、高级功能中',
          '本地中枢（Home Assistant）免费运行控制与自动化',
          'Frigate 无月费地本地录制摄像头',
          '支持本地的设备避免云端账户要求',
          '一次性硬件取代持续费用',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '订阅藏在何处', anchor: 'where-hide' },
      { label: '无订阅堆栈', anchor: 'no-sub-stack' },
      { label: '不收费的设备', anchor: 'no-fee-devices' },
      { label: '本地摄像头存储', anchor: 'camera-storage' },
      { label: '一次性成本算法', anchor: 'cost-math' },
      { label: '哪些平台收费', anchor: 'who-charges' },
      { label: '估算总成本', anchor: 'estimate-tco' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '无订阅的智能家居使用支持本地的设备、一个本地中枢，以及本地摄像头存储，用一次性硬件成本取代按月付费。' },
      { type: 'plain-terms', content: '智能家居的订阅通常来自云端摄像头：你按月付费以存储画面并解锁 AI 检测。通过本地录制摄像头并运行一个本地中枢，你只为硬件付费一次，永远不为核心功能支付月费。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '大多数智能家居订阅来自云端摄像头存储和 AI 检测',
          '本地中枢（Home Assistant）免费运行控制与自动化',
          'Frigate 无订阅地本地录制摄像头并运行 AI 检测',
          '选择不需要云端账户的支持本地的设备',
          '你用一次性硬件成本换取零持续费用',
          '随时间推移，本地方式更便宜，并让数据保持私密',
          '主流平台的基础控制都是免费的；收费集中在云端视频回放、摄像头AI功能和AI助手上',
        ],
      },
      whereHide: {
        id: 'where-hide',
        title: '订阅藏在何处',
        content:
          '**智能家居的订阅主要藏在云端摄像头里：录像存储、AI 检测和高级功能都在月度套餐之后。** 知道它们藏在哪里，就能在设计时把它们排除。',
        items: [
          '**摄像头存储：** 云端视频历史是最常见的持续费用。',
          '**AI 检测：** 人/物告警常被置于套餐之后。',
          '**高级功能：** 某些生态把自动化或附加功能锁在订阅之后。',
        ],
        image: '/images/smart-home-without-subscriptions-subscription-vs-local-zh.svg',
        imageCaption: '在摄像头存储、AI 检测、控制与自动化、语音/AI 四项功能上对比订阅方案与本地方案。每一项云端套餐都被 Frigate、Home Assistant 或本地 LLM 等一次性本地方案取代。',
      },
      noSubStack: {
        id: 'no-sub-stack',
        title: '无订阅堆栈',
        content:
          '**无订阅堆栈就是一个本地中枢，加上支持本地的设备和本地摄像头录制——一切都在你拥有的硬件上运行。** 没有任何核心功能需要月费。',
        items: [
          '本地中枢：Home Assistant 免费运行控制与自动化——参见[入门](/zh/smart-home/home-assistant-getting-started)。',
          '本地设备：无云端账户的 Zigbee、Z-Wave、Matter 或本地 Wi-Fi。',
          '本地摄像头：用 Frigate 录制并进行 AI 检测——参见[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera)。',
        ],
        image: '/images/smart-home-without-subscriptions-no-sub-setup-steps-zh.svg',
        imageCaption: '通向无订阅智能家居的三步路径：本地中枢（Home Assistant）、本地设备（Zigbee、Z-Wave、Matter）、本地摄像头（Frigate）——最终实现零经常性订阅费用。',
      },
      noFeeDevices: {
        id: 'no-fee-devices',
        title: '不收费的设备',
        content:
          '**使用本地协议且不需要云端账户的设备，不收取任何持续费用。** 检查协议，以及云端登录是否为强制。',
        items: [
          'Zigbee 和 Z-Wave 的灯泡、插座和传感器没有费用。',
          '配网到本地控制器的 Matter 设备没有费用。',
          '避免那些基础控制就要求厂商订阅的设备。',
        ],
      },
      cameraStorage: {
        id: 'camera-storage',
        title: '本地摄像头存储',
        content:
          '**用 Frigate 把摄像头录制到本地存储，而不是为云端视频历史付费。** 这去除了智能家居最大的持续费用。',
        items: [
          '使用 RTSP/PoE 摄像头并本地录制——画面留在你家中。',
          'Frigate 无订阅地提供 AI 检测——参见[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera)。',
          '为你想要的保留时长规划本地磁盘；不收取月费。',
        ],
      },
      costMath: {
        id: 'cost-math',
        title: '一次性成本算法',
        content:
          '**本地用一次性硬件取代持续的月费，因此随时间推移更便宜。** 你运行得越久，相较订阅的节省就越大。',
        columns: ['功能', '订阅方案', '无订阅的本地方案'],
        rows: [
          { '功能': '摄像头存储', '订阅方案': '按月云端套餐', '无订阅的本地方案': '本地磁盘 + Frigate' },
          { '功能': 'AI 检测', '订阅方案': '云端套餐附加项', '无订阅的本地方案': 'Frigate（Coral/GPU）' },
          { '功能': '控制与自动化', '订阅方案': '有时被锁定', '无订阅的本地方案': 'Home Assistant（免费）' },
          { '功能': '语音/AI', '订阅方案': '云端助手', '无订阅的本地方案': '本地语音 + 本地 LLM' },
        ],
      },
      whoCharges: {
        id: 'who-charges',
        title: '哪些平台收费，哪些功能保持免费',
        content:
          '**Google Home、Amazon Alexa、Apple 家庭和 Home Assistant 的基础设备控制都是免费的；费用主要出现在云端视频回放、摄像头AI功能、AI助手和远程访问附加服务上。** 以下价格为厂商官方标价（美国/欧盟），会随地区和时间变化。',
        items: [
          '**Google Home：** 实时画面和移动提醒无需订阅；视频回放、Gemini Live 和 Ask Home 属于 [Google Home Premium](https://blog.google/products-and-platforms/devices/google-nest/googe-home-premium-google-ai-pro-subscription/)，Standard 为每月10美元或每年100美元，Advanced 为每月20美元或每年200美元。Premium 取代了 Nest Aware。',
          '**Amazon Alexa 与 Ring：** [Alexa+](https://www.aboutamazon.com/news/devices/alexa-plus-available-free-prime-members-us) 对 Prime 会员免费，非会员每月19.99美元（非会员仅有限额的免费文字聊天）。Ring 云端视频需要 [Ring Protect 套餐](https://ring.com/protect-plans)，欧盟地区 Solo 每月3.99欧元、Multi 9.99欧元、Pro 19.99欧元。',
          '**Apple 家庭：** HomeKit 安全视频需要 [iCloud+](https://support.apple.com/guide/icloud/mme054c72692)：50 GB 套餐支持1台摄像头，200 GB 最多5台，2 TB 及以上不限。录像不占用 iCloud 存储空间。',
          '**Philips Hue：** 灯泡、Hue Bridge 和基础控制无需订阅；Hue Secure 摄像头的云端视频回放是付费附加服务，价格因地区而异。',
          '**Home Assistant：** 软件本身免费。可选的 [Home Assistant Cloud](https://www.nabucasa.com/pricing/)（12月2日更名为 Home Assistant Link）用于远程访问、备份和语音处理，每月7.50欧元或每年75欧元。',
        ],
      },
      estimateTco: {
        id: 'estimate-tco',
        title: '购买前如何估算总拥有成本',
        content:
          '**总拥有成本 = 一次性硬件费用 +（月费 × 使用月数）+ 安装与更换成本；请按3年和5年对比。** 费用很少写在产品页上，购买前请查看厂商的套餐页面。',
        items: [
          '**第1步：** 列出你需要的云端功能：视频回放、AI提醒、AI助手、远程访问。',
          '**第2步：** 查看厂商套餐页，记下按摄像头或按家庭计价的月费与年费。',
          '**第3步：** 乘以36个月和60个月，得到3年和5年的订阅成本。',
          '**第4步：** 一次性估算本地方案的成本：中枢、存储硬盘，使用 Frigate 时再加检测加速器。',
          '**第5步：** 确认停止付费后会怎样：只剩实时画面，还是录像丢失。',
          '**示例：** 假设每台摄像头每月4欧元，3台摄像头每年144欧元，3年432欧元，5年720欧元。这只是计算示例，不是厂商报价。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '哪些智能家居设备没有费用？', a: '使用 Zigbee、Z-Wave 或 Matter 的设备，或带本地 API 的本地 Wi-Fi 设备，不收取持续费用，因为它们经由本地中枢、在没有云端账户的情况下工作。持续费用几乎总是来自云端摄像头和生态的高级功能。' },
          { q: '我能在没有订阅的情况下存储摄像头画面吗？', a: '能。用 Frigate 把 RTSP 或 PoE 摄像头本地录制到你自己的存储上，即可获得无订阅的录制和 AI 检测。画面留在你家中，你通过提供的磁盘空间来控制保留时长。' },
          { q: '长期能省多少？', a: '节省随时间增长，因为你用一次性硬件成本取代了持续的月费。确切金额取决于你避免了多少云端订阅，但本地配置通常运行得越久越便宜。' },
          { q: '无订阅的智能家居有隐藏成本吗？', a: '主要成本是前期硬件（一个本地中枢、一个检测加速器和存储）外加你的配置时间。此后，核心控制、自动化和本地摄像头录制都在没有持续费用的情况下运行。' },
          { q: '智能灯泡、插座等设备需要持续的订阅费吗？', a: '不需要。灯泡、插座、开关和传感器在主流平台上都不收取经常性费用。部分设备需要云账号，但费用集中在摄像头、门铃和安防服务上，而不是设备本身。' },
          { q: 'AI智能家居助手需要付费订阅吗？', a: '取决于厂商。Alexa+ 对 Prime 会员免费，非会员每月19.99美元；Gemini Live for Home 包含在每月10美元起的 Google Home Premium 中。使用本地语音处理的本地助手（如 Home Assistant）无需付费。' },
          { q: '智能家居平台的核心功能需要订阅吗？', a: '通常不需要。Google Home、Alexa、Apple 家庭和 Home Assistant 的基础控制与自动化都是免费的。费用出现在视频回放、摄像头AI功能、助手以及 Home Assistant Cloud 等远程访问附加服务上。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[为何本地智能家居胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 更广泛的本地论据',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 搭建无费用堆栈',
          '[用 Frigate 的本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera) — 取代云端摄像头费用',
          '[什么是本地LLM](/zh/local-llms/what-are-local-llms) — 跨集群：无按次费用的私密本地 AI',
          '[阳台太阳能尺寸、发电量与回收期](/zh/balcony-solar/balcony-solar-sizing-yield-payback) — 面板瓦数、按地点预期发电量和回收期 — 无重复费用',
          '[支持本地控制的最佳智能门锁（2026年）](/zh/smart-home/best-smart-locks-local-control-2027) — 无需订阅的门锁推荐',
          '[本地AI控制最佳智能恒温器(2026年)](/zh/smart-home/best-smart-thermostats-local-ai-2027) — 无需订阅的恒温器推荐',
          '[2026年最佳能耗监测智能插座推荐](/zh/smart-home/best-energy-monitoring-smart-plugs-2027) — 无需订阅的能耗监测',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '如何打造零订阅的智能家居（2026）',
      description: '打造零订阅智能家居的完整方案（2026）：选用支持本地运行的设备和 Home Assistant 中枢，用 Frigate 本地存储摄像头画面，以一次性硬件成本彻底取代按月付费。含设备推荐、成本计算与长期节省分析。',
      url: 'https://www.promptquorum.com/zh/smart-home/smart-home-without-subscriptions',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: '智能家居订阅' }, { '@type': 'Thing', name: '本地存储' }, { '@type': 'Thing', name: 'Frigate' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '哪些智能家居设备没有费用？', acceptedAnswer: { '@type': 'Answer', text: '使用 Zigbee、Z-Wave 或 Matter 的设备，或带本地 API 的本地 Wi-Fi 设备，不收取持续费用，因为它们经由本地中枢工作。持续费用几乎总是来自云端摄像头和高级功能。' } },
        { '@type': 'Question', name: '我能在没有订阅的情况下存储摄像头画面吗？', acceptedAnswer: { '@type': 'Answer', text: '能。用 Frigate 把 RTSP 或 PoE 摄像头本地录制到你自己的存储上，即可获得无订阅的录制和 AI 检测。画面留在你家中。' } },
        { '@type': 'Question', name: '长期能省多少？', acceptedAnswer: { '@type': 'Answer', text: '节省随时间增长，因为你用一次性硬件成本取代了持续的月费。本地配置通常运行得越久越便宜。' } },
        { '@type': 'Question', name: '无订阅的智能家居有隐藏成本吗？', acceptedAnswer: { '@type': 'Answer', text: '主要成本是前期硬件（中枢、检测加速器、存储）外加配置时间。此后核心控制、自动化和本地录制都无持续费用。' } },
        { '@type': 'Question', name: '智能灯泡、插座等设备需要持续的订阅费吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。灯泡、插座、开关和传感器在主流平台上都不收取经常性费用。部分设备需要云账号，但费用集中在摄像头、门铃和安防服务上，而不是设备本身。' } },
        { '@type': 'Question', name: 'AI智能家居助手需要付费订阅吗？', acceptedAnswer: { '@type': 'Answer', text: '取决于厂商。Alexa+ 对 Prime 会员免费，非会员每月19.99美元；Gemini Live for Home 包含在每月10美元起的 Google Home Premium 中。使用本地语音处理的本地助手（如 Home Assistant）无需付费。' } },
        { '@type': 'Question', name: '智能家居平台的核心功能需要订阅吗？', acceptedAnswer: { '@type': 'Answer', text: '通常不需要。Google Home、Alexa、Apple 家庭和 Home Assistant 的基础控制与自动化都是免费的。费用出现在视频回放、摄像头AI功能、助手以及 Home Assistant Cloud 等远程访问附加服务上。' } },
      ],
    },
  },
}
