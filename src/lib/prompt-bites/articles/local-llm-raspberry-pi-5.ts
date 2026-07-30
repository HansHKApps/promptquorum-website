import type { Language } from '@/lib/blog/blogContent'
import type { PromptBiteArticle } from '../types'

export const article: Partial<Record<Language, PromptBiteArticle>> = {
  en: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-en.png',
    title: 'Can You Run a Local LLM on a Raspberry Pi 5?',
    seoTitle: 'Local LLM on Raspberry Pi 5: What Actually Works (2026)',
    metaDescription: 'Yes, but only tiny models: Raspberry Pi 5 (8GB) runs 1B-3B models at Q4 via llama.cpp, at roughly 2-5 tokens/sec on CPU. No GPU acceleration is available.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Hobbyists considering a Raspberry Pi 5 for a local LLM project',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Yes, but only for small models — a Raspberry Pi 5 (8 GB) runs 1B-3B models at Q4 quantization through llama.cpp, at roughly 2-5 tokens per second on its CPU.</strong> There is no GPU acceleration available: the Pi 5\'s VideoCore VII GPU is not supported by llama.cpp\'s inference backends, so everything runs on the quad-core CPU.',
    toc: [
      { label: 'The Honest Answer: Small Models Only, and Slowly', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 vs the Cheapest GPU Alternative', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related' },
    ],
    quickAnswerTop: {
      en: {
        question: 'Can you run a local LLM on a Raspberry Pi 5?',
        answer: 'Yes, but only tiny models — a Raspberry Pi 5 (8GB) runs 1B-3B models at Q4 via llama.cpp on its CPU, at roughly 2-5 tokens/sec. There is no GPU acceleration available.',
        bullets: [
          'Buy the 8 GB Raspberry Pi 5 — the 4 GB model leaves too little headroom even for a 1B model plus the OS.',
          'Realistic model range: Llama 3.2 1B/3B or Qwen3 0.6B at Q4 — anything larger is impractically slow.',
          'No GPU acceleration: llama.cpp does not support the Pi 5\'s VideoCore VII GPU — everything runs on the CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Yes, but only 1B-3B models at Q4 — anything larger is impractically slow on Pi 5 hardware',
          'Buy the 8 GB configuration — the 4 GB model leaves too little headroom for model plus OS',
          'Expect roughly 2-5 tokens/sec on CPU — no GPU acceleration path exists via llama.cpp',
          'A Pi 5 is a fun learning project, not a practical daily-driver local LLM machine',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'The Honest Answer: Small Models Only, and Slowly',
        content: [
          '<strong>A Raspberry Pi 5 can run a local LLM, but only within the 1B-3B parameter range at Q4 quantization — models like Llama 3.2 1B, Llama 3.2 3B, or Qwen3 0.6B — at roughly 2-5 tokens per second through llama.cpp.</strong> That speed is usable for casual experimentation but noticeably slower than typing speed for longer responses, and far behind any GPU-equipped machine.',
          'Buy the 8 GB configuration, not the 4 GB one. Even a 1B model plus Raspberry Pi OS overhead leaves little headroom on 4 GB, and you\'ll want the extra memory for a comfortable context window and any other software running alongside the model.',
          'There is no GPU acceleration path available: the Pi 5\'s integrated VideoCore VII GPU is not supported by llama.cpp\'s inference backends (no Vulkan or OpenCL path currently targets it for LLM inference), so every token is computed on the quad-core ARM CPU. Treat a Pi 5 local LLM setup as an educational project or a very lightweight assistant — not a replacement for any GPU-equipped hardware, even a budget one.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Check Raspberry Pi 5 8GB price on Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Check Raspberry Pi 5 Active Cooler price on Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 vs the Cheapest GPU Alternative',
        content: [
          'Even the least expensive GPU covered in the sub-$300 GPU guide runs 7B models at 15-20 tokens/sec — several times faster than a Pi 5\'s best case on models a fraction of the size. The Pi 5\'s appeal is its small footprint, low power draw, and novelty, not raw capability.',
          'If your goal is a genuinely useful always-on local LLM assistant rather than a hobby project, a used GPU or a mini PC is the more practical investment — see the sub-$300 GPU guide or the always-on Ollama server mini PC guide.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does the Raspberry Pi 5 need active cooling for LLM inference?',
            a: 'Sustained CPU-heavy workloads like LLM inference will push the Pi 5 warmer than casual use. An active cooler (fan) is a cheap, worthwhile addition if you plan to run inference for extended periods rather than brief tests.',
          },
          {
            q: 'Can I use an AI accelerator hat to speed up the Pi 5?',
            a: 'Some third-party AI accelerator add-on boards exist for the Raspberry Pi ecosystem, but llama.cpp/Ollama support for them is inconsistent and not a mainstream, well-documented path as of July 2026 — treat this as an experimental option, not a reliable upgrade.',
          },
          {
            q: 'Is a Raspberry Pi 5 good for running a voice assistant with a local LLM?',
            a: 'Only with a very small model and realistic latency expectations — a few seconds per response is typical at this model size and hardware. It can work as a slow, offline hobby assistant but won\'t feel snappy.',
          },
          {
            q: 'What is the minimum RAM for any local LLM on a Pi 5?',
            a: 'The 8 GB configuration is the practical minimum for a comfortable experience. The 4 GB configuration can technically load a 1B model but leaves very little headroom for anything else running on the device.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Related Reading',
        items: [
          '[Best Local LLM for 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — a genuinely practical low-budget GPU alternative',
          '[How Much RAM Does a 7B Model Need?](/prompt-bites/how-much-ram-for-7b-model) — why 7B is out of reach for a Pi 5',
          '[Best Mini PC for an Always-On Ollama Server](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — a more practical always-on alternative',
        ],
      },
    },
  },
  ar: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ar.png',
    title: 'هل يمكن تشغيل LLM محلي على جهاز Raspberry Pi 5؟',
    seoTitle: 'تشغيل LLM محلي على Raspberry Pi 5: ما يعمل فعليًا (2026)',
    metaDescription: 'نعم، لكن فقط نماذج صغيرة جدًا: يشغّل Raspberry Pi 5 (8GB) نماذج 1B-3B بدقة Q4 عبر llama.cpp، بحوالي 2-5 رمزًا في الثانية على CPU. لا تسريع GPU متاح.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'الهواة الذين يفكرون في Raspberry Pi 5 لمشروع LLM محلي',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>نعم، لكن فقط للنماذج الصغيرة — يشغّل جهاز Raspberry Pi 5 (8 GB) نماذج 1B-3B بتكميم Q4 عبر llama.cpp، بحوالي 2-5 رموز في الثانية على معالج CPU الخاص به.</strong> لا يتوفر أي تسريع GPU: وحدة رسومات VideoCore VII في Pi 5 غير مدعومة من واجهات استدلال llama.cpp، لذا يعمل كل شيء على معالج CPU رباعي النوى.',
    toc: [
      { label: 'الإجابة الصريحة: نماذج صغيرة فقط، وببطء', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 مقابل أرخص بديل بطاقة GPU', anchor: '#comparison' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related' },
    ],
    quickAnswerTop: {
      ar: {
        question: 'هل يمكن تشغيل LLM محلي على جهاز Raspberry Pi 5؟',
        answer: 'نعم، لكن فقط نماذج صغيرة جدًا — يشغّل جهاز Raspberry Pi 5 (8GB) نماذج 1B-3B بدقة Q4 عبر llama.cpp على معالج CPU الخاص به، بحوالي 2-5 رموز/ثانية. لا يتوفر أي تسريع GPU.',
        bullets: [
          'اشترِ جهاز Raspberry Pi 5 بذاكرة 8 GB — يترك طراز 4 GB هامشًا ضئيلًا جدًا حتى لنموذج 1B بالإضافة إلى نظام التشغيل.',
          'نطاق النماذج الواقعي: Llama 3.2 1B/3B أو Qwen3 0.6B بدقة Q4 — أي شيء أكبر بطيء بشكل غير عملي.',
          'لا تسريع GPU: لا يدعم llama.cpp وحدة رسومات VideoCore VII في Pi 5 — كل شيء يعمل على CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'نعم، لكن فقط نماذج 1B-3B بدقة Q4 — أي شيء أكبر بطيء بشكل غير عملي على عتاد Pi 5',
          'اشترِ التكوين بذاكرة 8 GB — يترك طراز 4 GB هامشًا ضئيلًا جدًا للنموذج بالإضافة إلى نظام التشغيل',
          'توقع حوالي 2-5 رموز/ثانية على CPU — لا يوجد مسار تسريع GPU عبر llama.cpp',
          'جهاز Pi 5 مشروع تعليمي ممتع، وليس آلة عملية لتشغيل LLM محلي يوميًا',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'الإجابة الصريحة: نماذج صغيرة فقط، وببطء',
        content: [
          '<strong>يمكن لجهاز Raspberry Pi 5 تشغيل LLM محلي، لكن فقط ضمن نطاق معاملات 1B-3B بتكميم Q4 — نماذج مثل Llama 3.2 1B وLlama 3.2 3B وQwen3 0.6B — بحوالي 2-5 رموز في الثانية عبر llama.cpp.</strong> هذه السرعة قابلة للاستخدام للتجربة العرضية لكنها أبطأ بشكل ملحوظ من سرعة الكتابة للاستجابات الأطول، وأبطأ بكثير من أي جهاز مزوّد بـ GPU.',
          'اشترِ التكوين بذاكرة 8 GB، وليس طراز 4 GB. حتى نموذج 1B بالإضافة إلى عبء نظام Raspberry Pi OS يترك هامشًا ضئيلًا على 4 GB، وستحتاج الذاكرة الإضافية لنافذة سياق مريحة وأي برامج أخرى تعمل جنبًا إلى جنب مع النموذج.',
          'لا يوجد مسار تسريع GPU متاح: وحدة الرسومات VideoCore VII المدمجة في Pi 5 غير مدعومة من واجهات استدلال llama.cpp (لا يستهدف أي مسار Vulkan أو OpenCL حاليًا استدلال LLM عليها)، لذا يُحسَب كل رمز على معالج CPU رباعي النوى من نوع ARM. عامل إعداد LLM محلي على Pi 5 كمشروع تعليمي أو مساعد خفيف جدًا — وليس بديلًا لأي عتاد مزوّد بـ GPU، حتى لو كان بميزانية محدودة.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'تحقق من سعر Raspberry Pi 5 8GB على أمازون',
          },
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'تحقق من سعر مبرّد Raspberry Pi 5 النشط على أمازون',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 مقابل أرخص بديل بطاقة GPU',
        content: [
          'حتى أقل بطاقة GPU سعرًا المشمولة في دليل ما دون 300 دولار تشغّل نماذج 7B بمعدل 15-20 رمزًا في الثانية — أسرع بعدة مرات من أفضل حالة لـ Pi 5 على نماذج بجزء بسيط من الحجم. جاذبية Pi 5 هي بصمته الصغيرة، واستهلاكه المنخفض للطاقة، وجدّته، وليس القدرة الخام.',
          'إذا كان هدفك مساعد LLM محلي دائم التشغيل ومفيد فعليًا بدلًا من مشروع هواية، فإن بطاقة GPU مستعملة أو جهاز mini PC استثمار أكثر عملية — راجع دليل GPU دون 300 دولار أو دليل خادم Ollama دائم التشغيل من نوع mini PC.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يحتاج Raspberry Pi 5 إلى تبريد نشط لاستدلال LLM؟',
            a: 'ستدفع أحمال العمل المستمرة كثيفة CPU مثل استدلال LLM جهاز Pi 5 ليصبح أدفأ من الاستخدام العادي. المبرّد النشط (مروحة) إضافة رخيصة ومجدية إذا كنت تخطط لتشغيل الاستدلال لفترات ممتدة بدلًا من اختبارات قصيرة.',
          },
          {
            q: 'هل يمكنني استخدام لوحة مسرّع ذكاء اصطناعي لتسريع Pi 5؟',
            a: 'توجد بعض لوحات مسرّع الذكاء الاصطناعي الإضافية من جهات خارجية لمنظومة Raspberry Pi، لكن دعم llama.cpp/Ollama لها غير متسق وليس مسارًا رئيسيًا موثقًا جيدًا اعتبارًا من يوليو 2026 — عاملها كخيار تجريبي، وليس ترقية موثوقة.',
          },
          {
            q: 'هل Raspberry Pi 5 جيد لتشغيل مساعد صوتي مع LLM محلي؟',
            a: 'فقط بنموذج صغير جدًا وتوقعات كمون واقعية — بضع ثوانٍ لكل استجابة أمر نموذجي بهذا الحجم من العتاد. يمكن أن يعمل كمساعد هواية بطيء غير متصل بالإنترنت لكنه لن يشعر بالسرعة.',
          },
          {
            q: 'ما الحد الأدنى من RAM لأي LLM محلي على Pi 5؟',
            a: 'التكوين بذاكرة 8 GB هو الحد الأدنى العملي لتجربة مريحة. يمكن لتكوين 4 GB تحميل نموذج 1B تقنيًا لكنه يترك هامشًا ضئيلًا جدًا لأي شيء آخر يعمل على الجهاز.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'قراءات ذات صلة',
        items: [
          '[أفضل LLM محلي لذاكرة VRAM سعة 6 GB](/prompt-bites/best-local-llm-6gb-vram) — بديل GPU بميزانية منخفضة عملي فعليًا',
          '[كم RAM يحتاجه نموذج 7B؟](/prompt-bites/how-much-ram-for-7b-model) — لماذا 7B خارج متناول Pi 5',
          '[أفضل جهاز mini PC لخادم Ollama دائم التشغيل](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — بديل دائم التشغيل أكثر عملية',
        ],
      },
    },
  },
  de: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-de.png',
    title: 'Kann man ein lokales LLM auf einem Raspberry Pi 5 betreiben?',
    seoTitle: 'Lokales LLM auf Raspberry Pi 5: Was wirklich funktioniert (2026)',
    metaDescription: 'Ja, aber nur winzige Modelle: Der Raspberry Pi 5 (8GB) läuft 1B-3B-Modelle bei Q4 via llama.cpp mit 2-5 Tokens/Sek. auf der CPU – ohne GPU-Beschleunigung.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Hobbyisten, die einen Raspberry Pi 5 für ein lokales LLM-Projekt in Betracht ziehen',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Ja, aber nur für kleine Modelle — ein Raspberry Pi 5 (8 GB) läuft 1B-3B-Modelle bei Q4-Quantisierung über llama.cpp, mit etwa 2-5 Tokens pro Sekunde auf seiner CPU.</strong> Es gibt keine verfügbare GPU-Beschleunigung: Die VideoCore-VII-GPU des Pi 5 wird von den Inferenz-Backends von llama.cpp nicht unterstützt, sodass alles auf dem Quad-Core-CPU läuft.',
    toc: [
      { label: 'Die ehrliche Antwort: nur kleine Modelle, und langsam', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 vs. die günstigste GPU-Alternative', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Artikel', anchor: '#related' },
    ],
    quickAnswerTop: {
      de: {
        question: 'Kann man ein lokales LLM auf einem Raspberry Pi 5 betreiben?',
        answer: 'Ja, aber nur winzige Modelle — ein Raspberry Pi 5 (8GB) läuft 1B-3B-Modelle bei Q4 via llama.cpp auf seiner CPU, mit etwa 2-5 Tokens/Sek. Keine GPU-Beschleunigung verfügbar.',
        bullets: [
          'Kaufen Sie das 8-GB-Raspberry-Pi-5-Modell — das 4-GB-Modell lässt selbst für ein 1B-Modell plus Betriebssystem zu wenig Reserve.',
          'Realistischer Modellbereich: Llama 3.2 1B/3B oder Qwen3 0,6B bei Q4 — alles Größere ist unpraktisch langsam.',
          'Keine GPU-Beschleunigung: llama.cpp unterstützt die VideoCore-VII-GPU des Pi 5 nicht — alles läuft auf der CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Ja, aber nur 1B-3B-Modelle bei Q4 — alles Größere ist auf Pi-5-Hardware unpraktisch langsam',
          'Kaufen Sie die 8-GB-Konfiguration — das 4-GB-Modell lässt zu wenig Reserve für Modell plus Betriebssystem',
          'Rechnen Sie mit etwa 2-5 Tokens/Sek. auf der CPU — kein GPU-Beschleunigungspfad existiert via llama.cpp',
          'Ein Pi 5 ist ein unterhaltsames Lernprojekt, keine praktische Alltags-LLM-Maschine',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'Die ehrliche Antwort: nur kleine Modelle, und langsam',
        content: [
          '<strong>Ein Raspberry Pi 5 kann ein lokales LLM betreiben, aber nur im Bereich 1B-3B Parameter bei Q4-Quantisierung — Modelle wie Llama 3.2 1B, Llama 3.2 3B oder Qwen3 0,6B — mit etwa 2-5 Tokens pro Sekunde über llama.cpp.</strong> Diese Geschwindigkeit ist für lockeres Experimentieren nutzbar, aber merklich langsamer als Tippgeschwindigkeit bei längeren Antworten und weit hinter jeder GPU-ausgestatteten Maschine.',
          'Kaufen Sie die 8-GB-Konfiguration, nicht die 4-GB-Variante. Selbst ein 1B-Modell plus Raspberry-Pi-OS-Overhead lässt auf 4 GB wenig Reserve, und Sie werden den zusätzlichen Speicher für ein komfortables Kontextfenster und andere parallel laufende Software wollen.',
          'Es gibt keinen verfügbaren GPU-Beschleunigungspfad: Die integrierte VideoCore-VII-GPU des Pi 5 wird von den Inferenz-Backends von llama.cpp nicht unterstützt (derzeit zielt kein Vulkan- oder OpenCL-Pfad für LLM-Inferenz darauf ab), sodass jedes Token auf dem Quad-Core-ARM-CPU berechnet wird. Betrachten Sie ein Pi-5-Setup für lokale LLMs als Lernprojekt oder sehr leichten Assistenten — nicht als Ersatz für GPU-ausgestattete Hardware, selbst eine günstige.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Raspberry Pi 5 8GB Preis bei Amazon prüfen',
          },
          {
            url: 'https://www.amazon.de/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Raspberry Pi 5 Active Cooler Preis bei Amazon prüfen',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 vs. die günstigste GPU-Alternative',
        content: [
          'Selbst die günstigste im Sub-300-$-GPU-Guide behandelte GPU läuft 7B-Modelle mit 15-20 Tokens/Sek. — mehrfach schneller als das beste Ergebnis eines Pi 5 bei Modellen einem Bruchteil der Größe. Der Reiz des Pi 5 liegt in seiner kleinen Grundfläche, dem niedrigen Stromverbrauch und der Neuheit, nicht in roher Leistungsfähigkeit.',
          'Ist Ihr Ziel ein wirklich nützlicher, dauerhaft laufender lokaler LLM-Assistent statt eines Hobbyprojekts, ist eine gebrauchte GPU oder ein Mini-PC die praktischere Investition — siehe den Sub-300-$-GPU-Guide oder den Guide zum dauerhaft laufenden Ollama-Server-Mini-PC.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Braucht der Raspberry Pi 5 aktive Kühlung für LLM-Inferenz?',
            a: 'Anhaltend CPU-lastige Workloads wie LLM-Inferenz treiben den Pi 5 wärmer als bei lockerer Nutzung. Ein aktiver Kühler (Lüfter) ist eine günstige, lohnende Ergänzung, wenn Sie Inferenz über längere Zeit statt nur kurze Tests planen.',
          },
          {
            q: 'Kann ich einen KI-Beschleuniger-Hat zur Beschleunigung des Pi 5 nutzen?',
            a: 'Es gibt einige KI-Beschleuniger-Add-on-Boards von Drittanbietern für das Raspberry-Pi-Ökosystem, aber die llama.cpp/Ollama-Unterstützung dafür ist Stand Juli 2026 uneinheitlich und kein etablierter, gut dokumentierter Weg — behandeln Sie das als experimentelle Option, nicht als verlässliches Upgrade.',
          },
          {
            q: 'Ist ein Raspberry Pi 5 gut für einen Sprachassistenten mit lokalem LLM?',
            a: 'Nur mit einem sehr kleinen Modell und realistischen Latenzerwartungen — einige Sekunden pro Antwort sind bei dieser Modellgröße und Hardware typisch. Es kann als langsamer, offline-fähiger Hobbyassistent funktionieren, fühlt sich aber nicht schnell an.',
          },
          {
            q: 'Was ist das minimale RAM für ein lokales LLM auf einem Pi 5?',
            a: 'Die 8-GB-Konfiguration ist das praktische Minimum für ein komfortables Erlebnis. Die 4-GB-Konfiguration kann technisch ein 1B-Modell laden, lässt aber sehr wenig Reserve für alles andere, was auf dem Gerät läuft.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Weiterführende Artikel',
        items: [
          '[Bestes lokales LLM für 6 GB VRAM](/prompt-bites/best-local-llm-6gb-vram) — eine wirklich praktische Low-Budget-GPU-Alternative',
          '[Wie viel RAM braucht ein 7B-Modell?](/prompt-bites/how-much-ram-for-7b-model) — warum 7B für einen Pi 5 außer Reichweite ist',
          '[Bester Mini-PC für einen dauerhaft laufenden Ollama-Server](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — eine praktischere, dauerhaft laufende Alternative',
        ],
      },
    },
  },
  es: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-es.png',
    title: '¿Puedes Ejecutar un LLM Local en una Raspberry Pi 5?',
    seoTitle: 'LLM Local en Raspberry Pi 5: Qué Funciona Realmente (2026)',
    metaDescription: 'Sí, pero solo modelos diminutos: la Raspberry Pi 5 (8GB) ejecuta modelos de 1B-3B en Q4 vía llama.cpp a 2-5 tokens/seg en CPU, sin aceleración por GPU.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Aficionados que consideran una Raspberry Pi 5 para un proyecto de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sí, pero solo para modelos pequeños — una Raspberry Pi 5 (8 GB) ejecuta modelos de 1B-3B con cuantización Q4 a través de llama.cpp, a aproximadamente 2-5 tokens por segundo en su CPU.</strong> No hay aceleración por GPU disponible: la GPU VideoCore VII de la Pi 5 no está soportada por los backends de inferencia de llama.cpp, por lo que todo corre en la CPU de cuatro núcleos.',
    toc: [
      { label: 'La Respuesta Honesta: Solo Modelos Pequeños, y Lento', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 vs la Alternativa de GPU Más Económica', anchor: '#comparison' },
      { label: 'Preguntas Frecuentes', anchor: '#faq' },
      { label: 'Lecturas Relacionadas', anchor: '#related' },
    ],
    quickAnswerTop: {
      es: {
        question: '¿Puedes ejecutar un LLM local en una Raspberry Pi 5?',
        answer: 'Sí, pero solo modelos diminutos — una Raspberry Pi 5 (8GB) ejecuta modelos de 1B-3B vía llama.cpp en su CPU, a aproximadamente 2-5 tokens/seg. No hay aceleración por GPU disponible.',
        bullets: [
          'Compra la Raspberry Pi 5 de 8 GB — el modelo de 4 GB deja muy poco margen incluso para un modelo de 1B más el sistema operativo.',
          'Rango de modelo realista: Llama 3.2 1B/3B o Qwen3 0.6B en Q4 — cualquier cosa mayor es impracticablemente lenta.',
          'Sin aceleración por GPU: llama.cpp no soporta la GPU VideoCore VII de la Pi 5 — todo corre en la CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Sí, pero solo modelos de 1B-3B en Q4 — cualquier cosa mayor es impracticablemente lenta en el hardware de la Pi 5',
          'Compra la configuración de 8 GB — la de 4 GB deja muy poco margen para el modelo más el sistema operativo',
          'Espera aproximadamente 2-5 tokens/seg en CPU — no existe ruta de aceleración por GPU vía llama.cpp',
          'Una Pi 5 es un proyecto de aprendizaje divertido, no una máquina práctica de uso diario para LLM local',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'La Respuesta Honesta: Solo Modelos Pequeños, y Lento',
        content: [
          '<strong>Una Raspberry Pi 5 puede ejecutar un LLM local, pero solo dentro del rango de parámetros de 1B-3B con cuantización Q4 — modelos como Llama 3.2 1B, Llama 3.2 3B o Qwen3 0.6B — a aproximadamente 2-5 tokens por segundo a través de llama.cpp.</strong> Esa velocidad es usable para experimentación casual pero notablemente más lenta que la velocidad de escritura para respuestas más largas, y muy por detrás de cualquier máquina equipada con GPU.',
          'Compra la configuración de 8 GB, no la de 4 GB. Incluso un modelo de 1B más la sobrecarga de Raspberry Pi OS deja poco margen en 4 GB, y querrás la memoria extra para una ventana de contexto cómoda y cualquier otro software que corra junto al modelo.',
          'No existe ninguna ruta de aceleración por GPU disponible: la GPU integrada VideoCore VII de la Pi 5 no está soportada por los backends de inferencia de llama.cpp (ninguna ruta Vulkan u OpenCL actualmente la tiene como objetivo para inferencia de LLM), por lo que cada token se calcula en la CPU ARM de cuatro núcleos. Trata una configuración de LLM local en Pi 5 como un proyecto educativo o un asistente muy ligero — no como un reemplazo de cualquier hardware equipado con GPU, incluso uno económico.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Consulta el precio de la Raspberry Pi 5 8GB en Amazon',
          },
          {
            url: 'https://www.amazon.es/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Consulta el precio del disipador activo para Raspberry Pi 5 en Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 vs la Alternativa de GPU Más Económica',
        content: [
          'Incluso la GPU menos costosa cubierta en la guía de GPU por debajo de $300 ejecuta modelos de 7B a 15-20 tokens/seg — varias veces más rápido que el mejor caso de una Pi 5 en modelos una fracción de ese tamaño. El atractivo de la Pi 5 es su tamaño reducido, bajo consumo eléctrico y novedad, no su capacidad bruta.',
          'Si tu objetivo es un asistente de LLM local genuinamente útil y siempre encendido, en lugar de un proyecto de aficionado, una GPU usada o una mini PC es la inversión más práctica — consulta la guía de GPU por debajo de $300 o la guía de mini PC para servidor Ollama siempre encendido.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas Frecuentes',
        faqs: [
          {
            q: '¿Necesita la Raspberry Pi 5 refrigeración activa para inferencia de LLM?',
            a: 'Las cargas de trabajo sostenidas e intensivas en CPU como la inferencia de LLM harán que la Pi 5 se caliente más que en uso casual. Un disipador activo (ventilador) es una adición barata y que vale la pena si planeas ejecutar inferencia durante períodos prolongados en lugar de pruebas breves.',
          },
          {
            q: '¿Puedo usar un HAT acelerador de IA para acelerar la Pi 5?',
            a: 'Existen algunas placas de expansión aceleradoras de IA de terceros para el ecosistema Raspberry Pi, pero el soporte de llama.cpp/Ollama para ellas es inconsistente y no es un camino convencional y bien documentado a julio de 2026 — trata esto como una opción experimental, no como una mejora confiable.',
          },
          {
            q: '¿Es buena una Raspberry Pi 5 para ejecutar un asistente de voz con un LLM local?',
            a: 'Solo con un modelo muy pequeño y expectativas de latencia realistas — unos pocos segundos por respuesta es típico en este tamaño de modelo y hardware. Puede funcionar como un asistente de aficionado lento y sin conexión, pero no se sentirá ágil.',
          },
          {
            q: '¿Cuál es la RAM mínima para cualquier LLM local en una Pi 5?',
            a: 'La configuración de 8 GB es el mínimo práctico para una experiencia cómoda. La configuración de 4 GB puede técnicamente cargar un modelo de 1B pero deja muy poco margen para cualquier otra cosa que corra en el dispositivo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lecturas Relacionadas',
        items: [
          '[Mejor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — una alternativa de GPU económica genuinamente práctica',
          '[¿Cuánta RAM Necesita un Modelo de 7B?](/prompt-bites/how-much-ram-for-7b-model) — por qué 7B está fuera del alcance de una Pi 5',
          '[Mejor Mini PC para un Servidor Ollama Siempre Encendido](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — una alternativa siempre encendida más práctica',
        ],
      },
    },
  },
  fr: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-fr.png',
    title: 'Peut-on exécuter un LLM local sur un Raspberry Pi 5 ?',
    seoTitle: 'LLM local sur Raspberry Pi 5 : ce qui fonctionne (2026)',
    metaDescription: 'Oui, mais seulement des modèles 1B-3B : le Raspberry Pi 5 (8 Go) tourne via llama.cpp à environ 2-5 tokens/sec sur CPU, sans accélération GPU disponible.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Passionnés envisageant un Raspberry Pi 5 pour un projet de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Oui, mais uniquement pour de petits modèles — un Raspberry Pi 5 (8 Go) exécute des modèles 1B-3B en quantification Q4 via llama.cpp, à environ 2 à 5 tokens par seconde sur son CPU.</strong> Aucune accélération GPU n\'est disponible : le GPU VideoCore VII du Pi 5 n\'est pas pris en charge par les moteurs d\'inférence de llama.cpp, donc tout s\'exécute sur le CPU quadricœur.',
    toc: [
      { label: 'La réponse honnête : uniquement de petits modèles, et lentement', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 face à l\'alternative GPU la moins chère', anchor: '#comparison' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related' },
    ],
    quickAnswerTop: {
      fr: {
        question: 'Peut-on exécuter un LLM local sur un Raspberry Pi 5 ?',
        answer: 'Oui, mais uniquement de petits modèles — un Raspberry Pi 5 (8 Go) exécute des modèles 1B-3B en Q4 via llama.cpp sur son CPU, à environ 2-5 tokens/sec. Aucune accélération GPU n\'est disponible.',
        bullets: [
          'Achetez le Raspberry Pi 5 en 8 Go — le modèle 4 Go laisse trop peu de marge, même pour un modèle 1B et le système d\'exploitation.',
          'Plage de modèles réaliste : Llama 3.2 1B/3B ou Qwen3 0.6B en Q4 — tout modèle plus grand est trop lent pour être utilisable.',
          'Pas d\'accélération GPU : llama.cpp ne prend pas en charge le GPU VideoCore VII du Pi 5 — tout s\'exécute sur le CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Oui, mais seulement des modèles 1B-3B en Q4 — tout modèle plus grand est trop lent sur le matériel du Pi 5',
          'Achetez la configuration 8 Go — le modèle 4 Go laisse trop peu de marge pour le modèle et le système d\'exploitation',
          'Comptez environ 2-5 tokens/sec sur CPU — aucune accélération GPU n\'existe via llama.cpp',
          'Un Pi 5 est un projet d\'apprentissage amusant, pas une machine de LLM local pratique au quotidien',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'La réponse honnête : uniquement de petits modèles, et lentement',
        content: [
          '<strong>Un Raspberry Pi 5 peut exécuter un LLM local, mais uniquement dans la plage de paramètres 1B-3B en quantification Q4 — des modèles comme Llama 3.2 1B, Llama 3.2 3B ou Qwen3 0.6B — à environ 2 à 5 tokens par seconde via llama.cpp.</strong> Cette vitesse est utilisable pour de l\'expérimentation occasionnelle, mais nettement plus lente que la vitesse de frappe pour des réponses longues, et bien en deçà de toute machine équipée d\'un GPU.',
          'Achetez la configuration 8 Go, pas la version 4 Go. Même un modèle 1B avec la surcharge de Raspberry Pi OS laisse peu de marge sur 4 Go, et vous voudrez la mémoire supplémentaire pour une fenêtre de contexte confortable et tout autre logiciel s\'exécutant en parallèle du modèle.',
          'Aucune accélération GPU n\'est disponible : le GPU VideoCore VII intégré du Pi 5 n\'est pas pris en charge par les moteurs d\'inférence de llama.cpp (aucun chemin Vulkan ou OpenCL ne le cible actuellement pour l\'inférence LLM), donc chaque token est calculé sur le CPU ARM quadricœur. Considérez une installation de LLM local sur Pi 5 comme un projet éducatif ou un assistant très léger — pas un remplacement pour du matériel équipé d\'un GPU, même d\'entrée de gamme.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Vérifier le prix du Raspberry Pi 5 8 Go sur Amazon',
          },
          {
            url: 'https://www.amazon.fr/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Vérifier le prix du ventilateur actif Raspberry Pi 5 sur Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 face à l\'alternative GPU la moins chère',
        content: [
          'Même le GPU le moins cher couvert dans le guide des GPU à moins de 300 $ exécute des modèles 7B à 15-20 tokens/sec — plusieurs fois plus rapide que le meilleur cas d\'un Pi 5 sur des modèles bien plus petits. L\'attrait du Pi 5 réside dans son faible encombrement, sa faible consommation et sa nouveauté, pas dans sa capacité brute.',
          'Si votre objectif est un assistant LLM local réellement utile et disponible en permanence plutôt qu\'un projet de loisir, un GPU d\'occasion ou un mini PC est l\'investissement le plus pratique — consultez le guide des GPU à moins de 300 $ ou le guide du mini PC pour serveur Ollama permanent.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Le Raspberry Pi 5 a-t-il besoin d\'un refroidissement actif pour l\'inférence LLM ?',
            a: 'Des charges de travail intensives en CPU comme l\'inférence LLM feront chauffer le Pi 5 davantage qu\'un usage occasionnel. Un ventilateur actif est un ajout peu coûteux et judicieux si vous prévoyez d\'exécuter l\'inférence pendant de longues périodes plutôt que de brefs tests.',
          },
          {
            q: 'Puis-je utiliser un accélérateur IA pour accélérer le Pi 5 ?',
            a: 'Certaines cartes d\'extension accélératrices IA tierces existent pour l\'écosystème Raspberry Pi, mais le support de llama.cpp/Ollama pour celles-ci est incohérent et ne constitue pas une solution grand public bien documentée en juillet 2026 — considérez-le comme une option expérimentale, pas comme une mise à niveau fiable.',
          },
          {
            q: 'Un Raspberry Pi 5 convient-il pour un assistant vocal avec un LLM local ?',
            a: 'Seulement avec un très petit modèle et des attentes de latence réalistes — quelques secondes par réponse sont typiques à cette taille de modèle et ce matériel. Il peut fonctionner comme un assistant de loisir lent et hors ligne, mais ne sera pas réactif.',
          },
          {
            q: 'Quelle est la RAM minimale pour un LLM local sur un Pi 5 ?',
            a: 'La configuration 8 Go est le minimum pratique pour une expérience confortable. La configuration 4 Go peut techniquement charger un modèle 1B mais laisse très peu de marge pour tout autre élément fonctionnant sur l\'appareil.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Lectures complémentaires',
        items: [
          '[Meilleur LLM local pour 6 Go de VRAM](/prompt-bites/best-local-llm-6gb-vram) — une alternative GPU réellement pratique à petit budget',
          '[De combien de RAM un modèle 7B a-t-il besoin ?](/prompt-bites/how-much-ram-for-7b-model) — pourquoi le 7B est hors de portée pour un Pi 5',
          '[Meilleur mini PC pour un serveur Ollama permanent](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — une alternative permanente plus pratique',
        ],
      },
    },
  },
  ja: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ja.png',
    title: 'Raspberry Pi 5でローカルLLMを動かせますか?',
    seoTitle: 'Raspberry Pi 5でのローカルLLM: 実際に動くもの(2026年)',
    metaDescription: '動きますが小さいモデルのみです: Raspberry Pi 5(8GB)はllama.cpp経由でQ4の1B-3Bモデルを、CPUでおよそ2-5トークン毎秒で動かせます。GPUアクセラレーションはありません。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Raspberry Pi 5をローカルLLMプロジェクト用に検討しているホビイスト',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>はい、ただし小さいモデルのみです — Raspberry Pi 5(8GB)は、llama.cpp経由でQ4量子化の1B-3BモデルをそのCPUでおよそ2-5トークン毎秒で動かします。</strong>GPUアクセラレーションは利用できません。Pi 5のVideoCore VII GPUはllama.cppの推論バックエンドでサポートされていないため、すべてクアッドコアCPUで実行されます。',
    toc: [
      { label: '率直な答え: 小さいモデルのみ、しかも遅い', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 vs 最も安いGPU代替案', anchor: '#comparison' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '関連記事', anchor: '#related' },
    ],
    quickAnswerTop: {
      ja: {
        question: 'Raspberry Pi 5でローカルLLMを動かせますか?',
        answer: 'はい、ただし非常に小さいモデルのみです — Raspberry Pi 5(8GB)はそのCPUでllama.cpp経由でQ4の1B-3Bモデルを、およそ2-5トークン毎秒で動かします。GPUアクセラレーションは利用できません。',
        bullets: [
          '8GBのRaspberry Pi 5を購入すること — 4GBモデルでは1Bモデル+OSの余裕すら不足します。',
          '現実的なモデル範囲: Q4のLlama 3.2 1B/3BかQwen3 0.6B — それより大きいものは実用にならないほど遅いです。',
          'GPUアクセラレーションなし: llama.cppはPi 5のVideoCore VII GPUをサポートしていません — すべてCPUで動作します。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'はい、ただしQ4の1B-3Bモデルのみ — それより大きいものはPi 5のハードウェアでは実用にならないほど遅い',
          '8GB構成を購入すること — 4GBモデルはモデル+OS用の余裕が不足する',
          'CPUでおよそ2-5トークン毎秒を見込むこと — llama.cpp経由のGPUアクセラレーション経路は存在しない',
          'Pi 5は楽しい学習プロジェクトであって、実用的な日常使いのローカルLLMマシンではない',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '率直な答え: 小さいモデルのみ、しかも遅い',
        content: [
          '<strong>Raspberry Pi 5はローカルLLMを動かせますが、Q4量子化の1B-3Bパラメータ範囲内のみです — Llama 3.2 1B、Llama 3.2 3B、Qwen3 0.6Bなどのモデルを、llama.cpp経由でおよそ2-5トークン毎秒で動かします。</strong>その速度はカジュアルな実験には使えますが、長い応答ではタイピング速度より明らかに遅く、GPU搭載マシンにははるかに及びません。',
          '4GB構成ではなく8GB構成を購入してください。1BモデルとRaspberry Pi OSのオーバーヘッドだけでも4GBでは余裕がほとんど残らず、快適なコンテキストウィンドウとモデルと並行して動く他のソフトウェアのために追加のメモリが欲しくなります。',
          '利用可能なGPUアクセラレーション経路はありません: Pi 5の統合VideoCore VII GPUはllama.cppの推論バックエンドでサポートされておらず(現在LLM推論向けにそれをターゲットとするVulkanやOpenCLの経路はありません)、すべてのトークンがクアッドコアARM CPUで計算されます。Pi 5のローカルLLMセットアップは教育プロジェクトか非常に軽量なアシスタントとして扱ってください — 予算重視のものを含め、どんなGPU搭載ハードウェアの代替にもなりません。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'AmazonでRaspberry Pi 5 8GBの価格を確認',
          },
          {
            url: 'https://www.amazon.co.jp/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'AmazonでRaspberry Pi 5アクティブクーラーの価格を確認',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 vs 最も安いGPU代替案',
        content: [
          '300ドル以下GPUガイドで扱った最も安価なGPUでさえ、7Bモデルを15-20トークン毎秒で動かします — Pi 5の最良ケースの数倍の速度で、しかもモデルサイズはほんの一部です。Pi 5の魅力は小さいフットプリント、低消費電力、目新しさであって、生の性能ではありません。',
          '趣味のプロジェクトではなく本当に使える常時稼働のローカルLLMアシスタントが目標なら、中古GPUかミニPCの方が実用的な投資です — 300ドル以下GPUガイドか常時稼働Ollamaサーバー向けミニPCガイドを参照してください。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Raspberry Pi 5はLLM推論にアクティブ冷却が必要ですか?',
            a: 'LLM推論のような持続的なCPU負荷の高いワークロードは、カジュアルな使用よりPi 5を暖かくします。長時間の推論を予定しているなら、短時間のテストだけでなく、アクティブクーラー(ファン)は安価で価値ある追加投資です。',
          },
          {
            q: 'AIアクセラレータHATを使ってPi 5を高速化できますか?',
            a: 'Raspberry Piエコシステム向けにサードパーティ製のAIアクセラレータ拡張ボードはいくつか存在しますが、llama.cpp/Ollamaのサポートは2026年7月時点で一貫性がなく、主流の十分に文書化された経路ではありません — 信頼できるアップグレードではなく実験的な選択肢として扱ってください。',
          },
          {
            q: 'Raspberry Pi 5はローカルLLMを使った音声アシスタントに向いていますか?',
            a: '非常に小さいモデルと現実的な遅延の期待を持てば可能です — このモデルサイズとハードウェアでは応答あたり数秒が一般的です。遅くオフラインの趣味用アシスタントとして機能しますが、キビキビとは感じません。',
          },
          {
            q: 'Pi 5でどんなローカルLLMにも必要な最小RAMは?',
            a: '8GB構成が快適な体験のための実用上の最低ラインです。4GB構成は技術的には1Bモデルを読み込めますが、デバイス上で動く他のもののための余裕がほとんど残りません。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '関連記事',
        items: [
          '[6GB VRAMに最適なローカルLLM](/prompt-bites/best-local-llm-6gb-vram) — 本当に実用的な低予算GPU代替案',
          '[7Bモデルにはどれだけのメモリが必要?](/prompt-bites/how-much-ram-for-7b-model) — 7BがPi 5には手が届かない理由',
          '[常時稼働Ollamaサーバーに最適なミニPC](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — より実用的な常時稼働の代替案',
        ],
      },
    },
  },
  ko: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-ko.png',
    title: 'Raspberry Pi 5에서 로컬 LLM을 구동할 수 있는가?',
    seoTitle: 'Raspberry Pi 5 로컬 LLM: 실제로 되는 것 (2026)',
    metaDescription: '가능하지만 아주 작은 모델만: Raspberry Pi 5(8GB)는 llama.cpp를 통해 Q4의 1B-3B 모델을 CPU에서 초당 약 2-5토큰으로 구동합니다. GPU 가속은 없습니다.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Raspberry Pi 5를 로컬 LLM 프로젝트에 고려하는 애호가',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>예, 하지만 작은 모델에 한합니다 — Raspberry Pi 5(8GB)는 llama.cpp를 통해 Q4 양자화의 1B-3B 모델을 CPU에서 초당 약 2-5토큰으로 구동합니다.</strong> GPU 가속은 사용할 수 없습니다. Pi 5의 VideoCore VII GPU는 llama.cpp의 추론 백엔드에서 지원되지 않으므로, 모든 것이 쿼드코어 CPU에서 실행됩니다.',
    toc: [
      { label: '솔직한 답변: 작은 모델만, 그것도 느리게', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 대 가장 저렴한 GPU 대안', anchor: '#comparison' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '관련 읽을거리', anchor: '#related' },
    ],
    quickAnswerTop: {
      ko: {
        question: 'Raspberry Pi 5에서 로컬 LLM을 구동할 수 있습니까?',
        answer: '예, 하지만 아주 작은 모델만 가능합니다 — Raspberry Pi 5(8GB)는 llama.cpp를 통해 Q4의 1B-3B 모델을 CPU에서 초당 약 2-5토큰으로 구동합니다. GPU 가속은 사용할 수 없습니다.',
        bullets: [
          '8GB Raspberry Pi 5를 구매하십시오 — 4GB 모델은 1B 모델과 OS를 위한 여유조차 너무 부족합니다.',
          '현실적인 모델 범위: Q4의 Llama 3.2 1B/3B나 Qwen3 0.6B — 더 큰 모델은 실용적이지 않을 만큼 느립니다.',
          'GPU 가속 없음: llama.cpp는 Pi 5의 VideoCore VII GPU를 지원하지 않습니다 — 모든 것이 CPU에서 실행됩니다.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '예, 하지만 Q4의 1B-3B 모델만 가능합니다 — 더 큰 모델은 Pi 5 하드웨어에서 실용적이지 않을 만큼 느립니다',
          '8GB 구성을 구매하십시오 — 4GB 모델은 모델과 OS를 위한 여유가 너무 부족합니다',
          'CPU에서 초당 약 2-5토큰을 예상하십시오 — llama.cpp를 통한 GPU 가속 경로는 존재하지 않습니다',
          'Pi 5는 재미있는 학습 프로젝트이지, 실용적인 일상용 로컬 LLM 기기는 아닙니다',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '솔직한 답변: 작은 모델만, 그것도 느리게',
        content: [
          '<strong>Raspberry Pi 5는 로컬 LLM을 구동할 수 있지만, Q4 양자화의 1B-3B 파라미터 범위 — Llama 3.2 1B, Llama 3.2 3B, Qwen3 0.6B 같은 모델 — 안에서만 llama.cpp를 통해 초당 약 2-5토큰으로 가능합니다.</strong> 이 속도는 가벼운 실험에는 사용할 만하지만, 더 긴 응답에서는 타이핑 속도보다 눈에 띄게 느리며 GPU를 갖춘 어떤 기기보다도 훨씬 뒤처집니다.',
          '4GB가 아니라 8GB 구성을 구매하십시오. 1B 모델과 Raspberry Pi OS 오버헤드만으로도 4GB에서는 여유가 거의 없으며, 편안한 컨텍스트 윈도우와 기기에서 함께 실행되는 다른 소프트웨어를 위해 추가 메모리가 필요합니다.',
          '사용 가능한 GPU 가속 경로가 없습니다. Pi 5의 통합 VideoCore VII GPU는 llama.cpp의 추론 백엔드에서 지원되지 않으며(현재 LLM 추론을 위해 이를 대상으로 하는 Vulkan이나 OpenCL 경로가 없습니다), 모든 토큰이 쿼드코어 ARM CPU에서 계산됩니다. Pi 5 로컬 LLM 설정을 교육용 프로젝트나 매우 가벼운 어시스턴트로 취급하십시오 — 예산형이라도 GPU를 갖춘 어떤 하드웨어의 대체재는 아닙니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Amazon에서 Raspberry Pi 5 8GB 가격 확인하기',
          },
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Amazon에서 Raspberry Pi 5 액티브 쿨러 가격 확인하기',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 대 가장 저렴한 GPU 대안',
        content: [
          '300달러 이하 GPU 가이드에서 다루는 가장 저렴한 GPU조차 7B 모델을 초당 15-20토큰으로 구동합니다 — Pi 5의 최상의 경우보다 몇 배 작은 크기의 모델에서 몇 배 더 빠릅니다. Pi 5의 매력은 작은 크기, 낮은 전력 소비, 참신함이지, 원시 성능이 아닙니다.',
          '취미 프로젝트가 아니라 진정으로 유용한 상시 가동 로컬 LLM 어시스턴트가 목표라면, 중고 GPU나 미니 PC가 더 실용적인 투자입니다 — 300달러 이하 GPU 가이드나 상시 가동 Ollama 서버 미니 PC 가이드를 참고하십시오.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Raspberry Pi 5는 LLM 추론에 능동 냉각이 필요합니까?',
            a: 'LLM 추론 같은 지속적인 CPU 집중 워크로드는 일상적인 사용보다 Pi 5를 더 따뜻하게 만듭니다. 짧은 테스트가 아니라 장시간 추론을 계획한다면 액티브 쿨러(팬)는 저렴하면서도 가치 있는 추가 요소입니다.',
          },
          {
            q: 'AI 가속기 햇을 사용해 Pi 5의 속도를 높일 수 있습니까?',
            a: 'Raspberry Pi 생태계용 서드파티 AI 가속기 추가 보드가 일부 존재하지만, llama.cpp/Ollama의 지원은 2026년 7월 기준 일관성이 없고 잘 문서화된 주류 경로가 아닙니다 — 신뢰할 수 있는 업그레이드가 아니라 실험적인 옵션으로 취급하십시오.',
          },
          {
            q: 'Raspberry Pi 5는 로컬 LLM을 갖춘 음성 비서에 좋습니까?',
            a: '매우 작은 모델과 현실적인 지연 시간 기대치가 있을 때만 가능합니다 — 이 모델 크기와 하드웨어에서는 응답당 몇 초가 일반적입니다. 느린 오프라인 취미 어시스턴트로는 작동하지만 민첩하게 느껴지지는 않을 것입니다.',
          },
          {
            q: 'Pi 5에서 어떤 로컬 LLM이든 실행하는 데 필요한 최소 RAM은 얼마입니까?',
            a: '8GB 구성이 편안한 경험을 위한 실질적인 최소치입니다. 4GB 구성은 기술적으로 1B 모델을 로드할 수 있지만 기기에서 실행되는 다른 것을 위한 여유가 거의 남지 않습니다.',
          },
        ],
      },
      related: {
        id: 'related',
        title: '관련 읽을거리',
        items: [
          '[6GB VRAM을 위한 최적의 로컬 LLM](/prompt-bites/best-local-llm-6gb-vram) — 진정으로 실용적인 저예산 GPU 대안',
          '[7B 모델에는 얼마나 많은 RAM이 필요한가?](/prompt-bites/how-much-ram-for-7b-model) — 7B가 Pi 5에는 왜 무리인지',
          '[상시 가동 Ollama 서버를 위한 최적의 미니 PC](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — 더 실용적인 상시 가동 대안',
        ],
      },
    },
  },
  pt: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-pt.png',
    title: 'É Possível Rodar um LLM Local em um Raspberry Pi 5?',
    seoTitle: 'LLM Local no Raspberry Pi 5: O Que Realmente Funciona (2026)',
    metaDescription: 'Sim, mas apenas modelos pequenos: o Raspberry Pi 5 (8GB) roda modelos de 1B-3B em Q4 via llama.cpp a 2-5 tokens/s na CPU, sem aceleração de GPU.',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: 'Entusiastas considerando um Raspberry Pi 5 para um projeto de LLM local',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>Sim, mas apenas para modelos pequenos — um Raspberry Pi 5 (8 GB) roda modelos de 1B-3B em quantização Q4 através do llama.cpp, a aproximadamente 2-5 tokens por segundo em sua CPU.</strong> Não há aceleração de GPU disponível: a GPU VideoCore VII do Pi 5 não é suportada pelos backends de inferência do llama.cpp, então tudo roda na CPU quad-core.',
    toc: [
      { label: 'A Resposta Honesta: Só Modelos Pequenos, e Devagar', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 vs a Alternativa de GPU Mais Barata', anchor: '#comparison' },
      { label: 'Perguntas Frequentes', anchor: '#faq' },
      { label: 'Leitura Relacionada', anchor: '#related' },
    ],
    quickAnswerTop: {
      pt: {
        question: 'É possível rodar um LLM local em um Raspberry Pi 5?',
        answer: 'Sim, mas apenas modelos minúsculos — um Raspberry Pi 5 (8GB) roda modelos de 1B-3B em Q4 via llama.cpp em sua CPU, a aproximadamente 2-5 tokens/s. Não há aceleração de GPU disponível.',
        bullets: [
          'Compre o Raspberry Pi 5 de 8 GB — o modelo de 4 GB deixa espaço demasiado pequeno mesmo para um modelo de 1B mais o sistema operacional.',
          'Faixa realista de modelos: Llama 3.2 1B/3B ou Qwen3 0.6B em Q4 — qualquer coisa maior é impraticavelmente lenta.',
          'Sem aceleração de GPU: o llama.cpp não suporta a GPU VideoCore VII do Pi 5 — tudo roda na CPU.',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Sim, mas apenas modelos de 1B-3B em Q4 — qualquer coisa maior é impraticavelmente lenta no hardware do Pi 5',
          'Compre a configuração de 8 GB — o modelo de 4 GB deixa espaço demasiado pequeno para modelo mais sistema operacional',
          'Espere aproximadamente 2-5 tokens/s na CPU — nenhum caminho de aceleração de GPU existe via llama.cpp',
          'Um Pi 5 é um projeto de aprendizado divertido, não uma máquina prática de LLM local para uso diário',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: 'A Resposta Honesta: Só Modelos Pequenos, e Devagar',
        content: [
          '<strong>Um Raspberry Pi 5 consegue rodar um LLM local, mas apenas dentro da faixa de 1B-3B parâmetros em quantização Q4 — modelos como o Llama 3.2 1B, o Llama 3.2 3B ou o Qwen3 0.6B — a aproximadamente 2-5 tokens por segundo através do llama.cpp.</strong> Essa velocidade é utilizável para experimentação casual, mas visivelmente mais lenta que a velocidade de digitação para respostas mais longas, e bem atrás de qualquer máquina equipada com GPU.',
          'Compre a configuração de 8 GB, não a de 4 GB. Mesmo um modelo de 1B mais a sobrecarga do Raspberry Pi OS deixa pouco espaço em 4 GB, e você vai querer a memória extra para uma janela de contexto confortável e qualquer outro software rodando junto do modelo.',
          'Não há caminho de aceleração de GPU disponível: a GPU integrada VideoCore VII do Pi 5 não é suportada pelos backends de inferência do llama.cpp (nenhum caminho Vulkan ou OpenCL atualmente a tem como alvo para inferência de LLM), então cada token é computado na CPU ARM quad-core. Trate uma configuração de LLM local em um Pi 5 como um projeto educacional ou um assistente muito leve — não um substituto para qualquer hardware equipado com GPU, mesmo um econômico.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5 (8GB)',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: 'Confira o preço do Raspberry Pi 5 8GB na Amazon',
          },
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 Active Cooler',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: 'Confira o preço do cooler ativo do Raspberry Pi 5 na Amazon',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 vs a Alternativa de GPU Mais Barata',
        content: [
          'Mesmo a GPU mais barata coberta no guia de GPU abaixo de US$ 300 roda modelos de 7B a 15-20 tokens/s — várias vezes mais rápido que o melhor caso de um Pi 5 em modelos de uma fração do tamanho. O apelo do Pi 5 é seu tamanho pequeno, baixo consumo de energia e novidade, não capacidade bruta.',
          'Se seu objetivo é um assistente de LLM local genuinamente útil e sempre ligado, em vez de um projeto hobby, uma GPU usada ou um mini PC é o investimento mais prático — veja o guia de GPU abaixo de US$ 300 ou o guia de mini PC para servidor Ollama sempre ligado.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O Raspberry Pi 5 precisa de resfriamento ativo para inferência de LLM?',
            a: 'Cargas de trabalho sustentadas e pesadas de CPU, como a inferência de LLM, vão deixar o Pi 5 mais quente que o uso casual. Um cooler ativo (ventoinha) é uma adição barata e que vale a pena se você planeja rodar inferência por períodos prolongados, em vez de testes breves.',
          },
          {
            q: 'Posso usar um HAT acelerador de IA para acelerar o Pi 5?',
            a: 'Algumas placas acessórias aceleradoras de IA de terceiros existem para o ecossistema Raspberry Pi, mas o suporte do llama.cpp/Ollama a elas é inconsistente e não é um caminho mainstream e bem documentado em julho de 2026 — trate isso como uma opção experimental, não uma atualização confiável.',
          },
          {
            q: 'Um Raspberry Pi 5 é bom para rodar um assistente de voz com LLM local?',
            a: 'Apenas com um modelo muito pequeno e expectativas realistas de latência — alguns segundos por resposta é típico nesse tamanho de modelo e hardware. Pode funcionar como um assistente hobby lento e offline, mas não vai parecer ágil.',
          },
          {
            q: 'Qual é a RAM mínima para qualquer LLM local em um Pi 5?',
            a: 'A configuração de 8 GB é o mínimo prático para uma experiência confortável. A configuração de 4 GB tecnicamente consegue carregar um modelo de 1B, mas deixa muito pouco espaço para qualquer outra coisa rodando no dispositivo.',
          },
        ],
      },
      related: {
        id: 'related',
        title: 'Leitura Relacionada',
        items: [
          '[Melhor LLM Local para 6 GB de VRAM](/prompt-bites/best-local-llm-6gb-vram) — uma alternativa de GPU de baixo orçamento genuinamente prática',
          '[Quanta RAM um Modelo de 7B Precisa?](/prompt-bites/how-much-ram-for-7b-model) — por que 7B está fora de alcance para um Pi 5',
          '[Melhor Mini PC para um Servidor Ollama Sempre Ligado](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — uma alternativa mais prática sempre ligada',
        ],
      },
    },
  },
  zh: {
    theme: 'Quick Answers',
    heroImage: '/images/local-llm-raspberry-pi-5-overview-hero-zh.png',
    title: 'Raspberry Pi 5 能运行本地 LLM 吗？',
    seoTitle: 'Raspberry Pi 5 本地 LLM 实测：真正能用的方案（2026）',
    metaDescription: '可以，但仅限极小模型：Raspberry Pi 5（8GB）通过 llama.cpp 以 Q4 运行 1B-3B 模型，CPU 上速度约每秒 2-5 个 token。没有 GPU 加速可用。',
    publishDate: '2026-07-14',
    dateModified: '2026-07-14',
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-01-14',
    current_models_mentioned: ['Llama 3.2 1B', 'Llama 3.2 3B', 'Qwen3 0.6B'],
    current_hardware_mentioned: ['Raspberry Pi 5 8GB'],
    educationalLevel: 'Intermediate',
    audience: '考虑将 Raspberry Pi 5 用于本地 LLM 项目的爱好者',
    affiliateDisclosure: true,
    siblingBites: ['best-local-llm-6gb-vram', 'how-much-ram-for-7b-model'],
    is_living_page: false,
    leadAnswerBlock: '<strong>可以，但仅限小型模型——Raspberry Pi 5（8 GB）通过 llama.cpp 以 Q4 量化运行 1B-3B 模型，CPU 上速度约为每秒 2-5 个 token。</strong>没有可用的 GPU 加速：Pi 5 的 VideoCore VII GPU 不被 llama.cpp 的推理后端支持，所有计算都在四核 CPU 上进行。',
    toc: [
      { label: '诚实的答案：仅限小模型，且速度较慢', anchor: '#best-pick' },
      { label: 'Raspberry Pi 5 对比最便宜的 GPU 替代方案', anchor: '#comparison' },
      { label: '常见问题', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related' },
    ],
    quickAnswerTop: {
      zh: {
        question: 'Raspberry Pi 5 能运行本地 LLM 吗？',
        answer: '可以，但仅限极小模型——Raspberry Pi 5（8GB）通过 llama.cpp 在 CPU 上以 Q4 运行 1B-3B 模型，速度约每秒 2-5 个 token。没有可用的 GPU 加速。',
        bullets: [
          '购买 8 GB 版 Raspberry Pi 5——4 GB 版本即使运行 1B 模型加操作系统，余量也太少。',
          '现实可行的模型范围：Q4 下的 Llama 3.2 1B/3B 或 Qwen3 0.6B——更大的模型会慢得不切实际。',
          '没有 GPU 加速：llama.cpp 不支持 Pi 5 的 VideoCore VII GPU——一切都在 CPU 上运行。',
        ],
        updatedDate: '2026-07',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '可以，但仅限 Q4 下的 1B-3B 模型——更大的模型在 Pi 5 硬件上会慢得不切实际',
          '购买 8 GB 配置——4 GB 版本为模型加操作系统留出的余量太少',
          '预计 CPU 上速度约每秒 2-5 个 token——llama.cpp 没有可用的 GPU 加速路径',
          'Pi 5 是一个有趣的学习项目,而非实用的日常本地 LLM 机器',
        ],
      },
      bestPick: {
        id: 'best-pick',
        title: '诚实的答案：仅限小模型，且速度较慢',
        content: [
          '<strong>Raspberry Pi 5 可以运行本地 LLM，但仅限于 Q4 量化下 1B-3B 参数范围内的模型——如 Llama 3.2 1B、Llama 3.2 3B 或 Qwen3 0.6B——通过 llama.cpp 运行时速度约为每秒 2-5 个 token。</strong>这一速度足以用于休闲实验,但对于较长的回复明显慢于打字速度，也远远落后于任何配备 GPU 的机器。',
          '请购买 8 GB 配置，而非 4 GB 版本。即使是一个 1B 模型加上 Raspberry Pi OS 的开销，在 4 GB 上留出的余量也很少，你会需要额外的内存来获得舒适的上下文窗口以及与模型同时运行的其他软件。',
          '没有可用的 GPU 加速路径：Pi 5 集成的 VideoCore VII GPU 不被 llama.cpp 的推理后端支持（目前没有针对它的 Vulkan 或 OpenCL 路径用于 LLM 推理），因此每个 token 都由四核 ARM CPU 计算完成。请把 Pi 5 本地 LLM 配置当作一个教育性项目或非常轻量的助手——而非任何配备 GPU 硬件（哪怕是预算型）的替代品。',
        ],
        affiliateLinks: [
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%208GB',
            productName: 'Raspberry Pi 5（8GB）',
            productCategory: 'sbc',
            priceRange: '80-90',
            label: '在 Amazon 查看 Raspberry Pi 5 8GB 价格',
          },
          {
            url: 'https://www.amazon.com/s?k=Raspberry%20Pi%205%20active%20cooler',
            productName: 'Raspberry Pi 5 主动散热器',
            productCategory: 'accessory',
            priceRange: '5-10',
            label: '在 Amazon 查看 Raspberry Pi 5 主动散热器价格',
          },
        ],
      },
      comparison: {
        id: 'comparison',
        title: 'Raspberry Pi 5 对比最便宜的 GPU 替代方案',
        content: [
          '即便是 300 美元以下 GPU 指南中最便宜的显卡，也能以每秒 15-20 个 token 的速度运行 7B 模型——比 Pi 5 在体积小得多的模型上的最佳表现快数倍。Pi 5 的吸引力在于其小巧的体积、低功耗和新颖性，而非原始性能。',
          '如果你的目标是一个真正有用的常开本地 LLM 助手,而非业余爱好项目，二手 GPU 或迷你 PC 是更实用的投资——参见 300 美元以下 GPU 指南或常开 Ollama 服务器迷你 PC 指南。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Raspberry Pi 5 做 LLM 推理需要主动散热吗？',
            a: '像 LLM 推理这样持续的 CPU 密集型工作负载,会让 Pi 5 的温度高于日常使用时。如果你计划长时间运行推理，而不只是简单测试，主动散热器（风扇）是一项便宜且值得添加的配件。',
          },
          {
            q: '我能用 AI 加速扩展板来提升 Pi 5 的速度吗？',
            a: 'Raspberry Pi 生态系统中存在一些第三方 AI 加速扩展板，但截至 2026 年 7 月，llama.cpp/Ollama 对它们的支持并不一致，也不是主流的、有良好文档的路径——请将其视为实验性选项,而非可靠的升级方案。',
          },
          {
            q: 'Raspberry Pi 5 适合搭配本地 LLM 运行语音助手吗？',
            a: '只有在使用非常小的模型和现实的延迟预期下才可行——这一模型规模和硬件下，每次响应通常需要几秒钟。它可以作为一个缓慢的离线业余助手,但不会感觉灵敏。',
          },
          {
            q: 'Pi 5 上运行任何本地 LLM 的最低内存要求是多少？',
            a: '8 GB 配置是获得舒适体验的实际最低要求。4 GB 配置技术上可以加载一个 1B 模型，但为设备上运行的其他任何东西留出的余量非常少。',
          },
        ],
      },
      related: {
        id: 'related',
        title: '相关阅读',
        items: [
          '[6 GB 显存的最佳本地 LLM](/prompt-bites/best-local-llm-6gb-vram) — 真正实用的低预算 GPU 替代方案',
          '[7B 模型需要多少内存？](/prompt-bites/how-much-ram-for-7b-model) — 为什么 7B 对 Pi 5 来说遥不可及',
          '[常开 Ollama 服务器的最佳迷你 PC](/prompt-bites/best-mini-pc-for-ollama-server-always-on) — 更实用的常开替代方案',
        ],
      },
    },
  },
}
