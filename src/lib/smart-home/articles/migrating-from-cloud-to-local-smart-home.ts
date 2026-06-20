import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'How to Migrate from a Cloud Smart Home to Local Control (2026)',
    seoTitle: 'Migrate Alexa to Home Assistant: Local Control (2026)',
    intro:
      'Migrating from a cloud smart home to local control means auditing your cloud dependencies, moving devices to a local hub, and retiring cloud assistants. This step-by-step guide shows how to audit, which devices can go local, when to replace versus re-pair, how to move to Home Assistant, and how to add a local voice assistant in place of Alexa or Google.',
    metaDescription:
      'Migrate from a cloud smart home to local control: audit dependencies, move devices to Home Assistant, retire Alexa/Google, and add local voice. Step by step.',
    twitterDescription:
      'Move from Alexa/Google to a local smart home: audit cloud dependencies, re-pair or replace devices, switch to Home Assistant, add local voice.',
    readTime: '9 min read',
    educationalLevel: 'Intermediate',
    audience: 'Existing cloud smart home users moving to local control',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'migrate from alexa to home assistant',
      'cloud to local smart home',
      'replace alexa with home assistant',
      'move smart home to local',
      'leave google home',
    ],
    leadAnswerBlock:
      '**Migrate by auditing your cloud dependencies, moving local-capable devices to Home Assistant (re-pairing where possible, replacing where not), and retiring Alexa or Google in favour of a local voice assistant.** Do it room by room so the home keeps working throughout.',
    quickAnswerTop: {
      en: {
        question: 'How do I migrate from a cloud smart home to local control?',
        answer:
          'List your devices and which depend on a cloud, move local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi) onto Home Assistant by re-pairing them, replace cloud-only devices over time, and retire Alexa or Google by adding a local voice assistant. Migrate gradually, one room at a time.',
        bullets: [
          'Audit which devices depend on a vendor cloud',
          'Re-pair local-capable devices to Home Assistant',
          'Replace cloud-only devices gradually',
          'Add local voice to replace Alexa/Google',
          'Migrate room by room to avoid downtime',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'Audit Cloud Dependencies', anchor: 'audit' },
      { label: 'Which Devices Can Go Local', anchor: 'which-local' },
      { label: 'Replace vs Re-pair', anchor: 'replace-repair' },
      { label: 'Move to Home Assistant', anchor: 'move-ha' },
      { label: 'Retire Alexa/Google', anchor: 'retire' },
      { label: 'Add Local Voice', anchor: 'local-voice' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migrate to local by auditing cloud dependencies, re-pairing local-capable devices to Home Assistant, replacing cloud-only ones, and adding local voice.' },
      { type: 'plain-terms', content: 'Switching from a cloud smart home to a local one does not mean throwing everything out. Many devices already speak local protocols and just need re-pairing to a local hub. You replace the cloud-only ones over time and swap your cloud voice assistant for a local one.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Start by auditing which devices depend on a vendor cloud',
          'Local-capable devices (Zigbee, Z-Wave, Matter, local Wi-Fi) can re-pair to Home Assistant',
          'Replace cloud-only devices gradually rather than all at once',
          'Move control and automations onto a local Home Assistant hub',
          'Retire Alexa/Google by adding a local voice assistant',
          'Migrate room by room so the home keeps working throughout',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Audit Your Cloud Dependencies',
        content:
          '**List every device and note which need a vendor cloud to function.** This tells you what can re-pair locally and what must be replaced.',
        numberedItems: [
          'Inventory your devices by room and brand.',
          'Note the protocol each uses (Zigbee, Z-Wave, Matter, Wi-Fi).',
          'Flag devices that require a cloud account for basic control.',
          'Identify which automations currently run in a vendor cloud.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Which Devices Can Go Local',
        content:
          '**Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can move to local control; cloud-only devices generally cannot without replacement.** Check the protocol first.',
        items: [
          'Zigbee and Z-Wave devices re-pair to a coordinator on your hub.',
          'Matter devices can commission to a local controller — see [Matter local control](/smart-home/matter-local-control-guide).',
          'Local-Wi-Fi devices with a documented local API can be controlled locally.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Replace vs Re-pair',
        content:
          '**Re-pair local-capable devices to your hub; replace cloud-only devices over time as budget allows.** Prioritise replacing the highest-privacy-risk cloud devices first.',
        columns: ['Device type', 'Can go local?', 'How' ],
        rows: [
          { 'Device type': 'Zigbee/Z-Wave bulbs & sensors', 'Can go local?': 'Yes', 'How': 'Re-pair to a coordinator on the hub' },
          { 'Device type': 'Matter devices', 'Can go local?': 'Yes', 'How': 'Commission to a local controller' },
          { 'Device type': 'Local-Wi-Fi devices (local API)', 'Can go local?': 'Yes', 'How': 'Add via integration' },
          { 'Device type': 'Cloud-only cameras', 'Can go local?': 'Often no', 'How': 'Replace with local RTSP + Frigate' },
          { 'Device type': 'Cloud voice assistants', 'Can go local?': 'Replace', 'How': 'Add local voice assistant' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Move to Home Assistant',
        content:
          '**Set up Home Assistant as your local hub and migrate devices and automations onto it.** This becomes the control plane that replaces the vendor cloud.',
        items: [
          'Install Home Assistant and add a Zigbee/Z-Wave coordinator — see [Home Assistant getting started](/smart-home/home-assistant-getting-started).',
          'Re-pair devices and rebuild automations locally.',
          'Confirm everything works offline before retiring cloud services.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Retire Alexa/Google',
        content:
          '**Once local control and a local voice assistant work, retire the cloud assistants and accounts.** Do this last so you keep voice control during the transition.',
        items: [
          'Verify local control covers what you used Alexa/Google for.',
          'Remove devices from the vendor apps and disable the accounts.',
          'Keep deterministic safety automations on the local hub.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Add Local Voice',
        content:
          '**Replace cloud voice with a local assistant so you keep hands-free control without the cloud.** This is the final step of a full migration.',
        items: [
          'Build a local voice assistant with Assist + Whisper + Piper — see [the local voice assistant guide](/smart-home/local-voice-assistant-smart-home).',
          'Add a local LLM for natural-language understanding — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'For the full destination state, see [the complete local smart home guide](/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Can I keep my existing devices?', a: 'Many of them, yes. Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can re-pair to a local hub like Home Assistant. Only cloud-only devices that require a vendor account for basic control need replacing over time.' },
          { q: 'What can\'t go local?', a: 'Cloud-only devices that depend entirely on a vendor cloud — often some cameras, doorbells, and proprietary ecosystems — generally cannot go local and need replacing with local-capable alternatives such as RTSP cameras paired with Frigate.' },
          { q: 'How long does migration take?', a: 'It varies with the size of your setup, but migrating room by room spreads the work and avoids downtime. Many people move the core hub and a few rooms in a weekend, then replace cloud-only devices gradually over weeks.' },
          { q: 'Do I lose voice control when I migrate?', a: 'No, if you add a local voice assistant before retiring the cloud one. A local stack of Assist, Whisper, and Piper, optionally with a local LLM, replaces Alexa or Google for hands-free control without the cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — set up the destination hub',
          '[The Complete Guide to a Local Smart Home](/smart-home/local-smart-home-complete-guide) — the end state',
          '[Build a Fully Local Voice Assistant](/smart-home/local-voice-assistant-smart-home) — replace Alexa/Google',
          '[Matter & Local Control](/smart-home/matter-local-control-guide) — commission devices locally',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'How to Migrate from a Cloud Smart Home to Local Control (2026)',
      description: 'Migrate from a cloud smart home to local control: audit dependencies, move devices to Home Assistant, retire Alexa/Google, and add local voice. Step by step.',
      url: 'https://www.promptquorum.com/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart home migration' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Local control' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can I keep my existing devices?', acceptedAnswer: { '@type': 'Answer', text: 'Many of them. Devices using Zigbee, Z-Wave, Matter, or a local Wi-Fi API can re-pair to a local hub. Only cloud-only devices that need a vendor account for basic control need replacing.' } },
        { '@type': 'Question', name: 'What can\'t go local?', acceptedAnswer: { '@type': 'Answer', text: 'Cloud-only devices that depend entirely on a vendor cloud — often some cameras and doorbells — generally need replacing with local-capable alternatives like RTSP cameras with Frigate.' } },
        { '@type': 'Question', name: 'How long does migration take?', acceptedAnswer: { '@type': 'Answer', text: 'It varies with setup size, but migrating room by room avoids downtime. Many move the core hub and a few rooms in a weekend, then replace cloud-only devices over weeks.' } },
        { '@type': 'Question', name: 'Do I lose voice control when I migrate?', acceptedAnswer: { '@type': 'Answer', text: 'No, if you add a local voice assistant before retiring the cloud one. Assist, Whisper, and Piper, optionally with a local LLM, replace Alexa or Google without the cloud.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'كيفية الانتقال من منزل ذكي سحابي إلى التحكم المحلي (⁨2026⁩)',
    seoTitle: 'الانتقال إلى ⁨Home Assistant 2026⁩: تحكم محلي',
    intro:
      'الانتقال من منزل ذكي سحابي إلى التحكم المحلي يعني مراجعة اعتمادياتك السحابية، ونقل الأجهزة إلى مركز محلي، وإيقاف المساعدات السحابية. يوضح هذا الدليل خطوة بخطوة كيفية المراجعة، والأجهزة التي يمكن أن تصبح محلية، ومتى تستبدل مقابل إعادة الإقران، وكيفية الانتقال إلى Home Assistant، وكيفية إضافة مساعد صوتي محلي بدلًا من Alexa أو Google.',
    metaDescription:
      '4 خطوات للانتقال من Alexa وGoogle إلى Home Assistant: راجع الاعتماديات السحابية، أعِد إقران الأجهزة، أضِف صوتًا محليًا. دليل خطوة بخطوة.',
    twitterDescription:
      'الانتقال من Alexa/Google إلى منزل ذكي محلي: مراجعة الاعتماديات السحابية، وإعادة إقران الأجهزة أو استبدالها، والتحويل إلى Home Assistant، وإضافة صوت محلي.',
    readTime: '9 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'مستخدمو المنزل الذكي السحابي الحاليون الذين ينتقلون إلى التحكم المحلي',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'الانتقال من alexa إلى home assistant',
      'منزل ذكي سحابي إلى محلي',
      'استبدال alexa بـ home assistant',
      'نقل المنزل الذكي إلى محلي',
      'مغادرة google home',
    ],
    leadAnswerBlock:
      '**انتقل بمراجعة اعتمادياتك السحابية، ونقل الأجهزة القادرة على العمل محليًا إلى Home Assistant (إعادة إقران حيثما أمكن، واستبدال حيثما تعذَّر)، وإيقاف Alexa أو Google لصالح مساعد صوتي محلي.** افعل ذلك غرفةً تلو الأخرى حتى يبقى المنزل يعمل طوال الانتقال.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أنتقل من منزل ذكي سحابي إلى التحكم المحلي؟',
        answer:
          'أحصِ أجهزتك وأيها يعتمد على سحابة، وانقل الأجهزة القادرة على العمل محليًا (Zigbee، Z-Wave، Matter، Wi-Fi المحلي) إلى Home Assistant بإعادة إقرانها، واستبدل الأجهزة السحابية فقط تدريجيًا، وأوقِف Alexa أو Google بإضافة مساعد صوتي محلي. انتقل تدريجيًا، غرفةً في كل مرة.',
        bullets: [
          'راجع أي الأجهزة تعتمد على سحابة مورِّد',
          'أعِد إقران الأجهزة القادرة على العمل محليًا بـ Home Assistant',
          'استبدل الأجهزة السحابية فقط تدريجيًا',
          'أضف صوتًا محليًا لاستبدال Alexa/Google',
          'انتقل غرفةً تلو الأخرى لتجنب الانقطاع',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'مراجعة الاعتماديات السحابية', anchor: 'audit' },
      { label: 'أي الأجهزة يمكن أن تصبح محلية', anchor: 'which-local' },
      { label: 'الاستبدال مقابل إعادة الإقران', anchor: 'replace-repair' },
      { label: 'الانتقال إلى Home Assistant', anchor: 'move-ha' },
      { label: 'إيقاف Alexa/Google', anchor: 'retire' },
      { label: 'إضافة صوت محلي', anchor: 'local-voice' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'انتقل إلى المحلي بمراجعة الاعتماديات السحابية، وإعادة إقران الأجهزة القادرة على العمل محليًا بـ Home Assistant، واستبدال السحابية فقط، وإضافة صوت محلي.' },
      { type: 'plain-terms', content: 'الانتقال من منزل ذكي سحابي إلى محلي لا يعني التخلص من كل شيء. كثير من الأجهزة تتحدث بالفعل بروتوكولات محلية وتحتاج فقط إعادة إقران بمركز محلي. تستبدل الأجهزة السحابية فقط تدريجيًا وتبدل مساعدك الصوتي السحابي بمحلي.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'ابدأ بمراجعة أي الأجهزة تعتمد على سحابة مورِّد',
          'الأجهزة القادرة على العمل محليًا (Zigbee، Z-Wave، Matter، Wi-Fi المحلي) يمكن إعادة إقرانها بـ Home Assistant',
          'استبدل الأجهزة السحابية فقط تدريجيًا لا دفعةً واحدة',
          'انقل التحكم والأتمتة إلى مركز Home Assistant المحلي',
          'أوقِف Alexa/Google بإضافة مساعد صوتي محلي',
          'انتقل غرفةً تلو الأخرى حتى يبقى المنزل يعمل طوال الانتقال',
        ],
      },
      audit: {
        id: 'audit',
        title: 'مراجعة اعتمادياتك السحابية',
        content:
          '**أحصِ كل جهاز ولاحظ أيها يحتاج سحابة مورِّد للعمل.** هذا يُخبرك بما يمكن إعادة إقرانه محليًا وما يجب استبداله.',
        numberedItems: [
          'جرِّد أجهزتك حسب الغرفة والعلامة التجارية.',
          'لاحظ البروتوكول الذي يستخدمه كل منها (Zigbee، Z-Wave، Matter، Wi-Fi).',
          'ضع علامة على الأجهزة التي تتطلب حساب سحابي للتحكم الأساسي.',
          'حدِّد الأتمتة التي تعمل حاليًا في سحابة مورِّد.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'أي الأجهزة يمكن أن تصبح محلية',
        content:
          '**الأجهزة التي تستخدم Zigbee أو Z-Wave أو Matter أو واجهة برمجية محلية لـ Wi-Fi يمكن نقلها للتحكم المحلي؛ الأجهزة السحابية فقط عمومًا لا يمكن ذلك دون استبدال.** تحقق من البروتوكول أولًا.',
        items: [
          'أجهزة Zigbee وZ-Wave تُعاد إقرانها بمنسِّق على مركزك.',
          'أجهزة Matter يمكن توصيلها بمتحكم محلي — راجع [التحكم المحلي بـ Matter](/ar/smart-home/matter-local-control-guide).',
          'أجهزة Wi-Fi المحلية بواجهة برمجية محلية موثَّقة يمكن التحكم فيها محليًا.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'الاستبدال مقابل إعادة الإقران',
        content:
          '**أعِد إقران الأجهزة القادرة على العمل محليًا بمركزك؛ استبدل الأجهزة السحابية فقط تدريجيًا حسب الميزانية.** أولوِّل استبدال الأجهزة السحابية الأعلى خطرًا على الخصوصية أولًا.',
        columns: ['نوع الجهاز', 'يمكن أن يصبح محليًا؟', 'الطريقة'],
        rows: [
          { 'نوع الجهاز': 'مصابيح وأجهزة استشعار Zigbee/Z-Wave', 'يمكن أن يصبح محليًا؟': 'نعم', 'الطريقة': 'إعادة إقران بمنسِّق على المركز' },
          { 'نوع الجهاز': 'أجهزة Matter', 'يمكن أن يصبح محليًا؟': 'نعم', 'الطريقة': 'توصيل بمتحكم محلي' },
          { 'نوع الجهاز': 'أجهزة Wi-Fi محلية (واجهة برمجية محلية)', 'يمكن أن يصبح محليًا؟': 'نعم', 'الطريقة': 'إضافة عبر التكامل' },
          { 'نوع الجهاز': 'كاميرات سحابية فقط', 'يمكن أن يصبح محليًا؟': 'غالبًا لا', 'الطريقة': 'استبدال بـ RTSP محلي + Frigate' },
          { 'نوع الجهاز': 'مساعدات صوتية سحابية', 'يمكن أن يصبح محليًا؟': 'استبدال', 'الطريقة': 'إضافة مساعد صوتي محلي' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'الانتقال إلى Home Assistant',
        content:
          '**أعدّ Home Assistant كمركزك المحلي وانقل الأجهزة والأتمتة إليه.** يصبح هذا طبقة التحكم التي تحل محل السحابة.',
        items: [
          'ثبِّت Home Assistant وأضف منسِّق Zigbee/Z-Wave — راجع [بدء استخدام Home Assistant](/ar/smart-home/home-assistant-getting-started).',
          'أعِد إقران الأجهزة وأعِد بناء الأتمتة محليًا.',
          'تأكد من أن كل شيء يعمل دون إنترنت قبل إيقاف الخدمات السحابية.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'إيقاف Alexa/Google',
        content:
          '**بمجرد أن يعمل التحكم المحلي والمساعد الصوتي المحلي، أوقِف المساعدات السحابية والحسابات.** افعل هذا أخيرًا حتى تحتفظ بالتحكم الصوتي أثناء الانتقال.',
        items: [
          'تحقق من أن التحكم المحلي يغطي ما كنت تستخدم Alexa/Google من أجله.',
          'أزِل الأجهزة من تطبيقات المورِّد وأوقِف الحسابات.',
          'احتفظ بالأتمتة الأمنية الحتمية على المركز المحلي.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'إضافة صوت محلي',
        content:
          '**استبدل الصوت السحابي بمساعد محلي حتى تحتفظ بالتحكم دون اليدين بدون السحابة.** هذه هي الخطوة الأخيرة من الانتقال الكامل.',
        items: [
          'ابنِ مساعدًا صوتيًا محليًا مع Assist + Whisper + Piper — راجع [دليل المساعد الصوتي المحلي](/ar/smart-home/local-voice-assistant-smart-home).',
          'أضف نموذجًا لغويًا محليًا لفهم اللغة الطبيعية — راجع [تشغيل منزلك الذكي بنموذج لغوي محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
          'للحالة النهائية الكاملة، راجع [الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'هل يمكنني الاحتفاظ بأجهزتي الحالية؟', a: 'كثيرًا منها، نعم. الأجهزة التي تستخدم Zigbee أو Z-Wave أو Matter أو واجهة برمجية محلية لـ Wi-Fi يمكن إعادة إقرانها بمركز محلي مثل Home Assistant. فقط الأجهزة السحابية فقط التي تتطلب حساب مورِّد للتحكم الأساسي تحتاج الاستبدال تدريجيًا.' },
          { q: 'ما الذي لا يمكن أن يصبح محليًا؟', a: 'الأجهزة السحابية فقط التي تعتمد كليًا على سحابة مورِّد — كثيرًا بعض الكاميرات وأجراس الباب والمنظومات المملوكة — عمومًا لا يمكن أن تصبح محلية وتحتاج الاستبدال ببدائل قادرة على العمل محليًا مثل كاميرات RTSP مع Frigate.' },
          { q: 'كم يستغرق الانتقال؟', a: 'يتفاوت بحسب حجم إعدادك، لكن الانتقال غرفةً تلو الأخرى يوزع العمل ويتجنب الانقطاع. كثير من الناس ينقلون المركز الأساسي وبضع غرف في عطلة نهاية أسبوع، ثم يستبدلون الأجهزة السحابية فقط تدريجيًا على مدى أسابيع.' },
          { q: 'هل أفقد التحكم الصوتي عند الانتقال؟', a: 'لا، إذا أضفت مساعدًا صوتيًا محليًا قبل إيقاف السحابي. Assist وWhisper وPiper، اختياريًا مع نموذج لغوي محلي، يحلون محل Alexa أو Google للتحكم دون اليدين بدون السحابة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'مقالات ذات صلة',
        items: [
          '[Home Assistant: دليل البدء](/ar/smart-home/home-assistant-getting-started) — أعدّ المركز المستهدف',
          '[الدليل الشامل للمنزل الذكي المحلي](/ar/smart-home/local-smart-home-complete-guide) — الحالة النهائية',
          '[بناء مساعد صوتي محلي كامل](/ar/smart-home/local-voice-assistant-smart-home) — استبدال Alexa/Google',
          '[Matter والتحكم المحلي](/ar/smart-home/matter-local-control-guide) — توصيل الأجهزة محليًا',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كيفية الانتقال من منزل ذكي سحابي إلى التحكم المحلي (2026)',
      description: 'الانتقال من منزل ذكي سحابي إلى التحكم المحلي: مراجعة الاعتماديات، ونقل الأجهزة إلى Home Assistant، وإيقاف Alexa/Google، وإضافة صوت محلي. خطوة بخطوة.',
      url: 'https://www.promptquorum.com/ar/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'الانتقال للمنزل الذكي المحلي' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'التحكم المحلي' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يمكنني الاحتفاظ بأجهزتي الحالية؟', acceptedAnswer: { '@type': 'Answer', text: 'كثيرًا منها. الأجهزة التي تستخدم Zigbee أو Z-Wave أو Matter أو واجهة برمجية محلية لـ Wi-Fi يمكن إعادة إقرانها بمركز محلي. فقط الأجهزة السحابية فقط التي تحتاج حساب مورِّد للتحكم الأساسي تحتاج الاستبدال.' } },
        { '@type': 'Question', name: 'ما الذي لا يمكن أن يصبح محليًا؟', acceptedAnswer: { '@type': 'Answer', text: 'الأجهزة السحابية فقط التي تعتمد كليًا على سحابة مورِّد — كثيرًا بعض الكاميرات وأجراس الباب — عمومًا تحتاج الاستبدال ببدائل محلية مثل كاميرات RTSP مع Frigate.' } },
        { '@type': 'Question', name: 'كم يستغرق الانتقال؟', acceptedAnswer: { '@type': 'Answer', text: 'يتفاوت بحسب حجم الإعداد، لكن الانتقال غرفةً تلو الأخرى يتجنب الانقطاع. كثير ينقلون المركز الأساسي وبضع غرف في عطلة نهاية أسبوع ثم يستبدلون الأجهزة السحابية تدريجيًا.' } },
        { '@type': 'Question', name: 'هل أفقد التحكم الصوتي عند الانتقال؟', acceptedAnswer: { '@type': 'Answer', text: 'لا، إذا أضفت مساعدًا صوتيًا محليًا قبل إيقاف السحابي. Assist وWhisper وPiper، اختياريًا مع نموذج لغوي محلي، يحلون محل Alexa أو Google بدون السحابة.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Von einem Cloud-Smart-Home zu lokaler Steuerung migrieren (2026)',
    seoTitle: 'Alexa zu Home Assistant migrieren: lokal (2026)',
    intro:
      'Von einem Cloud-Smart-Home zu lokaler Steuerung zu migrieren bedeutet, Ihre Cloud-Abhängigkeiten zu prüfen, Geräte auf einen lokalen Hub zu verschieben und Cloud-Assistenten außer Dienst zu stellen. Dieser Schritt-für-Schritt-Leitfaden zeigt, wie Sie prüfen, welche Geräte lokal können, wann ersetzen statt neu koppeln, wie Sie zu Home Assistant wechseln und einen lokalen Sprachassistenten anstelle von Alexa oder Google hinzufügen.',
    metaDescription:
      'Cloud-Smart-Home zu Home Assistant migrieren 2026: Abhängigkeiten prüfen, Geräte verschieben, Alexa/Google ersetzen, lokale Sprache hinzufügen.',
    twitterDescription:
      'Von Alexa/Google zu einem lokalen Smart Home wechseln: Cloud-Abhängigkeiten prüfen, Geräte neu koppeln oder ersetzen, zu Home Assistant wechseln, lokale Sprache hinzufügen.',
    readTime: '9 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Bestehende Cloud-Smart-Home-Nutzer, die zu lokaler Steuerung wechseln',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'von alexa zu home assistant migrieren',
      'cloud zu lokal smart home',
      'alexa durch home assistant ersetzen',
      'smart home auf lokal umstellen',
      'google home verlassen',
    ],
    leadAnswerBlock:
      '**Migrieren Sie, indem Sie Ihre Cloud-Abhängigkeiten prüfen, lokal-fähige Geräte zu Home Assistant verschieben (wo möglich neu koppeln, wo nicht ersetzen) und Alexa oder Google zugunsten eines lokalen Sprachassistenten außer Dienst stellen.** Tun Sie das Raum für Raum, damit das Zuhause durchgehend funktioniert.',
    quickAnswerTop: {
      de: {
        question: 'Wie migriere ich von einem Cloud-Smart-Home zu lokaler Steuerung?',
        answer:
          'Listen Sie Ihre Geräte auf und welche von einer Cloud abhängen, verschieben Sie lokal-fähige Geräte (Zigbee, Z-Wave, Matter, lokales WLAN) auf Home Assistant durch Neukopplung, ersetzen Sie nur-Cloud-Geräte mit der Zeit und stellen Sie Alexa oder Google außer Dienst, indem Sie einen lokalen Sprachassistenten hinzufügen. Migrieren Sie schrittweise, Raum für Raum.',
        bullets: [
          'Prüfen, welche Geräte von einer Hersteller-Cloud abhängen',
          'Lokal-fähige Geräte neu mit Home Assistant koppeln',
          'Nur-Cloud-Geräte schrittweise ersetzen',
          'Lokale Sprache als Ersatz für Alexa/Google hinzufügen',
          'Raum für Raum migrieren, um Ausfälle zu vermeiden',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Cloud-Abhängigkeiten prüfen', anchor: 'audit' },
      { label: 'Welche Geräte lokal können', anchor: 'which-local' },
      { label: 'Ersetzen vs neu koppeln', anchor: 'replace-repair' },
      { label: 'Zu Home Assistant wechseln', anchor: 'move-ha' },
      { label: 'Alexa/Google außer Dienst stellen', anchor: 'retire' },
      { label: 'Lokale Sprache hinzufügen', anchor: 'local-voice' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migrieren Sie zu lokal, indem Sie Cloud-Abhängigkeiten prüfen, lokal-fähige Geräte neu mit Home Assistant koppeln, nur-Cloud-Geräte ersetzen und lokale Sprache hinzufügen.' },
      { type: 'plain-terms', content: 'Von einem Cloud-Smart-Home zu einem lokalen zu wechseln bedeutet nicht, alles wegzuwerfen. Viele Geräte sprechen bereits lokale Protokolle und müssen nur neu mit einem lokalen Hub gekoppelt werden. Die nur-Cloud-Geräte ersetzen Sie mit der Zeit und tauschen Ihren Cloud-Sprachassistenten gegen einen lokalen.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Beginnen Sie mit der Prüfung, welche Geräte von einer Hersteller-Cloud abhängen',
          'Lokal-fähige Geräte (Zigbee, Z-Wave, Matter, lokales WLAN) lassen sich neu mit Home Assistant koppeln',
          'Ersetzen Sie nur-Cloud-Geräte schrittweise statt alle auf einmal',
          'Verschieben Sie Steuerung und Automatisierungen auf einen lokalen Home-Assistant-Hub',
          'Stellen Sie Alexa/Google außer Dienst, indem Sie einen lokalen Sprachassistenten hinzufügen',
          'Migrieren Sie Raum für Raum, damit das Zuhause durchgehend funktioniert',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Ihre Cloud-Abhängigkeiten prüfen',
        content:
          '**Listen Sie jedes Gerät auf und notieren Sie, welche eine Hersteller-Cloud zum Funktionieren brauchen.** Das zeigt Ihnen, was lokal neu gekoppelt werden kann und was ersetzt werden muss.',
        numberedItems: [
          'Inventarisieren Sie Ihre Geräte nach Raum und Marke.',
          'Notieren Sie das Protokoll, das jedes nutzt (Zigbee, Z-Wave, Matter, WLAN).',
          'Markieren Sie Geräte, die für die Grundsteuerung ein Cloud-Konto verlangen.',
          'Ermitteln Sie, welche Automatisierungen derzeit in einer Hersteller-Cloud laufen.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Welche Geräte lokal können',
        content:
          '**Geräte mit Zigbee, Z-Wave, Matter oder einer lokalen WLAN-API können auf lokale Steuerung umziehen; nur-Cloud-Geräte können das in der Regel nicht ohne Ersatz.** Prüfen Sie zuerst das Protokoll.',
        items: [
          'Zigbee- und Z-Wave-Geräte koppeln sich neu an einen Koordinator an Ihrem Hub.',
          'Matter-Geräte lassen sich in einen lokalen Controller einbinden – siehe [Matter lokale Steuerung](/de/smart-home/matter-local-control-guide).',
          'Lokale-WLAN-Geräte mit dokumentierter lokaler API lassen sich lokal steuern.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Ersetzen vs neu koppeln',
        content:
          '**Koppeln Sie lokal-fähige Geräte neu an Ihren Hub; ersetzen Sie nur-Cloud-Geräte mit der Zeit, wie das Budget es erlaubt.** Ersetzen Sie zuerst die Cloud-Geräte mit dem höchsten Datenschutzrisiko.',
        columns: ['Gerätetyp', 'Kann lokal?', 'Wie'],
        rows: [
          { 'Gerätetyp': 'Zigbee/Z-Wave-Leuchtmittel & -Sensoren', 'Kann lokal?': 'Ja', 'Wie': 'Neu an einen Koordinator am Hub koppeln' },
          { 'Gerätetyp': 'Matter-Geräte', 'Kann lokal?': 'Ja', 'Wie': 'In einen lokalen Controller einbinden' },
          { 'Gerätetyp': 'Lokale-WLAN-Geräte (lokale API)', 'Kann lokal?': 'Ja', 'Wie': 'Über Integration hinzufügen' },
          { 'Gerätetyp': 'Nur-Cloud-Kameras', 'Kann lokal?': 'Oft nein', 'Wie': 'Durch lokale RTSP + Frigate ersetzen' },
          { 'Gerätetyp': 'Cloud-Sprachassistenten', 'Kann lokal?': 'Ersetzen', 'Wie': 'Lokalen Sprachassistenten hinzufügen' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Zu Home Assistant wechseln',
        content:
          '**Richten Sie Home Assistant als Ihren lokalen Hub ein und migrieren Sie Geräte und Automatisierungen darauf.** Das wird zur Steuerungsebene, die die Hersteller-Cloud ersetzt.',
        items: [
          'Installieren Sie Home Assistant und fügen Sie einen Zigbee-/Z-Wave-Koordinator hinzu – siehe [Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Koppeln Sie Geräte neu und bauen Sie Automatisierungen lokal nach.',
          'Bestätigen Sie, dass alles offline funktioniert, bevor Sie Cloud-Dienste außer Dienst stellen.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Alexa/Google außer Dienst stellen',
        content:
          '**Sobald lokale Steuerung und ein lokaler Sprachassistent funktionieren, stellen Sie die Cloud-Assistenten und -Konten außer Dienst.** Tun Sie das zuletzt, damit Sie während des Übergangs die Sprachsteuerung behalten.',
        items: [
          'Prüfen Sie, ob die lokale Steuerung abdeckt, wofür Sie Alexa/Google genutzt haben.',
          'Entfernen Sie Geräte aus den Hersteller-Apps und deaktivieren Sie die Konten.',
          'Behalten Sie deterministische Sicherheits-Automatisierungen auf dem lokalen Hub.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Lokale Sprache hinzufügen',
        content:
          '**Ersetzen Sie Cloud-Sprache durch einen lokalen Assistenten, damit Sie freihändige Steuerung ohne die Cloud behalten.** Das ist der letzte Schritt einer vollständigen Migration.',
        items: [
          'Bauen Sie einen lokalen Sprachassistenten mit Assist + Whisper + Piper – siehe [der Leitfaden zum lokalen Sprachassistenten](/de/smart-home/local-voice-assistant-smart-home).',
          'Fügen Sie ein lokales LLM für natürlichsprachliches Verstehen hinzu – siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
          'Für den vollständigen Zielzustand siehe [der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Kann ich meine vorhandenen Geräte behalten?', a: 'Viele davon, ja. Geräte mit Zigbee, Z-Wave, Matter oder einer lokalen WLAN-API lassen sich neu mit einem lokalen Hub wie Home Assistant koppeln. Nur nur-Cloud-Geräte, die für die Grundsteuerung ein Hersteller-Konto verlangen, müssen mit der Zeit ersetzt werden.' },
          { q: 'Was kann nicht lokal werden?', a: 'Nur-Cloud-Geräte, die vollständig von einer Hersteller-Cloud abhängen – oft manche Kameras, Türklingeln und proprietäre Ökosysteme – können in der Regel nicht lokal werden und müssen durch lokal-fähige Alternativen ersetzt werden, etwa RTSP-Kameras mit Frigate.' },
          { q: 'Wie lange dauert die Migration?', a: 'Das hängt von der Größe Ihres Setups ab, aber Raum für Raum zu migrieren verteilt die Arbeit und vermeidet Ausfälle. Viele verschieben den Kern-Hub und ein paar Räume an einem Wochenende und ersetzen nur-Cloud-Geräte dann über Wochen schrittweise.' },
          { q: 'Verliere ich die Sprachsteuerung bei der Migration?', a: 'Nein, wenn Sie einen lokalen Sprachassistenten hinzufügen, bevor Sie den Cloud-Assistenten außer Dienst stellen. Ein lokaler Stack aus Assist, Whisper und Piper, optional mit einem lokalen LLM, ersetzt Alexa oder Google für freihändige Steuerung ohne die Cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – den Ziel-Hub einrichten',
          '[Der komplette Leitfaden zum lokalen Smart Home](/de/smart-home/local-smart-home-complete-guide) – der Endzustand',
          '[Einen vollständig lokalen Sprachassistenten bauen](/de/smart-home/local-voice-assistant-smart-home) – Alexa/Google ersetzen',
          '[Matter & lokale Steuerung](/de/smart-home/matter-local-control-guide) – Geräte lokal einbinden',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Von einem Cloud-Smart-Home zu lokaler Steuerung migrieren (2026)',
      description: 'Cloud-Smart-Home zu Home Assistant migrieren 2026: Abhängigkeiten prüfen, Geräte verschieben, Alexa/Google ersetzen, lokale Sprache hinzufügen.',
      url: 'https://www.promptquorum.com/de/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Smart-Home-Migration' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Lokale Steuerung' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Kann ich meine vorhandenen Geräte behalten?', acceptedAnswer: { '@type': 'Answer', text: 'Viele davon. Geräte mit Zigbee, Z-Wave, Matter oder einer lokalen WLAN-API lassen sich neu mit einem lokalen Hub koppeln. Nur nur-Cloud-Geräte, die ein Hersteller-Konto für die Grundsteuerung brauchen, müssen ersetzt werden.' } },
        { '@type': 'Question', name: 'Was kann nicht lokal werden?', acceptedAnswer: { '@type': 'Answer', text: 'Nur-Cloud-Geräte, die vollständig von einer Hersteller-Cloud abhängen – oft manche Kameras und Türklingeln – müssen in der Regel durch lokal-fähige Alternativen wie RTSP-Kameras mit Frigate ersetzt werden.' } },
        { '@type': 'Question', name: 'Wie lange dauert die Migration?', acceptedAnswer: { '@type': 'Answer', text: 'Das hängt von der Setup-Größe ab, aber Raum für Raum zu migrieren vermeidet Ausfälle. Viele verschieben den Kern-Hub und ein paar Räume an einem Wochenende und ersetzen nur-Cloud-Geräte über Wochen.' } },
        { '@type': 'Question', name: 'Verliere ich die Sprachsteuerung bei der Migration?', acceptedAnswer: { '@type': 'Answer', text: 'Nein, wenn Sie einen lokalen Sprachassistenten hinzufügen, bevor Sie den Cloud-Assistenten außer Dienst stellen. Assist, Whisper und Piper, optional mit einem lokalen LLM, ersetzen Alexa oder Google ohne die Cloud.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Cómo Migrar de un Smart Home en la Nube al Control Local (2026)',
    seoTitle: 'Migrar de Alexa a Home Assistant: Control Local (2026)',
    intro:
      'Migrar de un smart home en la nube al control local significa auditar tus dependencias de la nube, mover los dispositivos a un hub local y retirar los asistentes en la nube. Esta guía paso a paso muestra cómo auditar, qué dispositivos pueden ir a local, cuándo reemplazar frente a re-emparejar, cómo pasar a Home Assistant y cómo añadir un asistente de voz local en lugar de Alexa o Google.',
    metaDescription:
      'Migra de smart home en la nube al control local 2026: audita dependencias, pasa a Home Assistant, retira Alexa/Google, añade voz local.',
    twitterDescription:
      'Pasa de Alexa/Google a un smart home local: audita dependencias de la nube, re-empareja o reemplaza dispositivos, cambia a Home Assistant, añade voz local.',
    readTime: '9 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Usuarios de smart home en la nube que pasan al control local',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'migrar de alexa a home assistant',
      'de nube a local smart home',
      'reemplazar alexa con home assistant',
      'pasar smart home a local',
      'dejar google home',
    ],
    leadAnswerBlock:
      '**Migra auditando tus dependencias de la nube, moviendo los dispositivos con capacidad local a Home Assistant (re-emparejando donde se pueda, reemplazando donde no) y retirando Alexa o Google en favor de un asistente de voz local.** Hazlo habitación por habitación para que la casa siga funcionando durante todo el proceso.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo migro de un smart home en la nube al control local?',
        answer:
          'Lista tus dispositivos y cuáles dependen de una nube, mueve los dispositivos con capacidad local (Zigbee, Z-Wave, Matter, Wi-Fi local) a Home Assistant re-emparejándolos, reemplaza los dispositivos solo-nube con el tiempo y retira Alexa o Google añadiendo un asistente de voz local. Migra de forma gradual, una habitación a la vez.',
        bullets: [
          'Audita qué dispositivos dependen de una nube del fabricante',
          'Re-empareja los dispositivos con capacidad local a Home Assistant',
          'Reemplaza los dispositivos solo-nube de forma gradual',
          'Añade voz local para reemplazar Alexa/Google',
          'Migra habitación por habitación para evitar caídas',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Auditar dependencias de la nube', anchor: 'audit' },
      { label: 'Qué dispositivos pueden ir a local', anchor: 'which-local' },
      { label: 'Reemplazar vs re-emparejar', anchor: 'replace-repair' },
      { label: 'Pasar a Home Assistant', anchor: 'move-ha' },
      { label: 'Retirar Alexa/Google', anchor: 'retire' },
      { label: 'Añadir voz local', anchor: 'local-voice' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migra a local auditando las dependencias de la nube, re-emparejando los dispositivos con capacidad local a Home Assistant, reemplazando los solo-nube y añadiendo voz local.' },
      { type: 'plain-terms', content: 'Cambiar de un smart home en la nube a uno local no significa tirarlo todo. Muchos dispositivos ya hablan protocolos locales y solo necesitan re-emparejarse a un hub local. Reemplazas los solo-nube con el tiempo y cambias tu asistente de voz en la nube por uno local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Empieza auditando qué dispositivos dependen de una nube del fabricante',
          'Los dispositivos con capacidad local (Zigbee, Z-Wave, Matter, Wi-Fi local) pueden re-emparejarse a Home Assistant',
          'Reemplaza los dispositivos solo-nube de forma gradual en vez de todos a la vez',
          'Mueve el control y las automatizaciones a un hub local de Home Assistant',
          'Retira Alexa/Google añadiendo un asistente de voz local',
          'Migra habitación por habitación para que la casa siga funcionando',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Audita tus dependencias de la nube',
        content:
          '**Lista cada dispositivo y anota cuáles necesitan una nube del fabricante para funcionar.** Esto te dice qué puede re-emparejarse en local y qué debe reemplazarse.',
        numberedItems: [
          'Inventaria tus dispositivos por habitación y marca.',
          'Anota el protocolo que usa cada uno (Zigbee, Z-Wave, Matter, Wi-Fi).',
          'Marca los dispositivos que requieren una cuenta en la nube para el control básico.',
          'Identifica qué automatizaciones corren actualmente en una nube del fabricante.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Qué dispositivos pueden ir a local',
        content:
          '**Los dispositivos que usan Zigbee, Z-Wave, Matter o una API de Wi-Fi local pueden pasar al control local; los solo-nube en general no pueden sin reemplazo.** Comprueba primero el protocolo.',
        items: [
          'Los dispositivos Zigbee y Z-Wave se re-emparejan a un coordinador en tu hub.',
          'Los dispositivos Matter pueden vincularse a un controlador local — consulta [control local con Matter](/es/smart-home/matter-local-control-guide).',
          'Los dispositivos de Wi-Fi local con una API local documentada pueden controlarse en local.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Reemplazar vs re-emparejar',
        content:
          '**Re-empareja los dispositivos con capacidad local a tu hub; reemplaza los solo-nube con el tiempo según lo permita el presupuesto.** Prioriza reemplazar primero los dispositivos en la nube de mayor riesgo de privacidad.',
        columns: ['Tipo de dispositivo', '¿Puede ir a local?', 'Cómo'],
        rows: [
          { 'Tipo de dispositivo': 'Bombillas y sensores Zigbee/Z-Wave', '¿Puede ir a local?': 'Sí', 'Cómo': 'Re-emparejar a un coordinador en el hub' },
          { 'Tipo de dispositivo': 'Dispositivos Matter', '¿Puede ir a local?': 'Sí', 'Cómo': 'Vincular a un controlador local' },
          { 'Tipo de dispositivo': 'Dispositivos de Wi-Fi local (API local)', '¿Puede ir a local?': 'Sí', 'Cómo': 'Añadir vía integración' },
          { 'Tipo de dispositivo': 'Cámaras solo-nube', '¿Puede ir a local?': 'A menudo no', 'Cómo': 'Reemplazar con RTSP local + Frigate' },
          { 'Tipo de dispositivo': 'Asistentes de voz en la nube', '¿Puede ir a local?': 'Reemplazar', 'Cómo': 'Añadir asistente de voz local' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Pasar a Home Assistant',
        content:
          '**Configura Home Assistant como tu hub local y migra los dispositivos y automatizaciones a él.** Se convierte en el plano de control que reemplaza la nube del fabricante.',
        items: [
          'Instala Home Assistant y añade un coordinador Zigbee/Z-Wave — consulta [Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Re-empareja los dispositivos y reconstruye las automatizaciones en local.',
          'Confirma que todo funciona sin conexión antes de retirar los servicios en la nube.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Retirar Alexa/Google',
        content:
          '**Una vez que el control local y un asistente de voz local funcionen, retira los asistentes y cuentas en la nube.** Hazlo en último lugar para mantener el control por voz durante la transición.',
        items: [
          'Verifica que el control local cubra para lo que usabas Alexa/Google.',
          'Elimina los dispositivos de las apps del fabricante y desactiva las cuentas.',
          'Mantén las automatizaciones de seguridad deterministas en el hub local.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Añadir voz local',
        content:
          '**Reemplaza la voz en la nube por un asistente local para mantener el control manos libres sin la nube.** Es el paso final de una migración completa.',
        items: [
          'Construye un asistente de voz local con Assist + Whisper + Piper — consulta [la guía del asistente de voz local](/es/smart-home/local-voice-assistant-smart-home).',
          'Añade un LLM local para la comprensión de lenguaje natural — consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
          'Para el estado de destino completo, consulta [la guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puedo conservar mis dispositivos actuales?', a: 'Muchos de ellos, sí. Los dispositivos que usan Zigbee, Z-Wave, Matter o una API de Wi-Fi local pueden re-emparejarse a un hub local como Home Assistant. Solo los dispositivos solo-nube que requieren una cuenta del fabricante para el control básico necesitan reemplazarse con el tiempo.' },
          { q: '¿Qué no puede ir a local?', a: 'Los dispositivos solo-nube que dependen por completo de una nube del fabricante —a menudo algunas cámaras, timbres y ecosistemas propietarios— en general no pueden ir a local y necesitan reemplazarse por alternativas con capacidad local, como cámaras RTSP emparejadas con Frigate.' },
          { q: '¿Cuánto tarda la migración?', a: 'Varía con el tamaño de tu configuración, pero migrar habitación por habitación reparte el trabajo y evita caídas. Mucha gente mueve el hub principal y unas pocas habitaciones en un fin de semana, y luego reemplaza los dispositivos solo-nube de forma gradual durante semanas.' },
          { q: '¿Pierdo el control por voz al migrar?', a: 'No, si añades un asistente de voz local antes de retirar el de la nube. Un stack local de Assist, Whisper y Piper, opcionalmente con un LLM local, reemplaza a Alexa o Google para el control manos libres sin la nube.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — configura el hub de destino',
          '[La guía completa del smart home local](/es/smart-home/local-smart-home-complete-guide) — el estado final',
          '[Montar un asistente de voz totalmente local](/es/smart-home/local-voice-assistant-smart-home) — reemplazar Alexa/Google',
          '[Matter y control local](/es/smart-home/matter-local-control-guide) — vincular dispositivos en local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cómo Migrar de un Smart Home en la Nube al Control Local (2026)',
      description: 'Migra de smart home en la nube al control local 2026: audita dependencias, pasa a Home Assistant, retira Alexa/Google, añade voz local.',
      url: 'https://www.promptquorum.com/es/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Migración de smart home' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Control local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Puedo conservar mis dispositivos actuales?', acceptedAnswer: { '@type': 'Answer', text: 'Muchos. Los dispositivos que usan Zigbee, Z-Wave, Matter o una API de Wi-Fi local pueden re-emparejarse a un hub local. Solo los solo-nube que requieren una cuenta del fabricante para el control básico necesitan reemplazarse.' } },
        { '@type': 'Question', name: '¿Qué no puede ir a local?', acceptedAnswer: { '@type': 'Answer', text: 'Los dispositivos solo-nube que dependen por completo de una nube del fabricante —a menudo algunas cámaras y timbres— en general necesitan reemplazarse por alternativas con capacidad local como cámaras RTSP con Frigate.' } },
        { '@type': 'Question', name: '¿Cuánto tarda la migración?', acceptedAnswer: { '@type': 'Answer', text: 'Varía con el tamaño, pero migrar habitación por habitación evita caídas. Mucha gente mueve el hub principal y unas pocas habitaciones en un fin de semana, y reemplaza los solo-nube durante semanas.' } },
        { '@type': 'Question', name: '¿Pierdo el control por voz al migrar?', acceptedAnswer: { '@type': 'Answer', text: 'No, si añades un asistente de voz local antes de retirar el de la nube. Assist, Whisper y Piper, opcionalmente con un LLM local, reemplazan a Alexa o Google sin la nube.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: '클라우드 스마트홈에서 로컬 제어로 이전하는 방법 (2026)',
    seoTitle: 'Alexa에서 Home Assistant로: 로컬 제어 이전 (2026)',
    intro:
      '클라우드 스마트홈에서 로컬 제어로 이전한다는 것은 클라우드 의존성을 감사하고, 기기를 로컬 허브로 이동하며, 클라우드 어시스턴트를 종료하는 것을 의미합니다. 이 단계별 가이드는 감사 방법, 어떤 기기가 로컬로 전환 가능한지, 교체와 재페어링 중 어느 것이 나은지, Home Assistant로 전환하는 방법, Alexa나 Google 대신 로컬 음성 어시스턴트를 추가하는 방법을 설명합니다.',
    metaDescription:
      '클라우드 스마트홈에서 로컬 제어로 이전 2026: 의존성 감사, Home Assistant로 전환, Alexa/Google 종료, 로컬 음성 추가.',
    twitterDescription:
      'Alexa/Google에서 로컬 스마트홈으로: 클라우드 의존성 감사, 기기 재페어링 또는 교체, Home Assistant로 전환, 로컬 음성 추가.',
    readTime: '9분 분량',
    educationalLevel: 'Intermediate',
    audience: '클라우드 스마트홈 사용자로서 로컬 제어로 전환하려는 사용자',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'alexa에서 home assistant로 이전',
      '클라우드에서 로컬 스마트홈으로',
      'alexa 대신 home assistant',
      '스마트홈 로컬로 전환',
      'google home 탈출',
    ],
    leadAnswerBlock:
      '**클라우드 의존성을 감사하고, 로컬 지원 기기를 Home Assistant로 이동(가능하면 재페어링, 불가능하면 교체)하고, Alexa 또는 Google 대신 로컬 음성 어시스턴트를 도입하여 이전하십시오.** 이전 과정 내내 집이 정상 작동하도록 방 단위로 진행하십시오.',
    quickAnswerTop: {
      ko: {
        question: '클라우드 스마트홈에서 로컬 제어로 어떻게 이전합니까?',
        answer:
          '기기 목록을 작성하고 클라우드에 의존하는 기기를 파악하십시오. 로컬 지원 기기(Zigbee, Z-Wave, Matter, 로컬 Wi-Fi)를 재페어링하여 Home Assistant로 이동하고, 클라우드 전용 기기는 점진적으로 교체하며, Alexa 또는 Google을 로컬 음성 어시스턴트로 대체하십시오. 방 단위로 점진적으로 이전하십시오.',
        bullets: [
          '제조사 클라우드에 의존하는 기기를 감사하십시오',
          '로컬 지원 기기를 Home Assistant에 재페어링하십시오',
          '클라우드 전용 기기는 점진적으로 교체하십시오',
          'Alexa/Google을 대체할 로컬 음성을 추가하십시오',
          '다운타임을 피하기 위해 방 단위로 이전하십시오',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '요약', anchor: 'tldr' },
      { label: '클라우드 의존성 감사', anchor: 'audit' },
      { label: '로컬 전환 가능 기기', anchor: 'which-local' },
      { label: '교체 vs 재페어링', anchor: 'replace-repair' },
      { label: 'Home Assistant로 전환', anchor: 'move-ha' },
      { label: 'Alexa/Google 종료', anchor: 'retire' },
      { label: '로컬 음성 추가', anchor: 'local-voice' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '클라우드 의존성을 감사하고, 로컬 지원 기기를 Home Assistant에 재페어링하고, 클라우드 전용 기기를 교체하고, 로컬 음성을 추가하여 로컬로 이전하십시오.' },
      { type: 'plain-terms', content: '클라우드 스마트홈에서 로컬로 전환하는 것이 모든 것을 버리는 것을 의미하지는 않습니다. 많은 기기가 이미 로컬 프로토콜을 지원하므로 로컬 허브에 재페어링하기만 하면 됩니다. 클라우드 전용 기기는 시간을 두고 교체하고, 클라우드 음성 어시스턴트는 로컬 어시스턴트로 교체하십시오.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        items: [
          '제조사 클라우드에 의존하는 기기를 감사하는 것으로 시작하십시오',
          '로컬 지원 기기(Zigbee, Z-Wave, Matter, 로컬 Wi-Fi)는 Home Assistant에 재페어링할 수 있습니다',
          '클라우드 전용 기기는 한꺼번에가 아니라 점진적으로 교체하십시오',
          '제어 및 자동화를 로컬 Home Assistant 허브로 이동하십시오',
          '로컬 음성 어시스턴트를 추가하여 Alexa/Google을 종료하십시오',
          '다운타임 방지를 위해 방 단위로 이전하십시오',
        ],
      },
      audit: {
        id: 'audit',
        title: '클라우드 의존성 감사',
        content:
          '**각 기기를 목록화하고 제조사 클라우드 없이는 작동하지 않는 기기를 표시하십시오.** 이를 통해 재페어링 가능한 기기와 교체가 필요한 기기를 파악할 수 있습니다.',
        numberedItems: [
          '기기를 방별, 브랜드별로 목록화하십시오.',
          '각 기기가 사용하는 프로토콜(Zigbee, Z-Wave, Matter, Wi-Fi)을 기록하십시오.',
          '기본 제어에 클라우드 계정이 필요한 기기를 표시하십시오.',
          '현재 제조사 클라우드에서 실행 중인 자동화를 파악하십시오.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: '로컬 전환 가능 기기',
        content:
          '**Zigbee, Z-Wave, Matter 또는 로컬 Wi-Fi API를 사용하는 기기는 로컬 제어로 전환할 수 있습니다. 클라우드 전용 기기는 일반적으로 교체 없이는 전환이 불가능합니다.** 프로토콜을 먼저 확인하십시오.',
        items: [
          'Zigbee 및 Z-Wave 기기는 허브의 코디네이터에 재페어링하면 됩니다.',
          'Matter 기기는 로컬 컨트롤러에 연결할 수 있습니다 — [Matter 로컬 제어 가이드](/ko/smart-home/matter-local-control-guide)를 참조하십시오.',
          '문서화된 로컬 API를 가진 로컬 Wi-Fi 기기는 로컬에서 제어할 수 있습니다.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: '교체 vs 재페어링',
        content:
          '**로컬 지원 기기는 허브에 재페어링하십시오. 클라우드 전용 기기는 예산이 허용하는 대로 점진적으로 교체하십시오.** 프라이버시 위험이 높은 클라우드 기기를 우선적으로 교체하십시오.',
        columns: ['기기 유형', '로컬 전환 가능?', '방법'],
        rows: [
          { '기기 유형': 'Zigbee/Z-Wave 전구 및 센서', '로컬 전환 가능?': '예', '방법': '허브의 코디네이터에 재페어링' },
          { '기기 유형': 'Matter 기기', '로컬 전환 가능?': '예', '방법': '로컬 컨트롤러에 연결' },
          { '기기 유형': '로컬 Wi-Fi 기기(로컬 API)', '로컬 전환 가능?': '예', '방법': '통합을 통해 추가' },
          { '기기 유형': '클라우드 전용 카메라', '로컬 전환 가능?': '대체로 불가', '방법': 'RTSP 로컬 카메라 + Frigate로 교체' },
          { '기기 유형': '클라우드 음성 어시스턴트', '로컬 전환 가능?': '교체 필요', '방법': '로컬 음성 어시스턴트로 추가' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Home Assistant로 전환',
        content:
          '**Home Assistant를 로컬 허브로 설정하고 기기 및 자동화를 이전하십시오.** 이것이 제조사 클라우드를 대체하는 제어 플레인이 됩니다.',
        items: [
          'Home Assistant를 설치하고 Zigbee/Z-Wave 코디네이터를 추가하십시오 — [Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          '기기를 재페어링하고 자동화를 로컬에서 재구성하십시오.',
          '클라우드 서비스를 종료하기 전에 인터넷 없이 모든 것이 작동하는지 확인하십시오.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Alexa/Google 종료',
        content:
          '**로컬 제어와 로컬 음성 어시스턴트가 작동하면 클라우드 어시스턴트와 계정을 종료하십시오.** 전환 기간 동안 음성 제어를 유지하기 위해 이 단계를 마지막에 수행하십시오.',
        items: [
          'Alexa/Google을 사용하던 기능을 로컬 제어가 모두 커버하는지 확인하십시오.',
          '제조사 앱에서 기기를 삭제하고 계정을 비활성화하십시오.',
          '보안 자동화는 로컬 허브에서 결정론적으로 유지하십시오.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: '로컬 음성 추가',
        content:
          '**클라우드 음성을 로컬 어시스턴트로 교체하여 클라우드 없이 핸즈프리 제어를 유지하십시오.** 이것이 완전한 이전의 마지막 단계입니다.',
        items: [
          'Assist + Whisper + Piper로 로컬 음성 어시스턴트를 구축하십시오 — [로컬 음성 어시스턴트 가이드](/ko/smart-home/local-voice-assistant-smart-home)를 참조하십시오.',
          '자연어 이해를 위해 로컬 LLM을 추가하십시오 — [로컬 LLM으로 스마트홈 운영](/ko/smart-home/local-llm-smart-home-complete-guide)을 참조하십시오.',
          '전체적인 최종 상태는 [로컬 스마트홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide)를 참조하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '기존 기기를 그대로 사용할 수 있습니까?', a: 'Zigbee, Z-Wave, Matter 또는 로컬 Wi-Fi API를 사용하는 기기는 Home Assistant와 같은 로컬 허브에 재페어링할 수 있습니다. 기본 제어에 제조사 계정이 필요한 클라우드 전용 기기만 점진적으로 교체하면 됩니다.' },
          { q: '로컬로 전환할 수 없는 기기는 무엇입니까?', a: '제조사 클라우드에 완전히 의존하는 클라우드 전용 기기(일부 카메라, 초인종, 독점 에코시스템)는 일반적으로 로컬 전환이 불가능하며, Frigate와 함께 사용하는 RTSP 카메라와 같은 로컬 지원 대안으로 교체해야 합니다.' },
          { q: '이전에 얼마나 걸립니까?', a: '설정 규모에 따라 다르지만, 방 단위로 이전하면 작업이 분산되어 다운타임을 피할 수 있습니다. 많은 사용자가 메인 허브와 몇 개의 방을 주말에 이전하고, 이후 몇 주에 걸쳐 클라우드 전용 기기를 점진적으로 교체합니다.' },
          { q: '이전 후 음성 제어를 잃게 됩니까?', a: '아닙니다. 클라우드 음성 어시스턴트를 종료하기 전에 로컬 음성 어시스턴트를 추가하면 됩니다. Assist, Whisper, Piper 스택(선택적으로 로컬 LLM 포함)은 클라우드 없이 Alexa나 Google을 대체하여 핸즈프리 제어를 제공합니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[Home Assistant 시작 가이드](/ko/smart-home/home-assistant-getting-started) — 목적지 허브 설정',
          '[로컬 스마트홈 완전 가이드](/ko/smart-home/local-smart-home-complete-guide) — 최종 상태',
          '[완전 로컬 음성 어시스턴트 구축](/ko/smart-home/local-voice-assistant-smart-home) — Alexa/Google 대체',
          '[Matter와 로컬 제어](/ko/smart-home/matter-local-control-guide) — 로컬에서 기기 연결',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '클라우드 스마트홈에서 로컬 제어로 이전하는 방법 (2026)',
      description: '클라우드 스마트홈에서 로컬 제어로 이전 2026: 의존성 감사, Home Assistant로 전환, Alexa/Google 종료, 로컬 음성 추가.',
      url: 'https://www.promptquorum.com/ko/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '스마트홈 이전' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '로컬 제어' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '기존 기기를 그대로 사용할 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Zigbee, Z-Wave, Matter 또는 로컬 Wi-Fi API 기기는 로컬 허브에 재페어링할 수 있습니다. 기본 제어에 제조사 계정이 필요한 클라우드 전용 기기만 교체하면 됩니다.' } },
        { '@type': 'Question', name: '로컬로 전환할 수 없는 기기는 무엇입니까?', acceptedAnswer: { '@type': 'Answer', text: '제조사 클라우드에 완전히 의존하는 클라우드 전용 기기(일부 카메라, 초인종)는 RTSP + Frigate 카메라 등 로컬 지원 대안으로 교체해야 합니다.' } },
        { '@type': 'Question', name: '이전에 얼마나 걸립니까?', acceptedAnswer: { '@type': 'Answer', text: '설정 규모에 따라 다르지만 방 단위 이전이 다운타임을 피하게 합니다. 많은 사용자가 주말에 메인 허브와 몇 개 방을 이전하고 이후 몇 주간 클라우드 전용 기기를 교체합니다.' } },
        { '@type': 'Question', name: '이전 후 음성 제어를 잃게 됩니까?', acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 클라우드 어시스턴트를 종료하기 전에 로컬 음성 어시스턴트를 추가하십시오. Assist, Whisper, Piper는 클라우드 없이 Alexa나 Google을 대체합니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Comment Migrer d\'une Maison Connectée Cloud vers le Contrôle Local (2026)',
    seoTitle: 'Migrer d\'Alexa à Home Assistant : Contrôle Local (2026)',
    intro:
      'Migrer d\'une maison connectée cloud vers le contrôle local signifie auditer vos dépendances cloud, déplacer les appareils vers un hub local et mettre les assistants cloud hors service. Ce guide pas à pas montre comment auditer, quels appareils peuvent passer en local, quand remplacer plutôt que réappairer, comment passer à Home Assistant et comment ajouter un assistant vocal local à la place d\'Alexa ou Google.',
    metaDescription:
      'Migrez vers le contrôle local 2026 : auditez les dépendances cloud, déplacez vos appareils vers Home Assistant, retirez Alexa/Google et ajoutez la voix locale.',
    twitterDescription:
      'Passez d\'Alexa/Google à une maison connectée locale : auditez les dépendances cloud, réappairez ou remplacez les appareils, passez à Home Assistant, ajoutez la voix locale.',
    readTime: '9 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Utilisateurs de maison connectée cloud passant au contrôle local',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'migrer d\'alexa à home assistant',
      'cloud vers local maison connectée',
      'remplacer alexa par home assistant',
      'passer maison connectée en local',
      'quitter google home',
    ],
    leadAnswerBlock:
      '**Migrez en auditant vos dépendances cloud, en déplaçant les appareils à capacité locale vers Home Assistant (en réappairant quand c\'est possible, en remplaçant sinon) et en mettant Alexa ou Google hors service au profit d\'un assistant vocal local.** Faites-le pièce par pièce pour que la maison continue de fonctionner tout du long.',
    quickAnswerTop: {
      fr: {
        question: 'Comment migrer d\'une maison connectée cloud vers le contrôle local ?',
        answer:
          'Listez vos appareils et lesquels dépendent d\'un cloud, déplacez les appareils à capacité locale (Zigbee, Z-Wave, Matter, Wi-Fi local) vers Home Assistant en les réappairant, remplacez les appareils tout-cloud au fil du temps et mettez Alexa ou Google hors service en ajoutant un assistant vocal local. Migrez progressivement, une pièce à la fois.',
        bullets: [
          'Auditez quels appareils dépendent d\'un cloud du fabricant',
          'Réappairez les appareils à capacité locale à Home Assistant',
          'Remplacez les appareils tout-cloud progressivement',
          'Ajoutez la voix locale pour remplacer Alexa/Google',
          'Migrez pièce par pièce pour éviter les coupures',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Auditer les dépendances cloud', anchor: 'audit' },
      { label: 'Quels appareils peuvent passer en local', anchor: 'which-local' },
      { label: 'Remplacer vs réappairer', anchor: 'replace-repair' },
      { label: 'Passer à Home Assistant', anchor: 'move-ha' },
      { label: 'Mettre Alexa/Google hors service', anchor: 'retire' },
      { label: 'Ajouter la voix locale', anchor: 'local-voice' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migrez vers le local en auditant les dépendances cloud, en réappairant les appareils à capacité locale à Home Assistant, en remplaçant les tout-cloud et en ajoutant la voix locale.' },
      { type: 'plain-terms', content: 'Passer d\'une maison connectée cloud à une maison locale ne signifie pas tout jeter. Beaucoup d\'appareils parlent déjà des protocoles locaux et ont juste besoin d\'être réappairés à un hub local. Vous remplacez les tout-cloud au fil du temps et échangez votre assistant vocal cloud contre un local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Commencez par auditer quels appareils dépendent d\'un cloud du fabricant',
          'Les appareils à capacité locale (Zigbee, Z-Wave, Matter, Wi-Fi local) peuvent être réappairés à Home Assistant',
          'Remplacez les appareils tout-cloud progressivement plutôt que tous d\'un coup',
          'Déplacez le contrôle et les automatisations vers un hub local Home Assistant',
          'Mettez Alexa/Google hors service en ajoutant un assistant vocal local',
          'Migrez pièce par pièce pour que la maison continue de fonctionner',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Auditez vos dépendances cloud',
        content:
          '**Listez chaque appareil et notez lesquels ont besoin d\'un cloud du fabricant pour fonctionner.** Cela vous indique ce qui peut être réappairé en local et ce qui doit être remplacé.',
        numberedItems: [
          'Inventoriez vos appareils par pièce et par marque.',
          'Notez le protocole utilisé par chacun (Zigbee, Z-Wave, Matter, Wi-Fi).',
          'Repérez les appareils qui exigent un compte cloud pour le contrôle de base.',
          'Identifiez quelles automatisations tournent actuellement dans un cloud du fabricant.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Quels appareils peuvent passer en local',
        content:
          '**Les appareils utilisant Zigbee, Z-Wave, Matter ou une API Wi-Fi locale peuvent passer au contrôle local ; les appareils tout-cloud ne le peuvent généralement pas sans remplacement.** Vérifiez d\'abord le protocole.',
        items: [
          'Les appareils Zigbee et Z-Wave se réappairent à un coordinateur sur votre hub.',
          'Les appareils Matter peuvent s\'appairer à un contrôleur local — voir [contrôle local avec Matter](/fr/smart-home/matter-local-control-guide).',
          'Les appareils Wi-Fi local avec une API locale documentée peuvent être contrôlés en local.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Remplacer vs réappairer',
        content:
          '**Réappairez les appareils à capacité locale à votre hub ; remplacez les tout-cloud au fil du temps selon le budget.** Priorisez le remplacement des appareils cloud au plus haut risque de confidentialité d\'abord.',
        columns: ['Type d\'appareil', 'Peut passer en local ?', 'Comment'],
        rows: [
          { 'Type d\'appareil': 'Ampoules et capteurs Zigbee/Z-Wave', 'Peut passer en local ?': 'Oui', 'Comment': 'Réappairer à un coordinateur sur le hub' },
          { 'Type d\'appareil': 'Appareils Matter', 'Peut passer en local ?': 'Oui', 'Comment': 'Appairer à un contrôleur local' },
          { 'Type d\'appareil': 'Appareils Wi-Fi local (API locale)', 'Peut passer en local ?': 'Oui', 'Comment': 'Ajouter via intégration' },
          { 'Type d\'appareil': 'Caméras tout-cloud', 'Peut passer en local ?': 'Souvent non', 'Comment': 'Remplacer par RTSP local + Frigate' },
          { 'Type d\'appareil': 'Assistants vocaux cloud', 'Peut passer en local ?': 'Remplacer', 'Comment': 'Ajouter un assistant vocal local' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Passer à Home Assistant',
        content:
          '**Configurez Home Assistant comme votre hub local et migrez-y les appareils et automatisations.** Cela devient le plan de contrôle qui remplace le cloud du fabricant.',
        items: [
          'Installez Home Assistant et ajoutez un coordinateur Zigbee/Z-Wave — voir [Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Réappairez les appareils et reconstruisez les automatisations en local.',
          'Confirmez que tout fonctionne hors ligne avant de mettre les services cloud hors service.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Mettre Alexa/Google hors service',
        content:
          '**Une fois le contrôle local et un assistant vocal local fonctionnels, mettez les assistants et comptes cloud hors service.** Faites-le en dernier pour garder le contrôle vocal pendant la transition.',
        items: [
          'Vérifiez que le contrôle local couvre ce pour quoi vous utilisiez Alexa/Google.',
          'Retirez les appareils des apps du fabricant et désactivez les comptes.',
          'Gardez les automatisations de sécurité déterministes sur le hub local.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Ajouter la voix locale',
        content:
          '**Remplacez la voix cloud par un assistant local pour garder le contrôle mains libres sans le cloud.** C\'est la dernière étape d\'une migration complète.',
        items: [
          'Construisez un assistant vocal local avec Assist + Whisper + Piper — voir [le guide de l\'assistant vocal local](/fr/smart-home/local-voice-assistant-smart-home).',
          'Ajoutez un LLM local pour la compréhension du langage naturel — voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
          'Pour l\'état de destination complet, voir [le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Puis-je garder mes appareils existants ?', a: 'Beaucoup d\'entre eux, oui. Les appareils utilisant Zigbee, Z-Wave, Matter ou une API Wi-Fi locale peuvent être réappairés à un hub local comme Home Assistant. Seuls les appareils tout-cloud qui exigent un compte du fabricant pour le contrôle de base doivent être remplacés au fil du temps.' },
          { q: 'Qu\'est-ce qui ne peut pas passer en local ?', a: 'Les appareils tout-cloud qui dépendent entièrement d\'un cloud du fabricant — souvent certaines caméras, sonnettes et écosystèmes propriétaires — ne peuvent généralement pas passer en local et doivent être remplacés par des alternatives à capacité locale, comme des caméras RTSP appairées avec Frigate.' },
          { q: 'Combien de temps prend la migration ?', a: 'Cela varie avec la taille de votre installation, mais migrer pièce par pièce répartit le travail et évite les coupures. Beaucoup déplacent le hub principal et quelques pièces en un week-end, puis remplacent les appareils tout-cloud progressivement sur des semaines.' },
          { q: 'Est-ce que je perds le contrôle vocal en migrant ?', a: 'Non, si vous ajoutez un assistant vocal local avant de mettre celui du cloud hors service. Un stack local d\'Assist, Whisper et Piper, optionnellement avec un LLM local, remplace Alexa ou Google pour le contrôle mains libres sans le cloud.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — configurer le hub de destination',
          '[Le guide complet de la maison connectée locale](/fr/smart-home/local-smart-home-complete-guide) — l\'état final',
          '[Construire un assistant vocal entièrement local](/fr/smart-home/local-voice-assistant-smart-home) — remplacer Alexa/Google',
          '[Matter et contrôle local](/fr/smart-home/matter-local-control-guide) — appairer les appareils en local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Comment Migrer d\'une Maison Connectée Cloud vers le Contrôle Local (2026)',
      description: 'Migrez vers le contrôle local 2026 : auditez les dépendances cloud, déplacez vos appareils vers Home Assistant, retirez Alexa/Google et ajoutez la voix locale.',
      url: 'https://www.promptquorum.com/fr/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Migration de maison connectée' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Contrôle local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Puis-je garder mes appareils existants ?', acceptedAnswer: { '@type': 'Answer', text: 'Beaucoup. Les appareils utilisant Zigbee, Z-Wave, Matter ou une API Wi-Fi locale peuvent être réappairés à un hub local. Seuls les tout-cloud qui exigent un compte du fabricant pour le contrôle de base doivent être remplacés.' } },
        { '@type': 'Question', name: 'Qu\'est-ce qui ne peut pas passer en local ?', acceptedAnswer: { '@type': 'Answer', text: 'Les appareils tout-cloud qui dépendent entièrement d\'un cloud du fabricant — souvent certaines caméras et sonnettes — doivent généralement être remplacés par des alternatives à capacité locale comme des caméras RTSP avec Frigate.' } },
        { '@type': 'Question', name: 'Combien de temps prend la migration ?', acceptedAnswer: { '@type': 'Answer', text: 'Cela varie avec la taille, mais migrer pièce par pièce évite les coupures. Beaucoup déplacent le hub principal et quelques pièces en un week-end, puis remplacent les tout-cloud sur des semaines.' } },
        { '@type': 'Question', name: 'Est-ce que je perds le contrôle vocal en migrant ?', acceptedAnswer: { '@type': 'Answer', text: 'Non, si vous ajoutez un assistant vocal local avant de retirer celui du cloud. Assist, Whisper et Piper, optionnellement avec un LLM local, remplacent Alexa ou Google sans le cloud.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'クラウドのスマートホームからローカル制御へ移行する方法（2026）',
    seoTitle: 'Alexa から Home Assistant へ移行：ローカル制御（2026）',
    intro:
      'クラウドのスマートホームからローカル制御へ移行するとは、クラウド依存を棚卸しし、機器をローカルハブへ移し、クラウドアシスタントを退役させることです。本ステップバイステップのガイドは、棚卸しの方法、どの機器がローカル化できるか、交換と再ペアリングのどちらにすべきか、Home Assistant への移行方法、そして Alexa や Google の代わりにローカル音声アシスタントを追加する方法を示します。',
    metaDescription:
      'クラウドスマートホームからローカル制御へ移行する手順（2026）：クラウド依存関係の見直し、機器の Home Assistant への移行、Alexa/Google の退役、ローカル音声システムの追加。部屋ごとに段階的に進める移行方法を詳解。',
    twitterDescription:
      'Alexa/Google からローカルスマートホームへ：クラウド依存を棚卸しし、機器を再ペアリングまたは交換し、Home Assistant へ切り替え、ローカル音声を追加。',
    readTime: '9分で読める',
    educationalLevel: 'Intermediate',
    audience: 'ローカル制御へ移行する既存のクラウドスマートホームユーザー',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'alexa から home assistant 移行',
      'クラウドからローカル スマートホーム',
      'alexa を home assistant に置き換え',
      'スマートホーム ローカル化',
      'google home をやめる',
    ],
    leadAnswerBlock:
      '**クラウド依存を棚卸しし、ローカル対応機器を Home Assistant へ移し（可能なら再ペアリング、無理なら交換）、Alexa や Google をローカル音声アシスタントに置き換えて退役させることで移行します。** 家が一貫して機能し続けるよう、部屋ごとに進めましょう。',
    quickAnswerTop: {
      ja: {
        question: 'クラウドのスマートホームからローカル制御へどう移行しますか？',
        answer:
          '機器とそのうちどれがクラウドに依存するかを一覧にし、ローカル対応機器（Zigbee、Z-Wave、Matter、ローカル Wi-Fi）を再ペアリングして Home Assistant へ移し、クラウド専用機器を時間をかけて交換し、ローカル音声アシスタントを追加して Alexa や Google を退役させます。部屋ごとに、段階的に移行しましょう。',
        bullets: [
          'どの機器がメーカーのクラウドに依存するか棚卸しする',
          'ローカル対応機器を Home Assistant に再ペアリングする',
          'クラウド専用機器を段階的に交換する',
          'Alexa/Google を置き換えるローカル音声を追加する',
          'ダウンタイムを避けるため部屋ごとに移行する',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'クラウド依存を棚卸し', anchor: 'audit' },
      { label: 'どの機器がローカル化できるか', anchor: 'which-local' },
      { label: '交換 対 再ペアリング', anchor: 'replace-repair' },
      { label: 'Home Assistant へ移行', anchor: 'move-ha' },
      { label: 'Alexa/Google を退役', anchor: 'retire' },
      { label: 'ローカル音声を追加', anchor: 'local-voice' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'クラウド依存を棚卸しし、ローカル対応機器を Home Assistant へ再ペアリングし、クラウド専用機器を交換し、ローカル音声を追加して、ローカルへ移行します。' },
      { type: 'plain-terms', content: 'クラウドのスマートホームからローカルへ切り替えるのは、すべてを捨てることではありません。多くの機器はすでにローカルプロトコルを話し、ローカルハブへ再ペアリングするだけで済みます。クラウド専用機器は時間をかけて交換し、クラウド音声アシスタントをローカルのものに替えます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'まず、どの機器がメーカーのクラウドに依存するかを棚卸しする',
          'ローカル対応機器（Zigbee、Z-Wave、Matter、ローカル Wi-Fi）は Home Assistant に再ペアリングできる',
          'クラウド専用機器は一度にではなく段階的に交換する',
          '制御と自動化をローカルの Home Assistant ハブへ移す',
          'ローカル音声アシスタントを追加して Alexa/Google を退役させる',
          '家が一貫して機能し続けるよう、部屋ごとに移行する',
        ],
      },
      audit: {
        id: 'audit',
        title: 'クラウド依存を棚卸しする',
        content:
          '**各機器を一覧にし、どれが機能のためにメーカーのクラウドを必要とするか記録しましょう。** これで、ローカルで再ペアリングできるものと交換が必要なものが分かります。',
        numberedItems: [
          '機器を部屋とブランドごとに棚卸しします。',
          '各機器が使うプロトコル（Zigbee、Z-Wave、Matter、Wi-Fi）を記録します。',
          '基本制御にクラウドアカウントを要する機器に印を付けます。',
          '現在どの自動化がメーカーのクラウドで動いているか特定します。',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'どの機器がローカル化できるか',
        content:
          '**Zigbee、Z-Wave、Matter、またはローカル Wi-Fi API を使う機器はローカル制御へ移せます；クラウド専用機器は概して交換なしには移せません。** まずプロトコルを確認しましょう。',
        items: [
          'Zigbee と Z-Wave の機器はハブ上のコーディネーターへ再ペアリングします。',
          'Matter 機器はローカルコントローラーへコミッショニングできます——[Matter のローカル制御](/ja/smart-home/matter-local-control-guide)を参照。',
          '文書化されたローカル API を備えるローカル Wi-Fi 機器はローカルで制御できます。',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: '交換 対 再ペアリング',
        content:
          '**ローカル対応機器はハブへ再ペアリングし、クラウド専用機器は予算が許す範囲で時間をかけて交換しましょう。** プライバシーリスクが最も高いクラウド機器を最初に交換することを優先します。',
        columns: ['機器の種類', 'ローカル化できるか', '方法'],
        rows: [
          { '機器の種類': 'Zigbee/Z-Wave の電球＆センサー', 'ローカル化できるか': '可', '方法': 'ハブ上のコーディネーターへ再ペアリング' },
          { '機器の種類': 'Matter 機器', 'ローカル化できるか': '可', '方法': 'ローカルコントローラーへコミッショニング' },
          { '機器の種類': 'ローカル Wi-Fi 機器（ローカル API）', 'ローカル化できるか': '可', '方法': '統合で追加' },
          { '機器の種類': 'クラウド専用カメラ', 'ローカル化できるか': 'しばしば不可', '方法': 'ローカル RTSP + Frigate で交換' },
          { '機器の種類': 'クラウド音声アシスタント', 'ローカル化できるか': '交換', '方法': 'ローカル音声アシスタントを追加' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Home Assistant へ移行',
        content:
          '**Home Assistant をローカルハブとしてセットアップし、機器と自動化をそこへ移しましょう。** これがメーカーのクラウドを置き換える制御の中枢になります。',
        items: [
          'Home Assistant をインストールし、Zigbee/Z-Wave コーディネーターを追加します——[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          '機器を再ペアリングし、自動化をローカルで作り直します。',
          'クラウドサービスを退役させる前に、すべてがオフラインで動くことを確認します。',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Alexa/Google を退役させる',
        content:
          '**ローカル制御とローカル音声アシスタントが動いたら、クラウドアシスタントとアカウントを退役させましょう。** 移行中も音声制御を保つため、これは最後に行います。',
        items: [
          'ローカル制御が、Alexa/Google で使っていたことをカバーするか確認します。',
          'メーカーのアプリから機器を削除し、アカウントを無効化します。',
          '決定論的な安全自動化はローカルハブに残します。',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'ローカル音声を追加',
        content:
          '**クラウド音声をローカルアシスタントに置き換え、クラウドなしでハンズフリー制御を保ちましょう。** これは完全移行の最終ステップです。',
        items: [
          'Assist + Whisper + Piper でローカル音声アシスタントを作ります——[ローカル音声アシスタントのガイド](/ja/smart-home/local-voice-assistant-smart-home)を参照。',
          '自然言語理解のためにローカル LLM を追加します——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
          '到達すべき最終形は[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '今ある機器を残せますか？', a: '多くは残せます。Zigbee、Z-Wave、Matter、またはローカル Wi-Fi API を使う機器は、Home Assistant のようなローカルハブへ再ペアリングできます。基本制御にメーカーのアカウントを要するクラウド専用機器だけは、時間をかけて交換が必要です。' },
          { q: 'ローカル化できないものは何ですか？', a: 'メーカーのクラウドに完全に依存するクラウド専用機器——しばしば一部のカメラ、ドアベル、独自エコシステム——は概してローカル化できず、Frigate と組み合わせる RTSP カメラのようなローカル対応の代替品への交換が必要です。' },
          { q: '移行にはどれくらいかかりますか？', a: '構成の規模によりますが、部屋ごとに移行すれば作業が分散し、ダウンタイムを避けられます。多くの人は中心となるハブと数部屋を週末に移し、その後クラウド専用機器を数週間かけて段階的に交換します。' },
          { q: '移行すると音声制御を失いますか？', a: 'いいえ、クラウドのものを退役させる前にローカル音声アシスタントを追加すれば失いません。Assist、Whisper、Piper のローカルスタック（任意でローカル LLM を加える）が、クラウドなしのハンズフリー制御で Alexa や Google を置き換えます。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — 移行先のハブを設定する',
          '[ローカルスマートホーム完全ガイド](/ja/smart-home/local-smart-home-complete-guide) — 最終形',
          '[完全ローカルの音声アシスタントを作る](/ja/smart-home/local-voice-assistant-smart-home) — Alexa/Google を置き換える',
          '[Matter とローカル制御](/ja/smart-home/matter-local-control-guide) — 機器をローカルでコミッショニングする',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'クラウドのスマートホームからローカル制御へ移行する方法（2026）',
      description: 'クラウドスマートホームからローカル制御へ移行する手順（2026）：クラウド依存関係の見直し、機器の Home Assistant への移行、Alexa/Google の退役、ローカル音声システムの追加。部屋ごとに段階的に進める移行方法を詳解。',
      url: 'https://www.promptquorum.com/ja/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'スマートホームの移行' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'ローカル制御' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '今ある機器を残せますか？', acceptedAnswer: { '@type': 'Answer', text: '多くは残せます。Zigbee、Z-Wave、Matter、またはローカル Wi-Fi API を使う機器は、ローカルハブへ再ペアリングできます。基本制御にメーカーのアカウントを要するクラウド専用機器だけ交換が必要です。' } },
        { '@type': 'Question', name: 'ローカル化できないものは何ですか？', acceptedAnswer: { '@type': 'Answer', text: 'メーカーのクラウドに完全に依存するクラウド専用機器——しばしば一部のカメラやドアベル——は概して、Frigate と組み合わせる RTSP カメラのようなローカル対応品への交換が必要です。' } },
        { '@type': 'Question', name: '移行にはどれくらいかかりますか？', acceptedAnswer: { '@type': 'Answer', text: '構成の規模によりますが、部屋ごとに移行すればダウンタイムを避けられます。多くは中心のハブと数部屋を週末に移し、その後クラウド専用機器を数週間かけて交換します。' } },
        { '@type': 'Question', name: '移行すると音声制御を失いますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ、クラウドのものを退役させる前にローカル音声アシスタントを追加すれば失いません。Assist、Whisper、Piper（任意でローカル LLM）が Alexa や Google をクラウドなしで置き換えます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: 'Como Migrar de uma Casa Inteligente na Nuvem para o Controle Local (2026)',
    seoTitle: 'Migrar da Alexa para o Home Assistant: Controle Local (2026)',
    intro:
      'Migrar de uma casa inteligente na nuvem para o controle local significa auditar suas dependências da nuvem, mover os dispositivos para um hub local e aposentar os assistentes na nuvem. Este guia passo a passo mostra como auditar, quais dispositivos podem ir para o local, quando substituir em vez de reparear, como passar para o Home Assistant e como adicionar um assistente de voz local no lugar da Alexa ou do Google.',
    metaDescription:
      'Migre da nuvem para o controle local 2026: audite dependências, mova dispositivos para o Home Assistant, aposente Alexa/Google e adicione voz local.',
    twitterDescription:
      'Saia da Alexa/Google para uma casa inteligente local: audite dependências da nuvem, repareie ou substitua dispositivos, mude para o Home Assistant, adicione voz local.',
    readTime: '9 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Usuários de casa inteligente na nuvem mudando para o controle local',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      'migrar da alexa para o home assistant',
      'da nuvem para local casa inteligente',
      'substituir alexa por home assistant',
      'passar casa inteligente para local',
      'sair do google home',
    ],
    leadAnswerBlock:
      '**Migre auditando suas dependências da nuvem, movendo os dispositivos com capacidade local para o Home Assistant (repareando onde for possível, substituindo onde não for) e aposentando a Alexa ou o Google em favor de um assistente de voz local.** Faça isso cômodo por cômodo para que a casa continue funcionando o tempo todo.',
    quickAnswerTop: {
      pt: {
        question: 'Como migro de uma casa inteligente na nuvem para o controle local?',
        answer:
          'Liste seus dispositivos e quais dependem de uma nuvem, mova os dispositivos com capacidade local (Zigbee, Z-Wave, Matter, Wi-Fi local) para o Home Assistant repareando-os, substitua os dispositivos só-nuvem ao longo do tempo e aposente a Alexa ou o Google adicionando um assistente de voz local. Migre gradualmente, um cômodo de cada vez.',
        bullets: [
          'Audite quais dispositivos dependem de uma nuvem do fabricante',
          'Repareie os dispositivos com capacidade local ao Home Assistant',
          'Substitua os dispositivos só-nuvem gradualmente',
          'Adicione voz local para substituir Alexa/Google',
          'Migre cômodo por cômodo para evitar interrupções',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'Auditar dependências da nuvem', anchor: 'audit' },
      { label: 'Quais dispositivos podem ir para o local', anchor: 'which-local' },
      { label: 'Substituir vs reparear', anchor: 'replace-repair' },
      { label: 'Passar para o Home Assistant', anchor: 'move-ha' },
      { label: 'Aposentar Alexa/Google', anchor: 'retire' },
      { label: 'Adicionar voz local', anchor: 'local-voice' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Migre para o local auditando as dependências da nuvem, repareando os dispositivos com capacidade local ao Home Assistant, substituindo os só-nuvem e adicionando voz local.' },
      { type: 'plain-terms', content: 'Mudar de uma casa inteligente na nuvem para uma local não significa jogar tudo fora. Muitos dispositivos já falam protocolos locais e só precisam ser repareados a um hub local. Você substitui os só-nuvem ao longo do tempo e troca seu assistente de voz na nuvem por um local.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Comece auditando quais dispositivos dependem de uma nuvem do fabricante',
          'Dispositivos com capacidade local (Zigbee, Z-Wave, Matter, Wi-Fi local) podem ser repareados ao Home Assistant',
          'Substitua os dispositivos só-nuvem gradualmente em vez de todos de uma vez',
          'Mova o controle e as automações para um hub local do Home Assistant',
          'Aposente Alexa/Google adicionando um assistente de voz local',
          'Migre cômodo por cômodo para que a casa continue funcionando',
        ],
      },
      audit: {
        id: 'audit',
        title: 'Audite suas dependências da nuvem',
        content:
          '**Liste cada dispositivo e anote quais precisam de uma nuvem do fabricante para funcionar.** Isso lhe diz o que pode ser repareado localmente e o que precisa ser substituído.',
        numberedItems: [
          'Faça um inventário dos seus dispositivos por cômodo e marca.',
          'Anote o protocolo que cada um usa (Zigbee, Z-Wave, Matter, Wi-Fi).',
          'Sinalize os dispositivos que exigem uma conta na nuvem para o controle básico.',
          'Identifique quais automações rodam atualmente em uma nuvem do fabricante.',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: 'Quais dispositivos podem ir para o local',
        content:
          '**Dispositivos que usam Zigbee, Z-Wave, Matter ou uma API de Wi-Fi local podem passar para o controle local; os só-nuvem geralmente não podem sem substituição.** Verifique primeiro o protocolo.',
        items: [
          'Dispositivos Zigbee e Z-Wave são repareados a um coordenador no seu hub.',
          'Dispositivos Matter podem ser emparelhados a um controlador local — veja [controle local com Matter](/pt/smart-home/matter-local-control-guide).',
          'Dispositivos de Wi-Fi local com uma API local documentada podem ser controlados localmente.',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: 'Substituir vs reparear',
        content:
          '**Repareie os dispositivos com capacidade local ao seu hub; substitua os só-nuvem ao longo do tempo conforme o orçamento permitir.** Priorize substituir primeiro os dispositivos na nuvem de maior risco de privacidade.',
        columns: ['Tipo de dispositivo', 'Pode ir para o local?', 'Como'],
        rows: [
          { 'Tipo de dispositivo': 'Lâmpadas e sensores Zigbee/Z-Wave', 'Pode ir para o local?': 'Sim', 'Como': 'Reparear a um coordenador no hub' },
          { 'Tipo de dispositivo': 'Dispositivos Matter', 'Pode ir para o local?': 'Sim', 'Como': 'Emparelhar a um controlador local' },
          { 'Tipo de dispositivo': 'Dispositivos de Wi-Fi local (API local)', 'Pode ir para o local?': 'Sim', 'Como': 'Adicionar via integração' },
          { 'Tipo de dispositivo': 'Câmeras só-nuvem', 'Pode ir para o local?': 'Muitas vezes não', 'Como': 'Substituir por RTSP local + Frigate' },
          { 'Tipo de dispositivo': 'Assistentes de voz na nuvem', 'Pode ir para o local?': 'Substituir', 'Como': 'Adicionar assistente de voz local' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: 'Passar para o Home Assistant',
        content:
          '**Configure o Home Assistant como seu hub local e migre os dispositivos e automações para ele.** Ele se torna o plano de controle que substitui a nuvem do fabricante.',
        items: [
          'Instale o Home Assistant e adicione um coordenador Zigbee/Z-Wave — veja [Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Repareie os dispositivos e reconstrua as automações localmente.',
          'Confirme que tudo funciona offline antes de aposentar os serviços na nuvem.',
        ],
      },
      retire: {
        id: 'retire',
        title: 'Aposentar Alexa/Google',
        content:
          '**Quando o controle local e um assistente de voz local funcionarem, aposente os assistentes e contas na nuvem.** Faça isso por último para manter o controle por voz durante a transição.',
        items: [
          'Verifique se o controle local cobre aquilo para que você usava Alexa/Google.',
          'Remova os dispositivos dos apps do fabricante e desative as contas.',
          'Mantenha as automações de segurança determinísticas no hub local.',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: 'Adicionar voz local',
        content:
          '**Substitua a voz na nuvem por um assistente local para manter o controle mãos-livres sem a nuvem.** É o passo final de uma migração completa.',
        items: [
          'Monte um assistente de voz local com Assist + Whisper + Piper — veja [o guia do assistente de voz local](/pt/smart-home/local-voice-assistant-smart-home).',
          'Adicione um LLM local para a compreensão de linguagem natural — veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
          'Para o estado de destino completo, veja [o guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Posso manter meus dispositivos atuais?', a: 'Muitos deles, sim. Dispositivos que usam Zigbee, Z-Wave, Matter ou uma API de Wi-Fi local podem ser repareados a um hub local como o Home Assistant. Só os dispositivos só-nuvem que exigem uma conta do fabricante para o controle básico precisam ser substituídos ao longo do tempo.' },
          { q: 'O que não pode ir para o local?', a: 'Dispositivos só-nuvem que dependem inteiramente de uma nuvem do fabricante — muitas vezes algumas câmeras, campainhas e ecossistemas proprietários — geralmente não podem ir para o local e precisam ser substituídos por alternativas com capacidade local, como câmeras RTSP emparelhadas com o Frigate.' },
          { q: 'Quanto tempo leva a migração?', a: 'Varia com o tamanho da sua configuração, mas migrar cômodo por cômodo distribui o trabalho e evita interrupções. Muitas pessoas movem o hub principal e alguns cômodos em um fim de semana e depois substituem os dispositivos só-nuvem gradualmente ao longo de semanas.' },
          { q: 'Perco o controle por voz ao migrar?', a: 'Não, se você adicionar um assistente de voz local antes de aposentar o da nuvem. Um stack local de Assist, Whisper e Piper, opcionalmente com um LLM local, substitui a Alexa ou o Google para o controle mãos-livres sem a nuvem.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — configure o hub de destino',
          '[O guia completo da casa inteligente local](/pt/smart-home/local-smart-home-complete-guide) — o estado final',
          '[Montar um assistente de voz totalmente local](/pt/smart-home/local-voice-assistant-smart-home) — substituir Alexa/Google',
          '[Matter e controle local](/pt/smart-home/matter-local-control-guide) — emparelhar dispositivos localmente',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Como Migrar de uma Casa Inteligente na Nuvem para o Controle Local (2026)',
      description: 'Migre da nuvem para o controle local 2026: audite dependências, mova dispositivos para o Home Assistant, aposente Alexa/Google e adicione voz local.',
      url: 'https://www.promptquorum.com/pt/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Migração de casa inteligente' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Controle local' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Posso manter meus dispositivos atuais?', acceptedAnswer: { '@type': 'Answer', text: 'Muitos. Dispositivos que usam Zigbee, Z-Wave, Matter ou uma API de Wi-Fi local podem ser repareados a um hub local. Só os só-nuvem que exigem uma conta do fabricante para o controle básico precisam ser substituídos.' } },
        { '@type': 'Question', name: 'O que não pode ir para o local?', acceptedAnswer: { '@type': 'Answer', text: 'Dispositivos só-nuvem que dependem inteiramente de uma nuvem do fabricante — muitas vezes algumas câmeras e campainhas — geralmente precisam ser substituídos por alternativas com capacidade local como câmeras RTSP com Frigate.' } },
        { '@type': 'Question', name: 'Quanto tempo leva a migração?', acceptedAnswer: { '@type': 'Answer', text: 'Varia com o tamanho, mas migrar cômodo por cômodo evita interrupções. Muitos movem o hub principal e alguns cômodos em um fim de semana e substituem os só-nuvem ao longo de semanas.' } },
        { '@type': 'Question', name: 'Perco o controle por voz ao migrar?', acceptedAnswer: { '@type': 'Answer', text: 'Não, se você adicionar um assistente de voz local antes de aposentar o da nuvem. Assist, Whisper e Piper, opcionalmente com um LLM local, substituem a Alexa ou o Google sem a nuvem.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Local-First Smart Home',
    title: '如何从云端智能家居迁移到本地控制（2026）',
    seoTitle: '从 Alexa 迁移到 Home Assistant：本地控制（2026）',
    intro:
      '从云端智能家居迁移到本地控制，意味着审查你的云端依赖、把设备迁移到本地中枢，并退役云端助手。本分步指南展示如何审查、哪些设备可以本地化、何时应替换而非重新配对、如何迁移到 Home Assistant，以及如何用本地语音助手取代 Alexa 或 Google。',
    metaDescription:
      '从云端智能家居全面迁移到本地控制（2026）：系统审查云端依赖关系、将所有设备迁移到 Home Assistant、退役 Alexa 和 Google 助手，并添加本地语音控制系统。含设备配对决策与按房间分阶段推进的详细迁移策略。',
    twitterDescription:
      '从 Alexa/Google 转向本地智能家居：审查云端依赖、重新配对或替换设备、切换到 Home Assistant、添加本地语音。',
    readTime: '阅读约9分钟',
    educationalLevel: 'Intermediate',
    audience: '转向本地控制的既有云端智能家居用户',
    primaryTerm: 'migrate cloud to local smart home',
    targetKeywords: [
      '从 alexa 迁移到 home assistant',
      '云端到本地 智能家居',
      '用 home assistant 替换 alexa',
      '智能家居 本地化',
      '离开 google home',
    ],
    leadAnswerBlock:
      '**通过审查你的云端依赖、把支持本地的设备迁移到 Home Assistant（能重新配对就重新配对，不能就替换），并用本地语音助手取代 Alexa 或 Google 来完成迁移。** 按房间逐个进行，让家在整个过程中持续可用。',
    quickAnswerTop: {
      zh: {
        question: '我该如何从云端智能家居迁移到本地控制？',
        answer:
          '列出你的设备以及其中哪些依赖云端，把支持本地的设备（Zigbee、Z-Wave、Matter、本地 Wi-Fi）通过重新配对迁移到 Home Assistant，随时间替换仅限云端的设备，并通过添加本地语音助手来退役 Alexa 或 Google。逐个房间、循序渐进地迁移。',
        bullets: [
          '审查哪些设备依赖厂商云端',
          '把支持本地的设备重新配对到 Home Assistant',
          '逐步替换仅限云端的设备',
          '添加本地语音以取代 Alexa/Google',
          '按房间迁移以避免停摆',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '审查云端依赖', anchor: 'audit' },
      { label: '哪些设备可以本地化', anchor: 'which-local' },
      { label: '替换对重新配对', anchor: 'replace-repair' },
      { label: '迁移到 Home Assistant', anchor: 'move-ha' },
      { label: '退役 Alexa/Google', anchor: 'retire' },
      { label: '添加本地语音', anchor: 'local-voice' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: '通过审查云端依赖、把支持本地的设备重新配对到 Home Assistant、替换仅限云端的设备并添加本地语音，迁移到本地。' },
      { type: 'plain-terms', content: '从云端智能家居切换到本地，并不意味着把一切都扔掉。许多设备已经会说本地协议，只需重新配对到本地中枢。你随时间替换仅限云端的设备，并把云端语音助手换成本地的。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '先审查哪些设备依赖厂商云端',
          '支持本地的设备（Zigbee、Z-Wave、Matter、本地 Wi-Fi）可重新配对到 Home Assistant',
          '逐步替换仅限云端的设备，而不是一次全换',
          '把控制和自动化迁移到本地的 Home Assistant 中枢',
          '通过添加本地语音助手退役 Alexa/Google',
          '按房间迁移，让家持续可用',
        ],
      },
      audit: {
        id: 'audit',
        title: '审查你的云端依赖',
        content:
          '**列出每台设备，并记录哪些需要厂商云端才能工作。** 这会告诉你哪些可以在本地重新配对、哪些必须替换。',
        numberedItems: [
          '按房间和品牌盘点你的设备。',
          '记录每台设备使用的协议（Zigbee、Z-Wave、Matter、Wi-Fi）。',
          '标记基础控制就要求云端账户的设备。',
          '确认当前哪些自动化运行在厂商云端。',
        ],
      },
      whichLocal: {
        id: 'which-local',
        title: '哪些设备可以本地化',
        content:
          '**使用 Zigbee、Z-Wave、Matter 或本地 Wi-Fi API 的设备可以转向本地控制；仅限云端的设备通常不替换就无法本地化。** 先检查协议。',
        items: [
          'Zigbee 和 Z-Wave 设备重新配对到你中枢上的协调器。',
          'Matter 设备可配网到本地控制器——参见[Matter 本地控制](/zh/smart-home/matter-local-control-guide)。',
          '带文档化本地 API 的本地 Wi-Fi 设备可在本地控制。',
        ],
      },
      replaceRepair: {
        id: 'replace-repair',
        title: '替换对重新配对',
        content:
          '**把支持本地的设备重新配对到你的中枢；在预算允许的情况下随时间替换仅限云端的设备。** 优先先替换隐私风险最高的云端设备。',
        columns: ['设备类型', '能否本地化？', '方式'],
        rows: [
          { '设备类型': 'Zigbee/Z-Wave 灯泡与传感器', '能否本地化？': '能', '方式': '重新配对到中枢上的协调器' },
          { '设备类型': 'Matter 设备', '能否本地化？': '能', '方式': '配网到本地控制器' },
          { '设备类型': '本地 Wi-Fi 设备（本地 API）', '能否本地化？': '能', '方式': '经由集成添加' },
          { '设备类型': '仅限云端的摄像头', '能否本地化？': '通常不能', '方式': '用本地 RTSP + Frigate 替换' },
          { '设备类型': '云端语音助手', '能否本地化？': '替换', '方式': '添加本地语音助手' },
        ],
      },
      moveHa: {
        id: 'move-ha',
        title: '迁移到 Home Assistant',
        content:
          '**把 Home Assistant 设置为你的本地中枢，并把设备和自动化迁移到它上面。** 它将成为取代厂商云端的控制中枢。',
        items: [
          '安装 Home Assistant 并添加一个 Zigbee/Z-Wave 协调器——参见[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started)。',
          '重新配对设备，并在本地重建自动化。',
          '在退役云端服务之前，确认一切都能离线工作。',
        ],
      },
      retire: {
        id: 'retire',
        title: '退役 Alexa/Google',
        content:
          '**一旦本地控制和本地语音助手可用，就退役云端助手和账户。** 把这一步放到最后，以便在过渡期间保留语音控制。',
        items: [
          '确认本地控制涵盖了你用 Alexa/Google 做的事。',
          '从厂商应用中移除设备，并停用账户。',
          '把确定性的安全自动化保留在本地中枢上。',
        ],
      },
      localVoice: {
        id: 'local-voice',
        title: '添加本地语音',
        content:
          '**用本地助手取代云端语音，从而在没有云端的情况下保留免手控制。** 这是完整迁移的最后一步。',
        items: [
          '用 Assist + Whisper + Piper 搭建本地语音助手——参见[本地语音助手指南](/zh/smart-home/local-voice-assistant-smart-home)。',
          '为自然语言理解添加本地 LLM——参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
          '完整的最终形态参见[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '我能保留现有设备吗？', a: '很多都能。使用 Zigbee、Z-Wave、Matter 或本地 Wi-Fi API 的设备可以重新配对到像 Home Assistant 这样的本地中枢。只有那些基础控制就要求厂商账户的仅限云端设备，才需要随时间替换。' },
          { q: '哪些无法本地化？', a: '完全依赖厂商云端的仅限云端设备——常见的有部分摄像头、门铃和专有生态——通常无法本地化，需要替换为支持本地的替代品，例如搭配 Frigate 的 RTSP 摄像头。' },
          { q: '迁移需要多久？', a: '这取决于你配置的规模，但按房间迁移能分摊工作并避免停摆。许多人在一个周末迁移核心中枢和几个房间，然后在数周内逐步替换仅限云端的设备。' },
          { q: '迁移时会失去语音控制吗？', a: '不会，只要你在退役云端助手之前先添加本地语音助手。由 Assist、Whisper 和 Piper 组成的本地堆栈（可选搭配本地 LLM）可在无云端的情况下取代 Alexa 或 Google 实现免手控制。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 设置目标中枢',
          '[本地智能家居完整指南](/zh/smart-home/local-smart-home-complete-guide) — 最终形态',
          '[搭建完全本地的语音助手](/zh/smart-home/local-voice-assistant-smart-home) — 取代 Alexa/Google',
          '[Matter 与本地控制](/zh/smart-home/matter-local-control-guide) — 在本地为设备配网',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '如何从云端智能家居迁移到本地控制（2026）',
      description: '从云端智能家居全面迁移到本地控制（2026）：系统审查云端依赖关系、将所有设备迁移到 Home Assistant、退役 Alexa 和 Google 助手，并添加本地语音控制系统。含设备配对决策与按房间分阶段推进的详细迁移策略。',
      url: 'https://www.promptquorum.com/zh/smart-home/migrating-from-cloud-to-local-smart-home',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: '智能家居迁移' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '本地控制' }],
      'proficiencyLevel': 'Intermediate',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '我能保留现有设备吗？', acceptedAnswer: { '@type': 'Answer', text: '很多都能。使用 Zigbee、Z-Wave、Matter 或本地 Wi-Fi API 的设备可重新配对到本地中枢。只有基础控制就要求厂商账户的仅限云端设备才需要替换。' } },
        { '@type': 'Question', name: '哪些无法本地化？', acceptedAnswer: { '@type': 'Answer', text: '完全依赖厂商云端的仅限云端设备——常见的有部分摄像头和门铃——通常需替换为支持本地的替代品，例如搭配 Frigate 的 RTSP 摄像头。' } },
        { '@type': 'Question', name: '迁移需要多久？', acceptedAnswer: { '@type': 'Answer', text: '取决于规模，但按房间迁移能避免停摆。许多人在一个周末迁移核心中枢和几个房间，然后在数周内替换仅限云端的设备。' } },
        { '@type': 'Question', name: '迁移时会失去语音控制吗？', acceptedAnswer: { '@type': 'Answer', text: '不会，只要在退役云端助手前先添加本地语音助手。由 Assist、Whisper 和 Piper 组成的本地堆栈（可选本地 LLM）可在无云端下取代 Alexa 或 Google。' } },
      ],
    },
  },
}
