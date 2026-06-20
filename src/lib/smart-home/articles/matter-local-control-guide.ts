import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter & Local Control: An Internet-Independent Smart Home (2026)',
    seoTitle: 'Matter Local Control 2026: No-Cloud Smart Home',
    intro:
      'Matter over Thread can run a genuinely local smart home through a local controller like Home Assistant — no manufacturer cloud required. This guide clears up the nuance of whether Matter means local, explains Thread border routers and local-only commissioning, shows how to avoid cloud bridges, and walks through a local Matter setup with Home Assistant.',
    metaDescription:
      'Matter + Thread for local smart home control 2026: Thread border routers, local-only commissioning, avoiding cloud bridges — Home Assistant setup included.',
    twitterDescription:
      'Matter and Thread can run fully local through a controller like Home Assistant — no manufacturer cloud. How to commission locally and avoid cloud bridges.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Users building an internet-independent Matter setup',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter local control no cloud',
      'matter thread local',
      'matter home assistant local',
      'thread border router',
      'internet independent smart home',
    ],
    leadAnswerBlock:
      '**Matter over Thread can run fully locally through a local controller such as Home Assistant — you commission the device to your local fabric, no manufacturer cloud needed.** A Thread border router connects Thread devices to your network; Home Assistant acts as the local controller.',
    quickAnswerTop: {
      en: {
        question: 'Does Matter work without the cloud?',
        answer:
          'Matter can work fully locally: when you commission a Matter device to a local controller like Home Assistant, control happens on your network with no manufacturer cloud. Thread-based Matter devices need a Thread border router. Some devices also offer cloud features, but local control does not require them.',
        bullets: [
          'Matter can run locally via a local controller (e.g. Home Assistant)',
          'Thread devices need a Thread border router',
          'Commission devices to your local fabric, not a vendor app',
          'Avoid cloud bridges to keep control internet-independent',
          'Some devices add optional cloud features you can skip',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Does Matter Mean Local?', anchor: 'matter-local' },
      { label: 'Thread Border Routers', anchor: 'border-routers' },
      { label: 'Local-Only Commissioning', anchor: 'commissioning' },
      { label: 'Avoiding Cloud Bridges', anchor: 'avoid-bridges' },
      { label: 'Setup with Home Assistant', anchor: 'ha-setup' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter over Thread runs fully locally through a controller like Home Assistant; a Thread border router links Thread devices, and no manufacturer cloud is needed.' },
      { type: 'plain-terms', content: 'Matter is designed to work locally, but whether your setup actually stays off the cloud depends on how you commission devices and which controller you use. Pairing a Matter device to a local controller like Home Assistant — rather than only a vendor app — keeps control on your own network.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Matter can run fully locally through a local controller such as Home Assistant',
          'Thread-based Matter devices require a Thread border router on your network',
          'Commission devices to your local fabric, not just a manufacturer cloud app',
          'Avoid cloud bridges that route control through a vendor server',
          'Home Assistant acts as a local Matter controller for internet-independent control',
          'Some devices offer optional cloud features you can ignore for local control',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Does Matter Mean Local?',
        content:
          '**Matter is designed for local control, but whether your setup stays local depends on the controller and how you commission devices.** Pairing to a local controller keeps control on your network.',
        items: [
          'Matter control between a device and a local controller happens on your LAN.',
          'Using only a vendor app may route some features through that vendor\'s cloud.',
          'For the protocol background, see [smart home protocols explained](/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread Border Routers',
        content:
          '**Thread-based Matter devices need a Thread border router to bridge the Thread mesh to your IP network.** Many hubs and some speakers include one.',
        items: [
          'A border router connects low-power Thread devices to your LAN.',
          'Matter-over-Wi-Fi devices do not need Thread, but Thread suits battery devices.',
          'Check your controller or a compatible device provides a border router.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Local-Only Commissioning',
        content:
          '**Commission Matter devices directly to your local controller so control stays on your network.** Matter\'s multi-admin feature lets a device join more than one fabric.',
        numberedItems: [
          'Add the Matter integration in your local controller (e.g. Home Assistant).',
          'Scan the device\'s Matter QR/pairing code from the controller.',
          'Commission it to your local fabric on your network.',
          'Verify control works with the manufacturer app closed.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Avoiding Cloud Bridges',
        content:
          '**Avoid cloud bridges that relay device control through a vendor server, which defeats local operation.** Prefer direct local commissioning and local controllers.',
        items: [
          'Some ecosystems bridge Matter devices via their cloud — prefer a local controller instead.',
          'Keep the Thread border router and controller on your own network.',
          'Test that control survives an internet outage to confirm it is local.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Setup with Home Assistant',
        content:
          '**Home Assistant acts as a local Matter controller, so you commission devices to it and control them with no manufacturer cloud.** This is the cleanest path to internet-independent Matter.',
        items: [
          'Use the Home Assistant Matter integration as your controller — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).',
          'Pair a Thread border router so Thread devices join your network.',
          'For the full local picture, see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Setup Paths Compared',
        content:
          '**Local commissioning to a local controller is internet-independent; vendor-cloud-only pairing is not.** Pick the local path.',
        columns: ['Setup path', 'Local-only?', 'Needs cloud bridge?'],
        rows: [
          { 'Setup path': 'Commission to Home Assistant (local controller)', 'Local-only?': 'Yes', 'Needs cloud bridge?': 'No' },
          { 'Setup path': 'Matter-over-Thread + local Thread border router', 'Local-only?': 'Yes', 'Needs cloud bridge?': 'No' },
          { 'Setup path': 'Vendor-app-only pairing', 'Local-only?': 'Partial', 'Needs cloud bridge?': 'Sometimes' },
          { 'Setup path': 'Cloud-bridged ecosystem', 'Local-only?': 'No', 'Needs cloud bridge?': 'Yes' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Is Matter always local?', a: 'Matter is designed for local control, but whether your setup stays local depends on the controller and commissioning. Pairing devices to a local controller like Home Assistant keeps control on your network; relying only on a vendor cloud app may route features through the cloud.' },
          { q: 'Do I need a Thread border router?', a: 'Only for Thread-based Matter devices, which use the low-power Thread mesh. A Thread border router bridges them to your IP network and is built into some hubs and speakers. Matter-over-Wi-Fi devices do not need one.' },
          { q: 'Can I avoid the manufacturer app?', a: 'Often, yes. With Matter\'s commissioning you can pair a device directly to a local controller such as Home Assistant and control it without the manufacturer app. Some initial setup may use the app, but ongoing control can be local.' },
          { q: 'Does Matter work with Home Assistant?', a: 'Yes. Home Assistant includes a Matter integration and can act as a local Matter controller, commissioning devices to your local fabric and controlling them with no manufacturer cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Protocols Explained](/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the local-first stack',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — the local Matter controller',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — why internet-independence matters',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter & Local Control: An Internet-Independent Smart Home (2026)',
      description: 'Matter + Thread for local smart home control 2026: Thread border routers, local-only commissioning, avoiding cloud bridges — Home Assistant setup included.',
      url: 'https://www.promptquorum.com/smart-home/matter-local-control-guide',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Local control' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Is Matter always local?', acceptedAnswer: { '@type': 'Answer', text: 'Matter is designed for local control, but whether your setup stays local depends on the controller and commissioning. Pairing to a local controller like Home Assistant keeps control on your network.' } },
        { '@type': 'Question', name: 'Do I need a Thread border router?', acceptedAnswer: { '@type': 'Answer', text: 'Only for Thread-based Matter devices. A Thread border router bridges them to your IP network and is built into some hubs and speakers. Matter-over-Wi-Fi devices do not need one.' } },
        { '@type': 'Question', name: 'Can I avoid the manufacturer app?', acceptedAnswer: { '@type': 'Answer', text: 'Often, yes. With Matter commissioning you can pair a device directly to a local controller like Home Assistant and control it without the manufacturer app.' } },
        { '@type': 'Question', name: 'Does Matter work with Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Home Assistant includes a Matter integration and can act as a local Matter controller with no manufacturer cloud.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter والتحكم المحلي: منزل ذكي مستقل عن الإنترنت (2026)',
    seoTitle: 'Matter + Thread 2026: منزل ذكي محلي بلا سحابة',
    intro:
      'يمكن لـ Matter عبر Thread تشغيل منزل ذكي محلي حقيقي من خلال متحكم محلي مثل Home Assistant — دون الحاجة إلى سحابة مورِّد. يُوضِّح هذا الدليل ما إذا كان Matter يعني محليًا، ويشرح موجِّهات حدود Thread والتوصيل المحلي فقط، ويوضح كيفية تجنب الجسور السحابية، ويتناول إعداد Matter المحلي مع Home Assistant.',
    metaDescription:
      'Matter عبر Thread يعمل بلا سحابة مورِّد: موجِّهات حدود Thread، التوصيل المحلي فقط، تجنب الجسور السحابية — إعداد Home Assistant مُضمَّن.',
    twitterDescription:
      'يمكن لـ Matter وThread العمل محليًا بالكامل من خلال متحكم مثل Home Assistant — بدون سحابة مورِّد. كيفية التوصيل محليًا وتجنب الجسور السحابية.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمون يبنون إعداد Matter مستقلًا عن الإنترنت',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter تحكم محلي بدون سحابة',
      'matter thread محلي',
      'matter home assistant محلي',
      'موجِّه حدود thread',
      'منزل ذكي مستقل عن الإنترنت',
    ],
    leadAnswerBlock:
      '**يمكن لـ Matter عبر Thread العمل محليًا بالكامل من خلال متحكم محلي مثل Home Assistant — توصِّل الجهاز بنسيجك المحلي، دون الحاجة إلى سحابة مورِّد.** يربط موجِّه حدود Thread أجهزة Thread بشبكتك؛ يعمل Home Assistant كمتحكم محلي.',
    quickAnswerTop: {
      ar: {
        question: 'هل يعمل Matter بدون سحابة؟',
        answer:
          'يمكن لـ Matter أن يعمل محليًا بالكامل: عند توصيل جهاز Matter بمتحكم محلي مثل Home Assistant، يحدث التحكم على شبكتك بدون سحابة مورِّد. تحتاج أجهزة Matter المبنية على Thread إلى موجِّه حدود Thread. تقدم بعض الأجهزة أيضًا ميزات سحابية، لكن التحكم المحلي لا يتطلبها.',
        bullets: [
          'يمكن لـ Matter العمل محليًا عبر متحكم محلي (مثل Home Assistant)',
          'تحتاج أجهزة Thread إلى موجِّه حدود Thread',
          'وصِّل الأجهزة بنسيجك المحلي، وليس تطبيق المورِّد',
          'تجنب الجسور السحابية لإبقاء التحكم مستقلًا عن الإنترنت',
          'تضيف بعض الأجهزة ميزات سحابية اختيارية يمكنك تخطيها',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'هل Matter يعني محليًا؟', anchor: 'matter-local' },
      { label: 'موجِّهات حدود Thread', anchor: 'border-routers' },
      { label: 'التوصيل المحلي فقط', anchor: 'commissioning' },
      { label: 'تجنب الجسور السحابية', anchor: 'avoid-bridges' },
      { label: 'الإعداد مع Home Assistant', anchor: 'ha-setup' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يعمل Matter عبر Thread محليًا بالكامل من خلال متحكم مثل Home Assistant؛ يربط موجِّه حدود Thread الأجهزة المبنية على Thread، ولا حاجة إلى سحابة مورِّد.' },
      { type: 'plain-terms', content: 'صُمِّم Matter للعمل محليًا، لكن ما إذا كان إعدادك يبقى بعيدًا عن السحابة فعليًا يعتمد على كيفية توصيل الأجهزة والمتحكم الذي تستخدمه. إقران جهاز Matter بمتحكم محلي مثل Home Assistant — بدلًا من تطبيق مورِّد فقط — يُبقي التحكم على شبكتك الخاصة.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'يمكن لـ Matter العمل محليًا بالكامل من خلال متحكم محلي مثل Home Assistant',
          'تتطلب أجهزة Matter المبنية على Thread موجِّه حدود Thread على شبكتك',
          'وصِّل الأجهزة بنسيجك المحلي، وليس فقط تطبيق سحابة مورِّد',
          'تجنب الجسور السحابية التي تُوجِّه التحكم عبر خادم مورِّد',
          'يعمل Home Assistant كمتحكم Matter محلي للتحكم المستقل عن الإنترنت',
          'تقدم بعض الأجهزة ميزات سحابية اختيارية يمكنك تجاهلها للتحكم المحلي',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'هل Matter يعني محليًا؟',
        content:
          '**صُمِّم Matter للتحكم المحلي، لكن ما إذا كان إعدادك يبقى محليًا يعتمد على المتحكم وكيفية توصيل الأجهزة.** الإقران بمتحكم محلي يُبقي التحكم على شبكتك.',
        items: [
          'التحكم في Matter بين جهاز ومتحكم محلي يحدث على شبكتك المحلية.',
          'استخدام تطبيق مورِّد فقط قد يُوجِّه بعض الميزات عبر سحابة ذلك المورِّد.',
          'للخلفية البروتوكولية، راجع [بروتوكولات المنزل الذكي موضَّحة](/ar/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'موجِّهات حدود Thread',
        content:
          '**تحتاج أجهزة Matter المبنية على Thread إلى موجِّه حدود Thread لجسر شبكة Thread إلى شبكة IP الخاصة بك.** يتضمنها كثير من المراكز وبعض مكبرات الصوت.',
        items: [
          'يربط موجِّه الحدود أجهزة Thread منخفضة الطاقة بشبكتك المحلية.',
          'أجهزة Matter عبر Wi-Fi لا تحتاج Thread، لكن Thread يناسب الأجهزة البطارية.',
          'تحقق من أن متحكمك أو جهازًا متوافقًا يوفر موجِّه حدود.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'التوصيل المحلي فقط',
        content:
          '**وصِّل أجهزة Matter مباشرةً بمتحكمك المحلي حتى يبقى التحكم على شبكتك.** ميزة الإدارة المتعددة في Matter تتيح لجهاز الانضمام إلى أكثر من نسيج واحد.',
        numberedItems: [
          'أضف تكامل Matter في متحكمك المحلي (مثل Home Assistant).',
          'امسح رمز QR/الإقران الخاص بـ Matter للجهاز من المتحكم.',
          'وصِّله بنسيجك المحلي على شبكتك.',
          'تحقق من أن التحكم يعمل مع إغلاق تطبيق المورِّد.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'تجنب الجسور السحابية',
        content:
          '**تجنب الجسور السحابية التي تُرحِّل التحكم في الأجهزة عبر خادم مورِّد، مما يبطل التشغيل المحلي.** فضِّل التوصيل المحلي المباشر والمتحكمات المحلية.',
        items: [
          'بعض المنظومات تجسر أجهزة Matter عبر سحابتها — فضِّل متحكمًا محليًا.',
          'احتفظ بموجِّه حدود Thread والمتحكم على شبكتك الخاصة.',
          'اختبر أن التحكم يصمد أثناء انقطاع الإنترنت للتأكد من أنه محلي.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'الإعداد مع Home Assistant',
        content:
          '**يعمل Home Assistant كمتحكم Matter محلي، لذا توصِّل الأجهزة به وتتحكم فيها بدون سحابة مورِّد.** هذا هو أنظف مسار للتحكم في Matter بشكل مستقل عن الإنترنت.',
        items: [
          'استخدم تكامل Home Assistant Matter كمتحكمك — راجع [بدء استخدام Home Assistant](/ar/smart-home/home-assistant-getting-started).',
          'اقرن موجِّه حدود Thread حتى تنضم أجهزة Thread إلى شبكتك.',
          'للصورة المحلية الكاملة، راجع [الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'مقارنة مسارات الإعداد',
        content:
          '**التوصيل المحلي بمتحكم محلي مستقل عن الإنترنت؛ الإقران بسحابة مورِّد فقط ليس كذلك.** اختر المسار المحلي.',
        columns: ['مسار الإعداد', 'محلي فقط؟', 'يحتاج جسرًا سحابيًا؟'],
        rows: [
          { 'مسار الإعداد': 'توصيل بـ Home Assistant (متحكم محلي)', 'محلي فقط؟': 'نعم', 'يحتاج جسرًا سحابيًا؟': 'لا' },
          { 'مسار الإعداد': 'Matter عبر Thread + موجِّه حدود Thread محلي', 'محلي فقط؟': 'نعم', 'يحتاج جسرًا سحابيًا؟': 'لا' },
          { 'مسار الإعداد': 'إقران بتطبيق مورِّد فقط', 'محلي فقط؟': 'جزئي', 'يحتاج جسرًا سحابيًا؟': 'أحيانًا' },
          { 'مسار الإعداد': 'منظومة بجسر سحابي', 'محلي فقط؟': 'لا', 'يحتاج جسرًا سحابيًا؟': 'نعم' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل Matter دائمًا محلي؟', a: 'صُمِّم Matter للتحكم المحلي، لكن ما إذا كان إعدادك يبقى محليًا يعتمد على المتحكم والتوصيل. إقران الأجهزة بمتحكم محلي مثل Home Assistant يُبقي التحكم على شبكتك؛ الاعتماد فقط على تطبيق سحابة مورِّد قد يُوجِّه الميزات عبر السحابة.' },
          { q: 'هل أحتاج إلى موجِّه حدود Thread؟', a: 'فقط لأجهزة Matter المبنية على Thread، التي تستخدم شبكة Thread منخفضة الطاقة. يجسر موجِّه حدود Thread هذه الأجهزة بشبكة IP الخاصة بك وهو مدمج في بعض المراكز ومكبرات الصوت. أجهزة Matter عبر Wi-Fi لا تحتاجه.' },
          { q: 'هل يمكنني تجنب تطبيق المورِّد؟', a: 'في كثير من الأحيان، نعم. مع توصيل Matter يمكنك إقران جهاز مباشرةً بمتحكم محلي مثل Home Assistant والتحكم فيه بدون تطبيق المورِّد. قد يستخدم الإعداد الأولي التطبيق، لكن التحكم الجاري يمكن أن يكون محليًا.' },
          { q: 'هل يعمل Matter مع Home Assistant؟', a: 'نعم. يتضمن Home Assistant تكامل Matter ويمكنه العمل كمتحكم Matter محلي، يوصِّل الأجهزة بنسيجك المحلي ويتحكم فيها بدون سحابة مورِّد.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[بروتوكولات المنزل الذكي موضَّحة](/ar/smart-home/smart-home-protocols-explained) — Matter وThread وZigbee وZ-Wave',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — البنية المحلية أولًا',
          '[Home Assistant: دليل البدء](/ar/smart-home/home-assistant-getting-started) — متحكم Matter المحلي',
          '[لماذا المنزل الذكي المحلي يتفوق على السحابة](/ar/smart-home/why-local-smart-home-beats-cloud) — لماذا تهم الاستقلالية عن الإنترنت',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter والتحكم المحلي: منزل ذكي مستقل عن الإنترنت (2026)',
      description: 'Matter + Thread للتحكم المحلي في المنزل الذكي 2026: موجِّهات حدود Thread، التوصيل المحلي فقط، تجنب الجسور السحابية — إعداد Home Assistant مُضمَّن.',
      url: 'https://www.promptquorum.com/ar/smart-home/matter-local-control-guide',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'التحكم المحلي' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل Matter دائمًا محلي؟', acceptedAnswer: { '@type': 'Answer', text: 'صُمِّم Matter للتحكم المحلي، لكن ما إذا كان إعدادك يبقى محليًا يعتمد على المتحكم والتوصيل. الإقران بمتحكم محلي مثل Home Assistant يُبقي التحكم على شبكتك.' } },
        { '@type': 'Question', name: 'هل أحتاج إلى موجِّه حدود Thread؟', acceptedAnswer: { '@type': 'Answer', text: 'فقط لأجهزة Matter المبنية على Thread. يجسر موجِّه حدود Thread هذه الأجهزة بشبكة IP ومدمج في بعض المراكز ومكبرات الصوت. أجهزة Matter عبر Wi-Fi لا تحتاجه.' } },
        { '@type': 'Question', name: 'هل يمكنني تجنب تطبيق المورِّد؟', acceptedAnswer: { '@type': 'Answer', text: 'في كثير من الأحيان، نعم. مع توصيل Matter يمكنك إقران جهاز مباشرةً بمتحكم محلي مثل Home Assistant والتحكم فيه بدون تطبيق المورِّد.' } },
        { '@type': 'Question', name: 'هل يعمل Matter مع Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يتضمن Home Assistant تكامل Matter ويمكنه العمل كمتحكم Matter محلي بدون سحابة مورِّد.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter & lokale Steuerung: Ein internetunabhängiges Smart Home (2026)',
    seoTitle: 'Matter lokale Steuerung 2026: Smart Home ohne Cloud',
    intro:
      'Matter über Thread kann ein echtes lokales Smart Home über einen lokalen Controller wie Home Assistant betreiben – ohne Hersteller-Cloud. Dieser Leitfaden klärt die Frage, ob Matter lokal bedeutet, erklärt Thread-Border-Router und das nur-lokale Einbinden, zeigt, wie man Cloud-Bridges vermeidet, und führt durch ein lokales Matter-Setup mit Home Assistant.',
    metaDescription:
      'Matter und Thread 2026 für echte lokale Steuerung: Thread-Border-Router, nur-lokales Pairing, Cloud-Bridges vermeiden — Home-Assistant-Setup inklusive.',
    twitterDescription:
      'Matter und Thread können über einen Controller wie Home Assistant vollständig lokal laufen – ohne Hersteller-Cloud. Wie man lokal einbindet und Cloud-Bridges vermeidet.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Nutzer, die ein internetunabhängiges Matter-Setup bauen',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter lokale steuerung ohne cloud',
      'matter thread lokal',
      'matter home assistant lokal',
      'thread border router',
      'internetunabhängiges smart home',
    ],
    leadAnswerBlock:
      '**Matter über Thread kann über einen lokalen Controller wie Home Assistant vollständig lokal laufen – Sie binden das Gerät in Ihr lokales Fabric ein, ohne Hersteller-Cloud.** Ein Thread-Border-Router verbindet Thread-Geräte mit Ihrem Netzwerk; Home Assistant fungiert als lokaler Controller.',
    quickAnswerTop: {
      de: {
        question: 'Funktioniert Matter ohne die Cloud?',
        answer:
          'Matter kann vollständig lokal funktionieren: Wenn Sie ein Matter-Gerät in einen lokalen Controller wie Home Assistant einbinden, findet die Steuerung in Ihrem Netzwerk ohne Hersteller-Cloud statt. Thread-basierte Matter-Geräte benötigen einen Thread-Border-Router. Manche Geräte bieten auch Cloud-Funktionen, doch die lokale Steuerung erfordert sie nicht.',
        bullets: [
          'Matter kann über einen lokalen Controller lokal laufen (z. B. Home Assistant)',
          'Thread-Geräte benötigen einen Thread-Border-Router',
          'Binden Sie Geräte in Ihr lokales Fabric ein, nicht in eine Hersteller-App',
          'Vermeiden Sie Cloud-Bridges, um die Steuerung internetunabhängig zu halten',
          'Manche Geräte bieten optionale Cloud-Funktionen, die Sie überspringen können',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Bedeutet Matter lokal?', anchor: 'matter-local' },
      { label: 'Thread-Border-Router', anchor: 'border-routers' },
      { label: 'Nur-lokales Einbinden', anchor: 'commissioning' },
      { label: 'Cloud-Bridges vermeiden', anchor: 'avoid-bridges' },
      { label: 'Setup mit Home Assistant', anchor: 'ha-setup' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter über Thread läuft über einen Controller wie Home Assistant vollständig lokal; ein Thread-Border-Router verbindet Thread-Geräte, und keine Hersteller-Cloud ist nötig.' },
      { type: 'plain-terms', content: 'Matter ist für lokalen Betrieb ausgelegt, aber ob Ihr Setup tatsächlich ohne Cloud bleibt, hängt davon ab, wie Sie Geräte einbinden und welchen Controller Sie nutzen. Ein Matter-Gerät in einen lokalen Controller wie Home Assistant zu koppeln – statt nur in eine Hersteller-App – hält die Steuerung in Ihrem eigenen Netzwerk.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Matter kann über einen lokalen Controller wie Home Assistant vollständig lokal laufen',
          'Thread-basierte Matter-Geräte benötigen einen Thread-Border-Router in Ihrem Netzwerk',
          'Binden Sie Geräte in Ihr lokales Fabric ein, nicht nur in eine Hersteller-Cloud-App',
          'Vermeiden Sie Cloud-Bridges, die die Steuerung über einen Hersteller-Server leiten',
          'Home Assistant fungiert als lokaler Matter-Controller für internetunabhängige Steuerung',
          'Manche Geräte bieten optionale Cloud-Funktionen, die Sie für lokale Steuerung ignorieren können',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Bedeutet Matter lokal?',
        content:
          '**Matter ist für lokale Steuerung ausgelegt, aber ob Ihr Setup lokal bleibt, hängt vom Controller und davon ab, wie Sie Geräte einbinden.** Das Koppeln an einen lokalen Controller hält die Steuerung in Ihrem Netzwerk.',
        items: [
          'Die Matter-Steuerung zwischen einem Gerät und einem lokalen Controller findet in Ihrem LAN statt.',
          'Nur eine Hersteller-App zu nutzen, kann einige Funktionen über deren Cloud leiten.',
          'Zum Protokoll-Hintergrund siehe [Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread-Border-Router',
        content:
          '**Thread-basierte Matter-Geräte benötigen einen Thread-Border-Router, um das Thread-Mesh mit Ihrem IP-Netzwerk zu verbinden.** Viele Hubs und manche Lautsprecher enthalten einen.',
        items: [
          'Ein Border-Router verbindet stromsparende Thread-Geräte mit Ihrem LAN.',
          'Matter-über-WLAN-Geräte brauchen kein Thread, doch Thread eignet sich für Akkugeräte.',
          'Prüfen Sie, ob Ihr Controller oder ein kompatibles Gerät einen Border-Router bereitstellt.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Nur-lokales Einbinden',
        content:
          '**Binden Sie Matter-Geräte direkt in Ihren lokalen Controller ein, damit die Steuerung in Ihrem Netzwerk bleibt.** Matters Multi-Admin-Funktion lässt ein Gerät mehr als einem Fabric beitreten.',
        numberedItems: [
          'Fügen Sie die Matter-Integration in Ihrem lokalen Controller hinzu (z. B. Home Assistant).',
          'Scannen Sie den Matter-QR-/Kopplungscode des Geräts vom Controller aus.',
          'Binden Sie es in Ihr lokales Fabric in Ihrem Netzwerk ein.',
          'Prüfen Sie, dass die Steuerung mit geschlossener Hersteller-App funktioniert.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Cloud-Bridges vermeiden',
        content:
          '**Vermeiden Sie Cloud-Bridges, die die Gerätesteuerung über einen Hersteller-Server leiten, was den lokalen Betrieb zunichtemacht.** Bevorzugen Sie direktes lokales Einbinden und lokale Controller.',
        items: [
          'Manche Ökosysteme binden Matter-Geräte über ihre Cloud ein – bevorzugen Sie stattdessen einen lokalen Controller.',
          'Halten Sie den Thread-Border-Router und Controller in Ihrem eigenen Netzwerk.',
          'Testen Sie, ob die Steuerung einen Internetausfall übersteht, um zu bestätigen, dass sie lokal ist.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Setup mit Home Assistant',
        content:
          '**Home Assistant fungiert als lokaler Matter-Controller, sodass Sie Geräte in ihn einbinden und ohne Hersteller-Cloud steuern.** Das ist der sauberste Weg zu internetunabhängigem Matter.',
        items: [
          'Nutzen Sie die Home-Assistant-Matter-Integration als Controller – siehe [Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Koppeln Sie einen Thread-Border-Router, damit Thread-Geräte Ihrem Netzwerk beitreten.',
          'Für das vollständige lokale Bild siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Setup-Wege im Vergleich',
        content:
          '**Lokales Einbinden in einen lokalen Controller ist internetunabhängig; das Koppeln nur über die Hersteller-Cloud nicht.** Wählen Sie den lokalen Weg.',
        columns: ['Setup-Weg', 'Nur lokal?', 'Braucht Cloud-Bridge?'],
        rows: [
          { 'Setup-Weg': 'In Home Assistant einbinden (lokaler Controller)', 'Nur lokal?': 'Ja', 'Braucht Cloud-Bridge?': 'Nein' },
          { 'Setup-Weg': 'Matter-über-Thread + lokaler Thread-Border-Router', 'Nur lokal?': 'Ja', 'Braucht Cloud-Bridge?': 'Nein' },
          { 'Setup-Weg': 'Koppeln nur über Hersteller-App', 'Nur lokal?': 'Teilweise', 'Braucht Cloud-Bridge?': 'Manchmal' },
          { 'Setup-Weg': 'Cloud-überbrücktes Ökosystem', 'Nur lokal?': 'Nein', 'Braucht Cloud-Bridge?': 'Ja' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Ist Matter immer lokal?', a: 'Matter ist für lokale Steuerung ausgelegt, aber ob Ihr Setup lokal bleibt, hängt vom Controller und dem Einbinden ab. Geräte in einen lokalen Controller wie Home Assistant zu koppeln hält die Steuerung in Ihrem Netzwerk; sich nur auf eine Hersteller-Cloud-App zu verlassen, kann Funktionen über die Cloud leiten.' },
          { q: 'Brauche ich einen Thread-Border-Router?', a: 'Nur für Thread-basierte Matter-Geräte, die das stromsparende Thread-Mesh nutzen. Ein Thread-Border-Router verbindet sie mit Ihrem IP-Netzwerk und ist in manchen Hubs und Lautsprechern eingebaut. Matter-über-WLAN-Geräte brauchen keinen.' },
          { q: 'Kann ich die Hersteller-App vermeiden?', a: 'Oft ja. Mit Matters Einbinden können Sie ein Gerät direkt in einen lokalen Controller wie Home Assistant koppeln und ohne die Hersteller-App steuern. Die Ersteinrichtung nutzt eventuell die App, doch die laufende Steuerung kann lokal sein.' },
          { q: 'Funktioniert Matter mit Home Assistant?', a: 'Ja. Home Assistant enthält eine Matter-Integration und kann als lokaler Matter-Controller fungieren, Geräte in Ihr lokales Fabric einbinden und ohne Hersteller-Cloud steuern.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Smart-Home-Protokolle erklärt](/de/smart-home/smart-home-protocols-explained) – Matter, Thread, Zigbee, Z-Wave',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der Local-First-Stack',
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – der lokale Matter-Controller',
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) – warum Internetunabhängigkeit zählt',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter & lokale Steuerung: Ein internetunabhängiges Smart Home (2026)',
      description: 'Matter und Thread 2026 für echte lokale Steuerung: Thread-Border-Router, nur-lokales Pairing, Cloud-Bridges vermeiden — Home-Assistant-Setup inklusive.',
      url: 'https://www.promptquorum.com/de/smart-home/matter-local-control-guide',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Lokale Steuerung' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Ist Matter immer lokal?', acceptedAnswer: { '@type': 'Answer', text: 'Matter ist für lokale Steuerung ausgelegt, aber ob Ihr Setup lokal bleibt, hängt vom Controller und dem Einbinden ab. Das Koppeln an einen lokalen Controller wie Home Assistant hält die Steuerung in Ihrem Netzwerk.' } },
        { '@type': 'Question', name: 'Brauche ich einen Thread-Border-Router?', acceptedAnswer: { '@type': 'Answer', text: 'Nur für Thread-basierte Matter-Geräte. Ein Thread-Border-Router verbindet sie mit Ihrem IP-Netzwerk und ist in manchen Hubs und Lautsprechern eingebaut. Matter-über-WLAN-Geräte brauchen keinen.' } },
        { '@type': 'Question', name: 'Kann ich die Hersteller-App vermeiden?', acceptedAnswer: { '@type': 'Answer', text: 'Oft ja. Mit Matters Einbinden können Sie ein Gerät direkt in einen lokalen Controller wie Home Assistant koppeln und ohne die Hersteller-App steuern.' } },
        { '@type': 'Question', name: 'Funktioniert Matter mit Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Home Assistant enthält eine Matter-Integration und kann als lokaler Matter-Controller ohne Hersteller-Cloud fungieren.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter y Control Local: Un Smart Home Independiente de Internet (2026)',
    seoTitle: 'Matter Control Local 2026: Smart Home sin Nube',
    intro:
      'Matter sobre Thread puede ejecutar un smart home genuinamente local mediante un controlador local como Home Assistant, sin necesidad de la nube del fabricante. Esta guía aclara el matiz de si Matter significa local, explica los routers de borde Thread y la vinculación solo-local, muestra cómo evitar puentes en la nube y recorre una configuración local de Matter con Home Assistant.',
    metaDescription:
      'Matter y Thread 2026 para smart home local genuino: Thread border routers, solo emparejamiento local, sin puentes cloud — configuración Home Assistant incluida.',
    twitterDescription:
      'Matter y Thread pueden funcionar totalmente local mediante un controlador como Home Assistant, sin nube del fabricante. Cómo vincular en local y evitar puentes en la nube.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios que construyen una configuración Matter independiente de internet',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter control local sin nube',
      'matter thread local',
      'matter home assistant local',
      'router de borde thread',
      'smart home independiente de internet',
    ],
    leadAnswerBlock:
      '**Matter sobre Thread puede funcionar totalmente en local mediante un controlador local como Home Assistant: vinculas el dispositivo a tu fabric local, sin necesidad de la nube del fabricante.** Un router de borde Thread conecta los dispositivos Thread a tu red; Home Assistant actúa como el controlador local.',
    quickAnswerTop: {
      es: {
        question: '¿Funciona Matter sin la nube?',
        answer:
          'Matter puede funcionar totalmente en local: cuando vinculas un dispositivo Matter a un controlador local como Home Assistant, el control ocurre en tu red sin la nube del fabricante. Los dispositivos Matter basados en Thread necesitan un router de borde Thread. Algunos dispositivos también ofrecen funciones en la nube, pero el control local no las requiere.',
        bullets: [
          'Matter puede funcionar en local vía un controlador local (p. ej. Home Assistant)',
          'Los dispositivos Thread necesitan un router de borde Thread',
          'Vincula los dispositivos a tu fabric local, no a una app del fabricante',
          'Evita los puentes en la nube para mantener el control independiente de internet',
          'Algunos dispositivos añaden funciones en la nube opcionales que puedes omitir',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: '¿Matter significa local?', anchor: 'matter-local' },
      { label: 'Routers de borde Thread', anchor: 'border-routers' },
      { label: 'Vinculación solo-local', anchor: 'commissioning' },
      { label: 'Evitar puentes en la nube', anchor: 'avoid-bridges' },
      { label: 'Configuración con Home Assistant', anchor: 'ha-setup' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter sobre Thread funciona totalmente en local mediante un controlador como Home Assistant; un router de borde Thread enlaza los dispositivos Thread y no se necesita la nube del fabricante.' },
      { type: 'plain-terms', content: 'Matter está diseñado para funcionar en local, pero si tu configuración realmente se mantiene fuera de la nube depende de cómo vincules los dispositivos y qué controlador uses. Emparejar un dispositivo Matter a un controlador local como Home Assistant —en lugar de solo a una app del fabricante— mantiene el control en tu propia red.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Matter puede funcionar totalmente en local mediante un controlador local como Home Assistant',
          'Los dispositivos Matter basados en Thread requieren un router de borde Thread en tu red',
          'Vincula los dispositivos a tu fabric local, no solo a una app en la nube del fabricante',
          'Evita los puentes en la nube que enrutan el control por un servidor del fabricante',
          'Home Assistant actúa como controlador Matter local para un control independiente de internet',
          'Algunos dispositivos ofrecen funciones en la nube opcionales que puedes ignorar para el control local',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: '¿Matter significa local?',
        content:
          '**Matter está diseñado para el control local, pero si tu configuración se mantiene local depende del controlador y de cómo vincules los dispositivos.** Emparejar a un controlador local mantiene el control en tu red.',
        items: [
          'El control Matter entre un dispositivo y un controlador local ocurre en tu LAN.',
          'Usar solo una app del fabricante puede enrutar algunas funciones por la nube de ese fabricante.',
          'Para el contexto del protocolo, consulta [protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Routers de borde Thread',
        content:
          '**Los dispositivos Matter basados en Thread necesitan un router de borde Thread para puentear la malla Thread a tu red IP.** Muchos hubs y algunos altavoces incluyen uno.',
        items: [
          'Un router de borde conecta los dispositivos Thread de bajo consumo a tu LAN.',
          'Los dispositivos Matter-sobre-Wi-Fi no necesitan Thread, pero Thread encaja con los dispositivos a batería.',
          'Comprueba que tu controlador o un dispositivo compatible proporcione un router de borde.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Vinculación solo-local',
        content:
          '**Vincula los dispositivos Matter directamente a tu controlador local para que el control se quede en tu red.** La función multi-admin de Matter permite que un dispositivo se una a más de un fabric.',
        numberedItems: [
          'Añade la integración Matter en tu controlador local (p. ej. Home Assistant).',
          'Escanea el código QR/de emparejamiento Matter del dispositivo desde el controlador.',
          'Vincúlalo a tu fabric local en tu red.',
          'Verifica que el control funciona con la app del fabricante cerrada.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Evitar puentes en la nube',
        content:
          '**Evita los puentes en la nube que retransmiten el control del dispositivo por un servidor del fabricante, lo que anula el funcionamiento local.** Prefiere la vinculación local directa y los controladores locales.',
        items: [
          'Algunos ecosistemas puentean los dispositivos Matter por su nube: prefiere un controlador local en su lugar.',
          'Mantén el router de borde Thread y el controlador en tu propia red.',
          'Prueba que el control sobreviva a una caída de internet para confirmar que es local.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Configuración con Home Assistant',
        content:
          '**Home Assistant actúa como controlador Matter local, así que vinculas los dispositivos a él y los controlas sin la nube del fabricante.** Es el camino más limpio hacia un Matter independiente de internet.',
        items: [
          'Usa la integración Matter de Home Assistant como tu controlador — consulta [Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Empareja un router de borde Thread para que los dispositivos Thread se unan a tu red.',
          'Para la imagen local completa, consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Caminos de configuración comparados',
        content:
          '**La vinculación local a un controlador local es independiente de internet; el emparejamiento solo a la nube del fabricante no lo es.** Elige el camino local.',
        columns: ['Camino de configuración', '¿Solo local?', '¿Necesita puente en la nube?'],
        rows: [
          { 'Camino de configuración': 'Vincular a Home Assistant (controlador local)', '¿Solo local?': 'Sí', '¿Necesita puente en la nube?': 'No' },
          { 'Camino de configuración': 'Matter-sobre-Thread + router de borde Thread local', '¿Solo local?': 'Sí', '¿Necesita puente en la nube?': 'No' },
          { 'Camino de configuración': 'Emparejamiento solo con app del fabricante', '¿Solo local?': 'Parcial', '¿Necesita puente en la nube?': 'A veces' },
          { 'Camino de configuración': 'Ecosistema puenteado por la nube', '¿Solo local?': 'No', '¿Necesita puente en la nube?': 'Sí' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Matter es siempre local?', a: 'Matter está diseñado para el control local, pero si tu configuración se mantiene local depende del controlador y la vinculación. Emparejar los dispositivos a un controlador local como Home Assistant mantiene el control en tu red; depender solo de una app en la nube del fabricante puede enrutar funciones por la nube.' },
          { q: '¿Necesito un router de borde Thread?', a: 'Solo para los dispositivos Matter basados en Thread, que usan la malla Thread de bajo consumo. Un router de borde Thread los puentea a tu red IP y viene integrado en algunos hubs y altavoces. Los dispositivos Matter-sobre-Wi-Fi no necesitan uno.' },
          { q: '¿Puedo evitar la app del fabricante?', a: 'A menudo, sí. Con la vinculación de Matter puedes emparejar un dispositivo directamente a un controlador local como Home Assistant y controlarlo sin la app del fabricante. La configuración inicial puede usar la app, pero el control continuo puede ser local.' },
          { q: '¿Funciona Matter con Home Assistant?', a: 'Sí. Home Assistant incluye una integración Matter y puede actuar como controlador Matter local, vinculando los dispositivos a tu fabric local y controlándolos sin la nube del fabricante.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Protocolos del smart home explicados](/es/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el stack local-first',
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — el controlador Matter local',
          '[Por qué un smart home local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — por qué importa la independencia de internet',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter y Control Local: Un Smart Home Independiente de Internet (2026)',
      description: 'Matter y Thread 2026 para smart home local genuino: Thread border routers, solo emparejamiento local, sin puentes cloud — configuración Home Assistant incluida.',
      url: 'https://www.promptquorum.com/es/smart-home/matter-local-control-guide',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Control local' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Matter es siempre local?', acceptedAnswer: { '@type': 'Answer', text: 'Matter está diseñado para el control local, pero si tu configuración se mantiene local depende del controlador y la vinculación. Emparejar a un controlador local como Home Assistant mantiene el control en tu red.' } },
        { '@type': 'Question', name: '¿Necesito un router de borde Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Solo para los dispositivos Matter basados en Thread. Un router de borde Thread los puentea a tu red IP y viene integrado en algunos hubs y altavoces. Los dispositivos Matter-sobre-Wi-Fi no necesitan uno.' } },
        { '@type': 'Question', name: '¿Puedo evitar la app del fabricante?', acceptedAnswer: { '@type': 'Answer', text: 'A menudo, sí. Con la vinculación de Matter puedes emparejar un dispositivo directamente a un controlador local como Home Assistant y controlarlo sin la app del fabricante.' } },
        { '@type': 'Question', name: '¿Funciona Matter con Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Home Assistant incluye una integración Matter y puede actuar como controlador Matter local sin la nube del fabricante.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter와 로컬 제어: 인터넷 독립 스마트홈 구축 가이드 (2026)',
    seoTitle: 'Matter 로컬 제어 2026: 클라우드 없는 스마트홈',
    intro:
      'Matter over Thread는 Home Assistant와 같은 로컬 컨트롤러를 통해 진정한 로컬 스마트홈을 구동할 수 있습니다. 제조사 클라우드는 필요하지 않습니다. 이 가이드는 Matter가 로컬을 의미하는지에 대한 미묘한 차이를 명확히 정리하고, Thread 보더 라우터와 로컬 전용 커미셔닝을 설명하며, 클라우드 브리지를 피하는 방법과 Home Assistant를 활용한 로컬 Matter 설정 절차를 단계별로 안내합니다.',
    metaDescription:
      'Matter+Thread 로컬 스마트홈 제어 2026: Thread 보더 라우터 설정, 로컬 전용 커미셔닝, 클라우드 브리지 회피 방법, Home Assistant 설정 포함.',
    twitterDescription:
      'Matter와 Thread는 Home Assistant 같은 컨트롤러를 통해 완전히 로컬로 작동합니다. 제조사 클라우드 불필요. 로컬 커미셔닝 방법과 클라우드 브리지 회피법을 안내합니다.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '인터넷 독립 Matter 구성을 구축하는 사용자',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter 로컬 제어 클라우드 없음',
      'matter thread 로컬',
      'matter home assistant 로컬',
      'thread 보더 라우터',
      '인터넷 독립 스마트홈',
    ],
    leadAnswerBlock:
      '**Matter over Thread는 Home Assistant와 같은 로컬 컨트롤러를 통해 완전히 로컬로 작동할 수 있습니다. 기기를 로컬 패브릭에 커미셔닝하면 제조사 클라우드가 필요하지 않습니다.** Thread 보더 라우터가 Thread 기기를 네트워크에 연결하고, Home Assistant가 로컬 컨트롤러 역할을 합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Matter는 클라우드 없이 작동합니까?',
        answer:
          'Matter는 완전히 로컬로 작동할 수 있습니다. Matter 기기를 Home Assistant와 같은 로컬 컨트롤러에 커미셔닝하면 제조사 클라우드 없이 네트워크 내에서 제어가 이루어집니다. Thread 기반 Matter 기기는 Thread 보더 라우터가 필요합니다. 일부 기기는 클라우드 기능도 제공하지만, 로컬 제어에는 필요하지 않습니다.',
        bullets: [
          'Matter는 로컬 컨트롤러(예: Home Assistant)를 통해 로컬로 작동 가능합니다',
          'Thread 기기에는 Thread 보더 라우터가 필요합니다',
          '기기를 제조사 앱이 아닌 로컬 패브릭에 커미셔닝하십시오',
          '클라우드 브리지를 피해 제어를 인터넷 독립 상태로 유지하십시오',
          '일부 기기는 건너뛸 수 있는 선택적 클라우드 기능을 추가합니다',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: 'Matter는 로컬을 의미합니까?', anchor: 'matter-local' },
      { label: 'Thread 보더 라우터', anchor: 'border-routers' },
      { label: '로컬 전용 커미셔닝', anchor: 'commissioning' },
      { label: '클라우드 브리지 회피', anchor: 'avoid-bridges' },
      { label: 'Home Assistant 설정', anchor: 'ha-setup' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter over Thread는 Home Assistant와 같은 컨트롤러를 통해 완전히 로컬로 작동합니다. Thread 보더 라우터가 Thread 기기를 연결하며 제조사 클라우드는 필요하지 않습니다.' },
      { type: 'plain-terms', content: 'Matter는 로컬 작동을 위해 설계되었지만, 설정이 실제로 클라우드를 사용하지 않는지 여부는 기기를 어떻게 커미셔닝하고 어떤 컨트롤러를 사용하는지에 따라 달라집니다. Matter 기기를 제조사 앱만이 아닌 Home Assistant와 같은 로컬 컨트롤러에 페어링하면 제어가 자신의 네트워크 내에 유지됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          'Matter는 Home Assistant와 같은 로컬 컨트롤러를 통해 완전히 로컬로 작동할 수 있습니다',
          'Thread 기반 Matter 기기는 네트워크에 Thread 보더 라우터가 필요합니다',
          '기기를 제조사 클라우드 앱만이 아닌 로컬 패브릭에 커미셔닝하십시오',
          '제어를 제조사 서버를 통해 라우팅하는 클라우드 브리지를 피하십시오',
          'Home Assistant는 인터넷 독립 제어를 위한 로컬 Matter 컨트롤러 역할을 합니다',
          '일부 기기는 로컬 제어에서 무시할 수 있는 선택적 클라우드 기능을 제공합니다',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Matter는 로컬을 의미합니까?',
        content:
          '**Matter는 로컬 제어를 위해 설계되었지만, 설정이 로컬로 유지되는지 여부는 컨트롤러와 기기 커미셔닝 방식에 따라 달라집니다.** 로컬 컨트롤러에 페어링하면 제어가 네트워크 내에 유지됩니다.',
        items: [
          '기기와 로컬 컨트롤러 간의 Matter 제어는 LAN에서 이루어집니다.',
          '제조사 앱만 사용하면 일부 기능이 해당 제조사의 클라우드를 통해 라우팅될 수 있습니다.',
          '프로토콜 배경은 [스마트홈 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained)을 참조하십시오.',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread 보더 라우터',
        content:
          '**Thread 기반 Matter 기기는 Thread 메시를 IP 네트워크에 브리징하는 Thread 보더 라우터가 필요합니다.** 많은 허브와 일부 스피커에 내장되어 있습니다.',
        items: [
          '보더 라우터는 저전력 Thread 기기를 LAN에 연결합니다.',
          'Matter-over-Wi-Fi 기기에는 Thread가 필요 없지만, Thread는 배터리 기기에 적합합니다.',
          '컨트롤러 또는 호환 기기가 보더 라우터를 제공하는지 확인하십시오.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: '로컬 전용 커미셔닝',
        content:
          '**제어가 네트워크 내에 유지되도록 Matter 기기를 로컬 컨트롤러에 직접 커미셔닝하십시오.** Matter의 멀티-어드민 기능을 통해 기기가 여러 패브릭에 참여할 수 있습니다.',
        numberedItems: [
          '로컬 컨트롤러(예: Home Assistant)에 Matter 통합을 추가하십시오.',
          '컨트롤러에서 기기의 Matter QR/페어링 코드를 스캔하십시오.',
          '네트워크의 로컬 패브릭에 커미셔닝하십시오.',
          '제조사 앱을 닫은 상태에서 제어가 작동하는지 확인하십시오.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: '클라우드 브리지 회피',
        content:
          '**기기 제어를 제조사 서버를 통해 중계하는 클라우드 브리지는 로컬 작동을 무력화하므로 피하십시오.** 직접 로컬 커미셔닝과 로컬 컨트롤러를 선호하십시오.',
        items: [
          '일부 에코시스템은 클라우드를 통해 Matter 기기를 브리징합니다. 대신 로컬 컨트롤러를 선호하십시오.',
          'Thread 보더 라우터와 컨트롤러를 자신의 네트워크에 유지하십시오.',
          '인터넷 중단 시에도 제어가 유지되는지 테스트하여 로컬 여부를 확인하십시오.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Home Assistant 설정',
        content:
          '**Home Assistant는 로컬 Matter 컨트롤러 역할을 하므로 기기를 커미셔닝하고 제조사 클라우드 없이 제어합니다.** 이것이 인터넷 독립 Matter로 가는 가장 깔끔한 경로입니다.',
        items: [
          'Home Assistant Matter 통합을 컨트롤러로 사용하십시오. [Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          'Thread 보더 라우터를 페어링하여 Thread 기기가 네트워크에 참여하도록 하십시오.',
          '전체 로컬 그림은 [로컬 스마트홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide)를 참조하십시오.',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: '설정 경로 비교',
        content:
          '**로컬 컨트롤러에 로컬 커미셔닝하는 방식은 인터넷 독립적입니다. 제조사 클라우드 전용 페어링은 그렇지 않습니다.** 로컬 경로를 선택하십시오.',
        columns: ['설정 경로', '로컬 전용?', '클라우드 브리지 필요?'],
        rows: [
          { '설정 경로': 'Home Assistant에 커미셔닝(로컬 컨트롤러)', '로컬 전용?': '예', '클라우드 브리지 필요?': '아니오' },
          { '설정 경로': 'Matter-over-Thread + 로컬 Thread 보더 라우터', '로컬 전용?': '예', '클라우드 브리지 필요?': '아니오' },
          { '설정 경로': '제조사 앱 전용 페어링', '로컬 전용?': '부분', '클라우드 브리지 필요?': '경우에 따라' },
          { '설정 경로': '클라우드 브리지 에코시스템', '로컬 전용?': '아니오', '클라우드 브리지 필요?': '예' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Matter는 항상 로컬입니까?', a: 'Matter는 로컬 제어를 위해 설계되었지만, 설정이 로컬로 유지되는지 여부는 컨트롤러와 커미셔닝에 따라 달라집니다. Home Assistant와 같은 로컬 컨트롤러에 기기를 페어링하면 제어가 네트워크 내에 유지됩니다. 제조사 클라우드 앱에만 의존하면 기능이 클라우드를 통해 라우팅될 수 있습니다.' },
          { q: 'Thread 보더 라우터가 필요합니까?', a: '저전력 Thread 메시를 사용하는 Thread 기반 Matter 기기에만 필요합니다. Thread 보더 라우터는 해당 기기를 IP 네트워크에 브리징하며, 일부 허브와 스피커에 내장되어 있습니다. Matter-over-Wi-Fi 기기에는 필요하지 않습니다.' },
          { q: '제조사 앱을 피할 수 있습니까?', a: '대체로 가능합니다. Matter 커미셔닝을 통해 Home Assistant와 같은 로컬 컨트롤러에 기기를 직접 페어링하고 제조사 앱 없이 제어할 수 있습니다. 초기 설정에서 앱을 사용할 수도 있지만, 일상적인 제어는 로컬로 할 수 있습니다.' },
          { q: 'Matter는 Home Assistant에서 작동합니까?', a: '예. Home Assistant는 Matter 통합을 포함하며 로컬 Matter 컨트롤러 역할을 할 수 있습니다. 기기를 로컬 패브릭에 커미셔닝하고 제조사 클라우드 없이 제어합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[스마트홈 프로토콜 설명](/ko/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[로컬 스마트홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 로컬 우선 구성',
          '[Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started) — 로컬 Matter 컨트롤러',
          '[로컬 스마트홈이 클라우드보다 나은 이유](/ko/smart-home/why-local-smart-home-beats-cloud) — 인터넷 독립의 중요성',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter와 로컬 제어: 인터넷 독립 스마트홈 구축 가이드 (2026)',
      description: 'Matter+Thread 로컬 스마트홈 제어 2026: Thread 보더 라우터 설정, 로컬 전용 커미셔닝, 클라우드 브리지 회피 방법, Home Assistant 설정 포함.',
      url: 'https://www.promptquorum.com/ko/smart-home/matter-local-control-guide',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: '로컬 제어' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Matter는 항상 로컬입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Matter는 로컬 제어를 위해 설계되었지만, 설정이 로컬로 유지되는지 여부는 컨트롤러와 커미셔닝에 따라 달라집니다. Home Assistant와 같은 로컬 컨트롤러에 페어링하면 제어가 네트워크 내에 유지됩니다.' } },
        { '@type': 'Question', name: 'Thread 보더 라우터가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: 'Thread 기반 Matter 기기에만 필요합니다. Thread 보더 라우터는 해당 기기를 IP 네트워크에 브리징하며 일부 허브와 스피커에 내장되어 있습니다. Matter-over-Wi-Fi 기기에는 필요하지 않습니다.' } },
        { '@type': 'Question', name: '제조사 앱을 피할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '대체로 가능합니다. Matter 커미셔닝으로 Home Assistant와 같은 로컬 컨트롤러에 기기를 직접 페어링하고 제조사 앱 없이 제어할 수 있습니다.' } },
        { '@type': 'Question', name: 'Matter는 Home Assistant에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '예. Home Assistant는 Matter 통합을 포함하며 제조사 클라우드 없이 로컬 Matter 컨트롤러 역할을 할 수 있습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter et Contrôle Local : Une Maison Connectée Indépendante d\'Internet (2026)',
    seoTitle: 'Matter Contrôle Local 2026 : Maison Connectée sans Cloud',
    intro:
      'Matter sur Thread peut faire tourner une maison connectée véritablement locale via un contrôleur local comme Home Assistant — sans cloud du fabricant. Ce guide clarifie la nuance de savoir si Matter signifie local, explique les routeurs de bordure Thread et l\'appairage uniquement local, montre comment éviter les ponts cloud et détaille une configuration Matter locale avec Home Assistant.',
    metaDescription:
      'Matter + Thread pour contrôle vraiment local 2026 : Thread border routers, appairage local seul, éviter les ponts cloud — configuration Home Assistant incluse.',
    twitterDescription:
      'Matter et Thread peuvent tourner entièrement en local via un contrôleur comme Home Assistant — sans cloud du fabricant. Comment appairer en local et éviter les ponts cloud.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs construisant une configuration Matter indépendante d\'internet',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter contrôle local sans cloud',
      'matter thread local',
      'matter home assistant local',
      'routeur de bordure thread',
      'maison connectée indépendante d\'internet',
    ],
    leadAnswerBlock:
      '**Matter sur Thread peut tourner entièrement en local via un contrôleur local tel que Home Assistant — vous appairez l\'appareil à votre fabric local, sans cloud du fabricant.** Un routeur de bordure Thread connecte les appareils Thread à votre réseau ; Home Assistant agit comme contrôleur local.',
    quickAnswerTop: {
      fr: {
        question: 'Matter fonctionne-t-il sans le cloud ?',
        answer:
          'Matter peut fonctionner entièrement en local : lorsque vous appairez un appareil Matter à un contrôleur local comme Home Assistant, le contrôle se fait sur votre réseau sans cloud du fabricant. Les appareils Matter basés sur Thread ont besoin d\'un routeur de bordure Thread. Certains appareils offrent aussi des fonctions cloud, mais le contrôle local ne les nécessite pas.',
        bullets: [
          'Matter peut tourner en local via un contrôleur local (ex. Home Assistant)',
          'Les appareils Thread ont besoin d\'un routeur de bordure Thread',
          'Appairez les appareils à votre fabric local, pas à une app du fabricant',
          'Évitez les ponts cloud pour garder le contrôle indépendant d\'internet',
          'Certains appareils ajoutent des fonctions cloud optionnelles que vous pouvez ignorer',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Matter signifie-t-il local ?', anchor: 'matter-local' },
      { label: 'Routeurs de bordure Thread', anchor: 'border-routers' },
      { label: 'Appairage uniquement local', anchor: 'commissioning' },
      { label: 'Éviter les ponts cloud', anchor: 'avoid-bridges' },
      { label: 'Configuration avec Home Assistant', anchor: 'ha-setup' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter sur Thread tourne entièrement en local via un contrôleur comme Home Assistant ; un routeur de bordure Thread relie les appareils Thread, et aucun cloud du fabricant n\'est nécessaire.' },
      { type: 'plain-terms', content: 'Matter est conçu pour fonctionner en local, mais le fait que votre configuration reste réellement hors du cloud dépend de la façon dont vous appairez les appareils et du contrôleur utilisé. Appairer un appareil Matter à un contrôleur local comme Home Assistant — plutôt qu\'à une seule app du fabricant — garde le contrôle sur votre propre réseau.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Matter peut tourner entièrement en local via un contrôleur local tel que Home Assistant',
          'Les appareils Matter basés sur Thread nécessitent un routeur de bordure Thread sur votre réseau',
          'Appairez les appareils à votre fabric local, pas seulement à une app cloud du fabricant',
          'Évitez les ponts cloud qui acheminent le contrôle via un serveur du fabricant',
          'Home Assistant agit comme contrôleur Matter local pour un contrôle indépendant d\'internet',
          'Certains appareils offrent des fonctions cloud optionnelles que vous pouvez ignorer pour le contrôle local',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Matter signifie-t-il local ?',
        content:
          '**Matter est conçu pour le contrôle local, mais le fait que votre configuration reste locale dépend du contrôleur et de la façon dont vous appairez les appareils.** Appairer à un contrôleur local garde le contrôle sur votre réseau.',
        items: [
          'Le contrôle Matter entre un appareil et un contrôleur local se fait sur votre LAN.',
          'N\'utiliser qu\'une app du fabricant peut acheminer certaines fonctions via le cloud de ce fabricant.',
          'Pour le contexte du protocole, voir [les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Routeurs de bordure Thread',
        content:
          '**Les appareils Matter basés sur Thread ont besoin d\'un routeur de bordure Thread pour relier le maillage Thread à votre réseau IP.** De nombreux hubs et certaines enceintes en intègrent un.',
        items: [
          'Un routeur de bordure connecte les appareils Thread basse consommation à votre LAN.',
          'Les appareils Matter-sur-Wi-Fi n\'ont pas besoin de Thread, mais Thread convient aux appareils sur batterie.',
          'Vérifiez que votre contrôleur ou un appareil compatible fournit un routeur de bordure.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Appairage uniquement local',
        content:
          '**Appairez les appareils Matter directement à votre contrôleur local pour que le contrôle reste sur votre réseau.** La fonction multi-admin de Matter permet à un appareil de rejoindre plus d\'un fabric.',
        numberedItems: [
          'Ajoutez l\'intégration Matter dans votre contrôleur local (ex. Home Assistant).',
          'Scannez le code QR/d\'appairage Matter de l\'appareil depuis le contrôleur.',
          'Appairez-le à votre fabric local sur votre réseau.',
          'Vérifiez que le contrôle fonctionne avec l\'app du fabricant fermée.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Éviter les ponts cloud',
        content:
          '**Évitez les ponts cloud qui relaient le contrôle de l\'appareil via un serveur du fabricant, ce qui annule le fonctionnement local.** Préférez l\'appairage local direct et les contrôleurs locaux.',
        items: [
          'Certains écosystèmes relient les appareils Matter via leur cloud — préférez plutôt un contrôleur local.',
          'Gardez le routeur de bordure Thread et le contrôleur sur votre propre réseau.',
          'Testez que le contrôle survit à une coupure internet pour confirmer qu\'il est local.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Configuration avec Home Assistant',
        content:
          '**Home Assistant agit comme contrôleur Matter local, vous appairez donc les appareils à lui et les contrôlez sans cloud du fabricant.** C\'est la voie la plus propre vers un Matter indépendant d\'internet.',
        items: [
          'Utilisez l\'intégration Matter de Home Assistant comme contrôleur — voir [Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Appairez un routeur de bordure Thread pour que les appareils Thread rejoignent votre réseau.',
          'Pour la vue d\'ensemble locale, voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Voies de configuration comparées',
        content:
          '**L\'appairage local à un contrôleur local est indépendant d\'internet ; l\'appairage uniquement au cloud du fabricant ne l\'est pas.** Choisissez la voie locale.',
        columns: ['Voie de configuration', 'Uniquement local ?', 'Besoin d\'un pont cloud ?'],
        rows: [
          { 'Voie de configuration': 'Appairer à Home Assistant (contrôleur local)', 'Uniquement local ?': 'Oui', 'Besoin d\'un pont cloud ?': 'Non' },
          { 'Voie de configuration': 'Matter-sur-Thread + routeur de bordure Thread local', 'Uniquement local ?': 'Oui', 'Besoin d\'un pont cloud ?': 'Non' },
          { 'Voie de configuration': 'Appairage uniquement via app du fabricant', 'Uniquement local ?': 'Partiel', 'Besoin d\'un pont cloud ?': 'Parfois' },
          { 'Voie de configuration': 'Écosystème relié par le cloud', 'Uniquement local ?': 'Non', 'Besoin d\'un pont cloud ?': 'Oui' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Matter est-il toujours local ?', a: 'Matter est conçu pour le contrôle local, mais le fait que votre configuration reste locale dépend du contrôleur et de l\'appairage. Appairer les appareils à un contrôleur local comme Home Assistant garde le contrôle sur votre réseau ; ne compter que sur une app cloud du fabricant peut acheminer des fonctions via le cloud.' },
          { q: 'Ai-je besoin d\'un routeur de bordure Thread ?', a: 'Seulement pour les appareils Matter basés sur Thread, qui utilisent le maillage Thread basse consommation. Un routeur de bordure Thread les relie à votre réseau IP et est intégré à certains hubs et enceintes. Les appareils Matter-sur-Wi-Fi n\'en ont pas besoin.' },
          { q: 'Puis-je éviter l\'app du fabricant ?', a: 'Souvent, oui. Avec l\'appairage de Matter, vous pouvez appairer un appareil directement à un contrôleur local comme Home Assistant et le contrôler sans l\'app du fabricant. La configuration initiale peut utiliser l\'app, mais le contrôle continu peut être local.' },
          { q: 'Matter fonctionne-t-il avec Home Assistant ?', a: 'Oui. Home Assistant inclut une intégration Matter et peut agir comme contrôleur Matter local, appairant les appareils à votre fabric local et les contrôlant sans cloud du fabricant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Les protocoles de la maison connectée expliqués](/fr/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — le stack local-first',
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — le contrôleur Matter local',
          '[Pourquoi une maison connectée locale bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — pourquoi l\'indépendance d\'internet compte',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter et Contrôle Local : Une Maison Connectée Indépendante d\'Internet (2026)',
      description: 'Matter + Thread pour contrôle vraiment local 2026 : Thread border routers, appairage local seul, éviter les ponts cloud — configuration Home Assistant incluse.',
      url: 'https://www.promptquorum.com/fr/smart-home/matter-local-control-guide',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Contrôle local' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Matter est-il toujours local ?', acceptedAnswer: { '@type': 'Answer', text: 'Matter est conçu pour le contrôle local, mais le fait que votre configuration reste locale dépend du contrôleur et de l\'appairage. Appairer à un contrôleur local comme Home Assistant garde le contrôle sur votre réseau.' } },
        { '@type': 'Question', name: 'Ai-je besoin d\'un routeur de bordure Thread ?', acceptedAnswer: { '@type': 'Answer', text: 'Seulement pour les appareils Matter basés sur Thread. Un routeur de bordure Thread les relie à votre réseau IP et est intégré à certains hubs et enceintes. Les appareils Matter-sur-Wi-Fi n\'en ont pas besoin.' } },
        { '@type': 'Question', name: 'Puis-je éviter l\'app du fabricant ?', acceptedAnswer: { '@type': 'Answer', text: 'Souvent, oui. Avec l\'appairage de Matter, vous pouvez appairer un appareil directement à un contrôleur local comme Home Assistant et le contrôler sans l\'app du fabricant.' } },
        { '@type': 'Question', name: 'Matter fonctionne-t-il avec Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Home Assistant inclut une intégration Matter et peut agir comme contrôleur Matter local sans cloud du fabricant.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter とローカル制御：インターネットに依存しないスマートホーム（2026）',
    seoTitle: 'Matter ローカル制御 2026：クラウド不要のスマートホーム',
    intro:
      'Matter over Thread は、Home Assistant のようなローカルコントローラーを通じて真にローカルなスマートホームを動かせます——メーカーのクラウドは不要です。本ガイドは、Matter がローカルを意味するのかという機微を整理し、Thread ボーダールーターとローカルのみのコミッショニングを説明し、クラウドブリッジの回避方法を示し、Home Assistant でのローカル Matter 構成を順を追って解説します。',
    metaDescription:
      'MatterとThreadによるローカル制御の完全ガイド（2026年）：Threadボーダールーターの詳しい設定手順、クラウドブリッジを一切使わないローカルのみのコミッショニング手順、Home Assistantでの構成方法をステップごとに解説。',
    twitterDescription:
      'Matter と Thread は、Home Assistant のようなコントローラーで完全にローカルに動作できます——メーカーのクラウド不要。ローカルでコミッショニングし、クラウドブリッジを避ける方法。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'インターネットに依存しない Matter 構成を作るユーザー',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter ローカル制御 クラウド不要',
      'matter thread ローカル',
      'matter home assistant ローカル',
      'thread ボーダールーター',
      'インターネット非依存 スマートホーム',
    ],
    leadAnswerBlock:
      '**Matter over Thread は、Home Assistant のようなローカルコントローラーを通じて完全にローカルに動作できます——機器を自分のローカルファブリックにコミッショニングし、メーカーのクラウドは不要です。** Thread ボーダールーターが Thread 機器をネットワークに接続し、Home Assistant がローカルコントローラーとして機能します。',
    quickAnswerTop: {
      ja: {
        question: 'Matter はクラウドなしで動きますか？',
        answer:
          'Matter は完全にローカルで動作できます：Matter 機器を Home Assistant のようなローカルコントローラーにコミッショニングすると、制御はメーカーのクラウドなしにあなたのネットワーク上で行われます。Thread ベースの Matter 機器は Thread ボーダールーターが必要です。一部の機器はクラウド機能も提供しますが、ローカル制御には不要です。',
        bullets: [
          'Matter はローカルコントローラー（例：Home Assistant）経由でローカルに動作できる',
          'Thread 機器は Thread ボーダールーターが必要',
          '機器はメーカーのアプリではなく、自分のローカルファブリックにコミッショニングする',
          '制御をインターネット非依存に保つため、クラウドブリッジを避ける',
          '一部の機器は省略できる任意のクラウド機能を追加する',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'Matter はローカルを意味するか', anchor: 'matter-local' },
      { label: 'Thread ボーダールーター', anchor: 'border-routers' },
      { label: 'ローカルのみのコミッショニング', anchor: 'commissioning' },
      { label: 'クラウドブリッジの回避', anchor: 'avoid-bridges' },
      { label: 'Home Assistant での構成', anchor: 'ha-setup' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter over Thread は Home Assistant のようなコントローラー経由で完全にローカルに動作し、Thread ボーダールーターが Thread 機器をつなぎ、メーカーのクラウドは不要です。' },
      { type: 'plain-terms', content: 'Matter はローカル動作を前提に設計されていますが、構成が実際にクラウドを使わずに済むかは、機器をどうコミッショニングし、どのコントローラーを使うかによります。Matter 機器をメーカーのアプリだけでなく Home Assistant のようなローカルコントローラーに接続すれば、制御は自分のネットワーク上にとどまります。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Matter は Home Assistant のようなローカルコントローラー経由で完全にローカルに動作できる',
          'Thread ベースの Matter 機器はネットワーク上に Thread ボーダールーターを必要とする',
          '機器はメーカーのクラウドアプリだけでなく、自分のローカルファブリックにコミッショニングする',
          '制御をメーカーのサーバー経由にするクラウドブリッジを避ける',
          'Home Assistant はインターネット非依存の制御のためのローカル Matter コントローラーとして機能する',
          '一部の機器はローカル制御では無視できる任意のクラウド機能を提供する',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Matter はローカルを意味するか',
        content:
          '**Matter はローカル制御向けに設計されていますが、構成がローカルにとどまるかはコントローラーと機器のコミッショニング方法次第です。** ローカルコントローラーに接続すれば、制御はあなたのネットワーク上にとどまります。',
        items: [
          '機器とローカルコントローラー間の Matter 制御は、あなたの LAN 上で行われます。',
          'メーカーのアプリだけを使うと、一部の機能がそのメーカーのクラウド経由になり得ます。',
          'プロトコルの背景は[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained)を参照。',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread ボーダールーター',
        content:
          '**Thread ベースの Matter 機器は、Thread メッシュを IP ネットワークに橋渡しする Thread ボーダールーターが必要です。** 多くのハブや一部のスピーカーに内蔵されています。',
        items: [
          'ボーダールーターは低消費電力の Thread 機器を LAN に接続します。',
          'Matter-over-Wi-Fi 機器に Thread は不要ですが、Thread は電池駆動機器に適します。',
          'コントローラーまたは互換機器がボーダールーターを提供するか確認しましょう。',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'ローカルのみのコミッショニング',
        content:
          '**制御がネットワーク上にとどまるよう、Matter 機器を直接ローカルコントローラーにコミッショニングしましょう。** Matter のマルチアドミン機能は、機器が複数のファブリックに参加することを可能にします。',
        numberedItems: [
          'ローカルコントローラー（例：Home Assistant）に Matter 統合を追加します。',
          'コントローラーから機器の Matter QR／ペアリングコードをスキャンします。',
          'ネットワーク上の自分のローカルファブリックにコミッショニングします。',
          'メーカーのアプリを閉じた状態で制御が機能することを確認します。',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'クラウドブリッジの回避',
        content:
          '**機器の制御をメーカーのサーバー経由で中継するクラウドブリッジは、ローカル動作を台無しにするので避けましょう。** 直接のローカルコミッショニングとローカルコントローラーを優先します。',
        items: [
          '一部のエコシステムは Matter 機器を自社クラウド経由で橋渡しします——代わりにローカルコントローラーを優先しましょう。',
          'Thread ボーダールーターとコントローラーを自分のネットワーク上に保ちます。',
          'インターネット障害でも制御が生き残るかをテストし、ローカルであることを確認します。',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Home Assistant での構成',
        content:
          '**Home Assistant はローカル Matter コントローラーとして機能するため、機器をそれにコミッショニングし、メーカーのクラウドなしで制御します。** これがインターネット非依存の Matter への最もすっきりした道です。',
        items: [
          'Home Assistant の Matter 統合をコントローラーとして使う——[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          'Thread ボーダールーターを接続し、Thread 機器をネットワークに参加させます。',
          'ローカルの全体像は[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: '構成の道を比較',
        content:
          '**ローカルコントローラーへのローカルコミッショニングはインターネット非依存；メーカークラウドのみのペアリングはそうではありません。** ローカルの道を選びましょう。',
        columns: ['構成の道', 'ローカルのみ？', 'クラウドブリッジが必要？'],
        rows: [
          { '構成の道': 'Home Assistant にコミッショニング（ローカルコントローラー）', 'ローカルのみ？': 'はい', 'クラウドブリッジが必要？': 'いいえ' },
          { '構成の道': 'Matter-over-Thread + ローカルの Thread ボーダールーター', 'ローカルのみ？': 'はい', 'クラウドブリッジが必要？': 'いいえ' },
          { '構成の道': 'メーカーアプリのみでペアリング', 'ローカルのみ？': '部分的', 'クラウドブリッジが必要？': '場合による' },
          { '構成の道': 'クラウドで橋渡しされたエコシステム', 'ローカルのみ？': 'いいえ', 'クラウドブリッジが必要？': 'はい' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Matter は常にローカルですか？', a: 'Matter はローカル制御向けに設計されていますが、構成がローカルにとどまるかはコントローラーとコミッショニング次第です。機器を Home Assistant のようなローカルコントローラーに接続すれば制御はネットワーク上にとどまります；メーカーのクラウドアプリだけに頼ると、機能がクラウド経由になり得ます。' },
          { q: 'Thread ボーダールーターは必要ですか？', a: '低消費電力の Thread メッシュを使う Thread ベースの Matter 機器の場合だけです。Thread ボーダールーターはそれらを IP ネットワークに橋渡しし、一部のハブやスピーカーに内蔵されています。Matter-over-Wi-Fi 機器には不要です。' },
          { q: 'メーカーのアプリを避けられますか？', a: 'たいてい避けられます。Matter のコミッショニングで、機器を Home Assistant のようなローカルコントローラーに直接接続し、メーカーのアプリなしで制御できます。初期設定でアプリを使う場合もありますが、日々の制御はローカルにできます。' },
          { q: 'Matter は Home Assistant で動きますか？', a: 'はい。Home Assistant は Matter 統合を備え、ローカル Matter コントローラーとして機能し、機器を自分のローカルファブリックにコミッショニングしてメーカーのクラウドなしで制御できます。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホームのプロトコル解説](/ja/smart-home/smart-home-protocols-explained) — Matter、Thread、Zigbee、Z-Wave',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルファースト構成',
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — ローカル Matter コントローラー',
          '[なぜローカルスマートホームはクラウドに勝るのか](/ja/smart-home/why-local-smart-home-beats-cloud) — インターネット非依存が重要な理由',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter とローカル制御：インターネットに依存しないスマートホーム（2026）',
      description: 'MatterとThreadによるローカル制御の完全ガイド（2026年）：Threadボーダールーターの詳しい設定手順、クラウドブリッジを一切使わないローカルのみのコミッショニング手順、Home Assistantでの構成方法をステップごとに解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/matter-local-control-guide',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'ローカル制御' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Matter は常にローカルですか？', acceptedAnswer: { '@type': 'Answer', text: 'Matter はローカル制御向けに設計されていますが、構成がローカルにとどまるかはコントローラーとコミッショニング次第です。Home Assistant のようなローカルコントローラーに接続すれば制御はネットワーク上にとどまります。' } },
        { '@type': 'Question', name: 'Thread ボーダールーターは必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'Thread ベースの Matter 機器の場合だけです。Thread ボーダールーターはそれらを IP ネットワークに橋渡しし、一部のハブやスピーカーに内蔵されています。Matter-over-Wi-Fi 機器には不要です。' } },
        { '@type': 'Question', name: 'メーカーのアプリを避けられますか？', acceptedAnswer: { '@type': 'Answer', text: 'たいてい避けられます。Matter のコミッショニングで、機器を Home Assistant のようなローカルコントローラーに直接接続し、メーカーのアプリなしで制御できます。' } },
        { '@type': 'Question', name: 'Matter は Home Assistant で動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。Home Assistant は Matter 統合を備え、メーカーのクラウドなしでローカル Matter コントローラーとして機能します。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter e Controle Local: Uma Casa Inteligente Independente da Internet (2026)',
    seoTitle: 'Matter Controle Local 2026: Casa Inteligente sem Nuvem',
    intro:
      'O Matter sobre Thread pode rodar uma casa inteligente genuinamente local por meio de um controlador local como o Home Assistant — sem necessidade da nuvem do fabricante. Este guia esclarece a nuance de se o Matter significa local, explica os roteadores de borda Thread e o emparelhamento somente-local, mostra como evitar pontes na nuvem e percorre uma configuração local de Matter com o Home Assistant.',
    metaDescription:
      'Matter + Thread para controle local 2026: Thread border routers, emparelhamento somente-local, sem pontes na nuvem. Configuração Home Assistant inclusa.',
    twitterDescription:
      'Matter e Thread podem rodar totalmente local por meio de um controlador como o Home Assistant — sem nuvem do fabricante. Como emparelhar localmente e evitar pontes na nuvem.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários construindo uma configuração Matter independente da internet',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter controle local sem nuvem',
      'matter thread local',
      'matter home assistant local',
      'roteador de borda thread',
      'casa inteligente independente da internet',
    ],
    leadAnswerBlock:
      '**O Matter sobre Thread pode rodar totalmente local por meio de um controlador local como o Home Assistant — você emparelha o dispositivo ao seu fabric local, sem necessidade da nuvem do fabricante.** Um roteador de borda Thread conecta os dispositivos Thread à sua rede; o Home Assistant atua como o controlador local.',
    quickAnswerTop: {
      pt: {
        question: 'O Matter funciona sem a nuvem?',
        answer:
          'O Matter pode funcionar totalmente local: quando você emparelha um dispositivo Matter a um controlador local como o Home Assistant, o controle acontece na sua rede sem a nuvem do fabricante. Dispositivos Matter baseados em Thread precisam de um roteador de borda Thread. Alguns dispositivos também oferecem recursos na nuvem, mas o controle local não os exige.',
        bullets: [
          'O Matter pode rodar local via um controlador local (ex.: Home Assistant)',
          'Dispositivos Thread precisam de um roteador de borda Thread',
          'Emparelhe os dispositivos ao seu fabric local, não a um app do fabricante',
          'Evite pontes na nuvem para manter o controle independente da internet',
          'Alguns dispositivos adicionam recursos na nuvem opcionais que você pode pular',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Matter significa local?', anchor: 'matter-local' },
      { label: 'Roteadores de borda Thread', anchor: 'border-routers' },
      { label: 'Emparelhamento somente-local', anchor: 'commissioning' },
      { label: 'Evitar pontes na nuvem', anchor: 'avoid-bridges' },
      { label: 'Configuração com Home Assistant', anchor: 'ha-setup' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Matter sobre Thread roda totalmente local por meio de um controlador como o Home Assistant; um roteador de borda Thread liga os dispositivos Thread, e nenhuma nuvem do fabricante é necessária.' },
      { type: 'plain-terms', content: 'O Matter é projetado para funcionar local, mas se a sua configuração realmente fica fora da nuvem depende de como você emparelha os dispositivos e qual controlador usa. Parear um dispositivo Matter a um controlador local como o Home Assistant — em vez de apenas um app do fabricante — mantém o controle na sua própria rede.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Matter pode rodar totalmente local por meio de um controlador local como o Home Assistant',
          'Dispositivos Matter baseados em Thread exigem um roteador de borda Thread na sua rede',
          'Emparelhe os dispositivos ao seu fabric local, não só a um app na nuvem do fabricante',
          'Evite pontes na nuvem que roteiam o controle por um servidor do fabricante',
          'O Home Assistant atua como controlador Matter local para um controle independente da internet',
          'Alguns dispositivos oferecem recursos na nuvem opcionais que você pode ignorar para o controle local',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Matter significa local?',
        content:
          '**O Matter é projetado para o controle local, mas se a sua configuração fica local depende do controlador e de como você emparelha os dispositivos.** Parear a um controlador local mantém o controle na sua rede.',
        items: [
          'O controle Matter entre um dispositivo e um controlador local acontece na sua LAN.',
          'Usar apenas um app do fabricante pode rotear alguns recursos pela nuvem desse fabricante.',
          'Para o contexto do protocolo, veja [protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained).',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Roteadores de borda Thread',
        content:
          '**Dispositivos Matter baseados em Thread precisam de um roteador de borda Thread para ligar a malha Thread à sua rede IP.** Muitos hubs e algumas caixas de som incluem um.',
        items: [
          'Um roteador de borda conecta os dispositivos Thread de baixo consumo à sua LAN.',
          'Dispositivos Matter-sobre-Wi-Fi não precisam de Thread, mas o Thread serve para dispositivos a bateria.',
          'Verifique se o seu controlador ou um dispositivo compatível fornece um roteador de borda.',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: 'Emparelhamento somente-local',
        content:
          '**Emparelhe os dispositivos Matter diretamente ao seu controlador local para que o controle fique na sua rede.** O recurso multi-admin do Matter permite que um dispositivo entre em mais de um fabric.',
        numberedItems: [
          'Adicione a integração Matter no seu controlador local (ex.: Home Assistant).',
          'Escaneie o código QR/de emparelhamento Matter do dispositivo a partir do controlador.',
          'Emparelhe-o ao seu fabric local na sua rede.',
          'Verifique se o controle funciona com o app do fabricante fechado.',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: 'Evitar pontes na nuvem',
        content:
          '**Evite pontes na nuvem que retransmitem o controle do dispositivo por um servidor do fabricante, o que anula a operação local.** Prefira o emparelhamento local direto e os controladores locais.',
        items: [
          'Alguns ecossistemas ligam os dispositivos Matter pela nuvem deles — prefira um controlador local.',
          'Mantenha o roteador de borda Thread e o controlador na sua própria rede.',
          'Teste se o controle sobrevive a uma queda de internet para confirmar que é local.',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: 'Configuração com Home Assistant',
        content:
          '**O Home Assistant atua como controlador Matter local, então você emparelha os dispositivos a ele e os controla sem a nuvem do fabricante.** É o caminho mais limpo para um Matter independente da internet.',
        items: [
          'Use a integração Matter do Home Assistant como seu controlador — veja [Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Pareie um roteador de borda Thread para que os dispositivos Thread entrem na sua rede.',
          'Para o panorama local completo, veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: 'Caminhos de configuração comparados',
        content:
          '**O emparelhamento local a um controlador local é independente da internet; o pareamento somente com a nuvem do fabricante não é.** Escolha o caminho local.',
        columns: ['Caminho de configuração', 'Somente local?', 'Precisa de ponte na nuvem?'],
        rows: [
          { 'Caminho de configuração': 'Emparelhar ao Home Assistant (controlador local)', 'Somente local?': 'Sim', 'Precisa de ponte na nuvem?': 'Não' },
          { 'Caminho de configuração': 'Matter-sobre-Thread + roteador de borda Thread local', 'Somente local?': 'Sim', 'Precisa de ponte na nuvem?': 'Não' },
          { 'Caminho de configuração': 'Pareamento somente com app do fabricante', 'Somente local?': 'Parcial', 'Precisa de ponte na nuvem?': 'Às vezes' },
          { 'Caminho de configuração': 'Ecossistema ligado pela nuvem', 'Somente local?': 'Não', 'Precisa de ponte na nuvem?': 'Sim' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'O Matter é sempre local?', a: 'O Matter é projetado para o controle local, mas se a sua configuração fica local depende do controlador e do emparelhamento. Parear os dispositivos a um controlador local como o Home Assistant mantém o controle na sua rede; depender apenas de um app na nuvem do fabricante pode rotear recursos pela nuvem.' },
          { q: 'Preciso de um roteador de borda Thread?', a: 'Apenas para os dispositivos Matter baseados em Thread, que usam a malha Thread de baixo consumo. Um roteador de borda Thread os liga à sua rede IP e vem integrado em alguns hubs e caixas de som. Dispositivos Matter-sobre-Wi-Fi não precisam de um.' },
          { q: 'Posso evitar o app do fabricante?', a: 'Muitas vezes, sim. Com o emparelhamento do Matter, você pode parear um dispositivo diretamente a um controlador local como o Home Assistant e controlá-lo sem o app do fabricante. A configuração inicial pode usar o app, mas o controle contínuo pode ser local.' },
          { q: 'O Matter funciona com o Home Assistant?', a: 'Sim. O Home Assistant inclui uma integração Matter e pode atuar como controlador Matter local, emparelhando os dispositivos ao seu fabric local e controlando-os sem a nuvem do fabricante.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Protocolos da casa inteligente explicados](/pt/smart-home/smart-home-protocols-explained) — Matter, Thread, Zigbee, Z-Wave',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o stack local-first',
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — o controlador Matter local',
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — por que a independência da internet importa',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter e Controle Local: Uma Casa Inteligente Independente da Internet (2026)',
      description: 'Matter + Thread para controle local 2026: Thread border routers, emparelhamento somente-local, sem pontes na nuvem. Configuração Home Assistant inclusa.',
      url: 'https://www.promptquorum.com/pt/smart-home/matter-local-control-guide',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: 'Controle local' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'O Matter é sempre local?', acceptedAnswer: { '@type': 'Answer', text: 'O Matter é projetado para o controle local, mas se a sua configuração fica local depende do controlador e do emparelhamento. Parear a um controlador local como o Home Assistant mantém o controle na sua rede.' } },
        { '@type': 'Question', name: 'Preciso de um roteador de borda Thread?', acceptedAnswer: { '@type': 'Answer', text: 'Apenas para os dispositivos Matter baseados em Thread. Um roteador de borda Thread os liga à sua rede IP e vem integrado em alguns hubs e caixas de som. Dispositivos Matter-sobre-Wi-Fi não precisam de um.' } },
        { '@type': 'Question', name: 'Posso evitar o app do fabricante?', acceptedAnswer: { '@type': 'Answer', text: 'Muitas vezes, sim. Com o emparelhamento do Matter, você pode parear um dispositivo diretamente a um controlador local como o Home Assistant e controlá-lo sem o app do fabricante.' } },
        { '@type': 'Question', name: 'O Matter funciona com o Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. O Home Assistant inclui uma integração Matter e pode atuar como controlador Matter local sem a nuvem do fabricante.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Matter 与本地控制：一个不依赖互联网的智能家居（2026）',
    seoTitle: 'Matter 本地控制 2026：无云端智能家居',
    intro:
      'Matter over Thread 可以通过像 Home Assistant 这样的本地控制器，运行一个真正本地的智能家居——无需厂商云端。本指南厘清“Matter 是否意味着本地”这一细节，解释 Thread 边界路由器与仅本地配网，展示如何避免云端网桥，并带你完成用 Home Assistant 的本地 Matter 配置。',
    metaDescription:
      '2026年利用Matter和Thread实现真正本地控制的完整智能家居指南：Thread边界路由器的详细配置步骤、纯本地配网完整流程、彻底绕开云端网桥的方法，以及在Home Assistant中完成全部设置的详细操作教程。',
    twitterDescription:
      'Matter 和 Thread 可通过像 Home Assistant 这样的控制器完全本地运行——无需厂商云端。如何在本地配网并避免云端网桥。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '构建不依赖互联网的 Matter 配置的用户',
    primaryTerm: 'Matter local control',
    targetKeywords: [
      'matter 本地控制 无云端',
      'matter thread 本地',
      'matter home assistant 本地',
      'thread 边界路由器',
      '不依赖互联网 智能家居',
    ],
    leadAnswerBlock:
      '**Matter over Thread 可通过像 Home Assistant 这样的本地控制器完全本地运行——你把设备配网到自己的本地 fabric，无需厂商云端。** Thread 边界路由器把 Thread 设备接入你的网络；Home Assistant 充当本地控制器。',
    quickAnswerTop: {
      zh: {
        question: 'Matter 不用云端能工作吗？',
        answer:
          'Matter 可以完全本地工作：当你把 Matter 设备配网到像 Home Assistant 这样的本地控制器时，控制就在你的网络上进行，无需厂商云端。基于 Thread 的 Matter 设备需要一个 Thread 边界路由器。有些设备也提供云端功能，但本地控制并不需要它们。',
        bullets: [
          'Matter 可经由本地控制器（如 Home Assistant）本地运行',
          'Thread 设备需要一个 Thread 边界路由器',
          '把设备配网到你的本地 fabric，而不是厂商应用',
          '避免云端网桥，以保持控制不依赖互联网',
          '有些设备会添加可跳过的可选云端功能',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: 'Matter 是否意味着本地？', anchor: 'matter-local' },
      { label: 'Thread 边界路由器', anchor: 'border-routers' },
      { label: '仅本地配网', anchor: 'commissioning' },
      { label: '避免云端网桥', anchor: 'avoid-bridges' },
      { label: '用 Home Assistant 配置', anchor: 'ha-setup' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Matter over Thread 通过像 Home Assistant 这样的控制器完全本地运行；Thread 边界路由器连接 Thread 设备，且无需厂商云端。' },
      { type: 'plain-terms', content: 'Matter 的设计是本地工作的，但你的配置是否真正不走云端，取决于你如何为设备配网以及使用哪种控制器。把 Matter 设备配对到像 Home Assistant 这样的本地控制器——而不仅仅是厂商应用——能把控制保留在你自己的网络上。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Matter 可经由像 Home Assistant 这样的本地控制器完全本地运行',
          '基于 Thread 的 Matter 设备需要你网络上的一个 Thread 边界路由器',
          '把设备配网到你的本地 fabric，而不仅是厂商云端应用',
          '避免那些把控制经由厂商服务器中转的云端网桥',
          'Home Assistant 充当本地 Matter 控制器，实现不依赖互联网的控制',
          '有些设备提供可选云端功能，本地控制时可忽略',
        ],
      },
      matterLocal: {
        id: 'matter-local',
        title: 'Matter 是否意味着本地？',
        content:
          '**Matter 为本地控制而设计，但你的配置是否保持本地，取决于控制器以及你如何为设备配网。** 配对到本地控制器能把控制保留在你的网络上。',
        items: [
          '设备与本地控制器之间的 Matter 控制发生在你的局域网上。',
          '只使用厂商应用，可能会把某些功能经由该厂商的云端。',
          '关于协议背景，参见[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained)。',
        ],
      },
      borderRouters: {
        id: 'border-routers',
        title: 'Thread 边界路由器',
        content:
          '**基于 Thread 的 Matter 设备需要一个 Thread 边界路由器，把 Thread 网状网络桥接到你的 IP 网络。** 许多中枢和部分音箱内置了它。',
        items: [
          '边界路由器把低功耗的 Thread 设备接入你的局域网。',
          'Matter-over-Wi-Fi 设备不需要 Thread，但 Thread 适合电池设备。',
          '检查你的控制器或一台兼容设备是否提供边界路由器。',
        ],
      },
      commissioning: {
        id: 'commissioning',
        title: '仅本地配网',
        content:
          '**把 Matter 设备直接配网到你的本地控制器，让控制保留在你的网络上。** Matter 的多管理员特性允许一台设备加入多个 fabric。',
        numberedItems: [
          '在你的本地控制器（如 Home Assistant）中添加 Matter 集成。',
          '从控制器扫描设备的 Matter 二维码/配对码。',
          '把它配网到你网络上的本地 fabric。',
          '在关闭厂商应用的情况下验证控制是否正常。',
        ],
      },
      avoidBridges: {
        id: 'avoid-bridges',
        title: '避免云端网桥',
        content:
          '**避免那些把设备控制经由厂商服务器中转的云端网桥，它会破坏本地运行。** 优先采用直接的本地配网和本地控制器。',
        items: [
          '有些生态经由其云端桥接 Matter 设备——请改用本地控制器。',
          '把 Thread 边界路由器和控制器保留在你自己的网络上。',
          '测试控制能否在断网时仍然有效，以确认它是本地的。',
        ],
      },
      haSetup: {
        id: 'ha-setup',
        title: '用 Home Assistant 配置',
        content:
          '**Home Assistant 充当本地 Matter 控制器，因此你把设备配网到它，并在无厂商云端的情况下控制它们。** 这是通往不依赖互联网的 Matter 的最干净路径。',
        items: [
          '把 Home Assistant 的 Matter 集成用作你的控制器——参见[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)。',
          '配对一个 Thread 边界路由器，让 Thread 设备加入你的网络。',
          '完整的本地全貌参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
        ],
      },
      haSetupTable: {
        id: 'ha-setup-table',
        title: '配置路径对比',
        content:
          '**配网到本地控制器是不依赖互联网的；仅配对到厂商云端则不是。** 选择本地路径。',
        columns: ['配置路径', '仅本地？', '需要云端网桥？'],
        rows: [
          { '配置路径': '配网到 Home Assistant（本地控制器）', '仅本地？': '是', '需要云端网桥？': '否' },
          { '配置路径': 'Matter-over-Thread + 本地 Thread 边界路由器', '仅本地？': '是', '需要云端网桥？': '否' },
          { '配置路径': '仅用厂商应用配对', '仅本地？': '部分', '需要云端网桥？': '有时' },
          { '配置路径': '经云端桥接的生态', '仅本地？': '否', '需要云端网桥？': '是' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Matter 总是本地的吗？', a: 'Matter 为本地控制而设计，但你的配置是否保持本地取决于控制器和配网方式。把设备配对到像 Home Assistant 这样的本地控制器能把控制保留在你的网络上；仅依赖厂商云端应用则可能把功能经由云端。' },
          { q: '我需要 Thread 边界路由器吗？', a: '只有基于 Thread 的 Matter 设备需要，它们使用低功耗的 Thread 网状网络。Thread 边界路由器把它们桥接到你的 IP 网络，并内置于部分中枢和音箱。Matter-over-Wi-Fi 设备则不需要。' },
          { q: '我能避开厂商应用吗？', a: '通常可以。借助 Matter 的配网，你可以把设备直接配对到像 Home Assistant 这样的本地控制器，并在没有厂商应用的情况下控制它。初次设置可能用到应用，但日常控制可以是本地的。' },
          { q: 'Matter 能与 Home Assistant 配合吗？', a: '能。Home Assistant 内置 Matter 集成，可充当本地 Matter 控制器，把设备配网到你的本地 fabric，并在无厂商云端的情况下控制它们。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居协议详解](/zh/smart-home/smart-home-protocols-explained) — Matter、Thread、Zigbee、Z-Wave',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地优先堆栈',
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 本地 Matter 控制器',
          '[为何本地智能家居胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 为何不依赖互联网很重要',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Matter 与本地控制：一个不依赖互联网的智能家居（2026）',
      description: '2026年利用Matter和Thread实现真正本地控制的完整智能家居指南：Thread边界路由器的详细配置步骤、纯本地配网完整流程、彻底绕开云端网桥的方法，以及在Home Assistant中完成全部设置的详细操作教程。',
      url: 'https://www.promptquorum.com/zh/smart-home/matter-local-control-guide',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Matter' }, { '@type': 'Thing', name: 'Thread' }, { '@type': 'Thing', name: '本地控制' }, { '@type': 'Thing', name: 'Home Assistant' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Matter 总是本地的吗？', acceptedAnswer: { '@type': 'Answer', text: 'Matter 为本地控制而设计，但你的配置是否保持本地取决于控制器和配网方式。把设备配对到像 Home Assistant 这样的本地控制器能把控制保留在你的网络上。' } },
        { '@type': 'Question', name: '我需要 Thread 边界路由器吗？', acceptedAnswer: { '@type': 'Answer', text: '只有基于 Thread 的 Matter 设备需要。Thread 边界路由器把它们桥接到你的 IP 网络，并内置于部分中枢和音箱。Matter-over-Wi-Fi 设备则不需要。' } },
        { '@type': 'Question', name: '我能避开厂商应用吗？', acceptedAnswer: { '@type': 'Answer', text: '通常可以。借助 Matter 的配网，你可以把设备直接配对到像 Home Assistant 这样的本地控制器，并在没有厂商应用的情况下控制它。' } },
        { '@type': 'Question', name: 'Matter 能与 Home Assistant 配合吗？', acceptedAnswer: { '@type': 'Answer', text: '能。Home Assistant 内置 Matter 集成，可充当本地 Matter 控制器，并在无厂商云端的情况下控制设备。' } },
      ],
    },
  },
}
