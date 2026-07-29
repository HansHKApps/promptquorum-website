import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-en.png',
    title: 'Smart Home for Beginners: Where to Start in 2026',
    seoTitle: 'Smart Home Beginner Guide 2026: Where to Start First',
    intro:
      'The reliable way to start a smart home in 2026 is to pick one hub, set up one room, add a few local-capable devices, and automate a couple of routines before expanding. This beginner\'s guide gives a step-by-step path, recommends a local-first approach for privacy, and flags the mistakes that lead to a drawer of incompatible gadgets.',
    metaDescription:
      'Start a smart home the right way: pick a hub, begin with one room, add local-capable devices, automate, then expand. A practical 2026 beginner\'s path.',
    twitterDescription:
      'New to smart homes? Start with one hub and one room, add local-capable devices, automate a couple of routines, then expand. The 2026 beginner path.',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'First-time smart home builders',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'how to start smart home',
      'smart home for beginners',
      'smart home starter guide',
      'first smart home setup',
      'beginner smart home 2026',
    ],
    leadAnswerBlock:
      '**Start by picking one hub, setting up one room, adding a few local-capable devices, and automating a couple of routines — then expand once it works.** Choosing a local-first hub like Home Assistant early avoids a harder migration later if privacy matters to you.',
    quickAnswerTop: {
      en: {
        question: 'How do I start a smart home as a beginner?',
        answer:
          'Pick one hub, start with a single room, add a few local-capable devices (bulbs, a sensor, a plug), and set up one or two automations. Get that working before expanding. Choosing a local-first hub such as Home Assistant from the start keeps your data private and avoids re-doing everything later.',
        bullets: [
          'Step 1: pick a hub (local-first if privacy matters)',
          'Step 2: start with one room',
          'Step 3: add a few local-capable devices',
          'Step 4: create one or two automations',
          'Step 5: add voice/AI later, then expand',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Step 1: Pick a Hub', anchor: 'step-hub' },
      { label: 'Step 2: One Room', anchor: 'step-room' },
      { label: 'Step 3: Add Devices', anchor: 'step-devices' },
      { label: 'Step 4: First Automations', anchor: 'step-automations' },
      { label: 'Step 5: Voice and AI Later', anchor: 'step-voice' },
      { label: 'Common Mistakes', anchor: 'mistakes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Start a smart home by picking one hub, setting up one room with a few local-capable devices, automating a routine, then expanding.' },
      { type: 'plain-terms', content: 'The biggest beginner mistake is buying lots of devices at once. Instead, pick a hub, get one room working with a couple of local devices, set up a simple automation, and grow from there. Starting local-first keeps your data private and avoids redoing your setup later.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Pick one hub first — a local-first hub like Home Assistant if privacy matters',
          'Start with a single room, not the whole house',
          'Add a few local-capable devices (Zigbee bulbs, a sensor, a plug)',
          'Create one or two simple automations to learn how it works',
          'Add voice and AI control later, once the basics are reliable',
          'Avoid the common mistake of buying many cloud-only devices up front',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'Step 1: Pick a Hub',
        content:
          '**Choose a hub first, because it determines which devices work together and whether your system runs locally.** For privacy and offline reliability, a local-first hub like Home Assistant is the recommended path.',
        items: [
          'Use Home Assistant for full local control — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).',
          'Run it on a Raspberry Pi for basics, or a mini PC if you want local AI later.',
          'If you only want plug-and-play convenience, a cloud ecosystem is the easier start.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'Step 2: Start With One Room',
        content:
          '**Set up a single room first so you learn the system before scaling.** One room is enough to test devices, automations, and reliability.',
        items: [
          'Pick a room you use daily (living room or bedroom).',
          'Get a couple of devices working there before buying more.',
          'Confirm everything responds locally and reliably.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'Step 3: Add a Few Local-Capable Devices',
        content:
          '**Add a small number of local-capable devices — Zigbee bulbs, a motion sensor, a plug — rather than many cloud-only gadgets.** This keeps your setup private and expandable.',
        items: [
          'Choose Zigbee, Z-Wave, or Matter devices for local control — see [best smart home devices 2026](/smart-home/best-smart-home-devices-2026).',
          'Add a Zigbee coordinator to your hub for Zigbee devices.',
          'Avoid devices that need a cloud account for basic control.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'Step 4: Create Your First Automations',
        content:
          '**Build one or two simple automations to learn the basics — for example, a light that turns on at sunset.** Automations are what make a home "smart" rather than just remotely controlled.',
        items: [
          'Start with time- or sensor-based rules (sunset light, motion-triggered hallway light).',
          'Test each automation and adjust before adding more.',
          'No coding is required for common automations in Home Assistant.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'Step 5: Add Voice and AI Later',
        content:
          '**Add voice and AI control once the basics work, not on day one.** A local voice assistant and an LLM brain are powerful but easier to add to a stable foundation.',
        items: [
          'Add a local voice assistant for hands-free control — see [build a fully local voice assistant](/smart-home/local-voice-assistant-smart-home).',
          'Add a local LLM brain for natural-language control — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'Expand room by room as you get comfortable.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Common Beginner Mistakes',
        content:
          '**The biggest mistakes are buying too much at once, choosing cloud-only devices, and skipping the hub decision.** Avoid these and the rest is straightforward.',
        columns: ['Stage', 'What to buy', 'Relative cost'],
        rows: [
          { 'Stage': 'Hub', 'What to buy': 'Local hub + Zigbee coordinator', 'Relative cost': 'Low–medium' },
          { 'Stage': 'First room', 'What to buy': '2–3 Zigbee bulbs/switches', 'Relative cost': 'Low' },
          { 'Stage': 'Sensors', 'What to buy': '1–2 motion/door sensors', 'Relative cost': 'Low' },
          { 'Stage': 'Expand', 'What to buy': 'More local devices as needed', 'Relative cost': 'Scales with you' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'What should I buy first for a smart home?', a: 'Buy a hub first, ideally a local-first one like Home Assistant, plus a Zigbee coordinator and a couple of Zigbee bulbs or a sensor. The hub determines what works together, so it should come before individual devices.' },
          { q: 'Is it expensive to start a smart home?', a: 'No, if you start small. A local hub and a few Zigbee devices in one room is inexpensive, and you expand gradually. Costs rise only if you buy many devices at once or choose premium cloud ecosystems with subscriptions.' },
          { q: 'Do I need to code to set up a smart home?', a: 'No. Common setups and automations in Home Assistant and cloud ecosystems are configured through a graphical interface. Advanced users can use YAML for complex automations, but it is optional for getting started.' },
          { q: 'Cloud or local for beginners?', a: 'Cloud ecosystems are easier to start with, but a local-first hub keeps your data private and works offline. If privacy matters to you, starting local-first avoids a harder migration later, and it is still beginner-friendly.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — set up the local hub',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the full local-first picture',
          '[Best Smart Home Devices 2026](/smart-home/best-smart-home-devices-2026) — what to buy by category',
          '[What Is a Smart Home?](/smart-home/what-is-a-smart-home) — the basics first',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home for Beginners: Where to Start in 2026',
      description: 'Start a smart home the right way: pick a hub, begin with one room, add local-capable devices, automate, then expand. A practical 2026 beginner\'s path.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home setup' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'What should I buy first for a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'A hub first, ideally a local-first one like Home Assistant, plus a Zigbee coordinator and a couple of Zigbee bulbs or a sensor. The hub determines what works together.' } },
        { '@type': 'Question', name: 'Is it expensive to start a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No, if you start small. A local hub and a few Zigbee devices in one room is inexpensive, and you expand gradually.' } },
        { '@type': 'Question', name: 'Do I need to code to set up a smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No. Common setups and automations are configured through a graphical interface. YAML is optional for advanced automations.' } },
        { '@type': 'Question', name: 'Cloud or local for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud is easier to start, but a local-first hub keeps data private and works offline. If privacy matters, starting local-first avoids a harder migration later.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-ar.png',
    title: 'المنزل الذكي للمبتدئين: من أين تبدأ في ⁨2026⁩',
    seoTitle: 'دليل المنزل الذكي للمبتدئين ⁨2026⁩: من أين تبدأ أولًا',
    intro:
      'الطريقة الموثوقة لبدء منزل ذكي في 2026 هي اختيار مركز واحد، وإعداد غرفة واحدة، وإضافة عدد قليل من الأجهزة ذات القدرة المحلية، وأتمتة بضع روتينات قبل التوسع. يقدم هذا الدليل للمبتدئين مسارًا خطوة بخطوة، ويوصي بنهج محلي أولًا للخصوصية، ويُشير إلى الأخطاء التي تؤدي إلى درج مليء بأجهزة غير متوافقة.',
    metaDescription:
      '5 خطوات لبدء منزل ذكي في 2026: اختر مركزًا، ابدأ بغرفة، أضِف أجهزة Zigbee محلية، أتمِت روتينًا ثم وسِّع. مسار عملي يتجنب أخطاء المبتدئين.',
    twitterDescription:
      'جديد على المنازل الذكية؟ ابدأ بمركز واحد وغرفة واحدة، أضف أجهزة ذات قدرة محلية، أتمت بضع روتينات ثم وسّع. مسار المبتدئين لعام 2026.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'أول بانيي المنازل الذكية',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'كيف تبدأ منزل ذكي',
      'المنزل الذكي للمبتدئين',
      'دليل بدء المنزل الذكي',
      'إعداد المنزل الذكي لأول مرة',
      'مبتدئ المنزل الذكي 2026',
    ],
    leadAnswerBlock:
      '**ابدأ باختيار مركز واحد، وإعداد غرفة واحدة، وإضافة عدد قليل من الأجهزة ذات القدرة المحلية، وأتمتة بضع روتينات — ثم وسّع بمجرد أن يعمل كل شيء.** اختيار مركز محلي أولًا مثل Home Assistant مبكرًا يتجنب ترحيلًا أصعب لاحقًا إذا كانت الخصوصية تهمك.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أبدأ منزلًا ذكيًا كمبتدئ؟',
        answer:
          'اختر مركزًا، وابدأ بغرفة واحدة، وأضف عدة أجهزة ذات قدرة محلية (مصابيح وحساسًا وقابس)، وأعدّ أتمتة أو اثنتين. اجعل ذلك يعمل قبل التوسع. اختيار مركز محلي أولًا مثل Home Assistant من البداية يُبقي بياناتك خاصة ويتجنب إعادة كل شيء من جديد لاحقًا.',
        bullets: [
          'الخطوة 1: اختر مركزًا (محلي أولًا إذا كانت الخصوصية تهم)',
          'الخطوة 2: ابدأ بغرفة واحدة',
          'الخطوة 3: أضف عدة أجهزة ذات قدرة محلية',
          'الخطوة 4: أنشئ أتمتة أو اثنتين',
          'الخطوة 5: أضف الصوت/الذكاء الاصطناعي لاحقًا، ثم وسّع',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'الخطوة 1: اختر مركزًا', anchor: 'step-hub' },
      { label: 'الخطوة 2: غرفة واحدة', anchor: 'step-room' },
      { label: 'الخطوة 3: أضف الأجهزة', anchor: 'step-devices' },
      { label: 'الخطوة 4: أولى الأتمتات', anchor: 'step-automations' },
      { label: 'الخطوة 5: الصوت والذكاء الاصطناعي لاحقًا', anchor: 'step-voice' },
      { label: 'الأخطاء الشائعة', anchor: 'mistakes' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ابدأ منزلًا ذكيًا باختيار مركز، وإعداد غرفة ببضعة أجهزة محلية، وأتمتة روتين، ثم التوسع.' },
      { type: 'plain-terms', content: 'أكبر خطأ للمبتدئ هو شراء الكثير من الأجهزة دفعة واحدة. بدلًا من ذلك، اختر مركزًا، وجهّز غرفة ببضعة أجهزة محلية، وأعدّ أتمتة بسيطة، ثم انمُ من هناك. البدء محليًا أولًا يُبقي بياناتك خاصة ويتجنب إعادة الإعداد لاحقًا.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'اختر مركزًا أولًا — مركز محلي أولًا مثل Home Assistant إذا كانت الخصوصية تهم',
          'ابدأ بغرفة واحدة، وليس المنزل بأكمله',
          'أضف عدة أجهزة ذات قدرة محلية (مصابيح Zigbee وحساسًا وقابسًا)',
          'أنشئ أتمتة أو اثنتين بسيطتين لتتعلم كيف يعمل النظام',
          'أضف الصوت والذكاء الاصطناعي لاحقًا، بمجرد أن تصبح الأساسيات موثوقة',
          'تجنب الخطأ الشائع بشراء الكثير من الأجهزة السحابية فقط مسبقًا',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'الخطوة 1: اختر مركزًا',
        content:
          '**اختر مركزًا أولًا، لأنه يحدد الأجهزة التي تعمل معًا وما إذا كان نظامك يعمل محليًا.** للخصوصية والموثوقية بدون اتصال، يُعدّ المركز المحلي أولًا مثل Home Assistant المسار الموصى به.',
        items: [
          'استخدم Home Assistant للتحكم المحلي الكامل — راجع [Home Assistant: دليل البدء](/ar/smart-home/home-assistant-getting-started).',
          'شغّله على Raspberry Pi للأساسيات، أو على mini PC إذا أردت ذكاءً اصطناعيًا محليًا لاحقًا.',
          'إذا أردت مجرد سهولة التوصيل والتشغيل، فالمنظومة السحابية هي البداية الأسهل.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'الخطوة 2: ابدأ بغرفة واحدة',
        content:
          '**أعدّ غرفة واحدة أولًا لتتعلم النظام قبل التوسع.** غرفة واحدة كافية لاختبار الأجهزة والأتمتات والموثوقية.',
        items: [
          'اختر غرفة تستخدمها يوميًا (غرفة المعيشة أو غرفة النوم).',
          'جهّز بضعة أجهزة هناك قبل شراء المزيد.',
          'تأكد من أن كل شيء يستجيب محليًا وبشكل موثوق.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'الخطوة 3: أضف عدة أجهزة ذات قدرة محلية',
        content:
          '**أضف عددًا صغيرًا من الأجهزة ذات القدرة المحلية — مصابيح Zigbee وحساس حركة وقابس — بدلًا من كثير من الأجهزة السحابية فقط.** هذا يُبقي إعدادك خاصًا وقابلًا للتوسع.',
        items: [
          'اختر أجهزة Zigbee أو Z-Wave أو Matter للتحكم المحلي — راجع [أفضل أجهزة المنزل الذكي 2026](/ar/smart-home/best-smart-home-devices-2026).',
          'أضف منسق Zigbee إلى مركزك للأجهزة العاملة بـ Zigbee.',
          'تجنب الأجهزة التي تحتاج حسابًا سحابيًا للتحكم الأساسي.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'الخطوة 4: أنشئ أولى الأتمتات',
        content:
          '**ابنِ أتمتة أو اثنتين بسيطتين لتتعلم الأساسيات — مثلًا، مصباح يضيء عند الغروب.** الأتمتات هي ما يجعل المنزل "ذكيًا" وليس مجرد متحكَّم به عن بُعد.',
        items: [
          'ابدأ بقواعد زمنية أو مبنية على حساسات (إضاءة عند الغروب، ضوء ممر مُشغَّل بالحركة).',
          'اختبر كل أتمتة وعدّلها قبل إضافة المزيد.',
          'لا يلزم برمجة للأتمتات الشائعة في Home Assistant.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'الخطوة 5: أضف الصوت والذكاء الاصطناعي لاحقًا',
        content:
          '**أضف التحكم الصوتي وبالذكاء الاصطناعي بعد أن تعمل الأساسيات، ليس في اليوم الأول.** المساعد الصوتي المحلي وعقل نموذج اللغة قويان لكنهما أسهل إضافةً على أساس مستقر.',
        items: [
          'أضف مساعدًا صوتيًا محليًا للتحكم اليدوي الحر — راجع [بناء مساعد صوتي محلي بالكامل](/ar/smart-home/local-voice-assistant-smart-home).',
          'أضف عقل نموذج لغوي محلي للتحكم باللغة الطبيعية — راجع [تشغيل منزلك الذكي على نموذج لغوي محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
          'وسّع غرفةً غرفةً مع اكتسابك الثقة.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'الأخطاء الشائعة للمبتدئين',
        content:
          '**أكبر الأخطاء هي الشراء الزائد دفعة واحدة، واختيار أجهزة سحابية فقط، وتجاهل قرار المركز.** تجنّب هذه الأخطاء والباقي سهل.',
        columns: ['المرحلة', 'ما تشتريه', 'التكلفة النسبية'],
        rows: [
          { 'المرحلة': 'المركز', 'ما تشتريه': 'مركز محلي + منسق Zigbee', 'التكلفة النسبية': 'منخفضة–متوسطة' },
          { 'المرحلة': 'أولى الغرف', 'ما تشتريه': '2–3 مصابيح/مفاتيح Zigbee', 'التكلفة النسبية': 'منخفضة' },
          { 'المرحلة': 'الحساسات', 'ما تشتريه': '1–2 حساس حركة/باب', 'التكلفة النسبية': 'منخفضة' },
          { 'المرحلة': 'التوسع', 'ما تشتريه': 'المزيد من الأجهزة المحلية حسب الحاجة', 'التكلفة النسبية': 'تتوسع معك' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما الذي يجب أن أشتريه أولًا للمنزل الذكي؟', a: 'اشترِ مركزًا أولًا، ويُفضَّل أن يكون محليًا أولًا مثل Home Assistant، إضافةً إلى منسق Zigbee وبضعة مصابيح أو حساس Zigbee. المركز يحدد ما يعمل معًا، لذا يجب أن يأتي قبل الأجهزة الفردية.' },
          { q: 'هل بدء منزل ذكي مكلف؟', a: 'لا، إذا بدأت بصغير. مركز محلي وبضعة أجهزة Zigbee في غرفة واحدة غير مكلف، وتتوسع تدريجيًا. ترتفع التكاليف فقط إذا اشتريت أجهزة كثيرة دفعة واحدة أو اخترت منظومات سحابية متميزة بالاشتراكات.' },
          { q: 'هل أحتاج إلى برمجة لإعداد منزل ذكي؟', a: 'لا. تُهيَّأ الإعدادات والأتمتات الشائعة في Home Assistant والمنظومات السحابية عبر واجهة رسومية. يمكن للمستخدمين المتقدمين استخدام YAML للأتمتات المعقدة، لكنه اختياري للبدء.' },
          { q: 'سحابة أم محلي للمبتدئين؟', a: 'المنظومات السحابية أسهل للبدء، لكن المركز المحلي أولًا يُبقي بياناتك خاصة ويعمل بدون اتصال. إذا كانت الخصوصية تهمك، فإن البدء محليًا أولًا يتجنب ترحيلًا أصعب لاحقًا، ولا يزال مناسبًا للمبتدئين.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Home Assistant: دليل البدء](/ar/smart-home/home-assistant-getting-started) — إعداد المركز المحلي',
          '[الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — الصورة الكاملة للمحلي أولًا',
          '[أفضل أجهزة المنزل الذكي 2026](/ar/smart-home/best-smart-home-devices-2026) — ما تشتريه حسب الفئة',
          '[ما هو المنزل الذكي؟](/ar/smart-home/what-is-a-smart-home) — الأساسيات أولًا',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'المنزل الذكي للمبتدئين: من أين تبدأ في 2026',
      description: 'ابدأ المنزل الذكي بالطريقة الصحيحة: اختر مركزًا، وابدأ بغرفة واحدة، أضف أجهزة محلية، أتمت الروتين ثم وسّع. مسار عملي للمبتدئين في 2026.',
      url: 'https://www.promptquorum.com/ar/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'إعداد المنزل الذكي' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'ما الذي يجب أن أشتريه أولًا للمنزل الذكي؟', acceptedAnswer: { '@type': 'Answer', text: 'مركز أولًا، ويُفضَّل محليًا أولًا مثل Home Assistant، إضافةً إلى منسق Zigbee وبضعة مصابيح أو حساس. المركز يحدد ما يعمل معًا.' } },
        { '@type': 'Question', name: 'هل بدء منزل ذكي مكلف؟', acceptedAnswer: { '@type': 'Answer', text: 'لا، إذا بدأت بصغير. مركز محلي وبضعة أجهزة Zigbee في غرفة واحدة غير مكلف، وتتوسع تدريجيًا.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى برمجة لإعداد منزل ذكي؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. تُهيَّأ الإعدادات والأتمتات الشائعة عبر واجهة رسومية. YAML اختياري للأتمتات المتقدمة.' } },
        { '@type': 'Question', name: 'سحابة أم محلي للمبتدئين؟', acceptedAnswer: { '@type': 'Answer', text: 'السحابة أسهل للبدء، لكن المركز المحلي أولًا يُبقي البيانات خاصة ويعمل بدون اتصال. إذا كانت الخصوصية تهم، فالبدء محليًا أولًا يتجنب ترحيلًا أصعب لاحقًا.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-de.png',
    title: 'Smart Home für Einsteiger: Wo Sie 2026 starten',
    seoTitle: 'Smart Home für Einsteiger 2026: Wo und wie anfangen',
    intro:
      'Der zuverlässige Weg, 2026 ein Smart Home zu starten, ist: einen Hub wählen, einen Raum einrichten, ein paar lokal-fähige Geräte hinzufügen und ein paar Routinen automatisieren, bevor Sie erweitern. Dieser Einsteiger-Leitfaden gibt einen Schritt-für-Schritt-Weg, empfiehlt für den Datenschutz einen Local-First-Ansatz und benennt die Fehler, die zu einer Schublade voller inkompatibler Geräte führen.',
    metaDescription:
      'Smart Home richtig starten 2026: Hub wählen, einen Raum einrichten, lokal-fähige Geräte hinzufügen und automatisieren. Praktischer Einsteiger-Weg.',
    twitterDescription:
      'Neu im Smart Home? Beginnen Sie mit einem Hub und einem Raum, fügen Sie lokal-fähige Geräte hinzu, automatisieren Sie ein paar Routinen, dann erweitern. Der 2026-Einsteigerweg.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Erstmalige Smart-Home-Aufbauer',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'smart home starten',
      'smart home für einsteiger',
      'smart home starter leitfaden',
      'erstes smart home einrichten',
      'einsteiger smart home 2026',
    ],
    leadAnswerBlock:
      '**Beginnen Sie damit, einen Hub zu wählen, einen Raum einzurichten, ein paar lokal-fähige Geräte hinzuzufügen und ein paar Routinen zu automatisieren – und erweitern Sie dann, wenn es funktioniert.** Einen Local-First-Hub wie Home Assistant früh zu wählen vermeidet eine spätere, aufwendigere Migration, falls Datenschutz für Sie zählt.',
    quickAnswerTop: {
      de: {
        question: 'Wie starte ich als Einsteiger ein Smart Home?',
        answer:
          'Wählen Sie einen Hub, beginnen Sie mit einem einzigen Raum, fügen Sie ein paar lokal-fähige Geräte hinzu (Leuchtmittel, einen Sensor, eine Steckdose) und richten Sie ein oder zwei Automatisierungen ein. Bringen Sie das zum Laufen, bevor Sie erweitern. Einen Local-First-Hub wie Home Assistant von Anfang an zu wählen hält Ihre Daten privat und erspart Ihnen, später alles neu zu machen.',
        bullets: [
          'Schritt 1: einen Hub wählen (Local-First, wenn Datenschutz zählt)',
          'Schritt 2: mit einem Raum beginnen',
          'Schritt 3: ein paar lokal-fähige Geräte hinzufügen',
          'Schritt 4: ein oder zwei Automatisierungen erstellen',
          'Schritt 5: Sprache/KI später hinzufügen, dann erweitern',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Schritt 1: Einen Hub wählen', anchor: 'step-hub' },
      { label: 'Schritt 2: Ein Raum', anchor: 'step-room' },
      { label: 'Schritt 3: Geräte hinzufügen', anchor: 'step-devices' },
      { label: 'Schritt 4: Erste Automatisierungen', anchor: 'step-automations' },
      { label: 'Schritt 5: Sprache und KI später', anchor: 'step-voice' },
      { label: 'Häufige Fehler', anchor: 'mistakes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Starten Sie ein Smart Home, indem Sie einen Hub wählen, einen Raum mit ein paar lokal-fähigen Geräten einrichten, eine Routine automatisieren und dann erweitern.' },
      { type: 'plain-terms', content: 'Der größte Einsteigerfehler ist, viele Geräte auf einmal zu kaufen. Wählen Sie stattdessen einen Hub, bringen Sie einen Raum mit ein paar lokalen Geräten zum Laufen, richten Sie eine einfache Automatisierung ein und wachsen Sie von dort. Local-First zu starten hält Ihre Daten privat und erspart Ihnen, Ihr Setup später neu zu machen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Wählen Sie zuerst einen Hub – einen Local-First-Hub wie Home Assistant, wenn Datenschutz zählt',
          'Beginnen Sie mit einem einzigen Raum, nicht dem ganzen Haus',
          'Fügen Sie ein paar lokal-fähige Geräte hinzu (Zigbee-Leuchtmittel, einen Sensor, eine Steckdose)',
          'Erstellen Sie ein oder zwei einfache Automatisierungen, um zu lernen, wie es funktioniert',
          'Fügen Sie Sprache und KI später hinzu, sobald die Grundlagen zuverlässig sind',
          'Vermeiden Sie den häufigen Fehler, im Voraus viele nur-Cloud-Geräte zu kaufen',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'Schritt 1: Einen Hub wählen',
        content:
          '**Wählen Sie zuerst einen Hub, denn er bestimmt, welche Geräte zusammenarbeiten und ob Ihr System lokal läuft.** Für Datenschutz und Offline-Zuverlässigkeit ist ein Local-First-Hub wie Home Assistant der empfohlene Weg.',
        items: [
          'Nutzen Sie Home Assistant für volle lokale Steuerung – siehe [Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Betreiben Sie ihn für die Grundlagen auf einem Raspberry Pi oder auf einem Mini-PC, wenn Sie später lokale KI wollen.',
          'Wenn Sie nur Plug-and-Play-Komfort wollen, ist ein Cloud-Ökosystem der einfachere Start.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'Schritt 2: Mit einem Raum beginnen',
        content:
          '**Richten Sie zuerst einen einzigen Raum ein, damit Sie das System verstehen, bevor Sie skalieren.** Ein Raum genügt, um Geräte, Automatisierungen und Zuverlässigkeit zu testen.',
        items: [
          'Wählen Sie einen Raum, den Sie täglich nutzen (Wohnzimmer oder Schlafzimmer).',
          'Bringen Sie ein paar Geräte dort zum Laufen, bevor Sie mehr kaufen.',
          'Bestätigen Sie, dass alles lokal und zuverlässig reagiert.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'Schritt 3: Ein paar lokal-fähige Geräte hinzufügen',
        content:
          '**Fügen Sie eine kleine Anzahl lokal-fähiger Geräte hinzu – Zigbee-Leuchtmittel, einen Bewegungssensor, eine Steckdose – statt vieler nur-Cloud-Geräte.** Das hält Ihr Setup privat und erweiterbar.',
        items: [
          'Wählen Sie Zigbee-, Z-Wave- oder Matter-Geräte für lokale Steuerung – siehe [beste Smart-Home-Geräte 2026](/de/smart-home/best-smart-home-devices-2026).',
          'Fügen Sie Ihrem Hub einen Zigbee-Koordinator für Zigbee-Geräte hinzu.',
          'Vermeiden Sie Geräte, die für die Grundsteuerung ein Cloud-Konto brauchen.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'Schritt 4: Ihre ersten Automatisierungen erstellen',
        content:
          '**Bauen Sie ein oder zwei einfache Automatisierungen, um die Grundlagen zu lernen – etwa ein Licht, das bei Sonnenuntergang angeht.** Automatisierungen machen ein Zuhause „smart" statt nur ferngesteuert.',
        items: [
          'Beginnen Sie mit zeit- oder sensorbasierten Regeln (Licht bei Sonnenuntergang, bewegungsausgelöstes Flurlicht).',
          'Testen Sie jede Automatisierung und passen Sie sie an, bevor Sie mehr hinzufügen.',
          'Für übliche Automatisierungen in Home Assistant ist kein Programmieren nötig.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'Schritt 5: Sprache und KI später hinzufügen',
        content:
          '**Fügen Sie Sprache und KI-Steuerung hinzu, sobald die Grundlagen funktionieren, nicht am ersten Tag.** Ein lokaler Sprachassistent und ein LLM-Gehirn sind leistungsfähig, lassen sich aber leichter auf eine stabile Basis aufsetzen.',
        items: [
          'Fügen Sie einen lokalen Sprachassistenten für freihändige Steuerung hinzu – siehe [einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home).',
          'Fügen Sie ein lokales LLM-Gehirn für natürlichsprachliche Steuerung hinzu – siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
          'Erweitern Sie Raum für Raum, sobald Sie sich sicher fühlen.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Häufige Einsteigerfehler',
        content:
          '**Die größten Fehler sind, zu viel auf einmal zu kaufen, nur-Cloud-Geräte zu wählen und die Hub-Entscheidung zu überspringen.** Vermeiden Sie diese, und der Rest ist unkompliziert.',
        columns: ['Phase', 'Was kaufen', 'Relative Kosten'],
        rows: [
          { 'Phase': 'Hub', 'Was kaufen': 'Lokaler Hub + Zigbee-Koordinator', 'Relative Kosten': 'Niedrig–mittel' },
          { 'Phase': 'Erster Raum', 'Was kaufen': '2–3 Zigbee-Leuchtmittel/-Schalter', 'Relative Kosten': 'Niedrig' },
          { 'Phase': 'Sensoren', 'Was kaufen': '1–2 Bewegungs-/Türsensoren', 'Relative Kosten': 'Niedrig' },
          { 'Phase': 'Erweitern', 'Was kaufen': 'Weitere lokale Geräte nach Bedarf', 'Relative Kosten': 'Wächst mit Ihnen' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was sollte ich zuerst für ein Smart Home kaufen?', a: 'Kaufen Sie zuerst einen Hub, idealerweise einen Local-First-Hub wie Home Assistant, plus einen Zigbee-Koordinator und ein paar Zigbee-Leuchtmittel oder einen Sensor. Der Hub bestimmt, was zusammenarbeitet, daher sollte er vor einzelnen Geräten kommen.' },
          { q: 'Ist es teuer, ein Smart Home zu starten?', a: 'Nein, wenn Sie klein anfangen. Ein lokaler Hub und ein paar Zigbee-Geräte in einem Raum sind günstig, und Sie erweitern schrittweise. Kosten steigen nur, wenn Sie viele Geräte auf einmal kaufen oder Premium-Cloud-Ökosysteme mit Abonnements wählen.' },
          { q: 'Muss ich programmieren, um ein Smart Home einzurichten?', a: 'Nein. Übliche Setups und Automatisierungen in Home Assistant und Cloud-Ökosystemen werden über eine grafische Oberfläche konfiguriert. Fortgeschrittene Nutzer können YAML für komplexe Automatisierungen verwenden, doch für den Start ist es optional.' },
          { q: 'Cloud oder lokal für Einsteiger?', a: 'Cloud-Ökosysteme sind einfacher zu starten, aber ein Local-First-Hub hält Ihre Daten privat und funktioniert offline. Wenn Datenschutz für Sie zählt, vermeidet ein Local-First-Start eine spätere, aufwendigere Migration – und er ist trotzdem einsteigerfreundlich.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – den lokalen Hub einrichten',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – das vollständige Local-First-Bild',
          '[Beste Smart-Home-Geräte 2026](/de/smart-home/best-smart-home-devices-2026) – was man nach Kategorie kauft',
          '[Was ist ein Smart Home?](/de/smart-home/what-is-a-smart-home) – zuerst die Grundlagen',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home für Einsteiger: Wo Sie 2026 starten',
      description: 'Smart Home richtig starten 2026: Hub wählen, einen Raum einrichten, lokal-fähige Geräte hinzufügen und automatisieren. Praktischer Einsteiger-Weg.',
      url: 'https://www.promptquorum.com/de/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart-Home-Einrichtung' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was sollte ich zuerst für ein Smart Home kaufen?', acceptedAnswer: { '@type': 'Answer', text: 'Zuerst einen Hub, idealerweise einen Local-First-Hub wie Home Assistant, plus einen Zigbee-Koordinator und ein paar Zigbee-Leuchtmittel oder einen Sensor. Der Hub bestimmt, was zusammenarbeitet.' } },
        { '@type': 'Question', name: 'Ist es teuer, ein Smart Home zu starten?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, wenn Sie klein anfangen. Ein lokaler Hub und ein paar Zigbee-Geräte in einem Raum sind günstig, und Sie erweitern schrittweise.' } },
        { '@type': 'Question', name: 'Muss ich programmieren, um ein Smart Home einzurichten?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Übliche Setups und Automatisierungen werden über eine grafische Oberfläche konfiguriert. YAML ist für fortgeschrittene Automatisierungen optional.' } },
        { '@type': 'Question', name: 'Cloud oder lokal für Einsteiger?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud ist einfacher zu starten, aber ein Local-First-Hub hält Daten privat und funktioniert offline. Wenn Datenschutz zählt, vermeidet ein Local-First-Start eine spätere Migration.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-es.png',
    title: 'Smart Home para Principiantes: Por Dónde Empezar en 2026',
    seoTitle: 'Smart Home para Principiantes 2026: Por Dónde Empezar',
    intro:
      'La forma fiable de empezar un smart home en 2026 es: elegir un hub, montar una habitación, añadir unos pocos dispositivos con capacidad local y automatizar un par de rutinas antes de ampliar. Esta guía para principiantes da un camino paso a paso, recomienda un enfoque local-first por la privacidad y señala los errores que llevan a un cajón de dispositivos incompatibles.',
    metaDescription:
      'Empieza un smart home en 2026: elige hub, monta una habitación, añade dispositivos locales, automatiza y amplía. Guía práctica para principiantes.',
    twitterDescription:
      '¿Nuevo en smart home? Empieza con un hub y una habitación, añade dispositivos con capacidad local, automatiza un par de rutinas y luego amplía. El camino 2026 para principiantes.',
    readTime: '8 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Personas que montan su primer smart home',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'cómo empezar smart home',
      'smart home para principiantes',
      'guía inicio smart home',
      'primera configuración smart home',
      'smart home principiante 2026',
    ],
    leadAnswerBlock:
      '**Empieza eligiendo un hub, montando una habitación, añadiendo unos pocos dispositivos con capacidad local y automatizando un par de rutinas; luego amplía cuando funcione.** Elegir pronto un hub local-first como Home Assistant evita una migración más difícil después si la privacidad te importa.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo empiezo un smart home como principiante?',
        answer:
          'Elige un hub, empieza con una sola habitación, añade unos pocos dispositivos con capacidad local (bombillas, un sensor, un enchufe) y configura una o dos automatizaciones. Haz que eso funcione antes de ampliar. Elegir un hub local-first como Home Assistant desde el principio mantiene tus datos privados y evita rehacerlo todo después.',
        bullets: [
          'Paso 1: elige un hub (local-first si la privacidad importa)',
          'Paso 2: empieza con una habitación',
          'Paso 3: añade unos pocos dispositivos con capacidad local',
          'Paso 4: crea una o dos automatizaciones',
          'Paso 5: añade voz/IA después, luego amplía',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Paso 1: Elige un hub', anchor: 'step-hub' },
      { label: 'Paso 2: Una habitación', anchor: 'step-room' },
      { label: 'Paso 3: Añade dispositivos', anchor: 'step-devices' },
      { label: 'Paso 4: Primeras automatizaciones', anchor: 'step-automations' },
      { label: 'Paso 5: Voz e IA después', anchor: 'step-voice' },
      { label: 'Errores comunes', anchor: 'mistakes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Empieza un smart home eligiendo un hub, montando una habitación con unos pocos dispositivos con capacidad local, automatizando una rutina y luego ampliando.' },
      { type: 'plain-terms', content: 'El mayor error de principiante es comprar muchos dispositivos a la vez. En su lugar, elige un hub, haz funcionar una habitación con un par de dispositivos locales, configura una automatización simple y crece desde ahí. Empezar local-first mantiene tus datos privados y evita rehacer tu configuración después.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Elige primero un hub: un hub local-first como Home Assistant si la privacidad importa',
          'Empieza con una sola habitación, no con toda la casa',
          'Añade unos pocos dispositivos con capacidad local (bombillas Zigbee, un sensor, un enchufe)',
          'Crea una o dos automatizaciones simples para aprender cómo funciona',
          'Añade voz e IA después, una vez que lo básico sea fiable',
          'Evita el error común de comprar muchos dispositivos solo-nube por adelantado',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'Paso 1: Elige un hub',
        content:
          '**Elige primero un hub, porque determina qué dispositivos funcionan juntos y si tu sistema corre localmente.** Por privacidad y fiabilidad sin conexión, un hub local-first como Home Assistant es el camino recomendado.',
        items: [
          'Usa Home Assistant para control local total — consulta [Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Ejecútalo en una Raspberry Pi para lo básico, o en un mini PC si quieres IA local más adelante.',
          'Si solo quieres comodidad plug-and-play, un ecosistema en la nube es el arranque más fácil.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'Paso 2: Empieza con una habitación',
        content:
          '**Monta primero una sola habitación para aprender el sistema antes de escalar.** Una habitación basta para probar dispositivos, automatizaciones y fiabilidad.',
        items: [
          'Elige una habitación que uses a diario (salón o dormitorio).',
          'Haz funcionar un par de dispositivos ahí antes de comprar más.',
          'Confirma que todo responde local y fiablemente.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'Paso 3: Añade unos pocos dispositivos con capacidad local',
        content:
          '**Añade un número pequeño de dispositivos con capacidad local —bombillas Zigbee, un sensor de movimiento, un enchufe— en vez de muchos aparatos solo-nube.** Esto mantiene tu configuración privada y ampliable.',
        items: [
          'Elige dispositivos Zigbee, Z-Wave o Matter para control local — consulta [mejores dispositivos de smart home 2026](/es/smart-home/best-smart-home-devices-2026).',
          'Añade un coordinador Zigbee a tu hub para los dispositivos Zigbee.',
          'Evita dispositivos que necesiten una cuenta en la nube para el control básico.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'Paso 4: Crea tus primeras automatizaciones',
        content:
          '**Construye una o dos automatizaciones simples para aprender lo básico —por ejemplo, una luz que se enciende al atardecer.** Las automatizaciones son lo que hace una casa "inteligente" en lugar de solo controlada en remoto.',
        items: [
          'Empieza con reglas por tiempo o sensor (luz al atardecer, luz de pasillo por movimiento).',
          'Prueba cada automatización y ajústala antes de añadir más.',
          'No hace falta programar para las automatizaciones comunes en Home Assistant.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'Paso 5: Añade voz e IA después',
        content:
          '**Añade voz y control por IA una vez que lo básico funcione, no el primer día.** Un asistente de voz local y un cerebro LLM son potentes pero más fáciles de añadir sobre una base estable.',
        items: [
          'Añade un asistente de voz local para control manos libres — consulta [montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home).',
          'Añade un cerebro LLM local para control en lenguaje natural — consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
          'Amplía habitación por habitación a medida que te sientas cómodo.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Errores comunes de principiante',
        content:
          '**Los mayores errores son comprar demasiado a la vez, elegir dispositivos solo-nube y saltarse la decisión del hub.** Evítalos y el resto es sencillo.',
        columns: ['Etapa', 'Qué comprar', 'Coste relativo'],
        rows: [
          { 'Etapa': 'Hub', 'Qué comprar': 'Hub local + coordinador Zigbee', 'Coste relativo': 'Bajo–medio' },
          { 'Etapa': 'Primera habitación', 'Qué comprar': '2–3 bombillas/interruptores Zigbee', 'Coste relativo': 'Bajo' },
          { 'Etapa': 'Sensores', 'Qué comprar': '1–2 sensores de movimiento/puerta', 'Coste relativo': 'Bajo' },
          { 'Etapa': 'Ampliar', 'Qué comprar': 'Más dispositivos locales según necesites', 'Coste relativo': 'Crece contigo' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Qué debería comprar primero para un smart home?', a: 'Compra primero un hub, idealmente uno local-first como Home Assistant, más un coordinador Zigbee y un par de bombillas o un sensor Zigbee. El hub determina qué funciona junto, así que debería ir antes que los dispositivos individuales.' },
          { q: '¿Es caro empezar un smart home?', a: 'No, si empiezas en pequeño. Un hub local y unos pocos dispositivos Zigbee en una habitación es barato, y amplías poco a poco. Los costes solo suben si compras muchos dispositivos a la vez o eliges ecosistemas premium en la nube con suscripciones.' },
          { q: '¿Necesito programar para montar un smart home?', a: 'No. Las configuraciones y automatizaciones comunes en Home Assistant y los ecosistemas en la nube se configuran mediante una interfaz gráfica. Los usuarios avanzados pueden usar YAML para automatizaciones complejas, pero es opcional para empezar.' },
          { q: '¿Nube o local para principiantes?', a: 'Los ecosistemas en la nube son más fáciles de empezar, pero un hub local-first mantiene tus datos privados y funciona sin conexión. Si la privacidad te importa, empezar local-first evita una migración más difícil después, y sigue siendo apto para principiantes.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — monta el hub local',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — la imagen local-first completa',
          '[Mejores dispositivos de smart home 2026](/es/smart-home/best-smart-home-devices-2026) — qué comprar por categoría',
          '[¿Qué es un smart home?](/es/smart-home/what-is-a-smart-home) — primero lo básico',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home para Principiantes: Por Dónde Empezar en 2026',
      description: 'Empieza un smart home en 2026: elige hub, monta una habitación, añade dispositivos locales, automatiza y amplía. Guía práctica para principiantes.',
      url: 'https://www.promptquorum.com/es/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Configuración de smart home' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Qué debería comprar primero para un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'Primero un hub, idealmente uno local-first como Home Assistant, más un coordinador Zigbee y un par de bombillas o un sensor Zigbee. El hub determina qué funciona junto.' } },
        { '@type': 'Question', name: '¿Es caro empezar un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No, si empiezas en pequeño. Un hub local y unos pocos dispositivos Zigbee en una habitación es barato, y amplías poco a poco.' } },
        { '@type': 'Question', name: '¿Necesito programar para montar un smart home?', acceptedAnswer: { '@type': 'Answer', text: 'No. Las configuraciones y automatizaciones comunes se configuran mediante una interfaz gráfica. YAML es opcional para automatizaciones avanzadas.' } },
        { '@type': 'Question', name: '¿Nube o local para principiantes?', acceptedAnswer: { '@type': 'Answer', text: 'La nube es más fácil de empezar, pero un hub local-first mantiene tus datos privados y funciona sin conexión. Si la privacidad importa, empezar local-first evita una migración más difícil después.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-ko.png',
    title: '스마트홈 입문: 2026년 시작 방법 완전 가이드',
    seoTitle: '스마트홈 입문 2026: 어디서부터 시작할까',
    intro:
      '2026년 스마트홈을 시작하는 안정적인 방법은 허브를 선택하고, 한 방을 구성하고, 로컬 지원 기기 몇 가지를 추가하고, 확장하기 전에 루틴 자동화 한두 개를 설정하는 것입니다. 이 입문 가이드는 단계별 경로를 제공하고, 프라이버시를 위한 로컬 우선 접근 방식을 추천하며, 호환되지 않는 기기 서랍으로 이어지는 실수를 짚어줍니다.',
    metaDescription:
      '스마트홈 2026 시작하기: 허브 선택, 한 방 구성, 로컬 기기 추가, 자동화 설정, 확장. 입문자를 위한 실용 가이드.',
    twitterDescription:
      '스마트홈 처음 시작합니까? 허브와 한 방으로 시작하고, 로컬 지원 기기를 추가하고, 루틴 자동화 몇 가지를 설정한 뒤 확장하십시오. 2026 입문 경로.',
    readTime: '8분 분량',
    educationalLevel: 'Beginner',
    audience: '첫 번째 스마트홈을 구성하는 사용자',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      '스마트홈 시작하는 방법',
      '스마트홈 입문',
      '스마트홈 시작 가이드',
      '첫 번째 스마트홈 설정',
      '스마트홈 초보자 2026',
    ],
    leadAnswerBlock:
      '**허브를 선택하고, 한 방을 구성하고, 로컬 지원 기기 몇 가지를 추가하고, 루틴 자동화 몇 가지를 설정한 뒤 확장하십시오.** Home Assistant와 같은 로컬 우선 허브를 일찍 선택하면 나중에 더 어려운 마이그레이션을 피할 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: '초보자로서 스마트홈을 어떻게 시작합니까?',
        answer:
          '허브를 선택하고, 한 방만 시작하고, 로컬 지원 기기(전구, 센서, 플러그) 몇 가지를 추가하고, 자동화 한두 개를 설정하십시오. 확장하기 전에 그것이 잘 작동하도록 하십시오. 처음부터 Home Assistant와 같은 로컬 우선 허브를 선택하면 데이터가 프라이빗하게 유지되고 나중에 다시 설정하는 일을 피할 수 있습니다.',
        bullets: [
          '1단계: 허브 선택(프라이버시가 중요하다면 로컬 우선)',
          '2단계: 한 방으로 시작',
          '3단계: 로컬 지원 기기 몇 가지 추가',
          '4단계: 자동화 한두 개 만들기',
          '5단계: 이후 음성/AI 추가, 그 다음 확장',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '1단계: 허브 선택', anchor: 'step-hub' },
      { label: '2단계: 한 방으로 시작', anchor: 'step-room' },
      { label: '3단계: 기기 추가', anchor: 'step-devices' },
      { label: '4단계: 첫 번째 자동화', anchor: 'step-automations' },
      { label: '5단계: 이후 음성·AI', anchor: 'step-voice' },
      { label: '흔한 실수', anchor: 'mistakes' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '허브를 선택하고, 로컬 지원 기기 몇 가지로 한 방을 구성하고, 루틴 자동화 하나를 설정한 뒤 확장하는 것으로 스마트홈을 시작하십시오.' },
      { type: 'plain-terms', content: '초보자의 가장 큰 실수는 한꺼번에 기기를 많이 구매하는 것입니다. 대신 허브를 선택하고, 로컬 기기 한두 개로 한 방을 작동시키고, 간단한 자동화를 설정한 뒤 거기서부터 성장하십시오. 로컬 우선으로 시작하면 데이터가 프라이빗하게 유지되고 나중에 설정을 다시 하지 않아도 됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '허브를 먼저 선택하십시오: 프라이버시가 중요하다면 Home Assistant와 같은 로컬 우선 허브',
          '집 전체가 아닌 한 방으로 시작하십시오',
          '로컬 지원 기기 몇 가지를 추가하십시오(Zigbee 전구, 센서, 플러그)',
          '작동 방식을 익히기 위해 간단한 자동화 한두 개를 만드십시오',
          '기본이 안정적으로 작동하면 이후 음성·AI를 추가하십시오',
          '미리 클라우드 전용 기기를 많이 구매하는 흔한 실수를 피하십시오',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: '1단계: 허브 선택',
        content:
          '**허브를 먼저 선택하십시오. 어떤 기기가 함께 작동하는지와 시스템이 로컬로 실행되는지 여부가 결정되기 때문입니다.** 프라이버시와 오프라인 신뢰성을 위해 Home Assistant와 같은 로컬 우선 허브가 권장 경로입니다.',
        items: [
          '완전한 로컬 제어를 위해 Home Assistant를 사용하십시오 — [Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          '기본 사양에는 Raspberry Pi, 나중에 로컬 AI를 원한다면 미니 PC에서 실행하십시오.',
          '플러그-앤-플레이 편의성만 원한다면 클라우드 에코시스템이 가장 쉬운 출발점입니다.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: '2단계: 한 방으로 시작',
        content:
          '**확장하기 전에 시스템을 익히기 위해 먼저 한 방을 구성하십시오.** 한 방으로도 기기, 자동화, 신뢰성을 테스트하기에 충분합니다.',
        items: [
          '매일 사용하는 방(거실 또는 침실)을 선택하십시오.',
          '더 많이 구매하기 전에 기기 한두 개가 그 방에서 작동하도록 하십시오.',
          '모든 것이 로컬에서 안정적으로 반응하는지 확인하십시오.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: '3단계: 로컬 지원 기기 몇 가지 추가',
        content:
          '**클라우드 전용 기기를 많이 구매하는 대신 로컬 지원 기기(Zigbee 전구, 동작 센서, 플러그) 몇 가지를 추가하십시오.** 이렇게 하면 설정이 프라이빗하고 확장 가능하게 유지됩니다.',
        items: [
          '로컬 제어를 위해 Zigbee, Z-Wave 또는 Matter 기기를 선택하십시오 — [2026 최고의 스마트홈 기기](/ko/smart-home/best-smart-home-devices-2026)를 참조하십시오.',
          'Zigbee 기기를 위해 허브에 Zigbee 코디네이터를 추가하십시오.',
          '기본 제어에 클라우드 계정이 필요한 기기는 피하십시오.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: '4단계: 첫 번째 자동화 만들기',
        content:
          '**기본을 익히기 위해 간단한 자동화 한두 개를 만드십시오(예: 일몰 시 켜지는 조명).** 자동화가 집을 단순히 원격 제어되는 것이 아닌 "스마트"하게 만드는 것입니다.',
        items: [
          '시간 또는 센서 기반 규칙으로 시작하십시오(일몰 시 조명, 동작 감지 시 복도 조명).',
          '더 많이 추가하기 전에 각 자동화를 테스트하고 조정하십시오.',
          'Home Assistant의 일반적인 자동화에는 프로그래밍이 필요하지 않습니다.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: '5단계: 이후 음성·AI 추가',
        content:
          '**첫날이 아니라 기본이 작동한 후에 음성 및 AI 제어를 추가하십시오.** 로컬 음성 어시스턴트와 LLM 두뇌는 강력하지만 안정적인 기반 위에 추가하는 것이 더 쉽습니다.',
        items: [
          '핸즈프리 제어를 위해 로컬 음성 어시스턴트를 추가하십시오 — [완전 로컬 음성 어시스턴트 구축](/ko/smart-home/local-voice-assistant-smart-home)을 참조하십시오.',
          '자연어 제어를 위해 로컬 LLM 두뇌를 추가하십시오 — [로컬 LLM으로 스마트홈 운영](/ko/smart-home/local-llm-smart-home-complete-guide)을 참조하십시오.',
          '편안함을 느낄 때마다 방 단위로 확장하십시오.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: '흔한 초보자 실수',
        content:
          '**가장 큰 실수는 한꺼번에 너무 많이 구매하고, 클라우드 전용 기기를 선택하고, 허브 결정을 건너뛰는 것입니다.** 이를 피하면 나머지는 간단합니다.',
        columns: ['단계', '구매 항목', '상대적 비용'],
        rows: [
          { '단계': '허브', '구매 항목': '로컬 허브 + Zigbee 코디네이터', '상대적 비용': '저~중' },
          { '단계': '첫 번째 방', '구매 항목': 'Zigbee 전구/스위치 2~3개', '상대적 비용': '저' },
          { '단계': '센서', '구매 항목': '동작/도어 센서 1~2개', '상대적 비용': '저' },
          { '단계': '확장', '구매 항목': '필요에 따라 로컬 기기 추가', '상대적 비용': '함께 성장' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '스마트홈을 위해 무엇을 먼저 구매해야 합니까?', a: '먼저 허브를 구매하십시오. 이상적으로는 Home Assistant와 같은 로컬 우선 허브와 Zigbee 코디네이터 그리고 Zigbee 전구나 센서 한두 개입니다. 허브가 무엇이 함께 작동하는지를 결정하므로 개별 기기보다 먼저 선택해야 합니다.' },
          { q: '스마트홈 시작이 비쌉니까?', a: '작게 시작하면 그렇지 않습니다. 로컬 허브와 한 방의 Zigbee 기기 몇 개는 저렴하며 점진적으로 확장할 수 있습니다. 비용은 한꺼번에 많은 기기를 구매하거나 구독이 포함된 프리미엄 클라우드 에코시스템을 선택할 때만 높아집니다.' },
          { q: '스마트홈 구성에 프로그래밍이 필요합니까?', a: '아닙니다. Home Assistant 및 클라우드 에코시스템의 일반적인 설정과 자동화는 그래픽 인터페이스를 통해 구성됩니다. 고급 사용자는 복잡한 자동화에 YAML을 사용할 수 있지만 시작하기 위해서는 선택 사항입니다.' },
          { q: '초보자에게는 클라우드가 낫습니까, 로컬이 낫습니까?', a: '클라우드 에코시스템이 시작하기 더 쉽지만 로컬 우선 허브는 데이터를 프라이빗하게 유지하고 오프라인에서도 작동합니다. 프라이버시가 중요하다면 로컬 우선으로 시작하면 나중에 더 어려운 마이그레이션을 피할 수 있으며 여전히 초보자에게도 적합합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started) — 로컬 허브 구성',
          '[로컬 스마트홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 로컬 우선 완전한 그림',
          '[2026 최고의 스마트홈 기기](/ko/smart-home/best-smart-home-devices-2026) — 카테고리별 구매 가이드',
          '[스마트홈이란?](/ko/smart-home/what-is-a-smart-home) — 기초부터',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트홈 입문: 2026년 시작 방법 완전 가이드',
      description: '스마트홈 2026 시작하기: 허브 선택, 한 방 구성, 로컬 기기 추가, 자동화 설정, 확장. 입문자를 위한 실용 가이드.',
      url: 'https://www.promptquorum.com/ko/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '스마트홈 설정' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '스마트홈을 위해 무엇을 먼저 구매해야 합니까?', acceptedAnswer: { '@type': 'Answer', text: '먼저 허브를 구매하십시오. 이상적으로는 Home Assistant와 같은 로컬 우선 허브, Zigbee 코디네이터, Zigbee 전구나 센서 한두 개입니다. 허브가 무엇이 함께 작동하는지 결정합니다.' } },
        { '@type': 'Question', name: '스마트홈 시작이 비쌉니까?', acceptedAnswer: { '@type': 'Answer', text: '작게 시작하면 그렇지 않습니다. 로컬 허브와 한 방의 Zigbee 기기는 저렴하며 점진적으로 확장할 수 있습니다.' } },
        { '@type': 'Question', name: '스마트홈 구성에 프로그래밍이 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 일반적인 설정과 자동화는 그래픽 인터페이스를 통해 구성됩니다. YAML은 고급 자동화에 선택 사항입니다.' } },
        { '@type': 'Question', name: '초보자에게는 클라우드가 낫습니까, 로컬이 낫습니까?', acceptedAnswer: { '@type': 'Answer', text: '클라우드가 더 쉽지만 로컬 우선 허브는 데이터를 프라이빗하게 유지하고 오프라인에서도 작동합니다. 프라이버시가 중요하다면 로컬 우선으로 시작하면 나중에 마이그레이션을 피할 수 있습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-fr.png',
    title: 'Maison Connectée pour Débutants : Par Où Commencer en 2026',
    seoTitle: 'Maison Connectée Débutants 2026 : Par Où Commencer',
    intro:
      'La façon fiable de démarrer une maison connectée en 2026 est : choisir un hub, configurer une pièce, ajouter quelques appareils à capacité locale et automatiser quelques routines avant d\'étendre. Ce guide débutant donne un parcours pas à pas, recommande une approche local-first pour la confidentialité et signale les erreurs qui mènent à un tiroir d\'appareils incompatibles.',
    metaDescription:
      'Démarrer une maison connectée en 2026 : choisir un hub, une pièce, des appareils locaux, automatiser puis étendre. Parcours pratique pour débutants.',
    twitterDescription:
      'Nouveau dans la maison connectée ? Commencez par un hub et une pièce, ajoutez des appareils à capacité locale, automatisez quelques routines, puis étendez. Le parcours débutant 2026.',
    readTime: '8 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Personnes montant leur première maison connectée',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'comment démarrer maison connectée',
      'maison connectée pour débutants',
      'guide démarrage maison connectée',
      'première configuration maison connectée',
      'débutant maison connectée 2026',
    ],
    leadAnswerBlock:
      '**Commencez par choisir un hub, configurer une pièce, ajouter quelques appareils à capacité locale et automatiser quelques routines — puis étendez une fois que ça fonctionne.** Choisir tôt un hub local-first comme Home Assistant évite une migration plus difficile plus tard si la confidentialité vous importe.',
    quickAnswerTop: {
      fr: {
        question: 'Comment démarrer une maison connectée en tant que débutant ?',
        answer:
          'Choisissez un hub, commencez par une seule pièce, ajoutez quelques appareils à capacité locale (ampoules, un capteur, une prise) et configurez une ou deux automatisations. Faites fonctionner cela avant d\'étendre. Choisir un hub local-first comme Home Assistant dès le départ garde vos données privées et évite de tout refaire plus tard.',
        bullets: [
          'Étape 1 : choisir un hub (local-first si la confidentialité compte)',
          'Étape 2 : commencer par une pièce',
          'Étape 3 : ajouter quelques appareils à capacité locale',
          'Étape 4 : créer une ou deux automatisations',
          'Étape 5 : ajouter voix/IA plus tard, puis étendre',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Étape 1 : Choisir un hub', anchor: 'step-hub' },
      { label: 'Étape 2 : Une pièce', anchor: 'step-room' },
      { label: 'Étape 3 : Ajouter des appareils', anchor: 'step-devices' },
      { label: 'Étape 4 : Premières automatisations', anchor: 'step-automations' },
      { label: 'Étape 5 : Voix et IA plus tard', anchor: 'step-voice' },
      { label: 'Erreurs fréquentes', anchor: 'mistakes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Démarrez une maison connectée en choisissant un hub, en configurant une pièce avec quelques appareils à capacité locale, en automatisant une routine, puis en étendant.' },
      { type: 'plain-terms', content: 'La plus grosse erreur de débutant est d\'acheter beaucoup d\'appareils d\'un coup. Choisissez plutôt un hub, faites fonctionner une pièce avec deux ou trois appareils locaux, configurez une automatisation simple et grandissez à partir de là. Démarrer en local-first garde vos données privées et évite de refaire votre installation plus tard.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Choisissez d\'abord un hub — un hub local-first comme Home Assistant si la confidentialité compte',
          'Commencez par une seule pièce, pas toute la maison',
          'Ajoutez quelques appareils à capacité locale (ampoules Zigbee, un capteur, une prise)',
          'Créez une ou deux automatisations simples pour apprendre comment ça marche',
          'Ajoutez voix et IA plus tard, une fois les bases fiables',
          'Évitez l\'erreur fréquente d\'acheter d\'avance beaucoup d\'appareils tout-cloud',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'Étape 1 : Choisir un hub',
        content:
          '**Choisissez d\'abord un hub, car il détermine quels appareils fonctionnent ensemble et si votre système tourne localement.** Pour la confidentialité et la fiabilité hors ligne, un hub local-first comme Home Assistant est le parcours recommandé.',
        items: [
          'Utilisez Home Assistant pour un contrôle local complet — voir [Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Exécutez-le sur une Raspberry Pi pour les bases, ou sur un mini-PC si vous voulez de l\'IA locale plus tard.',
          'Si vous voulez juste la commodité prête à l\'emploi, un écosystème cloud est le démarrage le plus facile.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'Étape 2 : Commencer par une pièce',
        content:
          '**Configurez d\'abord une seule pièce pour apprendre le système avant de passer à l\'échelle.** Une pièce suffit pour tester appareils, automatisations et fiabilité.',
        items: [
          'Choisissez une pièce que vous utilisez quotidiennement (salon ou chambre).',
          'Faites fonctionner deux ou trois appareils là avant d\'en acheter d\'autres.',
          'Confirmez que tout répond localement et de façon fiable.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'Étape 3 : Ajouter quelques appareils à capacité locale',
        content:
          '**Ajoutez un petit nombre d\'appareils à capacité locale — ampoules Zigbee, un capteur de mouvement, une prise — plutôt que beaucoup d\'appareils tout-cloud.** Cela garde votre installation privée et extensible.',
        items: [
          'Choisissez des appareils Zigbee, Z-Wave ou Matter pour le contrôle local — voir [meilleurs appareils de maison connectée 2026](/fr/smart-home/best-smart-home-devices-2026).',
          'Ajoutez un coordinateur Zigbee à votre hub pour les appareils Zigbee.',
          'Évitez les appareils qui nécessitent un compte cloud pour le contrôle de base.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'Étape 4 : Créer vos premières automatisations',
        content:
          '**Construisez une ou deux automatisations simples pour apprendre les bases — par exemple, une lumière qui s\'allume au coucher du soleil.** Les automatisations sont ce qui rend une maison « connectée » plutôt que simplement télécommandée.',
        items: [
          'Commencez par des règles temporelles ou de capteur (lumière au coucher du soleil, lumière de couloir déclenchée par le mouvement).',
          'Testez chaque automatisation et ajustez-la avant d\'en ajouter d\'autres.',
          'Aucune programmation n\'est requise pour les automatisations courantes dans Home Assistant.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'Étape 5 : Ajouter voix et IA plus tard',
        content:
          '**Ajoutez la voix et le contrôle par IA une fois que les bases fonctionnent, pas dès le premier jour.** Un assistant vocal local et un cerveau LLM sont puissants mais plus faciles à ajouter sur une base stable.',
        items: [
          'Ajoutez un assistant vocal local pour un contrôle mains libres — voir [construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Ajoutez un cerveau LLM local pour un contrôle en langage naturel — voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
          'Étendez pièce par pièce à mesure que vous prenez de l\'assurance.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erreurs fréquentes de débutant',
        content:
          '**Les plus grosses erreurs sont d\'acheter trop d\'un coup, de choisir des appareils tout-cloud et de sauter la décision du hub.** Évitez-les et le reste est simple.',
        columns: ['Étape', 'Quoi acheter', 'Coût relatif'],
        rows: [
          { 'Étape': 'Hub', 'Quoi acheter': 'Hub local + coordinateur Zigbee', 'Coût relatif': 'Faible–moyen' },
          { 'Étape': 'Première pièce', 'Quoi acheter': '2–3 ampoules/interrupteurs Zigbee', 'Coût relatif': 'Faible' },
          { 'Étape': 'Capteurs', 'Quoi acheter': '1–2 capteurs de mouvement/porte', 'Coût relatif': 'Faible' },
          { 'Étape': 'Étendre', 'Quoi acheter': 'D\'autres appareils locaux au besoin', 'Coût relatif': 'Grandit avec vous' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Que devrais-je acheter en premier pour une maison connectée ?', a: 'Achetez d\'abord un hub, idéalement un hub local-first comme Home Assistant, plus un coordinateur Zigbee et deux ou trois ampoules ou un capteur Zigbee. Le hub détermine ce qui fonctionne ensemble, il devrait donc venir avant les appareils individuels.' },
          { q: 'Est-ce cher de démarrer une maison connectée ?', a: 'Non, si vous commencez petit. Un hub local et quelques appareils Zigbee dans une pièce sont peu coûteux, et vous étendez progressivement. Les coûts n\'augmentent que si vous achetez beaucoup d\'appareils d\'un coup ou choisissez des écosystèmes cloud premium avec abonnements.' },
          { q: 'Dois-je programmer pour monter une maison connectée ?', a: 'Non. Les configurations et automatisations courantes dans Home Assistant et les écosystèmes cloud se configurent via une interface graphique. Les utilisateurs avancés peuvent utiliser YAML pour des automatisations complexes, mais c\'est optionnel pour démarrer.' },
          { q: 'Cloud ou local pour les débutants ?', a: 'Les écosystèmes cloud sont plus faciles à démarrer, mais un hub local-first garde vos données privées et fonctionne hors ligne. Si la confidentialité vous importe, démarrer en local-first évite une migration plus difficile plus tard, et reste adapté aux débutants.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — configurer le hub local',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — la vue d\'ensemble local-first',
          '[Meilleurs appareils de maison connectée 2026](/fr/smart-home/best-smart-home-devices-2026) — quoi acheter par catégorie',
          '[Qu\'est-ce qu\'une maison connectée ?](/fr/smart-home/what-is-a-smart-home) — d\'abord les bases',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Maison Connectée pour Débutants : Par Où Commencer en 2026',
      description: 'Démarrer une maison connectée en 2026 : choisir un hub, une pièce, des appareils locaux, automatiser puis étendre. Parcours pratique pour débutants.',
      url: 'https://www.promptquorum.com/fr/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Configuration de maison connectée' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Que devrais-je acheter en premier pour une maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'D\'abord un hub, idéalement un hub local-first comme Home Assistant, plus un coordinateur Zigbee et deux ou trois ampoules ou un capteur Zigbee. Le hub détermine ce qui fonctionne ensemble.' } },
        { '@type': 'Question', name: 'Est-ce cher de démarrer une maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, si vous commencez petit. Un hub local et quelques appareils Zigbee dans une pièce sont peu coûteux, et vous étendez progressivement.' } },
        { '@type': 'Question', name: 'Dois-je programmer pour monter une maison connectée ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Les configurations et automatisations courantes se configurent via une interface graphique. Le YAML est optionnel pour les automatisations avancées.' } },
        { '@type': 'Question', name: 'Cloud ou local pour les débutants ?', acceptedAnswer: { '@type': 'Answer', text: 'Le cloud est plus facile à démarrer, mais un hub local-first garde vos données privées et fonctionne hors ligne. Si la confidentialité compte, démarrer en local-first évite une migration plus difficile.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-ja.png',
    title: 'スマートホーム初心者：2026年 どこから始めるか',
    seoTitle: 'スマートホーム初心者ガイド（2026年版）：ハブ選びから自動化まで実践',
    intro:
      '2026年にスマートホームを始める確実な方法は、ハブを選び、一部屋を整え、ローカル対応機器をいくつか追加し、拡張する前にいくつかのルーティンを自動化することです。本初心者ガイドは手順を示し、プライバシーのためにローカルファーストのアプローチを勧め、非互換機器でいっぱいの引き出しにつながる失敗を指摘します。',
    metaDescription:
      'スマートホームを2026年に正しく始める方法を解説：ハブの選び方、まず一部屋から始める手順、ローカル対応機器の追加方法、自動化ルーティンの設定から段階的な拡張まで実践的に紹介します。',
    twitterDescription:
      'スマートホーム初心者？ ハブと一部屋から始め、ローカル対応機器を追加し、いくつかのルーティンを自動化し、それから拡張。2026年の初心者の道。',
    readTime: '8分で読める',
    educationalLevel: 'Beginner',
    audience: '初めてスマートホームを構築する人',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'スマートホーム 始め方',
      'スマートホーム 初心者',
      'スマートホーム スターターガイド',
      '初めての スマートホーム 設定',
      '初心者 スマートホーム 2026',
    ],
    leadAnswerBlock:
      '**ハブを選び、一部屋を整え、ローカル対応機器をいくつか追加し、いくつかのルーティンを自動化することから始め——うまくいったら拡張しましょう。** プライバシーが重要なら、Home Assistant のようなローカルファーストのハブを早めに選ぶと、後の面倒な移行を避けられます。',
    quickAnswerTop: {
      ja: {
        question: '初心者はどうやってスマートホームを始めればいいですか？',
        answer:
          'ハブを選び、一部屋から始め、ローカル対応機器をいくつか（電球、センサー、プラグ）追加し、1〜2 個の自動化を設定します。それを動かしてから拡張しましょう。Home Assistant のようなローカルファーストのハブを最初から選べば、データをプライベートに保ち、後ですべてをやり直さずに済みます。',
        bullets: [
          'ステップ1：ハブを選ぶ（プライバシー重視ならローカルファースト）',
          'ステップ2：一部屋から始める',
          'ステップ3：ローカル対応機器をいくつか追加',
          'ステップ4：1〜2 個の自動化を作る',
          'ステップ5：音声/AI は後で追加し、それから拡張',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'ステップ1：ハブを選ぶ', anchor: 'step-hub' },
      { label: 'ステップ2：一部屋', anchor: 'step-room' },
      { label: 'ステップ3：機器を追加', anchor: 'step-devices' },
      { label: 'ステップ4：最初の自動化', anchor: 'step-automations' },
      { label: 'ステップ5：音声とAIは後で', anchor: 'step-voice' },
      { label: 'よくある失敗', anchor: 'mistakes' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'ハブを選び、ローカル対応機器をいくつか入れた一部屋を整え、ルーティンを自動化し、それから拡張することでスマートホームを始めます。' },
      { type: 'plain-terms', content: '最大の初心者の失敗は、機器を一度にたくさん買うことです。代わりにハブを選び、ローカル機器を2〜3 個入れた一部屋を動かし、簡単な自動化を設定し、そこから育てましょう。ローカルファーストで始めればデータをプライベートに保ち、後で設定をやり直さずに済みます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'まずハブを選ぶ——プライバシーが重要なら Home Assistant のようなローカルファーストのハブ',
          '家全体ではなく、一部屋から始める',
          'ローカル対応機器をいくつか追加する（Zigbee 電球、センサー、プラグ）',
          '仕組みを学ぶために 1〜2 個の簡単な自動化を作る',
          '基本が安定したら、音声と AI を後から追加する',
          '前もって多くのクラウド専用機器を買う、よくある失敗を避ける',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'ステップ1：ハブを選ぶ',
        content:
          '**まずハブを選びましょう。どの機器が連携し、システムがローカルで動くかを決めるからです。** プライバシーとオフラインの信頼性には、Home Assistant のようなローカルファーストのハブが推奨の道です。',
        items: [
          '完全なローカル制御には Home Assistant を使う——[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          '基本なら Raspberry Pi、後でローカル AI も欲しいならミニPCで動かす。',
          '手軽さだけが目的なら、クラウドエコシステムの方が始めやすいです。',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'ステップ2：一部屋から始める',
        content:
          '**規模を広げる前にシステムを学べるよう、まず一部屋を整えましょう。** 機器、自動化、信頼性を試すには一部屋で十分です。',
        items: [
          '毎日使う部屋を選ぶ（リビングか寝室）。',
          'もっと買う前に、そこで 2〜3 個の機器を動かす。',
          'すべてがローカルかつ確実に反応することを確認する。',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'ステップ3：ローカル対応機器をいくつか追加',
        content:
          '**多くのクラウド専用機器ではなく、少数のローカル対応機器——Zigbee 電球、人感センサー、プラグ——を追加しましょう。** これで設定をプライベートかつ拡張可能に保てます。',
        items: [
          'ローカル制御には Zigbee、Z-Wave、Matter の機器を選ぶ——[最適なスマートホーム機器 2026](/ja/smart-home/best-smart-home-devices-2026)を参照。',
          'Zigbee 機器のためにハブへ Zigbee コーディネーターを追加。',
          '基本制御にクラウドアカウントを要する機器は避ける。',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'ステップ4：最初の自動化を作る',
        content:
          '**基本を学ぶため、1〜2 個の簡単な自動化を作りましょう——たとえば日没に点灯する照明。** 自動化こそが、単なる遠隔操作ではなく家を「スマート」にします。',
        items: [
          '時間やセンサーに基づくルールから始める（日没の照明、人感で点く廊下灯）。',
          'もっと追加する前に、各自動化をテストし調整する。',
          'Home Assistant の一般的な自動化にプログラミングは不要。',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'ステップ5：音声とAIは後で追加',
        content:
          '**音声と AI 制御は、初日ではなく基本が動いてから追加しましょう。** ローカル音声アシスタントと LLM の頭脳は強力ですが、安定した土台に乗せる方が簡単です。',
        items: [
          'ハンズフリー制御のためにローカル音声アシスタントを追加——[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
          '自然言語制御のためにローカル LLM の頭脳を追加——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
          '慣れてきたら、部屋ごとに拡張する。',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'よくある初心者の失敗',
        content:
          '**最大の失敗は、一度に買いすぎること、クラウド専用機器を選ぶこと、ハブの決定を飛ばすことです。** これらを避ければ、あとは簡単です。',
        columns: ['段階', '何を買うか', '相対コスト'],
        rows: [
          { '段階': 'ハブ', '何を買うか': 'ローカルハブ + Zigbee コーディネーター', '相対コスト': '低〜中' },
          { '段階': '最初の部屋', '何を買うか': 'Zigbee 電球/スイッチ 2〜3 個', '相対コスト': '低' },
          { '段階': 'センサー', '何を買うか': '人感/ドアセンサー 1〜2 個', '相対コスト': '低' },
          { '段階': '拡張', '何を買うか': '必要に応じて追加のローカル機器', '相対コスト': 'あなたに合わせて増える' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'スマートホームに最初に何を買うべきですか？', a: 'まずハブ、できれば Home Assistant のようなローカルファーストのもの、それに Zigbee コーディネーターと Zigbee の電球かセンサーをいくつか。ハブが何を連携させるかを決めるので、個々の機器より先に買うべきです。' },
          { q: 'スマートホームを始めるのは高いですか？', a: '小さく始めれば高くありません。ローカルハブと一部屋分の Zigbee 機器なら安価で、少しずつ拡張します。コストが上がるのは、一度に多くの機器を買うか、サブスク付きのプレミアムなクラウドエコシステムを選ぶ場合だけです。' },
          { q: 'スマートホームの設定にプログラミングは必要ですか？', a: 'いいえ。Home Assistant やクラウドエコシステムの一般的な設定と自動化はグラフィカルな画面で行います。高度な自動化に YAML を使えますが、始めるには任意です。' },
          { q: '初心者はクラウドとローカルのどちらが良いですか？', a: 'クラウドエコシステムは始めやすいですが、ローカルファーストのハブはデータをプライベートに保ち、オフラインで動きます。プライバシーが重要なら、ローカルファーストで始めると後の面倒な移行を避けられ、それでも初心者向けです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — ローカルハブを設定する',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 完全なローカルファーストの全体像',
          '[最適なスマートホーム機器 2026](/ja/smart-home/best-smart-home-devices-2026) — カテゴリー別に何を買うか',
          '[スマートホームとは？](/ja/smart-home/what-is-a-smart-home) — まず基本',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホーム初心者：2026年 どこから始めるか',
      description: 'スマートホームを2026年に正しく始める方法を解説：ハブの選び方、まず一部屋から始める手順、ローカル対応機器の追加方法、自動化ルーティンの設定から段階的な拡張まで実践的に紹介します。',
      url: 'https://www.promptquorum.com/ja/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'スマートホームの設定' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'スマートホームに最初に何を買うべきですか？', acceptedAnswer: { '@type': 'Answer', text: 'まずハブ、できれば Home Assistant のようなローカルファーストのもの、それに Zigbee コーディネーターと Zigbee の電球かセンサーをいくつか。ハブが何を連携させるかを決めます。' } },
        { '@type': 'Question', name: 'スマートホームを始めるのは高いですか？', acceptedAnswer: { '@type': 'Answer', text: '小さく始めれば高くありません。ローカルハブと一部屋分の Zigbee 機器なら安価で、少しずつ拡張します。' } },
        { '@type': 'Question', name: 'スマートホームの設定にプログラミングは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。一般的な設定と自動化はグラフィカルな画面で行います。高度な自動化に YAML は任意です。' } },
        { '@type': 'Question', name: '初心者はクラウドとローカルのどちらが良いですか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウドは始めやすいですが、ローカルファーストのハブはデータをプライベートに保ち、オフラインで動きます。プライバシーが重要ならローカルファーストで始めると後の移行を避けられます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-pt.png',
    title: 'Casa Inteligente para Iniciantes: Por Onde Começar em 2026',
    seoTitle: 'Casa Inteligente para Iniciantes: Por Onde Começar',
    intro:
      'A forma confiável de começar uma casa inteligente em 2026 é: escolher um hub, montar um cômodo, adicionar alguns dispositivos com capacidade local e automatizar algumas rotinas antes de expandir. Este guia para iniciantes dá um caminho passo a passo, recomenda uma abordagem local-first pela privacidade e aponta os erros que levam a uma gaveta de dispositivos incompatíveis.',
    metaDescription:
      'Comece uma casa inteligente em 2026: escolha um hub, configure um cômodo, adicione dispositivos locais, automatize e expanda. Caminho prático para iniciantes.',
    twitterDescription:
      'Novo em casa inteligente? Comece com um hub e um cômodo, adicione dispositivos com capacidade local, automatize algumas rotinas e depois expanda. O caminho 2026 para iniciantes.',
    readTime: '8 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Pessoas montando sua primeira casa inteligente',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      'como começar casa inteligente',
      'casa inteligente para iniciantes',
      'guia inicial casa inteligente',
      'primeira configuração casa inteligente',
      'iniciante casa inteligente 2026',
    ],
    leadAnswerBlock:
      '**Comece escolhendo um hub, montando um cômodo, adicionando alguns dispositivos com capacidade local e automatizando algumas rotinas — depois expanda quando funcionar.** Escolher cedo um hub local-first como o Home Assistant evita uma migração mais difícil depois, se a privacidade importa para você.',
    quickAnswerTop: {
      pt: {
        question: 'Como começo uma casa inteligente como iniciante?',
        answer:
          'Escolha um hub, comece por um único cômodo, adicione alguns dispositivos com capacidade local (lâmpadas, um sensor, uma tomada) e configure uma ou duas automações. Faça isso funcionar antes de expandir. Escolher um hub local-first como o Home Assistant desde o início mantém seus dados privados e evita refazer tudo depois.',
        bullets: [
          'Passo 1: escolha um hub (local-first se a privacidade importa)',
          'Passo 2: comece por um cômodo',
          'Passo 3: adicione alguns dispositivos com capacidade local',
          'Passo 4: crie uma ou duas automações',
          'Passo 5: adicione voz/IA depois, então expanda',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Passo 1: Escolha um hub', anchor: 'step-hub' },
      { label: 'Passo 2: Um cômodo', anchor: 'step-room' },
      { label: 'Passo 3: Adicione dispositivos', anchor: 'step-devices' },
      { label: 'Passo 4: Primeiras automações', anchor: 'step-automations' },
      { label: 'Passo 5: Voz e IA depois', anchor: 'step-voice' },
      { label: 'Erros comuns', anchor: 'mistakes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Comece uma casa inteligente escolhendo um hub, montando um cômodo com alguns dispositivos com capacidade local, automatizando uma rotina e depois expandindo.' },
      { type: 'plain-terms', content: 'O maior erro de iniciante é comprar muitos dispositivos de uma vez. Em vez disso, escolha um hub, faça um cômodo funcionar com dois ou três dispositivos locais, configure uma automação simples e cresça a partir daí. Começar local-first mantém seus dados privados e evita refazer sua configuração depois.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Escolha primeiro um hub — um hub local-first como o Home Assistant se a privacidade importa',
          'Comece por um único cômodo, não a casa inteira',
          'Adicione alguns dispositivos com capacidade local (lâmpadas Zigbee, um sensor, uma tomada)',
          'Crie uma ou duas automações simples para aprender como funciona',
          'Adicione voz e IA depois, quando o básico estiver confiável',
          'Evite o erro comum de comprar antecipadamente muitos dispositivos só-nuvem',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: 'Passo 1: Escolha um hub',
        content:
          '**Escolha primeiro um hub, porque ele determina quais dispositivos funcionam juntos e se o seu sistema roda localmente.** Por privacidade e confiabilidade offline, um hub local-first como o Home Assistant é o caminho recomendado.',
        items: [
          'Use o Home Assistant para controle local total — veja [Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Rode-o em uma Raspberry Pi para o básico, ou em um mini PC se quiser IA local mais tarde.',
          'Se você só quer comodidade plug-and-play, um ecossistema na nuvem é o começo mais fácil.',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: 'Passo 2: Comece por um cômodo',
        content:
          '**Monte primeiro um único cômodo para aprender o sistema antes de escalar.** Um cômodo basta para testar dispositivos, automações e confiabilidade.',
        items: [
          'Escolha um cômodo que você usa todos os dias (sala ou quarto).',
          'Faça dois ou três dispositivos funcionarem ali antes de comprar mais.',
          'Confirme que tudo responde local e de forma confiável.',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: 'Passo 3: Adicione alguns dispositivos com capacidade local',
        content:
          '**Adicione um número pequeno de dispositivos com capacidade local — lâmpadas Zigbee, um sensor de movimento, uma tomada — em vez de muitos aparelhos só-nuvem.** Isso mantém sua configuração privada e expansível.',
        items: [
          'Escolha dispositivos Zigbee, Z-Wave ou Matter para controle local — veja [melhores dispositivos de casa inteligente 2026](/pt/smart-home/best-smart-home-devices-2026).',
          'Adicione um coordenador Zigbee ao seu hub para os dispositivos Zigbee.',
          'Evite dispositivos que precisam de uma conta na nuvem para o controle básico.',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: 'Passo 4: Crie suas primeiras automações',
        content:
          '**Construa uma ou duas automações simples para aprender o básico — por exemplo, uma luz que acende ao pôr do sol.** As automações são o que tornam uma casa "inteligente" em vez de só controlada remotamente.',
        items: [
          'Comece com regras por horário ou sensor (luz ao pôr do sol, luz de corredor por movimento).',
          'Teste cada automação e ajuste antes de adicionar mais.',
          'Não é preciso programar para as automações comuns no Home Assistant.',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: 'Passo 5: Adicione voz e IA depois',
        content:
          '**Adicione voz e controle por IA quando o básico funcionar, não no primeiro dia.** Um assistente de voz local e um cérebro LLM são poderosos, mas mais fáceis de adicionar sobre uma base estável.',
        items: [
          'Adicione um assistente de voz local para controle mãos-livres — veja [montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Adicione um cérebro LLM local para controle em linguagem natural — veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
          'Expanda cômodo por cômodo à medida que ficar confortável.',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: 'Erros comuns de iniciante',
        content:
          '**Os maiores erros são comprar demais de uma vez, escolher dispositivos só-nuvem e pular a decisão do hub.** Evite-os e o resto é simples.',
        columns: ['Etapa', 'O que comprar', 'Custo relativo'],
        rows: [
          { 'Etapa': 'Hub', 'O que comprar': 'Hub local + coordenador Zigbee', 'Custo relativo': 'Baixo–médio' },
          { 'Etapa': 'Primeiro cômodo', 'O que comprar': '2–3 lâmpadas/interruptores Zigbee', 'Custo relativo': 'Baixo' },
          { 'Etapa': 'Sensores', 'O que comprar': '1–2 sensores de movimento/porta', 'Custo relativo': 'Baixo' },
          { 'Etapa': 'Expandir', 'O que comprar': 'Mais dispositivos locais conforme precisar', 'Custo relativo': 'Cresce com você' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O que devo comprar primeiro para uma casa inteligente?', a: 'Compre primeiro um hub, idealmente um local-first como o Home Assistant, mais um coordenador Zigbee e algumas lâmpadas ou um sensor Zigbee. O hub determina o que funciona junto, então deve vir antes dos dispositivos individuais.' },
          { q: 'É caro começar uma casa inteligente?', a: 'Não, se você começar pequeno. Um hub local e alguns dispositivos Zigbee em um cômodo é barato, e você expande aos poucos. Os custos só sobem se você comprar muitos dispositivos de uma vez ou escolher ecossistemas premium na nuvem com assinaturas.' },
          { q: 'Preciso programar para montar uma casa inteligente?', a: 'Não. As configurações e automações comuns no Home Assistant e nos ecossistemas na nuvem são configuradas por uma interface gráfica. Usuários avançados podem usar YAML para automações complexas, mas é opcional para começar.' },
          { q: 'Nuvem ou local para iniciantes?', a: 'Ecossistemas na nuvem são mais fáceis de começar, mas um hub local-first mantém seus dados privados e funciona offline. Se a privacidade importa, começar local-first evita uma migração mais difícil depois, e ainda é amigável para iniciantes.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — monte o hub local',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o panorama local-first completo',
          '[Melhores dispositivos de casa inteligente 2026](/pt/smart-home/best-smart-home-devices-2026) — o que comprar por categoria',
          '[O que é uma casa inteligente?](/pt/smart-home/what-is-a-smart-home) — primeiro o básico',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Casa Inteligente para Iniciantes: Por Onde Começar em 2026',
      description: 'Comece uma casa inteligente em 2026: escolha um hub, configure um cômodo, adicione dispositivos locais, automatize e expanda. Caminho prático para iniciantes.',
      url: 'https://www.promptquorum.com/pt/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Configuração de casa inteligente' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O que devo comprar primeiro para uma casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Primeiro um hub, idealmente um local-first como o Home Assistant, mais um coordenador Zigbee e algumas lâmpadas ou um sensor Zigbee. O hub determina o que funciona junto.' } },
        { '@type': 'Question', name: 'É caro começar uma casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Não, se você começar pequeno. Um hub local e alguns dispositivos Zigbee em um cômodo é barato, e você expande aos poucos.' } },
        { '@type': 'Question', name: 'Preciso programar para montar uma casa inteligente?', acceptedAnswer: { '@type': 'Answer', text: 'Não. As configurações e automações comuns são configuradas por uma interface gráfica. O YAML é opcional para automações avançadas.' } },
        { '@type': 'Question', name: 'Nuvem ou local para iniciantes?', acceptedAnswer: { '@type': 'Answer', text: 'A nuvem é mais fácil de começar, mas um hub local-first mantém seus dados privados e funciona offline. Se a privacidade importa, começar local-first evita uma migração mais difícil.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    heroImage: '/images/smart-home-for-beginners-where-to-start-overview-hero-zh.png',
    title: '智能家居新手：2026 从何处开始',
    seoTitle: '智能家居新手完全入门2026：中枢选购、首个房间到自动化全流程实践',
    intro:
      '2026 年开始智能家居的可靠方法是：选一个中枢、布置一个房间、添加少量支持本地的设备，并在扩展前自动化几条日常。本新手指南给出分步路径，出于隐私推荐本地优先的方式，并指出会导致一抽屉互不兼容设备的错误。',
    metaDescription:
      '2026年智能家居入门完整指南：从挑选中枢控制器到布置第一个房间，添加支持本地运行的设备，配置自动化场景，再到系统扩展，一步步带你搭建私密可靠的本地优先智能家居。',
    twitterDescription:
      '智能家居新手？从一个中枢和一个房间开始，添加支持本地的设备，自动化几条日常，然后扩展。2026 年的新手路径。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Beginner',
    audience: '首次搭建智能家居的人',
    primaryTerm: 'how to start a smart home',
    targetKeywords: [
      '如何开始 智能家居',
      '智能家居 新手',
      '智能家居 入门指南',
      '第一次 智能家居 配置',
      '新手 智能家居 2026',
    ],
    leadAnswerBlock:
      '**先从选一个中枢、布置一个房间、添加少量支持本地的设备并自动化几条日常开始——跑通后再扩展。** 如果你看重隐私，早早选择像 Home Assistant 这样的本地优先中枢，能避免日后更困难的迁移。',
    quickAnswerTop: {
      zh: {
        question: '新手该如何开始智能家居？',
        answer:
          '选一个中枢，从单个房间起步，添加少量支持本地的设备（灯泡、一个传感器、一个插座），并设置一两条自动化。先把这些跑通再扩展。从一开始就选择像 Home Assistant 这样的本地优先中枢，可让数据保持私密，并避免日后重做。',
        bullets: [
          '第一步：选中枢（看重隐私就选本地优先）',
          '第二步：从一个房间开始',
          '第三步：添加少量支持本地的设备',
          '第四步：创建一两条自动化',
          '第五步：以后再加语音/AI，然后扩展',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '第一步：选一个中枢', anchor: 'step-hub' },
      { label: '第二步：一个房间', anchor: 'step-room' },
      { label: '第三步：添加设备', anchor: 'step-devices' },
      { label: '第四步：第一条自动化', anchor: 'step-automations' },
      { label: '第五步：语音和AI以后再说', anchor: 'step-voice' },
      { label: '常见错误', anchor: 'mistakes' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '通过选一个中枢、布置一个带少量支持本地设备的房间、自动化一条日常，然后扩展，来开始智能家居。' },
      { type: 'plain-terms', content: '最大的新手错误是一次买太多设备。相反，先选一个中枢，用两三件本地设备把一个房间跑通，设置一条简单自动化，再从那里成长。本地优先起步能让数据保持私密，并避免日后重做配置。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '先选中枢——看重隐私就选像 Home Assistant 这样的本地优先中枢',
          '从单个房间开始，而非整座房子',
          '添加少量支持本地的设备（Zigbee 灯泡、一个传感器、一个插座）',
          '创建一两条简单自动化，以了解它的工作方式',
          '等基础稳定后，再添加语音和 AI',
          '避免提前买入很多仅限云端设备的常见错误',
        ],
      },
      stepHub: {
        id: 'step-hub',
        title: '第一步：选一个中枢',
        content:
          '**先选中枢，因为它决定哪些设备协同工作，以及你的系统是否本地运行。** 出于隐私和离线可靠性，像 Home Assistant 这样的本地优先中枢是推荐之路。',
        items: [
          '要完全本地控制就用 Home Assistant——参见[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)。',
          '基础用途用 Raspberry Pi；若日后还想要本地 AI，就用迷你 PC。',
          '若只想要即插即用的便利，云端生态起步更容易。',
        ],
      },
      stepRoom: {
        id: 'step-room',
        title: '第二步：从一个房间开始',
        content:
          '**先布置单个房间，在扩大规模前先了解系统。** 一个房间就足以测试设备、自动化和可靠性。',
        items: [
          '选一个你每天使用的房间（客厅或卧室）。',
          '在买更多之前，先让两三件设备在那里跑通。',
          '确认一切都能本地且可靠地响应。',
        ],
      },
      stepDevices: {
        id: 'step-devices',
        title: '第三步：添加少量支持本地的设备',
        content:
          '**添加少量支持本地的设备——Zigbee 灯泡、一个人体传感器、一个插座——而不是许多仅限云端的设备。** 这能让你的配置保持私密且可扩展。',
        items: [
          '为本地控制选择 Zigbee、Z-Wave 或 Matter 设备——参见[最佳智能家居设备 2026](/zh/smart-home/best-smart-home-devices-2026)。',
          '为 Zigbee 设备给中枢添加一个 Zigbee 协调器。',
          '避免基础控制就要求云端账户的设备。',
        ],
      },
      stepAutomations: {
        id: 'step-automations',
        title: '第四步：创建你的第一条自动化',
        content:
          '**做一两条简单自动化来学习基础——例如日落时点亮的灯。** 自动化正是让家“智能”而非仅仅被遥控的关键。',
        items: [
          '从基于时间或传感器的规则开始（日落开灯、人体触发的走廊灯）。',
          '在添加更多之前，测试并调整每条自动化。',
          'Home Assistant 中常见的自动化无需编程。',
        ],
      },
      stepVoice: {
        id: 'step-voice',
        title: '第五步：语音和AI以后再加',
        content:
          '**等基础跑通后再添加语音和 AI 控制，而不是第一天就上。** 本地语音助手和 LLM 大脑很强大，但更适合在稳定的基础之上添加。',
        items: [
          '为免手控制添加本地语音助手——参见[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home)。',
          '为自然语言控制添加本地 LLM 大脑——参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
          '随着上手，逐个房间扩展。',
        ],
      },
      mistakes: {
        id: 'mistakes',
        title: '常见新手错误',
        content:
          '**最大的错误是一次买太多、选仅限云端的设备，以及跳过中枢的决定。** 避开这些，其余便很简单。',
        columns: ['阶段', '买什么', '相对成本'],
        rows: [
          { '阶段': '中枢', '买什么': '本地中枢 + Zigbee 协调器', '相对成本': '低–中' },
          { '阶段': '第一个房间', '买什么': '2–3 只 Zigbee 灯泡/开关', '相对成本': '低' },
          { '阶段': '传感器', '买什么': '1–2 个人体/门窗传感器', '相对成本': '低' },
          { '阶段': '扩展', '买什么': '按需添加更多本地设备', '相对成本': '随你增长' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '智能家居该先买什么？', a: '先买一个中枢，最好是像 Home Assistant 这样的本地优先中枢，再加一个 Zigbee 协调器和几只 Zigbee 灯泡或一个传感器。中枢决定什么能协同工作，因此应先于单个设备。' },
          { q: '开始智能家居贵吗？', a: '小步起步就不贵。一个本地中枢加一个房间的若干 Zigbee 设备很便宜，再逐步扩展。只有当你一次买很多设备，或选择带订阅的高端云端生态时，成本才会上升。' },
          { q: '搭建智能家居需要编程吗？', a: '不需要。Home Assistant 和云端生态中常见的配置与自动化都通过图形界面完成。高级用户可用 YAML 做复杂自动化，但入门时是可选的。' },
          { q: '新手该选云端还是本地？', a: '云端生态更易上手，但本地优先中枢能让数据保持私密并离线工作。如果你看重隐私，从本地优先起步可避免日后更困难的迁移，而且对新手依然友好。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 配置本地中枢',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整的本地优先全貌',
          '[最佳智能家居设备 2026](/zh/smart-home/best-smart-home-devices-2026) — 按类别买什么',
          '[什么是智能家居？](/zh/smart-home/what-is-a-smart-home) — 先打基础',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居新手：2026 从何处开始',
      description: '2026年智能家居入门完整指南：从挑选中枢控制器到布置第一个房间，添加支持本地运行的设备，配置自动化场景，再到系统扩展，一步步带你搭建私密可靠的本地优先智能家居。',
      url: 'https://www.promptquorum.com/zh/smart-home/smart-home-for-beginners-where-to-start',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '智能家居配置' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Beginner',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '智能家居该先买什么？', acceptedAnswer: { '@type': 'Answer', text: '先买一个中枢，最好是像 Home Assistant 这样的本地优先中枢，再加一个 Zigbee 协调器和几只 Zigbee 灯泡或一个传感器。中枢决定什么能协同工作。' } },
        { '@type': 'Question', name: '开始智能家居贵吗？', acceptedAnswer: { '@type': 'Answer', text: '小步起步就不贵。一个本地中枢加一个房间的若干 Zigbee 设备很便宜，再逐步扩展。' } },
        { '@type': 'Question', name: '搭建智能家居需要编程吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。常见的配置与自动化都通过图形界面完成。高级自动化可用 YAML，但属可选。' } },
        { '@type': 'Question', name: '新手该选云端还是本地？', acceptedAnswer: { '@type': 'Answer', text: '云端更易上手，但本地优先中枢能让数据保持私密并离线工作。看重隐私就从本地优先起步，可避免日后更困难的迁移。' } },
      ],
    },
  },
}
