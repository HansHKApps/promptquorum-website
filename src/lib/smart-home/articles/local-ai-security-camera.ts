import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Local AI Security Cameras with Frigate (2026)',
    seoTitle: 'Frigate Local AI Cameras 2026: Private Detection',
    intro:
      'Frigate runs local AI object and person detection on your camera feeds with no cloud and no subscription, integrating directly into Home Assistant. This guide covers the cloud-camera privacy problem, what Frigate does, the hardware that accelerates detection (a Coral TPU or GPU), the Home Assistant integration, notifications, and how the cost compares to subscription cameras.',
    metaDescription:
      'Run private AI security cameras with Frigate: local object and person detection, no cloud, no subscription. Hardware, Home Assistant setup, and cost vs cloud.',
    twitterDescription:
      'Frigate gives you private AI security cameras: local person/object detection, no cloud, no subscription, integrated with Home Assistant.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant users building private AI camera detection',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate local ai camera home assistant',
      'frigate home assistant',
      'local ai security camera',
      'private security camera no cloud',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate is an open-source local NVR that runs AI object and person detection on your camera feeds entirely on your own hardware — no cloud, no subscription — and integrates with Home Assistant.** A Coral TPU or GPU accelerates detection so it stays real-time.',
    quickAnswerTop: {
      en: {
        question: 'What is Frigate and how does it give private AI cameras?',
        answer:
          'Frigate is open-source network video recorder software that performs AI object and person detection locally on RTSP camera streams, with no cloud and no subscription. It integrates with Home Assistant for notifications and automations. A Google Coral TPU or a GPU handles detection efficiently so multiple cameras run in real time.',
        bullets: [
          'Local AI detection on your own hardware — no cloud',
          'No subscription; one-time hardware cost',
          'Works with standard RTSP cameras',
          'Integrates with Home Assistant for alerts and automations',
          'A Coral TPU or GPU keeps detection real-time',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Cloud-Camera Problem', anchor: 'cloud-problem' },
      { label: 'What Frigate Does', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Home Assistant Integration', anchor: 'ha-integration' },
      { label: 'Notifications and Automations', anchor: 'notifications' },
      { label: 'Cost vs Cloud Cameras', anchor: 'cost' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate runs local AI person and object detection on your camera feeds with no cloud and no subscription, integrating with Home Assistant.' },
      { type: 'plain-terms', content: 'Most smart cameras send video to a company cloud and charge a monthly fee for AI detection and history. Frigate does the AI detection on your own hardware instead, so footage stays in your home and there is no subscription. It works with standard cameras and plugs into Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Frigate is open-source local NVR software with built-in AI object/person detection',
          'Detection runs on your hardware — footage never leaves the house, no subscription',
          'Works with standard RTSP cameras (wired PoE cameras are most reliable)',
          'A Google Coral TPU or a GPU accelerates detection so many cameras run in real time',
          'Integrates with Home Assistant for notifications, snapshots, and automations',
          'One-time hardware cost replaces recurring cloud-camera fees',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'The Cloud-Camera Privacy Problem',
        content:
          '**Cloud cameras upload your footage to a vendor and often lock AI detection and video history behind a subscription.** That means your home video lives on someone else\'s servers and stops working if you cancel.',
        items: [
          '**Footage off-site:** recordings sit in a vendor data centre, exposed to breaches and policy changes — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          '**Subscriptions:** person detection and recording history typically require a monthly fee.',
          '**Lock-in:** features can disappear if the vendor changes plans or shuts the service.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'What Frigate Does',
        content:
          '**Frigate ingests camera streams, runs AI detection locally to identify people, vehicles, and objects, and records only clips that matter.** It exposes events and snapshots to Home Assistant.',
        items: [
          'Real-time object detection on RTSP streams, filtering false motion (trees, shadows).',
          'Records event clips and snapshots locally; you control retention.',
          'Zones and object filters reduce noise — for example, alert only on people in the driveway.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Does Frigate Need?',
        content:
          '**Frigate runs detection efficiently on a Google Coral TPU or a GPU; CPU-only detection works but limits how many cameras you can run.** Pair it with a host that has enough storage for recordings.',
        items: [
          '**Coral TPU:** a Google Coral USB or M.2 accelerator handles detection for several cameras with low power draw.',
          '**GPU:** a discrete GPU also accelerates detection and is useful if you already run a local LLM on the same box — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Storage:** plan local disk for event recordings; wired PoE cameras give the most reliable streams.',
          '**One box:** Frigate can share a mini PC with Home Assistant — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant Integration',
        content:
          '**Frigate integrates with Home Assistant so detections become entities you can automate on.** Install Frigate, then add the Frigate integration in Home Assistant.',
        numberedItems: [
          'Run Frigate (as an add-on or container) and point it at your camera RTSP streams.',
          'Configure detectors (Coral/GPU) and detection zones in the Frigate config.',
          'Add the Frigate integration in Home Assistant to expose camera and detection entities.',
          'Use the detection entities in automations and dashboards.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Notifications and Automations',
        content:
          '**Use Frigate detection events to send local notifications with a snapshot and trigger automations — no cloud notification service required.** Combine with a local LLM for natural-language alerts if you want.',
        items: [
          'Send a snapshot notification when a person is detected in a specific zone.',
          'Trigger lights or sirens on detection as a deterministic automation.',
          'Optionally pass an event to a local LLM for a plain-language summary — see [AI automations with a local LLM](/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Cost vs Cloud Cameras',
        content:
          '**Frigate replaces recurring cloud-camera fees with a one-time hardware cost (accelerator + storage).** Over time, a no-subscription local setup is cheaper and keeps footage private.',
        columns: ['Aspect', 'Cloud cameras', 'Frigate (local)'],
        rows: [
          { 'Aspect': 'Privacy', 'Cloud cameras': 'Footage on vendor servers', 'Frigate (local)': 'Footage stays in your home' },
          { 'Aspect': 'Subscription', 'Cloud cameras': 'Monthly fee for AI + history', 'Frigate (local)': 'None' },
          { 'Aspect': 'Detection', 'Cloud cameras': 'Cloud AI', 'Frigate (local)': 'Local AI (Coral/GPU)' },
          { 'Aspect': 'Offline', 'Cloud cameras': 'Limited without internet', 'Frigate (local)': 'Works on your LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a Coral TPU for Frigate?', a: 'Not strictly, but it is recommended. A Google Coral TPU handles AI detection for several cameras efficiently and with low power. A GPU works too, and CPU-only detection is possible but limits how many cameras you can run in real time.' },
          { q: 'Does Frigate work offline?', a: 'Yes. Detection, recording, and Home Assistant notifications all run on your local network, so Frigate keeps working during an internet outage. Only remote viewing from outside the home needs connectivity.' },
          { q: 'Which cameras work with Frigate?', a: 'Frigate works with cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams for continuous detection.' },
          { q: 'Is there a subscription for Frigate?', a: 'No. Frigate is open-source and runs on your hardware with no subscription. You pay a one-time cost for a detection accelerator and storage instead of recurring cloud fees.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — where local cameras fit in the stack',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — accelerators and storage',
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — one box for Frigate + HA',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the problem local cameras solve',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model on the same box',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI Security Cameras with Frigate (2026)',
      description: 'Run private AI security cameras with Frigate: local object and person detection, no cloud, no subscription. Hardware, Home Assistant setup, and cost vs cloud.',
      url: 'https://www.promptquorum.com/smart-home/local-ai-security-camera',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI security camera' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a Coral TPU for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Not strictly, but it is recommended. A Google Coral TPU handles AI detection for several cameras efficiently and with low power. A GPU works too; CPU-only is possible but limits camera count.' } },
        { '@type': 'Question', name: 'Does Frigate work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Detection, recording, and Home Assistant notifications run on your local network, so Frigate keeps working during an internet outage.' } },
        { '@type': 'Question', name: 'Which cameras work with Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams.' } },
        { '@type': 'Question', name: 'Is there a subscription for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate is open-source and runs on your hardware with no subscription — a one-time cost for an accelerator and storage instead of cloud fees.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'كاميرات الأمان بالذكاء الاصطناعي المحلي مع Frigate (2026)',
    seoTitle: 'Frigate 2026: كاميرات ذكاء اصطناعي محلي خاصة',
    intro:
      'يُشغِّل Frigate الكشفَ المحلي بالذكاء الاصطناعي عن الأشخاص والأشياء على تغذيات الكاميرا دون الحاجة إلى سحابة أو اشتراك، مع تكامل مباشر مع Home Assistant. يتناول هذا الدليل مشكلة خصوصية الكاميرات السحابية، وما يفعله Frigate، والأجهزة التي تُسرِّع الكشف (مثل Coral TPU أو GPU)، والتكامل مع Home Assistant، والإشعارات، ومقارنة التكلفة بالكاميرات القائمة على الاشتراك.',
    metaDescription:
      'Frigate: كشف محلي بالذكاء الاصطناعي عن الأشخاص بدون سحابة وبدون اشتراك شهري. يحتاج Coral TPU أو GPU ويتكامل مع Home Assistant للإشعارات والأتمتة.',
    twitterDescription:
      'يمنحك Frigate كاميرات أمان خاصة بالذكاء الاصطناعي: كشف محلي عن الأشخاص والأشياء، بدون سحابة، بدون اشتراك، مدمجًا مع Home Assistant.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو Home Assistant الذين يبنون نظام كشف خاص بالذكاء الاصطناعي للكاميرات',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate كاميرا ذكاء اصطناعي محلي home assistant',
      'frigate home assistant',
      'كاميرا أمان ذكاء اصطناعي محلي',
      'كاميرا أمان خاصة بدون سحابة',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate هو نظام تسجيل فيديو شبكي محلي مفتوح المصدر يُشغِّل الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء على تغذيات الكاميرا بالكامل على جهازك الخاص — دون سحابة، دون اشتراك — ويتكامل مع Home Assistant.** يُسرِّع Coral TPU أو GPU الكشفَ للحفاظ على العمل في الوقت الفعلي.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Frigate وكيف يوفر كاميرات ذكاء اصطناعي خاصة؟',
        answer:
          'Frigate هو برنامج مفتوح المصدر لتسجيل الفيديو عبر الشبكة يُجري الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء محليًا على تدفقات كاميرات RTSP، دون سحابة ودون اشتراك. يتكامل مع Home Assistant للإشعارات والأتمتة. يتولى Google Coral TPU أو GPU الكشف بكفاءة حتى تعمل كاميرات متعددة في الوقت الفعلي.',
        bullets: [
          'كشف ذكاء اصطناعي محلي على جهازك الخاص — دون سحابة',
          'لا اشتراك؛ تكلفة جهاز واحدة فقط',
          'يعمل مع كاميرات RTSP القياسية',
          'يتكامل مع Home Assistant للتنبيهات والأتمتة',
          'يحافظ Coral TPU أو GPU على الكشف في الوقت الفعلي',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'مشكلة الكاميرات السحابية', anchor: 'cloud-problem' },
      { label: 'ما يفعله Frigate', anchor: 'what-frigate-does' },
      { label: 'الأجهزة', anchor: 'hardware' },
      { label: 'التكامل مع Home Assistant', anchor: 'ha-integration' },
      { label: 'الإشعارات والأتمتة', anchor: 'notifications' },
      { label: 'التكلفة مقارنةً بالكاميرات السحابية', anchor: 'cost' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يُشغِّل Frigate الكشفَ المحلي بالذكاء الاصطناعي عن الأشخاص والأشياء على تغذيات الكاميرا دون سحابة ودون اشتراك، مع تكامل مع Home Assistant.' },
      { type: 'plain-terms', content: 'تُرسل معظم الكاميرات الذكية الفيديو إلى سحابة شركة وتتقاضى رسومًا شهرية على الكشف بالذكاء الاصطناعي والسجل. بدلًا من ذلك، يُجري Frigate الكشف بالذكاء الاصطناعي على جهازك الخاص، فتبقى اللقطات في منزلك ولا يوجد اشتراك. يعمل مع الكاميرات القياسية ويتصل بـ Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Frigate هو برنامج NVR محلي مفتوح المصدر مدمج بالكشف بالذكاء الاصطناعي عن الأشياء والأشخاص',
          'يعمل الكشف على جهازك — لا تغادر اللقطات المنزل أبدًا، ولا اشتراك',
          'يعمل مع كاميرات RTSP القياسية (الكاميرات السلكية PoE هي الأكثر موثوقية)',
          'يُسرِّع Google Coral TPU أو GPU الكشف لتشغيل كاميرات عديدة في الوقت الفعلي',
          'يتكامل مع Home Assistant للإشعارات واللقطات والأتمتة',
          'تحل تكلفة الجهاز الواحدة محل الرسوم المتكررة للكاميرات السحابية',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'مشكلة الخصوصية في الكاميرات السحابية',
        content:
          '**ترفع الكاميرات السحابية لقطاتك إلى مورِّد وغالبًا ما تحجب الكشف بالذكاء الاصطناعي وسجل الفيديو خلف اشتراك.** هذا يعني أن فيديو منزلك يعيش على خوادم شخص آخر ويتوقف عن العمل إذا ألغيت الاشتراك.',
        items: [
          '**اللقطات خارج المنزل:** تقع التسجيلات في مركز بيانات المورِّد، معرَّضة للاختراقات وتغييرات السياسات — راجع [مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks).',
          '**الاشتراكات:** يستلزم الكشف عن الأشخاص وسجل التسجيل عادةً رسومًا شهرية.',
          '**الارتباط بالمورِّد:** قد تختفي الميزات إذا غيَّر المورِّد الخطط أو أوقف الخدمة.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'ما يفعله Frigate',
        content:
          '**يستوعب Frigate تدفقات الكاميرا ويُشغِّل الكشف بالذكاء الاصطناعي محليًا لتحديد الأشخاص والمركبات والأشياء، ويُسجِّل فقط المقاطع المهمة.** يعرض الأحداث واللقطات على Home Assistant.',
        items: [
          'كشف عن الأشياء في الوقت الفعلي على تدفقات RTSP، مع تصفية الحركة الزائفة (الأشجار، الظلال).',
          'يُسجِّل مقاطع الأحداث واللقطات محليًا؛ أنت من يتحكم في فترة الاحتفاظ.',
          'تُقلِّل المناطق ومرشحات الأشياء الضوضاء — مثلًا، إنذار عند وجود أشخاص في المدخل فقط.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'ما الأجهزة التي يحتاجها Frigate؟',
        content:
          '**يُشغِّل Frigate الكشف بكفاءة على Google Coral TPU أو GPU؛ يعمل الكشف بالمعالج المركزي فقط لكنه يحدّ من عدد الكاميرات التي يمكنك تشغيلها.** اقرنه بمضيف يحتوي على تخزين كافٍ للتسجيلات.',
        items: [
          '**Coral TPU:** يتعامل مُعجِّل Google Coral USB أو M.2 مع الكشف لعدة كاميرات باستهلاك طاقة منخفض.',
          '**GPU:** تُسرِّع GPU المنفصلة الكشف أيضًا وهي مفيدة إذا كنت تُشغِّل بالفعل نموذج لغوي محليًا على نفس الجهاز — راجع [أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          '**التخزين:** خطِّط لقرص محلي لتسجيلات الأحداث؛ الكاميرات السلكية PoE توفر أكثر التدفقات موثوقية.',
          '**جهاز واحد:** يمكن لـ Frigate مشاركة جهاز كمبيوتر مصغر مع Home Assistant — راجع [أفضل أجهزة الكمبيوتر المصغرة لـ Home Assistant + الذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'التكامل مع Home Assistant',
        content:
          '**يتكامل Frigate مع Home Assistant حتى تصبح عمليات الكشف كيانات يمكنك بناء الأتمتة عليها.** ثبِّت Frigate ثم أضف تكامل Frigate في Home Assistant.',
        numberedItems: [
          'شغِّل Frigate (كإضافة أو حاوية) وأشِر إليه تدفقات RTSP لكاميراتك.',
          'اضبط أجهزة الكشف (Coral/GPU) ومناطق الكشف في إعدادات Frigate.',
          'أضف تكامل Frigate في Home Assistant لكشف كيانات الكاميرا والكشف.',
          'استخدم كيانات الكشف في الأتمتة ولوحات التحكم.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'الإشعارات والأتمتة',
        content:
          '**استخدم أحداث الكشف في Frigate لإرسال إشعارات محلية مع لقطة وتشغيل الأتمتة — دون الحاجة إلى خدمة إشعارات سحابية.** يمكنك الجمع مع نموذج لغوي محلي للتنبيهات بلغة طبيعية إذا أردت.',
        items: [
          'أرسل إشعارًا مع لقطة عند الكشف عن شخص في منطقة محددة.',
          'شغِّل الأضواء أو صافرات الإنذار عند الكشف كأتمتة حتمية.',
          'مرِّر اختياريًا حدثًا إلى نموذج لغوي محلي لملخص بلغة طبيعية — راجع [أتمتة الذكاء الاصطناعي مع نموذج لغوي محلي](/ar/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'التكلفة مقارنةً بالكاميرات السحابية',
        content:
          '**يحلّ Frigate محل الرسوم المتكررة للكاميرات السحابية بتكلفة جهاز واحدة (مُعجِّل + تخزين).** بمرور الوقت، يكون الإعداد المحلي بدون اشتراك أرخص ويحافظ على خصوصية اللقطات.',
        columns: ['الجانب', 'الكاميرات السحابية', 'Frigate (محلي)'],
        rows: [
          { 'الجانب': 'الخصوصية', 'الكاميرات السحابية': 'اللقطات على خوادم المورِّد', 'Frigate (محلي)': 'تبقى اللقطات في منزلك' },
          { 'الجانب': 'الاشتراك', 'الكاميرات السحابية': 'رسوم شهرية مقابل الذكاء الاصطناعي + السجل', 'Frigate (محلي)': 'لا شيء' },
          { 'الجانب': 'الكشف', 'الكاميرات السحابية': 'ذكاء اصطناعي سحابي', 'Frigate (محلي)': 'ذكاء اصطناعي محلي (Coral/GPU)' },
          { 'الجانب': 'العمل دون إنترنت', 'الكاميرات السحابية': 'محدود بدون إنترنت', 'Frigate (محلي)': 'يعمل على شبكتك المحلية' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى Coral TPU لـ Frigate؟', a: 'ليس بالضرورة، لكن يُوصى به. يتعامل Google Coral TPU مع الكشف بالذكاء الاصطناعي لعدة كاميرات بكفاءة واستهلاك طاقة منخفض. تعمل GPU أيضًا، والكشف بالمعالج المركزي فقط ممكن لكنه يحدّ من عدد الكاميرات التي يمكنك تشغيلها في الوقت الفعلي.' },
          { q: 'هل يعمل Frigate دون اتصال بالإنترنت؟', a: 'نعم. يعمل الكشف والتسجيل وإشعارات Home Assistant جميعها على شبكتك المحلية، لذا يستمر Frigate في العمل أثناء انقطاع الإنترنت. المشاهدة عن بُعد من خارج المنزل فقط تتطلب اتصالًا.' },
          { q: 'ما الكاميرات التي تعمل مع Frigate؟', a: 'يعمل Frigate مع الكاميرات التي توفر تدفق RTSP، وهو ما يشمل معظم كاميرات IP وPoE. توفر الكاميرات السلكية PoE أكثر التدفقات موثوقية للكشف المستمر.' },
          { q: 'هل يوجد اشتراك لـ Frigate؟', a: 'لا. Frigate مفتوح المصدر ويعمل على جهازك دون اشتراك. تدفع تكلفة مرة واحدة لمُعجِّل الكشف والتخزين بدلًا من الرسوم السحابية المتكررة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — مكان الكاميرات المحلية في البنية',
          '[أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — المُعجِّلات والتخزين',
          '[أفضل أجهزة الكمبيوتر المصغرة لـ Home Assistant + الذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — جهاز واحد لـ Frigate + HA',
          '[مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — المشكلة التي تحلها الكاميرات المحلية',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — عبر المجموعات: تشغيل نموذج محلي على نفس الجهاز',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كاميرات الأمان بالذكاء الاصطناعي المحلي مع Frigate (2026)',
      description: 'Frigate 2026: كاميرات أمان خاصة بذكاء اصطناعي محلي، كشف بدون سحابة وبدون اشتراك. الأجهزة، وإعداد Home Assistant، والتكلفة مقارنةً بالسحابة.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-ai-security-camera',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'كاميرا أمان بالذكاء الاصطناعي' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى Coral TPU لـ Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'ليس بالضرورة، لكن يُوصى به. يتعامل Google Coral TPU مع الكشف بالذكاء الاصطناعي لعدة كاميرات بكفاءة واستهلاك طاقة منخفض. تعمل GPU أيضًا؛ الكشف بالمعالج المركزي فقط ممكن لكنه يحدّ من عدد الكاميرات.' } },
        { '@type': 'Question', name: 'هل يعمل Frigate دون اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يعمل الكشف والتسجيل وإشعارات Home Assistant على شبكتك المحلية، لذا يستمر Frigate في العمل أثناء انقطاع الإنترنت.' } },
        { '@type': 'Question', name: 'ما الكاميرات التي تعمل مع Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'الكاميرات التي توفر تدفق RTSP، وهو ما يشمل معظم كاميرات IP وPoE. توفر الكاميرات السلكية PoE أكثر التدفقات موثوقية.' } },
        { '@type': 'Question', name: 'هل يوجد اشتراك لـ Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. Frigate مفتوح المصدر ويعمل على جهازك دون اشتراك — تكلفة مرة واحدة للمُعجِّل والتخزين بدلًا من الرسوم السحابية.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Lokale KI-Sicherheitskameras mit Frigate (2026)',
    seoTitle: 'Frigate lokale KI-Kameras 2026: Private Erkennung',
    intro:
      'Frigate führt lokale KI-Objekt- und Personenerkennung auf Ihren Kamera-Feeds aus – ohne Cloud und ohne Abonnement – und integriert sich direkt in Home Assistant. Dieser Leitfaden behandelt das Datenschutzproblem von Cloud-Kameras, was Frigate tut, die Hardware, die die Erkennung beschleunigt (eine Coral-TPU oder GPU), die Home-Assistant-Integration, Benachrichtigungen und wie sich die Kosten zu Abo-Kameras verhalten.',
    metaDescription:
      'Frigate: private KI-Sicherheitskameras 2026 – lokale Erkennung, kein Cloud-Abo. Hardware, Home-Assistant-Setup und Kostenvergleich.',
    twitterDescription:
      'Frigate gibt Ihnen private KI-Sicherheitskameras: lokale Personen-/Objekterkennung, ohne Cloud, ohne Abonnement, integriert mit Home Assistant.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Home-Assistant-Nutzer, die private KI-Kameraerkennung aufbauen',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate lokale ki-kamera home assistant',
      'frigate home assistant',
      'lokale ki-sicherheitskamera',
      'private sicherheitskamera ohne cloud',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate ist ein quelloffener lokaler NVR, der KI-Objekt- und Personenerkennung auf Ihren Kamera-Feeds vollständig auf Ihrer eigenen Hardware ausführt – ohne Cloud, ohne Abonnement – und sich in Home Assistant integriert.** Eine Coral-TPU oder GPU beschleunigt die Erkennung, sodass sie in Echtzeit bleibt.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Frigate und wie liefert es private KI-Kameras?',
        answer:
          'Frigate ist quelloffene Netzwerk-Videorekorder-Software, die KI-Objekt- und Personenerkennung lokal auf RTSP-Kamerastreams durchführt – ohne Cloud und ohne Abonnement. Sie integriert sich für Benachrichtigungen und Automatisierungen in Home Assistant. Eine Google-Coral-TPU oder eine GPU übernimmt die Erkennung effizient, sodass mehrere Kameras in Echtzeit laufen.',
        bullets: [
          'Lokale KI-Erkennung auf Ihrer eigenen Hardware – ohne Cloud',
          'Kein Abonnement; einmalige Hardwarekosten',
          'Funktioniert mit Standard-RTSP-Kameras',
          'Integriert sich für Alarme und Automatisierungen in Home Assistant',
          'Eine Coral-TPU oder GPU hält die Erkennung in Echtzeit',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Das Cloud-Kamera-Problem', anchor: 'cloud-problem' },
      { label: 'Was Frigate tut', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Home-Assistant-Integration', anchor: 'ha-integration' },
      { label: 'Benachrichtigungen und Automatisierungen', anchor: 'notifications' },
      { label: 'Kosten vs Cloud-Kameras', anchor: 'cost' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate führt lokale KI-Personen- und Objekterkennung auf Ihren Kamera-Feeds ohne Cloud und ohne Abonnement aus und integriert sich in Home Assistant.' },
      { type: 'plain-terms', content: 'Die meisten smarten Kameras senden Video an eine Firmen-Cloud und verlangen eine monatliche Gebühr für KI-Erkennung und Verlauf. Frigate übernimmt die KI-Erkennung stattdessen auf Ihrer eigenen Hardware, sodass die Aufnahmen zu Hause bleiben und es kein Abonnement gibt. Es funktioniert mit Standardkameras und bindet sich in Home Assistant ein.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Frigate ist quelloffene lokale NVR-Software mit eingebauter KI-Objekt-/Personenerkennung',
          'Die Erkennung läuft auf Ihrer Hardware – Aufnahmen verlassen das Haus nie, kein Abonnement',
          'Funktioniert mit Standard-RTSP-Kameras (kabelgebundene PoE-Kameras sind am zuverlässigsten)',
          'Eine Google-Coral-TPU oder eine GPU beschleunigt die Erkennung, sodass viele Kameras in Echtzeit laufen',
          'Integriert sich für Benachrichtigungen, Schnappschüsse und Automatisierungen in Home Assistant',
          'Einmalige Hardwarekosten ersetzen wiederkehrende Cloud-Kamera-Gebühren',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'Das Datenschutzproblem von Cloud-Kameras',
        content:
          '**Cloud-Kameras laden Ihre Aufnahmen zu einem Hersteller hoch und sperren KI-Erkennung und Videoverlauf oft hinter einem Abonnement.** Das bedeutet, Ihr Heimvideo liegt auf fremden Servern und hört auf zu funktionieren, wenn Sie kündigen.',
        items: [
          '**Aufnahmen extern:** Aufzeichnungen liegen in einem Hersteller-Rechenzentrum, Datenlecks und Richtlinienänderungen ausgesetzt – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          '**Abonnements:** Personenerkennung und Aufnahmeverlauf erfordern in der Regel eine monatliche Gebühr.',
          '**Lock-in:** Funktionen können verschwinden, wenn der Hersteller Tarife ändert oder den Dienst einstellt.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Was Frigate tut',
        content:
          '**Frigate nimmt Kamerastreams auf, führt lokal KI-Erkennung aus, um Personen, Fahrzeuge und Objekte zu identifizieren, und zeichnet nur relevante Clips auf.** Es stellt Ereignisse und Schnappschüsse Home Assistant bereit.',
        items: [
          'Echtzeit-Objekterkennung auf RTSP-Streams, die Fehlbewegungen (Bäume, Schatten) herausfiltert.',
          'Zeichnet Ereignis-Clips und Schnappschüsse lokal auf; Sie steuern die Aufbewahrung.',
          'Zonen und Objektfilter reduzieren Rauschen – etwa nur bei Personen in der Einfahrt alarmieren.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Welche Hardware braucht Frigate?',
        content:
          '**Frigate führt die Erkennung effizient auf einer Google-Coral-TPU oder einer GPU aus; reine CPU-Erkennung funktioniert, begrenzt aber die Anzahl betreibbarer Kameras.** Kombinieren Sie es mit einem Host mit genug Speicher für Aufnahmen.',
        items: [
          '**Coral-TPU:** Ein Google-Coral-USB- oder -M.2-Beschleuniger bewältigt die Erkennung für mehrere Kameras bei geringem Stromverbrauch.',
          '**GPU:** Eine dedizierte GPU beschleunigt die Erkennung ebenfalls und ist nützlich, wenn Sie bereits ein lokales LLM auf demselben Gerät betreiben – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          '**Speicher:** Planen Sie lokalen Datenträger für Ereignisaufnahmen; kabelgebundene PoE-Kameras liefern die zuverlässigsten Streams.',
          '**Ein Gerät:** Frigate kann sich einen Mini-PC mit Home Assistant teilen – siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home-Assistant-Integration',
        content:
          '**Frigate integriert sich in Home Assistant, sodass Erkennungen zu Entitäten werden, auf die Sie automatisieren können.** Installieren Sie Frigate, dann fügen Sie die Frigate-Integration in Home Assistant hinzu.',
        numberedItems: [
          'Betreiben Sie Frigate (als Add-on oder Container) und richten Sie es auf Ihre Kamera-RTSP-Streams.',
          'Konfigurieren Sie Detektoren (Coral/GPU) und Erkennungszonen in der Frigate-Konfiguration.',
          'Fügen Sie die Frigate-Integration in Home Assistant hinzu, um Kamera- und Erkennungs-Entitäten bereitzustellen.',
          'Nutzen Sie die Erkennungs-Entitäten in Automatisierungen und Dashboards.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Benachrichtigungen und Automatisierungen',
        content:
          '**Nutzen Sie Frigate-Erkennungsereignisse, um lokale Benachrichtigungen mit Schnappschuss zu senden und Automatisierungen auszulösen – kein Cloud-Benachrichtigungsdienst nötig.** Kombinieren Sie es bei Bedarf mit einem lokalen LLM für natürlichsprachliche Alarme.',
        items: [
          'Senden Sie eine Schnappschuss-Benachrichtigung, wenn eine Person in einer bestimmten Zone erkannt wird.',
          'Lösen Sie Licht oder Sirenen bei Erkennung als deterministische Automatisierung aus.',
          'Übergeben Sie ein Ereignis optional an ein lokales LLM für eine natürlichsprachliche Zusammenfassung – siehe [KI-Automatisierungen mit einem lokalen LLM](/de/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Kosten vs Cloud-Kameras',
        content:
          '**Frigate ersetzt wiederkehrende Cloud-Kamera-Gebühren durch einmalige Hardwarekosten (Beschleuniger + Speicher).** Mit der Zeit ist ein abofreies lokales Setup günstiger und hält Aufnahmen privat.',
        columns: ['Aspekt', 'Cloud-Kameras', 'Frigate (lokal)'],
        rows: [
          { 'Aspekt': 'Datenschutz', 'Cloud-Kameras': 'Aufnahmen auf Hersteller-Servern', 'Frigate (lokal)': 'Aufnahmen bleiben zu Hause' },
          { 'Aspekt': 'Abonnement', 'Cloud-Kameras': 'Monatsgebühr für KI + Verlauf', 'Frigate (lokal)': 'Keine' },
          { 'Aspekt': 'Erkennung', 'Cloud-Kameras': 'Cloud-KI', 'Frigate (lokal)': 'Lokale KI (Coral/GPU)' },
          { 'Aspekt': 'Offline', 'Cloud-Kameras': 'Eingeschränkt ohne Internet', 'Frigate (lokal)': 'Funktioniert in Ihrem LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich eine Coral-TPU für Frigate?', a: 'Nicht zwingend, aber empfohlen. Eine Google-Coral-TPU bewältigt KI-Erkennung für mehrere Kameras effizient und stromsparend. Eine GPU funktioniert auch, und reine CPU-Erkennung ist möglich, begrenzt aber, wie viele Kameras Sie in Echtzeit betreiben können.' },
          { q: 'Funktioniert Frigate offline?', a: 'Ja. Erkennung, Aufnahme und Home-Assistant-Benachrichtigungen laufen alle in Ihrem lokalen Netzwerk, sodass Frigate bei einem Internetausfall weiterarbeitet. Nur das Fernansehen von außerhalb des Hauses benötigt Konnektivität.' },
          { q: 'Welche Kameras funktionieren mit Frigate?', a: 'Frigate funktioniert mit Kameras, die einen RTSP-Stream bereitstellen, was die meisten IP- und PoE-Kameras abdeckt. Kabelgebundene PoE-Kameras liefern die zuverlässigsten Streams für kontinuierliche Erkennung.' },
          { q: 'Gibt es ein Abonnement für Frigate?', a: 'Nein. Frigate ist quelloffen und läuft auf Ihrer Hardware ohne Abonnement. Sie zahlen einmalige Kosten für einen Erkennungs-Beschleuniger und Speicher statt wiederkehrender Cloud-Gebühren.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – wo lokale Kameras in den Stack passen',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Beschleuniger und Speicher',
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – ein Gerät für Frigate + HA',
          '[Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks) – das Problem, das lokale Kameras lösen',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: ein lokales Modell auf demselben Gerät betreiben',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale KI-Sicherheitskameras mit Frigate (2026)',
      description: 'Frigate: private KI-Sicherheitskameras 2026 – lokale Erkennung, kein Cloud-Abo. Hardware, Home-Assistant-Setup und Kostenvergleich.',
      url: 'https://www.promptquorum.com/de/smart-home/local-ai-security-camera',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'KI-Sicherheitskamera' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich eine Coral-TPU für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Nicht zwingend, aber empfohlen. Eine Google-Coral-TPU bewältigt KI-Erkennung für mehrere Kameras effizient und stromsparend. Eine GPU funktioniert auch; reine CPU-Erkennung ist möglich, begrenzt aber die Kameraanzahl.' } },
        { '@type': 'Question', name: 'Funktioniert Frigate offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Erkennung, Aufnahme und Home-Assistant-Benachrichtigungen laufen in Ihrem lokalen Netzwerk, sodass Frigate bei einem Internetausfall weiterarbeitet.' } },
        { '@type': 'Question', name: 'Welche Kameras funktionieren mit Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Kameras, die einen RTSP-Stream bereitstellen, was die meisten IP- und PoE-Kameras abdeckt. Kabelgebundene PoE-Kameras liefern die zuverlässigsten Streams.' } },
        { '@type': 'Question', name: 'Gibt es ein Abonnement für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Frigate ist quelloffen und läuft auf Ihrer Hardware ohne Abonnement – einmalige Kosten für einen Beschleuniger und Speicher statt Cloud-Gebühren.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Cámaras de Seguridad con IA Local con Frigate (2026)',
    seoTitle: 'Cámaras IA Local con Frigate 2026: Detección Privada',
    intro:
      'Frigate ejecuta detección local de objetos y personas con IA sobre tus cámaras, sin nube y sin suscripción, integrándose directamente en Home Assistant. Esta guía cubre el problema de privacidad de las cámaras en la nube, qué hace Frigate, el hardware que acelera la detección (una Coral TPU o GPU), la integración con Home Assistant, las notificaciones y cómo se compara el coste con las cámaras de suscripción.',
    metaDescription:
      'Frigate 2026: cámaras de seguridad privadas con IA local, detección sin nube, sin suscripción. Hardware, Home Assistant y coste vs nube.',
    twitterDescription:
      'Frigate te da cámaras de seguridad con IA privadas: detección local de personas/objetos, sin nube, sin suscripción, integrada con Home Assistant.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de Home Assistant que montan detección de cámaras con IA privada',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate cámara ia local home assistant',
      'frigate home assistant',
      'cámara de seguridad ia local',
      'cámara de seguridad privada sin nube',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate es un NVR local de código abierto que ejecuta detección de objetos y personas con IA sobre tus cámaras enteramente en tu propio hardware —sin nube, sin suscripción— y se integra con Home Assistant.** Una Coral TPU o GPU acelera la detección para que se mantenga en tiempo real.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Frigate y cómo da cámaras con IA privadas?',
        answer:
          'Frigate es software de grabador de vídeo en red de código abierto que realiza detección de objetos y personas con IA localmente sobre streams de cámaras RTSP, sin nube y sin suscripción. Se integra con Home Assistant para notificaciones y automatizaciones. Una Google Coral TPU o una GPU maneja la detección con eficiencia para que varias cámaras corran en tiempo real.',
        bullets: [
          'Detección con IA local en tu propio hardware — sin nube',
          'Sin suscripción; coste de hardware único',
          'Funciona con cámaras RTSP estándar',
          'Se integra con Home Assistant para alertas y automatizaciones',
          'Una Coral TPU o GPU mantiene la detección en tiempo real',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'El problema de las cámaras en la nube', anchor: 'cloud-problem' },
      { label: 'Qué hace Frigate', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Integración con Home Assistant', anchor: 'ha-integration' },
      { label: 'Notificaciones y automatizaciones', anchor: 'notifications' },
      { label: 'Coste vs cámaras en la nube', anchor: 'cost' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate ejecuta detección local de personas y objetos con IA sobre tus cámaras sin nube y sin suscripción, integrándose con Home Assistant.' },
      { type: 'plain-terms', content: 'La mayoría de las cámaras inteligentes envían vídeo a una nube de empresa y cobran una cuota mensual por la detección con IA y el historial. Frigate hace la detección con IA en tu propio hardware, así que las grabaciones se quedan en casa y no hay suscripción. Funciona con cámaras estándar y se conecta a Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Frigate es software de NVR local de código abierto con detección de objetos/personas con IA incorporada',
          'La detección corre en tu hardware — las grabaciones nunca salen de casa, sin suscripción',
          'Funciona con cámaras RTSP estándar (las cámaras PoE con cable son las más fiables)',
          'Una Google Coral TPU o una GPU acelera la detección para que muchas cámaras corran en tiempo real',
          'Se integra con Home Assistant para notificaciones, capturas y automatizaciones',
          'Un coste de hardware único reemplaza las cuotas recurrentes de las cámaras en la nube',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'El problema de privacidad de las cámaras en la nube',
        content:
          '**Las cámaras en la nube suben tus grabaciones a un fabricante y a menudo bloquean la detección con IA y el historial de vídeo tras una suscripción.** Eso significa que tu vídeo del hogar vive en los servidores de otro y deja de funcionar si cancelas.',
        items: [
          '**Grabaciones fuera de casa:** las grabaciones están en un centro de datos del fabricante, expuestas a brechas y cambios de políticas — consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
          '**Suscripciones:** la detección de personas y el historial de grabación suelen requerir una cuota mensual.',
          '**Dependencia:** las funciones pueden desaparecer si el fabricante cambia los planes o cierra el servicio.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Qué hace Frigate',
        content:
          '**Frigate ingiere los streams de cámaras, ejecuta la detección con IA localmente para identificar personas, vehículos y objetos, y graba solo los clips que importan.** Expone eventos y capturas a Home Assistant.',
        items: [
          'Detección de objetos en tiempo real sobre streams RTSP, filtrando el movimiento falso (árboles, sombras).',
          'Graba clips de eventos y capturas localmente; tú controlas la retención.',
          'Las zonas y los filtros de objetos reducen el ruido — por ejemplo, alertar solo de personas en la entrada.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: '¿Qué hardware necesita Frigate?',
        content:
          '**Frigate ejecuta la detección con eficiencia en una Google Coral TPU o una GPU; la detección solo por CPU funciona pero limita cuántas cámaras puedes ejecutar.** Combínalo con un host que tenga almacenamiento suficiente para las grabaciones.',
        items: [
          '**Coral TPU:** un acelerador Google Coral USB o M.2 maneja la detección para varias cámaras con bajo consumo.',
          '**GPU:** una GPU discreta también acelera la detección y es útil si ya ejecutas un LLM local en el mismo equipo — consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
          '**Almacenamiento:** planifica disco local para las grabaciones de eventos; las cámaras PoE con cable dan los streams más fiables.',
          '**Un equipo:** Frigate puede compartir un mini PC con Home Assistant — consulta [mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integración con Home Assistant',
        content:
          '**Frigate se integra con Home Assistant para que las detecciones se conviertan en entidades sobre las que puedes automatizar.** Instala Frigate, luego añade la integración de Frigate en Home Assistant.',
        numberedItems: [
          'Ejecuta Frigate (como add-on o contenedor) y apúntalo a los streams RTSP de tus cámaras.',
          'Configura los detectores (Coral/GPU) y las zonas de detección en la configuración de Frigate.',
          'Añade la integración de Frigate en Home Assistant para exponer las entidades de cámara y detección.',
          'Usa las entidades de detección en automatizaciones y paneles.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Notificaciones y automatizaciones',
        content:
          '**Usa los eventos de detección de Frigate para enviar notificaciones locales con una captura y disparar automatizaciones — sin servicio de notificación en la nube.** Combínalo con un LLM local para alertas en lenguaje natural si quieres.',
        items: [
          'Envía una notificación con captura cuando se detecta una persona en una zona específica.',
          'Dispara luces o sirenas en la detección como automatización determinista.',
          'Opcionalmente pasa un evento a un LLM local para un resumen en lenguaje natural — consulta [automatizaciones con IA con un LLM local](/es/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Coste vs cámaras en la nube',
        content:
          '**Frigate reemplaza las cuotas recurrentes de las cámaras en la nube por un coste de hardware único (acelerador + almacenamiento).** Con el tiempo, una configuración local sin suscripción es más barata y mantiene las grabaciones privadas.',
        columns: ['Aspecto', 'Cámaras en la nube', 'Frigate (local)'],
        rows: [
          { 'Aspecto': 'Privacidad', 'Cámaras en la nube': 'Grabaciones en servidores del fabricante', 'Frigate (local)': 'Las grabaciones se quedan en casa' },
          { 'Aspecto': 'Suscripción', 'Cámaras en la nube': 'Cuota mensual por IA + historial', 'Frigate (local)': 'Ninguna' },
          { 'Aspecto': 'Detección', 'Cámaras en la nube': 'IA en la nube', 'Frigate (local)': 'IA local (Coral/GPU)' },
          { 'Aspecto': 'Sin conexión', 'Cámaras en la nube': 'Limitada sin internet', 'Frigate (local)': 'Funciona en tu LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito una Coral TPU para Frigate?', a: 'No estrictamente, pero se recomienda. Una Google Coral TPU maneja la detección con IA para varias cámaras con eficiencia y bajo consumo. Una GPU también sirve, y la detección solo por CPU es posible pero limita cuántas cámaras puedes ejecutar en tiempo real.' },
          { q: '¿Funciona Frigate sin conexión?', a: 'Sí. La detección, la grabación y las notificaciones de Home Assistant corren en tu red local, así que Frigate sigue funcionando durante una caída de internet. Solo la visualización remota desde fuera del hogar necesita conectividad.' },
          { q: '¿Qué cámaras funcionan con Frigate?', a: 'Frigate funciona con cámaras que proporcionan un stream RTSP, lo que cubre la mayoría de las cámaras IP y PoE. Las cámaras PoE con cable dan los streams más fiables para la detección continua.' },
          { q: '¿Hay una suscripción para Frigate?', a: 'No. Frigate es de código abierto y corre en tu hardware sin suscripción. Pagas un coste único por un acelerador de detección y almacenamiento en lugar de cuotas recurrentes en la nube.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — dónde encajan las cámaras locales en el stack',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — aceleradores y almacenamiento',
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — un equipo para Frigate + HA',
          '[Riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks) — el problema que resuelven las cámaras locales',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: ejecuta un modelo local en el mismo equipo',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cámaras de Seguridad con IA Local con Frigate (2026)',
      description: 'Frigate 2026: cámaras de seguridad privadas con IA local, detección sin nube, sin suscripción. Hardware, Home Assistant y coste vs nube.',
      url: 'https://www.promptquorum.com/es/smart-home/local-ai-security-camera',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Cámara de seguridad con IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito una Coral TPU para Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No estrictamente, pero se recomienda. Una Google Coral TPU maneja la detección con IA para varias cámaras con eficiencia y bajo consumo. Una GPU también sirve; solo CPU es posible pero limita el número de cámaras.' } },
        { '@type': 'Question', name: '¿Funciona Frigate sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La detección, la grabación y las notificaciones de Home Assistant corren en tu red local, así que Frigate sigue funcionando durante una caída de internet.' } },
        { '@type': 'Question', name: '¿Qué cámaras funcionan con Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cámaras que proporcionan un stream RTSP, lo que cubre la mayoría de las cámaras IP y PoE. Las cámaras PoE con cable dan los streams más fiables.' } },
        { '@type': 'Question', name: '¿Hay una suscripción para Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate es de código abierto y corre en tu hardware sin suscripción — un coste único por un acelerador y almacenamiento en lugar de cuotas en la nube.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Frigate로 로컬 AI 보안 카메라 구축 (2026)',
    seoTitle: 'Frigate 로컬 AI 카메라 2026: 사적 감지',
    intro:
      'Frigate는 클라우드와 구독 없이 카메라 피드에서 로컬 AI 객체 및 사람 감지를 실행하며 Home Assistant에 직접 통합됩니다. 이 가이드는 클라우드 카메라 개인정보 보호 문제, Frigate의 기능, 감지를 가속하는 하드웨어(Coral TPU 또는 GPU), Home Assistant 통합, 알림, 구독 카메라와의 비용 비교를 다룹니다.',
    metaDescription:
      'Frigate로 사적 AI 보안 카메라 실행: 로컬 객체 및 사람 감지, 클라우드 없음, 구독 없음. 하드웨어, Home Assistant 설정, 클라우드 대비 비용.',
    twitterDescription:
      'Frigate는 사적 AI 보안 카메라를 제공합니다: 로컬 사람/객체 감지, 클라우드 없음, 구독 없음, Home Assistant와 통합.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: '사적 AI 카메라 감지를 구축하는 Home Assistant 사용자',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'Frigate 로컬 AI 카메라 Home Assistant',
      'Frigate Home Assistant',
      '로컬 AI 보안 카메라',
      '클라우드 없는 사적 보안 카메라',
      'Frigate Coral TPU',
    ],
    leadAnswerBlock:
      '**Frigate는 클라우드와 구독 없이 자체 하드웨어에서 완전히 카메라 피드에서 AI 객체 및 사람 감지를 실행하는 오픈 소스 로컬 NVR로 Home Assistant와 통합됩니다.** Coral TPU 또는 GPU가 감지를 가속하여 실시간으로 유지합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Frigate란 무엇이고 어떻게 사적 AI 카메라를 제공합니까?',
        answer:
          'Frigate는 클라우드와 구독 없이 RTSP 카메라 스트림에서 AI 객체 및 사람 감지를 로컬로 수행하는 오픈 소스 네트워크 비디오 레코더 소프트웨어입니다. 알림 및 자동화를 위해 Home Assistant와 통합됩니다. Google Coral TPU 또는 GPU가 효율적으로 감지를 처리하여 여러 카메라가 실시간으로 실행됩니다.',
        bullets: [
          '자체 하드웨어에서 로컬 AI 감지 — 클라우드 없음',
          '구독 없음; 일회성 하드웨어 비용',
          '표준 RTSP 카메라와 작동',
          '알림 및 자동화를 위해 Home Assistant와 통합',
          'Coral TPU 또는 GPU가 감지를 실시간으로 유지',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '클라우드 카메라 문제', anchor: 'cloud-problem' },
      { label: 'Frigate의 기능', anchor: 'what-frigate-does' },
      { label: '하드웨어', anchor: 'hardware' },
      { label: 'Home Assistant 통합', anchor: 'ha-integration' },
      { label: '알림 및 자동화', anchor: 'notifications' },
      { label: '클라우드 카메라 대비 비용', anchor: 'cost' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate는 클라우드와 구독 없이 카메라 피드에서 로컬 AI 사람 및 객체 감지를 실행하며 Home Assistant와 통합됩니다.' },
      { type: 'plain-terms', content: '대부분의 스마트 카메라는 기업 클라우드에 비디오를 전송하고 AI 감지 및 기록에 월 구독료를 청구합니다. Frigate는 대신 자체 하드웨어에서 AI 감지를 수행하므로 영상이 집 안에 남고 구독이 없습니다. 표준 카메라와 작동하며 Home Assistant에 연결됩니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Frigate는 내장 AI 객체/사람 감지가 있는 오픈 소스 로컬 NVR 소프트웨어입니다',
          '감지가 하드웨어에서 실행됩니다 — 영상이 절대 집을 떠나지 않으며 구독이 없습니다',
          '표준 RTSP 카메라와 작동합니다(유선 PoE 카메라가 가장 신뢰할 수 있습니다)',
          'Google Coral TPU 또는 GPU가 감지를 가속하여 많은 카메라가 실시간으로 실행됩니다',
          '알림, 스냅샷, 자동화를 위해 Home Assistant와 통합됩니다',
          '일회성 하드웨어 비용이 반복적인 클라우드 카메라 비용을 대체합니다',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: '클라우드 카메라 개인정보 보호 문제',
        content:
          '**클라우드 카메라는 영상을 제조사에 업로드하고 종종 AI 감지와 비디오 기록을 구독 뒤에 잠급니다.** 이는 가정 비디오가 다른 사람의 서버에 저장되며 구독을 취소하면 작동이 중지된다는 것을 의미합니다.',
        items: [
          '**외부의 영상:** 녹화물이 제조사 데이터 센터에 저장되어 침해와 정책 변경에 노출됩니다 — [스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks)을 참조하십시오.',
          '**구독:** 사람 감지와 녹화 기록에는 일반적으로 월 구독료가 필요합니다.',
          '**잠금:** 제조사가 계획을 변경하거나 서비스를 종료하면 기능이 사라질 수 있습니다.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Frigate의 기능',
        content:
          '**Frigate는 카메라 스트림을 수집하고 로컬에서 AI 감지를 실행하여 사람, 차량, 객체를 식별하며 중요한 클립만 녹화합니다.** 이벤트와 스냅샷을 Home Assistant에 노출합니다.',
        items: [
          'RTSP 스트림에서 실시간 객체 감지로 오탐 움직임(나무, 그림자)을 필터링합니다.',
          '이벤트 클립과 스냅샷을 로컬로 녹화합니다. 보존 기간을 직접 제어합니다.',
          '영역과 객체 필터가 노이즈를 줄입니다 — 예를 들어 진입로의 사람에게만 알림.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate에 필요한 하드웨어는 무엇입니까?',
        content:
          '**Frigate는 Google Coral TPU 또는 GPU에서 효율적으로 감지를 실행합니다. CPU만으로 감지도 가능하지만 실행할 수 있는 카메라 수가 제한됩니다.** 녹화를 위한 충분한 스토리지가 있는 호스트와 함께 사용하십시오.',
        items: [
          '**Coral TPU:** Google Coral USB 또는 M.2 가속기가 낮은 전력으로 여러 카메라의 감지를 처리합니다.',
          '**GPU:** 별도의 GPU도 감지를 가속하며 같은 기기에서 로컬 LLM도 실행 중이라면 유용합니다 — [로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참조하십시오.',
          '**스토리지:** 이벤트 녹화를 위한 로컬 디스크를 계획하십시오. 유선 PoE 카메라가 가장 신뢰할 수 있는 스트림을 제공합니다.',
          '**하나의 기기:** Frigate는 Home Assistant와 미니 PC를 공유할 수 있습니다 — [Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)를 참조하십시오.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 통합',
        content:
          '**Frigate는 Home Assistant와 통합되어 감지가 자동화할 수 있는 엔티티가 됩니다.** Frigate를 설치한 후 Home Assistant에서 Frigate 통합을 추가하십시오.',
        numberedItems: [
          'Frigate(애드온 또는 컨테이너로)를 실행하고 카메라 RTSP 스트림을 지정하십시오.',
          'Frigate 구성에서 감지기(Coral/GPU)와 감지 영역을 구성하십시오.',
          'Home Assistant에서 Frigate 통합을 추가하여 카메라 및 감지 엔티티를 노출하십시오.',
          '자동화와 대시보드에서 감지 엔티티를 사용하십시오.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: '알림 및 자동화',
        content:
          '**Frigate 감지 이벤트를 사용하여 스냅샷이 포함된 로컬 알림을 보내고 자동화를 트리거하십시오 — 클라우드 알림 서비스가 필요 없습니다.** 원한다면 자연어 알림을 위해 로컬 LLM과 결합하십시오.',
        items: [
          '특정 영역에서 사람이 감지되면 스냅샷 알림을 보내십시오.',
          '감지 시 조명이나 사이렌을 결정론적 자동화로 트리거하십시오.',
          '선택적으로 자연어 요약을 위해 로컬 LLM에 이벤트를 전달하십시오 — [로컬 LLM으로 AI 자동화](/ko/smart-home/ai-automations-local-llm)를 참조하십시오.',
        ],
      },
      cost: {
        id: 'cost',
        title: '클라우드 카메라 대비 비용',
        content:
          '**Frigate는 반복적인 클라우드 카메라 비용을 일회성 하드웨어 비용(가속기 + 스토리지)으로 대체합니다.** 시간이 지남에 따라 구독 없는 로컬 설정이 더 저렴하고 영상을 사적으로 유지합니다.',
        columns: ['측면', '클라우드 카메라', 'Frigate(로컬)'],
        rows: [
          { '측면': '개인정보 보호', '클라우드 카메라': '제조사 서버에 영상', 'Frigate(로컬)': '영상이 집 안에 유지됨' },
          { '측면': '구독', '클라우드 카메라': 'AI + 기록 월 구독료', 'Frigate(로컬)': '없음' },
          { '측면': '감지', '클라우드 카메라': '클라우드 AI', 'Frigate(로컬)': '로컬 AI(Coral/GPU)' },
          { '측면': '오프라인', '클라우드 카메라': '인터넷 없이 제한적', 'Frigate(로컬)': 'LAN에서 작동' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Frigate에 Coral TPU가 필요합니까?', a: '필수는 아니지만 권장됩니다. Google Coral TPU는 낮은 전력으로 여러 카메라의 AI 감지를 효율적으로 처리합니다. GPU도 작동하며 CPU만으로 감지도 가능하지만 실시간으로 실행할 수 있는 카메라 수가 제한됩니다.' },
          { q: 'Frigate는 오프라인에서 작동합니까?', a: '네. 감지, 녹화, Home Assistant 알림이 모두 로컬 네트워크에서 실행되므로 인터넷 장애 중에도 Frigate가 계속 작동합니다. 집 외부에서의 원격 시청만 연결이 필요합니다.' },
          { q: 'Frigate와 작동하는 카메라는 무엇입니까?', a: 'RTSP 스트림을 제공하는 카메라와 작동하며 대부분의 IP 및 PoE 카메라가 해당됩니다. 유선 PoE 카메라가 지속적인 감지를 위해 가장 신뢰할 수 있는 스트림을 제공합니다.' },
          { q: 'Frigate 구독이 있습니까?', a: '아니오. Frigate는 오픈 소스이며 구독 없이 하드웨어에서 실행됩니다. 반복적인 클라우드 비용 대신 감지 가속기와 스토리지에 일회성 비용을 지불합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 스택에서 로컬 카메라의 위치',
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 가속기와 스토리지',
          '[Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate + HA를 위한 하나의 기기',
          '[스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks) — 로컬 카메라가 해결하는 문제',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 크로스 클러스터: 같은 기기에서 로컬 모델 실행',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate로 로컬 AI 보안 카메라 구축 (2026)',
      description: 'Frigate로 사적 AI 보안 카메라 실행: 로컬 객체 및 사람 감지, 클라우드 없음, 구독 없음. 하드웨어, Home Assistant 설정, 클라우드 대비 비용.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-ai-security-camera',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI 보안 카메라' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate에 Coral TPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '필수는 아니지만 권장됩니다. Google Coral TPU는 낮은 전력으로 여러 카메라의 AI 감지를 효율적으로 처리합니다. GPU도 작동하며 CPU만으로 가능하지만 카메라 수를 제한합니다.' } },
        { '@type': 'Question', name: 'Frigate는 오프라인에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 감지, 녹화, Home Assistant 알림이 로컬 네트워크에서 실행되므로 인터넷 장애 중에도 Frigate가 계속 작동합니다.' } },
        { '@type': 'Question', name: 'Frigate와 작동하는 카메라는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP 스트림을 제공하는 카메라이며 대부분의 IP 및 PoE 카메라가 해당됩니다. 유선 PoE 카메라가 가장 신뢰할 수 있는 스트림을 제공합니다.' } },
        { '@type': 'Question', name: 'Frigate 구독이 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '아니오. Frigate는 오픈 소스이며 구독 없이 하드웨어에서 실행됩니다 — 클라우드 비용 대신 가속기와 스토리지에 일회성 비용.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Caméras de Sécurité à IA Locale avec Frigate (2026)',
    seoTitle: 'Caméras IA Locale Frigate 2026 : Détection Privée',
    intro:
      'Frigate exécute la détection locale d\'objets et de personnes par IA sur vos flux de caméras, sans cloud et sans abonnement, en s\'intégrant directement à Home Assistant. Ce guide couvre le problème de confidentialité des caméras cloud, ce que fait Frigate, le matériel qui accélère la détection (un Coral TPU ou un GPU), l\'intégration à Home Assistant, les notifications et la comparaison de coût avec les caméras à abonnement.',
    metaDescription:
      'Frigate 2026 : caméras IA privées, détection locale d\'objets et personnes, sans cloud ni abonnement. Matériel, Home Assistant et coût.',
    twitterDescription:
      'Frigate vous donne des caméras de sécurité à IA privées : détection locale de personnes/objets, sans cloud, sans abonnement, intégrée à Home Assistant.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de Home Assistant construisant une détection de caméra IA privée',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate caméra ia locale home assistant',
      'frigate home assistant',
      'caméra de sécurité ia locale',
      'caméra de sécurité privée sans cloud',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate est un NVR local open source qui exécute la détection d\'objets et de personnes par IA sur vos flux de caméras entièrement sur votre propre matériel — sans cloud, sans abonnement — et s\'intègre à Home Assistant.** Un Coral TPU ou un GPU accélère la détection pour qu\'elle reste en temps réel.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Frigate et comment offre-t-il des caméras IA privées ?',
        answer:
          'Frigate est un logiciel d\'enregistreur vidéo réseau open source qui réalise la détection d\'objets et de personnes par IA localement sur les flux de caméras RTSP, sans cloud et sans abonnement. Il s\'intègre à Home Assistant pour les notifications et automatisations. Un Google Coral TPU ou un GPU gère la détection efficacement pour que plusieurs caméras tournent en temps réel.',
        bullets: [
          'Détection IA locale sur votre propre matériel — sans cloud',
          'Sans abonnement ; coût matériel unique',
          'Fonctionne avec des caméras RTSP standard',
          'S\'intègre à Home Assistant pour alertes et automatisations',
          'Un Coral TPU ou un GPU garde la détection en temps réel',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Le problème des caméras cloud', anchor: 'cloud-problem' },
      { label: 'Ce que fait Frigate', anchor: 'what-frigate-does' },
      { label: 'Matériel', anchor: 'hardware' },
      { label: 'Intégration à Home Assistant', anchor: 'ha-integration' },
      { label: 'Notifications et automatisations', anchor: 'notifications' },
      { label: 'Coût vs caméras cloud', anchor: 'cost' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate exécute la détection locale de personnes et d\'objets par IA sur vos flux de caméras sans cloud et sans abonnement, en s\'intégrant à Home Assistant.' },
      { type: 'plain-terms', content: 'La plupart des caméras connectées envoient la vidéo à un cloud d\'entreprise et facturent un abonnement mensuel pour la détection IA et l\'historique. Frigate fait la détection IA sur votre propre matériel à la place, donc les images restent chez vous et il n\'y a pas d\'abonnement. Il fonctionne avec des caméras standard et se branche sur Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Frigate est un logiciel de NVR local open source avec détection IA d\'objets/personnes intégrée',
          'La détection tourne sur votre matériel — les images ne quittent jamais la maison, sans abonnement',
          'Fonctionne avec des caméras RTSP standard (les caméras PoE filaires sont les plus fiables)',
          'Un Google Coral TPU ou un GPU accélère la détection pour que de nombreuses caméras tournent en temps réel',
          'S\'intègre à Home Assistant pour notifications, captures et automatisations',
          'Un coût matériel unique remplace les frais récurrents des caméras cloud',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'Le problème de confidentialité des caméras cloud',
        content:
          '**Les caméras cloud téléversent vos images vers un fabricant et verrouillent souvent la détection IA et l\'historique vidéo derrière un abonnement.** Cela signifie que votre vidéo domestique vit sur les serveurs d\'un tiers et cesse de fonctionner si vous résiliez.',
        items: [
          '**Images hors site :** les enregistrements résident dans un centre de données du fabricant, exposés aux fuites et changements de politique — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          '**Abonnements :** la détection de personnes et l\'historique d\'enregistrement nécessitent généralement un abonnement mensuel.',
          '**Verrouillage :** les fonctions peuvent disparaître si le fabricant change de formules ou ferme le service.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Ce que fait Frigate',
        content:
          '**Frigate ingère les flux de caméras, exécute la détection IA localement pour identifier personnes, véhicules et objets, et n\'enregistre que les clips qui comptent.** Il expose événements et captures à Home Assistant.',
        items: [
          'Détection d\'objets en temps réel sur les flux RTSP, filtrant les faux mouvements (arbres, ombres).',
          'Enregistre clips d\'événements et captures localement ; vous contrôlez la rétention.',
          'Les zones et filtres d\'objets réduisent le bruit — par exemple, n\'alerter que sur les personnes dans l\'allée.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel Frigate nécessite-t-il ?',
        content:
          '**Frigate exécute la détection efficacement sur un Google Coral TPU ou un GPU ; la détection CPU seule fonctionne mais limite le nombre de caméras.** Associez-le à un hôte disposant d\'assez de stockage pour les enregistrements.',
        items: [
          '**Coral TPU :** un accélérateur Google Coral USB ou M.2 gère la détection pour plusieurs caméras à faible consommation.',
          '**GPU :** un GPU discret accélère aussi la détection et est utile si vous exécutez déjà un LLM local sur la même machine — voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          '**Stockage :** prévoyez un disque local pour les enregistrements d\'événements ; les caméras PoE filaires donnent les flux les plus fiables.',
          '**Une machine :** Frigate peut partager un mini-PC avec Home Assistant — voir [meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Intégration à Home Assistant',
        content:
          '**Frigate s\'intègre à Home Assistant pour que les détections deviennent des entités sur lesquelles automatiser.** Installez Frigate, puis ajoutez l\'intégration Frigate dans Home Assistant.',
        numberedItems: [
          'Exécutez Frigate (en add-on ou conteneur) et pointez-le vers les flux RTSP de vos caméras.',
          'Configurez les détecteurs (Coral/GPU) et les zones de détection dans la configuration de Frigate.',
          'Ajoutez l\'intégration Frigate dans Home Assistant pour exposer les entités de caméra et de détection.',
          'Utilisez les entités de détection dans les automatisations et tableaux de bord.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Notifications et automatisations',
        content:
          '**Utilisez les événements de détection de Frigate pour envoyer des notifications locales avec une capture et déclencher des automatisations — aucun service de notification cloud requis.** Combinez avec un LLM local pour des alertes en langage naturel si vous le souhaitez.',
        items: [
          'Envoyez une notification avec capture lorsqu\'une personne est détectée dans une zone spécifique.',
          'Déclenchez lumières ou sirènes à la détection comme automatisation déterministe.',
          'Transmettez éventuellement un événement à un LLM local pour un résumé en langage clair — voir [automatisations IA avec un LLM local](/fr/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Coût vs caméras cloud',
        content:
          '**Frigate remplace les frais récurrents des caméras cloud par un coût matériel unique (accélérateur + stockage).** Avec le temps, une configuration locale sans abonnement est moins chère et garde les images privées.',
        columns: ['Aspect', 'Caméras cloud', 'Frigate (local)'],
        rows: [
          { 'Aspect': 'Confidentialité', 'Caméras cloud': 'Images sur les serveurs du fabricant', 'Frigate (local)': 'Les images restent chez vous' },
          { 'Aspect': 'Abonnement', 'Caméras cloud': 'Frais mensuels pour IA + historique', 'Frigate (local)': 'Aucun' },
          { 'Aspect': 'Détection', 'Caméras cloud': 'IA cloud', 'Frigate (local)': 'IA locale (Coral/GPU)' },
          { 'Aspect': 'Hors ligne', 'Caméras cloud': 'Limitée sans internet', 'Frigate (local)': 'Fonctionne sur votre LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Ai-je besoin d\'un Coral TPU pour Frigate ?', a: 'Pas strictement, mais c\'est recommandé. Un Google Coral TPU gère la détection IA pour plusieurs caméras efficacement et à faible consommation. Un GPU fonctionne aussi, et la détection CPU seule est possible mais limite le nombre de caméras que vous pouvez exécuter en temps réel.' },
          { q: 'Frigate fonctionne-t-il hors ligne ?', a: 'Oui. Détection, enregistrement et notifications Home Assistant tournent tous sur votre réseau local, donc Frigate continue de fonctionner lors d\'une coupure internet. Seule la visualisation à distance depuis l\'extérieur nécessite une connectivité.' },
          { q: 'Quelles caméras fonctionnent avec Frigate ?', a: 'Frigate fonctionne avec les caméras fournissant un flux RTSP, ce qui couvre la plupart des caméras IP et PoE. Les caméras PoE filaires donnent les flux les plus fiables pour une détection continue.' },
          { q: 'Y a-t-il un abonnement pour Frigate ?', a: 'Non. Frigate est open source et tourne sur votre matériel sans abonnement. Vous payez un coût unique pour un accélérateur de détection et du stockage au lieu de frais cloud récurrents.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — où s\'insèrent les caméras locales dans le stack',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — accélérateurs et stockage',
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — une machine pour Frigate + HA',
          '[Risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks) — le problème que résolvent les caméras locales',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : exécuter un modèle local sur la même machine',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Caméras de Sécurité à IA Locale avec Frigate (2026)',
      description: 'Frigate 2026 : caméras IA privées, détection locale d\'objets et personnes, sans cloud ni abonnement. Matériel, Home Assistant et coût.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-ai-security-camera',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Caméra de sécurité IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin d\'un Coral TPU pour Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Pas strictement, mais c\'est recommandé. Un Google Coral TPU gère la détection IA pour plusieurs caméras efficacement et à faible consommation. Un GPU fonctionne aussi ; le CPU seul est possible mais limite le nombre de caméras.' } },
        { '@type': 'Question', name: 'Frigate fonctionne-t-il hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Détection, enregistrement et notifications Home Assistant tournent sur votre réseau local, donc Frigate continue de fonctionner lors d\'une coupure internet.' } },
        { '@type': 'Question', name: 'Quelles caméras fonctionnent avec Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Les caméras fournissant un flux RTSP, ce qui couvre la plupart des caméras IP et PoE. Les caméras PoE filaires donnent les flux les plus fiables.' } },
        { '@type': 'Question', name: 'Y a-t-il un abonnement pour Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Frigate est open source et tourne sur votre matériel sans abonnement — un coût unique pour un accélérateur et du stockage au lieu de frais cloud.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Frigate によるローカルAIセキュリティカメラ（2026）',
    seoTitle: 'Frigate ローカルAIカメラ 2026：プライベート検出',
    intro:
      'Frigate は、クラウドなし・サブスクなしで、あなたのカメラ映像にローカルAIの物体・人物検出を実行し、Home Assistant に直接統合します。本ガイドは、クラウドカメラのプライバシー問題、Frigate の機能、検出を高速化するハードウェア（Coral TPU または GPU）、Home Assistant 統合、通知、そしてサブスク型カメラとのコスト比較を扱います。',
    metaDescription:
      'Frigate でプライベートなAIセキュリティカメラを構築（2026）：ローカルの物体・人物検出、クラウドなし、サブスクなし。月額費用ゼロで映像データを自宅内に保持できる。ハードウェア選定、Home Assistant 設定、クラウドとのコスト比較を解説。',
    twitterDescription:
      'Frigate はプライベートなAIセキュリティカメラを提供：ローカルの人物・物体検出、クラウドなし、サブスクなし、Home Assistant と統合。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プライベートなAIカメラ検出を構築する Home Assistant ユーザー',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate ローカルAIカメラ home assistant',
      'frigate home assistant',
      'ローカルAI セキュリティカメラ',
      'プライベート セキュリティカメラ クラウドなし',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate はオープンソースのローカル NVR で、あなたのカメラ映像に対する物体・人物のAI検出を完全に自分のハードウェアで実行し——クラウドなし、サブスクなし——Home Assistant と統合します。** Coral TPU または GPU が検出を高速化し、リアルタイムを保ちます。',
    quickAnswerTop: {
      ja: {
        question: 'Frigate とは何で、どうやってプライベートなAIカメラを実現しますか？',
        answer:
          'Frigate はオープンソースのネットワークビデオレコーダーソフトで、RTSP カメラストリームに対する物体・人物のAI検出をローカルで行い、クラウドもサブスクもありません。通知や自動化のため Home Assistant と統合します。Google Coral TPU または GPU が検出を効率的に処理し、複数のカメラをリアルタイムで動かします。',
        bullets: [
          '自分のハードウェアでのローカルAI検出——クラウドなし',
          'サブスクなし；一度きりのハードウェア費用',
          '標準的な RTSP カメラで動作',
          '通知と自動化のため Home Assistant と統合',
          'Coral TPU または GPU が検出をリアルタイムに保つ',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'クラウドカメラの問題', anchor: 'cloud-problem' },
      { label: 'Frigate の機能', anchor: 'what-frigate-does' },
      { label: 'ハードウェア', anchor: 'hardware' },
      { label: 'Home Assistant 統合', anchor: 'ha-integration' },
      { label: '通知と自動化', anchor: 'notifications' },
      { label: 'クラウドカメラとのコスト比較', anchor: 'cost' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate は、クラウドなし・サブスクなしであなたのカメラ映像にローカルAIの人物・物体検出を実行し、Home Assistant と統合します。' },
      { type: 'plain-terms', content: '多くのスマートカメラは映像を企業のクラウドへ送り、AI検出や履歴に月額料金を課します。Frigate は代わりにAI検出を自分のハードウェアで行うため、映像は家にとどまり、サブスクはありません。標準的なカメラで動作し、Home Assistant に接続します。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Frigate は AI 物体/人物検出を内蔵したオープンソースのローカル NVR ソフト',
          '検出は自分のハードウェアで動く——映像は家を出ず、サブスクなし',
          '標準的な RTSP カメラで動作（有線 PoE カメラが最も信頼できる）',
          'Google Coral TPU または GPU が検出を高速化し、多数のカメラをリアルタイムで動かす',
          '通知、スナップショット、自動化のため Home Assistant と統合',
          '一度きりのハードウェア費用が、クラウドカメラの継続料金を置き換える',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'クラウドカメラのプライバシー問題',
        content:
          '**クラウドカメラはあなたの映像をメーカーにアップロードし、AI検出や映像履歴をしばしばサブスクの背後に閉じ込めます。** つまり、あなたの家の映像は他者のサーバー上にあり、解約すると動かなくなります。',
        items: [
          '**映像が外部に：** 録画はメーカーのデータセンターにあり、漏えいやポリシー変更にさらされます——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          '**サブスク：** 人物検出や録画履歴は通常、月額料金を要します。',
          '**ロックイン：** メーカーがプランを変えたりサービスを終了したりすると、機能が消える可能性があります。',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Frigate の機能',
        content:
          '**Frigate はカメラストリームを取り込み、ローカルでAI検出を実行して人物・車両・物体を識別し、重要なクリップだけを録画します。** イベントとスナップショットを Home Assistant に公開します。',
        items: [
          'RTSP ストリームでのリアルタイム物体検出。誤検知（木、影）を除外します。',
          'イベントクリップとスナップショットをローカルに録画；保持期間はあなたが管理します。',
          'ゾーンと物体フィルターがノイズを減らします——例：私道にいる人物のみ通知。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate にはどんなハードウェアが必要ですか？',
        content:
          '**Frigate は Google Coral TPU または GPU で検出を効率的に実行します；CPU のみの検出も動きますが、動かせるカメラ数が制限されます。** 録画に十分なストレージを持つホストと組み合わせましょう。',
        items: [
          '**Coral TPU：** Google Coral の USB または M.2 アクセラレーターが、低消費電力で複数カメラの検出を処理します。',
          '**GPU：** 専用 GPU も検出を高速化し、同じ機器で既にローカル LLM を動かしているなら有用です——[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
          '**ストレージ：** イベント録画用のローカルディスクを計画しましょう；有線 PoE カメラが最も信頼できるストリームを提供します。',
          '**一台：** Frigate は Home Assistant とミニPCを共有できます——[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 統合',
        content:
          '**Frigate は Home Assistant と統合し、検出を自動化に使えるエンティティにします。** Frigate をインストールし、Home Assistant で Frigate 統合を追加します。',
        numberedItems: [
          'Frigate を（アドオンまたはコンテナとして）動かし、カメラの RTSP ストリームを指定します。',
          'Frigate 設定で検出器（Coral/GPU）と検出ゾーンを構成します。',
          'Home Assistant で Frigate 統合を追加し、カメラと検出のエンティティを公開します。',
          '検出エンティティを自動化やダッシュボードで使います。',
        ],
      },
      notifications: {
        id: 'notifications',
        title: '通知と自動化',
        content:
          '**Frigate の検出イベントで、スナップショット付きのローカル通知を送り、自動化を起動します——クラウド通知サービスは不要です。** 望むなら、ローカル LLM と組み合わせて自然言語のアラートにできます。',
        items: [
          '特定のゾーンで人物が検出されたら、スナップショット通知を送ります。',
          '検出時に照明やサイレンを起動する、決定論的な自動化として。',
          '必要なら、イベントをローカル LLM に渡して自然言語の要約に——[ローカルLLMによるAI自動化](/ja/smart-home/ai-automations-local-llm)を参照。',
        ],
      },
      cost: {
        id: 'cost',
        title: 'クラウドカメラとのコスト比較',
        content:
          '**Frigate はクラウドカメラの継続料金を、一度きりのハードウェア費用（アクセラレーター＋ストレージ）に置き換えます。** 時間が経つほど、サブスクなしのローカル構成は安く、映像をプライベートに保ちます。',
        columns: ['観点', 'クラウドカメラ', 'Frigate（ローカル）'],
        rows: [
          { '観点': 'プライバシー', 'クラウドカメラ': '映像はメーカーのサーバー', 'Frigate（ローカル）': '映像は家にとどまる' },
          { '観点': 'サブスク', 'クラウドカメラ': 'AI＋履歴に月額料金', 'Frigate（ローカル）': 'なし' },
          { '観点': '検出', 'クラウドカメラ': 'クラウドAI', 'Frigate（ローカル）': 'ローカルAI（Coral/GPU）' },
          { '観点': 'オフライン', 'クラウドカメラ': 'インターネットなしでは限定的', 'Frigate（ローカル）': 'あなたの LAN で動作' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Frigate に Coral TPU は必要ですか？', a: '厳密には不要ですが、推奨です。Google Coral TPU は複数カメラのAI検出を効率的かつ低消費電力で処理します。GPU でも動き、CPU のみの検出も可能ですが、リアルタイムで動かせるカメラ数が制限されます。' },
          { q: 'Frigate はオフラインで動きますか？', a: 'はい。検出、録画、Home Assistant の通知はすべてローカルネットワークで動くため、Frigate はインターネット障害中も動き続けます。家の外からのリモート視聴だけが接続を必要とします。' },
          { q: 'どのカメラが Frigate で動きますか？', a: 'Frigate は RTSP ストリームを提供するカメラで動き、これは大半の IP・PoE カメラを網羅します。有線 PoE カメラが継続的な検出に最も信頼できるストリームを提供します。' },
          { q: 'Frigate にサブスクはありますか？', a: 'いいえ。Frigate はオープンソースで、サブスクなしであなたのハードウェアで動きます。継続的なクラウド料金の代わりに、検出アクセラレーターとストレージに一度きりの費用を払います。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルカメラが構成のどこに収まるか',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — アクセラレーターとストレージ',
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate＋HA を一台で',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — ローカルカメラが解決する問題',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：同じ機器でローカルモデルを動かす',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate によるローカルAIセキュリティカメラ（2026）',
      description: 'Frigate でプライベートなAIセキュリティカメラを構築（2026）：ローカルの物体・人物検出、クラウドなし、サブスクなし。月額費用ゼロで映像データを自宅内に保持できる。ハードウェア選定、Home Assistant 設定、クラウドとのコスト比較を解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-ai-security-camera',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AIセキュリティカメラ' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate に Coral TPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '厳密には不要ですが、推奨です。Google Coral TPU は複数カメラのAI検出を効率的かつ低消費電力で処理します。GPU でも動き、CPU のみも可能ですがカメラ数が制限されます。' } },
        { '@type': 'Question', name: 'Frigate はオフラインで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。検出、録画、Home Assistant の通知はローカルネットワークで動くため、インターネット障害中も動き続けます。' } },
        { '@type': 'Question', name: 'どのカメラが Frigate で動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'RTSP ストリームを提供するカメラで動き、大半の IP・PoE カメラを網羅します。有線 PoE カメラが最も信頼できるストリームを提供します。' } },
        { '@type': 'Question', name: 'Frigate にサブスクはありますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Frigate はオープンソースで、サブスクなしで動きます——クラウド料金の代わりにアクセラレーターとストレージへの一度きりの費用です。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: 'Câmeras de Segurança com IA Local com Frigate (2026)',
    seoTitle: 'Câmeras IA Local com Frigate 2026: Detecção Privada',
    intro:
      'O Frigate executa detecção local de objetos e pessoas com IA nos feeds das suas câmeras, sem nuvem e sem assinatura, integrando-se diretamente ao Home Assistant. Este guia cobre o problema de privacidade das câmeras na nuvem, o que o Frigate faz, o hardware que acelera a detecção (uma Coral TPU ou GPU), a integração com o Home Assistant, as notificações e como o custo se compara ao das câmeras por assinatura.',
    metaDescription:
      'Frigate 2026: câmeras de segurança com IA privada, detecção local, sem nuvem, sem assinatura. Hardware, Home Assistant e custo vs nuvem.',
    twitterDescription:
      'O Frigate dá câmeras de segurança com IA privadas: detecção local de pessoas/objetos, sem nuvem, sem assinatura, integrada ao Home Assistant.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários do Home Assistant construindo detecção de câmera com IA privada',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate câmera ia local home assistant',
      'frigate home assistant',
      'câmera de segurança ia local',
      'câmera de segurança privada sem nuvem',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**O Frigate é um NVR local de código aberto que executa detecção de objetos e pessoas com IA nos feeds das suas câmeras inteiramente no seu próprio hardware — sem nuvem, sem assinatura — e se integra ao Home Assistant.** Uma Coral TPU ou GPU acelera a detecção para que ela permaneça em tempo real.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Frigate e como ele dá câmeras com IA privadas?',
        answer:
          'O Frigate é um software gravador de vídeo em rede de código aberto que realiza detecção de objetos e pessoas com IA localmente em streams de câmeras RTSP, sem nuvem e sem assinatura. Ele se integra ao Home Assistant para notificações e automações. Uma Google Coral TPU ou uma GPU lida com a detecção com eficiência para que várias câmeras rodem em tempo real.',
        bullets: [
          'Detecção com IA local no seu próprio hardware — sem nuvem',
          'Sem assinatura; custo de hardware único',
          'Funciona com câmeras RTSP padrão',
          'Integra-se ao Home Assistant para alertas e automações',
          'Uma Coral TPU ou GPU mantém a detecção em tempo real',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O problema das câmeras na nuvem', anchor: 'cloud-problem' },
      { label: 'O que o Frigate faz', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Integração com o Home Assistant', anchor: 'ha-integration' },
      { label: 'Notificações e automações', anchor: 'notifications' },
      { label: 'Custo vs câmeras na nuvem', anchor: 'cost' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Frigate executa detecção local de pessoas e objetos com IA nos feeds das suas câmeras sem nuvem e sem assinatura, integrando-se ao Home Assistant.' },
      { type: 'plain-terms', content: 'A maioria das câmeras inteligentes envia vídeo para uma nuvem de empresa e cobra uma taxa mensal por detecção com IA e histórico. O Frigate faz a detecção com IA no seu próprio hardware, então as gravações ficam em casa e não há assinatura. Ele funciona com câmeras padrão e se conecta ao Home Assistant.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'O Frigate é um software de NVR local de código aberto com detecção de objetos/pessoas com IA embutida',
          'A detecção roda no seu hardware — as gravações nunca saem de casa, sem assinatura',
          'Funciona com câmeras RTSP padrão (câmeras PoE com fio são as mais confiáveis)',
          'Uma Google Coral TPU ou uma GPU acelera a detecção para que muitas câmeras rodem em tempo real',
          'Integra-se ao Home Assistant para notificações, capturas e automações',
          'Um custo de hardware único substitui as taxas recorrentes das câmeras na nuvem',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: 'O problema de privacidade das câmeras na nuvem',
        content:
          '**Câmeras na nuvem enviam suas gravações a um fabricante e muitas vezes bloqueiam a detecção com IA e o histórico de vídeo atrás de uma assinatura.** Isso significa que o vídeo do seu lar vive nos servidores de outra pessoa e para de funcionar se você cancelar.',
        items: [
          '**Gravações fora de casa:** as gravações ficam em um data center do fabricante, expostas a vazamentos e mudanças de política — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          '**Assinaturas:** a detecção de pessoas e o histórico de gravação normalmente exigem uma taxa mensal.',
          '**Dependência:** os recursos podem desaparecer se o fabricante mudar os planos ou encerrar o serviço.',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'O que o Frigate faz',
        content:
          '**O Frigate ingere os streams das câmeras, executa a detecção com IA localmente para identificar pessoas, veículos e objetos, e grava apenas os clipes que importam.** Ele expõe eventos e capturas ao Home Assistant.',
        items: [
          'Detecção de objetos em tempo real nos streams RTSP, filtrando o movimento falso (árvores, sombras).',
          'Grava clipes de eventos e capturas localmente; você controla a retenção.',
          'Zonas e filtros de objetos reduzem o ruído — por exemplo, alertar só sobre pessoas na garagem.',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Que hardware o Frigate precisa?',
        content:
          '**O Frigate executa a detecção com eficiência em uma Google Coral TPU ou uma GPU; a detecção só por CPU funciona, mas limita quantas câmeras você pode rodar.** Combine-o com um host que tenha armazenamento suficiente para as gravações.',
        items: [
          '**Coral TPU:** um acelerador Google Coral USB ou M.2 lida com a detecção para várias câmeras com baixo consumo.',
          '**GPU:** uma GPU dedicada também acelera a detecção e é útil se você já roda um LLM local na mesma máquina — veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          '**Armazenamento:** planeje disco local para as gravações de eventos; câmeras PoE com fio dão os streams mais confiáveis.',
          '**Uma máquina:** o Frigate pode compartilhar um mini PC com o Home Assistant — veja [melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integração com o Home Assistant',
        content:
          '**O Frigate se integra ao Home Assistant para que as detecções se tornem entidades sobre as quais você pode automatizar.** Instale o Frigate, depois adicione a integração do Frigate no Home Assistant.',
        numberedItems: [
          'Rode o Frigate (como add-on ou contêiner) e aponte-o para os streams RTSP das suas câmeras.',
          'Configure os detectores (Coral/GPU) e as zonas de detecção na configuração do Frigate.',
          'Adicione a integração do Frigate no Home Assistant para expor as entidades de câmera e detecção.',
          'Use as entidades de detecção em automações e painéis.',
        ],
      },
      notifications: {
        id: 'notifications',
        title: 'Notificações e automações',
        content:
          '**Use os eventos de detecção do Frigate para enviar notificações locais com uma captura e disparar automações — sem serviço de notificação na nuvem.** Combine com um LLM local para alertas em linguagem natural, se quiser.',
        items: [
          'Envie uma notificação com captura quando uma pessoa é detectada em uma zona específica.',
          'Dispare luzes ou sirenes na detecção como automação determinística.',
          'Opcionalmente passe um evento a um LLM local para um resumo em linguagem natural — veja [automações de IA com um LLM local](/pt/smart-home/ai-automations-local-llm).',
        ],
      },
      cost: {
        id: 'cost',
        title: 'Custo vs câmeras na nuvem',
        content:
          '**O Frigate substitui as taxas recorrentes das câmeras na nuvem por um custo de hardware único (acelerador + armazenamento).** Com o tempo, uma configuração local sem assinatura é mais barata e mantém as gravações privadas.',
        columns: ['Aspecto', 'Câmeras na nuvem', 'Frigate (local)'],
        rows: [
          { 'Aspecto': 'Privacidade', 'Câmeras na nuvem': 'Gravações em servidores do fabricante', 'Frigate (local)': 'As gravações ficam em casa' },
          { 'Aspecto': 'Assinatura', 'Câmeras na nuvem': 'Taxa mensal por IA + histórico', 'Frigate (local)': 'Nenhuma' },
          { 'Aspecto': 'Detecção', 'Câmeras na nuvem': 'IA na nuvem', 'Frigate (local)': 'IA local (Coral/GPU)' },
          { 'Aspecto': 'Offline', 'Câmeras na nuvem': 'Limitada sem internet', 'Frigate (local)': 'Funciona na sua LAN' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de uma Coral TPU para o Frigate?', a: 'Não estritamente, mas é recomendado. Uma Google Coral TPU lida com a detecção com IA para várias câmeras com eficiência e baixo consumo. Uma GPU também serve, e a detecção só por CPU é possível, mas limita quantas câmeras você pode rodar em tempo real.' },
          { q: 'O Frigate funciona offline?', a: 'Sim. A detecção, a gravação e as notificações do Home Assistant rodam na sua rede local, então o Frigate continua funcionando durante uma queda de internet. Só a visualização remota de fora do lar precisa de conectividade.' },
          { q: 'Quais câmeras funcionam com o Frigate?', a: 'O Frigate funciona com câmeras que fornecem um stream RTSP, o que cobre a maioria das câmeras IP e PoE. Câmeras PoE com fio dão os streams mais confiáveis para detecção contínua.' },
          { q: 'Há uma assinatura para o Frigate?', a: 'Não. O Frigate é de código aberto e roda no seu hardware sem assinatura. Você paga um custo único por um acelerador de detecção e armazenamento em vez de taxas recorrentes na nuvem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — onde as câmeras locais se encaixam no stack',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — aceleradores e armazenamento',
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — uma máquina para Frigate + HA',
          '[Riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks) — o problema que as câmeras locais resolvem',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: rodar um modelo local na mesma máquina',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Câmeras de Segurança com IA Local com Frigate (2026)',
      description: 'Frigate 2026: câmeras de segurança com IA privada, detecção local, sem nuvem, sem assinatura. Hardware, Home Assistant e custo vs nuvem.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-ai-security-camera',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Câmera de segurança com IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de uma Coral TPU para o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Não estritamente, mas é recomendado. Uma Google Coral TPU lida com a detecção com IA para várias câmeras com eficiência e baixo consumo. Uma GPU também serve; só por CPU é possível, mas limita o número de câmeras.' } },
        { '@type': 'Question', name: 'O Frigate funciona offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A detecção, a gravação e as notificações do Home Assistant rodam na sua rede local, então o Frigate continua funcionando durante uma queda de internet.' } },
        { '@type': 'Question', name: 'Quais câmeras funcionam com o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Câmeras que fornecem um stream RTSP, o que cobre a maioria das câmeras IP e PoE. Câmeras PoE com fio dão os streams mais confiáveis.' } },
        { '@type': 'Question', name: 'Há uma assinatura para o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O Frigate é de código aberto e roda no seu hardware sem assinatura — um custo único por um acelerador e armazenamento em vez de taxas na nuvem.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local AI & LLMs in the Smart Home',
    title: '用 Frigate 的本地 AI 安防摄像头（2026）',
    seoTitle: 'Frigate 本地 AI 摄像头 2026：私密检测',
    intro:
      'Frigate 在你的摄像头画面上进行本地 AI 物体与人物检测，无云端、无订阅，并直接集成到 Home Assistant。本指南讲解云端摄像头的隐私问题、Frigate 的功能、加速检测的硬件（Coral TPU 或 GPU）、Home Assistant 集成、通知，以及与订阅式摄像头的成本对比。',
    metaDescription:
      '用 Frigate 打造私密的 AI 安防摄像头（2026）：本地物体与人物检测，无云端、无订阅费，视频数据完全存储在本地家庭网络中。含详细硬件选型、Home Assistant 集成配置，以及与云端摄像头服务的年度费用对比。',
    twitterDescription:
      'Frigate 给你私密的 AI 安防摄像头：本地人物/物体检测，无云端、无订阅，与 Home Assistant 集成。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '构建私密 AI 摄像头检测的 Home Assistant 用户',
    primaryTerm: 'Frigate local AI camera',
    targetKeywords: [
      'frigate 本地AI摄像头 home assistant',
      'frigate home assistant',
      '本地AI 安防摄像头',
      '私密安防摄像头 无云端',
      'frigate coral tpu',
    ],
    leadAnswerBlock:
      '**Frigate 是一个开源的本地 NVR，完全在你自己的硬件上对摄像头画面进行 AI 物体与人物检测——无云端、无订阅——并与 Home Assistant 集成。** Coral TPU 或 GPU 加速检测，使其保持实时。',
    quickAnswerTop: {
      zh: {
        question: 'Frigate 是什么，它如何提供私密的 AI 摄像头？',
        answer:
          'Frigate 是一款开源的网络视频录像软件，在 RTSP 摄像头流上本地进行 AI 物体与人物检测，无云端、无订阅。它与 Home Assistant 集成以实现通知和自动化。一块 Google Coral TPU 或一块 GPU 能高效处理检测，使多路摄像头实时运行。',
        bullets: [
          '在你自己硬件上的本地 AI 检测——无云端',
          '无订阅；一次性硬件成本',
          '兼容标准 RTSP 摄像头',
          '与 Home Assistant 集成以实现告警和自动化',
          'Coral TPU 或 GPU 让检测保持实时',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '云端摄像头的问题', anchor: 'cloud-problem' },
      { label: 'Frigate 的功能', anchor: 'what-frigate-does' },
      { label: '硬件', anchor: 'hardware' },
      { label: 'Home Assistant 集成', anchor: 'ha-integration' },
      { label: '通知与自动化', anchor: 'notifications' },
      { label: '与云端摄像头的成本对比', anchor: 'cost' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Frigate 在你的摄像头画面上进行本地 AI 人物与物体检测，无云端、无订阅，并与 Home Assistant 集成。' },
      { type: 'plain-terms', content: '大多数智能摄像头把视频发送到企业云端，并就 AI 检测和历史收取月费。Frigate 则在你自己的硬件上做 AI 检测，因此录像留在家中，而且没有订阅。它兼容标准摄像头，并接入 Home Assistant。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Frigate 是内置 AI 物体/人物检测的开源本地 NVR 软件',
          '检测在你的硬件上运行——录像从不离开家门，无订阅',
          '兼容标准 RTSP 摄像头（有线 PoE 摄像头最可靠）',
          '一块 Google Coral TPU 或一块 GPU 加速检测，使多路摄像头实时运行',
          '与 Home Assistant 集成以实现通知、快照和自动化',
          '一次性硬件成本取代云端摄像头的持续费用',
        ],
      },
      cloudProblem: {
        id: 'cloud-problem',
        title: '云端摄像头的隐私问题',
        content:
          '**云端摄像头把你的录像上传到厂商，并常常把 AI 检测和视频历史锁在订阅之后。** 这意味着你家的视频存在别人的服务器上，一旦取消就会停止工作。',
        items: [
          '**录像在异地：** 录像存放在厂商数据中心，面临泄露和政策变更——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '**订阅：** 人物检测和录制历史通常需要月费。',
          '**锁定：** 如果厂商更改套餐或关停服务，功能可能消失。',
        ],
      },
      whatFrigateDoes: {
        id: 'what-frigate-does',
        title: 'Frigate 的功能',
        content:
          '**Frigate 接入摄像头流，在本地运行 AI 检测以识别人、车辆和物体，并只录制重要的片段。** 它把事件和快照暴露给 Home Assistant。',
        items: [
          '在 RTSP 流上进行实时物体检测，过滤虚假移动（树木、阴影）。',
          '在本地录制事件片段和快照；保留时长由你控制。',
          '区域和物体过滤器可减少噪声——例如，只对车道上的人物告警。',
        ],
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate 需要什么硬件？',
        content:
          '**Frigate 在 Google Coral TPU 或 GPU 上高效运行检测；仅用 CPU 的检测也可行，但会限制你能运行的摄像头数量。** 把它与一台有足够存储用于录像的主机搭配。',
        items: [
          '**Coral TPU：** 一块 Google Coral USB 或 M.2 加速器能以低功耗处理多路摄像头的检测。',
          '**GPU：** 独立 GPU 同样加速检测，若你已在同一台机器上运行本地 LLM 则尤为有用——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '**存储：** 为事件录像规划本地磁盘；有线 PoE 摄像头提供最可靠的流。',
          '**一台机器：** Frigate 可与 Home Assistant 共用一台迷你 PC——参见[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 集成',
        content:
          '**Frigate 与 Home Assistant 集成，使检测变成你可以据以做自动化的实体。** 安装 Frigate，然后在 Home Assistant 中添加 Frigate 集成。',
        numberedItems: [
          '运行 Frigate（作为加载项或容器），并把它指向你摄像头的 RTSP 流。',
          '在 Frigate 配置中设置检测器（Coral/GPU）和检测区域。',
          '在 Home Assistant 中添加 Frigate 集成，以暴露摄像头和检测实体。',
          '在自动化和仪表盘中使用这些检测实体。',
        ],
      },
      notifications: {
        id: 'notifications',
        title: '通知与自动化',
        content:
          '**用 Frigate 的检测事件发送带快照的本地通知并触发自动化——无需云端通知服务。** 如果愿意，可与本地 LLM 结合，生成自然语言告警。',
        items: [
          '当在特定区域检测到人物时，发送一条带快照的通知。',
          '在检测时触发灯光或警报器，作为确定性自动化。',
          '可选地把事件传给本地 LLM 以生成自然语言摘要——参见[用本地LLM实现AI自动化](/zh/smart-home/ai-automations-local-llm)。',
        ],
      },
      cost: {
        id: 'cost',
        title: '与云端摄像头的成本对比',
        content:
          '**Frigate 用一次性硬件成本（加速器 + 存储）取代云端摄像头的持续费用。** 随时间推移，无订阅的本地配置更便宜，并让录像保持私密。',
        columns: ['方面', '云端摄像头', 'Frigate（本地）'],
        rows: [
          { '方面': '隐私', '云端摄像头': '录像在厂商服务器', 'Frigate（本地）': '录像留在家中' },
          { '方面': '订阅', '云端摄像头': 'AI + 历史的月费', 'Frigate（本地）': '无' },
          { '方面': '检测', '云端摄像头': '云端 AI', 'Frigate（本地）': '本地 AI（Coral/GPU）' },
          { '方面': '离线', '云端摄像头': '无网络时受限', 'Frigate（本地）': '在你的局域网上工作' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Frigate 需要 Coral TPU 吗？', a: '不是严格必需，但建议使用。一块 Google Coral TPU 能以高效率、低功耗处理多路摄像头的 AI 检测。GPU 也可以，仅用 CPU 的检测也可行，但会限制你能实时运行的摄像头数量。' },
          { q: 'Frigate 能离线工作吗？', a: '能。检测、录制和 Home Assistant 通知都在你的本地网络上运行，因此 Frigate 在断网时仍可工作。只有来自家庭之外的远程查看才需要连通性。' },
          { q: '哪些摄像头可与 Frigate 配合？', a: 'Frigate 兼容提供 RTSP 流的摄像头，这涵盖了大多数 IP 和 PoE 摄像头。有线 PoE 摄像头为持续检测提供最可靠的流。' },
          { q: 'Frigate 有订阅吗？', a: '没有。Frigate 是开源的，在你的硬件上运行，无订阅。你为检测加速器和存储支付一次性费用，而不是持续的云端费用。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地摄像头在堆栈中的位置',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 加速器与存储',
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 用一台机器跑 Frigate + HA',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 本地摄像头所解决的问题',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：在同一台机器上运行本地模型',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '用 Frigate 的本地 AI 安防摄像头（2026）',
      description: '用 Frigate 打造私密的 AI 安防摄像头（2026）：本地物体与人物检测，无云端、无订阅费，视频数据完全存储在本地家庭网络中。含详细硬件选型、Home Assistant 集成配置，以及与云端摄像头服务的年度费用对比。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-ai-security-camera',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI 安防摄像头' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate 需要 Coral TPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '不是严格必需，但建议使用。一块 Google Coral TPU 能以高效率、低功耗处理多路摄像头的 AI 检测。GPU 也可以；仅用 CPU 可行但会限制摄像头数量。' } },
        { '@type': 'Question', name: 'Frigate 能离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '能。检测、录制和 Home Assistant 通知都在你的本地网络上运行，因此 Frigate 在断网时仍可工作。' } },
        { '@type': 'Question', name: '哪些摄像头可与 Frigate 配合？', acceptedAnswer: { '@type': 'Answer', text: '兼容提供 RTSP 流的摄像头，涵盖大多数 IP 和 PoE 摄像头。有线 PoE 摄像头提供最可靠的流。' } },
        { '@type': 'Question', name: 'Frigate 有订阅吗？', acceptedAnswer: { '@type': 'Answer', text: '没有。Frigate 是开源的，在你的硬件上运行，无订阅——为加速器和存储支付一次性费用，而非持续云端费用。' } },
      ],
    },
  },
}
