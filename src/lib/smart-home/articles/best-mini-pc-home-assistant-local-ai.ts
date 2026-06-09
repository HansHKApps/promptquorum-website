import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Best Mini PCs for Home Assistant + Local AI (2026)',
    seoTitle: 'Best Mini PC for Home Assistant + Local AI in 2026',
    intro:
      'The best mini PCs for running Home Assistant plus a local LLM on one box prioritise RAM and a capable integrated GPU or NPU. This buyer\'s guide explains what you need for HA plus AI on a single machine, compares the main mini PC classes, weighs budget against performance, and covers setup notes — cross-linking to the local-llms hardware guide for VRAM depth.',
    metaDescription:
      'Home Assistant + local LLM on one mini PC in 2026: RAM and iGPU or NPU matter most. Budget N-series, Ryzen/Core i, and NPU options compared by workload.',
    twitterDescription:
      'Best mini PCs to run Home Assistant + a local LLM on one box: prioritise RAM and a capable iGPU/NPU. Classes compared, picks by budget.',
    readTime: '8 min read',
    educationalLevel: 'Intermediate',
    audience: 'Buyers choosing a mini PC for Home Assistant and local AI',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'best mini pc home assistant local ai',
      'mini pc home assistant llm',
      'home assistant local ai hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**The best mini PC for Home Assistant plus a local LLM has ample RAM and a capable integrated GPU or NPU, so it runs the hub and a small model on one box.** Prioritise RAM and the graphics/NPU over raw CPU clock for AI latency.',
    quickAnswerTop: {
      en: {
        question: 'What mini PC is best for Home Assistant and local AI?',
        answer:
          'Choose a mini PC with enough RAM (more is better for running a model alongside Home Assistant) and a capable integrated GPU or NPU to keep a small LLM responsive. A low-power Intel N-series box runs Home Assistant and a tiny model; an AMD Ryzen or Core i-series mini PC with a strong iGPU handles a 7B model better.',
        bullets: [
          'Prioritise RAM and a capable iGPU/NPU over CPU clock',
          'Low-power N-series: HA + a very small model',
          'Ryzen / Core i-series with strong iGPU: HA + a 7B model',
          'One box runs HA, Ollama, Whisper, and Frigate together',
          'See the local-llms hardware guide for VRAM depth',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'TL;DR', anchor: 'tldr' },
      { label: 'What You Need for HA + LLM', anchor: 'what-you-need' },
      { label: 'The Mini PC Classes', anchor: 'classes' },
      { label: 'Comparison', anchor: 'comparison' },
      { label: 'Budget vs Performance', anchor: 'budget-performance' },
      { label: 'Setup Notes', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'The best mini PC for Home Assistant plus a local LLM has ample RAM and a capable iGPU or NPU to run the hub and a small model on one box.' },
      { type: 'plain-terms', content: 'A mini PC is a small, low-power computer that can run your whole smart home plus a local AI model. The two things that matter most are RAM (enough to hold the model and the hub) and a capable graphics chip or NPU (to keep the AI responsive). CPU clock speed matters less.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        items: [
          'Prioritise RAM and a capable integrated GPU or NPU over raw CPU clock',
          'A low-power Intel N-series mini PC runs Home Assistant and a very small model',
          'An AMD Ryzen or Intel Core i-series mini PC with a strong iGPU handles a 7B model',
          'One mini PC can run Home Assistant, Ollama, Whisper, and Frigate together',
          'More RAM lets you run a larger model alongside the hub',
          'See the cross-cluster local-llms hardware guide for VRAM specifics',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'What You Need for HA + LLM on One Box',
        content:
          '**You need enough RAM to hold the model plus Home Assistant, and a capable iGPU or NPU to keep the model responsive.** CPU clock is secondary for this workload.',
        items: [
          'RAM: enough headroom for the model size you want plus the hub and add-ons.',
          'Graphics/NPU: a capable integrated GPU or NPU lowers LLM and Whisper latency.',
          'Storage: room for recordings if you also run Frigate — see [local AI security cameras](/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'The Mini PC Classes',
        content:
          '**Three classes cover most needs: low-power N-series for light AI, Ryzen/Core i-series with a strong iGPU for a 7B model, and NPU-equipped mini PCs for efficient on-device AI.** Pick by the model size you want.',
        items: [
          '**Low-power Intel N-series:** efficient and cheap; runs Home Assistant and a very small model, slower on AI. Example: Beelink EQ14 or GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i-series with strong iGPU:** more RAM and graphics headroom for a 7B model at usable latency. Example: Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) or Minisforum UM890 Pro.',
          '**NPU-equipped mini PCs:** newer machines with a neural processing unit; the strong integrated GPU — not the NPU — does the local-LLM work, while the NPU helps vision tasks like Frigate. Example: GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparison',
        content:
          '**Match the class to your target model: N-series for a tiny model, Ryzen/Core i with a strong iGPU for a 7B model.** Prices are relative.',
        columns: ['Mini PC class', 'CPU', 'RAM guidance', 'Runs a local LLM', 'Relative price'],
        rows: [
          { 'Mini PC class': 'Low-power N-series', 'CPU': 'Intel N-series', 'RAM guidance': 'Moderate', 'Runs a local LLM': 'Very small models, slower', 'Relative price': 'Low' },
          { 'Mini PC class': 'Ryzen / Core i (strong iGPU)', 'CPU': 'AMD Ryzen / Intel Core i', 'RAM guidance': 'Ample', 'Runs a local LLM': 'Up to ~7B at usable latency', 'Relative price': 'Medium' },
          { 'Mini PC class': 'NPU-equipped', 'CPU': 'Modern CPU + NPU', 'RAM guidance': 'Ample', 'Runs a local LLM': 'Efficient small/medium models', 'Relative price': 'Medium–High' },
        ],
        items: [
          'For VRAM and quantization depth, see the cross-cluster [best mini PCs for local LLMs](/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs Performance',
        content:
          '**Buy the cheapest box that runs your target model at acceptable latency — usually a Ryzen/Core i mini PC with a strong iGPU for a 7B model.** Do not overspend on CPU you will not use.',
        items: [
          'Budget: a low-power N-series box for HA plus a tiny model.',
          'Balanced: a Ryzen/Core i mini PC with a strong iGPU for a 7B model.',
          'For the broader hardware decision (Pi vs mini PC vs NAS), see [best hardware for a local smart home](/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Setup Notes',
        content:
          '**Run Home Assistant OS or a container, install Ollama, and confirm the iGPU/NPU is used for inference.** Keep the box wired to your network for reliability.',
        items: [
          'Install Home Assistant — see [getting started](/smart-home/home-assistant-getting-started).',
          'Install Ollama and pull a small model — see [how to install Ollama](/local-llms/how-to-install-ollama).',
          'Wire Ollama into Home Assistant — see [the Ollama integration guide](/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Can one mini PC do both Home Assistant and a local LLM?', a: 'Yes. A mini PC with enough RAM and a capable integrated GPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate. This single-box approach is the simplest way to get a local-AI smart home.' },
          { q: 'How much RAM do I need?', a: 'Enough to hold your target model plus Home Assistant and any add-ons. A small model needs only modest RAM, while running a 7B model comfortably alongside the hub benefits from ample RAM. Match RAM to the largest model you plan to run.' },
          { q: 'Intel or AMD for a Home Assistant mini PC?', a: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong integrated GPU handles a 7B model better. Choose based on the model size and latency you want.' },
          { q: 'What is the cheapest mini PC that runs a local LLM?', a: 'A low-power Intel N-series mini PC is the cheapest that can run Home Assistant plus a very small model, though responses are slower. For a snappier 7B-class assistant, step up to a Ryzen or Core i mini PC with a strong iGPU.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Hardware for a Local Smart Home](/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs server',
          '[Running Your Smart Home on a Local LLM](/smart-home/local-llm-smart-home-complete-guide) — what the box runs',
          '[Connect Ollama to Home Assistant](/smart-home/home-assistant-ollama-integration) — wire the model in',
          '[Best Mini PCs for Local LLMs](/local-llms/best-mini-pcs-local-llm) — cross-cluster: VRAM and hardware depth',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Best Mini PCs for Home Assistant + Local AI (2026)',
      description: 'Home Assistant + local LLM on one mini PC in 2026: RAM and iGPU or NPU matter most. Budget N-series, Ryzen/Core i, and NPU options compared by workload.',
      url: 'https://www.promptquorum.com/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'en',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Local LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'en',
      mainEntity: [
        { '@type': 'Question', name: 'Can one mini PC do both Home Assistant and a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A mini PC with enough RAM and a capable iGPU or NPU runs Home Assistant and a small local LLM together, and can add Whisper and Frigate.' } },
        { '@type': 'Question', name: 'How much RAM do I need?', acceptedAnswer: { '@type': 'Answer', text: 'Enough to hold your target model plus Home Assistant and add-ons. A small model needs modest RAM; running a 7B model comfortably benefits from ample RAM.' } },
        { '@type': 'Question', name: 'Intel or AMD for a Home Assistant mini PC?', acceptedAnswer: { '@type': 'Answer', text: 'Both work. A low-power Intel N-series box is cheapest for light use; an AMD Ryzen or Intel Core i mini PC with a strong iGPU handles a 7B model better.' } },
        { '@type': 'Question', name: 'What is the cheapest mini PC that runs a local LLM?', acceptedAnswer: { '@type': 'Answer', text: 'A low-power Intel N-series mini PC can run Home Assistant plus a very small model, though slower. For a snappier 7B assistant, step up to a Ryzen or Core i box with a strong iGPU.' } },
      ],
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'أفضل Mini PCs لـ Home Assistant + الذكاء الاصطناعي المحلي (2026)',
    seoTitle: 'أفضل Mini PC لـ Home Assistant + الذكاء الاصطناعي المحلي 2026',
    intro:
      'أفضل mini PCs لتشغيل Home Assistant مع نموذج LLM محلي على صندوق واحد تُعطي الأولوية لـ RAM وGPU متكاملة أو NPU قادرة. يشرح هذا الدليل الشرائي ما تحتاجه لـ HA مع الذكاء الاصطناعي على جهاز واحد، ويقارن الفئات الرئيسية لـ mini PC، ويوازن الميزانية مقابل الأداء، ويغطي ملاحظات الإعداد — مع إحالات متقاطعة إلى دليل أجهزة local-llms لتفاصيل VRAM.',
    metaDescription:
      'Home Assistant + نموذج LLM محلي على mini PC واحد في 2026: RAM وiGPU أو NPU هما الأهم. مقارنة بين فئات N-series وRyzen/Core i وNPU حسب حمل العمل.',
    twitterDescription:
      'أفضل mini PCs لتشغيل Home Assistant + نموذج LLM محلي على صندوق واحد: أعطِ الأولوية لـ RAM وiGPU/NPU قادرة. مقارنة الفئات واختيارات حسب الميزانية.',
    readTime: '8 دقائق للقراءة',
    educationalLevel: 'Intermediate',
    audience: 'المشترون الذين يختارون mini PC لـ Home Assistant والذكاء الاصطناعي المحلي',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'أفضل mini pc home assistant ذكاء اصطناعي محلي',
      'mini pc home assistant llm',
      'أجهزة home assistant ذكاء اصطناعي محلي',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**أفضل mini PC لـ Home Assistant مع نموذج LLM محلي يمتلك RAM وافرًا وGPU متكاملة أو NPU قادرة، ليشغّل المركز ونموذجًا صغيرًا على صندوق واحد.** أعطِ الأولوية لـ RAM والرسومات/NPU على زمن استجابة الذكاء الاصطناعي بدلًا من تردد CPU الخام.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل mini PC لـ Home Assistant والذكاء الاصطناعي المحلي؟',
        answer:
          'اختر mini PC مع RAM كافٍ (كلما كان أكثر كان أفضل لتشغيل نموذج إلى جانب Home Assistant) وGPU متكاملة أو NPU قادرة للحفاظ على سرعة استجابة نموذج LLM صغير. صندوق Intel N-series منخفض الطاقة يشغّل Home Assistant ونموذجًا صغيرًا جدًا؛ mini PC بـ AMD Ryzen أو Core i مع iGPU قوية يتعامل بشكل أفضل مع نموذج 7B.',
        bullets: [
          'أعطِ الأولوية لـ RAM وiGPU/NPU قادرة على تردد CPU',
          'N-series منخفض الطاقة: HA + نموذج صغير جدًا',
          'Ryzen / Core i-series مع iGPU قوية: HA + نموذج 7B',
          'صندوق واحد يشغّل HA وOllama وWhisper وFrigate معًا',
          'راجع دليل أجهزة local-llms لتفاصيل VRAM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'ملخص سريع', anchor: 'tldr' },
      { label: 'ما تحتاجه لـ HA + LLM', anchor: 'what-you-need' },
      { label: 'فئات Mini PC', anchor: 'classes' },
      { label: 'المقارنة', anchor: 'comparison' },
      { label: 'الميزانية مقابل الأداء', anchor: 'budget-performance' },
      { label: 'ملاحظات الإعداد', anchor: 'setup-notes' },
      { label: 'أسئلة شائعة', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'أفضل mini PC لـ Home Assistant مع نموذج LLM محلي يمتلك RAM وافرًا وiGPU أو NPU قادرة لتشغيل المركز ونموذج صغير على صندوق واحد.' },
      { type: 'plain-terms', content: 'mini PC هو حاسوب صغير منخفض الطاقة يمكنه تشغيل منزلك الذكي بالكامل مع نموذج ذكاء اصطناعي محلي. أهم شيئين هما RAM (كافٍ لاستيعاب النموذج والمركز) وشريحة رسومات أو NPU قادرة (لإبقاء الذكاء الاصطناعي سريع الاستجابة). تردد CPU يهم أقل.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        items: [
          'أعطِ الأولوية لـ RAM وGPU متكاملة أو NPU قادرة على تردد CPU الخام',
          'mini PC Intel N-series منخفض الطاقة يشغّل Home Assistant ونموذجًا صغيرًا جدًا',
          'mini PC بـ AMD Ryzen أو Intel Core i مع iGPU قوية يتعامل مع نموذج 7B',
          'يمكن لـ mini PC واحد تشغيل Home Assistant وOllama وWhisper وFrigate معًا',
          'المزيد من RAM يتيح تشغيل نموذج أكبر إلى جانب المركز',
          'راجع دليل أجهزة local-llms متعدد العناقيد لتفاصيل VRAM',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'ما تحتاجه لـ HA + LLM على صندوق واحد',
        content:
          '**تحتاج RAM كافيًا لاستيعاب النموذج مع Home Assistant، وiGPU أو NPU قادرة لإبقاء النموذج سريع الاستجابة.** تردد CPU ثانوي لهذا حمل العمل.',
        items: [
          'RAM: حيّز كافٍ لحجم النموذج الذي تريده مع المركز والإضافات.',
          'الرسومات/NPU: GPU متكاملة أو NPU قادرة تخفض زمن استجابة LLM وWhisper.',
          'التخزين: مساحة للتسجيلات إذا شغّلت أيضًا Frigate — راجع [كاميرات الأمان بالذكاء الاصطناعي المحلي](/ar/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'فئات Mini PC',
        content:
          '**ثلاث فئات تغطي معظم الاحتياجات: N-series منخفض الطاقة للذكاء الاصطناعي الخفيف، وRyzen/Core i مع iGPU قوية لنموذج 7B، وmini PCs مجهّزة بـ NPU للذكاء الاصطناعي الفعال على الجهاز.** اختر حسب حجم النموذج الذي تريده.',
        items: [
          '**Intel N-series منخفض الطاقة:** فعّال ورخيص؛ يشغّل Home Assistant ونموذجًا صغيرًا جدًا، أبطأ على الذكاء الاصطناعي. مثال: Beelink EQ14 أو GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i مع iGPU قوية:** حيّز RAM ورسومات أكبر لنموذج 7B بزمن استجابة مقبول. مثال: Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) أو Minisforum UM890 Pro.',
          '**Mini PCs مجهّزة بـ NPU:** أجهزة أحدث مع وحدة معالجة عصبية؛ GPU المتكاملة القوية — لا NPU — تتولى عمل LLM المحلي، بينما تساعد NPU في مهام الرؤية مثل Frigate. مثال: GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'المقارنة',
        content:
          '**طابق الفئة مع نموذجك المستهدف: N-series لنموذج صغير، Ryzen/Core i مع iGPU قوية لنموذج 7B.** الأسعار نسبية.',
        columns: ['فئة Mini PC', 'المعالج', 'توجيه RAM', 'يشغّل نموذج LLM محلي', 'السعر النسبي'],
        rows: [
          { 'فئة Mini PC': 'N-series منخفض الطاقة', 'المعالج': 'Intel N-series', 'توجيه RAM': 'متوسط', 'يشغّل نموذج LLM محلي': 'نماذج صغيرة جدًا، أبطأ', 'السعر النسبي': 'منخفض' },
          { 'فئة Mini PC': 'Ryzen / Core i (iGPU قوية)', 'المعالج': 'AMD Ryzen / Intel Core i', 'توجيه RAM': 'وافر', 'يشغّل نموذج LLM محلي': 'حتى ~7B بزمن استجابة مقبول', 'السعر النسبي': 'متوسط' },
          { 'فئة Mini PC': 'مجهّز بـ NPU', 'المعالج': 'معالج حديث + NPU', 'توجيه RAM': 'وافر', 'يشغّل نموذج LLM محلي': 'نماذج صغيرة/متوسطة فعّالة', 'السعر النسبي': 'متوسط-مرتفع' },
        ],
        items: [
          'لـ VRAM وعمق التكميم، راجع متعدد العناقيد [أفضل mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'الميزانية مقابل الأداء',
        content:
          '**اشترِ أرخص صندوق يشغّل نموذجك المستهدف بزمن استجابة مقبول — عادةً Ryzen/Core i mini PC مع iGPU قوية لنموذج 7B.** لا تنفق زيادةً على CPU لن تستخدمه.',
        items: [
          'الميزانية: صندوق N-series منخفض الطاقة لـ HA مع نموذج صغير جدًا.',
          'متوازن: Ryzen/Core i mini PC مع iGPU قوية لنموذج 7B.',
          'لقرار الأجهزة الأوسع (Pi مقابل mini PC مقابل NAS)، راجع [أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'ملاحظات الإعداد',
        content:
          '**شغّل Home Assistant OS أو حاوية، ثبّت Ollama، وتأكد من استخدام iGPU/NPU للاستنتاج.** ابقِ الصندوق متصلًا بالشبكة سلكيًا للموثوقية.',
        items: [
          'ثبّت Home Assistant — راجع [البدء](/ar/smart-home/home-assistant-getting-started).',
          'ثبّت Ollama واسحب نموذجًا صغيرًا — راجع [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
          'اربط Ollama بـ Home Assistant — راجع [دليل تكامل Ollama](/ar/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'أسئلة شائعة',
        faqs: [
          { q: 'هل يستطيع mini PC واحد تشغيل Home Assistant ونموذج LLM محلي معًا؟', a: 'نعم. mini PC مع RAM كافٍ وGPU متكاملة أو NPU قادرة يشغّل Home Assistant ونموذج LLM محلي صغيرًا معًا، ويمكنه إضافة Whisper وFrigate. هذا النهج بصندوق واحد هو أبسط طريقة للحصول على منزل ذكي بذكاء اصطناعي محلي.' },
          { q: 'كم من RAM أحتاج؟', a: 'كافٍ لاستيعاب نموذجك المستهدف مع Home Assistant وأي إضافات. نموذج صغير يحتاج RAM متواضعًا، بينما يستفيد تشغيل نموذج 7B بشكل مريح إلى جانب المركز من RAM وافر. طابق RAM مع أكبر نموذج تخطط لتشغيله.' },
          { q: 'Intel أم AMD لـ mini PC بـ Home Assistant؟', a: 'كلاهما يعمل. صندوق Intel N-series منخفض الطاقة هو الأرخص للاستخدام الخفيف؛ mini PC بـ AMD Ryzen أو Intel Core i مع GPU متكاملة قوية يتعامل بشكل أفضل مع نموذج 7B. اختر حسب حجم النموذج وزمن الاستجابة الذي تريده.' },
          { q: 'ما أرخص mini PC يشغّل نموذج LLM محلي؟', a: 'Intel N-series mini PC منخفض الطاقة هو الأرخص الذي يمكنه تشغيل Home Assistant مع نموذج صغير جدًا، وإن كانت الاستجابات أبطأ. لمساعد 7B أسرع استجابةً، ترقَّ إلى Ryzen أو Core i mini PC مع iGPU قوية.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل أجهزة المنزل الذكي المحلي](/ar/smart-home/best-hardware-for-local-smart-home) — Pi مقابل mini PC مقابل NAS مقابل خادم',
          '[تشغيل منزلك الذكي على نموذج LLM محلي](/ar/smart-home/local-llm-smart-home-complete-guide) — ما يشغّله الصندوق',
          '[ربط Ollama بـ Home Assistant](/ar/smart-home/home-assistant-ollama-integration) — ربط النموذج',
          '[أفضل Mini PCs للنماذج اللغوية المحلية](/ar/local-llms/best-mini-pcs-local-llm) — متعدد العناقيد: VRAM وعمق الأجهزة',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'أفضل Mini PCs لـ Home Assistant + الذكاء الاصطناعي المحلي (2026)',
      description: 'Home Assistant + نموذج LLM محلي على mini PC واحد في 2026: RAM وiGPU أو NPU هما الأهم. مقارنة بين فئات N-series وRyzen/Core i وNPU حسب حمل العمل.',
      url: 'https://www.promptquorum.com/ar/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'ar',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'نموذج LLM محلي' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
        { '@type': 'Question', name: 'هل يستطيع mini PC واحد تشغيل Home Assistant ونموذج LLM محلي معًا؟', acceptedAnswer: { '@type': 'Answer', text: 'نعم. mini PC مع RAM كافٍ وiGPU أو NPU قادرة يشغّل Home Assistant ونموذج LLM محلي صغيرًا معًا، ويمكنه إضافة Whisper وFrigate.' } },
        { '@type': 'Question', name: 'كم من RAM أحتاج؟', acceptedAnswer: { '@type': 'Answer', text: 'كافٍ لاستيعاب نموذجك المستهدف مع Home Assistant والإضافات. نموذج صغير يحتاج RAM متواضعًا؛ تشغيل نموذج 7B بشكل مريح يستفيد من RAM وافر.' } },
        { '@type': 'Question', name: 'Intel أم AMD لـ mini PC بـ Home Assistant؟', acceptedAnswer: { '@type': 'Answer', text: 'كلاهما يعمل. Intel N-series منخفض الطاقة هو الأرخص للاستخدام الخفيف؛ AMD Ryzen أو Intel Core i مع iGPU قوية يتعامل بشكل أفضل مع نموذج 7B.' } },
        { '@type': 'Question', name: 'ما أرخص mini PC يشغّل نموذج LLM محلي؟', acceptedAnswer: { '@type': 'Answer', text: 'Intel N-series منخفض الطاقة يمكنه تشغيل Home Assistant مع نموذج صغير جدًا، وإن كانت الاستجابات أبطأ. لمساعد 7B أسرع، ترقَّ إلى Ryzen أو Core i مع iGPU قوية.' } },
      ],
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Beste Mini-PCs für Home Assistant + lokale KI (2026)',
    seoTitle: 'Bester Mini-PC für Home Assistant + lokale KI 2026',
    intro:
      'Die besten Mini-PCs, um Home Assistant plus ein lokales LLM auf einem Gerät zu betreiben, priorisieren RAM und eine leistungsfähige integrierte GPU oder NPU. Diese Kaufberatung erklärt, was Sie für HA plus KI auf einer einzigen Maschine brauchen, vergleicht die wichtigsten Mini-PC-Klassen, wägt Budget gegen Leistung ab und behandelt Einrichtungshinweise – mit Querverweis auf den local-llms-Hardware-Leitfaden für VRAM-Tiefe.',
    metaDescription:
      'Mini-PC-Guide für Home Assistant + lokales LLM 2026: RAM und iGPU/NPU schlagen CPU-Takt. Drei Hardwareklassen verglichen — Budget, Mid-Range und NPU.',
    twitterDescription:
      'Beste Mini-PCs, um Home Assistant + ein lokales LLM auf einem Gerät zu betreiben: RAM und eine leistungsfähige iGPU/NPU priorisieren. Klassen im Vergleich, Empfehlungen nach Budget.',
    readTime: '8 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Käufer, die einen Mini-PC für Home Assistant und lokale KI wählen',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'bester mini pc home assistant lokale ki',
      'mini pc home assistant llm',
      'home assistant lokale ki hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**Der beste Mini-PC für Home Assistant plus ein lokales LLM hat reichlich RAM und eine leistungsfähige integrierte GPU oder NPU, sodass er den Hub und ein kleines Modell auf einem Gerät betreibt.** Priorisieren Sie RAM und die Grafik/NPU für die KI-Latenz über die rohe CPU-Taktung.',
    quickAnswerTop: {
      de: {
        question: 'Welcher Mini-PC ist am besten für Home Assistant und lokale KI?',
        answer:
          'Wählen Sie einen Mini-PC mit genug RAM (mehr ist besser, um ein Modell neben Home Assistant zu betreiben) und einer leistungsfähigen integrierten GPU oder NPU, um ein kleines LLM reaktionsschnell zu halten. Ein stromsparendes Intel-N-Serie-Gerät betreibt Home Assistant und ein winziges Modell; ein Mini-PC mit AMD Ryzen oder Intel Core i und starker iGPU bewältigt ein 7B-Modell besser.',
        bullets: [
          'RAM und eine leistungsfähige iGPU/NPU über die CPU-Taktung priorisieren',
          'Stromsparende N-Serie: HA + ein sehr kleines Modell',
          'Ryzen / Core-i-Serie mit starker iGPU: HA + ein 7B-Modell',
          'Ein Gerät betreibt HA, Ollama, Whisper und Frigate zusammen',
          'Für VRAM-Tiefe siehe den local-llms-Hardware-Leitfaden',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Kurzfassung', anchor: 'tldr' },
      { label: 'Was Sie für HA + LLM brauchen', anchor: 'what-you-need' },
      { label: 'Die Mini-PC-Klassen', anchor: 'classes' },
      { label: 'Vergleich', anchor: 'comparison' },
      { label: 'Budget vs Leistung', anchor: 'budget-performance' },
      { label: 'Einrichtungshinweise', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Der beste Mini-PC für Home Assistant plus ein lokales LLM hat reichlich RAM und eine leistungsfähige iGPU oder NPU, um den Hub und ein kleines Modell auf einem Gerät zu betreiben.' },
      { type: 'plain-terms', content: 'Ein Mini-PC ist ein kleiner, stromsparender Computer, der Ihr ganzes Smart Home plus ein lokales KI-Modell betreiben kann. Die zwei wichtigsten Dinge sind RAM (genug, um Modell und Hub zu fassen) und ein leistungsfähiger Grafikchip oder eine NPU (um die KI reaktionsschnell zu halten). Die CPU-Taktung zählt weniger.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Kurzfassung',
        isTldr: true,
        items: [
          'RAM und eine leistungsfähige integrierte GPU oder NPU über die rohe CPU-Taktung priorisieren',
          'Ein stromsparender Mini-PC der Intel-N-Serie betreibt Home Assistant und ein sehr kleines Modell',
          'Ein Mini-PC mit AMD Ryzen oder Intel Core i und starker iGPU bewältigt ein 7B-Modell',
          'Ein Mini-PC kann Home Assistant, Ollama, Whisper und Frigate zusammen betreiben',
          'Mehr RAM lässt Sie ein größeres Modell neben dem Hub betreiben',
          'Für VRAM-Details siehe den clusterübergreifenden local-llms-Hardware-Leitfaden',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Was Sie für HA + LLM auf einem Gerät brauchen',
        content:
          '**Sie brauchen genug RAM, um das Modell plus Home Assistant zu fassen, und eine leistungsfähige iGPU oder NPU, um das Modell reaktionsschnell zu halten.** Die CPU-Taktung ist für diesen Workload zweitrangig.',
        items: [
          'RAM: genug Reserve für die gewünschte Modellgröße plus Hub und Add-ons.',
          'Grafik/NPU: eine leistungsfähige integrierte GPU oder NPU senkt die LLM- und Whisper-Latenz.',
          'Speicher: Platz für Aufnahmen, wenn Sie auch Frigate betreiben – siehe [lokale KI-Sicherheitskameras](/de/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'Die Mini-PC-Klassen',
        content:
          '**Drei Klassen decken die meisten Bedürfnisse ab: stromsparende N-Serie für leichte KI, Ryzen/Core-i mit starker iGPU für ein 7B-Modell und NPU-bestückte Mini-PCs für effiziente On-Device-KI.** Wählen Sie nach der gewünschten Modellgröße.',
        items: [
          '**Stromsparende Intel-N-Serie:** effizient und günstig; betreibt Home Assistant und ein sehr kleines Modell, langsamer bei KI. Beispiel: Beelink EQ14 oder GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i mit starker iGPU:** mehr RAM- und Grafik-Reserve für ein 7B-Modell bei nutzbarer Latenz. Beispiel: Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) oder Minisforum UM890 Pro.',
          '**NPU-bestückte Mini-PCs:** neuere Maschinen mit einer Neural Processing Unit; die starke integrierte GPU – nicht die NPU – erledigt die lokale LLM-Arbeit, während die NPU bei Bildaufgaben wie Frigate hilft. Beispiel: GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Vergleich',
        content:
          '**Passen Sie die Klasse an Ihr Zielmodell an: N-Serie für ein winziges Modell, Ryzen/Core-i mit starker iGPU für ein 7B-Modell.** Die Preise sind relativ.',
        columns: ['Mini-PC-Klasse', 'CPU', 'RAM-Empfehlung', 'Betreibt ein lokales LLM', 'Relativer Preis'],
        rows: [
          { 'Mini-PC-Klasse': 'Stromsparende N-Serie', 'CPU': 'Intel N-Serie', 'RAM-Empfehlung': 'Mittel', 'Betreibt ein lokales LLM': 'Sehr kleine Modelle, langsamer', 'Relativer Preis': 'Niedrig' },
          { 'Mini-PC-Klasse': 'Ryzen / Core i (starke iGPU)', 'CPU': 'AMD Ryzen / Intel Core i', 'RAM-Empfehlung': 'Reichlich', 'Betreibt ein lokales LLM': 'Bis ~7B bei nutzbarer Latenz', 'Relativer Preis': 'Mittel' },
          { 'Mini-PC-Klasse': 'NPU-bestückt', 'CPU': 'Moderne CPU + NPU', 'RAM-Empfehlung': 'Reichlich', 'Betreibt ein lokales LLM': 'Effiziente kleine/mittlere Modelle', 'Relativer Preis': 'Mittel–hoch' },
        ],
        items: [
          'Für VRAM und Quantisierungs-Tiefe siehe clusterübergreifend [beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs Leistung',
        content:
          '**Kaufen Sie das günstigste Gerät, das Ihr Zielmodell bei akzeptabler Latenz betreibt – meist ein Ryzen/Core-i-Mini-PC mit starker iGPU für ein 7B-Modell.** Geben Sie nicht zu viel für CPU aus, die Sie nicht nutzen.',
        items: [
          'Budget: ein stromsparendes N-Serie-Gerät für HA plus ein winziges Modell.',
          'Ausgewogen: ein Ryzen/Core-i-Mini-PC mit starker iGPU für ein 7B-Modell.',
          'Für die breitere Hardware-Entscheidung (Pi vs Mini-PC vs NAS) siehe [beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Einrichtungshinweise',
        content:
          '**Betreiben Sie Home Assistant OS oder einen Container, installieren Sie Ollama und bestätigen Sie, dass die iGPU/NPU für die Inferenz genutzt wird.** Halten Sie das Gerät für Zuverlässigkeit per Kabel am Netzwerk.',
        items: [
          'Installieren Sie Home Assistant – siehe [Erste Schritte](/de/smart-home/home-assistant-getting-started).',
          'Installieren Sie Ollama und laden Sie ein kleines Modell – siehe [Ollama installieren](/de/local-llms/how-to-install-ollama).',
          'Verdrahten Sie Ollama in Home Assistant – siehe [der Leitfaden zur Ollama-Integration](/de/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Kann ein Mini-PC sowohl Home Assistant als auch ein lokales LLM betreiben?', a: 'Ja. Ein Mini-PC mit genug RAM und einer leistungsfähigen integrierten GPU oder NPU betreibt Home Assistant und ein kleines lokales LLM zusammen und kann Whisper und Frigate hinzufügen. Dieser Ein-Geräte-Ansatz ist der einfachste Weg zu einem lokalen KI-Smart-Home.' },
          { q: 'Wie viel RAM brauche ich?', a: 'Genug, um Ihr Zielmodell plus Home Assistant und etwaige Add-ons zu fassen. Ein kleines Modell braucht nur bescheidenen RAM, während es einem 7B-Modell, das bequem neben dem Hub läuft, von reichlich RAM profitiert. Passen Sie den RAM an das größte geplante Modell an.' },
          { q: 'Intel oder AMD für einen Home-Assistant-Mini-PC?', a: 'Beides funktioniert. Ein stromsparendes Intel-N-Serie-Gerät ist für leichte Nutzung am günstigsten; ein Mini-PC mit AMD Ryzen oder Intel Core i und starker integrierter GPU bewältigt ein 7B-Modell besser. Wählen Sie nach der gewünschten Modellgröße und Latenz.' },
          { q: 'Was ist der günstigste Mini-PC, der ein lokales LLM betreibt?', a: 'Ein stromsparender Intel-N-Serie-Mini-PC ist der günstigste, der Home Assistant plus ein sehr kleines Modell betreiben kann, wenn auch mit langsameren Antworten. Für einen flotteren Assistenten der 7B-Klasse steigen Sie auf einen Ryzen- oder Core-i-Mini-PC mit starker iGPU um.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Beste Hardware für ein lokales Smart Home](/de/smart-home/best-hardware-for-local-smart-home) – Pi vs Mini-PC vs NAS vs Server',
          '[Ihr Smart Home mit einem lokalen LLM betreiben](/de/smart-home/local-llm-smart-home-complete-guide) – was das Gerät betreibt',
          '[Ollama mit Home Assistant verbinden](/de/smart-home/home-assistant-ollama-integration) – das Modell einbinden',
          '[Beste Mini-PCs für lokale LLMs](/de/local-llms/best-mini-pcs-local-llm) – clusterübergreifend: VRAM und Hardware-Tiefe',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Beste Mini-PCs für Home Assistant + lokale KI (2026)',
      description: 'Mini-PC-Guide für Home Assistant + lokales LLM 2026: RAM und iGPU/NPU schlagen CPU-Takt. Drei Hardwareklassen verglichen — Budget, Mid-Range und NPU.',
      url: 'https://www.promptquorum.com/de/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'Lokales LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'de',
      mainEntity: [
        { '@type': 'Question', name: 'Kann ein Mini-PC sowohl Home Assistant als auch ein lokales LLM betreiben?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Ein Mini-PC mit genug RAM und einer leistungsfähigen iGPU oder NPU betreibt Home Assistant und ein kleines lokales LLM zusammen und kann Whisper und Frigate hinzufügen.' } },
        { '@type': 'Question', name: 'Wie viel RAM brauche ich?', acceptedAnswer: { '@type': 'Answer', text: 'Genug, um Ihr Zielmodell plus Home Assistant und Add-ons zu fassen. Ein kleines Modell braucht bescheidenen RAM; ein 7B-Modell bequem zu betreiben profitiert von reichlich RAM.' } },
        { '@type': 'Question', name: 'Intel oder AMD für einen Home-Assistant-Mini-PC?', acceptedAnswer: { '@type': 'Answer', text: 'Beides funktioniert. Ein stromsparendes Intel-N-Serie-Gerät ist für leichte Nutzung am günstigsten; ein AMD Ryzen oder Intel Core i mit starker iGPU bewältigt ein 7B-Modell besser.' } },
        { '@type': 'Question', name: 'Was ist der günstigste Mini-PC, der ein lokales LLM betreibt?', acceptedAnswer: { '@type': 'Answer', text: 'Ein stromsparender Intel-N-Serie-Mini-PC kann Home Assistant plus ein sehr kleines Modell betreiben, wenn auch langsamer. Für einen flotteren 7B-Assistenten steigen Sie auf einen Ryzen oder Core i mit starker iGPU um.' } },
      ],
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Mejores Mini PC para Home Assistant + IA Local (2026)',
    seoTitle: 'Mejor Mini PC para Home Assistant + IA Local en 2026',
    intro:
      'Los mejores mini PC para ejecutar Home Assistant más un LLM local en un solo equipo priorizan la RAM y una GPU integrada o NPU capaz. Esta guía de compra explica qué necesitas para HA más IA en una sola máquina, compara las principales clases de mini PC, sopesa presupuesto frente a rendimiento y cubre notas de configuración, con enlace cruzado a la guía de hardware de local-llms para la profundidad de VRAM.',
    metaDescription:
      'Guía de mini PC para Home Assistant + LLM local 2026: la RAM y la iGPU/NPU superan a la CPU. Tres clases comparadas: económica, gama media y con NPU.',
    twitterDescription:
      'Mejores mini PC para ejecutar Home Assistant + un LLM local en un equipo: prioriza la RAM y una iGPU/NPU capaz. Clases comparadas, opciones por presupuesto.',
    readTime: '8 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores que eligen un mini PC para Home Assistant e IA local',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'mejor mini pc home assistant ia local',
      'mini pc home assistant llm',
      'home assistant ia local hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**El mejor mini PC para Home Assistant más un LLM local tiene RAM amplia y una GPU integrada o NPU capaz, así que ejecuta el hub y un modelo pequeño en un solo equipo.** Prioriza la RAM y los gráficos/NPU sobre la frecuencia bruta de la CPU para la latencia de IA.',
    quickAnswerTop: {
      es: {
        question: '¿Qué mini PC es mejor para Home Assistant e IA local?',
        answer:
          'Elige un mini PC con suficiente RAM (más es mejor para ejecutar un modelo junto a Home Assistant) y una GPU integrada o NPU capaz para mantener un LLM pequeño con buena respuesta. Un equipo de bajo consumo de la serie N de Intel ejecuta Home Assistant y un modelo diminuto; un mini PC con AMD Ryzen o Intel Core i con una iGPU fuerte maneja mejor un modelo 7B.',
        bullets: [
          'Prioriza la RAM y una iGPU/NPU capaz sobre la frecuencia de la CPU',
          'Serie N de bajo consumo: HA + un modelo muy pequeño',
          'Serie Ryzen / Core i con iGPU fuerte: HA + un modelo 7B',
          'Un equipo ejecuta HA, Ollama, Whisper y Frigate juntos',
          'Consulta la guía de hardware de local-llms para la profundidad de VRAM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumen', anchor: 'tldr' },
      { label: 'Qué necesitas para HA + LLM', anchor: 'what-you-need' },
      { label: 'Las clases de mini PC', anchor: 'classes' },
      { label: 'Comparación', anchor: 'comparison' },
      { label: 'Presupuesto vs rendimiento', anchor: 'budget-performance' },
      { label: 'Notas de configuración', anchor: 'setup-notes' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'El mejor mini PC para Home Assistant más un LLM local tiene RAM amplia y una iGPU o NPU capaz para ejecutar el hub y un modelo pequeño en un solo equipo.' },
      { type: 'plain-terms', content: 'Un mini PC es un ordenador pequeño y de bajo consumo que puede ejecutar todo tu smart home más un modelo de IA local. Las dos cosas que más importan son la RAM (suficiente para alojar el modelo y el hub) y un chip gráfico o NPU capaz (para mantener la IA con buena respuesta). La frecuencia de la CPU importa menos.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        items: [
          'Prioriza la RAM y una GPU integrada o NPU capaz sobre la frecuencia bruta de la CPU',
          'Un mini PC de bajo consumo de la serie N de Intel ejecuta Home Assistant y un modelo muy pequeño',
          'Un mini PC con AMD Ryzen o Intel Core i con una iGPU fuerte maneja un modelo 7B',
          'Un mini PC puede ejecutar Home Assistant, Ollama, Whisper y Frigate juntos',
          'Más RAM te permite ejecutar un modelo más grande junto al hub',
          'Consulta la guía de hardware de local-llms (entre clústeres) para detalles de VRAM',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Qué necesitas para HA + LLM en un equipo',
        content:
          '**Necesitas suficiente RAM para alojar el modelo más Home Assistant, y una iGPU o NPU capaz para mantener el modelo con buena respuesta.** La frecuencia de la CPU es secundaria para esta carga.',
        items: [
          'RAM: margen suficiente para el tamaño de modelo que quieras más el hub y los complementos.',
          'Gráficos/NPU: una GPU integrada o NPU capaz reduce la latencia del LLM y de Whisper.',
          'Almacenamiento: espacio para grabaciones si también ejecutas Frigate — consulta [cámaras de seguridad con IA local](/es/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'Las clases de mini PC',
        content:
          '**Tres clases cubren la mayoría de las necesidades: serie N de bajo consumo para IA ligera, Ryzen/Core i con iGPU fuerte para un modelo 7B, y mini PC con NPU para IA eficiente en el dispositivo.** Elige por el tamaño de modelo que quieras.',
        items: [
          '**Serie N de Intel de bajo consumo:** eficiente y barata; ejecuta Home Assistant y un modelo muy pequeño, más lenta en IA. Ejemplo: Beelink EQ14 o GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i con iGPU fuerte:** más RAM y margen gráfico para un modelo 7B con latencia usable. Ejemplo: Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) o Minisforum UM890 Pro.',
          '**Mini PC con NPU:** máquinas más nuevas con una unidad de procesamiento neuronal; la GPU integrada fuerte — no la NPU — hace el trabajo del LLM local, mientras que la NPU ayuda en tareas de visión como Frigate. Ejemplo: GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparación',
        content:
          '**Ajusta la clase a tu modelo objetivo: serie N para un modelo diminuto, Ryzen/Core i con iGPU fuerte para un modelo 7B.** Los precios son relativos.',
        columns: ['Clase de mini PC', 'CPU', 'Guía de RAM', 'Ejecuta un LLM local', 'Precio relativo'],
        rows: [
          { 'Clase de mini PC': 'Serie N de bajo consumo', 'CPU': 'Intel serie N', 'Guía de RAM': 'Moderada', 'Ejecuta un LLM local': 'Modelos muy pequeños, más lento', 'Precio relativo': 'Bajo' },
          { 'Clase de mini PC': 'Ryzen / Core i (iGPU fuerte)', 'CPU': 'AMD Ryzen / Intel Core i', 'Guía de RAM': 'Amplia', 'Ejecuta un LLM local': 'Hasta ~7B con latencia usable', 'Precio relativo': 'Medio' },
          { 'Clase de mini PC': 'Con NPU', 'CPU': 'CPU moderna + NPU', 'Guía de RAM': 'Amplia', 'Ejecuta un LLM local': 'Modelos pequeños/medianos eficientes', 'Precio relativo': 'Medio–alto' },
        ],
        items: [
          'Para VRAM y profundidad de cuantización, consulta entre clústeres [mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Presupuesto vs rendimiento',
        content:
          '**Compra el equipo más barato que ejecute tu modelo objetivo con latencia aceptable — normalmente un mini PC Ryzen/Core i con una iGPU fuerte para un modelo 7B.** No gastes de más en CPU que no usarás.',
        items: [
          'Económico: un equipo de la serie N de bajo consumo para HA más un modelo diminuto.',
          'Equilibrado: un mini PC Ryzen/Core i con una iGPU fuerte para un modelo 7B.',
          'Para la decisión de hardware más amplia (Pi vs mini PC vs NAS), consulta [mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notas de configuración',
        content:
          '**Ejecuta Home Assistant OS o un contenedor, instala Ollama y confirma que la iGPU/NPU se usa para la inferencia.** Mantén el equipo cableado a tu red para fiabilidad.',
        items: [
          'Instala Home Assistant — consulta [primeros pasos](/es/smart-home/home-assistant-getting-started).',
          'Instala Ollama y descarga un modelo pequeño — consulta [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
          'Cablea Ollama en Home Assistant — consulta [la guía de integración de Ollama](/es/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Puede un mini PC hacer tanto Home Assistant como un LLM local?', a: 'Sí. Un mini PC con suficiente RAM y una GPU integrada o NPU capaz ejecuta Home Assistant y un LLM local pequeño juntos, y puede añadir Whisper y Frigate. Este enfoque de un solo equipo es la forma más simple de tener un smart home con IA local.' },
          { q: '¿Cuánta RAM necesito?', a: 'Suficiente para alojar tu modelo objetivo más Home Assistant y cualquier complemento. Un modelo pequeño necesita poca RAM, mientras que ejecutar un modelo 7B cómodamente junto al hub se beneficia de RAM amplia. Ajusta la RAM al modelo más grande que planees ejecutar.' },
          { q: '¿Intel o AMD para un mini PC de Home Assistant?', a: 'Ambos funcionan. Un equipo de la serie N de Intel de bajo consumo es el más barato para uso ligero; un mini PC con AMD Ryzen o Intel Core i con una GPU integrada fuerte maneja mejor un modelo 7B. Elige según el tamaño de modelo y la latencia que quieras.' },
          { q: '¿Cuál es el mini PC más barato que ejecuta un LLM local?', a: 'Un mini PC de la serie N de Intel de bajo consumo es el más barato que puede ejecutar Home Assistant más un modelo muy pequeño, aunque las respuestas son más lentas. Para un asistente más ágil de clase 7B, sube a un mini PC Ryzen o Core i con una iGPU fuerte.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejor hardware para un smart home local](/es/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs servidor',
          '[Ejecutar tu smart home con un LLM local](/es/smart-home/local-llm-smart-home-complete-guide) — qué ejecuta el equipo',
          '[Conectar Ollama a Home Assistant](/es/smart-home/home-assistant-ollama-integration) — integra el modelo',
          '[Mejores mini PC para LLM locales](/es/local-llms/best-mini-pcs-local-llm) — entre clústeres: VRAM y detalle de hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Mejores Mini PC para Home Assistant + IA Local (2026)',
      description: 'Guía de mini PC para Home Assistant + LLM local 2026: la RAM y la iGPU/NPU superan a la CPU. Tres clases comparadas: económica, gama media y con NPU.',
      url: 'https://www.promptquorum.com/es/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'es',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        { '@type': 'Question', name: '¿Puede un mini PC hacer tanto Home Assistant como un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Sí. Un mini PC con suficiente RAM y una iGPU o NPU capaz ejecuta Home Assistant y un LLM local pequeño juntos, y puede añadir Whisper y Frigate.' } },
        { '@type': 'Question', name: '¿Cuánta RAM necesito?', acceptedAnswer: { '@type': 'Answer', text: 'Suficiente para alojar tu modelo objetivo más Home Assistant y complementos. Un modelo pequeño necesita poca RAM; ejecutar un modelo 7B cómodamente se beneficia de RAM amplia.' } },
        { '@type': 'Question', name: '¿Intel o AMD para un mini PC de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos funcionan. Un equipo de la serie N de Intel de bajo consumo es el más barato para uso ligero; un AMD Ryzen o Intel Core i con una iGPU fuerte maneja mejor un modelo 7B.' } },
        { '@type': 'Question', name: '¿Cuál es el mini PC más barato que ejecuta un LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini PC de la serie N de Intel de bajo consumo puede ejecutar Home Assistant más un modelo muy pequeño, aunque más lento. Para un asistente 7B más ágil, sube a un Ryzen o Core i con una iGPU fuerte.' } },
      ],
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Meilleurs Mini-PC pour Home Assistant + IA Locale (2026)',
    seoTitle: 'Meilleur Mini-PC pour Home Assistant + IA Locale 2026',
    intro:
      'Les meilleurs mini-PC pour faire tourner Home Assistant plus un LLM local sur une seule machine priorisent la RAM et un GPU intégré ou NPU capable. Ce guide d\'achat explique ce qu\'il vous faut pour HA plus l\'IA sur une seule machine, compare les principales classes de mini-PC, pèse le budget face aux performances et couvre des notes de configuration — avec lien croisé vers le guide matériel de local-llms pour la profondeur de VRAM.',
    metaDescription:
      'Guide mini-PC pour Home Assistant + LLM local 2026 : RAM et iGPU/NPU surpassent le CPU. Trois classes comparées : entrée de gamme, milieu de gamme et NPU.',
    twitterDescription:
      'Meilleurs mini-PC pour faire tourner Home Assistant + un LLM local sur une machine : priorisez la RAM et un iGPU/NPU capable. Classes comparées, choix par budget.',
    readTime: '8 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Acheteurs choisissant un mini-PC pour Home Assistant et l\'IA locale',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'meilleur mini pc home assistant ia locale',
      'mini pc home assistant llm',
      'home assistant ia locale matériel',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**Le meilleur mini-PC pour Home Assistant plus un LLM local a une RAM ample et un GPU intégré ou NPU capable, pour faire tourner le hub et un petit modèle sur une seule machine.** Priorisez la RAM et le graphique/NPU plutôt que la fréquence brute du CPU pour la latence de l\'IA.',
    quickAnswerTop: {
      fr: {
        question: 'Quel mini-PC est le meilleur pour Home Assistant et l\'IA locale ?',
        answer:
          'Choisissez un mini-PC avec assez de RAM (plus c\'est mieux pour faire tourner un modèle aux côtés de Home Assistant) et un GPU intégré ou NPU capable pour garder un petit LLM réactif. Une machine basse consommation de la série N d\'Intel fait tourner Home Assistant et un modèle minuscule ; un mini-PC AMD Ryzen ou Intel Core i avec un iGPU puissant gère mieux un modèle 7B.',
        bullets: [
          'Priorisez la RAM et un iGPU/NPU capable plutôt que la fréquence du CPU',
          'Série N basse consommation : HA + un très petit modèle',
          'Série Ryzen / Core i avec iGPU puissant : HA + un modèle 7B',
          'Une machine fait tourner HA, Ollama, Whisper et Frigate ensemble',
          'Voir le guide matériel de local-llms pour la profondeur de VRAM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'En bref', anchor: 'tldr' },
      { label: 'Ce qu\'il vous faut pour HA + LLM', anchor: 'what-you-need' },
      { label: 'Les classes de mini-PC', anchor: 'classes' },
      { label: 'Comparaison', anchor: 'comparison' },
      { label: 'Budget vs performances', anchor: 'budget-performance' },
      { label: 'Notes de configuration', anchor: 'setup-notes' },
      { label: 'FAQ', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Le meilleur mini-PC pour Home Assistant plus un LLM local a une RAM ample et un iGPU ou NPU capable pour faire tourner le hub et un petit modèle sur une seule machine.' },
      { type: 'plain-terms', content: 'Un mini-PC est un petit ordinateur basse consommation qui peut faire tourner toute votre maison connectée plus un modèle d\'IA local. Les deux choses qui comptent le plus sont la RAM (assez pour contenir le modèle et le hub) et une puce graphique ou un NPU capable (pour garder l\'IA réactive). La fréquence du CPU compte moins.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'En bref',
        isTldr: true,
        items: [
          'Priorisez la RAM et un GPU intégré ou NPU capable plutôt que la fréquence brute du CPU',
          'Un mini-PC basse consommation de la série N d\'Intel fait tourner Home Assistant et un très petit modèle',
          'Un mini-PC AMD Ryzen ou Intel Core i avec un iGPU puissant gère un modèle 7B',
          'Un mini-PC peut faire tourner Home Assistant, Ollama, Whisper et Frigate ensemble',
          'Plus de RAM vous permet de faire tourner un plus gros modèle aux côtés du hub',
          'Voir le guide matériel de local-llms (inter-clusters) pour les détails de VRAM',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'Ce qu\'il vous faut pour HA + LLM sur une machine',
        content:
          '**Il vous faut assez de RAM pour contenir le modèle plus Home Assistant, et un iGPU ou NPU capable pour garder le modèle réactif.** La fréquence du CPU est secondaire pour cette charge.',
        items: [
          'RAM : assez de marge pour la taille de modèle voulue plus le hub et les add-ons.',
          'Graphique/NPU : un GPU intégré ou NPU capable réduit la latence du LLM et de Whisper.',
          'Stockage : de la place pour les enregistrements si vous faites aussi tourner Frigate — voir [caméras de sécurité à IA locale](/fr/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'Les classes de mini-PC',
        content:
          '**Trois classes couvrent la plupart des besoins : série N basse consommation pour l\'IA légère, Ryzen/Core i avec iGPU puissant pour un modèle 7B, et mini-PC à NPU pour une IA efficace sur l\'appareil.** Choisissez par la taille de modèle voulue.',
        items: [
          '**Série N d\'Intel basse consommation :** efficace et bon marché ; fait tourner Home Assistant et un très petit modèle, plus lente en IA. Exemple : Beelink EQ14 ou GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i avec iGPU puissant :** plus de RAM et de marge graphique pour un modèle 7B à latence utilisable. Exemple : Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) ou Minisforum UM890 Pro.',
          '**Mini-PC à NPU :** des machines plus récentes avec une unité de traitement neuronal ; l\'iGPU puissant — et non le NPU — fait le travail du LLM local, tandis que le NPU aide aux tâches de vision comme Frigate. Exemple : GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparaison',
        content:
          '**Adaptez la classe à votre modèle cible : série N pour un modèle minuscule, Ryzen/Core i avec iGPU puissant pour un modèle 7B.** Les prix sont relatifs.',
        columns: ['Classe de mini-PC', 'CPU', 'Indication RAM', 'Fait tourner un LLM local', 'Prix relatif'],
        rows: [
          { 'Classe de mini-PC': 'Série N basse consommation', 'CPU': 'Intel série N', 'Indication RAM': 'Modérée', 'Fait tourner un LLM local': 'Très petits modèles, plus lent', 'Prix relatif': 'Faible' },
          { 'Classe de mini-PC': 'Ryzen / Core i (iGPU puissant)', 'CPU': 'AMD Ryzen / Intel Core i', 'Indication RAM': 'Ample', 'Fait tourner un LLM local': 'Jusqu\'à ~7B à latence utilisable', 'Prix relatif': 'Moyen' },
          { 'Classe de mini-PC': 'À NPU', 'CPU': 'CPU moderne + NPU', 'Indication RAM': 'Ample', 'Fait tourner un LLM local': 'Petits/moyens modèles efficaces', 'Prix relatif': 'Moyen–élevé' },
        ],
        items: [
          'Pour la VRAM et la profondeur de quantification, voir inter-clusters [meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Budget vs performances',
        content:
          '**Achetez la machine la moins chère qui fait tourner votre modèle cible à une latence acceptable — généralement un mini-PC Ryzen/Core i avec un iGPU puissant pour un modèle 7B.** Ne dépensez pas trop en CPU que vous n\'utiliserez pas.',
        items: [
          'Économique : une machine de la série N basse consommation pour HA plus un modèle minuscule.',
          'Équilibré : un mini-PC Ryzen/Core i avec un iGPU puissant pour un modèle 7B.',
          'Pour la décision matérielle plus large (Pi vs mini-PC vs NAS), voir [meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notes de configuration',
        content:
          '**Faites tourner Home Assistant OS ou un conteneur, installez Ollama et confirmez que l\'iGPU/NPU est utilisé pour l\'inférence.** Gardez la machine câblée à votre réseau pour la fiabilité.',
        items: [
          'Installez Home Assistant — voir [premiers pas](/fr/smart-home/home-assistant-getting-started).',
          'Installez Ollama et téléchargez un petit modèle — voir [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
          'Câblez Ollama dans Home Assistant — voir [le guide d\'intégration Ollama](/fr/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Un seul mini-PC peut-il faire à la fois Home Assistant et un LLM local ?', a: 'Oui. Un mini-PC avec assez de RAM et un GPU intégré ou NPU capable fait tourner Home Assistant et un petit LLM local ensemble, et peut ajouter Whisper et Frigate. Cette approche en une machine est la façon la plus simple d\'obtenir une maison connectée à IA locale.' },
          { q: 'De combien de RAM ai-je besoin ?', a: 'Assez pour contenir votre modèle cible plus Home Assistant et les add-ons. Un petit modèle ne nécessite que peu de RAM, tandis que faire tourner confortablement un modèle 7B aux côtés du hub profite d\'une RAM ample. Adaptez la RAM au plus gros modèle prévu.' },
          { q: 'Intel ou AMD pour un mini-PC Home Assistant ?', a: 'Les deux fonctionnent. Une machine de la série N d\'Intel basse consommation est la moins chère pour un usage léger ; un mini-PC AMD Ryzen ou Intel Core i avec un GPU intégré puissant gère mieux un modèle 7B. Choisissez selon la taille de modèle et la latence voulues.' },
          { q: 'Quel est le mini-PC le moins cher qui fait tourner un LLM local ?', a: 'Un mini-PC de la série N d\'Intel basse consommation est le moins cher qui puisse faire tourner Home Assistant plus un très petit modèle, bien que les réponses soient plus lentes. Pour un assistant de classe 7B plus vif, montez vers un mini-PC Ryzen ou Core i avec un iGPU puissant.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur matériel pour une maison connectée locale](/fr/smart-home/best-hardware-for-local-smart-home) — Pi vs mini-PC vs NAS vs serveur',
          '[Faire tourner votre maison connectée sur un LLM local](/fr/smart-home/local-llm-smart-home-complete-guide) — ce que la machine exécute',
          '[Connecter Ollama à Home Assistant](/fr/smart-home/home-assistant-ollama-integration) — intégrer le modèle',
          '[Meilleurs mini-PC pour LLM locaux](/fr/local-llms/best-mini-pcs-local-llm) — inter-clusters : VRAM et détail matériel',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Meilleurs Mini-PC pour Home Assistant + IA Locale (2026)',
      description: 'Guide mini-PC pour Home Assistant + LLM local 2026 : RAM et iGPU/NPU surpassent le CPU. Trois classes comparées : entrée de gamme, milieu de gamme et NPU.',
      url: 'https://www.promptquorum.com/fr/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini-PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'fr',
      mainEntity: [
        { '@type': 'Question', name: 'Un seul mini-PC peut-il faire à la fois Home Assistant et un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui. Un mini-PC avec assez de RAM et un GPU intégré ou NPU capable fait tourner Home Assistant et un petit LLM local ensemble, et peut ajouter Whisper et Frigate.' } },
        { '@type': 'Question', name: 'De combien de RAM ai-je besoin ?', acceptedAnswer: { '@type': 'Answer', text: 'Assez pour contenir votre modèle cible plus Home Assistant et les add-ons. Un petit modèle nécessite peu de RAM ; faire tourner confortablement un modèle 7B profite d\'une RAM ample.' } },
        { '@type': 'Question', name: 'Intel ou AMD pour un mini-PC Home Assistant ?', acceptedAnswer: { '@type': 'Answer', text: 'Les deux fonctionnent. Une machine de la série N d\'Intel basse consommation est la moins chère pour un usage léger ; un AMD Ryzen ou Intel Core i avec un iGPU puissant gère mieux un modèle 7B.' } },
        { '@type': 'Question', name: 'Quel est le mini-PC le moins cher qui fait tourner un LLM local ?', acceptedAnswer: { '@type': 'Answer', text: 'Un mini-PC de la série N d\'Intel basse consommation peut faire tourner Home Assistant plus un très petit modèle, bien que plus lentement. Pour un assistant 7B plus vif, montez vers un Ryzen ou Core i avec un iGPU puissant.' } },
      ],
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Home Assistant + ローカルAIに最適なミニPC（2026）',
    seoTitle: 'Home Assistant + ローカルAIに最適なミニPC 2026年版ガイド',
    intro:
      'Home Assistant とローカル LLM を一台で動かすのに最適なミニPCは、RAM と高性能な統合 GPU または NPU を優先します。本購入ガイドは、一台で HA＋AI に必要なものを説明し、主なミニPCのクラスを比較し、予算と性能を天秤にかけ、設定上の注意を扱います——VRAM の詳細は local-llms のハードウェアガイドへ相互リンクします。',
    metaDescription:
      'Home AssistantとローカルLLMを同時に動かすミニPCの選び方（2026年）：メモリ容量とiGPU・NPU性能を優先判断基準に、エントリークラスのNシリーズ、ミドルクラスのRyzen/Core i、高性能なNPU搭載モデルという3種類を予算別に詳しく比較解説。',
    twitterDescription:
      'Home Assistant + ローカル LLM を一台で動かすのに最適なミニPC：RAM と高性能な iGPU/NPU を優先。クラス比較、予算別の候補。',
    readTime: '8分で読める',
    educationalLevel: 'Intermediate',
    audience: 'Home Assistant とローカルAIのためミニPCを選ぶ購入者',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      '最適 ミニpc home assistant ローカルai',
      'ミニpc home assistant llm',
      'home assistant ローカルai ハードウェア',
      'ミニpc ollama home assistant',
      'home assistant ミニpc 2026',
    ],
    leadAnswerBlock:
      '**Home Assistant とローカル LLM に最適なミニPCは、潤沢な RAM と高性能な統合 GPU または NPU を備え、ハブと小型モデルを一台で動かします。** AI のレイテンシのため、生の CPU クロックより RAM とグラフィック/NPU を優先しましょう。',
    quickAnswerTop: {
      ja: {
        question: 'Home Assistant とローカルAIに最適なミニPCは？',
        answer:
          '十分な RAM（Home Assistant と並べてモデルを動かすには多いほど良い）と、小型 LLM を反応良く保つ高性能な統合 GPU または NPU を備えたミニPCを選びましょう。低消費電力の Intel N シリーズ機は Home Assistant と極小モデルを動かし、強力な iGPU を備えた AMD Ryzen または Intel Core i のミニPCは 7B モデルをより良く扱います。',
        bullets: [
          'CPU クロックより RAM と高性能な iGPU/NPU を優先',
          '低消費電力の N シリーズ：HA + 非常に小さなモデル',
          'Ryzen / Core i シリーズ＋強力な iGPU：HA + 7B モデル',
          '一台で HA、Ollama、Whisper、Frigate を一緒に動かせる',
          'VRAM の詳細は local-llms のハードウェアガイドを参照',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点まとめ', anchor: 'tldr' },
      { label: 'HA + LLM に必要なもの', anchor: 'what-you-need' },
      { label: 'ミニPCのクラス', anchor: 'classes' },
      { label: '比較', anchor: 'comparison' },
      { label: '予算対性能', anchor: 'budget-performance' },
      { label: '設定の注意', anchor: 'setup-notes' },
      { label: 'よくある質問', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant とローカル LLM に最適なミニPCは、潤沢な RAM と高性能な iGPU または NPU を備え、ハブと小型モデルを一台で動かします。' },
      { type: 'plain-terms', content: 'ミニPCは、スマートホーム全体とローカルAIモデルを動かせる小型で低消費電力のコンピューターです。最も重要なのは二つ：RAM（モデルとハブを保持するのに十分）と、高性能なグラフィックチップまたは NPU（AI を反応良く保つため）です。CPU のクロックはそれほど重要ではありません。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点まとめ',
        isTldr: true,
        items: [
          '生の CPU クロックより、RAM と高性能な統合 GPU または NPU を優先する',
          '低消費電力の Intel N シリーズのミニPCは Home Assistant と非常に小さなモデルを動かす',
          '強力な iGPU を備えた AMD Ryzen または Intel Core i のミニPCは 7B モデルを扱う',
          '一台のミニPCで Home Assistant、Ollama、Whisper、Frigate を一緒に動かせる',
          'RAM が多いほど、ハブと並べてより大きなモデルを動かせる',
          'VRAM の詳細はクラスター横断の local-llms ハードウェアガイドを参照',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: '一台で HA + LLM に必要なもの',
        content:
          '**モデルと Home Assistant を保持する十分な RAM と、モデルを反応良く保つ高性能な iGPU または NPU が必要です。** このワークロードでは CPU クロックは二次的です。',
        items: [
          'RAM：欲しいモデルサイズに加え、ハブとアドオンのための十分な余裕。',
          'グラフィック/NPU：高性能な統合 GPU または NPU が LLM と Whisper のレイテンシを下げます。',
          'ストレージ：Frigate も動かすなら録画用の余地を——[ローカルAIセキュリティカメラ](/ja/smart-home/local-ai-security-camera)を参照。',
        ],
      },
      classes: {
        id: 'classes',
        title: 'ミニPCのクラス',
        content:
          '**三つのクラスが大半のニーズを満たします：軽い AI には低消費電力の N シリーズ、7B モデルには強力な iGPU 付きの Ryzen/Core i、効率的なオンデバイス AI には NPU 搭載のミニPC。** 欲しいモデルサイズで選びましょう。',
        items: [
          '**低消費電力の Intel N シリーズ：** 効率的で安い；Home Assistant と非常に小さなモデルを動かし、AI では遅め。例：Beelink EQ14 または GMKtec G3 Plus（Intel N150）。',
          '**強力な iGPU 付きの AMD Ryzen / Intel Core i：** 使えるレイテンシで 7B モデルを動かすための、より多い RAM とグラフィックの余裕。例：Beelink SER8（Ryzen 7 8845HS、Radeon 780M）または Minisforum UM890 Pro。',
          '**NPU 搭載のミニPC：** ニューラル処理ユニットを備えた新しめのマシン；ローカル LLM の処理は強力な統合 GPU が担い、NPU ではありません。NPU は Frigate のような映像タスクで役立ちます。例：GEEKOM A9 Max（Ryzen AI 9 HX 370）。',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus（Intel N150）', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max（Ryzen AI 9 HX 370）', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比較',
        content:
          '**クラスを目標モデルに合わせましょう：極小モデルには N シリーズ、7B モデルには強力な iGPU 付きの Ryzen/Core i。** 価格は相対的です。',
        columns: ['ミニPCのクラス', 'CPU', 'RAM の目安', 'ローカル LLM を動かせるか', '相対価格'],
        rows: [
          { 'ミニPCのクラス': '低消費電力の N シリーズ', 'CPU': 'Intel N シリーズ', 'RAM の目安': '中程度', 'ローカル LLM を動かせるか': '非常に小さなモデル、遅め', '相対価格': '低' },
          { 'ミニPCのクラス': 'Ryzen / Core i（強力な iGPU）', 'CPU': 'AMD Ryzen / Intel Core i', 'RAM の目安': '潤沢', 'ローカル LLM を動かせるか': '使えるレイテンシで最大 ~7B', '相対価格': '中' },
          { 'ミニPCのクラス': 'NPU 搭載', 'CPU': '現代の CPU + NPU', 'RAM の目安': '潤沢', 'ローカル LLM を動かせるか': '効率的な小〜中型モデル', '相対価格': '中〜高' },
        ],
        items: [
          'VRAM と量子化の詳細は、クラスター横断で[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm)を参照。',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: '予算対性能',
        content:
          '**目標モデルを許容できるレイテンシで動かせる最も安い機器を買いましょう——たいていは 7B モデル向けに強力な iGPU を備えた Ryzen/Core i のミニPC。** 使わない CPU に払いすぎないように。',
        items: [
          '予算重視：HA と極小モデル向けの低消費電力 N シリーズ機。',
          'バランス：7B モデル向けに強力な iGPU を備えた Ryzen/Core i のミニPC。',
          'より広いハードウェアの判断（Pi 対 ミニPC 対 NAS）は[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home)を参照。',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: '設定の注意',
        content:
          '**Home Assistant OS かコンテナを動かし、Ollama をインストールし、推論に iGPU/NPU が使われていることを確認しましょう。** 信頼性のため、機器は有線でネットワークにつなぎます。',
        items: [
          'Home Assistant をインストール——[入門](/ja/smart-home/home-assistant-getting-started)を参照。',
          'Ollama をインストールし、小型モデルをプル——[Ollama のインストール方法](/ja/local-llms/how-to-install-ollama)を参照。',
          'Ollama を Home Assistant に配線——[Ollama 統合ガイド](/ja/smart-home/home-assistant-ollama-integration)を参照。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: '一台のミニPCで Home Assistant とローカル LLM の両方をこなせますか？', a: 'はい。十分な RAM と高性能な統合 GPU または NPU を備えたミニPCは、Home Assistant と小型のローカル LLM を一緒に動かし、Whisper と Frigate を加えられます。この一台アプローチは、ローカルAIのスマートホームを得る最もシンプルな方法です。' },
          { q: 'RAM はどれくらい必要ですか？', a: '目標モデルに加え、Home Assistant と各アドオンを保持できるだけ必要です。小型モデルは控えめな RAM で済み、7B モデルをハブと並べて快適に動かすには潤沢な RAM が役立ちます。動かす予定の最大のモデルに RAM を合わせましょう。' },
          { q: 'Home Assistant のミニPCは Intel と AMD のどちら？', a: 'どちらも動きます。低消費電力の Intel N シリーズ機は軽い用途に最も安く、強力な統合 GPU を備えた AMD Ryzen または Intel Core i のミニPCは 7B モデルをより良く扱います。欲しいモデルサイズとレイテンシで選びましょう。' },
          { q: 'ローカル LLM を動かせる最も安いミニPCは？', a: '低消費電力の Intel N シリーズのミニPCが、Home Assistant と非常に小さなモデルを動かせる最も安い機種ですが、応答は遅めです。よりキビキビした 7B クラスのアシスタントには、強力な iGPU を備えた Ryzen または Core i のミニPCへ上げましょう。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルスマートホームに最適なハードウェア](/ja/smart-home/best-hardware-for-local-smart-home) — Pi 対 ミニPC 対 NAS 対 サーバー',
          '[ローカルLLMでスマートホームを動かす](/ja/smart-home/local-llm-smart-home-complete-guide) — 機器が何を動かすか',
          '[Ollama を Home Assistant に接続する](/ja/smart-home/home-assistant-ollama-integration) — モデルを組み込む',
          '[ローカルLLMに最適なミニPC](/ja/local-llms/best-mini-pcs-local-llm) — クラスター横断：VRAM とハードウェアの詳細',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant + ローカルAIに最適なミニPC（2026）',
      description: 'Home AssistantとローカルLLMを同時に動かすミニPCの選び方（2026年）：メモリ容量とiGPU・NPU性能を優先判断基準に、エントリークラスのNシリーズ、ミドルクラスのRyzen/Core i、高性能なNPU搭載モデルという3種類を予算別に詳しく比較解説。',
      url: 'https://www.promptquorum.com/ja/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'ja',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'ミニPC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'ローカルLLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ja',
      mainEntity: [
        { '@type': 'Question', name: '一台のミニPCで Home Assistant とローカル LLM の両方をこなせますか？', acceptedAnswer: { '@type': 'Answer', text: 'はい。十分な RAM と高性能な統合 GPU または NPU を備えたミニPCは、Home Assistant と小型のローカル LLM を一緒に動かし、Whisper と Frigate を加えられます。' } },
        { '@type': 'Question', name: 'RAM はどれくらい必要ですか？', acceptedAnswer: { '@type': 'Answer', text: '目標モデルに加え、Home Assistant とアドオンを保持できるだけ必要です。小型モデルは控えめな RAM で済み、7B モデルを快適に動かすには潤沢な RAM が役立ちます。' } },
        { '@type': 'Question', name: 'Home Assistant のミニPCは Intel と AMD のどちら？', acceptedAnswer: { '@type': 'Answer', text: 'どちらも動きます。低消費電力の Intel N シリーズ機は軽い用途に最も安く、強力な iGPU を備えた AMD Ryzen または Intel Core i は 7B モデルをより良く扱います。' } },
        { '@type': 'Question', name: 'ローカル LLM を動かせる最も安いミニPCは？', acceptedAnswer: { '@type': 'Answer', text: '低消費電力の Intel N シリーズのミニPCが、Home Assistant と非常に小さなモデルを動かせる最も安い機種ですが遅めです。よりキビキビした 7B には強力な iGPU の Ryzen か Core i へ。' } },
      ],
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Melhores Mini PCs para Home Assistant + IA Local (2026)',
    seoTitle: 'Melhor Mini PC para Home Assistant + IA Local em 2026',
    intro:
      'Os melhores mini PCs para rodar o Home Assistant mais um LLM local em uma só máquina priorizam a RAM e uma GPU integrada ou NPU capaz. Este guia de compra explica o que você precisa para HA mais IA em uma única máquina, compara as principais classes de mini PC, pesa orçamento frente a desempenho e cobre notas de configuração — com link cruzado para o guia de hardware do local-llms para a profundidade de VRAM.',
    metaDescription:
      'Guia de mini PC para Home Assistant + LLM local 2026: RAM e iGPU/NPU superam a CPU. Três classes comparadas: econômica, intermediária e com NPU.',
    twitterDescription:
      'Melhores mini PCs para rodar Home Assistant + um LLM local em uma máquina: priorize a RAM e uma iGPU/NPU capaz. Classes comparadas, escolhas por orçamento.',
    readTime: '8 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Compradores escolhendo um mini PC para Home Assistant e IA local',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      'melhor mini pc home assistant ia local',
      'mini pc home assistant llm',
      'home assistant ia local hardware',
      'mini pc ollama home assistant',
      'home assistant mini pc 2026',
    ],
    leadAnswerBlock:
      '**O melhor mini PC para o Home Assistant mais um LLM local tem RAM ampla e uma GPU integrada ou NPU capaz, então roda o hub e um modelo pequeno em uma só máquina.** Priorize a RAM e os gráficos/NPU sobre a frequência bruta da CPU para a latência da IA.',
    quickAnswerTop: {
      pt: {
        question: 'Qual mini PC é melhor para Home Assistant e IA local?',
        answer:
          'Escolha um mini PC com RAM suficiente (mais é melhor para rodar um modelo ao lado do Home Assistant) e uma GPU integrada ou NPU capaz para manter um LLM pequeno responsivo. Uma máquina de baixo consumo da série N da Intel roda o Home Assistant e um modelo minúsculo; um mini PC AMD Ryzen ou Intel Core i com uma iGPU forte lida melhor com um modelo 7B.',
        bullets: [
          'Priorize a RAM e uma iGPU/NPU capaz sobre a frequência da CPU',
          'Série N de baixo consumo: HA + um modelo muito pequeno',
          'Série Ryzen / Core i com iGPU forte: HA + um modelo 7B',
          'Uma máquina roda HA, Ollama, Whisper e Frigate juntos',
          'Veja o guia de hardware do local-llms para a profundidade de VRAM',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: 'Resumo', anchor: 'tldr' },
      { label: 'O que você precisa para HA + LLM', anchor: 'what-you-need' },
      { label: 'As classes de mini PC', anchor: 'classes' },
      { label: 'Comparação', anchor: 'comparison' },
      { label: 'Orçamento vs desempenho', anchor: 'budget-performance' },
      { label: 'Notas de configuração', anchor: 'setup-notes' },
      { label: 'Perguntas frequentes', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'O melhor mini PC para o Home Assistant mais um LLM local tem RAM ampla e uma iGPU ou NPU capaz para rodar o hub e um modelo pequeno em uma só máquina.' },
      { type: 'plain-terms', content: 'Um mini PC é um computador pequeno e de baixo consumo que pode rodar toda a sua casa inteligente mais um modelo de IA local. As duas coisas que mais importam são a RAM (suficiente para abrigar o modelo e o hub) e um chip gráfico ou NPU capaz (para manter a IA responsiva). A frequência da CPU importa menos.' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        items: [
          'Priorize a RAM e uma GPU integrada ou NPU capaz sobre a frequência bruta da CPU',
          'Um mini PC de baixo consumo da série N da Intel roda o Home Assistant e um modelo muito pequeno',
          'Um mini PC AMD Ryzen ou Intel Core i com uma iGPU forte lida com um modelo 7B',
          'Um mini PC pode rodar Home Assistant, Ollama, Whisper e Frigate juntos',
          'Mais RAM permite rodar um modelo maior ao lado do hub',
          'Veja o guia de hardware do local-llms (entre clusters) para detalhes de VRAM',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: 'O que você precisa para HA + LLM em uma máquina',
        content:
          '**Você precisa de RAM suficiente para abrigar o modelo mais o Home Assistant, e de uma iGPU ou NPU capaz para manter o modelo responsivo.** A frequência da CPU é secundária para essa carga.',
        items: [
          'RAM: folga suficiente para o tamanho de modelo que você quer mais o hub e os complementos.',
          'Gráficos/NPU: uma GPU integrada ou NPU capaz reduz a latência do LLM e do Whisper.',
          'Armazenamento: espaço para gravações se você também rodar o Frigate — veja [câmeras de segurança com IA local](/pt/smart-home/local-ai-security-camera).',
        ],
      },
      classes: {
        id: 'classes',
        title: 'As classes de mini PC',
        content:
          '**Três classes cobrem a maioria das necessidades: série N de baixo consumo para IA leve, Ryzen/Core i com iGPU forte para um modelo 7B, e mini PCs com NPU para IA eficiente no dispositivo.** Escolha pelo tamanho de modelo que você quer.',
        items: [
          '**Série N da Intel de baixo consumo:** eficiente e barata; roda o Home Assistant e um modelo muito pequeno, mais lenta na IA. Exemplo: Beelink EQ14 ou GMKtec G3 Plus (Intel N150).',
          '**AMD Ryzen / Intel Core i com iGPU forte:** mais RAM e folga gráfica para um modelo 7B com latência utilizável. Exemplo: Beelink SER8 (Ryzen 7 8845HS, Radeon 780M) ou Minisforum UM890 Pro.',
          '**Mini PCs com NPU:** máquinas mais novas com uma unidade de processamento neural; a iGPU forte — não a NPU — faz o trabalho do LLM local, enquanto a NPU ajuda em tarefas de visão como o Frigate. Exemplo: GEEKOM A9 Max (Ryzen AI 9 HX 370).',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14 (Intel N150)', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus (Intel N150)', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8 (Ryzen 7 8845HS)', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max (Ryzen AI 9 HX 370)', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Comparação',
        content:
          '**Ajuste a classe ao seu modelo-alvo: série N para um modelo minúsculo, Ryzen/Core i com iGPU forte para um modelo 7B.** Os preços são relativos.',
        columns: ['Classe de mini PC', 'CPU', 'Orientação de RAM', 'Roda um LLM local', 'Preço relativo'],
        rows: [
          { 'Classe de mini PC': 'Série N de baixo consumo', 'CPU': 'Intel série N', 'Orientação de RAM': 'Moderada', 'Roda um LLM local': 'Modelos muito pequenos, mais lento', 'Preço relativo': 'Baixo' },
          { 'Classe de mini PC': 'Ryzen / Core i (iGPU forte)', 'CPU': 'AMD Ryzen / Intel Core i', 'Orientação de RAM': 'Ampla', 'Roda um LLM local': 'Até ~7B com latência utilizável', 'Preço relativo': 'Médio' },
          { 'Classe de mini PC': 'Com NPU', 'CPU': 'CPU moderna + NPU', 'Orientação de RAM': 'Ampla', 'Roda um LLM local': 'Modelos pequenos/médios eficientes', 'Preço relativo': 'Médio–alto' },
        ],
        items: [
          'Para VRAM e profundidade de quantização, veja entre clusters [melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm).',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: 'Orçamento vs desempenho',
        content:
          '**Compre a máquina mais barata que roda o seu modelo-alvo com latência aceitável — geralmente um mini PC Ryzen/Core i com uma iGPU forte para um modelo 7B.** Não gaste demais em CPU que você não vai usar.',
        items: [
          'Econômico: uma máquina da série N de baixo consumo para HA mais um modelo minúsculo.',
          'Equilibrado: um mini PC Ryzen/Core i com uma iGPU forte para um modelo 7B.',
          'Para a decisão de hardware mais ampla (Pi vs mini PC vs NAS), veja [melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home).',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: 'Notas de configuração',
        content:
          '**Rode o Home Assistant OS ou um contêiner, instale o Ollama e confirme que a iGPU/NPU é usada para a inferência.** Mantenha a máquina cabeada à sua rede para confiabilidade.',
        items: [
          'Instale o Home Assistant — veja [primeiros passos](/pt/smart-home/home-assistant-getting-started).',
          'Instale o Ollama e baixe um modelo pequeno — veja [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
          'Cableie o Ollama no Home Assistant — veja [o guia de integração do Ollama](/pt/smart-home/home-assistant-ollama-integration).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Um mini PC pode fazer tanto o Home Assistant quanto um LLM local?', a: 'Sim. Um mini PC com RAM suficiente e uma GPU integrada ou NPU capaz roda o Home Assistant e um LLM local pequeno juntos, e pode adicionar Whisper e Frigate. Essa abordagem de uma máquina é a forma mais simples de ter uma casa inteligente com IA local.' },
          { q: 'De quanta RAM eu preciso?', a: 'Suficiente para abrigar o seu modelo-alvo mais o Home Assistant e quaisquer complementos. Um modelo pequeno precisa de pouca RAM, enquanto rodar um modelo 7B confortavelmente ao lado do hub se beneficia de RAM ampla. Ajuste a RAM ao maior modelo que você planeja rodar.' },
          { q: 'Intel ou AMD para um mini PC de Home Assistant?', a: 'Ambos funcionam. Uma máquina da série N da Intel de baixo consumo é a mais barata para uso leve; um mini PC AMD Ryzen ou Intel Core i com uma GPU integrada forte lida melhor com um modelo 7B. Escolha com base no tamanho de modelo e na latência que você quer.' },
          { q: 'Qual o mini PC mais barato que roda um LLM local?', a: 'Um mini PC da série N da Intel de baixo consumo é o mais barato que pode rodar o Home Assistant mais um modelo muito pequeno, embora as respostas sejam mais lentas. Para um assistente de classe 7B mais ágil, suba para um mini PC Ryzen ou Core i com uma iGPU forte.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhor hardware para uma casa inteligente local](/pt/smart-home/best-hardware-for-local-smart-home) — Pi vs mini PC vs NAS vs servidor',
          '[Rodar sua casa inteligente em um LLM local](/pt/smart-home/local-llm-smart-home-complete-guide) — o que a máquina roda',
          '[Conectar o Ollama ao Home Assistant](/pt/smart-home/home-assistant-ollama-integration) — integre o modelo',
          '[Melhores mini PCs para LLMs locais](/pt/local-llms/best-mini-pcs-local-llm) — entre clusters: VRAM e detalhe de hardware',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Melhores Mini PCs para Home Assistant + IA Local (2026)',
      description: 'Guia de mini PC para Home Assistant + LLM local 2026: RAM e iGPU/NPU superam a CPU. Três classes comparadas: econômica, intermediária e com NPU.',
      url: 'https://www.promptquorum.com/pt/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: 'Mini PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: 'LLM local' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        { '@type': 'Question', name: 'Um mini PC pode fazer tanto o Home Assistant quanto um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Sim. Um mini PC com RAM suficiente e uma GPU integrada ou NPU capaz roda o Home Assistant e um LLM local pequeno juntos, e pode adicionar Whisper e Frigate.' } },
        { '@type': 'Question', name: 'De quanta RAM eu preciso?', acceptedAnswer: { '@type': 'Answer', text: 'Suficiente para abrigar o seu modelo-alvo mais o Home Assistant e complementos. Um modelo pequeno precisa de pouca RAM; rodar um modelo 7B confortavelmente se beneficia de RAM ampla.' } },
        { '@type': 'Question', name: 'Intel ou AMD para um mini PC de Home Assistant?', acceptedAnswer: { '@type': 'Answer', text: 'Ambos funcionam. Uma máquina da série N da Intel de baixo consumo é a mais barata para uso leve; um AMD Ryzen ou Intel Core i com uma iGPU forte lida melhor com um modelo 7B.' } },
        { '@type': 'Question', name: 'Qual o mini PC mais barato que roda um LLM local?', acceptedAnswer: { '@type': 'Answer', text: 'Um mini PC da série N da Intel de baixo consumo pode rodar o Home Assistant mais um modelo muito pequeno, embora mais lento. Para um assistente 7B mais ágil, suba para um Ryzen ou Core i com uma iGPU forte.' } },
      ],
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-06-04',
    dateModified: '2026-06-05',
    next_refresh_due: '2026-12-04',
    theme: 'Decision & Comparison',
    affiliateDisclosure: true,
    title: 'Home Assistant + 本地 AI 的最佳迷你 PC（2026）',
    seoTitle: '2026年最佳迷你 PC：Home Assistant 加本地大语言模型',
    intro:
      '在一台机器上运行 Home Assistant 加本地 LLM 的最佳迷你 PC，会优先考虑内存以及一块强力的集成 GPU 或 NPU。本购买指南讲解在单机上实现 HA 加 AI 所需的条件，比较主要的迷你 PC 类别，权衡预算与性能，并涵盖配置注意事项——并交叉链接到 local-llms 硬件指南以了解 VRAM 细节。',
    metaDescription:
      '2026年同時運行Home Assistant與本地大語言模型的最佳迷你PC選購指南：詳細評估內存容量與iGPU和NPU性能，深入對比N系列、Ryzen/Core i和NPU搭載機型這三個價位，並提供針對不同預算的完整選購建議和推薦清單。',
    twitterDescription:
      '在一台机器上运行 Home Assistant + 本地 LLM 的最佳迷你 PC：优先内存和一块强力 iGPU/NPU。类别比较，按预算的选择。',
    readTime: '阅读约8分钟',
    educationalLevel: 'Intermediate',
    audience: '为 Home Assistant 和本地 AI 选购迷你 PC 的人',
    primaryTerm: 'best mini PC Home Assistant local AI',
    targetKeywords: [
      '最佳迷你pc home assistant 本地ai',
      '迷你pc home assistant llm',
      'home assistant 本地ai 硬件',
      '迷你pc ollama home assistant',
      'home assistant 迷你pc 2026',
    ],
    leadAnswerBlock:
      '**Home Assistant 加本地 LLM 的最佳迷你 PC，拥有充足内存和一块强力的集成 GPU 或 NPU，从而在一台机器上运行中枢和一个小型模型。** 为了 AI 延迟，优先考虑内存和显示/NPU，而非纯粹的 CPU 主频。',
    quickAnswerTop: {
      zh: {
        question: 'Home Assistant 和本地 AI 用哪台迷你 PC 最好？',
        answer:
          '选一台内存足够（在 Home Assistant 旁边运行模型时越多越好）、并配备强力集成 GPU 或 NPU 以保持小型 LLM 灵敏的迷你 PC。一台低功耗的 Intel N 系列机器可运行 Home Assistant 和一个极小模型；一台配强力 iGPU 的 AMD Ryzen 或 Intel Core i 迷你 PC 能更好地处理 7B 模型。',
        bullets: [
          '优先内存和强力 iGPU/NPU，而非 CPU 主频',
          '低功耗 N 系列：HA + 一个非常小的模型',
          'Ryzen / Core i 系列 + 强力 iGPU：HA + 一个 7B 模型',
          '一台机器可同时运行 HA、Ollama、Whisper 和 Frigate',
          '关于 VRAM 细节，参见 local-llms 硬件指南',
        ],
        updatedDate: '2026-06',
      },
    },
    toc: [
      { label: '要点速览', anchor: 'tldr' },
      { label: 'HA + LLM 需要什么', anchor: 'what-you-need' },
      { label: '迷你 PC 类别', anchor: 'classes' },
      { label: '比较', anchor: 'comparison' },
      { label: '预算对性能', anchor: 'budget-performance' },
      { label: '配置注意事项', anchor: 'setup-notes' },
      { label: '常见问题', anchor: 'faq' },
    ],
    snippetBlocks: [
      { type: 'one-sentence', content: 'Home Assistant 加本地 LLM 的最佳迷你 PC，拥有充足内存和一块强力 iGPU 或 NPU，以在一台机器上运行中枢和一个小型模型。' },
      { type: 'plain-terms', content: '迷你 PC 是一台小而低功耗的电脑，可运行你的整个智能家居加一个本地 AI 模型。最重要的两点是内存（足以容纳模型和中枢）和一块强力的显示芯片或 NPU（以保持 AI 灵敏）。CPU 主频则次要。' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要点速览',
        isTldr: true,
        items: [
          '优先内存和一块强力的集成 GPU 或 NPU，而非纯粹的 CPU 主频',
          '一台低功耗的 Intel N 系列迷你 PC 可运行 Home Assistant 和一个非常小的模型',
          '一台配强力 iGPU 的 AMD Ryzen 或 Intel Core i 迷你 PC 能处理 7B 模型',
          '一台迷你 PC 可同时运行 Home Assistant、Ollama、Whisper 和 Frigate',
          '更多内存让你在中枢旁边运行更大的模型',
          '关于 VRAM 细节，参见跨集群的 local-llms 硬件指南',
        ],
      },
      whatYouNeed: {
        id: 'what-you-need',
        title: '在一台机器上实现 HA + LLM 需要什么',
        content:
          '**你需要足够的内存来容纳模型加 Home Assistant，以及一块强力的 iGPU 或 NPU 来保持模型灵敏。** 对这类工作负载，CPU 主频是次要的。',
        items: [
          '内存：为你想要的模型大小，外加中枢和加载项，留出足够余量。',
          '显示/NPU：一块强力的集成 GPU 或 NPU 可降低 LLM 和 Whisper 的延迟。',
          '存储：若你还运行 Frigate，要为录像留出空间——参见[本地 AI 安防摄像头](/zh/smart-home/local-ai-security-camera)。',
        ],
      },
      classes: {
        id: 'classes',
        title: '迷你 PC 类别',
        content:
          '**三类涵盖大多数需求：轻量 AI 用低功耗 N 系列，7B 模型用配强力 iGPU 的 Ryzen/Core i，高效的设备端 AI 用配 NPU 的迷你 PC。** 按你想要的模型大小选择。',
        items: [
          '**低功耗 Intel N 系列：** 高效又便宜；运行 Home Assistant 和一个非常小的模型，AI 上较慢。示例：Beelink EQ14 或 GMKtec G3 Plus（Intel N150）。',
          '**配强力 iGPU 的 AMD Ryzen / Intel Core i：** 更多内存和显示余量，能以可用延迟运行 7B 模型。示例：Beelink SER8（Ryzen 7 8845HS、Radeon 780M）或 Minisforum UM890 Pro。',
          '**配 NPU 的迷你 PC：** 配备神经处理单元的较新机器；本地 LLM 由强力的集成 GPU 承担，而非 NPU，NPU 在 Frigate 等视觉任务上有帮助。示例：GEEKOM A9 Max（Ryzen AI 9 HX 370）。',
        ],
        affiliateLinks: [
          { label: 'Beelink EQ14（Intel N150）', url: 'https://www.bee-link.com/products/beelink-eq14-n150', productName: 'Beelink EQ14', productCategory: 'Mini PC' },
          { label: 'GMKtec G3 Plus（Intel N150）', url: 'https://www.gmktec.com/products/nucbox-g3-plus-enhanced-performance-mini-pc-with-intel-n150-processor', productName: 'GMKtec G3 Plus', productCategory: 'Mini PC' },
          { label: 'Beelink SER8（Ryzen 7 8845HS）', url: 'https://www.bee-link.com/products/beelink-ser8-8845hs', productName: 'Beelink SER8', productCategory: 'Mini PC' },
          { label: 'Minisforum UM890 Pro', url: 'https://www.minisforum.com/products/minisforum-um890-pro', productName: 'Minisforum UM890 Pro', productCategory: 'Mini PC' },
          { label: 'GEEKOM A9 Max（Ryzen AI 9 HX 370）', url: 'https://www.geekompc.com/geekom-a9-max-mini-pc/', productName: 'GEEKOM A9 Max', productCategory: 'Mini PC' },
        ],
      },
      comparison: {
        id: 'comparison',
        title: '比较',
        content:
          '**把类别匹配到你的目标模型：极小模型用 N 系列，7B 模型用配强力 iGPU 的 Ryzen/Core i。** 价格为相对值。',
        columns: ['迷你 PC 类别', 'CPU', '内存建议', '能否运行本地 LLM', '相对价格'],
        rows: [
          { '迷你 PC 类别': '低功耗 N 系列', 'CPU': 'Intel N 系列', '内存建议': '中等', '能否运行本地 LLM': '仅非常小的模型，较慢', '相对价格': '低' },
          { '迷你 PC 类别': 'Ryzen / Core i（强力 iGPU）', 'CPU': 'AMD Ryzen / Intel Core i', '内存建议': '充裕', '能否运行本地 LLM': '以可用延迟最高约 7B', '相对价格': '中' },
          { '迷你 PC 类别': '配 NPU', 'CPU': '现代 CPU + NPU', '内存建议': '充裕', '能否运行本地 LLM': '高效的小/中型模型', '相对价格': '中–高' },
        ],
        items: [
          '关于 VRAM 和量化细节，参见跨集群的[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm)。',
        ],
      },
      budgetPerformance: {
        id: 'budget-performance',
        title: '预算对性能',
        content:
          '**购买能以可接受延迟运行你目标模型的最便宜机器——通常是为 7B 模型配强力 iGPU 的 Ryzen/Core i 迷你 PC。** 不要在你用不上的 CPU 上花太多。',
        items: [
          '预算型：为 HA 加一个极小模型选低功耗 N 系列机器。',
          '均衡型：为 7B 模型选配强力 iGPU 的 Ryzen/Core i 迷你 PC。',
          '关于更广泛的硬件决策（Pi 对迷你 PC 对 NAS），参见[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home)。',
        ],
      },
      setupNotes: {
        id: 'setup-notes',
        title: '配置注意事项',
        content:
          '**运行 Home Assistant OS 或容器，安装 Ollama，并确认推理使用了 iGPU/NPU。** 为可靠性，把机器有线连接到你的网络。',
        items: [
          '安装 Home Assistant——参见[入门](/zh/smart-home/home-assistant-getting-started)。',
          '安装 Ollama 并拉取一个小型模型——参见[如何安装 Ollama](/zh/local-llms/how-to-install-ollama)。',
          '把 Ollama 接入 Home Assistant——参见[Ollama 集成指南](/zh/smart-home/home-assistant-ollama-integration)。',
        ],
      },
      faqSection: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '一台迷你 PC 能同时做 Home Assistant 和本地 LLM 吗？', a: '能。一台内存足够、配强力集成 GPU 或 NPU 的迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM，并能加入 Whisper 和 Frigate。这种单机方式是获得本地 AI 智能家居最简单的途径。' },
          { q: '我需要多少内存？', a: '足以容纳你的目标模型，外加 Home Assistant 和任何加载项。小型模型只需不多的内存，而要在中枢旁边从容运行 7B 模型则受益于充裕内存。把内存匹配到你计划运行的最大模型。' },
          { q: 'Home Assistant 迷你 PC 选 Intel 还是 AMD？', a: '两者都行。低功耗的 Intel N 系列机器在轻量使用上最便宜；配强力集成 GPU 的 AMD Ryzen 或 Intel Core i 迷你 PC 能更好地处理 7B 模型。按你想要的模型大小和延迟来选。' },
          { q: '能运行本地 LLM 的最便宜迷你 PC 是哪台？', a: '低功耗的 Intel N 系列迷你 PC 是能运行 Home Assistant 加一个非常小模型的最便宜机型，尽管响应较慢。要想 7B 级助手更灵敏，就升级到配强力 iGPU 的 Ryzen 或 Core i 迷你 PC。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[本地智能家居的最佳硬件](/zh/smart-home/best-hardware-for-local-smart-home) — Pi 对迷你 PC 对 NAS 对服务器',
          '[用本地LLM运行你的智能家居](/zh/smart-home/local-llm-smart-home-complete-guide) — 这台机器运行什么',
          '[把 Ollama 连接到 Home Assistant](/zh/smart-home/home-assistant-ollama-integration) — 把模型接入',
          '[本地 LLM 的最佳迷你 PC](/zh/local-llms/best-mini-pcs-local-llm) — 跨集群：VRAM 与硬件细节',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Home Assistant + 本地 AI 的最佳迷你 PC（2026）',
      description: '2026年同時運行Home Assistant與本地大語言模型的最佳迷你PC選購指南：詳細評估內存容量與iGPU和NPU性能，深入對比N系列、Ryzen/Core i和NPU搭載機型這三個價位，並提供針對不同預算的完整選購建議和推薦清單。',
      url: 'https://www.promptquorum.com/zh/smart-home/best-mini-pc-home-assistant-local-ai',
      inLanguage: 'zh',
      author: { '@type': 'Organization', name: 'PromptQuorum' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      datePublished: '2026-06-04',
      dateModified: '2026-06-05',
      about: [{ '@type': 'Thing', name: '迷你 PC' }, { '@type': 'Thing', name: 'Home Assistant' }, { '@type': 'Thing', name: '本地 LLM' }],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-intro', '.key-takeaways'] },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'zh',
      mainEntity: [
        { '@type': 'Question', name: '一台迷你 PC 能同时做 Home Assistant 和本地 LLM 吗？', acceptedAnswer: { '@type': 'Answer', text: '能。一台内存足够、配强力集成 GPU 或 NPU 的迷你 PC 可同时运行 Home Assistant 和一个小型本地 LLM，并能加入 Whisper 和 Frigate。' } },
        { '@type': 'Question', name: '我需要多少内存？', acceptedAnswer: { '@type': 'Answer', text: '足以容纳你的目标模型，外加 Home Assistant 和加载项。小型模型只需不多内存；从容运行 7B 模型则受益于充裕内存。' } },
        { '@type': 'Question', name: 'Home Assistant 迷你 PC 选 Intel 还是 AMD？', acceptedAnswer: { '@type': 'Answer', text: '两者都行。低功耗 Intel N 系列在轻量使用上最便宜；配强力 iGPU 的 AMD Ryzen 或 Intel Core i 能更好地处理 7B 模型。' } },
        { '@type': 'Question', name: '能运行本地 LLM 的最便宜迷你 PC 是哪台？', acceptedAnswer: { '@type': 'Answer', text: '低功耗 Intel N 系列迷你 PC 可运行 Home Assistant 加一个非常小的模型，但较慢。要 7B 助手更灵敏，就升级到配强力 iGPU 的 Ryzen 或 Core i。' } },
      ],
    },
  },
}
