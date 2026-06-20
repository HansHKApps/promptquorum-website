import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: Which Is Right? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home: 2026 Comparison',
    intro:
      'Home Assistant, Amazon Alexa, and Google Home suit different priorities: Home Assistant wins on privacy and local control, while Alexa and Google win on plug-and-play convenience. This head-to-head compares privacy, local control, device support, voice, AI, cost, and effort, and recommends the right choice by user type.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home: 2026 comparison covering privacy, local control, voice, AI, and cost — which smart home platform fits you best?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: privacy and local control vs plug-and-play convenience. The 2026 head-to-head and who each fits.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'People choosing between Home Assistant, Alexa, and Google Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'best smart home platform 2026',
      'private smart home platform',
    ],
    leadAnswerBlock:
      '**Choose Home Assistant for privacy and full local control, and Amazon Alexa or Google Home for the easiest plug-and-play start.** Home Assistant takes more setup but keeps data local and runs offline; Alexa and Google are simpler but cloud-dependent.',
    quickAnswerTop: {
      en: {
        question: 'Should I choose Home Assistant, Alexa, or Google Home?',
        answer:
          'Choose Home Assistant if you value privacy, local control, and flexibility and accept more setup. Choose Amazon Alexa or Google Home if you want the easiest setup, broad device and voice support, and do not mind cloud dependence. Home Assistant can also bridge Alexa and Google, so the choice is not strictly exclusive.',
        bullets: [
          'Home Assistant: most private, local, flexible; most effort',
          'Alexa: easiest start, widest voice device support',
          'Google Home: strong voice, broad support, cloud-first',
          'Privacy and local control vs plug-and-play convenience',
          'Home Assistant can bridge the cloud assistants',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'The Three Options', anchor: 'three-options' },
      { label: 'The Comparison', anchor: 'comparison' },
      { label: 'Privacy Winner', anchor: 'privacy-winner' },
      { label: 'Convenience Winner', anchor: 'convenience-winner' },
      { label: 'AI and Voice', anchor: 'ai-voice' },
      { label: 'Recommendation by User', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant wins on privacy and local control; Alexa and Google Home win on plug-and-play convenience and broad voice support.' },
      { type: 'plain-terms', content: 'These three are the common smart home choices. Alexa and Google Home are the easiest to set up but run through company clouds. Home Assistant takes more effort but keeps everything local and private — and it can even tie Alexa and Google in if you want.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant: most private, full local control, most flexible, most setup effort',
          'Amazon Alexa: easiest start, widest voice and device support, cloud-first',
          'Google Home: strong voice assistant, broad support, cloud-first',
          'Privacy and local control are the deciding factors',
          'Home Assistant adds local AI (Ollama + voice) that the cloud assistants do not match privately',
          'Home Assistant can bridge Alexa and Google, lowering the cost of choosing it',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'The Three Options',
        content:
          '**Home Assistant is local-first and private; Alexa and Google Home are cloud-first and convenient.** Each fits a different priority.',
        items: [
          '**Home Assistant:** open-source, local-first, the most flexible and private — see [getting started](/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** widest device and voice-skill support, easiest start, cloud-first.',
          '**Google Home:** strong voice and broad support, cloud-first.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'The Comparison',
        content:
          '**Home Assistant leads on privacy, local control, and AI; Alexa and Google lead on ease and voice breadth.** Use the table to match a platform to your priority.',
        columns: ['Criterion', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Criterion': 'Privacy', 'Home Assistant': 'Best (local)', 'Amazon Alexa': 'Cloud data', 'Google Home': 'Cloud data' },
          { 'Criterion': 'Local control', 'Home Assistant': 'Full', 'Amazon Alexa': 'Limited', 'Google Home': 'Limited' },
          { 'Criterion': 'Device support', 'Home Assistant': 'Widest via integrations', 'Amazon Alexa': 'Widest voice', 'Google Home': 'Broad' },
          { 'Criterion': 'Voice', 'Home Assistant': 'Local (Assist)', 'Amazon Alexa': 'Strong (cloud)', 'Google Home': 'Strong (cloud)' },
          { 'Criterion': 'AI', 'Home Assistant': 'Local LLM (Ollama)', 'Amazon Alexa': 'Cloud assistant', 'Google Home': 'Cloud assistant' },
          { 'Criterion': 'Cost', 'Home Assistant': 'Hardware + effort', 'Amazon Alexa': 'Low hardware', 'Google Home': 'Low hardware' },
          { 'Criterion': 'Effort', 'Home Assistant': 'Higher', 'Amazon Alexa': 'Low', 'Google Home': 'Low' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Privacy Winner: Home Assistant',
        content:
          '**Home Assistant wins on privacy because control, voice, and AI all run locally with no vendor data collection.** Choose it if privacy is your top priority.',
        items: [
          'No usage data, recordings, or footage leaves your home — see [smart home privacy risks](/smart-home/smart-home-privacy-risks).',
          'Add a local voice assistant and LLM for private natural-language control.',
          'Accept more setup effort in exchange.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Convenience Winner: Alexa or Google',
        content:
          '**Amazon Alexa and Google Home win on convenience because setup is app-guided and devices are widely supported out of the box.** Choose them if minimal effort matters most.',
        items: [
          'Use Alexa for the widest voice-skill ecosystem.',
          'Use Google Home if you prefer Google\'s assistant and services.',
          'Accept cloud dependence and the privacy trade-off — see [why local beats cloud](/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'AI and Voice',
        content:
          '**Alexa and Google offer polished cloud voice; Home Assistant offers private local voice and a local LLM brain.** The choice is cloud polish versus private control.',
        items: [
          'Cloud assistants are tuned for low-latency, broad voice skills.',
          'Home Assistant runs Assist + Whisper + Piper + a local LLM privately — see [running your smart home on a local LLM](/smart-home/local-llm-smart-home-complete-guide).',
          'Compare voice approaches in [local vs cloud voice assistants](/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommendation by User',
        content:
          '**Privacy-focused or tinkerer → Home Assistant; convenience-first beginner → Alexa or Google; unsure but privacy matters → start with Home Assistant.** You can bridge the cloud assistants into Home Assistant later.',
        items: [
          '**Privacy / control:** Home Assistant.',
          '**Easiest start:** Amazon Alexa or Google Home.',
          '**Best private AI:** Home Assistant with a local LLM.',
          '**Want the full platform comparison?** See [smart home ecosystems compared](/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Which is most private?', a: 'Home Assistant is the most private because control, voice, and AI run locally on your own hardware with no vendor data collection. Alexa and Google Home are cloud-first and send usage and voice data to vendor servers.' },
          { q: 'Which is easiest?', a: 'Amazon Alexa and Google Home are easiest because setup is app-guided and cloud-managed, with broad out-of-the-box device support. Home Assistant offers more privacy and control but takes more setup effort.' },
          { q: 'Which has the best AI?', a: 'For private AI, Home Assistant leads because it can run a local LLM as a conversation agent with no cloud. Alexa and Google have polished cloud assistants, but those process your data on vendor servers.' },
          { q: 'Can I switch platforms later?', a: 'Yes, though it takes effort. Home Assistant can integrate and bridge Alexa and Google, so you can adopt it gradually. Moving from a cloud ecosystem to local control is a manageable, room-by-room migration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Smart Home Ecosystems Compared](/smart-home/smart-home-ecosystems-compared) — the full four-platform comparison',
          '[Home Assistant: Getting-Started Guide](/smart-home/home-assistant-getting-started) — set up the private option',
          '[Local vs Cloud Voice Assistants](/smart-home/local-vs-cloud-voice-assistant) — the voice decision',
          '[Why a Local Smart Home Beats the Cloud](/smart-home/why-local-smart-home-beats-cloud) — the local case',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: Which Is Right? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home: 2026 comparison covering privacy, local control, voice, AI, and cost — which smart home platform fits you best?',
      url: 'https://www.promptquorum.com/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Which is most private?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant, because control, voice, and AI run locally with no vendor data collection. Alexa and Google Home are cloud-first and send usage and voice data to vendor servers.' } },
        { '@type': 'Question', name: 'Which is easiest?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa and Google Home, because setup is app-guided and cloud-managed with broad out-of-the-box support. Home Assistant offers more control but takes more effort.' } },
        { '@type': 'Question', name: 'Which has the best AI?', acceptedAnswer: { '@type': 'Answer', text: 'For private AI, Home Assistant, because it can run a local LLM as a conversation agent with no cloud. Alexa and Google have polished cloud assistants that process data on vendor servers.' } },
        { '@type': 'Question', name: 'Can I switch platforms later?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, with effort. Home Assistant can integrate and bridge Alexa and Google, so you can adopt it gradually in a room-by-room migration.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant مقابل Alexa مقابل Google Home: أيهم الأنسب؟ (2026)',
    seoTitle: 'Home Assistant مقابل Alexa مقابل Google Home 2026',
    intro:
      'يناسب Home Assistant وAmazon Alexa وGoogle Home أولويات مختلفة: يتفوق Home Assistant على صعيد الخصوصية والتحكم المحلي، في حين يتفوق Alexa وGoogle على صعيد سهولة الإعداد الفوري. تقارن هذه المراجعة المباشرة الخصوصية والتحكم المحلي ودعم الأجهزة والصوت والذكاء الاصطناعي والتكلفة والجهد، وتوصي بالاختيار المناسب حسب نوع المستخدم.',
    metaDescription:
      'Home Assistant يحتفظ بالبيانات محليًا بينما Alexa وGoogle Home تعتمدان السحابة: مقارنة 2026 للخصوصية والتحكم المحلي والصوت والذكاء الاصطناعي.',
    twitterDescription:
      'Home Assistant مقابل Alexa مقابل Google Home: الخصوصية والتحكم المحلي مقابل سهولة الإعداد الفوري. المواجهة المباشرة لعام 2026 ومن يناسب كل خيار.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'الأشخاص الذين يختارون بين Home Assistant وAlexa وGoogle Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant مقابل alexa مقابل google home',
      'home assistant مقابل alexa',
      'alexa مقابل google home',
      'أفضل منصة منزل ذكي 2026',
      'منصة منزل ذكي خاصة',
    ],
    leadAnswerBlock:
      '**اختر Home Assistant للخصوصية والتحكم المحلي الكامل، واختر Amazon Alexa أو Google Home لأسهل بداية فورية.** يتطلب Home Assistant إعدادًا أكثر لكنه يحتفظ بالبيانات محليًا ويعمل دون إنترنت؛ Alexa وGoogle أبسط لكنهما يعتمدان على السحابة.',
    quickAnswerTop: {
      ar: {
        question: 'هل يجب أن أختار Home Assistant أم Alexa أم Google Home؟',
        answer:
          'اختر Home Assistant إذا كنت تقدّر الخصوصية والتحكم المحلي والمرونة وتقبل إعدادًا أكثر. اختر Amazon Alexa أو Google Home إذا أردت أسهل إعداد ودعمًا واسعًا للأجهزة والصوت ولا تمانع الاعتماد على السحابة. يمكن لـ Home Assistant أيضًا ربط Alexa وGoogle، لذا فالاختيار ليس صارمًا حصريًا.',
        bullets: [
          'Home Assistant: الأكثر خصوصية ومحليًا ومرونةً؛ أعلى جهد',
          'Alexa: أسهل بداية، أوسع دعم لأجهزة الصوت',
          'Google Home: صوت قوي، دعم واسع، سحابة أولًا',
          'الخصوصية والتحكم المحلي مقابل سهولة الإعداد الفوري',
          'يستطيع Home Assistant ربط المساعدات السحابية',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'الخيارات الثلاثة', anchor: 'three-options' },
      { label: 'المقارنة', anchor: 'comparison' },
      { label: 'الفائز بالخصوصية', anchor: 'privacy-winner' },
      { label: 'الفائز بالسهولة', anchor: 'convenience-winner' },
      { label: 'الذكاء الاصطناعي والصوت', anchor: 'ai-voice' },
      { label: 'التوصية حسب المستخدم', anchor: 'recommendation' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'يتفوق Home Assistant على صعيد الخصوصية والتحكم المحلي؛ ويتفوق Alexa وGoogle Home على صعيد سهولة الإعداد الفوري والدعم الصوتي الواسع.' },
      { type: 'plain-terms', content: 'هذه الخيارات الثلاثة هي الأكثر شيوعًا للمنزل الذكي. Alexa وGoogle Home هما الأسهل في الإعداد لكنهما يعملان عبر سحابات الشركات. يستلزم Home Assistant جهدًا أكبر لكنه يحتفظ بكل شيء محليًا وخاصًا — ويستطيع حتى ربط Alexa وGoogle إذا أردت.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'Home Assistant: الأكثر خصوصية، تحكم محلي كامل، الأكثر مرونة، أعلى جهد في الإعداد',
          'Amazon Alexa: أسهل بداية، أوسع دعم للصوت والأجهزة، سحابة أولًا',
          'Google Home: مساعد صوتي قوي، دعم واسع، سحابة أولًا',
          'الخصوصية والتحكم المحلي هما العاملان الحاسمان',
          'يضيف Home Assistant ذكاءً اصطناعيًا محليًا (Ollama + صوت) لا تستطيع المساعدات السحابية مجاراته بشكل خاص',
          'يستطيع Home Assistant ربط Alexa وGoogle مما يخفض تكلفة اختياره',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'الخيارات الثلاثة',
        content:
          '**Home Assistant محلي أولًا وخاص؛ Alexa وGoogle Home سحابيان أولًا وسهلان.** كل منهم يناسب أولوية مختلفة.',
        items: [
          '**Home Assistant:** مفتوح المصدر، محلي أولًا، الأكثر مرونة وخصوصية — راجع [البدء السريع](/ar/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** أوسع دعم للأجهزة ومهارات الصوت، أسهل بداية، سحابة أولًا.',
          '**Google Home:** صوت قوي ودعم واسع، سحابة أولًا.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'المقارنة',
        content:
          '**يتصدر Home Assistant على صعيد الخصوصية والتحكم المحلي والذكاء الاصطناعي؛ ويتصدر Alexa وGoogle على صعيد السهولة واتساع الصوت.** استخدم الجدول لمطابقة المنصة مع أولويتك.',
        columns: ['المعيار', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'المعيار': 'الخصوصية', 'Home Assistant': 'الأفضل (محلي)', 'Amazon Alexa': 'بيانات سحابية', 'Google Home': 'بيانات سحابية' },
          { 'المعيار': 'التحكم المحلي', 'Home Assistant': 'كامل', 'Amazon Alexa': 'محدود', 'Google Home': 'محدود' },
          { 'المعيار': 'دعم الأجهزة', 'Home Assistant': 'الأوسع عبر التكاملات', 'Amazon Alexa': 'الأوسع صوتيًا', 'Google Home': 'واسع' },
          { 'المعيار': 'الصوت', 'Home Assistant': 'محلي (Assist)', 'Amazon Alexa': 'قوي (سحابة)', 'Google Home': 'قوي (سحابة)' },
          { 'المعيار': 'الذكاء الاصطناعي', 'Home Assistant': 'نموذج LLM محلي (Ollama)', 'Amazon Alexa': 'مساعد سحابي', 'Google Home': 'مساعد سحابي' },
          { 'المعيار': 'التكلفة', 'Home Assistant': 'جهاز + جهد', 'Amazon Alexa': 'جهاز رخيص', 'Google Home': 'جهاز رخيص' },
          { 'المعيار': 'الجهد', 'Home Assistant': 'أعلى', 'Amazon Alexa': 'منخفض', 'Google Home': 'منخفض' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'الفائز بالخصوصية: Home Assistant',
        content:
          '**يفوز Home Assistant بالخصوصية لأن التحكم والصوت والذكاء الاصطناعي تعمل جميعها محليًا دون جمع بيانات من قِبل الشركة المصنّعة.** اختره إذا كانت الخصوصية أولويتك القصوى.',
        items: [
          'لا بيانات استخدام ولا تسجيلات ولا لقطات تغادر منزلك — راجع [مخاطر خصوصية المنزل الذكي](/ar/smart-home/smart-home-privacy-risks).',
          'أضف مساعدًا صوتيًا محليًا ونموذج LLM للتحكم الخاص بلغة طبيعية.',
          'اقبل جهد إعداد أكبر في المقابل.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'الفائز بالسهولة: Alexa أو Google',
        content:
          '**يفوز Amazon Alexa وGoogle Home بالسهولة لأن الإعداد موجّه بالتطبيق والأجهزة مدعومة على نطاق واسع من الصندوق.** اخترهما إذا كان الحد الأدنى من الجهد هو الأهم.',
        items: [
          'استخدم Alexa للحصول على أوسع نظام بيئي لمهارات الصوت.',
          'استخدم Google Home إذا كنت تفضّل مساعد Google وخدماته.',
          'اقبل الاعتماد على السحابة والمقايضة في الخصوصية — راجع [لماذا المحلي يتفوق على السحابة](/ar/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'الذكاء الاصطناعي والصوت',
        content:
          '**يقدم Alexa وGoogle صوتًا سحابيًا متطورًا؛ ويقدم Home Assistant صوتًا محليًا خاصًا وعقل LLM محلي.** الاختيار بين التطور السحابي والتحكم الخاص.',
        items: [
          'المساعدات السحابية معدّلة لزمن استجابة منخفض ومهارات صوت واسعة.',
          'يشغّل Home Assistant Assist + Whisper + Piper + نموذج LLM محلي بشكل خاص — راجع [تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide).',
          'قارن مناهج الصوت في [المساعدات الصوتية المحلية مقابل السحابية](/ar/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'التوصية حسب نوع المستخدم',
        content:
          '**مركّز على الخصوصية أو مولع بالتجريب → Home Assistant؛ مبتدئ يولي الأولوية للسهولة → Alexa أو Google؛ غير متأكد لكن الخصوصية تهمه → ابدأ بـ Home Assistant.** يمكنك ربط المساعدات السحابية بـ Home Assistant لاحقًا.',
        items: [
          '**الخصوصية / التحكم:** Home Assistant.',
          '**أسهل بداية:** Amazon Alexa أو Google Home.',
          '**أفضل ذكاء اصطناعي خاص:** Home Assistant مع نموذج LLM محلي.',
          '**تريد المقارنة الكاملة للمنصات؟** راجع [مقارنة أنظمة المنزل الذكي](/ar/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'أيهم الأكثر خصوصية؟', a: 'Home Assistant هو الأكثر خصوصية لأن التحكم والصوت والذكاء الاصطناعي تعمل محليًا على جهازك الخاص دون جمع بيانات من الشركة المصنّعة. Alexa وGoogle Home سحابيان أولًا ويرسلان بيانات الاستخدام والصوت إلى خوادم الشركة.' },
          { q: 'أيهم الأسهل؟', a: 'Amazon Alexa وGoogle Home هما الأسهل لأن الإعداد موجّه بالتطبيق ومُدار سحابيًا مع دعم واسع للأجهزة من الصندوق. يوفر Home Assistant خصوصية وتحكمًا أكبر لكنه يتطلب جهد إعداد أكثر.' },
          { q: 'أيهم يمتلك أفضل ذكاء اصطناعي؟', a: 'للذكاء الاصطناعي الخاص، يتصدر Home Assistant لأنه يستطيع تشغيل نموذج LLM محلي كعامل محادثة دون سحابة. Alexa وGoogle يمتلكان مساعدات سحابية متطورة لكنها تعالج بياناتك على خوادم الشركة.' },
          { q: 'هل أستطيع تغيير المنصة لاحقًا؟', a: 'نعم، وإن كان يتطلب جهدًا. يستطيع Home Assistant دمج Alexa وGoogle وربطهما، لذا يمكنك اعتماده تدريجيًا. الانتقال من نظام سحابي إلى التحكم المحلي هو ترحيل قابل للإدارة غرفة بغرفة.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[مقارنة أنظمة المنزل الذكي](/ar/smart-home/smart-home-ecosystems-compared) — المقارنة الكاملة لأربع منصات',
          '[Home Assistant: دليل البدء السريع](/ar/smart-home/home-assistant-getting-started) — إعداد الخيار الخاص',
          '[المساعدات الصوتية المحلية مقابل السحابية](/ar/smart-home/local-vs-cloud-voice-assistant) — قرار الصوت',
          '[لماذا يتفوق المنزل الذكي المحلي على السحابة](/ar/smart-home/why-local-smart-home-beats-cloud) — الحجة المحلية',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant مقابل Alexa مقابل Google Home: أيهم الأنسب؟ (2026)',
      description: 'Home Assistant مقابل Alexa مقابل Google Home: مقارنة 2026 تشمل الخصوصية والتحكم المحلي والصوت والذكاء الاصطناعي والتكلفة — أي منصة منزل ذكي تناسبك؟',
      url: 'https://www.promptquorum.com/ar/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'أيهم الأكثر خصوصية؟', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant، لأن التحكم والصوت والذكاء الاصطناعي تعمل محليًا دون جمع بيانات من الشركة المصنّعة. Alexa وGoogle Home سحابيان أولًا ويرسلان بيانات الاستخدام والصوت إلى خوادم الشركة.' } },
        { '@type': 'Question', name: 'أيهم الأسهل؟', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa وGoogle Home، لأن الإعداد موجّه بالتطبيق ومُدار سحابيًا مع دعم واسع من الصندوق. Home Assistant يوفر تحكمًا أكبر لكنه يتطلب جهدًا أكثر.' } },
        { '@type': 'Question', name: 'أيهم يمتلك أفضل ذكاء اصطناعي؟', acceptedAnswer: { '@type': 'Answer', text: 'للذكاء الاصطناعي الخاص، Home Assistant، لأنه يستطيع تشغيل نموذج LLM محلي كعامل محادثة دون سحابة. مساعدات Alexa وGoogle السحابية تعالج بياناتك على خوادم الشركة.' } },
        { '@type': 'Question', name: 'هل أستطيع تغيير المنصة لاحقًا؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم، مع جهد. يستطيع Home Assistant دمج Alexa وGoogle وربطهما، لذا يمكنك اعتماده تدريجيًا في ترحيل غرفة بغرفة.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: Was ist richtig? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home – Vergleich 2026',
    intro:
      'Home Assistant, Amazon Alexa und Google Home passen zu verschiedenen Prioritäten: Home Assistant gewinnt bei Datenschutz und lokaler Steuerung, während Alexa und Google bei Plug-and-Play-Komfort gewinnen. Dieser direkte Vergleich stellt Datenschutz, lokale Steuerung, Geräteunterstützung, Sprache, KI, Kosten und Aufwand gegenüber und empfiehlt die richtige Wahl je nach Nutzertyp.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home im Vergleich 2026. Datenschutz und lokale Steuerung vs einfacher Einstieg — welche Plattform passt zu Ihnen?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: Datenschutz und lokale Steuerung vs Plug-and-Play-Komfort. Das direkte Duell 2026 und wozu jede passt.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Menschen, die zwischen Home Assistant, Alexa und Google Home wählen',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'beste smart home plattform 2026',
      'private smart home plattform',
    ],
    leadAnswerBlock:
      '**Wählen Sie Home Assistant für Datenschutz und volle lokale Steuerung und Amazon Alexa oder Google Home für den einfachsten Plug-and-Play-Start.** Home Assistant braucht mehr Einrichtung, hält Daten aber lokal und läuft offline; Alexa und Google sind einfacher, aber cloud-abhängig.',
    quickAnswerTop: {
      de: {
        question: 'Soll ich Home Assistant, Alexa oder Google Home wählen?',
        answer:
          'Wählen Sie Home Assistant, wenn Sie Datenschutz, lokale Steuerung und Flexibilität schätzen und mehr Einrichtung akzeptieren. Wählen Sie Amazon Alexa oder Google Home, wenn Sie die einfachste Einrichtung sowie breite Geräte- und Sprachunterstützung wollen und Cloud-Abhängigkeit nicht stört. Home Assistant kann Alexa und Google auch einbinden, sodass die Wahl nicht streng exklusiv ist.',
        bullets: [
          'Home Assistant: am privatesten, lokal, flexibel; höchster Aufwand',
          'Alexa: einfachster Start, breiteste Sprachgeräteunterstützung',
          'Google Home: starke Sprache, breite Unterstützung, Cloud-zuerst',
          'Datenschutz und lokale Steuerung vs Plug-and-Play-Komfort',
          'Home Assistant kann die Cloud-Assistenten einbinden',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Die drei Optionen', anchor: 'three-options' },
      { label: 'Der Vergleich', anchor: 'comparison' },
      { label: 'Datenschutz-Sieger', anchor: 'privacy-winner' },
      { label: 'Komfort-Sieger', anchor: 'convenience-winner' },
      { label: 'KI und Sprache', anchor: 'ai-voice' },
      { label: 'Empfehlung nach Nutzer', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant gewinnt bei Datenschutz und lokaler Steuerung; Alexa und Google Home gewinnen bei Plug-and-Play-Komfort und breiter Sprachunterstützung.' },
      { type: 'plain-terms', content: 'Diese drei sind die üblichen Smart-Home-Wahlen. Alexa und Google Home sind am einfachsten einzurichten, laufen aber über Firmen-Clouds. Home Assistant braucht mehr Aufwand, hält aber alles lokal und privat – und kann Alexa und Google bei Bedarf sogar einbinden.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'Home Assistant: am privatesten, volle lokale Steuerung, am flexibelsten, höchster Einrichtungsaufwand',
          'Amazon Alexa: einfachster Start, breiteste Sprach- und Geräteunterstützung, Cloud-zuerst',
          'Google Home: starker Sprachassistent, breite Unterstützung, Cloud-zuerst',
          'Datenschutz und lokale Steuerung sind die entscheidenden Faktoren',
          'Home Assistant fügt lokale KI (Ollama + Sprache) hinzu, die die Cloud-Assistenten nicht privat erreichen',
          'Home Assistant kann Alexa und Google einbinden und senkt so die Kosten, es zu wählen',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'Die drei Optionen',
        content:
          '**Home Assistant ist local-first und privat; Alexa und Google Home sind cloud-zuerst und bequem.** Jede passt zu einer anderen Priorität.',
        items: [
          '**Home Assistant:** quelloffen, local-first, am flexibelsten und privatesten – siehe [Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** breiteste Geräte- und Sprach-Skill-Unterstützung, einfachster Start, Cloud-zuerst.',
          '**Google Home:** starke Sprache und breite Unterstützung, Cloud-zuerst.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Der Vergleich',
        content:
          '**Home Assistant führt bei Datenschutz, lokaler Steuerung und KI; Alexa und Google führen bei Einfachheit und Sprachbreite.** Nutzen Sie die Tabelle, um eine Plattform Ihrer Priorität zuzuordnen.',
        columns: ['Kriterium', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Kriterium': 'Datenschutz', 'Home Assistant': 'Am besten (lokal)', 'Amazon Alexa': 'Cloud-Daten', 'Google Home': 'Cloud-Daten' },
          { 'Kriterium': 'Lokale Steuerung', 'Home Assistant': 'Vollständig', 'Amazon Alexa': 'Begrenzt', 'Google Home': 'Begrenzt' },
          { 'Kriterium': 'Geräteunterstützung', 'Home Assistant': 'Am breitesten über Integrationen', 'Amazon Alexa': 'Breiteste Sprache', 'Google Home': 'Breit' },
          { 'Kriterium': 'Sprache', 'Home Assistant': 'Lokal (Assist)', 'Amazon Alexa': 'Stark (Cloud)', 'Google Home': 'Stark (Cloud)' },
          { 'Kriterium': 'KI', 'Home Assistant': 'Lokales LLM (Ollama)', 'Amazon Alexa': 'Cloud-Assistent', 'Google Home': 'Cloud-Assistent' },
          { 'Kriterium': 'Kosten', 'Home Assistant': 'Hardware + Aufwand', 'Amazon Alexa': 'Günstige Hardware', 'Google Home': 'Günstige Hardware' },
          { 'Kriterium': 'Aufwand', 'Home Assistant': 'Höher', 'Amazon Alexa': 'Niedrig', 'Google Home': 'Niedrig' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Datenschutz-Sieger: Home Assistant',
        content:
          '**Home Assistant gewinnt beim Datenschutz, weil Steuerung, Sprache und KI alle lokal ohne Hersteller-Datensammlung laufen.** Wählen Sie es, wenn Datenschutz Ihre oberste Priorität ist.',
        items: [
          'Keine Nutzungsdaten, Aufnahmen oder Aufzeichnungen verlassen Ihr Zuhause – siehe [Smart-Home-Datenschutzrisiken](/de/smart-home/smart-home-privacy-risks).',
          'Fügen Sie einen lokalen Sprachassistenten und ein LLM für private natürlichsprachliche Steuerung hinzu.',
          'Nehmen Sie im Gegenzug mehr Einrichtungsaufwand in Kauf.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Komfort-Sieger: Alexa oder Google',
        content:
          '**Amazon Alexa und Google Home gewinnen beim Komfort, weil die Einrichtung per App geführt ist und Geräte out of the box breit unterstützt werden.** Wählen Sie sie, wenn minimaler Aufwand am wichtigsten ist.',
        items: [
          'Nutzen Sie Alexa für das breiteste Sprach-Skill-Ökosystem.',
          'Nutzen Sie Google Home, wenn Sie Googles Assistenten und Dienste bevorzugen.',
          'Nehmen Sie Cloud-Abhängigkeit und den Datenschutz-Kompromiss in Kauf – siehe [warum lokal die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'KI und Sprache',
        content:
          '**Alexa und Google bieten polierte Cloud-Sprache; Home Assistant bietet private lokale Sprache und ein lokales LLM-Gehirn.** Die Wahl ist Cloud-Politur gegen private Kontrolle.',
        items: [
          'Cloud-Assistenten sind auf niedrige Latenz und breite Sprach-Skills abgestimmt.',
          'Home Assistant betreibt Assist + Whisper + Piper + ein lokales LLM privat – siehe [Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide).',
          'Vergleichen Sie Sprachansätze in [lokale vs Cloud-Sprachassistenten](/de/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Empfehlung nach Nutzertyp',
        content:
          '**Datenschutzorientiert oder Bastler → Home Assistant; komfort-zuerst Einsteiger → Alexa oder Google; unsicher, aber Datenschutz zählt → mit Home Assistant beginnen.** Sie können die Cloud-Assistenten später in Home Assistant einbinden.',
        items: [
          '**Datenschutz / Kontrolle:** Home Assistant.',
          '**Einfachster Start:** Amazon Alexa oder Google Home.',
          '**Beste private KI:** Home Assistant mit einem lokalen LLM.',
          '**Wollen Sie den vollständigen Plattformvergleich?** Siehe [Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Was ist am privatesten?', a: 'Home Assistant ist am privatesten, weil Steuerung, Sprache und KI lokal auf Ihrer eigenen Hardware ohne Hersteller-Datensammlung laufen. Alexa und Google Home sind cloud-zuerst und senden Nutzungs- und Sprachdaten an Hersteller-Server.' },
          { q: 'Was ist am einfachsten?', a: 'Amazon Alexa und Google Home sind am einfachsten, weil die Einrichtung per App geführt und cloud-verwaltet ist, mit breiter Out-of-the-Box-Geräteunterstützung. Home Assistant bietet mehr Datenschutz und Kontrolle, braucht aber mehr Einrichtungsaufwand.' },
          { q: 'Was hat die beste KI?', a: 'Für private KI führt Home Assistant, weil es ein lokales LLM als Konversations-Agenten ohne Cloud betreiben kann. Alexa und Google haben polierte Cloud-Assistenten, doch diese verarbeiten Ihre Daten auf Hersteller-Servern.' },
          { q: 'Kann ich die Plattform später wechseln?', a: 'Ja, wenn auch mit Aufwand. Home Assistant kann Alexa und Google integrieren und einbinden, sodass Sie es schrittweise übernehmen können. Der Wechsel von einem Cloud-Ökosystem zu lokaler Steuerung ist eine handhabbare Raum-für-Raum-Migration.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Smart-Home-Ökosysteme im Vergleich](/de/smart-home/smart-home-ecosystems-compared) – der vollständige Vier-Plattform-Vergleich',
          '[Home Assistant: Erste Schritte](/de/smart-home/home-assistant-getting-started) – die private Option einrichten',
          '[Lokale vs Cloud-Sprachassistenten](/de/smart-home/local-vs-cloud-voice-assistant) – die Sprach-Entscheidung',
          '[Warum ein lokales Smart Home die Cloud schlägt](/de/smart-home/why-local-smart-home-beats-cloud) – das lokale Argument',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: Was ist richtig? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home im Vergleich 2026. Datenschutz und lokale Steuerung vs einfacher Einstieg — welche Plattform passt zu Ihnen?',
      url: 'https://www.promptquorum.com/de/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Was ist am privatesten?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant, weil Steuerung, Sprache und KI lokal ohne Hersteller-Datensammlung laufen. Alexa und Google Home sind cloud-zuerst und senden Nutzungs- und Sprachdaten an Hersteller-Server.' } },
        { '@type': 'Question', name: 'Was ist am einfachsten?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa und Google Home, weil die Einrichtung per App geführt und cloud-verwaltet ist, mit breiter Out-of-the-Box-Unterstützung. Home Assistant bietet mehr Kontrolle, braucht aber mehr Aufwand.' } },
        { '@type': 'Question', name: 'Was hat die beste KI?', acceptedAnswer: { '@type': 'Answer', text: 'Für private KI Home Assistant, weil es ein lokales LLM als Konversations-Agenten ohne Cloud betreiben kann. Alexa und Google haben polierte Cloud-Assistenten, die Daten auf Hersteller-Servern verarbeiten.' } },
        { '@type': 'Question', name: 'Kann ich die Plattform später wechseln?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, mit Aufwand. Home Assistant kann Alexa und Google integrieren und einbinden, sodass Sie es schrittweise in einer Raum-für-Raum-Migration übernehmen können.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: ¿Cuál es el adecuado? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home: Comparativa 2026',
    intro:
      'Home Assistant, Amazon Alexa y Google Home se ajustan a prioridades distintas: Home Assistant gana en privacidad y control local, mientras que Alexa y Google ganan en comodidad plug-and-play. Este cara a cara compara privacidad, control local, soporte de dispositivos, voz, IA, coste y esfuerzo, y recomienda la elección adecuada por tipo de usuario.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home: comparativa 2026. Privacidad y control local frente a facilidad de uso — ¿qué plataforma se adapta a ti?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: privacidad y control local vs comodidad plug-and-play. El cara a cara de 2026 y a quién le encaja cada uno.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Personas que eligen entre Home Assistant, Alexa y Google Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'mejor plataforma smart home 2026',
      'plataforma smart home privada',
    ],
    leadAnswerBlock:
      '**Elige Home Assistant por privacidad y control local total, y Amazon Alexa o Google Home por el arranque plug-and-play más fácil.** Home Assistant requiere más configuración pero mantiene los datos en local y funciona sin conexión; Alexa y Google son más simples pero dependen de la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Debería elegir Home Assistant, Alexa o Google Home?',
        answer:
          'Elige Home Assistant si valoras la privacidad, el control local y la flexibilidad y aceptas más configuración. Elige Amazon Alexa o Google Home si quieres la configuración más fácil, amplio soporte de dispositivos y voz, y no te importa la dependencia de la nube. Home Assistant también puede unir Alexa y Google, así que la elección no es estrictamente exclusiva.',
        bullets: [
          'Home Assistant: el más privado, local, flexible; más esfuerzo',
          'Alexa: el arranque más fácil, mayor soporte de voz',
          'Google Home: voz fuerte, amplio soporte, nube-primero',
          'Privacidad y control local vs comodidad plug-and-play',
          'Home Assistant puede unir los asistentes en la nube',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Las tres opciones', anchor: 'three-options' },
      { label: 'La comparación', anchor: 'comparison' },
      { label: 'Ganador en privacidad', anchor: 'privacy-winner' },
      { label: 'Ganador en comodidad', anchor: 'convenience-winner' },
      { label: 'IA y voz', anchor: 'ai-voice' },
      { label: 'Recomendación por usuario', anchor: 'recommendation' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant gana en privacidad y control local; Alexa y Google Home ganan en comodidad plug-and-play y amplio soporte de voz.' },
      { type: 'plain-terms', content: 'Estas tres son las opciones comunes de smart home. Alexa y Google Home son las más fáciles de configurar pero funcionan por las nubes de las empresas. Home Assistant requiere más esfuerzo pero lo mantiene todo local y privado, y hasta puede integrar Alexa y Google si quieres.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Home Assistant: el más privado, control local total, el más flexible, más esfuerzo de configuración',
          'Amazon Alexa: el arranque más fácil, mayor soporte de voz y dispositivos, nube-primero',
          'Google Home: asistente de voz fuerte, amplio soporte, nube-primero',
          'La privacidad y el control local son los factores decisivos',
          'Home Assistant añade IA local (Ollama + voz) que los asistentes en la nube no igualan en privado',
          'Home Assistant puede unir Alexa y Google, reduciendo el coste de elegirlo',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'Las tres opciones',
        content:
          '**Home Assistant es local-first y privado; Alexa y Google Home son nube-primero y cómodos.** Cada uno encaja con una prioridad distinta.',
        items: [
          '**Home Assistant:** de código abierto, local-first, el más flexible y privado — consulta [primeros pasos](/es/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** mayor soporte de dispositivos y skills de voz, arranque más fácil, nube-primero.',
          '**Google Home:** voz fuerte y amplio soporte, nube-primero.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'La comparación',
        content:
          '**Home Assistant lidera en privacidad, control local e IA; Alexa y Google lideran en facilidad y amplitud de voz.** Usa la tabla para asignar una plataforma a tu prioridad.',
        columns: ['Criterio', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Criterio': 'Privacidad', 'Home Assistant': 'La mejor (local)', 'Amazon Alexa': 'Datos en la nube', 'Google Home': 'Datos en la nube' },
          { 'Criterio': 'Control local', 'Home Assistant': 'Completo', 'Amazon Alexa': 'Limitado', 'Google Home': 'Limitado' },
          { 'Criterio': 'Soporte de dispositivos', 'Home Assistant': 'El más amplio vía integraciones', 'Amazon Alexa': 'El más amplio en voz', 'Google Home': 'Amplio' },
          { 'Criterio': 'Voz', 'Home Assistant': 'Local (Assist)', 'Amazon Alexa': 'Fuerte (nube)', 'Google Home': 'Fuerte (nube)' },
          { 'Criterio': 'IA', 'Home Assistant': 'LLM local (Ollama)', 'Amazon Alexa': 'Asistente en la nube', 'Google Home': 'Asistente en la nube' },
          { 'Criterio': 'Coste', 'Home Assistant': 'Hardware + esfuerzo', 'Amazon Alexa': 'Hardware barato', 'Google Home': 'Hardware barato' },
          { 'Criterio': 'Esfuerzo', 'Home Assistant': 'Mayor', 'Amazon Alexa': 'Bajo', 'Google Home': 'Bajo' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Ganador en privacidad: Home Assistant',
        content:
          '**Home Assistant gana en privacidad porque el control, la voz y la IA corren todos en local sin recopilación de datos del fabricante.** Elígelo si la privacidad es tu máxima prioridad.',
        items: [
          'Ningún dato de uso, grabación ni vídeo sale de tu casa — consulta [riesgos de privacidad del smart home](/es/smart-home/smart-home-privacy-risks).',
          'Añade un asistente de voz local y un LLM para el control privado en lenguaje natural.',
          'Acepta más esfuerzo de configuración a cambio.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Ganador en comodidad: Alexa o Google',
        content:
          '**Amazon Alexa y Google Home ganan en comodidad porque la configuración está guiada por app y los dispositivos tienen amplio soporte de fábrica.** Elígelos si el mínimo esfuerzo importa más.',
        items: [
          'Usa Alexa para el ecosistema de skills de voz más amplio.',
          'Usa Google Home si prefieres el asistente y los servicios de Google.',
          'Acepta la dependencia de la nube y el compromiso de privacidad — consulta [por qué local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'IA y voz',
        content:
          '**Alexa y Google ofrecen voz en la nube pulida; Home Assistant ofrece voz local privada y un cerebro LLM local.** La elección es pulido en la nube frente a control privado.',
        items: [
          'Los asistentes en la nube están ajustados para baja latencia y amplias skills de voz.',
          'Home Assistant ejecuta Assist + Whisper + Piper + un LLM local en privado — consulta [ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide).',
          'Compara los enfoques de voz en [asistentes de voz local vs nube](/es/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recomendación por tipo de usuario',
        content:
          '**Orientado a la privacidad o aficionado → Home Assistant; principiante que prioriza la comodidad → Alexa o Google; indeciso pero la privacidad importa → empieza con Home Assistant.** Puedes unir los asistentes en la nube a Home Assistant más adelante.',
        items: [
          '**Privacidad / control:** Home Assistant.',
          '**Arranque más fácil:** Amazon Alexa o Google Home.',
          '**Mejor IA privada:** Home Assistant con un LLM local.',
          '**¿Quieres la comparación completa de plataformas?** Consulta [ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el más privado?', a: 'Home Assistant es el más privado porque el control, la voz y la IA corren en local en tu propio hardware sin recopilación de datos del fabricante. Alexa y Google Home son nube-primero y envían datos de uso y voz a servidores del fabricante.' },
          { q: '¿Cuál es el más fácil?', a: 'Amazon Alexa y Google Home son los más fáciles porque la configuración está guiada por app y gestionada en la nube, con amplio soporte de dispositivos de fábrica. Home Assistant ofrece más privacidad y control pero requiere más esfuerzo de configuración.' },
          { q: '¿Cuál tiene la mejor IA?', a: 'Para la IA privada, Home Assistant lidera porque puede ejecutar un LLM local como agente de conversación sin nube. Alexa y Google tienen asistentes en la nube pulidos, pero esos procesan tus datos en servidores del fabricante.' },
          { q: '¿Puedo cambiar de plataforma más adelante?', a: 'Sí, aunque cuesta esfuerzo. Home Assistant puede integrar y unir Alexa y Google, así que puedes adoptarlo poco a poco. Pasar de un ecosistema en la nube al control local es una migración manejable, habitación por habitación.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Ecosistemas de smart home comparados](/es/smart-home/smart-home-ecosystems-compared) — la comparación completa de cuatro plataformas',
          '[Home Assistant: primeros pasos](/es/smart-home/home-assistant-getting-started) — configura la opción privada',
          '[Asistentes de voz local vs nube](/es/smart-home/local-vs-cloud-voice-assistant) — la decisión de voz',
          '[Por qué un smart home local supera a la nube](/es/smart-home/why-local-smart-home-beats-cloud) — el argumento local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: ¿Cuál es el adecuado? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home: comparativa 2026. Privacidad y control local frente a facilidad de uso — ¿qué plataforma se adapta a ti?',
      url: 'https://www.promptquorum.com/es/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Cuál es el más privado?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant, porque el control, la voz y la IA corren en local en tu propio hardware sin recopilación de datos del fabricante. Alexa y Google Home son nube-primero y envían datos de uso y voz a servidores del fabricante.' } },
        { '@type': 'Question', name: '¿Cuál es el más fácil?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa y Google Home, porque la configuración está guiada por app y gestionada en la nube con amplio soporte de fábrica. Home Assistant ofrece más control pero requiere más esfuerzo.' } },
        { '@type': 'Question', name: '¿Cuál tiene la mejor IA?', acceptedAnswer: { '@type': 'Answer', text: 'Para la IA privada, Home Assistant, porque puede ejecutar un LLM local como agente de conversación sin nube. Alexa y Google tienen asistentes en la nube que procesan datos en servidores del fabricante.' } },
        { '@type': 'Question', name: '¿Puedo cambiar de plataforma más adelante?', acceptedAnswer: { '@type': 'Answer', text: 'Sí, con esfuerzo. Home Assistant puede integrar y unir Alexa y Google, así que puedes adoptarlo poco a poco en una migración habitación por habitación.' } },
      ],
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: 어떤 것이 맞습니까? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home: 2026년 비교',
    intro:
      'Home Assistant, Amazon Alexa, Google Home은 서로 다른 우선 순위에 맞습니다: Home Assistant는 개인정보 보호와 로컬 제어에서 우수하고, Alexa와 Google은 플러그 앤 플레이 편의성에서 우수합니다. 이 비교는 개인정보 보호, 로컬 제어, 기기 지원, 음성, AI, 비용, 노력을 비교하고 사용자 유형별로 적합한 선택을 추천합니다.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home: 2026년 비교. 개인정보 보호와 로컬 제어 대 편의성 — 어떤 스마트 홈 플랫폼이 맞습니까?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: 개인정보 보호와 로컬 제어 대 플러그 앤 플레이 편의성. 2026년 직접 비교와 각각이 맞는 사용자.',
    readTime: '8분 분량',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant, Alexa, Google Home 중에서 선택하는 사람들',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'Home Assistant vs Alexa vs Google Home',
      'Home Assistant vs Alexa',
      'Alexa vs Google Home',
      '2026년 최고의 스마트 홈 플랫폼',
      '사적 스마트 홈 플랫폼',
    ],
    leadAnswerBlock:
      '**개인정보 보호와 완전한 로컬 제어를 위해 Home Assistant를 선택하고, 가장 쉬운 플러그 앤 플레이 시작을 위해 Amazon Alexa 또는 Google Home을 선택하십시오.** Home Assistant는 더 많은 설정이 필요하지만 데이터를 로컬에 유지하고 오프라인에서도 작동합니다. Alexa와 Google은 더 단순하지만 클라우드에 의존합니다.',
    quickAnswerTop: {
      ko: {
        question: 'Home Assistant, Alexa, Google Home 중 어떤 것을 선택해야 합니까?',
        answer:
          '개인정보 보호, 로컬 제어, 유연성을 중시하고 더 많은 설정을 허용한다면 Home Assistant를 선택하십시오. 가장 쉬운 설정, 광범위한 기기 및 음성 지원을 원하고 클라우드 의존이 괜찮다면 Amazon Alexa 또는 Google Home을 선택하십시오. Home Assistant는 Alexa와 Google을 브리지할 수도 있으므로 선택이 엄격히 배타적이지 않습니다.',
        bullets: [
          'Home Assistant: 가장 사적, 로컬, 유연; 가장 많은 노력',
          'Alexa: 가장 쉬운 시작, 가장 넓은 음성 기기 지원',
          'Google Home: 강력한 음성, 광범위한 지원, 클라우드 우선',
          '개인정보 보호와 로컬 제어 대 플러그 앤 플레이 편의성',
          'Home Assistant는 클라우드 어시스턴트를 브리지할 수 있습니다',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: '세 가지 옵션', anchor: 'three-options' },
      { label: '비교', anchor: 'comparison' },
      { label: '개인정보 보호 우승자', anchor: 'privacy-winner' },
      { label: '편의성 우승자', anchor: 'convenience-winner' },
      { label: 'AI와 음성', anchor: 'ai-voice' },
      { label: '사용자별 추천', anchor: 'recommendation' },
      { label: '자주 묻는 질문', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant는 개인정보 보호와 로컬 제어에서 우수하고, Alexa와 Google Home은 플러그 앤 플레이 편의성과 광범위한 음성 지원에서 우수합니다.' },
      { type: 'plain-terms', content: '이 세 가지가 일반적인 스마트 홈 선택입니다. Alexa와 Google Home은 설정이 가장 쉽지만 기업 클라우드를 통해 실행됩니다. Home Assistant는 더 많은 노력이 필요하지만 모든 것을 로컬하고 사적으로 유지합니다 — 원한다면 Alexa와 Google도 연결할 수 있습니다.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Home Assistant: 가장 사적, 완전한 로컬 제어, 가장 유연, 가장 많은 설정 노력',
          'Amazon Alexa: 가장 쉬운 시작, 가장 넓은 음성 및 기기 지원, 클라우드 우선',
          'Google Home: 강력한 음성 어시스턴트, 광범위한 지원, 클라우드 우선',
          '개인정보 보호와 로컬 제어가 결정적인 요소입니다',
          'Home Assistant는 클라우드 어시스턴트가 사적으로 대응할 수 없는 로컬 AI(Ollama + 음성)를 추가합니다',
          'Home Assistant는 Alexa와 Google을 브리지할 수 있어 선택 비용을 낮춥니다',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: '세 가지 옵션',
        content:
          '**Home Assistant는 로컬 우선이고 사적입니다. Alexa와 Google Home은 클라우드 우선이고 편리합니다.** 각각은 다른 우선 순위에 맞습니다.',
        items: [
          '**Home Assistant:** 오픈 소스, 로컬 우선, 가장 유연하고 사적 — [시작하기](/ko/smart-home/home-assistant-getting-started)를 참조하십시오.',
          '**Amazon Alexa:** 가장 넓은 기기 및 음성 스킬 지원, 가장 쉬운 시작, 클라우드 우선.',
          '**Google Home:** 강력한 음성과 광범위한 지원, 클라우드 우선.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '비교',
        content:
          '**Home Assistant는 개인정보 보호, 로컬 제어, AI에서 앞서고, Alexa와 Google은 편의성과 음성 범위에서 앞섭니다.** 테이블을 사용하여 플랫폼을 우선 순위에 맞추십시오.',
        columns: ['기준', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { '기준': '개인정보 보호', 'Home Assistant': '최고(로컬)', 'Amazon Alexa': '클라우드 데이터', 'Google Home': '클라우드 데이터' },
          { '기준': '로컬 제어', 'Home Assistant': '완전', 'Amazon Alexa': '제한적', 'Google Home': '제한적' },
          { '기준': '기기 지원', 'Home Assistant': '통합을 통해 가장 넓음', 'Amazon Alexa': '가장 넓은 음성', 'Google Home': '광범위' },
          { '기준': '음성', 'Home Assistant': '로컬(Assist)', 'Amazon Alexa': '강력(클라우드)', 'Google Home': '강력(클라우드)' },
          { '기준': 'AI', 'Home Assistant': '로컬 LLM(Ollama)', 'Amazon Alexa': '클라우드 어시스턴트', 'Google Home': '클라우드 어시스턴트' },
          { '기준': '비용', 'Home Assistant': '하드웨어 + 노력', 'Amazon Alexa': '저렴한 하드웨어', 'Google Home': '저렴한 하드웨어' },
          { '기준': '노력', 'Home Assistant': '높음', 'Amazon Alexa': '낮음', 'Google Home': '낮음' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: '개인정보 보호 우승자: Home Assistant',
        content:
          '**Home Assistant는 제어, 음성, AI가 모두 제조사 데이터 수집 없이 로컬에서 실행되기 때문에 개인정보 보호에서 우수합니다.** 개인정보 보호가 최우선 순위라면 이것을 선택하십시오.',
        items: [
          '사용 데이터, 녹음, 영상이 집 밖으로 나가지 않습니다 — [스마트 홈 개인정보 보호 위험](/ko/smart-home/smart-home-privacy-risks)을 참조하십시오.',
          '사적 자연어 제어를 위해 로컬 음성 어시스턴트와 LLM을 추가하십시오.',
          '그 대신 더 많은 설정 노력을 감수하십시오.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: '편의성 우승자: Alexa 또는 Google',
        content:
          '**Amazon Alexa와 Google Home은 앱으로 안내되는 설정과 기기의 광범위한 지원 때문에 편의성에서 우수합니다.** 최소한의 노력이 가장 중요하다면 이것들을 선택하십시오.',
        items: [
          '가장 넓은 음성 스킬 생태계를 위해 Alexa를 사용하십시오.',
          'Google의 어시스턴트와 서비스를 선호한다면 Google Home을 사용하십시오.',
          '클라우드 의존과 개인정보 보호 절충을 감수하십시오 — [로컬이 클라우드를 이기는 이유](/ko/smart-home/why-local-smart-home-beats-cloud)를 참조하십시오.',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'AI와 음성',
        content:
          '**Alexa와 Google은 세련된 클라우드 음성을 제공하고, Home Assistant는 사적 로컬 음성과 로컬 LLM 두뇌를 제공합니다.** 선택은 클라우드 세련미 대 사적 제어입니다.',
        items: [
          '클라우드 어시스턴트는 낮은 지연 시간과 광범위한 음성 스킬에 맞게 조정되어 있습니다.',
          'Home Assistant는 Assist + Whisper + Piper + 로컬 LLM을 사적으로 실행합니다 — [로컬 LLM으로 스마트 홈 실행](/ko/smart-home/local-llm-smart-home-complete-guide)을 참조하십시오.',
          '[로컬 대 클라우드 음성 어시스턴트](/ko/smart-home/local-vs-cloud-voice-assistant)에서 음성 접근 방식을 비교하십시오.',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: '사용자별 추천',
        content:
          '**개인정보 중심 또는 DIY 사용자 → Home Assistant; 편의성 우선 초보자 → Alexa 또는 Google; 불확실하지만 개인정보가 중요하다면 → Home Assistant로 시작하십시오.** 나중에 클라우드 어시스턴트를 Home Assistant에 브리지할 수 있습니다.',
        items: [
          '**개인정보 / 제어:** Home Assistant.',
          '**가장 쉬운 시작:** Amazon Alexa 또는 Google Home.',
          '**최고의 사적 AI:** 로컬 LLM을 갖춘 Home Assistant.',
          '**전체 플랫폼 비교를 원합니까?** [스마트 홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared)를 참조하십시오.',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: '어떤 것이 가장 사적입니까?', a: 'Home Assistant가 가장 사적입니다. 제어, 음성, AI가 모두 제조사 데이터 수집 없이 자체 하드웨어에서 로컬로 실행됩니다. Alexa와 Google Home은 클라우드 우선으로 사용 및 음성 데이터를 제조사 서버로 전송합니다.' },
          { q: '어떤 것이 가장 쉽습니까?', a: 'Amazon Alexa와 Google Home이 가장 쉽습니다. 설정이 앱으로 안내되고 클라우드로 관리되며 광범위한 기기 지원이 제공됩니다. Home Assistant는 더 많은 개인정보 보호와 제어를 제공하지만 더 많은 설정 노력이 필요합니다.' },
          { q: '어떤 것이 최고의 AI를 가지고 있습니까?', a: '사적 AI를 위해서는 Home Assistant가 앞섭니다. 클라우드 없이 로컬 LLM을 대화 에이전트로 실행할 수 있습니다. Alexa와 Google은 세련된 클라우드 어시스턴트를 가지고 있지만 데이터를 제조사 서버에서 처리합니다.' },
          { q: '나중에 플랫폼을 바꿀 수 있습니까?', a: '네, 하지만 노력이 필요합니다. Home Assistant는 Alexa와 Google을 통합하고 브리지할 수 있어 점진적으로 도입할 수 있습니다. 클라우드 생태계에서 로컬 제어로의 전환은 방별로 관리 가능한 마이그레이션입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[스마트 홈 생태계 비교](/ko/smart-home/smart-home-ecosystems-compared) — 네 플랫폼 전체 비교',
          '[Home Assistant: 시작 가이드](/ko/smart-home/home-assistant-getting-started) — 사적 옵션 설정',
          '[로컬 대 클라우드 음성 어시스턴트](/ko/smart-home/local-vs-cloud-voice-assistant) — 음성 결정',
          '[로컬 스마트 홈이 클라우드를 이기는 이유](/ko/smart-home/why-local-smart-home-beats-cloud) — 로컬의 논거',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: 어떤 것이 맞습니까? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home: 2026년 비교. 개인정보 보호와 로컬 제어 대 편의성 — 어떤 스마트 홈 플랫폼이 맞습니까?',
      url: 'https://www.promptquorum.com/ko/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'ko',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        { '@type': 'Question', name: '어떤 것이 가장 사적입니까?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant. 제어, 음성, AI가 모두 로컬에서 제조사 데이터 수집 없이 실행됩니다. Alexa와 Google Home은 클라우드 우선으로 사용 및 음성 데이터를 제조사 서버로 전송합니다.' } },
        { '@type': 'Question', name: '어떤 것이 가장 쉽습니까?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa와 Google Home. 설정이 앱으로 안내되고 클라우드로 관리되며 광범위한 기기 지원이 제공됩니다. Home Assistant는 더 많은 제어를 제공하지만 더 많은 노력이 필요합니다.' } },
        { '@type': 'Question', name: '어떤 것이 최고의 AI를 가지고 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '사적 AI를 위해서는 Home Assistant. 클라우드 없이 로컬 LLM을 대화 에이전트로 실행할 수 있습니다. Alexa와 Google의 클라우드 어시스턴트는 데이터를 제조사 서버에서 처리합니다.' } },
        { '@type': 'Question', name: '나중에 플랫폼을 바꿀 수 있습니까?', acceptedAnswer: { '@type': 'Answer', text: '네, 노력이 필요합니다. Home Assistant는 Alexa와 Google을 통합하고 브리지할 수 있어 방별 마이그레이션으로 점진적으로 도입할 수 있습니다.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home : Lequel choisir ? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home : Comparatif 2026',
    intro:
      'Home Assistant, Amazon Alexa et Google Home conviennent à des priorités différentes : Home Assistant gagne sur la confidentialité et le contrôle local, tandis qu\'Alexa et Google gagnent sur la commodité prête à l\'emploi. Ce face-à-face compare confidentialité, contrôle local, prise en charge des appareils, voix, IA, coût et effort, et recommande le bon choix par type d\'utilisateur.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home : comparatif 2026. Confidentialité et contrôle local face à la simplicité — quelle plateforme vous convient ?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home : confidentialité et contrôle local vs commodité prête à l\'emploi. Le face-à-face 2026 et à qui chacun convient.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Personnes choisissant entre Home Assistant, Alexa et Google Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'meilleure plateforme maison connectée 2026',
      'plateforme maison connectée privée',
    ],
    leadAnswerBlock:
      '**Choisissez Home Assistant pour la confidentialité et le contrôle local complet, et Amazon Alexa ou Google Home pour le démarrage prêt à l\'emploi le plus facile.** Home Assistant demande plus de configuration mais garde les données en local et fonctionne hors ligne ; Alexa et Google sont plus simples mais dépendants du cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Dois-je choisir Home Assistant, Alexa ou Google Home ?',
        answer:
          'Choisissez Home Assistant si vous valorisez la confidentialité, le contrôle local et la flexibilité et acceptez plus de configuration. Choisissez Amazon Alexa ou Google Home si vous voulez la configuration la plus facile, une large prise en charge des appareils et de la voix, et que la dépendance au cloud ne vous dérange pas. Home Assistant peut aussi relier Alexa et Google, donc le choix n\'est pas strictement exclusif.',
        bullets: [
          'Home Assistant : le plus privé, local, flexible ; le plus d\'effort',
          'Alexa : le démarrage le plus facile, la plus large prise en charge vocale',
          'Google Home : voix puissante, large prise en charge, cloud d\'abord',
          'Confidentialité et contrôle local vs commodité prête à l\'emploi',
          'Home Assistant peut relier les assistants cloud',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Les trois options', anchor: 'three-options' },
      { label: 'La comparaison', anchor: 'comparison' },
      { label: 'Vainqueur confidentialité', anchor: 'privacy-winner' },
      { label: 'Vainqueur commodité', anchor: 'convenience-winner' },
      { label: 'IA et voix', anchor: 'ai-voice' },
      { label: 'Recommandation par utilisateur', anchor: 'recommendation' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant gagne sur la confidentialité et le contrôle local ; Alexa et Google Home gagnent sur la commodité prête à l\'emploi et la large prise en charge vocale.' },
      { type: 'plain-terms', content: 'Ces trois sont les choix courants de maison connectée. Alexa et Google Home sont les plus faciles à configurer mais passent par les clouds des entreprises. Home Assistant demande plus d\'effort mais garde tout local et privé — et il peut même intégrer Alexa et Google si vous le souhaitez.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Home Assistant : le plus privé, contrôle local complet, le plus flexible, le plus d\'effort de configuration',
          'Amazon Alexa : le démarrage le plus facile, la plus large prise en charge vocale et d\'appareils, cloud d\'abord',
          'Google Home : assistant vocal puissant, large prise en charge, cloud d\'abord',
          'La confidentialité et le contrôle local sont les facteurs décisifs',
          'Home Assistant ajoute une IA locale (Ollama + voix) que les assistants cloud n\'égalent pas en privé',
          'Home Assistant peut relier Alexa et Google, abaissant le coût de le choisir',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'Les trois options',
        content:
          '**Home Assistant est local-first et privé ; Alexa et Google Home sont cloud d\'abord et pratiques.** Chacun correspond à une priorité différente.',
        items: [
          '**Home Assistant :** open source, local-first, le plus flexible et le plus privé — voir [premiers pas](/fr/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa :** la plus large prise en charge d\'appareils et de skills vocaux, le démarrage le plus facile, cloud d\'abord.',
          '**Google Home :** voix puissante et large prise en charge, cloud d\'abord.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'La comparaison',
        content:
          '**Home Assistant mène sur la confidentialité, le contrôle local et l\'IA ; Alexa et Google mènent sur la facilité et l\'étendue vocale.** Utilisez le tableau pour associer une plateforme à votre priorité.',
        columns: ['Critère', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Critère': 'Confidentialité', 'Home Assistant': 'La meilleure (locale)', 'Amazon Alexa': 'Données cloud', 'Google Home': 'Données cloud' },
          { 'Critère': 'Contrôle local', 'Home Assistant': 'Complet', 'Amazon Alexa': 'Limité', 'Google Home': 'Limité' },
          { 'Critère': 'Prise en charge des appareils', 'Home Assistant': 'La plus large via intégrations', 'Amazon Alexa': 'La plus large en voix', 'Google Home': 'Large' },
          { 'Critère': 'Voix', 'Home Assistant': 'Locale (Assist)', 'Amazon Alexa': 'Puissante (cloud)', 'Google Home': 'Puissante (cloud)' },
          { 'Critère': 'IA', 'Home Assistant': 'LLM local (Ollama)', 'Amazon Alexa': 'Assistant cloud', 'Google Home': 'Assistant cloud' },
          { 'Critère': 'Coût', 'Home Assistant': 'Matériel + effort', 'Amazon Alexa': 'Matériel bon marché', 'Google Home': 'Matériel bon marché' },
          { 'Critère': 'Effort', 'Home Assistant': 'Plus élevé', 'Amazon Alexa': 'Faible', 'Google Home': 'Faible' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Vainqueur confidentialité : Home Assistant',
        content:
          '**Home Assistant gagne sur la confidentialité car le contrôle, la voix et l\'IA tournent tous en local sans collecte de données par le fabricant.** Choisissez-le si la confidentialité est votre priorité absolue.',
        items: [
          'Aucune donnée d\'usage, aucun enregistrement ni image ne quitte votre maison — voir [risques de confidentialité de la maison connectée](/fr/smart-home/smart-home-privacy-risks).',
          'Ajoutez un assistant vocal local et un LLM pour un contrôle privé en langage naturel.',
          'Acceptez plus d\'effort de configuration en échange.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Vainqueur commodité : Alexa ou Google',
        content:
          '**Amazon Alexa et Google Home gagnent sur la commodité car la configuration est guidée par application et les appareils sont largement pris en charge prêts à l\'emploi.** Choisissez-les si l\'effort minimal compte le plus.',
        items: [
          'Utilisez Alexa pour le plus large écosystème de skills vocaux.',
          'Utilisez Google Home si vous préférez l\'assistant et les services de Google.',
          'Acceptez la dépendance au cloud et le compromis de confidentialité — voir [pourquoi le local bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'IA et voix',
        content:
          '**Alexa et Google offrent une voix cloud aboutie ; Home Assistant offre une voix locale privée et un cerveau LLM local.** Le choix est finition cloud contre contrôle privé.',
        items: [
          'Les assistants cloud sont réglés pour une faible latence et de larges skills vocaux.',
          'Home Assistant fait tourner Assist + Whisper + Piper + un LLM local en privé — voir [faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide).',
          'Comparez les approches vocales dans [assistants vocaux local vs cloud](/fr/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recommandation par type d\'utilisateur',
        content:
          '**Axé confidentialité ou bidouilleur → Home Assistant ; débutant privilégiant la commodité → Alexa ou Google ; indécis mais la confidentialité compte → commencez par Home Assistant.** Vous pouvez relier les assistants cloud à Home Assistant plus tard.',
        items: [
          '**Confidentialité / contrôle :** Home Assistant.',
          '**Démarrage le plus facile :** Amazon Alexa ou Google Home.',
          '**Meilleure IA privée :** Home Assistant avec un LLM local.',
          '**Vous voulez la comparaison complète des plateformes ?** Voir [écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Lequel est le plus privé ?', a: 'Home Assistant est le plus privé car le contrôle, la voix et l\'IA tournent en local sur votre propre matériel sans collecte de données par le fabricant. Alexa et Google Home sont cloud d\'abord et envoient les données d\'usage et de voix aux serveurs du fabricant.' },
          { q: 'Lequel est le plus facile ?', a: 'Amazon Alexa et Google Home sont les plus faciles car la configuration est guidée par application et gérée dans le cloud, avec une large prise en charge prête à l\'emploi. Home Assistant offre plus de confidentialité et de contrôle mais demande plus d\'effort de configuration.' },
          { q: 'Lequel a la meilleure IA ?', a: 'Pour l\'IA privée, Home Assistant mène car il peut faire tourner un LLM local comme agent de conversation sans cloud. Alexa et Google ont des assistants cloud aboutis, mais ceux-ci traitent vos données sur les serveurs du fabricant.' },
          { q: 'Puis-je changer de plateforme plus tard ?', a: 'Oui, avec de l\'effort. Home Assistant peut intégrer et relier Alexa et Google, vous pouvez donc l\'adopter progressivement. Passer d\'un écosystème cloud au contrôle local est une migration gérable, pièce par pièce.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Écosystèmes de maison connectée comparés](/fr/smart-home/smart-home-ecosystems-compared) — la comparaison complète des quatre plateformes',
          '[Home Assistant : premiers pas](/fr/smart-home/home-assistant-getting-started) — configurer l\'option privée',
          '[Assistants vocaux local vs cloud](/fr/smart-home/local-vs-cloud-voice-assistant) — la décision sur la voix',
          '[Pourquoi une maison connectée locale bat le cloud](/fr/smart-home/why-local-smart-home-beats-cloud) — l\'argument local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home : Lequel choisir ? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home : comparatif 2026. Confidentialité et contrôle local face à la simplicité — quelle plateforme vous convient ?',
      url: 'https://www.promptquorum.com/fr/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Lequel est le plus privé ?', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant, car le contrôle, la voix et l\'IA tournent en local sur votre propre matériel sans collecte de données par le fabricant. Alexa et Google Home sont cloud d\'abord et envoient les données aux serveurs du fabricant.' } },
        { '@type': 'Question', name: 'Lequel est le plus facile ?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa et Google Home, car la configuration est guidée par application et gérée dans le cloud avec une large prise en charge prête à l\'emploi. Home Assistant offre plus de contrôle mais demande plus d\'effort.' } },
        { '@type': 'Question', name: 'Lequel a la meilleure IA ?', acceptedAnswer: { '@type': 'Answer', text: 'Pour l\'IA privée, Home Assistant, car il peut faire tourner un LLM local comme agent de conversation sans cloud. Alexa et Google ont des assistants cloud qui traitent vos données sur les serveurs du fabricant.' } },
        { '@type': 'Question', name: 'Puis-je changer de plateforme plus tard ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, avec de l\'effort. Home Assistant peut intégrer et relier Alexa et Google, vous pouvez donc l\'adopter progressivement dans une migration pièce par pièce.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant 対 Alexa 対 Google Home：どれが正解？（2026）',
    seoTitle: 'Home Assistant 対 Alexa 対 Google Home 比較ガイド（2026）',
    intro:
      'Home Assistant、Amazon Alexa、Google Home は、それぞれ異なる優先事項に合います：Home Assistant はプライバシーとローカル制御で勝り、Alexa と Google はプラグアンドプレイの利便性で勝ります。本対決は、プライバシー、ローカル制御、機器対応、音声、AI、コスト、手間を比較し、ユーザータイプ別に正しい選択を推奨します。',
    metaDescription:
      'Home Assistant、Alexa、Google Homeを2026年版で徹底比較：プライバシー保護の強さ、ローカル制御機能の有無、AI音声連携の質、月額コストの差、クラウド依存度という5つの重要な観点からスマートホームプラットフォームを選ぶ。',
    twitterDescription:
      'Home Assistant 対 Alexa 対 Google Home：プライバシーとローカル制御 対 プラグアンドプレイの利便性。2026年の対決と、それぞれが誰に合うか。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant、Alexa、Google Home の間で選ぶ人',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant 対 alexa 対 google home',
      'home assistant 対 alexa',
      'alexa 対 google home',
      '最高の スマートホーム プラットフォーム 2026',
      'プライベート スマートホーム プラットフォーム',
    ],
    leadAnswerBlock:
      '**プライバシーと完全なローカル制御なら Home Assistant、最も簡単なプラグアンドプレイの出発点なら Amazon Alexa か Google Home を選びましょう。** Home Assistant はより多くの設定が必要ですがデータをローカルに保ちオフラインで動きます；Alexa と Google はより簡単ですがクラウド依存です。',
    quickAnswerTop: {
      ja: {
        question: 'Home Assistant、Alexa、Google Home のどれを選ぶべき？',
        answer:
          'プライバシー、ローカル制御、柔軟性を重んじ、より多くの設定を受け入れられるなら Home Assistant を選びましょう。最も簡単な設定、幅広い機器・音声対応が欲しく、クラウド依存が気にならないなら Amazon Alexa か Google Home を選びましょう。Home Assistant は Alexa と Google を橋渡しもできるので、選択は厳密に排他的ではありません。',
        bullets: [
          'Home Assistant：最もプライベート、ローカル、柔軟；手間は最大',
          'Alexa：最も簡単な開始、最も広い音声機器対応',
          'Google Home：強力な音声、広い対応、クラウド優先',
          'プライバシーとローカル制御 対 プラグアンドプレイの利便性',
          'Home Assistant はクラウドアシスタントを橋渡しできる',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: '三つの選択肢', anchor: 'three-options' },
      { label: '比較', anchor: 'comparison' },
      { label: 'プライバシーの勝者', anchor: 'privacy-winner' },
      { label: '利便性の勝者', anchor: 'convenience-winner' },
      { label: 'AI と音声', anchor: 'ai-voice' },
      { label: 'ユーザー別の推奨', anchor: 'recommendation' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant はプライバシーとローカル制御で勝り；Alexa と Google Home はプラグアンドプレイの利便性と幅広い音声対応で勝ります。' },
      { type: 'plain-terms', content: 'この三つが一般的なスマートホームの選択肢です。Alexa と Google Home は最も設定が簡単ですが企業のクラウド経由で動きます。Home Assistant はより手間がかかりますが、すべてをローカルかつプライベートに保ち——望めば Alexa と Google を取り込むことさえできます。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          'Home Assistant：最もプライベート、完全なローカル制御、最も柔軟、設定の手間は最大',
          'Amazon Alexa：最も簡単な開始、最も広い音声・機器対応、クラウド優先',
          'Google Home：強力な音声アシスタント、広い対応、クラウド優先',
          'プライバシーとローカル制御が決め手',
          'Home Assistant は、クラウドアシスタントがプライベートには及ばないローカルAI（Ollama＋音声）を加える',
          'Home Assistant は Alexa と Google を橋渡しでき、選ぶコストを下げる',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: '三つの選択肢',
        content:
          '**Home Assistant はローカルファーストでプライベート；Alexa と Google Home はクラウド優先で便利です。** それぞれ異なる優先事項に合います。',
        items: [
          '**Home Assistant：** オープンソース、ローカルファースト、最も柔軟でプライベート——[入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          '**Amazon Alexa：** 最も広い機器・音声スキル対応、最も簡単な開始、クラウド優先。',
          '**Google Home：** 強力な音声と広い対応、クラウド優先。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**Home Assistant はプライバシー・ローカル制御・AI で先行し；Alexa と Google は手軽さと音声の幅で先行します。** 表で自分の優先事項にプラットフォームを対応づけましょう。',
        columns: ['基準', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { '基準': 'プライバシー', 'Home Assistant': '最良（ローカル）', 'Amazon Alexa': 'クラウドデータ', 'Google Home': 'クラウドデータ' },
          { '基準': 'ローカル制御', 'Home Assistant': '完全', 'Amazon Alexa': '限定的', 'Google Home': '限定的' },
          { '基準': '機器対応', 'Home Assistant': '統合経由で最も広い', 'Amazon Alexa': '音声で最も広い', 'Google Home': '広い' },
          { '基準': '音声', 'Home Assistant': 'ローカル（Assist）', 'Amazon Alexa': '強力（クラウド）', 'Google Home': '強力（クラウド）' },
          { '基準': 'AI', 'Home Assistant': 'ローカルLLM（Ollama）', 'Amazon Alexa': 'クラウドアシスタント', 'Google Home': 'クラウドアシスタント' },
          { '基準': 'コスト', 'Home Assistant': 'ハードウェア＋手間', 'Amazon Alexa': '安価なハードウェア', 'Google Home': '安価なハードウェア' },
          { '基準': '手間', 'Home Assistant': '多い', 'Amazon Alexa': '少ない', 'Google Home': '少ない' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'プライバシーの勝者：Home Assistant',
        content:
          '**Home Assistant がプライバシーで勝るのは、制御・音声・AI のすべてがメーカーのデータ収集なしにローカルで動くからです。** プライバシーが最優先なら選びましょう。',
        items: [
          '利用データ、録音、映像のいずれも家を出ません——[スマートホームのプライバシーリスク](/ja/smart-home/smart-home-privacy-risks)を参照。',
          'プライベートな自然言語制御のため、ローカル音声アシスタントと LLM を加えます。',
          '引き換えに、より多くの設定の手間を受け入れます。',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: '利便性の勝者：Alexa か Google',
        content:
          '**Amazon Alexa と Google Home が利便性で勝るのは、設定がアプリ案内で、機器が既製で広く対応されているからです。** 最小限の手間が最も重要なら選びましょう。',
        items: [
          '最も広い音声スキルのエコシステムなら Alexa を。',
          'Google のアシスタントとサービスを好むなら Google Home を。',
          'クラウド依存とプライバシーのトレードオフを受け入れます——[なぜローカルがクラウドに勝るか](/ja/smart-home/why-local-smart-home-beats-cloud)を参照。',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'AI と音声',
        content:
          '**Alexa と Google は洗練されたクラウド音声を提供し；Home Assistant はプライベートなローカル音声とローカルLLMの頭脳を提供します。** 選択はクラウドの洗練 対 プライベートな制御です。',
        items: [
          'クラウドアシスタントは低レイテンシと幅広い音声スキルに最適化されています。',
          'Home Assistant は Assist + Whisper + Piper + ローカルLLM をプライベートに動かします——[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide)を参照。',
          '音声のアプローチは[ローカル対クラウドの音声アシスタント](/ja/smart-home/local-vs-cloud-voice-assistant)で比較。',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'ユーザータイプ別の推奨',
        content:
          '**プライバシー重視または自作派 → Home Assistant；利便性優先の初心者 → Alexa か Google；迷うがプライバシーが重要 → Home Assistant から始める。** クラウドアシスタントは後で Home Assistant に橋渡しできます。',
        items: [
          '**プライバシー／制御：** Home Assistant。',
          '**最も簡単な開始：** Amazon Alexa か Google Home。',
          '**最良のプライベートAI：** ローカルLLM 付きの Home Assistant。',
          '**プラットフォームの完全比較が欲しい？** [スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '最もプライベートなのはどれ？', a: 'Home Assistant が最もプライベートです。制御・音声・AI が自分のハードウェア上でメーカーのデータ収集なしに動くからです。Alexa と Google Home はクラウド優先で、利用データと音声データをメーカーのサーバーへ送ります。' },
          { q: '最も簡単なのはどれ？', a: 'Amazon Alexa と Google Home が最も簡単です。設定がアプリ案内・クラウド管理で、既製の機器対応が広いからです。Home Assistant はより高いプライバシーと制御を提供しますが、設定の手間が多くなります。' },
          { q: '最高の AI はどれ？', a: 'プライベートAIでは Home Assistant が先行します。クラウドなしでローカルLLMを会話エージェントとして動かせるからです。Alexa と Google は洗練されたクラウドアシスタントを持ちますが、それらはあなたのデータをメーカーのサーバーで処理します。' },
          { q: '後でプラットフォームを切り替えられる？', a: 'はい、手間はかかります。Home Assistant は Alexa と Google を統合・橋渡しできるので、段階的に採用できます。クラウドエコシステムからローカル制御への移行は、部屋ごとに進められる扱いやすい移行です。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[スマートホームのエコシステム比較](/ja/smart-home/smart-home-ecosystems-compared) — 四プラットフォームの完全比較',
          '[Home Assistant 入門](/ja/smart-home/home-assistant-getting-started) — プライベートな選択肢を設定する',
          '[ローカル対クラウドの音声アシスタント](/ja/smart-home/local-vs-cloud-voice-assistant) — 音声の判断',
          '[なぜローカルスマートホームはクラウドに勝るのか](/ja/smart-home/why-local-smart-home-beats-cloud) — ローカルの根拠',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant 対 Alexa 対 Google Home：どれが正解？（2026）',
      description: 'Home Assistant、Alexa、Google Homeを2026年版で徹底比較：プライバシー保護の強さ、ローカル制御機能の有無、AI音声連携の質、月額コストの差、クラウド依存度という5つの重要な観点からスマートホームプラットフォームを選ぶ。',
      url: 'https://www.promptquorum.com/ja/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '最もプライベートなのはどれ？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant です。制御・音声・AI が自分のハードウェア上でメーカーのデータ収集なしに動くからです。Alexa と Google Home はクラウド優先で、利用・音声データをメーカーのサーバーへ送ります。' } },
        { '@type': 'Question', name: '最も簡単なのはどれ？', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa と Google Home です。設定がアプリ案内・クラウド管理で、既製の機器対応が広いからです。Home Assistant はより高い制御を提供しますが手間がかかります。' } },
        { '@type': 'Question', name: '最高の AI はどれ？', acceptedAnswer: { '@type': 'Answer', text: 'プライベートAIでは Home Assistant です。クラウドなしでローカルLLMを会話エージェントにできるからです。Alexa と Google のクラウドアシスタントはデータをメーカーのサーバーで処理します。' } },
        { '@type': 'Question', name: '後でプラットフォームを切り替えられる？', acceptedAnswer: { '@type': 'Answer', text: 'はい、手間はかかります。Home Assistant は Alexa と Google を統合・橋渡しできるので、部屋ごとの移行で段階的に採用できます。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant vs Alexa vs Google Home: Qual é o Certo? (2026)',
    seoTitle: 'Home Assistant vs Alexa vs Google Home: Comparativo 2026',
    intro:
      'Home Assistant, Amazon Alexa e Google Home servem a prioridades diferentes: o Home Assistant ganha em privacidade e controle local, enquanto Alexa e Google ganham em comodidade plug-and-play. Este frente a frente compara privacidade, controle local, suporte a dispositivos, voz, IA, custo e esforço, e recomenda a escolha certa por tipo de usuário.',
    metaDescription:
      'Home Assistant vs Alexa vs Google Home: comparativo 2026. Privacidade e controle local versus facilidade de uso — qual plataforma é a certa para você?',
    twitterDescription:
      'Home Assistant vs Alexa vs Google Home: privacidade e controle local vs comodidade plug-and-play. O frente a frente de 2026 e a quem cada um serve.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Pessoas escolhendo entre Home Assistant, Alexa e Google Home',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant vs alexa vs google home',
      'home assistant vs alexa',
      'alexa vs google home',
      'melhor plataforma casa inteligente 2026',
      'plataforma casa inteligente privada',
    ],
    leadAnswerBlock:
      '**Escolha o Home Assistant por privacidade e controle local total, e a Amazon Alexa ou o Google Home pelo começo plug-and-play mais fácil.** O Home Assistant exige mais configuração, mas mantém os dados em local e funciona offline; Alexa e Google são mais simples, mas dependentes da nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Devo escolher Home Assistant, Alexa ou Google Home?',
        answer:
          'Escolha o Home Assistant se você valoriza privacidade, controle local e flexibilidade e aceita mais configuração. Escolha a Amazon Alexa ou o Google Home se você quer a configuração mais fácil, amplo suporte a dispositivos e voz, e não se importa com a dependência da nuvem. O Home Assistant também pode unir Alexa e Google, então a escolha não é estritamente exclusiva.',
        bullets: [
          'Home Assistant: o mais privado, local, flexível; mais esforço',
          'Alexa: o começo mais fácil, maior suporte de voz',
          'Google Home: voz forte, amplo suporte, nuvem-primeiro',
          'Privacidade e controle local vs comodidade plug-and-play',
          'O Home Assistant pode unir os assistentes na nuvem',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'As três opções', anchor: 'three-options' },
      { label: 'A comparação', anchor: 'comparison' },
      { label: 'Vencedor em privacidade', anchor: 'privacy-winner' },
      { label: 'Vencedor em comodidade', anchor: 'convenience-winner' },
      { label: 'IA e voz', anchor: 'ai-voice' },
      { label: 'Recomendação por usuário', anchor: 'recommendation' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O Home Assistant ganha em privacidade e controle local; Alexa e Google Home ganham em comodidade plug-and-play e amplo suporte de voz.' },
      { type: 'plain-terms', content: 'Estas três são as escolhas comuns de casa inteligente. Alexa e Google Home são as mais fáceis de configurar, mas funcionam pelas nuvens das empresas. O Home Assistant exige mais esforço, mas mantém tudo local e privado — e pode até integrar Alexa e Google, se você quiser.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Home Assistant: o mais privado, controle local total, o mais flexível, mais esforço de configuração',
          'Amazon Alexa: o começo mais fácil, maior suporte de voz e dispositivos, nuvem-primeiro',
          'Google Home: assistente de voz forte, amplo suporte, nuvem-primeiro',
          'A privacidade e o controle local são os fatores decisivos',
          'O Home Assistant adiciona IA local (Ollama + voz) que os assistentes na nuvem não igualam de forma privada',
          'O Home Assistant pode unir Alexa e Google, reduzindo o custo de escolhê-lo',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: 'As três opções',
        content:
          '**O Home Assistant é local-first e privado; Alexa e Google Home são nuvem-primeiro e cômodos.** Cada um combina com uma prioridade diferente.',
        items: [
          '**Home Assistant:** de código aberto, local-first, o mais flexível e privado — veja [primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          '**Amazon Alexa:** maior suporte a dispositivos e skills de voz, começo mais fácil, nuvem-primeiro.',
          '**Google Home:** voz forte e amplo suporte, nuvem-primeiro.',
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'A comparação',
        content:
          '**O Home Assistant lidera em privacidade, controle local e IA; Alexa e Google lideram em facilidade e amplitude de voz.** Use a tabela para associar uma plataforma à sua prioridade.',
        columns: ['Critério', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { 'Critério': 'Privacidade', 'Home Assistant': 'A melhor (local)', 'Amazon Alexa': 'Dados na nuvem', 'Google Home': 'Dados na nuvem' },
          { 'Critério': 'Controle local', 'Home Assistant': 'Completo', 'Amazon Alexa': 'Limitado', 'Google Home': 'Limitado' },
          { 'Critério': 'Suporte a dispositivos', 'Home Assistant': 'O mais amplo via integrações', 'Amazon Alexa': 'O mais amplo em voz', 'Google Home': 'Amplo' },
          { 'Critério': 'Voz', 'Home Assistant': 'Local (Assist)', 'Amazon Alexa': 'Forte (nuvem)', 'Google Home': 'Forte (nuvem)' },
          { 'Critério': 'IA', 'Home Assistant': 'LLM local (Ollama)', 'Amazon Alexa': 'Assistente na nuvem', 'Google Home': 'Assistente na nuvem' },
          { 'Critério': 'Custo', 'Home Assistant': 'Hardware + esforço', 'Amazon Alexa': 'Hardware barato', 'Google Home': 'Hardware barato' },
          { 'Critério': 'Esforço', 'Home Assistant': 'Maior', 'Amazon Alexa': 'Baixo', 'Google Home': 'Baixo' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: 'Vencedor em privacidade: Home Assistant',
        content:
          '**O Home Assistant ganha em privacidade porque o controle, a voz e a IA rodam todos em local sem coleta de dados do fabricante.** Escolha-o se a privacidade é a sua prioridade máxima.',
        items: [
          'Nenhum dado de uso, gravação ou imagem sai de casa — veja [riscos de privacidade da casa inteligente](/pt/smart-home/smart-home-privacy-risks).',
          'Adicione um assistente de voz local e um LLM para o controle privado em linguagem natural.',
          'Aceite mais esforço de configuração em troca.',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: 'Vencedor em comodidade: Alexa ou Google',
        content:
          '**Amazon Alexa e Google Home ganham em comodidade porque a configuração é guiada por aplicativo e os dispositivos têm amplo suporte de fábrica.** Escolha-os se o mínimo esforço importa mais.',
        items: [
          'Use a Alexa pelo ecossistema de skills de voz mais amplo.',
          'Use o Google Home se você prefere o assistente e os serviços do Google.',
          'Aceite a dependência da nuvem e o compromisso de privacidade — veja [por que o local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud).',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'IA e voz',
        content:
          '**Alexa e Google oferecem voz na nuvem polida; o Home Assistant oferece voz local privada e um cérebro LLM local.** A escolha é polimento na nuvem versus controle privado.',
        items: [
          'Assistentes na nuvem são ajustados para baixa latência e amplas skills de voz.',
          'O Home Assistant roda Assist + Whisper + Piper + um LLM local de forma privada — veja [rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide).',
          'Compare as abordagens de voz em [assistentes de voz local vs nuvem](/pt/smart-home/local-vs-cloud-voice-assistant).',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: 'Recomendação por tipo de usuário',
        content:
          '**Focado em privacidade ou entusiasta → Home Assistant; iniciante que prioriza a comodidade → Alexa ou Google; em dúvida, mas a privacidade importa → comece com o Home Assistant.** Você pode unir os assistentes na nuvem ao Home Assistant depois.',
        items: [
          '**Privacidade / controle:** Home Assistant.',
          '**Começo mais fácil:** Amazon Alexa ou Google Home.',
          '**Melhor IA privada:** Home Assistant com um LLM local.',
          '**Quer a comparação completa de plataformas?** Veja [ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual é o mais privado?', a: 'O Home Assistant é o mais privado porque o controle, a voz e a IA rodam em local no seu próprio hardware sem coleta de dados do fabricante. Alexa e Google Home são nuvem-primeiro e enviam dados de uso e voz a servidores do fabricante.' },
          { q: 'Qual é o mais fácil?', a: 'Amazon Alexa e Google Home são os mais fáceis porque a configuração é guiada por aplicativo e gerenciada na nuvem, com amplo suporte a dispositivos de fábrica. O Home Assistant oferece mais privacidade e controle, mas exige mais esforço de configuração.' },
          { q: 'Qual tem a melhor IA?', a: 'Para a IA privada, o Home Assistant lidera porque pode rodar um LLM local como agente de conversa sem nuvem. Alexa e Google têm assistentes na nuvem polidos, mas eles processam seus dados em servidores do fabricante.' },
          { q: 'Posso trocar de plataforma depois?', a: 'Sim, embora dê trabalho. O Home Assistant pode integrar e unir Alexa e Google, então você pode adotá-lo aos poucos. Migrar de um ecossistema na nuvem para o controle local é uma migração gerenciável, cômodo por cômodo.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Ecossistemas de casa inteligente comparados](/pt/smart-home/smart-home-ecosystems-compared) — a comparação completa das quatro plataformas',
          '[Home Assistant: primeiros passos](/pt/smart-home/home-assistant-getting-started) — configure a opção privada',
          '[Assistentes de voz local vs nuvem](/pt/smart-home/local-vs-cloud-voice-assistant) — a decisão sobre voz',
          '[Por que uma casa inteligente local supera a nuvem](/pt/smart-home/why-local-smart-home-beats-cloud) — o argumento local',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant vs Alexa vs Google Home: Qual é o Certo? (2026)',
      description: 'Home Assistant vs Alexa vs Google Home: comparativo 2026. Privacidade e controle local versus facilidade de uso — qual plataforma é a certa para você?',
      url: 'https://www.promptquorum.com/pt/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Qual é o mais privado?', acceptedAnswer: { '@type': 'Answer', text: 'O Home Assistant, porque o controle, a voz e a IA rodam em local no seu próprio hardware sem coleta de dados do fabricante. Alexa e Google Home são nuvem-primeiro e enviam dados a servidores do fabricante.' } },
        { '@type': 'Question', name: 'Qual é o mais fácil?', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa e Google Home, porque a configuração é guiada por aplicativo e gerenciada na nuvem com amplo suporte de fábrica. O Home Assistant oferece mais controle, mas exige mais esforço.' } },
        { '@type': 'Question', name: 'Qual tem a melhor IA?', acceptedAnswer: { '@type': 'Answer', text: 'Para a IA privada, o Home Assistant, porque pode rodar um LLM local como agente de conversa sem nuvem. Alexa e Google têm assistentes na nuvem que processam dados em servidores do fabricante.' } },
        { '@type': 'Question', name: 'Posso trocar de plataforma depois?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, com trabalho. O Home Assistant pode integrar e unir Alexa e Google, então você pode adotá-lo aos poucos em uma migração cômodo por cômodo.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-04',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    title: 'Home Assistant 对 Alexa 对 Google Home：哪个适合你？（2026）',
    seoTitle: 'Home Assistant 对 Alexa 对 Google Home：2026年对比指南',
    intro:
      'Home Assistant、Amazon Alexa 和 Google Home 适合不同的优先事项：Home Assistant 在隐私和本地控制上胜出，而 Alexa 和 Google 在即插即用的便利上胜出。本对决比较隐私、本地控制、设备支持、语音、AI、成本和投入，并按用户类型推荐合适的选择。',
    metaDescription:
      '2026年深度对比Home Assistant、Alexa和Google Home三大智能家居平台：从隐私数据保护程度、本地控制能力、AI语音功能体验、月度订阅费用、云端依赖程度五个核心维度全面分析，助你选出最合适的智能家居平台方案。',
    twitterDescription:
      'Home Assistant 对 Alexa 对 Google Home：隐私与本地控制 对 即插即用的便利。2026 年的对决，以及各自适合谁。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '在 Home Assistant、Alexa 和 Google Home 之间做选择的人',
    primaryTerm: 'Home Assistant vs Alexa vs Google Home',
    targetKeywords: [
      'home assistant 对 alexa 对 google home',
      'home assistant 对 alexa',
      'alexa 对 google home',
      '最佳智能家居平台 2026',
      '私密智能家居平台',
    ],
    leadAnswerBlock:
      '**要隐私和完全的本地控制就选 Home Assistant，要最简单的即插即用起步就选 Amazon Alexa 或 Google Home。** Home Assistant 需要更多配置，但把数据留在本地且可离线工作；Alexa 和 Google 更简单，但依赖云端。',
    quickAnswerTop: {
      zh: {
        question: '我该选 Home Assistant、Alexa 还是 Google Home？',
        answer:
          '如果你看重隐私、本地控制和灵活性，并愿意多做配置，就选 Home Assistant。如果你想要最简单的配置、广泛的设备与语音支持，并且不介意云端依赖，就选 Amazon Alexa 或 Google Home。Home Assistant 还能桥接 Alexa 和 Google，因此选择并非严格互斥。',
        bullets: [
          'Home Assistant：最私密、本地、灵活；投入最大',
          'Alexa：最简单的起步、最广的语音设备支持',
          'Google Home：语音强大、支持广泛、云端优先',
          '隐私与本地控制 对 即插即用的便利',
          'Home Assistant 可桥接云端助手',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: '三个选项', anchor: 'three-options' },
      { label: '对比', anchor: 'comparison' },
      { label: '隐私优胜者', anchor: 'privacy-winner' },
      { label: '便利优胜者', anchor: 'convenience-winner' },
      { label: 'AI 与语音', anchor: 'ai-voice' },
      { label: '按用户推荐', anchor: 'recommendation' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant 在隐私和本地控制上胜出；Alexa 和 Google Home 在即插即用的便利和广泛的语音支持上胜出。' },
      { type: 'plain-terms', content: '这三者是常见的智能家居选择。Alexa 和 Google Home 最容易配置，但要经过企业云端。Home Assistant 需要更多投入，但把一切保持在本地且私密——而且如果你愿意，它甚至能把 Alexa 和 Google 接入进来。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          'Home Assistant：最私密、完全本地控制、最灵活、配置投入最大',
          'Amazon Alexa：最简单的起步、最广的语音与设备支持、云端优先',
          'Google Home：强大的语音助手、广泛支持、云端优先',
          '隐私与本地控制是决定性因素',
          'Home Assistant 增加了云端助手在私密层面无法媲美的本地 AI（Ollama + 语音）',
          'Home Assistant 可桥接 Alexa 和 Google，降低选择它的代价',
        ],
      },
      threeOptions: {
        id: 'three-options',
        title: '三个选项',
        content:
          '**Home Assistant 是本地优先且私密的；Alexa 和 Google Home 是云端优先且便利的。** 各自契合不同的优先事项。',
        items: [
          '**Home Assistant：** 开源、本地优先、最灵活也最私密——参见[入门](/zh/smart-home/home-assistant-getting-started)。',
          '**Amazon Alexa：** 最广的设备与语音技能支持、最简单的起步、云端优先。',
          '**Google Home：** 语音强大、支持广泛、云端优先。',
        ],
      },
      comparison: {
        id: 'comparison',
        title: '对比',
        content:
          '**Home Assistant 在隐私、本地控制和 AI 上领先；Alexa 和 Google 在易用和语音广度上领先。** 用下表把平台对应到你的优先事项。',
        columns: ['标准', 'Home Assistant', 'Amazon Alexa', 'Google Home'],
        rows: [
          { '标准': '隐私', 'Home Assistant': '最佳（本地）', 'Amazon Alexa': '云端数据', 'Google Home': '云端数据' },
          { '标准': '本地控制', 'Home Assistant': '完整', 'Amazon Alexa': '有限', 'Google Home': '有限' },
          { '标准': '设备支持', 'Home Assistant': '经由集成最广', 'Amazon Alexa': '语音最广', 'Google Home': '广泛' },
          { '标准': '语音', 'Home Assistant': '本地（Assist）', 'Amazon Alexa': '强（云端）', 'Google Home': '强（云端）' },
          { '标准': 'AI', 'Home Assistant': '本地 LLM（Ollama）', 'Amazon Alexa': '云端助手', 'Google Home': '云端助手' },
          { '标准': '成本', 'Home Assistant': '硬件 + 投入', 'Amazon Alexa': '硬件便宜', 'Google Home': '硬件便宜' },
          { '标准': '投入', 'Home Assistant': '更多', 'Amazon Alexa': '低', 'Google Home': '低' },
        ],
      },
      privacyWinner: {
        id: 'privacy-winner',
        title: '隐私优胜者：Home Assistant',
        content:
          '**Home Assistant 在隐私上胜出，因为控制、语音和 AI 都在本地运行、没有厂商数据收集。** 若隐私是你的首要，就选它。',
        items: [
          '没有使用数据、录音或录像离开你家——参见[智能家居隐私风险](/zh/smart-home/smart-home-privacy-risks)。',
          '添加本地语音助手和 LLM，以实现私密的自然语言控制。',
          '作为交换，接受更多的配置投入。',
        ],
      },
      convenienceWinner: {
        id: 'convenience-winner',
        title: '便利优胜者：Alexa 或 Google',
        content:
          '**Amazon Alexa 和 Google Home 在便利上胜出，因为配置由应用引导，且设备开箱即广泛支持。** 若最少投入对你最重要，就选它们。',
        items: [
          '要最广的语音技能生态就用 Alexa。',
          '若你偏好 Google 的助手与服务就用 Google Home。',
          '接受云端依赖和隐私上的取舍——参见[为何本地胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud)。',
        ],
      },
      aiVoice: {
        id: 'ai-voice',
        title: 'AI 与语音',
        content:
          '**Alexa 和 Google 提供成熟的云端语音；Home Assistant 提供私密的本地语音和一个本地 LLM 大脑。** 选择在于云端成熟度对私密控制。',
        items: [
          '云端助手针对低延迟和广泛的语音技能做了调优。',
          'Home Assistant 私密地运行 Assist + Whisper + Piper + 一个本地 LLM——参见[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide)。',
          '在[本地对云端的语音助手](/zh/smart-home/local-vs-cloud-voice-assistant)中比较语音方式。',
        ],
      },
      recommendation: {
        id: 'recommendation',
        title: '按用户类型推荐',
        content:
          '**注重隐私或爱折腾 → Home Assistant；优先便利的新手 → Alexa 或 Google；犹豫但看重隐私 → 从 Home Assistant 开始。** 你以后可以把云端助手桥接到 Home Assistant。',
        items: [
          '**隐私 / 掌控：** Home Assistant。',
          '**最简单的起步：** Amazon Alexa 或 Google Home。',
          '**最佳私密 AI：** 带本地 LLM 的 Home Assistant。',
          '**想要完整的平台对比？** 参见[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '哪个最私密？', a: 'Home Assistant 最私密，因为控制、语音和 AI 都在你自己的硬件上本地运行、没有厂商数据收集。Alexa 和 Google Home 云端优先，会把使用和语音数据发送到厂商服务器。' },
          { q: '哪个最简单？', a: 'Amazon Alexa 和 Google Home 最简单，因为配置由应用引导、云端托管，且开箱即有广泛的设备支持。Home Assistant 提供更高的隐私与掌控，但需要更多配置投入。' },
          { q: '哪个 AI 最好？', a: '在私密 AI 上，Home Assistant 领先，因为它能在没有云端的情况下把本地 LLM 作为对话代理运行。Alexa 和 Google 拥有成熟的云端助手，但它们在厂商服务器上处理你的数据。' },
          { q: '我以后能换平台吗？', a: '能，但需要投入。Home Assistant 可以集成并桥接 Alexa 和 Google，因此你可以逐步采用它。从云端生态迁移到本地控制是一项可管理的、按房间推进的迁移。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[智能家居生态系统对比](/zh/smart-home/smart-home-ecosystems-compared) — 四个平台的完整对比',
          '[Home Assistant 入门](/zh/smart-home/home-assistant-getting-started) — 配置私密选项',
          '[本地对云端的语音助手](/zh/smart-home/local-vs-cloud-voice-assistant) — 语音决策',
          '[为何本地智能家居胜过云端](/zh/smart-home/why-local-smart-home-beats-cloud) — 本地论据',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant 对 Alexa 对 Google Home：哪个适合你？（2026）',
      description: '2026年深度对比Home Assistant、Alexa和Google Home三大智能家居平台：从隐私数据保护程度、本地控制能力、AI语音功能体验、月度订阅费用、云端依赖程度五个核心维度全面分析，助你选出最合适的智能家居平台方案。',
      url: 'https://www.promptquorum.com/zh/smart-home/home-assistant-vs-alexa-vs-google',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-04',
      about: [{ '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Amazon Alexa' }, { '@type': 'Thing', name: 'Google Home' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '哪个最私密？', acceptedAnswer: { '@type': 'Answer', text: 'Home Assistant 最私密，因为控制、语音和 AI 都在你自己的硬件上本地运行、没有厂商数据收集。Alexa 和 Google Home 云端优先，会把使用和语音数据发送到厂商服务器。' } },
        { '@type': 'Question', name: '哪个最简单？', acceptedAnswer: { '@type': 'Answer', text: 'Amazon Alexa 和 Google Home，因为配置由应用引导、云端托管，且开箱即有广泛支持。Home Assistant 提供更高掌控，但需要更多投入。' } },
        { '@type': 'Question', name: '哪个 AI 最好？', acceptedAnswer: { '@type': 'Answer', text: '在私密 AI 上是 Home Assistant，因为它能在没有云端的情况下把本地 LLM 作为对话代理运行。Alexa 和 Google 的云端助手在厂商服务器上处理数据。' } },
        { '@type': 'Question', name: '我以后能换平台吗？', acceptedAnswer: { '@type': 'Answer', text: '能，但需要投入。Home Assistant 可集成并桥接 Alexa 和 Google，因此你可以按房间推进、逐步采用它。' } },
      ],
    },
  },
}
