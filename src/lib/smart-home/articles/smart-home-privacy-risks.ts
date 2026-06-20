import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Smart Home Privacy Risks (2026): What Your Devices Know',
    seoTitle: 'Smart Home Privacy Risks 2026: What Your Devices Collect',
    intro:
      'Cloud smart home devices collect usage patterns, voice recordings, and camera feeds on company servers — and the fix is local control. This guide covers the real privacy risks, what cloud ecosystems collect, why breaches and data sharing matter, and how a local-first setup with local AI removes the third-party processor entirely.',
    metaDescription:
      'Smart home privacy risks: cloud data collection, always-listening mics, camera feeds, breaches, and third-party sharing — and how local control fixes them.',
    twitterDescription:
      'What your smart home devices know about you: cloud usage data, voice recordings, camera feeds. The fix is local control and local AI.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Privacy-conscious smart home owners',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'smart home privacy risks',
      'smart home data collection',
      'are smart speakers listening',
      'smart home security risks',
      'private smart home',
    ],
    leadAnswerBlock:
      '**Cloud smart home devices collect usage patterns, voice recordings, and camera feeds on company servers, where they are exposed to breaches and third-party sharing — and the fix is local control that keeps data in your home.** A local-first setup removes the third-party processor entirely.',
    quickAnswerTop: {
      en: {
        question: 'What are the privacy risks of a smart home?',
        answer:
          'Cloud-connected smart home devices send usage data, voice recordings, and camera footage to company servers, where it can be retained, shared with third parties, or exposed in a breach. Always-listening assistants and cloud cameras are the highest-risk devices. Moving to local control keeps that data on your own hardware.',
        bullets: [
          'Cloud usage data reveals routines and presence',
          'Voice assistants process recordings in the cloud',
          'Cloud cameras store footage on vendor servers',
          'Breaches and third-party sharing expose the data',
          'Local control removes the third-party processor',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Real Risks', anchor: 'real-risks' },
      { label: 'What Each Ecosystem Collects', anchor: 'what-collected' },
      { label: 'Breaches and Exposure', anchor: 'breaches' },
      { label: 'The Fix: Local-First', anchor: 'the-fix' },
      { label: 'Your Action Checklist', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Cloud smart home devices collect usage data, voice recordings, and camera feeds on company servers; local control keeps that data in your home.' },
      { type: 'plain-terms', content: 'Smart home devices that rely on the cloud send information about your home to company servers — when you come and go, what you say to a speaker, and what your cameras see. That data can be retained, shared, or leaked. Running everything locally means none of it leaves your house.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Cloud usage data reveals your routines, presence, and habits',
          'Voice assistants send recordings to the cloud for processing',
          'Cloud cameras store footage on vendor servers, often behind a subscription',
          'Stored data is exposed to breaches and third-party sharing',
          'Local control keeps data on your hardware and removes the third-party processor',
          'Local AI (voice and LLM) lets you keep smart features without the cloud',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'The Real Privacy Risks',
        content:
          '**The real risks are cloud data collection, always-listening assistants, camera feeds, breaches, and third-party sharing.** Each stems from data leaving your home and living on someone else\'s servers.',
        items: [
          '**Usage data:** device logs reveal when you wake, leave, and return.',
          '**Always-listening assistants:** voice queries are processed and may be retained in the cloud.',
          '**Camera feeds:** cloud cameras upload footage to vendor servers.',
          '**Breaches and sharing:** stored data can be exposed or shared with third parties.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'What Each Ecosystem Collects',
        content:
          '**Cloud-first ecosystems collect more than local ones: usage, voice, and sometimes video; local setups collect none of it off-device.** Privacy posture tracks how much runs in the cloud.',
        items: [
          'Cloud-first ecosystems (Alexa, Google Home) process voice and store usage data on their servers.',
          'Apple Home is more privacy-leaning but still cloud-connected for some features.',
          'Home Assistant keeps data local by default — see [smart home ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Breaches and Exposure',
        content:
          '**Any data stored on company servers is exposed to breaches, policy changes, and third-party sharing you cannot control.** The only data that cannot leak from a vendor is data the vendor never receives.',
        items: [
          'Centralised footage and recordings are attractive breach targets.',
          'Privacy policies can change, expanding how your data is used.',
          'Local processing avoids the issue entirely by never sending the data.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'The Fix: Local-First and Local AI',
        content:
          '**The fix is local control: run the hub, voice, and AI on your own hardware so no data leaves the house.** You keep smart features without the third-party processor.',
        items: [
          'Move to a local hub and local devices — see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
          'Replace cloud voice with a local assistant — see [connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration).',
          'For the EU/GDPR angle, see [building a GDPR-friendly private smart home](/smart-home/private-smart-home-gdpr).',
          'For private local AI generally, see [what local LLMs are](/local-llms/what-are-local-llms) (cross-cluster).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Your Privacy Action Checklist',
        content:
          '**Reduce risk by replacing the highest-exposure cloud devices with local ones, starting with cameras and voice.** Each swap removes a stream of data leaving your home.',
        columns: ['Risk', 'Cloud setup', 'Local setup'],
        rows: [
          { 'Risk': 'Voice', 'Cloud setup': 'Recordings processed in cloud', 'Local setup': 'Local Whisper + Piper, on-device' },
          { 'Risk': 'Cameras', 'Cloud setup': 'Footage on vendor servers', 'Local setup': 'Frigate, footage stays home' },
          { 'Risk': 'Usage data', 'Cloud setup': 'Logged by vendor', 'Local setup': 'Stays on your hub' },
          { 'Risk': 'Automations', 'Cloud setup': 'Run in cloud', 'Local setup': 'Run on local hub' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Do smart speakers always listen?', a: 'Cloud voice assistants listen for a wake word locally, then send the following audio to the cloud for processing. That means your spoken queries are transmitted and may be retained. A local voice assistant processes everything on your hardware instead.' },
          { q: 'Where do my camera feeds go?', a: 'Cloud cameras upload footage to the vendor\'s servers, where it is stored and often gated behind a subscription. A local setup with Frigate keeps footage on your own hardware, so it never leaves the house.' },
          { q: 'Can I stop the data collection?', a: 'For cloud devices, you can limit but rarely eliminate collection through settings. The reliable fix is to switch to local-capable devices and a local hub, so the data is never sent to a vendor in the first place.' },
          { q: 'Is a local smart home actually private?', a: 'Yes. With a local hub, local voice, and local AI, device data, recordings, and automations stay on your hardware with no third-party processor. This is what makes a local-first setup private by design.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the fix in full',
          '[Building a GDPR-Friendly Private Smart Home](/smart-home/private-smart-home-gdpr) — the EU privacy angle',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — private local AI control',
          '[What Local LLMs Are](/local-llms/what-are-local-llms) — cross-cluster: private local AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart Home Privacy Risks (2026): What Your Devices Know',
      description: 'Smart home privacy risks: cloud data collection, always-listening mics, camera feeds, breaches, and third-party sharing — and how local control fixes them.',
      url: 'https://www.promptquorum.com/smart-home/smart-home-privacy-risks',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home privacy' }, { '@type': 'Thing', name: 'Data collection' }, { '@type': 'Thing', name: 'Local control' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Do smart speakers always listen?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud voice assistants listen for a wake word locally, then send the following audio to the cloud for processing, so queries are transmitted and may be retained. A local voice assistant processes everything on your hardware.' } },
        { '@type': 'Question', name: 'Where do my camera feeds go?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud cameras upload footage to the vendor\'s servers, often behind a subscription. A local setup with Frigate keeps footage on your own hardware.' } },
        { '@type': 'Question', name: 'Can I stop the data collection?', acceptedAnswer: { '@type': 'Answer', text: 'For cloud devices you can limit but rarely eliminate collection. The reliable fix is switching to local-capable devices and a local hub so data is never sent to a vendor.' } },
        { '@type': 'Question', name: 'Is a local smart home actually private?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. With a local hub, local voice, and local AI, device data, recordings, and automations stay on your hardware with no third-party processor.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'مخاطر الخصوصية في المنزل الذكي (2026): ما تعرفه أجهزتك عنك',
    seoTitle: 'مخاطر الخصوصية في المنزل الذكي 2026: ما تجمعه أجهزتك',
    intro:
      'تجمع أجهزة المنزل الذكي السحابية أنماط الاستخدام والتسجيلات الصوتية وبث الكاميرا على خوادم الشركات — والحل هو التحكم المحلي. يغطي هذا الدليل مخاطر الخصوصية الحقيقية، وما تجمعه المنظومات السحابية، ولماذا تهم الاختراقات والمشاركة، وكيف يزيل إعداد محلي أولًا مع الذكاء الاصطناعي المحلي المعالج الخارجي بالكامل.',
    metaDescription:
      'أجهزة المنزل الذكي ترسل الصوت والكاميرا والبيانات إلى السحابة حيث تتعرض للاختراق والمشاركة. 3 مخاطر رئيسية وكيف يحلها التحكم المحلي.',
    twitterDescription:
      'ما تعرفه أجهزة منزلك الذكي عنك: بيانات الاستخدام السحابية والتسجيلات الصوتية وبث الكاميرا. الحل هو التحكم المحلي والذكاء الاصطناعي المحلي.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'أصحاب المنازل الذكية المهتمون بالخصوصية',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'مخاطر الخصوصية في المنزل الذكي',
      'جمع البيانات في المنزل الذكي',
      'هل السماعات الذكية تستمع دائمًا',
      'مخاطر أمن المنزل الذكي',
      'منزل ذكي خاص',
    ],
    leadAnswerBlock:
      '**تجمع أجهزة المنزل الذكي السحابية أنماط الاستخدام والتسجيلات الصوتية وبث الكاميرا على خوادم الشركات، حيث تتعرض للاختراقات والمشاركة مع الأطراف الثالثة — والحل هو التحكم المحلي الذي يُبقي البيانات في منزلك.** يزيل الإعداد المحلي أولًا المعالج الخارجي بالكامل.',
    quickAnswerTop: {
      ar: {
        question: 'ما مخاطر الخصوصية في المنزل الذكي؟',
        answer:
          'ترسل أجهزة المنزل الذكي المتصلة بالسحابة بيانات الاستخدام والتسجيلات الصوتية ولقطات الكاميرا إلى خوادم الشركات، حيث يمكن الاحتفاظ بها أو مشاركتها مع أطراف ثالثة أو الكشف عنها في اختراق. المساعدون الدائمو الاستماع والكاميرات السحابية هي الأجهزة الأعلى خطورة. الانتقال إلى التحكم المحلي يُبقي تلك البيانات على أجهزتك الخاصة.',
        bullets: [
          'بيانات الاستخدام السحابية تكشف الروتين اليومي والتواجد',
          'تعالج المساعدات الصوتية التسجيلات في السحابة',
          'تخزّن الكاميرات السحابية اللقطات على خوادم الموردين',
          'تكشف الاختراقات والمشاركة البيانات',
          'يزيل التحكم المحلي المعالج الخارجي',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'المخاطر الحقيقية', anchor: 'real-risks' },
      { label: 'ما تجمعه كل منظومة', anchor: 'what-collected' },
      { label: 'الاختراقات والتعرض للخطر', anchor: 'breaches' },
      { label: 'الحل: المحلي أولًا', anchor: 'the-fix' },
      { label: 'قائمة تحقق الإجراءات', anchor: 'checklist' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'تجمع أجهزة المنزل الذكي السحابية بيانات الاستخدام والتسجيلات الصوتية وبث الكاميرا على خوادم الشركات؛ التحكم المحلي يُبقي تلك البيانات في منزلك.' },
      { type: 'plain-terms', content: 'ترسل أجهزة المنزل الذكي التي تعتمد على السحابة معلومات عن منزلك إلى خوادم الشركات — متى تأتي وتذهب، وما تقوله لمكبر الصوت، وما تراه كاميراتك. يمكن الاحتفاظ بتلك البيانات أو مشاركتها أو تسريبها. تشغيل كل شيء محليًا يعني أن لا شيء منها يغادر منزلك.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'بيانات الاستخدام السحابية تكشف روتينك اليومي وتواجدك وعاداتك',
          'ترسل المساعدات الصوتية التسجيلات إلى السحابة للمعالجة',
          'تخزّن الكاميرات السحابية اللقطات على خوادم الموردين، غالبًا خلف اشتراك مدفوع',
          'البيانات المخزّنة معرّضة للاختراقات والمشاركة مع الأطراف الثالثة',
          'يُبقي التحكم المحلي البيانات على أجهزتك ويزيل المعالج الخارجي',
          'يتيح لك الذكاء الاصطناعي المحلي (الصوت ونموذج اللغة) الاحتفاظ بالميزات الذكية دون السحابة',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'المخاطر الحقيقية للخصوصية',
        content:
          '**المخاطر الحقيقية هي جمع البيانات السحابية والمساعدون الدائمو الاستماع وبث الكاميرا والاختراقات والمشاركة مع الأطراف الثالثة.** كلٌّ منها ينبثق من مغادرة البيانات لمنزلك والإقامة على خوادم الآخرين.',
        items: [
          '**بيانات الاستخدام:** سجلات الجهاز تكشف متى تستيقظ وتغادر وتعود.',
          '**المساعدون الدائمو الاستماع:** تُعالَج استعلامات الصوت وقد تُحتفَظ بها في السحابة.',
          '**بث الكاميرا:** الكاميرات السحابية ترفع اللقطات إلى خوادم الموردين.',
          '**الاختراقات والمشاركة:** البيانات المخزّنة قابلة للكشف أو المشاركة مع أطراف ثالثة.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'ما تجمعه كل منظومة',
        content:
          '**المنظومات السحابية أولًا تجمع أكثر من المحلية: الاستخدام والصوت وأحيانًا الفيديو؛ الإعدادات المحلية لا تجمع أيًّا منها خارج الجهاز.** يرتبط مستوى الخصوصية بما ينفَّذ في السحابة.',
        items: [
          'المنظومات السحابية أولًا (Alexa وGoogle Home) تعالج الصوت وتخزّن بيانات الاستخدام على خوادمها.',
          'Apple Home أكثر اهتمامًا بالخصوصية لكنه لا يزال سحابيًا لبعض الميزات.',
          'يُبقي Home Assistant البيانات محلية بشكل افتراضي — راجع [مقارنة منظومات المنزل الذكي](/ar/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'الاختراقات والتعرض للخطر',
        content:
          '**أي بيانات مخزّنة على خوادم الشركات معرّضة للاختراقات وتغييرات السياسات والمشاركة مع الأطراف الثالثة التي لا تملك السيطرة عليها.** البيانات الوحيدة التي لا يمكن تسريبها من المورد هي البيانات التي لم يتلقَّها أصلًا.',
        items: [
          'اللقطات والتسجيلات المركزية أهداف جذابة للاختراق.',
          'يمكن تغيير سياسات الخصوصية لتوسيع كيفية استخدام بياناتك.',
          'تتجنب المعالجة المحلية المشكلة تمامًا بعدم إرسال البيانات أصلًا.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'الحل: المحلي أولًا والذكاء الاصطناعي المحلي',
        content:
          '**الحل هو التحكم المحلي: شغّل المركز والصوت والذكاء الاصطناعي على أجهزتك الخاصة حتى لا تغادر البيانات المنزل.** تحتفظ بالميزات الذكية دون المعالج الخارجي.',
        items: [
          'انتقل إلى مركز محلي وأجهزة محلية — راجع [الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide).',
          'استبدل الصوت السحابي بمساعد محلي — راجع [ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration).',
          'للجانب الأوروبي/GDPR، راجع [بناء منزل ذكي خاص متوافق مع GDPR](/ar/smart-home/private-smart-home-gdpr).',
          'للذكاء الاصطناعي المحلي الخاص بشكل عام، راجع [ما هي نماذج اللغة المحلية](/ar/local-llms/what-are-local-llms) (عبر المجموعات).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'قائمة تحقق إجراءات الخصوصية',
        content:
          '**قلّل المخاطر باستبدال أجهزة السحابة الأعلى تعرضًا بأجهزة محلية، بدءًا بالكاميرات والصوت.** كل استبدال يزيل تدفق بيانات يغادر منزلك.',
        columns: ['الخطر', 'الإعداد السحابي', 'الإعداد المحلي'],
        rows: [
          { 'الخطر': 'الصوت', 'الإعداد السحابي': 'التسجيلات مُعالَجة في السحابة', 'الإعداد المحلي': 'Whisper + Piper محليًا، على الجهاز' },
          { 'الخطر': 'الكاميرات', 'الإعداد السحابي': 'اللقطات على خوادم الموردين', 'الإعداد المحلي': 'Frigate، اللقطات تبقى في المنزل' },
          { 'الخطر': 'بيانات الاستخدام', 'الإعداد السحابي': 'مسجّلة بواسطة المورد', 'الإعداد المحلي': 'تبقى على مركزك' },
          { 'الخطر': 'الأتمتات', 'الإعداد السحابي': 'تعمل في السحابة', 'الإعداد المحلي': 'تعمل على المركز المحلي' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل السماعات الذكية تستمع دائمًا؟', a: 'تستمع المساعدات الصوتية السحابية محليًا لكلمة التنشيط، ثم ترسل الصوت التالي إلى السحابة للمعالجة. هذا يعني أن استعلاماتك الصوتية تُنقَل وقد يُحتفَظ بها. المساعد الصوتي المحلي يعالج كل شيء على أجهزتك عوضًا عن ذلك.' },
          { q: 'أين تذهب بث كاميراتي؟', a: 'ترفع الكاميرات السحابية اللقطات إلى خوادم المورد، حيث تُخزَّن وغالبًا ما تكون خلف اشتراك مدفوع. الإعداد المحلي مع Frigate يُبقي اللقطات على أجهزتك الخاصة، فلا تغادر المنزل قط.' },
          { q: 'هل يمكنني وقف جمع البيانات؟', a: 'للأجهزة السحابية، يمكنك تقييد الجمع لكن نادرًا ما تستطيع إيقافه تمامًا عبر الإعدادات. الحل الموثوق هو التحول إلى أجهزة ذات قدرة محلية ومركز محلي، حتى لا تُرسَل البيانات إلى المورد أصلًا.' },
          { q: 'هل المنزل الذكي المحلي خاص فعلًا؟', a: 'نعم. مع مركز محلي وصوت محلي وذكاء اصطناعي محلي، تبقى بيانات الأجهزة والتسجيلات والأتمتات على أجهزتك دون أي معالج خارجي. هذا ما يجعل الإعداد المحلي أولًا خاصًا بحكم التصميم.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[الدليل الكامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — الحل الكامل',
          '[بناء منزل ذكي خاص متوافق مع GDPR](/ar/smart-home/private-smart-home-gdpr) — الجانب الأوروبي للخصوصية',
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — التحكم بالذكاء الاصطناعي المحلي الخاص',
          '[ما هي نماذج اللغة المحلية](/ar/local-llms/what-are-local-llms) — عبر المجموعات: ذكاء اصطناعي محلي خاص',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'مخاطر الخصوصية في المنزل الذكي (2026): ما تعرفه أجهزتك عنك',
      description: 'مخاطر الخصوصية في المنزل الذكي: جمع البيانات السحابية والميكروفونات الدائمة الاستماع وبث الكاميرا والاختراقات والمشاركة مع الأطراف الثالثة — وكيف يحل التحكم المحلي هذه المشكلة.',
      url: 'https://www.promptquorum.com/ar/smart-home/smart-home-privacy-risks',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'خصوصية المنزل الذكي' }, { '@type': 'Thing', name: 'جمع البيانات' }, { '@type': 'Thing', name: 'التحكم المحلي' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل السماعات الذكية تستمع دائمًا؟', acceptedAnswer: { '@type': 'Answer', text: 'تستمع السحابية محليًا لكلمة التنشيط، ثم ترسل الصوت للسحابة للمعالجة، فتُنقَل الاستعلامات وقد يُحتفَظ بها. المحلي يعالج كل شيء على أجهزتك.' } },
        { '@type': 'Question', name: 'أين تذهب بث كاميراتي؟', acceptedAnswer: { '@type': 'Answer', text: 'ترفع الكاميرات السحابية اللقطات إلى خوادم المورد، غالبًا خلف اشتراك. Frigate المحلي يُبقيها على أجهزتك.' } },
        { '@type': 'Question', name: 'هل يمكنني وقف جمع البيانات؟', acceptedAnswer: { '@type': 'Answer', text: 'للأجهزة السحابية يمكنك التقييد لكن نادرًا الإيقاف التام. الحل الموثوق هو التحول إلى أجهزة محلية ومركز محلي.' } },
        { '@type': 'Question', name: 'هل المنزل الذكي المحلي خاص فعلًا؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. مع مركز محلي وصوت وذكاء اصطناعي محليين، تبقى البيانات والتسجيلات والأتمتات على أجهزتك دون معالج خارجي.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Smart-Home-Datenschutzrisiken (2026): Was Ihre Geräte wissen',
    seoTitle: 'Smart-Home-Datenschutzrisiken 2026: Was Geräte wissen',
    intro:
      'Cloud-Smart-Home-Geräte sammeln Nutzungsmuster, Sprachaufnahmen und Kamerafeeds auf Firmen-Servern – und die Lösung ist lokale Steuerung. Dieser Leitfaden behandelt die realen Datenschutzrisiken, was Cloud-Ökosysteme sammeln, warum Datenlecks und Datenweitergabe zählen, und wie ein Local-First-Setup mit lokaler KI den externen Verarbeiter vollständig entfernt.',
    metaDescription:
      'Smart-Home-Datenschutzrisiken 2026: Cloud-Datensammlung, lauschende Mikrofone, Kamerafeeds und Drittanbieter-Sharing. Wie lokale Steuerung schützt.',
    twitterDescription:
      'Was Ihre Smart-Home-Geräte über Sie wissen: Cloud-Nutzungsdaten, Sprachaufnahmen, Kamerafeeds. Die Lösung ist lokale Steuerung und lokale KI.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Datenschutzbewusste Smart-Home-Besitzer',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'smart home datenschutzrisiken',
      'smart home datensammlung',
      'lauschen smart speaker',
      'smart home sicherheitsrisiken',
      'privates smart home',
    ],
    leadAnswerBlock:
      '**Cloud-Smart-Home-Geräte sammeln Nutzungsmuster, Sprachaufnahmen und Kamerafeeds auf Firmen-Servern, wo sie Datenlecks und Weitergabe an Dritte ausgesetzt sind – und die Lösung ist lokale Steuerung, die Daten in Ihrem Zuhause hält.** Ein Local-First-Setup entfernt den externen Verarbeiter vollständig.',
    quickAnswerTop: {
      de: {
        question: 'Was sind die Datenschutzrisiken eines Smart Homes?',
        answer:
          'Cloud-vernetzte Smart-Home-Geräte senden Nutzungsdaten, Sprachaufnahmen und Kameraaufnahmen an Firmen-Server, wo sie gespeichert, an Dritte weitergegeben oder bei einem Leck offengelegt werden können. Immer lauschende Assistenten und Cloud-Kameras sind die risikoreichsten Geräte. Der Wechsel zu lokaler Steuerung hält diese Daten auf Ihrer eigenen Hardware.',
        bullets: [
          'Cloud-Nutzungsdaten verraten Routinen und Anwesenheit',
          'Sprachassistenten verarbeiten Aufnahmen in der Cloud',
          'Cloud-Kameras speichern Aufnahmen auf Firmen-Servern',
          'Datenlecks und Weitergabe legen die Daten offen',
          'Lokale Steuerung entfernt den externen Verarbeiter',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Die realen Risiken', anchor: 'real-risks' },
      { label: 'Was jedes Ökosystem sammelt', anchor: 'what-collected' },
      { label: 'Datenlecks und Offenlegung', anchor: 'breaches' },
      { label: 'Die Lösung: Local-First', anchor: 'the-fix' },
      { label: 'Ihre Aktions-Checkliste', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Cloud-Smart-Home-Geräte sammeln Nutzungsdaten, Sprachaufnahmen und Kamerafeeds auf Firmen-Servern; lokale Steuerung hält diese Daten in Ihrem Zuhause.' },
      { type: 'plain-terms', content: 'Smart-Home-Geräte, die auf die Cloud setzen, senden Informationen über Ihr Zuhause an Firmen-Server – wann Sie kommen und gehen, was Sie zu einem Lautsprecher sagen und was Ihre Kameras sehen. Diese Daten können gespeichert, weitergegeben oder geleakt werden. Alles lokal zu betreiben bedeutet, dass nichts davon Ihr Haus verlässt.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Cloud-Nutzungsdaten verraten Ihre Routinen, Anwesenheit und Gewohnheiten',
          'Sprachassistenten senden Aufnahmen zur Verarbeitung in die Cloud',
          'Cloud-Kameras speichern Aufnahmen auf Firmen-Servern, oft hinter einem Abonnement',
          'Gespeicherte Daten sind Datenlecks und Weitergabe an Dritte ausgesetzt',
          'Lokale Steuerung hält Daten auf Ihrer Hardware und entfernt den externen Verarbeiter',
          'Lokale KI (Sprache und LLM) lässt Sie smarte Funktionen ohne die Cloud behalten',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'Die realen Datenschutzrisiken',
        content:
          '**Die realen Risiken sind Cloud-Datensammlung, immer lauschende Assistenten, Kamerafeeds, Datenlecks und Weitergabe an Dritte.** Jedes entsteht daraus, dass Daten Ihr Zuhause verlassen und auf fremden Servern liegen.',
        items: [
          '**Nutzungsdaten:** Geräteprotokolle verraten, wann Sie aufstehen, gehen und zurückkehren.',
          '**Immer lauschende Assistenten:** Sprachanfragen werden verarbeitet und können in der Cloud gespeichert werden.',
          '**Kamerafeeds:** Cloud-Kameras laden Aufnahmen auf Firmen-Server.',
          '**Datenlecks und Weitergabe:** gespeicherte Daten können offengelegt oder an Dritte weitergegeben werden.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'Was jedes Ökosystem sammelt',
        content:
          '**Cloud-zuerst-Ökosysteme sammeln mehr als lokale: Nutzung, Sprache und manchmal Video; lokale Setups sammeln nichts davon außerhalb des Geräts.** Die Datenschutzlage folgt dem Anteil, der in der Cloud läuft.',
        items: [
          'Cloud-zuerst-Ökosysteme (Alexa, Google Home) verarbeiten Sprache und speichern Nutzungsdaten auf ihren Servern.',
          'Apple Home ist datenschutzorientierter, aber für einige Funktionen weiterhin cloud-vernetzt.',
          'Home Assistant hält Daten standardmäßig lokal – siehe [Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Datenlecks und Offenlegung',
        content:
          '**Alle auf Firmen-Servern gespeicherten Daten sind Datenlecks, Richtlinienänderungen und einer Weitergabe an Dritte ausgesetzt, die Sie nicht kontrollieren können.** Die einzigen Daten, die nicht von einem Anbieter leaken können, sind die, die der Anbieter nie erhält.',
        items: [
          'Zentralisierte Aufnahmen sind attraktive Angriffsziele.',
          'Datenschutzrichtlinien können sich ändern und die Nutzung Ihrer Daten erweitern.',
          'Lokale Verarbeitung umgeht das Problem, indem die Daten nie gesendet werden.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'Die Lösung: Local-First und lokale KI',
        content:
          '**Die Lösung ist lokale Steuerung: Hub, Sprache und KI auf eigener Hardware betreiben, sodass keine Daten das Haus verlassen.** Sie behalten smarte Funktionen ohne den externen Verarbeiter. Für deutsche Haushalte, Heimbüros und den Mittelstand passt dieser Ansatz zur Datenminimierung der DSGVO und zu den BSI-Grundschutz-Katalogen, da keine Auftragsverarbeitung durch Dritte stattfindet.',
        items: [
          'Wechseln Sie zu einem lokalen Hub und lokalen Geräten – siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
          'Ersetzen Sie Cloud-Sprache durch einen lokalen Assistenten – siehe [Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration).',
          'Für den EU/DSGVO-Aspekt siehe [ein DSGVO-freundliches privates Smart Home bauen](/de/smart-home/private-smart-home-gdpr).',
          'Für private lokale KI allgemein siehe [was lokale LLMs sind](/de/local-llms/what-are-local-llms) (clusterübergreifend).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Ihre Datenschutz-Aktions-Checkliste',
        content:
          '**Verringern Sie das Risiko, indem Sie die exponiertesten Cloud-Geräte durch lokale ersetzen, beginnend mit Kameras und Sprache.** Jeder Tausch entfernt einen Datenstrom, der Ihr Zuhause verlässt.',
        columns: ['Risiko', 'Cloud-Setup', 'Lokales Setup'],
        rows: [
          { 'Risiko': 'Sprache', 'Cloud-Setup': 'Aufnahmen in der Cloud verarbeitet', 'Lokales Setup': 'Lokales Whisper + Piper, auf dem Gerät' },
          { 'Risiko': 'Kameras', 'Cloud-Setup': 'Aufnahmen auf Firmen-Servern', 'Lokales Setup': 'Frigate, Aufnahmen bleiben zu Hause' },
          { 'Risiko': 'Nutzungsdaten', 'Cloud-Setup': 'Vom Anbieter protokolliert', 'Lokales Setup': 'Bleiben auf Ihrem Hub' },
          { 'Risiko': 'Automatisierungen', 'Cloud-Setup': 'Laufen in der Cloud', 'Lokales Setup': 'Laufen auf dem lokalen Hub' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Lauschen smarte Lautsprecher ständig?', a: 'Cloud-Sprachassistenten warten lokal auf ein Aktivierungswort und senden dann das folgende Audio zur Verarbeitung in die Cloud. Das bedeutet, dass Ihre gesprochenen Anfragen übertragen und gespeichert werden können. Ein lokaler Sprachassistent verarbeitet stattdessen alles auf Ihrer Hardware.' },
          { q: 'Wohin gehen meine Kamerafeeds?', a: 'Cloud-Kameras laden Aufnahmen auf die Server des Anbieters, wo sie gespeichert und oft hinter einem Abonnement gehalten werden. Ein lokales Setup mit Frigate hält die Aufnahmen auf Ihrer eigenen Hardware, sodass sie das Haus nie verlassen.' },
          { q: 'Kann ich die Datensammlung stoppen?', a: 'Bei Cloud-Geräten können Sie die Sammlung über Einstellungen begrenzen, aber selten ganz beenden. Die zuverlässige Lösung ist der Wechsel zu lokal-fähigen Geräten und einem lokalen Hub, sodass die Daten gar nicht erst an einen Anbieter gesendet werden.' },
          { q: 'Ist ein lokales Smart Home tatsächlich privat?', a: 'Ja. Mit einem lokalen Hub, lokaler Sprache und lokaler KI bleiben Gerätedaten, Aufnahmen und Automatisierungen ohne externen Verarbeiter auf Ihrer Hardware. Das macht ein Local-First-Setup datenschutzfreundlich von Grund auf.' },
          { q: 'Muss ich bei einem Smart Home die DSGVO beachten?', a: 'Smart-Home-Daten wie Anwesenheit, Sprache und Video sind personenbezogene Daten im Sinne der DSGVO. Cloud-Geräte, die diese an Anbieter senden, führen einen Auftragsverarbeiter ein (DSGVO Art. 28). Lokale Verarbeitung hält die Daten in Ihrem Zuhause und unterstützt Datenminimierung und Datenresidenz von Grund auf, da kein externer Verarbeiter beteiligt ist.' },
          { q: 'Gilt das auch für Heimbüros und den deutschen Mittelstand?', a: 'Ja. Für Heimbüros und KMU im DACH-Raum hält ein lokales Smart Home Gerätedaten und Aufnahmen vor Ort, was sich an den BSI-Grundschutz-Katalogen und an branchenüblichen IT-Sicherheitsstandards orientiert. Da keine Auftragsverarbeitung durch Dritte stattfindet, vereinfacht sich die interne Compliance-Dokumentation.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – die Lösung im Detail',
          '[Ein DSGVO-freundliches privates Smart Home bauen](/de/smart-home/private-smart-home-gdpr) – der EU-Datenschutz-Aspekt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – private lokale KI-Steuerung',
          '[Was lokale LLMs sind](/de/local-llms/what-are-local-llms) – clusterübergreifend: private lokale KI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Smart-Home-Datenschutzrisiken (2026): Was Ihre Geräte wissen',
      description: 'Smart-Home-Datenschutzrisiken 2026: Cloud-Datensammlung, lauschende Mikrofone, Kamerafeeds und Drittanbieter-Sharing. Wie lokale Steuerung schützt.',
      url: 'https://www.promptquorum.com/de/smart-home/smart-home-privacy-risks',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart-Home-Datenschutz' }, { '@type': 'Thing', name: 'Datensammlung' }, { '@type': 'Thing', name: 'DSGVO' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Lauschen smarte Lautsprecher ständig?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud-Sprachassistenten warten lokal auf ein Aktivierungswort und senden dann das folgende Audio zur Verarbeitung in die Cloud, sodass Anfragen übertragen und gespeichert werden können. Ein lokaler Assistent verarbeitet alles auf Ihrer Hardware.' } },
        { '@type': 'Question', name: 'Wohin gehen meine Kamerafeeds?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud-Kameras laden Aufnahmen auf die Server des Anbieters, oft hinter einem Abonnement. Ein lokales Setup mit Frigate hält die Aufnahmen auf Ihrer eigenen Hardware.' } },
        { '@type': 'Question', name: 'Kann ich die Datensammlung stoppen?', acceptedAnswer: { '@type': 'Answer', text: 'Bei Cloud-Geräten können Sie sie begrenzen, aber selten ganz beenden. Die zuverlässige Lösung ist der Wechsel zu lokal-fähigen Geräten und einem lokalen Hub.' } },
        { '@type': 'Question', name: 'Ist ein lokales Smart Home tatsächlich privat?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Mit lokalem Hub, lokaler Sprache und lokaler KI bleiben Gerätedaten, Aufnahmen und Automatisierungen ohne externen Verarbeiter auf Ihrer Hardware.' } },
        { '@type': 'Question', name: 'Muss ich bei einem Smart Home die DSGVO beachten?', acceptedAnswer: { '@type': 'Answer', text: 'Smart-Home-Daten sind personenbezogene Daten. Cloud-Geräte, die sie an Anbieter senden, führen einen Auftragsverarbeiter ein (DSGVO Art. 28). Lokale Verarbeitung unterstützt Datenminimierung und Datenresidenz von Grund auf.' } },
        { '@type': 'Question', name: 'Gilt das auch für Heimbüros und den deutschen Mittelstand?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Für Heimbüros und KMU im DACH-Raum hält ein lokales Smart Home Daten vor Ort, orientiert an den BSI-Grundschutz-Katalogen, und vereinfacht die Compliance, da keine Auftragsverarbeitung durch Dritte stattfindet.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Riesgos de Privacidad del Smart Home (2026): Qué Saben Tus Dispositivos',
    seoTitle: 'Riesgos de Privacidad del Smart Home 2026: Guía Completa',
    intro:
      'Los dispositivos de smart home en la nube recopilan patrones de uso, grabaciones de voz y vídeo de cámaras en servidores de las empresas, y la solución es el control local. Esta guía cubre los riesgos reales de privacidad, qué recopilan los ecosistemas en la nube, por qué importan las brechas y el intercambio de datos, y cómo una configuración local-first con IA local elimina por completo al procesador externo.',
    metaDescription:
      'Riesgos de privacidad del smart home 2026: nube, micrófonos activos, cámaras, brechas y datos compartidos. Cómo el control local lo resuelve.',
    twitterDescription:
      'Lo que tus dispositivos de smart home saben de ti: datos de uso en la nube, grabaciones de voz, vídeo de cámaras. La solución es el control local y la IA local.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Propietarios de smart home preocupados por la privacidad',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'riesgos privacidad smart home',
      'recopilación datos smart home',
      'altavoces inteligentes escuchando',
      'riesgos seguridad smart home',
      'smart home privado',
    ],
    leadAnswerBlock:
      '**Los dispositivos de smart home en la nube recopilan patrones de uso, grabaciones de voz y vídeo de cámaras en servidores de las empresas, donde quedan expuestos a brechas y a la compartición con terceros — y la solución es el control local que mantiene los datos en tu casa.** Una configuración local-first elimina por completo al procesador externo.',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son los riesgos de privacidad de un smart home?',
        answer:
          'Los dispositivos de smart home conectados a la nube envían datos de uso, grabaciones de voz y vídeo de cámaras a servidores de las empresas, donde pueden conservarse, compartirse con terceros o exponerse en una brecha. Los asistentes siempre escuchando y las cámaras en la nube son los dispositivos de mayor riesgo. Pasar al control local mantiene esos datos en tu propio hardware.',
        bullets: [
          'Los datos de uso en la nube revelan rutinas y presencia',
          'Los asistentes de voz procesan grabaciones en la nube',
          'Las cámaras en la nube almacenan vídeo en servidores del fabricante',
          'Las brechas y la compartición exponen los datos',
          'El control local elimina al procesador externo',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Los riesgos reales', anchor: 'real-risks' },
      { label: 'Qué recopila cada ecosistema', anchor: 'what-collected' },
      { label: 'Brechas y exposición', anchor: 'breaches' },
      { label: 'La solución: local-first', anchor: 'the-fix' },
      { label: 'Tu lista de acciones', anchor: 'checklist' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Los dispositivos de smart home en la nube recopilan datos de uso, grabaciones de voz y vídeo de cámaras en servidores de las empresas; el control local mantiene esos datos en tu casa.' },
      { type: 'plain-terms', content: 'Los dispositivos de smart home que dependen de la nube envían información sobre tu casa a servidores de las empresas: cuándo entras y sales, qué le dices a un altavoz y qué ven tus cámaras. Esos datos pueden conservarse, compartirse o filtrarse. Ejecutar todo localmente significa que nada de eso sale de tu casa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Los datos de uso en la nube revelan tus rutinas, presencia y hábitos',
          'Los asistentes de voz envían grabaciones a la nube para procesarlas',
          'Las cámaras en la nube almacenan vídeo en servidores del fabricante, a menudo tras una suscripción',
          'Los datos almacenados están expuestos a brechas y a la compartición con terceros',
          'El control local mantiene los datos en tu hardware y elimina al procesador externo',
          'La IA local (voz y LLM) te deja conservar las funciones inteligentes sin la nube',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'Los riesgos reales de privacidad',
        content:
          '**Los riesgos reales son la recopilación de datos en la nube, los asistentes siempre escuchando, el vídeo de cámaras, las brechas y la compartición con terceros.** Cada uno surge de que los datos salen de tu casa y quedan en servidores ajenos.',
        items: [
          '**Datos de uso:** los registros de dispositivos revelan cuándo te despiertas, sales y vuelves.',
          '**Asistentes siempre escuchando:** las consultas de voz se procesan y pueden conservarse en la nube.',
          '**Vídeo de cámaras:** las cámaras en la nube suben grabaciones a servidores del fabricante.',
          '**Brechas y compartición:** los datos almacenados pueden exponerse o compartirse con terceros.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'Qué recopila cada ecosistema',
        content:
          '**Los ecosistemas nube-primero recopilan más que los locales: uso, voz y a veces vídeo; las configuraciones locales no recopilan nada de eso fuera del dispositivo.** La postura de privacidad sigue cuánto corre en la nube.',
        items: [
          'Los ecosistemas nube-primero (Alexa, Google Home) procesan voz y almacenan datos de uso en sus servidores.',
          'Apple Home está más orientado a la privacidad, pero sigue conectado a la nube para algunas funciones.',
          'Home Assistant mantiene los datos en local por defecto — consulta [ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Brechas y exposición',
        content:
          '**Cualquier dato almacenado en servidores de las empresas está expuesto a brechas, cambios de políticas y compartición con terceros que no puedes controlar.** Los únicos datos que no pueden filtrarse de un proveedor son los que el proveedor nunca recibe.',
        items: [
          'Las grabaciones centralizadas son objetivos atractivos de brechas.',
          'Las políticas de privacidad pueden cambiar y ampliar cómo se usan tus datos.',
          'El procesamiento local evita el problema al no enviar nunca los datos.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'La solución: local-first e IA local',
        content:
          '**La solución es el control local: ejecutar el hub, la voz y la IA en tu propio hardware para que ningún dato salga de la casa.** Conservas las funciones inteligentes sin el procesador externo. En España y la UE esto respalda el RGPD (la AEPD recomienda minimizar el tratamiento), y en Latinoamérica encaja con leyes como la LFPDPPP (México) o la Ley 1581 (Colombia), porque no interviene ningún procesador externo.',
        items: [
          'Pásate a un hub local y dispositivos locales — consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
          'Reemplaza la voz en la nube por un asistente local — consulta [conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration).',
          'Para el ángulo UE/RGPD, consulta [construir un smart home privado compatible con el RGPD](/es/smart-home/private-smart-home-gdpr).',
          'Para IA local privada en general, consulta [qué son los LLM locales](/es/local-llms/what-are-local-llms) (entre clústeres).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Tu lista de acciones de privacidad',
        content:
          '**Reduce el riesgo reemplazando los dispositivos en la nube de mayor exposición por locales, empezando por cámaras y voz.** Cada cambio elimina un flujo de datos que sale de tu casa.',
        columns: ['Riesgo', 'Configuración en la nube', 'Configuración local'],
        rows: [
          { 'Riesgo': 'Voz', 'Configuración en la nube': 'Grabaciones procesadas en la nube', 'Configuración local': 'Whisper + Piper local, en el dispositivo' },
          { 'Riesgo': 'Cámaras', 'Configuración en la nube': 'Vídeo en servidores del fabricante', 'Configuración local': 'Frigate, el vídeo se queda en casa' },
          { 'Riesgo': 'Datos de uso', 'Configuración en la nube': 'Registrados por el fabricante', 'Configuración local': 'Se quedan en tu hub' },
          { 'Riesgo': 'Automatizaciones', 'Configuración en la nube': 'Corren en la nube', 'Configuración local': 'Corren en el hub local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Los altavoces inteligentes escuchan siempre?', a: 'Los asistentes de voz en la nube escuchan localmente una palabra de activación y luego envían el audio siguiente a la nube para procesarlo. Eso significa que tus consultas habladas se transmiten y pueden conservarse. Un asistente de voz local procesa todo en tu hardware en su lugar.' },
          { q: '¿A dónde va el vídeo de mis cámaras?', a: 'Las cámaras en la nube suben el vídeo a los servidores del fabricante, donde se almacena y a menudo se gestiona tras una suscripción. Una configuración local con Frigate mantiene el vídeo en tu propio hardware, así que nunca sale de casa.' },
          { q: '¿Puedo detener la recopilación de datos?', a: 'En los dispositivos en la nube puedes limitarla pero rara vez eliminarla mediante ajustes. La solución fiable es cambiar a dispositivos con capacidad local y un hub local, para que los datos nunca se envíen a un proveedor en primer lugar.' },
          { q: '¿Es un smart home local realmente privado?', a: 'Sí. Con un hub local, voz local e IA local, los datos de dispositivos, las grabaciones y las automatizaciones se quedan en tu hardware sin procesador externo. Esto es lo que hace que una configuración local-first sea privada por diseño.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — la solución completa',
          '[Construir un smart home privado compatible con el RGPD](/es/smart-home/private-smart-home-gdpr) — el ángulo de privacidad de la UE',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — control con IA local privado',
          '[Qué son los LLM locales](/es/local-llms/what-are-local-llms) — entre clústeres: IA local privada',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Riesgos de Privacidad del Smart Home (2026): Qué Saben Tus Dispositivos',
      description: 'Riesgos de privacidad del smart home 2026: nube, micrófonos activos, cámaras, brechas y datos compartidos. Cómo el control local lo resuelve.',
      url: 'https://www.promptquorum.com/es/smart-home/smart-home-privacy-risks',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Privacidad del smart home' }, { '@type': 'Thing', name: 'Recopilación de datos' }, { '@type': 'Thing', name: 'Control local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Los altavoces inteligentes escuchan siempre?', acceptedAnswer: { '@type': 'Answer', text: 'Los asistentes de voz en la nube escuchan localmente una palabra de activación y luego envían el audio siguiente a la nube, así que tus consultas se transmiten y pueden conservarse. Un asistente local procesa todo en tu hardware.' } },
        { '@type': 'Question', name: '¿A dónde va el vídeo de mis cámaras?', acceptedAnswer: { '@type': 'Answer', text: 'Las cámaras en la nube suben el vídeo a los servidores del fabricante, a menudo tras una suscripción. Una configuración local con Frigate mantiene el vídeo en tu propio hardware.' } },
        { '@type': 'Question', name: '¿Puedo detener la recopilación de datos?', acceptedAnswer: { '@type': 'Answer', text: 'En los dispositivos en la nube puedes limitarla pero rara vez eliminarla. La solución fiable es cambiar a dispositivos con capacidad local y un hub local.' } },
        { '@type': 'Question', name: '¿Es un smart home local realmente privado?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Con un hub local, voz local e IA local, los datos de dispositivos, las grabaciones y las automatizaciones se quedan en tu hardware sin procesador externo.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: '스마트홈 개인정보 위험 (2026): 기기가 아는 것들',
    seoTitle: '스마트홈 개인정보 위험 2026: 기기 수집 항목',
    intro:
      '클라우드 스마트홈 기기는 이용 패턴, 음성 녹음, 카메라 영상을 기업 서버에 수집합니다. 해결책은 로컬 제어입니다. 이 가이드는 실제 개인정보 위험, 클라우드 생태계의 수집 항목, 침해와 데이터 공유가 중요한 이유, 그리고 로컬 AI를 포함한 로컬 우선 설정이 어떻게 제3자 처리자를 완전히 제거하는지 설명합니다.',
    metaDescription:
      '스마트홈 개인정보 위험: 클라우드 데이터 수집, 항상 듣는 마이크, 카메라 영상, 침해, 제3자 공유 — 로컬 제어로 해결하는 방법.',
    twitterDescription:
      '스마트홈 기기가 아는 것: 클라우드 이용 데이터, 음성 녹음, 카메라 영상. 해결책은 로컬 제어와 로컬 AI입니다.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: '개인정보를 중시하는 스마트홈 소유자',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      '스마트홈 개인정보 위험',
      '스마트홈 데이터 수집',
      '스마트 스피커 도청 여부',
      '스마트홈 보안 위험',
      '프라이빗 스마트홈',
    ],
    leadAnswerBlock:
      '**클라우드 스마트홈 기기는 이용 패턴, 음성 녹음, 카메라 영상을 기업 서버에 수집하며 침해와 제3자 공유에 노출됩니다. 해결책은 데이터를 집 안에 유지하는 로컬 제어입니다.** 로컬 우선 설정은 제3자 처리자를 완전히 제거합니다.',
    quickAnswerTop: {
      ko: {
        question: '스마트홈의 개인정보 위험은 무엇입니까?',
        answer:
          '클라우드 연결 스마트홈 기기는 이용 데이터, 음성 녹음, 카메라 영상을 기업 서버로 전송하며, 보관·제3자 공유·침해 노출 위험이 있습니다. 항상 듣는 어시스턴트와 클라우드 카메라가 가장 위험한 기기입니다. 로컬 제어로 전환하면 해당 데이터를 자신의 하드웨어에 유지할 수 있습니다.',
        bullets: [
          '클라우드 이용 데이터는 생활 패턴과 재실 여부를 노출합니다',
          '음성 어시스턴트는 녹음을 클라우드에서 처리합니다',
          '클라우드 카메라는 영상을 제조사 서버에 저장합니다',
          '침해와 공유로 데이터가 노출됩니다',
          '로컬 제어는 제3자 처리자를 제거합니다',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '실제 위험', anchor: 'real-risks' },
      { label: '각 생태계의 수집 항목', anchor: 'what-collected' },
      { label: '침해와 노출', anchor: 'breaches' },
      { label: '해결책: 로컬 우선', anchor: 'the-fix' },
      { label: '실행 체크리스트', anchor: 'checklist' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '클라우드 스마트홈 기기는 이용 데이터, 음성 녹음, 카메라 영상을 기업 서버에 수집합니다. 로컬 제어는 해당 데이터를 집 안에 유지합니다.' },
      { type: 'plain-terms', content: '클라우드에 의존하는 스마트홈 기기는 귀하의 집에 관한 정보를 기업 서버로 전송합니다. 언제 집에 오고 가는지, 스피커에 무슨 말을 하는지, 카메라가 무엇을 보는지가 포함됩니다. 그 데이터는 보관·공유·유출될 수 있습니다. 모든 것을 로컬에서 실행하면 아무것도 집 밖으로 나가지 않습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '클라우드 이용 데이터는 귀하의 일상 패턴과 재실 여부를 드러냅니다',
          '음성 어시스턴트는 처리를 위해 녹음을 클라우드로 전송합니다',
          '클라우드 카메라는 영상을 제조사 서버에 저장하며 구독 서비스 뒤에 있는 경우가 많습니다',
          '저장된 데이터는 침해와 제3자 공유에 노출됩니다',
          '로컬 제어는 데이터를 귀하의 하드웨어에 유지하고 제3자 처리자를 제거합니다',
          '로컬 AI(음성 및 LLM)를 통해 클라우드 없이 스마트 기능을 유지할 수 있습니다',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: '실제 개인정보 위험',
        content:
          '**실제 위험은 클라우드 데이터 수집, 항상 듣는 어시스턴트, 카메라 영상, 침해, 제3자 공유입니다.** 각각은 데이터가 집을 떠나 다른 사람의 서버에 저장되기 때문에 발생합니다.',
        items: [
          '**이용 데이터:** 기기 로그는 언제 기상하고 외출하고 귀가하는지 드러냅니다.',
          '**항상 듣는 어시스턴트:** 음성 질의는 처리되며 클라우드에 보관될 수 있습니다.',
          '**카메라 영상:** 클라우드 카메라는 영상을 제조사 서버에 업로드합니다.',
          '**침해와 공유:** 저장된 데이터는 노출되거나 제3자와 공유될 수 있습니다.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: '각 생태계의 수집 항목',
        content:
          '**클라우드 우선 생태계는 로컬보다 더 많이 수집합니다. 이용·음성·영상을 수집하며 로컬 설정은 기기 외부에서 아무것도 수집하지 않습니다.** 개인정보 수준은 클라우드에서 실행되는 비율에 따라 결정됩니다.',
        items: [
          '클라우드 우선 생태계(Alexa, Google Home)는 음성을 처리하고 이용 데이터를 서버에 저장합니다.',
          'Apple Home은 개인정보를 더 중시하지만 일부 기능에서는 여전히 클라우드에 연결됩니다.',
          'Home Assistant는 기본적으로 데이터를 로컬에 유지합니다 — [스마트홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared)를 참조하십시오.',
        ],
      },
      breaches: {
        id: 'breaches',
        title: '침해와 노출',
        content:
          '**기업 서버에 저장된 모든 데이터는 침해, 정책 변경, 통제할 수 없는 제3자 공유에 노출됩니다.** 제공업체로부터 유출될 수 없는 유일한 데이터는 제공업체가 받지 않은 데이터입니다.',
        items: [
          '중앙화된 영상과 녹음은 침해의 매력적인 표적입니다.',
          '개인정보 처리방침이 변경되어 데이터 사용 방식이 확장될 수 있습니다.',
          '로컬 처리는 데이터를 전송하지 않음으로써 문제를 완전히 방지합니다.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: '해결책: 로컬 우선과 로컬 AI',
        content:
          '**해결책은 로컬 제어입니다. 허브, 음성, AI를 자신의 하드웨어에서 실행하여 데이터가 집 밖으로 나가지 않도록 합니다.** 제3자 처리자 없이 스마트 기능을 유지할 수 있습니다. 한국 개인정보 보호법(PIPA)과 개인정보보호위원회(PIPC)는 개인정보 최소 처리를 권장하며, 제3자가 관여하지 않는 로컬 우선 설정은 이를 충족합니다.',
        items: [
          '로컬 허브와 로컬 기기로 전환하십시오 — [완전한 로컬 스마트홈 가이드](/ko/smart-home/local-smart-home-complete-guide)를 참조하십시오.',
          '클라우드 음성을 로컬 어시스턴트로 교체하십시오 — [Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration)를 참조하십시오.',
          'EU/GDPR 관점은 [GDPR 친화적 프라이빗 스마트홈 구축](/ko/smart-home/private-smart-home-gdpr)을 참조하십시오.',
          '프라이빗 로컬 AI 전반은 [로컬 LLM이란](/ko/local-llms/what-are-local-llms)을 참조하십시오(크로스 클러스터).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: '개인정보 실행 체크리스트',
        content:
          '**가장 노출도가 높은 클라우드 기기를 로컬 기기로 교체하여 위험을 줄이십시오. 카메라와 음성부터 시작하십시오.** 교체할 때마다 집 밖으로 나가는 데이터 흐름이 하나씩 제거됩니다.',
        columns: ['위험', '클라우드 설정', '로컬 설정'],
        rows: [
          { '위험': '음성', '클라우드 설정': '녹음이 클라우드에서 처리됨', '로컬 설정': '로컬 Whisper + Piper, 기기 내 처리' },
          { '위험': '카메라', '클라우드 설정': '영상이 제조사 서버에 저장됨', '로컬 설정': 'Frigate, 영상이 집 안에 유지됨' },
          { '위험': '이용 데이터', '클라우드 설정': '제조사가 기록함', '로컬 설정': '허브에만 저장됨' },
          { '위험': '자동화', '클라우드 설정': '클라우드에서 실행됨', '로컬 설정': '로컬 허브에서 실행됨' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '스마트 스피커는 항상 듣고 있습니까?', a: '클라우드 음성 어시스턴트는 로컬에서 웨이크 워드를 감지한 후 이후 오디오를 클라우드로 전송하여 처리합니다. 음성 질의가 전송되고 보관될 수 있습니다. 로컬 음성 어시스턴트는 모든 것을 귀하의 하드웨어에서 처리합니다.' },
          { q: '카메라 영상은 어디로 갑니까?', a: '클라우드 카메라는 영상을 제조사 서버에 업로드하며 구독 서비스 뒤에 있는 경우가 많습니다. Frigate를 이용한 로컬 설정은 영상을 귀하의 하드웨어에 유지하므로 집 밖으로 나가지 않습니다.' },
          { q: '데이터 수집을 중단할 수 있습니까?', a: '클라우드 기기의 경우 설정을 통해 수집을 제한할 수 있지만 완전히 중단하기는 어렵습니다. 신뢰할 수 있는 해결책은 로컬 가능 기기와 로컬 허브로 전환하여 데이터가 애초에 제조사에게 전송되지 않도록 하는 것입니다.' },
          { q: '로컬 스마트홈은 실제로 프라이빗합니까?', a: '그렇습니다. 로컬 허브, 로컬 음성, 로컬 AI를 사용하면 기기 데이터, 녹음, 자동화가 제3자 처리자 없이 귀하의 하드웨어에 유지됩니다. 이것이 로컬 우선 설정을 설계 단계부터 프라이빗하게 만드는 요소입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[완전한 로컬 스마트홈 가이드](/ko/smart-home/local-smart-home-complete-guide) — 전체 해결책',
          '[GDPR 친화적 프라이빗 스마트홈 구축](/ko/smart-home/private-smart-home-gdpr) — EU 개인정보 관점',
          '[Ollama를 Home Assistant에 연결하기](/ko/smart-home/home-assistant-ollama-integration) — 프라이빗 로컬 AI 제어',
          '[로컬 LLM이란](/ko/local-llms/what-are-local-llms) — 크로스 클러스터: 프라이빗 로컬 AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '스마트홈 개인정보 위험 (2026): 기기가 아는 것들',
      description: '스마트홈 개인정보 위험: 클라우드 데이터 수집, 항상 듣는 마이크, 카메라 영상, 침해, 제3자 공유 — 로컬 제어로 해결하는 방법.',
      url: 'https://www.promptquorum.com/ko/smart-home/smart-home-privacy-risks',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '스마트홈 개인정보' }, { '@type': 'Thing', name: '데이터 수집' }, { '@type': 'Thing', name: '로컬 제어' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '스마트 스피커는 항상 듣고 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '클라우드 음성 어시스턴트는 로컬에서 웨이크 워드를 감지한 후 이후 오디오를 클라우드로 전송합니다. 질의가 전송되고 보관될 수 있습니다. 로컬 어시스턴트는 모든 것을 귀하의 하드웨어에서 처리합니다.' } },
        { '@type': 'Question', name: '카메라 영상은 어디로 갑니까?', acceptedAnswer: { '@type': 'Answer', text: '클라우드 카메라는 영상을 제조사 서버에 업로드하며 구독 서비스 뒤에 있는 경우가 많습니다. Frigate를 이용한 로컬 설정은 영상을 귀하의 하드웨어에 유지합니다.' } },
        { '@type': 'Question', name: '데이터 수집을 중단할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '클라우드 기기는 제한할 수 있지만 완전히 중단하기는 어렵습니다. 신뢰할 수 있는 해결책은 로컬 가능 기기와 로컬 허브로 전환하는 것입니다.' } },
        { '@type': 'Question', name: '로컬 스마트홈은 실제로 프라이빗합니까?', acceptedAnswer: { '@type': 'Answer', text: '그렇습니다. 로컬 허브, 로컬 음성, 로컬 AI를 사용하면 기기 데이터, 녹음, 자동화가 제3자 처리자 없이 귀하의 하드웨어에 유지됩니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Risques de Confidentialité de la Maison Connectée (2026)',
    seoTitle: 'Risques Confidentialité Maison Connectée 2026: Ce Que Savent',
    intro:
      'Les appareils de maison connectée cloud collectent des habitudes d\'usage, des enregistrements vocaux et des flux de caméra sur les serveurs des entreprises — et la solution est le contrôle local. Ce guide couvre les risques réels de confidentialité, ce que collectent les écosystèmes cloud, pourquoi les fuites et le partage de données comptent, et comment une configuration local-first avec IA locale supprime entièrement le sous-traitant externe.',
    metaDescription:
      'Risques confidentialité maison connectée 2026 : données cloud, micros actifs, flux caméra, fuites et partage. Contrôle local comme solution.',
    twitterDescription:
      'Ce que vos appareils de maison connectée savent de vous : données d\'usage cloud, enregistrements vocaux, flux de caméra. La solution est le contrôle local et l\'IA locale.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Propriétaires de maison connectée soucieux de la confidentialité',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'risques confidentialité maison connectée',
      'collecte données maison connectée',
      'enceintes connectées à l\'écoute',
      'risques sécurité maison connectée',
      'maison connectée privée',
    ],
    leadAnswerBlock:
      '**Les appareils de maison connectée cloud collectent des habitudes d\'usage, des enregistrements vocaux et des flux de caméra sur les serveurs des entreprises, où ils sont exposés aux fuites et au partage avec des tiers — et la solution est le contrôle local qui garde les données chez vous.** Une configuration local-first supprime entièrement le sous-traitant externe.',
    quickAnswerTop: {
      fr: {
        question: 'Quels sont les risques de confidentialité d\'une maison connectée ?',
        answer:
          'Les appareils de maison connectée reliés au cloud envoient des données d\'usage, des enregistrements vocaux et des images de caméra aux serveurs des entreprises, où ils peuvent être conservés, partagés avec des tiers ou exposés lors d\'une fuite. Les assistants toujours à l\'écoute et les caméras cloud sont les appareils les plus à risque. Passer au contrôle local garde ces données sur votre propre matériel.',
        bullets: [
          'Les données d\'usage cloud révèlent routines et présence',
          'Les assistants vocaux traitent les enregistrements dans le cloud',
          'Les caméras cloud stockent les images sur les serveurs du fabricant',
          'Les fuites et le partage exposent les données',
          'Le contrôle local supprime le sous-traitant externe',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Les risques réels', anchor: 'real-risks' },
      { label: 'Ce que collecte chaque écosystème', anchor: 'what-collected' },
      { label: 'Fuites et exposition', anchor: 'breaches' },
      { label: 'La solution : local-first', anchor: 'the-fix' },
      { label: 'Votre liste d\'actions', anchor: 'checklist' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Les appareils de maison connectée cloud collectent données d\'usage, enregistrements vocaux et flux de caméra sur les serveurs des entreprises ; le contrôle local garde ces données chez vous.' },
      { type: 'plain-terms', content: 'Les appareils de maison connectée qui dépendent du cloud envoient des informations sur votre maison aux serveurs des entreprises : quand vous arrivez et partez, ce que vous dites à une enceinte et ce que voient vos caméras. Ces données peuvent être conservées, partagées ou divulguées. Tout exécuter localement signifie que rien de cela ne quitte votre maison.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Les données d\'usage cloud révèlent vos routines, votre présence et vos habitudes',
          'Les assistants vocaux envoient les enregistrements au cloud pour traitement',
          'Les caméras cloud stockent les images sur les serveurs du fabricant, souvent derrière un abonnement',
          'Les données stockées sont exposées aux fuites et au partage avec des tiers',
          'Le contrôle local garde les données sur votre matériel et supprime le sous-traitant externe',
          'L\'IA locale (voix et LLM) vous laisse garder les fonctions connectées sans le cloud',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'Les risques réels de confidentialité',
        content:
          '**Les risques réels sont la collecte de données cloud, les assistants toujours à l\'écoute, les flux de caméra, les fuites et le partage avec des tiers.** Chacun découle du fait que les données quittent votre maison et résident sur les serveurs d\'autrui.',
        items: [
          '**Données d\'usage :** les journaux d\'appareils révèlent quand vous vous levez, partez et revenez.',
          '**Assistants toujours à l\'écoute :** les requêtes vocales sont traitées et peuvent être conservées dans le cloud.',
          '**Flux de caméra :** les caméras cloud téléversent les images sur les serveurs du fabricant.',
          '**Fuites et partage :** les données stockées peuvent être exposées ou partagées avec des tiers.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'Ce que collecte chaque écosystème',
        content:
          '**Les écosystèmes cloud d\'abord collectent plus que les locaux : usage, voix et parfois vidéo ; les configurations locales n\'en collectent rien hors de l\'appareil.** La posture de confidentialité suit la part qui tourne dans le cloud.',
        items: [
          'Les écosystèmes cloud d\'abord (Alexa, Google Home) traitent la voix et stockent les données d\'usage sur leurs serveurs.',
          'Apple Home est plus axé sur la confidentialité, mais reste connecté au cloud pour certaines fonctions.',
          'Home Assistant garde les données en local par défaut — voir [écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Fuites et exposition',
        content:
          '**Toute donnée stockée sur les serveurs des entreprises est exposée aux fuites, aux changements de politique et au partage avec des tiers que vous ne pouvez pas contrôler.** Les seules données qui ne peuvent pas fuiter d\'un fournisseur sont celles que le fournisseur ne reçoit jamais.',
        items: [
          'Les enregistrements centralisés sont des cibles de fuite attrayantes.',
          'Les politiques de confidentialité peuvent changer et étendre l\'usage de vos données.',
          'Le traitement local évite le problème en n\'envoyant jamais les données.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'La solution : local-first et IA locale',
        content:
          '**La solution est le contrôle local : exécuter le hub, la voix et l\'IA sur votre propre matériel pour qu\'aucune donnée ne quitte la maison.** Vous gardez les fonctions connectées sans le sous-traitant externe. Pour les données professionnelles sensibles (financières, médicales, juridiques), la CNIL recommande un traitement local de l\'IA, ce qu\'un setup local-first satisfait puisque aucun sous-traitant externe n\'intervient.',
        items: [
          'Passez à un hub local et des appareils locaux — voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
          'Remplacez la voix cloud par un assistant local — voir [connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration).',
          'Pour l\'angle UE/RGPD, voir [construire une maison connectée privée conforme au RGPD](/fr/smart-home/private-smart-home-gdpr).',
          'Pour l\'IA locale privée en général, voir [qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) (inter-clusters).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Votre liste d\'actions confidentialité',
        content:
          '**Réduisez le risque en remplaçant les appareils cloud les plus exposés par des locaux, en commençant par les caméras et la voix.** Chaque remplacement supprime un flux de données qui quitte votre maison.',
        columns: ['Risque', 'Configuration cloud', 'Configuration locale'],
        rows: [
          { 'Risque': 'Voix', 'Configuration cloud': 'Enregistrements traités dans le cloud', 'Configuration locale': 'Whisper + Piper local, sur l\'appareil' },
          { 'Risque': 'Caméras', 'Configuration cloud': 'Images sur les serveurs du fabricant', 'Configuration locale': 'Frigate, les images restent à la maison' },
          { 'Risque': 'Données d\'usage', 'Configuration cloud': 'Journalisées par le fabricant', 'Configuration locale': 'Restent sur votre hub' },
          { 'Risque': 'Automatisations', 'Configuration cloud': 'Tournent dans le cloud', 'Configuration locale': 'Tournent sur le hub local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Les enceintes connectées écoutent-elles en permanence ?', a: 'Les assistants vocaux cloud écoutent localement un mot d\'activation, puis envoient l\'audio suivant au cloud pour traitement. Cela signifie que vos requêtes vocales sont transmises et peuvent être conservées. Un assistant vocal local traite tout sur votre matériel à la place.' },
          { q: 'Où vont les flux de mes caméras ?', a: 'Les caméras cloud téléversent les images sur les serveurs du fournisseur, où elles sont stockées et souvent gérées derrière un abonnement. Une configuration locale avec Frigate garde les images sur votre propre matériel, elles ne quittent donc jamais la maison.' },
          { q: 'Puis-je arrêter la collecte de données ?', a: 'Sur les appareils cloud, vous pouvez la limiter mais rarement l\'éliminer via les réglages. La solution fiable est de passer à des appareils à capacité locale et à un hub local, pour que les données ne soient jamais envoyées à un fournisseur.' },
          { q: 'Une maison connectée locale est-elle vraiment privée ?', a: 'Oui. Avec un hub local, une voix locale et une IA locale, les données d\'appareils, les enregistrements et les automatisations restent sur votre matériel sans sous-traitant externe. C\'est ce qui rend une configuration local-first privée par conception.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — la solution complète',
          '[Construire une maison connectée privée conforme au RGPD](/fr/smart-home/private-smart-home-gdpr) — l\'angle de confidentialité de l\'UE',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — contrôle par IA locale privé',
          '[Qu\'est-ce qu\'un LLM local](/fr/local-llms/what-are-local-llms) — inter-clusters : IA locale privée',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Risques de Confidentialité de la Maison Connectée (2026)',
      description: 'Risques confidentialité maison connectée 2026 : données cloud, micros actifs, flux caméra, fuites et partage. Contrôle local comme solution.',
      url: 'https://www.promptquorum.com/fr/smart-home/smart-home-privacy-risks',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Confidentialité de la maison connectée' }, { '@type': 'Thing', name: 'Collecte de données' }, { '@type': 'Thing', name: 'Contrôle local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Les enceintes connectées écoutent-elles en permanence ?', acceptedAnswer: { '@type': 'Answer', text: 'Les assistants vocaux cloud écoutent localement un mot d\'activation, puis envoient l\'audio suivant au cloud, donc vos requêtes sont transmises et peuvent être conservées. Un assistant local traite tout sur votre matériel.' } },
        { '@type': 'Question', name: 'Où vont les flux de mes caméras ?', acceptedAnswer: { '@type': 'Answer', text: 'Les caméras cloud téléversent les images sur les serveurs du fournisseur, souvent derrière un abonnement. Une configuration locale avec Frigate garde les images sur votre propre matériel.' } },
        { '@type': 'Question', name: 'Puis-je arrêter la collecte de données ?', acceptedAnswer: { '@type': 'Answer', text: 'Sur les appareils cloud, vous pouvez la limiter mais rarement l\'éliminer. La solution fiable est de passer à des appareils à capacité locale et à un hub local.' } },
        { '@type': 'Question', name: 'Une maison connectée locale est-elle vraiment privée ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Avec un hub local, une voix locale et une IA locale, les données d\'appareils, les enregistrements et les automatisations restent sur votre matériel sans sous-traitant externe.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'スマートホームのプライバシーリスク（2026）：機器は何を知るか',
    seoTitle: 'スマートホームのプライバシーリスク2026年版：機器が集めるデータと対策',
    intro:
      'クラウド型スマートホーム機器は、利用パターン・音声録音・カメラ映像を企業のサーバーに収集します——そして解決策はローカル制御です。本ガイドは、現実のプライバシーリスク、クラウドエコシステムが何を収集するか、漏えいやデータ共有がなぜ重要か、そしてローカルAIを備えたローカルファースト構成が外部処理者を完全に取り除く仕組みを扱います。',
    metaDescription:
      'スマートホームのプライバシーリスクを2026年版で解説：クラウドのデータ収集、常時待ち受けマイク、カメラ映像の送信、漏えいリスク、第三者共有の実態——そしてローカル制御による根本的な解決策。',
    twitterDescription:
      'あなたのスマートホーム機器が知っていること：クラウドの利用データ、音声録音、カメラ映像。解決策はローカル制御とローカルAIです。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'プライバシーを重視するスマートホーム所有者',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'スマートホーム プライバシー リスク',
      'スマートホーム データ収集',
      'スマートスピーカー 盗聴',
      'スマートホーム セキュリティ リスク',
      'プライベート スマートホーム',
    ],
    leadAnswerBlock:
      '**クラウド型スマートホーム機器は、利用パターン・音声録音・カメラ映像を企業のサーバーに収集し、そこで漏えいや第三者共有にさらされます——そして解決策は、データを家にとどめるローカル制御です。** ローカルファースト構成は外部処理者を完全に取り除きます。',
    quickAnswerTop: {
      ja: {
        question: 'スマートホームのプライバシーリスクとは何ですか？',
        answer:
          'クラウド接続のスマートホーム機器は、利用データ・音声録音・カメラ映像を企業のサーバーへ送り、そこで保持・第三者共有・漏えいの対象になり得ます。常時待ち受けのアシスタントとクラウドカメラが最もリスクの高い機器です。ローカル制御へ移れば、こうしたデータは自分のハードウェアにとどまります。',
        bullets: [
          'クラウドの利用データは習慣や在宅を露呈する',
          '音声アシスタントは録音をクラウドで処理する',
          'クラウドカメラは映像をメーカーのサーバーに保存する',
          '漏えいと共有がデータを露呈する',
          'ローカル制御は外部処理者を取り除く',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '現実のリスク', anchor: 'real-risks' },
      { label: '各エコシステムが収集するもの', anchor: 'what-collected' },
      { label: '漏えいと露呈', anchor: 'breaches' },
      { label: '解決策：ローカルファースト', anchor: 'the-fix' },
      { label: 'あなたの対策チェックリスト', anchor: 'checklist' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'クラウド型スマートホーム機器は、利用データ・音声録音・カメラ映像を企業のサーバーに収集します；ローカル制御はそのデータを家にとどめます。' },
      { type: 'plain-terms', content: 'クラウドに依存するスマートホーム機器は、あなたの家に関する情報——いつ出入りするか、スピーカーに何を話すか、カメラが何を見るか——を企業のサーバーへ送ります。こうしたデータは保持・共有・漏えいの可能性があります。すべてをローカルで動かせば、そのどれも家を出ません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'クラウドの利用データはあなたの習慣・在宅・行動を露呈する',
          '音声アシスタントは録音を処理のためクラウドへ送る',
          'クラウドカメラは映像をメーカーのサーバーに保存し、多くはサブスクの背後に置く',
          '保存されたデータは漏えいと第三者共有にさらされる',
          'ローカル制御はデータを自分のハードウェアにとどめ、外部処理者を取り除く',
          'ローカルAI（音声とLLM）はクラウドなしでスマート機能を残せる',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: '現実のプライバシーリスク',
        content:
          '**現実のリスクは、クラウドのデータ収集、常時待ち受けのアシスタント、カメラ映像、漏えい、第三者共有です。** いずれも、データが家を出て他者のサーバーに置かれることから生じます。',
        items: [
          '**利用データ：** 機器のログは、起床・外出・帰宅の時刻を露呈します。',
          '**常時待ち受けのアシスタント：** 音声クエリは処理され、クラウドに保持され得ます。',
          '**カメラ映像：** クラウドカメラは映像をメーカーのサーバーへアップロードします。',
          '**漏えいと共有：** 保存されたデータは露呈または第三者と共有され得ます。',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: '各エコシステムが収集するもの',
        content:
          '**クラウド優先のエコシステムはローカルより多くを収集します：利用、音声、ときに映像；ローカル構成は機器の外でそれらを一切収集しません。** プライバシーの姿勢は、クラウドで動く割合に従います。',
        items: [
          'クラウド優先のエコシステム（Alexa、Google Home）は音声を処理し、利用データを自社サーバーに保存します。',
          'Apple Home はよりプライバシー寄りですが、一部機能では依然クラウド接続です。',
          'Home Assistant は標準でデータをローカルに保ちます——[スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared)を参照。',
        ],
      },
      breaches: {
        id: 'breaches',
        title: '漏えいと露呈',
        content:
          '**企業のサーバーに保存されたデータはすべて、あなたが制御できない漏えい・ポリシー変更・第三者共有にさらされます。** 事業者から漏れ得ないデータは、事業者が一度も受け取らないデータだけです。',
        items: [
          '集中保存された録画は魅力的な攻撃対象です。',
          'プライバシーポリシーは変更され、データの使われ方が拡大し得ます。',
          'ローカル処理は、データを決して送らないことで問題を回避します。',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: '解決策：ローカルファーストとローカルAI',
        content:
          '**解決策はローカル制御：ハブ、音声、AIを自分のハードウェアで動かし、データが家を出ないようにすることです。** 外部処理者なしでスマート機能を残せます。日本では、経済産業省（METI）の AI ガバナンス・ガイドライン（2024）が企業のデータ管理を重視しており、ローカル構成は外部処理者を介さないため、こうした方針に沿いやすくなります。',
        items: [
          'ローカルハブとローカル機器へ移る——[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
          'クラウド音声をローカルアシスタントで置き換える——[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration)を参照。',
          'EU/GDPR の観点は[GDPR に配慮したプライベートなスマートホームを作る](/ja/smart-home/private-smart-home-gdpr)を参照。',
          'プライベートなローカルAI全般は[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms)（クラスター横断）を参照。',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'あなたのプライバシー対策チェックリスト',
        content:
          '**カメラと音声から始め、露出の大きいクラウド機器をローカルへ置き換えてリスクを下げましょう。** 置き換えのたびに、家を出るデータの流れが一つ消えます。',
        columns: ['リスク', 'クラウド構成', 'ローカル構成'],
        rows: [
          { 'リスク': '音声', 'クラウド構成': 'クラウドで録音を処理', 'ローカル構成': 'ローカル Whisper + Piper、機器上で' },
          { 'リスク': 'カメラ', 'クラウド構成': '映像がメーカーのサーバーに', 'ローカル構成': 'Frigate、映像は家にとどまる' },
          { 'リスク': '利用データ', 'クラウド構成': 'メーカーが記録', 'ローカル構成': 'あなたのハブにとどまる' },
          { 'リスク': '自動化', 'クラウド構成': 'クラウドで実行', 'ローカル構成': 'ローカルハブで実行' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'スマートスピーカーは常に聞いていますか？', a: 'クラウド音声アシスタントは、ウェイクワードをローカルで待ち受け、その後の音声を処理のためクラウドへ送ります。つまり、あなたの音声クエリは送信され、保持され得ます。ローカル音声アシスタントは代わりにすべてを自分のハードウェアで処理します。' },
          { q: 'カメラの映像はどこへ行きますか？', a: 'クラウドカメラは映像を事業者のサーバーへアップロードし、そこで保存され、多くはサブスクの背後で管理されます。Frigate を使うローカル構成は映像を自分のハードウェアにとどめ、家を出ません。' },
          { q: 'データ収集を止められますか？', a: 'クラウド機器では設定で収集を制限できますが、完全に止められることは稀です。確実な解決策は、ローカル対応機器とローカルハブへ切り替え、そもそもデータが事業者へ送られないようにすることです。' },
          { q: 'ローカルスマートホームは本当にプライベートですか？', a: 'はい。ローカルハブ、ローカル音声、ローカルAIなら、機器データ・録画・自動化が外部処理者なしで自分のハードウェアにとどまります。これがローカルファースト構成を設計上プライベートにします。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 解決策の全容',
          '[GDPR に配慮したプライベートなスマートホームを作る](/ja/smart-home/private-smart-home-gdpr) — EU のプライバシーの観点',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — プライベートなローカルAI制御',
          '[ローカルLLMとは何か](/ja/local-llms/what-are-local-llms) — クラスター横断：プライベートなローカルAI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'スマートホームのプライバシーリスク（2026）：機器は何を知るか',
      description: 'スマートホームのプライバシーリスクを2026年版で解説：クラウドのデータ収集、常時待ち受けマイク、カメラ映像の送信、漏えいリスク、第三者共有の実態——そしてローカル制御による根本的な解決策。',
      url: 'https://www.promptquorum.com/ja/smart-home/smart-home-privacy-risks',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'スマートホームのプライバシー' }, { '@type': 'Thing', name: 'データ収集' }, { '@type': 'Thing', name: 'ローカル制御' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: 'スマートスピーカーは常に聞いていますか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウド音声アシスタントはウェイクワードをローカルで待ち受け、その後の音声をクラウドへ送ります。つまりクエリは送信・保持され得ます。ローカルアシスタントはすべてを自分のハードウェアで処理します。' } },
        { '@type': 'Question', name: 'カメラの映像はどこへ行きますか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウドカメラは映像を事業者のサーバーへアップロードし、多くはサブスクの背後で管理します。Frigate のローカル構成は映像を自分のハードウェアにとどめます。' } },
        { '@type': 'Question', name: 'データ収集を止められますか？', acceptedAnswer: { '@type': 'Answer', text: 'クラウド機器では制限できますが、完全に止められることは稀です。確実な解決策はローカル対応機器とローカルハブへの切り替えです。' } },
        { '@type': 'Question', name: 'ローカルスマートホームは本当にプライベートですか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。ローカルハブ、ローカル音声、ローカルAIなら、機器データ・録画・自動化が外部処理者なしで自分のハードウェアにとどまります。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: 'Riscos de Privacidade da Casa Inteligente (2026): O Que Seus Dispositivos Sabem',
    seoTitle: 'Riscos de Privacidade da Casa Inteligente 2026: Guia',
    intro:
      'Dispositivos de casa inteligente na nuvem coletam padrões de uso, gravações de voz e imagens de câmeras em servidores das empresas — e a solução é o controle local. Este guia cobre os riscos reais de privacidade, o que os ecossistemas na nuvem coletam, por que vazamentos e compartilhamento de dados importam, e como uma configuração local-first com IA local elimina por completo o processador externo.',
    metaDescription:
      'Riscos de privacidade casa inteligente 2026: nuvem, microfones ativos, câmeras, vazamentos e compartilhamento. Como o controle local resolve.',
    twitterDescription:
      'O que seus dispositivos de casa inteligente sabem sobre você: dados de uso na nuvem, gravações de voz, imagens de câmeras. A solução é o controle local e a IA local.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Donos de casa inteligente preocupados com privacidade',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      'riscos privacidade casa inteligente',
      'coleta de dados casa inteligente',
      'alto-falantes inteligentes ouvindo',
      'riscos segurança casa inteligente',
      'casa inteligente privada',
    ],
    leadAnswerBlock:
      '**Dispositivos de casa inteligente na nuvem coletam padrões de uso, gravações de voz e imagens de câmeras em servidores das empresas, onde ficam expostos a vazamentos e ao compartilhamento com terceiros — e a solução é o controle local, que mantém os dados na sua casa.** Uma configuração local-first elimina por completo o processador externo.',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os riscos de privacidade de uma casa inteligente?',
        answer:
          'Dispositivos de casa inteligente conectados à nuvem enviam dados de uso, gravações de voz e imagens de câmeras a servidores das empresas, onde podem ser retidos, compartilhados com terceiros ou expostos em um vazamento. Assistentes sempre ouvindo e câmeras na nuvem são os dispositivos de maior risco. Migrar para o controle local mantém esses dados no seu próprio hardware.',
        bullets: [
          'Dados de uso na nuvem revelam rotinas e presença',
          'Assistentes de voz processam gravações na nuvem',
          'Câmeras na nuvem armazenam imagens em servidores do fabricante',
          'Vazamentos e compartilhamento expõem os dados',
          'O controle local elimina o processador externo',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Os riscos reais', anchor: 'real-risks' },
      { label: 'O que cada ecossistema coleta', anchor: 'what-collected' },
      { label: 'Vazamentos e exposição', anchor: 'breaches' },
      { label: 'A solução: local-first', anchor: 'the-fix' },
      { label: 'Sua lista de ações', anchor: 'checklist' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Dispositivos de casa inteligente na nuvem coletam dados de uso, gravações de voz e imagens de câmeras em servidores das empresas; o controle local mantém esses dados na sua casa.' },
      { type: 'plain-terms', content: 'Dispositivos de casa inteligente que dependem da nuvem enviam informações sobre sua casa a servidores das empresas: quando você entra e sai, o que você diz a uma caixa de som e o que suas câmeras veem. Esses dados podem ser retidos, compartilhados ou vazados. Rodar tudo localmente significa que nada disso sai de casa.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Dados de uso na nuvem revelam suas rotinas, presença e hábitos',
          'Assistentes de voz enviam gravações à nuvem para processar',
          'Câmeras na nuvem armazenam imagens em servidores do fabricante, muitas vezes atrás de uma assinatura',
          'Dados armazenados ficam expostos a vazamentos e ao compartilhamento com terceiros',
          'O controle local mantém os dados no seu hardware e elimina o processador externo',
          'A IA local (voz e LLM) deixa você manter os recursos inteligentes sem a nuvem',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: 'Os riscos reais de privacidade',
        content:
          '**Os riscos reais são a coleta de dados na nuvem, os assistentes sempre ouvindo, as imagens de câmeras, os vazamentos e o compartilhamento com terceiros.** Cada um vem do fato de os dados saírem da sua casa e ficarem em servidores alheios.',
        items: [
          '**Dados de uso:** os registros dos dispositivos revelam quando você acorda, sai e volta.',
          '**Assistentes sempre ouvindo:** as consultas de voz são processadas e podem ser retidas na nuvem.',
          '**Imagens de câmeras:** câmeras na nuvem enviam gravações a servidores do fabricante.',
          '**Vazamentos e compartilhamento:** dados armazenados podem ser expostos ou compartilhados com terceiros.',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: 'O que cada ecossistema coleta',
        content:
          '**Ecossistemas nuvem-primeiro coletam mais que os locais: uso, voz e às vezes vídeo; configurações locais não coletam nada disso fora do dispositivo.** A postura de privacidade segue o quanto roda na nuvem.',
        items: [
          'Ecossistemas nuvem-primeiro (Alexa, Google Home) processam voz e armazenam dados de uso em seus servidores.',
          'O Apple Home é mais voltado à privacidade, mas ainda conectado à nuvem para algumas funções.',
          'O Home Assistant mantém os dados em local por padrão — veja [ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      breaches: {
        id: 'breaches',
        title: 'Vazamentos e exposição',
        content:
          '**Qualquer dado armazenado em servidores das empresas fica exposto a vazamentos, mudanças de política e compartilhamento com terceiros que você não pode controlar.** Os únicos dados que não podem vazar de um fornecedor são os que o fornecedor nunca recebe.',
        items: [
          'Gravações centralizadas são alvos atraentes de vazamento.',
          'Políticas de privacidade podem mudar e ampliar como seus dados são usados.',
          'O processamento local evita o problema ao nunca enviar os dados.',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: 'A solução: local-first e IA local',
        content:
          '**A solução é o controle local: rodar o hub, a voz e a IA no seu próprio hardware para que nenhum dado saia de casa.** Você mantém os recursos inteligentes sem o processador externo. No Brasil, isso apoia a LGPD (Lei Geral de Proteção de Dados) e as obrigações fiscalizadas pela ANPD (Autoridade Nacional de Proteção de Dados), pois o processamento local mantém dados de dispositivos, voz e câmera na sua residência, sem um operador externo.',
        items: [
          'Migre para um hub local e dispositivos locais — veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
          'Substitua a voz na nuvem por um assistente local — veja [conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration).',
          'Para o ângulo de privacidade, veja [construir uma casa inteligente privada compatível com o GDPR](/pt/smart-home/private-smart-home-gdpr).',
          'Para IA local privada em geral, veja [o que são LLMs locais](/pt/local-llms/what-are-local-llms) (entre clusters).',
        ],
      },
      checklist: {
        id: 'checklist',
        title: 'Sua lista de ações de privacidade',
        content:
          '**Reduza o risco substituindo os dispositivos na nuvem de maior exposição por locais, começando por câmeras e voz.** Cada troca elimina um fluxo de dados que sai da sua casa.',
        columns: ['Risco', 'Configuração na nuvem', 'Configuração local'],
        rows: [
          { 'Risco': 'Voz', 'Configuração na nuvem': 'Gravações processadas na nuvem', 'Configuração local': 'Whisper + Piper local, no dispositivo' },
          { 'Risco': 'Câmeras', 'Configuração na nuvem': 'Imagens em servidores do fabricante', 'Configuração local': 'Frigate, as imagens ficam em casa' },
          { 'Risco': 'Dados de uso', 'Configuração na nuvem': 'Registrados pelo fabricante', 'Configuração local': 'Ficam no seu hub' },
          { 'Risco': 'Automações', 'Configuração na nuvem': 'Rodam na nuvem', 'Configuração local': 'Rodam no hub local' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Alto-falantes inteligentes ficam sempre ouvindo?', a: 'Assistentes de voz na nuvem ouvem localmente uma palavra de ativação e depois enviam o áudio seguinte à nuvem para processar. Isso significa que suas consultas faladas são transmitidas e podem ser retidas. Um assistente de voz local processa tudo no seu hardware.' },
          { q: 'Para onde vão as imagens das minhas câmeras?', a: 'Câmeras na nuvem enviam as imagens aos servidores do fornecedor, onde são armazenadas e muitas vezes ficam atrás de uma assinatura. Uma configuração local com Frigate mantém as imagens no seu próprio hardware, então elas nunca saem de casa.' },
          { q: 'Posso parar a coleta de dados?', a: 'Em dispositivos na nuvem, você pode limitar, mas raramente eliminar a coleta pelas configurações. A solução confiável é mudar para dispositivos com capacidade local e um hub local, para que os dados nunca sejam enviados a um fornecedor.' },
          { q: 'Uma casa inteligente local é realmente privada?', a: 'Sim. Com um hub local, voz local e IA local, os dados de dispositivos, as gravações e as automações ficam no seu hardware sem processador externo. É isso que torna uma configuração local-first privada por design.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — a solução completa',
          '[Construir uma casa inteligente privada compatível com o GDPR](/pt/smart-home/private-smart-home-gdpr) — o ângulo de privacidade',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — controle com IA local privado',
          '[O que são LLMs locais](/pt/local-llms/what-are-local-llms) — entre clusters: IA local privada',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Riscos de Privacidade da Casa Inteligente (2026): O Que Seus Dispositivos Sabem',
      description: 'Riscos de privacidade casa inteligente 2026: nuvem, microfones ativos, câmeras, vazamentos e compartilhamento. Como o controle local resolve.',
      url: 'https://www.promptquorum.com/pt/smart-home/smart-home-privacy-risks',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Privacidade da casa inteligente' }, { '@type': 'Thing', name: 'Coleta de dados' }, { '@type': 'Thing', name: 'LGPD' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Alto-falantes inteligentes ficam sempre ouvindo?', acceptedAnswer: { '@type': 'Answer', text: 'Assistentes de voz na nuvem ouvem localmente uma palavra de ativação e depois enviam o áudio seguinte à nuvem, então suas consultas são transmitidas e podem ser retidas. Um assistente local processa tudo no seu hardware.' } },
        { '@type': 'Question', name: 'Para onde vão as imagens das minhas câmeras?', acceptedAnswer: { '@type': 'Answer', text: 'Câmeras na nuvem enviam as imagens aos servidores do fornecedor, muitas vezes atrás de uma assinatura. Uma configuração local com Frigate mantém as imagens no seu próprio hardware.' } },
        { '@type': 'Question', name: 'Posso parar a coleta de dados?', acceptedAnswer: { '@type': 'Answer', text: 'Em dispositivos na nuvem você pode limitar, mas raramente eliminar a coleta. A solução confiável é mudar para dispositivos com capacidade local e um hub local.' } },
        { '@type': 'Question', name: 'Uma casa inteligente local é realmente privada?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Com um hub local, voz local e IA local, os dados de dispositivos, as gravações e as automações ficam no seu hardware sem processador externo.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Smart Home Foundations',
    title: '智能家居隐私风险（2026）：你的设备知道什么',
    seoTitle: '智能家居隐私风险深度解析2026：数据收集、泄露与本地控制解决方案',
    intro:
      '云端智能家居设备会把使用模式、语音录音和摄像头画面收集到企业服务器上——而解决办法是本地控制。本指南讲解真实的隐私风险、云端生态收集了什么、数据泄露与共享为何重要，以及带本地AI的本地优先配置如何彻底去除外部处理方。',
    metaDescription:
      '智能家居隐私风险2026年全面解析：云端使用数据收集、始终聆听的麦克风、摄像头画面上传、数据泄露事件与第三方共享现状，以及本地优先控制架构如何从根本上解决上述隐私问题。',
    twitterDescription:
      '你的智能家居设备知道你什么：云端使用数据、语音录音、摄像头画面。解决办法是本地控制与本地AI。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '注重隐私的智能家居用户',
    primaryTerm: 'smart home privacy risks',
    targetKeywords: [
      '智能家居 隐私 风险',
      '智能家居 数据收集',
      '智能音箱 监听',
      '智能家居 安全 风险',
      '私密 智能家居',
    ],
    leadAnswerBlock:
      '**云端智能家居设备会把使用模式、语音录音和摄像头画面收集到企业服务器上，在那里面临泄露和第三方共享——而解决办法是把数据留在家中的本地控制。** 本地优先配置可彻底去除外部处理方。',
    quickAnswerTop: {
      zh: {
        question: '智能家居有哪些隐私风险？',
        answer:
          '联网到云端的智能家居设备会把使用数据、语音录音和摄像头画面发送到企业服务器，在那里可能被保留、与第三方共享，或在泄露中暴露。始终聆听的助手和云端摄像头是风险最高的设备。转向本地控制可把这些数据留在你自己的硬件上。',
        bullets: [
          '云端使用数据会暴露作息与在家情况',
          '语音助手在云端处理录音',
          '云端摄像头把画面存到厂商服务器',
          '泄露与共享会暴露数据',
          '本地控制去除外部处理方',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '真实风险', anchor: 'real-risks' },
      { label: '各生态收集什么', anchor: 'what-collected' },
      { label: '泄露与暴露', anchor: 'breaches' },
      { label: '解决办法：本地优先', anchor: 'the-fix' },
      { label: '你的行动清单', anchor: 'checklist' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '云端智能家居设备把使用数据、语音录音和摄像头画面收集到企业服务器上；本地控制把这些数据留在家中。' },
      { type: 'plain-terms', content: '依赖云端的智能家居设备会把关于你家的信息——你何时进出、对音箱说了什么、摄像头看到什么——发送到企业服务器。这些数据可能被保留、共享或泄露。把一切本地运行，就意味着这些都不会离开你家。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '云端使用数据会暴露你的作息、在家情况与习惯',
          '语音助手把录音发到云端处理',
          '云端摄像头把画面存到厂商服务器，常在订阅之后',
          '存储的数据面临泄露与第三方共享',
          '本地控制把数据留在你的硬件上，并去除外部处理方',
          '本地AI（语音与LLM）让你在没有云端的情况下保留智能功能',
        ],
      },
      realRisks: {
        id: 'real-risks',
        title: '真实的隐私风险',
        content:
          '**真实风险包括云端数据收集、始终聆听的助手、摄像头画面、泄露以及第三方共享。** 每一项都源于数据离开你家、留在他人的服务器上。',
        items: [
          '**使用数据：** 设备日志会暴露你何时起床、外出和回家。',
          '**始终聆听的助手：** 语音查询会被处理，并可能在云端被保留。',
          '**摄像头画面：** 云端摄像头把画面上传到厂商服务器。',
          '**泄露与共享：** 存储的数据可能被暴露或与第三方共享。',
        ],
      },
      whatCollected: {
        id: 'what-collected',
        title: '各生态收集什么',
        content:
          '**云端优先的生态比本地收集更多：使用、语音，有时还有视频；本地配置在设备之外一概不收集。** 隐私态势取决于多少在云端运行。',
        items: [
          '云端优先的生态（Alexa、Google Home）在其服务器上处理语音并存储使用数据。',
          'Apple Home 更注重隐私，但部分功能仍连接云端。',
          'Home Assistant 默认把数据留在本地——参见[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared)。',
        ],
      },
      breaches: {
        id: 'breaches',
        title: '泄露与暴露',
        content:
          '**任何存储在企业服务器上的数据都面临你无法控制的泄露、政策变更和第三方共享。** 唯一不会从厂商泄露的数据，是厂商从未收到的数据。',
        items: [
          '集中存储的录像是诱人的泄露目标。',
          '隐私政策可能变更，扩大你数据的用途。',
          '本地处理通过从不发送数据来规避该问题。',
        ],
      },
      theFix: {
        id: 'the-fix',
        title: '解决办法：本地优先与本地AI',
        content:
          '**解决办法是本地控制：把中枢、语音和AI运行在你自己的硬件上，使任何数据都不离开家门。** 你能在没有外部处理方的情况下保留智能功能。在中国，《数据安全法》（2021）要求重要数据本地存储；本地处理把设备、语音和摄像头数据留在境内你的硬件上、不经外部处理方，因而更易满足此类合规要求。',
        items: [
          '迁移到本地中枢和本地设备——参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
          '用本地助手替换云端语音——参见[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration)。',
          '关于隐私角度，参见[构建符合 GDPR 的私密智能家居](/zh/smart-home/private-smart-home-gdpr)。',
          '关于私密本地AI总体，参见[什么是本地LLM](/zh/local-llms/what-are-local-llms)（跨集群）。',
        ],
      },
      checklist: {
        id: 'checklist',
        title: '你的隐私行动清单',
        content:
          '**通过把暴露最大的云端设备换成本地设备来降低风险，从摄像头和语音开始。** 每一次替换，都消除一条离开你家的数据流。',
        columns: ['风险', '云端配置', '本地配置'],
        rows: [
          { '风险': '语音', '云端配置': '在云端处理录音', '本地配置': '本地 Whisper + Piper，在设备上' },
          { '风险': '摄像头', '云端配置': '画面在厂商服务器', '本地配置': 'Frigate，画面留在家中' },
          { '风险': '使用数据', '云端配置': '由厂商记录', '本地配置': '留在你的中枢' },
          { '风险': '自动化', '云端配置': '在云端运行', '本地配置': '在本地中枢运行' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '智能音箱会一直在听吗？', a: '云端语音助手在本地等待唤醒词，然后把随后的音频发到云端处理。这意味着你说出的查询会被传输并可能被保留。本地语音助手则把一切都在你的硬件上处理。' },
          { q: '我的摄像头画面去哪儿了？', a: '云端摄像头把画面上传到厂商服务器，在那里存储，并常常置于订阅之后。使用 Frigate 的本地配置把画面留在你自己的硬件上，因此永不离开家门。' },
          { q: '我能停止数据收集吗？', a: '对云端设备，你可以通过设置加以限制，但很少能彻底停止。可靠的办法是改用支持本地的设备和本地中枢，从根本上让数据不被发送给厂商。' },
          { q: '本地智能家居真的私密吗？', a: '是的。有了本地中枢、本地语音和本地AI，设备数据、录像和自动化都在你的硬件上、没有外部处理方。这正是本地优先配置在设计上私密的原因。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 完整的解决办法',
          '[构建符合 GDPR 的私密智能家居](/zh/smart-home/private-smart-home-gdpr) — 欧盟隐私角度',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 私密的本地AI控制',
          '[什么是本地LLM](/zh/local-llms/what-are-local-llms) — 跨集群：私密本地AI',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '智能家居隐私风险（2026）：你的设备知道什么',
      description: '智能家居隐私风险2026年全面解析：云端使用数据收集、始终聆听的麦克风、摄像头画面上传、数据泄露事件与第三方共享现状，以及本地优先控制架构如何从根本上解决上述隐私问题。',
      url: 'https://www.promptquorum.com/zh/smart-home/smart-home-privacy-risks',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '智能家居隐私' }, { '@type': 'Thing', name: '数据收集' }, { '@type': 'Thing', name: '本地控制' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '智能音箱会一直在听吗？', acceptedAnswer: { '@type': 'Answer', text: '云端语音助手在本地等待唤醒词，然后把随后的音频发到云端处理，因此你的查询会被传输并可能被保留。本地助手把一切在你的硬件上处理。' } },
        { '@type': 'Question', name: '我的摄像头画面去哪儿了？', acceptedAnswer: { '@type': 'Answer', text: '云端摄像头把画面上传到厂商服务器，常置于订阅之后。使用 Frigate 的本地配置把画面留在你自己的硬件上。' } },
        { '@type': 'Question', name: '我能停止数据收集吗？', acceptedAnswer: { '@type': 'Answer', text: '对云端设备可以限制，但很少能彻底停止。可靠的办法是改用支持本地的设备和本地中枢。' } },
        { '@type': 'Question', name: '本地智能家居真的私密吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。有了本地中枢、本地语音和本地AI，设备数据、录像和自动化都在你的硬件上、没有外部处理方。' } },
      ],
    },
  },
}
