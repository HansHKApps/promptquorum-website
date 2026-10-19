import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-en.webp',
    title: 'Local AI Security Cameras with Frigate (2026)',
    seoTitle: 'Frigate Local AI Cameras 2026: Private Detection',
    intro:
      'Frigate runs local AI object and person detection on your camera feeds with no cloud and no subscription, integrating directly into Home Assistant. This guide covers the cloud-camera privacy problem, what Frigate does, the hardware that runs detection (an Intel iGPU, a Hailo module or a GPU — Google Coral is no longer recommended for new builds), the best cameras, what Frigate and Frigate+ cost, the Home Assistant integration, notifications, and how the cost compares to subscription cameras.',
    metaDescription:
      'Frigate runs private AI camera detection locally with no cloud or subscription. Detector choices, Frigate+ cost ($50/yr), best cameras and Home Assistant setup.',
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
      '**Frigate is an open-source local NVR that runs AI object and person detection on your camera feeds entirely on your own hardware — no cloud, no subscription — and integrates with Home Assistant.** Frigate itself is free; an Intel iGPU, a Hailo module or an NVIDIA GPU keeps detection real-time, and Google Coral is no longer recommended for new builds.',
    quickAnswerTop: {
      en: {
        question: 'What is Frigate and how does it give private AI cameras?',
        answer:
          'Frigate is open-source network video recorder software that performs AI object and person detection locally on RTSP camera streams, with no cloud and no subscription. It integrates with Home Assistant for notifications and automations. Its documentation no longer recommends a Google Coral TPU for new installations; an Intel iGPU (OpenVINO), a Hailo module or an NVIDIA GPU handles detection for multiple cameras in real time.',
        bullets: [
          'Local AI detection on your own hardware — no cloud',
          'Frigate is free; the optional Frigate+ model service costs $50 per year',
          'Works with standard RTSP cameras',
          'Integrates with Home Assistant for alerts and automations',
          'An Intel iGPU, Hailo module or GPU keeps detection real-time',
          'Google Coral is no longer recommended for new installations',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Cloud-Camera Problem', anchor: 'cloud-problem' },
      { label: 'What Frigate Does', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Best Cameras', anchor: 'cameras' },
      { label: 'Home Assistant Integration', anchor: 'ha-integration' },
      { label: 'Notifications and Automations', anchor: 'notifications' },
      { label: 'Cost vs Cloud Cameras', anchor: 'cost' },
      { label: 'What Frigate Costs', anchor: 'frigate-plus' },
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
          'Detection runs on your hardware — footage stays on your network by default, no subscription',
          'Works with standard RTSP cameras (wired PoE cameras are most reliable)',
          'An Intel iGPU (OpenVINO), a Hailo module or an NVIDIA GPU runs detection in real time; Frigate no longer recommends Google Coral for new installs',
          'Frigate is free; the optional Frigate+ model service costs $50 per year',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'Local AI camera architecture: an RTSP camera feed goes to Frigate, which runs AI detection on a Coral TPU or GPU, then saves clips locally and sends alerts to Home Assistant — no cloud round-trip.',
      },
      hardware: {
        id: 'hardware',
        title: 'What Hardware Does Frigate Need?',
        content:
          '**Frigate runs detection on an Intel iGPU, a Hailo module, an NVIDIA GPU or another supported accelerator; its documentation no longer recommends Google Coral for new installations.** CPU-only detection is not recommended. Pair it with a host that has enough storage for recordings.',
        items: [
          '**Intel iGPU or NPU (OpenVINO):** works on 6th-generation or newer Intel CPUs, so an Intel N100-class mini PC needs no extra accelerator.',
          '**Hailo-8 / Hailo-8L:** M.2 or Raspberry Pi modules with published inference times of about 7 ms and 11 ms on YOLOv6n.',
          '**NVIDIA GPU (ONNX):** also accelerates detection and is useful if you already run a local LLM on the same box — see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
          '**Google Coral alternative:** the Frigate documentation lists Coral only for very low-power setups or hardware that cannot use another accelerator, and keeps supporting it. Detector benchmarks are in the [full Frigate NVR build guide](/smart-home/frigate-nvr-home-assistant-setup).',
          '**Host and storage:** plan local disk for event recordings; Frigate can share a mini PC with Home Assistant — see [best mini PCs for Home Assistant + local AI](/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Which Cameras Work Best With Frigate?',
        content:
          '**Use wired PoE cameras that provide an H.264 RTSP stream plus a low-resolution substream; the Frigate documentation lists Dahua, Hikvision and Amcrest (Dahua-based) as recommended brands.** Larger sensors matter more than higher resolution, especially at night.',
        items: [
          '**Streams:** H.264 video with separate substreams for detection, live view and recording.',
          '**Sensor over megapixels:** a larger sensor beats a higher resolution, especially at night.',
          '**Avoid Wi-Fi cameras:** their streams are unreliable for continuous detection.',
          '**Reolink:** keep Reolink cameras at 5 MP or lower.',
          '**Picks:** see [best local security cameras](/smart-home/best-local-security-cameras-2027) for specific models.',
          '**Check the law:** recording public spaces or neighbouring property can be restricted (for example under the GDPR in the EU); this is not legal advice.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant Integration',
        content:
          '**Frigate integrates with Home Assistant so detections become entities you can automate on.** Install Frigate, then add the Frigate integration in Home Assistant.',
        numberedItems: [
          'Run Frigate (as an add-on or container) and point it at your camera RTSP streams.',
          'Configure the detector (OpenVINO, Hailo, GPU or Coral) and detection zones in the Frigate settings UI (0.18 and later) or the config file.',
          'Add the Frigate integration in Home Assistant to expose camera and detection entities.',
          'Use the detection entities in automations and dashboards.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Four-step Frigate setup: run Frigate, configure a Coral TPU or GPU detector with zones, add the Home Assistant integration, then automate alerts and dashboards.',
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
          'Frigate 0.18 adds a chat interface for asking a connected GenAI provider about cameras, tracked objects and review activity ([Frigate releases](https://github.com/blakeblackshear/frigate/releases)). Sending camera data to a cloud-hosted provider means that data leaves your network.',
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
          { 'Aspect': 'Detection', 'Cloud cameras': 'Cloud AI', 'Frigate (local)': 'Local AI (iGPU/Hailo/GPU)' },
          { 'Aspect': 'Offline', 'Cloud cameras': 'Limited without internet', 'Frigate (local)': 'Works on your LAN' },
          { 'Aspect': 'Software', 'Cloud cameras': 'Vendor plan fees', 'Frigate (local)': 'Free (optional Frigate+ $50/yr)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'What Does Frigate Cost?',
        content:
          '**Frigate itself is free and open source; Frigate+, an optional model service listed at $50 per year, is the paid add-on on its site.** You can run Frigate with no subscription at all.',
        items: [
          '**Frigate:** free software, no per-camera or per-feature fees.',
          '**[Frigate+](https://frigate.video/plus/):** $50 per year for up to 12 fine-tuned models built from images you upload; extra fine-tunings cost $5 each.',
          '**Cancelling:** models trained during a subscription stay downloadable if you do not renew.',
          '**Hardware:** the real cost is the host, the detector and disks — a mini PC, a Hailo module or GPU if needed, and storage.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Do I need a Coral TPU for Frigate?', a: 'No. The Frigate documentation no longer recommends Google Coral for new installations, except for very low-power setups. An Intel iGPU with the OpenVINO detector, a Hailo-8 module or an NVIDIA GPU are the usual alternatives. CPU-only detection is not recommended.' },
          { q: 'Does Frigate work offline?', a: 'Yes. Detection, recording, and Home Assistant notifications all run on your local network, so Frigate keeps working during an internet outage. Only remote viewing from outside the home needs connectivity.' },
          { q: 'Which cameras work with Frigate?', a: 'Frigate works with cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams for continuous detection.' },
          { q: 'Is there a subscription for Frigate?', a: 'No. Frigate is open-source and runs on your hardware with no subscription. You pay a one-time cost for a detection accelerator and storage instead of recurring cloud fees.' },
          { q: 'What is Frigate?', a: 'Frigate is free, open-source network video recorder software that runs AI object and person detection locally on RTSP camera streams and integrates with Home Assistant. It records clips to your own storage with no cloud.' },
          { q: 'How much does Frigate cost?', a: 'Frigate is free. The optional Frigate+ model service costs $50 per year. Your real cost is hardware: a host, a detector if needed, and storage.' },
          { q: 'Which camera is best for Frigate?', a: 'The Frigate documentation recommends wired PoE cameras from Dahua, Hikvision or Amcrest with H.264 streams and a separate substream for detection. Larger sensors help more than extra resolution, and Wi-Fi cameras are best avoided.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Follow the full Frigate NVR build guide: detectors, zones and Home Assistant](/smart-home/frigate-nvr-home-assistant-setup) — the hands-on setup this overview leads into',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — where local cameras fit in the stack',
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — accelerators and storage',
          '[Best Mini PCs for Home Assistant + Local AI](/smart-home/best-mini-pc-home-assistant-local-ai) — one box for Frigate + HA',
          '[Smart Home Privacy Risks](/smart-home/smart-home-privacy-risks) — the problem local cameras solve',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — cross-cluster: run a local model on the same box',
          '[Best Local Security Cameras (2026)](/smart-home/best-local-security-cameras-2027) — hardware picks to pair with this setup',
          '[Radar Presence Sensing: Room Occupancy Without a Camera (2026)](/smart-home/radar-presence-sensing-no-camera) — a camera-free alternative for room occupancy',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Local AI Security Cameras with Frigate (2026)',
      description: 'Frigate runs private AI camera detection locally with no cloud or subscription. Detector choices, Frigate+ cost ($50/yr), best cameras and Home Assistant setup.',
      url: 'https://www.promptquorum.com/smart-home/local-ai-security-camera',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI security camera' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a Coral TPU for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate no longer recommends Google Coral for new installs; an Intel iGPU (OpenVINO), a Hailo module or an NVIDIA GPU are the usual alternatives.' } },
        { '@type': 'Question', name: 'Does Frigate work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Detection, recording, and Home Assistant notifications run on your local network, so Frigate keeps working during an internet outage.' } },
        { '@type': 'Question', name: 'Which cameras work with Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cameras that provide an RTSP stream, which covers most IP and PoE cameras. Wired PoE cameras give the most reliable streams.' } },
        { '@type': 'Question', name: 'Is there a subscription for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate is open-source and runs on your hardware with no subscription — a one-time cost for an accelerator and storage instead of cloud fees.' } },
        { '@type': 'Question', name: 'What is Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Free, open-source NVR software that runs AI person and object detection locally on RTSP camera streams and integrates with Home Assistant.' } },
        { '@type': 'Question', name: 'How much does Frigate cost?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate is free; optional Frigate+ costs $50 per year. The real cost is hardware: a host, a detector if needed, and storage.' } },
        { '@type': 'Question', name: 'Which camera is best for Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Wired PoE cameras from Dahua, Hikvision or Amcrest with H.264 and a detection substream; larger sensors beat higher resolution; avoid Wi-Fi cameras.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-ar.webp',
    title: 'كاميرات الأمان بالذكاء الاصطناعي المحلي مع ⁨Frigate⁩ (⁨2026⁩)',
    seoTitle: '⁨Frigate 2026⁩: كاميرات ذكاء اصطناعي محلي خاصة',
    intro:
      'يُشغِّل Frigate الكشفَ المحلي بالذكاء الاصطناعي عن الأشخاص والأشياء على تغذيات الكاميرا دون الحاجة إلى سحابة أو اشتراك، مع تكامل مباشر مع Home Assistant. يتناول هذا الدليل مشكلة خصوصية الكاميرات السحابية، وما يفعله Frigate، والأجهزة التي تُشغِّل الكشف (Intel iGPU أو وحدة Hailo أو GPU — ولم يعد Google Coral موصى به للتركيبات الجديدة)، وأفضل الكاميرات، وتكلفة Frigate وFrigate+، والتكامل مع Home Assistant، والإشعارات، ومقارنة التكلفة بالكاميرات القائمة على الاشتراك.',
    metaDescription:
      'يكشف Frigate الأشخاص والأشياء محليًا بالذكاء الاصطناعي دون سحابة أو اشتراك. اختيار الكاشف، تكلفة Frigate+ (50 دولارًا سنويًا)، أفضل الكاميرات، وإعداد Home Assistant.',
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
      '**Frigate هو نظام تسجيل فيديو شبكي محلي مفتوح المصدر يُشغِّل الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء على تغذيات الكاميرا بالكامل على جهازك الخاص — دون سحابة، دون اشتراك — ويتكامل مع Home Assistant.** Frigate نفسه مجاني؛ ويحافظ Intel iGPU أو وحدة Hailo أو GPU من NVIDIA على الكشف في الوقت الفعلي، ولم يعد Google Coral موصى به للتركيبات الجديدة.',
    quickAnswerTop: {
      ar: {
        question: 'ما هو Frigate وكيف يوفر كاميرات ذكاء اصطناعي خاصة؟',
        answer:
          'Frigate هو برنامج مفتوح المصدر لتسجيل الفيديو عبر الشبكة يُجري الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء محليًا على تدفقات كاميرات RTSP، دون سحابة ودون اشتراك. يتكامل مع Home Assistant للإشعارات والأتمتة. لم تعد وثائقه توصي باستخدام Google Coral TPU للتركيبات الجديدة؛ إذ يتولى Intel iGPU (عبر OpenVINO) أو وحدة Hailo أو GPU من NVIDIA الكشفَ لعدة كاميرات في الوقت الفعلي.',
        bullets: [
          'كشف ذكاء اصطناعي محلي على جهازك الخاص — دون سحابة',
          'Frigate مجاني؛ وخدمة النماذج الاختيارية Frigate+ تكلف 50 دولارًا سنويًا',
          'يعمل مع كاميرات RTSP القياسية',
          'يتكامل مع Home Assistant للتنبيهات والأتمتة',
          'يحافظ Intel iGPU أو وحدة Hailo أو GPU على الكشف في الوقت الفعلي',
          'لم يعد Google Coral موصى به للتركيبات الجديدة',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'مشكلة الكاميرات السحابية', anchor: 'cloud-problem' },
      { label: 'ما يفعله Frigate', anchor: 'what-frigate-does' },
      { label: 'الأجهزة', anchor: 'hardware' },
      { label: 'أفضل الكاميرات', anchor: 'cameras' },
      { label: 'التكامل مع Home Assistant', anchor: 'ha-integration' },
      { label: 'الإشعارات والأتمتة', anchor: 'notifications' },
      { label: 'التكلفة مقارنةً بالكاميرات السحابية', anchor: 'cost' },
      { label: 'تكلفة Frigate', anchor: 'frigate-plus' },
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
          'يعمل الكشف على جهازك — تبقى اللقطات افتراضيًا داخل شبكتك، ولا اشتراك',
          'يعمل مع كاميرات RTSP القياسية (الكاميرات السلكية PoE هي الأكثر موثوقية)',
          'يُشغِّل Intel iGPU (عبر OpenVINO) أو وحدة Hailo أو GPU من NVIDIA الكشفَ في الوقت الفعلي؛ ولم يعد Frigate يوصي بـ Google Coral للتركيبات الجديدة',
          'Frigate مجاني؛ وخدمة النماذج الاختيارية Frigate+ تكلف 50 دولارًا سنويًا',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'بنية كاميرا الذكاء الاصطناعي المحلي: يذهب تدفق كاميرا RTSP إلى Frigate الذي يُشغِّل الكشف بالذكاء الاصطناعي على Coral TPU أو GPU، ثم يحفظ المقاطع محليًا ويرسل التنبيهات إلى Home Assistant — دون المرور عبر السحابة.',
      },
      hardware: {
        id: 'hardware',
        title: 'ما الأجهزة التي يحتاجها Frigate؟',
        content:
          '**يُشغِّل Frigate الكشف على Intel iGPU أو وحدة Hailo أو GPU من NVIDIA أو مُسرِّع آخر مدعوم؛ ولم تعد وثائقه توصي بـ Google Coral للتركيبات الجديدة.** لا يُوصى بالكشف بالمعالج المركزي فقط. اقرنه بمضيف يحتوي على تخزين كافٍ للتسجيلات.',
        items: [
          '**Intel iGPU أو NPU (عبر OpenVINO):** يعمل على معالجات Intel من الجيل السادس فما فوق، لذا لا يحتاج جهاز كمبيوتر مصغر من فئة N100 إلى مُسرِّع إضافي.',
          '**Hailo-8 / Hailo-8L:** وحدات M.2 أو لـ Raspberry Pi بأزمنة استدلال منشورة تبلغ نحو 7 مللي ثانية و11 مللي ثانية على YOLOv6n.',
          '**GPU من NVIDIA (عبر ONNX):** تُسرِّع الكشف أيضًا وهي مفيدة إذا كنت تُشغِّل بالفعل نموذجًا لغويًا محليًا على نفس الجهاز — راجع [أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
          '**بديل Google Coral:** تذكر وثائق Frigate جهاز Coral فقط للإعدادات منخفضة الطاقة جدًا أو للأجهزة التي لا تستطيع استخدام مُسرِّع آخر، وتواصل دعمه. تجد مقاييس الكواشف في [الدليل الكامل لبناء Frigate NVR](/ar/smart-home/frigate-nvr-home-assistant-setup).',
          '**المضيف والتخزين:** خطِّط لقرص محلي لتسجيلات الأحداث؛ يمكن لـ Frigate مشاركة جهاز كمبيوتر مصغر مع Home Assistant — راجع [أفضل أجهزة الكمبيوتر المصغرة لـ Home Assistant + الذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'ما الكاميرات الأنسب لـ Frigate؟',
        content:
          '**استخدم كاميرات PoE سلكية توفر تدفق RTSP بصيغة H.264 مع تدفق فرعي منخفض الدقة؛ وتوصي وثائق Frigate بعلامات Dahua وHikvision وAmcrest (المبنية على Dahua).** المستشعر الأكبر أهم من الدقة الأعلى، خاصة ليلًا.',
        items: [
          '**التدفقات:** فيديو H.264 مع تدفقات فرعية منفصلة للكشف والعرض المباشر والتسجيل.',
          '**المستشعر قبل الميغابكسل:** المستشعر الأكبر يتفوق على الدقة الأعلى، خاصة ليلًا.',
          '**تجنَّب كاميرات Wi-Fi:** تدفقاتها غير موثوقة للكشف المستمر.',
          '**Reolink:** أبقِ كاميرات Reolink عند 5 ميغابكسل أو أقل.',
          '**الاختيارات:** راجع [أفضل كاميرات المراقبة المحلية](/ar/smart-home/best-local-security-cameras-2027) لنماذج محددة.',
          '**تحقق من القانون:** قد يكون تسجيل الأماكن العامة أو ممتلكات الآخرين مقيَّدًا (مثلًا بموجب GDPR في الاتحاد الأوروبي)؛ وهذا ليس استشارة قانونية.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'التكامل مع Home Assistant',
        content:
          '**يتكامل Frigate مع Home Assistant حتى تصبح عمليات الكشف كيانات يمكنك بناء الأتمتة عليها.** ثبِّت Frigate ثم أضف تكامل Frigate في Home Assistant.',
        numberedItems: [
          'شغِّل Frigate (كإضافة أو حاوية) وأشِر إليه تدفقات RTSP لكاميراتك.',
          'اضبط الكاشف (OpenVINO أو Hailo أو GPU أو Coral) ومناطق الكشف في واجهة إعدادات Frigate (من الإصدار 0.18 فصاعدًا) أو في ملف الإعدادات.',
          'أضف تكامل Frigate في Home Assistant لكشف كيانات الكاميرا والكشف.',
          'استخدم كيانات الكشف في الأتمتة ولوحات التحكم.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'إعداد Frigate بأربع خطوات: تشغيل Frigate، ضبط كاشف Coral TPU أو GPU مع المناطق، إضافة تكامل Home Assistant، ثم أتمتة التنبيهات ولوحات التحكم.',
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
          'يضيف Frigate 0.18 واجهة دردشة لسؤال مزوِّد GenAI متصل عن الكاميرات والأشياء المتتبَّعة ونشاط المراجعة ([إصدارات Frigate](https://github.com/blakeblackshear/frigate/releases)). إرسال بيانات الكاميرا إلى مزوِّد مستضاف في السحابة يعني أن هذه البيانات تغادر شبكتك.',
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
          { 'الجانب': 'الكشف', 'الكاميرات السحابية': 'ذكاء اصطناعي سحابي', 'Frigate (محلي)': 'ذكاء اصطناعي محلي (iGPU/Hailo/GPU)' },
          { 'الجانب': 'العمل دون إنترنت', 'الكاميرات السحابية': 'محدود بدون إنترنت', 'Frigate (محلي)': 'يعمل على شبكتك المحلية' },
          { 'الجانب': 'البرنامج', 'الكاميرات السحابية': 'رسوم باقات المورِّد', 'Frigate (محلي)': 'مجاني (Frigate+ اختياري 50 دولارًا سنويًا)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'كم تبلغ تكلفة Frigate؟',
        content:
          '**Frigate نفسه مجاني ومفتوح المصدر؛ أما Frigate+، وهو خدمة نماذج اختيارية بسعر 50 دولارًا سنويًا، فهو الإضافة المدفوعة المعروضة على موقعه.** يمكنك تشغيل Frigate دون أي اشتراك.',
        items: [
          '**Frigate:** برنامج مجاني بلا رسوم لكل كاميرا أو لكل ميزة.',
          '**[Frigate+](https://frigate.video/plus/):** 50 دولارًا سنويًا لما يصل إلى 12 نموذجًا مضبوطًا بدقة من صور ترفعها بنفسك؛ وكل ضبط إضافي يكلف 5 دولارات.',
          '**الإلغاء:** تبقى النماذج المدرَّبة أثناء الاشتراك قابلة للتنزيل حتى إن لم تجدد.',
          '**الأجهزة:** التكلفة الحقيقية هي المضيف والكاشف والأقراص — جهاز كمبيوتر مصغر، ووحدة Hailo أو GPU عند الحاجة، وتخزين.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل أحتاج إلى Coral TPU لـ Frigate؟', a: 'لا. لم تعد وثائق Frigate توصي بـ Google Coral للتركيبات الجديدة، باستثناء الإعدادات منخفضة الطاقة جدًا. البدائل المعتادة هي Intel iGPU مع كاشف OpenVINO، أو وحدة Hailo-8، أو GPU من NVIDIA. لا يُوصى بالكشف بالمعالج المركزي فقط.' },
          { q: 'هل يعمل Frigate دون اتصال بالإنترنت؟', a: 'نعم. يعمل الكشف والتسجيل وإشعارات Home Assistant جميعها على شبكتك المحلية، لذا يستمر Frigate في العمل أثناء انقطاع الإنترنت. المشاهدة عن بُعد من خارج المنزل فقط تتطلب اتصالًا.' },
          { q: 'ما الكاميرات التي تعمل مع Frigate؟', a: 'يعمل Frigate مع الكاميرات التي توفر تدفق RTSP، وهو ما يشمل معظم كاميرات IP وPoE. توفر الكاميرات السلكية PoE أكثر التدفقات موثوقية للكشف المستمر.' },
          { q: 'هل يوجد اشتراك لـ Frigate؟', a: 'لا. Frigate مفتوح المصدر ويعمل على جهازك دون اشتراك. تدفع تكلفة مرة واحدة لمُعجِّل الكشف والتخزين بدلًا من الرسوم السحابية المتكررة.' },
          { q: 'ما هو Frigate؟', a: 'Frigate برنامج مجاني ومفتوح المصدر لتسجيل الفيديو عبر الشبكة، يُشغِّل الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء محليًا على تدفقات كاميرات RTSP ويتكامل مع Home Assistant. يحفظ المقاطع على تخزينك الخاص دون سحابة.' },
          { q: 'كم تبلغ تكلفة Frigate؟', a: 'Frigate مجاني. وخدمة النماذج الاختيارية Frigate+ تكلف 50 دولارًا سنويًا. التكلفة الحقيقية هي الأجهزة: مضيف، وكاشف عند الحاجة، وتخزين.' },
          { q: 'ما أفضل كاميرا لـ Frigate؟', a: 'توصي وثائق Frigate بكاميرات PoE سلكية من Dahua أو Hikvision أو Amcrest بتدفقات H.264 وتدفق فرعي منفصل للكشف. المستشعر الأكبر يفيد أكثر من الدقة الإضافية، ويُفضَّل تجنب كاميرات Wi-Fi.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[اتبع الدليل الكامل لبناء Frigate NVR: الكواشف والمناطق و Home Assistant](/ar/smart-home/frigate-nvr-home-assistant-setup) — الإعداد العملي الذي تقود إليه هذه النظرة العامة',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — مكان الكاميرات المحلية في البنية',
          '[أفضل الأجهزة للمنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — المُعجِّلات والتخزين',
          '[أفضل أجهزة الكمبيوتر المصغرة لـ Home Assistant + الذكاء الاصطناعي المحلي](/ar/smart-home/best-mini-pc-home-assistant-local-ai) — جهاز واحد لـ Frigate + HA',
          '[مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks) — المشكلة التي تحلها الكاميرات المحلية',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — عبر المجموعات: تشغيل نموذج محلي على نفس الجهاز',
          '[أفضل كاميرات المراقبة المحلية (⁨2026⁩)](/ar/smart-home/best-local-security-cameras-2027) — اختيارات أجهزة تتكامل مع هذا الإعداد',
          '[استشعار الحضور بالرادار: اكتشاف إشغال الغرفة دون كاميرا (2026)](/ar/smart-home/radar-presence-sensing-no-camera) — بديل بدون كاميرا لاكتشاف إشغال الغرفة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كاميرات الأمان بالذكاء الاصطناعي المحلي مع Frigate (2026)',
      description: 'يكشف Frigate الأشخاص والأشياء محليًا بالذكاء الاصطناعي دون سحابة أو اشتراك. اختيار الكاشف، تكلفة Frigate+ (50 دولارًا سنويًا)، أفضل الكاميرات، وإعداد Home Assistant.',
      url: 'https://www.promptquorum.com/ar/smart-home/local-ai-security-camera',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'كاميرا أمان بالذكاء الاصطناعي' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل أحتاج إلى Coral TPU لـ Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. لم يعد Frigate يوصي بـ Google Coral للتركيبات الجديدة؛ والبدائل المعتادة هي Intel iGPU (OpenVINO) أو وحدة Hailo أو GPU من NVIDIA.' } },
        { '@type': 'Question', name: 'هل يعمل Frigate دون اتصال بالإنترنت؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. يعمل الكشف والتسجيل وإشعارات Home Assistant على شبكتك المحلية، لذا يستمر Frigate في العمل أثناء انقطاع الإنترنت.' } },
        { '@type': 'Question', name: 'ما الكاميرات التي تعمل مع Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'الكاميرات التي توفر تدفق RTSP، وهو ما يشمل معظم كاميرات IP وPoE. توفر الكاميرات السلكية PoE أكثر التدفقات موثوقية.' } },
        { '@type': 'Question', name: 'هل يوجد اشتراك لـ Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'لا. Frigate مفتوح المصدر ويعمل على جهازك دون اشتراك — تكلفة مرة واحدة للمُعجِّل والتخزين بدلًا من الرسوم السحابية.' } },
        { '@type': 'Question', name: 'ما هو Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'برنامج NVR مجاني ومفتوح المصدر يُشغِّل الكشف بالذكاء الاصطناعي عن الأشخاص والأشياء محليًا على تدفقات RTSP ويتكامل مع Home Assistant.' } },
        { '@type': 'Question', name: 'كم تبلغ تكلفة Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'Frigate مجاني؛ وFrigate+ الاختياري يكلف 50 دولارًا سنويًا. التكلفة الحقيقية هي الأجهزة: مضيف وكاشف عند الحاجة وتخزين.' } },
        { '@type': 'Question', name: 'ما أفضل كاميرا لـ Frigate؟', acceptedAnswer: { '@type': 'Answer', text: 'كاميرات PoE سلكية من Dahua أو Hikvision أو Amcrest بصيغة H.264 وتدفق فرعي للكشف؛ المستشعر الأكبر يتفوق على الدقة الأعلى؛ تجنَّب Wi-Fi.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-de.webp',
    title: 'Lokale KI-Sicherheitskameras mit Frigate (2026)',
    seoTitle: 'Frigate lokale KI-Kameras 2026: Private Erkennung',
    intro:
      'Frigate führt lokale KI-Objekt- und Personenerkennung auf Ihren Kamera-Feeds aus – ohne Cloud und ohne Abonnement – und integriert sich direkt in Home Assistant. Dieser Leitfaden behandelt das Datenschutzproblem von Cloud-Kameras, was Frigate tut, die Hardware für die Erkennung (Intel-iGPU, Hailo-Modul oder GPU – Google Coral wird für Neuinstallationen nicht mehr empfohlen), die besten Kameras, die Kosten von Frigate und Frigate+, die Home-Assistant-Integration, Benachrichtigungen und den Kostenvergleich mit Abo-Kameras.',
    metaDescription:
      'Frigate erkennt Personen und Objekte lokal per KI – ohne Cloud und Abo. Detektor-Wahl, Frigate+-Kosten (50 $/Jahr), beste Kameras und Home-Assistant-Setup.',
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
      '**Frigate ist ein quelloffener lokaler NVR, der KI-Objekt- und Personenerkennung auf Ihren Kamera-Feeds vollständig auf Ihrer eigenen Hardware ausführt – keine Cloud, kein Abo – und sich in Home Assistant integriert.** Frigate selbst ist kostenlos; eine Intel-iGPU, ein Hailo-Modul oder eine NVIDIA-GPU hält die Erkennung in Echtzeit, Google Coral wird für Neuinstallationen nicht mehr empfohlen.',
    quickAnswerTop: {
      de: {
        question: 'Was ist Frigate und wie liefert es private KI-Kameras?',
        answer:
          'Frigate ist quelloffene Netzwerk-Videorekorder-Software, die KI-Objekt- und Personenerkennung lokal auf RTSP-Kamerastreams ausführt – ohne Cloud und ohne Abonnement. Sie integriert sich in Home Assistant für Benachrichtigungen und Automatisierungen. Die Dokumentation empfiehlt für Neuinstallationen keine Google-Coral-TPU mehr; eine Intel-iGPU (OpenVINO), ein Hailo-Modul oder eine NVIDIA-GPU übernimmt die Erkennung für mehrere Kameras in Echtzeit.',
        bullets: [
          'Lokale KI-Erkennung auf Ihrer eigenen Hardware – keine Cloud',
          'Frigate ist kostenlos; der optionale Modelldienst Frigate+ kostet 50 $ pro Jahr',
          'Funktioniert mit Standard-RTSP-Kameras',
          'Integriert sich in Home Assistant für Warnungen und Automatisierungen',
          'Eine Intel-iGPU, ein Hailo-Modul oder eine GPU hält die Erkennung in Echtzeit',
          'Google Coral wird für Neuinstallationen nicht mehr empfohlen',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Das Cloud-Kamera-Problem', anchor: 'cloud-problem' },
      { label: 'Was Frigate tut', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Beste Kameras', anchor: 'cameras' },
      { label: 'Home-Assistant-Integration', anchor: 'ha-integration' },
      { label: 'Benachrichtigungen und Automatisierungen', anchor: 'notifications' },
      { label: 'Kosten vs Cloud-Kameras', anchor: 'cost' },
      { label: 'Was Frigate kostet', anchor: 'frigate-plus' },
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
          'Frigate ist quelloffene lokale NVR-Software mit integrierter KI-Objekt-/Personenerkennung',
          'Die Erkennung läuft auf Ihrer Hardware – Aufnahmen bleiben standardmäßig in Ihrem Netzwerk, kein Abonnement',
          'Funktioniert mit Standard-RTSP-Kameras (kabelgebundene PoE-Kameras sind am zuverlässigsten)',
          'Eine Intel-iGPU (OpenVINO), ein Hailo-Modul oder eine NVIDIA-GPU erkennt in Echtzeit; Frigate empfiehlt Google Coral für Neuinstallationen nicht mehr',
          'Frigate ist kostenlos; der optionale Modelldienst Frigate+ kostet 50 $ pro Jahr',
          'Integriert sich in Home Assistant für Benachrichtigungen, Schnappschüsse und Automatisierungen',
          'Einmalige Hardwarekosten ersetzen laufende Cloud-Kamera-Gebühren',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'Lokale KI-Kamera-Architektur: Ein RTSP-Kamera-Feed geht an Frigate, das KI-Erkennung auf einer Coral-TPU oder GPU ausführt, Clips lokal speichert und Alarme an Home Assistant sendet — ohne Cloud-Umweg.',
      },
      hardware: {
        id: 'hardware',
        title: 'Welche Hardware braucht Frigate?',
        content:
          '**Frigate führt die Erkennung auf einer Intel-iGPU, einem Hailo-Modul, einer NVIDIA-GPU oder einem anderen unterstützten Beschleuniger aus; die Dokumentation empfiehlt Google Coral für Neuinstallationen nicht mehr.** Reine CPU-Erkennung wird nicht empfohlen. Kombinieren Sie sie mit einem Host, der genug Speicher für Aufnahmen hat.',
        items: [
          '**Intel-iGPU oder NPU (OpenVINO):** läuft auf Intel-CPUs ab der 6. Generation, ein Mini-PC der N100-Klasse braucht also keinen zusätzlichen Beschleuniger.',
          '**Hailo-8 / Hailo-8L:** M.2- oder Raspberry-Pi-Module mit veröffentlichten Inferenzzeiten von etwa 7 ms bzw. 11 ms bei YOLOv6n.',
          '**NVIDIA-GPU (ONNX):** beschleunigt die Erkennung ebenfalls und ist sinnvoll, wenn Sie auf demselben Gerät schon ein lokales LLM betreiben – siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
          '**Alternative zu Google Coral:** Die Frigate-Dokumentation nennt Coral nur noch für sehr stromsparende Setups oder Hardware, die keinen anderen Beschleuniger nutzen kann, und unterstützt es weiter. Detektor-Benchmarks stehen im [vollständigen Frigate-NVR-Leitfaden](/de/smart-home/frigate-nvr-home-assistant-setup).',
          '**Host und Speicher:** Planen Sie lokalen Speicher für Ereignisaufnahmen; Frigate kann sich einen Mini-PC mit Home Assistant teilen – siehe [beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Welche Kameras funktionieren am besten mit Frigate?',
        content:
          '**Nutzen Sie kabelgebundene PoE-Kameras mit H.264-RTSP-Stream und einem zusätzlichen Substream in niedriger Auflösung; die Frigate-Dokumentation empfiehlt die Marken Dahua, Hikvision und Amcrest (Dahua-basiert).** Ein größerer Sensor zählt mehr als eine höhere Auflösung, besonders nachts.',
        items: [
          '**Streams:** H.264-Video mit getrennten Substreams für Erkennung, Live-Ansicht und Aufnahme.',
          '**Sensor vor Megapixeln:** Ein größerer Sensor schlägt eine höhere Auflösung, besonders nachts.',
          '**WLAN-Kameras meiden:** Ihre Streams sind für dauerhafte Erkennung unzuverlässig.',
          '**Reolink:** Halten Sie Reolink-Kameras bei 5 MP oder weniger.',
          '**Auswahl:** Konkrete Modelle finden Sie unter [beste lokale Überwachungskameras](/de/smart-home/best-local-security-cameras-2027).',
          '**Rechtslage prüfen:** Die Aufnahme öffentlicher Bereiche oder fremden Eigentums kann eingeschränkt sein (in der EU z. B. durch die DSGVO); das ist keine Rechtsberatung.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home-Assistant-Integration',
        content:
          '**Frigate integriert sich in Home Assistant, sodass Erkennungen zu Entitäten werden, auf die Sie automatisieren können.** Installieren Sie Frigate, dann fügen Sie die Frigate-Integration in Home Assistant hinzu.',
        numberedItems: [
          'Betreiben Sie Frigate (als Add-on oder Container) und richten Sie es auf Ihre Kamera-RTSP-Streams.',
          'Konfigurieren Sie den Detektor (OpenVINO, Hailo, GPU oder Coral) und die Erkennungszonen in der Frigate-Oberfläche (ab 0.18) oder in der Konfigurationsdatei.',
          'Fügen Sie die Frigate-Integration in Home Assistant hinzu, um Kamera- und Erkennungs-Entitäten bereitzustellen.',
          'Nutzen Sie die Erkennungs-Entitäten in Automatisierungen und Dashboards.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Vierstufige Frigate-Einrichtung: Frigate starten, einen Coral-TPU- oder GPU-Detektor mit Zonen konfigurieren, die Home-Assistant-Integration hinzufügen, dann Alarme und Dashboards automatisieren.',
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
          'Frigate 0.18 bringt eine Chat-Oberfläche, mit der Sie einen angebundenen GenAI-Anbieter zu Kameras, verfolgten Objekten und Review-Aktivität befragen können ([Frigate-Releases](https://github.com/blakeblackshear/frigate/releases)). Wenn Sie Kameradaten an einen Cloud-Anbieter senden, verlassen diese Daten Ihr Netzwerk.',
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
          { 'Aspekt': 'Erkennung', 'Cloud-Kameras': 'Cloud-KI', 'Frigate (lokal)': 'Lokale KI (iGPU/Hailo/GPU)' },
          { 'Aspekt': 'Offline', 'Cloud-Kameras': 'Eingeschränkt ohne Internet', 'Frigate (lokal)': 'Funktioniert in Ihrem LAN' },
          { 'Aspekt': 'Software', 'Cloud-Kameras': 'Gebühren je nach Anbieter', 'Frigate (lokal)': 'Kostenlos (optional Frigate+ 50 $/Jahr)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Was kostet Frigate?',
        content:
          '**Frigate selbst ist kostenlos und quelloffen; Frigate+, ein optionaler Modelldienst für 50 $ pro Jahr, ist das kostenpflichtige Zusatzangebot auf der Projektseite.** Sie können Frigate komplett ohne Abonnement betreiben.',
        items: [
          '**Frigate:** kostenlose Software, keine Gebühren pro Kamera oder Funktion.',
          '**[Frigate+](https://frigate.video/plus/):** 50 $ pro Jahr für bis zu 12 feinabgestimmte Modelle aus von Ihnen hochgeladenen Bildern; jede zusätzliche Feinabstimmung kostet 5 $.',
          '**Kündigung:** Während eines Abonnements trainierte Modelle bleiben herunterladbar, auch wenn Sie nicht verlängern.',
          '**Hardware:** Die eigentlichen Kosten sind Host, Detektor und Festplatten – ein Mini-PC, bei Bedarf ein Hailo-Modul oder eine GPU, und Speicher.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Brauche ich eine Coral-TPU für Frigate?', a: 'Nein. Die Frigate-Dokumentation empfiehlt Google Coral für Neuinstallationen nicht mehr, außer für sehr stromsparende Setups. Übliche Alternativen sind eine Intel-iGPU mit dem OpenVINO-Detektor, ein Hailo-8-Modul oder eine NVIDIA-GPU. Reine CPU-Erkennung wird nicht empfohlen.' },
          { q: 'Funktioniert Frigate offline?', a: 'Ja. Erkennung, Aufnahme und Home-Assistant-Benachrichtigungen laufen alle in Ihrem lokalen Netzwerk, sodass Frigate bei einem Internetausfall weiterarbeitet. Nur das Fernansehen von außerhalb des Hauses benötigt Konnektivität.' },
          { q: 'Welche Kameras funktionieren mit Frigate?', a: 'Frigate funktioniert mit Kameras, die einen RTSP-Stream bereitstellen, was die meisten IP- und PoE-Kameras abdeckt. Kabelgebundene PoE-Kameras liefern die zuverlässigsten Streams für kontinuierliche Erkennung.' },
          { q: 'Gibt es ein Abonnement für Frigate?', a: 'Nein. Frigate ist quelloffen und läuft auf Ihrer Hardware ohne Abonnement. Sie zahlen einmalige Kosten für einen Erkennungs-Beschleuniger und Speicher statt wiederkehrender Cloud-Gebühren.' },
          { q: 'Was ist Frigate?', a: 'Frigate ist kostenlose, quelloffene Netzwerk-Videorekorder-Software, die KI-Objekt- und Personenerkennung lokal auf RTSP-Kamerastreams ausführt und sich in Home Assistant integriert. Sie speichert Clips auf Ihrem eigenen Speicher, ohne Cloud.' },
          { q: 'Was kostet Frigate?', a: 'Frigate ist kostenlos. Der optionale Modelldienst Frigate+ kostet 50 $ pro Jahr. Die eigentlichen Kosten entstehen bei der Hardware: Host, bei Bedarf ein Detektor und Speicher.' },
          { q: 'Welche Kamera ist die beste für Frigate?', a: 'Die Frigate-Dokumentation empfiehlt kabelgebundene PoE-Kameras von Dahua, Hikvision oder Amcrest mit H.264-Streams und einem separaten Substream für die Erkennung. Größere Sensoren helfen mehr als zusätzliche Auflösung; WLAN-Kameras meidet man besser.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der vollständigen Frigate-NVR-Aufbauanleitung folgen: Detektoren, Zonen, Home Assistant](/de/smart-home/frigate-nvr-home-assistant-setup) — die praktische Einrichtung, auf die dieser Überblick hinführt',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – wo lokale Kameras in den Stack passen',
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Beschleuniger und Speicher',
          '[Beste Mini-PCs für Home Assistant + lokale KI](/de/smart-home/best-mini-pc-home-assistant-local-ai) – ein Gerät für Frigate + HA',
          '[Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks) – das Problem, das lokale Kameras lösen',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) – clusterübergreifend: ein lokales Modell auf demselben Gerät betreiben',
          '[Beste lokale Sicherheitskameras (2026)](/de/smart-home/best-local-security-cameras-2027) – Hardware-Empfehlungen für dieses Setup',
          '[Radarpräsenzsensorik: Raumbelegung ohne Kamera (2026)](/de/smart-home/radar-presence-sensing-no-camera) – eine kamerafreie Alternative zur Raumbelegungserkennung',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Lokale KI-Sicherheitskameras mit Frigate (2026)',
      description: 'Frigate erkennt Personen und Objekte lokal per KI – ohne Cloud und Abo. Detektor-Wahl, Frigate+-Kosten (50 $/Jahr), beste Kameras und Home-Assistant-Setup.',
      url: 'https://www.promptquorum.com/de/smart-home/local-ai-security-camera',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'KI-Sicherheitskamera' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Brauche ich eine Coral-TPU für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Frigate empfiehlt Google Coral für Neuinstallationen nicht mehr; übliche Alternativen sind eine Intel-iGPU (OpenVINO), ein Hailo-Modul oder eine NVIDIA-GPU.' } },
        { '@type': 'Question', name: 'Funktioniert Frigate offline?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Erkennung, Aufnahme und Home-Assistant-Benachrichtigungen laufen in Ihrem lokalen Netzwerk, sodass Frigate bei einem Internetausfall weiterarbeitet.' } },
        { '@type': 'Question', name: 'Welche Kameras funktionieren mit Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Kameras, die einen RTSP-Stream bereitstellen, was die meisten IP- und PoE-Kameras abdeckt. Kabelgebundene PoE-Kameras liefern die zuverlässigsten Streams.' } },
        { '@type': 'Question', name: 'Gibt es ein Abonnement für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Nein. Frigate ist quelloffen und läuft auf Ihrer Hardware ohne Abonnement – einmalige Kosten für einen Beschleuniger und Speicher statt Cloud-Gebühren.' } },
        { '@type': 'Question', name: 'Was ist Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Kostenlose, quelloffene NVR-Software, die KI-Personen- und Objekterkennung lokal auf RTSP-Streams ausführt und sich in Home Assistant integriert.' } },
        { '@type': 'Question', name: 'Was kostet Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate ist kostenlos; das optionale Frigate+ kostet 50 $ pro Jahr. Die eigentlichen Kosten entstehen bei der Hardware: Host, bei Bedarf Detektor und Speicher.' } },
        { '@type': 'Question', name: 'Welche Kamera ist die beste für Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Kabelgebundene PoE-Kameras von Dahua, Hikvision oder Amcrest mit H.264 und Erkennungs-Substream; größere Sensoren schlagen höhere Auflösung; WLAN-Kameras meiden.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-es.webp',
    title: 'Cámaras de Seguridad con IA Local con Frigate (2026)',
    seoTitle: 'Cámaras IA Local con Frigate 2026: Detección Privada',
    intro:
      'Frigate ejecuta detección local de objetos y personas con IA sobre tus cámaras, sin nube y sin suscripción, integrándose directamente en Home Assistant. Esta guía cubre el problema de privacidad de las cámaras en la nube, qué hace Frigate, el hardware que ejecuta la detección (una iGPU de Intel, un módulo Hailo o una GPU; Google Coral ya no se recomienda para instalaciones nuevas), las mejores cámaras, cuánto cuestan Frigate y Frigate+, la integración con Home Assistant, las notificaciones y cómo se compara el coste con las cámaras por suscripción.',
    metaDescription:
      'Frigate detecta personas y objetos con IA en local, sin nube ni suscripción. Elección de detector, coste de Frigate+ (50 $/año), mejores cámaras y Home Assistant.',
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
      '**Frigate es un NVR local de código abierto que ejecuta detección de objetos y personas con IA sobre tus cámaras íntegramente en tu propio hardware — sin nube, sin suscripción — y se integra con Home Assistant.** Frigate es gratuito; una iGPU de Intel, un módulo Hailo o una GPU NVIDIA mantiene la detección en tiempo real, y Google Coral ya no se recomienda para instalaciones nuevas.',
    quickAnswerTop: {
      es: {
        question: '¿Qué es Frigate y cómo da cámaras con IA privadas?',
        answer:
          'Frigate es un software de grabación de vídeo en red de código abierto que realiza detección de objetos y personas con IA en local sobre flujos de cámaras RTSP, sin nube ni suscripción. Se integra con Home Assistant para notificaciones y automatizaciones. Su documentación ya no recomienda una TPU Google Coral para instalaciones nuevas; una iGPU de Intel (OpenVINO), un módulo Hailo o una GPU NVIDIA gestiona la detección de varias cámaras en tiempo real.',
        bullets: [
          'Detección con IA local en tu propio hardware — sin nube',
          'Frigate es gratuito; el servicio opcional de modelos Frigate+ cuesta 50 $ al año',
          'Funciona con cámaras RTSP estándar',
          'Se integra con Home Assistant para alertas y automatizaciones',
          'Una iGPU de Intel, un módulo Hailo o una GPU mantiene la detección en tiempo real',
          'Google Coral ya no se recomienda para instalaciones nuevas',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'El problema de las cámaras en la nube', anchor: 'cloud-problem' },
      { label: 'Qué hace Frigate', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Mejores cámaras', anchor: 'cameras' },
      { label: 'Integración con Home Assistant', anchor: 'ha-integration' },
      { label: 'Notificaciones y automatizaciones', anchor: 'notifications' },
      { label: 'Coste vs cámaras en la nube', anchor: 'cost' },
      { label: 'Cuánto cuesta Frigate', anchor: 'frigate-plus' },
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
          'Frigate es un software NVR local de código abierto con detección de objetos/personas con IA integrada',
          'La detección se ejecuta en tu hardware — las grabaciones permanecen por defecto en tu red, sin suscripción',
          'Funciona con cámaras RTSP estándar (las cámaras PoE cableadas son las más fiables)',
          'Una iGPU de Intel (OpenVINO), un módulo Hailo o una GPU NVIDIA ejecuta la detección en tiempo real; Frigate ya no recomienda Google Coral para instalaciones nuevas',
          'Frigate es gratuito; el servicio opcional de modelos Frigate+ cuesta 50 $ al año',
          'Se integra con Home Assistant para notificaciones, capturas y automatizaciones',
          'Un coste único de hardware sustituye las cuotas recurrentes de las cámaras en la nube',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'Arquitectura de cámara con IA local: un stream de cámara RTSP va a Frigate, que ejecuta detección con IA en una Coral TPU o GPU, guarda los clips localmente y envía alertas a Home Assistant — sin ida y vuelta a la nube.',
      },
      hardware: {
        id: 'hardware',
        title: '¿Qué hardware necesita Frigate?',
        content:
          '**Frigate ejecuta la detección en una iGPU de Intel, un módulo Hailo, una GPU NVIDIA u otro acelerador compatible; su documentación ya no recomienda Google Coral para instalaciones nuevas.** La detección solo con CPU no se recomienda. Combínalo con un equipo que tenga almacenamiento suficiente para las grabaciones.',
        items: [
          '**iGPU o NPU de Intel (OpenVINO):** funciona en CPU Intel de 6.ª generación o posteriores, así que un mini PC de clase N100 no necesita ningún acelerador adicional.',
          '**Hailo-8 / Hailo-8L:** módulos M.2 o para Raspberry Pi con tiempos de inferencia publicados de unos 7 ms y 11 ms en YOLOv6n.',
          '**GPU NVIDIA (ONNX):** también acelera la detección y es útil si ya ejecutas un LLM local en el mismo equipo — consulta [el mejor hardware para un hogar inteligente local](/es/smart-home/best-hardware-for-local-smart-home).',
          '**Alternativa a Google Coral:** la documentación de Frigate solo cita Coral para montajes de muy bajo consumo o hardware que no puede usar otro acelerador, y sigue dándole soporte. Los benchmarks de detectores están en la [guía completa para montar un NVR Frigate](/es/smart-home/frigate-nvr-home-assistant-setup).',
          '**Equipo y almacenamiento:** prevé disco local para las grabaciones de eventos; Frigate puede compartir un mini PC con Home Assistant — consulta [los mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: '¿Qué cámaras funcionan mejor con Frigate?',
        content:
          '**Usa cámaras PoE cableadas que ofrezcan un flujo RTSP H.264 más un subflujo de baja resolución; la documentación de Frigate recomienda las marcas Dahua, Hikvision y Amcrest (basada en Dahua).** Un sensor más grande importa más que una resolución mayor, sobre todo de noche.',
        items: [
          '**Flujos:** vídeo H.264 con subflujos separados para detección, vista en directo y grabación.',
          '**Sensor antes que megapíxeles:** un sensor más grande supera a una resolución mayor, sobre todo de noche.',
          '**Evita las cámaras Wi-Fi:** sus flujos son poco fiables para una detección continua.',
          '**Reolink:** mantén las cámaras Reolink en 5 MP o menos.',
          '**Selección:** consulta [las mejores cámaras de seguridad locales](/es/smart-home/best-local-security-cameras-2027) para modelos concretos.',
          '**Consulta la ley:** grabar espacios públicos o propiedad ajena puede estar restringido (por ejemplo por el RGPD en la UE); esto no es asesoramiento jurídico.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integración con Home Assistant',
        content:
          '**Frigate se integra con Home Assistant para que las detecciones se conviertan en entidades sobre las que puedes automatizar.** Instala Frigate, luego añade la integración de Frigate en Home Assistant.',
        numberedItems: [
          'Ejecuta Frigate (como add-on o contenedor) y apúntalo a los streams RTSP de tus cámaras.',
          'Configura el detector (OpenVINO, Hailo, GPU o Coral) y las zonas de detección en la interfaz de ajustes de Frigate (desde 0.18) o en el archivo de configuración.',
          'Añade la integración de Frigate en Home Assistant para exponer las entidades de cámara y detección.',
          'Usa las entidades de detección en automatizaciones y paneles.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Configuración de Frigate en cuatro pasos: ejecuta Frigate, configura un detector Coral TPU o GPU con zonas, añade la integración de Home Assistant y luego automatiza alertas y paneles.',
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
          'Frigate 0.18 añade una interfaz de chat para preguntar a un proveedor GenAI conectado sobre las cámaras, los objetos rastreados y la actividad de revisión ([versiones de Frigate](https://github.com/blakeblackshear/frigate/releases)). Enviar datos de cámara a un proveedor alojado en la nube hace que esos datos salgan de tu red.',
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
          { 'Aspecto': 'Detección', 'Cámaras en la nube': 'IA en la nube', 'Frigate (local)': 'IA local (iGPU/Hailo/GPU)' },
          { 'Aspecto': 'Sin conexión', 'Cámaras en la nube': 'Limitada sin internet', 'Frigate (local)': 'Funciona en tu LAN' },
          { 'Aspecto': 'Software', 'Cámaras en la nube': 'Cuotas del proveedor', 'Frigate (local)': 'Gratis (Frigate+ opcional 50 $/año)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: '¿Cuánto cuesta Frigate?',
        content:
          '**Frigate es gratuito y de código abierto; Frigate+, un servicio opcional de modelos a 50 $ al año, es el complemento de pago que ofrece en su sitio.** Puedes usar Frigate sin ninguna suscripción.',
        items: [
          '**Frigate:** software gratuito, sin cuotas por cámara ni por función.',
          '**[Frigate+](https://frigate.video/plus/):** 50 $ al año para hasta 12 modelos afinados a partir de las imágenes que subas; cada ajuste adicional cuesta 5 $.',
          '**Cancelación:** los modelos entrenados durante una suscripción siguen siendo descargables si no renuevas.',
          '**Hardware:** el coste real es el equipo, el detector y los discos — un mini PC, si hace falta un módulo Hailo o una GPU, y almacenamiento.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Necesito una Coral TPU para Frigate?', a: 'No. La documentación de Frigate ya no recomienda Google Coral para instalaciones nuevas, salvo para montajes de muy bajo consumo. Una iGPU de Intel con el detector OpenVINO, un módulo Hailo-8 o una GPU NVIDIA son las alternativas habituales. La detección solo con CPU no se recomienda.' },
          { q: '¿Funciona Frigate sin conexión?', a: 'Sí. La detección, la grabación y las notificaciones de Home Assistant corren en tu red local, así que Frigate sigue funcionando durante una caída de internet. Solo la visualización remota desde fuera del hogar necesita conectividad.' },
          { q: '¿Qué cámaras funcionan con Frigate?', a: 'Frigate funciona con cámaras que proporcionan un stream RTSP, lo que cubre la mayoría de las cámaras IP y PoE. Las cámaras PoE con cable dan los streams más fiables para la detección continua.' },
          { q: '¿Hay una suscripción para Frigate?', a: 'No. Frigate es de código abierto y corre en tu hardware sin suscripción. Pagas un coste único por un acelerador de detección y almacenamiento en lugar de cuotas recurrentes en la nube.' },
          { q: '¿Qué es Frigate?', a: 'Frigate es un software de grabación de vídeo en red gratuito y de código abierto que ejecuta detección de objetos y personas con IA en local sobre flujos RTSP y se integra con Home Assistant. Guarda los clips en tu propio almacenamiento, sin nube.' },
          { q: '¿Cuánto cuesta Frigate?', a: 'Frigate es gratuito. El servicio opcional de modelos Frigate+ cuesta 50 $ al año. El coste real es el hardware: un equipo, un detector si hace falta y almacenamiento.' },
          { q: '¿Qué cámara es la mejor para Frigate?', a: 'La documentación de Frigate recomienda cámaras PoE cableadas de Dahua, Hikvision o Amcrest con flujos H.264 y un subflujo aparte para la detección. Un sensor más grande ayuda más que más resolución, y conviene evitar las cámaras Wi-Fi.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Seguir la guía completa de montaje de Frigate NVR: detectores, zonas y Home Assistant](/es/smart-home/frigate-nvr-home-assistant-setup) — la configuración práctica a la que lleva esta visión general',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — dónde encajan las cámaras locales en el stack',
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — aceleradores y almacenamiento',
          '[Mejores mini PC para Home Assistant + IA local](/es/smart-home/best-mini-pc-home-assistant-local-ai) — un equipo para Frigate + HA',
          '[Riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks) — el problema que resuelven las cámaras locales',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — entre clústeres: ejecuta un modelo local en el mismo equipo',
          '[Mejores cámaras de seguridad locales (2026)](/es/smart-home/best-local-security-cameras-2027) — recomendaciones de hardware para este montaje',
          '[Detección de presencia por radar: ocupación de habitaciones sin cámara (2026)](/es/smart-home/radar-presence-sensing-no-camera) — una alternativa sin cámara para detectar ocupación',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cámaras de Seguridad con IA Local con Frigate (2026)',
      description: 'Frigate detecta personas y objetos con IA en local, sin nube ni suscripción. Elección de detector, coste de Frigate+ (50 $/año), mejores cámaras y Home Assistant.',
      url: 'https://www.promptquorum.com/es/smart-home/local-ai-security-camera',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Cámara de seguridad con IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Necesito una Coral TPU para Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate ya no recomienda Google Coral para instalaciones nuevas; una iGPU de Intel (OpenVINO), un módulo Hailo o una GPU NVIDIA son las alternativas habituales.' } },
        { '@type': 'Question', name: '¿Funciona Frigate sin conexión?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. La detección, la grabación y las notificaciones de Home Assistant corren en tu red local, así que Frigate sigue funcionando durante una caída de internet.' } },
        { '@type': 'Question', name: '¿Qué cámaras funcionan con Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cámaras que proporcionan un stream RTSP, lo que cubre la mayoría de las cámaras IP y PoE. Las cámaras PoE con cable dan los streams más fiables.' } },
        { '@type': 'Question', name: '¿Hay una suscripción para Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'No. Frigate es de código abierto y corre en tu hardware sin suscripción — un coste único por un acelerador y almacenamiento en lugar de cuotas en la nube.' } },
        { '@type': 'Question', name: '¿Qué es Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Software NVR gratuito y de código abierto que ejecuta detección de personas y objetos con IA en local sobre flujos RTSP y se integra con Home Assistant.' } },
        { '@type': 'Question', name: '¿Cuánto cuesta Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate es gratuito; Frigate+ opcional cuesta 50 $ al año. El coste real es el hardware: equipo, detector si hace falta y almacenamiento.' } },
        { '@type': 'Question', name: '¿Qué cámara es la mejor para Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Cámaras PoE cableadas de Dahua, Hikvision o Amcrest con H.264 y subflujo de detección; mejor sensor grande que más resolución; evita el Wi-Fi.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-ko.webp',
    title: 'Frigate로 로컬 AI 보안 카메라 구축 (2026)',
    seoTitle: 'Frigate 로컬 AI 카메라 2026: 사적 감지',
    intro:
      'Frigate는 클라우드와 구독 없이 카메라 피드에서 로컬 AI 객체 및 사람 감지를 실행하며 Home Assistant에 직접 통합됩니다. 이 가이드는 클라우드 카메라 개인정보 보호 문제, Frigate의 기능, 감지를 실행하는 하드웨어(Intel iGPU, Hailo 모듈 또는 GPU. Google Coral은 신규 구축에 더 이상 권장되지 않음), 추천 카메라, Frigate와 Frigate+ 비용, Home Assistant 통합, 알림, 구독 카메라와의 비용 비교를 다룹니다.',
    metaDescription:
      'Frigate는 클라우드와 구독 없이 로컬 AI로 사람·객체를 감지합니다. 감지기 선택, Frigate+ 비용(연 $50), 추천 카메라, Home Assistant 설정.',
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
      '**Frigate는 카메라 피드의 AI 객체 및 사람 감지를 전적으로 사용자의 하드웨어에서 실행하는 오픈소스 로컬 NVR로, 클라우드와 구독이 필요 없으며 Home Assistant와 통합됩니다.** Frigate 자체는 무료이며, Intel iGPU, Hailo 모듈 또는 NVIDIA GPU가 감지를 실시간으로 유지하고, Google Coral은 신규 구축에 더 이상 권장되지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: 'Frigate란 무엇이고 어떻게 사적 AI 카메라를 제공합니까?',
        answer:
          'Frigate는 RTSP 카메라 스트림에서 로컬로 AI 객체 및 사람 감지를 수행하는 오픈소스 네트워크 비디오 레코더로, 클라우드와 구독이 필요 없습니다. 알림과 자동화를 위해 Home Assistant와 통합됩니다. 공식 문서는 신규 설치에 Google Coral TPU를 더 이상 권장하지 않으며, Intel iGPU(OpenVINO), Hailo 모듈 또는 NVIDIA GPU가 여러 카메라의 감지를 실시간으로 처리합니다.',
        bullets: [
          '자체 하드웨어에서 실행하는 로컬 AI 감지 — 클라우드 없음',
          'Frigate는 무료이며, 선택 사항인 모델 서비스 Frigate+는 연 $50',
          '표준 RTSP 카메라와 호환',
          'Home Assistant와 통합되어 알림과 자동화 지원',
          'Intel iGPU, Hailo 모듈 또는 GPU가 감지를 실시간으로 유지',
          '신규 설치에는 Google Coral이 더 이상 권장되지 않음',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '클라우드 카메라 문제', anchor: 'cloud-problem' },
      { label: 'Frigate의 기능', anchor: 'what-frigate-does' },
      { label: '하드웨어', anchor: 'hardware' },
      { label: '추천 카메라', anchor: 'cameras' },
      { label: 'Home Assistant 통합', anchor: 'ha-integration' },
      { label: '알림 및 자동화', anchor: 'notifications' },
      { label: '클라우드 카메라 대비 비용', anchor: 'cost' },
      { label: 'Frigate 비용', anchor: 'frigate-plus' },
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
          'Frigate는 AI 객체/사람 감지가 내장된 오픈소스 로컬 NVR 소프트웨어',
          '감지는 사용자의 하드웨어에서 실행 — 영상은 기본적으로 사용자의 네트워크 안에 남으며 구독 불필요',
          '표준 RTSP 카메라와 호환(유선 PoE 카메라가 가장 안정적)',
          'Intel iGPU(OpenVINO), Hailo 모듈 또는 NVIDIA GPU가 감지를 실시간으로 실행하며, Frigate는 신규 설치에 Google Coral을 더 이상 권장하지 않음',
          'Frigate는 무료이며, 선택 사항인 모델 서비스 Frigate+는 연 $50',
          'Home Assistant와 통합되어 알림, 스냅샷, 자동화 지원',
          '일회성 하드웨어 비용이 클라우드 카메라의 반복 요금을 대체',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: '로컬 AI 카메라 아키텍처: RTSP 카메라 스트림이 Frigate로 전달되고, Coral TPU 또는 GPU에서 AI 감지를 수행한 뒤 클립을 로컬에 저장하고 Home Assistant로 알림을 보냅니다 — 클라우드 왕복 없음.',
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate에 필요한 하드웨어는 무엇입니까?',
        content:
          '**Frigate는 Intel iGPU, Hailo 모듈, NVIDIA GPU 또는 기타 지원 가속기에서 감지를 실행하며, 공식 문서는 신규 설치에 Google Coral을 더 이상 권장하지 않습니다.** CPU만으로 하는 감지는 권장되지 않습니다. 녹화에 충분한 저장 공간을 갖춘 호스트와 함께 사용하세요.',
        items: [
          '**Intel iGPU 또는 NPU(OpenVINO):** 6세대 이상 Intel CPU에서 동작하므로 N100급 미니 PC는 별도 가속기가 필요 없습니다.',
          '**Hailo-8 / Hailo-8L:** M.2 또는 Raspberry Pi 모듈로, YOLOv6n에서 공개된 추론 시간은 각각 약 7ms와 11ms입니다.',
          '**NVIDIA GPU(ONNX):** 감지도 가속하며, 같은 기기에서 이미 로컬 LLM을 실행 중이라면 유용합니다 — [로컬 스마트홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home)를 참고하세요.',
          '**Google Coral 대안:** Frigate 문서는 Coral을 전력 소모가 매우 낮은 구성이나 다른 가속기를 쓸 수 없는 하드웨어에만 언급하며, 지원은 계속합니다. 감지기 벤치마크는 [Frigate NVR 구축 전체 가이드](/ko/smart-home/frigate-nvr-home-assistant-setup)에 있습니다.',
          '**호스트와 저장소:** 이벤트 녹화용 로컬 디스크를 계획하세요. Frigate는 Home Assistant와 미니 PC를 공유할 수 있습니다 — [Home Assistant + 로컬 AI용 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai)를 참고하세요.',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Frigate에 가장 잘 맞는 카메라는?',
        content:
          '**H.264 RTSP 스트림과 저해상도 서브스트림을 제공하는 유선 PoE 카메라를 사용하세요. Frigate 문서는 Dahua, Hikvision, Amcrest(Dahua 기반)를 권장 브랜드로 꼽습니다.** 특히 야간에는 높은 해상도보다 큰 센서가 더 중요합니다.',
        items: [
          '**스트림:** 감지, 라이브 보기, 녹화용으로 분리된 서브스트림을 갖춘 H.264 영상.',
          '**화소보다 센서:** 특히 야간에는 큰 센서가 높은 해상도보다 낫습니다.',
          '**Wi-Fi 카메라 피하기:** 스트림이 불안정해 지속적인 감지에 적합하지 않습니다.',
          '**Reolink:** Reolink 카메라는 5MP 이하로 유지하세요.',
          '**추천:** 구체적인 모델은 [최고의 로컬 보안 카메라](/ko/smart-home/best-local-security-cameras-2027)를 참고하세요.',
          '**법규 확인:** 공공장소나 타인의 재산을 촬영하는 것은 제한될 수 있습니다(예: EU의 GDPR). 이는 법률 자문이 아닙니다.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 통합',
        content:
          '**Frigate는 Home Assistant와 통합되어 감지가 자동화할 수 있는 엔티티가 됩니다.** Frigate를 설치한 후 Home Assistant에서 Frigate 통합을 추가하십시오.',
        numberedItems: [
          'Frigate(애드온 또는 컨테이너로)를 실행하고 카메라 RTSP 스트림을 지정하십시오.',
          'Frigate 설정 UI(0.18 이상) 또는 설정 파일에서 감지기(OpenVINO, Hailo, GPU 또는 Coral)와 감지 구역을 구성합니다.',
          'Home Assistant에서 Frigate 통합을 추가하여 카메라 및 감지 엔티티를 노출하십시오.',
          '자동화와 대시보드에서 감지 엔티티를 사용하십시오.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: '4단계 Frigate 설정: Frigate 실행, 영역이 포함된 Coral TPU 또는 GPU 감지기 구성, Home Assistant 통합 추가, 그런 다음 알림과 대시보드 자동화.',
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
          'Frigate 0.18은 연결된 GenAI 제공업체에 카메라, 추적된 객체, 검토 활동에 대해 질문할 수 있는 채팅 인터페이스를 추가합니다([Frigate 릴리스](https://github.com/blakeblackshear/frigate/releases)). 카메라 데이터를 클라우드 호스팅 제공업체로 보내면 해당 데이터는 사용자의 네트워크를 벗어납니다.',
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
          { '측면': '감지', '클라우드 카메라': '클라우드 AI', 'Frigate(로컬)': '로컬 AI(iGPU/Hailo/GPU)' },
          { '측면': '오프라인', '클라우드 카메라': '인터넷 없이 제한적', 'Frigate(로컬)': 'LAN에서 작동' },
          { '측면': '소프트웨어', '클라우드 카메라': '업체 요금제 비용', 'Frigate(로컬)': '무료(선택 Frigate+ 연 $50)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate 비용은 얼마인가요?',
        content:
          '**Frigate 자체는 무료 오픈소스이며, 연 $50의 선택형 모델 서비스 Frigate+는 공식 사이트에 안내된 유료 부가 서비스입니다.** 구독 없이도 Frigate를 사용할 수 있습니다.',
        items: [
          '**Frigate:** 무료 소프트웨어이며 카메라별·기능별 요금이 없습니다.',
          '**[Frigate+](https://frigate.video/plus/):** 연 $50로, 직접 업로드한 이미지로 만든 최대 12개의 미세 조정 모델을 제공합니다. 추가 미세 조정은 건당 $5입니다.',
          '**해지:** 구독 중에 학습한 모델은 갱신하지 않아도 계속 다운로드할 수 있습니다.',
          '**하드웨어:** 실제 비용은 호스트, 감지기, 디스크입니다 — 미니 PC, 필요하면 Hailo 모듈이나 GPU, 그리고 저장소.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Frigate에 Coral TPU가 필요합니까?', a: '아니요. Frigate 문서는 전력 소모가 매우 낮은 구성을 제외하고 신규 설치에 Google Coral을 더 이상 권장하지 않습니다. 일반적인 대안은 OpenVINO 감지기를 쓰는 Intel iGPU, Hailo-8 모듈, NVIDIA GPU입니다. CPU만으로 하는 감지는 권장되지 않습니다.' },
          { q: 'Frigate는 오프라인에서 작동합니까?', a: '네. 감지, 녹화, Home Assistant 알림이 모두 로컬 네트워크에서 실행되므로 인터넷 장애 중에도 Frigate가 계속 작동합니다. 집 외부에서의 원격 시청만 연결이 필요합니다.' },
          { q: 'Frigate와 작동하는 카메라는 무엇입니까?', a: 'RTSP 스트림을 제공하는 카메라와 작동하며 대부분의 IP 및 PoE 카메라가 해당됩니다. 유선 PoE 카메라가 지속적인 감지를 위해 가장 신뢰할 수 있는 스트림을 제공합니다.' },
          { q: 'Frigate 구독이 있습니까?', a: '아니오. Frigate는 오픈 소스이며 구독 없이 하드웨어에서 실행됩니다. 반복적인 클라우드 비용 대신 감지 가속기와 스토리지에 일회성 비용을 지불합니다.' },
          { q: 'Frigate란 무엇인가요?', a: 'Frigate는 무료 오픈소스 네트워크 비디오 레코더 소프트웨어로, RTSP 카메라 스트림에서 로컬로 AI 객체 및 사람 감지를 실행하고 Home Assistant와 통합됩니다. 클립은 클라우드 없이 사용자의 저장소에 기록됩니다.' },
          { q: 'Frigate 비용은 얼마인가요?', a: 'Frigate는 무료입니다. 선택 사항인 모델 서비스 Frigate+는 연 $50입니다. 실제 비용은 하드웨어로, 호스트와 필요 시 감지기, 저장소입니다.' },
          { q: 'Frigate에 가장 좋은 카메라는?', a: 'Frigate 문서는 H.264 스트림과 감지용 별도 서브스트림을 갖춘 Dahua, Hikvision, Amcrest의 유선 PoE 카메라를 권장합니다. 추가 해상도보다 큰 센서가 더 도움이 되며, Wi-Fi 카메라는 피하는 것이 좋습니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Frigate NVR 전체 구축 가이드 따라가기: 디텍터, 존, Home Assistant](/ko/smart-home/frigate-nvr-home-assistant-setup) — 이 개요가 이어지는 실전 설정',
          '[로컬 스마트 홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 스택에서 로컬 카메라의 위치',
          '[로컬 스마트 홈을 위한 최고의 하드웨어](/ko/smart-home/best-hardware-for-local-smart-home) — 가속기와 스토리지',
          '[Home Assistant + 로컬 AI를 위한 최고의 미니 PC](/ko/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate + HA를 위한 하나의 기기',
          '[스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks) — 로컬 카메라가 해결하는 문제',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 크로스 클러스터: 같은 기기에서 로컬 모델 실행',
          '[최고의 로컬 보안 카메라 (2026년)](/ko/smart-home/best-local-security-cameras-2027) — 이 구성에 어울리는 하드웨어 추천',
          '[레이더 존재 감지: 카메라 없이 방 재실 여부 파악하기 (2026년)](/ko/smart-home/radar-presence-sensing-no-camera) — 카메라 없이 재실 여부를 감지하는 대안',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate로 로컬 AI 보안 카메라 구축 (2026)',
      description: 'Frigate는 클라우드와 구독 없이 로컬 AI로 사람·객체를 감지합니다. 감지기 선택, Frigate+ 비용(연 $50), 추천 카메라, Home Assistant 설정.',
      url: 'https://www.promptquorum.com/ko/smart-home/local-ai-security-camera',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI 보안 카메라' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate에 Coral TPU가 필요합니까?', acceptedAnswer: { '@type': 'Answer', text: '아니요. Frigate는 신규 설치에 Google Coral을 더 이상 권장하지 않으며, Intel iGPU(OpenVINO), Hailo 모듈, NVIDIA GPU가 일반적인 대안입니다.' } },
        { '@type': 'Question', name: 'Frigate는 오프라인에서 작동합니까?', acceptedAnswer: { '@type': 'Answer', text: '네. 감지, 녹화, Home Assistant 알림이 로컬 네트워크에서 실행되므로 인터넷 장애 중에도 Frigate가 계속 작동합니다.' } },
        { '@type': 'Question', name: 'Frigate와 작동하는 카메라는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: 'RTSP 스트림을 제공하는 카메라이며 대부분의 IP 및 PoE 카메라가 해당됩니다. 유선 PoE 카메라가 가장 신뢰할 수 있는 스트림을 제공합니다.' } },
        { '@type': 'Question', name: 'Frigate 구독이 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '아니오. Frigate는 오픈 소스이며 구독 없이 하드웨어에서 실행됩니다 — 클라우드 비용 대신 가속기와 스토리지에 일회성 비용.' } },
        { '@type': 'Question', name: 'Frigate란 무엇인가요?', acceptedAnswer: { '@type': 'Answer', text: '무료 오픈소스 NVR 소프트웨어로, RTSP 스트림에서 로컬로 AI 사람·객체 감지를 실행하고 Home Assistant와 통합됩니다.' } },
        { '@type': 'Question', name: 'Frigate 비용은 얼마인가요?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate는 무료이며 선택 사항인 Frigate+는 연 $50입니다. 실제 비용은 호스트, 필요 시 감지기, 저장소입니다.' } },
        { '@type': 'Question', name: 'Frigate에 가장 좋은 카메라는?', acceptedAnswer: { '@type': 'Answer', text: 'Dahua, Hikvision, Amcrest의 유선 PoE 카메라(H.264, 감지용 서브스트림). 높은 해상도보다 큰 센서, Wi-Fi 카메라는 피하기.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-fr.webp',
    title: 'Caméras de Sécurité à IA Locale avec Frigate (2026)',
    seoTitle: 'Caméras IA Locale Frigate 2026 : Détection Privée',
    intro:
      'Frigate exécute la détection locale d\'objets et de personnes par IA sur vos flux de caméras, sans cloud et sans abonnement, en s\'intégrant directement à Home Assistant. Ce guide couvre le problème de confidentialité des caméras cloud, ce que fait Frigate, le matériel qui exécute la détection (un iGPU Intel, un module Hailo ou un GPU — Google Coral n\'est plus recommandé pour les nouvelles installations), les meilleures caméras, le coût de Frigate et de Frigate+, l\'intégration à Home Assistant, les notifications et la comparaison de coût avec les caméras par abonnement.',
    metaDescription:
      'Frigate détecte personnes et objets par IA en local, sans cloud ni abonnement. Choix du détecteur, coût de Frigate+ (50 $/an), meilleures caméras, Home Assistant.',
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
      '**Frigate est un NVR local open source qui exécute la détection d\'objets et de personnes par IA sur vos flux de caméras, entièrement sur votre propre matériel — sans cloud, sans abonnement — et s\'intègre à Home Assistant.** Frigate est gratuit ; un iGPU Intel, un module Hailo ou un GPU NVIDIA maintient la détection en temps réel, et Google Coral n\'est plus recommandé pour les nouvelles installations.',
    quickAnswerTop: {
      fr: {
        question: 'Qu\'est-ce que Frigate et comment offre-t-il des caméras IA privées ?',
        answer:
          'Frigate est un logiciel d\'enregistreur vidéo réseau open source qui effectue la détection d\'objets et de personnes par IA en local sur des flux de caméras RTSP, sans cloud et sans abonnement. Il s\'intègre à Home Assistant pour les notifications et les automatisations. Sa documentation ne recommande plus de TPU Google Coral pour les nouvelles installations ; un iGPU Intel (OpenVINO), un module Hailo ou un GPU NVIDIA gère la détection de plusieurs caméras en temps réel.',
        bullets: [
          'Détection IA locale sur votre propre matériel — sans cloud',
          'Frigate est gratuit ; le service de modèles optionnel Frigate+ coûte 50 $ par an',
          'Fonctionne avec des caméras RTSP standard',
          'S\'intègre à Home Assistant pour les alertes et les automatisations',
          'Un iGPU Intel, un module Hailo ou un GPU maintient la détection en temps réel',
          'Google Coral n\'est plus recommandé pour les nouvelles installations',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Le problème des caméras cloud', anchor: 'cloud-problem' },
      { label: 'Ce que fait Frigate', anchor: 'what-frigate-does' },
      { label: 'Matériel', anchor: 'hardware' },
      { label: 'Meilleures caméras', anchor: 'cameras' },
      { label: 'Intégration à Home Assistant', anchor: 'ha-integration' },
      { label: 'Notifications et automatisations', anchor: 'notifications' },
      { label: 'Coût vs caméras cloud', anchor: 'cost' },
      { label: 'Ce que coûte Frigate', anchor: 'frigate-plus' },
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
          'Frigate est un logiciel NVR local open source avec détection IA d\'objets/personnes intégrée',
          'La détection s\'exécute sur votre matériel — les images restent par défaut sur votre réseau, aucun abonnement',
          'Fonctionne avec des caméras RTSP standard (les caméras PoE filaires sont les plus fiables)',
          'Un iGPU Intel (OpenVINO), un module Hailo ou un GPU NVIDIA exécute la détection en temps réel ; Frigate ne recommande plus Google Coral pour les nouvelles installations',
          'Frigate est gratuit ; le service de modèles optionnel Frigate+ coûte 50 $ par an',
          'S\'intègre à Home Assistant pour les notifications, les instantanés et les automatisations',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'Architecture de caméra IA locale : un flux de caméra RTSP va vers Frigate, qui exécute la détection IA sur un Coral TPU ou un GPU, enregistre les clips localement et envoie des alertes à Home Assistant — sans aller-retour cloud.',
      },
      hardware: {
        id: 'hardware',
        title: 'Quel matériel Frigate nécessite-t-il ?',
        content:
          '**Frigate exécute la détection sur un iGPU Intel, un module Hailo, un GPU NVIDIA ou un autre accélérateur pris en charge ; sa documentation ne recommande plus Google Coral pour les nouvelles installations.** La détection par CPU seul n\'est pas recommandée. Associez-le à un hôte disposant d\'assez de stockage pour les enregistrements.',
        items: [
          '**iGPU ou NPU Intel (OpenVINO) :** fonctionne sur les processeurs Intel de 6e génération ou plus récents ; un mini PC de classe N100 n\'a donc besoin d\'aucun accélérateur supplémentaire.',
          '**Hailo-8 / Hailo-8L :** modules M.2 ou Raspberry Pi avec des temps d\'inférence publiés d\'environ 7 ms et 11 ms sur YOLOv6n.',
          '**GPU NVIDIA (ONNX) :** accélère aussi la détection et sert si vous exécutez déjà un LLM local sur la même machine — voir [le meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
          '**Alternative à Google Coral :** la documentation de Frigate ne cite plus Coral que pour les montages à très faible consommation ou le matériel ne pouvant pas utiliser un autre accélérateur, et continue de le prendre en charge. Les benchmarks de détecteurs figurent dans le [guide complet de construction d\'un NVR Frigate](/fr/smart-home/frigate-nvr-home-assistant-setup).',
          '**Hôte et stockage :** prévoyez un disque local pour les enregistrements d\'événements ; Frigate peut partager un mini PC avec Home Assistant — voir [les meilleurs mini PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Quelles caméras fonctionnent le mieux avec Frigate ?',
        content:
          '**Utilisez des caméras PoE filaires fournissant un flux RTSP H.264 plus un sous-flux basse résolution ; la documentation de Frigate recommande les marques Dahua, Hikvision et Amcrest (basée sur Dahua).** Un grand capteur compte davantage qu\'une résolution plus élevée, surtout la nuit.',
        items: [
          '**Flux :** vidéo H.264 avec des sous-flux distincts pour la détection, la vue en direct et l\'enregistrement.',
          '**Capteur avant mégapixels :** un capteur plus grand l\'emporte sur une résolution plus élevée, surtout la nuit.',
          '**Évitez les caméras Wi-Fi :** leurs flux sont peu fiables pour une détection continue.',
          '**Reolink :** limitez les caméras Reolink à 5 Mpx ou moins.',
          '**Sélection :** voir [les meilleures caméras de sécurité locales](/fr/smart-home/best-local-security-cameras-2027) pour des modèles précis.',
          '**Vérifiez la loi :** filmer l\'espace public ou la propriété d\'autrui peut être restreint (par exemple par le RGPD dans l\'UE) ; ceci ne constitue pas un conseil juridique.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Intégration à Home Assistant',
        content:
          '**Frigate s\'intègre à Home Assistant pour que les détections deviennent des entités sur lesquelles automatiser.** Installez Frigate, puis ajoutez l\'intégration Frigate dans Home Assistant.',
        numberedItems: [
          'Exécutez Frigate (en add-on ou conteneur) et pointez-le vers les flux RTSP de vos caméras.',
          'Configurez le détecteur (OpenVINO, Hailo, GPU ou Coral) et les zones de détection dans l\'interface de réglages de Frigate (à partir de 0.18) ou dans le fichier de configuration.',
          'Ajoutez l\'intégration Frigate dans Home Assistant pour exposer les entités de caméra et de détection.',
          'Utilisez les entités de détection dans les automatisations et tableaux de bord.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Configuration de Frigate en quatre étapes : exécuter Frigate, configurer un détecteur Coral TPU ou GPU avec des zones, ajouter l\'intégration Home Assistant, puis automatiser alertes et tableaux de bord.',
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
          'Frigate 0.18 ajoute une interface de chat pour interroger un fournisseur GenAI connecté sur les caméras, les objets suivis et l\'activité de revue ([versions de Frigate](https://github.com/blakeblackshear/frigate/releases)). Envoyer des données de caméra à un fournisseur hébergé dans le cloud fait sortir ces données de votre réseau.',
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
          { 'Aspect': 'Détection', 'Caméras cloud': 'IA cloud', 'Frigate (local)': 'IA locale (iGPU/Hailo/GPU)' },
          { 'Aspect': 'Hors ligne', 'Caméras cloud': 'Limitée sans internet', 'Frigate (local)': 'Fonctionne sur votre LAN' },
          { 'Aspect': 'Logiciel', 'Caméras cloud': 'Frais d\'abonnement fournisseur', 'Frigate (local)': 'Gratuit (Frigate+ optionnel 50 $/an)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Combien coûte Frigate ?',
        content:
          '**Frigate est gratuit et open source ; Frigate+, un service de modèles optionnel à 50 $ par an, est le complément payant proposé sur son site.** Vous pouvez utiliser Frigate sans aucun abonnement.',
        items: [
          '**Frigate :** logiciel gratuit, sans frais par caméra ni par fonction.',
          '**[Frigate+](https://frigate.video/plus/) :** 50 $ par an pour jusqu\'à 12 modèles affinés à partir des images que vous téléversez ; chaque affinage supplémentaire coûte 5 $.',
          '**Résiliation :** les modèles entraînés pendant un abonnement restent téléchargeables si vous ne renouvelez pas.',
          '**Matériel :** le vrai coût est l\'hôte, le détecteur et les disques — un mini PC, au besoin un module Hailo ou un GPU, et du stockage.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Ai-je besoin d\'un Coral TPU pour Frigate ?', a: 'Non. La documentation de Frigate ne recommande plus Google Coral pour les nouvelles installations, sauf pour les montages à très faible consommation. Un iGPU Intel avec le détecteur OpenVINO, un module Hailo-8 ou un GPU NVIDIA sont les alternatives courantes. La détection par CPU seul n\'est pas recommandée.' },
          { q: 'Frigate fonctionne-t-il hors ligne ?', a: 'Oui. Détection, enregistrement et notifications Home Assistant tournent tous sur votre réseau local, donc Frigate continue de fonctionner lors d\'une coupure internet. Seule la visualisation à distance depuis l\'extérieur nécessite une connectivité.' },
          { q: 'Quelles caméras fonctionnent avec Frigate ?', a: 'Frigate fonctionne avec les caméras fournissant un flux RTSP, ce qui couvre la plupart des caméras IP et PoE. Les caméras PoE filaires donnent les flux les plus fiables pour une détection continue.' },
          { q: 'Y a-t-il un abonnement pour Frigate ?', a: 'Non. Frigate est open source et tourne sur votre matériel sans abonnement. Vous payez un coût unique pour un accélérateur de détection et du stockage au lieu de frais cloud récurrents.' },
          { q: 'Qu\'est-ce que Frigate ?', a: 'Frigate est un logiciel d\'enregistreur vidéo réseau gratuit et open source qui exécute la détection d\'objets et de personnes par IA en local sur des flux RTSP et s\'intègre à Home Assistant. Il enregistre les clips sur votre propre stockage, sans cloud.' },
          { q: 'Combien coûte Frigate ?', a: 'Frigate est gratuit. Le service de modèles optionnel Frigate+ coûte 50 $ par an. Le vrai coût est le matériel : un hôte, un détecteur si nécessaire et du stockage.' },
          { q: 'Quelle est la meilleure caméra pour Frigate ?', a: 'La documentation de Frigate recommande des caméras PoE filaires Dahua, Hikvision ou Amcrest avec des flux H.264 et un sous-flux distinct pour la détection. Un grand capteur aide plus qu\'une résolution supplémentaire, et mieux vaut éviter les caméras Wi-Fi.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Suivre le guide complet de montage de Frigate NVR : détecteurs, zones et Home Assistant](/fr/smart-home/frigate-nvr-home-assistant-setup) — la mise en œuvre pratique vers laquelle mène cette vue d\'ensemble',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — où s\'insèrent les caméras locales dans le stack',
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — accélérateurs et stockage',
          '[Meilleurs mini-PC pour Home Assistant + IA locale](/fr/smart-home/best-mini-pc-home-assistant-local-ai) — une machine pour Frigate + HA',
          '[Risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks) — le problème que résolvent les caméras locales',
          '[Comment installer Ollama](/fr/local-llms/how-to-install-ollama) — inter-clusters : exécuter un modèle local sur la même machine',
          '[Meilleures caméras de sécurité locales (2026)](/fr/smart-home/best-local-security-cameras-2027) — recommandations matérielles pour cette installation',
          "[Détection de présence radar : occupation d'une pièce sans caméra (2026)](/fr/smart-home/radar-presence-sensing-no-camera) — une alternative sans caméra pour détecter l'occupation",
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Caméras de Sécurité à IA Locale avec Frigate (2026)',
      description: 'Frigate détecte personnes et objets par IA en local, sans cloud ni abonnement. Choix du détecteur, coût de Frigate+ (50 $/an), meilleures caméras, Home Assistant.',
      url: 'https://www.promptquorum.com/fr/smart-home/local-ai-security-camera',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Caméra de sécurité IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Ai-je besoin d\'un Coral TPU pour Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Frigate ne recommande plus Google Coral pour les nouvelles installations ; un iGPU Intel (OpenVINO), un module Hailo ou un GPU NVIDIA sont les alternatives courantes.' } },
        { '@type': 'Question', name: 'Frigate fonctionne-t-il hors ligne ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Détection, enregistrement et notifications Home Assistant tournent sur votre réseau local, donc Frigate continue de fonctionner lors d\'une coupure internet.' } },
        { '@type': 'Question', name: 'Quelles caméras fonctionnent avec Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Les caméras fournissant un flux RTSP, ce qui couvre la plupart des caméras IP et PoE. Les caméras PoE filaires donnent les flux les plus fiables.' } },
        { '@type': 'Question', name: 'Y a-t-il un abonnement pour Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Frigate est open source et tourne sur votre matériel sans abonnement — un coût unique pour un accélérateur et du stockage au lieu de frais cloud.' } },
        { '@type': 'Question', name: 'Qu\'est-ce que Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Logiciel NVR gratuit et open source qui exécute la détection IA de personnes et d\'objets en local sur des flux RTSP et s\'intègre à Home Assistant.' } },
        { '@type': 'Question', name: 'Combien coûte Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Frigate est gratuit ; Frigate+ optionnel coûte 50 $ par an. Le vrai coût est le matériel : hôte, détecteur si nécessaire et stockage.' } },
        { '@type': 'Question', name: 'Quelle est la meilleure caméra pour Frigate ?', acceptedAnswer: { '@type': 'Answer', text: 'Caméras PoE filaires Dahua, Hikvision ou Amcrest en H.264 avec un sous-flux de détection ; grand capteur plutôt que haute résolution ; éviter le Wi-Fi.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-ja.webp',
    title: 'Frigate によるローカルAIセキュリティカメラ（2026）',
    seoTitle: 'Frigate ローカルAIカメラ 2026：プライベート検出',
    intro:
      'Frigate は、クラウドなし・サブスクなしで、あなたのカメラ映像にローカルAIの物体・人物検出を実行し、Home Assistant に直接統合します。本ガイドは、クラウドカメラのプライバシー問題、Frigate の機能、検出を実行するハードウェア（Intel iGPU、Hailo モジュール、GPU。Google Coral は新規構築では非推奨）、おすすめカメラ、Frigate と Frigate+ の費用、Home Assistant 統合、通知、そしてサブスク型カメラとのコスト比較を扱います。',
    metaDescription:
      'Frigate はクラウドもサブスクも不要で、人物・物体をローカルAIで検出。検出器の選び方、Frigate+ の費用（年額$50）、おすすめカメラ、Home Assistant 連携。',
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
      '**Frigate は、カメラ映像に対するAIの物体・人物検出をすべてご自身のハードウェア上で実行するオープンソースのローカルNVRで、クラウドもサブスクも不要、Home Assistant と統合できます。** Frigate 自体は無料で、Intel iGPU、Hailo モジュール、NVIDIA GPU のいずれかでリアルタイム検出を維持でき、Google Coral は新規構築では推奨されなくなりました。',
    quickAnswerTop: {
      ja: {
        question: 'Frigate とは何で、どうやってプライベートなAIカメラを実現しますか？',
        answer:
          'Frigate は、RTSP カメラのストリームに対してローカルでAIの物体・人物検出を行うオープンソースのネットワークビデオレコーダーで、クラウドもサブスクも不要です。通知や自動化のために Home Assistant と統合します。公式ドキュメントは新規インストールでの Google Coral TPU を推奨しなくなっており、Intel iGPU（OpenVINO）、Hailo モジュール、NVIDIA GPU が複数カメラの検出をリアルタイムで処理します。',
        bullets: [
          '自分のハードウェア上のローカルAI検出 — クラウド不要',
          'Frigate は無料。オプションのモデルサービス Frigate+ は年額$50',
          '標準的な RTSP カメラで動作',
          'Home Assistant と統合してアラートや自動化に対応',
          'Intel iGPU、Hailo モジュール、GPU でリアルタイム検出を維持',
          'Google Coral は新規インストールでは非推奨',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'クラウドカメラの問題', anchor: 'cloud-problem' },
      { label: 'Frigate の機能', anchor: 'what-frigate-does' },
      { label: 'ハードウェア', anchor: 'hardware' },
      { label: 'おすすめカメラ', anchor: 'cameras' },
      { label: 'Home Assistant 統合', anchor: 'ha-integration' },
      { label: '通知と自動化', anchor: 'notifications' },
      { label: 'クラウドカメラとのコスト比較', anchor: 'cost' },
      { label: 'Frigate の費用', anchor: 'frigate-plus' },
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
          'Frigate はAI物体・人物検出を内蔵したオープンソースのローカルNVRソフトウェア',
          '検出はご自身のハードウェアで実行 — 映像は既定でネットワーク内に留まり、サブスク不要',
          '標準的な RTSP カメラで動作（有線PoEカメラが最も安定）',
          'Intel iGPU（OpenVINO）、Hailo モジュール、NVIDIA GPU がリアルタイム検出を実行。Frigate は新規インストールでの Google Coral を推奨しなくなった',
          'Frigate は無料。オプションのモデルサービス Frigate+ は年額$50',
          'Home Assistant と統合して通知・スナップショット・自動化に対応',
          '一度きりのハードウェア費用が、クラウドカメラの継続課金に代わる',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'ローカルAIカメラのアーキテクチャ：RTSPカメラ映像はFrigateに送られ、Coral TPUまたはGPUでAI検出を実行し、クリップをローカルに保存してHome Assistantへ通知を送る——クラウドを経由しない。',
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate にはどんなハードウェアが必要ですか？',
        content:
          '**Frigate は Intel iGPU、Hailo モジュール、NVIDIA GPU、またはその他の対応アクセラレーター上で検出を実行します。公式ドキュメントは新規インストールでの Google Coral を推奨しなくなりました。** CPUのみでの検出は推奨されません。録画に十分なストレージを持つホストと組み合わせてください。',
        items: [
          '**Intel iGPU / NPU（OpenVINO）：** 第6世代以降の Intel CPU で動作するため、N100 クラスのミニPCなら追加のアクセラレーターは不要です。',
          '**Hailo-8 / Hailo-8L：** M.2 または Raspberry Pi 用モジュールで、YOLOv6n の公表推論時間はそれぞれ約7ミリ秒・約11ミリ秒です。',
          '**NVIDIA GPU（ONNX）：** 検出も高速化でき、同じマシンですでにローカルLLMを動かしている場合に便利です — [ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照してください。',
          '**Google Coral の代替：** Frigate のドキュメントは、Coral を消費電力が非常に低い構成や他のアクセラレーターが使えないハードウェアにのみ挙げており、サポートは継続しています。検出器のベンチマークは[Frigate NVR 構築ガイド全文](/ja/smart-home/frigate-nvr-home-assistant-setup)にあります。',
          '**ホストとストレージ：** イベント録画用のローカルディスクを計画してください。Frigate は Home Assistant とミニPCを共有できます — [Home Assistant + ローカルAI向けおすすめミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai)を参照してください。',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Frigate に最適なカメラは？',
        content:
          '**H.264 の RTSP ストリームと低解像度のサブストリームを提供する有線PoEカメラを使ってください。Frigate のドキュメントは Dahua、Hikvision、Amcrest（Dahua ベース）を推奨ブランドとしています。** 特に夜間は、高解像度よりも大きなセンサーのほうが重要です。',
        items: [
          '**ストリーム：** 検出・ライブ表示・録画用に別々のサブストリームを持つ H.264 映像。',
          '**画素数よりセンサー：** 特に夜間は、高解像度より大きなセンサーが有利です。',
          '**Wi-Fi カメラは避ける：** ストリームが不安定で、常時検出に向きません。',
          '**Reolink：** Reolink のカメラは 5MP 以下にしてください。',
          '**選定：** 具体的なモデルは[おすすめローカル防犯カメラ](/ja/smart-home/best-local-security-cameras-2027)を参照してください。',
          '**法令を確認：** 公共の場所や他人の敷地の撮影は制限される場合があります（EUではGDPRなど）。これは法的助言ではありません。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 統合',
        content:
          '**Frigate は Home Assistant と統合し、検出を自動化に使えるエンティティにします。** Frigate をインストールし、Home Assistant で Frigate 統合を追加します。',
        numberedItems: [
          'Frigate を（アドオンまたはコンテナとして）動かし、カメラの RTSP ストリームを指定します。',
          'Frigate の設定UI（0.18 以降）または設定ファイルで、検出器（OpenVINO、Hailo、GPU、Coral）と検出ゾーンを設定します。',
          'Home Assistant で Frigate 統合を追加し、カメラと検出のエンティティを公開します。',
          '検出エンティティを自動化やダッシュボードで使います。',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Frigateの4ステップセットアップ：Frigateを実行し、ゾーン付きのCoral TPUまたはGPU検出器を設定し、Home Assistant統合を追加し、通知とダッシュボードを自動化する。',
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
          'Frigate 0.18 では、接続した GenAI プロバイダーにカメラ・追跡オブジェクト・レビュー活動について尋ねられるチャット画面が追加されました（[Frigate のリリース](https://github.com/blakeblackshear/frigate/releases)）。 カメラのデータをクラウド上のプロバイダーに送ると、そのデータはネットワークの外に出ます。',
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
          { '観点': '検出', 'クラウドカメラ': 'クラウドAI', 'Frigate（ローカル）': 'ローカルAI（iGPU/Hailo/GPU）' },
          { '観点': 'オフライン', 'クラウドカメラ': 'インターネットなしでは限定的', 'Frigate（ローカル）': 'あなたの LAN で動作' },
          { '観点': 'ソフトウェア', 'クラウドカメラ': 'ベンダーのプラン料金', 'Frigate（ローカル）': '無料（Frigate+ は任意で年$50）' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate の費用はいくら？',
        content:
          '**Frigate 自体は無料のオープンソースで、年額$50の任意のモデルサービス Frigate+ が、公式サイトに掲載された有料アドオンです。** サブスクなしで Frigate を使えます。',
        items: [
          '**Frigate：** 無料のソフトウェアで、カメラ数や機能ごとの料金はありません。',
          '**[Frigate+](https://frigate.video/plus/)：** 年額$50で、アップロードした画像から作る最大12個のファインチューニング済みモデルを利用可能。追加のファインチューニングは1回$5です。',
          '**解約：** サブスク期間中に学習したモデルは、更新しなくてもダウンロードできます。',
          '**ハードウェア：** 実際の費用はホスト、検出器、ディスクです — ミニPC、必要なら Hailo モジュールや GPU、そしてストレージ。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Frigate に Coral TPU は必要ですか？', a: 'いいえ。Frigate のドキュメントは、消費電力が非常に低い構成を除き、新規インストールでの Google Coral を推奨しなくなりました。一般的な代替は、OpenVINO 検出器を使う Intel iGPU、Hailo-8 モジュール、NVIDIA GPU です。CPUのみでの検出は推奨されません。' },
          { q: 'Frigate はオフラインで動きますか？', a: 'はい。検出、録画、Home Assistant の通知はすべてローカルネットワークで動くため、Frigate はインターネット障害中も動き続けます。家の外からのリモート視聴だけが接続を必要とします。' },
          { q: 'どのカメラが Frigate で動きますか？', a: 'Frigate は RTSP ストリームを提供するカメラで動き、これは大半の IP・PoE カメラを網羅します。有線 PoE カメラが継続的な検出に最も信頼できるストリームを提供します。' },
          { q: 'Frigate にサブスクはありますか？', a: 'いいえ。Frigate はオープンソースで、サブスクなしであなたのハードウェアで動きます。継続的なクラウド料金の代わりに、検出アクセラレーターとストレージに一度きりの費用を払います。' },
          { q: 'Frigate とは何ですか？', a: 'Frigate は無料のオープンソース ネットワークビデオレコーダーで、RTSP カメラのストリームに対してローカルでAIの物体・人物検出を行い、Home Assistant と統合します。クリップはクラウドを使わず、ご自身のストレージに保存されます。' },
          { q: 'Frigate の費用はいくらですか？', a: 'Frigate は無料です。オプションのモデルサービス Frigate+ は年額$50です。実際の費用はハードウェアで、ホスト、必要に応じた検出器、ストレージが対象です。' },
          { q: 'Frigate に最適なカメラは？', a: 'Frigate のドキュメントは、Dahua、Hikvision、Amcrest の有線PoEカメラで、H.264 ストリームと検出用の別サブストリームを備えるものを推奨しています。高解像度よりも大きなセンサーが効果的で、Wi-Fi カメラは避けるのが無難です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Frigate NVR の詳細な構築手順を確認する：検出器・ゾーン・Home Assistant](/ja/smart-home/frigate-nvr-home-assistant-setup) — この概要の先にある実践的なセットアップ',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — ローカルカメラが構成のどこに収まるか',
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — アクセラレーターとストレージ',
          '[Home Assistant＋ローカルAIに最適なミニPC](/ja/smart-home/best-mini-pc-home-assistant-local-ai) — Frigate＋HA を一台で',
          '[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks) — ローカルカメラが解決する問題',
          '[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama) — クラスター横断：同じ機器でローカルモデルを動かす',
          '[ベストなローカル防犯カメラ（2026年）](/ja/smart-home/best-local-security-cameras-2027) — この構成に合うハードウェアの選び方',
          '[レーダー式人感センサー：カメラなしの部屋の在室検知（2026年）](/ja/smart-home/radar-presence-sensing-no-camera) — カメラを使わない在室検知の代替手段',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Frigate によるローカルAIセキュリティカメラ（2026）',
      description: 'Frigate はクラウドもサブスクも不要で、人物・物体をローカルAIで検出。検出器の選び方、Frigate+ の費用（年額$50）、おすすめカメラ、Home Assistant 連携。',
      url: 'https://www.promptquorum.com/ja/smart-home/local-ai-security-camera',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AIセキュリティカメラ' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate に Coral TPU は必要ですか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Frigate は新規インストールでの Google Coral を推奨しておらず、Intel iGPU（OpenVINO）、Hailo モジュール、NVIDIA GPU が一般的な代替です。' } },
        { '@type': 'Question', name: 'Frigate はオフラインで動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。検出、録画、Home Assistant の通知はローカルネットワークで動くため、インターネット障害中も動き続けます。' } },
        { '@type': 'Question', name: 'どのカメラが Frigate で動きますか？', acceptedAnswer: { '@type': 'Answer', text: 'RTSP ストリームを提供するカメラで動き、大半の IP・PoE カメラを網羅します。有線 PoE カメラが最も信頼できるストリームを提供します。' } },
        { '@type': 'Question', name: 'Frigate にサブスクはありますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Frigate はオープンソースで、サブスクなしで動きます——クラウド料金の代わりにアクセラレーターとストレージへの一度きりの費用です。' } },
        { '@type': 'Question', name: 'Frigate とは何ですか？', acceptedAnswer: { '@type': 'Answer', text: '無料のオープンソースNVRソフトウェア。RTSP ストリームに対してローカルでAIの人物・物体検出を行い、Home Assistant と統合します。' } },
        { '@type': 'Question', name: 'Frigate の費用はいくらですか？', acceptedAnswer: { '@type': 'Answer', text: 'Frigate は無料で、オプションの Frigate+ は年額$50。実際の費用はホスト、必要に応じた検出器、ストレージです。' } },
        { '@type': 'Question', name: 'Frigate に最適なカメラは？', acceptedAnswer: { '@type': 'Answer', text: 'Dahua・Hikvision・Amcrest の有線PoEカメラで H.264 と検出用サブストリーム付きが推奨。高解像度より大きなセンサー、Wi-Fi は避ける。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-pt.webp',
    title: 'Câmeras de Segurança com IA Local com Frigate (2026)',
    seoTitle: 'Câmeras IA Local com Frigate 2026: Detecção Privada',
    intro:
      'O Frigate executa detecção local de objetos e pessoas com IA nos feeds das suas câmeras, sem nuvem e sem assinatura, integrando-se diretamente ao Home Assistant. Este guia cobre o problema de privacidade das câmeras na nuvem, o que o Frigate faz, o hardware que executa a detecção (uma iGPU Intel, um módulo Hailo ou uma GPU; o Google Coral não é mais recomendado para instalações novas), as melhores câmeras, quanto custam o Frigate e o Frigate+, a integração com o Home Assistant, as notificações e como o custo se compara ao das câmeras por assinatura.',
    metaDescription:
      'O Frigate detecta pessoas e objetos com IA localmente, sem nuvem nem assinatura. Escolha do detector, custo do Frigate+ (US$ 50/ano), melhores câmeras e Home Assistant.',
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
      '**O Frigate é um NVR local de código aberto que executa detecção de objetos e pessoas com IA nos feeds das suas câmeras inteiramente no seu próprio hardware — sem nuvem, sem assinatura — e se integra ao Home Assistant.** O Frigate é gratuito; uma iGPU Intel, um módulo Hailo ou uma GPU NVIDIA mantém a detecção em tempo real, e o Google Coral não é mais recomendado para instalações novas.',
    quickAnswerTop: {
      pt: {
        question: 'O que é o Frigate e como ele dá câmeras com IA privadas?',
        answer:
          'O Frigate é um software de gravação de vídeo em rede de código aberto que faz detecção de objetos e pessoas com IA localmente em streams de câmeras RTSP, sem nuvem e sem assinatura. Ele se integra ao Home Assistant para notificações e automações. A documentação não recomenda mais uma TPU Google Coral para instalações novas; uma iGPU Intel (OpenVINO), um módulo Hailo ou uma GPU NVIDIA cuida da detecção de várias câmeras em tempo real.',
        bullets: [
          'Detecção com IA local no seu próprio hardware — sem nuvem',
          'O Frigate é gratuito; o serviço opcional de modelos Frigate+ custa US$ 50 por ano',
          'Funciona com câmeras RTSP padrão',
          'Integra-se ao Home Assistant para alertas e automações',
          'Uma iGPU Intel, um módulo Hailo ou uma GPU mantém a detecção em tempo real',
          'O Google Coral não é mais recomendado para instalações novas',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O problema das câmeras na nuvem', anchor: 'cloud-problem' },
      { label: 'O que o Frigate faz', anchor: 'what-frigate-does' },
      { label: 'Hardware', anchor: 'hardware' },
      { label: 'Melhores câmeras', anchor: 'cameras' },
      { label: 'Integração com o Home Assistant', anchor: 'ha-integration' },
      { label: 'Notificações e automações', anchor: 'notifications' },
      { label: 'Custo vs câmeras na nuvem', anchor: 'cost' },
      { label: 'Quanto custa o Frigate', anchor: 'frigate-plus' },
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
          'O Frigate é um software NVR local de código aberto com detecção de objetos/pessoas por IA integrada',
          'A detecção roda no seu hardware — as gravações ficam por padrão na sua rede, sem assinatura',
          'Funciona com câmeras RTSP padrão (câmeras PoE com fio são as mais confiáveis)',
          'Uma iGPU Intel (OpenVINO), um módulo Hailo ou uma GPU NVIDIA executa a detecção em tempo real; o Frigate não recomenda mais o Google Coral para instalações novas',
          'O Frigate é gratuito; o serviço opcional de modelos Frigate+ custa US$ 50 por ano',
          'Integra-se ao Home Assistant para notificações, capturas e automações',
          'Um custo único de hardware substitui as mensalidades recorrentes das câmeras na nuvem',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: 'Arquitetura de câmera com IA local: um stream de câmera RTSP vai para o Frigate, que executa detecção com IA em uma Coral TPU ou GPU, salva clipes localmente e envia alertas ao Home Assistant — sem ida e volta à nuvem.',
      },
      hardware: {
        id: 'hardware',
        title: 'Que hardware o Frigate precisa?',
        content:
          '**O Frigate executa a detecção em uma iGPU Intel, um módulo Hailo, uma GPU NVIDIA ou outro acelerador compatível; a documentação não recomenda mais o Google Coral para instalações novas.** A detecção apenas com CPU não é recomendada. Combine-o com um host que tenha armazenamento suficiente para as gravações.',
        items: [
          '**iGPU ou NPU Intel (OpenVINO):** funciona em CPUs Intel de 6ª geração ou mais recentes, então um mini PC da classe N100 não precisa de acelerador extra.',
          '**Hailo-8 / Hailo-8L:** módulos M.2 ou para Raspberry Pi com tempos de inferência publicados de cerca de 7 ms e 11 ms no YOLOv6n.',
          '**GPU NVIDIA (ONNX):** também acelera a detecção e é útil se você já executa um LLM local na mesma máquina — veja [o melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
          '**Alternativa ao Google Coral:** a documentação do Frigate cita o Coral apenas para montagens de consumo muito baixo ou hardware que não pode usar outro acelerador, e continua a oferecer suporte. Os benchmarks de detectores estão no [guia completo para montar um NVR Frigate](/pt/smart-home/frigate-nvr-home-assistant-setup).',
          '**Host e armazenamento:** planeje disco local para as gravações de eventos; o Frigate pode dividir um mini PC com o Home Assistant — veja [os melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai).',
        ],
      },
      cameras: {
        id: 'cameras',
        title: 'Quais câmeras funcionam melhor com o Frigate?',
        content:
          '**Use câmeras PoE com fio que ofereçam um stream RTSP H.264 mais um substream de baixa resolução; a documentação do Frigate recomenda as marcas Dahua, Hikvision e Amcrest (baseada em Dahua).** Um sensor maior importa mais que uma resolução maior, principalmente à noite.',
        items: [
          '**Streams:** vídeo H.264 com substreams separados para detecção, visualização ao vivo e gravação.',
          '**Sensor antes de megapixels:** um sensor maior vence uma resolução maior, principalmente à noite.',
          '**Evite câmeras Wi-Fi:** os streams delas são pouco confiáveis para detecção contínua.',
          '**Reolink:** mantenha as câmeras Reolink em 5 MP ou menos.',
          '**Seleção:** veja [as melhores câmeras de segurança locais](/pt/smart-home/best-local-security-cameras-2027) para modelos específicos.',
          '**Confira a lei:** gravar espaços públicos ou propriedade de terceiros pode ser restrito (por exemplo, pela LGPD no Brasil); isto não é aconselhamento jurídico.',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Integração com o Home Assistant',
        content:
          '**O Frigate se integra ao Home Assistant para que as detecções se tornem entidades sobre as quais você pode automatizar.** Instale o Frigate, depois adicione a integração do Frigate no Home Assistant.',
        numberedItems: [
          'Rode o Frigate (como add-on ou contêiner) e aponte-o para os streams RTSP das suas câmeras.',
          'Configure o detector (OpenVINO, Hailo, GPU ou Coral) e as zonas de detecção na interface de configurações do Frigate (a partir da 0.18) ou no arquivo de configuração.',
          'Adicione a integração do Frigate no Home Assistant para expor as entidades de câmera e detecção.',
          'Use as entidades de detecção em automações e painéis.',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Configuração do Frigate em quatro passos: execute o Frigate, configure um detector Coral TPU ou GPU com zonas, adicione a integração do Home Assistant e depois automatize alertas e painéis.',
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
          'O Frigate 0.18 adiciona uma interface de chat para consultar um provedor GenAI conectado sobre câmeras, objetos rastreados e atividade de revisão ([versões do Frigate](https://github.com/blakeblackshear/frigate/releases)). Enviar dados de câmera a um provedor hospedado na nuvem faz esses dados saírem da sua rede.',
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
          { 'Aspecto': 'Detecção', 'Câmeras na nuvem': 'IA na nuvem', 'Frigate (local)': 'IA local (iGPU/Hailo/GPU)' },
          { 'Aspecto': 'Offline', 'Câmeras na nuvem': 'Limitada sem internet', 'Frigate (local)': 'Funciona na sua LAN' },
          { 'Aspecto': 'Software', 'Câmeras na nuvem': 'Mensalidades do fornecedor', 'Frigate (local)': 'Grátis (Frigate+ opcional US$ 50/ano)' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Quanto custa o Frigate?',
        content:
          '**O Frigate é gratuito e de código aberto; o Frigate+, um serviço opcional de modelos por US$ 50 ao ano, é o complemento pago oferecido no site.** Você pode usar o Frigate sem nenhuma assinatura.',
        items: [
          '**Frigate:** software gratuito, sem taxas por câmera ou por recurso.',
          '**[Frigate+](https://frigate.video/plus/):** US$ 50 por ano para até 12 modelos ajustados a partir das imagens que você enviar; cada ajuste extra custa US$ 5.',
          '**Cancelamento:** os modelos treinados durante uma assinatura continuam disponíveis para download se você não renovar.',
          '**Hardware:** o custo real é o host, o detector e os discos — um mini PC, se preciso um módulo Hailo ou uma GPU, e armazenamento.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Preciso de uma Coral TPU para o Frigate?', a: 'Não. A documentação do Frigate não recomenda mais o Google Coral para instalações novas, exceto para montagens de consumo muito baixo. Uma iGPU Intel com o detector OpenVINO, um módulo Hailo-8 ou uma GPU NVIDIA são as alternativas habituais. A detecção apenas com CPU não é recomendada.' },
          { q: 'O Frigate funciona offline?', a: 'Sim. A detecção, a gravação e as notificações do Home Assistant rodam na sua rede local, então o Frigate continua funcionando durante uma queda de internet. Só a visualização remota de fora do lar precisa de conectividade.' },
          { q: 'Quais câmeras funcionam com o Frigate?', a: 'O Frigate funciona com câmeras que fornecem um stream RTSP, o que cobre a maioria das câmeras IP e PoE. Câmeras PoE com fio dão os streams mais confiáveis para detecção contínua.' },
          { q: 'Há uma assinatura para o Frigate?', a: 'Não. O Frigate é de código aberto e roda no seu hardware sem assinatura. Você paga um custo único por um acelerador de detecção e armazenamento em vez de taxas recorrentes na nuvem.' },
          { q: 'O que é o Frigate?', a: 'O Frigate é um software de gravação de vídeo em rede gratuito e de código aberto que executa detecção de objetos e pessoas com IA localmente em streams RTSP e se integra ao Home Assistant. Ele grava os clipes no seu próprio armazenamento, sem nuvem.' },
          { q: 'Quanto custa o Frigate?', a: 'O Frigate é gratuito. O serviço opcional de modelos Frigate+ custa US$ 50 por ano. O custo real é o hardware: um host, um detector se necessário e armazenamento.' },
          { q: 'Qual é a melhor câmera para o Frigate?', a: 'A documentação do Frigate recomenda câmeras PoE com fio da Dahua, Hikvision ou Amcrest com streams H.264 e um substream separado para detecção. Um sensor maior ajuda mais que resolução extra, e é melhor evitar câmeras Wi-Fi.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Seguir o guia completo de montagem do Frigate NVR: detectores, zonas e Home Assistant](/pt/smart-home/frigate-nvr-home-assistant-setup) — a configuração prática para onde esta visão geral aponta',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — onde as câmeras locais se encaixam no stack',
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — aceleradores e armazenamento',
          '[Melhores mini PCs para Home Assistant + IA local](/pt/smart-home/best-mini-pc-home-assistant-local-ai) — uma máquina para Frigate + HA',
          '[Riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks) — o problema que as câmeras locais resolvem',
          '[Como instalar o Ollama](/pt/local-llms/how-to-install-ollama) — entre clusters: rodar um modelo local na mesma máquina',
          '[Melhores câmeras de segurança locais (2026)](/pt/smart-home/best-local-security-cameras-2027) — recomendações de hardware para esse setup',
          '[Detecção de presença por radar: ocupação de ambientes sem câmera (2026)](/pt/smart-home/radar-presence-sensing-no-camera) — uma alternativa sem câmera para detectar ocupação',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Câmeras de Segurança com IA Local com Frigate (2026)',
      description: 'O Frigate detecta pessoas e objetos com IA localmente, sem nuvem nem assinatura. Escolha do detector, custo do Frigate+ (US$ 50/ano), melhores câmeras e Home Assistant.',
      url: 'https://www.promptquorum.com/pt/smart-home/local-ai-security-camera',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'Câmera de segurança com IA' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Preciso de uma Coral TPU para o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O Frigate não recomenda mais o Google Coral para instalações novas; uma iGPU Intel (OpenVINO), um módulo Hailo ou uma GPU NVIDIA são as alternativas habituais.' } },
        { '@type': 'Question', name: 'O Frigate funciona offline?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. A detecção, a gravação e as notificações do Home Assistant rodam na sua rede local, então o Frigate continua funcionando durante uma queda de internet.' } },
        { '@type': 'Question', name: 'Quais câmeras funcionam com o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Câmeras que fornecem um stream RTSP, o que cobre a maioria das câmeras IP e PoE. Câmeras PoE com fio dão os streams mais confiáveis.' } },
        { '@type': 'Question', name: 'Há uma assinatura para o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Não. O Frigate é de código aberto e roda no seu hardware sem assinatura — um custo único por um acelerador e armazenamento em vez de taxas na nuvem.' } },
        { '@type': 'Question', name: 'O que é o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Software NVR gratuito e de código aberto que executa detecção de pessoas e objetos com IA localmente em streams RTSP e se integra ao Home Assistant.' } },
        { '@type': 'Question', name: 'Quanto custa o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'O Frigate é gratuito; o Frigate+ opcional custa US$ 50 por ano. O custo real é o hardware: host, detector se necessário e armazenamento.' } },
        { '@type': 'Question', name: 'Qual é a melhor câmera para o Frigate?', acceptedAnswer: { '@type': 'Answer', text: 'Câmeras PoE com fio da Dahua, Hikvision ou Amcrest com H.264 e substream de detecção; sensor maior vale mais que resolução; evite Wi-Fi.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-10-19',
    next_refresh_due: '2027-04-19',
    theme: 'Local AI & LLMs in the Smart Home',
    heroImage: '/images/local-ai-security-camera-overview-hero-zh.webp',
    title: '用 Frigate 的本地 AI 安防摄像头（2026）',
    seoTitle: 'Frigate 本地 AI 摄像头 2026：私密检测',
    intro:
      'Frigate 在你的摄像头画面上进行本地 AI 物体与人物检测，无云端、无订阅，并直接集成到 Home Assistant。本指南讲解云端摄像头的隐私问题、Frigate 的功能、运行检测的硬件（Intel 核显、Hailo 模块或 GPU；新装机不再推荐 Google Coral）、推荐摄像头、Frigate 与 Frigate+ 的费用、Home Assistant 集成、通知，以及与订阅式摄像头的成本对比。',
    metaDescription:
      'Frigate 在本地用 AI 检测人物与物体，无需云端和订阅。检测器选择、Frigate+ 费用（每年 $50）、推荐摄像头与 Home Assistant 设置。',
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
      '**Frigate 是一款开源的本地 NVR，在你自己的硬件上完整运行摄像头画面的 AI 物体与人物检测——无云端、无订阅——并与 Home Assistant 集成。** Frigate 本身免费；Intel 核显、Hailo 模块或 NVIDIA GPU 可让检测保持实时，新装机不再推荐 Google Coral。',
    quickAnswerTop: {
      zh: {
        question: 'Frigate 是什么，它如何提供私密的 AI 摄像头？',
        answer:
          'Frigate 是开源的网络录像机软件，在 RTSP 摄像头流上本地执行 AI 物体与人物检测，无云端、无订阅。它与 Home Assistant 集成，用于通知和自动化。其文档不再建议新安装使用 Google Coral TPU；Intel 核显（OpenVINO）、Hailo 模块或 NVIDIA GPU 即可实时处理多路摄像头的检测。',
        bullets: [
          '在你自己的硬件上进行本地 AI 检测——无云端',
          'Frigate 免费；可选的模型服务 Frigate+ 每年 $50',
          '支持标准 RTSP 摄像头',
          '与 Home Assistant 集成，用于提醒和自动化',
          'Intel 核显、Hailo 模块或 GPU 让检测保持实时',
          '新安装不再推荐 Google Coral',
        ],
        updatedDate: '2026-10',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '云端摄像头的问题', anchor: 'cloud-problem' },
      { label: 'Frigate 的功能', anchor: 'what-frigate-does' },
      { label: '硬件', anchor: 'hardware' },
      { label: '推荐摄像头', anchor: 'cameras' },
      { label: 'Home Assistant 集成', anchor: 'ha-integration' },
      { label: '通知与自动化', anchor: 'notifications' },
      { label: '与云端摄像头的成本对比', anchor: 'cost' },
      { label: 'Frigate 的费用', anchor: 'frigate-plus' },
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
          '检测在你的硬件上运行——录像默认保留在你的网络内，无订阅',
          '支持标准 RTSP 摄像头（有线 PoE 摄像头最稳定）',
          'Intel 核显（OpenVINO）、Hailo 模块或 NVIDIA GPU 可实时运行检测；Frigate 不再建议新安装使用 Google Coral',
          'Frigate 免费；可选的模型服务 Frigate+ 每年 $50',
          '与 Home Assistant 集成，用于通知、快照和自动化',
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
        image: '/images/local-ai-security-camera-architecture-en.svg',
        imageCaption: '本地 AI 摄像头架构：RTSP 摄像头画面传给 Frigate，Frigate 在 Coral TPU 或 GPU 上运行 AI 检测，将片段保存在本地并向 Home Assistant 发送告警——无需往返云端。',
      },
      hardware: {
        id: 'hardware',
        title: 'Frigate 需要什么硬件？',
        content:
          '**Frigate 可在 Intel 核显、Hailo 模块、NVIDIA GPU 或其他受支持的加速器上运行检测；其文档不再建议新安装使用 Google Coral。** 不建议仅用 CPU 检测。请搭配存储空间足够存放录像的主机。',
        items: [
          '**Intel 核显或 NPU（OpenVINO）：** 适用于第 6 代及更新的 Intel CPU，因此 N100 级别的迷你主机无需额外加速器。',
          '**Hailo-8 / Hailo-8L：** M.2 或树莓派模块，在 YOLOv6n 上公布的推理时间分别约为 7 毫秒和 11 毫秒。',
          '**NVIDIA GPU（ONNX）：** 同样可加速检测，若你已在同一台机器上运行本地 LLM 就很实用——参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
          '**Google Coral 的替代方案：** Frigate 文档仅在功耗极低的方案或无法使用其他加速器的硬件上列出 Coral，并会继续提供支持。检测器基准测试见[完整的 Frigate NVR 搭建指南](/zh/smart-home/frigate-nvr-home-assistant-setup)。',
          '**主机与存储：** 为事件录像规划本地磁盘；Frigate 可与 Home Assistant 共用一台迷你主机——参见[适合 Home Assistant + 本地 AI 的最佳迷你主机](/zh/smart-home/best-mini-pc-home-assistant-local-ai)。',
        ],
      },
      cameras: {
        id: 'cameras',
        title: '哪些摄像头最适合 Frigate？',
        content:
          '**请使用提供 H.264 RTSP 流和低分辨率子码流的有线 PoE 摄像头；Frigate 文档推荐的品牌是大华（Dahua）、海康威视（Hikvision）和 Amcrest（基于大华）。** 尤其在夜间，更大的传感器比更高的分辨率更重要。',
        items: [
          '**码流：** H.264 视频，并为检测、实时查看和录像提供各自的子码流。',
          '**传感器优先于像素：** 尤其在夜间，更大的传感器胜过更高的分辨率。',
          '**避免 Wi-Fi 摄像头：** 其码流不够稳定，不适合持续检测。',
          '**Reolink：** 请将 Reolink 摄像头保持在 500 万像素及以下。',
          '**选购：** 具体型号参见[最佳本地安防摄像头](/zh/smart-home/best-local-security-cameras-2027)。',
          '**请核对法律：** 拍摄公共场所或他人财产可能受到限制（例如欧盟的 GDPR）；此内容不构成法律意见。',
        ],
      },
      haIntegration: {
        id: 'ha-integration',
        title: 'Home Assistant 集成',
        content:
          '**Frigate 与 Home Assistant 集成，使检测变成你可以据以做自动化的实体。** 安装 Frigate，然后在 Home Assistant 中添加 Frigate 集成。',
        numberedItems: [
          '运行 Frigate（作为加载项或容器），并把它指向你摄像头的 RTSP 流。',
          '在 Frigate 设置界面（0.18 及更新版本）或配置文件中配置检测器（OpenVINO、Hailo、GPU 或 Coral）和检测区域。',
          '在 Home Assistant 中添加 Frigate 集成，以暴露摄像头和检测实体。',
          '在自动化和仪表盘中使用这些检测实体。',
        ],
        image: '/images/local-ai-security-camera-setup-flow-en.svg',
        imageCaption: 'Frigate 四步配置：运行 Frigate，配置带区域的 Coral TPU 或 GPU 检测器，添加 Home Assistant 集成，然后自动化告警与仪表盘。',
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
          'Frigate 0.18 新增聊天界面，可向已连接的 GenAI 服务询问摄像头、被跟踪物体和审查活动（[Frigate 发布页](https://github.com/blakeblackshear/frigate/releases)）。 将摄像头数据发送给云端托管的服务商，这些数据就会离开你的网络。',
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
          { '方面': '检测', '云端摄像头': '云端 AI', 'Frigate（本地）': '本地 AI（iGPU/Hailo/GPU）' },
          { '方面': '离线', '云端摄像头': '无网络时受限', 'Frigate（本地）': '在你的局域网上工作' },
          { '方面': '软件', '云端摄像头': '厂商套餐费用', 'Frigate（本地）': '免费（可选 Frigate+ 每年 $50）' },
        ],
      },
      frigatePlus: {
        id: 'frigate-plus',
        title: 'Frigate 要花多少钱？',
        content:
          '**Frigate 本身免费开源；Frigate+ 是其官网上列出的付费附加服务，这项可选的模型服务每年 $50。** 你完全可以不订阅就使用 Frigate。',
        items: [
          '**Frigate：** 免费软件，不按摄像头数量或功能收费。',
          '**[Frigate+](https://frigate.video/plus/)：** 每年 $50，可基于你上传的图片获得最多 12 个微调模型；额外微调每次 $5。',
          '**取消订阅：** 订阅期间训练的模型即使不续订也仍可下载。',
          '**硬件：** 真正的成本是主机、检测器和磁盘——一台迷你主机，必要时加 Hailo 模块或 GPU，以及存储。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'Frigate 需要 Coral TPU 吗？', a: '不需要。Frigate 文档不再建议新安装使用 Google Coral，功耗极低的方案除外。常见替代方案是搭配 OpenVINO 检测器的 Intel 核显、Hailo-8 模块或 NVIDIA GPU。不建议仅用 CPU 检测。' },
          { q: 'Frigate 能离线工作吗？', a: '能。检测、录制和 Home Assistant 通知都在你的本地网络上运行，因此 Frigate 在断网时仍可工作。只有来自家庭之外的远程查看才需要连通性。' },
          { q: '哪些摄像头可与 Frigate 配合？', a: 'Frigate 兼容提供 RTSP 流的摄像头，这涵盖了大多数 IP 和 PoE 摄像头。有线 PoE 摄像头为持续检测提供最可靠的流。' },
          { q: 'Frigate 有订阅吗？', a: '没有。Frigate 是开源的，在你的硬件上运行，无订阅。你为检测加速器和存储支付一次性费用，而不是持续的云端费用。' },
          { q: 'Frigate 是什么？', a: 'Frigate 是免费的开源网络录像机软件，在 RTSP 摄像头流上本地执行 AI 物体与人物检测，并与 Home Assistant 集成。它把录像片段保存在你自己的存储上，无需云端。' },
          { q: 'Frigate 要花多少钱？', a: 'Frigate 免费。可选的模型服务 Frigate+ 每年 $50。真正的成本是硬件：主机、按需选配的检测器以及存储。' },
          { q: '哪款摄像头最适合 Frigate？', a: 'Frigate 文档推荐大华、海康威视或 Amcrest 的有线 PoE 摄像头，需有 H.264 码流和单独的检测子码流。更大的传感器比更高的分辨率更有帮助，最好避免 Wi-Fi 摄像头。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[查看完整的 Frigate NVR 搭建指南：检测器、区域与 Home Assistant](/zh/smart-home/frigate-nvr-home-assistant-setup) — 本概览之后的动手配置',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 本地摄像头在堆栈中的位置',
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — 加速器与存储',
          '[Home Assistant + 本地 AI 的最佳迷你 PC](/zh/smart-home/best-mini-pc-home-assistant-local-ai) — 用一台机器跑 Frigate + HA',
          '[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks) — 本地摄像头所解决的问题',
          '[如何安装 Ollama](/zh/local-llms/how-to-install-ollama) — 跨集群：在同一台机器上运行本地模型',
          '[最佳本地安防摄像头（2026年）](/zh/smart-home/best-local-security-cameras-2027) — 与本方案搭配的硬件推荐',
          '[雷达人体存在感应：无需摄像头的房间占用检测（2026年）](/zh/smart-home/radar-presence-sensing-no-camera) — 一种无需摄像头的房间占用检测方案',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '用 Frigate 的本地 AI 安防摄像头（2026）',
      description: 'Frigate 在本地用 AI 检测人物与物体，无需云端和订阅。检测器选择、Frigate+ 费用（每年 $50）、推荐摄像头与 Home Assistant 设置。',
      url: 'https://www.promptquorum.com/zh/smart-home/local-ai-security-camera',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-10-19',
      about: [{ '@type': 'Thing', name: 'Frigate' }, { '@type': 'Thing', name: 'AI 安防摄像头' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Coral TPU' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: 'Frigate 需要 Coral TPU 吗？', acceptedAnswer: { '@type': 'Answer', text: '不需要。Frigate 不再建议新安装使用 Google Coral；常见替代方案是 Intel 核显（OpenVINO）、Hailo 模块或 NVIDIA GPU。' } },
        { '@type': 'Question', name: 'Frigate 能离线工作吗？', acceptedAnswer: { '@type': 'Answer', text: '能。检测、录制和 Home Assistant 通知都在你的本地网络上运行，因此 Frigate 在断网时仍可工作。' } },
        { '@type': 'Question', name: '哪些摄像头可与 Frigate 配合？', acceptedAnswer: { '@type': 'Answer', text: '兼容提供 RTSP 流的摄像头，涵盖大多数 IP 和 PoE 摄像头。有线 PoE 摄像头提供最可靠的流。' } },
        { '@type': 'Question', name: 'Frigate 有订阅吗？', acceptedAnswer: { '@type': 'Answer', text: '没有。Frigate 是开源的，在你的硬件上运行，无订阅——为加速器和存储支付一次性费用，而非持续云端费用。' } },
        { '@type': 'Question', name: 'Frigate 是什么？', acceptedAnswer: { '@type': 'Answer', text: '免费的开源 NVR 软件，在 RTSP 流上本地执行 AI 人物与物体检测，并与 Home Assistant 集成。' } },
        { '@type': 'Question', name: 'Frigate 要花多少钱？', acceptedAnswer: { '@type': 'Answer', text: 'Frigate 免费；可选的 Frigate+ 每年 $50。真正的成本是硬件：主机、按需选配的检测器和存储。' } },
        { '@type': 'Question', name: '哪款摄像头最适合 Frigate？', acceptedAnswer: { '@type': 'Answer', text: '大华、海康威视或 Amcrest 的有线 PoE 摄像头，带 H.264 和检测子码流；大传感器胜过高分辨率；避免 Wi-Fi。' } },
      ],
    },
  },
}
